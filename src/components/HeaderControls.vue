<template>
    <div>
        <button @click="fetchVenues">
            Check for Venues nearby
        </button>
    </div>
</template>

<script>
import { mapActions } from 'vuex';
export default {
    methods: {
        ...mapActions('foursquare', ['fetchVenues'])
    }
}

</script>
