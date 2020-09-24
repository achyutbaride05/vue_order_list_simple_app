import Vue from 'vue';
import Vuex from 'vuex';
import orderListData from '../assets/orderList.json'

Vue.use(Vuex);

export default new Vuex.Store({
  // namespaced: true,
  state: {
    orderList: [],
  },
  mutations: {
    setOrderList : (state, payload) => {
      console.log('before state.orderList', state.orderList)
      state.orderList = payload;
      console.log('after state.orderList', state.orderList)
    }
  },
  actions: {
    getOrderList: async ({ commit }) => {
      commit('setOrderList', orderListData.orderList);
   }
  },
  getters: {
    orderList: (state) => {
      return state.orderList;
    }
  },
})