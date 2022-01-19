<template>

  <!-- <div v-if=" 2 == 1">
    안녕하세요
  </div>
  <div v-else-if=" 3 == 1">
    잘가세요
  </div>
  <div v-else>
    가지마
  </div> -->

  <transition name="fade">
    <Modal @closeModal="모달창열렸니 = false"  :원룸들="원룸들" :누른거="누른거" :모달창열렸니="모달창열렸니"/> <!-- :작명="데이터 이름"   // 보통 작명을 데이터 이름과 같게함--> 
  </transition>

  <div class="menu">
    <a v-for="(m, i) in menu" :key="i">{{m}}</a>
  </div>

  <discount v-if="showDiscount == true" />

  <button @click="priceSort">낮은가격순</button>
  <button @click="sortBack">되돌리기</button>
  <button @click="highPriceSort">높은가격순</button>
  <button @click="ascending">가나다순</button>
  <button @click="descending">역순</button>

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
      showDiscount: true,
      원룸들오리지널: [...data], // [...array자료형] array를 완전히 다른 사본으로 하나 만들어줘용
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
    },
    sortBack() {
      this.원룸들 = [...this.원룸들오리지널]; // [...] 로 안해주면 어느 순간 되돌리기가 동작안함. 이유는 array 자료형은 = 로 하면 서로 값을 공유하라는 명령으로 먹히기 때문
    },
    priceSort() {
      // sort는 데이터 원본을 변경시킴. 그래서 원본은 그대로 놔두고 정렬할 때는 map이나 filter 쓰는 게 좋음
      this.원룸들.sort(function(a, b) {
        return a.price - b.price
      }) 
    },
    highPriceSort() {
      this.원룸들.sort(function(a, b) {
        return b.price - a.price;
      })
    },
    ascending() {
      this.원룸들.sort(function(a, b) {
        var titleA = a.title.toLowerCase();
        var titleB =  b.title.toLowerCase();
        return (titleA < titleB)? -1 : (titleA == titleB)? 0 : 1;
      })
    },
    descending() {
      this.원룸들.sort(function(a, b) {
        var titleA = a.title.toLowerCase();
        var titleB = b.title.toLowerCase();
        return (titleB < titleA)? -1 : (titleB == titleA)? 0 : 1;
      })
    }
  },

  mounted() {
    setTimeout(() => {
      this.showDiscount = false; // this를 사용하는 경우 에로우() 함수를 사용해야 에러가 안남
    }, 2000);
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

.start {
  opacity: 0;
  transition: all 1s; /* transition 뜻: 이 클래스에 있는 opacity를 비롯한 속성이 변경될 때 1초에 걸쳐서 스무스하게 변경해주세영 */
}
.end {
  opacity: 1;
}

/* 퇴장 애니메이션 */
.fade-leave-from {
  opacity: 1;
}
.fade-leave-active {
  transition: all 1s;
}
.fade-leave-to {
  opacity: 0;
}

/* 등장 애니메이션 */
.fade-enter-from {
  /* opacity: 0; */
   transform: translateY(-1000px);
}
.fade-enter-active {
  transition: all 1s;
}
.fade-enter-to {
  /* opacity: 1; */
  transform: translateY(0px);
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
