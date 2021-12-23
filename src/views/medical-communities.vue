<template>
  <div>
    <Breadcrumbs
      :src="require('@/assets/images/top-banner-med-communities.jpg')"
      breadcrumb="M-Changa Medical Communities"
      title="Changa Medical Communities"
    />
    <section id="content">
      <div class="section nomargin med-communities-about">
        <div class="container">
          <div class="heading-block center">
            <h2>About</h2>
          </div>
          <div class="row justify-content-center">
            <div class="col-md-10">
              <p class="lead-paragraph text-center">
                This is a community of M-Changa selected medical fundraisers.<br />Learn
                more at: http://changa.co.ke/community/
              </p>
            </div>
          </div>
          <div class="row med-com-contact">
            <div class="col-md-6" v-for="v in aboutDetail" :key="v">
              <AboutCard :src="v.src" :text="v.text" :contact="v.contact" />
            </div>
          </div>
          <div class="row">
            <div class="col-md-4 col-4">
              <div class="statistic-item center">
                <div class="counter">$1,906</div>
                <p>Funds Raised</p>
              </div>
            </div>
            <div class="col-md-4 col-4">
              <div class="statistic-item center">
                <div class="counter">225</div>
                <p>Supporters</p>
              </div>
            </div>
            <div class="col-md-4 col-4">
              <div class="statistic-item center">
                <div class="counter">26</div>
                <p>Days Left</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="section nobg nomargin medical-stories-section">
        <div class="container">
          <div class="row">
            <div class="col-md-4" v-for="n in 3" :key="n">
              <ProductCard />
            </div>
          </div>
          <div class="row med-com-pagination">
            <div class="col-md-12">
              <Pagination />
            </div>
          </div>
        </div>
      </div>
      <div class="section nomargin med-communities-comment">
        <div class="container">
          <div class="heading-block center">
            <h2>Well Wisher Comments</h2>
          </div>
          <div class="comment-plugin-wrap">
            <div style="text-align: center; height: 300px; line-height: 300px">
              Comments Plugins Here
            </div>
          </div>
        </div>
      </div>
      <QuestionBottom />
    </section>
    <Footer />
  </div>
</template>
<script>
import Breadcrumbs from "../components/Breadcrumbs.vue";
import QuestionBottom from "../components/QuestionBottom.vue";
import Pagination from "../components/Pagination.vue";
import ProductCard from "../components/ProductCard.vue";
import AboutCard from "../components/AboutCard.vue";
import Footer from "../components/Footer/index.vue";
export default {
  components: {
    Breadcrumbs,
    QuestionBottom,
    Pagination,
    ProductCard,
    AboutCard,
    Footer,
  },
  data() {
    return {
      aboutDetail: [
        {
          src: require("@/assets/images/ic-phone-2.png"),
          text: "Contact Changa Medical Coordinator :",
          contact: "254722000000",
        },
        {
          src: require("@/assets/images/ic-mail-2.png"),
          text: "To request to join Changa Medical Community :",
          contact: "support@changa.co.ke",
        },
      ],
    };
  },
};
</script>
