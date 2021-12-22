<template>
  <div class="champion-desc-box">
    <img class="mx-auto" :src="src" />
    <p>
      {{ text }}
    </p>
  </div>
</template>
<script>
export default {
  props: {
    src: {
      //   default: require("@/assets/images/ic-communities-1.png"),
      type: String,
    },
    text: {
      default: "",
      type: String,
    },
  },
};
</script>
