<template>
  <transition name="modal">
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">
          <button class="modal-container__button" @click="$emit('close')">
            <img
              class="modal-container__button--img"
              src="@/assets/images/close.svg"
              alt="close"
            />
          </button>
          <modal-main :showModal="showModal" />
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import ModalMain from "./ModalMain.vue";

export default {
  name: "ModalWindow",
  components: {
    ModalMain,
  },
  props: ["showModal"],
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
@import "@/assets/styles/variables";

// modal visual
.modal-mask {
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  height: 100%;
  left: 0;
  position: fixed;
  top: 0;
  transition: opacity 0.3s ease;
  width: 100%;
  z-index: 9998;

  .modal-wrapper {
    display: table-cell;
    vertical-align: middle;
    .modal-container {
      background-color: #fff;
      border-radius: 4px;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
      font-family: Helvetica, Arial, sans-serif;
      margin: 0px auto;
      max-width: 600px;
      //min-height: 404px;
      position: relative;
      transition: all 0.3s ease;
      &__button {
        background: none;
        border: none;
        position: absolute;
        right: 0;
        &--img {
          height: 14px;
          padding: 10px;
        }
      }
    }
  }
}

// transition styles
.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>
