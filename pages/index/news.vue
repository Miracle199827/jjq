<template>
	<view class="content">
		<view class="fwxxxqmain-nav">
			<view class="fwxxxqmain-nav-h2">{{newTitle}}</view>
			<view class="nav-div">
				<text>{{publishDate}}</text>
			</view>
		</view>
		<view class="fwxxxqmain-main">
			<rich-text v-html="main"></rich-text>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				// 新闻id
				newId: 0,
				//新闻title
				newTitle: '',
				//新闻时间
				publishDate: '',
				//新闻内容
				main: '',
				// mainul: [],
			}
		},
		onLoad(potion) {
			// this.get_h(potion.potion)
			console.log(potion.id)
			this.newId = potion.id
			this.newTitle = potion.title
		},
		mounted() {
			this.getProject()
		},
	    updated() {
			var p = document.querySelectorAll('p')
			var span = document.querySelectorAll('span')
			var div = document.getElementsByClassName('fwxxxqmain-main')
			for (var i = 0; i < p.length; i++) {
				p[i].style.fontSize="16px"
				p[i].style.fontFamily="kaiti"
				p[i].style.fontWeight="500"
			}
			for (var i = 0; i < span.length; i++) {
				span[i].style.fontSize="16px"
				span[i].style.fontFamily="kaiti"
				span[i].style.fontWeight="500"
			}
			for (var i = 0; i < div.length; i++) {
				div[i].style.fontSize="16px"
				div[i].style.fontFamily="kaiti"
				div[i].style.fontWeight="500"
			}
			document.querySelector('img').style.width="100%"
	    },
		methods: {
			getProject() {
				uni.request({
					url: this.$url + 'api-zlb/queryNewDetail.do?' + 'newId=' + this.newId,
					sslVerify: false,
					success: (res) => {
						console.log('request success', res)
						this.res = '请求结果 : ' + JSON.stringify(res);
						this.publishDate = res.data.data.publishDate
						this.main = res.data.data.content
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
		margin: 39rpx 0 20rpx 0;
	}

	.nav-div {
		font-size: 24rpx;
		color: #999999;
		display: flex;
		justify-content: center;
		margin-bottom: 20rpx;
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
		background-color: #FFFFFF;
		overflow: hidden;
	}

	.fwxxxqmain-main rich-text {
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
