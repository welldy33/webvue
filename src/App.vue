<template>
  <h1>{{title}}</h1>
  <teleport to=".modals" v-if="showModal">
    <Modal :header="header" :text ="text" theme="sale" @close="toggleModal">
        <template  v-slot:links>
          <a href="#">Sign up Now</a>
          <a href="#">More Info</a>
        </template>
       <h1>From Main</h1>
       <p>Conten From Main Main</p>
    </Modal>
  </teleport>
   <teleport to=".modals" v-if="showModalTwo">
    <Modal :header="header" :text ="text" theme="sale" @close="toggleModalTest">
        <template  v-slot:links>
          <a href="#">Two</a>
          <a href="#">More Info</a>
        </template>
       <h1>Two</h1>
       <p>Conten From Main Main</p>
    </Modal>
   </teleport>
  <input type="text" ref="name">
  <button @click="toggleModal">Toggle Modal</button>
   <button @click="toggleModalTest">Toggle Modal Challange</button>
  <button @click.shift="handleClick">Click Me</button>
</template>

<script>
import Modal from './components/Modal.vue'
export default {
  name: 'App',
  components: {
    Modal
  },
  data(){
    return {
      title:"This My First Vue",
      header:"Sign up for give away",
      text:"Testing Passing data by props",
      showModal:false,
       showModalTwo:false,
      dataSource:1
    }
  },
  methods:{
    toggleModalTest(){
      this.showModalTwo=!this.showModalTwo;
    },
    toggleModal(){
     this.showModal=!this.showModal;
    },
    handleClick(){
      alert('')
    }
  }
}
</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
h1{
  border-bottom: 1px solid #dddddd;
  display: inline-block;
  padding-bottom: 10px;
}
</style>
