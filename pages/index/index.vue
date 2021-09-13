<template>
	<view class="content">
		<!-- 	<request-loading></request-loading> -->
		<view class="header">
			<image src="../../static/images/bg.png" mode="" class="header-image"></image>
			<view class="header_title">
				<image src="../../static/images/bt.png" mode=""></image>
			</view>
			<view class="header_tabbar">
				<view class="header_tabbar_ul">
					<view class="header_tabbar_li" id="findProject" @click="tofindProject()">
						<view>
							<image src="../../static/images/tb1.png" alt="">
								<text class="tab_title">找项目</text>
						</view>
					</view>
					<view class="header_tabbar_li" id="findPolicy">
						<view>
							<image src="../../static/images/tb2.png" alt="" @click="checkPolicy()">
								<text class="tab_title">查政策</text>
						</view>
					</view>
					<view class="header_tabbar_li" id="search">
						<view>
							<image src="../../static/images/tb3.png" alt="" @click="integratedQuery()">
								<text class="tab_title">综合查询</text>
						</view>
					</view>
					<view class="header_tabbar_li" id="result">
						<view>
							<image src="../../static/images/tb4.png" alt="" @click="findResult()">
								<text class="tab_title">交易结果</text>
						</view>
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
				<view class="main-ul" v-for="project in Project" :key="project.id" :index="project.id"
					@click="toNewsDetails(project.id,project.title)">
					<view class="main-li">
						<view>
							<view class="main-span">{{project.title}}</view>
							<view class="main-time">{{project.publishdate}}</view>
						</view>
						<!-- <view class="text" v-for="(num,index) in data" :key="index">list - {{num}}</view> -->
					</view>
				</view>
			</view>
			<view class="zjTitle" v-if="zjTitle">{{loadingText}}</view>
		</view>

	</view>
</template>

<script>
	// 首页新闻动态页数
	var pageIndex = 1;
	export default {
		data() {
			return {
				// 首页新闻动态页数
				// pageIndex: 1,
				// 首页新闻动态默认显示条数
				pageSize: 10,
				// 首页新闻数据
				Project: [],
				//加载中...
				loadingText: '加载中...',
				// 是否显示加载文字
				zjTitle: false
			}
		},
		mounted() {
			this.getfirstProject()
		},
		// 下拉刷新
		onPullDownRefresh() {
			pageIndex = 1;
			console.log('下拉' + pageIndex);
			this.onRefresh();
		},
		//上拉加载
		onReachBottom() {
			setTimeout(() => {
				this.getProject();
			}, 300);
		},
		methods: {
			//初始页面加载
			getfirstProject() {
				uni.request({
					url: this.$url + 'api-zlb/queryNew.do?' + "pageIndex=" + pageIndex + "&" + "pageSize=" + this
						.pageSize,

					// url:'http://localhost:8081/static/json/index.json',
					sslVerify: false,
					success: (res) => {
						console.log('request success', res)
						this.res = '请求结果 : ' + JSON.stringify(res);
						this.Project = res.data.data;
						pageIndex++;
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
				this.getfirstProject()
			},
			//下拉获取数据
			getProject() {
				uni.request({
					url: this.$url + 'api-zlb/queryNew.do?' + "pageIndex=" + pageIndex + "&" + "pageSize=" + this
						.pageSize,
					// url:'http://localhost:8081/static/json/index.json',
					sslVerify: false,
					success: (res) => {
						console.log('request success', res)
						this.res = '请求结果 : ' + JSON.stringify(res);
						if (res.data.code == "参数异常") {
							this.loadingText = "暂无更多数据";
							return;
						}
						pageIndex++;
						this.Project = this.Project.concat(res.data.data); //将数据拼接在一起
						this.zjTitle = true
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
			//新闻详情
			toNewsDetails(id, title) {
				uni.navigateTo({
					url: "./news?" + "id=" + id + "&" + "title=" + title,
					success: () => {

					},
					fail: () => {},
					complete: () => {},
				})
			},
			//综合查询
			integratedQuery() {
				uni.navigateTo({
					url: "../integratedQuery/integratedQuery",
					success: () => {},
					fail: () => {},
					complete: () => {},
				})
			},
			//找项目
			tofindProject() {
				uni.navigateTo({
					url: "../findProject/findProject",
					success: () => {

					},
					fail: () => {},
					complete: () => {},
				})
			},
			//查政策
			checkPolicy() {
				uni.navigateTo({
					url: "./czc",
					success: () => {

					},
					fail: () => {},
					complete: () => {},
				})
			},
			//查结果
			findResult() {
				uni.navigateTo({
					url: "../results/result",
					success: () => {

					},
					fail: () => {},
					complete: () => {},
				})
			}
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

	.header-image {
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

	.header_title image {
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

	.header_tabbar_li view {
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
		border-bottom: none;
	}

	.main-li text {
		display: flex;
		flex: 1;
		align-items: center;
		justify-content: flex-start;
		width: 0;
	}

	.main-span {
		font-weight: bold;
		font-size: 30rpx;
		margin-top: 5rpx;
		overflow: hidden;
		/*超出部分隐藏*/
		white-space: nowrap;
		/*不换行*/
		text-overflow: ellipsis;
		/*超出部分文字以...显示*/

	}

	.main-time {
		color: #727272;
		font-size: 19rpx;
		margin-top: 15rpx;
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
</style>
