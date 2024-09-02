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

    @media (max-width: 768px) {
        padding-bottom: 32px;
    }
`

export const SearchSection = styled.section`
    margin-bottom: 32px;
`

export const RestaurantList = styled.ul`
    list-style: none;
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 80px;
    row-gap: 40px;

    @media (max-width: 767px) {
        display: flex;
        flex-direction: column;
        gap: 40px;
    }

    @media (max-width: 1024px) and (min-width: 768px) {
        column-gap: 32px;
        row-gap: 32px;
    }
`