<template>
    <div>
        <h2>封裝axios</h2>
        <pre>
            //api/request.js
            import axios from "axios";
            const domain = "https://bookshelf.goodideas-studio.com";

            //axios配置
            const requests = axios.create({
                //請求路徑
                baseURL: `${domain}/api`,
                //請求超過5s時間停止
                timeout: 5000,
                headers: {
                    "Content-Type": "application/json",
                    accept: "application/json",
                },
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
        </pre>
        <br>
        <br>
        <hr>
        <a href="https://www.youtube.com/watch?v=Uwrz2XP3J44&list=PLmOn9nNkQxJEFpabd412vGw_k7-lHlJOP&index=16"> 封裝axios</a>



        <h2>跨域</h2>
        <p>跨域解決 jsonp,cros,代理</p>
        <p>瀏欄器有跨域問題服務端代理沒有</p>
        <pre>
            //vue.config.js
            //代理跨域
            devServer: {
                proxy: {
                    //網址有/api 執行target
                    '/api': {
                        target: 'https://bookshelf.goodideas-studio.com',
                        //路徑從寫
                        //pathRewrite: { '^/api': '' }, 
                    }
                }
            }


            //api/index.js
            import requests from './request';
            //請求 
            // /api  get 無參數
            //返回promise對象
            export const reqCategoryList = () => requests({ url: '/api', method: 'get' });


            //main.js 調用
            import { reqCategoryList } from '@/api';
            reqCategoryList()

        </pre>

        <h2>範例</h2>
        <div class="bookshelf">
            <!--<p>{{axiosFn()}}</p>-->
            <!-- <p>{{ bookList }}</p> -->
            <div class="book" v-for="book in bookList" :key="book.id">
                <img :src="book.image" alt="book image" />
                <p>
                    原價：<span>{{ book.originPrice }}</span> ｜ 
                    特價：<span class="bargain">{{ book.sellPrice }}</span>
                </p>
                <p>ISBN：<span>{{ book.ISBN }}</span></p>
                <p><span>{{ book.name }}</span></p>
                <a :href="book.link" target="_blank">連結</a>
            </div>
        </div>
        <br>
        <br>
        <hr>
        <a href="https://ithelp.ithome.com.tw/articles/10275141"> API</a>
    </div>
</template>
<style>
    p.color_red{
        color: red;
    }
</style>
<script>
import axios from "axios";
import { GET } from '@/api/api';
export default {
    data() {
        return {
            bookList: '',
        };
    },
    //實例已創建
    created() {
        var obj = this
        // axios
        // .get("https://bookshelf.goodideas-studio.com/api")
        // .then(function(response){
        //     console.log(response.data.list)
        //     obj.bookList = response.data.list
        // });
    },
    //此時可找到 DOM 節點
    mounted(){
        //使用封裝axios
        // GET().then(function(response){
        //     console.log(response.list)
        //     // obj.bookList = response.data.list
        // });
    }
    // methods:{
        // async axiosFn(){
        //     const books = await GET();
		// 	console.log(books.list); // 所有書單資料
        // }
    // }
}
</script>
