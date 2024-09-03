export class predio{
    quantAndares: number;
    tipo: string;
    anoConstrucao: number;
    quantApartamentos: number;
    metragemPredio: number;
    metragemPredioTerreno: number;
    quantMoradoresPredio: number;
}

export class apartamento extends predio { 
    metragemApartamento: number;
    quantMoradoresApartamento: number;
    varanda: boolean;
}