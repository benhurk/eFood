import Btn from "./styled"

export type Props = {
    children: JSX.Element | string;
    color: 'red' | 'cream';
    width: '100%' | 'fit-content';
    onClick?: () => any;
    disabled?: boolean;
}

export default function Button({children, color, width, onClick, disabled}: Props) {
    return (
        <Btn color={color} width={width} onClick={onClick} disabled={disabled}>{children}</Btn>
    )
}