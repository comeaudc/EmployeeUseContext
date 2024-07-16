//React Components
import EmployeeList from './EmployeeList';
import Header from './Header';
import SearchBar from './SearchBar';

const Homepage = ({}) => {
  return (
    <div>
      <Header title={'Employee Directory'} />
      <SearchBar />
      <EmployeeList />
    </div>
  );
};

export default Homepage;
