export function EscogerModoDeJuego() {
    if (opciones === "1") {
        alert('Haz escogido modo de aventura.')
        ModoAventura();
    } else if (opciones === "2") {
        return alert("Has escogido modo batalla.")
    } else {
        alert("No has escogido una opcion valida. Elige de nuevo.")
        opciones = prompt('Puedes escoger modo aventura y ganar experiencia capturando pokemones, o puedes escoger arena de batalla para luchar con grandes maestros de gimnasio pokemon. Escribe "1" para aventura o "2" para batalla.')
        EscogerModoDeJuego();
    }
}

export function ModoAventura() {
    let initialPokemon = prompt("Tienes tres opciones a escoger: 1. Bulbasaur, 2. Charmander, 3. Squirtle. Escoge el número que corresponda al pokemón que deseas.")
    EvaluarPokemonEscogido();

}

export function EvaluarPokemonEscogido() {
    switch (initialPokemon) {
        case "1":
            alert("Has escogido a Bulbasaur.")
            alert("Bulbasaur cuenta con las siguientes caracteristicas:")
            break;
        case "2":
            alert("Has escogido a Charmander. Sus caracteristicas son:")
            break;
        case "3":
            alert("Has escogido a Squirtle. Sus caracteristicas son:")
            break;
        default:
            alert("No has escogido una opcion valida. Por tanto, el pokemon que te ha tocado es Pikachu. Sus caracteristicas son: " + pikachu)
            break;
    }

}