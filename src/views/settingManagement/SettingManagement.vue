<template>
  <section class="announcement">
    <h2>設定管理</h2>
    <div class="content_main">
      <table>
        <tr>
          <td>設定權限</td>
          <td>
            <input 
            type="checkbox" name="" id="">
             所有人
          </td>
          <td>
                        <input 
            type="checkbox" name="" id="">
             管理者
          </td>
        </tr>
        <tr>
          <td>設定管理者姓名</td>
          <td colspan="2">
            <select>
                    <option selected=""></option>
                    <option>鄭竣謙</option>
                    <option>陳建廷</option>
                    <option>賴聲翔</option>
                    <option>邱念佳</option>
                    <option>陳顥文</option>
                    <option>劉凱帆</option>
                    <option>吳禹澔</option>
                    <option>李家萱</option>
                    <option>黃宸緯</option>
                    <option>潘思融</option>
                    <option>陳宜欣</option>
                    <option>郭立欣</option>
                    <option>劉祥生</option>
                    <option>王珮慈</option>
                    <option>黃國財</option>
                    <option>鄒佩鈞</option>
                    <option>林靜</option>
                    <option>林蓉蔚</option>
                    <option>林建宏</option>
                    <option>劉勝登</option>
                    <option>劉芳妤</option>
                    <option>高沛辰</option>
                    <option>尤思涵</option>
                    <option>吳思葦</option>
                    <option>歐陽沁縈</option>
                    <option>鄭羽涵</option>
                    <option>劉家羽</option>
                    <option>張長青</option>
                    <option>呂冠元 </option>
                    <option>陳永村</option>
                    <option>許佳雯</option>
                    <option>曾祥維</option>
                    <option>蔡佩珊</option>
                    <option>黃信豪</option>
                    <option>林琪臻</option>
                  </select>
          </td>
        </tr>
        <tr>
          <td colspan="3" class="td_button">
            <button class="btn">儲存</button>
            <button class="btn">取消</button>
            
          </td>
          
        </tr>
      </table>


    </div>
  </section>
</template>

<script>
export default {
  name: "settingManagement"
  
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
      overflow-y: scroll;
      height: 290px;
      color: #373f41;

      table {
        border-style: hidden;
        width: 500px;
        margin: 0 auto;
        tr {
          border-style: hidden;
          td {
            border-style: hidden;
            font-size: 20px;
            padding-bottom: 30px;

            &.td_button {
              text-align: center;
            }
            

            select {
              width: 250px;
              padding:6px;
            }

            button {
              background: #ff8b7c;
              color: #fff;
              width: 100px;
              margin-left: 20px;
            }
          }
        }
      }
    }
  }
}

</style>