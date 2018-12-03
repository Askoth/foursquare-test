export default {
    getObject() {
        return window.location.search.substring(1).split('&').reduce((prev, cur) => {
            const [ key, value ] = cur.split('=');

            prev[key] = value;

            return prev;
        }, {});
    }
}
