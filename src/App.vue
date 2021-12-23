<template>
  <div>
    <TopBar />
    <Header />
    <div>
      <router-view />
    </div>
  </div>
</template>

<script>
import TopBar from "./components/TopBar/index.vue";
import Header from "./components/Header/index.vue";
export default {
  components: {
    TopBar,
    Header,
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Nunito:wght@200;300;400;500;600;700;800;900&family=Permanent+Marker&display=swap");
#primary-menu a.router-link-exact-active {
  background-color: #fcc82c;
  color: black;
}
body {
  background: #f9f7f6 !important;
}
</style>
