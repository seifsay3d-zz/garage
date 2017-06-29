<template>
  <div>
    <p class="control" v-on:click="active = true">
      <a class="button" >
        <span class="icon">
          <icon name="sign-in"></icon>
        </span>
        <span>Sign up</span>
      </a>
    </p>
    <div class="modal" v-bind:class="{ 'is-active': active }">
      <div class="modal-background"></div>
      <div class="modal-content">
            <nav class="panel">
              <p class="panel-heading">
                Sign up to open your garage
              </p>
              <div class="panel-block">
                <div class="field">
                  <p class="control">
                  <label for=""> Sign up</label>
                    <input class="input" placeholder="Sign up"></input>
                  </p>
                </div>
              </div>
            </nav>
      </div>
      <button class="modal-close" v-on:click="active = false" ></button>
    </div>
  </div>
</template>
<script>
  export default {
    data: function data() {
      return {
        active: false,
      };
    },
  };
</script>
