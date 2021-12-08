<template>
  <div>
    <Header />
    <div class="content-main">
      <Aside />
      <article :style="`background-image: url(${nowBgImg})`">
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

export default {
  name: "Login_page",
  data() {
    return {
      nowBgImg: require('@/assets/dessert.webp')
    }
  },
  components: {
    Header,
    Aside,
    Footer
  },
  watch: { // vue 的監聽方法
    $route(to) {
      // if 判斷式優化寫法(僅限 1 個判斷)
      const bgType = {
        Announcement: require('@/assets/dessert.webp'),
        Order: require('@/assets/asparagus-2169305_960_720.webp'),
        PersonalInformation: require('@/assets/dinner_bg.jpeg'),
        PersonalOrderRecord: require ('@/assets/pizza-2776188_960_720.jpeg'),
        SettingManagement: require ('@/assets/dessert.jpeg')
      };

      this.nowBgImg = bgType[to.name];

      // if (to.name === "Announcement") {
      //   this.nowBgImg = require('@/assets/dessert.webp');
      // } else if (to.name === "Order") {
      //   this.nowBgImg = require('@/assets/asparagus-2169305_960_720.webp');
      // } else if (to.name === "PersonalInformation") {
      //   this.nowBgImg = require('@/assets/dinner_bg.jpeg');
      // }
    }
  }
}
</script>

<style lang="scss" scoped>
.content-main {
	margin-top: 63px;
	display: flex;
}
</style>