import { MonthDay } from '../ExternalDependencies/Clock';
import { Employee } from '../classes/Employee';
export interface EmployeeRepository {
    findEmployeesBornOn(monthDay: MonthDay): Employee[];
}