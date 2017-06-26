<template>
  <section class="section">
    <div class="container">
      <div class="columns">
        <div class="column"><h2 class="title">Shop</h2></div>
      </div>
      <div class="columns">
        <div class="column">
          <div class="field">
            <p class="control">
              <span class="select">
                <select>
                  <option>Item Type</option>
                  <option>Motorcycle</option>
                  <option>Accessories</option>
                  <option>Gear</option>
                  <option>Spare Parts</option>
                </select>
              </span>
              <span class="select">
                <select>
                  <option>Brand</option>
                  <option>With options</option>
                </select>
              </span>
              <span class="select">
                <select>
                  <option>Model</option>
                  <option>With options</option>
                </select>
              </span>
            </p>
          </div>
        </div>
      </div>
      <div class="columns">
        <div class="column is-2">
          <nav class="panel">
            <p class="panel-heading">
              Type
            </p>
            <label class="panel-block">
              <input type="checkbox">
              Scooter
            </label>
            <label class="panel-block">
              <input type="checkbox">
              Racing
            </label>
            <label class="panel-block">
              <input type="checkbox">
              Touring
            </label>
            <label class="panel-block">
              <input type="checkbox">
              MotorCylce
            </label>
          </nav>
          <nav class="panel">
            <p class="panel-heading">
              Type
            </p>
            <label class="panel-block">
              <input type="checkbox">
              Scooter
            </label>
            <label class="panel-block">
              <input type="checkbox">
              Racing
            </label>
            <label class="panel-block">
              <input type="checkbox">
              Touring
            </label>
            <label class="panel-block">
              <input type="checkbox">
              MotorCylce
            </label>
          </nav>
          <nav class="panel">
            <p class="panel-heading">
              Brand
            </p>
            <label class="panel-block">
              <input type="checkbox">
              Scooter
            </label>
            <label class="panel-block">
              <input type="checkbox">
              Racing
            </label>
            <label class="panel-block">
              <input type="checkbox">
              Touring
            </label>
            <label class="panel-block">
              <input type="checkbox">
              MotorCylce
            </label>
          </nav>
          <button class="button is-primary is-outlined is-fullwidth">
            Reset all filters
          </button>
        </div>

        <div class="column">
          <div class="columns">
            <div class="column has-text-right">
              <button class="button"><icon name="th"></icon></button>
              <button class="button"><icon name="th-list"></icon></button>
            </div>
          </div>
          <div class="columns is-multiline">
            <product-thumb class="is-4"></product-thumb>
            <product-thumb class="is-4"></product-thumb>
            <product-thumb class="is-4"></product-thumb>
            <product-thumb class="is-4"></product-thumb>
            <product-thumb class="is-4"></product-thumb>
            <product-thumb class="is-4"></product-thumb>
          </div>
          <div class="columns">
            <div class="column">
              <nav class="pagination">
                <a class="pagination-previous">Previous</a>
                <a class="pagination-next">Next page</a>
                <ul class="pagination-list">
                  <li>
                    <a class="pagination-link">1</a>
                  </li>
                  <li>
                    <span class="pagination-ellipsis">&hellip;</span>
                  </li>
                  <li>
                    <a class="pagination-link">45</a>
                  </li>
                  <li>
                    <a class="pagination-link is-current">46</a>
                  </li>
                  <li>
                    <a class="pagination-link">47</a>
                  </li>
                  <li>
                    <span class="pagination-ellipsis">&hellip;</span>
                  </li>
                  <li>
                    <a class="pagination-link">86</a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
  import ProductThumb from '@/Shop/ProductThumb';
  import 'vue-awesome/icons/th';
  import 'vue-awesome/icons/th-list';

  export default{
    components: {
      ProductThumb,
    },
  };
</script>
