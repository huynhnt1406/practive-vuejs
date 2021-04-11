<template>
  <div class="userdetails">
        <Sidebar/>
        <div  class="postdetails-info">
            <div class="postid">
                <h3>Post {{data.id}}</h3>
            </div>
            <div  class="postinfomation">
                <div class="postvirals">
                    <div class="childs">
                        <label for="user">Title</label>
                        <input type="text" v-model="data.title" >
                    </div>
                    <div class="childs">
                        <label for="user">Body</label>
                        <textarea type="text" v-model="data.body" ></textarea>
                    </div>
                    <div class="buttonpost">
                        <button style="background:green" @click="updatePOST(data)">Update</button>
                        <button style="background:red" @click="deletePOST(data.id)">Delete</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapActions } from 'vuex'
import axios from 'axios'
import Sidebar from '../Sidebar'
export default {
    components:{
        Sidebar
    },
    name:"PostDetail",
    data(){
        return{
            id:this.$route.params.id,
            alert:false,
            data:{
                id:'',
                title:'',
                body:''
            }
        }
    },
    created(){
        axios.get(`https://jsonplaceholder.typicode.com/posts/${this.id}`)
            .then(res => {
                this.data = res.data
            })
    },
    methods:{
        ...mapActions(["deletePost","updatePost"]),
        deletePOST(id){
            if(id){
                alert('delete post succesfully')
                this.deletePost(id)
                this.$router.push({path:'/posts'})
            }else{
                alert('delete post failed')
                this.$router.push({path:'/posts'})
            }
        },
        updatePOST(data){
            if(data){
                alert('update post succesfully')
                this.updatePost(data)
                this.$router.push({path:'/posts'})
            }else{
                alert('update post failed')
                this.$router.push({path:'/posts'})
            }
        }
    }
}
</script>

<style>
.postinfomation{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    background-image: linear-gradient(lightgray,white);
}
.postdetails-info{
    display: flex;
    flex-direction: column;
}
.postvirals{
   display: flex;
   flex-direction: column;
   padding:8vh 15vh 8vh 15vh;
   justify-content: flex-end;
   align-items: flex-end;
   box-shadow: 0 2px 2px rgba(0,0,0,.5);
   background-color: white;
}
.childs input{
    height: 30px;
    width: 250px;
    outline: none;
    border:none;
    box-shadow: 0 2px 2px rgba(0,0,0,.5);
    margin-bottom: 7px;
    padding-left: 20px;
    margin-right: 5px;
}
.childs textarea{
    height: 105px;
    width: 250px;
    outline: none;
    border:none;
    box-shadow: 0 2px 2px rgba(0,0,0,.5);
    margin-bottom: 7px;
    padding-left: 20px;
    margin-right: 5px;
}
.childs label{
    font-family: "Poppins",sans-serif;
    padding-right: 3vh;
    letter-spacing: 3px;
}
.childs{
    display:flex;
    flex-direction: column;
}
.postid{
    padding:25px;
    font-family: "Poppins",sans-serif;
}
.buttonpost button{
    margin:5px;
    padding:7px;
    color:white;
    border:none;
}
.postdetails{
    display: flex;
    min-height: 100vh;
}
.postdetails-info{
    flex:0.8;
}
.postid h3{
    font-weight: 300;
    letter-spacing: 5px;
}
</style>