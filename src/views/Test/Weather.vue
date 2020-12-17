<template >
        <table class="table table-bordered  table-striped table-hover">
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
        </table>
</template>
<script>
import axios from 'axios'
axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
axios.defaults.headers.post['Content-Type'] = 'application/json';
export default {
    data(){
        return{
            tdata:[
                {
                    data:"tets",
                    temperatureC:"20",
                    temperatureF:"45",
                    summary:"TEst"
                }
            ]
        }
    },
    mounted(){
        axios.get('https://localhost:44322/weatherforecast').then((response) => {
            this.tdata=response.data;
        })
    }
}
</script>