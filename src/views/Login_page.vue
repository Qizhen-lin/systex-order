<template>
  <div>
    <Header />
    <div class="content-main">
      <Aside />
      <article>
        <nav>
          <div>午餐</div>
          <div>點心</div>
          <div>飲料</div>
          <div>上傳菜單</div>
          <div>報表下載</div>
          <div>金主設定</div>
          <div>餘額查詢與充值</div>
        </nav>
        <!-- 公告 -->
        <Announcement />
      </article>
    </div>

    <Footer />

  </div>
</template>

<script>
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';
import Aside from '@/components/Aside.vue';
import Announcement from "./announcement/Announcement.vue";

export default {
  name: "Login_page",
  components: {
    Header,
    Aside,
    Footer,
    Announcement
  }
}
</script>

<style lang="scss" scoped>
.content-main {
	margin-top: 63px;
	display: flex;

	article {
		min-height: calc(100vh - 102px);
		background-color: #ffe6d9;
		padding-bottom: 90px;
		margin-left: 250px;
		width: 100%;
		background-image: url(/img/dinner_bg.jpeg);
		background-repeat: no-repeat;
		background-position: center center;
		background-size: cover;
		background-color: rgba(0, 0, 0, 0.1);
		background-blend-mode: multiply;

		
	}
}

</style>