<template>
  <section>
        <h2> 個人資料修改</h2>
        <div>
          <table>
            <tr>
              <td>姓名</td>
              <td>
                <input type="text" v-model="name">
              </td>
            </tr>
            <tr>
              <td>帳號</td>
              <td>
                <input type="text" v-model="adaccount">
              </td>
            </tr>
            <tr>
              <td>工號</td>
              <td>
                <input type="text" v-model="numberid">
              </td>
            </tr>
            <tr>
              <td>打卡 ID</td>
              <td>
                <input type="text" v-model="clock_id">
              </td>
            </tr>
            <tr>
              <td>部門</td>
              <td>
                <input type="text" v-model="department">
              </td>
            </tr>
            <tr>
              <td>職稱</td>
              <td>
                <input type="text" v-model="title">
              </td>
            </tr>
            <tr>
              <td>到職日</td>
              <td>
                <input type="text" v-model="startday">
              </td>
            </tr>
            <tr>
              <td>地區</td>
              <td>
                <input type="text" v-model="company">
              </td>
            </tr>
            <tr>
              <td>代理人一</td>
              <td>
                <input type="text" v-model="agentA">
              </td>
            </tr>
            <tr>
              <td>代理人二</td>
              <td>
                <input type="text" v-model="agentB">
              </td>
            </tr>

            <tr>
              <td>Email</td>
              <td>
                <input type="text" v-model="mail">
              </td>
            </tr>
            <tr>
              <td>新密碼</td>
              <td>
                <input type="text" v-model="Password">
              </td>
            </tr>
            <tr>
              <td>確認新密碼</td>
              <td>
                <input type="text" v-model="Password">
              </td>
            </tr>
          </table>
        </div>
      </section>
</template>

<script>
import axios from 'axios'
 // eslint-disable-next-line no-undef
//  Vue.prototype.axios = axios
//  axios.defaults.baseURL = '/api'
export default {
  name: "PersonalInformation",
  data() {
    return {
      id: 0,
      name: null,
      clock_id: null,
      numberid: null,
      startday: null,
      title: null,
      department: null,
      adaccount: null,
      LeaveAll: null,
      state: null,
      RightIds: null,
      Balance: null,
      Leaveex: null,
      lastday: null,
      Password: null,
      agentA: null,
      agentB: null,
      mail: null,
      company: null,
      userid: null,
      memberof: null,
      domain: null,
      dn: null
    }
  },
  created() {
    const self = this;
  axios.get('http://ethan5420.synology.me:52000/UserInfo/EmpolyeeInfo?UID=2100722') 
   .then(response => {
      console.log("response", response);
        self.id = "response.id";
        self.name = "response.name";
        self.clock_id = "response.clock_id";
        self.numberid = "response.numberid";
        self.startday = "response.startday";
        self.title = "response.title";
        self.department = "response.department";
        self.adaccount = "response.adaccount";
        self.LeaveAll = "response.LeaveAll";
        self.state = "response.state";
        self.RightIds = "response.RightIds";
        self.Balance = "response.Balance";
        self.Leaveex = "response.Leaveex";
        self.lastday = "response.lastday";
        self.Password = "response.Password";
        self.agentA = "response.agentA";
        self.agentB = "response.agentB";
        self.mail = "response.mail";
        self.company = "response.company";
        self.userid = "response.userid";
        self.memberof = "response.memberof";
        self.domain = "response.domain";
        self.dn = "response.dn";
      }
   ).catch(error=>{
    console.log(error);
  })
    
    // fetch('/ethan5420/EmployeeManage/EmpolyeeInfo?UID=2100722', { method: 'GET'})
    //   .then(function(response) {
    //     console.log("response", response);
    //     // 找 response 內容，加在雙引號裡
    //     self.id = "";
    //     self.name = "";
    //     self.clock_id = "";
    //     self.numberid = "";
    //     self.startday = "";
    //     self.title = "";
    //     self.department = "";
    //     self.adaccount = "";
    //     self.LeaveAll = "";
    //     self.state = "";
    //     self.RightIds = "";
    //     self.Balance = "";
    //     self.Leaveex = "";
    //     self.lastday = "";
    //     self.Password = "";
    //     self.agentA = "";
    //     self.agentB = "";
    //     self.mail = "";
    //     self.company = "";
    //     self.userid = "";
    //     self.memberof = "";
    //     self.domain = "";
    //     self.dn = "";
    //   }).catch(function(err) {
    //     console.console.log("err", err);
    //   });
  },
}
</script>

<style lang="scss" scoped>
section {
	h2 {
		text-align: center;
		margin: 30px 0;
		color: #ff2d2d;
	}

	div {
		border-radius: 6px;
		border: 1px solid #ff2d2d;
		overflow: hidden;
		width: 466px;
		margin: auto;
		background: #fff;
		padding: 30px 0;
		table {
			border: 0 !important;
			margin: 0 auto;
			tr {
				border: 0 !important;
				td {
					padding-top: 10px;
					background: #fff;
					border: 0 !important;
					font-size: 18px;
					font-weight: bold;
					color: #292929;

					input {
						padding: 4px 6px 4px 12px;
						border-radius: 4px;
						border: solid 1px #eee;
						background-color: #f3f3f3;
					}
				}
			}
		}
	}
}

</style>