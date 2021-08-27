<template>
	<view class="details_content">
		<view class="details_card">
			<view>
				<text class="card_left">乡镇（街道</text>
				<text class="card_right">{{details.street}}</text>
			</view>
			<view>
				<text class="card_left">村（社区）</text>
				<text class="card_right">{{details.community}}</text>
			</view>
			<view>
				<text class="card_left">组别</text>
				<text class="card_right">{{details.group}}</text>
			</view>
			<view>
				<text class="card_left">项目名称</text>
				<text class="card_right">{{details.projectName}}</text>
			</view>
			<view>
				<text class="card_left">产权类型</text>
				<text class="card_right">{{details.type}}</text>
			</view>
			<view>
				<text class="card_left">产权子类型</text>
				<text class="card_right">{{details.typeChild}}</text>
			</view>
			<view>
				<text class="card_left">项目编号</text>
				<text class="card_right">{{details.num}}</text>
			</view>
			<view>
				<text class="card_left">登记日期</text>
				<text class="card_right">{{details.date}}</text>
			</view>
			<view>
				<text class="card_left">是否续租</text>
				<text class="card_right">{{details.continue}}</text>
			</view>
			<view>
				<text class="card_left">交易期限</text>
				<text class="card_right">{{details.limit}}</text>
			</view>
			<view>
				<text class="card_left">交易面积</text>
				<text class="card_right">{{details.area}}</text>
			</view>
			<view>
				<text class="card_left">项目描述</text>
				<text class="card_right">{{details.describe}}</text>
			</view>
			<view>
				<text class="card_left">项目位置</text>
				<text class="card_right">{{details.place}}</text>
			</view>
			<view>
				<text class="card_left">项目四至</text>
				<text class="card_right">{{details.bearing}}</text>
			</view>
			<view>
				<text class="card_left">附属设施</text>
				<text class="card_right">{{details.affiliated}}</text>
			</view>
			<view>
				<text class="card_left">补充说明</text>
				<text class="card_right">{{details.supplement}}</text>
			</view>
		</view>
		<view class="block_card">
			<view class="block_title">
				<view></view><text>{{block.name}}</text>
			</view>
			<view class="details_card">
				<view>
					<text class="card_left">标段描述</text>
					<text class="card_right">{{block.describe}}</text>
				</view>
				<view>
					<text class="card_left">报名费</text>
					<text class="card_right">{{block.cost}}</text>
				</view>
			</view>
		</view>
		<view class="kong">
			
		</view>
	</view>
</template>

<script>
	export default{
		data(){
			return{
				details:[],
				block:[],
			}
		},
		mounted() {
			this.getdata();
		},
		methods:{
			getdata() {
				uni.request({
					// url:'http://localhost:8080/static/json/details.json',
					url:'../../static/json/details.json',
					sslVerify: false,
					success:(res)=>{
						console.log('request success', res)
						this.res = '请求结果 : ' + JSON.stringify(res);
						this.details = res.data.details;
						this.block = res.data.block;
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
	.details_content{
		padding: 0 18rpx;
	}
	.details_card{
	   margin-top: 20rpx;
	   background-color: #fff;
	   border-radius: 8rpx;
	   padding: 28rpx 10rpx;
	   display: flex;
	   flex-direction: column;
	}
	
	.details_card view {
	    flex: 1;
	    display: flex;
	    flex-direction: row;
	    margin-bottom: 25rpx;
	}
	
	.details_card view:last-child{
	    margin-bottom: 0;
	}
	
	
	.details_card view span {
	    flex: 1;
	    font-size: 28rpx;
	}
	
	.details_card view .card_left{
	    flex: 1;
	    display: flex;
	    justify-content: flex-start;
	    color: #666666;
	}
	.details_card view .card_right{
	    flex: 1.5;
	    display: flex;
	    justify-content: flex-end;
	    color: #333;
	    text-align: right;
	}
	
	.block_card {
	    width: 100%;
	}
	
	.block_title {
	    overflow: hidden;
	    width: 100%;
	    margin-top: 43rpx;
	    padding: 0 28rpx;
	    line-height: 45rpx;
	}
	
	.block_title view {
	    width: 8rpx;
	    height: 35rpx;
	    margin-top: 6rpx;
	    background: #1e69db;
	    float: left;
	}
	
	.block_title text {
	    float: left;
	    margin-left: 20rpx;
	    font-size: 32rpx;
	    font-weight: bold;
	    color: #3b89ff;
	
	}

	.kong{
		height: 55rpx;
	}
</style>
