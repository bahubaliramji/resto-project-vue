<template>
<Header />
<h1>Hello, Welcome On Add Restaurant Page</h1>
<form class="add">
    <input type="text" placeholder="Enter Name" v-model="restaurant.name" name="name">
    <input type="text" placeholder="Enter Address" v-model="restaurant.address" name="address">
    <input type="text" placeholder="Enter Contact" v-model="restaurant.contact" name="contact">
    <button type="button" v-on:click="addRestaurant">Add New Restaurant</button>
</form>
</template>
<script>
import axios from 'axios'
import Header from './Header.vue'
export default {
    name:"AddRestaurant",
    components:{
        Header
    },
    data(){
        return {
            restaurant:{
                name:'',
                address:'',
                contact:'',
            }
        }
    },
    methods:{
        async addRestaurant(){
            console.log(this.restaurant);
            const result = await axios.post("http://localhost:3000/restaurants",{
                name:this.restaurant.name,
                address:this.restaurant.address,
                contact:this.restaurant.contact,
            });
            if(result.status==201){
                this.$router.push({name:'Home'});
            } else {
                console.log("result",result);
                alert("Something went wrong");
            }

        }
    },
    mounted(){
        let user = localStorage.getItem("user-info");
        if(!user){
            this.$router.push({name:'SignUp'});
        }
    }
}

</script>