import React from 'react';
import StarCard from "./components/StarCard";
import 'bootstrap/dist/css/bootstrap.min.css';
import { AppStyles } from "./components/styles";
import styled from "styled-components";

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.


  const App_container = styled.div`
  
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 2rem auto;
  `;



  return (
    <App_container>
    <h1 className="Header">React Wars</h1>
    <AppStyles>
      <StarCard />
      </AppStyles>
      </App_container>
  );
}

export default App;
