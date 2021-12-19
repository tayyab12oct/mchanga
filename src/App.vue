<template>
  <div id="nav">
    <TopBar />
    <Header />
    <div class="mode">
      <router-view />
    </div>
    <Footer />
  </div>
</template>

<script>
import TopBar from "./components/TopBar/index.vue";
import Header from "./components/Header/index.vue";
import Footer from "./components/Footer/index.vue";
export default {
  components: {
    TopBar,
    Header,
    Footer,
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Nunito:wght@200;300;400;500;600;700;800;900&family=Permanent+Marker&display=swap");
#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
