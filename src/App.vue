<template>
  <div id="app">
    <product-list-one/>
    <product-list-two/>
  </div>
</template>

<script>
import ProductListOne from "@/components/ProductListOne.vue";
import ProductListTwo from "@/components/ProductListTwo.vue";
export default {
  name: "app",
  components: {
    ProductListOne,
    ProductListTwo
  },
  data() {
    return {
     
    };
  }
};
</script>

<style lang="scss">
body {
  margin: 0;
}
#app {
  font-family: "Ubuntu", Helvetica, Arial, sans-serif;  
  color: #555;
  margin-top: 0px;
}
</style>
