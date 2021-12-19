<template>
  <header class="shadow-md" id="header">
    <div id="header-wrap">
      <div class="container clearfix">
        <div id="primary-menu-trigger">
          <img
            src="@/assets/images/ic-menu-hamburger.png"
            class="hamburger-off"
          />
          <img src="@/assets/images/ic-menu-close.png" class="hamburger-on" />
        </div>
        <div id="logo">
          <a href="index.html" class="standard-logo"
            ><img src="@/assets/images/logo-standard.png" alt="M-Changa Logo"
          /></a>
          <a href="index.html" class="retina-logo"
            ><img src="@/assets/images/logo-standard.png" alt="M-Changa Logo"
          /></a>
        </div>
        <div class="header-login">
          <a href="#" class="button">Login</a>
        </div>
        <nav id="primary-menu">
          <ul>
            <li>
              <a href="#"><div>Start a Fundraiser</div></a>
            </li>
            <li>
              <a href="#"><div>Blog</div></a>
            </li>
            <li>
              <a href="#"><div>Resources</div></a>
            </li>
            <li class="other-menu-items">
              <div class="dropdown">
                <a
                  href="#"
                  class="other-menu-toggle"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="true"
                >
                  <div class="nav-desktop d-none d-xl-block">
                    <img
                      src="@/assets/images/ic-menu-hamburger.png"
                      class="hamburger-off"
                    />
                    <img
                      src="@/assets/images/ic-menu-close.png"
                      class="hamburger-on"
                    />
                  </div>
                  <div class="nav-mobile d-block d-md-none">
                    <span>More</span>
                    <img src="@/assets/images/dropdown-arrow.png" />
                  </div>
                </a>
                <ul class="dropdown-menu" aria-labelledby="dropdownMenu1">
                  <a class="dropdown-item" href="#">About Us</a>
                  <a class="dropdown-item" href="#">Mobile Fundraising</a>
                  <a class="dropdown-item" href="#">Online Fundraising</a>
                  <a class="dropdown-item" href="#">Champion</a>
                  <a class="dropdown-item" href="#">Communities</a>
                  <a class="dropdown-item" href="#">M-Changa Communities</a>
                  <a class="dropdown-item" href="#">Questions</a>
                </ul>
              </div>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </header>
</template>
