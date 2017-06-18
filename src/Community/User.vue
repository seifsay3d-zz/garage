<template>
  <div class="column">
    <div class="media">
      <div class="media-left">

        <figure class="image is-48x48">
          <avatar :username="username"></avatar>
        </figure>
      </div>
      <div class="media-content">
        <p class="title is-4">John Smith</p>
        <p class="subtitle is-6">@johnsmith</p>
      </div>
    </div>
  </div>
</template>
<script>
  import Avatar from 'vue-avatar/dist/Avatar';

  export default {
    data: function data() {
      return {
        username: 'Seif Sayed Abdelmohsen',
      };
    },
    components: {
      Avatar,
    },
  };
</script>
