import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { RestaurantType } from "../models/restaurant";
import Order, { OrderResponse } from "../models/order";

const api = createApi({
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://fake-api-tau.vercel.app/api/efood/',
    }),
    endpoints: (builder) => ({
        getRestaurants: builder.query<RestaurantType[], void>({
            query: () => 'restaurantes'
        }),
        getCurrentRestaurant: builder.query<RestaurantType, string>({
            query: (id) => `restaurantes/${id}`
        }),
        order: builder.mutation<OrderResponse, Order>({
            query: (body) => ({
                url: 'checkout',
                method: 'POST',
                body
            })
        })
    })
})

export const { useGetRestaurantsQuery, useGetCurrentRestaurantQuery, useOrderMutation } = api;

export default api;