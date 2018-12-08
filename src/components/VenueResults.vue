<template>
    <div>
        <div v-if="errorMessage.length > 0" class="error">
            {{ errorMessage }}
        </div>
        <!-- requestStatus: 'idle', // idle, done, loading, error -->
        <div v-if="requestStatus == 'idle'">
            Click the button to check venues neaby. Your location will be requested.
        </div>
        <div v-else-if="requestStatus == 'loading'">
            Loading results...
        </div>
        <div v-else-if="requestStatus == 'done'">
            <ul
                v-if="filteredResults.length > 0"
                class="venue-list"
            >
                <li
                    v-for="(venue, index) in filteredResults"
                    class="venue-item"
                >
                    <VenueCard
                        :key="index"
                        v-bind="venue"
                    />
                </li>
            </ul>
            <p v-else>
                No results yet
            </p>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapState } from 'vuex';
import VenueCard from '@components/VenueCard.vue';

export default {
    components: {
        VenueCard
    },
    computed: {
        ...mapState('foursquare', ['requestStatus', 'errorMessage']),
        ...mapGetters('foursquare', ['filteredResults']),
    }

}

</script>

<style>
.venue-list {
    display: flex;
    flex-wrap: wrap;
}

.venue-item {
    width: 200px;
    margin: 10px;
    min-height: 300px;
}
</style>
