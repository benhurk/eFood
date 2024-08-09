import Btn from "./styled"

export type Props = {
    children: JSX.Element | string;
    color: 'red' | 'cream';
    width: '100%' | 'fit-content';
}

export default function Button({children, color, width}: Props) {
    return (
        <Btn color={color} width={width}>{children}</Btn>
    )
}