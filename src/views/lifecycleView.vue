<template>
    <div>
        <h2>生命週期</h2>
        <ol>
            <li>
                created：實例已創建，完成初始化資料
                <ul>
                    <li>已配置選項 data 、computed、methods、watch</li>
                    <li>HTML 尚未被渲染，尚未生成 DOM，因此若直接操作 DOM 節點會找不到元素</li>
                </ul>
            </li>
            <br>
            <li>
                mounted：實例已掛載，完成編譯 template 內容
                <ul>
                    <li>HTML 已渲染至頁面上，此時可找到 DOM 節點並加以操作</li>
                </ul>
            </li>
            <br>
            <li>
                Updates 資料被更新
            </li>
            <br>
            <li>
                Destruction 元件摧毀
            </li>
        </ol>
        <h2>Composition API</h2>
        <p>import { onMounted } from 'vue'</p>
    </div>
</template>
<script>
//Composition API
import { onMounted } from 'vue'
//import {
//  onBeforeMount,
//  onMounted,
//  onBeforeUpdate,
//  onUpdated,
//  onBeforeUnmount,
//  onUnmounted,
//  onActivated,
//  onDeactivated,
//  onErrorCaptured
//} from "vue";

export default {
    setup () {
        // Composition API 寫在setup()中
        onMounted(() => {
            console.log('mounted in the composition api!')
        })
    },
    mounted() {             
        console.log('mounted!')         
    },         
    updated() {             
        console.log('updated!')         
    }  
}
</script>