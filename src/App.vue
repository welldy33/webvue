<template>
    <Navbar/> 
    <SideBar/>
     <div class="content-wrapper">
        <section class="content">
          <br>
            <div class="card ">
                <div class="card-body">
                  <router-view/>
                </div>
            </div>
        </section>
      </div>
    <Footer/>
  
</template>

<script>
import Navbar from './views/Template/Navbar.vue'
import SideBar from './views/Template/SideBar.vue'
import Footer from './views/Template/Footer.vue'
export default {
  name: 'App', 
  components: {
      Navbar,SideBar,Footer
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

</style>
