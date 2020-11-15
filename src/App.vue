<template>
    <div>
        <h1>Todays date is {{ date }}</h1>
        <button v-on:click="date = new Date().toTimeString()">Refresh</button>
    </div>
</template>

<script>
export default {
    name: "App",
    data: () => ({
        date: new Date().toTimeString()
    })
}
</script>

<style scoped>
    div{
        color: #455a64;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    }
</style>