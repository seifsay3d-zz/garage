<template>
  <div id="app">
    <g-header></g-header>
    <page-wrapper></page-wrapper>
    <g-footer></g-footer>
  </div>
</template>

<script>
import GHeader from './Header';
import GFooter from './Footer';
import PageWrapper from './PageWrapper';

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
