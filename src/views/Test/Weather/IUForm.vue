<template>
    <form >
        <label>Name</label>
        <input type="text" v-model="formdata.name" class="form-control"/>
        <label>KTP No</label>
        <input type="text" v-model="formdata.id_no" class="form-control"/>
        <label>Gender</label>
        <input type="text" v-model="formdata.gender" class="form-control"/>
        <label>Tempat Tanggal Lahir</label>
        <div class="row">
            <div class="col-6">
                 <input type="text" v-model="formdata.birt_place" class="form-control"/>
            </div>
            <div class="col-6">
                 <input type="date" v-model="formdata.birt_date" class="form-control"/>
            </div>
        </div>
        <label>Address</label>
        <input type="text" v-model="formdata.addr" class="form-control"/>
    </form>
</template>
<script>
export default {
    data(){
        return{        
            formdata:{
                name:"",
                id_no:"",
                gender:"",
                birt_place:"",
                birt_date:"",
                addr:""
            }
        }
    }
}
</script>