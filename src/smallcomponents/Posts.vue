<template>
    <div class="singlepage">
        <Sidebar/>
        <div class="postpage">
            <PostsList/>
        </div>
    </div>
</template>

<script>
import PostsList from '../smallcomponents/lists/PostsList'
import Sidebar from '../smallcomponents/Sidebar'
export default {
    components:{
        Sidebar,
        PostsList,
    }
}
</script>

<style>
.singlepage{
    display: flex;
    height: 100vh;
    background-image: linear-gradient(lightgray,white);
}
.postpage{
    flex:0.8;
}
</style>