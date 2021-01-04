/* eslint-disable quote-props */
import { Prompt, Prompts } from "./types"

export const DEFAULT_PROMPT: Prompt = {
  id: "default",
  promptText: "FALLBACK PROMPT: DEBUGGING",
  choices: [
    {
      choiceText: "Back To Start",
      linksTo: "rta"
    }
  ]
}

export const PROMPTS: Prompts = {
  // Automatically Generated
  "rta": {
    "id": "rta",
    "promptText": "Is your living situation covered by the Residential Tenancy Act?",
    "choices": [
      {
        "choiceText": "Yes",
        "linksTo": "written-notice"
      },
      {
        "choiceText": "I'm not sure",
        "linksTo": "am-I-covered"
      },
      {
        "choiceText": "No",
        "linksTo": "no-rta"
      }
    ]
  },
  "am-I-covered": {
    "id": "am-I-covered",
    "promptText": "Use the following resource to determine if you are covered by the Residential Tenancy Act.",
    "choices": [
      {
        "choiceText": "TRAC: Am I Covered by the RTA",
        "linkOut": "https://tenants.bc.ca/your-tenancy/am-i-covered-by-the-law/"
      }
    ]
  },
  "no-rta": {
    "id": "no-rta",
    "promptText": "If you are not covered by the RTA you will find it hard (but not impossible) to fight back.",
    "choices": [
      {
        "choiceText": "Next Steps",
        "linksTo": "todo",
        "linkOut": "/contest/fletter/../landing"
      }
    ]
  },
  "written-notice": {
    "id": "written-notice",
    "promptText": "Have you received a written eviction notice?",
    "choices": [
      {
        "choiceText": "Yes",
        "linksTo": "proper-form"
      },
      {
        "choiceText": "No",
        "linksTo": "harassment"
      }
    ]
  },
  "harassment": {
    "id": "harassment",
    "promptText": "Has your landlord tried to change your locks, threaten you, or harass you in any way?",
    "choices": [
      {
        "choiceText": "Yes, I need to speak with an advocate right away!",
        "linksTo": "find-an-advocate"
      },
      {
        "choiceText": "No, but I think my landlord wants to evict me.",
        "linksTo": "self-defence"
      }
    ]
  },
  "proper-form": {
    "id": "proper-form",
    "promptText": "Was it on the proper form?",
    "choices": [
      {
        "choiceText": "Yes",
        "linksTo": "reason-for-eviction"
      },
      {
        "choiceText": "No",
        "linksTo": "unlawful-notice"
      }
    ]
  },
  "unlawful-notice": {
    "id": "unlawful-notice",
    "promptText": "Your notice is likely not lawful. Take some time to learn about your rights.",
    "choices": [
      {
        "choiceText": "Next Step: Know Your Rights!",
        "linksTo": "self-defence"
      },
      {
        "choiceText": "Next Step: Write a Letter to Your Landlord",
        "linksTo": "illegal-eviction"
      },
      {
        "choiceText": "Next Step: Find an Advocate",
        "linksTo": "find-an-advocate"
      }
    ]
  },
  "reason-for-eviction": {
    "id": "reason-for-eviction",
    "promptText": "What was the reason for your eviction?",
    "choices": [
      {
        "choiceText": "I did not pay my rent or utilities in full and on time",
        "linksTo": "10-days-to-move-out"
      },
      {
        "choiceText": "The eviction is related to something I am alleged to have done (i.e issues with noise, guests, etc)",
        "linksTo": "30-days-notice"
      },
      {
        "choiceText": "I am being evicted for 'no fault'",
        "linksTo": "60-days-notice"
      },
      {
        "choiceText": "I am being demovicted/renovicted",
        "linksTo": "contact-the-vtu"
      }
    ]
  },
  "10-days-to-move-out": {
    "id": "10-days-to-move-out",
    "promptText": "Were you given 10 Days Notice to Move Out?",
    "choices": [
      {
        "choiceText": "Yes",
        "linksTo": "5-days-since-notice"
      },
      {
        "choiceText": "No",
        "linksTo": "unlawful-notice"
      }
    ]
  },
  "5-days-since-notice": {
    "id": "5-days-since-notice",
    "promptText": "Have more than 5 days passed since you received your eviction notice?",
    "choices": [
      {
        "choiceText": "Yes",
        "linksTo": "missed-contestation-window"
      },
      {
        "choiceText": "No",
        "linksTo": "able-to-pay-rent"
      }
    ]
  },
  "able-to-pay-rent": {
    "id": "able-to-pay-rent",
    "promptText": "Are you able to pay your rent in full within 5 days of receiving this notice?",
    "choices": [
      {
        "choiceText": "Yes, I should pay my landlord immediately."
      },
      {
        "choiceText": "No, what are my options?",
        "linksTo": "find-an-advocate"
      }
    ]
  },
  "30-days-notice": {
    "id": "30-days-notice",
    "promptText": "Were you given 30 Days Notice?",
    "choices": [
      {
        "choiceText": "Yes",
        "linksTo": "10-days-since-notice"
      },
      {
        "choiceText": "No",
        "linksTo": "unlawful-notice"
      }
    ]
  },
  "10-days-since-notice": {
    "id": "10-days-since-notice",
    "promptText": "Have more than 10 days passed since you received notice?",
    "choices": [
      {
        "choiceText": "Yes",
        "linksTo": "missed-contestation-window"
      },
      {
        "choiceText": "No",
        "linksTo": "specific-cause"
      }
    ]
  },
  "specific-cause": {
    "id": "specific-cause",
    "promptText": "Did your landlord indicate what specifically you did wrong?",
    "choices": [
      {
        "choiceText": "Yes",
        "linksTo": "chance-to-address"
      },
      {
        "choiceText": "No",
        "linksTo": "formal-warning"
      }
    ]
  },
  "formal-warning": {
    "id": "formal-warning",
    "promptText": "Did your landlord ever give you a formal warning?",
    "choices": [
      {
        "choiceText": "Yes",
        "linksTo": "todo",
        "linkOut": "https://tenants.bc.ca/resources/template-letters/"
      },
      {
        "choiceText": "No",
        "linksTo": "todo",
        "linkOut": "https://tenants.bc.ca/resources/template-letters/"
      }
    ]
  },
  "chance-to-address": {
    "id": "chance-to-address",
    "promptText": "Did your landlord give you a chance to address the issue?",
    "choices": [
      {
        "choiceText": "Yes",
        "linksTo": "todo",
        "linkOut": "https://tenants.bc.ca/resources/template-letters/"
      },
      {
        "choiceText": "No",
        "linksTo": "evidence"
      }
    ]
  },
  "60-days-notice": {
    "id": "60-days-notice",
    "promptText": "Were you given 60 Days Notice?",
    "choices": [
      {
        "choiceText": "Yes",
        "linksTo": "15-days-since-notice"
      },
      {
        "choiceText": "No",
        "linksTo": "unlawful-notice"
      }
    ]
  },
  "15-days-since-notice": {
    "id": "15-days-since-notice",
    "promptText": "Have more than 15 days passed since you received notice?",
    "choices": [
      {
        "choiceText": "Yes",
        "linksTo": "missed-contestation-window"
      },
      {
        "choiceText": "No",
        "linksTo": "bad-faith"
      }
    ]
  },
  "bad-faith": {
    "id": "bad-faith",
    "promptText": "Do you have evidence that the reason your landlord gave for your eviction is misleading or untrue?",
    "choices": [
      {
        "choiceText": "Yes",
        "linksTo": "todo",
        "linkOut": "https://tenants.bc.ca/resources/template-letters/"
      },
      {
        "choiceText": "No",
        "linksTo": "todo",
        "linkOut": "/contest/fletter/../landing"
      }
    ]
  },
  "evidence": {
    "id": "evidence",
    "promptText": "Do you have evidence to counter your landlord's allegations?",
    "choices": [
      {
        "choiceText": "Yes, I have a witness or evidence to support my version of events",
        "linksTo": "todo",
        "linkOut": "https://tenants.bc.ca/resources/template-letters/"
      }
    ]
  },
  "self-defence": {
    "id": "self-defence",
    "promptText": "Learn your tenant rights with the following resource.",
    "choices": [
      {
        "choiceText": "VTU: Eviction Self-Defence Handbook",
        "linkOut": "https://d3n8a8pro7vhmx.cloudfront.net/vancouvertenantsunion/pages/13/attachments/original/1564010297/EVICT_handbook_WEB_2019_Update.pdf?1564010297"
      }
    ]
  },
  "get-landlord-info": {
    "id": "get-landlord-info",
    "promptText": "Use the following form letter to determine your landlord's information.",
    "choices": [
      {
        "choiceText": "TRAC: Landlord's Legal Name and Address",
        "linkOut": "https://tenants.bc.ca/resources/template-letters/"
      }
    ]
  },
  "illegal-eviction": {
    "id": "illegal-eviction",
    "promptText": "Use the following form letter to dispute your eviction.",
    "choices": [
      {
        "choiceText": "TRAC: Illegal Eviction Notice",
        "linkOut": "https://tenants.bc.ca/resources/template-letters/"
      }
    ]
  },
  "find-an-advocate": {
    "id": "find-an-advocate",
    "promptText": "Use the following resource to find an advocate.",
    "choices": [
      {
        "choiceText": "VTU: Advocate Resource",
        "linksTo": "todo"
      }
    ]
  },
  "contact-the-vtu": {
    "id": "contact-the-vtu",
    "promptText": "Use the following resource to contact the VTU",
    "choices": [
      {
        "choiceText": "VTU: Contact",
        "linkOut": "https://www.vancouvertenantsunion.ca/contact"
      }
    ]
  },
  "missed-contestation-window": {
    "id": "missed-contestation-window",
    "promptText": "It seems like you probably missed the window to contest your eviction.",
    "choices": [
      {
        "choiceText": "Please take some time to report your landlord and sign a petition to help improve the law in B.C",
        "linksTo": "todo"
      }
    ]
  },
  "todo": {
    "id": "todo",
    "promptText": "What should this do?",
    "choices": [
      {
        "choiceText": ""
      }
    ]
  }
}