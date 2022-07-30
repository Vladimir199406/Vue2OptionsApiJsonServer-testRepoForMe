<template>
  <div class="">
    <div>
      <div style="font-size: 30vh">404</div>

      <div class="" style="opacity: 0.4">Oops. Nothing here...</div>

      <router-link to="/">
        <button>Go Home</button>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "ErrorNotFound",
};
</script>

<style lang="scss"></style>
