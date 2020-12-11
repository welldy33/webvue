<template>
    <h1>jobs</h1>
    <div v-for="job in jobs" :key="job.id">
        <router-link :to="{name:'JobDetails', params:{slug:job.id}}">
            <h2>{{job.title}}</h2>
        </router-link>
    </div>
</template>
<script>
export default {
    data(){
        return{
            jobs:[
                { title:'Ninja UX Designer', id:1 ,details:'Lorem'},
                { title:'Ninja UI Designer', id:2 ,details:'Lorem'},
                { title:'Ninja Web Developer', id:3 ,details:'Lorem'},
                { title:'Ninja Vue Developer', id:4 ,details:'Lorem'},
            ]
        }
    }
}
</script>
