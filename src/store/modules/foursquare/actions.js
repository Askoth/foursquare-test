import axios from 'axios';

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
            }
        })
        .then(function ({ data }) {
            commit('updateVenues', { value: data.response })
            commit('requestStatus', { value: 'done' });
        })
        .catch(function (error) {
            commit('requestStatus', { value: 'error' });
            console.log(error);
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
