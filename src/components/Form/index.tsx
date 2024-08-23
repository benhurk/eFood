import { useDispatch } from "react-redux";

import Button from "../Button";
import Input from "../Input"
import { ButtonArea, FormContainer, FormRow } from "./styled"
import { setSidebarContent } from "../../store/reducers/sidebar";

type Props = {
    content: 'Address' | 'Payment';
}

export default function Form({content}: Props) {
    const dispatch = useDispatch()

    if (content === 'Address') {
        return (
            <FormContainer>
                <FormRow>
                    <Input label="Quem irá receber" elementId="name" />
                </FormRow>
                <FormRow>
                    <Input label="Endereço" elementId="address" />
                </FormRow>
                <FormRow>
                    <Input label="Cidade" elementId="city" />
                </FormRow>
                <FormRow className="half-half">
                    <Input label="CEP" elementId="cep" />
                    <Input label="Número" elementId="num" />
                </FormRow>
                <FormRow>
                    <Input label="Complemento (opcional)" elementId="complement" />
                </FormRow>
                <ButtonArea>
                    <Button color={"cream"} width={"100%"} onClick={() => dispatch(setSidebarContent('Payment'))}>Continuar para o pagamento</Button>
                    <Button color={"cream"} width={"100%"} onClick={() => dispatch(setSidebarContent('Cart'))}>Voltar para o carrinho</Button>
                </ButtonArea>
            </FormContainer>
        )
    }

    if (content === 'Payment') {
        return (
            <FormContainer>
                <FormRow>
                    <Input label="Nome no cartão" elementId="cardName" />
                </FormRow>
                <FormRow className="lg-sm">
                    <Input label="Número do cartão" elementId="cardNum" />
                    <Input label="CVV" elementId="cvv" />
                </FormRow>
                <FormRow className="half-half">
                    <Input label="Mês de vencimento" elementId="cardMonth" />
                    <Input label="Ano de vencimento" elementId="cardYear" />
                </FormRow>
                <ButtonArea>
                    <Button color={"cream"} width={"100%"}>Finalizar pagamento</Button>
                    <Button color={"cream"} width={"100%"} onClick={() => dispatch(setSidebarContent('Address'))}>Voltar para a edição de endereço</Button>
                </ButtonArea>
            </FormContainer>
        )
    }
}