import { Employee } from '../Domain/Employee';
import { DomainEventPublisher } from '../Domain/DomainEventPublisher';
import { Criteria, EmployeeRepositoryLocal } from '../Domain/EmployeeRepositoryLocal';

export class BirthDayGreeter {
    private repository: EmployeeRepositoryLocal;
    private publisher: DomainEventPublisher

    constructor(repository: EmployeeRepositoryLocal, publisher: DomainEventPublisher) {
        this.repository = repository;
        this.publisher = publisher;
    }


    public sendGreeting(){

        this.repository.findByCriteria(Criteria.BIRTHDAY)
            .map(((employee: Employee) => {
                this.publisher.send({employee, message: this.repository.createBirthdayMessage(employee)});
            }));
    }

}