let sueldo12: number = Number(prompt("ingrese su sueldo mensual"));
//ingreso por teclado un numero sin puntos
let total3: number;
//declaro la variable total para mostrar el resultado
switch (true) {
  case sueldo12 > 0 && sueldo12 <= 15000:
    //en caso de que el sueldo sea entre 0 y 15000
    total3 = sueldo12 * 1.2;
    // la variable total cambia agregando el 20 porciendo al sueldo ingresado
    console.log("su sueldo actualizado es de ", total3);
    //  muestra un mensaje al usuario con el sueldo actualizado
    break;
  case sueldo12 >= 15001 && sueldo12 <= 20000:
    //en caso de que el sueldo sea entre 15001 y 20000
    total3 = sueldo12 * 1.1;
    // la variable total cambia agregando el 10 porciendo al sueldo ingresado
    console.log("su sueldo actualizado es de ", total3);
    //  muestra un mensaje al usuario con el sueldo actualizado
    break;
  case sueldo12 <= 25000:
    //en caso de que el sueldo menor a 25000
    total3 = sueldo12 * 0.05 + sueldo12;
    // la variable total cambia agregando el 5 porciendo al sueldo ingresado
    console.log("su sueldo actualizado es de ", total3);
    // muestra un mensaje al usuario con el sueldo actualizado
    break;
  default:
    // en  su defecto
    console.log("su sueldo sin aumento es de:", sueldo12);
    // muestra el mensaje al usuario sin aumento de sueldo
    break;
}
