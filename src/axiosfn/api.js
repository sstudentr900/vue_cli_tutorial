import axios from "axios";

const domain = "https://bookshelf.goodideas-studio.com";
// 版次
// const apiVersion = 'v1';

const bookAPI = axios.create({
    baseURL: `${domain}/api`,
    // 加上板次
    // baseURL: `${domain}/api/${apiVersion}`,
    headers: {
        "Content-Type": "application/json",
        accept: "application/json",
    },
});

// Add a request interceptor
bookAPI.interceptors.request.use(
    function(config) {
        // Do something before request is sent

        // 會員系統需驗證身份時
        // if (token) {
        //     config.headers['Authorization'] = `Bearer ${token}`;
        // }
        return config;
    },
    function(error) {
        return Promise.reject(error);
    }
);
// Add a response interceptor
bookAPI.interceptors.response.use(
    function(response) {
        // 任何 HTTP status code 為 2xx 開頭時觸發此函式
        return response;
    },
    function(error) {
        // 任何 HTTP status code 非 2xx 開頭時觸發此函式
        return Promise.reject(error.response);
    }
);

// utilities/API.js
async function GET(url, params) {
    try {
        const response = await bookAPI.get(url, params);
        return response.data;
    } catch (error) {
        return Promise.reject(error);
    }
}
// 封裝其他請求方法如 POST、PUT...
// export { GET, POST, PUT };
export { GET };