<template>
  <article class="container">
    <div class="logo_style_block">
      <div class="img_block">
        <a href="index.html">
          <h1>
            <img
              src="@/assets/infinitus-removebg-preview.png"
              alt=""
            >
            <span>點餐趣</span>
          </h1>
        </a>
      </div>
    </div>
    <div class="order_title mb-3">
      你今天點餐了嗎?
    </div>
    <div class="input_style">
      <div class="form">
        <div class="mb-3">
          <input
            v-model="login_account"
            type="text"
            class="form-control"
            id="login_account"
            placeholder="Login Account"
            onfocus="this.placeholder=''"
            onblur="this.placeholder='Login Account'"
          >
        </div>
        <div class="mb-3">
          <input
            v-model="login_password"
            type="password"
            class="form-control"
            id="exampleInputPassword1"
            placeholder="Password"
            onfocus="this.placeholder=''"
            onblur="this.placeholder='Password'"
          >
        </div>
        <div class="mb-3 form-check">
          <input
            type="checkbox"
            class="form-check-input"
            id="exampleCheck1"
          >
          <label
            class="form-check-label"
            for="exampleCheck1"
          > Remember me
          </label>
        </div>
        <button
          @click="checkBtn"
          type="submit"
          class="btn"
        >
          Sign in
        </button>
      </div>
    </div>
  </article>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      login_account: "",
      login_password: ""
    }
  },
  methods: {
    checkBtn() {
      if (!this.login_account || !this.login_password) { // 當他的值不存在時做的事
        alert("請輸入帳號密碼");
        return;
      }
      location.href = "/login_page";
    }
  }
}
</script>

<style>

</style>

<style lang="scss" scoped>
a {
	text-decoration: none;
}

.logo_style_block {
	margin: 0 auto;
	width: 100%;
	text-align: center;
	display: flex;
	justify-content: space-between;

	.img_block {
		width: 100%;
		margin: 0 auto;

		h1 {
			display: flex;
			align-items: center;
			justify-content: center;

			span {
				font-size: 32px;
				color: #ff5809;
				padding-bottom: 1.5%;
			}
		}
	}
}

.container {
	width: 100%;
	padding: 7%;
	position: relative;
	height: 90vh;

	// background-image: url(/img/food_bg_6.jpeg);
	opacity: 0.9;
	background-repeat: no-repeat;
	border-radius: 20px;

	.order_title {
		line-height: 32px;
		font-size: 36px;
		letter-spacing: 1px;
		text-align: center;
		font-weight: 500;
		color: #ff5151;
	}

	.input_style {
		.form {
			width: 40%;
			margin: 0 auto;
		}

		button {
			width: 50%;
			margin-left: 25%;
			background-color: #ff8b7c;
			color: #fff;
		}
	}

	.form-check-label {
		color: #666;
	}
}

footer {
	background: #373f41;
	padding: 8px 0;
	text-align: center;
	margin-top: 60px;
	color: #c3cbcd;
}
</style>