<template>
  <section class="announcement">
    <h2>公告</h2>
    <div class="content_main">
      <div>日期</div>
      <div>內容</div>
      <div>2021/05/03</div>
      <div>點餐系統上線囉 => 左上角選單 > Systex_B216 > 點餐</div>
      <div>2021/07/20</div>
      <div>請注意:飲料選擇店家不提供的甜度冰塊 會自動選擇講究喝法</div>
      <div>2021/05/03</div>
      <div>點餐系統上線囉 => 左上角選單 > Systex_B216 > 點餐</div>
      <div>2021/07/20</div>
      <div>請注意:飲料選擇店家不提供的甜度冰塊 會自動選擇講究喝法</div>
      <div>2021/05/03</div>
      <div>點餐系統上線囉 => 左上角選單 > Systex_B216 > 點餐</div>
      <div>2021/07/20</div>
      <div>請注意:飲料選擇店家不提供的甜度冰塊 會自動選擇講究喝法</div>
      <div>2021/05/03</div>
      <div>點餐系統上線囉 => 左上角選單 > Systex_B216 > 點餐</div>
      <div>2021/07/20</div>
      <div>請注意:飲料選擇店家不提供的甜度冰塊 會自動選擇講究喝法</div>
      <div>2021/05/03</div>
      <div>點餐系統上線囉 => 左上角選單 > Systex_B216 > 點餐</div>
      <div>2021/07/20</div>
      <div>請注意:飲料選擇店家不提供的甜度冰塊 會自動選擇講究喝法</div>
      <div>2021/05/03</div>
      <div>點餐系統上線囉 => 左上角選單 > Systex_B216 > 點餐</div>
      <div>2021/07/20</div>
      <div>請注意:飲料選擇店家不提供的甜度冰塊 會自動選擇講究喝法</div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Announcement"
}
</script>

<style lang="scss" scoped>
section {
  &.announcement {
    width: 700px;
    min-height: 300px;
    background-color: #fff;
    padding: 5px 50px 8px 50px;
    margin: 100px auto 0;
    border-radius: 8px;

    h2 {
      color: #666;
      text-align: center;
      padding-top: 10px;
    }

    .content_main {
      margin-top: 24px;
      display: grid;
      grid-template-columns: 210px 410px;
      overflow-y: scroll;
      height: 290px;
      color: #373f41;

      div {
        padding: 16px 8px;
        border-bottom: 1px solid #e5e5e5;

        &:nth-child(n + 1) {
          display: inline-flex;
          align-items: center;
        }
      }
    }
  }
}
</style>