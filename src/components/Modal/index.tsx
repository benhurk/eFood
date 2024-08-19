import { useContext } from "react";
import { useDispatch, useSelector } from "react-redux";

import { add, toggle } from "../../store/reducers/cart";
import { RootReducer } from "../../store";

import formatPrice from "../../utils/formatPrice";

import Button from "../Button";
import { ModalContainer, ModalContent, ModalOverlay } from "./styled";
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

export default function Modal({content, product}: ModalProps) {
    const { isOpen, setIsOpen } = useContext(ModalContext);
    const { items } = useSelector((state: RootReducer) => state.cart)

    const dispatch = useDispatch();

    const alreadyAdded = items.includes(product);

    const addToCart = () => {
        setIsOpen(false);
        dispatch(toggle());
        dispatch(add(product));
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
                                <Button color="cream" width="fit-content" onClick={addToCart} disabled={alreadyAdded}>
                                    {
                                        !alreadyAdded
                                        ?
                                        `Adicionar ao carrinho - ${formatPrice(content.price)}`
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