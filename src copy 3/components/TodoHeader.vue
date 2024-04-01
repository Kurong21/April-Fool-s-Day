<template>
  <header class="header">
      <h1>Todos</h1>
      <input
        type="text"
        autocomplete="off"
        placeholder="What needs to be done?"
        class="new-todo"
        v-model="newTodo"
        @keyup.enter="addNewTodo"
      />
    </header>
</template>

<script>
export default {
    name: 'TodoHeader',
    data(){
        return {
            newTodo: '',
        }
    },
    methods: {
        addNewTodo(){
            if(!this.newTodo) return;
            this.$emit('add',this.newTodo);
            this.newTodo = '';
        }
    }
}
</script>

<style>

</style>

  