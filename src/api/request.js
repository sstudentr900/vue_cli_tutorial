import axios from "axios";
// const domain = "https://bookshelf.goodideas-studio.com";

//axios配置
const requests = axios.create({
    //請求路徑
    // baseURL: '/api',
    //請求超過5s時間停止
    timeout: 5000,
    // headers: {
    //     "Content-Type": "application/json",
    //     accept: "application/json",
    // },
});
//請求之前 攔截器可以檢測
requests.interceptors.request.use(
    function(config) {
        //config 配置對象有headers請求頭
        return config;
    },
    function(error) {
        return Promise.reject(error);
    }
);
//請求成功失敗
requests.interceptors.response.use(
    function(response) {
        // 任何 HTTP status code 為 2xx 開頭時觸發此函式
        return response;
    },
    function(error) {
        // 任何 HTTP status code 非 2xx 開頭時觸發此函式
        return Promise.reject(error.response);
    }
);

//對外
export default requests;