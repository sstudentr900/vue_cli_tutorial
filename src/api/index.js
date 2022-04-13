import requests from './request';
export const reqCategoryList = () => requests({ url: '/api', method: 'get' });