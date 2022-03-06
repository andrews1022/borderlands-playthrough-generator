// font awesome
import { faFistRaised, faIndustry, faStar, faGamepad } from '@fortawesome/free-solid-svg-icons';

// constants
import {
  GAME_BORDERLANDS_1,
  GAME_BORDERLANDS_2,
  GAME_BORDERLANDS_3,
  GAME_BORDERLANDS_TPS
} from '../constants/games';

import {
  MANUFACTURER_ATLAS,
  MANUFACTURER_BANDIT,
  MANUFACTURER_COV,
  MANUFACTURER_DAHL,
  MANUFACTURER_ERIDIAN,
  MANUFACTURER_HYPERION,
  MANUFACTURER_JAKOBS,
  MANUFACTURER_MALIWAN,
  MANUFACTURER_SCAV,
  MANUFACTURER_SS_MUNITIONS,
  MANUFACTURER_TEDIORE,
  MANUFACTURER_TORGUE,
  MANUFACTURER_VLADOF
} from '../constants/manufacturers';

import {
  RARITY_COMMON,
  RARITY_EFFERVESCENT,
  RARITY_EPIC,
  RARITY_ETECH,
  RARITY_GLITCH,
  RARITY_LEGENDARY,
  RARITY_PEARLESCENT,
  RARITY_RARE,
  RARITY_SERAPH,
  RARITY_UNCOMMON
} from '../constants/rarities';

// global types
import { MainOption } from '../types/types';

// local types
type AllegianceOption = {
  manufacturer: string;
  game: string;
};

type MiscellaneousOption = {
  name: string;
  description: string;
};

type RarityOption = {
  rarity: string;
  game: string;
};

export const options: MainOption[] = [
  {
    name: 'Superiority',
    description: 'is when you may only use items of a specific type',
    icon: faFistRaised
  },
  {
    name: 'Allegiance',
    description: 'is when you may only use items from one manufacturer',
    icon: faIndustry
  },
  {
    name: 'Rarity',
    description: 'is when you may only use items of a specific rarity',
    icon: faStar
  },
  {
    name: 'Miscellaneous',
    description: "could be anything that's not one of the other run types",
    icon: faGamepad
  }
];

export const superiorityOptions = [
  'Assault Rifle',
  'Grenade',
  'Melee',
  'Pistol',
  'Rocket Launcher',
  'Shotgun',
  'SMG',
  'Sniper'
];

export const allegianceOptions: AllegianceOption[] = [
  // Borderlands 1
  { manufacturer: MANUFACTURER_ATLAS, game: GAME_BORDERLANDS_1 },
  { manufacturer: MANUFACTURER_DAHL, game: GAME_BORDERLANDS_1 },
  { manufacturer: MANUFACTURER_ERIDIAN, game: GAME_BORDERLANDS_1 },
  { manufacturer: MANUFACTURER_HYPERION, game: GAME_BORDERLANDS_1 },
  { manufacturer: MANUFACTURER_JAKOBS, game: GAME_BORDERLANDS_1 },
  { manufacturer: MANUFACTURER_MALIWAN, game: GAME_BORDERLANDS_1 },
  { manufacturer: MANUFACTURER_SS_MUNITIONS, game: GAME_BORDERLANDS_1 },
  { manufacturer: MANUFACTURER_TEDIORE, game: GAME_BORDERLANDS_1 },
  { manufacturer: MANUFACTURER_TORGUE, game: GAME_BORDERLANDS_1 },
  { manufacturer: MANUFACTURER_VLADOF, game: GAME_BORDERLANDS_1 },

  // Borderlands: The Pre-Sequel
  { manufacturer: MANUFACTURER_DAHL, game: GAME_BORDERLANDS_TPS },
  { manufacturer: MANUFACTURER_HYPERION, game: GAME_BORDERLANDS_TPS },
  { manufacturer: MANUFACTURER_JAKOBS, game: GAME_BORDERLANDS_TPS },
  { manufacturer: MANUFACTURER_MALIWAN, game: GAME_BORDERLANDS_TPS },
  { manufacturer: MANUFACTURER_SCAV, game: GAME_BORDERLANDS_TPS },
  { manufacturer: MANUFACTURER_TEDIORE, game: GAME_BORDERLANDS_TPS },
  { manufacturer: MANUFACTURER_TORGUE, game: GAME_BORDERLANDS_TPS },
  { manufacturer: MANUFACTURER_VLADOF, game: GAME_BORDERLANDS_TPS },

  // Borderlands 2
  { manufacturer: MANUFACTURER_BANDIT, game: GAME_BORDERLANDS_2 },
  { manufacturer: MANUFACTURER_DAHL, game: GAME_BORDERLANDS_2 },
  { manufacturer: MANUFACTURER_HYPERION, game: GAME_BORDERLANDS_2 },
  { manufacturer: MANUFACTURER_JAKOBS, game: GAME_BORDERLANDS_2 },
  { manufacturer: MANUFACTURER_MALIWAN, game: GAME_BORDERLANDS_2 },
  { manufacturer: MANUFACTURER_TEDIORE, game: GAME_BORDERLANDS_2 },
  { manufacturer: MANUFACTURER_TORGUE, game: GAME_BORDERLANDS_2 },
  { manufacturer: MANUFACTURER_VLADOF, game: GAME_BORDERLANDS_2 },

  // Borderlands 3
  { manufacturer: MANUFACTURER_ATLAS, game: GAME_BORDERLANDS_3 },
  { manufacturer: MANUFACTURER_COV, game: GAME_BORDERLANDS_3 },
  { manufacturer: MANUFACTURER_DAHL, game: GAME_BORDERLANDS_3 },
  { manufacturer: MANUFACTURER_HYPERION, game: GAME_BORDERLANDS_3 },
  { manufacturer: MANUFACTURER_JAKOBS, game: GAME_BORDERLANDS_3 },
  { manufacturer: MANUFACTURER_MALIWAN, game: GAME_BORDERLANDS_3 },
  { manufacturer: MANUFACTURER_TEDIORE, game: GAME_BORDERLANDS_3 },
  { manufacturer: MANUFACTURER_TORGUE, game: GAME_BORDERLANDS_3 },
  { manufacturer: MANUFACTURER_VLADOF, game: GAME_BORDERLANDS_3 }
];

