import { useContext } from "react";

import formatPrice from "../../utils/formatPrice";

import Button from "../Button";
import { ProductBody, ProductContainer, ProductImg, ProductText } from "./styled";
import { ModalContext } from "../../contexts/ModalContext";
import { ModalProps } from "../Modal";

type Props = {
    productInfo: ModalProps;
}

export default function ProductCard({productInfo}: Props) {
    const {setIsOpen: setModalOpen, setProps: setModalProps} = useContext(ModalContext);

    function onBtnClick() {
        setModalOpen(true);
        setModalProps(productInfo);
    }

    return (
        <ProductContainer>
            <ProductImg style={{backgroundImage: `url(${productInfo.content.image})`}} onClick={onBtnClick} />
            <ProductBody>
                <ProductText>
                    <h3 className='product_title'>{productInfo.content.title}</h3>
                    <p className='product_description'>{productInfo.content.text}</p>
                </ProductText>
                <Button color='cream' width='100%' onClick={onBtnClick}>{`Adicionar ao carrinho - ${formatPrice(productInfo.content.price)}`}</Button>
            </ProductBody>
        </ProductContainer>
    )
}