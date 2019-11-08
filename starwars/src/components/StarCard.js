import React from "react";
import { CardStyle } from "./styles";

const StarCard = props => {
    return (
        <CardStyle>
        <h2>name</h2>
            <h3>Properties</h3>
            <span>Skin Color: </span>
            <span>Hair Color: </span>
            <span>Eye Color: </span>
            <span>Gender: </span>
            <span>Birth Year: </span>
        </CardStyle>
    )
}

export default StarCard