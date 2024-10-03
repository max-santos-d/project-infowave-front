import axios from 'axios';

const baseURL = 'http://localhost:3000';

const getAllPost = () => {
  return axios.get(`${baseURL}/post`);
};

export default {
  getAllPost,
};
