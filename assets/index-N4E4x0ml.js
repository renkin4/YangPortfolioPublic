var Vp=(t,e)=>()=>(e||t((e={exports:{}}).exports,e),e.exports);var Bb=Vp((kb,Pc)=>{(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();/**
* @vue/shared v3.5.12
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function Dc(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const bt={},jr=[],Xn=()=>{},Wp=()=>!1,so=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),Lc=t=>t.startsWith("onUpdate:"),Ot=Object.assign,Ic=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},Xp=Object.prototype.hasOwnProperty,_t=(t,e)=>Xp.call(t,e),it=Array.isArray,Cs=t=>ao(t)==="[object Map]",qp=t=>ao(t)==="[object Set]",at=t=>typeof t=="function",Ft=t=>typeof t=="string",cs=t=>typeof t=="symbol",Dt=t=>t!==null&&typeof t=="object",Mh=t=>(Dt(t)||at(t))&&at(t.then)&&at(t.catch),Yp=Object.prototype.toString,ao=t=>Yp.call(t),jp=t=>ao(t).slice(8,-1),$p=t=>ao(t)==="[object Object]",Uc=t=>Ft(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Ps=Dc(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),oo=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},Kp=/-(\w)/g,bn=oo(t=>t.replace(Kp,(e,n)=>n?n.toUpperCase():"")),Zp=/\B([A-Z])/g,wr=oo(t=>t.replace(Zp,"-$1").toLowerCase()),lo=oo(t=>t.charAt(0).toUpperCase()+t.slice(1)),Ao=oo(t=>t?`on${lo(t)}`:""),zi=(t,e)=>!Object.is(t,e),Ro=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},Th=(t,e,n,i=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:i,value:n})},Jp=t=>{const e=parseFloat(t);return isNaN(e)?t:e},Qp=t=>{const e=Ft(t)?Number(t):NaN;return isNaN(e)?t:e};let vf;const co=()=>vf||(vf=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Nc(t){if(it(t)){const e={};for(let n=0;n<t.length;n++){const i=t[n],r=Ft(i)?im(i):Nc(i);if(r)for(const s in r)e[s]=r[s]}return e}else if(Ft(t)||Dt(t))return t}const em=/;(?![^(]*\))/g,tm=/:([^]+)/,nm=/\/\*[^]*?\*\//g;function im(t){const e={};return t.replace(nm,"").split(em).forEach(n=>{if(n){const i=n.split(tm);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function Oc(t){let e="";if(Ft(t))e=t;else if(it(t))for(let n=0;n<t.length;n++){const i=Oc(t[n]);i&&(e+=i+" ")}else if(Dt(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const rm="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",sm=Dc(rm);function Eh(t){return!!t||t===""}/**
* @vue/reactivity v3.5.12
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let gn;class am{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=gn,!e&&gn&&(this.index=(gn.scopes||(gn.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].pause();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].resume();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].resume()}}run(e){if(this._active){const n=gn;try{return gn=this,e()}finally{gn=n}}}on(){gn=this}off(){gn=this.parent}stop(e){if(this._active){let n,i;for(n=0,i=this.effects.length;n<i;n++)this.effects[n].stop();for(n=0,i=this.cleanups.length;n<i;n++)this.cleanups[n]();if(this.scopes)for(n=0,i=this.scopes.length;n<i;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0,this._active=!1}}}function om(){return gn}let Et;const Co=new WeakSet;class bh{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,gn&&gn.active&&gn.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Co.has(this)&&(Co.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Ah(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,xf(this),Rh(this);const e=Et,n=Nn;Et=this,Nn=!0;try{return this.fn()}finally{Ch(this),Et=e,Nn=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)zc(e);this.deps=this.depsTail=void 0,xf(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Co.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Ml(this)&&this.run()}get dirty(){return Ml(this)}}let wh=0,Ds,Ls;function Ah(t,e=!1){if(t.flags|=8,e){t.next=Ls,Ls=t;return}t.next=Ds,Ds=t}function Fc(){wh++}function Bc(){if(--wh>0)return;if(Ls){let e=Ls;for(Ls=void 0;e;){const n=e.next;e.next=void 0,e.flags&=-9,e=n}}let t;for(;Ds;){let e=Ds;for(Ds=void 0;e;){const n=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(i){t||(t=i)}e=n}}if(t)throw t}function Rh(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function Ch(t){let e,n=t.depsTail,i=n;for(;i;){const r=i.prevDep;i.version===-1?(i===n&&(n=r),zc(i),lm(i)):e=i,i.dep.activeLink=i.prevActiveLink,i.prevActiveLink=void 0,i=r}t.deps=e,t.depsTail=n}function Ml(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(Ph(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function Ph(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===zs))return;t.globalVersion=zs;const e=t.dep;if(t.flags|=2,e.version>0&&!t.isSSR&&t.deps&&!Ml(t)){t.flags&=-3;return}const n=Et,i=Nn;Et=t,Nn=!0;try{Rh(t);const r=t.fn(t._value);(e.version===0||zi(r,t._value))&&(t._value=r,e.version++)}catch(r){throw e.version++,r}finally{Et=n,Nn=i,Ch(t),t.flags&=-3}}function zc(t,e=!1){const{dep:n,prevSub:i,nextSub:r}=t;if(i&&(i.nextSub=r,t.prevSub=void 0),r&&(r.prevSub=i,t.nextSub=void 0),n.subs===t&&(n.subs=i,!i&&n.computed)){n.computed.flags&=-5;for(let s=n.computed.deps;s;s=s.nextDep)zc(s,!0)}!e&&!--n.sc&&n.map&&n.map.delete(n.key)}function lm(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let Nn=!0;const Dh=[];function qi(){Dh.push(Nn),Nn=!1}function Yi(){const t=Dh.pop();Nn=t===void 0?!0:t}function xf(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=Et;Et=void 0;try{e()}finally{Et=n}}}let zs=0;class cm{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class kc{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0}track(e){if(!Et||!Nn||Et===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==Et)n=this.activeLink=new cm(Et,this),Et.deps?(n.prevDep=Et.depsTail,Et.depsTail.nextDep=n,Et.depsTail=n):Et.deps=Et.depsTail=n,Lh(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const i=n.nextDep;i.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=i),n.prevDep=Et.depsTail,n.nextDep=void 0,Et.depsTail.nextDep=n,Et.depsTail=n,Et.deps===n&&(Et.deps=i)}return n}trigger(e){this.version++,zs++,this.notify(e)}notify(e){Fc();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{Bc()}}}function Lh(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let i=e.deps;i;i=i.nextDep)Lh(i)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const Tl=new WeakMap,xr=Symbol(""),El=Symbol(""),ks=Symbol("");function Qt(t,e,n){if(Nn&&Et){let i=Tl.get(t);i||Tl.set(t,i=new Map);let r=i.get(n);r||(i.set(n,r=new kc),r.map=i,r.key=n),r.track()}}function li(t,e,n,i,r,s){const o=Tl.get(t);if(!o){zs++;return}const a=l=>{l&&l.trigger()};if(Fc(),e==="clear")o.forEach(a);else{const l=it(t),f=l&&Uc(n);if(l&&n==="length"){const h=Number(i);o.forEach((d,c)=>{(c==="length"||c===ks||!cs(c)&&c>=h)&&a(d)})}else switch((n!==void 0||o.has(void 0))&&a(o.get(n)),f&&a(o.get(ks)),e){case"add":l?f&&a(o.get("length")):(a(o.get(xr)),Cs(t)&&a(o.get(El)));break;case"delete":l||(a(o.get(xr)),Cs(t)&&a(o.get(El)));break;case"set":Cs(t)&&a(o.get(xr));break}}Bc()}function Rr(t){const e=mt(t);return e===t?e:(Qt(e,"iterate",ks),On(t)?e:e.map(sn))}function Hc(t){return Qt(t=mt(t),"iterate",ks),t}const fm={__proto__:null,[Symbol.iterator](){return Po(this,Symbol.iterator,sn)},concat(...t){return Rr(this).concat(...t.map(e=>it(e)?Rr(e):e))},entries(){return Po(this,"entries",t=>(t[1]=sn(t[1]),t))},every(t,e){return Qn(this,"every",t,e,void 0,arguments)},filter(t,e){return Qn(this,"filter",t,e,n=>n.map(sn),arguments)},find(t,e){return Qn(this,"find",t,e,sn,arguments)},findIndex(t,e){return Qn(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return Qn(this,"findLast",t,e,sn,arguments)},findLastIndex(t,e){return Qn(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return Qn(this,"forEach",t,e,void 0,arguments)},includes(...t){return Do(this,"includes",t)},indexOf(...t){return Do(this,"indexOf",t)},join(t){return Rr(this).join(t)},lastIndexOf(...t){return Do(this,"lastIndexOf",t)},map(t,e){return Qn(this,"map",t,e,void 0,arguments)},pop(){return gs(this,"pop")},push(...t){return gs(this,"push",t)},reduce(t,...e){return yf(this,"reduce",t,e)},reduceRight(t,...e){return yf(this,"reduceRight",t,e)},shift(){return gs(this,"shift")},some(t,e){return Qn(this,"some",t,e,void 0,arguments)},splice(...t){return gs(this,"splice",t)},toReversed(){return Rr(this).toReversed()},toSorted(t){return Rr(this).toSorted(t)},toSpliced(...t){return Rr(this).toSpliced(...t)},unshift(...t){return gs(this,"unshift",t)},values(){return Po(this,"values",sn)}};function Po(t,e,n){const i=Hc(t),r=i[e]();return i!==t&&!On(t)&&(r._next=r.next,r.next=()=>{const s=r._next();return s.value&&(s.value=n(s.value)),s}),r}const um=Array.prototype;function Qn(t,e,n,i,r,s){const o=Hc(t),a=o!==t&&!On(t),l=o[e];if(l!==um[e]){const d=l.apply(t,s);return a?sn(d):d}let f=n;o!==t&&(a?f=function(d,c){return n.call(this,sn(d),c,t)}:n.length>2&&(f=function(d,c){return n.call(this,d,c,t)}));const h=l.call(o,f,i);return a&&r?r(h):h}function yf(t,e,n,i){const r=Hc(t);let s=n;return r!==t&&(On(t)?n.length>3&&(s=function(o,a,l){return n.call(this,o,a,l,t)}):s=function(o,a,l){return n.call(this,o,sn(a),l,t)}),r[e](s,...i)}function Do(t,e,n){const i=mt(t);Qt(i,"iterate",ks);const r=i[e](...n);return(r===-1||r===!1)&&Wc(n[0])?(n[0]=mt(n[0]),i[e](...n)):r}function gs(t,e,n=[]){qi(),Fc();const i=mt(t)[e].apply(t,n);return Bc(),Yi(),i}const hm=Dc("__proto__,__v_isRef,__isVue"),Ih=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(cs));function dm(t){cs(t)||(t=String(t));const e=mt(this);return Qt(e,"has",t),e.hasOwnProperty(t)}class Uh{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,i){const r=this._isReadonly,s=this._isShallow;if(n==="__v_isReactive")return!r;if(n==="__v_isReadonly")return r;if(n==="__v_isShallow")return s;if(n==="__v_raw")return i===(r?s?Tm:Bh:s?Fh:Oh).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(i)?e:void 0;const o=it(e);if(!r){let l;if(o&&(l=fm[n]))return l;if(n==="hasOwnProperty")return dm}const a=Reflect.get(e,n,en(e)?e:i);return(cs(n)?Ih.has(n):hm(n))||(r||Qt(e,"get",n),s)?a:en(a)?o&&Uc(n)?a:a.value:Dt(a)?r?kh(a):fo(a):a}}class Nh extends Uh{constructor(e=!1){super(!1,e)}set(e,n,i,r){let s=e[n];if(!this._isShallow){const l=Tr(s);if(!On(i)&&!Tr(i)&&(s=mt(s),i=mt(i)),!it(e)&&en(s)&&!en(i))return l?!1:(s.value=i,!0)}const o=it(e)&&Uc(n)?Number(n)<e.length:_t(e,n),a=Reflect.set(e,n,i,en(e)?e:r);return e===mt(r)&&(o?zi(i,s)&&li(e,"set",n,i):li(e,"add",n,i)),a}deleteProperty(e,n){const i=_t(e,n);e[n];const r=Reflect.deleteProperty(e,n);return r&&i&&li(e,"delete",n,void 0),r}has(e,n){const i=Reflect.has(e,n);return(!cs(n)||!Ih.has(n))&&Qt(e,"has",n),i}ownKeys(e){return Qt(e,"iterate",it(e)?"length":xr),Reflect.ownKeys(e)}}class pm extends Uh{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const mm=new Nh,_m=new pm,gm=new Nh(!0),bl=t=>t,aa=t=>Reflect.getPrototypeOf(t);function vm(t,e,n){return function(...i){const r=this.__v_raw,s=mt(r),o=Cs(s),a=t==="entries"||t===Symbol.iterator&&o,l=t==="keys"&&o,f=r[t](...i),h=n?bl:e?wl:sn;return!e&&Qt(s,"iterate",l?El:xr),{next(){const{value:d,done:c}=f.next();return c?{value:d,done:c}:{value:a?[h(d[0]),h(d[1])]:h(d),done:c}},[Symbol.iterator](){return this}}}}function oa(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function xm(t,e){const n={get(r){const s=this.__v_raw,o=mt(s),a=mt(r);t||(zi(r,a)&&Qt(o,"get",r),Qt(o,"get",a));const{has:l}=aa(o),f=e?bl:t?wl:sn;if(l.call(o,r))return f(s.get(r));if(l.call(o,a))return f(s.get(a));s!==o&&s.get(r)},get size(){const r=this.__v_raw;return!t&&Qt(mt(r),"iterate",xr),Reflect.get(r,"size",r)},has(r){const s=this.__v_raw,o=mt(s),a=mt(r);return t||(zi(r,a)&&Qt(o,"has",r),Qt(o,"has",a)),r===a?s.has(r):s.has(r)||s.has(a)},forEach(r,s){const o=this,a=o.__v_raw,l=mt(a),f=e?bl:t?wl:sn;return!t&&Qt(l,"iterate",xr),a.forEach((h,d)=>r.call(s,f(h),f(d),o))}};return Ot(n,t?{add:oa("add"),set:oa("set"),delete:oa("delete"),clear:oa("clear")}:{add(r){!e&&!On(r)&&!Tr(r)&&(r=mt(r));const s=mt(this);return aa(s).has.call(s,r)||(s.add(r),li(s,"add",r,r)),this},set(r,s){!e&&!On(s)&&!Tr(s)&&(s=mt(s));const o=mt(this),{has:a,get:l}=aa(o);let f=a.call(o,r);f||(r=mt(r),f=a.call(o,r));const h=l.call(o,r);return o.set(r,s),f?zi(s,h)&&li(o,"set",r,s):li(o,"add",r,s),this},delete(r){const s=mt(this),{has:o,get:a}=aa(s);let l=o.call(s,r);l||(r=mt(r),l=o.call(s,r)),a&&a.call(s,r);const f=s.delete(r);return l&&li(s,"delete",r,void 0),f},clear(){const r=mt(this),s=r.size!==0,o=r.clear();return s&&li(r,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(r=>{n[r]=vm(r,t,e)}),n}function Gc(t,e){const n=xm(t,e);return(i,r,s)=>r==="__v_isReactive"?!t:r==="__v_isReadonly"?t:r==="__v_raw"?i:Reflect.get(_t(n,r)&&r in i?n:i,r,s)}const ym={get:Gc(!1,!1)},Sm={get:Gc(!1,!0)},Mm={get:Gc(!0,!1)},Oh=new WeakMap,Fh=new WeakMap,Bh=new WeakMap,Tm=new WeakMap;function Em(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function bm(t){return t.__v_skip||!Object.isExtensible(t)?0:Em(jp(t))}function fo(t){return Tr(t)?t:Vc(t,!1,mm,ym,Oh)}function zh(t){return Vc(t,!1,gm,Sm,Fh)}function kh(t){return Vc(t,!0,_m,Mm,Bh)}function Vc(t,e,n,i,r){if(!Dt(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const s=r.get(t);if(s)return s;const o=bm(t);if(o===0)return t;const a=new Proxy(t,o===2?i:n);return r.set(t,a),a}function Is(t){return Tr(t)?Is(t.__v_raw):!!(t&&t.__v_isReactive)}function Tr(t){return!!(t&&t.__v_isReadonly)}function On(t){return!!(t&&t.__v_isShallow)}function Wc(t){return t?!!t.__v_raw:!1}function mt(t){const e=t&&t.__v_raw;return e?mt(e):t}function wm(t){return!_t(t,"__v_skip")&&Object.isExtensible(t)&&Th(t,"__v_skip",!0),t}const sn=t=>Dt(t)?fo(t):t,wl=t=>Dt(t)?kh(t):t;function en(t){return t?t.__v_isRef===!0:!1}function Hh(t){return Gh(t,!1)}function Am(t){return Gh(t,!0)}function Gh(t,e){return en(t)?t:new Rm(t,e)}class Rm{constructor(e,n){this.dep=new kc,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:mt(e),this._value=n?e:sn(e),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(e){const n=this._rawValue,i=this.__v_isShallow||On(e)||Tr(e);e=i?e:mt(e),zi(e,n)&&(this._rawValue=e,this._value=i?e:sn(e),this.dep.trigger())}}function ki(t){return en(t)?t.value:t}const Cm={get:(t,e,n)=>e==="__v_raw"?t:ki(Reflect.get(t,e,n)),set:(t,e,n,i)=>{const r=t[e];return en(r)&&!en(n)?(r.value=n,!0):Reflect.set(t,e,n,i)}};function Vh(t){return Is(t)?t:new Proxy(t,Cm)}class Pm{constructor(e,n,i){this.fn=e,this.setter=n,this._value=void 0,this.dep=new kc(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=zs-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=i}notify(){if(this.flags|=16,!(this.flags&8)&&Et!==this)return Ah(this,!0),!0}get value(){const e=this.dep.track();return Ph(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function Dm(t,e,n=!1){let i,r;return at(t)?i=t:(i=t.get,r=t.set),new Pm(i,r,n)}const la={},ja=new WeakMap;let lr;function Lm(t,e=!1,n=lr){if(n){let i=ja.get(n);i||ja.set(n,i=[]),i.push(t)}}function Im(t,e,n=bt){const{immediate:i,deep:r,once:s,scheduler:o,augmentJob:a,call:l}=n,f=A=>r?A:On(A)||r===!1||r===0?Ni(A,1):Ni(A);let h,d,c,m,p=!1,y=!1;if(en(t)?(d=()=>t.value,p=On(t)):Is(t)?(d=()=>f(t),p=!0):it(t)?(y=!0,p=t.some(A=>Is(A)||On(A)),d=()=>t.map(A=>{if(en(A))return A.value;if(Is(A))return f(A);if(at(A))return l?l(A,2):A()})):at(t)?e?d=l?()=>l(t,2):t:d=()=>{if(c){qi();try{c()}finally{Yi()}}const A=lr;lr=h;try{return l?l(t,3,[m]):t(m)}finally{lr=A}}:d=Xn,e&&r){const A=d,G=r===!0?1/0:r;d=()=>Ni(A(),G)}const g=om(),u=()=>{h.stop(),g&&Ic(g.effects,h)};if(s&&e){const A=e;e=(...G)=>{A(...G),u()}}let w=y?new Array(t.length).fill(la):la;const T=A=>{if(!(!(h.flags&1)||!h.dirty&&!A))if(e){const G=h.run();if(r||p||(y?G.some((N,k)=>zi(N,w[k])):zi(G,w))){c&&c();const N=lr;lr=h;try{const k=[G,w===la?void 0:y&&w[0]===la?[]:w,m];l?l(e,3,k):e(...k),w=G}finally{lr=N}}}else h.run()};return a&&a(T),h=new bh(d),h.scheduler=o?()=>o(T,!1):T,m=A=>Lm(A,!1,h),c=h.onStop=()=>{const A=ja.get(h);if(A){if(l)l(A,4);else for(const G of A)G();ja.delete(h)}},e?i?T(!0):w=h.run():o?o(T.bind(null,!0),!0):h.run(),u.pause=h.pause.bind(h),u.resume=h.resume.bind(h),u.stop=u,u}function Ni(t,e=1/0,n){if(e<=0||!Dt(t)||t.__v_skip||(n=n||new Set,n.has(t)))return t;if(n.add(t),e--,en(t))Ni(t.value,e,n);else if(it(t))for(let i=0;i<t.length;i++)Ni(t[i],e,n);else if(qp(t)||Cs(t))t.forEach(i=>{Ni(i,e,n)});else if($p(t)){for(const i in t)Ni(t[i],e,n);for(const i of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,i)&&Ni(t[i],e,n)}return t}/**
* @vue/runtime-core v3.5.12
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Ks(t,e,n,i){try{return i?t(...i):t()}catch(r){uo(r,e,n)}}function Fn(t,e,n,i){if(at(t)){const r=Ks(t,e,n,i);return r&&Mh(r)&&r.catch(s=>{uo(s,e,n)}),r}if(it(t)){const r=[];for(let s=0;s<t.length;s++)r.push(Fn(t[s],e,n,i));return r}}function uo(t,e,n,i=!0){const r=e?e.vnode:null,{errorHandler:s,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||bt;if(e){let a=e.parent;const l=e.proxy,f=`https://vuejs.org/error-reference/#runtime-${n}`;for(;a;){const h=a.ec;if(h){for(let d=0;d<h.length;d++)if(h[d](t,l,f)===!1)return}a=a.parent}if(s){qi(),Ks(s,null,10,[t,l,f]),Yi();return}}Um(t,n,r,i,o)}function Um(t,e,n,i=!0,r=!1){if(r)throw t}const an=[];let kn=-1;const $r=[];let Pi=null,Vr=0;const Wh=Promise.resolve();let $a=null;function Xh(t){const e=$a||Wh;return t?e.then(this?t.bind(this):t):e}function Nm(t){let e=kn+1,n=an.length;for(;e<n;){const i=e+n>>>1,r=an[i],s=Hs(r);s<t||s===t&&r.flags&2?e=i+1:n=i}return e}function Xc(t){if(!(t.flags&1)){const e=Hs(t),n=an[an.length-1];!n||!(t.flags&2)&&e>=Hs(n)?an.push(t):an.splice(Nm(e),0,t),t.flags|=1,qh()}}function qh(){$a||($a=Wh.then(jh))}function Om(t){it(t)?$r.push(...t):Pi&&t.id===-1?Pi.splice(Vr+1,0,t):t.flags&1||($r.push(t),t.flags|=1),qh()}function Sf(t,e,n=kn+1){for(;n<an.length;n++){const i=an[n];if(i&&i.flags&2){if(t&&i.id!==t.uid)continue;an.splice(n,1),n--,i.flags&4&&(i.flags&=-2),i(),i.flags&4||(i.flags&=-2)}}}function Yh(t){if($r.length){const e=[...new Set($r)].sort((n,i)=>Hs(n)-Hs(i));if($r.length=0,Pi){Pi.push(...e);return}for(Pi=e,Vr=0;Vr<Pi.length;Vr++){const n=Pi[Vr];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}Pi=null,Vr=0}}const Hs=t=>t.id==null?t.flags&2?-1:1/0:t.id;function jh(t){try{for(kn=0;kn<an.length;kn++){const e=an[kn];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),Ks(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;kn<an.length;kn++){const e=an[kn];e&&(e.flags&=-2)}kn=-1,an.length=0,Yh(),$a=null,(an.length||$r.length)&&jh()}}let Mn=null,$h=null;function Ka(t){const e=Mn;return Mn=t,$h=t&&t.type.__scopeId||null,e}function hr(t,e=Mn,n){if(!e||t._n)return t;const i=(...r)=>{i._d&&Df(-1);const s=Ka(e);let o;try{o=t(...r)}finally{Ka(s),i._d&&Df(1)}return o};return i._n=!0,i._c=!0,i._d=!0,i}function Ji(t,e,n,i){const r=t.dirs,s=e&&e.dirs;for(let o=0;o<r.length;o++){const a=r[o];s&&(a.oldValue=s[o].value);let l=a.dir[i];l&&(qi(),Fn(l,n,8,[t.el,a,t,e]),Yi())}}const Fm=Symbol("_vte"),Kh=t=>t.__isTeleport,Di=Symbol("_leaveCb"),ca=Symbol("_enterCb");function Bm(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return mo(()=>{t.isMounted=!0}),sd(()=>{t.isUnmounting=!0}),t}const xn=[Function,Array],Zh={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:xn,onEnter:xn,onAfterEnter:xn,onEnterCancelled:xn,onBeforeLeave:xn,onLeave:xn,onAfterLeave:xn,onLeaveCancelled:xn,onBeforeAppear:xn,onAppear:xn,onAfterAppear:xn,onAppearCancelled:xn},Jh=t=>{const e=t.subTree;return e.component?Jh(e.component):e},zm={name:"BaseTransition",props:Zh,setup(t,{slots:e}){const n=B_(),i=Bm();return()=>{const r=e.default&&td(e.default(),!0);if(!r||!r.length)return;const s=Qh(r),o=mt(t),{mode:a}=o;if(i.isLeaving)return Lo(s);const l=Mf(s);if(!l)return Lo(s);let f=Al(l,o,i,n,c=>f=c);l.type!==fn&&Gs(l,f);const h=n.subTree,d=h&&Mf(h);if(d&&d.type!==fn&&!dr(l,d)&&Jh(n).type!==fn){const c=Al(d,o,i,n);if(Gs(d,c),a==="out-in"&&l.type!==fn)return i.isLeaving=!0,c.afterLeave=()=>{i.isLeaving=!1,n.job.flags&8||n.update(),delete c.afterLeave},Lo(s);a==="in-out"&&l.type!==fn&&(c.delayLeave=(m,p,y)=>{const g=ed(i,d);g[String(d.key)]=d,m[Di]=()=>{p(),m[Di]=void 0,delete f.delayedLeave},f.delayedLeave=y})}return s}}};function Qh(t){let e=t[0];if(t.length>1){for(const n of t)if(n.type!==fn){e=n;break}}return e}const km=zm;function ed(t,e){const{leavingVNodes:n}=t;let i=n.get(e.type);return i||(i=Object.create(null),n.set(e.type,i)),i}function Al(t,e,n,i,r){const{appear:s,mode:o,persisted:a=!1,onBeforeEnter:l,onEnter:f,onAfterEnter:h,onEnterCancelled:d,onBeforeLeave:c,onLeave:m,onAfterLeave:p,onLeaveCancelled:y,onBeforeAppear:g,onAppear:u,onAfterAppear:w,onAppearCancelled:T}=e,A=String(t.key),G=ed(n,t),N=(J,b)=>{J&&Fn(J,i,9,b)},k=(J,b)=>{const P=b[1];N(J,b),it(J)?J.every(V=>V.length<=1)&&P():J.length<=1&&P()},q={mode:o,persisted:a,beforeEnter(J){let b=l;if(!n.isMounted)if(s)b=g||l;else return;J[Di]&&J[Di](!0);const P=G[A];P&&dr(t,P)&&P.el[Di]&&P.el[Di](),N(b,[J])},enter(J){let b=f,P=h,V=d;if(!n.isMounted)if(s)b=u||f,P=w||h,V=T||d;else return;let j=!1;const ce=J[ca]=se=>{j||(j=!0,se?N(V,[J]):N(P,[J]),q.delayedLeave&&q.delayedLeave(),J[ca]=void 0)};b?k(b,[J,ce]):ce()},leave(J,b){const P=String(t.key);if(J[ca]&&J[ca](!0),n.isUnmounting)return b();N(c,[J]);let V=!1;const j=J[Di]=ce=>{V||(V=!0,b(),ce?N(y,[J]):N(p,[J]),J[Di]=void 0,G[P]===t&&delete G[P])};G[P]=t,m?k(m,[J,j]):j()},clone(J){const b=Al(J,e,n,i,r);return r&&r(b),b}};return q}function Lo(t){if(ho(t))return t=Vi(t),t.children=null,t}function Mf(t){if(!ho(t))return Kh(t.type)&&t.children?Qh(t.children):t;const{shapeFlag:e,children:n}=t;if(n){if(e&16)return n[0];if(e&32&&at(n.default))return n.default()}}function Gs(t,e){t.shapeFlag&6&&t.component?(t.transition=e,Gs(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function td(t,e=!1,n){let i=[],r=0;for(let s=0;s<t.length;s++){let o=t[s];const a=n==null?o.key:String(n)+String(o.key!=null?o.key:s);o.type===Gn?(o.patchFlag&128&&r++,i=i.concat(td(o.children,e,a))):(e||o.type!==fn)&&i.push(a!=null?Vi(o,{key:a}):o)}if(r>1)for(let s=0;s<i.length;s++)i[s].patchFlag=-2;return i}/*! #__NO_SIDE_EFFECTS__ */function nd(t,e){return at(t)?Ot({name:t.name},e,{setup:t}):t}function id(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}function Rl(t,e,n,i,r=!1){if(it(t)){t.forEach((p,y)=>Rl(p,e&&(it(e)?e[y]:e),n,i,r));return}if(Us(i)&&!r)return;const s=i.shapeFlag&4?Kc(i.component):i.el,o=r?null:s,{i:a,r:l}=t,f=e&&e.r,h=a.refs===bt?a.refs={}:a.refs,d=a.setupState,c=mt(d),m=d===bt?()=>!1:p=>_t(c,p);if(f!=null&&f!==l&&(Ft(f)?(h[f]=null,m(f)&&(d[f]=null)):en(f)&&(f.value=null)),at(l))Ks(l,a,12,[o,h]);else{const p=Ft(l),y=en(l);if(p||y){const g=()=>{if(t.f){const u=p?m(l)?d[l]:h[l]:l.value;r?it(u)&&Ic(u,s):it(u)?u.includes(s)||u.push(s):p?(h[l]=[s],m(l)&&(d[l]=h[l])):(l.value=[s],t.k&&(h[t.k]=l.value))}else p?(h[l]=o,m(l)&&(d[l]=o)):y&&(l.value=o,t.k&&(h[t.k]=o))};o?(g.id=-1,_n(g,n)):g()}}}co().requestIdleCallback;co().cancelIdleCallback;const Us=t=>!!t.type.__asyncLoader,ho=t=>t.type.__isKeepAlive;function Hm(t,e){rd(t,"a",e)}function Gm(t,e){rd(t,"da",e)}function rd(t,e,n=Wt){const i=t.__wdc||(t.__wdc=()=>{let r=n;for(;r;){if(r.isDeactivated)return;r=r.parent}return t()});if(po(e,i,n),n){let r=n.parent;for(;r&&r.parent;)ho(r.parent.vnode)&&Vm(i,e,n,r),r=r.parent}}function Vm(t,e,n,i){const r=po(e,t,i,!0);ad(()=>{Ic(i[e],r)},n)}function po(t,e,n=Wt,i=!1){if(n){const r=n[t]||(n[t]=[]),s=e.__weh||(e.__weh=(...o)=>{qi();const a=Zs(n),l=Fn(e,n,t,o);return a(),Yi(),l});return i?r.unshift(s):r.push(s),s}}const gi=t=>(e,n=Wt)=>{(!Ws||t==="sp")&&po(t,(...i)=>e(...i),n)},Wm=gi("bm"),mo=gi("m"),Xm=gi("bu"),qm=gi("u"),sd=gi("bum"),ad=gi("um"),Ym=gi("sp"),jm=gi("rtg"),$m=gi("rtc");function Km(t,e=Wt){po("ec",t,e)}const Zm="components";function qc(t,e){return Qm(Zm,t,!0,e)||t}const Jm=Symbol.for("v-ndc");function Qm(t,e,n=!0,i=!1){const r=Mn||Wt;if(r){const s=r.type;{const a=V_(s,!1);if(a&&(a===e||a===bn(e)||a===lo(bn(e))))return s}const o=Tf(r[t]||s[t],e)||Tf(r.appContext[t],e);return!o&&i?s:o}}function Tf(t,e){return t&&(t[e]||t[bn(e)]||t[lo(bn(e))])}const Cl=t=>t?wd(t)?Kc(t):Cl(t.parent):null,Ns=Ot(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Cl(t.parent),$root:t=>Cl(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>Yc(t),$forceUpdate:t=>t.f||(t.f=()=>{Xc(t.update)}),$nextTick:t=>t.n||(t.n=Xh.bind(t.proxy)),$watch:t=>y_.bind(t)}),Io=(t,e)=>t!==bt&&!t.__isScriptSetup&&_t(t,e),e_={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:i,data:r,props:s,accessCache:o,type:a,appContext:l}=t;let f;if(e[0]!=="$"){const m=o[e];if(m!==void 0)switch(m){case 1:return i[e];case 2:return r[e];case 4:return n[e];case 3:return s[e]}else{if(Io(i,e))return o[e]=1,i[e];if(r!==bt&&_t(r,e))return o[e]=2,r[e];if((f=t.propsOptions[0])&&_t(f,e))return o[e]=3,s[e];if(n!==bt&&_t(n,e))return o[e]=4,n[e];Pl&&(o[e]=0)}}const h=Ns[e];let d,c;if(h)return e==="$attrs"&&Qt(t.attrs,"get",""),h(t);if((d=a.__cssModules)&&(d=d[e]))return d;if(n!==bt&&_t(n,e))return o[e]=4,n[e];if(c=l.config.globalProperties,_t(c,e))return c[e]},set({_:t},e,n){const{data:i,setupState:r,ctx:s}=t;return Io(r,e)?(r[e]=n,!0):i!==bt&&_t(i,e)?(i[e]=n,!0):_t(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(s[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:i,appContext:r,propsOptions:s}},o){let a;return!!n[o]||t!==bt&&_t(t,o)||Io(e,o)||(a=s[0])&&_t(a,o)||_t(i,o)||_t(Ns,o)||_t(r.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:_t(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function Ef(t){return it(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let Pl=!0;function t_(t){const e=Yc(t),n=t.proxy,i=t.ctx;Pl=!1,e.beforeCreate&&bf(e.beforeCreate,t,"bc");const{data:r,computed:s,methods:o,watch:a,provide:l,inject:f,created:h,beforeMount:d,mounted:c,beforeUpdate:m,updated:p,activated:y,deactivated:g,beforeDestroy:u,beforeUnmount:w,destroyed:T,unmounted:A,render:G,renderTracked:N,renderTriggered:k,errorCaptured:q,serverPrefetch:J,expose:b,inheritAttrs:P,components:V,directives:j,filters:ce}=e;if(f&&n_(f,i,null),o)for(const _e in o){const ie=o[_e];at(ie)&&(i[_e]=ie.bind(n))}if(r){const _e=r.call(n,n);Dt(_e)&&(t.data=fo(_e))}if(Pl=!0,s)for(const _e in s){const ie=s[_e],Ne=at(ie)?ie.bind(n,n):at(ie.get)?ie.get.bind(n,n):Xn,ze=!at(ie)&&at(ie.set)?ie.set.bind(n):Xn,He=Pn({get:Ne,set:ze});Object.defineProperty(i,_e,{enumerable:!0,configurable:!0,get:()=>He.value,set:Qe=>He.value=Qe})}if(a)for(const _e in a)od(a[_e],i,n,_e);if(l){const _e=at(l)?l.call(n):l;Reflect.ownKeys(_e).forEach(ie=>{Na(ie,_e[ie])})}h&&bf(h,t,"c");function ae(_e,ie){it(ie)?ie.forEach(Ne=>_e(Ne.bind(n))):ie&&_e(ie.bind(n))}if(ae(Wm,d),ae(mo,c),ae(Xm,m),ae(qm,p),ae(Hm,y),ae(Gm,g),ae(Km,q),ae($m,N),ae(jm,k),ae(sd,w),ae(ad,A),ae(Ym,J),it(b))if(b.length){const _e=t.exposed||(t.exposed={});b.forEach(ie=>{Object.defineProperty(_e,ie,{get:()=>n[ie],set:Ne=>n[ie]=Ne})})}else t.exposed||(t.exposed={});G&&t.render===Xn&&(t.render=G),P!=null&&(t.inheritAttrs=P),V&&(t.components=V),j&&(t.directives=j),J&&id(t)}function n_(t,e,n=Xn){it(t)&&(t=Dl(t));for(const i in t){const r=t[i];let s;Dt(r)?"default"in r?s=di(r.from||i,r.default,!0):s=di(r.from||i):s=di(r),en(s)?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>s.value,set:o=>s.value=o}):e[i]=s}}function bf(t,e,n){Fn(it(t)?t.map(i=>i.bind(e.proxy)):t.bind(e.proxy),e,n)}function od(t,e,n,i){let r=i.includes(".")?Sd(n,i):()=>n[i];if(Ft(t)){const s=e[t];at(s)&&Oa(r,s)}else if(at(t))Oa(r,t.bind(n));else if(Dt(t))if(it(t))t.forEach(s=>od(s,e,n,i));else{const s=at(t.handler)?t.handler.bind(n):e[t.handler];at(s)&&Oa(r,s,t)}}function Yc(t){const e=t.type,{mixins:n,extends:i}=e,{mixins:r,optionsCache:s,config:{optionMergeStrategies:o}}=t.appContext,a=s.get(e);let l;return a?l=a:!r.length&&!n&&!i?l=e:(l={},r.length&&r.forEach(f=>Za(l,f,o,!0)),Za(l,e,o)),Dt(e)&&s.set(e,l),l}function Za(t,e,n,i=!1){const{mixins:r,extends:s}=e;s&&Za(t,s,n,!0),r&&r.forEach(o=>Za(t,o,n,!0));for(const o in e)if(!(i&&o==="expose")){const a=i_[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const i_={data:wf,props:Af,emits:Af,methods:ws,computed:ws,beforeCreate:nn,created:nn,beforeMount:nn,mounted:nn,beforeUpdate:nn,updated:nn,beforeDestroy:nn,beforeUnmount:nn,destroyed:nn,unmounted:nn,activated:nn,deactivated:nn,errorCaptured:nn,serverPrefetch:nn,components:ws,directives:ws,watch:s_,provide:wf,inject:r_};function wf(t,e){return e?t?function(){return Ot(at(t)?t.call(this,this):t,at(e)?e.call(this,this):e)}:e:t}function r_(t,e){return ws(Dl(t),Dl(e))}function Dl(t){if(it(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function nn(t,e){return t?[...new Set([].concat(t,e))]:e}function ws(t,e){return t?Ot(Object.create(null),t,e):e}function Af(t,e){return t?it(t)&&it(e)?[...new Set([...t,...e])]:Ot(Object.create(null),Ef(t),Ef(e??{})):e}function s_(t,e){if(!t)return e;if(!e)return t;const n=Ot(Object.create(null),t);for(const i in e)n[i]=nn(t[i],e[i]);return n}function ld(){return{app:null,config:{isNativeTag:Wp,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let a_=0;function o_(t,e){return function(i,r=null){at(i)||(i=Ot({},i)),r!=null&&!Dt(r)&&(r=null);const s=ld(),o=new WeakSet,a=[];let l=!1;const f=s.app={_uid:a_++,_component:i,_props:r,_container:null,_context:s,_instance:null,version:X_,get config(){return s.config},set config(h){},use(h,...d){return o.has(h)||(h&&at(h.install)?(o.add(h),h.install(f,...d)):at(h)&&(o.add(h),h(f,...d))),f},mixin(h){return s.mixins.includes(h)||s.mixins.push(h),f},component(h,d){return d?(s.components[h]=d,f):s.components[h]},directive(h,d){return d?(s.directives[h]=d,f):s.directives[h]},mount(h,d,c){if(!l){const m=f._ceVNode||Pt(i,r);return m.appContext=s,c===!0?c="svg":c===!1&&(c=void 0),d&&e?e(m,h):t(m,h,c),l=!0,f._container=h,h.__vue_app__=f,Kc(m.component)}},onUnmount(h){a.push(h)},unmount(){l&&(Fn(a,f._instance,16),t(null,f._container),delete f._container.__vue_app__)},provide(h,d){return s.provides[h]=d,f},runWithContext(h){const d=Kr;Kr=f;try{return h()}finally{Kr=d}}};return f}}let Kr=null;function Na(t,e){if(Wt){let n=Wt.provides;const i=Wt.parent&&Wt.parent.provides;i===n&&(n=Wt.provides=Object.create(i)),n[t]=e}}function di(t,e,n=!1){const i=Wt||Mn;if(i||Kr){const r=Kr?Kr._context.provides:i?i.parent==null?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:void 0;if(r&&t in r)return r[t];if(arguments.length>1)return n&&at(e)?e.call(i&&i.proxy):e}}const cd={},fd=()=>Object.create(cd),ud=t=>Object.getPrototypeOf(t)===cd;function l_(t,e,n,i=!1){const r={},s=fd();t.propsDefaults=Object.create(null),hd(t,e,r,s);for(const o in t.propsOptions[0])o in r||(r[o]=void 0);n?t.props=i?r:zh(r):t.type.props?t.props=r:t.props=s,t.attrs=s}function c_(t,e,n,i){const{props:r,attrs:s,vnode:{patchFlag:o}}=t,a=mt(r),[l]=t.propsOptions;let f=!1;if((i||o>0)&&!(o&16)){if(o&8){const h=t.vnode.dynamicProps;for(let d=0;d<h.length;d++){let c=h[d];if(_o(t.emitsOptions,c))continue;const m=e[c];if(l)if(_t(s,c))m!==s[c]&&(s[c]=m,f=!0);else{const p=bn(c);r[p]=Ll(l,a,p,m,t,!1)}else m!==s[c]&&(s[c]=m,f=!0)}}}else{hd(t,e,r,s)&&(f=!0);let h;for(const d in a)(!e||!_t(e,d)&&((h=wr(d))===d||!_t(e,h)))&&(l?n&&(n[d]!==void 0||n[h]!==void 0)&&(r[d]=Ll(l,a,d,void 0,t,!0)):delete r[d]);if(s!==a)for(const d in s)(!e||!_t(e,d))&&(delete s[d],f=!0)}f&&li(t.attrs,"set","")}function hd(t,e,n,i){const[r,s]=t.propsOptions;let o=!1,a;if(e)for(let l in e){if(Ps(l))continue;const f=e[l];let h;r&&_t(r,h=bn(l))?!s||!s.includes(h)?n[h]=f:(a||(a={}))[h]=f:_o(t.emitsOptions,l)||(!(l in i)||f!==i[l])&&(i[l]=f,o=!0)}if(s){const l=mt(n),f=a||bt;for(let h=0;h<s.length;h++){const d=s[h];n[d]=Ll(r,l,d,f[d],t,!_t(f,d))}}return o}function Ll(t,e,n,i,r,s){const o=t[n];if(o!=null){const a=_t(o,"default");if(a&&i===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&at(l)){const{propsDefaults:f}=r;if(n in f)i=f[n];else{const h=Zs(r);i=f[n]=l.call(null,e),h()}}else i=l;r.ce&&r.ce._setProp(n,i)}o[0]&&(s&&!a?i=!1:o[1]&&(i===""||i===wr(n))&&(i=!0))}return i}const f_=new WeakMap;function dd(t,e,n=!1){const i=n?f_:e.propsCache,r=i.get(t);if(r)return r;const s=t.props,o={},a=[];let l=!1;if(!at(t)){const h=d=>{l=!0;const[c,m]=dd(d,e,!0);Ot(o,c),m&&a.push(...m)};!n&&e.mixins.length&&e.mixins.forEach(h),t.extends&&h(t.extends),t.mixins&&t.mixins.forEach(h)}if(!s&&!l)return Dt(t)&&i.set(t,jr),jr;if(it(s))for(let h=0;h<s.length;h++){const d=bn(s[h]);Rf(d)&&(o[d]=bt)}else if(s)for(const h in s){const d=bn(h);if(Rf(d)){const c=s[h],m=o[d]=it(c)||at(c)?{type:c}:Ot({},c),p=m.type;let y=!1,g=!0;if(it(p))for(let u=0;u<p.length;++u){const w=p[u],T=at(w)&&w.name;if(T==="Boolean"){y=!0;break}else T==="String"&&(g=!1)}else y=at(p)&&p.name==="Boolean";m[0]=y,m[1]=g,(y||_t(m,"default"))&&a.push(d)}}const f=[o,a];return Dt(t)&&i.set(t,f),f}function Rf(t){return t[0]!=="$"&&!Ps(t)}const pd=t=>t[0]==="_"||t==="$stable",jc=t=>it(t)?t.map(Vn):[Vn(t)],u_=(t,e,n)=>{if(e._n)return e;const i=hr((...r)=>jc(e(...r)),n);return i._c=!1,i},md=(t,e,n)=>{const i=t._ctx;for(const r in t){if(pd(r))continue;const s=t[r];if(at(s))e[r]=u_(r,s,i);else if(s!=null){const o=jc(s);e[r]=()=>o}}},_d=(t,e)=>{const n=jc(e);t.slots.default=()=>n},gd=(t,e,n)=>{for(const i in e)(n||i!=="_")&&(t[i]=e[i])},h_=(t,e,n)=>{const i=t.slots=fd();if(t.vnode.shapeFlag&32){const r=e._;r?(gd(i,e,n),n&&Th(i,"_",r,!0)):md(e,i)}else e&&_d(t,e)},d_=(t,e,n)=>{const{vnode:i,slots:r}=t;let s=!0,o=bt;if(i.shapeFlag&32){const a=e._;a?n&&a===1?s=!1:gd(r,e,n):(s=!e.$stable,md(e,r)),o=e}else e&&(_d(t,e),o={default:1});if(s)for(const a in r)!pd(a)&&o[a]==null&&delete r[a]},_n=A_;function p_(t){return m_(t)}function m_(t,e){const n=co();n.__VUE__=!0;const{insert:i,remove:r,patchProp:s,createElement:o,createText:a,createComment:l,setText:f,setElementText:h,parentNode:d,nextSibling:c,setScopeId:m=Xn,insertStaticContent:p}=t,y=(E,H,W,pe=null,oe=null,ye=null,ve=void 0,_=null,v=!!H.dynamicChildren)=>{if(E===H)return;E&&!dr(E,H)&&(pe=ee(E),Qe(E,oe,ye,!0),E=null),H.patchFlag===-2&&(v=!1,H.dynamicChildren=null);const{type:M,ref:C,shapeFlag:U}=H;switch(M){case go:g(E,H,W,pe);break;case fn:u(E,H,W,pe);break;case Fa:E==null&&w(H,W,pe,ve);break;case Gn:V(E,H,W,pe,oe,ye,ve,_,v);break;default:U&1?G(E,H,W,pe,oe,ye,ve,_,v):U&6?j(E,H,W,pe,oe,ye,ve,_,v):(U&64||U&128)&&M.process(E,H,W,pe,oe,ye,ve,_,v,De)}C!=null&&oe&&Rl(C,E&&E.ref,ye,H||E,!H)},g=(E,H,W,pe)=>{if(E==null)i(H.el=a(H.children),W,pe);else{const oe=H.el=E.el;H.children!==E.children&&f(oe,H.children)}},u=(E,H,W,pe)=>{E==null?i(H.el=l(H.children||""),W,pe):H.el=E.el},w=(E,H,W,pe)=>{[E.el,E.anchor]=p(E.children,H,W,pe,E.el,E.anchor)},T=({el:E,anchor:H},W,pe)=>{let oe;for(;E&&E!==H;)oe=c(E),i(E,W,pe),E=oe;i(H,W,pe)},A=({el:E,anchor:H})=>{let W;for(;E&&E!==H;)W=c(E),r(E),E=W;r(H)},G=(E,H,W,pe,oe,ye,ve,_,v)=>{H.type==="svg"?ve="svg":H.type==="math"&&(ve="mathml"),E==null?N(H,W,pe,oe,ye,ve,_,v):J(E,H,oe,ye,ve,_,v)},N=(E,H,W,pe,oe,ye,ve,_)=>{let v,M;const{props:C,shapeFlag:U,transition:F,dirs:K}=E;if(v=E.el=o(E.type,ye,C&&C.is,C),U&8?h(v,E.children):U&16&&q(E.children,v,null,pe,oe,Uo(E,ye),ve,_),K&&Ji(E,null,pe,"created"),k(v,E,E.scopeId,ve,pe),C){for(const te in C)te!=="value"&&!Ps(te)&&s(v,te,null,C[te],ye,pe);"value"in C&&s(v,"value",null,C.value,ye),(M=C.onVnodeBeforeMount)&&zn(M,pe,E)}K&&Ji(E,null,pe,"beforeMount");const X=__(oe,F);X&&F.beforeEnter(v),i(v,H,W),((M=C&&C.onVnodeMounted)||X||K)&&_n(()=>{M&&zn(M,pe,E),X&&F.enter(v),K&&Ji(E,null,pe,"mounted")},oe)},k=(E,H,W,pe,oe)=>{if(W&&m(E,W),pe)for(let ye=0;ye<pe.length;ye++)m(E,pe[ye]);if(oe){let ye=oe.subTree;if(H===ye||Td(ye.type)&&(ye.ssContent===H||ye.ssFallback===H)){const ve=oe.vnode;k(E,ve,ve.scopeId,ve.slotScopeIds,oe.parent)}}},q=(E,H,W,pe,oe,ye,ve,_,v=0)=>{for(let M=v;M<E.length;M++){const C=E[M]=_?Li(E[M]):Vn(E[M]);y(null,C,H,W,pe,oe,ye,ve,_)}},J=(E,H,W,pe,oe,ye,ve)=>{const _=H.el=E.el;let{patchFlag:v,dynamicChildren:M,dirs:C}=H;v|=E.patchFlag&16;const U=E.props||bt,F=H.props||bt;let K;if(W&&Qi(W,!1),(K=F.onVnodeBeforeUpdate)&&zn(K,W,H,E),C&&Ji(H,E,W,"beforeUpdate"),W&&Qi(W,!0),(U.innerHTML&&F.innerHTML==null||U.textContent&&F.textContent==null)&&h(_,""),M?b(E.dynamicChildren,M,_,W,pe,Uo(H,oe),ye):ve||ie(E,H,_,null,W,pe,Uo(H,oe),ye,!1),v>0){if(v&16)P(_,U,F,W,oe);else if(v&2&&U.class!==F.class&&s(_,"class",null,F.class,oe),v&4&&s(_,"style",U.style,F.style,oe),v&8){const X=H.dynamicProps;for(let te=0;te<X.length;te++){const Te=X[te],re=U[Te],ge=F[Te];(ge!==re||Te==="value")&&s(_,Te,re,ge,oe,W)}}v&1&&E.children!==H.children&&h(_,H.children)}else!ve&&M==null&&P(_,U,F,W,oe);((K=F.onVnodeUpdated)||C)&&_n(()=>{K&&zn(K,W,H,E),C&&Ji(H,E,W,"updated")},pe)},b=(E,H,W,pe,oe,ye,ve)=>{for(let _=0;_<H.length;_++){const v=E[_],M=H[_],C=v.el&&(v.type===Gn||!dr(v,M)||v.shapeFlag&70)?d(v.el):W;y(v,M,C,null,pe,oe,ye,ve,!0)}},P=(E,H,W,pe,oe)=>{if(H!==W){if(H!==bt)for(const ye in H)!Ps(ye)&&!(ye in W)&&s(E,ye,H[ye],null,oe,pe);for(const ye in W){if(Ps(ye))continue;const ve=W[ye],_=H[ye];ve!==_&&ye!=="value"&&s(E,ye,_,ve,oe,pe)}"value"in W&&s(E,"value",H.value,W.value,oe)}},V=(E,H,W,pe,oe,ye,ve,_,v)=>{const M=H.el=E?E.el:a(""),C=H.anchor=E?E.anchor:a("");let{patchFlag:U,dynamicChildren:F,slotScopeIds:K}=H;K&&(_=_?_.concat(K):K),E==null?(i(M,W,pe),i(C,W,pe),q(H.children||[],W,C,oe,ye,ve,_,v)):U>0&&U&64&&F&&E.dynamicChildren?(b(E.dynamicChildren,F,W,oe,ye,ve,_),(H.key!=null||oe&&H===oe.subTree)&&vd(E,H,!0)):ie(E,H,W,C,oe,ye,ve,_,v)},j=(E,H,W,pe,oe,ye,ve,_,v)=>{H.slotScopeIds=_,E==null?H.shapeFlag&512?oe.ctx.activate(H,W,pe,ve,v):ce(H,W,pe,oe,ye,ve,v):se(E,H,v)},ce=(E,H,W,pe,oe,ye,ve)=>{const _=E.component=F_(E,pe,oe);if(ho(E)&&(_.ctx.renderer=De),z_(_,!1,ve),_.asyncDep){if(oe&&oe.registerDep(_,ae,ve),!E.el){const v=_.subTree=Pt(fn);u(null,v,H,W)}}else ae(_,E,H,W,oe,ye,ve)},se=(E,H,W)=>{const pe=H.component=E.component;if(b_(E,H,W))if(pe.asyncDep&&!pe.asyncResolved){_e(pe,H,W);return}else pe.next=H,pe.update();else H.el=E.el,pe.vnode=H},ae=(E,H,W,pe,oe,ye,ve)=>{const _=()=>{if(E.isMounted){let{next:U,bu:F,u:K,parent:X,vnode:te}=E;{const Le=xd(E);if(Le){U&&(U.el=te.el,_e(E,U,ve)),Le.asyncDep.then(()=>{E.isUnmounted||_()});return}}let Te=U,re;Qi(E,!1),U?(U.el=te.el,_e(E,U,ve)):U=te,F&&Ro(F),(re=U.props&&U.props.onVnodeBeforeUpdate)&&zn(re,X,U,te),Qi(E,!0);const ge=No(E),Fe=E.subTree;E.subTree=ge,y(Fe,ge,d(Fe.el),ee(Fe),E,oe,ye),U.el=ge.el,Te===null&&w_(E,ge.el),K&&_n(K,oe),(re=U.props&&U.props.onVnodeUpdated)&&_n(()=>zn(re,X,U,te),oe)}else{let U;const{el:F,props:K}=H,{bm:X,m:te,parent:Te,root:re,type:ge}=E,Fe=Us(H);if(Qi(E,!1),X&&Ro(X),!Fe&&(U=K&&K.onVnodeBeforeMount)&&zn(U,Te,H),Qi(E,!0),F&&We){const Le=()=>{E.subTree=No(E),We(F,E.subTree,E,oe,null)};Fe&&ge.__asyncHydrate?ge.__asyncHydrate(F,E,Le):Le()}else{re.ce&&re.ce._injectChildStyle(ge);const Le=E.subTree=No(E);y(null,Le,W,pe,E,oe,ye),H.el=Le.el}if(te&&_n(te,oe),!Fe&&(U=K&&K.onVnodeMounted)){const Le=H;_n(()=>zn(U,Te,Le),oe)}(H.shapeFlag&256||Te&&Us(Te.vnode)&&Te.vnode.shapeFlag&256)&&E.a&&_n(E.a,oe),E.isMounted=!0,H=W=pe=null}};E.scope.on();const v=E.effect=new bh(_);E.scope.off();const M=E.update=v.run.bind(v),C=E.job=v.runIfDirty.bind(v);C.i=E,C.id=E.uid,v.scheduler=()=>Xc(C),Qi(E,!0),M()},_e=(E,H,W)=>{H.component=E;const pe=E.vnode.props;E.vnode=H,E.next=null,c_(E,H.props,pe,W),d_(E,H.children,W),qi(),Sf(E),Yi()},ie=(E,H,W,pe,oe,ye,ve,_,v=!1)=>{const M=E&&E.children,C=E?E.shapeFlag:0,U=H.children,{patchFlag:F,shapeFlag:K}=H;if(F>0){if(F&128){ze(M,U,W,pe,oe,ye,ve,_,v);return}else if(F&256){Ne(M,U,W,pe,oe,ye,ve,_,v);return}}K&8?(C&16&&Oe(M,oe,ye),U!==M&&h(W,U)):C&16?K&16?ze(M,U,W,pe,oe,ye,ve,_,v):Oe(M,oe,ye,!0):(C&8&&h(W,""),K&16&&q(U,W,pe,oe,ye,ve,_,v))},Ne=(E,H,W,pe,oe,ye,ve,_,v)=>{E=E||jr,H=H||jr;const M=E.length,C=H.length,U=Math.min(M,C);let F;for(F=0;F<U;F++){const K=H[F]=v?Li(H[F]):Vn(H[F]);y(E[F],K,W,null,oe,ye,ve,_,v)}M>C?Oe(E,oe,ye,!0,!1,U):q(H,W,pe,oe,ye,ve,_,v,U)},ze=(E,H,W,pe,oe,ye,ve,_,v)=>{let M=0;const C=H.length;let U=E.length-1,F=C-1;for(;M<=U&&M<=F;){const K=E[M],X=H[M]=v?Li(H[M]):Vn(H[M]);if(dr(K,X))y(K,X,W,null,oe,ye,ve,_,v);else break;M++}for(;M<=U&&M<=F;){const K=E[U],X=H[F]=v?Li(H[F]):Vn(H[F]);if(dr(K,X))y(K,X,W,null,oe,ye,ve,_,v);else break;U--,F--}if(M>U){if(M<=F){const K=F+1,X=K<C?H[K].el:pe;for(;M<=F;)y(null,H[M]=v?Li(H[M]):Vn(H[M]),W,X,oe,ye,ve,_,v),M++}}else if(M>F)for(;M<=U;)Qe(E[M],oe,ye,!0),M++;else{const K=M,X=M,te=new Map;for(M=X;M<=F;M++){const Ye=H[M]=v?Li(H[M]):Vn(H[M]);Ye.key!=null&&te.set(Ye.key,M)}let Te,re=0;const ge=F-X+1;let Fe=!1,Le=0;const Ue=new Array(ge);for(M=0;M<ge;M++)Ue[M]=0;for(M=K;M<=U;M++){const Ye=E[M];if(re>=ge){Qe(Ye,oe,ye,!0);continue}let tt;if(Ye.key!=null)tt=te.get(Ye.key);else for(Te=X;Te<=F;Te++)if(Ue[Te-X]===0&&dr(Ye,H[Te])){tt=Te;break}tt===void 0?Qe(Ye,oe,ye,!0):(Ue[tt-X]=M+1,tt>=Le?Le=tt:Fe=!0,y(Ye,H[tt],W,null,oe,ye,ve,_,v),re++)}const $e=Fe?g_(Ue):jr;for(Te=$e.length-1,M=ge-1;M>=0;M--){const Ye=X+M,tt=H[Ye],Z=Ye+1<C?H[Ye+1].el:pe;Ue[M]===0?y(null,tt,W,Z,oe,ye,ve,_,v):Fe&&(Te<0||M!==$e[Te]?He(tt,W,Z,2):Te--)}}},He=(E,H,W,pe,oe=null)=>{const{el:ye,type:ve,transition:_,children:v,shapeFlag:M}=E;if(M&6){He(E.component.subTree,H,W,pe);return}if(M&128){E.suspense.move(H,W,pe);return}if(M&64){ve.move(E,H,W,De);return}if(ve===Gn){i(ye,H,W);for(let U=0;U<v.length;U++)He(v[U],H,W,pe);i(E.anchor,H,W);return}if(ve===Fa){T(E,H,W);return}if(pe!==2&&M&1&&_)if(pe===0)_.beforeEnter(ye),i(ye,H,W),_n(()=>_.enter(ye),oe);else{const{leave:U,delayLeave:F,afterLeave:K}=_,X=()=>i(ye,H,W),te=()=>{U(ye,()=>{X(),K&&K()})};F?F(ye,X,te):te()}else i(ye,H,W)},Qe=(E,H,W,pe=!1,oe=!1)=>{const{type:ye,props:ve,ref:_,children:v,dynamicChildren:M,shapeFlag:C,patchFlag:U,dirs:F,cacheIndex:K}=E;if(U===-2&&(oe=!1),_!=null&&Rl(_,null,W,E,!0),K!=null&&(H.renderCache[K]=void 0),C&256){H.ctx.deactivate(E);return}const X=C&1&&F,te=!Us(E);let Te;if(te&&(Te=ve&&ve.onVnodeBeforeUnmount)&&zn(Te,H,E),C&6)Pe(E.component,W,pe);else{if(C&128){E.suspense.unmount(W,pe);return}X&&Ji(E,null,H,"beforeUnmount"),C&64?E.type.remove(E,H,W,De,pe):M&&!M.hasOnce&&(ye!==Gn||U>0&&U&64)?Oe(M,H,W,!1,!0):(ye===Gn&&U&384||!oe&&C&16)&&Oe(v,H,W),pe&&rt(E)}(te&&(Te=ve&&ve.onVnodeUnmounted)||X)&&_n(()=>{Te&&zn(Te,H,E),X&&Ji(E,null,H,"unmounted")},W)},rt=E=>{const{type:H,el:W,anchor:pe,transition:oe}=E;if(H===Gn){Se(W,pe);return}if(H===Fa){A(E);return}const ye=()=>{r(W),oe&&!oe.persisted&&oe.afterLeave&&oe.afterLeave()};if(E.shapeFlag&1&&oe&&!oe.persisted){const{leave:ve,delayLeave:_}=oe,v=()=>ve(W,ye);_?_(E.el,ye,v):v()}else ye()},Se=(E,H)=>{let W;for(;E!==H;)W=c(E),r(E),E=W;r(H)},Pe=(E,H,W)=>{const{bum:pe,scope:oe,job:ye,subTree:ve,um:_,m:v,a:M}=E;Cf(v),Cf(M),pe&&Ro(pe),oe.stop(),ye&&(ye.flags|=8,Qe(ve,E,H,W)),_&&_n(_,H),_n(()=>{E.isUnmounted=!0},H),H&&H.pendingBranch&&!H.isUnmounted&&E.asyncDep&&!E.asyncResolved&&E.suspenseId===H.pendingId&&(H.deps--,H.deps===0&&H.resolve())},Oe=(E,H,W,pe=!1,oe=!1,ye=0)=>{for(let ve=ye;ve<E.length;ve++)Qe(E[ve],H,W,pe,oe)},ee=E=>{if(E.shapeFlag&6)return ee(E.component.subTree);if(E.shapeFlag&128)return E.suspense.next();const H=c(E.anchor||E.el),W=H&&H[Fm];return W?c(W):H};let we=!1;const xe=(E,H,W)=>{E==null?H._vnode&&Qe(H._vnode,null,null,!0):y(H._vnode||null,E,H,null,null,null,W),H._vnode=E,we||(we=!0,Sf(),Yh(),we=!1)},De={p:y,um:Qe,m:He,r:rt,mt:ce,mc:q,pc:ie,pbc:b,n:ee,o:t};let qe,We;return{render:xe,hydrate:qe,createApp:o_(xe,qe)}}function Uo({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function Qi({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function __(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function vd(t,e,n=!1){const i=t.children,r=e.children;if(it(i)&&it(r))for(let s=0;s<i.length;s++){const o=i[s];let a=r[s];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=r[s]=Li(r[s]),a.el=o.el),!n&&a.patchFlag!==-2&&vd(o,a)),a.type===go&&(a.el=o.el)}}function g_(t){const e=t.slice(),n=[0];let i,r,s,o,a;const l=t.length;for(i=0;i<l;i++){const f=t[i];if(f!==0){if(r=n[n.length-1],t[r]<f){e[i]=r,n.push(i);continue}for(s=0,o=n.length-1;s<o;)a=s+o>>1,t[n[a]]<f?s=a+1:o=a;f<t[n[s]]&&(s>0&&(e[i]=n[s-1]),n[s]=i)}}for(s=n.length,o=n[s-1];s-- >0;)n[s]=o,o=e[o];return n}function xd(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:xd(e)}function Cf(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}const v_=Symbol.for("v-scx"),x_=()=>di(v_);function Oa(t,e,n){return yd(t,e,n)}function yd(t,e,n=bt){const{immediate:i,deep:r,flush:s,once:o}=n,a=Ot({},n),l=e&&i||!e&&s!=="post";let f;if(Ws){if(s==="sync"){const m=x_();f=m.__watcherHandles||(m.__watcherHandles=[])}else if(!l){const m=()=>{};return m.stop=Xn,m.resume=Xn,m.pause=Xn,m}}const h=Wt;a.call=(m,p,y)=>Fn(m,h,p,y);let d=!1;s==="post"?a.scheduler=m=>{_n(m,h&&h.suspense)}:s!=="sync"&&(d=!0,a.scheduler=(m,p)=>{p?m():Xc(m)}),a.augmentJob=m=>{e&&(m.flags|=4),d&&(m.flags|=2,h&&(m.id=h.uid,m.i=h))};const c=Im(t,e,a);return Ws&&(f?f.push(c):l&&c()),c}function y_(t,e,n){const i=this.proxy,r=Ft(t)?t.includes(".")?Sd(i,t):()=>i[t]:t.bind(i,i);let s;at(e)?s=e:(s=e.handler,n=e);const o=Zs(this),a=yd(r,s.bind(i),n);return o(),a}function Sd(t,e){const n=e.split(".");return()=>{let i=t;for(let r=0;r<n.length&&i;r++)i=i[n[r]];return i}}const S_=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${bn(e)}Modifiers`]||t[`${wr(e)}Modifiers`];function M_(t,e,...n){if(t.isUnmounted)return;const i=t.vnode.props||bt;let r=n;const s=e.startsWith("update:"),o=s&&S_(i,e.slice(7));o&&(o.trim&&(r=n.map(h=>Ft(h)?h.trim():h)),o.number&&(r=n.map(Jp)));let a,l=i[a=Ao(e)]||i[a=Ao(bn(e))];!l&&s&&(l=i[a=Ao(wr(e))]),l&&Fn(l,t,6,r);const f=i[a+"Once"];if(f){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,Fn(f,t,6,r)}}function Md(t,e,n=!1){const i=e.emitsCache,r=i.get(t);if(r!==void 0)return r;const s=t.emits;let o={},a=!1;if(!at(t)){const l=f=>{const h=Md(f,e,!0);h&&(a=!0,Ot(o,h))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!s&&!a?(Dt(t)&&i.set(t,null),null):(it(s)?s.forEach(l=>o[l]=null):Ot(o,s),Dt(t)&&i.set(t,o),o)}function _o(t,e){return!t||!so(e)?!1:(e=e.slice(2).replace(/Once$/,""),_t(t,e[0].toLowerCase()+e.slice(1))||_t(t,wr(e))||_t(t,e))}function No(t){const{type:e,vnode:n,proxy:i,withProxy:r,propsOptions:[s],slots:o,attrs:a,emit:l,render:f,renderCache:h,props:d,data:c,setupState:m,ctx:p,inheritAttrs:y}=t,g=Ka(t);let u,w;try{if(n.shapeFlag&4){const A=r||i,G=A;u=Vn(f.call(G,A,h,d,m,c,p)),w=a}else{const A=e;u=Vn(A.length>1?A(d,{attrs:a,slots:o,emit:l}):A(d,null)),w=e.props?a:T_(a)}}catch(A){Os.length=0,uo(A,t,1),u=Pt(fn)}let T=u;if(w&&y!==!1){const A=Object.keys(w),{shapeFlag:G}=T;A.length&&G&7&&(s&&A.some(Lc)&&(w=E_(w,s)),T=Vi(T,w,!1,!0))}return n.dirs&&(T=Vi(T,null,!1,!0),T.dirs=T.dirs?T.dirs.concat(n.dirs):n.dirs),n.transition&&Gs(T,n.transition),u=T,Ka(g),u}const T_=t=>{let e;for(const n in t)(n==="class"||n==="style"||so(n))&&((e||(e={}))[n]=t[n]);return e},E_=(t,e)=>{const n={};for(const i in t)(!Lc(i)||!(i.slice(9)in e))&&(n[i]=t[i]);return n};function b_(t,e,n){const{props:i,children:r,component:s}=t,{props:o,children:a,patchFlag:l}=e,f=s.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return i?Pf(i,o,f):!!o;if(l&8){const h=e.dynamicProps;for(let d=0;d<h.length;d++){const c=h[d];if(o[c]!==i[c]&&!_o(f,c))return!0}}}else return(r||a)&&(!a||!a.$stable)?!0:i===o?!1:i?o?Pf(i,o,f):!0:!!o;return!1}function Pf(t,e,n){const i=Object.keys(e);if(i.length!==Object.keys(t).length)return!0;for(let r=0;r<i.length;r++){const s=i[r];if(e[s]!==t[s]&&!_o(n,s))return!0}return!1}function w_({vnode:t,parent:e},n){for(;e;){const i=e.subTree;if(i.suspense&&i.suspense.activeBranch===t&&(i.el=t.el),i===t)(t=e.vnode).el=n,e=e.parent;else break}}const Td=t=>t.__isSuspense;function A_(t,e){e&&e.pendingBranch?it(t)?e.effects.push(...t):e.effects.push(t):Om(t)}const Gn=Symbol.for("v-fgt"),go=Symbol.for("v-txt"),fn=Symbol.for("v-cmt"),Fa=Symbol.for("v-stc"),Os=[];let vn=null;function fi(t=!1){Os.push(vn=t?null:[])}function R_(){Os.pop(),vn=Os[Os.length-1]||null}let Vs=1;function Df(t){Vs+=t,t<0&&vn&&(vn.hasOnce=!0)}function Ed(t){return t.dynamicChildren=Vs>0?vn||jr:null,R_(),Vs>0&&vn&&vn.push(t),t}function Bi(t,e,n,i,r,s){return Ed(Jt(t,e,n,i,r,s,!0))}function C_(t,e,n,i,r){return Ed(Pt(t,e,n,i,r,!0))}function Ja(t){return t?t.__v_isVNode===!0:!1}function dr(t,e){return t.type===e.type&&t.key===e.key}const bd=({key:t})=>t??null,Ba=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?Ft(t)||en(t)||at(t)?{i:Mn,r:t,k:e,f:!!n}:t:null);function Jt(t,e=null,n=null,i=0,r=null,s=t===Gn?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&bd(e),ref:e&&Ba(e),scopeId:$h,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:i,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:Mn};return a?($c(l,n),s&128&&t.normalize(l)):n&&(l.shapeFlag|=Ft(n)?8:16),Vs>0&&!o&&vn&&(l.patchFlag>0||s&6)&&l.patchFlag!==32&&vn.push(l),l}const Pt=P_;function P_(t,e=null,n=null,i=0,r=null,s=!1){if((!t||t===Jm)&&(t=fn),Ja(t)){const a=Vi(t,e,!0);return n&&$c(a,n),Vs>0&&!s&&vn&&(a.shapeFlag&6?vn[vn.indexOf(t)]=a:vn.push(a)),a.patchFlag=-2,a}if(W_(t)&&(t=t.__vccOpts),e){e=D_(e);let{class:a,style:l}=e;a&&!Ft(a)&&(e.class=Oc(a)),Dt(l)&&(Wc(l)&&!it(l)&&(l=Ot({},l)),e.style=Nc(l))}const o=Ft(t)?1:Td(t)?128:Kh(t)?64:Dt(t)?4:at(t)?2:0;return Jt(t,e,n,i,r,o,s,!0)}function D_(t){return t?Wc(t)||ud(t)?Ot({},t):t:null}function Vi(t,e,n=!1,i=!1){const{props:r,ref:s,patchFlag:o,children:a,transition:l}=t,f=e?U_(r||{},e):r,h={__v_isVNode:!0,__v_skip:!0,type:t.type,props:f,key:f&&bd(f),ref:e&&e.ref?n&&s?it(s)?s.concat(Ba(e)):[s,Ba(e)]:Ba(e):s,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:a,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Gn?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:l,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Vi(t.ssContent),ssFallback:t.ssFallback&&Vi(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return l&&i&&Gs(h,l.clone(h)),h}function Xr(t=" ",e=0){return Pt(go,null,t,e)}function L_(t,e){const n=Pt(Fa,null,t);return n.staticCount=e,n}function I_(t="",e=!1){return e?(fi(),C_(fn,null,t)):Pt(fn,null,t)}function Vn(t){return t==null||typeof t=="boolean"?Pt(fn):it(t)?Pt(Gn,null,t.slice()):Ja(t)?Li(t):Pt(go,null,String(t))}function Li(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Vi(t)}function $c(t,e){let n=0;const{shapeFlag:i}=t;if(e==null)e=null;else if(it(e))n=16;else if(typeof e=="object")if(i&65){const r=e.default;r&&(r._c&&(r._d=!1),$c(t,r()),r._c&&(r._d=!0));return}else{n=32;const r=e._;!r&&!ud(e)?e._ctx=Mn:r===3&&Mn&&(Mn.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else at(e)?(e={default:e,_ctx:Mn},n=32):(e=String(e),i&64?(n=16,e=[Xr(e)]):n=8);t.children=e,t.shapeFlag|=n}function U_(...t){const e={};for(let n=0;n<t.length;n++){const i=t[n];for(const r in i)if(r==="class")e.class!==i.class&&(e.class=Oc([e.class,i.class]));else if(r==="style")e.style=Nc([e.style,i.style]);else if(so(r)){const s=e[r],o=i[r];o&&s!==o&&!(it(s)&&s.includes(o))&&(e[r]=s?[].concat(s,o):o)}else r!==""&&(e[r]=i[r])}return e}function zn(t,e,n,i=null){Fn(t,e,7,[n,i])}const N_=ld();let O_=0;function F_(t,e,n){const i=t.type,r=(e?e.appContext:t.appContext)||N_,s={uid:O_++,vnode:t,type:i,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new am(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:dd(i,r),emitsOptions:Md(i,r),emit:null,emitted:null,propsDefaults:bt,inheritAttrs:i.inheritAttrs,ctx:bt,data:bt,props:bt,attrs:bt,slots:bt,refs:bt,setupState:bt,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=e?e.root:s,s.emit=M_.bind(null,s),t.ce&&t.ce(s),s}let Wt=null;const B_=()=>Wt||Mn;let Qa,Il;{const t=co(),e=(n,i)=>{let r;return(r=t[n])||(r=t[n]=[]),r.push(i),s=>{r.length>1?r.forEach(o=>o(s)):r[0](s)}};Qa=e("__VUE_INSTANCE_SETTERS__",n=>Wt=n),Il=e("__VUE_SSR_SETTERS__",n=>Ws=n)}const Zs=t=>{const e=Wt;return Qa(t),t.scope.on(),()=>{t.scope.off(),Qa(e)}},Lf=()=>{Wt&&Wt.scope.off(),Qa(null)};function wd(t){return t.vnode.shapeFlag&4}let Ws=!1;function z_(t,e=!1,n=!1){e&&Il(e);const{props:i,children:r}=t.vnode,s=wd(t);l_(t,i,s,e),h_(t,r,n);const o=s?k_(t,e):void 0;return e&&Il(!1),o}function k_(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,e_);const{setup:i}=n;if(i){qi();const r=t.setupContext=i.length>1?G_(t):null,s=Zs(t),o=Ks(i,t,0,[t.props,r]),a=Mh(o);if(Yi(),s(),(a||t.sp)&&!Us(t)&&id(t),a){if(o.then(Lf,Lf),e)return o.then(l=>{If(t,l,e)}).catch(l=>{uo(l,t,0)});t.asyncDep=o}else If(t,o,e)}else Ad(t,e)}function If(t,e,n){at(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Dt(e)&&(t.setupState=Vh(e)),Ad(t,n)}let Uf;function Ad(t,e,n){const i=t.type;if(!t.render){if(!e&&Uf&&!i.render){const r=i.template||Yc(t).template;if(r){const{isCustomElement:s,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:l}=i,f=Ot(Ot({isCustomElement:s,delimiters:a},o),l);i.render=Uf(r,f)}}t.render=i.render||Xn}{const r=Zs(t);qi();try{t_(t)}finally{Yi(),r()}}}const H_={get(t,e){return Qt(t,"get",""),t[e]}};function G_(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,H_),slots:t.slots,emit:t.emit,expose:e}}function Kc(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(Vh(wm(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Ns)return Ns[n](t)},has(e,n){return n in e||n in Ns}})):t.proxy}function V_(t,e=!0){return at(t)?t.displayName||t.name:t.name||e&&t.__name}function W_(t){return at(t)&&"__vccOpts"in t}const Pn=(t,e)=>Dm(t,e,Ws);function Zc(t,e,n){const i=arguments.length;return i===2?Dt(e)&&!it(e)?Ja(e)?Pt(t,null,[e]):Pt(t,e):Pt(t,null,e):(i>3?n=Array.prototype.slice.call(arguments,2):i===3&&Ja(n)&&(n=[n]),Pt(t,e,n))}const X_="3.5.12";/**
* @vue/runtime-dom v3.5.12
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Ul;const Nf=typeof window<"u"&&window.trustedTypes;if(Nf)try{Ul=Nf.createPolicy("vue",{createHTML:t=>t})}catch{}const Rd=Ul?t=>Ul.createHTML(t):t=>t,q_="http://www.w3.org/2000/svg",Y_="http://www.w3.org/1998/Math/MathML",oi=typeof document<"u"?document:null,Of=oi&&oi.createElement("template"),j_={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,i)=>{const r=e==="svg"?oi.createElementNS(q_,t):e==="mathml"?oi.createElementNS(Y_,t):n?oi.createElement(t,{is:n}):oi.createElement(t);return t==="select"&&i&&i.multiple!=null&&r.setAttribute("multiple",i.multiple),r},createText:t=>oi.createTextNode(t),createComment:t=>oi.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>oi.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,i,r,s){const o=n?n.previousSibling:e.lastChild;if(r&&(r===s||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),n),!(r===s||!(r=r.nextSibling)););else{Of.innerHTML=Rd(i==="svg"?`<svg>${t}</svg>`:i==="mathml"?`<math>${t}</math>`:t);const a=Of.content;if(i==="svg"||i==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},Si="transition",vs="animation",Xs=Symbol("_vtc"),Cd={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},$_=Ot({},Zh,Cd),K_=t=>(t.displayName="Transition",t.props=$_,t),Z_=K_((t,{slots:e})=>Zc(km,J_(t),e)),er=(t,e=[])=>{it(t)?t.forEach(n=>n(...e)):t&&t(...e)},Ff=t=>t?it(t)?t.some(e=>e.length>1):t.length>1:!1;function J_(t){const e={};for(const V in t)V in Cd||(e[V]=t[V]);if(t.css===!1)return e;const{name:n="v",type:i,duration:r,enterFromClass:s=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:a=`${n}-enter-to`,appearFromClass:l=s,appearActiveClass:f=o,appearToClass:h=a,leaveFromClass:d=`${n}-leave-from`,leaveActiveClass:c=`${n}-leave-active`,leaveToClass:m=`${n}-leave-to`}=t,p=Q_(r),y=p&&p[0],g=p&&p[1],{onBeforeEnter:u,onEnter:w,onEnterCancelled:T,onLeave:A,onLeaveCancelled:G,onBeforeAppear:N=u,onAppear:k=w,onAppearCancelled:q=T}=e,J=(V,j,ce)=>{tr(V,j?h:a),tr(V,j?f:o),ce&&ce()},b=(V,j)=>{V._isLeaving=!1,tr(V,d),tr(V,m),tr(V,c),j&&j()},P=V=>(j,ce)=>{const se=V?k:w,ae=()=>J(j,V,ce);er(se,[j,ae]),Bf(()=>{tr(j,V?l:s),Mi(j,V?h:a),Ff(se)||zf(j,i,y,ae)})};return Ot(e,{onBeforeEnter(V){er(u,[V]),Mi(V,s),Mi(V,o)},onBeforeAppear(V){er(N,[V]),Mi(V,l),Mi(V,f)},onEnter:P(!1),onAppear:P(!0),onLeave(V,j){V._isLeaving=!0;const ce=()=>b(V,j);Mi(V,d),Mi(V,c),ng(),Bf(()=>{V._isLeaving&&(tr(V,d),Mi(V,m),Ff(A)||zf(V,i,g,ce))}),er(A,[V,ce])},onEnterCancelled(V){J(V,!1),er(T,[V])},onAppearCancelled(V){J(V,!0),er(q,[V])},onLeaveCancelled(V){b(V),er(G,[V])}})}function Q_(t){if(t==null)return null;if(Dt(t))return[Oo(t.enter),Oo(t.leave)];{const e=Oo(t);return[e,e]}}function Oo(t){return Qp(t)}function Mi(t,e){e.split(/\s+/).forEach(n=>n&&t.classList.add(n)),(t[Xs]||(t[Xs]=new Set)).add(e)}function tr(t,e){e.split(/\s+/).forEach(i=>i&&t.classList.remove(i));const n=t[Xs];n&&(n.delete(e),n.size||(t[Xs]=void 0))}function Bf(t){requestAnimationFrame(()=>{requestAnimationFrame(t)})}let eg=0;function zf(t,e,n,i){const r=t._endId=++eg,s=()=>{r===t._endId&&i()};if(n!=null)return setTimeout(s,n);const{type:o,timeout:a,propCount:l}=tg(t,e);if(!o)return i();const f=o+"end";let h=0;const d=()=>{t.removeEventListener(f,c),s()},c=m=>{m.target===t&&++h>=l&&d()};setTimeout(()=>{h<l&&d()},a+1),t.addEventListener(f,c)}function tg(t,e){const n=window.getComputedStyle(t),i=p=>(n[p]||"").split(", "),r=i(`${Si}Delay`),s=i(`${Si}Duration`),o=kf(r,s),a=i(`${vs}Delay`),l=i(`${vs}Duration`),f=kf(a,l);let h=null,d=0,c=0;e===Si?o>0&&(h=Si,d=o,c=s.length):e===vs?f>0&&(h=vs,d=f,c=l.length):(d=Math.max(o,f),h=d>0?o>f?Si:vs:null,c=h?h===Si?s.length:l.length:0);const m=h===Si&&/\b(transform|all)(,|$)/.test(i(`${Si}Property`).toString());return{type:h,timeout:d,propCount:c,hasTransform:m}}function kf(t,e){for(;t.length<e.length;)t=t.concat(t);return Math.max(...e.map((n,i)=>Hf(n)+Hf(t[i])))}function Hf(t){return t==="auto"?0:Number(t.slice(0,-1).replace(",","."))*1e3}function ng(){return document.body.offsetHeight}function ig(t,e,n){const i=t[Xs];i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const Gf=Symbol("_vod"),rg=Symbol("_vsh"),sg=Symbol(""),ag=/(^|;)\s*display\s*:/;function og(t,e,n){const i=t.style,r=Ft(n);let s=!1;if(n&&!r){if(e)if(Ft(e))for(const o of e.split(";")){const a=o.slice(0,o.indexOf(":")).trim();n[a]==null&&za(i,a,"")}else for(const o in e)n[o]==null&&za(i,o,"");for(const o in n)o==="display"&&(s=!0),za(i,o,n[o])}else if(r){if(e!==n){const o=i[sg];o&&(n+=";"+o),i.cssText=n,s=ag.test(n)}}else e&&t.removeAttribute("style");Gf in t&&(t[Gf]=s?i.display:"",t[rg]&&(i.display="none"))}const Vf=/\s*!important$/;function za(t,e,n){if(it(n))n.forEach(i=>za(t,e,i));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const i=lg(t,e);Vf.test(n)?t.setProperty(wr(i),n.replace(Vf,""),"important"):t[i]=n}}const Wf=["Webkit","Moz","ms"],Fo={};function lg(t,e){const n=Fo[e];if(n)return n;let i=bn(e);if(i!=="filter"&&i in t)return Fo[e]=i;i=lo(i);for(let r=0;r<Wf.length;r++){const s=Wf[r]+i;if(s in t)return Fo[e]=s}return e}const Xf="http://www.w3.org/1999/xlink";function qf(t,e,n,i,r,s=sm(e)){i&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(Xf,e.slice(6,e.length)):t.setAttributeNS(Xf,e,n):n==null||s&&!Eh(n)?t.removeAttribute(e):t.setAttribute(e,s?"":cs(n)?String(n):n)}function Yf(t,e,n,i,r){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?Rd(n):n);return}const s=t.tagName;if(e==="value"&&s!=="PROGRESS"&&!s.includes("-")){const a=s==="OPTION"?t.getAttribute("value")||"":t.value,l=n==null?t.type==="checkbox"?"on":"":String(n);(a!==l||!("_value"in t))&&(t.value=l),n==null&&t.removeAttribute(e),t._value=n;return}let o=!1;if(n===""||n==null){const a=typeof t[e];a==="boolean"?n=Eh(n):n==null&&a==="string"?(n="",o=!0):a==="number"&&(n=0,o=!0)}try{t[e]=n}catch{}o&&t.removeAttribute(r||e)}function cg(t,e,n,i){t.addEventListener(e,n,i)}function fg(t,e,n,i){t.removeEventListener(e,n,i)}const jf=Symbol("_vei");function ug(t,e,n,i,r=null){const s=t[jf]||(t[jf]={}),o=s[e];if(i&&o)o.value=i;else{const[a,l]=hg(e);if(i){const f=s[e]=mg(i,r);cg(t,a,f,l)}else o&&(fg(t,a,o,l),s[e]=void 0)}}const $f=/(?:Once|Passive|Capture)$/;function hg(t){let e;if($f.test(t)){e={};let i;for(;i=t.match($f);)t=t.slice(0,t.length-i[0].length),e[i[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):wr(t.slice(2)),e]}let Bo=0;const dg=Promise.resolve(),pg=()=>Bo||(dg.then(()=>Bo=0),Bo=Date.now());function mg(t,e){const n=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=n.attached)return;Fn(_g(i,n.value),e,5,[i])};return n.value=t,n.attached=pg(),n}function _g(t,e){if(it(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(i=>r=>!r._stopped&&i&&i(r))}else return e}const Kf=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,gg=(t,e,n,i,r,s)=>{const o=r==="svg";e==="class"?ig(t,i,o):e==="style"?og(t,n,i):so(e)?Lc(e)||ug(t,e,n,i,s):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):vg(t,e,i,o))?(Yf(t,e,i),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&qf(t,e,i,o,s,e!=="value")):t._isVueCE&&(/[A-Z]/.test(e)||!Ft(i))?Yf(t,bn(e),i,s,e):(e==="true-value"?t._trueValue=i:e==="false-value"&&(t._falseValue=i),qf(t,e,i,o))};function vg(t,e,n,i){if(i)return!!(e==="innerHTML"||e==="textContent"||e in t&&Kf(e)&&at(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const r=t.tagName;if(r==="IMG"||r==="VIDEO"||r==="CANVAS"||r==="SOURCE")return!1}return Kf(e)&&Ft(n)?!1:e in t}const xg=["ctrl","shift","alt","meta"],yg={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>xg.some(n=>t[`${n}Key`]&&!e.includes(n))},Sg=(t,e)=>{const n=t._withMods||(t._withMods={}),i=e.join(".");return n[i]||(n[i]=(r,...s)=>{for(let o=0;o<e.length;o++){const a=yg[e[o]];if(a&&a(r,e))return}return t(r,...s)})},Mg=Ot({patchProp:gg},j_);let Zf;function Tg(){return Zf||(Zf=p_(Mg))}const Eg=(...t)=>{const e=Tg().createApp(...t),{mount:n}=e;return e.mount=i=>{const r=wg(i);if(!r)return;const s=e._component;!at(s)&&!s.render&&!s.template&&(s.template=r.innerHTML),r.nodeType===1&&(r.textContent="");const o=n(r,!1,bg(r));return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},e};function bg(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function wg(t){return Ft(t)?document.querySelector(t):t}const Jc=(t,e)=>{const n=t.__vccOpts||t;for(const[i,r]of e)n[i]=r;return n},Ag={class:"flex justify-between items-center w-full px-4 py-4 md:py-10"},Rg={key:"burger",class:"w-8 h-8 text-secondary",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},Cg={key:"close",class:"w-8 h-8 text-secondary",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},Pg={class:"nav hidden md:flex md:flex-row gap-6 items-center"},Dg=["href"],Lg=["href"],Ig={__name:"Nav",setup(t){const e="/YangPortfolioPublic/docs/",n=Hh(!1),i=()=>{n.value=!n.value};return(r,s)=>{const o=qc("router-link");return fi(),Bi("nav",Ag,[s[6]||(s[6]=Jt("div",{id:"brand",class:"text-secondary font-bold"},[Jt("a",{href:"https://www.linkedin.com/in/tan-wei-yang-396305179/",target:"_blank",rel:"noopener noreferrer"}," Wei Yang ")],-1)),Jt("button",{onClick:i,class:"block md:hidden focus:outline-none transition duration-300 ease-out"},[n.value?(fi(),Bi("svg",Cg,s[1]||(s[1]=[Jt("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M6 18L18 6M6 6l12 12"},null,-1)]))):(fi(),Bi("svg",Rg,s[0]||(s[0]=[Jt("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M4 6h16M4 12h16m-7 6h7"},null,-1)])))]),Jt("div",Pg,[Pt(o,{to:"/",class:"hover:text-secondary transition-colors"},{default:hr(()=>s[2]||(s[2]=[Xr("Home")])),_:1}),Pt(o,{to:"/about",class:"hover:text-secondary transition-colors"},{default:hr(()=>s[3]||(s[3]=[Xr("About")])),_:1}),Jt("a",{href:ki(e),class:"hover:text-secondary transition-colors"},"Portfolios",8,Dg)]),Pt(Z_,{name:"menu-fade"},{default:hr(()=>[n.value?(fi(),Bi("div",{key:0,class:"fixed inset-0 z-40 bg-black bg-opacity-90 flex flex-col items-center justify-center",onClick:Sg(i,["self"])},[Pt(o,{onClick:i,to:"/",class:"text-white text-3xl py-4"},{default:hr(()=>s[4]||(s[4]=[Xr("Home")])),_:1}),Pt(o,{onClick:i,to:"/about",class:"text-white text-3xl py-4"},{default:hr(()=>s[5]||(s[5]=[Xr("About")])),_:1}),Jt("a",{onClick:i,href:ki(e),class:"text-white text-3xl py-4"},"Portfolios",8,Lg)])):I_("",!0)]),_:1})])}}},Ug=Jc(Ig,[["__scopeId","data-v-8e7afdfc"]]);/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Qc="169",Ng=0,Jf=1,Og=2,Pd=1,Fg=2,ai=3,Wi=0,un=1,ci=2,Hi=0,yr=1,Qf=2,eu=3,tu=4,Bg=5,pr=100,zg=101,kg=102,Hg=103,Gg=104,Vg=200,Wg=201,Xg=202,qg=203,Nl=204,Ol=205,Yg=206,jg=207,$g=208,Kg=209,Zg=210,Jg=211,Qg=212,e0=213,t0=214,Fl=0,Bl=1,zl=2,ts=3,kl=4,Hl=5,Gl=6,Vl=7,Dd=0,n0=1,i0=2,Gi=0,r0=1,s0=2,a0=3,o0=4,l0=5,c0=6,f0=7,Ld=300,ns=301,is=302,Wl=303,Xl=304,vo=306,ql=1e3,_r=1001,Yl=1002,Tn=1003,u0=1004,fa=1005,Dn=1006,zo=1007,gr=1008,mi=1009,Id=1010,Ud=1011,qs=1012,ef=1013,Er=1014,ui=1015,Js=1016,tf=1017,nf=1018,rs=1020,Nd=35902,Od=1021,Fd=1022,Un=1023,Bd=1024,zd=1025,Zr=1026,ss=1027,kd=1028,rf=1029,Hd=1030,sf=1031,af=1033,ka=33776,Ha=33777,Ga=33778,Va=33779,jl=35840,$l=35841,Kl=35842,Zl=35843,Jl=36196,Ql=37492,ec=37496,tc=37808,nc=37809,ic=37810,rc=37811,sc=37812,ac=37813,oc=37814,lc=37815,cc=37816,fc=37817,uc=37818,hc=37819,dc=37820,pc=37821,Wa=36492,mc=36494,_c=36495,Gd=36283,gc=36284,vc=36285,xc=36286,h0=3200,d0=3201,p0=0,m0=1,Oi="",Hn="srgb",ji="srgb-linear",of="display-p3",xo="display-p3-linear",eo="linear",wt="srgb",to="rec709",no="p3",Cr=7680,nu=519,_0=512,g0=513,v0=514,Vd=515,x0=516,y0=517,S0=518,M0=519,iu=35044,ru="300 es",hi=2e3,io=2001;class fs{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const jt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ko=Math.PI/180,yc=180/Math.PI;function Qs(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(jt[t&255]+jt[t>>8&255]+jt[t>>16&255]+jt[t>>24&255]+"-"+jt[e&255]+jt[e>>8&255]+"-"+jt[e>>16&15|64]+jt[e>>24&255]+"-"+jt[n&63|128]+jt[n>>8&255]+"-"+jt[n>>16&255]+jt[n>>24&255]+jt[i&255]+jt[i>>8&255]+jt[i>>16&255]+jt[i>>24&255]).toLowerCase()}function cn(t,e,n){return Math.max(e,Math.min(n,t))}function T0(t,e){return(t%e+e)%e}function Ho(t,e,n){return(1-n)*t+n*e}function xs(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function ln(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}class vt{constructor(e=0,n=0){vt.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(cn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ct{constructor(e,n,i,r,s,o,a,l,f){ct.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,f)}set(e,n,i,r,s,o,a,l,f){const h=this.elements;return h[0]=e,h[1]=r,h[2]=a,h[3]=n,h[4]=s,h[5]=l,h[6]=i,h[7]=o,h[8]=f,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[3],l=i[6],f=i[1],h=i[4],d=i[7],c=i[2],m=i[5],p=i[8],y=r[0],g=r[3],u=r[6],w=r[1],T=r[4],A=r[7],G=r[2],N=r[5],k=r[8];return s[0]=o*y+a*w+l*G,s[3]=o*g+a*T+l*N,s[6]=o*u+a*A+l*k,s[1]=f*y+h*w+d*G,s[4]=f*g+h*T+d*N,s[7]=f*u+h*A+d*k,s[2]=c*y+m*w+p*G,s[5]=c*g+m*T+p*N,s[8]=c*u+m*A+p*k,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],f=e[7],h=e[8];return n*o*h-n*a*f-i*s*h+i*a*l+r*s*f-r*o*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],f=e[7],h=e[8],d=h*o-a*f,c=a*l-h*s,m=f*s-o*l,p=n*d+i*c+r*m;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);const y=1/p;return e[0]=d*y,e[1]=(r*f-h*i)*y,e[2]=(a*i-r*o)*y,e[3]=c*y,e[4]=(h*n-r*l)*y,e[5]=(r*s-a*n)*y,e[6]=m*y,e[7]=(i*l-f*n)*y,e[8]=(o*n-i*s)*y,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,o,a){const l=Math.cos(s),f=Math.sin(s);return this.set(i*l,i*f,-i*(l*o+f*a)+o+e,-r*f,r*l,-r*(-f*o+l*a)+a+n,0,0,1),this}scale(e,n){return this.premultiply(Go.makeScale(e,n)),this}rotate(e){return this.premultiply(Go.makeRotation(-e)),this}translate(e,n){return this.premultiply(Go.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Go=new ct;function Wd(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function Ys(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function E0(){const t=Ys("canvas");return t.style.display="block",t}const su={};function Xa(t){t in su||(su[t]=!0)}function b0(t,e,n){return new Promise(function(i,r){function s(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:r();break;case t.TIMEOUT_EXPIRED:setTimeout(s,n);break;default:i()}}setTimeout(s,n)})}function w0(t){const e=t.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function A0(t){const e=t.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const au=new ct().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),ou=new ct().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),ys={[ji]:{transfer:eo,primaries:to,luminanceCoefficients:[.2126,.7152,.0722],toReference:t=>t,fromReference:t=>t},[Hn]:{transfer:wt,primaries:to,luminanceCoefficients:[.2126,.7152,.0722],toReference:t=>t.convertSRGBToLinear(),fromReference:t=>t.convertLinearToSRGB()},[xo]:{transfer:eo,primaries:no,luminanceCoefficients:[.2289,.6917,.0793],toReference:t=>t.applyMatrix3(ou),fromReference:t=>t.applyMatrix3(au)},[of]:{transfer:wt,primaries:no,luminanceCoefficients:[.2289,.6917,.0793],toReference:t=>t.convertSRGBToLinear().applyMatrix3(ou),fromReference:t=>t.applyMatrix3(au).convertLinearToSRGB()}},R0=new Set([ji,xo]),gt={enabled:!0,_workingColorSpace:ji,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(t){if(!R0.has(t))throw new Error(`Unsupported working color space, "${t}".`);this._workingColorSpace=t},convert:function(t,e,n){if(this.enabled===!1||e===n||!e||!n)return t;const i=ys[e].toReference,r=ys[n].fromReference;return r(i(t))},fromWorkingColorSpace:function(t,e){return this.convert(t,this._workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this._workingColorSpace)},getPrimaries:function(t){return ys[t].primaries},getTransfer:function(t){return t===Oi?eo:ys[t].transfer},getLuminanceCoefficients:function(t,e=this._workingColorSpace){return t.fromArray(ys[e].luminanceCoefficients)}};function Jr(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function Vo(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let Pr;class C0{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Pr===void 0&&(Pr=Ys("canvas")),Pr.width=e.width,Pr.height=e.height;const i=Pr.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=Pr}return n.width>2048||n.height>2048?n.toDataURL("image/jpeg",.6):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Ys("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Jr(s[o]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(Jr(n[i]/255)*255):n[i]=Jr(n[i]);return{data:n,width:e.width,height:e.height}}else return e}}let P0=0;class Xd{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:P0++}),this.uuid=Qs(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Wo(r[o].image)):s.push(Wo(r[o]))}else s=Wo(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function Wo(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?C0.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:{}}let D0=0;class Xt extends fs{constructor(e=Xt.DEFAULT_IMAGE,n=Xt.DEFAULT_MAPPING,i=_r,r=_r,s=Dn,o=gr,a=Un,l=mi,f=Xt.DEFAULT_ANISOTROPY,h=Oi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:D0++}),this.uuid=Qs(),this.name="",this.source=new Xd(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=f,this.format=a,this.internalFormat=null,this.type=l,this.offset=new vt(0,0),this.repeat=new vt(1,1),this.center=new vt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ct,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Ld)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ql:e.x=e.x-Math.floor(e.x);break;case _r:e.x=e.x<0?0:1;break;case Yl:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ql:e.y=e.y-Math.floor(e.y);break;case _r:e.y=e.y<0?0:1;break;case Yl:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Xt.DEFAULT_IMAGE=null;Xt.DEFAULT_MAPPING=Ld;Xt.DEFAULT_ANISOTROPY=1;class It{constructor(e=0,n=0,i=0,r=1){It.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*n+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*n+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*n+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,f=l[0],h=l[4],d=l[8],c=l[1],m=l[5],p=l[9],y=l[2],g=l[6],u=l[10];if(Math.abs(h-c)<.01&&Math.abs(d-y)<.01&&Math.abs(p-g)<.01){if(Math.abs(h+c)<.1&&Math.abs(d+y)<.1&&Math.abs(p+g)<.1&&Math.abs(f+m+u-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const T=(f+1)/2,A=(m+1)/2,G=(u+1)/2,N=(h+c)/4,k=(d+y)/4,q=(p+g)/4;return T>A&&T>G?T<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(T),r=N/i,s=k/i):A>G?A<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(A),i=N/r,s=q/r):G<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(G),i=k/s,r=q/s),this.set(i,r,s,n),this}let w=Math.sqrt((g-p)*(g-p)+(d-y)*(d-y)+(c-h)*(c-h));return Math.abs(w)<.001&&(w=1),this.x=(g-p)/w,this.y=(d-y)/w,this.z=(c-h)/w,this.w=Math.acos((f+m+u-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class L0 extends fs{constructor(e=1,n=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new It(0,0,e,n),this.scissorTest=!1,this.viewport=new It(0,0,e,n);const r={width:e,height:n,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Dn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const s=new Xt(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new Xd(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class br extends L0{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class qd extends Xt{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Tn,this.minFilter=Tn,this.wrapR=_r,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class I0 extends Xt{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Tn,this.minFilter=Tn,this.wrapR=_r,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ea{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,o,a){let l=i[r+0],f=i[r+1],h=i[r+2],d=i[r+3];const c=s[o+0],m=s[o+1],p=s[o+2],y=s[o+3];if(a===0){e[n+0]=l,e[n+1]=f,e[n+2]=h,e[n+3]=d;return}if(a===1){e[n+0]=c,e[n+1]=m,e[n+2]=p,e[n+3]=y;return}if(d!==y||l!==c||f!==m||h!==p){let g=1-a;const u=l*c+f*m+h*p+d*y,w=u>=0?1:-1,T=1-u*u;if(T>Number.EPSILON){const G=Math.sqrt(T),N=Math.atan2(G,u*w);g=Math.sin(g*N)/G,a=Math.sin(a*N)/G}const A=a*w;if(l=l*g+c*A,f=f*g+m*A,h=h*g+p*A,d=d*g+y*A,g===1-a){const G=1/Math.sqrt(l*l+f*f+h*h+d*d);l*=G,f*=G,h*=G,d*=G}}e[n]=l,e[n+1]=f,e[n+2]=h,e[n+3]=d}static multiplyQuaternionsFlat(e,n,i,r,s,o){const a=i[r],l=i[r+1],f=i[r+2],h=i[r+3],d=s[o],c=s[o+1],m=s[o+2],p=s[o+3];return e[n]=a*p+h*d+l*m-f*c,e[n+1]=l*p+h*c+f*d-a*m,e[n+2]=f*p+h*m+a*c-l*d,e[n+3]=h*p-a*d-l*c-f*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,f=a(i/2),h=a(r/2),d=a(s/2),c=l(i/2),m=l(r/2),p=l(s/2);switch(o){case"XYZ":this._x=c*h*d+f*m*p,this._y=f*m*d-c*h*p,this._z=f*h*p+c*m*d,this._w=f*h*d-c*m*p;break;case"YXZ":this._x=c*h*d+f*m*p,this._y=f*m*d-c*h*p,this._z=f*h*p-c*m*d,this._w=f*h*d+c*m*p;break;case"ZXY":this._x=c*h*d-f*m*p,this._y=f*m*d+c*h*p,this._z=f*h*p+c*m*d,this._w=f*h*d-c*m*p;break;case"ZYX":this._x=c*h*d-f*m*p,this._y=f*m*d+c*h*p,this._z=f*h*p-c*m*d,this._w=f*h*d+c*m*p;break;case"YZX":this._x=c*h*d+f*m*p,this._y=f*m*d+c*h*p,this._z=f*h*p-c*m*d,this._w=f*h*d-c*m*p;break;case"XZY":this._x=c*h*d-f*m*p,this._y=f*m*d-c*h*p,this._z=f*h*p+c*m*d,this._w=f*h*d+c*m*p;break;default:}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],o=n[1],a=n[5],l=n[9],f=n[2],h=n[6],d=n[10],c=i+a+d;if(c>0){const m=.5/Math.sqrt(c+1);this._w=.25/m,this._x=(h-l)*m,this._y=(s-f)*m,this._z=(o-r)*m}else if(i>a&&i>d){const m=2*Math.sqrt(1+i-a-d);this._w=(h-l)/m,this._x=.25*m,this._y=(r+o)/m,this._z=(s+f)/m}else if(a>d){const m=2*Math.sqrt(1+a-i-d);this._w=(s-f)/m,this._x=(r+o)/m,this._y=.25*m,this._z=(l+h)/m}else{const m=2*Math.sqrt(1+d-i-a);this._w=(o-r)/m,this._x=(s+f)/m,this._y=(l+h)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(cn(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,o=e._w,a=n._x,l=n._y,f=n._z,h=n._w;return this._x=i*h+o*a+r*f-s*l,this._y=r*h+o*l+s*a-i*f,this._z=s*h+o*f+i*l-r*a,this._w=o*h-i*a-r*l-s*f,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const m=1-n;return this._w=m*o+n*this._w,this._x=m*i+n*this._x,this._y=m*r+n*this._y,this._z=m*s+n*this._z,this.normalize(),this}const f=Math.sqrt(l),h=Math.atan2(f,a),d=Math.sin((1-n)*h)/f,c=Math.sin(n*h)/f;return this._w=o*d+this._w*c,this._x=i*d+this._x*c,this._y=r*d+this._y*c,this._z=s*d+this._z*c,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(n),s*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class me{constructor(e=0,n=0,i=0){me.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(lu.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(lu.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,f=2*(o*r-a*i),h=2*(a*n-s*r),d=2*(s*i-o*n);return this.x=n+l*f+o*d-a*h,this.y=i+l*h+a*f-s*d,this.z=r+l*d+s*h-o*f,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,o=n.x,a=n.y,l=n.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Xo.copy(this).projectOnVector(e),this.sub(Xo)}reflect(e){return this.sub(Xo.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(cn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Xo=new me,lu=new ea;class ta{constructor(e=new me(1/0,1/0,1/0),n=new me(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(An.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(An.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=An.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,An):An.fromBufferAttribute(s,o),An.applyMatrix4(e.matrixWorld),this.expandByPoint(An);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ua.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),ua.copy(i.boundingBox)),ua.applyMatrix4(e.matrixWorld),this.union(ua)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,An),An.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ss),ha.subVectors(this.max,Ss),Dr.subVectors(e.a,Ss),Lr.subVectors(e.b,Ss),Ir.subVectors(e.c,Ss),Ti.subVectors(Lr,Dr),Ei.subVectors(Ir,Lr),nr.subVectors(Dr,Ir);let n=[0,-Ti.z,Ti.y,0,-Ei.z,Ei.y,0,-nr.z,nr.y,Ti.z,0,-Ti.x,Ei.z,0,-Ei.x,nr.z,0,-nr.x,-Ti.y,Ti.x,0,-Ei.y,Ei.x,0,-nr.y,nr.x,0];return!qo(n,Dr,Lr,Ir,ha)||(n=[1,0,0,0,1,0,0,0,1],!qo(n,Dr,Lr,Ir,ha))?!1:(da.crossVectors(Ti,Ei),n=[da.x,da.y,da.z],qo(n,Dr,Lr,Ir,ha))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,An).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(An).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ei[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ei[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ei[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ei[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ei[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ei[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ei[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ei[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ei),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const ei=[new me,new me,new me,new me,new me,new me,new me,new me],An=new me,ua=new ta,Dr=new me,Lr=new me,Ir=new me,Ti=new me,Ei=new me,nr=new me,Ss=new me,ha=new me,da=new me,ir=new me;function qo(t,e,n,i,r){for(let s=0,o=t.length-3;s<=o;s+=3){ir.fromArray(t,s);const a=r.x*Math.abs(ir.x)+r.y*Math.abs(ir.y)+r.z*Math.abs(ir.z),l=e.dot(ir),f=n.dot(ir),h=i.dot(ir);if(Math.max(-Math.max(l,f,h),Math.min(l,f,h))>a)return!1}return!0}const U0=new ta,Ms=new me,Yo=new me;class lf{constructor(e=new me,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):U0.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ms.subVectors(e,this.center);const n=Ms.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(Ms,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Yo.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ms.copy(e.center).add(Yo)),this.expandByPoint(Ms.copy(e.center).sub(Yo))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const ti=new me,jo=new me,pa=new me,bi=new me,$o=new me,ma=new me,Ko=new me;class Yd{constructor(e=new me,n=new me(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ti)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=ti.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(ti.copy(this.origin).addScaledVector(this.direction,n),ti.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){jo.copy(e).add(n).multiplyScalar(.5),pa.copy(n).sub(e).normalize(),bi.copy(this.origin).sub(jo);const s=e.distanceTo(n)*.5,o=-this.direction.dot(pa),a=bi.dot(this.direction),l=-bi.dot(pa),f=bi.lengthSq(),h=Math.abs(1-o*o);let d,c,m,p;if(h>0)if(d=o*l-a,c=o*a-l,p=s*h,d>=0)if(c>=-p)if(c<=p){const y=1/h;d*=y,c*=y,m=d*(d+o*c+2*a)+c*(o*d+c+2*l)+f}else c=s,d=Math.max(0,-(o*c+a)),m=-d*d+c*(c+2*l)+f;else c=-s,d=Math.max(0,-(o*c+a)),m=-d*d+c*(c+2*l)+f;else c<=-p?(d=Math.max(0,-(-o*s+a)),c=d>0?-s:Math.min(Math.max(-s,-l),s),m=-d*d+c*(c+2*l)+f):c<=p?(d=0,c=Math.min(Math.max(-s,-l),s),m=c*(c+2*l)+f):(d=Math.max(0,-(o*s+a)),c=d>0?s:Math.min(Math.max(-s,-l),s),m=-d*d+c*(c+2*l)+f);else c=o>0?-s:s,d=Math.max(0,-(o*c+a)),m=-d*d+c*(c+2*l)+f;return i&&i.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(jo).addScaledVector(pa,c),m}intersectSphere(e,n){ti.subVectors(e.center,this.origin);const i=ti.dot(this.direction),r=ti.dot(ti)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,o,a,l;const f=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,c=this.origin;return f>=0?(i=(e.min.x-c.x)*f,r=(e.max.x-c.x)*f):(i=(e.max.x-c.x)*f,r=(e.min.x-c.x)*f),h>=0?(s=(e.min.y-c.y)*h,o=(e.max.y-c.y)*h):(s=(e.max.y-c.y)*h,o=(e.min.y-c.y)*h),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),d>=0?(a=(e.min.z-c.z)*d,l=(e.max.z-c.z)*d):(a=(e.max.z-c.z)*d,l=(e.min.z-c.z)*d),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,ti)!==null}intersectTriangle(e,n,i,r,s){$o.subVectors(n,e),ma.subVectors(i,e),Ko.crossVectors($o,ma);let o=this.direction.dot(Ko),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;bi.subVectors(this.origin,e);const l=a*this.direction.dot(ma.crossVectors(bi,ma));if(l<0)return null;const f=a*this.direction.dot($o.cross(bi));if(f<0||l+f>o)return null;const h=-a*bi.dot(Ko);return h<0?null:this.at(h/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ut{constructor(e,n,i,r,s,o,a,l,f,h,d,c,m,p,y,g){Ut.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,f,h,d,c,m,p,y,g)}set(e,n,i,r,s,o,a,l,f,h,d,c,m,p,y,g){const u=this.elements;return u[0]=e,u[4]=n,u[8]=i,u[12]=r,u[1]=s,u[5]=o,u[9]=a,u[13]=l,u[2]=f,u[6]=h,u[10]=d,u[14]=c,u[3]=m,u[7]=p,u[11]=y,u[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ut().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/Ur.setFromMatrixColumn(e,0).length(),s=1/Ur.setFromMatrixColumn(e,1).length(),o=1/Ur.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*o,n[9]=i[9]*o,n[10]=i[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),f=Math.sin(r),h=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){const c=o*h,m=o*d,p=a*h,y=a*d;n[0]=l*h,n[4]=-l*d,n[8]=f,n[1]=m+p*f,n[5]=c-y*f,n[9]=-a*l,n[2]=y-c*f,n[6]=p+m*f,n[10]=o*l}else if(e.order==="YXZ"){const c=l*h,m=l*d,p=f*h,y=f*d;n[0]=c+y*a,n[4]=p*a-m,n[8]=o*f,n[1]=o*d,n[5]=o*h,n[9]=-a,n[2]=m*a-p,n[6]=y+c*a,n[10]=o*l}else if(e.order==="ZXY"){const c=l*h,m=l*d,p=f*h,y=f*d;n[0]=c-y*a,n[4]=-o*d,n[8]=p+m*a,n[1]=m+p*a,n[5]=o*h,n[9]=y-c*a,n[2]=-o*f,n[6]=a,n[10]=o*l}else if(e.order==="ZYX"){const c=o*h,m=o*d,p=a*h,y=a*d;n[0]=l*h,n[4]=p*f-m,n[8]=c*f+y,n[1]=l*d,n[5]=y*f+c,n[9]=m*f-p,n[2]=-f,n[6]=a*l,n[10]=o*l}else if(e.order==="YZX"){const c=o*l,m=o*f,p=a*l,y=a*f;n[0]=l*h,n[4]=y-c*d,n[8]=p*d+m,n[1]=d,n[5]=o*h,n[9]=-a*h,n[2]=-f*h,n[6]=m*d+p,n[10]=c-y*d}else if(e.order==="XZY"){const c=o*l,m=o*f,p=a*l,y=a*f;n[0]=l*h,n[4]=-d,n[8]=f*h,n[1]=c*d+y,n[5]=o*h,n[9]=m*d-p,n[2]=p*d-m,n[6]=a*h,n[10]=y*d+c}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(N0,e,O0)}lookAt(e,n,i){const r=this.elements;return pn.subVectors(e,n),pn.lengthSq()===0&&(pn.z=1),pn.normalize(),wi.crossVectors(i,pn),wi.lengthSq()===0&&(Math.abs(i.z)===1?pn.x+=1e-4:pn.z+=1e-4,pn.normalize(),wi.crossVectors(i,pn)),wi.normalize(),_a.crossVectors(pn,wi),r[0]=wi.x,r[4]=_a.x,r[8]=pn.x,r[1]=wi.y,r[5]=_a.y,r[9]=pn.y,r[2]=wi.z,r[6]=_a.z,r[10]=pn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[4],l=i[8],f=i[12],h=i[1],d=i[5],c=i[9],m=i[13],p=i[2],y=i[6],g=i[10],u=i[14],w=i[3],T=i[7],A=i[11],G=i[15],N=r[0],k=r[4],q=r[8],J=r[12],b=r[1],P=r[5],V=r[9],j=r[13],ce=r[2],se=r[6],ae=r[10],_e=r[14],ie=r[3],Ne=r[7],ze=r[11],He=r[15];return s[0]=o*N+a*b+l*ce+f*ie,s[4]=o*k+a*P+l*se+f*Ne,s[8]=o*q+a*V+l*ae+f*ze,s[12]=o*J+a*j+l*_e+f*He,s[1]=h*N+d*b+c*ce+m*ie,s[5]=h*k+d*P+c*se+m*Ne,s[9]=h*q+d*V+c*ae+m*ze,s[13]=h*J+d*j+c*_e+m*He,s[2]=p*N+y*b+g*ce+u*ie,s[6]=p*k+y*P+g*se+u*Ne,s[10]=p*q+y*V+g*ae+u*ze,s[14]=p*J+y*j+g*_e+u*He,s[3]=w*N+T*b+A*ce+G*ie,s[7]=w*k+T*P+A*se+G*Ne,s[11]=w*q+T*V+A*ae+G*ze,s[15]=w*J+T*j+A*_e+G*He,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],f=e[13],h=e[2],d=e[6],c=e[10],m=e[14],p=e[3],y=e[7],g=e[11],u=e[15];return p*(+s*l*d-r*f*d-s*a*c+i*f*c+r*a*m-i*l*m)+y*(+n*l*m-n*f*c+s*o*c-r*o*m+r*f*h-s*l*h)+g*(+n*f*d-n*a*m-s*o*d+i*o*m+s*a*h-i*f*h)+u*(-r*a*h-n*l*d+n*a*c+r*o*d-i*o*c+i*l*h)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],f=e[7],h=e[8],d=e[9],c=e[10],m=e[11],p=e[12],y=e[13],g=e[14],u=e[15],w=d*g*f-y*c*f+y*l*m-a*g*m-d*l*u+a*c*u,T=p*c*f-h*g*f-p*l*m+o*g*m+h*l*u-o*c*u,A=h*y*f-p*d*f+p*a*m-o*y*m-h*a*u+o*d*u,G=p*d*l-h*y*l-p*a*c+o*y*c+h*a*g-o*d*g,N=n*w+i*T+r*A+s*G;if(N===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const k=1/N;return e[0]=w*k,e[1]=(y*c*s-d*g*s-y*r*m+i*g*m+d*r*u-i*c*u)*k,e[2]=(a*g*s-y*l*s+y*r*f-i*g*f-a*r*u+i*l*u)*k,e[3]=(d*l*s-a*c*s-d*r*f+i*c*f+a*r*m-i*l*m)*k,e[4]=T*k,e[5]=(h*g*s-p*c*s+p*r*m-n*g*m-h*r*u+n*c*u)*k,e[6]=(p*l*s-o*g*s-p*r*f+n*g*f+o*r*u-n*l*u)*k,e[7]=(o*c*s-h*l*s+h*r*f-n*c*f-o*r*m+n*l*m)*k,e[8]=A*k,e[9]=(p*d*s-h*y*s-p*i*m+n*y*m+h*i*u-n*d*u)*k,e[10]=(o*y*s-p*a*s+p*i*f-n*y*f-o*i*u+n*a*u)*k,e[11]=(h*a*s-o*d*s-h*i*f+n*d*f+o*i*m-n*a*m)*k,e[12]=G*k,e[13]=(h*y*r-p*d*r+p*i*c-n*y*c-h*i*g+n*d*g)*k,e[14]=(p*a*r-o*y*r-p*i*l+n*y*l+o*i*g-n*a*g)*k,e[15]=(o*d*r-h*a*r+h*i*l-n*d*l-o*i*c+n*a*c)*k,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,o=e.x,a=e.y,l=e.z,f=s*o,h=s*a;return this.set(f*o+i,f*a-r*l,f*l+r*a,0,f*a+r*l,h*a+i,h*l-r*o,0,f*l-r*a,h*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,o=n._y,a=n._z,l=n._w,f=s+s,h=o+o,d=a+a,c=s*f,m=s*h,p=s*d,y=o*h,g=o*d,u=a*d,w=l*f,T=l*h,A=l*d,G=i.x,N=i.y,k=i.z;return r[0]=(1-(y+u))*G,r[1]=(m+A)*G,r[2]=(p-T)*G,r[3]=0,r[4]=(m-A)*N,r[5]=(1-(c+u))*N,r[6]=(g+w)*N,r[7]=0,r[8]=(p+T)*k,r[9]=(g-w)*k,r[10]=(1-(c+y))*k,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let s=Ur.set(r[0],r[1],r[2]).length();const o=Ur.set(r[4],r[5],r[6]).length(),a=Ur.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Rn.copy(this);const f=1/s,h=1/o,d=1/a;return Rn.elements[0]*=f,Rn.elements[1]*=f,Rn.elements[2]*=f,Rn.elements[4]*=h,Rn.elements[5]*=h,Rn.elements[6]*=h,Rn.elements[8]*=d,Rn.elements[9]*=d,Rn.elements[10]*=d,n.setFromRotationMatrix(Rn),i.x=s,i.y=o,i.z=a,this}makePerspective(e,n,i,r,s,o,a=hi){const l=this.elements,f=2*s/(n-e),h=2*s/(i-r),d=(n+e)/(n-e),c=(i+r)/(i-r);let m,p;if(a===hi)m=-(o+s)/(o-s),p=-2*o*s/(o-s);else if(a===io)m=-o/(o-s),p=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=f,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=h,l[9]=c,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=p,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,n,i,r,s,o,a=hi){const l=this.elements,f=1/(n-e),h=1/(i-r),d=1/(o-s),c=(n+e)*f,m=(i+r)*h;let p,y;if(a===hi)p=(o+s)*d,y=-2*d;else if(a===io)p=s*d,y=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*f,l[4]=0,l[8]=0,l[12]=-c,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=y,l[14]=-p,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const Ur=new me,Rn=new Ut,N0=new me(0,0,0),O0=new me(1,1,1),wi=new me,_a=new me,pn=new me,cu=new Ut,fu=new ea;class _i{constructor(e=0,n=0,i=0,r=_i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],f=r[5],h=r[9],d=r[2],c=r[6],m=r[10];switch(n){case"XYZ":this._y=Math.asin(cn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,m),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(c,f),this._z=0);break;case"YXZ":this._x=Math.asin(-cn(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(l,f)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(cn(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(-d,m),this._z=Math.atan2(-o,f)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-cn(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(c,m),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,f));break;case"YZX":this._z=Math.asin(cn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,f),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-cn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(c,f),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-h,m),this._y=0);break;default:}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return cu.makeRotationFromQuaternion(e),this.setFromRotationMatrix(cu,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return fu.setFromEuler(this),this.setFromQuaternion(fu,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}_i.DEFAULT_ORDER="XYZ";class cf{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let F0=0;const uu=new me,Nr=new ea,ni=new Ut,ga=new me,Ts=new me,B0=new me,z0=new ea,hu=new me(1,0,0),du=new me(0,1,0),pu=new me(0,0,1),mu={type:"added"},k0={type:"removed"},Or={type:"childadded",child:null},Zo={type:"childremoved",child:null};class hn extends fs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:F0++}),this.uuid=Qs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=hn.DEFAULT_UP.clone();const e=new me,n=new _i,i=new ea,r=new me(1,1,1);function s(){i.setFromEuler(n,!1)}function o(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Ut},normalMatrix:{value:new ct}}),this.matrix=new Ut,this.matrixWorld=new Ut,this.matrixAutoUpdate=hn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=hn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new cf,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Nr.setFromAxisAngle(e,n),this.quaternion.multiply(Nr),this}rotateOnWorldAxis(e,n){return Nr.setFromAxisAngle(e,n),this.quaternion.premultiply(Nr),this}rotateX(e){return this.rotateOnAxis(hu,e)}rotateY(e){return this.rotateOnAxis(du,e)}rotateZ(e){return this.rotateOnAxis(pu,e)}translateOnAxis(e,n){return uu.copy(e).applyQuaternion(this.quaternion),this.position.add(uu.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(hu,e)}translateY(e){return this.translateOnAxis(du,e)}translateZ(e){return this.translateOnAxis(pu,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ni.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?ga.copy(e):ga.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Ts.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ni.lookAt(Ts,ga,this.up):ni.lookAt(ga,Ts,this.up),this.quaternion.setFromRotationMatrix(ni),r&&(ni.extractRotation(r.matrixWorld),Nr.setFromRotationMatrix(ni),this.quaternion.premultiply(Nr.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?this:(e&&e.isObject3D&&(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(mu),Or.child=e,this.dispatchEvent(Or),Or.child=null),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(k0),Zo.child=e,this.dispatchEvent(Zo),Zo.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ni.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ni.multiply(e.parent.matrixWorld)),e.applyMatrix4(ni),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(mu),Or.child=e,this.dispatchEvent(Or),Or.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,n);if(o!==void 0)return o}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ts,e,B0),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ts,z0,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let f=0,h=l.length;f<h;f++){const d=l[f];s(e.shapes,d)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,f=this.material.length;l<f;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(n){const a=o(e.geometries),l=o(e.materials),f=o(e.textures),h=o(e.images),d=o(e.shapes),c=o(e.skeletons),m=o(e.animations),p=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),f.length>0&&(i.textures=f),h.length>0&&(i.images=h),d.length>0&&(i.shapes=d),c.length>0&&(i.skeletons=c),m.length>0&&(i.animations=m),p.length>0&&(i.nodes=p)}return i.object=r,i;function o(a){const l=[];for(const f in a){const h=a[f];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}hn.DEFAULT_UP=new me(0,1,0);hn.DEFAULT_MATRIX_AUTO_UPDATE=!0;hn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Cn=new me,ii=new me,Jo=new me,ri=new me,Fr=new me,Br=new me,_u=new me,Qo=new me,el=new me,tl=new me,nl=new It,il=new It,rl=new It;class Ln{constructor(e=new me,n=new me,i=new me){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),Cn.subVectors(e,n),r.cross(Cn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){Cn.subVectors(r,n),ii.subVectors(i,n),Jo.subVectors(e,n);const o=Cn.dot(Cn),a=Cn.dot(ii),l=Cn.dot(Jo),f=ii.dot(ii),h=ii.dot(Jo),d=o*f-a*a;if(d===0)return s.set(0,0,0),null;const c=1/d,m=(f*l-a*h)*c,p=(o*h-a*l)*c;return s.set(1-m-p,p,m)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,ri)===null?!1:ri.x>=0&&ri.y>=0&&ri.x+ri.y<=1}static getInterpolation(e,n,i,r,s,o,a,l){return this.getBarycoord(e,n,i,r,ri)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,ri.x),l.addScaledVector(o,ri.y),l.addScaledVector(a,ri.z),l)}static getInterpolatedAttribute(e,n,i,r,s,o){return nl.setScalar(0),il.setScalar(0),rl.setScalar(0),nl.fromBufferAttribute(e,n),il.fromBufferAttribute(e,i),rl.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(nl,s.x),o.addScaledVector(il,s.y),o.addScaledVector(rl,s.z),o}static isFrontFacing(e,n,i,r){return Cn.subVectors(i,n),ii.subVectors(e,n),Cn.cross(ii).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Cn.subVectors(this.c,this.b),ii.subVectors(this.a,this.b),Cn.cross(ii).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Ln.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return Ln.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,s){return Ln.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return Ln.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Ln.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let o,a;Fr.subVectors(r,i),Br.subVectors(s,i),Qo.subVectors(e,i);const l=Fr.dot(Qo),f=Br.dot(Qo);if(l<=0&&f<=0)return n.copy(i);el.subVectors(e,r);const h=Fr.dot(el),d=Br.dot(el);if(h>=0&&d<=h)return n.copy(r);const c=l*d-h*f;if(c<=0&&l>=0&&h<=0)return o=l/(l-h),n.copy(i).addScaledVector(Fr,o);tl.subVectors(e,s);const m=Fr.dot(tl),p=Br.dot(tl);if(p>=0&&m<=p)return n.copy(s);const y=m*f-l*p;if(y<=0&&f>=0&&p<=0)return a=f/(f-p),n.copy(i).addScaledVector(Br,a);const g=h*p-m*d;if(g<=0&&d-h>=0&&m-p>=0)return _u.subVectors(s,r),a=(d-h)/(d-h+(m-p)),n.copy(r).addScaledVector(_u,a);const u=1/(g+y+c);return o=y*u,a=c*u,n.copy(i).addScaledVector(Fr,o).addScaledVector(Br,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const jd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ai={h:0,s:0,l:0},va={h:0,s:0,l:0};function sl(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class yt{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Hn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,gt.toWorkingColorSpace(this,n),this}setRGB(e,n,i,r=gt.workingColorSpace){return this.r=e,this.g=n,this.b=i,gt.toWorkingColorSpace(this,r),this}setHSL(e,n,i,r=gt.workingColorSpace){if(e=T0(e,1),n=cn(n,0,1),i=cn(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,o=2*i-s;this.r=sl(o,s,e+1/3),this.g=sl(o,s,e),this.b=sl(o,s,e-1/3)}return gt.toWorkingColorSpace(this,r),this}setStyle(e,n=Hn){function i(s){s!==void 0&&parseFloat(s)<1}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(o===6)return this.setHex(parseInt(s,16),n)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Hn){const i=jd[e.toLowerCase()];return i!==void 0&&this.setHex(i,n),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Jr(e.r),this.g=Jr(e.g),this.b=Jr(e.b),this}copyLinearToSRGB(e){return this.r=Vo(e.r),this.g=Vo(e.g),this.b=Vo(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Hn){return gt.fromWorkingColorSpace($t.copy(this),e),Math.round(cn($t.r*255,0,255))*65536+Math.round(cn($t.g*255,0,255))*256+Math.round(cn($t.b*255,0,255))}getHexString(e=Hn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=gt.workingColorSpace){gt.fromWorkingColorSpace($t.copy(this),n);const i=$t.r,r=$t.g,s=$t.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,f;const h=(a+o)/2;if(a===o)l=0,f=0;else{const d=o-a;switch(f=h<=.5?d/(o+a):d/(2-o-a),o){case i:l=(r-s)/d+(r<s?6:0);break;case r:l=(s-i)/d+2;break;case s:l=(i-r)/d+4;break}l/=6}return e.h=l,e.s=f,e.l=h,e}getRGB(e,n=gt.workingColorSpace){return gt.fromWorkingColorSpace($t.copy(this),n),e.r=$t.r,e.g=$t.g,e.b=$t.b,e}getStyle(e=Hn){gt.fromWorkingColorSpace($t.copy(this),e);const n=$t.r,i=$t.g,r=$t.b;return e!==Hn?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(Ai),this.setHSL(Ai.h+e,Ai.s+n,Ai.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(Ai),e.getHSL(va);const i=Ho(Ai.h,va.h,n),r=Ho(Ai.s,va.s,n),s=Ho(Ai.l,va.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const $t=new yt;yt.NAMES=jd;let H0=0;class yo extends fs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:H0++}),this.uuid=Qs(),this.name="",this.type="Material",this.blending=yr,this.side=Wi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Nl,this.blendDst=Ol,this.blendEquation=pr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new yt(0,0,0),this.blendAlpha=0,this.depthFunc=ts,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=nu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Cr,this.stencilZFail=Cr,this.stencilZPass=Cr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0)continue;const r=this[n];r!==void 0&&(r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i)}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==yr&&(i.blending=this.blending),this.side!==Wi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Nl&&(i.blendSrc=this.blendSrc),this.blendDst!==Ol&&(i.blendDst=this.blendDst),this.blendEquation!==pr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==ts&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==nu&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Cr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Cr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Cr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(n){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){}}class ff extends yo{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new yt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new _i,this.combine=Dd,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Nt=new me,xa=new vt;class dn{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=iu,this.updateRanges=[],this.gpuType=ui,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)xa.fromBufferAttribute(this,n),xa.applyMatrix3(e),this.setXY(n,xa.x,xa.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)Nt.fromBufferAttribute(this,n),Nt.applyMatrix3(e),this.setXYZ(n,Nt.x,Nt.y,Nt.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)Nt.fromBufferAttribute(this,n),Nt.applyMatrix4(e),this.setXYZ(n,Nt.x,Nt.y,Nt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)Nt.fromBufferAttribute(this,n),Nt.applyNormalMatrix(e),this.setXYZ(n,Nt.x,Nt.y,Nt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)Nt.fromBufferAttribute(this,n),Nt.transformDirection(e),this.setXYZ(n,Nt.x,Nt.y,Nt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=xs(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=ln(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=xs(n,this.array)),n}setX(e,n){return this.normalized&&(n=ln(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=xs(n,this.array)),n}setY(e,n){return this.normalized&&(n=ln(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=xs(n,this.array)),n}setZ(e,n){return this.normalized&&(n=ln(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=xs(n,this.array)),n}setW(e,n){return this.normalized&&(n=ln(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=ln(n,this.array),i=ln(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=ln(n,this.array),i=ln(i,this.array),r=ln(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=ln(n,this.array),i=ln(i,this.array),r=ln(r,this.array),s=ln(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==iu&&(e.usage=this.usage),e}}class $d extends dn{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class Kd extends dn{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class Sr extends dn{constructor(e,n,i){super(new Float32Array(e),n,i)}}let G0=0;const yn=new Ut,al=new hn,zr=new me,mn=new ta,Es=new ta,Gt=new me;class $i extends fs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:G0++}),this.uuid=Qs(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Wd(e)?Kd:$d)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new ct().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return yn.makeRotationFromQuaternion(e),this.applyMatrix4(yn),this}rotateX(e){return yn.makeRotationX(e),this.applyMatrix4(yn),this}rotateY(e){return yn.makeRotationY(e),this.applyMatrix4(yn),this}rotateZ(e){return yn.makeRotationZ(e),this.applyMatrix4(yn),this}translate(e,n,i){return yn.makeTranslation(e,n,i),this.applyMatrix4(yn),this}scale(e,n,i){return yn.makeScale(e,n,i),this.applyMatrix4(yn),this}lookAt(e){return al.lookAt(e),al.updateMatrix(),this.applyMatrix4(al.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(zr).negate(),this.translate(zr.x,zr.y,zr.z),this}setFromPoints(e){const n=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];n.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Sr(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ta);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){this.boundingBox.set(new me(-1/0,-1/0,-1/0),new me(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];mn.setFromBufferAttribute(s),this.morphTargetsRelative?(Gt.addVectors(this.boundingBox.min,mn.min),this.boundingBox.expandByPoint(Gt),Gt.addVectors(this.boundingBox.max,mn.max),this.boundingBox.expandByPoint(Gt)):(this.boundingBox.expandByPoint(mn.min),this.boundingBox.expandByPoint(mn.max))}}else this.boundingBox.makeEmpty();isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new lf);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){this.boundingSphere.set(new me,1/0);return}if(e){const i=this.boundingSphere.center;if(mn.setFromBufferAttribute(e),n)for(let s=0,o=n.length;s<o;s++){const a=n[s];Es.setFromBufferAttribute(a),this.morphTargetsRelative?(Gt.addVectors(mn.min,Es.min),mn.expandByPoint(Gt),Gt.addVectors(mn.max,Es.max),mn.expandByPoint(Gt)):(mn.expandByPoint(Es.min),mn.expandByPoint(Es.max))}mn.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)Gt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Gt));if(n)for(let s=0,o=n.length;s<o;s++){const a=n[s],l=this.morphTargetsRelative;for(let f=0,h=a.count;f<h;f++)Gt.fromBufferAttribute(a,f),l&&(zr.fromBufferAttribute(e,f),Gt.add(zr)),r=Math.max(r,i.distanceToSquared(Gt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0)return;const i=n.position,r=n.normal,s=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new dn(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let q=0;q<i.count;q++)a[q]=new me,l[q]=new me;const f=new me,h=new me,d=new me,c=new vt,m=new vt,p=new vt,y=new me,g=new me;function u(q,J,b){f.fromBufferAttribute(i,q),h.fromBufferAttribute(i,J),d.fromBufferAttribute(i,b),c.fromBufferAttribute(s,q),m.fromBufferAttribute(s,J),p.fromBufferAttribute(s,b),h.sub(f),d.sub(f),m.sub(c),p.sub(c);const P=1/(m.x*p.y-p.x*m.y);isFinite(P)&&(y.copy(h).multiplyScalar(p.y).addScaledVector(d,-m.y).multiplyScalar(P),g.copy(d).multiplyScalar(m.x).addScaledVector(h,-p.x).multiplyScalar(P),a[q].add(y),a[J].add(y),a[b].add(y),l[q].add(g),l[J].add(g),l[b].add(g))}let w=this.groups;w.length===0&&(w=[{start:0,count:e.count}]);for(let q=0,J=w.length;q<J;++q){const b=w[q],P=b.start,V=b.count;for(let j=P,ce=P+V;j<ce;j+=3)u(e.getX(j+0),e.getX(j+1),e.getX(j+2))}const T=new me,A=new me,G=new me,N=new me;function k(q){G.fromBufferAttribute(r,q),N.copy(G);const J=a[q];T.copy(J),T.sub(G.multiplyScalar(G.dot(J))).normalize(),A.crossVectors(N,J);const P=A.dot(l[q])<0?-1:1;o.setXYZW(q,T.x,T.y,T.z,P)}for(let q=0,J=w.length;q<J;++q){const b=w[q],P=b.start,V=b.count;for(let j=P,ce=P+V;j<ce;j+=3)k(e.getX(j+0)),k(e.getX(j+1)),k(e.getX(j+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new dn(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let c=0,m=i.count;c<m;c++)i.setXYZ(c,0,0,0);const r=new me,s=new me,o=new me,a=new me,l=new me,f=new me,h=new me,d=new me;if(e)for(let c=0,m=e.count;c<m;c+=3){const p=e.getX(c+0),y=e.getX(c+1),g=e.getX(c+2);r.fromBufferAttribute(n,p),s.fromBufferAttribute(n,y),o.fromBufferAttribute(n,g),h.subVectors(o,s),d.subVectors(r,s),h.cross(d),a.fromBufferAttribute(i,p),l.fromBufferAttribute(i,y),f.fromBufferAttribute(i,g),a.add(h),l.add(h),f.add(h),i.setXYZ(p,a.x,a.y,a.z),i.setXYZ(y,l.x,l.y,l.z),i.setXYZ(g,f.x,f.y,f.z)}else for(let c=0,m=n.count;c<m;c+=3)r.fromBufferAttribute(n,c+0),s.fromBufferAttribute(n,c+1),o.fromBufferAttribute(n,c+2),h.subVectors(o,s),d.subVectors(r,s),h.cross(d),i.setXYZ(c+0,h.x,h.y,h.z),i.setXYZ(c+1,h.x,h.y,h.z),i.setXYZ(c+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Gt.fromBufferAttribute(e,n),Gt.normalize(),e.setXYZ(n,Gt.x,Gt.y,Gt.z)}toNonIndexed(){function e(a,l){const f=a.array,h=a.itemSize,d=a.normalized,c=new f.constructor(l.length*h);let m=0,p=0;for(let y=0,g=l.length;y<g;y++){a.isInterleavedBufferAttribute?m=l[y]*a.data.stride+a.offset:m=l[y]*h;for(let u=0;u<h;u++)c[p++]=f[m++]}return new dn(c,h,d)}if(this.index===null)return this;const n=new $i,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],f=e(l,i);n.setAttribute(a,f)}const s=this.morphAttributes;for(const a in s){const l=[],f=s[a];for(let h=0,d=f.length;h<d;h++){const c=f[h],m=e(c,i);l.push(m)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const f=o[a];n.addGroup(f.start,f.count,f.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const f in l)l[f]!==void 0&&(e[f]=l[f]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const f=i[l];e.data.attributes[l]=f.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const f=this.morphAttributes[l],h=[];for(let d=0,c=f.length;d<c;d++){const m=f[d];h.push(m.toJSON(e.data))}h.length>0&&(r[l]=h,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(n));const r=e.attributes;for(const f in r){const h=r[f];this.setAttribute(f,h.clone(n))}const s=e.morphAttributes;for(const f in s){const h=[],d=s[f];for(let c=0,m=d.length;c<m;c++)h.push(d[c].clone(n));this.morphAttributes[f]=h}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let f=0,h=o.length;f<h;f++){const d=o[f];this.addGroup(d.start,d.count,d.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const gu=new Ut,rr=new Yd,ya=new lf,vu=new me,Sa=new me,Ma=new me,Ta=new me,ol=new me,Ea=new me,xu=new me,ba=new me;class En extends hn{constructor(e=new $i,n=new ff){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){Ea.set(0,0,0);for(let l=0,f=s.length;l<f;l++){const h=a[l],d=s[l];h!==0&&(ol.fromBufferAttribute(d,e),o?Ea.addScaledVector(ol,h):Ea.addScaledVector(ol.sub(n),h))}n.add(Ea)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),ya.copy(i.boundingSphere),ya.applyMatrix4(s),rr.copy(e.ray).recast(e.near),!(ya.containsPoint(rr.origin)===!1&&(rr.intersectSphere(ya,vu)===null||rr.origin.distanceToSquared(vu)>(e.far-e.near)**2))&&(gu.copy(s).invert(),rr.copy(e.ray).applyMatrix4(gu),!(i.boundingBox!==null&&rr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,rr)))}_computeIntersections(e,n,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,f=s.attributes.uv,h=s.attributes.uv1,d=s.attributes.normal,c=s.groups,m=s.drawRange;if(a!==null)if(Array.isArray(o))for(let p=0,y=c.length;p<y;p++){const g=c[p],u=o[g.materialIndex],w=Math.max(g.start,m.start),T=Math.min(a.count,Math.min(g.start+g.count,m.start+m.count));for(let A=w,G=T;A<G;A+=3){const N=a.getX(A),k=a.getX(A+1),q=a.getX(A+2);r=wa(this,u,e,i,f,h,d,N,k,q),r&&(r.faceIndex=Math.floor(A/3),r.face.materialIndex=g.materialIndex,n.push(r))}}else{const p=Math.max(0,m.start),y=Math.min(a.count,m.start+m.count);for(let g=p,u=y;g<u;g+=3){const w=a.getX(g),T=a.getX(g+1),A=a.getX(g+2);r=wa(this,o,e,i,f,h,d,w,T,A),r&&(r.faceIndex=Math.floor(g/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let p=0,y=c.length;p<y;p++){const g=c[p],u=o[g.materialIndex],w=Math.max(g.start,m.start),T=Math.min(l.count,Math.min(g.start+g.count,m.start+m.count));for(let A=w,G=T;A<G;A+=3){const N=A,k=A+1,q=A+2;r=wa(this,u,e,i,f,h,d,N,k,q),r&&(r.faceIndex=Math.floor(A/3),r.face.materialIndex=g.materialIndex,n.push(r))}}else{const p=Math.max(0,m.start),y=Math.min(l.count,m.start+m.count);for(let g=p,u=y;g<u;g+=3){const w=g,T=g+1,A=g+2;r=wa(this,o,e,i,f,h,d,w,T,A),r&&(r.faceIndex=Math.floor(g/3),n.push(r))}}}}function V0(t,e,n,i,r,s,o,a){let l;if(e.side===un?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===Wi,a),l===null)return null;ba.copy(a),ba.applyMatrix4(t.matrixWorld);const f=n.ray.origin.distanceTo(ba);return f<n.near||f>n.far?null:{distance:f,point:ba.clone(),object:t}}function wa(t,e,n,i,r,s,o,a,l,f){t.getVertexPosition(a,Sa),t.getVertexPosition(l,Ma),t.getVertexPosition(f,Ta);const h=V0(t,e,n,i,Sa,Ma,Ta,xu);if(h){const d=new me;Ln.getBarycoord(xu,Sa,Ma,Ta,d),r&&(h.uv=Ln.getInterpolatedAttribute(r,a,l,f,d,new vt)),s&&(h.uv1=Ln.getInterpolatedAttribute(s,a,l,f,d,new vt)),o&&(h.normal=Ln.getInterpolatedAttribute(o,a,l,f,d,new me),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));const c={a,b:l,c:f,normal:new me,materialIndex:0};Ln.getNormal(Sa,Ma,Ta,c.normal),h.face=c,h.barycoord=d}return h}class na extends $i{constructor(e=1,n=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],f=[],h=[],d=[];let c=0,m=0;p("z","y","x",-1,-1,i,n,e,o,s,0),p("z","y","x",1,-1,i,n,-e,o,s,1),p("x","z","y",1,1,e,i,n,r,o,2),p("x","z","y",1,-1,e,i,-n,r,o,3),p("x","y","z",1,-1,e,n,i,r,s,4),p("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new Sr(f,3)),this.setAttribute("normal",new Sr(h,3)),this.setAttribute("uv",new Sr(d,2));function p(y,g,u,w,T,A,G,N,k,q,J){const b=A/k,P=G/q,V=A/2,j=G/2,ce=N/2,se=k+1,ae=q+1;let _e=0,ie=0;const Ne=new me;for(let ze=0;ze<ae;ze++){const He=ze*P-j;for(let Qe=0;Qe<se;Qe++){const rt=Qe*b-V;Ne[y]=rt*w,Ne[g]=He*T,Ne[u]=ce,f.push(Ne.x,Ne.y,Ne.z),Ne[y]=0,Ne[g]=0,Ne[u]=N>0?1:-1,h.push(Ne.x,Ne.y,Ne.z),d.push(Qe/k),d.push(1-ze/q),_e+=1}}for(let ze=0;ze<q;ze++)for(let He=0;He<k;He++){const Qe=c+He+se*ze,rt=c+He+se*(ze+1),Se=c+(He+1)+se*(ze+1),Pe=c+(He+1)+se*ze;l.push(Qe,rt,Pe),l.push(rt,Se,Pe),ie+=6}a.addGroup(m,ie,J),m+=ie,c+=_e}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new na(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function as(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?e[n][i]=null:e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function rn(t){const e={};for(let n=0;n<t.length;n++){const i=as(t[n]);for(const r in i)e[r]=i[r]}return e}function W0(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function Zd(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:gt.workingColorSpace}const X0={clone:as,merge:rn};var q0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Y0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Yn extends yo{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=q0,this.fragmentShader=Y0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=as(e.uniforms),this.uniformsGroups=W0(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?n.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?n.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?n.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?n.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?n.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?n.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?n.uniforms[r]={type:"m4",value:o.toArray()}:n.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class Jd extends hn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ut,this.projectionMatrix=new Ut,this.projectionMatrixInverse=new Ut,this.coordinateSystem=hi}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ri=new me,yu=new vt,Su=new vt;class Sn extends Jd{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=yc*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ko*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return yc*2*Math.atan(Math.tan(ko*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){Ri.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ri.x,Ri.y).multiplyScalar(-e/Ri.z),Ri.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ri.x,Ri.y).multiplyScalar(-e/Ri.z)}getViewSize(e,n){return this.getViewBounds(e,yu,Su),n.subVectors(Su,yu)}setViewOffset(e,n,i,r,s,o){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(ko*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,f=o.fullHeight;s+=o.offsetX*r/l,n-=o.offsetY*i/f,r*=o.width/l,i*=o.height/f}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const kr=-90,Hr=1;class j0 extends hn{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Sn(kr,Hr,e,n);r.layers=this.layers,this.add(r);const s=new Sn(kr,Hr,e,n);s.layers=this.layers,this.add(s);const o=new Sn(kr,Hr,e,n);o.layers=this.layers,this.add(o);const a=new Sn(kr,Hr,e,n);a.layers=this.layers,this.add(a);const l=new Sn(kr,Hr,e,n);l.layers=this.layers,this.add(l);const f=new Sn(kr,Hr,e,n);f.layers=this.layers,this.add(f)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,o,a,l]=n;for(const f of n)this.remove(f);if(e===hi)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===io)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const f of n)this.add(f),f.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,f,h]=this.children,d=e.getRenderTarget(),c=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;const y=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(n,s),e.setRenderTarget(i,1,r),e.render(n,o),e.setRenderTarget(i,2,r),e.render(n,a),e.setRenderTarget(i,3,r),e.render(n,l),e.setRenderTarget(i,4,r),e.render(n,f),i.texture.generateMipmaps=y,e.setRenderTarget(i,5,r),e.render(n,h),e.setRenderTarget(d,c,m),e.xr.enabled=p,i.texture.needsPMREMUpdate=!0}}class Qd extends Xt{constructor(e,n,i,r,s,o,a,l,f,h){e=e!==void 0?e:[],n=n!==void 0?n:ns,super(e,n,i,r,s,o,a,l,f,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class $0 extends br{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new Qd(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Dn}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new na(5,5,5),s=new Yn({name:"CubemapFromEquirect",uniforms:as(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:un,blending:Hi});s.uniforms.tEquirect.value=n;const o=new En(r,s),a=n.minFilter;return n.minFilter===gr&&(n.minFilter=Dn),new j0(1,10,this).update(e,o),n.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,n,i,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(n,i,r);e.setRenderTarget(s)}}const ll=new me,K0=new me,Z0=new ct;class Ii{constructor(e=new me(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=ll.subVectors(i,n).cross(K0.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(ll),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:n.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||Z0.getNormalMatrix(e),r=this.coplanarPoint(ll).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const sr=new lf,Aa=new me;class ep{constructor(e=new Ii,n=new Ii,i=new Ii,r=new Ii,s=new Ii,o=new Ii){this.planes=[e,n,i,r,s,o]}set(e,n,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=hi){const i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],f=r[4],h=r[5],d=r[6],c=r[7],m=r[8],p=r[9],y=r[10],g=r[11],u=r[12],w=r[13],T=r[14],A=r[15];if(i[0].setComponents(l-s,c-f,g-m,A-u).normalize(),i[1].setComponents(l+s,c+f,g+m,A+u).normalize(),i[2].setComponents(l+o,c+h,g+p,A+w).normalize(),i[3].setComponents(l-o,c-h,g-p,A-w).normalize(),i[4].setComponents(l-a,c-d,g-y,A-T).normalize(),n===hi)i[5].setComponents(l+a,c+d,g+y,A+T).normalize();else if(n===io)i[5].setComponents(a,d,y,T).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),sr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),sr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(sr)}intersectsSprite(e){return sr.center.set(0,0,0),sr.radius=.7071067811865476,sr.applyMatrix4(e.matrixWorld),this.intersectsSphere(sr)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(Aa.x=r.normal.x>0?e.max.x:e.min.x,Aa.y=r.normal.y>0?e.max.y:e.min.y,Aa.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Aa)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function tp(){let t=null,e=!1,n=null,i=null;function r(s,o){n(s,o),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function J0(t){const e=new WeakMap;function n(a,l){const f=a.array,h=a.usage,d=f.byteLength,c=t.createBuffer();t.bindBuffer(l,c),t.bufferData(l,f,h),a.onUploadCallback();let m;if(f instanceof Float32Array)m=t.FLOAT;else if(f instanceof Uint16Array)a.isFloat16BufferAttribute?m=t.HALF_FLOAT:m=t.UNSIGNED_SHORT;else if(f instanceof Int16Array)m=t.SHORT;else if(f instanceof Uint32Array)m=t.UNSIGNED_INT;else if(f instanceof Int32Array)m=t.INT;else if(f instanceof Int8Array)m=t.BYTE;else if(f instanceof Uint8Array)m=t.UNSIGNED_BYTE;else if(f instanceof Uint8ClampedArray)m=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:c,type:m,bytesPerElement:f.BYTES_PER_ELEMENT,version:a.version,size:d}}function i(a,l,f){const h=l.array,d=l.updateRanges;if(t.bindBuffer(f,a),d.length===0)t.bufferSubData(f,0,h);else{d.sort((m,p)=>m.start-p.start);let c=0;for(let m=1;m<d.length;m++){const p=d[c],y=d[m];y.start<=p.start+p.count+1?p.count=Math.max(p.count,y.start+y.count-p.start):(++c,d[c]=y)}d.length=c+1;for(let m=0,p=d.length;m<p;m++){const y=d[m];t.bufferSubData(f,y.start*h.BYTES_PER_ELEMENT,h,y.start,y.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(t.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const f=e.get(a);if(f===void 0)e.set(a,n(a,l));else if(f.version<a.version){if(f.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(f.buffer,a,l),f.version=a.version}}return{get:r,remove:s,update:o}}class us extends $i{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,o=n/2,a=Math.floor(i),l=Math.floor(r),f=a+1,h=l+1,d=e/a,c=n/l,m=[],p=[],y=[],g=[];for(let u=0;u<h;u++){const w=u*c-o;for(let T=0;T<f;T++){const A=T*d-s;p.push(A,-w,0),y.push(0,0,1),g.push(T/a),g.push(1-u/l)}}for(let u=0;u<l;u++)for(let w=0;w<a;w++){const T=w+f*u,A=w+f*(u+1),G=w+1+f*(u+1),N=w+1+f*u;m.push(T,A,N),m.push(A,G,N)}this.setIndex(m),this.setAttribute("position",new Sr(p,3)),this.setAttribute("normal",new Sr(y,3)),this.setAttribute("uv",new Sr(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new us(e.width,e.height,e.widthSegments,e.heightSegments)}}var Q0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,ev=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,tv=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,nv=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,iv=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,rv=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,sv=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,av=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,ov=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,lv=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,cv=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,fv=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,uv=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,hv=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,dv=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,pv=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,mv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,_v=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,gv=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,vv=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,xv=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,yv=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Sv=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Mv=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Tv=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Ev=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,bv=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,wv=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Av=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Rv=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Cv="gl_FragColor = linearToOutputTexel( gl_FragColor );",Pv=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Dv=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Lv=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Iv=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Uv=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Nv=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Ov=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Fv=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Bv=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,zv=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,kv=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Hv=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Gv=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Vv=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Wv=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Xv=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,qv=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Yv=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,jv=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,$v=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Kv=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Zv=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Jv=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Qv=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,ex=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,tx=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,nx=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ix=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,rx=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,sx=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,ax=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,ox=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,lx=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,cx=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,fx=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,ux=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,hx=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,dx=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,px=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,mx=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,_x=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,gx=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,vx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,xx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,yx=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Sx=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Mx=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Tx=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Ex=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,bx=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,wx=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Ax=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Rx=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Cx=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Px=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Dx=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Lx=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Ix=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Ux=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Nx=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Ox=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Fx=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Bx=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,zx=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,kx=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Hx=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Gx=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Vx=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Wx=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Xx=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,qx=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Yx=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,jx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,$x=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Kx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Zx=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Jx=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Qx=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ey=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ty=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ny=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,iy=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ry=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,sy=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,ay=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,oy=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,ly=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,cy=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,fy=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,uy=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,hy=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,dy=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,py=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,my=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,_y=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,gy=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,vy=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,xy=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,yy=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Sy=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,My=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Ty=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ey=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,by=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,wy=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Ay=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Ry=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Cy=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Py=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Dy=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,lt={alphahash_fragment:Q0,alphahash_pars_fragment:ev,alphamap_fragment:tv,alphamap_pars_fragment:nv,alphatest_fragment:iv,alphatest_pars_fragment:rv,aomap_fragment:sv,aomap_pars_fragment:av,batching_pars_vertex:ov,batching_vertex:lv,begin_vertex:cv,beginnormal_vertex:fv,bsdfs:uv,iridescence_fragment:hv,bumpmap_pars_fragment:dv,clipping_planes_fragment:pv,clipping_planes_pars_fragment:mv,clipping_planes_pars_vertex:_v,clipping_planes_vertex:gv,color_fragment:vv,color_pars_fragment:xv,color_pars_vertex:yv,color_vertex:Sv,common:Mv,cube_uv_reflection_fragment:Tv,defaultnormal_vertex:Ev,displacementmap_pars_vertex:bv,displacementmap_vertex:wv,emissivemap_fragment:Av,emissivemap_pars_fragment:Rv,colorspace_fragment:Cv,colorspace_pars_fragment:Pv,envmap_fragment:Dv,envmap_common_pars_fragment:Lv,envmap_pars_fragment:Iv,envmap_pars_vertex:Uv,envmap_physical_pars_fragment:Xv,envmap_vertex:Nv,fog_vertex:Ov,fog_pars_vertex:Fv,fog_fragment:Bv,fog_pars_fragment:zv,gradientmap_pars_fragment:kv,lightmap_pars_fragment:Hv,lights_lambert_fragment:Gv,lights_lambert_pars_fragment:Vv,lights_pars_begin:Wv,lights_toon_fragment:qv,lights_toon_pars_fragment:Yv,lights_phong_fragment:jv,lights_phong_pars_fragment:$v,lights_physical_fragment:Kv,lights_physical_pars_fragment:Zv,lights_fragment_begin:Jv,lights_fragment_maps:Qv,lights_fragment_end:ex,logdepthbuf_fragment:tx,logdepthbuf_pars_fragment:nx,logdepthbuf_pars_vertex:ix,logdepthbuf_vertex:rx,map_fragment:sx,map_pars_fragment:ax,map_particle_fragment:ox,map_particle_pars_fragment:lx,metalnessmap_fragment:cx,metalnessmap_pars_fragment:fx,morphinstance_vertex:ux,morphcolor_vertex:hx,morphnormal_vertex:dx,morphtarget_pars_vertex:px,morphtarget_vertex:mx,normal_fragment_begin:_x,normal_fragment_maps:gx,normal_pars_fragment:vx,normal_pars_vertex:xx,normal_vertex:yx,normalmap_pars_fragment:Sx,clearcoat_normal_fragment_begin:Mx,clearcoat_normal_fragment_maps:Tx,clearcoat_pars_fragment:Ex,iridescence_pars_fragment:bx,opaque_fragment:wx,packing:Ax,premultiplied_alpha_fragment:Rx,project_vertex:Cx,dithering_fragment:Px,dithering_pars_fragment:Dx,roughnessmap_fragment:Lx,roughnessmap_pars_fragment:Ix,shadowmap_pars_fragment:Ux,shadowmap_pars_vertex:Nx,shadowmap_vertex:Ox,shadowmask_pars_fragment:Fx,skinbase_vertex:Bx,skinning_pars_vertex:zx,skinning_vertex:kx,skinnormal_vertex:Hx,specularmap_fragment:Gx,specularmap_pars_fragment:Vx,tonemapping_fragment:Wx,tonemapping_pars_fragment:Xx,transmission_fragment:qx,transmission_pars_fragment:Yx,uv_pars_fragment:jx,uv_pars_vertex:$x,uv_vertex:Kx,worldpos_vertex:Zx,background_vert:Jx,background_frag:Qx,backgroundCube_vert:ey,backgroundCube_frag:ty,cube_vert:ny,cube_frag:iy,depth_vert:ry,depth_frag:sy,distanceRGBA_vert:ay,distanceRGBA_frag:oy,equirect_vert:ly,equirect_frag:cy,linedashed_vert:fy,linedashed_frag:uy,meshbasic_vert:hy,meshbasic_frag:dy,meshlambert_vert:py,meshlambert_frag:my,meshmatcap_vert:_y,meshmatcap_frag:gy,meshnormal_vert:vy,meshnormal_frag:xy,meshphong_vert:yy,meshphong_frag:Sy,meshphysical_vert:My,meshphysical_frag:Ty,meshtoon_vert:Ey,meshtoon_frag:by,points_vert:wy,points_frag:Ay,shadow_vert:Ry,shadow_frag:Cy,sprite_vert:Py,sprite_frag:Dy},ke={common:{diffuse:{value:new yt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ct},alphaMap:{value:null},alphaMapTransform:{value:new ct},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ct}},envmap:{envMap:{value:null},envMapRotation:{value:new ct},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ct}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ct}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ct},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ct},normalScale:{value:new vt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ct},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ct}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ct}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ct}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new yt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new yt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ct},alphaTest:{value:0},uvTransform:{value:new ct}},sprite:{diffuse:{value:new yt(16777215)},opacity:{value:1},center:{value:new vt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ct},alphaMap:{value:null},alphaMapTransform:{value:new ct},alphaTest:{value:0}}},Wn={basic:{uniforms:rn([ke.common,ke.specularmap,ke.envmap,ke.aomap,ke.lightmap,ke.fog]),vertexShader:lt.meshbasic_vert,fragmentShader:lt.meshbasic_frag},lambert:{uniforms:rn([ke.common,ke.specularmap,ke.envmap,ke.aomap,ke.lightmap,ke.emissivemap,ke.bumpmap,ke.normalmap,ke.displacementmap,ke.fog,ke.lights,{emissive:{value:new yt(0)}}]),vertexShader:lt.meshlambert_vert,fragmentShader:lt.meshlambert_frag},phong:{uniforms:rn([ke.common,ke.specularmap,ke.envmap,ke.aomap,ke.lightmap,ke.emissivemap,ke.bumpmap,ke.normalmap,ke.displacementmap,ke.fog,ke.lights,{emissive:{value:new yt(0)},specular:{value:new yt(1118481)},shininess:{value:30}}]),vertexShader:lt.meshphong_vert,fragmentShader:lt.meshphong_frag},standard:{uniforms:rn([ke.common,ke.envmap,ke.aomap,ke.lightmap,ke.emissivemap,ke.bumpmap,ke.normalmap,ke.displacementmap,ke.roughnessmap,ke.metalnessmap,ke.fog,ke.lights,{emissive:{value:new yt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:lt.meshphysical_vert,fragmentShader:lt.meshphysical_frag},toon:{uniforms:rn([ke.common,ke.aomap,ke.lightmap,ke.emissivemap,ke.bumpmap,ke.normalmap,ke.displacementmap,ke.gradientmap,ke.fog,ke.lights,{emissive:{value:new yt(0)}}]),vertexShader:lt.meshtoon_vert,fragmentShader:lt.meshtoon_frag},matcap:{uniforms:rn([ke.common,ke.bumpmap,ke.normalmap,ke.displacementmap,ke.fog,{matcap:{value:null}}]),vertexShader:lt.meshmatcap_vert,fragmentShader:lt.meshmatcap_frag},points:{uniforms:rn([ke.points,ke.fog]),vertexShader:lt.points_vert,fragmentShader:lt.points_frag},dashed:{uniforms:rn([ke.common,ke.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:lt.linedashed_vert,fragmentShader:lt.linedashed_frag},depth:{uniforms:rn([ke.common,ke.displacementmap]),vertexShader:lt.depth_vert,fragmentShader:lt.depth_frag},normal:{uniforms:rn([ke.common,ke.bumpmap,ke.normalmap,ke.displacementmap,{opacity:{value:1}}]),vertexShader:lt.meshnormal_vert,fragmentShader:lt.meshnormal_frag},sprite:{uniforms:rn([ke.sprite,ke.fog]),vertexShader:lt.sprite_vert,fragmentShader:lt.sprite_frag},background:{uniforms:{uvTransform:{value:new ct},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:lt.background_vert,fragmentShader:lt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ct}},vertexShader:lt.backgroundCube_vert,fragmentShader:lt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:lt.cube_vert,fragmentShader:lt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:lt.equirect_vert,fragmentShader:lt.equirect_frag},distanceRGBA:{uniforms:rn([ke.common,ke.displacementmap,{referencePosition:{value:new me},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:lt.distanceRGBA_vert,fragmentShader:lt.distanceRGBA_frag},shadow:{uniforms:rn([ke.lights,ke.fog,{color:{value:new yt(0)},opacity:{value:1}}]),vertexShader:lt.shadow_vert,fragmentShader:lt.shadow_frag}};Wn.physical={uniforms:rn([Wn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ct},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ct},clearcoatNormalScale:{value:new vt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ct},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ct},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ct},sheen:{value:0},sheenColor:{value:new yt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ct},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ct},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ct},transmissionSamplerSize:{value:new vt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ct},attenuationDistance:{value:0},attenuationColor:{value:new yt(0)},specularColor:{value:new yt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ct},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ct},anisotropyVector:{value:new vt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ct}}]),vertexShader:lt.meshphysical_vert,fragmentShader:lt.meshphysical_frag};const Ra={r:0,b:0,g:0},ar=new _i,Ly=new Ut;function Iy(t,e,n,i,r,s,o){const a=new yt(0);let l=s===!0?0:1,f,h,d=null,c=0,m=null;function p(w){let T=w.isScene===!0?w.background:null;return T&&T.isTexture&&(T=(w.backgroundBlurriness>0?n:e).get(T)),T}function y(w){let T=!1;const A=p(w);A===null?u(a,l):A&&A.isColor&&(u(A,1),T=!0);const G=t.xr.getEnvironmentBlendMode();G==="additive"?i.buffers.color.setClear(0,0,0,1,o):G==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(t.autoClear||T)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function g(w,T){const A=p(T);A&&(A.isCubeTexture||A.mapping===vo)?(h===void 0&&(h=new En(new na(1,1,1),new Yn({name:"BackgroundCubeMaterial",uniforms:as(Wn.backgroundCube.uniforms),vertexShader:Wn.backgroundCube.vertexShader,fragmentShader:Wn.backgroundCube.fragmentShader,side:un,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(G,N,k){this.matrixWorld.copyPosition(k.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(h)),ar.copy(T.backgroundRotation),ar.x*=-1,ar.y*=-1,ar.z*=-1,A.isCubeTexture&&A.isRenderTargetTexture===!1&&(ar.y*=-1,ar.z*=-1),h.material.uniforms.envMap.value=A,h.material.uniforms.flipEnvMap.value=A.isCubeTexture&&A.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=T.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Ly.makeRotationFromEuler(ar)),h.material.toneMapped=gt.getTransfer(A.colorSpace)!==wt,(d!==A||c!==A.version||m!==t.toneMapping)&&(h.material.needsUpdate=!0,d=A,c=A.version,m=t.toneMapping),h.layers.enableAll(),w.unshift(h,h.geometry,h.material,0,0,null)):A&&A.isTexture&&(f===void 0&&(f=new En(new us(2,2),new Yn({name:"BackgroundMaterial",uniforms:as(Wn.background.uniforms),vertexShader:Wn.background.vertexShader,fragmentShader:Wn.background.fragmentShader,side:Wi,depthTest:!1,depthWrite:!1,fog:!1})),f.geometry.deleteAttribute("normal"),Object.defineProperty(f.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(f)),f.material.uniforms.t2D.value=A,f.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,f.material.toneMapped=gt.getTransfer(A.colorSpace)!==wt,A.matrixAutoUpdate===!0&&A.updateMatrix(),f.material.uniforms.uvTransform.value.copy(A.matrix),(d!==A||c!==A.version||m!==t.toneMapping)&&(f.material.needsUpdate=!0,d=A,c=A.version,m=t.toneMapping),f.layers.enableAll(),w.unshift(f,f.geometry,f.material,0,0,null))}function u(w,T){w.getRGB(Ra,Zd(t)),i.buffers.color.setClear(Ra.r,Ra.g,Ra.b,T,o)}return{getClearColor:function(){return a},setClearColor:function(w,T=1){a.set(w),l=T,u(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(w){l=w,u(a,l)},render:y,addToRenderList:g}}function Uy(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},r=c(null);let s=r,o=!1;function a(b,P,V,j,ce){let se=!1;const ae=d(j,V,P);s!==ae&&(s=ae,f(s.object)),se=m(b,j,V,ce),se&&p(b,j,V,ce),ce!==null&&e.update(ce,t.ELEMENT_ARRAY_BUFFER),(se||o)&&(o=!1,A(b,P,V,j),ce!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(ce).buffer))}function l(){return t.createVertexArray()}function f(b){return t.bindVertexArray(b)}function h(b){return t.deleteVertexArray(b)}function d(b,P,V){const j=V.wireframe===!0;let ce=i[b.id];ce===void 0&&(ce={},i[b.id]=ce);let se=ce[P.id];se===void 0&&(se={},ce[P.id]=se);let ae=se[j];return ae===void 0&&(ae=c(l()),se[j]=ae),ae}function c(b){const P=[],V=[],j=[];for(let ce=0;ce<n;ce++)P[ce]=0,V[ce]=0,j[ce]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:V,attributeDivisors:j,object:b,attributes:{},index:null}}function m(b,P,V,j){const ce=s.attributes,se=P.attributes;let ae=0;const _e=V.getAttributes();for(const ie in _e)if(_e[ie].location>=0){const ze=ce[ie];let He=se[ie];if(He===void 0&&(ie==="instanceMatrix"&&b.instanceMatrix&&(He=b.instanceMatrix),ie==="instanceColor"&&b.instanceColor&&(He=b.instanceColor)),ze===void 0||ze.attribute!==He||He&&ze.data!==He.data)return!0;ae++}return s.attributesNum!==ae||s.index!==j}function p(b,P,V,j){const ce={},se=P.attributes;let ae=0;const _e=V.getAttributes();for(const ie in _e)if(_e[ie].location>=0){let ze=se[ie];ze===void 0&&(ie==="instanceMatrix"&&b.instanceMatrix&&(ze=b.instanceMatrix),ie==="instanceColor"&&b.instanceColor&&(ze=b.instanceColor));const He={};He.attribute=ze,ze&&ze.data&&(He.data=ze.data),ce[ie]=He,ae++}s.attributes=ce,s.attributesNum=ae,s.index=j}function y(){const b=s.newAttributes;for(let P=0,V=b.length;P<V;P++)b[P]=0}function g(b){u(b,0)}function u(b,P){const V=s.newAttributes,j=s.enabledAttributes,ce=s.attributeDivisors;V[b]=1,j[b]===0&&(t.enableVertexAttribArray(b),j[b]=1),ce[b]!==P&&(t.vertexAttribDivisor(b,P),ce[b]=P)}function w(){const b=s.newAttributes,P=s.enabledAttributes;for(let V=0,j=P.length;V<j;V++)P[V]!==b[V]&&(t.disableVertexAttribArray(V),P[V]=0)}function T(b,P,V,j,ce,se,ae){ae===!0?t.vertexAttribIPointer(b,P,V,ce,se):t.vertexAttribPointer(b,P,V,j,ce,se)}function A(b,P,V,j){y();const ce=j.attributes,se=V.getAttributes(),ae=P.defaultAttributeValues;for(const _e in se){const ie=se[_e];if(ie.location>=0){let Ne=ce[_e];if(Ne===void 0&&(_e==="instanceMatrix"&&b.instanceMatrix&&(Ne=b.instanceMatrix),_e==="instanceColor"&&b.instanceColor&&(Ne=b.instanceColor)),Ne!==void 0){const ze=Ne.normalized,He=Ne.itemSize,Qe=e.get(Ne);if(Qe===void 0)continue;const rt=Qe.buffer,Se=Qe.type,Pe=Qe.bytesPerElement,Oe=Se===t.INT||Se===t.UNSIGNED_INT||Ne.gpuType===ef;if(Ne.isInterleavedBufferAttribute){const ee=Ne.data,we=ee.stride,xe=Ne.offset;if(ee.isInstancedInterleavedBuffer){for(let De=0;De<ie.locationSize;De++)u(ie.location+De,ee.meshPerAttribute);b.isInstancedMesh!==!0&&j._maxInstanceCount===void 0&&(j._maxInstanceCount=ee.meshPerAttribute*ee.count)}else for(let De=0;De<ie.locationSize;De++)g(ie.location+De);t.bindBuffer(t.ARRAY_BUFFER,rt);for(let De=0;De<ie.locationSize;De++)T(ie.location+De,He/ie.locationSize,Se,ze,we*Pe,(xe+He/ie.locationSize*De)*Pe,Oe)}else{if(Ne.isInstancedBufferAttribute){for(let ee=0;ee<ie.locationSize;ee++)u(ie.location+ee,Ne.meshPerAttribute);b.isInstancedMesh!==!0&&j._maxInstanceCount===void 0&&(j._maxInstanceCount=Ne.meshPerAttribute*Ne.count)}else for(let ee=0;ee<ie.locationSize;ee++)g(ie.location+ee);t.bindBuffer(t.ARRAY_BUFFER,rt);for(let ee=0;ee<ie.locationSize;ee++)T(ie.location+ee,He/ie.locationSize,Se,ze,He*Pe,He/ie.locationSize*ee*Pe,Oe)}}else if(ae!==void 0){const ze=ae[_e];if(ze!==void 0)switch(ze.length){case 2:t.vertexAttrib2fv(ie.location,ze);break;case 3:t.vertexAttrib3fv(ie.location,ze);break;case 4:t.vertexAttrib4fv(ie.location,ze);break;default:t.vertexAttrib1fv(ie.location,ze)}}}}w()}function G(){q();for(const b in i){const P=i[b];for(const V in P){const j=P[V];for(const ce in j)h(j[ce].object),delete j[ce];delete P[V]}delete i[b]}}function N(b){if(i[b.id]===void 0)return;const P=i[b.id];for(const V in P){const j=P[V];for(const ce in j)h(j[ce].object),delete j[ce];delete P[V]}delete i[b.id]}function k(b){for(const P in i){const V=i[P];if(V[b.id]===void 0)continue;const j=V[b.id];for(const ce in j)h(j[ce].object),delete j[ce];delete V[b.id]}}function q(){J(),o=!0,s!==r&&(s=r,f(s.object))}function J(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:q,resetDefaultState:J,dispose:G,releaseStatesOfGeometry:N,releaseStatesOfProgram:k,initAttributes:y,enableAttribute:g,disableUnusedAttributes:w}}function Ny(t,e,n){let i;function r(f){i=f}function s(f,h){t.drawArrays(i,f,h),n.update(h,i,1)}function o(f,h,d){d!==0&&(t.drawArraysInstanced(i,f,h,d),n.update(h,i,d))}function a(f,h,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,f,0,h,0,d);let m=0;for(let p=0;p<d;p++)m+=h[p];n.update(m,i,1)}function l(f,h,d,c){if(d===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<f.length;p++)o(f[p],h[p],c[p]);else{m.multiDrawArraysInstancedWEBGL(i,f,0,h,0,c,0,d);let p=0;for(let y=0;y<d;y++)p+=h[y];for(let y=0;y<c.length;y++)n.update(p,i,c[y])}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function Oy(t,e,n,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const k=e.get("EXT_texture_filter_anisotropic");r=t.getParameter(k.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(k){return!(k!==Un&&i.convert(k)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(k){const q=k===Js&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(k!==mi&&i.convert(k)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&k!==ui&&!q)}function l(k){if(k==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";k="mediump"}return k==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let f=n.precision!==void 0?n.precision:"highp";const h=l(f);h!==f&&(f=h);const d=n.logarithmicDepthBuffer===!0,c=n.reverseDepthBuffer===!0&&e.has("EXT_clip_control");if(c===!0){const k=e.get("EXT_clip_control");k.clipControlEXT(k.LOWER_LEFT_EXT,k.ZERO_TO_ONE_EXT)}const m=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),p=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=t.getParameter(t.MAX_TEXTURE_SIZE),g=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),u=t.getParameter(t.MAX_VERTEX_ATTRIBS),w=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),T=t.getParameter(t.MAX_VARYING_VECTORS),A=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),G=p>0,N=t.getParameter(t.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:f,logarithmicDepthBuffer:d,reverseDepthBuffer:c,maxTextures:m,maxVertexTextures:p,maxTextureSize:y,maxCubemapSize:g,maxAttributes:u,maxVertexUniforms:w,maxVaryings:T,maxFragmentUniforms:A,vertexTextures:G,maxSamples:N}}function Fy(t){const e=this;let n=null,i=0,r=!1,s=!1;const o=new Ii,a=new ct,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,c){const m=d.length!==0||c||i!==0||r;return r=c,i=d.length,m},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,c){n=h(d,c,0)},this.setState=function(d,c,m){const p=d.clippingPlanes,y=d.clipIntersection,g=d.clipShadows,u=t.get(d);if(!r||p===null||p.length===0||s&&!g)s?h(null):f();else{const w=s?0:i,T=w*4;let A=u.clippingState||null;l.value=A,A=h(p,c,T,m);for(let G=0;G!==T;++G)A[G]=n[G];u.clippingState=A,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=w}};function f(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(d,c,m,p){const y=d!==null?d.length:0;let g=null;if(y!==0){if(g=l.value,p!==!0||g===null){const u=m+y*4,w=c.matrixWorldInverse;a.getNormalMatrix(w),(g===null||g.length<u)&&(g=new Float32Array(u));for(let T=0,A=m;T!==y;++T,A+=4)o.copy(d[T]).applyMatrix4(w,a),o.normal.toArray(g,A),g[A+3]=o.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=y,e.numIntersection=0,g}}function By(t){let e=new WeakMap;function n(o,a){return a===Wl?o.mapping=ns:a===Xl&&(o.mapping=is),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===Wl||a===Xl)if(e.has(o)){const l=e.get(o).texture;return n(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const f=new $0(l.height);return f.fromEquirectangularTexture(t,o),e.set(o,f),o.addEventListener("dispose",r),n(f.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class np extends Jd{constructor(e=-1,n=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const f=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=f*this.view.offsetX,o=s+f*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const qr=4,Mu=[.125,.215,.35,.446,.526,.582],Yr=20,cl=new np,Tu=new yt;let fl=null,ul=0,hl=0,dl=!1;const cr=(1+Math.sqrt(5))/2,Gr=1/cr,Eu=[new me(-cr,Gr,0),new me(cr,Gr,0),new me(-Gr,0,cr),new me(Gr,0,cr),new me(0,cr,-Gr),new me(0,cr,Gr),new me(-1,1,-1),new me(1,1,-1),new me(-1,1,1),new me(1,1,1)];class bu{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100){fl=this._renderer.getRenderTarget(),ul=this._renderer.getActiveCubeFace(),hl=this._renderer.getActiveMipmapLevel(),dl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),n>0&&this._blur(s,0,0,n),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ru(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Au(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(fl,ul,hl),this._renderer.xr.enabled=dl,e.scissorTest=!1,Ca(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===ns||e.mapping===is?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),fl=this._renderer.getRenderTarget(),ul=this._renderer.getActiveCubeFace(),hl=this._renderer.getActiveMipmapLevel(),dl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:Dn,minFilter:Dn,generateMipmaps:!1,type:Js,format:Un,colorSpace:ji,depthBuffer:!1},r=wu(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=wu(e,n,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=zy(s)),this._blurMaterial=ky(s,e,n)}return r}_compileMaterial(e){const n=new En(this._lodPlanes[0],e);this._renderer.compile(n,cl)}_sceneToCubeUV(e,n,i,r){const a=new Sn(90,1,n,i),l=[1,-1,1,1,1,1],f=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,c=h.toneMapping;h.getClearColor(Tu),h.toneMapping=Gi,h.autoClear=!1;const m=new ff({name:"PMREM.Background",side:un,depthWrite:!1,depthTest:!1}),p=new En(new na,m);let y=!1;const g=e.background;g?g.isColor&&(m.color.copy(g),e.background=null,y=!0):(m.color.copy(Tu),y=!0);for(let u=0;u<6;u++){const w=u%3;w===0?(a.up.set(0,l[u],0),a.lookAt(f[u],0,0)):w===1?(a.up.set(0,0,l[u]),a.lookAt(0,f[u],0)):(a.up.set(0,l[u],0),a.lookAt(0,0,f[u]));const T=this._cubeSize;Ca(r,w*T,u>2?T:0,T,T),h.setRenderTarget(r),y&&h.render(p,a),h.render(e,a)}p.geometry.dispose(),p.material.dispose(),h.toneMapping=c,h.autoClear=d,e.background=g}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===ns||e.mapping===is;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ru()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Au());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new En(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;Ca(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(o,cl)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=Eu[(r-s-1)%Eu.length];this._blur(e,s-1,s,o,a)}n.autoClear=i}_blur(e,n,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,n,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,o,a){const l=this._renderer,f=this._blurMaterial,h=3,d=new En(this._lodPlanes[r],f),c=f.uniforms,m=this._sizeLods[i]-1,p=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*Yr-1),y=s/p,g=isFinite(s)?1+Math.floor(h*y):Yr;g>Yr;const u=[];let w=0;for(let k=0;k<Yr;++k){const q=k/y,J=Math.exp(-q*q/2);u.push(J),k===0?w+=J:k<g&&(w+=2*J)}for(let k=0;k<u.length;k++)u[k]=u[k]/w;c.envMap.value=e.texture,c.samples.value=g,c.weights.value=u,c.latitudinal.value=o==="latitudinal",a&&(c.poleAxis.value=a);const{_lodMax:T}=this;c.dTheta.value=p,c.mipInt.value=T-i;const A=this._sizeLods[r],G=3*A*(r>T-qr?r-T+qr:0),N=4*(this._cubeSize-A);Ca(n,G,N,3*A,2*A),l.setRenderTarget(n),l.render(d,cl)}}function zy(t){const e=[],n=[],i=[];let r=t;const s=t-qr+1+Mu.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);n.push(a);let l=1/a;o>t-qr?l=Mu[o-t+qr-1]:o===0&&(l=0),i.push(l);const f=1/(a-2),h=-f,d=1+f,c=[h,h,d,h,d,d,h,h,d,d,h,d],m=6,p=6,y=3,g=2,u=1,w=new Float32Array(y*p*m),T=new Float32Array(g*p*m),A=new Float32Array(u*p*m);for(let N=0;N<m;N++){const k=N%3*2/3-1,q=N>2?0:-1,J=[k,q,0,k+2/3,q,0,k+2/3,q+1,0,k,q,0,k+2/3,q+1,0,k,q+1,0];w.set(J,y*p*N),T.set(c,g*p*N);const b=[N,N,N,N,N,N];A.set(b,u*p*N)}const G=new $i;G.setAttribute("position",new dn(w,y)),G.setAttribute("uv",new dn(T,g)),G.setAttribute("faceIndex",new dn(A,u)),e.push(G),r>qr&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function wu(t,e,n){const i=new br(t,e,n);return i.texture.mapping=vo,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Ca(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function ky(t,e,n){const i=new Float32Array(Yr),r=new me(0,1,0);return new Yn({name:"SphericalGaussianBlur",defines:{n:Yr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:uf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Hi,depthTest:!1,depthWrite:!1})}function Au(){return new Yn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:uf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Hi,depthTest:!1,depthWrite:!1})}function Ru(){return new Yn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:uf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Hi,depthTest:!1,depthWrite:!1})}function uf(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Hy(t){let e=new WeakMap,n=null;function i(a){if(a&&a.isTexture){const l=a.mapping,f=l===Wl||l===Xl,h=l===ns||l===is;if(f||h){let d=e.get(a);const c=d!==void 0?d.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==c)return n===null&&(n=new bu(t)),d=f?n.fromEquirectangular(a,d):n.fromCubemap(a,d),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),d.texture;if(d!==void 0)return d.texture;{const m=a.image;return f&&m&&m.height>0||h&&m&&r(m)?(n===null&&(n=new bu(t)),d=f?n.fromEquirectangular(a):n.fromCubemap(a),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),a.addEventListener("dispose",s),d.texture):null}}}return a}function r(a){let l=0;const f=6;for(let h=0;h<f;h++)a[h]!==void 0&&l++;return l===f}function s(a){const l=a.target;l.removeEventListener("dispose",s);const f=e.get(l);f!==void 0&&(e.delete(l),f.dispose())}function o(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:o}}function Gy(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const r=n(i);return r===null&&Xa("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function Vy(t,e,n,i){const r={},s=new WeakMap;function o(d){const c=d.target;c.index!==null&&e.remove(c.index);for(const p in c.attributes)e.remove(c.attributes[p]);for(const p in c.morphAttributes){const y=c.morphAttributes[p];for(let g=0,u=y.length;g<u;g++)e.remove(y[g])}c.removeEventListener("dispose",o),delete r[c.id];const m=s.get(c);m&&(e.remove(m),s.delete(c)),i.releaseStatesOfGeometry(c),c.isInstancedBufferGeometry===!0&&delete c._maxInstanceCount,n.memory.geometries--}function a(d,c){return r[c.id]===!0||(c.addEventListener("dispose",o),r[c.id]=!0,n.memory.geometries++),c}function l(d){const c=d.attributes;for(const p in c)e.update(c[p],t.ARRAY_BUFFER);const m=d.morphAttributes;for(const p in m){const y=m[p];for(let g=0,u=y.length;g<u;g++)e.update(y[g],t.ARRAY_BUFFER)}}function f(d){const c=[],m=d.index,p=d.attributes.position;let y=0;if(m!==null){const w=m.array;y=m.version;for(let T=0,A=w.length;T<A;T+=3){const G=w[T+0],N=w[T+1],k=w[T+2];c.push(G,N,N,k,k,G)}}else if(p!==void 0){const w=p.array;y=p.version;for(let T=0,A=w.length/3-1;T<A;T+=3){const G=T+0,N=T+1,k=T+2;c.push(G,N,N,k,k,G)}}else return;const g=new(Wd(c)?Kd:$d)(c,1);g.version=y;const u=s.get(d);u&&e.remove(u),s.set(d,g)}function h(d){const c=s.get(d);if(c){const m=d.index;m!==null&&c.version<m.version&&f(d)}else f(d);return s.get(d)}return{get:a,update:l,getWireframeAttribute:h}}function Wy(t,e,n){let i;function r(c){i=c}let s,o;function a(c){s=c.type,o=c.bytesPerElement}function l(c,m){t.drawElements(i,m,s,c*o),n.update(m,i,1)}function f(c,m,p){p!==0&&(t.drawElementsInstanced(i,m,s,c*o,p),n.update(m,i,p))}function h(c,m,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,m,0,s,c,0,p);let g=0;for(let u=0;u<p;u++)g+=m[u];n.update(g,i,1)}function d(c,m,p,y){if(p===0)return;const g=e.get("WEBGL_multi_draw");if(g===null)for(let u=0;u<c.length;u++)f(c[u]/o,m[u],y[u]);else{g.multiDrawElementsInstancedWEBGL(i,m,0,s,c,0,y,0,p);let u=0;for(let w=0;w<p;w++)u+=m[w];for(let w=0;w<y.length;w++)n.update(u,i,y[w])}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=f,this.renderMultiDraw=h,this.renderMultiDrawInstances=d}function Xy(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(n.calls++,o){case t.TRIANGLES:n.triangles+=a*(s/3);break;case t.LINES:n.lines+=a*(s/2);break;case t.LINE_STRIP:n.lines+=a*(s-1);break;case t.LINE_LOOP:n.lines+=a*s;break;case t.POINTS:n.points+=a*s;break;default:break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function qy(t,e,n){const i=new WeakMap,r=new It;function s(o,a,l){const f=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=h!==void 0?h.length:0;let c=i.get(a);if(c===void 0||c.count!==d){let b=function(){q.dispose(),i.delete(a),a.removeEventListener("dispose",b)};var m=b;c!==void 0&&c.texture.dispose();const p=a.morphAttributes.position!==void 0,y=a.morphAttributes.normal!==void 0,g=a.morphAttributes.color!==void 0,u=a.morphAttributes.position||[],w=a.morphAttributes.normal||[],T=a.morphAttributes.color||[];let A=0;p===!0&&(A=1),y===!0&&(A=2),g===!0&&(A=3);let G=a.attributes.position.count*A,N=1;G>e.maxTextureSize&&(N=Math.ceil(G/e.maxTextureSize),G=e.maxTextureSize);const k=new Float32Array(G*N*4*d),q=new qd(k,G,N,d);q.type=ui,q.needsUpdate=!0;const J=A*4;for(let P=0;P<d;P++){const V=u[P],j=w[P],ce=T[P],se=G*N*4*P;for(let ae=0;ae<V.count;ae++){const _e=ae*J;p===!0&&(r.fromBufferAttribute(V,ae),k[se+_e+0]=r.x,k[se+_e+1]=r.y,k[se+_e+2]=r.z,k[se+_e+3]=0),y===!0&&(r.fromBufferAttribute(j,ae),k[se+_e+4]=r.x,k[se+_e+5]=r.y,k[se+_e+6]=r.z,k[se+_e+7]=0),g===!0&&(r.fromBufferAttribute(ce,ae),k[se+_e+8]=r.x,k[se+_e+9]=r.y,k[se+_e+10]=r.z,k[se+_e+11]=ce.itemSize===4?r.w:1)}}c={count:d,texture:q,size:new vt(G,N)},i.set(a,c),a.addEventListener("dispose",b)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",o.morphTexture,n);else{let p=0;for(let g=0;g<f.length;g++)p+=f[g];const y=a.morphTargetsRelative?1:1-p;l.getUniforms().setValue(t,"morphTargetBaseInfluence",y),l.getUniforms().setValue(t,"morphTargetInfluences",f)}l.getUniforms().setValue(t,"morphTargetsTexture",c.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",c.size)}return{update:s}}function Yy(t,e,n,i){let r=new WeakMap;function s(l){const f=i.render.frame,h=l.geometry,d=e.get(l,h);if(r.get(d)!==f&&(e.update(d),r.set(d,f)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==f&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),r.set(l,f))),l.isSkinnedMesh){const c=l.skeleton;r.get(c)!==f&&(c.update(),r.set(c,f))}return d}function o(){r=new WeakMap}function a(l){const f=l.target;f.removeEventListener("dispose",a),n.remove(f.instanceMatrix),f.instanceColor!==null&&n.remove(f.instanceColor)}return{update:s,dispose:o}}class ip extends Xt{constructor(e,n,i,r,s,o,a,l,f,h=Zr){if(h!==Zr&&h!==ss)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&h===Zr&&(i=Er),i===void 0&&h===ss&&(i=rs),super(null,r,s,o,a,l,h,i,f),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=a!==void 0?a:Tn,this.minFilter=l!==void 0?l:Tn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}const rp=new Xt,Cu=new ip(1,1),sp=new qd,ap=new I0,op=new Qd,Pu=[],Du=[],Lu=new Float32Array(16),Iu=new Float32Array(9),Uu=new Float32Array(4);function hs(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=Pu[r];if(s===void 0&&(s=new Float32Array(r),Pu[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=n,t[o].toArray(s,a)}return s}function Bt(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function zt(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function So(t,e){let n=Du[e];n===void 0&&(n=new Int32Array(e),Du[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function jy(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function $y(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Bt(n,e))return;t.uniform2fv(this.addr,e),zt(n,e)}}function Ky(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Bt(n,e))return;t.uniform3fv(this.addr,e),zt(n,e)}}function Zy(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Bt(n,e))return;t.uniform4fv(this.addr,e),zt(n,e)}}function Jy(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Bt(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),zt(n,e)}else{if(Bt(n,i))return;Uu.set(i),t.uniformMatrix2fv(this.addr,!1,Uu),zt(n,i)}}function Qy(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Bt(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),zt(n,e)}else{if(Bt(n,i))return;Iu.set(i),t.uniformMatrix3fv(this.addr,!1,Iu),zt(n,i)}}function eS(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Bt(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),zt(n,e)}else{if(Bt(n,i))return;Lu.set(i),t.uniformMatrix4fv(this.addr,!1,Lu),zt(n,i)}}function tS(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function nS(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Bt(n,e))return;t.uniform2iv(this.addr,e),zt(n,e)}}function iS(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Bt(n,e))return;t.uniform3iv(this.addr,e),zt(n,e)}}function rS(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Bt(n,e))return;t.uniform4iv(this.addr,e),zt(n,e)}}function sS(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function aS(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Bt(n,e))return;t.uniform2uiv(this.addr,e),zt(n,e)}}function oS(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Bt(n,e))return;t.uniform3uiv(this.addr,e),zt(n,e)}}function lS(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Bt(n,e))return;t.uniform4uiv(this.addr,e),zt(n,e)}}function cS(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);let s;this.type===t.SAMPLER_2D_SHADOW?(Cu.compareFunction=Vd,s=Cu):s=rp,n.setTexture2D(e||s,r)}function fS(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||ap,r)}function uS(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||op,r)}function hS(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||sp,r)}function dS(t){switch(t){case 5126:return jy;case 35664:return $y;case 35665:return Ky;case 35666:return Zy;case 35674:return Jy;case 35675:return Qy;case 35676:return eS;case 5124:case 35670:return tS;case 35667:case 35671:return nS;case 35668:case 35672:return iS;case 35669:case 35673:return rS;case 5125:return sS;case 36294:return aS;case 36295:return oS;case 36296:return lS;case 35678:case 36198:case 36298:case 36306:case 35682:return cS;case 35679:case 36299:case 36307:return fS;case 35680:case 36300:case 36308:case 36293:return uS;case 36289:case 36303:case 36311:case 36292:return hS}}function pS(t,e){t.uniform1fv(this.addr,e)}function mS(t,e){const n=hs(e,this.size,2);t.uniform2fv(this.addr,n)}function _S(t,e){const n=hs(e,this.size,3);t.uniform3fv(this.addr,n)}function gS(t,e){const n=hs(e,this.size,4);t.uniform4fv(this.addr,n)}function vS(t,e){const n=hs(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function xS(t,e){const n=hs(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function yS(t,e){const n=hs(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function SS(t,e){t.uniform1iv(this.addr,e)}function MS(t,e){t.uniform2iv(this.addr,e)}function TS(t,e){t.uniform3iv(this.addr,e)}function ES(t,e){t.uniform4iv(this.addr,e)}function bS(t,e){t.uniform1uiv(this.addr,e)}function wS(t,e){t.uniform2uiv(this.addr,e)}function AS(t,e){t.uniform3uiv(this.addr,e)}function RS(t,e){t.uniform4uiv(this.addr,e)}function CS(t,e,n){const i=this.cache,r=e.length,s=So(n,r);Bt(i,s)||(t.uniform1iv(this.addr,s),zt(i,s));for(let o=0;o!==r;++o)n.setTexture2D(e[o]||rp,s[o])}function PS(t,e,n){const i=this.cache,r=e.length,s=So(n,r);Bt(i,s)||(t.uniform1iv(this.addr,s),zt(i,s));for(let o=0;o!==r;++o)n.setTexture3D(e[o]||ap,s[o])}function DS(t,e,n){const i=this.cache,r=e.length,s=So(n,r);Bt(i,s)||(t.uniform1iv(this.addr,s),zt(i,s));for(let o=0;o!==r;++o)n.setTextureCube(e[o]||op,s[o])}function LS(t,e,n){const i=this.cache,r=e.length,s=So(n,r);Bt(i,s)||(t.uniform1iv(this.addr,s),zt(i,s));for(let o=0;o!==r;++o)n.setTexture2DArray(e[o]||sp,s[o])}function IS(t){switch(t){case 5126:return pS;case 35664:return mS;case 35665:return _S;case 35666:return gS;case 35674:return vS;case 35675:return xS;case 35676:return yS;case 5124:case 35670:return SS;case 35667:case 35671:return MS;case 35668:case 35672:return TS;case 35669:case 35673:return ES;case 5125:return bS;case 36294:return wS;case 36295:return AS;case 36296:return RS;case 35678:case 36198:case 36298:case 36306:case 35682:return CS;case 35679:case 36299:case 36307:return PS;case 35680:case 36300:case 36308:case 36293:return DS;case 36289:case 36303:case 36311:case 36292:return LS}}class US{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=dS(n.type)}}class NS{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=IS(n.type)}}class OS{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,n[a.id],i)}}}const pl=/(\w+)(\])?(\[|\.)?/g;function Nu(t,e){t.seq.push(e),t.map[e.id]=e}function FS(t,e,n){const i=t.name,r=i.length;for(pl.lastIndex=0;;){const s=pl.exec(i),o=pl.lastIndex;let a=s[1];const l=s[2]==="]",f=s[3];if(l&&(a=a|0),f===void 0||f==="["&&o+2===r){Nu(n,f===void 0?new US(a,t,e):new NS(a,t,e));break}else{let d=n.map[a];d===void 0&&(d=new OS(a),Nu(n,d)),n=d}}}class qa{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(n,r),o=e.getUniformLocation(n,s.name);FS(s,o,this)}}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,o=n.length;s!==o;++s){const a=n[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in n&&i.push(o)}return i}}function Ou(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const BS=37297;let zS=0;function kS(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${n[o]}`)}return i.join(`
`)}function HS(t){const e=gt.getPrimaries(gt.workingColorSpace),n=gt.getPrimaries(t);let i;switch(e===n?i="":e===no&&n===to?i="LinearDisplayP3ToLinearSRGB":e===to&&n===no&&(i="LinearSRGBToLinearDisplayP3"),t){case ji:case xo:return[i,"LinearTransferOETF"];case Hn:case of:return[i,"sRGBTransferOETF"];default:return[i,"LinearTransferOETF"]}}function Fu(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),r=t.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return n.toUpperCase()+`

`+r+`

`+kS(t.getShaderSource(e),o)}else return r}function GS(t,e){const n=HS(e);return`vec4 ${t}( vec4 value ) { return ${n[0]}( ${n[1]}( value ) ); }`}function VS(t,e){let n;switch(e){case r0:n="Linear";break;case s0:n="Reinhard";break;case a0:n="Cineon";break;case o0:n="ACESFilmic";break;case c0:n="AgX";break;case f0:n="Neutral";break;case l0:n="Custom";break;default:n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const Pa=new me;function WS(){gt.getLuminanceCoefficients(Pa);const t=Pa.x.toFixed(4),e=Pa.y.toFixed(4),n=Pa.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function XS(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(As).join(`
`)}function qS(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function YS(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),o=s.name;let a=1;s.type===t.FLOAT_MAT2&&(a=2),s.type===t.FLOAT_MAT3&&(a=3),s.type===t.FLOAT_MAT4&&(a=4),n[o]={type:s.type,location:t.getAttribLocation(e,o),locationSize:a}}return n}function As(t){return t!==""}function Bu(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function zu(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const jS=/^[ \t]*#include +<([\w\d./]+)>/gm;function Sc(t){return t.replace(jS,KS)}const $S=new Map;function KS(t,e){let n=lt[e];if(n===void 0){const i=$S.get(e);if(i!==void 0)n=lt[i];else throw new Error("Can not resolve #include <"+e+">")}return Sc(n)}const ZS=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ku(t){return t.replace(ZS,JS)}function JS(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Hu(t){let e=`precision ${t.precision} float;
	precision ${t.precision} int;
	precision ${t.precision} sampler2D;
	precision ${t.precision} samplerCube;
	precision ${t.precision} sampler3D;
	precision ${t.precision} sampler2DArray;
	precision ${t.precision} sampler2DShadow;
	precision ${t.precision} samplerCubeShadow;
	precision ${t.precision} sampler2DArrayShadow;
	precision ${t.precision} isampler2D;
	precision ${t.precision} isampler3D;
	precision ${t.precision} isamplerCube;
	precision ${t.precision} isampler2DArray;
	precision ${t.precision} usampler2D;
	precision ${t.precision} usampler3D;
	precision ${t.precision} usamplerCube;
	precision ${t.precision} usampler2DArray;
	`;return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function QS(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===Pd?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===Fg?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===ai&&(e="SHADOWMAP_TYPE_VSM"),e}function eM(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case ns:case is:e="ENVMAP_TYPE_CUBE";break;case vo:e="ENVMAP_TYPE_CUBE_UV";break}return e}function tM(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case is:e="ENVMAP_MODE_REFRACTION";break}return e}function nM(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case Dd:e="ENVMAP_BLENDING_MULTIPLY";break;case n0:e="ENVMAP_BLENDING_MIX";break;case i0:e="ENVMAP_BLENDING_ADD";break}return e}function iM(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function rM(t,e,n,i){const r=t.getContext(),s=n.defines;let o=n.vertexShader,a=n.fragmentShader;const l=QS(n),f=eM(n),h=tM(n),d=nM(n),c=iM(n),m=XS(n),p=qS(s),y=r.createProgram();let g,u,w=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(g=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,p].filter(As).join(`
`),g.length>0&&(g+=`
`),u=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,p].filter(As).join(`
`),u.length>0&&(u+=`
`)):(g=[Hu(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,p,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+h:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(As).join(`
`),u=[Hu(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,p,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+f:"",n.envMap?"#define "+h:"",n.envMap?"#define "+d:"",c?"#define CUBEUV_TEXEL_WIDTH "+c.texelWidth:"",c?"#define CUBEUV_TEXEL_HEIGHT "+c.texelHeight:"",c?"#define CUBEUV_MAX_MIP "+c.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Gi?"#define TONE_MAPPING":"",n.toneMapping!==Gi?lt.tonemapping_pars_fragment:"",n.toneMapping!==Gi?VS("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",lt.colorspace_pars_fragment,GS("linearToOutputTexel",n.outputColorSpace),WS(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(As).join(`
`)),o=Sc(o),o=Bu(o,n),o=zu(o,n),a=Sc(a),a=Bu(a,n),a=zu(a,n),o=ku(o),a=ku(a),n.isRawShaderMaterial!==!0&&(w=`#version 300 es
`,g=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,u=["#define varying in",n.glslVersion===ru?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===ru?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+u);const T=w+g+o,A=w+u+a,G=Ou(r,r.VERTEX_SHADER,T),N=Ou(r,r.FRAGMENT_SHADER,A);r.attachShader(y,G),r.attachShader(y,N),n.index0AttributeName!==void 0?r.bindAttribLocation(y,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(y,0,"position"),r.linkProgram(y);function k(P){if(t.debug.checkShaderErrors){const V=r.getProgramInfoLog(y).trim(),j=r.getShaderInfoLog(G).trim(),ce=r.getShaderInfoLog(N).trim();let se=!0,ae=!0;if(r.getProgramParameter(y,r.LINK_STATUS)===!1)if(se=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,y,G,N);else{const _e=Fu(r,G,"vertex"),ie=Fu(r,N,"fragment")}else V!==""||(j===""||ce==="")&&(ae=!1);ae&&(P.diagnostics={runnable:se,programLog:V,vertexShader:{log:j,prefix:g},fragmentShader:{log:ce,prefix:u}})}r.deleteShader(G),r.deleteShader(N),q=new qa(r,y),J=YS(r,y)}let q;this.getUniforms=function(){return q===void 0&&k(this),q};let J;this.getAttributes=function(){return J===void 0&&k(this),J};let b=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return b===!1&&(b=r.getProgramParameter(y,BS)),b},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(y),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=zS++,this.cacheKey=e,this.usedTimes=1,this.program=y,this.vertexShader=G,this.fragmentShader=N,this}let sM=0;class aM{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new oM(e),n.set(e,i)),i}}class oM{constructor(e){this.id=sM++,this.code=e,this.usedTimes=0}}function lM(t,e,n,i,r,s,o){const a=new cf,l=new aM,f=new Set,h=[],d=r.logarithmicDepthBuffer,c=r.reverseDepthBuffer,m=r.vertexTextures;let p=r.precision;const y={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(b){return f.add(b),b===0?"uv":`uv${b}`}function u(b,P,V,j,ce){const se=j.fog,ae=ce.geometry,_e=b.isMeshStandardMaterial?j.environment:null,ie=(b.isMeshStandardMaterial?n:e).get(b.envMap||_e),Ne=ie&&ie.mapping===vo?ie.image.height:null,ze=y[b.type];b.precision!==null&&(p=r.getMaxPrecision(b.precision),b.precision);const He=ae.morphAttributes.position||ae.morphAttributes.normal||ae.morphAttributes.color,Qe=He!==void 0?He.length:0;let rt=0;ae.morphAttributes.position!==void 0&&(rt=1),ae.morphAttributes.normal!==void 0&&(rt=2),ae.morphAttributes.color!==void 0&&(rt=3);let Se,Pe,Oe,ee;if(ze){const qt=Wn[ze];Se=qt.vertexShader,Pe=qt.fragmentShader}else Se=b.vertexShader,Pe=b.fragmentShader,l.update(b),Oe=l.getVertexShaderID(b),ee=l.getFragmentShaderID(b);const we=t.getRenderTarget(),xe=ce.isInstancedMesh===!0,De=ce.isBatchedMesh===!0,qe=!!b.map,We=!!b.matcap,E=!!ie,H=!!b.aoMap,W=!!b.lightMap,pe=!!b.bumpMap,oe=!!b.normalMap,ye=!!b.displacementMap,ve=!!b.emissiveMap,_=!!b.metalnessMap,v=!!b.roughnessMap,M=b.anisotropy>0,C=b.clearcoat>0,U=b.dispersion>0,F=b.iridescence>0,K=b.sheen>0,X=b.transmission>0,te=M&&!!b.anisotropyMap,Te=C&&!!b.clearcoatMap,re=C&&!!b.clearcoatNormalMap,ge=C&&!!b.clearcoatRoughnessMap,Fe=F&&!!b.iridescenceMap,Le=F&&!!b.iridescenceThicknessMap,Ue=K&&!!b.sheenColorMap,$e=K&&!!b.sheenRoughnessMap,Ye=!!b.specularMap,tt=!!b.specularColorMap,Z=!!b.specularIntensityMap,Xe=X&&!!b.transmissionMap,ue=X&&!!b.thicknessMap,Re=!!b.gradientMap,Ge=!!b.alphaMap,Be=b.alphaTest>0,ht=!!b.alphaHash,Mt=!!b.extensions;let Tt=Gi;b.toneMapped&&(we===null||we.isXRRenderTarget===!0)&&(Tt=t.toneMapping);const dt={shaderID:ze,shaderType:b.type,shaderName:b.name,vertexShader:Se,fragmentShader:Pe,defines:b.defines,customVertexShaderID:Oe,customFragmentShaderID:ee,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:p,batching:De,batchingColor:De&&ce._colorsTexture!==null,instancing:xe,instancingColor:xe&&ce.instanceColor!==null,instancingMorph:xe&&ce.morphTexture!==null,supportsVertexTextures:m,outputColorSpace:we===null?t.outputColorSpace:we.isXRRenderTarget===!0?we.texture.colorSpace:ji,alphaToCoverage:!!b.alphaToCoverage,map:qe,matcap:We,envMap:E,envMapMode:E&&ie.mapping,envMapCubeUVHeight:Ne,aoMap:H,lightMap:W,bumpMap:pe,normalMap:oe,displacementMap:m&&ye,emissiveMap:ve,normalMapObjectSpace:oe&&b.normalMapType===m0,normalMapTangentSpace:oe&&b.normalMapType===p0,metalnessMap:_,roughnessMap:v,anisotropy:M,anisotropyMap:te,clearcoat:C,clearcoatMap:Te,clearcoatNormalMap:re,clearcoatRoughnessMap:ge,dispersion:U,iridescence:F,iridescenceMap:Fe,iridescenceThicknessMap:Le,sheen:K,sheenColorMap:Ue,sheenRoughnessMap:$e,specularMap:Ye,specularColorMap:tt,specularIntensityMap:Z,transmission:X,transmissionMap:Xe,thicknessMap:ue,gradientMap:Re,opaque:b.transparent===!1&&b.blending===yr&&b.alphaToCoverage===!1,alphaMap:Ge,alphaTest:Be,alphaHash:ht,combine:b.combine,mapUv:qe&&g(b.map.channel),aoMapUv:H&&g(b.aoMap.channel),lightMapUv:W&&g(b.lightMap.channel),bumpMapUv:pe&&g(b.bumpMap.channel),normalMapUv:oe&&g(b.normalMap.channel),displacementMapUv:ye&&g(b.displacementMap.channel),emissiveMapUv:ve&&g(b.emissiveMap.channel),metalnessMapUv:_&&g(b.metalnessMap.channel),roughnessMapUv:v&&g(b.roughnessMap.channel),anisotropyMapUv:te&&g(b.anisotropyMap.channel),clearcoatMapUv:Te&&g(b.clearcoatMap.channel),clearcoatNormalMapUv:re&&g(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ge&&g(b.clearcoatRoughnessMap.channel),iridescenceMapUv:Fe&&g(b.iridescenceMap.channel),iridescenceThicknessMapUv:Le&&g(b.iridescenceThicknessMap.channel),sheenColorMapUv:Ue&&g(b.sheenColorMap.channel),sheenRoughnessMapUv:$e&&g(b.sheenRoughnessMap.channel),specularMapUv:Ye&&g(b.specularMap.channel),specularColorMapUv:tt&&g(b.specularColorMap.channel),specularIntensityMapUv:Z&&g(b.specularIntensityMap.channel),transmissionMapUv:Xe&&g(b.transmissionMap.channel),thicknessMapUv:ue&&g(b.thicknessMap.channel),alphaMapUv:Ge&&g(b.alphaMap.channel),vertexTangents:!!ae.attributes.tangent&&(oe||M),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!ae.attributes.color&&ae.attributes.color.itemSize===4,pointsUvs:ce.isPoints===!0&&!!ae.attributes.uv&&(qe||Ge),fog:!!se,useFog:b.fog===!0,fogExp2:!!se&&se.isFogExp2,flatShading:b.flatShading===!0,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:d,reverseDepthBuffer:c,skinning:ce.isSkinnedMesh===!0,morphTargets:ae.morphAttributes.position!==void 0,morphNormals:ae.morphAttributes.normal!==void 0,morphColors:ae.morphAttributes.color!==void 0,morphTargetsCount:Qe,morphTextureStride:rt,numDirLights:P.directional.length,numPointLights:P.point.length,numSpotLights:P.spot.length,numSpotLightMaps:P.spotLightMap.length,numRectAreaLights:P.rectArea.length,numHemiLights:P.hemi.length,numDirLightShadows:P.directionalShadowMap.length,numPointLightShadows:P.pointShadowMap.length,numSpotLightShadows:P.spotShadowMap.length,numSpotLightShadowsWithMaps:P.numSpotLightShadowsWithMaps,numLightProbes:P.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:b.dithering,shadowMapEnabled:t.shadowMap.enabled&&V.length>0,shadowMapType:t.shadowMap.type,toneMapping:Tt,decodeVideoTexture:qe&&b.map.isVideoTexture===!0&&gt.getTransfer(b.map.colorSpace)===wt,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===ci,flipSided:b.side===un,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:Mt&&b.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Mt&&b.extensions.multiDraw===!0||De)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return dt.vertexUv1s=f.has(1),dt.vertexUv2s=f.has(2),dt.vertexUv3s=f.has(3),f.clear(),dt}function w(b){const P=[];if(b.shaderID?P.push(b.shaderID):(P.push(b.customVertexShaderID),P.push(b.customFragmentShaderID)),b.defines!==void 0)for(const V in b.defines)P.push(V),P.push(b.defines[V]);return b.isRawShaderMaterial===!1&&(T(P,b),A(P,b),P.push(t.outputColorSpace)),P.push(b.customProgramCacheKey),P.join()}function T(b,P){b.push(P.precision),b.push(P.outputColorSpace),b.push(P.envMapMode),b.push(P.envMapCubeUVHeight),b.push(P.mapUv),b.push(P.alphaMapUv),b.push(P.lightMapUv),b.push(P.aoMapUv),b.push(P.bumpMapUv),b.push(P.normalMapUv),b.push(P.displacementMapUv),b.push(P.emissiveMapUv),b.push(P.metalnessMapUv),b.push(P.roughnessMapUv),b.push(P.anisotropyMapUv),b.push(P.clearcoatMapUv),b.push(P.clearcoatNormalMapUv),b.push(P.clearcoatRoughnessMapUv),b.push(P.iridescenceMapUv),b.push(P.iridescenceThicknessMapUv),b.push(P.sheenColorMapUv),b.push(P.sheenRoughnessMapUv),b.push(P.specularMapUv),b.push(P.specularColorMapUv),b.push(P.specularIntensityMapUv),b.push(P.transmissionMapUv),b.push(P.thicknessMapUv),b.push(P.combine),b.push(P.fogExp2),b.push(P.sizeAttenuation),b.push(P.morphTargetsCount),b.push(P.morphAttributeCount),b.push(P.numDirLights),b.push(P.numPointLights),b.push(P.numSpotLights),b.push(P.numSpotLightMaps),b.push(P.numHemiLights),b.push(P.numRectAreaLights),b.push(P.numDirLightShadows),b.push(P.numPointLightShadows),b.push(P.numSpotLightShadows),b.push(P.numSpotLightShadowsWithMaps),b.push(P.numLightProbes),b.push(P.shadowMapType),b.push(P.toneMapping),b.push(P.numClippingPlanes),b.push(P.numClipIntersection),b.push(P.depthPacking)}function A(b,P){a.disableAll(),P.supportsVertexTextures&&a.enable(0),P.instancing&&a.enable(1),P.instancingColor&&a.enable(2),P.instancingMorph&&a.enable(3),P.matcap&&a.enable(4),P.envMap&&a.enable(5),P.normalMapObjectSpace&&a.enable(6),P.normalMapTangentSpace&&a.enable(7),P.clearcoat&&a.enable(8),P.iridescence&&a.enable(9),P.alphaTest&&a.enable(10),P.vertexColors&&a.enable(11),P.vertexAlphas&&a.enable(12),P.vertexUv1s&&a.enable(13),P.vertexUv2s&&a.enable(14),P.vertexUv3s&&a.enable(15),P.vertexTangents&&a.enable(16),P.anisotropy&&a.enable(17),P.alphaHash&&a.enable(18),P.batching&&a.enable(19),P.dispersion&&a.enable(20),P.batchingColor&&a.enable(21),b.push(a.mask),a.disableAll(),P.fog&&a.enable(0),P.useFog&&a.enable(1),P.flatShading&&a.enable(2),P.logarithmicDepthBuffer&&a.enable(3),P.reverseDepthBuffer&&a.enable(4),P.skinning&&a.enable(5),P.morphTargets&&a.enable(6),P.morphNormals&&a.enable(7),P.morphColors&&a.enable(8),P.premultipliedAlpha&&a.enable(9),P.shadowMapEnabled&&a.enable(10),P.doubleSided&&a.enable(11),P.flipSided&&a.enable(12),P.useDepthPacking&&a.enable(13),P.dithering&&a.enable(14),P.transmission&&a.enable(15),P.sheen&&a.enable(16),P.opaque&&a.enable(17),P.pointsUvs&&a.enable(18),P.decodeVideoTexture&&a.enable(19),P.alphaToCoverage&&a.enable(20),b.push(a.mask)}function G(b){const P=y[b.type];let V;if(P){const j=Wn[P];V=X0.clone(j.uniforms)}else V=b.uniforms;return V}function N(b,P){let V;for(let j=0,ce=h.length;j<ce;j++){const se=h[j];if(se.cacheKey===P){V=se,++V.usedTimes;break}}return V===void 0&&(V=new rM(t,P,b,s),h.push(V)),V}function k(b){if(--b.usedTimes===0){const P=h.indexOf(b);h[P]=h[h.length-1],h.pop(),b.destroy()}}function q(b){l.remove(b)}function J(){l.dispose()}return{getParameters:u,getProgramCacheKey:w,getUniforms:G,acquireProgram:N,releaseProgram:k,releaseShaderCache:q,programs:h,dispose:J}}function cM(){let t=new WeakMap;function e(o){return t.has(o)}function n(o){let a=t.get(o);return a===void 0&&(a={},t.set(o,a)),a}function i(o){t.delete(o)}function r(o,a,l){t.get(o)[a]=l}function s(){t=new WeakMap}return{has:e,get:n,remove:i,update:r,dispose:s}}function fM(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function Gu(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function Vu(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function o(d,c,m,p,y,g){let u=t[e];return u===void 0?(u={id:d.id,object:d,geometry:c,material:m,groupOrder:p,renderOrder:d.renderOrder,z:y,group:g},t[e]=u):(u.id=d.id,u.object=d,u.geometry=c,u.material=m,u.groupOrder=p,u.renderOrder=d.renderOrder,u.z=y,u.group=g),e++,u}function a(d,c,m,p,y,g){const u=o(d,c,m,p,y,g);m.transmission>0?i.push(u):m.transparent===!0?r.push(u):n.push(u)}function l(d,c,m,p,y,g){const u=o(d,c,m,p,y,g);m.transmission>0?i.unshift(u):m.transparent===!0?r.unshift(u):n.unshift(u)}function f(d,c){n.length>1&&n.sort(d||fM),i.length>1&&i.sort(c||Gu),r.length>1&&r.sort(c||Gu)}function h(){for(let d=e,c=t.length;d<c;d++){const m=t[d];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:h,sort:f}}function uM(){let t=new WeakMap;function e(i,r){const s=t.get(i);let o;return s===void 0?(o=new Vu,t.set(i,[o])):r>=s.length?(o=new Vu,s.push(o)):o=s[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}function hM(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new me,color:new yt};break;case"SpotLight":n={position:new me,direction:new me,color:new yt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new me,color:new yt,distance:0,decay:0};break;case"HemisphereLight":n={direction:new me,skyColor:new yt,groundColor:new yt};break;case"RectAreaLight":n={color:new yt,position:new me,halfWidth:new me,halfHeight:new me};break}return t[e.id]=n,n}}}function dM(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new vt};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new vt};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new vt,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let pM=0;function mM(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function _M(t){const e=new hM,n=dM(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let f=0;f<9;f++)i.probe.push(new me);const r=new me,s=new Ut,o=new Ut;function a(f){let h=0,d=0,c=0;for(let J=0;J<9;J++)i.probe[J].set(0,0,0);let m=0,p=0,y=0,g=0,u=0,w=0,T=0,A=0,G=0,N=0,k=0;f.sort(mM);for(let J=0,b=f.length;J<b;J++){const P=f[J],V=P.color,j=P.intensity,ce=P.distance,se=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)h+=V.r*j,d+=V.g*j,c+=V.b*j;else if(P.isLightProbe){for(let ae=0;ae<9;ae++)i.probe[ae].addScaledVector(P.sh.coefficients[ae],j);k++}else if(P.isDirectionalLight){const ae=e.get(P);if(ae.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const _e=P.shadow,ie=n.get(P);ie.shadowIntensity=_e.intensity,ie.shadowBias=_e.bias,ie.shadowNormalBias=_e.normalBias,ie.shadowRadius=_e.radius,ie.shadowMapSize=_e.mapSize,i.directionalShadow[m]=ie,i.directionalShadowMap[m]=se,i.directionalShadowMatrix[m]=P.shadow.matrix,w++}i.directional[m]=ae,m++}else if(P.isSpotLight){const ae=e.get(P);ae.position.setFromMatrixPosition(P.matrixWorld),ae.color.copy(V).multiplyScalar(j),ae.distance=ce,ae.coneCos=Math.cos(P.angle),ae.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),ae.decay=P.decay,i.spot[y]=ae;const _e=P.shadow;if(P.map&&(i.spotLightMap[G]=P.map,G++,_e.updateMatrices(P),P.castShadow&&N++),i.spotLightMatrix[y]=_e.matrix,P.castShadow){const ie=n.get(P);ie.shadowIntensity=_e.intensity,ie.shadowBias=_e.bias,ie.shadowNormalBias=_e.normalBias,ie.shadowRadius=_e.radius,ie.shadowMapSize=_e.mapSize,i.spotShadow[y]=ie,i.spotShadowMap[y]=se,A++}y++}else if(P.isRectAreaLight){const ae=e.get(P);ae.color.copy(V).multiplyScalar(j),ae.halfWidth.set(P.width*.5,0,0),ae.halfHeight.set(0,P.height*.5,0),i.rectArea[g]=ae,g++}else if(P.isPointLight){const ae=e.get(P);if(ae.color.copy(P.color).multiplyScalar(P.intensity),ae.distance=P.distance,ae.decay=P.decay,P.castShadow){const _e=P.shadow,ie=n.get(P);ie.shadowIntensity=_e.intensity,ie.shadowBias=_e.bias,ie.shadowNormalBias=_e.normalBias,ie.shadowRadius=_e.radius,ie.shadowMapSize=_e.mapSize,ie.shadowCameraNear=_e.camera.near,ie.shadowCameraFar=_e.camera.far,i.pointShadow[p]=ie,i.pointShadowMap[p]=se,i.pointShadowMatrix[p]=P.shadow.matrix,T++}i.point[p]=ae,p++}else if(P.isHemisphereLight){const ae=e.get(P);ae.skyColor.copy(P.color).multiplyScalar(j),ae.groundColor.copy(P.groundColor).multiplyScalar(j),i.hemi[u]=ae,u++}}g>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ke.LTC_FLOAT_1,i.rectAreaLTC2=ke.LTC_FLOAT_2):(i.rectAreaLTC1=ke.LTC_HALF_1,i.rectAreaLTC2=ke.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=d,i.ambient[2]=c;const q=i.hash;(q.directionalLength!==m||q.pointLength!==p||q.spotLength!==y||q.rectAreaLength!==g||q.hemiLength!==u||q.numDirectionalShadows!==w||q.numPointShadows!==T||q.numSpotShadows!==A||q.numSpotMaps!==G||q.numLightProbes!==k)&&(i.directional.length=m,i.spot.length=y,i.rectArea.length=g,i.point.length=p,i.hemi.length=u,i.directionalShadow.length=w,i.directionalShadowMap.length=w,i.pointShadow.length=T,i.pointShadowMap.length=T,i.spotShadow.length=A,i.spotShadowMap.length=A,i.directionalShadowMatrix.length=w,i.pointShadowMatrix.length=T,i.spotLightMatrix.length=A+G-N,i.spotLightMap.length=G,i.numSpotLightShadowsWithMaps=N,i.numLightProbes=k,q.directionalLength=m,q.pointLength=p,q.spotLength=y,q.rectAreaLength=g,q.hemiLength=u,q.numDirectionalShadows=w,q.numPointShadows=T,q.numSpotShadows=A,q.numSpotMaps=G,q.numLightProbes=k,i.version=pM++)}function l(f,h){let d=0,c=0,m=0,p=0,y=0;const g=h.matrixWorldInverse;for(let u=0,w=f.length;u<w;u++){const T=f[u];if(T.isDirectionalLight){const A=i.directional[d];A.direction.setFromMatrixPosition(T.matrixWorld),r.setFromMatrixPosition(T.target.matrixWorld),A.direction.sub(r),A.direction.transformDirection(g),d++}else if(T.isSpotLight){const A=i.spot[m];A.position.setFromMatrixPosition(T.matrixWorld),A.position.applyMatrix4(g),A.direction.setFromMatrixPosition(T.matrixWorld),r.setFromMatrixPosition(T.target.matrixWorld),A.direction.sub(r),A.direction.transformDirection(g),m++}else if(T.isRectAreaLight){const A=i.rectArea[p];A.position.setFromMatrixPosition(T.matrixWorld),A.position.applyMatrix4(g),o.identity(),s.copy(T.matrixWorld),s.premultiply(g),o.extractRotation(s),A.halfWidth.set(T.width*.5,0,0),A.halfHeight.set(0,T.height*.5,0),A.halfWidth.applyMatrix4(o),A.halfHeight.applyMatrix4(o),p++}else if(T.isPointLight){const A=i.point[c];A.position.setFromMatrixPosition(T.matrixWorld),A.position.applyMatrix4(g),c++}else if(T.isHemisphereLight){const A=i.hemi[y];A.direction.setFromMatrixPosition(T.matrixWorld),A.direction.transformDirection(g),y++}}}return{setup:a,setupView:l,state:i}}function Wu(t){const e=new _M(t),n=[],i=[];function r(h){f.camera=h,n.length=0,i.length=0}function s(h){n.push(h)}function o(h){i.push(h)}function a(){e.setup(n)}function l(h){e.setupView(n,h)}const f={lightsArray:n,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:f,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function gM(t){let e=new WeakMap;function n(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new Wu(t),e.set(r,[a])):s>=o.length?(a=new Wu(t),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:n,dispose:i}}class vM extends yo{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=h0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class xM extends yo{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const yM=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,SM=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function MM(t,e,n){let i=new ep;const r=new vt,s=new vt,o=new It,a=new vM({depthPacking:d0}),l=new xM,f={},h=n.maxTextureSize,d={[Wi]:un,[un]:Wi,[ci]:ci},c=new Yn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new vt},radius:{value:4}},vertexShader:yM,fragmentShader:SM}),m=c.clone();m.defines.HORIZONTAL_PASS=1;const p=new $i;p.setAttribute("position",new dn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const y=new En(p,c),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Pd;let u=this.type;this.render=function(N,k,q){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||N.length===0)return;const J=t.getRenderTarget(),b=t.getActiveCubeFace(),P=t.getActiveMipmapLevel(),V=t.state;V.setBlending(Hi),V.buffers.color.setClear(1,1,1,1),V.buffers.depth.setTest(!0),V.setScissorTest(!1);const j=u!==ai&&this.type===ai,ce=u===ai&&this.type!==ai;for(let se=0,ae=N.length;se<ae;se++){const _e=N[se],ie=_e.shadow;if(ie===void 0||ie.autoUpdate===!1&&ie.needsUpdate===!1)continue;r.copy(ie.mapSize);const Ne=ie.getFrameExtents();if(r.multiply(Ne),s.copy(ie.mapSize),(r.x>h||r.y>h)&&(r.x>h&&(s.x=Math.floor(h/Ne.x),r.x=s.x*Ne.x,ie.mapSize.x=s.x),r.y>h&&(s.y=Math.floor(h/Ne.y),r.y=s.y*Ne.y,ie.mapSize.y=s.y)),ie.map===null||j===!0||ce===!0){const He=this.type!==ai?{minFilter:Tn,magFilter:Tn}:{};ie.map!==null&&ie.map.dispose(),ie.map=new br(r.x,r.y,He),ie.map.texture.name=_e.name+".shadowMap",ie.camera.updateProjectionMatrix()}t.setRenderTarget(ie.map),t.clear();const ze=ie.getViewportCount();for(let He=0;He<ze;He++){const Qe=ie.getViewport(He);o.set(s.x*Qe.x,s.y*Qe.y,s.x*Qe.z,s.y*Qe.w),V.viewport(o),ie.updateMatrices(_e,He),i=ie.getFrustum(),A(k,q,ie.camera,_e,this.type)}ie.isPointLightShadow!==!0&&this.type===ai&&w(ie,q),ie.needsUpdate=!1}u=this.type,g.needsUpdate=!1,t.setRenderTarget(J,b,P)};function w(N,k){const q=e.update(y);c.defines.VSM_SAMPLES!==N.blurSamples&&(c.defines.VSM_SAMPLES=N.blurSamples,m.defines.VSM_SAMPLES=N.blurSamples,c.needsUpdate=!0,m.needsUpdate=!0),N.mapPass===null&&(N.mapPass=new br(r.x,r.y)),c.uniforms.shadow_pass.value=N.map.texture,c.uniforms.resolution.value=N.mapSize,c.uniforms.radius.value=N.radius,t.setRenderTarget(N.mapPass),t.clear(),t.renderBufferDirect(k,null,q,c,y,null),m.uniforms.shadow_pass.value=N.mapPass.texture,m.uniforms.resolution.value=N.mapSize,m.uniforms.radius.value=N.radius,t.setRenderTarget(N.map),t.clear(),t.renderBufferDirect(k,null,q,m,y,null)}function T(N,k,q,J){let b=null;const P=q.isPointLight===!0?N.customDistanceMaterial:N.customDepthMaterial;if(P!==void 0)b=P;else if(b=q.isPointLight===!0?l:a,t.localClippingEnabled&&k.clipShadows===!0&&Array.isArray(k.clippingPlanes)&&k.clippingPlanes.length!==0||k.displacementMap&&k.displacementScale!==0||k.alphaMap&&k.alphaTest>0||k.map&&k.alphaTest>0){const V=b.uuid,j=k.uuid;let ce=f[V];ce===void 0&&(ce={},f[V]=ce);let se=ce[j];se===void 0&&(se=b.clone(),ce[j]=se,k.addEventListener("dispose",G)),b=se}if(b.visible=k.visible,b.wireframe=k.wireframe,J===ai?b.side=k.shadowSide!==null?k.shadowSide:k.side:b.side=k.shadowSide!==null?k.shadowSide:d[k.side],b.alphaMap=k.alphaMap,b.alphaTest=k.alphaTest,b.map=k.map,b.clipShadows=k.clipShadows,b.clippingPlanes=k.clippingPlanes,b.clipIntersection=k.clipIntersection,b.displacementMap=k.displacementMap,b.displacementScale=k.displacementScale,b.displacementBias=k.displacementBias,b.wireframeLinewidth=k.wireframeLinewidth,b.linewidth=k.linewidth,q.isPointLight===!0&&b.isMeshDistanceMaterial===!0){const V=t.properties.get(b);V.light=q}return b}function A(N,k,q,J,b){if(N.visible===!1)return;if(N.layers.test(k.layers)&&(N.isMesh||N.isLine||N.isPoints)&&(N.castShadow||N.receiveShadow&&b===ai)&&(!N.frustumCulled||i.intersectsObject(N))){N.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,N.matrixWorld);const j=e.update(N),ce=N.material;if(Array.isArray(ce)){const se=j.groups;for(let ae=0,_e=se.length;ae<_e;ae++){const ie=se[ae],Ne=ce[ie.materialIndex];if(Ne&&Ne.visible){const ze=T(N,Ne,J,b);N.onBeforeShadow(t,N,k,q,j,ze,ie),t.renderBufferDirect(q,null,j,ze,N,ie),N.onAfterShadow(t,N,k,q,j,ze,ie)}}}else if(ce.visible){const se=T(N,ce,J,b);N.onBeforeShadow(t,N,k,q,j,se,null),t.renderBufferDirect(q,null,j,se,N,null),N.onAfterShadow(t,N,k,q,j,se,null)}}const V=N.children;for(let j=0,ce=V.length;j<ce;j++)A(V[j],k,q,J,b)}function G(N){N.target.removeEventListener("dispose",G);for(const q in f){const J=f[q],b=N.target.uuid;b in J&&(J[b].dispose(),delete J[b])}}}const TM={[Fl]:Bl,[zl]:Gl,[kl]:Vl,[ts]:Hl,[Bl]:Fl,[Gl]:zl,[Vl]:kl,[Hl]:ts};function EM(t){function e(){let Z=!1;const Xe=new It;let ue=null;const Re=new It(0,0,0,0);return{setMask:function(Ge){ue!==Ge&&!Z&&(t.colorMask(Ge,Ge,Ge,Ge),ue=Ge)},setLocked:function(Ge){Z=Ge},setClear:function(Ge,Be,ht,Mt,Tt){Tt===!0&&(Ge*=Mt,Be*=Mt,ht*=Mt),Xe.set(Ge,Be,ht,Mt),Re.equals(Xe)===!1&&(t.clearColor(Ge,Be,ht,Mt),Re.copy(Xe))},reset:function(){Z=!1,ue=null,Re.set(-1,0,0,0)}}}function n(){let Z=!1,Xe=!1,ue=null,Re=null,Ge=null;return{setReversed:function(Be){Xe=Be},setTest:function(Be){Be?Oe(t.DEPTH_TEST):ee(t.DEPTH_TEST)},setMask:function(Be){ue!==Be&&!Z&&(t.depthMask(Be),ue=Be)},setFunc:function(Be){if(Xe&&(Be=TM[Be]),Re!==Be){switch(Be){case Fl:t.depthFunc(t.NEVER);break;case Bl:t.depthFunc(t.ALWAYS);break;case zl:t.depthFunc(t.LESS);break;case ts:t.depthFunc(t.LEQUAL);break;case kl:t.depthFunc(t.EQUAL);break;case Hl:t.depthFunc(t.GEQUAL);break;case Gl:t.depthFunc(t.GREATER);break;case Vl:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}Re=Be}},setLocked:function(Be){Z=Be},setClear:function(Be){Ge!==Be&&(t.clearDepth(Be),Ge=Be)},reset:function(){Z=!1,ue=null,Re=null,Ge=null}}}function i(){let Z=!1,Xe=null,ue=null,Re=null,Ge=null,Be=null,ht=null,Mt=null,Tt=null;return{setTest:function(dt){Z||(dt?Oe(t.STENCIL_TEST):ee(t.STENCIL_TEST))},setMask:function(dt){Xe!==dt&&!Z&&(t.stencilMask(dt),Xe=dt)},setFunc:function(dt,qt,kt){(ue!==dt||Re!==qt||Ge!==kt)&&(t.stencilFunc(dt,qt,kt),ue=dt,Re=qt,Ge=kt)},setOp:function(dt,qt,kt){(Be!==dt||ht!==qt||Mt!==kt)&&(t.stencilOp(dt,qt,kt),Be=dt,ht=qt,Mt=kt)},setLocked:function(dt){Z=dt},setClear:function(dt){Tt!==dt&&(t.clearStencil(dt),Tt=dt)},reset:function(){Z=!1,Xe=null,ue=null,Re=null,Ge=null,Be=null,ht=null,Mt=null,Tt=null}}}const r=new e,s=new n,o=new i,a=new WeakMap,l=new WeakMap;let f={},h={},d=new WeakMap,c=[],m=null,p=!1,y=null,g=null,u=null,w=null,T=null,A=null,G=null,N=new yt(0,0,0),k=0,q=!1,J=null,b=null,P=null,V=null,j=null;const ce=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let se=!1,ae=0;const _e=t.getParameter(t.VERSION);_e.indexOf("WebGL")!==-1?(ae=parseFloat(/^WebGL (\d)/.exec(_e)[1]),se=ae>=1):_e.indexOf("OpenGL ES")!==-1&&(ae=parseFloat(/^OpenGL ES (\d)/.exec(_e)[1]),se=ae>=2);let ie=null,Ne={};const ze=t.getParameter(t.SCISSOR_BOX),He=t.getParameter(t.VIEWPORT),Qe=new It().fromArray(ze),rt=new It().fromArray(He);function Se(Z,Xe,ue,Re){const Ge=new Uint8Array(4),Be=t.createTexture();t.bindTexture(Z,Be),t.texParameteri(Z,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(Z,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let ht=0;ht<ue;ht++)Z===t.TEXTURE_3D||Z===t.TEXTURE_2D_ARRAY?t.texImage3D(Xe,0,t.RGBA,1,1,Re,0,t.RGBA,t.UNSIGNED_BYTE,Ge):t.texImage2D(Xe+ht,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,Ge);return Be}const Pe={};Pe[t.TEXTURE_2D]=Se(t.TEXTURE_2D,t.TEXTURE_2D,1),Pe[t.TEXTURE_CUBE_MAP]=Se(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),Pe[t.TEXTURE_2D_ARRAY]=Se(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),Pe[t.TEXTURE_3D]=Se(t.TEXTURE_3D,t.TEXTURE_3D,1,1),r.setClear(0,0,0,1),s.setClear(1),o.setClear(0),Oe(t.DEPTH_TEST),s.setFunc(ts),W(!1),pe(Jf),Oe(t.CULL_FACE),E(Hi);function Oe(Z){f[Z]!==!0&&(t.enable(Z),f[Z]=!0)}function ee(Z){f[Z]!==!1&&(t.disable(Z),f[Z]=!1)}function we(Z,Xe){return h[Z]!==Xe?(t.bindFramebuffer(Z,Xe),h[Z]=Xe,Z===t.DRAW_FRAMEBUFFER&&(h[t.FRAMEBUFFER]=Xe),Z===t.FRAMEBUFFER&&(h[t.DRAW_FRAMEBUFFER]=Xe),!0):!1}function xe(Z,Xe){let ue=c,Re=!1;if(Z){ue=d.get(Xe),ue===void 0&&(ue=[],d.set(Xe,ue));const Ge=Z.textures;if(ue.length!==Ge.length||ue[0]!==t.COLOR_ATTACHMENT0){for(let Be=0,ht=Ge.length;Be<ht;Be++)ue[Be]=t.COLOR_ATTACHMENT0+Be;ue.length=Ge.length,Re=!0}}else ue[0]!==t.BACK&&(ue[0]=t.BACK,Re=!0);Re&&t.drawBuffers(ue)}function De(Z){return m!==Z?(t.useProgram(Z),m=Z,!0):!1}const qe={[pr]:t.FUNC_ADD,[zg]:t.FUNC_SUBTRACT,[kg]:t.FUNC_REVERSE_SUBTRACT};qe[Hg]=t.MIN,qe[Gg]=t.MAX;const We={[Vg]:t.ZERO,[Wg]:t.ONE,[Xg]:t.SRC_COLOR,[Nl]:t.SRC_ALPHA,[Zg]:t.SRC_ALPHA_SATURATE,[$g]:t.DST_COLOR,[Yg]:t.DST_ALPHA,[qg]:t.ONE_MINUS_SRC_COLOR,[Ol]:t.ONE_MINUS_SRC_ALPHA,[Kg]:t.ONE_MINUS_DST_COLOR,[jg]:t.ONE_MINUS_DST_ALPHA,[Jg]:t.CONSTANT_COLOR,[Qg]:t.ONE_MINUS_CONSTANT_COLOR,[e0]:t.CONSTANT_ALPHA,[t0]:t.ONE_MINUS_CONSTANT_ALPHA};function E(Z,Xe,ue,Re,Ge,Be,ht,Mt,Tt,dt){if(Z===Hi){p===!0&&(ee(t.BLEND),p=!1);return}if(p===!1&&(Oe(t.BLEND),p=!0),Z!==Bg){if(Z!==y||dt!==q){if((g!==pr||T!==pr)&&(t.blendEquation(t.FUNC_ADD),g=pr,T=pr),dt)switch(Z){case yr:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Qf:t.blendFunc(t.ONE,t.ONE);break;case eu:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case tu:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:break}else switch(Z){case yr:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Qf:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case eu:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case tu:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:break}u=null,w=null,A=null,G=null,N.set(0,0,0),k=0,y=Z,q=dt}return}Ge=Ge||Xe,Be=Be||ue,ht=ht||Re,(Xe!==g||Ge!==T)&&(t.blendEquationSeparate(qe[Xe],qe[Ge]),g=Xe,T=Ge),(ue!==u||Re!==w||Be!==A||ht!==G)&&(t.blendFuncSeparate(We[ue],We[Re],We[Be],We[ht]),u=ue,w=Re,A=Be,G=ht),(Mt.equals(N)===!1||Tt!==k)&&(t.blendColor(Mt.r,Mt.g,Mt.b,Tt),N.copy(Mt),k=Tt),y=Z,q=!1}function H(Z,Xe){Z.side===ci?ee(t.CULL_FACE):Oe(t.CULL_FACE);let ue=Z.side===un;Xe&&(ue=!ue),W(ue),Z.blending===yr&&Z.transparent===!1?E(Hi):E(Z.blending,Z.blendEquation,Z.blendSrc,Z.blendDst,Z.blendEquationAlpha,Z.blendSrcAlpha,Z.blendDstAlpha,Z.blendColor,Z.blendAlpha,Z.premultipliedAlpha),s.setFunc(Z.depthFunc),s.setTest(Z.depthTest),s.setMask(Z.depthWrite),r.setMask(Z.colorWrite);const Re=Z.stencilWrite;o.setTest(Re),Re&&(o.setMask(Z.stencilWriteMask),o.setFunc(Z.stencilFunc,Z.stencilRef,Z.stencilFuncMask),o.setOp(Z.stencilFail,Z.stencilZFail,Z.stencilZPass)),ye(Z.polygonOffset,Z.polygonOffsetFactor,Z.polygonOffsetUnits),Z.alphaToCoverage===!0?Oe(t.SAMPLE_ALPHA_TO_COVERAGE):ee(t.SAMPLE_ALPHA_TO_COVERAGE)}function W(Z){J!==Z&&(Z?t.frontFace(t.CW):t.frontFace(t.CCW),J=Z)}function pe(Z){Z!==Ng?(Oe(t.CULL_FACE),Z!==b&&(Z===Jf?t.cullFace(t.BACK):Z===Og?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):ee(t.CULL_FACE),b=Z}function oe(Z){Z!==P&&(se&&t.lineWidth(Z),P=Z)}function ye(Z,Xe,ue){Z?(Oe(t.POLYGON_OFFSET_FILL),(V!==Xe||j!==ue)&&(t.polygonOffset(Xe,ue),V=Xe,j=ue)):ee(t.POLYGON_OFFSET_FILL)}function ve(Z){Z?Oe(t.SCISSOR_TEST):ee(t.SCISSOR_TEST)}function _(Z){Z===void 0&&(Z=t.TEXTURE0+ce-1),ie!==Z&&(t.activeTexture(Z),ie=Z)}function v(Z,Xe,ue){ue===void 0&&(ie===null?ue=t.TEXTURE0+ce-1:ue=ie);let Re=Ne[ue];Re===void 0&&(Re={type:void 0,texture:void 0},Ne[ue]=Re),(Re.type!==Z||Re.texture!==Xe)&&(ie!==ue&&(t.activeTexture(ue),ie=ue),t.bindTexture(Z,Xe||Pe[Z]),Re.type=Z,Re.texture=Xe)}function M(){const Z=Ne[ie];Z!==void 0&&Z.type!==void 0&&(t.bindTexture(Z.type,null),Z.type=void 0,Z.texture=void 0)}function C(){try{t.compressedTexImage2D.apply(t,arguments)}catch{}}function U(){try{t.compressedTexImage3D.apply(t,arguments)}catch{}}function F(){try{t.texSubImage2D.apply(t,arguments)}catch{}}function K(){try{t.texSubImage3D.apply(t,arguments)}catch{}}function X(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch{}}function te(){try{t.compressedTexSubImage3D.apply(t,arguments)}catch{}}function Te(){try{t.texStorage2D.apply(t,arguments)}catch{}}function re(){try{t.texStorage3D.apply(t,arguments)}catch{}}function ge(){try{t.texImage2D.apply(t,arguments)}catch{}}function Fe(){try{t.texImage3D.apply(t,arguments)}catch{}}function Le(Z){Qe.equals(Z)===!1&&(t.scissor(Z.x,Z.y,Z.z,Z.w),Qe.copy(Z))}function Ue(Z){rt.equals(Z)===!1&&(t.viewport(Z.x,Z.y,Z.z,Z.w),rt.copy(Z))}function $e(Z,Xe){let ue=l.get(Xe);ue===void 0&&(ue=new WeakMap,l.set(Xe,ue));let Re=ue.get(Z);Re===void 0&&(Re=t.getUniformBlockIndex(Xe,Z.name),ue.set(Z,Re))}function Ye(Z,Xe){const Re=l.get(Xe).get(Z);a.get(Xe)!==Re&&(t.uniformBlockBinding(Xe,Re,Z.__bindingPointIndex),a.set(Xe,Re))}function tt(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),f={},ie=null,Ne={},h={},d=new WeakMap,c=[],m=null,p=!1,y=null,g=null,u=null,w=null,T=null,A=null,G=null,N=new yt(0,0,0),k=0,q=!1,J=null,b=null,P=null,V=null,j=null,Qe.set(0,0,t.canvas.width,t.canvas.height),rt.set(0,0,t.canvas.width,t.canvas.height),r.reset(),s.reset(),o.reset()}return{buffers:{color:r,depth:s,stencil:o},enable:Oe,disable:ee,bindFramebuffer:we,drawBuffers:xe,useProgram:De,setBlending:E,setMaterial:H,setFlipSided:W,setCullFace:pe,setLineWidth:oe,setPolygonOffset:ye,setScissorTest:ve,activeTexture:_,bindTexture:v,unbindTexture:M,compressedTexImage2D:C,compressedTexImage3D:U,texImage2D:ge,texImage3D:Fe,updateUBOMapping:$e,uniformBlockBinding:Ye,texStorage2D:Te,texStorage3D:re,texSubImage2D:F,texSubImage3D:K,compressedTexSubImage2D:X,compressedTexSubImage3D:te,scissor:Le,viewport:Ue,reset:tt}}function Xu(t,e,n,i){const r=bM(i);switch(n){case Od:return t*e;case Bd:return t*e;case zd:return t*e*2;case kd:return t*e/r.components*r.byteLength;case rf:return t*e/r.components*r.byteLength;case Hd:return t*e*2/r.components*r.byteLength;case sf:return t*e*2/r.components*r.byteLength;case Fd:return t*e*3/r.components*r.byteLength;case Un:return t*e*4/r.components*r.byteLength;case af:return t*e*4/r.components*r.byteLength;case ka:case Ha:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Ga:case Va:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case $l:case Zl:return Math.max(t,16)*Math.max(e,8)/4;case jl:case Kl:return Math.max(t,8)*Math.max(e,8)/2;case Jl:case Ql:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case ec:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case tc:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case nc:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case ic:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case rc:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case sc:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case ac:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case oc:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case lc:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case cc:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case fc:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case uc:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case hc:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case dc:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case pc:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case Wa:case mc:case _c:return Math.ceil(t/4)*Math.ceil(e/4)*16;case Gd:case gc:return Math.ceil(t/4)*Math.ceil(e/4)*8;case vc:case xc:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function bM(t){switch(t){case mi:case Id:return{byteLength:1,components:1};case qs:case Ud:case Js:return{byteLength:2,components:1};case tf:case nf:return{byteLength:2,components:4};case Er:case ef:case ui:return{byteLength:4,components:1};case Nd:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${t}.`)}function wM(t,e,n,i,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),f=new vt,h=new WeakMap;let d;const c=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function p(_,v){return m?new OffscreenCanvas(_,v):Ys("canvas")}function y(_,v,M){let C=1;const U=ve(_);if((U.width>M||U.height>M)&&(C=M/Math.max(U.width,U.height)),C<1)if(typeof HTMLImageElement<"u"&&_ instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&_ instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&_ instanceof ImageBitmap||typeof VideoFrame<"u"&&_ instanceof VideoFrame){const F=Math.floor(C*U.width),K=Math.floor(C*U.height);d===void 0&&(d=p(F,K));const X=v?p(F,K):d;return X.width=F,X.height=K,X.getContext("2d").drawImage(_,0,0,F,K),X}else return"data"in _,_;return _}function g(_){return _.generateMipmaps&&_.minFilter!==Tn&&_.minFilter!==Dn}function u(_){t.generateMipmap(_)}function w(_,v,M,C,U=!1){if(_!==null&&t[_]!==void 0)return t[_];let F=v;if(v===t.RED&&(M===t.FLOAT&&(F=t.R32F),M===t.HALF_FLOAT&&(F=t.R16F),M===t.UNSIGNED_BYTE&&(F=t.R8)),v===t.RED_INTEGER&&(M===t.UNSIGNED_BYTE&&(F=t.R8UI),M===t.UNSIGNED_SHORT&&(F=t.R16UI),M===t.UNSIGNED_INT&&(F=t.R32UI),M===t.BYTE&&(F=t.R8I),M===t.SHORT&&(F=t.R16I),M===t.INT&&(F=t.R32I)),v===t.RG&&(M===t.FLOAT&&(F=t.RG32F),M===t.HALF_FLOAT&&(F=t.RG16F),M===t.UNSIGNED_BYTE&&(F=t.RG8)),v===t.RG_INTEGER&&(M===t.UNSIGNED_BYTE&&(F=t.RG8UI),M===t.UNSIGNED_SHORT&&(F=t.RG16UI),M===t.UNSIGNED_INT&&(F=t.RG32UI),M===t.BYTE&&(F=t.RG8I),M===t.SHORT&&(F=t.RG16I),M===t.INT&&(F=t.RG32I)),v===t.RGB_INTEGER&&(M===t.UNSIGNED_BYTE&&(F=t.RGB8UI),M===t.UNSIGNED_SHORT&&(F=t.RGB16UI),M===t.UNSIGNED_INT&&(F=t.RGB32UI),M===t.BYTE&&(F=t.RGB8I),M===t.SHORT&&(F=t.RGB16I),M===t.INT&&(F=t.RGB32I)),v===t.RGBA_INTEGER&&(M===t.UNSIGNED_BYTE&&(F=t.RGBA8UI),M===t.UNSIGNED_SHORT&&(F=t.RGBA16UI),M===t.UNSIGNED_INT&&(F=t.RGBA32UI),M===t.BYTE&&(F=t.RGBA8I),M===t.SHORT&&(F=t.RGBA16I),M===t.INT&&(F=t.RGBA32I)),v===t.RGB&&M===t.UNSIGNED_INT_5_9_9_9_REV&&(F=t.RGB9_E5),v===t.RGBA){const K=U?eo:gt.getTransfer(C);M===t.FLOAT&&(F=t.RGBA32F),M===t.HALF_FLOAT&&(F=t.RGBA16F),M===t.UNSIGNED_BYTE&&(F=K===wt?t.SRGB8_ALPHA8:t.RGBA8),M===t.UNSIGNED_SHORT_4_4_4_4&&(F=t.RGBA4),M===t.UNSIGNED_SHORT_5_5_5_1&&(F=t.RGB5_A1)}return(F===t.R16F||F===t.R32F||F===t.RG16F||F===t.RG32F||F===t.RGBA16F||F===t.RGBA32F)&&e.get("EXT_color_buffer_float"),F}function T(_,v){let M;return _?v===null||v===Er||v===rs?M=t.DEPTH24_STENCIL8:v===ui?M=t.DEPTH32F_STENCIL8:v===qs&&(M=t.DEPTH24_STENCIL8):v===null||v===Er||v===rs?M=t.DEPTH_COMPONENT24:v===ui?M=t.DEPTH_COMPONENT32F:v===qs&&(M=t.DEPTH_COMPONENT16),M}function A(_,v){return g(_)===!0||_.isFramebufferTexture&&_.minFilter!==Tn&&_.minFilter!==Dn?Math.log2(Math.max(v.width,v.height))+1:_.mipmaps!==void 0&&_.mipmaps.length>0?_.mipmaps.length:_.isCompressedTexture&&Array.isArray(_.image)?v.mipmaps.length:1}function G(_){const v=_.target;v.removeEventListener("dispose",G),k(v),v.isVideoTexture&&h.delete(v)}function N(_){const v=_.target;v.removeEventListener("dispose",N),J(v)}function k(_){const v=i.get(_);if(v.__webglInit===void 0)return;const M=_.source,C=c.get(M);if(C){const U=C[v.__cacheKey];U.usedTimes--,U.usedTimes===0&&q(_),Object.keys(C).length===0&&c.delete(M)}i.remove(_)}function q(_){const v=i.get(_);t.deleteTexture(v.__webglTexture);const M=_.source,C=c.get(M);delete C[v.__cacheKey],o.memory.textures--}function J(_){const v=i.get(_);if(_.depthTexture&&_.depthTexture.dispose(),_.isWebGLCubeRenderTarget)for(let C=0;C<6;C++){if(Array.isArray(v.__webglFramebuffer[C]))for(let U=0;U<v.__webglFramebuffer[C].length;U++)t.deleteFramebuffer(v.__webglFramebuffer[C][U]);else t.deleteFramebuffer(v.__webglFramebuffer[C]);v.__webglDepthbuffer&&t.deleteRenderbuffer(v.__webglDepthbuffer[C])}else{if(Array.isArray(v.__webglFramebuffer))for(let C=0;C<v.__webglFramebuffer.length;C++)t.deleteFramebuffer(v.__webglFramebuffer[C]);else t.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&t.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&t.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let C=0;C<v.__webglColorRenderbuffer.length;C++)v.__webglColorRenderbuffer[C]&&t.deleteRenderbuffer(v.__webglColorRenderbuffer[C]);v.__webglDepthRenderbuffer&&t.deleteRenderbuffer(v.__webglDepthRenderbuffer)}const M=_.textures;for(let C=0,U=M.length;C<U;C++){const F=i.get(M[C]);F.__webglTexture&&(t.deleteTexture(F.__webglTexture),o.memory.textures--),i.remove(M[C])}i.remove(_)}let b=0;function P(){b=0}function V(){const _=b;return _>=r.maxTextures,b+=1,_}function j(_){const v=[];return v.push(_.wrapS),v.push(_.wrapT),v.push(_.wrapR||0),v.push(_.magFilter),v.push(_.minFilter),v.push(_.anisotropy),v.push(_.internalFormat),v.push(_.format),v.push(_.type),v.push(_.generateMipmaps),v.push(_.premultiplyAlpha),v.push(_.flipY),v.push(_.unpackAlignment),v.push(_.colorSpace),v.join()}function ce(_,v){const M=i.get(_);if(_.isVideoTexture&&oe(_),_.isRenderTargetTexture===!1&&_.version>0&&M.__version!==_.version){const C=_.image;if(C!==null){if(C.complete!==!1){rt(M,_,v);return}}}n.bindTexture(t.TEXTURE_2D,M.__webglTexture,t.TEXTURE0+v)}function se(_,v){const M=i.get(_);if(_.version>0&&M.__version!==_.version){rt(M,_,v);return}n.bindTexture(t.TEXTURE_2D_ARRAY,M.__webglTexture,t.TEXTURE0+v)}function ae(_,v){const M=i.get(_);if(_.version>0&&M.__version!==_.version){rt(M,_,v);return}n.bindTexture(t.TEXTURE_3D,M.__webglTexture,t.TEXTURE0+v)}function _e(_,v){const M=i.get(_);if(_.version>0&&M.__version!==_.version){Se(M,_,v);return}n.bindTexture(t.TEXTURE_CUBE_MAP,M.__webglTexture,t.TEXTURE0+v)}const ie={[ql]:t.REPEAT,[_r]:t.CLAMP_TO_EDGE,[Yl]:t.MIRRORED_REPEAT},Ne={[Tn]:t.NEAREST,[u0]:t.NEAREST_MIPMAP_NEAREST,[fa]:t.NEAREST_MIPMAP_LINEAR,[Dn]:t.LINEAR,[zo]:t.LINEAR_MIPMAP_NEAREST,[gr]:t.LINEAR_MIPMAP_LINEAR},ze={[_0]:t.NEVER,[M0]:t.ALWAYS,[g0]:t.LESS,[Vd]:t.LEQUAL,[v0]:t.EQUAL,[S0]:t.GEQUAL,[x0]:t.GREATER,[y0]:t.NOTEQUAL};function He(_,v){if(v.type===ui&&e.has("OES_texture_float_linear")===!1&&(v.magFilter===Dn||v.magFilter===zo||v.magFilter===fa||v.magFilter===gr||v.minFilter===Dn||v.minFilter===zo||v.minFilter===fa||v.minFilter),t.texParameteri(_,t.TEXTURE_WRAP_S,ie[v.wrapS]),t.texParameteri(_,t.TEXTURE_WRAP_T,ie[v.wrapT]),(_===t.TEXTURE_3D||_===t.TEXTURE_2D_ARRAY)&&t.texParameteri(_,t.TEXTURE_WRAP_R,ie[v.wrapR]),t.texParameteri(_,t.TEXTURE_MAG_FILTER,Ne[v.magFilter]),t.texParameteri(_,t.TEXTURE_MIN_FILTER,Ne[v.minFilter]),v.compareFunction&&(t.texParameteri(_,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(_,t.TEXTURE_COMPARE_FUNC,ze[v.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===Tn||v.minFilter!==fa&&v.minFilter!==gr||v.type===ui&&e.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||i.get(v).__currentAnisotropy){const M=e.get("EXT_texture_filter_anisotropic");t.texParameterf(_,M.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,r.getMaxAnisotropy())),i.get(v).__currentAnisotropy=v.anisotropy}}}function Qe(_,v){let M=!1;_.__webglInit===void 0&&(_.__webglInit=!0,v.addEventListener("dispose",G));const C=v.source;let U=c.get(C);U===void 0&&(U={},c.set(C,U));const F=j(v);if(F!==_.__cacheKey){U[F]===void 0&&(U[F]={texture:t.createTexture(),usedTimes:0},o.memory.textures++,M=!0),U[F].usedTimes++;const K=U[_.__cacheKey];K!==void 0&&(U[_.__cacheKey].usedTimes--,K.usedTimes===0&&q(v)),_.__cacheKey=F,_.__webglTexture=U[F].texture}return M}function rt(_,v,M){let C=t.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(C=t.TEXTURE_2D_ARRAY),v.isData3DTexture&&(C=t.TEXTURE_3D);const U=Qe(_,v),F=v.source;n.bindTexture(C,_.__webglTexture,t.TEXTURE0+M);const K=i.get(F);if(F.version!==K.__version||U===!0){n.activeTexture(t.TEXTURE0+M);const X=gt.getPrimaries(gt.workingColorSpace),te=v.colorSpace===Oi?null:gt.getPrimaries(v.colorSpace),Te=v.colorSpace===Oi||X===te?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,v.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,v.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Te);let re=y(v.image,!1,r.maxTextureSize);re=ye(v,re);const ge=s.convert(v.format,v.colorSpace),Fe=s.convert(v.type);let Le=w(v.internalFormat,ge,Fe,v.colorSpace,v.isVideoTexture);He(C,v);let Ue;const $e=v.mipmaps,Ye=v.isVideoTexture!==!0,tt=K.__version===void 0||U===!0,Z=F.dataReady,Xe=A(v,re);if(v.isDepthTexture)Le=T(v.format===ss,v.type),tt&&(Ye?n.texStorage2D(t.TEXTURE_2D,1,Le,re.width,re.height):n.texImage2D(t.TEXTURE_2D,0,Le,re.width,re.height,0,ge,Fe,null));else if(v.isDataTexture)if($e.length>0){Ye&&tt&&n.texStorage2D(t.TEXTURE_2D,Xe,Le,$e[0].width,$e[0].height);for(let ue=0,Re=$e.length;ue<Re;ue++)Ue=$e[ue],Ye?Z&&n.texSubImage2D(t.TEXTURE_2D,ue,0,0,Ue.width,Ue.height,ge,Fe,Ue.data):n.texImage2D(t.TEXTURE_2D,ue,Le,Ue.width,Ue.height,0,ge,Fe,Ue.data);v.generateMipmaps=!1}else Ye?(tt&&n.texStorage2D(t.TEXTURE_2D,Xe,Le,re.width,re.height),Z&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,re.width,re.height,ge,Fe,re.data)):n.texImage2D(t.TEXTURE_2D,0,Le,re.width,re.height,0,ge,Fe,re.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){Ye&&tt&&n.texStorage3D(t.TEXTURE_2D_ARRAY,Xe,Le,$e[0].width,$e[0].height,re.depth);for(let ue=0,Re=$e.length;ue<Re;ue++)if(Ue=$e[ue],v.format!==Un){if(ge!==null)if(Ye){if(Z)if(v.layerUpdates.size>0){const Ge=Xu(Ue.width,Ue.height,v.format,v.type);for(const Be of v.layerUpdates){const ht=Ue.data.subarray(Be*Ge/Ue.data.BYTES_PER_ELEMENT,(Be+1)*Ge/Ue.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,ue,0,0,Be,Ue.width,Ue.height,1,ge,ht,0,0)}v.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,ue,0,0,0,Ue.width,Ue.height,re.depth,ge,Ue.data,0,0)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,ue,Le,Ue.width,Ue.height,re.depth,0,Ue.data,0,0)}else Ye?Z&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,ue,0,0,0,Ue.width,Ue.height,re.depth,ge,Fe,Ue.data):n.texImage3D(t.TEXTURE_2D_ARRAY,ue,Le,Ue.width,Ue.height,re.depth,0,ge,Fe,Ue.data)}else{Ye&&tt&&n.texStorage2D(t.TEXTURE_2D,Xe,Le,$e[0].width,$e[0].height);for(let ue=0,Re=$e.length;ue<Re;ue++)Ue=$e[ue],v.format!==Un?ge!==null&&(Ye?Z&&n.compressedTexSubImage2D(t.TEXTURE_2D,ue,0,0,Ue.width,Ue.height,ge,Ue.data):n.compressedTexImage2D(t.TEXTURE_2D,ue,Le,Ue.width,Ue.height,0,Ue.data)):Ye?Z&&n.texSubImage2D(t.TEXTURE_2D,ue,0,0,Ue.width,Ue.height,ge,Fe,Ue.data):n.texImage2D(t.TEXTURE_2D,ue,Le,Ue.width,Ue.height,0,ge,Fe,Ue.data)}else if(v.isDataArrayTexture)if(Ye){if(tt&&n.texStorage3D(t.TEXTURE_2D_ARRAY,Xe,Le,re.width,re.height,re.depth),Z)if(v.layerUpdates.size>0){const ue=Xu(re.width,re.height,v.format,v.type);for(const Re of v.layerUpdates){const Ge=re.data.subarray(Re*ue/re.data.BYTES_PER_ELEMENT,(Re+1)*ue/re.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,Re,re.width,re.height,1,ge,Fe,Ge)}v.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,re.width,re.height,re.depth,ge,Fe,re.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,Le,re.width,re.height,re.depth,0,ge,Fe,re.data);else if(v.isData3DTexture)Ye?(tt&&n.texStorage3D(t.TEXTURE_3D,Xe,Le,re.width,re.height,re.depth),Z&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,re.width,re.height,re.depth,ge,Fe,re.data)):n.texImage3D(t.TEXTURE_3D,0,Le,re.width,re.height,re.depth,0,ge,Fe,re.data);else if(v.isFramebufferTexture){if(tt)if(Ye)n.texStorage2D(t.TEXTURE_2D,Xe,Le,re.width,re.height);else{let ue=re.width,Re=re.height;for(let Ge=0;Ge<Xe;Ge++)n.texImage2D(t.TEXTURE_2D,Ge,Le,ue,Re,0,ge,Fe,null),ue>>=1,Re>>=1}}else if($e.length>0){if(Ye&&tt){const ue=ve($e[0]);n.texStorage2D(t.TEXTURE_2D,Xe,Le,ue.width,ue.height)}for(let ue=0,Re=$e.length;ue<Re;ue++)Ue=$e[ue],Ye?Z&&n.texSubImage2D(t.TEXTURE_2D,ue,0,0,ge,Fe,Ue):n.texImage2D(t.TEXTURE_2D,ue,Le,ge,Fe,Ue);v.generateMipmaps=!1}else if(Ye){if(tt){const ue=ve(re);n.texStorage2D(t.TEXTURE_2D,Xe,Le,ue.width,ue.height)}Z&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,ge,Fe,re)}else n.texImage2D(t.TEXTURE_2D,0,Le,ge,Fe,re);g(v)&&u(C),K.__version=F.version,v.onUpdate&&v.onUpdate(v)}_.__version=v.version}function Se(_,v,M){if(v.image.length!==6)return;const C=Qe(_,v),U=v.source;n.bindTexture(t.TEXTURE_CUBE_MAP,_.__webglTexture,t.TEXTURE0+M);const F=i.get(U);if(U.version!==F.__version||C===!0){n.activeTexture(t.TEXTURE0+M);const K=gt.getPrimaries(gt.workingColorSpace),X=v.colorSpace===Oi?null:gt.getPrimaries(v.colorSpace),te=v.colorSpace===Oi||K===X?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,v.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,v.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,te);const Te=v.isCompressedTexture||v.image[0].isCompressedTexture,re=v.image[0]&&v.image[0].isDataTexture,ge=[];for(let Re=0;Re<6;Re++)!Te&&!re?ge[Re]=y(v.image[Re],!0,r.maxCubemapSize):ge[Re]=re?v.image[Re].image:v.image[Re],ge[Re]=ye(v,ge[Re]);const Fe=ge[0],Le=s.convert(v.format,v.colorSpace),Ue=s.convert(v.type),$e=w(v.internalFormat,Le,Ue,v.colorSpace),Ye=v.isVideoTexture!==!0,tt=F.__version===void 0||C===!0,Z=U.dataReady;let Xe=A(v,Fe);He(t.TEXTURE_CUBE_MAP,v);let ue;if(Te){Ye&&tt&&n.texStorage2D(t.TEXTURE_CUBE_MAP,Xe,$e,Fe.width,Fe.height);for(let Re=0;Re<6;Re++){ue=ge[Re].mipmaps;for(let Ge=0;Ge<ue.length;Ge++){const Be=ue[Ge];v.format!==Un?Le!==null&&(Ye?Z&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Re,Ge,0,0,Be.width,Be.height,Le,Be.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Re,Ge,$e,Be.width,Be.height,0,Be.data)):Ye?Z&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Re,Ge,0,0,Be.width,Be.height,Le,Ue,Be.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Re,Ge,$e,Be.width,Be.height,0,Le,Ue,Be.data)}}}else{if(ue=v.mipmaps,Ye&&tt){ue.length>0&&Xe++;const Re=ve(ge[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,Xe,$e,Re.width,Re.height)}for(let Re=0;Re<6;Re++)if(re){Ye?Z&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Re,0,0,0,ge[Re].width,ge[Re].height,Le,Ue,ge[Re].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Re,0,$e,ge[Re].width,ge[Re].height,0,Le,Ue,ge[Re].data);for(let Ge=0;Ge<ue.length;Ge++){const ht=ue[Ge].image[Re].image;Ye?Z&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Re,Ge+1,0,0,ht.width,ht.height,Le,Ue,ht.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Re,Ge+1,$e,ht.width,ht.height,0,Le,Ue,ht.data)}}else{Ye?Z&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Re,0,0,0,Le,Ue,ge[Re]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Re,0,$e,Le,Ue,ge[Re]);for(let Ge=0;Ge<ue.length;Ge++){const Be=ue[Ge];Ye?Z&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Re,Ge+1,0,0,Le,Ue,Be.image[Re]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Re,Ge+1,$e,Le,Ue,Be.image[Re])}}}g(v)&&u(t.TEXTURE_CUBE_MAP),F.__version=U.version,v.onUpdate&&v.onUpdate(v)}_.__version=v.version}function Pe(_,v,M,C,U,F){const K=s.convert(M.format,M.colorSpace),X=s.convert(M.type),te=w(M.internalFormat,K,X,M.colorSpace);if(!i.get(v).__hasExternalTextures){const re=Math.max(1,v.width>>F),ge=Math.max(1,v.height>>F);U===t.TEXTURE_3D||U===t.TEXTURE_2D_ARRAY?n.texImage3D(U,F,te,re,ge,v.depth,0,K,X,null):n.texImage2D(U,F,te,re,ge,0,K,X,null)}n.bindFramebuffer(t.FRAMEBUFFER,_),pe(v)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,C,U,i.get(M).__webglTexture,0,W(v)):(U===t.TEXTURE_2D||U>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&U<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,C,U,i.get(M).__webglTexture,F),n.bindFramebuffer(t.FRAMEBUFFER,null)}function Oe(_,v,M){if(t.bindRenderbuffer(t.RENDERBUFFER,_),v.depthBuffer){const C=v.depthTexture,U=C&&C.isDepthTexture?C.type:null,F=T(v.stencilBuffer,U),K=v.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,X=W(v);pe(v)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,X,F,v.width,v.height):M?t.renderbufferStorageMultisample(t.RENDERBUFFER,X,F,v.width,v.height):t.renderbufferStorage(t.RENDERBUFFER,F,v.width,v.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,K,t.RENDERBUFFER,_)}else{const C=v.textures;for(let U=0;U<C.length;U++){const F=C[U],K=s.convert(F.format,F.colorSpace),X=s.convert(F.type),te=w(F.internalFormat,K,X,F.colorSpace),Te=W(v);M&&pe(v)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,Te,te,v.width,v.height):pe(v)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Te,te,v.width,v.height):t.renderbufferStorage(t.RENDERBUFFER,te,v.width,v.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function ee(_,v){if(v&&v.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,_),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(v.depthTexture).__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),ce(v.depthTexture,0);const C=i.get(v.depthTexture).__webglTexture,U=W(v);if(v.depthTexture.format===Zr)pe(v)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,C,0,U):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,C,0);else if(v.depthTexture.format===ss)pe(v)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,C,0,U):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,C,0);else throw new Error("Unknown depthTexture format")}function we(_){const v=i.get(_),M=_.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==_.depthTexture){const C=_.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),C){const U=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,C.removeEventListener("dispose",U)};C.addEventListener("dispose",U),v.__depthDisposeCallback=U}v.__boundDepthTexture=C}if(_.depthTexture&&!v.__autoAllocateDepthBuffer){if(M)throw new Error("target.depthTexture not supported in Cube render targets");ee(v.__webglFramebuffer,_)}else if(M){v.__webglDepthbuffer=[];for(let C=0;C<6;C++)if(n.bindFramebuffer(t.FRAMEBUFFER,v.__webglFramebuffer[C]),v.__webglDepthbuffer[C]===void 0)v.__webglDepthbuffer[C]=t.createRenderbuffer(),Oe(v.__webglDepthbuffer[C],_,!1);else{const U=_.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,F=v.__webglDepthbuffer[C];t.bindRenderbuffer(t.RENDERBUFFER,F),t.framebufferRenderbuffer(t.FRAMEBUFFER,U,t.RENDERBUFFER,F)}}else if(n.bindFramebuffer(t.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=t.createRenderbuffer(),Oe(v.__webglDepthbuffer,_,!1);else{const C=_.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,U=v.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,U),t.framebufferRenderbuffer(t.FRAMEBUFFER,C,t.RENDERBUFFER,U)}n.bindFramebuffer(t.FRAMEBUFFER,null)}function xe(_,v,M){const C=i.get(_);v!==void 0&&Pe(C.__webglFramebuffer,_,_.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),M!==void 0&&we(_)}function De(_){const v=_.texture,M=i.get(_),C=i.get(v);_.addEventListener("dispose",N);const U=_.textures,F=_.isWebGLCubeRenderTarget===!0,K=U.length>1;if(K||(C.__webglTexture===void 0&&(C.__webglTexture=t.createTexture()),C.__version=v.version,o.memory.textures++),F){M.__webglFramebuffer=[];for(let X=0;X<6;X++)if(v.mipmaps&&v.mipmaps.length>0){M.__webglFramebuffer[X]=[];for(let te=0;te<v.mipmaps.length;te++)M.__webglFramebuffer[X][te]=t.createFramebuffer()}else M.__webglFramebuffer[X]=t.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){M.__webglFramebuffer=[];for(let X=0;X<v.mipmaps.length;X++)M.__webglFramebuffer[X]=t.createFramebuffer()}else M.__webglFramebuffer=t.createFramebuffer();if(K)for(let X=0,te=U.length;X<te;X++){const Te=i.get(U[X]);Te.__webglTexture===void 0&&(Te.__webglTexture=t.createTexture(),o.memory.textures++)}if(_.samples>0&&pe(_)===!1){M.__webglMultisampledFramebuffer=t.createFramebuffer(),M.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,M.__webglMultisampledFramebuffer);for(let X=0;X<U.length;X++){const te=U[X];M.__webglColorRenderbuffer[X]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,M.__webglColorRenderbuffer[X]);const Te=s.convert(te.format,te.colorSpace),re=s.convert(te.type),ge=w(te.internalFormat,Te,re,te.colorSpace,_.isXRRenderTarget===!0),Fe=W(_);t.renderbufferStorageMultisample(t.RENDERBUFFER,Fe,ge,_.width,_.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+X,t.RENDERBUFFER,M.__webglColorRenderbuffer[X])}t.bindRenderbuffer(t.RENDERBUFFER,null),_.depthBuffer&&(M.__webglDepthRenderbuffer=t.createRenderbuffer(),Oe(M.__webglDepthRenderbuffer,_,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(F){n.bindTexture(t.TEXTURE_CUBE_MAP,C.__webglTexture),He(t.TEXTURE_CUBE_MAP,v);for(let X=0;X<6;X++)if(v.mipmaps&&v.mipmaps.length>0)for(let te=0;te<v.mipmaps.length;te++)Pe(M.__webglFramebuffer[X][te],_,v,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+X,te);else Pe(M.__webglFramebuffer[X],_,v,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+X,0);g(v)&&u(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(K){for(let X=0,te=U.length;X<te;X++){const Te=U[X],re=i.get(Te);n.bindTexture(t.TEXTURE_2D,re.__webglTexture),He(t.TEXTURE_2D,Te),Pe(M.__webglFramebuffer,_,Te,t.COLOR_ATTACHMENT0+X,t.TEXTURE_2D,0),g(Te)&&u(t.TEXTURE_2D)}n.unbindTexture()}else{let X=t.TEXTURE_2D;if((_.isWebGL3DRenderTarget||_.isWebGLArrayRenderTarget)&&(X=_.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(X,C.__webglTexture),He(X,v),v.mipmaps&&v.mipmaps.length>0)for(let te=0;te<v.mipmaps.length;te++)Pe(M.__webglFramebuffer[te],_,v,t.COLOR_ATTACHMENT0,X,te);else Pe(M.__webglFramebuffer,_,v,t.COLOR_ATTACHMENT0,X,0);g(v)&&u(X),n.unbindTexture()}_.depthBuffer&&we(_)}function qe(_){const v=_.textures;for(let M=0,C=v.length;M<C;M++){const U=v[M];if(g(U)){const F=_.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:t.TEXTURE_2D,K=i.get(U).__webglTexture;n.bindTexture(F,K),u(F),n.unbindTexture()}}}const We=[],E=[];function H(_){if(_.samples>0){if(pe(_)===!1){const v=_.textures,M=_.width,C=_.height;let U=t.COLOR_BUFFER_BIT;const F=_.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,K=i.get(_),X=v.length>1;if(X)for(let te=0;te<v.length;te++)n.bindFramebuffer(t.FRAMEBUFFER,K.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+te,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,K.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+te,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,K.__webglMultisampledFramebuffer),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,K.__webglFramebuffer);for(let te=0;te<v.length;te++){if(_.resolveDepthBuffer&&(_.depthBuffer&&(U|=t.DEPTH_BUFFER_BIT),_.stencilBuffer&&_.resolveStencilBuffer&&(U|=t.STENCIL_BUFFER_BIT)),X){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,K.__webglColorRenderbuffer[te]);const Te=i.get(v[te]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,Te,0)}t.blitFramebuffer(0,0,M,C,0,0,M,C,U,t.NEAREST),l===!0&&(We.length=0,E.length=0,We.push(t.COLOR_ATTACHMENT0+te),_.depthBuffer&&_.resolveDepthBuffer===!1&&(We.push(F),E.push(F),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,E)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,We))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),X)for(let te=0;te<v.length;te++){n.bindFramebuffer(t.FRAMEBUFFER,K.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+te,t.RENDERBUFFER,K.__webglColorRenderbuffer[te]);const Te=i.get(v[te]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,K.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+te,t.TEXTURE_2D,Te,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,K.__webglMultisampledFramebuffer)}else if(_.depthBuffer&&_.resolveDepthBuffer===!1&&l){const v=_.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[v])}}}function W(_){return Math.min(r.maxSamples,_.samples)}function pe(_){const v=i.get(_);return _.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function oe(_){const v=o.render.frame;h.get(_)!==v&&(h.set(_,v),_.update())}function ye(_,v){const M=_.colorSpace,C=_.format,U=_.type;return _.isCompressedTexture===!0||_.isVideoTexture===!0||M!==ji&&M!==Oi&&gt.getTransfer(M),v}function ve(_){return typeof HTMLImageElement<"u"&&_ instanceof HTMLImageElement?(f.width=_.naturalWidth||_.width,f.height=_.naturalHeight||_.height):typeof VideoFrame<"u"&&_ instanceof VideoFrame?(f.width=_.displayWidth,f.height=_.displayHeight):(f.width=_.width,f.height=_.height),f}this.allocateTextureUnit=V,this.resetTextureUnits=P,this.setTexture2D=ce,this.setTexture2DArray=se,this.setTexture3D=ae,this.setTextureCube=_e,this.rebindTextures=xe,this.setupRenderTarget=De,this.updateRenderTargetMipmap=qe,this.updateMultisampleRenderTarget=H,this.setupDepthRenderbuffer=we,this.setupFrameBufferTexture=Pe,this.useMultisampledRTT=pe}function AM(t,e){function n(i,r=Oi){let s;const o=gt.getTransfer(r);if(i===mi)return t.UNSIGNED_BYTE;if(i===tf)return t.UNSIGNED_SHORT_4_4_4_4;if(i===nf)return t.UNSIGNED_SHORT_5_5_5_1;if(i===Nd)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===Id)return t.BYTE;if(i===Ud)return t.SHORT;if(i===qs)return t.UNSIGNED_SHORT;if(i===ef)return t.INT;if(i===Er)return t.UNSIGNED_INT;if(i===ui)return t.FLOAT;if(i===Js)return t.HALF_FLOAT;if(i===Od)return t.ALPHA;if(i===Fd)return t.RGB;if(i===Un)return t.RGBA;if(i===Bd)return t.LUMINANCE;if(i===zd)return t.LUMINANCE_ALPHA;if(i===Zr)return t.DEPTH_COMPONENT;if(i===ss)return t.DEPTH_STENCIL;if(i===kd)return t.RED;if(i===rf)return t.RED_INTEGER;if(i===Hd)return t.RG;if(i===sf)return t.RG_INTEGER;if(i===af)return t.RGBA_INTEGER;if(i===ka||i===Ha||i===Ga||i===Va)if(o===wt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===ka)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Ha)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Ga)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Va)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===ka)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Ha)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Ga)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Va)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===jl||i===$l||i===Kl||i===Zl)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===jl)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===$l)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Kl)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Zl)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Jl||i===Ql||i===ec)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Jl||i===Ql)return o===wt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===ec)return o===wt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===tc||i===nc||i===ic||i===rc||i===sc||i===ac||i===oc||i===lc||i===cc||i===fc||i===uc||i===hc||i===dc||i===pc)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===tc)return o===wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===nc)return o===wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===ic)return o===wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===rc)return o===wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===sc)return o===wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===ac)return o===wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===oc)return o===wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===lc)return o===wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===cc)return o===wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===fc)return o===wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===uc)return o===wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===hc)return o===wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===dc)return o===wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===pc)return o===wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Wa||i===mc||i===_c)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===Wa)return o===wt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===mc)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===_c)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Gd||i===gc||i===vc||i===xc)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===Wa)return s.COMPRESSED_RED_RGTC1_EXT;if(i===gc)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===vc)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===xc)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===rs?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}class RM extends Sn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Da extends hn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const CM={type:"move"};class ml{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Da,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Da,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new me,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new me),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Da,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new me,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new me),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,f=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(f&&e.hand){o=!0;for(const y of e.hand.values()){const g=n.getJointPose(y,i),u=this._getHandJoint(f,y);g!==null&&(u.matrix.fromArray(g.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=g.radius),u.visible=g!==null}const h=f.joints["index-finger-tip"],d=f.joints["thumb-tip"],c=h.position.distanceTo(d.position),m=.02,p=.005;f.inputState.pinching&&c>m+p?(f.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!f.inputState.pinching&&c<=m-p&&(f.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(CM)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),f!==null&&(f.visible=o!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new Da;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}const PM=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,DM=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class LM{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n,i){if(this.texture===null){const r=new Xt,s=e.properties.get(r);s.__webglTexture=n.texture,(n.depthNear!=i.depthNear||n.depthFar!=i.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new Yn({vertexShader:PM,fragmentShader:DM,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new En(new us(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class IM extends fs{constructor(e,n){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,f=null,h=null,d=null,c=null,m=null,p=null;const y=new LM,g=n.getContextAttributes();let u=null,w=null;const T=[],A=[],G=new vt;let N=null;const k=new Sn;k.layers.enable(1),k.viewport=new It;const q=new Sn;q.layers.enable(2),q.viewport=new It;const J=[k,q],b=new RM;b.layers.enable(1),b.layers.enable(2);let P=null,V=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Se){let Pe=T[Se];return Pe===void 0&&(Pe=new ml,T[Se]=Pe),Pe.getTargetRaySpace()},this.getControllerGrip=function(Se){let Pe=T[Se];return Pe===void 0&&(Pe=new ml,T[Se]=Pe),Pe.getGripSpace()},this.getHand=function(Se){let Pe=T[Se];return Pe===void 0&&(Pe=new ml,T[Se]=Pe),Pe.getHandSpace()};function j(Se){const Pe=A.indexOf(Se.inputSource);if(Pe===-1)return;const Oe=T[Pe];Oe!==void 0&&(Oe.update(Se.inputSource,Se.frame,f||o),Oe.dispatchEvent({type:Se.type,data:Se.inputSource}))}function ce(){r.removeEventListener("select",j),r.removeEventListener("selectstart",j),r.removeEventListener("selectend",j),r.removeEventListener("squeeze",j),r.removeEventListener("squeezestart",j),r.removeEventListener("squeezeend",j),r.removeEventListener("end",ce),r.removeEventListener("inputsourceschange",se);for(let Se=0;Se<T.length;Se++){const Pe=A[Se];Pe!==null&&(A[Se]=null,T[Se].disconnect(Pe))}P=null,V=null,y.reset(),e.setRenderTarget(u),m=null,c=null,d=null,r=null,w=null,rt.stop(),i.isPresenting=!1,e.setPixelRatio(N),e.setSize(G.width,G.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Se){s=Se,i.isPresenting},this.setReferenceSpaceType=function(Se){a=Se,i.isPresenting},this.getReferenceSpace=function(){return f||o},this.setReferenceSpace=function(Se){f=Se},this.getBaseLayer=function(){return c!==null?c:m},this.getBinding=function(){return d},this.getFrame=function(){return p},this.getSession=function(){return r},this.setSession=async function(Se){if(r=Se,r!==null){if(u=e.getRenderTarget(),r.addEventListener("select",j),r.addEventListener("selectstart",j),r.addEventListener("selectend",j),r.addEventListener("squeeze",j),r.addEventListener("squeezestart",j),r.addEventListener("squeezeend",j),r.addEventListener("end",ce),r.addEventListener("inputsourceschange",se),g.xrCompatible!==!0&&await n.makeXRCompatible(),N=e.getPixelRatio(),e.getSize(G),r.renderState.layers===void 0){const Pe={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(r,n,Pe),r.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),w=new br(m.framebufferWidth,m.framebufferHeight,{format:Un,type:mi,colorSpace:e.outputColorSpace,stencilBuffer:g.stencil})}else{let Pe=null,Oe=null,ee=null;g.depth&&(ee=g.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,Pe=g.stencil?ss:Zr,Oe=g.stencil?rs:Er);const we={colorFormat:n.RGBA8,depthFormat:ee,scaleFactor:s};d=new XRWebGLBinding(r,n),c=d.createProjectionLayer(we),r.updateRenderState({layers:[c]}),e.setPixelRatio(1),e.setSize(c.textureWidth,c.textureHeight,!1),w=new br(c.textureWidth,c.textureHeight,{format:Un,type:mi,depthTexture:new ip(c.textureWidth,c.textureHeight,Oe,void 0,void 0,void 0,void 0,void 0,void 0,Pe),stencilBuffer:g.stencil,colorSpace:e.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:c.ignoreDepthValues===!1})}w.isXRRenderTarget=!0,this.setFoveation(l),f=null,o=await r.requestReferenceSpace(a),rt.setContext(r),rt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function se(Se){for(let Pe=0;Pe<Se.removed.length;Pe++){const Oe=Se.removed[Pe],ee=A.indexOf(Oe);ee>=0&&(A[ee]=null,T[ee].disconnect(Oe))}for(let Pe=0;Pe<Se.added.length;Pe++){const Oe=Se.added[Pe];let ee=A.indexOf(Oe);if(ee===-1){for(let xe=0;xe<T.length;xe++)if(xe>=A.length){A.push(Oe),ee=xe;break}else if(A[xe]===null){A[xe]=Oe,ee=xe;break}if(ee===-1)break}const we=T[ee];we&&we.connect(Oe)}}const ae=new me,_e=new me;function ie(Se,Pe,Oe){ae.setFromMatrixPosition(Pe.matrixWorld),_e.setFromMatrixPosition(Oe.matrixWorld);const ee=ae.distanceTo(_e),we=Pe.projectionMatrix.elements,xe=Oe.projectionMatrix.elements,De=we[14]/(we[10]-1),qe=we[14]/(we[10]+1),We=(we[9]+1)/we[5],E=(we[9]-1)/we[5],H=(we[8]-1)/we[0],W=(xe[8]+1)/xe[0],pe=De*H,oe=De*W,ye=ee/(-H+W),ve=ye*-H;if(Pe.matrixWorld.decompose(Se.position,Se.quaternion,Se.scale),Se.translateX(ve),Se.translateZ(ye),Se.matrixWorld.compose(Se.position,Se.quaternion,Se.scale),Se.matrixWorldInverse.copy(Se.matrixWorld).invert(),we[10]===-1)Se.projectionMatrix.copy(Pe.projectionMatrix),Se.projectionMatrixInverse.copy(Pe.projectionMatrixInverse);else{const _=De+ye,v=qe+ye,M=pe-ve,C=oe+(ee-ve),U=We*qe/v*_,F=E*qe/v*_;Se.projectionMatrix.makePerspective(M,C,U,F,_,v),Se.projectionMatrixInverse.copy(Se.projectionMatrix).invert()}}function Ne(Se,Pe){Pe===null?Se.matrixWorld.copy(Se.matrix):Se.matrixWorld.multiplyMatrices(Pe.matrixWorld,Se.matrix),Se.matrixWorldInverse.copy(Se.matrixWorld).invert()}this.updateCamera=function(Se){if(r===null)return;let Pe=Se.near,Oe=Se.far;y.texture!==null&&(y.depthNear>0&&(Pe=y.depthNear),y.depthFar>0&&(Oe=y.depthFar)),b.near=q.near=k.near=Pe,b.far=q.far=k.far=Oe,(P!==b.near||V!==b.far)&&(r.updateRenderState({depthNear:b.near,depthFar:b.far}),P=b.near,V=b.far);const ee=Se.parent,we=b.cameras;Ne(b,ee);for(let xe=0;xe<we.length;xe++)Ne(we[xe],ee);we.length===2?ie(b,k,q):b.projectionMatrix.copy(k.projectionMatrix),ze(Se,b,ee)};function ze(Se,Pe,Oe){Oe===null?Se.matrix.copy(Pe.matrixWorld):(Se.matrix.copy(Oe.matrixWorld),Se.matrix.invert(),Se.matrix.multiply(Pe.matrixWorld)),Se.matrix.decompose(Se.position,Se.quaternion,Se.scale),Se.updateMatrixWorld(!0),Se.projectionMatrix.copy(Pe.projectionMatrix),Se.projectionMatrixInverse.copy(Pe.projectionMatrixInverse),Se.isPerspectiveCamera&&(Se.fov=yc*2*Math.atan(1/Se.projectionMatrix.elements[5]),Se.zoom=1)}this.getCamera=function(){return b},this.getFoveation=function(){if(!(c===null&&m===null))return l},this.setFoveation=function(Se){l=Se,c!==null&&(c.fixedFoveation=Se),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=Se)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(b)};let He=null;function Qe(Se,Pe){if(h=Pe.getViewerPose(f||o),p=Pe,h!==null){const Oe=h.views;m!==null&&(e.setRenderTargetFramebuffer(w,m.framebuffer),e.setRenderTarget(w));let ee=!1;Oe.length!==b.cameras.length&&(b.cameras.length=0,ee=!0);for(let xe=0;xe<Oe.length;xe++){const De=Oe[xe];let qe=null;if(m!==null)qe=m.getViewport(De);else{const E=d.getViewSubImage(c,De);qe=E.viewport,xe===0&&(e.setRenderTargetTextures(w,E.colorTexture,c.ignoreDepthValues?void 0:E.depthStencilTexture),e.setRenderTarget(w))}let We=J[xe];We===void 0&&(We=new Sn,We.layers.enable(xe),We.viewport=new It,J[xe]=We),We.matrix.fromArray(De.transform.matrix),We.matrix.decompose(We.position,We.quaternion,We.scale),We.projectionMatrix.fromArray(De.projectionMatrix),We.projectionMatrixInverse.copy(We.projectionMatrix).invert(),We.viewport.set(qe.x,qe.y,qe.width,qe.height),xe===0&&(b.matrix.copy(We.matrix),b.matrix.decompose(b.position,b.quaternion,b.scale)),ee===!0&&b.cameras.push(We)}const we=r.enabledFeatures;if(we&&we.includes("depth-sensing")){const xe=d.getDepthInformation(Oe[0]);xe&&xe.isValid&&xe.texture&&y.init(e,xe,r.renderState)}}for(let Oe=0;Oe<T.length;Oe++){const ee=A[Oe],we=T[Oe];ee!==null&&we!==void 0&&we.update(ee,Pe,f||o)}He&&He(Se,Pe),Pe.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:Pe}),p=null}const rt=new tp;rt.setAnimationLoop(Qe),this.setAnimationLoop=function(Se){He=Se},this.dispose=function(){}}}const or=new _i,UM=new Ut;function NM(t,e){function n(g,u){g.matrixAutoUpdate===!0&&g.updateMatrix(),u.value.copy(g.matrix)}function i(g,u){u.color.getRGB(g.fogColor.value,Zd(t)),u.isFog?(g.fogNear.value=u.near,g.fogFar.value=u.far):u.isFogExp2&&(g.fogDensity.value=u.density)}function r(g,u,w,T,A){u.isMeshBasicMaterial||u.isMeshLambertMaterial?s(g,u):u.isMeshToonMaterial?(s(g,u),d(g,u)):u.isMeshPhongMaterial?(s(g,u),h(g,u)):u.isMeshStandardMaterial?(s(g,u),c(g,u),u.isMeshPhysicalMaterial&&m(g,u,A)):u.isMeshMatcapMaterial?(s(g,u),p(g,u)):u.isMeshDepthMaterial?s(g,u):u.isMeshDistanceMaterial?(s(g,u),y(g,u)):u.isMeshNormalMaterial?s(g,u):u.isLineBasicMaterial?(o(g,u),u.isLineDashedMaterial&&a(g,u)):u.isPointsMaterial?l(g,u,w,T):u.isSpriteMaterial?f(g,u):u.isShadowMaterial?(g.color.value.copy(u.color),g.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function s(g,u){g.opacity.value=u.opacity,u.color&&g.diffuse.value.copy(u.color),u.emissive&&g.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(g.map.value=u.map,n(u.map,g.mapTransform)),u.alphaMap&&(g.alphaMap.value=u.alphaMap,n(u.alphaMap,g.alphaMapTransform)),u.bumpMap&&(g.bumpMap.value=u.bumpMap,n(u.bumpMap,g.bumpMapTransform),g.bumpScale.value=u.bumpScale,u.side===un&&(g.bumpScale.value*=-1)),u.normalMap&&(g.normalMap.value=u.normalMap,n(u.normalMap,g.normalMapTransform),g.normalScale.value.copy(u.normalScale),u.side===un&&g.normalScale.value.negate()),u.displacementMap&&(g.displacementMap.value=u.displacementMap,n(u.displacementMap,g.displacementMapTransform),g.displacementScale.value=u.displacementScale,g.displacementBias.value=u.displacementBias),u.emissiveMap&&(g.emissiveMap.value=u.emissiveMap,n(u.emissiveMap,g.emissiveMapTransform)),u.specularMap&&(g.specularMap.value=u.specularMap,n(u.specularMap,g.specularMapTransform)),u.alphaTest>0&&(g.alphaTest.value=u.alphaTest);const w=e.get(u),T=w.envMap,A=w.envMapRotation;T&&(g.envMap.value=T,or.copy(A),or.x*=-1,or.y*=-1,or.z*=-1,T.isCubeTexture&&T.isRenderTargetTexture===!1&&(or.y*=-1,or.z*=-1),g.envMapRotation.value.setFromMatrix4(UM.makeRotationFromEuler(or)),g.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=u.reflectivity,g.ior.value=u.ior,g.refractionRatio.value=u.refractionRatio),u.lightMap&&(g.lightMap.value=u.lightMap,g.lightMapIntensity.value=u.lightMapIntensity,n(u.lightMap,g.lightMapTransform)),u.aoMap&&(g.aoMap.value=u.aoMap,g.aoMapIntensity.value=u.aoMapIntensity,n(u.aoMap,g.aoMapTransform))}function o(g,u){g.diffuse.value.copy(u.color),g.opacity.value=u.opacity,u.map&&(g.map.value=u.map,n(u.map,g.mapTransform))}function a(g,u){g.dashSize.value=u.dashSize,g.totalSize.value=u.dashSize+u.gapSize,g.scale.value=u.scale}function l(g,u,w,T){g.diffuse.value.copy(u.color),g.opacity.value=u.opacity,g.size.value=u.size*w,g.scale.value=T*.5,u.map&&(g.map.value=u.map,n(u.map,g.uvTransform)),u.alphaMap&&(g.alphaMap.value=u.alphaMap,n(u.alphaMap,g.alphaMapTransform)),u.alphaTest>0&&(g.alphaTest.value=u.alphaTest)}function f(g,u){g.diffuse.value.copy(u.color),g.opacity.value=u.opacity,g.rotation.value=u.rotation,u.map&&(g.map.value=u.map,n(u.map,g.mapTransform)),u.alphaMap&&(g.alphaMap.value=u.alphaMap,n(u.alphaMap,g.alphaMapTransform)),u.alphaTest>0&&(g.alphaTest.value=u.alphaTest)}function h(g,u){g.specular.value.copy(u.specular),g.shininess.value=Math.max(u.shininess,1e-4)}function d(g,u){u.gradientMap&&(g.gradientMap.value=u.gradientMap)}function c(g,u){g.metalness.value=u.metalness,u.metalnessMap&&(g.metalnessMap.value=u.metalnessMap,n(u.metalnessMap,g.metalnessMapTransform)),g.roughness.value=u.roughness,u.roughnessMap&&(g.roughnessMap.value=u.roughnessMap,n(u.roughnessMap,g.roughnessMapTransform)),u.envMap&&(g.envMapIntensity.value=u.envMapIntensity)}function m(g,u,w){g.ior.value=u.ior,u.sheen>0&&(g.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),g.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(g.sheenColorMap.value=u.sheenColorMap,n(u.sheenColorMap,g.sheenColorMapTransform)),u.sheenRoughnessMap&&(g.sheenRoughnessMap.value=u.sheenRoughnessMap,n(u.sheenRoughnessMap,g.sheenRoughnessMapTransform))),u.clearcoat>0&&(g.clearcoat.value=u.clearcoat,g.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(g.clearcoatMap.value=u.clearcoatMap,n(u.clearcoatMap,g.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,n(u.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(g.clearcoatNormalMap.value=u.clearcoatNormalMap,n(u.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===un&&g.clearcoatNormalScale.value.negate())),u.dispersion>0&&(g.dispersion.value=u.dispersion),u.iridescence>0&&(g.iridescence.value=u.iridescence,g.iridescenceIOR.value=u.iridescenceIOR,g.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(g.iridescenceMap.value=u.iridescenceMap,n(u.iridescenceMap,g.iridescenceMapTransform)),u.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=u.iridescenceThicknessMap,n(u.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),u.transmission>0&&(g.transmission.value=u.transmission,g.transmissionSamplerMap.value=w.texture,g.transmissionSamplerSize.value.set(w.width,w.height),u.transmissionMap&&(g.transmissionMap.value=u.transmissionMap,n(u.transmissionMap,g.transmissionMapTransform)),g.thickness.value=u.thickness,u.thicknessMap&&(g.thicknessMap.value=u.thicknessMap,n(u.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=u.attenuationDistance,g.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(g.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(g.anisotropyMap.value=u.anisotropyMap,n(u.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=u.specularIntensity,g.specularColor.value.copy(u.specularColor),u.specularColorMap&&(g.specularColorMap.value=u.specularColorMap,n(u.specularColorMap,g.specularColorMapTransform)),u.specularIntensityMap&&(g.specularIntensityMap.value=u.specularIntensityMap,n(u.specularIntensityMap,g.specularIntensityMapTransform))}function p(g,u){u.matcap&&(g.matcap.value=u.matcap)}function y(g,u){const w=e.get(u).light;g.referencePosition.value.setFromMatrixPosition(w.matrixWorld),g.nearDistance.value=w.shadow.camera.near,g.farDistance.value=w.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function OM(t,e,n,i){let r={},s={},o=[];const a=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(w,T){const A=T.program;i.uniformBlockBinding(w,A)}function f(w,T){let A=r[w.id];A===void 0&&(p(w),A=h(w),r[w.id]=A,w.addEventListener("dispose",g));const G=T.program;i.updateUBOMapping(w,G);const N=e.render.frame;s[w.id]!==N&&(c(w),s[w.id]=N)}function h(w){const T=d();w.__bindingPointIndex=T;const A=t.createBuffer(),G=w.__size,N=w.usage;return t.bindBuffer(t.UNIFORM_BUFFER,A),t.bufferData(t.UNIFORM_BUFFER,G,N),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,T,A),A}function d(){for(let w=0;w<a;w++)if(o.indexOf(w)===-1)return o.push(w),w;return 0}function c(w){const T=r[w.id],A=w.uniforms,G=w.__cache;t.bindBuffer(t.UNIFORM_BUFFER,T);for(let N=0,k=A.length;N<k;N++){const q=Array.isArray(A[N])?A[N]:[A[N]];for(let J=0,b=q.length;J<b;J++){const P=q[J];if(m(P,N,J,G)===!0){const V=P.__offset,j=Array.isArray(P.value)?P.value:[P.value];let ce=0;for(let se=0;se<j.length;se++){const ae=j[se],_e=y(ae);typeof ae=="number"||typeof ae=="boolean"?(P.__data[0]=ae,t.bufferSubData(t.UNIFORM_BUFFER,V+ce,P.__data)):ae.isMatrix3?(P.__data[0]=ae.elements[0],P.__data[1]=ae.elements[1],P.__data[2]=ae.elements[2],P.__data[3]=0,P.__data[4]=ae.elements[3],P.__data[5]=ae.elements[4],P.__data[6]=ae.elements[5],P.__data[7]=0,P.__data[8]=ae.elements[6],P.__data[9]=ae.elements[7],P.__data[10]=ae.elements[8],P.__data[11]=0):(ae.toArray(P.__data,ce),ce+=_e.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,V,P.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function m(w,T,A,G){const N=w.value,k=T+"_"+A;if(G[k]===void 0)return typeof N=="number"||typeof N=="boolean"?G[k]=N:G[k]=N.clone(),!0;{const q=G[k];if(typeof N=="number"||typeof N=="boolean"){if(q!==N)return G[k]=N,!0}else if(q.equals(N)===!1)return q.copy(N),!0}return!1}function p(w){const T=w.uniforms;let A=0;const G=16;for(let k=0,q=T.length;k<q;k++){const J=Array.isArray(T[k])?T[k]:[T[k]];for(let b=0,P=J.length;b<P;b++){const V=J[b],j=Array.isArray(V.value)?V.value:[V.value];for(let ce=0,se=j.length;ce<se;ce++){const ae=j[ce],_e=y(ae),ie=A%G,Ne=ie%_e.boundary,ze=ie+Ne;A+=Ne,ze!==0&&G-ze<_e.storage&&(A+=G-ze),V.__data=new Float32Array(_e.storage/Float32Array.BYTES_PER_ELEMENT),V.__offset=A,A+=_e.storage}}}const N=A%G;return N>0&&(A+=G-N),w.__size=A,w.__cache={},this}function y(w){const T={boundary:0,storage:0};return typeof w=="number"||typeof w=="boolean"?(T.boundary=4,T.storage=4):w.isVector2?(T.boundary=8,T.storage=8):w.isVector3||w.isColor?(T.boundary=16,T.storage=12):w.isVector4?(T.boundary=16,T.storage=16):w.isMatrix3?(T.boundary=48,T.storage=48):w.isMatrix4?(T.boundary=64,T.storage=64):w.isTexture,T}function g(w){const T=w.target;T.removeEventListener("dispose",g);const A=o.indexOf(T.__bindingPointIndex);o.splice(A,1),t.deleteBuffer(r[T.id]),delete r[T.id],delete s[T.id]}function u(){for(const w in r)t.deleteBuffer(r[w]);o=[],r={},s={}}return{bind:l,update:f,dispose:u}}class lp{constructor(e={}){const{canvas:n=E0(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:f=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1}=e;this.isWebGLRenderer=!0;let c;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");c=i.getContextAttributes().alpha}else c=o;const m=new Uint32Array(4),p=new Int32Array(4);let y=null,g=null;const u=[],w=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Hn,this.toneMapping=Gi,this.toneMappingExposure=1;const T=this;let A=!1,G=0,N=0,k=null,q=-1,J=null;const b=new It,P=new It;let V=null;const j=new yt(0);let ce=0,se=n.width,ae=n.height,_e=1,ie=null,Ne=null;const ze=new It(0,0,se,ae),He=new It(0,0,se,ae);let Qe=!1;const rt=new ep;let Se=!1,Pe=!1;const Oe=new Ut,ee=new Ut,we=new me,xe=new It,De={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let qe=!1;function We(){return k===null?_e:1}let E=i;function H(O,ne){return n.getContext(O,ne)}try{const O={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:f,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Qc}`),n.addEventListener("webglcontextlost",Re,!1),n.addEventListener("webglcontextrestored",Ge,!1),n.addEventListener("webglcontextcreationerror",Be,!1),E===null){const ne="webgl2";if(E=H(ne,O),E===null)throw H(ne)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(O){throw O}let W,pe,oe,ye,ve,_,v,M,C,U,F,K,X,te,Te,re,ge,Fe,Le,Ue,$e,Ye,tt,Z;function Xe(){W=new Gy(E),W.init(),Ye=new AM(E,W),pe=new Oy(E,W,e,Ye),oe=new EM(E),pe.reverseDepthBuffer&&oe.buffers.depth.setReversed(!0),ye=new Xy(E),ve=new cM,_=new wM(E,W,oe,ve,pe,Ye,ye),v=new By(T),M=new Hy(T),C=new J0(E),tt=new Uy(E,C),U=new Vy(E,C,ye,tt),F=new Yy(E,U,C,ye),Le=new qy(E,pe,_),re=new Fy(ve),K=new lM(T,v,M,W,pe,tt,re),X=new NM(T,ve),te=new uM,Te=new gM(W),Fe=new Iy(T,v,M,oe,F,c,l),ge=new MM(T,F,pe),Z=new OM(E,ye,pe,oe),Ue=new Ny(E,W,ye),$e=new Wy(E,W,ye),ye.programs=K.programs,T.capabilities=pe,T.extensions=W,T.properties=ve,T.renderLists=te,T.shadowMap=ge,T.state=oe,T.info=ye}Xe();const ue=new IM(T,E);this.xr=ue,this.getContext=function(){return E},this.getContextAttributes=function(){return E.getContextAttributes()},this.forceContextLoss=function(){const O=W.get("WEBGL_lose_context");O&&O.loseContext()},this.forceContextRestore=function(){const O=W.get("WEBGL_lose_context");O&&O.restoreContext()},this.getPixelRatio=function(){return _e},this.setPixelRatio=function(O){O!==void 0&&(_e=O,this.setSize(se,ae,!1))},this.getSize=function(O){return O.set(se,ae)},this.setSize=function(O,ne,he=!0){ue.isPresenting||(se=O,ae=ne,n.width=Math.floor(O*_e),n.height=Math.floor(ne*_e),he===!0&&(n.style.width=O+"px",n.style.height=ne+"px"),this.setViewport(0,0,O,ne))},this.getDrawingBufferSize=function(O){return O.set(se*_e,ae*_e).floor()},this.setDrawingBufferSize=function(O,ne,he){se=O,ae=ne,_e=he,n.width=Math.floor(O*he),n.height=Math.floor(ne*he),this.setViewport(0,0,O,ne)},this.getCurrentViewport=function(O){return O.copy(b)},this.getViewport=function(O){return O.copy(ze)},this.setViewport=function(O,ne,he,de){O.isVector4?ze.set(O.x,O.y,O.z,O.w):ze.set(O,ne,he,de),oe.viewport(b.copy(ze).multiplyScalar(_e).round())},this.getScissor=function(O){return O.copy(He)},this.setScissor=function(O,ne,he,de){O.isVector4?He.set(O.x,O.y,O.z,O.w):He.set(O,ne,he,de),oe.scissor(P.copy(He).multiplyScalar(_e).round())},this.getScissorTest=function(){return Qe},this.setScissorTest=function(O){oe.setScissorTest(Qe=O)},this.setOpaqueSort=function(O){ie=O},this.setTransparentSort=function(O){Ne=O},this.getClearColor=function(O){return O.copy(Fe.getClearColor())},this.setClearColor=function(){Fe.setClearColor.apply(Fe,arguments)},this.getClearAlpha=function(){return Fe.getClearAlpha()},this.setClearAlpha=function(){Fe.setClearAlpha.apply(Fe,arguments)},this.clear=function(O=!0,ne=!0,he=!0){let de=0;if(O){let x=!1;if(k!==null){const S=k.texture.format;x=S===af||S===sf||S===rf}if(x){const S=k.texture.type,D=S===mi||S===Er||S===qs||S===rs||S===tf||S===nf,L=Fe.getClearColor(),R=Fe.getClearAlpha(),z=L.r,I=L.g,B=L.b;D?(m[0]=z,m[1]=I,m[2]=B,m[3]=R,E.clearBufferuiv(E.COLOR,0,m)):(p[0]=z,p[1]=I,p[2]=B,p[3]=R,E.clearBufferiv(E.COLOR,0,p))}else de|=E.COLOR_BUFFER_BIT}ne&&(de|=E.DEPTH_BUFFER_BIT,E.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),he&&(de|=E.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),E.clear(de)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",Re,!1),n.removeEventListener("webglcontextrestored",Ge,!1),n.removeEventListener("webglcontextcreationerror",Be,!1),te.dispose(),Te.dispose(),ve.dispose(),v.dispose(),M.dispose(),F.dispose(),tt.dispose(),Z.dispose(),K.dispose(),ue.dispose(),ue.removeEventListener("sessionstart",ds),ue.removeEventListener("sessionend",jn),$n.stop()};function Re(O){O.preventDefault(),A=!0}function Ge(){A=!1;const O=ye.autoReset,ne=ge.enabled,he=ge.autoUpdate,de=ge.needsUpdate,x=ge.type;Xe(),ye.autoReset=O,ge.enabled=ne,ge.autoUpdate=he,ge.needsUpdate=de,ge.type=x}function Be(O){}function ht(O){const ne=O.target;ne.removeEventListener("dispose",ht),Mt(ne)}function Mt(O){Tt(O),ve.remove(O)}function Tt(O){const ne=ve.get(O).programs;ne!==void 0&&(ne.forEach(function(he){K.releaseProgram(he)}),O.isShaderMaterial&&K.releaseShaderCache(O))}this.renderBufferDirect=function(O,ne,he,de,x,S){ne===null&&(ne=De);const D=x.isMesh&&x.matrixWorld.determinant()<0,L=bo(O,ne,he,de,x);oe.setMaterial(de,D);let R=he.index,z=1;if(de.wireframe===!0){if(R=U.getWireframeAttribute(he),R===void 0)return;z=2}const I=he.drawRange,B=he.attributes.position;let Y=I.start*z,le=(I.start+I.count)*z;S!==null&&(Y=Math.max(Y,S.start*z),le=Math.min(le,(S.start+S.count)*z)),R!==null?(Y=Math.max(Y,0),le=Math.min(le,R.count)):B!=null&&(Y=Math.max(Y,0),le=Math.min(le,B.count));const Q=le-Y;if(Q<0||Q===1/0)return;tt.setup(x,de,L,he,R);let Me,fe=Ue;if(R!==null&&(Me=C.get(R),fe=$e,fe.setIndex(Me)),x.isMesh)de.wireframe===!0?(oe.setLineWidth(de.wireframeLinewidth*We()),fe.setMode(E.LINES)):fe.setMode(E.TRIANGLES);else if(x.isLine){let $=de.linewidth;$===void 0&&($=1),oe.setLineWidth($*We()),x.isLineSegments?fe.setMode(E.LINES):x.isLineLoop?fe.setMode(E.LINE_LOOP):fe.setMode(E.LINE_STRIP)}else x.isPoints?fe.setMode(E.POINTS):x.isSprite&&fe.setMode(E.TRIANGLES);if(x.isBatchedMesh)if(x._multiDrawInstances!==null)fe.renderMultiDrawInstances(x._multiDrawStarts,x._multiDrawCounts,x._multiDrawCount,x._multiDrawInstances);else if(W.get("WEBGL_multi_draw"))fe.renderMultiDraw(x._multiDrawStarts,x._multiDrawCounts,x._multiDrawCount);else{const $=x._multiDrawStarts,Ie=x._multiDrawCounts,Ce=x._multiDrawCount,Ee=R?C.get(R).bytesPerElement:1,be=ve.get(de).currentProgram.getUniforms();for(let Ae=0;Ae<Ce;Ae++)be.setValue(E,"_gl_DrawID",Ae),fe.render($[Ae]/Ee,Ie[Ae])}else if(x.isInstancedMesh)fe.renderInstances(Y,Q,x.count);else if(he.isInstancedBufferGeometry){const $=he._maxInstanceCount!==void 0?he._maxInstanceCount:1/0,Ie=Math.min(he.instanceCount,$);fe.renderInstances(Y,Q,Ie)}else fe.render(Y,Q)};function dt(O,ne,he){O.transparent===!0&&O.side===ci&&O.forceSinglePass===!1?(O.side=un,O.needsUpdate=!0,xi(O,ne,he),O.side=Wi,O.needsUpdate=!0,xi(O,ne,he),O.side=ci):xi(O,ne,he)}this.compile=function(O,ne,he=null){he===null&&(he=O),g=Te.get(he),g.init(ne),w.push(g),he.traverseVisible(function(x){x.isLight&&x.layers.test(ne.layers)&&(g.pushLight(x),x.castShadow&&g.pushShadow(x))}),O!==he&&O.traverseVisible(function(x){x.isLight&&x.layers.test(ne.layers)&&(g.pushLight(x),x.castShadow&&g.pushShadow(x))}),g.setupLights();const de=new Set;return O.traverse(function(x){if(!(x.isMesh||x.isPoints||x.isLine||x.isSprite))return;const S=x.material;if(S)if(Array.isArray(S))for(let D=0;D<S.length;D++){const L=S[D];dt(L,he,x),de.add(L)}else dt(S,he,x),de.add(S)}),w.pop(),g=null,de},this.compileAsync=function(O,ne,he=null){const de=this.compile(O,ne,he);return new Promise(x=>{function S(){if(de.forEach(function(D){ve.get(D).currentProgram.isReady()&&de.delete(D)}),de.size===0){x(O);return}setTimeout(S,10)}W.get("KHR_parallel_shader_compile")!==null?S():setTimeout(S,10)})};let qt=null;function kt(O){qt&&qt(O)}function ds(){$n.stop()}function jn(){$n.start()}const $n=new tp;$n.setAnimationLoop(kt),typeof self<"u"&&$n.setContext(self),this.setAnimationLoop=function(O){qt=O,ue.setAnimationLoop(O),O===null?$n.stop():$n.start()},ue.addEventListener("sessionstart",ds),ue.addEventListener("sessionend",jn),this.render=function(O,ne){if(ne!==void 0&&ne.isCamera!==!0||A===!0)return;if(O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),ne.parent===null&&ne.matrixWorldAutoUpdate===!0&&ne.updateMatrixWorld(),ue.enabled===!0&&ue.isPresenting===!0&&(ue.cameraAutoUpdate===!0&&ue.updateCamera(ne),ne=ue.getCamera()),O.isScene===!0&&O.onBeforeRender(T,O,ne,k),g=Te.get(O,w.length),g.init(ne),w.push(g),ee.multiplyMatrices(ne.projectionMatrix,ne.matrixWorldInverse),rt.setFromProjectionMatrix(ee),Pe=this.localClippingEnabled,Se=re.init(this.clippingPlanes,Pe),y=te.get(O,u.length),y.init(),u.push(y),ue.enabled===!0&&ue.isPresenting===!0){const S=T.xr.getDepthSensingMesh();S!==null&&Ki(S,ne,-1/0,T.sortObjects)}Ki(O,ne,0,T.sortObjects),y.finish(),T.sortObjects===!0&&y.sort(ie,Ne),qe=ue.enabled===!1||ue.isPresenting===!1||ue.hasDepthSensing()===!1,qe&&Fe.addToRenderList(y,O),this.info.render.frame++,Se===!0&&re.beginShadows();const he=g.state.shadowsArray;ge.render(he,O,ne),Se===!0&&re.endShadows(),this.info.autoReset===!0&&this.info.reset();const de=y.opaque,x=y.transmissive;if(g.setupLights(),ne.isArrayCamera){const S=ne.cameras;if(x.length>0)for(let D=0,L=S.length;D<L;D++){const R=S[D];ra(de,x,O,R)}qe&&Fe.render(O);for(let D=0,L=S.length;D<L;D++){const R=S[D];ps(y,O,R,R.viewport)}}else x.length>0&&ra(de,x,O,ne),qe&&Fe.render(O),ps(y,O,ne);k!==null&&(_.updateMultisampleRenderTarget(k),_.updateRenderTargetMipmap(k)),O.isScene===!0&&O.onAfterRender(T,O,ne),tt.resetDefaultState(),q=-1,J=null,w.pop(),w.length>0?(g=w[w.length-1],Se===!0&&re.setGlobalState(T.clippingPlanes,g.state.camera)):g=null,u.pop(),u.length>0?y=u[u.length-1]:y=null};function Ki(O,ne,he,de){if(O.visible===!1)return;if(O.layers.test(ne.layers)){if(O.isGroup)he=O.renderOrder;else if(O.isLOD)O.autoUpdate===!0&&O.update(ne);else if(O.isLight)g.pushLight(O),O.castShadow&&g.pushShadow(O);else if(O.isSprite){if(!O.frustumCulled||rt.intersectsSprite(O)){de&&xe.setFromMatrixPosition(O.matrixWorld).applyMatrix4(ee);const D=F.update(O),L=O.material;L.visible&&y.push(O,D,L,he,xe.z,null)}}else if((O.isMesh||O.isLine||O.isPoints)&&(!O.frustumCulled||rt.intersectsObject(O))){const D=F.update(O),L=O.material;if(de&&(O.boundingSphere!==void 0?(O.boundingSphere===null&&O.computeBoundingSphere(),xe.copy(O.boundingSphere.center)):(D.boundingSphere===null&&D.computeBoundingSphere(),xe.copy(D.boundingSphere.center)),xe.applyMatrix4(O.matrixWorld).applyMatrix4(ee)),Array.isArray(L)){const R=D.groups;for(let z=0,I=R.length;z<I;z++){const B=R[z],Y=L[B.materialIndex];Y&&Y.visible&&y.push(O,D,Y,he,xe.z,B)}}else L.visible&&y.push(O,D,L,he,xe.z,null)}}const S=O.children;for(let D=0,L=S.length;D<L;D++)Ki(S[D],ne,he,de)}function ps(O,ne,he,de){const x=O.opaque,S=O.transmissive,D=O.transparent;g.setupLightsView(he),Se===!0&&re.setGlobalState(T.clippingPlanes,he),de&&oe.viewport(b.copy(de)),x.length>0&&vi(x,ne,he),S.length>0&&vi(S,ne,he),D.length>0&&vi(D,ne,he),oe.buffers.depth.setTest(!0),oe.buffers.depth.setMask(!0),oe.buffers.color.setMask(!0),oe.setPolygonOffset(!1)}function ra(O,ne,he,de){if((he.isScene===!0?he.overrideMaterial:null)!==null)return;g.state.transmissionRenderTarget[de.id]===void 0&&(g.state.transmissionRenderTarget[de.id]=new br(1,1,{generateMipmaps:!0,type:W.has("EXT_color_buffer_half_float")||W.has("EXT_color_buffer_float")?Js:mi,minFilter:gr,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:gt.workingColorSpace}));const S=g.state.transmissionRenderTarget[de.id],D=de.viewport||b;S.setSize(D.z,D.w);const L=T.getRenderTarget();T.setRenderTarget(S),T.getClearColor(j),ce=T.getClearAlpha(),ce<1&&T.setClearColor(16777215,.5),T.clear(),qe&&Fe.render(he);const R=T.toneMapping;T.toneMapping=Gi;const z=de.viewport;if(de.viewport!==void 0&&(de.viewport=void 0),g.setupLightsView(de),Se===!0&&re.setGlobalState(T.clippingPlanes,de),vi(O,he,de),_.updateMultisampleRenderTarget(S),_.updateRenderTargetMipmap(S),W.has("WEBGL_multisampled_render_to_texture")===!1){let I=!1;for(let B=0,Y=ne.length;B<Y;B++){const le=ne[B],Q=le.object,Me=le.geometry,fe=le.material,$=le.group;if(fe.side===ci&&Q.layers.test(de.layers)){const Ie=fe.side;fe.side=un,fe.needsUpdate=!0,Ar(Q,he,de,Me,fe,$),fe.side=Ie,fe.needsUpdate=!0,I=!0}}I===!0&&(_.updateMultisampleRenderTarget(S),_.updateRenderTargetMipmap(S))}T.setRenderTarget(L),T.setClearColor(j,ce),z!==void 0&&(de.viewport=z),T.toneMapping=R}function vi(O,ne,he){const de=ne.isScene===!0?ne.overrideMaterial:null;for(let x=0,S=O.length;x<S;x++){const D=O[x],L=D.object,R=D.geometry,z=de===null?D.material:de,I=D.group;L.layers.test(he.layers)&&Ar(L,ne,he,R,z,I)}}function Ar(O,ne,he,de,x,S){O.onBeforeRender(T,ne,he,de,x,S),O.modelViewMatrix.multiplyMatrices(he.matrixWorldInverse,O.matrixWorld),O.normalMatrix.getNormalMatrix(O.modelViewMatrix),x.onBeforeRender(T,ne,he,de,O,S),x.transparent===!0&&x.side===ci&&x.forceSinglePass===!1?(x.side=un,x.needsUpdate=!0,T.renderBufferDirect(he,ne,de,x,O,S),x.side=Wi,x.needsUpdate=!0,T.renderBufferDirect(he,ne,de,x,O,S),x.side=ci):T.renderBufferDirect(he,ne,de,x,O,S),O.onAfterRender(T,ne,he,de,x,S)}function xi(O,ne,he){ne.isScene!==!0&&(ne=De);const de=ve.get(O),x=g.state.lights,S=g.state.shadowsArray,D=x.state.version,L=K.getParameters(O,x.state,S,ne,he),R=K.getProgramCacheKey(L);let z=de.programs;de.environment=O.isMeshStandardMaterial?ne.environment:null,de.fog=ne.fog,de.envMap=(O.isMeshStandardMaterial?M:v).get(O.envMap||de.environment),de.envMapRotation=de.environment!==null&&O.envMap===null?ne.environmentRotation:O.envMapRotation,z===void 0&&(O.addEventListener("dispose",ht),z=new Map,de.programs=z);let I=z.get(R);if(I!==void 0){if(de.currentProgram===I&&de.lightsStateVersion===D)return sa(O,L),I}else L.uniforms=K.getUniforms(O),O.onBeforeCompile(L,T),I=K.acquireProgram(L,R),z.set(R,I),de.uniforms=L.uniforms;const B=de.uniforms;return(!O.isShaderMaterial&&!O.isRawShaderMaterial||O.clipping===!0)&&(B.clippingPlanes=re.uniform),sa(O,L),de.needsLights=Zi(O),de.lightsStateVersion=D,de.needsLights&&(B.ambientLightColor.value=x.state.ambient,B.lightProbe.value=x.state.probe,B.directionalLights.value=x.state.directional,B.directionalLightShadows.value=x.state.directionalShadow,B.spotLights.value=x.state.spot,B.spotLightShadows.value=x.state.spotShadow,B.rectAreaLights.value=x.state.rectArea,B.ltc_1.value=x.state.rectAreaLTC1,B.ltc_2.value=x.state.rectAreaLTC2,B.pointLights.value=x.state.point,B.pointLightShadows.value=x.state.pointShadow,B.hemisphereLights.value=x.state.hemi,B.directionalShadowMap.value=x.state.directionalShadowMap,B.directionalShadowMatrix.value=x.state.directionalShadowMatrix,B.spotShadowMap.value=x.state.spotShadowMap,B.spotLightMatrix.value=x.state.spotLightMatrix,B.spotLightMap.value=x.state.spotLightMap,B.pointShadowMap.value=x.state.pointShadowMap,B.pointShadowMatrix.value=x.state.pointShadowMatrix),de.currentProgram=I,de.uniformsList=null,I}function yi(O){if(O.uniformsList===null){const ne=O.currentProgram.getUniforms();O.uniformsList=qa.seqWithValue(ne.seq,O.uniforms)}return O.uniformsList}function sa(O,ne){const he=ve.get(O);he.outputColorSpace=ne.outputColorSpace,he.batching=ne.batching,he.batchingColor=ne.batchingColor,he.instancing=ne.instancing,he.instancingColor=ne.instancingColor,he.instancingMorph=ne.instancingMorph,he.skinning=ne.skinning,he.morphTargets=ne.morphTargets,he.morphNormals=ne.morphNormals,he.morphColors=ne.morphColors,he.morphTargetsCount=ne.morphTargetsCount,he.numClippingPlanes=ne.numClippingPlanes,he.numIntersection=ne.numClipIntersection,he.vertexAlphas=ne.vertexAlphas,he.vertexTangents=ne.vertexTangents,he.toneMapping=ne.toneMapping}function bo(O,ne,he,de,x){ne.isScene!==!0&&(ne=De),_.resetTextureUnits();const S=ne.fog,D=de.isMeshStandardMaterial?ne.environment:null,L=k===null?T.outputColorSpace:k.isXRRenderTarget===!0?k.texture.colorSpace:ji,R=(de.isMeshStandardMaterial?M:v).get(de.envMap||D),z=de.vertexColors===!0&&!!he.attributes.color&&he.attributes.color.itemSize===4,I=!!he.attributes.tangent&&(!!de.normalMap||de.anisotropy>0),B=!!he.morphAttributes.position,Y=!!he.morphAttributes.normal,le=!!he.morphAttributes.color;let Q=Gi;de.toneMapped&&(k===null||k.isXRRenderTarget===!0)&&(Q=T.toneMapping);const Me=he.morphAttributes.position||he.morphAttributes.normal||he.morphAttributes.color,fe=Me!==void 0?Me.length:0,$=ve.get(de),Ie=g.state.lights;if(Se===!0&&(Pe===!0||O!==J)){const Je=O===J&&de.id===q;re.setState(de,O,Je)}let Ce=!1;de.version===$.__version?($.needsLights&&$.lightsStateVersion!==Ie.state.version||$.outputColorSpace!==L||x.isBatchedMesh&&$.batching===!1||!x.isBatchedMesh&&$.batching===!0||x.isBatchedMesh&&$.batchingColor===!0&&x.colorTexture===null||x.isBatchedMesh&&$.batchingColor===!1&&x.colorTexture!==null||x.isInstancedMesh&&$.instancing===!1||!x.isInstancedMesh&&$.instancing===!0||x.isSkinnedMesh&&$.skinning===!1||!x.isSkinnedMesh&&$.skinning===!0||x.isInstancedMesh&&$.instancingColor===!0&&x.instanceColor===null||x.isInstancedMesh&&$.instancingColor===!1&&x.instanceColor!==null||x.isInstancedMesh&&$.instancingMorph===!0&&x.morphTexture===null||x.isInstancedMesh&&$.instancingMorph===!1&&x.morphTexture!==null||$.envMap!==R||de.fog===!0&&$.fog!==S||$.numClippingPlanes!==void 0&&($.numClippingPlanes!==re.numPlanes||$.numIntersection!==re.numIntersection)||$.vertexAlphas!==z||$.vertexTangents!==I||$.morphTargets!==B||$.morphNormals!==Y||$.morphColors!==le||$.toneMapping!==Q||$.morphTargetsCount!==fe)&&(Ce=!0):(Ce=!0,$.__version=de.version);let Ee=$.currentProgram;Ce===!0&&(Ee=xi(de,ne,x));let be=!1,Ae=!1,je=!1;const Ve=Ee.getUniforms(),Ze=$.uniforms;if(oe.useProgram(Ee.program)&&(be=!0,Ae=!0,je=!0),de.id!==q&&(q=de.id,Ae=!0),be||J!==O){pe.reverseDepthBuffer?(Oe.copy(O.projectionMatrix),w0(Oe),A0(Oe),Ve.setValue(E,"projectionMatrix",Oe)):Ve.setValue(E,"projectionMatrix",O.projectionMatrix),Ve.setValue(E,"viewMatrix",O.matrixWorldInverse);const Je=Ve.map.cameraPosition;Je!==void 0&&Je.setValue(E,we.setFromMatrixPosition(O.matrixWorld)),pe.logarithmicDepthBuffer&&Ve.setValue(E,"logDepthBufFC",2/(Math.log(O.far+1)/Math.LN2)),(de.isMeshPhongMaterial||de.isMeshToonMaterial||de.isMeshLambertMaterial||de.isMeshBasicMaterial||de.isMeshStandardMaterial||de.isShaderMaterial)&&Ve.setValue(E,"isOrthographic",O.isOrthographicCamera===!0),J!==O&&(J=O,Ae=!0,je=!0)}if(x.isSkinnedMesh){Ve.setOptional(E,x,"bindMatrix"),Ve.setOptional(E,x,"bindMatrixInverse");const Je=x.skeleton;Je&&(Je.boneTexture===null&&Je.computeBoneTexture(),Ve.setValue(E,"boneTexture",Je.boneTexture,_))}x.isBatchedMesh&&(Ve.setOptional(E,x,"batchingTexture"),Ve.setValue(E,"batchingTexture",x._matricesTexture,_),Ve.setOptional(E,x,"batchingIdTexture"),Ve.setValue(E,"batchingIdTexture",x._indirectTexture,_),Ve.setOptional(E,x,"batchingColorTexture"),x._colorsTexture!==null&&Ve.setValue(E,"batchingColorTexture",x._colorsTexture,_));const et=he.morphAttributes;if((et.position!==void 0||et.normal!==void 0||et.color!==void 0)&&Le.update(x,he,Ee),(Ae||$.receiveShadow!==x.receiveShadow)&&($.receiveShadow=x.receiveShadow,Ve.setValue(E,"receiveShadow",x.receiveShadow)),de.isMeshGouraudMaterial&&de.envMap!==null&&(Ze.envMap.value=R,Ze.flipEnvMap.value=R.isCubeTexture&&R.isRenderTargetTexture===!1?-1:1),de.isMeshStandardMaterial&&de.envMap===null&&ne.environment!==null&&(Ze.envMapIntensity.value=ne.environmentIntensity),Ae&&(Ve.setValue(E,"toneMappingExposure",T.toneMappingExposure),$.needsLights&&wo(Ze,je),S&&de.fog===!0&&X.refreshFogUniforms(Ze,S),X.refreshMaterialUniforms(Ze,de,_e,ae,g.state.transmissionRenderTarget[O.id]),qa.upload(E,yi($),Ze,_)),de.isShaderMaterial&&de.uniformsNeedUpdate===!0&&(qa.upload(E,yi($),Ze,_),de.uniformsNeedUpdate=!1),de.isSpriteMaterial&&Ve.setValue(E,"center",x.center),Ve.setValue(E,"modelViewMatrix",x.modelViewMatrix),Ve.setValue(E,"normalMatrix",x.normalMatrix),Ve.setValue(E,"modelMatrix",x.matrixWorld),de.isShaderMaterial||de.isRawShaderMaterial){const Je=de.uniformsGroups;for(let st=0,ut=Je.length;st<ut;st++){const nt=Je[st];Z.update(nt,Ee),Z.bind(nt,Ee)}}return Ee}function wo(O,ne){O.ambientLightColor.needsUpdate=ne,O.lightProbe.needsUpdate=ne,O.directionalLights.needsUpdate=ne,O.directionalLightShadows.needsUpdate=ne,O.pointLights.needsUpdate=ne,O.pointLightShadows.needsUpdate=ne,O.spotLights.needsUpdate=ne,O.spotLightShadows.needsUpdate=ne,O.rectAreaLights.needsUpdate=ne,O.hemisphereLights.needsUpdate=ne}function Zi(O){return O.isMeshLambertMaterial||O.isMeshToonMaterial||O.isMeshPhongMaterial||O.isMeshStandardMaterial||O.isShadowMaterial||O.isShaderMaterial&&O.lights===!0}this.getActiveCubeFace=function(){return G},this.getActiveMipmapLevel=function(){return N},this.getRenderTarget=function(){return k},this.setRenderTargetTextures=function(O,ne,he){ve.get(O.texture).__webglTexture=ne,ve.get(O.depthTexture).__webglTexture=he;const de=ve.get(O);de.__hasExternalTextures=!0,de.__autoAllocateDepthBuffer=he===void 0,de.__autoAllocateDepthBuffer||W.has("WEBGL_multisampled_render_to_texture")===!0&&(de.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(O,ne){const he=ve.get(O);he.__webglFramebuffer=ne,he.__useDefaultFramebuffer=ne===void 0},this.setRenderTarget=function(O,ne=0,he=0){k=O,G=ne,N=he;let de=!0,x=null,S=!1,D=!1;if(O){const R=ve.get(O);if(R.__useDefaultFramebuffer!==void 0)oe.bindFramebuffer(E.FRAMEBUFFER,null),de=!1;else if(R.__webglFramebuffer===void 0)_.setupRenderTarget(O);else if(R.__hasExternalTextures)_.rebindTextures(O,ve.get(O.texture).__webglTexture,ve.get(O.depthTexture).__webglTexture);else if(O.depthBuffer){const B=O.depthTexture;if(R.__boundDepthTexture!==B){if(B!==null&&ve.has(B)&&(O.width!==B.image.width||O.height!==B.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");_.setupDepthRenderbuffer(O)}}const z=O.texture;(z.isData3DTexture||z.isDataArrayTexture||z.isCompressedArrayTexture)&&(D=!0);const I=ve.get(O).__webglFramebuffer;O.isWebGLCubeRenderTarget?(Array.isArray(I[ne])?x=I[ne][he]:x=I[ne],S=!0):O.samples>0&&_.useMultisampledRTT(O)===!1?x=ve.get(O).__webglMultisampledFramebuffer:Array.isArray(I)?x=I[he]:x=I,b.copy(O.viewport),P.copy(O.scissor),V=O.scissorTest}else b.copy(ze).multiplyScalar(_e).floor(),P.copy(He).multiplyScalar(_e).floor(),V=Qe;if(oe.bindFramebuffer(E.FRAMEBUFFER,x)&&de&&oe.drawBuffers(O,x),oe.viewport(b),oe.scissor(P),oe.setScissorTest(V),S){const R=ve.get(O.texture);E.framebufferTexture2D(E.FRAMEBUFFER,E.COLOR_ATTACHMENT0,E.TEXTURE_CUBE_MAP_POSITIVE_X+ne,R.__webglTexture,he)}else if(D){const R=ve.get(O.texture),z=ne||0;E.framebufferTextureLayer(E.FRAMEBUFFER,E.COLOR_ATTACHMENT0,R.__webglTexture,he||0,z)}q=-1},this.readRenderTargetPixels=function(O,ne,he,de,x,S,D){if(!(O&&O.isWebGLRenderTarget))return;let L=ve.get(O).__webglFramebuffer;if(O.isWebGLCubeRenderTarget&&D!==void 0&&(L=L[D]),L){oe.bindFramebuffer(E.FRAMEBUFFER,L);try{const R=O.texture,z=R.format,I=R.type;if(!pe.textureFormatReadable(z)||!pe.textureTypeReadable(I))return;ne>=0&&ne<=O.width-de&&he>=0&&he<=O.height-x&&E.readPixels(ne,he,de,x,Ye.convert(z),Ye.convert(I),S)}finally{const R=k!==null?ve.get(k).__webglFramebuffer:null;oe.bindFramebuffer(E.FRAMEBUFFER,R)}}},this.readRenderTargetPixelsAsync=async function(O,ne,he,de,x,S,D){if(!(O&&O.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let L=ve.get(O).__webglFramebuffer;if(O.isWebGLCubeRenderTarget&&D!==void 0&&(L=L[D]),L){const R=O.texture,z=R.format,I=R.type;if(!pe.textureFormatReadable(z))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!pe.textureTypeReadable(I))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(ne>=0&&ne<=O.width-de&&he>=0&&he<=O.height-x){oe.bindFramebuffer(E.FRAMEBUFFER,L);const B=E.createBuffer();E.bindBuffer(E.PIXEL_PACK_BUFFER,B),E.bufferData(E.PIXEL_PACK_BUFFER,S.byteLength,E.STREAM_READ),E.readPixels(ne,he,de,x,Ye.convert(z),Ye.convert(I),0);const Y=k!==null?ve.get(k).__webglFramebuffer:null;oe.bindFramebuffer(E.FRAMEBUFFER,Y);const le=E.fenceSync(E.SYNC_GPU_COMMANDS_COMPLETE,0);return E.flush(),await b0(E,le,4),E.bindBuffer(E.PIXEL_PACK_BUFFER,B),E.getBufferSubData(E.PIXEL_PACK_BUFFER,0,S),E.deleteBuffer(B),E.deleteSync(le),S}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(O,ne=null,he=0){O.isTexture!==!0&&(Xa("WebGLRenderer: copyFramebufferToTexture function signature has changed."),ne=arguments[0]||null,O=arguments[1]);const de=Math.pow(2,-he),x=Math.floor(O.image.width*de),S=Math.floor(O.image.height*de),D=ne!==null?ne.x:0,L=ne!==null?ne.y:0;_.setTexture2D(O,0),E.copyTexSubImage2D(E.TEXTURE_2D,he,0,0,D,L,x,S),oe.unbindTexture()},this.copyTextureToTexture=function(O,ne,he=null,de=null,x=0){O.isTexture!==!0&&(Xa("WebGLRenderer: copyTextureToTexture function signature has changed."),de=arguments[0]||null,O=arguments[1],ne=arguments[2],x=arguments[3]||0,he=null);let S,D,L,R,z,I;he!==null?(S=he.max.x-he.min.x,D=he.max.y-he.min.y,L=he.min.x,R=he.min.y):(S=O.image.width,D=O.image.height,L=0,R=0),de!==null?(z=de.x,I=de.y):(z=0,I=0);const B=Ye.convert(ne.format),Y=Ye.convert(ne.type);_.setTexture2D(ne,0),E.pixelStorei(E.UNPACK_FLIP_Y_WEBGL,ne.flipY),E.pixelStorei(E.UNPACK_PREMULTIPLY_ALPHA_WEBGL,ne.premultiplyAlpha),E.pixelStorei(E.UNPACK_ALIGNMENT,ne.unpackAlignment);const le=E.getParameter(E.UNPACK_ROW_LENGTH),Q=E.getParameter(E.UNPACK_IMAGE_HEIGHT),Me=E.getParameter(E.UNPACK_SKIP_PIXELS),fe=E.getParameter(E.UNPACK_SKIP_ROWS),$=E.getParameter(E.UNPACK_SKIP_IMAGES),Ie=O.isCompressedTexture?O.mipmaps[x]:O.image;E.pixelStorei(E.UNPACK_ROW_LENGTH,Ie.width),E.pixelStorei(E.UNPACK_IMAGE_HEIGHT,Ie.height),E.pixelStorei(E.UNPACK_SKIP_PIXELS,L),E.pixelStorei(E.UNPACK_SKIP_ROWS,R),O.isDataTexture?E.texSubImage2D(E.TEXTURE_2D,x,z,I,S,D,B,Y,Ie.data):O.isCompressedTexture?E.compressedTexSubImage2D(E.TEXTURE_2D,x,z,I,Ie.width,Ie.height,B,Ie.data):E.texSubImage2D(E.TEXTURE_2D,x,z,I,S,D,B,Y,Ie),E.pixelStorei(E.UNPACK_ROW_LENGTH,le),E.pixelStorei(E.UNPACK_IMAGE_HEIGHT,Q),E.pixelStorei(E.UNPACK_SKIP_PIXELS,Me),E.pixelStorei(E.UNPACK_SKIP_ROWS,fe),E.pixelStorei(E.UNPACK_SKIP_IMAGES,$),x===0&&ne.generateMipmaps&&E.generateMipmap(E.TEXTURE_2D),oe.unbindTexture()},this.copyTextureToTexture3D=function(O,ne,he=null,de=null,x=0){O.isTexture!==!0&&(Xa("WebGLRenderer: copyTextureToTexture3D function signature has changed."),he=arguments[0]||null,de=arguments[1]||null,O=arguments[2],ne=arguments[3],x=arguments[4]||0);let S,D,L,R,z,I,B,Y,le;const Q=O.isCompressedTexture?O.mipmaps[x]:O.image;he!==null?(S=he.max.x-he.min.x,D=he.max.y-he.min.y,L=he.max.z-he.min.z,R=he.min.x,z=he.min.y,I=he.min.z):(S=Q.width,D=Q.height,L=Q.depth,R=0,z=0,I=0),de!==null?(B=de.x,Y=de.y,le=de.z):(B=0,Y=0,le=0);const Me=Ye.convert(ne.format),fe=Ye.convert(ne.type);let $;if(ne.isData3DTexture)_.setTexture3D(ne,0),$=E.TEXTURE_3D;else if(ne.isDataArrayTexture||ne.isCompressedArrayTexture)_.setTexture2DArray(ne,0),$=E.TEXTURE_2D_ARRAY;else return;E.pixelStorei(E.UNPACK_FLIP_Y_WEBGL,ne.flipY),E.pixelStorei(E.UNPACK_PREMULTIPLY_ALPHA_WEBGL,ne.premultiplyAlpha),E.pixelStorei(E.UNPACK_ALIGNMENT,ne.unpackAlignment);const Ie=E.getParameter(E.UNPACK_ROW_LENGTH),Ce=E.getParameter(E.UNPACK_IMAGE_HEIGHT),Ee=E.getParameter(E.UNPACK_SKIP_PIXELS),be=E.getParameter(E.UNPACK_SKIP_ROWS),Ae=E.getParameter(E.UNPACK_SKIP_IMAGES);E.pixelStorei(E.UNPACK_ROW_LENGTH,Q.width),E.pixelStorei(E.UNPACK_IMAGE_HEIGHT,Q.height),E.pixelStorei(E.UNPACK_SKIP_PIXELS,R),E.pixelStorei(E.UNPACK_SKIP_ROWS,z),E.pixelStorei(E.UNPACK_SKIP_IMAGES,I),O.isDataTexture||O.isData3DTexture?E.texSubImage3D($,x,B,Y,le,S,D,L,Me,fe,Q.data):ne.isCompressedArrayTexture?E.compressedTexSubImage3D($,x,B,Y,le,S,D,L,Me,Q.data):E.texSubImage3D($,x,B,Y,le,S,D,L,Me,fe,Q),E.pixelStorei(E.UNPACK_ROW_LENGTH,Ie),E.pixelStorei(E.UNPACK_IMAGE_HEIGHT,Ce),E.pixelStorei(E.UNPACK_SKIP_PIXELS,Ee),E.pixelStorei(E.UNPACK_SKIP_ROWS,be),E.pixelStorei(E.UNPACK_SKIP_IMAGES,Ae),x===0&&ne.generateMipmaps&&E.generateMipmap($),oe.unbindTexture()},this.initRenderTarget=function(O){ve.get(O).__webglFramebuffer===void 0&&_.setupRenderTarget(O)},this.initTexture=function(O){O.isCubeTexture?_.setTextureCube(O,0):O.isData3DTexture?_.setTexture3D(O,0):O.isDataArrayTexture||O.isCompressedArrayTexture?_.setTexture2DArray(O,0):_.setTexture2D(O,0),oe.unbindTexture()},this.resetState=function(){G=0,N=0,k=null,oe.reset(),tt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return hi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=e===of?"display-p3":"srgb",n.unpackColorSpace=gt.workingColorSpace===xo?"display-p3":"srgb"}}class cp extends hn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new _i,this.environmentIntensity=1,this.environmentRotation=new _i,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}class _l extends dn{constructor(e,n,i,r=1){super(e,n,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}class qu extends Xt{constructor(e,n,i,r,s,o,a,l,f){super(e,n,i,r,s,o,a,l,f),this.isCanvasTexture=!0,this.needsUpdate=!0}}class FM extends Yn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}const Yu={enabled:!1,files:{},add:function(t,e){this.enabled!==!1&&(this.files[t]=e)},get:function(t){if(this.enabled!==!1)return this.files[t]},remove:function(t){delete this.files[t]},clear:function(){this.files={}}};class BM{constructor(e,n,i){const r=this;let s=!1,o=0,a=0,l;const f=[];this.onStart=void 0,this.onLoad=e,this.onProgress=n,this.onError=i,this.itemStart=function(h){a++,s===!1&&r.onStart!==void 0&&r.onStart(h,o,a),s=!0},this.itemEnd=function(h){o++,r.onProgress!==void 0&&r.onProgress(h,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(h){r.onError!==void 0&&r.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,d){return f.push(h,d),this},this.removeHandler=function(h){const d=f.indexOf(h);return d!==-1&&f.splice(d,2),this},this.getHandler=function(h){for(let d=0,c=f.length;d<c;d+=2){const m=f[d],p=f[d+1];if(m.global&&(m.lastIndex=0),m.test(h))return p}return null}}}const zM=new BM;class hf{constructor(e){this.manager=e!==void 0?e:zM,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,n){const i=this;return new Promise(function(r,s){i.load(e,r,n,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}hf.DEFAULT_MATERIAL_NAME="__DEFAULT";class kM extends hf{constructor(e){super(e)}load(e,n,i,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=Yu.get(e);if(o!==void 0)return s.manager.itemStart(e),setTimeout(function(){n&&n(o),s.manager.itemEnd(e)},0),o;const a=Ys("img");function l(){h(),Yu.add(e,this),n&&n(this),s.manager.itemEnd(e)}function f(d){h(),r&&r(d),s.manager.itemError(e),s.manager.itemEnd(e)}function h(){a.removeEventListener("load",l,!1),a.removeEventListener("error",f,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",f,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(e),a.src=e,a}}class HM extends hf{constructor(e){super(e)}load(e,n,i,r){const s=new Xt,o=new kM(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){s.image=a,s.needsUpdate=!0,n!==void 0&&n(s)},i,r),s}}class GM extends $i{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){const e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}}class fp{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=ju(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const n=ju();e=(n-this.oldTime)/1e3,this.oldTime=n,this.elapsedTime+=e}return e}}function ju(){return performance.now()}const $u=new Ut;class VM{constructor(e,n,i=0,r=1/0){this.ray=new Yd(e,n),this.near=i,this.far=r,this.camera=null,this.layers=new cf,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,n){this.ray.set(e,n)}setFromCamera(e,n){n.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(n.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(n).sub(this.ray.origin).normalize(),this.camera=n):n.isOrthographicCamera&&(this.ray.origin.set(e.x,e.y,(n.near+n.far)/(n.near-n.far)).unproject(n),this.ray.direction.set(0,0,-1).transformDirection(n.matrixWorld),this.camera=n)}setFromXRController(e){return $u.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4($u),this}intersectObject(e,n=!0,i=[]){return Mc(e,this,i,n),i.sort(Ku),i}intersectObjects(e,n=!0,i=[]){for(let r=0,s=e.length;r<s;r++)Mc(e[r],this,i,n);return i.sort(Ku),i}}function Ku(t,e){return t.distance-e.distance}function Mc(t,e,n,i){let r=!0;if(t.layers.test(e.layers)&&t.raycast(e,n)===!1&&(r=!1),r===!0&&i===!0){const s=t.children;for(let o=0,a=s.length;o<a;o++)Mc(s[o],e,n,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Qc}}));typeof window<"u"&&(window.__THREE__||(window.__THREE__=Qc));/*!
 * VERSION: 2.0.2
 * DATE: 2018-08-27
 * UPDATES AND DOCS AT: http://greensock.com
 *
 * @license Copyright (c) 2008-2018, GreenSock. All rights reserved.
 * This work is subject to the terms at http://greensock.com/standard-license or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 *
 * @author: Jack Doyle, jack@greensock.com
 */var Ct=typeof window<"u"?window:typeof Pc<"u"&&Pc.exports&&typeof global<"u"?global:{},ot=function(t,e){var n=t.document,i=t.GreenSockGlobals=t.GreenSockGlobals||t;if(i.TweenLite)return i.TweenLite;var r=function(_){var v=_.split("."),M=i,C;for(C=0;C<v.length;C++)M[v[C]]=M=M[v[C]]||{};return M},s=r("com.greensock"),o=1e-10,a=function(_){var v=[],M=_.length,C;for(C=0;C!==M;v.push(_[C++]));return v},l=function(){},f=function(){var _=Object.prototype.toString,v=_.call([]);return function(M){return M!=null&&(M instanceof Array||typeof M=="object"&&!!M.push&&_.call(M)===v)}}(),h,d,c,m,p,y={},g=function(_,v,M,C){this.sc=y[_]?y[_].sc:[],y[_]=this,this.gsClass=null,this.func=M;var U=[];this.check=function(F){for(var K=v.length,X=K,te,Te,re,ge;--K>-1;)(te=y[v[K]]||new g(v[K],[])).gsClass?(U[K]=te.gsClass,X--):F&&te.sc.push(this);if(X===0&&M)for(Te=("com.greensock."+_).split("."),re=Te.pop(),ge=r(Te.join("."))[re]=this.gsClass=M.apply(M,U),C&&(i[re]=ge),K=0;K<this.sc.length;K++)this.sc[K].check()},this.check(!0)},u=t._gsDefine=function(_,v,M,C){return new g(_,v,M,C)},w=s._class=function(_,v,M){return v=v||function(){},u(_,[],function(){return v},M),v};u.globals=i;var T=[0,0,1,1],A=w("easing.Ease",function(_,v,M,C){this._func=_,this._type=M||0,this._power=C||0,this._params=v?T.concat(v):T},!0),G=A.map={},N=A.register=function(_,v,M,C){for(var U=v.split(","),F=U.length,K=(M||"easeIn,easeOut,easeInOut").split(","),X,te,Te,re;--F>-1;)for(te=U[F],X=C?w("easing."+te,null,!0):s.easing[te]||{},Te=K.length;--Te>-1;)re=K[Te],G[te+"."+re]=G[re+te]=X[re]=_.getRatio?_:_[re]||new _};for(c=A.prototype,c._calcEnd=!1,c.getRatio=function(_){if(this._func)return this._params[0]=_,this._func.apply(null,this._params);var v=this._type,M=this._power,C=v===1?1-_:v===2?_:_<.5?_*2:(1-_)*2;return M===1?C*=C:M===2?C*=C*C:M===3?C*=C*C*C:M===4&&(C*=C*C*C*C),v===1?1-C:v===2?C:_<.5?C/2:1-C/2},h=["Linear","Quad","Cubic","Quart","Quint,Strong"],d=h.length;--d>-1;)c=h[d]+",Power"+d,N(new A(null,null,1,d),c,"easeOut",!0),N(new A(null,null,2,d),c,"easeIn"+(d===0?",easeNone":"")),N(new A(null,null,3,d),c,"easeInOut");G.linear=s.easing.Linear.easeIn,G.swing=s.easing.Quad.easeInOut;var k=w("events.EventDispatcher",function(_){this._listeners={},this._eventTarget=_||this});c=k.prototype,c.addEventListener=function(_,v,M,C,U){U=U||0;var F=this._listeners[_],K=0,X,te;for(this===m&&!p&&m.wake(),F==null&&(this._listeners[_]=F=[]),te=F.length;--te>-1;)X=F[te],X.c===v&&X.s===M?F.splice(te,1):K===0&&X.pr<U&&(K=te+1);F.splice(K,0,{c:v,s:M,up:C,pr:U})},c.removeEventListener=function(_,v){var M=this._listeners[_],C;if(M){for(C=M.length;--C>-1;)if(M[C].c===v){M.splice(C,1);return}}},c.dispatchEvent=function(_){var v=this._listeners[_],M,C,U;if(v)for(M=v.length,M>1&&(v=v.slice(0)),C=this._eventTarget;--M>-1;)U=v[M],U&&(U.up?U.c.call(U.s||C,{type:_,target:C}):U.c.call(U.s||C))};var q=t.requestAnimationFrame,J=t.cancelAnimationFrame,b=Date.now||function(){return new Date().getTime()},P=b();for(h=["ms","moz","webkit","o"],d=h.length;--d>-1&&!q;)q=t[h[d]+"RequestAnimationFrame"],J=t[h[d]+"CancelAnimationFrame"]||t[h[d]+"CancelRequestAnimationFrame"];w("Ticker",function(_,v){var M=this,C=b(),U=v!==!1&&q?"auto":!1,F=500,K=33,X="tick",te,Te,re,ge,Fe,Le=function(Ue){var $e=b()-P,Ye,tt;$e>F&&(C+=$e-K),P+=$e,M.time=(P-C)/1e3,Ye=M.time-Fe,(!te||Ye>0||Ue===!0)&&(M.frame++,Fe+=Ye+(Ye>=ge?.004:ge-Ye),tt=!0),Ue!==!0&&(re=Te(Le)),tt&&M.dispatchEvent(X)};k.call(M),M.time=M.frame=0,M.tick=function(){Le(!0)},M.lagSmoothing=function(Ue,$e){if(!arguments.length)return F<1/o;F=Ue||1/o,K=Math.min($e,F,0)},M.sleep=function(){re!=null&&(!U||!J?clearTimeout(re):J(re),Te=l,re=null,M===m&&(p=!1))},M.wake=function(Ue){re!==null?M.sleep():Ue?C+=-P+(P=b()):M.frame>10&&(P=b()-F+5),Te=te===0?l:!U||!q?function($e){return setTimeout($e,(Fe-M.time)*1e3+1|0)}:q,M===m&&(p=!0),Le(2)},M.fps=function(Ue){if(!arguments.length)return te;te=Ue,ge=1/(te||60),Fe=this.time+ge,M.wake()},M.useRAF=function(Ue){if(!arguments.length)return U;M.sleep(),U=Ue,M.fps(te)},M.fps(_),setTimeout(function(){U==="auto"&&M.frame<5&&(n||{}).visibilityState!=="hidden"&&M.useRAF(!1)},1500)}),c=s.Ticker.prototype=new s.events.EventDispatcher,c.constructor=s.Ticker;var V=w("core.Animation",function(_,v){if(this.vars=v=v||{},this._duration=this._totalDuration=_||0,this._delay=Number(v.delay)||0,this._timeScale=1,this._active=v.immediateRender===!0,this.data=v.data,this._reversed=v.reversed===!0,!!We){p||m.wake();var M=this.vars.useFrames?qe:We;M.add(this,M._time),this.vars.paused&&this.paused(!0)}});m=V.ticker=new s.Ticker,c=V.prototype,c._dirty=c._gc=c._initted=c._paused=!1,c._totalTime=c._time=0,c._rawPrevTime=-1,c._next=c._last=c._onUpdate=c._timeline=c.timeline=null,c._paused=!1;var j=function(){p&&b()-P>2e3&&((n||{}).visibilityState!=="hidden"||!m.lagSmoothing())&&m.wake();var _=setTimeout(j,2e3);_.unref&&_.unref()};j(),c.play=function(_,v){return _!=null&&this.seek(_,v),this.reversed(!1).paused(!1)},c.pause=function(_,v){return _!=null&&this.seek(_,v),this.paused(!0)},c.resume=function(_,v){return _!=null&&this.seek(_,v),this.paused(!1)},c.seek=function(_,v){return this.totalTime(Number(_),v!==!1)},c.restart=function(_,v){return this.reversed(!1).paused(!1).totalTime(_?-this._delay:0,v!==!1,!0)},c.reverse=function(_,v){return _!=null&&this.seek(_||this.totalDuration(),v),this.reversed(!0).paused(!1)},c.render=function(_,v,M){},c.invalidate=function(){return this._time=this._totalTime=0,this._initted=this._gc=!1,this._rawPrevTime=-1,(this._gc||!this.timeline)&&this._enabled(!0),this},c.isActive=function(){var _=this._timeline,v=this._startTime,M;return!_||!this._gc&&!this._paused&&_.isActive()&&(M=_.rawTime(!0))>=v&&M<v+this.totalDuration()/this._timeScale-1e-7},c._enabled=function(_,v){return p||m.wake(),this._gc=!_,this._active=this.isActive(),v!==!0&&(_&&!this.timeline?this._timeline.add(this,this._startTime-this._delay):!_&&this.timeline&&this._timeline._remove(this,!0)),!1},c._kill=function(_,v){return this._enabled(!1,!1)},c.kill=function(_,v){return this._kill(_,v),this},c._uncache=function(_){for(var v=_?this:this.timeline;v;)v._dirty=!0,v=v.timeline;return this},c._swapSelfInParams=function(_){for(var v=_.length,M=_.concat();--v>-1;)_[v]==="{self}"&&(M[v]=this);return M},c._callback=function(_){var v=this.vars,M=v[_],C=v[_+"Params"],U=v[_+"Scope"]||v.callbackScope||this,F=C?C.length:0;switch(F){case 0:M.call(U);break;case 1:M.call(U,C[0]);break;case 2:M.call(U,C[0],C[1]);break;default:M.apply(U,C)}},c.eventCallback=function(_,v,M,C){if((_||"").substr(0,2)==="on"){var U=this.vars;if(arguments.length===1)return U[_];v==null?delete U[_]:(U[_]=v,U[_+"Params"]=f(M)&&M.join("").indexOf("{self}")!==-1?this._swapSelfInParams(M):M,U[_+"Scope"]=C),_==="onUpdate"&&(this._onUpdate=v)}return this},c.delay=function(_){return arguments.length?(this._timeline.smoothChildTiming&&this.startTime(this._startTime+_-this._delay),this._delay=_,this):this._delay},c.duration=function(_){return arguments.length?(this._duration=this._totalDuration=_,this._uncache(!0),this._timeline.smoothChildTiming&&this._time>0&&this._time<this._duration&&_!==0&&this.totalTime(this._totalTime*(_/this._duration),!0),this):(this._dirty=!1,this._duration)},c.totalDuration=function(_){return this._dirty=!1,arguments.length?this.duration(_):this._totalDuration},c.time=function(_,v){return arguments.length?(this._dirty&&this.totalDuration(),this.totalTime(_>this._duration?this._duration:_,v)):this._time},c.totalTime=function(_,v,M){if(p||m.wake(),!arguments.length)return this._totalTime;if(this._timeline){if(_<0&&!M&&(_+=this.totalDuration()),this._timeline.smoothChildTiming){this._dirty&&this.totalDuration();var C=this._totalDuration,U=this._timeline;if(_>C&&!M&&(_=C),this._startTime=(this._paused?this._pauseTime:U._time)-(this._reversed?C-_:_)/this._timeScale,U._dirty||this._uncache(!1),U._timeline)for(;U._timeline;)U._timeline._time!==(U._startTime+U._totalTime)/U._timeScale&&U.totalTime(U._totalTime,!0),U=U._timeline}this._gc&&this._enabled(!0,!1),(this._totalTime!==_||this._duration===0)&&(ie.length&&H(),this.render(_,v,!1),ie.length&&H())}return this},c.progress=c.totalProgress=function(_,v){var M=this.duration();return arguments.length?this.totalTime(M*_,v):M?this._time/M:this.ratio},c.startTime=function(_){return arguments.length?(_!==this._startTime&&(this._startTime=_,this.timeline&&this.timeline._sortChildren&&this.timeline.add(this,_-this._delay)),this):this._startTime},c.endTime=function(_){return this._startTime+(_!=!1?this.totalDuration():this.duration())/this._timeScale},c.timeScale=function(_){if(!arguments.length)return this._timeScale;var v,M;for(_=_||o,this._timeline&&this._timeline.smoothChildTiming&&(v=this._pauseTime,M=v||v===0?v:this._timeline.totalTime(),this._startTime=M-(M-this._startTime)*this._timeScale/_),this._timeScale=_,M=this.timeline;M&&M.timeline;)M._dirty=!0,M.totalDuration(),M=M.timeline;return this},c.reversed=function(_){return arguments.length?(_!=this._reversed&&(this._reversed=_,this.totalTime(this._timeline&&!this._timeline.smoothChildTiming?this.totalDuration()-this._totalTime:this._totalTime,!0)),this):this._reversed},c.paused=function(_){if(!arguments.length)return this._paused;var v=this._timeline,M,C;return _!=this._paused&&v&&(!p&&!_&&m.wake(),M=v.rawTime(),C=M-this._pauseTime,!_&&v.smoothChildTiming&&(this._startTime+=C,this._uncache(!1)),this._pauseTime=_?M:null,this._paused=_,this._active=this.isActive(),!_&&C!==0&&this._initted&&this.duration()&&(M=v.smoothChildTiming?this._totalTime:(M-this._startTime)/this._timeScale,this.render(M,M===this._totalTime,!0))),this._gc&&!_&&this._enabled(!0,!1),this};var ce=w("core.SimpleTimeline",function(_){V.call(this,0,_),this.autoRemoveChildren=this.smoothChildTiming=!0});c=ce.prototype=new V,c.constructor=ce,c.kill()._gc=!1,c._first=c._last=c._recent=null,c._sortChildren=!1,c.add=c.insert=function(_,v,M,C){var U,F;if(_._startTime=Number(v||0)+_._delay,_._paused&&this!==_._timeline&&(_._pauseTime=this.rawTime()-(_._timeline.rawTime()-_._pauseTime)),_.timeline&&_.timeline._remove(_,!0),_.timeline=_._timeline=this,_._gc&&_._enabled(!0,!0),U=this._last,this._sortChildren)for(F=_._startTime;U&&U._startTime>F;)U=U._prev;return U?(_._next=U._next,U._next=_):(_._next=this._first,this._first=_),_._next?_._next._prev=_:this._last=_,_._prev=U,this._recent=_,this._timeline&&this._uncache(!0),this},c._remove=function(_,v){return _.timeline===this&&(v||_._enabled(!1,!0),_._prev?_._prev._next=_._next:this._first===_&&(this._first=_._next),_._next?_._next._prev=_._prev:this._last===_&&(this._last=_._prev),_._next=_._prev=_.timeline=null,_===this._recent&&(this._recent=this._last),this._timeline&&this._uncache(!0)),this},c.render=function(_,v,M){var C=this._first,U;for(this._totalTime=this._time=this._rawPrevTime=_;C;)U=C._next,(C._active||_>=C._startTime&&!C._paused&&!C._gc)&&(C._reversed?C.render((C._dirty?C.totalDuration():C._totalDuration)-(_-C._startTime)*C._timeScale,v,M):C.render((_-C._startTime)*C._timeScale,v,M)),C=U},c.rawTime=function(){return p||m.wake(),this._totalTime};var se=w("TweenLite",function(_,v,M){if(V.call(this,v,M),this.render=se.prototype.render,_==null)throw"Cannot tween a null target.";this.target=_=typeof _!="string"?_:se.selector(_)||_;var C=_.jquery||_.length&&_!==t&&_[0]&&(_[0]===t||_[0].nodeType&&_[0].style&&!_.nodeType),U=this.vars.overwrite,F,K,X;if(this._overwrite=U=U==null?De[se.defaultOverwrite]:typeof U=="number"?U>>0:De[U],(C||_ instanceof Array||_.push&&f(_))&&typeof _[0]!="number")for(this._targets=X=a(_),this._propLookup=[],this._siblings=[],F=0;F<X.length;F++){if(K=X[F],K){if(typeof K=="string"){K=X[F--]=se.selector(K),typeof K=="string"&&X.splice(F+1,1);continue}else if(K.length&&K!==t&&K[0]&&(K[0]===t||K[0].nodeType&&K[0].style&&!K.nodeType)){X.splice(F--,1),this._targets=X=X.concat(a(K));continue}}else{X.splice(F--,1);continue}this._siblings[F]=W(K,this,!1),U===1&&this._siblings[F].length>1&&oe(K,this,null,1,this._siblings[F])}else this._propLookup={},this._siblings=W(_,this,!1),U===1&&this._siblings.length>1&&oe(_,this,null,1,this._siblings);(this.vars.immediateRender||v===0&&this._delay===0&&this.vars.immediateRender!==!1)&&(this._time=-o,this.render(Math.min(0,-this._delay)))},!0),ae=function(_){return _&&_.length&&_!==t&&_[0]&&(_[0]===t||_[0].nodeType&&_[0].style&&!_.nodeType)},_e=function(_,v){var M={},C;for(C in _)!xe[C]&&(!(C in v)||C==="transform"||C==="x"||C==="y"||C==="width"||C==="height"||C==="className"||C==="border")&&(!Oe[C]||Oe[C]&&Oe[C]._autoCSS)&&(M[C]=_[C],delete _[C]);_.css=M};c=se.prototype=new V,c.constructor=se,c.kill()._gc=!1,c.ratio=0,c._firstPT=c._targets=c._overwrittenProps=c._startAt=null,c._notifyPluginsOfEnabled=c._lazy=!1,se.version="2.0.2",se.defaultEase=c._ease=new A(null,null,1,1),se.defaultOverwrite="auto",se.ticker=m,se.autoSleep=120,se.lagSmoothing=function(_,v){m.lagSmoothing(_,v)},se.selector=t.$||t.jQuery||function(_){var v=t.$||t.jQuery;return v?(se.selector=v,v(_)):(n||(n=t.document),n?n.querySelectorAll?n.querySelectorAll(_):n.getElementById(_.charAt(0)==="#"?_.substr(1):_):_)};var ie=[],Ne={},ze=/(?:(-|-=|\+=)?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/ig,He=/[\+-]=-?[\.\d]/,Qe=function(_){for(var v=this._firstPT,M=1e-6,C;v;)C=v.blob?_===1&&this.end!=null?this.end:_?this.join(""):this.start:v.c*_+v.s,v.m?C=v.m.call(this._tween,C,this._target||v.t,this._tween):C<M&&C>-M&&!v.blob&&(C=0),v.f?v.fp?v.t[v.p](v.fp,C):v.t[v.p](C):v.t[v.p]=C,v=v._next},rt=function(_,v,M,C){var U=[],F=0,K="",X=0,te,Te,re,ge,Fe,Le,Ue;for(U.start=_,U.end=v,_=U[0]=_+"",v=U[1]=v+"",M&&(M(U),_=U[0],v=U[1]),U.length=0,te=_.match(ze)||[],Te=v.match(ze)||[],C&&(C._next=null,C.blob=1,U._firstPT=U._applyPT=C),Fe=Te.length,ge=0;ge<Fe;ge++)Ue=Te[ge],Le=v.substr(F,v.indexOf(Ue,F)-F),K+=Le||!ge?Le:",",F+=Le.length,X?X=(X+1)%5:Le.substr(-5)==="rgba("&&(X=1),Ue===te[ge]||te.length<=ge?K+=Ue:(K&&(U.push(K),K=""),re=parseFloat(te[ge]),U.push(re),U._firstPT={_next:U._firstPT,t:U,p:U.length-1,s:re,c:(Ue.charAt(1)==="="?parseInt(Ue.charAt(0)+"1",10)*parseFloat(Ue.substr(2)):parseFloat(Ue)-re)||0,f:0,m:X&&X<4?Math.round:0}),F+=Ue.length;return K+=v.substr(F),K&&U.push(K),U.setRatio=Qe,He.test(v)&&(U.end=null),U},Se=function(_,v,M,C,U,F,K,X,te){typeof C=="function"&&(C=C(te||0,_));var Te=typeof _[v],re=Te!=="function"?"":v.indexOf("set")||typeof _["get"+v.substr(3)]!="function"?v:"get"+v.substr(3),ge=M!=="get"?M:re?K?_[re](K):_[re]():_[v],Fe=typeof C=="string"&&C.charAt(1)==="=",Le={t:_,p:v,s:ge,f:Te==="function",pg:0,n:U||v,m:F?typeof F=="function"?F:Math.round:0,pr:0,c:Fe?parseInt(C.charAt(0)+"1",10)*parseFloat(C.substr(2)):parseFloat(C)-ge||0},Ue;if((typeof ge!="number"||typeof C!="number"&&!Fe)&&(K||isNaN(ge)||!Fe&&isNaN(C)||typeof ge=="boolean"||typeof C=="boolean"?(Le.fp=K,Ue=rt(ge,Fe?parseFloat(Le.s)+Le.c+(Le.s+"").replace(/[0-9\-\.]/g,""):C,X||se.defaultStringFilter,Le),Le={t:Ue,p:"setRatio",s:0,c:1,f:2,pg:0,n:U||v,pr:0,m:0}):(Le.s=parseFloat(ge),Fe||(Le.c=parseFloat(C)-Le.s||0))),Le.c)return(Le._next=this._firstPT)&&(Le._next._prev=Le),this._firstPT=Le,Le},Pe=se._internals={isArray:f,isSelector:ae,lazyTweens:ie,blobDif:rt},Oe=se._plugins={},ee=Pe.tweenLookup={},we=0,xe=Pe.reservedProps={ease:1,delay:1,overwrite:1,onComplete:1,onCompleteParams:1,onCompleteScope:1,useFrames:1,runBackwards:1,startAt:1,onUpdate:1,onUpdateParams:1,onUpdateScope:1,onStart:1,onStartParams:1,onStartScope:1,onReverseComplete:1,onReverseCompleteParams:1,onReverseCompleteScope:1,onRepeat:1,onRepeatParams:1,onRepeatScope:1,easeParams:1,yoyo:1,immediateRender:1,repeat:1,repeatDelay:1,data:1,paused:1,reversed:1,autoCSS:1,lazy:1,onOverwrite:1,callbackScope:1,stringFilter:1,id:1,yoyoEase:1},De={none:0,all:1,auto:2,concurrent:3,allOnStart:4,preexisting:5,true:1,false:0},qe=V._rootFramesTimeline=new ce,We=V._rootTimeline=new ce,E=30,H=Pe.lazyRender=function(){var _=ie.length,v;for(Ne={};--_>-1;)v=ie[_],v&&v._lazy!==!1&&(v.render(v._lazy[0],v._lazy[1],!0),v._lazy=!1);ie.length=0};We._startTime=m.time,qe._startTime=m.frame,We._active=qe._active=!0,setTimeout(H,1),V._updateRoot=se.render=function(){var _,v,M;if(ie.length&&H(),We.render((m.time-We._startTime)*We._timeScale,!1,!1),qe.render((m.frame-qe._startTime)*qe._timeScale,!1,!1),ie.length&&H(),m.frame>=E){E=m.frame+(parseInt(se.autoSleep,10)||120);for(M in ee){for(v=ee[M].tweens,_=v.length;--_>-1;)v[_]._gc&&v.splice(_,1);v.length===0&&delete ee[M]}if(M=We._first,(!M||M._paused)&&se.autoSleep&&!qe._first&&m._listeners.tick.length===1){for(;M&&M._paused;)M=M._next;M||m.sleep()}}},m.addEventListener("tick",V._updateRoot);var W=function(_,v,M){var C=_._gsTweenID,U,F;if(ee[C||(_._gsTweenID=C="t"+we++)]||(ee[C]={target:_,tweens:[]}),v&&(U=ee[C].tweens,U[F=U.length]=v,M))for(;--F>-1;)U[F]===v&&U.splice(F,1);return ee[C].tweens},pe=function(_,v,M,C){var U=_.vars.onOverwrite,F,K;return U&&(F=U(_,v,M,C)),U=se.onOverwrite,U&&(K=U(_,v,M,C)),F!==!1&&K!==!1},oe=function(_,v,M,C,U){var F,K,X,te;if(C===1||C>=4){for(te=U.length,F=0;F<te;F++)if((X=U[F])!==v)X._gc||X._kill(null,_,v)&&(K=!0);else if(C===5)break;return K}var Te=v._startTime+o,re=[],ge=0,Fe=v._duration===0,Le;for(F=U.length;--F>-1;)(X=U[F])===v||X._gc||X._paused||(X._timeline!==v._timeline?(Le=Le||ye(v,0,Fe),ye(X,Le,Fe)===0&&(re[ge++]=X)):X._startTime<=Te&&X._startTime+X.totalDuration()/X._timeScale>Te&&((Fe||!X._initted)&&Te-X._startTime<=2e-10||(re[ge++]=X)));for(F=ge;--F>-1;)if(X=re[F],te=X._firstPT,C===2&&X._kill(M,_,v)&&(K=!0),C!==2||!X._firstPT&&X._initted&&te){if(C!==2&&!pe(X,v))continue;X._enabled(!1,!1)&&(K=!0)}return K},ye=function(_,v,M){for(var C=_._timeline,U=C._timeScale,F=_._startTime;C._timeline;){if(F+=C._startTime,U*=C._timeScale,C._paused)return-100;C=C._timeline}return F/=U,F>v?F-v:M&&F===v||!_._initted&&F-v<2*o?o:(F+=_.totalDuration()/_._timeScale/U)>v+o?0:F-v-o};c._init=function(){var _=this.vars,v=this._overwrittenProps,M=this._duration,C=!!_.immediateRender,U=_.ease,F,K,X,te,Te,re;if(_.startAt){this._startAt&&(this._startAt.render(-1,!0),this._startAt.kill()),Te={};for(te in _.startAt)Te[te]=_.startAt[te];if(Te.data="isStart",Te.overwrite=!1,Te.immediateRender=!0,Te.lazy=C&&_.lazy!==!1,Te.startAt=Te.delay=null,Te.onUpdate=_.onUpdate,Te.onUpdateParams=_.onUpdateParams,Te.onUpdateScope=_.onUpdateScope||_.callbackScope||this,this._startAt=se.to(this.target||{},0,Te),C){if(this._time>0)this._startAt=null;else if(M!==0)return}}else if(_.runBackwards&&M!==0)if(this._startAt)this._startAt.render(-1,!0),this._startAt.kill(),this._startAt=null;else{this._time!==0&&(C=!1),X={};for(te in _)(!xe[te]||te==="autoCSS")&&(X[te]=_[te]);if(X.overwrite=0,X.data="isFromStart",X.lazy=C&&_.lazy!==!1,X.immediateRender=C,this._startAt=se.to(this.target,0,X),!C)this._startAt._init(),this._startAt._enabled(!1),this.vars.immediateRender&&(this._startAt=null);else if(this._time===0)return}if(this._ease=U=U?U instanceof A?U:typeof U=="function"?new A(U,_.easeParams):G[U]||se.defaultEase:se.defaultEase,_.easeParams instanceof Array&&U.config&&(this._ease=U.config.apply(U,_.easeParams)),this._easeType=this._ease._type,this._easePower=this._ease._power,this._firstPT=null,this._targets)for(re=this._targets.length,F=0;F<re;F++)this._initProps(this._targets[F],this._propLookup[F]={},this._siblings[F],v?v[F]:null,F)&&(K=!0);else K=this._initProps(this.target,this._propLookup,this._siblings,v,0);if(K&&se._onPluginEvent("_onInitAllProps",this),v&&(this._firstPT||typeof this.target!="function"&&this._enabled(!1,!1)),_.runBackwards)for(X=this._firstPT;X;)X.s+=X.c,X.c=-X.c,X=X._next;this._onUpdate=_.onUpdate,this._initted=!0},c._initProps=function(_,v,M,C,U){var F,K,X,te,Te,re;if(_==null)return!1;Ne[_._gsTweenID]&&H(),this.vars.css||_.style&&_!==t&&_.nodeType&&Oe.css&&this.vars.autoCSS!==!1&&_e(this.vars,_);for(F in this.vars)if(re=this.vars[F],xe[F])re&&(re instanceof Array||re.push&&f(re))&&re.join("").indexOf("{self}")!==-1&&(this.vars[F]=re=this._swapSelfInParams(re,this));else if(Oe[F]&&(te=new Oe[F])._onInitTween(_,this.vars[F],this,U)){for(this._firstPT=Te={_next:this._firstPT,t:te,p:"setRatio",s:0,c:1,f:1,n:F,pg:1,pr:te._priority,m:0},K=te._overwriteProps.length;--K>-1;)v[te._overwriteProps[K]]=this._firstPT;(te._priority||te._onInitAllProps)&&(X=!0),(te._onDisable||te._onEnable)&&(this._notifyPluginsOfEnabled=!0),Te._next&&(Te._next._prev=Te)}else v[F]=Se.call(this,_,F,"get",re,F,0,null,this.vars.stringFilter,U);return C&&this._kill(C,_)?this._initProps(_,v,M,C,U):this._overwrite>1&&this._firstPT&&M.length>1&&oe(_,this,v,this._overwrite,M)?(this._kill(v,_),this._initProps(_,v,M,C,U)):(this._firstPT&&(this.vars.lazy!==!1&&this._duration||this.vars.lazy&&!this._duration)&&(Ne[_._gsTweenID]=!0),X)},c.render=function(_,v,M){var C=this._time,U=this._duration,F=this._rawPrevTime,K,X,te,Te;if(_>=U-1e-7&&_>=0)this._totalTime=this._time=U,this.ratio=this._ease._calcEnd?this._ease.getRatio(1):1,this._reversed||(K=!0,X="onComplete",M=M||this._timeline.autoRemoveChildren),U===0&&(this._initted||!this.vars.lazy||M)&&(this._startTime===this._timeline._duration&&(_=0),(F<0||_<=0&&_>=-1e-7||F===o&&this.data!=="isPause")&&F!==_&&(M=!0,F>o&&(X="onReverseComplete")),this._rawPrevTime=Te=!v||_||F===_?_:o);else if(_<1e-7)this._totalTime=this._time=0,this.ratio=this._ease._calcEnd?this._ease.getRatio(0):0,(C!==0||U===0&&F>0)&&(X="onReverseComplete",K=this._reversed),_<0&&(this._active=!1,U===0&&(this._initted||!this.vars.lazy||M)&&(F>=0&&!(F===o&&this.data==="isPause")&&(M=!0),this._rawPrevTime=Te=!v||_||F===_?_:o)),(!this._initted||this._startAt&&this._startAt.progress())&&(M=!0);else if(this._totalTime=this._time=_,this._easeType){var re=_/U,ge=this._easeType,Fe=this._easePower;(ge===1||ge===3&&re>=.5)&&(re=1-re),ge===3&&(re*=2),Fe===1?re*=re:Fe===2?re*=re*re:Fe===3?re*=re*re*re:Fe===4&&(re*=re*re*re*re),ge===1?this.ratio=1-re:ge===2?this.ratio=re:_/U<.5?this.ratio=re/2:this.ratio=1-re/2}else this.ratio=this._ease.getRatio(_/U);if(!(this._time===C&&!M)){if(!this._initted){if(this._init(),!this._initted||this._gc)return;if(!M&&this._firstPT&&(this.vars.lazy!==!1&&this._duration||this.vars.lazy&&!this._duration)){this._time=this._totalTime=C,this._rawPrevTime=F,ie.push(this),this._lazy=[_,v];return}this._time&&!K?this.ratio=this._ease.getRatio(this._time/U):K&&this._ease._calcEnd&&(this.ratio=this._ease.getRatio(this._time===0?0:1))}for(this._lazy!==!1&&(this._lazy=!1),this._active||!this._paused&&this._time!==C&&_>=0&&(this._active=!0),C===0&&(this._startAt&&(_>=0?this._startAt.render(_,!0,M):X||(X="_dummyGS")),this.vars.onStart&&(this._time!==0||U===0)&&(v||this._callback("onStart"))),te=this._firstPT;te;)te.f?te.t[te.p](te.c*this.ratio+te.s):te.t[te.p]=te.c*this.ratio+te.s,te=te._next;this._onUpdate&&(_<0&&this._startAt&&_!==-1e-4&&this._startAt.render(_,!0,M),v||(this._time!==C||K||M)&&this._callback("onUpdate")),X&&(!this._gc||M)&&(_<0&&this._startAt&&!this._onUpdate&&_!==-1e-4&&this._startAt.render(_,!0,M),K&&(this._timeline.autoRemoveChildren&&this._enabled(!1,!1),this._active=!1),!v&&this.vars[X]&&this._callback(X),U===0&&this._rawPrevTime===o&&Te!==o&&(this._rawPrevTime=0))}},c._kill=function(_,v,M){if(_==="all"&&(_=null),_==null&&(v==null||v===this.target))return this._lazy=!1,this._enabled(!1,!1);v=typeof v!="string"?v||this._targets||this.target:se.selector(v)||v;var C=M&&this._time&&M._startTime===this._startTime&&this._timeline===M._timeline,U=this._firstPT,F,K,X,te,Te,re,ge,Fe,Le;if((f(v)||ae(v))&&typeof v[0]!="number")for(F=v.length;--F>-1;)this._kill(_,v[F],M)&&(re=!0);else{if(this._targets){for(F=this._targets.length;--F>-1;)if(v===this._targets[F]){Te=this._propLookup[F]||{},this._overwrittenProps=this._overwrittenProps||[],K=this._overwrittenProps[F]=_?this._overwrittenProps[F]||{}:"all";break}}else{if(v!==this.target)return!1;Te=this._propLookup,K=this._overwrittenProps=_?this._overwrittenProps||{}:"all"}if(Te){if(ge=_||Te,Fe=_!==K&&K!=="all"&&_!==Te&&(typeof _!="object"||!_._tempKill),M&&(se.onOverwrite||this.vars.onOverwrite)){for(X in ge)Te[X]&&(Le||(Le=[]),Le.push(X));if((Le||!_)&&!pe(this,M,v,Le))return!1}for(X in ge)(te=Te[X])&&(C&&(te.f?te.t[te.p](te.s):te.t[te.p]=te.s,re=!0),te.pg&&te.t._kill(ge)&&(re=!0),(!te.pg||te.t._overwriteProps.length===0)&&(te._prev?te._prev._next=te._next:te===this._firstPT&&(this._firstPT=te._next),te._next&&(te._next._prev=te._prev),te._next=te._prev=null),delete Te[X]),Fe&&(K[X]=1);!this._firstPT&&this._initted&&U&&this._enabled(!1,!1)}}return re},c.invalidate=function(){return this._notifyPluginsOfEnabled&&se._onPluginEvent("_onDisable",this),this._firstPT=this._overwrittenProps=this._startAt=this._onUpdate=null,this._notifyPluginsOfEnabled=this._active=this._lazy=!1,this._propLookup=this._targets?{}:[],V.prototype.invalidate.call(this),this.vars.immediateRender&&(this._time=-o,this.render(Math.min(0,-this._delay))),this},c._enabled=function(_,v){if(p||m.wake(),_&&this._gc){var M=this._targets,C;if(M)for(C=M.length;--C>-1;)this._siblings[C]=W(M[C],this,!0);else this._siblings=W(this.target,this,!0)}return V.prototype._enabled.call(this,_,v),this._notifyPluginsOfEnabled&&this._firstPT?se._onPluginEvent(_?"_onEnable":"_onDisable",this):!1},se.to=function(_,v,M){return new se(_,v,M)},se.from=function(_,v,M){return M.runBackwards=!0,M.immediateRender=M.immediateRender!=!1,new se(_,v,M)},se.fromTo=function(_,v,M,C){return C.startAt=M,C.immediateRender=C.immediateRender!=!1&&M.immediateRender!=!1,new se(_,v,C)},se.delayedCall=function(_,v,M,C,U){return new se(v,0,{delay:_,onComplete:v,onCompleteParams:M,callbackScope:C,onReverseComplete:v,onReverseCompleteParams:M,immediateRender:!1,lazy:!1,useFrames:U,overwrite:0})},se.set=function(_,v){return new se(_,0,v)},se.getTweensOf=function(_,v){if(_==null)return[];_=typeof _!="string"?_:se.selector(_)||_;var M,C,U,F;if((f(_)||ae(_))&&typeof _[0]!="number"){for(M=_.length,C=[];--M>-1;)C=C.concat(se.getTweensOf(_[M],v));for(M=C.length;--M>-1;)for(F=C[M],U=M;--U>-1;)F===C[U]&&C.splice(M,1)}else if(_._gsTweenID)for(C=W(_).concat(),M=C.length;--M>-1;)(C[M]._gc||v&&!C[M].isActive())&&C.splice(M,1);return C||[]},se.killTweensOf=se.killDelayedCallsTo=function(_,v,M){typeof v=="object"&&(M=v,v=!1);for(var C=se.getTweensOf(_,v),U=C.length;--U>-1;)C[U]._kill(M,_)};var ve=w("plugins.TweenPlugin",function(_,v){this._overwriteProps=(_||"").split(","),this._propName=this._overwriteProps[0],this._priority=v||0,this._super=ve.prototype},!0);if(c=ve.prototype,ve.version="1.19.0",ve.API=2,c._firstPT=null,c._addTween=Se,c.setRatio=Qe,c._kill=function(_){var v=this._overwriteProps,M=this._firstPT,C;if(_[this._propName]!=null)this._overwriteProps=[];else for(C=v.length;--C>-1;)_[v[C]]!=null&&v.splice(C,1);for(;M;)_[M.n]!=null&&(M._next&&(M._next._prev=M._prev),M._prev?(M._prev._next=M._next,M._prev=null):this._firstPT===M&&(this._firstPT=M._next)),M=M._next;return!1},c._mod=c._roundProps=function(_){for(var v=this._firstPT,M;v;)M=_[this._propName]||v.n!=null&&_[v.n.split(this._propName+"_").join("")],M&&typeof M=="function"&&(v.f===2?v.t._applyPT.m=M:v.m=M),v=v._next},se._onPluginEvent=function(_,v){var M=v._firstPT,C,U,F,K,X;if(_==="_onInitAllProps"){for(;M;){for(X=M._next,U=F;U&&U.pr>M.pr;)U=U._next;(M._prev=U?U._prev:K)?M._prev._next=M:F=M,(M._next=U)?U._prev=M:K=M,M=X}M=v._firstPT=F}for(;M;)M.pg&&typeof M.t[_]=="function"&&M.t[_]()&&(C=!0),M=M._next;return C},ve.activate=function(_){for(var v=_.length;--v>-1;)_[v].API===ve.API&&(Oe[new _[v]()._propName]=_[v]);return!0},u.plugin=function(_){if(!_||!_.propName||!_.init||!_.API)throw"illegal plugin definition.";var v=_.propName,M=_.priority||0,C=_.overwriteProps,U={init:"_onInitTween",set:"setRatio",kill:"_kill",round:"_mod",mod:"_mod",initAll:"_onInitAllProps"},F=w("plugins."+v.charAt(0).toUpperCase()+v.substr(1)+"Plugin",function(){ve.call(this,v,M),this._overwriteProps=C||[]},_.global===!0),K=F.prototype=new ve(v),X;K.constructor=F,F.API=_.API;for(X in U)typeof _[X]=="function"&&(K[U[X]]=_[X]);return F.version=_.version,ve.activate([F]),F},h=t._gsQueue,h){for(d=0;d<h.length;d++)h[d]();for(c in y)y[c].func||t.console.log("GSAP encountered missing dependency: "+c)}return p=!1,se}(Ct),Lt=Ct.GreenSockGlobals,df=Lt.com.greensock,mr=df.core.SimpleTimeline,Kt=df.core.Animation,Zt=Lt.Ease;Lt.Linear;Lt.Power1;Lt.Power2;Lt.Power3;Lt.Power4;var La=Lt.TweenPlugin;df.events.EventDispatcher;/*!
 * VERSION: 2.0.2
 * DATE: 2018-08-27
 * UPDATES AND DOCS AT: http://greensock.com
 *
 * @license Copyright (c) 2008-2018, GreenSock. All rights reserved.
 * This work is subject to the terms at http://greensock.com/standard-license or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 * 
 * @author: Jack Doyle, jack@greensock.com
 **/Ct._gsDefine("TweenMax",["core.Animation","core.SimpleTimeline","TweenLite"],function(){var t=function(c){var m=[],p=c.length,y;for(y=0;y!==p;m.push(c[y++]));return m},e=function(c,m,p){var y=c.cycle,g,u;for(g in y)u=y[g],c[g]=typeof u=="function"?u(p,m[p]):u[p%u.length];delete c.cycle},n=function(c,m,p){ot.call(this,c,m,p),this._cycle=0,this._yoyo=this.vars.yoyo===!0||!!this.vars.yoyoEase,this._repeat=this.vars.repeat||0,this._repeatDelay=this.vars.repeatDelay||0,this._repeat&&this._uncache(!0),this.render=n.prototype.render},i=1e-10,r=ot._internals,s=r.isSelector,o=r.isArray,a=n.prototype=ot.to({},.1,{}),l=[];n.version="2.0.2",a.constructor=n,a.kill()._gc=!1,n.killTweensOf=n.killDelayedCallsTo=ot.killTweensOf,n.getTweensOf=ot.getTweensOf,n.lagSmoothing=ot.lagSmoothing,n.ticker=ot.ticker,n.render=ot.render,a.invalidate=function(){return this._yoyo=this.vars.yoyo===!0||!!this.vars.yoyoEase,this._repeat=this.vars.repeat||0,this._repeatDelay=this.vars.repeatDelay||0,this._yoyoEase=null,this._uncache(!0),ot.prototype.invalidate.call(this)},a.updateTo=function(c,m){var p=this.ratio,y=this.vars.immediateRender||c.immediateRender,g;m&&this._startTime<this._timeline._time&&(this._startTime=this._timeline._time,this._uncache(!1),this._gc?this._enabled(!0,!1):this._timeline.insert(this,this._startTime-this._delay));for(g in c)this.vars[g]=c[g];if(this._initted||y){if(m)this._initted=!1,y&&this.render(0,!0,!0);else if(this._gc&&this._enabled(!0,!1),this._notifyPluginsOfEnabled&&this._firstPT&&ot._onPluginEvent("_onDisable",this),this._time/this._duration>.998){var u=this._totalTime;this.render(0,!0,!1),this._initted=!1,this.render(u,!0,!1)}else if(this._initted=!1,this._init(),this._time>0||y)for(var w=1/(1-p),T=this._firstPT,A;T;)A=T.s+T.c,T.c*=w,T.s=A-T.c,T=T._next}return this},a.render=function(c,m,p){this._initted||this._duration===0&&this.vars.repeat&&this.invalidate();var y=this._dirty?this.totalDuration():this._totalDuration,g=this._time,u=this._totalTime,w=this._cycle,T=this._duration,A=this._rawPrevTime,G,N,k,q,J,b,P,V,j;if(c>=y-1e-7&&c>=0?(this._totalTime=y,this._cycle=this._repeat,this._yoyo&&this._cycle&1?(this._time=0,this.ratio=this._ease._calcEnd?this._ease.getRatio(0):0):(this._time=T,this.ratio=this._ease._calcEnd?this._ease.getRatio(1):1),this._reversed||(G=!0,N="onComplete",p=p||this._timeline.autoRemoveChildren),T===0&&(this._initted||!this.vars.lazy||p)&&(this._startTime===this._timeline._duration&&(c=0),(A<0||c<=0&&c>=-1e-7||A===i&&this.data!=="isPause")&&A!==c&&(p=!0,A>i&&(N="onReverseComplete")),this._rawPrevTime=V=!m||c||A===c?c:i)):c<1e-7?(this._totalTime=this._time=this._cycle=0,this.ratio=this._ease._calcEnd?this._ease.getRatio(0):0,(u!==0||T===0&&A>0)&&(N="onReverseComplete",G=this._reversed),c<0&&(this._active=!1,T===0&&(this._initted||!this.vars.lazy||p)&&(A>=0&&(p=!0),this._rawPrevTime=V=!m||c||A===c?c:i)),this._initted||(p=!0)):(this._totalTime=this._time=c,this._repeat!==0&&(q=T+this._repeatDelay,this._cycle=this._totalTime/q>>0,this._cycle!==0&&this._cycle===this._totalTime/q&&u<=c&&this._cycle--,this._time=this._totalTime-this._cycle*q,this._yoyo&&this._cycle&1&&(this._time=T-this._time,j=this._yoyoEase||this.vars.yoyoEase,j&&(this._yoyoEase||(j===!0&&!this._initted?(j=this.vars.ease,this._yoyoEase=j=j?j instanceof Zt?j:typeof j=="function"?new Zt(j,this.vars.easeParams):Zt.map[j]||ot.defaultEase:ot.defaultEase):this._yoyoEase=j=j===!0?this._ease:j instanceof Zt?j:Zt.map[j]),this.ratio=j?1-j.getRatio((T-this._time)/T):0)),this._time>T?this._time=T:this._time<0&&(this._time=0)),this._easeType&&!j?(J=this._time/T,b=this._easeType,P=this._easePower,(b===1||b===3&&J>=.5)&&(J=1-J),b===3&&(J*=2),P===1?J*=J:P===2?J*=J*J:P===3?J*=J*J*J:P===4&&(J*=J*J*J*J),b===1?this.ratio=1-J:b===2?this.ratio=J:this._time/T<.5?this.ratio=J/2:this.ratio=1-J/2):j||(this.ratio=this._ease.getRatio(this._time/T))),g===this._time&&!p&&w===this._cycle){u!==this._totalTime&&this._onUpdate&&(m||this._callback("onUpdate"));return}else if(!this._initted){if(this._init(),!this._initted||this._gc)return;if(!p&&this._firstPT&&(this.vars.lazy!==!1&&this._duration||this.vars.lazy&&!this._duration)){this._time=g,this._totalTime=u,this._rawPrevTime=A,this._cycle=w,r.lazyTweens.push(this),this._lazy=[c,m];return}this._time&&!G&&!j?this.ratio=this._ease.getRatio(this._time/T):G&&this._ease._calcEnd&&!j&&(this.ratio=this._ease.getRatio(this._time===0?0:1))}for(this._lazy!==!1&&(this._lazy=!1),this._active||!this._paused&&this._time!==g&&c>=0&&(this._active=!0),u===0&&(this._initted===2&&c>0&&this._init(),this._startAt&&(c>=0?this._startAt.render(c,!0,p):N||(N="_dummyGS")),this.vars.onStart&&(this._totalTime!==0||T===0)&&(m||this._callback("onStart"))),k=this._firstPT;k;)k.f?k.t[k.p](k.c*this.ratio+k.s):k.t[k.p]=k.c*this.ratio+k.s,k=k._next;this._onUpdate&&(c<0&&this._startAt&&this._startTime&&this._startAt.render(c,!0,p),m||(this._totalTime!==u||N)&&this._callback("onUpdate")),this._cycle!==w&&(m||this._gc||this.vars.onRepeat&&this._callback("onRepeat")),N&&(!this._gc||p)&&(c<0&&this._startAt&&!this._onUpdate&&this._startTime&&this._startAt.render(c,!0,p),G&&(this._timeline.autoRemoveChildren&&this._enabled(!1,!1),this._active=!1),!m&&this.vars[N]&&this._callback(N),T===0&&this._rawPrevTime===i&&V!==i&&(this._rawPrevTime=0))},n.to=function(c,m,p){return new n(c,m,p)},n.from=function(c,m,p){return p.runBackwards=!0,p.immediateRender=p.immediateRender!=!1,new n(c,m,p)},n.fromTo=function(c,m,p,y){return y.startAt=p,y.immediateRender=y.immediateRender!=!1&&p.immediateRender!=!1,new n(c,m,y)},n.staggerTo=n.allTo=function(c,m,p,y,g,u,w){y=y||0;var T=0,A=[],G=function(){p.onComplete&&p.onComplete.apply(p.onCompleteScope||this,arguments),g.apply(w||p.callbackScope||this,u||l)},N=p.cycle,k=p.startAt&&p.startAt.cycle,q,J,b,P;for(o(c)||(typeof c=="string"&&(c=ot.selector(c)||c),s(c)&&(c=t(c))),c=c||[],y<0&&(c=t(c),c.reverse(),y*=-1),q=c.length-1,b=0;b<=q;b++){J={};for(P in p)J[P]=p[P];if(N&&(e(J,c,b),J.duration!=null&&(m=J.duration,delete J.duration)),k){k=J.startAt={};for(P in p.startAt)k[P]=p.startAt[P];e(J.startAt,c,b)}J.delay=T+(J.delay||0),b===q&&g&&(J.onComplete=G),A[b]=new n(c[b],m,J),T+=y}return A},n.staggerFrom=n.allFrom=function(c,m,p,y,g,u,w){return p.runBackwards=!0,p.immediateRender=p.immediateRender!=!1,n.staggerTo(c,m,p,y,g,u,w)},n.staggerFromTo=n.allFromTo=function(c,m,p,y,g,u,w,T){return y.startAt=p,y.immediateRender=y.immediateRender!=!1&&p.immediateRender!=!1,n.staggerTo(c,m,y,g,u,w,T)},n.delayedCall=function(c,m,p,y,g){return new n(m,0,{delay:c,onComplete:m,onCompleteParams:p,callbackScope:y,onReverseComplete:m,onReverseCompleteParams:p,immediateRender:!1,useFrames:g,overwrite:0})},n.set=function(c,m){return new n(c,0,m)},n.isTweening=function(c){return ot.getTweensOf(c,!0).length>0};var f=function(c,m){for(var p=[],y=0,g=c._first;g;)g instanceof ot?p[y++]=g:(m&&(p[y++]=g),p=p.concat(f(g,m)),y=p.length),g=g._next;return p},h=n.getAllTweens=function(c){return f(Kt._rootTimeline,c).concat(f(Kt._rootFramesTimeline,c))};n.killAll=function(c,m,p,y){m==null&&(m=!0),p==null&&(p=!0);var g=h(y!=!1),u=g.length,w=m&&p&&y,T,A,G;for(G=0;G<u;G++)A=g[G],(w||A instanceof mr||(T=A.target===A.vars.onComplete)&&p||m&&!T)&&(c?A.totalTime(A._reversed?0:A.totalDuration()):A._enabled(!1,!1))},n.killChildTweensOf=function(c,m){if(c!=null){var p=r.tweenLookup,y,g,u,w,T;if(typeof c=="string"&&(c=ot.selector(c)||c),s(c)&&(c=t(c)),o(c)){for(w=c.length;--w>-1;)n.killChildTweensOf(c[w],m);return}y=[];for(u in p)for(g=p[u].target.parentNode;g;)g===c&&(y=y.concat(p[u].tweens)),g=g.parentNode;for(T=y.length,w=0;w<T;w++)m&&y[w].totalTime(y[w].totalDuration()),y[w]._enabled(!1,!1)}};var d=function(c,m,p,y){m=m!==!1,p=p!==!1,y=y!==!1;for(var g=h(y),u=m&&p&&y,w=g.length,T,A;--w>-1;)A=g[w],(u||A instanceof mr||(T=A.target===A.vars.onComplete)&&p||m&&!T)&&A.paused(c)};return n.pauseAll=function(c,m,p){d(!0,c,m,p)},n.resumeAll=function(c,m,p){d(!1,c,m,p)},n.globalTimeScale=function(c){var m=Kt._rootTimeline,p=ot.ticker.time;return arguments.length?(c=c||i,m._startTime=p-(p-m._startTime)*m._timeScale/c,m=Kt._rootFramesTimeline,p=ot.ticker.frame,m._startTime=p-(p-m._startTime)*m._timeScale/c,m._timeScale=Kt._rootTimeline._timeScale=c,c):m._timeScale},a.progress=function(c,m){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&this._cycle&1?1-c:c)+this._cycle*(this._duration+this._repeatDelay),m):this._time/this.duration()},a.totalProgress=function(c,m){return arguments.length?this.totalTime(this.totalDuration()*c,m):this._totalTime/this.totalDuration()},a.time=function(c,m){return arguments.length?(this._dirty&&this.totalDuration(),c>this._duration&&(c=this._duration),this._yoyo&&this._cycle&1?c=this._duration-c+this._cycle*(this._duration+this._repeatDelay):this._repeat!==0&&(c+=this._cycle*(this._duration+this._repeatDelay)),this.totalTime(c,m)):this._time},a.duration=function(c){return arguments.length?Kt.prototype.duration.call(this,c):this._duration},a.totalDuration=function(c){return arguments.length?this._repeat===-1?this:this.duration((c-this._repeat*this._repeatDelay)/(this._repeat+1)):(this._dirty&&(this._totalDuration=this._repeat===-1?999999999999:this._duration*(this._repeat+1)+this._repeatDelay*this._repeat,this._dirty=!1),this._totalDuration)},a.repeat=function(c){return arguments.length?(this._repeat=c,this._uncache(!0)):this._repeat},a.repeatDelay=function(c){return arguments.length?(this._repeatDelay=c,this._uncache(!0)):this._repeatDelay},a.yoyo=function(c){return arguments.length?(this._yoyo=c,this):this._yoyo},n},!0);var WM=Lt.TweenMax;/*!
 * VERSION: 2.0.2
 * DATE: 2018-08-27
 * UPDATES AND DOCS AT: http://greensock.com
 *
 * @license Copyright (c) 2008-2018, GreenSock. All rights reserved.
 * This work is subject to the terms at http://greensock.com/standard-license or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 * 
 * @author: Jack Doyle, jack@greensock.com
 */Ct._gsDefine("plugins.CSSPlugin",["plugins.TweenPlugin","TweenLite"],function(){var t=function(){La.call(this,"css"),this._overwriteProps.length=0,this.setRatio=t.prototype.setRatio},e=Ct._gsDefine.globals,n,i,r,s,o={},a=t.prototype=new La("css");a.constructor=t,t.version="2.0.2",t.API=2,t.defaultTransformPerspective=0,t.defaultSkewType="compensated",t.defaultSmoothOrigin=!0,a="px",t.suffixMap={top:a,right:a,bottom:a,left:a,width:a,height:a,fontSize:a,padding:a,margin:a,perspective:a,lineHeight:""};var l=/(?:\-|\.|\b)(\d|\.|e\-)+/g,f=/(?:\d|\-\d|\.\d|\-\.\d|\+=\d|\-=\d|\+=.\d|\-=\.\d)+/g,h=/(?:\+=|\-=|\-|\b)[\d\-\.]+[a-zA-Z0-9]*(?:%|\b)/gi,d=/(?![+-]?\d*\.?\d+|[+-]|e[+-]\d+)[^0-9]/g,c=/(?:\d|\-|\+|=|#|\.)*/g,m=/opacity *= *([^)]*)/i,p=/opacity:([^;]*)/i,y=/alpha\(opacity *=.+?\)/i,g=/^(rgb|hsl)/,u=/([A-Z])/g,w=/-([a-z])/gi,T=/(^(?:url\(\"|url\())|(?:(\"\))$|\)$)/gi,A=function(x,S){return S.toUpperCase()},G=/(?:Left|Right|Width)/i,N=/(M11|M12|M21|M22)=[\d\-\.e]+/gi,k=/progid\:DXImageTransform\.Microsoft\.Matrix\(.+?\)/i,q=/,(?=[^\)]*(?:\(|$))/gi,J=/[\s,\(]/i,b=Math.PI/180,P=180/Math.PI,V={},j={style:{}},ce=Ct.document||{createElement:function(){return j}},se=function(x,S){return ce.createElementNS?ce.createElementNS(S||"http://www.w3.org/1999/xhtml",x):ce.createElement(x)},ae=se("div"),_e=se("img"),ie=t._internals={_specialProps:o},Ne=(Ct.navigator||{}).userAgent||"",ze,He,Qe,rt,Se,Pe,Oe=function(){var x=Ne.indexOf("Android"),S=se("a");return Qe=Ne.indexOf("Safari")!==-1&&Ne.indexOf("Chrome")===-1&&(x===-1||parseFloat(Ne.substr(x+8,2))>3),Se=Qe&&parseFloat(Ne.substr(Ne.indexOf("Version/")+8,2))<6,rt=Ne.indexOf("Firefox")!==-1,(/MSIE ([0-9]{1,}[\.0-9]{0,})/.exec(Ne)||/Trident\/.*rv:([0-9]{1,}[\.0-9]{0,})/.exec(Ne))&&(Pe=parseFloat(RegExp.$1)),S?(S.style.cssText="top:1px;opacity:.55;",/^0.55/.test(S.style.opacity)):!1}(),ee=function(x){return m.test(typeof x=="string"?x:(x.currentStyle?x.currentStyle.filter:x.style.filter)||"")?parseFloat(RegExp.$1)/100:1},we=function(x){Ct.console},xe,De,qe="",We="",E=function(x,S){S=S||ae;var D=S.style,L,R;if(D[x]!==void 0)return x;for(x=x.charAt(0).toUpperCase()+x.substr(1),L=["O","Moz","ms","Ms","Webkit"],R=5;--R>-1&&D[L[R]+x]===void 0;);return R>=0?(We=R===3?"ms":L[R],qe="-"+We.toLowerCase()+"-",We+x):null},H=(typeof window<"u"?window:ce.defaultView||{getComputedStyle:function(){}}).getComputedStyle,W=t.getStyle=function(x,S,D,L,R){var z;return!Oe&&S==="opacity"?ee(x):(!L&&x.style[S]?z=x.style[S]:(D=D||H(x))?z=D[S]||D.getPropertyValue(S)||D.getPropertyValue(S.replace(u,"-$1").toLowerCase()):x.currentStyle&&(z=x.currentStyle[S]),R!=null&&(!z||z==="none"||z==="auto"||z==="auto auto")?R:z)},pe=ie.convertToPixels=function(x,S,D,L,R){if(L==="px"||!L&&S!=="lineHeight")return D;if(L==="auto"||!D)return 0;var z=G.test(S),I=x,B=ae.style,Y=D<0,le=D===1,Q,Me,fe;if(Y&&(D=-D),le&&(D*=100),S==="lineHeight"&&!L)Me=H(x).lineHeight,x.style.lineHeight=D,Q=parseFloat(H(x).lineHeight),x.style.lineHeight=Me;else if(L==="%"&&S.indexOf("border")!==-1)Q=D/100*(z?x.clientWidth:x.clientHeight);else{if(B.cssText="border:0 solid red;position:"+W(x,"position")+";line-height:0;",L==="%"||!I.appendChild||L.charAt(0)==="v"||L==="rem"){if(I=x.parentNode||ce.body,W(I,"display").indexOf("flex")!==-1&&(B.position="absolute"),Me=I._gsCache,fe=ot.ticker.frame,Me&&z&&Me.time===fe)return Me.width*D/100;B[z?"width":"height"]=D+L}else B[z?"borderLeftWidth":"borderTopWidth"]=D+L;I.appendChild(ae),Q=parseFloat(ae[z?"offsetWidth":"offsetHeight"]),I.removeChild(ae),z&&L==="%"&&t.cacheWidths!==!1&&(Me=I._gsCache=I._gsCache||{},Me.time=fe,Me.width=Q/D*100),Q===0&&!R&&(Q=pe(x,S,D,L,!0))}return le&&(Q/=100),Y?-Q:Q},oe=ie.calculateOffset=function(x,S,D){if(W(x,"position",D)!=="absolute")return 0;var L=S==="left"?"Left":"Top",R=W(x,"margin"+L,D);return x["offset"+L]-(pe(x,S,parseFloat(R),R.replace(c,""))||0)},ye=function(x,S){var D={},L,R,z;if(S=S||H(x,null))if(L=S.length)for(;--L>-1;)z=S[L],(z.indexOf("-transform")===-1||ht===z)&&(D[z.replace(w,A)]=S.getPropertyValue(z));else for(L in S)(L.indexOf("Transform")===-1||Be===L)&&(D[L]=S[L]);else if(S=x.currentStyle||x.style)for(L in S)typeof L=="string"&&D[L]===void 0&&(D[L.replace(w,A)]=S[L]);return Oe||(D.opacity=ee(x)),R=yi(x,S,!1),D.rotation=R.rotation,D.skewX=R.skewX,D.scaleX=R.scaleX,D.scaleY=R.scaleY,D.x=R.x,D.y=R.y,Tt&&(D.z=R.z,D.rotationX=R.rotationX,D.rotationY=R.rotationY,D.scaleZ=R.scaleZ),D.filters&&delete D.filters,D},ve=function(x,S,D,L,R){var z={},I=x.style,B,Y,le;for(Y in D)Y!=="cssText"&&Y!=="length"&&isNaN(Y)&&(S[Y]!==(B=D[Y])||R&&R[Y])&&Y.indexOf("Origin")===-1&&(typeof B=="number"||typeof B=="string")&&(z[Y]=B==="auto"&&(Y==="left"||Y==="top")?oe(x,Y):(B===""||B==="auto"||B==="none")&&typeof S[Y]=="string"&&S[Y].replace(d,"")!==""?0:B,I[Y]!==void 0&&(le=new Ue(I,Y,I[Y],le)));if(L)for(Y in L)Y!=="className"&&(z[Y]=L[Y]);return{difs:z,firstMPT:le}},_={width:["Left","Right"],height:["Top","Bottom"]},v=["marginLeft","marginRight","marginTop","marginBottom"],M=function(x,S,D){if((x.nodeName+"").toLowerCase()==="svg")return(D||H(x))[S]||0;if(x.getCTM&&vi(x))return x.getBBox()[S]||0;var L=parseFloat(S==="width"?x.offsetWidth:x.offsetHeight),R=_[S],z=R.length;for(D=D||H(x,null);--z>-1;)L-=parseFloat(W(x,"padding"+R[z],D,!0))||0,L-=parseFloat(W(x,"border"+R[z]+"Width",D,!0))||0;return L},C=function(x,S){if(x==="contain"||x==="auto"||x==="auto auto")return x+" ";(x==null||x==="")&&(x="0 0");var D=x.split(" "),L=x.indexOf("left")!==-1?"0%":x.indexOf("right")!==-1?"100%":D[0],R=x.indexOf("top")!==-1?"0%":x.indexOf("bottom")!==-1?"100%":D[1],z;if(D.length>3&&!S){for(D=x.split(", ").join(",").split(","),x=[],z=0;z<D.length;z++)x.push(C(D[z]));return x.join(",")}return R==null?R=L==="center"?"50%":"0":R==="center"&&(R="50%"),(L==="center"||isNaN(parseFloat(L))&&(L+"").indexOf("=")===-1)&&(L="50%"),x=L+" "+R+(D.length>2?" "+D[2]:""),S&&(S.oxp=L.indexOf("%")!==-1,S.oyp=R.indexOf("%")!==-1,S.oxr=L.charAt(1)==="=",S.oyr=R.charAt(1)==="=",S.ox=parseFloat(L.replace(d,"")),S.oy=parseFloat(R.replace(d,"")),S.v=x),S||x},U=function(x,S){return typeof x=="function"&&(x=x(De,xe)),typeof x=="string"&&x.charAt(1)==="="?parseInt(x.charAt(0)+"1",10)*parseFloat(x.substr(2)):parseFloat(x)-parseFloat(S)||0},F=function(x,S){typeof x=="function"&&(x=x(De,xe));var D=typeof x=="string"&&x.charAt(1)==="=";return typeof x=="string"&&x.charAt(x.length-2)==="v"&&(x=(D?x.substr(0,2):0)+window["inner"+(x.substr(-2)==="vh"?"Height":"Width")]*(parseFloat(D?x.substr(2):x)/100)),x==null?S:D?parseInt(x.charAt(0)+"1",10)*parseFloat(x.substr(2))+S:parseFloat(x)||0},K=function(x,S,D,L){var R=1e-6,z,I,B,Y,le;return typeof x=="function"&&(x=x(De,xe)),x==null?Y=S:typeof x=="number"?Y=x:(z=360,I=x.split("_"),le=x.charAt(1)==="=",B=(le?parseInt(x.charAt(0)+"1",10)*parseFloat(I[0].substr(2)):parseFloat(I[0]))*(x.indexOf("rad")===-1?1:P)-(le?0:S),I.length&&(L&&(L[D]=S+B),x.indexOf("short")!==-1&&(B=B%z,B!==B%(z/2)&&(B=B<0?B+z:B-z)),x.indexOf("_cw")!==-1&&B<0?B=(B+z*9999999999)%z-(B/z|0)*z:x.indexOf("ccw")!==-1&&B>0&&(B=(B-z*9999999999)%z-(B/z|0)*z)),Y=S+B),Y<R&&Y>-R&&(Y=0),Y},X={aqua:[0,255,255],lime:[0,255,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,255],navy:[0,0,128],white:[255,255,255],fuchsia:[255,0,255],olive:[128,128,0],yellow:[255,255,0],orange:[255,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[255,0,0],pink:[255,192,203],cyan:[0,255,255],transparent:[255,255,255,0]},te=function(x,S,D){return x=x<0?x+1:x>1?x-1:x,(x*6<1?S+(D-S)*x*6:x<.5?D:x*3<2?S+(D-S)*(2/3-x)*6:S)*255+.5|0},Te=t.parseColor=function(x,S){var D,L,R,z,I,B,Y,le,Q,Me,fe;if(!x)D=X.black;else if(typeof x=="number")D=[x>>16,x>>8&255,x&255];else{if(x.charAt(x.length-1)===","&&(x=x.substr(0,x.length-1)),X[x])D=X[x];else if(x.charAt(0)==="#")x.length===4&&(L=x.charAt(1),R=x.charAt(2),z=x.charAt(3),x="#"+L+L+R+R+z+z),x=parseInt(x.substr(1),16),D=[x>>16,x>>8&255,x&255];else if(x.substr(0,3)==="hsl"){if(D=fe=x.match(l),!S)I=Number(D[0])%360/360,B=Number(D[1])/100,Y=Number(D[2])/100,R=Y<=.5?Y*(B+1):Y+B-Y*B,L=Y*2-R,D.length>3&&(D[3]=Number(D[3])),D[0]=te(I+1/3,L,R),D[1]=te(I,L,R),D[2]=te(I-1/3,L,R);else if(x.indexOf("=")!==-1)return x.match(f)}else D=x.match(l)||X.transparent;D[0]=Number(D[0]),D[1]=Number(D[1]),D[2]=Number(D[2]),D.length>3&&(D[3]=Number(D[3]))}return S&&!fe&&(L=D[0]/255,R=D[1]/255,z=D[2]/255,le=Math.max(L,R,z),Q=Math.min(L,R,z),Y=(le+Q)/2,le===Q?I=B=0:(Me=le-Q,B=Y>.5?Me/(2-le-Q):Me/(le+Q),I=le===L?(R-z)/Me+(R<z?6:0):le===R?(z-L)/Me+2:(L-R)/Me+4,I*=60),D[0]=I+.5|0,D[1]=B*100+.5|0,D[2]=Y*100+.5|0),D},re=function(x,S){var D=x.match(ge)||[],L=0,R="",z,I,B;if(!D.length)return x;for(z=0;z<D.length;z++)I=D[z],B=x.substr(L,x.indexOf(I,L)-L),L+=B.length+I.length,I=Te(I,S),I.length===3&&I.push(1),R+=B+(S?"hsla("+I[0]+","+I[1]+"%,"+I[2]+"%,"+I[3]:"rgba("+I.join(","))+")";return R+x.substr(L)},ge="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3}){1,2}\\b";for(a in X)ge+="|"+a+"\\b";ge=new RegExp(ge+")","gi"),t.colorStringFilter=function(x){var S=x[0]+" "+x[1],D;ge.test(S)&&(D=S.indexOf("hsl(")!==-1||S.indexOf("hsla(")!==-1,x[0]=re(x[0],D),x[1]=re(x[1],D)),ge.lastIndex=0},ot.defaultStringFilter||(ot.defaultStringFilter=t.colorStringFilter);var Fe=function(x,S,D,L){if(x==null)return function(fe){return fe};var R=S?(x.match(ge)||[""])[0]:"",z=x.split(R).join("").match(h)||[],I=x.substr(0,x.indexOf(z[0])),B=x.charAt(x.length-1)===")"?")":"",Y=x.indexOf(" ")!==-1?" ":",",le=z.length,Q=le>0?z[0].replace(l,""):"",Me;return le?S?(Me=function(fe){var $,Ie,Ce,Ee;if(typeof fe=="number")fe+=Q;else if(L&&q.test(fe)){for(Ee=fe.replace(q,"|").split("|"),Ce=0;Ce<Ee.length;Ce++)Ee[Ce]=Me(Ee[Ce]);return Ee.join(",")}if($=(fe.match(ge)||[R])[0],Ie=fe.split($).join("").match(h)||[],Ce=Ie.length,le>Ce--)for(;++Ce<le;)Ie[Ce]=D?Ie[(Ce-1)/2|0]:z[Ce];return I+Ie.join(Y)+Y+$+B+(fe.indexOf("inset")!==-1?" inset":"")},Me):(Me=function(fe){var $,Ie,Ce;if(typeof fe=="number")fe+=Q;else if(L&&q.test(fe)){for(Ie=fe.replace(q,"|").split("|"),Ce=0;Ce<Ie.length;Ce++)Ie[Ce]=Me(Ie[Ce]);return Ie.join(",")}if($=fe.match(h)||[],Ce=$.length,le>Ce--)for(;++Ce<le;)$[Ce]=D?$[(Ce-1)/2|0]:z[Ce];return I+$.join(Y)+B},Me):function(fe){return fe}},Le=function(x){return x=x.split(","),function(S,D,L,R,z,I,B){var Y=(D+"").split(" "),le;for(B={},le=0;le<4;le++)B[x[le]]=Y[le]=Y[le]||Y[(le-1)/2>>0];return R.parse(S,B,z,I)}};ie._setPluginRatio=function(x){this.plugin.setRatio(x);for(var S=this.data,D=S.proxy,L=S.firstMPT,R=1e-6,z,I,B,Y,le;L;)z=D[L.v],L.r?z=L.r(z):z<R&&z>-R&&(z=0),L.t[L.p]=z,L=L._next;if(S.autoRotate&&(S.autoRotate.rotation=S.mod?S.mod.call(this._tween,D.rotation,this.t,this._tween):D.rotation),x===1||x===0)for(L=S.firstMPT,le=x===1?"e":"b";L;){if(I=L.t,!I.type)I[le]=I.s+I.xs0;else if(I.type===1){for(Y=I.xs0+I.s+I.xs1,B=1;B<I.l;B++)Y+=I["xn"+B]+I["xs"+(B+1)];I[le]=Y}L=L._next}};var Ue=function(x,S,D,L,R){this.t=x,this.p=S,this.v=D,this.r=R,L&&(L._prev=this,this._next=L)};ie._parseToProxy=function(x,S,D,L,R,z){var I=L,B={},Y={},le=D._transform,Q=V,Me,fe,$,Ie,Ce;for(D._transform=null,V=S,L=Ce=D.parse(x,S,L,R),V=Q,z&&(D._transform=le,I&&(I._prev=null,I._prev&&(I._prev._next=null)));L&&L!==I;){if(L.type<=1&&(fe=L.p,Y[fe]=L.s+L.c,B[fe]=L.s,z||(Ie=new Ue(L,"s",fe,Ie,L.r),L.c=0),L.type===1))for(Me=L.l;--Me>0;)$="xn"+Me,fe=L.p+"_"+$,Y[fe]=L.data[$],B[fe]=L[$],z||(Ie=new Ue(L,$,fe,Ie,L.rxp[$]));L=L._next}return{proxy:B,end:Y,firstMPT:Ie,pt:Ce}};var $e=ie.CSSPropTween=function(x,S,D,L,R,z,I,B,Y,le,Q){this.t=x,this.p=S,this.s=D,this.c=L,this.n=I||S,x instanceof $e||s.push(this.n),this.r=B&&(typeof B=="function"?B:Math.round),this.type=z||0,Y&&(this.pr=Y,n=!0),this.b=le===void 0?D:le,this.e=Q===void 0?D+L:Q,R&&(this._next=R,R._prev=this)},Ye=function(x,S,D,L,R,z){var I=new $e(x,S,D,L-D,R,-1,z);return I.b=D,I.e=I.xs0=L,I},tt=t.parseComplex=function(x,S,D,L,R,z,I,B,Y,le){D=D||z||"",typeof L=="function"&&(L=L(De,xe)),I=new $e(x,S,0,0,I,le?2:1,null,!1,B,D,L),L+="",R&&ge.test(L+D)&&(L=[D,L],t.colorStringFilter(L),D=L[0],L=L[1]);var Q=D.split(", ").join(",").split(" "),Me=L.split(", ").join(",").split(" "),fe=Q.length,$=ze!==!1,Ie,Ce,Ee,be,Ae,je,Ve,Ze,et,Je,st,ut,nt;for((L.indexOf(",")!==-1||D.indexOf(",")!==-1)&&((L+D).indexOf("rgb")!==-1||(L+D).indexOf("hsl")!==-1?(Q=Q.join(" ").replace(q,", ").split(" "),Me=Me.join(" ").replace(q,", ").split(" ")):(Q=Q.join(" ").split(",").join(", ").split(" "),Me=Me.join(" ").split(",").join(", ").split(" ")),fe=Q.length),fe!==Me.length&&(Q=(z||"").split(" "),fe=Q.length),I.plugin=Y,I.setRatio=le,ge.lastIndex=0,Ie=0;Ie<fe;Ie++)if(be=Q[Ie],Ae=Me[Ie]+"",Ze=parseFloat(be),Ze||Ze===0)I.appendXtra("",Ze,U(Ae,Ze),Ae.replace(f,""),$&&Ae.indexOf("px")!==-1?Math.round:!1,!0);else if(R&&ge.test(be))ut=Ae.indexOf(")")+1,ut=")"+(ut?Ae.substr(ut):""),nt=Ae.indexOf("hsl")!==-1&&Oe,Je=Ae,be=Te(be,nt),Ae=Te(Ae,nt),et=be.length+Ae.length>6,et&&!Oe&&Ae[3]===0?(I["xs"+I.l]+=I.l?" transparent":"transparent",I.e=I.e.split(Me[Ie]).join("transparent")):(Oe||(et=!1),nt?I.appendXtra(Je.substr(0,Je.indexOf("hsl"))+(et?"hsla(":"hsl("),be[0],U(Ae[0],be[0]),",",!1,!0).appendXtra("",be[1],U(Ae[1],be[1]),"%,",!1).appendXtra("",be[2],U(Ae[2],be[2]),et?"%,":"%"+ut,!1):I.appendXtra(Je.substr(0,Je.indexOf("rgb"))+(et?"rgba(":"rgb("),be[0],Ae[0]-be[0],",",Math.round,!0).appendXtra("",be[1],Ae[1]-be[1],",",Math.round).appendXtra("",be[2],Ae[2]-be[2],et?",":ut,Math.round),et&&(be=be.length<4?1:be[3],I.appendXtra("",be,(Ae.length<4?1:Ae[3])-be,ut,!1))),ge.lastIndex=0;else if(je=be.match(l),!je)I["xs"+I.l]+=I.l||I["xs"+I.l]?" "+Ae:Ae;else{if(Ve=Ae.match(f),!Ve||Ve.length!==je.length)return I;for(Ee=0,Ce=0;Ce<je.length;Ce++)st=je[Ce],Je=be.indexOf(st,Ee),I.appendXtra(be.substr(Ee,Je-Ee),Number(st),U(Ve[Ce],st),"",$&&be.substr(Je+st.length,2)==="px"?Math.round:!1,Ce===0),Ee=Je+st.length;I["xs"+I.l]+=be.substr(Ee)}if(L.indexOf("=")!==-1&&I.data){for(ut=I.xs0+I.data.s,Ie=1;Ie<I.l;Ie++)ut+=I["xs"+Ie]+I.data["xn"+Ie];I.e=ut+I["xs"+Ie]}return I.l||(I.type=-1,I.xs0=I.e),I.xfirst||I},Z=9;for(a=$e.prototype,a.l=a.pr=0;--Z>0;)a["xn"+Z]=0,a["xs"+Z]="";a.xs0="",a._next=a._prev=a.xfirst=a.data=a.plugin=a.setRatio=a.rxp=null,a.appendXtra=function(x,S,D,L,R,z){var I=this,B=I.l;return I["xs"+B]+=z&&(B||I["xs"+B])?" "+x:x||"",!D&&B!==0&&!I.plugin?(I["xs"+B]+=S+(L||""),I):(I.l++,I.type=I.setRatio?2:1,I["xs"+I.l]=L||"",B>0?(I.data["xn"+B]=S+D,I.rxp["xn"+B]=R,I["xn"+B]=S,I.plugin||(I.xfirst=new $e(I,"xn"+B,S,D,I.xfirst||I,0,I.n,R,I.pr),I.xfirst.xs0=0),I):(I.data={s:S+D},I.rxp={},I.s=S,I.c=D,I.r=R,I))};var Xe=function(x,S){S=S||{},this.p=S.prefix&&E(x)||x,o[x]=o[this.p]=this,this.format=S.formatter||Fe(S.defaultValue,S.color,S.collapsible,S.multi),S.parser&&(this.parse=S.parser),this.clrs=S.color,this.multi=S.multi,this.keyword=S.keyword,this.dflt=S.defaultValue,this.pr=S.priority||0},ue=ie._registerComplexSpecialProp=function(x,S,D){typeof S!="object"&&(S={parser:D});var L=x.split(","),R=S.defaultValue,z;for(D=D||[R],z=0;z<L.length;z++)S.prefix=z===0&&S.prefix,S.defaultValue=D[z]||R,new Xe(L[z],S)},Re=ie._registerPluginProp=function(x){if(!o[x]){var S=x.charAt(0).toUpperCase()+x.substr(1)+"Plugin";ue(x,{parser:function(D,L,R,z,I,B,Y){var le=e.com.greensock.plugins[S];return le?(le._cssRegister(),o[R].parse(D,L,R,z,I,B,Y)):(we("Error: "+S+" js file not loaded."),I)}})}};a=Xe.prototype,a.parseComplex=function(x,S,D,L,R,z){var I=this.keyword,B,Y,le,Q,Me,fe;if(this.multi&&(q.test(D)||q.test(S)?(Y=S.replace(q,"|").split("|"),le=D.replace(q,"|").split("|")):I&&(Y=[S],le=[D])),le){for(Q=le.length>Y.length?le.length:Y.length,B=0;B<Q;B++)S=Y[B]=Y[B]||this.dflt,D=le[B]=le[B]||this.dflt,I&&(Me=S.indexOf(I),fe=D.indexOf(I),Me!==fe&&(fe===-1?Y[B]=Y[B].split(I).join(""):Me===-1&&(Y[B]+=" "+I)));S=Y.join(", "),D=le.join(", ")}return tt(x,this.p,S,D,this.clrs,this.dflt,L,this.pr,R,z)},a.parse=function(x,S,D,L,R,z,I){return this.parseComplex(x.style,this.format(W(x,this.p,r,!1,this.dflt)),this.format(S),R,z)},t.registerSpecialProp=function(x,S,D){ue(x,{parser:function(L,R,z,I,B,Y,le){var Q=new $e(L,z,0,0,B,2,z,!1,D);return Q.plugin=Y,Q.setRatio=S(L,R,I._tween,z),Q},priority:D})},t.useSVGTransformAttr=!0;var Ge="scaleX,scaleY,scaleZ,x,y,z,skewX,skewY,rotation,rotationX,rotationY,perspective,xPercent,yPercent".split(","),Be=E("transform"),ht=qe+"transform",Mt=E("transformOrigin"),Tt=E("perspective")!==null,dt=ie.Transform=function(){this.perspective=parseFloat(t.defaultTransformPerspective)||0,this.force3D=t.defaultForce3D===!1||!Tt?!1:t.defaultForce3D||"auto"},qt=Ct.SVGElement,kt,ds=function(x,S,D){var L=ce.createElementNS("http://www.w3.org/2000/svg",x),R=/([a-z])([A-Z])/g,z;for(z in D)L.setAttributeNS(null,z.replace(R,"$1-$2").toLowerCase(),D[z]);return S.appendChild(L),L},jn=ce.documentElement||{},$n=function(){var x=Pe||/Android/i.test(Ne)&&!Ct.chrome,S,D,L;return ce.createElementNS&&!x&&(S=ds("svg",jn),D=ds("rect",S,{width:100,height:50,x:100}),L=D.getBoundingClientRect().width,D.style[Mt]="50% 50%",D.style[Be]="scaleX(0.5)",x=L===D.getBoundingClientRect().width&&!(rt&&Tt),jn.removeChild(S)),x}(),Ki=function(x,S,D,L,R,z){var I=x._gsTransform,B=xi(x,!0),Y,le,Q,Me,fe,$,Ie,Ce,Ee,be,Ae,je,Ve,Ze;I&&(Ve=I.xOrigin,Ze=I.yOrigin),(!L||(Y=L.split(" ")).length<2)&&(Ie=x.getBBox(),Ie.x===0&&Ie.y===0&&Ie.width+Ie.height===0&&(Ie={x:parseFloat(x.hasAttribute("x")?x.getAttribute("x"):x.hasAttribute("cx")?x.getAttribute("cx"):0)||0,y:parseFloat(x.hasAttribute("y")?x.getAttribute("y"):x.hasAttribute("cy")?x.getAttribute("cy"):0)||0,width:0,height:0}),S=C(S).split(" "),Y=[(S[0].indexOf("%")!==-1?parseFloat(S[0])/100*Ie.width:parseFloat(S[0]))+Ie.x,(S[1].indexOf("%")!==-1?parseFloat(S[1])/100*Ie.height:parseFloat(S[1]))+Ie.y]),D.xOrigin=Me=parseFloat(Y[0]),D.yOrigin=fe=parseFloat(Y[1]),L&&B!==Ar&&($=B[0],Ie=B[1],Ce=B[2],Ee=B[3],be=B[4],Ae=B[5],je=$*Ee-Ie*Ce,je&&(le=Me*(Ee/je)+fe*(-Ce/je)+(Ce*Ae-Ee*be)/je,Q=Me*(-Ie/je)+fe*($/je)-($*Ae-Ie*be)/je,Me=D.xOrigin=Y[0]=le,fe=D.yOrigin=Y[1]=Q)),I&&(z&&(D.xOffset=I.xOffset,D.yOffset=I.yOffset,I=D),R||R!==!1&&t.defaultSmoothOrigin!==!1?(le=Me-Ve,Q=fe-Ze,I.xOffset+=le*B[0]+Q*B[2]-le,I.yOffset+=le*B[1]+Q*B[3]-Q):I.xOffset=I.yOffset=0),z||x.setAttribute("data-svg-origin",Y.join(" "))},ps=function(x){var S=se("svg",this.ownerSVGElement&&this.ownerSVGElement.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),D=this.parentNode,L=this.nextSibling,R=this.style.cssText,z;if(jn.appendChild(S),S.appendChild(this),this.style.display="block",x)try{z=this.getBBox(),this._originalGetBBox=this.getBBox,this.getBBox=ps}catch{}else this._originalGetBBox&&(z=this._originalGetBBox());return L?D.insertBefore(this,L):D.appendChild(this),jn.removeChild(S),this.style.cssText=R,z},ra=function(x){try{return x.getBBox()}catch{return ps.call(x,!0)}},vi=function(x){return!!(qt&&x.getCTM&&(!x.parentNode||x.ownerSVGElement)&&ra(x))},Ar=[1,0,0,1,0,0],xi=function(x,S){var D=x._gsTransform||new dt,L=1e5,R=x.style,z,I,B,Y,le,Q;if(Be?I=W(x,ht,null,!0):x.currentStyle&&(I=x.currentStyle.filter.match(N),I=I&&I.length===4?[I[0].substr(4),Number(I[2].substr(4)),Number(I[1].substr(4)),I[3].substr(4),D.x||0,D.y||0].join(","):""),z=!I||I==="none"||I==="matrix(1, 0, 0, 1, 0, 0)",Be&&((Q=!H(x)||H(x).display==="none")||!x.parentNode)&&(Q&&(Y=R.display,R.display="block"),x.parentNode||(le=1,jn.appendChild(x)),I=W(x,ht,null,!0),z=!I||I==="none"||I==="matrix(1, 0, 0, 1, 0, 0)",Y?R.display=Y:Q&&Zi(R,"display"),le&&jn.removeChild(x)),(D.svg||x.getCTM&&vi(x))&&(z&&(R[Be]+"").indexOf("matrix")!==-1&&(I=R[Be],z=0),B=x.getAttribute("transform"),z&&B&&(B=x.transform.baseVal.consolidate().matrix,I="matrix("+B.a+","+B.b+","+B.c+","+B.d+","+B.e+","+B.f+")",z=0)),z)return Ar;for(B=(I||"").match(l)||[],Z=B.length;--Z>-1;)Y=Number(B[Z]),B[Z]=(le=Y-(Y|=0))?(le*L+(le<0?-.5:.5)|0)/L+Y:Y;return S&&B.length>6?[B[0],B[1],B[4],B[5],B[12],B[13]]:B},yi=ie.getTransform=function(x,S,D,L){if(x._gsTransform&&D&&!L)return x._gsTransform;var R=D?x._gsTransform||new dt:new dt,z=R.scaleX<0,I=2e-5,B=1e5,Y=Tt&&(parseFloat(W(x,Mt,S,!1,"0 0 0").split(" ")[2])||R.zOrigin)||0,le=parseFloat(t.defaultTransformPerspective)||0,Q,Me,fe,$,Ie,Ce;if(R.svg=!!(x.getCTM&&vi(x)),R.svg&&(Ki(x,W(x,Mt,S,!1,"50% 50%")+"",R,x.getAttribute("data-svg-origin")),kt=t.useSVGTransformAttr||$n),Q=xi(x),Q!==Ar){if(Q.length===16){var Ee=Q[0],be=Q[1],Ae=Q[2],je=Q[3],Ve=Q[4],Ze=Q[5],et=Q[6],Je=Q[7],st=Q[8],ut=Q[9],nt=Q[10],Kn=Q[12],Zn=Q[13],Vt=Q[14],Yt=Q[11],Ke=Math.atan2(et,nt),At,Rt,Jn,pt,ft;R.zOrigin&&(Vt=-R.zOrigin,Kn=st*Vt-Q[12],Zn=ut*Vt-Q[13],Vt=nt*Vt+R.zOrigin-Q[14]),R.rotationX=Ke*P,Ke&&(pt=Math.cos(-Ke),ft=Math.sin(-Ke),At=Ve*pt+st*ft,Rt=Ze*pt+ut*ft,Jn=et*pt+nt*ft,st=Ve*-ft+st*pt,ut=Ze*-ft+ut*pt,nt=et*-ft+nt*pt,Yt=Je*-ft+Yt*pt,Ve=At,Ze=Rt,et=Jn),Ke=Math.atan2(-Ae,nt),R.rotationY=Ke*P,Ke&&(pt=Math.cos(-Ke),ft=Math.sin(-Ke),At=Ee*pt-st*ft,Rt=be*pt-ut*ft,Jn=Ae*pt-nt*ft,ut=be*ft+ut*pt,nt=Ae*ft+nt*pt,Yt=je*ft+Yt*pt,Ee=At,be=Rt,Ae=Jn),Ke=Math.atan2(be,Ee),R.rotation=Ke*P,Ke&&(pt=Math.cos(Ke),ft=Math.sin(Ke),At=Ee*pt+be*ft,Rt=Ve*pt+Ze*ft,Jn=st*pt+ut*ft,be=be*pt-Ee*ft,Ze=Ze*pt-Ve*ft,ut=ut*pt-st*ft,Ee=At,Ve=Rt,st=Jn),R.rotationX&&Math.abs(R.rotationX)+Math.abs(R.rotation)>359.9&&(R.rotationX=R.rotation=0,R.rotationY=180-R.rotationY),Ke=Math.atan2(Ve,Ze),R.scaleX=(Math.sqrt(Ee*Ee+be*be+Ae*Ae)*B+.5|0)/B,R.scaleY=(Math.sqrt(Ze*Ze+et*et)*B+.5|0)/B,R.scaleZ=(Math.sqrt(st*st+ut*ut+nt*nt)*B+.5|0)/B,Ee/=R.scaleX,Ve/=R.scaleY,be/=R.scaleX,Ze/=R.scaleY,Math.abs(Ke)>I?(R.skewX=Ke*P,Ve=0,R.skewType!=="simple"&&(R.scaleY*=1/Math.cos(Ke))):R.skewX=0,R.perspective=Yt?1/(Yt<0?-Yt:Yt):0,R.x=Kn,R.y=Zn,R.z=Vt,R.svg&&(R.x-=R.xOrigin-(R.xOrigin*Ee-R.yOrigin*Ve),R.y-=R.yOrigin-(R.yOrigin*be-R.xOrigin*Ze))}else if(!Tt||L||!Q.length||R.x!==Q[4]||R.y!==Q[5]||!R.rotationX&&!R.rotationY){var Ht=Q.length>=6,wn=Ht?Q[0]:1,tn=Q[1]||0,ms=Q[2]||0,_s=Ht?Q[3]:1;R.x=Q[4]||0,R.y=Q[5]||0,fe=Math.sqrt(wn*wn+tn*tn),$=Math.sqrt(_s*_s+ms*ms),Ie=wn||tn?Math.atan2(tn,wn)*P:R.rotation||0,Ce=ms||_s?Math.atan2(ms,_s)*P+Ie:R.skewX||0,R.scaleX=fe,R.scaleY=$,R.rotation=Ie,R.skewX=Ce,Tt&&(R.rotationX=R.rotationY=R.z=0,R.perspective=le,R.scaleZ=1),R.svg&&(R.x-=R.xOrigin-(R.xOrigin*wn+R.yOrigin*ms),R.y-=R.yOrigin-(R.xOrigin*tn+R.yOrigin*_s))}Math.abs(R.skewX)>90&&Math.abs(R.skewX)<270&&(z?(R.scaleX*=-1,R.skewX+=R.rotation<=0?180:-180,R.rotation+=R.rotation<=0?180:-180):(R.scaleY*=-1,R.skewX+=R.skewX<=0?180:-180)),R.zOrigin=Y;for(Me in R)R[Me]<I&&R[Me]>-I&&(R[Me]=0)}return D&&(x._gsTransform=R,R.svg&&(kt&&x.style[Be]?ot.delayedCall(.001,function(){Zi(x.style,Be)}):!kt&&x.getAttribute("transform")&&ot.delayedCall(.001,function(){x.removeAttribute("transform")}))),R},sa=function(x){var S=this.data,D=-S.rotation*b,L=D+S.skewX*b,R=1e5,z=(Math.cos(D)*S.scaleX*R|0)/R,I=(Math.sin(D)*S.scaleX*R|0)/R,B=(Math.sin(L)*-S.scaleY*R|0)/R,Y=(Math.cos(L)*S.scaleY*R|0)/R,le=this.t.style,Q=this.t.currentStyle,Me,fe;if(Q){fe=I,I=-B,B=-fe,Me=Q.filter,le.filter="";var $=this.t.offsetWidth,Ie=this.t.offsetHeight,Ce=Q.position!=="absolute",Ee="progid:DXImageTransform.Microsoft.Matrix(M11="+z+", M12="+I+", M21="+B+", M22="+Y,be=S.x+$*S.xPercent/100,Ae=S.y+Ie*S.yPercent/100,je,Ve;if(S.ox!=null&&(je=(S.oxp?$*S.ox*.01:S.ox)-$/2,Ve=(S.oyp?Ie*S.oy*.01:S.oy)-Ie/2,be+=je-(je*z+Ve*I),Ae+=Ve-(je*B+Ve*Y)),Ce?(je=$/2,Ve=Ie/2,Ee+=", Dx="+(je-(je*z+Ve*I)+be)+", Dy="+(Ve-(je*B+Ve*Y)+Ae)+")"):Ee+=", sizingMethod='auto expand')",Me.indexOf("DXImageTransform.Microsoft.Matrix(")!==-1?le.filter=Me.replace(k,Ee):le.filter=Ee+" "+Me,(x===0||x===1)&&z===1&&I===0&&B===0&&Y===1&&(!Ce||Ee.indexOf("Dx=0, Dy=0")!==-1)&&(!m.test(Me)||parseFloat(RegExp.$1)===100)&&Me.indexOf(Me.indexOf("Alpha"))===-1&&le.removeAttribute("filter"),!Ce){var Ze=Pe<8?1:-1,et,Je,st;for(je=S.ieOffsetX||0,Ve=S.ieOffsetY||0,S.ieOffsetX=Math.round(($-((z<0?-z:z)*$+(I<0?-I:I)*Ie))/2+be),S.ieOffsetY=Math.round((Ie-((Y<0?-Y:Y)*Ie+(B<0?-B:B)*$))/2+Ae),Z=0;Z<4;Z++)Je=v[Z],et=Q[Je],fe=et.indexOf("px")!==-1?parseFloat(et):pe(this.t,Je,parseFloat(et),et.replace(c,""))||0,fe!==S[Je]?st=Z<2?-S.ieOffsetX:-S.ieOffsetY:st=Z<2?je-S.ieOffsetX:Ve-S.ieOffsetY,le[Je]=(S[Je]=Math.round(fe-st*(Z===0||Z===2?1:Ze)))+"px"}}},bo=ie.set3DTransformRatio=ie.setTransformRatio=function(x){var S=this.data,D=this.t.style,L=S.rotation,R=S.rotationX,z=S.rotationY,I=S.scaleX,B=S.scaleY,Y=S.scaleZ,le=S.x,Q=S.y,Me=S.z,fe=S.svg,$=S.perspective,Ie=S.force3D,Ce=S.skewY,Ee=S.skewX,be,Ae,je,Ve,Ze,et,Je,st,ut,nt,Kn,Zn,Vt,Yt,Ke,At,Rt,Jn,pt,ft,Ht,wn,tn;if(Ce&&(Ee+=Ce,L+=Ce),((x===1||x===0)&&Ie==="auto"&&(this.tween._totalTime===this.tween._totalDuration||!this.tween._totalTime)||!Ie)&&!Me&&!$&&!z&&!R&&Y===1||kt&&fe||!Tt){L||Ee||fe?(L*=b,wn=Ee*b,tn=1e5,Ae=Math.cos(L)*I,Ze=Math.sin(L)*I,je=Math.sin(L-wn)*-B,et=Math.cos(L-wn)*B,wn&&S.skewType==="simple"&&(be=Math.tan(wn-Ce*b),be=Math.sqrt(1+be*be),je*=be,et*=be,Ce&&(be=Math.tan(Ce*b),be=Math.sqrt(1+be*be),Ae*=be,Ze*=be)),fe&&(le+=S.xOrigin-(S.xOrigin*Ae+S.yOrigin*je)+S.xOffset,Q+=S.yOrigin-(S.xOrigin*Ze+S.yOrigin*et)+S.yOffset,kt&&(S.xPercent||S.yPercent)&&(Ke=this.t.getBBox(),le+=S.xPercent*.01*Ke.width,Q+=S.yPercent*.01*Ke.height),Ke=1e-6,le<Ke&&le>-Ke&&(le=0),Q<Ke&&Q>-Ke&&(Q=0)),pt=(Ae*tn|0)/tn+","+(Ze*tn|0)/tn+","+(je*tn|0)/tn+","+(et*tn|0)/tn+","+le+","+Q+")",fe&&kt?this.t.setAttribute("transform","matrix("+pt):D[Be]=(S.xPercent||S.yPercent?"translate("+S.xPercent+"%,"+S.yPercent+"%) matrix(":"matrix(")+pt):D[Be]=(S.xPercent||S.yPercent?"translate("+S.xPercent+"%,"+S.yPercent+"%) matrix(":"matrix(")+I+",0,0,"+B+","+le+","+Q+")";return}if(rt&&(Ke=1e-4,I<Ke&&I>-Ke&&(I=Y=2e-5),B<Ke&&B>-Ke&&(B=Y=2e-5),$&&!S.z&&!S.rotationX&&!S.rotationY&&($=0)),L||Ee)L*=b,At=Ae=Math.cos(L),Rt=Ze=Math.sin(L),Ee&&(L-=Ee*b,At=Math.cos(L),Rt=Math.sin(L),S.skewType==="simple"&&(be=Math.tan((Ee-Ce)*b),be=Math.sqrt(1+be*be),At*=be,Rt*=be,S.skewY&&(be=Math.tan(Ce*b),be=Math.sqrt(1+be*be),Ae*=be,Ze*=be))),je=-Rt,et=At;else if(!z&&!R&&Y===1&&!$&&!fe){D[Be]=(S.xPercent||S.yPercent?"translate("+S.xPercent+"%,"+S.yPercent+"%) translate3d(":"translate3d(")+le+"px,"+Q+"px,"+Me+"px)"+(I!==1||B!==1?" scale("+I+","+B+")":"");return}else Ae=et=1,je=Ze=0;nt=1,Ve=Je=st=ut=Kn=Zn=0,Vt=$?-1/$:0,Yt=S.zOrigin,Ke=1e-6,ft=",",Ht="0",L=z*b,L&&(At=Math.cos(L),Rt=Math.sin(L),st=-Rt,Kn=Vt*-Rt,Ve=Ae*Rt,Je=Ze*Rt,nt=At,Vt*=At,Ae*=At,Ze*=At),L=R*b,L&&(At=Math.cos(L),Rt=Math.sin(L),be=je*At+Ve*Rt,Jn=et*At+Je*Rt,ut=nt*Rt,Zn=Vt*Rt,Ve=je*-Rt+Ve*At,Je=et*-Rt+Je*At,nt=nt*At,Vt=Vt*At,je=be,et=Jn),Y!==1&&(Ve*=Y,Je*=Y,nt*=Y,Vt*=Y),B!==1&&(je*=B,et*=B,ut*=B,Zn*=B),I!==1&&(Ae*=I,Ze*=I,st*=I,Kn*=I),(Yt||fe)&&(Yt&&(le+=Ve*-Yt,Q+=Je*-Yt,Me+=nt*-Yt+Yt),fe&&(le+=S.xOrigin-(S.xOrigin*Ae+S.yOrigin*je)+S.xOffset,Q+=S.yOrigin-(S.xOrigin*Ze+S.yOrigin*et)+S.yOffset),le<Ke&&le>-Ke&&(le=Ht),Q<Ke&&Q>-Ke&&(Q=Ht),Me<Ke&&Me>-Ke&&(Me=0)),pt=S.xPercent||S.yPercent?"translate("+S.xPercent+"%,"+S.yPercent+"%) matrix3d(":"matrix3d(",pt+=(Ae<Ke&&Ae>-Ke?Ht:Ae)+ft+(Ze<Ke&&Ze>-Ke?Ht:Ze)+ft+(st<Ke&&st>-Ke?Ht:st),pt+=ft+(Kn<Ke&&Kn>-Ke?Ht:Kn)+ft+(je<Ke&&je>-Ke?Ht:je)+ft+(et<Ke&&et>-Ke?Ht:et),R||z||Y!==1?(pt+=ft+(ut<Ke&&ut>-Ke?Ht:ut)+ft+(Zn<Ke&&Zn>-Ke?Ht:Zn)+ft+(Ve<Ke&&Ve>-Ke?Ht:Ve),pt+=ft+(Je<Ke&&Je>-Ke?Ht:Je)+ft+(nt<Ke&&nt>-Ke?Ht:nt)+ft+(Vt<Ke&&Vt>-Ke?Ht:Vt)+ft):pt+=",0,0,0,0,1,0,",pt+=le+ft+Q+ft+Me+ft+($?1+-Me/$:1)+")",D[Be]=pt};a=dt.prototype,a.x=a.y=a.z=a.skewX=a.skewY=a.rotation=a.rotationX=a.rotationY=a.zOrigin=a.xPercent=a.yPercent=a.xOffset=a.yOffset=0,a.scaleX=a.scaleY=a.scaleZ=1,ue("transform,scale,scaleX,scaleY,scaleZ,x,y,z,rotation,rotationX,rotationY,rotationZ,skewX,skewY,shortRotation,shortRotationX,shortRotationY,shortRotationZ,transformOrigin,svgOrigin,transformPerspective,directionalRotation,parseTransform,force3D,skewType,xPercent,yPercent,smoothOrigin",{parser:function(x,S,D,L,R,z,I){if(L._lastParsedTransform===I)return R;L._lastParsedTransform=I;var B=I.scale&&typeof I.scale=="function"?I.scale:0,Y;typeof I[D]=="function"&&(Y=I[D],I[D]=S),B&&(I.scale=B(De,x));var le=x._gsTransform,Q=x.style,Me=1e-6,fe=Ge.length,$=I,Ie={},Ce="transformOrigin",Ee=yi(x,r,!0,$.parseTransform),be=$.transform&&(typeof $.transform=="function"?$.transform(De,xe):$.transform),Ae,je,Ve,Ze,et,Je,st,ut,nt;if(Ee.skewType=$.skewType||Ee.skewType||t.defaultSkewType,L._transform=Ee,"rotationZ"in $&&($.rotation=$.rotationZ),be&&typeof be=="string"&&Be)je=ae.style,je[Be]=be,je.display="block",je.position="absolute",be.indexOf("%")!==-1&&(je.width=W(x,"width"),je.height=W(x,"height")),ce.body.appendChild(ae),Ae=yi(ae,null,!1),Ee.skewType==="simple"&&(Ae.scaleY*=Math.cos(Ae.skewX*b)),Ee.svg&&(Je=Ee.xOrigin,st=Ee.yOrigin,Ae.x-=Ee.xOffset,Ae.y-=Ee.yOffset,($.transformOrigin||$.svgOrigin)&&(be={},Ki(x,C($.transformOrigin),be,$.svgOrigin,$.smoothOrigin,!0),Je=be.xOrigin,st=be.yOrigin,Ae.x-=be.xOffset-Ee.xOffset,Ae.y-=be.yOffset-Ee.yOffset),(Je||st)&&(ut=xi(ae,!0),Ae.x-=Je-(Je*ut[0]+st*ut[2]),Ae.y-=st-(Je*ut[1]+st*ut[3]))),ce.body.removeChild(ae),Ae.perspective||(Ae.perspective=Ee.perspective),$.xPercent!=null&&(Ae.xPercent=F($.xPercent,Ee.xPercent)),$.yPercent!=null&&(Ae.yPercent=F($.yPercent,Ee.yPercent));else if(typeof $=="object"){if(Ae={scaleX:F($.scaleX!=null?$.scaleX:$.scale,Ee.scaleX),scaleY:F($.scaleY!=null?$.scaleY:$.scale,Ee.scaleY),scaleZ:F($.scaleZ,Ee.scaleZ),x:F($.x,Ee.x),y:F($.y,Ee.y),z:F($.z,Ee.z),xPercent:F($.xPercent,Ee.xPercent),yPercent:F($.yPercent,Ee.yPercent),perspective:F($.transformPerspective,Ee.perspective)},et=$.directionalRotation,et!=null)if(typeof et=="object")for(je in et)$[je]=et[je];else $.rotation=et;typeof $.x=="string"&&$.x.indexOf("%")!==-1&&(Ae.x=0,Ae.xPercent=F($.x,Ee.xPercent)),typeof $.y=="string"&&$.y.indexOf("%")!==-1&&(Ae.y=0,Ae.yPercent=F($.y,Ee.yPercent)),Ae.rotation=K("rotation"in $?$.rotation:"shortRotation"in $?$.shortRotation+"_short":Ee.rotation,Ee.rotation,"rotation",Ie),Tt&&(Ae.rotationX=K("rotationX"in $?$.rotationX:"shortRotationX"in $?$.shortRotationX+"_short":Ee.rotationX||0,Ee.rotationX,"rotationX",Ie),Ae.rotationY=K("rotationY"in $?$.rotationY:"shortRotationY"in $?$.shortRotationY+"_short":Ee.rotationY||0,Ee.rotationY,"rotationY",Ie)),Ae.skewX=K($.skewX,Ee.skewX),Ae.skewY=K($.skewY,Ee.skewY)}for(Tt&&$.force3D!=null&&(Ee.force3D=$.force3D,Ze=!0),Ve=Ee.force3D||Ee.z||Ee.rotationX||Ee.rotationY||Ae.z||Ae.rotationX||Ae.rotationY||Ae.perspective,!Ve&&$.scale!=null&&(Ae.scaleZ=1);--fe>-1;)nt=Ge[fe],be=Ae[nt]-Ee[nt],(be>Me||be<-Me||$[nt]!=null||V[nt]!=null)&&(Ze=!0,R=new $e(Ee,nt,Ee[nt],be,R),nt in Ie&&(R.e=Ie[nt]),R.xs0=0,R.plugin=z,L._overwriteProps.push(R.n));return be=$.transformOrigin,Ee.svg&&(be||$.svgOrigin)&&(Je=Ee.xOffset,st=Ee.yOffset,Ki(x,C(be),Ae,$.svgOrigin,$.smoothOrigin),R=Ye(Ee,"xOrigin",(le?Ee:Ae).xOrigin,Ae.xOrigin,R,Ce),R=Ye(Ee,"yOrigin",(le?Ee:Ae).yOrigin,Ae.yOrigin,R,Ce),(Je!==Ee.xOffset||st!==Ee.yOffset)&&(R=Ye(Ee,"xOffset",le?Je:Ee.xOffset,Ee.xOffset,R,Ce),R=Ye(Ee,"yOffset",le?st:Ee.yOffset,Ee.yOffset,R,Ce)),be="0px 0px"),(be||Tt&&Ve&&Ee.zOrigin)&&(Be?(Ze=!0,nt=Mt,be=(be||W(x,nt,r,!1,"50% 50%"))+"",R=new $e(Q,nt,0,0,R,-1,Ce),R.b=Q[nt],R.plugin=z,Tt?(je=Ee.zOrigin,be=be.split(" "),Ee.zOrigin=(be.length>2&&!(je!==0&&be[2]==="0px")?parseFloat(be[2]):je)||0,R.xs0=R.e=be[0]+" "+(be[1]||"50%")+" 0px",R=new $e(Ee,"zOrigin",0,0,R,-1,R.n),R.b=je,R.xs0=R.e=Ee.zOrigin):R.xs0=R.e=be):C(be+"",Ee)),Ze&&(L._transformType=!(Ee.svg&&kt)&&(Ve||this._transformType===3)?3:2),Y&&(I[D]=Y),B&&(I.scale=B),R},prefix:!0}),ue("boxShadow",{defaultValue:"0px 0px 0px 0px #999",prefix:!0,color:!0,multi:!0,keyword:"inset"}),ue("borderRadius",{defaultValue:"0px",parser:function(x,S,D,L,R,z){S=this.format(S);var I=["borderTopLeftRadius","borderTopRightRadius","borderBottomRightRadius","borderBottomLeftRadius"],B=x.style,Y,le,Q,Me,fe,$,Ie,Ce,Ee,be,Ae,je,Ve,Ze,et,Je;for(Ee=parseFloat(x.offsetWidth),be=parseFloat(x.offsetHeight),Y=S.split(" "),le=0;le<I.length;le++)this.p.indexOf("border")&&(I[le]=E(I[le])),fe=Me=W(x,I[le],r,!1,"0px"),fe.indexOf(" ")!==-1&&(Me=fe.split(" "),fe=Me[0],Me=Me[1]),$=Q=Y[le],Ie=parseFloat(fe),je=fe.substr((Ie+"").length),Ve=$.charAt(1)==="=",Ve?(Ce=parseInt($.charAt(0)+"1",10),$=$.substr(2),Ce*=parseFloat($),Ae=$.substr((Ce+"").length-(Ce<0?1:0))||""):(Ce=parseFloat($),Ae=$.substr((Ce+"").length)),Ae===""&&(Ae=i[D]||je),Ae!==je&&(Ze=pe(x,"borderLeft",Ie,je),et=pe(x,"borderTop",Ie,je),Ae==="%"?(fe=Ze/Ee*100+"%",Me=et/be*100+"%"):Ae==="em"?(Je=pe(x,"borderLeft",1,"em"),fe=Ze/Je+"em",Me=et/Je+"em"):(fe=Ze+"px",Me=et+"px"),Ve&&($=parseFloat(fe)+Ce+Ae,Q=parseFloat(Me)+Ce+Ae)),R=tt(B,I[le],fe+" "+Me,$+" "+Q,!1,"0px",R);return R},prefix:!0,formatter:Fe("0px 0px 0px 0px",!1,!0)}),ue("borderBottomLeftRadius,borderBottomRightRadius,borderTopLeftRadius,borderTopRightRadius",{defaultValue:"0px",parser:function(x,S,D,L,R,z){return tt(x.style,D,this.format(W(x,D,r,!1,"0px 0px")),this.format(S),!1,"0px",R)},prefix:!0,formatter:Fe("0px 0px",!1,!0)}),ue("backgroundPosition",{defaultValue:"0 0",parser:function(x,S,D,L,R,z){var I="background-position",B=r||H(x,null),Y=this.format((B?Pe?B.getPropertyValue(I+"-x")+" "+B.getPropertyValue(I+"-y"):B.getPropertyValue(I):x.currentStyle.backgroundPositionX+" "+x.currentStyle.backgroundPositionY)||"0 0"),le=this.format(S),Q,Me,fe,$,Ie,Ce;if(Y.indexOf("%")!==-1!=(le.indexOf("%")!==-1)&&le.split(",").length<2&&(Ce=W(x,"backgroundImage").replace(T,""),Ce&&Ce!=="none")){for(Q=Y.split(" "),Me=le.split(" "),_e.setAttribute("src",Ce),fe=2;--fe>-1;)Y=Q[fe],$=Y.indexOf("%")!==-1,$!==(Me[fe].indexOf("%")!==-1)&&(Ie=fe===0?x.offsetWidth-_e.width:x.offsetHeight-_e.height,Q[fe]=$?parseFloat(Y)/100*Ie+"px":parseFloat(Y)/Ie*100+"%");Y=Q.join(" ")}return this.parseComplex(x.style,Y,le,R,z)},formatter:C}),ue("backgroundSize",{defaultValue:"0 0",formatter:function(x){return x+="",x.substr(0,2)==="co"?x:C(x.indexOf(" ")===-1?x+" "+x:x)}}),ue("perspective",{defaultValue:"0px",prefix:!0}),ue("perspectiveOrigin",{defaultValue:"50% 50%",prefix:!0}),ue("transformStyle",{prefix:!0}),ue("backfaceVisibility",{prefix:!0}),ue("userSelect",{prefix:!0}),ue("margin",{parser:Le("marginTop,marginRight,marginBottom,marginLeft")}),ue("padding",{parser:Le("paddingTop,paddingRight,paddingBottom,paddingLeft")}),ue("clip",{defaultValue:"rect(0px,0px,0px,0px)",parser:function(x,S,D,L,R,z){var I,B,Y;return Pe<9?(B=x.currentStyle,Y=Pe<8?" ":",",I="rect("+B.clipTop+Y+B.clipRight+Y+B.clipBottom+Y+B.clipLeft+")",S=this.format(S).split(",").join(Y)):(I=this.format(W(x,this.p,r,!1,this.dflt)),S=this.format(S)),this.parseComplex(x.style,I,S,R,z)}}),ue("textShadow",{defaultValue:"0px 0px 0px #999",color:!0,multi:!0}),ue("autoRound,strictUnits",{parser:function(x,S,D,L,R){return R}}),ue("border",{defaultValue:"0px solid #000",parser:function(x,S,D,L,R,z){var I=W(x,"borderTopWidth",r,!1,"0px"),B=this.format(S).split(" "),Y=B[0].replace(c,"");return Y!=="px"&&(I=parseFloat(I)/pe(x,"borderTopWidth",1,Y)+Y),this.parseComplex(x.style,this.format(I+" "+W(x,"borderTopStyle",r,!1,"solid")+" "+W(x,"borderTopColor",r,!1,"#000")),B.join(" "),R,z)},color:!0,formatter:function(x){var S=x.split(" ");return S[0]+" "+(S[1]||"solid")+" "+(x.match(ge)||["#000"])[0]}}),ue("borderWidth",{parser:Le("borderTopWidth,borderRightWidth,borderBottomWidth,borderLeftWidth")}),ue("float,cssFloat,styleFloat",{parser:function(x,S,D,L,R,z){var I=x.style,B="cssFloat"in I?"cssFloat":"styleFloat";return new $e(I,B,0,0,R,-1,D,!1,0,I[B],S)}});var wo=function(x){var S=this.t,D=S.filter||W(this.data,"filter")||"",L=this.s+this.c*x|0,R;L===100&&(D.indexOf("atrix(")===-1&&D.indexOf("radient(")===-1&&D.indexOf("oader(")===-1?(S.removeAttribute("filter"),R=!W(this.data,"filter")):(S.filter=D.replace(y,""),R=!0)),R||(this.xn1&&(S.filter=D=D||"alpha(opacity="+L+")"),D.indexOf("pacity")===-1?(L!==0||!this.xn1)&&(S.filter=D+" alpha(opacity="+L+")"):S.filter=D.replace(m,"opacity="+L))};ue("opacity,alpha,autoAlpha",{defaultValue:"1",parser:function(x,S,D,L,R,z){var I=parseFloat(W(x,"opacity",r,!1,"1")),B=x.style,Y=D==="autoAlpha";return typeof S=="string"&&S.charAt(1)==="="&&(S=(S.charAt(0)==="-"?-1:1)*parseFloat(S.substr(2))+I),Y&&I===1&&W(x,"visibility",r)==="hidden"&&S!==0&&(I=0),Oe?R=new $e(B,"opacity",I,S-I,R):(R=new $e(B,"opacity",I*100,(S-I)*100,R),R.xn1=Y?1:0,B.zoom=1,R.type=2,R.b="alpha(opacity="+R.s+")",R.e="alpha(opacity="+(R.s+R.c)+")",R.data=x,R.plugin=z,R.setRatio=wo),Y&&(R=new $e(B,"visibility",0,0,R,-1,null,!1,0,I!==0?"inherit":"hidden",S===0?"hidden":"inherit"),R.xs0="inherit",L._overwriteProps.push(R.n),L._overwriteProps.push(D)),R}});var Zi=function(x,S){S&&(x.removeProperty?((S.substr(0,2)==="ms"||S.substr(0,6)==="webkit")&&(S="-"+S),x.removeProperty(S.replace(u,"-$1").toLowerCase())):x.removeAttribute(S))},O=function(x){if(this.t._gsClassPT=this,x===1||x===0){this.t.setAttribute("class",x===0?this.b:this.e);for(var S=this.data,D=this.t.style;S;)S.v?D[S.p]=S.v:Zi(D,S.p),S=S._next;x===1&&this.t._gsClassPT===this&&(this.t._gsClassPT=null)}else this.t.getAttribute("class")!==this.e&&this.t.setAttribute("class",this.e)};ue("className",{parser:function(x,S,D,L,R,z,I){var B=x.getAttribute("class")||"",Y=x.style.cssText,le,Q,Me,fe,$;if(R=L._classNamePT=new $e(x,D,0,0,R,2),R.setRatio=O,R.pr=-11,n=!0,R.b=B,Q=ye(x,r),Me=x._gsClassPT,Me){for(fe={},$=Me.data;$;)fe[$.p]=1,$=$._next;Me.setRatio(1)}return x._gsClassPT=R,R.e=S.charAt(1)!=="="?S:B.replace(new RegExp("(?:\\s|^)"+S.substr(2)+"(?![\\w-])"),"")+(S.charAt(0)==="+"?" "+S.substr(2):""),x.setAttribute("class",R.e),le=ve(x,Q,ye(x),I,fe),x.setAttribute("class",B),R.data=le.firstMPT,x.style.cssText=Y,R=R.xfirst=L.parse(x,le.difs,R,z),R}});var ne=function(x){if((x===1||x===0)&&this.data._totalTime===this.data._totalDuration&&this.data.data!=="isFromStart"){var S=this.t.style,D=o.transform.parse,L,R,z,I,B;if(this.e==="all")S.cssText="",I=!0;else for(L=this.e.split(" ").join("").split(","),z=L.length;--z>-1;)R=L[z],o[R]&&(o[R].parse===D?I=!0:R=R==="transformOrigin"?Mt:o[R].p),Zi(S,R);I&&(Zi(S,Be),B=this.t._gsTransform,B&&(B.svg&&(this.t.removeAttribute("data-svg-origin"),this.t.removeAttribute("transform")),delete this.t._gsTransform))}};for(ue("clearProps",{parser:function(x,S,D,L,R){return R=new $e(x,D,0,0,R,2),R.setRatio=ne,R.e=S,R.pr=-10,R.data=L._tween,n=!0,R}}),a="bezier,throwProps,physicsProps,physics2D".split(","),Z=a.length;Z--;)Re(a[Z]);a=t.prototype,a._firstPT=a._lastParsedTransform=a._transform=null,a._onInitTween=function(x,S,D,L){if(!x.nodeType)return!1;this._target=xe=x,this._tween=D,this._vars=S,De=L,ze=S.autoRound,n=!1,i=S.suffixMap||t.suffixMap,r=H(x,""),s=this._overwriteProps;var R=x.style,z,I,B,Y,le,Q,Me,fe,$;if(He&&R.zIndex===""&&(z=W(x,"zIndex",r),(z==="auto"||z==="")&&this._addLazySet(R,"zIndex",0)),typeof S=="string"&&(Y=R.cssText,z=ye(x,r),R.cssText=Y+";"+S,z=ve(x,z,ye(x)).difs,!Oe&&p.test(S)&&(z.opacity=parseFloat(RegExp.$1)),S=z,R.cssText=Y),S.className?this._firstPT=I=o.className.parse(x,S.className,"className",this,null,null,S):this._firstPT=I=this.parse(x,S,null),this._transformType){for($=this._transformType===3,Be?Qe&&(He=!0,R.zIndex===""&&(Me=W(x,"zIndex",r),(Me==="auto"||Me==="")&&this._addLazySet(R,"zIndex",0)),Se&&this._addLazySet(R,"WebkitBackfaceVisibility",this._vars.WebkitBackfaceVisibility||($?"visible":"hidden"))):R.zoom=1,B=I;B&&B._next;)B=B._next;fe=new $e(x,"transform",0,0,null,2),this._linkCSSP(fe,null,B),fe.setRatio=Be?bo:sa,fe.data=this._transform||yi(x,r,!0),fe.tween=D,fe.pr=-1,s.pop()}if(n){for(;I;){for(Q=I._next,B=Y;B&&B.pr>I.pr;)B=B._next;(I._prev=B?B._prev:le)?I._prev._next=I:Y=I,(I._next=B)?B._prev=I:le=I,I=Q}this._firstPT=Y}return!0},a.parse=function(x,S,D,L){var R=x.style,z,I,B,Y,le,Q,Me,fe,$,Ie;for(z in S){if(Q=S[z],typeof Q=="function"&&(Q=Q(De,xe)),I=o[z],I)D=I.parse(x,Q,z,this,D,L,S);else if(z.substr(0,2)==="--"){this._tween._propLookup[z]=this._addTween.call(this._tween,x.style,"setProperty",H(x).getPropertyValue(z)+"",Q+"",z,!1,z);continue}else le=W(x,z,r)+"",$=typeof Q=="string",z==="color"||z==="fill"||z==="stroke"||z.indexOf("Color")!==-1||$&&g.test(Q)?($||(Q=Te(Q),Q=(Q.length>3?"rgba(":"rgb(")+Q.join(",")+")"),D=tt(R,z,le,Q,!0,"transparent",D,0,L)):$&&J.test(Q)?D=tt(R,z,le,Q,!0,null,D,0,L):(B=parseFloat(le),Me=B||B===0?le.substr((B+"").length):"",(le===""||le==="auto")&&(z==="width"||z==="height"?(B=M(x,z,r),Me="px"):z==="left"||z==="top"?(B=oe(x,z,r),Me="px"):(B=z!=="opacity"?0:1,Me="")),Ie=$&&Q.charAt(1)==="=",Ie?(Y=parseInt(Q.charAt(0)+"1",10),Q=Q.substr(2),Y*=parseFloat(Q),fe=Q.replace(c,"")):(Y=parseFloat(Q),fe=$?Q.replace(c,""):""),fe===""&&(fe=z in i?i[z]:Me),Q=Y||Y===0?(Ie?Y+B:Y)+fe:S[z],Me!==fe&&(fe!==""||z==="lineHeight")&&(Y||Y===0)&&B&&(B=pe(x,z,B,Me),fe==="%"?(B/=pe(x,z,100,"%")/100,S.strictUnits!==!0&&(le=B+"%")):fe==="em"||fe==="rem"||fe==="vw"||fe==="vh"?B/=pe(x,z,1,fe):fe!=="px"&&(Y=pe(x,z,Y,fe),fe="px"),Ie&&(Y||Y===0)&&(Q=Y+B+fe)),Ie&&(Y+=B),(B||B===0)&&(Y||Y===0)?(D=new $e(R,z,B,Y-B,D,0,z,ze!==!1&&(fe==="px"||z==="zIndex"),0,le,Q),D.xs0=fe):R[z]===void 0||!Q&&(Q+""=="NaN"||Q==null)?we("invalid "+z+" tween value: "+S[z]):(D=new $e(R,z,Y||B||0,0,D,-1,z,!1,0,le,Q),D.xs0=Q==="none"&&(z==="display"||z.indexOf("Style")!==-1)?le:Q));L&&D&&!D.plugin&&(D.plugin=L)}return D},a.setRatio=function(x){var S=this._firstPT,D=1e-6,L,R,z;if(x===1&&(this._tween._time===this._tween._duration||this._tween._time===0))for(;S;){if(S.type!==2)if(S.r&&S.type!==-1){if(L=S.r(S.s+S.c),!S.type)S.t[S.p]=L+S.xs0;else if(S.type===1){for(z=S.l,R=S.xs0+L+S.xs1,z=1;z<S.l;z++)R+=S["xn"+z]+S["xs"+(z+1)];S.t[S.p]=R}}else S.t[S.p]=S.e;else S.setRatio(x);S=S._next}else if(x||!(this._tween._time===this._tween._duration||this._tween._time===0)||this._tween._rawPrevTime===-1e-6)for(;S;){if(L=S.c*x+S.s,S.r?L=S.r(L):L<D&&L>-D&&(L=0),!S.type)S.t[S.p]=L+S.xs0;else if(S.type===1)if(z=S.l,z===2)S.t[S.p]=S.xs0+L+S.xs1+S.xn1+S.xs2;else if(z===3)S.t[S.p]=S.xs0+L+S.xs1+S.xn1+S.xs2+S.xn2+S.xs3;else if(z===4)S.t[S.p]=S.xs0+L+S.xs1+S.xn1+S.xs2+S.xn2+S.xs3+S.xn3+S.xs4;else if(z===5)S.t[S.p]=S.xs0+L+S.xs1+S.xn1+S.xs2+S.xn2+S.xs3+S.xn3+S.xs4+S.xn4+S.xs5;else{for(R=S.xs0+L+S.xs1,z=1;z<S.l;z++)R+=S["xn"+z]+S["xs"+(z+1)];S.t[S.p]=R}else S.type===-1?S.t[S.p]=S.xs0:S.setRatio&&S.setRatio(x);S=S._next}else for(;S;)S.type!==2?S.t[S.p]=S.b:S.setRatio(x),S=S._next},a._enableTransforms=function(x){this._transform=this._transform||yi(this._target,r,!0),this._transformType=!(this._transform.svg&&kt)&&(x||this._transformType===3)?3:2};var he=function(x){this.t[this.p]=this.e,this.data._linkCSSP(this,this._next,null,!0)};a._addLazySet=function(x,S,D){var L=this._firstPT=new $e(x,S,0,0,this._firstPT,2);L.e=D,L.setRatio=he,L.data=this},a._linkCSSP=function(x,S,D,L){return x&&(S&&(S._prev=x),x._next&&(x._next._prev=x._prev),x._prev?x._prev._next=x._next:this._firstPT===x&&(this._firstPT=x._next,L=!0),D?D._next=x:!L&&this._firstPT===null&&(this._firstPT=x),x._next=S,x._prev=D),x},a._mod=function(x){for(var S=this._firstPT;S;)typeof x[S.p]=="function"&&(S.r=x[S.p]),S=S._next},a._kill=function(x){var S=x,D,L,R;if(x.autoAlpha||x.alpha){S={};for(L in x)S[L]=x[L];S.opacity=1,S.autoAlpha&&(S.visibility=1)}for(x.className&&(D=this._classNamePT)&&(R=D.xfirst,R&&R._prev?this._linkCSSP(R._prev,D._next,R._prev._prev):R===this._firstPT&&(this._firstPT=D._next),D._next&&this._linkCSSP(D._next,D._next._next,R._prev),this._classNamePT=null),D=this._firstPT;D;)D.plugin&&D.plugin!==L&&D.plugin._kill&&(D.plugin._kill(x),L=D.plugin),D=D._next;return La.prototype._kill.call(this,S)};var de=function(x,S,D){var L,R,z,I;if(x.slice){for(R=x.length;--R>-1;)de(x[R],S,D);return}for(L=x.childNodes,R=L.length;--R>-1;)z=L[R],I=z.type,z.style&&(S.push(ye(z)),D&&D.push(z)),(I===1||I===9||I===11)&&z.childNodes.length&&de(z,S,D)};return t.cascadeTo=function(x,S,D){var L=ot.to(x,S,D),R=[L],z=[],I=[],B=[],Y=ot._internals.reservedProps,le,Q,Me,fe;for(x=L._targets||L.target,de(x,z,B),L.render(S,!0,!0),de(x,I),L.render(0,!0,!0),L._enabled(!0),le=B.length;--le>-1;)if(Q=ve(B[le],z[le],I[le]),Q.firstMPT){Q=Q.difs;for(Me in D)Y[Me]&&(Q[Me]=D[Me]);fe={};for(Me in Q)fe[Me]=z[le][Me];R.push(ot.fromTo(B[le],S,fe,Q))}return R},La.activate([t]),t},!0);var XM=Lt.CSSPlugin;/*!
 * VERSION: 0.6.1
 * DATE: 2018-08-27
 * UPDATES AND DOCS AT: http://greensock.com
 *
 * @license Copyright (c) 2008-2018, GreenSock. All rights reserved.
 * This work is subject to the terms at http://greensock.com/standard-license or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 * 
 * @author: Jack Doyle, jack@greensock.com
 */var qM=Ct._gsDefine.plugin({propName:"attr",API:2,version:"0.6.1",init:function(t,e,n,i){var r,s;if(typeof t.setAttribute!="function")return!1;for(r in e)s=e[r],typeof s=="function"&&(s=s(i,t)),this._addTween(t,"setAttribute",t.getAttribute(r)+"",s+"",r,!1,r),this._overwriteProps.push(r);return!0}});/*!
 * VERSION: 1.6.0
 * DATE: 2018-08-27
 * UPDATES AND DOCS AT: http://greensock.com
 *
 * @license Copyright (c) 2008-2018, GreenSock. All rights reserved.
 * This work is subject to the terms at http://greensock.com/standard-license or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 * 
 * @author: Jack Doyle, jack@greensock.com
 **/var up=Ct._gsDefine.plugin({propName:"roundProps",version:"1.7.0",priority:-1,API:2,init:function(t,e,n){return this._tween=n,!0}}),YM=function(t){var e=t<1?Math.pow(10,(t+"").length-2):1;return function(n){return(Math.round(n/t)*t*e|0)/e}},jM=function(t,e){for(;t;)!t.f&&!t.blob&&(t.m=e||Math.round),t=t._next},hp=up.prototype;hp._onInitAllProps=function(){var t=this._tween,e=t.vars.roundProps,n={},i=t._propLookup.roundProps,r,s,o,a;if(typeof e=="object"&&!e.push)for(a in e)n[a]=YM(e[a]);else for(typeof e=="string"&&(e=e.split(",")),o=e.length;--o>-1;)n[e[o]]=Math.round;for(a in n)for(r=t._firstPT;r;)s=r._next,r.pg?r.t._mod(n):r.n===a&&(r.f===2&&r.t?jM(r.t._firstPT,n[a]):(this._add(r.t,a,r.s,r.c,n[a]),s&&(s._prev=r._prev),r._prev?r._prev._next=s:t._firstPT===r&&(t._firstPT=s),r._next=r._prev=null,t._propLookup[a]=i)),r=s;return!1};hp._add=function(t,e,n,i,r){this._addTween(t,e,n,n+i,e,r||Math.round),this._overwriteProps.push(e)};/*!
 * VERSION: 0.3.1
 * DATE: 2018-08-27
 * UPDATES AND DOCS AT: http://greensock.com
 *
 * @license Copyright (c) 2008-2018, GreenSock. All rights reserved.
 * This work is subject to the terms at http://greensock.com/standard-license or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 * 
 * @author: Jack Doyle, jack@greensock.com
 **/var dp=Ct._gsDefine.plugin({propName:"directionalRotation",version:"0.3.1",API:2,init:function(t,e,n,i){typeof e!="object"&&(e={rotation:e}),this.finals={};var r=e.useRadians===!0?Math.PI*2:360,s=1e-6,o,a,l,f,h,d;for(o in e)o!=="useRadians"&&(f=e[o],typeof f=="function"&&(f=f(i,t)),d=(f+"").split("_"),a=d[0],l=parseFloat(typeof t[o]!="function"?t[o]:t[o.indexOf("set")||typeof t["get"+o.substr(3)]!="function"?o:"get"+o.substr(3)]()),f=this.finals[o]=typeof a=="string"&&a.charAt(1)==="="?l+parseInt(a.charAt(0)+"1",10)*Number(a.substr(2)):Number(a)||0,h=f-l,d.length&&(a=d.join("_"),a.indexOf("short")!==-1&&(h=h%r,h!==h%(r/2)&&(h=h<0?h+r:h-r)),a.indexOf("_cw")!==-1&&h<0?h=(h+r*9999999999)%r-(h/r|0)*r:a.indexOf("ccw")!==-1&&h>0&&(h=(h-r*9999999999)%r-(h/r|0)*r)),(h>s||h<-s)&&(this._addTween(t,o,l,l+h,o),this._overwriteProps.push(o)));return!0},set:function(t){var e;if(t!==1)this._super.setRatio.call(this,t);else for(e=this._firstPT;e;)e.f?e.t[e.p](this.finals[e.p]):e.t[e.p]=this.finals[e.p],e=e._next}});dp._autoCSS=!0;/*!
 * VERSION: 2.0.2
 * DATE: 2018-08-27
 * UPDATES AND DOCS AT: http://greensock.com
 *
 * @license Copyright (c) 2008-2018, GreenSock. All rights reserved.
 * This work is subject to the terms at http://greensock.com/standard-license or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 * 
 * @author: Jack Doyle, jack@greensock.com
 */Ct._gsDefine("TimelineLite",["core.Animation","core.SimpleTimeline","TweenLite"],function(){var t=function(p){mr.call(this,p),this._labels={},this.autoRemoveChildren=this.vars.autoRemoveChildren===!0,this.smoothChildTiming=this.vars.smoothChildTiming===!0,this._sortChildren=!0,this._onUpdate=this.vars.onUpdate;var y=this.vars,g,u;for(u in y)g=y[u],s(g)&&g.join("").indexOf("{self}")!==-1&&(y[u]=this._swapSelfInParams(g));s(y.tweens)&&this.add(y.tweens,0,y.align,y.stagger)},e=1e-10,n=ot._internals,i=t._internals={},r=n.isSelector,s=n.isArray,o=n.lazyTweens,a=n.lazyRender,l=Ct._gsDefine.globals,f=function(p){var y={},g;for(g in p)y[g]=p[g];return y},h=function(p,y,g){var u=p.cycle,w,T;for(w in u)T=u[w],p[w]=typeof T=="function"?T(g,y[g]):T[g%T.length];delete p.cycle},d=i.pauseCallback=function(){},c=function(p){var y=[],g=p.length,u;for(u=0;u!==g;y.push(p[u++]));return y},m=t.prototype=new mr;return t.version="2.0.2",m.constructor=t,m.kill()._gc=m._forcingPlayhead=m._hasPause=!1,m.to=function(p,y,g,u){var w=g.repeat&&l.TweenMax||ot;return y?this.add(new w(p,y,g),u):this.set(p,g,u)},m.from=function(p,y,g,u){return this.add((g.repeat&&l.TweenMax||ot).from(p,y,g),u)},m.fromTo=function(p,y,g,u,w){var T=u.repeat&&l.TweenMax||ot;return y?this.add(T.fromTo(p,y,g,u),w):this.set(p,u,w)},m.staggerTo=function(p,y,g,u,w,T,A,G){var N=new t({onComplete:T,onCompleteParams:A,callbackScope:G,smoothChildTiming:this.smoothChildTiming}),k=g.cycle,q,J;for(typeof p=="string"&&(p=ot.selector(p)||p),p=p||[],r(p)&&(p=c(p)),u=u||0,u<0&&(p=c(p),p.reverse(),u*=-1),J=0;J<p.length;J++)q=f(g),q.startAt&&(q.startAt=f(q.startAt),q.startAt.cycle&&h(q.startAt,p,J)),k&&(h(q,p,J),q.duration!=null&&(y=q.duration,delete q.duration)),N.to(p[J],y,q,J*u);return this.add(N,w)},m.staggerFrom=function(p,y,g,u,w,T,A,G){return g.immediateRender=g.immediateRender!=!1,g.runBackwards=!0,this.staggerTo(p,y,g,u,w,T,A,G)},m.staggerFromTo=function(p,y,g,u,w,T,A,G,N){return u.startAt=g,u.immediateRender=u.immediateRender!=!1&&g.immediateRender!=!1,this.staggerTo(p,y,u,w,T,A,G,N)},m.call=function(p,y,g,u){return this.add(ot.delayedCall(0,p,y,g),u)},m.set=function(p,y,g){return g=this._parseTimeOrLabel(g,0,!0),y.immediateRender==null&&(y.immediateRender=g===this._time&&!this._paused),this.add(new ot(p,0,y),g)},t.exportRoot=function(p,y){p=p||{},p.smoothChildTiming==null&&(p.smoothChildTiming=!0);var g=new t(p),u=g._timeline,w,T,A,G;for(y==null&&(y=!0),u._remove(g,!0),g._startTime=0,g._rawPrevTime=g._time=g._totalTime=u._time,A=u._first;A;)G=A._next,(!y||!(A instanceof ot&&A.target===A.vars.onComplete))&&(T=A._startTime-A._delay,T<0&&(w=1),g.add(A,T)),A=G;return u.add(g,0),w&&g.totalDuration(),g},m.add=function(p,y,g,u){var w,T,A,G,N,k;if(typeof y!="number"&&(y=this._parseTimeOrLabel(y,0,!0,p)),!(p instanceof Kt))if(p instanceof Array||p&&p.push&&s(p)){for(g=g||"normal",u=u||0,w=y,T=p.length,A=0;A<T;A++)s(G=p[A])&&(G=new t({tweens:G})),this.add(G,w),typeof G!="string"&&typeof G!="function"&&(g==="sequence"?w=G._startTime+G.totalDuration()/G._timeScale:g==="start"&&(G._startTime-=G.delay())),w+=u;return this._uncache(!0)}else{if(typeof p=="string")return this.addLabel(p,y);if(typeof p=="function")p=ot.delayedCall(0,p);else throw"Cannot add "+p+" into the timeline; it is not a tween, timeline, function, or string."}if(mr.prototype.add.call(this,p,y),p._time&&(w=Math.max(0,Math.min(p.totalDuration(),(this.rawTime()-p._startTime)*p._timeScale)),Math.abs(w-p._totalTime)>1e-5&&p.render(w,!1,!1)),(this._gc||this._time===this._duration)&&!this._paused&&this._duration<this.duration())for(N=this,k=N.rawTime()>p._startTime;N._timeline;)k&&N._timeline.smoothChildTiming?N.totalTime(N._totalTime,!0):N._gc&&N._enabled(!0,!1),N=N._timeline;return this},m.remove=function(p){if(p instanceof Kt){this._remove(p,!1);var y=p._timeline=p.vars.useFrames?Kt._rootFramesTimeline:Kt._rootTimeline;return p._startTime=(p._paused?p._pauseTime:y._time)-(p._reversed?p.totalDuration()-p._totalTime:p._totalTime)/p._timeScale,this}else if(p instanceof Array||p&&p.push&&s(p)){for(var g=p.length;--g>-1;)this.remove(p[g]);return this}else if(typeof p=="string")return this.removeLabel(p);return this.kill(null,p)},m._remove=function(p,y){mr.prototype._remove.call(this,p,y);var g=this._last;return g?this._time>this.duration()&&(this._time=this._duration,this._totalTime=this._totalDuration):this._time=this._totalTime=this._duration=this._totalDuration=0,this},m.append=function(p,y){return this.add(p,this._parseTimeOrLabel(null,y,!0,p))},m.insert=m.insertMultiple=function(p,y,g,u){return this.add(p,y||0,g,u)},m.appendMultiple=function(p,y,g,u){return this.add(p,this._parseTimeOrLabel(null,y,!0,p),g,u)},m.addLabel=function(p,y){return this._labels[p]=this._parseTimeOrLabel(y),this},m.addPause=function(p,y,g,u){var w=ot.delayedCall(0,d,g,u||this);return w.vars.onComplete=w.vars.onReverseComplete=y,w.data="isPause",this._hasPause=!0,this.add(w,p)},m.removeLabel=function(p){return delete this._labels[p],this},m.getLabelTime=function(p){return this._labels[p]!=null?this._labels[p]:-1},m._parseTimeOrLabel=function(p,y,g,u){var w,T;if(u instanceof Kt&&u.timeline===this)this.remove(u);else if(u&&(u instanceof Array||u.push&&s(u)))for(T=u.length;--T>-1;)u[T]instanceof Kt&&u[T].timeline===this&&this.remove(u[T]);if(w=typeof p=="number"&&!y?0:this.duration()>99999999999?this.recent().endTime(!1):this._duration,typeof y=="string")return this._parseTimeOrLabel(y,g&&typeof p=="number"&&this._labels[y]==null?p-w:0,g);if(y=y||0,typeof p=="string"&&(isNaN(p)||this._labels[p]!=null)){if(T=p.indexOf("="),T===-1)return this._labels[p]==null?g?this._labels[p]=w+y:y:this._labels[p]+y;y=parseInt(p.charAt(T-1)+"1",10)*Number(p.substr(T+1)),p=T>1?this._parseTimeOrLabel(p.substr(0,T-1),0,g):w}else p==null&&(p=w);return Number(p)+y},m.seek=function(p,y){return this.totalTime(typeof p=="number"?p:this._parseTimeOrLabel(p),y!==!1)},m.stop=function(){return this.paused(!0)},m.gotoAndPlay=function(p,y){return this.play(p,y)},m.gotoAndStop=function(p,y){return this.pause(p,y)},m.render=function(p,y,g){this._gc&&this._enabled(!0,!1);var u=this._time,w=this._dirty?this.totalDuration():this._totalDuration,T=this._startTime,A=this._timeScale,G=this._paused,N,k,q,J,b,P,V;if(u!==this._time&&(p+=this._time-u),p>=w-1e-7&&p>=0)this._totalTime=this._time=w,this._reversed||this._hasPausedChild()||(k=!0,J="onComplete",b=!!this._timeline.autoRemoveChildren,this._duration===0&&(p<=0&&p>=-1e-7||this._rawPrevTime<0||this._rawPrevTime===e)&&this._rawPrevTime!==p&&this._first&&(b=!0,this._rawPrevTime>e&&(J="onReverseComplete"))),this._rawPrevTime=this._duration||!y||p||this._rawPrevTime===p?p:e,p=w+1e-4;else if(p<1e-7)if(this._totalTime=this._time=0,(u!==0||this._duration===0&&this._rawPrevTime!==e&&(this._rawPrevTime>0||p<0&&this._rawPrevTime>=0))&&(J="onReverseComplete",k=this._reversed),p<0)this._active=!1,this._timeline.autoRemoveChildren&&this._reversed?(b=k=!0,J="onReverseComplete"):this._rawPrevTime>=0&&this._first&&(b=!0),this._rawPrevTime=p;else{if(this._rawPrevTime=this._duration||!y||p||this._rawPrevTime===p?p:e,p===0&&k)for(N=this._first;N&&N._startTime===0;)N._duration||(k=!1),N=N._next;p=0,this._initted||(b=!0)}else{if(this._hasPause&&!this._forcingPlayhead&&!y){if(p>=u)for(N=this._first;N&&N._startTime<=p&&!P;)N._duration||N.data==="isPause"&&!N.ratio&&!(N._startTime===0&&this._rawPrevTime===0)&&(P=N),N=N._next;else for(N=this._last;N&&N._startTime>=p&&!P;)N._duration||N.data==="isPause"&&N._rawPrevTime>0&&(P=N),N=N._prev;P&&(this._time=p=P._startTime,this._totalTime=p+this._cycle*(this._totalDuration+this._repeatDelay))}this._totalTime=this._time=this._rawPrevTime=p}if(!((this._time===u||!this._first)&&!g&&!b&&!P)){if(this._initted||(this._initted=!0),this._active||!this._paused&&this._time!==u&&p>0&&(this._active=!0),u===0&&this.vars.onStart&&(this._time!==0||!this._duration)&&(y||this._callback("onStart")),V=this._time,V>=u)for(N=this._first;N&&(q=N._next,!(V!==this._time||this._paused&&!G));)(N._active||N._startTime<=V&&!N._paused&&!N._gc)&&(P===N&&this.pause(),N._reversed?N.render((N._dirty?N.totalDuration():N._totalDuration)-(p-N._startTime)*N._timeScale,y,g):N.render((p-N._startTime)*N._timeScale,y,g)),N=q;else for(N=this._last;N&&(q=N._prev,!(V!==this._time||this._paused&&!G));){if(N._active||N._startTime<=u&&!N._paused&&!N._gc){if(P===N){for(P=N._prev;P&&P.endTime()>this._time;)P.render(P._reversed?P.totalDuration()-(p-P._startTime)*P._timeScale:(p-P._startTime)*P._timeScale,y,g),P=P._prev;P=null,this.pause()}N._reversed?N.render((N._dirty?N.totalDuration():N._totalDuration)-(p-N._startTime)*N._timeScale,y,g):N.render((p-N._startTime)*N._timeScale,y,g)}N=q}this._onUpdate&&(y||(o.length&&a(),this._callback("onUpdate"))),J&&(this._gc||(T===this._startTime||A!==this._timeScale)&&(this._time===0||w>=this.totalDuration())&&(k&&(o.length&&a(),this._timeline.autoRemoveChildren&&this._enabled(!1,!1),this._active=!1),!y&&this.vars[J]&&this._callback(J)))}},m._hasPausedChild=function(){for(var p=this._first;p;){if(p._paused||p instanceof t&&p._hasPausedChild())return!0;p=p._next}return!1},m.getChildren=function(p,y,g,u){u=u||-9999999999;for(var w=[],T=this._first,A=0;T;)T._startTime<u||(T instanceof ot?y!==!1&&(w[A++]=T):(g!==!1&&(w[A++]=T),p!==!1&&(w=w.concat(T.getChildren(!0,y,g)),A=w.length))),T=T._next;return w},m.getTweensOf=function(p,y){var g=this._gc,u=[],w=0,T,A;for(g&&this._enabled(!0,!0),T=ot.getTweensOf(p),A=T.length;--A>-1;)(T[A].timeline===this||y&&this._contains(T[A]))&&(u[w++]=T[A]);return g&&this._enabled(!1,!0),u},m.recent=function(){return this._recent},m._contains=function(p){for(var y=p.timeline;y;){if(y===this)return!0;y=y.timeline}return!1},m.shiftChildren=function(p,y,g){g=g||0;for(var u=this._first,w=this._labels,T;u;)u._startTime>=g&&(u._startTime+=p),u=u._next;if(y)for(T in w)w[T]>=g&&(w[T]+=p);return this._uncache(!0)},m._kill=function(p,y){if(!p&&!y)return this._enabled(!1,!1);for(var g=y?this.getTweensOf(y):this.getChildren(!0,!0,!1),u=g.length,w=!1;--u>-1;)g[u]._kill(p,y)&&(w=!0);return w},m.clear=function(p){var y=this.getChildren(!1,!0,!0),g=y.length;for(this._time=this._totalTime=0;--g>-1;)y[g]._enabled(!1,!1);return p!==!1&&(this._labels={}),this._uncache(!0)},m.invalidate=function(){for(var p=this._first;p;)p.invalidate(),p=p._next;return Kt.prototype.invalidate.call(this)},m._enabled=function(p,y){if(p===this._gc)for(var g=this._first;g;)g._enabled(p,!0),g=g._next;return mr.prototype._enabled.call(this,p,y)},m.totalTime=function(p,y,g){this._forcingPlayhead=!0;var u=Kt.prototype.totalTime.apply(this,arguments);return this._forcingPlayhead=!1,u},m.duration=function(p){return arguments.length?(this.duration()!==0&&p!==0&&this.timeScale(this._duration/p),this):(this._dirty&&this.totalDuration(),this._duration)},m.totalDuration=function(p){if(!arguments.length){if(this._dirty){for(var y=0,g=this._last,u=999999999999,w,T;g;)w=g._prev,g._dirty&&g.totalDuration(),g._startTime>u&&this._sortChildren&&!g._paused&&!this._calculatingDuration?(this._calculatingDuration=1,this.add(g,g._startTime-g._delay),this._calculatingDuration=0):u=g._startTime,g._startTime<0&&!g._paused&&(y-=g._startTime,this._timeline.smoothChildTiming&&(this._startTime+=g._startTime/this._timeScale,this._time-=g._startTime,this._totalTime-=g._startTime,this._rawPrevTime-=g._startTime),this.shiftChildren(-g._startTime,!1,-9999999999),u=0),T=g._startTime+g._totalDuration/g._timeScale,T>y&&(y=T),g=w;this._duration=this._totalDuration=y,this._dirty=!1}return this._totalDuration}return p&&this.totalDuration()?this.timeScale(this._totalDuration/p):this},m.paused=function(p){if(!p)for(var y=this._first,g=this._time;y;)y._startTime===g&&y.data==="isPause"&&(y._rawPrevTime=0),y=y._next;return Kt.prototype.paused.apply(this,arguments)},m.usesFrames=function(){for(var p=this._timeline;p._timeline;)p=p._timeline;return p===Kt._rootFramesTimeline},m.rawTime=function(p){return p&&(this._paused||this._repeat&&this.time()>0&&this.totalProgress()<1)?this._totalTime%(this._duration+this._repeatDelay):this._paused?this._totalTime:(this._timeline.rawTime(p)-this._startTime)*this._timeScale},t},!0);var fr=Lt.TimelineLite;/*!
 * VERSION: 2.0.2
 * DATE: 2018-08-27
 * UPDATES AND DOCS AT: http://greensock.com
 *
 * @license Copyright (c) 2008-2018, GreenSock. All rights reserved.
 * This work is subject to the terms at http://greensock.com/standard-license or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 * 
 * @author: Jack Doyle, jack@greensock.com
 */Ct._gsDefine("TimelineMax",["TimelineLite","TweenLite","easing.Ease"],function(){var t=function(l){fr.call(this,l),this._repeat=this.vars.repeat||0,this._repeatDelay=this.vars.repeatDelay||0,this._cycle=0,this._yoyo=this.vars.yoyo===!0,this._dirty=!0},e=1e-10,n=ot._internals,i=n.lazyTweens,r=n.lazyRender,s=Ct._gsDefine.globals,o=new Zt(null,null,1,0),a=t.prototype=new fr;return a.constructor=t,a.kill()._gc=!1,t.version="2.0.2",a.invalidate=function(){return this._yoyo=this.vars.yoyo===!0,this._repeat=this.vars.repeat||0,this._repeatDelay=this.vars.repeatDelay||0,this._uncache(!0),fr.prototype.invalidate.call(this)},a.addCallback=function(l,f,h,d){return this.add(ot.delayedCall(0,l,h,d),f)},a.removeCallback=function(l,f){if(l)if(f==null)this._kill(null,l);else for(var h=this.getTweensOf(l,!1),d=h.length,c=this._parseTimeOrLabel(f);--d>-1;)h[d]._startTime===c&&h[d]._enabled(!1,!1);return this},a.removePause=function(l){return this.removeCallback(fr._internals.pauseCallback,l)},a.tweenTo=function(l,f){f=f||{};var h={ease:o,useFrames:this.usesFrames(),immediateRender:!1,lazy:!1},d=f.repeat&&s.TweenMax||ot,c,m,p;for(m in f)h[m]=f[m];return h.time=this._parseTimeOrLabel(l),c=Math.abs(Number(h.time)-this._time)/this._timeScale||.001,p=new d(this,c,h),h.onStart=function(){p.target.paused(!0),p.vars.time!==p.target.time()&&c===p.duration()&&!p.isFromTo&&p.duration(Math.abs(p.vars.time-p.target.time())/p.target._timeScale).render(p.time(),!0,!0),f.onStart&&f.onStart.apply(f.onStartScope||f.callbackScope||p,f.onStartParams||[])},p},a.tweenFromTo=function(l,f,h){h=h||{},l=this._parseTimeOrLabel(l),h.startAt={onComplete:this.seek,onCompleteParams:[l],callbackScope:this},h.immediateRender=h.immediateRender!==!1;var d=this.tweenTo(f,h);return d.isFromTo=1,d.duration(Math.abs(d.vars.time-l)/this._timeScale||.001)},a.render=function(l,f,h){this._gc&&this._enabled(!0,!1);var d=this._time,c=this._dirty?this.totalDuration():this._totalDuration,m=this._duration,p=this._totalTime,y=this._startTime,g=this._timeScale,u=this._rawPrevTime,w=this._paused,T=this._cycle,A,G,N,k,q,J,b,P;if(d!==this._time&&(l+=this._time-d),l>=c-1e-7&&l>=0)this._locked||(this._totalTime=c,this._cycle=this._repeat),this._reversed||this._hasPausedChild()||(G=!0,k="onComplete",q=!!this._timeline.autoRemoveChildren,this._duration===0&&(l<=0&&l>=-1e-7||u<0||u===e)&&u!==l&&this._first&&(q=!0,u>e&&(k="onReverseComplete"))),this._rawPrevTime=this._duration||!f||l||this._rawPrevTime===l?l:e,this._yoyo&&this._cycle&1?this._time=l=0:(this._time=m,l=m+1e-4);else if(l<1e-7)if(this._locked||(this._totalTime=this._cycle=0),this._time=0,(d!==0||m===0&&u!==e&&(u>0||l<0&&u>=0)&&!this._locked)&&(k="onReverseComplete",G=this._reversed),l<0)this._active=!1,this._timeline.autoRemoveChildren&&this._reversed?(q=G=!0,k="onReverseComplete"):u>=0&&this._first&&(q=!0),this._rawPrevTime=l;else{if(this._rawPrevTime=m||!f||l||this._rawPrevTime===l?l:e,l===0&&G)for(A=this._first;A&&A._startTime===0;)A._duration||(G=!1),A=A._next;l=0,this._initted||(q=!0)}else if(m===0&&u<0&&(q=!0),this._time=this._rawPrevTime=l,this._locked||(this._totalTime=l,this._repeat!==0&&(J=m+this._repeatDelay,this._cycle=this._totalTime/J>>0,this._cycle!==0&&this._cycle===this._totalTime/J&&p<=l&&this._cycle--,this._time=this._totalTime-this._cycle*J,this._yoyo&&this._cycle&1&&(this._time=m-this._time),this._time>m?(this._time=m,l=m+1e-4):this._time<0?this._time=l=0:l=this._time)),this._hasPause&&!this._forcingPlayhead&&!f){if(l=this._time,l>=d||this._repeat&&T!==this._cycle)for(A=this._first;A&&A._startTime<=l&&!b;)A._duration||A.data==="isPause"&&!A.ratio&&!(A._startTime===0&&this._rawPrevTime===0)&&(b=A),A=A._next;else for(A=this._last;A&&A._startTime>=l&&!b;)A._duration||A.data==="isPause"&&A._rawPrevTime>0&&(b=A),A=A._prev;b&&b._startTime<m&&(this._time=l=b._startTime,this._totalTime=l+this._cycle*(this._totalDuration+this._repeatDelay))}if(this._cycle!==T&&!this._locked){var V=this._yoyo&&(T&1)!==0,j=V===(this._yoyo&&(this._cycle&1)!==0),ce=this._totalTime,se=this._cycle,ae=this._rawPrevTime,_e=this._time;if(this._totalTime=T*m,this._cycle<T?V=!V:this._totalTime+=m,this._time=d,this._rawPrevTime=m===0?u-1e-4:u,this._cycle=T,this._locked=!0,d=V?0:m,this.render(d,f,m===0),f||this._gc||this.vars.onRepeat&&(this._cycle=se,this._locked=!1,this._callback("onRepeat")),d!==this._time||(j&&(this._cycle=T,this._locked=!0,d=V?m+1e-4:-1e-4,this.render(d,!0,!1)),this._locked=!1,this._paused&&!w))return;this._time=_e,this._totalTime=ce,this._cycle=se,this._rawPrevTime=ae}if((this._time===d||!this._first)&&!h&&!q&&!b){p!==this._totalTime&&this._onUpdate&&(f||this._callback("onUpdate"));return}else this._initted||(this._initted=!0);if(this._active||!this._paused&&this._totalTime!==p&&l>0&&(this._active=!0),p===0&&this.vars.onStart&&(this._totalTime!==0||!this._totalDuration)&&(f||this._callback("onStart")),P=this._time,P>=d)for(A=this._first;A&&(N=A._next,!(P!==this._time||this._paused&&!w));)(A._active||A._startTime<=this._time&&!A._paused&&!A._gc)&&(b===A&&this.pause(),A._reversed?A.render((A._dirty?A.totalDuration():A._totalDuration)-(l-A._startTime)*A._timeScale,f,h):A.render((l-A._startTime)*A._timeScale,f,h)),A=N;else for(A=this._last;A&&(N=A._prev,!(P!==this._time||this._paused&&!w));){if(A._active||A._startTime<=d&&!A._paused&&!A._gc){if(b===A){for(b=A._prev;b&&b.endTime()>this._time;)b.render(b._reversed?b.totalDuration()-(l-b._startTime)*b._timeScale:(l-b._startTime)*b._timeScale,f,h),b=b._prev;b=null,this.pause()}A._reversed?A.render((A._dirty?A.totalDuration():A._totalDuration)-(l-A._startTime)*A._timeScale,f,h):A.render((l-A._startTime)*A._timeScale,f,h)}A=N}this._onUpdate&&(f||(i.length&&r(),this._callback("onUpdate"))),k&&(this._locked||this._gc||(y===this._startTime||g!==this._timeScale)&&(this._time===0||c>=this.totalDuration())&&(G&&(i.length&&r(),this._timeline.autoRemoveChildren&&this._enabled(!1,!1),this._active=!1),!f&&this.vars[k]&&this._callback(k)))},a.getActive=function(l,f,h){l==null&&(l=!0),f==null&&(f=!0),h==null&&(h=!1);var d=[],c=this.getChildren(l,f,h),m=0,p=c.length,y,g;for(y=0;y<p;y++)g=c[y],g.isActive()&&(d[m++]=g);return d},a.getLabelAfter=function(l){l||l!==0&&(l=this._time);var f=this.getLabelsArray(),h=f.length,d;for(d=0;d<h;d++)if(f[d].time>l)return f[d].name;return null},a.getLabelBefore=function(l){l==null&&(l=this._time);for(var f=this.getLabelsArray(),h=f.length;--h>-1;)if(f[h].time<l)return f[h].name;return null},a.getLabelsArray=function(){var l=[],f=0,h;for(h in this._labels)l[f++]={time:this._labels[h],name:h};return l.sort(function(d,c){return d.time-c.time}),l},a.invalidate=function(){return this._locked=!1,fr.prototype.invalidate.call(this)},a.progress=function(l,f){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&this._cycle&1?1-l:l)+this._cycle*(this._duration+this._repeatDelay),f):this._time/this.duration()||0},a.totalProgress=function(l,f){return arguments.length?this.totalTime(this.totalDuration()*l,f):this._totalTime/this.totalDuration()||0},a.totalDuration=function(l){return arguments.length?this._repeat===-1||!l?this:this.timeScale(this.totalDuration()/l):(this._dirty&&(fr.prototype.totalDuration.call(this),this._totalDuration=this._repeat===-1?999999999999:this._duration*(this._repeat+1)+this._repeatDelay*this._repeat),this._totalDuration)},a.time=function(l,f){return arguments.length?(this._dirty&&this.totalDuration(),l>this._duration&&(l=this._duration),this._yoyo&&this._cycle&1?l=this._duration-l+this._cycle*(this._duration+this._repeatDelay):this._repeat!==0&&(l+=this._cycle*(this._duration+this._repeatDelay)),this.totalTime(l,f)):this._time},a.repeat=function(l){return arguments.length?(this._repeat=l,this._uncache(!0)):this._repeat},a.repeatDelay=function(l){return arguments.length?(this._repeatDelay=l,this._uncache(!0)):this._repeatDelay},a.yoyo=function(l){return arguments.length?(this._yoyo=l,this):this._yoyo},a.currentLabel=function(l){return arguments.length?this.seek(l,!0):this.getLabelBefore(this._time+1e-8)},t},!0);var $M=Lt.TimelineMax;/*!
 * VERSION: 1.3.8
 * DATE: 2018-05-30
 * UPDATES AND DOCS AT: http://greensock.com
 *
 * @license Copyright (c) 2008-2018, GreenSock. All rights reserved.
 * This work is subject to the terms at http://greensock.com/standard-license or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 * 
 * @author: Jack Doyle, jack@greensock.com
 **/var KM=180/Math.PI,Fi=[],vr=[],ur=[],Ia={},ZM=Ct._gsDefine.globals,Qr=function(t,e,n,i){n===i&&(n=i-(i-e)/1e6),t===e&&(e=t+(n-t)/1e6),this.a=t,this.b=e,this.c=n,this.d=i,this.da=i-t,this.ca=n-t,this.ba=e-t},JM=",x,y,z,left,top,right,bottom,marginTop,marginLeft,marginRight,marginBottom,paddingLeft,paddingTop,paddingRight,paddingBottom,backgroundPosition,backgroundPosition_y,",Tc=function(t,e,n,i){var r={a:t},s={},o={},a={c:i},l=(t+e)/2,f=(e+n)/2,h=(n+i)/2,d=(l+f)/2,c=(f+h)/2,m=(c-d)/8;return r.b=l+(t-l)/4,s.b=d+m,r.c=s.a=(r.b+s.b)/2,s.c=o.a=(d+c)/2,o.b=c-m,a.b=h+(i-h)/4,o.c=a.a=(o.b+a.b)/2,[r,s,o,a]},QM=function(t,e,n,i,r){var s=t.length-1,o=0,a=t[0].a,l,f,h,d,c,m,p,y,g,u,w,T,A;for(l=0;l<s;l++)c=t[o],f=c.a,h=c.d,d=t[o+1].d,r?(w=Fi[l],T=vr[l],A=(T+w)*e*.25/(i?.5:ur[l]||.5),m=h-(h-f)*(i?e*.5:w!==0?A/w:0),p=h+(d-h)*(i?e*.5:T!==0?A/T:0),y=h-(m+((p-m)*(w*3/(w+T)+.5)/4||0))):(m=h-(h-f)*e*.5,p=h+(d-h)*e*.5,y=h-(m+p)/2),m+=y,p+=y,c.c=g=m,l!==0?c.b=a:c.b=a=c.a+(c.c-c.a)*.6,c.da=h-f,c.ca=g-f,c.ba=a-f,n?(u=Tc(f,a,g,h),t.splice(o,1,u[0],u[1],u[2],u[3]),o+=4):o++,a=p;c=t[o],c.b=a,c.c=a+(c.d-a)*.4,c.da=c.d-c.a,c.ca=c.c-c.a,c.ba=a-c.a,n&&(u=Tc(c.a,a,c.c,c.d),t.splice(o,1,u[0],u[1],u[2],u[3]))},eT=function(t,e,n,i){var r=[],s,o,a,l,f,h;if(i)for(t=[i].concat(t),o=t.length;--o>-1;)typeof(h=t[o][e])=="string"&&h.charAt(1)==="="&&(t[o][e]=i[e]+Number(h.charAt(0)+h.substr(2)));if(s=t.length-2,s<0)return r[0]=new Qr(t[0][e],0,0,t[0][e]),r;for(o=0;o<s;o++)a=t[o][e],l=t[o+1][e],r[o]=new Qr(a,0,0,l),n&&(f=t[o+2][e],Fi[o]=(Fi[o]||0)+(l-a)*(l-a),vr[o]=(vr[o]||0)+(f-l)*(f-l));return r[o]=new Qr(t[o][e],0,0,t[o+1][e]),r},pp=function(t,e,n,i,r,s){var o={},a=[],l=s||t[0],f,h,d,c,m,p,y,g;r=typeof r=="string"?","+r+",":JM,e==null&&(e=1);for(h in t[0])a.push(h);if(t.length>1){for(g=t[t.length-1],y=!0,f=a.length;--f>-1;)if(h=a[f],Math.abs(l[h]-g[h])>.05){y=!1;break}y&&(t=t.concat(),s&&t.unshift(s),t.push(t[1]),s=t[t.length-3])}for(Fi.length=vr.length=ur.length=0,f=a.length;--f>-1;)h=a[f],Ia[h]=r.indexOf(","+h+",")!==-1,o[h]=eT(t,h,Ia[h],s);for(f=Fi.length;--f>-1;)Fi[f]=Math.sqrt(Fi[f]),vr[f]=Math.sqrt(vr[f]);if(!i){for(f=a.length;--f>-1;)if(Ia[h])for(d=o[a[f]],p=d.length-1,c=0;c<p;c++)m=d[c+1].da/vr[c]+d[c].da/Fi[c]||0,ur[c]=(ur[c]||0)+m*m;for(f=ur.length;--f>-1;)ur[f]=Math.sqrt(ur[f])}for(f=a.length,c=n?4:1;--f>-1;)h=a[f],d=o[h],QM(d,e,n,i,Ia[h]),y&&(d.splice(0,c),d.splice(d.length-c,c));return o},tT=function(t,e,n){e=e||"soft";var i={},r=e==="cubic"?3:2,s=e==="soft",o=[],a,l,f,h,d,c,m,p,y,g,u;if(s&&n&&(t=[n].concat(t)),t==null||t.length<r+1)throw"invalid Bezier data";for(y in t[0])o.push(y);for(c=o.length;--c>-1;){for(y=o[c],i[y]=d=[],g=0,p=t.length,m=0;m<p;m++)a=n==null?t[m][y]:typeof(u=t[m][y])=="string"&&u.charAt(1)==="="?n[y]+Number(u.charAt(0)+u.substr(2)):Number(u),s&&m>1&&m<p-1&&(d[g++]=(a+d[g-2])/2),d[g++]=a;for(p=g-r+1,g=0,m=0;m<p;m+=r)a=d[m],l=d[m+1],f=d[m+2],h=r===2?0:d[m+3],d[g++]=u=r===3?new Qr(a,l,f,h):new Qr(a,(2*l+a)/3,(2*l+f)/3,f);d.length=g}return i},nT=function(t,e,n){for(var i=1/n,r=t.length,s,o,a,l,f,h,d,c,m,p,y;--r>-1;)for(p=t[r],a=p.a,l=p.d-a,f=p.c-a,h=p.b-a,s=o=0,c=1;c<=n;c++)d=i*c,m=1-d,s=o-(o=(d*d*l+3*m*(d*f+m*h))*d),y=r*n+c-1,e[y]=(e[y]||0)+s*s},iT=function(t,e){e=e>>0||6;var n=[],i=[],r=0,s=0,o=e-1,a=[],l=[],f,h,d,c;for(f in t)nT(t[f],n,e);for(d=n.length,h=0;h<d;h++)r+=Math.sqrt(n[h]),c=h%e,l[c]=r,c===o&&(s+=r,c=h/e>>0,a[c]=l,i[c]=s,r=0,l=[]);return{length:s,lengths:i,segments:a}},Xi=Ct._gsDefine.plugin({propName:"bezier",priority:-1,version:"1.3.8",API:2,global:!0,init:function(t,e,n){this._target=t,e instanceof Array&&(e={values:e}),this._func={},this._mod={},this._props=[],this._timeRes=e.timeResolution==null?6:parseInt(e.timeResolution,10);var i=e.values||[],r={},s=i[0],o=e.autoRotate||n.vars.orientToBezier,a,l,f,h,d;this._autoRotate=o?o instanceof Array?o:[["x","y","rotation",o===!0?0:Number(o)||0]]:null;for(a in s)this._props.push(a);for(f=this._props.length;--f>-1;)a=this._props[f],this._overwriteProps.push(a),l=this._func[a]=typeof t[a]=="function",r[a]=l?t[a.indexOf("set")||typeof t["get"+a.substr(3)]!="function"?a:"get"+a.substr(3)]():parseFloat(t[a]),d||r[a]!==i[0][a]&&(d=r);if(this._beziers=e.type!=="cubic"&&e.type!=="quadratic"&&e.type!=="soft"?pp(i,isNaN(e.curviness)?1:e.curviness,!1,e.type==="thruBasic",e.correlate,d):tT(i,e.type,r),this._segCount=this._beziers[a].length,this._timeRes){var c=iT(this._beziers,this._timeRes);this._length=c.length,this._lengths=c.lengths,this._segments=c.segments,this._l1=this._li=this._s1=this._si=0,this._l2=this._lengths[0],this._curSeg=this._segments[0],this._s2=this._curSeg[0],this._prec=1/this._curSeg.length}if(o=this._autoRotate)for(this._initialRotations=[],o[0]instanceof Array||(this._autoRotate=o=[o]),f=o.length;--f>-1;){for(h=0;h<3;h++)a=o[f][h],this._func[a]=typeof t[a]=="function"?t[a.indexOf("set")||typeof t["get"+a.substr(3)]!="function"?a:"get"+a.substr(3)]:!1;a=o[f][2],this._initialRotations[f]=(this._func[a]?this._func[a].call(this._target):this._target[a])||0,this._overwriteProps.push(a)}return this._startRatio=n.vars.runBackwards?1:0,!0},set:function(t){var e=this._segCount,n=this._func,i=this._target,r=t!==this._startRatio,s,o,a,l,f,h,d,c,m,p;if(!this._timeRes)s=t<0?0:t>=1?e-1:e*t>>0,h=(t-s*(1/e))*e;else{if(m=this._lengths,p=this._curSeg,t*=this._length,a=this._li,t>this._l2&&a<e-1){for(c=e-1;a<c&&(this._l2=m[++a])<=t;);this._l1=m[a-1],this._li=a,this._curSeg=p=this._segments[a],this._s2=p[this._s1=this._si=0]}else if(t<this._l1&&a>0){for(;a>0&&(this._l1=m[--a])>=t;);a===0&&t<this._l1?this._l1=0:a++,this._l2=m[a],this._li=a,this._curSeg=p=this._segments[a],this._s1=p[(this._si=p.length-1)-1]||0,this._s2=p[this._si]}if(s=a,t-=this._l1,a=this._si,t>this._s2&&a<p.length-1){for(c=p.length-1;a<c&&(this._s2=p[++a])<=t;);this._s1=p[a-1],this._si=a}else if(t<this._s1&&a>0){for(;a>0&&(this._s1=p[--a])>=t;);a===0&&t<this._s1?this._s1=0:a++,this._s2=p[a],this._si=a}h=(a+(t-this._s1)/(this._s2-this._s1))*this._prec||0}for(o=1-h,a=this._props.length;--a>-1;)l=this._props[a],f=this._beziers[l][s],d=(h*h*f.da+3*o*(h*f.ca+o*f.ba))*h+f.a,this._mod[l]&&(d=this._mod[l](d,i)),n[l]?i[l](d):i[l]=d;if(this._autoRotate){var y=this._autoRotate,g,u,w,T,A,G,N;for(a=y.length;--a>-1;)l=y[a][2],G=y[a][3]||0,N=y[a][4]===!0?1:KM,f=this._beziers[y[a][0]],g=this._beziers[y[a][1]],f&&g&&(f=f[s],g=g[s],u=f.a+(f.b-f.a)*h,T=f.b+(f.c-f.b)*h,u+=(T-u)*h,T+=(f.c+(f.d-f.c)*h-T)*h,w=g.a+(g.b-g.a)*h,A=g.b+(g.c-g.b)*h,w+=(A-w)*h,A+=(g.c+(g.d-g.c)*h-A)*h,d=r?Math.atan2(A-w,T-u)*N+G:this._initialRotations[a],this._mod[l]&&(d=this._mod[l](d,i)),n[l]?i[l](d):i[l]=d)}}}),mp=Xi.prototype;Xi.bezierThrough=pp;Xi.cubicToQuadratic=Tc;Xi._autoCSS=!0;Xi.quadraticToCubic=function(t,e,n){return new Qr(t,(2*e+t)/3,(2*e+n)/3,n)};Xi._cssRegister=function(){var t=ZM.CSSPlugin;if(t){var e=t._internals,n=e._parseToProxy,i=e._setPluginRatio,r=e.CSSPropTween;e._registerComplexSpecialProp("bezier",{parser:function(s,o,a,l,f,h){o instanceof Array&&(o={values:o}),h=new Xi;var d=o.values,c=d.length-1,m=[],p={},y,g,u;if(c<0)return f;for(y=0;y<=c;y++)u=n(s,d[y],l,f,h,c!==y),m[y]=u.end;for(g in o)p[g]=o[g];return p.values=m,f=new r(s,"bezier",0,0,u.pt,2),f.data=u,f.plugin=h,f.setRatio=i,p.autoRotate===0&&(p.autoRotate=!0),p.autoRotate&&!(p.autoRotate instanceof Array)&&(y=p.autoRotate===!0?0:Number(p.autoRotate),p.autoRotate=u.end.left!=null?[["left","top","rotation",y,!1]]:u.end.x!=null?[["x","y","rotation",y,!1]]:!1),p.autoRotate&&(l._transform||l._enableTransforms(!1),u.autoRotate=l._target._gsTransform,u.proxy.rotation=u.autoRotate.rotation||0,l._overwriteProps.push("rotation")),h._onInitTween(u.proxy,p,l._tween),f}})}};mp._mod=function(t){for(var e=this._overwriteProps,n=e.length,i;--n>-1;)i=t[e[n]],i&&typeof i=="function"&&(this._mod[e[n]]=i)};mp._kill=function(t){var e=this._props,n,i;for(n in this._beziers)if(n in t)for(delete this._beziers[n],delete this._func[n],i=e.length;--i>-1;)e[i]===n&&e.splice(i,1);if(e=this._autoRotate,e)for(i=e.length;--i>-1;)t[e[i][2]]&&e.splice(i,1);return this._super._kill.call(this,t)};/*!
 * VERSION: 1.16.1
 * DATE: 2018-08-27
 * UPDATES AND DOCS AT: http://greensock.com
 *
 * @license Copyright (c) 2008-2018, GreenSock. All rights reserved.
 * This work is subject to the terms at http://greensock.com/standard-license or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 * 
 * @author: Jack Doyle, jack@greensock.com
 **/Ct._gsDefine("easing.Back",["easing.Ease"],function(){var t=Ct.GreenSockGlobals||Ct,e=t.com.greensock,n=Math.PI*2,i=Math.PI/2,r=e._class,s=function(u,w){var T=r("easing."+u,function(){},!0),A=T.prototype=new Zt;return A.constructor=T,A.getRatio=w,T},o=Zt.register||function(){},a=function(u,w,T,A,G){var N=r("easing."+u,{easeOut:new w,easeIn:new T,easeInOut:new A},!0);return o(N,u),N},l=function(u,w,T){this.t=u,this.v=w,T&&(this.next=T,T.prev=this,this.c=T.v-w,this.gap=T.t-u)},f=function(u,w){var T=r("easing."+u,function(G){this._p1=G||G===0?G:1.70158,this._p2=this._p1*1.525},!0),A=T.prototype=new Zt;return A.constructor=T,A.getRatio=w,A.config=function(G){return new T(G)},T},h=a("Back",f("BackOut",function(u){return(u=u-1)*u*((this._p1+1)*u+this._p1)+1}),f("BackIn",function(u){return u*u*((this._p1+1)*u-this._p1)}),f("BackInOut",function(u){return(u*=2)<1?.5*u*u*((this._p2+1)*u-this._p2):.5*((u-=2)*u*((this._p2+1)*u+this._p2)+2)})),d=r("easing.SlowMo",function(u,w,T){w=w||w===0?w:.7,u==null?u=.7:u>1&&(u=1),this._p=u!==1?w:0,this._p1=(1-u)/2,this._p2=u,this._p3=this._p1+this._p2,this._calcEnd=T===!0},!0),c=d.prototype=new Zt,m,p,y,g;return c.constructor=d,c.getRatio=function(u){var w=u+(.5-u)*this._p;return u<this._p1?this._calcEnd?1-(u=1-u/this._p1)*u:w-(u=1-u/this._p1)*u*u*u*w:u>this._p3?this._calcEnd?u===1?0:1-(u=(u-this._p3)/this._p1)*u:w+(u-w)*(u=(u-this._p3)/this._p1)*u*u*u:this._calcEnd?1:w},d.ease=new d(.7,.7),c.config=d.config=function(u,w,T){return new d(u,w,T)},m=r("easing.SteppedEase",function(u,w){u=u||1,this._p1=1/u,this._p2=u+(w?0:1),this._p3=w?1:0},!0),c=m.prototype=new Zt,c.constructor=m,c.getRatio=function(u){return u<0?u=0:u>=1&&(u=.999999999),((this._p2*u|0)+this._p3)*this._p1},c.config=m.config=function(u,w){return new m(u,w)},p=r("easing.ExpoScaleEase",function(u,w,T){this._p1=Math.log(w/u),this._p2=w-u,this._p3=u,this._ease=T},!0),c=p.prototype=new Zt,c.constructor=p,c.getRatio=function(u){return this._ease&&(u=this._ease.getRatio(u)),(this._p3*Math.exp(this._p1*u)-this._p3)/this._p2},c.config=p.config=function(u,w,T){return new p(u,w,T)},y=r("easing.RoughEase",function(u){u=u||{};for(var w=u.taper||"none",T=[],A=0,G=(u.points||20)|0,N=G,k=u.randomize!==!1,q=u.clamp===!0,J=u.template instanceof Zt?u.template:null,b=typeof u.strength=="number"?u.strength*.4:.4,P,V,j,ce,se,ae;--N>-1;)P=k?Math.random():1/G*N,V=J?J.getRatio(P):P,w==="none"?j=b:w==="out"?(ce=1-P,j=ce*ce*b):w==="in"?j=P*P*b:P<.5?(ce=P*2,j=ce*ce*.5*b):(ce=(1-P)*2,j=ce*ce*.5*b),k?V+=Math.random()*j-j*.5:N%2?V+=j*.5:V-=j*.5,q&&(V>1?V=1:V<0&&(V=0)),T[A++]={x:P,y:V};for(T.sort(function(_e,ie){return _e.x-ie.x}),ae=new l(1,1,null),N=G;--N>-1;)se=T[N],ae=new l(se.x,se.y,ae);this._prev=new l(0,0,ae.t!==0?ae:ae.next)},!0),c=y.prototype=new Zt,c.constructor=y,c.getRatio=function(u){var w=this._prev;if(u>w.t){for(;w.next&&u>=w.t;)w=w.next;w=w.prev}else for(;w.prev&&u<=w.t;)w=w.prev;return this._prev=w,w.v+(u-w.t)/w.gap*w.c},c.config=function(u){return new y(u)},y.ease=new y,a("Bounce",s("BounceOut",function(u){return u<1/2.75?7.5625*u*u:u<2/2.75?7.5625*(u-=1.5/2.75)*u+.75:u<2.5/2.75?7.5625*(u-=2.25/2.75)*u+.9375:7.5625*(u-=2.625/2.75)*u+.984375}),s("BounceIn",function(u){return(u=1-u)<1/2.75?1-7.5625*u*u:u<2/2.75?1-(7.5625*(u-=1.5/2.75)*u+.75):u<2.5/2.75?1-(7.5625*(u-=2.25/2.75)*u+.9375):1-(7.5625*(u-=2.625/2.75)*u+.984375)}),s("BounceInOut",function(u){var w=u<.5;return w?u=1-u*2:u=u*2-1,u<1/2.75?u=7.5625*u*u:u<2/2.75?u=7.5625*(u-=1.5/2.75)*u+.75:u<2.5/2.75?u=7.5625*(u-=2.25/2.75)*u+.9375:u=7.5625*(u-=2.625/2.75)*u+.984375,w?(1-u)*.5:u*.5+.5})),a("Circ",s("CircOut",function(u){return Math.sqrt(1-(u=u-1)*u)}),s("CircIn",function(u){return-(Math.sqrt(1-u*u)-1)}),s("CircInOut",function(u){return(u*=2)<1?-.5*(Math.sqrt(1-u*u)-1):.5*(Math.sqrt(1-(u-=2)*u)+1)})),g=function(u,w,T){var A=r("easing."+u,function(N,k){this._p1=N>=1?N:1,this._p2=(k||T)/(N<1?N:1),this._p3=this._p2/n*(Math.asin(1/this._p1)||0),this._p2=n/this._p2},!0),G=A.prototype=new Zt;return G.constructor=A,G.getRatio=w,G.config=function(N,k){return new A(N,k)},A},a("Elastic",g("ElasticOut",function(u){return this._p1*Math.pow(2,-10*u)*Math.sin((u-this._p3)*this._p2)+1},.3),g("ElasticIn",function(u){return-(this._p1*Math.pow(2,10*(u-=1))*Math.sin((u-this._p3)*this._p2))},.3),g("ElasticInOut",function(u){return(u*=2)<1?-.5*(this._p1*Math.pow(2,10*(u-=1))*Math.sin((u-this._p3)*this._p2)):this._p1*Math.pow(2,-10*(u-=1))*Math.sin((u-this._p3)*this._p2)*.5+1},.45)),a("Expo",s("ExpoOut",function(u){return 1-Math.pow(2,-10*u)}),s("ExpoIn",function(u){return Math.pow(2,10*(u-1))-.001}),s("ExpoInOut",function(u){return(u*=2)<1?.5*Math.pow(2,10*(u-1)):.5*(2-Math.pow(2,-10*(u-1)))})),a("Sine",s("SineOut",function(u){return Math.sin(u*i)}),s("SineIn",function(u){return-Math.cos(u*i)+1}),s("SineInOut",function(u){return-.5*(Math.cos(Math.PI*u)-1)})),r("easing.EaseLookup",{find:function(u){return Zt.map[u]}},!0),o(t.SlowMo,"SlowMo","ease,"),o(y,"RoughEase","ease,"),o(m,"SteppedEase","ease,"),h},!0);var rT=Lt.Back,sT=Lt.Elastic,aT=Lt.Bounce,oT=Lt.RoughEase,lT=Lt.SlowMo,cT=Lt.SteppedEase,fT=Lt.Circ,uT=Lt.Expo,hT=Lt.Sine,dT=Lt.ExpoScaleEase;/*!
 * VERSION: 2.0.2
 * DATE: 2018-08-27
 * UPDATES AND DOCS AT: http://greensock.com
 *
 * @license Copyright (c) 2008-2018, GreenSock. All rights reserved.
 * This work is subject to the terms at http://greensock.com/standard-license or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 * 
 * @author: Jack Doyle, jack@greensock.com
 **/var pT=WM;pT._autoActivated=[fr,$M,XM,qM,Xi,up,dp,rT,sT,aT,oT,lT,cT,fT,uT,hT,dT];function mT(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var pf={exports:{}},es=typeof Reflect=="object"?Reflect:null,Zu=es&&typeof es.apply=="function"?es.apply:function(e,n,i){return Function.prototype.apply.call(e,n,i)},Ya;es&&typeof es.ownKeys=="function"?Ya=es.ownKeys:Object.getOwnPropertySymbols?Ya=function(e){return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e))}:Ya=function(e){return Object.getOwnPropertyNames(e)};var _p=Number.isNaN||function(e){return e!==e};function St(){St.init.call(this)}pf.exports=St;pf.exports.once=xT;St.EventEmitter=St;St.prototype._events=void 0;St.prototype._eventsCount=0;St.prototype._maxListeners=void 0;var Ju=10;function Mo(t){if(typeof t!="function")throw new TypeError('The "listener" argument must be of type Function. Received type '+typeof t)}Object.defineProperty(St,"defaultMaxListeners",{enumerable:!0,get:function(){return Ju},set:function(t){if(typeof t!="number"||t<0||_p(t))throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received '+t+".");Ju=t}});St.init=function(){(this._events===void 0||this._events===Object.getPrototypeOf(this)._events)&&(this._events=Object.create(null),this._eventsCount=0),this._maxListeners=this._maxListeners||void 0};St.prototype.setMaxListeners=function(e){if(typeof e!="number"||e<0||_p(e))throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received '+e+".");return this._maxListeners=e,this};function gp(t){return t._maxListeners===void 0?St.defaultMaxListeners:t._maxListeners}St.prototype.getMaxListeners=function(){return gp(this)};St.prototype.emit=function(e){for(var n=[],i=1;i<arguments.length;i++)n.push(arguments[i]);var r=e==="error",s=this._events;if(s!==void 0)r=r&&s.error===void 0;else if(!r)return!1;if(r){var o;if(n.length>0&&(o=n[0]),o instanceof Error)throw o;var a=new Error("Unhandled error."+(o?" ("+o.message+")":""));throw a.context=o,a}var l=s[e];if(l===void 0)return!1;if(typeof l=="function")Zu(l,this,n);else for(var f=l.length,h=Mp(l,f),i=0;i<f;++i)Zu(h[i],this,n);return!0};function vp(t,e,n,i){var r,s,o;if(Mo(n),s=t._events,s===void 0?(s=t._events=Object.create(null),t._eventsCount=0):(s.newListener!==void 0&&(t.emit("newListener",e,n.listener?n.listener:n),s=t._events),o=s[e]),o===void 0)o=s[e]=n,++t._eventsCount;else if(typeof o=="function"?o=s[e]=i?[n,o]:[o,n]:i?o.unshift(n):o.push(n),r=gp(t),r>0&&o.length>r&&!o.warned){o.warned=!0;var a=new Error("Possible EventEmitter memory leak detected. "+o.length+" "+String(e)+" listeners added. Use emitter.setMaxListeners() to increase limit");a.name="MaxListenersExceededWarning",a.emitter=t,a.type=e,a.count=o.length}return t}St.prototype.addListener=function(e,n){return vp(this,e,n,!1)};St.prototype.on=St.prototype.addListener;St.prototype.prependListener=function(e,n){return vp(this,e,n,!0)};function _T(){if(!this.fired)return this.target.removeListener(this.type,this.wrapFn),this.fired=!0,arguments.length===0?this.listener.call(this.target):this.listener.apply(this.target,arguments)}function xp(t,e,n){var i={fired:!1,wrapFn:void 0,target:t,type:e,listener:n},r=_T.bind(i);return r.listener=n,i.wrapFn=r,r}St.prototype.once=function(e,n){return Mo(n),this.on(e,xp(this,e,n)),this};St.prototype.prependOnceListener=function(e,n){return Mo(n),this.prependListener(e,xp(this,e,n)),this};St.prototype.removeListener=function(e,n){var i,r,s,o,a;if(Mo(n),r=this._events,r===void 0)return this;if(i=r[e],i===void 0)return this;if(i===n||i.listener===n)--this._eventsCount===0?this._events=Object.create(null):(delete r[e],r.removeListener&&this.emit("removeListener",e,i.listener||n));else if(typeof i!="function"){for(s=-1,o=i.length-1;o>=0;o--)if(i[o]===n||i[o].listener===n){a=i[o].listener,s=o;break}if(s<0)return this;s===0?i.shift():gT(i,s),i.length===1&&(r[e]=i[0]),r.removeListener!==void 0&&this.emit("removeListener",e,a||n)}return this};St.prototype.off=St.prototype.removeListener;St.prototype.removeAllListeners=function(e){var n,i,r;if(i=this._events,i===void 0)return this;if(i.removeListener===void 0)return arguments.length===0?(this._events=Object.create(null),this._eventsCount=0):i[e]!==void 0&&(--this._eventsCount===0?this._events=Object.create(null):delete i[e]),this;if(arguments.length===0){var s=Object.keys(i),o;for(r=0;r<s.length;++r)o=s[r],o!=="removeListener"&&this.removeAllListeners(o);return this.removeAllListeners("removeListener"),this._events=Object.create(null),this._eventsCount=0,this}if(n=i[e],typeof n=="function")this.removeListener(e,n);else if(n!==void 0)for(r=n.length-1;r>=0;r--)this.removeListener(e,n[r]);return this};function yp(t,e,n){var i=t._events;if(i===void 0)return[];var r=i[e];return r===void 0?[]:typeof r=="function"?n?[r.listener||r]:[r]:n?vT(r):Mp(r,r.length)}St.prototype.listeners=function(e){return yp(this,e,!0)};St.prototype.rawListeners=function(e){return yp(this,e,!1)};St.listenerCount=function(t,e){return typeof t.listenerCount=="function"?t.listenerCount(e):Sp.call(t,e)};St.prototype.listenerCount=Sp;function Sp(t){var e=this._events;if(e!==void 0){var n=e[t];if(typeof n=="function")return 1;if(n!==void 0)return n.length}return 0}St.prototype.eventNames=function(){return this._eventsCount>0?Ya(this._events):[]};function Mp(t,e){for(var n=new Array(e),i=0;i<e;++i)n[i]=t[i];return n}function gT(t,e){for(;e+1<t.length;e++)t[e]=t[e+1];t.pop()}function vT(t){for(var e=new Array(t.length),n=0;n<e.length;++n)e[n]=t[n].listener||t[n];return e}function xT(t,e){return new Promise(function(n,i){function r(o){t.removeListener(e,s),i(o)}function s(){typeof t.removeListener=="function"&&t.removeListener("error",r),n([].slice.call(arguments))}Tp(t,e,s,{once:!0}),e!=="error"&&yT(t,r,{once:!0})})}function yT(t,e,n){typeof t.on=="function"&&Tp(t,"error",e,n)}function Tp(t,e,n,i){if(typeof t.on=="function")i.once?t.once(e,n):t.on(e,n);else if(typeof t.addEventListener=="function")t.addEventListener(e,function r(s){i.once&&t.removeEventListener(e,r),n(s)});else throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type '+typeof t)}var ST=pf.exports;const MT=mT(ST);/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */var TT=Object.assign||function(e){for(var n,i=1,r=arguments.length;i<r;i++){n=arguments[i];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(e[s]=n[s])}return e},ET=[["firefox",/Firefox\/([0-9\.]+)(?:\s|$)/],["opera",/Opera\/([0-9\.]+)(?:\s|$)/],["opera",/OPR\/([0-9\.]+)(:?\s|$)$/],["edge",/Edge\/([0-9\._]+)/],["ie",/Trident\/7\.0.*rv\:([0-9\.]+)\).*Gecko$/],["ie",/MSIE\s([0-9\.]+);.*Trident\/[4-7].0/],["ie",/MSIE\s(7\.0)/],["safari",/Version\/([0-9\._]+).*Safari/],["chrome",/(?!Chrom.*OPR)Chrom(?:e|ium)\/([0-9\.]+)(:?\s|$)/],["bb10",/BB10;\sTouch.*Version\/([0-9\.]+)/],["android",/Android\s([0-9\.]+)/],["ios",/Version\/([0-9\._]+).*Mobile.*Safari.*/],["yandexbrowser",/YaBrowser\/([0-9\._]+)/],["crios",/CriOS\/([0-9\.]+)(:?\s|$)/]],bT=["Windows Phone","Android","CentOS",{name:"Chrome OS",pattern:"CrOS"},"Debian","Fedora","FreeBSD","Gentoo","Haiku","Kubuntu","Linux Mint","OpenBSD","Red Hat","SuSE","Ubuntu","Xubuntu","Cygwin","Symbian OS","hpwOS","webOS ","webOS","Tablet OS","Tizen","Linux","Mac OS X","Macintosh","Mac","Windows 98;","Windows "],wT={"10.0":"10","6.4":"10 Technical Preview","6.3":"8.1","6.2":"8","6.1":"Server 2008 R2 / 7","6.0":"Server 2008 / Vista","5.2":"Server 2003 / XP 64-bit","5.1":"XP","5.01":"2000 SP1","5.0":"2000","4.0":"NT","4.90":"ME"},AT=new RegExp(["(android|bb\\d+|meego).+mobile|avantgo|bada\\/|blackberry|blazer|","compal|elaine|fennec|hiptop|iemobile|ip(hone|od|ad)|iris|kindle|lge |maemo|","midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)","\\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\\.(browser|link)|vodafone|","wap|windows ce|xda|xiino"].join(""),"i"),RT=new RegExp(["1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\\-)|","ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\\-m|r |s )|","avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\\-(n|u)|c55\\/|capi|ccwa|cdm\\-|","cell|chtm|cldc|cmd\\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\\-s|devi|dica|dmob|do(c|p)o|","ds(12|\\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\\-|_)|","g1 u|g560|gene|gf\\-5|g\\-mo|go(\\.w|od)|gr(ad|un)|haie|hcit|hd\\-(m|p|t)|hei\\-|","hi(pt|ta)|hp( i|ip)|hs\\-c|ht(c(\\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\\-(20|go|ma)|","i230|iac( |\\-|\\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|","kddi|keji|kgt( |\\/)|klon|kpt |kwc\\-|kyo(c|k)|le(no|xi)|lg( g|\\/(k|l|u)|50|54|\\-[a-w])","|libw|lynx|m1\\-w|m3ga|m50\\/|ma(te|ui|xo)|mc(01|21|ca)|m\\-cr|me(rc|ri)|mi(o8|oa|ts)|","mmef|mo(01|02|bi|de|do|t(\\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|","n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|","op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\\-2|","po(ck|rt|se)|prox|psio|pt\\-g|qa\\-a|qc(07|12|21|32|60|\\-[2-7]|i\\-)|qtek|r380|r600|","raks|rim9|ro(ve|zo)|s55\\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\\-|oo|p\\-)|sdk\\/|","se(c(\\-|0|1)|47|mc|nd|ri)|sgh\\-|shar|sie(\\-|m)|k\\-0|sl(45|id)|sm(al|ar|b3|it|t5)|","so(ft|ny)|sp(01|h\\-|v\\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\\-|tdg\\-|","tel(i|m)|tim\\-|t\\-mo|to(pl|sh)|ts(70|m\\-|m3|m5)|tx\\-9|up(\\.b|g1|si)|utst|v400|v750|","veri|vi(rg|te)|vk(40|5[0-3]|\\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|","w3c(\\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\\-|your|zeto|zte\\-"].join(""),"i"),CT=function(){function t(e,n,i){this.navigator=n,this.process=i,this.userAgent=e||(this.navigator?n.userAgent||n.vendor:"")}return t.prototype.detect=function(){if(this.process&&!this.userAgent){var e=this.process.version.slice(1).split(".").slice(0,3),n=Array.prototype.slice.call(e,1).join("")||"0";return{name:"node",version:e.join("."),versionNumber:parseFloat(e[0]+"."+n),mobile:!1,os:this.process.platform}}return this.userAgent||this.handleMissingError(),TT({},this.checkBrowser(),this.checkMobile(),this.checkOs())},t.prototype.checkBrowser=function(){var e=this;return ET.filter(function(n){return n[1].test(e.userAgent)}).map(function(n){var i=n[1].exec(e.userAgent),r=i&&i[1].split(/[._]/).slice(0,3),s=Array.prototype.slice.call(r,1).join("")||"0";return r&&r.length<3&&Array.prototype.push.apply(r,r.length===1?[0,0]:[0]),{name:String(n[0]),version:r.join("."),versionNumber:+(r[0]+"."+s)}}).shift()},t.prototype.checkMobile=function(){var e=this.userAgent.substr(0,4),n=AT.test(this.userAgent)||RT.test(e);return{mobile:n}},t.prototype.checkOs=function(){var e=this;return bT.map(function(n){var i=n.name||n,r=e.getOsPattern(n);return{name:i,pattern:r,value:RegExp("\\b"+r.replace(/([ -])(?!$)/g,"$1?")+"(?:x?[\\d._]+|[ \\w.]*)","i").exec(e.userAgent)}}).filter(function(n){return n.value}).map(function(n){var i=n.value[0]||"",r;return n.pattern&&n.name&&/^Win/i.test(i)&&!/^Windows Phone /i.test(i)&&(r=wT[i.replace(/[^\d.]/g,"")])&&(i="Windows "+r),n.pattern&&n.name&&(i=i.replace(RegExp(n.pattern,"i"),n.name)),i=i.replace(/ ce$/i," CE").replace(/\bhpw/i,"web").replace(/\bMacintosh\b/,"Mac OS").replace(/_PowerPC\b/i," OS").replace(/\b(OS X) [^ \d]+/i,"$1").replace(/\bMac (OS X)\b/,"$1").replace(/\/(\d)/," $1").replace(/_/g,".").replace(/(?: BePC|[ .]*fc[ \d.]+)$/i,"").replace(/\bx86\.64\b/gi,"x86_64").replace(/\b(Windows Phone) OS\b/,"$1").replace(/\b(Chrome OS \w+) [\d.]+\b/,"$1").split(" on ")[0].trim(),i=/^(?:webOS|i(?:OS|P))/.test(i)?i:i.charAt(0).toUpperCase()+i.slice(1),{os:i}}).shift()},t.prototype.getOsPattern=function(e){var n=e;return(typeof e=="string"?e:void 0)||n.pattern||n.name},t.prototype.handleMissingError=function(){throw new Error(`Please give user-agent.
> browser(navigator.userAgent or res.headers['user-agent']).`)},t}();function ia(t,e){return e={exports:{}},t(e,e.exports),e.exports}var In=ia(function(t){var e=t.exports=typeof window<"u"&&window.Math==Math?window:typeof self<"u"&&self.Math==Math?self:Function("return this")();typeof __g=="number"&&(__g=e)}),qn=ia(function(t){var e=t.exports={version:"2.5.7"};typeof __e=="number"&&(__e=e)});qn.version;var Mr=function(t){return typeof t=="object"?t!==null:typeof t=="function"},Qu=function(t){if(!Mr(t))throw TypeError(t+" is not an object!");return t},To=function(t){try{return!!t()}catch{return!0}},mf=!To(function(){return Object.defineProperty({},"a",{get:function(){return 7}}).a!=7}),Ec=In.document,PT=Mr(Ec)&&Mr(Ec.createElement),DT=function(t){return PT?Ec.createElement(t):{}},LT=!mf&&!To(function(){return Object.defineProperty(DT("div"),"a",{get:function(){return 7}}).a!=7}),IT=function(t,e){if(!Mr(t))return t;var n,i;if(typeof(n=t.toString)=="function"&&!Mr(i=n.call(t))||typeof(n=t.valueOf)=="function"&&!Mr(i=n.call(t)))return i;throw TypeError("Can't convert object to primitive value")},UT=Object.defineProperty,NT=mf?Object.defineProperty:function(e,n,i){if(Qu(e),n=IT(n),Qu(i),LT)try{return UT(e,n,i)}catch{}if("get"in i||"set"in i)throw TypeError("Accessors not supported!");return"value"in i&&(e[n]=i.value),e},OT={f:NT},FT=function(t,e){return{enumerable:!(t&1),configurable:!(t&2),writable:!(t&4),value:e}},Rs=mf?function(t,e,n){return OT.f(t,e,FT(1,n))}:function(t,e,n){return t[e]=n,t},BT={}.hasOwnProperty,eh=function(t,e){return BT.call(t,e)},zT=0,kT=Math.random(),Ep=function(t){return"Symbol(".concat(t===void 0?"":t,")_",(++zT+kT).toString(36))},HT=ia(function(t){var e=Ep("src"),n="toString",i=Function[n],r=(""+i).split(n);qn.inspectSource=function(s){return i.call(s)},(t.exports=function(s,o,a,l){var f=typeof a=="function";f&&(eh(a,"name")||Rs(a,"name",o)),s[o]!==a&&(f&&(eh(a,e)||Rs(a,e,s[o]?""+s[o]:r.join(String(o)))),s===In?s[o]=a:l?s[o]?s[o]=a:Rs(s,o,a):(delete s[o],Rs(s,o,a)))})(Function.prototype,n,function(){return typeof this=="function"&&this[e]||i.call(this)})}),GT=function(t){if(typeof t!="function")throw TypeError(t+" is not a function!");return t},bc=function(t,e,n){if(GT(t),e===void 0)return t;switch(n){case 1:return function(i){return t.call(e,i)};case 2:return function(i,r){return t.call(e,i,r)};case 3:return function(i,r,s){return t.call(e,i,r,s)}}return function(){return t.apply(e,arguments)}},gl="prototype",on=function(t,e,n){var i=t&on.F,r=t&on.G,s=t&on.S,o=t&on.P,a=t&on.B,l=r?In:s?In[e]||(In[e]={}):(In[e]||{})[gl],f=r?qn:qn[e]||(qn[e]={}),h=f[gl]||(f[gl]={}),d,c,m,p;r&&(n=e);for(d in n)c=!i&&l&&l[d]!==void 0,m=(c?l:n)[d],p=a&&c?bc(m,In):o&&typeof m=="function"?bc(Function.call,m):m,l&&HT(l,d,m,t&on.U),f[d]!=m&&Rs(f,d,p),o&&h[d]!=m&&(h[d]=m)};In.core=qn;on.F=1;on.G=2;on.S=4;on.P=8;on.B=16;on.W=32;on.U=64;on.R=128;var pi=on,VT={}.toString,bp=function(t){return VT.call(t).slice(8,-1)},WT=Object("z").propertyIsEnumerable(0)?Object:function(t){return bp(t)=="String"?t.split(""):Object(t)},wp=function(t){if(t==null)throw TypeError("Can't call method on  "+t);return t},XT=function(t){return Object(wp(t))},qT=Math.ceil,YT=Math.floor,jT=function(t){return isNaN(t=+t)?0:(t>0?YT:qT)(t)},$T=Math.min,KT=function(t){return t>0?$T(jT(t),9007199254740991):0},th=Array.isArray||function(e){return bp(e)=="Array"},ZT=ia(function(t){var e="__core-js_shared__",n=In[e]||(In[e]={});(t.exports=function(i,r){return n[i]||(n[i]=r!==void 0?r:{})})("versions",[]).push({version:qn.version,mode:"global",copyright:"© 2018 Denis Pushkarev (zloirock.ru)"})}),JT=ia(function(t){var e=ZT("wks"),n=In.Symbol,i=typeof n=="function",r=t.exports=function(s){return e[s]||(e[s]=i&&n[s]||(i?n:Ep)("Symbol."+s))};r.store=e}),QT=JT("species"),eE=function(t){var e;return th(t)&&(e=t.constructor,typeof e=="function"&&(e===Array||th(e.prototype))&&(e=void 0),Mr(e)&&(e=e[QT],e===null&&(e=void 0))),e===void 0?Array:e},tE=function(t,e){return new(eE(t))(e)},Ap=function(t,e){var n=t==1,i=t==2,r=t==3,s=t==4,o=t==6,a=t==5||o,l=tE;return function(f,h,d){for(var c=XT(f),m=WT(c),p=bc(h,d,3),y=KT(m.length),g=0,u=n?l(f,y):i?l(f,0):void 0,w,T;y>g;g++)if((a||g in m)&&(w=m[g],T=p(w,g,c),t)){if(n)u[g]=T;else if(T)switch(t){case 3:return!0;case 5:return w;case 6:return g;case 2:u.push(w)}else if(s)return!1}return o?-1:r||s?s:u}},Rp=function(t,e){return!!t&&To(function(){e?t.call(null,function(){},1):t.call(null)})},nE=Ap(2);pi(pi.P+pi.F*!Rp([].filter,!0),"Array",{filter:function(e){return nE(this,e,arguments[1])}});qn.Array.filter;var iE=Ap(1);pi(pi.P+pi.F*!Rp([].map,!0),"Array",{map:function(e){return iE(this,e,arguments[1])}});qn.Array.map;var wc=`	
\v\f\r   ᠎             　\u2028\u2029\uFEFF`,ro="["+wc+"]",nh="​",rE=RegExp("^"+ro+ro+"*"),sE=RegExp(ro+ro+"*$"),Cp=function(t,e,n){var i={},r=To(function(){return!!wc[t]()||nh[t]()!=nh}),s=i[t]=r?e(aE):wc[t];n&&(i[n]=s),pi(pi.P+pi.F*r,"String",i)},aE=Cp.trim=function(t,e){return t=String(wp(t)),e&1&&(t=t.replace(rE,"")),e&2&&(t=t.replace(sE,"")),t},oE=Cp;oE("trim",function(t){return function(){return t(this,3)}});qn.String.trim;var lE=typeof window<"u"?window.navigator:void 0,cE=typeof process<"u"?process:void 0;function fE(t){var e=new CT(t,lE,cE);return e.detect()}let ih=!1,Ua=!1;const uE=()=>{if(ih)return Ua;ih=!0;try{let t=Object.defineProperty({},"passive",{get:()=>{Ua=!0}});window.addEventListener("test",null,t)}catch{return Ua}return window.removeEventListener("test",null,opts),Ua},vl=()=>uE()?{passive:!0}:!1;class hE extends MT{get enabled(){return this._enabled}constructor(e,n){super(),this.camera=e,this.el=n||window,this.plane=new Ii,this.raycaster=new VM,this.mouse=new vt,this.offset=new me,this.intersection=new me,this.objects=[],this.hovered=null,this.selected=null,this.isDown=!1,this.browser=fE(),this.enable()}enable(){this.enabled||(this.addListeners(),this._enabled=!0)}disable(){this.enabled&&(this.removeListeners(),this._enabled=!1)}addListeners(){this.handlerDown=this.onDown.bind(this),this.handlerMove=this.onMove.bind(this),this.handlerUp=this.onUp.bind(this),this.handlerLeave=this.onLeave.bind(this),this.browser.mobile?(this.el.addEventListener("touchstart",this.handlerDown,vl),this.el.addEventListener("touchmove",this.handlerMove,vl),this.el.addEventListener("touchend",this.handlerUp,vl)):(this.el.addEventListener("mousedown",this.handlerDown),window.addEventListener("mousemove",this.handlerMove),this.el.addEventListener("mouseup",this.handlerUp),this.el.addEventListener("mouseleave",this.handlerLeave))}removeListeners(){this.browser.mobile?(this.el.removeEventListener("touchstart",this.handlerDown),this.el.removeEventListener("touchmove",this.handlerMove),this.el.removeEventListener("touchend",this.handlerUp)):(this.el.removeEventListener("mousedown",this.handlerDown),this.el.removeEventListener("mousemove",this.handlerMove),this.el.removeEventListener("mouseup",this.handlerUp),this.el.removeEventListener("mouseleave",this.handlerLeave))}resize(e,n,i,r){e||n||i||r?this.rect={x:e,y:n,width:i,height:r}:this.el===window?this.rect={x:0,y:0,width:window.innerWidth,height:window.innerHeight}:this.rect=this.el.getBoundingClientRect()}onMove(e){const n=e.touches?e.touches[0]:e,i={x:n.clientX,y:n.clientY};this.mouse.x=(i.x+this.rect.x)/this.rect.width*2-1,this.mouse.y=-((i.y+this.rect.y)/this.rect.height)*2+1,this.raycaster.setFromCamera(this.mouse,this.camera);const r=this.raycaster.intersectObjects(this.objects);if(r.length>0){const s=r[0].object;this.intersectionData=r[0],this.plane.setFromNormalAndCoplanarPoint(this.camera.getWorldDirection(this.plane.normal),s.position),this.hovered!==s?(this.emit("interactive-out",{object:this.hovered}),this.emit("interactive-over",{object:s}),this.hovered=s):this.emit("interactive-move",{object:s,intersectionData:this.intersectionData})}else this.intersectionData=null,this.hovered!==null&&(this.emit("interactive-out",{object:this.hovered}),this.hovered=null)}onDown(e){this.isDown=!0,this.onMove(e),this.emit("interactive-down",{object:this.hovered,previous:this.selected,intersectionData:this.intersectionData}),this.selected=this.hovered,this.selected&&this.raycaster.ray.intersectPlane(this.plane,this.intersection)&&this.offset.copy(this.intersection).sub(this.selected.position)}onUp(e){this.isDown=!1,this.emit("interactive-up",{object:this.hovered})}onLeave(e){this.onUp(e),this.emit("interactive-out",{object:this.hovered}),this.hovered=null}}const rh=(t,e,n,i)=>n*Math.sin(t/i*(Math.PI/2))+e;class dE{constructor(e){this.parent=e,this.size=64,this.maxAge=120,this.radius=.15,this.trail=[],this.initTexture()}initTexture(){this.canvas=document.createElement("canvas"),this.canvas.width=this.canvas.height=this.size,this.ctx=this.canvas.getContext("2d"),this.ctx.fillStyle="black",this.ctx.fillRect(0,0,this.canvas.width,this.canvas.height),this.texture=new Xt(this.canvas),this.canvas.id="touchTexture",this.canvas.style.width=this.canvas.style.height=`${this.canvas.width}px`}update(e){this.clear(),this.trail.forEach((n,i)=>{n.age++,n.age>this.maxAge&&this.trail.splice(i,1)}),this.trail.forEach((n,i)=>{this.drawTouch(n)}),this.texture.needsUpdate=!0}clear(){this.ctx.fillStyle="black",this.ctx.fillRect(0,0,this.canvas.width,this.canvas.height)}addTouch(e){let n=0;const i=this.trail[this.trail.length-1];if(i){const r=i.x-e.x,s=i.y-e.y,o=r*r+s*s;n=Math.min(o*1e4,1)}this.trail.push({x:e.x,y:e.y,age:0,force:n})}drawTouch(e){const n={x:e.x*this.size,y:(1-e.y)*this.size};let i=1;e.age<this.maxAge*.3?i=rh(e.age/(this.maxAge*.3),0,1,1):i=rh(1-(e.age-this.maxAge*.3)/(this.maxAge*.7),0,1,1),i*=e.force;const r=this.size*this.radius*i,s=this.ctx.createRadialGradient(n.x,n.y,r*.25,n.x,n.y,r);s.addColorStop(0,"rgba(255, 255, 255, 0.2)"),s.addColorStop(1,"rgba(0, 0, 0, 0.0)"),this.ctx.beginPath(),this.ctx.fillStyle=s,this.ctx.arc(n.x,n.y,r,0,Math.PI*2),this.ctx.fill()}}const pE=`// @author brunoimbrizi / http://brunoimbrizi.com\r
\r
precision highp float;\r
\r
attribute float pindex;\r
attribute vec3 position;\r
attribute vec3 offset;\r
attribute vec2 uv;\r
attribute float angle;\r
\r
uniform mat4 modelViewMatrix;\r
uniform mat4 projectionMatrix;\r
\r
uniform float uTime;\r
uniform float uRandom;\r
uniform float uDepth;\r
uniform float uSize;\r
uniform vec2 uTextureSize;\r
uniform sampler2D uTexture;\r
uniform sampler2D uTouch;\r
\r
varying vec2 vPUv;\r
varying vec2 vUv;\r
varying float vTouchR;\r
\r
// Simplex Noise 2D\r
// Author: Ian McEwan, Ashima Arts\r
// License: MIT\r
\r
vec3 mod289(vec3 x) {\r
  return x - floor(x * (1.0 / 289.0)) * 289.0;\r
}\r
\r
vec2 mod289(vec2 x) {\r
  return x - floor(x * (1.0 / 289.0)) * 289.0;\r
}\r
\r
vec3 permute(vec3 x) {\r
  return mod289(((x*34.0)+1.0)*x);\r
}\r
\r
float snoise(vec2 v) {\r
  const vec4 C = vec4(0.211324865405187,  // (3.0-sqrt(3.0))/6.0\r
                      0.366025403784439,  // 0.5*(sqrt(3.0)-1.0)\r
                     -0.577350269189626,  // -1.0 + 2.0 * C.x\r
                      0.024390243902439); // 1.0 / 41.0\r
  // First corner\r
  vec2 i  = floor(v + dot(v, C.yy) );\r
  vec2 x0 = v -   i + dot(i, C.xx);\r
\r
  // Other corners\r
  vec2 i1;\r
  //i1.x = step( x0.y, x0.x ); // x0.x > x0.y ? 1.0 : 0.0\r
  //i1.y = 1.0 - i1.x;\r
  i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);\r
  // x0 = x0 - 0.0 + 0.0 * C.xx ;\r
  // x1 = x0 - i1 + 1.0 * C.xx ;\r
  // x2 = x0 - 1.0 + 2.0 * C.xx ;\r
  vec4 x12 = x0.xyxy + C.xxzz;\r
  x12.xy -= i1;\r
\r
  // Permutations\r
  i = mod289(i); // Avoid truncation effects in permutation\r
  vec3 p = permute(\r
              permute( i.y + vec3(0.0, i1.y, 1.0 ))\r
            + i.x + vec3(0.0, i1.x, 1.0 ));\r
\r
  vec3 m = max(0.5 - vec3(\r
                       dot(x0, x0),\r
                       dot(x12.xy, x12.xy),\r
                       dot(x12.zw, x12.zw)\r
                       ), 0.0);\r
  m = m*m ;\r
  m = m*m ;\r
\r
  // Gradients: 41 points uniformly over a unit circle.\r
  // The ring size 17*17 = 289 is close to a multiple of 41 (41*7 = 287)\r
  vec3 x = 2.0 * fract(p * C.www) - 1.0;\r
  vec3 h = abs(x) - 0.5;\r
  vec3 ox = floor(x + 0.5);\r
  vec3 a0 = x - ox;\r
\r
  // Normalise gradients implicitly by scaling m\r
  // Approximation of: m *= inversesqrt( a0*a0 + h*h );\r
  m *= 1.79284291400159 - 0.85373472095314 * ( a0*a0 + h*h );\r
\r
  // Compute final noise value at P\r
  vec3 g;\r
  g.x  = a0.x * x0.x + h.x * x0.y;\r
  g.yz = a0.yz * x12.xz + h.yz * x12.yw;\r
  return 130.0 * dot(m, g);\r
}\r
\r
\r
float random(float n) {\r
	return fract(sin(n) * 43758.5453123);\r
}\r
\r
void main() {\r
	vUv = uv;\r
\r
	// particle uv\r
	vec2 puv = offset.xy / uTextureSize;\r
	vPUv = puv;\r
\r
	// pixel color\r
	vec4 colA = texture2D(uTexture, puv);\r
	float grey = colA.r * 0.21 + colA.g * 0.71 + colA.b * 0.07;\r
\r
	// displacement\r
	vec3 displaced = offset;\r
	// randomise\r
	displaced.xy += vec2(random(pindex) - 0.5, random(offset.x + pindex) - 0.5) * uRandom;\r
	float rndz = (random(pindex) + snoise(vec2(pindex * 0.1, uTime * 0.1)));\r
	displaced.z += rndz * (random(pindex) * 2.0 * uDepth);\r
	// center\r
	displaced.xy -= uTextureSize * 0.5;\r
\r
	// touch\r
	float t = texture2D(uTouch, puv).r;\r
  vTouchR = t;\r
	displaced.z += t * 20.0 * rndz;\r
	displaced.x += cos(angle) * t * 20.0 * rndz;\r
	displaced.y += sin(angle) * t * 20.0 * rndz;\r
\r
	// particle size\r
	float psize = (snoise(vec2(uTime, pindex) * 0.5) + 2.0);\r
	psize *= max(grey, 0.2);\r
	psize *= uSize;\r
\r
	// final position\r
	vec4 mvPosition = modelViewMatrix * vec4(displaced, 1.0);\r
	mvPosition.xyz += position * psize;\r
	vec4 finalPosition = projectionMatrix * mvPosition;\r
\r
	gl_Position = finalPosition;\r
}\r
`,mE=`// @author brunoimbrizi / http://brunoimbrizi.com\r
\r
precision highp float;\r
\r
uniform sampler2D uTexture;\r
\r
varying vec2 vPUv;\r
varying vec2 vUv;\r
varying float vTouchR;\r
\r
const vec3 secondaryColor = vec3(0.5019607843137255, 0.6235294117647059, 1.0);\r
const vec3 primaryColor = vec3(1.0, 0.10196078431372549, 0.5058823529411764);\r
\r
void main() {\r
	vec4 color = vec4(0.0);\r
	vec2 uv = vUv;\r
	vec2 puv = vPUv;\r
\r
	// pixel color\r
	vec4 colA = texture2D(uTexture, puv);\r
\r
	// greyscale\r
	float grey = colA.r * 0.21 + colA.g * 0.71 + colA.b * 0.07;\r
	vec4 colB = vec4(grey, grey, grey, 1.0);\r
\r
	// circle\r
	float border = 0.3;\r
	float radius = 0.5;\r
	float dist = radius - distance(uv, vec2(0.5));\r
	float t = smoothstep(0.0, border, dist);\r
\r
	// final color\r
	color = colB;\r
	color.a = t;\r
\r
	gl_FragColor = color;\r
}`;class _E{constructor(e){this.webgl=e,this.container=new hn}init(e){new HM().load(e,i=>{this.texture=i,this.width=i.image.width,this.height=i.image.height,this.initPoints(!0),this.initHitArea(),this.initTouch(),this.resize(),this.show()})}initPoints(e){this.numPoints=this.width*this.height;let n=this.numPoints,i=0,r;if(e){n=0,i=34;const m=this.texture.image,p=document.createElement("canvas"),y=p.getContext("2d");p.width=this.width,p.height=this.height,y.scale(1,-1),y.drawImage(m,0,0,this.width,this.height*-1);const g=y.getImageData(0,0,p.width,p.height);r=Float32Array.from(g.data);for(let u=0;u<this.numPoints;u++)r[u*4+0]>i&&n++}const s={uTime:{value:0},uRandom:{value:1},uDepth:{value:2},uSize:{value:0},uTextureSize:{value:new vt(this.width,this.height)},uTexture:{value:this.texture},uTouch:{value:null}},o=new FM({uniforms:s,vertexShader:pE,fragmentShader:mE,depthTest:!1,transparent:!0}),a=new GM,l=new dn(new Float32Array(4*3),3);l.setXYZ(0,-.5,.5,0),l.setXYZ(1,.5,.5,0),l.setXYZ(2,-.5,-.5,0),l.setXYZ(3,.5,-.5,0),a.setAttribute("position",l);const f=new dn(new Float32Array(4*2),2);f.setXYZ(0,0,0),f.setXYZ(1,1,0),f.setXYZ(2,0,1),f.setXYZ(3,1,1),a.setAttribute("uv",f),a.setIndex(new dn(new Uint16Array([0,2,1,2,3,1]),1));const h=new Uint16Array(n),d=new Float32Array(n*3),c=new Float32Array(n);for(let m=0,p=0;m<this.numPoints;m++)e&&r[m*4+0]<=i||(d[p*3+0]=m%this.width,d[p*3+1]=Math.floor(m/this.width),h[p]=m,c[p]=Math.random()*Math.PI,p++);a.setAttribute("pindex",new _l(h,1,!1)),a.setAttribute("offset",new _l(d,3,!1)),a.setAttribute("angle",new _l(c,1,!1)),this.object3D=new En(a,o),this.container.add(this.object3D)}initTouch(){this.touch||(this.touch=new dE(this)),this.object3D.material.uniforms.uTouch.value=this.touch.texture}initHitArea(){const e=new us(this.width,this.height,1,1),n=new ff({color:16777215,wireframe:!0,depthTest:!1});n.visible=!1,this.hitArea=new En(e,n),this.container.add(this.hitArea)}addListeners(){this.handlerInteractiveMove=this.onInteractiveMove.bind(this),this.webgl.interactive.addListener("interactive-move",this.handlerInteractiveMove),this.webgl.interactive.objects.push(this.hitArea),this.webgl.interactive.enable()}removeListeners(){this.webgl.interactive.removeListener("interactive-move",this.handlerInteractiveMove);const e=this.webgl.interactive.objects.findIndex(n=>n===this.hitArea);this.webgl.interactive.objects.splice(e,1),this.webgl.interactive.disable()}update(e){this.object3D&&(this.touch&&this.touch.update(),this.object3D.material.uniforms.uTime.value+=e)}show(e=1){TweenLite.fromTo(this.object3D.material.uniforms.uSize,e,{value:.5},{value:1.5}),TweenLite.to(this.object3D.material.uniforms.uRandom,e,{value:2}),TweenLite.fromTo(this.object3D.material.uniforms.uDepth,e*1.5,{value:40},{value:4}),this.addListeners()}hide(e,n=.8){return new Promise((i,r)=>{TweenLite.to(this.object3D.material.uniforms.uRandom,n,{value:5,onComplete:()=>{e&&this.destroy(),i()}}),TweenLite.to(this.object3D.material.uniforms.uDepth,n,{value:-20,ease:Quad.easeIn}),TweenLite.to(this.object3D.material.uniforms.uSize,n*.8,{value:0}),this.removeListeners()})}destroy(){this.object3D&&(this.object3D.parent.remove(this.object3D),this.object3D.geometry.dispose(),this.object3D.material.dispose(),this.object3D=null,this.hitArea&&(this.hitArea.parent.remove(this.hitArea),this.hitArea.geometry.dispose(),this.hitArea.material.dispose(),this.hitArea=null))}resize(){if(!this.object3D)return;const e=this.webgl.fovHeight/this.height;this.object3D.scale.set(e,e,1),this.hitArea.scale.set(e,e,1)}onInteractiveMove(e){const n=e.intersectionData.uv;this.touch&&this.touch.addTouch(n)}}const gE="/YangPortfolioPublic/assets/Profile3-B_I9tn9a.png";class vE{constructor(e){this.app=e,this.samples=[gE],this.initThree(),this.initParticles(),this.initControls();const n=~~(Math.random()*this.samples.length);this.goto(n)}initThree(){this.scene=new cp,this.camera=new Sn(50,window.innerWidth/window.innerHeight,1,1e4),this.camera.position.z=300,this.renderer=new lp({antialias:!0,alpha:!0}),this.clock=new fp(!0)}initControls(){this.interactive=new hE(this.camera,this.renderer.domElement)}initParticles(){this.particles=new _E(this),this.scene.add(this.particles.container)}update(){const e=this.clock.getDelta();this.particles&&this.particles.update(e)}draw(){this.renderer.render(this.scene,this.camera)}goto(e){this.currSample==null?this.particles.init(this.samples[e]):this.particles.hide(!0).then(()=>{this.particles.init(this.samples[e])}),this.currSample=e}next(){this.currSample<this.samples.length-1?this.goto(this.currSample+1):this.goto(0)}resize(){this.renderer&&(this.camera.aspect=window.innerWidth/window.innerHeight,this.camera.updateProjectionMatrix(),this.fovHeight=2*Math.tan(this.camera.fov*Math.PI/180/2)*this.camera.position.z,this.renderer.setSize(window.innerWidth,window.innerHeight),this.interactive&&this.interactive.resize(),this.particles&&this.particles.resize())}}const xE=`\r
// hero-text.frag\r
precision mediump float;\r
\r
uniform float iTime;\r
uniform vec2 iResolution;\r
uniform sampler2D uFontTex; \r
uniform sampler2D uFontTex2; \r
uniform float uProgress;\r
\r
// Noise function\r
float noise(vec2 uv) {\r
    return fract(sin(dot(uv ,vec2(12.9898,78.233))) * 43758.5453);\r
}\r
\r
float map(float value, float min1, float max1, float min2, float max2) {\r
  return min2 + (value - min1) * (max2 - min2) / (max1 - min1);\r
}\r
\r
\r
const vec3 secondaryColor = vec3(0.5019607843137255, 0.6235294117647059, 1.0);\r
const vec3 primaryColor = vec3(1.0, 0.10196078431372549, 0.5058823529411764);\r
\r
\r
void main() {\r
    vec2 uv = gl_FragCoord.xy / iResolution.xy;\r
    \r
    vec4 texColor = texture2D(uFontTex, uv);\r
    vec4 texColor2 = texture2D(uFontTex2, uv);\r
\r
    float time = iTime * 0.5;\r
\r
    float totalTime = 3.0; // Total duration of the animation cycle\r
    float t = mod(iTime, totalTime);\r
    // float t = .7;\r
\r
    float x = floor(uv.x * 10. * 8.);\r
    float y = floor(uv.y * 10.);\r
    float pattern = noise(vec2(x,y));\r
\r
    float w = 0.5;\r
    // float p0 = uProgress;\r
    // float p0 = mod(time, 1.5);\r
    // p0 = map(p0, 0., 1.0, -w, 1.5);\r
    // p0 = smoothstep(p0, p0 + w, uv.x);\r
    // p0 = 1. - p0;\r
\r
    // Define the timing for p0\r
    float p0Start = 0.0;\r
    float p0End = 0.5;\r
    float p0 = clamp((t - p0Start) / (p0End - p0Start), 0.0, 1.0);\r
    p0 *= clamp((totalTime - t) / (totalTime - 2.0), 0.0, 1.0);\r
\r
    vec3 endPattern = vec3(texColor.rgb * pattern);\r
    // vec3 endCol =  mix(endPattern * primaryColor, endPattern* secondaryColor , endPattern.r);\r
    vec3 endCol = primaryColor;\r
    \r
    float mix1 = 2. * p0 - pattern;\r
    mix1 = clamp(mix1, 0., 1.);\r
\r
    float alpha = mix1 * sign(texColor.r);\r
 \r
    // float p1 = mod(max(time - 0.5, 0.), 1.0);\r
    // p1 = map(p1, 0., 1.0, -w, 1.);\r
    // p1 = smoothstep(p1, p1 + w, uv.x);\r
    // p1 = 1. - p1;\r
\r
    // Define the timing for p1\r
    float p1Start = 0.3;\r
    float p1End = 1.0;\r
    float p1 = clamp((t - p1Start) / (p1End - p1Start), 0.0, 1.0);\r
    p1 *= clamp((totalTime - t) / (totalTime - 2.0), 0.0, 1.0);\r
\r
    float mix2 = 2. * p1 - pattern;\r
    mix2 = clamp(mix2, 0., 1.);\r
\r
    vec3 endPattern2 = vec3(texColor2.rgb * pattern);\r
    vec3 endCol2 = vec3(1., 0., 1.0);\r
\r
    float alpha2 = mix2 * sign(texColor2.r);\r
 \r
    // Final color output \r
    gl_FragColor = vec4(mix(endCol,  texColor.rgb , p0), alpha ) + vec4(mix(endCol2,  texColor2.rgb , p1), alpha2 );\r
    // gl_FragColor = vec4(mix(endCol2,  texColor2.rgb , p1), alpha2 );\r
    // gl_FragColor = vec4(p0);\r
}\r
`;class yE{constructor(e){this.app=e,this.texts=["I MAKE THINGS","I BREAK THINGS"],this.initThree(),this.init2DCanvas(),this.initGeometry(),this.initMaterial(),this.initScene(),this.addListeners(),this.animate(),this.resize()}initThree(){this.el=document.getElementById("hero-text"),this.scene=new cp,this.camera=new np(this.el.clientWidth/-2,this.el.clientWidth/2,this.el.clientHeight/2,this.el.clientHeight/-2,-1e3,1e3),this.camera.position.z=300,this.renderer=new lp({alpha:!0}),this.renderer.setSize(this.el.clientWidth,this.el.clientHeight),this.el.appendChild(this.renderer.domElement),this.clock=new fp(!0)}wrapText(e,n,i,r,s,o,a){const l=n.split(" ");let f="",h=[];for(let d=0;d<l.length;d++){const c=f+l[d]+" ";e.measureText(c).width>s&&d>0?(h.push(f.trim()),f=l[d]+" "):f=c}h.push(f.trim()),r-=(h.length-1)/2*o;for(let d=0;d<h.length;d++)a?e.strokeText(h[d],i,r+d*o):e.fillText(h[d],i,r+d*o)}init2DCanvas(){this.canvas2D=document.createElement("canvas"),this.canvas2D.width=this.el.clientWidth,this.canvas2D.height=this.el.clientHeight,this.ctx2D=this.canvas2D.getContext("2d"),this.ctx2D.width=this.el.clientWidth,this.ctx2D.height=this.el.clientHeight,this.ctx2D.fillStyle="black",this.ctx2D.fillStyle="black",this.ctx2D.fillRect(0,0,this.ctx2D.width,this.ctx2D.height),this.ctx2D.strokeStyle="white",this.ctx2D.font="5rem 'Inter', system-ui, Avenir, Helvetica, Arial, sans-serif",this.selectedText=0,this.ctx2D.textAlign="center",this.ctx2D.textBaseline="middle",this.ctx2D.imageSmoothingEnabled=!0,this.ctx2D.imageSmoothingQuality="high";const e=this.canvas2D.width*.8,n=70*1.2;this.wrapText(this.ctx2D,this.texts[this.selectedText],this.canvas2D.width/2,this.canvas2D.height/2,e,n,!0),this.heroTexture=new qu(this.canvas2D),this.canvas2D.id="heroTexture",this.canvas2D.style.width=`${this.canvas2D.width}px`,this.canvas2D.style.height=`${this.canvas2D.height}px`;const i=this.canvas2D.width,r=this.canvas2D.height,s=document.createElement("canvas");s.width=i,s.height=r;const o=s.getContext("2d");o.font="5rem 'Inter', system-ui, Avenir, Helvetica, Arial, sans-serif",o.textAlign="center",o.textBaseline="middle",o.fillStyle="white",o.imageSmoothingEnabled=!0,o.imageSmoothingQuality="high",this.wrapText(o,this.texts[this.selectedText],s.width/2,s.height/2,e,n,!1),this.heroTexture2=new qu(s)}initGeometry(){this.geometry=new us(this.el.clientWidth,this.el.clientHeight)}initMaterial(){this.uniforms={iTime:{value:0},iResolution:{value:new vt(this.el.clientWidth,this.el.clientHeight)},uFontTex:{value:this.heroTexture},uFontTex2:{value:this.heroTexture2},uProgress:{value:.5}},this.material=new Yn({fragmentShader:xE,uniforms:this.uniforms,transparent:!0,depthTest:!1,blending:yr})}addListeners(){this.handlerAnimate=this.animate.bind(this),window.addEventListener("resize",this.resize.bind(this))}initScene(){this.mesh=new En(this.geometry,this.material),this.scene.add(this.mesh)}resize(){this.renderer&&(this.camera.aspect=this.el.clientWidth/this.el.clientHeight,this.camera.updateProjectionMatrix(),this.renderer.setSize(this.el.clientWidth,this.el.clientHeight),this.heroTexture.needsUpdate=!0,this.heroTexture2.needsUpdate=!0)}animate(){this.update(),this.draw(),this.raf=requestAnimationFrame(this.handlerAnimate)}update(){this.uniforms.iTime.value=this.clock.getElapsedTime()}draw(){this.renderer.render(this.scene,this.camera)}}class SE{constructor(){}init(){this.initWebGL(),this.initGUI(),this.addListeners(),this.animate(),this.resize()}initWebGL(){this.webgl=new vE(this),document.querySelector(".container").appendChild(this.webgl.renderer.domElement)}initGUI(){}addListeners(){this.handlerAnimate=this.animate.bind(this),window.addEventListener("resize",this.resize.bind(this)),window.addEventListener("keyup",this.keyup.bind(this)),this.webgl.renderer.domElement.addEventListener("click",this.click.bind(this))}animate(){this.update(),this.draw(),this.raf=requestAnimationFrame(this.handlerAnimate)}update(){this.webgl&&this.webgl.update(),this.gui&&this.gui.update()}draw(){this.webgl&&this.webgl.draw()}resize(){this.webgl&&this.webgl.resize()}keyup(e){e.keyCode==71&&this.gui&&this.gui.toggle()}click(e){this.webgl.next()}}const ME={class:"bg-tertiary w-full min-h-[100vh] flex justify-center"},TE={class:"w-2/3 relative z-10"},EE={__name:"App",setup(t){let e=null;return mo(()=>{e=new SE,e.init()}),(n,i)=>{const r=qc("router-view");return fi(),Bi("div",ME,[i[0]||(i[0]=Jt("div",{class:"fixed w-full h-screen overflow-hidden top-0 left-0 container pointer-events-none z-0"},null,-1)),Jt("div",TE,[Pt(Ug),Jt("main",null,[Pt(r)])])])}}};/*!
  * vue-router v4.4.5
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */const Wr=typeof document<"u";function Pp(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function bE(t){return t.__esModule||t[Symbol.toStringTag]==="Module"||t.default&&Pp(t.default)}const xt=Object.assign;function xl(t,e){const n={};for(const i in e){const r=e[i];n[i]=Bn(r)?r.map(t):t(r)}return n}const Fs=()=>{},Bn=Array.isArray,Dp=/#/g,wE=/&/g,AE=/\//g,RE=/=/g,CE=/\?/g,Lp=/\+/g,PE=/%5B/g,DE=/%5D/g,Ip=/%5E/g,LE=/%60/g,Up=/%7B/g,IE=/%7C/g,Np=/%7D/g,UE=/%20/g;function _f(t){return encodeURI(""+t).replace(IE,"|").replace(PE,"[").replace(DE,"]")}function NE(t){return _f(t).replace(Up,"{").replace(Np,"}").replace(Ip,"^")}function Ac(t){return _f(t).replace(Lp,"%2B").replace(UE,"+").replace(Dp,"%23").replace(wE,"%26").replace(LE,"`").replace(Up,"{").replace(Np,"}").replace(Ip,"^")}function OE(t){return Ac(t).replace(RE,"%3D")}function FE(t){return _f(t).replace(Dp,"%23").replace(CE,"%3F")}function BE(t){return t==null?"":FE(t).replace(AE,"%2F")}function js(t){try{return decodeURIComponent(""+t)}catch{}return""+t}const zE=/\/$/,kE=t=>t.replace(zE,"");function yl(t,e,n="/"){let i,r={},s="",o="";const a=e.indexOf("#");let l=e.indexOf("?");return a<l&&a>=0&&(l=-1),l>-1&&(i=e.slice(0,l),s=e.slice(l+1,a>-1?a:e.length),r=t(s)),a>-1&&(i=i||e.slice(0,a),o=e.slice(a,e.length)),i=WE(i??e,n),{fullPath:i+(s&&"?")+s+o,path:i,query:r,hash:js(o)}}function HE(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function sh(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function GE(t,e,n){const i=e.matched.length-1,r=n.matched.length-1;return i>-1&&i===r&&os(e.matched[i],n.matched[r])&&Op(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function os(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function Op(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!VE(t[n],e[n]))return!1;return!0}function VE(t,e){return Bn(t)?ah(t,e):Bn(e)?ah(e,t):t===e}function ah(t,e){return Bn(e)?t.length===e.length&&t.every((n,i)=>n===e[i]):t.length===1&&t[0]===e}function WE(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),i=t.split("/"),r=i[i.length-1];(r===".."||r===".")&&i.push("");let s=n.length-1,o,a;for(o=0;o<i.length;o++)if(a=i[o],a!==".")if(a==="..")s>1&&s--;else break;return n.slice(0,s).join("/")+"/"+i.slice(o).join("/")}const Ci={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var $s;(function(t){t.pop="pop",t.push="push"})($s||($s={}));var Bs;(function(t){t.back="back",t.forward="forward",t.unknown=""})(Bs||(Bs={}));function XE(t){if(!t)if(Wr){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),kE(t)}const qE=/^[^#]+#/;function YE(t,e){return t.replace(qE,"#")+e}function jE(t,e){const n=document.documentElement.getBoundingClientRect(),i=t.getBoundingClientRect();return{behavior:e.behavior,left:i.left-n.left-(e.left||0),top:i.top-n.top-(e.top||0)}}const Eo=()=>({left:window.scrollX,top:window.scrollY});function $E(t){let e;if("el"in t){const n=t.el,i=typeof n=="string"&&n.startsWith("#"),r=typeof n=="string"?i?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!r)return;e=jE(r,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function oh(t,e){return(history.state?history.state.position-e:-1)+t}const Rc=new Map;function KE(t,e){Rc.set(t,e)}function ZE(t){const e=Rc.get(t);return Rc.delete(t),e}let JE=()=>location.protocol+"//"+location.host;function Fp(t,e){const{pathname:n,search:i,hash:r}=e,s=t.indexOf("#");if(s>-1){let a=r.includes(t.slice(s))?t.slice(s).length:1,l=r.slice(a);return l[0]!=="/"&&(l="/"+l),sh(l,"")}return sh(n,t)+i+r}function QE(t,e,n,i){let r=[],s=[],o=null;const a=({state:c})=>{const m=Fp(t,location),p=n.value,y=e.value;let g=0;if(c){if(n.value=m,e.value=c,o&&o===p){o=null;return}g=y?c.position-y.position:0}else i(m);r.forEach(u=>{u(n.value,p,{delta:g,type:$s.pop,direction:g?g>0?Bs.forward:Bs.back:Bs.unknown})})};function l(){o=n.value}function f(c){r.push(c);const m=()=>{const p=r.indexOf(c);p>-1&&r.splice(p,1)};return s.push(m),m}function h(){const{history:c}=window;c.state&&c.replaceState(xt({},c.state,{scroll:Eo()}),"")}function d(){for(const c of s)c();s=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",h)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",h,{passive:!0}),{pauseListeners:l,listen:f,destroy:d}}function lh(t,e,n,i=!1,r=!1){return{back:t,current:e,forward:n,replaced:i,position:window.history.length,scroll:r?Eo():null}}function eb(t){const{history:e,location:n}=window,i={value:Fp(t,n)},r={value:e.state};r.value||s(i.value,{back:null,current:i.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function s(l,f,h){const d=t.indexOf("#"),c=d>-1?(n.host&&document.querySelector("base")?t:t.slice(d))+l:JE()+t+l;try{e[h?"replaceState":"pushState"](f,"",c),r.value=f}catch{n[h?"replace":"assign"](c)}}function o(l,f){const h=xt({},e.state,lh(r.value.back,l,r.value.forward,!0),f,{position:r.value.position});s(l,h,!0),i.value=l}function a(l,f){const h=xt({},r.value,e.state,{forward:l,scroll:Eo()});s(h.current,h,!0);const d=xt({},lh(i.value,l,null),{position:h.position+1},f);s(l,d,!1),i.value=l}return{location:i,state:r,push:a,replace:o}}function tb(t){t=XE(t);const e=eb(t),n=QE(t,e.state,e.location,e.replace);function i(s,o=!0){o||n.pauseListeners(),history.go(s)}const r=xt({location:"",base:t,go:i,createHref:YE.bind(null,t)},e,n);return Object.defineProperty(r,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(r,"state",{enumerable:!0,get:()=>e.state.value}),r}function nb(t){return typeof t=="string"||t&&typeof t=="object"}function Bp(t){return typeof t=="string"||typeof t=="symbol"}const zp=Symbol("");var ch;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(ch||(ch={}));function ls(t,e){return xt(new Error,{type:t,[zp]:!0},e)}function si(t,e){return t instanceof Error&&zp in t&&(e==null||!!(t.type&e))}const fh="[^/]+?",ib={sensitive:!1,strict:!1,start:!0,end:!0},rb=/[.+*?^${}()[\]/\\]/g;function sb(t,e){const n=xt({},ib,e),i=[];let r=n.start?"^":"";const s=[];for(const f of t){const h=f.length?[]:[90];n.strict&&!f.length&&(r+="/");for(let d=0;d<f.length;d++){const c=f[d];let m=40+(n.sensitive?.25:0);if(c.type===0)d||(r+="/"),r+=c.value.replace(rb,"\\$&"),m+=40;else if(c.type===1){const{value:p,repeatable:y,optional:g,regexp:u}=c;s.push({name:p,repeatable:y,optional:g});const w=u||fh;if(w!==fh){m+=10;try{new RegExp(`(${w})`)}catch(A){throw new Error(`Invalid custom RegExp for param "${p}" (${w}): `+A.message)}}let T=y?`((?:${w})(?:/(?:${w}))*)`:`(${w})`;d||(T=g&&f.length<2?`(?:/${T})`:"/"+T),g&&(T+="?"),r+=T,m+=20,g&&(m+=-8),y&&(m+=-20),w===".*"&&(m+=-50)}h.push(m)}i.push(h)}if(n.strict&&n.end){const f=i.length-1;i[f][i[f].length-1]+=.7000000000000001}n.strict||(r+="/?"),n.end?r+="$":n.strict&&(r+="(?:/|$)");const o=new RegExp(r,n.sensitive?"":"i");function a(f){const h=f.match(o),d={};if(!h)return null;for(let c=1;c<h.length;c++){const m=h[c]||"",p=s[c-1];d[p.name]=m&&p.repeatable?m.split("/"):m}return d}function l(f){let h="",d=!1;for(const c of t){(!d||!h.endsWith("/"))&&(h+="/"),d=!1;for(const m of c)if(m.type===0)h+=m.value;else if(m.type===1){const{value:p,repeatable:y,optional:g}=m,u=p in f?f[p]:"";if(Bn(u)&&!y)throw new Error(`Provided param "${p}" is an array but it is not repeatable (* or + modifiers)`);const w=Bn(u)?u.join("/"):u;if(!w)if(g)c.length<2&&(h.endsWith("/")?h=h.slice(0,-1):d=!0);else throw new Error(`Missing required param "${p}"`);h+=w}}return h||"/"}return{re:o,score:i,keys:s,parse:a,stringify:l}}function ab(t,e){let n=0;for(;n<t.length&&n<e.length;){const i=e[n]-t[n];if(i)return i;n++}return t.length<e.length?t.length===1&&t[0]===80?-1:1:t.length>e.length?e.length===1&&e[0]===80?1:-1:0}function kp(t,e){let n=0;const i=t.score,r=e.score;for(;n<i.length&&n<r.length;){const s=ab(i[n],r[n]);if(s)return s;n++}if(Math.abs(r.length-i.length)===1){if(uh(i))return 1;if(uh(r))return-1}return r.length-i.length}function uh(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const ob={type:0,value:""},lb=/[a-zA-Z0-9_]/;function cb(t){if(!t)return[[]];if(t==="/")return[[ob]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(m){throw new Error(`ERR (${n})/"${f}": ${m}`)}let n=0,i=n;const r=[];let s;function o(){s&&r.push(s),s=[]}let a=0,l,f="",h="";function d(){f&&(n===0?s.push({type:0,value:f}):n===1||n===2||n===3?(s.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${f}) must be alone in its segment. eg: '/:ids+.`),s.push({type:1,value:f,regexp:h,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),f="")}function c(){f+=l}for(;a<t.length;){if(l=t[a++],l==="\\"&&n!==2){i=n,n=4;continue}switch(n){case 0:l==="/"?(f&&d(),o()):l===":"?(d(),n=1):c();break;case 4:c(),n=i;break;case 1:l==="("?n=2:lb.test(l)?c():(d(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--);break;case 2:l===")"?h[h.length-1]=="\\"?h=h.slice(0,-1)+l:n=3:h+=l;break;case 3:d(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--,h="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${f}"`),d(),o(),r}function fb(t,e,n){const i=sb(cb(t.path),n),r=xt(i,{record:t,parent:e,children:[],alias:[]});return e&&!r.record.aliasOf==!e.record.aliasOf&&e.children.push(r),r}function ub(t,e){const n=[],i=new Map;e=mh({strict:!1,end:!0,sensitive:!1},e);function r(d){return i.get(d)}function s(d,c,m){const p=!m,y=dh(d);y.aliasOf=m&&m.record;const g=mh(e,d),u=[y];if("alias"in d){const A=typeof d.alias=="string"?[d.alias]:d.alias;for(const G of A)u.push(dh(xt({},y,{components:m?m.record.components:y.components,path:G,aliasOf:m?m.record:y})))}let w,T;for(const A of u){const{path:G}=A;if(c&&G[0]!=="/"){const N=c.record.path,k=N[N.length-1]==="/"?"":"/";A.path=c.record.path+(G&&k+G)}if(w=fb(A,c,g),m?m.alias.push(w):(T=T||w,T!==w&&T.alias.push(w),p&&d.name&&!ph(w)&&o(d.name)),Hp(w)&&l(w),y.children){const N=y.children;for(let k=0;k<N.length;k++)s(N[k],w,m&&m.children[k])}m=m||w}return T?()=>{o(T)}:Fs}function o(d){if(Bp(d)){const c=i.get(d);c&&(i.delete(d),n.splice(n.indexOf(c),1),c.children.forEach(o),c.alias.forEach(o))}else{const c=n.indexOf(d);c>-1&&(n.splice(c,1),d.record.name&&i.delete(d.record.name),d.children.forEach(o),d.alias.forEach(o))}}function a(){return n}function l(d){const c=pb(d,n);n.splice(c,0,d),d.record.name&&!ph(d)&&i.set(d.record.name,d)}function f(d,c){let m,p={},y,g;if("name"in d&&d.name){if(m=i.get(d.name),!m)throw ls(1,{location:d});g=m.record.name,p=xt(hh(c.params,m.keys.filter(T=>!T.optional).concat(m.parent?m.parent.keys.filter(T=>T.optional):[]).map(T=>T.name)),d.params&&hh(d.params,m.keys.map(T=>T.name))),y=m.stringify(p)}else if(d.path!=null)y=d.path,m=n.find(T=>T.re.test(y)),m&&(p=m.parse(y),g=m.record.name);else{if(m=c.name?i.get(c.name):n.find(T=>T.re.test(c.path)),!m)throw ls(1,{location:d,currentLocation:c});g=m.record.name,p=xt({},c.params,d.params),y=m.stringify(p)}const u=[];let w=m;for(;w;)u.unshift(w.record),w=w.parent;return{name:g,path:y,params:p,matched:u,meta:db(u)}}t.forEach(d=>s(d));function h(){n.length=0,i.clear()}return{addRoute:s,resolve:f,removeRoute:o,clearRoutes:h,getRoutes:a,getRecordMatcher:r}}function hh(t,e){const n={};for(const i of e)i in t&&(n[i]=t[i]);return n}function dh(t){const e={path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:t.aliasOf,beforeEnter:t.beforeEnter,props:hb(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}};return Object.defineProperty(e,"mods",{value:{}}),e}function hb(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const i in t.components)e[i]=typeof n=="object"?n[i]:n;return e}function ph(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function db(t){return t.reduce((e,n)=>xt(e,n.meta),{})}function mh(t,e){const n={};for(const i in t)n[i]=i in e?e[i]:t[i];return n}function pb(t,e){let n=0,i=e.length;for(;n!==i;){const s=n+i>>1;kp(t,e[s])<0?i=s:n=s+1}const r=mb(t);return r&&(i=e.lastIndexOf(r,i-1)),i}function mb(t){let e=t;for(;e=e.parent;)if(Hp(e)&&kp(t,e)===0)return e}function Hp({record:t}){return!!(t.name||t.components&&Object.keys(t.components).length||t.redirect)}function _b(t){const e={};if(t===""||t==="?")return e;const i=(t[0]==="?"?t.slice(1):t).split("&");for(let r=0;r<i.length;++r){const s=i[r].replace(Lp," "),o=s.indexOf("="),a=js(o<0?s:s.slice(0,o)),l=o<0?null:js(s.slice(o+1));if(a in e){let f=e[a];Bn(f)||(f=e[a]=[f]),f.push(l)}else e[a]=l}return e}function _h(t){let e="";for(let n in t){const i=t[n];if(n=OE(n),i==null){i!==void 0&&(e+=(e.length?"&":"")+n);continue}(Bn(i)?i.map(s=>s&&Ac(s)):[i&&Ac(i)]).forEach(s=>{s!==void 0&&(e+=(e.length?"&":"")+n,s!=null&&(e+="="+s))})}return e}function gb(t){const e={};for(const n in t){const i=t[n];i!==void 0&&(e[n]=Bn(i)?i.map(r=>r==null?null:""+r):i==null?i:""+i)}return e}const vb=Symbol(""),gh=Symbol(""),gf=Symbol(""),Gp=Symbol(""),Cc=Symbol("");function bs(){let t=[];function e(i){return t.push(i),()=>{const r=t.indexOf(i);r>-1&&t.splice(r,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function Ui(t,e,n,i,r,s=o=>o()){const o=i&&(i.enterCallbacks[r]=i.enterCallbacks[r]||[]);return()=>new Promise((a,l)=>{const f=c=>{c===!1?l(ls(4,{from:n,to:e})):c instanceof Error?l(c):nb(c)?l(ls(2,{from:e,to:c})):(o&&i.enterCallbacks[r]===o&&typeof c=="function"&&o.push(c),a())},h=s(()=>t.call(i&&i.instances[r],e,n,f));let d=Promise.resolve(h);t.length<3&&(d=d.then(f)),d.catch(c=>l(c))})}function Sl(t,e,n,i,r=s=>s()){const s=[];for(const o of t)for(const a in o.components){let l=o.components[a];if(!(e!=="beforeRouteEnter"&&!o.instances[a]))if(Pp(l)){const h=(l.__vccOpts||l)[e];h&&s.push(Ui(h,n,i,o,a,r))}else{let f=l();s.push(()=>f.then(h=>{if(!h)throw new Error(`Couldn't resolve component "${a}" at "${o.path}"`);const d=bE(h)?h.default:h;o.mods[a]=h,o.components[a]=d;const m=(d.__vccOpts||d)[e];return m&&Ui(m,n,i,o,a,r)()}))}}return s}function vh(t){const e=di(gf),n=di(Gp),i=Pn(()=>{const l=ki(t.to);return e.resolve(l)}),r=Pn(()=>{const{matched:l}=i.value,{length:f}=l,h=l[f-1],d=n.matched;if(!h||!d.length)return-1;const c=d.findIndex(os.bind(null,h));if(c>-1)return c;const m=xh(l[f-2]);return f>1&&xh(h)===m&&d[d.length-1].path!==m?d.findIndex(os.bind(null,l[f-2])):c}),s=Pn(()=>r.value>-1&&Mb(n.params,i.value.params)),o=Pn(()=>r.value>-1&&r.value===n.matched.length-1&&Op(n.params,i.value.params));function a(l={}){return Sb(l)?e[ki(t.replace)?"replace":"push"](ki(t.to)).catch(Fs):Promise.resolve()}return{route:i,href:Pn(()=>i.value.href),isActive:s,isExactActive:o,navigate:a}}const xb=nd({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:vh,setup(t,{slots:e}){const n=fo(vh(t)),{options:i}=di(gf),r=Pn(()=>({[yh(t.activeClass,i.linkActiveClass,"router-link-active")]:n.isActive,[yh(t.exactActiveClass,i.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const s=e.default&&e.default(n);return t.custom?s:Zc("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:r.value},s)}}}),yb=xb;function Sb(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function Mb(t,e){for(const n in e){const i=e[n],r=t[n];if(typeof i=="string"){if(i!==r)return!1}else if(!Bn(r)||r.length!==i.length||i.some((s,o)=>s!==r[o]))return!1}return!0}function xh(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const yh=(t,e,n)=>t??e??n,Tb=nd({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const i=di(Cc),r=Pn(()=>t.route||i.value),s=di(gh,0),o=Pn(()=>{let f=ki(s);const{matched:h}=r.value;let d;for(;(d=h[f])&&!d.components;)f++;return f}),a=Pn(()=>r.value.matched[o.value]);Na(gh,Pn(()=>o.value+1)),Na(vb,a),Na(Cc,r);const l=Hh();return Oa(()=>[l.value,a.value,t.name],([f,h,d],[c,m,p])=>{h&&(h.instances[d]=f,m&&m!==h&&f&&f===c&&(h.leaveGuards.size||(h.leaveGuards=m.leaveGuards),h.updateGuards.size||(h.updateGuards=m.updateGuards))),f&&h&&(!m||!os(h,m)||!c)&&(h.enterCallbacks[d]||[]).forEach(y=>y(f))},{flush:"post"}),()=>{const f=r.value,h=t.name,d=a.value,c=d&&d.components[h];if(!c)return Sh(n.default,{Component:c,route:f});const m=d.props[h],p=m?m===!0?f.params:typeof m=="function"?m(f):m:null,g=Zc(c,xt({},p,e,{onVnodeUnmounted:u=>{u.component.isUnmounted&&(d.instances[h]=null)},ref:l}));return Sh(n.default,{Component:g,route:f})||g}}});function Sh(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const Eb=Tb;function bb(t){const e=ub(t.routes,t),n=t.parseQuery||_b,i=t.stringifyQuery||_h,r=t.history,s=bs(),o=bs(),a=bs(),l=Am(Ci);let f=Ci;Wr&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const h=xl.bind(null,ee=>""+ee),d=xl.bind(null,BE),c=xl.bind(null,js);function m(ee,we){let xe,De;return Bp(ee)?(xe=e.getRecordMatcher(ee),De=we):De=ee,e.addRoute(De,xe)}function p(ee){const we=e.getRecordMatcher(ee);we&&e.removeRoute(we)}function y(){return e.getRoutes().map(ee=>ee.record)}function g(ee){return!!e.getRecordMatcher(ee)}function u(ee,we){if(we=xt({},we||l.value),typeof ee=="string"){const H=yl(n,ee,we.path),W=e.resolve({path:H.path},we),pe=r.createHref(H.fullPath);return xt(H,W,{params:c(W.params),hash:js(H.hash),redirectedFrom:void 0,href:pe})}let xe;if(ee.path!=null)xe=xt({},ee,{path:yl(n,ee.path,we.path).path});else{const H=xt({},ee.params);for(const W in H)H[W]==null&&delete H[W];xe=xt({},ee,{params:d(H)}),we.params=d(we.params)}const De=e.resolve(xe,we),qe=ee.hash||"";De.params=h(c(De.params));const We=HE(i,xt({},ee,{hash:NE(qe),path:De.path})),E=r.createHref(We);return xt({fullPath:We,hash:qe,query:i===_h?gb(ee.query):ee.query||{}},De,{redirectedFrom:void 0,href:E})}function w(ee){return typeof ee=="string"?yl(n,ee,l.value.path):xt({},ee)}function T(ee,we){if(f!==ee)return ls(8,{from:we,to:ee})}function A(ee){return k(ee)}function G(ee){return A(xt(w(ee),{replace:!0}))}function N(ee){const we=ee.matched[ee.matched.length-1];if(we&&we.redirect){const{redirect:xe}=we;let De=typeof xe=="function"?xe(ee):xe;return typeof De=="string"&&(De=De.includes("?")||De.includes("#")?De=w(De):{path:De},De.params={}),xt({query:ee.query,hash:ee.hash,params:De.path!=null?{}:ee.params},De)}}function k(ee,we){const xe=f=u(ee),De=l.value,qe=ee.state,We=ee.force,E=ee.replace===!0,H=N(xe);if(H)return k(xt(w(H),{state:typeof H=="object"?xt({},qe,H.state):qe,force:We,replace:E}),we||xe);const W=xe;W.redirectedFrom=we;let pe;return!We&&GE(i,De,xe)&&(pe=ls(16,{to:W,from:De}),He(De,De,!0,!1)),(pe?Promise.resolve(pe):b(W,De)).catch(oe=>si(oe)?si(oe,2)?oe:ze(oe):ie(oe,W,De)).then(oe=>{if(oe){if(si(oe,2))return k(xt({replace:E},w(oe.to),{state:typeof oe.to=="object"?xt({},qe,oe.to.state):qe,force:We}),we||W)}else oe=V(W,De,!0,E,qe);return P(W,De,oe),oe})}function q(ee,we){const xe=T(ee,we);return xe?Promise.reject(xe):Promise.resolve()}function J(ee){const we=Se.values().next().value;return we&&typeof we.runWithContext=="function"?we.runWithContext(ee):ee()}function b(ee,we){let xe;const[De,qe,We]=wb(ee,we);xe=Sl(De.reverse(),"beforeRouteLeave",ee,we);for(const H of De)H.leaveGuards.forEach(W=>{xe.push(Ui(W,ee,we))});const E=q.bind(null,ee,we);return xe.push(E),Oe(xe).then(()=>{xe=[];for(const H of s.list())xe.push(Ui(H,ee,we));return xe.push(E),Oe(xe)}).then(()=>{xe=Sl(qe,"beforeRouteUpdate",ee,we);for(const H of qe)H.updateGuards.forEach(W=>{xe.push(Ui(W,ee,we))});return xe.push(E),Oe(xe)}).then(()=>{xe=[];for(const H of We)if(H.beforeEnter)if(Bn(H.beforeEnter))for(const W of H.beforeEnter)xe.push(Ui(W,ee,we));else xe.push(Ui(H.beforeEnter,ee,we));return xe.push(E),Oe(xe)}).then(()=>(ee.matched.forEach(H=>H.enterCallbacks={}),xe=Sl(We,"beforeRouteEnter",ee,we,J),xe.push(E),Oe(xe))).then(()=>{xe=[];for(const H of o.list())xe.push(Ui(H,ee,we));return xe.push(E),Oe(xe)}).catch(H=>si(H,8)?H:Promise.reject(H))}function P(ee,we,xe){a.list().forEach(De=>J(()=>De(ee,we,xe)))}function V(ee,we,xe,De,qe){const We=T(ee,we);if(We)return We;const E=we===Ci,H=Wr?history.state:{};xe&&(De||E?r.replace(ee.fullPath,xt({scroll:E&&H&&H.scroll},qe)):r.push(ee.fullPath,qe)),l.value=ee,He(ee,we,xe,E),ze()}let j;function ce(){j||(j=r.listen((ee,we,xe)=>{if(!Pe.listening)return;const De=u(ee),qe=N(De);if(qe){k(xt(qe,{replace:!0}),De).catch(Fs);return}f=De;const We=l.value;Wr&&KE(oh(We.fullPath,xe.delta),Eo()),b(De,We).catch(E=>si(E,12)?E:si(E,2)?(k(E.to,De).then(H=>{si(H,20)&&!xe.delta&&xe.type===$s.pop&&r.go(-1,!1)}).catch(Fs),Promise.reject()):(xe.delta&&r.go(-xe.delta,!1),ie(E,De,We))).then(E=>{E=E||V(De,We,!1),E&&(xe.delta&&!si(E,8)?r.go(-xe.delta,!1):xe.type===$s.pop&&si(E,20)&&r.go(-1,!1)),P(De,We,E)}).catch(Fs)}))}let se=bs(),ae=bs(),_e;function ie(ee,we,xe){ze(ee);const De=ae.list();return De.length&&De.forEach(qe=>qe(ee,we,xe)),Promise.reject(ee)}function Ne(){return _e&&l.value!==Ci?Promise.resolve():new Promise((ee,we)=>{se.add([ee,we])})}function ze(ee){return _e||(_e=!ee,ce(),se.list().forEach(([we,xe])=>ee?xe(ee):we()),se.reset()),ee}function He(ee,we,xe,De){const{scrollBehavior:qe}=t;if(!Wr||!qe)return Promise.resolve();const We=!xe&&ZE(oh(ee.fullPath,0))||(De||!xe)&&history.state&&history.state.scroll||null;return Xh().then(()=>qe(ee,we,We)).then(E=>E&&$E(E)).catch(E=>ie(E,ee,we))}const Qe=ee=>r.go(ee);let rt;const Se=new Set,Pe={currentRoute:l,listening:!0,addRoute:m,removeRoute:p,clearRoutes:e.clearRoutes,hasRoute:g,getRoutes:y,resolve:u,options:t,push:A,replace:G,go:Qe,back:()=>Qe(-1),forward:()=>Qe(1),beforeEach:s.add,beforeResolve:o.add,afterEach:a.add,onError:ae.add,isReady:Ne,install(ee){const we=this;ee.component("RouterLink",yb),ee.component("RouterView",Eb),ee.config.globalProperties.$router=we,Object.defineProperty(ee.config.globalProperties,"$route",{enumerable:!0,get:()=>ki(l)}),Wr&&!rt&&l.value===Ci&&(rt=!0,A(r.location).catch(qe=>{}));const xe={};for(const qe in Ci)Object.defineProperty(xe,qe,{get:()=>l.value[qe],enumerable:!0});ee.provide(gf,we),ee.provide(Gp,zh(xe)),ee.provide(Cc,l);const De=ee.unmount;Se.add(ee),ee.unmount=function(){Se.delete(ee),Se.size<1&&(f=Ci,j&&j(),j=null,l.value=Ci,rt=!1,_e=!1),De()}}};function Oe(ee){return ee.reduce((we,xe)=>we.then(()=>J(xe)),Promise.resolve())}return Pe}function wb(t,e){const n=[],i=[],r=[],s=Math.max(e.matched.length,t.matched.length);for(let o=0;o<s;o++){const a=e.matched[o];a&&(t.matched.find(f=>os(f,a))?i.push(a):n.push(a));const l=t.matched[o];l&&(e.matched.find(f=>os(f,l))||r.push(l))}return[n,i,r]}const Ab={class:"flex flex-col"},Rb={__name:"Home",setup(t){return mo(()=>{new yE}),(e,n)=>(fi(),Bi("div",Ab,n[0]||(n[0]=[Jt("div",{id:"hero-text",class:"w-full h-[70vh] z-10 relative"},null,-1)])))}},Cb="/YangPortfolioPublic/assets/MyIcon-BuHmBPjZ.png",Pb={};function Db(t,e){return fi(),Bi("section",null,e[0]||(e[0]=[L_('<div class="grid-cols-2 grid min-h-[60vh]"><div class="flex flex-col gap-8 h-full justify-center col-span-2 lg:col-span-1 md:col-span-2 py-10"><div class="text-6xl"><h2>Hi there! I am</h2><h2 class="text-secondary">Wei Yang.</h2></div><div class="flex flex-col gap-2 text-lg"><span> I am a versatile programmer specializing in C++ and 3D development, with a passion for graphics and visual effects. My journey began as a C++ gameplay programmer using Unreal Engine to develop a multiplayer game. </span><span> Since then, I have delved into shader programming and explored various aspects of graphics technology. Working with several small companies has honed my ability to quickly learn and adapt to new technologies, equipping me with a broad and diverse skill set. </span></div></div><div class="flex justify-center items-center lg:block md:hidden hidden"><img src="'+Cb+'" alt="Wei Yang&#39;s Icon"></div></div><div class="mt-8"><h2 class="text-4xl mb-6">Professional Experience</h2><div class="flex flex-col md:flex-row gap-4 mb-6"><div class="w-full md:w-64 flex flex-col gap-1"><span class="text-primary">Senior Software Engineer</span><div><span class="text-secondary">Vizzio Technologies Pte Ltd</span><span> | Singapore</span></div><span>June 2023 - Present</span></div><div class="w-full md:flex-auto"><ul class="list-disc pl-5"><li><span class="text-primary">GIS Development (C++)</span>: Led the development of performance-driven geographic information systems (GIS) with a focus on scalability. </li><li><span class="text-primary">Web View SDK on Unreal Engine (C++, TypeScript)</span>: Integrated web-based views within Unreal Engine for seamless interaction between 3D environments and web content. </li><li><span class="text-primary">Project Support (Blueprint and C++)</span>: Contributed to various projects, ensuring optimized performance using Unreal Engine’s Blueprint system and C++. </li><li><span class="text-primary">Collaboration with McKinsey</span>: Worked on a strategic project for Saudi Arabia, collaborating with McKinsey to solve complex problems. </li><li><span class="text-primary">Licensing System Setup (C++ and C#)</span>: Developed and maintained a licensing system for streamlined software access control. </li><li><span class="text-primary">JavaScript Encryption with WASM</span>: Implemented secure encryption processes using WebAssembly (WASM) to protect sensitive web data. </li><li><span class="text-primary">3D Tile Streaming Server (Linux, C++, TCP)</span>: Developing a 3D tile streaming server using C++ and TCP on Linux for high-performance data transmission. </li></ul></div></div><div class="flex flex-col md:flex-row gap-4 mb-6"><div class="w-full md:w-64 flex flex-col gap-1"><span class="text-primary">Lead Engineer</span><div><span class="text-secondary">Weike Gaming Technology</span><span> | Singapore</span></div><span>August 2022 - June 2023</span></div><div class="w-full md:flex-auto"><ul class="list-disc pl-5"><li> Led engineering efforts for gaming solutions, contributing to various aspects of software development from core logic to user interface. </li><li> Managed team deliverables and ensured code quality across projects. </li></ul></div></div><div class="flex flex-col md:flex-row gap-4 mb-6"><div class="w-full md:w-64 flex flex-col gap-1"><span class="text-primary">Lead Application Developer</span><div><span class="text-secondary">Multiply Studio Sdn Bhd</span><span> | Malaysia</span></div><span>April 2021 - August 2022</span></div><div class="w-full md:flex-auto"><ul class="list-disc pl-5"><li> Spearheaded application development for high-traffic consumer platforms. </li><li> Managed technical aspects of product delivery and ensured cross-platform consistency. </li></ul></div></div><div class="flex flex-col md:flex-row gap-4 mb-6"><div class="w-full md:w-64 flex flex-col gap-1"><span class="text-primary">Application Developer</span><div><span class="text-secondary">Eco World Development Group Berhad</span><span> | Malaysia</span></div><span>July 2019 - July 2020</span></div><div class="w-full md:flex-auto"><ul class="list-disc pl-5"><li> Contributed to application development for various internal and consumer-facing applications. </li><li> Enhanced UI/UX designs and integrated backend systems. </li></ul></div></div><div class="flex flex-col md:flex-row gap-4 mb-6"><div class="w-full md:w-64 flex flex-col gap-1"><span class="text-primary">Game Programmer</span><div><span class="text-secondary">Ammobox Studios</span><span> | Malaysia</span></div><span>January 2018 - February 2019</span></div><div class="w-full md:flex-auto"><ul class="list-disc pl-5"><li> Improved maintainability and performance by refactoring legacy code. </li><li> Developed new features and systems, including weapon and objective systems. </li><li> Handled networking code for multiplayer functionality using UDP Protocol. </li><li> Utilized Unreal Engine 4’s Blueprint system to create game mechanics and interactions. </li></ul></div></div><div class="flex flex-col md:flex-row gap-4"><div class="w-full md:w-64 flex flex-col gap-1"><span class="text-primary">QA Programmer</span><div><span class="text-secondary">Centre for Content Creation</span><span> | Malaysia</span></div><span>January 2016 - May 2016</span></div><div class="w-full md:flex-auto"><ul class="list-disc pl-5"><li> Worked on <em>Starfall Catalyst</em>, identifying and fixing bugs in Unity3D (C#). </li><li> Improved overall game stability and performance through diligent QA processes. </li></ul></div></div></div><div class="mt-8"><h2 class="text-4xl mb-6">Education</h2><div class="flex flex-col md:flex-row gap-4 mb-6"><div class="w-full md:w-64 flex flex-col gap-1"><span class="text-primary">Bachelor&#39;s Degree in Computer Games and Programming Skills</span><div><span class="text-secondary">Limkokwing University of Creative Technology</span><span> | Malaysia</span></div><span>2015 - 2017</span></div><div class="w-full md:flex-auto"><p> Completed a comprehensive program focused on game development and programming skills, covering topics such as game design, C++ programming, and 3D modeling. </p></div></div><div class="flex flex-col md:flex-row gap-4"><div class="w-full md:w-64 flex flex-col gap-1"><span class="text-primary">Foundation Degree in Information Technology</span><div><span class="text-secondary">Limkokwing University of Creative Technology</span><span> | Malaysia</span></div><span>2014</span></div><div class="w-full md:flex-auto"><p> Gained foundational knowledge in Information Technology, including basic programming, database management, and IT systems. </p></div></div></div><footer class="flex gap-4 mt-8"><a href="https://www.linkedin.com/in/tan-wei-yang-396305179/" target="_blank" rel="noopener noreferrer"><svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-gray-500 transition duration-300 ease-out hover:text-blue-700" fill="currentColor" viewBox="0 0 448 512"><path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"></path></svg></a><a href="https://github.com/renkin4" target="_blank" rel="noopener noreferrer"><svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-gray-500 transition duration-300 ease-out hover:text-black" fill="currentColor" viewBox="0 0 496 512"><path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path></svg></a></footer>',4)]))}const Lb=Jc(Pb,[["render",Db]]),Ib={};function Ub(t,e){const n=qc("router-link");return fi(),Bi("div",null,[e[1]||(e[1]=Jt("h1",null,"404 - Page Not Found",-1)),e[2]||(e[2]=Jt("p",null,"The page you're looking for doesn't exist.",-1)),Pt(n,{to:"/"},{default:hr(()=>e[0]||(e[0]=[Xr("Go back to Home")])),_:1})])}const Nb=Jc(Ib,[["render",Ub]]),Ob=[{path:"/",name:"Home",component:Rb},{path:"/about",name:"About",component:Lb},{path:"/:pathMatch(.*)*",name:"NotFound",component:Nb,beforeEnter:(t,e,n)=>{t.path.startsWith("/docs")?window.location.href=t.fullPath:n()}}],Fb=bb({history:tb("/YangPortfolioPublic"),routes:Ob});Eg(EE).use(Fb).mount("#app")});export default Bb();
