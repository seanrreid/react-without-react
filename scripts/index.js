import { rootEl } from "./lib/constants.js";
import MainComponent from "./components/MainEl.js";
import ImageFormComponent from "./components/ImageForm.js";

document.addEventListener("DOMContentLoaded", (e) => {
  console.log("DOM Ready");
  const MainEl = MainComponent(rootEl);
  ImageFormComponent(MainEl);
});
