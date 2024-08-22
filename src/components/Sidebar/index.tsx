import { useDispatch, useSelector } from "react-redux";
import { RootReducer } from "../../store";
import { toggleSidebar } from "../../store/reducers/sidebar";

import { SidebarContainer, SidebarContent, SidebarOverlay } from "./styled";
import Cart from "../Cart";
import CloseButton from "../CloseButton";
import AddressForm from "../AddressForm";

export default function Sidebar() {
    const { content, isOpen } = useSelector((state: RootReducer) => state.sidebar);
    const dispatch = useDispatch();

    function getContent() {
        switch (content) {
            case "Cart": return <Cart /> 
            case "Address": return <AddressForm />
            case "Payment":
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