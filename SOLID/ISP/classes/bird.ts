import { Flyable } from "../interfaces/flyable";
import { SoundEmmiter } from '../interfaces/soundEmmiter';

export class Bird implements Flyable, SoundEmmiter {
    fly(): void {
        console.log("I'm flying");
    }
    makeSound(): void {
        console.log("I'm singing");
    }
}