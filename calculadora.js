alert("¡Hola! \nVamos a calcular tu promedio");
const name = prompt("¿Cuál es tu nombre?");
const materia = prompt("Ingresa el nombre de la materia");
let nota1 = parseInt(prompt("Ingresa tu primera nota.\nRecuerda que la nota ingresada debe estar en el rango de 0 a 10"));
let nota2 = parseInt(prompt("Ingresa tu segunda nota.\nRecuerda que la nota ingresada debe estar en el rango de 0 a 10"));
let nota3 = parseInt(prompt("Ingresa tu tercera nota.\nRecuerda que la nota ingresada debe estar en el rango de 0 a 10"));
if (isNaN (nota1) || isNaN (nota2) || isNaN (nota3)) {
    alert("Las notas ingresadas no son válidas \nVuelve a intentarlo :)");
} else if (nota1 <= 10 && nota1 >= 0 && nota2 <= 10 && nota2 >= 0 && nota3 <= 10 && nota3 >= 0) {
        let promedio = ((nota1 + nota2 + nota3)/3);
        if (promedio >=7) {
            console.log(`${name}, ¡felicidades! \nHas aprobado con un promedio de ${promedio}`);
        } else {
            console.log(`${name}, gracias por tu esfuerzo. Nos vemos pronto en clase. El promedio obtenido es ${promedio}`);
        }
        
}

