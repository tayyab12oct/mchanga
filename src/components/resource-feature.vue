<template>
  <div class="resources-feature-item">
    <div class="feature-number">{{ num }}</div>
    <div class="feature-text">
      <h3 class="feature-title">{{ title }}</h3>
      <div class="feature-description">
        <p>{{ text }}</p>
        <p>
          {{ text2 }}
          <a :href="link" target="_blank">{{ link }}</a>
        </p>
        <p>{{ text3 }}</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    num: {
      type: String,
    },
    title: {
      type: String,
    },
    text: {
      type: String,
    },
    text2: {
      type: String,
    },
    text3: {
      type: String,
    },
    link: {
      type: String,
    },
  },
};
</script>
