import styled from "styled-components";
import { colors } from "../../globalStyles";

export const ProductContainer = styled.div`
    padding: 8px;
    background-color: ${colors.red};
    width: 100%;
    height: 360px;
`

export const ProductImg = styled.div`
    height: 50%;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    cursor: pointer;
`

export const ProductBody = styled.div`
    height: 50%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

export const ProductText = styled.div`
    padding: 8px;
    color: ${colors.cream};

    .product_title {
        font-size: 16px;
        font-weight: 900;
        margin-bottom: 8px;
    }

    .product_description {
        font-size: 14px;
        line-height: 22px;
        max-height: 100px;
        overflow-y: hidden;
        background: linear-gradient(to bottom, ${colors.cream}, 80%, ${colors.red});
        -webkit-background-clip: text;
        background-clip: text;
        -webkit-text-fill-color: transparent;
    }
`