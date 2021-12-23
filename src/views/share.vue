<template>
  <div>
    <section
      id="slider"
      class="slider-element inner-page-slider slider-share-fundraiser center"
    >
      <div class="texture-overlay">
        <div class="texture-left"><img src="@/assets/images/zigzag-texture.png" /></div>
        <div class="texture-right"><img src="@/assets/images/zigzag-texture.png" /></div>
      </div>
      <div class="slider-inner vertical-middle md:pt-22 pt-12">
        <div class="container">
          <ol class="breadcrumb justify-content-center">
            <li class="breadcrumb-item"><a href="#">Home</a></li>
            <li class="breadcrumb-item"><a href="#">Fundraisers</a></li>
            <li class="breadcrumb-item active" aria-current="page">
              Mama Eva Medical Apeal
            </li>
          </ol>
          <div class="banner-heading">
            <h1><span>Mama Eva Medical Apeal</span></h1>
          </div>
        </div>
      </div>
    </section>
    <section>
      <div class="content-wrap">
        <div
          class="section nobg nomargin nopadding top-share-fundraiser-section"
        >
          <div class="container">
            <div class="row justify-content-center">
              <div class="col-md-10">
                <div class="share-header-widget">
                  <img
                    src="@/assets/images/share-featured-image.jpg"
                    class="featured-image"
                  />
                  <div class="fundraiser-meta">
                    <div class="meta-status-wrap">
                      <span class="status-item status-1">
                        <img src="@/assets/images/ic-share-feature-1.png" />
                        <span>Treasurer Controlled</span>
                      </span>
                      <span class="status-item status-2">
                        <img src="@/assets/images/ic-share-feature-2.png" />
                        <span>Verified Fundraiser</span>
                      </span>
                      <span class="status-item status-3">
                        <img src="@/assets/images/ic-share-feature-3.png" />
                        <span>Alloha - KES 10,000</span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-12 share-top-action flex justify-center">
                <a href="#" class="button">dONATE</a>
                <a href="#" class="button button-outline">sHARE</a>
              </div>
              <div class="col-md-12">
                <div class="share-fundraiser-progress">
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
                </div>
              </div>
              <div class="col-md-4 col-4">
                <div class="statistic-item center">
                  <div class="counter">
                    $1,906
                  </div>
                  <p>Funds Raised</p>
                </div>
              </div>
              <div class="col-md-4 col-4">
                <div class="statistic-item center">
                  <div class="counter">
                    225
                  </div>
                  <p>Supporters</p>
                </div>
              </div>
              <div class="col-md-4 col-4">
                <div class="statistic-item center">
                  <div class="counter">
                    26
                  </div>
                  <p>Days Left</p>
                </div>
              </div>
            </div>
            <div class="row justify-content-center share-partners-logo">
              <div class="col-md-2 col-4">
                <img src="@/assets/images/uk_logo.png" />
              </div>
              <div class="col-md-2 col-4">
                <img src="@/assets/images/cdf.png" />
              </div>
              <div class="col-md-2 col-4">
                <img src="@/assets/images/uk_logo_copy.png" />
              </div>
            </div>
          </div>
        </div>
        <div class="section nomargin share-description-section">
            <ShareTab />
          <div class="container">
            <div class="donation-payment-method">
              <h3 class="block-title">Select donation method</h3>
              <PaymentTab />
            </div>
          </div>
        </div>
        <div class="section nomargin share-fund-champion">
          <div class="container">
            <div class="heading-block center">
              <h2>Fundraiser Champions</h2>
            </div>
            <div class="table-responsive fund-champion-table">
              <ChampionTable />
            </div>
            <div class="text-center md:flex justify-center">
              <a href="#" class="button">Register as Fundraising Champion</a>
              <a href="#" class="button button-outline">In Kind Donation</a>
            </div>
          </div>
        </div>
      </div>
      <QuestionButtom />
    </section>
    <Footer />
  </div>
</template>
<script>
import QuestionButtom from '../components/QuestionBottom.vue';
import Footer from '../components/Footer/index.vue';
import ChampionTable from '../components/championTable.vue';
import ShareTab from '../components/ShareTab.vue';
import PaymentTab from '../components/PaymentTab.vue';

export default {
  components: {
    QuestionButtom,
    ChampionTable,
    ShareTab,
    PaymentTab,
    Footer,
  },
};
</script>
