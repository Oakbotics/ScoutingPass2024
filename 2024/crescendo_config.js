var config_data = `
{
  "dataFormat": "tsv",
  "title": "Scouting PASS 2024",
  "page_title": "3739 Oakbotics Scouting",
  "checkboxAs": "10",
  "prematch": [
      { "name": "Team Name",
      "code": "t",
      "type": "text",
      "size": 15,
      "maxSize": 99999
    },
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
    { "name": "Match Type",
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
    { "name": "Human Player Location",
      "code": "hpl",
      "type": "radio",
      "choices": {
       "Amp": "Amp",
       "Source": "Source",
       "N/A": "N/A"
       },
       "defaultValue": "3"
    },
    { "name": "Starting Position",
      "code": "as",
      "type": "clickable_image",
      "filename": "2024/field_image.png",
      "clickRestriction": "one",
      "allowableResponses": "1 12 13 24 25 36 37 48 49 60 61 72",
      "shape": "circle 5 black red true"
    }
  ],
  "auton": [
    { "name": "Left Starting Zone",
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
    { "name": "Order Of Notes Went to",
      "code": "onw",
      "type": "clickable_image",
      "filename": "2024/field_image.png",
      "dimensions": "3 5",
      "clickRestriction": "onePerBox",
      "showFlip": "false",
      "showUndo": "true",
      "allowableResponses": "1 2 3 4 5 6 7 8 9 11 14",
      "shape": "circle 5 black red true"
    },
    { "name": "Attempted pickup but Missed",
      "code": "mp",
      "type": "clickable_image",
      "filename": "2024/field_image.png",
      "dimensions": "3 5",
      "clickRestriction": "onePerBox",
      "showFlip": "false",
      "showUndo": "true",
      "allowableResponses": "1 2 3 4 5 6 7 8 9 11 14",
      "shape": "circle 5 black red true"
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
        "Source": "Source<br>",
        "Floor": "Floor<br>",
        "Both": "Both<br>",
        "N/A": "Not Attempted"
      },
      "defaultValue": "x"
    },
    { "name": "Location Shot From",
      "code": "lsf",
      "type": "clickable_image",
      "filename": "2024/field_image.png",
      "dimensions": "12 6",
      "clickRestrictions": "onePerBox",
      "showFlip": "false",
      "showUndo": "true",
      "shape": "circle 5 black red true"
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
        "Parked": "Parked<br>",
        "Onstage": "Onstage<br>",
        "On Field": "On field"
      },
      "defaultValue": "On Field"
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
