<template>
	<view class="result_content">
		<view class="search">
			<view class="example">
				<uni-easyinput prefixIcon="search" v-model="value" placeholder="搜索词" @iconClick="iconClick"
					@input="input" style="background-color: #F5F5F5;"></uni-easyinput>
			</view>
		</view>
		<view class="screen">
			<picker class="screen_choose" mode="selector" :value="typeIndex" :range="typeArray" @change="typeChange"
				@cancel="typeclose">
				<text v-if="Choose1">产权类型</text>
				<text v-else>{{typeArray[typeIndex]}}</text>
				<uni-icons type="arrowdown" color="999999"></uni-icons>
			</picker>
			<picker class="screen_choose" mode="selector" :value="areaIndex" :range="areaArray" @change="areaChange "
				@cancel="areaclose">
				<text v-if="Choose2">面积</text>
				<text v-else>{{areaArray[areaIndex]}}</text>
				<uni-icons type="arrowdown" color="999999"></uni-icons>
			</picker>
		</view>
		<view v-if="zwsj">
			<view class="result_items" v-for="result in Result" :key="result.id" :index="result.id">
				<view @click="gotoDetails(result.id)">
					<text class="items_title">{{result.proName}}</text>
					<text class="items_type">产权类型：{{result.proType}}</text>
					<text class="items_place">交易地点：{{result.address}}</text>
					<text class="items_time">公示日期：{{result.publishDate}}</text>
				</view>
			</view>
		</view>
		<view class="zwsj" v-else>
			<text>暂无数据</text>
		</view>
		<view class="zjTitle" v-if="zjTitle">{{loadingText}}</view>
	</view>
</template>

