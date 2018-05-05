import axios from 'axios';

const API = {};

API.GET_POSTS = () => axios.get('/wp-json/wp/v2/posts');

export default API;
