<template>
  <TransitionRoot as="template" :show="sidebarOpen">
    <Dialog as="div" class="fixed inset-0 flex z-40 md:hidden">
      <TransitionChild
        as="template"
        enter="transition-opacity ease-linear duration-300"
        enter-from="opacity-0"
        enter-to="opacity-100"
        leave="transition-opacity ease-linear duration-300"
        leave-from="opacity-100"
        leave-to="opacity-0"
      >
        <DialogOverlay class="fixed inset-0" />
      </TransitionChild>
      <TransitionChild
        as="template"
        enter="transition ease-in-out duration-300 transform"
        enter-from="-translate-x-full"
        enter-to="translate-x-0"
        leave="transition ease-in-out duration-300 transform"
        leave-from="translate-x-0"
        leave-to="-translate-x-full"
      >
        <div class="relative flex flex-col pb-4 bg-gray-800">
          <TransitionChild
            as="template"
            enter="ease-in-out duration-300"
            enter-from="opacity-0"
            enter-to="opacity-100"
            leave="ease-in-out duration-300"
            leave-from="opacity-100"
            leave-to="opacity-0"
          >
            <div class="absolute top-0 right-0 pt-2"></div>
          </TransitionChild>
          <div
            class="flex items-center justify-between h-14 flex-shrink-0 px-3 bg-gray-900"
          >
            <img class="h-4 w-auto" src="aircontrol-logo.svg" alt="AirControl" />
            <button
              class="p-2 rounded-full hover:bg-gray-200 text-gray-500 hover:text-blue-100 focus:outline-none"
              @click="close"
            >
              <span class="sr-only">Open sidebar</span>
              <ChevronDoubleLeftIcon class="h-4 w-4" aria-hidden="true" />
            </button>
          </div>
          <div class="mt-5 flex-1 h-0 overflow-y-auto">
            <nav class="flex-1 py-4 bg-gray-800">
              <template v-for="item in navigation" :key="item.name">
                <div v-if="!item.children">
                  <a
                    :href="item.href"
                    :class="[
                      item.current
                        ? 'bg-black-100 text-white'
                        : 'text-gray-100 hover:bg-black-100 hover:text-white',
                      'group flex items-center w-full px-3 py-2 text-xs cursor-pointer font-medium transition-all',
                    ]"
                  >
                    <component
                      :is="item.icon"
                      :class="[
                        item.current
                          ? 'text-blue-100'
                          : 'text-gray-100 group-hover:text-blue-100',
                        'h-4 w-4',
                      ]"
                      aria-hidden="true"
                    />
                    <span class="w-48 pl-2 text-left flex items-center">
                      {{ item.name }}
                      <component
                        :is="item.iconR"
                        :class="[
                          item.current
                            ? 'text-gray-100'
                            : 'text-gray-100 group-hover:text-gray-100',
                          'ml-auto h-4',
                        ]"
                        aria-hidden="true"
                      />
                    </span>
                  </a>
                  <p
                    v-if="item.title"
                    class="uppercase text-left w-full text-gray-300 text-2xs tracking-widest font-bold pt-2 pb-1.5 px-3"
                  >
                    {{ item.title }}
                  </p>
                </div>
                <Disclosure as="div" v-else class="space-y-1">
                  <DisclosureButton
                    :class="[
                      item.current
                        ? 'bg-black-100 text-white'
                        : 'text-gray-100 hover:bg-black-100 hover:text-white',
                      'group flex items-center w-full px-3 py-2 text-xs cursor-pointer font-medium transition-all',
                    ]"
                  >
                    <component
                      :is="item.icon"
                      :class="[
                        item.current
                          ? 'text-blue-100'
                          : 'text-gray-100 group-hover:text-blue-100',
                        'h-4 w-4',
                      ]"
                      aria-hidden="true"
                    />
                    <span class="w-48 pl-2 text-left flex items-center">
                      {{ item.name }}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        :class="[
                          item.current
                            ? 'text-gray-100'
                            : 'text-gray-100 group-hover:text-gray-100',
                          'h-3.5 w-3.5 mr-0.5 xd bd oo ml-auto',
                        ]"
                        fill="none"
                        viewBox="0 0 20 20"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="m19 9-7 7-7-7"
                        ></path>
                      </svg>
                    </span>
                  </DisclosureButton>
                  <DisclosurePanel class="space-y-1">
                    <a
                      v-for="subItem in item.children"
                      :key="subItem.name"
                      :href="subItem.href"
                      class="group w-full flex items-center justify-center pl-4 pr-2 py-2 text-xs font-medium text-gray-100 hover:bg-black-100 hover:text-white"
                    >
                      <span
                        :class="[
                          item.current
                            ? 'bg-blue-100'
                            : 'bg-gray-100 group-hover:bg-blue-100',
                          'w-1 h-1 rounded-full mr-4',
                        ]"
                      ></span
                      >{{ subItem.name }}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        :class="[
                          item.current
                            ? 'text-gray-100'
                            : 'text-gray-100 group-hover:text-gray-100',
                          'h-3.5 w-3.5 mr-1.5 xd bd oo ml-auto',
                        ]"
                        fill="none"
                        viewBox="0 0 20 20"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="m19 9-7 7-7-7"
                        ></path>
                      </svg>
                    </a>
                  </DisclosurePanel>
                </Disclosure>
              </template>
            </nav>
          </div>
        </div>
      </TransitionChild>
      <div class="flex-shrink-0 w-14" aria-hidden="true">
        <!-- Dummy element to force sidebar to shrink to fit close icon -->
      </div>
    </Dialog>
  </TransitionRoot>
  <div class="md:flex flex-shrink-0 hidden">
    <div class="flex flex-col">
      <!-- Sidebar component, swap this element with another sidebar if you like -->
      <div class="flex flex-col h-0 flex-1">
        <div
          class="flex items-center justify-between h-14 flex-shrink-0 px-3 bg-gray-900"
        >
          <img
            v-if="visible === true"
            class="h-4 w-auto"
            src="aircontrol-logo.svg"
            alt="AirControl"
          />
          <button
            class="p-2 rounded-full hover:bg-gray-200 text-gray-500 hover:text-blue-100 focus:outline-none"
            @click="showVisible()"
          >
            <span class="sr-only">Open sidebar</span>
            <ChevronDoubleRightIcon
              v-if="visible === false"
              class="h-4 w-4"
              aria-hidden="true"
            />
            <ChevronDoubleLeftIcon
              v-if="visible === true"
              class="h-4 w-4"
              aria-hidden="true"
            />
          </button>
        </div>
        <div class="flex-1 flex flex-col overflow-y-auto">
          <nav class="flex-1 py-4 bg-gray-800">
            <template v-for="item in navigation" :key="item.name">
              <div v-if="!item.children">
                <a
                  :href="item.href"
                  :class="[
                    item.current
                      ? 'bg-black-100 text-white'
                      : 'text-gray-100 hover:bg-black-100 hover:text-white',
                    'group flex items-center justify-center px-3 py-2 text-xs cursor-pointer font-medium',
                  ]"
                >
                  <component
                    :is="item.icon"
                    :class="[
                      item.current
                        ? 'text-blue-100'
                        : 'text-gray-100 group-hover:text-blue-100',
                      'h-4 w-4',
                    ]"
                    aria-hidden="true"
                  />
                  <span
                    v-if="visible === true"
                    class="w-40 pl-2 text-left flex items-center"
                  >
                    {{ item.name }}
                    <component
                      :is="item.iconR"
                      v-if="visible === true"
                      :class="[
                        item.current
                          ? 'text-gray-100'
                          : 'text-gray-100 group-hover:text-gray-100',
                        'ml-auto h-4',
                      ]"
                      aria-hidden="true"
                    />
                  </span>
                </a>
                <p
                  v-if="item.title && visible"
                  class="uppercase text-left w-full text-gray-300 text-2xs tracking-widest font-bold pt-2 pb-1.5 px-3"
                >
                  {{ item.title }}
                </p>
              </div>
              <Disclosure as="div" v-else class="space-y-1">
                <DisclosureButton
                  :class="[
                    item.current
                      ? 'bg-black-100 text-white'
                      : 'text-gray-100 hover:bg-black-100 hover:text-white',
                    'group flex items-center justify-center px-3 py-2 text-xs w-full cursor-pointer mainMenu',
                  ]"
                >
                  <component
                    :is="item.icon"
                    :class="[
                      item.current
                        ? 'text-blue-100'
                        : 'text-gray-100 group-hover:text-blue-100',
                      'h-4 w-4',
                    ]"
                    aria-hidden="true"
                  />
                  <span
                    v-if="visible === true"
                    class="w-40 pl-2 text-left flex items-center"
                  >
                    {{ item.name }}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      :class="[
                        item.current
                          ? 'text-gray-100'
                          : 'text-gray-100 group-hover:text-gray-100',
                        'h-3.5 w-3.5 mr-0.5 xd bd oo ml-auto',
                      ]"
                      fill="none"
                      viewBox="0 0 20 20"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="m19 9-7 7-7-7"
                      ></path>
                    </svg>
                  </span>
                  <div class="showMenuHover absolute left-10 pl-6">
                    <div
                      v-if="visible === false"
                      class="py-2 bg-black-100 w-40 rounded-lg z-50"
                    >
                      <a
                        v-for="subItem in item.children"
                        :key="subItem.name"
                        :href="subItem.href"
                        class="group w-full flex items-center justify-center px-5 py-2 text-xs font-medium text-gray-100 hover:bg-black-100 hover:text-white cursor-pointer"
                      >
                        <span
                          :class="[
                            item.current
                              ? 'bg-blue-100'
                              : 'bg-gray-100 group-hover:bg-blue-100',
                            'w-1 h-1 rounded-full mr-4',
                          ]"
                        ></span
                        >{{ subItem.name }}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          :class="[
                            item.current
                              ? 'text-gray-100'
                              : 'text-gray-100 group-hover:text-gray-100',
                            'h-3 w-3 xd bd oo ml-auto',
                          ]"
                          fill="none"
                          viewBox="0 0 20 20"
                          stroke="currentColor"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="m19 9-7 7-7-7"
                          ></path>
                        </svg>
                      </a>
                    </div>
                  </div>
                </DisclosureButton>
                <DisclosurePanel class="space-y-1">
                  <div v-if="visible === true">
                    <a
                      v-for="subItem in item.children"
                      :key="subItem.name"
                      :href="subItem.href"
                      class="group w-full flex items-center justify-center pl-4 pr-2 py-2 text-xs font-medium text-gray-100 hover:bg-black-100 hover:text-white"
                    >
                      <span
                        :class="[
                          item.current
                            ? 'bg-blue-100'
                            : 'bg-gray-100 group-hover:bg-blue-100',
                          'w-1 h-1 rounded-full mr-4',
                        ]"
                      ></span
                      >{{ subItem.name }}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        :class="[
                          item.current
                            ? 'text-gray-100'
                            : 'text-gray-100 group-hover:text-gray-100',
                          'h-3.5 w-3.5 mr-1.5 xd bd oo ml-auto',
                        ]"
                        fill="none"
                        viewBox="0 0 20 20"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="m19 9-7 7-7-7"
                        ></path>
                      </svg>
                    </a>
                  </div>
                </DisclosurePanel>
              </Disclosure>
            </template>
          </nav>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {
  Dialog,
  DialogOverlay,
  Menu,
  TransitionChild,
  TransitionRoot,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/vue";
import {
  ViewGridIcon,
  ViewGridAddIcon,
  HomeIcon,
  UserIcon,
  MenuAlt2Icon,
  BookmarkAltIcon,
  ChevronDownIcon,
  ChevronRightIcon,
  ChevronDoubleRightIcon,
  ChevronDoubleLeftIcon,
  ChipIcon,
  ServerIcon,
  ViewBoardsIcon,
} from "@heroicons/vue/outline";
import { SearchIcon } from "@heroicons/vue/solid";

const navigation = [
  {
    name: "Dashboards",
    icon: HomeIcon,
    current: false,
    href: "#",
  },
  {
    title: "Pages",
    name: "Elements",
    icon: ChipIcon,
    current: false,
    href: "#",
  },
  {
    name: "Pages",
    icon: BookmarkAltIcon,
    iconR: ChevronDownIcon,
    current: false,
    children: [
      { name: "Account", href: "#" },
      {
        name: "Projects",
        href: "#",
        childrens: [
          { name: "Overview", href: "#" },
          { name: "Cards", href: "#" },
          { name: "Cards 2", href: "#" },
          { name: "Files", href: "#" },
        ],
      },
      { name: "Profile", href: "#" },
    ],
  },
  {
    name: "Elements",
    icon: ViewBoardsIcon,
    iconR: ChevronRightIcon,
    current: false,
  },
  {
    name: "Cards",
    icon: ViewGridIcon,
    iconR: ChevronRightIcon,
    current: false,
  },
  {
    title: "CUSTOMIZE",
    name: "Authentication",
    icon: UserIcon,
    iconR: ChevronRightIcon,
    current: false,
  },
  {
    name: "Cards",
    icon: ViewGridAddIcon,
    iconR: ChevronRightIcon,
    current: false,
  },
  {
    name: "Sidebars",
    icon: ServerIcon,
    iconR: ChevronRightIcon,
    current: false,
  },
];

export default {
  props: ["sidebarOpen"],
  components: {
    Dialog,
    DialogOverlay,
    Menu,
    TransitionChild,
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
    TransitionRoot,
    MenuAlt2Icon,
    SearchIcon,
    ChevronDoubleRightIcon,
    ChevronDoubleLeftIcon,
    ChipIcon,
    UserIcon,
  },
  data() {
    return {
      navigation,
      visible: true,
    };
  },
  methods: {
    showVisible() {
      this.visible = !this.visible;
    },
    close() {
      this.$emit("closeSidebar");
    },
  },
};
</script>

<style>
.showMenuHover {
  visibility: hidden;
}

.mainMenu:hover .showMenuHover {
  visibility: visible;
  transition: all 0.5s;
}
</style>
