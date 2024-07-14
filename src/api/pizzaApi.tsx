import axios from 'axios';

const baseURL = 'https://pizzacodedb.onrender.com/api';
// const baseURL = 'http://localhost:8080/api';

const pizzaApi = axios.create({ baseURL });


export default pizzaApi;
