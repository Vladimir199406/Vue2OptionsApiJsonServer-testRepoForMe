<template>
  <div class="progress-bar-wrapper">
    <div
      class="progress-bar-wrapper__progress-bar"
      :style="`width: ${(questionCounter / (steps - 1)) * 100}%`"
    ></div>
    <div
      class="progress-bar-wrapper__item"
      v-for="(step, index) in steps"
      :key="step.id"
      :class="{
        'progress-bar-wrapper__item--completed':
          questionCounter === index || questionCounter > index,
      }"
    ></div>
  </div>
</template>

<script>
export default {
  name: "ProgressBar",
  props: ["steps", "questionCounter"],
};
</script>

<style scoped lang="scss">
@import "@/assets/styles/variables.scss";
.progress-bar-wrapper {
  margin-bottom: 21px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  &::before {
    content: "";
    width: 100%;
    height: 3px;
    background-color: $borderBackgroundDefault;
    position: absolute;
    z-index: 1;
  }
  &__progress-bar {
    width: 0;
    height: 3px;
    background-color: $progressBarPointBorder;
    position: absolute;
    z-index: 2;
  }
  &__item {
    width: $progressItemSize;
    height: $progressItemSize;
    border-radius: 50%;
    background: $backgroundMain;
    border: 2px solid $borderBackgroundDefault;
    z-index: 3;
    &--completed {
      background: $progressBarPoint;
      border: 2px solid $progressBarPointBorder;
    }
  }
}
</style>
