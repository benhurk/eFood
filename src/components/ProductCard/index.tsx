import { useContext } from "react";

import formatPrice from "../../utils/formatPrice";

import Button from "../Button";
import { ProductBody, ProductContainer, ProductImg, ProductText } from "./styled";
import { ModalContext } from "../../contexts/ModalContext";
import { ModalContentType } from "../Modal";

type Props = {
    productInfo: ModalContentType;
}

export default function ProductCard({productInfo}: Props) {
    const {setIsOpen: setModalOpen, setContent: setModalContent} = useContext(ModalContext);

    function onBtnClick() {
        setModalOpen(true);
        setModalContent(productInfo);
    }

    return (
        <ProductContainer>
            <ProductImg style={{backgroundImage: `url(${productInfo.image})`}} onClick={onBtnClick} />
            <ProductBody>
                <ProductText>
                    <h3 className='product_title'>{productInfo.title}</h3>
                    <p className='product_description'>{productInfo.text}</p>
                </ProductText>
                <Button color='cream' width='100%' onClick={onBtnClick}>{`Adicionar ao carrinho - ${formatPrice(productInfo.price)}`}</Button>
            </ProductBody>
        </ProductContainer>
    )
}