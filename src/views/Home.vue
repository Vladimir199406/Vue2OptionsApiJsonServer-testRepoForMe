<template>
  <div class="home">
    <ModalWindow v-if="showModal" @close="closeModal"></ModalWindow>
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
  methods: {
    closeModal() {
      this.showModal = false;
    },
  },
};
</script>

<style lang="scss">
</style>
