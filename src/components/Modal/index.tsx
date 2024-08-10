import Button from "../Button";
import { CloseBtn, ModalContainer, ModalContent } from "./styled";
import closeIcon from '../../assets/closeX.svg';
import { useContext } from "react";
import { ModalContext } from "../../contexts/ModalContext";

type Props = {
    image: string;
    name: string;
    info: string;
    price: string;
}

export default function Modal({name, image, info, price}: Props) {
    const { isOpen, setIsOpen } = useContext(ModalContext);

    return (
        <>
            {
                isOpen &&
                <ModalContainer onClick={() => setIsOpen(false)}>
                    <div className="container">
                        <ModalContent>
                            <img src={image} />
                            <div className="modal__inner">
                                <h3>{name}</h3>
                                <p>{info}</p>
                                <Button color="cream" width="fit-content">{`Adicionar ao carrinho - ${price}`}</Button>
                            </div>
                            <CloseBtn onClick={() => setIsOpen(false)}><img src={closeIcon} /></CloseBtn>
                        </ModalContent>
                    </div>
                </ModalContainer>
            }
        </>
    )
}