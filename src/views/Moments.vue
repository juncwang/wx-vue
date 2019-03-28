<template>
  <div class="moments">
    <Header title="朋友圈" :isLeft="true" :isRight="true" btnIcon="camera"></Header>
    <div class="container">
      <Scroll @pulldown="loadData" ref='refresh'>
        <div class="head_wrapper">
          <div class="user_head">
            <span>{{user.username}}</span>
            <div class="user_img">
              <img :src="user.avatar" alt class="head_img">
            </div>
          </div>
        </div>
        <div class="content_wrapper">
          <CellView v-for="(item, index) in momentsList" :key="index" :momentsObj="item"></CellView>
        </div>
      </Scroll>
    </div>
  </div>
</template>

<script>
import Header from "../components/Header";
import CellView from "../components/CellView";
import Scroll from '../components/Scroll';
import jwtDecode from "jwt-decode";

export default {
  name: "monents",
  computed: {
    user() {
      const token = localStorage.getItem("wxToken");
      const user = jwtDecode(token);
      return user;
    }
  },
  data() {
    return {
      momentsList: []
    };
  },
  methods: {
    getLatestData() {
      this.$axios.get("/api/moments/latest").then(res => {
        this.momentsList = [...res.data];

        this.$refs.refresh.$emit("refresh")
      });
    },
    loadData(){
      this.getLatestData()
    }
  },
  components: {
    Header,
    CellView,
    Scroll
  },
  created() {
    this.getLatestData();
  }
};
</script>

<style scoped>
.moments {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
}

.container {
  width: 100%;
  height: calc(100% - 50px);
  padding-top: 50px;
  overflow: auto;
}
.head_wrapper {
  width: 100%;
  position: relative;
  height: 200px;
  background: url(../assets/cricle_bg.png) no-repeat;
  background-size: 100% 100%;
}
.head_wrapper .user_head {
  position: absolute;
  bottom: -30px;
  right: 16px;
}
.user_img {
  width: 60px;
  height: 60px;
  padding: 3px;
  border: 1px solid #c5c5c5;
  box-sizing: border-box;
}
.user_head img {
  width: 100%;
  height: 100%;
}
.user_head span {
  line-height: 30px;
  position: absolute;
  right: 76px;
  width: 200px;
  text-align: right;
  color: white;
}
</style>