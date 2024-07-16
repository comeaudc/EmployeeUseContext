import { createContext, useState } from 'react';
import employeeList from '../utilities/data'

export const EmployeeContext = createContext();

export default function EmployeeProvider({ children }) {
  const [employees, setEmployees] = useState(employeeList);
  const [current, setCurrent] = useState(employeeList[0]);
  

  return (
    <EmployeeContext.Provider
      value={{
        employees,
        setEmployees,

        current,
        setCurrent,
      }}
    >
      {children}
    </EmployeeContext.Provider>
  );
}
