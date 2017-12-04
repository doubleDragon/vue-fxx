<template>
    <Main :index="0">
        <Home/>
    </Main>
</template>

<style lang="less" scoped>

</style>

<script>
    import Main from './Main.vue';
    import Home from './Home.vue';
    export default {
        name: 'MainHome',
        components: {
            Main,
            Home
        }
    }

</script>
