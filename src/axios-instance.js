import axios from 'axios';

const instance = axios.create({
    baseURL:'https://demooctagon.firebaseio.com/'
});

export default instance;