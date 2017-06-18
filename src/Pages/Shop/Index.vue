<template>
<section class="section">
<div class="container">
    <div class="columns">
      <div class="column"><h2>Shop</h2></div>
      <div class="column has-text-right">
        <button>Pr</button>
        <button>Ar</button>
      </div>
    </div>

    <div class="columns is-multiline">
      <product-thumb class="is-4"></product-thumb>
      <product-thumb class="is-4"></product-thumb>
      <product-thumb class="is-4"></product-thumb>
      <product-thumb class="is-4"></product-thumb>
      <product-thumb class="is-4"></product-thumb>
      <product-thumb class="is-4"></product-thumb>
      <product-thumb class="is-4"></product-thumb>
      <product-thumb class="is-4"></product-thumb>
    </div>
    </div>
  </section>
</template>
<script>
  import ProductThumb from '@/Shop/ProductThumb';

  export default{
    components: {
      ProductThumb,
    },
  };
</script>
