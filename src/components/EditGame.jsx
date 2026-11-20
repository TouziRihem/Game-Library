
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Form, Button, Modal } from "react-bootstrap";

import { updateGame } from "../Redux/gamesSlice";

function EditGame({ game, show, onCancel }) {
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    title: "",
    genre: "",
    platform: "",
    price: "",
    image: "",
  });

  useEffect(() => {
    if (game) {
      setFormData({
        title: game.title,
        genre: game.genre,
        platform: game.platform,
        price: game.price,
        image: game.image,
      });
    }
  }, [game]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const updatedGame = {
      ...formData,
      id: game.id,
      price: Number(formData.price),
    };

    dispatch(updateGame(updatedGame));

    onCancel();
  };

  return (
    <Modal show={show} onHide={onCancel} centered className="game-modal">
      <Modal.Header closeButton>
        <Modal.Title>Edit Game</Modal.Title>
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
              required
            />
          </Form.Group>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={onCancel}>
            Cancel
          </Button>

          <Button type="submit" className="save-game-btn">
            Save Changes
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  );
}

export default EditGame;
