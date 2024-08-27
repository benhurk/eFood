import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";
import * as Yup from 'yup';

import { RootReducer } from "../../store";
import { setSidebarContent } from "../../store/reducers/sidebar";

import Button from "../Button";
import Input from "../Input"
import { ButtonArea, FormContainer, FormRow } from "./styled"

type Props = {
    content: 'Address' | 'Payment';
    orderRequest?: any;
}

export default function Form({content, orderRequest}: Props) {
    const { items } = useSelector((state: RootReducer) => state.cart);
    const dispatch = useDispatch();

    const form = useFormik({
        initialValues: {
            name: '',
            address: '',
            city: '',
            cep: '',
            num: '',
            complement: '',

            cardName: '',
            cardNum: '',
            cardCvv: '',
            cardMonth: '',
            cardYear: '',
        },
        validationSchema: () => {
            if (content === 'Address') {
                return Yup.object({
                    name: Yup.string().min(2, 'Nome inválido').required('Preencha esse campo'),
                    address: Yup.string().required('Preencha esse campo'),
                    city: Yup.string().required('Preencha esse campo'),
                    cep: Yup.string().min(9, 'CEP inválido').max(9, 'CEP inválido').required('Preencha esse campo'),
                    num: Yup.string().required('Preencha esse campo'),
                });
            }

            return Yup.object({
                name: Yup.string().min(2, 'Nome inválido').required('Preencha esse campo'),
                address: Yup.string().required('Preencha esse campo'),
                city: Yup.string().required('Preencha esse campo'),
                cep: Yup.string().min(9, 'CEP inválido').max(9, 'CEP inválido').required('Preencha esse campo'),
                num: Yup.string().required('Preencha esse campo'),
        
                cardName: Yup.string().min(2, 'Nome inválido').required('Preencha esse campo'),
                cardNum: Yup.string().min(16, 'Número inválido').required('Preencha esse campo'),
                cardCvv: Yup.string().required('Preencha esse campo'),
                cardMonth: Yup.string().min(2, 'Mês inválido (MM)').max(2, 'Mês inválido (MM)').required('Preencha esse campo'),
                cardYear: Yup.string().min(2, 'Ano inválido (YY)').max(2, 'Ano inválido (YY)').required('Preencha esse campo')
            })
        },
        onSubmit: (values) => {
            if (content === 'Address') {
                dispatch(setSidebarContent('Payment'));
            }

            if (content === 'Payment') {
                orderRequest({
                    delivery: {
                        receiver: values.name,
                        address: {
                            city: values.city,
                            description: values.address,
                            number: Number(values.num),
                            zipCode: values.cep,
                            complement: values.complement
                        }
                    },
                    payment: {
                        card: {
                            code: Number(values.cardCvv),
                            name: values.cardName,
                            number: values.cardNum,
                            expires: {
                                month: Number(values.cardNum),
                                year: Number(values.cardYear)
                            }
                        }
                    },
                    products: items.map((item) => ({
                        id: item.id,
                        price: item.preco
                    }))
                });
            }
        }
    });

    const fieldInvalid = (field: string) => {
        const isTouched = field in form.touched;
        const isInvalid = field in form.errors;

        return (isTouched && isInvalid);
    }

    function getErrorMessage(field: string, message?: string) {
        const isInvalid = fieldInvalid(field);

        if (isInvalid) return message;
        return '';
    }

    if (content === 'Address') {
        return (
            <FormContainer onSubmit={form.handleSubmit}>
                <FormRow>
                    <Input label="Quem irá receber" elementId="name" elementClass={fieldInvalid('name') ? 'input_invalid' : ''} value={form.values.name} onChange={form.handleChange} onBlur={form.handleBlur} placeholder={getErrorMessage('name', form.errors.name)} />
                </FormRow>
                <FormRow>
                    <Input label="Endereço" elementId="address" elementClass={fieldInvalid('address') ? 'input_invalid' : ''} value={form.values.address} onChange={form.handleChange} onBlur={form.handleBlur} placeholder={getErrorMessage('address', form.errors.address)} />
                </FormRow>
                <FormRow>
                    <Input label="Cidade" elementId="city" elementClass={fieldInvalid('city') ? 'input_invalid' : ''} value={form.values.city} onChange={form.handleChange} onBlur={form.handleBlur} placeholder={getErrorMessage('city', form.errors.city)} />
                </FormRow>
                <FormRow className="half-half">
                    <Input mask="99.999-999" label="CEP" elementId="cep" elementClass={fieldInvalid('cep') ? 'input_invalid' : ''} value={form.values.cep} onChange={form.handleChange} onBlur={form.handleBlur} placeholder={getErrorMessage('cep', form.errors.cep)} />
                    <Input label="Número" elementId="num" elementClass={fieldInvalid('num') ? 'input_invalid' : ''} value={form.values.num} onChange={form.handleChange} onBlur={form.handleBlur} placeholder={getErrorMessage('num', form.errors.num)} />
                </FormRow>
                <FormRow>
                    <Input label="Complemento (opcional)" elementId="complement" value={form.values.complement} onChange={form.handleChange} onBlur={form.handleBlur} />
                </FormRow>
                <ButtonArea>
                    <Button type={'Submit'} color={"cream"} width={"100%"}>Continuar para o pagamento</Button>
                    <Button color={"cream"} width={"100%"} onClick={() => dispatch(setSidebarContent('Cart'))}>Voltar para o carrinho</Button>
                </ButtonArea>
            </FormContainer>
        )
    }

    if (content === 'Payment') {
        return (
            <FormContainer onSubmit={form.handleSubmit}>
                <FormRow>
                    <Input label="Nome no cartão" elementId="cardName" elementClass={fieldInvalid('cardName') ? 'input_invalid' : ''} value={form.values.cardName} onChange={form.handleChange} onBlur={form.handleBlur} placeholder={getErrorMessage('cardName', form.errors.cardName)} />
                </FormRow>
                <FormRow className="lg-sm">
                    <Input mask='9999 9999 9999 9999' label="Número do cartão" elementId="cardNum" elementClass={fieldInvalid('cardNum') ? 'input_invalid' : ''} value={form.values.cardNum} onChange={form.handleChange} onBlur={form.handleBlur} placeholder={getErrorMessage('cardNum', form.errors.cardNum)} />
                    <Input mask='999' label="CVV" elementId="cardCvv" elementClass={fieldInvalid('cardCvv') ? 'input_invalid' : ''} value={form.values.cardCvv} onChange={form.handleChange} onBlur={form.handleBlur} placeholder={getErrorMessage('cardCvv', form.errors.cardCvv)}  />
                </FormRow>
                <FormRow className="half-half">
                    <Input mask="99" label="Mês de vencimento" elementId="cardMonth" elementClass={fieldInvalid('cardMonth') ? 'input_invalid' : ''} value={form.values.cardMonth} onChange={form.handleChange} onBlur={form.handleBlur} placeholder={getErrorMessage('cardMonth', form.errors.cardMonth)} />
                    <Input mask="99" label="Ano de vencimento" elementId="cardYear" elementClass={fieldInvalid('cardYear') ? 'input_invalid' : ''} value={form.values.cardYear} onChange={form.handleChange} onBlur={form.handleBlur} placeholder={getErrorMessage('cardYear', form.errors.cardYear)} />
                </FormRow>
                <ButtonArea>
                    <Button type="Submit" color={"cream"} width={"100%"}>Finalizar pagamento</Button>
                    <Button color={"cream"} width={"100%"} onClick={() => dispatch(setSidebarContent('Address'))}>Voltar para a edição de endereço</Button>
                </ButtonArea>
            </FormContainer>
        )
    }
}