import React, { SetStateAction, createContext, useState, useEffect } from "react";
import { RestaurantType } from "../models/restaurant";

type Props = {
    children: React.ReactNode;
}

type ContextType = {
    restaurants: RestaurantType[];
    setRestaurants?: React.Dispatch<SetStateAction<RestaurantType[]>>;
}

export const RestaurantContext = createContext<ContextType>({
    restaurants: [],
    setRestaurants: () => {}
});

export default function RestaurantProvider({children}: Props) {
    const [restaurants, setRestaurants] = useState<RestaurantType[]>([]);

    useEffect(() => {
        fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes')
            .then(res => res.json())
            .then(data => setRestaurants(data))
            .catch(error => { throw new Error(error) })
    }, [])

    return (
        <RestaurantContext.Provider value={{restaurants}}>{children}</RestaurantContext.Provider>
    )
}