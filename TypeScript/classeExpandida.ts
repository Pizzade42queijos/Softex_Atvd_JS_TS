export class Predio{
    public quantAndares: number;
    public tipo: string;
    public anoConstrucao: number;
    public quantApartamentos: number;
    readonly metragemPredio: number;
    readonly metragemPredioTerreno: number;
    readonly quantMoradoresPredio: number;

    constructor(quantAndares: number, tipo: string, anoConstrucao: number, quantApartamentos: number, metragemPredio: number, metragemPredioTerreno: number, quantMoradoresPredio: number){
        this.quantAndares = quantAndares;
        this.tipo = tipo;
        this.anoConstrucao = anoConstrucao;
        this.quantApartamentos = quantApartamentos;
        this.metragemPredio = metragemPredio;
        this.metragemPredioTerreno = metragemPredioTerreno;
        this.quantMoradoresPredio = quantMoradoresPredio;
    }

}

export class Apartamento extends Predio { 
    readonly metragemApartamento: number;
    private quantMoradoresApartamento: number; 
    readonly varanda: boolean;
    private moradores: []; 

    constructor(metragemApartamento: number,quantMoradoresApartamento: number,varanda: boolean,moradores:[],quantAndares: number, tipo: string, anoConstrucao: number, quantApartamentos: number, metragemPredio: number, metragemPredioTerreno: number, quantMoradoresPredio: number){
        super(quantAndares, tipo, anoConstrucao, quantApartamentos, metragemPredio, metragemPredioTerreno, quantMoradoresPredio);
        this.metragemApartamento=metragemApartamento;
        this.quantMoradoresApartamento=quantMoradoresApartamento;
        this.varanda = varanda;
        this.moradores = moradores;

    }

    get quantMoradoresAp(): number{
        return this.quantMoradoresApartamento;
    }

    get moradoresLista(): []{
        return this.moradores;
    }
}

export class Morador extends Apartamento{
    private idade: number; 
    private sexo: string; 

    constructor(metragemApartamento: number,quantMoradoresApartamento: number,varanda: boolean,moradores:[],quantAndares: number, tipo: string, anoConstrucao: number, quantApartamentos: number, metragemPredio: number, metragemPredioTerreno: number, quantMoradoresPredio: number, idade: number, sexo: string){
        super(metragemApartamento, quantMoradoresApartamento, varanda, moradores, quantAndares, tipo, anoConstrucao, quantApartamentos, metragemPredio, metragemPredioTerreno, metragemPredioTerreno);
    }

    get idadeGetter(): number{
        return this.idade;
    }

    get sexoGetter(): string{
        return this.sexo;
    }
}

let predio1 = new Predio(12,"comercial",1981,40,60,120,12);

console.log(predio1);
