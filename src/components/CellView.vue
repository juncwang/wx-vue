<template>
  <div class="cell_crilce">
    <div class="img_wrapper">
      <img :src="user.avatar" alt>
    </div>
    <div class="content_wrapper">
      <div class="cell_name">{{user.username}}</div>
      <div class="cell_text" v-if="momentsObj.text">{{momentsObj.text}}</div>
      <div class="cell_img" v-if="momentsObj.imgs.length > 0">
        <img v-for="(item, index) in momentsObj.imgs" :key="index" :src="item" alt>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "cellview",
  data() {
    return {
      user: {
        username: "",
        avatar: ""
      }
    };
  },
  props: {
    momentsObj: Object
  },
  methods: {
    getUser() {
      const url = "/api/users/getUserById/" + this.momentsObj.userid;
      this.$axios.get(url).then(res => {
        this.user.username = res.data.username;
        this.user.avatar = res.data.avatar;
      });
    }
  },
  created() {
    this.getUser();
  }
};
</script>

<style scoped>
.cell_crilce {
  width: 100%;
  box-sizing: border-box;
  padding: 16px;
  border-bottom: 1px solid #d9d9d9;
  display: flex;
  flex-direction: row;
}
.img_wrapper {
  flex: 1;
}
.img_wrapper img {
  width: 40px;
  height: 40px;
}
.content_wrapper {
  flex: 9;
  padding-left: 8px;
}
.content_wrapper .cell_name {
  font-weight: bold;
  color: #8cafe6;
}
.content_wrapper div {
  margin-top: 8px;
  word-wrap: break-word;
}
.content_wrapper .cell_img {
  width: 100%;
  overflow: hidden;
}
.content_wrapper .cell_img img {
  width: 31%;
  height: 6rem;
  float: left;
  margin-right: 5px;
  margin-bottom: 5px;
}
</style>
