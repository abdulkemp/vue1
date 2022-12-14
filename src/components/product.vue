<template>
    <div class="container">
        <h1>Products</h1>
        <div class="card" id="app">
            <img src="" alt="">
            <div class="card-body">
                <h5 class="card-title"></h5>
                <h5 class="card-title"></h5>
                <p class="card-text"></p>
            </div>
            <product v-bind:list="products"/>
        </div>
    </div>
</template>

<script>
    export default {
        name: "product",
        props: ["list"]
    }
</script>

<style lang="scss" scoped>

</style>