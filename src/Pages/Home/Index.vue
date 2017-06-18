<template>
  <div>
    <section class="hero">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">
            Hero title
          </h1>
          <h2 class="subtitle">
            Hero subtitle
          </h2>
        </div>
      </div>
    </section>
    <!-- updates section -->
    <section class="section">
      <div class="container">
        <div class="columns">
          <div class="column is-three-quarters">
            <div class="columns">
              <h2>Recently Added</h2>
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
                <h2> 142 Riders in the garage</h2>
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
                <h2>Club Wall</h2>
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
                <h2>Articles</h2>
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

  export default {
    components: {
      ProductThumb,
      GComment,
      NewComment,
      ArticleThumb,
    },
  };
</script>
