import styled from "styled-components";

export const BannerContainer = styled.div`
    position: relative;
    height: 280px;
    margin-top: 64px;
    padding-block: 24px;
`

export const BannerImg = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;

    &::before {
        content: '';
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        background-color: #000;
        opacity: .4;
    }
`

export const BannerText = styled.div`
    color: #fff;
    font-size: 32px;
    text-align: start;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

export const RestaurantType = styled.span`
    position: relative;
    font-weight: 100;
`

export const RestaurantName = styled.span`
    position: relative;
    font-weight: 900;
`