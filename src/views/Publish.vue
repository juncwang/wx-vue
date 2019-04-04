<template>
    <div class="publish">
        <div class="header">
            <button @click="$router.go(-1)">取消</button>
            <button @click="publish">发布</button>
        </div>
        <div class="content">
            <div class="text_wrap">
                <textarea placeholder="说说你的感受..." v-model="text"></textarea>
                <Upload @getImgs="getImages"></Upload>
            </div>
        </div>
    </div>
</template>

<script>
import Upload from "../components/Upload";
import jwtDecode from 'jwt-decode';

export default {
    name: 'publish',
    data(){
        return {
            text: "",
            imgs: []
        }
    },
    computed: {
        use(){
            const token = localStorage.getItem('wxToken')
            const decode = jwtDecode(token)
            return decode
        }
    },
    methods: {
        uploadfile(){
            let file = this.imgs[0]
            this.imgs.splice(0,1)
            let formdata = new FormData()
            formdata.append('file',file)
            formdata.append('submit',false)
            let config = {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            }
            this.$axios.post('/api/files/upload', formdata, config)
                .then(res => {
                    // console.log(res.data)
                    if(this.imgs.length > 0){
                        console.log(this.imgs.length)
                        this.uploadfile()
                        
                    }else{
                        console.log('hello world')
                    }
                })
        },
        publish(){
            this.uploadfile()
            
        },
        getImages(imgs){
            // 获取 base64
            this.imgs = imgs
        },
        // uploadFile(file){
        //     let reader = new FileReader()
        //     const _this = this
        //     reader.onload = function(e){
        //         // 把文件转换成 base64
        //         _this.imgs.push(e.target.result)
        //     }
        //     reader.readAsDataURL(file)

        // }
    },
    components: {
        Upload
    }
}
</script>

<style scoped>
.publish {
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
}

.header {
  width: 100%;
  height: 50px;
  box-sizing: border-box;
  display: flex;
  padding: 0 10px;
  line-height: 50px;
  justify-content: space-between;
}
.header button {
  border: none;
  outline: none;
  background-color: transparent;
  font-size: 16px;
}
.header button:nth-child(2) {
  color: #20af0e;
}

.content {
  width: 100%;
  box-sizing: border-box;
  padding: 16px;
}
.text_wrap textarea {
  width: 100%;
  font-size: 14px;
  min-height: 60px;
  border: none;
  outline: none;
}
.text_wrap {
  margin-bottom: 16px;
}
</style>
