<template>
    <div>
        <h3>{{blogContents[0].title}}</h3>
        <p>{{blogContents[0].date}}</p>
    </div>
    <div>
        <h3>{{blogContents[1].title}}</h3>
        <p>{{blogContents[1].date}}</p>
    </div>
    <div>
        <h3>{{blogContents[2].title}}</h3>
        <p>{{blogContents[2].date}}</p>
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