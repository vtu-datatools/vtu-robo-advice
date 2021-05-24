import { h, FunctionComponent } from "preact";

import { Explainer as ExplainerT } from "../types";

export interface Props {
  explainer: ExplainerT;
}

export const Explainer: FunctionComponent<Props> = ({
  explainer: { text, link },
}: Props) => (
  <div className="pt-4">
    <h3 className="text-md font-bold">Explainer</h3>
    <div className="pt-2">{text}</div>
    {link && (
      <div className="flex justify-center pt-2">
        <a
          href={link}
          target="_blank"
          rel="noreferrer"
          className="
            text-base text-center
            rounded px-8 py-2 w-4/5
            text-gray-200 bg-blue-700
            hover:text-gray-100 hover:bg-blue-600
          "
        >
          More Info
        </a>
      </div>
    )}
  </div>
);
