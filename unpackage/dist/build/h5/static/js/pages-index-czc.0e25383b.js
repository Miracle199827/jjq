(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-index-czc"],{"22d7":function(t,e,i){"use strict";var n=i("2566"),a=i.n(n);a.a},2566:function(t,e,i){var n=i("71d7");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("4f06").default;a("6d69fb26",n,!0,{sourceMap:!1,shadowMode:!1})},"71d7":function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,"uni-page-body[data-v-6825dd2e]{background:#fff!important}.main-div[data-v-6825dd2e]{padding:0 %?14?%}.main-ul[data-v-6825dd2e]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column}.main-li[data-v-6825dd2e]{padding:%?14?%;border-bottom:%?1?% solid #e7e7e7;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column}.main-li[data-v-6825dd2e]:last-child{\n\t/* border-bottom: none; */}.main-li uni-text[data-v-6825dd2e]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-flex:1;-webkit-flex:1;flex:1;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:start;-webkit-justify-content:flex-start;justify-content:flex-start}.main-span[data-v-6825dd2e]{font-weight:700;font-size:%?30?%;margin-top:%?5?%}.main-time[data-v-6825dd2e]{color:#727272;font-size:%?19?%;margin-top:%?15?%}",""]),t.exports=e},c7fb:function(t,e,i){"use strict";i.r(e);var n=i("f334"),a=i.n(n);for(var o in n)"default"!==o&&function(t){i.d(e,t,(function(){return n[t]}))}(o);e["default"]=a.a},ddfb:function(t,e,i){"use strict";i.r(e);var n=i("f9e9"),a=i("c7fb");for(var o in a)"default"!==o&&function(t){i.d(e,t,(function(){return a[t]}))}(o);i("22d7");var s,r=i("f0c5"),c=Object(r["a"])(a["default"],n["b"],n["c"],!1,null,"6825dd2e",null,!1,n["a"],s);e["default"]=c.exports},f334:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={data:function(){return{Project:[]}},mounted:function(){this.getProject()},methods:{getProject:function(){var t=this;uni.request({url:"../../static/json/czc.json",sslVerify:!1,success:function(e){console.log("request success",e),t.res="请求结果 : "+JSON.stringify(e),t.Project=e.data.Czc},fail:function(t){console.log("request fail",t),uni.showModal({content:t.errMsg,showCancel:!1})},complete:function(){t.loading=!1}})}}};e.default=n},f9e9:function(t,e,i){"use strict";var n;i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return o})),i.d(e,"a",(function(){return n}));var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"content"},[i("v-uni-view",{staticClass:"main-div"},t._l(t.Project,(function(e){return i("v-uni-view",{staticClass:"main-ul"},[i("v-uni-view",{staticClass:"main-li"},[i("v-uni-navigator",{attrs:{url:"./news"}},[i("v-uni-text",{staticClass:"main-span"},[t._v(t._s(e.name))]),i("v-uni-text",{staticClass:"main-time"},[t._v(t._s(e.time))])],1)],1)],1)})),1)],1)},o=[]}}]);