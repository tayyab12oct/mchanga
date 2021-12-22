<template>
  <div class="section nobg nomargin home-faq-sec">
    <div class="container">
      <div class="heading-block center">
        <h2>Have a question? Check out our FAQs page or chat with us</h2>
      </div>
      <div class="row">
        <div class="col-md-4" v-for="n in list" :key="n">
          <a href="#" class="button button-icon">
            <img :src="n.src" />
            <span>{{ n.text }}</span>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      list: [
        {
          src: require("@/assets/images/ic-faq-1.png"),
          text: "Start A Fundraiser",
        },
        {
          src: require("@/assets/images/ic-faq-2.png"),
          text: "Find Out More",
        },
        {
          src: require("@/assets/images/ic-faq-3.png"),
          text: "Request a call back",
        },
      ],
    };
  },
};
</script>
