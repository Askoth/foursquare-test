<template>
    <div>
        <HeaderControls />
        <VenueResults />
    </div>
</template>

<script>
import HeaderControls from '@components/HeaderControls.vue';
import VenueResults from '@components/VenueResults.vue';


export default {
    components: {
        HeaderControls,
        VenueResults
    },
    data () {
        return {
        }
    }
}
</script>

<style>
</style>
