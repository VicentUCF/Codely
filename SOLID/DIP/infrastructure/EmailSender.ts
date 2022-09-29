import { Email } from "../Domain/Email";
import { DomainEventPublisher } from '../Domain/DomainEventPublisher';
import { Employee } from '../Domain/Employee';

export class EmailSender implements DomainEventPublisher {

    public create(payload: EmailPayload): Email {

        const to: string = payload.employee.getEmail();
        const subject: string = payload.subject ?? 'Default subject';
        const message: string = payload.message;

        return new Email(to, subject, message);
    }

    public send(payload: EmailPayload): void {

        const email: Email = this.create(payload);

        console.log('Sending email to: ' + email.getTo() + ' with subject: ' + email.getSubject() + ' and message: ' + email.getMessage());
    }


}   

interface EmailPayload {
    employee: Employee;
    subject: string;
    message: string;
}
