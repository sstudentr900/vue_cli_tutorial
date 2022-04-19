import axios from "axios";
// 進度條
import nprogress from "nprogress";
// 進度條樣式
import "nprogress/nprogress.css";
// console.log(nprogress)
// const domain = "https://bookshelf.goodideas-studio.com";

//axios配置
const requests = axios.create({
    //請求路徑
    baseURL: '/mock',
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
        //進度條開始動
        nprogress.start();
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
        //進度條結束
        nprogress.done();
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