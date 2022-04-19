//引入mockjs
import Mock from 'mockjs';
//把JSON數據引入
//webpack 默認圖片 json數據所以不用對外爆露
import banner from './banner.json';
//使用mockjs模拟数据 第一個請求網址 第二個請求數據
Mock.mock('/mock/banner',{code:200,data:banner});