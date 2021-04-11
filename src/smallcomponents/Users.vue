<template>
    <div class="singlepage">
        <Sidebar/>
        <div class="userpage">
            <UsersList/>
        </div>
    </div>
</template>

<script>
import UsersList from './lists/UsersList'
import Sidebar from '../smallcomponents/Sidebar'
export default {
    components:{
        Sidebar,
        UsersList
    }
}
</script>

<style>
.singlepage{
    display: flex;
    height: 100vh;
    background-image: linear-gradient(lightgray,white);
}
.userpage{
    flex:0.8;
}
</style>