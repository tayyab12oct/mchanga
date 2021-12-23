<template>
  <div class="tabs flex items-start side-tabs responsive-tabs clearfix">
    <ul class="tab-nav clearfix">
      <li
        class="cursor-pointer"
        v-on:click="toggleTabs(1)"
        v-bind:class="{
          'bg-white': openTab !== 1,
          'bg-transparent': openTab === 1,
        }"
      >
        <img v-if="openTab === 1" src="@/assets/images/mpesa1.jpg"/>
        <img v-if="openTab !== 1" src="@/assets/images/mpesa2.jpg"/>
      </li>
      <li
        class="cursor-pointer"
        v-on:click="toggleTabs(2)"
        v-bind:class="{
          'bg-white': openTab !== 2,
          'bg-transparent': openTab === 2,
        }"
      >
        <img v-if="openTab === 2" src="@/assets/images/airtel1.jpg" />
        <img v-if="openTab !== 2" src="@/assets/images/airtel2.jpg" />
      </li>
      <li
        class="cursor-pointer"
        v-on:click="toggleTabs(3)"
        v-bind:class="{
          'bg-white': openTab !== 3,
          'bg-transparent': openTab === 3,
        }"
      >
        <img v-if="openTab === 3" src="@/assets/images/equitel1.jpg" />
        <img v-if="openTab !== 3" src="@/assets/images/equitel2.jpg" />
      </li>
      <li
        class="cursor-pointer"
        v-on:click="toggleTabs(4)"
        v-bind:class="{
          'bg-white': openTab !== 4,
          'bg-transparent': openTab === 4,
        }"
      >
        <img v-if="openTab === 4" src="@/assets/images/tKash1.jpg" />
        <img v-if="openTab !== 4" src="@/assets/images/tKash2.jpg" />
      </li>
      <li
        class="cursor-pointer"
        v-on:click="toggleTabs(5)"
        v-bind:class="{
          'bg-white': openTab !== 5,
          'bg-transparent': openTab === 5,
        }"
      >
        <img v-if="openTab === 5" src="@/assets/images/flutterwave1.jpg" />
        <img  v-if="openTab !== 5" src="@/assets/images/flutterwave2.jpg" />
      </li>
      <li
        class="cursor-pointer"
        v-on:click="toggleTabs(6)"
        v-bind:class="{
          'bg-white': openTab !== 6,
          'bg-transparent': openTab === 6,
        }"
      >
        <img v-if="openTab === 6" src="@/assets/images/visa1.jpg" />
        <img v-if="openTab !== 6" src="@/assets/images/visa2.jpg" />
      </li>
      <li
        class="cursor-pointer"
        v-on:click="toggleTabs(7)"
        v-bind:class="{
          'bg-white': openTab !== 7,
          'bg-transparent': openTab === 7,
        }"
      >
        <img v-if="openTab === 7" src="@/assets/images/paypal1.jpg" />
        <img v-if="openTab !== 7" src="@/assets/images/paypal2.jpg" />
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
        <div class="payment-method-content">
          <div class="payment-method-inner">
            <img
              src="@/assets/images/1200px-M-PESA_LOGO-01.svg.png"
              class="w-44 mx-auto"
            />
            <div class="payment-description-wrapper">
              <form>
                <div class="switch-field">
                  <input
                    type="radio"
                    id="radio-one"
                    name="switch-one"
                    checked
                  />
                  <label for="radio-one">KES 4,500</label>
                  <input type="radio" id="radio-two" name="switch-one" />
                  <label for="radio-two">KES 4,500</label>
                  <input type="radio" id="radio-three" name="switch-one" />
                  <label for="radio-three">KES 4,500</label>
                </div>
                <div class="input-group">
                  <input
                    type="number"
                    class="form-control"
                    placeholder="Enter Amount in USD"
                    name=""
                  />
                  <a href="#modalMpesa" class="button" data-toggle="modal"
                    >Donate</a
                  >
                </div>
              </form>
              <div class="payment-text">
                <span><strong>DIAL:</strong> *483*57*49107#</span>
                <span><strong>PAYBILL:</strong> 891300</span>
                <span><strong>ACCOUNT:</strong> ABU</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        class="tab-content clearfix"
        v-bind:class="{
          hidden: openTab !== 2,
          block: openTab === 2,
        }"
      >
        <div class="payment-method-content">
          <div class="payment-method-inner">
            <img
              src="@/assets/images/Airtel_Uganda-Logo.wine.png"
              class="w-44 mx-auto"
            />
            <div class="payment-description-wrapper">
              <div class="payment-text">
                <span><strong>Business Name: Mchanga</strong></span>
                <span><strong>Reference: 49161</strong></span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        class="tab-content clearfix"
        v-bind:class="{
          hidden: openTab !== 3,
          block: openTab === 3,
        }"
      >
        <div class="payment-method-content">
          <div class="payment-method-inner">
            <img
              src="@/assets/images/Equitel_Kenya_Logo.png"
              class="w-44 mx-auto"
            />
            <div class="payment-description-wrapper">
              <div class="payment-text">
                <span><strong>Business Number: 891300</strong></span>
                <span><strong>Reference: 49161</strong></span>
              </div>
            </div>
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
        <div class="payment-method-content">
          <div class="payment-method-inner">
            <img src="@/assets/images/telkom-tkash.png" class="w-44 mx-auto" />
            <div class="payment-description-wrapper">
              <div class="payment-text">
                <span><strong>DIAL: *160*2*1#</strong></span>
                <span><strong>PAYBILL: 891300</strong></span>
                <span><strong>ACCOUNT: 49161</strong></span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        class="tab-content clearfix"
        v-bind:class="{
          hidden: openTab !== 5,
          block: openTab === 5,
        }"
      >
        <div class="payment-method-content">
          <div class="payment-method-inner">
            <img
              src="@/assets/images/flutterwave-logo-vector.png"
              class="w-56 mx-auto"
            />
            <div class="payment-description-wrapper">
              <p>
                <strong class="text-black"
                  >To activate via Flutterwave, please click on this
                  Link</strong
                >
              </p>
              <router-link to="" class="button mb-3">Link</router-link>
              <p>
                <strong class="text-black"
                  >or copy below to your browser
                  <br />https://secure.changa.co.ke/myweb/share/47334</strong
                >
              </p>
            </div>
          </div>
        </div>
      </div>
      <div
        class="tab-content clearfix"
        v-bind:class="{
          hidden: openTab !== 6,
          block: openTab === 6,
        }"
      >
        <div class="payment-method-content">
          <div class="payment-method-inner">
            <img
              src="@/assets/images/visa-logo-png-2026.png"
              class="w-44 mx-auto"
            />
            <div class="payment-description-wrapper">
              <form>
                <div class="input-group">
                  <input
                    type="number"
                    class="form-control"
                    placeholder="Enter Amount in USD"
                    name=""
                  />
                  <a href="#" class="button">Donate</a>
                </div>
              </form>
              <div class="center">
                <p>
                  Your payment info is stored securely. Learn more.
                </p>
                <p>
                  Disclaimer Your donation will show up on your statement as
                  "Changa Labs," an M-Changa affiliate. As a donor or
                  contributor of Changa Labs you understand, acknowledge and
                  agree that Changa Labs has the ultimate authority to use
                  contributions made to it at its discretion for purposes
                  consistent with its purposes. In the event that Changa Labs
                  deems the recipient, MEDICAL APPEAL: ABU JOHNSON OKUMU
                  ineligible, your funds may be reversed and returned to you.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        class="tab-content clearfix"
        v-bind:class="{
          hidden: openTab !== 7,
          block: openTab === 7,
        }"
      >
        <div class="payment-method-content">
          <div class="payment-method-inner">
            <img
              src="@/assets/images/paypal-logo-png-2116.png"
              class="w-44 mx-auto"
            />
            <div class="payment-description-wrapper">
              <form>
                <div class="input-group">
                  <input
                    type="number"
                    class="form-control"
                    placeholder="Enter Amount in USD"
                    name=""
                  />
                  <a href="#" class="button">Donate</a>
                </div>
              </form>
              <div class="center">
                <p>
                  Your payment info is stored securely. Learn more.
                </p>
                <p>
                  Disclaimer Your donation will show up on your statement as
                  "Changa Labs," an M-Changa affiliate. As a donor or
                  contributor of Changa Labs you understand, acknowledge and
                  agree that Changa Labs has the ultimate authority to use
                  contributions made to it at its discretion for purposes
                  consistent with its purposes. In the event that Changa Labs
                  deems the recipient, Griffins Dad Sendoff ineligible, your
                  funds may be reversed and returned to you.
                </p>
              </div>
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
    return { openTab: 1 };
  },
  methods: {
    toggleTabs(tabNumber) {
      this.openTab = tabNumber;
    },
  },
};
</script>
