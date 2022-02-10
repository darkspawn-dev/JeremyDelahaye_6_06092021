class Modal {
  elementId = null;

  constructor(elementId) {
    this.elementId = elementId;
    this.modal = document.getElementById(elementId);
    this.style = this.modal.style;
  }

  display() {
    this.style.display = "block";
  }

  close() {
    this.style.display = "none";
  }

  contactName(data) {
    const { name } = data;

    const header = document.querySelector(`#${this.elementId} header h2`);
    header.innerHTML += name;
    return header;
  }
}

const contactModal = new Modal("contact_modal");

function validate() {
  let first = document.getElementById("first").value;
  let last = document.getElementById("last").value;

  let email = document.getElementById("email").value;
  let message = document.getElementById("message").value;
  let error_message = document.getElementById("error_message");

  error_message.style.padding = "5px";

  // verification des champs & validation des champs
  let text;
  if (first.length < 5) {
    text = "Entrer un Prénom valide";
    error_message.innerHTML = text;
    return false;
  }
  if (last.length < 8) {
    text = "Entrer un Nom valide";
    error_message.innerHTML = text;
    return false;
  }

  if (email.indexOf("@") == -1 || email.length < 6) {
    text = "Entrer une Email valide";
    error_message.innerHTML = text;
    return false;
  }
  if (message.length <= 100) {
    text = "Entrer minimum 100 caractere";
    error_message.innerHTML = text;
    return false;
  }
  alert("Form Submitted Successfully!");
  return true;
}
