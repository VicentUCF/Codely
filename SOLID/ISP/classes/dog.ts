import { Runnable } from '../interfaces/runnable';
import { SoundEmmiter } from '../interfaces/soundEmmiter';
export class Dog implements Runnable, SoundEmmiter{
    run(): void {
        console.log("I'm running");
    }
    makeSound(): void {
        console.log("I'm barking");
    }
}