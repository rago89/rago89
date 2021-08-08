export const socialContact = (obj) => {
  const anchor = document.createElement("a");
  anchor.className = obj.class;
  anchor.href = obj.href;

  const img = document.createElement("img");
  img.src = obj.src;
  img.alt = obj.alt;

  anchor.appendChild(img);

  return anchor;
};
