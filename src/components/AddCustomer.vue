<template>
<div>
<form @submit.prevent="addCustomer">
<input type="text" placeholder="Enter a Name" v-model="name" />
<input type="text" placeholder="Enter a email" v-model="email" />
<input type="text" placeholder="Enter a mobile number" v-model="mobile" />

 <button type="submit">Add Customer</button>

</form>

</div>
</template>

<script>
export default{
    data(){
        return{
        name:"",
        email:"",
        mobile: ""
        
        }
    },
    methods: {
        addCustomer: function() {

            this.$store.dispatch("addCustomer",this)
            this.name=""
            this.email=""
            this.mobile=""

        }
    }
}

</script>