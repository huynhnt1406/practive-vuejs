<template>
  <div class="containerlogin">
    <form  method="GET" class="loginform" @submit.prevent="loginUser()" >
      <div class="child">
        <label for="name">Username</label>
        <input id="name" type="text" v-model="username" placeholder="Username">
      </div>
         <div class="child">
        <label for="name">Password</label>
        <input id="pass" type="password" v-model="password" placeholder="Password">
      </div>
      <div class="submitbtn">
        <button type="submit" >Login</button>
      </div>
    </form>
  </div>
</template>
<script>
export default {
  data(){
    return{
      username:'',
      password:'',
    }
  },
  methods:{
    loginUser(){
        if(this.username === '' || this.username == null){
          alert('username is required')
        }else if(this.password === ''   || this.password.length <=7 ){
          alert('your password must have At least 8 characters—the more characters, the better')
        }
        else if(this.password.includes("<" ,">")){
          alert('your password have  < or >  so can cause problems in Web browsers.')
        }
        else{
          this.$router.push('/homepage')
        }

    },
  }
}
</script>

<style>
.containerlogin{
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  min-height: 100vh;
  background-image: linear-gradient(lightgray,white);
}
.loginform{
  display: flex;
  flex-direction: column;
  background-color: white;
  justify-content: flex-end;
  align-items: flex-end;
  padding:10vh 5vh 10vh 5vh;
  box-shadow: 0px 0px 20px rgba(0,0,0,.5);
}
.loginform .submitbtn{
  display:flex;
  justify-content: flex-end;
}
.loginform .submitbtn button{
  height: 30px;
  width: 90px;
  margin:5px;
  background-color: forestgreen;
  border:none;
  color:white;
  font-weight: 400;
  letter-spacing: 2px;
}
</style>