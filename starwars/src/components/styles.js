import styled from "styled-components";

export const AppStyles = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
background: rgba(245,245,245,0.5);
margin: 3rem auto;
height: 100%;
width: 90%;
border-radius: 15px;

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
     margin-top: 50px;
}

.properties {
     display: flex;
flex-direction: column;
justify-content: center;
align-items: center;


     span {
          margin: 3px;
     }

}

}
`;