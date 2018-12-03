<template>
    <div>
        <Login />
    </div>
</template>

<script>
import Login from '@components/Login.vue';
import { mapGetters, mapActions } from 'vuex';

export default {
    components: {
        Login
    },
    data () {
        return {
            test: 'hello'
        }
    },
    computed: {
        ...mapGetters('login', ['hasCode'])
    },
    mounted() {
        // couldn't thin about a better place to add this
        if (this.hasCode) {
            this.getToken();
        }
    },
    methods: {
        ...mapActions('login', ['getToken'])
    }
}
</script>

<style>

</style>
