<template>
  <footer class="footer" v-show="showFooter">
    <span class="todo-count">
      <strong>{{ items }}</strong>
      left
    </span>
    <ul class="filters">
      <li>
        <a
          href="#/all"
          :class="{ selected: hashTag == 'all'}"
          @click="filter('')"
          >All</a
        >
      </li>
      <li>
        <a
          href="#/active"
          :class="{ selected: hashTag == 'active'}"
          @click="filter('active')"
          >Active</a
        >
      </li>
      <li>
        <a
          href="#/completed"
          :class="{ selected: hashTag == 'completed'}"
          @click="filter('completed')"
          >Completed</a
        >
      </li>
    </ul>
    <button class="clear-completed" @click="clearComplated">
      Clear Completed
    </button>
  </footer>
</template>

<script>
export default {
  name: 'TodoFooter',
  props: {
    todos: Array
  },
  data() {
    return {
      hashTag: 'all'
    };
  },
  methods: {
    filter(tag) {
      this.hashTag = tag;
      this.$emit('hashValue', this.hashTag);
    },
    clearComplated() {
      this.$emit('clear');
    }
  },
  computed: {
    items(){
      const length = this.todos.filter(t => !t.completed).length;
      return length > 0 ? length + 'items' : length + 'item';
    },
    showFooter(){
      return this.todos.length > 0;
    }
  }
};
</script>
