var APP_DATA = {
  "scenes": [
    {
      "id": "0-scene_01_exterior_front",
      "name": "scene_01_exterior_front",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        }
      ],
      "faceSize": 443.5,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.3456053301817583,
          "pitch": 0.12771323885268693,
          "rotation": 0,
          "target": "1-scene_02_living_dining"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-scene_02_living_dining",
      "name": "scene_02_living_dining",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        }
      ],
      "faceSize": 443.5,
      "initialViewParameters": {
        "yaw": 0.6657988275135125,
        "pitch": 0,
        "fov": 1.3926760049349705
      },
      "linkHotspots": [
        {
          "yaw": 1.6818610554617184,
          "pitch": 0.11733601215851408,
          "rotation": 0,
          "target": "3-scene_04_terrace_garden"
        },
        {
          "yaw": 0.6622904151239304,
          "pitch": -0.39106337547517533,
          "rotation": 0,
          "target": "4-scene_05_family_lounge"
        },
        {
          "yaw": -0.37547760340705594,
          "pitch": -0.09487432818561103,
          "rotation": 6.283185307179586,
          "target": "2-scene_03_garage"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-scene_03_garage",
      "name": "scene_03_garage",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        }
      ],
      "faceSize": 443.5,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.039976274082020424,
          "pitch": -0.03995362804479541,
          "rotation": 0,
          "target": "1-scene_02_living_dining"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-scene_04_terrace_garden",
      "name": "scene_04_terrace_garden",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        }
      ],
      "faceSize": 443.5,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.5872094627959639,
          "pitch": -0.09120778658909501,
          "rotation": 0,
          "target": "1-scene_02_living_dining"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-scene_05_family_lounge",
      "name": "scene_05_family_lounge",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        }
      ],
      "faceSize": 443.5,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.6372854748413204,
          "pitch": 0.1306243275235932,
          "rotation": 0,
          "target": "5-scene_06_master_bedroom"
        },
        {
          "yaw": -2.1333904599555247,
          "pitch": 0.02780570236435409,
          "rotation": 0,
          "target": "7-scene_08_kids_bedroom"
        },
        {
          "yaw": 1.7253792047276946,
          "pitch": 0.37669594612760093,
          "rotation": 0,
          "target": "1-scene_02_living_dining"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-scene_06_master_bedroom",
      "name": "scene_06_master_bedroom",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        }
      ],
      "faceSize": 443.5,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.3731555011106042,
          "pitch": 0.13990771942854963,
          "rotation": 0,
          "target": "6-scene_07_master_bathroom"
        },
        {
          "yaw": -0.49119138153874076,
          "pitch": 0.002582622089896347,
          "rotation": 0,
          "target": "4-scene_05_family_lounge"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-scene_07_master_bathroom",
      "name": "scene_07_master_bathroom",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        }
      ],
      "faceSize": 443.5,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.914299385194039,
          "pitch": -0.059448689751025796,
          "rotation": 0,
          "target": "5-scene_06_master_bedroom"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-scene_08_kids_bedroom",
      "name": "scene_08_kids_bedroom",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        }
      ],
      "faceSize": 443.5,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 3.1123111283820855,
          "pitch": -0.050955316266611206,
          "rotation": 0,
          "target": "4-scene_05_family_lounge"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
