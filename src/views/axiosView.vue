<template>
    <div>
        <h2>在生命週期呼喊 API</h2>
        <!--<p>{{axiosFn()}}</p>-->
        <div class="bookshelf">
            <!-- <pre>{{ bookList }}</pre> -->
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
import { GET } from '@/axiosfn/api';
export default {
    data() {
        return {
            bookList: '',
        };
    },
    //實例已創建
    created() {
        var obj = this
        axios
        .get("https://bookshelf.goodideas-studio.com/api")
        .then(function(response){
            console.log(response.data.list)
            obj.bookList = response.data.list
        });
    },
    //此時可找到 DOM 節點
    mounted(){
        GET().then(function(response){
            console.log(response.list)
            // obj.bookList = response.data.list
        });
    }
    // methods:{
        // async axiosFn(){
        //     const books = await GET();
		// 	console.log(books.list); // 所有書單資料
        // }
    // }
}
</script>
