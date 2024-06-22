import { customCreateElement } from "../lib/customCreateElement.js";

const ImageListComponent = (parentEl, images) => {
  const imageListEl = customCreateElement("div", "image-list", {}, "");

  images.map((image) => {
    const imgSrc = URL.createObjectURL(image);
    const imageEl = customCreateElement(
      "img",
      "image",
      { id: "src", value: imgSrc },
      ""
    );

    imageListEl.appendChild(imageEl);
  });

  parentEl.append(imageListEl);
};

export default ImageListComponent;
