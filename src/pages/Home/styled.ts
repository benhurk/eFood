import styled from "styled-components";
import { colors } from "../../globalStyles";

export const SubTitle = styled.h2`
    font-size: 36px;
    font-weight: bold;
    line-height: 44px;
    max-width: 540px;
    color: ${colors.red};
    margin-inline: auto;
    margin-top: 140px;
    padding-bottom: 64px;
`

export const RestaurantList = styled.ul`
    list-style: none;
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 80px;
    row-gap: 40px;
`