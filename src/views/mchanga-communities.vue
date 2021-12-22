<template>
  <div>
    <Breadcrumbs
      :src="require('@/assets/images/top-banner-mcommunities.jpg')"
      breadcrumb="M-CHANGA Communities"
      title="M-CHANGA Communities"
    />
    <section id="content">
      <div class="section nobg nomargin">
        <div class="container">
          <div class="row mchanga-communities-wrapper">
            <div class="col-md-4" v-for="n in 9" :key="n">
              <YetuCard />
            </div>
            <div class="col-md-12 mchanga-communities-footer">
              <Pagination />
              <router-link to="" class="transition-all"
                >Learn More About Communities &raquo;</router-link
              >
            </div>
          </div>
        </div>
      </div>
      <QuestionBottom />
    </section>
  </div>
</template>

<script>
import Breadcrumbs from "../components/Breadcrumbs.vue";
import QuestionBottom from "../components/QuestionBottom.vue";
import YetuCard from "../components/YetuCard.vue";
import Pagination from "../components/Pagination.vue";
export default {
  components: {
    Breadcrumbs,
    QuestionBottom,
    YetuCard,
    Pagination,
  },
};
</script>
