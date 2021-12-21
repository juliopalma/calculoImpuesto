export class Cliente {

    //Constructor
    constructor(nombre, impuesto) {
        this.nombre = nombre;
        this.impuesto = impuesto;
    }

    //Métodos getter y setter
    getNombre() {
        return this.nombre;
    }

    setNombre(nombre) {
        return this.nombre = nombre;
    }

    //Método para calcular el impuesto
    calcularImpuesto() {
        const monto_bruto_anual = this.impuesto.get_monto_bruto_anual();
        const deducciones = this.impuesto.get_deducciones();
        return (monto_bruto_anual - deducciones) * 21 / 100;
    }
}