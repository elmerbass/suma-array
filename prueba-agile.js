
//suma de valores de un array
var numeros = [1, 3, [6, 6, [8], 7], [6], 9, 4];
var juntos = numeros.join(); 						//unir los numeros
var separados = juntos.split(",");   				//["1", "3", "6", "6", "8", "7", "6", "9", "4"]

for (let enteros in separados){
let conjunto = parseInt(separados[enteros]);
var suma = conjunto[0] + conjunto[1] + conjunto[2] + conjunto[3] + conjunto[4] + conjunto[5] + conjunto[6] +conjunto[7] + conjunto[8]

console.log(suma);
}
