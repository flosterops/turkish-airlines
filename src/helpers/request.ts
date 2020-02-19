import axios from 'axios';

enum RequestTypes {
    get = 'get',
    post = 'post',
    put = ' put',
    delete = 'delete'
}

const request = (requestType: RequestTypes, url: string, params: any) => {
    return axios[requestType](url, params);
};

export { request };
