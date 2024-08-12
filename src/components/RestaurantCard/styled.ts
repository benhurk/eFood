import styled from "styled-components";
import { Link } from "react-router-dom";

import { colors } from "../../globalStyles";

export const CardContainer = styled.div`
    width: 100%;
    height: 400px;
    background-color: #fff;
`

export const RestaurantBanner = styled.div`
    position: relative;
    background-size: cover;
    height: 50%;
    padding: 16px;
    display: flex;
    gap: 8px;
    justify-content: end;

    &::before {
        content: '';
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        background-color: #000;
        opacity: 0.25;
        z-index: 0;
        transition: opacity ease-in-out;
    }
`

export const RestaurantTag = styled.span`
    position: relative;
    display: inline-block;
    height: fit-content;
    font-size: 12px;
    font-weight: 700;
    color: ${colors.cream};
    background-color: ${colors.red};
    padding: 6px 4px;
    text-transform: capitalize;
    z-index: 1;
`

export const RestaurantBody = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 50%;
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
        line-height: 22px;
        max-height: 100px;
        overflow-y: hidden;
        background: linear-gradient(to bottom, ${colors.red}, 70%, transparent);
        -webkit-background-clip: text;
        background-clip: text;
        -webkit-text-fill-color: transparent;
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
    max-width: fit-content;
    font-size: 14px;
    font-weight: 700;
    color: ${colors.cream};
    background-color: ${colors.red};
    padding: 4px 6px;
`