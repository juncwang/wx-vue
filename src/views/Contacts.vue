<template>
    <div class="contacts">
        <Header title="通讯录" btnIcon="user-plus" :isRight="true"></Header>
    </div>
</template>

<script>
import Header from '../components/Header';

export default {
    name: 'contacts',
    components: {
        Header
    }
}
</script>