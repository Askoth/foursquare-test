import Vue from 'vue';
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
    },
    addVenueDetails(state, obj) {
        const newValue = {
            ...state.venueDetails,
            [obj.id]: obj
        };

        state.venueDetails = newValue
    },
    updateErrorMessage(state, { status, message }) {
        state.errorMessage = `[Error ${status}] ${message}, Try adding 'mock=1' parameter to the url.`
    }

}
