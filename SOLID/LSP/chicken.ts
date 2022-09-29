import { Bird } from "./bird";

export class Chicken extends Bird{
    tweet(): void {
        console.log("I'm singing");
    }
}