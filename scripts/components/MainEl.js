import { customCreateElement } from "../lib/customCreateElement.js";

const MainComponent = (parentEl) => {
  const mainContent = `
    <h1>React, hold the React</h1>
    <p>This is a "vanilla" JS app that mimics creating components in React</p>
    `;

  const mainEl = customCreateElement("main", "", {}, mainContent);
  parentEl.append(mainEl);
  return mainEl;
};

export default MainComponent;
