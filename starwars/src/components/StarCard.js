import React from "react";
import { CardStyle } from "./styles";

const StarCard = props => {
    return (
        <CardStyle>
        <h2>{props.el.name}</h2>
            <h3>Properties</h3>
            <span>Skin Color: {props.el.skin_color}</span>
            <span>Hair Color:  {props.el.hair_color}</span>
            <span>Eye Color: {props.el.eye_color}</span>
            <span>Gender: {props.el.gender}</span>
            <span>Birth Year: {props.el.birth_year}</span>
        </CardStyle>
    )
}

export default StarCard