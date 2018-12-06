export default {
    geolocatonSupport(state, { value }) {
        state.geolocatonSupport = value;
    },
    requestStatus(state, { value }) {
        state.requestStatus = value;
    },
    updateVenues(state, { venues, categories }) {
        state.venueResults = venues;
        state.categories = categories;
        state.enabledCategories = Object.keys(categories);
    },
    updateEnabledCategories(state, value) {
        state.enabledCategories = value
    }
}
