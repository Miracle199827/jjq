<template>
	<view class="content">
		<view class="search">
			<view class="example">
				<uni-easyinput prefixIcon="search" v-model="value" placeholder="搜索词" @iconClick="iconClick" @input="input" style="background-color: #F5F5F5;"></uni-easyinput>
			</view>
		</view>
		<view class="main-div">
			<view class="main-ul" v-for="policy in Policy" :key="policy.id">
				<view class="main-li">
					<text class="main-span">{{policy.title}}</text>
					<text class="main-time">{{policy.publishDate}}</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	var pageIndex = 1;
	export default {
		data() {
			return {
				pageSize: 20,
				Policy:[],
				value:''
			}
	
		},
		mounted() {
			this.getPolicy()
		},
		methods: {
			input(e) {
				console.log('输入内容：', e);
			},
			iconClick(type) {
				uni.showToast({
					title: `点击了${type==='prefix'?'左侧':'右侧'}的图标`,
					icon: 'none'
				})
				console.log(this.value)
			},
			getPolicy() {
				uni.request({
					url: this.$url + 'api-zlb/queryPolicy.do' ,
					success:(res)=>{
						console.log('request success', res)
						this.res = '请求结果 : ' + JSON.stringify(res);
						this.Policy = res.data.data.dataList
						console.log(res.data.data.dataList)
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
	
	.search{
		padding: 15rpx 28rpx;
		border-bottom: 2rpx solid #e5e5e5;
	}
	
	uni-easyinput{
		background-color: #FFFFFF;
	}
	
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
