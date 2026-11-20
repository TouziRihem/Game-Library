
import { useSelector, useDispatch } from "react-redux";
import { Row, Col } from "react-bootstrap";

import GameCard from "./GameCard";
import { deleteGame } from "../Redux/gamesSlice";

function GameList({ onEdit }) {
  const games = useSelector((state) => state.games.games);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteGame(id));
  };

  return (
    <div className="mt-5">
      <h2 className="section-title mb-4">My Games</h2>

      {games.length === 0 ? (
        <p className="text-center text-muted">
          No games available. Add your first game!
        </p>
      ) : (
        <Row>
          {games.map((game) => (
            <Col
              key={game.id}
              xs={12}
              sm={6}
              lg={4}
              xl={3}
              className="mb-4"
            >
              <GameCard
                game={game}
                onEdit={onEdit}
                onDelete={handleDelete}
              />
            </Col>
          ))}
        </Row>
      )}
    </div>
  );
}

export default GameList;
