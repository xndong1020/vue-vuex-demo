<template>
  <div id="product-list-one">
    <h2>Product List One</h2>
    <ul>
      <li v-for="(product, idx) in products" :key="idx">
        <span class="name">{{product.name}} :</span>
        <span class="price">{{ product.price }}</span>
      </li>
      <button @click="reducePrice(4)">Reduce price</button>
    </ul>
  </div>
</template>

<script>
export default {
  name: "ProductListOne",
  computed: {
    products() {
      return this.$store.getters.saleProducts;
    }
  },
  methods: {
    reducePrice(amount) {
      //   this.$store.commit("reducePrice");
      this.$store.dispatch("reducePriceAsync", amount);
    }
  }
};
</script>

 <style lang="scss">
#product-list-one {
  background: #fff8b1;
  box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.2);
  margin-bottom: 30px;
  padding: 10px 20px;

  ul {
    padding: 0;

    li {
      display: inline-block;
      margin-right: 10px;
      margin-top: 10px;
      padding: 20px;
      background: rgba(255, 255, 255, 0.7);

      .price {
        font-weight: bold;
        color: #e8800c;
      }
    }
  }
}
</style>
