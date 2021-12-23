<template>
  <div>
    <Breadcrumbs
      :src="require('@/assets/images/top-banner-blog.jpg')"
      breadcrumb="Blog"
      title="Our Blog"
    />
    <section id="content">
      <div class="content-wrap py-0">
        <div class="section nobg nomargin nopadding">
          <div class="tabs justified-tabs about-sub-nav tabs-blog clearfix">
            <div class="container">
              <ul class="tab-nav clearfix">
                <li
                  class="cursor-pointer px-3"
                  v-on:click="toggleTabs(1)"
                  v-bind:class="{
                    'bg-transparent': openTab !== 1,
                    'bg-white': openTab === 1,
                  }"
                >
                  Fundraiser Stories
                </li>
                <li
                  class="cursor-pointer px-3"
                  v-on:click="toggleTabs(2)"
                  v-bind:class="{
                    'bg-main': openTab !== 2,
                    'bg-white': openTab === 2,
                  }"
                >
                  M-Changa Tips
                </li>
                <li
                  class="cursor-pointer px-3"
                  v-on:click="toggleTabs(3)"
                  v-bind:class="{
                    'bg-main': openTab !== 3,
                    'bg-white': openTab === 3,
                  }"
                >
                  Featured Press
                </li>
                <li
                  class="cursor-pointer px-3"
                  v-on:click="toggleTabs(4)"
                  v-bind:class="{
                    'bg-main': openTab !== 4,
                    'bg-white': openTab === 4,
                  }"
                >
                  Changa TV
                </li>
              </ul>
            </div>
            <div class="tab-container">
              <div class="tab-content clearfix" id="tab-blog-1">
                <div class="container">
                  <div class="row">
                    <div class="col-lg-8">
                      <div class="article-items-list-wrap">
                        <div
                          v-bind:class="{
                            hidden: openTab !== 1,
                            block: openTab === 1,
                          }"
                        >
                          <BlogCard />
                        </div>
                        <div
                          v-bind:class="{
                            hidden: openTab !== 2,
                            block: openTab === 2,
                          }"
                        >
                          <BlogCard />
                        </div>
                        <div
                          v-bind:class="{
                            hidden: openTab !== 3,
                            block: openTab === 3,
                          }"
                        >
                          <BlogCard />
                        </div>
                        <div
                          v-bind:class="{
                            hidden: openTab !== 4,
                            block: openTab === 4,
                          }"
                        >
                          <BlogCard />
                        </div>
                        <Pagination />
                      </div>
                    </div>
                    <div class="col-lg-4">
                      <div class="blog-post-sidebar">
                        <div
                          class="sidebar-item"
                          v-for="v in rightCard"
                          :key="v"
                        >
                          <h3 class="sidebar-title">{{ v.title }}</h3>
                          <div class="recent-items-wrap">
                            <router-link
                              :to="n.to"
                              v-for="n in v.rows"
                              :key="n"
                            >
                              <div class="recent-post-item">
                                <img :src="n.src" class="post-image" />
                                <div class="post-text">
                                  <h4 class="post-title">
                                    {{ n.title }}
                                  </h4>
                                  <div class="post-meta">{{ n.date }}</div>
                                </div>
                              </div>
                            </router-link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <QuestionBottom />
    </section>
    <Footer />
  </div>
</template>
<script>
import Breadcrumbs from '../components/Breadcrumbs.vue';
import QuestionBottom from '../components/QuestionBottom.vue';
import Footer from '../components/Footer/index.vue';
import Pagination from '../components/Pagination.vue';
import BlogCard from '../components/blogCard.vue';

export default {
  components: {
    Breadcrumbs,
    QuestionBottom,
    Footer,
    Pagination,
    BlogCard,
  },
  data() {
    return {
      openTab: 1,
      rightCard: [
        {
          title: 'Recent Post',
          rows: [
            {
              to: '',
              src: require('@/assets/images/recent-1.jpg'),
              title: 'Feding the Poor Children',
              date: 'August 20, 2020',
            },
            {
              to: '',
              src: require('@/assets/images/recent-2.jpg'),
              title: 'South african pre primary school build for children',
              date: 'August 20, 2020',
            },
          ],
        },
        {
          title: 'Featured Press',
          rows: [
            {
              to: '',
              src: require('@/assets/images/recent-1.jpg'),
              title: 'Feding the Poor Children',
              date: 'August 20, 2020',
            },
            {
              to: '',
              src: require('@/assets/images/recent-2.jpg'),
              title: 'South african pre primary school build for children',
              date: 'August 20, 2020',
            },
          ],
        },
        {
          title: 'Changa TV',
          rows: [
            {
              to: '',
              src: require('@/assets/images/recent-1.jpg'),
              title: 'Feding the Poor Children',
              date: 'August 20, 2020',
            },
            {
              to: '',
              src: require('@/assets/images/recent-2.jpg'),
              title: 'South african pre primary school build for children',
              date: 'August 20, 2020',
            },
          ],
        },
        {
          title: 'M-Changa Tips',
          rows: [
            {
              to: '',
              src: require('@/assets/images/recent-1.jpg'),
              title: 'Feding the Poor Children',
              date: 'August 20, 2020',
            },
            {
              to: '',
              src: require('@/assets/images/recent-2.jpg'),
              title: 'South african pre primary school build for children',
              date: 'August 20, 2020',
            },
          ],
        },
      ],
    };
  },
  methods: {
    toggleTabs(tabNumber) {
      this.openTab = tabNumber;
    },
  },
};
</script>
<style>
.about-sub-nav .tab-nav > li {
  height: 60px !important;
  line-height: 60px !important;
  font-family: "Nunito", sans-serif;
  font-size: 15px !important;
  color: #18181a !important;
  font-weight: bold;
}
</style>
