<template>
	<view class="content">
		<view class="fwxxxqmain-nav" v-for="project in Project">
			<view class="fwxxxqmain-nav-h2">{{project.title}}</view>
			<view class="nav-div">
				<text>{{project.name}}</text>
				<text>{{project.time}}</text>
			</view>
			<view class="nav-p">{{project.p}}</view>
		</view>
		<view class="fwxxxqmain-main" v-for="main in main">
			<view>{{main.name}}</view>
			<view class="fwxxxqmain-main-h3">{{main.h3one}}</view>
			<view>
				{{main.textone}}
			</view>
			<view>
				{{main.texttwo}}
			</view>
			<view>
				{{main.texttree}}
			</view>
			<view class="fwxxxqmain-main-h3">{{main.h3two}}</view>
			<view>
				{{main.textone}}
			</view>
			<view>
				{{main.texttwo}}
			</view>
			<view>
				{{main.texttree}}
			</view>
			<view class="main-ul" v-for="mainul in mainul">
				<view class="main-li"><text>{{mainul.name}}</text>
				</view>
				<view class="main-li"><text class="pins-width">{{mainul.phone}}</text>
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
				main: [],
				mainul: [],
			}
		},
		mounted() {
			this.getProject()
		},
		methods: {
			getProject() {
				uni.request({
					url: '../../static/json/news.json',
					sslVerify: false,
					success: (res) => {
						console.log('request success', res)
						this.res = '请求结果 : ' + JSON.stringify(res);
						this.Project = res.data.Czc
						this.main = res.data.main
						this.mainul = res.data.mainul
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
	.content {
		overflow: hidden;
		padding: 0 32rpx;
	}

	.fwxxxqmain-nav-h2 {
		font-size: 34rpx;
		text-align: center;
		font-weight: bold;
		color: #333333;
		margin: 39rpx 0 32rpx 0;
	}

	.nav-div {
		font-size: 24rpx;
		color: #999999;
		display: flex;
		justify-content: space-around;
	}

	.nav-div text {
		/* display: inline-block; */
		padding: 0 15rpx;
		width: 50%;
	}

	.nav-div text:nth-child(1) {
		text-align: right;
	}

	.nav-div text:nth-child(2) {
		text-align: left;
	}

	.nav-p {
		font-size: 20rpx;
		color: #E40D0D;
		line-height: 40rpx;
		text-align: center;
		margin: 39rpx 0 19rpx 0;
	}

	/* 主体部分 */
	.fwxxxqmain-main {
		margin-bottom: 20rpx;
		border: 1rpx solid #ccc;
		border-radius: 8rpx;
	}

	.fwxxxqmain-main view {
		color: #666666;
		font-size: 24rpx;
		line-height: 48rpx;
		padding: 0 20rpx;
		text-indent: 40rpx;
	}

	.fwxxxqmain-main .fwxxxqmain-main-h3 {
		color: #333;
		font-size: 30rpx;
		line-height: 48rpx;
		padding: 0 20rpx;
		margin-top: 36rpx;
		font-weight: bolder;
	}

	.main-ul {
		height: 70rpx;
		margin-top: 40rpx;
		border-top: 1rpx solid #ccc;
		display: flex;
		justify-content: space-between;
	}

	.main-ul .main-li {
		width: 50%;
		height: 70rpx;
		line-height: 70rpx;
		font-size: 24rpx;
		color: #666666;
		padding: 0 20rpx;
		text-align: center;
	}

	/* 	.main-ul .main-li:nth-child(2) {
		text-align: right;
	} */
	/* 	.pins-width{	
		width: 100rpx;
	} */
</style>
