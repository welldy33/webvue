<template>
    <div class="backdrop">
        <div class="card modalself">
            <div class="card-header">
                <h1>{{title}}</h1>
            </div>
            <div class="card-body">
              <h1>Content</h1>
           </div>
        </div>
    </div>
</template>
<script>
export default {
    props:['title'],
    data() {
        return { 
              
        }
    },
    methods: {
    },
}
</script>
<style>
.modalself{
    display: inline-block;
    min-width: 700px;
    max-width: 70%;
    position: relative;
    margin-top: 20px;
    text-align: left;
}
.backdrop{
     top:0;
     position: absolute;
     text-align: center;
     background: rgba(0,0,0,0.5);
     width: 100%;
     height: 100%;
     left: 0;
}

</style>