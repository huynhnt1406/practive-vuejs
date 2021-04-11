<template>
    <div class="container">
        <div class="sidebar-header">
            <img src="https://vinagamemobile.com/wp-content/uploads/2018/04/avatar-fb-dep-08.jpg" alt="avaimg">
            <h3 style="font-weight:200">username</h3>
        </div>
        <div class="sidebar-links">
            <router-link class="link" to="/users">Users</router-link>
            <router-link class="link" to="/posts">Posts</router-link>
        </div>
    </div>
</template>

<script>
export default {
    props:['uname']
}
</script>

<style>
.sidebar-header img{
    height: 50px;
    width: 50px;
}
.sidebar-header{
    display:flex;
    align-items: center;
    font-family: "Poppins",sans-serif;
    padding:10px;
    justify-content:space-evenly;
}
.sidebar-header h3{
    letter-spacing: 2px;
}
.container{
    display:flex;
    flex-direction: column;
    flex: 0.2;
    box-shadow: 0 0 0.5px rgba(0,0,0,.5);

}
.sidebar-links{
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-top: 10vh;
    font-family: "Poppins",sans-serif;
}
.sidebar-links .link{
    font-weight: 400;
    letter-spacing: 5px;
    padding-bottom:5px;
    margin-bottom: 15px;
    text-decoration: none;
    color:black;
    border-bottom: 2px solid transparent;
    transition: 0.5s ease-in-out;
}
.sidebar-links .link:hover{
    border-bottom:2px solid forestgreen;
}
.sidebar-links .link:focus{
    border-bottom: 2px solid black;
}
</style>