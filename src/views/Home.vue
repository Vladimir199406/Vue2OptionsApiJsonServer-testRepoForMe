<template>
  <div class="home">
    <ModalWindow v-if="showModal" @close="showModal = false">
      <h3 slot="header" class="header">custom header</h3>
    </ModalWindow>
  </div>
</template>

<script>
// @ is an alias to /src
import ModalWindow from "../components/ModalWindow.vue";

export default {
  name: "Home",
  components: {
    ModalWindow,
  },
  data() {
    return {
      showModal: true,
    };
  },
};
</script>

<style lang="scss">
.header {
  color: #42b983;
}
</style>
