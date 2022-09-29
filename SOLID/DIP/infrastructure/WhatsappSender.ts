import { DomainEventPublisher } from '../Domain/DomainEventPublisher';
import { Employee } from '../Domain/Employee';
import { Whatsapp } from "../Domain/Whatsapp";

export class WhatsappSender implements DomainEventPublisher {

    public create(payload: WhatsappPayload): Whatsapp {
        return new Whatsapp(payload.employee.getPhone(), payload.message );
    }

    public send(payload: WhatsappPayload): void {

        const whatsapp: Whatsapp = this.create(payload);

        console.log('Sending Whatsapp to' + whatsapp.getTo() + ' and message: ' + whatsapp.getMessage());
    }


}   

interface WhatsappPayload {
    employee: Employee;
    message: string;
}
