import { useDispatch, useSelector } from "react-redux";
import { RootReducer } from "../../store";
import { toggleSidebar } from "../../store/reducers/sidebar";

import getTotalPrice from "../../utils/getTotalPrice";
import formatPrice from "../../utils/formatPrice";

import { SidebarContainer, SidebarContent, SidebarOverlay } from "./styled";
import Cart from "../Cart";
import CloseButton from "../CloseButton";
import Form from "../Form";

export type Content = 'Cart' | 'Address' | 'Payment' | 'Success';

export default function Sidebar() {
    const { items } = useSelector((state: RootReducer) => state.cart);
    const { content, isOpen } = useSelector((state: RootReducer) => state.sidebar);
    const dispatch = useDispatch();

    function getContent() {
        switch (content) {
            case "Cart": return <Cart /> 
            case "Address":
                return (
                    <>
                    <h2>Endereço</h2> 
                    <Form content='Address' />
                    </>
                )
            case "Payment":
                return (
                    <>
                    <h2>{`Pagamento - Valor a pagar: ${formatPrice(getTotalPrice(items))}`}</h2> 
                    <Form content='Payment' />
                    </>
                )
            case "Success":
        }
    }

    if (isOpen) {
        return (
            <SidebarContainer>
                <SidebarOverlay onClick={() => dispatch(toggleSidebar())} />
                <SidebarContent>
                    <CloseButton onClick={() => dispatch(toggleSidebar())} />
                    { getContent() }
                </SidebarContent>
            </SidebarContainer>
        )
    }
}