"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[143],{10317:function(e,n,r){r.d(n,{Z:function(){return l}});var t=r(85893),i=(r(67294),r(24734)),a=r(45562);function l(e){var n,r,l,o,s,c,u,d=e.haveAnime,f=e.iconSrc,v=e.token,m=e.domRef,h=e.className,y=e.size,p=void 0===y?"md":y,j=e.style,x=e.onClick,b=null!==(o=null!==(l=null!==f&&void 0!==f?f:null===(n=v)||void 0===n?void 0:n.icons)&&void 0!==l?l:null===(r=v)||void 0===r?void 0:r.icon)&&void 0!==o?o:"/coins/dollar.svg",g="2xl"===p?"h-20 w-20":"lg"===p?"h-12 w-12":"md"===p?"h-8 w-8":"sm"===p?"h-5 w-5":"smi"===p?"h-6 w-6":"xs"===p?"w-4 h-4":"h-12 w-12";return(0,t.jsx)("div",{ref:m,className:"CoinAvatar flex items-center gap-2",style:j,onClick:x,children:d?(0,t.jsxs)("div",{className:(0,i.m)("".concat(g," rounded-full swap-coin"),h),suppressHydrationWarning:!0,style:(s={},c="--delay",u="".concat((1e3*Math.random()).toFixed(2),"ms"),c in s?Object.defineProperty(s,c,{value:u,enumerable:!0,configurable:!0,writable:!0}):s[c]=u,s),children:[(0,t.jsx)(a.Z,{className:"front-face overflow-hidden transition-transform transform ".concat("scale-[.7]"),src:b,fallbackSrc:"/coins/unknown.svg"}),(0,t.jsxs)("div",{className:"line-group",children:[(0,t.jsx)("div",{className:"line-out",children:(0,t.jsx)("div",{className:"line-inner"})}),(0,t.jsx)("div",{className:"line-out",children:(0,t.jsx)("div",{className:"line-inner"})}),(0,t.jsx)("div",{className:"line-out",children:(0,t.jsx)("div",{className:"line-inner"})}),(0,t.jsx)("div",{className:"line-out",children:(0,t.jsx)("div",{className:"line-inner"})}),(0,t.jsx)("div",{className:"line-out",children:(0,t.jsx)("div",{className:"line-inner"})}),(0,t.jsx)("div",{className:"line-out",children:(0,t.jsx)("div",{className:"line-inner"})}),(0,t.jsx)("div",{className:"line-out",children:(0,t.jsx)("div",{className:"line-inner"})}),(0,t.jsx)("div",{className:"line-out",children:(0,t.jsx)("div",{className:"line-inner"})}),(0,t.jsx)("div",{className:"line-out",children:(0,t.jsx)("div",{className:"line-inner"})}),(0,t.jsx)("div",{className:"line-out",children:(0,t.jsx)("div",{className:"line-inner"})}),(0,t.jsx)("div",{className:"line-out",children:(0,t.jsx)("div",{className:"line-inner"})}),(0,t.jsx)("div",{className:"line-out",children:(0,t.jsx)("div",{className:"line-inner"})})]}),(0,t.jsx)(a.Z,{className:"back-face overflow-hidden transition-transform transform ".concat("scale-[.7]"),src:b,fallbackSrc:"/coins/unknown.svg"})]}):(0,t.jsx)("div",{className:(0,i.m)("".concat(g," rounded-full overflow-hidden"),h),style:{background:"linear-gradient(126.6deg, rgba(171, 196, 255, 0.2) 28.69%, rgba(171, 196, 255, 0) 100%)"},children:(0,t.jsx)(a.Z,{className:"".concat(g," rounded-full overflow-hidden transition-transform transform ").concat("scale-[.7]"),src:b,fallbackSrc:"/coins/unknown.svg"})})})}},45562:function(e,n,r){r.d(n,{Z:function(){return c}});var t=r(85893),i=r(67294),a=r(30992),l=r(43538),o=r(66623),s=r(35880);function c(e){var n=e.src,r=e.fallbackSrc,c=e.alt,u=e.onClick,d=e.domRef,f=e.className,v=e.style,m=(0,i.useRef)(null);(0,o.e)(m,{onClick:u});var h=(0,a.Do)([n,r].flat()),y=h.join(" "),p=(0,i.useState)(0),j=p[0],x=p[1],b=h[j],g=null!==c&&void 0!==c?c:(0,s.a)(null!==b&&void 0!==b?b:"");return(0,i.useEffect)((function(){x(0)}),[y]),(0,i.useEffect)((function(){var e;null===(e=m.current)||void 0===e||e.addEventListener("error",(function(e){x((function(e){return e+1}))}))}),[]),(0,t.jsx)("img",{ref:(0,l.Z)(d,m),className:"Image ".concat(null!==f&&void 0!==f?f:""),src:h[j],alt:g,style:v})}},99693:function(e,n,r){r.d(n,{Z:function(){return b}});var t=r(85893),i=r(67294),a=r(24734),l=r(66623);function o(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=e.run,r=void 0===n||n,o=e.initPercent,s=void 0===o?0:o,c=e.componentRef,u=e.className,d=e.duration,f=void 0===d?6e4:d,v=e.strokeWidth,m=void 0===v?3:v,h=e.updateDelay,y=void 0===h?1e3:h,p=e.svgWidth,j=void 0===p?36:p,x=e.loop,b=void 0===x||x,g=e.onEnd,N=e.onClick,w=j,k=w,P=.5*w/2,S=2*P*Math.PI,C=(0,i.useState)(s),Z=C[0],O=C[1],E=(0,i.useRef)(null);return(0,l.e)(E,{onClick:N,disable:!N}),(0,i.useEffect)((function(){var e=globalThis.setInterval((function(){r&&O((function(e){return e+1/f*y}))}),y);return function(){return globalThis.clearInterval(e)}}),[f,y,r]),(0,i.useEffect)((function(){0!==Z&&Math.round(100*Z)/100%1===0&&(null===g||void 0===g||g())}),[g,Z]),(0,i.useImperativeHandle)(c,(function(){return{currentProgressPercent:Z%1,restart:function(){O(0)}}})),(0,t.jsx)("div",{className:(0,a.m)("w-full h-full rounded",u),children:(0,t.jsxs)("svg",{ref:E,width:w,height:k,viewBox:"0 0 ".concat(w," ").concat(k),children:[(0,t.jsx)("circle",{r:P,cx:"50%",cy:"50%",fill:"transparent",style:{strokeWidth:m,stroke:"#ffffff2e"}}),(0,t.jsx)("circle",{id:"bar",r:P,cx:"50%",cy:"50%",fill:"transparent",strokeDasharray:S,strokeDashoffset:S-(b?Z%1:Math.min(Z,1))*S,style:{strokeWidth:m,stroke:"#92e1ffd9",transform:"rotate(-90deg)",transformOrigin:"center",strokeLinecap:"round",transition:"200ms"}})]})})}var s=r(65629),c=r(49399),u=r(3342),d=r(18748);function f(e,n){(null==n||n>e.length)&&(n=e.length);for(var r=0,t=new Array(n);r<n;r++)t[r]=e[r];return t}function v(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var r=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var t,i,a=[],l=!0,o=!1;try{for(r=r.call(e);!(l=(t=r.next()).done)&&(a.push(t.value),!n||a.length!==n);l=!0);}catch(s){o=!0,i=s}finally{try{l||null==r.return||r.return()}finally{if(o)throw i}}return a}}(e,n)||function(e,n){if(!e)return;if("string"===typeof e)return f(e,n);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return f(e,n)}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var m=r(73732),h=r(69678);function y(e,n){(null==n||n>e.length)&&(n=e.length);for(var r=0,t=new Array(n);r<n;r++)t[r]=e[r];return t}function p(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function j(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{},t=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),t.forEach((function(n){p(e,n,r[n])}))}return e}function x(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var r=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var t,i,a=[],l=!0,o=!1;try{for(r=r.call(e);!(l=(t=r.next()).done)&&(a.push(t.value),!n||a.length!==n);l=!0);}catch(s){o=!0,i=s}finally{try{l||null==r.return||r.return()}finally{if(o)throw i}}return a}}(e,n)||function(e,n){if(!e)return;if("string"===typeof e)return y(e,n);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return y(e,n)}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function b(e){var n,r,l,f=e.run,y=void 0===f||f,b=e.refreshKey,g=e.popPlacement,N=e.forceOpen,w=e.freshFunction,k=e.freshDuration,P=e.className,S=e.circleBodyClassName;(0,c.N)({loop:k});var C,Z=(0,i.useRef)(),O=function(){var e=v((0,u.ZP)(!0),2),n=e[0],r=e[1],t=r.on,a=r.off;return(0,i.useEffect)((function(){if(!d.N9){var e=function(){var e=document.visibilityState;"visible"===e&&t(),"hidden"===e&&a()};return document.addEventListener("visibilitychange",e,{passive:!0}),function(){return document.removeEventListener("visibilitychange",e)}}}),[]),{documentVisible:n}}().documentVisible,E=x((0,u.ZP)(),2),A=E[0],T=E[1],I=T.on,D=T.off,R=null===(n=m.Z.getState().refreshCircleLastTimestamp[b])||void 0===n?void 0:n.endTimestamp,L=null===(r=m.Z.getState().refreshCircleLastTimestamp[b])||void 0===r?void 0:r.endProcessPercent,M=R&&L&&(Date.now()-R)/6e4+L;return(0,h.L)((function(){if(!d.N9)return M&&M>1&&(null===w||void 0===w||w()),function(){var e;m.Z.setState((function(n){var r;return{refreshCircleLastTimestamp:j({},n.refreshCircleLastTimestamp,p({},b,{endTimestamp:Date.now(),endProcessPercent:null!==(e=null===(r=Z.current)||void 0===r?void 0:r.currentProgressPercent)&&void 0!==e?e:0}))}}))}}),[]),(0,i.useEffect)((function(){A&&O&&(null===w||void 0===w||w(),D())}),[A,w,O]),(0,t.jsxs)(s.Z,{className:P,placement:g,forceOpen:N,children:[(0,t.jsx)(o,{run:y,initPercent:M&&M%1,duration:6e4,componentRef:Z,className:(0,a.m)("clickable clickable-filter-effect",S),onClick:function(){var e;I(),null===(e=Z.current)||void 0===e||e.restart()},onEnd:function(){var e;I(),null===(e=Z.current)||void 0===e||e.restart()}}),(0,t.jsx)(s.Z.Panel,{children:(0,t.jsxs)("div",{className:"w-60",children:["Displayed data will auto-refresh after"," ",Math.round(60*(1-(null!==(C=null===(l=Z.current)||void 0===l?void 0:l.currentProgressPercent)&&void 0!==C?C:0)))," seconds. Click this circle to update manually."]})})]})}},65629:function(e,n,r){r.d(n,{Z:function(){return c}});var t=r(85893),i=r(67294),a=r(71849),l=r(10929),o=r(84055),s=r(78484);function c(e){var n=e.className,r=e.children,c=e.forceOpen,d=e.placement,f=void 0===d?"top":d,v=e.triggerBy,m=void 0===v?"hover":v,h=(0,i.useMemo)((function(){return(0,l.kp)(r,u,(function(e){return(0,a.Z)(e,{$isRenderByMain:!0})}))}),[r]);return(0,t.jsxs)(s.Z,{placement:f,triggerBy:m,forceOpen:c,className:n,triggerDelay:100,closeDelay:200,children:[(0,t.jsx)(s.Z.Button,{children:r}),(0,t.jsx)(s.Z.Panel,{children:function(e){var n=e.locationInfo;return(0,t.jsxs)("div",{className:"relative",children:[(0,t.jsx)("div",{className:"w-2 h-2 absolute bg-[#0C0926] rotate-45 -translate-x-1 -translate-y-1",style:n?{top:n.arrowTopRelativeToPanel,left:n.arrowLeftRelativeToPanel}:{visibility:"hidden"}}),(0,t.jsx)(o.Z,{className:"TooltipPanel p-4 bg-[#0C0926] rounded text-xs text-white",children:h})]})}})]})}function u(e){var n=e.$isRenderByMain,r=e.children;return n?(0,t.jsx)(t.Fragment,{children:r}):null}c.Panel=u}}]);