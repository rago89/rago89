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

export const contactMe = () => {
  const contactMeSection = document.createElement("section");
  contactMeSection.id = "contact-me";
  const h2El = document.createElement("h2");
  h2El.innerHTML = "Contact me";
  contactMeSection.appendChild(h2El);

  const form = document.createElement("form");
  form.className = "contact-form";
  form.action = "https://formsubmit.co/rago89@gmail.com";
  form.method = "POST";

  form.appendChild(inputForm("text", "name", "Name", true));
  form.appendChild(
    inputForm("hidden", "_subject", "Name", "New Email from portfolio")
  );
  form.appendChild(inputForm("email", "email", "Email", true));
  form.appendChild(inputForm("text", "company", "Company"));

  const message = document.createElement("textarea");
  message.placeholder = "Message";
  message.id = "message";

  form.appendChild(message);

  const submitBtn = document.createElement("input");
  submitBtn.type = "submit";
  submitBtn.value = "send";

  form.appendChild(submitBtn);

  const img = document.createElement("img");
  img.src = "client/public/images/hiclipart.com.png";
  img.alt = " javaScript";
  contactMeSection.appendChild(form);
  contactMeSection.appendChild(img);

  return contactMeSection;
};
