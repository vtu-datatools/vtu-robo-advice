import { h, FunctionComponent } from "preact"
import { Link } from "preact-router"

import { Choice as ChoiceT } from "../types"

export interface Props {
  choice: ChoiceT
}

export const Choice: FunctionComponent<Props> = (
  { choice: { choiceText, linksTo, linkOut } }: Props
) => {
  const c =
    <div className="
      text-base font-light
      rounded px-2 py-2
      text-gray-200 bg-blue-700
      hover:text-gray-100 hover:bg-blue-600">
      {choiceText}
    </div>

  if (linksTo) {
    return <Link href={`/${linksTo}`}>{c}</Link >
  } else if (linkOut) {
    return <a href={linkOut} target="_blank" rel="noreferrer">{c}</a>
  }
  return <Link>{c}</Link>

}
