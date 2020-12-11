<template>
 
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
        <a href="#">More Info Two Menu</a>
      </template>
      <h1>Two</h1>
      <p>Conten From Main Main</p>
  </Modal>
  </teleport>
  <h1>{{title}}</h1><br>
  <input type="text" ref="name"/><br>
  <button @click="toggleModal">Toggle Modal</button>
  <button @click="toggleModalTest">Toggle Modal Challange</button>
  <button @click.shift="handleClick">Click Me</button>
  <hr>
  <h1>{{title2}}</h1><br>
  <button @click="start" :disabled="isPlaying">Play</button>
  <Block v-if="isPlaying" :delay="delay" @end="endGame"/>
  <Result v-if="showResult" :score="score"/>
</template>

<script>
import Modal from './components/Test/Modal.vue'
import Block from './components/Test/Block.vue'
import Result from './components/Test/Result.vue'
export default {
  name: 'App',
  components: {
    Modal,Block,Result
  },
  data(){
    return {
      title:"LEARN 1-Modal(Props,$imet,$refs,telport,slot,etc)",
      title2:"LEARN 2-Reaction Timer(Delay,Interval,Timeout,event with data)",
      header:"Sign up for give away",
      text:"Testing Passing data by props",
      showModal:false,
      showModalTwo:false,
      dataSource:1,
      isPlaying:false,
      delay:null,
      score:null,
      reactionTimer:0,
      showResult:false
    }
  },
  methods:{
    endGame(reactionTimer){
      console.log("end time: "+reactionTimer)
      this.score=reactionTimer;
      this.isPlaying=false;
      this.showResult=true;
    },
    start(){
      this.delay=2000+Math.random()*5000 ;
      this.isPlaying=true;
      this.showResult=false;
    },
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

<style>
#app, .modals {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 160px;
}
h1{
  border-bottom: 1px solid #dddddd;
  display: inline-block;
  padding-bottom: 10px;
}
</style>
