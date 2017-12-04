<template>

    <Main :index="1">
        <Category/>
    </Main>

</template>

<style lang="less" scoped>

</style>

<script>

    import Main from './Main.vue';
    import Category from './Category.vue';

    export default {
        name: 'MainCategory',
        components: {
            Main,
            Category
        }
    }

</script>
