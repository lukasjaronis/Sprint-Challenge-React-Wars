import styled from "styled-components";

export const AppStyles = styled.div`
display: flex;
flex-direction: row;
justify-content: space-evenly;
background: rgba(245,245,245,0.5);
margin: 3rem auto;
height: 100%;
border-radius: 15px;
flex-grow: grow;

.Header {
     display: flex;
     align-self: center;
     text-align: center;
     letter-spacing: 1px;
     background: red;
}
`;

export const CardStyle = styled.div`
display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: center;
width: 400px;
height: 400px;
background: rgba(245,245,245,0.6);
border: 1px solid black;
border-radius: 15px;
margin: 2rem;

h2 {
     font-weight: 900;
     margin-top: 50px;
}

h3 {
     margin: 1rem;
     color: rgba(255,69,0,0.5);
}


}
`;