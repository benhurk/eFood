import styled from "styled-components";
import { colors } from "../../globalStyles";

export const InputContainer = styled.div`
    width: 100%;
`

export const Label = styled.label`
    display: block;
    font-size: 14px;
    font-weight: 700;
    color: ${colors.cream};
    margin-bottom: 8px;
`

export const InputField = styled.input`
    width: 100%;
    border: none;
    background-color: ${colors.cream};
    color: ${colors.dark};
    font-size: 14px;
    font-weight: 700;
    padding: 8px;
`