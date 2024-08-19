import { useDispatch, useSelector } from "react-redux";

import { remove, toggle } from "../../store/reducers/cart";
import { RootReducer } from "../../store";
import formatPrice from "../../utils/formatPrice";

import { CartContainer, CartContent, CartItem, CartList, CartOverlay, CartPrice } from "./styled";
import Button from "../Button";
import CloseButton from "../CloseButton";
import deleteIcon from "../../assets/delete-icon.svg";

export default function Cart() {
    const { items, isOpen } = useSelector((state: RootReducer) => state.cart);
    const dispatch = useDispatch()

    const getTotalPrice = () => {
        return items.reduce((acumulator, item) => {
            return acumulator += item.preco;
        }, 0)
    }

    if (isOpen) {
        return (
            <CartContainer>
                <CartOverlay onClick={() => dispatch(toggle())} />
                <CartContent>
                    <CloseButton onClick={() => dispatch(toggle())} />
                    {
                        items.length > 0
                        ?
                        <CartList>
                                {
                                    items.map((item) => (
                                        <li key={item.id}>
                                            <CartItem>
                                                <img src={item.foto} alt={item.nome}/>
                                                <div>
                                                    <h4>{item.nome}</h4>
                                                    <span>{formatPrice(item.preco)}</span>
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
                        <span>{formatPrice(getTotalPrice())}</span>
                    </CartPrice>
                    <Button color={"cream"} width={"100%"} disabled={items.length > 0 ? false : true}>Continuar com a entrega</Button>
                </CartContent>
            </CartContainer>
        )
    }
}