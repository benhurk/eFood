import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { setSidebarContent, toggleSidebar } from "../../store/reducers/sidebar";
import { useGetCurrentRestaurantQuery } from "../../services/api";
import { RootReducer } from "../../store";
import { filterProducts } from "../../utils/filterSearch";

import HeaderContainer from "../../styles/HeaderContainer";
import CartText from "../../styles/CartText";
import { BackLink, HeaderInfo, ProductList, RestaurantDescription } from "./styled";
import SiteTitle from "../../components/SiteTitle";
import RestaurantBanner from "../../components/RestaurantBanner";
import ProductCard from "../../components/ProductCard";
import Modal from '../../components/Modal'
import Sidebar from "../../components/Sidebar";
import Loader from "../../components/Loader";

import cartIcon from '../../assets/cart-icon.svg';
import backIcon from '../../assets/back-icon.svg';
import Input from "../../components/Input";
import NotFoundWarn from "../../styles/SearchNotFound";
import ContentHeader from "../../styles/SectionHeader";

type RestaurantParams = {
    id: string;
}

export default function Restaurant() {
    const [search, setSearch] = useState('');

    const { id } = useParams<RestaurantParams>() as RestaurantParams;
    const { data: restaurant } = useGetCurrentRestaurantQuery(id);
    const { items } = useSelector((state: RootReducer) => state.cart);
    const dispatch = useDispatch();

    return (
        <>
            <HeaderContainer>
                <div className="container">
                    <HeaderInfo>
                        <li style={{ justifySelf: 'start' }}>
                            <BackLink to='/'><img src={backIcon} />Restaurantes</BackLink>
                        </li>
                        <li style={{ justifySelf: 'center' }}>
                            <Link to='/'>
                                <SiteTitle />
                            </Link>
                        </li>
                        <li style={{ justifySelf: 'end' }}>
                            <CartText onClick={() => { dispatch(toggleSidebar()); dispatch(setSidebarContent('Cart')) }}>
                                <img src={cartIcon} />
                                <span>{items.length}</span>
                            </CartText>
                        </li>
                    </HeaderInfo>
                </div>
                { restaurant ? <RestaurantBanner image={restaurant.capa} type={restaurant.tipo} name={restaurant.titulo} /> : <Loader /> }
            </HeaderContainer>
            <main>
                    {
                        !restaurant ? <Loader /> :
                        <>
                        <ContentHeader>
                            <div className="container">
                                <RestaurantDescription>&bull; {restaurant.descricao}</RestaurantDescription>
                                <Input label='O que vai querer?' elementId='search_product' value={search}
                                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearch(e.currentTarget.value)} />
                            </div>
                        </ContentHeader>
                        <div className="container">
                            {
                                filterProducts(restaurant.cardapio, search).length > 0 ?
                                <ProductList>
                                    {
                                        filterProducts(restaurant.cardapio, search)
                                        .map(item => (
                                            <li key={item.id}>
                                                <ProductCard productInfo={{
                                                    content: {
                                                        image: item.foto,
                                                        title: item.nome,
                                                        text: item.descricao,
                                                        info: item.porcao,
                                                        price: item.preco
                                                    },
                                                    product: {...item, quantity: 1}
                                                }} />
                                            </li>
                                        ))
                                    }
                                </ProductList>
                                :
                                <NotFoundWarn>Nada encontrado, verifique sua busca.</NotFoundWarn>
                            }
                        </div>
                        <Modal />
                        </>
                    }
            </main>
            <Sidebar />
        </>
    )
}