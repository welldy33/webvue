<script>
import mqtt from 'mqtt'
var mqttMod=null;
export default {
    data(){
        return{
            mqttClient:null,
        }
    },
    mounted() {
        mqttMod=this;
        this.mqttClient  = mqtt.connect({ host: '10.1.32.77', port: 1884,clientId:"Welldy33"});
        this.mqttClient.on('message', function (topic, message) {
            // console.log(message.toString())
            mqttMod[topic]=mqttMod[topic]?mqttMod[topic]:[];
            mqttMod[topic].push(message.toString());
            // console.log(mqttMod);
            // console.log(mqttMod[topic].toString());
            // console.log(topic);
        });
    },
    methods:{
        subscribe(topic){
            this.mqttClient.subscribe(topic);
        },
        publish(topic,msg){
            this.mqttClient.publish(topic, msg);
        },
        receive(){
           
        }
    }
}
</script>