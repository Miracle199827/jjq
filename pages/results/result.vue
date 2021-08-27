<template>
	<view class="result_content">
		<view class="screen">
			<picker class="screen_choose" mode="selector" :value="typeIndex" :range="typeArray" @change="typeChange"> 
				<text v-if="Choose1">产权类型</text>
				<text v-else>{{typeArray[typeIndex]}}</text>
				<uni-icons type="arrowdown" color="999999"></uni-icons>
			</picker>
			<picker class="screen_choose" mode="selector" :value="areaIndex" :range="areaArray" @change="areaChange">
				<text v-if="Choose2">面积</text>
				<text v-else>{{areaArray[areaIndex]}}</text>
				<uni-icons type="arrowdown" color="999999"></uni-icons>
			</picker>
		</view>
		<view class="result_items" v-for="result in Result">
			<view @click="gotoDetails()">
				<text class="items_title">{{result.name}}</text>
				<text class="items_type">产权类型：{{result.type}}</text>
				<text class="items_place">交易地点：{{result.place}}</text>
				<text class="items_time">公示日期：{{result.time}}</text>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				Choose1: true,
				Choose2: true,
				typeArray: ['全部', '土地经营权', '农村集体经营性资产', '涉农资金项目'],
				typeIndex: 0,
				areaArray: ['全部', '0~10亩', '10~50亩', '50~100亩', '100~500亩', '500亩以上'],
				areaIndex: 0,
				Result: [],
			}
		},
		methods: {
			getResult() {
				uni.request({
					// url:'http://localhost:8080/static/json/result.json',
					url:'../../static/json/result.json',
					success:(res)=>{
						console.log('request success', res)
						// this.res = '请求结果 : ' + JSON.stringify(res);
						this.Result = res.data.result
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
			// 
			typeChange: function(e) {
				console.log('picker发送选择改变，携带值为', e.target.value)
				this.typeIndex = e.target.value;
				this.Choose1 = false
			},
			areaChange: function(e) {
				console.log('picker发送选择改变，携带值为', e.target.value)
				this.areaIndex = e.target.value
				this.Choose2 = false
			},
			gotoDetails(){
				uni.navigateTo({
					url:"../projectDetails/projectDetails"
				})
			}
		},
		mounted() {
			this.getResult()
		},
	}
</script>

<style scoped>
	uni-page-body{
		background-color: #fff !important;
	}
	.screen {
		height: 75rpx;
		line-height: 75rpx;
		background-color: #fff;
		display: flex;
		flex-direction: row;
	}

	.screen .screen_choose {
		flex: 1;
		font-size: 26rpx;
		color: #999999;
		display: flex;
		justify-content: flex-start;
		margin-left: 20rpx
	}

	.screen .screen_choose text {
		margin-right: 10rpx
	}

	.result_items {
		display: flex;
		flex-direction: column;
		background-color: #fff;
	}

	.result_items view {
		display: flex;
		flex: 1;
		justify-content: flex-start;
		flex-direction: column;
		padding: 28rpx 28rpx 0 28rpx;
		border-top: 2rpx solid #e5e5e5;
	}

	
	.result_items view text {
	    margin-bottom: 2rpx;
	    font-size: 26rpx;
	    color: #999999;
	}
	
	.result_items view .items_title {
	    font-size: 30rpx;
	    color: black;
	}
</style>
