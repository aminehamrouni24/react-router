import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Form,
  FormGroup,
  Label,
  Input,
} from "reactstrap";

const AddMovie = (props) => {
  const { className, handleAdd } = props;
  const [newMovie, setNewMovie] = useState({
    id: uuidv4(),
    title: "",
    description: "",
    name: "",
    posterUrl: "",
    date: "",
    rate: 1,
  });
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div style={{marginLeft:'3%'}}>
      <Button color="success" onClick={toggle}>
        Add movie
      </Button>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>
          Please fill in the information below to add a new movie
        </ModalHeader>
        <ModalBody>
          <Form>
            <FormGroup>
              <Label>Title:</Label>
              <Input
                type="text"
                name="title"
                required
                placeholder="Enter a movie's title please "
                onChange={(e) =>
                  setNewMovie({ ...newMovie, [e.target.name]: e.target.value })
                }
              />
              <Label>Description:</Label>
              <Input
                type="text"
                placeholder="Describe the movie please "
                required
                name="description"
                onChange={(e) =>
                  setNewMovie({ ...newMovie, [e.target.name]: e.target.value })
                }
              />
              <Label>Release date:</Label>
              <Input
                type="text"
                placeholder="Enter the Release date"
                required
                name="date"
                onChange={(e) =>
                  setNewMovie({ ...newMovie, [e.target.name]: e.target.value })
                }
              />
              <Label>Poster URL:</Label>
              <Input
                type="text"
                name="posterUrl"
                required
                placeholder="Enter the poster's URL plz"
                onChange={(e) =>
                  setNewMovie({ ...newMovie, [e.target.name]: e.target.value })
                }
              />
            </FormGroup>
            <FormGroup>
              <Label>Rating:</Label>
              <Input
                type="number"
                name="rate"
                placeholder="Enter the associated rate to this movie"
                required
                max="5"
                min="1"
                onChange={(e) =>
                  setNewMovie({ ...newMovie, [e.target.name]: e.target.value })
                }
              />
            </FormGroup>
          </Form>
        </ModalBody>
        <ModalFooter>
          <Button
            color="primary"
            onClick={(e) => {
              handleAdd(newMovie);
              toggle();
              setNewMovie({
                id: uuidv4(),
                title: "",
                description: "",
                name: "",
                posterUrl: "",
                date: "",
                rate: 1,
              });
            }}
          >
            Save
          </Button>{" "}
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default AddMovie;
