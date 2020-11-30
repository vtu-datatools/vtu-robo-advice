/* eslint-disable quote-props */
import { Prompt, Prompts } from "./types"

export const DEFAULT_PROMPT: Prompt =  {
  id: "default",
  promptText: "FALLBACK PROMPT: DEBUGGING",
  choices: [
    {
      choiceText: "Back To Start",
      linksTo: "46ed67"
    }
  ]
}

export const PROMPTS: Prompts = {
  // Automatically Generated
  "48d462": {
    "id": "48d462",
    "promptText": "Have you received a written eviction notice?",
    "choices": [
      {
        "choiceText": "Yes",
        "linksTo": "5968c1"
      },
      {
        "choiceText": "No",
        "linksTo": "c4b94f"
      }
    ]
  },
  "5968c1": {
    "id": "5968c1",
    "promptText": "Was it on the proper form?",
    "choices": [
      {
        "choiceText": "Yes",
        "linksTo": "f9b710"
      },
      {
        "choiceText": "No",
        "linksTo": "e8884f"
      }
    ]
  },
  "c4b94f": {
    "id": "c4b94f",
    "promptText": "Has your landlord tried to change your locks, threaten you, or harass you in any way?",
    "choices": [
      {
        "choiceText": "No, but I think my landlord wants to evict me",
        "linksTo": "e693fe"
      },
      {
        "choiceText": "Yes, I need to speak with an advocate right away!",
        "linksTo": "160eff"
      }
    ]
  },
  "e8884f": {
    "id": "e8884f",
    "promptText": "Your notice is likely not lawful. Take some time to learn about your rights.",
    "choices": [
      {
        "choiceText": "Next step: Know your rights!",
        "linksTo": "fba94a"
      },
      {
        "choiceText": "Next Step: Write a Letter to Your Landlord",
        "linksTo": "fba94a"
      },
      {
        "choiceText": "Next Step: Find an advocate",
        "linksTo": "160eff"
      }
    ]
  },
  "203eef": {
    "id": "203eef",
    "promptText": "Have more than 5 days passed since you received your eviction notice?",
    "choices": [
      {
        "choiceText": "Yes",
        "linksTo": "81f00c"
      },
      {
        "choiceText": "No",
        "linksTo": "31d16e"
      }
    ]
  },
  "bf2da9": {
    "id": "bf2da9",
    "promptText": "Have more than 10 days passed since you received notice?",
    "choices": [
      {
        "choiceText": "No",
        "linksTo": "39f6b3"
      },
      {
        "choiceText": "Yes",
        "linksTo": "81f00c"
      }
    ]
  },
  "bc17bf": {
    "id": "bc17bf",
    "promptText": "Have more than 15 days passed since you received notice?",
    "choices": [
      {
        "choiceText": "Yes",
        "linksTo": "81f00c"
      },
      {
        "choiceText": "No",
        "linksTo": "cba407"
      }
    ]
  },
  "46ed67": {
    "id": "46ed67",
    "promptText": "Is your living situation covered by the Residential Tenancy Act?",
    "choices": [
      {
        "choiceText": "Yes",
        "linksTo": "48d462"
      },
      {
        "choiceText": "No, I don't think so",
        "linksTo": "53fbd5"
      }
    ]
  },
  "f9b710": {
    "id": "f9b710",
    "promptText": "What was the reason for your eviction?",
    "choices": [
      {
        "choiceText": "I did not pay my rent or utilities in full and on time",
        "linksTo": "7c8f86"
      },
      {
        "choiceText": "The eviction is related to something I am alleged to have done (i.e issues with noise, guests, etc)",
        "linksTo": "e5c96d"
      },
      {
        "choiceText": "I am being evicted for 'no fault'",
        "linksTo": "5c6b83"
      }
    ]
  },
  "7c8f86": {
    "id": "7c8f86",
    "promptText": "Were you given 10 Days Notice to Move Out?",
    "choices": [
      {
        "choiceText": "No",
        "linksTo": "e8884f"
      },
      {
        "choiceText": "Yes",
        "linksTo": "203eef"
      }
    ]
  },
  "e5c96d": {
    "id": "e5c96d",
    "promptText": "Were you given 30 Days Notice?",
    "choices": [
      {
        "choiceText": "Yes",
        "linksTo": "bf2da9"
      },
      {
        "choiceText": "No",
        "linksTo": "e8884f"
      }
    ]
  },
  "5c6b83": {
    "id": "5c6b83",
    "promptText": "Were you given 60 Days Notice?",
    "choices": [
      {
        "choiceText": "Yes",
        "linksTo": "bc17bf"
      },
      {
        "choiceText": "No",
        "linksTo": "e8884f"
      }
    ]
  },
  "81f00c": {
    "id": "81f00c",
    "promptText": "It seems like you probably missed the window to contest your eviction.",
    "choices": [
      {
        "choiceText": "Please take some time to report your landlord and sign a petition to help improve the law in B.C",
        "linksTo": "fba94a"
      }
    ]
  },
  "39f6b3": {
    "id": "39f6b3",
    "promptText": "Did your landlord indicate what specifically you did wrong?",
    "choices": [
      {
        "choiceText": "No",
        "linksTo": "66943f"
      },
      {
        "choiceText": "Yes",
        "linksTo": "317a95"
      }
    ]
  },
  "317a95": {
    "id": "317a95",
    "promptText": "Did your landlord give you a chance to address the issue?",
    "choices": [
      {
        "choiceText": "Yes",
        "linksTo": "fba94a"
      },
      {
        "choiceText": "No",
        "linksTo": "5927ad"
      }
    ]
  },
  "66943f": {
    "id": "66943f",
    "promptText": "Did your landlord ever give  you a formal warning?",
    "choices": [
      {
        "choiceText": "Yes",
        "linksTo": "fba94a"
      },
      {
        "choiceText": "No",
        "linksTo": "fba94a"
      }
    ]
  },
  "31d16e": {
    "id": "31d16e",
    "promptText": "Are you able to pay your rent in full within 5 days of receiving this notice?",
    "choices": [
      {
        "choiceText": "Yes, I should pay my landlord immediately",
        "linksTo": "fba94a"
      },
      {
        "choiceText": "No, what are my options?",
        "linksTo": "fba94a"
      }
    ]
  },
  "5927ad": {
    "id": "5927ad",
    "promptText": "Do you have evidence to counter your landlord's allegations?",
    "choices": [
      {
        "choiceText": "Yes, I have a witness or evidence to support my version of events",
        "linksTo": "fba94a"
      }
    ]
  },
  "53fbd5": {
    "id": "53fbd5",
    "promptText": "If you are not covered by the RTA you will find it hard (but not impossible) to fight back.",
    "choices": [
      {
        "choiceText": "Next Steps",
        "linksTo": "8ea549"
      }
    ]
  },
  "cba407": {
    "id": "cba407",
    "promptText": "Do you have evidence that the reason your landlord gave for your eviction is  misleading or untrue?",
    "choices": [
      {
        "choiceText": "No",
        "linksTo": "8ea549"
      },
      {
        "choiceText": "Yes",
        "linksTo": "fba94a"
      }
    ]
  }
}
