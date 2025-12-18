using {user10 as dbschema} from '../db/schema';

@path: 'service/user10'

service User10info {
    entity Address         as projection on dbschema.Address;
    entity Employee        as projection on dbschema.Employee;
    entity EmployeeDetails as projection on dbschema.EmployeeDetails;
}