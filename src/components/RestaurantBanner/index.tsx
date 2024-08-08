import { BannerContainer, BannerImg, BannerText, RestaurantName, RestaurantType } from "./styled";

import bgImg from '../../assets/cardimg.png';

export default function RestaurantBanner() {
    return (
        <BannerContainer>
            <BannerImg style={{backgroundImage: `url(${bgImg})`}} />
            <BannerText className="container">
                <RestaurantType>Japonesa</RestaurantType>
                <RestaurantName>Hioki Sushi</RestaurantName>
            </BannerText>
        </BannerContainer>
    )
}