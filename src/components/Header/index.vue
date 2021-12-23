<template>
  <header class="shadow-md" id="header">
    <div id="header-wrap">
      <div class="container clearfix md:flex md:justify-between">
        <div id="logo" class="w-56 mr-auto">
          <router-link to="/"
            ><img src="@/assets/images/logo-standard.png" alt="M-Changa Logo" />
          </router-link>
        </div>
        <div class="header-login">
          <router-link to="/register" class="button">Login</router-link>
        </div>
        <nav
          id="primary-menu"
          class="d-none d-md-flex md:items-center justify-end w-full"
        >
          <ul class="flex items-center md:py-2">
            <li class="d-none d-md-flex">
              <router-link
                class="py-2 rounded-full hover:text-black"
                to="/personal-detail"
              >
                Start a Fundraiser
              </router-link>
            </li>
            <li class="d-none d-md-flex">
              <router-link class="py-2 rounded-full hover:text-black" to="/blog"
                ><div>Blog</div></router-link
              >
            </li>
            <li class="d-none d-md-flex">
              <router-link
                class="py-2 rounded-full hover:text-black"
                to="/resources"
                ><div>Resources</div></router-link
              >
            </li>
            <li class="other-menu-items d-none d-md-flex">
              <Popover class="relative" v-slot="{ open }">
                <PopoverButton class="focus:outline-none mt-2">
                  <img
                    v-if="open === false"
                    src="@/assets/images/ic-menu-hamburger.png"
                  />
                  <img v-else src="@/assets/images/ic-menu-close.png" />
                </PopoverButton>

                <transition
                  enter-active-class="transition ease-out duration-200"
                  enter-from-class="opacity-0 translate-y-1"
                  enter-to-class="opacity-100 translate-y-0"
                  leave-active-class="transition ease-in duration-150"
                  leave-from-class="opacity-100 translate-y-0"
                  leave-to-class="opacity-0 translate-y-1"
                >
                  <PopoverPanel
                    class="absolute z-10 md:right-0 -right-3 transform mt-3 px-2 md:w-64 w-screen sm:px-0"
                  >
                    <div
                      class="border-t-4 border-main bg-white py-2 shadow-lg overflow-hidden"
                    >
                      <router-link
                        v-for="item in menus"
                        :key="item.name"
                        :to="item.to"
                        class="block px-4 py-2.5 hover:bg-gray-300 transition ease-in-out duration-150 text-black-100"
                      >
                        {{ item.name }}
                      </router-link>
                    </div>
                  </PopoverPanel>
                </transition>
              </Popover>
            </li>
          </ul>
        </nav>
      </div>
      <Popover class="relative d-md-none" v-slot="{ open }">
        <PopoverButton class="focus:outline-none mt-2 absolute -top-10 right-5">
          <img
            v-if="open === false"
            src="@/assets/images/ic-menu-hamburger.png"
          />
          <img v-if="open === true" src="@/assets/images/ic-menu-close.png" />
        </PopoverButton>

        <transition
          enter-active-class="transition ease-out duration-200"
          enter-from-class="opacity-0 translate-y-1"
          enter-to-class="opacity-100 translate-y-0"
          leave-active-class="transition ease-in duration-150"
          leave-from-class="opacity-100 translate-y-0"
          leave-to-class="opacity-0 translate-y-1"
        >
          <PopoverPanel
            class="absolute z-10 md:right-0 bg-white transform mt-3 md:w-64 w-screen px-0"
          >
            <nav
              id="primary-menu"
              class="flex md:items-center justify-end w-full"
            >
              <ul class="flex flex-col items-start w-full pt-3">
                <li class="w-full text-left">
                  <router-link
                    class="py-2 px-3 hover:text-black"
                    to="/personal-detail"
                  >
                    <div class="px-4">Start a Fundraiser</div>
                  </router-link>
                </li>
                <li class="w-full text-left">
                  <router-link class="py-2 px-3 hover:text-black" to="/blog"
                    ><div class="px-4">Blog</div></router-link
                  >
                </li>
                <li class="w-full text-left">
                  <router-link
                    class="py-2 px-3 hover:text-black"
                    to="/resources"
                    ><div class="px-4">Resources</div></router-link
                  >
                </li>
                <li class="w-full text-left">
                  <Popover class="relative" v-slot="{ open4 }">
                    <PopoverButton
                      class="focus:outline-none mt-2 px-4 more_menu w-full"
                    >
                      <div class="px-4 flex items-center justify-between">
                        <span>More</span>
                        <img src="@/assets/images/dropdown-arrow.png" />
                      </div>
                    </PopoverButton>

                    <transition
                      enter-active-class="transition ease-out duration-200"
                      enter-from-class="opacity-0 translate-y-1"
                      enter-to-class="opacity-100 translate-y-0"
                      leave-active-class="transition ease-in duration-150"
                      leave-from-class="opacity-100 translate-y-0"
                      leave-to-class="opacity-0 translate-y-1"
                    >
                      <PopoverPanel
                        class="absolute z-10 left-0 transform w-screen px-0"
                      >
                        <div
                          class="bg-green-200 px-0 py-2 shadow-lg overflow-hidden"
                        >
                          <router-link
                            v-for="item in menus"
                            :key="item.name"
                            :to="item.to"
                            class="block py-2.5 w-full mx-0 hover:bg-gray-300 transition ease-in-out
                            duration-150 text-black-100"
                          >
                            <span class="px-8">{{ item.name }}</span>
                          </router-link>
                        </div>
                      </PopoverPanel>
                    </transition>
                  </Popover>
                </li>
              </ul>
            </nav>
          </PopoverPanel>
        </transition>
      </Popover>
    </div>
  </header>
</template>
<script>
import { Popover, PopoverButton, PopoverPanel } from "@headlessui/vue";
import { ChevronDownIcon } from "@heroicons/vue/solid";
export default {
  components: {
    Popover,
    PopoverButton,
    PopoverPanel,
    ChevronDownIcon,
  },
  data() {
    return {
      menus: [
        {
          name: "About Us",
          to: "/",
        },
        {
          name: "Mobile Fundraising",
          to: "/medical-communities",
        },
        {
          name: "Online Fundraising",
          to: "/online-fundraiser",
        },
        {
          name: "Champion",
          to: "/champions",
        },
        {
          name: "Communities",
          to: "/communities",
        },
        {
          name: "M-Changa Communities",
          to: "/mchanga-communities",
        },
        {
          name: "Questions",
          to: "/faq",
        },
      ],
    };
  },
};
</script>
<style>
#header {
  position: sticky !important;
  top: 0;
  z-index: 100;
}
</style>
