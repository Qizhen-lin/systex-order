<!-- 金主設定 -->
<template>
	<section class="sponsor">
			<div class="sponsor_set">金主設定</div>

			<div class="sponsor_blcok">

				<table>
					<tbody>
						<tr class="sponsor_menu">
							<td class="sponsor_name">選擇金主姓名
							</td>
							<td>
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
						<tr class="sponsored_meals">
							<td class="sponsored_item">選擇贊助餐點</td>
							<td>
								<button class="btn btn-outline-danger">午餐</button>
								<button class="btn btn-outline-danger">點心</button>
								<button class="btn btn-outline-danger">飲料</button>
							</td>

						</tr>
						<tr class="sponsored_submit">
							<td colspan="2">
								<button class="btn btn-info btn-lg">送出</button>
							</td>
						</tr>
					</tbody>
				</table>
				<hr>
				<section class="patron_details">
					<h2>今日金主名單</h2>
					<div class="patron_details_grid">
						<div class="patron_name">金主姓名</div>
						<div class="patron_item">金援項目</div>
						<div class="patron_set_user">此次設定人

						</div>
						<div class="patron_del">刪除</div>
						<div class="patron_name_content">林琪臻</div>
						<div class="patron_item_content">午餐</div>
						<div class="patron_set_user_content">林琪臻</div>
						<div>
							<button class="btn btn-primary">刪除</button>
						</div>
					</div>
				</section>
			</div>
	</section>
</template>

<script>
export default {
  name: "FunderSetting"
}
</script>

<style lang="scss" scoped>

