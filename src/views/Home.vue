<template>
  <div>
    <section
      id="slider"
      class="slider-element home-slider"
      style="
        background: url('images/pexels-nappy-935985.jpg');
        background-size: cover;
      "
    >
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
      <div class="slider-inner vertical-middle center">
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
          <div class="home-banner-statistic">
            <div class="row">
              <div class="col-md-4">
                <div class="banner-statistic-item">
                  <img
                    src="@/assets/images/ic-fundraiser-started.png"
                    class="statistic-icon"
                  />
                  <div class="statistic-text">
                    <div class="counter">
                      <span
                        data-from="10"
                        data-to="47851"
                        data-refresh-interval="50"
                        data-speed="2000"
                        data-comma="true"
                      ></span>
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
                      <span
                        data-from="10"
                        data-to="92568"
                        data-refresh-interval="50"
                        data-speed="2000"
                        data-comma="true"
                      ></span>
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
                      <span
                        data-from="0"
                        data-to="89"
                        data-refresh-interval="50"
                        data-speed="2000"
                      ></span
                      >%
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
      <div>
        <div class="section nobg nopadding notopmargin home-why-sec">
          <div class="container">
            <div class="heading-block center">
              <h2>Why M-Changa</h2>
            </div>
            <div class="row">
              <div class="col-md-3 col-6">
                <div class="home-why-item">
                  <img class="mx-auto" src="@/assets/images/ic-why-1.png" />
                  <h4>Convenient set up and management process</h4>
                </div>
              </div>
              <div class="col-md-3 col-6">
                <div class="home-why-item">
                  <img class="mx-auto" src="@/assets/images/ic-why-2.png" />
                  <h4>Receive donations via mobile & electronic money</h4>
                </div>
              </div>
              <div class="col-md-3 col-6">
                <div class="home-why-item">
                  <img class="mx-auto" src="@/assets/images/ic-why-3.png" />
                  <h4>Easy sharing with a single click</h4>
                </div>
              </div>
              <div class="col-md-3 col-6">
                <div class="home-why-item">
                  <img class="mx-auto" src="@/assets/images/ic-why-4.png" />
                  <h4>Access to daily auto- reports</h4>
                </div>
              </div>
              <div class="col-md-3 col-6">
                <div class="home-why-item">
                  <img class="mx-auto" src="@/assets/images/ic-why-5.png" />
                  <h4>Security of donations</h4>
                </div>
              </div>
              <div class="col-md-3 col-6">
                <div class="home-why-item">
                  <img class="mx-auto" src="@/assets/images/ic-why-6.png" />
                  <h4>Upon verification, withdraw donations without hassle</h4>
                </div>
              </div>
              <div class="col-md-3 col-6">
                <div class="home-why-item">
                  <img class="mx-auto" src="@/assets/images/ic-why-7.png" />
                  <h4>Get expert customer support</h4>
                </div>
              </div>
              <div class="col-md-3 col-6">
                <div class="home-why-item">
                  <img class="mx-auto" src="@/assets/images/ic-why-8.png" />
                  <h4>International donation options</h4>
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
                      <div
                        class="owl-carousel carousel-widget"
                        data-margin="0"
                        data-items="1"
                        data-speed="450"
                        data-autoplay="4000"
                        data-loop="true"
                        data-pagi="false"
                        data-nav="false"
                      >
                        <img
                          src="@/assets/images/screen-1.jpg"
                          alt="Slider 1"
                        />
                        <img
                          src="@/assets/images/screen-2.jpg"
                          alt="Slider 2"
                        />
                        <img
                          src="@/assets/images/screen-3.jpg"
                          alt="Slider 3"
                        />
                      </div>
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
            <div
              class="owl-carousel image-carousel carousel-widget"
              data-margin="30"
              data-nav="true"
              data-loop="true"
              data-autoplay="6000"
              data-pagi="false"
              data-items-xs="1"
              data-items-sm="1"
              data-items-md="2"
              data-items-lg="3"
              data-items-xl="3"
            >
              <div class="trending-item-wrapper">
                <div class="trending-image">
                  <img src="@/assets/images/fundraiser-1.jpg" />
                </div>
                <div class="trending-card">
                  <div class="trending-card-inner">
                    <h3>Mama Eva Medical Fundraiser! Let’s do it for her</h3>
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
              <div class="trending-item-wrapper">
                <div class="trending-image">
                  <img src="@/assets/images/fundraiser-1.jpg" />
                </div>
                <div class="trending-card">
                  <div class="trending-card-inner">
                    <h3>Mama Eva Medical Fundraiser! Let’s do it for her</h3>
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
              <div class="trending-item-wrapper">
                <div class="trending-image">
                  <img src="@/assets/images/fundraiser-1.jpg" />
                </div>
                <div class="trending-card">
                  <div class="trending-card-inner">
                    <h3>Mama Eva Medical Fundraiser! Let’s do it for her</h3>
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
              <div class="trending-item-wrapper">
                <div class="trending-image">
                  <img src="@/assets/images/fundraiser-1.jpg" />
                </div>
                <div class="trending-card">
                  <div class="trending-card-inner">
                    <h3>Mama Eva Medical Fundraiser! Let’s do it for her</h3>
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
              <div class="trending-item-wrapper">
                <div class="trending-image">
                  <img src="@/assets/images/fundraiser-1.jpg" />
                </div>
                <div class="trending-card">
                  <div class="trending-card-inner">
                    <h3>Mama Eva Medical Fundraiser! Let’s do it for her</h3>
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
              <div class="trending-item-wrapper">
                <div class="trending-image">
                  <img src="@/assets/images/fundraiser-1.jpg" />
                </div>
                <div class="trending-card">
                  <div class="trending-card-inner">
                    <h3>Mama Eva Medical Fundraiser! Let’s do it for her</h3>
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
            </div>
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
              <div class="col-md-4">
                <div class="article-item">
                  <div class="socmed-icon flex items-center">
                    <img
                      class="mx-auto"
                      src="@/assets/images/ic-twitter-blog.png"
                    />
                  </div>
                  <img
                    src="@/assets/images/article-1.jpg"
                    class="featured-image"
                  />
                  <div class="article-title">
                    <img
                      src="@/assets/images/favicon.png"
                      class="authors-image"
                    />
                    <div class="author-text">
                      <h3>M-Changa Fundraising</h3>
                      <p>@m_changa</p>
                    </div>
                  </div>
                  <div class="article-excerpt">
                    <p>
                      Dear customer, in line with our commitment to offer you
                      the best service while keeping safe, we would like to
                      inform you that moving forward ALL walk-in service will be
                      on Appointment Only.
                    </p>
                    <p>
                      To book an appointment, kindly reach us on 020 765 0919.
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-md-4">
                <div class="article-item">
                  <div class="socmed-icon flex items-center">
                    <img
                      class="mx-auto"
                      src="@/assets/images/ic-facebook-blog.png"
                    />
                  </div>
                  <img
                    src="@/assets/images/article-2.jpg"
                    class="featured-image"
                  />
                  <div class="article-title">
                    <img
                      src="@/assets/images/favicon.png"
                      class="authors-image"
                    />
                    <div class="author-text">
                      <h3>m_changa_kenya</h3>
                      <p></p>
                    </div>
                  </div>
                  <div class="article-excerpt">
                    <p>Virtual management. Diverse donation options.</p>
                    <p>
                      What other convenience is offered by online fundraising?
                      Join us on 29th July as we unpack why online fundraising
                      is the most convenient resource mobilization option for
                      you by registering at https://bit.ly/Ceffective.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <QquestionBotton/>
    </section>
    <Footer/>
  </div>
</template>
<script>
import QquestionBotton from '../components/QuestionBottom.vue';
import Footer from '../components/Footer/index.vue';

export default {
  components: {
    QquestionBotton,
    Footer,
  },
};
</script>
