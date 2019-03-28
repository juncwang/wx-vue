<template>
    <div class="chats">
        <Header title="微信" btnIcon="plus" :isRight="true"></Header>
    </div>
</template>

<script>
import Header from '../components/Header';

export default {
    name: 'chats',
    components: {
        Header
    }
}
</script>
