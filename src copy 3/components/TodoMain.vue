<template>
    <section class="main">
      <input
        id="toggle-all"
        type="checkbox"
        class="toggle-all"
        @change="checkedAll"
        v-model="toggle"
      >
      <label for="toggle-all">Mark all as complete</label>
      <ul class="todo-list">
        <li
          class="todo"
          v-for="todo in todos" :key="todo.id"
          :class="{completed: todo.completed, editing: isEdit === todo}"
        >
          <div class="view">
            <input
              type="checkbox"
              class="toggle"
              :checked="todo.completed"
              @change="checkedOne(todo)"
            />
            <label @dblclick="edit(todo)">{{ todo.title }}</label>
            <button class="destroy" @click="remove(todo.id)"></button>
          </div>
          <input
            type="text"
            class="edit"
            :value="todo.title"
            v-d-focus="isEdit === todo"
            @keyup.enter="doneEdit(todo,$event)"
            @keyup.esc="cancelEdit"
          />
        </li>
        <TodoItem/>
      </ul>
    </section>

  </template>
  
  <script>
  import TodoItem from './TodoItem.vue'

  export default {
    name: 'TodoMain',
    components: {
      TodoItem
    },
    props: {
      todos: Array,
      checked: Function
    },
    data() {
      return {
        toggle: false,
        isEdit: null
      };
    },
    methods: {
      checkedOne(todo) {
        this.$emit('checkedOne',todo);
      },
      checkedAll() {
        this.$emit('checkedAllTodos',this.toggle);
      },
      remove(id) {
        this.$emit('removeTodo',id);
      },
      edit(todo) {
        this.isEdit = todo;
      },
      doneEdit(todo,e){
        const info = {
          id: todo.id,
          title: e.target.value
        }
        if(info.title.trim() == '') {
          this.remove(todo.id);
        }
        this.$emit('editTitle',info);
        this.isEdit = null;
      },
      cancelEdit() {
        this.isEdit = null;
      }
    },
    directives: {
      'd-focus'(el, binding) {
        if (binding.value) el.focus();
      }
    }
  };
  </script>
  
  