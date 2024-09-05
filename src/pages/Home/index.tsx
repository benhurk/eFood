import { useState } from 'react';

import { useGetRestaurantsQuery } from '../../services/api';
import { filterRestaurants } from '../../utils/filterSearch';

import HeaderContainer from "../../styles/HeaderContainer";
import SiteTitle from "../../components/SiteTitle";
import { RestaurantList, SubTitle } from "./styled";
import RestaurantCard from "../../components/RestaurantCard";
import Loader from '../../components/Loader';
import Input from '../../components/Input';
import NotFoundWarn from '../../styles/SearchNotFound';
import ContentHeader from '../../styles/SectionHeader';
import Select from '../../components/Select';

export default function Home() {
    const [search, setSearch] = useState('');
    const [typeFilter, setTypeFilter] = useState('');
    const { data: restaurants } = useGetRestaurantsQuery();

    return (
        <>
            <HeaderContainer>
                <SiteTitle />
                <SubTitle>Viva experiências gastronômicas no conforto da sua casa.</SubTitle>
            </HeaderContainer>
            <main>
                <ContentHeader>
                    <div className='container search_area'>
                        <Input label='Onde vai pedir?' elementId='restaurant_search' value={search} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearch(e.target.value)} />
                        <br />
                        {restaurants ? 
                            <Select label='Que tipo procura?' value={typeFilter} options={restaurants.map(r => r.tipo)} onChange={(option) => setTypeFilter(option)} /> :
                            <></>
                        }
                    </div>
                </ContentHeader>
                <div className='container'>
                    {
                        !restaurants ? <Loader /> : <>
                            {
                                filterRestaurants(restaurants, search, typeFilter).length > 0 ? 
                                <RestaurantList>
                                    {
                                        filterRestaurants(restaurants, search, typeFilter).map(r => (
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