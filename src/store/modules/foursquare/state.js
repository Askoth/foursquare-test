export default {
    geolocatonSupport: false,
    requestStatus: 'idle', // idle, done, loading, error
    errorMessage: '',
    venueResults: {
        // How it looks like:

        // groups: [{…}]
        // headerFullLocation: "New York"
        // headerLocation: "New York"
        // headerLocationGranularity: "city"
        // suggestedBounds: {ne: {…}, sw: {…}}
        // suggestedFilters: {header: "Tap to show:", filters: Array(2)}
        // suggestedRadius: 907
        // totalResults: 195
    }
}
