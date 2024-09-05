import styled from "styled-components";
import { colors } from "../../globalStyles";
import ReactInputMask from "react-input-mask";

export const InputContainer = styled.div`
    max-width: 512px;
    width: 100%;
`

export const Label = styled.label`
    display: block;
    font-size: 14px;
    font-weight: 700;
    color: ${colors.cream};
    margin-bottom: 8px;
`

export const InputField = styled(ReactInputMask)`
    width: 100%;
    border: 1px solid ${colors.cream};
    background-color: ${colors.cream};
    color: ${colors.dark};
    font-size: 14px;
    font-weight: 700;
    padding: 8px;

    &:focus {
        outline: none;
    }

    &.input_invalid {
        border: 1px solid crimson;

        &::placeholder {
            color: red;
            opacity: 0.6; /* Firefox */
        }

        &::-ms-input-placeholder { /* Edge 12 -18 */
            color: red;
            opacity: 0.6;
        }
    }
`