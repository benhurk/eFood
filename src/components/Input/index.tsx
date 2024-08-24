import { InputContainer, InputField, Label } from "./styled";

type Props = {
    label: string;
    elementId: string;
    elementClass?: string;
    value: string;
    placeholder?: string,
    onChange?: any;
    onBlur?: any;
}

export default function Input({label, elementId, elementClass, value, placeholder, onChange, onBlur}: Props) {
    return (
        <InputContainer>
            <Label htmlFor={elementId}>{label}</Label>
            <InputField id={elementId} className={elementClass} name={elementId} value={value} onChange={onChange} onBlur={onBlur} placeholder={placeholder} />
        </InputContainer>
    )
}