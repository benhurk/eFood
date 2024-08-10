import { useContext } from "react";
import Button from "../Button";
import { ProductContainer, ProductImg, ProductText } from "./styled";
import { ModalContext } from "../../contexts/ModalContext";

type Props = {
    image: string;
    title: string;
    description: string;
}

export default function ProductCard({image, title, description}: Props) {
    const {setIsOpen} = useContext(ModalContext);

    return (
        <ProductContainer>
            <ProductImg style={{backgroundImage: `url(${image})`}} />
            <ProductText>
                <h3 className='product_title'>{title}</h3>
                <p className='product_description'>{description}</p>
            </ProductText>
            <Button color='cream' width='100%' onClick={() => setIsOpen(true)}>Adicionar ao carrinho</Button>
        </ProductContainer>
    )
}