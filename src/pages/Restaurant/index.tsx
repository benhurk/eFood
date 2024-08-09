import { Link } from "react-router-dom";

import HeaderContainer from "../../styles/HeaderContainer";
import SiteTitle from "../../components/SiteTitle";
import CartText from "../../styles/CartText";
import { BackLink, HeaderInfo, ProductList } from "./styled";
import RestaurantBanner from "../../components/RestaurantBanner";
import ProductCard from "../../components/ProductCard";

import productImage from '../../assets/pizza.png';
import Modal from '../../components/Modal'

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
                    <Modal name="Pizza Marguerita" image={productImage} info='A pizza Margherita é uma pizza clássica da culinária italiana, reconhecida por sua simplicidade e sabor inigualável. Ela é feita com uma base de massa fina e crocante, coberta com molho de tomate fresco, queijo mussarela de alta qualidade, manjericão fresco e azeite de oliva extra-virgem. A combinação de sabores é perfeita, com o molho de tomate suculento e ligeiramente ácido, o queijo derretido e cremoso e as folhas de manjericão frescas, que adicionam um toque de sabor herbáceo. É uma pizza simples, mas deliciosa, que agrada a todos os paladares e é uma ótima opção para qualquer ocasião. Serve: de 2 a 3 pessoas' price='R$60,90' />
                </section>
            </main>
        </>
    )
}