(function(){"use strict";var e={9736:function(e,n,t){var o=t(5130),r=t(6768);const i={id:"app"},u=(0,r.Lk)("h1",null,"Invoice Downloader",-1);function c(e,n,t,o,c,a){const l=(0,r.g2)("date-picker");return(0,r.uX)(),(0,r.CE)("div",i,[u,(0,r.bF)(l,{modelValue:o.selectedDate,"onUpdate:modelValue":n[0]||(n[0]=e=>o.selectedDate=e)},null,8,["modelValue"]),(0,r.Lk)("button",{onClick:n[1]||(n[1]=(...e)=>o.downloadInvoice&&o.downloadInvoice(...e))},"Download Invoice")])}t(4603),t(7566),t(8721);var a=t(7411),l=t(144),d=t(8355),f=t(2471),s={name:"App",components:{DatePicker:f.A},setup(){const e=(0,l.KR)(new Date),n=()=>{const n=e.value.getFullYear(),t=e.value.getMonth()+1,o=`${n}-${t.toString().padStart(2,"0")}`,r=(0,a.dj)();d.A.get(`https://quarkus-azure-functionn-1703850888742.azurewebsites.net/api/invoice?month=${o}`).then((e=>{const n=window.URL.createObjectURL(new Blob([e.data])),t=document.createElement("a");t.href=n,t.setAttribute("download",`TimeSheet_Petok_Mate_${o}.xlsx`),document.body.appendChild(t),t.click()})).catch((e=>{console.error("Error downloading invoice:",e),r.error("Error downloading invoice")}))};return{selectedDate:e,downloadInvoice:n}}},p=t(1241);const v=(0,p.A)(s,[["render",c]]);var b=v,h=t(6942);(0,o.Ef)(b).use(h.A,d.A).mount("#app")}},n={};function t(o){var r=n[o];if(void 0!==r)return r.exports;var i=n[o]={id:o,loaded:!1,exports:{}};return e[o].call(i.exports,i,i.exports,t),i.loaded=!0,i.exports}t.m=e,function(){t.amdO={}}(),function(){var e=[];t.O=function(n,o,r,i){if(!o){var u=1/0;for(d=0;d<e.length;d++){o=e[d][0],r=e[d][1],i=e[d][2];for(var c=!0,a=0;a<o.length;a++)(!1&i||u>=i)&&Object.keys(t.O).every((function(e){return t.O[e](o[a])}))?o.splice(a--,1):(c=!1,i<u&&(u=i));if(c){e.splice(d--,1);var l=r();void 0!==l&&(n=l)}}return n}i=i||0;for(var d=e.length;d>0&&e[d-1][2]>i;d--)e[d]=e[d-1];e[d]=[o,r,i]}}(),function(){t.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return t.d(n,{a:n}),n}}(),function(){t.d=function(e,n){for(var o in n)t.o(n,o)&&!t.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:n[o]})}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){t.hmd=function(e){return e=Object.create(e),e.children||(e.children=[]),Object.defineProperty(e,"exports",{enumerable:!0,set:function(){throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: "+e.id)}}),e}}(),function(){t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)}}(),function(){t.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){var e={524:0};t.O.j=function(n){return 0===e[n]};var n=function(n,o){var r,i,u=o[0],c=o[1],a=o[2],l=0;if(u.some((function(n){return 0!==e[n]}))){for(r in c)t.o(c,r)&&(t.m[r]=c[r]);if(a)var d=a(t)}for(n&&n(o);l<u.length;l++)i=u[l],t.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return t.O(d)},o=self["webpackChunkinvoice_app"]=self["webpackChunkinvoice_app"]||[];o.forEach(n.bind(null,0)),o.push=n.bind(null,o.push.bind(o))}();var o=t.O(void 0,[504],(function(){return t(9736)}));o=t.O(o)})();
//# sourceMappingURL=app.a9186710.js.map