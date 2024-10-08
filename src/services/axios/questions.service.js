import axios from 'axios';

const baseURL = 'http://localhost:3000';

const getAllQuestions = () => {
  return axios.get(`${baseURL}/question`);
};

export default {
  getAllQuestions,
};
