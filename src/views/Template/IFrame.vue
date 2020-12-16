<template>
    <Navbar/> 
    <SideBar/>
    <Content/>
    <Footer/>
</template>
<script>
import Navbar from './Navbar.vue'
import SideBar from './SideBar.vue'
import Footer from './Footer.vue'
import Content from './Content.vue'
export default {
    components: {
      Navbar,SideBar,Footer,Content
  },
}
</script>