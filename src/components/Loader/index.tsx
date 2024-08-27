import { PulseLoader } from "react-spinners";

import { colors } from "../../globalStyles";
import { LoaderContainer } from "./styled";

export default function Loader() {
    return (
        <LoaderContainer>
            <PulseLoader color={colors.red} />
        </LoaderContainer>
    )
}