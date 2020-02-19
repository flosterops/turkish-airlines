import axios from 'axios';
import { RequestTypes } from 'models/RequestTypes';

const request = (requestType: RequestTypes, url: string, params: any) => {
    return axios[requestType](url, params);
};

export { request };
