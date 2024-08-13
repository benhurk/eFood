import { useContext } from "react";

import formatPrice from "../../utils/formatPrice";

import Button from "../Button";
import { CloseBtn, ModalContainer, ModalContent, ModalOverlay } from "./styled";
import closeIcon from '../../assets/closeX.svg';
import { ModalContext } from "../../contexts/ModalContext";

export type ModalContentType = {
    image: string;
    title: string;
    text: string;
    info: string;
    price: number;
}

export default function Modal({title, image, text, info, price}: ModalContentType) {
    const { isOpen, setIsOpen } = useContext(ModalContext);

    return (
        <>
            {
                isOpen &&
                <ModalContainer>
                    <ModalOverlay onClick={() => setIsOpen(false)} />
                    <div className="container">
                        <ModalContent>
                            <img className="product_img" src={image} />
                            <div className="modal__inner">
                                <h3>{title}</h3>
                                <p>{text}</p>
                                <p>{info}</p>
                                <Button color="cream" width="fit-content">{`Adicionar ao carrinho - ${formatPrice(price)}`}</Button>
                            </div>
                            <CloseBtn onClick={() => setIsOpen(false)}><img src={closeIcon} /></CloseBtn>
                        </ModalContent>
                    </div>
                </ModalContainer>
            }
        </>
    )
}