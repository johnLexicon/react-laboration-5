const UsersList = ({ users }) => {
  return (
    <div>
      {users.length ? (
        users.map((user) => <div key={user.id}>{user.name}</div>)
      ) : (
        <h3>Users empty list</h3>
      )}
    </div>
  );
};

export default UsersList;
