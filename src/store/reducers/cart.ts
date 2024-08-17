import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { ProductType } from "../../models/restaurant";

type CartState = {
    items: ProductType[];
    isOpen: boolean;
}

const initialState: CartState = {
    items: [],
    isOpen: false
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        add: (state, action: PayloadAction<ProductType>) => {
            state.items.push(action.payload);
        },
        toggle: (state) => {
            state.isOpen = !state.isOpen;
        }
    }
})

export const { add, toggle } = cartSlice.actions;
export default cartSlice.reducer;