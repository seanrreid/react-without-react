import { customCreateElement } from "../lib/customCreateElement.js";

const ImageListComponent = (parentEl, image) => {
  const imgSrc = URL.createObjectURL(image);
  const imageEl = customCreateElement(
    "img",
    "image",
    { id: "src", value: imgSrc },
    ""
  );
  const imageListEl = customCreateElement("div", "image-list", {}, "");
  imageListEl.appendChild(imageEl);
  parentEl.append(imageListEl);
};

export default ImageListComponent;
