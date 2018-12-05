export default {
    geolocatonSupport(state, { value }) {
        state.geolocatonSupport = value;
    },
    requestStatus(state, { value }) {
        state.requestStatus = value;
    },
    updateVenues(state, { value }) {
        state.venueResults = value;
    }
}
