<template>
  <section class="section">
    <div class="container">
      <div class="columns">
        <div class="column">
          <div class="columns">
            <div class="tabs is-medium">
              <ul>
                <li  v-bind:class="[ currentView == 'Dealers' ? 'is-active' : '',]"  v-on:click="currentView='Dealers'"><a>Dealers</a></li>
                <li  v-bind:class="[ currentView == 'Repair Shop' ? 'is-active' : '',]"  v-on:click="currentView='Repair Shop'"><a>Repair Shop</a></li>
                <li  v-bind:class="[ currentView == 'Gear' ? 'is-active' : '',]"  v-on:click="currentView='Gear'"><a>Gear</a></li>
                <li  v-bind:class="[ currentView == 'Accessories' ? 'is-active' : '',]"  v-on:click="currentView='Accessories'"><a>Accessories</a></li>
              </ul>
            </div>
          </div>
          <directory-list :type="currentView"></directory-list>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
  import DirectoryList from '@/Pages/Directory/DirectoryList';

  export default {
    data: function data() {
      return {
        currentView: 'Dealers',
      };
    },
    components: {
      DirectoryList,
    },
  };
</script>
