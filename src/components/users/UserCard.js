import { useHistory } from 'react-router-dom';
const UserCard = ({ user }) => {
  const history = useHistory();
  const editUser = () => {
    history.push(`/edit/${user._id}`);
  };
  return (
    <div className="card me-3 shadow-sm my-5" style={{ width: '18rem' }}>
      <img
        src={user.avatar}
        className="card-img-top"
        alt={user.name}
        style={{ height: '270px' }}
      />
      <div className="card-body">
        <h5 className="card-title">{user.name}</h5>
        <p className="card-text">{user.email}</p>
        <div className="d-flex justify-content-around">
          <button onClick={editUser} className="btn btn-primary">
            Edit
          </button>
          <button className="btn btn-danger">Remove</button>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
