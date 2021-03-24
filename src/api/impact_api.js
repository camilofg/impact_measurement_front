import axios from 'axios';

export default axios.create({
    baseURL: 'https://localhost:44328/api',
    headers: {
        'Access-Control-Allow-Origin': '*',
    }
});