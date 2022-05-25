/* con esto obtenemos los id de cada pokemon cuando el usuario lo escoja */
document.querySelectorAll(".character-details").forEach(el => {
    el.addEventListener("click", e => {
        const id = e.target.getAttribute("id");
        alert(`Se ha clickeado el id ${id}`);
    });
});