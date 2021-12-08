<template>
  <div>
    <nav>
      <div @click="changeCurrentlyClick('lunch')">
        <span><i class="fas fa-hamburger"></i></span>
        午餐</div>
      <div @click="changeCurrentlyClick('dessert')">
        <span><i class="fas fa-cheese"></i></span>
        點心</div>
      <div @click="changeCurrentlyClick('drinks')">
        <span><i class="fas fa-coffee"></i></span>
        飲料</div>
      <div @click="changeCurrentlyClick('uploadMenu')">
        <span><i class="fas fa-upload"></i></span>
        上傳菜單</div>
      <div>
       <span><i class="fas fa-file-excel"></i></span> 報表下載</div>
      <div @click="changeCurrentlyClick('funderSetting')">
       <span><i class="fas fa-credit-card"></i></span> 金主設定</div>
      <div @click="changeCurrentlyClick('balancerecharge')">
       <span><i class="fas fa-search-dollar"></i></span> 餘額查詢與充值</div>
    </nav>

    <!-- 午餐 -->
    <Lunch v-if="currentlyClick === 'lunch'" />
    <!-- 點心 -->
    <Dessert v-else-if="currentlyClick === 'dessert'" />
    <!-- 飲料 -->
    <Drinks v-else-if="currentlyClick === 'drinks'" />
    <!-- 上傳菜單 -->
    <UploadMenu v-else-if="currentlyClick === 'uploadMenu'" />
    <!-- 金主設定 -->
    <FunderSetting v-else-if="currentlyClick === 'funderSetting'"/>
    <!-- 餘額查詢與充值 -->
    <Balancerecharge v-else-if="currentlyClick === 'balancerecharge'" />
  </div>
</template>

<script>
import Lunch from "@/components/order/Lunch.vue";
import Dessert from '@/components/order/Dessert.vue';
import Drinks from '@/components/order/Drinks.vue';
import UploadMenu from "@/components/order/UploadMenu.vue";
import FunderSetting from '@/components/order/FunderSetting.vue';
import Balancerecharge from "@/components/order/Balancerecharge.vue";

export default {
  name: "Order",
  data() {
    return {
      currentlyClick: "lunch"
    }
  },
  components: {
    Lunch,
    Dessert,
    Drinks,
    UploadMenu,
    FunderSetting,
    Balancerecharge
  },
  methods: {
    changeCurrentlyClick(type) {
      this.currentlyClick = type;
    }
  },
}
</script>

<style lang="scss" scoped>
nav {
  display: flex;
  justify-content: space-around;
  align-items: center;
  background: #ff5809;

  div {
    color: #f3f3f3d8;
    cursor: pointer;
    text-align: center;
    font-size: 18px;
    padding: 4px;

    &:hover {
      background-color: #ff8b7c;
      border-radius: 3px;
    }
  }
}
</style>