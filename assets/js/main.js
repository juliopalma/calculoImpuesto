//Clases
import { Cliente } from "./cliente.js";
import { Impuesto } from "./impuesto.js";

//Inputs
let valInputNombre = document.querySelector("#idNombre");
let valInputMonto = document.querySelector("#idMonto");
let valInputDeducciones = document.querySelector("#idDeducciones");
let valInputImpuesto = document.querySelector("#idImpuesto");

//Submit de formulario
$('form').on('submit', function(ev) {
    ev.preventDefault();

    // Calculo de Impuesto Anual
    let monto_bruto_anual = parseInt(valInputMonto.value);
    let deducciones = parseInt(valInputDeducciones.value);

    const imp = new Impuesto(monto_bruto_anual, deducciones);
    const cliente = new Cliente("Julio", imp);

    const impuesto_final = cliente.calcularImpuesto();

    $(valInputImpuesto).attr("value", impuesto_final);

    // Información del Cliente
    $("#spanNombre").html(`<h4><b> Hola: </b>${valInputNombre.value} </h4><br>`);
    $("#spanMontoBruto").html(`<h4><b> El monto bruto ingresado es: </b> ${valInputMonto.value} <h4><br>`);
    $("#spanDeducciones").html(`<h4><b> La deducción es: </b> ${valInputDeducciones.value} <h4><br>`);
    $("#spanImpuesto").html(`<h4><b>El resultado del cálculo del impuesto es: </b> ${impuesto_final}`);

});