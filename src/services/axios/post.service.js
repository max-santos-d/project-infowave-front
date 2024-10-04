import axios from 'axios';

const baseURL = 'http://localhost:3000';

const getAllPost = () => {
  return axios.get(`${baseURL}/post`);
};

const getPost = (id) => {
  return axios.get(`${baseURL}/post/${id}`);
};

export default {
  getAllPost,
  getPost,
};
