<template>
    <div class="me">
        <Header title="我的"></Header>
        <div class="container">
            <div class="cell-wrapper">
                <div class="cell-title" v-if="user">
                    <img :src="user.avatar" alt="">
                    <span>{{user.username}}</span>
                </div>
            </div>
            <div class="btn_wrapper">
                <CusButton @click="logout">退出登录</CusButton>
            </div>
        </div>
    </div>
</template>

<script>
import Header from '../components/Header';
import CusButton from '../components/CusButton';
import jwtDecode from 'jwt-decode'

export default {
    name: 'me',
    computed:{
        user(){
            const token = localStorage.getItem("wxToken");
            const user = jwtDecode(token);
            return user;
        }
    },
    components: {
        Header,
        CusButton
    },
    methods: {
        logout(){
            localStorage.removeItem('wxToken')
            this.$router.push('/login')
        }
    }
}
</script>

<style scoped>
.me {
  width: 100%;
  height: 100%;
  overflow: hidden;
}
.container {
  width: 100%;
  height: calc(100% - 50px);
  margin-top: 50px;
}
.cell-wrapper {
  background-color: #fff;
  box-sizing: border-box;
  color: inherit;
  min-height: 80px;
  display: flex;
  font-size: 16px;
  line-height: 1;
  overflow: hidden;
  padding: 0 8px;
  width: 100%;
  line-height: 80px;
  border-top: 1px solid #d9d9d9;
  border-bottom: 1px solid #d9d9d9;
}
.cell-title {
  flex: 1;
}
.cell-title img {
  width: 4rem;
  height: 4rem;
  vertical-align: middle;
  margin-right: 0.6rem;
}
.cell-title span {
  display: inline-block;
  vertical-align: middle;
}
.btn_wrapper {
  box-sizing: border-box;
  padding: 20px;
}
</style>
