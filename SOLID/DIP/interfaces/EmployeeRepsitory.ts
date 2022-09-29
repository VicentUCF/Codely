import { MonthDay } from '../classes/Clock';
import { Employee } from '../classes/Employee';
export interface EmployeeRepository {
    findEmployeesBornOn(monthDay: MonthDay): Employee[];
}