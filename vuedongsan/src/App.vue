<template>

  <div v-if=" 2 == 1">
    안녕하세요
  </div>
  <div v-else-if=" 3 == 1">
    잘가세요
  </div>
  <div v-else>
    가지마
  </div>



  <Modal/>

  <div class="menu">
    <a v-for="(m, i) in menu" :key="i">{{m}}</a>
  </div>

  <discount/>

  <div v-for="(o, i) in 원룸들" :key="i">
    <img :src="o.image" class="room-img">
    <h4 @click="모달창열렸니 = true; 누른거 = i">{{o.title}}</h4>
    <p>{{o.price}}원</p>
  </div>

</template>

<script>

import data from './assets/oneroom.js';
import Discount from './Discount.vue';
import Modal from './Modal.vue';

export default {
  name: 'App',
  data() {
    return {
      누른거: 0,
      원룸들: data,
      모달창열렸니: false,
      신고수: [0, 0, 0],
      menu: ['Home', 'Shop', 'About'],
      products: ['역삼동원룸', '천호동원룸', '마포구원룸']
    }
  },
  methods : {
    increase() {
      this.신고수 += 1;
    }
  },
  components: {
    Discount : Discount,
    Modal : Modal
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

body {
  margin: 0
}
div {
  box-sizing: border-box;
}

.discount {
  background: #eee;
  padding: 10px;
  margin: 10px;
  border-radius: 5px;
}

.black-bg {
  width: 100%; height: 100%; 
  background: rgba(0, 0, 0, 0.5);
  position: fixed; padding: 20px;
}
.white-bg {
  width: 100%; background: white;
  border-radius: 8px;
  padding: 20px;
}


.room-img {
  width: 100%;
  margin-top: 40px;
}

.menu {
  background: darkslateblue;
  padding: 15px;
  border-radius: 5px;
}
.menu a {
  color: white;
  padding: 10px;
}
</style>
