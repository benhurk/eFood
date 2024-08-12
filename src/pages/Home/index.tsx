import { useContext } from 'react';

import HeaderContainer from "../../styles/HeaderContainer";
import SiteTitle from "../../components/SiteTitle";
import { RestaurantList, SubTitle } from "./styled";
import RestaurantCard from "../../components/RestaurantCard";
import { RestaurantContext } from '../../contexts/RestaurantContext';

export default function Home() {
    const {restaurants} = useContext(RestaurantContext);

    return (
        <>
            <HeaderContainer>
                <SiteTitle />
                <SubTitle>Viva experiências gastronômicas no conforto da sua casa.</SubTitle>
            </HeaderContainer>
            <main>
                <div className='container'>
                    <RestaurantList>
                        {
                            restaurants.map(r => (
                                <li key={r.id}>
                                    <RestaurantCard id={r.id} banner={r.capa} name={r.titulo} rating={r.avaliacao} description={r.descricao} tags={[`${r.destacado ? 'Destaque da semana' : ''}`, r.tipo]}  />
                                </li>
                            ))
                        }
                    </RestaurantList>
                </div>
            </main>
        </>
    )
}