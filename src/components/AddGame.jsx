
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Form, Button, Modal } from "react-bootstrap";

import { addGame } from "../Redux/gamesSlice";

function AddGame() {
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);

  const [formData, setFormData] = useState({
    title: "",
    genre: "",
    platform: "",
    price: "",
    image: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newGame = {
      ...formData,
      id: crypto.randomUUID(),
      price: Number(formData.price),
    };

    dispatch(addGame(newGame));

    setFormData({
      title: "",
      genre: "",
      platform: "",
      price: "",
      image: "",
    });

    setShow(false);
  };

  return (
    <>
      <div className="text-center mb-5">
        <Button
          className="add-game-btn"
          onClick={() => setShow(true)}
        >
          + Add New Game
        </Button>
      </div>

      <Modal
        show={show}
        onHide={() => setShow(false)}
        centered
        className="game-modal"
      >
        <Modal.Header closeButton>
          <Modal.Title>Add a New Game</Modal.Title>
        </Modal.Header>

        <Form onSubmit={handleSubmit}>
          <Modal.Body>
            <Form.Group className="mb-3">
              <Form.Label>Game Title</Form.Label>
              <Form.Control
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
                placeholder="Enter game title"
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Genre</Form.Label>
              <Form.Control
                type="text"
                name="genre"
                value={formData.genre}
                onChange={handleChange}
                placeholder="e.g. Action, RPG, Racing"
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Platform</Form.Label>
              <Form.Select
                name="platform"
                value={formData.platform}
                onChange={handleChange}
                required
              >
                <option value="">Select a platform</option>
                <option value="PC">PC</option>
                <option value="PlayStation">PlayStation</option>
                <option value="Xbox">Xbox</option>
                <option value="Nintendo Switch">Nintendo Switch</option>
                <option value="Mobile">Mobile</option>
              </Form.Select>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Price ($)</Form.Label>
              <Form.Control
                type="number"
                name="price"
                value={formData.price}
                onChange={handleChange}
                placeholder="Enter price"
                min="0"
                step="0.01"
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Image URL</Form.Label>
              <Form.Control
                type="url"
                name="image"
                value={formData.image}
                onChange={handleChange}
                placeholder="https://example.com/game.jpg"
                required
              />
            </Form.Group>
          </Modal.Body>

          <Modal.Footer>
            <Button
              variant="secondary"
              onClick={() => setShow(false)}
            >
              Cancel
            </Button>

            <Button
              type="submit"
              className="save-game-btn"
            >
              Add Game
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </>
  );
}

export default AddGame;
