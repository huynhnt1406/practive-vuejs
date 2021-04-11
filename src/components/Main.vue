<template> 
    <div class="home">
        <Sidebar />

        <router-view></router-view>
    </div>
</template>

<script>
import Sidebar from '../smallcomponents/Sidebar'
export default {
    components:{
        Sidebar,
    }
}
</script>

<style>
.home{
    display:flex;
    min-height: 100vh;
    background-image: linear-gradient(lightgray,white);
}
</style>