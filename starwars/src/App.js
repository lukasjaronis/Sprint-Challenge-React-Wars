import React, {useState, useEffect} from 'react';
import axios from "axios";
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

  const [character, setCharacter] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const  [charactersPerPage] = useState(3);

  const AppContainer = styled.div`
  
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 2rem auto;
  `;

useEffect(() => {
  axios
  .get(`https://swapi.co/api/people/`)
  .then(responseData => {
    setCharacter(responseData.data.results);
    console.log(responseData.data.results);
  })
}, [] )


const indexLastPerson = currentPage * charactersPerPage; // which pretty much = to 3 (1 * 3)
const indexFirstPerson = indexLastPerson - charactersPerPage; // again, = 3
const currentCharacters = character.slice(indexFirstPerson, indexLastPerson); // which means we're slicing the array 1 through 3.

const paginate = 
(pageNumber) => setCurrentPage(pageNumber);

  return (
    <AppContainer>
    <h1 className="Header">React Wars</h1>
    <AppStyles>
    {character.map(el => {
    return <StarCard charperpage={charactersPerPage} totalCharacters={character.length} paginate={paginate} el={el} key={el.name} />
    })}
    
      </AppStyles>
      </AppContainer>
  );
}

export default App;
