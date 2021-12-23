<template>
  <div class="article-item">
    <div class="socmed-icon flex items-center">
      <img class="mx-auto" :src="icon" />
    </div>
    <img :src="image" class="featured-image" />
    <div class="article-title">
      <img src="@/assets/images/favicon.png" class="authors-image" />
      <div class="author-text">
        <h3>{{title}}</h3>
        <p>{{subText}}</p>
      </div>
    </div>
    <div class="article-excerpt">
      <p>
        {{text1}}
      </p>
      <p>
        {{text2}}
      </p>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    icon: {
      type: String,
    },
    image: {
      type: String,
    },
    title: {
      type: String,
    },
    subText: {
      type: String,
    },
    text1: {
      type: String,
    },
    text2: {
      type: String,
    },
  },
};
</script>
