import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type Content = 'Cart' | 'Address' | 'Payment' | 'Success';

type SidebarState = {
    isOpen: boolean;
    content: Content;
}

const initialState: SidebarState = {
    isOpen: false,
    content: 'Cart'
}

const sidebarSlice = createSlice({
    name: 'sidebar',
    initialState,
    reducers: {
        toggleSidebar: (state) => {
            state.isOpen = !state.isOpen;
        },
        setSidebarContent: (state, action: PayloadAction<Content>) => {
            state.content = action.payload;
        }
    }
})

export const { toggleSidebar, setSidebarContent } = sidebarSlice.actions;
export default sidebarSlice.reducer;