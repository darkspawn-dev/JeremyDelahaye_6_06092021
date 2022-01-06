function displayModal() {
    const modal = document.getElementById("contact_modal");
    modal.style.display = "block";

}

function closeModal() {
    const modal = document.getElementById("contact_modal");
    modal.style.display = "none";
}

function contactName(data) {
    const { name } = data

    let header = document.querySelector('.modal header h2');
    header.innerHTML += name;
    return (header)
}