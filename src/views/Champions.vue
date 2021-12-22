<template>
  <div>
    <Breadcrumbs
      :src="require('@/assets/images/top-banner-champion.jpg')"
      breadcrumb="Champions"
      title="Champions"
    />
    <section id="content">
      <div class="">
        <div class="section nobg nomargin">
          <div class="container">
            <div class="center">
              <p class="lead-paragraph">
                Want to involve your fundraiser campaign champions while
                diversifying your group campaign? Easily encourage individual
                participation, track progress and have all your donations in one
                pot with the M-Changa Champions feature.
              </p>
            </div>
            <div class="row champions-description">
              <div class="col-md-6" v-for="n in cards" :key="n">
                <Card :src="n.src" :text="n.text" />
              </div>
            </div>
          </div>
        </div>
        <div class="section nobg nomargin nopadding">
          <div class="container">
            <div class="champions-faq">
              <dl class="space-y-8">
                <Disclosure
                  as="div"
                  class="border-b border-gray-200"
                  v-slot="{ open }"
                >
                  <dt class="pb-3">
                    <DisclosureButton
                      class="text-left w-full flex justify-between items-center text-gray-400"
                    >
                      <h3
                        class="text-secondary text-lg md:text-2.5xl leading-6 mb-0"
                      >
                        Why have Champions?
                      </h3>
                      <span class="h-7 flex items-center">
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
                        <table class="table table-borderless">
                          <tbody>
                            <tr>
                              <td class="title-cell">Enhanced visibility</td>
                              <td>
                                Individual champions rally for your fundraiser
                                ensuring it reaches their individual networks.
                                More eyes means more potential donations.
                              </td>
                            </tr>
                            <tr>
                              <td class="title-cell">Easy Tracking</td>
                              <td>
                                For group/ organization campaigns, easily track
                                progress by specific groups/ individuals.
                              </td>
                            </tr>
                            <tr>
                              <td class="title-cell">Central Reporting</td>
                              <td>
                                Both champions and main fundraisers can track
                                progress of the main fundraiser page and
                                individual champion pages.
                              </td>
                            </tr>
                            <tr>
                              <td class="title-cell">Central Donation</td>
                              <td>
                                All donations made to individual champion
                                fundraisers are channelled into the main
                                fundraiser account. This helps avoid any
                                instances of unaccountability that may arise.
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </DisclosurePanel>
                  </transition>
                </Disclosure>
              </dl>
              <dl class="space-y-8">
                <Disclosure
                  as="div"
                  class="border-b border-gray-200"
                  v-slot="{ open }"
                >
                  <dt class="pb-3">
                    <DisclosureButton
                      class="text-left w-full flex justify-between items-center text-gray-400"
                    >
                      <h3
                        class="text-secondary text-lg md:text-2.5xl leading-6 mb-0"
                      >
                        How do I enable the champions feature?
                      </h3>
                      <span class="h-7 flex items-center">
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
                        <p>
                          Activating the champion feature is simple! All you
                          have to do is ensure you have an existing fundraiser (
                          don’t worry if not, you can set up one here). Once
                          your fundraiser is set up, reach our customer care
                          support through 020 765 0919 or support@changa.co.ke
                          to request activation!
                        </p>
                      </div>
                    </DisclosurePanel>
                  </transition>
                </Disclosure>
              </dl>
              <dl class="space-y-8">
                <Disclosure
                  as="div"
                  class="border-b border-gray-200"
                  v-slot="{ open }"
                >
                  <dt class="pb-3">
                    <DisclosureButton
                      class="text-left w-full flex justify-between items-center text-gray-400"
                    >
                      <h3
                        class="text-secondary text-lg md:text-2.5xl leading-6 mb-0"
                      >
                        How do I sign up as a Champion?
                      </h3>
                      <span class="h-7 flex items-center">
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
                        <p><strong>Requirements:</strong></p>
                        <ul class="fancy-list">
                          <li>
                            Have made a donation to the fundraiser you wish to
                            champion for.
                          </li>
                          <li>
                            Have access to the phone number used to donate.
                          </li>
                          <li>Have a valid email address.</li>
                        </ul>
                        <p>
                          <strong
                            >Want to activate your champion feature or are
                            experiencing a challenge while signing up, please
                            contact support via 020 765 0919.</strong
                          >
                        </p>
                      </div>
                    </DisclosurePanel>
                  </transition>
                </Disclosure>
              </dl>
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
import Card from "../components/Card.vue";
import QuestionBottom from "../components/QuestionBottom.vue";
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/vue";
import { ChevronDownIcon } from "@heroicons/vue/outline";

export default {
  components: {
    Breadcrumbs,
    Card,
    QuestionBottom,
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
    ChevronDownIcon,
  },
  data() {
    return {
      cards: [
        {
          src: require("@/assets/images/ic-champion-1.png"),
          text:
            "The Community Page is a public page providing information about the Community and the individual fundraisers that make up the Community. Donors may choose to donate to individual fundraisers in the Community or to donate to the Community Pot.",
        },
        {
          src: require("@/assets/images/ic-champion-2.png"),
          text:
            "The Community Pot is a mechanism that allows the Community Coordinator to accept funds to support the Community as a whole and distribute the funds to the Fundraisers in the Community based on various Community rules. For example, a Community Fundraiser may decide to re-distribute excess funds raised in one Fundraiser that has met their goals to another Fundraiser that is struggling to meet their goals.",
        },
      ],
    };
  },
};
</script>
