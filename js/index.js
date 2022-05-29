const form = document.getElementById("formulario");
const nameValidation = document.getElementById("name_validation")
    /* El oninput es una validacion en tiempo real al momento que el usuario escribe */
form.oninput = (event) => {
    event.preventDefault()
    const nameInput = event.target.name
    const name = nameInput.value

    const nameRegex = new RegExp(/^[A-Za-zÁÉÍÓÚÑáéíóúñ]{3,25}$/) // Verifica que el nombre solo tenga letras

    if (nameRegex.test(name)) {
        nameValidation.innerText = "El nombre es correcto👍"
        var masterName = nameInput;
    } else {
        nameValidation.innerText = "❌ No puede contener números, ni símbolos ni espacios."
    }
}

console.log(masterName)
    /* con esto obtenemos los id de cada pokemon cuando el usuario lo escoja */
document.querySelectorAll(".character-details").forEach(el => {
    el.addEventListener("click", e => {
        const id = e.target.getAttribute("id");
        alert(`Se ha clickeado el id ${id}`);
    });
});