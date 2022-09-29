
var assert = require('assert');
import { EmployeeRepositoryLocal } from '../Domain/EmployeeRepositoryLocal';
import { BirthDayGreeter } from '../Application/BirthDayGreeter';
import { EmailSender } from '../infrastructure/EmailSender';
import { WhatsappSender } from '../infrastructure/WhatsappSender';



describe('DIP TEST', function () {


  const emailSender = new EmailSender();
  const employeeRepository = new EmployeeRepositoryLocal();
  const watssapSender = new WhatsappSender();
  const birthdayMessageSenderEmail = new BirthDayGreeter(employeeRepository, emailSender);
  const birthdayMessageSenderWhatssapp = new BirthDayGreeter(employeeRepository, watssapSender);



  describe('Test email send to birthay employeers', function () {
    it('Should ', function () {
      birthdayMessageSenderWhatssapp.sendGreeting();
      assert.equal([1, 2, 3].indexOf(4), -1);

    });
  });
});
