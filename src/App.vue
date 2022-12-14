<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>|
    <router-link to="/product">Products</router-link> |
    <router-link to="/adminTable">Admin</router-link>|
    <router-link to="/contactForm">Contact</router-link>
  </nav>
  <router-view/>
  <div id="app">
    <products/>
  </div>
</template>

<script>
  import product from './components/product.vue'

  export default{
    name: 'app',
    components:{
      product
    },
    data(){
      return{
        products:[]
      }
    }
  }
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
