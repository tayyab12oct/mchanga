<template>
  <div>
    <section
      id="slider"
      class="slider-element home-slider mb-10"
      style="background-image: url('img/pexels-nappy-935985.d001a95e.jpg'); background-size: cover;"
    >
      <!-- <img
        src="@/assets/images/pexels-nappy-935985.jpg"
        class="home-slider absolute top-0 left-0 bottom-0 w-full bg-cover"
        alt=""
      /> -->
      <div class="texture-overlay">
        <div class="texture-left">
          <img src="@/assets/images/zigzag-texture.png" />
        </div>
        <div class="texture-right">
          <img src="@/assets/images/zigzag-texture.png" />
        </div>
      </div>
      <div class="curve-overlay">
        <img src="@/assets/images/banner-curve-overlay.png" />
      </div>
      <div class="slider-inner vertical-middle center pt-20">
        <div class="container">
          <div class="banner-heading">
            <h1><span>Fundraising:</span>Simple. Fast. Secure.</h1>
          </div>
          <div class="home-banner-cta">
            <a href="#" class="button">Start Today</a>
            <form>
              <div class="input-group">
                <div class="input-group-prepend">
                  <span class="input-group-text"
                    ><img src="@/assets/images/ic-search.png"
                  /></span>
                </div>
                <input
                  type="text"
                  class="form-control"
                  placeholder="Find a Campaign"
                  name=""
                />
              </div>
            </form>
          </div>
          <div class="home-banner-statistic z-50">
            <div class="row">
              <div class="col-md-4">
                <div class="banner-statistic-item">
                  <img
                    src="@/assets/images/ic-fundraiser-started.png"
                    class="statistic-icon"
                  />
                  <div class="statistic-text">
                    <div class="counter">
                      47,851
                    </div>
                    <p>Fundraisers Started</p>
                  </div>
                </div>
              </div>
              <div class="col-md-4">
                <div class="banner-statistic-item">
                  <img
                    src="@/assets/images/ic-supporters.png"
                    class="statistic-icon"
                  />
                  <div class="statistic-text">
                    <div class="counter">
                      92,568
                    </div>
                    <p>Supporters</p>
                  </div>
                </div>
              </div>
              <div class="col-md-4">
                <div class="banner-statistic-item">
                  <img
                    src="@/assets/images/ic-satisfied-customers.png"
                    class="statistic-icon"
                  />
                  <div class="statistic-text">
                    <div class="counter">
                      89%
                    </div>
                    <p>Satified Customers</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="content">
      <div class="pb-10">
        <div class="section nobg nopadding notopmargin home-why-sec">
          <div class="container">
            <div class="heading-block center">
              <h2>Why M-Changa</h2>
            </div>
            <div class="row">
              <div class="col-md-3 col-6" v-for="v in services" :key="v">
                <div class="home-why-item">
                  <img class="mx-auto" :src="v.src" />
                  <h4>{{ v.text }}</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="section notopmargin nopadding nobg home-stepfundraiser-sec">
          <div class="container">
            <div class="heading-block center">
              <h2>Start a Fundraiser in three simple steps</h2>
            </div>
            <div class="row">
              <div class="col-md-6">
                <div class="fundraiser-step-wrap">
                  <div class="fundstep-item">
                    <img
                      src="@/assets/images/ic-start-fundraiser.png"
                      class="fundstep-icon"
                    />
                    <div class="fundstep-text">
                      <h3>Start your fundraiser</h3>
                      <p>
                        It’ll take only 2 minutes. Just tell us a few details
                        about you and what you are raising funds for.
                      </p>
                    </div>
                  </div>
                  <div class="fundstep-item">
                    <img
                      src="@/assets/images/ic-share-fundraiser.png"
                      class="fundstep-icon"
                    />
                    <div class="fundstep-text">
                      <h3>Share your fundraiser</h3>
                      <p>
                        All you need to do is consistently share the fundraiser
                        with your friends, family and online community. In no
                        time, support will start pouring in.
                      </p>
                    </div>
                  </div>
                  <div class="fundstep-item">
                    <img
                      src="@/assets/images/ic-withdraw.png"
                      class="fundstep-icon"
                    />
                    <div class="fundstep-text">
                      <h3>Withdraw Funds</h3>
                      <p>
                        The funds raised can be withdrawn without any hassle
                        directly to your bank account.
                      </p>
                    </div>
                  </div>
                </div>
                <div class="fundraiser-step-action">
                  <a href="#" class="button">Start a fundraiser</a>
                  <a href="#" class="button button-outline">Learn More</a>
                </div>
              </div>
              <div class="col-md-6">
                <div class="fundraiser-step-slider">
                  <div class="curve-background">
                    <img src="@/assets/images/thm-shape-1.png" />
                  </div>
                  <div class="phone-slider">
                    <div class="phone-mockup">
                      <img src="@/assets/images/device-contour.png" />
                    </div>
                    <div class="screen-carousel">
                      <carousel
                        autoplay="2000"
                        :wrapAround="true"
                        :items-to-show="1"
                      >
                        <slide v-for="v in stepsSlide" :key="v">
                          <img :src="v.src" alt="Slider" />
                        </slide>
                      </carousel>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="section nobg nomargin home-trendingfund-sec">
          <div class="container">
            <div class="heading-block center">
              <h2>Trending Fundraisers</h2>
            </div>
            <carousel
              :settings="settings"
              :wrap-around="true"
              :breakpoints="breakpoints"
              :items-to-show="1"
              :wrapAround="true"
              :autoplay="autoplay"
              class="carousel"
            >
              <slide v-for="v in 10" :key="v">
                <div class="trending-item-wrapper w-full md:px-3">
                  <div class="trending-image">
                    <img src="@/assets/images/fundraiser-1.jpg" />
                  </div>
                  <div class="trending-card">
                    <div class="trending-card-inner">
                      <h3>
                        Mama Eva Medical Fundraiser! Let’s do it for her
                      </h3>
                      <p>RAISED: KES 109,300<br />Donations 143</p>
                      <div class="progress">
                        <div
                          class="progress-bar"
                          role="progressbar"
                          aria-valuenow="60"
                          aria-valuemin="0"
                          aria-valuemax="100"
                          style="width: 60%"
                        >
                          <span>60%</span>
                        </div>
                      </div>
                      <div class="goal-statistic">
                        <strong>$ 1,378</strong> funds raised of
                        <strong>$ 10.000</strong> goal
                      </div>
                      <div class="trending-footer">
                        <a href="#" class="button button-outline">Donate</a>
                      </div>
                    </div>
                  </div>
                </div>
              </slide>

              <template #addons>
                <navigation />
              </template>
            </carousel>
            <div class="row justify-content-center">
              <div class="col-md-10">
                <form class="searchbox-fundraiser">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Search a fundraiser"
                  />
                  <button class="button" type="button">Search</button>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div class="section nobg nomargin home-articles-sec">
          <div class="container">
            <div class="heading-block center">
              <h2>What is Hapening?</h2>
            </div>
            <div class="row article-items-wrapper">
              <div class="col-md-4" v-for="v in cards" :key="v">
                <HapeningCard
                  :icon="v.icon"
                  :image="v.image"
                  :title="v.title"
                  :subText="v.subText"
                  :text1="v.text1"
                  :text2="v.text2"
                />
              </div>
            </div>
          </div>
        </div>
        <QquestionBottom />
      </div>
    </section>
    <Footer />
  </div>
