import UserCard from './UserCard';
const UsersList = ({ users }) => {
  return (
    <div className="d-flex flex-wrap justify-content-center">
      {users.length ? (
        users.map((user) => <UserCard key={user._id} user={user} />)
      ) : (
        <h3>There are no existing user at the moment</h3>
      )}
    </div>
  );
};

export default UsersList;
