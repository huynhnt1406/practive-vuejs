<template>
    <div class="userpage">
        <div class="searchuser">
            <div class="usersearch">
                <div class="usersearch-header">
                <h3>User</h3>
            </div>
            <div class="usersearch-search">
                <input label="Search by ID"
                    @keyup.enter="filterUserById"
                    placeholder="Search User (ID)">
                <button type="submit" >Search</button>
            </div>
        </div>
        </div>
        <div class="allusers">
            <div v-for="user in allUsers" :key="user.id" class="eachuser">
                <div class="userleft">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/1200px-Vue.js_Logo_2.svg.png" alt="useravt">
                    <div class="userdetail">
                        <h3>{{user.username}}</h3>
                        <p>{{user.email}}</p>
                    </div>
                </div>
                <div  class="userright">
                    <router-link  class="link" :to="{name:'UserDetail',params:{id:user.id}}">Detail</router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import {mapActions,mapGetters} from 'vuex'
export default {
    name: "UsersList",
    computed: mapGetters(["allUsers"]),
    created(){
        this.fetchUsers()
    },
    methods:{
        ...mapActions(["fetchUsers","filterUser","deleteUser","updateUser"]),
        filterUserById(e){
            if(e.target.value === ""){
                this.fetchUsers();
            }else{
                this.filterUser(e.target.value)
            }
        }
    },
    
}
</script>

<style>
.userleft img{
    height: 50px;
    width: 50px;
    margin-right: 10px;
}
.userleft{
    display: flex;
    align-items: center;
    font-family: "Poppins",sans-serif;
}
.eachuser{
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-bottom: 5vh;
}
.eachuser h3{
    font-weight: 400;
}
.eachuser p{
    font-weight: 100;
}
.userright .link{
    font-weight: 300;
    letter-spacing: 2px;
    text-decoration: none;
    color:black;
    border-bottom: 2px solid transparent;
    transition: 0.5s ease-in-out;
    font-family: "Poppins",sans-serif;
    font-size: 15px;
}
.userright .link:hover{
    border-bottom:2px solid forestgreen;
}
.userright .link:focus{
    border-bottom: 2px solid black;
}
.allusers{
    padding:5vh;
    height: 380px;
    overflow-y: scroll;
}
.usersearch-header{
    display:flex;
    align-items: center;
    font-family: "Poppins",sans-serif;
    padding:25px;
    box-shadow: 0 0 1px rgba(0,0,0,.5);
}
.usersearch-header h3{
    font-weight: 300;
    letter-spacing: 5px;
}
.usersearch-search{
    padding:8vh;
    display:flex;
}
.usersearch-search input{
    height: 35px;
    width: 250px;
    outline: none;
    border-radius: 20px;
    border:none;
    box-shadow: 0 2px 2px rgba(0,0,0,.5);
    padding-left: 20px;
}
.usersearch-search button{
    margin-left: 5vh;
    border-radius: 20px;
    width: 80px;
    border:none;
    box-shadow: 0 2px 2px rgba(0,0,0,.5);
    outline: none;
    background-color: white;
    color:grey;
}
</style>