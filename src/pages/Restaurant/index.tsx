import { Link, useParams } from "react-router-dom";

import { useGetCurrentRestaurantQuery } from "../../services/api";

import HeaderContainer from "../../styles/HeaderContainer";
import SiteTitle from "../../components/SiteTitle";
import CartText from "../../styles/CartText";
import { BackLink, HeaderInfo, ProductList } from "./styled";
import RestaurantBanner from "../../components/RestaurantBanner";
import ProductCard from "../../components/ProductCard";
import Modal from '../../components/Modal'
import Cart from "../../components/Cart";

export default function Restaurant() {
    const { id } = useParams();
    const { data: restaurant } = useGetCurrentRestaurantQuery(id!);

    if (!restaurant) {
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
                                <CartText>{`0 produto(s) no carrinho`}</CartText>
                            </li>
                        </HeaderInfo>
                    </div>
                </HeaderContainer>
                <span>Carregando...</span>
            </>
        )
    }

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
                            <CartText>{`0 produto(s) no carrinho`}</CartText>
                        </li>
                    </HeaderInfo>
                </div>
                <RestaurantBanner image={restaurant.capa} type={restaurant.tipo} name={restaurant.titulo} />
            </HeaderContainer>
            <main>
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
            </main>
            <Cart />
        </>
    )
}