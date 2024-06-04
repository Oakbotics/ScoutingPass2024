var config_data = `
{
  "dataFormat": "tsv",
  "title": "Scouting PASS 2024",
  "page_title": "3739 Oakbotics Scouting",
  "checkboxAs": "10",
  "prematch": [

    { "name": "Team #",
      "code": "t",
      "type": "team",
      "min": 0,
      "max": 99999
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
      "defaultValue": "2024oncmp1",
      "required": "true"
    },
    { "name": "Match Type",
     "code": "l",
     "type": "level",
     "choices": {
        "qm": "Quals<br>",
        "sf": "Semifinals<br>",
        "f": "Finals"
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
       "NA": "N/A"
       },
       "defaultValue": "NA"
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
      "showFlip": "true",
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
    { "name": "Missed Shots",
      "code": "si",
      "type": "counter"
    },
    { "name": "Notes Dropped",
    "code": "nd",
    "type": "counter"
    }, 
    { "name": "Pickup From",
      "code": "tpu",
      "type": "radio",
      "choices": {
        "Source": "Source<br>",
        "Floor": "Floor<br>",
        "Both": "Both<br>",
        "NA": "Not Attempted"
      },
      "defaultValue": "NA"
    },
    { "name": "Location Shot From",
      "code": "lsf",
      "type": "clickable_image",
      "filename": "2024/field_image.png",
      "dimensions": "12 6",
      "clickRestrictions": "none",
      "showFlip": "true",
      "showUndo": "true",
      "allowableResponses": "1 2 3 4 9 10 11 12 13 14 15 16 21 22 23 24 25 26 27 28 33 34 35 36 37 38 39 40 45 46 47 48 49 50 51 52 57 58 59 60 61 62 63 64 69 70 71 72",
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
        "Climbed": "Onstage<br>",
        "N/A": "On field"
      },
      "defaultValue": "On Field"
    },
    { "name": "Climb Position",
      "code": "cp",
      "type": "radio",
      "choices": {
       "Side": "Side",
       "Center": "Center",
       "NA": "N/A"
       },
       "defaultValue": "NA"
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
        "1": "Sat around<br>",
        "2": "tiny hesitation<br>",
        "3": "Consistent movement<br>",
        "NA": "Not Observed"
      },
      "defaultValue": "NA"
    },
    { "name": "Defense Rating",
      "code": "dr",
      "type": "radio",
      "choices": {
        "1": "Let alot through<br>",
        "2": "prevented some bots for a bit<br>",
        "3": "prevented some bots for a while<br>",
        "4": "Prevented for a long time<br>",
        "NA": "NA"
      },
      "defaultValue": "NA"
    },
    { "name": "Speed Rating",
      "code": "sr",
      "type": "radio",
      "choices": {
        "1": "<br>",
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
    { "name": "Spotlit",
      "code": "sl",
      "type": "radio",
      "choices": {
       "3": "All 3 notes spotlit<br>",
       "2": "2 notes spotlit<br>",
       "1": "only 1 note spotlit<br>",
       "0": "missed all of the notes<br>",
       "NA": "NA"
      },
      "defaultValue":"NA"
    },
    { "name": "Comments",
      "code": "co",
      "type": "text",
      "size": 15,
      "maxSize": 55
    }
  ]
}`;
