<template>
  <section class="modal-header-default modal-container__body-wrapper">
    Please wait
    <div class="card is-loading">
      <div class="image"></div>
      <div class="content">
        <h2></h2>
        <p></p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "LoadingSkeleton",
};
</script>

<style lang="scss">
.modal-container__body-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 20px 38px 40px 41px;
}
</style>
