<template>
  <section
    id="slider"
    class="slider-element inner-page-slider flex items-center"
  >
    <img
      :src="src"
      class="absolute top-0 left-0 bottom-0 h-full w-full"
      alt=""
      :class="imgClass"
    />
    <div class="texture-overlay">
      <div class="texture-left">
        <img src="@/assets/images/zigzag-texture.png" />
      </div>
      <div class="texture-right">
        <img src="@/assets/images/zigzag-texture.png" />
      </div>
    </div>
    <div class="container">
      <ol class="breadcrumb">
        <li class="breadcrumb-item"><a href="#">Home</a></li>
        <li class="breadcrumb-item active" aria-current="page">
          {{ breadcrumb }}
        </li>
        <li
          class="breadcrumb-item active"
          :class="breadcrumb2Class"
          aria-current="page"
        >
          {{ breadcrumb2 }}
        </li>
      </ol>
      <div class="banner-heading md:w-1/2">
        <h1>
          <span>{{ title }}</span>
        </h1>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  props: {
    src: {
      //   default: require("@/assets/images/top-banner-blog.jpg"),
      type: String,
    },
    breadcrumb: {
      default: "Blog",
      type: String,
    },
    breadcrumb2: {
      default: "Blog",
      type: String,
    },
    breadcrumb2Class: {
      default: "hidden",
      type: String,
    },
    title: {
      default: "Our Blog",
      type: String,
    },
    imgClass: {
      default: "",
      type: String,
    },
  },
};
</script>
