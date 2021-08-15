import Vue from 'vue'
import Vuex from 'vuex'
import getters from '@/getters'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cartList: []
  },
  mutations: {
    // addCart(state, payload) {
    //   let oldProduct = state.cartList.find(item => payload.iid === item.iid)

    //   console.log(oldProduct);

    //   if (oldProduct) {
    //     oldProduct.count++
    //   }
    //   else {
    //     payload.count = 1;
    //     state.cartList.push(payload)
    //   }
    // }
    addCounter(state, payload) {
      payload.count++
    },
    addToCart(state, payload) {
      payload.checked = true
      state.cartList.push(payload)
    },
    itemChecked(state, payload) {
      state.cartList.forEach((element) => {
          element.checked = !payload;
        });
    }
  },
  actions: {
    addCart(context, payload) {
      return new Promise((resolve, reject) => {
        let oldProduct = context.state.cartList.find(item => payload.iid === item.iid)

        if (oldProduct) {
          context.commit('addCounter', oldProduct)
          resolve('商品数量+1')
        }
        else {
          payload.count = 1;
          context.commit('addToCart', payload)
          resolve('添加新商品')
        }
      })
    }
  },
  getters
})
