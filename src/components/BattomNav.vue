<template>

    <div class="bottom-nav">

        <slot></slot>

    </div>

</template>

<style lang="less" scoped>

    .bottom-nav {
        position: absolute;
        bottom: 0;
        width: 100%;
        display: flex;
        padding: 30px 0;
        border-top: 1px solid #ccc;
    }

</style>

<script>

    export default {
        name: 'BottomNav',
        props: {
            active: {
                type:String,
                'default': 0
            }
        },
        methods: {
            handleItemClick(child) {
//                console.log('BottomNav handleItemClick :' + child.index);
                for (const item of this.$children) {
                    item.$data.activeIndex = child.index
                }
            }
        },
        mounted () {
            this.$on('item-click', this.handleItemClick);
            this.handleItemClick({ index: this.active});
        },
        beforeDestroy() {
            this.$off('item-click', this.handleItemClick)
        }
    }

</script>
