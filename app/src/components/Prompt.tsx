import { h, FunctionComponent } from "preact";
import { PromptId, Prompt as PromptT, Prompts } from "../types";

import { Choice } from "./Choice";
import { Explainer } from "./Explainer";

export interface Props {
  promptId: PromptId;
  prompts: Prompts;
  fallbackPrompt: PromptT;
}

export const Prompt: FunctionComponent<Props> = ({
  promptId,
  prompts,
  fallbackPrompt,
}: Props) => {
  const promptExists: boolean = Object.prototype.hasOwnProperty.call(
    prompts,
    promptId
  );
  const prompt: PromptT = promptExists ? prompts[promptId] : fallbackPrompt;
  const explainer = prompt.explainer;

  return (
    <div className="pb-2">
      <h2 className="text-lg font-bold">{prompt.prompt}</h2>
      <ul>
        {prompt.choices.map((choice) => (
          <li className="pt-2">
            <Choice choice={choice} />
          </li>
        ))}
      </ul>
      {explainer && <Explainer explainer={explainer} />}
      <div className="flex justify-center pt-4">
        <a
          href="/"
          className="
              text-base text-center
              rounded px-6 py-2
              text-gray-200 bg-blue-900
              hover:text-gray-100 hover:bg-blue-800"
        >
          To Start
        </a>
      </div>
    </div>
  );
};
