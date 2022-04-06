<template>
    <div>
        <h2>creare</h2>
        <p>全域安裝</p>
        <pre><code>npm install -g @vue/cli</code></pre>
        <p>vue 版本</p>
        <pre><code>vue --version</code></pre>
        <p>建立專案</p>
        <pre><code>vue create project-name</code></pre>
        <p>啟動伺服器</p>
        <pre><code>npm run serve</code></pre>
        <p>打包</p>
        <pre><code>npm run build</code></pre>
        <h2>目錄</h2>
        <ol>
            <li>public : 任何靜態檔都可以放在這，不會經過 webpack 打包</li>
            <li>src : 原始檔案，大部分開發都在這異動</li>
            <li>src/assets : 存放靜態資源，例如 images、css、logo 等</li>
            <li>src/components：存放自定義的元件</li>
            <li>src/router：存放所設置的路由元件</li>
            <li>src/store：存放 Vuex 管理的狀態庫</li>
            <li>src/views：存放顯示在畫面上的路由元件
                <ul>
                    <li>將 components 裡的元件引入給 views 裡的路由元件使用，例如在 Home.vue 中就使用了 HelloWorld.vue 元件</li>
                </ul>
            </li>
            <li>src/App.vue：整個專案裡的核心主件，在此進行切換路由元件並渲染出相應頁面
                <ul>
                    <li>以巢狀結構來看，App.vue 會是第一層，其他路由元件則會列在第二層之後，因此也可考慮在此層放置所有頁面都存有的共通元件作為固定班底，例如 Header、Navbar、Footer 等</li>
                </ul>
            </li>
            <li>src/main.js：程式進入點，完成初始化 Vue instance 並掛載到 App.vue 上
                <ul>
                    <li>同時會將專案中所需的 plugins 引入至此</li>
                </ul>
            </li>
        </ol>
        <h2>eslint 關閉</h2>
        <pre>
            //vue.config.js
            module.exports = {
                //關閉eslint
                lintOnSave: false
            }
        </pre>
        <h2>style 撰寫 CSS</h2>
        <p>scoped 會讓該元件在編譯時被添加一個以「data-v-」開頭代表唯一值</p>
        <img class='max' src="https://imgur.com/Lh524gw.jpg" alt="">
        <img class='max' src="https://imgur.com/FWkXaB0.jpg" alt="">
        <h2>相對路徑 @</h2>
        <pre>import HelloWorld from "/src/components/HelloWorld.vue";<br>import HelloWorld from "@/components/HelloWorld.vue";</pre>
        <br>
        <br>
        <hr>
        <a href="https://ithelp.ithome.com.tw/articles/10265925">Vue 個專案先</a>
        <a href="https://ithelp.ithome.com.tw/articles/10277962">專案小幫手</a>
    </div>
</template>
