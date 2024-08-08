import styled from "styled-components";
import { Link } from "react-router-dom";

import { colors } from "../../globalStyles";

export const CardContainer = styled.div`
    width: 100%;
    background-color: #fff;
`

export const RestaurantBanner = styled.div`
    background-size: cover;
    height: 236px;
    padding: 16px;
    display: flex;
    gap: 8px;
    justify-content: end;
`

export const RestaurantTag = styled.span`
    display: inline-block;
    height: fit-content;
    font-size: 12px;
    font-weight: 700;
    color: ${colors.cream};
    background-color: ${colors.red};
    padding: 6px 4px;
`

export const RestaurantBody = styled.div`
    padding: 8px;
    border-left: 1px solid;
    border-right: 1px solid;
    border-bottom: 1px solid;
    border-color: ${colors.red};
    color: ${colors.red};

    .restaurant_name {
        font-size: 18px;
        font-weight: 700;
    }

    .restaurant_description {
        font-size: 14px;
        margin-block: 16px;
        line-height: 22px;
    }
`

export const TitleArea = styled.div`
    display: flex;
    justify-content: space-between;
`

export const RestaurantRating = styled.div`
    font-size: 18px;
    font-weight: 700;
    color: ${colors.red};
    display: flex;
    align-items: center;
    gap: 8px;
`

export const RestaurantLink = styled(Link)`
    display: inline-block;
    font-size: 14px;
    font-weight: 700;
    color: ${colors.cream};
    background-color: ${colors.red};
    padding: 4px 6px;
`