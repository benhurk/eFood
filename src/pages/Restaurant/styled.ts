import { Link } from "react-router-dom";
import styled from "styled-components";
import { colors } from "../../globalStyles";

export const HeaderInfo = styled.ul`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    align-items: center;
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
`