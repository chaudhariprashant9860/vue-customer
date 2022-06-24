<template>
  <div>
    <h1>ADD CUSTOMER</h1>
    <CustomerList />
    <AddCustomer />
  </div>
</template>
<script>

import AddCustomer from "./components/AddCustomer.vue";
import CustomerList from "./components/CustomerList.vue";

export default{
  name:'App',
  components:{
    AddCustomer,
    CustomerList
  }
}

</script>

<style>



</style>
