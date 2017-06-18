<template>
  <div class="columns">
    <div class="column is-6">
      <div class="columns">
        <div class="column">
          <carousel perPage=1 navigationEnabled="true">
            <slide>
              <div class="image is-2by2">
                <img src="https://placehold.it/1000x1000">
              </div>
            </slide>
            <slide>
              <div class="image is-2by2">
                <img src="https://placehold.it/1000x1000">
              </div>
            </slide>
            <slide>
              <div class="image is-2by2">
                <img src="https://placehold.it/1000x1000">
              </div>
            </slide>
            </carousel>
        </div>
      </div>
      <div class="columns">
        <user></user>
      </div>
    </div>
    <div class="column is-6">
      <div class="card">
        <div class="card-content">
          <h3 class="title">Bike Name</h3>
          <h4 class="title">25,000</h4>
          <p>
            Suspendisse sodales metus justo, ullamcorper iaculis purus interdum in. Sed ultricies enim felis, in interdum urna malesuada a. Morbi id ligula vel leo elementum dignissim quis vel purus. Donec iaculis, est ac maximus vestibulum, sapien mi lacinia urna, at laoreet felis lectus nec urna. Fusce egestas, neque vitae blandit scelerisque, leo arcu pellentesque risus, et volutpat neque nunc id massa. Aenean dapibus leo vel purus malesuada, eu ultrices nulla consequat. Duis erat orci, lobortis sed dictum id, pretium a nibh. Mauris pharetra ligula consequat gravida ornare.
          </p>
          <p>
          <div class="columns">
            <div class="column">
              <social-sharing url="https://vuejs.org/" inline-template>
              <div>
                <network network="facebook">
                  <icon name="facebook"></icon>
                </network>
                <network network="googleplus">
                  <icon name="google-plus"></icon>
                </network>
                <network network="twitter">
                  <icon name="twitter"></icon>
                </network> 
                <network network="whatsapp">
                  <icon name="whatsapp"></icon>
                </network>
              </div>
            </social-sharing>
            </div>
            <div class="column has-text-right"><a class="button is-primary">Contact</a></div>
          </div>
          </p>
          <p>
            
            <strong>41 Reviews</strong>
            &nbsp; &nbsp;
            <a href="#">show all</a>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import SocialSharing from 'vue-social-sharing';
  import 'vue-awesome/icons/facebook';
  import 'vue-awesome/icons/twitter';
  import 'vue-awesome/icons/whatsapp';
  import 'vue-awesome/icons/google-plus';
  import { Carousel, Slide } from 'vue-carousel';
  import User from '@/Community/User';

  export default {
    components: {
      User,
      SocialSharing,
      Carousel,
      Slide,
    },
  };
</script>
