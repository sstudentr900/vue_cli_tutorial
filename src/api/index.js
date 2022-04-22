import requests from './request';
import mockrequests from './mockAjax';
export const reqCategoryList = () => requests({ url: '/api', method: 'get' });

export const reqCateBanner = () => mockrequests.get('/banner');

//沒有值要給空對象
export const reqHomeAdPost = (params) => requests({ url: '/api', method: 'post',data:params});