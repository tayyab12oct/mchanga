<template>
  <div>
    <Breadcrumbs
      :src="require('@/assets/images/top-banner-resources.jpg')"
      breadcrumb="Resources"
      title="Resources"
    />
    <section id="content">
      <div class="section nobg nomargin">
        <div class="container">
          <div class="heading-block center">
            <h2>
              Everything You Need To Know About M-CHANGA Fundraising Features
              Explained:
            </h2>
          </div>
          <div class="tabs tabs-responsive justified-tabs tabs-resources">
            <ul class="tab-nav">
              <li
                class="cursor-pointer"
                v-on:click="toggleTabs(1)"
                v-bind:class="{
                  'bg-transparent text-gray-100': openTab !== 1,
                  'text-secondary bg-main': openTab === 1,
                }"
              >
                Summary Features
              </li>
              <li
                class="cursor-pointer"
                v-on:click="toggleTabs(2)"
                v-bind:class="{
                  'bg-transparent text-gray-100': openTab !== 2,
                  'text-secondary bg-main': openTab === 2,
                }"
              >
                Verification Features
              </li>
              <li
                class="cursor-pointer"
                v-on:click="toggleTabs(3)"
                v-bind:class="{
                  'bg-transparent text-gray-100': openTab !== 3,
                  'text-secondary bg-main': openTab === 3,
                }"
              >
                Personalization Features
              </li>
              <li
                class="cursor-pointer"
                v-on:click="toggleTabs(4)"
                v-bind:class="{
                  'bg-transparent text-gray-100': openTab !== 4,
                  'text-secondary bg-main': openTab === 4,
                }"
              >
                Sharing and Referrals
              </li>
            </ul>
            <div class="tab-container">
              <div
                class="tab-content clearfix"
                v-bind:class="{
                  hidden: openTab !== 1,
                  block: openTab === 1,
                }"
              >
                <ResourceFeature
                  v-for="n in tab1"
                  :key="n"
                  :num="n.num"
                  :title="n.title"
                  :text="n.text"
                  :text2="n.text2"
                  :link="n.link"
                />
              </div>
              <div
                class="tab-content clearfix"
                v-bind:class="{
                  hidden: openTab !== 2,
                  block: openTab === 2,
                }"
              >
                <ResourceFeature
                  v-for="n in tab2"
                  :key="n"
                  :num="n.num"
                  :title="n.title"
                  :text2="n.text"
                  :text3="n.text2"
                  :link="n.link"
                />
              </div>
              <div
                class="tab-content clearfix"
                v-bind:class="{
                  hidden: openTab !== 3,
                  block: openTab === 3,
                }"
              >
                <ResourceFeature
                  v-for="n in tab3"
                  :key="n"
                  :num="n.num"
                  :title="n.title"
                  :text2="n.text"
                  :link="n.link"
                />
              </div>
              <div
                class="tab-content clearfix"
                v-bind:class="{
                  hidden: openTab !== 4,
                  block: openTab === 4,
                }"
              >
                <ResourceFeature
                  v-for="n in tab4"
                  :key="n"
                  :num="n.num"
                  :title="n.title"
                  :text2="n.text"
                  :link="n.link"
                />
              </div>
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
import ResourceFeature from "../components/resource-feature.vue";
export default {
  components: {
    Breadcrumbs,
    QuestionBottom,
    ResourceFeature,
  },
  data() {
    return {
      openTab: 1,
      tab1: [
        {
          num: "1",
          title: "Online Registration",
          text: "Are you ready to enjoy simple, secure and convenient fundraising with M-CHANGA. Visit www.changa.co.ke/signup to register your fundraiser.",
          text2:
            "Here is a step by step visual guide on online fundraiser registration;",
          link: "https://youtu.be/8DCBwv_8b-Q",
        },
        {
          num: "2",
          title: "Editing your fundraiser Info",
          text2:
            "Do you want to edit your fundraiser name, target amount or expiry date? Here is a step by guide on what and how you can edit some aspects of your fundraiser;",
          link: "https://youtu.be/HkSiDvaIsA4",
        },
        {
          num: "3",
          title: "Downloading your donation statements",
          text2:
            "Did you know that with M-Changa your donation, withdrawal and expense statements are available to you by a simple click? Here is a step by step guide explaining where to download the statements from;",
          link: "https://youtu.be/ZcgMaHdA90s",
        },
      ],
      tab2: [
        {
          num: "1",
          title: "Adding supporting documents",
          text: "Are your documents ready for upload and you aren’t how to? Here is step by step guide on adding your supporting documents;",
          text2:
            "KINDLY NOTE THAT ONLY DOCUMENTS IN PDF FORMAT WILL BE ACCEPTED!",
          link: "https://youtu.be/dw1OCybpPpo",
        },
        {
          num: "2",
          title: "Adding treasurers",
          text: "Treasurers support M-CHANGA’s transparency and accountability features. Find out how you can add a treasurer to your fundraiser here;",
          text2:
            "PS: ONLY USE VALID PHONE NUMBERS WHILE ADDING YOUR sTREASURERS!",
          link: "https://youtu.be/oa7WvuW7I0c",
        },
        {
          num: "3",
          title: "Making a partial withdrawal",
          text: "Are you aware of our new and most wanted feature?! You can now make your partial withdrawals by following our step by step guide here;",
          text2:
            "NB: A PARTIAL WITHDRAWAL ONLY APPLIES TO MOBILE MONEY WITHDRAWALS AND FOR AMOUNTS HIGHER THAN KES 1,000!",
          link: "https://youtu.be/Fg67FV3R2Zo",
        },
        {
          num: "4",
          title: "Adding patrons to your fundraiser",
          text: "Do you have individuals who are ready to champion for the success of your fundraiser/cause? With M-CHANGA, you have an opportunity to add up to 5 patrons to your fundraiser. This is how you can add them;",
          link: "https://youtu.be/adq-0y5e0Q4",
        },
      ],
      tab3: [
        {
          num: "1",
          title: "Editing your fundraiser story",
          text: "Because we believe in the power of stories, here is a step by step guide highlighting how and where you can write your fundraising story;",
          link: "https://youtu.be/BcuwxdDLRJM",
        },
        {
          num: "2",
          title: "Adding images to your fundraiser",
          text: "Here is a step by step guide on adding images to your fundraiser;",
          link: "https://youtu.be/4IAhV74uv3Y",
        },
        {
          num: "3",
          title: "Adding a video to your fundraiser",
          text: "Here is a step by step guide on adding images to your fundraiser;",
          link: "https://youtu.be/sqjG3dUd-iQ",
        },
      ],
      tab4: [
        {
          num: "1",
          title: "Updating Donors",
          text: "Would you wish to say thank you to your donors or maybe just send an update to them? With M-Changa, you are provided 250 free SMS’s for this, the cost per SMS after this limit is KES 2 for an account with less than 1,000 donors, KES 1 for an account with 1,001 to 2,500 donors and 70 Cents for an account with 2,500 plus donors. Find out how;",
          link: "https://youtu.be/oXqlAefcA9I",
        },
        {
          num: "2",
          title: "Easy sharing",
          text: "Sharing is always easy with M-CHANGA! Find out how you can access the link directly shareable to Facebook, Twitter and WhatsApp with a single click;",
          link: "https://youtu.be/dxLHuP4EV9M",
        },
        {
          num: "3",
          title: "Refer a friend?",
          text: "Have you experienced the goodness of M-CHANGA and would like to refer to a friend? Get a referral code and enjoy incentives for every successful referral;",
          link: "https://bit.ly/3sA2cj6",
        },
      ],
    };
  },
  methods: {
    toggleTabs: function (tabNumber) {
      this.openTab = tabNumber;
    },
  },
};
</script>
