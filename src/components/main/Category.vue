<template>

    <div>
        Vue的mixin组件——propsync

        通过上例也可以看出在Vue2.0中实现props的双向绑定很麻烦，如果有两个props需要做双向绑定上面的代码就要实现两遍，代码极其冗余。
        所以我写了一个mixin来自动化处理props的双向绑定的需求——propsync。

        主要功能

        实现了在组件内自动创建所有prop对应的data属性，方便组件内修改prop使用。解决了vue2.0中不允许组件内直接修改prop的设计。
        实现了组件外修改组件prop，组件内自动同步修改到data属性。
        实现了组件内修改了data属性（由prop创建的），自动向组件外发出事件通知有内部prop修改。由组件外决定是否要将修改同步到组件外
        propsync的使用方法
    </div>

</template>

<style lang="less" scoped>

</style>

<script>

    export default {
        name: 'Category',
    }

</script>
