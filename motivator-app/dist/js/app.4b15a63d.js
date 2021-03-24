(function(e){function t(t){for(var i,l,c=t[0],a=t[1],r=t[2],d=0,m=[];d<c.length;d++)l=c[d],Object.prototype.hasOwnProperty.call(o,l)&&o[l]&&m.push(o[l][0]),o[l]=0;for(i in a)Object.prototype.hasOwnProperty.call(a,i)&&(e[i]=a[i]);u&&u(t);while(m.length)m.shift()();return n.push.apply(n,r||[]),s()}function s(){for(var e,t=0;t<n.length;t++){for(var s=n[t],i=!0,c=1;c<s.length;c++){var a=s[c];0!==o[a]&&(i=!1)}i&&(n.splice(t--,1),e=l(l.s=s[0]))}return e}var i={},o={app:0},n=[];function l(t){if(i[t])return i[t].exports;var s=i[t]={i:t,l:!1,exports:{}};return e[t].call(s.exports,s,s.exports,l),s.l=!0,s.exports}l.m=e,l.c=i,l.d=function(e,t,s){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(l.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)l.d(s,i,function(t){return e[t]}.bind(null,i));return s},l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],a=c.push.bind(c);c.push=t,c=c.slice();for(var r=0;r<c.length;r++)t(c[r]);var u=a;n.push([0,"chunk-vendors"]),s()})({0:function(e,t,s){e.exports=s("56d7")},"56d7":function(e,t,s){"use strict";s.r(t);var i=s("2b0e"),o=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{class:{noscroll:e.showintro},attrs:{id:"app"}},[s("div",{ref:"intro",staticClass:"container-fluid intro",class:{hidden:!e.showintro}},[s("div",{staticClass:"container"},[s("div",{staticClass:"row"},[e._m(0),s("div",{staticClass:"col-md intromenu"},[e._v(" Open collection: "),s("ul",[s("draggable",{attrs:{list:e.collections,group:"collectionlist",ghostClass:"ghost",draggable:".menuitem",delay:"100"}},[e._l(e.collections,(function(t,i){return s("li",{key:i,staticClass:"menuitem"},[s("a",{attrs:{href:"javascript:void(0)"},on:{click:function(t){e.loadCollection(i),e.animateIntro(i)}}},[e._v(e._s(t.title))])])})),s("li",{staticClass:"addnewcollection"},[s("a",{attrs:{href:"javascript:void(0)"},on:{click:function(t){e.addCollection(),e.animateIntro()}}},[s("i",{staticClass:"icon-plus"}),e._v(" New")])])],2)],1)])])])]),s("header",{staticClass:"header container-fluid"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col"},[s("div",{staticClass:"brand"},[s("h1",[s("a",{attrs:{href:"javascript:void(0)"},on:{click:function(t){return e.animateIntro("reverse")}}},[s("i",{staticClass:"icon-check-1"}),e._v("Motivator")])])]),s("nav",[s("div",{staticClass:"menutoggle"},[s("span",{staticClass:"menutitle"},[e._v("Collections:")]),s("button",{staticClass:"icon menu-button",on:{click:function(t){e.showcollections=!e.showcollections}}},[s("i",{staticClass:"icon-menu"})])]),s("Collections",{attrs:{collectionsmenu:e.collectionsmenu,cindex:e.cindex,title:e.collections[e.cindex].title,showcollections:e.showcollections},on:{addcollection:e.addCollection,loadcollection:e.loadCollection,deletecollection:e.deleteCollection}})],1)])])]),s("main",{staticClass:"main container-fluid no-gutters p-0",attrs:{id:"maincontent"}},[s("div",{staticClass:"page-title container-fluid"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col"},[s("h2",{directives:[{name:"show",rawName:"v-show",value:!e.editcollectiontitle,expression:"!editcollectiontitle"}],attrs:{tabindex:"0"},on:{focus:function(t){return e.focusInput("titleinput")},click:function(t){e.editcollectiontitle=!0}}},[s("i",{staticClass:"icon-pencil-alt"}),e._v(" "+e._s(e.collections[e.cindex].title)+" ")]),s("input",{directives:[{name:"show",rawName:"v-show",value:e.editcollectiontitle,expression:"editcollectiontitle"},{name:"model",rawName:"v-model",value:e.collections[e.cindex].title,expression:"collections[cindex].title"}],ref:"titleinput",attrs:{type:"text"},domProps:{value:e.collections[e.cindex].title},on:{blur:function(t){e.editcollectiontitle=!1},keyup:function(t){if(!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter"))return null;e.editcollectiontitle=!1},input:function(t){t.target.composing||e.$set(e.collections[e.cindex],"title",t.target.value)}}})])])]),s("div",{staticClass:"main-body container"},[s("div",{staticClass:"row"},[s("div",{staticClass:"buckets-panel col-md-8 col-xl-9"},[s("Buckets",{ref:"bucketslist",attrs:{buckets:e.collections[e.cindex].buckets},on:{addbucket:e.addBucket,deletebucket:e.deleteBucket}})],1),s("div",{staticClass:"randomize-panel col-md-4 col-xl-3"},[s("Randomize",{attrs:{buckets:e.collections[e.cindex].buckets,listoptions:e.collections[e.cindex].listoptions},on:{generatelist:e.generateList}})],1)])])]),e.showoutput?s("Output",{attrs:{randomlist:e.randomlist,footnote:e.outputfootnote,removedeleteditems:e.collections[e.cindex].removedeleteditems},on:{"update:removedeleteditems":function(t){return e.$set(e.collections[e.cindex],"removedeleteditems",t)},closeoutput:e.closeOutput}}):e._e(),s("div",{staticClass:"alert",class:{showing:e.bucketscleared>0}},[s("div",{staticClass:"alert-inner"},[s("h3",[e._v(" "+e._s(e.alertmessage)+" ")]),s("p",[e._v("Good job!")])])]),s("footer",{staticClass:"footer container-fluid"},[e._v(" *App data is saved to browser cache. © Keef Studio 2021. ")])],1)},n=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"col-md introcopy"},[s("h2",[s("i",{staticClass:"icon-check-1"}),e._v("Motivator")]),s("p",[e._v(" A list making app to help mix up routines and skirt indecision. Sort items into buckets and collections then create radomly generated to-do lists. Check off and delete items to track progress and empty buckets, and be more motivated! ")])])}],l=(s("fa6d"),s("106a"),s("cffa")),c=(s("a47a"),s("944d"),s("b76a")),a=s.n(c),r=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"collections cf"},[s("div",{directives:[{name:"focus-outside",rawName:"v-focus-outside",value:e.focusOutsideMenu,expression:"focusOutsideMenu"}],staticClass:"collections-menu"},[s("ul",[s("li",[s("a",{staticClass:"show-menu",attrs:{href:"javascript:void(0)"},on:{click:function(t){e.showmenu=!e.showmenu}}},[e._v(e._s(e.title))]),s("ul",{directives:[{name:"show",rawName:"v-show",value:e.showcollections||e.showmenu,expression:"showcollections || showmenu"}]},e._l(e.collectionsmenu,(function(t,i){return s("li",{key:i,class:{selected:i==e.cindex}},[s("a",{ref:"collectionlink",refInFor:!0,attrs:{href:"javascript:void(0)"},on:{click:function(t){e.$emit("loadcollection",i),t.target.blur,e.showmenu=!1}}},[e._v(e._s(t))])])})),0)])])]),s("div",{directives:[{name:"focus-outside",rawName:"v-focus-outside",value:e.focusOutsideOptions,expression:"focusOutsideOptions"}],staticClass:"collections-options"},[s("button",{staticClass:"icon menu-button show-options",on:{click:function(t){e.showoptions=!e.showoptions}}},[e._v(" ⋮ ")]),s("ul",{directives:[{name:"show",rawName:"v-show",value:e.showcollections||e.showoptions,expression:"showcollections || showoptions"}]},[s("li",[s("a",{attrs:{href:"javascript:void(0)"},on:{click:function(t){e.$emit("addcollection"),e.showoptions=!1}}},[e._v("Create new")])]),s("li",[s("a",{attrs:{href:"javascript:void(0)"},on:{click:function(t){e.$emit("addcollection","duplicate"),e.showoptions=!1}}},[e._v("Duplicate")])]),s("li",{on:{mouseleave:function(t){e.deleteactive=!1}}},[s("em",{directives:[{name:"show",rawName:"v-show",value:e.deleteactive,expression:"deleteactive"}]},[e._v("Really?")]),e._v(" "),s("a",{attrs:{href:"javascript:void(0)"},on:{click:function(t){return t.stopPropagation(),e.deleteActive(t)}}},[s("span",{directives:[{name:"show",rawName:"v-show",value:!e.deleteactive,expression:"!deleteactive"}]},[e._v("Delete")]),s("span",{directives:[{name:"show",rawName:"v-show",value:e.deleteactive,expression:"deleteactive"}]},[e._v("Yes")])])])])])])},u=[],d=s("5f90"),m=s.n(d),h={name:"Collections",props:{collectionsmenu:Array,cindex:Number,title:{type:String,default:"Collections"},showcollections:{type:Boolean,default:!1}},directives:{focusOutside:m.a},data(){return{showmenu:!1,showoptions:!1,deleteactive:!1}},methods:{focusOutsideMenu:function(){this.showmenu=!1},focusOutsideOptions:function(){this.showoptions=!1},deleteActive:function(){!0===this.deleteactive?(this.$emit("deletecollection"),this.deleteactive=!1,this.showoptions=!1):this.deleteactive=!0}}},p=h,v=s("2877"),f=Object(v["a"])(p,r,u,!1,null,null,null),k=f.exports,b=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("h3",[e._v("Buckets")]),s("div",{staticClass:"buckets-list"},[s("draggable",e._b({attrs:{list:e.buckets,group:"bucketlist",ghostClass:"ghost",draggable:".item",delay:"100"},on:{start:function(t){e.sorted=!0},change:e.bucketSorted}},"draggable",e.dragOptions,!1),[e._l(e.buckets,(function(t,i){return s("bucket",{key:i,ref:"bucket",refInFor:!0,staticClass:"item",attrs:{bucket:t,bindex:i},on:{deletebucket:e.deleteBucket,editbucket:e.editBucket}})})),s("div",{staticClass:"bucket-card",attrs:{slot:"footer"},slot:"footer"},[s("div",{staticClass:"add-card"},[s("button",{staticClass:"addbucket",on:{click:function(t){e.added=!0,e.$emit("addbucket")}}},[s("i",{staticClass:"icon-plus"})])])])],2)],1)])},g=[],w=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"bucket-card"},[s("div",{staticClass:"card-inner card-front"},[s("h4",{directives:[{name:"show",rawName:"v-show",value:!e.editcardtitle,expression:"!editcardtitle"}],attrs:{tabindex:"0"},on:{focus:function(t){e.editcardtitle=!0,e.focusInput("cardtitle")}}},[e._v(" "+e._s(e.bucket.name)+" ")]),s("input",{directives:[{name:"model",rawName:"v-model",value:e.bucket.name,expression:"bucket.name"},{name:"show",rawName:"v-show",value:e.editcardtitle,expression:"editcardtitle"}],ref:"cardtitle",attrs:{type:"text"},domProps:{value:e.bucket.name},on:{blur:function(t){e.editcardtitle=!1,e.$emit("editbucket",!1)},input:function(t){t.target.composing||e.$set(e.bucket,"name",t.target.value)}}}),s("ul",{directives:[{name:"show",rawName:"v-show",value:!e.editcardlist,expression:"!editcardlist"}],attrs:{tabindex:"0"},on:{focus:function(t){e.editcardlist=!0,e.focusInput("cardlist")}}},e._l(e.bucket.items,(function(t,i){return s("li",{key:i,class:{trashed:e.bucket.trashed.includes(i)}},[e._v(" "+e._s(t)+" ")])})),0),s("textarea",{directives:[{name:"show",rawName:"v-show",value:e.editcardlist,expression:"editcardlist"},{name:"model",rawName:"v-model",value:e.cardlistitems,expression:"cardlistitems"}],ref:"cardlist",attrs:{rows:e.bucket.items.length},domProps:{value:e.cardlistitems},on:{blur:function(t){e.updateItems(t.target.value),e.editcardlist=!1,e.$emit("editbucket",!1)},input:function(t){t.target.composing||(e.cardlistitems=t.target.value)}}}),s("div",{staticClass:"bucketdelete"},[s("button",{directives:[{name:"show",rawName:"v-show",value:!e.deletebucket,expression:"!deletebucket"}],on:{click:function(t){e.deletebucket=!0}}},[s("i",{staticClass:"icon-cancel-1"})]),s("span",{directives:[{name:"show",rawName:"v-show",value:e.deletebucket,expression:"deletebucket"}],on:{mouseleave:function(t){e.deletebucket=!1}}},[s("em",[e._v("Delete? ")]),s("button",{on:{click:function(t){e.$emit("deletebucket",e.bindex),e.deletebucket=!1},blur:function(t){e.deletebucket=!1}}},[e._v(" Yes ")])])])])])},y=[],C={name:"Bucket",props:{bucket:Object,bindex:Number,isnew:Boolean},data(){return{editcardtitle:!1,editcardlist:!1,deletebucket:!1,cardlistitems:""}},mounted(){this.listCardItems()},methods:{listCardItems:function(){this.cardlistitems=this.$options.filters.listItems(this.bucket.items)},updateItems:function(e){e=e.split("\n"),""==e[e.length-1]&&e.splice(e.length-1,1),this.bucket.items=e},focusInput:function(e){this.$emit("editbucket",!0),"cardtitle"==e&&(this.editcardtitle=!0),"cardlist"==e&&(this.editcardlist=!0),this.$nextTick((function(){this.$refs[e].focus(),this.$refs[e].select()}))}},filters:{listItems:function(e){var t="";if(!e)return"";for(var s=0;s<e.length;s++)t+=e[s],s<e.length-1&&(t+="\n");return t}}},x=C,_=Object(v["a"])(x,w,y,!1,null,null,null),O=_.exports,$={name:"Buckets",components:{Bucket:O,draggable:a.a},props:{buckets:{type:Array}},data(){return{added:!1,deleted:-1,sorted:!1,editing:!1}},computed:{dragOptions(){return{animation:1,disabled:this.editing}}},updated(){this.sorted||this.editing||(this.forceUpdateLists(),this.animateBuckets()),this.sorted=!1},methods:{editBucket:function(e){this.sorted=!0,this.editing=e},deleteBucket:function(e){this.deleted=e,this.$emit("deletebucket",e)},bucketSorted:function(e){this.forceUpdateLists(),l["a"].from(".bucket-card:nth-of-type("+(e.moved.newIndex+1)+")",{scale:.9,duration:.2})},animateBuckets:function(){this.added?(this.added=!1,this.$refs.bucket[this.buckets.length-1].focusInput("cardtitle"),l["a"].from(".bucket-card:nth-last-of-type(-n+2)",{scale:.9,opacity:0,duration:.3,stagger:{each:.12,ease:"power4.Out"}})):this.deleted>-1?(l["a"].from(".bucket-card:nth-of-type(n+"+(this.deleted+1)+")",{scale:.9,opacity:0,duration:.3,stagger:{each:.12,ease:"power4.Out"}}),this.deleted=-1):l["a"].from(".bucket-card",{scale:.9,opacity:0,duration:.3,stagger:{each:.12,ease:"power4.Out"}})},forceUpdateLists:function(){for(var e=0;e<this.buckets.length;e++)this.$refs.bucket[e].listCardItems()}}},S=$,I=Object(v["a"])(S,b,g,!1,null,null,null),N=I.exports,A=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("h3",[e._v("Randomize")]),s("div",{staticClass:"randomize-options"},[s("fieldset",[s("label",{attrs:{for:"numberitems"}},[e._v("Number of items: ")]),s("input",{directives:[{name:"model",rawName:"v-model",value:e.listoptions.listcount,expression:"listoptions.listcount"}],staticStyle:{width:"5em",display:"inline-block"},attrs:{id:"numberitems",type:"number",min:"0",size:"2"},domProps:{value:e.listoptions.listcount},on:{input:function(t){t.target.composing||e.$set(e.listoptions,"listcount",t.target.value)}}}),s("span",{directives:[{name:"show",rawName:"v-show",value:0==e.listoptions.listcount,expression:"listoptions.listcount == 0"}]},[e._v(" (random count)")])]),s("fieldset",{staticClass:"inline-label"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.listoptions.preventduplicates,expression:"listoptions.preventduplicates"}],attrs:{type:"checkbox",id:"preventduplicates"},domProps:{checked:Array.isArray(e.listoptions.preventduplicates)?e._i(e.listoptions.preventduplicates,null)>-1:e.listoptions.preventduplicates},on:{change:function(t){var s=e.listoptions.preventduplicates,i=t.target,o=!!i.checked;if(Array.isArray(s)){var n=null,l=e._i(s,n);i.checked?l<0&&e.$set(e.listoptions,"preventduplicates",s.concat([n])):l>-1&&e.$set(e.listoptions,"preventduplicates",s.slice(0,l).concat(s.slice(l+1)))}else e.$set(e.listoptions,"preventduplicates",o)}}}),s("label",{attrs:{for:"preventduplicates"}},[e._v("prevent duplicates")])]),s("fieldset",[s("label",{attrs:{for:"selectbuckets"}},[e._v("Select from buckets:")]),s("select",{directives:[{name:"model",rawName:"v-model",value:e.listoptions.listbuckets,expression:"listoptions.listbuckets"}],attrs:{id:"selectbuckets",multiple:"multiple",size:e.buckets.length+1},on:{change:function(t){var s=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.$set(e.listoptions,"listbuckets",t.target.multiple?s:s[0])}}},[s("option",{attrs:{value:"All",selected:""}},[e._v("All")]),e._l(e.buckets,(function(t,i){return s("option",{key:i,domProps:{value:i}},[e._v(" "+e._s(t.name)+" ")])}))],2)]),s("fieldset",{staticClass:"inline-label"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.listoptions.bucketcycle,expression:"listoptions.bucketcycle"}],attrs:{type:"radio",id:"random",name:"bucketcycle",value:"random",checked:""},domProps:{checked:e._q(e.listoptions.bucketcycle,"random")},on:{change:function(t){return e.$set(e.listoptions,"bucketcycle","random")}}}),s("label",{attrs:{for:"random"}},[e._v("random")]),e._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:e.listoptions.bucketcycle,expression:"listoptions.bucketcycle"}],attrs:{type:"radio",id:"sequential",name:"bucketcycle",value:"sequential"},domProps:{checked:e._q(e.listoptions.bucketcycle,"sequential")},on:{change:function(t){return e.$set(e.listoptions,"bucketcycle","sequential")}}}),s("label",{attrs:{for:"sequential"}},[e._v("sequential")])])]),s("div",{staticClass:"generate"},[s("button",{staticClass:"generate-btn",on:{click:function(t){return e.$emit("generatelist",e.listoptions)}}},[e._v(" Generate to-do list ")])])])},B=[],j={name:"Randomize",props:{buckets:{type:Array,default:()=>[]},listoptions:{type:Object,default(){return{listcount:3,listbuckets:["All"]}}}},data(){return{randomList:[],listbuckets:["All"],listcount:6}},mounted(){this.loadBuckets(),this.$root.$on("bucketsupdate",this.loadBuckets),this.$root.$on("collectionloaded",this.collectionLoaded)},methods:{loadBuckets:function(){localStorage.buckets},collectionLoaded:function(){this.listbuckets=["All"]}}},P=j,R=Object(v["a"])(P,A,B,!1,null,null,null),M=R.exports,L=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"output-panel"},[s("div",{staticClass:"output-inner",on:{click:function(e){e.stopPropagation()}}},[s("h3",[s("span",{staticClass:"textaccent"},[e._v("Boom!")]),e._v(" "+e._s(e.message))]),s("div",{staticClass:"listitems"},[s("ul",e._l(e.randomlist,(function(t,i){return s("li",{key:i,ref:"listtitle",refInFor:!0,class:{allitemsdeleted:e.alldeleted.includes(i)}},[s("h4",[e._v(" "+e._s(t.name)+" ")]),s("ul",e._l(t.items,(function(t,o){return s("li",{key:o,ref:"listitem",refInFor:!0,class:{completed:e.checked.includes(i+"-"+o),deleted:e.deleted.includes(i+"-"+o)},attrs:{tabindex:"0"},on:{click:function(t){return e.checkItem(i+"-"+o)},keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.checkItem(i+"-"+o)}}},[e._v(" "+e._s(t)+" "),s("button",{staticClass:"deleteitem",on:{click:function(t){return t.stopPropagation(),e.deleteItem(i+"-"+o)}}},[e._v(" delete ")])])})),0)])})),0)]),s("div",{staticClass:"listempty",class:{visible:e.deleted.length==e.itemcount&&e.itemcount>0}},[s("i",{staticClass:"icon-thumbs-up-1"}),e._v(" "),s("strong",[e._v("All done!")])]),s("div",{staticClass:"output-options"},[s("fieldset",{staticClass:"inline-label"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.removedeleted,expression:"removedeleted"}],attrs:{type:"checkbox",id:"removebucketitems"},domProps:{checked:Array.isArray(e.removedeleted)?e._i(e.removedeleted,null)>-1:e.removedeleted},on:{change:function(t){var s=e.removedeleted,i=t.target,o=!!i.checked;if(Array.isArray(s)){var n=null,l=e._i(s,n);i.checked?l<0&&(e.removedeleted=s.concat([n])):l>-1&&(e.removedeleted=s.slice(0,l).concat(s.slice(l+1)))}else e.removedeleted=o}}}),s("label",{attrs:{for:"removebucketitems"}},[e._v("Remove deleted items from system » "+e._s(e.deleted.length)+" "),e.deleted.length>0?s("span",[s("a",{attrs:{href:"javascript:void(0)"},on:{click:function(t){e.deleted=[],e.message="Restored"}}},[e._v("restore")])]):e._e()])])]),s("button",{staticClass:"icon close-output",on:{click:e.closeOutput}},[s("i",{staticClass:"icon-cancel-1"})])]),s("div",{directives:[{name:"show",rawName:"v-show",value:e.footnote,expression:"footnote"}],staticClass:"output-footnote"},[e._v(e._s(e.footnote))])])},T=[],q={name:"Output",props:{randomlist:Object,removedeleteditems:{type:Boolean,default:!1},footnote:String},data(){return{message:"Chosen",checked:[],deleted:[],removedeleted:!1,alldeleted:[],itemcount:0}},mounted(){for(var e in this.removedeleted=this.removedeleteditems,this.randomlist)this.itemcount+=this.randomlist[e].items.length;l["a"].from(".output-panel",.25,{opacity:0,ease:"strong.easeOut"}),l["a"].from(".output-inner",.35,{scale:0,ease:"back.out(1.2)"}),l["a"].from(".output-footnote",.5,{opacity:0,delay:.5}),l["a"].from(".listitems li",.3,{x:50,opacity:0,delay:.2,stagger:{each:.1,ease:"power4.easeOut"}})},watch:{checked:{handler(e){e.length==this.itemcount?this.message="Completed":this.message="Checked"}},removedeleted:{handler(e){this.$emit("update:removedeleteditems",e)}},deleted:{handler(e){this.alldeleted=[];var t={},s=this;e.map((function(e){e=e.split("-"),t[e[0]]?t[e[0]]++:t[e[0]]=1,t[e[0]]===s.randomlist[e[0]].items.length&&s.alldeleted.push(e[0])})),e.length==this.itemcount?this.message="Cleared":e.length>0&&(this.message="Deleted")}}},methods:{checkItem:function(e){this.checked.includes(e)?this.checked.splice(this.checked.indexOf(e),1):this.checked.push(e)},matchCheck:function(e){for(var t=0;t<this.checked.length;t++)if(this.checked[t]==e)return!0;return!1},deleteItem:function(e){this.deleted.includes(e)||this.deleted.push(e)},closeOutput:function(){this.$emit("closeoutput",this.deleted)}}},F=q,E=Object(v["a"])(F,L,T,!1,null,null,null),z=E.exports,J={name:"App",components:{Collections:k,Buckets:N,Randomize:M,Output:z,draggable:a.a},data(){return{appdata:{},collections:[{}],collectionsmenu:[],cindex:0,randomlist:{},showcollections:!1,showoutput:!1,outputfootnote:"",editcollectiontitle:!1,showintro:!0,bucketscleared:0,alertmessage:""}},mounted(){localStorage.appdata&&(this.appdata=JSON.parse(localStorage.appdata),this.collections=this.appdata.collections,"true"==localStorage.firstrun&&(this.showintro=!0,localStorage.firstrun="false")),this.$root.$on("show-output",this.showOutput)},watch:{appdata:{handler(e){localStorage.appdata=JSON.stringify(e)},deep:!0},collections:{handler(e){this.collectionsmenu=e.map(e=>e.title),this.showcollections=!1},deep:!0}},methods:{animateIntro:function(e){var t=this,s=l["a"].timeline({defaults:{duration:.2},onComplete:function(){t.showintro=!1}});s.fromTo(".intro",{opacity:1},{opacity:0,ease:"strong.easeOut"},0),s.pause(),"reverse"==e?(s.progress(1),s.reverse(0),this.showintro=!0,this.$nextTick(()=>{this.$refs.intro.scrollTop=0})):(e===this.cindex&&this.$refs.bucketslist.animateBuckets(),s.play())},addCollection:function(e){var t={};"duplicate"===e?(t=JSON.parse(JSON.stringify(this.collections[this.cindex])),t.title+=" copy"):(t=JSON.parse(localStorage.blankcollection),t.title="Collection "+(this.collections.length+1)),this.collections.push(t),this.loadCollection(this.collections.length-1,!0)},loadCollection:function(e,t){this.$nextTick((function(){t&&this.focusInput("titleinput"),this.showcollections=!1,this.cindex=parseInt(e)}))},deleteCollection:function(){var e=this.cindex;this.cindex>0&&(this.cindex=this.cindex-1),this.collections.length<=1?(this.collections[e].title="Collection 1",this.collections[e].buckets=[],this.collections[e].listoptions={listcount:0,listbuckets:["All"],preventduplicates:!0,bucketcycle:"random"},this.collections[e].removedeleteditems=!1):this.collections.splice(e,1)},focusInput:function(e){this.editcollectiontitle=!0,this.$nextTick((function(){this.$refs[e].focus(),this.$refs[e].select()}))},addBucket:function(){var e=this.collections[this.cindex].buckets,t={name:"Bucket List "+(e.length+1),items:["item 1","item 2","item 3"],trashed:[]};e.push(t)},deleteBucket:function(e){var t=this.collections[this.cindex].buckets,s=this.collections[this.cindex].listoptions.listbuckets,i=s.indexOf(e);if(i>-1){s.splice(i,1);for(var o=i;o<s.length;o++)s[o]--}0==s.length&&(s[0]="All"),this.$refs.bucketslist.deleted=e,t.splice(e,1)},generateList:function(e){var t=e.listcount,s=e.listbuckets,i=e.preventduplicates,o=e.bucketcycle;if(this.randomlist={},this.buckets=this.collections[this.cindex].buckets,this.outputfootnote="",0==t&&(t=this.getRandomInt(this.getBucketItemsLength(this.buckets,s)),t++),i){var n=this.getBucketItemsLength(this.buckets,s);t>n&&(t=n,this.outputfootnote="*count exceeded available items")}for(var l=0,c=[],a=0;a<t;a++){var r;"random"!=o&&o||(r=this.getRandomInt(this.buckets.length),s&&"All"!=s[0]&&(r=s[this.getRandomInt(s.length)])),"sequential"==o&&(s&&"All"!=s[0]||(r=l,l+1>=this.buckets.length&&(l=-1)),s&&"All"!=s[0]&&(r=s[l],l+1>=s.length&&(l=-1)),l++);var u=this.getRandomInt(this.buckets[r].items.length),d=r+"-"+u;i&&c.indexOf(d)>=0?a--:c.push(d)}for(var m=0;m<c.length;m++){var h=c[m].split("-").map(Number);this.randomlist[h[0]]={name:"",items:[],itemkeys:[]}}for(var p=0;p<c.length;p++){var v=c[p].split("-").map(Number);this.randomlist[v[0]].name=this.buckets[v[0]].name,this.randomlist[v[0]].items.push(this.buckets[v[0]].items[v[1]]),this.randomlist[v[0]].itemkeys.push(v[0]+"-"+v[1])}this.showoutput=!0},getBucketItemsLength:function(e,t){var s=0;return"All"==t[0]&&(t=[],e.map((e,s)=>{t.push(s)})),t.map(t=>{s+=e[t].items.length}),s},getRandomInt:function(e){return Math.floor(Math.random()*Math.floor(e))},closeOutput:function(e){if(e.length>0&&this.collections[this.cindex].removedeleteditems){var t=[],s=this;e.map((function(e){e=e.split("-"),t.push(s.randomlist[e[0]].itemkeys[e[1]])}));var i=[];t.map((function(e){i.includes(e)||i.push(e)}));var o=[[-1,-1]];i.map((function(e,t){e=e.split("-").map(Number);for(var s=t;s>=0;s--){if(e[0]>o[s][0]){o.splice(s+1,0,e);break}if(e[0]===o[s][0]&&e[1]>o[s][1]){o.splice(s+1,0,e);break}}})),o.splice(0,1),o.map((function(e){s.collections[s.cindex].buckets[e[0]].trashed.unshift(parseInt(e[1]))})),l["a"].delayedCall(1,(function(){for(var e=0;e<s.collections[s.cindex].buckets.length;e++){for(var t=0;t<s.collections[s.cindex].buckets[e].trashed.length;t++){var i=s.collections[s.cindex].buckets[e].trashed[t];s.collections[s.cindex].buckets[e].items.splice(i,1)}s.collections[s.cindex].buckets[e].trashed=[],0==s.collections[s.cindex].buckets[e].items.length&&(s.deleteBucket(e),s.showAlert(),e--)}}))}this.showOutput(!1)},showOutput:function(e){this.showoutput=e},showAlert:function(){this.bucketscleared++,this.alertmessage=this.bucketscleared+" bucket",this.bucketscleared>1&&(this.alertmessage+="s"),this.alertmessage+=" emptied",0===this.collections[this.cindex].buckets.length&&(this.alertmessage="All buckets emptied");var e=this;l["a"].fromTo(".alert",1,{opacity:0},{opacity:2,ease:"power4.easeOut",onComplete:function(){this.reverse()},onReverseComplete:function(){e.bucketscleared=0}})}}},D=J,G=Object(v["a"])(D,o,n,!1,null,null,null),W=G.exports,H={cindex:0,collections:[{title:"Exercises",buckets:[{name:"Strength",items:["Bench press","Squat","Rows","Dead lift","Shoulder Press","Farmer carry","Dips"],trashed:[]},{name:"Mobility",items:["Lunge with rotation","Arch & curl","Frog stretch","Cross kicks","Elbow to knee"],trashed:[]},{name:"Kettle Bells",items:["Swing","Thrust","Snatch","Deck Squat","Lunge"],trashed:[]},{name:"Cardio",items:["Run","Walk","Skip (rope)","Row","Burpees","Cycle"],trashed:[]},{name:"Calesthenics",items:["Pull ups","Muscle up","Hand stand","Push ups","Pistol Squat","L-sits","Planche"],trashed:[]}],listoptions:{listcount:"6",listbuckets:["All"],preventduplicates:!0,bucketcycle:"random"},removedeleteditems:!1},{title:"Chores",buckets:[{name:"Finance",items:["Pay bills","Check balances","Track retirement","Total expenses","Investment check"],trashed:[]},{name:"Cleaning",items:["Sanitize","Floors","Windows","Curtains","Storage","Garage","Basement"],trashed:[]},{name:"Honey-do",items:["Fix chair","Build table","Change door","Paint kitchen","Install fixture"],trashed:[]},{name:"Maintenance",items:["Rotate tires","Change oil","Furnace filter","Water softener"],trashed:[]},{name:"Yardwork",items:["Mow lawn","Pull weeds","Clean gutters","Rake","Sweep walks"],trashed:[]}],listoptions:{listcount:"1",listbuckets:["All"],preventduplicates:!0,bucketcycle:"random"},removedeleteditems:!0},{title:"Activities",buckets:[{name:"Fun",items:["Game","Bowl","Golf","Shop","Dine","Show"],trashed:[]},{name:"Fitness",items:["Workout","Walk","Run","Cycle","Hike"],trashed:[]},{name:"Relax",items:["Read","Meditate","Movie","Tea","Garden"],trashed:[]},{name:"Work",items:["Clean","Yardwork","Finance","Honey-do","Maintenance"],trashed:[]}],listoptions:{listcount:"4",listbuckets:["All"],preventduplicates:!0,bucketcycle:"sequential"},removedeleteditems:!0}],randomlist:{bucket:{name:"",itmes:[],itemkeys:[]}}},Y={title:"Collection 1",buckets:[],listoptions:{listcount:0,listbuckets:["All"],preventduplicates:!0,bucketcycle:"random"},removedeleteditems:!0};localStorage.appdata||(localStorage.setItem("firstrun","true"),localStorage.setItem("appdata",JSON.stringify(H)),localStorage.setItem("blankcollection",JSON.stringify(Y))),i["a"].config.productionTip=!1,new i["a"]({render:e=>e(W)}).$mount("#app")},"944d":function(e,t,s){},a47a:function(e,t,s){}});
//# sourceMappingURL=app.4b15a63d.js.map