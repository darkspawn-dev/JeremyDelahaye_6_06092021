/* Création d'une fenêtre modale. */
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
 * @returns String.
 */
  contactName(data) {
    const { name } = data;

    const header = document.querySelector(`#${this.elementId} header h2`);
    header.innerHTML += name;
    return header;
  }

 /**
  * Il valide le formulaire et renvoie vrai ou faux.
  * @returns boolean.
  */
  validate() {
    let first = document.getElementById("first").value;
    let last = document.getElementById("last").value;

    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;
    let error = document.getElementById("error");


    // error.style.padding = "5px";

    let text;
    if (first.length < 3) {
      text = "Veuillez saisir 3 caractères minimum";
      error.innerHTML = text;
      return false;
    }
 
    if (last.length < 4) {
      text = "Veuillez saisir 4 caractères minimum";
      error.innerHTML = text;
      return false;
    } 
    if (email.indexOf("@") == -1 || email.length < 6) {
      text = "Entrer une Email valide";
      error.innerHTML = text;
      return false;
    }
    if (message.length <= 5) {
      text = "Entrer minimum 5 caracteres";
      error.innerHTML = text;
      return false;
    } 

    document.getElementById('contact').reset();
    error.innerHTML = "";
    console.log("Nom:", first);
    console.log("Prénom", last);
    console.log("Mail", email);
    console.log("Message:", message);
    console.log("Form Submitted Successfully!");
    
    return true;
    
  }
}


