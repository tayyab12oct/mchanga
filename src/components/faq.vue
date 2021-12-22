<template>
  <dl class="space-y-8">
    <Disclosure
      as="div"
      class="border-b border-gray-200"
      v-slot="{ open }"
      v-for="v in faqs"
      :key="v"
    >
      <dt class="pb-4">
        <DisclosureButton
          class="text-left w-full flex justify-between items-center text-gray-400"
        >
          <div class="flex items-center space-x-4 md:space-x-9">
            <img :src="v.src" class="w-9 md:w-11" />
            <h3 class="text-secondary text-lg md:text-2.5xl leading-6 mb-0">
              {{ v.title }}
            </h3>
          </div>
          <span class="h-7 flex items-center">
            <ChevronDownIcon
              :class="[
                open ? '-rotate-90 text-main' : 'rotate-0 text-secondary',
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
          class="md:pr-12 md:pl-19 pl-12 ml-1 md:ml-0 transform transition-all"
        >
          <p class="">
            {{ v.desc }}
          </p>
        </DisclosurePanel>
      </transition>
    </Disclosure>
  </dl>
</template>
<script>
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/vue";
import { ChevronDownIcon } from "@heroicons/vue/outline";

export default {
  components: {
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
    ChevronDownIcon,
  },
  porps: {
    faqs: {
      type: Array,
    },
  },
  data() {
    return {
      faqs: [
        {
          src: require("@/assets/images/ic-olfund-feat-1.png"),
          title: "Local and International donation options",
          desc:
            "Receive donations via Mpesa, TKash, Equitel, Airtel Money, PayPal & VisaMasterCard.",
        },
        {
          src: require("@/assets/images/ic-olfund-feat-2.png"),
          title: "Personalization features",
          desc:
            "Personalize your fundraiser and keep your donors updated by sharing a Story, Images or videos.",
        },
        {
          src: require("@/assets/images/ic-olfund-feat-3.png"),
          title: "Easy sharing",
          desc:
            "Share your fundraiser to Facebook, Twitter and WhatsApp with a single click.",
        },
        {
          src: require("@/assets/images/ic-olfund-feat-4.png"),
          title: "Donation statements",
          desc:
            "Access all your donation, withdrawal and expense statements in one place.",
        },
        {
          src: require("@/assets/images/ic-olfund-feat-5.png"),
          title: "SMS Blast",
          desc: "Reach out to your existing donors with 250 free SMS.",
        },
        {
          src: require("@/assets/images/ic-olfund-feat-6.png"),
          title: "Partial withdrawal",
          desc:
            "Make partial withdrawals from your fundraiser to meet urgent news while ensuring your remaining donations are secure.",
        },
        {
          src: require("@/assets/images/ic-olfund-feat-7.png"),
          title: "Easy Withdrawal",
          desc: "Withdraw your funds at any time to your mobile money number.",
        },
        {
          src: require("@/assets/images/ic-olfund-feat-8.png"),
          title: "Fundraiser Patrons",
          desc:
            "Do you have individuals willing to be ambassadors for your fundraising cause? Add up to 5 patrons to your fundraiser and increase your fundraiser success.",
        },
        {
          src: require("@/assets/images/ic-olfund-feat-9.png"),
          title: "Security",
          desc:
            "Ensure security of your donations through verification with documents and treasurers.",
        },
        {
          src: require("@/assets/images/ic-olfund-feat-10.png"),
          title: "Local Customer support",
          desc:
            "Our support team is available to support you 6 days a week through email, phone & social media.",
        },
        {
          src: require("@/assets/images/ic-olfund-feat-11.png"),
          title: "Multiple people",
          desc:
            "There is no limit to the number of people that can donate to your fundraiser.",
        },
      ],
    };
  },
};
</script>
<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
