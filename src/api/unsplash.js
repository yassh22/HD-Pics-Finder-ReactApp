import axios from 'axios';

export default axios.create ({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID d73726aaf41a6653d0670f16b500dc9da70f38ba9fa2fcdd47a6713d5ba84b4f'
    }
});