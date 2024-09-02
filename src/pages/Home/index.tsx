import { useContext, useState } from 'react';

import { filterRestaurants } from '../../utils/filterSearch';

import HeaderContainer from "../../styles/HeaderContainer";
import SiteTitle from "../../components/SiteTitle";
import { RestaurantList, SearchSection, SubTitle } from "./styled";
import RestaurantCard from "../../components/RestaurantCard";
import { RestaurantContext } from '../../contexts/RestaurantContext';
import Loader from '../../components/Loader';
import SearchContainer from '../../styles/SearchContainer';
import Input from '../../components/Input';
import NotFoundWarn from '../../styles/SearchNotFound';

export default function Home() {
    const [search, setSearch] = useState('');
    const { restaurants } = useContext(RestaurantContext);

    return (
        <>
            <HeaderContainer>
                <SiteTitle />
                <SubTitle>Viva experiências gastronômicas no conforto da sua casa.</SubTitle>
            </HeaderContainer>
            <main>
                <div className='container'>
                    <SearchSection>
                        <SearchContainer>
                            <Input label='Onde vai pedir?' elementId='restaurant_search' value={search} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearch(e.target.value)} />
                        </SearchContainer>
                    </SearchSection>
                    {
                        !restaurants ? <Loader /> : <>
                            {
                                filterRestaurants(restaurants, search).length > 0 ? 
                                <RestaurantList>
                                    {
                                        filterRestaurants(restaurants, search).map(r => (
                                            <li key={r.id}>
                                                <RestaurantCard id={r.id} banner={r.capa} name={r.titulo} rating={r.avaliacao} description={r.descricao} tags={[`${r.destacado ? 'Destaque da semana' : ''}`, r.tipo]} />
                                            </li>
                                        ))
                                    }
                                </RestaurantList>
                                :
                                <NotFoundWarn>Nada encontrado, verifique sua busca.</NotFoundWarn>
                            }
                        </>
                    }
                </div>
            </main>
        </>
    )
}