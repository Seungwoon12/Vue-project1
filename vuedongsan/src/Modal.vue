<template>
  <div class="black-bg" v-if="모달창열렸니 == true">
    <div class="white-bg">
      <img :src="원룸들[누른거].image">
      <h4>{{원룸들[누른거].title}}</h4>
      <p>{{원룸들[누른거].content}}</p>
      <input v-model="month"> 
      <p> {{month}}개월 선택함 : {{원룸들[누른거].price * month}}원</p>
      <button @click="$emit('closeModal')">닫기</button>
    </div>
  </div>
</template>

<script>
export default {
    name: 'Modal',
    data() {
      return {
        month: 1,
      }
    },
    watch: {
      month(input) {
       
        var str_space = /\s/; // 정규표현식 공백

        if(isNaN(input)) {
            alert('숫자 입력해라~~');
            this.month = 1;

          } 
        else if(str_space.exec(input)) {
          alert('공백 입력하지마라 짜슥아!');
          this.month = input.replace(' ', '');
        }
        

      }
    },
    props: {
      원룸들: Array,
      누른거: Number,
      모달창열렸니: Boolean,
    }, 
  

}
</script>

<style>

</style>