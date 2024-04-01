<template>
  <button @click="sendMsg">点击我向根组件传值</button>
</template>

<script>
export default {
    name: 'TodoItem',
    data() {
      return {
        msg: '我是孙子'
      };
    },
    methods: {
        sendMsg(){
            this.$bus.$emit('message',this.msg); // 绑定自定义事件
        }
    }
}
</script>

<style>

</style>