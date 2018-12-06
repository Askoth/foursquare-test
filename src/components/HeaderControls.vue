<template>
    <div>
        <button @click="fetchVenues" class="btn fetch-btn">
            Check for Venues nearby
        </button>

        <ul class="filter-list">
            <li v-for="cat in categories" class="filter-item">
                <label class="btn filter-btn">
                    {{ cat.name }}
                    <input type="checkbox" v-model="filteredCategories" name="categories" :value="cat.id">
                </label>
            </li>
        </ul>
    </div>
</template>

<script>
import { mapActions, mapState, mapMutations } from 'vuex';
export default {
    computed: {
        ...mapState('foursquare', ['venueResults', 'categories', 'enabledCategories']),
        filteredCategories: {
            set(value) {
                this.updateEnabledCategories(value)
            },
            get() {
                return this.enabledCategories
            }
        }
    },
    methods: {
        ...mapActions('foursquare', ['fetchVenues']),
        ...mapMutations('foursquare', ['updateEnabledCategories'])
    }
}

</script>

<style>
.btn {
    box-sizing: border-box;
    padding: 10px;
    margin: 10px 5px;
    background: white;
    color: black;
}

.fetch-btn {
    margin-bottom: 20px;
}

.filter-list {
    display: flex;
    flex-wrap: wrap;
}

.filter-item {
    display: block;
    flex-shrink: 0;
}

.filter-btn {
    display: block;
    white-space: nowrap;
}
</style>
