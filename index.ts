//console.log('Type Script');


//criando uma função de soma com type script
function soma(a: number, b: number){
    return a + b;
}

console.log(soma(3, 12));

//interfaces
interface IAnimal{
    nome: string;
    tipo: 'terrestre' | 'aquático';
    executarRUgido(alturaEmDecibeis: number): void;
}
const animal: IAnimal = {
    nome: 'Elefante',
    tipo: 'terrestre',
    executarRUgido: (alturaEmDecibeis) => ('${alturaEmDecibeis}dB'),
}

animal.executarRUgido(38);

interface IFelino extends IAnimal{
    visaoNoturna: boolean;
}
const felino: IFelino = {
    nome: 'Leão',
    tipo: 'terrestre',
    visaoNoturna: true,
}