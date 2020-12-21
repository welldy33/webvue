<template >
        <button type="button" class="btn btn-primary" data-toggle="modal"  :data-target="'#'+modalId" ><i class="fas fa-plus"></i> Add Patient</button>
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
        <Modal :idm='modalId'>
            <template v-slot:h-modal>
            <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
            </template>
            <template v-slot:b-modal>
                <h5 class="modal-title" id="exampleModalLabel">Modal Body</h5>
                <IUForm ref="form"/>
            </template>
            <template v-slot:f-modal>
                 <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                 <button type="button" @click="onSave" class="btn btn-primary">Save changes</button>
            </template>
        </Modal>
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
import Modal from '../../components/Modal.vue'
import IUForm from './Weather/IUForm.vue'
export default {
    components:{Modal,IUForm},
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
            modalId:"weatherModal",
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
        onSave(){
           axios.post('https://localhost:44322/patient',this.$refs.form.formdata).then((response) => {
              console.log(response)
           });
           console.log(JSON.stringify(this.$refs.form.formdata));
        }
    }
}
</script>