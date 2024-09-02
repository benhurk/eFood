import { useDispatch, useSelector } from "react-redux";

import { remove } from "../../store/reducers/cart";
import { RootReducer } from "../../store";
import { setSidebarContent, toggleSidebar } from "../../store/reducers/sidebar";

import getTotalPrice from "../../utils/getTotalPrice";
import formatPrice from "../../utils/formatPrice";

import { CartItem, CartList, CartPrice } from "./styled";
import Button from "../Button";
import deleteIcon from "../../assets/delete-icon.svg";
import { ButtonArea } from "../Form/styled";

export default function Cart() {
    const { items } = useSelector((state: RootReducer) => state.cart);
    const dispatch = useDispatch()
    
    return (
        <>
            {
                items.length > 0
                    ?
                    <CartList>
                        {
                            items.map((item) => (
                                <li key={item.id}>
                                    <CartItem>
                                        <img src={item.foto} alt={item.nome} />
                                        <div>
                                            <h4>{`${item.nome} ${item.quantity > 1 ? `(x${item.quantity})` : ''}`}</h4>
                                            <span>{formatPrice(item.preco * item.quantity)}</span>
                                        </div>
                                        <button type="button" onClick={() => dispatch(remove(item.id))}><img src={deleteIcon} /></button>
                                    </CartItem>
                                </li>
                            ))
                        }
                    </CartList>
                    :
                    <span className="empty_warn">Seu carrinho está vazio.</span>
            }
            <CartPrice>
                <span>Valor total</span>
                <span>{formatPrice(getTotalPrice(items))}</span>
            </CartPrice>
            <ButtonArea>
                <Button color={"cream"} width={"100%"} disabled={items.length > 0 ? false : true} onClick={() => dispatch(setSidebarContent('Address'))}>
                    Continuar com a entrega
                </Button>
                <Button color={"cream"} width={"100%"} onClick={() => dispatch(toggleSidebar())}>Continuar comprando</Button>
            </ButtonArea>
        </>
    )
}