//React Components
import EmployeeList from './EmployeeList';
import Header from './Header';
import SearchBar from './SearchBar';

const Homepage = ({ employees, setCurrent }) => {
  return (
    <div>
      <Header title={'Employee Directory'} />
      <SearchBar />
      <EmployeeList setCurrent={setCurrent} employees={employees} />
    </div>
  );
};

export default Homepage;
