<template>
  <div class="simple-step-item">
    <div class="step-number">{{ step }}</div>
    <img :src="src" class="step-icon mx-auto" />
    <h3 class="step-title">{{ title }}</h3>
    <p class="step-list">
      {{ text }}
      <span :class="bottomClass"
        ><br /><strong>{{ strong1 }}</strong> <br /><strong>{{
          strong2
        }}</strong></span
      >
    </p>
  </div>
</template>
<script>
export default {
  props: {
    step: {
      default: "1",
      type: String,
    },
    src: {
      default: require("@/assets/images/ic-mfund-step-1.png"),
      type: String,
    },
    title: {
      default: "Register",
      type: String,
    },
    text: {
      default:
        "To create your fundraiser account and begin raising money for your cause:",
      type: String,
    },
    strong1: {
      default: "Save *483*57#",
      type: String,
    },
    strong2: {
      default: "Dial *483*57#",
      type: String,
    },
    bottomClass: {
      default: "",
      type: String,
    },
  },
};
</script>
