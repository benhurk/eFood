import { InputContainer, InputField, Label } from "./styled";

type Props = {
    label: string;
    elementId: string;
}

export default function Input({label, elementId}: Props) {
    return (
        <InputContainer>
            <Label htmlFor={elementId}>{label}</Label>
            <InputField id={elementId} />
        </InputContainer>
    )
}