//console.log('Type Script');


//criando uma função de soma com type script
//function soma(a: number, b: number){
//    return a + b;
//}

//console.log(soma(3, 12));

//interfaces
//interface IAnimal{
//    nome: string;
//    tipo: 'terrestre' | 'aquático';
//    executarRUgido(alturaEmDecibeis: number): void;
//}

//const animal: IAnimal = {
//    nome: 'Elefante',
//    tipo: 'terrestre',
//    executarRUgido: (alturaEmDecibeis) => ('${alturaEmDecibeis}dB'),
//}

//animal.executarRUgido(38);

//interface IFelino extends IAnimal{
//   visaoNoturna: boolean;
//}
//const felino: IFelino = {
//    nome: 'Leão',
//    tipo: 'terrestre',
//    visaoNoturna: true,
//    executarRUgido(alturaEmDecibeis) {
//        return 89;
//    },
//}

//types
//une diferentes tipos de interfaces
//interface IIAnimal {
//   domestico: boolean;
//    nome: string;
//    tipo: 'terrestre' | 'aquático';
//}

//interface IIFelino extends IIAnimal{
//    visaoNoturna: boolean;
//}

//interface IICanino extends IIAnimal{
//    porte: 'pequeno' | 'medio' | 'grande';
//}

//type IDomestico = IIFelino | IICanino;

//const animal1: IDomestico = {
//    domestico: true,
//    nome: 'Cachorro',
//    porte: 'medio',
//    tipo: 'terrestre',   
//}

//type IIDomestico = IIFelino & IICanino;

//const animal2: IDomestico = {
//    domestico: true,
//    nome: 'Cachorro',
//    porte: 'medio',
//    tipo: 'terrestre',
//    visaoNoturna: false,   
//}

const input = document.getElementById('input') as HTMLInputElement;
input.addEventListener('input', (event) => {
    const i = event.currentTarget as HTMLInputElement;
    console.log(i.value);
});