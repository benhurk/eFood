import { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import HeaderContainer from "../../styles/HeaderContainer";
import SiteTitle from "../../components/SiteTitle";
import CartText from "../../styles/CartText";
import { BackLink, HeaderInfo, ProductList } from "./styled";
import RestaurantBanner from "../../components/RestaurantBanner";
import ProductCard from "../../components/ProductCard";
import Modal from '../../components/Modal'
import { RestaurantType } from "../../models/restaurant";
import { ModalContext } from "../../contexts/ModalContext";

export default function Restaurant() {
    const [restaurant, setRestaurant] = useState<RestaurantType>();
    const { id } = useParams();

    const {content: modalContent} = useContext(ModalContext);

    useEffect(() => {
        fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`)
            .then(res => res.json())
            .then(data => setRestaurant(data))
            .catch(error => { throw new Error(error) })
    }, [id])

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
                                        <ProductCard image={item.foto} title={item.nome} description={item.descricao} productInfo={{
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