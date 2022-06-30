<template>
    <div>
        <!-- <h2>Vue 實作 鄉鎮市區下拉選單</h2>
        <span>所在區域 : </span>
        <select v-model="cityIdx">
            <option :key="idx" v-for="(item,idx) in cities" :value="idx">{{item.name}}</option>
        </select>
        <select v-model="areaIdx">
            <option :key="idx" v-for="(item,idx) in areas" :value="idx">{{item.name}}</option>
        </select>
        <input type="text" v-model="zip"> 
        <br> -->
        <h2>Vue 實作 鄉鎮市區下拉選單(封裝)</h2>
        <Select v-model="cityIdx" :options="cities"></Select>
        <Select v-model="areaIdx" :options="areas"></Select>
        <br>
        <h2>選到第 {{cityIdx}} 個城市</h2>
        <h2>{{cityIdx}} - {{areaIdx}} - {{zip}}</h2>
        <br>
        <br>
        <hr>
        <a href="https://codesandbox.io/s/vue-shizuo-xiangzhenshiquxialaxuandan-cgxhn?file=/src/App.vue:646-649">Vue 實作 鄉鎮市區下拉選單</a>
    </div>
</template>
<script>
    import Select from "@/components/Select";
    import cities from "@/api/cityData.json";
    export default {
        name: "App",
        components: {
            Select
        },
        data() {
            return {
                cityIdx: 0,
                areaIdx: 0
            };
        },
        computed: {
            cities() {
                return cities;
            },
            areas() {
                return cities[this.cityIdx].areas;
            },
            zip() {
                return this.areas[this.areaIdx].zip;
            }
        },
        watch: {
            cityIdx() {
                this.areaIdx = 0;
            }
        }
    }
</script>