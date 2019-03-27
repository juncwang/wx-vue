<template>
  <div class="login">
    <div class="title">用户登录</div>
    <div class="content">
      <!-- 表单 -->
      <form>
        <CusInput label="邮箱" placeholder="请填写邮箱" v-model="user.email"></CusInput>
        <CusInput label="密码" placeholder="请填写密码" v-model="user.password" type="password"></CusInput>
      </form>
      <div class="btnWarp">
        <CusButton :disabled="isDisabled" @click="loginClick">登录</CusButton>
      </div>
    </div>
    <div class="footerWarp">
      |
      <button class="register" @click="$router.push('/register')">注册账号</button>|
    </div>
  </div>
</template>

<script>
import CusInput from "../components/CusInput";
import CusButton from "../components/CusButton";

export default {
  name: "login",
  components: {
    CusInput,
    CusButton
  },
  data() {
    return {
      user: {
        email: "",
        password: ""
      }
    };
  },
  methods: {
    loginClick() {
      var reg = /^([a-zA-Z0-9._-])+@([a-zA-Z0-9_-])+(\.[a-zA-Z0-9_-])+/;
      if (!reg.test(this.user.email)) {
        alert("请输入合法的邮箱地址！");
        return;
      }

      this.$axios.post('/api/users/login', this.user)
        .then(res => {
          const {token} = res.data
          localStorage.setItem('wxToken', token)
          this.$router.push('/index')
        })
    }
  },
  computed: {
    isDisabled() {
      if (this.user.email && this.user.password) return false;
      else return true;
    }
  }
};
</script>

<style scoped>
.login {
  width: 100%;
  height: 100%;
  overflow: hidden;
  padding: 16px;
  box-sizing: border-box;
}

.title {
  margin-top: 80px;
  font-size: 22px;
  text-align: center;
}

.footerWarp {
  margin-top: 32px;
  text-align: center;
  width: 100%;
  color: #888;
}

.register {
  font-size: 16px;
  outline: none;
  border: none;
  background-color: transparent;
  color: #7b8ca9;
}

.content,
.btnWarp {
  margin-top: 30px;
}
</style>
