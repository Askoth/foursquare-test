export default {
    filteredResults({ venueResults, enabledCategories }, getters) {
        return venueResults.reduce((prev, cur) => {

            let enabled = cur.categories.some(({ id }) => {
                return enabledCategories.indexOf(id) != -1;
            })

            if (enabled) {
                prev.push(cur);
            }

            return prev;
        }, [])
    }
}
