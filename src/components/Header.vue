<template>
  <header>
    <div>
      <h1>
				<router-link to="/" title="SYSTEX">
					<span>Tea Time </span>
					<span>點餐趣</span>
        </router-link>
        
      </h1>
    </div>
    <div class="personal">
      <ul>
        <li>
          <i class="far fa-bell"></i>
        </li>
        <li>
          Hi, 2100722
          <img
            src="@/assets/personal.png"
            alt=""
          >
        </li>
        <li>
          <button class="btn">Logout</button>
        </li>
      </ul>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header"
}
</script>

<style lang="scss" scoped>
header {
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: space-between;
	border-bottom: 1px solid rgba(114, 112, 112, 0.445);
	// box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
	position: fixed;
	top: 0;
	background-color: #fff;

	h1 {
		margin: 0 0 0 20px;

		img {
			width: 100px;
			vertical-align: middle;
			margin-right: 11px;
		}

		span {
			font-size: 24px;
			color: #ff5809;
			font-weight: bold;

			&:first-child {
				font-size: 36px;
				color: #666;
			}
		}

		img,
		span,
		i {
			cursor: pointer;
		}
	}

	.personal {
		ul {
			display: flex;
			align-items: center;

			li {
				padding-right: 16px;

				&:nth-child(1) {
					.fa-bell {
						font-size: 24px;
						color: #ff8b7c;
					}
				}

				&:nth-child(2) {
					color: #666;

					img {
						width: 50px;
						height: 50px;
						border-radius: 50%;
						margin-left: 8px;
					}
				}

				&:nth-child(3) {
					.btn {
						background: #ff8b7c;
						color: #fff;
					}
				}
			}
		}
	}
}
</style>