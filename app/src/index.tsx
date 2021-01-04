import "tailwindcss/tailwind.css"
import { h, FunctionalComponent } from "preact"
import { Route, Router } from 'preact-router';

import { PROMPTS, DEFAULT_PROMPT } from "./data";

import { Prompt, Props as PromptProps } from "./components/Prompt"

const App: FunctionalComponent = () => {
  return (
    <div>
      <header
        className="
          px-4 py-3 bg-blue-900 shadow-xl
          text-3xl text-gray-100">
        VTU - Tenant Advice
      </header>
      <div className="h-screen px-8 py-2 bg-blue-400">
        <div className="text-2xl text-center pb-2">Navigate Your Eviction</div>
        <div className="pb-2">
          <Router>
            <Route<PromptProps> path="/" component={Prompt} prompts={PROMPTS} promptId="rta" />
            <Route<PromptProps> path="/:promptId" component={Prompt} prompts={PROMPTS} fallbackPrompt={DEFAULT_PROMPT} />
          </Router>
        </div>
        <div class="flex justify-center">
          <div className="
            text-base text-center
            rounded px-2 py-2 w-1/5
            text-gray-200 bg-blue-900">
            Back To Start
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
