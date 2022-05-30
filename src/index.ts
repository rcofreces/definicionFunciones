function dibujarGuionesv1() {
  let linea: string = "-";
  for (let x: number = 1; x <= 30; x++) {
    linea += "-"; // linea = linea + "-"
  }
  console.log(linea);
}
function dibujarGuionesv2(cantidad: number) {
  let linea: string = "-";
  for (let x: number = 1; x <= cantidad; x++) {
    linea += "-"; // linea = linea + "-"
  }
  console.log(linea);
}
function dibujarGuionesv3(cantidad: number): string {
  let linea: string = "-";
  for (let x: number = 1; x <= cantidad; x++) {
    linea += "-"; // linea = linea + "-"
  }
  return linea;
}
console.log("Dibuja linea de 30 guiones");
dibujarGuionesv1();
console.log("Dibuja guiones recibiendo la cantidad de lineas por parametro");
dibujarGuionesv2(Number(prompt("Ingrese la cantidad de guiones")));
dibujarGuionesv2(45);
console.log(
  "Dibuja guiones recibiendo la cantidad de lineas por parametro con retorno"
);
let lineasAImprimir = dibujarGuionesv3(45);
console.log(lineasAImprimir);
