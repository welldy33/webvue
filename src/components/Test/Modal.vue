<template>
    <div class="backdrop" @click="closeModal">
        <div class="modal" :class="{sale: theme === 'sale'}">
           <slot>Default content</slot>
           <div class="actions">
               <slot name="links"></slot>
                <slot name="linksTwo"></slot>
           </div>
        </div>
    </div>
</template>
<script>
export default {
    props:['header','text','theme'],
    data() {
        return { 
              
        }
    },
    methods: {
        closeModal(){
            this.$emit('close');
        }
    },
}
</script>
<style>
.modal{
    width: 400px;
    padding:20px;
    margin:100px auto;
    background: white;
    border-radius: 10px;    
}
.backdrop{
     top:0;
     position: fixed;
     background: rgba(0,0,0,0.5);
     width: 100%;
     height: 100%;
}
.modal h1{
    color: cyan;
    border: none;
}
.modal p{
    font-style: normal;
       color: white;
}
.modal .actions{
    text-align: center;
    margin:30px 0 10px 0;
   
}
.modal .actions a{
    padding: 8px;
    border: 1px solid #eee;
    border-radius: 4px;
    text-decoration: none;
    margin: 10px;
    color:orchid;
}
.modal.sale{
    background: navy;
}
.modal.sale h1{
    color: white;
}
</style>