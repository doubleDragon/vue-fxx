<template>

    <Main :index="2">
        <My/>
    </Main>

</template>

<style lang="less" scoped>

</style>

<script>

    import Main from './Main.vue';
    import My from './My.vue';

    export default {
        name: 'MainMy',
        components: {
            Main,
            My
        }
    }

</script>
