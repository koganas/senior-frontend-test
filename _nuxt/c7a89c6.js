(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{165:function(t,e,n){"use strict";n.r(e);var r={name:"Icon",props:{name:{type:String,required:!0},fill:{type:Boolean,required:!1,default:!1},size:{type:String,required:!1,default:"medium"}}},o=n(28),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("svg",{staticClass:"outline-none",class:"small"===t.size?"h-5 w-5":"h-6 w-6",attrs:{xmlns:"http://www.w3.org/2000/svg",fill:t.fill?"currentColor":"none",stroke:t.fill?"none":"currentColor",viewBox:"small"===t.size?"0 0 20 20":"0 0 24 24"}},["plus"===t.name?n("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M12 6v6m0 0v6m0-6h6m-6 0H6"}}):t._e(),t._v(" "),"close"===t.name?n("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M6 18L18 6M6 6l12 12"}}):t._e(),t._v(" "),"error"===t.name?n("path",{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"}}):t._e(),t._v(" "),"check"===t.name?n("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M5 13l4 4L19 7"}}):t._e(),t._v(" "),"chevron"===t.name?n("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M19 9l-7 7-7-7"}}):t._e(),t._v(" "),"pencil"===t.name?n("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"}}):t._e(),t._v(" "),"trash"===t.name?n("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"}}):t._e()])}),[],!1,null,null,null);e.default=component.exports},166:function(t,e,n){"use strict";n.r(e);var r={name:"Fade"},o=(n(170),n(28)),component=Object(o.a)(r,(function(){var t=this.$createElement;return(this._self._c||t)("transition",this._g(this._b({attrs:{name:"fade"}},"transition",this.$attrs,!1),this.$listeners),[this._t("default")],2)}),[],!1,null,null,null);e.default=component.exports},167:function(t,e,n){var content=n(171);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(66).default)("9454267e",content,!0,{sourceMap:!1})},168:function(t,e,n){"use strict";n.d(e,"c",(function(){return l})),n.d(e,"b",(function(){return c})),n.d(e,"a",(function(){return f}));var r=n(8),o=(n(29),n(9),n(114),n(172)),l=function(t){for(var e=0,n=Object.entries(t);e<n.length;e++){var o=Object(r.a)(n[e],2);o[0];if(o[1].hasError)return!1}return!0},c=function(t){return/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(t).toLowerCase())},f={bind:function(t,e){e.value&&""!==e.value&&Object(o.mask)(t,e)},unbind:function(){}}},169:function(t,e,n){"use strict";n.r(e);n(64),n(30),n(29),n(9),n(49);var r=n(33),o=n(168);function l(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function c(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var f={name:"OfficeForm",props:{office:{type:Object,required:!1,default:function(){}},open:{type:Boolean,required:!1,default:!1}},data:function(){return{form:{id:null,title:"",address:"",contact:{name:"",position:"",email:"",phone:""}},isSubmitted:!1,isNew:!0}},computed:{isEditing:function(){return this.office&&this.office.id}},created:function(){this.isEditing&&(this.isNew=!1,this.form=c(c({},this.office),{},{contact:c({},this.office.contact)}))},mounted:function(){this.isEditing||(this.$refs.title.$el.focus(),this.isNew=!1)},methods:{onSubmit:function(){if(this.isSubmitted=!0,!this.isValid())return!1;this.$store.dispatch("updateStore",c({},this.form)),this.$emit("close")},isValid:function(){return Object(o.c)(this.$refs)}}},d=n(28),component=Object(d.a)(f,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("form",{staticClass:"w-full bg-white rounded-lg shadow-lg text-grayDark px-6 pt-4 pb-6",attrs:{novalidate:""},on:{submit:function(e){return e.preventDefault(),t.onSubmit(e)}}},[n("header",{staticClass:"flex justify-between mb-10"},[n("span",{staticClass:"font-bold"},[t._v(t._s(t.isEditing?"Edit":"New")+" Location")]),t._v(" "),n("button",{staticClass:"text-grayLight feedback-color",on:{click:function(e){return e.preventDefault(),t.$emit("close")}}},[n("Icon",{attrs:{name:"close"}})],1)]),t._v(" "),n("InputField",{ref:"title",attrs:{label:"Title",required:!0,error:t.isSubmitted},model:{value:t.form.title,callback:function(e){t.$set(t.form,"title",e)},expression:"form.title"}}),t._v(" "),n("InputField",{ref:"address",attrs:{label:"Enter the address",required:!0,error:t.isSubmitted},model:{value:t.form.address,callback:function(e){t.$set(t.form,"address",e)},expression:"form.address"}}),t._v(" "),n("h3",{staticClass:"pb-2 my-2 border-b border-gray-200 uppercase text-xs text-greenTurq"},[t._v("\n\t\tContact information\n\t")]),t._v(" "),n("InputField",{ref:"name",attrs:{label:"Full name",required:!0,error:t.isSubmitted},model:{value:t.form.contact.name,callback:function(e){t.$set(t.form.contact,"name",e)},expression:"form.contact.name"}}),t._v(" "),n("InputField",{ref:"position",attrs:{label:"Job position",required:!0,error:t.isSubmitted},model:{value:t.form.contact.position,callback:function(e){t.$set(t.form.contact,"position",e)},expression:"form.contact.position"}}),t._v(" "),n("InputField",{ref:"email",attrs:{type:"email",label:"Email address",placeholder:"name@example.com",required:!0,error:t.isSubmitted},model:{value:t.form.contact.email,callback:function(e){t.$set(t.form.contact,"email",e)},expression:"form.contact.email"}}),t._v(" "),n("InputField",{ref:"phone",attrs:{type:"phone",label:"Phone",placeholder:"(xxx) xxx-xxxx","input-mask":"(###) ###-####",required:!0,error:t.isSubmitted},model:{value:t.form.contact.phone,callback:function(e){t.$set(t.form.contact,"phone",e)},expression:"form.contact.phone"}}),t._v(" "),n("button",{staticClass:"btn font-light feedback",class:t.isValid()&&!t.isNew?"bg-greenTurq":"bg-gray-400 feedback-error",attrs:{type:"submit"}},[t._v("\n\t\tSave\n\t")])],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Icon:n(165).default,InputField:n(178).default})},170:function(t,e,n){"use strict";n(167)},171:function(t,e,n){(e=n(65)(!1)).push([t.i,".fade-enter-active,.fade-leave-active{transition:opacity .2s ease-in-out}.fade-enter,.fade-leave-to{opacity:0;position:absolute;top:0}",""]),t.exports=e},172:function(t,e,n){t.exports=function(t){function e(r){if(n[r])return n[r].exports;var a=n[r]={i:r,l:!1,exports:{}};return t[r].call(a.exports,a,a.exports,e),a.l=!0,a.exports}var n={};return e.m=t,e.c=n,e.i=function(t){return t},e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:r})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p=".",e(e.s=10)}([function(t,e){t.exports={"#":{pattern:/\d/},X:{pattern:/[0-9a-zA-Z]/},S:{pattern:/[a-zA-Z]/},A:{pattern:/[a-zA-Z]/,transform:function(t){return t.toLocaleUpperCase()}},a:{pattern:/[a-zA-Z]/,transform:function(t){return t.toLocaleLowerCase()}},"!":{escape:!0}}},function(t,e,n){"use strict";function r(t){var e=document.createEvent("Event");return e.initEvent(t,!0,!0),e}var a=n(2),o=n(0),i=n.n(o);e.a=function(t,e){var o=e.value;if((Array.isArray(o)||"string"==typeof o)&&(o={mask:o,tokens:i.a}),"INPUT"!==t.tagName.toLocaleUpperCase()){var u=t.getElementsByTagName("input");if(1!==u.length)throw new Error("v-mask directive requires 1 input, found "+u.length);t=u[0]}t.oninput=function(e){if(e.isTrusted){var i=t.selectionEnd,u=t.value[i-1];for(t.value=n.i(a.a)(t.value,o.mask,!0,o.tokens);i<t.value.length&&t.value.charAt(i-1)!==u;)i++;t===document.activeElement&&(t.setSelectionRange(i,i),setTimeout((function(){t.setSelectionRange(i,i)}),0)),t.dispatchEvent(r("input"))}};var s=n.i(a.a)(t.value,o.mask,!0,o.tokens);s!==t.value&&(t.value=s,t.dispatchEvent(r("input")))}},function(t,e,n){"use strict";var r=n(6),a=n(5);e.a=function(t,e){var o=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],i=arguments[3];return Array.isArray(e)?n.i(a.a)(r.a,e,i)(t,e,o,i):n.i(r.a)(t,e,o,i)}},function(t,e,n){"use strict";function r(t){t.component(s.a.name,s.a),t.directive("mask",i.a)}Object.defineProperty(e,"__esModule",{value:!0});var a=n(0),o=n.n(a),i=n(1),u=n(7),s=n.n(u);n.d(e,"TheMask",(function(){return s.a})),n.d(e,"mask",(function(){return i.a})),n.d(e,"tokens",(function(){return o.a})),n.d(e,"version",(function(){return l}));var l="0.11.1";e.default=r,"undefined"!=typeof window&&window.Vue&&window.Vue.use(r)},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(1),a=n(0),o=n.n(a),i=n(2);e.default={name:"TheMask",props:{value:[String,Number],mask:{type:[String,Array],required:!0},masked:{type:Boolean,default:!1},tokens:{type:Object,default:function(){return o.a}}},directives:{mask:r.a},data:function(){return{lastValue:null,display:this.value}},watch:{value:function(t){t!==this.lastValue&&(this.display=t)},masked:function(){this.refresh(this.display)}},computed:{config:function(){return{mask:this.mask,tokens:this.tokens,masked:this.masked}}},methods:{onInput:function(t){t.isTrusted||this.refresh(t.target.value)},refresh:function(t){this.display=t,(t=n.i(i.a)(t,this.mask,this.masked,this.tokens))!==this.lastValue&&(this.lastValue=t,this.$emit("input",t))}}}},function(t,e,n){"use strict";e.a=function(t,e,n){return e=e.sort((function(t,e){return t.length-e.length})),function(r,a){for(var o=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],i=0;i<e.length;){var u=e[i];i++;var s=e[i];if(!(s&&t(r,s,!0,n).length>u.length))return t(r,u,o,n)}return""}}},function(t,e,n){"use strict";e.a=function(t,e){var n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],r=arguments[3];t=t||"",e=e||"";for(var a=0,o=0,i="";a<e.length&&o<t.length;){var s=r[u=e[a]],l=t[o];s&&!s.escape?(s.pattern.test(l)&&(i+=s.transform?s.transform(l):l,a++),o++):(s&&s.escape&&(u=e[++a]),n&&(i+=u),l===u&&o++,a++)}for(var c="";a<e.length&&n;){var u;if(r[u=e[a]]){c="";break}c+=u,a++}return i+c}},function(t,e,n){var r=n(8)(n(4),n(9),null,null);t.exports=r.exports},function(t,e){t.exports=function(t,e,n,r){var a,o=t=t||{},i=typeof t.default;"object"!==i&&"function"!==i||(a=t,o=t.default);var u="function"==typeof o?o.options:o;if(e&&(u.render=e.render,u.staticRenderFns=e.staticRenderFns),n&&(u._scopeId=n),r){var s=u.computed||(u.computed={});Object.keys(r).forEach((function(t){var e=r[t];s[t]=function(){return e}}))}return{esModule:a,exports:o,options:u}}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("input",{directives:[{name:"mask",rawName:"v-mask",value:t.config,expression:"config"}],attrs:{type:"text"},domProps:{value:t.display},on:{input:t.onInput}})},staticRenderFns:[]}},function(t,e,n){t.exports=n(3)}])},173:function(t,e,n){"use strict";n.r(e);n(64),n(30),n(29),n(9),n(49);var r=n(33),o=n(45);function l(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}var c={name:"AlertStatus",computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(o.b)({alert:function(t){return t.alert}})),methods:{hideAlert:function(){this.$store.commit("HIDE_ALERT")}}},f=n(28),component=Object(f.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("Fade",[t.alert&&t.alert.show?n("div",{staticClass:"fixed w-full top-0 py-6 z-50 border-t-2 bg-white border-greenTurq shadow-sm"},[n("div",{staticClass:"flex justify-center w-80 m-auto px-4"},[n("Icon",{staticClass:"mr-4 text-greenTurq",attrs:{name:"check"}}),t._v(" "),n("p",{staticClass:"uppercase text-xs leading-6 text-grayDark"},[t._v("\n\t\t\t\t"+t._s(t.alert.status)+"\n\t\t\t")]),t._v(" "),n("button",{staticClass:"fixed right-0 mr-6 text-grayLight feedback-color",on:{click:function(e){return e.preventDefault(),t.hideAlert()}}},[n("Icon",{attrs:{name:"close"}})],1)],1)]):t._e()])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Icon:n(165).default,Fade:n(166).default})},174:function(t,e,n){"use strict";n.r(e);var r={name:"OfficeNew",props:{},data:function(){return{isAdding:!1}}},o=n(28),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"w-full relative"},[n("Fade",[t.isAdding?n("OfficeForm",{attrs:{open:t.isAdding},on:{close:function(e){t.isAdding=!1}}}):n("button",{staticClass:"flex justify-between w-full bg-greenTurq px-6 py-4 text-gray-200 rounded-lg shadow-lg feedback",on:{click:function(e){e.preventDefault(),t.isAdding=!0}}},[t._v("\n\t\t\tAdd New Location\n\t\t\t"),n("Icon",{staticClass:"text-white",attrs:{name:"plus"}})],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Icon:n(165).default,OfficeForm:n(169).default,Fade:n(166).default})},175:function(t,e,n){"use strict";n.r(e);var r={name:"OfficeCard",props:{office:{type:Object,required:!0,default:function(){}}},data:function(){return{isExpanded:!1,isEditing:!1}}},o=n(28),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"transition-all duration-500 relative w-full min-h-26 mt-6 shadow-m"},[n("Fade",[t.isEditing?t._e():n("div",{staticClass:"relative w-full"},[n("CardHeader",{attrs:{office:t.office,open:t.isExpanded},on:{clicked:function(e){t.isExpanded=!t.isExpanded}}}),t._v(" "),n("CardDetails",{attrs:{office:t.office,open:t.isExpanded},on:{editing:function(e){t.isEditing=!0}}})],1),t._v(" "),t.isEditing?n("OfficeForm",{attrs:{office:t.office,open:t.isEditing},on:{close:function(e){t.isEditing=!1}}}):t._e()],1)],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{CardHeader:n(176).default,CardDetails:n(177).default,OfficeForm:n(169).default,Fade:n(166).default})},176:function(t,e,n){"use strict";n.r(e);var r={name:"CardHeader",props:{office:Object,open:Boolean},methods:{onClick:function(){this.$emit("clicked")}}},o=n(28),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"transition-all duration-500 relative flex items-center justify-between z-10 w-full min-h-26 px-6 py-4 shadow-lg cursor-pointer select-none outline-none",class:t.open?"bg-grayLight rounded-t-lg":"bg-white rounded-lg",attrs:{tabindex:0},on:{click:function(e){return e.preventDefault(),t.onClick(e)},keydown:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:(e.preventDefault(),t.onClick(e))}}},[n("header",[n("h3",{staticClass:"text-2xl transition-color duration-500 font-bold select-text max-w-fit",class:t.open?"text-white break-words":"text-grayDark truncate"},[t._v("\n\t\t\t"+t._s(t.office.title)+"\n\t\t")]),t._v(" "),n("address",{staticClass:"transition-color duration-500 select-text not-italic max-w-fit truncate",class:t.open?"text-white":"text-grayLight"},[t._v("\n\t\t\t"+t._s(t.office.address)+"\n\t\t")])]),t._v(" "),n("Icon",{staticClass:"transition-all duration-500 transform",class:t.open?"text-white -rotate-180":"text-greenTurq",attrs:{name:"chevron"}})],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Icon:n(165).default})},177:function(t,e,n){"use strict";n.r(e);var r={name:"CardDetails",props:{office:Object,open:Boolean},computed:{contact:function(){return this.office.contact}},methods:{deleteOffice:function(){this.$store.dispatch("deleteStore",this.office.id)}}},o=n(28),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"transition-maxHeight duration-500 ease-in-out relative h-auto w-full overflow-y-hidden -mt-4 bg-white px-8 rounded-lg shadow-md",class:t.open?"max-h-fit":"max-h-0"},[n("div",{staticClass:"transition-opacity duration-700 leading-8 text-grayDark",class:t.open?"opacity-100":"opacity-0"},[n("h3",{staticClass:"text-xl pt-10 font-bold"},[t._v("\n\t\t\t"+t._s(t.contact.name)+"\n\t\t")]),t._v(" "),n("p",[t._v(t._s(t.contact.position))]),t._v(" "),n("p",{staticClass:"text-greenTurq max-w-fit truncate"},[t._v(t._s(t.contact.email))]),t._v(" "),n("p",[t._v(t._s(t.contact.phone))]),t._v(" "),n("div",{staticClass:"flex justify-between border-t border-gray-200 mt-2 pt-1 pb-2"},[n("button",{staticClass:"btn-icon text-grayLight hover:text-gray-700 focus:text-gray-700",on:{click:function(e){return e.preventDefault(),t.$emit("editing")}}},[n("Icon",{staticClass:"mr-2",attrs:{name:"pencil"}}),t._v("\n\t\t\t\tEdit\n\t\t\t")],1),t._v(" "),n("button",{staticClass:"btn-icon text-pinkPanther hover:text-red-600 focus:text-red-600",on:{click:function(e){return e.preventDefault(),t.deleteOffice()}}},[n("Icon",{staticClass:"mr-2",attrs:{name:"trash"}}),t._v("\n\t\t\t\tDelete\n\t\t\t")],1)])])])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Icon:n(165).default})},178:function(t,e,n){"use strict";n.r(e);n(115),n(50);var r=n(168),o={name:"InputField",directives:{mask:r.a},props:{value:String,label:String,placeholder:String,type:{type:String,default:"text"},error:{type:Boolean,default:!1},required:{type:Boolean,default:!1},inputMask:{type:String,default:""}},data:function(){return{message:""}},computed:{hasError:function(){return this.required&&""===this.value?(this.setMessage("required"),!0):"email"!==this.type||Object(r.b)(this.value)?""!==this.inputMask&&this.inputMask.length!==this.value.length&&(this.setMessage("incomplete"),!0):(this.setMessage("invalid"),!0)},showError:function(){return this.error&&this.hasError}},methods:{setMessage:function(t){var e=this.label;"Enter the address"===e&&(e="Address");var n=[{code:"required",message:"".concat(e," cannot be empty")},{code:"invalid",message:"".concat(e," is not valid")},{code:"incomplete",message:"".concat(e," requires ").concat(this.inputMask.replace(/[^#]/g,"").length," digits")}],r=n.findIndex((function(e){return e.code===t}));this.message=n[r].message}}},l=n(28),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("label",{staticClass:"input-group"},[n("p",{staticClass:"label"},[t._v("\n\t\t"+t._s(t.label)+"\n\t\t"),t.required?n("span",{staticClass:"text-grayLight"},[t._v("*")]):t._e()]),t._v(" "),n("input",{directives:[{name:"mask",rawName:"v-mask",value:t.inputMask,expression:"inputMask"}],ref:t.label,staticClass:"transition-all duration-200 input border-grayDark outline-none",class:{"focus:border-greenTurq":!t.hasError||!t.error,"border-pinkPanther":t.showError,"text-base py-1.6":"Title"===t.label},attrs:{type:t.type,placeholder:t.placeholder,id:t.label},domProps:{value:t.value},on:{input:function(e){return t.$emit("input",e.target.value)}}}),t._v(" "),t.showError?[n("p",{staticClass:"text-xs text-pinkPanther mt-1"},[t._v("\n\t\t\t"+t._s(t.message)+"\n\t\t")]),t._v(" "),n("Icon",{staticClass:"absolute right-0 top-icon mr-2 text-pinkPanther pointer-events-none",attrs:{name:"error",size:"small",fill:""}})]:t._e()],2)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Icon:n(165).default})},179:function(t,e,n){"use strict";n.r(e);n(64),n(30),n(29),n(9),n(49);var r=n(33),o=n(45);function l(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}var c={name:"Home",layout:"default",data:function(){return{}},computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(o.b)({offices:function(t){return t.officeList}})),head:function(){return{title:"Offices - Dog and Pony Test"}}},f=n(28),component=Object(f.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"flex justify-center w-full min-h-screen py-32 font-sans bg-gray-200"},[n("AlertStatus"),t._v(" "),n("div",{staticClass:"flex flex-col w-80 items-center"},[n("h1",{staticClass:"mb-6 text-6xl font-light text-greenTurq"},[t._v("Offices")]),t._v(" "),n("OfficeNew"),t._v(" "),t._l(t.offices,(function(t){return n("OfficeCard",{key:t.id,attrs:{office:t}})})),t._v(" "),t._m(0)],2)],1)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("footer",{staticClass:"mt-6 text-center"},[e("p",{staticClass:"text-gray-500 font-light"},[this._v("\n\t\t\t\tThis project is for test purpose only.\n\t\t\t")]),this._v(" "),e("p",[e("a",{staticClass:"uppercase text-greenTurq text-xs opacity-75",attrs:{href:"https://www.dogandponystudios.com/",target:"_blank",rel:"noopener noreferrer"}},[this._v("\n\t\t\t\t\twww.dogandponystudio.com\n\t\t\t\t")])])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{AlertStatus:n(173).default,OfficeNew:n(174).default,OfficeCard:n(175).default})}}]);