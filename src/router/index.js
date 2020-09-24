import Vue from 'vue';
import Router from 'vue-router';
import OrderList from '../containers/OrderList'
import NotFound from '../components/NotFound'

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "*",
      redirect: "/404",
    },
    {
      path: "/",
      name: "order-list",
      component: OrderList
    },
    {
      path: "/404",
      component: NotFound
    }
  ]
})