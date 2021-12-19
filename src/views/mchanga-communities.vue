<template>
  <div>
    <Breadcrumbs
      :src="require('@/assets/images/top-banner-mcommunities.jpg')"
      breadcrumb="M-CHANGA Communities"
      title="M-CHANGA Communities"
    />
    <section id="content">
      <div class="content-wrap pt-0">
        <div class="section nobg nomargin">
          <div class="container">
            <div class="row mchanga-communities-wrapper">
              <div class="col-md-4" v-for="n in 9" :key="n">
                <div class="mchanga-community-item">
                  <img
                    src="@/assets/images/yetu-logo-300x300.png"
                    class="community-logo mx-auto"
                  />
                  <h3 class="community-title">Yetu</h3>
                  <div class="community-statistic">
                    <div class="statistic-item">
                      <div class="counter">
                        67
                        <!-- <span
                          data-from="0"
                          data-to="67"
                          data-refresh-interval="50"
                          data-speed="2000"
                          data-comma="true"
                        ></span> -->
                      </div>
                      <p>Fundraisers</p>
                    </div>
                    <div class="statistic-item">
                      <div class="counter">
                        $72,150
                        <!-- <span
                          data-from="10"
                          data-to="72150"
                          data-refresh-interval="50"
                          data-speed="2000"
                          data-comma="true"
                        ></span> -->
                      </div>
                      <p>Raised</p>
                    </div>
                  </div>
                  <a href="#" class="button button-outline"
                    >Explore Community</a
                  >
                </div>
              </div>
              <div class="col-md-12 mchanga-communities-footer">
                <ul class="pagination">
                  <li class="page-item disabled">
                    <a class="page-link" href="#">&laquo;</a>
                  </li>
                  <li class="page-item active">
                    <a class="page-link" href="#"
                      >1 <span class="sr-only">(current)</span></a
                    >
                  </li>
                  <li class="page-item"><a class="page-link" href="#">2</a></li>
                  <li class="page-item"><a class="page-link" href="#">3</a></li>
                  <li class="page-item"><a class="page-link" href="#">4</a></li>
                  <li class="page-item"><a class="page-link" href="#">5</a></li>
                  <li class="page-item">
                    <a class="page-link" href="#">&raquo;</a>
                  </li>
                </ul>
                <a href="#">Learn More About Communities &raquo;</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="section nobg nomargin home-faq-sec pt-0">
        <div class="container">
          <div class="heading-block center">
            <h2>Have a question? Check out our FAQs page or chat with us</h2>
          </div>
          <div class="row">
            <div class="col-md-4">
              <a href="#" class="button button-icon">
                <img src="@/assets/images/ic-faq-1.png" />
                <span>Start A Fundraiser</span>
              </a>
            </div>
            <div class="col-md-4">
              <a href="#" class="button button-icon">
                <img src="@/assets/images/ic-faq-2.png" />
                <span>Find Out More</span>
              </a>
            </div>
            <div class="col-md-4">
              <a href="#" class="button button-icon">
                <img src="@/assets/images/ic-faq-3.png" />
                <span>Request a call back</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Breadcrumbs from "../components/Breadcrumbs.vue";
export default {
  components: {
    Breadcrumbs,
  },
};
</script>
