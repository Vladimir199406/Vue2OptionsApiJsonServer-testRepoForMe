<template>
  <div class="home">
    <ModalWindow v-if="showModal" @close="closeModal"></ModalWindow>
  </div>
</template>

<script>
import { mapState } from "vuex";
import ModalWindow from "@/components/ModalWindow.vue";

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
  beforeMount() {
    if (this.closeModalWindow) {
      this.showModal = false;
    }
  },
  computed: {
    ...mapState({
      closeModalWindow: (state) => state.modal.closeModalWindow,
    }),
  },
  methods: {
    closeModal() {
      this.showModal = false;
      localStorage.setItem("closeModalWindow", true);
    },
  },
};
</script>

<style lang="scss">
</style>
