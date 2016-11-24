<style >
	
/*	.home_btn{width: 100%;font-size: 0;text-align: center;}
	.home_btn a{display: inline-block;vertical-align: middle;font-size: 12px;color: #fff;padding: 10px 25px;margin: 0 8px;cursor: pointer;border-radius: 6px;transition: all ease 0.2s;-webkit-transition: all ease 0.2s;}
	.home_btn a:first-child{background: rgba(1,215,178,1);}
	.home_btn a:first-child:hover{background: rgba(1,215,178,0.8);}
	.home_btn a:last-child{background: rgba(255,81,81,1);}
	.home_btn a:last-child:hover{background: rgba(255,81,81,0.8);}*/
</style>

<template>
	<div class="all_center" style="top: 26%;text-align: center;z-index: 9;left: 22%;">
		<h1 style="color: #fff;">欢迎到来，fuc1ker</h1>
		<h2 style="color: #fff;">请先登录 杀杀杀速度222</h2>
		<!-- <div class="home_btn">
			<a href="javascript:void(0)" @click="showLogin = !showLogin">登录</a>
			<a href="javascript:void(0)" @click="showSignup = !showSignup">注册</a>
		</div> -->
	</div>
</template>
 


<script>
var Vue = require('vue');
// var login = require('../login/login.vue');
// var signup = require('../signup/signup.vue');
var home = Vue.extend({
	name: 'home',
	data: function(){
		return {
			// showLogin: false,
			// showSignup:false
		}
	}
})
module.exports = home;   

</script>