(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-a2480e6a"],{"1b92":function(e,t,a){"use strict";var o=a("a87f"),r=a.n(o);r.a},4616:function(e,t,a){},"5bc8":function(e,t,a){"use strict";t["a"]={data:function(){return{load:null}},beforeMount:function(){},beforeDestroy:function(){},mounted:function(){},methods:{computedIndex:function(e){return(this.page-1)*this.pageSize+e+1},formatTime:function(e){return this.$moment(e).format("YYYY-MM-DD HH:mm:ss")},openLoad:function(e){this.load=this.$loading({target:e})},closeLoad:function(){this.load&&this.load.close()}}}},"63ff":function(e,t,a){"use strict";var o=a("8ac3"),r=a.n(o);r.a},"644b":function(e,t,a){},"8ac3":function(e,t,a){},9742:function(e,t,a){"use strict";a.r(t);var o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"mine-box"},[a("el-tabs",{attrs:{type:"border-card"},model:{value:e.activeName,callback:function(t){e.activeName=t},expression:"activeName"}},[a("el-tab-pane",{attrs:{label:"考过的试卷",name:"examed"}},[a("span",{attrs:{slot:"label"},slot:"label"},[a("i",{staticClass:"el-icon-document"}),e._v(" 考过的试卷")]),e._v(" "),a("examed-paper")],1),e._v(" "),"T"===e.role?a("el-tab-pane",{attrs:{label:"创建的试卷",name:"created"}},[a("span",{attrs:{slot:"label"},slot:"label"},[a("i",{staticClass:"el-icon-edit-outline"}),e._v(" 创建的试卷")]),e._v(" "),a("my-paper")],1):e._e()],1)],1)},r=[],l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"my-paper-box"},[a("div",{staticClass:"search-box"},[a("el-input",{attrs:{clearable:"",placeholder:"试卷编号"},model:{value:e.searchKeys.paperId,callback:function(t){e.$set(e.searchKeys,"paperId",t)},expression:"searchKeys.paperId"}}),e._v(" "),a("el-input",{attrs:{clearable:"",placeholder:"试卷标题"},model:{value:e.searchKeys.paperTitle,callback:function(t){e.$set(e.searchKeys,"paperTitle",t)},expression:"searchKeys.paperTitle"}}),e._v(" "),a("el-input",{attrs:{clearable:"",placeholder:"科目"},model:{value:e.searchKeys.subject,callback:function(t){e.$set(e.searchKeys,"subject",t)},expression:"searchKeys.subject"}}),e._v(" "),a("el-select",{attrs:{clearable:"",placeholder:"发布状态"},model:{value:e.searchKeys.publish,callback:function(t){e.$set(e.searchKeys,"publish",t)},expression:"searchKeys.publish"}},e._l(e.publishState,(function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1),e._v(" "),a("el-button",{staticClass:"fr",attrs:{icon:"el-icon-search"},on:{click:function(t){return t.stopPropagation(),e.search(t)}}})],1),e._v(" "),a("div",[a("el-table",{attrs:{data:e.paperList,border:"",stripe:""}},[a("el-table-column",{attrs:{label:"序号",width:"50",align:"center","show-overflow-tooltip":""},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n          "+e._s(e.computedIndex(t.$index))+"\n        ")]}}])}),e._v(" "),a("el-table-column",{attrs:{prop:"paperId",label:"试卷编号",align:"center","show-overflow-tooltip":""}}),e._v(" "),a("el-table-column",{attrs:{prop:"paperTitle",label:"试卷标题",align:"center","show-overflow-tooltip":""}}),e._v(" "),a("el-table-column",{attrs:{prop:"subject",label:"科目",align:"center","show-overflow-tooltip":""}}),e._v(" "),a("el-table-column",{attrs:{prop:"createdAt",label:"创建时间",align:"center","show-overflow-tooltip":""},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n          "+e._s(e.formatTime(t.row.createdAt))+"\n        ")]}}])}),e._v(" "),a("el-table-column",{attrs:{prop:"publish",label:"发布",align:"center",width:"110px","show-overflow-tooltip":""},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{icon:"el-icon-sort",type:t.row.publish?"success":"warning",size:"mini"},on:{click:function(a){return e.changePublish(t.row)}}},[e._v(e._s(t.row.publish?"已发布":"未发布"))])]}}])}),e._v(" "),a("el-table-column",{attrs:{prop:"startTime",label:"开考时间",align:"center","show-overflow-tooltip":""}}),e._v(" "),a("el-table-column",{attrs:{prop:"endTime",label:"截止时间",align:"center","show-overflow-tooltip":""}}),e._v(" "),a("el-table-column",{attrs:{prop:"time",label:"考试用时",align:"center","show-overflow-tooltip":""}}),e._v(" "),a("el-table-column",{attrs:{prop:"singles",label:"单选题量",align:"center","show-overflow-tooltip":""}}),e._v(" "),a("el-table-column",{attrs:{prop:"singlesScore",label:"单选总分",align:"center","show-overflow-tooltip":""}}),e._v(" "),a("el-table-column",{attrs:{prop:"multiples",label:"多选题量",align:"center","show-overflow-tooltip":""}}),e._v(" "),a("el-table-column",{attrs:{prop:"multiplesScore",label:"多选总分",align:"center","show-overflow-tooltip":""}}),e._v(" "),a("el-table-column",{attrs:{prop:"judges",label:"判断题量",align:"center","show-overflow-tooltip":""}}),e._v(" "),a("el-table-column",{attrs:{prop:"judgesScore",label:"判断总分",align:"center","show-overflow-tooltip":""}}),e._v(" "),a("el-table-column",{attrs:{prop:"completions",label:"填空题量",align:"center","show-overflow-tooltip":""}}),e._v(" "),a("el-table-column",{attrs:{prop:"completionsScore",label:"填空总分",align:"center","show-overflow-tooltip":""}}),e._v(" "),a("el-table-column",{attrs:{prop:"essays",label:"问答题量",align:"center","show-overflow-tooltip":""}}),e._v(" "),a("el-table-column",{attrs:{prop:"essaysScore",label:"问答总分",align:"center","show-overflow-tooltip":""}}),e._v(" "),a("el-table-column",{attrs:{prop:"text",label:"试卷说明",align:"center",width:"95px","show-overflow-tooltip":""},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{icon:"el-icon-view",size:"mini",type:"success"},on:{click:function(a){return e.watchText(t.row.text)}}},[e._v("查看")])]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"操作",align:"center","show-overflow-tooltip":"",fixed:"right",width:"270"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{icon:"el-icon-edit-outline",size:"mini",type:"info"},on:{click:function(a){return e.amend(t.row.paperId)}}},[e._v("修改")]),e._v(" "),a("el-button",{attrs:{icon:"el-icon-edit",size:"mini",type:"primary"},on:{click:function(a){return e.goEdit(t.row)}}},[e._v("编辑")]),e._v(" "),a("el-button",{attrs:{icon:"el-icon-remove-outline",size:"mini",type:"danger"},on:{click:function(a){return e.deletePaper(t.row)}}},[e._v("删除")])]}}])})],1),e._v(" "),a("el-pagination",{staticClass:"pagination",attrs:{background:"",layout:"total, sizes, prev, pager, next, jumper","page-size":e.pageSize,"page-sizes":e.pageSizes,"current-page":e.page,total:e.total},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}})],1),e._v(" "),a("el-dialog",{attrs:{visible:e.textDialog,title:"试卷说明"},on:{"update:visible":function(t){e.textDialog=t}}},[e._v("\n    "+e._s(e.text)+"\n  ")])],1)},n=[],s=(a("5ab2"),a("6d57"),a("e10e"),a("ac9f")),i=a("5bc8");function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,o)}return a}function p(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){Object(s["a"])(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var u={mixins:[i["a"]],data:function(){return{page:1,pageSize:10,pageSizes:[2,10,20,30],paperList:[],total:0,text:"",textDialog:!1,searchKeys:{paperId:"",paperTitle:"",subject:"",publish:""},publishState:[]}},created:function(){this.publishState=this.$store.getters.constant.publishState,this.getPapers()},methods:{getPapers:function(){var e=this,t=p({page:this.page,pageSize:this.pageSize},this.searchKeys);this.$store.dispatch("paper/getPapers",t).then((function(t){e.paperList=t.data,e.total=t.total}))},watchText:function(e){this.text=e,this.textDialog=!0},handleSizeChange:function(e){this.pageSize=e,this.getPapers()},handleCurrentChange:function(e){this.page=e,this.getPapers()},deletePaper:function(e){var t=this;this.$confirm("确定要删除试卷 ".concat(e.paperTitle," ?"),"提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){return t.$store.dispatch("paper/detelePaper",{paperId:e.paperId})})).then((function(e){t.$message.success("成功删除试卷"),t.getPapers()})).catch((function(){t.$message.info("取消删除试卷")}))},goEdit:function(e){this.$router.push("/paper/edit/"+e.paperId)},amend:function(e){this.$router.push("/paper/create?code="+e)},search:function(){this.page=1,this.getPapers()},changePublish:function(e){var t=this,a={paperId:e.paperId,publish:e.publish},o=e.publish?"撤回成功！":"发布成功！";this.$store.dispatch("paper/changePublish",a).then((function(e){t.$message.success(o),t.getPapers()}))}}},h=u,b=(a("e276"),a("63ff"),a("e90a")),f=Object(b["a"])(h,l,n,!1,null,"2523cbe8",null),d=f.exports,v=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"examedPaper-box"},[a("div",{staticClass:"search-box"},[a("el-input",{attrs:{clearable:"",placeholder:"试卷编号"},model:{value:e.searchKeys.paperId,callback:function(t){e.$set(e.searchKeys,"paperId",t)},expression:"searchKeys.paperId"}}),e._v(" "),a("el-input",{attrs:{clearable:"",placeholder:"试卷标题"},model:{value:e.searchKeys.paperTitle,callback:function(t){e.$set(e.searchKeys,"paperTitle",t)},expression:"searchKeys.paperTitle"}}),e._v(" "),a("el-input",{attrs:{clearable:"",placeholder:"科目"},model:{value:e.searchKeys.subject,callback:function(t){e.$set(e.searchKeys,"subject",t)},expression:"searchKeys.subject"}}),e._v(" "),a("el-button",{staticClass:"fr",attrs:{icon:"el-icon-search"},on:{click:function(t){return t.stopPropagation(),e.search(t)}}})],1),e._v(" "),a("div",[a("el-table",{attrs:{data:e.examRecords,border:"",stripe:""}},[a("el-table-column",{attrs:{label:"序号",width:"50",align:"center","show-overflow-tooltip":""},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n          "+e._s(e.computedIndex(t.$index))+"\n        ")]}}])}),e._v(" "),a("el-table-column",{attrs:{prop:"paper.paperId",label:"试卷编号",align:"center","show-overflow-tooltip":""}}),e._v(" "),a("el-table-column",{attrs:{prop:"paper.paperTitle",label:"试卷标题",align:"center","show-overflow-tooltip":""}}),e._v(" "),a("el-table-column",{attrs:{prop:"paper.subject",label:"科目",align:"center","show-overflow-tooltip":""}}),e._v(" "),a("el-table-column",{attrs:{prop:"paper.user.name",label:"出卷人",align:"center","show-overflow-tooltip":""}}),e._v(" "),a("el-table-column",{attrs:{prop:"scoreExam",label:"总得分",align:"center","show-overflow-tooltip":""},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n          "+e._s(e.showScore(t.row.scoreExam))+" / "+e._s(t.row.paper.totalScore)+"\n        ")]}}])}),e._v(" "),a("el-table-column",{attrs:{prop:"singlesExam",label:"单选得分",align:"center","show-overflow-tooltip":""},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n          "+e._s(e.showScore(t.row.singlesExam))+" / "+e._s(t.row.paper.singlesScore)+"\n        ")]}}])}),e._v(" "),a("el-table-column",{attrs:{prop:"multiplesExam",label:"多选得分",align:"center","show-overflow-tooltip":""},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n          "+e._s(e.showScore(t.row.multiplesExam))+" / "+e._s(t.row.paper.multiplesScore)+"\n        ")]}}])}),e._v(" "),a("el-table-column",{attrs:{prop:"judgesExam",label:"判断得分",align:"center","show-overflow-tooltip":""},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n          "+e._s(e.showScore(t.row.judgesExam))+" / "+e._s(t.row.paper.judgesScore)+"\n        ")]}}])}),e._v(" "),a("el-table-column",{attrs:{prop:"completionsExam",label:"填空得分",align:"center","show-overflow-tooltip":""},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n          "+e._s(e.showScore(t.row.completionsExam))+" / "+e._s(t.row.paper.completionsScore)+"\n        ")]}}])}),e._v(" "),a("el-table-column",{attrs:{prop:"essaysExam",label:"问答得分",align:"center","show-overflow-tooltip":""},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n          "+e._s(e.showScore(t.row.essaysExam))+" / "+e._s(t.row.paper.essaysScore)+"\n        ")]}}])}),e._v(" "),a("el-table-column",{attrs:{prop:"startExam",label:"开考时间",align:"center","show-overflow-tooltip":""}}),e._v(" "),a("el-table-column",{attrs:{prop:"endExam",label:"交卷时间",align:"center","show-overflow-tooltip":""}}),e._v(" "),a("el-table-column",{attrs:{prop:"timeExam",label:"考试用时",align:"center","show-overflow-tooltip":""}}),e._v(" "),a("el-table-column",{attrs:{label:"操作",align:"center","show-overflow-tooltip":"",fixed:"right",width:"120"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{icon:"el-icon-view",size:"mini",type:"success"},on:{click:function(a){return e.showDetail(t.row.eid,t.row.paper.paperId)}}},[e._v("查看详情")])]}}])})],1),e._v(" "),a("el-pagination",{staticClass:"pagination",attrs:{background:"",layout:"total, sizes, prev, pager, next, jumper","page-size":e.pageSize,"page-sizes":e.pageSizes,"current-page":e.page,total:e.total},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}})],1)])},g=[];function m(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,o)}return a}function w(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?m(Object(a),!0).forEach((function(t){Object(s["a"])(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):m(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var _={components:{},mixins:[i["a"]],data:function(){return{page:1,pageSize:10,pageSizes:[2,10,20,30],total:0,examRecords:[],searchKeys:{paperId:"",paperTitle:"",subject:""}}},created:function(){this.getExamedPaper()},methods:{getExamedPaper:function(){var e=this,t=w({page:this.page,pageSize:this.pageSize},this.searchKeys);this.$store.dispatch("exam/getExamedPaper",t).then((function(t){e.total=t.total,e.examRecords=t.data}))},search:function(){this.getExamedPaper()},handleSizeChange:function(e){this.searchKeys.pageSize=e,this.getExamedPaper()},handleCurrentChange:function(e){this.searchKeys.page=e,this.getExamedPaper()},showScore:function(e){return 0===e||e?e:"尚未批改"},showDetail:function(e,t){this.$router.push("/exam/examDetail?e=".concat(e,"&p=").concat(t))}}},y=_,x=(a("fdba"),a("1b92"),Object(b["a"])(y,v,g,!1,null,"5617bbaa",null)),S=x.exports,j={name:"Mine",components:{myPaper:d,examedPaper:S},data:function(){return{activeName:"examed",role:""}},created:function(){this.role=this.$store.getters.userInfo.role}},P=j,O=(a("9fd1"),Object(b["a"])(P,o,r,!1,null,"00d66713",null));t["default"]=O.exports},"9fd1":function(e,t,a){"use strict";var o=a("4616"),r=a.n(o);r.a},a87f:function(e,t,a){},c93d:function(e,t,a){},e276:function(e,t,a){"use strict";var o=a("c93d"),r=a.n(o);r.a},fdba:function(e,t,a){"use strict";var o=a("644b"),r=a.n(o);r.a}}]);