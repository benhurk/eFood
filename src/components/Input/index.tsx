import { InputContainer, InputField, Label } from "./styled";

type Props = {
    label: string;
    mask?: string;
    elementId: string;
    elementClass?: string;
    placeholder?: string,
    value: string;
    onChange?: any;
    onBlur?: any;
}

export default function Input({label, mask, elementId, elementClass, placeholder, value, onChange, onBlur}: Props) {
    return (
        <InputContainer>
            <Label htmlFor={elementId}>{label}</Label>
            <InputField mask={mask as string} maskChar='' id={elementId} className={elementClass} placeholder={placeholder} name={elementId} 
            value={value} onChange={onChange} onBlur={onBlur} />
        </InputContainer>
    )
}