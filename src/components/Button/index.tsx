import Btn from "./styled"

export type Props = {
    children: JSX.Element | string;
    type?: 'Button' | 'Submit';
    color: 'red' | 'cream';
    width: '100%' | 'fit-content';
    onClick?: () => any;
    disabled?: boolean;
}

export default function Button({type, children, color, width, onClick, disabled}: Props) {
    return (
        <Btn type={type} color={color} width={width} onClick={onClick} disabled={disabled}>{children}</Btn>
    )
}