<template>
  <section class="list">
    <ul>
        <li v-for="user in info.users" :key="user.login" v-show="info.users.length">
            <a :href="user.html_url">
                <img :src="user.avatar_url">
            </a>
            <span>{{ user.login }}</span>
        </li>
        <h2 v-show="info.isFirst">欢迎使用GitHub用户搜索！！！</h2>
        <h2 v-show="info.isLoading">加载中，请等候......</h2>
        <h2 class="error" v-show="info.hasError">出错了....[{{ info.hasError }}]</h2>
    </ul>
  </section>
</template>

<script>
export default {
    name: 'UserList',
    data(){
        return {
            info: {
                users: [],
                isFirst: true,
                hasError: '',
                isLoading: false
            }
        }
    },
    mounted(){
        this.$bus.$on('updateList',(info) => {
            this.info = info;
        })
    }
}
</script>

<style>
    * {
        list-style: none;
    }

    .list {
        width: 80%;
        background-color: whitesmoke;
        margin: 0 auto;
        padding: 10px;
        border-radius: 10px;
        overflow: auto;
    }

    ul {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
    }

    li {
        width: 100px;
        height: 90px;
        padding: 10px;
        margin: 10px;
        display: flex;
        flex-direction: column;
    }

    img {
        height: 80px;
    }

    a {
        cursor: pointer;
    }

    span {
        font-size: 15px;
        font-weight: 800;
        font-family: Georgia, 'Times New Roman', Times, serif;
    }

    .error {
        color: red;
    }
</style>