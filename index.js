const compraDolarOficial = 205.50;
const ventaDolarOficial = 197.50;

let ventaOficialConImpuestos = ventaDolarOficial * 1.30 * 1.45;

const compraDolarBlue = 375;
const ventaDolarBlue = 371;

let nombreCliente = prompt("Ingrese su nombre y apellido");
const operacion = parseInt(prompt("Escriba el numero de la opcion elegida: 1. Quiero comprar dolares - 2. Quiero vender dolares"));


if(operacion===1){
    alert("Hola " + nombreCliente + ". El cotización del dólar oficial con sus impuestos incluídos es $" + ventaOficialConImpuestos + " y la cotización del dólar blue es $" + ventaDolarBlue)

    let montoAComprar = parseFloat(prompt("Ingrese la suma de pesos que desea cambiar"))
    function compra (montoAComprar,ventaDolarBlue){
        let compraDolares = montoAComprar / ventaDolarBlue
        alert(nombreCliente + ", puede comprar un total de USD" + compraDolares)
    }
} else if(operacion===2){
    alert("Hola " + nombreCliente + ". El cotización del peso oficial es USD" + compraDolarOficial + " y la cotización del peso blue es USD" + ventaDolarBlue)

    let montoAVender = parseFloat(prompt("Ingrese la suma de dólares que desea cambiar"))
    function venta (montoAVender,compraDolarBlue){
        let ventaDolares = montoAVender * compraDolarBlue
        alert(nombreCliente + ", usted debe recibir un total de $" + ventaDolares)
    }  
} else{
    alert ("Hola " + nombreCliente + ", ingrese una opción correcta.")
}