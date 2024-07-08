import EmployeeListItem from './EmployeeListItem';

const EmployeeList = ({ employees, setCurrent }) => {

  const list = employees.map((employee, i) => <EmployeeListItem setCurrent={setCurrent} key={i} employee={employee} />);

  return <ul>{list}</ul>;
};

export default EmployeeList;
