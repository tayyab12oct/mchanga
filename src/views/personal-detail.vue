<template>
  <section id="content">
    <div class="section nobg nomargin">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-md-8">
            <div class="heading-block center pb-0 mb-4">
              <h2>Enter Your Personal Details</h2>
            </div>
            <p class="center">
              Please Note That Your ID/ Passport Number and Year of Birth will
              be kept private!
            </p>
            <form class="form-register-wrapper">
              <div class="form-group">
                <input
                  type="text"
                  class="form-control"
                  placeholder="National ID/Passport *"
                  name=""
                />
              </div>
              <div class="row">
                <div class="col-md-6">
                  <div class="form-group">
                    <input
                      type="tel"
                      class="form-control"
                      placeholder="Phone Number"
                      name=""
                    />
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="form-group">
                    <select class="form-control">
                      <option>Year of Birth</option>
                      <option>1960</option>
                      <option>1970</option>
                      <option>1980</option>
                      <option>1990</option>
                      <option>2000</option>
                    </select>
                  </div>
                </div>
              </div>
              <div class="form-submit center flex justify-center">
                <a href="#" class="button">next</a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