export const rarityOptions: RarityOption[] = [
  // Borderlands 1
  { rarity: RARITY_COMMON, game: GAME_BORDERLANDS_1 },
  { rarity: RARITY_UNCOMMON, game: GAME_BORDERLANDS_1 },
  { rarity: RARITY_RARE, game: GAME_BORDERLANDS_1 },
  { rarity: RARITY_EPIC, game: GAME_BORDERLANDS_1 },
  { rarity: RARITY_LEGENDARY, game: GAME_BORDERLANDS_1 },
  { rarity: RARITY_PEARLESCENT, game: GAME_BORDERLANDS_1 },

  // Borderlands: The Pre-Sequel
  { rarity: RARITY_COMMON, game: GAME_BORDERLANDS_TPS },
  { rarity: RARITY_UNCOMMON, game: GAME_BORDERLANDS_TPS },
  { rarity: RARITY_RARE, game: GAME_BORDERLANDS_TPS },
  { rarity: RARITY_EPIC, game: GAME_BORDERLANDS_TPS },
  { rarity: RARITY_GLITCH, game: GAME_BORDERLANDS_TPS },
  { rarity: RARITY_LEGENDARY, game: GAME_BORDERLANDS_TPS },

  // Borderlands 2
  { rarity: RARITY_COMMON, game: GAME_BORDERLANDS_2 },
  { rarity: RARITY_UNCOMMON, game: GAME_BORDERLANDS_2 },
  { rarity: RARITY_RARE, game: GAME_BORDERLANDS_2 },
  { rarity: RARITY_EPIC, game: GAME_BORDERLANDS_2 },
  { rarity: RARITY_LEGENDARY, game: GAME_BORDERLANDS_2 },
  { rarity: RARITY_ETECH, game: GAME_BORDERLANDS_2 },
  { rarity: RARITY_SERAPH, game: GAME_BORDERLANDS_2 },
  { rarity: RARITY_PEARLESCENT, game: GAME_BORDERLANDS_2 },
  { rarity: RARITY_EFFERVESCENT, game: GAME_BORDERLANDS_2 },

  // Borderlands 3
  { rarity: RARITY_COMMON, game: GAME_BORDERLANDS_3 },
  { rarity: RARITY_UNCOMMON, game: GAME_BORDERLANDS_3 },
  { rarity: RARITY_RARE, game: GAME_BORDERLANDS_3 },
  { rarity: RARITY_EPIC, game: GAME_BORDERLANDS_3 },
  { rarity: RARITY_LEGENDARY, game: GAME_BORDERLANDS_3 }
];

