<template>
  <div id="app">
    <header></header>
    <page-wrapper></page-wrapper>
    <footer></footer>
  </div>
</template>

<script>
import GHeader from './Layout/Header';
import GFooter from './Layout/Footer';
import PageWrapper from './Layout/PageWrapper';

export default {
  name: 'app',
  components: {
    GHeader,
    GFooter,
    PageWrapper,
  },
};
</script>

<style lang="scss">
  @import '~bulma';
  
</style>
