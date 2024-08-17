import { useContext } from "react";
import { useDispatch } from "react-redux";

import { add, toggle } from "../../store/reducers/cart";

import formatPrice from "../../utils/formatPrice";

import Button from "../Button";
import { CloseBtn, ModalContainer, ModalContent, ModalOverlay } from "./styled";
import closeIcon from '../../assets/closeX.svg';
import { ModalContext } from "../../contexts/ModalContext";
import { ProductType } from "../../models/restaurant";

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

    const dispatch = useDispatch();

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
                                <Button color="cream" width="fit-content" onClick={addToCart}>{`Adicionar ao carrinho - ${formatPrice(content.price)}`}</Button>
                            </div>
                            <CloseBtn onClick={() => setIsOpen(false)}><img src={closeIcon} /></CloseBtn>
                        </ModalContent>
                    </div>
                </ModalContainer>
            }
        </>
    )
}