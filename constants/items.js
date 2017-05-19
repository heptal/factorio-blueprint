export const item_info = [
    {
        "stack_size": 200,
        "order": "a[basic-clips]-b[piercing-rounds-magazine]",
        "subgroup": "ammo",
        "magazine_size": 10,
        "ammo_type": {
            "action": {
                "action_delivery": {
                    "target_effects": [
                        {
                            "type": "create-entity",
                            "entity_name": "explosion-hit"
                        },
                        {
                            "type": "damage",
                            "damage": {
                                "amount": 8,
                                "type": "physical"
                            }
                        }
                    ],
                    "type": "instant",
                    "source_effects": {
                        "type": "create-explosion",
                        "entity_name": "explosion-gunshot"
                    }
                },
                "type": "direct"
            },
            "category": "bullet"
        },
        "type": "ammo",
        "flags": [
            "goes-to-main-inventory"
        ],
        "icon": "/graphics/icons/piercing-rounds-magazine.png",
        "name": "piercing-rounds-magazine"
    },
    {
        "stack_size": 200,
        "order": "a[basic-clips]-c[uranium-rounds-magazine]",
        "subgroup": "ammo",
        "magazine_size": 10,
        "ammo_type": {
            "action": {
                "action_delivery": {
                    "target_effects": [
                        {
                            "type": "create-entity",
                            "entity_name": "explosion-hit"
                        },
                        {
                            "type": "damage",
                            "damage": {
                                "amount": 24,
                                "type": "physical"
                            }
                        }
                    ],
                    "type": "instant",
                    "source_effects": {
                        "type": "create-explosion",
                        "entity_name": "explosion-gunshot"
                    }
                },
                "type": "direct"
            },
            "category": "bullet"
        },
        "type": "ammo",
        "flags": [
            "goes-to-main-inventory"
        ],
        "icon": "/graphics/icons/uranium-rounds-magazine.png",
        "name": "uranium-rounds-magazine"
    },
    {
        "stack_size": 100,
        "order": "e[flamethrower]",
        "subgroup": "ammo",
        "magazine_size": 100,
        "ammo_type": [
            {
                "clamp_position": true,
                "source_type": "default",
                "target_type": "position",
                "category": "flamethrower",
                "action": {
                    "action_delivery": {
                        "max_length": 15,
                        "type": "stream",
                        "stream": "handheld-flamethrower-fire-stream",
                        "duration": 160
                    },
                    "type": "direct"
                }
            },
            {
                "consumption_modifier": 1.125,
                "clamp_position": true,
                "source_type": "vehicle",
                "target_type": "position",
                "category": "flamethrower",
                "action": {
                    "action_delivery": {
                        "max_length": 9,
                        "type": "stream",
                        "stream": "tank-flamethrower-fire-stream",
                        "duration": 160
                    },
                    "type": "direct"
                }
            }
        ],
        "type": "ammo",
        "flags": [
            "goes-to-main-inventory"
        ],
        "icon": "/graphics/icons/flamethrower-ammo.png",
        "name": "flamethrower-ammo"
    },
    {
        "stack_size": 200,
        "order": "d[rocket-launcher]-a[basic]",
        "subgroup": "ammo",
        "ammo_type": {
            "action": {
                "action_delivery": {
                    "source_effects": {
                        "type": "create-entity",
                        "entity_name": "explosion-hit"
                    },
                    "type": "projectile",
                    "starting_speed": 0.1,
                    "projectile": "rocket"
                },
                "type": "direct"
            },
            "category": "rocket"
        },
        "flags": [
            "goes-to-main-inventory"
        ],
        "type": "ammo",
        "icon": "/graphics/icons/rocket.png",
        "name": "rocket"
    },
    {
        "stack_size": 200,
        "order": "d[rocket-launcher]-b[explosive]",
        "subgroup": "ammo",
        "ammo_type": {
            "action": {
                "action_delivery": {
                    "source_effects": {
                        "type": "create-entity",
                        "entity_name": "explosion-hit"
                    },
                    "type": "projectile",
                    "starting_speed": 0.1,
                    "projectile": "explosive-rocket"
                },
                "type": "direct"
            },
            "category": "rocket"
        },
        "flags": [
            "goes-to-main-inventory"
        ],
        "type": "ammo",
        "icon": "/graphics/icons/explosive-rocket.png",
        "name": "explosive-rocket"
    },
    {
        "stack_size": 10,
        "order": "d[rocket-launcher]-c[atomic-bomb]",
        "subgroup": "ammo",
        "ammo_type": {
            "range_modifier": 3,
            "cooldown_modifier": 3,
            "target_type": "position",
            "category": "rocket",
            "action": {
                "action_delivery": {
                    "source_effects": {
                        "type": "create-entity",
                        "entity_name": "explosion-hit"
                    },
                    "type": "projectile",
                    "starting_speed": 0.05,
                    "projectile": "atomic-rocket"
                },
                "type": "direct"
            }
        },
        "flags": [
            "goes-to-main-inventory"
        ],
        "type": "ammo",
        "icon": "/graphics/icons/atomic-bomb.png",
        "name": "atomic-bomb"
    },
    {
        "stack_size": 200,
        "order": "b[shotgun]-a[basic]",
        "subgroup": "ammo",
        "magazine_size": 10,
        "ammo_type": {
            "target_type": "direction",
            "action": [
                {
                    "action_delivery": {
                        "type": "instant",
                        "source_effects": [
                            {
                                "type": "create-explosion",
                                "entity_name": "explosion-gunshot"
                            }
                        ]
                    },
                    "type": "direct"
                },
                {
                    "action_delivery": {
                        "range_deviation": 0.3,
                        "max_range": 15,
                        "direction_deviation": 0.3,
                        "type": "projectile",
                        "starting_speed": 1,
                        "projectile": "shotgun-pellet"
                    },
                    "type": "direct",
                    "repeat_count": 12
                }
            ],
            "category": "shotgun-shell"
        },
        "type": "ammo",
        "flags": [
            "goes-to-main-inventory"
        ],
        "icon": "/graphics/icons/shotgun-shell.png",
        "name": "shotgun-shell"
    },
    {
        "stack_size": 200,
        "order": "b[shotgun]-b[piercing]",
        "subgroup": "ammo",
        "magazine_size": 10,
        "ammo_type": {
            "target_type": "direction",
            "action": [
                {
                    "action_delivery": {
                        "type": "instant",
                        "source_effects": [
                            {
                                "type": "create-explosion",
                                "entity_name": "explosion-gunshot"
                            }
                        ]
                    },
                    "type": "direct"
                },
                {
                    "action_delivery": {
                        "range_deviation": 0.3,
                        "max_range": 15,
                        "direction_deviation": 0.3,
                        "type": "projectile",
                        "starting_speed": 1,
                        "projectile": "piercing-shotgun-pellet"
                    },
                    "type": "direct",
                    "repeat_count": 16
                }
            ],
            "category": "shotgun-shell"
        },
        "type": "ammo",
        "flags": [
            "goes-to-main-inventory"
        ],
        "icon": "/graphics/icons/piercing-shotgun-shell.png",
        "name": "piercing-shotgun-shell"
    },
    {
        "stack_size": 200,
        "order": "c[railgun]",
        "subgroup": "ammo",
        "magazine_size": 4,
        "ammo_type": {
            "target_type": "direction",
            "action": {
                "range": 25,
                "source_effects": {
                    "type": "create-explosion",
                    "entity_name": "railgun-beam"
                },
                "width": 0.5,
                "type": "line",
                "action_delivery": {
                    "target_effects": {
                        "type": "damage",
                        "damage": {
                            "amount": 100,
                            "type": "physical"
                        }
                    },
                    "type": "instant"
                }
            },
            "category": "railgun"
        },
        "type": "ammo",
        "flags": [
            "goes-to-main-inventory",
            "hidden"
        ],
        "icon": "/graphics/icons/railgun-ammo.png",
        "name": "railgun-dart"
    },
    {
        "stack_size": 200,
        "order": "d[cannon-shell]-a[basic]",
        "subgroup": "ammo",
        "ammo_type": {
            "target_type": "direction",
            "action": {
                "action_delivery": {
                    "projectile": "cannon-projectile",
                    "range_deviation": 0.1,
                    "starting_speed": 1,
                    "type": "projectile",
                    "max_range": 30,
                    "source_effects": {
                        "type": "create-explosion",
                        "entity_name": "explosion-gunshot"
                    },
                    "direction_deviation": 0.1
                },
                "type": "direct"
            },
            "category": "cannon-shell"
        },
        "flags": [
            "goes-to-main-inventory"
        ],
        "type": "ammo",
        "icon": "/graphics/icons/cannon-shell.png",
        "name": "cannon-shell"
    },
    {
        "stack_size": 200,
        "order": "d[cannon-shell]-c[explosive]",
        "subgroup": "ammo",
        "ammo_type": {
            "target_type": "direction",
            "action": {
                "action_delivery": {
                    "projectile": "explosive-cannon-projectile",
                    "range_deviation": 0.1,
                    "starting_speed": 1,
                    "type": "projectile",
                    "max_range": 30,
                    "source_effects": {
                        "type": "create-explosion",
                        "entity_name": "explosion-gunshot"
                    },
                    "direction_deviation": 0.1
                },
                "type": "direct"
            },
            "category": "cannon-shell"
        },
        "flags": [
            "goes-to-main-inventory"
        ],
        "type": "ammo",
        "icon": "/graphics/icons/explosive-cannon-shell.png",
        "name": "explosive-cannon-shell"
    },
    {
        "stack_size": 200,
        "order": "d[cannon-shell]-c[uranium]",
        "subgroup": "ammo",
        "ammo_type": {
            "target_type": "direction",
            "action": {
                "action_delivery": {
                    "projectile": "uranium-cannon-projectile",
                    "range_deviation": 0.1,
                    "starting_speed": 1,
                    "type": "projectile",
                    "max_range": 30,
                    "source_effects": {
                        "type": "create-explosion",
                        "entity_name": "explosion-gunshot"
                    },
                    "direction_deviation": 0.1
                },
                "type": "direct"
            },
            "category": "cannon-shell"
        },
        "flags": [
            "goes-to-main-inventory"
        ],
        "type": "ammo",
        "icon": "/graphics/icons/uranium-cannon-shell.png",
        "name": "uranium-cannon-shell"
    },
    {
        "stack_size": 200,
        "order": "d[explosive-cannon-shell]-c[uranium]",
        "subgroup": "ammo",
        "ammo_type": {
            "target_type": "direction",
            "action": {
                "action_delivery": {
                    "projectile": "explosive-uranium-cannon-projectile",
                    "range_deviation": 0.1,
                    "starting_speed": 1,
                    "type": "projectile",
                    "max_range": 30,
                    "source_effects": {
                        "type": "create-explosion",
                        "entity_name": "explosion-gunshot"
                    },
                    "direction_deviation": 0.1
                },
                "type": "direct"
            },
            "category": "cannon-shell"
        },
        "flags": [
            "goes-to-main-inventory"
        ],
        "type": "ammo",
        "icon": "/graphics/icons/explosive-uranium-cannon-shell.png",
        "name": "explosive-uranium-cannon-shell"
    },
    {
        "durability": 5000,
        "stack_size": 10,
        "order": "b[heavy-armor]",
        "subgroup": "armor",
        "resistances": [
            {
                "percent": 30,
                "decrease": 6,
                "type": "physical"
            },
            {
                "percent": 30,
                "decrease": 20,
                "type": "explosion"
            },
            {
                "percent": 30,
                "decrease": 3,
                "type": "acid"
            },
            {
                "percent": 30,
                "decrease": 0,
                "type": "fire"
            }
        ],
        "flags": [
            "goes-to-main-inventory"
        ],
        "type": "armor",
        "icon": "/graphics/icons/heavy-armor.png",
        "name": "heavy-armor"
    },
    {
        "durability": 10000,
        "inventory_size_bonus": 10,
        "stack_size": 1,
        "order": "c[modular-armor]",
        "subgroup": "armor",
        "name": "modular-armor",
        "resistances": [
            {
                "percent": 30,
                "decrease": 6,
                "type": "physical"
            },
            {
                "percent": 30,
                "decrease": 5,
                "type": "acid"
            },
            {
                "percent": 35,
                "decrease": 30,
                "type": "explosion"
            },
            {
                "percent": 40,
                "decrease": 0,
                "type": "fire"
            }
        ],
        "type": "armor",
        "flags": [
            "goes-to-main-inventory"
        ],
        "icon": "/graphics/icons/modular-armor.png",
        "equipment_grid": "small-equipment-grid"
    },
    {
        "durability": 15000,
        "inventory_size_bonus": 20,
        "stack_size": 1,
        "order": "d[power-armor]",
        "subgroup": "armor",
        "name": "power-armor",
        "resistances": [
            {
                "percent": 30,
                "decrease": 8,
                "type": "physical"
            },
            {
                "percent": 30,
                "decrease": 7,
                "type": "acid"
            },
            {
                "percent": 40,
                "decrease": 40,
                "type": "explosion"
            },
            {
                "percent": 60,
                "decrease": 0,
                "type": "fire"
            }
        ],
        "type": "armor",
        "flags": [
            "goes-to-main-inventory"
        ],
        "icon": "/graphics/icons/power-armor.png",
        "equipment_grid": "medium-equipment-grid"
    },
    {
        "durability": 20000,
        "inventory_size_bonus": 30,
        "stack_size": 1,
        "order": "e[power-armor-mk2]",
        "subgroup": "armor",
        "name": "power-armor-mk2",
        "resistances": [
            {
                "percent": 40,
                "decrease": 10,
                "type": "physical"
            },
            {
                "percent": 40,
                "decrease": 10,
                "type": "acid"
            },
            {
                "percent": 50,
                "decrease": 60,
                "type": "explosion"
            },
            {
                "percent": 70,
                "decrease": 0,
                "type": "fire"
            }
        ],
        "type": "armor",
        "flags": [
            "goes-to-main-inventory"
        ],
        "icon": "/graphics/icons/power-armor-mk2.png",
        "equipment_grid": "large-equipment-grid"
    },
    {
        "stack_size": 100,
        "order": "a[grenade]-a[normal]",
        "subgroup": "capsule",
        "capsule_action": {
            "type": "throw",
            "attack_parameters": {
                "ammo_category": "grenade",
                "range": 15,
                "ammo_type": {
                    "target_type": "position",
                    "action": {
                        "action_delivery": {
                            "type": "projectile",
                            "projectile": "grenade",
                            "starting_speed": 0.3
                        },
                        "type": "direct"
                    },
                    "category": "grenade"
                },
                "type": "projectile",
                "cooldown": 30,
                "projectile_creation_distance": 0.6
            }
        },
        "flags": [
            "goes-to-quickbar"
        ],
        "type": "capsule",
        "icon": "/graphics/icons/grenade.png",
        "name": "grenade"
    },
    {
        "stack_size": 100,
        "order": "a[grenade]-b[cluster]",
        "subgroup": "capsule",
        "capsule_action": {
            "type": "throw",
            "attack_parameters": {
                "ammo_category": "grenade",
                "range": 20,
                "ammo_type": {
                    "target_type": "position",
                    "action": {
                        "action_delivery": {
                            "type": "projectile",
                            "projectile": "cluster-grenade",
                            "starting_speed": 0.3
                        },
                        "type": "direct"
                    },
                    "category": "grenade"
                },
                "type": "projectile",
                "cooldown": 30,
                "projectile_creation_distance": 0.6
            }
        },
        "flags": [
            "goes-to-quickbar"
        ],
        "type": "capsule",
        "icon": "/graphics/icons/cluster-grenade.png",
        "name": "cluster-grenade"
    },
    {
        "stack_size": 100,
        "order": "b[poison-capsule]",
        "subgroup": "capsule",
        "capsule_action": {
            "type": "throw",
            "attack_parameters": {
                "ammo_category": "capsule",
                "range": 25,
                "ammo_type": {
                    "target_type": "position",
                    "action": {
                        "action_delivery": {
                            "type": "projectile",
                            "projectile": "poison-capsule",
                            "starting_speed": 0.3
                        },
                        "type": "direct"
                    },
                    "category": "capsule"
                },
                "type": "projectile",
                "cooldown": 30,
                "projectile_creation_distance": 0.6
            }
        },
        "flags": [
            "goes-to-quickbar"
        ],
        "type": "capsule",
        "icon": "/graphics/icons/poison-capsule.png",
        "name": "poison-capsule"
    },
    {
        "stack_size": 100,
        "order": "c[slowdown-capsule]",
        "subgroup": "capsule",
        "capsule_action": {
            "type": "throw",
            "attack_parameters": {
                "ammo_category": "capsule",
                "range": 25,
                "ammo_type": {
                    "target_type": "position",
                    "action": {
                        "action_delivery": {
                            "type": "projectile",
                            "projectile": "slowdown-capsule",
                            "starting_speed": 0.3
                        },
                        "type": "direct"
                    },
                    "category": "capsule"
                },
                "type": "projectile",
                "cooldown": 30,
                "projectile_creation_distance": 0.6
            }
        },
        "flags": [
            "goes-to-quickbar"
        ],
        "type": "capsule",
        "icon": "/graphics/icons/slowdown-capsule.png",
        "name": "slowdown-capsule"
    },
    {
        "stack_size": 100,
        "order": "d[defender-capsule]",
        "subgroup": "capsule",
        "capsule_action": {
            "type": "throw",
            "attack_parameters": {
                "ammo_category": "capsule",
                "range": 20,
                "ammo_type": {
                    "target_type": "position",
                    "action": {
                        "action_delivery": {
                            "type": "projectile",
                            "projectile": "defender-capsule",
                            "starting_speed": 0.3
                        },
                        "type": "direct"
                    },
                    "category": "capsule"
                },
                "type": "projectile",
                "cooldown": 15,
                "projectile_creation_distance": 0.6
            }
        },
        "flags": [
            "goes-to-quickbar"
        ],
        "type": "capsule",
        "icon": "/graphics/icons/defender-capsule.png",
        "name": "defender-capsule"
    },
    {
        "stack_size": 100,
        "order": "e[defender-capsule]",
        "subgroup": "capsule",
        "capsule_action": {
            "type": "throw",
            "attack_parameters": {
                "ammo_category": "capsule",
                "range": 25,
                "ammo_type": {
                    "target_type": "position",
                    "action": {
                        "action_delivery": {
                            "type": "projectile",
                            "projectile": "distractor-capsule",
                            "starting_speed": 0.3
                        },
                        "type": "direct"
                    },
                    "category": "capsule"
                },
                "type": "projectile",
                "cooldown": 30,
                "projectile_creation_distance": 0.6
            }
        },
        "flags": [
            "goes-to-quickbar"
        ],
        "type": "capsule",
        "icon": "/graphics/icons/distractor-capsule.png",
        "name": "distractor-capsule"
    },
    {
        "stack_size": 100,
        "order": "f[destroyer-capsule]",
        "subgroup": "capsule",
        "capsule_action": {
            "type": "throw",
            "attack_parameters": {
                "ammo_category": "capsule",
                "range": 25,
                "ammo_type": {
                    "target_type": "position",
                    "action": {
                        "action_delivery": {
                            "type": "projectile",
                            "projectile": "destroyer-capsule",
                            "starting_speed": 0.3
                        },
                        "type": "direct"
                    },
                    "category": "capsule"
                },
                "type": "projectile",
                "cooldown": 30,
                "projectile_creation_distance": 0.6
            }
        },
        "flags": [
            "goes-to-quickbar"
        ],
        "type": "capsule",
        "icon": "/graphics/icons/destroyer-capsule.png",
        "name": "destroyer-capsule"
    },
    {
        "stack_size": 1,
        "order": "z",
        "subgroup": "capsule",
        "capsule_action": {
            "type": "equipment-remote",
            "equipment": "discharge-defense-equipment"
        },
        "flags": [
            "goes-to-quickbar"
        ],
        "type": "capsule",
        "icon": "/graphics/equipment/discharge-defense-equipment-ability.png",
        "name": "discharge-defense-remote"
    },
    {
        "stack_size": 200,
        "order": "a[basic-clips]-a[firearm-magazine]",
        "subgroup": "ammo",
        "magazine_size": 10,
        "ammo_type": {
            "action": [
                {
                    "action_delivery": [
                        {
                            "target_effects": [
                                {
                                    "type": "create-entity",
                                    "entity_name": "explosion-hit"
                                },
                                {
                                    "type": "damage",
                                    "damage": {
                                        "amount": 5,
                                        "type": "physical"
                                    }
                                }
                            ],
                            "type": "instant",
                            "source_effects": [
                                {
                                    "type": "create-explosion",
                                    "entity_name": "explosion-gunshot"
                                }
                            ]
                        }
                    ],
                    "type": "direct"
                }
            ],
            "category": "bullet"
        },
        "type": "ammo",
        "flags": [
            "goes-to-main-inventory"
        ],
        "icon": "/graphics/icons/firearm-magazine.png",
        "name": "firearm-magazine"
    },
    {
        "durability": 1000,
        "stack_size": 10,
        "order": "a[light-armor]",
        "subgroup": "armor",
        "resistances": [
            {
                "percent": 20,
                "decrease": 3,
                "type": "physical"
            },
            {
                "percent": 10,
                "decrease": 0,
                "type": "acid"
            },
            {
                "percent": 20,
                "decrease": 2,
                "type": "explosion"
            },
            {
                "percent": 10,
                "decrease": 0,
                "type": "fire"
            }
        ],
        "flags": [
            "goes-to-main-inventory"
        ],
        "type": "armor",
        "icon": "/graphics/icons/light-armor.png",
        "name": "light-armor"
    },
    {
        "name": "pistol",
        "stack_size": 5,
        "order": "a[basic-clips]-a[pistol]",
        "subgroup": "gun",
        "flags": [
            "goes-to-main-inventory"
        ],
        "type": "gun",
        "icon": "/graphics/icons/pistol.png",
        "attack_parameters": {
            "movement_slow_down_factor": 0.2,
            "cooldown": 15,
            "range": 15,
            "projectile_creation_distance": 1.125,
            "ammo_category": "bullet",
            "type": "projectile",
            "shell_particle": {
                "center": [
                    0,
                    0.1
                ],
                "speed": 0.1,
                "starting_frame_speed_deviation": 0.1,
                "name": "shell-particle",
                "creation_distance": -0.5,
                "speed_deviation": 0.03,
                "direction_deviation": 0.1,
                "starting_frame_speed": 0.4
            }
        }
    },
    {
        "name": "submachine-gun",
        "stack_size": 5,
        "order": "a[basic-clips]-b[submachine-gun]",
        "subgroup": "gun",
        "flags": [
            "goes-to-main-inventory"
        ],
        "type": "gun",
        "icon": "/graphics/icons/submachine-gun.png",
        "attack_parameters": {
            "movement_slow_down_factor": 0.7,
            "cooldown": 6,
            "range": 18,
            "projectile_creation_distance": 1.125,
            "ammo_category": "bullet",
            "type": "projectile",
            "shell_particle": {
                "center": [
                    0,
                    0.1
                ],
                "speed": 0.1,
                "starting_frame_speed_deviation": 0.1,
                "name": "shell-particle",
                "creation_distance": -0.5,
                "speed_deviation": 0.03,
                "direction_deviation": 0.1,
                "starting_frame_speed": 0.4
            }
        }
    },
    {
        "stack_size": 100,
        "order": "a[stone-brick]",
        "place_as_tile": {
            "condition": [
                "water-tile"
            ],
            "result": "stone-path",
            "condition_size": 4
        },
        "subgroup": "terrain",
        "flags": [
            "goes-to-main-inventory"
        ],
        "type": "item",
        "icon": "/graphics/icons/stone-brick.png",
        "name": "stone-brick"
    },
    {
        "name": "raw-wood",
        "stack_size": 100,
        "order": "a[raw-wood]",
        "subgroup": "raw-material",
        "fuel_value": "4MJ",
        "flags": [
            "goes-to-main-inventory"
        ],
        "type": "item",
        "fuel_category": "chemical",
        "icon": "/graphics/icons/raw-wood.png"
    },
    {
        "name": "coal",
        "stack_size": 50,
        "order": "b[coal]",
        "dark_background_icon": "/graphics/icons/coal-dark-background.png",
        "subgroup": "raw-material",
        "fuel_value": "8MJ",
        "type": "item",
        "flags": [
            "goes-to-main-inventory"
        ],
        "fuel_category": "chemical",
        "icon": "/graphics/icons/coal.png"
    },
    {
        "stack_size": 50,
        "order": "d[stone]",
        "subgroup": "raw-resource",
        "flags": [
            "goes-to-main-inventory"
        ],
        "type": "item",
        "name": "stone",
        "icon": "/graphics/icons/stone.png"
    },
    {
        "stack_size": 50,
        "order": "e[iron-ore]",
        "subgroup": "raw-resource",
        "flags": [
            "goes-to-main-inventory"
        ],
        "type": "item",
        "name": "iron-ore",
        "icon": "/graphics/icons/iron-ore.png"
    },
    {
        "stack_size": 50,
        "order": "f[copper-ore]",
        "subgroup": "raw-resource",
        "flags": [
            "goes-to-main-inventory"
        ],
        "type": "item",
        "name": "copper-ore",
        "icon": "/graphics/icons/copper-ore.png"
    },
    {
        "name": "wood",
        "stack_size": 50,
        "order": "a[wood]",
        "subgroup": "raw-material",
        "fuel_value": "2MJ",
        "flags": [
            "goes-to-main-inventory"
        ],
        "type": "item",
        "fuel_category": "chemical",
        "icon": "/graphics/icons/wood.png"
    },
    {
        "stack_size": 100,
        "order": "b[iron-plate]",
        "subgroup": "raw-material",
        "flags": [
            "goes-to-main-inventory"
        ],
        "type": "item",
        "name": "iron-plate",
        "icon": "/graphics/icons/iron-plate.png"
    },
    {
        "stack_size": 100,
        "order": "c[copper-plate]",
        "subgroup": "raw-material",
        "flags": [
            "goes-to-main-inventory"
        ],
        "type": "item",
        "name": "copper-plate",
        "icon": "/graphics/icons/copper-plate.png"
    },
    {
        "stack_size": 200,
        "order": "a[copper-cable]",
        "subgroup": "intermediate-product",
        "flags": [
            "goes-to-main-inventory"
        ],
        "type": "item",
        "name": "copper-cable",
        "icon": "/graphics/icons/copper-cable.png"
    },
    {
        "stack_size": 100,
        "order": "b[iron-stick]",
        "subgroup": "intermediate-product",
        "flags": [
            "goes-to-main-inventory"
        ],
        "type": "item",
        "name": "iron-stick",
        "icon": "/graphics/icons/iron-stick.png"
    },
    {
        "stack_size": 100,
        "order": "c[iron-gear-wheel]",
        "subgroup": "intermediate-product",
        "flags": [
            "goes-to-main-inventory"
        ],
        "type": "item",
        "name": "iron-gear-wheel",
        "icon": "/graphics/icons/iron-gear-wheel.png"
    },
    {
        "stack_size": 200,
        "order": "e[electronic-circuit]",
        "subgroup": "intermediate-product",
        "flags": [
            "goes-to-main-inventory"
        ],
        "type": "item",
        "name": "electronic-circuit",
        "icon": "/graphics/icons/electronic-circuit.png"
    },
    {
        "name": "wooden-chest",
        "place_result": "wooden-chest",
        "order": "a[items]-a[wooden-chest]",
        "stack_size": 50,
        "subgroup": "storage",
        "fuel_value": "4MJ",
        "type": "item",
        "flags": [
            "goes-to-quickbar"
        ],
        "fuel_category": "chemical",
        "icon": "/graphics/icons/wooden-chest.png"
    },
    {
        "place_result": "stone-furnace",
        "order": "a[stone-furnace]",
        "subgroup": "smelting-machine",
        "stack_size": 50,
        "flags": [
            "goes-to-quickbar"
        ],
        "type": "item",
        "icon": "/graphics/icons/stone-furnace.png",
        "name": "stone-furnace"
    },
    {
        "place_result": "burner-mining-drill",
        "order": "a[items]-a[burner-mining-drill]",
        "subgroup": "extraction-machine",
        "stack_size": 50,
        "flags": [
            "goes-to-quickbar"
        ],
        "type": "item",
        "icon": "/graphics/icons/burner-mining-drill.png",
        "name": "burner-mining-drill"
    },
    {
        "place_result": "electric-mining-drill",
        "order": "a[items]-b[electric-mining-drill]",
        "subgroup": "extraction-machine",
        "stack_size": 50,
        "flags": [
            "goes-to-quickbar"
        ],
        "type": "item",
        "icon": "/graphics/icons/electric-mining-drill.png",
        "name": "electric-mining-drill"
    },
    {
        "place_result": "transport-belt",
        "order": "a[transport-belt]-a[transport-belt]",
        "subgroup": "belt",
        "stack_size": 100,
        "flags": [
            "goes-to-quickbar"
        ],
        "type": "item",
        "icon": "/graphics/icons/transport-belt.png",
        "name": "transport-belt"
    },
    {
        "place_result": "burner-inserter",
        "order": "a[burner-inserter]",
        "subgroup": "inserter",
        "stack_size": 50,
        "flags": [
            "goes-to-quickbar"
        ],
        "type": "item",
        "icon": "/graphics/icons/burner-inserter.png",
        "name": "burner-inserter"
    },
    {
        "place_result": "inserter",
        "order": "b[inserter]",
        "subgroup": "inserter",
        "stack_size": 50,
        "flags": [
            "goes-to-quickbar"
        ],
        "type": "item",
        "icon": "/graphics/icons/inserter.png",
        "name": "inserter"
    },
    {
        "place_result": "offshore-pump",
        "order": "b[fluids]-a[offshore-pump]",
        "subgroup": "extraction-machine",
        "stack_size": 20,
        "flags": [
            "goes-to-quickbar"
        ],
        "type": "item",
        "icon": "/graphics/icons/offshore-pump.png",
        "name": "offshore-pump"
    },
    {
        "place_result": "pipe",
        "order": "a[pipe]-a[pipe]",
        "subgroup": "energy-pipe-distribution",
        "stack_size": 100,
        "flags": [
            "goes-to-quickbar"
        ],
        "type": "item",
        "icon": "/graphics/icons/pipe.png",
        "name": "pipe"
    },
    {
        "place_result": "boiler",
        "order": "b[steam-power]-a[boiler]",
        "subgroup": "energy",
        "stack_size": 50,
        "flags": [
            "goes-to-quickbar"
        ],
        "type": "item",
        "icon": "/graphics/icons/boiler.png",
        "name": "boiler"
    },
    {
        "place_result": "steam-engine",
        "order": "b[steam-power]-b[steam-engine]",
        "subgroup": "energy",
        "stack_size": 10,
        "flags": [
            "goes-to-quickbar"
        ],
        "type": "item",
        "icon": "/graphics/icons/steam-engine.png",
        "name": "steam-engine"
    },
    {
        "name": "small-electric-pole",
        "place_result": "small-electric-pole",
        "order": "a[energy]-a[small-electric-pole]",
        "stack_size": 50,
        "subgroup": "energy-pipe-distribution",
        "fuel_value": "4MJ",
        "type": "item",
        "flags": [
            "goes-to-quickbar"
        ],
        "fuel_category": "chemical",
        "icon": "/graphics/icons/small-electric-pole.png"
    },
    {
        "place_result": "radar",
        "order": "d[radar]-a[radar]",
        "subgroup": "defensive-structure",
        "stack_size": 50,
        "flags": [
            "goes-to-quickbar"
        ],
        "type": "item",
        "icon": "/graphics/icons/radar.png",
        "name": "radar"
    },
    {
        "stack_size": 1,
        "order": "g[computer]",
        "subgroup": "defensive-structure",
        "flags": [
            "goes-to-quickbar",
            "hidden"
        ],
        "type": "item",
        "name": "computer",
        "icon": "/graphics/icons/computer.png"
    },
    {
        "stack_size": 1,
        "order": "b[personal-transport]-c[small-plane]",
        "subgroup": "transport",
        "flags": [
            "goes-to-quickbar",
            "hidden"
        ],
        "type": "item",
        "name": "small-plane",
        "icon": "/graphics/icons/small-plane.png"
    },
    {
        "place_result": "small-lamp",
        "order": "a[light]-a[small-lamp]",
        "subgroup": "circuit-network",
        "stack_size": 50,
        "flags": [
            "goes-to-quickbar"
        ],
        "type": "item",
        "icon": "/graphics/icons/small-lamp.png",
        "name": "small-lamp"
    },
    {
        "place_result": "pipe-to-ground",
        "order": "a[pipe]-b[pipe-to-ground]",
        "subgroup": "energy-pipe-distribution",
        "stack_size": 50,
        "flags": [
            "goes-to-quickbar"
        ],
        "type": "item",
        "icon": "/graphics/icons/pipe-to-ground.png",
        "name": "pipe-to-ground"
    },
    {
        "place_result": "assembling-machine-1",
        "order": "a[assembling-machine-1]",
        "subgroup": "production-machine",
        "stack_size": 50,
        "flags": [
            "goes-to-quickbar"
        ],
        "type": "item",
        "icon": "/graphics/icons/assembling-machine-1.png",
        "name": "assembling-machine-1"
    },
    {
        "stack_size": 200,
        "order": "b[wires]-a[red-wire]",
        "subgroup": "circuit-network",
        "flags": [
            "goes-to-quickbar"
        ],
        "type": "item",
        "name": "red-wire",
        "icon": "/graphics/icons/red-wire.png"
    },
    {
        "stack_size": 200,
        "order": "b[wires]-b[green-wire]",
        "subgroup": "circuit-network",
        "flags": [
            "goes-to-quickbar"
        ],
        "type": "item",
        "name": "green-wire",
        "icon": "/graphics/icons/green-wire.png"
    },
    {
        "stack_size": 100,
        "order": "f-e-a",
        "subgroup": "raw-resource",
        "capsule_action": {
            "type": "use-on-self",
            "attack_parameters": {
                "ammo_category": "capsule",
                "range": 0,
                "ammo_type": {
                    "target_type": "position",
                    "action": {
                        "action_delivery": {
                            "target_effects": {
                                "type": "damage",
                                "damage": {
                                    "amount": -80,
                                    "type": "physical"
                                }
                            },
                            "type": "instant"
                        },
                        "type": "direct"
                    },
                    "category": "capsule"
                },
                "type": "projectile",
                "cooldown": 30
            }
        },
        "flags": [
            "goes-to-quickbar"
        ],
        "type": "capsule",
        "icon": "/graphics/icons/fish.png",
        "name": "raw-fish"
    },
    {
        "durability": 300,
        "speed": 2,
        "stack_size": 100,
        "order": "b[repair]-a[repair-pack]",
        "subgroup": "tool",
        "flags": [
            "goes-to-quickbar"
        ],
        "type": "repair-tool",
        "icon": "/graphics/icons/repair-pack.png",
        "name": "repair-pack"
    },
    {
        "place_result": "stone-wall",
        "order": "a[stone-wall]-a[stone-wall]",
        "subgroup": "defensive-structure",
        "stack_size": 100,
        "flags": [
            "goes-to-quickbar"
        ],
        "type": "item",
        "icon": "/graphics/icons/stone-wall.png",
        "name": "stone-wall"
    },
    {
        "durability": 4000,
        "action": {
            "action_delivery": {
                "target_effects": {
                    "type": "damage",
                    "damage": {
                        "amount": 5,
                        "type": "physical"
                    }
                },
                "type": "instant"
            },
            "type": "direct"
        },
        "stack_size": 20,
        "order": "a[mining]-a[iron-axe]",
        "subgroup": "tool",
        "speed": 2.5,
        "type": "mining-tool",
        "flags": [
            "goes-to-main-inventory"
        ],
        "icon": "/graphics/icons/iron-axe.png",
        "name": "iron-axe"
    },
    {
        "place_result": "gun-turret",
        "order": "b[turret]-a[gun-turret]",
        "subgroup": "defensive-structure",
        "stack_size": 50,
        "flags": [
            "goes-to-quickbar"
        ],
        "type": "item",
        "icon": "/graphics/icons/gun-turret.png",
        "name": "gun-turret"
    },
    {
        "stack_size": 20,
        "order": "a[energy-source]-a[solar-panel]",
        "subgroup": "equipment",
        "placed_as_equipment_result": "solar-panel-equipment",
        "flags": [
            "goes-to-main-inventory"
        ],
        "type": "item",
        "icon": "/graphics/icons/solar-panel-equipment.png",
        "name": "solar-panel-equipment"
    },
    {
        "stack_size": 20,
        "order": "a[energy-source]-b[fusion-reactor]",
        "subgroup": "equipment",
        "placed_as_equipment_result": "fusion-reactor-equipment",
        "flags": [
            "goes-to-main-inventory"
        ],
        "type": "item",
        "icon": "/graphics/icons/fusion-reactor-equipment.png",
        "name": "fusion-reactor-equipment"
    },
    {
        "stack_size": 50,
        "order": "b[shield]-a[energy-shield-equipment]",
        "default_request_amount": 10,
        "subgroup": "equipment",
        "placed_as_equipment_result": "energy-shield-equipment",
        "flags": [
            "goes-to-main-inventory"
        ],
        "type": "item",
        "icon": "/graphics/icons/energy-shield-equipment.png",
        "name": "energy-shield-equipment"
    },
    {
        "stack_size": 50,
        "order": "b[shield]-b[energy-shield-equipment-mk2]",
        "default_request_amount": 10,
        "subgroup": "equipment",
        "placed_as_equipment_result": "energy-shield-mk2-equipment",
        "flags": [
            "goes-to-main-inventory"
        ],
        "type": "item",
        "icon": "/graphics/icons/energy-shield-mk2-equipment.png",
        "name": "energy-shield-mk2-equipment"
    },
    {
        "stack_size": 50,
        "order": "c[battery]-a[battery-equipment]",
        "default_request_amount": 10,
        "subgroup": "equipment",
        "placed_as_equipment_result": "battery-equipment",
        "flags": [
            "goes-to-main-inventory"
        ],
        "type": "item",
        "icon": "/graphics/icons/battery-equipment.png",
        "name": "battery-equipment"
    },
    {
        "stack_size": 50,
        "order": "c[battery]-b[battery-equipment-mk2]",
        "default_request_amount": 10,
        "subgroup": "equipment",
        "placed_as_equipment_result": "battery-mk2-equipment",
        "flags": [
            "goes-to-main-inventory"
        ],
        "type": "item",
        "icon": "/graphics/icons/battery-mk2-equipment.png",
        "name": "battery-mk2-equipment"
    },
    {
        "stack_size": 20,
        "order": "d[active-defense]-a[personal-laser-defense-equipment]",
        "subgroup": "equipment",
        "placed_as_equipment_result": "personal-laser-defense-equipment",
        "flags": [
            "goes-to-main-inventory"
        ],
        "type": "item",
        "icon": "/graphics/icons/personal-laser-defense-equipment.png",
        "name": "personal-laser-defense-equipment"
    },
    {
        "stack_size": 20,
        "order": "d[active-defense]-b[discharge-defense-equipment]",
        "subgroup": "equipment",
        "placed_as_equipment_result": "discharge-defense-equipment",
        "flags": [
            "goes-to-main-inventory"
        ],
        "type": "item",
        "icon": "/graphics/icons/discharge-defense-equipment.png",
        "name": "discharge-defense-equipment"
    },
    {
        "stack_size": 10,
        "order": "e[exoskeleton]-a[exoskeleton-equipment]",
        "subgroup": "equipment",
        "placed_as_equipment_result": "exoskeleton-equipment",
        "flags": [
            "goes-to-main-inventory"
        ],
        "type": "item",
        "icon": "/graphics/icons/exoskeleton-equipment.png",
        "name": "exoskeleton-equipment"
    },
    {
        "stack_size": 5,
        "order": "e[robotics]-a[personal-roboport-equipment]",
        "subgroup": "equipment",
        "placed_as_equipment_result": "personal-roboport-equipment",
        "flags": [
            "goes-to-main-inventory"
        ],
        "type": "item",
        "icon": "/graphics/icons/personal-roboport-equipment.png",
        "name": "personal-roboport-equipment"
    },
    {
        "stack_size": 5,
        "order": "e[robotics]-b[personal-roboport-mk2-equipment]",
        "subgroup": "equipment",
        "placed_as_equipment_result": "personal-roboport-mk2-equipment",
        "flags": [
            "goes-to-main-inventory"
        ],
        "type": "item",
        "icon": "/graphics/icons/personal-roboport-mk2-equipment.png",
        "name": "personal-roboport-mk2-equipment"
    },
    {
        "stack_size": 20,
        "order": "f[night-vision]-a[night-vision-equipment]",
        "subgroup": "equipment",
        "placed_as_equipment_result": "night-vision-equipment",
        "flags": [
            "goes-to-main-inventory"
        ],
        "type": "item",
        "icon": "/graphics/icons/night-vision-equipment.png",
        "name": "night-vision-equipment"
    },
    {
        "stack_size": 1,
        "order": "a[belt-immunity]-a[belt-immunity]",
        "subgroup": "equipment",
        "placed_as_equipment_result": "belt-immunity-equipment",
        "flags": [
            "goes-to-main-inventory",
            "hidden"
        ],
        "type": "item",
        "icon": "/graphics/icons/belt-immunity-equipment.png",
        "name": "belt-immunity-equipment"
    },
    {
        "name": "flamethrower",
        "stack_size": 5,
        "order": "e[flamethrower]",
        "subgroup": "gun",
        "flags": [
            "goes-to-main-inventory"
        ],
        "type": "gun",
        "icon": "/graphics/icons/flamethrower.png",
        "attack_parameters": {
            "movement_slow_down_factor": 0.4,
            "gun_barrel_length": 0.8,
            "cooldown": 1,
            "ammo_category": "flamethrower",
            "range": 15,
            "projectile_creation_distance": 0.6,
            "cyclic_sound": {
                "begin_sound": [
                    {
                        "volume": 0.7,
                        "filename": "/sound/fight/flamethrower-start.ogg"
                    }
                ],
                "middle_sound": [
                    {
                        "volume": 0.7,
                        "filename": "/sound/fight/flamethrower-mid.ogg"
                    }
                ],
                "end_sound": [
                    {
                        "volume": 0.7,
                        "filename": "/sound/fight/flamethrower-end.ogg"
                    }
                ]
            },
            "type": "stream",
            "gun_center_shift": [
                0,
                -1
            ],
            "min_range": 3
        }
    },
    {
        "name": "vehicle-machine-gun",
        "stack_size": 1,
        "order": "a[basic-clips]-b[vehicle-machine-gun]",
        "subgroup": "gun",
        "flags": [
            "goes-to-main-inventory",
            "hidden"
        ],
        "type": "gun",
        "icon": "/graphics/icons/submachine-gun.png",
        "attack_parameters": {
            "movement_slow_down_factor": 0.7,
            "cooldown": 4,
            "range": 20,
            "projectile_creation_distance": 0.65,
            "ammo_category": "bullet",
            "type": "projectile",
            "shell_particle": {
                "center": [
                    0,
                    0
                ],
                "speed": 0.1,
                "starting_frame_speed_deviation": 0.1,
                "name": "shell-particle",
                "creation_distance": -0.6875,
                "speed_deviation": 0.03,
                "direction_deviation": 0.1,
                "starting_frame_speed": 0.4
            }
        }
    },
    {
        "name": "tank-machine-gun",
        "stack_size": 1,
        "order": "a[basic-clips]-b[tank-machine-gun]",
        "subgroup": "gun",
        "flags": [
            "goes-to-main-inventory",
            "hidden"
        ],
        "type": "gun",
        "icon": "/graphics/icons/submachine-gun.png",
        "attack_parameters": {
            "movement_slow_down_factor": 0.7,
            "cooldown": 4,
            "projectile_center": [
                -0.15625,
                -0.07812
            ],
            "range": 20,
            "ammo_category": "bullet",
            "projectile_creation_distance": 1,
            "type": "projectile",
            "damage_modifier": 2,
            "shell_particle": {
                "center": [
                    0,
                    0
                ],
                "speed": 0.1,
                "starting_frame_speed_deviation": 0.1,
                "name": "shell-particle",
                "creation_distance": -0.6875,
                "speed_deviation": 0.03,
                "direction_deviation": 0.1,
                "starting_frame_speed": 0.4
            }
        }
    },
    {
        "name": "tank-flamethrower",
        "stack_size": 1,
        "order": "b[flamethrower]-b[tank-flamethrower]",
        "subgroup": "gun",
        "flags": [
            "goes-to-main-inventory",
            "hidden"
        ],
        "type": "gun",
        "icon": "/graphics/icons/flamethrower.png",
        "attack_parameters": {
            "gun_barrel_length": 1.4,
            "cooldown": 1,
            "ammo_category": "flamethrower",
            "range": 9,
            "projectile_creation_distance": 0.6,
            "cyclic_sound": {
                "begin_sound": [
                    {
                        "volume": 1,
                        "filename": "/sound/fight/flamethrower-start.ogg"
                    }
                ],
                "middle_sound": [
                    {
                        "volume": 1,
                        "filename": "/sound/fight/flamethrower-mid.ogg"
                    }
                ],
                "end_sound": [
                    {
                        "volume": 1,
                        "filename": "/sound/fight/flamethrower-end.ogg"
                    }
                ]
            },
            "type": "stream",
            "gun_center_shift": [
                -0.17,
                -1.15
            ],
            "min_range": 3
        }
    },
    {
        "icon": "/graphics/icons/land-mine.png",
        "name": "land-mine",
        "place_result": "land-mine",
        "order": "f[land-mine]",
        "subgroup": "gun",
        "stack_size": 100,
        "type": "item",
        "damage_radius": 5,
        "trigger_radius": 1,
        "flags": [
            "goes-to-quickbar"
        ]
    },
    {
        "name": "rocket-launcher",
        "stack_size": 5,
        "order": "d[rocket-launcher]",
        "subgroup": "gun",
        "flags": [
            "goes-to-main-inventory"
        ],
        "type": "gun",
        "icon": "/graphics/icons/rocket-launcher.png",
        "attack_parameters": {
            "movement_slow_down_factor": 0.8,
            "cooldown": 60,
            "projectile_center": [
                -0.17,
                0
            ],
            "ammo_category": "rocket",
            "range": 22,
            "projectile_creation_distance": 0.6,
            "type": "projectile",
            "sound": [
                {
                    "volume": 0.7,
                    "filename": "/sound/fight/rocket-launcher.ogg"
                }
            ]
        }
    },
    {
        "name": "shotgun",
        "stack_size": 5,
        "order": "b[shotgun]-a[basic]",
        "subgroup": "gun",
        "flags": [
            "goes-to-main-inventory"
        ],
        "type": "gun",
        "icon": "/graphics/icons/shotgun.png",
        "attack_parameters": {
            "movement_slow_down_factor": 0.6,
            "cooldown": 60,
            "ammo_category": "shotgun-shell",
            "projectile_creation_distance": 1.125,
            "range": 20,
            "type": "projectile",
            "sound": [
                {
                    "volume": 0.5,
                    "filename": "/sound/pump-shotgun.ogg"
                }
            ]
        }
    },
    {
        "name": "combat-shotgun",
        "stack_size": 5,
        "order": "b[shotgun]-a[combat]",
        "subgroup": "gun",
        "flags": [
            "goes-to-main-inventory"
        ],
        "type": "gun",
        "icon": "/graphics/icons/combat-shotgun.png",
        "attack_parameters": {
            "movement_slow_down_factor": 0.5,
            "cooldown": 30,
            "range": 20,
            "ammo_category": "shotgun-shell",
            "projectile_creation_distance": 1.125,
            "type": "projectile",
            "damage_modifier": 1.2,
            "sound": [
                {
                    "volume": 0.5,
                    "filename": "/sound/pump-shotgun.ogg"
                }
            ]
        }
    },
    {
        "name": "railgun",
        "stack_size": 5,
        "order": "c[railgun]",
        "subgroup": "gun",
        "flags": [
            "goes-to-main-inventory",
            "hidden"
        ],
        "type": "gun",
        "icon": "/graphics/icons/railgun.png",
        "attack_parameters": {
            "movement_slow_down_factor": 0.6,
            "cooldown": 180,
            "ammo_category": "railgun",
            "projectile_creation_distance": 0.6,
            "range": 20,
            "type": "projectile",
            "sound": [
                {
                    "volume": 0.8,
                    "filename": "/sound/railgun.ogg"
                }
            ]
        }
    },
    {
        "name": "tank-cannon",
        "stack_size": 5,
        "order": "z[tank]-a[cannon]",
        "subgroup": "gun",
        "flags": [
            "goes-to-main-inventory",
            "hidden"
        ],
        "type": "gun",
        "icon": "/graphics/icons/tank-cannon.png",
        "attack_parameters": {
            "movement_slow_down_factor": 0,
            "cooldown": 90,
            "projectile_center": [
                -0.15625,
                -0.07812
            ],
            "ammo_category": "cannon-shell",
            "range": 25,
            "projectile_creation_distance": 1.6,
            "type": "projectile",
            "sound": [
                {
                    "volume": 1,
                    "filename": "/sound/fight/tank-cannon.ogg"
                }
            ]
        }
    },
    {
        "place_result": "iron-chest",
        "order": "a[items]-b[iron-chest]",
        "subgroup": "storage",
        "stack_size": 50,
        "flags": [
            "goes-to-quickbar"
        ],
        "type": "item",
        "icon": "/graphics/icons/iron-chest.png",
        "name": "iron-chest"
    },
    {
        "place_result": "steel-chest",
        "order": "a[items]-c[steel-chest]",
        "subgroup": "storage",
        "stack_size": 50,
        "flags": [
            "goes-to-quickbar"
        ],
        "type": "item",
        "icon": "/graphics/icons/steel-chest.png",
        "name": "steel-chest"
    },
    {
        "place_result": "fast-transport-belt",
        "order": "a[transport-belt]-b[fast-transport-belt]",
        "subgroup": "belt",
        "stack_size": 100,
        "flags": [
            "goes-to-quickbar"
        ],
        "type": "item",
        "icon": "/graphics/icons/fast-transport-belt.png",
        "name": "fast-transport-belt"
    },
    {
        "place_result": "express-transport-belt",
        "order": "a[transport-belt]-c[express-transport-belt]",
        "subgroup": "belt",
        "stack_size": 100,
        "flags": [
            "goes-to-quickbar"
        ],
        "type": "item",
        "icon": "/graphics/icons/express-transport-belt.png",
        "name": "express-transport-belt"
    },
    {
        "place_result": "long-handed-inserter",
        "order": "c[long-handed-inserter]",
        "subgroup": "inserter",
        "stack_size": 50,
        "flags": [
            "goes-to-quickbar"
        ],
        "type": "item",
        "icon": "/graphics/icons/long-handed-inserter.png",
        "name": "long-handed-inserter"
    },
    {
        "place_result": "fast-inserter",
        "order": "d[fast-inserter]",
        "subgroup": "inserter",
        "stack_size": 50,
        "flags": [
            "goes-to-quickbar"
        ],
        "type": "item",
        "icon": "/graphics/icons/fast-inserter.png",
        "name": "fast-inserter"
    },
    {
        "place_result": "filter-inserter",
        "order": "e[filter-inserter]",
        "subgroup": "inserter",
        "stack_size": 50,
        "flags": [
            "goes-to-quickbar"
        ],
        "type": "item",
        "icon": "/graphics/icons/filter-inserter.png",
        "name": "filter-inserter"
    },
    {
        "place_result": "stack-inserter",
        "order": "f[stack-inserter]",
        "subgroup": "inserter",
        "stack_size": 50,
        "flags": [
            "goes-to-quickbar"
        ],
        "type": "item",
        "icon": "/graphics/icons/stack-inserter.png",
        "name": "stack-inserter"
    },
    {
        "place_result": "stack-filter-inserter",
        "order": "g[stack-filter-inserter]",
        "subgroup": "inserter",
        "stack_size": 50,
        "flags": [
            "goes-to-quickbar"
        ],
        "type": "item",
        "icon": "/graphics/icons/stack-filter-inserter.png",
        "name": "stack-filter-inserter"
    },
    {
        "place_result": "assembling-machine-2",
        "order": "b[assembling-machine-2]",
        "subgroup": "production-machine",
        "stack_size": 50,
        "flags": [
            "goes-to-quickbar"
        ],
        "type": "item",
        "icon": "/graphics/icons/assembling-machine-2.png",
        "name": "assembling-machine-2"
    },
    {
        "place_result": "assembling-machine-3",
        "order": "c[assembling-machine-3]",
        "subgroup": "production-machine",
        "stack_size": 50,
        "flags": [
            "goes-to-quickbar"
        ],
        "type": "item",
        "icon": "/graphics/icons/assembling-machine-3.png",
        "name": "assembling-machine-3"
    },
    {
        "place_result": "solar-panel",
        "order": "d[solar-panel]-a[solar-panel]",
        "subgroup": "energy",
        "stack_size": 50,
        "flags": [
            "goes-to-quickbar"
        ],
        "type": "item",
        "icon": "/graphics/icons/solar-panel.png",
        "name": "solar-panel"
    },
    {
        "place_result": "locomotive",
        "order": "a[train-system]-f[diesel-locomotive]",
        "subgroup": "transport",
        "stack_size": 5,
        "flags": [
            "goes-to-quickbar"
        ],
        "type": "item-with-entity-data",
        "icon": "/graphics/icons/diesel-locomotive.png",
        "name": "locomotive"
    },
    {
        "place_result": "cargo-wagon",
        "order": "a[train-system]-g[cargo-wagon]",
        "subgroup": "transport",
        "stack_size": 5,
        "flags": [
            "goes-to-quickbar"
        ],
        "type": "item-with-entity-data",
        "icon": "/graphics/icons/cargo-wagon.png",
        "name": "cargo-wagon"
    },
    {
        "place_result": "fluid-wagon",
        "order": "a[train-system]-h[fluid-wagon]",
        "subgroup": "transport",
        "stack_size": 5,
        "flags": [
            "goes-to-quickbar"
        ],
        "type": "item-with-entity-data",
        "icon": "/graphics/icons/fluid-wagon.png",
        "name": "fluid-wagon"
    },
    {
        "name": "rail",
        "place_result": "straight-rail",
        "order": "a[train-system]-a[rail]",
        "stack_size": 100,
        "subgroup": "transport",
        "curved_rail": "curved-rail",
        "type": "rail-planner",
        "straight_rail": "straight-rail",
        "flags": [
            "goes-to-quickbar"
        ],
        "icon": "/graphics/icons/rail.png"
    },
    {
        "place_result": "player-port",
        "order": "z[not-used]",
        "subgroup": "defensive-structure",
        "stack_size": 50,
        "flags": [
            "goes-to-quickbar",
            "hidden"
        ],
        "type": "item",
        "icon": "/graphics/icons/player-port.png",
        "name": "player-port"
    },
    {
        "place_result": "gate",
        "order": "a[wall]-b[gate]",
        "subgroup": "defensive-structure",
        "stack_size": 50,
        "flags": [
            "goes-to-quickbar"
        ],
        "type": "item",
        "icon": "/graphics/icons/gate.png",
        "name": "gate"
    },
    {
        "place_result": "car",
        "order": "b[personal-transport]-a[car]",
        "subgroup": "transport",
        "stack_size": 1,
        "flags": [
            "goes-to-quickbar"
        ],
        "type": "item-with-entity-data",
        "icon": "/graphics/icons/car.png",
        "name": "car"
    },
    {
        "place_result": "tank",
        "order": "b[personal-transport]-b[tank]",
        "subgroup": "transport",
        "stack_size": 1,
        "flags": [
            "goes-to-quickbar"
        ],
        "type": "item-with-entity-data",
        "icon": "/graphics/icons/tank.png",
        "name": "tank"
    },
    {
        "durability": 1,
        "durability_description_key": "description.science-pack-remaining-amount",
        "stack_size": 200,
        "order": "a[science-pack-1]",
        "subgroup": "science-pack",
        "flags": [
            "goes-to-main-inventory"
        ],
        "type": "tool",
        "icon": "/graphics/icons/science-pack-1.png",
        "name": "science-pack-1"
    },
    {
        "durability": 1,
        "durability_description_key": "description.science-pack-remaining-amount",
        "stack_size": 200,
        "order": "b[science-pack-2]",
        "subgroup": "science-pack",
        "flags": [
            "goes-to-main-inventory"
        ],
        "type": "tool",
        "icon": "/graphics/icons/science-pack-2.png",
        "name": "science-pack-2"
    },
    {
        "durability": 1,
        "durability_description_key": "description.science-pack-remaining-amount",
        "stack_size": 200,
        "order": "c[science-pack-3]",
        "subgroup": "science-pack",
        "flags": [
            "goes-to-main-inventory"
        ],
        "type": "tool",
        "icon": "/graphics/icons/science-pack-3.png",
        "name": "science-pack-3"
    },
    {
        "durability": 1,
        "durability_description_key": "description.science-pack-remaining-amount",
        "stack_size": 200,
        "order": "d[military-science-pack]",
        "subgroup": "science-pack",
        "flags": [
            "goes-to-main-inventory"
        ],
        "type": "tool",
        "icon": "/graphics/icons/military-science-pack.png",
        "name": "military-science-pack"
    },
    {
        "durability": 1,
        "durability_description_key": "description.science-pack-remaining-amount",
        "stack_size": 200,
        "order": "e[production-science-pack]",
        "subgroup": "science-pack",
        "flags": [
            "goes-to-main-inventory"
        ],
        "type": "tool",
        "icon": "/graphics/icons/production-science-pack.png",
        "name": "production-science-pack"
    },
    {
        "durability": 1,
        "durability_description_key": "description.science-pack-remaining-amount",
        "stack_size": 200,
        "order": "f[high-tech-science-pack]",
        "subgroup": "science-pack",
        "flags": [
            "goes-to-main-inventory"
        ],
        "type": "tool",
        "icon": "/graphics/icons/high-tech-science-pack.png",
        "name": "high-tech-science-pack"
    },
    {
        "durability": 1,
        "durability_description_key": "description.science-pack-remaining-amount",
        "stack_size": 2000,
        "order": "g[space-science-pack]",
        "subgroup": "science-pack",
        "flags": [
            "goes-to-main-inventory"
        ],
        "type": "tool",
        "icon": "/graphics/icons/space-science-pack.png",
        "name": "space-science-pack"
    },
    {
        "place_result": "lab",
        "order": "g[lab]",
        "subgroup": "production-machine",
        "stack_size": 10,
        "flags": [
            "goes-to-quickbar"
        ],
        "type": "item",
        "icon": "/graphics/icons/lab.png",
        "name": "lab"
    },
    {
        "place_result": "train-stop",
        "order": "a[train-system]-c[train-stop]",
        "subgroup": "transport",
        "stack_size": 10,
        "flags": [
            "goes-to-quickbar"
        ],
        "type": "item",
        "icon": "/graphics/icons/train-stop.png",
        "name": "train-stop"
    },
    {
        "place_result": "rail-signal",
        "order": "a[train-system]-d[rail-signal]",
        "subgroup": "transport",
        "stack_size": 50,
        "flags": [
            "goes-to-quickbar"
        ],
        "type": "item",
        "icon": "/graphics/icons/rail-signal.png",
        "name": "rail-signal"
    },
    {
        "place_result": "rail-chain-signal",
        "order": "a[train-system]-e[rail-signal-chain]",
        "subgroup": "transport",
        "stack_size": 50,
        "flags": [
            "goes-to-quickbar"
        ],
        "type": "item",
        "icon": "/graphics/icons/rail-chain-signal.png",
        "name": "rail-chain-signal"
    },
    {
        "stack_size": 100,
        "order": "d[steel-plate]",
        "subgroup": "raw-material",
        "flags": [
            "goes-to-main-inventory"
        ],
        "type": "item",
        "name": "steel-plate",
        "icon": "/graphics/icons/steel-plate.png"
    },
    {
        "place_result": "underground-belt",
        "order": "b[underground-belt]-a[underground-belt]",
        "subgroup": "belt",
        "stack_size": 50,
        "flags": [
            "goes-to-quickbar"
        ],
        "type": "item",
        "icon": "/graphics/icons/underground-belt.png",
        "name": "underground-belt"
    },
    {
        "place_result": "fast-underground-belt",
        "order": "b[underground-belt]-b[fast-underground-belt]",
        "subgroup": "belt",
        "stack_size": 50,
        "flags": [
            "goes-to-quickbar"
        ],
        "type": "item",
        "icon": "/graphics/icons/fast-underground-belt.png",
        "name": "fast-underground-belt"
    },
    {
        "place_result": "express-underground-belt",
        "order": "b[underground-belt]-c[express-underground-belt]",
        "subgroup": "belt",
        "stack_size": 50,
        "flags": [
            "goes-to-quickbar"
        ],
        "type": "item",
        "icon": "/graphics/icons/express-underground-belt.png",
        "name": "express-underground-belt"
    },
    {
        "place_result": "splitter",
        "order": "c[splitter]-a[splitter]",
        "subgroup": "belt",
        "stack_size": 50,
        "flags": [
            "goes-to-quickbar"
        ],
        "type": "item",
        "icon": "/graphics/icons/splitter.png",
        "name": "splitter"
    },
    {
        "place_result": "fast-splitter",
        "order": "c[splitter]-b[fast-splitter]",
        "subgroup": "belt",
        "stack_size": 50,
        "flags": [
            "goes-to-quickbar"
        ],
        "type": "item",
        "icon": "/graphics/icons/fast-splitter.png",
        "name": "fast-splitter"
    },
    {
        "place_result": "express-splitter",
        "order": "c[splitter]-c[express-splitter]",
        "subgroup": "belt",
        "stack_size": 50,
        "flags": [
            "goes-to-quickbar"
        ],
        "type": "item",
        "icon": "/graphics/icons/express-splitter.png",
        "name": "express-splitter"
    },
    {
        "place_result": "loader",
        "order": "d[loader]-a[basic-loader]",
        "subgroup": "belt",
        "stack_size": 50,
        "flags": [
            "goes-to-quickbar",
            "hidden"
        ],
        "type": "item",
        "icon": "/graphics/icons/loader.png",
        "name": "loader"
    },
    {
        "place_result": "fast-loader",
        "order": "d[loader]-b[fast-loader]",
        "subgroup": "belt",
        "stack_size": 50,
        "flags": [
            "goes-to-quickbar",
            "hidden"
        ],
        "type": "item",
        "icon": "/graphics/icons/fast-loader.png",
        "name": "fast-loader"
    },
    {
        "place_result": "express-loader",
        "order": "d[loader]-c[express-loader]",
        "subgroup": "belt",
        "stack_size": 50,
        "flags": [
            "goes-to-quickbar",
            "hidden"
        ],
        "type": "item",
        "icon": "/graphics/icons/express-loader.png",
        "name": "express-loader"
    },
    {
        "stack_size": 200,
        "order": "f[advanced-circuit]",
        "subgroup": "intermediate-product",
        "flags": [
            "goes-to-main-inventory"
        ],
        "type": "item",
        "name": "advanced-circuit",
        "icon": "/graphics/icons/advanced-circuit.png"
    },
    {
        "stack_size": 100,
        "order": "g[processing-unit]",
        "subgroup": "intermediate-product",
        "flags": [
            "goes-to-main-inventory"
        ],
        "type": "item",
        "name": "processing-unit",
        "icon": "/graphics/icons/processing-unit.png"
    },
    {
        "place_result": "logistic-robot",
        "order": "a[robot]-a[logistic-robot]",
        "subgroup": "logistic-network",
        "stack_size": 50,
        "flags": [
            "goes-to-quickbar"
        ],
        "type": "item",
        "icon": "/graphics/icons/logistic-robot.png",
        "name": "logistic-robot"
    },
    {
        "place_result": "construction-robot",
        "order": "a[robot]-b[construction-robot]",
        "subgroup": "logistic-network",
        "stack_size": 50,
        "flags": [
            "goes-to-main-inventory"
        ],
        "type": "item",
        "icon": "/graphics/icons/construction-robot.png",
        "name": "construction-robot"
    },
    {
        "place_result": "logistic-chest-passive-provider",
        "order": "b[storage]-c[logistic-chest-passive-provider]",
        "subgroup": "logistic-network",
        "stack_size": 50,
        "flags": [
            "goes-to-quickbar"
        ],
        "type": "item",
        "icon": "/graphics/icons/logistic-chest-passive-provider.png",
        "name": "logistic-chest-passive-provider"
    },
    {
        "place_result": "logistic-chest-active-provider",
        "order": "b[storage]-c[logistic-chest-active-provider]",
        "subgroup": "logistic-network",
        "stack_size": 50,
        "flags": [
            "goes-to-quickbar"
        ],
        "type": "item",
        "icon": "/graphics/icons/logistic-chest-active-provider.png",
        "name": "logistic-chest-active-provider"
    },
    {
        "place_result": "logistic-chest-storage",
        "order": "b[storage]-c[logistic-chest-storage]",
        "subgroup": "logistic-network",
        "stack_size": 50,
        "flags": [
            "goes-to-quickbar"
        ],
        "type": "item",
        "icon": "/graphics/icons/logistic-chest-storage.png",
        "name": "logistic-chest-storage"
    },
    {
        "place_result": "logistic-chest-requester",
        "order": "b[storage]-c[logistic-chest-requester]",
        "subgroup": "logistic-network",
        "stack_size": 50,
        "flags": [
            "goes-to-quickbar"
        ],
        "type": "item",
        "icon": "/graphics/icons/logistic-chest-requester.png",
        "name": "logistic-chest-requester"
    },
    {
        "place_result": "rocket-silo",
        "order": "e[rocket-silo]",
        "subgroup": "defensive-structure",
        "stack_size": 1,
        "flags": [
            "goes-to-quickbar"
        ],
        "type": "item",
        "icon": "/graphics/icons/rocket-silo.png",
        "name": "rocket-silo"
    },
    {
        "place_result": "roboport",
        "order": "c[signal]-a[roboport]",
        "subgroup": "logistic-network",
        "stack_size": 5,
        "flags": [
            "goes-to-quickbar"
        ],
        "type": "item",
        "icon": "/graphics/icons/roboport.png",
        "name": "roboport"
    },
    {
        "stack_size": 100000,
        "order": "y",
        "subgroup": "science-pack",
        "flags": [
            "goes-to-quickbar",
            "hidden"
        ],
        "type": "item",
        "name": "coin",
        "icon": "/graphics/icons/coin.png"
    },
    {
        "place_result": "big-electric-pole",
        "order": "a[energy]-c[big-electric-pole]",
        "subgroup": "energy-pipe-distribution",
        "stack_size": 50,
        "flags": [
            "goes-to-quickbar"
        ],
        "type": "item",
        "icon": "/graphics/icons/big-electric-pole.png",
        "name": "big-electric-pole"
    },
    {
        "place_result": "medium-electric-pole",
        "order": "a[energy]-b[medium-electric-pole]",
        "subgroup": "energy-pipe-distribution",
        "stack_size": 50,
        "flags": [
            "goes-to-quickbar"
        ],
        "type": "item",
        "icon": "/graphics/icons/medium-electric-pole.png",
        "name": "medium-electric-pole"
    },
    {
        "place_result": "substation",
        "order": "a[energy]-d[substation]",
        "subgroup": "energy-pipe-distribution",
        "stack_size": 50,
        "flags": [
            "goes-to-quickbar"
        ],
        "type": "item",
        "icon": "/graphics/icons/substation.png",
        "name": "substation"
    },
    {
        "place_result": "accumulator",
        "order": "e[accumulator]-a[accumulator]",
        "subgroup": "energy",
        "stack_size": 50,
        "flags": [
            "goes-to-quickbar"
        ],
        "type": "item",
        "icon": "/graphics/icons/accumulator.png",
        "name": "accumulator"
    },
    {
        "place_result": "steel-furnace",
        "order": "b[steel-furnace]",
        "subgroup": "smelting-machine",
        "stack_size": 50,
        "flags": [
            "goes-to-quickbar"
        ],
        "type": "item",
        "icon": "/graphics/icons/steel-furnace.png",
        "name": "steel-furnace"
    },
    {
        "place_result": "electric-furnace",
        "order": "c[electric-furnace]",
        "subgroup": "smelting-machine",
        "stack_size": 50,
        "flags": [
            "goes-to-quickbar"
        ],
        "type": "item",
        "icon": "/graphics/icons/electric-furnace.png",
        "name": "electric-furnace"
    },
    {
        "place_result": "beacon",
        "order": "a[beacon]",
        "subgroup": "module",
        "stack_size": 10,
        "flags": [
            "goes-to-quickbar"
        ],
        "type": "item",
        "icon": "/graphics/icons/beacon.png",
        "name": "beacon"
    },
    {
        "place_result": "storage-tank",
        "order": "b[fluid]-a[storage-tank]",
        "subgroup": "storage",
        "stack_size": 50,
        "flags": [
            "goes-to-quickbar"
        ],
        "type": "item",
        "icon": "/graphics/icons/storage-tank.png",
        "name": "storage-tank"
    },
    {
        "place_result": "pump",
        "order": "b[pipe]-c[pump]",
        "subgroup": "energy-pipe-distribution",
        "stack_size": 50,
        "flags": [
            "goes-to-quickbar"
        ],
        "type": "item",
        "icon": "/graphics/icons/pump.png",
        "name": "pump"
    },
    {
        "flags": [
            "goes-to-quickbar"
        ],
        "draw_label_for_cursor_render": true,
        "stackable": false,
        "name": "blueprint",
        "selection_cursor_box_type": "copy",
        "type": "blueprint",
        "stack_size": 1,
        "alt_selection_cursor_box_type": "copy",
        "order": "c[automated-construction]-a[blueprint]",
        "selection_color": {
            "g": 1,
            "r": 0,
            "b": 0
        },
        "alt_selection_color": {
            "g": 1,
            "r": 0,
            "b": 0
        },
        "alt_selection_mode": [
            "blueprint"
        ],
        "item_to_clear": "electronic-circuit",
        "icon": "/graphics/icons/blueprint.png",
        "subgroup": "tool",
        "selection_mode": [
            "blueprint"
        ]
    },
    {
        "flags": [
            "goes-to-quickbar"
        ],
        "name": "deconstruction-planner",
        "tile_filter_count": 30,
        "selection_cursor_box_type": "not-allowed",
        "type": "deconstruction-item",
        "stack_size": 1,
        "alt_selection_cursor_box_type": "not-allowed",
        "order": "c[automated-construction]-b[deconstruction-planner]",
        "alt_selection_color": {
            "g": 0,
            "r": 0,
            "b": 1
        },
        "selection_color": {
            "g": 0,
            "r": 1,
            "b": 0
        },
        "entity_filter_count": 30,
        "alt_selection_mode": [
            "cancel-deconstruct"
        ],
        "icon": "/graphics/icons/deconstruction-planner.png",
        "subgroup": "tool",
        "selection_mode": [
            "deconstruct"
        ]
    },
    {
        "stack_size": 1,
        "order": "c[automated-construction]-c[blueprint-book]",
        "subgroup": "tool",
        "inventory_size": 1000,
        "flags": [
            "goes-to-quickbar"
        ],
        "type": "blueprint-book",
        "icon": "/graphics/icons/blueprint-book.png",
        "name": "blueprint-book"
    },
    {
        "place_result": "pumpjack",
        "order": "b[fluids]-b[pumpjack]",
        "subgroup": "extraction-machine",
        "stack_size": 20,
        "flags": [
            "goes-to-quickbar"
        ],
        "type": "item",
        "icon": "/graphics/icons/pumpjack.png",
        "name": "pumpjack"
    },
    {
        "place_result": "oil-refinery",
        "order": "d[refinery]",
        "subgroup": "production-machine",
        "stack_size": 10,
        "flags": [
            "goes-to-quickbar"
        ],
        "type": "item",
        "icon": "/graphics/icons/oil-refinery.png",
        "name": "oil-refinery"
    },
    {
        "place_result": "chemical-plant",
        "order": "e[chemical-plant]",
        "subgroup": "production-machine",
        "stack_size": 10,
        "flags": [
            "goes-to-quickbar"
        ],
        "type": "item",
        "icon": "/graphics/icons/chemical-plant.png",
        "name": "chemical-plant"
    },
    {
        "stack_size": 50,
        "order": "f[sulfur]",
        "subgroup": "raw-material",
        "flags": [
            "goes-to-main-inventory"
        ],
        "type": "item",
        "name": "sulfur",
        "icon": "/graphics/icons/sulfur.png"
    },
    {
        "stack_size": 10,
        "order": "d[empty-barrel]",
        "subgroup": "intermediate-product",
        "flags": [
            "goes-to-main-inventory"
        ],
        "type": "item",
        "name": "empty-barrel",
        "icon": "/graphics/icons/fluid/barreling/empty-barrel.png"
    },
    {
        "name": "solid-fuel",
        "stack_size": 50,
        "order": "c[solid-fuel]",
        "subgroup": "raw-resource",
        "fuel_acceleration_multiplier": 1.2,
        "fuel_top_speed_multiplier": 1.05,
        "fuel_value": "25MJ",
        "flags": [
            "goes-to-main-inventory"
        ],
        "type": "item",
        "fuel_category": "chemical",
        "icon": "/graphics/icons/solid-fuel.png"
    },
    {
        "stack_size": 100,
        "order": "g[plastic-bar]",
        "subgroup": "raw-material",
        "flags": [
            "goes-to-main-inventory"
        ],
        "type": "item",
        "name": "plastic-bar",
        "icon": "/graphics/icons/plastic-bar.png"
    },
    {
        "stack_size": 50,
        "order": "h[engine-unit]",
        "subgroup": "intermediate-product",
        "flags": [
            "goes-to-main-inventory"
        ],
        "type": "item",
        "name": "engine-unit",
        "icon": "/graphics/icons/engine-unit.png"
    },
    {
        "stack_size": 50,
        "order": "i[electric-engine-unit]",
        "subgroup": "intermediate-product",
        "flags": [
            "goes-to-main-inventory"
        ],
        "type": "item",
        "name": "electric-engine-unit",
        "icon": "/graphics/icons/electric-engine-unit.png"
    },
    {
        "stack_size": 50,
        "order": "j[explosives]",
        "subgroup": "intermediate-product",
        "flags": [
            "goes-to-main-inventory"
        ],
        "type": "item",
        "name": "explosives",
        "icon": "/graphics/icons/explosives.png"
    },
    {
        "stack_size": 200,
        "order": "j[battery]",
        "subgroup": "intermediate-product",
        "flags": [
            "goes-to-main-inventory"
        ],
        "type": "item",
        "name": "battery",
        "icon": "/graphics/icons/battery.png"
    },
    {
        "stack_size": 50,
        "order": "l[flying-robot-frame]",
        "subgroup": "intermediate-product",
        "flags": [
            "goes-to-main-inventory"
        ],
        "type": "item",
        "name": "flying-robot-frame",
        "icon": "/graphics/icons/flying-robot-frame.png"
    },
    {
        "stack_size": 50,
        "order": "c[combinators]-a[arithmetic-combinator]",
        "subgroup": "circuit-network",
        "place_result": "arithmetic-combinator",
        "flags": [
            "goes-to-quickbar"
        ],
        "type": "item",
        "icon": "/graphics/icons/arithmetic-combinator.png",
        "name": "arithmetic-combinator"
    },
    {
        "stack_size": 50,
        "order": "c[combinators]-b[decider-combinator]",
        "subgroup": "circuit-network",
        "place_result": "decider-combinator",
        "flags": [
            "goes-to-quickbar"
        ],
        "type": "item",
        "icon": "/graphics/icons/decider-combinator.png",
        "name": "decider-combinator"
    },
    {
        "stack_size": 50,
        "order": "c[combinators]-c[constant-combinator]",
        "subgroup": "circuit-network",
        "place_result": "constant-combinator",
        "flags": [
            "goes-to-quickbar"
        ],
        "type": "item",
        "icon": "/graphics/icons/constant-combinator.png",
        "name": "constant-combinator"
    },
    {
        "stack_size": 50,
        "order": "d[other]-a[power-switch]",
        "subgroup": "circuit-network",
        "place_result": "power-switch",
        "flags": [
            "goes-to-quickbar"
        ],
        "type": "item",
        "icon": "/graphics/icons/power-switch.png",
        "name": "power-switch"
    },
    {
        "place_result": "programmable-speaker",
        "order": "d[other]-b[programmable-speaker]",
        "subgroup": "circuit-network",
        "stack_size": 50,
        "flags": [
            "goes-to-quickbar"
        ],
        "type": "item",
        "icon": "/graphics/icons/programmable-speaker.png",
        "name": "programmable-speaker"
    },
    {
        "stack_size": 10,
        "order": "m[rocket-structure]",
        "subgroup": "intermediate-product",
        "flags": [
            "goes-to-main-inventory"
        ],
        "type": "item",
        "name": "low-density-structure",
        "icon": "/graphics/icons/rocket-structure.png"
    },
    {
        "name": "rocket-fuel",
        "stack_size": 10,
        "order": "n[rocket-fuel]",
        "subgroup": "intermediate-product",
        "fuel_acceleration_multiplier": 1.8,
        "fuel_top_speed_multiplier": 1.15,
        "fuel_value": "225MJ",
        "flags": [
            "goes-to-main-inventory"
        ],
        "type": "item",
        "fuel_category": "chemical",
        "icon": "/graphics/icons/rocket-fuel.png"
    },
    {
        "stack_size": 10,
        "order": "o[rocket-control-unit]",
        "subgroup": "intermediate-product",
        "flags": [
            "goes-to-main-inventory"
        ],
        "type": "item",
        "name": "rocket-control-unit",
        "icon": "/graphics/icons/rocket-control-unit.png"
    },
    {
        "stack_size": 5,
        "order": "p[rocket-part]",
        "subgroup": "intermediate-product",
        "flags": [
            "goes-to-main-inventory",
            "hidden"
        ],
        "type": "item",
        "name": "rocket-part",
        "icon": "/graphics/icons/rocket-part.png"
    },
    {
        "stack_size": 1,
        "order": "q[satellite]",
        "subgroup": "intermediate-product",
        "flags": [
            "goes-to-main-inventory"
        ],
        "type": "item",
        "name": "satellite",
        "icon": "/graphics/icons/satellite.png"
    },
    {
        "stack_size": 100,
        "order": "b[concrete]-a[plain]",
        "place_as_tile": {
            "condition": [
                "water-tile"
            ],
            "result": "concrete",
            "condition_size": 4
        },
        "subgroup": "terrain",
        "flags": [
            "goes-to-main-inventory"
        ],
        "type": "item",
        "icon": "/graphics/icons/concrete.png",
        "name": "concrete"
    },
    {
        "stack_size": 100,
        "order": "b[concrete]-b[hazard]",
        "place_as_tile": {
            "condition": [
                "water-tile"
            ],
            "result": "hazard-concrete-left",
            "condition_size": 4
        },
        "subgroup": "terrain",
        "flags": [
            "goes-to-main-inventory"
        ],
        "type": "item",
        "icon": "/graphics/icons/hazard-concrete.png",
        "name": "hazard-concrete"
    },
    {
        "stack_size": 100,
        "order": "c[landfill]-a[dirt]",
        "place_as_tile": {
            "condition": [
                "ground-tile"
            ],
            "result": "grass",
            "condition_size": 1
        },
        "subgroup": "terrain",
        "flags": [
            "goes-to-main-inventory"
        ],
        "type": "item",
        "icon": "/graphics/icons/landfill.png",
        "name": "landfill"
    },
    {
        "flags": [
            "goes-to-quickbar",
            "hidden"
        ],
        "localised_name": [
            "item-name.blueprint"
        ],
        "stackable": false,
        "name": "dummy-selection-tool",
        "selection_cursor_box_type": "copy",
        "type": "selection-tool",
        "stack_size": 1,
        "alt_selection_cursor_box_type": "copy",
        "order": "c[automated-construction]-a[blueprint]",
        "alt_selection_color": {
            "g": 1,
            "r": 0,
            "b": 0
        },
        "selection_color": {
            "g": 1,
            "r": 0,
            "b": 0
        },
        "alt_selection_mode": [
            "blueprint"
        ],
        "icon": "/graphics/icons/blueprint.png",
        "subgroup": "tool",
        "selection_mode": [
            "blueprint"
        ]
    },
    {
        "place_result": "electric-energy-interface",
        "order": "e[electric-energy-interface]-b[electric-energy-interface]",
        "subgroup": "energy",
        "stack_size": 50,
        "flags": [
            "goes-to-quickbar",
            "hidden"
        ],
        "type": "item",
        "name": "electric-energy-interface",
        "icons": [
            {
                "icon": "/graphics/icons/accumulator.png",
                "tint": {
                    "r": 1,
                    "b": 1,
                    "g": 0.8,
                    "a": 1
                }
            }
        ]
    },
    {
        "stack_size": 50,
        "order": "g[uranium-ore]",
        "subgroup": "raw-resource",
        "flags": [
            "goes-to-main-inventory"
        ],
        "type": "item",
        "name": "uranium-ore",
        "icon": "/graphics/icons/uranium-ore.png"
    },
    {
        "place_result": "nuclear-reactor",
        "order": "f[nuclear-energy]-a[reactor]",
        "subgroup": "energy",
        "stack_size": 50,
        "flags": [
            "goes-to-main-inventory"
        ],
        "type": "item",
        "icon": "/graphics/icons/nuclear-reactor.png",
        "name": "nuclear-reactor"
    },
    {
        "stack_size": 100,
        "order": "g[uranium-235]",
        "subgroup": "intermediate-product",
        "flags": [
            "goes-to-main-inventory"
        ],
        "type": "item",
        "name": "uranium-235",
        "icon": "/graphics/icons/uranium-235.png"
    },
    {
        "stack_size": 100,
        "order": "g[uranium-238]",
        "subgroup": "intermediate-product",
        "flags": [
            "goes-to-main-inventory"
        ],
        "type": "item",
        "name": "uranium-238",
        "icon": "/graphics/icons/uranium-238.png"
    },
    {
        "place_result": "centrifuge",
        "order": "g[centrifuge]",
        "subgroup": "production-machine",
        "stack_size": 50,
        "flags": [
            "goes-to-main-inventory"
        ],
        "type": "item",
        "icon": "/graphics/icons/centrifuge.png",
        "name": "centrifuge"
    },
    {
        "icon": "/graphics/icons/uranium-fuel-cell.png",
        "name": "uranium-fuel-cell",
        "stack_size": 50,
        "order": "r[uranium-processing]-a[uranium-fuel-cell]",
        "subgroup": "intermediate-product",
        "fuel_value": "8GJ",
        "type": "item",
        "flags": [
            "goes-to-main-inventory"
        ],
        "fuel_category": "nuclear",
        "burnt_result": "used-up-uranium-fuel-cell"
    },
    {
        "stack_size": 50,
        "order": "i[used-up-uranium-fuel-cell]",
        "subgroup": "intermediate-product",
        "flags": [
            "goes-to-main-inventory"
        ],
        "type": "item",
        "name": "used-up-uranium-fuel-cell",
        "icon": "/graphics/icons/used-up-uranium-fuel-cell.png"
    },
    {
        "place_result": "heat-exchanger",
        "order": "f[nuclear-energy]-b[heat-exchanger]",
        "subgroup": "energy",
        "stack_size": 50,
        "flags": [
            "goes-to-quickbar"
        ],
        "type": "item",
        "icon": "/graphics/icons/heat-boiler.png",
        "name": "heat-exchanger"
    },
    {
        "place_result": "steam-turbine",
        "order": "b[steam-power]-c[steam-turbine]",
        "subgroup": "energy",
        "stack_size": 10,
        "flags": [
            "goes-to-quickbar"
        ],
        "type": "item",
        "icon": "/graphics/icons/steam-turbine.png",
        "name": "steam-turbine"
    },
    {
        "place_result": "heat-pipe",
        "order": "f[nuclear-energy]-c[heat-pipe]",
        "subgroup": "energy",
        "stack_size": 50,
        "flags": [
            "goes-to-quickbar"
        ],
        "type": "item",
        "icon": "/graphics/icons/heat-pipe.png",
        "name": "heat-pipe"
    },
    {
        "place_result": "simple-entity-with-force",
        "order": "s[simple-entity-with-force]-f[simple-entity-with-force]",
        "subgroup": "storage",
        "stack_size": 50,
        "flags": [
            "goes-to-quickbar",
            "hidden"
        ],
        "type": "item",
        "icon": "/graphics/icons/steel-chest.png",
        "name": "simple-entity-with-force"
    },
    {
        "place_result": "simple-entity-with-owner",
        "order": "s[simple-entity-with-owner]-o[simple-entity-with-owner]",
        "subgroup": "storage",
        "stack_size": 50,
        "flags": [
            "goes-to-quickbar",
            "hidden"
        ],
        "type": "item",
        "icon": "/graphics/icons/wooden-chest.png",
        "name": "simple-entity-with-owner"
    },
    {
        "stack_size": 1,
        "order": "s[item-with-tags]-o[item-with-tags]",
        "subgroup": "storage",
        "flags": [
            "goes-to-quickbar",
            "hidden"
        ],
        "type": "item-with-tags",
        "name": "item-with-tags",
        "icon": "/graphics/icons/wooden-chest.png"
    },
    {
        "durability": 5000,
        "action": {
            "action_delivery": {
                "target_effects": {
                    "type": "damage",
                    "damage": {
                        "amount": 8,
                        "type": "physical"
                    }
                },
                "type": "instant"
            },
            "type": "direct"
        },
        "stack_size": 20,
        "order": "a[mining]-b[steel-axe]",
        "subgroup": "tool",
        "speed": 4,
        "type": "mining-tool",
        "flags": [
            "goes-to-main-inventory"
        ],
        "icon": "/graphics/icons/steel-axe.png",
        "name": "steel-axe"
    },
    {
        "effect": {
            "consumption": {
                "bonus": 0.5
            },
            "speed": {
                "bonus": 0.2
            }
        },
        "category": "speed",
        "stack_size": 50,
        "order": "a[speed]-a[speed-module-1]",
        "subgroup": "module",
        "default_request_amount": 10,
        "tier": 1,
        "type": "module",
        "flags": [
            "goes-to-main-inventory"
        ],
        "icon": "/graphics/icons/speed-module.png",
        "name": "speed-module"
    },
    {
        "effect": {
            "consumption": {
                "bonus": 0.6
            },
            "speed": {
                "bonus": 0.3
            }
        },
        "category": "speed",
        "stack_size": 50,
        "order": "a[speed]-b[speed-module-2]",
        "subgroup": "module",
        "default_request_amount": 10,
        "tier": 2,
        "type": "module",
        "flags": [
            "goes-to-main-inventory"
        ],
        "icon": "/graphics/icons/speed-module-2.png",
        "name": "speed-module-2"
    },
    {
        "effect": {
            "consumption": {
                "bonus": 0.7
            },
            "speed": {
                "bonus": 0.5
            }
        },
        "category": "speed",
        "stack_size": 50,
        "order": "a[speed]-c[speed-module-3]",
        "subgroup": "module",
        "default_request_amount": 10,
        "tier": 3,
        "type": "module",
        "flags": [
            "goes-to-main-inventory"
        ],
        "icon": "/graphics/icons/speed-module-3.png",
        "name": "speed-module-3"
    },
    {
        "effect": {
            "consumption": {
                "bonus": -0.3
            }
        },
        "category": "effectivity",
        "stack_size": 50,
        "order": "c[effectivity]-a[effectivity-module-1]",
        "subgroup": "module",
        "default_request_amount": 10,
        "tier": 1,
        "type": "module",
        "flags": [
            "goes-to-main-inventory"
        ],
        "icon": "/graphics/icons/effectivity-module.png",
        "name": "effectivity-module"
    },
    {
        "effect": {
            "consumption": {
                "bonus": -0.4
            }
        },
        "category": "effectivity",
        "stack_size": 50,
        "order": "c[effectivity]-b[effectivity-module-2]",
        "subgroup": "module",
        "default_request_amount": 10,
        "tier": 2,
        "type": "module",
        "flags": [
            "goes-to-main-inventory"
        ],
        "icon": "/graphics/icons/effectivity-module-2.png",
        "name": "effectivity-module-2"
    },
    {
        "effect": {
            "consumption": {
                "bonus": -0.5
            }
        },
        "category": "effectivity",
        "stack_size": 50,
        "order": "c[effectivity]-c[effectivity-module-3]",
        "subgroup": "module",
        "default_request_amount": 10,
        "tier": 3,
        "type": "module",
        "flags": [
            "goes-to-main-inventory"
        ],
        "icon": "/graphics/icons/effectivity-module-3.png",
        "name": "effectivity-module-3"
    },
    {
        "place_result": "laser-turret",
        "order": "b[turret]-b[laser-turret]",
        "subgroup": "defensive-structure",
        "stack_size": 50,
        "flags": [
            "goes-to-quickbar"
        ],
        "type": "item",
        "icon": "/graphics/icons/laser-turret.png",
        "name": "laser-turret"
    },
    {
        "place_result": "flamethrower-turret",
        "order": "b[turret]-c[flamethrower-turret]",
        "subgroup": "defensive-structure",
        "stack_size": 50,
        "flags": [
            "goes-to-quickbar"
        ],
        "type": "item",
        "icon": "/graphics/icons/flamethrower-turret.png",
        "name": "flamethrower-turret"
    },{"name":"productivity-module","category":"productivity","limitation_message_key":"production-module-usable-only-on-intermediates","tier":1,"stack_size":50,"type":"module","order":"c[productivity]-a[productivity-module-1]","icon":"\/graphics\/icons\/productivity-module.png","default_request_amount":10,"effect":{"consumption":{"bonus":0.4},"speed":{"bonus":-0.15},"productivity":{"bonus":0.04},"pollution":{"bonus":0.05}},"subgroup":"module","flags":["goes-to-main-inventory"]},{"name":"productivity-module-2","category":"productivity","limitation_message_key":"production-module-usable-only-on-intermediates","tier":2,"stack_size":50,"type":"module","order":"c[productivity]-b[productivity-module-2]","icon":"\/graphics\/icons\/productivity-module-2.png","default_request_amount":10,"effect":{"consumption":{"bonus":0.6},"speed":{"bonus":-0.15},"productivity":{"bonus":0.06},"pollution":{"bonus":0.075}},"subgroup":"module","flags":["goes-to-main-inventory"]},{"name":"productivity-module-3","category":"productivity","limitation_message_key":"production-module-usable-only-on-intermediates","tier":3,"stack_size":50,"type":"module","order":"c[productivity]-c[productivity-module-3]","icon":"\/graphics\/icons\/productivity-module-3.png","default_request_amount":10,"effect":{"consumption":{"bonus":0.8},"speed":{"bonus":-0.15},"productivity":{"bonus":0.1},"pollution":{"bonus":0.1}},"subgroup":"module","flags":["goes-to-main-inventory"]}
]