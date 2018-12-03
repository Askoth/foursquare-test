import axios from 'axios';

export default {
    getToken({ getters }) {
        axios({
            method: 'get',
            url: getters.tokenUrl
        }).then((res, err) => {

            if (err) {
                // deal with error
            }

            console.log(res.data.token);
        })
    }
}
