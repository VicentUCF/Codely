export interface DomainEventPublisher {
    send(payload: any): void;
    create(payload: any): void;
}