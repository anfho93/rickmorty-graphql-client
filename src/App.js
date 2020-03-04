import React, { useState } from 'react';
import './App.css';

import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import Characters from './components/characters';
import 'bootstrap/dist/css/bootstrap.min.css';
import CharacterDetails from './components/character-details';

const client = new ApolloClient({
  uri: 'https://rickandmortyapi.com/graphql',
});

const App = () => {
  const [character, setCharacter] = useState(null);
  const setSelectedCharater = (character) => {
    console.log('set:', character);
    setCharacter(character);
  }
  return <ApolloProvider client={client}>
    <div style={{ 'textAlign': 'center' }}>
      <h2>Rick and Morty API <span rol='img'>🚀</span></h2>
      <div className="d-flex flex-wrap" >
        <Characters setSelectedCharater={setSelectedCharater} />
        <CharacterDetails character={character} />
      </div>
    </div>
  </ApolloProvider>
}



export default App;
