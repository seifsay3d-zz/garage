<template>
  <section class="section">
    <div class="container">
      <div class="columns">
        <div class="column">
          <div class="columns">
            <div class="tabs is-medium">
              <ul>
                <li class="is-active"><a>Dealers</a></li>
                <li><a>Repair Shop</a></li>
                <li><a>Gear</a></li>
                <li><a>Accessories</a></li>
              </ul>
            </div>
          </div>
          <directory-list></directory-list>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
  import DirectoryList from '@/Pages/Directory/DirectoryList';

  export default {
    components: {
      DirectoryList,
    },
  };
</script>
