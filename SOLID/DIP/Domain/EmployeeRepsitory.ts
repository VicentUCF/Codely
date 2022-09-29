import { Employee } from './Employee';
export interface EmployeeRepository {

    findByCriteria(criteria: any): Employee[];
    createBirthdayMessage(employee: Employee): string;
    findAll(): Employee[];
}