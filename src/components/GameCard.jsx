
import { Card, Button } from "react-bootstrap";

function GameCard({ game, onEdit, onDelete }) {
  return (
    <Card className="game-card h-100 shadow-sm">
      <Card.Img
        variant="top"
        src={game.image}
        alt={game.title}
        className="game-image"
      />

      <Card.Body className="d-flex flex-column">
        <Card.Title>{game.title}</Card.Title>

        <Card.Text className="game-info">
          <strong>Genre:</strong> {game.genre}
          <br />
          <strong>Platform:</strong> {game.platform}
          <br />
          <strong>Price:</strong> ${Number(game.price).toFixed(2)}
        </Card.Text>

        <div className="mt-auto d-flex gap-2">
          <Button
            variant="warning"
            className="flex-grow-1"
            onClick={() => onEdit(game)}
          >
            Edit
          </Button>

          <Button
            variant="danger"
            className="flex-grow-1"
            onClick={() => onDelete(game.id)}
          >
            Delete
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
}

export default GameCard;
