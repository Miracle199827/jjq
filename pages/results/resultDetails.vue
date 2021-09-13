<template>
	<view class="details_content">
		<view class="details_card">
			<view>
				<text class="card_left">乡镇（街道</text>
				<text class="card_right">{{details.townName}}</text>
			</view>
			<view>
				<text class="card_left">村（社区）</text>
				<text class="card_right">{{details.villageName}}</text>
			</view>
			<view>
				<text class="card_left">组别</text>
				<text class="card_right">{{details.groupName}}</text>
			</view>
			<view>
				<text class="card_left">项目名称</text>
				<text class="card_right">{{details.proName}}</text>
			</view>
			<view>
				<text class="card_left">产权类型</text>
				<text class="card_right">{{details.proTypeKey}}</text>
			</view>
			<view>
				<text class="card_left">产权子类型</text>
				<text class="card_right">{{details.proTypeChildKey}}</text>
			</view>
			<view>
				<text class="card_left">项目编号</text>
				<text class="card_right">{{details.proNumber}}</text>
			</view>
			<view>
				<text class="card_left">登记日期</text>
				<text class="card_right">{{details.registerDate}}</text>
			</view>
			<view>
				<text class="card_left">是否续租</text>
				<text class="card_right">{{details.isXz}}</text>
			</view>
			<view>
				<text class="card_left">交易期限</text>
				<text class="card_right">{{details.dealLimit}}</text>
			</view>
			<view>
				<text class="card_left">交易面积</text>
				<text class="card_right">{{details.area}}</text>
			</view>
			<view>
				<text class="card_left">交易面积单位</text>
				<text class="card_right">{{details.areaUnit}}</text>
			</view>
			<view>
				<text class="card_left">项目描述</text>
				<text class="card_right">{{details.remark}}</text>
			</view>
			<view>
				<text class="card_left">项目位置</text>
				<text class="card_right">{{details.location}}</text>
			</view>
			<view>
				<text class="card_left">项目四至</text>
				<text class="card_right">{{details.sz}}</text>
			</view>
			<view>
				<text class="card_left">附属设施</text>
				<text class="card_right">{{details.fsss}}</text>
			</view>
			<view>
				<text class="card_left">补充说明</text>
				<text class="card_right">{{details.supplement}}</text>
			</view>
			<view>
				<text class="card_left">预算总额</text>
				<text class="card_right">{{details.budgetMoney}}</text>
			</view>
			<view>
				<text class="card_left">资金来源</text>
				<text class="card_right">{{details.moneyFrom}}</text>
			</view>
			<view>
				<text class="card_left">项目周期</text>
				<text class="card_right">{{details.proPeriod}}</text>
			</view>
			<view>
				<text class="card_left">权属类型</text>
				<text class="card_right">{{details.ownershipType}}</text>
			</view>
			<view>
				<text class="card_left">所有权人</text>
				<text class="card_right">{{details.rightOfOwner}}</text>
			</view>
			<view>
				<text class="card_left">使用权人</text>
				<text class="card_right">{{details.rightOfUser}}</text>
			</view>
			<view>
				<text class="card_left">是否存在其他权利人</text>
				<text class="card_right">{{details.isExistOther}}</text>
			</view>
			<view>
				<text class="card_left">他项权利人</text>
				<text class="card_right">{{details.otherRightUser}}</text>
			</view>
			<view>
				<text class="card_left">权证编号</text>
				<text class="card_right">{{details.qzNumber}}</text>
			</view>
			<view>
				<text class="card_left">权证年限</text>
				<text class="card_right">{{details.qzYearMessage}}</text>
			</view>
			<view>
				<text class="card_left">公益林面积</text>
				<text class="card_right">{{details.gylArea}}</text>
			</view>
			<view>
				<text class="card_left">商品林面积</text>
				<text class="card_right">{{details.splArea}}</text>
			</view>
			<view>
				<text class="card_left">主要树种</text>
				<text class="card_right">{{details.mainTreeType}}</text>
			</view>
			<view>
				<text class="card_left">平均树龄</text>
				<text class="card_right">{{details.treeAge}}</text>
			</view>
			<view>
				<text class="card_left">株数</text>
				<text class="card_right">{{details.treeNumber}}</text>
			</view>
			<view>
				<text class="card_left">平均树高</text>
				<text class="card_right">{{details.averageHeight}}</text>
			</view>
			<view>
				<text class="card_left">平均胸径</text>
				<text class="card_right">{{details.averageThorax}}</text>
			</view>
			<view>
				<text class="card_left">林木蓄积</text>
				<text class="card_right">{{details.treeArea}}</text>
			</view>
			<view>
				<text class="card_left">用海类型</text>
				<text class="card_right">{{details.useOceanType}}</text>
			</view>
			<view>
				<text class="card_left">海域使用权总面积</text>
				<text class="card_right">{{details.useOceanArea}}</text>
			</view>
			<view>
				<text class="card_left">水利设施类型</text>
				<text class="card_right">{{details.waterDeviceType}}</text>
			</view>	
			<view>
				<text class="card_left">设施完好率</text>
				<text class="card_right">{{details.deviceIntactPercentage}}</text>
			</view>
			<view>
				<text class="card_left">项目审查表附件信息</text>
				<text class="card_right">{{details.proCheckFileList.fileName}}</text>
			</view>
			<view>
				<text class="card_left">村民代表大会意见表</text>
				<text class="card_right">{{details.villageIdeaFileList.fileName}}</text>
			</view>
		</view>
		<view class="block_card">
			<view class="block_title">
				<view></view><text>标段信息</text>
			</view>
			<view class="details_card">
				<view>
					<text class="card_left">标段描述</text>
					<text class="card_right">{{details.tenderInfo.remark}}</text>
				</view>
				<view>
					<text class="card_left">报名费</text>
					<text class="card_right">{{details.tenderInfo.entryFee}}</text>
				</view>
				<view>
					<text class="card_left">标段编号</text>
					<text class="card_right">{{details.tenderInfo.tenCode}}</text>
				</view>
				<view>
					<text class="card_left">交易期限</text>
					<text class="card_right">{{details.tenderInfo.tenDealLimit}}</text>
				</view>
				<view>
					<text class="card_left">交易面积</text>
					<text class="card_right">{{details.tenderInfo.tenDealArea}}</text>
				</view>
				<view>
					<text class="card_left">交易面积单位</text>
					<text class="card_right">{{details.tenderInfo.tenDealAreaUnit}}</text>
				</view>
				<view>
					<text class="card_left">保证金</text>
					<text class="card_right">{{details.tenderInfo.earnestMoney}}</text>
				</view>
				<view>
					<text class="card_left">交易底价</text>
					<text class="card_right">{{details.tenderInfo.floorPrice}}</text>
				</view> 
				<view>
					<text class="card_left">交易低价单位</text>
					<text class="card_right">{{details.tenderInfo.floorPriceUnit}}</text>
				</view> 
				<view>
					<text class="card_left">标段描述</text>
					<text class="card_right">{{details.tenderInfo.tenRemark}}</text>
				</view> 
				<view>
					<text class="card_left">成交缴款方式</text>
					<text class="card_right">{{details.tenderInfo.tenDealPayType}}</text>
				</view> 
				<view>
					<text class="card_left">成交人</text>
					<text class="card_right">{{details.tenderInfo.secondParty}}</text>
				</view> 
				<view>
					<text class="card_left">成交日期</text>
					<text class="card_right">{{details.tenderInfo.dealDate}}</text>
				</view> 
				<view>
					<text class="card_left">成交情况</text>
					<text class="card_right">{{details.tenderInfo.dealRemark}}</text>
				</view> 
				<view>
					<text class="card_left">成交价</text>
					<text class="card_right">{{details.tenderInfo.dealPrice}}</text>
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
				proId:"",
			}
		},
		mounted() {
			this.getdata();
		},
		onLoad(potion){
			this.proId = potion.id
		},
		methods:{
			getdata() {
				uni.request({
					// url:'http://localhost:8080/static/json/details.json',
					url: this.$url + 'api-zlb/queryProResultInfo.do?' + "proId=" + this.proId,	
					success:(res)=>{
						console.log('request success', res)
						this.res = '请求结果 : ' + JSON.stringify(res);
						this.details = res.data.data;
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
