<template>
    <div>
        <ul v-if="filteredResults.length > 0">
            <li
                v-for="venue in filteredResults"
            >
                <dl>
                    <dt>Name</dt>
                    <dd>{{ venue.name }}</dd>

                    <dt>Address</dt>
                    <dd>
                        <p v-for="addressLine in venue.formattedAddress">
                            {{ addressLine }}
                        </p>
                    </dd>

                    <dt>Photos</dt>
                    <dd>{{ venue.photos }}</dd>
                </dl>
            </li>
        </ul>
        <p v-else>
            No results yet
        </p>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    computed: {
        ...mapGetters('foursquare', ['filteredResults']),
    }

}

</script>
