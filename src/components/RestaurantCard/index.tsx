import { Link } from "react-router-dom";
import star from '../../assets/star.svg';

import { CardContainer, RestaurantBanner, RestaurantBody, RestaurantLink, RestaurantRating, RestaurantTag, TitleArea } from "./styled"

export type Props = {
    id: number;
    banner: string,
    name: string,
    rating: number,
    description: string,
    tags: string[]
}

export default function RestaurantCard({id, banner, name, rating, description, tags}: Props) {
    return (
        <CardContainer>
            <Link to={`/restaurante/${id}`}>
                <RestaurantBanner style={{backgroundImage: `url(${banner})`}}>
                    {
                        tags.map(tag => (
                            tag &&
                            <RestaurantTag key={tag}>{tag}</RestaurantTag>
                        ))
                    }
                </RestaurantBanner>
            </Link>
            <RestaurantBody>
                <TitleArea>
                    <h3 className="restaurant_name">{name}</h3>
                    <RestaurantRating>
                        <span>{rating}</span>
                        <img src={star}></img>
                    </RestaurantRating>
                </TitleArea>
                <p className="restaurant_description">
                    {description}
                </p>
                <RestaurantLink to={`/restaurante/${id}`}>Saiba mais</RestaurantLink>
            </RestaurantBody>
        </CardContainer>
    )
}