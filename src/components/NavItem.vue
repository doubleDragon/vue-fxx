<template>
    <div @click='onClickNavItem' class="nav-item" :class="{'is-active': active}">
        <slot></slot>
    </div>

</template>

<style lang="less" scoped>

    .nav-item {
        flex: 1;
        text-align: center;
        color: #8a8a8a;

        /*&.is-active {*/
            /*color: rgb(32, 160, 255);*/
        /*}*/
    }

    .is-active {
        color: rgb(32, 160, 255);
    }

</style>

<script>

    export default {
        name: 'NavItem',
        data() {
            return {
                activeIndex: 0
            }
        },
        props: {
            label: {
                type: String,
                'default': '未命名按钮'
            },
            index: {
                type: String,
                'default': 0
            }
        },
        computed: {
            active() {
                return this.activeIndex === this.index;
            }
        },
        methods: {
            onClickNavItem() {
                this.$parent.$emit('item-click', this);
                this.$emit('click', this.index);
            }
        }

    }

</script>
