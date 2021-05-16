/* eslint-disable quote-props */
import { Prompt } from "./types"
import { PROMPTS } from "./generated-data"

export const DEFAULT_PROMPT: Prompt = {
  id: "default",
  prompt: "FALLBACK PROMPT: DEBUGGING",
  choices: [
    {
      choice: "Back To Start",
      link: {
        internal: "rta"
      }
    }
  ]
}

export { PROMPTS }
