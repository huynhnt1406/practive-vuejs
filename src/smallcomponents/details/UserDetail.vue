<template>
    <div class="userdetails">
        <Sidebar/>
        <div class="userdetails-info">
            <div class="userid">
                <h3>User {{data.id}}</h3>
            </div>
            <div  class="userinfomation">
                <div   class="userviral">
                    <div class="child">
                        <label for="user">Full name</label>
                        <input type="text" v-model="data.name" >
                    </div>
                    <div class="child">
                        <label for="user">User name</label>
                        <input type="text" v-model="data.username" >
                    </div>
                    <div class="child">
                        <label for="user">Email</label>
                        <input type="text" v-model="data.email" >
                    </div>
                    <div class="child">
                        <label for="user">Street</label>
                        <input type="text" v-model="data.address.street" >
                    </div>
                    <div class="child">
                        <label for="user">City</label>
                        <input type="text" v-model="data.address.city" >
                    </div>
                    <div class="buttonuser">
                        <button style="background:green" @click="updateUSER(data)">Update</button>
                        <button style="background:red" @click="deleteUSER(data.id)"   >Delete</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Sidebar from '../Sidebar'
    import axios from 'axios'
    import { mapActions } from 'vuex'
    export default{
        components:{
            Sidebar
        },
        data(){
            return{
                id: this.$route.params.id,
                alert:false,
                data:{
                    id:'',
                    name:'',
                    username:'',
                    email:'',
                    address: {
                        street:'',
                        city:''
                    }
                }
            }
        },
        created(){
            axios.get(`https://jsonplaceholder.typicode.com/users/${this.id}`)
                .then(res => {
                    this.data = res.data
                })
        },
        methods:{
            ...mapActions(["deleteUser","updateUser"]),
            deleteUSER(id){
                if(id){
                    alert('delete user succesfully')
                    this.deleteUser(id)
                    this.$router.push({path:'/users'})
                }else{
                    alert('delete user failed')
                    this.$router.push({path:'/users'})
                }
            },
            updateUSER(data){
                if(data){
                    alert('update user successfully')
                    this.updateUser(data)
                    this.$router.push({path:'/users'})
                }else{
                    alert('update failed')
                    this.$router.push({path:'/users'})
                }
            }
        }
    }
</script>

<style>
.buttonuser button{
    margin:5px;
    padding:7px;
    color:white;
    border:none;
}
.userdetails{
    display: flex;
    min-height: 100vh;
    background-image: linear-gradient(lightgray,white);
}
.userdetails-info{
    flex:0.8;
}
.userid{
    padding:25px;
    font-family: "Poppins",sans-serif;
}
.userid h3{
    font-weight: 300;
    letter-spacing: 5px;
}
.userinfomation{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
}
.userdetails-info{
    display: flex;
    flex-direction: column;
}
.userviral{
   display: flex;
   flex-direction: column;
   padding:8vh;
   background-color: white;
   justify-content: flex-end;
   align-items: flex-end;
   box-shadow: 0 2px 2px rgba(0,0,0,.5);
}
.child input{
    height: 35px;
    width: 250px;
    outline: none;
    border:none;
    box-shadow: 0 2px 2px rgba(0,0,0,.5);
    margin-bottom: 7px;
    padding-left: 20px;
    margin-right: 5px;
}
.child label{
    font-family: "Poppins",sans-serif;
    padding-right: 3vh;
    letter-spacing: 3px;
}
</style>