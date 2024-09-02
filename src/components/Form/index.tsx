import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";
import * as Yup from 'yup';

import { RootReducer } from "../../store";
import { setSidebarContent } from "../../store/reducers/sidebar";

import Button from "../Button";
import Input from "../Input";
import { ButtonArea, FormContainer, FormRow } from "./styled";

type Props = {
    content: 'Address' | 'Payment';
    orderRequest?: any;
}

export default function Form({ content, orderRequest }: Props) {
    const { items } = useSelector((state: RootReducer) => state.cart);
    const dispatch = useDispatch();

    const addressForm = useFormik({
        initialValues: {
            name: '',
            address: '',
            city: '',
            cep: '',
            num: '',
            complement: ''
        },

        validationSchema: Yup.object({
            name: Yup.string().min(2, 'Nome inválido').required('Preencha esse campo'),
            address: Yup.string().required('Preencha esse campo'),
            city: Yup.string().required('Preencha esse campo'),
            cep: Yup.string().min(10, 'CEP inválido').required('Preencha esse campo'),
            num: Yup.string().required('Preencha esse campo'),
        }),

        onSubmit: () => { dispatch(setSidebarContent('Payment')); }
    });

    const cardForm = useFormik({
        initialValues: {
            cardName: '',
            cardNum: '',
            cardCvv: '',
            cardMonth: '',
            cardYear: '',
        },
        validationSchema: Yup.object({
            cardName: Yup.string().min(2, 'Nome inválido').required('Preencha esse campo'),
            cardNum: Yup.string().min(19, 'Número inválido').required('Preencha esse campo'),
            cardCvv: Yup.string().min(3, 'Código inválido').required('Preencha esse campo'),
            cardMonth: Yup.string().min(2, 'Mês inválido (MM)').max(2, 'Mês inválido (MM)').required('Preencha esse campo'),
            cardYear: Yup.string().min(2, 'Ano inválido (YY)').max(2, 'Ano inválido (YY)').required('Preencha esse campo')
        }),
        onSubmit: (values) => {
            orderRequest({
                delivery: {
                    receiver: addressForm.values.name,
                    address: {
                        city: addressForm.values.city,
                        description: addressForm.values.address,
                        number: Number(addressForm.values.num),
                        zipCode: addressForm.values.cep,
                        complement: addressForm.values.complement
                    }
                },
                payment: {
                    card: {
                        code: Number(values.cardCvv),
                        name: values.cardName,
                        number: values.cardNum,
                        expires: {
                            month: Number(values.cardMonth),
                            year: Number(values.cardYear)
                        }
                    }
                },
                products: items.map((item) => ({
                    id: item.id,
                    price: item.preco * item.quantity
                }))
            });
        }
    });

    const fieldInvalid = (field: string) => {
        const isTouched = field in addressForm.touched || field in cardForm.touched;
        const isInvalid = field in cardForm.errors || field in addressForm.errors;

        return (isTouched && isInvalid);
    }

    const getErrorMessage = (field: string, message?: string) => {
        const isInvalid = fieldInvalid(field);

        if (isInvalid) return message;
        return '';
    }

    const clearInvalidFields = () => {
        const form = content === 'Address' ? addressForm : cardForm;

        Object.keys(form.values).forEach(key => {
            if (key in form.errors) {
                form.setFieldValue(key, '');
            }
        })
    }

    if (content === 'Address') {
        return (
            <FormContainer onSubmit={addressForm.handleSubmit}>
                <FormRow>
                    <Input label="Quem irá receber" elementId="name" value={addressForm.values.name} onChange={addressForm.handleChange} onBlur={addressForm.handleBlur}
                    elementClass={fieldInvalid('name') ? 'input_invalid' : ''} placeholder={getErrorMessage('name', addressForm.errors.name)} />
                </FormRow>
                <FormRow>
                    <Input label="Endereço" elementId="address" value={addressForm.values.address} onChange={addressForm.handleChange} onBlur={addressForm.handleBlur}
                    elementClass={fieldInvalid('address') ? 'input_invalid' : ''} placeholder={getErrorMessage('address', addressForm.errors.address)} />
                </FormRow>
                <FormRow>
                    <Input label="Cidade" elementId="city" value={addressForm.values.city} onChange={addressForm.handleChange} onBlur={addressForm.handleBlur}
                    elementClass={fieldInvalid('city') ? 'input_invalid' : ''} placeholder={getErrorMessage('city', addressForm.errors.city)} />
                </FormRow>
                <FormRow className="half-half">
                    <Input mask="99.999-999" label="CEP" elementId="cep" value={addressForm.values.cep} onChange={addressForm.handleChange} onBlur={addressForm.handleBlur}
                    elementClass={fieldInvalid('cep') ? 'input_invalid' : ''} placeholder={getErrorMessage('cep', addressForm.errors.cep)} />
                    <Input mask="99999999999" label="Número" elementId="num" value={addressForm.values.num} onChange={addressForm.handleChange} onBlur={addressForm.handleBlur}
                    elementClass={fieldInvalid('num') ? 'input_invalid' : ''} placeholder={getErrorMessage('num', addressForm.errors.num)} />
                </FormRow>
                <FormRow>
                    <Input label="Complemento (opcional)" elementId="complement" value={addressForm.values.complement} onChange={addressForm.handleChange} onBlur={addressForm.handleBlur} />
                </FormRow>
                <ButtonArea>
                    <Button type={'Submit'} color={"cream"} width={"100%"} onClick={() => clearInvalidFields()}>Continuar para o pagamento</Button>
                    <Button color={"cream"} width={"100%"} onClick={() => dispatch(setSidebarContent('Cart'))}>Voltar para o carrinho</Button>
                </ButtonArea>
            </FormContainer>
        )
    }

    if (content === 'Payment') {
        return (
            <FormContainer onSubmit={cardForm.handleSubmit}>
                <FormRow>
                    <Input label="Nome no cartão" elementId="cardName" value={cardForm.values.cardName} onChange={cardForm.handleChange} onBlur={cardForm.handleBlur}
                    elementClass={fieldInvalid('cardName') ? 'input_invalid' : ''} placeholder={getErrorMessage('cardName', cardForm.errors.cardName)} />
                </FormRow>
                <FormRow className="lg-sm">
                    <Input mask='9999 9999 9999 9999' elementId="cardNum" label="Número do cartão" value={cardForm.values.cardNum} onChange={cardForm.handleChange} onBlur={cardForm.handleBlur}
                    elementClass={fieldInvalid('cardNum') ? 'input_invalid' : ''} placeholder={getErrorMessage('cardNum', cardForm.errors.cardNum)} />
                    <Input mask='999' label="CVV" elementId="cardCvv" value={cardForm.values.cardCvv} onChange={cardForm.handleChange} onBlur={cardForm.handleBlur}
                    elementClass={fieldInvalid('cardCvv') ? 'input_invalid' : ''} placeholder={getErrorMessage('cardCvv', cardForm.errors.cardCvv)} />
                </FormRow>
                <FormRow className="half-half">
                    <Input mask="99" label="Mês de vencimento" elementId="cardMonth" value={cardForm.values.cardMonth} onChange={cardForm.handleChange} onBlur={cardForm.handleBlur}
                    elementClass={fieldInvalid('cardMonth') ? 'input_invalid' : ''} placeholder={getErrorMessage('cardMonth', cardForm.errors.cardMonth)} />
                    <Input mask="99" label="Ano de vencimento" elementId="cardYear" value={cardForm.values.cardYear} onChange={cardForm.handleChange} onBlur={cardForm.handleBlur}
                    elementClass={fieldInvalid('cardYear') ? 'input_invalid' : ''} placeholder={getErrorMessage('cardYear', cardForm.errors.cardYear)} />
                </FormRow>
                <ButtonArea>
                    <Button type="Submit" color={"cream"} width={"100%"} onClick={() => clearInvalidFields()}>Finalizar pagamento</Button>
                    <Button color={"cream"} width={"100%"} onClick={() => dispatch(setSidebarContent('Address'))}>Voltar para a edição de endereço</Button>
                </ButtonArea>
            </FormContainer>
        )
    }
}