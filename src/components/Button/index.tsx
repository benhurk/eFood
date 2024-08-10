import Btn from "./styled"

export type Props = {
    children: JSX.Element | string;
    color: 'red' | 'cream';
    width: '100%' | 'fit-content';
    onClick?: () => any;
}

export default function Button({children, color, width, onClick}: Props) {
    return (
        <Btn color={color} width={width} onClick={onClick}>{children}</Btn>
    )
}