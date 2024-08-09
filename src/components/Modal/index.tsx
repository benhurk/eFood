import Button from "../Button";
import { CloseBtn, ModalContainer, ModalContent } from "./styled";
import closeIcon from '../../assets/closeX.svg';

type Props = {
    image: string;
    name: string;
    info: string;
    price: string;
}

export default function Modal({name, image, info, price}: Props) {
    return (
        <ModalContainer>
            <div className="container">
                <ModalContent>
                    <img src={image} />
                    <div className="modal__inner">
                        <h3>{name}</h3>
                        <p>{info}</p>
                        <Button color="cream" width="fit-content">{`Adicionar ao carrinho - ${price}`}</Button>
                    </div>
                    <CloseBtn><img src={closeIcon}></img></CloseBtn>
                </ModalContent>
            </div>
        </ModalContainer>
    )
}