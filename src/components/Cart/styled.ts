import styled from "styled-components";
import { colors } from "../../globalStyles";

export const CartContainer = styled.div`
    position: fixed;
    width: 100%;
    height: 100%;
`

export const CartOverlay = styled.div`
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-color: #000;
    opacity: 0.8;
`

export const CartContent = styled.aside`
    position: fixed;
    width: 360px;
    height: 100%;
    top: 0;
    right: 0px;
    background-color: ${colors.red};
    padding: 32px 8px;

    .empty_warn {
        color: ${colors.cream};
    }
`

export const CartList = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 16px;
`

export const CartItem = styled.div`
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