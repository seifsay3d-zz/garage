<template>
  <div class="column">
    <div class="card">
      <div class="card-content">
        <div class="content">
          <h3>Lorem ipsum dolor sit.</h3>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Phasellus nec iaculis mauris. <a>@bulmaio</a>.
          <a>#css</a> <a>#responsive</a>
          <br>
          <small>11:09 PM - 1 Jan 2016</small>
        </div>
        <div class="columns">
          <user></user>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import User from '@/Community/User';

  export default{
    components: {
      User,
    },
  };
</script>
