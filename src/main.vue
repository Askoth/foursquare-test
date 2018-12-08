<template>
    <div class="app">
        <h1 class="header">My Awesome App</h1>
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
    margin: 0;
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

.error {
    border: 1px solid #F00;
    background: #f7e9e9;
    color: #F00;
    font-family: Tahoma;
    font-size: 12px;
    margin: 0 0 5px;
    padding: 5px;
}

</style>
