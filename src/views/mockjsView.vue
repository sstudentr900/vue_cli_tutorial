<template>
    <div>
        <h2> mockjs模拟AJAX数据</h2>
        <pre>
        # 安装
        npm install mockjs
        </pre>
        <p>再項目中src夾創建mock文件夾</p>
        <p>新增banner.json文件,要格式化</p>
        <p>圖片要放在public 打包在dist文件</p>
        <p>創建mockServe.js</p>
        <pre>
        //引入mockjs
        import Mock from 'mockjs';

        //把JSON數據引入
        //webpack 默認圖片 json數據所以不用對外爆露
        import banner from './banner.json';

        //使用mockjs模拟数据 第一個請求網址 第二個請求數據
        Mock.mock('/mock/banner',{code:200,data:banner};
        Mock.mock('/mock/floor',{code:200,data:floor};
        </pre>
        <p>在main.js 引入mockServe.js</p>
        <pre>
            import '@/mock/mockServe';
        </pre>
        <p>在script 引入 api</p>
        <pre>
        import { reqCateBanner } from '@/api';
        export default {
            data(){
                    return{
                }
            },
            mounted(){
                reqCateBanner().then(function(response){
                    console.log(response)
                })
            },
        }
        </pre>
        <br>
        <br>
        <br>
        <a href="https://www.youtube.com/watch?v=Nrdn7nGzNSA&list=PLmOn9nNkQxJEFpabd412vGw_k7-lHlJOP&index=32">mockjs模拟数据</a>
    </div>
</template>

<script>
//引用API
import { reqCateBanner } from '@/api';
export default {
    data(){
        return{
        }
    },
    mounted(){
        reqCateBanner().then(function(response){
            console.log(response)
        })
    },
    computed: {
    },
}
</script>
