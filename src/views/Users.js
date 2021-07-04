import UsersList from '../components/users/UsersList';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchUsers } from '../store/users';
const Users = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  const renderUsers = () => {
    if (state.loading) {
      return <h3>Loading</h3>;
    }
    if (state.error) {
      return <h3>Failed retrieving users: {state.error}</h3>;
    }
    return <UsersList users={state.users} />;
  };
  return (
    <div>
      <h1>Existing Users</h1>
      {renderUsers()}
    </div>
  );
};

export default Users;
