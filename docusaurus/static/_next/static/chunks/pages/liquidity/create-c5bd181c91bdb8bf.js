(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[940],{91260:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/liquidity/create",function(){return n(9893)}])},10317:function(e,t,n){"use strict";n.d(t,{Z:function(){return a}});var i=n(85893),r=(n(67294),n(24734)),o=n(45562);function a(e){var t,n,a,l,s,c,u,d=e.haveAnime,m=e.iconSrc,f=e.token,v=e.domRef,p=e.className,x=e.size,b=void 0===x?"md":x,g=e.style,h=e.onClick,y=null!==(l=null!==(a=null!==m&&void 0!==m?m:null===(t=f)||void 0===t?void 0:t.icons)&&void 0!==a?a:null===(n=f)||void 0===n?void 0:n.icon)&&void 0!==l?l:"/coins/dollar.svg",j="2xl"===b?"h-20 w-20":"lg"===b?"h-12 w-12":"md"===b?"h-8 w-8":"sm"===b?"h-5 w-5":"smi"===b?"h-6 w-6":"xs"===b?"w-4 h-4":"h-12 w-12";return(0,i.jsx)("div",{ref:v,className:"CoinAvatar flex items-center gap-2",style:g,onClick:h,children:d?(0,i.jsxs)("div",{className:(0,r.m)("".concat(j," rounded-full swap-coin"),p),suppressHydrationWarning:!0,style:(s={},c="--delay",u="".concat((1e3*Math.random()).toFixed(2),"ms"),c in s?Object.defineProperty(s,c,{value:u,enumerable:!0,configurable:!0,writable:!0}):s[c]=u,s),children:[(0,i.jsx)(o.Z,{className:"front-face overflow-hidden transition-transform transform ".concat("scale-[.7]"),src:y,fallbackSrc:"/coins/unknown.svg"}),(0,i.jsxs)("div",{className:"line-group",children:[(0,i.jsx)("div",{className:"line-out",children:(0,i.jsx)("div",{className:"line-inner"})}),(0,i.jsx)("div",{className:"line-out",children:(0,i.jsx)("div",{className:"line-inner"})}),(0,i.jsx)("div",{className:"line-out",children:(0,i.jsx)("div",{className:"line-inner"})}),(0,i.jsx)("div",{className:"line-out",children:(0,i.jsx)("div",{className:"line-inner"})}),(0,i.jsx)("div",{className:"line-out",children:(0,i.jsx)("div",{className:"line-inner"})}),(0,i.jsx)("div",{className:"line-out",children:(0,i.jsx)("div",{className:"line-inner"})}),(0,i.jsx)("div",{className:"line-out",children:(0,i.jsx)("div",{className:"line-inner"})}),(0,i.jsx)("div",{className:"line-out",children:(0,i.jsx)("div",{className:"line-inner"})}),(0,i.jsx)("div",{className:"line-out",children:(0,i.jsx)("div",{className:"line-inner"})}),(0,i.jsx)("div",{className:"line-out",children:(0,i.jsx)("div",{className:"line-inner"})}),(0,i.jsx)("div",{className:"line-out",children:(0,i.jsx)("div",{className:"line-inner"})}),(0,i.jsx)("div",{className:"line-out",children:(0,i.jsx)("div",{className:"line-inner"})})]}),(0,i.jsx)(o.Z,{className:"back-face overflow-hidden transition-transform transform ".concat("scale-[.7]"),src:y,fallbackSrc:"/coins/unknown.svg"})]}):(0,i.jsx)("div",{className:(0,r.m)("".concat(j," rounded-full overflow-hidden"),p),style:{background:"linear-gradient(126.6deg, rgba(171, 196, 255, 0.2) 28.69%, rgba(171, 196, 255, 0) 100%)"},children:(0,i.jsx)(o.Z,{className:"".concat(j," rounded-full overflow-hidden transition-transform transform ").concat("scale-[.7]"),src:y,fallbackSrc:"/coins/unknown.svg"})})})}},45562:function(e,t,n){"use strict";n.d(t,{Z:function(){return c}});var i=n(85893),r=n(67294),o=n(30992),a=n(43538),l=n(66623),s=n(35880);function c(e){var t=e.src,n=e.fallbackSrc,c=e.alt,u=e.onClick,d=e.domRef,m=e.className,f=e.style,v=(0,r.useRef)(null);(0,l.e)(v,{onClick:u});var p=(0,o.Do)([t,n].flat()),x=p.join(" "),b=(0,r.useState)(0),g=b[0],h=b[1],y=p[g],j=null!==c&&void 0!==c?c:(0,s.a)(null!==y&&void 0!==y?y:"");return(0,r.useEffect)((function(){h(0)}),[x]),(0,r.useEffect)((function(){var e;null===(e=v.current)||void 0===e||e.addEventListener("error",(function(e){h((function(e){return e+1}))}))}),[]),(0,i.jsx)("img",{ref:(0,a.Z)(d,v),className:"Image ".concat(null!==m&&void 0!==m?m:""),src:p[g],alt:j,style:f})}},29632:function(e,t,n){"use strict";n.d(t,{Z:function(){return u}});var i=n(85893),r=n(67294),o=n(24734),a=n(31992),l=n(7432),s=n(10959),c=n(55740);function u(e){var t,n,u=e.inputStyle,d=void 0===u?"inline-input":u,m=e.className,f=e.label,v=e.onUserInput,p=e.onEnter,x=e.renderInput,b=function(){var e;null===(e=g.current)||void 0===e||e.focus()},g=(0,r.useRef)(null);return"textarea"===d?(0,i.jsxs)(s.Z,{onClick:b,className:(0,o.m)("bg-[#141041] rounded-xl py-3 px-6 cursor-text",m),children:[f&&(0,i.jsx)("div",{className:"text-sm font-medium text-[rgba(171,196,255,.5)] mb-3 mobile:mb-1 mobile:text-xs",children:f}),null!==(t=(0,l.u)(x,[g]))&&void 0!==t?t:(0,i.jsx)(c.Z,{className:"w-full",componentRef:g,onUserInput:function(e){return null===v||void 0===v?void 0:v(e)},onEnter:p})]}):(0,i.jsxs)(a.Z,{onClick:b,className:(0,o.m)("flex-wrap items-center cursor-text justify-between",m),children:[f&&(0,i.jsx)("div",{className:"text-sm font-medium text-[rgba(171,196,255,.5)] mobile:text-xs my-1",children:f}),null!==(n=(0,l.u)(x,[g]))&&void 0!==n?n:(0,i.jsx)(c.Z,{className:"w-full bg-[#141041] rounded-lg py-2 px-4",componentRef:g,onUserInput:function(e){return null===v||void 0===v?void 0:v(e)},onEnter:p})]})}},28843:function(e,t,n){"use strict";n.d(t,{Z:function(){return l}});var i=n(85893),r=n(7432),o=n(10959),a=n(31992);function l(e){var t=e.currentStep,n=void 0===t?1:t,l=e.stepInfos,s=e.onSetCurrentSetp,c=e.renderStepContent,u=e.renderStepLine,d=e.renderStepNumber;return(0,i.jsx)("div",{children:l.map((function(e,t,l){return(0,i.jsxs)(a.Z,{children:[(0,i.jsxs)(o.Z,{className:"items-center",children:[(0,r.u)(d,[e])||(0,i.jsx)("div",{className:"grid place-items-center h-8 w-8 mobile:h-6 mobile:w-6 text-sm font-medium bg-[#141041] rounded-full ".concat(n===e.stepNumber?"text-[#F1F1F2]":"text-[rgba(171,196,255,.5)]"," ").concat(n>e.stepNumber?"clickable":""),onClick:function(){n>e.stepNumber&&(null===s||void 0===s||s(e))},children:e.stepNumber}),(0,r.u)(u,[Object.assign(e,{isLast:t===l.length-1})])||t!==l.length-1&&(0,i.jsx)("div",{className:"my-2 min-h-[16px] mobile:h-2 border-r-1.5 border-[rgba(171,196,255,.5)] flex-1"})]}),(0,i.jsx)("div",{className:"ml-2",children:(0,r.u)(c,[e])||(0,i.jsx)("div",{className:"text-sm font-medium ".concat(n===e.stepNumber?"text-[#F1F1F2]":"text-[rgba(171,196,255,.5)]"," pt-1.5"),children:e.stepContent})})]},t)}))})}},51772:function(e,t,n){"use strict";function i(e){var t;if(null===globalThis||void 0===globalThis||null===(t=globalThis.navigator)||void 0===t?void 0:t.clipboard)return globalThis.navigator.clipboard.writeText(e).then((function(){return console.info("Text copied")}));throw new Error("current context has no clipboard")}n.d(t,{Z:function(){return i}})},9893:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return fe}});var i=n(85893),r=n(67294),o=n(11163),a=n(24734),l=n(73732),s=n(51069),c=(0,n(14671).Z)((function(e,t){return{createdPoolHistory:{},baseDecimaledAmount:"",quoteDecimaledAmount:"",sdkAssociatedPoolKeys:void 0,currentStep:1,setCurrentStep:function(t){e({currentStep:t})}}}));function u(){var e=(0,s.J)("RAY_CREATED_POOL_HISTORY");e&&c.setState({createdPoolHistory:e})}var d=n(34051),m=n.n(d),f=n(55318),v=n(68155),p=n(15441),x=n(78670),b=n(10723),g=n(82545),h=n(79353),y=n(76700),j=n(49552),S=n(38983),w=n(30992);function N(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,i=new Array(t);n<t;n++)i[n]=e[n];return i}function Z(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function k(e){return function(e){if(Array.isArray(e))return N(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"===typeof e)return N(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return N(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function I(){var e=c.getState(),t=e.lpMint,n=e.marketId,i=e.ammId,r=e.baseMint,o=e.quoteMint,a=e.baseDecimals,l=e.quoteDecimals;(0,h.Z)(t,"required create-pool step 1, it will cause info injection"),(0,h.Z)(n,"required create-pool step 1, it will cause info injection"),(0,h.Z)(i,"required create-pool step 1, it will cause info injection"),(0,h.Z)(r,"required create-pool step 1, it will cause info injection"),(0,h.Z)(o,"required create-pool step 1, it will cause info injection"),(0,h.Z)(a,"required create-pool step 1, it will cause info injection"),(0,h.Z)(l,"required create-pool step 1, it will cause info injection");var u=g.Z.getState().adapter,d=null===u||void 0===u?void 0:u.publicKey;(0,h.Z)(d,"no wallet owner");var m={lpMint:t,marketId:n,ammId:i,baseMint:r,quoteMint:o,baseDecimals:a,quoteDecimals:l,timestamp:Date.now(),walletOwner:String(d)};console.log("new created pool history Item: ",m);var f,v=c.getState().createdPoolHistory,p=(0,w.kt)(k(null!==(f=v[String(d)])&&void 0!==f?f:[]).concat([m]),(function(e){return e.ammId})),x=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},i=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),i.forEach((function(t){Z(e,t,n[t])}))}return e}({},v,Z({},String(d),p));c.setState({createdPoolHistory:x}),(0,s.m)("RAY_CREATED_POOL_HISTORY",x)}var A=n(85928),D=n(42137),C=n(80546);function T(e,t,n,i,r,o,a){try{var l=e[o](a),s=l.value}catch(c){return void n(c)}l.done?t(s):Promise.resolve(s).then(i,r)}function q(e){return function(){var t=this,n=arguments;return new Promise((function(i,r){var o=e.apply(t,n);function a(e){T(o,i,r,a,l,"next",e)}function l(e){T(o,i,r,a,l,"throw",e)}a(void 0)}))}}function M(){return M=q(m().mark((function e(t){var n;return m().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.onAllSuccess,e.abrupt("return",(0,b.Z)(function(){var e=q(m().mark((function e(t){var n,i,r,o,a,l,s,u,d,b,w,N,Z,k,T,q,M,P,O,L,E,B,R,_,F,V,U,H,z,K,W,Y,J,$,Q,G,X,ee,te,ne,ie;return m().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.transactionCollector,i=t.baseUtils,r=i.owner,o=i.connection,b=c.getState(),w=b.lpMint,N=b.marketId,Z=b.ammId,k=b.baseMint,T=b.quoteMint,q=b.baseDecimals,M=b.quoteDecimals,P=b.baseDecimaledAmount,O=b.quoteDecimaledAmount,L=b.sdkAssociatedPoolKeys,E=b.startTime,B=p.ZP.getState().getToken,R=g.Z.getState(),_=R.solBalance,F=R.tokenAccounts,V=R.pureRawBalances,(0,h.Z)(w,"required create-pool step 1, it will cause info injection"),(0,h.Z)(N,"required create-pool step 1, it will cause info injection"),(0,h.Z)(Z,"required create-pool step 1, it will cause info injection"),(0,h.Z)(k,"required create-pool step 1, it will cause info injection"),(0,h.Z)(T,"required create-pool step 1, it will cause info injection"),(0,h.Z)(null!=q,"required create-pool step 1, it will cause info injection"),(0,h.Z)(null!=M,"required create-pool step 1, it will cause info injection"),(0,h.Z)(P,"required create-pool step 1, it will cause info injection"),(0,h.Z)(O,"required create-pool step 1, it will cause info injection"),(0,h.Z)((0,j.gt)(P,0),"should input > 0 base amount "),(0,h.Z)((0,j.gt)(O,0),"should input > 0 quote amount "),(0,h.Z)(L,"required create-pool step 1, it will cause info injection"),e.next=19,null===o||void 0===o?void 0:o.getAccountInfo(new v.nh(w));case 19:if(e.t1=a=e.sent,e.t0=null===e.t1,e.t0){e.next=23;break}e.t0=void 0===a;case 23:if(!e.t0){e.next=27;break}e.t2=void 0,e.next=28;break;case 27:e.t2=a.data;case 28:return U=e.t2,e.next=31,null===o||void 0===o?void 0:o.getAccountInfo(new v.nh(Z));case 31:if(e.t4=l=e.sent,e.t3=null===e.t4,e.t3){e.next=35;break}e.t3=void 0===l;case 35:if(!e.t3){e.next=39;break}e.t5=void 0,e.next=40;break;case 39:e.t5=l.data;case 40:if(H=e.t5,z=Boolean((null===U||void 0===U?void 0:U.length)&&0===Number(f.d_N.decode(U).supply)),K=Boolean((null===H||void 0===H?void 0:H.length)&&(0,j.$u)(null===(s=f.ZpI.getStateLayout(4).decode(H))||void 0===s?void 0:s.status)),(0,h.Z)(!K,"pool already inited"),W=g.Z.getState().tokenAccountRawInfos,Y=B(k)||new f.WUB(k,q),J=B(T)||new f.WUB(T,M),(0,h.Z)((0,j.eg)((0,D.Z)(k)===(0,D.Z)(A.DA)?(0,C.kg)(null!==($=V[k])&&void 0!==$?$:0,null!==_&&void 0!==_?_:0):null===(u=F.find((function(e){return(0,D.Z)(e.mint)===k})))||void 0===u?void 0:u.amount,(0,y.n)(Y,P).raw),"wallet haven't enough base token"),(0,h.Z)((0,j.eg)((0,D.Z)(T)===(0,D.Z)(A.DA)?(0,C.kg)(null!==(Q=V[T])&&void 0!==Q?Q:0,null!==_&&void 0!==_?_:0):null===(d=F.find((function(e){return(0,D.Z)(e.mint)===T})))||void 0===d?void 0:d.amount,(0,y.n)(J,O).raw),"wallet haven't enough quote token"),z){e.next=59;break}return G=f.ZpI.makeCreatePoolTransaction({poolKeys:L,userKeys:{payer:r}}),X=G.transaction,ee=G.signers,e.t6=n,e.next=56,(0,x.G)({transaction:X,signers:ee});case 56:e.t7=e.sent,e.t8={txHistoryInfo:{title:"Create a new pool",description:"pool's ammId: ".concat(Z.slice(0,4),"...").concat(Z.slice(-4))}},e.t6.add.call(e.t6,e.t7,e.t8);case 59:return e.next=61,f.ZpI.makeInitPoolTransaction({poolKeys:L,startTime:E?(0,S.Z)(E.getTime()/1e3):void 0,baseAmount:(0,A.wO)((0,y.n)(Y,P,{alreadyDecimaled:!0})),quoteAmount:(0,A.wO)((0,y.n)(J,O,{alreadyDecimaled:!0})),connection:o,userKeys:{owner:r,payer:r,tokenAccounts:W}});case 61:return te=e.sent,ne=te.transaction,ie=te.signers,e.t9=n,e.next=67,(0,x.G)({transaction:ne,signers:ie});case 67:e.t10=e.sent,e.t11={onTxSuccess:function(){I(),c.setState({startTime:void 0})},txHistoryInfo:{title:"Init pool",description:"".concat(P," ").concat(Y.symbol," and ").concat(O," ").concat(J.symbol)}},e.t9.add.call(e.t9,e.t10,e.t11);case 70:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).then((function(e){e.allSuccess&&(null===n||void 0===n||n())})));case 2:case"end":return e.stop()}}),e)}))),M.apply(this,arguments)}var P=n(80110),O=n(68803),L=n(88654),E=n(15752);function B(e,t,n,i,r,o,a){try{var l=e[o](a),s=l.value}catch(c){return void n(c)}l.done?t(s):Promise.resolve(s).then(i,r)}function R(e){return function(){var t=this,n=arguments;return new Promise((function(i,r){var o=e.apply(t,n);function a(e){B(o,i,r,a,l,"next",e)}function l(e){B(o,i,r,a,l,"throw",e)}a(void 0)}))}}function _(){return(_=R(m().mark((function e(t){var n,i,r,o,a,l,s,u,d,p,x,b,y,j,S,w,N,Z,k,I,C,T;return m().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,i=L.O.getState().jsonInfos,(0,h.Z)(!i.some((function(e){return e.market===String(t.marketId)})),"Pool already created"),r=P.ZP.getState().connection,(0,h.Z)(r,"no rpc connection"),o=g.Z.getState().owner,(0,h.Z)(o,"require connect wallet"),e.next=10,r.getAccountInfo(new v.nh(t.marketId));case 10:return a=e.sent,(0,h.Z)(null===a||void 0===a?void 0:a.data,"can't find market ".concat(t.marketId)),l=f.SsU.decode(a.data),s=l.baseMint,u=l.quoteMint,d={USDT:String(E.q3),USDC:String(E.LA),RAY:String(E.PD),WSOL:String(A.DA),SRM:String(E.CR),PAI:String(E.mT),mSOL:String(E.S2),stSOL:String(E._1),USDH:String(E.yJ),NRV:String(E.PL),ANA:String(E.ws),ETH:String(E.vS)},(0,h.Z)(Object.values(d).includes(String(u)),"only support USDT, USDC, USDH, RAY, WSOL(SOL), mSOL, stSOL, SRM, PAI, NRV, ANA, ETH. current: ".concat((0,D.Z)(u).slice(0,4),"...").concat((0,D.Z)(u).slice(-4)," is not avaliable")),e.next=17,r.getAccountInfo(new v.nh(s));case 17:return p=e.sent,(0,h.Z)(null===p||void 0===p?void 0:p.data,"can't find token ".concat(s)),x=f.d_N.decode(p.data),b=x.decimals,e.next=22,r.getAccountInfo(new v.nh(u));case 22:return y=e.sent,(0,h.Z)(null===y||void 0===y?void 0:y.data,"can't find token ".concat(u)),j=f.d_N.decode(y.data),S=j.decimals,w=g.Z.getState().tokenAccounts,N=w.find((function(e){var t=e.mint;return String(t)===String(s)})),Z=w.find((function(e){var t=e.mint;return String(t)===String(u)})),(0,h.Z)((0,D.Z)(u)===(0,D.Z)(A.DA)||Z,"user wallet has no quote token"),(0,h.Z)((0,D.Z)(u)===(0,D.Z)(A.DA)||!(null===Z||void 0===Z?void 0:Z.amount.isZero()),"user wallet has 0 quote token"),(0,h.Z)((0,D.Z)(s)===(0,D.Z)(A.DA)||N,"user wallet has no base token"),(0,h.Z)((0,D.Z)(s)===(0,D.Z)(A.DA)||!(null===N||void 0===N?void 0:N.amount.isZero()),"user wallet has 0 base token"),e.next=34,f.ZpI.getAssociatedPoolKeys({version:4,baseMint:s,quoteMint:u,marketId:new v.nh(t.marketId)});case 34:return k=e.sent,I=k.id,C=k.lpMint,c.setState({sdkAssociatedPoolKeys:k}),(0,h.Z)(I,"can't find associated poolKeys for market"),c.setState({lpMint:String(C),ammId:String(I),marketId:String(t.marketId),baseMint:String(s),quoteMint:String(u),baseDecimals:b,quoteDecimals:S}),e.t0=Boolean,e.next=42,null===r||void 0===r?void 0:r.getAccountInfo(new v.nh(I));case 42:if(e.t2=n=e.sent,e.t1=null===e.t2,e.t1){e.next=46;break}e.t1=void 0===n;case 46:if(!e.t1){e.next=50;break}e.t3=void 0,e.next=51;break;case 50:e.t3=n.data.length;case 51:return e.t4=e.t3,T=(0,e.t0)(e.t4),(0,h.Z)(!T,"has already init this pool"),e.abrupt("return",{isSuccess:!0});case 57:return e.prev=57,e.t5=e.catch(0),(0,O.Z.getState().logError)(e.t5),e.abrupt("return",{isSuccess:!1});case 62:case"end":return e.stop()}}),e,null,[[0,57]])})))).apply(this,arguments)}var F=n(59128),V=n(37543),U=n(84055),H=n(96720),z=n(10959),K=n(84699),W=n(69242),Y=n(55740),J=n(57336),$=n(29632),Q=n(78484);n(7158);function G(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function X(e){var t=e.inputStyle,n=e.defaultCurrentDate,r=e.className,o=e.label,a=e.onDateChange;return(0,i.jsx)($.Z,{inputStyle:t,className:r,label:o,renderInput:(0,i.jsx)(ee,{onDateChange:a,defaultCurrentDate:n})})}function ee(e){var t=e.defaultCurrentDate,n=e.className,o=e.onDateChange,a=(0,r.useState)(t),l=a[0],s=a[1],c=null===l||void 0===l?void 0:l.getTimezoneOffset();return(0,i.jsxs)(Q.Z,{placement:"top",className:n,cornerOffset:20,children:[(0,i.jsx)(Q.Z.Button,{children:(0,i.jsx)(Y.Z,{className:"bg-[#141041] rounded-lg py-2 px-4 cursor-text",value:l?(0,J.xn)(l,{showSeconds:!0}):void 0})}),(0,i.jsx)(Q.Z.Panel,{children:(0,i.jsx)(te,{showTime:!0,weekday:["Su","Mo","Tu","We","Th","Fr","Sa"],weekTitle:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],monthLabel:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],date:l&&c?(0,J.mb)(l,c,{unit:"minutes"}):l,todayButton:"today",onChange:function(e){var t=e&&c?(0,J.mb)(e,-c,{unit:"minutes"}):e;s(t),null===o||void 0===o||o(t)},lang:"en"})})]})}function te(e){return(0,i.jsx)(W.ZP,function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},i=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),i.forEach((function(t){G(e,t,n[t])}))}return e}({},e))}var ne=n(68998),ie=n(88644),re=n(70242),oe=n(31992),ae=n(28843),le=n(51772),se=n(3342),ce=n(75169),ue=n(71633);function de(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,i=new Array(t);n<t;n++)i[n]=e[n];return i}function me(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var i,r,o=[],a=!0,l=!1;try{for(n=n.call(e);!(a=(i=n.next()).done)&&(o.push(i.value),!t||o.length!==t);a=!0);}catch(s){l=!0,r=s}finally{try{a||null==n.return||n.return()}finally{if(l)throw r}}return o}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return de(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return de(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function fe(){return(0,i.jsxs)(re.Z,{metaTitle:"Create Liquidity Pool - Raydium",children:[(0,i.jsx)(ve,{close:function(){return(0,F.E)("/liquidity/add")}}),(0,i.jsx)(be,{})]})}function ve(e){var t,n,r,o,a=e.close,s=(0,g.Z)((function(e){return e.connected})),u=(0,p.ZP)((function(e){return e.getToken})),d=c((function(e){return e.currentStep})),m=c((function(e){return e.setCurrentStep})),f=c(),v=f.marketId,x=f.ammId,b=f.baseMint,h=f.quoteMint,y=f.baseDecimals,S=f.quoteDecimals,w=f.baseDecimaledAmount,N=f.quoteDecimaledAmount,Z=(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)("div",{className:"my-12 mobile:my-6 italic text-center text-sm font-medium text-[rgba(171,196,255,.5)]",children:["This tool is for advanced users. Before attempting to create a new liquidity pool, we suggest going through this"," ",(0,i.jsx)(ie.Z,{href:"https://raydium.gitbook.io/raydium/permissionless/creating-a-pool",children:"detailed guide"})]}),(0,i.jsx)($.Z,{inputStyle:"textarea",label:"Serum Market ID:",className:"mb-5",onUserInput:function(e){return c.setState({marketId:e})}}),(0,i.jsx)(V.Z,{className:"frosted-glass-teal w-full",validators:[{should:Boolean(v)},{should:s,forceActive:!0,fallbackProps:{onClick:function(){return l.Z.setState({isWalletSelectorShown:!0})},children:"Connect Wallet"}}],onClick:function(){(function(e){return _.apply(this,arguments)})({marketId:v}).then((function(e){e.isSuccess&&m(2)}))},children:"Confirm"})]}),k=b?null!==(t=u(b))&&void 0!==t?t:null!=y?(0,ce.LP)({mint:b,decimals:y}):void 0:void 0,I=h?null!==(n=u(h))&&void 0!==n?n:null!=S?(0,ce.LP)({mint:h,decimals:S}):void 0:void 0,A=me((0,se.ZP)(),2),D=A[0],T=A[1].toggle,q=(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(z.Z,{className:"my-12 mobile:my-6 py-4 px-6 flex-grow ring-inset ring-1.5 ring-[rgba(171,196,255,.5)] rounded-xl items-center gap-3 mobile:gap-1",children:[(0,i.jsx)(xe,{fieldName:"Serum Market ID:",fieldValue:null!==v&&void 0!==v?v:"--"}),(0,i.jsx)(xe,{fieldName:"Base Token Mint Address:",fieldValue:null!==b&&void 0!==b?b:"--",autoShowTokenSymbol:!0}),(0,i.jsx)(xe,{fieldName:"Quote Token Mint Address:",fieldValue:null!==h&&void 0!==h?h:"--",autoShowTokenSymbol:!0}),(0,i.jsx)(xe,{fieldName:"AMM ID:",fieldValue:null!==x&&void 0!==x?x:"--"})]}),w&&N&&(0,j.$u)(w)&&(0,j.$u)(N)&&(0,i.jsxs)(oe.Z,{className:"mx-auto my-2 items-center gap-2",children:[(0,i.jsx)("div",{className:"text-sm text-[rgb(171,196,255)]",children:"price:"}),(0,i.jsx)("div",{className:"text-sm text-white",children:(0,ue.B)(D?(0,C.hi)(N||0,w||1):(0,C.hi)(w||0,N||1),{decimalLength:"auto ".concat(Math.max(null!==(r=null===k||void 0===k?void 0:k.decimals)&&void 0!==r?r:6,null!==(o=null===I||void 0===I?void 0:I.decimals)&&void 0!==o?o:6))})}),(0,i.jsxs)("div",{className:"text-sm text-white",children:[D?null===I||void 0===I?void 0:I.symbol:null===k||void 0===k?void 0:k.symbol," /"," ",D?null===k||void 0===k?void 0:k.symbol:null===I||void 0===I?void 0:I.symbol]}),(0,i.jsx)(ne.Z,{heroIconName:"switch-horizontal",className:"clickable clickable-mask-offset-2",size:"sm",onClick:T})]}),(0,i.jsx)(H.Z,{topLeftLabel:"Base Token Initial Liquidity:",className:"mb-5",token:k,onUserInput:function(e){return c.setState({baseDecimaledAmount:e})}}),(0,i.jsx)(H.Z,{topLeftLabel:"Quote Token Initial Liquidity:",className:"mb-5",token:I,onUserInput:function(e){return c.setState({quoteDecimaledAmount:e})}}),(0,i.jsx)(X,{inputStyle:"textarea",className:"mb-5",label:"Start time (Optional):",onDateChange:function(e){return c.setState({startTime:e})}}),(0,i.jsx)(V.Z,{className:"frosted-glass-teal w-full",validators:[{should:Boolean(w&&N)}],onClick:function(){!function(e){M.apply(this,arguments)}({onAllSuccess:function(){m(3),setTimeout((function(){m(1)}),8e3)}})},children:"Initialize Liquidity Pool"})]}),P=(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(z.Z,{className:"my-12 mobile:my-6 py-4 px-6 flex-grow ring-inset ring-1.5 ring-[rgba(171,196,255,.5)] rounded-xl items-center gap-3 mobile:gap-1",children:[(0,i.jsx)(xe,{fieldName:"Serum Market ID:",fieldValue:null!==v&&void 0!==v?v:"--"}),(0,i.jsx)(xe,{fieldName:"AMM ID:",fieldValue:null!==x&&void 0!==x?x:"--"}),(0,i.jsx)(xe,{fieldName:"Base Mint:",fieldValue:null!==b&&void 0!==b?b:"--",autoShowTokenSymbol:!0}),(0,i.jsx)(xe,{fieldName:"Quote Mint:",fieldValue:null!==h&&void 0!==h?h:"--",autoShowTokenSymbol:!0})]}),(0,i.jsx)("div",{className:"font-medium text-center",children:"Pool has been successfully created!"}),(0,i.jsx)(z.Z,{className:"my-6 mobile:my-6 py-4 px-6 flex-grow ring-inset ring-1.5 ring-[rgba(171,196,255,.5)] rounded-xl items-center gap-3 mobile:gap-1",children:(0,i.jsx)(pe,{fieldName:"AMM ID:",fieldValue:(0,i.jsxs)(oe.Z,{children:[(0,i.jsx)(ie.Z,{className:"text-sm",href:"/liquidity/add/?ammId=".concat(x),onClick:a,children:(null===x||void 0===x?void 0:x.slice(0,12))+"......"+(null===x||void 0===x?void 0:x.slice(-12))}),(0,i.jsx)(ne.Z,{size:"sm",heroIconName:"clipboard-copy",className:"clickable text-[#ABC4FF] ml-2",onClick:function(){x&&(0,le.Z)(x)}})]})})})]});return(0,i.jsxs)("div",{className:"self-center w-[min(456px,90vw)]",children:[(0,i.jsx)("div",{className:"pb-8 text-2xl mobile:text-lg font-semibold justify-self-start text-white",children:"Create Pool"}),(0,i.jsxs)(U.Z,{className:"p-8 mobile:p-4 flex flex-col shadow-xl rounded-3xl border-1.5 border-[rgba(171,196,255,0.2)] overflow-y-auto overflow-x-hidden",size:"lg",style:{background:"linear-gradient(140.14deg, rgba(0, 182, 191, 0.15) 0%, rgba(27, 22, 89, 0.1) 86.61%), linear-gradient(321.82deg, #18134D 0%, #1B1659 100%)",boxShadow:"0px 8px 48px rgba(171, 196, 255, 0.12)"},children:[(0,i.jsx)(ae.Z,{currentStep:d,stepInfos:[{stepNumber:1,stepContent:"Import Serum Market ID"},{stepNumber:2,stepContent:"Price & Initial Liquidity"},{stepNumber:3,stepContent:"Pool Created"}],onSetCurrentSetp:function(e){var t=e.stepNumber;return null===m||void 0===m?void 0:m(t)}}),1===d&&Z,2===d&&q,3===d&&P]})]})}function pe(e){var t,n=e.autoShowTokenSymbol,r=e.className,o=e.fieldName,l=e.fieldValue,s=(0,p.ZP)((function(e){return e.getToken}));return(0,i.jsxs)(oe.Z,{className:(0,a.m)("w-full justify-between",r),children:[(0,i.jsx)(oe.Z,{className:"items-center text-xs font-medium text-[#ABC4FF] mobile:text-2xs",children:(0,i.jsx)("div",{className:"mr-1",children:o})}),(0,i.jsx)("div",{className:"text-xs font-medium text-white mobile:text-2xs",children:n&&null!==(t=function(e){var t=s(e);return t?"".concat(e," (").concat(t.symbol,")"):e}(String(l)))&&void 0!==t?t:l})]})}function xe(e){var t=e.autoShowTokenSymbol,n=e.className,o=e.fieldName,a=e.fieldValue,l=(0,p.ZP)((function(e){return e.getToken})),s=(0,r.useMemo)((function(){return a.slice(0,6)+"......"+a.slice(-6)}),[a]);return(0,i.jsx)(pe,{className:n,fieldName:o,fieldValue:(0,i.jsxs)(oe.Z,{children:[(0,i.jsxs)("div",{title:a,children:[s," ",t&&function(e){var t=l(e);return t?"(".concat(t.symbol,")"):void 0}(String(a))]}),(0,i.jsx)(ne.Z,{size:"sm",heroIconName:"clipboard-copy",className:"clickable text-[#ABC4FF] ml-2",onClick:function(){(0,le.Z)(a)}})]})})}function be(){var e=(0,o.useRouter)().push,t=((0,p.ZP)((function(e){return e.getToken})),(0,g.Z)((function(e){return e.owner}))),n=c((function(e){return e.createdPoolHistory})),a=(0,r.useMemo)((function(){return t&&(null===n||void 0===n?void 0:n[String(t)])}),[n,t]);return(0,r.useEffect)(u,[]),(null===a||void 0===a?void 0:a.length)?(0,i.jsxs)("div",{className:"self-center w-[min(456px,90vw)] mt-12",children:[(0,i.jsx)("div",{className:"pb-8 text-xl mobile:text-base font-semibold justify-self-start text-white",children:"Your Created Pool"}),(0,i.jsx)(U.Z,{className:"p-4",size:"lg",style:{background:"linear-gradient(140.14deg, rgba(0, 182, 191, 0.15) 0%, rgba(27, 22, 89, 0.1) 86.61%), linear-gradient(321.82deg, #18134D 0%, #1B1659 100%)"},children:(0,i.jsx)(z.Z,{className:"gap-6 mobile:gap-5",children:a.map((function(t,n){return(0,i.jsxs)(K.Z,{className:"py-4 px-6 ring-inset ring-1.5 ring-[rgba(171,196,255,.5)] rounded-2xl mobile:rounded-xl",children:[(0,i.jsx)(K.Z.Face,{children:function(e){return(0,i.jsxs)(oe.Z,{className:"items-center justify-between",children:[(0,i.jsx)(oe.Z,{className:"gap-2 items-center",children:(0,i.jsxs)("div",{className:"text-base font-normal text-[#abc4ff]",children:["AMM ID: ",t.ammId.slice(0,6),"...",t.ammId.slice(-6)]})}),(0,i.jsx)(ne.Z,{size:"sm",className:"text-[#abc4ff]",heroIconName:"".concat(e?"chevron-up":"chevron-down")})]})}}),(0,i.jsxs)(K.Z.Body,{children:[(0,i.jsxs)(z.Z,{className:"border-t-1.5 border-[rgba(171,196,255,.5)] mt-4 py-5 gap-3",children:[(0,i.jsx)(xe,{fieldName:"Amm Id: ",fieldValue:t.ammId}),(0,i.jsx)(xe,{fieldName:"Market Id: ",fieldValue:t.marketId}),(0,i.jsx)(xe,{fieldName:"Base Mint: ",fieldValue:t.baseMint,autoShowTokenSymbol:!0}),(0,i.jsx)(xe,{fieldName:"Quote Mint: ",fieldValue:t.quoteMint,autoShowTokenSymbol:!0}),(0,i.jsx)(pe,{fieldName:"Created On: ",fieldValue:t.timestamp})]}),(0,i.jsx)(oe.Z,{className:"gap-4 mb-1",children:(0,i.jsx)(V.Z,{className:"text-base font-medium frosted-glass frosted-glass-teal rounded-xl flex-grow",onClick:function(){e("/liquidity/add/?ammId=".concat(t.ammId))},children:"Add Liquidity"})})]})]},n)}))})})]}):null}},7158:function(){}},function(e){e.O(0,[749,242,241,41,774,888,179],(function(){return t=91260,e(e.s=t);var t}));var t=e.O();_N_E=t}]);