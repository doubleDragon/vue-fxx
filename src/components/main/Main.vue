<template>
    <div class="main-layout">

        <div class="content-layout">
            <slot></slot>
        </div>

        <BottomNav @click="navItemClick" :items="nav_items" :index="index"></BottomNav>
    </div>

</template>

<style lang="less" scoped>

    .main-layout {
        height: 100%;

        .content-layout {
            padding-bottom: 100px;
            height: 100%;
            box-sizing: border-box;
        }
    }

</style>

<script>

    import BottomNav from '../common/BattomNav.vue';

    export default  {
        name: 'Main',
        components: {
            BottomNav: BottomNav,
        },
        props: {
            index: {
                type: Number,
                default: 0
            }
        },
        data() {
            return {
                nav_items: [
                    {
                        text:'首页',
                        icon_normal: require('../../assets/bt_shouye_normal.png'),
                        icon_selected: require('../../assets/bt_shouye_selected.png'),
                        index: 0
                    },
                    {
                        text:'品类',
                        icon_normal: require('../../assets/bt_bangdan_normal.png'),
                        icon_selected: require('../../assets/bt_bangdan_selected.png'),
                        index: 1
                    },
                    {
                        text:'我的',
                        icon_normal: require('../../assets/bt_wode_normal.png'),
                        icon_selected: require('../../assets/bt_wode_selected.png'),
                        index: 2
                    }
                ]

            }
        },
        methods: {
            navItemClick(index) {
                switch(index){
                    case 0:
                        this.$router.push('/');
                        break;
                    case 1:
                        this.$router.push('/category');
                        break;
                    case 2:
                        this.$router.push('/my');
                        break;
                }

            }
        }
    }

</script>
