const inputForm = (id, text) => {
  const div = document.createElement("div");
  const input = document.createElement("input");
  input.id = id;
  input.value = text;
  div.appendChild(input);
  return div;
};

export const contactMe = () => {
  const contactMeSection = document.createElement("section");
  contactMeSection.id = "contact-me";
  const h2El = document.createElement("h2");
  h2El.innerHTML = "Contact me";
  contactMeSection.appendChild(h2El);

  const form = document.createElement("form");
  form.className = "contact-form";

  form.appendChild(inputForm("name", "Name"));
  form.appendChild(inputForm("email", "Email"));
  form.appendChild(inputForm("company", "Company"));
  form.appendChild(inputForm("message", "Message"));

  const submitBtn = document.createElement("button");
  submitBtn.type = "submit";
  submitBtn.name = "button";
  submitBtn.innerHTML = "Submit";
  form.appendChild(submitBtn);

  const img = document.createElement("img");
  img.src = "client/public/images/hiclipart.com.png";
  img.alt = " javaScript";
  contactMeSection.appendChild(form);
  contactMeSection.appendChild(img);

  return contactMeSection;
};
