import { ProductType, RestaurantType } from "../models/restaurant";

export function filterProducts(products: ProductType[], searchFor: string): ProductType[] {
    return products.filter(item => {
        return item.nome.toLowerCase().includes(searchFor.toLowerCase());
    })
}

export function filterRestaurants(restaurants: RestaurantType[], searchFor: string, /*type: string*/): RestaurantType[] {
    return restaurants.filter(r => {
        return r.titulo.toLowerCase().includes(searchFor.toLowerCase()) /*&& r.tipo.includes(type)*/;
    })
}