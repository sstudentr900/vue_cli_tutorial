<template>
    <div>
      <h2>Slider</h2>    
      <div class="slide">
          <div class="top">
            <img :src="nowImageSrc" alt="">
          </div>
          <div class="bottom">
            <transition-group name="flip-list" tag="ul">
                <li v-for="(item,index) in slideData" :key="item.id" :class="{active:nowImageIndex==index}" @click="clickImg(item.src,index)" :data-id="item.id" :data-index="index">
                    <img :src="item.src" alt="">
                </li>
            </transition-group>
            <div class="ctrl">
              <div class="prev" @click="slideCtrl(1)"></div>
              <div class="next" @click="slideCtrl(-1)"></div>
            </div>
          </div>
      </div>
    </div>
</template>
<style>
.slide {
  width: 50%;
  margin: auto;
}
.slide .top{
  font-size: 0;
}
.slide .top img{
  width: 100%;
  height: auto;
}
.slide .bottom{
  width: 100%;
  position: relative;
}
.slide .ctrl>div{
  cursor: pointer;
  position: absolute;
  top: 50%;
  left: 3px;
  width: 16px;
  height: 16px;
  border: 0;
  border-left: 2px solid #222;
  border-bottom: 2px solid #222;
  transform: translateY(-50%) rotate(45deg);
  opacity: .4;
  transition: opacity .5s ease;
} 
.slide .ctrl>div.next{
  left: auto;
  right: 3px;
  transform: translateY(-50%) rotate(-135deg);
} 
.slide ul {
  margin: 0 26px;
  overflow: hidden;
  display: flex;
  list-style-type: none;
  padding: 0;
  font-size: 0;
}
.slide ul li {
  position: relative;
  /* 設定每一個要輪播的項目寬度 */
  flex: calc(100% / 4) 0 0;
  /* 
  為了達成上述圖片示意，因此除了往前推 2 個項目的距離外，
  還要再多推 0.5 個輪播項目的距離，呈現露出半個輪播項目的樣式
  */
  /* left: calc(-100% / 4 * 2.5); */
  left: calc(-70%);
  background-color: #eee;
  height: 100%;
  margin: 8px;
  box-sizing: border-box;
  border: 3px solid rgba(0,0,0,0);
  cursor: pointer;
}
.slide ul li.active{
  border: 3px solid #222;
}
/* .slide ul li:nth-last-child(3), */
.slide ul li:nth-last-child(2),
/* .slide ul li:nth-child(3), */
.slide ul li:nth-child(2),
.slide ul li:first-child,
.slide ul li:last-child{
    z-index: -1;
    opacity: 0;
}
.slide ul li img{
  width: 100%;
  height: auto;
}
/* 動畫樣式設定 */
.flip-list-move {
  transition: transform 0.8s;
}
</style>
<script>
export default {
  data() {
    return {
      slideData: [],
      welfare: [ 
        { 
          src: "https://unsplash.it/300/300?image=1084",
          id: 1 
        },
        { 
          src: "https://unsplash.it/300/300?image=1083",
          id: 2 
        },
        { 
          src: "https://unsplash.it/300/300?image=1082",
          id: 3 
        },
        { 
          src: "https://unsplash.it/300/300?image=1081",
          id: 4 
        },
      ],
      nowImageIndex: 3,
      nowImageSrc: '',
      clickWait: false,
      timer: {},
    };
  },
  mounted() {
    for (let i = 0; i < this.welfare.length * 3; i++) {
      let obj = {};
      obj.id = i;
      obj.ref = i % this.welfare.length;
      obj.src = this.welfare[obj.ref].src
      if(i==this.nowImageIndex){
        this.nowImageSrc = obj.src
      }
      this.slideData.push(obj);
    }

  },
  methods: {
    slideCtrl(slidesToShow = 1) {
      if (this.clickWait) {
        return;
      }
      this.stopTime();
      this.clickWait = true;
      if (slidesToShow > 0) {
        console.log('1')
        const shiftItem = this.slideData.shift();
        this.slideData.push(shiftItem);
        this.getNowImageSrc()
        this.setTime();
        return;
      }
      if (slidesToShow < 0) {
        console.log('2')
        const shiftItem = this.slideData.pop();
        this.slideData.unshift(shiftItem);
        this.getNowImageSrc()
        this.setTime();
      }
    },
    getNowImageSrc(){
      this.changeImg(this.slideData.filter((item, index)=>index===this.nowImageIndex)[0].src)
    },
    changeImg(src){
      this.nowImageSrc = src
    },
    clickImg(src,index){
      this.nowImageSrc = src
      // if (this.clickWait) {
      //   return;
      // }
      // this.stopTime();
      // this.clickWait = true;
      // const shiftItems = this.slideData.splice(0,index-this.nowImageIndex);
      // for (let i = 0; i < shiftItems.length; i++) {
      //   this.slideData.push(shiftItems[i]);
      // }
      for (let i = 0; i < index-this.nowImageIndex; i++) {
        const shiftItem = this.slideData.shift();
        this.slideData.push(shiftItem);
      }
      // this.setTime();
    },
    setTime() {
      this.timer = setTimeout(() => {
        this.clickWait = false;
      }, 500);
    },
    stopTime() {
      clearInterval(this.timer);
    },
  },
};
</script>
