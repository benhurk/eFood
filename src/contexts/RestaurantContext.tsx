import React, { SetStateAction, createContext } from "react";
import { RestaurantType } from "../models/restaurant";
import { useGetRestaurantsQuery } from "../services/api";

type Props = {
    children: React.ReactNode;
}

type ContextType = {
    restaurants: RestaurantType[] | undefined;
    setRestaurants?: React.Dispatch<SetStateAction<RestaurantType[]>>;
}

export const RestaurantContext = createContext<ContextType>({
    restaurants: [],
    setRestaurants: () => {}
});

export default function RestaurantProvider({children}: Props) {
    const { data: restaurants } = useGetRestaurantsQuery();

    return (
        <RestaurantContext.Provider value={{restaurants}}>{children}</RestaurantContext.Provider>
    )
}