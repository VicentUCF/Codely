import { Chicken } from './chicken';
import { Eagle } from './eagles';

console.log('Gallina:')
const chicken = new Chicken
chicken.tweet()
chicken.hunt()

console.log('Aqui hay una violacion de LSP porque el pollo no puede cazar en cambio el aguila si');

console.log('Aguila:');
const eagle = new Eagle();
eagle.tweet()
eagle.hunt()