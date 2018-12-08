<template>
    <div class="venue-card">
        <div class="error" v-if="error.length > 0">
            {{ error }}
        </div>
        <h2 class="venue-name">
            <a
                v-if="url.length > 0"
                :href="url"
                class="venue-link"
            >
                {{ name }}
            </a>
            <span v-else>
                {{ name }}
            </span>
        </h2>

        <div class="image">
            <img
                v-if="bestPhoto.length > 0"
                class="best-photo"
                :src="bestPhoto"
                :alt="`${name} best image`"
            >
            <div
                v-else
                class="best-photo no-picture-text"
            >
                No picture
            </div>
        </div>

        <div class="address">
            <span
                v-for="addressLine in formattedAddress"
                class="address-line"
            >
                {{ addressLine }}
            </span>
        </div>

        <div v-if="!!price">
            Price: {{ price }}
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
    props: [ 'categories', 'formattedAddress', 'id', 'name' ],
    computed: {
        ...mapState('foursquare', {
            venueDetails (state) {
                const emptyObj = {
                    canonicalUrl: '',
                    price: {},
                    bestPhoto: {},
                    mocked: true
                };

                return typeof state.venueDetails[this.id] != 'undefined' ? state.venueDetails[this.id] : emptyObj
            }
        }),
        price() {
            return this.venueDetails.price.message || null
        },
        url() {
            return this.venueDetails.canonicalUrl
        },
        error() {
            return this.venueDetails.error || ''
        },
        bestPhoto() {
            return this.createPhotoUrl(this.venueDetails.bestPhoto)
        }
    },
    methods: {
        createPhotoUrl({ prefix='', suffix='' }) {
            if (prefix.length == 0) {
                return ''
            }

            return `${prefix}300x300${suffix}`;
        }
    }
}
</script>

<style>
.venue-card {
    background: white;
    box-shadow: 0 0 10px 1px rgba(0,0,0,0.1);
    padding: 10px;
    height: 100%;
    width: 100%;
    font-family: tahoma;
    box-sizing: border-box;
}

.venue-name {
    margin: 0 0 10px;
    font-size: 18px;
    min-height: 2.8em;
}

.venue-link {
    color: #000;
}

.venue-link:visited {
    color: #444;
}

.venue-link:hover, .venue-link:active, {
    color: inherit;
}

.address {
    font-size: 14px;
    margin: 10px 0;
}

.address-line {
    display: block;
}

.best-photo {
    width: 100%;
    height: 200px;
    background-color: #DDD;
    background-size: cover;
}

.no-picture-text {
    display: flex;
    align-items: center;
    justify-content: center;
}

.error {
    border: 1px solid #F00;
    background: #f7e9e9;
    color: #F00;
    font-family: Tahoma;
    font-size: 12px;
    margin: 0 0 5px;
    padding: 5px;
}
</style>
