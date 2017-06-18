<template>
  <div>
    <section class="hero is-large">
      <div class="hero-body">
        <div class="container">
          <div class="columns">
            <div class="column is-10">
              <input class="input is-medium" placeholder="What are you looking for?" type="text">
            </div>
            <div class="column">
              <button class="button is-primary is-medium">Search</button>
            </div>
          </div>
        </div>
      </div>
    </section>
    <div class="section">
      <div class="container">
        <div class="columns">
          <div class="column">
            <h4 class="title">Welcome to XX, Start exploring the community</h4>
          </div>
        </div>
      </div>

    </div>
    <!-- updates section -->
    <section class="section">
      <div class="container">
        <div class="columns">
          <div class="column is-three-quarters">
            <div class="columns">
              <h2 class="title">Recently Added</h2>
            </div>
            <div class="columns">
              <product-thumb></product-thumb>
              <product-thumb></product-thumb>
              <product-thumb></product-thumb>
            </div>
          </div>
          <div class="column">
            <div class="columns">
              <div class="column">
                <h2 class="title"> 142 Riders in the garage</h2>
              </div>
            </div>
            <div class="columns">
              <div class="column">
                <article class="media">
                  <figure class="media-left">
                    <p class="image is-64x64">
                      <img src="http://bulma.io/images/placeholders/128x128.png">
                    </p>
                  </figure>
                  <div class="media-content">
                    <div class="content">
                      <p>
                        <strong>John Smith</strong> <small>@johnsmith</small> <small>31m</small>
                        <br>
                        Honda Hornet 600RR
                      </p>
                    </div>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- end updates -->
    <section class="section">
      <div class="container">
        <div class="columns">
          <div class="column">
            <div class="columns">
              <div class="column">
                <h2 class="title">Club Wall</h2>
              </div>
            </div>
            <div class="columns">
              <new-comment></new-comment>
            </div>
            <div class="columns is-multiline">
              <g-comment class="is-12"></g-comment>
              <g-comment class="is-12"></g-comment>
              <g-comment class="is-12"></g-comment>
            </div>
          </div>
          <div class="column">
            <div class="columns ">
              <div class="column">
                <h2 class="title">Articles</h2>
              </div>
            </div>
            <div class="columns is-multiline">
              <article-thumb class="is-6"></article-thumb>
              <article-thumb class="is-6"></article-thumb>
              <article-thumb class="is-6"></article-thumb>
              <article-thumb class="is-6"></article-thumb>
            </div>
          </div>
        </div>
      </div>
    </section>

  </div>
</template>
<script>
  import ProductThumb from '@/Shop/ProductThumb';
  import GComment from '@/Community/Comment';
  import NewComment from '@/Community/NewComment';
  import ArticleThumb from '@/Community/ArticleThumb';
  import homepage from '@/assets/homepage.png';

  export default {
    data: function data() {
      return {
        homepage,
      };
    },
    mounted: function mounted() {
      const slider = this.$el.querySelector('.hero');
      slider.style.backgroundImage = `url( ${homepage} )`;
    },
    components: {
      ProductThumb,
      GComment,
      NewComment,
      ArticleThumb,
    },
  };
</script>
<style lang="scss">
  .hero{
    background-position:center;
  }
</style>
