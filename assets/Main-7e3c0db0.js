import{n as L,i as Ct,a as Lt,l as Rt,c as Ht,d as Pt,r as at,t as I,b as Y,e as ct,S as Mt,f as St,s as tt,g as A,h as R,j as X,k as H,m as S,o as Tt,p as st,q as O,u as it,v as G,w as mt,x as y,y as ot,z as Q,A as rt,B as lt,C as ut,D as N,E as At,_ as Vt,F as qt,G as Dt,H as bt}from"./index-ba123d9b.js";function Et(e,t,n,s){if(!t)return L;const i=e.getBoundingClientRect();if(t.left===i.left&&t.right===i.right&&t.top===i.top&&t.bottom===i.bottom)return L;const{delay:l=0,duration:o=300,easing:u=Ct,start:f=Lt()+l,end:g=f+o,tick:a=L,css:_}=n(e,{from:t,to:i},s);let r=!0,c=!1,d;function b(){_&&(d=Ht(e,0,1,o,l,u,_)),l||(c=!0)}function M(){_&&Pt(e,d),r=!1}return Rt(k=>{if(!c&&k>=f&&(c=!0),c&&k>=g&&(a(1,0),M()),!r)return!1;if(c){const P=k-f,T=0+1*u(P/o);a(T,1-T)}return!0}),b(),a(0,1),M}function Nt(e){const t=getComputedStyle(e);if(t.position!=="absolute"&&t.position!=="fixed"){const{width:n,height:s}=t,i=e.getBoundingClientRect();e.style.position="absolute",e.style.width=n,e.style.height=s,Ot(e,i)}}function Ot(e,t){const n=e.getBoundingClientRect();if(t.left!==n.left||t.top!==n.top){const s=getComputedStyle(e),i=s.transform==="none"?"":s.transform;e.style.transform=`${i} translate(${t.left-n.left}px, ${t.top-n.top}px)`}}function yt(e){return(e==null?void 0:e.length)!==void 0?e:Array.from(e)}function $t(e,t){Y(e,1,1,()=>{t.delete(e.key)})}function zt(e,t){e.f(),$t(e,t)}function Gt(e,t,n,s,i,l,o,u,f,g,a,_){let r=e.length,c=l.length,d=r;const b={};for(;d--;)b[e[d].key]=d;const M=[],k=new Map,P=new Map,T=[];for(d=c;d--;){const p=_(i,l,d),C=n(p);let v=o.get(C);v?s&&T.push(()=>v.p(p,t)):(v=g(C,p),v.c()),k.set(C,M[d]=v),C in b&&P.set(C,Math.abs(d-b[C]))}const E=new Set,$=new Set;function B(p){I(p,1),p.m(u,a),o.set(p.key,p),a=p.first,c--}for(;r&&c;){const p=M[c-1],C=e[r-1],v=p.key,w=C.key;p===C?(a=p.first,r--,c--):k.has(w)?!o.has(v)||E.has(v)?B(p):$.has(w)?r--:P.get(v)>P.get(w)?($.add(v),B(p)):(E.add(w),r--):(f(C,o),r--)}for(;r--;){const p=e[r];k.has(p.key)||f(p,o)}for(;c;)B(M[c-1]);return at(T),M}function It(e){const t=e-1;return t*t*t+1}function Yt(e,{delay:t=0,duration:n=400,easing:s=Ct}={}){const i=+getComputedStyle(e).opacity;return{delay:t,duration:n,easing:s,css:l=>`opacity: ${l*i}`}}function jt(e,{from:t,to:n},s={}){const i=getComputedStyle(e),l=i.transform==="none"?"":i.transform,[o,u]=i.transformOrigin.split(" ").map(parseFloat),f=t.left+t.width*o/n.width-(n.left+o),g=t.top+t.height*u/n.height-(n.top+u),{delay:a=0,duration:_=c=>Math.sqrt(c)*120,easing:r=It}=s;return{delay:a,duration:ct(_)?_(Math.sqrt(f*f+g*g)):_,easing:r,css:(c,d)=>{const b=d*f,M=d*g,k=c+d*t.width/n.width,P=c+d*t.height/n.height;return`transform: ${l} translate(${b}px, ${M}px) scale(${k}, ${P});`}}}function Ft(e){let t;return{c(){t=S("Reset")},m(n,s){R(n,t,s)},d(n){n&&H(t)}}}function Zt(e){let t;return{c(){t=S("Play again")},m(n,s){R(n,t,s)},d(n){n&&H(t)}}}function Jt(e){let t,n,s;function i(u,f){return u[1]?Zt:Ft}let l=i(e),o=l(e);return{c(){t=A("button"),o.c()},m(u,f){R(u,t,f),o.m(t,null),n||(s=X(t,"click",function(){ct(e[0])&&e[0].apply(this,arguments)}),n=!0)},p(u,[f]){e=u,l!==(l=i(e))&&(o.d(1),o=l(e),o&&(o.c(),o.m(t,null)))},i:L,o:L,d(u){u&&H(t),o.d(),n=!1,s()}}}function Kt(e,t,n){let{reset:s}=t,{isCorrect:i}=t;return e.$$set=l=>{"reset"in l&&n(0,s=l.reset),"isCorrect"in l&&n(1,i=l.isCorrect)},[s,i]}class Qt extends Mt{constructor(t){super(),St(this,t,Kt,Jt,tt,{reset:0,isCorrect:1})}}const F=[];function Ut(e,t){return{subscribe:x(e,t).subscribe}}function x(e,t=L){let n;const s=new Set;function i(u){if(tt(e,u)&&(e=u,n)){const f=!F.length;for(const g of s)g[1](),F.push(g,e);if(f){for(let g=0;g<F.length;g+=2)F[g][0](F[g+1]);F.length=0}}}function l(u){i(u(e))}function o(u,f=L){const g=[u,f];return s.add(g),s.size===1&&(n=t(i,l)||L),u(e),()=>{s.delete(g),s.size===0&&n&&(n(),n=null)}}return{set:i,update:l,subscribe:o}}function Z(e,t,n){const s=!Array.isArray(e),i=s?[e]:e;if(!i.every(Boolean))throw new Error("derived() expects stores as input, got a falsy value");const l=t.length<2;return Ut(n,(o,u)=>{let f=!1;const g=[];let a=0,_=L;const r=()=>{if(a)return;_();const d=t(s?g[0]:g,o,u);l?o(d):_=ct(d)?d:L},c=i.map((d,b)=>Tt(d,M=>{g[b]=M,a&=~(1<<b),f&&r()},()=>{a|=1<<b}));return f=!0,r(),function(){at(c),_(),f=!1}})}function Bt(e){const t=Math.random()*e,n=Math.floor(t);return n===0?Bt(e):n}function W(e){return new Array(e).fill(0)}function Wt(e,t){if(e<0||t<=0)throw new Error("Number must be non-negative and length must be greater than 0.");let n=e.toString(2);for(;n.length<t;)n="0"+n;return n.split("").map(Number)}function Xt(e){return e.reduce((t,n,s)=>{const i=n===1?Math.pow(2,e.length-1-s):0;return t+i},0)}function xt(e){const t=Math.random()*e;return Math.floor(t)}const te=e=>{const t=x(e),n=x(!0),s=x({moves:0,hintsLeft:e,hints:W(e),active:W(e)}),i=Z([t],([r])=>Bt(Math.pow(2,r))),l=Z(s,({active:r})=>r.map((c,d,b)=>b.length-1-d)),o=Z(s,r=>Xt(r.active)),u=Z([i,o],([r,c])=>r===c),f=Z([s,i],([r,c])=>Wt(c,r.active.length)),g=Z(s,r=>r.hintsLeft===0),a=()=>{const{active:r,hints:c}=st(s),d=xt(r.length);if(c[d]){a();return}s.update(b=>(b.moves+=1,b.hintsLeft-=1,b.hints[d]=1,b.active[d]=st(f)[d],b))},_=()=>{const r=st(t);s.update(c=>(c.moves=0,c.hintsLeft=r,c.hints=W(r),c.active=W(r),c))};return{subscribe:s.subscribe,set:s.set,displayBits:n,powersCount:t,isCorrect:u,currentValue:o,powers:l,binarySolution:f,goal:i,noHintsLeft:g,toggleDisplayBits:()=>{n.update(r=>!r)},reset:_,giveHint:a,tryToggle:r=>{s.update(c=>{const d=c.active.length-1-r;return c.moves+=1,c.active[d]=c.active[d]===0?1:0,c})},setPowersCount:r=>{t.set(r),_()}}},j=te(8);function wt(e,t,n){const s=e.slice();return s[20]=t[n],s[22]=n,s}function ee(e){let t,n,s,i,l;return{c(){t=S("Your goal is "),n=A("b"),s=S(e[1]),i=S(", but you got: "),l=S(e[0])},m(o,u){R(o,t,u),R(o,n,u),y(n,s),R(o,i,u),R(o,l,u)},p(o,u){u&2&&Q(s,o[1]),u&1&&Q(l,o[0])},d(o){o&&(H(t),H(n),H(i),H(l))}}}function ne(e){let t;return{c(){t=S("🚀 You won! ✅")},m(n,s){R(n,t,s)},p:L,d(n){n&&H(t)}}}function se(e){let t;return{c(){t=S("You used all of hints!")},m(n,s){R(n,t,s)},p:L,d(n){n&&H(t)}}}function vt(e){let t,n;function s(o,u){return o[7]?se:o[3]?ne:ee}let i=s(e),l=i(e);return{c(){t=A("h1"),l.c()},m(o,u){R(o,t,u),l.m(t,null)},p(o,u){i===(i=s(o))&&l?l.p(o,u):(l.d(1),l=i(o),l&&(l.c(),l.m(t,null)))},i(o){o&&(n||qt(()=>{n=Dt(t,Yt,{}),n.start()}))},o:L,d(o){o&&H(t),l.d()}}}function kt(e,t){let n,s,i,l,o=L,u;var f=t[2];function g(a,_){return{props:{activeId:a[5].hints[a[22]]?a[9][a[22]]:a[5].active[a[22]],toggle:a[18],power:a[20],displayBits:a[6],isHintGiven:!!a[5].hints[a[22]]}}}return f&&(s=bt(f,g(t))),{key:e,first:null,c(){n=A("div"),s&&it(s.$$.fragment),i=O(),this.first=n},m(a,_){R(a,n,_),s&&ot(s,n,null),y(n,i),u=!0},p(a,_){if(t=a,_&4&&f!==(f=t[2])){if(s){rt();const r=s;Y(r.$$.fragment,1,0,()=>{ut(r,1)}),lt()}f?(s=bt(f,g(t)),it(s.$$.fragment),I(s.$$.fragment,1),ot(s,n,i)):s=null}else if(f){const r={};_&800&&(r.activeId=t[5].hints[t[22]]?t[9][t[22]]:t[5].active[t[22]]),_&256&&(r.power=t[20]),_&64&&(r.displayBits=t[6]),_&288&&(r.isHintGiven=!!t[5].hints[t[22]]),s.$set(r)}},r(){l=n.getBoundingClientRect()},f(){Nt(n),o()},a(){o(),o=Et(n,l,jt,{})},i(a){u||(s&&I(s.$$.fragment,a),u=!0)},o(a){s&&Y(s.$$.fragment,a),u=!1},d(a){a&&H(n),s&&ut(s)}}}function ie(e){let t,n,s,i,l,o,u,f,g,a,_,r=e[5].hintsLeft+"",c,d,b,M,k,P,T=e[6]?"powers":"bits",E,$,B,p=e[3]||e[7],C,v,w=[],ft=new Map,pt,J,dt,U=e[5].moves+"",et,ht,q,nt,gt;f=new Qt({props:{reset:j.reset,isCorrect:e[3]}});let V=vt(e),K=yt(e[8]);const _t=h=>h[22];for(let h=0;h<K.length;h+=1){let m=wt(e,K,h),D=_t(m);ft.set(D,w[h]=kt(D,m))}return{c(){t=A("header"),n=A("label"),n.textContent="Powers count",s=O(),i=A("input"),l=O(),o=A("br"),u=O(),it(f.$$.fragment),g=O(),a=A("button"),_=S("Give a hint ("),c=S(r),d=S(")"),M=O(),k=A("button"),P=S(`Display
    `),E=S(T),$=O(),B=A("main"),V.c(),C=O(),v=A("div");for(let h=0;h<w.length;h+=1)w[h].c();pt=O(),J=A("h1"),dt=S("You made "),et=S(U),ht=S(" move/s"),G(n,"for","powers-count"),G(i,"id","powers-count"),G(i,"type","number"),G(i,"class","powers-count"),i.value=e[4],G(i,"min","1"),G(i,"max","10"),a.disabled=b=e[5].hintsLeft<=0||e[3],G(v,"class","list"),mt(v,"won",e[3])},m(h,m){R(h,t,m),y(t,n),y(t,s),y(t,i),y(t,l),y(t,o),y(t,u),ot(f,t,null),y(t,g),y(t,a),y(a,_),y(a,c),y(a,d),y(t,M),y(t,k),y(k,P),y(k,E),R(h,$,m),R(h,B,m),V.m(B,null),y(B,C),y(B,v);for(let D=0;D<w.length;D+=1)w[D]&&w[D].m(v,null);y(B,pt),y(B,J),y(J,dt),y(J,et),y(J,ht),q=!0,nt||(gt=[X(i,"input",e[19]),X(a,"click",j.giveHint),X(k,"click",j.toggleDisplayBits)],nt=!0)},p(h,[m]){(!q||m&16&&i.value!==h[4])&&(i.value=h[4]);const D={};if(m&8&&(D.isCorrect=h[3]),f.$set(D),(!q||m&32)&&r!==(r=h[5].hintsLeft+"")&&Q(c,r),(!q||m&40&&b!==(b=h[5].hintsLeft<=0||h[3]))&&(a.disabled=b),(!q||m&64)&&T!==(T=h[6]?"powers":"bits")&&Q(E,T),m&136&&tt(p,p=h[3]||h[7])?(rt(),Y(V,1,1,L),lt(),V=vt(h),V.c(),I(V,1),V.m(B,C)):V.p(h,m),m&263012){K=yt(h[8]),rt();for(let z=0;z<w.length;z+=1)w[z].r();w=Gt(w,m,_t,1,h,K,ft,v,zt,kt,null,wt);for(let z=0;z<w.length;z+=1)w[z].a();lt()}(!q||m&8)&&mt(v,"won",h[3]),(!q||m&32)&&U!==(U=h[5].moves+"")&&Q(et,U)},i(h){if(!q){I(f.$$.fragment,h),I(V);for(let m=0;m<K.length;m+=1)I(w[m]);q=!0}},o(h){Y(f.$$.fragment,h),Y(V);for(let m=0;m<w.length;m+=1)Y(w[m]);q=!1},d(h){h&&(H(t),H($),H(B)),ut(f),V.d(h);for(let m=0;m<w.length;m+=1)w[m].d();nt=!1,at(gt)}}}function oe(e,t,n){let s,i,l,o,u,f,g,a,_;N(e,j,p=>n(5,u=p));let r;At(async()=>{n(2,r=(await Vt(()=>import("./ValueButton-8597a5e7.js"),["assets/ValueButton-8597a5e7.js","assets/index-ba123d9b.js","assets/index-668f272a.css"])).default)});const{isCorrect:c,currentValue:d,powers:b,binarySolution:M,goal:k,powersCount:P,displayBits:T,noHintsLeft:E}=j;N(e,c,p=>n(3,s=p)),N(e,d,p=>n(0,i=p)),N(e,b,p=>n(8,a=p)),N(e,M,p=>n(9,_=p)),N(e,k,p=>n(1,l=p)),N(e,P,p=>n(4,o=p)),N(e,T,p=>n(6,f=p)),N(e,E,p=>n(7,g=p));function $(p){const C=Number(p.currentTarget.dataset.power);s||j.tryToggle(C)}function B(p){const C=p.target,v=Number(C.value);v<1||j.setPowersCount(v)}return e.$$.update=()=>{e.$$.dirty&3&&(document.title=`cplx:  ${l}: ${i} | complexity game`)},[i,l,r,s,o,u,f,g,a,_,c,d,b,M,k,P,T,E,$,B]}class re extends Mt{constructor(t){super(),St(this,t,oe,ie,tt,{})}}const ue=Object.freeze(Object.defineProperty({__proto__:null,default:re},Symbol.toStringTag,{value:"Module"}));export{ue as M,Yt as f};