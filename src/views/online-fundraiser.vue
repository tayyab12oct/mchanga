<template>
  <div>
    <Breadcrumbs
      :src="require('@/assets/images/top-banner-online-fundraiser.jpg')"
      breadcrumb="Online Fundraisers"
      title="Online Fundraisers"
    />
    <section id="content">
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
                allow="accelerometer; autoplay;
                clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
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
                      Customise your Sharepage with your story, pictures, videos
                      and targets
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
                      All contributions are stored securely and transparently by
                      M-Changa
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
          <Faq />
        </div>
      </div>
      <div class="section nobg nomargin" style="padding-bottom: 0">
        <div class="container">
          <dl>
            <Disclosure
              as="div"
              class="border-b border-gray-200"
              v-slot="{ open }"
            >
              <dt class="text-lg pb-3">
                <DisclosureButton
                  class="text-left w-full flex justify-between items-center text-gray-400"
                >
                  <h3 class="text-secondary mb-0">
                    Using the Web Portal
                  </h3>
                  <span class="ml-6 h-7 flex items-center">
                    <ChevronDownIcon
                      :class="[
                        open
                          ? '-rotate-90 text-main'
                          : 'rotate-0 text-secondary',
                        'h-5 md:h-6 w-5 md:w-6 transform',
                      ]"
                      aria-hidden="true"
                    />
                  </span>
                </DisclosureButton>
              </dt>
              <transition name="fade">
                <DisclosurePanel
                  as="dd"
                  class="md:pr-12 transform transition-all"
                >
                  <div class="togglec">
                    <div class="table-responsive">
                      <table class="table table-borderless">
                        <tbody>
                          <tr>
                            <td class="title-cell">
                              View My Fundraiser Page
                            </td>
                            <td>
                              Find the link to your fundraiser page at the top
                              of your fundraiser page.
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
                            <td class="title-cell">
                              My Fundraiser Details
                            </td>
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
                              HTML code for embedding the video. Copy it and
                              paste the code.
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
                              Get new supporters & contact existing supporters
                              via SMS, Email, Phone & Social Media.
                            </td>
                          </tr>
                          <tr>
                            <td class="title-cell">Manage Treasurers</td>
                            <td>
                              Add up to 3 treasurers to make your fundraiser
                              more secure.
                            </td>
                          </tr>
                          <tr>
                            <td class="title-cell">Withdraw</td>
                            <td>
                              Choose whether to withdraw funds and either
                              continue or end your fundraiser, M-Changa service
                              fee is 4.25% of the amount you are withdrawing. In
                              addition, normal Safaricom, Airtel, Equitel
                              charges apply.
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </DisclosurePanel>
              </transition>
            </Disclosure>
          </dl>
        </div>
      </div>
      <QuestionBottom />
    </section>
    <Footer />
  </div>
</template>
<script>
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue';
import { ChevronDownIcon } from '@heroicons/vue/outline';
import Breadcrumbs from '../components/Breadcrumbs.vue';
import QuestionBottom from '../components/QuestionBottom.vue';
import Faq from '../components/faq.vue';
import Footer from '../components/Footer/index.vue';

export default {
  components: {
    Breadcrumbs,
    QuestionBottom,
    Faq,
    Footer,
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
    ChevronDownIcon,
  },
  data() {
    return {};
  },
};
</script>
