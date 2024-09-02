import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { RootReducer } from "../../store";
import { setSidebarContent, toggleSidebar } from "../../store/reducers/sidebar";
import { clear } from "../../store/reducers/cart";
import { useOrderMutation } from "../../services/api";

import getTotalPrice from "../../utils/getTotalPrice";
import formatPrice from "../../utils/formatPrice";

import { colors } from "../../globalStyles";

import { SidebarContainer, SidebarContent, SidebarOverlay } from "./styled";
import Cart from "../Cart";
import CloseButton from "../CloseButton";
import Form from "../Form";
import Button from "../Button";
import Loader from "../Loader";

export type Content = 'Cart' | 'Address' | 'Payment' | 'Finish';

export default function Sidebar() {
    const { items } = useSelector((state: RootReducer) => state.cart);
    const { content, isOpen } = useSelector((state: RootReducer) => state.sidebar);
    const [order, {data, isLoading, isSuccess, isError}] = useOrderMutation();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setSidebarContent('Finish'));

        if (isSuccess) {
            dispatch(clear());
        }
    }, [isLoading, isSuccess, isError])

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
                    <Form content='Payment' orderRequest={order} />
                    </>
                );
            case "Finish":
                return (
                    <>
                    {
                        isLoading && <Loader color={colors.cream} />
                    }
                    {
                        isSuccess &&
                        <>
                        <h2>{`Pedido realizado - ${data.orderId}`}</h2>
                        <p>Estamos felizes em informar que seu pedido já está em processo de preparação e, em breve, será entregue no endereço fornecido.</p> <br/>
                        <p>Gostaríamos de ressaltar que nossos entregadores não estão autorizados a realizar cobranças extras.</p> <br/>
                        <p>Lembre-se da importância de higienizar as mãos após o recebimento do pedido, garantindo assim sua segurança e bem-estar durante a refeição.</p> <br/>
                        <p>Esperamos que desfrute de uma deliciosa e agradável experiência gastronômica. Bom apetite!</p> <br/>
                        <Button type='Button' color={"cream"} width={"100%"} onClick={() => dispatch(toggleSidebar())}>Concluir</Button>
                        </>
                    }
                    </>
                )
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