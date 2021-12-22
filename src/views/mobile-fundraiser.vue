<template>
  <div>
    <Breadcrumbs
      :src="require('@/assets/images/top-banner-online-fundraiser.jpg')"
      breadcrumb="Mobile Fundraisers"
      title="Mobile Fundraisers"
    />
    <section id="content">
      <div class="section nobg nomargin">
        <div class="container">
          <div class="olfundraiser-video-wrapper center">
            <p class="lead-paragraph">
              As Mobile fundraiser is perfect for individuals without regular
              internet access. This type of fundraiser is best suited to Harambe
              type fundraising e.g. medical fees, school fees, weddings &
              funerals.
            </p>
          </div>
          <div class="simple-steps-wrapper">
            <div class="heading-block center">
              <h2>3 Simple Steps</h2>
            </div>
            <div class="row simple-steps-row">
              <div class="col-md-4" v-for="v in steps" :key="v">
                <SimpleStep
                  :step="v.step"
                  :src="v.src"
                  :title="v.title"
                  :text="v.text"
                  :strong1="v.strong1"
                  :strong2="v.strong2"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="section nomargin">
        <div class="container">
          <div class="heading-block center">
            <h2>M-Changa Mobile Fundraiser features</h2>
          </div>
          <div class="toggle">
            <div class="togglet">
              <i class="toggle-closed icon-angle-down"></i>
              <i class="toggle-open icon-angle-right"></i>
              <div class="title-blocks">
                <img src="@/assets/images/ic-mfund-feat-1.png" />
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
                <img src="@/assets/images/ic-mfund-feat-2.png" />
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
                <img src="@/assets/images/ic-mfund-feat-3.png" />
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
                <img src="@/assets/images/ic-mfund-feat-4.png" />
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
                <img src="@/assets/images/ic-mfund-feat-5.png" />
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
                <img src="@/assets/images/ic-mfund-feat-6.png" />
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
                <img src="@/assets/images/ic-mfund-feat-7.png" />
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
                <img src="@/assets/images/ic-mfund-feat-8.png" />
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
      <QuestionBottom />
    </section>
  </div>
</template>
<script>
import Breadcrumbs from "../components/Breadcrumbs.vue";
import QuestionBottom from "../components/QuestionBottom.vue";
import SimpleStep from "../components/SimpleStep.vue";
export default {
  components: {
    Breadcrumbs,
    QuestionBottom,
    SimpleStep,
  },
  data() {
    return {
      steps: [
        {
          step: "1",
          src: require("@/assets/images/ic-mfund-step-1.png"),
          title: "Register",
          text: "To create your fundraiser account and begin raising money for your cause:",
          strong1: "Save *483*57#",
          strong2: "Dial *483*57#",
        },
        {
          step: "2",
          src: require("@/assets/images/ic-mfund-step-2.png"),
          title: "Share",
          text: "To share your fundraiser to your supporters via Facebook, WhatsApp, Twitter or SMS:",
          strong1: "Dial *483*57#",
          strong2: "Select Share My Fundraiser",
        },
        {
          step: "3",
          src: require("@/assets/images/ic-mfund-step-3.png"),
          title: "Manage your fundraiser",
          text: "To add treasurer's, check fundraiser status, view statement, access your fundraiser page, withdraw or end fundraiser simply:",
          strong1: "Dial *483*57#",
          strong2: "Select Manage My Fundraiser",
        },
      ],
    };
  },
};
</script>
