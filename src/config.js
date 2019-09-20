import axios from 'axios';

const xhr = axios.create({
    xsrfCookieName: 'xsrf-token'
});

xhr.interceptors.request.use(function(config){
    config.headers={
        'access_token':sessionStorage.token
    }
    return config;
},function(error){
    return Promise.reject(error);
});

export  default xhr;