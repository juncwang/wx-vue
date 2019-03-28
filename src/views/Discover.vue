<template>
    <div class="discover">
        <Header title="发现"></Header>
        <div class="content">
            <Cell :path="cellData.path" :src="cellData.src" :title="cellData.title"></Cell>
        </div>
    </div>
</template>

<script>
import Header from '../components/Header'
import Cell from '../components/Cell';

export default {
    name: 'discover',
    data(){
        return {
            cellData: {
                src: 'pyq.jpg',
                title: '朋友圈',
                path: '/moments'
            }
        }
    },
    components: {
        Header,
        Cell
    }
}
</script>

<style scoped>
.discover {
  width: 100%;
  height: calc(100% - 55px);
  position: relative;
  box-sizing: border-box;
}
.content {
  width: 100%;
  height: calc(100% - 50px);
  margin-top: 50px;
}
</style>
