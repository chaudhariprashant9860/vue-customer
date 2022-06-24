export const state = {
    customer :[]
}

//getters

export const getters = {
    getCustomers:state => state.customer
}

//Mutations

export const mutations ={
    ADD_CUSTOMER:(state,payload) => {

        const newCustomer = {
            name :payload.name,
            email:payload.email,
            mobile:payload.mobile,
            status :false

        }

        state.customer.unshift(newCustomer)

    },

    TOGGLE_CUSTOMER:(state,payload) => {

        const statusChange = state.customer.find(customer => customer.name ===payload)

        statusChange.status = !statusChange.status
    },
    DELETE_CUSTOMER:(state,payload) => {
        const indexPosition =state.customer.findIndex((customer) => customer.name)
        state.customer.spilce(indexPosition,1)
    }
}

export const actions = {
    addCustomer: (context,payload) => {
        context.commit("ADD_CUSTOMER",payload)
    },

    toggleCustomer:(context,payload) => {
        context.commit("TOGGLE_CUSTOMER",payload)
    },

    deleteCustomer:(context,payload) => {
        context.commit("DELETE_CUSTOMER",payload)
    }
}