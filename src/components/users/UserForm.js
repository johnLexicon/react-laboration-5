const UserForm = () => {
  return (
    <form>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Full name
        </label>
        <input
          required
          id="name"
          type="text"
          className="form-control form-control-lg"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="email" className="form-label">
          Email address
        </label>
        <input
          required
          type="email"
          className="form-control form-control-lg"
          id="email"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="avatar" className="form-label">
          Avatar Url
        </label>
        <input
          id="avatar"
          type="text"
          className="form-control form-control-lg"
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};

export default UserForm;
