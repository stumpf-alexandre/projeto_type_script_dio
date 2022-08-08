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

//const input = document.getElementById('input') as HTMLInputElement;
//input.addEventListener('input', (event) => {
//    const i = event.currentTarget as HTMLInputElement;
//    console.log(i.value);
//});

//Generic types
function adicionaApendiceALista <T>(array: any[], valor: T){
    return array.map(item => item + valor);
}
//neste caso tanto faz se os dados forem numeros ou strings
adicionaApendiceALista([1, 2, 3], 1);
adicionaApendiceALista(['A', 'B', 'C'], 'A');
adicionaApendiceALista(['A', 'B', 3], 5);

function adicionaApendiceALista1 <T>(array: T[], valor: T){
    return array.map(() => valor);
}
//neste caso só aceita se for tudo igual
adicionaApendiceALista1([1, 2, 3], 1);
adicionaApendiceALista1(['A', 'B', 'C'], 'D');
//adicionaApendiceALista1([1, 2, 3], 'D');deu erro