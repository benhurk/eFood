import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { ProductType } from "../../models/restaurant";

type CartState = {
    items: ProductType[];
}

const initialState: CartState = {
    items: []
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        add: (state, action: PayloadAction<ProductType>) => {
            state.items.push(action.payload);
        },
        remove: (state, action: PayloadAction<number>) => {
            state.items = state.items.filter(item => item.id !== action.payload);
        }
    }
})

export const { add, remove } = cartSlice.actions;
export default cartSlice.reducer;