import { customCreateElement } from "../lib/customCreateElement.js";
import ImageListComponent from "./ImageList.js";

const ImageFormComponent = (parentEl) => {
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

  imageFormEl.addEventListener("submit", (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const file = formData.get("imageUpload");

    ImageListComponent(parentEl, file);
  });

  parentEl.append(imageFormEl);
  return imageFormEl;
};

export default ImageFormComponent;
