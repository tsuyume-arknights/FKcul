/*
  example 
  {
    name: "オペレーター",
    id: "operator",
    atk: 1000,
    tags: [],
    skill: {
      name: "S3 スキル3",
      hitCount: {
        min: 1,
        max: 1,
        default: 2
      },
      hits: [
        {
          damage_type: "physical",
          multiplier: 100
        },
      ],
      atk_add: 0,
    },
    talents: [],
    potential: [],
    modules: {},
  }
 
tags
  melee: 近距離
  ranged: 遠距離
  vanguard: 先鋒
  guard: 前衛
  defender: 重装
  sniper: 狙撃
  caster: 術師
  medic: 医療
  supporter: 補助
  specialist: 特殊
  bullet: 弾丸スキル
 
*/
const operators = [

  // ブレイズ
  {
    name: "ブレイズ",
    id: "blaze",
    atk: 825,
    tags: [
      "melee",
      "guard",
    ],
    skill: {
      name: "S3 ボイリングバースト",
      hits: [
        {
          damage_type: "physical",
          multiplier: 400
        },
      ]
    },
    talents: [
      {
        id: "tal1",
        effects: [
          {
            type: "atk_add",
            value: 0,
          },
        ]
      }
    ],
    potential: [
      {
        id: 4,
        note: "攻撃力上昇",
        effects: [
          {
            type: "atk_flat",
            value: 28,
          },
        ]
      }
    ],
    modules: {
      X: {
        "1": {
          effects: [
            {
              type: "atk_flat",
              value: 50
            }
          ]
        },
        "2": {
          effects: [
            {
              type: "atk_flat",
              value: 70
            }
          ]
        },
        "3": {
          effects: [
            {
              type: "atk_flat",
              value: 86
            }
          ]
        }
      },
      Y: {
        "1": {
          effects: [
            {
              type: "atk_flat",
              value: 40
            }
          ]
        },
        "2": {
          effects: [
            {
              type: "atk_flat",
              value: 50
            }
          ]
        },
        "3": {
          effects: [
            {
              type: "atk_flat",
              value: 66
            }
          ]
        }
      }
    },
  },
  // チューバイ
  {
    name: "チューバイ",
    id: "qiubai",
    atk: 768,
    tags: [
      "melee",
      "guard",
    ],
    skill: {
      name: "S2 承影",
      hits: [
        {
          damage_type: "physical",
          multiplier: 300
        },
        {
          damage_type: "arts",
          multiplier: 10,
          module: {
            name: "X",
            minLevel: 1
          }
        },
      ],
      atk_add: 140,
    },
    talents: [],
    potential: [
      {
        id: 4,
        note: "攻撃力上昇",
        effects: [
          {
            type: "atk_flat",
            value: 26,
          },
        ]
      },
    ],
    modules: {
      X: {
        "1": {
          effects: [
            {
              type: "atk_flat",
              value: 35
            }
          ]
        },
        "2": {
          effects: [
            {
              type: "atk_flat",
              value: 48
            },
          ]
        },
        "3": {
          effects: [
            {
              type: "atk_flat",
              value: 55
            },
          ]
        }
      },
    },
  },
  // ウルピアヌス
  {
    name: "ウルピアヌス(通常/真銀斬)",
    id: "ulpianus",
    atk: 1649,
    tags: [
      "melee",
      "guard",
    ],
    skill: {
      name: "S3 拓くべき活路",
      hits: [
        {
          id: "normal",
          damage_type: "physical",
          multiplier: 160
        },
        {
          id: "silverash_s2",
          damage_type: "physical",
          multiplier: 380
        },
      ],
      atk_add: 260,
    },
    talents: [
      {
        id: "tal1",
        name: "素質名",
        effects: []
      }
    ],
    potential: [
      {
        id: 4,
        note: "攻撃力上昇",
        effects: [
          {
            type: "atk_flat",
            value: 45,
          },
        ]
      },
      {
        id: 5,
        note: "素質強化",
        effects: []
      }
    ],
    modules: {
      X: {
        "1": {
          effects: [
            {
              type: "atk_flat",
              value: 84
            }
          ]
        },
        "2": {
          effects: [
            {
              type: "atk_flat",
              value: 107
            },
          ]
        },
        "3": {
          effects: [
            {
              type: "atk_flat",
              value: 120
            },
          ]
        }
      },
    },
  },
  // 司霆レイズ
  {
    name: "司霆レイズ",
    id: "leizi_the_thunderbringer",
    atk: 390,
    tags: [
      "melee",
      "guard",
    ],
    skill: {
      name: "S1 浩気不滅",
      hits: [
        {
          id: "normal",
          damage_type: "physical",
          multiplier: 355
        },
        {
          id: "thunder",
          damage_type: "arts",
          multiplier: 100
        },
      ],
      atk_add: 0,
    },
    talents: [
      {
        id: "tal1",
        effects: [
          {
            type: "atk_add",
            value: 200
          }
        ]
      },
      {
        id: "tal2",
        effects: [
          {
            type: "atk_mul",
            value: 107
          }
        ]
      }
    ],
    potential: [
      {
        id: 4,
        note: "攻撃力上昇",
        effects: [
          {
            type: "atk_flat",
            value: 29,
          },
        ]
      },
      {
        id: 5,
        note: "素質強化",
        effects: [
          {
            type: "tal_add",
            target: "tal2",
            value: 4
          }
        ]
      }
    ],
    modules: {
      X: {
        "1": {
          effects: [
            {
              type: "atk_flat",
              value: 26
            }
          ]
        },
        "2": {
          effects: [
            {
              type: "atk_flat",
              value: 35
            },
            {
              type: "tal_add",
              target: "tal2",
              value: 4
            },
          ]
        },
        "3": {
          effects: [
            {
              type: "atk_flat",
              value: 42
            },
            {
              type: "tal_add",
              target: "tal2",
              value: 6
            },
          ]
        }
      },
    },
  },
  // 赤刃明霄チェン
  {
    name: "赤刃明霄チェン",
    id: "chen_the_dawnstreak",
    atk: 770,
    tags: [
      "melee",
      "guard",
    ],
    skill: {
      name: "S3 赤霄・天喟",
      hitCount: {
        min: 1,
        max: 2,
        default: 1
      },
      hits: [
        {
          damage_type: "weakness",
          multiplier: 580
        },
      ],
      atk_add: 0,
    },
    talents: [
      {
        id: "tal1",
        effects: [
          {
            type: "atk_add",
            value: 13
          }
        ]
      }
    ],
    potential: [
      {
        id: 4,
        note: "攻撃力上昇",
        effects: [
          {
            type: "atk_flat",
            value: 28,
          },
        ]
      },
      {
        id: 5,
        note: "素質強化",
        effects: [
          {
            type: "tal_add",
            target: "tal1",
            value: 3
          }
        ]
      },
    ],
    modules: {
      X: {
        "1": {
          effects: [
            {
              type: "atk_flat",
              value: 30
            }
          ]
        },
        "2": {
          effects: [
            {
              type: "atk_flat",
              value: 48
            },
          ]
        },
        "3": {
          effects: [
            {
              type: "atk_flat",
              value: 60
            },
          ]
        }
      },
    },
  },
  // ホルン
  {
    name: "ホルン",
    id: "horn",
    atk: 1006,
    tags: [
      "melee",
      "defender",
      "bullet"
    ],
    skill: {
      name: "S2 テンペストオーダー",
      hitCount: {
        min: 1,
        max: 5,
        default: 5
      },
      hits: [
        {
          damage_type: "physical",
          multiplier: 240
        },
        {
          damage_type: "arts",
          multiplier: 60
        },
      ],
      atk_add: 0,
    },
    talents: [],
    potential: [
      {
        id: 3,
        note: "素質強化",
        effects: []
      },
      {
        id: 4,
        note: "攻撃力上昇",
        effects: [
          {
            type: "atk_flat",
            value: 30,
          },
        ]
      }
    ],
    modules: {
      X: {
        "1": {
          effects: [
            {
              type: "atk_flat",
              value: 65
            }
          ]
        },
        "2": {
          effects: [
            {
              type: "atk_flat",
              value: 85
            },
          ]
        },
        "3": {
          effects: [
            {
              type: "atk_flat",
              value: 100
            },
          ]
        }

      },
      Y: {
        "1": {
          effects: [
            {
              type: "atk_flat",
              value: 92
            }
          ]
        },
        "2": {
          effects: [
            {
              type: "atk_flat",
              value: 108
            },
          ]
        },
        "3": {
          effects: [
            {
              type: "atk_flat",
              value: 120
            },
          ]
        }
      }
    },
  },
  // 滌火ジェシカ
  {
    name: "滌火ジェシカ",
    id: "jessica_the_liberated",
    atk: 582,
    tags: [
      "melee",
      "defender",
      "bullet"
    ],
    skill: {
      name: "S3 飽和射撃",
      hits: [
        {
          damage_type: "physical",
          multiplier: 250
        },
      ],
      atk_add: 310,
    },
    talents: [],
    potential: [
      {
        id: 4,
        note: "攻撃力上昇",
        effects: [
          {
            type: "atk_flat",
            value: 28,
          },
        ]
      },
      {
        id: 5,
        note: "素質強化",
        effects: []
      }
    ],
    modules: {
      X: {
        "1": {
          effects: [
            {
              type: "atk_flat",
              value: 50
            }
          ]
        },
        "2": {
          effects: [
            {
              type: "atk_flat",
              value: 57
            },
          ]
        },
        "3": {
          effects: [
            {
              type: "atk_flat",
              value: 65
            },
          ]
        }
      },
    },
  },
  // ウィシャデル
  {
    name: "ウィシャデル",
    id: "wisadel",
    atk: 777,
    tags: [
      "ranged",
      "sniper",
      "bullet"
    ],
    skill: {
      name: "S3 デイブレイクバースト",
      hits: [
        {
          id: "normal",
          damage_type: "physical",
          multiplier: 220
        },
        {
          id: "sub_1",
          damage_type: "physical",
          multiplier: 110
        },
        {
          id: "sub_2",
          damage_type: "physical",
          multiplier: 110,
          module: {
            name: "X",
            minLevel: 1
          }
        },
        {
          id: "talent",
          damage_type: "physical",
          multiplier: 150
        },
      ],
      atk_add: 180,
    },
    talents: [],
    potential: [
      {
        id: 4,
        note: "攻撃力上昇",
        effects: [
          {
            type: "atk_flat",
            value: 32,
          },
        ]
      },
      {
        id: 5,
        note: "素質強化",
        effects: []
      }
    ],
    modules: {
      X: {
        "1": {
          effects: [
            {
              type: "atk_flat",
              value: 45
            }
          ]
        },
        "2": {
          effects: [
            {
              type: "atk_flat",
              value: 55
            },
          ]
        },
        "3": {
          effects: [
            {
              type: "atk_flat",
              value: 65
            },
          ]
        }
      },
    },
  },
  // レミュアン
  {
    name: "レミュアン",
    id: "lemuen",
    atk: 1301,
    tags: [
      "ranged",
      "sniper",
      "bullet"
    ],
    skill: {
      name: "S3 礼砲・強制追悼",
      hits: [
        {
          damage_type: "physical",
          multiplier: 300
        },
      ],
      atk_add: 0,
    },
    talents: [
      {
        id: "tal1",
        effects: []
      }
    ],
    potential: [
      {
        id: 4,
        note: "攻撃力上昇",
        effects: [
          {
            type: "atk_flat",
            value: 46,
          },
        ]
      },
    ],
    modules: {
      Y: {
        "1": {
          effects: [
            {
              type: "atk_flat",
              value: 80
            }
          ]
        },
        "2": {
          effects: [
            {
              type: "atk_flat",
              value: 100
            },
          ]
        },
        "3": {
          effects: [
            {
              type: "atk_flat",
              value: 120
            },
          ]
        }
      },
    },
  },
  // ファイヤーウォッチ
  {
    name: "ファイヤーウォッチ",
    id: "firewatch",
    atk: 1175,
    tags: [
      "ranged",
      "sniper",
    ],
    skill: {
      name: "S2 爆撃要請",
      hitCount: {
        min: 1,
        max: 3,
        default: 1
      },
      hits: [
        {
          damage_type: "physical",
          multiplier: 300
        },
      ],
      atk_add: 0,
    },
    talents: [
      {
        id: "tal1",
        effects: []
      }
    ],
    potential: [
      {
        id: 4,
        note: "攻撃力上昇",
        effects: [
          {
            type: "atk_flat",
            value: 35,
          },
        ]
      },
      {
        id: 5,
        note: "素質強化",
        effects: []
      }
    ],
    modules: {
      Y: {
        "1": {
          effects: [
            {
              type: "atk_flat",
              value: 60
            }
          ]
        },
        "2": {
          effects: [
            {
              type: "atk_flat",
              value: 75
            },
          ]
        },
        "3": {
          effects: [
            {
              type: "atk_flat",
              value: 87
            },
          ]
        }
      },
    },
  },
  // ロゴス
  {
    name: "ロゴス",
    id: "logos",
    atk: 761,
    tags: [
      "ranged",
      "caster",
    ],
    skill: {
      name: "S1 歿亡",
      hits: [
        {
          special: "logos_s1_execute",
          multiplier: 150
        },
      ],
      atk_add: 100,
    },
    talents: [],
    potential: [
      {
        id: 4,
        note: "攻撃力上昇",
        effects: [
          {
            type: "atk_flat",
            value: 27,
          },
        ]
      },
    ],
    modules: {
      Y: {
        "1": {
          effects: [
            {
              type: "atk_flat",
              value: 35
            }
          ]
        },
        "2": {
          effects: [
            {
              type: "atk_flat",
              value: 50
            },
          ]
        },
        "3": {
          effects: [
            {
              type: "atk_flat",
              value: 60
            },
          ]
        }
      },
      D: {
        "1": {
          effects: [
            {
              type: "atk_flat",
              value: 36
            }
          ]
        },
        "2": {
          effects: [
            {
              type: "atk_flat",
              value: 54
            },
          ]
        },
        "3": {
          effects: [
            {
              type: "atk_flat",
              value: 67
            },
          ]
        }
      },
    },
  },
  // マルシル
  {
    name: "マルシル",
    id: "marcille",
    atk: 1024,
    tags: [
      "ranged",
      "caster",
    ],
    skill: {
      name: "S3 爆破魔法",
      hits: [
        {
          damage_type: "arts",
          multiplier: 390
        },
      ],
      atk_add: 0,
    },
    talents: [
      {
        id: "tal1",
        effects: [
          {
            type: "atk_add",
            value: 20
          }
        ]
      }
    ],
    potential: [
      {
        id: 3,
        note: "素質強化",
        effects: [
          {
            type: "tal_add",
            target: "tal1",
            value: 5
          }
        ]
      },
      {
        id: 4,
        note: "攻撃力上昇",
        effects: [
          {
            type: "atk_flat",
            value: 34,
          },
        ]
      },
    ],
    modules: {
      Y: {
        "1": {
          effects: [
            {
              type: "atk_flat",
              value: 51
            }
          ]
        },
        "2": {
          effects: [
            {
              type: "atk_flat",
              value: 68
            },
          ]
        },
        "3": {
          effects: [
            {
              type: "atk_flat",
              value: 82
            },
          ]
        }
      },
    },
  },
  // ネクラス
  {
    name: "ネクラス",
    id: "necrass",
    atk: 678,
    tags: [
      "ranged",
      "caster",
    ],
    skill: {
      name: "S3 死に授く冠",
      hits: [
        {
          damage_type: "arts",
          multiplier: 800
        },
      ],
      atk_add: 0,
    },
    talents: [],
    potential: [
      {
        id: 4,
        note: "攻撃力上昇",
        effects: [
          {
            type: "atk_flat",
            value: 27,
          },
        ]
      },
    ],
    modules: {
      X: {
        "1": {
          effects: [
            {
              type: "atk_flat",
              value: 35
            }
          ]
        },
        "2": {
          effects: [
            {
              type: "atk_flat",
              value: 45
            },
          ]
        },
        "3": {
          effects: [
            {
              type: "atk_flat",
              value: 55
            },
          ]
        }
      },
    },
  },
  // レイディアン
  {
    name: "レイディアン",
    id: "raidian",
    atk: 486,
    tags: [
      "ranged",
      "supporter",
    ],
    skill: {
      name: "S2 サイクルストレイフ",
      hitCount: {
        min: 1,
        max: 9,
        default: 3
      },
      hits: [
        {
          damage_type: "physical",
          multiplier: 100
        },
      ],
      atk_add: 80,
    },
    talents: [
      {
        id: "tal1",
        name: "素質名",
        effects: []
      }
    ],
    potential: [
      {
        id: 3,
        note: "攻撃力上昇",
        effects: [
          {
            type: "atk_flat",
            value: 24,
          },
        ]
      },
      {
        id: 5,
        note: "素質強化",
        effects: []
      }
    ],
    modules: {
      A: {
        "1": {
          effects: [
            {
              type: "atk_flat",
              value: 27
            }
          ]
        },
        "2": {
          effects: [
            {
              type: "atk_flat",
              value: 36
            },
          ]
        },
        "3": {
          effects: [
            {
              type: "atk_flat",
              value: 43
            },
          ]
        }
      },
      B: {
        "1": {
          effects: [
            {
              type: "atk_flat",
              value: 41
            }
          ]
        },
        "2": {
          effects: [
            {
              type: "atk_flat",
              value: 54
            },
          ]
        },
        "3": {
          effects: [
            {
              type: "atk_flat",
              value: 65
            },
          ]
        }
      },
    },
  },
  // ファントム真銀斬
  {
    name: "ファントム(真銀斬)",
    id: "Phantom",
    atk: 648,
    tags: [
      "melee",
      "specialist",
    ],
    skill: {
      name: "S2 血染めの楽章",
      hits: [
        {
          damage_type: "physical",
          multiplier: 380
        },
      ],
      atk_add: 200,
    },
    talents: [],
    potential: [
      {
        id: 2,
        note: "攻撃力上昇",
        effects: [
          {
            type: "atk_flat",
            value: 22,
          },
        ]
      },
    ],
    modules: {
      X: {
        "1": {
          effects: [
            {
              type: "atk_flat",
              value: 50
            }
          ]
        },
        "2": {
          effects: [
            {
              type: "atk_flat",
              value: 62
            },
          ]
        },
        "3": {
          effects: [
            {
              type: "atk_flat",
              value: 73
            },
          ]
        }
      },
      Y: {
        "1": {
          effects: [
            {
              type: "atk_flat",
              value: 40
            }
          ]
        },
        "2": {
          effects: [
            {
              type: "atk_flat",
              value: 60
            },
          ]
        },
        "3": {
          effects: [
            {
              type: "atk_flat",
              value: 75
            },
          ]
        }
      },
      A: {
        "1": {
          effects: [
            {
              type: "atk_flat",
              value: 37
            }
          ]
        },
        "2": {
          effects: [
            {
              type: "atk_flat",
              value: 55
            },
          ]
        },
        "3": {
          effects: [
            {
              type: "atk_flat",
              value: 71
            },
          ]
        }
      },

    },
  },
  // キリンRヤトウ
  {
    name: "キリンRヤトウ",
    id: "kirin_r_yato",
    atk: 655,
    tags: [
      "melee",
      "specialist",
    ],
    skill: {
      name: "S3 空中回転乱舞",
      hitCount: {
        min: 1,
        max: 2,
        default: 1
      },
      hits: [
        {
          damage_type: "physical",
          multiplier: 300
        },
        {
          damage_type: "arts",
          multiplier: 20
        },
      ],
      atk_add: 0,
    },
    talents: [
      {
        id: "tal1",
        effects: [
          {
            type: "atk_add",
            value: 13
          }
        ]
      }
    ],
    potential: [
      {
        id: 3,
        note: "攻撃力上昇",
        effects: [
          {
            type: "atk_flat",
            value: 22,
          },
        ]
      },
      {
        id: 5,
        note: "素質強化",
        effects: [
          {
            type: "tal_add",
            target: "tal1",
            value: 3
          }
        ]
      },
    ],
    modules: {
      X: {
        "1": {
          effects: [
            {
              type: "atk_flat",
              value: 36
            }
          ]
        },
        "2": {
          effects: [
            {
              type: "atk_flat",
              value: 43
            },
            {
              type: "tal_add",
              target: "tal1",
              value: 4
            },
          ]
        },
        "3": {
          effects: [
            {
              type: "atk_flat",
              value: 48
            },
            {
              type: "tal_add",
              target: "tal1",
              value: 7
            },
          ]
        }
      },
    },
  },
  // ウァン
  {
    name: "ウァン",
    id: "wang",
    atk: 669,
    tags: [
      "ranged",
      "specialist",
      "bullet"
    ],
    skill: {
      name: "S3 天下劫",
      hits: [
        {
          damage_type: "arts",
          multiplier: 380
        }
      ],
      hitCount: {
        min: 1,
        max: 5,
        default: 2
      },
      atk_add: 0
    },
    talents: [],
    potential: [
      {
        id: 4,
        note: "攻撃力上昇",
        effects: [
          {
            type: "atk_flat",
            value: 27
          }
        ]
      },
      {
        id: 5,
        note: "素質強化",
        effects: []
      }
    ],
    modules: {
      X: {
        "1": {
          effects: [
            {
              type: "atk_flat",
              value: 36
            }
          ]
        },
        "2": {
          effects: [
            {
              type: "atk_flat",
              value: 50
            }
          ]
        },
        "3": {
          effects: [
            {
              type: "atk_flat",
              value: 60
            }
          ]
        }
      }
    }
  }
]

export default operators;
