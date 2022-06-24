<template>
<div>
<ul>
<li v-for="customer in customer" :key="customer.name"
:class="{completed:customer.status}" @click="toggleCustomer(customer.name)">

<p>{{customer.name}}</p>
<p>{{customer.email}}</p>
<p>{{customer.mobile}}</p>

<span class="delete" @click="deleteCustomer(customer.name)">  &#10006</span>
</li>

</ul>

</div>

</template>

<script>
export default{
    computed:{
        customer(){
            return this.$store.getters.getCustomers
        }
    },
    methods:{
        toggleCustomer: function(name){
            this.$store.dispatch("toggleCustomer",name)
        },
        deleteCustomer: function(name){
            this.$store.dispatch("deleteTodo",name)

        }
    }
}

</script>
<style>
.completed{
    color: blue;
}
</style>