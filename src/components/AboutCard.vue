<template>
  <div class="med-contact-inner">
    <img class="mx-auto" :src="src" />
    <div class="contact-descripiton">{{ text }}</div>
    <div class="contact-detail">{{ contact }}</div>
  </div>
</template>
<script>
export default {
  props: {
    src: {
      type: String,
      default: require("@/assets/images/ic-phone-2.png"),
    },
    text: {
      type: String,
      default: "Contact Changa Medical Coordinator :",
    },
    contact: {
      type: String,
      default: "254722000000",
    },
  },
};
</script>
