import { Email } from "./Email";

export class EmailSender {
    public send(email: Email) {
        console.log(`Sending email to ${email.getTo()} with subject ${email.getSubject()} and message ${email.getMessage()}`);
    }
}