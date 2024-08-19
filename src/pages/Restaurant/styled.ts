import { Link } from "react-router-dom";
import styled from "styled-components";
import { colors } from "../../globalStyles";

export const HeaderInfo = styled.ul`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    align-items: center;

    @media (max-width: 768px) {
        display: flex;
        flex-direction: column;
        gap: 16px;
    }
`

export const BackLink = styled(Link)`
    font-size: 18px;
    font-weight: 900;
    color: ${colors.red};
`

export const ProductList = styled.ul`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 32px;

    @media (max-width: 767px) {
        display: flex;
        flex-direction: column;
    }

    @media (max-width: 1024px) and (min-width: 768px) {
        grid-template-columns: 1fr 1fr;
    }
`