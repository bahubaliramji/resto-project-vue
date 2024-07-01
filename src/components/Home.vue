<template>
<Header/>
<h1>Hello {{ name }}, Welcome On Home Page</h1>
<table border="1">
    <tr>
        <td>Sr. No.</td>
        <td>Id</td>
        <td>Name</td>
        <td>Contact</td>
        <td>Address</td>
        <td>Actions</td>
    </tr>
    <tr v-for="(item, index) in restaurants" :key="item.id">
        <td>{{ index+1 }}</td>
        <td>{{ item.id }}</td>
        <td>{{ item.name }}</td>
        <td>{{ item.contact }}</td>
        <td>{{ item.address }}</td>
        <td>
            <router-link :to="'/update-restaurant/'+item.id">Update</router-link>
            <br/>
            <button v-on:click="deleteRestaurant(item.id)">Delete</button>
        </td>
    </tr>
</table>
</template>
<script>
import axios from 'axios'
import Header from './Header.vue'
export default {
    name:"HomeC",
    data(){
        return {
            name:'',
            restaurants:[]
        }
    },
    components:{
        Header
    },
    methods:{
        async deleteRestaurant(id){
            let result = await axios.delete("http://localhost:3000/restaurants/"+id);
            if(result.status==200){
                this.loadData();
            }
        },
        async loadData(){
            let user = localStorage.getItem("user-info");
            if(!user){
                this.$router.push({name:'SignUp'});
            } else {
                this.name = JSON.parse(user).name;
            }
            let result = await axios.get("http://localhost:3000/restaurants");
            console.log(result.data);
            this.restaurants = result.data;
        }
    },
    mounted(){
        this.loadData();
    }
}

</script>
<style>
td {
    width: 160px;
    height: 40px;
}
</style>