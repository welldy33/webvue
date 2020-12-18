<template >
        <button class="btn btn-primary" @click="showModal"><i class="fas fa-plus"></i> Add Patient</button>
        <!-- <table class="table table-bordered  table-striped table-hover">
            <thead>
                <tr>
                    <th>Date</th>
                    <th>C Temp</th>
                    <th>F Temp</th>
                    <th>Summary</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="dt in tdata" :key="dt">
                    <td>{{dt.date}}</td>
                    <td>{{dt.temperatureC}}</td>
                    <td>{{dt.temperatureF}}</td>
                    <td>{{dt.summary}}</td>
                </tr>
            </tbody>
        </table> -->
        
        <hr>
      
        <table class="table table-bordered  table-striped table-hover">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>ID NO</th>
                    <th>Gender</th>
                     <th>TTL</th>
                      <th>Address</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="dt2 in tData2" :key="dt2.id">
                    <td>{{dt2.id}}</td>
                    <td>{{dt2.name}}</td>
                    <td>{{dt2.id_no}}</td>
                    <td>{{dt2.gender}}</td>
                     <td>{{dt2.birt_place}}</td>
                     <td>{{dt2.addr}}</td>
                </tr>
            </tbody>
        </table>
</template>
<script>
import axios from 'axios'

export default {
    components:{},
    data(){
        return{
            tdata:[ 
                {
                    data:"tets",
                    temperatureC:"20",
                    temperatureF:"45",
                    summary:"TEst"
                }
            ],
            tData2:[],
            FirstName:"",
            modalOn:false
        }
    },
    mounted(){
        // axios.get('https://localhost:44322/weatherforecast').then((response) => {
        //     console.log(response);
        //     this.tdata=response.data;
        // })
        axios.put('https://localhost:44322/patient/QueryFile',{gen:"M"}).then((response) => {
            console.log(response);
            this.tData2=response.data;
            console.log(this.tData2[0].id);
            this.FirstName=this.tData2[0].id;
        })
    },
    methods:{
        showModal(){
            this.modalOn=true;
        }
    }
}
</script>