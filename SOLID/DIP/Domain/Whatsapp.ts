export class Whatsapp {
    private to: number;
    private message: string;

    constructor(to: number, message: string) {
        this.to = to;
        this.message = message;
    }
        

    public getTo(): number {
        return this.to;
    }

    public getMessage(): string {
        return this.message;
    }
}