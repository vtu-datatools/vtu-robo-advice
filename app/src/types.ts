export type Prompts = Record<PromptId, Prompt>
export type PromptId = string
export type URL = string

export interface Prompt {
  id: PromptId,
  prompt: string,
  explainer?: Explainer,
  choices: Choice[],
}

export interface Explainer {
  text: string,
  link: URL,
}

export interface Choice {
  choice: string,
  link: Link,
  tooltip?: string,
}

type Link = ExternalLink | InternalLink

interface ExternalLink {
  external: URL,
}

interface InternalLink {
  internal: PromptId,
}
