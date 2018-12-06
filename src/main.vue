<template>
    <div class="app">
        <div class="header">My Awesome App</div>
        <HeaderControls class="controls" />
        <VenueResults class="venues" />
    </div>
</template>

<script>
import HeaderControls from '@components/HeaderControls.vue';
import VenueResults from '@components/VenueResults.vue';


export default {
    components: {
        HeaderControls,
        VenueResults
    },
    data () {
        return {
        }
    }
}
</script>

<style>

html, body {
    margin: 0;
    padding: 0;
}

ul, li {
    list-style-type: none;
    padding: 0;
    margin: 0;
}

:root {
    --header-color: #00113d;
    --controls-color: #0732a2;
    --venue-color: #efeff4;
    --title-color: #efefef;
    --padding: 10px;
}

.app {
    display: grid;
    grid-template-columns: auto 370px;
    grid-template-rows: min-content auto;
    grid-template-areas:
    "grid-header grid-header"
    "grid-venues grid-controls";
        height: 100vh;
}

.header {
    grid-area: grid-header;
    background: var(--header-color);
    color: var(--title-color);
    font-family: Tahoma;
    padding: var(--padding);
    font-size: 25px;
}

.controls {
    grid-area: grid-controls;
    background: var(--controls-color);
    padding: var(--padding);
}

.venues {
    grid-area: grid-venues;
    background: var(--venue-color);
    padding: var(--padding);
}

</style>
