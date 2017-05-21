
export const recipeInfo = {
    "piercing-rounds-magazine": {
        "result": "piercing-rounds-magazine",
        "energy_required": 3,
        "enabled": false,
        "type": "recipe",
        "ingredients": [
            [
                "firearm-magazine",
                1
            ],
            [
                "steel-plate",
                1
            ],
            [
                "copper-plate",
                5
            ]
        ],
        "name": "piercing-rounds-magazine"
    },
    "uranium-rounds-magazine": {
        "result": "uranium-rounds-magazine",
        "energy_required": 10,
        "enabled": false,
        "type": "recipe",
        "ingredients": [
            [
                "piercing-rounds-magazine",
                1
            ],
            [
                "uranium-238",
                1
            ]
        ],
        "name": "uranium-rounds-magazine"
    },
    "rocket": {
        "result": "rocket",
        "energy_required": 8,
        "enabled": false,
        "type": "recipe",
        "ingredients": [
            [
                "electronic-circuit",
                1
            ],
            [
                "explosives",
                1
            ],
            [
                "iron-plate",
                2
            ]
        ],
        "name": "rocket"
    },
    "explosive-rocket": {
        "result": "explosive-rocket",
        "energy_required": 8,
        "enabled": false,
        "type": "recipe",
        "ingredients": [
            [
                "rocket",
                1
            ],
            [
                "explosives",
                2
            ]
        ],
        "name": "explosive-rocket"
    },
    "atomic-bomb": {
        "result": "atomic-bomb",
        "energy_required": 50,
        "enabled": false,
        "type": "recipe",
        "ingredients": [
            [
                "processing-unit",
                20
            ],
            [
                "explosives",
                10
            ],
            [
                "uranium-235",
                30
            ]
        ],
        "name": "atomic-bomb"
    },
    "shotgun-shell": {
        "result": "shotgun-shell",
        "energy_required": 3,
        "enabled": false,
        "type": "recipe",
        "ingredients": [
            [
                "copper-plate",
                2
            ],
            [
                "iron-plate",
                2
            ]
        ],
        "name": "shotgun-shell"
    },
    "piercing-shotgun-shell": {
        "result": "piercing-shotgun-shell",
        "energy_required": 8,
        "enabled": false,
        "type": "recipe",
        "ingredients": [
            [
                "shotgun-shell",
                2
            ],
            [
                "copper-plate",
                5
            ],
            [
                "steel-plate",
                2
            ]
        ],
        "name": "piercing-shotgun-shell"
    },
    "railgun-dart": {
        "result": "railgun-dart",
        "energy_required": 8,
        "enabled": false,
        "type": "recipe",
        "ingredients": [
            [
                "steel-plate",
                5
            ],
            [
                "electronic-circuit",
                5
            ]
        ],
        "name": "railgun-dart"
    },
    "cannon-shell": {
        "expensive": {
            "result": "cannon-shell",
            "enabled": false,
            "energy_required": 8,
            "ingredients": [
                [
                    "steel-plate",
                    4
                ],
                [
                    "plastic-bar",
                    4
                ],
                [
                    "explosives",
                    1
                ]
            ]
        },
        "normal": {
            "result": "cannon-shell",
            "enabled": false,
            "energy_required": 8,
            "ingredients": [
                [
                    "steel-plate",
                    2
                ],
                [
                    "plastic-bar",
                    2
                ],
                [
                    "explosives",
                    1
                ]
            ]
        },
        "name": "cannon-shell",
        "type": "recipe"
    },
    "explosive-cannon-shell": {
        "expensive": {
            "result": "explosive-cannon-shell",
            "enabled": false,
            "energy_required": 8,
            "ingredients": [
                [
                    "steel-plate",
                    4
                ],
                [
                    "plastic-bar",
                    4
                ],
                [
                    "explosives",
                    2
                ]
            ]
        },
        "normal": {
            "result": "explosive-cannon-shell",
            "enabled": false,
            "energy_required": 8,
            "ingredients": [
                [
                    "steel-plate",
                    2
                ],
                [
                    "plastic-bar",
                    2
                ],
                [
                    "explosives",
                    2
                ]
            ]
        },
        "name": "explosive-cannon-shell",
        "type": "recipe"
    },
    "uranium-cannon-shell": {
        "result": "uranium-cannon-shell",
        "energy_required": 12,
        "enabled": false,
        "type": "recipe",
        "ingredients": [
            [
                "cannon-shell",
                1
            ],
            [
                "uranium-238",
                1
            ]
        ],
        "name": "uranium-cannon-shell"
    },
    "explosive-uranium-cannon-shell": {
        "result": "explosive-uranium-cannon-shell",
        "energy_required": 12,
        "enabled": false,
        "type": "recipe",
        "ingredients": [
            [
                "explosive-cannon-shell",
                1
            ],
            [
                "uranium-238",
                1
            ]
        ],
        "name": "explosive-uranium-cannon-shell"
    },
    "flamethrower-ammo": {
        "result": "flamethrower-ammo",
        "category": "chemistry",
        "enabled": false,
        "ingredients": [
            {
                "amount": 5,
                "type": "item",
                "name": "steel-plate"
            },
            {
                "amount": 50,
                "type": "fluid",
                "name": "light-oil"
            },
            {
                "amount": 50,
                "type": "fluid",
                "name": "heavy-oil"
            }
        ],
        "crafting_machine_tint": {
            "primary": {
                "r": 0.845,
                "b": 0,
                "g": 0.533,
                "a": 0
            },
            "secondary": {
                "r": 0.655,
                "b": 0,
                "g": 0,
                "a": 0
            },
            "tertiary": {
                "r": 0.685,
                "b": 0,
                "g": 0.329,
                "a": 0
            }
        },
        "type": "recipe",
        "name": "flamethrower-ammo",
        "energy_required": 6
    },
    "poison-capsule": {
        "result": "poison-capsule",
        "energy_required": 8,
        "enabled": false,
        "type": "recipe",
        "ingredients": [
            [
                "steel-plate",
                3
            ],
            [
                "electronic-circuit",
                3
            ],
            [
                "coal",
                10
            ]
        ],
        "name": "poison-capsule"
    },
    "slowdown-capsule": {
        "result": "slowdown-capsule",
        "energy_required": 8,
        "enabled": false,
        "type": "recipe",
        "ingredients": [
            [
                "steel-plate",
                2
            ],
            [
                "electronic-circuit",
                2
            ],
            [
                "coal",
                5
            ]
        ],
        "name": "slowdown-capsule"
    },
    "grenade": {
        "result": "grenade",
        "energy_required": 8,
        "enabled": false,
        "type": "recipe",
        "ingredients": [
            [
                "iron-plate",
                5
            ],
            [
                "coal",
                10
            ]
        ],
        "name": "grenade"
    },
    "cluster-grenade": {
        "result": "cluster-grenade",
        "energy_required": 8,
        "enabled": false,
        "type": "recipe",
        "ingredients": [
            [
                "grenade",
                7
            ],
            [
                "explosives",
                5
            ],
            [
                "steel-plate",
                5
            ]
        ],
        "name": "cluster-grenade"
    },
    "defender-capsule": {
        "result": "defender-capsule",
        "energy_required": 8,
        "enabled": false,
        "type": "recipe",
        "ingredients": [
            [
                "piercing-rounds-magazine",
                1
            ],
            [
                "electronic-circuit",
                2
            ],
            [
                "iron-gear-wheel",
                3
            ]
        ],
        "name": "defender-capsule"
    },
    "distractor-capsule": {
        "result": "distractor-capsule",
        "energy_required": 15,
        "enabled": false,
        "type": "recipe",
        "ingredients": [
            [
                "defender-capsule",
                4
            ],
            [
                "advanced-circuit",
                3
            ]
        ],
        "name": "distractor-capsule"
    },
    "destroyer-capsule": {
        "result": "destroyer-capsule",
        "energy_required": 15,
        "enabled": false,
        "type": "recipe",
        "ingredients": [
            [
                "distractor-capsule",
                4
            ],
            [
                "speed-module",
                1
            ]
        ],
        "name": "destroyer-capsule"
    },
    "discharge-defense-remote": {
        "result": "discharge-defense-remote",
        "enabled": false,
        "type": "recipe",
        "ingredients": [
            [
                "electronic-circuit",
                1
            ]
        ],
        "name": "discharge-defense-remote"
    },
    "copper-plate": {
        "result": "copper-plate",
        "category": "smelting",
        "energy_required": 3.5,
        "type": "recipe",
        "ingredients": [
            [
                "copper-ore",
                1
            ]
        ],
        "name": "copper-plate"
    },
    "iron-plate": {
        "result": "iron-plate",
        "category": "smelting",
        "energy_required": 3.5,
        "type": "recipe",
        "ingredients": [
            [
                "iron-ore",
                1
            ]
        ],
        "name": "iron-plate"
    },
    "stone-brick": {
        "result": "stone-brick",
        "category": "smelting",
        "enabled": true,
        "ingredients": [
            [
                "stone",
                2
            ]
        ],
        "type": "recipe",
        "energy_required": 3.5,
        "name": "stone-brick"
    },
    "wood": {
        "result": "wood",
        "result_count": 2,
        "type": "recipe",
        "ingredients": [
            [
                "raw-wood",
                1
            ]
        ],
        "name": "wood"
    },
    "wooden-chest": {
        "result": "wooden-chest",
        "requester_paste_multiplier": 4,
        "type": "recipe",
        "ingredients": [
            [
                "wood",
                4
            ]
        ],
        "name": "wooden-chest"
    },
    "iron-stick": {
        "result": "iron-stick",
        "result_count": 2,
        "type": "recipe",
        "ingredients": [
            [
                "iron-plate",
                1
            ]
        ],
        "name": "iron-stick"
    },
    "iron-axe": {
        "result": "iron-axe",
        "type": "recipe",
        "ingredients": [
            [
                "iron-stick",
                2
            ],
            [
                "iron-plate",
                3
            ]
        ],
        "name": "iron-axe"
    },
    "stone-furnace": {
        "result": "stone-furnace",
        "type": "recipe",
        "ingredients": [
            [
                "stone",
                5
            ]
        ],
        "name": "stone-furnace"
    },
    "boiler": {
        "result": "boiler",
        "type": "recipe",
        "ingredients": [
            [
                "stone-furnace",
                1
            ],
            [
                "pipe",
                4
            ]
        ],
        "name": "boiler"
    },
    "steam-engine": {
        "expensive": {
            "result": "steam-engine",
            "ingredients": [
                [
                    "iron-gear-wheel",
                    10
                ],
                [
                    "pipe",
                    5
                ],
                [
                    "iron-plate",
                    50
                ]
            ]
        },
        "normal": {
            "result": "steam-engine",
            "ingredients": [
                [
                    "iron-gear-wheel",
                    8
                ],
                [
                    "pipe",
                    5
                ],
                [
                    "iron-plate",
                    10
                ]
            ]
        },
        "name": "steam-engine",
        "type": "recipe"
    },
    "iron-gear-wheel": {
        "expensive": {
            "result": "iron-gear-wheel",
            "ingredients": [
                [
                    "iron-plate",
                    4
                ]
            ]
        },
        "normal": {
            "result": "iron-gear-wheel",
            "ingredients": [
                [
                    "iron-plate",
                    2
                ]
            ]
        },
        "name": "iron-gear-wheel",
        "type": "recipe"
    },
    "electronic-circuit": {
        "expensive": {
            "result": "electronic-circuit",
            "requester_paste_multiplier": 50,
            "ingredients": [
                [
                    "iron-plate",
                    2
                ],
                [
                    "copper-cable",
                    10
                ]
            ]
        },
        "normal": {
            "result": "electronic-circuit",
            "requester_paste_multiplier": 50,
            "ingredients": [
                [
                    "iron-plate",
                    1
                ],
                [
                    "copper-cable",
                    3
                ]
            ]
        },
        "name": "electronic-circuit",
        "type": "recipe"
    },
    "transport-belt": {
        "result": "transport-belt",
        "requester_paste_multiplier": 20,
        "result_count": 2,
        "type": "recipe",
        "ingredients": [
            [
                "iron-plate",
                1
            ],
            [
                "iron-gear-wheel",
                1
            ]
        ],
        "name": "transport-belt"
    },
    "electric-mining-drill": {
        "expensive": {
            "result": "electric-mining-drill",
            "ingredients": [
                [
                    "electronic-circuit",
                    5
                ],
                [
                    "iron-gear-wheel",
                    10
                ],
                [
                    "iron-plate",
                    20
                ]
            ],
            "energy_required": 2
        },
        "normal": {
            "result": "electric-mining-drill",
            "ingredients": [
                [
                    "electronic-circuit",
                    3
                ],
                [
                    "iron-gear-wheel",
                    5
                ],
                [
                    "iron-plate",
                    10
                ]
            ],
            "energy_required": 2
        },
        "name": "electric-mining-drill",
        "type": "recipe"
    },
    "burner-mining-drill": {
        "expensive": {
            "result": "burner-mining-drill",
            "ingredients": [
                [
                    "iron-gear-wheel",
                    6
                ],
                [
                    "stone-furnace",
                    2
                ],
                [
                    "iron-plate",
                    6
                ]
            ],
            "energy_required": 4
        },
        "normal": {
            "result": "burner-mining-drill",
            "ingredients": [
                [
                    "iron-gear-wheel",
                    3
                ],
                [
                    "stone-furnace",
                    1
                ],
                [
                    "iron-plate",
                    3
                ]
            ],
            "energy_required": 2
        },
        "name": "burner-mining-drill",
        "type": "recipe"
    },
    "inserter": {
        "result": "inserter",
        "requester_paste_multiplier": 15,
        "type": "recipe",
        "ingredients": [
            [
                "electronic-circuit",
                1
            ],
            [
                "iron-gear-wheel",
                1
            ],
            [
                "iron-plate",
                1
            ]
        ],
        "name": "inserter"
    },
    "burner-inserter": {
        "result": "burner-inserter",
        "requester_paste_multiplier": 15,
        "type": "recipe",
        "ingredients": [
            [
                "iron-plate",
                1
            ],
            [
                "iron-gear-wheel",
                1
            ]
        ],
        "name": "burner-inserter"
    },
    "pipe": {
        "expensive": {
            "result": "pipe",
            "requester_paste_multiplier": 15,
            "ingredients": [
                [
                    "iron-plate",
                    2
                ]
            ]
        },
        "normal": {
            "result": "pipe",
            "requester_paste_multiplier": 15,
            "ingredients": [
                [
                    "iron-plate",
                    1
                ]
            ]
        },
        "name": "pipe",
        "type": "recipe"
    },
    "offshore-pump": {
        "result": "offshore-pump",
        "type": "recipe",
        "ingredients": [
            [
                "electronic-circuit",
                2
            ],
            [
                "pipe",
                1
            ],
            [
                "iron-gear-wheel",
                1
            ]
        ],
        "name": "offshore-pump"
    },
    "copper-cable": {
        "result": "copper-cable",
        "result_count": 2,
        "type": "recipe",
        "ingredients": [
            [
                "copper-plate",
                1
            ]
        ],
        "name": "copper-cable"
    },
    "small-electric-pole": {
        "result": "small-electric-pole",
        "requester_paste_multiplier": 4,
        "result_count": 2,
        "type": "recipe",
        "ingredients": [
            [
                "wood",
                2
            ],
            [
                "copper-cable",
                2
            ]
        ],
        "name": "small-electric-pole"
    },
    "pistol": {
        "result": "pistol",
        "energy_required": 5,
        "type": "recipe",
        "ingredients": [
            [
                "copper-plate",
                5
            ],
            [
                "iron-plate",
                5
            ]
        ],
        "name": "pistol"
    },
    "submachine-gun": {
        "expensive": {
            "result": "submachine-gun",
            "enabled": false,
            "energy_required": 10,
            "ingredients": [
                [
                    "iron-gear-wheel",
                    15
                ],
                [
                    "copper-plate",
                    20
                ],
                [
                    "iron-plate",
                    30
                ]
            ]
        },
        "normal": {
            "result": "submachine-gun",
            "enabled": false,
            "energy_required": 10,
            "ingredients": [
                [
                    "iron-gear-wheel",
                    10
                ],
                [
                    "copper-plate",
                    5
                ],
                [
                    "iron-plate",
                    10
                ]
            ]
        },
        "name": "submachine-gun",
        "type": "recipe"
    },
    "firearm-magazine": {
        "result": "firearm-magazine",
        "result_count": 1,
        "energy_required": 1,
        "type": "recipe",
        "ingredients": [
            [
                "iron-plate",
                4
            ]
        ],
        "name": "firearm-magazine"
    },
    "light-armor": {
        "result": "light-armor",
        "energy_required": 3,
        "enabled": true,
        "type": "recipe",
        "ingredients": [
            [
                "iron-plate",
                40
            ]
        ],
        "name": "light-armor"
    },
    "radar": {
        "result": "radar",
        "requester_paste_multiplier": 4,
        "type": "recipe",
        "ingredients": [
            [
                "electronic-circuit",
                5
            ],
            [
                "iron-gear-wheel",
                5
            ],
            [
                "iron-plate",
                10
            ]
        ],
        "name": "radar"
    },
    "small-lamp": {
        "result": "small-lamp",
        "enabled": false,
        "type": "recipe",
        "ingredients": [
            [
                "electronic-circuit",
                1
            ],
            [
                "iron-stick",
                3
            ],
            [
                "iron-plate",
                1
            ]
        ],
        "name": "small-lamp"
    },
    "pipe-to-ground": {
        "result": "pipe-to-ground",
        "result_count": 2,
        "type": "recipe",
        "ingredients": [
            [
                "pipe",
                10
            ],
            [
                "iron-plate",
                5
            ]
        ],
        "name": "pipe-to-ground"
    },
    "assembling-machine-1": {
        "result": "assembling-machine-1",
        "enabled": false,
        "type": "recipe",
        "ingredients": [
            [
                "electronic-circuit",
                3
            ],
            [
                "iron-gear-wheel",
                5
            ],
            [
                "iron-plate",
                9
            ]
        ],
        "name": "assembling-machine-1"
    },
    "repair-pack": {
        "result": "repair-pack",
        "type": "recipe",
        "ingredients": [
            [
                "electronic-circuit",
                2
            ],
            [
                "iron-gear-wheel",
                2
            ]
        ],
        "name": "repair-pack"
    },
    "gun-turret": {
        "result": "gun-turret",
        "energy_required": 8,
        "enabled": false,
        "type": "recipe",
        "ingredients": [
            [
                "iron-gear-wheel",
                10
            ],
            [
                "copper-plate",
                10
            ],
            [
                "iron-plate",
                20
            ]
        ],
        "name": "gun-turret"
    },
    "night-vision-equipment": {
        "result": "night-vision-equipment",
        "energy_required": 10,
        "enabled": false,
        "type": "recipe",
        "ingredients": [
            [
                "advanced-circuit",
                5
            ],
            [
                "steel-plate",
                10
            ]
        ],
        "name": "night-vision-equipment"
    },
    "energy-shield-equipment": {
        "result": "energy-shield-equipment",
        "energy_required": 10,
        "enabled": false,
        "type": "recipe",
        "ingredients": [
            [
                "advanced-circuit",
                5
            ],
            [
                "steel-plate",
                10
            ]
        ],
        "name": "energy-shield-equipment"
    },
    "energy-shield-mk2-equipment": {
        "result": "energy-shield-mk2-equipment",
        "energy_required": 10,
        "enabled": false,
        "type": "recipe",
        "ingredients": [
            [
                "energy-shield-equipment",
                10
            ],
            [
                "processing-unit",
                10
            ]
        ],
        "name": "energy-shield-mk2-equipment"
    },
    "battery-equipment": {
        "result": "battery-equipment",
        "energy_required": 10,
        "enabled": false,
        "type": "recipe",
        "ingredients": [
            [
                "battery",
                5
            ],
            [
                "steel-plate",
                10
            ]
        ],
        "name": "battery-equipment"
    },
    "battery-mk2-equipment": {
        "result": "battery-mk2-equipment",
        "energy_required": 10,
        "enabled": false,
        "type": "recipe",
        "ingredients": [
            [
                "battery-equipment",
                10
            ],
            [
                "processing-unit",
                20
            ]
        ],
        "name": "battery-mk2-equipment"
    },
    "solar-panel-equipment": {
        "result": "solar-panel-equipment",
        "energy_required": 10,
        "enabled": false,
        "type": "recipe",
        "ingredients": [
            [
                "solar-panel",
                5
            ],
            [
                "advanced-circuit",
                1
            ],
            [
                "steel-plate",
                5
            ]
        ],
        "name": "solar-panel-equipment"
    },
    "fusion-reactor-equipment": {
        "result": "fusion-reactor-equipment",
        "energy_required": 10,
        "enabled": false,
        "type": "recipe",
        "ingredients": [
            [
                "processing-unit",
                250
            ]
        ],
        "name": "fusion-reactor-equipment"
    },
    "personal-laser-defense-equipment": {
        "result": "personal-laser-defense-equipment",
        "energy_required": 10,
        "enabled": false,
        "type": "recipe",
        "ingredients": [
            [
                "processing-unit",
                1
            ],
            [
                "steel-plate",
                5
            ],
            [
                "laser-turret",
                5
            ]
        ],
        "name": "personal-laser-defense-equipment"
    },
    "discharge-defense-equipment": {
        "result": "discharge-defense-equipment",
        "energy_required": 10,
        "enabled": false,
        "type": "recipe",
        "ingredients": [
            [
                "processing-unit",
                5
            ],
            [
                "steel-plate",
                20
            ],
            [
                "laser-turret",
                10
            ]
        ],
        "name": "discharge-defense-equipment"
    },
    "exoskeleton-equipment": {
        "result": "exoskeleton-equipment",
        "energy_required": 10,
        "enabled": false,
        "type": "recipe",
        "ingredients": [
            [
                "processing-unit",
                10
            ],
            [
                "electric-engine-unit",
                30
            ],
            [
                "steel-plate",
                20
            ]
        ],
        "name": "exoskeleton-equipment"
    },
    "personal-roboport-equipment": {
        "result": "personal-roboport-equipment",
        "energy_required": 10,
        "enabled": false,
        "type": "recipe",
        "ingredients": [
            [
                "advanced-circuit",
                10
            ],
            [
                "iron-gear-wheel",
                40
            ],
            [
                "steel-plate",
                20
            ],
            [
                "battery",
                45
            ]
        ],
        "name": "personal-roboport-equipment"
    },
    "personal-roboport-mk2-equipment": {
        "result": "personal-roboport-mk2-equipment",
        "energy_required": 20,
        "enabled": false,
        "type": "recipe",
        "ingredients": [
            [
                "personal-roboport-equipment",
                5
            ],
            [
                "processing-unit",
                100
            ]
        ],
        "name": "personal-roboport-mk2-equipment"
    },
    "basic-oil-processing": {
        "category": "oil-processing",
        "energy_required": 5,
        "ingredients": [
            {
                "amount": 100,
                "type": "fluid",
                "name": "crude-oil"
            }
        ],
        "order": "a[oil-processing]-a[basic-oil-processing]",
        "enabled": false,
        "subgroup": "fluid-recipes",
        "results": [
            {
                "amount": 30,
                "type": "fluid",
                "name": "heavy-oil"
            },
            {
                "amount": 30,
                "type": "fluid",
                "name": "light-oil"
            },
            {
                "amount": 40,
                "type": "fluid",
                "name": "petroleum-gas"
            }
        ],
        "type": "recipe",
        "icon": "/graphics/icons/fluid/basic-oil-processing.png",
        "name": "basic-oil-processing"
    },
    "advanced-oil-processing": {
        "category": "oil-processing",
        "energy_required": 5,
        "ingredients": [
            {
                "amount": 50,
                "type": "fluid",
                "name": "water"
            },
            {
                "amount": 100,
                "type": "fluid",
                "name": "crude-oil"
            }
        ],
        "order": "a[oil-processing]-b[advanced-oil-processing]",
        "enabled": false,
        "subgroup": "fluid-recipes",
        "results": [
            {
                "amount": 10,
                "type": "fluid",
                "name": "heavy-oil"
            },
            {
                "amount": 45,
                "type": "fluid",
                "name": "light-oil"
            },
            {
                "amount": 55,
                "type": "fluid",
                "name": "petroleum-gas"
            }
        ],
        "type": "recipe",
        "icon": "/graphics/icons/fluid/advanced-oil-processing.png",
        "name": "advanced-oil-processing"
    },
    "coal-liquefaction": {
        "category": "oil-processing",
        "allow_decomposition": false,
        "ingredients": [
            {
                "amount": 10,
                "type": "item",
                "name": "coal"
            },
            {
                "amount": 25,
                "type": "fluid",
                "name": "heavy-oil"
            },
            {
                "amount": 50,
                "type": "fluid",
                "name": "steam"
            }
        ],
        "order": "a[oil-processing]-c[coal-liquefaction]",
        "enabled": false,
        "energy_required": 5,
        "subgroup": "fluid-recipes",
        "results": [
            {
                "amount": 35,
                "type": "fluid",
                "name": "heavy-oil"
            },
            {
                "amount": 15,
                "type": "fluid",
                "name": "light-oil"
            },
            {
                "amount": 20,
                "type": "fluid",
                "name": "petroleum-gas"
            }
        ],
        "type": "recipe",
        "icon": "/graphics/icons/fluid/coal-liquefaction.png",
        "name": "coal-liquefaction"
    },
    "heavy-oil-cracking": {
        "category": "chemistry",
        "main_product": "",
        "results": [
            {
                "amount": 30,
                "type": "fluid",
                "name": "light-oil"
            }
        ],
        "type": "recipe",
        "order": "b[fluid-chemistry]-a[heavy-oil-cracking]",
        "ingredients": [
            {
                "amount": 30,
                "type": "fluid",
                "name": "water"
            },
            {
                "amount": 40,
                "type": "fluid",
                "name": "heavy-oil"
            }
        ],
        "enabled": false,
        "energy_required": 3,
        "icon": "/graphics/icons/fluid/heavy-oil-cracking.png",
        "crafting_machine_tint": {
            "primary": {
                "r": 0.29,
                "b": 0,
                "g": 0.027,
                "a": 0
            },
            "secondary": {
                "r": 0.722,
                "b": 0.19,
                "g": 0.465,
                "a": 0
            },
            "tertiary": {
                "r": 0.87,
                "b": 0,
                "g": 0.365,
                "a": 0
            }
        },
        "subgroup": "fluid-recipes",
        "name": "heavy-oil-cracking"
    },
    "light-oil-cracking": {
        "category": "chemistry",
        "main_product": "",
        "results": [
            {
                "amount": 20,
                "type": "fluid",
                "name": "petroleum-gas"
            }
        ],
        "type": "recipe",
        "order": "b[fluid-chemistry]-b[light-oil-cracking]",
        "ingredients": [
            {
                "amount": 30,
                "type": "fluid",
                "name": "water"
            },
            {
                "amount": 30,
                "type": "fluid",
                "name": "light-oil"
            }
        ],
        "enabled": false,
        "energy_required": 3,
        "icon": "/graphics/icons/fluid/light-oil-cracking.png",
        "crafting_machine_tint": {
            "primary": {
                "r": 0.785,
                "b": 0,
                "g": 0.406,
                "a": 0
            },
            "secondary": {
                "r": 0.795,
                "b": 0.605,
                "g": 0.805,
                "a": 0
            },
            "tertiary": {
                "r": 0.835,
                "b": 0,
                "g": 0.551,
                "a": 0
            }
        },
        "subgroup": "fluid-recipes",
        "name": "light-oil-cracking"
    },
    "sulfuric-acid": {
        "category": "chemistry",
        "enabled": false,
        "crafting_machine_tint": {
            "primary": {
                "r": 0.875,
                "b": 0,
                "g": 0.735,
                "a": 0
            },
            "secondary": {
                "r": 0.103,
                "b": 0,
                "g": 0.94,
                "a": 0
            },
            "tertiary": {
                "r": 0.564,
                "b": 0,
                "g": 0.795,
                "a": 0
            }
        },
        "ingredients": [
            {
                "amount": 5,
                "type": "item",
                "name": "sulfur"
            },
            {
                "amount": 1,
                "type": "item",
                "name": "iron-plate"
            },
            {
                "amount": 100,
                "type": "fluid",
                "name": "water"
            }
        ],
        "subgroup": "fluid-recipes",
        "results": [
            {
                "amount": 50,
                "type": "fluid",
                "name": "sulfuric-acid"
            }
        ],
        "type": "recipe",
        "name": "sulfuric-acid",
        "energy_required": 1
    },
    "plastic-bar": {
        "category": "chemistry",
        "requester_paste_multiplier": 4,
        "enabled": false,
        "ingredients": [
            {
                "amount": 20,
                "type": "fluid",
                "name": "petroleum-gas"
            },
            {
                "amount": 1,
                "type": "item",
                "name": "coal"
            }
        ],
        "crafting_machine_tint": {
            "primary": {
                "r": 0.498,
                "b": 0.498,
                "g": 0.498,
                "a": 0
            },
            "secondary": {
                "r": 0.4,
                "b": 0.4,
                "g": 0.4,
                "a": 0
            },
            "tertiary": {
                "r": 0.305,
                "b": 0.305,
                "g": 0.305,
                "a": 0
            }
        },
        "results": [
            {
                "amount": 2,
                "type": "item",
                "name": "plastic-bar"
            }
        ],
        "type": "recipe",
        "name": "plastic-bar",
        "energy_required": 1
    },
    "solid-fuel-from-light-oil": {
        "category": "chemistry",
        "energy_required": 3,
        "ingredients": [
            {
                "amount": 10,
                "type": "fluid",
                "name": "light-oil"
            }
        ],
        "crafting_machine_tint": {
            "primary": {
                "r": 0.27,
                "b": 0,
                "g": 0.122,
                "a": 0
            },
            "secondary": {
                "r": 0.735,
                "b": 0.325,
                "g": 0.546,
                "a": 0
            },
            "tertiary": {
                "r": 0.61,
                "b": 0,
                "g": 0.348,
                "a": 0
            }
        },
        "order": "b[fluid-chemistry]-c[solid-fuel-from-light-oil]",
        "enabled": false,
        "subgroup": "fluid-recipes",
        "results": [
            {
                "amount": 1,
                "type": "item",
                "name": "solid-fuel"
            }
        ],
        "type": "recipe",
        "icon": "/graphics/icons/solid-fuel-from-light-oil.png",
        "name": "solid-fuel-from-light-oil"
    },
    "solid-fuel-from-petroleum-gas": {
        "category": "chemistry",
        "energy_required": 3,
        "ingredients": [
            {
                "amount": 20,
                "type": "fluid",
                "name": "petroleum-gas"
            }
        ],
        "crafting_machine_tint": {
            "primary": {
                "r": 0.331,
                "b": 0.51,
                "g": 0.075,
                "a": 0
            },
            "secondary": {
                "r": 0.589,
                "b": 0.615,
                "g": 0.54,
                "a": 0.361
            },
            "tertiary": {
                "r": 0.469,
                "b": 0.695,
                "g": 0.145,
                "a": 0
            }
        },
        "order": "b[fluid-chemistry]-d[solid-fuel-from-petroleum-gas]",
        "enabled": false,
        "subgroup": "fluid-recipes",
        "results": [
            {
                "amount": 1,
                "type": "item",
                "name": "solid-fuel"
            }
        ],
        "type": "recipe",
        "icon": "/graphics/icons/solid-fuel-from-petroleum-gas.png",
        "name": "solid-fuel-from-petroleum-gas"
    },
    "solid-fuel-from-heavy-oil": {
        "category": "chemistry",
        "energy_required": 3,
        "ingredients": [
            {
                "amount": 20,
                "type": "fluid",
                "name": "heavy-oil"
            }
        ],
        "crafting_machine_tint": {
            "primary": {
                "r": 0.16,
                "b": 0.095,
                "g": 0.095,
                "a": 0
            },
            "secondary": {
                "r": 0.47,
                "b": 0.19,
                "g": 0.215,
                "a": 0
            },
            "tertiary": {
                "r": 0.435,
                "b": 0.135,
                "g": 0.144,
                "a": 0
            }
        },
        "order": "b[fluid-chemistry]-e[solid-fuel-from-heavy-oil]",
        "enabled": false,
        "subgroup": "fluid-recipes",
        "results": [
            {
                "amount": 1,
                "type": "item",
                "name": "solid-fuel"
            }
        ],
        "type": "recipe",
        "icon": "/graphics/icons/solid-fuel-from-heavy-oil.png",
        "name": "solid-fuel-from-heavy-oil"
    },
    "sulfur": {
        "category": "chemistry",
        "enabled": false,
        "ingredients": [
            {
                "amount": 30,
                "type": "fluid",
                "name": "water"
            },
            {
                "amount": 30,
                "type": "fluid",
                "name": "petroleum-gas"
            }
        ],
        "crafting_machine_tint": {
            "primary": {
                "r": 1,
                "b": 0,
                "g": 0.659,
                "a": 0
            },
            "secondary": {
                "r": 0.812,
                "b": 0,
                "g": 1,
                "a": 0
            },
            "tertiary": {
                "r": 0.96,
                "b": 0,
                "g": 0.806,
                "a": 0
            }
        },
        "results": [
            {
                "amount": 2,
                "type": "item",
                "name": "sulfur"
            }
        ],
        "type": "recipe",
        "name": "sulfur",
        "energy_required": 1
    },
    "lubricant": {
        "category": "chemistry",
        "enabled": false,
        "crafting_machine_tint": {
            "primary": {
                "r": 0,
                "b": 0.01,
                "g": 0.26,
                "a": 0
            },
            "secondary": {
                "r": 0.071,
                "b": 0,
                "g": 0.64,
                "a": 0
            },
            "tertiary": {
                "r": 0.026,
                "b": 0,
                "g": 0.52,
                "a": 0
            }
        },
        "ingredients": [
            {
                "amount": 10,
                "type": "fluid",
                "name": "heavy-oil"
            }
        ],
        "subgroup": "fluid-recipes",
        "results": [
            {
                "amount": 10,
                "type": "fluid",
                "name": "lubricant"
            }
        ],
        "type": "recipe",
        "name": "lubricant",
        "energy_required": 1
    },
    "empty-barrel": {
        "category": "crafting",
        "enabled": false,
        "ingredients": [
            {
                "amount": 1,
                "type": "item",
                "name": "steel-plate"
            }
        ],
        "subgroup": "intermediate-product",
        "results": [
            {
                "amount": 1,
                "type": "item",
                "name": "empty-barrel"
            }
        ],
        "type": "recipe",
        "name": "empty-barrel",
        "energy_required": 1
    },
    "steel-plate": {
        "expensive": {
            "result": "steel-plate",
            "enabled": false,
            "energy_required": 35,
            "ingredients": [
                [
                    "iron-plate",
                    10
                ]
            ]
        },
        "normal": {
            "result": "steel-plate",
            "enabled": false,
            "energy_required": 17.5,
            "ingredients": [
                [
                    "iron-plate",
                    5
                ]
            ]
        },
        "type": "recipe",
        "name": "steel-plate",
        "category": "smelting"
    },
    "long-handed-inserter": {
        "result": "long-handed-inserter",
        "requester_paste_multiplier": 4,
        "enabled": false,
        "type": "recipe",
        "ingredients": [
            [
                "iron-gear-wheel",
                1
            ],
            [
                "iron-plate",
                1
            ],
            [
                "inserter",
                1
            ]
        ],
        "name": "long-handed-inserter"
    },
    "fast-inserter": {
        "result": "fast-inserter",
        "requester_paste_multiplier": 4,
        "enabled": false,
        "type": "recipe",
        "ingredients": [
            [
                "electronic-circuit",
                2
            ],
            [
                "iron-plate",
                2
            ],
            [
                "inserter",
                1
            ]
        ],
        "name": "fast-inserter"
    },
    "filter-inserter": {
        "result": "filter-inserter",
        "requester_paste_multiplier": 4,
        "enabled": false,
        "type": "recipe",
        "ingredients": [
            [
                "fast-inserter",
                1
            ],
            [
                "electronic-circuit",
                4
            ]
        ],
        "name": "filter-inserter"
    },
    "stack-inserter": {
        "result": "stack-inserter",
        "requester_paste_multiplier": 4,
        "enabled": false,
        "type": "recipe",
        "ingredients": [
            [
                "iron-gear-wheel",
                15
            ],
            [
                "electronic-circuit",
                15
            ],
            [
                "advanced-circuit",
                1
            ],
            [
                "fast-inserter",
                1
            ]
        ],
        "name": "stack-inserter"
    },
    "stack-filter-inserter": {
        "result": "stack-filter-inserter",
        "requester_paste_multiplier": 4,
        "enabled": false,
        "type": "recipe",
        "ingredients": [
            [
                "stack-inserter",
                1
            ],
            [
                "electronic-circuit",
                5
            ]
        ],
        "name": "stack-filter-inserter"
    },
    "speed-module": {
        "result": "speed-module",
        "energy_required": 15,
        "enabled": false,
        "type": "recipe",
        "ingredients": [
            [
                "advanced-circuit",
                5
            ],
            [
                "electronic-circuit",
                5
            ]
        ],
        "name": "speed-module"
    },
    "speed-module-2": {
        "result": "speed-module-2",
        "energy_required": 30,
        "enabled": false,
        "type": "recipe",
        "ingredients": [
            [
                "speed-module",
                4
            ],
            [
                "advanced-circuit",
                5
            ],
            [
                "processing-unit",
                5
            ]
        ],
        "name": "speed-module-2"
    },
    "speed-module-3": {
        "result": "speed-module-3",
        "energy_required": 60,
        "enabled": false,
        "type": "recipe",
        "ingredients": [
            [
                "speed-module-2",
                5
            ],
            [
                "advanced-circuit",
                5
            ],
            [
                "processing-unit",
                5
            ]
        ],
        "name": "speed-module-3"
    },
    "productivity-module": {
        "result": "productivity-module",
        "energy_required": 15,
        "enabled": false,
        "type": "recipe",
        "ingredients": [
            [
                "advanced-circuit",
                5
            ],
            [
                "electronic-circuit",
                5
            ]
        ],
        "name": "productivity-module"
    },
    "productivity-module-2": {
        "result": "productivity-module-2",
        "energy_required": 30,
        "enabled": false,
        "type": "recipe",
        "ingredients": [
            [
                "productivity-module",
                4
            ],
            [
                "advanced-circuit",
                5
            ],
            [
                "processing-unit",
                5
            ]
        ],
        "name": "productivity-module-2"
    },
    "productivity-module-3": {
        "result": "productivity-module-3",
        "energy_required": 60,
        "enabled": false,
        "type": "recipe",
        "ingredients": [
            [
                "productivity-module-2",
                5
            ],
            [
                "advanced-circuit",
                5
            ],
            [
                "processing-unit",
                5
            ]
        ],
        "name": "productivity-module-3"
    },
    "effectivity-module": {
        "result": "effectivity-module",
        "energy_required": 15,
        "enabled": false,
        "type": "recipe",
        "ingredients": [
            [
                "advanced-circuit",
                5
            ],
            [
                "electronic-circuit",
                5
            ]
        ],
        "name": "effectivity-module"
    },
    "effectivity-module-2": {
        "result": "effectivity-module-2",
        "energy_required": 30,
        "enabled": false,
        "type": "recipe",
        "ingredients": [
            [
                "effectivity-module",
                4
            ],
            [
                "advanced-circuit",
                5
            ],
            [
                "processing-unit",
                5
            ]
        ],
        "name": "effectivity-module-2"
    },
    "effectivity-module-3": {
        "result": "effectivity-module-3",
        "energy_required": 60,
        "enabled": false,
        "type": "recipe",
        "ingredients": [
            [
                "effectivity-module-2",
                5
            ],
            [
                "advanced-circuit",
                5
            ],
            [
                "processing-unit",
                5
            ]
        ],
        "name": "effectivity-module-3"
    },
    "player-port": {
        "result": "player-port",
        "enabled": false,
        "type": "recipe",
        "ingredients": [
            [
                "electronic-circuit",
                10
            ],
            [
                "iron-gear-wheel",
                5
            ],
            [
                "iron-plate",
                1
            ]
        ],
        "name": "player-port"
    },
    "fast-transport-belt": {
        "result": "fast-transport-belt",
        "enabled": false,
        "type": "recipe",
        "ingredients": [
            [
                "iron-gear-wheel",
                5
            ],
            [
                "transport-belt",
                1
            ]
        ],
        "name": "fast-transport-belt"
    },
    "express-transport-belt": {
        "expensive": {
            "result": "express-transport-belt",
            "enabled": false,
            "ingredients": [
                [
                    "iron-gear-wheel",
                    20
                ],
                [
                    "fast-transport-belt",
                    1
                ],
                {
                    "amount": 20,
                    "type": "fluid",
                    "name": "lubricant"
                }
            ],
            "requester_paste_multiplier": 20
        },
        "normal": {
            "result": "express-transport-belt",
            "enabled": false,
            "ingredients": [
                [
                    "iron-gear-wheel",
                    10
                ],
                [
                    "fast-transport-belt",
                    1
                ],
                {
                    "amount": 20,
                    "type": "fluid",
                    "name": "lubricant"
                }
            ]
        },
        "type": "recipe",
        "name": "express-transport-belt",
        "category": "crafting-with-fluid"
    },
    "solar-panel": {
        "result": "solar-panel",
        "enabled": false,
        "energy_required": 10,
        "type": "recipe",
        "ingredients": [
            [
                "steel-plate",
                5
            ],
            [
                "electronic-circuit",
                15
            ],
            [
                "copper-plate",
                5
            ]
        ],
        "name": "solar-panel"
    },
    "assembling-machine-2": {
        "expensive": {
            "result": "assembling-machine-2",
            "enabled": false,
            "ingredients": [
                [
                    "iron-plate",
                    20
                ],
                [
                    "electronic-circuit",
                    5
                ],
                [
                    "iron-gear-wheel",
                    10
                ],
                [
                    "assembling-machine-1",
                    1
                ]
            ],
            "requester_paste_multiplier": 4
        },
        "normal": {
            "result": "assembling-machine-2",
            "enabled": false,
            "ingredients": [
                [
                    "iron-plate",
                    9
                ],
                [
                    "electronic-circuit",
                    3
                ],
                [
                    "iron-gear-wheel",
                    5
                ],
                [
                    "assembling-machine-1",
                    1
                ]
            ],
            "requester_paste_multiplier": 4
        },
        "name": "assembling-machine-2",
        "type": "recipe"
    },
    "assembling-machine-3": {
        "result": "assembling-machine-3",
        "enabled": false,
        "type": "recipe",
        "ingredients": [
            [
                "speed-module",
                4
            ],
            [
                "assembling-machine-2",
                2
            ]
        ],
        "name": "assembling-machine-3"
    },
    "car": {
        "result": "car",
        "enabled": false,
        "type": "recipe",
        "ingredients": [
            [
                "engine-unit",
                8
            ],
            [
                "iron-plate",
                20
            ],
            [
                "steel-plate",
                5
            ]
        ],
        "name": "car"
    },
    "tank": {
        "expensive": {
            "result": "tank",
            "enabled": false,
            "ingredients": [
                [
                    "engine-unit",
                    64
                ],
                [
                    "steel-plate",
                    100
                ],
                [
                    "iron-gear-wheel",
                    30
                ],
                [
                    "advanced-circuit",
                    20
                ]
            ]
        },
        "normal": {
            "result": "tank",
            "enabled": false,
            "ingredients": [
                [
                    "engine-unit",
                    32
                ],
                [
                    "steel-plate",
                    50
                ],
                [
                    "iron-gear-wheel",
                    15
                ],
                [
                    "advanced-circuit",
                    10
                ]
            ]
        },
        "name": "tank",
        "type": "recipe"
    },
    "rail": {
        "result": "rail",
        "enabled": false,
        "ingredients": [
            [
                "stone",
                1
            ],
            [
                "iron-stick",
                1
            ],
            [
                "steel-plate",
                1
            ]
        ],
        "requester_paste_multiplier": 4,
        "result_count": 2,
        "type": "recipe",
        "name": "rail"
    },
    "locomotive": {
        "result": "locomotive",
        "enabled": false,
        "type": "recipe",
        "ingredients": [
            [
                "engine-unit",
                20
            ],
            [
                "electronic-circuit",
                10
            ],
            [
                "steel-plate",
                30
            ]
        ],
        "name": "locomotive"
    },
    "cargo-wagon": {
        "result": "cargo-wagon",
        "enabled": false,
        "type": "recipe",
        "ingredients": [
            [
                "iron-gear-wheel",
                10
            ],
            [
                "iron-plate",
                20
            ],
            [
                "steel-plate",
                20
            ]
        ],
        "name": "cargo-wagon"
    },
    "fluid-wagon": {
        "result": "fluid-wagon",
        "energy_required": 1.5,
        "enabled": false,
        "type": "recipe",
        "ingredients": [
            [
                "iron-gear-wheel",
                10
            ],
            [
                "steel-plate",
                16
            ],
            [
                "pipe",
                8
            ],
            [
                "storage-tank",
                3
            ]
        ],
        "name": "fluid-wagon"
    },
    "train-stop": {
        "result": "train-stop",
        "enabled": false,
        "type": "recipe",
        "ingredients": [
            [
                "electronic-circuit",
                5
            ],
            [
                "iron-plate",
                10
            ],
            [
                "steel-plate",
                3
            ]
        ],
        "name": "train-stop"
    },
    "rail-signal": {
        "result": "rail-signal",
        "requester_paste_multiplier": 4,
        "enabled": false,
        "type": "recipe",
        "ingredients": [
            [
                "electronic-circuit",
                1
            ],
            [
                "iron-plate",
                5
            ]
        ],
        "name": "rail-signal"
    },
    "rail-chain-signal": {
        "result": "rail-chain-signal",
        "requester_paste_multiplier": 4,
        "enabled": false,
        "type": "recipe",
        "ingredients": [
            [
                "electronic-circuit",
                1
            ],
            [
                "iron-plate",
                5
            ]
        ],
        "name": "rail-chain-signal"
    },
    "heavy-armor": {
        "result": "heavy-armor",
        "energy_required": 8,
        "enabled": false,
        "type": "recipe",
        "ingredients": [
            [
                "copper-plate",
                100
            ],
            [
                "steel-plate",
                50
            ]
        ],
        "name": "heavy-armor"
    },
    "modular-armor": {
        "result": "modular-armor",
        "energy_required": 15,
        "enabled": false,
        "type": "recipe",
        "ingredients": [
            [
                "advanced-circuit",
                30
            ],
            [
                "steel-plate",
                50
            ]
        ],
        "name": "modular-armor"
    },
    "power-armor": {
        "result": "power-armor",
        "enabled": false,
        "ingredients": [
            [
                "processing-unit",
                40
            ],
            [
                "electric-engine-unit",
                20
            ],
            [
                "steel-plate",
                40
            ]
        ],
        "requester_paste_multiplier": 1,
        "type": "recipe",
        "name": "power-armor",
        "energy_required": 20
    },
    "power-armor-mk2": {
        "result": "power-armor-mk2",
        "enabled": false,
        "ingredients": [
            [
                "effectivity-module-3",
                5
            ],
            [
                "speed-module-3",
                5
            ],
            [
                "processing-unit",
                40
            ],
            [
                "steel-plate",
                40
            ]
        ],
        "requester_paste_multiplier": 1,
        "type": "recipe",
        "name": "power-armor-mk2",
        "energy_required": 25
    },
    "iron-chest": {
        "result": "iron-chest",
        "requester_paste_multiplier": 4,
        "enabled": true,
        "type": "recipe",
        "ingredients": [
            [
                "iron-plate",
                8
            ]
        ],
        "name": "iron-chest"
    },
    "steel-chest": {
        "result": "steel-chest",
        "requester_paste_multiplier": 4,
        "enabled": false,
        "type": "recipe",
        "ingredients": [
            [
                "steel-plate",
                8
            ]
        ],
        "name": "steel-chest"
    },
    "stone-wall": {
        "result": "stone-wall",
        "enabled": false,
        "type": "recipe",
        "ingredients": [
            [
                "stone-brick",
                5
            ]
        ],
        "name": "stone-wall"
    },
    "gate": {
        "result": "gate",
        "enabled": false,
        "type": "recipe",
        "ingredients": [
            [
                "stone-wall",
                1
            ],
            [
                "steel-plate",
                2
            ],
            [
                "electronic-circuit",
                2
            ]
        ],
        "name": "gate"
    },
    "flamethrower": {
        "result": "flamethrower",
        "energy_required": 10,
        "enabled": false,
        "type": "recipe",
        "ingredients": [
            [
                "steel-plate",
                5
            ],
            [
                "iron-gear-wheel",
                10
            ]
        ],
        "name": "flamethrower"
    },
    "land-mine": {
        "result": "land-mine",
        "enabled": false,
        "ingredients": [
            [
                "steel-plate",
                1
            ],
            [
                "explosives",
                2
            ]
        ],
        "result_count": 4,
        "type": "recipe",
        "energy_required": 5,
        "name": "land-mine"
    },
    "rocket-launcher": {
        "result": "rocket-launcher",
        "energy_required": 10,
        "enabled": false,
        "type": "recipe",
        "ingredients": [
            [
                "iron-plate",
                5
            ],
            [
                "iron-gear-wheel",
                5
            ],
            [
                "electronic-circuit",
                5
            ]
        ],
        "name": "rocket-launcher"
    },
    "shotgun": {
        "result": "shotgun",
        "energy_required": 10,
        "enabled": false,
        "type": "recipe",
        "ingredients": [
            [
                "iron-plate",
                15
            ],
            [
                "iron-gear-wheel",
                5
            ],
            [
                "copper-plate",
                10
            ],
            [
                "wood",
                5
            ]
        ],
        "name": "shotgun"
    },
    "combat-shotgun": {
        "result": "combat-shotgun",
        "energy_required": 10,
        "enabled": false,
        "type": "recipe",
        "ingredients": [
            [
                "steel-plate",
                15
            ],
            [
                "iron-gear-wheel",
                5
            ],
            [
                "copper-plate",
                10
            ],
            [
                "wood",
                10
            ]
        ],
        "name": "combat-shotgun"
    },
    "railgun": {
        "result": "railgun",
        "energy_required": 8,
        "enabled": false,
        "type": "recipe",
        "ingredients": [
            [
                "steel-plate",
                15
            ],
            [
                "copper-plate",
                15
            ],
            [
                "electronic-circuit",
                10
            ],
            [
                "advanced-circuit",
                5
            ]
        ],
        "name": "railgun"
    },
    "science-pack-1": {
        "result": "science-pack-1",
        "energy_required": 5,
        "type": "recipe",
        "ingredients": [
            [
                "copper-plate",
                1
            ],
            [
                "iron-gear-wheel",
                1
            ]
        ],
        "name": "science-pack-1"
    },
    "science-pack-2": {
        "result": "science-pack-2",
        "energy_required": 6,
        "type": "recipe",
        "ingredients": [
            [
                "inserter",
                1
            ],
            [
                "transport-belt",
                1
            ]
        ],
        "name": "science-pack-2"
    },
    "science-pack-3": {
        "result": "science-pack-3",
        "energy_required": 12,
        "enabled": false,
        "type": "recipe",
        "ingredients": [
            [
                "advanced-circuit",
                1
            ],
            [
                "engine-unit",
                1
            ],
            [
                "electric-mining-drill",
                1
            ]
        ],
        "name": "science-pack-3"
    },
    "military-science-pack": {
        "result": "military-science-pack",
        "enabled": false,
        "ingredients": [
            [
                "piercing-rounds-magazine",
                1
            ],
            [
                "grenade",
                1
            ],
            [
                "gun-turret",
                1
            ]
        ],
        "result_count": 2,
        "type": "recipe",
        "energy_required": 10,
        "name": "military-science-pack"
    },
    "production-science-pack": {
        "result": "production-science-pack",
        "enabled": false,
        "ingredients": [
            [
                "electric-engine-unit",
                1
            ],
            [
                "assembling-machine-1",
                1
            ],
            [
                "electric-furnace",
                1
            ]
        ],
        "result_count": 2,
        "type": "recipe",
        "energy_required": 14,
        "name": "production-science-pack"
    },
    "high-tech-science-pack": {
        "result": "high-tech-science-pack",
        "enabled": false,
        "ingredients": [
            [
                "battery",
                1
            ],
            [
                "processing-unit",
                3
            ],
            [
                "speed-module",
                1
            ],
            [
                "copper-cable",
                30
            ]
        ],
        "result_count": 2,
        "type": "recipe",
        "energy_required": 14,
        "name": "high-tech-science-pack"
    },
    "lab": {
        "result": "lab",
        "energy_required": 3,
        "type": "recipe",
        "ingredients": [
            [
                "electronic-circuit",
                10
            ],
            [
                "iron-gear-wheel",
                10
            ],
            [
                "transport-belt",
                4
            ]
        ],
        "name": "lab"
    },
    "red-wire": {
        "result": "red-wire",
        "enabled": false,
        "type": "recipe",
        "ingredients": [
            [
                "electronic-circuit",
                1
            ],
            [
                "copper-cable",
                1
            ]
        ],
        "name": "red-wire"
    },
    "green-wire": {
        "result": "green-wire",
        "enabled": false,
        "type": "recipe",
        "ingredients": [
            [
                "electronic-circuit",
                1
            ],
            [
                "copper-cable",
                1
            ]
        ],
        "name": "green-wire"
    },
    "underground-belt": {
        "result": "underground-belt",
        "ingredients": [
            [
                "iron-plate",
                10
            ],
            [
                "transport-belt",
                5
            ]
        ],
        "requester_paste_multiplier": 4,
        "enabled": false,
        "result_count": 2,
        "type": "recipe",
        "name": "underground-belt",
        "energy_required": 1
    },
    "fast-underground-belt": {
        "result": "fast-underground-belt",
        "enabled": false,
        "ingredients": [
            [
                "iron-gear-wheel",
                40
            ],
            [
                "underground-belt",
                2
            ]
        ],
        "requester_paste_multiplier": 4,
        "result_count": 2,
        "type": "recipe",
        "name": "fast-underground-belt"
    },
    "express-underground-belt": {
        "result": "express-underground-belt",
        "category": "crafting-with-fluid",
        "enabled": false,
        "ingredients": [
            [
                "iron-gear-wheel",
                80
            ],
            [
                "fast-underground-belt",
                2
            ],
            {
                "amount": 40,
                "type": "fluid",
                "name": "lubricant"
            }
        ],
        "result_count": 2,
        "type": "recipe",
        "name": "express-underground-belt"
    },
    "loader": {
        "result": "loader",
        "energy_required": 1,
        "enabled": false,
        "type": "recipe",
        "ingredients": [
            [
                "inserter",
                5
            ],
            [
                "electronic-circuit",
                5
            ],
            [
                "iron-gear-wheel",
                5
            ],
            [
                "iron-plate",
                5
            ],
            [
                "transport-belt",
                5
            ]
        ],
        "name": "loader"
    },
    "fast-loader": {
        "result": "fast-loader",
        "energy_required": 3,
        "enabled": false,
        "type": "recipe",
        "ingredients": [
            [
                "fast-transport-belt",
                5
            ],
            [
                "loader",
                1
            ]
        ],
        "name": "fast-loader"
    },
    "express-loader": {
        "result": "express-loader",
        "energy_required": 10,
        "enabled": false,
        "type": "recipe",
        "ingredients": [
            [
                "express-transport-belt",
                5
            ],
            [
                "fast-loader",
                1
            ]
        ],
        "name": "express-loader"
    },
    "splitter": {
        "result": "splitter",
        "enabled": false,
        "ingredients": [
            [
                "electronic-circuit",
                5
            ],
            [
                "iron-plate",
                5
            ],
            [
                "transport-belt",
                4
            ]
        ],
        "requester_paste_multiplier": 4,
        "type": "recipe",
        "name": "splitter",
        "energy_required": 1
    },
    "fast-splitter": {
        "result": "fast-splitter",
        "enabled": false,
        "ingredients": [
            [
                "splitter",
                1
            ],
            [
                "iron-gear-wheel",
                10
            ],
            [
                "electronic-circuit",
                10
            ]
        ],
        "requester_paste_multiplier": 4,
        "type": "recipe",
        "name": "fast-splitter",
        "energy_required": 2
    },
    "express-splitter": {
        "result": "express-splitter",
        "category": "crafting-with-fluid",
        "enabled": false,
        "ingredients": [
            [
                "fast-splitter",
                1
            ],
            [
                "iron-gear-wheel",
                10
            ],
            [
                "advanced-circuit",
                10
            ],
            {
                "amount": 80,
                "type": "fluid",
                "name": "lubricant"
            }
        ],
        "type": "recipe",
        "energy_required": 2,
        "name": "express-splitter"
    },
    "advanced-circuit": {
        "expensive": {
            "result": "advanced-circuit",
            "energy_required": 6,
            "enabled": false,
            "ingredients": [
                [
                    "electronic-circuit",
                    2
                ],
                [
                    "plastic-bar",
                    4
                ],
                [
                    "copper-cable",
                    8
                ]
            ],
            "requester_paste_multiplier": 5
        },
        "normal": {
            "result": "advanced-circuit",
            "energy_required": 6,
            "enabled": false,
            "ingredients": [
                [
                    "electronic-circuit",
                    2
                ],
                [
                    "plastic-bar",
                    2
                ],
                [
                    "copper-cable",
                    4
                ]
            ],
            "requester_paste_multiplier": 5
        },
        "name": "advanced-circuit",
        "type": "recipe"
    },
    "processing-unit": {
        "expensive": {
            "result": "processing-unit",
            "enabled": false,
            "energy_required": 10,
            "ingredients": [
                [
                    "electronic-circuit",
                    20
                ],
                [
                    "advanced-circuit",
                    2
                ],
                {
                    "amount": 10,
                    "type": "fluid",
                    "name": "sulfuric-acid"
                }
            ]
        },
        "normal": {
            "result": "processing-unit",
            "enabled": false,
            "energy_required": 10,
            "ingredients": [
                [
                    "electronic-circuit",
                    20
                ],
                [
                    "advanced-circuit",
                    2
                ],
                {
                    "amount": 5,
                    "type": "fluid",
                    "name": "sulfuric-acid"
                }
            ]
        },
        "type": "recipe",
        "name": "processing-unit",
        "category": "crafting-with-fluid"
    },
    "logistic-robot": {
        "result": "logistic-robot",
        "enabled": false,
        "type": "recipe",
        "ingredients": [
            [
                "flying-robot-frame",
                1
            ],
            [
                "advanced-circuit",
                2
            ]
        ],
        "name": "logistic-robot"
    },
    "construction-robot": {
        "result": "construction-robot",
        "enabled": false,
        "type": "recipe",
        "ingredients": [
            [
                "flying-robot-frame",
                1
            ],
            [
                "electronic-circuit",
                2
            ]
        ],
        "name": "construction-robot"
    },
    "logistic-chest-passive-provider": {
        "result": "logistic-chest-passive-provider",
        "requester_paste_multiplier": 4,
        "enabled": false,
        "type": "recipe",
        "ingredients": [
            [
                "steel-chest",
                1
            ],
            [
                "electronic-circuit",
                3
            ],
            [
                "advanced-circuit",
                1
            ]
        ],
        "name": "logistic-chest-passive-provider"
    },
    "logistic-chest-active-provider": {
        "result": "logistic-chest-active-provider",
        "requester_paste_multiplier": 4,
        "enabled": false,
        "type": "recipe",
        "ingredients": [
            [
                "steel-chest",
                1
            ],
            [
                "electronic-circuit",
                3
            ],
            [
                "advanced-circuit",
                1
            ]
        ],
        "name": "logistic-chest-active-provider"
    },
    "logistic-chest-storage": {
        "result": "logistic-chest-storage",
        "requester_paste_multiplier": 4,
        "enabled": false,
        "type": "recipe",
        "ingredients": [
            [
                "steel-chest",
                1
            ],
            [
                "electronic-circuit",
                3
            ],
            [
                "advanced-circuit",
                1
            ]
        ],
        "name": "logistic-chest-storage"
    },
    "logistic-chest-requester": {
        "result": "logistic-chest-requester",
        "requester_paste_multiplier": 4,
        "enabled": false,
        "type": "recipe",
        "ingredients": [
            [
                "steel-chest",
                1
            ],
            [
                "electronic-circuit",
                3
            ],
            [
                "advanced-circuit",
                1
            ]
        ],
        "name": "logistic-chest-requester"
    },
    "rocket-silo": {
        "result": "rocket-silo",
        "enabled": false,
        "ingredients": [
            [
                "steel-plate",
                1000
            ],
            [
                "concrete",
                1000
            ],
            [
                "pipe",
                100
            ],
            [
                "processing-unit",
                200
            ],
            [
                "electric-engine-unit",
                200
            ]
        ],
        "requester_paste_multiplier": 1,
        "type": "recipe",
        "name": "rocket-silo",
        "energy_required": 30
    },
    "roboport": {
        "result": "roboport",
        "energy_required": 10,
        "enabled": false,
        "type": "recipe",
        "ingredients": [
            [
                "steel-plate",
                45
            ],
            [
                "iron-gear-wheel",
                45
            ],
            [
                "advanced-circuit",
                45
            ]
        ],
        "name": "roboport"
    },
    "steel-axe": {
        "result": "steel-axe",
        "requester_paste_multiplier": 4,
        "enabled": false,
        "type": "recipe",
        "ingredients": [
            [
                "steel-plate",
                5
            ],
            [
                "iron-stick",
                2
            ]
        ],
        "name": "steel-axe"
    },
    "big-electric-pole": {
        "result": "big-electric-pole",
        "requester_paste_multiplier": 4,
        "enabled": false,
        "type": "recipe",
        "ingredients": [
            [
                "steel-plate",
                5
            ],
            [
                "copper-plate",
                5
            ]
        ],
        "name": "big-electric-pole"
    },
    "substation": {
        "result": "substation",
        "enabled": false,
        "type": "recipe",
        "ingredients": [
            [
                "steel-plate",
                10
            ],
            [
                "advanced-circuit",
                5
            ],
            [
                "copper-plate",
                5
            ]
        ],
        "name": "substation"
    },
    "medium-electric-pole": {
        "result": "medium-electric-pole",
        "requester_paste_multiplier": 4,
        "enabled": false,
        "type": "recipe",
        "ingredients": [
            [
                "steel-plate",
                2
            ],
            [
                "copper-plate",
                2
            ]
        ],
        "name": "medium-electric-pole"
    },
    "accumulator": {
        "result": "accumulator",
        "enabled": false,
        "energy_required": 10,
        "type": "recipe",
        "ingredients": [
            [
                "iron-plate",
                2
            ],
            [
                "battery",
                5
            ]
        ],
        "name": "accumulator"
    },
    "steel-furnace": {
        "result": "steel-furnace",
        "enabled": false,
        "energy_required": 3,
        "type": "recipe",
        "ingredients": [
            [
                "steel-plate",
                6
            ],
            [
                "stone-brick",
                10
            ]
        ],
        "name": "steel-furnace"
    },
    "electric-furnace": {
        "result": "electric-furnace",
        "enabled": false,
        "energy_required": 5,
        "type": "recipe",
        "ingredients": [
            [
                "steel-plate",
                10
            ],
            [
                "advanced-circuit",
                5
            ],
            [
                "stone-brick",
                10
            ]
        ],
        "name": "electric-furnace"
    },
    "beacon": {
        "result": "beacon",
        "energy_required": 15,
        "enabled": false,
        "type": "recipe",
        "ingredients": [
            [
                "electronic-circuit",
                20
            ],
            [
                "advanced-circuit",
                20
            ],
            [
                "steel-plate",
                10
            ],
            [
                "copper-cable",
                10
            ]
        ],
        "name": "beacon"
    },
    "pumpjack": {
        "result": "pumpjack",
        "enabled": false,
        "energy_required": 5,
        "type": "recipe",
        "ingredients": [
            [
                "steel-plate",
                5
            ],
            [
                "iron-gear-wheel",
                10
            ],
            [
                "electronic-circuit",
                5
            ],
            [
                "pipe",
                10
            ]
        ],
        "name": "pumpjack"
    },
    "oil-refinery": {
        "result": "oil-refinery",
        "enabled": false,
        "energy_required": 10,
        "type": "recipe",
        "ingredients": [
            [
                "steel-plate",
                15
            ],
            [
                "iron-gear-wheel",
                10
            ],
            [
                "stone-brick",
                10
            ],
            [
                "electronic-circuit",
                10
            ],
            [
                "pipe",
                10
            ]
        ],
        "name": "oil-refinery"
    },
    "engine-unit": {
        "result": "engine-unit",
        "category": "advanced-crafting",
        "enabled": false,
        "ingredients": [
            [
                "steel-plate",
                1
            ],
            [
                "iron-gear-wheel",
                1
            ],
            [
                "pipe",
                2
            ]
        ],
        "type": "recipe",
        "energy_required": 10,
        "name": "engine-unit"
    },
    "electric-engine-unit": {
        "result": "electric-engine-unit",
        "category": "crafting-with-fluid",
        "enabled": false,
        "ingredients": [
            [
                "engine-unit",
                1
            ],
            {
                "amount": 15,
                "type": "fluid",
                "name": "lubricant"
            },
            [
                "electronic-circuit",
                2
            ]
        ],
        "type": "recipe",
        "energy_required": 10,
        "name": "electric-engine-unit"
    },
    "flying-robot-frame": {
        "result": "flying-robot-frame",
        "enabled": false,
        "energy_required": 20,
        "type": "recipe",
        "ingredients": [
            [
                "electric-engine-unit",
                1
            ],
            [
                "battery",
                2
            ],
            [
                "steel-plate",
                1
            ],
            [
                "electronic-circuit",
                3
            ]
        ],
        "name": "flying-robot-frame"
    },
    "explosives": {
        "crafting_machine_tint": {
            "primary": {
                "r": 0.955,
                "b": 0,
                "g": 0.945,
                "a": 0
            },
            "secondary": {
                "r": 0,
                "b": 0.659,
                "g": 0.441,
                "a": 0.898
            },
            "tertiary": {
                "r": 0,
                "b": 0.365,
                "g": 0.288,
                "a": 0
            }
        },
        "expensive": {
            "result": "explosives",
            "energy_required": 5,
            "enabled": false,
            "ingredients": [
                {
                    "amount": 2,
                    "type": "item",
                    "name": "sulfur"
                },
                {
                    "amount": 2,
                    "type": "item",
                    "name": "coal"
                },
                {
                    "amount": 10,
                    "type": "fluid",
                    "name": "water"
                }
            ]
        },
        "normal": {
            "result": "explosives",
            "energy_required": 5,
            "enabled": false,
            "ingredients": [
                {
                    "amount": 1,
                    "type": "item",
                    "name": "sulfur"
                },
                {
                    "amount": 1,
                    "type": "item",
                    "name": "coal"
                },
                {
                    "amount": 10,
                    "type": "fluid",
                    "name": "water"
                }
            ]
        },
        "type": "recipe",
        "name": "explosives",
        "category": "chemistry"
    },
    "battery": {
        "crafting_machine_tint": {
            "primary": {
                "r": 0.97,
                "b": 0,
                "g": 0.611,
                "a": 0
            },
            "secondary": {
                "r": 0,
                "b": 0.894,
                "g": 0.68,
                "a": 0.357
            },
            "tertiary": {
                "r": 0.43,
                "b": 0.726,
                "g": 0.805,
                "a": 0
            }
        },
        "expensive": {
            "result": "battery",
            "energy_required": 5,
            "enabled": false,
            "ingredients": [
                {
                    "amount": 40,
                    "type": "fluid",
                    "name": "sulfuric-acid"
                },
                [
                    "iron-plate",
                    1
                ],
                [
                    "copper-plate",
                    1
                ]
            ]
        },
        "normal": {
            "result": "battery",
            "energy_required": 5,
            "enabled": false,
            "ingredients": [
                {
                    "amount": 20,
                    "type": "fluid",
                    "name": "sulfuric-acid"
                },
                [
                    "iron-plate",
                    1
                ],
                [
                    "copper-plate",
                    1
                ]
            ]
        },
        "type": "recipe",
        "category": "chemistry",
        "name": "battery"
    },
    "storage-tank": {
        "result": "storage-tank",
        "enabled": false,
        "energy_required": 3,
        "type": "recipe",
        "ingredients": [
            [
                "iron-plate",
                20
            ],
            [
                "steel-plate",
                5
            ]
        ],
        "name": "storage-tank"
    },
    "pump": {
        "result": "pump",
        "enabled": false,
        "energy_required": 2,
        "type": "recipe",
        "ingredients": [
            [
                "engine-unit",
                1
            ],
            [
                "steel-plate",
                1
            ],
            [
                "pipe",
                1
            ]
        ],
        "name": "pump"
    },
    "chemical-plant": {
        "result": "chemical-plant",
        "enabled": false,
        "energy_required": 5,
        "type": "recipe",
        "ingredients": [
            [
                "steel-plate",
                5
            ],
            [
                "iron-gear-wheel",
                5
            ],
            [
                "electronic-circuit",
                5
            ],
            [
                "pipe",
                5
            ]
        ],
        "name": "chemical-plant"
    },
    "small-plane": {
        "result": "small-plane",
        "category": "crafting",
        "enabled": false,
        "ingredients": [
            [
                "plastic-bar",
                100
            ],
            [
                "advanced-circuit",
                200
            ],
            [
                "electric-engine-unit",
                20
            ],
            [
                "battery",
                100
            ]
        ],
        "type": "recipe",
        "name": "small-plane",
        "energy_required": 30
    },
    "arithmetic-combinator": {
        "result": "arithmetic-combinator",
        "enabled": false,
        "type": "recipe",
        "ingredients": [
            [
                "copper-cable",
                5
            ],
            [
                "electronic-circuit",
                5
            ]
        ],
        "name": "arithmetic-combinator"
    },
    "decider-combinator": {
        "result": "decider-combinator",
        "enabled": false,
        "type": "recipe",
        "ingredients": [
            [
                "copper-cable",
                5
            ],
            [
                "electronic-circuit",
                5
            ]
        ],
        "name": "decider-combinator"
    },
    "constant-combinator": {
        "result": "constant-combinator",
        "enabled": false,
        "type": "recipe",
        "ingredients": [
            [
                "copper-cable",
                5
            ],
            [
                "electronic-circuit",
                2
            ]
        ],
        "name": "constant-combinator"
    },
    "power-switch": {
        "result": "power-switch",
        "energy_required": 2,
        "enabled": false,
        "type": "recipe",
        "ingredients": [
            [
                "iron-plate",
                5
            ],
            [
                "copper-cable",
                5
            ],
            [
                "electronic-circuit",
                2
            ]
        ],
        "name": "power-switch"
    },
    "programmable-speaker": {
        "result": "programmable-speaker",
        "energy_required": 2,
        "enabled": false,
        "type": "recipe",
        "ingredients": [
            [
                "iron-plate",
                5
            ],
            [
                "copper-cable",
                5
            ],
            [
                "electronic-circuit",
                4
            ]
        ],
        "name": "programmable-speaker"
    },
    "low-density-structure": {
        "expensive": {
            "result": "low-density-structure",
            "energy_required": 30,
            "enabled": false,
            "ingredients": [
                [
                    "steel-plate",
                    10
                ],
                [
                    "copper-plate",
                    10
                ],
                [
                    "plastic-bar",
                    10
                ]
            ]
        },
        "normal": {
            "result": "low-density-structure",
            "energy_required": 30,
            "enabled": false,
            "ingredients": [
                [
                    "steel-plate",
                    10
                ],
                [
                    "copper-plate",
                    5
                ],
                [
                    "plastic-bar",
                    5
                ]
            ]
        },
        "type": "recipe",
        "name": "low-density-structure",
        "category": "crafting"
    },
    "rocket-fuel": {
        "result": "rocket-fuel",
        "category": "crafting",
        "enabled": false,
        "ingredients": [
            [
                "solid-fuel",
                10
            ]
        ],
        "type": "recipe",
        "name": "rocket-fuel",
        "energy_required": 30
    },
    "rocket-control-unit": {
        "result": "rocket-control-unit",
        "category": "crafting",
        "enabled": false,
        "ingredients": [
            [
                "processing-unit",
                1
            ],
            [
                "speed-module",
                1
            ]
        ],
        "type": "recipe",
        "name": "rocket-control-unit",
        "energy_required": 30
    },
    "rocket-part": {
        "result": "rocket-part",
        "hidden": true,
        "enabled": false,
        "ingredients": [
            [
                "low-density-structure",
                10
            ],
            [
                "rocket-fuel",
                10
            ],
            [
                "rocket-control-unit",
                10
            ]
        ],
        "category": "rocket-building",
        "type": "recipe",
        "name": "rocket-part",
        "energy_required": 3
    },
    "satellite": {
        "result": "satellite",
        "category": "crafting",
        "enabled": false,
        "ingredients": [
            [
                "low-density-structure",
                100
            ],
            [
                "solar-panel",
                100
            ],
            [
                "accumulator",
                100
            ],
            [
                "radar",
                5
            ],
            [
                "processing-unit",
                100
            ],
            [
                "rocket-fuel",
                50
            ]
        ],
        "type": "recipe",
        "name": "satellite",
        "energy_required": 3
    },
    "concrete": {
        "result": "concrete",
        "category": "crafting-with-fluid",
        "enabled": false,
        "ingredients": [
            [
                "stone-brick",
                5
            ],
            [
                "iron-ore",
                1
            ],
            {
                "amount": 100,
                "type": "fluid",
                "name": "water"
            }
        ],
        "result_count": 10,
        "type": "recipe",
        "name": "concrete",
        "energy_required": 10
    },
    "hazard-concrete": {
        "result": "hazard-concrete",
        "category": "crafting",
        "enabled": false,
        "ingredients": [
            [
                "concrete",
                10
            ]
        ],
        "result_count": 10,
        "type": "recipe",
        "name": "hazard-concrete",
        "energy_required": 0.25
    },
    "landfill": {
        "result": "landfill",
        "category": "crafting",
        "enabled": false,
        "ingredients": [
            [
                "stone",
                20
            ]
        ],
        "result_count": 1,
        "type": "recipe",
        "name": "landfill",
        "energy_required": 0.5
    },
    "electric-energy-interface": {
        "result": "electric-energy-interface",
        "enabled": false,
        "energy_required": 0.5,
        "type": "recipe",
        "ingredients": [
            [
                "iron-plate",
                2
            ],
            [
                "electronic-circuit",
                5
            ]
        ],
        "name": "electric-energy-interface"
    },
    "nuclear-reactor": {
        "result": "nuclear-reactor",
        "enabled": false,
        "ingredients": [
            [
                "concrete",
                500
            ],
            [
                "steel-plate",
                500
            ],
            [
                "advanced-circuit",
                500
            ],
            [
                "copper-plate",
                500
            ]
        ],
        "requester_paste_multiplier": 1,
        "type": "recipe",
        "name": "nuclear-reactor",
        "energy_required": 4
    },
    "centrifuge": {
        "result": "centrifuge",
        "enabled": false,
        "ingredients": [
            [
                "concrete",
                100
            ],
            [
                "steel-plate",
                50
            ],
            [
                "advanced-circuit",
                100
            ],
            [
                "iron-gear-wheel",
                100
            ]
        ],
        "requester_paste_multiplier": 2,
        "type": "recipe",
        "name": "centrifuge",
        "energy_required": 4
    },
    "uranium-processing": {
        "name": "uranium-processing",
        "category": "centrifuging",
        "ingredients": [
            [
                "uranium-ore",
                10
            ]
        ],
        "order": "h[uranium-processing]",
        "enabled": false,
        "subgroup": "raw-material",
        "results": [
            {
                "amount": 1,
                "name": "uranium-235",
                "probability": 0.007
            },
            {
                "amount": 1,
                "name": "uranium-238",
                "probability": 0.993
            }
        ],
        "type": "recipe",
        "energy_required": 10,
        "icon": "/graphics/icons/uranium-processing.png"
    },
    "kovarex-enrichment-process": {
        "category": "centrifuging",
        "main_product": "",
        "allow_decomposition": false,
        "results": [
            {
                "amount": 41,
                "name": "uranium-235"
            },
            {
                "amount": 2,
                "name": "uranium-238"
            }
        ],
        "type": "recipe",
        "order": "r[uranium-processing]-c[kovarex-enrichment-process]",
        "ingredients": [
            [
                "uranium-235",
                40
            ],
            [
                "uranium-238",
                5
            ]
        ],
        "enabled": false,
        "energy_required": 50,
        "icon": "/graphics/icons/kovarex-enrichment-process.png",
        "subgroup": "intermediate-product",
        "name": "kovarex-enrichment-process"
    },
    "nuclear-fuel-reprocessing": {
        "category": "centrifuging",
        "main_product": "",
        "allow_decomposition": false,
        "results": [
            {
                "amount": 3,
                "name": "uranium-238"
            }
        ],
        "type": "recipe",
        "order": "r[uranium-processing]-b[nuclear-fuel-reprocessing]",
        "ingredients": [
            [
                "used-up-uranium-fuel-cell",
                5
            ]
        ],
        "enabled": false,
        "energy_required": 50,
        "icon": "/graphics/icons/nuclear-fuel-reprocessing.png",
        "subgroup": "intermediate-product",
        "name": "nuclear-fuel-reprocessing"
    },
    "uranium-fuel-cell": {
        "result": "uranium-fuel-cell",
        "enabled": false,
        "ingredients": [
            [
                "iron-plate",
                10
            ],
            [
                "uranium-235",
                1
            ],
            [
                "uranium-238",
                19
            ]
        ],
        "result_count": 10,
        "type": "recipe",
        "energy_required": 10,
        "name": "uranium-fuel-cell"
    },
    "heat-exchanger": {
        "result": "heat-exchanger",
        "enabled": false,
        "type": "recipe",
        "ingredients": [
            [
                "steel-plate",
                10
            ],
            [
                "copper-plate",
                100
            ],
            [
                "pipe",
                10
            ]
        ],
        "name": "heat-exchanger"
    },
    "heat-pipe": {
        "result": "heat-pipe",
        "enabled": false,
        "type": "recipe",
        "ingredients": [
            [
                "steel-plate",
                10
            ],
            [
                "copper-plate",
                20
            ]
        ],
        "name": "heat-pipe"
    },
    "steam-turbine": {
        "result": "steam-turbine",
        "enabled": false,
        "type": "recipe",
        "ingredients": [
            [
                "iron-gear-wheel",
                50
            ],
            [
                "copper-plate",
                50
            ],
            [
                "pipe",
                20
            ]
        ],
        "name": "steam-turbine"
    },
    "laser-turret": {
        "result": "laser-turret",
        "energy_required": 20,
        "enabled": false,
        "type": "recipe",
        "ingredients": [
            [
                "steel-plate",
                20
            ],
            [
                "electronic-circuit",
                20
            ],
            [
                "battery",
                12
            ]
        ],
        "name": "laser-turret"
    },
    "flamethrower-turret": {
        "result": "flamethrower-turret",
        "energy_required": 20,
        "enabled": false,
        "type": "recipe",
        "ingredients": [
            [
                "steel-plate",
                30
            ],
            [
                "iron-gear-wheel",
                15
            ],
            [
                "pipe",
                10
            ],
            [
                "engine-unit",
                5
            ]
        ],
        "name": "flamethrower-turret"
    }
}