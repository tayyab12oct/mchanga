<template>
  <div>
    <Breadcrumbs
      :src="require('@/assets/images/top-banner-online-fundraiser.jpg')"
      breadcrumb="Online Fundraisers"
      title="Online Fundraisers"
    />
    <section id="content">
      <div class="content-wrap pt-0">
        <div class="section nobg nomargin">
          <div class="container">
            <div class="olfundraiser-video-wrapper center">
              <p class="lead-paragraph">
                The ideal solution for individuals, organisations & businesses
                seeking to create awareness and collect local & international
                donations for their fundraiser.
              </p>
              <div class="video-youtube-wrapper w-full">
                <iframe
                  width="100%"
                  height="609"
                  src="https://www.youtube.com/embed/0EEh7pHpSCU"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
              </div>
              <!-- <div class="video-thumbnail">
								<img src="@/assets/images/olfund-video-thumbnail.jpg">
								<a href="https://www.youtube.com/watch?v=0EEh7pHpSCU" target="_blank"><i class="icon-play-sign"></i></a>
							</div> -->
            </div>
            <div class="simple-steps-wrapper">
              <div class="heading-block center">
                <h2>3 Simple Steps</h2>
              </div>
              <div class="row simple-steps-row">
                <div class="col-md-4">
                  <div class="simple-step-item">
                    <div class="step-number">1</div>
                    <img
                      src="@/assets/images/ic-olfund-step-1.png"
                      class="step-icon mx-auto"
                    />
                    <h3 class="step-title">Register</h3>
                    <ul class="step-list">
                      <li>Fill in the online registration form</li>
                      <li>
                        Make a test mobile payment towards your fundraiser
                        (minimum KES 10)
                      </li>
                      <li>Click the activation link sent to your email</li>
                      <li>Receive your login credentials via SMS</li>
                    </ul>
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="simple-step-item">
                    <div class="step-number">2</div>
                    <img
                      src="@/assets/images/ic-olfund-step-2.png"
                      class="step-icon mx-auto"
                    />
                    <h3 class="step-title">Share</h3>
                    <ul class="step-list">
                      <li>
                        Customise your Sharepage with your story, pictures,
                        videos and targets
                      </li>
                      <li>
                        Share your Sharepage using the link or sharing mobile
                        payment instructions directly
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="simple-step-item">
                    <div class="step-number">3</div>
                    <img
                      src="@/assets/images/ic-olfund-step-3.png"
                      class="step-icon mx-auto"
                    />
                    <h3 class="step-title">Collect</h3>
                    <ul class="step-list">
                      <li>
                        Mobile payments: Accept payments directly via M-Pesa
                        PayBill, Airtel Money and Equitel
                      </li>
                      <li>
                        Online payments: Accept payments Online via Visa,
                        MasterCard, PayPal & SimbaPay
                      </li>
                      <li>
                        All contributions are stored securely and transparently
                        by M-Changa
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="section nomargin">
          <div class="container">
            <div class="heading-block center">
              <h2>M-Changa Online Fundraiser features</h2>
            </div>
            <div class="toggle">
              <div class="togglet">
                <i class="toggle-closed icon-angle-down"></i>
                <i class="toggle-open icon-angle-right"></i>
                <div class="title-blocks">
                  <img src="@/assets/images/ic-olfund-feat-1.png" />
                  <h3>Local and International donation options</h3>
                </div>
              </div>
              <div class="togglec">
                <p>
                  Receive donations via Mpesa, TKash, Equitel, Airtel Money,
                  PayPal & VisaMasterCard.
                </p>
              </div>
            </div>
            <div class="toggle">
              <div class="togglet">
                <i class="toggle-closed icon-angle-down"></i>
                <i class="toggle-open icon-angle-right"></i>
                <div class="title-blocks">
                  <img src="@/assets/images/ic-olfund-feat-2.png" />
                  <h3>Personalization features</h3>
                </div>
              </div>
              <div class="togglec">
                <p>
                  Personalize your fundraiser and keep your donors updated by
                  sharing a Story, Images or videos.
                </p>
              </div>
            </div>
            <div class="toggle">
              <div class="togglet">
                <i class="toggle-closed icon-angle-down"></i>
                <i class="toggle-open icon-angle-right"></i>
                <div class="title-blocks">
                  <img src="@/assets/images/ic-olfund-feat-3.png" />
                  <h3>Easy sharing</h3>
                </div>
              </div>
              <div class="togglec">
                <p>
                  Share your fundraiser to Facebook, Twitter and WhatsApp with a
                  single click.
                </p>
              </div>
            </div>
            <div class="toggle">
              <div class="togglet">
                <i class="toggle-closed icon-angle-down"></i>
                <i class="toggle-open icon-angle-right"></i>
                <div class="title-blocks">
                  <img src="@/assets/images/ic-olfund-feat-4.png" />
                  <h3>Donation statements</h3>
                </div>
              </div>
              <div class="togglec">
                <p>
                  Access all your donation, withdrawal and expense statements in
                  one place.
                </p>
              </div>
            </div>
            <div class="toggle">
              <div class="togglet">
                <i class="toggle-closed icon-angle-down"></i>
                <i class="toggle-open icon-angle-right"></i>
                <div class="title-blocks">
                  <img src="@/assets/images/ic-olfund-feat-5.png" />
                  <h3>SMS Blast</h3>
                </div>
              </div>
              <div class="togglec">
                <p>Reach out to your existing donors with 250 free SMS.</p>
              </div>
            </div>
            <div class="toggle">
              <div class="togglet">
                <i class="toggle-closed icon-angle-down"></i>
                <i class="toggle-open icon-angle-right"></i>
                <div class="title-blocks">
                  <img src="@/assets/images/ic-olfund-feat-6.png" />
                  <h3>Partial withdrawal</h3>
                </div>
              </div>
              <div class="togglec">
                <p>
                  Make partial withdrawals from your fundraiser to meet urgent
                  news while ensuring your remaining donations are secure.
                </p>
              </div>
            </div>
            <div class="toggle">
              <div class="togglet">
                <i class="toggle-closed icon-angle-down"></i>
                <i class="toggle-open icon-angle-right"></i>
                <div class="title-blocks">
                  <img src="@/assets/images/ic-olfund-feat-7.png" />
                  <h3>Easy Withdrawal</h3>
                </div>
              </div>
              <div class="togglec">
                <p>
                  Withdraw your funds at any time to your mobile money number.
                </p>
              </div>
            </div>
            <div class="toggle">
              <div class="togglet">
                <i class="toggle-closed icon-angle-down"></i>
                <i class="toggle-open icon-angle-right"></i>
                <div class="title-blocks">
                  <img src="@/assets/images/ic-olfund-feat-8.png" />
                  <h3>Fundraiser Patrons</h3>
                </div>
              </div>
              <div class="togglec">
                <p>
                  Do you have individuals willing to be ambassadors for your
                  fundraising cause? Add up to 5 patrons to your fundraiser and
                  increase your fundraiser success.
                </p>
              </div>
            </div>
            <div class="toggle">
              <div class="togglet">
                <i class="toggle-closed icon-angle-down"></i>
                <i class="toggle-open icon-angle-right"></i>
                <div class="title-blocks">
                  <img src="@/assets/images/ic-olfund-feat-9.png" />
                  <h3>Security</h3>
                </div>
              </div>
              <div class="togglec">
                <p>
                  Ensure security of your donations through verification with
                  documents and treasurers.
                </p>
              </div>
            </div>
            <div class="toggle">
              <div class="togglet">
                <i class="toggle-closed icon-angle-down"></i>
                <i class="toggle-open icon-angle-right"></i>
                <div class="title-blocks">
                  <img src="@/assets/images/ic-olfund-feat-10.png" />
                  <h3>Local Customer support</h3>
                </div>
              </div>
              <div class="togglec">
                <p>
                  Our support team is available to support you 6 days a week
                  through email, phone & social media.
                </p>
              </div>
            </div>
            <div class="toggle">
              <div class="togglet">
                <i class="toggle-closed icon-angle-down"></i>
                <i class="toggle-open icon-angle-right"></i>
                <div class="title-blocks">
                  <img src="@/assets/images/ic-olfund-feat-11.png" />
                  <h3>Multiple people</h3>
                </div>
              </div>
              <div class="togglec">
                <p>
                  There is no limit to the number of people that can donate to
                  your fundraiser.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="section nobg nomargin" style="padding-bottom: 0">
          <div class="container">
            <div class="online-fundraiser-disclaimer">
              <div class="toggle has-no-icon">
                <div class="togglet">
                  <i class="toggle-closed icon-angle-down"></i>
                  <i class="toggle-open icon-angle-right"></i>
                  <div class="title-blocks">
                    <h3>Using the Web Portal</h3>
                  </div>
                </div>
                <div class="togglec">
                  <div class="table-responsive">
                    <table class="table table-borderless">
                      <tbody>
                        <tr>
                          <td class="title-cell">View My Fundraiser Page</td>
                          <td>
                            Find the link to your fundraiser page at the top of
                            your fundraiser page.
                          </td>
                        </tr>
                        <tr>
                          <td class="title-cell">Summary</td>
                          <td>
                            Track and download your Payments, Expenses &
                            Withdrawals.
                          </td>
                        </tr>
                        <tr>
                          <td class="title-cell">My Fundraiser Details</td>
                          <td>
                            Set your Fundraiser Name, Target, Expiry Date &
                            Appeal Message.
                          </td>
                        </tr>
                        <tr>
                          <td class="title-cell">Share My Story</td>
                          <td>
                            Write an engaging story that will show up on your
                            public Sharepage.
                          </td>
                        </tr>
                        <tr>
                          <td class="title-cell">Share My Video</td>
                          <td>
                            Embed a video from Youtube or Vimeo - Click on the
                            share tab and then the Embed tab. You will see the
                            HTML code for embedding the video. Copy it and paste
                            the code.
                          </td>
                        </tr>
                        <tr>
                          <td class="title-cell">Manage Pictures</td>
                          <td>
                            Upload images from your computer that will show on
                            your public Sharepage.
                          </td>
                        </tr>
                        <tr>
                          <td class="title-cell">Engage My Supporters</td>
                          <td>
                            Get new supporters & contact existing supporters via
                            SMS, Email, Phone & Social Media.
                          </td>
                        </tr>
                        <tr>
                          <td class="title-cell">Manage Treasurers</td>
                          <td>
                            Add up to 3 treasurers to make your fundraiser more
                            secure.
                          </td>
                        </tr>
                        <tr>
                          <td class="title-cell">Withdraw</td>
                          <td>
                            Choose whether to withdraw funds and either continue
                            or end your fundraiser, M-Changa service fee is
                            4.25% of the amount you are withdrawing. In
                            addition, normal Safaricom, Airtel, Equitel charges
                            apply.
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
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
