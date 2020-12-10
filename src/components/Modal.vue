<template>
    <div class="backdrop" @click="closeModal">
        <div class="modal" :class="{sale: theme === 'sale'}">
           <slot>Default content</slot>
           <div class="action">
               <slot name="links"></slot>
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
<style scoped>
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
.modal.sale{
    background: navy;
}
.modal.sale h1{
    color: white;
}
.modal.sale p{
    color: white;
}
</style>