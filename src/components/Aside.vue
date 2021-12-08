<template>
  <aside>
    <nav>
      <ul>
        <li>
          <router-link to="/announcement">
            <i class="fas fa-home"></i>
            <span>公告</span>
          </router-link>
        </li>
        <li>
          <router-link to="/order">
            <i class="fas fa-utensils"></i>
            <span>點餐</span>
          </router-link>
        </li>
        <li>
          <router-link to="/personal_order_record">
            <i class="fas fa-search"></i>
            <span>個人點餐記錄查詢</span>
          </router-link>
        </li>
        <li>
          <router-link to="/personal-information">
            <i class="fas fa-user"></i>
            <span>個人資料修改</span>
          </router-link>
        </li>
        <li>
          <router-link to="/setting_managment">
            <i class="fas fa-cog"></i>
            <span>設定管理</span>
          </router-link>
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
  background-color: #ffcbb3;
  position: fixed;

  ul {
    margin-top: 20px;

    li {
      a {
        display: inline-block;
        width: 100%;
        padding: 15px;
        cursor: pointer;
        color: #292929;

        &:hover {
          background-color: #e6f7ff;

          i {
            color: #ff8b7c;
          }
        }

        i {
          margin-right: 13px;
          width: 18px;
        }
      }
    }
  }
}
</style>