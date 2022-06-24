import { createStore } from 'vuex'
import * as customerModule from '@/store/modules.customer'

export default createStore({
  state: customerModule.state,
  
  getters: customerModule.getters,
  mutations: customerModule.mutations,
  actions: customerModule.actions
})
