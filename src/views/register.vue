<template>
  <div>
    <section id="content">
      <div class="content-wrap py-0">
        <div class="section nobg nomargin">
          <div class="container">
            <div class="row justify-content-center">
              <div class="col-md-8">
                <div class="heading-block center">
                  <h2>Register an Online Fundraiser</h2>
                </div>
                <p class="center">
                  As the manager of this Fundraiser, please enter YOUR details
                  below:
                </p>
                <form class="form-register-wrapper">
                  <div class="form-group">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Email Address*"
                      name=""
                    />
                  </div>
                  <div class="form-group">
                    <input
                      id="fundraiser-name"
                      type="text"
                      class="form-control"
                      placeholder="Fundraiser / Cause name*"
                      maxlength="35"
                      name=""
                    />
                    <div class="text-right text-xs md:text-base">
                      <span>0</span>/35
                    </div>
                  </div>
                  <div class="form-group">
                    <select class="form-control">
                      <option>Select Your Fundraiser / cause type</option>
                      <option>Type 1</option>
                      <option>Type 2</option>
                      <option>Type 3</option>
                      <option>Type 4</option>
                      <option>Type 5</option>
                    </select>
                  </div>
                  <div class="form-group">
                    <select class="form-control">
                      <option>Set fundraiser duration</option>
                      <option>Duration 1</option>
                      <option>Duration 2</option>
                      <option>Duration 3</option>
                      <option>Duration 4</option>
                      <option>Duration 5</option>
                    </select>
                  </div>
                  <div class="form-group">
                    <input
                      type="number"
                      class="form-control"
                      placeholder="How much do you want to raise?*"
                      name=""
                    />
                  </div>
                  <div class="form-group">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Input Referral Code (optional)"
                      name=""
                    />
                  </div>
                  <div class="form-submit center">
                    <div class="flex justify-center">
                      <router-link to="/activate-your-fundraiser"
                      class="button mx-auto w-44">next</router-link>
                    </div>

                    <p>
                      By clicking "Next", you agree to M-Changa's
                      <a href="#">Terms & Conditions</a>
                    </p>
                    <p>
                      * Not Online? Raising a small amount? Dial
                      <strong>*483*57#</strong>
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
