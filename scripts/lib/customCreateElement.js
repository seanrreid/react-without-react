const isEmpty = (obj) => Object.keys(obj).length === 0;

export const customCreateElement = (
  el,
  className = "",
  attributes = {},
  content = ""
) => {
  const newEl = document.createElement(el);
  !!className && newEl.classList.add(className);
  !isEmpty(attributes) && newEl.setAttribute(attributes.id, attributes.value);
  !!content && (newEl.innerHTML = content);

  return newEl;
};
