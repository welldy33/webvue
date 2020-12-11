<template>
    <h1>JOB DETAILS</h1>
    <p>The Job Id is: {{slug}}</p>
</template>
<script>
export default {
    props:['slug'],
    // data(){
    //     return{
    //         id:this.$route.params.slug
    //     }
    // }
}
</script>