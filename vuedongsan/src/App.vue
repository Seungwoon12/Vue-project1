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



  <Modal @closeModal="모달창열렸니 = false"  :원룸들="원룸들" :누른거="누른거" :모달창열렸니="모달창열렸니"/> <!-- :작명="데이터 이름"   // 보통 작명을 데이터 이름과 같게함--> 

  <div class="menu">
    <a v-for="(m, i) in menu" :key="i">{{m}}</a>
  </div>

  <discount/>

  <Card @openModal="모달창열렸니 = true; 누른거 = $event" :원룸="원룸들[i]" v-for="(원룸, i) in 원룸들" :key="i"/>



</template>

<script>

import data from './assets/oneroom.js';
import Discount from './Discount.vue';
import Modal from './Modal.vue';
import Card from './Card.vue';

export default {
  name: 'App',
  data() {
    return {
      오브젝트: {name: "kim", age: 20},
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
    Modal : Modal,
    Card: Card,

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
