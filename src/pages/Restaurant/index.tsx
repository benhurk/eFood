import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { setSidebarContent, toggleSidebar } from "../../store/reducers/sidebar";
import { useGetCurrentRestaurantQuery } from "../../services/api";
import { RootReducer } from "../../store";

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

type RestaurantParams = {
    id: string;
}

export default function Restaurant() {
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
                                {`${items.length} produto(s) no carrinho`}
                            </CartText>
                        </li>
                    </HeaderInfo>
                </div>
                {
                    restaurant ?
                        <RestaurantBanner image={restaurant.capa} type={restaurant.tipo} name={restaurant.titulo} />
                        :
                        <Loader />
                }
            </HeaderContainer>
            <main>
                {
                    restaurant ?
                        <div className="container">
                            <section>
                                <RestaurantDescription>&bull; {restaurant.descricao}</RestaurantDescription>
                            </section>
                            <ProductList>
                                {
                                    restaurant.cardapio.map(item => (
                                        <li key={item.id}>
                                            <ProductCard productInfo={{
                                                content: {
                                                    image: item.foto,
                                                    title: item.nome,
                                                    text: item.descricao,
                                                    info: item.porcao,
                                                    price: item.preco
                                                },
                                                product: item
                                            }} />
                                        </li>
                                    ))
                                }
                            </ProductList>
                            <Modal />
                        </div>
                        :
                        <Loader />
                }
            </main>
            <Sidebar />
        </>
    )
}