<script>
	//默认页面
	var pageIndex = 1;
	var pageTypeIndex = 1;
	var pageAreaIndex = 1;
	var pageTypeAreaIndex = 1;
	var searchIndex = 1;
	export default {
		data() {
			return {
				pageSize: 10,
				Choose1: true,
				Choose2: true,
				typeArray: ['土地经营权', '农村养殖水面经营权', '“四荒”使用权', '林权', '农村集体经营性资产', '农业生产设施设备', '小型水利设施', '涉农资金项目', '农民住房财产权',
					'农户宅基地使用权', '农村集体资产股权', '海域使用权', '农业类知识产权', '其他'
				],
				typeIndex: -1,
				areaArray: ['0-10亩', '10-50亩', '50-100亩', '100亩以上'],
				areaIndex: -1,
				Result: [],
				loadingText: '加载中...',
				zjTitle: false,
				value: '',
				zwsj: false,
			}
		},
		// 下拉刷新
		onPullDownRefresh() {
			pageIndex = 1;
			pageTypeIndex = 1;
			pageAreaIndex = 1;
			pageTypeAreaIndex = 1;
			searchIndex = 1;
			this.Choose1 = true;
			this.Choose2 = true;
			console.log('下拉' + pageIndex)
			this.onRefresh()
		},
		//上拉加载
		onReachBottom() {
			if (this.typeIndex == -1 && this.areaIndex == -1 && this.value == '') {
				console.log(pageIndex)
				setTimeout(() => {
					this.getResult()
				}, 300);
			} else if (this.areaIndex == -1 && this.typeIndex != -1 && this.value == '') {
				console.log(pageTypeIndex)
				console.log("类型触底")
				setTimeout(() => {
					this.typefindconcat()
				}, 300);
			} else if (this.areaIndex != -1 && this.typeIndex == -1 && this.value == '') {
				console.log(pageAreaIndex)
				console.log("面积触底")
				setTimeout(() => {
					this.areafindconcat()
				}, 300);
			} else if (this.areaIndex != -1 && this.typeIndex != -1 && this.value == '') {
				console.log(pageTypeAreaIndex)
				console.log("类型面积触底")
				setTimeout(() => {
					this.areaTypefindconcat()
				}, 300);
			} else {
				console.log("搜索触底")
				setTimeout(() => {
					this.searchfindconcat()
				}, 300);
			}

		},
		mounted() {
			this.getfirstResult()
		},
		methods: {
			//搜索栏功能
			input(e) {
				console.log('输入内容：', e);
			},
			iconClick(type) {
				pageIndex = 1;
				pageTypeIndex = 1;
				pageAreaIndex = 1;
				pageTypeAreaIndex = 1;
				searchIndex = 1;
				this.loadingText = '加载中...'
				uni.showToast({
					title: '查询成功',
					icon: 'success'
				})
				console.log(this.value)
				if (this.value == '') {
					uni.showToast({
						title: '请输入有效值',
						icon: 'none'
					})
					this.getfirstResult()
				} else {
					this.searchfind()
				}
			},
			//项目名模糊查询
			searchfind() {
				uni.request({
					url: this.$url + 'api-zlb/queryProResultList.do?' + "pageIndex=" + searchIndex + "&" +
						"pageSize=" + this.pageSize + "&" + "proName=" + (this.value),
					success: (res) => {
						console.log('request success', res)
						console.log(this.Result)
						if (res.data.code == 9999 || res.data.data.dataList.length == 0) {
							this.zwsj = false;
						} else {
							this.Result = res.data.data.dataList;
							this.zwsj = true;
							searchIndex++;
						}
					},
					fail: (err) => {
						console.log('request fail', err);
						uni.showModal({
							content: err.message,
							showCancel: false
						});
					},
					complete: () => {
						this.loading = false;
					}
				})
			},
			//项目名模糊查询触底
			searchfindconcat() {
				uni.request({
					url: this.$url + 'api-zlb/queryProResultList.do?' + "pageIndex=" + searchIndex + "&" +
						"pageSize=" + this.pageSize + "&" + "proName=" + (this.value),
					success: (res) => {
						console.log('request success', res)
						this.zjTitle = true
						if (res.data.data.dataList.length == 0) {
							this.loadingText = "暂无更多数据";
							return;
						}
						searchIndex++;
						this.Result = this.Result.concat(res.data.data.dataList); //将数据拼接在一起
					},
					fail: (err) => {
						console.log('request fail', err);
						uni.showModal({
							content: err.message,
							showCancel: false
						});
					},
					complete: () => {
						this.loading = false;
					}
				})
			},
			// 筛选功能
			typeChange(e) {
				pageIndex = 1;
				pageTypeIndex = 1;
				pageAreaIndex = 1;
				pageTypeAreaIndex = 1;
				searchIndex = 1;
				console.log('picker发送选择改变，携带值为', e.target.value + 1)
				this.typeIndex = e.target.value;
				this.zjTitle = (this.typeIndex == -1) ? true : false;
				this.loadingText = '加载中...';
				this.Choose1 = (this.typeIndex == -1) ? true : false
				uni.showToast({
					title: '查询成功',
					icon: 'success'
				})
				if (this.Choose1 == false) {
					if (this.areaIndex == -1 && this.typeIndex != -1) {
						this.typefind()
					} else {
						this.areaTypefind()
					}
				}
			},
			typeclose() {
				this.Choose1 = true;
				this.Choose2 = true;
				this.typeIndex = -1
				this.areaIndex = -1
				pageIndex = 1;
				pageTypeIndex = 1;
				pageAreaIndex = 1;
				pageTypeAreaIndex = 1;
				searchIndex = 1;
				this.loadingText = '加载中...'
				this.getfirstResult()
			},
			areaChange(e) {
				pageIndex = 1;
				pageTypeIndex = 1;
				pageAreaIndex = 1;
				pageTypeAreaIndex = 1;
				searchIndex = 1;
				console.log('picker发送选择改变，携带值为', e.target.value + 1)
				this.areaIndex = e.target.value
				this.Choose2 = (this.areaIndex == -1) ? true : false
				this.zjTitle = (this.areaIndex == -1) ? true : false,
					this.loadingText = '加载中...'
				uni.showToast({
					title: '查询成功',
					icon: 'success'
				})
				if (this.Choose2 == false) {
					if (this.areaIndex != -1 && this.typeIndex == -1) {
						this.areafind()
					} else {
						this.areaTypefind()
					}
				}
			},
			areaclose() {
				this.Choose1 = true
				this.Choose2 = true
				this.typeIndex = -1
				this.areaIndex = -1
				pageIndex = 1;
				pageTypeIndex = 1;
				pageAreaIndex = 1;
				pageTypeAreaIndex = 1;
				searchIndex = 1;
				this.loadingText = '加载中...'
				this.getfirstResult()
			},
			//单类型查询
			typefind() {
				uni.request({
					url: this.$url + 'api-zlb/queryProResultList.do?' + "pageIndex=" + pageTypeIndex + "&" +
						"pageSize=" + this.pageSize + "&" + "proType=" + (this.typeIndex + 1),
					success: (res) => {
						this.loadingText = '加载中...';
						console.log('request success', res)
						console.log(this.Result)
						if (res.data.code == 9999 || res.data.data.dataList.length == 0) {
							this.zwsj = false;
						} else {
							this.Result = res.data.data.dataList;
							this.zwsj = true;
							pageTypeIndex++;
						}
					},
					fail: (err) => {
						console.log('request fail', err);
						uni.showModal({
							content: err.message,
							showCancel: false
						});
					},
					complete: () => {
						this.loading = false;
					}
				})
			},
			//类型查询下拉加载数据
			typefindconcat() {
				uni.request({
					url: this.$url + 'api-zlb/queryProResultList.do?' + "pageIndex=" + pageTypeIndex + "&" +
						"pageSize=" + this.pageSize + "&" + "proType=" + (this.typeIndex + 1),

					success: (res) => {
						this.zjTitle = true
						console.log('request success', res)
						if (res.data.data.dataList.length == 0) {
							this.loadingText = "暂无更多数据";
							return;
						}
						pageTypeIndex++;
						this.Result = this.Result.concat(res.data.data.dataList); //将数据拼接在一起

					},
					fail: (err) => {
						console.log('request fail', err);
						uni.showModal({
							content: err.message,
							showCancel: false
						});
					},
					complete: () => {
						this.loading = false;
					}
				})
			},
			//单面积查询
			areafind() {
				uni.request({
					url: this.$url + 'api-zlb/queryProResultList.do?' + "pageIndex=" + pageAreaIndex + "&" +
						"pageSize=" + this.pageSize + "&" + "area=" + (this.areaIndex + 1),
					success: (res) => {
						this.loadingText = '加载中...';
						console.log('request success', res)
						if (res.data.code == 9999 || res.data.data.dataList.length == 0) {
							this.zwsj = false;
						} else {
							this.Result = res.data.data.dataList;
							this.zwsj = true;
							pageAreaIndex++;
						}
					},
					fail: (err) => {
						console.log('request fail', err);
						uni.showModal({
							content: err.message,
							showCancel: false
						});
					},
					complete: () => {
						this.loading = false;
					}
				})
			},
			//面积查询下拉加载数据
			areafindconcat() {
				uni.request({
					url: this.$url + 'api-zlb/queryProResultList.do?' + "pageIndex=" + pageAreaIndex + "&" +
						"pageSize=" + this.pageSize + "&" + "area=" + (this.areaIndex + 1),
					success: (res) => {
						this.zjTitle = true
						console.log('request success', res)
						if (res.data.data.dataList.length == 0) {
							this.loadingText = "暂无更多数据";
							return;
						}
						pageAreaIndex++;
						this.Result = this.Result.concat(res.data.data.dataList); //将数据拼接在一起
					},
					fail: (err) => {
						console.log('request fail', err);
						uni.showModal({
							content: err.message,
							showCancel: false
						});
					},
					complete: () => {
						this.loading = false;
					}
				})
			},
			//面积和类型双查询
			areaTypefind() {
				uni.request({
					url: this.$url + 'api-zlb/queryProResultList.do?' + "pageIndex=" + pageTypeAreaIndex + "&" +
						"pageSize=" + this.pageSize + "&" + "proType=" + (this.typeIndex + 1) + '&' + "area=" + (
							this.areaIndex + 1),
					success: (res) => {
						this.loadingText = '加载中...';
						console.log('request success', res)
						if (res.data.code == 9999) {
							this.zwsj = false;
						} else {
							this.Result = res.data.data.dataList;
							this.zwsj = true;
							pageTypeAreaIndex++;
						}
					},
					fail: (err) => {
						console.log('request fail', err);
						uni.showModal({
							content: err.message,
							showCancel: false
						});
					},
					complete: () => {
						this.loading = false;
					}
				})
			},
			//面积和类型查询下拉加载数据
			areaTypefindconcat() {
				uni.request({
					url: this.$url + 'api-zlb/queryProResultList.do?' + "pageIndex=" + pageTypeAreaIndex + "&" +
						"pageSize=" + this.pageSize + "&" + "proType=" + (this.typeIndex + 1) + '&' + "area=" + (
							this.areaIndex + 1),

					success: (res) => {
						this.zjTitle = true
						console.log('request success', res)
						if (res.data.data.dataList.length == 0) {
							this.loadingText = "暂无更多数据";
							return;
						}
						pageTypeAreaIndex++;
						this.Result = this.Result.concat(res.data.data.dataList); //将数据拼接在一起

					},
					fail: (err) => {
						console.log('request fail', err);
						uni.showModal({
							content: err.message,
							showCancel: false
						});
					},
					complete: () => {
						this.loading = false;
					}
				})
			},
			//默认获取页面数据
			getfirstResult() {
				uni.request({
					// url:'http://localhost:8080/static/json/result.json',
					url: this.$url + 'api-zlb/queryProResultList.do?' + "pageIndex=" + pageIndex + "&" +
						"pageSize=" + this.pageSize,
					success: (res) => {
						this.loadingText = '加载中...';
						console.log('request success', res)
						if (res.data.code == 9999) {
							this.zwsj = false;
						} else {
							this.Result = res.data.data.dataList;
							this.zwsj = true;
							pageIndex++;
						}
					},
					fail: (err) => {
						console.log('request fail', err);
						uni.showModal({
							content: err.message,
							showCancel: false
						});
					},
					complete: () => {
						setTimeout(() => {
							this.loading = false;
							//隐藏loading 提示框
							wx.hideLoading();
							//隐藏导航条加载动画
							wx.hideNavigationBarLoading();
							//停止下拉刷新
							wx.stopPullDownRefresh();
						}, 1000);
					}
				})
			},
			onRefresh() {
				//在当前页面显示导航条加载动画
				wx.showNavigationBarLoading();
				//显示 loading 提示框。需主动调用 wx.hideLoading 才能关闭提示框
				wx.showLoading({
					title: '刷新中...',
				})
				this.getfirstResult()
			},
			//未筛选获取页面数据
			getResult() {
				uni.request({
					// url:'http://localhost:8080/static/json/result.json',
					url: this.$url + 'api-zlb/queryProResultList.do?' + "pageIndex=" + pageIndex + "&" +
						"pageSize=" + this.pageSize,

					success: (res) => {
						this.zjTitle = true
						console.log('request success', res)
						if (res.data.data.dataList.length == 0) {
							this.loadingText = "暂无更多数据";
							return;
						}
						pageIndex++;
						this.Result = this.Result.concat(res.data.data.dataList); //将数据拼接在一起

					},
					fail: (err) => {
						console.log('request fail', err);
						uni.showModal({
							content: err.message,
							showCancel: false
						});
					},
					complete: () => {
						this.loading = false;
					}
				})
			},
			gotoDetails(id) {
				uni.navigateTo({
					url: "./resultDetails?" + "id="+id
				})
			},
		},
	}
</script>

<style scoped>
	.search {
		padding: 15rpx 28rpx;
		border-bottom: 2rpx solid #e5e5e5;
	}

	uni-easyinput {
		background-color: #FFFFFF;
	}

	uni-page-body {
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

	.zjTitle {
		width: 100%;
		height: 80rpx;
		background-color: #e7e7e7;
		display: flex;
		align-items: center;
		justify-content: center;
		color: #9d9d9d;
	}

	.zwsj {
		display: flex;
		height: 90vh;
		align-items: center;
		justify-content: center;
	}
</style>
