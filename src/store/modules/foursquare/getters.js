export default {
    displayVenues({ venueResults }, getters) {

        const venues = [];

        // deep clone without observers
        const venueObj = JSON.parse(JSON.stringify(venueResults));

        if (venueObj.groups) {
            venueObj.groups.forEach(({ items }) => {
                items.forEach(({ venue }) => {
                    venues.push(venue);
                })
            })
        }

        return venues
    }
}
