(function(t){function e(e){for(var a,o,r=e[0],c=e[1],l=e[2],d=0,_=[];d<r.length;d++)o=r[d],Object.prototype.hasOwnProperty.call(s,o)&&s[o]&&_.push(s[o][0]),s[o]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);u&&u(e);while(_.length)_.shift()();return i.push.apply(i,l||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],a=!0,r=1;r<n.length;r++){var c=n[r];0!==s[c]&&(a=!1)}a&&(i.splice(e--,1),t=o(o.s=n[0]))}return t}var a={},s={app:0},i=[];function o(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=t,o.c=a,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)o.d(n,a,function(e){return t[e]}.bind(null,a));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],c=r.push.bind(r);r.push=e,r=r.slice();for(var l=0;l<r.length;l++)e(r[l]);var u=c;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"09bc":function(t,e,n){},"0e1d":function(t,e,n){"use strict";n("eb0b")},"0fc8":function(t,e,n){"use strict";n("92d1")},1385:function(t,e,n){"use strict";n("7b21")},"192a":function(t,e,n){"use strict";n("3027")},"1edc":function(t,e,n){t.exports=n.p+"img/pizza-2776188_960_720.76895195.jpeg"},"24d9":function(t,e,n){t.exports=n.p+"img/personal.e720e460.png"},3027:function(t,e,n){},3289:function(t,e,n){"use strict";n("cdfa")},"33e4":function(t,e,n){},"381e":function(t,e,n){"use strict";n("9b80")},"3a2c":function(t,e,n){},"3e8a":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),s=n("8c4f"),i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("article",{staticClass:"container"},[t._m(0),n("div",{staticClass:"order_title mb-3"},[t._v(" 你今天點餐了嗎? ")]),n("div",{staticClass:"input_style"},[n("div",{staticClass:"form"},[n("div",{staticClass:"mb-3"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.login_account,expression:"login_account"}],staticClass:"form-control",attrs:{type:"text",id:"login_account",placeholder:"帳號：請輸入任意文字",onfocus:"this.placeholder=''",onblur:"this.placeholder='請輸入任意帳號'"},domProps:{value:t.login_account},on:{input:function(e){e.target.composing||(t.login_account=e.target.value)}}})]),n("div",{staticClass:"mb-3"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.login_password,expression:"login_password"}],staticClass:"form-control",attrs:{type:"password",id:"exampleInputPassword1",placeholder:"密碼：請輸入任意文字",onfocus:"this.placeholder=''",onblur:"this.placeholder='密碼：請輸入任意文字'"},domProps:{value:t.login_password},on:{input:function(e){e.target.composing||(t.login_password=e.target.value)}}})]),t._m(1),n("button",{staticClass:"btn",attrs:{type:"submit"},on:{click:t.checkBtn}},[t._v(" Sign in ")])])])])},o=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"logo_style_block"},[n("div",{staticClass:"img_block"},[n("a",{attrs:{href:"index.html"}},[n("h1",[n("span",[t._v("Tea Time ")]),n("span",[t._v("點餐趣")])])])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"mb-3 form-check"},[n("input",{staticClass:"form-check-input",attrs:{type:"checkbox",id:"exampleCheck1"}}),n("label",{staticClass:"form-check-label",attrs:{for:"exampleCheck1"}},[t._v(" Remember me ")])])}],r={name:"Home",data:function(){return{login_account:"",login_password:""}},methods:{checkBtn:function(){this.login_account&&this.login_password?location.href="/announcement":alert("請輸入帳號密碼")}}},c=r,l=(n("3289"),n("2877")),u=Object(l["a"])(c,i,o,!1,null,"1cb83234",null),d=u.exports,_=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("Header"),n("div",{staticClass:"content-main"},[n("Aside"),n("article",{style:"background-image: url("+t.nowBgImg+")"},[n("router-view")],1)],1),n("Footer")],1)},v=[],p=(n("b0c0"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("header",[n("div",[n("h1",[n("router-link",{attrs:{to:"/",title:"SYSTEX"}},[n("span",[t._v("Tea Time ")]),n("span",[t._v("點餐趣")])])],1)]),t._m(0)])}),m=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"personal"},[a("ul",[a("li",[a("i",{staticClass:"far fa-bell"})]),a("li",[t._v(" Hi, 2100722 "),a("img",{attrs:{src:n("24d9"),alt:""}})]),a("li",[a("button",{staticClass:"btn"},[t._v("Logout")])])])])}],f={name:"Header"},b=f,h=(n("8c57"),Object(l["a"])(b,p,m,!1,null,"32e9aa18",null)),g=h.exports,C=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("footer",[t._v("© 2021 SYSTEX 精誠資訊. All rights reserved.")])},y=[],x={name:"Footer"},k=x,w=(n("f794"),Object(l["a"])(k,C,y,!1,null,"d72e90ac",null)),P=w.exports,E=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("aside",[n("nav",[n("ul",[n("li",[n("router-link",{attrs:{to:"/announcement"}},[n("i",{staticClass:"fas fa-home"}),n("span",[t._v("公告")])])],1),n("li",[n("router-link",{attrs:{to:"/order"}},[n("i",{staticClass:"fas fa-utensils"}),n("span",[t._v("點餐")])])],1),n("li",[n("router-link",{attrs:{to:"/personal_order_record"}},[n("i",{staticClass:"fas fa-search"}),n("span",[t._v("個人點餐記錄查詢")])])],1),n("li",[n("router-link",{attrs:{to:"/personal-information"}},[n("i",{staticClass:"fas fa-user"}),n("span",[t._v("個人資料修改")])])],1),n("li",[n("router-link",{attrs:{to:"/setting_managment"}},[n("i",{staticClass:"fas fa-cog"}),n("span",[t._v("設定管理")])])],1)])])])},$=[],O={name:"Aside"},j=O,B=(n("f1b0"),Object(l["a"])(j,E,$,!1,null,"5316d3d6",null)),S=B.exports,A={name:"Login_page",data:function(){return{nowBgImg:n("fa1a")}},components:{Header:g,Aside:S,Footer:P},watch:{$route:function(t){var e={Announcement:n("fa1a"),Order:n("fd97"),PersonalInformation:n("adda"),PersonalOrderRecord:n("1edc"),SettingManagement:n("a209")};this.nowBgImg=e[t.name]}}},N=A,L=(n("cd97"),Object(l["a"])(N,_,v,!1,null,"7ef214b9",null)),M=L.exports,I=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},R=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"announcement"},[n("h2",[t._v("公告")]),n("div",{staticClass:"content_main"},[n("div",[t._v("日期")]),n("div",[t._v("內容")]),n("div",[t._v("2021/05/03")]),n("div",[t._v("點餐系統上線囉 => 左上角選單 > Systex_B216 > 點餐")]),n("div",[t._v("2021/07/20")]),n("div",[t._v("請注意:飲料選擇店家不提供的甜度冰塊 會自動選擇講究喝法")]),n("div",[t._v("2021/05/03")]),n("div",[t._v("點餐系統上線囉 => 左上角選單 > Systex_B216 > 點餐")]),n("div",[t._v("2021/07/20")]),n("div",[t._v("請注意:飲料選擇店家不提供的甜度冰塊 會自動選擇講究喝法")]),n("div",[t._v("2021/05/03")]),n("div",[t._v("點餐系統上線囉 => 左上角選單 > Systex_B216 > 點餐")]),n("div",[t._v("2021/07/20")]),n("div",[t._v("請注意:飲料選擇店家不提供的甜度冰塊 會自動選擇講究喝法")]),n("div",[t._v("2021/05/03")]),n("div",[t._v("點餐系統上線囉 => 左上角選單 > Systex_B216 > 點餐")]),n("div",[t._v("2021/07/20")]),n("div",[t._v("請注意:飲料選擇店家不提供的甜度冰塊 會自動選擇講究喝法")]),n("div",[t._v("2021/05/03")]),n("div",[t._v("點餐系統上線囉 => 左上角選單 > Systex_B216 > 點餐")]),n("div",[t._v("2021/07/20")]),n("div",[t._v("請注意:飲料選擇店家不提供的甜度冰塊 會自動選擇講究喝法")]),n("div",[t._v("2021/05/03")]),n("div",[t._v("點餐系統上線囉 => 左上角選單 > Systex_B216 > 點餐")]),n("div",[t._v("2021/07/20")]),n("div",[t._v("請注意:飲料選擇店家不提供的甜度冰塊 會自動選擇講究喝法")])])])}],T={name:"Announcement"},D=T,F=(n("c640"),Object(l["a"])(D,I,R,!1,null,"f9f2524a",null)),H=F.exports,z=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("nav",[n("div",{on:{click:function(e){return t.changeCurrentlyClick("lunch")}}},[t._m(0),t._v(" 午餐")]),n("div",{on:{click:function(e){return t.changeCurrentlyClick("dessert")}}},[t._m(1),t._v(" 點心")]),n("div",{on:{click:function(e){return t.changeCurrentlyClick("drinks")}}},[t._m(2),t._v(" 飲料")]),n("div",{on:{click:function(e){return t.changeCurrentlyClick("uploadMenu")}}},[t._m(3),t._v(" 上傳菜單")]),t._m(4),n("div",{on:{click:function(e){return t.changeCurrentlyClick("funderSetting")}}},[t._m(5),t._v(" 金主設定")]),n("div",{on:{click:function(e){return t.changeCurrentlyClick("balancerecharge")}}},[t._m(6),t._v(" 餘額查詢與充值")])]),"lunch"===t.currentlyClick?n("Lunch"):"dessert"===t.currentlyClick?n("Dessert"):"drinks"===t.currentlyClick?n("Drinks"):"uploadMenu"===t.currentlyClick?n("UploadMenu"):"funderSetting"===t.currentlyClick?n("FunderSetting"):"balancerecharge"===t.currentlyClick?n("Balancerecharge"):t._e()],1)},U=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("span",[n("i",{staticClass:"fas fa-hamburger"})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("span",[n("i",{staticClass:"fas fa-cheese"})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("span",[n("i",{staticClass:"fas fa-coffee"})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("span",[n("i",{staticClass:"fas fa-upload"})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("span",[n("i",{staticClass:"fas fa-file-excel"})]),t._v(" 報表下載")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("span",[n("i",{staticClass:"fas fa-credit-card"})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("span",[n("i",{staticClass:"fas fa-search-dollar"})])}],q=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},J=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"order_block"},[n("div",{staticClass:"name"},[t._v("【林琪臻】 點餐 ( 午餐 )")]),n("div",{staticClass:"order_status"},[n("button",[t._v("可點餐")]),n("button",[t._v("已結單")])]),n("div",{staticClass:"item_block"},[n("div",{staticClass:"food_name"},[t._v("餐點"),n("input",{attrs:{type:"text",placeholder:"請輸入餐點名稱(例：排骨便當)",onfocus:"this.placeholder=''",onblur:"this.placeholder='請輸入餐點名稱(例：排骨便當)'"}})]),n("div",{staticClass:"num"},[n("div",{staticClass:"num_qty"},[t._v("份數")]),n("button",[t._v("一份")]),n("button",[t._v("二份")]),n("button",[t._v("三份")])]),n("div",{staticClass:"price_block"},[t._v("價格"),n("input",{staticClass:"price_input",attrs:{type:"text",placeholder:"請輸入價格(例：50)",onfocus:"this.placeholder=''",onblur:"this.placeholder='請輸入價格(例：50)'"}}),n("div",{staticClass:"balance"},[n("input",{attrs:{type:"checkbox"}}),t._v(" 使用餘額,剩餘0元 ")])]),n("div",{staticClass:"spicy"},[n("div",{staticClass:"spicy_text"},[t._v("辣度")]),n("button",[t._v("不辣")]),n("button",[t._v("小辣")]),n("button",[t._v("中辣")]),n("button",[t._v("大辣")])]),n("div",{staticClass:"remark"},[n("div",{staticClass:"remark_text"},[t._v(" 備註 "),n("input",{attrs:{type:"text"}})])])]),n("div",{staticClass:"send_out"},[n("button",[t._v("送出 / 新增")]),n("button",[t._v("刪除餐點")])]),n("div",{staticClass:"menu_img"},[t._v(" 點擊餐點圖可放大 ")]),n("div",{staticClass:"del_menu_button"},[n("button",[t._v("刪除食物菜單")])])])}],X={name:"Lunch"},Y=X,G=(n("d02b"),Object(l["a"])(Y,q,J,!1,null,"3400a87b",null)),K=G.exports,Q=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},V=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"dessert_block"},[n("div",{staticClass:"dessert_name"},[t._v("【林琪臻】 點餐 ( 點心 )")]),n("div",{staticClass:"dessert_order_status"},[n("button",[t._v("可點餐")]),n("button",[t._v("已結單")])]),n("div",{staticClass:"dessert_item_block"},[n("div",{staticClass:"dessert_food_name"},[t._v("餐點"),n("input",{attrs:{type:"text",placeholder:"請輸入餐點名稱(例：雞排)",onfocus:"this.placeholder=''",onblur:"this.placeholder='請輸入餐點名稱(例：雞排)'"}})]),n("div",{staticClass:"dessert_num"},[n("div",{staticClass:"dessert_num_qty"},[t._v("份數")]),n("button",[t._v("一份")]),n("button",[t._v("二份")]),n("button",[t._v("三份")])]),n("div",{staticClass:"dessert_price_block"},[t._v("價格"),n("input",{staticClass:"dessert_price_input",attrs:{type:"text",placeholder:"請輸入價格(例：50)",onfocus:"this.placeholder=''",onblur:"this.placeholder='請輸入價格(例：50)'"}}),n("div",{staticClass:"dessert_balance"},[n("input",{attrs:{type:"checkbox"}}),t._v(" 使用餘額,剩餘0元 ")])]),n("div",{staticClass:"dessert_spicy"},[n("div",{staticClass:"dessert_spicy_text"},[t._v("辣度")]),n("button",[t._v("不辣")]),n("button",[t._v("小辣")]),n("button",[t._v("中辣")]),n("button",[t._v("大辣")])]),n("div",{staticClass:"dessert_remark"},[n("div",{staticClass:"dessert_remark_text"},[t._v(" 備註 "),n("input",{attrs:{type:"text"}})])])]),n("div",{staticClass:"dessert_send_out"},[n("button",[t._v("送出 / 新增")]),n("button",[t._v("刪除餐點")])]),n("div",{staticClass:"dessert_menu_img"},[t._v(" 點擊餐點圖可放大 ")]),n("div",{staticClass:"dessert_del_menu_button"},[n("button",[t._v("刪除點心菜單")])])])}],W={name:"Dessert"},Z=W,tt=(n("78a4"),Object(l["a"])(Z,Q,V,!1,null,"32c5e46a",null)),et=tt.exports,nt=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},at=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"drinks_block"},[n("div",{staticClass:"drinks_name"},[t._v("【林琪臻】 點餐 ( 飲料 )")]),n("div",{staticClass:"drinks_order_status"},[n("button",[t._v("可點餐")]),n("button",[t._v("已結單")])]),n("div",{staticClass:"drinks_item_block"},[n("div",{staticClass:"drinks_food_name"},[t._v("飲料名"),n("input",{attrs:{type:"text",placeholder:"請輸入飲料名稱(例：紅茶)",onfocus:"this.placeholder=''",onblur:"this.placeholder='請輸入飲料名稱(例：紅茶)'"}})]),n("div",{staticClass:"drinks_num"},[n("div",{staticClass:"drinks_num_qty"},[t._v("杯數")]),n("button",[t._v("一杯")]),n("button",[t._v("二杯")]),n("button",[t._v("三杯")])]),n("div",{staticClass:"drinks_price_block"},[t._v("價格"),n("input",{staticClass:"drinks_price_input",attrs:{type:"text",placeholder:"請輸入價格(例：50)",onfocus:"this.placeholder=''",onblur:"this.placeholder='請輸入價格(例：50)'"}}),n("div",{staticClass:"drinks_balance"},[n("input",{attrs:{type:"checkbox"}}),t._v(" 使用餘額,剩餘0元 ")])]),n("div",{staticClass:"drinks_sweetness"},[n("div",{staticClass:"drinks_sweetness_text"},[t._v("甜度")]),n("button",[t._v("無糖")]),n("button",[t._v("微糖")]),n("button",[t._v("半糖")]),n("button",[t._v("少糖")]),n("button",[t._v("全糖")])]),n("div",{staticClass:"drinks_cups"},[n("div",{staticClass:"drinks_cups_text"},[t._v("大小")]),n("button",[t._v("L")]),n("button",[t._v("M")]),n("button",[t._v("S")]),n("button",[t._v("特大")])]),n("div",{staticClass:"drinks_cups_remark"},[n("div",{staticClass:"drinks_cups_remark_text"},[t._v(" 備註 "),n("input",{attrs:{type:"text"}})])])]),n("div",{staticClass:"drinks_send_out"},[n("button",[t._v("送出 / 新增")]),n("button",[t._v("刪除餐點")])]),n("div",{staticClass:"drinks_menu_img"},[t._v(" 點擊餐點圖可放大 ")]),n("div",{staticClass:"drinks_del_menu_button"},[n("button",[t._v("刪除點心菜單")])])])}],st={name:"Drinks"},it=st,ot=(n("6789"),Object(l["a"])(it,nt,at,!1,null,"5a0f2082",null)),rt=ot.exports,ct=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},lt=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"upload_menu"},[n("div",{staticClass:"upload_menu_name"},[t._v("上傳菜單")]),n("div",{staticClass:"upload_menu_item_block"},[n("div",{staticClass:"upload_menu_food_file"},[t._v("選取菜單檔案"),n("input",{attrs:{type:"file"}})]),n("div",{staticClass:"upload_menu_size"},[t._v("設定菜單大小 "),n("input",{staticClass:"upload_menu_size_input",attrs:{type:"text",placeholder:"請輸入數字",onfocus:"this.placeholder=''",onblur:"this.placeholder='請輸入數字'"}}),n("div",{staticClass:"upload_menu_remind"},[t._v(" 預設為1,若圖片過小,可增加此數值 ")])]),n("div",{staticClass:"upload_click"},[n("div",{staticClass:"upload_click_title"},[t._v("點選上傳圖片")]),n("button",[t._v("上傳午餐")]),n("button",[t._v("上傳點心")]),n("button",[t._v("上傳飲料")])]),n("div",{staticClass:"click_remind"},[t._v("請依相對應的食物點選上傳")])])])}],ut={name:"UploadMenu"},dt=ut,_t=(n("192a"),Object(l["a"])(dt,ct,lt,!1,null,"6c8c8287",null)),vt=_t.exports,pt=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},mt=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"sponsor"},[n("div",{staticClass:"sponsor_set"},[t._v("金主設定")]),n("div",{staticClass:"sponsor_blcok"},[n("table",[n("tbody",[n("tr",{staticClass:"sponsor_menu"},[n("td",{staticClass:"sponsor_name"},[t._v("選擇金主姓名 ")]),n("td",[n("select",[n("option",{attrs:{selected:""}}),n("option",[t._v("鄭竣謙")]),n("option",[t._v("陳建廷")]),n("option",[t._v("賴聲翔")]),n("option",[t._v("邱念佳")]),n("option",[t._v("陳顥文")]),n("option",[t._v("劉凱帆")]),n("option",[t._v("吳禹澔")]),n("option",[t._v("李家萱")]),n("option",[t._v("黃宸緯")]),n("option",[t._v("潘思融")]),n("option",[t._v("陳宜欣")]),n("option",[t._v("郭立欣")]),n("option",[t._v("劉祥生")]),n("option",[t._v("王珮慈")]),n("option",[t._v("黃國財")]),n("option",[t._v("鄒佩鈞")]),n("option",[t._v("林靜")]),n("option",[t._v("林蓉蔚")]),n("option",[t._v("林建宏")]),n("option",[t._v("劉勝登")]),n("option",[t._v("劉芳妤")]),n("option",[t._v("高沛辰")]),n("option",[t._v("尤思涵")]),n("option",[t._v("吳思葦")]),n("option",[t._v("歐陽沁縈")]),n("option",[t._v("鄭羽涵")]),n("option",[t._v("劉家羽")]),n("option",[t._v("張長青")]),n("option",[t._v("呂冠元 ")]),n("option",[t._v("陳永村")]),n("option",[t._v("許佳雯")]),n("option",[t._v("曾祥維")]),n("option",[t._v("蔡佩珊")]),n("option",[t._v("黃信豪")]),n("option",[t._v("林琪臻")])])])]),n("tr",{staticClass:"sponsored_meals"},[n("td",{staticClass:"sponsored_item"},[t._v("選擇贊助餐點")]),n("td",[n("button",{staticClass:"btn btn-outline-danger"},[t._v("午餐")]),n("button",{staticClass:"btn btn-outline-danger"},[t._v("點心")]),n("button",{staticClass:"btn btn-outline-danger"},[t._v("飲料")])])]),n("tr",{staticClass:"sponsored_submit"},[n("td",{attrs:{colspan:"2"}},[n("button",{staticClass:"btn btn-info btn-lg"},[t._v("送出")])])])])]),n("hr"),n("section",{staticClass:"patron_details"},[n("h2",[t._v("今日金主名單")]),n("div",{staticClass:"patron_details_grid"},[n("div",{staticClass:"patron_name"},[t._v("金主姓名")]),n("div",{staticClass:"patron_item"},[t._v("金援項目")]),n("div",{staticClass:"patron_set_user"},[t._v("此次設定人 ")]),n("div",{staticClass:"patron_del"},[t._v("刪除")]),n("div",{staticClass:"patron_name_content"},[t._v("林琪臻")]),n("div",{staticClass:"patron_item_content"},[t._v("午餐")]),n("div",{staticClass:"patron_set_user_content"},[t._v("林琪臻")]),n("div",[n("button",{staticClass:"btn btn-primary"},[t._v("刪除")])])])])])])}],ft={name:"FunderSetting"},bt=ft,ht=(n("381e"),Object(l["a"])(bt,pt,mt,!1,null,"2f3642cf",null)),gt=ht.exports,Ct=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},yt=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"balance_recharge"},[n("div",{staticClass:"balance_recharge_search"},[t._v("餘額查詢與充值 ( 輸入負值可扣除餘額 )")]),n("div",{staticClass:"balance_recharge_block"},[n("section",{staticClass:"balance_recharge_content"},[n("div",{staticClass:"balance_recharge_grid"},[n("div",{staticClass:"balance_recharge_name"},[t._v("姓名")]),n("div",{staticClass:"balance_recharge_num"},[t._v("餘額")]),n("div",{staticClass:"balance_recharge_enter"},[t._v("輸入充值金額 ")]),n("div",{staticClass:"recharge"},[t._v("充值")]),n("div",{staticClass:"recharge_name"},[t._v("林琪臻")]),n("div",{staticClass:"recharge_amount"},[t._v("100")]),n("div",{staticClass:"recharge_amount_enter"},[n("input",{attrs:{type:"text"}})]),n("div",[n("button",{staticClass:"btn btn-primary"},[t._v("充值")])]),n("div",{staticClass:"recharge_name"},[t._v("林琪臻")]),n("div",{staticClass:"recharge_amount"},[t._v("100")]),n("div",{staticClass:"recharge_amount_enter"},[n("input",{attrs:{type:"text"}})]),n("div",[n("button",{staticClass:"btn btn-primary"},[t._v("充值")])]),n("div",{staticClass:"recharge_name"},[t._v("林琪臻")]),n("div",{staticClass:"recharge_amount"},[t._v("100")]),n("div",{staticClass:"recharge_amount_enter"},[n("input",{attrs:{type:"text"}})]),n("div",[n("button",{staticClass:"btn btn-primary"},[t._v("充值")])])]),n("div",{staticClass:"recharge_remark"},[t._v("備註：輸入充值金額範例:+20 or -20 ")])])])])}],xt={name:"Balancerecharge"},kt=xt,wt=(n("b2d2"),Object(l["a"])(kt,Ct,yt,!1,null,"6f194b42",null)),Pt=wt.exports,Et={name:"Order",data:function(){return{currentlyClick:"lunch"}},components:{Lunch:K,Dessert:et,Drinks:rt,UploadMenu:vt,FunderSetting:gt,Balancerecharge:Pt},methods:{changeCurrentlyClick:function(t){this.currentlyClick=t}}},$t=Et,Ot=(n("e0c9"),Object(l["a"])($t,z,U,!1,null,"3fbd666e",null)),jt=Ot.exports,Bt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",[n("h2",[t._v(" 個人資料修改")]),n("div",[n("table",[n("tr",[n("td",[t._v("姓名")]),n("td",[n("input",{directives:[{name:"model",rawName:"v-model",value:t.name,expression:"name"}],attrs:{type:"text"},domProps:{value:t.name},on:{input:function(e){e.target.composing||(t.name=e.target.value)}}})])]),n("tr",[n("td",[t._v("帳號")]),n("td",[n("input",{directives:[{name:"model",rawName:"v-model",value:t.adaccount,expression:"adaccount"}],attrs:{type:"text"},domProps:{value:t.adaccount},on:{input:function(e){e.target.composing||(t.adaccount=e.target.value)}}})])]),n("tr",[n("td",[t._v("工號")]),n("td",[n("input",{directives:[{name:"model",rawName:"v-model",value:t.numberid,expression:"numberid"}],attrs:{type:"text"},domProps:{value:t.numberid},on:{input:function(e){e.target.composing||(t.numberid=e.target.value)}}})])]),n("tr",[n("td",[t._v("打卡 ID")]),n("td",[n("input",{directives:[{name:"model",rawName:"v-model",value:t.clock_id,expression:"clock_id"}],attrs:{type:"text"},domProps:{value:t.clock_id},on:{input:function(e){e.target.composing||(t.clock_id=e.target.value)}}})])]),n("tr",[n("td",[t._v("部門")]),n("td",[n("input",{directives:[{name:"model",rawName:"v-model",value:t.department,expression:"department"}],attrs:{type:"text"},domProps:{value:t.department},on:{input:function(e){e.target.composing||(t.department=e.target.value)}}})])]),n("tr",[n("td",[t._v("職稱")]),n("td",[n("input",{directives:[{name:"model",rawName:"v-model",value:t.title,expression:"title"}],attrs:{type:"text"},domProps:{value:t.title},on:{input:function(e){e.target.composing||(t.title=e.target.value)}}})])]),n("tr",[n("td",[t._v("到職日")]),n("td",[n("input",{directives:[{name:"model",rawName:"v-model",value:t.startday,expression:"startday"}],attrs:{type:"text"},domProps:{value:t.startday},on:{input:function(e){e.target.composing||(t.startday=e.target.value)}}})])]),n("tr",[n("td",[t._v("地區")]),n("td",[n("input",{directives:[{name:"model",rawName:"v-model",value:t.company,expression:"company"}],attrs:{type:"text"},domProps:{value:t.company},on:{input:function(e){e.target.composing||(t.company=e.target.value)}}})])]),n("tr",[n("td",[t._v("代理人一")]),n("td",[n("input",{directives:[{name:"model",rawName:"v-model",value:t.agentA,expression:"agentA"}],attrs:{type:"text"},domProps:{value:t.agentA},on:{input:function(e){e.target.composing||(t.agentA=e.target.value)}}})])]),n("tr",[n("td",[t._v("代理人二")]),n("td",[n("input",{directives:[{name:"model",rawName:"v-model",value:t.agentB,expression:"agentB"}],attrs:{type:"text"},domProps:{value:t.agentB},on:{input:function(e){e.target.composing||(t.agentB=e.target.value)}}})])]),n("tr",[n("td",[t._v("Email")]),n("td",[n("input",{directives:[{name:"model",rawName:"v-model",value:t.mail,expression:"mail"}],attrs:{type:"text"},domProps:{value:t.mail},on:{input:function(e){e.target.composing||(t.mail=e.target.value)}}})])]),n("tr",[n("td",[t._v("新密碼")]),n("td",[n("input",{directives:[{name:"model",rawName:"v-model",value:t.Password,expression:"Password"}],attrs:{type:"text"},domProps:{value:t.Password},on:{input:function(e){e.target.composing||(t.Password=e.target.value)}}})])]),n("tr",[n("td",[t._v("確認新密碼")]),n("td",[n("input",{directives:[{name:"model",rawName:"v-model",value:t.Password,expression:"Password"}],attrs:{type:"text"},domProps:{value:t.Password},on:{input:function(e){e.target.composing||(t.Password=e.target.value)}}})])])])])])},St=[],At=n("bc3a"),Nt=n.n(At),Lt={name:"PersonalInformation",data:function(){return{id:0,name:null,clock_id:null,numberid:null,startday:null,title:null,department:null,adaccount:null,LeaveAll:null,state:null,RightIds:null,Balance:null,Leaveex:null,lastday:null,Password:null,agentA:null,agentB:null,mail:null,company:null,userid:null,memberof:null,domain:null,dn:null}},created:function(){var t=this;Nt.a.get("http://ethan5420.synology.me:3030/api/Users/2100722").then((function(e){console.log("response",e),t.id=e.data.id,t.name=e.data.name,t.clock_id=e.data.clock_id,t.numberid=e.data.numberid,t.startday=e.data.startday,t.title=e.data.title,t.department=e.data.department,t.adaccount=e.data.adaccount,t.LeaveAll=e.data.LeaveAll,t.state=e.data.state,t.RightIds=e.data.RightIds,t.Balance=e.data.Balance,t.Leaveex=e.data.Leaveex,t.lastday=e.data.lastday,t.Password=e.data.Password,t.agentA=e.data.agentA,t.agentB=e.data.agentB,t.mail=e.data.mail,t.company=e.data.company,t.userid=e.data.userid,t.memberof=e.data.memberof,t.domain=e.data.domain,t.dn=e.data.dn})).catch((function(t){console.log(t)}))}},Mt=Lt,It=(n("6c73"),Object(l["a"])(Mt,Bt,St,!1,null,"2f70719b",null)),Rt=It.exports,Tt=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},Dt=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"table_border"},[n("h3",[t._v("個人點餐記錄")]),n("table",[n("tr",[n("td",{staticClass:"table_title"},[t._v("姓名")]),n("td",[t._v(" 林琪臻 ")])]),n("tr",[n("td",{staticClass:"table_title"},[t._v("餐點")]),n("td",[t._v(" 排骨便當 ")])]),n("tr",[n("td",{staticClass:"table_title"},[t._v("需求")]),n("td",[t._v(" 不辣 ")])]),n("tr",[n("td",{staticClass:"table_title"},[t._v("總金額")]),n("td",[t._v(" 70元 ")])]),n("tr",[n("td",{staticClass:"table_title"},[t._v("付款方式")]),n("td",[n("select",[n("option",[t._v("請選擇付款方式")]),n("option",[t._v("現金")]),n("option",[t._v("一卡通")])])])]),n("tr",[n("td",{staticClass:"table_title"},[t._v("實付金額")]),n("td",[n("input",{attrs:{type:"text"}})])]),n("tr",[n("td",{staticClass:"table_title"},[t._v("付款狀態")]),n("td",[t._v(" 已付款：70元 ")])])])])}],Ft={name:"PersonalOrderRecord"},Ht=Ft,zt=(n("1385"),Object(l["a"])(Ht,Tt,Dt,!1,null,"f23e87a6",null)),Ut=zt.exports,qt=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},Jt=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"announcement"},[n("h2",[t._v("設定管理")]),n("div",{staticClass:"content_main"},[n("table",[n("tr",[n("td",[t._v("設定權限")]),n("td",[n("input",{attrs:{type:"checkbox",name:"",id:""}}),t._v(" 所有人 ")]),n("td",[n("input",{attrs:{type:"checkbox",name:"",id:""}}),t._v(" 管理者 ")])]),n("tr",[n("td",[t._v("設定管理者姓名")]),n("td",{attrs:{colspan:"2"}},[n("select",[n("option",{attrs:{selected:""}}),n("option",[t._v("鄭竣謙")]),n("option",[t._v("陳建廷")]),n("option",[t._v("賴聲翔")]),n("option",[t._v("邱念佳")]),n("option",[t._v("陳顥文")]),n("option",[t._v("劉凱帆")]),n("option",[t._v("吳禹澔")]),n("option",[t._v("李家萱")]),n("option",[t._v("黃宸緯")]),n("option",[t._v("潘思融")]),n("option",[t._v("陳宜欣")]),n("option",[t._v("郭立欣")]),n("option",[t._v("劉祥生")]),n("option",[t._v("王珮慈")]),n("option",[t._v("黃國財")]),n("option",[t._v("鄒佩鈞")]),n("option",[t._v("林靜")]),n("option",[t._v("林蓉蔚")]),n("option",[t._v("林建宏")]),n("option",[t._v("劉勝登")]),n("option",[t._v("劉芳妤")]),n("option",[t._v("高沛辰")]),n("option",[t._v("尤思涵")]),n("option",[t._v("吳思葦")]),n("option",[t._v("歐陽沁縈")]),n("option",[t._v("鄭羽涵")]),n("option",[t._v("劉家羽")]),n("option",[t._v("張長青")]),n("option",[t._v("呂冠元 ")]),n("option",[t._v("陳永村")]),n("option",[t._v("許佳雯")]),n("option",[t._v("曾祥維")]),n("option",[t._v("蔡佩珊")]),n("option",[t._v("黃信豪")]),n("option",[t._v("林琪臻")])])])]),n("tr",[n("td",{staticClass:"td_button",attrs:{colspan:"3"}},[n("button",{staticClass:"btn"},[t._v("儲存")]),n("button",{staticClass:"btn"},[t._v("取消")])])])])])])}],Xt={name:"settingManagement"},Yt=Xt,Gt=(n("0e1d"),Object(l["a"])(Yt,qt,Jt,!1,null,"82986840",null)),Kt=Gt.exports;a["a"].use(s["a"]);var Qt=[{path:"/",name:"Home",component:d},{path:"/login_page",name:"Login_page",component:M,children:[{path:"/announcement",name:"Announcement",component:H},{path:"/order",name:"Order",component:jt},{path:"/personal-information",name:"PersonalInformation",component:Rt},{path:"/personal_order_record",name:"PersonalOrderRecord",component:Ut},{path:"/setting_managment",name:"SettingManagement",component:Kt}]}],Vt=new s["a"]({mode:"history",base:"/",routes:Qt,scrollBehavior:function(){return{x:0,y:0}}}),Wt=Vt,Zt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{class:{body_main:"/"===t.getRouterPath}},[n("router-view")],1)},te=[],ee={name:"Index",computed:{getRouterPath:function(){return this.$route.path}}},ne=ee,ae=(n("0fc8"),Object(l["a"])(ne,Zt,te,!1,null,null,null)),se=ae.exports;n("f5be");a["a"].use(s["a"]),a["a"].config.productionTip=!1,new a["a"]({router:Wt,render:function(t){return t(se)}}).$mount("#app")},6789:function(t,e,n){"use strict";n("9340")},"6c73":function(t,e,n){"use strict";n("3e8a")},"78a4":function(t,e,n){"use strict";n("7ea9")},"7b21":function(t,e,n){},"7ea9":function(t,e,n){},"82d5":function(t,e,n){},"8c57":function(t,e,n){"use strict";n("e9c0")},"92d1":function(t,e,n){},9340:function(t,e,n){},"9b80":function(t,e,n){},a209:function(t,e,n){t.exports=n.p+"img/dessert.09c788eb.jpeg"},a7e4:function(t,e,n){},adda:function(t,e,n){t.exports=n.p+"img/dinner_bg.d00b4c6f.jpeg"},b2d2:function(t,e,n){"use strict";n("a7e4")},c640:function(t,e,n){"use strict";n("e677")},cd97:function(t,e,n){"use strict";n("82d5")},cdfa:function(t,e,n){},d02b:function(t,e,n){"use strict";n("3a2c")},e0c9:function(t,e,n){"use strict";n("f8fc")},e677:function(t,e,n){},e9c0:function(t,e,n){},eb0b:function(t,e,n){},f1b0:function(t,e,n){"use strict";n("09bc")},f5be:function(t,e,n){},f794:function(t,e,n){"use strict";n("33e4")},f8fc:function(t,e,n){},fa1a:function(t,e,n){t.exports=n.p+"img/dessert.2217f286.webp"},fd97:function(t,e,n){t.exports=n.p+"img/asparagus-2169305_960_720.b924e5f8.webp"}});
//# sourceMappingURL=app.60ad00eb.js.map