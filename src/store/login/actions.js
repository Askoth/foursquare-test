import axios from 'axios';

export default {
    getToken({ getters }) {
        axios({
            method: 'get',
            url: 'https://api.foursquare.com/v2/venues/search?ll=40.7,-74&client_id=TWUYXKEMJEFTLQB3VP1OYUFAWV3BFL2NRL3HSTM5L2ULROZR&client_secret=QRSFUHAXZKQEILJ1XL0OIDYOICOYBKYSYBZ3WF4IID5Y2BDZ&v=20181204'//getters.tokenUrl
        }).then((res, err) => {

            if (err) {
                // deal with error
            }

            console.log(res.data.access_token);
        })
    }
}
