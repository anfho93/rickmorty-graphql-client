import React, { useContext } from 'react';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import { Card, Button, Badge } from 'react-bootstrap';
import useReducer from '../hooks/useReducer';
import characterReducer from '../reducers/character';
import { CharacterContext } from "../context/CharacterContext";

const CHARACTERS = gql`
    {
        characters {
            results {
                id,
                name,
                gender,
                image,
                image,
                status,
                episode {
                  id,
                  name,
                  air_date
                }
            }
        }
    }
`;

const Characters = (props) => {
  const { loading, error, data } = useQuery(CHARACTERS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  const {setSelectedCharater} = props;

  return data.characters.results.map((character) => (
    <div key={character.id}>
      <Card style={{ width: '18rem', 'margin': '11px' }}>
        <Card.Img variant="top" src={character.image} />
        <Card.Body>
          <Card.Title>{character.name}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            Gender: {character.gender}
          </Card.Subtitle>
          <Card.Text>
            {
              character.status.toLowerCase() === 'alive' ?
                <Badge pill variant="success">{character.status}</Badge> :
                character.status.toLowerCase() === 'dead' ?
                  <Badge pill variant="danger">{character.status}</Badge> :
                  <Badge pill variant="dark">{character.status}</Badge>
            }
          </Card.Text>
          <Button variant="primary" onClick={() => setSelectedCharater(character)}>Details</Button>
        </Card.Body>
      </Card>
    </div>
  ));
}

export default Characters;
