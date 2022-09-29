import { BirthDayGreeter } from './Application/BirthDayGreeter';
import { EmailSender } from './infrastructure/EmailSender';
import { EmployeeRepositoryLocal } from './Domain/EmployeeRepositoryLocal';
import { WhatsappSender } from './infrastructure/WhatsappSender';
//Felicitar Empleados


const emailSender = new EmailSender();
const employeeRepository = new EmployeeRepositoryLocal();
const watssapSender = new WhatsappSender();



const birthdayMessageSenderEmail = new BirthDayGreeter(employeeRepository, emailSender);

const birthdayMessageSenderWhatssapp = new BirthDayGreeter(employeeRepository, watssapSender);

console.log('Employes: ');
employeeRepository.findAll().map((employee) => {
    console.log(employee.getFirstName() + ' ' + employee.getLastName());
});

console.log('------------------')

console.log('Sending emails for birthday...');
birthdayMessageSenderEmail.sendGreeting();
console.log('------------------')
console.log('Sending whatssap for birthday...');
birthdayMessageSenderWhatssapp.sendGreeting();