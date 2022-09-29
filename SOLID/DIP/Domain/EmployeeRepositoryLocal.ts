import { EmployeeRepository } from './EmployeeRepsitory';
import { Employee } from './Employee';
export class EmployeeRepositoryLocal implements EmployeeRepository {
    
    private employees: Employee[]

    constructor() {
        this.employees = [
            new Employee("John", "Doe", new Date(1982, 8, 29), 'john_doe@gmail.com', 123456789),
            new Employee("Ana", "Smith", new Date(1975, 5, 21), 'ana_smith@gmail.com', 987654321),
            new Employee("Peter", "Parker", new Date(1990, 8, 29), 'peter_parker@gmail.com', 123987456),
            new Employee("Mary", "Jane", new Date(1985, 11, 11), 'mary_jane@gmail.com', 456123789),
        ]
    };

    public findAll(): Employee[] {
        return this.employees;
    }

    public findByCriteria(criteria: Criteria): Employee[] {
        switch (criteria) {
            case Criteria.BIRTHDAY:
                return this.employees.filter((employee: Employee) => {
                    return employee.getDateOfBirth().getMonth() === new Date().getMonth() && employee.getDateOfBirth().getDate() === new Date().getDate();
                });


            default:
                return this.employees;
        }
    }


    public createBirthdayMessage(employee: Employee): string {
        return 'Happy birthday ' + employee.getFirstName() + ' ' + employee.getLastName() + '!';
    }

}

export enum Criteria {
    BIRTHDAY = 'birthdays'
}