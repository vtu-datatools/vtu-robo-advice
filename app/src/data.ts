/* eslint-disable quote-props */
import { Prompt, Prompts } from "./types"

export const DEFAULT_PROMPT: Prompt = {
  id: "default",
  promptText: "FALLBACK PROMPT: DEBUGGING",
  choices: [
    {
      choiceText: "Back To Start",
      linksTo: "2"
    }
  ]
}

export const PROMPTS: Prompts = {
  // Automatically Generated
  "2": {
    "id": "2",
    "promptText": "Have you received a written eviction notice?",
    "choices": [
      {
        "choiceText": "Yes",
        "linksTo": "3"
      },
      {
        "choiceText": "No",
        "linksTo": "5"
      }
    ]
  },
  "3": {
    "id": "3",
    "promptText": "Was it on the proper form?",
    "choices": [
      {
        "choiceText": "Yes",
        "linksTo": "30"
      },
      {
        "choiceText": "No",
        "linksTo": "6"
      }
    ]
  },
  "5": {
    "id": "5",
    "promptText": "Has your landlord tried to change your locks, threaten you, or harass you in any way?",
    "choices": [
      {
        "choiceText": "No, but I think my landlord wants to evict me",
        "linkOut": "Eviction Self Defence Handbook"
      },
      {
        "choiceText": "Yes, I need to speak with an advocate right away!",
        "linkOut": "Advocate Directory"
      }
    ]
  },
  "6": {
    "id": "6",
    "promptText": "Your notice is likely not lawful. Take some time to learn about your rights.",
    "choices": [
      {
        "choiceText": "Next step: Know your rights!",
        "linkOut": "https://tenants.bc.ca/resources/template-letters/"
      },
      {
        "choiceText": "Next Step: Write a Letter to Your Landlord",
        "linkOut": "https://tenants.bc.ca/resources/template-letters/"
      },
      {
        "choiceText": "Next Step: Find an advocate",
        "linkOut": "Advocate Directory"
      }
    ]
  },
  "7": {
    "id": "7",
    "promptText": "Have more than 5 days passed since you received your eviction notice?",
    "choices": [
      {
        "choiceText": "Yes",
        "linksTo": "34"
      },
      {
        "choiceText": "No",
        "linksTo": "38"
      }
    ]
  },
  "8": {
    "id": "8",
    "promptText": "Have more than 10 days passed since you received notice?",
    "choices": [
      {
        "choiceText": "No",
        "linksTo": "35"
      },
      {
        "choiceText": "Yes",
        "linksTo": "34"
      }
    ]
  },
  "9": {
    "id": "9",
    "promptText": "Have more than 15 days passed since you received notice?",
    "choices": [
      {
        "choiceText": "Yes",
        "linksTo": "34"
      },
      {
        "choiceText": "No",
        "linksTo": "44"
      }
    ]
  },
  "29": {
    "id": "29",
    "promptText": "Is your living situation covered by the Residential Tenancy Act?",
    "choices": [
      {
        "choiceText": "Yes",
        "linksTo": "2"
      },
      {
        "choiceText": "No, I don't think so",
        "linksTo": "43"
      }
    ]
  },
  "30": {
    "id": "30",
    "promptText": "What was the reason for your eviction?",
    "choices": [
      {
        "choiceText": "I did not pay my rent or utilities in full and on time",
        "linksTo": "31"
      },
      {
        "choiceText": "The eviction is related to something I am alleged to have done (i.e issues with noise, guests, etc)",
        "linksTo": "32"
      },
      {
        "choiceText": "I am being evicted for 'no fault'",
        "linksTo": "33"
      }
    ]
  },
  "31": {
    "id": "31",
    "promptText": "Were you given 10 Days Notice to Move Out?",
    "choices": [
      {
        "choiceText": "No",
        "linksTo": "6"
      },
      {
        "choiceText": "Yes",
        "linksTo": "7"
      }
    ]
  },
  "32": {
    "id": "32",
    "promptText": "Were you given 30 Days Notice?",
    "choices": [
      {
        "choiceText": "Yes",
        "linksTo": "8"
      },
      {
        "choiceText": "No",
        "linksTo": "6"
      }
    ]
  },
  "33": {
    "id": "33",
    "promptText": "Were you given 60 Days Notice?",
    "choices": [
      {
        "choiceText": "Yes",
        "linksTo": "9"
      },
      {
        "choiceText": "No",
        "linksTo": "6"
      }
    ]
  },
  "34": {
    "id": "34",
    "promptText": "It seems like you probably missed the window to contest your eviction.",
    "choices": [
      {
        "choiceText": "Please take some time to report your landlord and sign a petition to help improve the law in B.C",
        "linkOut": "https://tenants.bc.ca/resources/template-letters/"
      }
    ]
  },
  "35": {
    "id": "35",
    "promptText": "Did your landlord indicate what specifically you did wrong?",
    "choices": [
      {
        "choiceText": "No",
        "linksTo": "37"
      },
      {
        "choiceText": "Yes",
        "linksTo": "36"
      }
    ]
  },
  "36": {
    "id": "36",
    "promptText": "Did your landlord give you a chance to address the issue?",
    "choices": [
      {
        "choiceText": "Yes",
        "linkOut": "https://tenants.bc.ca/resources/template-letters/"
      },
      {
        "choiceText": "No",
        "linksTo": "39"
      }
    ]
  },
  "37": {
    "id": "37",
    "promptText": "Did your landlord ever give  you a formal warning?",
    "choices": [
      {
        "choiceText": "Yes",
        "linkOut": "https://tenants.bc.ca/resources/template-letters/"
      },
      {
        "choiceText": "No",
        "linkOut": "https://tenants.bc.ca/resources/template-letters/"
      }
    ]
  },
  "38": {
    "id": "38",
    "promptText": "Are you able to pay your rent in full within 5 days of receiving this notice?",
    "choices": [
      {
        "choiceText": "Yes, I should pay my landlord immediately",
        "linkOut": "https://tenants.bc.ca/resources/template-letters/"
      },
      {
        "choiceText": "No, what are my options?",
        "linkOut": "https://tenants.bc.ca/resources/template-letters/"
      }
    ]
  },
  "39": {
    "id": "39",
    "promptText": "Do you have evidence to counter your landlord's allegations?",
    "choices": [
      {
        "choiceText": "Yes, I have a witness or evidence to support my version of events",
        "linkOut": "https://tenants.bc.ca/resources/template-letters/"
      }
    ]
  },
  "43": {
    "id": "43",
    "promptText": "If you are not covered by the RTA you will find it hard (but not impossible) to fight back.",
    "choices": [
      {
        "choiceText": "Next Steps",
        "linkOut": "/contest/fletter/../landing"
      }
    ]
  },
  "44": {
    "id": "44",
    "promptText": "Do you have evidence that the reason your landlord gave for your eviction is  misleading or untrue?",
    "choices": [
      {
        "choiceText": "No",
        "linkOut": "/contest/fletter/../landing"
      },
      {
        "choiceText": "Yes",
        "linkOut": "https://tenants.bc.ca/resources/template-letters/"
      }
    ]
  }
}

