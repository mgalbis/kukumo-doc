(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{UQSp:function(t,e,n){"use strict";e.a={name:"VueRemarkRoot",render(t){return t("div",null,this.$slots.default)}}},eR9R:function(t,e,n){"use strict";n.r(e);var o=n("KHd+"),a=n("UQSp"),s=n("Kw5r");function i(t){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}s.a.config.optionMergeStrategies;var r={VueRemarkRoot:a.a},u=function(t){var e=t.options.components=t.options.components||{},n=t.options.computed=t.options.computed||{};Object.keys(r).forEach((function(t){"object"===i(r[t])&&"function"==typeof r[t].render||"function"==typeof r[t]&&"function"==typeof r[t].options.render?e[t]=r[t]:n[t]=function(){return r[t]}}))},c=s.a.config.optionMergeStrategies,l="__vueRemarkFrontMatter",p={excerpt:null,title:"Getting started",date:"2022-09-20T00:00:00.000Z",slug:"en/introduction/getting-started"};var f=function(t){t.options[l]&&(t.options[l]=p),s.a.util.defineReactive(t.options,l,p),t.options.computed=c.computed({$frontmatter:function(){return t.options[l]}},t.options.computed)},k=Object(o.a)({},(function(){var t=this,e=t._self._c;return e("VueRemarkRoot",[e("h3",{attrs:{id:"1-instala-kukumo"}},[e("a",{attrs:{href:"#1-instala-kukumo","aria-hidden":"true"}},[e("span",{staticClass:"icon icon-link"})]),t._v("1. Instala Kukumo")]),e("p",[t._v("Descarga la imagen docker de Kukumo:")]),e("pre",{staticClass:"language-shell"},[e("span",{staticClass:"token function"},[t._v("docker")]),t._v(" pull kukumo/kukumo")]),e("h3",{attrs:{id:"2-ejecuta-los-tests"}},[e("a",{attrs:{href:"#2-ejecuta-los-tests","aria-hidden":"true"}},[e("span",{staticClass:"icon icon-link"})]),t._v("2. Ejecuta los tests")]),e("p",[t._v("Ubícate en el directorio que contiene los tests de Kukumo y lánzalo:")]),e("pre",{staticClass:"language-shell"},[e("span",{staticClass:"token builtin class-name"},[t._v("cd")]),t._v(" ~/test\n"),e("span",{staticClass:"token function"},[t._v("docker")]),t._v(" run "),e("span",{staticClass:"token parameter variable"},[t._v("--rm")]),t._v(" "),e("span",{staticClass:"token parameter variable"},[t._v("-it")]),t._v(" "),e("span",{staticClass:"token parameter variable"},[t._v("-v")]),t._v(" "),e("span",{staticClass:"token string"},[t._v('"'),e("span",{staticClass:"token variable"},[e("span",{staticClass:"token variable"},[t._v("$(")]),e("span",{staticClass:"token builtin class-name"},[t._v("pwd")]),e("span",{staticClass:"token variable"},[t._v(")")])]),t._v(':/kukumo"')]),t._v(" kukumo/kukumo")])])}),[],!1,null,null,null);"function"==typeof u&&u(k),"function"==typeof f&&f(k);e.default=k.exports}}]);