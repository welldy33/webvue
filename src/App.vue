<template>
    <button @click="onPublish" class="btn btn-primary float-right">Publish</button>
    <button @click="onPublish2" class="btn btn-primary float-right">Publish2</button>
    <button @click="onSubs" class="btn btn-primary float-right">Subscribe</button>
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
import Mqtt from './_service/Mqtt.vue'

export default {
  name: 'App', 
  props:['isContent'],
  mixins:[Mqtt],
  components: {
      Navbar,SideBar,Footer,Content,TabsContent
  },
  data(){
    return {
      fields:[],
      count:0
    }
  },
  mounted(){
    
  },
  methods:{
    onSubs(){
        this.subscribe();
    },
    onPublish(){
      this.publish();
    },
    onPublish2(){
      this.publish2();
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
