// font awesome
import { faFistRaised, faIndustry, faStar, faGamepad } from '@fortawesome/free-solid-svg-icons';

// types
import { AllegianceOption, MainOption, MiscellaneousOption, RarityOption } from '../types/types';

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
	{ name: 'Atlas', game: 'Borderlands' },
	{ name: 'Dahl', game: 'Borderlands' },
	{ name: 'Eridian', game: 'Borderlands' },
	{ name: 'Hyperion', game: 'Borderlands' },
	{ name: 'Jakobs', game: 'Borderlands' },
	{ name: 'Maliwan', game: 'Borderlands' },
	{ name: 'S&S Munitions', game: 'Borderlands' },
	{ name: 'Tediore', game: 'Borderlands' },
	{ name: 'Torgue', game: 'Borderlands' },
	{ name: 'Vladof', game: 'Borderlands' },

	// Borderlands: The Pre-Sequel
	{ name: 'Dahl', game: 'Borderlands: The Pre-Sequel' },
	{ name: 'Hyperion', game: 'Borderlands: The Pre-Sequel' },
	{ name: 'Jakobs', game: 'Borderlands: The Pre-Sequel' },
	{ name: 'Maliwan', game: 'Borderlands: The Pre-Sequel' },
	{ name: 'Scav', game: 'Borderlands: The Pre-Sequel' },
	{ name: 'Tediore', game: 'Borderlands: The Pre-Sequel' },
	{ name: 'Torgue', game: 'Borderlands: The Pre-Sequel' },
	{ name: 'Vladof', game: 'Borderlands: The Pre-Sequel' },

	// Borderlands 2
	{ name: 'Bandit', game: 'Borderlands 2' },
	{ name: 'Dahl', game: 'Borderlands 2' },
	{ name: 'Hyperion', game: 'Borderlands 2' },
	{ name: 'Jakobs', game: 'Borderlands 2' },
	{ name: 'Maliwan', game: 'Borderlands 2' },
	{ name: 'Tediore', game: 'Borderlands 2' },
	{ name: 'Torgue', game: 'Borderlands 2' },
	{ name: 'Vladof', game: 'Borderlands 2' },

	// Borderlands 3
	{ name: 'Atlas', game: 'Borderlands 3' },
	{ name: 'COV', game: 'Borderlands 3' },
	{ name: 'Dahl', game: 'Borderlands 3' },
	{ name: 'Hyperion', game: 'Borderlands 3' },
	{ name: 'Jakobs', game: 'Borderlands 3' },
	{ name: 'Maliwan', game: 'Borderlands 3' },
	{ name: 'Tediore', game: 'Borderlands 3' },
	{ name: 'Torgue', game: 'Borderlands 3' },
	{ name: 'Vladof', game: 'Borderlands 3' }
];

export const rarityOptions: RarityOption[] = [
	// Borderlands 1
	{ rarity: 'Common', game: 'Borderlands' },
	{ rarity: 'Uncommon', game: 'Borderlands' },
	{ rarity: 'Rare', game: 'Borderlands' },
	{ rarity: 'Epic', game: 'Borderlands' },
	{ rarity: 'Legendary', game: 'Borderlands' },
	{ rarity: 'Pearlescent', game: 'Borderlands' },

	// Borderlands: The Pre-Sequel
	{ rarity: 'Common', game: 'Borderlands' },
	{ rarity: 'Uncommon', game: 'Borderlands' },
	{ rarity: 'Rare', game: 'Borderlands' },
	{ rarity: 'Epic', game: 'Borderlands' },
	{ rarity: 'Glitch', game: 'Borderlands' },
	{ rarity: 'Legendary', game: 'Borderlands' },

	// Borderlands 2
	{ rarity: 'Common', game: 'Borderlands 2' },
	{ rarity: 'Uncommon', game: 'Borderlands 2' },
	{ rarity: 'Rare', game: 'Borderlands 2' },
	{ rarity: 'Epic', game: 'Borderlands 2' },
	{ rarity: 'Legendary', game: 'Borderlands 2' },
	{ rarity: 'E-Tech', game: 'Borderlands 2' },
	{ rarity: 'Seraph', game: 'Borderlands 2' },
	{ rarity: 'Pearlescent', game: 'Borderlands 2' },
	{ rarity: 'Effervescent', game: 'Borderlands 2' },

	// Borderlands 3
	{ rarity: 'Common', game: 'Borderlands 3' },
	{ rarity: 'Uncommon', game: 'Borderlands 3' },
	{ rarity: 'Rare', game: 'Borderlands 3' },
	{ rarity: 'Epic', game: 'Borderlands 3' },
	{ rarity: 'Legendary', game: 'Borderlands 3' }
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
