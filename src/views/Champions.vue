<template>
  <div>
    <Breadcrumbs
      :src="require('@/assets/images/top-banner-champion.jpg')"
      breadcrumb="Champions"
      title="Champions"
    />
    <section id="content">
      <div class="content-wrap">
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
              <div class="col-md-6">
                <div class="champion-desc-box">
                  <img
                    class="mx-auto"
                    src="@/assets/images/ic-champion-1.png"
                  />
                  <p>
                    The Champions page is a public page that provides a
                    champion's unique fundraiser name, account number, story and
                    images/ videos. Donors are able to see how much has been
                    raised by a specific champion and by how many people. They
                    are also able to see the fundraiser a champion is
                    championing for.
                  </p>
                </div>
              </div>
              <div class="col-md-6">
                <div class="champion-desc-box">
                  <img
                    class="mx-auto"
                    src="@/assets/images/ic-champion-2.png"
                  />
                  <p>
                    A Champion is an individual that supports your fundraising
                    efforts and is willing to actively rally your campaign by
                    use of a unique share page, share link and account number.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="section nobg nomargin nopadding">
          <div class="container">
            <div class="champions-faq">
              <div class="toggle has-no-icon">
                <div class="togglet">
                  <i class="toggle-closed icon-angle-down"></i>
                  <i class="toggle-open icon-angle-right"></i>
                  <div class="title-blocks">
                    <h3>Why have Champions?</h3>
                  </div>
                </div>
                <div class="togglec">
                  <table class="table table-borderless">
                    <tbody>
                      <tr>
                        <td class="title-cell">Enhanced visibility</td>
                        <td>
                          Individual champions rally for your fundraiser
                          ensuring it reaches their individual networks. More
                          eyes means more potential donations.
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
                          Both champions and main fundraisers can track progress
                          of the main fundraiser page and individual champion
                          pages.
                        </td>
                      </tr>
                      <tr>
                        <td class="title-cell">Central Donation</td>
                        <td>
                          All donations made to individual champion fundraisers
                          are channelled into the main fundraiser account. This
                          helps avoid any instances of unaccountability that may
                          arise.
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div class="toggle has-no-icon">
                <div class="togglet">
                  <i class="toggle-closed icon-angle-down"></i>
                  <i class="toggle-open icon-angle-right"></i>
                  <div class="title-blocks">
                    <h3>How do I enable the champions feature?</h3>
                  </div>
                </div>
                <div class="togglec">
                  <p>
                    Activating the champion feature is simple! All you have to
                    do is ensure you have an existing fundraiser ( don’t worry
                    if not, you can set up one here). Once your fundraiser is
                    set up, reach our customer care support through 020 765 0919
                    or support@changa.co.ke to request activation!
                  </p>
                </div>
              </div>
              <div class="toggle has-no-icon">
                <div class="togglet">
                  <i class="toggle-closed icon-angle-down"></i>
                  <i class="toggle-open icon-angle-right"></i>
                  <div class="title-blocks">
                    <h3>How do I sign up as a Champion?</h3>
                  </div>
                </div>
                <div class="togglec">
                  <p><strong>Requirements:</strong></p>
                  <ul class="fancy-list">
                    <li>
                      Have made a donation to the fundraiser you wish to
                      champion for.
                    </li>
                    <li>Have access to the phone number used to donate.</li>
                    <li>Have a valid email address.</li>
                  </ul>
                  <p>
                    <strong
                      >Want to activate your champion feature or are
                      experiencing a challenge while signing up, please contact
                      support via 020 765 0919.</strong
                    >
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="section nobg nomargin home-faq-sec pt-0">
        <div class="container">
          <div class="heading-block center">
            <h2>Have a question? Check out our FAQs page or chat with us</h2>
          </div>
          <div class="row">
            <div class="col-md-4">
              <a href="#" class="button button-icon">
                <img src="@/assets/images/ic-faq-1.png" />
                <span>Start A Fundraiser</span>
              </a>
            </div>
            <div class="col-md-4">
              <a href="#" class="button button-icon">
                <img src="@/assets/images/ic-faq-2.png" />
                <span>Find Out More</span>
              </a>
            </div>
            <div class="col-md-4">
              <a href="#" class="button button-icon">
                <img src="@/assets/images/ic-faq-3.png" />
                <span>Request a call back</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
import Breadcrumbs from "../components/Breadcrumbs.vue";
export default {
  components: {
    Breadcrumbs,
  },
};
</script>
