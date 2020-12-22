<script>
import axios from 'axios'
var $=window;
export default {
    methods:{
        get:async function(url,arg){
               return await axios.put(url,arg).then((response) => {
                   return response.data;
                }).catch((err)=>{
                    console.log(err.response.data);
                    // return $.$(document).Toasts('create', {
                    //     class: 'bg-danger',
                    //     autohide:true,
                    //     delay: 2000,
                    //     title: 'Error Code:'+err.response.data.StatusCode,
                    //     body: 'Error Info:'+err.response.data.Message
                    // })
                    return $.toastr.error('<strong><h5>Error Code:'+err.response.data.StatusCode+'</h5></strong><hr> Error Info:<br>'+err.response.data.Message);
                })
             },
        post:async function(){
            return await axios.post('https://localhost:44322/patient',this.$refs.form.formdata).then((response) => {
                return response.data;
            }).catch((err)=>{
                return $.toastr.error('<strong><h5>Error Code:'+err.response.data.StatusCode+'</h5></strong><hr> Error Info:<br>'+err.response.data.Message);
            });
        },
        put(){},
        del(){}
    }
}
</script>