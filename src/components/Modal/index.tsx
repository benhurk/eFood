import React, { useContext } from "react";
import { useDispatch, useSelector } from "react-redux";

import { add } from "../../store/reducers/cart";
import { setSidebarContent, toggleSidebar } from "../../store/reducers/sidebar";
import { RootReducer } from "../../store";

import formatPrice from "../../utils/formatPrice";

import Button from "../Button";
import { ModalContainer, ModalContent, ModalOverlay, Quantity } from "./styled";
import { ModalContext } from "../../contexts/ModalContext";
import { ProductType } from "../../models/restaurant";
import CloseButton from "../CloseButton";

export type ModalContentType = {
    image: string;
    title: string;
    text: string;
    info: string;
    price: number;
}

export type ModalProps = {
    content: ModalContentType;
    product: ProductType;
}

export default function Modal() {
    const { isOpen, setIsOpen } = useContext(ModalContext);
    const { items } = useSelector((state: RootReducer) => state.cart)
    const { content, product } = useContext(ModalContext).props;
    const { props, setProps } = useContext(ModalContext);

    const dispatch = useDispatch();

    const alreadyAdded = items.some(item => item.id === product.id);

    const addToCart = () => {
        setIsOpen(false);
        dispatch(toggleSidebar());
        dispatch(setSidebarContent('Cart'));
        dispatch(add(product));
    }

    const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.target.value = (Number(e.target.value) * 1).toString(); //Remove 0 do início do número
        if (Number(e.target.value) > Number(e.target.max)) { e.target.value = e.target.max };
        if (Number(e.target.value) < Number(e.target.min)) { e.target.value = ' ' };
        setProps({...props, product: {...product, quantity: Number(e.target.value)} });
    }

    const handleQuantityBlur = (e: any) => {
        if (Number(e.target.value) > Number(e.target.max)) { e.target.value = e.target.max };
        if (Number(e.target.value) < Number(e.target.min)) { e.target.value = e.target.min };
        setProps({...props, product: {...product, quantity: Number(e.target.value)} });
    }

    return (
        <>
            {
                isOpen &&
                <ModalContainer>
                    <ModalOverlay onClick={() => setIsOpen(false)} />
                    <div className="container">
                        <ModalContent>
                            <img className="product_img" src={content.image} />
                            <div className="modal__inner">
                                <h3>{content.title}</h3>
                                <p>{content.text}</p>
                                <p>{content.info}</p>
                                <Quantity>
                                    <label htmlFor="quantity">Quantidade:</label>
                                    <input type="number" id="quantity" min={'1'} max={'10'} defaultValue='1' onChange={handleQuantityChange} onBlur={handleQuantityBlur} />
                                </Quantity>
                                <small>Máximo: 10</small>
                                <Button color="cream" width="fit-content" onClick={addToCart} disabled={alreadyAdded}>
                                    {
                                        !alreadyAdded
                                        ?
                                        `Adicionar ao carrinho - ${formatPrice(content.price * Math.max(product.quantity, 1))}`
                                        :
                                        'Produto já adicionado'
                                    }
                                </Button>
                            </div>
                            <CloseButton onClick={() => setIsOpen(false)} />
                        </ModalContent>
                    </div>
                </ModalContainer>
            }
        </>
    )
}