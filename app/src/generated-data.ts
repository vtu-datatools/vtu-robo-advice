/* eslint-disable quote-props */
import { Prompt, Prompts } from "./types"
export const PROMPTS: Prompts = {
  "30-days-notice": {
    "id": "30-days-notice",
    "prompt": "Were you given 1 months notice to move out?",
    "explainer": {
      "text": "Evictions \"for cause\" require 1 month of notice. ",
      "link": "https://www2.gov.bc.ca/gov/content/housing-tenancy/residential-tenancies/ending-a-tenancy/landlord-notice/one-month-notice"
    },
    "choices": [
      {
        "choice": "Yes",
        "link": {
          "internal": "10-days-since-notice"
        }
      },
      {
        "choice": "No",
        "link": {
          "internal": "unlawful-notice"
        }
      }
    ]
  },
  "specific-cause": {
    "id": "specific-cause",
    "prompt": "Do you have evidence to dispute what your landlord alleges you have done?",
    "choices": [
      {
        "choice": "Yes",
        "link": {
          "internal": "defend-yourself"
        }
      },
      {
        "choice": "No",
        "link": {
          "internal": "self-defence"
        }
      }
    ]
  },
  "able-to-pay-rent": {
    "id": "able-to-pay-rent",
    "prompt": "Are you able to pay your rent in full within 5 days of receiving this notice?",
    "explainer": {
      "text": "Your notice is cancelled and you can continue your tenancy if you pay all rent and utilities owing within five days of receiving the notice.",
      "link": "https://www2.gov.bc.ca/gov/content/housing-tenancy/residential-tenancies/during-a-tenancy/paying-rent"
    },
    "choices": [
      {
        "choice": "Yes, I should pay my landlord immediately.",
        "link": {
          "external": "https://tenants.bc.ca/your-tenancy/evictions/#ten-day-eviction-for-non-payment-of-rent"
        }
      },
      {
        "choice": "No, what are my options?",
        "link": {
          "internal": "find-an-advocate"
        }
      }
    ]
  },
  "bad-faith": {
    "id": "bad-faith",
    "prompt": "Do you have evidence that the reason your landlord gave for your eviction is misleading or untrue?",
    "choices": [
      {
        "choice": "Yes",
        "link": {
          "internal": "defend-yourself"
        }
      },
      {
        "choice": "No",
        "link": {
          "internal": "self-defence"
        }
      }
    ]
  },
  "illegal-eviction": {
    "id": "illegal-eviction",
    "prompt": "Use the following form letter from the Tenant Resource & Advisory Center (TRAC) to dispute your eviction.",
    "choices": [
      {
        "choice": "TRAC: Illegal Eviction Notice",
        "link": {
          "external": "https://tenants.bc.ca/resources/template-letters/"
        }
      }
    ]
  },
  "contact-the-vtu": {
    "id": "contact-the-vtu",
    "prompt": "Use the following resource to contact the VTU",
    "choices": [
      {
        "choice": "VTU: Contact",
        "link": {
          "external": "https://www.vancouvertenantsunion.ca/contact"
        }
      }
    ]
  },
  "proper-form": {
    "id": "proper-form",
    "prompt": "Were you given a proper eviction notice?",
    "explainer": {
      "text": "Notices must be in writing, signed and dated. They must contain the address of the rental unit, the date the notices takes effect and a reason for the notice. In addition, the notice should be on the proper form found on the Residential Tenancy Branch website.",
      "link": "https://www2.gov.bc.ca/gov/content/housing-tenancy/residential-tenancies/ending-a-tenancy/landlord-notice"
    },
    "choices": [
      {
        "choice": "Yes",
        "link": {
          "internal": "reason-for-eviction"
        }
      },
      {
        "choice": "No",
        "link": {
          "internal": "unlawful-notice"
        }
      }
    ]
  },
  "no-rta": {
    "id": "no-rta",
    "prompt": "If you are not covered by the RTA you will find it hard (but not impossible) to fight back. The following organizations may be able to assist you.",
    "choices": [
      {
        "choice": "BC Access Pro Bono",
        "link": {
          "external": "https://accessprobono.ca/get-legal-help"
        }
      },
      {
        "choice": "Community Legal Assistance Society ",
        "link": {
          "external": "https://clasbc.net/get-legal-help/losing-your-housing/"
        }
      }
    ]
  },
  "10-days-since-notice": {
    "id": "10-days-since-notice",
    "prompt": "Have more than 10 days passed since you received notice?",
    "explainer": {
      "text": "When given 1 month of notice, you have 10 days to dispute the eviction.",
      "link": "https://www2.gov.bc.ca/gov/content/housing-tenancy/residential-tenancies/ending-a-tenancy/landlord-notice/one-month-notice"
    },
    "choices": [
      {
        "choice": "Yes",
        "link": {
          "internal": "missed-contestation-window"
        }
      },
      {
        "choice": "No",
        "link": {
          "internal": "specific-cause"
        }
      }
    ]
  },
  "defend-yourself": {
    "id": "defend-yourself",
    "prompt": "If you think you have a case to dispute your eviction or your landlord's claims, you'll need to file a dispute with the Residential Tenancy Branch.",
    "choices": [
      {
        "choice": "Know Your Rights",
        "link": {
          "internal": "self-defence"
        }
      },
      {
        "choice": "Find an Advocate",
        "link": {
          "internal": "find-an-advocate"
        }
      }
    ]
  },
  "evidence": {
    "id": "evidence",
    "prompt": "Do you have evidence to counter your landlord's allegations?",
    "choices": [
      {
        "choice": "Yes, I have documentation and/or a willing witness that can provide a statement to support my version of events.",
        "link": {
          "internal": "defend-yourself"
        }
      },
      {
        "choice": "No",
        "link": {
          "internal": "self-defence"
        }
      }
    ]
  },
  "am-I-covered": {
    "id": "am-I-covered",
    "prompt": "Use the following resource to determine if you are covered by the Residential Tenancy Act.",
    "choices": [
      {
        "choice": "TRAC: Am I Covered by the RTA",
        "link": {
          "external": "https://tenants.bc.ca/your-tenancy/am-i-covered-by-the-law/"
        }
      }
    ]
  },
  "unlawful-notice": {
    "id": "unlawful-notice",
    "prompt": "Your notice is likely not lawful. Take some time to learn about your rights.",
    "choices": [
      {
        "choice": "Next Step: Know Your Rights!",
        "link": {
          "internal": "self-defence"
        }
      },
      {
        "choice": "Next Step: Write a Letter to Your Landlord",
        "link": {
          "internal": "illegal-eviction"
        }
      },
      {
        "choice": "Next Step: Find an Advocate",
        "link": {
          "internal": "find-an-advocate"
        }
      }
    ]
  },
  "60-days-notice": {
    "id": "60-days-notice",
    "prompt": "Were you given 2 months notice to move out?",
    "explainer": {
      "text": "Evictions for \"no fault\" require 2 months of notice.",
      "link": "https://www2.gov.bc.ca/gov/content/housing-tenancy/residential-tenancies/ending-a-tenancy/landlord-notice/two-month-notice"
    },
    "choices": [
      {
        "choice": "Yes",
        "link": {
          "internal": "15-days-since-notice"
        }
      },
      {
        "choice": "No",
        "link": {
          "internal": "unlawful-notice"
        }
      }
    ]
  },
  "rta": {
    "id": "rta",
    "prompt": "Is your living situation covered by the Residential Tenancy Act?",
    "choices": [
      {
        "choice": "Yes",
        "link": {
          "internal": "written-notice"
        }
      },
      {
        "choice": "I'm not sure",
        "link": {
          "internal": "am-I-covered"
        }
      },
      {
        "choice": "No",
        "link": {
          "internal": "no-rta"
        }
      }
    ]
  },
  "reason-for-eviction": {
    "id": "reason-for-eviction",
    "prompt": "What was the reason for your eviction?",
    "explainer": {
      "text": "Your landlord must give a reason for your eviction. The specific reason given will determine how much notice they must give you, and how much time you have to contest the eviction.\n",
      "link": "https://www2.gov.bc.ca/gov/content/housing-tenancy/residential-tenancies/ending-a-tenancy/landlord-notice"
    },
    "choices": [
      {
        "choice": "I did not pay my rent or utilities in full and on time",
        "link": {
          "internal": "10-days-notice"
        }
      },
      {
        "choice": "The eviction is related to something I am alleged to have done\n(eg. issues with noise, guests, etc)",
        "link": {
          "internal": "30-days-notice"
        }
      },
      {
        "choice": "I am being demovicted/renovicted",
        "link": {
          "internal": "contact-the-vtu"
        }
      },
      {
        "choice": "I am being evicted for 'no fault'\n(eg. eviction for landlord use)",
        "link": {
          "internal": "60-days-notice"
        }
      }
    ]
  },
  "10-days-notice": {
    "id": "10-days-notice",
    "prompt": "Were you given 10 days notice to move out?",
    "explainer": {
      "text": "Evictions for unpaid rent or utilities require 10 days of notice.",
      "link": "https://www2.gov.bc.ca/gov/content/housing-tenancy/residential-tenancies/ending-a-tenancy/landlord-notice/10-day-notice"
    },
    "choices": [
      {
        "choice": "Yes",
        "link": {
          "internal": "5-days-since-notice"
        }
      },
      {
        "choice": "No",
        "link": {
          "internal": "unlawful-notice"
        }
      }
    ]
  },
  "self-defence": {
    "id": "self-defence",
    "prompt": "Learn your tenant rights with the following resource from the Vancouver Tenants Union (VTU).",
    "choices": [
      {
        "choice": "VTU: Eviction Self-Defence Handbook",
        "link": {
          "external": "https://www.vancouvertenantsunion.ca/eviction_defense_handbook"
        }
      }
    ]
  },
  "find-an-advocate": {
    "id": "find-an-advocate",
    "prompt": "The following resource can help you find an advocate.",
    "choices": [
      {
        "choice": "Advocate Resource",
        "link": {
          "external": "https://www.vancouvertenantsunion.ca/advocate_directory"
        }
      }
    ]
  },
  "get-landlord-info": {
    "id": "get-landlord-info",
    "prompt": "Use the following form letter from the Tenant Resource & Advisory Center (TRAC) to determine your landlord's information.",
    "choices": [
      {
        "choice": "TRAC: Landlord's Legal Name and Address",
        "link": {
          "external": "https://tenants.bc.ca/resources/template-letters/"
        }
      }
    ]
  },
  "harassment": {
    "id": "harassment",
    "prompt": "Has your landlord tried to change your locks, threaten you, or harass you in any way?",
    "choices": [
      {
        "choice": "Yes, I need to speak with an advocate right away!",
        "link": {
          "internal": "find-an-advocate"
        }
      },
      {
        "choice": "No, but I think my landlord wants to evict me.",
        "link": {
          "internal": "self-defence"
        }
      }
    ]
  },
  "15-days-since-notice": {
    "id": "15-days-since-notice",
    "prompt": "Have more than 15 days passed since you received notice?",
    "explainer": {
      "text": "When given 2 months of notice, you have 15 days to dispute the eviction.",
      "link": "https://www2.gov.bc.ca/gov/content/housing-tenancy/residential-tenancies/ending-a-tenancy/landlord-notice/two-month-notice"
    },
    "choices": [
      {
        "choice": "Yes",
        "link": {
          "internal": "missed-contestation-window"
        }
      },
      {
        "choice": "No",
        "link": {
          "internal": "bad-faith"
        }
      }
    ]
  },
  "missed-contestation-window": {
    "id": "missed-contestation-window",
    "prompt": "It seems likely you have missed the window to contest your eviction. To be sure, you can try contacting a legal advocate and/or reading about your rights.",
    "choices": [
      {
        "choice": "Know Your Rights",
        "link": {
          "internal": "self-defence"
        }
      },
      {
        "choice": "Find an Advocate",
        "link": {
          "internal": "find-an-advocate"
        }
      },
      {
        "choice": "Please take some time to report your landlord here.",
        "link": {
          "external": "https://www.vancouvertenantsunion.ca/evictions"
        }
      }
    ]
  },
  "5-days-since-notice": {
    "id": "5-days-since-notice",
    "prompt": "Have more than 5 days passed since you received your eviction notice?",
    "explainer": {
      "text": "When given 10 days of notice, you have 5 days to pay any owed amount or dispute the eviction.",
      "link": "https://www2.gov.bc.ca/gov/content/housing-tenancy/residential-tenancies/ending-a-tenancy/landlord-notice/10-day-notice"
    },
    "choices": [
      {
        "choice": "Yes",
        "link": {
          "internal": "missed-contestation-window"
        }
      },
      {
        "choice": "No",
        "link": {
          "internal": "able-to-pay-rent"
        }
      }
    ]
  },
  "written-notice": {
    "id": "written-notice",
    "prompt": "Have you received a written eviction notice?",
    "explainer": {
      "text": "Your landlord is required by law to issue you a written eviction notice. Without written notice your eviction is not lawful. Please keep all copies of correspondences with your landlord and try and have a witness present whenever you interact with your landlord.",
      "link": "https://www2.gov.bc.ca/gov/content/housing-tenancy/residential-tenancies/during-a-tenancy/serving-notices-during-tenancy"
    },
    "choices": [
      {
        "choice": "Yes",
        "link": {
          "internal": "proper-form"
        }
      },
      {
        "choice": "No",
        "link": {
          "internal": "harassment"
        }
      }
    ]
  }
}