.content-main {
	margin-top: 63px;
	display: flex;

	article {
		min-height: calc(100vh - 102px);
		background-color: #ddd;
		padding-bottom: 90px;
		margin-left: 250px;
		width: 100%;
		background-image: url(/img/dinner_bg.jpeg);
		background-repeat: no-repeat;
		background-position: center center;
		background-size: cover;
		background-color: rgba(0, 0, 0, 0.1);
		background-blend-mode: multiply;

		nav {
			display: flex;
			justify-content: space-around;
			align-items: center;
			background: #373f41;

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
	}

	.order_block,
	.dessert_block,
	.drinks_block,
	.upload_menu,
	.sponsor,
	.balance_recharge {
		width: 800px;
		margin: 20px auto 0;
		border: 1px solid #ddd;
		border-radius: 8px;
		background: #f3f3f3;
		overflow: hidden;

		.name,
		.dessert_name,
		.drinks_name,
		.upload_menu_name,
		.sponsor_set,
		.balance_recharge_search {
			text-align: center;
			font-size: 18px;
			font-weight: bold;
			color: rgba(255, 255, 255, 0.815);
			background: #ff8b7c;
			padding: 8px;
			margin-bottom: 10px;
		}

		.sponsor_set,
		.balance_recharge_search {
			margin-bottom: 30px;
		}

		.dessert_name {
			background: #4e91ff;
			color: #fff;
		}

		.drinks_name {
			background: #00afb8;
			color: #fff;
		}

		.order_status,
		.dessert_order_status,
		.drinks_order_status {
			text-align: center;
			margin: 20px auto;
			button {
				border-radius: 8px;
				font-size: 18px;
				background: #e6f9fa;
				border: #f04e2f;
				color: #666;
				font-weight: bold;
				margin-left: 8px;

				&:hover {
					background: #e94629;
					color: #fff;
				}
			}
		}

		.dessert_order_status {
			button {
				background: #ffeedf;

				&:hover {
					background: #f1550c;
				}
			}
		}

		.item_block,
		.dessert_item_block,
		.drinks_item_block,
		.upload_menu_item_block,
		.sponsor_blcok,
		.balance_recharge_block {
			width: 600px;
			margin: 0 auto;
			.food_name,
			.dessert_food_name,
			.drinks_food_name,
			.upload_menu_food_file {
				font-size: 20px;
				font-weight: bold;
				color: #666;
				margin-bottom: 20px;

				input {
					&[type="text"] {
						background-color: #fff;
						border: 1px solid #ddd;
						border-radius: 3px;
						box-shadow: 1px 1px rgba(0, 0, 0, 0.103);
						width: 300px;
						padding: 4px 16px;
						margin-left: 10px;
						font-size: 18px;
					}
				}
			}

			.upload_menu_food_file {
				input {
					margin-left: 11.2px;
				}
			}

			.num,
			.dessert_num,
			.drinks_num {
				display: flex;

				margin-bottom: 20px;

				.num_qty,
				.dessert_num_qty,
				.drinks_num_qty {
					font-size: 20px;
					font-weight: bold;
					color: #666;
					margin-right: 18px;
				}

				button {
					background-color: #ffeedf;
					border: #ffeedf;
					border-radius: 8px;
					font-size: 18px;
					color: #666;
					font-weight: bold;
					margin-right: 8px;
					padding: 4px 16px;

					&:hover {
						background: #ff843f;
						color: #fff;
					}

					&:last-child {
						margin-left: 0;
					}
				}
			}

			.price_block,
			.dessert_price_block,
			.drinks_price_block,
			.upload_menu_size {
				display: flex;
				font-size: 20px;
				font-weight: bold;
				color: #666;

				.price_input,
				.dessert_price_input,
				.drinks_price_input,
				.upload_menu_size_input {
					background-color: #fff;
					border: 1px solid #ddd;
					border-radius: 3px;
					box-shadow: 1px 1px rgba(0, 0, 0, 0.103);
					width: 300px;
					padding: 4px;
					margin: 0 10px 20px 10px;
					font-size: 18px;
				}

				.balance,
				.dessert_balance,
				.drinks_balance {
					padding-top: 5px;
				}
			}

			.upload_menu_size {
				width: 800px;

				.upload_menu_remind {
					font-size: 16px;
					padding-top: 7px;
					font-weight: 500;
				}
			}

			.spicy,
			.dessert_spicy,
			.drinks_sweetness,
			.drinks_cups,
			.upload_click {
				display: flex;
				margin-bottom: 20px;

				.spicy_text,
				.dessert_spicy_text,
				.drinks_sweetness_text,
				.drinks_cups_text,
				.upload_click_title {
					font-size: 20px;
					font-weight: bold;
					color: #666;
					margin-right: 10px;
				}

				button {
					background-color: #dbe8ff;
					border: #dbe8ff;
					border-radius: 8px;
					font-size: 18px;
					color: #666;
					font-weight: bold;
					margin-right: 8px;
					padding: 4px 16px;

					&:hover {
						background: #1654b9;
						color: #fff;
					}
				}
			}

			.upload_click {
				button {
					margin-left: 3px;
				}
			}

			.drinks_cups {
				button {
					background: #ffe9ec;

					&:hover {
						background: #ea475b;
						color: #fff;
					}
				}
			}

			.remark,
			.dessert_remark,
			.drinks_cups_remark {
				.remark_text,
				.dessert_remark_text,
				.drinks_remark_text,
				.drinks_cups_remark_text {
					font-size: 20px;
					font-weight: bold;
					color: #666;
				}

				input {
					background-color: #fff;
					border: 1px solid #ddd;
					border-radius: 3px;
					box-shadow: 1px 1px rgba(0, 0, 0, 0.103);
					width: 300px;
					padding: 4px;
					margin: 0 10px 20px 10px;
					font-size: 18px;
				}
			}

			table {
				margin: 0 auto;
				tbody {
					border-style: hidden;
					padding: 20px;
					.sponsor_menu {
						margin-bottom: 30px;
						.sponsor_name {
							border-style: hidden;
							font-size: 24px;
							font-weight: bold;
							color: #666;
							padding-right: 10px;
						}
					}

					select {
						border: 1px #ddd solid;
						border-radius: 3px;
						padding: 10px 100px;
						margin: 8px;
					}

					.sponsored_meals {
					
						.sponsored_item {
							border-style: hidden;
							font-size: 24px;
							font-weight: bold;
							color: #666666;
						}

						td {
							border-style: hidden;
							button {
								width: 80px;
								border-color: #ff8b7c;
								margin: 8px;

								&:hover {
									background: #ff8b7c;
								}
							}
						}
					}

					.sponsored_submit {
						border-style: hidden;
						margin-left: 100px;

						td {
							border-style: hidden;
							text-align: center;
							padding: 8px 0;
							button {
					
								color: #292929;
								width: 120px;

								&:hover {
									color: #fff;
									font-weight: bold;
								}
							}
						}
						
					}
				}
			}

			.patron_details,
			.balance_recharge_content {
				h2 {
					font-size: 26px;
					font-weight: bold;
					color: #292929;
					text-align: center;
					margin: 20px 0;
				}
				.patron_details_grid,
				.balance_recharge_grid {
					text-align: center;
					margin-top: 24px;
					display: grid;
					grid-template-columns: 150px 150px 170px 150px;
					grid-template-rows: 70px 65px 65px 65px;
					overflow-y: scroll;
					height: 290px;
					color: #373f41;
					font-size: 20px;

					.patron_name,
					.balance_recharge_name,
					.patron_item,
					.balance_recharge_num,
					.patron_set_user,
					.balance_recharge_enter,
					.patron_del,
					.recharge {
						background: #ea475b;
						color: #fff;
						display: flex;
						text-align: center;
						align-items: center;
						padding-left: 45px;
						height: 50px;
					}

					.patron_name_content,
					.patron_item_content,
					.recharge_amount,
					.patron_set_user_content,
					.recharge_amount_enter,
					.recharge_name {
						font-size: 18px;
					}

					.btn-primary {
						background: #ff843f;
						border: #ff843f;
					}
				}
			}
		}

		.send_out,
		.dessert_send_out,
		.drinks_send_out {
			text-align: center;
			button {
				background-color: #ff8b7c;
				border: #ff8b7c;
				border-radius: 8px;
				font-size: 18px;
				color: #fff;
				font-weight: bold;
				padding: 4px 16px;

				margin: 0 10px 20px 0;

				&:nth-child(2) {
					background: #39c8d0;
					margin-right: 0;
				}
			}
		}

		.menu_img,
		.dessert_menu_img,
		.drinks_menu_img {
			text-align: center;
		}

		.del_menu_button,
		.dessert_del_menu_button,
		.drinks_del_menu_button {
			text-align: center;
			margin-bottom: 20px;
			button {
				background-color: #ea475b;
				border: #ea475b;
				border-radius: 8px;
				font-size: 18px;
				color: #fff;
				font-weight: bold;
			}
		}

		.click_remind {
			margin-bottom: 30px;
			text-align: center;
			font-size: 18px;
			font-weight: bold;
			color: #ea475b;
		}

		.recharge_remark {
			font-size: 16px;
			font-weight: bold;
			color: #9f2695;
			text-align: center;
			margin-bottom: 30px;
		}
	}
	// 餐點總覽
	.total,
	.dessert_total,
	.drinks_total {
		width: 100%;

		section {
			&.announcement,
			&.dessert_announcement,
			&.drinks_announcement {
				width: 700px;
				min-height: 200px;
				background-color: #fff;
				padding: 5px 50px 8px 50px;
				margin: 30px auto 0;
				border-radius: 8px;

				h2 {
					color: #666;
					text-align: center;
					padding-top: 10px;
					font-size: 24px;
					margin-bottom: 40px;
				}

				.dinner_title,
				.dessert_dinner_title,
				.drinks_dinner_title {
					border-bottom: 1px solid #dddddd;

					span {
						background: #fff;
						font-weight: bold;
						color: #ffa573;
						border-top: 4px solid #ffa573;
						border-left: solid 1px #dddddd;
						border-right: solid 1px #dddddd;
						border-bottom: 1px solid #fff;
						border-top-left-radius: 6px;
						border-top-right-radius: 6px;
						padding: 9px 30px 12px;
						position: relative;
						bottom: 8px;
					}
				}

				.dessert_dinner_title {
					span {
						color: #4e91ff;
						border-top: 4px solid #4e91ff;
					}
				}

				.drinks_dinner_title {
					span {
						color: #00afb8;
						border-top: 4px solid #00afb8;
					}
				}

				.content_main,
				.dessert_content_main,
				.drinks_content_main {
					display: grid;
					grid-template-columns: 100px 120px 100px 100px 90px 90px;
					overflow-y: scroll;
					height: 200px;
					color: #373f41;

					div {
						padding: 16px 8px;
						border-bottom: 1px solid #e5e5e5;

						&:nth-child(n + 1) {
							display: inline-flex;
							align-items: center;
						}
					}

					.user_name,
					.dessert_user_name,
					.drinks_user_name,
					.content_text,
					.dessert_content_text,
					.drinks_content_text,
					.spicy_degree,
					.dessert_spicy_degree,
					.drinks_sweetness_degree,
					.drinks_ice_degree,
					.demand,
					.dessert_demand,
					.drinks_demand,
					.qty,
					.dessert_qty,
					.drinks_qty,
					.price_text,
					.dessert_price_text,
					.drinks_price_text {
						font-weight: bold;
						color: #292929;
					}
				}

				.drinks_content_main {
					display: grid;
					grid-template-columns: 83px 100px 83px 83px 83px 83px 83px;
					overflow-y: scroll;
					height: 200px;
					color: #373f41;
				}

				.overview_text,
				.dessert_overview_text,
				.drinks_overview_text {
					margin: 30px 0;
					width: 650px;

					div {
						font-size: 16px;
						font-weight: bold;
						color: #1654b9;
					}

					div:first-child {
						margin-bottom: 20px;
						color: #ea475b;
					}
				}
			}
		}
	}
}
	
				

		

			
		




	








			








</style>