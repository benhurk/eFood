import styled from "styled-components";
import { colors } from "../../globalStyles";

export const CartList = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 16px;
`

export const CartItem = styled.div`
    position: relative;
    width: 100%;
    display: flex;
    color: ${colors.red};
    background-color: ${colors.cream};
    gap: 8px;
    padding: 8px;

    img {
        width: 80px;
        height: 80px;
        object-fit: cover;
    }

    h4 {
        font-size: 18px;
        font-weight: 900;
        margin-bottom: 16px;
    }

    span {
        font-size: 14px;
    }

    button {
        position: absolute;
        width: 16px;
        height: 16px;
        bottom: 8px;
        right: 8px;
        background-color: transparent;
        border: none;
        cursor: pointer;

        img {
            width: 100%;
            height: 100%;
            pointer-events: none;
        }
    }
`

export const CartPrice = styled.div`
    display: flex;
    justify-content: space-between;
    font-size: 14px;
    font-weight: 700;
    color: ${colors.cream};
    margin-top: 40px;
    margin-bottom: 16px;
`