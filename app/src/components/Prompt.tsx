import { h, FunctionComponent } from "preact"
import { PromptId, Prompt as PromptT, Prompts } from "../types"

import { Choice } from "./Choice"
import { Explainer } from "./Explainer"

export interface Props {
  promptId: PromptId
  prompts: Prompts
  fallbackPrompt: PromptT
}

export const Prompt: FunctionComponent<Props> = (
  { promptId, prompts, fallbackPrompt }: Props
) => {
  const promptExists: boolean = Object.prototype.hasOwnProperty.call(prompts, promptId)
  const prompt: PromptT = promptExists ? prompts[promptId] : fallbackPrompt
  const explainer = prompt.explainer

  return <div>
    <h2 className="text-lg font-bold">{prompt.prompt}</h2>
    <ul>{prompt.choices.map(choice =>
      <li className="pt-2">
        <Choice choice={choice} />
      </li>
    )}</ul>
    {explainer && <Explainer explainer={explainer} />}
  </div>
}