import { useContext } from "react";
import Button from "../Button";
import { ProductContainer, ProductImg, ProductText } from "./styled";
import { ModalContext } from "../../contexts/ModalContext";
import { ModalContentType } from "../Modal";

type Props = {
    image: string;
    title: string;
    description: string;
    productInfo: ModalContentType;
}

export default function ProductCard({image, title, description, productInfo}: Props) {
    const {setIsOpen: setModalOpen, setContent: setModalContent} = useContext(ModalContext);

    function onBtnClick() {
        setModalOpen(true);
        setModalContent(productInfo);
    }

    return (
        <ProductContainer>
            <ProductImg style={{backgroundImage: `url(${image})`}} />
            <ProductText>
                <h3 className='product_title'>{title}</h3>
                <p className='product_description'>{description}</p>
            </ProductText>
            <Button color='cream' width='100%' onClick={onBtnClick}>Adicionar ao carrinho</Button>
        </ProductContainer>
    )
}