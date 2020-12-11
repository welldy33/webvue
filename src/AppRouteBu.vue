<template>
  <div class="navigation">
    <router-link class="nav-item" to="/">Home</router-link>
    <router-link class="nav-item" :to="{name:'About'}">About</router-link>
    <router-link class="nav-item" :to="{name:'Jobs'}">Jobs</router-link>
  </div>
  <button @click="redirect"> Redirect </button>
   <button @click="back">Go Back</button>
    <button @click="forward">Go Forward</button>
    <hr>
  <router-view/>
 
</template>

<script>
export default {
  name: 'App', 
  components: {
  },
  data(){
    return {
     
    }
  },
  methods:{
    redirect(){
      this.$router.push({name:'Home'})
    },
    back(){
      this.$router.go(-1)
    },
    forward(){
       this.$router.go(+1)
    }
  }
}
</script>

<style>
#app, .modals {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
a{
  color: #dddddd;
  text-decoration: none;
  display: inline-block;
  background: orange;
  margin: 5px;
  padding: 10px 20px 10px 20px;
  border: 1px solid #ddd;
  border-radius: 10px;
}
a:hover{
  background-color: yellow;
  color:black;
}
.router-link-exact-active{
  background-color: #ddd;
  color: navy;
}
.navigation{
  background-color: navy;
  padding: 10px;
}
h1{
  border-bottom: 1px solid #dddddd;
  display: inline-block;
  padding-bottom: 10px;
}
</style>
