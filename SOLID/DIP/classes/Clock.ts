export class Clock{
    public MonthDay(): MonthDay {
        return new Date().getMonth();
    }
}

export type MonthDay = number;