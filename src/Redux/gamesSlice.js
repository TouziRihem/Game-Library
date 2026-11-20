
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  games: [
    {
      id: "1",
      title: "The Witcher 3",
      genre: "RPG",
      platform: "PC",
      price: 49.99,
      image: "https://img.youtube.com/vi/IGk17XQ7IrQ/maxresdefault.jpg",
    },
    {
      id: "2",
      title: "God of War",
      genre: "Action",
      platform: "PlayStation",
      price: 59.99,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQifDUHu3SiwUEpZFFnBD01VkEK_fg4FxVZM0Bo_x-GRjnlbk2yeUzTPh4&s=10",
    },
    {
      id: "3",
      title: "Forza Horizon 5",
      genre: "Racing",
      platform: "Xbox",
      price: 39.99,
      image: "https://store-images.s-microsoft.com/image/apps.33953.13734397844529069.202e3fc9-37d6-4853-a58b-fabe504b71e8.f2095594-0eab-4b96-92fd-f01b9cf9346f?w=562",
    },
    {
      id: "4",
      title: "Minecraft",
      genre: "Sandbox",
      platform: "PC",
      price: 29.99,
      image: "https://www.minecraft.net/content/dam/minecraftnet/games/minecraft/key-art/homepage_discover_our_games_mc_dungeons_ii_key_art_864x864.jpg?v=1779828502262",
    },
  ],
};

const gamesSlice = createSlice({
  name: "games",
  initialState,

  reducers: {
    addGame: (state, action) => {
      state.games.push(action.payload);
    },

    deleteGame: (state, action) => {
      state.games = state.games.filter(
        (game) => game.id !== action.payload
      );
    },

    updateGame: (state, action) => {
      const index = state.games.findIndex(
        (game) => game.id === action.payload.id
      );

      if (index !== -1) {
        state.games[index] = action.payload;
      }
    },
  },
});

export const { addGame, deleteGame, updateGame } =
  gamesSlice.actions;

export default gamesSlice.reducer;
