import { router } from "../../init/router.js";

const inputForm = (type, id, text, boolean = false) => {
  const div = document.createElement("div");
  const input = document.createElement("input");
  input.placeholder = text;
  input.id = id;
  input.name = id;
  input.type = type;
  input.required = boolean;
  div.appendChild(input);
  return div;
};

const inputFormHidden = (type, name, value) => {
  const div = document.createElement("div");
  const input = document.createElement("input");
  input.name = name;
  input.type = type;
  input.value = value;
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
  form.action = "6c917af94c93c5226a714654bd1dc78e";
  form.method = "POST";

  form.appendChild(inputForm("text", "name", "Name", true));
  form.appendChild(
    inputFormHidden("hidden", "_subject", "New Email from portfolio")
  );
  const thanksRoute = router.navigate("thanks");
  form.appendChild(inputFormHidden("hidden", "_next", thanksRoute));
  form.appendChild(inputForm("email", "email", "Email", true));
  form.appendChild(inputForm("text", "company", "Company"));

  const divMessage = document.createElement("div");
  const message = document.createElement("textarea");
  message.placeholder = "Message";
  message.id = "message";

  divMessage.appendChild(message);
  form.appendChild(divMessage);

  const submitBtn = document.createElement("input");
  submitBtn.type = "submit";
  submitBtn.value = "send";
  submitBtn.className = "submit";

  form.appendChild(submitBtn);

  const img = document.createElement("img");
  img.src = "client/public/images/hiclipart.com.png";
  img.alt = " javaScript";
  contactMeSection.appendChild(form);
  contactMeSection.appendChild(img);

  return contactMeSection;
};
