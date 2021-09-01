<template>
	<view class="content">
		<view class="header">
			<image src="../../static/images/bg.png" mode="" class="header-image"></image>
			<view class="header_title">
			<image src="../../static/images/bt.png" mode=""></image>
			</view>
			<view class="header_tabbar">
				<view class="header_tabbar_ul">
					<view class="header_tabbar_li" id="findProject">
						<navigator url="../findProject/findProject">
							<image src="../../static/images/tb1.png" alt="">
								<text class="tab_title">找项目</text>
						</navigator>
					</view>
					<view class="header_tabbar_li" id="findPolicy">
						<navigator url="./czc">
							<image src="../../static/images/tb2.png" alt="">
								<text class="tab_title">查政策</text>
						</navigator>
					</view>
					<view class="header_tabbar_li" id="search">
						<navigator url="../integratedQuery/integratedQuery">
							<image src="../../static/images/tb3.png" alt="">
								<text class="tab_title">综合查询</text>
						</navigator>
					</view>
					<view class="header_tabbar_li" id="result">
						<navigator url="../results/result">
							<image src="../../static/images/tb4.png" alt="">
								<text class="tab_title">交易结果</text>
						</navigator>
					</view>
				</view>
			</view>
		</view>
		<view class="mian">
			<view class="ktitle_title">
				<view></view> <text>新闻动态</text>
			</view>
			<!-- 新闻 -->
			<view class="main-div">
				<view class="main-ul" v-for="project in Project">
					<view class="main-li">
						<navigator url="./news">
							<text class="main-span">{{project.name}}</text>
							<text class="main-time">{{project.time}}</text>
						</navigator>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				Project: [],
			}
		},
		mounted() {
			this.getProject()
		},
		methods: {
			getProject() {
				uni.request({
					url: '../../static/json/index.json',
					// url:'http://localhost:8081/static/json/index.json',
					sslVerify: false,
					success: (res) => {
						console.log('request success', res)
						this.res = '请求结果 : ' + JSON.stringify(res);
						this.Project = res.data.Index
					},
					fail: (err) => {
						console.log('request fail', err);
						uni.showModal({
							content: err.errMsg,
							showCancel: false
						});
					},
					complete: () => {
						this.loading = false;
					}
				})
			},
		},
	}
</script>

<style scoped>
	uni-page-body {
		background: #FFFFFF !important;
	}

	.content {
		background: #FFFFFF;
	}

	/* 首页头部 */
	.header {
		height: 590rpx;
		background-size: 100% 100%;
		position: relative;
	}
	.header-image{
		height: 590rpx;
		width: 100%;
	}

	.header_title {
		position: absolute;
		top: 0;
		height: 200rpx;
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.header_title image{
		margin-top: 40rpx;
		text-align: center;
		height: 160rpx;
		width: 59%;
	}

	.header_tabbar {
		position: absolute;
		top: 250rpx;
		width: 100%;

	}

	.header_tabbar .header_tabbar_ul {
		display: flex;
		justify-content: space-around;
		align-items: center;
		margin-top: 10rpx;
	}

	.header_tabbar_li {
		width: 25%;
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.header_tabbar_li navigator {
		display: flex;
		flex-direction: column;
		align-items: center;
	}


	.header_tabbar_li image {
		width: 80rpx;
		height: 80rpx;
	}

	.header_tabbar_li .tab_title {
		display: inline-block;
		width: 100%;
		color: #fff;
		font-size: 22rpx;
		margin-top: 10rpx;
		text-align: center;
	}

	/* mian */
	.mian {}

	.ktitle_title {
		overflow: hidden;
		margin-top: 43rpx;
		padding: 0 28rpx;

	}

	.ktitle_title view {
		width: 8rpx;
		height: 30rpx;
		margin-top: 15rpx;
		background: #1e69db;
		float: left;
	}

	.ktitle_title text {
		float: left;
		margin-left: 20rpx;
		font-size: 32rpx;
		font-weight: bold;
		color: #3b89ff;

	}

	.main-div {
		padding: 0 14rpx;
	}

	.main-ul {
		display: flex;
		flex-direction: column;

	}

	.main-li {
		padding: 14rpx;
		border-bottom: 1rpx solid #e7e7e7;
		display: flex;
		flex-direction: column;
	}

	.main-li:last-child {
		/* border-bottom: none; */
	}

	.main-li text {
		display: flex;
		flex: 1;
		align-items: center;
		justify-content: flex-start;
	}

	.main-span {
		font-weight: bold;
		font-size: 30rpx;
		margin-top: 5rpx;
	}

	.main-time {
		color: #727272;
		font-size: 19rpx;
		margin-top: 15rpx;
	}
</style>
