<template>
  <div>
    <div class="columns">
      <new-comment></new-comment>
    </div>
    <div class="columns is-multiline">
      <g-comment class="is-12"></g-comment>
      <g-comment class="is-12"></g-comment>
      <g-comment class="is-12"></g-comment>
    </div>
  </div>
</template>
<script>
  import GComment from '@/Community/Comment';
  import NewComment from '@/Community/NewComment';

  export default {
    components: {
      GComment,
      NewComment,
    },
  };
</script>
