function agregarAlumno(){
    let nombreAlumno = prompt ("Eliga el nombre del alumno");
    let notaAlumno = prompt ("Eliga la nota para ese alumno");
    console.log(nombreAlumno + " sacó " + notaAlumno);
}


function iniciar(){
    while(true){
        let opcion = prompt("1. Agregar alumno / n2. Salir / Seleccione una opcion:");
    
        if (opcion === "1"){
            agregarAlumno();
        }else if (opcion === "2"){
            console.log("Saliendo del programa..");
            break;
        }else {
            console.log ("Opcion no valida.");
        }
        
    }
    let continuar = prompt("¿Quieres agregar otro alumno? (S/N)");
        if (continuar == "S"){
            iniciar();
        }else {
            alert("Saliendo del programa..");
        }
}


alert ("Acá prodras ingresar nombre y notas de alumnos");
iniciar();

