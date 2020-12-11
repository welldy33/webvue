<template>
    <form @submit.prevent="eventSubmit">
        <label>Email</label>
        <input type="email" required v-model="email" />

        <label>Password</label>
        <input type="password" required v-model="password" />
        <div v-if="passwordError" class="error">{{passwordError}}</div>

        <label>Role:</label>
        <select v-model="role">
            <option value="developer">Web Developer</option>
            <option value="designer">Web Designer</option>
        </select>

        <div class="terms">
            <input type="checkbox" v-model="terms" required>
            <label>Accept Term and condition</label>
        </div>


         <div >
            <input type="checkbox" value="welldy" v-model="names" >
            <label>Welldy</label>
        </div>
        <div >
            <input type="checkbox" value="rosman" v-model="names" >
            <label>Rosman</label>
        </div>
        <div >
            <input type="checkbox" value="arka" v-model="names" >
            <label>Arkatama</label>
        </div>

        <label>Skills</label>
        <input type="text" v-model="skill" @keyup.alt="addSkill"/>
        <div v-for="sk in skills" :key="sk" class="pill">
            <span @click="deleteSkill(sk)">{{sk}}</span>
        </div>

        <div class="submit">
            <button>Create an account</button> 
        </div>
    </form>
    <p>Email: {{email}}</p>
    <p>Password: {{password}}</p>
    <p>Role:{{role}}</p>
    <p>term Accept:{{terms}}</p>
    <p>names:{{names}}</p>
    
</template>
<script>
export default {
    data(){
        return{
            email:'',
            password:'',
            role:'designer',
            terms:true,
            names:[],
            skill:'',
            skills:[],
            passwordError:false
        }
    },
    methods:{
        eventSubmit(){
            console.log("form submmited");
            this.passwordError=this.password.length>5?'':'Pass must be at least 6 character'
            if(!this.passwordError){
                console.log({
                    email:this.email,
                    password:this.password,
                    role:this.role,
                    skills:this.skills,
                    terms:this.terms
                });
            }
        },
        deleteSkill(skill){
            this.skills=this.skills.filter((item)=>{
                return skill!==item
            });
        },
        addSkill(e){
            if(e.key===','&&this.skill){
                if(!this.skills.includes(this.skill)){
                    this.skills.push(this.skill);
                }
                this.skill='';
            }
        }
    }
}
</script>
<style>
label{
    text-align: left;
}
.pill{
    display: inline-block;
    margin: 20px 10px 0 0;
    padding: 6px 12px;
    background: #eee;
    border-radius: 20px;
    font-size: 12px;
    letter-spacing: 1px;
    font-weight: bold;
    color: #777;
    cursor: pointer;
}
.submit{
    text-align: center;
}
.error{
    color: red;
    margin-top: 10px;
    font-size: 0.8em;
    font-weight: bold;
}
</style>