<template>
  <div>
    <nav>
      <div @click="changeCurrentlyClick('lunch')">午餐</div>
      <div @click="changeCurrentlyClick('dessert')">點心</div>
      <div @click="changeCurrentlyClick('drinks')">飲料</div>
      <div @click="changeCurrentlyClick('uploadMenu')">上傳菜單</div>
      <div>報表下載</div>
      <div>金主設定</div>
      <div>餘額查詢與充值</div>
    </nav>

    <!-- 午餐 -->
    <Lunch v-if="currentlyClick === 'lunch'" />
    <!-- 點心 -->
    <Dessert v-else-if="currentlyClick === 'dessert'" />
    <!-- 飲料 -->
    <Drinks v-else-if="currentlyClick === 'drinks'" />
    <!-- 上傳菜單 -->
    <UploadMenu v-else-if="currentlyClick === 'uploadMenu'" />
  </div>
</template>

<script>
import Lunch from "@/components/order/Lunch.vue";
import Dessert from '@/components/order/Dessert.vue';
import Drinks from '@/components/order/Drinks.vue';
import UploadMenu from "@/components/order/UploadMenu.vue";

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
    UploadMenu
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