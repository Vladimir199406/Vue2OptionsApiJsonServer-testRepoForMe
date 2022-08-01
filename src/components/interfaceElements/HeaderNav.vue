<template>
  <div class="main-container">
    <nav class="main-container__nav">
      <img src="@/assets/images/nav-logo.svg" alt="nav-logo" class="logo" />
      <section class="links">
        <router-link class="links__link" to="/">Home</router-link>
        <router-link class="links__link" to="/catalog">Catalog</router-link>
        <router-link class="links__link" to="/tenders">Tenders</router-link>
        <router-link class="links__link" to="/trade">Trade</router-link>
        <router-link class="links__link" to="/web-shop-nl"
          >Web-Shop NL</router-link
        >
      </section>
    </nav>
  </div>
</template>

<script>
export default {
  name: "HeaderNav",
};
</script>

<style lang="scss">
@import "@/assets/styles/variables.scss";

.main-container {
  background-color: $backgroundMain;
  &__nav {
    align-items: center;
    display: flex;
    flex-direction: row;
    max-width: 1000px;
    .logo {
      margin: 8px 95px 8px 140px;
    }
    .links {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      flex-wrap: wrap;
      &__link {
        padding: 0 19px;
        text-decoration: none;
        color: $blackDefault;
      }
    }
  }
}
</style>
