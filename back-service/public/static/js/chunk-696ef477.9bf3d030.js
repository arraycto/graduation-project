(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-696ef477"],{"07c7":function(e,t,s){"use strict";var n=s("bcfc"),r=s.n(n);r.a},"163d":function(e,t,s){"use strict";var n=s("e7ad"),r=s("e042"),a=s("75c4"),i=s("1e5b"),o=s("94b3"),l=s("238a"),c=s("2ea2").f,u=s("dcb7").f,d=s("064e").f,p=s("777a").trim,m="Number",h=n[m],f=h,v=h.prototype,_=a(s("e005")(v))==m,g="trim"in String.prototype,b=function(e){var t=o(e,!1);if("string"==typeof t&&t.length>2){t=g?t.trim():p(t,3);var s,n,r,a=t.charCodeAt(0);if(43===a||45===a){if(s=t.charCodeAt(2),88===s||120===s)return NaN}else if(48===a){switch(t.charCodeAt(1)){case 66:case 98:n=2,r=49;break;case 79:case 111:n=8,r=55;break;default:return+t}for(var i,l=t.slice(2),c=0,u=l.length;c<u;c++)if(i=l.charCodeAt(c),i<48||i>r)return NaN;return parseInt(l,n)}}return+t};if(!h(" 0o1")||!h("0b1")||h("+0x1")){h=function(e){var t=arguments.length<1?0:e,s=this;return s instanceof h&&(_?l((function(){v.valueOf.call(s)})):a(s)!=m)?i(new f(b(t)),s,h):b(t)};for(var y,I=s("149f")?c(f):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),x=0;I.length>x;x++)r(f,y=I[x])&&!r(h,y)&&d(h,y,u(f,y));h.prototype=v,v.constructor=h,s("bf16")(n,m,h)}},"1aba":function(e,t,s){"use strict";var n=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"material-input__component",class:e.computedClasses},[s("div",{class:{iconClass:e.icon}},[e.icon?s("i",{staticClass:"el-input__icon material-input__icon",class:["el-icon-"+e.icon]}):e._e(),e._v(" "),"email"===e.type?s("input",{directives:[{name:"model",rawName:"v-model",value:e.currentValue,expression:"currentValue"}],staticClass:"material-input",attrs:{name:e.name,placeholder:e.fillPlaceHolder,readonly:e.readonly,disabled:e.disabled,autocomplete:e.autoComplete,required:e.required,type:"email"},domProps:{value:e.currentValue},on:{focus:e.handleMdFocus,blur:e.handleMdBlur,input:[function(t){t.target.composing||(e.currentValue=t.target.value)},e.handleModelInput]}}):e._e(),e._v(" "),"url"===e.type?s("input",{directives:[{name:"model",rawName:"v-model",value:e.currentValue,expression:"currentValue"}],staticClass:"material-input",attrs:{name:e.name,placeholder:e.fillPlaceHolder,readonly:e.readonly,disabled:e.disabled,autocomplete:e.autoComplete,required:e.required,type:"url"},domProps:{value:e.currentValue},on:{focus:e.handleMdFocus,blur:e.handleMdBlur,input:[function(t){t.target.composing||(e.currentValue=t.target.value)},e.handleModelInput]}}):e._e(),e._v(" "),"number"===e.type?s("input",{directives:[{name:"model",rawName:"v-model",value:e.currentValue,expression:"currentValue"}],staticClass:"material-input",attrs:{name:e.name,placeholder:e.fillPlaceHolder,step:e.step,readonly:e.readonly,disabled:e.disabled,autocomplete:e.autoComplete,max:e.max,min:e.min,minlength:e.minlength,maxlength:e.maxlength,required:e.required,type:"number"},domProps:{value:e.currentValue},on:{focus:e.handleMdFocus,blur:e.handleMdBlur,input:[function(t){t.target.composing||(e.currentValue=t.target.value)},e.handleModelInput]}}):e._e(),e._v(" "),"password"===e.type?s("input",{directives:[{name:"model",rawName:"v-model",value:e.currentValue,expression:"currentValue"}],staticClass:"material-input",attrs:{name:e.name,placeholder:e.fillPlaceHolder,readonly:e.readonly,disabled:e.disabled,autocomplete:e.autoComplete,max:e.max,min:e.min,required:e.required,type:"password"},domProps:{value:e.currentValue},on:{focus:e.handleMdFocus,blur:e.handleMdBlur,input:[function(t){t.target.composing||(e.currentValue=t.target.value)},e.handleModelInput]}}):e._e(),e._v(" "),"tel"===e.type?s("input",{directives:[{name:"model",rawName:"v-model",value:e.currentValue,expression:"currentValue"}],staticClass:"material-input",attrs:{name:e.name,placeholder:e.fillPlaceHolder,readonly:e.readonly,disabled:e.disabled,autocomplete:e.autoComplete,required:e.required,type:"tel"},domProps:{value:e.currentValue},on:{focus:e.handleMdFocus,blur:e.handleMdBlur,input:[function(t){t.target.composing||(e.currentValue=t.target.value)},e.handleModelInput]}}):e._e(),e._v(" "),"text"===e.type?s("input",{directives:[{name:"model",rawName:"v-model",value:e.currentValue,expression:"currentValue"}],staticClass:"material-input",attrs:{name:e.name,placeholder:e.fillPlaceHolder,readonly:e.readonly,disabled:e.disabled,autocomplete:e.autoComplete,minlength:e.minlength,maxlength:e.maxlength,required:e.required,type:"text"},domProps:{value:e.currentValue},on:{focus:e.handleMdFocus,blur:e.handleMdBlur,input:[function(t){t.target.composing||(e.currentValue=t.target.value)},e.handleModelInput]}}):e._e(),e._v(" "),s("span",{staticClass:"material-input-bar"}),e._v(" "),s("label",{staticClass:"material-label"},[e._t("default")],2),e._v(" "),s("label",{staticClass:"material-label material-append-label"},[e._t("append")],2)])])},r=[],a=(s("163d"),{name:"MdInput",props:{icon:String,name:String,type:{type:String,default:"text"},value:[String,Number],placeholder:String,readonly:Boolean,disabled:Boolean,min:String,max:String,step:String,minlength:Number,maxlength:Number,required:{type:Boolean,default:!0},autoComplete:{type:String,default:"off"},validateEvent:{type:Boolean,default:!0}},data:function(){return{currentValue:this.value,focus:!1,fillPlaceHolder:null}},computed:{computedClasses:function(){return{"material--active":this.focus,"material--disabled":this.disabled,"material--raised":Boolean(this.focus||this.currentValue)}}},watch:{value:function(e){this.currentValue=e}},methods:{handleModelInput:function(e){var t=e.target.value;this.$emit("input",t),"ElFormItem"===this.$parent.$options.componentName&&this.validateEvent&&this.$parent.$emit("el.form.change",[t]),this.$emit("change",t)},handleMdFocus:function(e){this.focus=!0,this.$emit("focus",e),this.placeholder&&""!==this.placeholder&&(this.fillPlaceHolder=this.placeholder)},handleMdBlur:function(e){this.focus=!1,this.$emit("blur",e),this.fillPlaceHolder=null,"ElFormItem"===this.$parent.$options.componentName&&this.validateEvent&&this.$parent.$emit("el.form.blur",[this.currentValue])}}}),i=a,o=(s("07c7"),s("e90a")),l=Object(o["a"])(i,n,r,!1,null,"01325c60",null);t["a"]=l.exports},"2afa":function(e,t,s){},"777a":function(e,t,s){var n=s("e46b"),r=s("f6b4"),a=s("238a"),i=s("9769"),o="["+i+"]",l="​",c=RegExp("^"+o+o+"*"),u=RegExp(o+o+"*$"),d=function(e,t,s){var r={},o=a((function(){return!!i[e]()||l[e]()!=l})),c=r[e]=o?t(p):i[e];s&&(r[s]=c),n(n.P+n.F*o,"String",r)},p=d.trim=function(e,t){return e=String(r(e)),1&t&&(e=e.replace(c,"")),2&t&&(e=e.replace(u,"")),e};e.exports=d},"8e8d":function(e,t,s){"use strict";s.r(t);var n=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"examDetail-box"},[s("el-row",{attrs:{gutter:20}},[s("el-col",{attrs:{span:6}},[e.record?s("el-card",[s("div",{attrs:{slot:"header"},slot:"header"},[s("h3",[e._v("考生: "+e._s(e.userInfo.name))])]),e._v(" "),s("el-image",{attrs:{src:e.userInfo.headIcon||e.defaultHeadIcon,"preview-src-list":[e.userInfo.headIcon||e.defaultHeadIcon]}},[s("div",{staticClass:"image-slot",attrs:{slot:"error"},slot:"error"},[s("i",{staticClass:"el-icon-picture-outline"})])]),e._v(" "),s("p",[e._v("学校："+e._s(e.userInfo.school))]),e._v(" "),s("p",[e._v("专业："+e._s(e.userInfo.major))]),e._v(" "),s("p",[e._v("班级："+e._s(e.userInfo.class))]),e._v(" "),s("p",[e._v("学号："+e._s(e.userInfo.number))]),e._v(" "),s("h4",[e._v("试卷得分："+e._s(e.showScore(e.record.target.scoreExam))+" / "+e._s(e.config.totalScore))]),e._v(" "),s("h4",[e._v("单选得分："+e._s(e.showScore(e.record.target.singlesExam))+" / "+e._s(e.config.singlesScore))]),e._v(" "),s("h4",[e._v("多选得分："+e._s(e.showScore(e.record.target.multiplesExam))+" / "+e._s(e.config.multiplesScore))]),e._v(" "),s("h4",[e._v("判断得分："+e._s(e.showScore(e.record.target.judgesExam))+" / "+e._s(e.config.judgesScore))]),e._v(" "),s("h4",[e._v("填空得分："+e._s(e.showScore(e.record.target.completionsExam))+" / "+e._s(e.config.completionsScore))]),e._v(" "),s("h4",[e._v("问答得分："+e._s(e.showScore(e.record.target.essaysExam))+" / "+e._s(e.config.essaysScore))]),e._v(" "),s("h4",[e._v("整体排名："+e._s(e.record.orderNumber)+" / "+e._s(e.record.recordNumber))]),e._v(" "),s("h4",[e._v("考试用时："+e._s(e.record.target.timeExam))])],1):e._e()],1),e._v(" "),s("el-col",{attrs:{span:18}},[s("el-card",{staticClass:"box-card"},[s("div",{attrs:{slot:"header"},slot:"header"},[s("h3",[e._v(e._s(e.config.paperTitle))])]),e._v(" "),e._l(e.paper,(function(t){return s("div",{key:t.index},[s("h4",[e._v(e._s(t.index)+"、"+e._s(t.name))]),e._v(" "),e._l(t.questions,(function(n,r){return s("div",{key:r},[0!==r?s("div",[s("div",{staticClass:"flex-box"},[s("span",{staticStyle:{"line-height":"50px"}},[e._v(e._s(r)+"、")]),e._v(" "),s("el-tooltip",{attrs:{effect:"dark",content:"点击收藏该题",placement:"top-start"}},[s("div",{staticClass:"issues",domProps:{innerHTML:e._s(n.content)},on:{click:function(s){return e.collectQuestion(n,t,e.config)}}})])],1),e._v(" "),n[e.selectOptions[0]]?s("div",e._l(e.selectOptions,(function(t){return s("div",{key:t},[n[t]?s("div",{staticClass:"flex-box"},[s("span",{staticStyle:{"line-height":"50px"}},[e._v(e._s(t)+"、")]),e._v(" "),s("span",{domProps:{innerHTML:e._s(n[t])}})]):e._e()])})),0):e._e(),e._v(" "),s("p",[e._v("\n                分值："+e._s(n.score)+"\n              ")]),e._v(" "),s("p",[e._v("参考答案："+e._s(n.rightKey))]),e._v(" "),s("p",[e._v("我的答案：\n                "),"essays"!==t.type?s("span",{class:{green:null!==n.isTrue&&n.isTrue,red:null!==n.isTrue&&!n.isTrue}},[e._v(e._s(n.mineAnswer))]):e._e(),e._v(" "),"essays"===t.type?s("span",{class:{green:null!==n.isTrue&&n.isTrue,red:null!==n.isTrue&&!n.isTrue},domProps:{innerHTML:e._s(n.mineAnswer)}}):e._e(),e._v(" "),null!=n.isTrue&&n.isTrue?s("i",{staticClass:"isTrue-tip green el-icon-check"}):e._e(),e._v(" "),null==n.isTrue||n.isTrue?e._e():s("i",{staticClass:"isTrue-tip red el-icon-close"})])]):e._e()])}))],2)}))],2)],1)],1),e._v(" "),s("el-dialog",{attrs:{visible:e.visable,title:"收藏试题","show-close":!1},on:{closed:e.closeDialog}},[s("MDinput",{staticClass:"paperId-input",model:{value:e.collectionTitle,callback:function(t){e.collectionTitle=t},expression:"collectionTitle"}},[s("span",[e._v("标题")])]),e._v(" "),s("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[s("el-button",{on:{click:function(t){e.visable=!1}}},[s("i",{staticClass:"el-icon-close"}),e._v(" 取 消")]),e._v(" "),s("el-button",{attrs:{type:"primary"},on:{click:e.submitCollection}},[s("i",{staticClass:"el-icon-circle-plus-outline"}),e._v(" 收 藏")])],1)],1)],1)},r=[],a=(s("cc57"),s("1aba")),i={components:{MDinput:a["a"]},data:function(){return{config:{},questions:{},userInfo:"",record:"",selectOptions:[],questionTypes:[],chineseOrderNumber:[],answersRecords:[],paper:[],collection:"",visable:!1,collectionTitle:"",collectionIssue:{}}},created:function(){this.userInfo=this.$store.getters.userInfo,this.selectOptions=this.$store.getters.constant.selectOptions,this.questionTypes=this.$store.getters.constant.question.types,this.chineseOrderNumber=this.$store.getters.constant.chineseOrderNumber,this.collection=this.$store.getters.constant.question.state.collection,this.getPaperDetail(),this.getExamRecord()},methods:{getPaperDetail:function(){var e=this,t={paperId:this.$route.query.p};this.$store.dispatch("paper/getPaperDetail",t).then((function(t){e.config=t.data.config,e.getAnswersByEid()})).catch((function(){e.$message.error("试卷信息获取失败，请稍后重试"),e.$router.go(-1)}))},getPaperQuestions:function(){var e=this,t=this.$route.query.p;this.$store.dispatch("question/getPaperQuestions",{paperId:t}).then((function(t){var s=t.data,n=function(t){s[t].map((function(s){for(var n=0,r=e.answersRecords.length;n<r;n++)s.qid===e.answersRecords[n].qid&&(s.mineAnswer=e.answersRecords[n].mineAnswer,s.isTrue=e.answersRecords[n].isTrue);e.questions[t]||(e.questions[t]=[]),e.questions[t][s.orderNumber]=s}))};for(var r in s)n(r);e.initPaper()}))},getAnswersByEid:function(){var e=this,t={eid:this.$route.query.e};this.$store.dispatch("answer/getAnswersByEid",t).then((function(t){e.answersRecords=t.data,e.getPaperQuestions()}))},initPaper:function(){var e=this,t=0;this.paper=this.questionTypes.filter((function(t,s){return e.config[t.type]})).map((function(s){var n={index:e.chineseOrderNumber[t],name:s.name,type:s.type,questions:e.questions[s.type]};return t++,n}))},getExamRecord:function(){var e=this,t={eid:this.$route.query.e,paperId:this.$route.query.p};this.$store.dispatch("exam/getExamRecordByAP",t).then((function(t){e.record=t.data}))},showScore:function(e){return 0===e||e?e:"尚未批改"},collectQuestion:function(e,t,s){var n={};n.content=Object.assign({},e),delete n.content.qid,delete n.content.createdAt,delete n.content.paperId,n.content.state=this.collection,n.type=t.type,n.content.from=s.paperTitle,n.content.auth=s.user.name,this.collectionIssue=n,this.visable=!0},submitCollection:function(){var e=this;if(!this.collectionTitle)return this.$message.warning("请填写改题目标题，用于区分其他收藏的题目！"),!1;this.collectionIssue.content.title=this.collectionTitle,this.visable=!1,this.$store.dispatch("question/saveQuestion",this.collectionIssue).then((function(t){e.$message.success("收藏成功！"),e.visable=!1}))},closeDialog:function(){this.collectionTitle="",this.collectionIssue={}}}},o=i,l=(s("ff72"),s("e90a")),c=Object(l["a"])(o,n,r,!1,null,"bcee506a",null);t["default"]=c.exports},9769:function(e,t){e.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},bcfc:function(e,t,s){},ff72:function(e,t,s){"use strict";var n=s("2afa"),r=s.n(n);r.a}}]);