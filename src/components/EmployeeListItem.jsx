const EmployeeListItem = ({ i, employee, setCurrent }) => {
  let { firstName, lastName, jobTitle } = employee;

  function handleClick() {
    setCurrent(employee);
  }
  return (
    <li key={i} onClick={handleClick}>
      <h3>
        {firstName} {lastName}
      </h3>
      <h4>{jobTitle}</h4>
    </li>
  );
};

export default EmployeeListItem;
