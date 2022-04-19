import requests from './request';
import mockrequests from './mockAjax';
export const reqCategoryList = () => requests({ url: '/api', method: 'get' });

export const reqCateBanner = () => mockrequests.get('/banner');