(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{159:function(t,e,n){},160:function(t,e,n){},161:function(t,e,n){},162:function(t,e,n){},163:function(t,e,n){},172:function(t,e,n){"use strict";n(159)},173:function(t,e,n){"use strict";n(160)},174:function(t,e,n){"use strict";n(161)},175:function(t,e,n){"use strict";n(162)},176:function(t,e,n){"use strict";n(163)},182:function(t,e,n){"use strict";n(40),n(14),n(26);var i={name:"GuluLayout",data:function(){return{layoutClass:{hasSider:!1}}},mounted:function(){var t=this;this.$children.forEach((function(e){"GuluSider"===e.$options.name&&(t.layoutClass.hasSider=!0)}))}},s=(n(172),n(1)),a=Object(s.a)(i,(function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"layout",class:this.layoutClass},[this._t("default")],2)}),[],!1,null,"74f2d988",null);e.a=a.exports},183:function(t,e,n){"use strict";var i={name:"GuluSider",data:function(){return{visible:!0}},methods:{}},s=(n(176),n(1)),a=Object(s.a)(i,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("transition",{attrs:{name:"slide"}},[t.visible?n("div",{staticClass:"sider"},[t._t("default"),t._v(" "),n("button",{on:{click:function(e){t.visible=!1}}},[t._v("close")])],2):t._e()])}),[],!1,null,"c59aef40",null);e.a=a.exports},184:function(t,e,n){"use strict";n(173);var i=n(1),s=Object(i.a)({},(function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"header"},[this._t("default")],2)}),[],!1,null,"5ab3530c",null);e.a=s.exports},185:function(t,e,n){"use strict";n(174);var i=n(1),s=Object(i.a)({},(function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"footer"},[this._t("default")],2)}),[],!1,null,"0b24506c",null);e.a=s.exports},186:function(t,e,n){"use strict";n(175);var i=n(1),s=Object(i.a)({},(function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"gulu-content"},[this._t("default")],2)}),[],!1,null,"12d63e8d",null);e.a=s.exports},197:function(t,e,n){},215:function(t,e,n){"use strict";n(197)},238:function(t,e,n){"use strict";n.r(e);n(25),n(96);var i=n(182),s=n(184),a=n(185),o=n(186),r=n(183),c={components:{GLayout:i.a,GHeader:s.a,GFooter:a.a,GContent:o.a,GSider:r.a},data:function(){return{content:'\n        <g-layout style="color: white; overflow:hidden; margin-bottom:50px;">\n          <g-sider style=" background:#ddd; width:200px; color: black;">\n            sider\n          </g-sider>\n          <g-layout>\n            <g-header style="height: 50px; background:lightskyblue;">\n              header\n            </g-header>\n            <g-content style="height: 100px; background:deepskyblue;">\n              content\n            </g-content>\n            <g-footer style="height: 50px; background:lightskyblue;">\n              footer\n            </g-footer>\n          </g-layout>\n        </g-layout>\n\n    '.replace(/^ {8}/gm,"").trim()}}},u=(n(215),n(1)),l=Object(u.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticStyle:{"padding-top":"16px"}},[n("h2",[t._v("布局")]),t._v(" "),t._m(0),t._v(" "),n("g-layout",{staticStyle:{color:"white",overflow:"hidden","margin-bottom":"50px"}},[n("g-sider",{staticStyle:{background:"#ddd",width:"200px",color:"black"}},[t._v("\n      sider\n    ")]),t._v(" "),n("g-layout",[n("g-header",{staticStyle:{height:"50px",background:"lightskyblue"}},[t._v("\n        header\n      ")]),t._v(" "),n("g-content",{staticStyle:{height:"100px",background:"deepskyblue"}},[t._v("\n        content\n      ")]),t._v(" "),n("g-footer",{staticStyle:{height:"50px",background:"lightskyblue"}},[t._v("\n        footer\n      ")])],1)],1),t._v(" "),t._m(1),t._v(" "),n("pre",[n("code",[t._v(t._s(t.content))])])],1)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("预览")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("代码")])])}],!1,null,"3d526744",null);e.default=l.exports}}]);