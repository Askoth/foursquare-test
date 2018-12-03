<template>
    <a v-if="!hasCode" :href="oauthUrl">Sign in</a>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    computed: {
        ...mapGetters('login', ['oauthUrl', 'hasCode'])
    }

}
</script>
