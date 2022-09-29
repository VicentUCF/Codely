import { Bird } from "./bird";

export class Eagle extends Bird{
    tweet(): void {
        console.log("I'm singing");
    }
    hunt(): void {
        console.log("I'm hunting");
    }
}