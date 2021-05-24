import { Prompt } from "./types";
import { PROMPTS } from "./generated-data";

export const ROOT = "rta";

export const DEFAULT_PROMPT: Prompt = {
  id: "default",
  prompt: "This page does not exist",
  choices: [],
};

export { PROMPTS };
