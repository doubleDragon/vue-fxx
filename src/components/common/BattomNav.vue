<template>

    <div class="bottom-nav">

        <div class="bottom-nav-item" :class="{active: isActive(item.index)}" v-for="item in items" :key="item.index"
             v-on:click="clickItem(item.index)">
            <img :src="item.icon_selected" v-if="isActive(item.index)" class="image"/>
            <img :src="item.icon_normal" v-else class="image"/>
            <p>{{item.text}}</p>
        </div>

    </div>

</template>

<style lang="less" scoped>

    .bottom-nav {
        position: absolute;
        bottom: 0;
        width: 100%;
        display: flex;
        height: 100px;
        box-sizing: border-box;
        background: #fafafa;
        align-items: center;
        padding-top: 10px;

        .bottom-nav-item {
            flex: 1;
            text-align: center;
            color: #747474;

            &.active {
                color: #e20015;
            }

            .image {
                width: 42px;
                height: 42px;
            }
        }


    }

</style>

<script>

    export default {
        name: 'BottomNav',
        props: {
            items: {
                type: Array,
                'default': function() {
                    return []
                }
            },
            index: {
                type: Number,
                'default': 0
            }

        },
        methods: {
            isActive(index) {
                return this.activeIndex === index;
            },
            clickItem(index) {
                // this.activeIndex = index;
                this.$emit('click', index);
            }
        },
        data(){
            return {
                activeIndex: this.index
            }
        }

    }

</script>
