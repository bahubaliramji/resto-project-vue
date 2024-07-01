<template>
    <div class="topnav">
        <router-link to="/">Home</router-link>
        <router-link to="/add-restaurant">Add Restaurant</router-link>
        <router-link v-on:click="logOut" to="#">Logout</router-link>
    </div>
</template>
<script>
export default {
    name:"MainHeader",
    methods:{
        logOut(){
            localStorage.clear();
            this.$router.push({name:'Login'});
        }
    }
}
</script>
<style>
.topnav {
    background-color: #333;
    overflow: hidden;
}

.topnav a {
    float: left;
    color: white;
    text-align: center;
    padding: 16px 14px;
    text-decoration: none;
    font-size: 16px;
    margin-right: 4px;
}
.topnav a:hover {
    background-color: #ddd;
    color: #222;
}
</style>