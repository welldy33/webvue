<template>
    
    <div class="content-wrapper iframe-mode" data-widget="iframe" data-loading-screen="750" >
         <Tabwin :SD="$route.params.isContent"/>
         <div class="tab-content">
            <slot v-once name="links"></slot>
         </div>
    </div>
</template>
<script>
import Tabwin from './Tabwin.vue'
export default {
  data(){
    return{
      SDK:true
    }
  },
  components: {
     Tabwin
  },
  mounted(){
    console.log(this.$refs['mycontent'])
  },
  updated(){
    console.log("update from contrent")
  }
}
</script>
<style>
.test{
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,0.5);
    top: 0;
    position: fixed;
}


</style>