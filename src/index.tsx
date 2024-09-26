/* @refresh reload */
import { render } from "solid-js/web";

import "./index.css";

const root = document.getElementById("root");
const shadowRootWrapper = document.getElementById("shadowRoot");

if (import.meta.env.DEV && !(root instanceof HTMLElement)) {
  throw new Error(
    "Root element not found. Did you forget to add it to your index.html? Or maybe the id attribute got misspelled?"
  );
}

export const shadowRoot = shadowRootWrapper.attachShadow({ mode: "open" });

render(
  () => (
    <div style="padding:8px;border:1px solid black;">
      <span style="margin:8px">in shadow root</span>
      <button style="margin:8px" onFocusIn={() => console.log(1)}>Click first (not working)</button>
      <button onFocusIn={() => console.log(2)}>Click second (not working)</button>
    </div>
  ),
  shadowRoot
);

render(
  () => (
    <div style="padding:8px;border:1px solid black;">
      <span style="margin:8px">in normal DOM</span>
      <button style="margin:8px" onFocusIn={() => console.log(1)}>Click first (working)</button>
      <button onFocusIn={() => console.log(2)}>Click second (working)</button>
    </div>
  ),
  root!
);
