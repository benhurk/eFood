import { Link } from "react-router-dom";

import HeaderContainer from "../../styles/HeaderContainer";
import SiteTitle from "../../components/SiteTitle";
import CartText from "../../styles/CartText";
import { BackLink, HeaderInfo, ProductList } from "./styled";
import RestaurantBanner from "../../components/RestaurantBanner";
import ProductCard from "../../components/ProductCard";

import productImage from '../../assets/pizza.png';

export default function Restaurant() {
    return (
        <>
            <HeaderContainer>
                <div className="container">
                    <HeaderInfo>
                        <li style={{textAlign: 'start'}}>
                            <BackLink to='/'>Restaurantes</BackLink>
                        </li>
                        <li>
                            <Link to='/'>
                                <SiteTitle />
                            </Link>
                        </li>
                        <li style={{textAlign: 'end'}}>
                            <CartText>{`0 produto(s) no carrinho`}</CartText>
                        </li>
                    </HeaderInfo>
                </div>
                <RestaurantBanner />
            </HeaderContainer>
            <main>
                <section>
                    <div className="container">
                        <ProductList>
                            <li>
                                <ProductCard image={productImage} title="Pizza Marguerita" description="A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!" />
                            </li>
                            <li>
                                <ProductCard image={productImage} title="Pizza Marguerita" description="A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!" />
                            </li>
                            <li>
                                <ProductCard image={productImage} title="Pizza Marguerita" description="A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!" />
                            </li>
                            <li>
                                <ProductCard image={productImage} title="Pizza Marguerita" description="A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!" />
                            </li>
                        </ProductList>
                    </div>
                </section>
            </main>
        </>
    )
}