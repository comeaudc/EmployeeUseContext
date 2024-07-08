//React Components
import Header from './Header';

const EmployeePage = ({ current }) => {
  const { firstName, lastName, jobTitle, officeNum, mobileNum, SMS, email } =
    current;
  return (
    <div>
      <Header title={'Employee'} />
      <div>
        <div>
          <h3>{firstName} {lastName}</h3>
          <h4>{jobTitle}</h4>
        </div>
        <div>
          <h4>Call Office</h4>
          <h5>{officeNum}</h5>
        </div>
        <div>
          <h4>Call Mobile</h4>
          <h5>{mobileNum}</h5>
        </div>
        <div>
          <h4>SMS</h4>
          <h5>{SMS}</h5>
        </div>
        <div>
          <h4>Email</h4>
          <h5>{email}</h5>
        </div>
      </div>
    </div>
  );
};

export default EmployeePage;
