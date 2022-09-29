import { EmployeeRepository } from '../interfaces/EmployeeRepsitory';
import { Clock, MonthDay } from '../ExternalDependencies/Clock';
import { Employee } from './Employee';
import { Email } from './Email';
import { EmailSender } from './EmailSender';

export class BirthDayGreeter {
    private employeeRepository: EmployeeRepository;
    private clock: Clock;

    public BirthdayGreeter(employeeRepository: EmployeeRepository, clock: Clock) {
        this.employeeRepository = employeeRepository;
        this.clock = clock;
    }

    public sendGreeting(){
        const today: MonthDay = this.clock.MonthDay();
    
        this.employeeRepository.findEmployeesBornOn(today)
        .map((employee: Employee) => {
            return this.emailFor(employee);
        })
        .forEach((email: Email): void => {
                new EmailSender().send(email);
        })

    }


    private emailFor(employee: Employee): Email {
        // send email
        const message: string = `Happy birthday, dear ${employee.getFirstName()}`;
        return new Email(employee.getEmail(), "Happy birthday!", message);
    }

}