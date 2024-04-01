<template>
  <header class="header">
    <h1 class="title">GitHub用户搜索</h1>
    <div class="search">
        <input type="text" placeholder="请输入你要搜索用户的关键字" v-model="keyWord">
        <button @click="getUsers">搜索</button>
    </div>
  </header>
</template>

<script>
    import axios from 'axios';

export default {
    name: 'SearchHeader',
    data(){
        return {
            keyWord: ''
        }
    },
    methods: {
        getUsers(){
            this.$bus.$emit('updateList',{data: [],isFirst: false, isLoading: true});
            if(!this.keyWord){
                alert("必须输入关键字才能搜索!!!");
                return;
            }
            axios.get(`https://api.github.com/search/users?q=${this.keyWord}`).then(
                (response) => {
                    this.$bus.$emit('updateList',{users: response.data.items,isFirst: false, isLoading: false,hasError: ''});
                }
            ).catch((err) => {
                this.$bus.$emit('updateList', {users: [],isFirst: false, isLoading: false,hasError: err.message});
            });
        }
    },
    beforeDestroy() {
        this.$bus.$off('sendInfo');
    }
}
</script>

<style>

    .header {
        width: 80%;
        height: 160px;
        margin: 50px auto;
        padding: 20px;
        background-color: skyblue;
    }

    h1 {
        color: aliceblue;
        font-family: Georgia, 'Times New Roman', Times, serif;
    }

    .search {
        height: 40px;
        overflow: hidden;
    }

    input {
       width: 300px;
       height: 100%;
       border-radius: 10px 0 0 10px;
       outline-style: none;
       border: 0px;
       font-size: 14px;
       font-family: Georgia, 'Times New Roman', Times, serif;
    }

    input:focus{
       outline: 1px solid #AFECAB; 
    }

    button {
        width: 80px;
        height: 100%;
        background-color: yellowgreen;
        border-radius: 0 10px 10px 0;
        border: 0;
        cursor: pointer;
        font-weight: 800;
    }
</style>