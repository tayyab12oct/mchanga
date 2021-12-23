<template>
  <div class="tabs tabs-team tabs-share-wrapper clearfix">
    <ul class="tab-nav clearfix">
      <li
        class="rounded-full cursor-pointer"
        v-on:click="toggleTabs(1)"
        v-bind:class="{
          'bg-transparent': openTab !== 1,
          'bg-main text-secondary': openTab === 1,
        }"
      >
        Description
      </li>
      <li
        class="rounded-full cursor-pointer"
        v-on:click="toggleTabs(2)"
        v-bind:class="{
          'bg-transparent': openTab !== 2,
          'bg-main text-secondary': openTab === 2,
        }"
      >
        Video
      </li>
      <li
        class="rounded-full cursor-pointer"
        v-on:click="toggleTabs(3)"
        v-bind:class="{
          'bg-transparent': openTab !== 3,
          'bg-main text-secondary': openTab === 3,
        }"
      >
        Gallery
      </li>
      <li
        class="rounded-full cursor-pointer"
        v-on:click="toggleTabs(4)"
        v-bind:class="{
          'bg-transparent': openTab !== 4,
          'bg-main text-secondary': openTab === 4,
        }"
      >
        Comments
      </li>
    </ul>
    <div class="container">
    <div class="tab-container">
      <div
        class="tab-content clearfix"
        v-bind:class="{
          hidden: openTab !== 1,
          block: openTab === 1,
        }"
      >
        <div>
          <p>
            Dear Friends, <br />We are reaching out to you to help us raise
            funds for our mom, Mwalimu Esther Wanjiru Ngugi, or Mama Eva Our mom
            fell ill early last week and we rushed her to the Aga Khan hospital.
            On arrival, the doctors ran some tests and she was diagnosed with
            COVID 19.
          </p>
          <p>
            Due to the fact that mom has been battling diabetes and High Blood
            Pressure, her situation worsened and the hospital recommended that
            she goes into isolation and intensive care. The nearest hospital
            with an isolation ward and ICU facilities was Avenue Hospital in
            Thika, so we transferred her there.
          </p>
          <div v-if="show === true">
            <p>
              She has been under Intensive care for the past week, and the
              medical bill currently stands at 1,500,000 Kenyan shillings, which
              might rise further as she continues to receive care.
            </p>
            <p>
              We have reached out to well-wishers to help us raise the amount
              and so far, we have collected 250,000 Kenyan Shillings. Kindly
              help us in raise the remaining amount so that the Avenue Hospital
              can allow us to transfer her to a facility that is supported by
              AON, our mom’s insurance service provider.
            </p>
            <p>
              May God bless you abundantly as you lend us a helping hand in time
              of need.
            </p>
            <p>
              Due to the fact that mom has been battling diabetes and High Blood
              Pressure, her situation worsened and the hospital recommended that
              she goes into isolation and intensive care. The nearest hospital
              with an isolation ward and ICU facilities was Avenue Hospital in
              Thika, so we transferred her there.
            </p>
            <p>
              She has been under Intensive care for the past week, and the
              medical bill currently stands at 1,500,000 Kenyan shillings, which
              might rise further as she continues to receive care.
            </p>
            <p>
              We have reached out to well-wishers to help us raise the amount
              and so far, we have collected 250,000 Kenyan Shillings. Kindly
              help us in raise the remaining amount so that the Avenue Hospital
              can allow us to transfer her to a facility that is supported by
              AON, our mom’s insurance service provider.
            </p>
            <p>
              May God bless you abundantly as you lend us a helping hand in time
              of need.
            </p>
          </div>
        </div>
        <p class=" show-more-button cursor-pointer" @click="show = !show">
          <span v-if="show === false">Readmore</span>
          <span v-else>Click to Collapse</span>
        </p>
        <p class="show-more-button cursor-pointer" v-if="0"></p>
      </div>
      <div
        class="tab-content clearfix"
        v-bind:class="{
          hidden: openTab !== 2,
          block: openTab === 2,
        }"
      >
        <div class="video-thumbnail-wrapper">
          <iframe
            width="100%"
            height="409"
            src="https://www.youtube.com/embed/QOTioP6jCWo"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write;
            encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      </div>
      <div
        class="tab-content clearfix"
        v-bind:class="{
          hidden: openTab !== 3,
          block: openTab === 3,
        }"
      >
        <div class="row">
          <div class="col-md-3" v-for="n in 8" :key="n">
            <a
              href="images/share-video-thumb.jpg"
              data-lightbox="image"
              class="gallery-item"
            >
              <img
                src="@/assets/images/share-video-thumb.jpg"
                alt="Single Image"
              />
              <div class="overlay">
                <div class="overlay-wrap">
                  <i class="icon-line-zoom-in"></i>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
      <div
        class="tab-content clearfix"
        v-bind:class="{
          hidden: openTab !== 4,
          block: openTab === 4,
        }"
      >
        <div class="comment-plugin-wrap">
          <div
            style="
                        text-align: center;
                        height: 300px;
                        line-height: 300px;
                      "
          >
            Comments Plugins Here
          </div>
        </div>
      </div>
    </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return { openTab: 1, show: false };
  },
  methods: {
    toggleTabs(tabNumber) {
      this.openTab = tabNumber;
    },
  },
};
</script>
