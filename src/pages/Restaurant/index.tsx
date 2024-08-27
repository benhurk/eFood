import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { setSidebarContent, toggleSidebar } from "../../store/reducers/sidebar";
import { useGetCurrentRestaurantQuery } from "../../services/api";
import { RootReducer } from "../../store";

import HeaderContainer from "../../styles/HeaderContainer";
import SiteTitle from "../../components/SiteTitle";
import CartText from "../../styles/CartText";
import { BackLink, HeaderInfo, ProductList } from "./styled";
import RestaurantBanner from "../../components/RestaurantBanner";
import ProductCard from "../../components/ProductCard";
import Modal from '../../components/Modal'
import Sidebar from "../../components/Sidebar";
import Loader from "../../components/Loader";

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
                        <li style={{ textAlign: 'start' }}>
                            <BackLink to='/'>Restaurantes</BackLink>
                        </li>
                        <li>
                            <Link to='/'>
                                <SiteTitle />
                            </Link>
                        </li>
                        <li style={{ textAlign: 'end' }}>
                            <CartText onClick={() => { dispatch(toggleSidebar()); dispatch(setSidebarContent('Cart')) }} >{`${items.length} produto(s) no carrinho`}</CartText>
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
                        <section>
                            <div className="container">
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
                            </div>
                            <Modal />
                        </section>
                        :
                        <Loader />
                }
            </main>
            <Sidebar />
        </>
    )
}