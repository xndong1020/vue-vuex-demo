<template>
  <div id="product-list-two">
    <h2>Product List Two</h2>
    <ul>
      <li v-for="(product, idx) in saleProducts" :key="idx">
        <span class="name">{{product.name}} :</span>
        <span class="price">{{ product.price }}</span>
      </li>
      <button @click="reducePriceAsync(6)">Reduce price</button>
    </ul>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "ProductListTwo",
  computed: {
    ...mapGetters(["saleProducts"])
  },
  methods: {
    ...mapActions(["reducePriceAsync"])
  }
};
</script>

<style lang="scss">
#product-list-two {
  background-color: #d1e4ff;
  box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.2);
  margin-bottom: 30px;
  padding: 10px 20px;

  ul {
    padding: 0;
    list-style-type: none;

    li {
      margin-right: 10px;
      margin-top: 10px;
      padding: 20px;
      background: rgba(255, 255, 255, 0.7);

      .price {
        font-weight: bold;
        color: #860ce8;
        display: block;
      }
    }
  }
}
</style>
