import { Bird } from "./classes/bird";
import { Dog } from "./classes/dog";

const dog = new Dog();
const bird = new Bird();

console.log("Dog:");
dog.run();
dog.makeSound();

console.log("Bird:");
bird.fly();
bird.makeSound();
