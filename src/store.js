import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  strict: true,
  state: {
    products: [
      { name: 'Banana Skin', price: 20 },
      { name: 'Shiny Star', price: 40 },
      { name: 'Green Shells', price: 60 },
      { name: 'Red Shells', price: 80 },
    ],
  },
  getters: {
    saleProducts: state => {
      return state.products.map(product => {
        return {
          name: '**' + product.name + '**',
          price: product.price / 2,
        }
      })
    },
  },
  mutations: {
    reducePrice: (state, payload) => {
      state.products = state.products.map(product => {
        return {
          ...product,
          price: product.price - payload,
        }
      })
    },
  },
  actions: {
    reducePriceAsync: (context, payload) => {
      setTimeout(() => {
        context.commit('reducePrice', payload)
      }, 2000)
    },
  },
})

export default store
