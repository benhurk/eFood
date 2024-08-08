import banner from '../../assets/cardimg.png';

import HeaderContainer from "../../styles/HeaderContainer";
import SiteTitle from "../../components/SiteTitle";
import { RestaurantList, SubTitle } from "./styled";
import RestaurantCard from "../../components/RestaurantCard";

export default function Home() {
    return (
        <>
            <HeaderContainer>
                <SiteTitle />
                <SubTitle>Viva experiências gastronômicas no conforto da sua casa.</SubTitle>
            </HeaderContainer>
            <main>
                <div className='container'>
                    <RestaurantList>
                        <li>
                            <RestaurantCard banner={banner} name='Hioki Sushi' rating='4.9' description='Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida. Experimente o Japão sem sair do lar com nosso delivery!' tags={['Japonesa', 'Destaque']} />
                        </li>
                        <li>
                            <RestaurantCard banner={banner} name='Hioki Sushi' rating='4.9' description='Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida. Experimente o Japão sem sair do lar com nosso delivery!' tags={['Japonesa', 'Destaque']} />
                        </li>
                        <li>
                            <RestaurantCard banner={banner} name='Hioki Sushi' rating='4.9' description='Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida. Experimente o Japão sem sair do lar com nosso delivery!' tags={['Japonesa', 'Destaque']} />
                        </li>
                    </RestaurantList>
                </div>
            </main>
        </>
    )
}