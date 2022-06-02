import {answer, nombreMaestro} from './variables.js.js'

export function ValidarNombre() {
    if (answer == "s" || decision == "S") {
        return alert (nombreMaestro + ' es momento de escoger que quieres hacer.');
    } else if(answer=="n" || decision == "N" ){
        nombreMaestro = prompt('Escribe tu nombre de maestro pokemon:');
        answer = prompt(`Tu nombre de maestro pokemon elegido para esta aventura es: ` + nombreMaestro + ' ¿Estás de acuerdo? s/n');
        ValidarNombre();
    }else{
        alert('Has escrito una opcion no valida.')
        ValidarNombre();
    }
        
    
}
/* 
const ValidarMaestro = new ValidarMaestro(function(resolver, rechazar) {

 
}); */