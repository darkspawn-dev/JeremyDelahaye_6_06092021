/* La classe Modal est utilisée pour créer une fenêtre modale */
export class Modal {
  elementId = null;

  constructor(elementId) {
    this.elementId = elementId;
    this.modal = document.getElementById(elementId);
    this.style = this.modal.style;
  }

  display() {
    this.style.display = "block";
    document.addEventListener("keyup", (e) => {
      if(e.key === "Escape") {
        this.style.display = "none";
      }
    })
    document.getElementById('first').focus();
  }

  close() {
    this.style.display = "none";
  }
  /**
 * *Ajoutez le nom du contact à l'élément d'en-tête.*
 * @param data - Les données transmises à la fonction de rappel.
 * @returns Rien.
 */

  contactName(data) {
    const { name } = data;

    const header = document.querySelector(`#${this.elementId} header h2`);
    header.innerHTML += name;
    return header;
  }



/* Le code ci-dessus valide le formulaire. */
  validate() {
    let first = document.getElementById("first").value;
    let last = document.getElementById("last").value;

    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;
    let error_message = document.getElementById("error_message");

    error_message.style.padding = "5px";

    let text;
    if (first.length < 5) {
      text = "Entrer un Prénom valide";
      error_message.innerHTML = text;
      return false;
    } else {
      console.log("Nom:", first);
    }
    if (last.length < 8) {
      text = "Entrer un Nom valide";
      error_message.innerHTML = text;
      return false;
    } else {
      console.log("Prénom:", last);
    }
    if (email.indexOf("@") == -1 || email.length < 6) {
      text = "Entrer une Email valide";
      error_message.innerHTML = text;
      return false;
    } else {
      console.log("Email:", email);
    }
    if (message.length <= 10) {
      text = "Entrer minimum 10 caracteres";
      error_message.innerHTML = text;
      return false;
    } else {
      console.log("Message:", message);
    }
    document.getElementById('contact').reset();
    document.getElementById("error_message").remove();
    console.log("Form Submitted Successfully!");
    return true;
  }
}