export const miscellaneousOptions: MiscellaneousOption[] = [
  {
    name: 'And...Action',
    description:
      'may only use your action skill. You can still equip a shield, class mod, and artifact, but may not equip any weapon or grenade'
  },
  {
    name: 'Anti-Looter',
    description:
      'may not use an item if it comes from a container of some kind (chest, ammo box, etc.)'
  },
  {
    name: 'Bigger is Better',
    description:
      'have to replace your lowest damage weapon if you find something with a higher damage number. The same goes for grenades and shields. For shields, use shield capacity'
  },
  {
    name: 'Brave the Elements',
    description: 'may not use elemental items'
  },
  {
    name: 'Call of Borderlands',
    description:
      'may only have two guns equipped at any time. You can still equip a shield, class mod, grenade, and artifact as you normally would'
  },
  {
    name: 'Cheapskate',
    description:
      'may not spend any money at all. Purchasing SDU upgrades is allowed, and so is spending Eridium'
  },
  {
    name: 'Elemental Only',
    description: 'may only use items if they are elemental'
  },
  {
    name: 'Empty or Full',
    description: 'cannot reload until the current magazine is empty'
  },
  {
    name: 'EXPLOSIONS',
    description: 'may only use explosive items to deal damage'
  },
  {
    name: 'Extravagance',
    description:
      'may only use an item if it costs more than the one you currently have equipped. You may only have 1 weapon equipped at a time'
  },
  {
    name: 'Feelin Lucky',
    description: 'may only use items received from slot machines'
  },
  {
    name: 'Flesh and Bones',
    description: 'may not equip a shield'
  },
  {
    name: 'Get On My Level',
    description:
      'may only use items that are the same level as you are. When you level up, you must sell all items below your current level'
  },
  {
    name: 'Gimme The Good Stuff',
    description:
      'may only use items dropped from unique enemies (named enemies, mini-bosses, bosses, etc.)'
  },
  {
    name: 'Gunless',
    description:
      'may not use any guns. You may use everything else (shield, class mod, artifact, grenade, and action skill)'
  },
  {
    name: 'Hardcore',
    description: 'only have one life. If your vault hunter dies, you delete the save and start over'
  },
  {
    name: 'Hoarder',
    description: 'must pickup every item you come across (you do not have to equip it)'
  },
  {
    name: 'Hold On To That There Rid-Rock',
    description: 'may not spend any Eridium'
  },
  {
    name: 'Keeping It Simple',
    description: 'may not use items with red flavour text'
  },
  {
    name: 'Lack of Skill',
    description: 'may not allocate any skill points (including your action skill)'
  },
  {
    name: 'Light Traveller',
    description: 'are not allowed to hold items except the items you have equipped '
  },
  {
    name: 'On My Own',
    description:
      'do not use vending machines to buy or sell items or ammo. Purchasing SDU upgrades is allowed'
  },
  {
    name: 'Penny Pincher',
    description:
      'may only use an item if it costs less than the one you currently have equipped. You may only have 1 weapon equipped at a time'
  },
  {
    name: 'Postman',
    description: 'may only use items sent to you via mail (Borderlands 3 only)'
  },
  {
    name: 'Proper Killer',
    description: 'may not melee enemies during combat'
  },
  {
    name: 'Random Skills',
    description:
      'must roll a random number every time you have to put in a skill point to see where it goes'
  },
  {
    name: 'Rebirth',
    description:
      'die, you have to drop both all items you currently have equipped, and all items currently in your backpack'
  },
  {
    name: 'Scavenger',
    description:
      'have to equip and replace a currently equipped item with any new item you come across'
  },
  {
    name: 'Shop Till You Drop',
    description: 'may only use items purchased from vending machines'
  },
  {
    name: 'Speedrun',
    description: 'try to complete the game as quick as possible'
  },
  {
    name: 'Spray and Pray',
    description: 'shoot from the hip only (no aiming down sights)'
  },
  {
    name: 'To Valhalla',
    description:
      'may not get second wind, be revived, or revive other players. You must bleed out and respawn each time you go down'
  },
  {
    name: 'Treasure Seeker',
    description:
      'may only use an item if it comes from a container of some kind (chest, ammo box, etc.)'
  },
  {
    name: 'You Paid For It',
    description: 'complete all DLC before proceeding with the main story'
  }
];
