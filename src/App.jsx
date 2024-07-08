import './App.css';
//React Hooks
import { useState } from 'react';
//React Components
import Homepage from './components/Homepage';
import EmployeePage from './components/EmployeePage';
//Data
import employeeList from './utilities/data';

function App() {
  const [employees, setEmployees] = useState(employeeList);
  const [current, setCurrent] = useState(employeeList[0]);

  return (
    <main>
      <Homepage setCurrent={setCurrent} employees={employees} />
      <EmployeePage current={current} />
    </main>
  );
}

export default App;
