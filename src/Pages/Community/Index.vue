<template>
  <section class="section">
    <div class="container">
      <div class="columns">
        <div class="column">
          <div class="columns">
            <div class="tabs is-medium">
              <ul>
                <li  v-bind:class="[ currentView == 'Wall' ? 'is-active' : '',]"  v-on:click="currentView='Wall'"><a>Wall</a></li>
                <li  v-bind:class="[ currentView == 'Articles' ? 'is-active' : '',]" v-on:click="currentView='Articles'"><a>Articles</a></li>
              </ul>
            </div>
          </div>
          <div class="tabs-content">
            <component v-bind:is="currentView">
              <!-- component changes when vm.currentView changes! -->
            </component>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import Wall from '@/Pages/Community/Wall';
import Articles from '@/Pages/Community/Articles';

export default {
  data: function data() {
    return {
      currentView: 'Wall',
    };
  },
  components: {
    Wall,
    Articles,
  },
};
</script>
