export class Impuesto {

    //Constructor
    constructor(monto_bruto_anual, deducciones) {
        this.monto_bruto_anual = monto_bruto_anual;
        this.deducciones = deducciones;
    }

    //Métodos getter y setter
    get_monto_bruto_anual() {
        return this.monto_bruto_anual;
    }

    set_monto_bruto_anual(monto_bruto_anual) {
        return this.monto_bruto_anual = monto_bruto_anual;
    }

    get_deducciones() {
        return this.deducciones;
    }

    set_deducciones(deducciones) {
        return this.deducciones = deducciones;
    }
}