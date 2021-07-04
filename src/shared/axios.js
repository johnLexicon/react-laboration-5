import axios from 'axios';

const config = {
  baseURL: 'https://lexicon-express-users.herokuapp.com/api/users',
  // baseURL: 'https://jsonplaceholder.typicode.com/users',
};

export default axios.create(config);
