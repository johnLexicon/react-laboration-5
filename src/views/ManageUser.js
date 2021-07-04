import UserForm from '../components/users/UserForm';
const ManageUser = ({ title }) => {
  return (
    <div>
      <h1>{title}</h1>
      <UserForm />
    </div>
  );
};

export default ManageUser;
