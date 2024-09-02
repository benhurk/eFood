import { PulseLoader } from "react-spinners";

import { colors } from "../../globalStyles";
import { LoaderContainer } from "./styled";

type Props = {
    color?: string;
}

export default function Loader({color = colors.red}: Props) {
    return (
        <LoaderContainer>
            <PulseLoader color={color} />
        </LoaderContainer>
    )
}