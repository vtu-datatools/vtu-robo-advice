import { h, FunctionComponent } from "preact"

import { Explainer as ExplainerT } from "../types"

export interface Props {
  explainer: ExplainerT
}

export const Explainer: FunctionComponent<Props> = (
  { explainer: { text, link } }: Props
) =>
  <div className="py-2">
    <h3 className="text-md font-bold">Explainer</h3>
    <div className="px-2 py-2">
      {text}
      <span> </span>
      {link &&
        <span className="
              text-base text-center
              rounded px-1 py-1 w-1/5
              text-gray-200 bg-blue-600
            ">
          <a href={link} target="_blank" rel="noreferrer">
            More Info
              </a>
        </span>
      }
    </div>
  </div>
