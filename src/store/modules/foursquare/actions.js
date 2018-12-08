import axios from 'axios';
import mockedDetails from '@store/modules/foursquare/mocked-details.json';

const client_id='TWUYXKEMJEFTLQB3VP1OYUFAWV3BFL2NRL3HSTM5L2ULROZR';
const client_secret='QRSFUHAXZKQEILJ1XL0OIDYOICOYBKYSYBZ3WF4IID5Y2BDZ';

export default {
    fetchVenues({ commit, state, getters, dispatch }) {

        if ("geolocation" in navigator) {
            commit('geolocatonSupport', { value: true })
        } else {
            commit('geolocatonSupport', { value: false })
            return;
        }

        commit('requestStatus', { value: 'loading' });

        navigator.geolocation.getCurrentPosition(function(position) {
            dispatch('requestVenues', {
                latitude: position.coords.latitude,
                longitude: position.coords.longitude
            });
        });
    },
    requestVenues({ commit, state, getters, dispatch }, { latitude, longitude }) {
        axios.get('https://api.foursquare.com/v2/venues/explore', {
            params: {
                client_id,
                client_secret,
                ll:`${latitude},${longitude}`,
                v: formatDateTimeStamp(),
                limit: 10,
            }
        })
        .then(function ({ data }) {
            const venuesData = getVenues(data.response)

            const venues = [];
            const categories = {};
            venuesData.forEach((venue) => {
                const { location, name, id, categories: cats } = venue;

                venues.push({
                    name,
                    id,
                    categories: cats,
                    formattedAddress: location.formattedAddress,
                })

                const venueCategories = getCategories(cats);

                Object.assign(categories, venueCategories);
            })


            commit('updateVenues', {
                venues,
                categories,
            })
            commit('requestStatus', { value: 'done' });

            dispatch('fetchVenueDetails')
        })
        .catch(function (error) {
            commit('requestStatus', { value: 'error' });
            console.log(error);
        })
    },
    fetchVenueDetails({ commit, state, getters, dispatch }) {

        // this foursquare has a very low limit

        state.venueResults.forEach(({id}) => {
            if (typeof state.venueDetails[id] == 'undefined') { // memory cache, could also use session
                // const {
                //     canonicalUrl,
                //     price,
                //     bestPhoto,
                // } = getMockedDetails();

                // commit('addVenueDetails', {
                //     id,
                //     canonicalUrl,
                //     price,
                //     bestPhoto,
                //     mocked: true
                // })

                axios.get(`https://api.foursquare.com/v2/venues/${id}`, {
                    params: {
                        client_id,
                        client_secret,
                        v: formatDateTimeStamp(),
                    }
                })
                .then(function ({ data }) {
                    console.log(data)
                })
                .catch(function (error) {
                    console.log(error);
                })
            }
        })
    }
}

function formatDateTimeStamp() {
    const date = new Date();

    const YYYY = date.getFullYear();
    const MM = ('0' + date.getMonth() + 1).slice(-2);
    const DD = ('0' + date.getDate()).slice(-2);

    const timeStamp = `${YYYY}${MM}${DD}`;

    return timeStamp;
}

function getVenues(venueResults) {
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

function getCategories(categories) {
    const categoriesById = {};
    categories.forEach(({ id, name }) => {
        categoriesById[id] = {
            name,
            id
        }
    })

    return categoriesById
}


function getMockedDetails() {
    return mockedDetails.venue;
}
