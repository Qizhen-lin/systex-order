<template>
  <div>
    <Header />
    <div class="content-main">
      <Aside />
      <article>
        <!-- 其他分頁 -->
        <router-view />
      </article>
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';
import Aside from '@/components/Aside.vue';
// import Announcement from "./announcement/Announcement.vue";

export default {
  name: "Login_page",
  components: {
    Header,
    Aside,
    Footer,
    // Announcement
  }
}

</script>

<style lang="scss" scoped>
.content-main {
	margin-top: 63px;
	display: flex;
}

</style>