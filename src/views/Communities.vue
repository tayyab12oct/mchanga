<template>
  <div>
    <Breadcrumbs
      :src="require('@/assets/images/top-banner-communities.jpg')"
      breadcrumb="Communities"
      title="Communities"
    />
    <section id="content">
      <div class="section nobg nomargin">
        <div class="container center">
          <div class="heading-block center">
            <h2>What are Communities?</h2>
          </div>
          <p class="lead-paragraph">
            Communities start with someone who has experience managing a
            fundraiser on the M-Changa platform. This person becomes the
            Community Coordinator and their role is to invite and manage
            existing or new M-Changa fundraisers together as a Community.
          </p>
          <div class="row champions-description">
            <div class="col-md-4" v-for="n in cards" :key="n">
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
                      Additional Benefits
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
                    <table class="table table-borderless">
                      <tbody>
                        <tr>
                          <td class="title-cell">Enhanced Visibility</td>
                          <td>
                            The community page will give community fundraisers
                            exposure to donors interested in that particular
                            community and the causes they are raising for.
                          </td>
                        </tr>
                        <tr>
                          <td class="title-cell">Community Reporting</td>
                          <td>
                            All community fundraisers can track the progress of
                            other community fundraisers.
                          </td>
                        </tr>
                        <tr>
                          <td class="title-cell">Communication</td>
                          <td>
                            Community fundraisers can exchange ideas and advice
                            on the best fundraising practices which have worked
                            for them.
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </DisclosurePanel>
                </transition>
              </Disclosure>
            </dl>
            <dl class="space-y-8" v-for="v in faqs" :key="v">
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
                      {{ v.title }}
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
                        <li v-for="n in v.list">
                          {{ n.text }}
                          <a v-if="n.link" href="#">{{ n.link }}</a>
                        </li>
                      </ul>
                      <p>
                        <strong>{{ v.text }}</strong>
                      </p>
                    </div>
                  </DisclosurePanel>
                </transition>
              </Disclosure>
            </dl>
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
import Card from "../components/Card.vue";
import QuestionBottom from "../components/QuestionBottom.vue";
import Footer from "../components/Footer/index.vue";
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/vue";
import { ChevronDownIcon } from "@heroicons/vue/outline";
export default {
  components: {
    Breadcrumbs,
    Card,
    QuestionBottom,
    Footer,
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
    ChevronDownIcon,
  },
  data() {
    return {
      cards: [
        {
          src: require("@/assets/images/ic-communities-1.png"),
          text:
            "The Community Page is a public page providing information about the Community and the individual fundraisers that make up the Community. Donors may choose to donate to individual fundraisers in the Community or to donate to the Community Pot.",
        },
        {
          src: require("@/assets/images/ic-communities-2.png"),
          text:
            "The Community Pot is a mechanism that allows the Community Coordinator to accept funds to support the Community as a whole and distribute the funds to the Fundraisers in the Community based on various Community rules. For example, a Community Fundraiser may decide to re-distribute excess funds raised in one Fundraiser that has met their goals to another Fundraiser that is struggling to meet their goals.",
        },
        {
          src: require("@/assets/images/ic-communities-3.png"),
          text:
            "The Community Pot is a mechanism that allows the Community Coordinator to accept funds to support the Community as a whole and distribute the funds to the Fundraisers in the Community based on various Community rules. For example, a Community Fundraiser may decide to re-distribute excess funds raised in one Fundraiser that has met their goals to another Fundraiser that is struggling to meet their goals.",
        },
      ],
      faqs: [
        {
          title: "How do I sign up",
          text:
            "To start a community please contact support: 020 765 0919, support@changa.co.ke.",
          list: [
            {
              link: "here )",
              text:
                "You have an existing fundraiser (don t worry if not, you can set one up",
            },
            { text: "You have a name for your community." },
            {
              text:
                "You have at least 3 fundraisers that could be part of your community.",
            },
          ],
        },
        {
          title: "How do I join a community",
          text:
            "To join a community please contact support: 020 765 0919, support@changa.co.ke.",
          list: [
            {
              link: "here )",
              text:
                "You have an existing fundraiser (don t worry if not, you can set one up",
            },
            {
              text:
                "You have identified the name of the community you would like to join.",
            },
            { text: "You must be approved by the community coordinator." },
          ],
        },
      ],
    };
  },
};
</script>
