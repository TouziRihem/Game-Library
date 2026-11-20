
import { useState } from "react";
import { Container, Navbar } from "react-bootstrap";
import logo from "/assets/logo.png"
import GameList from "./components/GameList";
import AddGame from "./components/AddGame";
import EditGame from "./components/EditGame";

import "./App.css";

function App() {
  const [selectedGame, setSelectedGame] = useState(null);

  const handleEdit = (game) => {
    setSelectedGame(game);
  };

  const handleCloseEdit = () => {
    setSelectedGame(null);
  };

  return (
    <div className="app">
      <Navbar className="game-navbar py-3">
        <Container>
          <Navbar.Brand className="game-brand">
            <img src={logo} width="50px"/>
             Game Library
          </Navbar.Brand>
        </Container>
      </Navbar>

      <Container className="py-5">
        <div className="text-center mb-4">
          <h1 className="main-title">
            My Video Game Collection
          </h1>

          <p className="subtitle">
            Your games. Your collection. Your universe.
          </p>
        </div>

        {/* Add Game button and modal */}
        <AddGame />

        {/* Display all games */}
        <GameList onEdit={handleEdit} />

        {/* Edit Game modal */}
        <EditGame
          game={selectedGame}
          show={selectedGame !== null}
          onCancel={handleCloseEdit}
        />
      </Container>

      <footer className="footer">
        <p>© 2026 Game Library - All Rights Reserved</p>
      </footer>
    </div>
  );
}

export default App;
