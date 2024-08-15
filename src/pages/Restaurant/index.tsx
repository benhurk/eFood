import { useContext } from "react";
import { Link, useParams } from "react-router-dom";

import { useGetCurrentRestaurantQuery } from "../../services/api";
import { ModalContext } from "../../contexts/ModalContext";

import HeaderContainer from "../../styles/HeaderContainer";
import SiteTitle from "../../components/SiteTitle";
import CartText from "../../styles/CartText";
import { BackLink, HeaderInfo, ProductList } from "./styled";
import RestaurantBanner from "../../components/RestaurantBanner";
import ProductCard from "../../components/ProductCard";
import Modal from '../../components/Modal'

export default function Restaurant() {
    const { id } = useParams();
    const { data: restaurant } = useGetCurrentRestaurantQuery(id!);

    const {content: modalContent} = useContext(ModalContext);

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
                                            image: item.foto,
                                            title: item.nome,
                                            text: item.descricao,
                                            info: item.porcao,
                                            price: item.preco
                                        }} />
                                    </li>
                                ))
                            }
                        </ProductList>
                    </div>
                    <Modal title={modalContent.title} image={modalContent.image} text={modalContent.text} info={modalContent.info} price={modalContent.price} />
                </section>
            </main>
        </>
    )
}