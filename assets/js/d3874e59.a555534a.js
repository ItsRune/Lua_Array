"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[374],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),s=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(i.Provider,{value:t},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),m=s(n),f=a,d=m["".concat(i,".").concat(f)]||m[f]||p[f]||l;return n?r.createElement(d,o(o({ref:t},u),{},{components:n})):r.createElement(d,o({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=f;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c[m]="string"==typeof e?e:a,o[1]=c;for(var s=2;s<l;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},4167:(e,t,n)=>{n.r(t),n.d(t,{HomepageFeatures:()=>h,default:()=>b});var r=n(87462),a=n(67294),l=n(3905);const o={toc:[{value:"Why should I use LuArray-U?",id:"why-should-i-use-luarray-u",level:2}]},c="wrapper";function i(e){let{components:t,...n}=e;return(0,l.kt)(c,(0,r.Z)({},o,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"why-should-i-use-luarray-u"},"Why should I use LuArray-U?"),(0,l.kt)("p",null,"With the Lua-U's default table library, I felt there weren't enough functions to manipulate tables. So I created LuArray-U, a library that adds more functions to manipulate tables, unlike to JavaScript's Array functions."))}i.isMDXComponent=!0;var s=n(39960),u=n(52263),m=n(34510),p=n(86010);const f={heroBanner:"heroBanner_e1Bh",buttons:"buttons_VwD3",features:"features_WS6B",featureSvg:"featureSvg_tqLR",titleOnBannerImage:"titleOnBannerImage_r7kd",taglineOnBannerImage:"taglineOnBannerImage_dLPr"},d=[{title:"Easy To Use",description:"With ease of use in mind, I made sure to keep a simple yet informative documentation for each method."},{title:"Rich API",description:"Includes many powerful functions along with some being able to chain with others."},{title:"Performance",description:"Designed to be as fast as possible, while maintaining the integrity of the method-structure."}];function y(e){let{image:t,title:n,description:r}=e;return a.createElement("div",{className:(0,p.Z)("col col--4")},t&&a.createElement("div",{className:"text--center"},a.createElement("img",{className:f.featureSvg,alt:n,src:t})),a.createElement("div",{className:"text--center padding-horiz--md"},a.createElement("h3",null,n),a.createElement("p",null,r)))}function h(){return d?a.createElement("section",{className:f.features},a.createElement("div",{className:"container"},a.createElement("div",{className:"row"},d.map(((e,t)=>a.createElement(y,(0,r.Z)({key:t},e))))))):null}function g(){const{siteConfig:e}=(0,u.Z)(),t=e.customFields.bannerImage,n=!!t,r=n?{backgroundImage:`url("${t}")`}:null,l=(0,p.Z)("hero__title",{[f.titleOnBannerImage]:n}),o=(0,p.Z)("hero__subtitle",{[f.taglineOnBannerImage]:n});return a.createElement("header",{className:(0,p.Z)("hero",f.heroBanner),style:r},a.createElement("div",{className:"container"},a.createElement("h1",{className:l},e.title),a.createElement("p",{className:o},e.tagline),a.createElement("div",{className:f.buttons},a.createElement(s.Z,{className:"button button--secondary button--lg",to:"/docs/intro"},"Get Started \u2192"))))}function b(){const{siteConfig:e,tagline:t}=(0,u.Z)();return a.createElement(m.Z,{title:e.title,description:t},a.createElement(g,null),a.createElement("main",null,a.createElement(h,null),a.createElement("div",{className:"container"},a.createElement(i,null))))}}}]);