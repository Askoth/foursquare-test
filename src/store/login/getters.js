export default {
    oauthUrl ({clientId, redirectUri}) {
        return `https://foursquare.com/oauth2/authenticate
                    ?client_id=${clientId}
                    &response_type=code
                    &redirect_uri=${encodeURIComponent(redirectUri)}`.replace(/\s/g, '')
    },
    tokenUrl({clientId, redirectUri, secretId}, {code}) {
        return `/token
                    ?client_id=${clientId}
                    &redirect_uri=${encodeURIComponent(redirectUri)}
                    &code=${code}`.replace(/\s/g, '')
    },
    hasCode (state, { code }) {
        return code.length > 0
    },
    code ({urlParams}) {
        return urlParams.code || '';
    }
}
