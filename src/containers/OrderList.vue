<template>
  <div class="order">
    <h3>View Order List </h3>
    <table>
      <tr>
        <th>Sr. No</th>
        <th>Customer Name</th>
        <th>No. of Oerders</th>
        <th>Total Amount</th>
        <th> Status </th>
        <th> Action </th>
      </tr>
      <tr v-for="(order,index) in orderListData" :key="index">
        <td> {{index}} </td>
        <td>{{order.custName}}</td>
        <td>{{order.noOfItemOrders}}</td>
        <td>{{order.totalAmount}}</td>
        <td>{{order.status}}</td>
        <td>
          <select v-model="order.status" @change="onSelectedAction(index, order.status)">
            <option value="Pending"> Pending </option>
            <option value="In Progress"> In Progress </option>
            <option value="Delivered"> Delivered</option>
          </select>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
import { mapGetters, mapMutations, mapActions} from "vuex";
 export default {
  name: 'OrderList',
  async mounted() {
    await this.getOrderList();
    this.orderListData = this.orderList.map(order => ({...order}));
  },
  data() {
    return {
      orderListData: [],
    }
  },
  computed: {
    ...mapGetters({
      orderList: 'orderList',
    }),
  },
  methods: {
    ...mapActions({
      getOrderList: 'getOrderList'
    }),
    ...mapMutations({
      setOrderList: 'setOrderList'
    }),
    onSelectedAction(index, status) {
      this.orderListData[index].status = status;
      this.setOrderList(this.orderListData);
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px;
  text-align: center;
}
table {
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: 100%;
}

td, th {
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
}

tr:nth-child(even) {
  background-color: #dddddd;
}
</style>
