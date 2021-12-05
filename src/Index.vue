<template>
	<div :class="{body_main: getRouterPath === '/'}">
		<router-view />
	</div>
</template>


<script>
export default {
  name: "Index",
	computed: {
		getRouterPath() {
      return this.$route.path;
    }
	}
}
</script>

<style>
.body_main {
	font-family: Arial, MsJhengHeiBold, 微軟正黑體, Microsoft JhengHei, Roboto,
		PingFangTC, sans-serif;
	width: 100%;
	height: 100vh;
	background-image: url(./assets/food_bg_6.jpeg);
	background-repeat: no-repeat;
	background-position: center center;
	background-size: cover;
	background-color: rgba(0, 0, 0, 0.1);
	background-blend-mode: multiply;
}
</style>