<template>
    <div class="Home-Layout">

        <p>this is home page</p>


        <BottomNav active="1">
            <NavItem @click="note" index="0"><p>笔记</p></NavItem>
            <NavItem @click="person" index="1"><p>我的</p></NavItem>
        </BottomNav>
    </div>

</template>

<style lang="less" scoped>

    .Home-Layout {
        height: 100%;
        background: white;
    }

</style>

<script>

    import BottomNav from '../components/BattomNav.vue'
    import NavItem from '../components/NavItem.vue'

    export default  {
        name: 'Home',
        components: {
            BottomNav: BottomNav,
            NavItem: NavItem
        },
        data() {
            return {
                title: 'Home Page'
            }
        },
        methods: {
            note() {
//                console.log('note invoke');
            },
            person() {
//                console.log('person invoke');
            },
        }
    }

</script>
