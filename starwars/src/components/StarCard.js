import React from "react";
import { CardStyle } from "./styles";



const StarCard = (props) => {
        return (
            <CardStyle>
            <h2>{props.element.name}</h2>
                <h3>Properties</h3>
                <span>Skin Color: {props.element.skin_color}</span>
                <span>Hair Color:  {props.element.hair_color}</span>
                <span>Eye Color: {props.element.eye_color}</span>
                <span>Gender: {props.element.gender}</span>
                <span>Birth Year: {props.element.birth_year}</span>
            </CardStyle>
        )
}

export default StarCard