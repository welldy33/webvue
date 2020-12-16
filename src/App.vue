<template>
    <Navbar id="nav" ref="container"/> 
    <SideBar/>
    <Content>
      <template v-slot:links>
      <router-view ref="mycontent"/>
      </template>
    </Content>
     
    <Footer/>
</template>

<script>
import Navbar from './views/Template/Navbar.vue'
import SideBar from './views/Template/SideBar.vue'
import Footer from './views/Template/Footer.vue'
import Content from './views/Template/Content.vue'

export default {
  name: 'App', 
  props:['isContent'],
  components: {
      Navbar,SideBar,Footer,Content
  },
  data(){
    return {
      fields:[],
      count:0
    }
  },
  methods:{
    addBtn(){
     
    },
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
