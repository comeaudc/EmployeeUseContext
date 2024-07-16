import EmployeeListItem from './EmployeeListItem';
import { useContext } from 'react';
import { EmployeeContext } from '../contexts/app_context';

const EmployeeList = ({}) => {
  const { employees } = useContext(EmployeeContext);

  const list = employees.map((employee, i) => (
    <EmployeeListItem key={i} employee={employee} />
  ));

  return <ul>{list}</ul>;
};

export default EmployeeList;
