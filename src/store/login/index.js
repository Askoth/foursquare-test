import { CLIENT_ID } from './constants.js';
import queryStrings from '@utils/query-strings.js';
import getters from './getters.js';
import actions from './actions.js';

export default {
    namespaced: true,
    getters,
    actions,
    state: {
        clientId: CLIENT_ID,
        redirectUri: 'http://localhost:8000',
        urlParams: queryStrings.getObject()
    }
}
