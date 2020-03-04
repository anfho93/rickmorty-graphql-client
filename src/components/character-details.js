import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import useReducer  from '../hooks/useReducer';
import characterReducer from '../reducers/character';

function CharacterDetails(props) {
    const [show, setShow] = useState(true);
    
    
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
    return (
      <> 
        <Modal show={!!props.character && show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
  export default CharacterDetails;