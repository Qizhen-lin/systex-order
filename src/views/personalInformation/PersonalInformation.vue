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
    axios.get('http://ethan5420.synology.me:3030/api/Users/2100722')
      .then(response => {
        console.log("response", response);
          self.id = response.data.id;
          self.name = response.data.name;
          self.clock_id = response.data.clock_id;
          self.numberid = response.data.numberid;
          self.startday = response.data.startday;
          self.title = response.data.title;
          self.department = response.data.department;
          self.adaccount = response.data.adaccount;
          self.LeaveAll = response.data.LeaveAll;
          self.state = response.data.state;
          self.RightIds = response.data.RightIds;
          self.Balance = response.data.Balance;
          self.Leaveex = response.data.Leaveex;
          self.lastday = response.data.lastday;
          self.Password = response.data.Password;
          self.agentA = response.data.agentA;
          self.agentB = response.data.agentB;
          self.mail = response.data.mail;
          self.company = response.data.company;
          self.userid = response.data.userid;
          self.memberof = response.data.memberof;
          self.domain = response.data.domain;
          self.dn = response.data.dn;
        }
      ).catch(error => {
        console.log(error);
      });
  }
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