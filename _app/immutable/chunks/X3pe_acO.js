var bn=Array.isArray,Wt=Array.prototype.indexOf,Cn=Array.from,Fn=Object.defineProperty,vt=Object.getOwnPropertyDescriptor,zt=Object.getOwnPropertyDescriptors,qn=Object.prototype,Ln=Array.prototype,Jt=Object.getPrototypeOf;const Yn=()=>{};function Mn(t){return t()}function Qt(t){for(var n=0;n<t.length;n++)t[n]()}const w=2,Et=4,Q=8,ot=16,R=32,j=64,G=128,m=256,K=512,p=1024,k=2048,q=4096,F=8192,X=16384,Xt=32768,gt=65536,jn=1<<17,tn=1<<19,mt=1<<20,pt=Symbol("$state"),Un=Symbol("legacy props");function Tt(t){return t===this.v}function nn(t,n){return t!=t?n==n:t!==n||t!==null&&typeof t=="object"||typeof t=="function"}function At(t){return!nn(t,this.v)}function rn(t){throw new Error("https://svelte.dev/e/effect_in_teardown")}function en(){throw new Error("https://svelte.dev/e/effect_in_unowned_derived")}function ln(t){throw new Error("https://svelte.dev/e/effect_orphan")}function sn(){throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")}function Hn(){throw new Error("https://svelte.dev/e/hydration_failed")}function Bn(t){throw new Error("https://svelte.dev/e/props_invalid_value")}function Vn(){throw new Error("https://svelte.dev/e/state_descriptors_fixed")}function Gn(){throw new Error("https://svelte.dev/e/state_prototype_fixed")}function an(){throw new Error("https://svelte.dev/e/state_unsafe_local_read")}function un(){throw new Error("https://svelte.dev/e/state_unsafe_mutation")}let tt=!1;function Kn(){tt=!0}const $n=1,Zn=2,Wn=4,zn=8,Jn=16,Qn=1,Xn=2,on="[",fn="[!",_n="]",xt={},tr=Symbol();function Rt(t){console.warn("https://svelte.dev/e/hydration_mismatch")}let i=null;function ht(t){i=t}function nr(t,n=!1,r){i={p:i,c:null,e:null,m:!1,s:t,x:null,l:null},tt&&!n&&(i.l={s:null,u:null,r1:[],r2:ft(!1)})}function rr(t){const n=i;if(n!==null){const a=n.e;if(a!==null){var r=f,e=u;n.e=null;try{for(var l=0;l<a.length;l++){var s=a[l];W(s.effect),Z(s.reaction),bt(s.fn)}}finally{W(r),Z(e)}}i=n.p,n.m=!0}return{}}function nt(){return!tt||i!==null&&i.l===null}function ft(t,n){var r={f:0,v:t,reactions:null,equals:Tt,rv:0,wv:0};return r}function er(t){return cn(ft(t))}function lr(t,n=!1){var e;const r=ft(t);return n||(r.equals=At),tt&&i!==null&&i.l!==null&&((e=i.l).s??(e.s=[])).push(r),r}function cn(t){return u!==null&&!A&&u.f&w&&(g===null?xn([t]):g.push(t)),t}function sr(t,n){return u!==null&&!A&&nt()&&u.f&(w|ot)&&(g===null||!g.includes(t))&&un(),vn(t,n)}function vn(t,n){return t.equals(n)||(t.v,t.v=n,t.wv=Ht(),kt(t,k),nt()&&f!==null&&f.f&p&&!(f.f&(R|j))&&(T===null?Rn([t]):T.push(t))),n}function kt(t,n){var r=t.reactions;if(r!==null)for(var e=nt(),l=r.length,s=0;s<l;s++){var a=r[s],_=a.f;_&k||!e&&a===f||(x(a,n),_&(p|m)&&(_&w?kt(a,q):et(a)))}}let O=!1;function ar(t){O=t}let E;function L(t){if(t===null)throw Rt(),xt;return E=t}function ur(){return L(N(E))}function or(t){if(O){if(N(E)!==null)throw Rt(),xt;E=t}}function fr(t=1){if(O){for(var n=t,r=E;n--;)r=N(r);E=r}}function ir(){for(var t=0,n=E;;){if(n.nodeType===8){var r=n.data;if(r===_n){if(t===0)return n;t-=1}else(r===on||r===fn)&&(t+=1)}var e=N(n);n.remove(),n=e}}var dt,Dt,St;function _r(){if(dt===void 0){dt=window;var t=Element.prototype,n=Node.prototype;Dt=vt(n,"firstChild").get,St=vt(n,"nextSibling").get,t.__click=void 0,t.__className="",t.__attributes=null,t.__styles=null,t.__e=void 0,Text.prototype.__t=void 0}}function lt(t=""){return document.createTextNode(t)}function st(t){return Dt.call(t)}function N(t){return St.call(t)}function cr(t,n){if(!O)return st(t);var r=st(E);if(r===null)r=E.appendChild(lt());else if(n&&r.nodeType!==3){var e=lt();return r==null||r.before(e),L(e),e}return L(r),r}function vr(t,n){if(!O){var r=st(t);return r instanceof Comment&&r.data===""?N(r):r}return E}function pr(t,n=1,r=!1){let e=O?E:t;for(var l;n--;)l=e,e=N(e);if(!O)return e;var s=e==null?void 0:e.nodeType;if(r&&s!==3){var a=lt();return e===null?l==null||l.after(a):e.before(a),L(a),a}return L(e),e}function hr(t){t.textContent=""}function Ot(t){var n=w|k,r=u!==null&&u.f&w?u:null;return f===null||r!==null&&r.f&m?n|=m:f.f|=mt,{ctx:i,deps:null,effects:null,equals:Tt,f:n,fn:t,reactions:null,rv:0,v:null,wv:0,parent:r??f}}function dr(t){const n=Ot(t);return n.equals=At,n}function It(t){var n=t.effects;if(n!==null){t.effects=null;for(var r=0;r<n.length;r+=1)I(n[r])}}function pn(t){for(var n=t.parent;n!==null;){if(!(n.f&w))return n;n=n.parent}return null}function hn(t){var n,r=f;W(pn(t));try{It(t),n=Vt(t)}finally{W(r)}return n}function Nt(t){var n=hn(t),r=(S||t.f&m)&&t.deps!==null?q:p;x(t,r),t.equals(n)||(t.v=n,t.wv=Ht())}function Pt(t){f===null&&u===null&&ln(),u!==null&&u.f&m&&f===null&&en(),it&&rn()}function dn(t,n){var r=n.last;r===null?n.last=n.first=t:(r.next=t,t.prev=r,n.last=t)}function U(t,n,r,e=!0){var l=(t&j)!==0,s=f,a={ctx:i,deps:null,nodes_start:null,nodes_end:null,f:t|k,first:null,fn:n,last:null,next:null,parent:l?null:s,prev:null,teardown:null,transitions:null,wv:0};if(r){var _=b;try{yt(!0),_t(a),a.f|=Xt}catch(P){throw I(a),P}finally{yt(_)}}else n!==null&&et(a);var y=r&&a.deps===null&&a.first===null&&a.nodes_start===null&&a.teardown===null&&(a.f&(mt|G))===0;if(!y&&!l&&e&&(s!==null&&dn(a,s),u!==null&&u.f&w)){var c=u;(c.effects??(c.effects=[])).push(a)}return a}function yr(t){Pt();var n=f!==null&&(f.f&R)!==0&&i!==null&&!i.m;if(n){var r=i;(r.e??(r.e=[])).push({fn:t,effect:f,reaction:u})}else{var e=bt(t);return e}}function wr(t){return Pt(),yn(t)}function Er(t){const n=U(j,t,!0);return(r={})=>new Promise(e=>{r.outro?gn(n,()=>{I(n),e(void 0)}):(I(n),e(void 0))})}function bt(t){return U(Et,t,!1)}function yn(t){return U(Q,t,!0)}function gr(t,n=[],r=Ot){const e=n.map(r);return wn(()=>t(...e.map(Nn)))}function wn(t,n=0){return U(Q|ot|n,t,!0)}function mr(t,n=!0){return U(Q|R,t,!0,n)}function Ct(t){var n=t.teardown;if(n!==null){const r=it,e=u;wt(!0),Z(null);try{n.call(null)}finally{wt(r),Z(e)}}}function Ft(t,n=!1){var r=t.first;for(t.first=t.last=null;r!==null;){var e=r.next;I(r,n),r=e}}function En(t){for(var n=t.first;n!==null;){var r=n.next;n.f&R||I(n),n=r}}function I(t,n=!0){var r=!1;if((n||t.f&tn)&&t.nodes_start!==null){for(var e=t.nodes_start,l=t.nodes_end;e!==null;){var s=e===l?null:N(e);e.remove(),e=s}r=!0}Ft(t,n&&!r),J(t,0),x(t,X);var a=t.transitions;if(a!==null)for(const y of a)y.stop();Ct(t);var _=t.parent;_!==null&&_.first!==null&&qt(t),t.next=t.prev=t.teardown=t.ctx=t.deps=t.fn=t.nodes_start=t.nodes_end=null}function qt(t){var n=t.parent,r=t.prev,e=t.next;r!==null&&(r.next=e),e!==null&&(e.prev=r),n!==null&&(n.first===t&&(n.first=e),n.last===t&&(n.last=r))}function gn(t,n){var r=[];Lt(t,r,!0),mn(r,()=>{I(t),n&&n()})}function mn(t,n){var r=t.length;if(r>0){var e=()=>--r||n();for(var l of t)l.out(e)}else n()}function Lt(t,n,r){if(!(t.f&F)){if(t.f^=F,t.transitions!==null)for(const a of t.transitions)(a.is_global||r)&&n.push(a);for(var e=t.first;e!==null;){var l=e.next,s=(e.f&gt)!==0||(e.f&R)!==0;Lt(e,n,s?r:!1),e=l}}}function Tr(t){Yt(t,!0)}function Yt(t,n){if(t.f&F){t.f^=F,t.f&p||(t.f^=p),H(t)&&(x(t,k),et(t));for(var r=t.first;r!==null;){var e=r.next,l=(r.f&gt)!==0||(r.f&R)!==0;Yt(r,l?n:!1),r=e}if(t.transitions!==null)for(const s of t.transitions)(s.is_global||n)&&s.in()}}let $=!1,at=[];function Mt(){$=!1;const t=at.slice();at=[],Qt(t)}function Ar(t){$||($=!0,queueMicrotask(Mt)),at.push(t)}function Tn(){$&&Mt()}const jt=0,An=1;let B=!1,V=jt,Y=!1,M=null,b=!1,it=!1;function yt(t){b=t}function wt(t){it=t}let D=[],C=0;let u=null,A=!1;function Z(t){u=t}let f=null;function W(t){f=t}let g=null;function xn(t){g=t}let v=null,d=0,T=null;function Rn(t){T=t}let Ut=1,z=0,S=!1;function Ht(){return++Ut}function H(t){var c;var n=t.f;if(n&k)return!0;if(n&q){var r=t.deps,e=(n&m)!==0;if(r!==null){var l,s,a=(n&K)!==0,_=e&&f!==null&&!S,y=r.length;if(a||_){for(l=0;l<y;l++)s=r[l],(a||!((c=s==null?void 0:s.reactions)!=null&&c.includes(t)))&&(s.reactions??(s.reactions=[])).push(t);a&&(t.f^=K)}for(l=0;l<y;l++)if(s=r[l],H(s)&&Nt(s),s.wv>t.wv)return!0}(!e||f!==null&&!S)&&x(t,p)}return!1}function kn(t,n){for(var r=n;r!==null;){if(r.f&G)try{r.fn(t);return}catch{r.f^=G}r=r.parent}throw B=!1,t}function Dn(t){return(t.f&X)===0&&(t.parent===null||(t.parent.f&G)===0)}function rt(t,n,r,e){if(B){if(r===null&&(B=!1),Dn(n))throw t;return}r!==null&&(B=!0);{kn(t,n);return}}function Bt(t,n,r=0){var e=t.reactions;if(e!==null)for(var l=0;l<e.length;l++){var s=e[l];s.f&w?Bt(s,n,r+1):n===s&&(r===0?x(s,k):s.f&p&&x(s,q),et(s))}}function Vt(t){var ct;var n=v,r=d,e=T,l=u,s=S,a=g,_=i,y=A,c=t.f;v=null,d=0,T=null,u=c&(R|j)?null:t,S=(c&m)!==0&&(!b||(l===null||y)&&t.parent!==null),g=null,ht(t.ctx),A=!1,z++;try{var P=(0,t.fn)(),h=t.deps;if(v!==null){var o;if(J(t,d),h!==null&&d>0)for(h.length=d+v.length,o=0;o<v.length;o++)h[d+o]=v[o];else t.deps=h=v;if(!S)for(o=d;o<h.length;o++)((ct=h[o]).reactions??(ct.reactions=[])).push(t)}else h!==null&&d<h.length&&(J(t,d),h.length=d);if(nt()&&T!==null&&!(t.f&(w|q|k)))for(o=0;o<T.length;o++)Bt(T[o],t);return l!==null&&z++,P}finally{v=n,d=r,T=e,u=l,S=s,g=a,ht(_),A=y}}function Sn(t,n){let r=n.reactions;if(r!==null){var e=Wt.call(r,t);if(e!==-1){var l=r.length-1;l===0?r=n.reactions=null:(r[e]=r[l],r.pop())}}r===null&&n.f&w&&(v===null||!v.includes(n))&&(x(n,q),n.f&(m|K)||(n.f^=K),It(n),J(n,0))}function J(t,n){var r=t.deps;if(r!==null)for(var e=n;e<r.length;e++)Sn(t,r[e])}function _t(t){var n=t.f;if(!(n&X)){x(t,p);var r=f,e=i;f=t;try{n&ot?En(t):Ft(t),Ct(t);var l=Vt(t);t.teardown=typeof l=="function"?l:null,t.wv=Ut;var s=t.deps,a}catch(_){rt(_,t,r,e||t.ctx)}finally{f=r}}}function Gt(){if(C>1e3){C=0;try{sn()}catch(t){if(M!==null)rt(t,M,null);else throw t}}C++}function Kt(t){var n=t.length;if(n!==0){Gt();var r=b;b=!0;try{for(var e=0;e<n;e++){var l=t[e];l.f&p||(l.f^=p);var s=[];$t(l,s),On(s)}}finally{b=r}}}function On(t){var n=t.length;if(n!==0)for(var r=0;r<n;r++){var e=t[r];if(!(e.f&(X|F)))try{H(e)&&(_t(e),e.deps===null&&e.first===null&&e.nodes_start===null&&(e.teardown===null?qt(e):e.fn=null))}catch(l){rt(l,e,null,e.ctx)}}}function In(){if(Y=!1,C>1001)return;const t=D;D=[],Kt(t),Y||(C=0,M=null)}function et(t){V===jt&&(Y||(Y=!0,queueMicrotask(In))),M=t;for(var n=t;n.parent!==null;){n=n.parent;var r=n.f;if(r&(j|R)){if(!(r&p))return;n.f^=p}}D.push(n)}function $t(t,n){var r=t.first,e=[];t:for(;r!==null;){var l=r.f,s=(l&R)!==0,a=s&&(l&p)!==0,_=r.next;if(!a&&!(l&F))if(l&Q){if(s)r.f^=p;else{var y=u;try{u=r,H(r)&&_t(r)}catch(o){rt(o,r,null,r.ctx)}finally{u=y}}var c=r.first;if(c!==null){r=c;continue}}else l&Et&&e.push(r);if(_===null){let o=r.parent;for(;o!==null;){if(t===o)break t;var P=o.next;if(P!==null){r=P;continue t}o=o.parent}}r=_}for(var h=0;h<e.length;h++)c=e[h],n.push(c),$t(c,n)}function Zt(t){var n=V,r=D;try{Gt();const l=[];V=An,D=l,Y=!1,Kt(r);var e=t==null?void 0:t();return Tn(),(D.length>0||l.length>0)&&Zt(),C=0,M=null,e}finally{V=n,D=r}}async function xr(){await Promise.resolve(),Zt()}function Nn(t){var n=t.f,r=(n&w)!==0;if(u!==null&&!A){g!==null&&g.includes(t)&&an();var e=u.deps;t.rv<z&&(t.rv=z,v===null&&e!==null&&e[d]===t?d++:v===null?v=[t]:v.push(t))}else if(r&&t.deps===null&&t.effects===null){var l=t,s=l.parent;s!==null&&!(s.f&m)&&(l.f^=m)}return r&&(l=t,H(l)&&Nt(l)),t.v}function Rr(t){var n=A;try{return A=!0,t()}finally{A=n}}const Pn=-7169;function x(t,n){t.f=t.f&Pn|n}function kr(t){if(!(typeof t!="object"||!t||t instanceof EventTarget)){if(pt in t)ut(t);else if(!Array.isArray(t))for(let n in t){const r=t[n];typeof r=="object"&&r&&pt in r&&ut(r)}}}function ut(t,n=new Set){if(typeof t=="object"&&t!==null&&!(t instanceof EventTarget)&&!n.has(t)){n.add(t),t instanceof Date&&t.getTime();for(let e in t)try{ut(t[e],n)}catch{}const r=Jt(t);if(r!==Object.prototype&&r!==Array.prototype&&r!==Map.prototype&&r!==Set.prototype&&r!==Date.prototype){const e=zt(r);for(let l in e){const s=e[l].get;if(s)try{s.call(t)}catch{}}}}}export{sr as $,or as A,pr as B,Fn as C,Z as D,W as E,bn as F,u as G,tn as H,f as I,_r as J,xt as K,ur as L,_n as M,Rt as N,Hn as O,hr as P,Cn as Q,Er as R,mr as S,Qn as T,Xn as U,pt as V,qn as W,Ln as X,ft as Y,Gn as Z,tr as _,yr as a,vt as a0,Vn as a1,Jt as a2,gt as a3,fn as a4,ir as a5,Tr as a6,gn as a7,bt as a8,yn as a9,Ar as aa,Bn as ab,jn as ac,Wn as ad,At as ae,lr as af,zn as ag,Un as ah,Zn as ai,R as aj,j as ak,$n as al,Jn as am,dr as an,Zt as ao,er as ap,xr as aq,Yn as ar,nn as as,Rr as b,i as c,Mn as d,kr as e,Ot as f,Nn as g,lt as h,wn as i,O as j,on as k,N as l,L as m,E as n,st as o,fr as p,Kn as q,Qt as r,ar as s,tt as t,wr as u,nr as v,vr as w,gr as x,rr as y,cr as z};
