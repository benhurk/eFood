import { BannerContainer, BannerImg, BannerText, RestaurantName, RestaurantType } from "./styled";

type Props = {
    image: string;
    type: string;
    name: string;
}

export default function RestaurantBanner({image, type, name}: Props) {
    return (
        <BannerContainer>
            <BannerImg style={{backgroundImage: `url(${image})`}} />
            <BannerText className="container">
                <RestaurantType>{type}</RestaurantType>
                <RestaurantName>{name}</RestaurantName>
            </BannerText>
        </BannerContainer>
    )
}