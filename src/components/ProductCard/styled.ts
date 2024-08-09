import styled from "styled-components";
import { colors } from "../../globalStyles";

export const ProductContainer = styled.div`
    padding: 8px;
    background-color: ${colors.red};
    width: 100%;
`

export const ProductImg = styled.div`
    height: 168px;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    cursor: pointer;
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
    }
`