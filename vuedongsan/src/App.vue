<template>
  <div class="menu">
    <a v-for="(m, i) in menu" :key="i">{{m}}</a>
  </div>

  <div v-for="(p, i) in products" :key="i">
    <h4>{{p}}</h4>
    <p>60 만원</p>
  </div>
</template>

<script>

export default {
  name: 'App',
  data() {
    return {
      menu: ['Home', 'Shop', 'About'],
      products: ['역삼동원룸', '천호동원룸', '마포구원룸']
    }
  },
  components: {
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
