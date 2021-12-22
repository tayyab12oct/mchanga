<template>
  <div>
    <Breadcrumbs
      :src="require('@/assets/images/top-banner-faq.jpg')"
      breadcrumb="Questions"
      title="Questions"
    />

    <section id="content">
      <div class="section nobg nomargin">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-md-10">
              <div class="accordion faq-questions-wrap clearfix">
                <dl class="accordion-item">
                  <Disclosure as="div" class="pb-0 mb-0" v-slot="{ open }">
                    <dt class="text-lg ">
                      <DisclosureButton
                        class="text-left w-full flex justify-between items-center text-gray-400"
                      >
                        <h3 class="text-secondary mb-0">
                          What Is M-Changa?
                        </h3>
                        <span class="md:ml-6 h-7 flex items-center">
                          <MinusCircleIcon
                            :class="[
                              open ? 'inline-block' : 'hidden',
                              'h-5 md:h-9 w-5 md:w-9 text-secondary',
                            ]"
                            aria-hidden="true"
                          />
                          <PlusCircleIcon
                            :class="[
                              open ? 'hidden' : 'inline-block',
                              'h-5 md:h-9 w-5 md:w-9 text-secondary',
                            ]"
                            aria-hidden="true"
                          />
                        </span>
                      </DisclosureButton>
                    </dt>
                    <transition name="fade">
                      <DisclosurePanel
                        as="dd"
                        class="md:pr-12 pb-0 mb-0 transform transition-all"
                      >
                        <div class="acc_content clearfix">
                          <p>
                            M-Changa is Africa's largest Online Fundraising
                            Platform. We provide the most Secure, Transparent &
                            Convenient way to raise funds in Kenya.
                          </p>
                          <p>
                            Our Fundraisers include: Medical, Funeral, Weddings,
                            Churches, Businesses, Education, Projects, Sports,
                            Construction & Disasters.
                          </p>
                          <p>Here are the latest statistics on M-Changa:</p>
                          <ul class="list-disc">
                            <li>Number of fundraisers: 47,907</li>
                            <li>Number of supporters: 925,894</li>
                            <li>
                              Range of fundraiser totals: KES 250 to KES
                              8,027,630
                            </li>
                          </ul>
                        </div>
                      </DisclosurePanel>
                    </transition>
                  </Disclosure>
                </dl>
                <dl class="accordion-item">
                  <Disclosure as="div" v-slot="{ open }">
                    <dt class="text-lg">
                      <DisclosureButton
                        class="text-left w-full flex justify-between items-center text-gray-400"
                      >
                        <h3 class="text-secondary mb-0">
                          How Does M-Changa Work?
                        </h3>
                        <span class="md:ml-6 h-7 flex items-center">
                          <MinusCircleIcon
                            :class="[
                              open ? 'inline-block' : 'hidden',
                              'h-5 md:h-9 w-5 md:w-9 text-secondary',
                            ]"
                            aria-hidden="true"
                          />
                          <PlusCircleIcon
                            :class="[
                              open ? 'hidden' : 'inline-block',
                              'h-5 md:h-9 w-5 md:w-9 text-secondary',
                            ]"
                            aria-hidden="true"
                          />
                        </span>
                      </DisclosureButton>
                    </dt>
                    <transition name="fade">
                      <DisclosurePanel
                        as="dd"
                        class="md:pr-12 mb-0 transform transition-all"
                      >
                        <div class="acc_content clearfix">
                          <h4>For Fundraisers</h4>
                          <p>
                            M-Changa provides a platform for Transparent, Secure
                            & Convenient fundraising.
                          </p>
                          <ol class="list-decimal">
                            <li>
                              Fundraisers Register free on M-Changa at
                              <a href="http://www.changa.co.ke/signup"
                                >http://www.changa.co.ke/signup</a
                              >
                              (fundraisers without internet access can register
                              by dialling *483*57#)
                            </li>
                            <li>
                              M-Changa provides a unique fundraising Sharepage,
                              enabling Fundraisers to:
                              <ul class="list-disc">
                                <li>
                                  Customise with their fundraiser with a Story,
                                  Pictures, Videos, Synonym & Targets
                                </li>
                                <li>
                                  Share their fundraiser using Facebook,
                                  Twitter, WhatsApp, SMS etc.
                                </li>
                                <li>
                                  Collect funds through M-Pesa, Airtel, Equitel,
                                  Visa, Mastercard & PayPal
                                </li>
                              </ul>
                            </li>
                            <li>
                              M-Changa secures fundraisers through; Human
                              Expertise, Fundraiser Verification, Treasurer
                              Controlled & Secure Technology
                            </li>
                            <li>
                              Fundraisers can withdraw their funds anytime,
                              provided the account is Verified and Treasurers
                              have approved
                            </li>
                          </ol>
                          <h4>For Contributors</h4>
                          <ol class="list-decimal">
                            <li>
                              Contributor gets invited to the fundraiser
                              (Facebook, WhatsApp, SMS etc.)
                            </li>
                            <li>
                              Contributor visits the fundraiser Sharepage where
                              they can:
                              <ul class="list-disc">
                                <li>
                                  Learn more about the fundraiser (story,
                                  images, video, targets & progress)
                                </li>
                                <li>
                                  Make a Mobile Money contribution (M-Pesa,
                                  Airtel or Equitel)
                                </li>
                                <li>
                                  Make a Credit Card contribution (Visa,
                                  MasterCard or PayPal)
                                </li>
                                <li>
                                  Share the campaign using embedded Social Media
                                  widgets
                                </li>
                              </ul>
                            </li>
                            <li>
                              Automatic SMS / emails are sent to thank
                              contributors, confirm their contribution and
                              update them on fundraiser progress. These messages
                              are often shared in WhatsApp to encourage further
                              contributions.
                            </li>
                          </ol>
                          <p>
                            More on Online Fundraisers here (<a
                              href="www.changa.co.ke/online"
                              >www.changa.co.ke/online</a
                            >)
                          </p>
                          <p>
                            More on Mobile fundraisers here (<a
                              href="www.changa.co.ke/mobile"
                              >www.changa.co.ke/mobile</a
                            >)
                          </p>
                          <p>
                            YouTube Explainer Video here (<a
                              href="https://www.youtube.com/watch?v=0EEh7pHpSCU"
                              target="_blank"
                              >https://www.youtube.com/watch?v=0EEh7pHpSCU</a
                            >)
                          </p>
                        </div>
                      </DisclosurePanel>
                    </transition>
                  </Disclosure>
                </dl>

                <dl class="accordion-item">
                  <Disclosure as="div" v-slot="{ open }">
                    <dt class="text-lg">
                      <DisclosureButton
                        class="text-left w-full flex justify-between items-center text-gray-400"
                      >
                        <h3 class="text-secondary mb-0">
                          How Do I Start A Fundraiser?
                        </h3>
                        <span class="md:ml-6 h-7 flex items-center">
                          <MinusCircleIcon
                            :class="[
                              open ? 'inline-block' : 'hidden',
                              'h-5 md:h-9 w-5 md:w-9 text-secondary',
                            ]"
                            aria-hidden="true"
                          />
                          <PlusCircleIcon
                            :class="[
                              open ? 'hidden' : 'inline-block',
                              'h-5 md:h-9 w-5 md:w-9 text-secondary',
                            ]"
                            aria-hidden="true"
                          />
                        </span>
                      </DisclosureButton>
                    </dt>
                    <transition name="fade">
                      <DisclosurePanel
                        as="dd"
                        class="md:pr-12 mb-0 transform transition-all"
                      >
                        <div class="acc_content clearfix">
                          <p>
                            Fundraiser registration is quick, easy and free.
                            There are two ways to register:
                          </p>
                          <ol class="list-decimal">
                            <li>
                              To register Online, visit
                              <a href="https://secure.changa.co.ke/signup"
                                >https://secure.changa.co.ke/signup</a
                              >
                              and follow the instructions
                            </li>
                            <li>
                              To register using your Mobile, dial *483*57# and
                              follow the instructions (recommended for
                              fundraisers without internet access)
                            </li>
                          </ol>
                        </div>
                      </DisclosurePanel>
                    </transition>
                  </Disclosure>
                </dl>

                <dl class="accordion-item">
                  <Disclosure as="div" v-slot="{ open }">
                    <dt class="text-lg">
                      <DisclosureButton
                        class="text-left w-full flex justify-between items-center text-gray-400"
                      >
                        <h3 class="text-secondary mb-0">
                          How Safe Is My Money?
                        </h3>
                        <span class="md:ml-6 h-7 flex items-center">
                          <MinusCircleIcon
                            :class="[
                              open ? 'inline-block' : 'hidden',
                              'h-5 md:h-9 w-5 md:w-9 text-secondary',
                            ]"
                            aria-hidden="true"
                          />
                          <PlusCircleIcon
                            :class="[
                              open ? 'hidden' : 'inline-block',
                              'h-5 md:h-9 w-5 md:w-9 text-secondary',
                            ]"
                            aria-hidden="true"
                          />
                        </span>
                      </DisclosureButton>
                    </dt>
                    <transition name="fade">
                      <DisclosurePanel
                        as="dd"
                        class="md:pr-12 mb-0 transform transition-all"
                      >
                        <div class="acc_content clearfix">
                          <p>
                            The safety of your funds is our top priority at
                            M-Changa! That’s why we are trusted by over 300,000
                            users across Kenya.
                          </p>
                          <p>
                            The M-Changa platform includes the following safety
                            features:
                          </p>
                          <ul class="list-disc">
                            <li>
                              M-Changa holds all funds in a secure trust account
                              until withdrawal
                            </li>
                            <li>
                              All fundraisers must be Verified by our experts
                              before being able to withdraw
                            </li>
                            <li>
                              Fundraisers nominate up to three treasurers who
                              must approve withdrawals
                            </li>
                            <li>
                              All fundraising activity is transparent; the
                              amount raised, number of contributors and
                              fundraiser updates are publicly available online
                            </li>
                            <li>
                              Our Customer Care team are available to listen to
                              any public concerns and follow up appropriately
                            </li>
                            <li>
                              You can withdraw your funds at any time, so long
                              as your account is verified and your treasurers
                              have approved
                            </li>
                          </ul>
                          <p>
                            M-Changa has implemented best-of-class IT
                            infrastructure and security including:
                          </p>
                          <ul class="list-disc">
                            <li>
                              End-to-End Cloud Redundancy, which allows M-Changa
                              to have no physical servers to maintain.
                            </li>
                            <li>
                              Transaction load balancing and multiple
                              connections to tier-1 Internet providers, making a
                              service outage very unlikely.
                            </li>
                            <li>
                              A full back-up of all software and databases are
                              sent to a geographically different server over 12
                              times per day.
                            </li>
                            <li>
                              All M-Changa records and logs are maintained for
                              seven years.
                            </li>
                            <li>
                              Industry standard SSL 256 Bit Public-Private Key
                              Encryption has been enabled on all sensitive areas
                              of M-Changa's website.
                            </li>
                            <li>
                              M-Changa does not store, or have access to,
                              contributor credit card numbers.
                            </li>
                            <li>M-Changa is PayPal Verified</li>
                          </ul>
                        </div>
                      </DisclosurePanel>
                    </transition>
                  </Disclosure>
                </dl>
                <dl class="accordion-item">
                  <Disclosure as="div" v-slot="{ open }">
                    <dt class="text-lg">
                      <DisclosureButton
                        class="text-left w-full flex justify-between items-center text-gray-400"
                      >
                        <h3 class="text-secondary mb-0">
                          How Can I Withdraw My Money?
                        </h3>
                        <span class="md:ml-6 h-7 flex items-center">
                          <MinusCircleIcon
                            :class="[
                              open ? 'inline-block' : 'hidden',
                              'h-5 md:h-9 w-5 md:w-9 text-secondary',
                            ]"
                            aria-hidden="true"
                          />
                          <PlusCircleIcon
                            :class="[
                              open ? 'hidden' : 'inline-block',
                              'h-5 md:h-9 w-5 md:w-9 text-secondary',
                            ]"
                            aria-hidden="true"
                          />
                        </span>
                      </DisclosureButton>
                    </dt>
                    <transition name="fade">
                      <DisclosurePanel
                        as="dd"
                        class="md:pr-12 mb-0 transform transition-all"
                      >
                        <div class="acc_content clearfix">
                          <p>
                            Once you have raised at least KES 250, you can
                            withdraw your funds provided the account is
                            Verified. Funds can be withdrawn multiple times
                            throughout your fundraiser.
                          </p>
                          <ul class="list-disc">
                            <li>
                              <strong>Online Fundraisers:</strong> Click
                              'Withdraw' while logged into your account and
                              follow the instructions.
                            </li>
                            <li>
                              <strong>Mobile Fundraisers:</strong> Dial
                              *483*57*3# and follow the instructions.
                            </li>
                          </ul>
                          <p>
                            You can withdraw your balance directly to your
                            M-Pesa Wallet or EFT Bank Transfer. Withdrawals by
                            Mobile Money take between 30 minutes to 4 hours for
                            processing from Monday to Saturday from 9AM to 8PM,
                            EFT Bank Transfers may take more time depending on
                            the Bank.
                          </p>
                          <p>
                            For withdrawals on Sundays or Public holidays,
                            please contact Customer Care in advance on
                            020-765-0919.
                          </p>
                          <p>
                            * Your fundraiser expiry date does not affect
                            withdrawal.<br />* Withdrawing funds does not affect
                            the progress meter displayed on your Sharepage.
                          </p>
                        </div>
                      </DisclosurePanel>
                    </transition>
                  </Disclosure>
                </dl>
                <dl class="accordion-item">
                  <Disclosure as="div" v-slot="{ open }">
                    <dt class="text-lg">
                      <DisclosureButton
                        class="text-left w-full flex justify-between items-center text-gray-400"
                      >
                        <h3 class="text-secondary mb-0">
                          How Much Does It Cost?
                        </h3>
                        <span class="md:ml-6 h-7 flex items-center">
                          <MinusCircleIcon
                            :class="[
                              open ? 'inline-block' : 'hidden',
                              'h-5 md:h-9 w-5 md:w-9 text-secondary',
                            ]"
                            aria-hidden="true"
                          />
                          <PlusCircleIcon
                            :class="[
                              open ? 'hidden' : 'inline-block',
                              'h-5 md:h-9 w-5 md:w-9 text-secondary',
                            ]"
                            aria-hidden="true"
                          />
                        </span>
                      </DisclosureButton>
                    </dt>
                    <transition name="fade">
                      <DisclosurePanel
                        as="dd"
                        class="md:pr-12 mb-0 transform transition-all"
                        ><div class="acc_content clearfix">
                          <p>
                            There are two costs associated to your M-Changa
                            fundraiser; Platform Fees and Withdrawal Fees.
                          </p>
                          <p>
                            A 4.25% Platform fee is charged on the total amount
                            raised, at the time of withdrawal. In addition,
                            donations made using Visa/MasterCard are charged at
                            2.5% while PayPal donations are charged at 5%.
                          </p>
                          <p>
                            Fundraisers receive 250 free SMS to update their
                            supporters, the cost per SMS after this limit is KES
                            2 for an account with less than 1,000 donors, KES 1
                            for an account with 1,001 to 2,500 donors and 70
                            Cents for an account with 2,500 plus donors. For
                            every contribution, M-Changa sends an automatic SMS
                            to thank, confirm and update the contributor. These
                            SMS are always FREE.
                          </p>
                          <p>
                            A Withdrawal fee is charged depending on the method
                            of withdrawal. For M-Pesa withdrawals, standard
                            M-Pesa transaction fee applies. EFT Bank Transfers
                            below KES 500,000 are charged as follows: 2,000 -
                            20,000 KES 400, 20,001 - 50,000 KES 600, 50,001 -
                            500,000 KES 800 per transaction, and EFT Bank
                            Transfers above 500,000 are FREE.
                          </p>
                          <p>
                            <strong>Example:</strong> <br />If you raise KES
                            50,000 using mobile money and withdraw to M-Pesa,
                            the total you will receive is KES 47,760 after the
                            4.25% Platform fee (KES 2,125) and M-Pesa transfer
                            fee (KES 105).
                          </p>
                        </div>
                      </DisclosurePanel>
                    </transition>
                  </Disclosure>
                </dl>
                <dl class="accordion-item">
                  <Disclosure as="div" v-slot="{ open }">
                    <dt class="text-lg">
                      <DisclosureButton
                        class="text-left w-full flex justify-between items-center text-gray-400"
                      >
                        <h3 class="text-secondary mb-0">
                          How Do I Verify My Account?
                        </h3>
                        <span class="md:ml-6 h-7 flex items-center">
                          <MinusCircleIcon
                            :class="[
                              open ? 'inline-block' : 'hidden',
                              'h-5 md:h-9 w-5 md:w-9 text-secondary',
                            ]"
                            aria-hidden="true"
                          />
                          <PlusCircleIcon
                            :class="[
                              open ? 'hidden' : 'inline-block',
                              'h-5 md:h-9 w-5 md:w-9 text-secondary',
                            ]"
                            aria-hidden="true"
                          />
                        </span>
                      </DisclosureButton>
                    </dt>
                    <transition name="fade">
                      <DisclosurePanel
                        as="dd"
                        class="md:pr-12 mb-0 transform transition-all"
                      >
                        <div class="acc_content clearfix">
                          <p>
                            To ensure funds raised through M-Changa are not
                            misappropriated, we take caution to ensure all
                            fundraisers are Verified.
                          </p>
                          <p>The Verification process includes:</p>
                          <ol class="list-decimal">
                            <li>Identity Check</li>
                            <li>Recorded Phone Survey</li>
                            <li>Supporting Documents</li>
                            <li>Treasurers</li>
                            <li>Customer Care Review</li>
                          </ol>
                          <p>
                            We advise all fundraisers to get Verified as soon as
                            possible to avoid account restrictions such as:
                          </p>
                          <ol class="list-decimal">
                            <li>Being unable to accept Credit Card Payments</li>
                            <li>Being unable to withdraw funds</li>
                          </ol>
                          <p>
                            Fundraiser Verification depends on a number of
                            factors and varies from one fundraiser to another.
                            Our policies are being constantly updated for the
                            safety of fundraiser and contributor funds, please
                            contact our dedicated Customer Care team
                            (020-765-0919) for further guidance on Verification.
                          </p>
                        </div>
                      </DisclosurePanel>
                    </transition>
                  </Disclosure>
                </dl>
                <dl class="accordion-item">
                  <Disclosure as="div" v-slot="{ open }">
                    <dt class="text-lg">
                      <DisclosureButton
                        class="text-left w-full flex justify-between items-center text-gray-400"
                      >
                        <h3 class="text-secondary mb-0">
                          Will M-Changa Help Me To Raise Funds? (Fundraising
                          Tips)
                        </h3>
                        <span class="md:ml-6 h-7 flex items-center">
                          <MinusCircleIcon
                            :class="[
                              open ? 'inline-block' : 'hidden',
                              'h-5 md:h-9 w-5 md:w-9 text-secondary',
                            ]"
                            aria-hidden="true"
                          />
                          <PlusCircleIcon
                            :class="[
                              open ? 'hidden' : 'inline-block',
                              'h-5 md:h-9 w-5 md:w-9 text-secondary',
                            ]"
                            aria-hidden="true"
                          />
                        </span>
                      </DisclosureButton>
                    </dt>
                    <transition name="fade">
                      <DisclosurePanel
                        as="dd"
                        class="md:pr-12 mb-0 transform transition-all"
                      >
                        <div class="acc_content clearfix">
                          <p>
                            Our platform was designed to give fundraisers the
                            highest rate of success through convenience,
                            security and transparency. When surveyed, over 80%
                            of fundraisers believed they had raised more because
                            of the platform.
                          </p>
                          <p>
                            Unfortunately, we can’t do your fundraising for you,
                            but we will assist where we can! Here are some tips
                            from M-Changa’s most successful fundraisers:
                          </p>
                          <ul class="list-disc">
                            <li>
                              Map Your Network
                              <ul class="list-disc">
                                <li>
                                  Make a list of people who can help you promote
                                  your campaign
                                </li>
                                <li>
                                  Make a list of people who live locally who
                                  might contribute
                                </li>
                                <li>
                                  Make a list of people who live nationally who
                                  might contribute
                                </li>
                                <li>
                                  Make a list of people who live internationally
                                  who might contribute
                                </li>
                              </ul>
                            </li>
                            <li>
                              Individuals give when they are
                              <strong>ASKED</strong>
                              <ul class="list-disc">
                                <li>
                                  Why do you need the funds? Give them a good
                                  reason to contribute
                                </li>
                                <li>
                                  How will the funds be spent? Clearly explain
                                  exactly how funds will be spent
                                </li>
                                <li>
                                  How much do you need to raise? ASK for a
                                  specific amount
                                </li>
                              </ul>
                            </li>
                            <li>
                              Plan to use multiple communication channels –
                              don't rely on social media alone!
                              <ul class="list-disc">
                                <li>
                                  E.g. Face-to-face, WhatsApp, Facebook,
                                  Twitter, Phone call, SMS etc.
                                </li>
                              </ul>
                            </li>
                            <li>
                              Set SMART goals
                              <ul class="list-disc">
                                <li><strong>S</strong> pecific</li>
                                <li><strong>M</strong> easurable</li>
                                <li><strong>A</strong> ctionable</li>
                                <li><strong>R</strong> ealistic</li>
                                <li><strong>T</strong> ime-Bound</li>
                              </ul>
                            </li>
                          </ul>
                          <p>
                            <strong
                              >E.g. Raising for a kidney operation at Kenyatta
                              Hospital, need to raise KES 350,000 for the
                              operation to be performed on 26th
                              February.</strong
                            >
                          </p>
                          <ul class="list-disc">
                            <li>
                              Personalise your fundraiser page
                              <ul class="list-disc">
                                <li>
                                  Use your story, pictures and videos on your
                                  fundraiser page to show contributors more
                                  about your cause and make them more likely to
                                  give
                                </li>
                              </ul>
                            </li>
                            <li>
                              Consider non-monetary benefits
                              <ul class="list-disc">
                                <li>
                                  Fundraising isn’t just about the money,
                                  sometimes people might not have funds
                                  available to give
                                </li>
                                <li>
                                  Some people might offer their time to help you
                                  raise awareness
                                </li>
                                <li>
                                  Some people might offer in-kind support such
                                  as transport
                                </li>
                              </ul>
                            </li>
                            <li>
                              Make the most of free resources online:
                              <ul class="list-disc">
                                <li>
                                  Take a free online course on fundraising with
                                  our partner Philanthropy University:
                                  https://philanthropyu.org/courses
                                </li>
                                <li>
                                  Hire a freelancer to help with your Social
                                  Media, try https://kuhustle.com or Fiverr.com
                                </li>
                                <li>
                                  Find free, relevant articles and downloads at:
                                  http://www.nptechforgood.com/
                                </li>
                              </ul>
                            </li>
                            <li>
                              If you're an organisation or a church, we have
                              some wonderful local & international partners:
                              <ul class="list-disc">
                                <li>
                                  Check out some great organisations in Kenya:
                                  www.yetu.org, www.globalgiving.org,
                                  www.kcdy.or.ke, www.eaag.org and www.kafp.org
                                </li>
                                <li>
                                  Register for a GlobalGiving Accelerator:
                                  www.globalgiving.org
                                </li>
                              </ul>
                            </li>
                          </ul>
                        </div>
                      </DisclosurePanel>
                    </transition>
                  </Disclosure>
                </dl>
                <dl class="accordion-item">
                  <Disclosure as="div" v-slot="{ open }">
                    <dt class="text-lg">
                      <DisclosureButton
                        class="text-left w-full flex justify-between items-center text-gray-400"
                      >
                        <h3 class="text-secondary mb-0">Other Questions</h3>
                        <span class="md:ml-6 h-7 flex items-center">
                          <MinusCircleIcon
                            :class="[
                              open ? 'inline-block' : 'hidden',
                              'h-5 md:h-9 w-5 md:w-9 text-secondary',
                            ]"
                            aria-hidden="true"
                          />
                          <PlusCircleIcon
                            :class="[
                              open ? 'hidden' : 'inline-block',
                              'h-5 md:h-9 w-5 md:w-9 text-secondary',
                            ]"
                            aria-hidden="true"
                          />
                        </span>
                      </DisclosureButton>
                    </dt>
                    <transition name="fade">
                      <DisclosurePanel
                        as="dd"
                        class="md:pr-12 mb-0 transform transition-all"
                      >
                        <div class="acc_content clearfix">
                          <h4>
                            What's the largest amount a donor can contribute to
                            my fundraiser via mobile money?
                          </h4>
                          <p>
                            Each mobile money donation is limited by maximum
                            sending limits per transaction for each network
                            (currently KES 150,000 on M-Pesa, Airtel Money and
                            Equitel).
                          </p>
                          <h4>
                            What is the maximum donation my fundraiser may
                            receive via Stripe or PayPal?
                          </h4>
                          <p>
                            Large donations are subject to security checks to
                            protect your fundraiser and should not exceed the
                            local currency equivalent of USD $10,000 per
                            transaction, unless through prior agreement with
                            M-Changa.
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
      </div>
      <div class="section nomargin">
        <div class="container">
          <div class="tabs side-tabs tabs-responsive faq-other-parts clearfix">
            <ul class="tab-nav clearfix">
              <li
                class="cursor-pointer"
                v-on:click="toggleTabs(1)"
                v-bind:class="{
                  'bg-transparent text-gray-400': openTab !== 1,
                  'text-green-100 active-tab bg-main': openTab === 1,
                }"
              >
                <span>Our Values</span><i class="icon-line-arrow-right"></i>
              </li>
              <li
                class="cursor-pointer"
                v-on:click="toggleTabs(2)"
                v-bind:class="{
                  'bg-transparent text-gray-400': openTab !== 2,
                  'text-green-100 active-tab bg-main': openTab === 2,
                }"
              >
                <span>Indemnity</span><i class="icon-line-arrow-right"></i>
              </li>
              <li
                class="cursor-pointer"
                v-on:click="toggleTabs(3)"
                v-bind:class="{
                  'bg-transparent text-gray-400': openTab !== 3,
                  'text-green-100 active-tab bg-main': openTab === 3,
                }"
              >
                <span>Prohibited Fundraisers</span
                ><i class="icon-line-arrow-right"></i>
              </li>
              <li
                class="cursor-pointer"
                v-on:click="toggleTabs(4)"
                v-bind:class="{
                  'bg-transparent text-gray-400': openTab !== 4,
                  'text-green-100 active-tab bg-main': openTab === 4,
                }"
              >
                <span>Terms of Use</span><i class="icon-line-arrow-right"></i>
              </li>
              <li
                class="cursor-pointer"
                v-on:click="toggleTabs(5)"
                v-bind:class="{
                  'bg-transparent text-gray-400': openTab !== 5,
                  'text-green-100 bg-main': openTab === 5,
                }"
              >
                <span>Privacy Policy</span><i class="icon-line-arrow-right"></i>
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
                <p>
                  M-Changa's mission is to empower fundraising for Kenyans, by
                  Kenyans. Transparency is extremely important to us and guides
                  us in all activities. You can find details about our policies
                  by clicking on the links below:
                </p>
                <ul class="fancy-list">
                  <li>
                    <a href="#"
                      >Our Commitment to Transparency, Fraud Prevention, and
                      Excellence.</a
                    >
                  </li>
                  <li>
                    <a href="#">Fundraiser & Contributor Bill of Rights.</a>
                  </li>
                  <li>
                    <a href="#"
                      >Fundraiser Rights and Responsibilities for Credit Card
                      Transactions.</a
                    >
                  </li>
                </ul>
              </div>
              <div
                class="tab-content clearfix"
                v-bind:class="{
                  hidden: openTab !== 2,
                  block: openTab === 2,
                }"
              >
                <p>
                  M-Changa is a content neutral provider of mobile alerts,
                  fundraising applications, and related services. As such,
                  M-Changa does not endorse any product, service, political
                  party, or viewpoint. M-Changa reserves the right to monitor
                  content on its systems and remove any that in its sole opinion
                  M-Changa finds misleading, offensive, or otherwise
                  inappropriate.
                </p>
              </div>
              <div
                class="tab-content clearfix"
                v-bind:class="{
                  hidden: openTab !== 3,
                  block: openTab === 3,
                }"
              >
                <p>
                  Fundraiser owners are not allowed to raise funds for illegal
                  activities, to cause harm to people or property, or to scam
                  others. Fundraiser campaigns must comply with applicable laws
                  and regulations in connection with their campaigns. Fundraiser
                  owners shall not make any false or misleading statements in
                  connection with their campaigns. Fundraiser owners are
                  prohibited from engaging in impersonation, copyright and
                  patent infringement of any kind. Fundraising for political
                  purposes directly related to election events are strictly
                  prohibited as per the laws of the Republic of Kenya.
                </p>
              </div>
              <div
                class="tab-content clearfix"
                v-bind:class="{
                  hidden: openTab !== 4,
                  block: openTab === 4,
                }"
              >
                <p>
                  To read detailed terms and conditions for M-Changa please see
                  our Terms of Use.
                </p>
              </div>
              <div
                class="tab-content clearfix"
                v-bind:class="{
                  hidden: openTab !== 5,
                  block: openTab === 5,
                }"
              >
                <p>
                  Once approved, you're fundraiser may automatically qualify to
                  be published on changa.co.ke. At anytime you may request to
                  have your fundraiser "not listed" or removed from changa.co.ke
                  by contacting support@changa.co.ke For more details see the
                  M-Changa privacy policy.
                </p>
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
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue';
import { PlusCircleIcon, MinusCircleIcon } from '@heroicons/vue/outline';
import Breadcrumbs from '../components/Breadcrumbs.vue';
import QuestionBottom from '../components/QuestionBottom.vue';
import Footer from '../components/Footer/index.vue';

export default {
  components: {
    Breadcrumbs,
    QuestionBottom,
    Footer,
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
    PlusCircleIcon,
    MinusCircleIcon,
  },
  data() {
    return {
      openTab: 1,
    };
  },
  methods: {
    toggleTabs(tabNumber) {
      this.openTab = tabNumber;
    },
  },
};
</script>
