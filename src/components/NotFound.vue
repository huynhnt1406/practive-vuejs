<template>
   <div class="found">
       <div class="error">
            <h1>404</h1>
            <p>Page Not Found</p>
            <div class="runbar"></div>
       </div>
   </div>
</template>
<style scoped>
    .found{
        position: fixed;
        top:0;
        left:0;
        right:0;
        bottom:0;
        background-image: linear-gradient(lightgray,lightblue);
        min-height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .error{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        font-family: "Poppins",sans-serif;
    }
    .error h1{
        font-size: 20vh;
        font-weight: 500;
        color:white;
    }
    .error p{
        color:white;
    }
    .runbar{
        content:"";
        height: 20px;
        width: 20px;
        border-radius: 50%;
        background-color: forestgreen;
        box-shadow: 0px 0px 3px rgba(0,0,0,0.5);
        animation: circle 5s ease-in-out infinite ;
    }
    @keyframes circle {
        0%{
            filter: hue-rotate(0deg);
        }
        100%{
            filter: hue-rotate(360deg);
        }
    }
</style>