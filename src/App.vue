<template>
  <div id="app">
    <SearchHeader/>
    <UserList/>
  </div>
</template>

<script>
  import SearchHeader from './components/SearchHeader'
  import UserList from './components/UserList'

export default {
  name: 'App',
  components: {
    SearchHeader,
    UserList
  },
  
  
};
</script>

<style>

    body {
      margin: 0;
      background-color: skyblue;
    }

    #app {
      width: 100%;
      height: auto;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%,-50%);
      text-align: center;
    }
</style>
