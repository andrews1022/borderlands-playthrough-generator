import {
  GAME_BORDERLANDS_1,
  GAME_BORDERLANDS_TPS,
  GAME_BORDERLANDS_2,
  GAME_BORDERLANDS_3
} from "../constants/games";

// types
type VaultHunter = {
  name: string;
  game: string;
};

const vaultHunters: VaultHunter[] = [
  // Borderlands 1
  { name: "Brick", game: GAME_BORDERLANDS_1 },
  { name: "Lilith", game: GAME_BORDERLANDS_1 },
  { name: "Mordecai", game: GAME_BORDERLANDS_1 },
  { name: "Roland", game: GAME_BORDERLANDS_1 },

  // Borderlands: The Pre-Sequel
  { name: "Athena", game: GAME_BORDERLANDS_TPS },
  { name: "Aurelia", game: GAME_BORDERLANDS_TPS },
  { name: "Claptrap", game: GAME_BORDERLANDS_TPS },
  { name: "Jack", game: GAME_BORDERLANDS_TPS },
  { name: "Nisha", game: GAME_BORDERLANDS_TPS },
  { name: "Wilhelm", game: GAME_BORDERLANDS_TPS },

  // Borderlands 2
  { name: "Axton", game: GAME_BORDERLANDS_2 },
  { name: "Gaige", game: GAME_BORDERLANDS_2 },
  { name: "Krieg", game: GAME_BORDERLANDS_2 },
  { name: "Maya", game: GAME_BORDERLANDS_2 },
  { name: "Salvador", game: GAME_BORDERLANDS_2 },
  { name: "Zer0", game: GAME_BORDERLANDS_2 },

  // Borderlands 3
  { name: "Amara", game: GAME_BORDERLANDS_3 },
  { name: "FL4K", game: GAME_BORDERLANDS_3 },
  { name: "Moze", game: GAME_BORDERLANDS_3 },
  { name: "Zane", game: GAME_BORDERLANDS_3 }
];

export default vaultHunters;
