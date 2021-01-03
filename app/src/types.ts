export type PromptId = string

export interface Choice {
  choiceText: string,
  tooltip?: string
  linksTo?: PromptId
  linkOut?: string
}

export interface Prompt {
  id: PromptId
  promptText: string,
  choices: Choice[]
}

// TODO: Use a Map<PromptId, Prompt> here. Slightly complicates the generation of data.ts
export type Prompts = Record<PromptId, Prompt>

export type Unit = Record<string, never>
