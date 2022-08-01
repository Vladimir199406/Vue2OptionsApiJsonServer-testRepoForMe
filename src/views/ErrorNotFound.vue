<template>
  <div>
    <div
      style="
        font-size: 30vh;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 80vh;
      "
    >
      404
      <router-link to="/">
        <button style="font-size: 3vh">Go Home ?</button>
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
