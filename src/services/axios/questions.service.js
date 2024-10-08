import axios from 'axios';

const baseURL = 'http://localhost:3000';

const getAllQuestions = () => {
  return axios.get(`${baseURL}/question`);
};

const getQuestion = (id) => {
  return axios.get(`${baseURL}/question/${id}`);
};

export default {
  getAllQuestions,
  getQuestion,
};
