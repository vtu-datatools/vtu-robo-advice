import "tailwindcss/tailwind.css";
import { h, FunctionalComponent } from "preact";
import { Route, Router } from "preact-router";

import { PROMPTS, DEFAULT_PROMPT } from "./data";

import { Prompt, Props as PromptProps } from "./components/Prompt";
import { Home } from "./components/Home";

const App: FunctionalComponent = () => {
  return (
    <div>
      <header
        className="
          px-4 py-3 bg-blue-900 shadow-xl
          text-3xl text-gray-100"
      >
        <a href="/">VTU - Tenant Advice</a>
      </header>
      <div className="h-screen px-8 py-2">
        <div className="pb-2">
          <Router>
            <Route<PromptProps> path="/" component={Home} />
            <Route<PromptProps>
              path="/:promptId"
              component={Prompt}
              prompts={PROMPTS}
              fallbackPrompt={DEFAULT_PROMPT}
            />
          </Router>
        </div>
      </div>
    </div>
  );
};

export default App;
