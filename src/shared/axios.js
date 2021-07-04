import axios from 'axios';

const config = {
  baseURL: 'https://jsonplaceholder.typicode.com/users',
};

export default axios.create(config);
