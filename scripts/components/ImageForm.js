import { customCreateElement } from "../lib/customCreateElement.js";
import { state, updateState } from "../lib/state.js";
import ImageListComponent from "./ImageList.js";

const ImageFormComponent = (parentEl) => {
  let imageState = [...state];

  const imageFormInput = `
    <label>
        File Upload
        <input type="file" name="imageUpload" />
    </label>
    <button type="submit">Upload Image</button>
    `;

  const imageFormEl = customCreateElement(
    "form",
    "image-upload",
    {},
    imageFormInput
  );

  const fileInput = imageFormEl.querySelector("input[name='imageUpload']");
  fileInput.addEventListener("change", (e) => {
    const { target } = e;
    const { files } = target;
    imageState = updateState(imageState, files[0]);
  });

  imageFormEl.addEventListener("submit", (e) => {
    e.preventDefault();
    ImageListComponent(parentEl, imageState);
  });

  parentEl.append(imageFormEl);
  return imageFormEl;
};

export default ImageFormComponent;
