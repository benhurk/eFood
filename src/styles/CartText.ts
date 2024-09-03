import styled from "styled-components";
import { colors } from "../globalStyles";

const CartText = styled.button`
    display: flex;
    gap: 2px;
    background-color: transparent;
    border: none;
    align-items: center;
    cursor: pointer;

    span {
        color: ${colors.cream};
        background-color: ${colors.red};
        border-radius: 50%;
        padding: 4px 8px;
        font-size: 14px;
        font-weight: 900;
    }

    img {
        width: 32px;
    }
`

export default CartText;