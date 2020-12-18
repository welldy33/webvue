<template>
    <Navbar id="nav" ref="container"/> 
    <SideBar/>
  
    <Content>
    
          <template v-slot:links>
              <TabsContent>
                <template v-slot:content>
                  <router-view ref="mycontent"/>
                </template>
              </TabsContent>
          </template>
     
    </Content>
    <Footer/>
</template>

<script>
import Navbar from './views/Template/Navbar.vue'
import SideBar from './views/Template/SideBar.vue'
import Footer from './views/Template/Footer.vue'
import Content from './views/Template/Content.vue'
import TabsContent from './views/Template/TabsContent.vue'

export default {
  name: 'App', 
  props:['isContent'],
  components: {
      Navbar,SideBar,Footer,Content,TabsContent
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
