<template>
    <!-- 
        $router.push()는 페이지 이동시켜주는 함수 
        cf) $route는 현재 url(현재경로)에 관련된 정보를 알려주는 변수. $router는 페이지 이동 관련 기능
    -->
    <div v-for="(b, i) in blogContents" :key="i"> 
        <h3 @click="$router.push('/detail/' + i)">{{blogContents[i].title}}</h3> 
        <p>{{blogContents[i].date}}</p>
    </div>
</template>

<script>
export default {
    name: 'List',
    props: {
        blogContents: Array,
    },

}
</script>

<style>

</style>