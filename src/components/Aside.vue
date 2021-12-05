<template>
  <aside>
    <nav>
      <ul>
        <li>
          <i class="fas fa-home"></i>
          <span>公告</span>
        </li>
        <li>
          <i class="fas fa-utensils"></i>
          <span>點餐</span>
        </li>
        <li>
          <i class="fas fa-search"></i>
          <span>個人點餐記錄查詢</span>
        </li>
        <li>
          <i class="fas fa-user"></i>
          <span>個人資料修改</span>
        </li>
        <li>
          <i class="fas fa-cog"></i>
          <span>設定管理</span>
        </li>
      </ul>
    </nav>
  </aside>
</template>

<script>
export default {
  name: "Aside"
}
</script>

<style lang="scss" scoped>
aside {
  width: 250px;
  height: calc(100vh - 62px);
  background-color: #f3f3f3;
  position: fixed;

  ul {
    margin-top: 20px;

    li {
      padding: 15px;
      cursor: pointer;

      &:hover {
        background-color: #e6f7ff;

        i {
          color: #ff8b7c;
        }
      }

      i {
        margin-right: 8px;
        width: 18px;
      }
    }
  }
}
</style>