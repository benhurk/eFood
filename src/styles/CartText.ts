import styled from "styled-components";
import { colors } from "../globalStyles";

const CartText = styled.button`
    display: flex;
    gap: 4px;
    font-size: 18px;
    color: ${colors.red};
    font-weight: 900;
    background-color: transparent;
    border: none;
    align-items: center;
    cursor: pointer;

    img {
        width: 24px;
    }
`

export default CartText;