</template>
<script>
import QquestionBottom from "../components/QuestionBottom.vue";
import HapeningCard from "../components/HapeningCard.vue";
import Footer from "../components/Footer/index.vue";
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Navigation } from "vue3-carousel";

export default {
  components: {
    QquestionBottom,
    Footer,
    HapeningCard,
    Carousel,
    Slide,
    Navigation,
  },
  data() {
    return {
      services: [
        {
          src: require("@/assets/images/ic-why-1.png"),
          text: "Convenient set up and management process",
        },
        {
          src: require("@/assets/images/ic-why-2.png"),
          text: "Receive donations via mobile & electronic money",
        },
        {
          src: require("@/assets/images/ic-why-3.png"),
          text: "Easy sharing with a single click",
        },
        {
          src: require("@/assets/images/ic-why-4.png"),
          text: "Access to daily auto- reports",
        },
        {
          src: require("@/assets/images/ic-why-5.png"),
          text: "Security of donations",
        },
        {
          src: require("@/assets/images/ic-why-6.png"),
          text: "Upon verification, withdraw donations without hassle",
        },
        {
          src: require("@/assets/images/ic-why-7.png"),
          text: "Get expert customer support",
        },
        {
          src: require("@/assets/images/ic-why-8.png"),
          text: "International donation options",
        },
      ],
      cards: [
        {
          icon: require("@/assets/images/ic-twitter-blog.png"),
          image: require("@/assets/images/article-1.jpg"),
          title: "M-Changa Fundraising",
          subText: "@m_changa",
          text1:
            "Dear customer, in line with our commitment to offer you the best service while keeping safe, we would like to inform you that moving forward ALL walk-in service will be on Appointment Only.",
          text2: "To book an appointment, kindly reach us on 020 765 0919.",
        },
        {
          icon: require("@/assets/images/ic-facebook-blog.png"),
          image: require("@/assets/images/article-2.jpg"),
          title: "m_changa_kenya",
          subText: "",
          text1: "Virtual management. Diverse donation options.",
          text2:
            "What other convenience is offered by online fundraising? Join us on 29th July as we unpack why online fundraising is the most convenient resource mobilization option for you by registering at https://bit.ly/Ceffective.",
        },
        {
          icon: require("@/assets/images/ic-blogger-blog.png"),
          image: require("@/assets/images/article-3.jpg"),
          title: "M-Changa",
          subText: "29 subscribers",
          text1: "M-CHANGA: FUNDRAISING SIMPLE: FAST: SECURE.",
          text2: "",
        },
      ],
      stepsSlide: [
        {
          src: require("@/assets/images/screen-1.jpg"),
        },
        {
          src: require("@/assets/images/screen-2.jpg"),
        },
        {
          src: require("@/assets/images/screen-3.jpg"),
        },
      ],
      settings: {
        itemsToShow: 1,
        snapAlign: "center",
        autoplay: 2000,
      },
      breakpoints: {
        700: {
          itemsToShow: 2,
          snapAlign: "center",
          autoplay: 3000,
        },
        1024: {
          itemsToShow: 3,
          snapAlign: "start",
          autoplay: 3000,
        },
      },
    };
  },
};
</script>
<style>
.carousel__prev,
.carousel__next {
  background-color: white;
  color: #666;
  border: 1px solid rgba(0, 0, 0, 0.2);
  cursor: pointer;
}
.carousel__prev:hover,
.carousel__next:hover {
  background-color: #fcc82c;
}
</style>
