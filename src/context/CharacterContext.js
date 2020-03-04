import React, { createContext, useState } from "react";
import PropTypes from "prop-types";

export const CharacterContext = createContext({});

export const Provider = props => {
  // Initial values are obtained from the props
  const {
    characters: initialCharacters,
    selectedUser: initialSelectedCharacter
  } = props;

  // Use State to keep the values
  const [characters, setCharacters] = useState(initialCharacters);
  const [selectedCharacter, setSelectedCharacter] = useState(initialSelectedCharacter);

  /*const addNewUser = userName => {
    const newUser = { id: new Date().getTime().toString(), name: userName };
    setUsers(users.concat([newUser]));
  };*/

  // Make the context object:
  const characterContext = {
    characters,
    setCharacters,
    selectedCharacter,
    setSelectedCharacter
  };

  // pass the value in provider and return
  return <CharacterContext.Provider value={characterContext}></CharacterContext.Provider>;
};

export const { Consumer } = CharacterContext;

Provider.propTypes = {
  users: PropTypes.array,
  selectedUser: PropTypes.object
};

Provider.defaultProps = {
  users: [],
  selectedUser: {}
};