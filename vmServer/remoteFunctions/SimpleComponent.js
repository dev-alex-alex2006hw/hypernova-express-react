import React from "react";
import { renderReact } from "hypernova-react";

let meme = 25;

const MyComponent = ({ name }) => {
  return (
    <div onClick={() => alert("Click handlers work.")}>
      Hello, {meme++}, {name}!
    </div>
  );
};

// patched version of hypernova to support both the following cases
// export function by name
export const SimpleComponent = renderReact("SimpleComponent", MyComponent);

// export single default function for component
export default renderReact("SimpleComponent", MyComponent);
