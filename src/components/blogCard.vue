<template>
  <div class="post-item-wrapper">
    <div class="post-image-categories">
      <img src="@/assets/images/blog-thumbnail.jpg" class="featured-image" />
      <div class="meta-category">Fundraiser Stories</div>
    </div>
    <div class="post-summaries">
      <router-link to="">
        <h3 class="post-title">Paukwa? Pakawa!</h3>
      </router-link>
      <p class="post-excerpt">
        When you think back to many of the cultures, beliefs and practices you
        know of, does a story come to mind? I bet that a story does come to
        mind. This familiarity is a subtle resemblance of the togetherness
        stories
      </p>
    </div>
    <div class="post-footer px-0 md:mx-4">
      <div class="meta-date text-sm">Tuesday, June 8th, 2021</div>
      <div class="meta-social">
        <router-link to=""
          ><img src="@/assets/images/ic-share-fb.png"
        /></router-link>
        <router-link to=""
          ><img src="@/assets/images/ic-share-twitter.png"
        /></router-link>
        <router-link to=""
          ><img src="@/assets/images/ic-share-wa.png"
        /></router-link>
        <router-link to="" class="mr-0"
          ><img src="@/assets/images/ic-share-telegram.png"
        /></router-link>
      </div>
    </div>
  </div>
</template>
