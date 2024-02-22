var config_data = `
{
  "dataFormat": "tsv",
  "title": "Scouting PASS 2024",
  "page_title": "3739 Oakbotics Scouting",
  "checkboxAs": "10",
  "prematch": [
    { "name": "Scouter Name",
      "code": "s",
      "type": "scouter",
      "size": 10,
      "maxSize": 15,
      "required": "true"
    },
    { "name": "Event",
      "code": "e",
      "type": "event",
      "defaultValue": "2023tnkn",
      "required": "true"
    },
    { "name": "Match Level",
      "code": "l",
      "type": "level",
      "choices": {
        "Quals": "Quals<br>",
        "SemiFinals": "Semifinals<br>",
        "Finals": "Finals"
      },
      "defaultValue": "qm",
      "required": "true"
    },
    { "name": "Match #",
      "code": "m",
      "type": "match",
      "min": 1,
      "max": 150,
      "required": "true"
    },
    { "name": "Robot",
      "code": "r",
      "type": "robot",
      "choices": {
        "r1": "Red-1",
        "b1": "Blue-1<br>",
        "r2": "Red-2",
        "b2": "Blue-2<br>",
        "r3": "Red-3",
        "b3": "Blue-3"
      },
      "required":"true"
    },
    { "name": "Team Name",
      "code": "t",
      "type": "text",
      "size": 15,
      "maxSize": 99999
    },
    { "name": "Human Player Location",
      "code": "hpl",
      "type": "radio",
      "choices": {
       "1": "Amp",
       "2": "Source",
       "3": "N/A"
       },
       "defaultValue": "3"
    },
    { "name": "Auto Start Position",
      "code": "as",
      "type": "clickable_image",
      "filename": "2024/field_image.png",
      "clickRestriction": "one",
      "allowableResponses": "1 12 13 24 25 36 37 48 49 60 61 72",
      "shape": "circle 5 black red true"
    }
  ],
  "auton": [
    { "name": "Leave Starting Zone",
      "code": "al",
      "type": "bool"
    },
    { "name": "Amp Scores",
      "code": "aas",
      "type": "counter"
    },
    { "name": "Speaker Scores",
      "code": "ass",
      "type": "counter"
    },
    { "name": "Order of Notes went to",
      "code": "onw",
      "type": "text",
      "size": 15,
      "maxSize": 30
    },
    { "name": "Notes went to but missed",
      "code": "nwm",
      "type": "text",
      "size": 15,
      "maxSize": 30
    },
    { "name": "Note Locations",
      "code": "nl",
      "type": "clickable_image",
      "filename": "2024/Autonomous_Note_Placement.png",
      "dimensions": "24 12",
      "clickRestriction": "one",
      "showFlip": "false",
      "showUndo": "false"
    }
  ],
  "teleop": [
    { "name": "Amp Scores",
      "code": "tas",
      "type": "counter"
    },
    { "name": "Speaker Scores",
      "code": "tss",
      "type": "counter"
    },
    { "name": "Speaker Scores AMPED",
      "code": "tta",
      "type": "counter"
    },
    { "name": "Notes Dropped",
      "code": "nd",
      "type": "counter"
    },
    { "name": "Missed Shots",
    "code": "si",
    "type": "counter"
    }, 
    { "name": "Pickup From",
      "code": "tpu",
      "type": "radio",
      "choices": {
        "s": "Source<br>",
        "f": "Floor<br>",
        "b": "Both<br>",
        "x": "Not Attempted"
      },
      "defaultValue": "x"
    },
    { "name": "Coopertition?",
      "code": "c",
      "type": "checkbox"
    }
  ],
  "endgame": [
    { "name": "Time to climb",
      "code": "dt",
      "type": "timer"
    },
    { "name": "Final Bot location",
      "code": "fs",
      "type":"radio",
      "choices": {
        "p": "Parked<br>",
        "o": "Onstage<br>",
        "x": "On field"
      },
      "defaultValue": "x"
    },
    { "name": "Harmony?",
      "code": "H",
      "type": "bool"
    },
    { "name": "Note in Trap?",
      "code": "nit",
      "type": "bool"
    }
  ],
  "postmatch": [
    { "name": "Driver Skill",
      "code": "ds",
      "type": "radio",
      "choices": {
        "n": "Not Effective<br>",
        "a": "Average<br>",
        "v": "Very Effective<br>",
        "x": "Not Observed"
      },
      "defaultValue": "x"
    },
    { "name": "Defense Rating",
      "code": "dr",
      "type": "radio",
      "choices": {
        "b": "Below Average<br>",
        "a": "Average<br>",
        "g": "Good<br>",
        "e": "Excellent<br>",
        "x": "Did not play defense"
      },
      "defaultValue": "x"
    },
    { "name": "Speed Rating",
      "code": "sr",
      "type": "radio",
      "choices": {
        "1": "1 (slow)<br>",
        "2": "2<br>",
        "3": "3<br>",
        "4": "4<br>",
        "5": "5 (fast)"
      },
      "defaultValue":"3"
    },
    { "name": "Immobilized?",
      "code": "die",
      "type": "bool"
    },
    { "name": "Tippy?<br>(almost tipped over)",
      "code": "tip",
      "type": "bool"
    },
    { "name": "Fouls Given",
      "code": "fg",
      "type": "counter"
    },
    { "name": "# spotlit",
      "code": "ns",
      "type": "counter",
      "min": 0,
      "max": 3
    },
    { "name": "Comments",
      "code": "co",
      "type": "text",
      "size": 15,
      "maxSize": 55
    }
  ]
}`;
