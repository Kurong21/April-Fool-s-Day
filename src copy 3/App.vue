<template>
  <div id="app">
    <section class="todoapp">
      <TodoHeader @add="addTodo"/>
      <TodoMain
        :todos="filterTodos"
        @checkedOne="checkedOne"
        @checkedAllTodos="checkedAllTodos"
        @removeTodo="removeTodo"
        @editTitle="editTitle"
      />
      <TodoFooter
        :todos="todos"
        @hashValue="hashValue"
        @clear="clear"
      />
    </section>
  </div>
</template>

<script>
import TodoHeader from './components/TodoHeader';
import TodoMain from './components/TodoMain';
import TodoFooter from './components/TodoFooter';
import { nanoid } from 'nanoid';

export default {
  name: 'App',
  components: {
    TodoHeader,
    TodoMain,
    TodoFooter
  },
  data() {
    return {
      todos: [
        { id: nanoid(), title: '吃饭', completed: true },
        { id: nanoid(), title: '睡觉', completed: false },
        { id: nanoid(), title: '打豆豆', completed: false }
      ],
      hashTag: 'all'
    };
  },
  mounted() {
    this.$bus.$on('message',this.getMessage);
  },
  beforeDestroy() {
    this.$bus.$off('message');
  },
  computed: {
    filterTodos(){
      const rule = {
        "completed": 1,
        "active": 2
      };
      switch(rule[this.hashTag]){
        case 1:
          return this.todos.filter(t => t.completed);
        case 2:
          return this.todos.filter(t => !t.completed);
        default:
          return this.todos;
      }
    }
  },
  methods: {
    getMessage(value){
      console.log(value);
    },
    addTodo(title) {
      this.todos.unshift({
        id: nanoid(),
        title: title.trim(),
        completed: false
      });
    },
    checkedOne(value) {
      this.todos.forEach(todo => {
        if(todo.id  == value.id) {
          todo.completed = !todo.completed;
        }
      });
    },
    checkedAllTodos(value){
      this.todos.forEach(todo => { todo.completed = !value });
    },
    removeTodo(id) {
      this.todos = this.todos.filter(todo => todo.id != id);
    },
    editTitle({id,title}) {
      this.todos.forEach(todo => { 
        if(todo.id == id) todo.title = title;
      });
    },
    hashValue(tag){
      this.hashTag = tag;
    },
    clear() {
      this.todos = this.todos.filter(todo => !todo.completed);
    }
  }
};
</script>

<style>
@import "https://unpkg.com/todomvc-app-css@2.4.1/index.css";
</style>
