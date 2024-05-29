var I=Object.defineProperty;var U=(t,e,n)=>e in t?I(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var f=(t,e,n)=>(U(t,typeof e!="symbol"?e+"":e,n),n);function P(){}const dt=t=>t;function J(t,e){for(const n in e)t[n]=e[n];return t}function K(t){return t()}function _t(){return Object.create(null)}function Q(t){t.forEach(K)}function V(t){return typeof t=="function"}function ht(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let m;function H(t,e){return t===e?!0:(m||(m=document.createElement("a")),m.href=e,t===m.href)}function M(t){return t.split(",").map(e=>e.trim().split(" ").filter(Boolean))}function mt(t,e){const n=M(t.srcset),i=M(e||"");return i.length===n.length&&i.every(([s,c],r)=>c===n[r][1]&&(H(n[r][0],s)||H(s,n[r][0])))}function pt(t){return Object.keys(t).length===0}function j(t,...e){if(t==null){for(const i of e)i(void 0);return P}const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function yt(t){let e;return j(t,n=>e=n)(),e}function gt(t,e,n){t.$$.on_destroy.push(j(e,n))}function bt(t,e,n,i){if(t){const s=q(t,e,n,i);return t[0](s)}}function q(t,e,n,i){return t[1]&&i?J(n.ctx.slice(),t[1](i(e))):n.ctx}function xt(t,e,n,i){if(t[2]&&i){const s=t[2](i(n));if(e.dirty===void 0)return s;if(typeof s=="object"){const c=[],r=Math.max(e.dirty.length,s.length);for(let o=0;o<r;o+=1)c[o]=e.dirty[o]|s[o];return c}return e.dirty|s}return e.dirty}function wt(t,e,n,i,s,c){if(s){const r=q(e,n,i,c);t.p(r,s)}}function Et(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let i=0;i<n;i++)e[i]=-1;return e}return-1}function vt(t){return t??""}function Nt(t,e,n){return t.set(n),e}function Tt(t){return t&&V(t.destroy)?t.destroy:P}function At(t){const e=typeof t=="string"&&t.match(/^\s*(-?[\d.]+)([^\s]*)\s*$/);return e?[parseFloat(e[1]),e[2]||"px"]:[t,"px"]}let b=!1;function kt(){b=!0}function Ht(){b=!1}function X(t,e,n,i){for(;t<e;){const s=t+(e-t>>1);n(s)<=i?t=s+1:e=s}return t}function Y(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const l=[];for(let a=0;a<e.length;a++){const u=e[a];u.claim_order!==void 0&&l.push(u)}e=l}const n=new Int32Array(e.length+1),i=new Int32Array(e.length);n[0]=-1;let s=0;for(let l=0;l<e.length;l++){const a=e[l].claim_order,u=(s>0&&e[n[s]].claim_order<=a?s+1:X(1,s,G=>e[n[G]].claim_order,a))-1;i[l]=n[u]+1;const k=u+1;n[k]=l,s=Math.max(k,s)}const c=[],r=[];let o=e.length-1;for(let l=n[s]+1;l!=0;l=i[l-1]){for(c.push(e[l-1]);o>=l;o--)r.push(e[o]);o--}for(;o>=0;o--)r.push(e[o]);c.reverse(),r.sort((l,a)=>l.claim_order-a.claim_order);for(let l=0,a=0;l<r.length;l++){for(;a<c.length&&r[l].claim_order>=c[a].claim_order;)a++;const u=a<c.length?c[a]:null;t.insertBefore(r[l],u)}}function z(t,e){t.appendChild(e)}function Z(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function Mt(t){const e=x("style");return e.textContent="/* empty */",$(Z(t),e),e.sheet}function $(t,e){return z(t.head||t,e),e.sheet}function tt(t,e){if(b){for(Y(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function et(t,e,n){t.insertBefore(e,n||null)}function nt(t,e,n){b&&!n?tt(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function y(t){t.parentNode&&t.parentNode.removeChild(t)}function Ct(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function x(t){return document.createElement(t)}function B(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function T(t){return document.createTextNode(t)}function Dt(){return T(" ")}function Lt(){return T("")}function C(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}function St(t){return function(e){return e.preventDefault(),t.call(this,e)}}function Pt(t){return function(e){return e.stopPropagation(),t.call(this,e)}}function jt(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function qt(t){return t.dataset.svelteH}function zt(t){return Array.from(t.childNodes)}function R(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function W(t,e,n,i,s=!1){R(t);const c=(()=>{for(let r=t.claim_info.last_index;r<t.length;r++){const o=t[r];if(e(o)){const l=n(o);return l===void 0?t.splice(r,1):t[r]=l,s||(t.claim_info.last_index=r),o}}for(let r=t.claim_info.last_index-1;r>=0;r--){const o=t[r];if(e(o)){const l=n(o);return l===void 0?t.splice(r,1):t[r]=l,s?l===void 0&&t.claim_info.last_index--:t.claim_info.last_index=r,o}}return i()})();return c.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,c}function O(t,e,n,i){return W(t,s=>s.nodeName===e,s=>{const c=[];for(let r=0;r<s.attributes.length;r++){const o=s.attributes[r];n[o.name]||c.push(o.name)}c.forEach(r=>s.removeAttribute(r))},()=>i(e))}function Bt(t,e,n){return O(t,e,n,x)}function Rt(t,e,n){return O(t,e,n,B)}function it(t,e){return W(t,n=>n.nodeType===3,n=>{const i=""+e;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>T(e),!0)}function Wt(t){return it(t," ")}function D(t,e,n){for(let i=n;i<t.length;i+=1){const s=t[i];if(s.nodeType===8&&s.textContent.trim()===e)return i}return-1}function Ot(t,e){const n=D(t,"HTML_TAG_START",0),i=D(t,"HTML_TAG_END",n+1);if(n===-1||i===-1)return new w(e);R(t);const s=t.splice(n,i-n+1);y(s[0]),y(s[s.length-1]);const c=s.slice(1,s.length-1);if(c.length===0)return new w(e);for(const r of c)r.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1;return new w(e,c)}function Ft(t,e){e=""+e,t.data!==e&&(t.data=e)}function Gt(t,e){t.value=e??""}function It(t,e,n,i){n==null?t.style.removeProperty(e):t.style.setProperty(e,n,"")}let p;function st(){if(p===void 0){p=!1;try{typeof window<"u"&&window.parent&&window.parent.document}catch{p=!0}}return p}function Ut(t,e){getComputedStyle(t).position==="static"&&(t.style.position="relative");const i=x("iframe");i.setAttribute("style","display: block; position: absolute; top: 0; left: 0; width: 100%; height: 100%; overflow: hidden; border: 0; opacity: 0; pointer-events: none; z-index: -1;"),i.setAttribute("aria-hidden","true"),i.tabIndex=-1;const s=st();let c;return s?(i.src="data:text/html,<script>onresize=function(){parent.postMessage(0,'*')}<\/script>",c=C(window,"message",r=>{r.source===i.contentWindow&&e()})):(i.src="about:blank",i.onload=()=>{c=C(i.contentWindow,"resize",e),e()}),z(t,i),()=>{(s||c&&i.contentWindow)&&c(),y(i)}}function Jt(t,e,n){t.classList.toggle(e,!!n)}function rt(t,e,{bubbles:n=!1,cancelable:i=!1}={}){return new CustomEvent(t,{detail:e,bubbles:n,cancelable:i})}function Kt(t,e){const n=[];let i=0;for(const s of e.childNodes)if(s.nodeType===8){const c=s.textContent.trim();c===`HEAD_${t}_END`?(i-=1,n.push(s)):c===`HEAD_${t}_START`&&(i+=1,n.push(s))}else i>0&&n.push(s);return n}class ct{constructor(e=!1){f(this,"is_svg",!1);f(this,"e");f(this,"n");f(this,"t");f(this,"a");this.is_svg=e,this.e=this.n=null}c(e){this.h(e)}m(e,n,i=null){this.e||(this.is_svg?this.e=B(n.nodeName):this.e=x(n.nodeType===11?"TEMPLATE":n.nodeName),this.t=n.tagName!=="TEMPLATE"?n:n.content,this.c(e)),this.i(i)}h(e){this.e.innerHTML=e,this.n=Array.from(this.e.nodeName==="TEMPLATE"?this.e.content.childNodes:this.e.childNodes)}i(e){for(let n=0;n<this.n.length;n+=1)et(this.t,this.n[n],e)}p(e){this.d(),this.h(e),this.i(this.a)}d(){this.n.forEach(y)}}class w extends ct{constructor(n=!1,i){super(n);f(this,"l");this.e=this.n=null,this.l=i}c(n){this.l?this.n=this.l:super.c(n)}i(n){for(let i=0;i<this.n.length;i+=1)nt(this.t,this.n[i],n)}}function Qt(t,e){return new t(e)}let g;function E(t){g=t}function A(){if(!g)throw new Error("Function called outside component initialization");return g}function Vt(t){A().$$.on_mount.push(t)}function Xt(t){A().$$.after_update.push(t)}function Yt(){const t=A();return(e,n,{cancelable:i=!1}={})=>{const s=t.$$.callbacks[e];if(s){const c=rt(e,n,{cancelable:i});return s.slice().forEach(r=>{r.call(t,c)}),!c.defaultPrevented}return!0}}function Zt(t,e){const n=t.$$.callbacks[e.type];n&&n.slice().forEach(i=>i.call(this,e))}const h=[],L=[];let _=[];const S=[],F=Promise.resolve();let N=!1;function lt(){N||(N=!0,F.then(at))}function $t(){return lt(),F}function ot(t){_.push(t)}const v=new Set;let d=0;function at(){if(d!==0)return;const t=g;do{try{for(;d<h.length;){const e=h[d];d++,E(e),ut(e.$$)}}catch(e){throw h.length=0,d=0,e}for(E(null),h.length=0,d=0;L.length;)L.pop()();for(let e=0;e<_.length;e+=1){const n=_[e];v.has(n)||(v.add(n),n())}_.length=0}while(h.length);for(;S.length;)S.pop()();N=!1,v.clear(),E(t)}function ut(t){if(t.fragment!==null){t.update(),Q(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(ot)}}function te(t){const e=[],n=[];_.forEach(i=>t.indexOf(i)===-1?e.push(i):n.push(i)),n.forEach(i=>i()),_=e}export{J as $,H as A,Ft as B,gt as C,yt as D,Lt as E,Xt as F,Vt as G,w as H,Qt as I,$t as J,Z as K,Mt as L,V as M,rt as N,dt as O,_t as P,at as Q,pt as R,te as S,g as T,E as U,K as V,h as W,lt as X,kt as Y,Ht as Z,Ct as _,jt as a,Tt as a0,Gt as a1,St as a2,Zt as a3,Ut as a4,Pt as a5,mt as a6,Yt as a7,Nt as a8,B as a9,Rt as aa,At as ab,vt as ac,Dt as b,Bt as c,y as d,x as e,zt as f,qt as g,Wt as h,nt as i,It as j,tt as k,Ot as l,it as m,P as n,bt as o,C as p,Et as q,xt as r,ht as s,T as t,wt as u,Q as v,ot as w,Jt as x,L as y,Kt as z};
