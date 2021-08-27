<template>
	<view class="content">
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
					url:'../../static/json/czc.json',
					sslVerify: false,
					success:(res)=>{
						console.log('request success', res)
						this.res = '请求结果 : ' + JSON.stringify(res);
						this.Project = res.data.Czc
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
		}
	}
</script>

<style scoped>
	uni-page-body {
		background: #FFFFFF !important;
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
