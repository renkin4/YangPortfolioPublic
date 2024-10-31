var Fm=(t,e)=>()=>(e||t((e={exports:{}}).exports,e),e.exports);var Sw=Fm((bw,jc)=>{(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();/**
* @vue/shared v3.5.12
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function qc(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const At={},es=[],Zn=()=>{},Bm=()=>!1,mo=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),Yc=t=>t.startsWith("onUpdate:"),zt=Object.assign,$c=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},zm=Object.prototype.hasOwnProperty,vt=(t,e)=>zm.call(t,e),st=Array.isArray,Ns=t=>_o(t)==="[object Map]",km=t=>_o(t)==="[object Set]",ot=t=>typeof t=="function",kt=t=>typeof t=="string",ms=t=>typeof t=="symbol",Ut=t=>t!==null&&typeof t=="object",ed=t=>(Ut(t)||ot(t))&&ot(t.then)&&ot(t.catch),Hm=Object.prototype.toString,_o=t=>Hm.call(t),Vm=t=>_o(t).slice(8,-1),Gm=t=>_o(t)==="[object Object]",Kc=t=>kt(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Os=qc(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),go=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},Wm=/-(\w)/g,Cn=go(t=>t.replace(Wm,(e,n)=>n?n.toUpperCase():"")),Xm=/\B([A-Z])/g,Ir=go(t=>t.replace(Xm,"-$1").toLowerCase()),vo=go(t=>t.charAt(0).toUpperCase()+t.slice(1)),zo=go(t=>t?`on${vo(t)}`:""),ji=(t,e)=>!Object.is(t,e),ko=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},td=(t,e,n,i=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:i,value:n})},jm=t=>{const e=parseFloat(t);return isNaN(e)?t:e},qm=t=>{const e=kt(t)?Number(t):NaN;return isNaN(e)?t:e};let Gu;const xo=()=>Gu||(Gu=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Zc(t){if(st(t)){const e={};for(let n=0;n<t.length;n++){const i=t[n],r=kt(i)?Zm(i):Zc(i);if(r)for(const s in r)e[s]=r[s]}return e}else if(kt(t)||Ut(t))return t}const Ym=/;(?![^(]*\))/g,$m=/:([^]+)/,Km=/\/\*[^]*?\*\//g;function Zm(t){const e={};return t.replace(Km,"").split(Ym).forEach(n=>{if(n){const i=n.split($m);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function Jc(t){let e="";if(kt(t))e=t;else if(st(t))for(let n=0;n<t.length;n++){const i=Jc(t[n]);i&&(e+=i+" ")}else if(Ut(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const Jm="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Qm=qc(Jm);function nd(t){return!!t||t===""}/**
* @vue/reactivity v3.5.12
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let yn;class e_{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=yn,!e&&yn&&(this.index=(yn.scopes||(yn.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].pause();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].resume();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].resume()}}run(e){if(this._active){const n=yn;try{return yn=this,e()}finally{yn=n}}}on(){yn=this}off(){yn=this.parent}stop(e){if(this._active){let n,i;for(n=0,i=this.effects.length;n<i;n++)this.effects[n].stop();for(n=0,i=this.cleanups.length;n<i;n++)this.cleanups[n]();if(this.scopes)for(n=0,i=this.scopes.length;n<i;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0,this._active=!1}}}function t_(){return yn}let wt;const Ho=new WeakSet;class id{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,yn&&yn.active&&yn.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Ho.has(this)&&(Ho.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||sd(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Wu(this),ad(this);const e=wt,n=Bn;wt=this,Bn=!0;try{return this.fn()}finally{od(this),wt=e,Bn=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)tu(e);this.deps=this.depsTail=void 0,Wu(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Ho.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Nl(this)&&this.run()}get dirty(){return Nl(this)}}let rd=0,Fs,Bs;function sd(t,e=!1){if(t.flags|=8,e){t.next=Bs,Bs=t;return}t.next=Fs,Fs=t}function Qc(){rd++}function eu(){if(--rd>0)return;if(Bs){let e=Bs;for(Bs=void 0;e;){const n=e.next;e.next=void 0,e.flags&=-9,e=n}}let t;for(;Fs;){let e=Fs;for(Fs=void 0;e;){const n=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(i){t||(t=i)}e=n}}if(t)throw t}function ad(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function od(t){let e,n=t.depsTail,i=n;for(;i;){const r=i.prevDep;i.version===-1?(i===n&&(n=r),tu(i),n_(i)):e=i,i.dep.activeLink=i.prevActiveLink,i.prevActiveLink=void 0,i=r}t.deps=e,t.depsTail=n}function Nl(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(ld(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function ld(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===js))return;t.globalVersion=js;const e=t.dep;if(t.flags|=2,e.version>0&&!t.isSSR&&t.deps&&!Nl(t)){t.flags&=-3;return}const n=wt,i=Bn;wt=t,Bn=!0;try{ad(t);const r=t.fn(t._value);(e.version===0||ji(r,t._value))&&(t._value=r,e.version++)}catch(r){throw e.version++,r}finally{wt=n,Bn=i,od(t),t.flags&=-3}}function tu(t,e=!1){const{dep:n,prevSub:i,nextSub:r}=t;if(i&&(i.nextSub=r,t.prevSub=void 0),r&&(r.prevSub=i,t.nextSub=void 0),n.subs===t&&(n.subs=i,!i&&n.computed)){n.computed.flags&=-5;for(let s=n.computed.deps;s;s=s.nextDep)tu(s,!0)}!e&&!--n.sc&&n.map&&n.map.delete(n.key)}function n_(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let Bn=!0;const cd=[];function Qi(){cd.push(Bn),Bn=!1}function er(){const t=cd.pop();Bn=t===void 0?!0:t}function Wu(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=wt;wt=void 0;try{e()}finally{wt=n}}}let js=0;class i_{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class nu{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0}track(e){if(!wt||!Bn||wt===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==wt)n=this.activeLink=new i_(wt,this),wt.deps?(n.prevDep=wt.depsTail,wt.depsTail.nextDep=n,wt.depsTail=n):wt.deps=wt.depsTail=n,ud(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const i=n.nextDep;i.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=i),n.prevDep=wt.depsTail,n.nextDep=void 0,wt.depsTail.nextDep=n,wt.depsTail=n,wt.deps===n&&(wt.deps=i)}return n}trigger(e){this.version++,js++,this.notify(e)}notify(e){Qc();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{eu()}}}function ud(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let i=e.deps;i;i=i.nextDep)ud(i)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const Ol=new WeakMap,wr=Symbol(""),Fl=Symbol(""),qs=Symbol("");function tn(t,e,n){if(Bn&&wt){let i=Ol.get(t);i||Ol.set(t,i=new Map);let r=i.get(n);r||(i.set(n,r=new nu),r.map=i,r.key=n),r.track()}}function pi(t,e,n,i,r,s){const a=Ol.get(t);if(!a){js++;return}const o=l=>{l&&l.trigger()};if(Qc(),e==="clear")a.forEach(o);else{const l=st(t),f=l&&Kc(n);if(l&&n==="length"){const u=Number(i);a.forEach((d,c)=>{(c==="length"||c===qs||!ms(c)&&c>=u)&&o(d)})}else switch((n!==void 0||a.has(void 0))&&o(a.get(n)),f&&o(a.get(qs)),e){case"add":l?f&&o(a.get("length")):(o(a.get(wr)),Ns(t)&&o(a.get(Fl)));break;case"delete":l||(o(a.get(wr)),Ns(t)&&o(a.get(Fl)));break;case"set":Ns(t)&&o(a.get(wr));break}}eu()}function Nr(t){const e=gt(t);return e===t?e:(tn(e,"iterate",qs),zn(t)?e:e.map(on))}function iu(t){return tn(t=gt(t),"iterate",qs),t}const r_={__proto__:null,[Symbol.iterator](){return Vo(this,Symbol.iterator,on)},concat(...t){return Nr(this).concat(...t.map(e=>st(e)?Nr(e):e))},entries(){return Vo(this,"entries",t=>(t[1]=on(t[1]),t))},every(t,e){return si(this,"every",t,e,void 0,arguments)},filter(t,e){return si(this,"filter",t,e,n=>n.map(on),arguments)},find(t,e){return si(this,"find",t,e,on,arguments)},findIndex(t,e){return si(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return si(this,"findLast",t,e,on,arguments)},findLastIndex(t,e){return si(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return si(this,"forEach",t,e,void 0,arguments)},includes(...t){return Go(this,"includes",t)},indexOf(...t){return Go(this,"indexOf",t)},join(t){return Nr(this).join(t)},lastIndexOf(...t){return Go(this,"lastIndexOf",t)},map(t,e){return si(this,"map",t,e,void 0,arguments)},pop(){return bs(this,"pop")},push(...t){return bs(this,"push",t)},reduce(t,...e){return Xu(this,"reduce",t,e)},reduceRight(t,...e){return Xu(this,"reduceRight",t,e)},shift(){return bs(this,"shift")},some(t,e){return si(this,"some",t,e,void 0,arguments)},splice(...t){return bs(this,"splice",t)},toReversed(){return Nr(this).toReversed()},toSorted(t){return Nr(this).toSorted(t)},toSpliced(...t){return Nr(this).toSpliced(...t)},unshift(...t){return bs(this,"unshift",t)},values(){return Vo(this,"values",on)}};function Vo(t,e,n){const i=iu(t),r=i[e]();return i!==t&&!zn(t)&&(r._next=r.next,r.next=()=>{const s=r._next();return s.value&&(s.value=n(s.value)),s}),r}const s_=Array.prototype;function si(t,e,n,i,r,s){const a=iu(t),o=a!==t&&!zn(t),l=a[e];if(l!==s_[e]){const d=l.apply(t,s);return o?on(d):d}let f=n;a!==t&&(o?f=function(d,c){return n.call(this,on(d),c,t)}:n.length>2&&(f=function(d,c){return n.call(this,d,c,t)}));const u=l.call(a,f,i);return o&&r?r(u):u}function Xu(t,e,n,i){const r=iu(t);let s=n;return r!==t&&(zn(t)?n.length>3&&(s=function(a,o,l){return n.call(this,a,o,l,t)}):s=function(a,o,l){return n.call(this,a,on(o),l,t)}),r[e](s,...i)}function Go(t,e,n){const i=gt(t);tn(i,"iterate",qs);const r=i[e](...n);return(r===-1||r===!1)&&au(n[0])?(n[0]=gt(n[0]),i[e](...n)):r}function bs(t,e,n=[]){Qi(),Qc();const i=gt(t)[e].apply(t,n);return eu(),er(),i}const a_=qc("__proto__,__v_isRef,__isVue"),fd=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(ms));function o_(t){ms(t)||(t=String(t));const e=gt(this);return tn(e,"has",t),e.hasOwnProperty(t)}class hd{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,i){const r=this._isReadonly,s=this._isShallow;if(n==="__v_isReactive")return!r;if(n==="__v_isReadonly")return r;if(n==="__v_isShallow")return s;if(n==="__v_raw")return i===(r?s?g_:_d:s?md:pd).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(i)?e:void 0;const a=st(e);if(!r){let l;if(a&&(l=r_[n]))return l;if(n==="hasOwnProperty")return o_}const o=Reflect.get(e,n,nn(e)?e:i);return(ms(n)?fd.has(n):a_(n))||(r||tn(e,"get",n),s)?o:nn(o)?a&&Kc(n)?o:o.value:Ut(o)?r?vd(o):yo(o):o}}class dd extends hd{constructor(e=!1){super(!1,e)}set(e,n,i,r){let s=e[n];if(!this._isShallow){const l=Pr(s);if(!zn(i)&&!Pr(i)&&(s=gt(s),i=gt(i)),!st(e)&&nn(s)&&!nn(i))return l?!1:(s.value=i,!0)}const a=st(e)&&Kc(n)?Number(n)<e.length:vt(e,n),o=Reflect.set(e,n,i,nn(e)?e:r);return e===gt(r)&&(a?ji(i,s)&&pi(e,"set",n,i):pi(e,"add",n,i)),o}deleteProperty(e,n){const i=vt(e,n);e[n];const r=Reflect.deleteProperty(e,n);return r&&i&&pi(e,"delete",n,void 0),r}has(e,n){const i=Reflect.has(e,n);return(!ms(n)||!fd.has(n))&&tn(e,"has",n),i}ownKeys(e){return tn(e,"iterate",st(e)?"length":wr),Reflect.ownKeys(e)}}class l_ extends hd{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const c_=new dd,u_=new l_,f_=new dd(!0),Bl=t=>t,da=t=>Reflect.getPrototypeOf(t);function h_(t,e,n){return function(...i){const r=this.__v_raw,s=gt(r),a=Ns(s),o=t==="entries"||t===Symbol.iterator&&a,l=t==="keys"&&a,f=r[t](...i),u=n?Bl:e?zl:on;return!e&&tn(s,"iterate",l?Fl:wr),{next(){const{value:d,done:c}=f.next();return c?{value:d,done:c}:{value:o?[u(d[0]),u(d[1])]:u(d),done:c}},[Symbol.iterator](){return this}}}}function pa(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function d_(t,e){const n={get(r){const s=this.__v_raw,a=gt(s),o=gt(r);t||(ji(r,o)&&tn(a,"get",r),tn(a,"get",o));const{has:l}=da(a),f=e?Bl:t?zl:on;if(l.call(a,r))return f(s.get(r));if(l.call(a,o))return f(s.get(o));s!==a&&s.get(r)},get size(){const r=this.__v_raw;return!t&&tn(gt(r),"iterate",wr),Reflect.get(r,"size",r)},has(r){const s=this.__v_raw,a=gt(s),o=gt(r);return t||(ji(r,o)&&tn(a,"has",r),tn(a,"has",o)),r===o?s.has(r):s.has(r)||s.has(o)},forEach(r,s){const a=this,o=a.__v_raw,l=gt(o),f=e?Bl:t?zl:on;return!t&&tn(l,"iterate",wr),o.forEach((u,d)=>r.call(s,f(u),f(d),a))}};return zt(n,t?{add:pa("add"),set:pa("set"),delete:pa("delete"),clear:pa("clear")}:{add(r){!e&&!zn(r)&&!Pr(r)&&(r=gt(r));const s=gt(this);return da(s).has.call(s,r)||(s.add(r),pi(s,"add",r,r)),this},set(r,s){!e&&!zn(s)&&!Pr(s)&&(s=gt(s));const a=gt(this),{has:o,get:l}=da(a);let f=o.call(a,r);f||(r=gt(r),f=o.call(a,r));const u=l.call(a,r);return a.set(r,s),f?ji(s,u)&&pi(a,"set",r,s):pi(a,"add",r,s),this},delete(r){const s=gt(this),{has:a,get:o}=da(s);let l=a.call(s,r);l||(r=gt(r),l=a.call(s,r)),o&&o.call(s,r);const f=s.delete(r);return l&&pi(s,"delete",r,void 0),f},clear(){const r=gt(this),s=r.size!==0,a=r.clear();return s&&pi(r,"clear",void 0,void 0),a}}),["keys","values","entries",Symbol.iterator].forEach(r=>{n[r]=h_(r,t,e)}),n}function ru(t,e){const n=d_(t,e);return(i,r,s)=>r==="__v_isReactive"?!t:r==="__v_isReadonly"?t:r==="__v_raw"?i:Reflect.get(vt(n,r)&&r in i?n:i,r,s)}const p_={get:ru(!1,!1)},m_={get:ru(!1,!0)},__={get:ru(!0,!1)},pd=new WeakMap,md=new WeakMap,_d=new WeakMap,g_=new WeakMap;function v_(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function x_(t){return t.__v_skip||!Object.isExtensible(t)?0:v_(Vm(t))}function yo(t){return Pr(t)?t:su(t,!1,c_,p_,pd)}function gd(t){return su(t,!1,f_,m_,md)}function vd(t){return su(t,!0,u_,__,_d)}function su(t,e,n,i,r){if(!Ut(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const s=r.get(t);if(s)return s;const a=x_(t);if(a===0)return t;const o=new Proxy(t,a===2?i:n);return r.set(t,o),o}function zs(t){return Pr(t)?zs(t.__v_raw):!!(t&&t.__v_isReactive)}function Pr(t){return!!(t&&t.__v_isReadonly)}function zn(t){return!!(t&&t.__v_isShallow)}function au(t){return t?!!t.__v_raw:!1}function gt(t){const e=t&&t.__v_raw;return e?gt(e):t}function y_(t){return!vt(t,"__v_skip")&&Object.isExtensible(t)&&td(t,"__v_skip",!0),t}const on=t=>Ut(t)?yo(t):t,zl=t=>Ut(t)?vd(t):t;function nn(t){return t?t.__v_isRef===!0:!1}function to(t){return xd(t,!1)}function S_(t){return xd(t,!0)}function xd(t,e){return nn(t)?t:new M_(t,e)}class M_{constructor(e,n){this.dep=new nu,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:gt(e),this._value=n?e:on(e),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(e){const n=this._rawValue,i=this.__v_isShallow||zn(e)||Pr(e);e=i?e:gt(e),ji(e,n)&&(this._rawValue=e,this._value=i?e:on(e),this.dep.trigger())}}function qi(t){return nn(t)?t.value:t}const b_={get:(t,e,n)=>e==="__v_raw"?t:qi(Reflect.get(t,e,n)),set:(t,e,n,i)=>{const r=t[e];return nn(r)&&!nn(n)?(r.value=n,!0):Reflect.set(t,e,n,i)}};function yd(t){return zs(t)?t:new Proxy(t,b_)}class T_{constructor(e,n,i){this.fn=e,this.setter=n,this._value=void 0,this.dep=new nu(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=js-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=i}notify(){if(this.flags|=16,!(this.flags&8)&&wt!==this)return sd(this,!0),!0}get value(){const e=this.dep.track();return ld(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function E_(t,e,n=!1){let i,r;return ot(t)?i=t:(i=t.get,r=t.set),new T_(i,r,n)}const ma={},no=new WeakMap;let mr;function w_(t,e=!1,n=mr){if(n){let i=no.get(n);i||no.set(n,i=[]),i.push(t)}}function A_(t,e,n=At){const{immediate:i,deep:r,once:s,scheduler:a,augmentJob:o,call:l}=n,f=w=>r?w:zn(w)||r===!1||r===0?Vi(w,1):Vi(w);let u,d,c,m,p=!1,y=!1;if(nn(t)?(d=()=>t.value,p=zn(t)):zs(t)?(d=()=>f(t),p=!0):st(t)?(y=!0,p=t.some(w=>zs(w)||zn(w)),d=()=>t.map(w=>{if(nn(w))return w.value;if(zs(w))return f(w);if(ot(w))return l?l(w,2):w()})):ot(t)?e?d=l?()=>l(t,2):t:d=()=>{if(c){Qi();try{c()}finally{er()}}const w=mr;mr=u;try{return l?l(t,3,[m]):t(m)}finally{mr=w}}:d=Zn,e&&r){const w=d,V=r===!0?1/0:r;d=()=>Vi(w(),V)}const g=t_(),h=()=>{u.stop(),g&&$c(g.effects,u)};if(s&&e){const w=e;e=(...V)=>{w(...V),h()}}let T=y?new Array(t.length).fill(ma):ma;const M=w=>{if(!(!(u.flags&1)||!u.dirty&&!w))if(e){const V=u.run();if(r||p||(y?V.some((L,z)=>ji(L,T[z])):ji(V,T))){c&&c();const L=mr;mr=u;try{const z=[V,T===ma?void 0:y&&T[0]===ma?[]:T,m];l?l(e,3,z):e(...z),T=V}finally{mr=L}}}else u.run()};return o&&o(M),u=new id(d),u.scheduler=a?()=>a(M,!1):M,m=w=>w_(w,!1,u),c=u.onStop=()=>{const w=no.get(u);if(w){if(l)l(w,4);else for(const V of w)V();no.delete(u)}},e?i?M(!0):T=u.run():a?a(M.bind(null,!0),!0):u.run(),h.pause=u.pause.bind(u),h.resume=u.resume.bind(u),h.stop=h,h}function Vi(t,e=1/0,n){if(e<=0||!Ut(t)||t.__v_skip||(n=n||new Set,n.has(t)))return t;if(n.add(t),e--,nn(t))Vi(t.value,e,n);else if(st(t))for(let i=0;i<t.length;i++)Vi(t[i],e,n);else if(km(t)||Ns(t))t.forEach(i=>{Vi(i,e,n)});else if(Gm(t)){for(const i in t)Vi(t[i],e,n);for(const i of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,i)&&Vi(t[i],e,n)}return t}/**
* @vue/runtime-core v3.5.12
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function ia(t,e,n,i){try{return i?t(...i):t()}catch(r){So(r,e,n)}}function kn(t,e,n,i){if(ot(t)){const r=ia(t,e,n,i);return r&&ed(r)&&r.catch(s=>{So(s,e,n)}),r}if(st(t)){const r=[];for(let s=0;s<t.length;s++)r.push(kn(t[s],e,n,i));return r}}function So(t,e,n,i=!0){const r=e?e.vnode:null,{errorHandler:s,throwUnhandledErrorInProduction:a}=e&&e.appContext.config||At;if(e){let o=e.parent;const l=e.proxy,f=`https://vuejs.org/error-reference/#runtime-${n}`;for(;o;){const u=o.ec;if(u){for(let d=0;d<u.length;d++)if(u[d](t,l,f)===!1)return}o=o.parent}if(s){Qi(),ia(s,null,10,[t,l,f]),er();return}}C_(t,n,r,i,a)}function C_(t,e,n,i=!0,r=!1){if(r)throw t}const ln=[];let Gn=-1;const ts=[];let Fi=null,Kr=0;const Sd=Promise.resolve();let io=null;function Md(t){const e=io||Sd;return t?e.then(this?t.bind(this):t):e}function R_(t){let e=Gn+1,n=ln.length;for(;e<n;){const i=e+n>>>1,r=ln[i],s=Ys(r);s<t||s===t&&r.flags&2?e=i+1:n=i}return e}function ou(t){if(!(t.flags&1)){const e=Ys(t),n=ln[ln.length-1];!n||!(t.flags&2)&&e>=Ys(n)?ln.push(t):ln.splice(R_(e),0,t),t.flags|=1,bd()}}function bd(){io||(io=Sd.then(Ed))}function P_(t){st(t)?ts.push(...t):Fi&&t.id===-1?Fi.splice(Kr+1,0,t):t.flags&1||(ts.push(t),t.flags|=1),bd()}function ju(t,e,n=Gn+1){for(;n<ln.length;n++){const i=ln[n];if(i&&i.flags&2){if(t&&i.id!==t.uid)continue;ln.splice(n,1),n--,i.flags&4&&(i.flags&=-2),i(),i.flags&4||(i.flags&=-2)}}}function Td(t){if(ts.length){const e=[...new Set(ts)].sort((n,i)=>Ys(n)-Ys(i));if(ts.length=0,Fi){Fi.push(...e);return}for(Fi=e,Kr=0;Kr<Fi.length;Kr++){const n=Fi[Kr];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}Fi=null,Kr=0}}const Ys=t=>t.id==null?t.flags&2?-1:1/0:t.id;function Ed(t){try{for(Gn=0;Gn<ln.length;Gn++){const e=ln[Gn];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),ia(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;Gn<ln.length;Gn++){const e=ln[Gn];e&&(e.flags&=-2)}Gn=-1,ln.length=0,Td(),io=null,(ln.length||ts.length)&&Ed()}}let En=null,wd=null;function ro(t){const e=En;return En=t,wd=t&&t.type.__scopeId||null,e}function xr(t,e=En,n){if(!e||t._n)return t;const i=(...r)=>{i._d&&nf(-1);const s=ro(e);let a;try{a=t(...r)}finally{ro(s),i._d&&nf(1)}return a};return i._n=!0,i._c=!0,i._d=!0,i}function sr(t,e,n,i){const r=t.dirs,s=e&&e.dirs;for(let a=0;a<r.length;a++){const o=r[a];s&&(o.oldValue=s[a].value);let l=o.dir[i];l&&(Qi(),kn(l,n,8,[t.el,o,t,e]),er())}}const D_=Symbol("_vte"),Ad=t=>t.__isTeleport,Bi=Symbol("_leaveCb"),_a=Symbol("_enterCb");function L_(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return To(()=>{t.isMounted=!0}),Od(()=>{t.isUnmounting=!0}),t}const Mn=[Function,Array],Cd={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Mn,onEnter:Mn,onAfterEnter:Mn,onEnterCancelled:Mn,onBeforeLeave:Mn,onLeave:Mn,onAfterLeave:Mn,onLeaveCancelled:Mn,onBeforeAppear:Mn,onAppear:Mn,onAfterAppear:Mn,onAppearCancelled:Mn},Rd=t=>{const e=t.subTree;return e.component?Rd(e.component):e},I_={name:"BaseTransition",props:Cd,setup(t,{slots:e}){const n=Dg(),i=L_();return()=>{const r=e.default&&Ld(e.default(),!0);if(!r||!r.length)return;const s=Pd(r),a=gt(t),{mode:o}=a;if(i.isLeaving)return Wo(s);const l=qu(s);if(!l)return Wo(s);let f=kl(l,a,i,n,c=>f=c);l.type!==dn&&$s(l,f);const u=n.subTree,d=u&&qu(u);if(d&&d.type!==dn&&!yr(l,d)&&Rd(n).type!==dn){const c=kl(d,a,i,n);if($s(d,c),o==="out-in"&&l.type!==dn)return i.isLeaving=!0,c.afterLeave=()=>{i.isLeaving=!1,n.job.flags&8||n.update(),delete c.afterLeave},Wo(s);o==="in-out"&&l.type!==dn&&(c.delayLeave=(m,p,y)=>{const g=Dd(i,d);g[String(d.key)]=d,m[Bi]=()=>{p(),m[Bi]=void 0,delete f.delayedLeave},f.delayedLeave=y})}return s}}};function Pd(t){let e=t[0];if(t.length>1){for(const n of t)if(n.type!==dn){e=n;break}}return e}const U_=I_;function Dd(t,e){const{leavingVNodes:n}=t;let i=n.get(e.type);return i||(i=Object.create(null),n.set(e.type,i)),i}function kl(t,e,n,i,r){const{appear:s,mode:a,persisted:o=!1,onBeforeEnter:l,onEnter:f,onAfterEnter:u,onEnterCancelled:d,onBeforeLeave:c,onLeave:m,onAfterLeave:p,onLeaveCancelled:y,onBeforeAppear:g,onAppear:h,onAfterAppear:T,onAppearCancelled:M}=e,w=String(t.key),V=Dd(n,t),L=($,E)=>{$&&kn($,i,9,E)},z=($,E)=>{const R=E[1];L($,E),st($)?$.every(G=>G.length<=1)&&R():$.length<=1&&R()},X={mode:a,persisted:o,beforeEnter($){let E=l;if(!n.isMounted)if(s)E=g||l;else return;$[Bi]&&$[Bi](!0);const R=V[w];R&&yr(t,R)&&R.el[Bi]&&R.el[Bi](),L(E,[$])},enter($){let E=f,R=u,G=d;if(!n.isMounted)if(s)E=h||f,R=T||u,G=M||d;else return;let q=!1;const ce=$[_a]=re=>{q||(q=!0,re?L(G,[$]):L(R,[$]),X.delayedLeave&&X.delayedLeave(),$[_a]=void 0)};E?z(E,[$,ce]):ce()},leave($,E){const R=String(t.key);if($[_a]&&$[_a](!0),n.isUnmounting)return E();L(c,[$]);let G=!1;const q=$[Bi]=ce=>{G||(G=!0,E(),ce?L(y,[$]):L(p,[$]),$[Bi]=void 0,V[R]===t&&delete V[R])};V[R]=t,m?z(m,[$,q]):q()},clone($){const E=kl($,e,n,i,r);return r&&r(E),E}};return X}function Wo(t){if(Mo(t))return t=Ki(t),t.children=null,t}function qu(t){if(!Mo(t))return Ad(t.type)&&t.children?Pd(t.children):t;const{shapeFlag:e,children:n}=t;if(n){if(e&16)return n[0];if(e&32&&ot(n.default))return n.default()}}function $s(t,e){t.shapeFlag&6&&t.component?(t.transition=e,$s(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function Ld(t,e=!1,n){let i=[],r=0;for(let s=0;s<t.length;s++){let a=t[s];const o=n==null?a.key:String(n)+String(a.key!=null?a.key:s);a.type===Xn?(a.patchFlag&128&&r++,i=i.concat(Ld(a.children,e,o))):(e||a.type!==dn)&&i.push(o!=null?Ki(a,{key:o}):a)}if(r>1)for(let s=0;s<i.length;s++)i[s].patchFlag=-2;return i}/*! #__NO_SIDE_EFFECTS__ */function Id(t,e){return ot(t)?zt({name:t.name},e,{setup:t}):t}function Ud(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}function Hl(t,e,n,i,r=!1){if(st(t)){t.forEach((p,y)=>Hl(p,e&&(st(e)?e[y]:e),n,i,r));return}if(ks(i)&&!r)return;const s=i.shapeFlag&4?hu(i.component):i.el,a=r?null:s,{i:o,r:l}=t,f=e&&e.r,u=o.refs===At?o.refs={}:o.refs,d=o.setupState,c=gt(d),m=d===At?()=>!1:p=>vt(c,p);if(f!=null&&f!==l&&(kt(f)?(u[f]=null,m(f)&&(d[f]=null)):nn(f)&&(f.value=null)),ot(l))ia(l,o,12,[a,u]);else{const p=kt(l),y=nn(l);if(p||y){const g=()=>{if(t.f){const h=p?m(l)?d[l]:u[l]:l.value;r?st(h)&&$c(h,s):st(h)?h.includes(s)||h.push(s):p?(u[l]=[s],m(l)&&(d[l]=u[l])):(l.value=[s],t.k&&(u[t.k]=l.value))}else p?(u[l]=a,m(l)&&(d[l]=a)):y&&(l.value=a,t.k&&(u[t.k]=a))};a?(g.id=-1,xn(g,n)):g()}}}xo().requestIdleCallback;xo().cancelIdleCallback;const ks=t=>!!t.type.__asyncLoader,Mo=t=>t.type.__isKeepAlive;function N_(t,e){Nd(t,"a",e)}function O_(t,e){Nd(t,"da",e)}function Nd(t,e,n=qt){const i=t.__wdc||(t.__wdc=()=>{let r=n;for(;r;){if(r.isDeactivated)return;r=r.parent}return t()});if(bo(e,i,n),n){let r=n.parent;for(;r&&r.parent;)Mo(r.parent.vnode)&&F_(i,e,n,r),r=r.parent}}function F_(t,e,n,i){const r=bo(e,t,i,!0);Fd(()=>{$c(i[e],r)},n)}function bo(t,e,n=qt,i=!1){if(n){const r=n[t]||(n[t]=[]),s=e.__weh||(e.__weh=(...a)=>{Qi();const o=ra(n),l=kn(e,n,t,a);return o(),er(),l});return i?r.unshift(s):r.push(s),s}}const Ti=t=>(e,n=qt)=>{(!Zs||t==="sp")&&bo(t,(...i)=>e(...i),n)},B_=Ti("bm"),To=Ti("m"),z_=Ti("bu"),k_=Ti("u"),Od=Ti("bum"),Fd=Ti("um"),H_=Ti("sp"),V_=Ti("rtg"),G_=Ti("rtc");function W_(t,e=qt){bo("ec",t,e)}const X_="components";function lu(t,e){return q_(X_,t,!0,e)||t}const j_=Symbol.for("v-ndc");function q_(t,e,n=!0,i=!1){const r=En||qt;if(r){const s=r.type;{const o=Og(s,!1);if(o&&(o===e||o===Cn(e)||o===vo(Cn(e))))return s}const a=Yu(r[t]||s[t],e)||Yu(r.appContext[t],e);return!a&&i?s:a}}function Yu(t,e){return t&&(t[e]||t[Cn(e)]||t[vo(Cn(e))])}const Vl=t=>t?ip(t)?hu(t):Vl(t.parent):null,Hs=zt(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Vl(t.parent),$root:t=>Vl(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>cu(t),$forceUpdate:t=>t.f||(t.f=()=>{ou(t.update)}),$nextTick:t=>t.n||(t.n=Md.bind(t.proxy)),$watch:t=>pg.bind(t)}),Xo=(t,e)=>t!==At&&!t.__isScriptSetup&&vt(t,e),Y_={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:i,data:r,props:s,accessCache:a,type:o,appContext:l}=t;let f;if(e[0]!=="$"){const m=a[e];if(m!==void 0)switch(m){case 1:return i[e];case 2:return r[e];case 4:return n[e];case 3:return s[e]}else{if(Xo(i,e))return a[e]=1,i[e];if(r!==At&&vt(r,e))return a[e]=2,r[e];if((f=t.propsOptions[0])&&vt(f,e))return a[e]=3,s[e];if(n!==At&&vt(n,e))return a[e]=4,n[e];Gl&&(a[e]=0)}}const u=Hs[e];let d,c;if(u)return e==="$attrs"&&tn(t.attrs,"get",""),u(t);if((d=o.__cssModules)&&(d=d[e]))return d;if(n!==At&&vt(n,e))return a[e]=4,n[e];if(c=l.config.globalProperties,vt(c,e))return c[e]},set({_:t},e,n){const{data:i,setupState:r,ctx:s}=t;return Xo(r,e)?(r[e]=n,!0):i!==At&&vt(i,e)?(i[e]=n,!0):vt(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(s[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:i,appContext:r,propsOptions:s}},a){let o;return!!n[a]||t!==At&&vt(t,a)||Xo(e,a)||(o=s[0])&&vt(o,a)||vt(i,a)||vt(Hs,a)||vt(r.config.globalProperties,a)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:vt(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function $u(t){return st(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let Gl=!0;function $_(t){const e=cu(t),n=t.proxy,i=t.ctx;Gl=!1,e.beforeCreate&&Ku(e.beforeCreate,t,"bc");const{data:r,computed:s,methods:a,watch:o,provide:l,inject:f,created:u,beforeMount:d,mounted:c,beforeUpdate:m,updated:p,activated:y,deactivated:g,beforeDestroy:h,beforeUnmount:T,destroyed:M,unmounted:w,render:V,renderTracked:L,renderTriggered:z,errorCaptured:X,serverPrefetch:$,expose:E,inheritAttrs:R,components:G,directives:q,filters:ce}=e;if(f&&K_(f,i,null),a)for(const me in a){const ne=a[me];ot(ne)&&(i[me]=ne.bind(n))}if(r){const me=r.call(n,n);Ut(me)&&(t.data=yo(me))}if(Gl=!0,s)for(const me in s){const ne=s[me],Ne=ot(ne)?ne.bind(n,n):ot(ne.get)?ne.get.bind(n,n):Zn,ze=!ot(ne)&&ot(ne.set)?ne.set.bind(n):Zn,ke=In({get:Ne,set:ze});Object.defineProperty(i,me,{enumerable:!0,configurable:!0,get:()=>ke.value,set:Ze=>ke.value=Ze})}if(o)for(const me in o)Bd(o[me],i,n,me);if(l){const me=ot(l)?l.call(n):l;Reflect.ownKeys(me).forEach(ne=>{Va(ne,me[ne])})}u&&Ku(u,t,"c");function ae(me,ne){st(ne)?ne.forEach(Ne=>me(Ne.bind(n))):ne&&me(ne.bind(n))}if(ae(B_,d),ae(To,c),ae(z_,m),ae(k_,p),ae(N_,y),ae(O_,g),ae(W_,X),ae(G_,L),ae(V_,z),ae(Od,T),ae(Fd,w),ae(H_,$),st(E))if(E.length){const me=t.exposed||(t.exposed={});E.forEach(ne=>{Object.defineProperty(me,ne,{get:()=>n[ne],set:Ne=>n[ne]=Ne})})}else t.exposed||(t.exposed={});V&&t.render===Zn&&(t.render=V),R!=null&&(t.inheritAttrs=R),G&&(t.components=G),q&&(t.directives=q),$&&Ud(t)}function K_(t,e,n=Zn){st(t)&&(t=Wl(t));for(const i in t){const r=t[i];let s;Ut(r)?"default"in r?s=xi(r.from||i,r.default,!0):s=xi(r.from||i):s=xi(r),nn(s)?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>s.value,set:a=>s.value=a}):e[i]=s}}function Ku(t,e,n){kn(st(t)?t.map(i=>i.bind(e.proxy)):t.bind(e.proxy),e,n)}function Bd(t,e,n,i){let r=i.includes(".")?Jd(n,i):()=>n[i];if(kt(t)){const s=e[t];ot(s)&&Ga(r,s)}else if(ot(t))Ga(r,t.bind(n));else if(Ut(t))if(st(t))t.forEach(s=>Bd(s,e,n,i));else{const s=ot(t.handler)?t.handler.bind(n):e[t.handler];ot(s)&&Ga(r,s,t)}}function cu(t){const e=t.type,{mixins:n,extends:i}=e,{mixins:r,optionsCache:s,config:{optionMergeStrategies:a}}=t.appContext,o=s.get(e);let l;return o?l=o:!r.length&&!n&&!i?l=e:(l={},r.length&&r.forEach(f=>so(l,f,a,!0)),so(l,e,a)),Ut(e)&&s.set(e,l),l}function so(t,e,n,i=!1){const{mixins:r,extends:s}=e;s&&so(t,s,n,!0),r&&r.forEach(a=>so(t,a,n,!0));for(const a in e)if(!(i&&a==="expose")){const o=Z_[a]||n&&n[a];t[a]=o?o(t[a],e[a]):e[a]}return t}const Z_={data:Zu,props:Ju,emits:Ju,methods:Ls,computed:Ls,beforeCreate:sn,created:sn,beforeMount:sn,mounted:sn,beforeUpdate:sn,updated:sn,beforeDestroy:sn,beforeUnmount:sn,destroyed:sn,unmounted:sn,activated:sn,deactivated:sn,errorCaptured:sn,serverPrefetch:sn,components:Ls,directives:Ls,watch:Q_,provide:Zu,inject:J_};function Zu(t,e){return e?t?function(){return zt(ot(t)?t.call(this,this):t,ot(e)?e.call(this,this):e)}:e:t}function J_(t,e){return Ls(Wl(t),Wl(e))}function Wl(t){if(st(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function sn(t,e){return t?[...new Set([].concat(t,e))]:e}function Ls(t,e){return t?zt(Object.create(null),t,e):e}function Ju(t,e){return t?st(t)&&st(e)?[...new Set([...t,...e])]:zt(Object.create(null),$u(t),$u(e??{})):e}function Q_(t,e){if(!t)return e;if(!e)return t;const n=zt(Object.create(null),t);for(const i in e)n[i]=sn(t[i],e[i]);return n}function zd(){return{app:null,config:{isNativeTag:Bm,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let eg=0;function tg(t,e){return function(i,r=null){ot(i)||(i=zt({},i)),r!=null&&!Ut(r)&&(r=null);const s=zd(),a=new WeakSet,o=[];let l=!1;const f=s.app={_uid:eg++,_component:i,_props:r,_container:null,_context:s,_instance:null,version:Bg,get config(){return s.config},set config(u){},use(u,...d){return a.has(u)||(u&&ot(u.install)?(a.add(u),u.install(f,...d)):ot(u)&&(a.add(u),u(f,...d))),f},mixin(u){return s.mixins.includes(u)||s.mixins.push(u),f},component(u,d){return d?(s.components[u]=d,f):s.components[u]},directive(u,d){return d?(s.directives[u]=d,f):s.directives[u]},mount(u,d,c){if(!l){const m=f._ceVNode||It(i,r);return m.appContext=s,c===!0?c="svg":c===!1&&(c=void 0),d&&e?e(m,u):t(m,u,c),l=!0,f._container=u,u.__vue_app__=f,hu(m.component)}},onUnmount(u){o.push(u)},unmount(){l&&(kn(o,f._instance,16),t(null,f._container),delete f._container.__vue_app__)},provide(u,d){return s.provides[u]=d,f},runWithContext(u){const d=ns;ns=f;try{return u()}finally{ns=d}}};return f}}let ns=null;function Va(t,e){if(qt){let n=qt.provides;const i=qt.parent&&qt.parent.provides;i===n&&(n=qt.provides=Object.create(i)),n[t]=e}}function xi(t,e,n=!1){const i=qt||En;if(i||ns){const r=ns?ns._context.provides:i?i.parent==null?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:void 0;if(r&&t in r)return r[t];if(arguments.length>1)return n&&ot(e)?e.call(i&&i.proxy):e}}const kd={},Hd=()=>Object.create(kd),Vd=t=>Object.getPrototypeOf(t)===kd;function ng(t,e,n,i=!1){const r={},s=Hd();t.propsDefaults=Object.create(null),Gd(t,e,r,s);for(const a in t.propsOptions[0])a in r||(r[a]=void 0);n?t.props=i?r:gd(r):t.type.props?t.props=r:t.props=s,t.attrs=s}function ig(t,e,n,i){const{props:r,attrs:s,vnode:{patchFlag:a}}=t,o=gt(r),[l]=t.propsOptions;let f=!1;if((i||a>0)&&!(a&16)){if(a&8){const u=t.vnode.dynamicProps;for(let d=0;d<u.length;d++){let c=u[d];if(Eo(t.emitsOptions,c))continue;const m=e[c];if(l)if(vt(s,c))m!==s[c]&&(s[c]=m,f=!0);else{const p=Cn(c);r[p]=Xl(l,o,p,m,t,!1)}else m!==s[c]&&(s[c]=m,f=!0)}}}else{Gd(t,e,r,s)&&(f=!0);let u;for(const d in o)(!e||!vt(e,d)&&((u=Ir(d))===d||!vt(e,u)))&&(l?n&&(n[d]!==void 0||n[u]!==void 0)&&(r[d]=Xl(l,o,d,void 0,t,!0)):delete r[d]);if(s!==o)for(const d in s)(!e||!vt(e,d))&&(delete s[d],f=!0)}f&&pi(t.attrs,"set","")}function Gd(t,e,n,i){const[r,s]=t.propsOptions;let a=!1,o;if(e)for(let l in e){if(Os(l))continue;const f=e[l];let u;r&&vt(r,u=Cn(l))?!s||!s.includes(u)?n[u]=f:(o||(o={}))[u]=f:Eo(t.emitsOptions,l)||(!(l in i)||f!==i[l])&&(i[l]=f,a=!0)}if(s){const l=gt(n),f=o||At;for(let u=0;u<s.length;u++){const d=s[u];n[d]=Xl(r,l,d,f[d],t,!vt(f,d))}}return a}function Xl(t,e,n,i,r,s){const a=t[n];if(a!=null){const o=vt(a,"default");if(o&&i===void 0){const l=a.default;if(a.type!==Function&&!a.skipFactory&&ot(l)){const{propsDefaults:f}=r;if(n in f)i=f[n];else{const u=ra(r);i=f[n]=l.call(null,e),u()}}else i=l;r.ce&&r.ce._setProp(n,i)}a[0]&&(s&&!o?i=!1:a[1]&&(i===""||i===Ir(n))&&(i=!0))}return i}const rg=new WeakMap;function Wd(t,e,n=!1){const i=n?rg:e.propsCache,r=i.get(t);if(r)return r;const s=t.props,a={},o=[];let l=!1;if(!ot(t)){const u=d=>{l=!0;const[c,m]=Wd(d,e,!0);zt(a,c),m&&o.push(...m)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!s&&!l)return Ut(t)&&i.set(t,es),es;if(st(s))for(let u=0;u<s.length;u++){const d=Cn(s[u]);Qu(d)&&(a[d]=At)}else if(s)for(const u in s){const d=Cn(u);if(Qu(d)){const c=s[u],m=a[d]=st(c)||ot(c)?{type:c}:zt({},c),p=m.type;let y=!1,g=!0;if(st(p))for(let h=0;h<p.length;++h){const T=p[h],M=ot(T)&&T.name;if(M==="Boolean"){y=!0;break}else M==="String"&&(g=!1)}else y=ot(p)&&p.name==="Boolean";m[0]=y,m[1]=g,(y||vt(m,"default"))&&o.push(d)}}const f=[a,o];return Ut(t)&&i.set(t,f),f}function Qu(t){return t[0]!=="$"&&!Os(t)}const Xd=t=>t[0]==="_"||t==="$stable",uu=t=>st(t)?t.map(jn):[jn(t)],sg=(t,e,n)=>{if(e._n)return e;const i=xr((...r)=>uu(e(...r)),n);return i._c=!1,i},jd=(t,e,n)=>{const i=t._ctx;for(const r in t){if(Xd(r))continue;const s=t[r];if(ot(s))e[r]=sg(r,s,i);else if(s!=null){const a=uu(s);e[r]=()=>a}}},qd=(t,e)=>{const n=uu(e);t.slots.default=()=>n},Yd=(t,e,n)=>{for(const i in e)(n||i!=="_")&&(t[i]=e[i])},ag=(t,e,n)=>{const i=t.slots=Hd();if(t.vnode.shapeFlag&32){const r=e._;r?(Yd(i,e,n),n&&td(i,"_",r,!0)):jd(e,i)}else e&&qd(t,e)},og=(t,e,n)=>{const{vnode:i,slots:r}=t;let s=!0,a=At;if(i.shapeFlag&32){const o=e._;o?n&&o===1?s=!1:Yd(r,e,n):(s=!e.$stable,jd(e,r)),a=e}else e&&(qd(t,e),a={default:1});if(s)for(const o in r)!Xd(o)&&a[o]==null&&delete r[o]},xn=Sg;function lg(t){return cg(t)}function cg(t,e){const n=xo();n.__VUE__=!0;const{insert:i,remove:r,patchProp:s,createElement:a,createText:o,createComment:l,setText:f,setElementText:u,parentNode:d,nextSibling:c,setScopeId:m=Zn,insertStaticContent:p}=t,y=(A,H,W,pe=null,oe=null,ye=null,ve=void 0,_=null,v=!!H.dynamicChildren)=>{if(A===H)return;A&&!yr(A,H)&&(pe=ee(A),Ze(A,oe,ye,!0),A=null),H.patchFlag===-2&&(v=!1,H.dynamicChildren=null);const{type:b,ref:P,shapeFlag:N}=H;switch(b){case wo:g(A,H,W,pe);break;case dn:h(A,H,W,pe);break;case Wa:A==null&&T(H,W,pe,ve);break;case Xn:G(A,H,W,pe,oe,ye,ve,_,v);break;default:N&1?V(A,H,W,pe,oe,ye,ve,_,v):N&6?q(A,H,W,pe,oe,ye,ve,_,v):(N&64||N&128)&&b.process(A,H,W,pe,oe,ye,ve,_,v,De)}P!=null&&oe&&Hl(P,A&&A.ref,ye,H||A,!H)},g=(A,H,W,pe)=>{if(A==null)i(H.el=o(H.children),W,pe);else{const oe=H.el=A.el;H.children!==A.children&&f(oe,H.children)}},h=(A,H,W,pe)=>{A==null?i(H.el=l(H.children||""),W,pe):H.el=A.el},T=(A,H,W,pe)=>{[A.el,A.anchor]=p(A.children,H,W,pe,A.el,A.anchor)},M=({el:A,anchor:H},W,pe)=>{let oe;for(;A&&A!==H;)oe=c(A),i(A,W,pe),A=oe;i(H,W,pe)},w=({el:A,anchor:H})=>{let W;for(;A&&A!==H;)W=c(A),r(A),A=W;r(H)},V=(A,H,W,pe,oe,ye,ve,_,v)=>{H.type==="svg"?ve="svg":H.type==="math"&&(ve="mathml"),A==null?L(H,W,pe,oe,ye,ve,_,v):$(A,H,oe,ye,ve,_,v)},L=(A,H,W,pe,oe,ye,ve,_)=>{let v,b;const{props:P,shapeFlag:N,transition:F,dirs:Z}=A;if(v=A.el=a(A.type,ye,P&&P.is,P),N&8?u(v,A.children):N&16&&X(A.children,v,null,pe,oe,jo(A,ye),ve,_),Z&&sr(A,null,pe,"created"),z(v,A,A.scopeId,ve,pe),P){for(const te in P)te!=="value"&&!Os(te)&&s(v,te,null,P[te],ye,pe);"value"in P&&s(v,"value",null,P.value,ye),(b=P.onVnodeBeforeMount)&&Vn(b,pe,A)}Z&&sr(A,null,pe,"beforeMount");const j=ug(oe,F);j&&F.beforeEnter(v),i(v,H,W),((b=P&&P.onVnodeMounted)||j||Z)&&xn(()=>{b&&Vn(b,pe,A),j&&F.enter(v),Z&&sr(A,null,pe,"mounted")},oe)},z=(A,H,W,pe,oe)=>{if(W&&m(A,W),pe)for(let ye=0;ye<pe.length;ye++)m(A,pe[ye]);if(oe){let ye=oe.subTree;if(H===ye||ep(ye.type)&&(ye.ssContent===H||ye.ssFallback===H)){const ve=oe.vnode;z(A,ve,ve.scopeId,ve.slotScopeIds,oe.parent)}}},X=(A,H,W,pe,oe,ye,ve,_,v=0)=>{for(let b=v;b<A.length;b++){const P=A[b]=_?zi(A[b]):jn(A[b]);y(null,P,H,W,pe,oe,ye,ve,_)}},$=(A,H,W,pe,oe,ye,ve)=>{const _=H.el=A.el;let{patchFlag:v,dynamicChildren:b,dirs:P}=H;v|=A.patchFlag&16;const N=A.props||At,F=H.props||At;let Z;if(W&&ar(W,!1),(Z=F.onVnodeBeforeUpdate)&&Vn(Z,W,H,A),P&&sr(H,A,W,"beforeUpdate"),W&&ar(W,!0),(N.innerHTML&&F.innerHTML==null||N.textContent&&F.textContent==null)&&u(_,""),b?E(A.dynamicChildren,b,_,W,pe,jo(H,oe),ye):ve||ne(A,H,_,null,W,pe,jo(H,oe),ye,!1),v>0){if(v&16)R(_,N,F,W,oe);else if(v&2&&N.class!==F.class&&s(_,"class",null,F.class,oe),v&4&&s(_,"style",N.style,F.style,oe),v&8){const j=H.dynamicProps;for(let te=0;te<j.length;te++){const be=j[te],se=N[be],ge=F[be];(ge!==se||be==="value")&&s(_,be,se,ge,oe,W)}}v&1&&A.children!==H.children&&u(_,H.children)}else!ve&&b==null&&R(_,N,F,W,oe);((Z=F.onVnodeUpdated)||P)&&xn(()=>{Z&&Vn(Z,W,H,A),P&&sr(H,A,W,"updated")},pe)},E=(A,H,W,pe,oe,ye,ve)=>{for(let _=0;_<H.length;_++){const v=A[_],b=H[_],P=v.el&&(v.type===Xn||!yr(v,b)||v.shapeFlag&70)?d(v.el):W;y(v,b,P,null,pe,oe,ye,ve,!0)}},R=(A,H,W,pe,oe)=>{if(H!==W){if(H!==At)for(const ye in H)!Os(ye)&&!(ye in W)&&s(A,ye,H[ye],null,oe,pe);for(const ye in W){if(Os(ye))continue;const ve=W[ye],_=H[ye];ve!==_&&ye!=="value"&&s(A,ye,_,ve,oe,pe)}"value"in W&&s(A,"value",H.value,W.value,oe)}},G=(A,H,W,pe,oe,ye,ve,_,v)=>{const b=H.el=A?A.el:o(""),P=H.anchor=A?A.anchor:o("");let{patchFlag:N,dynamicChildren:F,slotScopeIds:Z}=H;Z&&(_=_?_.concat(Z):Z),A==null?(i(b,W,pe),i(P,W,pe),X(H.children||[],W,P,oe,ye,ve,_,v)):N>0&&N&64&&F&&A.dynamicChildren?(E(A.dynamicChildren,F,W,oe,ye,ve,_),(H.key!=null||oe&&H===oe.subTree)&&$d(A,H,!0)):ne(A,H,W,P,oe,ye,ve,_,v)},q=(A,H,W,pe,oe,ye,ve,_,v)=>{H.slotScopeIds=_,A==null?H.shapeFlag&512?oe.ctx.activate(H,W,pe,ve,v):ce(H,W,pe,oe,ye,ve,v):re(A,H,v)},ce=(A,H,W,pe,oe,ye,ve)=>{const _=A.component=Pg(A,pe,oe);if(Mo(A)&&(_.ctx.renderer=De),Lg(_,!1,ve),_.asyncDep){if(oe&&oe.registerDep(_,ae,ve),!A.el){const v=_.subTree=It(dn);h(null,v,H,W)}}else ae(_,A,H,W,oe,ye,ve)},re=(A,H,W)=>{const pe=H.component=A.component;if(xg(A,H,W))if(pe.asyncDep&&!pe.asyncResolved){me(pe,H,W);return}else pe.next=H,pe.update();else H.el=A.el,pe.vnode=H},ae=(A,H,W,pe,oe,ye,ve)=>{const _=()=>{if(A.isMounted){let{next:N,bu:F,u:Z,parent:j,vnode:te}=A;{const Le=Kd(A);if(Le){N&&(N.el=te.el,me(A,N,ve)),Le.asyncDep.then(()=>{A.isUnmounted||_()});return}}let be=N,se;ar(A,!1),N?(N.el=te.el,me(A,N,ve)):N=te,F&&ko(F),(se=N.props&&N.props.onVnodeBeforeUpdate)&&Vn(se,j,N,te),ar(A,!0);const ge=qo(A),Fe=A.subTree;A.subTree=ge,y(Fe,ge,d(Fe.el),ee(Fe),A,oe,ye),N.el=ge.el,be===null&&yg(A,ge.el),Z&&xn(Z,oe),(se=N.props&&N.props.onVnodeUpdated)&&xn(()=>Vn(se,j,N,te),oe)}else{let N;const{el:F,props:Z}=H,{bm:j,m:te,parent:be,root:se,type:ge}=A,Fe=ks(H);if(ar(A,!1),j&&ko(j),!Fe&&(N=Z&&Z.onVnodeBeforeMount)&&Vn(N,be,H),ar(A,!0),F&&We){const Le=()=>{A.subTree=qo(A),We(F,A.subTree,A,oe,null)};Fe&&ge.__asyncHydrate?ge.__asyncHydrate(F,A,Le):Le()}else{se.ce&&se.ce._injectChildStyle(ge);const Le=A.subTree=qo(A);y(null,Le,W,pe,A,oe,ye),H.el=Le.el}if(te&&xn(te,oe),!Fe&&(N=Z&&Z.onVnodeMounted)){const Le=H;xn(()=>Vn(N,be,Le),oe)}(H.shapeFlag&256||be&&ks(be.vnode)&&be.vnode.shapeFlag&256)&&A.a&&xn(A.a,oe),A.isMounted=!0,H=W=pe=null}};A.scope.on();const v=A.effect=new id(_);A.scope.off();const b=A.update=v.run.bind(v),P=A.job=v.runIfDirty.bind(v);P.i=A,P.id=A.uid,v.scheduler=()=>ou(P),ar(A,!0),b()},me=(A,H,W)=>{H.component=A;const pe=A.vnode.props;A.vnode=H,A.next=null,ig(A,H.props,pe,W),og(A,H.children,W),Qi(),ju(A),er()},ne=(A,H,W,pe,oe,ye,ve,_,v=!1)=>{const b=A&&A.children,P=A?A.shapeFlag:0,N=H.children,{patchFlag:F,shapeFlag:Z}=H;if(F>0){if(F&128){ze(b,N,W,pe,oe,ye,ve,_,v);return}else if(F&256){Ne(b,N,W,pe,oe,ye,ve,_,v);return}}Z&8?(P&16&&Oe(b,oe,ye),N!==b&&u(W,N)):P&16?Z&16?ze(b,N,W,pe,oe,ye,ve,_,v):Oe(b,oe,ye,!0):(P&8&&u(W,""),Z&16&&X(N,W,pe,oe,ye,ve,_,v))},Ne=(A,H,W,pe,oe,ye,ve,_,v)=>{A=A||es,H=H||es;const b=A.length,P=H.length,N=Math.min(b,P);let F;for(F=0;F<N;F++){const Z=H[F]=v?zi(H[F]):jn(H[F]);y(A[F],Z,W,null,oe,ye,ve,_,v)}b>P?Oe(A,oe,ye,!0,!1,N):X(H,W,pe,oe,ye,ve,_,v,N)},ze=(A,H,W,pe,oe,ye,ve,_,v)=>{let b=0;const P=H.length;let N=A.length-1,F=P-1;for(;b<=N&&b<=F;){const Z=A[b],j=H[b]=v?zi(H[b]):jn(H[b]);if(yr(Z,j))y(Z,j,W,null,oe,ye,ve,_,v);else break;b++}for(;b<=N&&b<=F;){const Z=A[N],j=H[F]=v?zi(H[F]):jn(H[F]);if(yr(Z,j))y(Z,j,W,null,oe,ye,ve,_,v);else break;N--,F--}if(b>N){if(b<=F){const Z=F+1,j=Z<P?H[Z].el:pe;for(;b<=F;)y(null,H[b]=v?zi(H[b]):jn(H[b]),W,j,oe,ye,ve,_,v),b++}}else if(b>F)for(;b<=N;)Ze(A[b],oe,ye,!0),b++;else{const Z=b,j=b,te=new Map;for(b=j;b<=F;b++){const qe=H[b]=v?zi(H[b]):jn(H[b]);qe.key!=null&&te.set(qe.key,b)}let be,se=0;const ge=F-j+1;let Fe=!1,Le=0;const Ue=new Array(ge);for(b=0;b<ge;b++)Ue[b]=0;for(b=Z;b<=N;b++){const qe=A[b];if(se>=ge){Ze(qe,oe,ye,!0);continue}let it;if(qe.key!=null)it=te.get(qe.key);else for(be=j;be<=F;be++)if(Ue[be-j]===0&&yr(qe,H[be])){it=be;break}it===void 0?Ze(qe,oe,ye,!0):(Ue[it-j]=b+1,it>=Le?Le=it:Fe=!0,y(qe,H[it],W,null,oe,ye,ve,_,v),se++)}const $e=Fe?fg(Ue):es;for(be=$e.length-1,b=ge-1;b>=0;b--){const qe=j+b,it=H[qe],J=qe+1<P?H[qe+1].el:pe;Ue[b]===0?y(null,it,W,J,oe,ye,ve,_,v):Fe&&(be<0||b!==$e[be]?ke(it,W,J,2):be--)}}},ke=(A,H,W,pe,oe=null)=>{const{el:ye,type:ve,transition:_,children:v,shapeFlag:b}=A;if(b&6){ke(A.component.subTree,H,W,pe);return}if(b&128){A.suspense.move(H,W,pe);return}if(b&64){ve.move(A,H,W,De);return}if(ve===Xn){i(ye,H,W);for(let N=0;N<v.length;N++)ke(v[N],H,W,pe);i(A.anchor,H,W);return}if(ve===Wa){M(A,H,W);return}if(pe!==2&&b&1&&_)if(pe===0)_.beforeEnter(ye),i(ye,H,W),xn(()=>_.enter(ye),oe);else{const{leave:N,delayLeave:F,afterLeave:Z}=_,j=()=>i(ye,H,W),te=()=>{N(ye,()=>{j(),Z&&Z()})};F?F(ye,j,te):te()}else i(ye,H,W)},Ze=(A,H,W,pe=!1,oe=!1)=>{const{type:ye,props:ve,ref:_,children:v,dynamicChildren:b,shapeFlag:P,patchFlag:N,dirs:F,cacheIndex:Z}=A;if(N===-2&&(oe=!1),_!=null&&Hl(_,null,W,A,!0),Z!=null&&(H.renderCache[Z]=void 0),P&256){H.ctx.deactivate(A);return}const j=P&1&&F,te=!ks(A);let be;if(te&&(be=ve&&ve.onVnodeBeforeUnmount)&&Vn(be,H,A),P&6)Ce(A.component,W,pe);else{if(P&128){A.suspense.unmount(W,pe);return}j&&sr(A,null,H,"beforeUnmount"),P&64?A.type.remove(A,H,W,De,pe):b&&!b.hasOnce&&(ye!==Xn||N>0&&N&64)?Oe(b,H,W,!1,!0):(ye===Xn&&N&384||!oe&&P&16)&&Oe(v,H,W),pe&&nt(A)}(te&&(be=ve&&ve.onVnodeUnmounted)||j)&&xn(()=>{be&&Vn(be,H,A),j&&sr(A,null,H,"unmounted")},W)},nt=A=>{const{type:H,el:W,anchor:pe,transition:oe}=A;if(H===Xn){Se(W,pe);return}if(H===Wa){w(A);return}const ye=()=>{r(W),oe&&!oe.persisted&&oe.afterLeave&&oe.afterLeave()};if(A.shapeFlag&1&&oe&&!oe.persisted){const{leave:ve,delayLeave:_}=oe,v=()=>ve(W,ye);_?_(A.el,ye,v):v()}else ye()},Se=(A,H)=>{let W;for(;A!==H;)W=c(A),r(A),A=W;r(H)},Ce=(A,H,W)=>{const{bum:pe,scope:oe,job:ye,subTree:ve,um:_,m:v,a:b}=A;ef(v),ef(b),pe&&ko(pe),oe.stop(),ye&&(ye.flags|=8,Ze(ve,A,H,W)),_&&xn(_,H),xn(()=>{A.isUnmounted=!0},H),H&&H.pendingBranch&&!H.isUnmounted&&A.asyncDep&&!A.asyncResolved&&A.suspenseId===H.pendingId&&(H.deps--,H.deps===0&&H.resolve())},Oe=(A,H,W,pe=!1,oe=!1,ye=0)=>{for(let ve=ye;ve<A.length;ve++)Ze(A[ve],H,W,pe,oe)},ee=A=>{if(A.shapeFlag&6)return ee(A.component.subTree);if(A.shapeFlag&128)return A.suspense.next();const H=c(A.anchor||A.el),W=H&&H[D_];return W?c(W):H};let we=!1;const xe=(A,H,W)=>{A==null?H._vnode&&Ze(H._vnode,null,null,!0):y(H._vnode||null,A,H,null,null,null,W),H._vnode=A,we||(we=!0,ju(),Td(),we=!1)},De={p:y,um:Ze,m:ke,r:nt,mt:ce,mc:X,pc:ne,pbc:E,n:ee,o:t};let je,We;return{render:xe,hydrate:je,createApp:tg(xe,je)}}function jo({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function ar({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function ug(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function $d(t,e,n=!1){const i=t.children,r=e.children;if(st(i)&&st(r))for(let s=0;s<i.length;s++){const a=i[s];let o=r[s];o.shapeFlag&1&&!o.dynamicChildren&&((o.patchFlag<=0||o.patchFlag===32)&&(o=r[s]=zi(r[s]),o.el=a.el),!n&&o.patchFlag!==-2&&$d(a,o)),o.type===wo&&(o.el=a.el)}}function fg(t){const e=t.slice(),n=[0];let i,r,s,a,o;const l=t.length;for(i=0;i<l;i++){const f=t[i];if(f!==0){if(r=n[n.length-1],t[r]<f){e[i]=r,n.push(i);continue}for(s=0,a=n.length-1;s<a;)o=s+a>>1,t[n[o]]<f?s=o+1:a=o;f<t[n[s]]&&(s>0&&(e[i]=n[s-1]),n[s]=i)}}for(s=n.length,a=n[s-1];s-- >0;)n[s]=a,a=e[a];return n}function Kd(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Kd(e)}function ef(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}const hg=Symbol.for("v-scx"),dg=()=>xi(hg);function Ga(t,e,n){return Zd(t,e,n)}function Zd(t,e,n=At){const{immediate:i,deep:r,flush:s,once:a}=n,o=zt({},n),l=e&&i||!e&&s!=="post";let f;if(Zs){if(s==="sync"){const m=dg();f=m.__watcherHandles||(m.__watcherHandles=[])}else if(!l){const m=()=>{};return m.stop=Zn,m.resume=Zn,m.pause=Zn,m}}const u=qt;o.call=(m,p,y)=>kn(m,u,p,y);let d=!1;s==="post"?o.scheduler=m=>{xn(m,u&&u.suspense)}:s!=="sync"&&(d=!0,o.scheduler=(m,p)=>{p?m():ou(m)}),o.augmentJob=m=>{e&&(m.flags|=4),d&&(m.flags|=2,u&&(m.id=u.uid,m.i=u))};const c=A_(t,e,o);return Zs&&(f?f.push(c):l&&c()),c}function pg(t,e,n){const i=this.proxy,r=kt(t)?t.includes(".")?Jd(i,t):()=>i[t]:t.bind(i,i);let s;ot(e)?s=e:(s=e.handler,n=e);const a=ra(this),o=Zd(r,s.bind(i),n);return a(),o}function Jd(t,e){const n=e.split(".");return()=>{let i=t;for(let r=0;r<n.length&&i;r++)i=i[n[r]];return i}}const mg=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${Cn(e)}Modifiers`]||t[`${Ir(e)}Modifiers`];function _g(t,e,...n){if(t.isUnmounted)return;const i=t.vnode.props||At;let r=n;const s=e.startsWith("update:"),a=s&&mg(i,e.slice(7));a&&(a.trim&&(r=n.map(u=>kt(u)?u.trim():u)),a.number&&(r=n.map(jm)));let o,l=i[o=zo(e)]||i[o=zo(Cn(e))];!l&&s&&(l=i[o=zo(Ir(e))]),l&&kn(l,t,6,r);const f=i[o+"Once"];if(f){if(!t.emitted)t.emitted={};else if(t.emitted[o])return;t.emitted[o]=!0,kn(f,t,6,r)}}function Qd(t,e,n=!1){const i=e.emitsCache,r=i.get(t);if(r!==void 0)return r;const s=t.emits;let a={},o=!1;if(!ot(t)){const l=f=>{const u=Qd(f,e,!0);u&&(o=!0,zt(a,u))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!s&&!o?(Ut(t)&&i.set(t,null),null):(st(s)?s.forEach(l=>a[l]=null):zt(a,s),Ut(t)&&i.set(t,a),a)}function Eo(t,e){return!t||!mo(e)?!1:(e=e.slice(2).replace(/Once$/,""),vt(t,e[0].toLowerCase()+e.slice(1))||vt(t,Ir(e))||vt(t,e))}function qo(t){const{type:e,vnode:n,proxy:i,withProxy:r,propsOptions:[s],slots:a,attrs:o,emit:l,render:f,renderCache:u,props:d,data:c,setupState:m,ctx:p,inheritAttrs:y}=t,g=ro(t);let h,T;try{if(n.shapeFlag&4){const w=r||i,V=w;h=jn(f.call(V,w,u,d,m,c,p)),T=o}else{const w=e;h=jn(w.length>1?w(d,{attrs:o,slots:a,emit:l}):w(d,null)),T=e.props?o:gg(o)}}catch(w){Vs.length=0,So(w,t,1),h=It(dn)}let M=h;if(T&&y!==!1){const w=Object.keys(T),{shapeFlag:V}=M;w.length&&V&7&&(s&&w.some(Yc)&&(T=vg(T,s)),M=Ki(M,T,!1,!0))}return n.dirs&&(M=Ki(M,null,!1,!0),M.dirs=M.dirs?M.dirs.concat(n.dirs):n.dirs),n.transition&&$s(M,n.transition),h=M,ro(g),h}const gg=t=>{let e;for(const n in t)(n==="class"||n==="style"||mo(n))&&((e||(e={}))[n]=t[n]);return e},vg=(t,e)=>{const n={};for(const i in t)(!Yc(i)||!(i.slice(9)in e))&&(n[i]=t[i]);return n};function xg(t,e,n){const{props:i,children:r,component:s}=t,{props:a,children:o,patchFlag:l}=e,f=s.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return i?tf(i,a,f):!!a;if(l&8){const u=e.dynamicProps;for(let d=0;d<u.length;d++){const c=u[d];if(a[c]!==i[c]&&!Eo(f,c))return!0}}}else return(r||o)&&(!o||!o.$stable)?!0:i===a?!1:i?a?tf(i,a,f):!0:!!a;return!1}function tf(t,e,n){const i=Object.keys(e);if(i.length!==Object.keys(t).length)return!0;for(let r=0;r<i.length;r++){const s=i[r];if(e[s]!==t[s]&&!Eo(n,s))return!0}return!1}function yg({vnode:t,parent:e},n){for(;e;){const i=e.subTree;if(i.suspense&&i.suspense.activeBranch===t&&(i.el=t.el),i===t)(t=e.vnode).el=n,e=e.parent;else break}}const ep=t=>t.__isSuspense;function Sg(t,e){e&&e.pendingBranch?st(t)?e.effects.push(...t):e.effects.push(t):P_(t)}const Xn=Symbol.for("v-fgt"),wo=Symbol.for("v-txt"),dn=Symbol.for("v-cmt"),Wa=Symbol.for("v-stc"),Vs=[];let Sn=null;function Yn(t=!1){Vs.push(Sn=t?null:[])}function Mg(){Vs.pop(),Sn=Vs[Vs.length-1]||null}let Ks=1;function nf(t){Ks+=t,t<0&&Sn&&(Sn.hasOnce=!0)}function tp(t){return t.dynamicChildren=Ks>0?Sn||es:null,Mg(),Ks>0&&Sn&&Sn.push(t),t}function _i(t,e,n,i,r,s){return tp(mt(t,e,n,i,r,s,!0))}function bg(t,e,n,i,r){return tp(It(t,e,n,i,r,!0))}function ao(t){return t?t.__v_isVNode===!0:!1}function yr(t,e){return t.type===e.type&&t.key===e.key}const np=({key:t})=>t??null,Xa=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?kt(t)||nn(t)||ot(t)?{i:En,r:t,k:e,f:!!n}:t:null);function mt(t,e=null,n=null,i=0,r=null,s=t===Xn?0:1,a=!1,o=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&np(e),ref:e&&Xa(e),scopeId:wd,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:i,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:En};return o?(fu(l,n),s&128&&t.normalize(l)):n&&(l.shapeFlag|=kt(n)?8:16),Ks>0&&!a&&Sn&&(l.patchFlag>0||s&6)&&l.patchFlag!==32&&Sn.push(l),l}const It=Tg;function Tg(t,e=null,n=null,i=0,r=null,s=!1){if((!t||t===j_)&&(t=dn),ao(t)){const o=Ki(t,e,!0);return n&&fu(o,n),Ks>0&&!s&&Sn&&(o.shapeFlag&6?Sn[Sn.indexOf(t)]=o:Sn.push(o)),o.patchFlag=-2,o}if(Fg(t)&&(t=t.__vccOpts),e){e=Eg(e);let{class:o,style:l}=e;o&&!kt(o)&&(e.class=Jc(o)),Ut(l)&&(au(l)&&!st(l)&&(l=zt({},l)),e.style=Zc(l))}const a=kt(t)?1:ep(t)?128:Ad(t)?64:Ut(t)?4:ot(t)?2:0;return mt(t,e,n,i,r,a,s,!0)}function Eg(t){return t?au(t)||Vd(t)?zt({},t):t:null}function Ki(t,e,n=!1,i=!1){const{props:r,ref:s,patchFlag:a,children:o,transition:l}=t,f=e?Ag(r||{},e):r,u={__v_isVNode:!0,__v_skip:!0,type:t.type,props:f,key:f&&np(f),ref:e&&e.ref?n&&s?st(s)?s.concat(Xa(e)):[s,Xa(e)]:Xa(e):s,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Xn?a===-1?16:a|16:a,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:l,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Ki(t.ssContent),ssFallback:t.ssFallback&&Ki(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return l&&i&&$s(u,l.clone(u)),u}function Xi(t=" ",e=0){return It(wo,null,t,e)}function jl(t,e){const n=It(Wa,null,t);return n.staticCount=e,n}function wg(t="",e=!1){return e?(Yn(),bg(dn,null,t)):It(dn,null,t)}function jn(t){return t==null||typeof t=="boolean"?It(dn):st(t)?It(Xn,null,t.slice()):ao(t)?zi(t):It(wo,null,String(t))}function zi(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Ki(t)}function fu(t,e){let n=0;const{shapeFlag:i}=t;if(e==null)e=null;else if(st(e))n=16;else if(typeof e=="object")if(i&65){const r=e.default;r&&(r._c&&(r._d=!1),fu(t,r()),r._c&&(r._d=!0));return}else{n=32;const r=e._;!r&&!Vd(e)?e._ctx=En:r===3&&En&&(En.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else ot(e)?(e={default:e,_ctx:En},n=32):(e=String(e),i&64?(n=16,e=[Xi(e)]):n=8);t.children=e,t.shapeFlag|=n}function Ag(...t){const e={};for(let n=0;n<t.length;n++){const i=t[n];for(const r in i)if(r==="class")e.class!==i.class&&(e.class=Jc([e.class,i.class]));else if(r==="style")e.style=Zc([e.style,i.style]);else if(mo(r)){const s=e[r],a=i[r];a&&s!==a&&!(st(s)&&s.includes(a))&&(e[r]=s?[].concat(s,a):a)}else r!==""&&(e[r]=i[r])}return e}function Vn(t,e,n,i=null){kn(t,e,7,[n,i])}const Cg=zd();let Rg=0;function Pg(t,e,n){const i=t.type,r=(e?e.appContext:t.appContext)||Cg,s={uid:Rg++,vnode:t,type:i,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new e_(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Wd(i,r),emitsOptions:Qd(i,r),emit:null,emitted:null,propsDefaults:At,inheritAttrs:i.inheritAttrs,ctx:At,data:At,props:At,attrs:At,slots:At,refs:At,setupState:At,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=e?e.root:s,s.emit=_g.bind(null,s),t.ce&&t.ce(s),s}let qt=null;const Dg=()=>qt||En;let oo,ql;{const t=xo(),e=(n,i)=>{let r;return(r=t[n])||(r=t[n]=[]),r.push(i),s=>{r.length>1?r.forEach(a=>a(s)):r[0](s)}};oo=e("__VUE_INSTANCE_SETTERS__",n=>qt=n),ql=e("__VUE_SSR_SETTERS__",n=>Zs=n)}const ra=t=>{const e=qt;return oo(t),t.scope.on(),()=>{t.scope.off(),oo(e)}},rf=()=>{qt&&qt.scope.off(),oo(null)};function ip(t){return t.vnode.shapeFlag&4}let Zs=!1;function Lg(t,e=!1,n=!1){e&&ql(e);const{props:i,children:r}=t.vnode,s=ip(t);ng(t,i,s,e),ag(t,r,n);const a=s?Ig(t,e):void 0;return e&&ql(!1),a}function Ig(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,Y_);const{setup:i}=n;if(i){Qi();const r=t.setupContext=i.length>1?Ng(t):null,s=ra(t),a=ia(i,t,0,[t.props,r]),o=ed(a);if(er(),s(),(o||t.sp)&&!ks(t)&&Ud(t),o){if(a.then(rf,rf),e)return a.then(l=>{sf(t,l,e)}).catch(l=>{So(l,t,0)});t.asyncDep=a}else sf(t,a,e)}else rp(t,e)}function sf(t,e,n){ot(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Ut(e)&&(t.setupState=yd(e)),rp(t,n)}let af;function rp(t,e,n){const i=t.type;if(!t.render){if(!e&&af&&!i.render){const r=i.template||cu(t).template;if(r){const{isCustomElement:s,compilerOptions:a}=t.appContext.config,{delimiters:o,compilerOptions:l}=i,f=zt(zt({isCustomElement:s,delimiters:o},a),l);i.render=af(r,f)}}t.render=i.render||Zn}{const r=ra(t);Qi();try{$_(t)}finally{er(),r()}}}const Ug={get(t,e){return tn(t,"get",""),t[e]}};function Ng(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,Ug),slots:t.slots,emit:t.emit,expose:e}}function hu(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(yd(y_(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Hs)return Hs[n](t)},has(e,n){return n in e||n in Hs}})):t.proxy}function Og(t,e=!0){return ot(t)?t.displayName||t.name:t.name||e&&t.__name}function Fg(t){return ot(t)&&"__vccOpts"in t}const In=(t,e)=>E_(t,e,Zs);function du(t,e,n){const i=arguments.length;return i===2?Ut(e)&&!st(e)?ao(e)?It(t,null,[e]):It(t,e):It(t,null,e):(i>3?n=Array.prototype.slice.call(arguments,2):i===3&&ao(n)&&(n=[n]),It(t,e,n))}const Bg="3.5.12";/**
* @vue/runtime-dom v3.5.12
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Yl;const of=typeof window<"u"&&window.trustedTypes;if(of)try{Yl=of.createPolicy("vue",{createHTML:t=>t})}catch{}const sp=Yl?t=>Yl.createHTML(t):t=>t,zg="http://www.w3.org/2000/svg",kg="http://www.w3.org/1998/Math/MathML",di=typeof document<"u"?document:null,lf=di&&di.createElement("template"),Hg={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,i)=>{const r=e==="svg"?di.createElementNS(zg,t):e==="mathml"?di.createElementNS(kg,t):n?di.createElement(t,{is:n}):di.createElement(t);return t==="select"&&i&&i.multiple!=null&&r.setAttribute("multiple",i.multiple),r},createText:t=>di.createTextNode(t),createComment:t=>di.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>di.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,i,r,s){const a=n?n.previousSibling:e.lastChild;if(r&&(r===s||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),n),!(r===s||!(r=r.nextSibling)););else{lf.innerHTML=sp(i==="svg"?`<svg>${t}</svg>`:i==="mathml"?`<math>${t}</math>`:t);const o=lf.content;if(i==="svg"||i==="mathml"){const l=o.firstChild;for(;l.firstChild;)o.appendChild(l.firstChild);o.removeChild(l)}e.insertBefore(o,n)}return[a?a.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},Ci="transition",Ts="animation",Js=Symbol("_vtc"),ap={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},Vg=zt({},Cd,ap),Gg=t=>(t.displayName="Transition",t.props=Vg,t),Wg=Gg((t,{slots:e})=>du(U_,Xg(t),e)),or=(t,e=[])=>{st(t)?t.forEach(n=>n(...e)):t&&t(...e)},cf=t=>t?st(t)?t.some(e=>e.length>1):t.length>1:!1;function Xg(t){const e={};for(const G in t)G in ap||(e[G]=t[G]);if(t.css===!1)return e;const{name:n="v",type:i,duration:r,enterFromClass:s=`${n}-enter-from`,enterActiveClass:a=`${n}-enter-active`,enterToClass:o=`${n}-enter-to`,appearFromClass:l=s,appearActiveClass:f=a,appearToClass:u=o,leaveFromClass:d=`${n}-leave-from`,leaveActiveClass:c=`${n}-leave-active`,leaveToClass:m=`${n}-leave-to`}=t,p=jg(r),y=p&&p[0],g=p&&p[1],{onBeforeEnter:h,onEnter:T,onEnterCancelled:M,onLeave:w,onLeaveCancelled:V,onBeforeAppear:L=h,onAppear:z=T,onAppearCancelled:X=M}=e,$=(G,q,ce)=>{lr(G,q?u:o),lr(G,q?f:a),ce&&ce()},E=(G,q)=>{G._isLeaving=!1,lr(G,d),lr(G,m),lr(G,c),q&&q()},R=G=>(q,ce)=>{const re=G?z:T,ae=()=>$(q,G,ce);or(re,[q,ae]),uf(()=>{lr(q,G?l:s),Ri(q,G?u:o),cf(re)||ff(q,i,y,ae)})};return zt(e,{onBeforeEnter(G){or(h,[G]),Ri(G,s),Ri(G,a)},onBeforeAppear(G){or(L,[G]),Ri(G,l),Ri(G,f)},onEnter:R(!1),onAppear:R(!0),onLeave(G,q){G._isLeaving=!0;const ce=()=>E(G,q);Ri(G,d),Ri(G,c),$g(),uf(()=>{G._isLeaving&&(lr(G,d),Ri(G,m),cf(w)||ff(G,i,g,ce))}),or(w,[G,ce])},onEnterCancelled(G){$(G,!1),or(M,[G])},onAppearCancelled(G){$(G,!0),or(X,[G])},onLeaveCancelled(G){E(G),or(V,[G])}})}function jg(t){if(t==null)return null;if(Ut(t))return[Yo(t.enter),Yo(t.leave)];{const e=Yo(t);return[e,e]}}function Yo(t){return qm(t)}function Ri(t,e){e.split(/\s+/).forEach(n=>n&&t.classList.add(n)),(t[Js]||(t[Js]=new Set)).add(e)}function lr(t,e){e.split(/\s+/).forEach(i=>i&&t.classList.remove(i));const n=t[Js];n&&(n.delete(e),n.size||(t[Js]=void 0))}function uf(t){requestAnimationFrame(()=>{requestAnimationFrame(t)})}let qg=0;function ff(t,e,n,i){const r=t._endId=++qg,s=()=>{r===t._endId&&i()};if(n!=null)return setTimeout(s,n);const{type:a,timeout:o,propCount:l}=Yg(t,e);if(!a)return i();const f=a+"end";let u=0;const d=()=>{t.removeEventListener(f,c),s()},c=m=>{m.target===t&&++u>=l&&d()};setTimeout(()=>{u<l&&d()},o+1),t.addEventListener(f,c)}function Yg(t,e){const n=window.getComputedStyle(t),i=p=>(n[p]||"").split(", "),r=i(`${Ci}Delay`),s=i(`${Ci}Duration`),a=hf(r,s),o=i(`${Ts}Delay`),l=i(`${Ts}Duration`),f=hf(o,l);let u=null,d=0,c=0;e===Ci?a>0&&(u=Ci,d=a,c=s.length):e===Ts?f>0&&(u=Ts,d=f,c=l.length):(d=Math.max(a,f),u=d>0?a>f?Ci:Ts:null,c=u?u===Ci?s.length:l.length:0);const m=u===Ci&&/\b(transform|all)(,|$)/.test(i(`${Ci}Property`).toString());return{type:u,timeout:d,propCount:c,hasTransform:m}}function hf(t,e){for(;t.length<e.length;)t=t.concat(t);return Math.max(...e.map((n,i)=>df(n)+df(t[i])))}function df(t){return t==="auto"?0:Number(t.slice(0,-1).replace(",","."))*1e3}function $g(){return document.body.offsetHeight}function Kg(t,e,n){const i=t[Js];i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const pf=Symbol("_vod"),Zg=Symbol("_vsh"),Jg=Symbol(""),Qg=/(^|;)\s*display\s*:/;function e0(t,e,n){const i=t.style,r=kt(n);let s=!1;if(n&&!r){if(e)if(kt(e))for(const a of e.split(";")){const o=a.slice(0,a.indexOf(":")).trim();n[o]==null&&ja(i,o,"")}else for(const a in e)n[a]==null&&ja(i,a,"");for(const a in n)a==="display"&&(s=!0),ja(i,a,n[a])}else if(r){if(e!==n){const a=i[Jg];a&&(n+=";"+a),i.cssText=n,s=Qg.test(n)}}else e&&t.removeAttribute("style");pf in t&&(t[pf]=s?i.display:"",t[Zg]&&(i.display="none"))}const mf=/\s*!important$/;function ja(t,e,n){if(st(n))n.forEach(i=>ja(t,e,i));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const i=t0(t,e);mf.test(n)?t.setProperty(Ir(i),n.replace(mf,""),"important"):t[i]=n}}const _f=["Webkit","Moz","ms"],$o={};function t0(t,e){const n=$o[e];if(n)return n;let i=Cn(e);if(i!=="filter"&&i in t)return $o[e]=i;i=vo(i);for(let r=0;r<_f.length;r++){const s=_f[r]+i;if(s in t)return $o[e]=s}return e}const gf="http://www.w3.org/1999/xlink";function vf(t,e,n,i,r,s=Qm(e)){i&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(gf,e.slice(6,e.length)):t.setAttributeNS(gf,e,n):n==null||s&&!nd(n)?t.removeAttribute(e):t.setAttribute(e,s?"":ms(n)?String(n):n)}function xf(t,e,n,i,r){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?sp(n):n);return}const s=t.tagName;if(e==="value"&&s!=="PROGRESS"&&!s.includes("-")){const o=s==="OPTION"?t.getAttribute("value")||"":t.value,l=n==null?t.type==="checkbox"?"on":"":String(n);(o!==l||!("_value"in t))&&(t.value=l),n==null&&t.removeAttribute(e),t._value=n;return}let a=!1;if(n===""||n==null){const o=typeof t[e];o==="boolean"?n=nd(n):n==null&&o==="string"?(n="",a=!0):o==="number"&&(n=0,a=!0)}try{t[e]=n}catch{}a&&t.removeAttribute(r||e)}function n0(t,e,n,i){t.addEventListener(e,n,i)}function i0(t,e,n,i){t.removeEventListener(e,n,i)}const yf=Symbol("_vei");function r0(t,e,n,i,r=null){const s=t[yf]||(t[yf]={}),a=s[e];if(i&&a)a.value=i;else{const[o,l]=s0(e);if(i){const f=s[e]=l0(i,r);n0(t,o,f,l)}else a&&(i0(t,o,a,l),s[e]=void 0)}}const Sf=/(?:Once|Passive|Capture)$/;function s0(t){let e;if(Sf.test(t)){e={};let i;for(;i=t.match(Sf);)t=t.slice(0,t.length-i[0].length),e[i[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Ir(t.slice(2)),e]}let Ko=0;const a0=Promise.resolve(),o0=()=>Ko||(a0.then(()=>Ko=0),Ko=Date.now());function l0(t,e){const n=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=n.attached)return;kn(c0(i,n.value),e,5,[i])};return n.value=t,n.attached=o0(),n}function c0(t,e){if(st(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(i=>r=>!r._stopped&&i&&i(r))}else return e}const Mf=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,u0=(t,e,n,i,r,s)=>{const a=r==="svg";e==="class"?Kg(t,i,a):e==="style"?e0(t,n,i):mo(e)?Yc(e)||r0(t,e,n,i,s):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):f0(t,e,i,a))?(xf(t,e,i),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&vf(t,e,i,a,s,e!=="value")):t._isVueCE&&(/[A-Z]/.test(e)||!kt(i))?xf(t,Cn(e),i,s,e):(e==="true-value"?t._trueValue=i:e==="false-value"&&(t._falseValue=i),vf(t,e,i,a))};function f0(t,e,n,i){if(i)return!!(e==="innerHTML"||e==="textContent"||e in t&&Mf(e)&&ot(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const r=t.tagName;if(r==="IMG"||r==="VIDEO"||r==="CANVAS"||r==="SOURCE")return!1}return Mf(e)&&kt(n)?!1:e in t}const h0=["ctrl","shift","alt","meta"],d0={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>h0.some(n=>t[`${n}Key`]&&!e.includes(n))},p0=(t,e)=>{const n=t._withMods||(t._withMods={}),i=e.join(".");return n[i]||(n[i]=(r,...s)=>{for(let a=0;a<e.length;a++){const o=d0[e[a]];if(o&&o(r,e))return}return t(r,...s)})},m0=zt({patchProp:u0},Hg);let bf;function _0(){return bf||(bf=lg(m0))}const g0=(...t)=>{const e=_0().createApp(...t),{mount:n}=e;return e.mount=i=>{const r=x0(i);if(!r)return;const s=e._component;!ot(s)&&!s.render&&!s.template&&(s.template=r.innerHTML),r.nodeType===1&&(r.textContent="");const a=n(r,!1,v0(r));return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),a},e};function v0(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function x0(t){return kt(t)?document.querySelector(t):t}const pu=(t,e)=>{const n=t.__vccOpts||t;for(const[i,r]of e)n[i]=r;return n},y0={class:"fixed z-20 w-full justify-center items-center flex"},S0={class:"relative w-2/3 flex justify-between items-center px-4 py-4 md:py-10"},M0={key:"burger",class:"w-8 h-8 text-secondary",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},b0={key:"close",class:"w-8 h-8 text-secondary",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},T0={class:"nav hidden md:flex md:flex-row gap-6 items-center"},E0=["href"],w0=["href"],A0={__name:"Nav",setup(t){const e="/YangPortfolioPublic/docs/",n=to(!1),i=()=>{n.value=!n.value};return(r,s)=>{const a=lu("router-link");return Yn(),_i("div",y0,[mt("nav",S0,[s[6]||(s[6]=mt("div",{id:"brand",class:"text-secondary font-bold"},[mt("a",{href:"https://www.linkedin.com/in/tan-wei-yang-396305179/",target:"_blank",rel:"noopener noreferrer"}," Wei Yang ")],-1)),mt("button",{onClick:i,class:"block md:hidden focus:outline-none transition duration-300 ease-out"},[n.value?(Yn(),_i("svg",b0,s[1]||(s[1]=[mt("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M6 18L18 6M6 6l12 12"},null,-1)]))):(Yn(),_i("svg",M0,s[0]||(s[0]=[mt("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M4 6h16M4 12h16m-7 6h7"},null,-1)])))]),mt("div",T0,[It(a,{to:"/",class:"hover:text-secondary transition-colors"},{default:xr(()=>s[2]||(s[2]=[Xi("Home")])),_:1}),It(a,{to:"/about",class:"hover:text-secondary transition-colors"},{default:xr(()=>s[3]||(s[3]=[Xi("About")])),_:1}),mt("a",{href:qi(e),class:"hover:text-secondary transition-colors"},"Portfolios",8,E0)]),It(Wg,{name:"menu-fade"},{default:xr(()=>[n.value?(Yn(),_i("div",{key:0,class:"fixed inset-0 z-40 bg-black bg-opacity-90 flex flex-col items-center justify-center",onClick:p0(i,["self"])},[It(a,{onClick:i,to:"/",class:"text-white text-3xl py-4"},{default:xr(()=>s[4]||(s[4]=[Xi("Home")])),_:1}),It(a,{onClick:i,to:"/about",class:"text-white text-3xl py-4"},{default:xr(()=>s[5]||(s[5]=[Xi("About")])),_:1}),mt("a",{onClick:i,href:qi(e),class:"text-white text-3xl py-4"},"Portfolios",8,w0)])):wg("",!0)]),_:1})])])}}},C0=pu(A0,[["__scopeId","data-v-6b39d5f4"]]);/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const mu="169",R0=0,Tf=1,P0=2,op=1,D0=2,hi=3,Zi=0,pn=1,mi=2,Yi=0,Ar=1,Ef=2,wf=3,Af=4,L0=5,Sr=100,I0=101,U0=102,N0=103,O0=104,F0=200,B0=201,z0=202,k0=203,$l=204,Kl=205,H0=206,V0=207,G0=208,W0=209,X0=210,j0=211,q0=212,Y0=213,$0=214,Zl=0,Jl=1,Ql=2,os=3,ec=4,tc=5,nc=6,ic=7,lp=0,K0=1,Z0=2,$i=0,J0=1,Q0=2,ev=3,tv=4,nv=5,iv=6,rv=7,cp=300,ls=301,cs=302,rc=303,sc=304,Ao=306,ac=1e3,br=1001,oc=1002,wn=1003,sv=1004,ga=1005,un=1006,Zo=1007,Tr=1008,Mi=1009,up=1010,fp=1011,Qs=1012,_u=1013,Dr=1014,gi=1015,sa=1016,gu=1017,vu=1018,us=1020,hp=35902,dp=1021,pp=1022,Fn=1023,mp=1024,_p=1025,is=1026,fs=1027,gp=1028,xu=1029,vp=1030,yu=1031,Su=1033,qa=33776,Ya=33777,$a=33778,Ka=33779,lc=35840,cc=35841,uc=35842,fc=35843,hc=36196,dc=37492,pc=37496,mc=37808,_c=37809,gc=37810,vc=37811,xc=37812,yc=37813,Sc=37814,Mc=37815,bc=37816,Tc=37817,Ec=37818,wc=37819,Ac=37820,Cc=37821,Za=36492,Rc=36494,Pc=36495,xp=36283,Dc=36284,Lc=36285,Ic=36286,av=3200,ov=3201,lv=0,cv=1,Gi="",Wn="srgb",tr="srgb-linear",Mu="display-p3",Co="display-p3-linear",lo="linear",Ct="srgb",co="rec709",uo="p3",Or=7680,Cf=519,uv=512,fv=513,hv=514,yp=515,dv=516,pv=517,mv=518,_v=519,Rf=35044,Pf="300 es",vi=2e3,fo=2001;class _s{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const Zt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Jo=Math.PI/180,Uc=180/Math.PI;function aa(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Zt[t&255]+Zt[t>>8&255]+Zt[t>>16&255]+Zt[t>>24&255]+"-"+Zt[e&255]+Zt[e>>8&255]+"-"+Zt[e>>16&15|64]+Zt[e>>24&255]+"-"+Zt[n&63|128]+Zt[n>>8&255]+"-"+Zt[n>>16&255]+Zt[n>>24&255]+Zt[i&255]+Zt[i>>8&255]+Zt[i>>16&255]+Zt[i>>24&255]).toLowerCase()}function hn(t,e,n){return Math.max(e,Math.min(n,t))}function gv(t,e){return(t%e+e)%e}function Qo(t,e,n){return(1-n)*t+n*e}function Es(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function fn(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}class yt{constructor(e=0,n=0){yt.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(hn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*r+e.x,this.y=s*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ut{constructor(e,n,i,r,s,a,o,l,f){ut.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,a,o,l,f)}set(e,n,i,r,s,a,o,l,f){const u=this.elements;return u[0]=e,u[1]=r,u[2]=o,u[3]=n,u[4]=s,u[5]=l,u[6]=i,u[7]=a,u[8]=f,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,a=i[0],o=i[3],l=i[6],f=i[1],u=i[4],d=i[7],c=i[2],m=i[5],p=i[8],y=r[0],g=r[3],h=r[6],T=r[1],M=r[4],w=r[7],V=r[2],L=r[5],z=r[8];return s[0]=a*y+o*T+l*V,s[3]=a*g+o*M+l*L,s[6]=a*h+o*w+l*z,s[1]=f*y+u*T+d*V,s[4]=f*g+u*M+d*L,s[7]=f*h+u*w+d*z,s[2]=c*y+m*T+p*V,s[5]=c*g+m*M+p*L,s[8]=c*h+m*w+p*z,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],f=e[7],u=e[8];return n*a*u-n*o*f-i*s*u+i*o*l+r*s*f-r*a*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],f=e[7],u=e[8],d=u*a-o*f,c=o*l-u*s,m=f*s-a*l,p=n*d+i*c+r*m;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);const y=1/p;return e[0]=d*y,e[1]=(r*f-u*i)*y,e[2]=(o*i-r*a)*y,e[3]=c*y,e[4]=(u*n-r*l)*y,e[5]=(r*s-o*n)*y,e[6]=m*y,e[7]=(i*l-f*n)*y,e[8]=(a*n-i*s)*y,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,a,o){const l=Math.cos(s),f=Math.sin(s);return this.set(i*l,i*f,-i*(l*a+f*o)+a+e,-r*f,r*l,-r*(-f*a+l*o)+o+n,0,0,1),this}scale(e,n){return this.premultiply(el.makeScale(e,n)),this}rotate(e){return this.premultiply(el.makeRotation(-e)),this}translate(e,n){return this.premultiply(el.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const el=new ut;function Sp(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function ea(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function vv(){const t=ea("canvas");return t.style.display="block",t}const Df={};function Ja(t){t in Df||(Df[t]=!0)}function xv(t,e,n){return new Promise(function(i,r){function s(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:r();break;case t.TIMEOUT_EXPIRED:setTimeout(s,n);break;default:i()}}setTimeout(s,n)})}function yv(t){const e=t.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function Sv(t){const e=t.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const Lf=new ut().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),If=new ut().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),ws={[tr]:{transfer:lo,primaries:co,luminanceCoefficients:[.2126,.7152,.0722],toReference:t=>t,fromReference:t=>t},[Wn]:{transfer:Ct,primaries:co,luminanceCoefficients:[.2126,.7152,.0722],toReference:t=>t.convertSRGBToLinear(),fromReference:t=>t.convertLinearToSRGB()},[Co]:{transfer:lo,primaries:uo,luminanceCoefficients:[.2289,.6917,.0793],toReference:t=>t.applyMatrix3(If),fromReference:t=>t.applyMatrix3(Lf)},[Mu]:{transfer:Ct,primaries:uo,luminanceCoefficients:[.2289,.6917,.0793],toReference:t=>t.convertSRGBToLinear().applyMatrix3(If),fromReference:t=>t.applyMatrix3(Lf).convertLinearToSRGB()}},Mv=new Set([tr,Co]),xt={enabled:!0,_workingColorSpace:tr,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(t){if(!Mv.has(t))throw new Error(`Unsupported working color space, "${t}".`);this._workingColorSpace=t},convert:function(t,e,n){if(this.enabled===!1||e===n||!e||!n)return t;const i=ws[e].toReference,r=ws[n].fromReference;return r(i(t))},fromWorkingColorSpace:function(t,e){return this.convert(t,this._workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this._workingColorSpace)},getPrimaries:function(t){return ws[t].primaries},getTransfer:function(t){return t===Gi?lo:ws[t].transfer},getLuminanceCoefficients:function(t,e=this._workingColorSpace){return t.fromArray(ws[e].luminanceCoefficients)}};function rs(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function tl(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let Fr;class bv{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Fr===void 0&&(Fr=ea("canvas")),Fr.width=e.width,Fr.height=e.height;const i=Fr.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=Fr}return n.width>2048||n.height>2048?n.toDataURL("image/jpeg",.6):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=ea("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=rs(s[a]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(rs(n[i]/255)*255):n[i]=rs(n[i]);return{data:n,width:e.width,height:e.height}}else return e}}let Tv=0;class Mp{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Tv++}),this.uuid=aa(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(nl(r[a].image)):s.push(nl(r[a]))}else s=nl(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function nl(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?bv.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:{}}let Ev=0;class Yt extends _s{constructor(e=Yt.DEFAULT_IMAGE,n=Yt.DEFAULT_MAPPING,i=br,r=br,s=un,a=Tr,o=Fn,l=Mi,f=Yt.DEFAULT_ANISOTROPY,u=Gi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Ev++}),this.uuid=aa(),this.name="",this.source=new Mp(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=f,this.format=o,this.internalFormat=null,this.type=l,this.offset=new yt(0,0),this.repeat=new yt(1,1),this.center=new yt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ut,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==cp)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ac:e.x=e.x-Math.floor(e.x);break;case br:e.x=e.x<0?0:1;break;case oc:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ac:e.y=e.y-Math.floor(e.y);break;case br:e.y=e.y<0?0:1;break;case oc:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Yt.DEFAULT_IMAGE=null;Yt.DEFAULT_MAPPING=cp;Yt.DEFAULT_ANISOTROPY=1;class Ot{constructor(e=0,n=0,i=0,r=1){Ot.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*n+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*n+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*n+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*n+a[7]*i+a[11]*r+a[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,f=l[0],u=l[4],d=l[8],c=l[1],m=l[5],p=l[9],y=l[2],g=l[6],h=l[10];if(Math.abs(u-c)<.01&&Math.abs(d-y)<.01&&Math.abs(p-g)<.01){if(Math.abs(u+c)<.1&&Math.abs(d+y)<.1&&Math.abs(p+g)<.1&&Math.abs(f+m+h-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const M=(f+1)/2,w=(m+1)/2,V=(h+1)/2,L=(u+c)/4,z=(d+y)/4,X=(p+g)/4;return M>w&&M>V?M<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(M),r=L/i,s=z/i):w>V?w<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(w),i=L/r,s=X/r):V<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(V),i=z/s,r=X/s),this.set(i,r,s,n),this}let T=Math.sqrt((g-p)*(g-p)+(d-y)*(d-y)+(c-u)*(c-u));return Math.abs(T)<.001&&(T=1),this.x=(g-p)/T,this.y=(d-y)/T,this.z=(c-u)/T,this.w=Math.acos((f+m+h-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class wv extends _s{constructor(e=1,n=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new Ot(0,0,e,n),this.scissorTest=!1,this.viewport=new Ot(0,0,e,n);const r={width:e,height:n,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:un,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const s=new Yt(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const a=i.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new Mp(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Lr extends wv{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class bp extends Yt{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=wn,this.minFilter=wn,this.wrapR=br,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Av extends Yt{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=wn,this.minFilter=wn,this.wrapR=br,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class oa{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,a,o){let l=i[r+0],f=i[r+1],u=i[r+2],d=i[r+3];const c=s[a+0],m=s[a+1],p=s[a+2],y=s[a+3];if(o===0){e[n+0]=l,e[n+1]=f,e[n+2]=u,e[n+3]=d;return}if(o===1){e[n+0]=c,e[n+1]=m,e[n+2]=p,e[n+3]=y;return}if(d!==y||l!==c||f!==m||u!==p){let g=1-o;const h=l*c+f*m+u*p+d*y,T=h>=0?1:-1,M=1-h*h;if(M>Number.EPSILON){const V=Math.sqrt(M),L=Math.atan2(V,h*T);g=Math.sin(g*L)/V,o=Math.sin(o*L)/V}const w=o*T;if(l=l*g+c*w,f=f*g+m*w,u=u*g+p*w,d=d*g+y*w,g===1-o){const V=1/Math.sqrt(l*l+f*f+u*u+d*d);l*=V,f*=V,u*=V,d*=V}}e[n]=l,e[n+1]=f,e[n+2]=u,e[n+3]=d}static multiplyQuaternionsFlat(e,n,i,r,s,a){const o=i[r],l=i[r+1],f=i[r+2],u=i[r+3],d=s[a],c=s[a+1],m=s[a+2],p=s[a+3];return e[n]=o*p+u*d+l*m-f*c,e[n+1]=l*p+u*c+f*d-o*m,e[n+2]=f*p+u*m+o*c-l*d,e[n+3]=u*p-o*d-l*c-f*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,f=o(i/2),u=o(r/2),d=o(s/2),c=l(i/2),m=l(r/2),p=l(s/2);switch(a){case"XYZ":this._x=c*u*d+f*m*p,this._y=f*m*d-c*u*p,this._z=f*u*p+c*m*d,this._w=f*u*d-c*m*p;break;case"YXZ":this._x=c*u*d+f*m*p,this._y=f*m*d-c*u*p,this._z=f*u*p-c*m*d,this._w=f*u*d+c*m*p;break;case"ZXY":this._x=c*u*d-f*m*p,this._y=f*m*d+c*u*p,this._z=f*u*p+c*m*d,this._w=f*u*d-c*m*p;break;case"ZYX":this._x=c*u*d-f*m*p,this._y=f*m*d+c*u*p,this._z=f*u*p-c*m*d,this._w=f*u*d+c*m*p;break;case"YZX":this._x=c*u*d+f*m*p,this._y=f*m*d+c*u*p,this._z=f*u*p-c*m*d,this._w=f*u*d-c*m*p;break;case"XZY":this._x=c*u*d-f*m*p,this._y=f*m*d-c*u*p,this._z=f*u*p+c*m*d,this._w=f*u*d+c*m*p;break;default:}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],a=n[1],o=n[5],l=n[9],f=n[2],u=n[6],d=n[10],c=i+o+d;if(c>0){const m=.5/Math.sqrt(c+1);this._w=.25/m,this._x=(u-l)*m,this._y=(s-f)*m,this._z=(a-r)*m}else if(i>o&&i>d){const m=2*Math.sqrt(1+i-o-d);this._w=(u-l)/m,this._x=.25*m,this._y=(r+a)/m,this._z=(s+f)/m}else if(o>d){const m=2*Math.sqrt(1+o-i-d);this._w=(s-f)/m,this._x=(r+a)/m,this._y=.25*m,this._z=(l+u)/m}else{const m=2*Math.sqrt(1+d-i-o);this._w=(a-r)/m,this._x=(s+f)/m,this._y=(l+u)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(hn(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,a=e._w,o=n._x,l=n._y,f=n._z,u=n._w;return this._x=i*u+a*o+r*f-s*l,this._y=r*u+a*l+s*o-i*f,this._z=s*u+a*f+i*l-r*o,this._w=a*u-i*o-r*l-s*f,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,a=this._w;let o=a*e._w+i*e._x+r*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=i,this._y=r,this._z=s,this;const l=1-o*o;if(l<=Number.EPSILON){const m=1-n;return this._w=m*a+n*this._w,this._x=m*i+n*this._x,this._y=m*r+n*this._y,this._z=m*s+n*this._z,this.normalize(),this}const f=Math.sqrt(l),u=Math.atan2(f,o),d=Math.sin((1-n)*u)/f,c=Math.sin(n*u)/f;return this._w=a*d+this._w*c,this._x=i*d+this._x*c,this._y=r*d+this._y*c,this._z=s*d+this._z*c,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(n),s*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class _e{constructor(e=0,n=0,i=0){_e.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(Uf.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(Uf.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,a=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,a=e.y,o=e.z,l=e.w,f=2*(a*r-o*i),u=2*(o*n-s*r),d=2*(s*i-a*n);return this.x=n+l*f+a*d-o*u,this.y=i+l*u+o*f-s*d,this.z=r+l*d+s*u-a*f,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,a=n.x,o=n.y,l=n.z;return this.x=r*l-s*o,this.y=s*a-i*l,this.z=i*o-r*a,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return il.copy(this).projectOnVector(e),this.sub(il)}reflect(e){return this.sub(il.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(hn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const il=new _e,Uf=new oa;class la{constructor(e=new _e(1/0,1/0,1/0),n=new _e(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(Pn.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(Pn.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=Pn.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Pn):Pn.fromBufferAttribute(s,a),Pn.applyMatrix4(e.matrixWorld),this.expandByPoint(Pn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),va.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),va.copy(i.boundingBox)),va.applyMatrix4(e.matrixWorld),this.union(va)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Pn),Pn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(As),xa.subVectors(this.max,As),Br.subVectors(e.a,As),zr.subVectors(e.b,As),kr.subVectors(e.c,As),Pi.subVectors(zr,Br),Di.subVectors(kr,zr),cr.subVectors(Br,kr);let n=[0,-Pi.z,Pi.y,0,-Di.z,Di.y,0,-cr.z,cr.y,Pi.z,0,-Pi.x,Di.z,0,-Di.x,cr.z,0,-cr.x,-Pi.y,Pi.x,0,-Di.y,Di.x,0,-cr.y,cr.x,0];return!rl(n,Br,zr,kr,xa)||(n=[1,0,0,0,1,0,0,0,1],!rl(n,Br,zr,kr,xa))?!1:(ya.crossVectors(Pi,Di),n=[ya.x,ya.y,ya.z],rl(n,Br,zr,kr,xa))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Pn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Pn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ai[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ai[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ai[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ai[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ai[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ai[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ai[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ai[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ai),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const ai=[new _e,new _e,new _e,new _e,new _e,new _e,new _e,new _e],Pn=new _e,va=new la,Br=new _e,zr=new _e,kr=new _e,Pi=new _e,Di=new _e,cr=new _e,As=new _e,xa=new _e,ya=new _e,ur=new _e;function rl(t,e,n,i,r){for(let s=0,a=t.length-3;s<=a;s+=3){ur.fromArray(t,s);const o=r.x*Math.abs(ur.x)+r.y*Math.abs(ur.y)+r.z*Math.abs(ur.z),l=e.dot(ur),f=n.dot(ur),u=i.dot(ur);if(Math.max(-Math.max(l,f,u),Math.min(l,f,u))>o)return!1}return!0}const Cv=new la,Cs=new _e,sl=new _e;class bu{constructor(e=new _e,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):Cv.setFromPoints(e).getCenter(i);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Cs.subVectors(e,this.center);const n=Cs.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(Cs,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(sl.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Cs.copy(e.center).add(sl)),this.expandByPoint(Cs.copy(e.center).sub(sl))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const oi=new _e,al=new _e,Sa=new _e,Li=new _e,ol=new _e,Ma=new _e,ll=new _e;class Tp{constructor(e=new _e,n=new _e(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,oi)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=oi.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(oi.copy(this.origin).addScaledVector(this.direction,n),oi.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){al.copy(e).add(n).multiplyScalar(.5),Sa.copy(n).sub(e).normalize(),Li.copy(this.origin).sub(al);const s=e.distanceTo(n)*.5,a=-this.direction.dot(Sa),o=Li.dot(this.direction),l=-Li.dot(Sa),f=Li.lengthSq(),u=Math.abs(1-a*a);let d,c,m,p;if(u>0)if(d=a*l-o,c=a*o-l,p=s*u,d>=0)if(c>=-p)if(c<=p){const y=1/u;d*=y,c*=y,m=d*(d+a*c+2*o)+c*(a*d+c+2*l)+f}else c=s,d=Math.max(0,-(a*c+o)),m=-d*d+c*(c+2*l)+f;else c=-s,d=Math.max(0,-(a*c+o)),m=-d*d+c*(c+2*l)+f;else c<=-p?(d=Math.max(0,-(-a*s+o)),c=d>0?-s:Math.min(Math.max(-s,-l),s),m=-d*d+c*(c+2*l)+f):c<=p?(d=0,c=Math.min(Math.max(-s,-l),s),m=c*(c+2*l)+f):(d=Math.max(0,-(a*s+o)),c=d>0?s:Math.min(Math.max(-s,-l),s),m=-d*d+c*(c+2*l)+f);else c=a>0?-s:s,d=Math.max(0,-(a*c+o)),m=-d*d+c*(c+2*l)+f;return i&&i.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(al).addScaledVector(Sa,c),m}intersectSphere(e,n){oi.subVectors(e.center,this.origin);const i=oi.dot(this.direction),r=oi.dot(oi)-i*i,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,n):this.at(o,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,a,o,l;const f=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,c=this.origin;return f>=0?(i=(e.min.x-c.x)*f,r=(e.max.x-c.x)*f):(i=(e.max.x-c.x)*f,r=(e.min.x-c.x)*f),u>=0?(s=(e.min.y-c.y)*u,a=(e.max.y-c.y)*u):(s=(e.max.y-c.y)*u,a=(e.min.y-c.y)*u),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),d>=0?(o=(e.min.z-c.z)*d,l=(e.max.z-c.z)*d):(o=(e.max.z-c.z)*d,l=(e.min.z-c.z)*d),i>l||o>r)||((o>i||i!==i)&&(i=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,oi)!==null}intersectTriangle(e,n,i,r,s){ol.subVectors(n,e),Ma.subVectors(i,e),ll.crossVectors(ol,Ma);let a=this.direction.dot(ll),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Li.subVectors(this.origin,e);const l=o*this.direction.dot(Ma.crossVectors(Li,Ma));if(l<0)return null;const f=o*this.direction.dot(ol.cross(Li));if(f<0||l+f>a)return null;const u=-o*Li.dot(ll);return u<0?null:this.at(u/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ft{constructor(e,n,i,r,s,a,o,l,f,u,d,c,m,p,y,g){Ft.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,a,o,l,f,u,d,c,m,p,y,g)}set(e,n,i,r,s,a,o,l,f,u,d,c,m,p,y,g){const h=this.elements;return h[0]=e,h[4]=n,h[8]=i,h[12]=r,h[1]=s,h[5]=a,h[9]=o,h[13]=l,h[2]=f,h[6]=u,h[10]=d,h[14]=c,h[3]=m,h[7]=p,h[11]=y,h[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ft().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/Hr.setFromMatrixColumn(e,0).length(),s=1/Hr.setFromMatrixColumn(e,1).length(),a=1/Hr.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*a,n[9]=i[9]*a,n[10]=i[10]*a,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(r),f=Math.sin(r),u=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){const c=a*u,m=a*d,p=o*u,y=o*d;n[0]=l*u,n[4]=-l*d,n[8]=f,n[1]=m+p*f,n[5]=c-y*f,n[9]=-o*l,n[2]=y-c*f,n[6]=p+m*f,n[10]=a*l}else if(e.order==="YXZ"){const c=l*u,m=l*d,p=f*u,y=f*d;n[0]=c+y*o,n[4]=p*o-m,n[8]=a*f,n[1]=a*d,n[5]=a*u,n[9]=-o,n[2]=m*o-p,n[6]=y+c*o,n[10]=a*l}else if(e.order==="ZXY"){const c=l*u,m=l*d,p=f*u,y=f*d;n[0]=c-y*o,n[4]=-a*d,n[8]=p+m*o,n[1]=m+p*o,n[5]=a*u,n[9]=y-c*o,n[2]=-a*f,n[6]=o,n[10]=a*l}else if(e.order==="ZYX"){const c=a*u,m=a*d,p=o*u,y=o*d;n[0]=l*u,n[4]=p*f-m,n[8]=c*f+y,n[1]=l*d,n[5]=y*f+c,n[9]=m*f-p,n[2]=-f,n[6]=o*l,n[10]=a*l}else if(e.order==="YZX"){const c=a*l,m=a*f,p=o*l,y=o*f;n[0]=l*u,n[4]=y-c*d,n[8]=p*d+m,n[1]=d,n[5]=a*u,n[9]=-o*u,n[2]=-f*u,n[6]=m*d+p,n[10]=c-y*d}else if(e.order==="XZY"){const c=a*l,m=a*f,p=o*l,y=o*f;n[0]=l*u,n[4]=-d,n[8]=f*u,n[1]=c*d+y,n[5]=a*u,n[9]=m*d-p,n[2]=p*d-m,n[6]=o*u,n[10]=y*d+c}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Rv,e,Pv)}lookAt(e,n,i){const r=this.elements;return gn.subVectors(e,n),gn.lengthSq()===0&&(gn.z=1),gn.normalize(),Ii.crossVectors(i,gn),Ii.lengthSq()===0&&(Math.abs(i.z)===1?gn.x+=1e-4:gn.z+=1e-4,gn.normalize(),Ii.crossVectors(i,gn)),Ii.normalize(),ba.crossVectors(gn,Ii),r[0]=Ii.x,r[4]=ba.x,r[8]=gn.x,r[1]=Ii.y,r[5]=ba.y,r[9]=gn.y,r[2]=Ii.z,r[6]=ba.z,r[10]=gn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,a=i[0],o=i[4],l=i[8],f=i[12],u=i[1],d=i[5],c=i[9],m=i[13],p=i[2],y=i[6],g=i[10],h=i[14],T=i[3],M=i[7],w=i[11],V=i[15],L=r[0],z=r[4],X=r[8],$=r[12],E=r[1],R=r[5],G=r[9],q=r[13],ce=r[2],re=r[6],ae=r[10],me=r[14],ne=r[3],Ne=r[7],ze=r[11],ke=r[15];return s[0]=a*L+o*E+l*ce+f*ne,s[4]=a*z+o*R+l*re+f*Ne,s[8]=a*X+o*G+l*ae+f*ze,s[12]=a*$+o*q+l*me+f*ke,s[1]=u*L+d*E+c*ce+m*ne,s[5]=u*z+d*R+c*re+m*Ne,s[9]=u*X+d*G+c*ae+m*ze,s[13]=u*$+d*q+c*me+m*ke,s[2]=p*L+y*E+g*ce+h*ne,s[6]=p*z+y*R+g*re+h*Ne,s[10]=p*X+y*G+g*ae+h*ze,s[14]=p*$+y*q+g*me+h*ke,s[3]=T*L+M*E+w*ce+V*ne,s[7]=T*z+M*R+w*re+V*Ne,s[11]=T*X+M*G+w*ae+V*ze,s[15]=T*$+M*q+w*me+V*ke,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],a=e[1],o=e[5],l=e[9],f=e[13],u=e[2],d=e[6],c=e[10],m=e[14],p=e[3],y=e[7],g=e[11],h=e[15];return p*(+s*l*d-r*f*d-s*o*c+i*f*c+r*o*m-i*l*m)+y*(+n*l*m-n*f*c+s*a*c-r*a*m+r*f*u-s*l*u)+g*(+n*f*d-n*o*m-s*a*d+i*a*m+s*o*u-i*f*u)+h*(-r*o*u-n*l*d+n*o*c+r*a*d-i*a*c+i*l*u)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],f=e[7],u=e[8],d=e[9],c=e[10],m=e[11],p=e[12],y=e[13],g=e[14],h=e[15],T=d*g*f-y*c*f+y*l*m-o*g*m-d*l*h+o*c*h,M=p*c*f-u*g*f-p*l*m+a*g*m+u*l*h-a*c*h,w=u*y*f-p*d*f+p*o*m-a*y*m-u*o*h+a*d*h,V=p*d*l-u*y*l-p*o*c+a*y*c+u*o*g-a*d*g,L=n*T+i*M+r*w+s*V;if(L===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const z=1/L;return e[0]=T*z,e[1]=(y*c*s-d*g*s-y*r*m+i*g*m+d*r*h-i*c*h)*z,e[2]=(o*g*s-y*l*s+y*r*f-i*g*f-o*r*h+i*l*h)*z,e[3]=(d*l*s-o*c*s-d*r*f+i*c*f+o*r*m-i*l*m)*z,e[4]=M*z,e[5]=(u*g*s-p*c*s+p*r*m-n*g*m-u*r*h+n*c*h)*z,e[6]=(p*l*s-a*g*s-p*r*f+n*g*f+a*r*h-n*l*h)*z,e[7]=(a*c*s-u*l*s+u*r*f-n*c*f-a*r*m+n*l*m)*z,e[8]=w*z,e[9]=(p*d*s-u*y*s-p*i*m+n*y*m+u*i*h-n*d*h)*z,e[10]=(a*y*s-p*o*s+p*i*f-n*y*f-a*i*h+n*o*h)*z,e[11]=(u*o*s-a*d*s-u*i*f+n*d*f+a*i*m-n*o*m)*z,e[12]=V*z,e[13]=(u*y*r-p*d*r+p*i*c-n*y*c-u*i*g+n*d*g)*z,e[14]=(p*o*r-a*y*r-p*i*l+n*y*l+a*i*g-n*o*g)*z,e[15]=(a*d*r-u*o*r+u*i*l-n*d*l-a*i*c+n*o*c)*z,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,a=e.x,o=e.y,l=e.z,f=s*a,u=s*o;return this.set(f*a+i,f*o-r*l,f*l+r*o,0,f*o+r*l,u*o+i,u*l-r*a,0,f*l-r*o,u*l+r*a,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,a){return this.set(1,i,s,0,e,1,a,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,a=n._y,o=n._z,l=n._w,f=s+s,u=a+a,d=o+o,c=s*f,m=s*u,p=s*d,y=a*u,g=a*d,h=o*d,T=l*f,M=l*u,w=l*d,V=i.x,L=i.y,z=i.z;return r[0]=(1-(y+h))*V,r[1]=(m+w)*V,r[2]=(p-M)*V,r[3]=0,r[4]=(m-w)*L,r[5]=(1-(c+h))*L,r[6]=(g+T)*L,r[7]=0,r[8]=(p+M)*z,r[9]=(g-T)*z,r[10]=(1-(c+y))*z,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let s=Hr.set(r[0],r[1],r[2]).length();const a=Hr.set(r[4],r[5],r[6]).length(),o=Hr.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Dn.copy(this);const f=1/s,u=1/a,d=1/o;return Dn.elements[0]*=f,Dn.elements[1]*=f,Dn.elements[2]*=f,Dn.elements[4]*=u,Dn.elements[5]*=u,Dn.elements[6]*=u,Dn.elements[8]*=d,Dn.elements[9]*=d,Dn.elements[10]*=d,n.setFromRotationMatrix(Dn),i.x=s,i.y=a,i.z=o,this}makePerspective(e,n,i,r,s,a,o=vi){const l=this.elements,f=2*s/(n-e),u=2*s/(i-r),d=(n+e)/(n-e),c=(i+r)/(i-r);let m,p;if(o===vi)m=-(a+s)/(a-s),p=-2*a*s/(a-s);else if(o===fo)m=-a/(a-s),p=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=f,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=u,l[9]=c,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=p,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,n,i,r,s,a,o=vi){const l=this.elements,f=1/(n-e),u=1/(i-r),d=1/(a-s),c=(n+e)*f,m=(i+r)*u;let p,y;if(o===vi)p=(a+s)*d,y=-2*d;else if(o===fo)p=s*d,y=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*f,l[4]=0,l[8]=0,l[12]=-c,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=y,l[14]=-p,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const Hr=new _e,Dn=new Ft,Rv=new _e(0,0,0),Pv=new _e(1,1,1),Ii=new _e,ba=new _e,gn=new _e,Nf=new Ft,Of=new oa;class bi{constructor(e=0,n=0,i=0,r=bi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],l=r[1],f=r[5],u=r[9],d=r[2],c=r[6],m=r[10];switch(n){case"XYZ":this._y=Math.asin(hn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,m),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(c,f),this._z=0);break;case"YXZ":this._x=Math.asin(-hn(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(l,f)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(hn(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(-d,m),this._z=Math.atan2(-a,f)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-hn(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(c,m),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,f));break;case"YZX":this._z=Math.asin(hn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,f),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-hn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(c,f),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,m),this._y=0);break;default:}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return Nf.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Nf,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return Of.setFromEuler(this),this.setFromQuaternion(Of,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}bi.DEFAULT_ORDER="XYZ";class Tu{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Dv=0;const Ff=new _e,Vr=new oa,li=new Ft,Ta=new _e,Rs=new _e,Lv=new _e,Iv=new oa,Bf=new _e(1,0,0),zf=new _e(0,1,0),kf=new _e(0,0,1),Hf={type:"added"},Uv={type:"removed"},Gr={type:"childadded",child:null},cl={type:"childremoved",child:null};class mn extends _s{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Dv++}),this.uuid=aa(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=mn.DEFAULT_UP.clone();const e=new _e,n=new bi,i=new oa,r=new _e(1,1,1);function s(){i.setFromEuler(n,!1)}function a(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Ft},normalMatrix:{value:new ut}}),this.matrix=new Ft,this.matrixWorld=new Ft,this.matrixAutoUpdate=mn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=mn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Tu,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Vr.setFromAxisAngle(e,n),this.quaternion.multiply(Vr),this}rotateOnWorldAxis(e,n){return Vr.setFromAxisAngle(e,n),this.quaternion.premultiply(Vr),this}rotateX(e){return this.rotateOnAxis(Bf,e)}rotateY(e){return this.rotateOnAxis(zf,e)}rotateZ(e){return this.rotateOnAxis(kf,e)}translateOnAxis(e,n){return Ff.copy(e).applyQuaternion(this.quaternion),this.position.add(Ff.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(Bf,e)}translateY(e){return this.translateOnAxis(zf,e)}translateZ(e){return this.translateOnAxis(kf,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(li.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?Ta.copy(e):Ta.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Rs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?li.lookAt(Rs,Ta,this.up):li.lookAt(Ta,Rs,this.up),this.quaternion.setFromRotationMatrix(li),r&&(li.extractRotation(r.matrixWorld),Vr.setFromRotationMatrix(li),this.quaternion.premultiply(Vr.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?this:(e&&e.isObject3D&&(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Hf),Gr.child=e,this.dispatchEvent(Gr),Gr.child=null),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(Uv),cl.child=e,this.dispatchEvent(cl),cl.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),li.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),li.multiply(e.parent.matrixWorld)),e.applyMatrix4(li),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Hf),Gr.child=e,this.dispatchEvent(Gr),Gr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(e,n);if(a!==void 0)return a}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Rs,e,Lv),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Rs,Iv,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let f=0,u=l.length;f<u;f++){const d=l[f];s(e.shapes,d)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,f=this.material.length;l<f;l++)o.push(s(e.materials,this.material[l]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(s(e.animations,l))}}if(n){const o=a(e.geometries),l=a(e.materials),f=a(e.textures),u=a(e.images),d=a(e.shapes),c=a(e.skeletons),m=a(e.animations),p=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),f.length>0&&(i.textures=f),u.length>0&&(i.images=u),d.length>0&&(i.shapes=d),c.length>0&&(i.skeletons=c),m.length>0&&(i.animations=m),p.length>0&&(i.nodes=p)}return i.object=r,i;function a(o){const l=[];for(const f in o){const u=o[f];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}mn.DEFAULT_UP=new _e(0,1,0);mn.DEFAULT_MATRIX_AUTO_UPDATE=!0;mn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ln=new _e,ci=new _e,ul=new _e,ui=new _e,Wr=new _e,Xr=new _e,Vf=new _e,fl=new _e,hl=new _e,dl=new _e,pl=new Ot,ml=new Ot,_l=new Ot;class Un{constructor(e=new _e,n=new _e,i=new _e){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),Ln.subVectors(e,n),r.cross(Ln);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){Ln.subVectors(r,n),ci.subVectors(i,n),ul.subVectors(e,n);const a=Ln.dot(Ln),o=Ln.dot(ci),l=Ln.dot(ul),f=ci.dot(ci),u=ci.dot(ul),d=a*f-o*o;if(d===0)return s.set(0,0,0),null;const c=1/d,m=(f*l-o*u)*c,p=(a*u-o*l)*c;return s.set(1-m-p,p,m)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,ui)===null?!1:ui.x>=0&&ui.y>=0&&ui.x+ui.y<=1}static getInterpolation(e,n,i,r,s,a,o,l){return this.getBarycoord(e,n,i,r,ui)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,ui.x),l.addScaledVector(a,ui.y),l.addScaledVector(o,ui.z),l)}static getInterpolatedAttribute(e,n,i,r,s,a){return pl.setScalar(0),ml.setScalar(0),_l.setScalar(0),pl.fromBufferAttribute(e,n),ml.fromBufferAttribute(e,i),_l.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(pl,s.x),a.addScaledVector(ml,s.y),a.addScaledVector(_l,s.z),a}static isFrontFacing(e,n,i,r){return Ln.subVectors(i,n),ci.subVectors(e,n),Ln.cross(ci).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ln.subVectors(this.c,this.b),ci.subVectors(this.a,this.b),Ln.cross(ci).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Un.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return Un.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,s){return Un.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return Un.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Un.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let a,o;Wr.subVectors(r,i),Xr.subVectors(s,i),fl.subVectors(e,i);const l=Wr.dot(fl),f=Xr.dot(fl);if(l<=0&&f<=0)return n.copy(i);hl.subVectors(e,r);const u=Wr.dot(hl),d=Xr.dot(hl);if(u>=0&&d<=u)return n.copy(r);const c=l*d-u*f;if(c<=0&&l>=0&&u<=0)return a=l/(l-u),n.copy(i).addScaledVector(Wr,a);dl.subVectors(e,s);const m=Wr.dot(dl),p=Xr.dot(dl);if(p>=0&&m<=p)return n.copy(s);const y=m*f-l*p;if(y<=0&&f>=0&&p<=0)return o=f/(f-p),n.copy(i).addScaledVector(Xr,o);const g=u*p-m*d;if(g<=0&&d-u>=0&&m-p>=0)return Vf.subVectors(s,r),o=(d-u)/(d-u+(m-p)),n.copy(r).addScaledVector(Vf,o);const h=1/(g+y+c);return a=y*h,o=c*h,n.copy(i).addScaledVector(Wr,a).addScaledVector(Xr,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Ep={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ui={h:0,s:0,l:0},Ea={h:0,s:0,l:0};function gl(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class Mt{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Wn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,xt.toWorkingColorSpace(this,n),this}setRGB(e,n,i,r=xt.workingColorSpace){return this.r=e,this.g=n,this.b=i,xt.toWorkingColorSpace(this,r),this}setHSL(e,n,i,r=xt.workingColorSpace){if(e=gv(e,1),n=hn(n,0,1),i=hn(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,a=2*i-s;this.r=gl(a,s,e+1/3),this.g=gl(a,s,e),this.b=gl(a,s,e-1/3)}return xt.toWorkingColorSpace(this,r),this}setStyle(e,n=Wn){function i(s){s!==void 0&&parseFloat(s)<1}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(a===6)return this.setHex(parseInt(s,16),n)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Wn){const i=Ep[e.toLowerCase()];return i!==void 0&&this.setHex(i,n),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=rs(e.r),this.g=rs(e.g),this.b=rs(e.b),this}copyLinearToSRGB(e){return this.r=tl(e.r),this.g=tl(e.g),this.b=tl(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Wn){return xt.fromWorkingColorSpace(Jt.copy(this),e),Math.round(hn(Jt.r*255,0,255))*65536+Math.round(hn(Jt.g*255,0,255))*256+Math.round(hn(Jt.b*255,0,255))}getHexString(e=Wn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=xt.workingColorSpace){xt.fromWorkingColorSpace(Jt.copy(this),n);const i=Jt.r,r=Jt.g,s=Jt.b,a=Math.max(i,r,s),o=Math.min(i,r,s);let l,f;const u=(o+a)/2;if(o===a)l=0,f=0;else{const d=a-o;switch(f=u<=.5?d/(a+o):d/(2-a-o),a){case i:l=(r-s)/d+(r<s?6:0);break;case r:l=(s-i)/d+2;break;case s:l=(i-r)/d+4;break}l/=6}return e.h=l,e.s=f,e.l=u,e}getRGB(e,n=xt.workingColorSpace){return xt.fromWorkingColorSpace(Jt.copy(this),n),e.r=Jt.r,e.g=Jt.g,e.b=Jt.b,e}getStyle(e=Wn){xt.fromWorkingColorSpace(Jt.copy(this),e);const n=Jt.r,i=Jt.g,r=Jt.b;return e!==Wn?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(Ui),this.setHSL(Ui.h+e,Ui.s+n,Ui.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(Ui),e.getHSL(Ea);const i=Qo(Ui.h,Ea.h,n),r=Qo(Ui.s,Ea.s,n),s=Qo(Ui.l,Ea.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Jt=new Mt;Mt.NAMES=Ep;let Nv=0;class Ro extends _s{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Nv++}),this.uuid=aa(),this.name="",this.type="Material",this.blending=Ar,this.side=Zi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=$l,this.blendDst=Kl,this.blendEquation=Sr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Mt(0,0,0),this.blendAlpha=0,this.depthFunc=os,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Cf,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Or,this.stencilZFail=Or,this.stencilZPass=Or,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0)continue;const r=this[n];r!==void 0&&(r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i)}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Ar&&(i.blending=this.blending),this.side!==Zi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==$l&&(i.blendSrc=this.blendSrc),this.blendDst!==Kl&&(i.blendDst=this.blendDst),this.blendEquation!==Sr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==os&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Cf&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Or&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Or&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Or&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(n){const s=r(e.textures),a=r(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){}}class Eu extends Ro{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Mt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new bi,this.combine=lp,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Bt=new _e,wa=new yt;class _n{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=Rf,this.updateRanges=[],this.gpuType=gi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)wa.fromBufferAttribute(this,n),wa.applyMatrix3(e),this.setXY(n,wa.x,wa.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)Bt.fromBufferAttribute(this,n),Bt.applyMatrix3(e),this.setXYZ(n,Bt.x,Bt.y,Bt.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)Bt.fromBufferAttribute(this,n),Bt.applyMatrix4(e),this.setXYZ(n,Bt.x,Bt.y,Bt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)Bt.fromBufferAttribute(this,n),Bt.applyNormalMatrix(e),this.setXYZ(n,Bt.x,Bt.y,Bt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)Bt.fromBufferAttribute(this,n),Bt.transformDirection(e),this.setXYZ(n,Bt.x,Bt.y,Bt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=Es(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=fn(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Es(n,this.array)),n}setX(e,n){return this.normalized&&(n=fn(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Es(n,this.array)),n}setY(e,n){return this.normalized&&(n=fn(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Es(n,this.array)),n}setZ(e,n){return this.normalized&&(n=fn(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Es(n,this.array)),n}setW(e,n){return this.normalized&&(n=fn(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=fn(n,this.array),i=fn(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=fn(n,this.array),i=fn(i,this.array),r=fn(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=fn(n,this.array),i=fn(i,this.array),r=fn(r,this.array),s=fn(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Rf&&(e.usage=this.usage),e}}class wp extends _n{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class Ap extends _n{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class Cr extends _n{constructor(e,n,i){super(new Float32Array(e),n,i)}}let Ov=0;const bn=new Ft,vl=new mn,jr=new _e,vn=new la,Ps=new la,Xt=new _e;class nr extends _s{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Ov++}),this.uuid=aa(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Sp(e)?Ap:wp)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new ut().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return bn.makeRotationFromQuaternion(e),this.applyMatrix4(bn),this}rotateX(e){return bn.makeRotationX(e),this.applyMatrix4(bn),this}rotateY(e){return bn.makeRotationY(e),this.applyMatrix4(bn),this}rotateZ(e){return bn.makeRotationZ(e),this.applyMatrix4(bn),this}translate(e,n,i){return bn.makeTranslation(e,n,i),this.applyMatrix4(bn),this}scale(e,n,i){return bn.makeScale(e,n,i),this.applyMatrix4(bn),this}lookAt(e){return vl.lookAt(e),vl.updateMatrix(),this.applyMatrix4(vl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(jr).negate(),this.translate(jr.x,jr.y,jr.z),this}setFromPoints(e){const n=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];n.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Cr(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new la);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){this.boundingBox.set(new _e(-1/0,-1/0,-1/0),new _e(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];vn.setFromBufferAttribute(s),this.morphTargetsRelative?(Xt.addVectors(this.boundingBox.min,vn.min),this.boundingBox.expandByPoint(Xt),Xt.addVectors(this.boundingBox.max,vn.max),this.boundingBox.expandByPoint(Xt)):(this.boundingBox.expandByPoint(vn.min),this.boundingBox.expandByPoint(vn.max))}}else this.boundingBox.makeEmpty();isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new bu);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){this.boundingSphere.set(new _e,1/0);return}if(e){const i=this.boundingSphere.center;if(vn.setFromBufferAttribute(e),n)for(let s=0,a=n.length;s<a;s++){const o=n[s];Ps.setFromBufferAttribute(o),this.morphTargetsRelative?(Xt.addVectors(vn.min,Ps.min),vn.expandByPoint(Xt),Xt.addVectors(vn.max,Ps.max),vn.expandByPoint(Xt)):(vn.expandByPoint(Ps.min),vn.expandByPoint(Ps.max))}vn.getCenter(i);let r=0;for(let s=0,a=e.count;s<a;s++)Xt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Xt));if(n)for(let s=0,a=n.length;s<a;s++){const o=n[s],l=this.morphTargetsRelative;for(let f=0,u=o.count;f<u;f++)Xt.fromBufferAttribute(o,f),l&&(jr.fromBufferAttribute(e,f),Xt.add(jr)),r=Math.max(r,i.distanceToSquared(Xt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0)return;const i=n.position,r=n.normal,s=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new _n(new Float32Array(4*i.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let X=0;X<i.count;X++)o[X]=new _e,l[X]=new _e;const f=new _e,u=new _e,d=new _e,c=new yt,m=new yt,p=new yt,y=new _e,g=new _e;function h(X,$,E){f.fromBufferAttribute(i,X),u.fromBufferAttribute(i,$),d.fromBufferAttribute(i,E),c.fromBufferAttribute(s,X),m.fromBufferAttribute(s,$),p.fromBufferAttribute(s,E),u.sub(f),d.sub(f),m.sub(c),p.sub(c);const R=1/(m.x*p.y-p.x*m.y);isFinite(R)&&(y.copy(u).multiplyScalar(p.y).addScaledVector(d,-m.y).multiplyScalar(R),g.copy(d).multiplyScalar(m.x).addScaledVector(u,-p.x).multiplyScalar(R),o[X].add(y),o[$].add(y),o[E].add(y),l[X].add(g),l[$].add(g),l[E].add(g))}let T=this.groups;T.length===0&&(T=[{start:0,count:e.count}]);for(let X=0,$=T.length;X<$;++X){const E=T[X],R=E.start,G=E.count;for(let q=R,ce=R+G;q<ce;q+=3)h(e.getX(q+0),e.getX(q+1),e.getX(q+2))}const M=new _e,w=new _e,V=new _e,L=new _e;function z(X){V.fromBufferAttribute(r,X),L.copy(V);const $=o[X];M.copy($),M.sub(V.multiplyScalar(V.dot($))).normalize(),w.crossVectors(L,$);const R=w.dot(l[X])<0?-1:1;a.setXYZW(X,M.x,M.y,M.z,R)}for(let X=0,$=T.length;X<$;++X){const E=T[X],R=E.start,G=E.count;for(let q=R,ce=R+G;q<ce;q+=3)z(e.getX(q+0)),z(e.getX(q+1)),z(e.getX(q+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new _n(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let c=0,m=i.count;c<m;c++)i.setXYZ(c,0,0,0);const r=new _e,s=new _e,a=new _e,o=new _e,l=new _e,f=new _e,u=new _e,d=new _e;if(e)for(let c=0,m=e.count;c<m;c+=3){const p=e.getX(c+0),y=e.getX(c+1),g=e.getX(c+2);r.fromBufferAttribute(n,p),s.fromBufferAttribute(n,y),a.fromBufferAttribute(n,g),u.subVectors(a,s),d.subVectors(r,s),u.cross(d),o.fromBufferAttribute(i,p),l.fromBufferAttribute(i,y),f.fromBufferAttribute(i,g),o.add(u),l.add(u),f.add(u),i.setXYZ(p,o.x,o.y,o.z),i.setXYZ(y,l.x,l.y,l.z),i.setXYZ(g,f.x,f.y,f.z)}else for(let c=0,m=n.count;c<m;c+=3)r.fromBufferAttribute(n,c+0),s.fromBufferAttribute(n,c+1),a.fromBufferAttribute(n,c+2),u.subVectors(a,s),d.subVectors(r,s),u.cross(d),i.setXYZ(c+0,u.x,u.y,u.z),i.setXYZ(c+1,u.x,u.y,u.z),i.setXYZ(c+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Xt.fromBufferAttribute(e,n),Xt.normalize(),e.setXYZ(n,Xt.x,Xt.y,Xt.z)}toNonIndexed(){function e(o,l){const f=o.array,u=o.itemSize,d=o.normalized,c=new f.constructor(l.length*u);let m=0,p=0;for(let y=0,g=l.length;y<g;y++){o.isInterleavedBufferAttribute?m=l[y]*o.data.stride+o.offset:m=l[y]*u;for(let h=0;h<u;h++)c[p++]=f[m++]}return new _n(c,u,d)}if(this.index===null)return this;const n=new nr,i=this.index.array,r=this.attributes;for(const o in r){const l=r[o],f=e(l,i);n.setAttribute(o,f)}const s=this.morphAttributes;for(const o in s){const l=[],f=s[o];for(let u=0,d=f.length;u<d;u++){const c=f[u],m=e(c,i);l.push(m)}n.morphAttributes[o]=l}n.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const f=a[o];n.addGroup(f.start,f.count,f.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const f in l)l[f]!==void 0&&(e[f]=l[f]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const f=i[l];e.data.attributes[l]=f.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const f=this.morphAttributes[l],u=[];for(let d=0,c=f.length;d<c;d++){const m=f[d];u.push(m.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(n));const r=e.attributes;for(const f in r){const u=r[f];this.setAttribute(f,u.clone(n))}const s=e.morphAttributes;for(const f in s){const u=[],d=s[f];for(let c=0,m=d.length;c<m;c++)u.push(d[c].clone(n));this.morphAttributes[f]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let f=0,u=a.length;f<u;f++){const d=a[f];this.addGroup(d.start,d.count,d.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Gf=new Ft,fr=new Tp,Aa=new bu,Wf=new _e,Ca=new _e,Ra=new _e,Pa=new _e,xl=new _e,Da=new _e,Xf=new _e,La=new _e;class An extends mn{constructor(e=new nr,n=new Eu){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){Da.set(0,0,0);for(let l=0,f=s.length;l<f;l++){const u=o[l],d=s[l];u!==0&&(xl.fromBufferAttribute(d,e),a?Da.addScaledVector(xl,u):Da.addScaledVector(xl.sub(n),u))}n.add(Da)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Aa.copy(i.boundingSphere),Aa.applyMatrix4(s),fr.copy(e.ray).recast(e.near),!(Aa.containsPoint(fr.origin)===!1&&(fr.intersectSphere(Aa,Wf)===null||fr.origin.distanceToSquared(Wf)>(e.far-e.near)**2))&&(Gf.copy(s).invert(),fr.copy(e.ray).applyMatrix4(Gf),!(i.boundingBox!==null&&fr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,fr)))}_computeIntersections(e,n,i){let r;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,f=s.attributes.uv,u=s.attributes.uv1,d=s.attributes.normal,c=s.groups,m=s.drawRange;if(o!==null)if(Array.isArray(a))for(let p=0,y=c.length;p<y;p++){const g=c[p],h=a[g.materialIndex],T=Math.max(g.start,m.start),M=Math.min(o.count,Math.min(g.start+g.count,m.start+m.count));for(let w=T,V=M;w<V;w+=3){const L=o.getX(w),z=o.getX(w+1),X=o.getX(w+2);r=Ia(this,h,e,i,f,u,d,L,z,X),r&&(r.faceIndex=Math.floor(w/3),r.face.materialIndex=g.materialIndex,n.push(r))}}else{const p=Math.max(0,m.start),y=Math.min(o.count,m.start+m.count);for(let g=p,h=y;g<h;g+=3){const T=o.getX(g),M=o.getX(g+1),w=o.getX(g+2);r=Ia(this,a,e,i,f,u,d,T,M,w),r&&(r.faceIndex=Math.floor(g/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(a))for(let p=0,y=c.length;p<y;p++){const g=c[p],h=a[g.materialIndex],T=Math.max(g.start,m.start),M=Math.min(l.count,Math.min(g.start+g.count,m.start+m.count));for(let w=T,V=M;w<V;w+=3){const L=w,z=w+1,X=w+2;r=Ia(this,h,e,i,f,u,d,L,z,X),r&&(r.faceIndex=Math.floor(w/3),r.face.materialIndex=g.materialIndex,n.push(r))}}else{const p=Math.max(0,m.start),y=Math.min(l.count,m.start+m.count);for(let g=p,h=y;g<h;g+=3){const T=g,M=g+1,w=g+2;r=Ia(this,a,e,i,f,u,d,T,M,w),r&&(r.faceIndex=Math.floor(g/3),n.push(r))}}}}function Fv(t,e,n,i,r,s,a,o){let l;if(e.side===pn?l=i.intersectTriangle(a,s,r,!0,o):l=i.intersectTriangle(r,s,a,e.side===Zi,o),l===null)return null;La.copy(o),La.applyMatrix4(t.matrixWorld);const f=n.ray.origin.distanceTo(La);return f<n.near||f>n.far?null:{distance:f,point:La.clone(),object:t}}function Ia(t,e,n,i,r,s,a,o,l,f){t.getVertexPosition(o,Ca),t.getVertexPosition(l,Ra),t.getVertexPosition(f,Pa);const u=Fv(t,e,n,i,Ca,Ra,Pa,Xf);if(u){const d=new _e;Un.getBarycoord(Xf,Ca,Ra,Pa,d),r&&(u.uv=Un.getInterpolatedAttribute(r,o,l,f,d,new yt)),s&&(u.uv1=Un.getInterpolatedAttribute(s,o,l,f,d,new yt)),a&&(u.normal=Un.getInterpolatedAttribute(a,o,l,f,d,new _e),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const c={a:o,b:l,c:f,normal:new _e,materialIndex:0};Un.getNormal(Ca,Ra,Pa,c.normal),u.face=c,u.barycoord=d}return u}class ca extends nr{constructor(e=1,n=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const l=[],f=[],u=[],d=[];let c=0,m=0;p("z","y","x",-1,-1,i,n,e,a,s,0),p("z","y","x",1,-1,i,n,-e,a,s,1),p("x","z","y",1,1,e,i,n,r,a,2),p("x","z","y",1,-1,e,i,-n,r,a,3),p("x","y","z",1,-1,e,n,i,r,s,4),p("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new Cr(f,3)),this.setAttribute("normal",new Cr(u,3)),this.setAttribute("uv",new Cr(d,2));function p(y,g,h,T,M,w,V,L,z,X,$){const E=w/z,R=V/X,G=w/2,q=V/2,ce=L/2,re=z+1,ae=X+1;let me=0,ne=0;const Ne=new _e;for(let ze=0;ze<ae;ze++){const ke=ze*R-q;for(let Ze=0;Ze<re;Ze++){const nt=Ze*E-G;Ne[y]=nt*T,Ne[g]=ke*M,Ne[h]=ce,f.push(Ne.x,Ne.y,Ne.z),Ne[y]=0,Ne[g]=0,Ne[h]=L>0?1:-1,u.push(Ne.x,Ne.y,Ne.z),d.push(Ze/z),d.push(1-ze/X),me+=1}}for(let ze=0;ze<X;ze++)for(let ke=0;ke<z;ke++){const Ze=c+ke+re*ze,nt=c+ke+re*(ze+1),Se=c+(ke+1)+re*(ze+1),Ce=c+(ke+1)+re*ze;l.push(Ze,nt,Ce),l.push(nt,Se,Ce),ne+=6}o.addGroup(m,ne,$),m+=ne,c+=me}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ca(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function hs(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?e[n][i]=null:e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function an(t){const e={};for(let n=0;n<t.length;n++){const i=hs(t[n]);for(const r in i)e[r]=i[r]}return e}function Bv(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function Cp(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:xt.workingColorSpace}const zv={clone:hs,merge:an};var kv=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Hv=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Qn extends Ro{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=kv,this.fragmentShader=Hv,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=hs(e.uniforms),this.uniformsGroups=Bv(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?n.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?n.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?n.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?n.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?n.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?n.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?n.uniforms[r]={type:"m4",value:a.toArray()}:n.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class Rp extends mn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ft,this.projectionMatrix=new Ft,this.projectionMatrixInverse=new Ft,this.coordinateSystem=vi}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ni=new _e,jf=new yt,qf=new yt;class Tn extends Rp{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=Uc*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Jo*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Uc*2*Math.atan(Math.tan(Jo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){Ni.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ni.x,Ni.y).multiplyScalar(-e/Ni.z),Ni.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ni.x,Ni.y).multiplyScalar(-e/Ni.z)}getViewSize(e,n){return this.getViewBounds(e,jf,qf),n.subVectors(qf,jf)}setViewOffset(e,n,i,r,s,a){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Jo*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,f=a.fullHeight;s+=a.offsetX*r/l,n-=a.offsetY*i/f,r*=a.width/l,i*=a.height/f}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const qr=-90,Yr=1;class Vv extends mn{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Tn(qr,Yr,e,n);r.layers=this.layers,this.add(r);const s=new Tn(qr,Yr,e,n);s.layers=this.layers,this.add(s);const a=new Tn(qr,Yr,e,n);a.layers=this.layers,this.add(a);const o=new Tn(qr,Yr,e,n);o.layers=this.layers,this.add(o);const l=new Tn(qr,Yr,e,n);l.layers=this.layers,this.add(l);const f=new Tn(qr,Yr,e,n);f.layers=this.layers,this.add(f)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,a,o,l]=n;for(const f of n)this.remove(f);if(e===vi)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===fo)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const f of n)this.add(f),f.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,f,u]=this.children,d=e.getRenderTarget(),c=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;const y=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(n,s),e.setRenderTarget(i,1,r),e.render(n,a),e.setRenderTarget(i,2,r),e.render(n,o),e.setRenderTarget(i,3,r),e.render(n,l),e.setRenderTarget(i,4,r),e.render(n,f),i.texture.generateMipmaps=y,e.setRenderTarget(i,5,r),e.render(n,u),e.setRenderTarget(d,c,m),e.xr.enabled=p,i.texture.needsPMREMUpdate=!0}}class Pp extends Yt{constructor(e,n,i,r,s,a,o,l,f,u){e=e!==void 0?e:[],n=n!==void 0?n:ls,super(e,n,i,r,s,a,o,l,f,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Gv extends Lr{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new Pp(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:un}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new ca(5,5,5),s=new Qn({name:"CubemapFromEquirect",uniforms:hs(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:pn,blending:Yi});s.uniforms.tEquirect.value=n;const a=new An(r,s),o=n.minFilter;return n.minFilter===Tr&&(n.minFilter=un),new Vv(1,10,this).update(e,a),n.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,n,i,r){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(n,i,r);e.setRenderTarget(s)}}const yl=new _e,Wv=new _e,Xv=new ut;class ki{constructor(e=new _e(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=yl.subVectors(i,n).cross(Wv.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(yl),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:n.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||Xv.getNormalMatrix(e),r=this.coplanarPoint(yl).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const hr=new bu,Ua=new _e;class Dp{constructor(e=new ki,n=new ki,i=new ki,r=new ki,s=new ki,a=new ki){this.planes=[e,n,i,r,s,a]}set(e,n,i,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(n),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=vi){const i=this.planes,r=e.elements,s=r[0],a=r[1],o=r[2],l=r[3],f=r[4],u=r[5],d=r[6],c=r[7],m=r[8],p=r[9],y=r[10],g=r[11],h=r[12],T=r[13],M=r[14],w=r[15];if(i[0].setComponents(l-s,c-f,g-m,w-h).normalize(),i[1].setComponents(l+s,c+f,g+m,w+h).normalize(),i[2].setComponents(l+a,c+u,g+p,w+T).normalize(),i[3].setComponents(l-a,c-u,g-p,w-T).normalize(),i[4].setComponents(l-o,c-d,g-y,w-M).normalize(),n===vi)i[5].setComponents(l+o,c+d,g+y,w+M).normalize();else if(n===fo)i[5].setComponents(o,d,y,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),hr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),hr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(hr)}intersectsSprite(e){return hr.center.set(0,0,0),hr.radius=.7071067811865476,hr.applyMatrix4(e.matrixWorld),this.intersectsSphere(hr)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(Ua.x=r.normal.x>0?e.max.x:e.min.x,Ua.y=r.normal.y>0?e.max.y:e.min.y,Ua.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Ua)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Lp(){let t=null,e=!1,n=null,i=null;function r(s,a){n(s,a),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function jv(t){const e=new WeakMap;function n(o,l){const f=o.array,u=o.usage,d=f.byteLength,c=t.createBuffer();t.bindBuffer(l,c),t.bufferData(l,f,u),o.onUploadCallback();let m;if(f instanceof Float32Array)m=t.FLOAT;else if(f instanceof Uint16Array)o.isFloat16BufferAttribute?m=t.HALF_FLOAT:m=t.UNSIGNED_SHORT;else if(f instanceof Int16Array)m=t.SHORT;else if(f instanceof Uint32Array)m=t.UNSIGNED_INT;else if(f instanceof Int32Array)m=t.INT;else if(f instanceof Int8Array)m=t.BYTE;else if(f instanceof Uint8Array)m=t.UNSIGNED_BYTE;else if(f instanceof Uint8ClampedArray)m=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:c,type:m,bytesPerElement:f.BYTES_PER_ELEMENT,version:o.version,size:d}}function i(o,l,f){const u=l.array,d=l.updateRanges;if(t.bindBuffer(f,o),d.length===0)t.bufferSubData(f,0,u);else{d.sort((m,p)=>m.start-p.start);let c=0;for(let m=1;m<d.length;m++){const p=d[c],y=d[m];y.start<=p.start+p.count+1?p.count=Math.max(p.count,y.start+y.count-p.start):(++c,d[c]=y)}d.length=c+1;for(let m=0,p=d.length;m<p;m++){const y=d[m];t.bufferSubData(f,y.start*u.BYTES_PER_ELEMENT,u,y.start,y.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(t.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const f=e.get(o);if(f===void 0)e.set(o,n(o,l));else if(f.version<o.version){if(f.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(f.buffer,o,l),f.version=o.version}}return{get:r,remove:s,update:a}}class gs extends nr{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,a=n/2,o=Math.floor(i),l=Math.floor(r),f=o+1,u=l+1,d=e/o,c=n/l,m=[],p=[],y=[],g=[];for(let h=0;h<u;h++){const T=h*c-a;for(let M=0;M<f;M++){const w=M*d-s;p.push(w,-T,0),y.push(0,0,1),g.push(M/o),g.push(1-h/l)}}for(let h=0;h<l;h++)for(let T=0;T<o;T++){const M=T+f*h,w=T+f*(h+1),V=T+1+f*(h+1),L=T+1+f*h;m.push(M,w,L),m.push(w,V,L)}this.setIndex(m),this.setAttribute("position",new Cr(p,3)),this.setAttribute("normal",new Cr(y,3)),this.setAttribute("uv",new Cr(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new gs(e.width,e.height,e.widthSegments,e.heightSegments)}}var qv=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Yv=`#ifdef USE_ALPHAHASH
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
#endif`,$v=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Kv=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Zv=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Jv=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Qv=`#ifdef USE_AOMAP
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
#endif`,ex=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,tx=`#ifdef USE_BATCHING
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
#endif`,nx=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,ix=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,rx=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,sx=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,ax=`#ifdef USE_IRIDESCENCE
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
#endif`,ox=`#ifdef USE_BUMPMAP
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
#endif`,lx=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,cx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,ux=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,fx=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,hx=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,dx=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,px=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,mx=`#if defined( USE_COLOR_ALPHA )
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
#endif`,_x=`#define PI 3.141592653589793
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
} // validated`,gx=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,vx=`vec3 transformedNormal = objectNormal;
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
#endif`,xx=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,yx=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Sx=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Mx=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,bx="gl_FragColor = linearToOutputTexel( gl_FragColor );",Tx=`
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
}`,Ex=`#ifdef USE_ENVMAP
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
#endif`,wx=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Ax=`#ifdef USE_ENVMAP
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
#endif`,Cx=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Rx=`#ifdef USE_ENVMAP
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
#endif`,Px=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Dx=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Lx=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Ix=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Ux=`#ifdef USE_GRADIENTMAP
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
}`,Nx=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Ox=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Fx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Bx=`uniform bool receiveShadow;
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
#endif`,zx=`#ifdef USE_ENVMAP
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
#endif`,kx=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Hx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Vx=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Gx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Wx=`PhysicalMaterial material;
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
#endif`,Xx=`struct PhysicalMaterial {
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
}`,jx=`
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
#endif`,qx=`#if defined( RE_IndirectDiffuse )
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
#endif`,Yx=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,$x=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Kx=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Zx=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Jx=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Qx=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,ey=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,ty=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,ny=`#if defined( USE_POINTS_UV )
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
#endif`,iy=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,ry=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,sy=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,ay=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,oy=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ly=`#ifdef USE_MORPHTARGETS
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
#endif`,cy=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,uy=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,fy=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,hy=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,dy=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,py=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,my=`#ifdef USE_NORMALMAP
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
#endif`,_y=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,gy=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,vy=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,xy=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,yy=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Sy=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,My=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,by=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Ty=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Ey=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,wy=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Ay=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Cy=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Ry=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Py=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Dy=`float getShadowMask() {
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
}`,Ly=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Iy=`#ifdef USE_SKINNING
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
#endif`,Uy=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Ny=`#ifdef USE_SKINNING
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
#endif`,Oy=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Fy=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,By=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,zy=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,ky=`#ifdef USE_TRANSMISSION
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
#endif`,Hy=`#ifdef USE_TRANSMISSION
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
#endif`,Vy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Gy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Wy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Xy=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const jy=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,qy=`uniform sampler2D t2D;
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
}`,Yy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,$y=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Ky=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Zy=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Jy=`#include <common>
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
}`,Qy=`#if DEPTH_PACKING == 3200
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
}`,eS=`#define DISTANCE
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
}`,tS=`#define DISTANCE
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
}`,nS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,iS=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,rS=`uniform float scale;
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
}`,sS=`uniform vec3 diffuse;
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
}`,aS=`#include <common>
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
}`,oS=`uniform vec3 diffuse;
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
}`,lS=`#define LAMBERT
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
}`,cS=`#define LAMBERT
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
}`,uS=`#define MATCAP
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
}`,fS=`#define MATCAP
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
}`,hS=`#define NORMAL
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
}`,dS=`#define NORMAL
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
}`,pS=`#define PHONG
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
}`,mS=`#define PHONG
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
}`,_S=`#define STANDARD
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
}`,gS=`#define STANDARD
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
}`,vS=`#define TOON
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
}`,xS=`#define TOON
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
}`,yS=`uniform float size;
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
}`,SS=`uniform vec3 diffuse;
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
}`,MS=`#include <common>
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
}`,bS=`uniform vec3 color;
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
}`,TS=`uniform float rotation;
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
}`,ES=`uniform vec3 diffuse;
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
}`,ct={alphahash_fragment:qv,alphahash_pars_fragment:Yv,alphamap_fragment:$v,alphamap_pars_fragment:Kv,alphatest_fragment:Zv,alphatest_pars_fragment:Jv,aomap_fragment:Qv,aomap_pars_fragment:ex,batching_pars_vertex:tx,batching_vertex:nx,begin_vertex:ix,beginnormal_vertex:rx,bsdfs:sx,iridescence_fragment:ax,bumpmap_pars_fragment:ox,clipping_planes_fragment:lx,clipping_planes_pars_fragment:cx,clipping_planes_pars_vertex:ux,clipping_planes_vertex:fx,color_fragment:hx,color_pars_fragment:dx,color_pars_vertex:px,color_vertex:mx,common:_x,cube_uv_reflection_fragment:gx,defaultnormal_vertex:vx,displacementmap_pars_vertex:xx,displacementmap_vertex:yx,emissivemap_fragment:Sx,emissivemap_pars_fragment:Mx,colorspace_fragment:bx,colorspace_pars_fragment:Tx,envmap_fragment:Ex,envmap_common_pars_fragment:wx,envmap_pars_fragment:Ax,envmap_pars_vertex:Cx,envmap_physical_pars_fragment:zx,envmap_vertex:Rx,fog_vertex:Px,fog_pars_vertex:Dx,fog_fragment:Lx,fog_pars_fragment:Ix,gradientmap_pars_fragment:Ux,lightmap_pars_fragment:Nx,lights_lambert_fragment:Ox,lights_lambert_pars_fragment:Fx,lights_pars_begin:Bx,lights_toon_fragment:kx,lights_toon_pars_fragment:Hx,lights_phong_fragment:Vx,lights_phong_pars_fragment:Gx,lights_physical_fragment:Wx,lights_physical_pars_fragment:Xx,lights_fragment_begin:jx,lights_fragment_maps:qx,lights_fragment_end:Yx,logdepthbuf_fragment:$x,logdepthbuf_pars_fragment:Kx,logdepthbuf_pars_vertex:Zx,logdepthbuf_vertex:Jx,map_fragment:Qx,map_pars_fragment:ey,map_particle_fragment:ty,map_particle_pars_fragment:ny,metalnessmap_fragment:iy,metalnessmap_pars_fragment:ry,morphinstance_vertex:sy,morphcolor_vertex:ay,morphnormal_vertex:oy,morphtarget_pars_vertex:ly,morphtarget_vertex:cy,normal_fragment_begin:uy,normal_fragment_maps:fy,normal_pars_fragment:hy,normal_pars_vertex:dy,normal_vertex:py,normalmap_pars_fragment:my,clearcoat_normal_fragment_begin:_y,clearcoat_normal_fragment_maps:gy,clearcoat_pars_fragment:vy,iridescence_pars_fragment:xy,opaque_fragment:yy,packing:Sy,premultiplied_alpha_fragment:My,project_vertex:by,dithering_fragment:Ty,dithering_pars_fragment:Ey,roughnessmap_fragment:wy,roughnessmap_pars_fragment:Ay,shadowmap_pars_fragment:Cy,shadowmap_pars_vertex:Ry,shadowmap_vertex:Py,shadowmask_pars_fragment:Dy,skinbase_vertex:Ly,skinning_pars_vertex:Iy,skinning_vertex:Uy,skinnormal_vertex:Ny,specularmap_fragment:Oy,specularmap_pars_fragment:Fy,tonemapping_fragment:By,tonemapping_pars_fragment:zy,transmission_fragment:ky,transmission_pars_fragment:Hy,uv_pars_fragment:Vy,uv_pars_vertex:Gy,uv_vertex:Wy,worldpos_vertex:Xy,background_vert:jy,background_frag:qy,backgroundCube_vert:Yy,backgroundCube_frag:$y,cube_vert:Ky,cube_frag:Zy,depth_vert:Jy,depth_frag:Qy,distanceRGBA_vert:eS,distanceRGBA_frag:tS,equirect_vert:nS,equirect_frag:iS,linedashed_vert:rS,linedashed_frag:sS,meshbasic_vert:aS,meshbasic_frag:oS,meshlambert_vert:lS,meshlambert_frag:cS,meshmatcap_vert:uS,meshmatcap_frag:fS,meshnormal_vert:hS,meshnormal_frag:dS,meshphong_vert:pS,meshphong_frag:mS,meshphysical_vert:_S,meshphysical_frag:gS,meshtoon_vert:vS,meshtoon_frag:xS,points_vert:yS,points_frag:SS,shadow_vert:MS,shadow_frag:bS,sprite_vert:TS,sprite_frag:ES},He={common:{diffuse:{value:new Mt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ut},alphaMap:{value:null},alphaMapTransform:{value:new ut},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ut}},envmap:{envMap:{value:null},envMapRotation:{value:new ut},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ut}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ut}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ut},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ut},normalScale:{value:new yt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ut},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ut}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ut}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ut}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Mt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Mt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ut},alphaTest:{value:0},uvTransform:{value:new ut}},sprite:{diffuse:{value:new Mt(16777215)},opacity:{value:1},center:{value:new yt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ut},alphaMap:{value:null},alphaMapTransform:{value:new ut},alphaTest:{value:0}}},qn={basic:{uniforms:an([He.common,He.specularmap,He.envmap,He.aomap,He.lightmap,He.fog]),vertexShader:ct.meshbasic_vert,fragmentShader:ct.meshbasic_frag},lambert:{uniforms:an([He.common,He.specularmap,He.envmap,He.aomap,He.lightmap,He.emissivemap,He.bumpmap,He.normalmap,He.displacementmap,He.fog,He.lights,{emissive:{value:new Mt(0)}}]),vertexShader:ct.meshlambert_vert,fragmentShader:ct.meshlambert_frag},phong:{uniforms:an([He.common,He.specularmap,He.envmap,He.aomap,He.lightmap,He.emissivemap,He.bumpmap,He.normalmap,He.displacementmap,He.fog,He.lights,{emissive:{value:new Mt(0)},specular:{value:new Mt(1118481)},shininess:{value:30}}]),vertexShader:ct.meshphong_vert,fragmentShader:ct.meshphong_frag},standard:{uniforms:an([He.common,He.envmap,He.aomap,He.lightmap,He.emissivemap,He.bumpmap,He.normalmap,He.displacementmap,He.roughnessmap,He.metalnessmap,He.fog,He.lights,{emissive:{value:new Mt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ct.meshphysical_vert,fragmentShader:ct.meshphysical_frag},toon:{uniforms:an([He.common,He.aomap,He.lightmap,He.emissivemap,He.bumpmap,He.normalmap,He.displacementmap,He.gradientmap,He.fog,He.lights,{emissive:{value:new Mt(0)}}]),vertexShader:ct.meshtoon_vert,fragmentShader:ct.meshtoon_frag},matcap:{uniforms:an([He.common,He.bumpmap,He.normalmap,He.displacementmap,He.fog,{matcap:{value:null}}]),vertexShader:ct.meshmatcap_vert,fragmentShader:ct.meshmatcap_frag},points:{uniforms:an([He.points,He.fog]),vertexShader:ct.points_vert,fragmentShader:ct.points_frag},dashed:{uniforms:an([He.common,He.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ct.linedashed_vert,fragmentShader:ct.linedashed_frag},depth:{uniforms:an([He.common,He.displacementmap]),vertexShader:ct.depth_vert,fragmentShader:ct.depth_frag},normal:{uniforms:an([He.common,He.bumpmap,He.normalmap,He.displacementmap,{opacity:{value:1}}]),vertexShader:ct.meshnormal_vert,fragmentShader:ct.meshnormal_frag},sprite:{uniforms:an([He.sprite,He.fog]),vertexShader:ct.sprite_vert,fragmentShader:ct.sprite_frag},background:{uniforms:{uvTransform:{value:new ut},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ct.background_vert,fragmentShader:ct.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ut}},vertexShader:ct.backgroundCube_vert,fragmentShader:ct.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ct.cube_vert,fragmentShader:ct.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ct.equirect_vert,fragmentShader:ct.equirect_frag},distanceRGBA:{uniforms:an([He.common,He.displacementmap,{referencePosition:{value:new _e},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ct.distanceRGBA_vert,fragmentShader:ct.distanceRGBA_frag},shadow:{uniforms:an([He.lights,He.fog,{color:{value:new Mt(0)},opacity:{value:1}}]),vertexShader:ct.shadow_vert,fragmentShader:ct.shadow_frag}};qn.physical={uniforms:an([qn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ut},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ut},clearcoatNormalScale:{value:new yt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ut},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ut},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ut},sheen:{value:0},sheenColor:{value:new Mt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ut},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ut},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ut},transmissionSamplerSize:{value:new yt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ut},attenuationDistance:{value:0},attenuationColor:{value:new Mt(0)},specularColor:{value:new Mt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ut},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ut},anisotropyVector:{value:new yt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ut}}]),vertexShader:ct.meshphysical_vert,fragmentShader:ct.meshphysical_frag};const Na={r:0,b:0,g:0},dr=new bi,wS=new Ft;function AS(t,e,n,i,r,s,a){const o=new Mt(0);let l=s===!0?0:1,f,u,d=null,c=0,m=null;function p(T){let M=T.isScene===!0?T.background:null;return M&&M.isTexture&&(M=(T.backgroundBlurriness>0?n:e).get(M)),M}function y(T){let M=!1;const w=p(T);w===null?h(o,l):w&&w.isColor&&(h(w,1),M=!0);const V=t.xr.getEnvironmentBlendMode();V==="additive"?i.buffers.color.setClear(0,0,0,1,a):V==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(t.autoClear||M)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function g(T,M){const w=p(M);w&&(w.isCubeTexture||w.mapping===Ao)?(u===void 0&&(u=new An(new ca(1,1,1),new Qn({name:"BackgroundCubeMaterial",uniforms:hs(qn.backgroundCube.uniforms),vertexShader:qn.backgroundCube.vertexShader,fragmentShader:qn.backgroundCube.fragmentShader,side:pn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(V,L,z){this.matrixWorld.copyPosition(z.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),dr.copy(M.backgroundRotation),dr.x*=-1,dr.y*=-1,dr.z*=-1,w.isCubeTexture&&w.isRenderTargetTexture===!1&&(dr.y*=-1,dr.z*=-1),u.material.uniforms.envMap.value=w,u.material.uniforms.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(wS.makeRotationFromEuler(dr)),u.material.toneMapped=xt.getTransfer(w.colorSpace)!==Ct,(d!==w||c!==w.version||m!==t.toneMapping)&&(u.material.needsUpdate=!0,d=w,c=w.version,m=t.toneMapping),u.layers.enableAll(),T.unshift(u,u.geometry,u.material,0,0,null)):w&&w.isTexture&&(f===void 0&&(f=new An(new gs(2,2),new Qn({name:"BackgroundMaterial",uniforms:hs(qn.background.uniforms),vertexShader:qn.background.vertexShader,fragmentShader:qn.background.fragmentShader,side:Zi,depthTest:!1,depthWrite:!1,fog:!1})),f.geometry.deleteAttribute("normal"),Object.defineProperty(f.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(f)),f.material.uniforms.t2D.value=w,f.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,f.material.toneMapped=xt.getTransfer(w.colorSpace)!==Ct,w.matrixAutoUpdate===!0&&w.updateMatrix(),f.material.uniforms.uvTransform.value.copy(w.matrix),(d!==w||c!==w.version||m!==t.toneMapping)&&(f.material.needsUpdate=!0,d=w,c=w.version,m=t.toneMapping),f.layers.enableAll(),T.unshift(f,f.geometry,f.material,0,0,null))}function h(T,M){T.getRGB(Na,Cp(t)),i.buffers.color.setClear(Na.r,Na.g,Na.b,M,a)}return{getClearColor:function(){return o},setClearColor:function(T,M=1){o.set(T),l=M,h(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(T){l=T,h(o,l)},render:y,addToRenderList:g}}function CS(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},r=c(null);let s=r,a=!1;function o(E,R,G,q,ce){let re=!1;const ae=d(q,G,R);s!==ae&&(s=ae,f(s.object)),re=m(E,q,G,ce),re&&p(E,q,G,ce),ce!==null&&e.update(ce,t.ELEMENT_ARRAY_BUFFER),(re||a)&&(a=!1,w(E,R,G,q),ce!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(ce).buffer))}function l(){return t.createVertexArray()}function f(E){return t.bindVertexArray(E)}function u(E){return t.deleteVertexArray(E)}function d(E,R,G){const q=G.wireframe===!0;let ce=i[E.id];ce===void 0&&(ce={},i[E.id]=ce);let re=ce[R.id];re===void 0&&(re={},ce[R.id]=re);let ae=re[q];return ae===void 0&&(ae=c(l()),re[q]=ae),ae}function c(E){const R=[],G=[],q=[];for(let ce=0;ce<n;ce++)R[ce]=0,G[ce]=0,q[ce]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:R,enabledAttributes:G,attributeDivisors:q,object:E,attributes:{},index:null}}function m(E,R,G,q){const ce=s.attributes,re=R.attributes;let ae=0;const me=G.getAttributes();for(const ne in me)if(me[ne].location>=0){const ze=ce[ne];let ke=re[ne];if(ke===void 0&&(ne==="instanceMatrix"&&E.instanceMatrix&&(ke=E.instanceMatrix),ne==="instanceColor"&&E.instanceColor&&(ke=E.instanceColor)),ze===void 0||ze.attribute!==ke||ke&&ze.data!==ke.data)return!0;ae++}return s.attributesNum!==ae||s.index!==q}function p(E,R,G,q){const ce={},re=R.attributes;let ae=0;const me=G.getAttributes();for(const ne in me)if(me[ne].location>=0){let ze=re[ne];ze===void 0&&(ne==="instanceMatrix"&&E.instanceMatrix&&(ze=E.instanceMatrix),ne==="instanceColor"&&E.instanceColor&&(ze=E.instanceColor));const ke={};ke.attribute=ze,ze&&ze.data&&(ke.data=ze.data),ce[ne]=ke,ae++}s.attributes=ce,s.attributesNum=ae,s.index=q}function y(){const E=s.newAttributes;for(let R=0,G=E.length;R<G;R++)E[R]=0}function g(E){h(E,0)}function h(E,R){const G=s.newAttributes,q=s.enabledAttributes,ce=s.attributeDivisors;G[E]=1,q[E]===0&&(t.enableVertexAttribArray(E),q[E]=1),ce[E]!==R&&(t.vertexAttribDivisor(E,R),ce[E]=R)}function T(){const E=s.newAttributes,R=s.enabledAttributes;for(let G=0,q=R.length;G<q;G++)R[G]!==E[G]&&(t.disableVertexAttribArray(G),R[G]=0)}function M(E,R,G,q,ce,re,ae){ae===!0?t.vertexAttribIPointer(E,R,G,ce,re):t.vertexAttribPointer(E,R,G,q,ce,re)}function w(E,R,G,q){y();const ce=q.attributes,re=G.getAttributes(),ae=R.defaultAttributeValues;for(const me in re){const ne=re[me];if(ne.location>=0){let Ne=ce[me];if(Ne===void 0&&(me==="instanceMatrix"&&E.instanceMatrix&&(Ne=E.instanceMatrix),me==="instanceColor"&&E.instanceColor&&(Ne=E.instanceColor)),Ne!==void 0){const ze=Ne.normalized,ke=Ne.itemSize,Ze=e.get(Ne);if(Ze===void 0)continue;const nt=Ze.buffer,Se=Ze.type,Ce=Ze.bytesPerElement,Oe=Se===t.INT||Se===t.UNSIGNED_INT||Ne.gpuType===_u;if(Ne.isInterleavedBufferAttribute){const ee=Ne.data,we=ee.stride,xe=Ne.offset;if(ee.isInstancedInterleavedBuffer){for(let De=0;De<ne.locationSize;De++)h(ne.location+De,ee.meshPerAttribute);E.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=ee.meshPerAttribute*ee.count)}else for(let De=0;De<ne.locationSize;De++)g(ne.location+De);t.bindBuffer(t.ARRAY_BUFFER,nt);for(let De=0;De<ne.locationSize;De++)M(ne.location+De,ke/ne.locationSize,Se,ze,we*Ce,(xe+ke/ne.locationSize*De)*Ce,Oe)}else{if(Ne.isInstancedBufferAttribute){for(let ee=0;ee<ne.locationSize;ee++)h(ne.location+ee,Ne.meshPerAttribute);E.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=Ne.meshPerAttribute*Ne.count)}else for(let ee=0;ee<ne.locationSize;ee++)g(ne.location+ee);t.bindBuffer(t.ARRAY_BUFFER,nt);for(let ee=0;ee<ne.locationSize;ee++)M(ne.location+ee,ke/ne.locationSize,Se,ze,ke*Ce,ke/ne.locationSize*ee*Ce,Oe)}}else if(ae!==void 0){const ze=ae[me];if(ze!==void 0)switch(ze.length){case 2:t.vertexAttrib2fv(ne.location,ze);break;case 3:t.vertexAttrib3fv(ne.location,ze);break;case 4:t.vertexAttrib4fv(ne.location,ze);break;default:t.vertexAttrib1fv(ne.location,ze)}}}}T()}function V(){X();for(const E in i){const R=i[E];for(const G in R){const q=R[G];for(const ce in q)u(q[ce].object),delete q[ce];delete R[G]}delete i[E]}}function L(E){if(i[E.id]===void 0)return;const R=i[E.id];for(const G in R){const q=R[G];for(const ce in q)u(q[ce].object),delete q[ce];delete R[G]}delete i[E.id]}function z(E){for(const R in i){const G=i[R];if(G[E.id]===void 0)continue;const q=G[E.id];for(const ce in q)u(q[ce].object),delete q[ce];delete G[E.id]}}function X(){$(),a=!0,s!==r&&(s=r,f(s.object))}function $(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:X,resetDefaultState:$,dispose:V,releaseStatesOfGeometry:L,releaseStatesOfProgram:z,initAttributes:y,enableAttribute:g,disableUnusedAttributes:T}}function RS(t,e,n){let i;function r(f){i=f}function s(f,u){t.drawArrays(i,f,u),n.update(u,i,1)}function a(f,u,d){d!==0&&(t.drawArraysInstanced(i,f,u,d),n.update(u,i,d))}function o(f,u,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,f,0,u,0,d);let m=0;for(let p=0;p<d;p++)m+=u[p];n.update(m,i,1)}function l(f,u,d,c){if(d===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<f.length;p++)a(f[p],u[p],c[p]);else{m.multiDrawArraysInstancedWEBGL(i,f,0,u,0,c,0,d);let p=0;for(let y=0;y<d;y++)p+=u[y];for(let y=0;y<c.length;y++)n.update(p,i,c[y])}}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function PS(t,e,n,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const z=e.get("EXT_texture_filter_anisotropic");r=t.getParameter(z.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(z){return!(z!==Fn&&i.convert(z)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(z){const X=z===sa&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(z!==Mi&&i.convert(z)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&z!==gi&&!X)}function l(z){if(z==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";z="mediump"}return z==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let f=n.precision!==void 0?n.precision:"highp";const u=l(f);u!==f&&(f=u);const d=n.logarithmicDepthBuffer===!0,c=n.reverseDepthBuffer===!0&&e.has("EXT_clip_control");if(c===!0){const z=e.get("EXT_clip_control");z.clipControlEXT(z.LOWER_LEFT_EXT,z.ZERO_TO_ONE_EXT)}const m=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),p=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=t.getParameter(t.MAX_TEXTURE_SIZE),g=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),h=t.getParameter(t.MAX_VERTEX_ATTRIBS),T=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),M=t.getParameter(t.MAX_VARYING_VECTORS),w=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),V=p>0,L=t.getParameter(t.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:f,logarithmicDepthBuffer:d,reverseDepthBuffer:c,maxTextures:m,maxVertexTextures:p,maxTextureSize:y,maxCubemapSize:g,maxAttributes:h,maxVertexUniforms:T,maxVaryings:M,maxFragmentUniforms:w,vertexTextures:V,maxSamples:L}}function DS(t){const e=this;let n=null,i=0,r=!1,s=!1;const a=new ki,o=new ut,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,c){const m=d.length!==0||c||i!==0||r;return r=c,i=d.length,m},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,c){n=u(d,c,0)},this.setState=function(d,c,m){const p=d.clippingPlanes,y=d.clipIntersection,g=d.clipShadows,h=t.get(d);if(!r||p===null||p.length===0||s&&!g)s?u(null):f();else{const T=s?0:i,M=T*4;let w=h.clippingState||null;l.value=w,w=u(p,c,M,m);for(let V=0;V!==M;++V)w[V]=n[V];h.clippingState=w,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=T}};function f(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(d,c,m,p){const y=d!==null?d.length:0;let g=null;if(y!==0){if(g=l.value,p!==!0||g===null){const h=m+y*4,T=c.matrixWorldInverse;o.getNormalMatrix(T),(g===null||g.length<h)&&(g=new Float32Array(h));for(let M=0,w=m;M!==y;++M,w+=4)a.copy(d[M]).applyMatrix4(T,o),a.normal.toArray(g,w),g[w+3]=a.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=y,e.numIntersection=0,g}}function LS(t){let e=new WeakMap;function n(a,o){return o===rc?a.mapping=ls:o===sc&&(a.mapping=cs),a}function i(a){if(a&&a.isTexture){const o=a.mapping;if(o===rc||o===sc)if(e.has(a)){const l=e.get(a).texture;return n(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const f=new Gv(l.height);return f.fromEquirectangularTexture(t,a),e.set(a,f),a.addEventListener("dispose",r),n(f.texture,a.mapping)}else return null}}return a}function r(a){const o=a.target;o.removeEventListener("dispose",r);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class Ip extends Rp{constructor(e=-1,n=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,a=i+e,o=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const f=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=f*this.view.offsetX,a=s+f*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const Jr=4,Yf=[.125,.215,.35,.446,.526,.582],Qr=20,Sl=new Ip,$f=new Mt;let Ml=null,bl=0,Tl=0,El=!1;const _r=(1+Math.sqrt(5))/2,$r=1/_r,Kf=[new _e(-_r,$r,0),new _e(_r,$r,0),new _e(-$r,0,_r),new _e($r,0,_r),new _e(0,_r,-$r),new _e(0,_r,$r),new _e(-1,1,-1),new _e(1,1,-1),new _e(-1,1,1),new _e(1,1,1)];class Zf{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100){Ml=this._renderer.getRenderTarget(),bl=this._renderer.getActiveCubeFace(),Tl=this._renderer.getActiveMipmapLevel(),El=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),n>0&&this._blur(s,0,0,n),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=eh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Qf(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Ml,bl,Tl),this._renderer.xr.enabled=El,e.scissorTest=!1,Oa(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===ls||e.mapping===cs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ml=this._renderer.getRenderTarget(),bl=this._renderer.getActiveCubeFace(),Tl=this._renderer.getActiveMipmapLevel(),El=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:un,minFilter:un,generateMipmaps:!1,type:sa,format:Fn,colorSpace:tr,depthBuffer:!1},r=Jf(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Jf(e,n,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=IS(s)),this._blurMaterial=US(s,e,n)}return r}_compileMaterial(e){const n=new An(this._lodPlanes[0],e);this._renderer.compile(n,Sl)}_sceneToCubeUV(e,n,i,r){const o=new Tn(90,1,n,i),l=[1,-1,1,1,1,1],f=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,c=u.toneMapping;u.getClearColor($f),u.toneMapping=$i,u.autoClear=!1;const m=new Eu({name:"PMREM.Background",side:pn,depthWrite:!1,depthTest:!1}),p=new An(new ca,m);let y=!1;const g=e.background;g?g.isColor&&(m.color.copy(g),e.background=null,y=!0):(m.color.copy($f),y=!0);for(let h=0;h<6;h++){const T=h%3;T===0?(o.up.set(0,l[h],0),o.lookAt(f[h],0,0)):T===1?(o.up.set(0,0,l[h]),o.lookAt(0,f[h],0)):(o.up.set(0,l[h],0),o.lookAt(0,0,f[h]));const M=this._cubeSize;Oa(r,T*M,h>2?M:0,M,M),u.setRenderTarget(r),y&&u.render(p,o),u.render(e,o)}p.geometry.dispose(),p.material.dispose(),u.toneMapping=c,u.autoClear=d,e.background=g}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===ls||e.mapping===cs;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=eh()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Qf());const s=r?this._cubemapMaterial:this._equirectMaterial,a=new An(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;Oa(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(a,Sl)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const a=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=Kf[(r-s-1)%Kf.length];this._blur(e,s-1,s,a,o)}n.autoClear=i}_blur(e,n,i,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,n,i,r,"latitudinal",s),this._halfBlur(a,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,a,o){const l=this._renderer,f=this._blurMaterial,u=3,d=new An(this._lodPlanes[r],f),c=f.uniforms,m=this._sizeLods[i]-1,p=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*Qr-1),y=s/p,g=isFinite(s)?1+Math.floor(u*y):Qr;g>Qr;const h=[];let T=0;for(let z=0;z<Qr;++z){const X=z/y,$=Math.exp(-X*X/2);h.push($),z===0?T+=$:z<g&&(T+=2*$)}for(let z=0;z<h.length;z++)h[z]=h[z]/T;c.envMap.value=e.texture,c.samples.value=g,c.weights.value=h,c.latitudinal.value=a==="latitudinal",o&&(c.poleAxis.value=o);const{_lodMax:M}=this;c.dTheta.value=p,c.mipInt.value=M-i;const w=this._sizeLods[r],V=3*w*(r>M-Jr?r-M+Jr:0),L=4*(this._cubeSize-w);Oa(n,V,L,3*w,2*w),l.setRenderTarget(n),l.render(d,Sl)}}function IS(t){const e=[],n=[],i=[];let r=t;const s=t-Jr+1+Yf.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);n.push(o);let l=1/o;a>t-Jr?l=Yf[a-t+Jr-1]:a===0&&(l=0),i.push(l);const f=1/(o-2),u=-f,d=1+f,c=[u,u,d,u,d,d,u,u,d,d,u,d],m=6,p=6,y=3,g=2,h=1,T=new Float32Array(y*p*m),M=new Float32Array(g*p*m),w=new Float32Array(h*p*m);for(let L=0;L<m;L++){const z=L%3*2/3-1,X=L>2?0:-1,$=[z,X,0,z+2/3,X,0,z+2/3,X+1,0,z,X,0,z+2/3,X+1,0,z,X+1,0];T.set($,y*p*L),M.set(c,g*p*L);const E=[L,L,L,L,L,L];w.set(E,h*p*L)}const V=new nr;V.setAttribute("position",new _n(T,y)),V.setAttribute("uv",new _n(M,g)),V.setAttribute("faceIndex",new _n(w,h)),e.push(V),r>Jr&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function Jf(t,e,n){const i=new Lr(t,e,n);return i.texture.mapping=Ao,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Oa(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function US(t,e,n){const i=new Float32Array(Qr),r=new _e(0,1,0);return new Qn({name:"SphericalGaussianBlur",defines:{n:Qr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:wu(),fragmentShader:`

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
		`,blending:Yi,depthTest:!1,depthWrite:!1})}function Qf(){return new Qn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:wu(),fragmentShader:`

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
		`,blending:Yi,depthTest:!1,depthWrite:!1})}function eh(){return new Qn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:wu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Yi,depthTest:!1,depthWrite:!1})}function wu(){return`

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
	`}function NS(t){let e=new WeakMap,n=null;function i(o){if(o&&o.isTexture){const l=o.mapping,f=l===rc||l===sc,u=l===ls||l===cs;if(f||u){let d=e.get(o);const c=d!==void 0?d.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==c)return n===null&&(n=new Zf(t)),d=f?n.fromEquirectangular(o,d):n.fromCubemap(o,d),d.texture.pmremVersion=o.pmremVersion,e.set(o,d),d.texture;if(d!==void 0)return d.texture;{const m=o.image;return f&&m&&m.height>0||u&&m&&r(m)?(n===null&&(n=new Zf(t)),d=f?n.fromEquirectangular(o):n.fromCubemap(o),d.texture.pmremVersion=o.pmremVersion,e.set(o,d),o.addEventListener("dispose",s),d.texture):null}}}return o}function r(o){let l=0;const f=6;for(let u=0;u<f;u++)o[u]!==void 0&&l++;return l===f}function s(o){const l=o.target;l.removeEventListener("dispose",s);const f=e.get(l);f!==void 0&&(e.delete(l),f.dispose())}function a(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:a}}function OS(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const r=n(i);return r===null&&Ja("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function FS(t,e,n,i){const r={},s=new WeakMap;function a(d){const c=d.target;c.index!==null&&e.remove(c.index);for(const p in c.attributes)e.remove(c.attributes[p]);for(const p in c.morphAttributes){const y=c.morphAttributes[p];for(let g=0,h=y.length;g<h;g++)e.remove(y[g])}c.removeEventListener("dispose",a),delete r[c.id];const m=s.get(c);m&&(e.remove(m),s.delete(c)),i.releaseStatesOfGeometry(c),c.isInstancedBufferGeometry===!0&&delete c._maxInstanceCount,n.memory.geometries--}function o(d,c){return r[c.id]===!0||(c.addEventListener("dispose",a),r[c.id]=!0,n.memory.geometries++),c}function l(d){const c=d.attributes;for(const p in c)e.update(c[p],t.ARRAY_BUFFER);const m=d.morphAttributes;for(const p in m){const y=m[p];for(let g=0,h=y.length;g<h;g++)e.update(y[g],t.ARRAY_BUFFER)}}function f(d){const c=[],m=d.index,p=d.attributes.position;let y=0;if(m!==null){const T=m.array;y=m.version;for(let M=0,w=T.length;M<w;M+=3){const V=T[M+0],L=T[M+1],z=T[M+2];c.push(V,L,L,z,z,V)}}else if(p!==void 0){const T=p.array;y=p.version;for(let M=0,w=T.length/3-1;M<w;M+=3){const V=M+0,L=M+1,z=M+2;c.push(V,L,L,z,z,V)}}else return;const g=new(Sp(c)?Ap:wp)(c,1);g.version=y;const h=s.get(d);h&&e.remove(h),s.set(d,g)}function u(d){const c=s.get(d);if(c){const m=d.index;m!==null&&c.version<m.version&&f(d)}else f(d);return s.get(d)}return{get:o,update:l,getWireframeAttribute:u}}function BS(t,e,n){let i;function r(c){i=c}let s,a;function o(c){s=c.type,a=c.bytesPerElement}function l(c,m){t.drawElements(i,m,s,c*a),n.update(m,i,1)}function f(c,m,p){p!==0&&(t.drawElementsInstanced(i,m,s,c*a,p),n.update(m,i,p))}function u(c,m,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,m,0,s,c,0,p);let g=0;for(let h=0;h<p;h++)g+=m[h];n.update(g,i,1)}function d(c,m,p,y){if(p===0)return;const g=e.get("WEBGL_multi_draw");if(g===null)for(let h=0;h<c.length;h++)f(c[h]/a,m[h],y[h]);else{g.multiDrawElementsInstancedWEBGL(i,m,0,s,c,0,y,0,p);let h=0;for(let T=0;T<p;T++)h+=m[T];for(let T=0;T<y.length;T++)n.update(h,i,y[T])}}this.setMode=r,this.setIndex=o,this.render=l,this.renderInstances=f,this.renderMultiDraw=u,this.renderMultiDrawInstances=d}function zS(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(n.calls++,a){case t.TRIANGLES:n.triangles+=o*(s/3);break;case t.LINES:n.lines+=o*(s/2);break;case t.LINE_STRIP:n.lines+=o*(s-1);break;case t.LINE_LOOP:n.lines+=o*s;break;case t.POINTS:n.points+=o*s;break;default:break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function kS(t,e,n){const i=new WeakMap,r=new Ot;function s(a,o,l){const f=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=u!==void 0?u.length:0;let c=i.get(o);if(c===void 0||c.count!==d){let E=function(){X.dispose(),i.delete(o),o.removeEventListener("dispose",E)};var m=E;c!==void 0&&c.texture.dispose();const p=o.morphAttributes.position!==void 0,y=o.morphAttributes.normal!==void 0,g=o.morphAttributes.color!==void 0,h=o.morphAttributes.position||[],T=o.morphAttributes.normal||[],M=o.morphAttributes.color||[];let w=0;p===!0&&(w=1),y===!0&&(w=2),g===!0&&(w=3);let V=o.attributes.position.count*w,L=1;V>e.maxTextureSize&&(L=Math.ceil(V/e.maxTextureSize),V=e.maxTextureSize);const z=new Float32Array(V*L*4*d),X=new bp(z,V,L,d);X.type=gi,X.needsUpdate=!0;const $=w*4;for(let R=0;R<d;R++){const G=h[R],q=T[R],ce=M[R],re=V*L*4*R;for(let ae=0;ae<G.count;ae++){const me=ae*$;p===!0&&(r.fromBufferAttribute(G,ae),z[re+me+0]=r.x,z[re+me+1]=r.y,z[re+me+2]=r.z,z[re+me+3]=0),y===!0&&(r.fromBufferAttribute(q,ae),z[re+me+4]=r.x,z[re+me+5]=r.y,z[re+me+6]=r.z,z[re+me+7]=0),g===!0&&(r.fromBufferAttribute(ce,ae),z[re+me+8]=r.x,z[re+me+9]=r.y,z[re+me+10]=r.z,z[re+me+11]=ce.itemSize===4?r.w:1)}}c={count:d,texture:X,size:new yt(V,L)},i.set(o,c),o.addEventListener("dispose",E)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",a.morphTexture,n);else{let p=0;for(let g=0;g<f.length;g++)p+=f[g];const y=o.morphTargetsRelative?1:1-p;l.getUniforms().setValue(t,"morphTargetBaseInfluence",y),l.getUniforms().setValue(t,"morphTargetInfluences",f)}l.getUniforms().setValue(t,"morphTargetsTexture",c.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",c.size)}return{update:s}}function HS(t,e,n,i){let r=new WeakMap;function s(l){const f=i.render.frame,u=l.geometry,d=e.get(l,u);if(r.get(d)!==f&&(e.update(d),r.set(d,f)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),r.get(l)!==f&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),r.set(l,f))),l.isSkinnedMesh){const c=l.skeleton;r.get(c)!==f&&(c.update(),r.set(c,f))}return d}function a(){r=new WeakMap}function o(l){const f=l.target;f.removeEventListener("dispose",o),n.remove(f.instanceMatrix),f.instanceColor!==null&&n.remove(f.instanceColor)}return{update:s,dispose:a}}class Up extends Yt{constructor(e,n,i,r,s,a,o,l,f,u=is){if(u!==is&&u!==fs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===is&&(i=Dr),i===void 0&&u===fs&&(i=us),super(null,r,s,a,o,l,u,i,f),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=o!==void 0?o:wn,this.minFilter=l!==void 0?l:wn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}const Np=new Yt,th=new Up(1,1),Op=new bp,Fp=new Av,Bp=new Pp,nh=[],ih=[],rh=new Float32Array(16),sh=new Float32Array(9),ah=new Float32Array(4);function vs(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=nh[r];if(s===void 0&&(s=new Float32Array(r),nh[r]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=n,t[a].toArray(s,o)}return s}function Ht(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Vt(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function Po(t,e){let n=ih[e];n===void 0&&(n=new Int32Array(e),ih[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function VS(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function GS(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ht(n,e))return;t.uniform2fv(this.addr,e),Vt(n,e)}}function WS(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Ht(n,e))return;t.uniform3fv(this.addr,e),Vt(n,e)}}function XS(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ht(n,e))return;t.uniform4fv(this.addr,e),Vt(n,e)}}function jS(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Ht(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Vt(n,e)}else{if(Ht(n,i))return;ah.set(i),t.uniformMatrix2fv(this.addr,!1,ah),Vt(n,i)}}function qS(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Ht(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Vt(n,e)}else{if(Ht(n,i))return;sh.set(i),t.uniformMatrix3fv(this.addr,!1,sh),Vt(n,i)}}function YS(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Ht(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Vt(n,e)}else{if(Ht(n,i))return;rh.set(i),t.uniformMatrix4fv(this.addr,!1,rh),Vt(n,i)}}function $S(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function KS(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ht(n,e))return;t.uniform2iv(this.addr,e),Vt(n,e)}}function ZS(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Ht(n,e))return;t.uniform3iv(this.addr,e),Vt(n,e)}}function JS(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ht(n,e))return;t.uniform4iv(this.addr,e),Vt(n,e)}}function QS(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function eM(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ht(n,e))return;t.uniform2uiv(this.addr,e),Vt(n,e)}}function tM(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Ht(n,e))return;t.uniform3uiv(this.addr,e),Vt(n,e)}}function nM(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ht(n,e))return;t.uniform4uiv(this.addr,e),Vt(n,e)}}function iM(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);let s;this.type===t.SAMPLER_2D_SHADOW?(th.compareFunction=yp,s=th):s=Np,n.setTexture2D(e||s,r)}function rM(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||Fp,r)}function sM(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||Bp,r)}function aM(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||Op,r)}function oM(t){switch(t){case 5126:return VS;case 35664:return GS;case 35665:return WS;case 35666:return XS;case 35674:return jS;case 35675:return qS;case 35676:return YS;case 5124:case 35670:return $S;case 35667:case 35671:return KS;case 35668:case 35672:return ZS;case 35669:case 35673:return JS;case 5125:return QS;case 36294:return eM;case 36295:return tM;case 36296:return nM;case 35678:case 36198:case 36298:case 36306:case 35682:return iM;case 35679:case 36299:case 36307:return rM;case 35680:case 36300:case 36308:case 36293:return sM;case 36289:case 36303:case 36311:case 36292:return aM}}function lM(t,e){t.uniform1fv(this.addr,e)}function cM(t,e){const n=vs(e,this.size,2);t.uniform2fv(this.addr,n)}function uM(t,e){const n=vs(e,this.size,3);t.uniform3fv(this.addr,n)}function fM(t,e){const n=vs(e,this.size,4);t.uniform4fv(this.addr,n)}function hM(t,e){const n=vs(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function dM(t,e){const n=vs(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function pM(t,e){const n=vs(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function mM(t,e){t.uniform1iv(this.addr,e)}function _M(t,e){t.uniform2iv(this.addr,e)}function gM(t,e){t.uniform3iv(this.addr,e)}function vM(t,e){t.uniform4iv(this.addr,e)}function xM(t,e){t.uniform1uiv(this.addr,e)}function yM(t,e){t.uniform2uiv(this.addr,e)}function SM(t,e){t.uniform3uiv(this.addr,e)}function MM(t,e){t.uniform4uiv(this.addr,e)}function bM(t,e,n){const i=this.cache,r=e.length,s=Po(n,r);Ht(i,s)||(t.uniform1iv(this.addr,s),Vt(i,s));for(let a=0;a!==r;++a)n.setTexture2D(e[a]||Np,s[a])}function TM(t,e,n){const i=this.cache,r=e.length,s=Po(n,r);Ht(i,s)||(t.uniform1iv(this.addr,s),Vt(i,s));for(let a=0;a!==r;++a)n.setTexture3D(e[a]||Fp,s[a])}function EM(t,e,n){const i=this.cache,r=e.length,s=Po(n,r);Ht(i,s)||(t.uniform1iv(this.addr,s),Vt(i,s));for(let a=0;a!==r;++a)n.setTextureCube(e[a]||Bp,s[a])}function wM(t,e,n){const i=this.cache,r=e.length,s=Po(n,r);Ht(i,s)||(t.uniform1iv(this.addr,s),Vt(i,s));for(let a=0;a!==r;++a)n.setTexture2DArray(e[a]||Op,s[a])}function AM(t){switch(t){case 5126:return lM;case 35664:return cM;case 35665:return uM;case 35666:return fM;case 35674:return hM;case 35675:return dM;case 35676:return pM;case 5124:case 35670:return mM;case 35667:case 35671:return _M;case 35668:case 35672:return gM;case 35669:case 35673:return vM;case 5125:return xM;case 36294:return yM;case 36295:return SM;case 36296:return MM;case 35678:case 36198:case 36298:case 36306:case 35682:return bM;case 35679:case 36299:case 36307:return TM;case 35680:case 36300:case 36308:case 36293:return EM;case 36289:case 36303:case 36311:case 36292:return wM}}class CM{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=oM(n.type)}}class RM{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=AM(n.type)}}class PM{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,n[o.id],i)}}}const wl=/(\w+)(\])?(\[|\.)?/g;function oh(t,e){t.seq.push(e),t.map[e.id]=e}function DM(t,e,n){const i=t.name,r=i.length;for(wl.lastIndex=0;;){const s=wl.exec(i),a=wl.lastIndex;let o=s[1];const l=s[2]==="]",f=s[3];if(l&&(o=o|0),f===void 0||f==="["&&a+2===r){oh(n,f===void 0?new CM(o,t,e):new RM(o,t,e));break}else{let d=n.map[o];d===void 0&&(d=new PM(o),oh(n,d)),n=d}}}class Qa{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(n,r),a=e.getUniformLocation(n,s.name);DM(s,a,this)}}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,a=n.length;s!==a;++s){const o=n[s],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in n&&i.push(a)}return i}}function lh(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const LM=37297;let IM=0;function UM(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let a=r;a<s;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${n[a]}`)}return i.join(`
`)}function NM(t){const e=xt.getPrimaries(xt.workingColorSpace),n=xt.getPrimaries(t);let i;switch(e===n?i="":e===uo&&n===co?i="LinearDisplayP3ToLinearSRGB":e===co&&n===uo&&(i="LinearSRGBToLinearDisplayP3"),t){case tr:case Co:return[i,"LinearTransferOETF"];case Wn:case Mu:return[i,"sRGBTransferOETF"];default:return[i,"LinearTransferOETF"]}}function ch(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),r=t.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const a=parseInt(s[1]);return n.toUpperCase()+`

`+r+`

`+UM(t.getShaderSource(e),a)}else return r}function OM(t,e){const n=NM(e);return`vec4 ${t}( vec4 value ) { return ${n[0]}( ${n[1]}( value ) ); }`}function FM(t,e){let n;switch(e){case J0:n="Linear";break;case Q0:n="Reinhard";break;case ev:n="Cineon";break;case tv:n="ACESFilmic";break;case iv:n="AgX";break;case rv:n="Neutral";break;case nv:n="Custom";break;default:n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const Fa=new _e;function BM(){xt.getLuminanceCoefficients(Fa);const t=Fa.x.toFixed(4),e=Fa.y.toFixed(4),n=Fa.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function zM(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Is).join(`
`)}function kM(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function HM(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),a=s.name;let o=1;s.type===t.FLOAT_MAT2&&(o=2),s.type===t.FLOAT_MAT3&&(o=3),s.type===t.FLOAT_MAT4&&(o=4),n[a]={type:s.type,location:t.getAttribLocation(e,a),locationSize:o}}return n}function Is(t){return t!==""}function uh(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function fh(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const VM=/^[ \t]*#include +<([\w\d./]+)>/gm;function Nc(t){return t.replace(VM,WM)}const GM=new Map;function WM(t,e){let n=ct[e];if(n===void 0){const i=GM.get(e);if(i!==void 0)n=ct[i];else throw new Error("Can not resolve #include <"+e+">")}return Nc(n)}const XM=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function hh(t){return t.replace(XM,jM)}function jM(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function dh(t){let e=`precision ${t.precision} float;
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
#define LOW_PRECISION`),e}function qM(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===op?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===D0?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===hi&&(e="SHADOWMAP_TYPE_VSM"),e}function YM(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case ls:case cs:e="ENVMAP_TYPE_CUBE";break;case Ao:e="ENVMAP_TYPE_CUBE_UV";break}return e}function $M(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case cs:e="ENVMAP_MODE_REFRACTION";break}return e}function KM(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case lp:e="ENVMAP_BLENDING_MULTIPLY";break;case K0:e="ENVMAP_BLENDING_MIX";break;case Z0:e="ENVMAP_BLENDING_ADD";break}return e}function ZM(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function JM(t,e,n,i){const r=t.getContext(),s=n.defines;let a=n.vertexShader,o=n.fragmentShader;const l=qM(n),f=YM(n),u=$M(n),d=KM(n),c=ZM(n),m=zM(n),p=kM(s),y=r.createProgram();let g,h,T=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(g=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,p].filter(Is).join(`
`),g.length>0&&(g+=`
`),h=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,p].filter(Is).join(`
`),h.length>0&&(h+=`
`)):(g=[dh(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,p,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Is).join(`
`),h=[dh(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,p,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+f:"",n.envMap?"#define "+u:"",n.envMap?"#define "+d:"",c?"#define CUBEUV_TEXEL_WIDTH "+c.texelWidth:"",c?"#define CUBEUV_TEXEL_HEIGHT "+c.texelHeight:"",c?"#define CUBEUV_MAX_MIP "+c.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==$i?"#define TONE_MAPPING":"",n.toneMapping!==$i?ct.tonemapping_pars_fragment:"",n.toneMapping!==$i?FM("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",ct.colorspace_pars_fragment,OM("linearToOutputTexel",n.outputColorSpace),BM(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Is).join(`
`)),a=Nc(a),a=uh(a,n),a=fh(a,n),o=Nc(o),o=uh(o,n),o=fh(o,n),a=hh(a),o=hh(o),n.isRawShaderMaterial!==!0&&(T=`#version 300 es
`,g=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,h=["#define varying in",n.glslVersion===Pf?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Pf?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+h);const M=T+g+a,w=T+h+o,V=lh(r,r.VERTEX_SHADER,M),L=lh(r,r.FRAGMENT_SHADER,w);r.attachShader(y,V),r.attachShader(y,L),n.index0AttributeName!==void 0?r.bindAttribLocation(y,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(y,0,"position"),r.linkProgram(y);function z(R){if(t.debug.checkShaderErrors){const G=r.getProgramInfoLog(y).trim(),q=r.getShaderInfoLog(V).trim(),ce=r.getShaderInfoLog(L).trim();let re=!0,ae=!0;if(r.getProgramParameter(y,r.LINK_STATUS)===!1)if(re=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,y,V,L);else{const me=ch(r,V,"vertex"),ne=ch(r,L,"fragment")}else G!==""||(q===""||ce==="")&&(ae=!1);ae&&(R.diagnostics={runnable:re,programLog:G,vertexShader:{log:q,prefix:g},fragmentShader:{log:ce,prefix:h}})}r.deleteShader(V),r.deleteShader(L),X=new Qa(r,y),$=HM(r,y)}let X;this.getUniforms=function(){return X===void 0&&z(this),X};let $;this.getAttributes=function(){return $===void 0&&z(this),$};let E=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return E===!1&&(E=r.getProgramParameter(y,LM)),E},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(y),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=IM++,this.cacheKey=e,this.usedTimes=1,this.program=y,this.vertexShader=V,this.fragmentShader=L,this}let QM=0;class eb{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new tb(e),n.set(e,i)),i}}class tb{constructor(e){this.id=QM++,this.code=e,this.usedTimes=0}}function nb(t,e,n,i,r,s,a){const o=new Tu,l=new eb,f=new Set,u=[],d=r.logarithmicDepthBuffer,c=r.reverseDepthBuffer,m=r.vertexTextures;let p=r.precision;const y={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(E){return f.add(E),E===0?"uv":`uv${E}`}function h(E,R,G,q,ce){const re=q.fog,ae=ce.geometry,me=E.isMeshStandardMaterial?q.environment:null,ne=(E.isMeshStandardMaterial?n:e).get(E.envMap||me),Ne=ne&&ne.mapping===Ao?ne.image.height:null,ze=y[E.type];E.precision!==null&&(p=r.getMaxPrecision(E.precision),E.precision);const ke=ae.morphAttributes.position||ae.morphAttributes.normal||ae.morphAttributes.color,Ze=ke!==void 0?ke.length:0;let nt=0;ae.morphAttributes.position!==void 0&&(nt=1),ae.morphAttributes.normal!==void 0&&(nt=2),ae.morphAttributes.color!==void 0&&(nt=3);let Se,Ce,Oe,ee;if(ze){const $t=qn[ze];Se=$t.vertexShader,Ce=$t.fragmentShader}else Se=E.vertexShader,Ce=E.fragmentShader,l.update(E),Oe=l.getVertexShaderID(E),ee=l.getFragmentShaderID(E);const we=t.getRenderTarget(),xe=ce.isInstancedMesh===!0,De=ce.isBatchedMesh===!0,je=!!E.map,We=!!E.matcap,A=!!ne,H=!!E.aoMap,W=!!E.lightMap,pe=!!E.bumpMap,oe=!!E.normalMap,ye=!!E.displacementMap,ve=!!E.emissiveMap,_=!!E.metalnessMap,v=!!E.roughnessMap,b=E.anisotropy>0,P=E.clearcoat>0,N=E.dispersion>0,F=E.iridescence>0,Z=E.sheen>0,j=E.transmission>0,te=b&&!!E.anisotropyMap,be=P&&!!E.clearcoatMap,se=P&&!!E.clearcoatNormalMap,ge=P&&!!E.clearcoatRoughnessMap,Fe=F&&!!E.iridescenceMap,Le=F&&!!E.iridescenceThicknessMap,Ue=Z&&!!E.sheenColorMap,$e=Z&&!!E.sheenRoughnessMap,qe=!!E.specularMap,it=!!E.specularColorMap,J=!!E.specularIntensityMap,Xe=j&&!!E.transmissionMap,fe=j&&!!E.thicknessMap,Re=!!E.gradientMap,Ve=!!E.alphaMap,Be=E.alphaTest>0,dt=!!E.alphaHash,Tt=!!E.extensions;let Et=$i;E.toneMapped&&(we===null||we.isXRRenderTarget===!0)&&(Et=t.toneMapping);const pt={shaderID:ze,shaderType:E.type,shaderName:E.name,vertexShader:Se,fragmentShader:Ce,defines:E.defines,customVertexShaderID:Oe,customFragmentShaderID:ee,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:p,batching:De,batchingColor:De&&ce._colorsTexture!==null,instancing:xe,instancingColor:xe&&ce.instanceColor!==null,instancingMorph:xe&&ce.morphTexture!==null,supportsVertexTextures:m,outputColorSpace:we===null?t.outputColorSpace:we.isXRRenderTarget===!0?we.texture.colorSpace:tr,alphaToCoverage:!!E.alphaToCoverage,map:je,matcap:We,envMap:A,envMapMode:A&&ne.mapping,envMapCubeUVHeight:Ne,aoMap:H,lightMap:W,bumpMap:pe,normalMap:oe,displacementMap:m&&ye,emissiveMap:ve,normalMapObjectSpace:oe&&E.normalMapType===cv,normalMapTangentSpace:oe&&E.normalMapType===lv,metalnessMap:_,roughnessMap:v,anisotropy:b,anisotropyMap:te,clearcoat:P,clearcoatMap:be,clearcoatNormalMap:se,clearcoatRoughnessMap:ge,dispersion:N,iridescence:F,iridescenceMap:Fe,iridescenceThicknessMap:Le,sheen:Z,sheenColorMap:Ue,sheenRoughnessMap:$e,specularMap:qe,specularColorMap:it,specularIntensityMap:J,transmission:j,transmissionMap:Xe,thicknessMap:fe,gradientMap:Re,opaque:E.transparent===!1&&E.blending===Ar&&E.alphaToCoverage===!1,alphaMap:Ve,alphaTest:Be,alphaHash:dt,combine:E.combine,mapUv:je&&g(E.map.channel),aoMapUv:H&&g(E.aoMap.channel),lightMapUv:W&&g(E.lightMap.channel),bumpMapUv:pe&&g(E.bumpMap.channel),normalMapUv:oe&&g(E.normalMap.channel),displacementMapUv:ye&&g(E.displacementMap.channel),emissiveMapUv:ve&&g(E.emissiveMap.channel),metalnessMapUv:_&&g(E.metalnessMap.channel),roughnessMapUv:v&&g(E.roughnessMap.channel),anisotropyMapUv:te&&g(E.anisotropyMap.channel),clearcoatMapUv:be&&g(E.clearcoatMap.channel),clearcoatNormalMapUv:se&&g(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ge&&g(E.clearcoatRoughnessMap.channel),iridescenceMapUv:Fe&&g(E.iridescenceMap.channel),iridescenceThicknessMapUv:Le&&g(E.iridescenceThicknessMap.channel),sheenColorMapUv:Ue&&g(E.sheenColorMap.channel),sheenRoughnessMapUv:$e&&g(E.sheenRoughnessMap.channel),specularMapUv:qe&&g(E.specularMap.channel),specularColorMapUv:it&&g(E.specularColorMap.channel),specularIntensityMapUv:J&&g(E.specularIntensityMap.channel),transmissionMapUv:Xe&&g(E.transmissionMap.channel),thicknessMapUv:fe&&g(E.thicknessMap.channel),alphaMapUv:Ve&&g(E.alphaMap.channel),vertexTangents:!!ae.attributes.tangent&&(oe||b),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!ae.attributes.color&&ae.attributes.color.itemSize===4,pointsUvs:ce.isPoints===!0&&!!ae.attributes.uv&&(je||Ve),fog:!!re,useFog:E.fog===!0,fogExp2:!!re&&re.isFogExp2,flatShading:E.flatShading===!0,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:d,reverseDepthBuffer:c,skinning:ce.isSkinnedMesh===!0,morphTargets:ae.morphAttributes.position!==void 0,morphNormals:ae.morphAttributes.normal!==void 0,morphColors:ae.morphAttributes.color!==void 0,morphTargetsCount:Ze,morphTextureStride:nt,numDirLights:R.directional.length,numPointLights:R.point.length,numSpotLights:R.spot.length,numSpotLightMaps:R.spotLightMap.length,numRectAreaLights:R.rectArea.length,numHemiLights:R.hemi.length,numDirLightShadows:R.directionalShadowMap.length,numPointLightShadows:R.pointShadowMap.length,numSpotLightShadows:R.spotShadowMap.length,numSpotLightShadowsWithMaps:R.numSpotLightShadowsWithMaps,numLightProbes:R.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:E.dithering,shadowMapEnabled:t.shadowMap.enabled&&G.length>0,shadowMapType:t.shadowMap.type,toneMapping:Et,decodeVideoTexture:je&&E.map.isVideoTexture===!0&&xt.getTransfer(E.map.colorSpace)===Ct,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===mi,flipSided:E.side===pn,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:Tt&&E.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Tt&&E.extensions.multiDraw===!0||De)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return pt.vertexUv1s=f.has(1),pt.vertexUv2s=f.has(2),pt.vertexUv3s=f.has(3),f.clear(),pt}function T(E){const R=[];if(E.shaderID?R.push(E.shaderID):(R.push(E.customVertexShaderID),R.push(E.customFragmentShaderID)),E.defines!==void 0)for(const G in E.defines)R.push(G),R.push(E.defines[G]);return E.isRawShaderMaterial===!1&&(M(R,E),w(R,E),R.push(t.outputColorSpace)),R.push(E.customProgramCacheKey),R.join()}function M(E,R){E.push(R.precision),E.push(R.outputColorSpace),E.push(R.envMapMode),E.push(R.envMapCubeUVHeight),E.push(R.mapUv),E.push(R.alphaMapUv),E.push(R.lightMapUv),E.push(R.aoMapUv),E.push(R.bumpMapUv),E.push(R.normalMapUv),E.push(R.displacementMapUv),E.push(R.emissiveMapUv),E.push(R.metalnessMapUv),E.push(R.roughnessMapUv),E.push(R.anisotropyMapUv),E.push(R.clearcoatMapUv),E.push(R.clearcoatNormalMapUv),E.push(R.clearcoatRoughnessMapUv),E.push(R.iridescenceMapUv),E.push(R.iridescenceThicknessMapUv),E.push(R.sheenColorMapUv),E.push(R.sheenRoughnessMapUv),E.push(R.specularMapUv),E.push(R.specularColorMapUv),E.push(R.specularIntensityMapUv),E.push(R.transmissionMapUv),E.push(R.thicknessMapUv),E.push(R.combine),E.push(R.fogExp2),E.push(R.sizeAttenuation),E.push(R.morphTargetsCount),E.push(R.morphAttributeCount),E.push(R.numDirLights),E.push(R.numPointLights),E.push(R.numSpotLights),E.push(R.numSpotLightMaps),E.push(R.numHemiLights),E.push(R.numRectAreaLights),E.push(R.numDirLightShadows),E.push(R.numPointLightShadows),E.push(R.numSpotLightShadows),E.push(R.numSpotLightShadowsWithMaps),E.push(R.numLightProbes),E.push(R.shadowMapType),E.push(R.toneMapping),E.push(R.numClippingPlanes),E.push(R.numClipIntersection),E.push(R.depthPacking)}function w(E,R){o.disableAll(),R.supportsVertexTextures&&o.enable(0),R.instancing&&o.enable(1),R.instancingColor&&o.enable(2),R.instancingMorph&&o.enable(3),R.matcap&&o.enable(4),R.envMap&&o.enable(5),R.normalMapObjectSpace&&o.enable(6),R.normalMapTangentSpace&&o.enable(7),R.clearcoat&&o.enable(8),R.iridescence&&o.enable(9),R.alphaTest&&o.enable(10),R.vertexColors&&o.enable(11),R.vertexAlphas&&o.enable(12),R.vertexUv1s&&o.enable(13),R.vertexUv2s&&o.enable(14),R.vertexUv3s&&o.enable(15),R.vertexTangents&&o.enable(16),R.anisotropy&&o.enable(17),R.alphaHash&&o.enable(18),R.batching&&o.enable(19),R.dispersion&&o.enable(20),R.batchingColor&&o.enable(21),E.push(o.mask),o.disableAll(),R.fog&&o.enable(0),R.useFog&&o.enable(1),R.flatShading&&o.enable(2),R.logarithmicDepthBuffer&&o.enable(3),R.reverseDepthBuffer&&o.enable(4),R.skinning&&o.enable(5),R.morphTargets&&o.enable(6),R.morphNormals&&o.enable(7),R.morphColors&&o.enable(8),R.premultipliedAlpha&&o.enable(9),R.shadowMapEnabled&&o.enable(10),R.doubleSided&&o.enable(11),R.flipSided&&o.enable(12),R.useDepthPacking&&o.enable(13),R.dithering&&o.enable(14),R.transmission&&o.enable(15),R.sheen&&o.enable(16),R.opaque&&o.enable(17),R.pointsUvs&&o.enable(18),R.decodeVideoTexture&&o.enable(19),R.alphaToCoverage&&o.enable(20),E.push(o.mask)}function V(E){const R=y[E.type];let G;if(R){const q=qn[R];G=zv.clone(q.uniforms)}else G=E.uniforms;return G}function L(E,R){let G;for(let q=0,ce=u.length;q<ce;q++){const re=u[q];if(re.cacheKey===R){G=re,++G.usedTimes;break}}return G===void 0&&(G=new JM(t,R,E,s),u.push(G)),G}function z(E){if(--E.usedTimes===0){const R=u.indexOf(E);u[R]=u[u.length-1],u.pop(),E.destroy()}}function X(E){l.remove(E)}function $(){l.dispose()}return{getParameters:h,getProgramCacheKey:T,getUniforms:V,acquireProgram:L,releaseProgram:z,releaseShaderCache:X,programs:u,dispose:$}}function ib(){let t=new WeakMap;function e(a){return t.has(a)}function n(a){let o=t.get(a);return o===void 0&&(o={},t.set(a,o)),o}function i(a){t.delete(a)}function r(a,o,l){t.get(a)[o]=l}function s(){t=new WeakMap}return{has:e,get:n,remove:i,update:r,dispose:s}}function rb(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function ph(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function mh(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function a(d,c,m,p,y,g){let h=t[e];return h===void 0?(h={id:d.id,object:d,geometry:c,material:m,groupOrder:p,renderOrder:d.renderOrder,z:y,group:g},t[e]=h):(h.id=d.id,h.object=d,h.geometry=c,h.material=m,h.groupOrder=p,h.renderOrder=d.renderOrder,h.z=y,h.group=g),e++,h}function o(d,c,m,p,y,g){const h=a(d,c,m,p,y,g);m.transmission>0?i.push(h):m.transparent===!0?r.push(h):n.push(h)}function l(d,c,m,p,y,g){const h=a(d,c,m,p,y,g);m.transmission>0?i.unshift(h):m.transparent===!0?r.unshift(h):n.unshift(h)}function f(d,c){n.length>1&&n.sort(d||rb),i.length>1&&i.sort(c||ph),r.length>1&&r.sort(c||ph)}function u(){for(let d=e,c=t.length;d<c;d++){const m=t[d];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:o,unshift:l,finish:u,sort:f}}function sb(){let t=new WeakMap;function e(i,r){const s=t.get(i);let a;return s===void 0?(a=new mh,t.set(i,[a])):r>=s.length?(a=new mh,s.push(a)):a=s[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}function ab(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new _e,color:new Mt};break;case"SpotLight":n={position:new _e,direction:new _e,color:new Mt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new _e,color:new Mt,distance:0,decay:0};break;case"HemisphereLight":n={direction:new _e,skyColor:new Mt,groundColor:new Mt};break;case"RectAreaLight":n={color:new Mt,position:new _e,halfWidth:new _e,halfHeight:new _e};break}return t[e.id]=n,n}}}function ob(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new yt};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new yt};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new yt,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let lb=0;function cb(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function ub(t){const e=new ab,n=ob(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let f=0;f<9;f++)i.probe.push(new _e);const r=new _e,s=new Ft,a=new Ft;function o(f){let u=0,d=0,c=0;for(let $=0;$<9;$++)i.probe[$].set(0,0,0);let m=0,p=0,y=0,g=0,h=0,T=0,M=0,w=0,V=0,L=0,z=0;f.sort(cb);for(let $=0,E=f.length;$<E;$++){const R=f[$],G=R.color,q=R.intensity,ce=R.distance,re=R.shadow&&R.shadow.map?R.shadow.map.texture:null;if(R.isAmbientLight)u+=G.r*q,d+=G.g*q,c+=G.b*q;else if(R.isLightProbe){for(let ae=0;ae<9;ae++)i.probe[ae].addScaledVector(R.sh.coefficients[ae],q);z++}else if(R.isDirectionalLight){const ae=e.get(R);if(ae.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){const me=R.shadow,ne=n.get(R);ne.shadowIntensity=me.intensity,ne.shadowBias=me.bias,ne.shadowNormalBias=me.normalBias,ne.shadowRadius=me.radius,ne.shadowMapSize=me.mapSize,i.directionalShadow[m]=ne,i.directionalShadowMap[m]=re,i.directionalShadowMatrix[m]=R.shadow.matrix,T++}i.directional[m]=ae,m++}else if(R.isSpotLight){const ae=e.get(R);ae.position.setFromMatrixPosition(R.matrixWorld),ae.color.copy(G).multiplyScalar(q),ae.distance=ce,ae.coneCos=Math.cos(R.angle),ae.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),ae.decay=R.decay,i.spot[y]=ae;const me=R.shadow;if(R.map&&(i.spotLightMap[V]=R.map,V++,me.updateMatrices(R),R.castShadow&&L++),i.spotLightMatrix[y]=me.matrix,R.castShadow){const ne=n.get(R);ne.shadowIntensity=me.intensity,ne.shadowBias=me.bias,ne.shadowNormalBias=me.normalBias,ne.shadowRadius=me.radius,ne.shadowMapSize=me.mapSize,i.spotShadow[y]=ne,i.spotShadowMap[y]=re,w++}y++}else if(R.isRectAreaLight){const ae=e.get(R);ae.color.copy(G).multiplyScalar(q),ae.halfWidth.set(R.width*.5,0,0),ae.halfHeight.set(0,R.height*.5,0),i.rectArea[g]=ae,g++}else if(R.isPointLight){const ae=e.get(R);if(ae.color.copy(R.color).multiplyScalar(R.intensity),ae.distance=R.distance,ae.decay=R.decay,R.castShadow){const me=R.shadow,ne=n.get(R);ne.shadowIntensity=me.intensity,ne.shadowBias=me.bias,ne.shadowNormalBias=me.normalBias,ne.shadowRadius=me.radius,ne.shadowMapSize=me.mapSize,ne.shadowCameraNear=me.camera.near,ne.shadowCameraFar=me.camera.far,i.pointShadow[p]=ne,i.pointShadowMap[p]=re,i.pointShadowMatrix[p]=R.shadow.matrix,M++}i.point[p]=ae,p++}else if(R.isHemisphereLight){const ae=e.get(R);ae.skyColor.copy(R.color).multiplyScalar(q),ae.groundColor.copy(R.groundColor).multiplyScalar(q),i.hemi[h]=ae,h++}}g>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=He.LTC_FLOAT_1,i.rectAreaLTC2=He.LTC_FLOAT_2):(i.rectAreaLTC1=He.LTC_HALF_1,i.rectAreaLTC2=He.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=d,i.ambient[2]=c;const X=i.hash;(X.directionalLength!==m||X.pointLength!==p||X.spotLength!==y||X.rectAreaLength!==g||X.hemiLength!==h||X.numDirectionalShadows!==T||X.numPointShadows!==M||X.numSpotShadows!==w||X.numSpotMaps!==V||X.numLightProbes!==z)&&(i.directional.length=m,i.spot.length=y,i.rectArea.length=g,i.point.length=p,i.hemi.length=h,i.directionalShadow.length=T,i.directionalShadowMap.length=T,i.pointShadow.length=M,i.pointShadowMap.length=M,i.spotShadow.length=w,i.spotShadowMap.length=w,i.directionalShadowMatrix.length=T,i.pointShadowMatrix.length=M,i.spotLightMatrix.length=w+V-L,i.spotLightMap.length=V,i.numSpotLightShadowsWithMaps=L,i.numLightProbes=z,X.directionalLength=m,X.pointLength=p,X.spotLength=y,X.rectAreaLength=g,X.hemiLength=h,X.numDirectionalShadows=T,X.numPointShadows=M,X.numSpotShadows=w,X.numSpotMaps=V,X.numLightProbes=z,i.version=lb++)}function l(f,u){let d=0,c=0,m=0,p=0,y=0;const g=u.matrixWorldInverse;for(let h=0,T=f.length;h<T;h++){const M=f[h];if(M.isDirectionalLight){const w=i.directional[d];w.direction.setFromMatrixPosition(M.matrixWorld),r.setFromMatrixPosition(M.target.matrixWorld),w.direction.sub(r),w.direction.transformDirection(g),d++}else if(M.isSpotLight){const w=i.spot[m];w.position.setFromMatrixPosition(M.matrixWorld),w.position.applyMatrix4(g),w.direction.setFromMatrixPosition(M.matrixWorld),r.setFromMatrixPosition(M.target.matrixWorld),w.direction.sub(r),w.direction.transformDirection(g),m++}else if(M.isRectAreaLight){const w=i.rectArea[p];w.position.setFromMatrixPosition(M.matrixWorld),w.position.applyMatrix4(g),a.identity(),s.copy(M.matrixWorld),s.premultiply(g),a.extractRotation(s),w.halfWidth.set(M.width*.5,0,0),w.halfHeight.set(0,M.height*.5,0),w.halfWidth.applyMatrix4(a),w.halfHeight.applyMatrix4(a),p++}else if(M.isPointLight){const w=i.point[c];w.position.setFromMatrixPosition(M.matrixWorld),w.position.applyMatrix4(g),c++}else if(M.isHemisphereLight){const w=i.hemi[y];w.direction.setFromMatrixPosition(M.matrixWorld),w.direction.transformDirection(g),y++}}}return{setup:o,setupView:l,state:i}}function _h(t){const e=new ub(t),n=[],i=[];function r(u){f.camera=u,n.length=0,i.length=0}function s(u){n.push(u)}function a(u){i.push(u)}function o(){e.setup(n)}function l(u){e.setupView(n,u)}const f={lightsArray:n,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:f,setupLights:o,setupLightsView:l,pushLight:s,pushShadow:a}}function fb(t){let e=new WeakMap;function n(r,s=0){const a=e.get(r);let o;return a===void 0?(o=new _h(t),e.set(r,[o])):s>=a.length?(o=new _h(t),a.push(o)):o=a[s],o}function i(){e=new WeakMap}return{get:n,dispose:i}}class hb extends Ro{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=av,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class db extends Ro{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const pb=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,mb=`uniform sampler2D shadow_pass;
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
}`;function _b(t,e,n){let i=new Dp;const r=new yt,s=new yt,a=new Ot,o=new hb({depthPacking:ov}),l=new db,f={},u=n.maxTextureSize,d={[Zi]:pn,[pn]:Zi,[mi]:mi},c=new Qn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new yt},radius:{value:4}},vertexShader:pb,fragmentShader:mb}),m=c.clone();m.defines.HORIZONTAL_PASS=1;const p=new nr;p.setAttribute("position",new _n(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const y=new An(p,c),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=op;let h=this.type;this.render=function(L,z,X){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||L.length===0)return;const $=t.getRenderTarget(),E=t.getActiveCubeFace(),R=t.getActiveMipmapLevel(),G=t.state;G.setBlending(Yi),G.buffers.color.setClear(1,1,1,1),G.buffers.depth.setTest(!0),G.setScissorTest(!1);const q=h!==hi&&this.type===hi,ce=h===hi&&this.type!==hi;for(let re=0,ae=L.length;re<ae;re++){const me=L[re],ne=me.shadow;if(ne===void 0||ne.autoUpdate===!1&&ne.needsUpdate===!1)continue;r.copy(ne.mapSize);const Ne=ne.getFrameExtents();if(r.multiply(Ne),s.copy(ne.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/Ne.x),r.x=s.x*Ne.x,ne.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/Ne.y),r.y=s.y*Ne.y,ne.mapSize.y=s.y)),ne.map===null||q===!0||ce===!0){const ke=this.type!==hi?{minFilter:wn,magFilter:wn}:{};ne.map!==null&&ne.map.dispose(),ne.map=new Lr(r.x,r.y,ke),ne.map.texture.name=me.name+".shadowMap",ne.camera.updateProjectionMatrix()}t.setRenderTarget(ne.map),t.clear();const ze=ne.getViewportCount();for(let ke=0;ke<ze;ke++){const Ze=ne.getViewport(ke);a.set(s.x*Ze.x,s.y*Ze.y,s.x*Ze.z,s.y*Ze.w),G.viewport(a),ne.updateMatrices(me,ke),i=ne.getFrustum(),w(z,X,ne.camera,me,this.type)}ne.isPointLightShadow!==!0&&this.type===hi&&T(ne,X),ne.needsUpdate=!1}h=this.type,g.needsUpdate=!1,t.setRenderTarget($,E,R)};function T(L,z){const X=e.update(y);c.defines.VSM_SAMPLES!==L.blurSamples&&(c.defines.VSM_SAMPLES=L.blurSamples,m.defines.VSM_SAMPLES=L.blurSamples,c.needsUpdate=!0,m.needsUpdate=!0),L.mapPass===null&&(L.mapPass=new Lr(r.x,r.y)),c.uniforms.shadow_pass.value=L.map.texture,c.uniforms.resolution.value=L.mapSize,c.uniforms.radius.value=L.radius,t.setRenderTarget(L.mapPass),t.clear(),t.renderBufferDirect(z,null,X,c,y,null),m.uniforms.shadow_pass.value=L.mapPass.texture,m.uniforms.resolution.value=L.mapSize,m.uniforms.radius.value=L.radius,t.setRenderTarget(L.map),t.clear(),t.renderBufferDirect(z,null,X,m,y,null)}function M(L,z,X,$){let E=null;const R=X.isPointLight===!0?L.customDistanceMaterial:L.customDepthMaterial;if(R!==void 0)E=R;else if(E=X.isPointLight===!0?l:o,t.localClippingEnabled&&z.clipShadows===!0&&Array.isArray(z.clippingPlanes)&&z.clippingPlanes.length!==0||z.displacementMap&&z.displacementScale!==0||z.alphaMap&&z.alphaTest>0||z.map&&z.alphaTest>0){const G=E.uuid,q=z.uuid;let ce=f[G];ce===void 0&&(ce={},f[G]=ce);let re=ce[q];re===void 0&&(re=E.clone(),ce[q]=re,z.addEventListener("dispose",V)),E=re}if(E.visible=z.visible,E.wireframe=z.wireframe,$===hi?E.side=z.shadowSide!==null?z.shadowSide:z.side:E.side=z.shadowSide!==null?z.shadowSide:d[z.side],E.alphaMap=z.alphaMap,E.alphaTest=z.alphaTest,E.map=z.map,E.clipShadows=z.clipShadows,E.clippingPlanes=z.clippingPlanes,E.clipIntersection=z.clipIntersection,E.displacementMap=z.displacementMap,E.displacementScale=z.displacementScale,E.displacementBias=z.displacementBias,E.wireframeLinewidth=z.wireframeLinewidth,E.linewidth=z.linewidth,X.isPointLight===!0&&E.isMeshDistanceMaterial===!0){const G=t.properties.get(E);G.light=X}return E}function w(L,z,X,$,E){if(L.visible===!1)return;if(L.layers.test(z.layers)&&(L.isMesh||L.isLine||L.isPoints)&&(L.castShadow||L.receiveShadow&&E===hi)&&(!L.frustumCulled||i.intersectsObject(L))){L.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,L.matrixWorld);const q=e.update(L),ce=L.material;if(Array.isArray(ce)){const re=q.groups;for(let ae=0,me=re.length;ae<me;ae++){const ne=re[ae],Ne=ce[ne.materialIndex];if(Ne&&Ne.visible){const ze=M(L,Ne,$,E);L.onBeforeShadow(t,L,z,X,q,ze,ne),t.renderBufferDirect(X,null,q,ze,L,ne),L.onAfterShadow(t,L,z,X,q,ze,ne)}}}else if(ce.visible){const re=M(L,ce,$,E);L.onBeforeShadow(t,L,z,X,q,re,null),t.renderBufferDirect(X,null,q,re,L,null),L.onAfterShadow(t,L,z,X,q,re,null)}}const G=L.children;for(let q=0,ce=G.length;q<ce;q++)w(G[q],z,X,$,E)}function V(L){L.target.removeEventListener("dispose",V);for(const X in f){const $=f[X],E=L.target.uuid;E in $&&($[E].dispose(),delete $[E])}}}const gb={[Zl]:Jl,[Ql]:nc,[ec]:ic,[os]:tc,[Jl]:Zl,[nc]:Ql,[ic]:ec,[tc]:os};function vb(t){function e(){let J=!1;const Xe=new Ot;let fe=null;const Re=new Ot(0,0,0,0);return{setMask:function(Ve){fe!==Ve&&!J&&(t.colorMask(Ve,Ve,Ve,Ve),fe=Ve)},setLocked:function(Ve){J=Ve},setClear:function(Ve,Be,dt,Tt,Et){Et===!0&&(Ve*=Tt,Be*=Tt,dt*=Tt),Xe.set(Ve,Be,dt,Tt),Re.equals(Xe)===!1&&(t.clearColor(Ve,Be,dt,Tt),Re.copy(Xe))},reset:function(){J=!1,fe=null,Re.set(-1,0,0,0)}}}function n(){let J=!1,Xe=!1,fe=null,Re=null,Ve=null;return{setReversed:function(Be){Xe=Be},setTest:function(Be){Be?Oe(t.DEPTH_TEST):ee(t.DEPTH_TEST)},setMask:function(Be){fe!==Be&&!J&&(t.depthMask(Be),fe=Be)},setFunc:function(Be){if(Xe&&(Be=gb[Be]),Re!==Be){switch(Be){case Zl:t.depthFunc(t.NEVER);break;case Jl:t.depthFunc(t.ALWAYS);break;case Ql:t.depthFunc(t.LESS);break;case os:t.depthFunc(t.LEQUAL);break;case ec:t.depthFunc(t.EQUAL);break;case tc:t.depthFunc(t.GEQUAL);break;case nc:t.depthFunc(t.GREATER);break;case ic:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}Re=Be}},setLocked:function(Be){J=Be},setClear:function(Be){Ve!==Be&&(t.clearDepth(Be),Ve=Be)},reset:function(){J=!1,fe=null,Re=null,Ve=null}}}function i(){let J=!1,Xe=null,fe=null,Re=null,Ve=null,Be=null,dt=null,Tt=null,Et=null;return{setTest:function(pt){J||(pt?Oe(t.STENCIL_TEST):ee(t.STENCIL_TEST))},setMask:function(pt){Xe!==pt&&!J&&(t.stencilMask(pt),Xe=pt)},setFunc:function(pt,$t,Gt){(fe!==pt||Re!==$t||Ve!==Gt)&&(t.stencilFunc(pt,$t,Gt),fe=pt,Re=$t,Ve=Gt)},setOp:function(pt,$t,Gt){(Be!==pt||dt!==$t||Tt!==Gt)&&(t.stencilOp(pt,$t,Gt),Be=pt,dt=$t,Tt=Gt)},setLocked:function(pt){J=pt},setClear:function(pt){Et!==pt&&(t.clearStencil(pt),Et=pt)},reset:function(){J=!1,Xe=null,fe=null,Re=null,Ve=null,Be=null,dt=null,Tt=null,Et=null}}}const r=new e,s=new n,a=new i,o=new WeakMap,l=new WeakMap;let f={},u={},d=new WeakMap,c=[],m=null,p=!1,y=null,g=null,h=null,T=null,M=null,w=null,V=null,L=new Mt(0,0,0),z=0,X=!1,$=null,E=null,R=null,G=null,q=null;const ce=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let re=!1,ae=0;const me=t.getParameter(t.VERSION);me.indexOf("WebGL")!==-1?(ae=parseFloat(/^WebGL (\d)/.exec(me)[1]),re=ae>=1):me.indexOf("OpenGL ES")!==-1&&(ae=parseFloat(/^OpenGL ES (\d)/.exec(me)[1]),re=ae>=2);let ne=null,Ne={};const ze=t.getParameter(t.SCISSOR_BOX),ke=t.getParameter(t.VIEWPORT),Ze=new Ot().fromArray(ze),nt=new Ot().fromArray(ke);function Se(J,Xe,fe,Re){const Ve=new Uint8Array(4),Be=t.createTexture();t.bindTexture(J,Be),t.texParameteri(J,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(J,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let dt=0;dt<fe;dt++)J===t.TEXTURE_3D||J===t.TEXTURE_2D_ARRAY?t.texImage3D(Xe,0,t.RGBA,1,1,Re,0,t.RGBA,t.UNSIGNED_BYTE,Ve):t.texImage2D(Xe+dt,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,Ve);return Be}const Ce={};Ce[t.TEXTURE_2D]=Se(t.TEXTURE_2D,t.TEXTURE_2D,1),Ce[t.TEXTURE_CUBE_MAP]=Se(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),Ce[t.TEXTURE_2D_ARRAY]=Se(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),Ce[t.TEXTURE_3D]=Se(t.TEXTURE_3D,t.TEXTURE_3D,1,1),r.setClear(0,0,0,1),s.setClear(1),a.setClear(0),Oe(t.DEPTH_TEST),s.setFunc(os),W(!1),pe(Tf),Oe(t.CULL_FACE),A(Yi);function Oe(J){f[J]!==!0&&(t.enable(J),f[J]=!0)}function ee(J){f[J]!==!1&&(t.disable(J),f[J]=!1)}function we(J,Xe){return u[J]!==Xe?(t.bindFramebuffer(J,Xe),u[J]=Xe,J===t.DRAW_FRAMEBUFFER&&(u[t.FRAMEBUFFER]=Xe),J===t.FRAMEBUFFER&&(u[t.DRAW_FRAMEBUFFER]=Xe),!0):!1}function xe(J,Xe){let fe=c,Re=!1;if(J){fe=d.get(Xe),fe===void 0&&(fe=[],d.set(Xe,fe));const Ve=J.textures;if(fe.length!==Ve.length||fe[0]!==t.COLOR_ATTACHMENT0){for(let Be=0,dt=Ve.length;Be<dt;Be++)fe[Be]=t.COLOR_ATTACHMENT0+Be;fe.length=Ve.length,Re=!0}}else fe[0]!==t.BACK&&(fe[0]=t.BACK,Re=!0);Re&&t.drawBuffers(fe)}function De(J){return m!==J?(t.useProgram(J),m=J,!0):!1}const je={[Sr]:t.FUNC_ADD,[I0]:t.FUNC_SUBTRACT,[U0]:t.FUNC_REVERSE_SUBTRACT};je[N0]=t.MIN,je[O0]=t.MAX;const We={[F0]:t.ZERO,[B0]:t.ONE,[z0]:t.SRC_COLOR,[$l]:t.SRC_ALPHA,[X0]:t.SRC_ALPHA_SATURATE,[G0]:t.DST_COLOR,[H0]:t.DST_ALPHA,[k0]:t.ONE_MINUS_SRC_COLOR,[Kl]:t.ONE_MINUS_SRC_ALPHA,[W0]:t.ONE_MINUS_DST_COLOR,[V0]:t.ONE_MINUS_DST_ALPHA,[j0]:t.CONSTANT_COLOR,[q0]:t.ONE_MINUS_CONSTANT_COLOR,[Y0]:t.CONSTANT_ALPHA,[$0]:t.ONE_MINUS_CONSTANT_ALPHA};function A(J,Xe,fe,Re,Ve,Be,dt,Tt,Et,pt){if(J===Yi){p===!0&&(ee(t.BLEND),p=!1);return}if(p===!1&&(Oe(t.BLEND),p=!0),J!==L0){if(J!==y||pt!==X){if((g!==Sr||M!==Sr)&&(t.blendEquation(t.FUNC_ADD),g=Sr,M=Sr),pt)switch(J){case Ar:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Ef:t.blendFunc(t.ONE,t.ONE);break;case wf:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Af:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:break}else switch(J){case Ar:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Ef:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case wf:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Af:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:break}h=null,T=null,w=null,V=null,L.set(0,0,0),z=0,y=J,X=pt}return}Ve=Ve||Xe,Be=Be||fe,dt=dt||Re,(Xe!==g||Ve!==M)&&(t.blendEquationSeparate(je[Xe],je[Ve]),g=Xe,M=Ve),(fe!==h||Re!==T||Be!==w||dt!==V)&&(t.blendFuncSeparate(We[fe],We[Re],We[Be],We[dt]),h=fe,T=Re,w=Be,V=dt),(Tt.equals(L)===!1||Et!==z)&&(t.blendColor(Tt.r,Tt.g,Tt.b,Et),L.copy(Tt),z=Et),y=J,X=!1}function H(J,Xe){J.side===mi?ee(t.CULL_FACE):Oe(t.CULL_FACE);let fe=J.side===pn;Xe&&(fe=!fe),W(fe),J.blending===Ar&&J.transparent===!1?A(Yi):A(J.blending,J.blendEquation,J.blendSrc,J.blendDst,J.blendEquationAlpha,J.blendSrcAlpha,J.blendDstAlpha,J.blendColor,J.blendAlpha,J.premultipliedAlpha),s.setFunc(J.depthFunc),s.setTest(J.depthTest),s.setMask(J.depthWrite),r.setMask(J.colorWrite);const Re=J.stencilWrite;a.setTest(Re),Re&&(a.setMask(J.stencilWriteMask),a.setFunc(J.stencilFunc,J.stencilRef,J.stencilFuncMask),a.setOp(J.stencilFail,J.stencilZFail,J.stencilZPass)),ye(J.polygonOffset,J.polygonOffsetFactor,J.polygonOffsetUnits),J.alphaToCoverage===!0?Oe(t.SAMPLE_ALPHA_TO_COVERAGE):ee(t.SAMPLE_ALPHA_TO_COVERAGE)}function W(J){$!==J&&(J?t.frontFace(t.CW):t.frontFace(t.CCW),$=J)}function pe(J){J!==R0?(Oe(t.CULL_FACE),J!==E&&(J===Tf?t.cullFace(t.BACK):J===P0?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):ee(t.CULL_FACE),E=J}function oe(J){J!==R&&(re&&t.lineWidth(J),R=J)}function ye(J,Xe,fe){J?(Oe(t.POLYGON_OFFSET_FILL),(G!==Xe||q!==fe)&&(t.polygonOffset(Xe,fe),G=Xe,q=fe)):ee(t.POLYGON_OFFSET_FILL)}function ve(J){J?Oe(t.SCISSOR_TEST):ee(t.SCISSOR_TEST)}function _(J){J===void 0&&(J=t.TEXTURE0+ce-1),ne!==J&&(t.activeTexture(J),ne=J)}function v(J,Xe,fe){fe===void 0&&(ne===null?fe=t.TEXTURE0+ce-1:fe=ne);let Re=Ne[fe];Re===void 0&&(Re={type:void 0,texture:void 0},Ne[fe]=Re),(Re.type!==J||Re.texture!==Xe)&&(ne!==fe&&(t.activeTexture(fe),ne=fe),t.bindTexture(J,Xe||Ce[J]),Re.type=J,Re.texture=Xe)}function b(){const J=Ne[ne];J!==void 0&&J.type!==void 0&&(t.bindTexture(J.type,null),J.type=void 0,J.texture=void 0)}function P(){try{t.compressedTexImage2D.apply(t,arguments)}catch{}}function N(){try{t.compressedTexImage3D.apply(t,arguments)}catch{}}function F(){try{t.texSubImage2D.apply(t,arguments)}catch{}}function Z(){try{t.texSubImage3D.apply(t,arguments)}catch{}}function j(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch{}}function te(){try{t.compressedTexSubImage3D.apply(t,arguments)}catch{}}function be(){try{t.texStorage2D.apply(t,arguments)}catch{}}function se(){try{t.texStorage3D.apply(t,arguments)}catch{}}function ge(){try{t.texImage2D.apply(t,arguments)}catch{}}function Fe(){try{t.texImage3D.apply(t,arguments)}catch{}}function Le(J){Ze.equals(J)===!1&&(t.scissor(J.x,J.y,J.z,J.w),Ze.copy(J))}function Ue(J){nt.equals(J)===!1&&(t.viewport(J.x,J.y,J.z,J.w),nt.copy(J))}function $e(J,Xe){let fe=l.get(Xe);fe===void 0&&(fe=new WeakMap,l.set(Xe,fe));let Re=fe.get(J);Re===void 0&&(Re=t.getUniformBlockIndex(Xe,J.name),fe.set(J,Re))}function qe(J,Xe){const Re=l.get(Xe).get(J);o.get(Xe)!==Re&&(t.uniformBlockBinding(Xe,Re,J.__bindingPointIndex),o.set(Xe,Re))}function it(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),f={},ne=null,Ne={},u={},d=new WeakMap,c=[],m=null,p=!1,y=null,g=null,h=null,T=null,M=null,w=null,V=null,L=new Mt(0,0,0),z=0,X=!1,$=null,E=null,R=null,G=null,q=null,Ze.set(0,0,t.canvas.width,t.canvas.height),nt.set(0,0,t.canvas.width,t.canvas.height),r.reset(),s.reset(),a.reset()}return{buffers:{color:r,depth:s,stencil:a},enable:Oe,disable:ee,bindFramebuffer:we,drawBuffers:xe,useProgram:De,setBlending:A,setMaterial:H,setFlipSided:W,setCullFace:pe,setLineWidth:oe,setPolygonOffset:ye,setScissorTest:ve,activeTexture:_,bindTexture:v,unbindTexture:b,compressedTexImage2D:P,compressedTexImage3D:N,texImage2D:ge,texImage3D:Fe,updateUBOMapping:$e,uniformBlockBinding:qe,texStorage2D:be,texStorage3D:se,texSubImage2D:F,texSubImage3D:Z,compressedTexSubImage2D:j,compressedTexSubImage3D:te,scissor:Le,viewport:Ue,reset:it}}function gh(t,e,n,i){const r=xb(i);switch(n){case dp:return t*e;case mp:return t*e;case _p:return t*e*2;case gp:return t*e/r.components*r.byteLength;case xu:return t*e/r.components*r.byteLength;case vp:return t*e*2/r.components*r.byteLength;case yu:return t*e*2/r.components*r.byteLength;case pp:return t*e*3/r.components*r.byteLength;case Fn:return t*e*4/r.components*r.byteLength;case Su:return t*e*4/r.components*r.byteLength;case qa:case Ya:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case $a:case Ka:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case cc:case fc:return Math.max(t,16)*Math.max(e,8)/4;case lc:case uc:return Math.max(t,8)*Math.max(e,8)/2;case hc:case dc:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case pc:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case mc:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case _c:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case gc:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case vc:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case xc:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case yc:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case Sc:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case Mc:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case bc:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case Tc:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case Ec:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case wc:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case Ac:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case Cc:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case Za:case Rc:case Pc:return Math.ceil(t/4)*Math.ceil(e/4)*16;case xp:case Dc:return Math.ceil(t/4)*Math.ceil(e/4)*8;case Lc:case Ic:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function xb(t){switch(t){case Mi:case up:return{byteLength:1,components:1};case Qs:case fp:case sa:return{byteLength:2,components:1};case gu:case vu:return{byteLength:2,components:4};case Dr:case _u:case gi:return{byteLength:4,components:1};case hp:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${t}.`)}function yb(t,e,n,i,r,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),f=new yt,u=new WeakMap;let d;const c=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function p(_,v){return m?new OffscreenCanvas(_,v):ea("canvas")}function y(_,v,b){let P=1;const N=ve(_);if((N.width>b||N.height>b)&&(P=b/Math.max(N.width,N.height)),P<1)if(typeof HTMLImageElement<"u"&&_ instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&_ instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&_ instanceof ImageBitmap||typeof VideoFrame<"u"&&_ instanceof VideoFrame){const F=Math.floor(P*N.width),Z=Math.floor(P*N.height);d===void 0&&(d=p(F,Z));const j=v?p(F,Z):d;return j.width=F,j.height=Z,j.getContext("2d").drawImage(_,0,0,F,Z),j}else return"data"in _,_;return _}function g(_){return _.generateMipmaps&&_.minFilter!==wn&&_.minFilter!==un}function h(_){t.generateMipmap(_)}function T(_,v,b,P,N=!1){if(_!==null&&t[_]!==void 0)return t[_];let F=v;if(v===t.RED&&(b===t.FLOAT&&(F=t.R32F),b===t.HALF_FLOAT&&(F=t.R16F),b===t.UNSIGNED_BYTE&&(F=t.R8)),v===t.RED_INTEGER&&(b===t.UNSIGNED_BYTE&&(F=t.R8UI),b===t.UNSIGNED_SHORT&&(F=t.R16UI),b===t.UNSIGNED_INT&&(F=t.R32UI),b===t.BYTE&&(F=t.R8I),b===t.SHORT&&(F=t.R16I),b===t.INT&&(F=t.R32I)),v===t.RG&&(b===t.FLOAT&&(F=t.RG32F),b===t.HALF_FLOAT&&(F=t.RG16F),b===t.UNSIGNED_BYTE&&(F=t.RG8)),v===t.RG_INTEGER&&(b===t.UNSIGNED_BYTE&&(F=t.RG8UI),b===t.UNSIGNED_SHORT&&(F=t.RG16UI),b===t.UNSIGNED_INT&&(F=t.RG32UI),b===t.BYTE&&(F=t.RG8I),b===t.SHORT&&(F=t.RG16I),b===t.INT&&(F=t.RG32I)),v===t.RGB_INTEGER&&(b===t.UNSIGNED_BYTE&&(F=t.RGB8UI),b===t.UNSIGNED_SHORT&&(F=t.RGB16UI),b===t.UNSIGNED_INT&&(F=t.RGB32UI),b===t.BYTE&&(F=t.RGB8I),b===t.SHORT&&(F=t.RGB16I),b===t.INT&&(F=t.RGB32I)),v===t.RGBA_INTEGER&&(b===t.UNSIGNED_BYTE&&(F=t.RGBA8UI),b===t.UNSIGNED_SHORT&&(F=t.RGBA16UI),b===t.UNSIGNED_INT&&(F=t.RGBA32UI),b===t.BYTE&&(F=t.RGBA8I),b===t.SHORT&&(F=t.RGBA16I),b===t.INT&&(F=t.RGBA32I)),v===t.RGB&&b===t.UNSIGNED_INT_5_9_9_9_REV&&(F=t.RGB9_E5),v===t.RGBA){const Z=N?lo:xt.getTransfer(P);b===t.FLOAT&&(F=t.RGBA32F),b===t.HALF_FLOAT&&(F=t.RGBA16F),b===t.UNSIGNED_BYTE&&(F=Z===Ct?t.SRGB8_ALPHA8:t.RGBA8),b===t.UNSIGNED_SHORT_4_4_4_4&&(F=t.RGBA4),b===t.UNSIGNED_SHORT_5_5_5_1&&(F=t.RGB5_A1)}return(F===t.R16F||F===t.R32F||F===t.RG16F||F===t.RG32F||F===t.RGBA16F||F===t.RGBA32F)&&e.get("EXT_color_buffer_float"),F}function M(_,v){let b;return _?v===null||v===Dr||v===us?b=t.DEPTH24_STENCIL8:v===gi?b=t.DEPTH32F_STENCIL8:v===Qs&&(b=t.DEPTH24_STENCIL8):v===null||v===Dr||v===us?b=t.DEPTH_COMPONENT24:v===gi?b=t.DEPTH_COMPONENT32F:v===Qs&&(b=t.DEPTH_COMPONENT16),b}function w(_,v){return g(_)===!0||_.isFramebufferTexture&&_.minFilter!==wn&&_.minFilter!==un?Math.log2(Math.max(v.width,v.height))+1:_.mipmaps!==void 0&&_.mipmaps.length>0?_.mipmaps.length:_.isCompressedTexture&&Array.isArray(_.image)?v.mipmaps.length:1}function V(_){const v=_.target;v.removeEventListener("dispose",V),z(v),v.isVideoTexture&&u.delete(v)}function L(_){const v=_.target;v.removeEventListener("dispose",L),$(v)}function z(_){const v=i.get(_);if(v.__webglInit===void 0)return;const b=_.source,P=c.get(b);if(P){const N=P[v.__cacheKey];N.usedTimes--,N.usedTimes===0&&X(_),Object.keys(P).length===0&&c.delete(b)}i.remove(_)}function X(_){const v=i.get(_);t.deleteTexture(v.__webglTexture);const b=_.source,P=c.get(b);delete P[v.__cacheKey],a.memory.textures--}function $(_){const v=i.get(_);if(_.depthTexture&&_.depthTexture.dispose(),_.isWebGLCubeRenderTarget)for(let P=0;P<6;P++){if(Array.isArray(v.__webglFramebuffer[P]))for(let N=0;N<v.__webglFramebuffer[P].length;N++)t.deleteFramebuffer(v.__webglFramebuffer[P][N]);else t.deleteFramebuffer(v.__webglFramebuffer[P]);v.__webglDepthbuffer&&t.deleteRenderbuffer(v.__webglDepthbuffer[P])}else{if(Array.isArray(v.__webglFramebuffer))for(let P=0;P<v.__webglFramebuffer.length;P++)t.deleteFramebuffer(v.__webglFramebuffer[P]);else t.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&t.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&t.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let P=0;P<v.__webglColorRenderbuffer.length;P++)v.__webglColorRenderbuffer[P]&&t.deleteRenderbuffer(v.__webglColorRenderbuffer[P]);v.__webglDepthRenderbuffer&&t.deleteRenderbuffer(v.__webglDepthRenderbuffer)}const b=_.textures;for(let P=0,N=b.length;P<N;P++){const F=i.get(b[P]);F.__webglTexture&&(t.deleteTexture(F.__webglTexture),a.memory.textures--),i.remove(b[P])}i.remove(_)}let E=0;function R(){E=0}function G(){const _=E;return _>=r.maxTextures,E+=1,_}function q(_){const v=[];return v.push(_.wrapS),v.push(_.wrapT),v.push(_.wrapR||0),v.push(_.magFilter),v.push(_.minFilter),v.push(_.anisotropy),v.push(_.internalFormat),v.push(_.format),v.push(_.type),v.push(_.generateMipmaps),v.push(_.premultiplyAlpha),v.push(_.flipY),v.push(_.unpackAlignment),v.push(_.colorSpace),v.join()}function ce(_,v){const b=i.get(_);if(_.isVideoTexture&&oe(_),_.isRenderTargetTexture===!1&&_.version>0&&b.__version!==_.version){const P=_.image;if(P!==null){if(P.complete!==!1){nt(b,_,v);return}}}n.bindTexture(t.TEXTURE_2D,b.__webglTexture,t.TEXTURE0+v)}function re(_,v){const b=i.get(_);if(_.version>0&&b.__version!==_.version){nt(b,_,v);return}n.bindTexture(t.TEXTURE_2D_ARRAY,b.__webglTexture,t.TEXTURE0+v)}function ae(_,v){const b=i.get(_);if(_.version>0&&b.__version!==_.version){nt(b,_,v);return}n.bindTexture(t.TEXTURE_3D,b.__webglTexture,t.TEXTURE0+v)}function me(_,v){const b=i.get(_);if(_.version>0&&b.__version!==_.version){Se(b,_,v);return}n.bindTexture(t.TEXTURE_CUBE_MAP,b.__webglTexture,t.TEXTURE0+v)}const ne={[ac]:t.REPEAT,[br]:t.CLAMP_TO_EDGE,[oc]:t.MIRRORED_REPEAT},Ne={[wn]:t.NEAREST,[sv]:t.NEAREST_MIPMAP_NEAREST,[ga]:t.NEAREST_MIPMAP_LINEAR,[un]:t.LINEAR,[Zo]:t.LINEAR_MIPMAP_NEAREST,[Tr]:t.LINEAR_MIPMAP_LINEAR},ze={[uv]:t.NEVER,[_v]:t.ALWAYS,[fv]:t.LESS,[yp]:t.LEQUAL,[hv]:t.EQUAL,[mv]:t.GEQUAL,[dv]:t.GREATER,[pv]:t.NOTEQUAL};function ke(_,v){if(v.type===gi&&e.has("OES_texture_float_linear")===!1&&(v.magFilter===un||v.magFilter===Zo||v.magFilter===ga||v.magFilter===Tr||v.minFilter===un||v.minFilter===Zo||v.minFilter===ga||v.minFilter),t.texParameteri(_,t.TEXTURE_WRAP_S,ne[v.wrapS]),t.texParameteri(_,t.TEXTURE_WRAP_T,ne[v.wrapT]),(_===t.TEXTURE_3D||_===t.TEXTURE_2D_ARRAY)&&t.texParameteri(_,t.TEXTURE_WRAP_R,ne[v.wrapR]),t.texParameteri(_,t.TEXTURE_MAG_FILTER,Ne[v.magFilter]),t.texParameteri(_,t.TEXTURE_MIN_FILTER,Ne[v.minFilter]),v.compareFunction&&(t.texParameteri(_,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(_,t.TEXTURE_COMPARE_FUNC,ze[v.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===wn||v.minFilter!==ga&&v.minFilter!==Tr||v.type===gi&&e.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||i.get(v).__currentAnisotropy){const b=e.get("EXT_texture_filter_anisotropic");t.texParameterf(_,b.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,r.getMaxAnisotropy())),i.get(v).__currentAnisotropy=v.anisotropy}}}function Ze(_,v){let b=!1;_.__webglInit===void 0&&(_.__webglInit=!0,v.addEventListener("dispose",V));const P=v.source;let N=c.get(P);N===void 0&&(N={},c.set(P,N));const F=q(v);if(F!==_.__cacheKey){N[F]===void 0&&(N[F]={texture:t.createTexture(),usedTimes:0},a.memory.textures++,b=!0),N[F].usedTimes++;const Z=N[_.__cacheKey];Z!==void 0&&(N[_.__cacheKey].usedTimes--,Z.usedTimes===0&&X(v)),_.__cacheKey=F,_.__webglTexture=N[F].texture}return b}function nt(_,v,b){let P=t.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(P=t.TEXTURE_2D_ARRAY),v.isData3DTexture&&(P=t.TEXTURE_3D);const N=Ze(_,v),F=v.source;n.bindTexture(P,_.__webglTexture,t.TEXTURE0+b);const Z=i.get(F);if(F.version!==Z.__version||N===!0){n.activeTexture(t.TEXTURE0+b);const j=xt.getPrimaries(xt.workingColorSpace),te=v.colorSpace===Gi?null:xt.getPrimaries(v.colorSpace),be=v.colorSpace===Gi||j===te?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,v.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,v.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,be);let se=y(v.image,!1,r.maxTextureSize);se=ye(v,se);const ge=s.convert(v.format,v.colorSpace),Fe=s.convert(v.type);let Le=T(v.internalFormat,ge,Fe,v.colorSpace,v.isVideoTexture);ke(P,v);let Ue;const $e=v.mipmaps,qe=v.isVideoTexture!==!0,it=Z.__version===void 0||N===!0,J=F.dataReady,Xe=w(v,se);if(v.isDepthTexture)Le=M(v.format===fs,v.type),it&&(qe?n.texStorage2D(t.TEXTURE_2D,1,Le,se.width,se.height):n.texImage2D(t.TEXTURE_2D,0,Le,se.width,se.height,0,ge,Fe,null));else if(v.isDataTexture)if($e.length>0){qe&&it&&n.texStorage2D(t.TEXTURE_2D,Xe,Le,$e[0].width,$e[0].height);for(let fe=0,Re=$e.length;fe<Re;fe++)Ue=$e[fe],qe?J&&n.texSubImage2D(t.TEXTURE_2D,fe,0,0,Ue.width,Ue.height,ge,Fe,Ue.data):n.texImage2D(t.TEXTURE_2D,fe,Le,Ue.width,Ue.height,0,ge,Fe,Ue.data);v.generateMipmaps=!1}else qe?(it&&n.texStorage2D(t.TEXTURE_2D,Xe,Le,se.width,se.height),J&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,se.width,se.height,ge,Fe,se.data)):n.texImage2D(t.TEXTURE_2D,0,Le,se.width,se.height,0,ge,Fe,se.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){qe&&it&&n.texStorage3D(t.TEXTURE_2D_ARRAY,Xe,Le,$e[0].width,$e[0].height,se.depth);for(let fe=0,Re=$e.length;fe<Re;fe++)if(Ue=$e[fe],v.format!==Fn){if(ge!==null)if(qe){if(J)if(v.layerUpdates.size>0){const Ve=gh(Ue.width,Ue.height,v.format,v.type);for(const Be of v.layerUpdates){const dt=Ue.data.subarray(Be*Ve/Ue.data.BYTES_PER_ELEMENT,(Be+1)*Ve/Ue.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,fe,0,0,Be,Ue.width,Ue.height,1,ge,dt,0,0)}v.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,fe,0,0,0,Ue.width,Ue.height,se.depth,ge,Ue.data,0,0)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,fe,Le,Ue.width,Ue.height,se.depth,0,Ue.data,0,0)}else qe?J&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,fe,0,0,0,Ue.width,Ue.height,se.depth,ge,Fe,Ue.data):n.texImage3D(t.TEXTURE_2D_ARRAY,fe,Le,Ue.width,Ue.height,se.depth,0,ge,Fe,Ue.data)}else{qe&&it&&n.texStorage2D(t.TEXTURE_2D,Xe,Le,$e[0].width,$e[0].height);for(let fe=0,Re=$e.length;fe<Re;fe++)Ue=$e[fe],v.format!==Fn?ge!==null&&(qe?J&&n.compressedTexSubImage2D(t.TEXTURE_2D,fe,0,0,Ue.width,Ue.height,ge,Ue.data):n.compressedTexImage2D(t.TEXTURE_2D,fe,Le,Ue.width,Ue.height,0,Ue.data)):qe?J&&n.texSubImage2D(t.TEXTURE_2D,fe,0,0,Ue.width,Ue.height,ge,Fe,Ue.data):n.texImage2D(t.TEXTURE_2D,fe,Le,Ue.width,Ue.height,0,ge,Fe,Ue.data)}else if(v.isDataArrayTexture)if(qe){if(it&&n.texStorage3D(t.TEXTURE_2D_ARRAY,Xe,Le,se.width,se.height,se.depth),J)if(v.layerUpdates.size>0){const fe=gh(se.width,se.height,v.format,v.type);for(const Re of v.layerUpdates){const Ve=se.data.subarray(Re*fe/se.data.BYTES_PER_ELEMENT,(Re+1)*fe/se.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,Re,se.width,se.height,1,ge,Fe,Ve)}v.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,se.width,se.height,se.depth,ge,Fe,se.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,Le,se.width,se.height,se.depth,0,ge,Fe,se.data);else if(v.isData3DTexture)qe?(it&&n.texStorage3D(t.TEXTURE_3D,Xe,Le,se.width,se.height,se.depth),J&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,se.width,se.height,se.depth,ge,Fe,se.data)):n.texImage3D(t.TEXTURE_3D,0,Le,se.width,se.height,se.depth,0,ge,Fe,se.data);else if(v.isFramebufferTexture){if(it)if(qe)n.texStorage2D(t.TEXTURE_2D,Xe,Le,se.width,se.height);else{let fe=se.width,Re=se.height;for(let Ve=0;Ve<Xe;Ve++)n.texImage2D(t.TEXTURE_2D,Ve,Le,fe,Re,0,ge,Fe,null),fe>>=1,Re>>=1}}else if($e.length>0){if(qe&&it){const fe=ve($e[0]);n.texStorage2D(t.TEXTURE_2D,Xe,Le,fe.width,fe.height)}for(let fe=0,Re=$e.length;fe<Re;fe++)Ue=$e[fe],qe?J&&n.texSubImage2D(t.TEXTURE_2D,fe,0,0,ge,Fe,Ue):n.texImage2D(t.TEXTURE_2D,fe,Le,ge,Fe,Ue);v.generateMipmaps=!1}else if(qe){if(it){const fe=ve(se);n.texStorage2D(t.TEXTURE_2D,Xe,Le,fe.width,fe.height)}J&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,ge,Fe,se)}else n.texImage2D(t.TEXTURE_2D,0,Le,ge,Fe,se);g(v)&&h(P),Z.__version=F.version,v.onUpdate&&v.onUpdate(v)}_.__version=v.version}function Se(_,v,b){if(v.image.length!==6)return;const P=Ze(_,v),N=v.source;n.bindTexture(t.TEXTURE_CUBE_MAP,_.__webglTexture,t.TEXTURE0+b);const F=i.get(N);if(N.version!==F.__version||P===!0){n.activeTexture(t.TEXTURE0+b);const Z=xt.getPrimaries(xt.workingColorSpace),j=v.colorSpace===Gi?null:xt.getPrimaries(v.colorSpace),te=v.colorSpace===Gi||Z===j?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,v.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,v.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,te);const be=v.isCompressedTexture||v.image[0].isCompressedTexture,se=v.image[0]&&v.image[0].isDataTexture,ge=[];for(let Re=0;Re<6;Re++)!be&&!se?ge[Re]=y(v.image[Re],!0,r.maxCubemapSize):ge[Re]=se?v.image[Re].image:v.image[Re],ge[Re]=ye(v,ge[Re]);const Fe=ge[0],Le=s.convert(v.format,v.colorSpace),Ue=s.convert(v.type),$e=T(v.internalFormat,Le,Ue,v.colorSpace),qe=v.isVideoTexture!==!0,it=F.__version===void 0||P===!0,J=N.dataReady;let Xe=w(v,Fe);ke(t.TEXTURE_CUBE_MAP,v);let fe;if(be){qe&&it&&n.texStorage2D(t.TEXTURE_CUBE_MAP,Xe,$e,Fe.width,Fe.height);for(let Re=0;Re<6;Re++){fe=ge[Re].mipmaps;for(let Ve=0;Ve<fe.length;Ve++){const Be=fe[Ve];v.format!==Fn?Le!==null&&(qe?J&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Re,Ve,0,0,Be.width,Be.height,Le,Be.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Re,Ve,$e,Be.width,Be.height,0,Be.data)):qe?J&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Re,Ve,0,0,Be.width,Be.height,Le,Ue,Be.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Re,Ve,$e,Be.width,Be.height,0,Le,Ue,Be.data)}}}else{if(fe=v.mipmaps,qe&&it){fe.length>0&&Xe++;const Re=ve(ge[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,Xe,$e,Re.width,Re.height)}for(let Re=0;Re<6;Re++)if(se){qe?J&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Re,0,0,0,ge[Re].width,ge[Re].height,Le,Ue,ge[Re].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Re,0,$e,ge[Re].width,ge[Re].height,0,Le,Ue,ge[Re].data);for(let Ve=0;Ve<fe.length;Ve++){const dt=fe[Ve].image[Re].image;qe?J&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Re,Ve+1,0,0,dt.width,dt.height,Le,Ue,dt.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Re,Ve+1,$e,dt.width,dt.height,0,Le,Ue,dt.data)}}else{qe?J&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Re,0,0,0,Le,Ue,ge[Re]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Re,0,$e,Le,Ue,ge[Re]);for(let Ve=0;Ve<fe.length;Ve++){const Be=fe[Ve];qe?J&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Re,Ve+1,0,0,Le,Ue,Be.image[Re]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Re,Ve+1,$e,Le,Ue,Be.image[Re])}}}g(v)&&h(t.TEXTURE_CUBE_MAP),F.__version=N.version,v.onUpdate&&v.onUpdate(v)}_.__version=v.version}function Ce(_,v,b,P,N,F){const Z=s.convert(b.format,b.colorSpace),j=s.convert(b.type),te=T(b.internalFormat,Z,j,b.colorSpace);if(!i.get(v).__hasExternalTextures){const se=Math.max(1,v.width>>F),ge=Math.max(1,v.height>>F);N===t.TEXTURE_3D||N===t.TEXTURE_2D_ARRAY?n.texImage3D(N,F,te,se,ge,v.depth,0,Z,j,null):n.texImage2D(N,F,te,se,ge,0,Z,j,null)}n.bindFramebuffer(t.FRAMEBUFFER,_),pe(v)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,P,N,i.get(b).__webglTexture,0,W(v)):(N===t.TEXTURE_2D||N>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&N<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,P,N,i.get(b).__webglTexture,F),n.bindFramebuffer(t.FRAMEBUFFER,null)}function Oe(_,v,b){if(t.bindRenderbuffer(t.RENDERBUFFER,_),v.depthBuffer){const P=v.depthTexture,N=P&&P.isDepthTexture?P.type:null,F=M(v.stencilBuffer,N),Z=v.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,j=W(v);pe(v)?o.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,j,F,v.width,v.height):b?t.renderbufferStorageMultisample(t.RENDERBUFFER,j,F,v.width,v.height):t.renderbufferStorage(t.RENDERBUFFER,F,v.width,v.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,Z,t.RENDERBUFFER,_)}else{const P=v.textures;for(let N=0;N<P.length;N++){const F=P[N],Z=s.convert(F.format,F.colorSpace),j=s.convert(F.type),te=T(F.internalFormat,Z,j,F.colorSpace),be=W(v);b&&pe(v)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,be,te,v.width,v.height):pe(v)?o.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,be,te,v.width,v.height):t.renderbufferStorage(t.RENDERBUFFER,te,v.width,v.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function ee(_,v){if(v&&v.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,_),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(v.depthTexture).__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),ce(v.depthTexture,0);const P=i.get(v.depthTexture).__webglTexture,N=W(v);if(v.depthTexture.format===is)pe(v)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,P,0,N):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,P,0);else if(v.depthTexture.format===fs)pe(v)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,P,0,N):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,P,0);else throw new Error("Unknown depthTexture format")}function we(_){const v=i.get(_),b=_.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==_.depthTexture){const P=_.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),P){const N=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,P.removeEventListener("dispose",N)};P.addEventListener("dispose",N),v.__depthDisposeCallback=N}v.__boundDepthTexture=P}if(_.depthTexture&&!v.__autoAllocateDepthBuffer){if(b)throw new Error("target.depthTexture not supported in Cube render targets");ee(v.__webglFramebuffer,_)}else if(b){v.__webglDepthbuffer=[];for(let P=0;P<6;P++)if(n.bindFramebuffer(t.FRAMEBUFFER,v.__webglFramebuffer[P]),v.__webglDepthbuffer[P]===void 0)v.__webglDepthbuffer[P]=t.createRenderbuffer(),Oe(v.__webglDepthbuffer[P],_,!1);else{const N=_.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,F=v.__webglDepthbuffer[P];t.bindRenderbuffer(t.RENDERBUFFER,F),t.framebufferRenderbuffer(t.FRAMEBUFFER,N,t.RENDERBUFFER,F)}}else if(n.bindFramebuffer(t.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=t.createRenderbuffer(),Oe(v.__webglDepthbuffer,_,!1);else{const P=_.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,N=v.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,N),t.framebufferRenderbuffer(t.FRAMEBUFFER,P,t.RENDERBUFFER,N)}n.bindFramebuffer(t.FRAMEBUFFER,null)}function xe(_,v,b){const P=i.get(_);v!==void 0&&Ce(P.__webglFramebuffer,_,_.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),b!==void 0&&we(_)}function De(_){const v=_.texture,b=i.get(_),P=i.get(v);_.addEventListener("dispose",L);const N=_.textures,F=_.isWebGLCubeRenderTarget===!0,Z=N.length>1;if(Z||(P.__webglTexture===void 0&&(P.__webglTexture=t.createTexture()),P.__version=v.version,a.memory.textures++),F){b.__webglFramebuffer=[];for(let j=0;j<6;j++)if(v.mipmaps&&v.mipmaps.length>0){b.__webglFramebuffer[j]=[];for(let te=0;te<v.mipmaps.length;te++)b.__webglFramebuffer[j][te]=t.createFramebuffer()}else b.__webglFramebuffer[j]=t.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){b.__webglFramebuffer=[];for(let j=0;j<v.mipmaps.length;j++)b.__webglFramebuffer[j]=t.createFramebuffer()}else b.__webglFramebuffer=t.createFramebuffer();if(Z)for(let j=0,te=N.length;j<te;j++){const be=i.get(N[j]);be.__webglTexture===void 0&&(be.__webglTexture=t.createTexture(),a.memory.textures++)}if(_.samples>0&&pe(_)===!1){b.__webglMultisampledFramebuffer=t.createFramebuffer(),b.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,b.__webglMultisampledFramebuffer);for(let j=0;j<N.length;j++){const te=N[j];b.__webglColorRenderbuffer[j]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,b.__webglColorRenderbuffer[j]);const be=s.convert(te.format,te.colorSpace),se=s.convert(te.type),ge=T(te.internalFormat,be,se,te.colorSpace,_.isXRRenderTarget===!0),Fe=W(_);t.renderbufferStorageMultisample(t.RENDERBUFFER,Fe,ge,_.width,_.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+j,t.RENDERBUFFER,b.__webglColorRenderbuffer[j])}t.bindRenderbuffer(t.RENDERBUFFER,null),_.depthBuffer&&(b.__webglDepthRenderbuffer=t.createRenderbuffer(),Oe(b.__webglDepthRenderbuffer,_,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(F){n.bindTexture(t.TEXTURE_CUBE_MAP,P.__webglTexture),ke(t.TEXTURE_CUBE_MAP,v);for(let j=0;j<6;j++)if(v.mipmaps&&v.mipmaps.length>0)for(let te=0;te<v.mipmaps.length;te++)Ce(b.__webglFramebuffer[j][te],_,v,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+j,te);else Ce(b.__webglFramebuffer[j],_,v,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+j,0);g(v)&&h(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Z){for(let j=0,te=N.length;j<te;j++){const be=N[j],se=i.get(be);n.bindTexture(t.TEXTURE_2D,se.__webglTexture),ke(t.TEXTURE_2D,be),Ce(b.__webglFramebuffer,_,be,t.COLOR_ATTACHMENT0+j,t.TEXTURE_2D,0),g(be)&&h(t.TEXTURE_2D)}n.unbindTexture()}else{let j=t.TEXTURE_2D;if((_.isWebGL3DRenderTarget||_.isWebGLArrayRenderTarget)&&(j=_.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(j,P.__webglTexture),ke(j,v),v.mipmaps&&v.mipmaps.length>0)for(let te=0;te<v.mipmaps.length;te++)Ce(b.__webglFramebuffer[te],_,v,t.COLOR_ATTACHMENT0,j,te);else Ce(b.__webglFramebuffer,_,v,t.COLOR_ATTACHMENT0,j,0);g(v)&&h(j),n.unbindTexture()}_.depthBuffer&&we(_)}function je(_){const v=_.textures;for(let b=0,P=v.length;b<P;b++){const N=v[b];if(g(N)){const F=_.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:t.TEXTURE_2D,Z=i.get(N).__webglTexture;n.bindTexture(F,Z),h(F),n.unbindTexture()}}}const We=[],A=[];function H(_){if(_.samples>0){if(pe(_)===!1){const v=_.textures,b=_.width,P=_.height;let N=t.COLOR_BUFFER_BIT;const F=_.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,Z=i.get(_),j=v.length>1;if(j)for(let te=0;te<v.length;te++)n.bindFramebuffer(t.FRAMEBUFFER,Z.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+te,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,Z.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+te,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,Z.__webglMultisampledFramebuffer),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Z.__webglFramebuffer);for(let te=0;te<v.length;te++){if(_.resolveDepthBuffer&&(_.depthBuffer&&(N|=t.DEPTH_BUFFER_BIT),_.stencilBuffer&&_.resolveStencilBuffer&&(N|=t.STENCIL_BUFFER_BIT)),j){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,Z.__webglColorRenderbuffer[te]);const be=i.get(v[te]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,be,0)}t.blitFramebuffer(0,0,b,P,0,0,b,P,N,t.NEAREST),l===!0&&(We.length=0,A.length=0,We.push(t.COLOR_ATTACHMENT0+te),_.depthBuffer&&_.resolveDepthBuffer===!1&&(We.push(F),A.push(F),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,A)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,We))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),j)for(let te=0;te<v.length;te++){n.bindFramebuffer(t.FRAMEBUFFER,Z.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+te,t.RENDERBUFFER,Z.__webglColorRenderbuffer[te]);const be=i.get(v[te]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,Z.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+te,t.TEXTURE_2D,be,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Z.__webglMultisampledFramebuffer)}else if(_.depthBuffer&&_.resolveDepthBuffer===!1&&l){const v=_.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[v])}}}function W(_){return Math.min(r.maxSamples,_.samples)}function pe(_){const v=i.get(_);return _.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function oe(_){const v=a.render.frame;u.get(_)!==v&&(u.set(_,v),_.update())}function ye(_,v){const b=_.colorSpace,P=_.format,N=_.type;return _.isCompressedTexture===!0||_.isVideoTexture===!0||b!==tr&&b!==Gi&&xt.getTransfer(b),v}function ve(_){return typeof HTMLImageElement<"u"&&_ instanceof HTMLImageElement?(f.width=_.naturalWidth||_.width,f.height=_.naturalHeight||_.height):typeof VideoFrame<"u"&&_ instanceof VideoFrame?(f.width=_.displayWidth,f.height=_.displayHeight):(f.width=_.width,f.height=_.height),f}this.allocateTextureUnit=G,this.resetTextureUnits=R,this.setTexture2D=ce,this.setTexture2DArray=re,this.setTexture3D=ae,this.setTextureCube=me,this.rebindTextures=xe,this.setupRenderTarget=De,this.updateRenderTargetMipmap=je,this.updateMultisampleRenderTarget=H,this.setupDepthRenderbuffer=we,this.setupFrameBufferTexture=Ce,this.useMultisampledRTT=pe}function Sb(t,e){function n(i,r=Gi){let s;const a=xt.getTransfer(r);if(i===Mi)return t.UNSIGNED_BYTE;if(i===gu)return t.UNSIGNED_SHORT_4_4_4_4;if(i===vu)return t.UNSIGNED_SHORT_5_5_5_1;if(i===hp)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===up)return t.BYTE;if(i===fp)return t.SHORT;if(i===Qs)return t.UNSIGNED_SHORT;if(i===_u)return t.INT;if(i===Dr)return t.UNSIGNED_INT;if(i===gi)return t.FLOAT;if(i===sa)return t.HALF_FLOAT;if(i===dp)return t.ALPHA;if(i===pp)return t.RGB;if(i===Fn)return t.RGBA;if(i===mp)return t.LUMINANCE;if(i===_p)return t.LUMINANCE_ALPHA;if(i===is)return t.DEPTH_COMPONENT;if(i===fs)return t.DEPTH_STENCIL;if(i===gp)return t.RED;if(i===xu)return t.RED_INTEGER;if(i===vp)return t.RG;if(i===yu)return t.RG_INTEGER;if(i===Su)return t.RGBA_INTEGER;if(i===qa||i===Ya||i===$a||i===Ka)if(a===Ct)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===qa)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Ya)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===$a)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Ka)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===qa)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Ya)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===$a)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Ka)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===lc||i===cc||i===uc||i===fc)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===lc)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===cc)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===uc)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===fc)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===hc||i===dc||i===pc)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===hc||i===dc)return a===Ct?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===pc)return a===Ct?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===mc||i===_c||i===gc||i===vc||i===xc||i===yc||i===Sc||i===Mc||i===bc||i===Tc||i===Ec||i===wc||i===Ac||i===Cc)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===mc)return a===Ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===_c)return a===Ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===gc)return a===Ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===vc)return a===Ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===xc)return a===Ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===yc)return a===Ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Sc)return a===Ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Mc)return a===Ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===bc)return a===Ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Tc)return a===Ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Ec)return a===Ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===wc)return a===Ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Ac)return a===Ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Cc)return a===Ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Za||i===Rc||i===Pc)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===Za)return a===Ct?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Rc)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Pc)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===xp||i===Dc||i===Lc||i===Ic)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===Za)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Dc)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Lc)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Ic)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===us?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}class Mb extends Tn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Ba extends mn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const bb={type:"move"};class Al{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ba,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ba,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new _e,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new _e),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ba,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new _e,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new _e),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,a=null;const o=this._targetRay,l=this._grip,f=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(f&&e.hand){a=!0;for(const y of e.hand.values()){const g=n.getJointPose(y,i),h=this._getHandJoint(f,y);g!==null&&(h.matrix.fromArray(g.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=g.radius),h.visible=g!==null}const u=f.joints["index-finger-tip"],d=f.joints["thumb-tip"],c=u.position.distanceTo(d.position),m=.02,p=.005;f.inputState.pinching&&c>m+p?(f.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!f.inputState.pinching&&c<=m-p&&(f.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(bb)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),f!==null&&(f.visible=a!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new Ba;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}const Tb=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Eb=`
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

}`;class wb{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n,i){if(this.texture===null){const r=new Yt,s=e.properties.get(r);s.__webglTexture=n.texture,(n.depthNear!=i.depthNear||n.depthFar!=i.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new Qn({vertexShader:Tb,fragmentShader:Eb,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new An(new gs(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Ab extends _s{constructor(e,n){super();const i=this;let r=null,s=1,a=null,o="local-floor",l=1,f=null,u=null,d=null,c=null,m=null,p=null;const y=new wb,g=n.getContextAttributes();let h=null,T=null;const M=[],w=[],V=new yt;let L=null;const z=new Tn;z.layers.enable(1),z.viewport=new Ot;const X=new Tn;X.layers.enable(2),X.viewport=new Ot;const $=[z,X],E=new Mb;E.layers.enable(1),E.layers.enable(2);let R=null,G=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Se){let Ce=M[Se];return Ce===void 0&&(Ce=new Al,M[Se]=Ce),Ce.getTargetRaySpace()},this.getControllerGrip=function(Se){let Ce=M[Se];return Ce===void 0&&(Ce=new Al,M[Se]=Ce),Ce.getGripSpace()},this.getHand=function(Se){let Ce=M[Se];return Ce===void 0&&(Ce=new Al,M[Se]=Ce),Ce.getHandSpace()};function q(Se){const Ce=w.indexOf(Se.inputSource);if(Ce===-1)return;const Oe=M[Ce];Oe!==void 0&&(Oe.update(Se.inputSource,Se.frame,f||a),Oe.dispatchEvent({type:Se.type,data:Se.inputSource}))}function ce(){r.removeEventListener("select",q),r.removeEventListener("selectstart",q),r.removeEventListener("selectend",q),r.removeEventListener("squeeze",q),r.removeEventListener("squeezestart",q),r.removeEventListener("squeezeend",q),r.removeEventListener("end",ce),r.removeEventListener("inputsourceschange",re);for(let Se=0;Se<M.length;Se++){const Ce=w[Se];Ce!==null&&(w[Se]=null,M[Se].disconnect(Ce))}R=null,G=null,y.reset(),e.setRenderTarget(h),m=null,c=null,d=null,r=null,T=null,nt.stop(),i.isPresenting=!1,e.setPixelRatio(L),e.setSize(V.width,V.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Se){s=Se,i.isPresenting},this.setReferenceSpaceType=function(Se){o=Se,i.isPresenting},this.getReferenceSpace=function(){return f||a},this.setReferenceSpace=function(Se){f=Se},this.getBaseLayer=function(){return c!==null?c:m},this.getBinding=function(){return d},this.getFrame=function(){return p},this.getSession=function(){return r},this.setSession=async function(Se){if(r=Se,r!==null){if(h=e.getRenderTarget(),r.addEventListener("select",q),r.addEventListener("selectstart",q),r.addEventListener("selectend",q),r.addEventListener("squeeze",q),r.addEventListener("squeezestart",q),r.addEventListener("squeezeend",q),r.addEventListener("end",ce),r.addEventListener("inputsourceschange",re),g.xrCompatible!==!0&&await n.makeXRCompatible(),L=e.getPixelRatio(),e.getSize(V),r.renderState.layers===void 0){const Ce={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(r,n,Ce),r.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),T=new Lr(m.framebufferWidth,m.framebufferHeight,{format:Fn,type:Mi,colorSpace:e.outputColorSpace,stencilBuffer:g.stencil})}else{let Ce=null,Oe=null,ee=null;g.depth&&(ee=g.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,Ce=g.stencil?fs:is,Oe=g.stencil?us:Dr);const we={colorFormat:n.RGBA8,depthFormat:ee,scaleFactor:s};d=new XRWebGLBinding(r,n),c=d.createProjectionLayer(we),r.updateRenderState({layers:[c]}),e.setPixelRatio(1),e.setSize(c.textureWidth,c.textureHeight,!1),T=new Lr(c.textureWidth,c.textureHeight,{format:Fn,type:Mi,depthTexture:new Up(c.textureWidth,c.textureHeight,Oe,void 0,void 0,void 0,void 0,void 0,void 0,Ce),stencilBuffer:g.stencil,colorSpace:e.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:c.ignoreDepthValues===!1})}T.isXRRenderTarget=!0,this.setFoveation(l),f=null,a=await r.requestReferenceSpace(o),nt.setContext(r),nt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function re(Se){for(let Ce=0;Ce<Se.removed.length;Ce++){const Oe=Se.removed[Ce],ee=w.indexOf(Oe);ee>=0&&(w[ee]=null,M[ee].disconnect(Oe))}for(let Ce=0;Ce<Se.added.length;Ce++){const Oe=Se.added[Ce];let ee=w.indexOf(Oe);if(ee===-1){for(let xe=0;xe<M.length;xe++)if(xe>=w.length){w.push(Oe),ee=xe;break}else if(w[xe]===null){w[xe]=Oe,ee=xe;break}if(ee===-1)break}const we=M[ee];we&&we.connect(Oe)}}const ae=new _e,me=new _e;function ne(Se,Ce,Oe){ae.setFromMatrixPosition(Ce.matrixWorld),me.setFromMatrixPosition(Oe.matrixWorld);const ee=ae.distanceTo(me),we=Ce.projectionMatrix.elements,xe=Oe.projectionMatrix.elements,De=we[14]/(we[10]-1),je=we[14]/(we[10]+1),We=(we[9]+1)/we[5],A=(we[9]-1)/we[5],H=(we[8]-1)/we[0],W=(xe[8]+1)/xe[0],pe=De*H,oe=De*W,ye=ee/(-H+W),ve=ye*-H;if(Ce.matrixWorld.decompose(Se.position,Se.quaternion,Se.scale),Se.translateX(ve),Se.translateZ(ye),Se.matrixWorld.compose(Se.position,Se.quaternion,Se.scale),Se.matrixWorldInverse.copy(Se.matrixWorld).invert(),we[10]===-1)Se.projectionMatrix.copy(Ce.projectionMatrix),Se.projectionMatrixInverse.copy(Ce.projectionMatrixInverse);else{const _=De+ye,v=je+ye,b=pe-ve,P=oe+(ee-ve),N=We*je/v*_,F=A*je/v*_;Se.projectionMatrix.makePerspective(b,P,N,F,_,v),Se.projectionMatrixInverse.copy(Se.projectionMatrix).invert()}}function Ne(Se,Ce){Ce===null?Se.matrixWorld.copy(Se.matrix):Se.matrixWorld.multiplyMatrices(Ce.matrixWorld,Se.matrix),Se.matrixWorldInverse.copy(Se.matrixWorld).invert()}this.updateCamera=function(Se){if(r===null)return;let Ce=Se.near,Oe=Se.far;y.texture!==null&&(y.depthNear>0&&(Ce=y.depthNear),y.depthFar>0&&(Oe=y.depthFar)),E.near=X.near=z.near=Ce,E.far=X.far=z.far=Oe,(R!==E.near||G!==E.far)&&(r.updateRenderState({depthNear:E.near,depthFar:E.far}),R=E.near,G=E.far);const ee=Se.parent,we=E.cameras;Ne(E,ee);for(let xe=0;xe<we.length;xe++)Ne(we[xe],ee);we.length===2?ne(E,z,X):E.projectionMatrix.copy(z.projectionMatrix),ze(Se,E,ee)};function ze(Se,Ce,Oe){Oe===null?Se.matrix.copy(Ce.matrixWorld):(Se.matrix.copy(Oe.matrixWorld),Se.matrix.invert(),Se.matrix.multiply(Ce.matrixWorld)),Se.matrix.decompose(Se.position,Se.quaternion,Se.scale),Se.updateMatrixWorld(!0),Se.projectionMatrix.copy(Ce.projectionMatrix),Se.projectionMatrixInverse.copy(Ce.projectionMatrixInverse),Se.isPerspectiveCamera&&(Se.fov=Uc*2*Math.atan(1/Se.projectionMatrix.elements[5]),Se.zoom=1)}this.getCamera=function(){return E},this.getFoveation=function(){if(!(c===null&&m===null))return l},this.setFoveation=function(Se){l=Se,c!==null&&(c.fixedFoveation=Se),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=Se)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(E)};let ke=null;function Ze(Se,Ce){if(u=Ce.getViewerPose(f||a),p=Ce,u!==null){const Oe=u.views;m!==null&&(e.setRenderTargetFramebuffer(T,m.framebuffer),e.setRenderTarget(T));let ee=!1;Oe.length!==E.cameras.length&&(E.cameras.length=0,ee=!0);for(let xe=0;xe<Oe.length;xe++){const De=Oe[xe];let je=null;if(m!==null)je=m.getViewport(De);else{const A=d.getViewSubImage(c,De);je=A.viewport,xe===0&&(e.setRenderTargetTextures(T,A.colorTexture,c.ignoreDepthValues?void 0:A.depthStencilTexture),e.setRenderTarget(T))}let We=$[xe];We===void 0&&(We=new Tn,We.layers.enable(xe),We.viewport=new Ot,$[xe]=We),We.matrix.fromArray(De.transform.matrix),We.matrix.decompose(We.position,We.quaternion,We.scale),We.projectionMatrix.fromArray(De.projectionMatrix),We.projectionMatrixInverse.copy(We.projectionMatrix).invert(),We.viewport.set(je.x,je.y,je.width,je.height),xe===0&&(E.matrix.copy(We.matrix),E.matrix.decompose(E.position,E.quaternion,E.scale)),ee===!0&&E.cameras.push(We)}const we=r.enabledFeatures;if(we&&we.includes("depth-sensing")){const xe=d.getDepthInformation(Oe[0]);xe&&xe.isValid&&xe.texture&&y.init(e,xe,r.renderState)}}for(let Oe=0;Oe<M.length;Oe++){const ee=w[Oe],we=M[Oe];ee!==null&&we!==void 0&&we.update(ee,Ce,f||a)}ke&&ke(Se,Ce),Ce.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:Ce}),p=null}const nt=new Lp;nt.setAnimationLoop(Ze),this.setAnimationLoop=function(Se){ke=Se},this.dispose=function(){}}}const pr=new bi,Cb=new Ft;function Rb(t,e){function n(g,h){g.matrixAutoUpdate===!0&&g.updateMatrix(),h.value.copy(g.matrix)}function i(g,h){h.color.getRGB(g.fogColor.value,Cp(t)),h.isFog?(g.fogNear.value=h.near,g.fogFar.value=h.far):h.isFogExp2&&(g.fogDensity.value=h.density)}function r(g,h,T,M,w){h.isMeshBasicMaterial||h.isMeshLambertMaterial?s(g,h):h.isMeshToonMaterial?(s(g,h),d(g,h)):h.isMeshPhongMaterial?(s(g,h),u(g,h)):h.isMeshStandardMaterial?(s(g,h),c(g,h),h.isMeshPhysicalMaterial&&m(g,h,w)):h.isMeshMatcapMaterial?(s(g,h),p(g,h)):h.isMeshDepthMaterial?s(g,h):h.isMeshDistanceMaterial?(s(g,h),y(g,h)):h.isMeshNormalMaterial?s(g,h):h.isLineBasicMaterial?(a(g,h),h.isLineDashedMaterial&&o(g,h)):h.isPointsMaterial?l(g,h,T,M):h.isSpriteMaterial?f(g,h):h.isShadowMaterial?(g.color.value.copy(h.color),g.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function s(g,h){g.opacity.value=h.opacity,h.color&&g.diffuse.value.copy(h.color),h.emissive&&g.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(g.map.value=h.map,n(h.map,g.mapTransform)),h.alphaMap&&(g.alphaMap.value=h.alphaMap,n(h.alphaMap,g.alphaMapTransform)),h.bumpMap&&(g.bumpMap.value=h.bumpMap,n(h.bumpMap,g.bumpMapTransform),g.bumpScale.value=h.bumpScale,h.side===pn&&(g.bumpScale.value*=-1)),h.normalMap&&(g.normalMap.value=h.normalMap,n(h.normalMap,g.normalMapTransform),g.normalScale.value.copy(h.normalScale),h.side===pn&&g.normalScale.value.negate()),h.displacementMap&&(g.displacementMap.value=h.displacementMap,n(h.displacementMap,g.displacementMapTransform),g.displacementScale.value=h.displacementScale,g.displacementBias.value=h.displacementBias),h.emissiveMap&&(g.emissiveMap.value=h.emissiveMap,n(h.emissiveMap,g.emissiveMapTransform)),h.specularMap&&(g.specularMap.value=h.specularMap,n(h.specularMap,g.specularMapTransform)),h.alphaTest>0&&(g.alphaTest.value=h.alphaTest);const T=e.get(h),M=T.envMap,w=T.envMapRotation;M&&(g.envMap.value=M,pr.copy(w),pr.x*=-1,pr.y*=-1,pr.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(pr.y*=-1,pr.z*=-1),g.envMapRotation.value.setFromMatrix4(Cb.makeRotationFromEuler(pr)),g.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=h.reflectivity,g.ior.value=h.ior,g.refractionRatio.value=h.refractionRatio),h.lightMap&&(g.lightMap.value=h.lightMap,g.lightMapIntensity.value=h.lightMapIntensity,n(h.lightMap,g.lightMapTransform)),h.aoMap&&(g.aoMap.value=h.aoMap,g.aoMapIntensity.value=h.aoMapIntensity,n(h.aoMap,g.aoMapTransform))}function a(g,h){g.diffuse.value.copy(h.color),g.opacity.value=h.opacity,h.map&&(g.map.value=h.map,n(h.map,g.mapTransform))}function o(g,h){g.dashSize.value=h.dashSize,g.totalSize.value=h.dashSize+h.gapSize,g.scale.value=h.scale}function l(g,h,T,M){g.diffuse.value.copy(h.color),g.opacity.value=h.opacity,g.size.value=h.size*T,g.scale.value=M*.5,h.map&&(g.map.value=h.map,n(h.map,g.uvTransform)),h.alphaMap&&(g.alphaMap.value=h.alphaMap,n(h.alphaMap,g.alphaMapTransform)),h.alphaTest>0&&(g.alphaTest.value=h.alphaTest)}function f(g,h){g.diffuse.value.copy(h.color),g.opacity.value=h.opacity,g.rotation.value=h.rotation,h.map&&(g.map.value=h.map,n(h.map,g.mapTransform)),h.alphaMap&&(g.alphaMap.value=h.alphaMap,n(h.alphaMap,g.alphaMapTransform)),h.alphaTest>0&&(g.alphaTest.value=h.alphaTest)}function u(g,h){g.specular.value.copy(h.specular),g.shininess.value=Math.max(h.shininess,1e-4)}function d(g,h){h.gradientMap&&(g.gradientMap.value=h.gradientMap)}function c(g,h){g.metalness.value=h.metalness,h.metalnessMap&&(g.metalnessMap.value=h.metalnessMap,n(h.metalnessMap,g.metalnessMapTransform)),g.roughness.value=h.roughness,h.roughnessMap&&(g.roughnessMap.value=h.roughnessMap,n(h.roughnessMap,g.roughnessMapTransform)),h.envMap&&(g.envMapIntensity.value=h.envMapIntensity)}function m(g,h,T){g.ior.value=h.ior,h.sheen>0&&(g.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),g.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(g.sheenColorMap.value=h.sheenColorMap,n(h.sheenColorMap,g.sheenColorMapTransform)),h.sheenRoughnessMap&&(g.sheenRoughnessMap.value=h.sheenRoughnessMap,n(h.sheenRoughnessMap,g.sheenRoughnessMapTransform))),h.clearcoat>0&&(g.clearcoat.value=h.clearcoat,g.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(g.clearcoatMap.value=h.clearcoatMap,n(h.clearcoatMap,g.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,n(h.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(g.clearcoatNormalMap.value=h.clearcoatNormalMap,n(h.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===pn&&g.clearcoatNormalScale.value.negate())),h.dispersion>0&&(g.dispersion.value=h.dispersion),h.iridescence>0&&(g.iridescence.value=h.iridescence,g.iridescenceIOR.value=h.iridescenceIOR,g.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(g.iridescenceMap.value=h.iridescenceMap,n(h.iridescenceMap,g.iridescenceMapTransform)),h.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=h.iridescenceThicknessMap,n(h.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),h.transmission>0&&(g.transmission.value=h.transmission,g.transmissionSamplerMap.value=T.texture,g.transmissionSamplerSize.value.set(T.width,T.height),h.transmissionMap&&(g.transmissionMap.value=h.transmissionMap,n(h.transmissionMap,g.transmissionMapTransform)),g.thickness.value=h.thickness,h.thicknessMap&&(g.thicknessMap.value=h.thicknessMap,n(h.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=h.attenuationDistance,g.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(g.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(g.anisotropyMap.value=h.anisotropyMap,n(h.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=h.specularIntensity,g.specularColor.value.copy(h.specularColor),h.specularColorMap&&(g.specularColorMap.value=h.specularColorMap,n(h.specularColorMap,g.specularColorMapTransform)),h.specularIntensityMap&&(g.specularIntensityMap.value=h.specularIntensityMap,n(h.specularIntensityMap,g.specularIntensityMapTransform))}function p(g,h){h.matcap&&(g.matcap.value=h.matcap)}function y(g,h){const T=e.get(h).light;g.referencePosition.value.setFromMatrixPosition(T.matrixWorld),g.nearDistance.value=T.shadow.camera.near,g.farDistance.value=T.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function Pb(t,e,n,i){let r={},s={},a=[];const o=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(T,M){const w=M.program;i.uniformBlockBinding(T,w)}function f(T,M){let w=r[T.id];w===void 0&&(p(T),w=u(T),r[T.id]=w,T.addEventListener("dispose",g));const V=M.program;i.updateUBOMapping(T,V);const L=e.render.frame;s[T.id]!==L&&(c(T),s[T.id]=L)}function u(T){const M=d();T.__bindingPointIndex=M;const w=t.createBuffer(),V=T.__size,L=T.usage;return t.bindBuffer(t.UNIFORM_BUFFER,w),t.bufferData(t.UNIFORM_BUFFER,V,L),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,M,w),w}function d(){for(let T=0;T<o;T++)if(a.indexOf(T)===-1)return a.push(T),T;return 0}function c(T){const M=r[T.id],w=T.uniforms,V=T.__cache;t.bindBuffer(t.UNIFORM_BUFFER,M);for(let L=0,z=w.length;L<z;L++){const X=Array.isArray(w[L])?w[L]:[w[L]];for(let $=0,E=X.length;$<E;$++){const R=X[$];if(m(R,L,$,V)===!0){const G=R.__offset,q=Array.isArray(R.value)?R.value:[R.value];let ce=0;for(let re=0;re<q.length;re++){const ae=q[re],me=y(ae);typeof ae=="number"||typeof ae=="boolean"?(R.__data[0]=ae,t.bufferSubData(t.UNIFORM_BUFFER,G+ce,R.__data)):ae.isMatrix3?(R.__data[0]=ae.elements[0],R.__data[1]=ae.elements[1],R.__data[2]=ae.elements[2],R.__data[3]=0,R.__data[4]=ae.elements[3],R.__data[5]=ae.elements[4],R.__data[6]=ae.elements[5],R.__data[7]=0,R.__data[8]=ae.elements[6],R.__data[9]=ae.elements[7],R.__data[10]=ae.elements[8],R.__data[11]=0):(ae.toArray(R.__data,ce),ce+=me.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,G,R.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function m(T,M,w,V){const L=T.value,z=M+"_"+w;if(V[z]===void 0)return typeof L=="number"||typeof L=="boolean"?V[z]=L:V[z]=L.clone(),!0;{const X=V[z];if(typeof L=="number"||typeof L=="boolean"){if(X!==L)return V[z]=L,!0}else if(X.equals(L)===!1)return X.copy(L),!0}return!1}function p(T){const M=T.uniforms;let w=0;const V=16;for(let z=0,X=M.length;z<X;z++){const $=Array.isArray(M[z])?M[z]:[M[z]];for(let E=0,R=$.length;E<R;E++){const G=$[E],q=Array.isArray(G.value)?G.value:[G.value];for(let ce=0,re=q.length;ce<re;ce++){const ae=q[ce],me=y(ae),ne=w%V,Ne=ne%me.boundary,ze=ne+Ne;w+=Ne,ze!==0&&V-ze<me.storage&&(w+=V-ze),G.__data=new Float32Array(me.storage/Float32Array.BYTES_PER_ELEMENT),G.__offset=w,w+=me.storage}}}const L=w%V;return L>0&&(w+=V-L),T.__size=w,T.__cache={},this}function y(T){const M={boundary:0,storage:0};return typeof T=="number"||typeof T=="boolean"?(M.boundary=4,M.storage=4):T.isVector2?(M.boundary=8,M.storage=8):T.isVector3||T.isColor?(M.boundary=16,M.storage=12):T.isVector4?(M.boundary=16,M.storage=16):T.isMatrix3?(M.boundary=48,M.storage=48):T.isMatrix4?(M.boundary=64,M.storage=64):T.isTexture,M}function g(T){const M=T.target;M.removeEventListener("dispose",g);const w=a.indexOf(M.__bindingPointIndex);a.splice(w,1),t.deleteBuffer(r[M.id]),delete r[M.id],delete s[M.id]}function h(){for(const T in r)t.deleteBuffer(r[T]);a=[],r={},s={}}return{bind:l,update:f,dispose:h}}class zp{constructor(e={}){const{canvas:n=vv(),context:i=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:f=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1}=e;this.isWebGLRenderer=!0;let c;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");c=i.getContextAttributes().alpha}else c=a;const m=new Uint32Array(4),p=new Int32Array(4);let y=null,g=null;const h=[],T=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Wn,this.toneMapping=$i,this.toneMappingExposure=1;const M=this;let w=!1,V=0,L=0,z=null,X=-1,$=null;const E=new Ot,R=new Ot;let G=null;const q=new Mt(0);let ce=0,re=n.width,ae=n.height,me=1,ne=null,Ne=null;const ze=new Ot(0,0,re,ae),ke=new Ot(0,0,re,ae);let Ze=!1;const nt=new Dp;let Se=!1,Ce=!1;const Oe=new Ft,ee=new Ft,we=new _e,xe=new Ot,De={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let je=!1;function We(){return z===null?me:1}let A=i;function H(O,ie){return n.getContext(O,ie)}try{const O={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:f,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${mu}`),n.addEventListener("webglcontextlost",Re,!1),n.addEventListener("webglcontextrestored",Ve,!1),n.addEventListener("webglcontextcreationerror",Be,!1),A===null){const ie="webgl2";if(A=H(ie,O),A===null)throw H(ie)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(O){throw O}let W,pe,oe,ye,ve,_,v,b,P,N,F,Z,j,te,be,se,ge,Fe,Le,Ue,$e,qe,it,J;function Xe(){W=new OS(A),W.init(),qe=new Sb(A,W),pe=new PS(A,W,e,qe),oe=new vb(A),pe.reverseDepthBuffer&&oe.buffers.depth.setReversed(!0),ye=new zS(A),ve=new ib,_=new yb(A,W,oe,ve,pe,qe,ye),v=new LS(M),b=new NS(M),P=new jv(A),it=new CS(A,P),N=new FS(A,P,ye,it),F=new HS(A,N,P,ye),Le=new kS(A,pe,_),se=new DS(ve),Z=new nb(M,v,b,W,pe,it,se),j=new Rb(M,ve),te=new sb,be=new fb(W),Fe=new AS(M,v,b,oe,F,c,l),ge=new _b(M,F,pe),J=new Pb(A,ye,pe,oe),Ue=new RS(A,W,ye),$e=new BS(A,W,ye),ye.programs=Z.programs,M.capabilities=pe,M.extensions=W,M.properties=ve,M.renderLists=te,M.shadowMap=ge,M.state=oe,M.info=ye}Xe();const fe=new Ab(M,A);this.xr=fe,this.getContext=function(){return A},this.getContextAttributes=function(){return A.getContextAttributes()},this.forceContextLoss=function(){const O=W.get("WEBGL_lose_context");O&&O.loseContext()},this.forceContextRestore=function(){const O=W.get("WEBGL_lose_context");O&&O.restoreContext()},this.getPixelRatio=function(){return me},this.setPixelRatio=function(O){O!==void 0&&(me=O,this.setSize(re,ae,!1))},this.getSize=function(O){return O.set(re,ae)},this.setSize=function(O,ie,he=!0){fe.isPresenting||(re=O,ae=ie,n.width=Math.floor(O*me),n.height=Math.floor(ie*me),he===!0&&(n.style.width=O+"px",n.style.height=ie+"px"),this.setViewport(0,0,O,ie))},this.getDrawingBufferSize=function(O){return O.set(re*me,ae*me).floor()},this.setDrawingBufferSize=function(O,ie,he){re=O,ae=ie,me=he,n.width=Math.floor(O*he),n.height=Math.floor(ie*he),this.setViewport(0,0,O,ie)},this.getCurrentViewport=function(O){return O.copy(E)},this.getViewport=function(O){return O.copy(ze)},this.setViewport=function(O,ie,he,de){O.isVector4?ze.set(O.x,O.y,O.z,O.w):ze.set(O,ie,he,de),oe.viewport(E.copy(ze).multiplyScalar(me).round())},this.getScissor=function(O){return O.copy(ke)},this.setScissor=function(O,ie,he,de){O.isVector4?ke.set(O.x,O.y,O.z,O.w):ke.set(O,ie,he,de),oe.scissor(R.copy(ke).multiplyScalar(me).round())},this.getScissorTest=function(){return Ze},this.setScissorTest=function(O){oe.setScissorTest(Ze=O)},this.setOpaqueSort=function(O){ne=O},this.setTransparentSort=function(O){Ne=O},this.getClearColor=function(O){return O.copy(Fe.getClearColor())},this.setClearColor=function(){Fe.setClearColor.apply(Fe,arguments)},this.getClearAlpha=function(){return Fe.getClearAlpha()},this.setClearAlpha=function(){Fe.setClearAlpha.apply(Fe,arguments)},this.clear=function(O=!0,ie=!0,he=!0){let de=0;if(O){let x=!1;if(z!==null){const S=z.texture.format;x=S===Su||S===yu||S===xu}if(x){const S=z.texture.type,D=S===Mi||S===Dr||S===Qs||S===us||S===gu||S===vu,I=Fe.getClearColor(),C=Fe.getClearAlpha(),k=I.r,U=I.g,B=I.b;D?(m[0]=k,m[1]=U,m[2]=B,m[3]=C,A.clearBufferuiv(A.COLOR,0,m)):(p[0]=k,p[1]=U,p[2]=B,p[3]=C,A.clearBufferiv(A.COLOR,0,p))}else de|=A.COLOR_BUFFER_BIT}ie&&(de|=A.DEPTH_BUFFER_BIT,A.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),he&&(de|=A.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),A.clear(de)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",Re,!1),n.removeEventListener("webglcontextrestored",Ve,!1),n.removeEventListener("webglcontextcreationerror",Be,!1),te.dispose(),be.dispose(),ve.dispose(),v.dispose(),b.dispose(),F.dispose(),it.dispose(),J.dispose(),Z.dispose(),fe.dispose(),fe.removeEventListener("sessionstart",xs),fe.removeEventListener("sessionend",ei),ti.stop()};function Re(O){O.preventDefault(),w=!0}function Ve(){w=!1;const O=ye.autoReset,ie=ge.enabled,he=ge.autoUpdate,de=ge.needsUpdate,x=ge.type;Xe(),ye.autoReset=O,ge.enabled=ie,ge.autoUpdate=he,ge.needsUpdate=de,ge.type=x}function Be(O){}function dt(O){const ie=O.target;ie.removeEventListener("dispose",dt),Tt(ie)}function Tt(O){Et(O),ve.remove(O)}function Et(O){const ie=ve.get(O).programs;ie!==void 0&&(ie.forEach(function(he){Z.releaseProgram(he)}),O.isShaderMaterial&&Z.releaseShaderCache(O))}this.renderBufferDirect=function(O,ie,he,de,x,S){ie===null&&(ie=De);const D=x.isMesh&&x.matrixWorld.determinant()<0,I=Fo(O,ie,he,de,x);oe.setMaterial(de,D);let C=he.index,k=1;if(de.wireframe===!0){if(C=N.getWireframeAttribute(he),C===void 0)return;k=2}const U=he.drawRange,B=he.attributes.position;let Y=U.start*k,le=(U.start+U.count)*k;S!==null&&(Y=Math.max(Y,S.start*k),le=Math.min(le,(S.start+S.count)*k)),C!==null?(Y=Math.max(Y,0),le=Math.min(le,C.count)):B!=null&&(Y=Math.max(Y,0),le=Math.min(le,B.count));const Q=le-Y;if(Q<0||Q===1/0)return;it.setup(x,de,I,he,C);let Me,ue=Ue;if(C!==null&&(Me=P.get(C),ue=$e,ue.setIndex(Me)),x.isMesh)de.wireframe===!0?(oe.setLineWidth(de.wireframeLinewidth*We()),ue.setMode(A.LINES)):ue.setMode(A.TRIANGLES);else if(x.isLine){let K=de.linewidth;K===void 0&&(K=1),oe.setLineWidth(K*We()),x.isLineSegments?ue.setMode(A.LINES):x.isLineLoop?ue.setMode(A.LINE_LOOP):ue.setMode(A.LINE_STRIP)}else x.isPoints?ue.setMode(A.POINTS):x.isSprite&&ue.setMode(A.TRIANGLES);if(x.isBatchedMesh)if(x._multiDrawInstances!==null)ue.renderMultiDrawInstances(x._multiDrawStarts,x._multiDrawCounts,x._multiDrawCount,x._multiDrawInstances);else if(W.get("WEBGL_multi_draw"))ue.renderMultiDraw(x._multiDrawStarts,x._multiDrawCounts,x._multiDrawCount);else{const K=x._multiDrawStarts,Ie=x._multiDrawCounts,Pe=x._multiDrawCount,Te=C?P.get(C).bytesPerElement:1,Ee=ve.get(de).currentProgram.getUniforms();for(let Ae=0;Ae<Pe;Ae++)Ee.setValue(A,"_gl_DrawID",Ae),ue.render(K[Ae]/Te,Ie[Ae])}else if(x.isInstancedMesh)ue.renderInstances(Y,Q,x.count);else if(he.isInstancedBufferGeometry){const K=he._maxInstanceCount!==void 0?he._maxInstanceCount:1/0,Ie=Math.min(he.instanceCount,K);ue.renderInstances(Y,Q,Ie)}else ue.render(Y,Q)};function pt(O,ie,he){O.transparent===!0&&O.side===mi&&O.forceSinglePass===!1?(O.side=pn,O.needsUpdate=!0,wi(O,ie,he),O.side=Zi,O.needsUpdate=!0,wi(O,ie,he),O.side=mi):wi(O,ie,he)}this.compile=function(O,ie,he=null){he===null&&(he=O),g=be.get(he),g.init(ie),T.push(g),he.traverseVisible(function(x){x.isLight&&x.layers.test(ie.layers)&&(g.pushLight(x),x.castShadow&&g.pushShadow(x))}),O!==he&&O.traverseVisible(function(x){x.isLight&&x.layers.test(ie.layers)&&(g.pushLight(x),x.castShadow&&g.pushShadow(x))}),g.setupLights();const de=new Set;return O.traverse(function(x){if(!(x.isMesh||x.isPoints||x.isLine||x.isSprite))return;const S=x.material;if(S)if(Array.isArray(S))for(let D=0;D<S.length;D++){const I=S[D];pt(I,he,x),de.add(I)}else pt(S,he,x),de.add(S)}),T.pop(),g=null,de},this.compileAsync=function(O,ie,he=null){const de=this.compile(O,ie,he);return new Promise(x=>{function S(){if(de.forEach(function(D){ve.get(D).currentProgram.isReady()&&de.delete(D)}),de.size===0){x(O);return}setTimeout(S,10)}W.get("KHR_parallel_shader_compile")!==null?S():setTimeout(S,10)})};let $t=null;function Gt(O){$t&&$t(O)}function xs(){ti.stop()}function ei(){ti.start()}const ti=new Lp;ti.setAnimationLoop(Gt),typeof self<"u"&&ti.setContext(self),this.setAnimationLoop=function(O){$t=O,fe.setAnimationLoop(O),O===null?ti.stop():ti.start()},fe.addEventListener("sessionstart",xs),fe.addEventListener("sessionend",ei),this.render=function(O,ie){if(ie!==void 0&&ie.isCamera!==!0||w===!0)return;if(O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),ie.parent===null&&ie.matrixWorldAutoUpdate===!0&&ie.updateMatrixWorld(),fe.enabled===!0&&fe.isPresenting===!0&&(fe.cameraAutoUpdate===!0&&fe.updateCamera(ie),ie=fe.getCamera()),O.isScene===!0&&O.onBeforeRender(M,O,ie,z),g=be.get(O,T.length),g.init(ie),T.push(g),ee.multiplyMatrices(ie.projectionMatrix,ie.matrixWorldInverse),nt.setFromProjectionMatrix(ee),Ce=this.localClippingEnabled,Se=se.init(this.clippingPlanes,Ce),y=te.get(O,h.length),y.init(),h.push(y),fe.enabled===!0&&fe.isPresenting===!0){const S=M.xr.getDepthSensingMesh();S!==null&&ir(S,ie,-1/0,M.sortObjects)}ir(O,ie,0,M.sortObjects),y.finish(),M.sortObjects===!0&&y.sort(ne,Ne),je=fe.enabled===!1||fe.isPresenting===!1||fe.hasDepthSensing()===!1,je&&Fe.addToRenderList(y,O),this.info.render.frame++,Se===!0&&se.beginShadows();const he=g.state.shadowsArray;ge.render(he,O,ie),Se===!0&&se.endShadows(),this.info.autoReset===!0&&this.info.reset();const de=y.opaque,x=y.transmissive;if(g.setupLights(),ie.isArrayCamera){const S=ie.cameras;if(x.length>0)for(let D=0,I=S.length;D<I;D++){const C=S[D];fa(de,x,O,C)}je&&Fe.render(O);for(let D=0,I=S.length;D<I;D++){const C=S[D];ys(y,O,C,C.viewport)}}else x.length>0&&fa(de,x,O,ie),je&&Fe.render(O),ys(y,O,ie);z!==null&&(_.updateMultisampleRenderTarget(z),_.updateRenderTargetMipmap(z)),O.isScene===!0&&O.onAfterRender(M,O,ie),it.resetDefaultState(),X=-1,$=null,T.pop(),T.length>0?(g=T[T.length-1],Se===!0&&se.setGlobalState(M.clippingPlanes,g.state.camera)):g=null,h.pop(),h.length>0?y=h[h.length-1]:y=null};function ir(O,ie,he,de){if(O.visible===!1)return;if(O.layers.test(ie.layers)){if(O.isGroup)he=O.renderOrder;else if(O.isLOD)O.autoUpdate===!0&&O.update(ie);else if(O.isLight)g.pushLight(O),O.castShadow&&g.pushShadow(O);else if(O.isSprite){if(!O.frustumCulled||nt.intersectsSprite(O)){de&&xe.setFromMatrixPosition(O.matrixWorld).applyMatrix4(ee);const D=F.update(O),I=O.material;I.visible&&y.push(O,D,I,he,xe.z,null)}}else if((O.isMesh||O.isLine||O.isPoints)&&(!O.frustumCulled||nt.intersectsObject(O))){const D=F.update(O),I=O.material;if(de&&(O.boundingSphere!==void 0?(O.boundingSphere===null&&O.computeBoundingSphere(),xe.copy(O.boundingSphere.center)):(D.boundingSphere===null&&D.computeBoundingSphere(),xe.copy(D.boundingSphere.center)),xe.applyMatrix4(O.matrixWorld).applyMatrix4(ee)),Array.isArray(I)){const C=D.groups;for(let k=0,U=C.length;k<U;k++){const B=C[k],Y=I[B.materialIndex];Y&&Y.visible&&y.push(O,D,Y,he,xe.z,B)}}else I.visible&&y.push(O,D,I,he,xe.z,null)}}const S=O.children;for(let D=0,I=S.length;D<I;D++)ir(S[D],ie,he,de)}function ys(O,ie,he,de){const x=O.opaque,S=O.transmissive,D=O.transparent;g.setupLightsView(he),Se===!0&&se.setGlobalState(M.clippingPlanes,he),de&&oe.viewport(E.copy(de)),x.length>0&&Ei(x,ie,he),S.length>0&&Ei(S,ie,he),D.length>0&&Ei(D,ie,he),oe.buffers.depth.setTest(!0),oe.buffers.depth.setMask(!0),oe.buffers.color.setMask(!0),oe.setPolygonOffset(!1)}function fa(O,ie,he,de){if((he.isScene===!0?he.overrideMaterial:null)!==null)return;g.state.transmissionRenderTarget[de.id]===void 0&&(g.state.transmissionRenderTarget[de.id]=new Lr(1,1,{generateMipmaps:!0,type:W.has("EXT_color_buffer_half_float")||W.has("EXT_color_buffer_float")?sa:Mi,minFilter:Tr,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:xt.workingColorSpace}));const S=g.state.transmissionRenderTarget[de.id],D=de.viewport||E;S.setSize(D.z,D.w);const I=M.getRenderTarget();M.setRenderTarget(S),M.getClearColor(q),ce=M.getClearAlpha(),ce<1&&M.setClearColor(16777215,.5),M.clear(),je&&Fe.render(he);const C=M.toneMapping;M.toneMapping=$i;const k=de.viewport;if(de.viewport!==void 0&&(de.viewport=void 0),g.setupLightsView(de),Se===!0&&se.setGlobalState(M.clippingPlanes,de),Ei(O,he,de),_.updateMultisampleRenderTarget(S),_.updateRenderTargetMipmap(S),W.has("WEBGL_multisampled_render_to_texture")===!1){let U=!1;for(let B=0,Y=ie.length;B<Y;B++){const le=ie[B],Q=le.object,Me=le.geometry,ue=le.material,K=le.group;if(ue.side===mi&&Q.layers.test(de.layers)){const Ie=ue.side;ue.side=pn,ue.needsUpdate=!0,Ur(Q,he,de,Me,ue,K),ue.side=Ie,ue.needsUpdate=!0,U=!0}}U===!0&&(_.updateMultisampleRenderTarget(S),_.updateRenderTargetMipmap(S))}M.setRenderTarget(I),M.setClearColor(q,ce),k!==void 0&&(de.viewport=k),M.toneMapping=C}function Ei(O,ie,he){const de=ie.isScene===!0?ie.overrideMaterial:null;for(let x=0,S=O.length;x<S;x++){const D=O[x],I=D.object,C=D.geometry,k=de===null?D.material:de,U=D.group;I.layers.test(he.layers)&&Ur(I,ie,he,C,k,U)}}function Ur(O,ie,he,de,x,S){O.onBeforeRender(M,ie,he,de,x,S),O.modelViewMatrix.multiplyMatrices(he.matrixWorldInverse,O.matrixWorld),O.normalMatrix.getNormalMatrix(O.modelViewMatrix),x.onBeforeRender(M,ie,he,de,O,S),x.transparent===!0&&x.side===mi&&x.forceSinglePass===!1?(x.side=pn,x.needsUpdate=!0,M.renderBufferDirect(he,ie,de,x,O,S),x.side=Zi,x.needsUpdate=!0,M.renderBufferDirect(he,ie,de,x,O,S),x.side=mi):M.renderBufferDirect(he,ie,de,x,O,S),O.onAfterRender(M,ie,he,de,x,S)}function wi(O,ie,he){ie.isScene!==!0&&(ie=De);const de=ve.get(O),x=g.state.lights,S=g.state.shadowsArray,D=x.state.version,I=Z.getParameters(O,x.state,S,ie,he),C=Z.getProgramCacheKey(I);let k=de.programs;de.environment=O.isMeshStandardMaterial?ie.environment:null,de.fog=ie.fog,de.envMap=(O.isMeshStandardMaterial?b:v).get(O.envMap||de.environment),de.envMapRotation=de.environment!==null&&O.envMap===null?ie.environmentRotation:O.envMapRotation,k===void 0&&(O.addEventListener("dispose",dt),k=new Map,de.programs=k);let U=k.get(C);if(U!==void 0){if(de.currentProgram===U&&de.lightsStateVersion===D)return ha(O,I),U}else I.uniforms=Z.getUniforms(O),O.onBeforeCompile(I,M),U=Z.acquireProgram(I,C),k.set(C,U),de.uniforms=I.uniforms;const B=de.uniforms;return(!O.isShaderMaterial&&!O.isRawShaderMaterial||O.clipping===!0)&&(B.clippingPlanes=se.uniform),ha(O,I),de.needsLights=rr(O),de.lightsStateVersion=D,de.needsLights&&(B.ambientLightColor.value=x.state.ambient,B.lightProbe.value=x.state.probe,B.directionalLights.value=x.state.directional,B.directionalLightShadows.value=x.state.directionalShadow,B.spotLights.value=x.state.spot,B.spotLightShadows.value=x.state.spotShadow,B.rectAreaLights.value=x.state.rectArea,B.ltc_1.value=x.state.rectAreaLTC1,B.ltc_2.value=x.state.rectAreaLTC2,B.pointLights.value=x.state.point,B.pointLightShadows.value=x.state.pointShadow,B.hemisphereLights.value=x.state.hemi,B.directionalShadowMap.value=x.state.directionalShadowMap,B.directionalShadowMatrix.value=x.state.directionalShadowMatrix,B.spotShadowMap.value=x.state.spotShadowMap,B.spotLightMatrix.value=x.state.spotLightMatrix,B.spotLightMap.value=x.state.spotLightMap,B.pointShadowMap.value=x.state.pointShadowMap,B.pointShadowMatrix.value=x.state.pointShadowMatrix),de.currentProgram=U,de.uniformsList=null,U}function Ai(O){if(O.uniformsList===null){const ie=O.currentProgram.getUniforms();O.uniformsList=Qa.seqWithValue(ie.seq,O.uniforms)}return O.uniformsList}function ha(O,ie){const he=ve.get(O);he.outputColorSpace=ie.outputColorSpace,he.batching=ie.batching,he.batchingColor=ie.batchingColor,he.instancing=ie.instancing,he.instancingColor=ie.instancingColor,he.instancingMorph=ie.instancingMorph,he.skinning=ie.skinning,he.morphTargets=ie.morphTargets,he.morphNormals=ie.morphNormals,he.morphColors=ie.morphColors,he.morphTargetsCount=ie.morphTargetsCount,he.numClippingPlanes=ie.numClippingPlanes,he.numIntersection=ie.numClipIntersection,he.vertexAlphas=ie.vertexAlphas,he.vertexTangents=ie.vertexTangents,he.toneMapping=ie.toneMapping}function Fo(O,ie,he,de,x){ie.isScene!==!0&&(ie=De),_.resetTextureUnits();const S=ie.fog,D=de.isMeshStandardMaterial?ie.environment:null,I=z===null?M.outputColorSpace:z.isXRRenderTarget===!0?z.texture.colorSpace:tr,C=(de.isMeshStandardMaterial?b:v).get(de.envMap||D),k=de.vertexColors===!0&&!!he.attributes.color&&he.attributes.color.itemSize===4,U=!!he.attributes.tangent&&(!!de.normalMap||de.anisotropy>0),B=!!he.morphAttributes.position,Y=!!he.morphAttributes.normal,le=!!he.morphAttributes.color;let Q=$i;de.toneMapped&&(z===null||z.isXRRenderTarget===!0)&&(Q=M.toneMapping);const Me=he.morphAttributes.position||he.morphAttributes.normal||he.morphAttributes.color,ue=Me!==void 0?Me.length:0,K=ve.get(de),Ie=g.state.lights;if(Se===!0&&(Ce===!0||O!==$)){const Qe=O===$&&de.id===X;se.setState(de,O,Qe)}let Pe=!1;de.version===K.__version?(K.needsLights&&K.lightsStateVersion!==Ie.state.version||K.outputColorSpace!==I||x.isBatchedMesh&&K.batching===!1||!x.isBatchedMesh&&K.batching===!0||x.isBatchedMesh&&K.batchingColor===!0&&x.colorTexture===null||x.isBatchedMesh&&K.batchingColor===!1&&x.colorTexture!==null||x.isInstancedMesh&&K.instancing===!1||!x.isInstancedMesh&&K.instancing===!0||x.isSkinnedMesh&&K.skinning===!1||!x.isSkinnedMesh&&K.skinning===!0||x.isInstancedMesh&&K.instancingColor===!0&&x.instanceColor===null||x.isInstancedMesh&&K.instancingColor===!1&&x.instanceColor!==null||x.isInstancedMesh&&K.instancingMorph===!0&&x.morphTexture===null||x.isInstancedMesh&&K.instancingMorph===!1&&x.morphTexture!==null||K.envMap!==C||de.fog===!0&&K.fog!==S||K.numClippingPlanes!==void 0&&(K.numClippingPlanes!==se.numPlanes||K.numIntersection!==se.numIntersection)||K.vertexAlphas!==k||K.vertexTangents!==U||K.morphTargets!==B||K.morphNormals!==Y||K.morphColors!==le||K.toneMapping!==Q||K.morphTargetsCount!==ue)&&(Pe=!0):(Pe=!0,K.__version=de.version);let Te=K.currentProgram;Pe===!0&&(Te=wi(de,ie,x));let Ee=!1,Ae=!1,Ye=!1;const Ge=Te.getUniforms(),Je=K.uniforms;if(oe.useProgram(Te.program)&&(Ee=!0,Ae=!0,Ye=!0),de.id!==X&&(X=de.id,Ae=!0),Ee||$!==O){pe.reverseDepthBuffer?(Oe.copy(O.projectionMatrix),yv(Oe),Sv(Oe),Ge.setValue(A,"projectionMatrix",Oe)):Ge.setValue(A,"projectionMatrix",O.projectionMatrix),Ge.setValue(A,"viewMatrix",O.matrixWorldInverse);const Qe=Ge.map.cameraPosition;Qe!==void 0&&Qe.setValue(A,we.setFromMatrixPosition(O.matrixWorld)),pe.logarithmicDepthBuffer&&Ge.setValue(A,"logDepthBufFC",2/(Math.log(O.far+1)/Math.LN2)),(de.isMeshPhongMaterial||de.isMeshToonMaterial||de.isMeshLambertMaterial||de.isMeshBasicMaterial||de.isMeshStandardMaterial||de.isShaderMaterial)&&Ge.setValue(A,"isOrthographic",O.isOrthographicCamera===!0),$!==O&&($=O,Ae=!0,Ye=!0)}if(x.isSkinnedMesh){Ge.setOptional(A,x,"bindMatrix"),Ge.setOptional(A,x,"bindMatrixInverse");const Qe=x.skeleton;Qe&&(Qe.boneTexture===null&&Qe.computeBoneTexture(),Ge.setValue(A,"boneTexture",Qe.boneTexture,_))}x.isBatchedMesh&&(Ge.setOptional(A,x,"batchingTexture"),Ge.setValue(A,"batchingTexture",x._matricesTexture,_),Ge.setOptional(A,x,"batchingIdTexture"),Ge.setValue(A,"batchingIdTexture",x._indirectTexture,_),Ge.setOptional(A,x,"batchingColorTexture"),x._colorsTexture!==null&&Ge.setValue(A,"batchingColorTexture",x._colorsTexture,_));const tt=he.morphAttributes;if((tt.position!==void 0||tt.normal!==void 0||tt.color!==void 0)&&Le.update(x,he,Te),(Ae||K.receiveShadow!==x.receiveShadow)&&(K.receiveShadow=x.receiveShadow,Ge.setValue(A,"receiveShadow",x.receiveShadow)),de.isMeshGouraudMaterial&&de.envMap!==null&&(Je.envMap.value=C,Je.flipEnvMap.value=C.isCubeTexture&&C.isRenderTargetTexture===!1?-1:1),de.isMeshStandardMaterial&&de.envMap===null&&ie.environment!==null&&(Je.envMapIntensity.value=ie.environmentIntensity),Ae&&(Ge.setValue(A,"toneMappingExposure",M.toneMappingExposure),K.needsLights&&Bo(Je,Ye),S&&de.fog===!0&&j.refreshFogUniforms(Je,S),j.refreshMaterialUniforms(Je,de,me,ae,g.state.transmissionRenderTarget[O.id]),Qa.upload(A,Ai(K),Je,_)),de.isShaderMaterial&&de.uniformsNeedUpdate===!0&&(Qa.upload(A,Ai(K),Je,_),de.uniformsNeedUpdate=!1),de.isSpriteMaterial&&Ge.setValue(A,"center",x.center),Ge.setValue(A,"modelViewMatrix",x.modelViewMatrix),Ge.setValue(A,"normalMatrix",x.normalMatrix),Ge.setValue(A,"modelMatrix",x.matrixWorld),de.isShaderMaterial||de.isRawShaderMaterial){const Qe=de.uniformsGroups;for(let at=0,ht=Qe.length;at<ht;at++){const rt=Qe[at];J.update(rt,Te),J.bind(rt,Te)}}return Te}function Bo(O,ie){O.ambientLightColor.needsUpdate=ie,O.lightProbe.needsUpdate=ie,O.directionalLights.needsUpdate=ie,O.directionalLightShadows.needsUpdate=ie,O.pointLights.needsUpdate=ie,O.pointLightShadows.needsUpdate=ie,O.spotLights.needsUpdate=ie,O.spotLightShadows.needsUpdate=ie,O.rectAreaLights.needsUpdate=ie,O.hemisphereLights.needsUpdate=ie}function rr(O){return O.isMeshLambertMaterial||O.isMeshToonMaterial||O.isMeshPhongMaterial||O.isMeshStandardMaterial||O.isShadowMaterial||O.isShaderMaterial&&O.lights===!0}this.getActiveCubeFace=function(){return V},this.getActiveMipmapLevel=function(){return L},this.getRenderTarget=function(){return z},this.setRenderTargetTextures=function(O,ie,he){ve.get(O.texture).__webglTexture=ie,ve.get(O.depthTexture).__webglTexture=he;const de=ve.get(O);de.__hasExternalTextures=!0,de.__autoAllocateDepthBuffer=he===void 0,de.__autoAllocateDepthBuffer||W.has("WEBGL_multisampled_render_to_texture")===!0&&(de.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(O,ie){const he=ve.get(O);he.__webglFramebuffer=ie,he.__useDefaultFramebuffer=ie===void 0},this.setRenderTarget=function(O,ie=0,he=0){z=O,V=ie,L=he;let de=!0,x=null,S=!1,D=!1;if(O){const C=ve.get(O);if(C.__useDefaultFramebuffer!==void 0)oe.bindFramebuffer(A.FRAMEBUFFER,null),de=!1;else if(C.__webglFramebuffer===void 0)_.setupRenderTarget(O);else if(C.__hasExternalTextures)_.rebindTextures(O,ve.get(O.texture).__webglTexture,ve.get(O.depthTexture).__webglTexture);else if(O.depthBuffer){const B=O.depthTexture;if(C.__boundDepthTexture!==B){if(B!==null&&ve.has(B)&&(O.width!==B.image.width||O.height!==B.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");_.setupDepthRenderbuffer(O)}}const k=O.texture;(k.isData3DTexture||k.isDataArrayTexture||k.isCompressedArrayTexture)&&(D=!0);const U=ve.get(O).__webglFramebuffer;O.isWebGLCubeRenderTarget?(Array.isArray(U[ie])?x=U[ie][he]:x=U[ie],S=!0):O.samples>0&&_.useMultisampledRTT(O)===!1?x=ve.get(O).__webglMultisampledFramebuffer:Array.isArray(U)?x=U[he]:x=U,E.copy(O.viewport),R.copy(O.scissor),G=O.scissorTest}else E.copy(ze).multiplyScalar(me).floor(),R.copy(ke).multiplyScalar(me).floor(),G=Ze;if(oe.bindFramebuffer(A.FRAMEBUFFER,x)&&de&&oe.drawBuffers(O,x),oe.viewport(E),oe.scissor(R),oe.setScissorTest(G),S){const C=ve.get(O.texture);A.framebufferTexture2D(A.FRAMEBUFFER,A.COLOR_ATTACHMENT0,A.TEXTURE_CUBE_MAP_POSITIVE_X+ie,C.__webglTexture,he)}else if(D){const C=ve.get(O.texture),k=ie||0;A.framebufferTextureLayer(A.FRAMEBUFFER,A.COLOR_ATTACHMENT0,C.__webglTexture,he||0,k)}X=-1},this.readRenderTargetPixels=function(O,ie,he,de,x,S,D){if(!(O&&O.isWebGLRenderTarget))return;let I=ve.get(O).__webglFramebuffer;if(O.isWebGLCubeRenderTarget&&D!==void 0&&(I=I[D]),I){oe.bindFramebuffer(A.FRAMEBUFFER,I);try{const C=O.texture,k=C.format,U=C.type;if(!pe.textureFormatReadable(k)||!pe.textureTypeReadable(U))return;ie>=0&&ie<=O.width-de&&he>=0&&he<=O.height-x&&A.readPixels(ie,he,de,x,qe.convert(k),qe.convert(U),S)}finally{const C=z!==null?ve.get(z).__webglFramebuffer:null;oe.bindFramebuffer(A.FRAMEBUFFER,C)}}},this.readRenderTargetPixelsAsync=async function(O,ie,he,de,x,S,D){if(!(O&&O.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let I=ve.get(O).__webglFramebuffer;if(O.isWebGLCubeRenderTarget&&D!==void 0&&(I=I[D]),I){const C=O.texture,k=C.format,U=C.type;if(!pe.textureFormatReadable(k))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!pe.textureTypeReadable(U))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(ie>=0&&ie<=O.width-de&&he>=0&&he<=O.height-x){oe.bindFramebuffer(A.FRAMEBUFFER,I);const B=A.createBuffer();A.bindBuffer(A.PIXEL_PACK_BUFFER,B),A.bufferData(A.PIXEL_PACK_BUFFER,S.byteLength,A.STREAM_READ),A.readPixels(ie,he,de,x,qe.convert(k),qe.convert(U),0);const Y=z!==null?ve.get(z).__webglFramebuffer:null;oe.bindFramebuffer(A.FRAMEBUFFER,Y);const le=A.fenceSync(A.SYNC_GPU_COMMANDS_COMPLETE,0);return A.flush(),await xv(A,le,4),A.bindBuffer(A.PIXEL_PACK_BUFFER,B),A.getBufferSubData(A.PIXEL_PACK_BUFFER,0,S),A.deleteBuffer(B),A.deleteSync(le),S}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(O,ie=null,he=0){O.isTexture!==!0&&(Ja("WebGLRenderer: copyFramebufferToTexture function signature has changed."),ie=arguments[0]||null,O=arguments[1]);const de=Math.pow(2,-he),x=Math.floor(O.image.width*de),S=Math.floor(O.image.height*de),D=ie!==null?ie.x:0,I=ie!==null?ie.y:0;_.setTexture2D(O,0),A.copyTexSubImage2D(A.TEXTURE_2D,he,0,0,D,I,x,S),oe.unbindTexture()},this.copyTextureToTexture=function(O,ie,he=null,de=null,x=0){O.isTexture!==!0&&(Ja("WebGLRenderer: copyTextureToTexture function signature has changed."),de=arguments[0]||null,O=arguments[1],ie=arguments[2],x=arguments[3]||0,he=null);let S,D,I,C,k,U;he!==null?(S=he.max.x-he.min.x,D=he.max.y-he.min.y,I=he.min.x,C=he.min.y):(S=O.image.width,D=O.image.height,I=0,C=0),de!==null?(k=de.x,U=de.y):(k=0,U=0);const B=qe.convert(ie.format),Y=qe.convert(ie.type);_.setTexture2D(ie,0),A.pixelStorei(A.UNPACK_FLIP_Y_WEBGL,ie.flipY),A.pixelStorei(A.UNPACK_PREMULTIPLY_ALPHA_WEBGL,ie.premultiplyAlpha),A.pixelStorei(A.UNPACK_ALIGNMENT,ie.unpackAlignment);const le=A.getParameter(A.UNPACK_ROW_LENGTH),Q=A.getParameter(A.UNPACK_IMAGE_HEIGHT),Me=A.getParameter(A.UNPACK_SKIP_PIXELS),ue=A.getParameter(A.UNPACK_SKIP_ROWS),K=A.getParameter(A.UNPACK_SKIP_IMAGES),Ie=O.isCompressedTexture?O.mipmaps[x]:O.image;A.pixelStorei(A.UNPACK_ROW_LENGTH,Ie.width),A.pixelStorei(A.UNPACK_IMAGE_HEIGHT,Ie.height),A.pixelStorei(A.UNPACK_SKIP_PIXELS,I),A.pixelStorei(A.UNPACK_SKIP_ROWS,C),O.isDataTexture?A.texSubImage2D(A.TEXTURE_2D,x,k,U,S,D,B,Y,Ie.data):O.isCompressedTexture?A.compressedTexSubImage2D(A.TEXTURE_2D,x,k,U,Ie.width,Ie.height,B,Ie.data):A.texSubImage2D(A.TEXTURE_2D,x,k,U,S,D,B,Y,Ie),A.pixelStorei(A.UNPACK_ROW_LENGTH,le),A.pixelStorei(A.UNPACK_IMAGE_HEIGHT,Q),A.pixelStorei(A.UNPACK_SKIP_PIXELS,Me),A.pixelStorei(A.UNPACK_SKIP_ROWS,ue),A.pixelStorei(A.UNPACK_SKIP_IMAGES,K),x===0&&ie.generateMipmaps&&A.generateMipmap(A.TEXTURE_2D),oe.unbindTexture()},this.copyTextureToTexture3D=function(O,ie,he=null,de=null,x=0){O.isTexture!==!0&&(Ja("WebGLRenderer: copyTextureToTexture3D function signature has changed."),he=arguments[0]||null,de=arguments[1]||null,O=arguments[2],ie=arguments[3],x=arguments[4]||0);let S,D,I,C,k,U,B,Y,le;const Q=O.isCompressedTexture?O.mipmaps[x]:O.image;he!==null?(S=he.max.x-he.min.x,D=he.max.y-he.min.y,I=he.max.z-he.min.z,C=he.min.x,k=he.min.y,U=he.min.z):(S=Q.width,D=Q.height,I=Q.depth,C=0,k=0,U=0),de!==null?(B=de.x,Y=de.y,le=de.z):(B=0,Y=0,le=0);const Me=qe.convert(ie.format),ue=qe.convert(ie.type);let K;if(ie.isData3DTexture)_.setTexture3D(ie,0),K=A.TEXTURE_3D;else if(ie.isDataArrayTexture||ie.isCompressedArrayTexture)_.setTexture2DArray(ie,0),K=A.TEXTURE_2D_ARRAY;else return;A.pixelStorei(A.UNPACK_FLIP_Y_WEBGL,ie.flipY),A.pixelStorei(A.UNPACK_PREMULTIPLY_ALPHA_WEBGL,ie.premultiplyAlpha),A.pixelStorei(A.UNPACK_ALIGNMENT,ie.unpackAlignment);const Ie=A.getParameter(A.UNPACK_ROW_LENGTH),Pe=A.getParameter(A.UNPACK_IMAGE_HEIGHT),Te=A.getParameter(A.UNPACK_SKIP_PIXELS),Ee=A.getParameter(A.UNPACK_SKIP_ROWS),Ae=A.getParameter(A.UNPACK_SKIP_IMAGES);A.pixelStorei(A.UNPACK_ROW_LENGTH,Q.width),A.pixelStorei(A.UNPACK_IMAGE_HEIGHT,Q.height),A.pixelStorei(A.UNPACK_SKIP_PIXELS,C),A.pixelStorei(A.UNPACK_SKIP_ROWS,k),A.pixelStorei(A.UNPACK_SKIP_IMAGES,U),O.isDataTexture||O.isData3DTexture?A.texSubImage3D(K,x,B,Y,le,S,D,I,Me,ue,Q.data):ie.isCompressedArrayTexture?A.compressedTexSubImage3D(K,x,B,Y,le,S,D,I,Me,Q.data):A.texSubImage3D(K,x,B,Y,le,S,D,I,Me,ue,Q),A.pixelStorei(A.UNPACK_ROW_LENGTH,Ie),A.pixelStorei(A.UNPACK_IMAGE_HEIGHT,Pe),A.pixelStorei(A.UNPACK_SKIP_PIXELS,Te),A.pixelStorei(A.UNPACK_SKIP_ROWS,Ee),A.pixelStorei(A.UNPACK_SKIP_IMAGES,Ae),x===0&&ie.generateMipmaps&&A.generateMipmap(K),oe.unbindTexture()},this.initRenderTarget=function(O){ve.get(O).__webglFramebuffer===void 0&&_.setupRenderTarget(O)},this.initTexture=function(O){O.isCubeTexture?_.setTextureCube(O,0):O.isData3DTexture?_.setTexture3D(O,0):O.isDataArrayTexture||O.isCompressedArrayTexture?_.setTexture2DArray(O,0):_.setTexture2D(O,0),oe.unbindTexture()},this.resetState=function(){V=0,L=0,z=null,oe.reset(),it.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return vi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=e===Mu?"display-p3":"srgb",n.unpackColorSpace=xt.workingColorSpace===Co?"display-p3":"srgb"}}class kp extends mn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new bi,this.environmentIntensity=1,this.environmentRotation=new bi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}class Cl extends _n{constructor(e,n,i,r=1){super(e,n,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}class vh extends Yt{constructor(e,n,i,r,s,a,o,l,f){super(e,n,i,r,s,a,o,l,f),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Db extends Qn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}const xh={enabled:!1,files:{},add:function(t,e){this.enabled!==!1&&(this.files[t]=e)},get:function(t){if(this.enabled!==!1)return this.files[t]},remove:function(t){delete this.files[t]},clear:function(){this.files={}}};class Lb{constructor(e,n,i){const r=this;let s=!1,a=0,o=0,l;const f=[];this.onStart=void 0,this.onLoad=e,this.onProgress=n,this.onError=i,this.itemStart=function(u){o++,s===!1&&r.onStart!==void 0&&r.onStart(u,a,o),s=!0},this.itemEnd=function(u){a++,r.onProgress!==void 0&&r.onProgress(u,a,o),a===o&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,d){return f.push(u,d),this},this.removeHandler=function(u){const d=f.indexOf(u);return d!==-1&&f.splice(d,2),this},this.getHandler=function(u){for(let d=0,c=f.length;d<c;d+=2){const m=f[d],p=f[d+1];if(m.global&&(m.lastIndex=0),m.test(u))return p}return null}}}const Ib=new Lb;class Au{constructor(e){this.manager=e!==void 0?e:Ib,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,n){const i=this;return new Promise(function(r,s){i.load(e,r,n,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}Au.DEFAULT_MATERIAL_NAME="__DEFAULT";class Ub extends Au{constructor(e){super(e)}load(e,n,i,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,a=xh.get(e);if(a!==void 0)return s.manager.itemStart(e),setTimeout(function(){n&&n(a),s.manager.itemEnd(e)},0),a;const o=ea("img");function l(){u(),xh.add(e,this),n&&n(this),s.manager.itemEnd(e)}function f(d){u(),r&&r(d),s.manager.itemError(e),s.manager.itemEnd(e)}function u(){o.removeEventListener("load",l,!1),o.removeEventListener("error",f,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",f,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),s.manager.itemStart(e),o.src=e,o}}class Nb extends Au{constructor(e){super(e)}load(e,n,i,r){const s=new Yt,a=new Ub(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){s.image=o,s.needsUpdate=!0,n!==void 0&&n(s)},i,r),s}}class Ob extends nr{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){const e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}}class Hp{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=yh(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const n=yh();e=(n-this.oldTime)/1e3,this.oldTime=n,this.elapsedTime+=e}return e}}function yh(){return performance.now()}const Sh=new Ft;class Fb{constructor(e,n,i=0,r=1/0){this.ray=new Tp(e,n),this.near=i,this.far=r,this.camera=null,this.layers=new Tu,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,n){this.ray.set(e,n)}setFromCamera(e,n){n.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(n.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(n).sub(this.ray.origin).normalize(),this.camera=n):n.isOrthographicCamera&&(this.ray.origin.set(e.x,e.y,(n.near+n.far)/(n.near-n.far)).unproject(n),this.ray.direction.set(0,0,-1).transformDirection(n.matrixWorld),this.camera=n)}setFromXRController(e){return Sh.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Sh),this}intersectObject(e,n=!0,i=[]){return Oc(e,this,i,n),i.sort(Mh),i}intersectObjects(e,n=!0,i=[]){for(let r=0,s=e.length;r<s;r++)Oc(e[r],this,i,n);return i.sort(Mh),i}}function Mh(t,e){return t.distance-e.distance}function Oc(t,e,n,i){let r=!0;if(t.layers.test(e.layers)&&t.raycast(e,n)===!1&&(r=!1),r===!0&&i===!0){const s=t.children;for(let a=0,o=s.length;a<o;a++)Oc(s[a],e,n,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:mu}}));typeof window<"u"&&(window.__THREE__||(window.__THREE__=mu));/*!
 * VERSION: 2.0.2
 * DATE: 2018-08-27
 * UPDATES AND DOCS AT: http://greensock.com
 *
 * @license Copyright (c) 2008-2018, GreenSock. All rights reserved.
 * This work is subject to the terms at http://greensock.com/standard-license or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 *
 * @author: Jack Doyle, jack@greensock.com
 */var Lt=typeof window<"u"?window:typeof jc<"u"&&jc.exports&&typeof global<"u"?global:{},lt=function(t,e){var n=t.document,i=t.GreenSockGlobals=t.GreenSockGlobals||t;if(i.TweenLite)return i.TweenLite;var r=function(_){var v=_.split("."),b=i,P;for(P=0;P<v.length;P++)b[v[P]]=b=b[v[P]]||{};return b},s=r("com.greensock"),a=1e-10,o=function(_){var v=[],b=_.length,P;for(P=0;P!==b;v.push(_[P++]));return v},l=function(){},f=function(){var _=Object.prototype.toString,v=_.call([]);return function(b){return b!=null&&(b instanceof Array||typeof b=="object"&&!!b.push&&_.call(b)===v)}}(),u,d,c,m,p,y={},g=function(_,v,b,P){this.sc=y[_]?y[_].sc:[],y[_]=this,this.gsClass=null,this.func=b;var N=[];this.check=function(F){for(var Z=v.length,j=Z,te,be,se,ge;--Z>-1;)(te=y[v[Z]]||new g(v[Z],[])).gsClass?(N[Z]=te.gsClass,j--):F&&te.sc.push(this);if(j===0&&b)for(be=("com.greensock."+_).split("."),se=be.pop(),ge=r(be.join("."))[se]=this.gsClass=b.apply(b,N),P&&(i[se]=ge),Z=0;Z<this.sc.length;Z++)this.sc[Z].check()},this.check(!0)},h=t._gsDefine=function(_,v,b,P){return new g(_,v,b,P)},T=s._class=function(_,v,b){return v=v||function(){},h(_,[],function(){return v},b),v};h.globals=i;var M=[0,0,1,1],w=T("easing.Ease",function(_,v,b,P){this._func=_,this._type=b||0,this._power=P||0,this._params=v?M.concat(v):M},!0),V=w.map={},L=w.register=function(_,v,b,P){for(var N=v.split(","),F=N.length,Z=(b||"easeIn,easeOut,easeInOut").split(","),j,te,be,se;--F>-1;)for(te=N[F],j=P?T("easing."+te,null,!0):s.easing[te]||{},be=Z.length;--be>-1;)se=Z[be],V[te+"."+se]=V[se+te]=j[se]=_.getRatio?_:_[se]||new _};for(c=w.prototype,c._calcEnd=!1,c.getRatio=function(_){if(this._func)return this._params[0]=_,this._func.apply(null,this._params);var v=this._type,b=this._power,P=v===1?1-_:v===2?_:_<.5?_*2:(1-_)*2;return b===1?P*=P:b===2?P*=P*P:b===3?P*=P*P*P:b===4&&(P*=P*P*P*P),v===1?1-P:v===2?P:_<.5?P/2:1-P/2},u=["Linear","Quad","Cubic","Quart","Quint,Strong"],d=u.length;--d>-1;)c=u[d]+",Power"+d,L(new w(null,null,1,d),c,"easeOut",!0),L(new w(null,null,2,d),c,"easeIn"+(d===0?",easeNone":"")),L(new w(null,null,3,d),c,"easeInOut");V.linear=s.easing.Linear.easeIn,V.swing=s.easing.Quad.easeInOut;var z=T("events.EventDispatcher",function(_){this._listeners={},this._eventTarget=_||this});c=z.prototype,c.addEventListener=function(_,v,b,P,N){N=N||0;var F=this._listeners[_],Z=0,j,te;for(this===m&&!p&&m.wake(),F==null&&(this._listeners[_]=F=[]),te=F.length;--te>-1;)j=F[te],j.c===v&&j.s===b?F.splice(te,1):Z===0&&j.pr<N&&(Z=te+1);F.splice(Z,0,{c:v,s:b,up:P,pr:N})},c.removeEventListener=function(_,v){var b=this._listeners[_],P;if(b){for(P=b.length;--P>-1;)if(b[P].c===v){b.splice(P,1);return}}},c.dispatchEvent=function(_){var v=this._listeners[_],b,P,N;if(v)for(b=v.length,b>1&&(v=v.slice(0)),P=this._eventTarget;--b>-1;)N=v[b],N&&(N.up?N.c.call(N.s||P,{type:_,target:P}):N.c.call(N.s||P))};var X=t.requestAnimationFrame,$=t.cancelAnimationFrame,E=Date.now||function(){return new Date().getTime()},R=E();for(u=["ms","moz","webkit","o"],d=u.length;--d>-1&&!X;)X=t[u[d]+"RequestAnimationFrame"],$=t[u[d]+"CancelAnimationFrame"]||t[u[d]+"CancelRequestAnimationFrame"];T("Ticker",function(_,v){var b=this,P=E(),N=v!==!1&&X?"auto":!1,F=500,Z=33,j="tick",te,be,se,ge,Fe,Le=function(Ue){var $e=E()-R,qe,it;$e>F&&(P+=$e-Z),R+=$e,b.time=(R-P)/1e3,qe=b.time-Fe,(!te||qe>0||Ue===!0)&&(b.frame++,Fe+=qe+(qe>=ge?.004:ge-qe),it=!0),Ue!==!0&&(se=be(Le)),it&&b.dispatchEvent(j)};z.call(b),b.time=b.frame=0,b.tick=function(){Le(!0)},b.lagSmoothing=function(Ue,$e){if(!arguments.length)return F<1/a;F=Ue||1/a,Z=Math.min($e,F,0)},b.sleep=function(){se!=null&&(!N||!$?clearTimeout(se):$(se),be=l,se=null,b===m&&(p=!1))},b.wake=function(Ue){se!==null?b.sleep():Ue?P+=-R+(R=E()):b.frame>10&&(R=E()-F+5),be=te===0?l:!N||!X?function($e){return setTimeout($e,(Fe-b.time)*1e3+1|0)}:X,b===m&&(p=!0),Le(2)},b.fps=function(Ue){if(!arguments.length)return te;te=Ue,ge=1/(te||60),Fe=this.time+ge,b.wake()},b.useRAF=function(Ue){if(!arguments.length)return N;b.sleep(),N=Ue,b.fps(te)},b.fps(_),setTimeout(function(){N==="auto"&&b.frame<5&&(n||{}).visibilityState!=="hidden"&&b.useRAF(!1)},1500)}),c=s.Ticker.prototype=new s.events.EventDispatcher,c.constructor=s.Ticker;var G=T("core.Animation",function(_,v){if(this.vars=v=v||{},this._duration=this._totalDuration=_||0,this._delay=Number(v.delay)||0,this._timeScale=1,this._active=v.immediateRender===!0,this.data=v.data,this._reversed=v.reversed===!0,!!We){p||m.wake();var b=this.vars.useFrames?je:We;b.add(this,b._time),this.vars.paused&&this.paused(!0)}});m=G.ticker=new s.Ticker,c=G.prototype,c._dirty=c._gc=c._initted=c._paused=!1,c._totalTime=c._time=0,c._rawPrevTime=-1,c._next=c._last=c._onUpdate=c._timeline=c.timeline=null,c._paused=!1;var q=function(){p&&E()-R>2e3&&((n||{}).visibilityState!=="hidden"||!m.lagSmoothing())&&m.wake();var _=setTimeout(q,2e3);_.unref&&_.unref()};q(),c.play=function(_,v){return _!=null&&this.seek(_,v),this.reversed(!1).paused(!1)},c.pause=function(_,v){return _!=null&&this.seek(_,v),this.paused(!0)},c.resume=function(_,v){return _!=null&&this.seek(_,v),this.paused(!1)},c.seek=function(_,v){return this.totalTime(Number(_),v!==!1)},c.restart=function(_,v){return this.reversed(!1).paused(!1).totalTime(_?-this._delay:0,v!==!1,!0)},c.reverse=function(_,v){return _!=null&&this.seek(_||this.totalDuration(),v),this.reversed(!0).paused(!1)},c.render=function(_,v,b){},c.invalidate=function(){return this._time=this._totalTime=0,this._initted=this._gc=!1,this._rawPrevTime=-1,(this._gc||!this.timeline)&&this._enabled(!0),this},c.isActive=function(){var _=this._timeline,v=this._startTime,b;return!_||!this._gc&&!this._paused&&_.isActive()&&(b=_.rawTime(!0))>=v&&b<v+this.totalDuration()/this._timeScale-1e-7},c._enabled=function(_,v){return p||m.wake(),this._gc=!_,this._active=this.isActive(),v!==!0&&(_&&!this.timeline?this._timeline.add(this,this._startTime-this._delay):!_&&this.timeline&&this._timeline._remove(this,!0)),!1},c._kill=function(_,v){return this._enabled(!1,!1)},c.kill=function(_,v){return this._kill(_,v),this},c._uncache=function(_){for(var v=_?this:this.timeline;v;)v._dirty=!0,v=v.timeline;return this},c._swapSelfInParams=function(_){for(var v=_.length,b=_.concat();--v>-1;)_[v]==="{self}"&&(b[v]=this);return b},c._callback=function(_){var v=this.vars,b=v[_],P=v[_+"Params"],N=v[_+"Scope"]||v.callbackScope||this,F=P?P.length:0;switch(F){case 0:b.call(N);break;case 1:b.call(N,P[0]);break;case 2:b.call(N,P[0],P[1]);break;default:b.apply(N,P)}},c.eventCallback=function(_,v,b,P){if((_||"").substr(0,2)==="on"){var N=this.vars;if(arguments.length===1)return N[_];v==null?delete N[_]:(N[_]=v,N[_+"Params"]=f(b)&&b.join("").indexOf("{self}")!==-1?this._swapSelfInParams(b):b,N[_+"Scope"]=P),_==="onUpdate"&&(this._onUpdate=v)}return this},c.delay=function(_){return arguments.length?(this._timeline.smoothChildTiming&&this.startTime(this._startTime+_-this._delay),this._delay=_,this):this._delay},c.duration=function(_){return arguments.length?(this._duration=this._totalDuration=_,this._uncache(!0),this._timeline.smoothChildTiming&&this._time>0&&this._time<this._duration&&_!==0&&this.totalTime(this._totalTime*(_/this._duration),!0),this):(this._dirty=!1,this._duration)},c.totalDuration=function(_){return this._dirty=!1,arguments.length?this.duration(_):this._totalDuration},c.time=function(_,v){return arguments.length?(this._dirty&&this.totalDuration(),this.totalTime(_>this._duration?this._duration:_,v)):this._time},c.totalTime=function(_,v,b){if(p||m.wake(),!arguments.length)return this._totalTime;if(this._timeline){if(_<0&&!b&&(_+=this.totalDuration()),this._timeline.smoothChildTiming){this._dirty&&this.totalDuration();var P=this._totalDuration,N=this._timeline;if(_>P&&!b&&(_=P),this._startTime=(this._paused?this._pauseTime:N._time)-(this._reversed?P-_:_)/this._timeScale,N._dirty||this._uncache(!1),N._timeline)for(;N._timeline;)N._timeline._time!==(N._startTime+N._totalTime)/N._timeScale&&N.totalTime(N._totalTime,!0),N=N._timeline}this._gc&&this._enabled(!0,!1),(this._totalTime!==_||this._duration===0)&&(ne.length&&H(),this.render(_,v,!1),ne.length&&H())}return this},c.progress=c.totalProgress=function(_,v){var b=this.duration();return arguments.length?this.totalTime(b*_,v):b?this._time/b:this.ratio},c.startTime=function(_){return arguments.length?(_!==this._startTime&&(this._startTime=_,this.timeline&&this.timeline._sortChildren&&this.timeline.add(this,_-this._delay)),this):this._startTime},c.endTime=function(_){return this._startTime+(_!=!1?this.totalDuration():this.duration())/this._timeScale},c.timeScale=function(_){if(!arguments.length)return this._timeScale;var v,b;for(_=_||a,this._timeline&&this._timeline.smoothChildTiming&&(v=this._pauseTime,b=v||v===0?v:this._timeline.totalTime(),this._startTime=b-(b-this._startTime)*this._timeScale/_),this._timeScale=_,b=this.timeline;b&&b.timeline;)b._dirty=!0,b.totalDuration(),b=b.timeline;return this},c.reversed=function(_){return arguments.length?(_!=this._reversed&&(this._reversed=_,this.totalTime(this._timeline&&!this._timeline.smoothChildTiming?this.totalDuration()-this._totalTime:this._totalTime,!0)),this):this._reversed},c.paused=function(_){if(!arguments.length)return this._paused;var v=this._timeline,b,P;return _!=this._paused&&v&&(!p&&!_&&m.wake(),b=v.rawTime(),P=b-this._pauseTime,!_&&v.smoothChildTiming&&(this._startTime+=P,this._uncache(!1)),this._pauseTime=_?b:null,this._paused=_,this._active=this.isActive(),!_&&P!==0&&this._initted&&this.duration()&&(b=v.smoothChildTiming?this._totalTime:(b-this._startTime)/this._timeScale,this.render(b,b===this._totalTime,!0))),this._gc&&!_&&this._enabled(!0,!1),this};var ce=T("core.SimpleTimeline",function(_){G.call(this,0,_),this.autoRemoveChildren=this.smoothChildTiming=!0});c=ce.prototype=new G,c.constructor=ce,c.kill()._gc=!1,c._first=c._last=c._recent=null,c._sortChildren=!1,c.add=c.insert=function(_,v,b,P){var N,F;if(_._startTime=Number(v||0)+_._delay,_._paused&&this!==_._timeline&&(_._pauseTime=this.rawTime()-(_._timeline.rawTime()-_._pauseTime)),_.timeline&&_.timeline._remove(_,!0),_.timeline=_._timeline=this,_._gc&&_._enabled(!0,!0),N=this._last,this._sortChildren)for(F=_._startTime;N&&N._startTime>F;)N=N._prev;return N?(_._next=N._next,N._next=_):(_._next=this._first,this._first=_),_._next?_._next._prev=_:this._last=_,_._prev=N,this._recent=_,this._timeline&&this._uncache(!0),this},c._remove=function(_,v){return _.timeline===this&&(v||_._enabled(!1,!0),_._prev?_._prev._next=_._next:this._first===_&&(this._first=_._next),_._next?_._next._prev=_._prev:this._last===_&&(this._last=_._prev),_._next=_._prev=_.timeline=null,_===this._recent&&(this._recent=this._last),this._timeline&&this._uncache(!0)),this},c.render=function(_,v,b){var P=this._first,N;for(this._totalTime=this._time=this._rawPrevTime=_;P;)N=P._next,(P._active||_>=P._startTime&&!P._paused&&!P._gc)&&(P._reversed?P.render((P._dirty?P.totalDuration():P._totalDuration)-(_-P._startTime)*P._timeScale,v,b):P.render((_-P._startTime)*P._timeScale,v,b)),P=N},c.rawTime=function(){return p||m.wake(),this._totalTime};var re=T("TweenLite",function(_,v,b){if(G.call(this,v,b),this.render=re.prototype.render,_==null)throw"Cannot tween a null target.";this.target=_=typeof _!="string"?_:re.selector(_)||_;var P=_.jquery||_.length&&_!==t&&_[0]&&(_[0]===t||_[0].nodeType&&_[0].style&&!_.nodeType),N=this.vars.overwrite,F,Z,j;if(this._overwrite=N=N==null?De[re.defaultOverwrite]:typeof N=="number"?N>>0:De[N],(P||_ instanceof Array||_.push&&f(_))&&typeof _[0]!="number")for(this._targets=j=o(_),this._propLookup=[],this._siblings=[],F=0;F<j.length;F++){if(Z=j[F],Z){if(typeof Z=="string"){Z=j[F--]=re.selector(Z),typeof Z=="string"&&j.splice(F+1,1);continue}else if(Z.length&&Z!==t&&Z[0]&&(Z[0]===t||Z[0].nodeType&&Z[0].style&&!Z.nodeType)){j.splice(F--,1),this._targets=j=j.concat(o(Z));continue}}else{j.splice(F--,1);continue}this._siblings[F]=W(Z,this,!1),N===1&&this._siblings[F].length>1&&oe(Z,this,null,1,this._siblings[F])}else this._propLookup={},this._siblings=W(_,this,!1),N===1&&this._siblings.length>1&&oe(_,this,null,1,this._siblings);(this.vars.immediateRender||v===0&&this._delay===0&&this.vars.immediateRender!==!1)&&(this._time=-a,this.render(Math.min(0,-this._delay)))},!0),ae=function(_){return _&&_.length&&_!==t&&_[0]&&(_[0]===t||_[0].nodeType&&_[0].style&&!_.nodeType)},me=function(_,v){var b={},P;for(P in _)!xe[P]&&(!(P in v)||P==="transform"||P==="x"||P==="y"||P==="width"||P==="height"||P==="className"||P==="border")&&(!Oe[P]||Oe[P]&&Oe[P]._autoCSS)&&(b[P]=_[P],delete _[P]);_.css=b};c=re.prototype=new G,c.constructor=re,c.kill()._gc=!1,c.ratio=0,c._firstPT=c._targets=c._overwrittenProps=c._startAt=null,c._notifyPluginsOfEnabled=c._lazy=!1,re.version="2.0.2",re.defaultEase=c._ease=new w(null,null,1,1),re.defaultOverwrite="auto",re.ticker=m,re.autoSleep=120,re.lagSmoothing=function(_,v){m.lagSmoothing(_,v)},re.selector=t.$||t.jQuery||function(_){var v=t.$||t.jQuery;return v?(re.selector=v,v(_)):(n||(n=t.document),n?n.querySelectorAll?n.querySelectorAll(_):n.getElementById(_.charAt(0)==="#"?_.substr(1):_):_)};var ne=[],Ne={},ze=/(?:(-|-=|\+=)?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/ig,ke=/[\+-]=-?[\.\d]/,Ze=function(_){for(var v=this._firstPT,b=1e-6,P;v;)P=v.blob?_===1&&this.end!=null?this.end:_?this.join(""):this.start:v.c*_+v.s,v.m?P=v.m.call(this._tween,P,this._target||v.t,this._tween):P<b&&P>-b&&!v.blob&&(P=0),v.f?v.fp?v.t[v.p](v.fp,P):v.t[v.p](P):v.t[v.p]=P,v=v._next},nt=function(_,v,b,P){var N=[],F=0,Z="",j=0,te,be,se,ge,Fe,Le,Ue;for(N.start=_,N.end=v,_=N[0]=_+"",v=N[1]=v+"",b&&(b(N),_=N[0],v=N[1]),N.length=0,te=_.match(ze)||[],be=v.match(ze)||[],P&&(P._next=null,P.blob=1,N._firstPT=N._applyPT=P),Fe=be.length,ge=0;ge<Fe;ge++)Ue=be[ge],Le=v.substr(F,v.indexOf(Ue,F)-F),Z+=Le||!ge?Le:",",F+=Le.length,j?j=(j+1)%5:Le.substr(-5)==="rgba("&&(j=1),Ue===te[ge]||te.length<=ge?Z+=Ue:(Z&&(N.push(Z),Z=""),se=parseFloat(te[ge]),N.push(se),N._firstPT={_next:N._firstPT,t:N,p:N.length-1,s:se,c:(Ue.charAt(1)==="="?parseInt(Ue.charAt(0)+"1",10)*parseFloat(Ue.substr(2)):parseFloat(Ue)-se)||0,f:0,m:j&&j<4?Math.round:0}),F+=Ue.length;return Z+=v.substr(F),Z&&N.push(Z),N.setRatio=Ze,ke.test(v)&&(N.end=null),N},Se=function(_,v,b,P,N,F,Z,j,te){typeof P=="function"&&(P=P(te||0,_));var be=typeof _[v],se=be!=="function"?"":v.indexOf("set")||typeof _["get"+v.substr(3)]!="function"?v:"get"+v.substr(3),ge=b!=="get"?b:se?Z?_[se](Z):_[se]():_[v],Fe=typeof P=="string"&&P.charAt(1)==="=",Le={t:_,p:v,s:ge,f:be==="function",pg:0,n:N||v,m:F?typeof F=="function"?F:Math.round:0,pr:0,c:Fe?parseInt(P.charAt(0)+"1",10)*parseFloat(P.substr(2)):parseFloat(P)-ge||0},Ue;if((typeof ge!="number"||typeof P!="number"&&!Fe)&&(Z||isNaN(ge)||!Fe&&isNaN(P)||typeof ge=="boolean"||typeof P=="boolean"?(Le.fp=Z,Ue=nt(ge,Fe?parseFloat(Le.s)+Le.c+(Le.s+"").replace(/[0-9\-\.]/g,""):P,j||re.defaultStringFilter,Le),Le={t:Ue,p:"setRatio",s:0,c:1,f:2,pg:0,n:N||v,pr:0,m:0}):(Le.s=parseFloat(ge),Fe||(Le.c=parseFloat(P)-Le.s||0))),Le.c)return(Le._next=this._firstPT)&&(Le._next._prev=Le),this._firstPT=Le,Le},Ce=re._internals={isArray:f,isSelector:ae,lazyTweens:ne,blobDif:nt},Oe=re._plugins={},ee=Ce.tweenLookup={},we=0,xe=Ce.reservedProps={ease:1,delay:1,overwrite:1,onComplete:1,onCompleteParams:1,onCompleteScope:1,useFrames:1,runBackwards:1,startAt:1,onUpdate:1,onUpdateParams:1,onUpdateScope:1,onStart:1,onStartParams:1,onStartScope:1,onReverseComplete:1,onReverseCompleteParams:1,onReverseCompleteScope:1,onRepeat:1,onRepeatParams:1,onRepeatScope:1,easeParams:1,yoyo:1,immediateRender:1,repeat:1,repeatDelay:1,data:1,paused:1,reversed:1,autoCSS:1,lazy:1,onOverwrite:1,callbackScope:1,stringFilter:1,id:1,yoyoEase:1},De={none:0,all:1,auto:2,concurrent:3,allOnStart:4,preexisting:5,true:1,false:0},je=G._rootFramesTimeline=new ce,We=G._rootTimeline=new ce,A=30,H=Ce.lazyRender=function(){var _=ne.length,v;for(Ne={};--_>-1;)v=ne[_],v&&v._lazy!==!1&&(v.render(v._lazy[0],v._lazy[1],!0),v._lazy=!1);ne.length=0};We._startTime=m.time,je._startTime=m.frame,We._active=je._active=!0,setTimeout(H,1),G._updateRoot=re.render=function(){var _,v,b;if(ne.length&&H(),We.render((m.time-We._startTime)*We._timeScale,!1,!1),je.render((m.frame-je._startTime)*je._timeScale,!1,!1),ne.length&&H(),m.frame>=A){A=m.frame+(parseInt(re.autoSleep,10)||120);for(b in ee){for(v=ee[b].tweens,_=v.length;--_>-1;)v[_]._gc&&v.splice(_,1);v.length===0&&delete ee[b]}if(b=We._first,(!b||b._paused)&&re.autoSleep&&!je._first&&m._listeners.tick.length===1){for(;b&&b._paused;)b=b._next;b||m.sleep()}}},m.addEventListener("tick",G._updateRoot);var W=function(_,v,b){var P=_._gsTweenID,N,F;if(ee[P||(_._gsTweenID=P="t"+we++)]||(ee[P]={target:_,tweens:[]}),v&&(N=ee[P].tweens,N[F=N.length]=v,b))for(;--F>-1;)N[F]===v&&N.splice(F,1);return ee[P].tweens},pe=function(_,v,b,P){var N=_.vars.onOverwrite,F,Z;return N&&(F=N(_,v,b,P)),N=re.onOverwrite,N&&(Z=N(_,v,b,P)),F!==!1&&Z!==!1},oe=function(_,v,b,P,N){var F,Z,j,te;if(P===1||P>=4){for(te=N.length,F=0;F<te;F++)if((j=N[F])!==v)j._gc||j._kill(null,_,v)&&(Z=!0);else if(P===5)break;return Z}var be=v._startTime+a,se=[],ge=0,Fe=v._duration===0,Le;for(F=N.length;--F>-1;)(j=N[F])===v||j._gc||j._paused||(j._timeline!==v._timeline?(Le=Le||ye(v,0,Fe),ye(j,Le,Fe)===0&&(se[ge++]=j)):j._startTime<=be&&j._startTime+j.totalDuration()/j._timeScale>be&&((Fe||!j._initted)&&be-j._startTime<=2e-10||(se[ge++]=j)));for(F=ge;--F>-1;)if(j=se[F],te=j._firstPT,P===2&&j._kill(b,_,v)&&(Z=!0),P!==2||!j._firstPT&&j._initted&&te){if(P!==2&&!pe(j,v))continue;j._enabled(!1,!1)&&(Z=!0)}return Z},ye=function(_,v,b){for(var P=_._timeline,N=P._timeScale,F=_._startTime;P._timeline;){if(F+=P._startTime,N*=P._timeScale,P._paused)return-100;P=P._timeline}return F/=N,F>v?F-v:b&&F===v||!_._initted&&F-v<2*a?a:(F+=_.totalDuration()/_._timeScale/N)>v+a?0:F-v-a};c._init=function(){var _=this.vars,v=this._overwrittenProps,b=this._duration,P=!!_.immediateRender,N=_.ease,F,Z,j,te,be,se;if(_.startAt){this._startAt&&(this._startAt.render(-1,!0),this._startAt.kill()),be={};for(te in _.startAt)be[te]=_.startAt[te];if(be.data="isStart",be.overwrite=!1,be.immediateRender=!0,be.lazy=P&&_.lazy!==!1,be.startAt=be.delay=null,be.onUpdate=_.onUpdate,be.onUpdateParams=_.onUpdateParams,be.onUpdateScope=_.onUpdateScope||_.callbackScope||this,this._startAt=re.to(this.target||{},0,be),P){if(this._time>0)this._startAt=null;else if(b!==0)return}}else if(_.runBackwards&&b!==0)if(this._startAt)this._startAt.render(-1,!0),this._startAt.kill(),this._startAt=null;else{this._time!==0&&(P=!1),j={};for(te in _)(!xe[te]||te==="autoCSS")&&(j[te]=_[te]);if(j.overwrite=0,j.data="isFromStart",j.lazy=P&&_.lazy!==!1,j.immediateRender=P,this._startAt=re.to(this.target,0,j),!P)this._startAt._init(),this._startAt._enabled(!1),this.vars.immediateRender&&(this._startAt=null);else if(this._time===0)return}if(this._ease=N=N?N instanceof w?N:typeof N=="function"?new w(N,_.easeParams):V[N]||re.defaultEase:re.defaultEase,_.easeParams instanceof Array&&N.config&&(this._ease=N.config.apply(N,_.easeParams)),this._easeType=this._ease._type,this._easePower=this._ease._power,this._firstPT=null,this._targets)for(se=this._targets.length,F=0;F<se;F++)this._initProps(this._targets[F],this._propLookup[F]={},this._siblings[F],v?v[F]:null,F)&&(Z=!0);else Z=this._initProps(this.target,this._propLookup,this._siblings,v,0);if(Z&&re._onPluginEvent("_onInitAllProps",this),v&&(this._firstPT||typeof this.target!="function"&&this._enabled(!1,!1)),_.runBackwards)for(j=this._firstPT;j;)j.s+=j.c,j.c=-j.c,j=j._next;this._onUpdate=_.onUpdate,this._initted=!0},c._initProps=function(_,v,b,P,N){var F,Z,j,te,be,se;if(_==null)return!1;Ne[_._gsTweenID]&&H(),this.vars.css||_.style&&_!==t&&_.nodeType&&Oe.css&&this.vars.autoCSS!==!1&&me(this.vars,_);for(F in this.vars)if(se=this.vars[F],xe[F])se&&(se instanceof Array||se.push&&f(se))&&se.join("").indexOf("{self}")!==-1&&(this.vars[F]=se=this._swapSelfInParams(se,this));else if(Oe[F]&&(te=new Oe[F])._onInitTween(_,this.vars[F],this,N)){for(this._firstPT=be={_next:this._firstPT,t:te,p:"setRatio",s:0,c:1,f:1,n:F,pg:1,pr:te._priority,m:0},Z=te._overwriteProps.length;--Z>-1;)v[te._overwriteProps[Z]]=this._firstPT;(te._priority||te._onInitAllProps)&&(j=!0),(te._onDisable||te._onEnable)&&(this._notifyPluginsOfEnabled=!0),be._next&&(be._next._prev=be)}else v[F]=Se.call(this,_,F,"get",se,F,0,null,this.vars.stringFilter,N);return P&&this._kill(P,_)?this._initProps(_,v,b,P,N):this._overwrite>1&&this._firstPT&&b.length>1&&oe(_,this,v,this._overwrite,b)?(this._kill(v,_),this._initProps(_,v,b,P,N)):(this._firstPT&&(this.vars.lazy!==!1&&this._duration||this.vars.lazy&&!this._duration)&&(Ne[_._gsTweenID]=!0),j)},c.render=function(_,v,b){var P=this._time,N=this._duration,F=this._rawPrevTime,Z,j,te,be;if(_>=N-1e-7&&_>=0)this._totalTime=this._time=N,this.ratio=this._ease._calcEnd?this._ease.getRatio(1):1,this._reversed||(Z=!0,j="onComplete",b=b||this._timeline.autoRemoveChildren),N===0&&(this._initted||!this.vars.lazy||b)&&(this._startTime===this._timeline._duration&&(_=0),(F<0||_<=0&&_>=-1e-7||F===a&&this.data!=="isPause")&&F!==_&&(b=!0,F>a&&(j="onReverseComplete")),this._rawPrevTime=be=!v||_||F===_?_:a);else if(_<1e-7)this._totalTime=this._time=0,this.ratio=this._ease._calcEnd?this._ease.getRatio(0):0,(P!==0||N===0&&F>0)&&(j="onReverseComplete",Z=this._reversed),_<0&&(this._active=!1,N===0&&(this._initted||!this.vars.lazy||b)&&(F>=0&&!(F===a&&this.data==="isPause")&&(b=!0),this._rawPrevTime=be=!v||_||F===_?_:a)),(!this._initted||this._startAt&&this._startAt.progress())&&(b=!0);else if(this._totalTime=this._time=_,this._easeType){var se=_/N,ge=this._easeType,Fe=this._easePower;(ge===1||ge===3&&se>=.5)&&(se=1-se),ge===3&&(se*=2),Fe===1?se*=se:Fe===2?se*=se*se:Fe===3?se*=se*se*se:Fe===4&&(se*=se*se*se*se),ge===1?this.ratio=1-se:ge===2?this.ratio=se:_/N<.5?this.ratio=se/2:this.ratio=1-se/2}else this.ratio=this._ease.getRatio(_/N);if(!(this._time===P&&!b)){if(!this._initted){if(this._init(),!this._initted||this._gc)return;if(!b&&this._firstPT&&(this.vars.lazy!==!1&&this._duration||this.vars.lazy&&!this._duration)){this._time=this._totalTime=P,this._rawPrevTime=F,ne.push(this),this._lazy=[_,v];return}this._time&&!Z?this.ratio=this._ease.getRatio(this._time/N):Z&&this._ease._calcEnd&&(this.ratio=this._ease.getRatio(this._time===0?0:1))}for(this._lazy!==!1&&(this._lazy=!1),this._active||!this._paused&&this._time!==P&&_>=0&&(this._active=!0),P===0&&(this._startAt&&(_>=0?this._startAt.render(_,!0,b):j||(j="_dummyGS")),this.vars.onStart&&(this._time!==0||N===0)&&(v||this._callback("onStart"))),te=this._firstPT;te;)te.f?te.t[te.p](te.c*this.ratio+te.s):te.t[te.p]=te.c*this.ratio+te.s,te=te._next;this._onUpdate&&(_<0&&this._startAt&&_!==-1e-4&&this._startAt.render(_,!0,b),v||(this._time!==P||Z||b)&&this._callback("onUpdate")),j&&(!this._gc||b)&&(_<0&&this._startAt&&!this._onUpdate&&_!==-1e-4&&this._startAt.render(_,!0,b),Z&&(this._timeline.autoRemoveChildren&&this._enabled(!1,!1),this._active=!1),!v&&this.vars[j]&&this._callback(j),N===0&&this._rawPrevTime===a&&be!==a&&(this._rawPrevTime=0))}},c._kill=function(_,v,b){if(_==="all"&&(_=null),_==null&&(v==null||v===this.target))return this._lazy=!1,this._enabled(!1,!1);v=typeof v!="string"?v||this._targets||this.target:re.selector(v)||v;var P=b&&this._time&&b._startTime===this._startTime&&this._timeline===b._timeline,N=this._firstPT,F,Z,j,te,be,se,ge,Fe,Le;if((f(v)||ae(v))&&typeof v[0]!="number")for(F=v.length;--F>-1;)this._kill(_,v[F],b)&&(se=!0);else{if(this._targets){for(F=this._targets.length;--F>-1;)if(v===this._targets[F]){be=this._propLookup[F]||{},this._overwrittenProps=this._overwrittenProps||[],Z=this._overwrittenProps[F]=_?this._overwrittenProps[F]||{}:"all";break}}else{if(v!==this.target)return!1;be=this._propLookup,Z=this._overwrittenProps=_?this._overwrittenProps||{}:"all"}if(be){if(ge=_||be,Fe=_!==Z&&Z!=="all"&&_!==be&&(typeof _!="object"||!_._tempKill),b&&(re.onOverwrite||this.vars.onOverwrite)){for(j in ge)be[j]&&(Le||(Le=[]),Le.push(j));if((Le||!_)&&!pe(this,b,v,Le))return!1}for(j in ge)(te=be[j])&&(P&&(te.f?te.t[te.p](te.s):te.t[te.p]=te.s,se=!0),te.pg&&te.t._kill(ge)&&(se=!0),(!te.pg||te.t._overwriteProps.length===0)&&(te._prev?te._prev._next=te._next:te===this._firstPT&&(this._firstPT=te._next),te._next&&(te._next._prev=te._prev),te._next=te._prev=null),delete be[j]),Fe&&(Z[j]=1);!this._firstPT&&this._initted&&N&&this._enabled(!1,!1)}}return se},c.invalidate=function(){return this._notifyPluginsOfEnabled&&re._onPluginEvent("_onDisable",this),this._firstPT=this._overwrittenProps=this._startAt=this._onUpdate=null,this._notifyPluginsOfEnabled=this._active=this._lazy=!1,this._propLookup=this._targets?{}:[],G.prototype.invalidate.call(this),this.vars.immediateRender&&(this._time=-a,this.render(Math.min(0,-this._delay))),this},c._enabled=function(_,v){if(p||m.wake(),_&&this._gc){var b=this._targets,P;if(b)for(P=b.length;--P>-1;)this._siblings[P]=W(b[P],this,!0);else this._siblings=W(this.target,this,!0)}return G.prototype._enabled.call(this,_,v),this._notifyPluginsOfEnabled&&this._firstPT?re._onPluginEvent(_?"_onEnable":"_onDisable",this):!1},re.to=function(_,v,b){return new re(_,v,b)},re.from=function(_,v,b){return b.runBackwards=!0,b.immediateRender=b.immediateRender!=!1,new re(_,v,b)},re.fromTo=function(_,v,b,P){return P.startAt=b,P.immediateRender=P.immediateRender!=!1&&b.immediateRender!=!1,new re(_,v,P)},re.delayedCall=function(_,v,b,P,N){return new re(v,0,{delay:_,onComplete:v,onCompleteParams:b,callbackScope:P,onReverseComplete:v,onReverseCompleteParams:b,immediateRender:!1,lazy:!1,useFrames:N,overwrite:0})},re.set=function(_,v){return new re(_,0,v)},re.getTweensOf=function(_,v){if(_==null)return[];_=typeof _!="string"?_:re.selector(_)||_;var b,P,N,F;if((f(_)||ae(_))&&typeof _[0]!="number"){for(b=_.length,P=[];--b>-1;)P=P.concat(re.getTweensOf(_[b],v));for(b=P.length;--b>-1;)for(F=P[b],N=b;--N>-1;)F===P[N]&&P.splice(b,1)}else if(_._gsTweenID)for(P=W(_).concat(),b=P.length;--b>-1;)(P[b]._gc||v&&!P[b].isActive())&&P.splice(b,1);return P||[]},re.killTweensOf=re.killDelayedCallsTo=function(_,v,b){typeof v=="object"&&(b=v,v=!1);for(var P=re.getTweensOf(_,v),N=P.length;--N>-1;)P[N]._kill(b,_)};var ve=T("plugins.TweenPlugin",function(_,v){this._overwriteProps=(_||"").split(","),this._propName=this._overwriteProps[0],this._priority=v||0,this._super=ve.prototype},!0);if(c=ve.prototype,ve.version="1.19.0",ve.API=2,c._firstPT=null,c._addTween=Se,c.setRatio=Ze,c._kill=function(_){var v=this._overwriteProps,b=this._firstPT,P;if(_[this._propName]!=null)this._overwriteProps=[];else for(P=v.length;--P>-1;)_[v[P]]!=null&&v.splice(P,1);for(;b;)_[b.n]!=null&&(b._next&&(b._next._prev=b._prev),b._prev?(b._prev._next=b._next,b._prev=null):this._firstPT===b&&(this._firstPT=b._next)),b=b._next;return!1},c._mod=c._roundProps=function(_){for(var v=this._firstPT,b;v;)b=_[this._propName]||v.n!=null&&_[v.n.split(this._propName+"_").join("")],b&&typeof b=="function"&&(v.f===2?v.t._applyPT.m=b:v.m=b),v=v._next},re._onPluginEvent=function(_,v){var b=v._firstPT,P,N,F,Z,j;if(_==="_onInitAllProps"){for(;b;){for(j=b._next,N=F;N&&N.pr>b.pr;)N=N._next;(b._prev=N?N._prev:Z)?b._prev._next=b:F=b,(b._next=N)?N._prev=b:Z=b,b=j}b=v._firstPT=F}for(;b;)b.pg&&typeof b.t[_]=="function"&&b.t[_]()&&(P=!0),b=b._next;return P},ve.activate=function(_){for(var v=_.length;--v>-1;)_[v].API===ve.API&&(Oe[new _[v]()._propName]=_[v]);return!0},h.plugin=function(_){if(!_||!_.propName||!_.init||!_.API)throw"illegal plugin definition.";var v=_.propName,b=_.priority||0,P=_.overwriteProps,N={init:"_onInitTween",set:"setRatio",kill:"_kill",round:"_mod",mod:"_mod",initAll:"_onInitAllProps"},F=T("plugins."+v.charAt(0).toUpperCase()+v.substr(1)+"Plugin",function(){ve.call(this,v,b),this._overwriteProps=P||[]},_.global===!0),Z=F.prototype=new ve(v),j;Z.constructor=F,F.API=_.API;for(j in N)typeof _[j]=="function"&&(Z[N[j]]=_[j]);return F.version=_.version,ve.activate([F]),F},u=t._gsQueue,u){for(d=0;d<u.length;d++)u[d]();for(c in y)y[c].func||t.console.log("GSAP encountered missing dependency: "+c)}return p=!1,re}(Lt),Nt=Lt.GreenSockGlobals,Cu=Nt.com.greensock,Mr=Cu.core.SimpleTimeline,Qt=Cu.core.Animation,en=Nt.Ease;Nt.Linear;Nt.Power1;Nt.Power2;Nt.Power3;Nt.Power4;var za=Nt.TweenPlugin;Cu.events.EventDispatcher;/*!
 * VERSION: 2.0.2
 * DATE: 2018-08-27
 * UPDATES AND DOCS AT: http://greensock.com
 *
 * @license Copyright (c) 2008-2018, GreenSock. All rights reserved.
 * This work is subject to the terms at http://greensock.com/standard-license or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 * 
 * @author: Jack Doyle, jack@greensock.com
 **/Lt._gsDefine("TweenMax",["core.Animation","core.SimpleTimeline","TweenLite"],function(){var t=function(c){var m=[],p=c.length,y;for(y=0;y!==p;m.push(c[y++]));return m},e=function(c,m,p){var y=c.cycle,g,h;for(g in y)h=y[g],c[g]=typeof h=="function"?h(p,m[p]):h[p%h.length];delete c.cycle},n=function(c,m,p){lt.call(this,c,m,p),this._cycle=0,this._yoyo=this.vars.yoyo===!0||!!this.vars.yoyoEase,this._repeat=this.vars.repeat||0,this._repeatDelay=this.vars.repeatDelay||0,this._repeat&&this._uncache(!0),this.render=n.prototype.render},i=1e-10,r=lt._internals,s=r.isSelector,a=r.isArray,o=n.prototype=lt.to({},.1,{}),l=[];n.version="2.0.2",o.constructor=n,o.kill()._gc=!1,n.killTweensOf=n.killDelayedCallsTo=lt.killTweensOf,n.getTweensOf=lt.getTweensOf,n.lagSmoothing=lt.lagSmoothing,n.ticker=lt.ticker,n.render=lt.render,o.invalidate=function(){return this._yoyo=this.vars.yoyo===!0||!!this.vars.yoyoEase,this._repeat=this.vars.repeat||0,this._repeatDelay=this.vars.repeatDelay||0,this._yoyoEase=null,this._uncache(!0),lt.prototype.invalidate.call(this)},o.updateTo=function(c,m){var p=this.ratio,y=this.vars.immediateRender||c.immediateRender,g;m&&this._startTime<this._timeline._time&&(this._startTime=this._timeline._time,this._uncache(!1),this._gc?this._enabled(!0,!1):this._timeline.insert(this,this._startTime-this._delay));for(g in c)this.vars[g]=c[g];if(this._initted||y){if(m)this._initted=!1,y&&this.render(0,!0,!0);else if(this._gc&&this._enabled(!0,!1),this._notifyPluginsOfEnabled&&this._firstPT&&lt._onPluginEvent("_onDisable",this),this._time/this._duration>.998){var h=this._totalTime;this.render(0,!0,!1),this._initted=!1,this.render(h,!0,!1)}else if(this._initted=!1,this._init(),this._time>0||y)for(var T=1/(1-p),M=this._firstPT,w;M;)w=M.s+M.c,M.c*=T,M.s=w-M.c,M=M._next}return this},o.render=function(c,m,p){this._initted||this._duration===0&&this.vars.repeat&&this.invalidate();var y=this._dirty?this.totalDuration():this._totalDuration,g=this._time,h=this._totalTime,T=this._cycle,M=this._duration,w=this._rawPrevTime,V,L,z,X,$,E,R,G,q;if(c>=y-1e-7&&c>=0?(this._totalTime=y,this._cycle=this._repeat,this._yoyo&&this._cycle&1?(this._time=0,this.ratio=this._ease._calcEnd?this._ease.getRatio(0):0):(this._time=M,this.ratio=this._ease._calcEnd?this._ease.getRatio(1):1),this._reversed||(V=!0,L="onComplete",p=p||this._timeline.autoRemoveChildren),M===0&&(this._initted||!this.vars.lazy||p)&&(this._startTime===this._timeline._duration&&(c=0),(w<0||c<=0&&c>=-1e-7||w===i&&this.data!=="isPause")&&w!==c&&(p=!0,w>i&&(L="onReverseComplete")),this._rawPrevTime=G=!m||c||w===c?c:i)):c<1e-7?(this._totalTime=this._time=this._cycle=0,this.ratio=this._ease._calcEnd?this._ease.getRatio(0):0,(h!==0||M===0&&w>0)&&(L="onReverseComplete",V=this._reversed),c<0&&(this._active=!1,M===0&&(this._initted||!this.vars.lazy||p)&&(w>=0&&(p=!0),this._rawPrevTime=G=!m||c||w===c?c:i)),this._initted||(p=!0)):(this._totalTime=this._time=c,this._repeat!==0&&(X=M+this._repeatDelay,this._cycle=this._totalTime/X>>0,this._cycle!==0&&this._cycle===this._totalTime/X&&h<=c&&this._cycle--,this._time=this._totalTime-this._cycle*X,this._yoyo&&this._cycle&1&&(this._time=M-this._time,q=this._yoyoEase||this.vars.yoyoEase,q&&(this._yoyoEase||(q===!0&&!this._initted?(q=this.vars.ease,this._yoyoEase=q=q?q instanceof en?q:typeof q=="function"?new en(q,this.vars.easeParams):en.map[q]||lt.defaultEase:lt.defaultEase):this._yoyoEase=q=q===!0?this._ease:q instanceof en?q:en.map[q]),this.ratio=q?1-q.getRatio((M-this._time)/M):0)),this._time>M?this._time=M:this._time<0&&(this._time=0)),this._easeType&&!q?($=this._time/M,E=this._easeType,R=this._easePower,(E===1||E===3&&$>=.5)&&($=1-$),E===3&&($*=2),R===1?$*=$:R===2?$*=$*$:R===3?$*=$*$*$:R===4&&($*=$*$*$*$),E===1?this.ratio=1-$:E===2?this.ratio=$:this._time/M<.5?this.ratio=$/2:this.ratio=1-$/2):q||(this.ratio=this._ease.getRatio(this._time/M))),g===this._time&&!p&&T===this._cycle){h!==this._totalTime&&this._onUpdate&&(m||this._callback("onUpdate"));return}else if(!this._initted){if(this._init(),!this._initted||this._gc)return;if(!p&&this._firstPT&&(this.vars.lazy!==!1&&this._duration||this.vars.lazy&&!this._duration)){this._time=g,this._totalTime=h,this._rawPrevTime=w,this._cycle=T,r.lazyTweens.push(this),this._lazy=[c,m];return}this._time&&!V&&!q?this.ratio=this._ease.getRatio(this._time/M):V&&this._ease._calcEnd&&!q&&(this.ratio=this._ease.getRatio(this._time===0?0:1))}for(this._lazy!==!1&&(this._lazy=!1),this._active||!this._paused&&this._time!==g&&c>=0&&(this._active=!0),h===0&&(this._initted===2&&c>0&&this._init(),this._startAt&&(c>=0?this._startAt.render(c,!0,p):L||(L="_dummyGS")),this.vars.onStart&&(this._totalTime!==0||M===0)&&(m||this._callback("onStart"))),z=this._firstPT;z;)z.f?z.t[z.p](z.c*this.ratio+z.s):z.t[z.p]=z.c*this.ratio+z.s,z=z._next;this._onUpdate&&(c<0&&this._startAt&&this._startTime&&this._startAt.render(c,!0,p),m||(this._totalTime!==h||L)&&this._callback("onUpdate")),this._cycle!==T&&(m||this._gc||this.vars.onRepeat&&this._callback("onRepeat")),L&&(!this._gc||p)&&(c<0&&this._startAt&&!this._onUpdate&&this._startTime&&this._startAt.render(c,!0,p),V&&(this._timeline.autoRemoveChildren&&this._enabled(!1,!1),this._active=!1),!m&&this.vars[L]&&this._callback(L),M===0&&this._rawPrevTime===i&&G!==i&&(this._rawPrevTime=0))},n.to=function(c,m,p){return new n(c,m,p)},n.from=function(c,m,p){return p.runBackwards=!0,p.immediateRender=p.immediateRender!=!1,new n(c,m,p)},n.fromTo=function(c,m,p,y){return y.startAt=p,y.immediateRender=y.immediateRender!=!1&&p.immediateRender!=!1,new n(c,m,y)},n.staggerTo=n.allTo=function(c,m,p,y,g,h,T){y=y||0;var M=0,w=[],V=function(){p.onComplete&&p.onComplete.apply(p.onCompleteScope||this,arguments),g.apply(T||p.callbackScope||this,h||l)},L=p.cycle,z=p.startAt&&p.startAt.cycle,X,$,E,R;for(a(c)||(typeof c=="string"&&(c=lt.selector(c)||c),s(c)&&(c=t(c))),c=c||[],y<0&&(c=t(c),c.reverse(),y*=-1),X=c.length-1,E=0;E<=X;E++){$={};for(R in p)$[R]=p[R];if(L&&(e($,c,E),$.duration!=null&&(m=$.duration,delete $.duration)),z){z=$.startAt={};for(R in p.startAt)z[R]=p.startAt[R];e($.startAt,c,E)}$.delay=M+($.delay||0),E===X&&g&&($.onComplete=V),w[E]=new n(c[E],m,$),M+=y}return w},n.staggerFrom=n.allFrom=function(c,m,p,y,g,h,T){return p.runBackwards=!0,p.immediateRender=p.immediateRender!=!1,n.staggerTo(c,m,p,y,g,h,T)},n.staggerFromTo=n.allFromTo=function(c,m,p,y,g,h,T,M){return y.startAt=p,y.immediateRender=y.immediateRender!=!1&&p.immediateRender!=!1,n.staggerTo(c,m,y,g,h,T,M)},n.delayedCall=function(c,m,p,y,g){return new n(m,0,{delay:c,onComplete:m,onCompleteParams:p,callbackScope:y,onReverseComplete:m,onReverseCompleteParams:p,immediateRender:!1,useFrames:g,overwrite:0})},n.set=function(c,m){return new n(c,0,m)},n.isTweening=function(c){return lt.getTweensOf(c,!0).length>0};var f=function(c,m){for(var p=[],y=0,g=c._first;g;)g instanceof lt?p[y++]=g:(m&&(p[y++]=g),p=p.concat(f(g,m)),y=p.length),g=g._next;return p},u=n.getAllTweens=function(c){return f(Qt._rootTimeline,c).concat(f(Qt._rootFramesTimeline,c))};n.killAll=function(c,m,p,y){m==null&&(m=!0),p==null&&(p=!0);var g=u(y!=!1),h=g.length,T=m&&p&&y,M,w,V;for(V=0;V<h;V++)w=g[V],(T||w instanceof Mr||(M=w.target===w.vars.onComplete)&&p||m&&!M)&&(c?w.totalTime(w._reversed?0:w.totalDuration()):w._enabled(!1,!1))},n.killChildTweensOf=function(c,m){if(c!=null){var p=r.tweenLookup,y,g,h,T,M;if(typeof c=="string"&&(c=lt.selector(c)||c),s(c)&&(c=t(c)),a(c)){for(T=c.length;--T>-1;)n.killChildTweensOf(c[T],m);return}y=[];for(h in p)for(g=p[h].target.parentNode;g;)g===c&&(y=y.concat(p[h].tweens)),g=g.parentNode;for(M=y.length,T=0;T<M;T++)m&&y[T].totalTime(y[T].totalDuration()),y[T]._enabled(!1,!1)}};var d=function(c,m,p,y){m=m!==!1,p=p!==!1,y=y!==!1;for(var g=u(y),h=m&&p&&y,T=g.length,M,w;--T>-1;)w=g[T],(h||w instanceof Mr||(M=w.target===w.vars.onComplete)&&p||m&&!M)&&w.paused(c)};return n.pauseAll=function(c,m,p){d(!0,c,m,p)},n.resumeAll=function(c,m,p){d(!1,c,m,p)},n.globalTimeScale=function(c){var m=Qt._rootTimeline,p=lt.ticker.time;return arguments.length?(c=c||i,m._startTime=p-(p-m._startTime)*m._timeScale/c,m=Qt._rootFramesTimeline,p=lt.ticker.frame,m._startTime=p-(p-m._startTime)*m._timeScale/c,m._timeScale=Qt._rootTimeline._timeScale=c,c):m._timeScale},o.progress=function(c,m){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&this._cycle&1?1-c:c)+this._cycle*(this._duration+this._repeatDelay),m):this._time/this.duration()},o.totalProgress=function(c,m){return arguments.length?this.totalTime(this.totalDuration()*c,m):this._totalTime/this.totalDuration()},o.time=function(c,m){return arguments.length?(this._dirty&&this.totalDuration(),c>this._duration&&(c=this._duration),this._yoyo&&this._cycle&1?c=this._duration-c+this._cycle*(this._duration+this._repeatDelay):this._repeat!==0&&(c+=this._cycle*(this._duration+this._repeatDelay)),this.totalTime(c,m)):this._time},o.duration=function(c){return arguments.length?Qt.prototype.duration.call(this,c):this._duration},o.totalDuration=function(c){return arguments.length?this._repeat===-1?this:this.duration((c-this._repeat*this._repeatDelay)/(this._repeat+1)):(this._dirty&&(this._totalDuration=this._repeat===-1?999999999999:this._duration*(this._repeat+1)+this._repeatDelay*this._repeat,this._dirty=!1),this._totalDuration)},o.repeat=function(c){return arguments.length?(this._repeat=c,this._uncache(!0)):this._repeat},o.repeatDelay=function(c){return arguments.length?(this._repeatDelay=c,this._uncache(!0)):this._repeatDelay},o.yoyo=function(c){return arguments.length?(this._yoyo=c,this):this._yoyo},n},!0);var Bb=Nt.TweenMax;/*!
 * VERSION: 2.0.2
 * DATE: 2018-08-27
 * UPDATES AND DOCS AT: http://greensock.com
 *
 * @license Copyright (c) 2008-2018, GreenSock. All rights reserved.
 * This work is subject to the terms at http://greensock.com/standard-license or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 * 
 * @author: Jack Doyle, jack@greensock.com
 */Lt._gsDefine("plugins.CSSPlugin",["plugins.TweenPlugin","TweenLite"],function(){var t=function(){za.call(this,"css"),this._overwriteProps.length=0,this.setRatio=t.prototype.setRatio},e=Lt._gsDefine.globals,n,i,r,s,a={},o=t.prototype=new za("css");o.constructor=t,t.version="2.0.2",t.API=2,t.defaultTransformPerspective=0,t.defaultSkewType="compensated",t.defaultSmoothOrigin=!0,o="px",t.suffixMap={top:o,right:o,bottom:o,left:o,width:o,height:o,fontSize:o,padding:o,margin:o,perspective:o,lineHeight:""};var l=/(?:\-|\.|\b)(\d|\.|e\-)+/g,f=/(?:\d|\-\d|\.\d|\-\.\d|\+=\d|\-=\d|\+=.\d|\-=\.\d)+/g,u=/(?:\+=|\-=|\-|\b)[\d\-\.]+[a-zA-Z0-9]*(?:%|\b)/gi,d=/(?![+-]?\d*\.?\d+|[+-]|e[+-]\d+)[^0-9]/g,c=/(?:\d|\-|\+|=|#|\.)*/g,m=/opacity *= *([^)]*)/i,p=/opacity:([^;]*)/i,y=/alpha\(opacity *=.+?\)/i,g=/^(rgb|hsl)/,h=/([A-Z])/g,T=/-([a-z])/gi,M=/(^(?:url\(\"|url\())|(?:(\"\))$|\)$)/gi,w=function(x,S){return S.toUpperCase()},V=/(?:Left|Right|Width)/i,L=/(M11|M12|M21|M22)=[\d\-\.e]+/gi,z=/progid\:DXImageTransform\.Microsoft\.Matrix\(.+?\)/i,X=/,(?=[^\)]*(?:\(|$))/gi,$=/[\s,\(]/i,E=Math.PI/180,R=180/Math.PI,G={},q={style:{}},ce=Lt.document||{createElement:function(){return q}},re=function(x,S){return ce.createElementNS?ce.createElementNS(S||"http://www.w3.org/1999/xhtml",x):ce.createElement(x)},ae=re("div"),me=re("img"),ne=t._internals={_specialProps:a},Ne=(Lt.navigator||{}).userAgent||"",ze,ke,Ze,nt,Se,Ce,Oe=function(){var x=Ne.indexOf("Android"),S=re("a");return Ze=Ne.indexOf("Safari")!==-1&&Ne.indexOf("Chrome")===-1&&(x===-1||parseFloat(Ne.substr(x+8,2))>3),Se=Ze&&parseFloat(Ne.substr(Ne.indexOf("Version/")+8,2))<6,nt=Ne.indexOf("Firefox")!==-1,(/MSIE ([0-9]{1,}[\.0-9]{0,})/.exec(Ne)||/Trident\/.*rv:([0-9]{1,}[\.0-9]{0,})/.exec(Ne))&&(Ce=parseFloat(RegExp.$1)),S?(S.style.cssText="top:1px;opacity:.55;",/^0.55/.test(S.style.opacity)):!1}(),ee=function(x){return m.test(typeof x=="string"?x:(x.currentStyle?x.currentStyle.filter:x.style.filter)||"")?parseFloat(RegExp.$1)/100:1},we=function(x){Lt.console},xe,De,je="",We="",A=function(x,S){S=S||ae;var D=S.style,I,C;if(D[x]!==void 0)return x;for(x=x.charAt(0).toUpperCase()+x.substr(1),I=["O","Moz","ms","Ms","Webkit"],C=5;--C>-1&&D[I[C]+x]===void 0;);return C>=0?(We=C===3?"ms":I[C],je="-"+We.toLowerCase()+"-",We+x):null},H=(typeof window<"u"?window:ce.defaultView||{getComputedStyle:function(){}}).getComputedStyle,W=t.getStyle=function(x,S,D,I,C){var k;return!Oe&&S==="opacity"?ee(x):(!I&&x.style[S]?k=x.style[S]:(D=D||H(x))?k=D[S]||D.getPropertyValue(S)||D.getPropertyValue(S.replace(h,"-$1").toLowerCase()):x.currentStyle&&(k=x.currentStyle[S]),C!=null&&(!k||k==="none"||k==="auto"||k==="auto auto")?C:k)},pe=ne.convertToPixels=function(x,S,D,I,C){if(I==="px"||!I&&S!=="lineHeight")return D;if(I==="auto"||!D)return 0;var k=V.test(S),U=x,B=ae.style,Y=D<0,le=D===1,Q,Me,ue;if(Y&&(D=-D),le&&(D*=100),S==="lineHeight"&&!I)Me=H(x).lineHeight,x.style.lineHeight=D,Q=parseFloat(H(x).lineHeight),x.style.lineHeight=Me;else if(I==="%"&&S.indexOf("border")!==-1)Q=D/100*(k?x.clientWidth:x.clientHeight);else{if(B.cssText="border:0 solid red;position:"+W(x,"position")+";line-height:0;",I==="%"||!U.appendChild||I.charAt(0)==="v"||I==="rem"){if(U=x.parentNode||ce.body,W(U,"display").indexOf("flex")!==-1&&(B.position="absolute"),Me=U._gsCache,ue=lt.ticker.frame,Me&&k&&Me.time===ue)return Me.width*D/100;B[k?"width":"height"]=D+I}else B[k?"borderLeftWidth":"borderTopWidth"]=D+I;U.appendChild(ae),Q=parseFloat(ae[k?"offsetWidth":"offsetHeight"]),U.removeChild(ae),k&&I==="%"&&t.cacheWidths!==!1&&(Me=U._gsCache=U._gsCache||{},Me.time=ue,Me.width=Q/D*100),Q===0&&!C&&(Q=pe(x,S,D,I,!0))}return le&&(Q/=100),Y?-Q:Q},oe=ne.calculateOffset=function(x,S,D){if(W(x,"position",D)!=="absolute")return 0;var I=S==="left"?"Left":"Top",C=W(x,"margin"+I,D);return x["offset"+I]-(pe(x,S,parseFloat(C),C.replace(c,""))||0)},ye=function(x,S){var D={},I,C,k;if(S=S||H(x,null))if(I=S.length)for(;--I>-1;)k=S[I],(k.indexOf("-transform")===-1||dt===k)&&(D[k.replace(T,w)]=S.getPropertyValue(k));else for(I in S)(I.indexOf("Transform")===-1||Be===I)&&(D[I]=S[I]);else if(S=x.currentStyle||x.style)for(I in S)typeof I=="string"&&D[I]===void 0&&(D[I.replace(T,w)]=S[I]);return Oe||(D.opacity=ee(x)),C=Ai(x,S,!1),D.rotation=C.rotation,D.skewX=C.skewX,D.scaleX=C.scaleX,D.scaleY=C.scaleY,D.x=C.x,D.y=C.y,Et&&(D.z=C.z,D.rotationX=C.rotationX,D.rotationY=C.rotationY,D.scaleZ=C.scaleZ),D.filters&&delete D.filters,D},ve=function(x,S,D,I,C){var k={},U=x.style,B,Y,le;for(Y in D)Y!=="cssText"&&Y!=="length"&&isNaN(Y)&&(S[Y]!==(B=D[Y])||C&&C[Y])&&Y.indexOf("Origin")===-1&&(typeof B=="number"||typeof B=="string")&&(k[Y]=B==="auto"&&(Y==="left"||Y==="top")?oe(x,Y):(B===""||B==="auto"||B==="none")&&typeof S[Y]=="string"&&S[Y].replace(d,"")!==""?0:B,U[Y]!==void 0&&(le=new Ue(U,Y,U[Y],le)));if(I)for(Y in I)Y!=="className"&&(k[Y]=I[Y]);return{difs:k,firstMPT:le}},_={width:["Left","Right"],height:["Top","Bottom"]},v=["marginLeft","marginRight","marginTop","marginBottom"],b=function(x,S,D){if((x.nodeName+"").toLowerCase()==="svg")return(D||H(x))[S]||0;if(x.getCTM&&Ei(x))return x.getBBox()[S]||0;var I=parseFloat(S==="width"?x.offsetWidth:x.offsetHeight),C=_[S],k=C.length;for(D=D||H(x,null);--k>-1;)I-=parseFloat(W(x,"padding"+C[k],D,!0))||0,I-=parseFloat(W(x,"border"+C[k]+"Width",D,!0))||0;return I},P=function(x,S){if(x==="contain"||x==="auto"||x==="auto auto")return x+" ";(x==null||x==="")&&(x="0 0");var D=x.split(" "),I=x.indexOf("left")!==-1?"0%":x.indexOf("right")!==-1?"100%":D[0],C=x.indexOf("top")!==-1?"0%":x.indexOf("bottom")!==-1?"100%":D[1],k;if(D.length>3&&!S){for(D=x.split(", ").join(",").split(","),x=[],k=0;k<D.length;k++)x.push(P(D[k]));return x.join(",")}return C==null?C=I==="center"?"50%":"0":C==="center"&&(C="50%"),(I==="center"||isNaN(parseFloat(I))&&(I+"").indexOf("=")===-1)&&(I="50%"),x=I+" "+C+(D.length>2?" "+D[2]:""),S&&(S.oxp=I.indexOf("%")!==-1,S.oyp=C.indexOf("%")!==-1,S.oxr=I.charAt(1)==="=",S.oyr=C.charAt(1)==="=",S.ox=parseFloat(I.replace(d,"")),S.oy=parseFloat(C.replace(d,"")),S.v=x),S||x},N=function(x,S){return typeof x=="function"&&(x=x(De,xe)),typeof x=="string"&&x.charAt(1)==="="?parseInt(x.charAt(0)+"1",10)*parseFloat(x.substr(2)):parseFloat(x)-parseFloat(S)||0},F=function(x,S){typeof x=="function"&&(x=x(De,xe));var D=typeof x=="string"&&x.charAt(1)==="=";return typeof x=="string"&&x.charAt(x.length-2)==="v"&&(x=(D?x.substr(0,2):0)+window["inner"+(x.substr(-2)==="vh"?"Height":"Width")]*(parseFloat(D?x.substr(2):x)/100)),x==null?S:D?parseInt(x.charAt(0)+"1",10)*parseFloat(x.substr(2))+S:parseFloat(x)||0},Z=function(x,S,D,I){var C=1e-6,k,U,B,Y,le;return typeof x=="function"&&(x=x(De,xe)),x==null?Y=S:typeof x=="number"?Y=x:(k=360,U=x.split("_"),le=x.charAt(1)==="=",B=(le?parseInt(x.charAt(0)+"1",10)*parseFloat(U[0].substr(2)):parseFloat(U[0]))*(x.indexOf("rad")===-1?1:R)-(le?0:S),U.length&&(I&&(I[D]=S+B),x.indexOf("short")!==-1&&(B=B%k,B!==B%(k/2)&&(B=B<0?B+k:B-k)),x.indexOf("_cw")!==-1&&B<0?B=(B+k*9999999999)%k-(B/k|0)*k:x.indexOf("ccw")!==-1&&B>0&&(B=(B-k*9999999999)%k-(B/k|0)*k)),Y=S+B),Y<C&&Y>-C&&(Y=0),Y},j={aqua:[0,255,255],lime:[0,255,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,255],navy:[0,0,128],white:[255,255,255],fuchsia:[255,0,255],olive:[128,128,0],yellow:[255,255,0],orange:[255,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[255,0,0],pink:[255,192,203],cyan:[0,255,255],transparent:[255,255,255,0]},te=function(x,S,D){return x=x<0?x+1:x>1?x-1:x,(x*6<1?S+(D-S)*x*6:x<.5?D:x*3<2?S+(D-S)*(2/3-x)*6:S)*255+.5|0},be=t.parseColor=function(x,S){var D,I,C,k,U,B,Y,le,Q,Me,ue;if(!x)D=j.black;else if(typeof x=="number")D=[x>>16,x>>8&255,x&255];else{if(x.charAt(x.length-1)===","&&(x=x.substr(0,x.length-1)),j[x])D=j[x];else if(x.charAt(0)==="#")x.length===4&&(I=x.charAt(1),C=x.charAt(2),k=x.charAt(3),x="#"+I+I+C+C+k+k),x=parseInt(x.substr(1),16),D=[x>>16,x>>8&255,x&255];else if(x.substr(0,3)==="hsl"){if(D=ue=x.match(l),!S)U=Number(D[0])%360/360,B=Number(D[1])/100,Y=Number(D[2])/100,C=Y<=.5?Y*(B+1):Y+B-Y*B,I=Y*2-C,D.length>3&&(D[3]=Number(D[3])),D[0]=te(U+1/3,I,C),D[1]=te(U,I,C),D[2]=te(U-1/3,I,C);else if(x.indexOf("=")!==-1)return x.match(f)}else D=x.match(l)||j.transparent;D[0]=Number(D[0]),D[1]=Number(D[1]),D[2]=Number(D[2]),D.length>3&&(D[3]=Number(D[3]))}return S&&!ue&&(I=D[0]/255,C=D[1]/255,k=D[2]/255,le=Math.max(I,C,k),Q=Math.min(I,C,k),Y=(le+Q)/2,le===Q?U=B=0:(Me=le-Q,B=Y>.5?Me/(2-le-Q):Me/(le+Q),U=le===I?(C-k)/Me+(C<k?6:0):le===C?(k-I)/Me+2:(I-C)/Me+4,U*=60),D[0]=U+.5|0,D[1]=B*100+.5|0,D[2]=Y*100+.5|0),D},se=function(x,S){var D=x.match(ge)||[],I=0,C="",k,U,B;if(!D.length)return x;for(k=0;k<D.length;k++)U=D[k],B=x.substr(I,x.indexOf(U,I)-I),I+=B.length+U.length,U=be(U,S),U.length===3&&U.push(1),C+=B+(S?"hsla("+U[0]+","+U[1]+"%,"+U[2]+"%,"+U[3]:"rgba("+U.join(","))+")";return C+x.substr(I)},ge="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3}){1,2}\\b";for(o in j)ge+="|"+o+"\\b";ge=new RegExp(ge+")","gi"),t.colorStringFilter=function(x){var S=x[0]+" "+x[1],D;ge.test(S)&&(D=S.indexOf("hsl(")!==-1||S.indexOf("hsla(")!==-1,x[0]=se(x[0],D),x[1]=se(x[1],D)),ge.lastIndex=0},lt.defaultStringFilter||(lt.defaultStringFilter=t.colorStringFilter);var Fe=function(x,S,D,I){if(x==null)return function(ue){return ue};var C=S?(x.match(ge)||[""])[0]:"",k=x.split(C).join("").match(u)||[],U=x.substr(0,x.indexOf(k[0])),B=x.charAt(x.length-1)===")"?")":"",Y=x.indexOf(" ")!==-1?" ":",",le=k.length,Q=le>0?k[0].replace(l,""):"",Me;return le?S?(Me=function(ue){var K,Ie,Pe,Te;if(typeof ue=="number")ue+=Q;else if(I&&X.test(ue)){for(Te=ue.replace(X,"|").split("|"),Pe=0;Pe<Te.length;Pe++)Te[Pe]=Me(Te[Pe]);return Te.join(",")}if(K=(ue.match(ge)||[C])[0],Ie=ue.split(K).join("").match(u)||[],Pe=Ie.length,le>Pe--)for(;++Pe<le;)Ie[Pe]=D?Ie[(Pe-1)/2|0]:k[Pe];return U+Ie.join(Y)+Y+K+B+(ue.indexOf("inset")!==-1?" inset":"")},Me):(Me=function(ue){var K,Ie,Pe;if(typeof ue=="number")ue+=Q;else if(I&&X.test(ue)){for(Ie=ue.replace(X,"|").split("|"),Pe=0;Pe<Ie.length;Pe++)Ie[Pe]=Me(Ie[Pe]);return Ie.join(",")}if(K=ue.match(u)||[],Pe=K.length,le>Pe--)for(;++Pe<le;)K[Pe]=D?K[(Pe-1)/2|0]:k[Pe];return U+K.join(Y)+B},Me):function(ue){return ue}},Le=function(x){return x=x.split(","),function(S,D,I,C,k,U,B){var Y=(D+"").split(" "),le;for(B={},le=0;le<4;le++)B[x[le]]=Y[le]=Y[le]||Y[(le-1)/2>>0];return C.parse(S,B,k,U)}};ne._setPluginRatio=function(x){this.plugin.setRatio(x);for(var S=this.data,D=S.proxy,I=S.firstMPT,C=1e-6,k,U,B,Y,le;I;)k=D[I.v],I.r?k=I.r(k):k<C&&k>-C&&(k=0),I.t[I.p]=k,I=I._next;if(S.autoRotate&&(S.autoRotate.rotation=S.mod?S.mod.call(this._tween,D.rotation,this.t,this._tween):D.rotation),x===1||x===0)for(I=S.firstMPT,le=x===1?"e":"b";I;){if(U=I.t,!U.type)U[le]=U.s+U.xs0;else if(U.type===1){for(Y=U.xs0+U.s+U.xs1,B=1;B<U.l;B++)Y+=U["xn"+B]+U["xs"+(B+1)];U[le]=Y}I=I._next}};var Ue=function(x,S,D,I,C){this.t=x,this.p=S,this.v=D,this.r=C,I&&(I._prev=this,this._next=I)};ne._parseToProxy=function(x,S,D,I,C,k){var U=I,B={},Y={},le=D._transform,Q=G,Me,ue,K,Ie,Pe;for(D._transform=null,G=S,I=Pe=D.parse(x,S,I,C),G=Q,k&&(D._transform=le,U&&(U._prev=null,U._prev&&(U._prev._next=null)));I&&I!==U;){if(I.type<=1&&(ue=I.p,Y[ue]=I.s+I.c,B[ue]=I.s,k||(Ie=new Ue(I,"s",ue,Ie,I.r),I.c=0),I.type===1))for(Me=I.l;--Me>0;)K="xn"+Me,ue=I.p+"_"+K,Y[ue]=I.data[K],B[ue]=I[K],k||(Ie=new Ue(I,K,ue,Ie,I.rxp[K]));I=I._next}return{proxy:B,end:Y,firstMPT:Ie,pt:Pe}};var $e=ne.CSSPropTween=function(x,S,D,I,C,k,U,B,Y,le,Q){this.t=x,this.p=S,this.s=D,this.c=I,this.n=U||S,x instanceof $e||s.push(this.n),this.r=B&&(typeof B=="function"?B:Math.round),this.type=k||0,Y&&(this.pr=Y,n=!0),this.b=le===void 0?D:le,this.e=Q===void 0?D+I:Q,C&&(this._next=C,C._prev=this)},qe=function(x,S,D,I,C,k){var U=new $e(x,S,D,I-D,C,-1,k);return U.b=D,U.e=U.xs0=I,U},it=t.parseComplex=function(x,S,D,I,C,k,U,B,Y,le){D=D||k||"",typeof I=="function"&&(I=I(De,xe)),U=new $e(x,S,0,0,U,le?2:1,null,!1,B,D,I),I+="",C&&ge.test(I+D)&&(I=[D,I],t.colorStringFilter(I),D=I[0],I=I[1]);var Q=D.split(", ").join(",").split(" "),Me=I.split(", ").join(",").split(" "),ue=Q.length,K=ze!==!1,Ie,Pe,Te,Ee,Ae,Ye,Ge,Je,tt,Qe,at,ht,rt;for((I.indexOf(",")!==-1||D.indexOf(",")!==-1)&&((I+D).indexOf("rgb")!==-1||(I+D).indexOf("hsl")!==-1?(Q=Q.join(" ").replace(X,", ").split(" "),Me=Me.join(" ").replace(X,", ").split(" ")):(Q=Q.join(" ").split(",").join(", ").split(" "),Me=Me.join(" ").split(",").join(", ").split(" ")),ue=Q.length),ue!==Me.length&&(Q=(k||"").split(" "),ue=Q.length),U.plugin=Y,U.setRatio=le,ge.lastIndex=0,Ie=0;Ie<ue;Ie++)if(Ee=Q[Ie],Ae=Me[Ie]+"",Je=parseFloat(Ee),Je||Je===0)U.appendXtra("",Je,N(Ae,Je),Ae.replace(f,""),K&&Ae.indexOf("px")!==-1?Math.round:!1,!0);else if(C&&ge.test(Ee))ht=Ae.indexOf(")")+1,ht=")"+(ht?Ae.substr(ht):""),rt=Ae.indexOf("hsl")!==-1&&Oe,Qe=Ae,Ee=be(Ee,rt),Ae=be(Ae,rt),tt=Ee.length+Ae.length>6,tt&&!Oe&&Ae[3]===0?(U["xs"+U.l]+=U.l?" transparent":"transparent",U.e=U.e.split(Me[Ie]).join("transparent")):(Oe||(tt=!1),rt?U.appendXtra(Qe.substr(0,Qe.indexOf("hsl"))+(tt?"hsla(":"hsl("),Ee[0],N(Ae[0],Ee[0]),",",!1,!0).appendXtra("",Ee[1],N(Ae[1],Ee[1]),"%,",!1).appendXtra("",Ee[2],N(Ae[2],Ee[2]),tt?"%,":"%"+ht,!1):U.appendXtra(Qe.substr(0,Qe.indexOf("rgb"))+(tt?"rgba(":"rgb("),Ee[0],Ae[0]-Ee[0],",",Math.round,!0).appendXtra("",Ee[1],Ae[1]-Ee[1],",",Math.round).appendXtra("",Ee[2],Ae[2]-Ee[2],tt?",":ht,Math.round),tt&&(Ee=Ee.length<4?1:Ee[3],U.appendXtra("",Ee,(Ae.length<4?1:Ae[3])-Ee,ht,!1))),ge.lastIndex=0;else if(Ye=Ee.match(l),!Ye)U["xs"+U.l]+=U.l||U["xs"+U.l]?" "+Ae:Ae;else{if(Ge=Ae.match(f),!Ge||Ge.length!==Ye.length)return U;for(Te=0,Pe=0;Pe<Ye.length;Pe++)at=Ye[Pe],Qe=Ee.indexOf(at,Te),U.appendXtra(Ee.substr(Te,Qe-Te),Number(at),N(Ge[Pe],at),"",K&&Ee.substr(Qe+at.length,2)==="px"?Math.round:!1,Pe===0),Te=Qe+at.length;U["xs"+U.l]+=Ee.substr(Te)}if(I.indexOf("=")!==-1&&U.data){for(ht=U.xs0+U.data.s,Ie=1;Ie<U.l;Ie++)ht+=U["xs"+Ie]+U.data["xn"+Ie];U.e=ht+U["xs"+Ie]}return U.l||(U.type=-1,U.xs0=U.e),U.xfirst||U},J=9;for(o=$e.prototype,o.l=o.pr=0;--J>0;)o["xn"+J]=0,o["xs"+J]="";o.xs0="",o._next=o._prev=o.xfirst=o.data=o.plugin=o.setRatio=o.rxp=null,o.appendXtra=function(x,S,D,I,C,k){var U=this,B=U.l;return U["xs"+B]+=k&&(B||U["xs"+B])?" "+x:x||"",!D&&B!==0&&!U.plugin?(U["xs"+B]+=S+(I||""),U):(U.l++,U.type=U.setRatio?2:1,U["xs"+U.l]=I||"",B>0?(U.data["xn"+B]=S+D,U.rxp["xn"+B]=C,U["xn"+B]=S,U.plugin||(U.xfirst=new $e(U,"xn"+B,S,D,U.xfirst||U,0,U.n,C,U.pr),U.xfirst.xs0=0),U):(U.data={s:S+D},U.rxp={},U.s=S,U.c=D,U.r=C,U))};var Xe=function(x,S){S=S||{},this.p=S.prefix&&A(x)||x,a[x]=a[this.p]=this,this.format=S.formatter||Fe(S.defaultValue,S.color,S.collapsible,S.multi),S.parser&&(this.parse=S.parser),this.clrs=S.color,this.multi=S.multi,this.keyword=S.keyword,this.dflt=S.defaultValue,this.pr=S.priority||0},fe=ne._registerComplexSpecialProp=function(x,S,D){typeof S!="object"&&(S={parser:D});var I=x.split(","),C=S.defaultValue,k;for(D=D||[C],k=0;k<I.length;k++)S.prefix=k===0&&S.prefix,S.defaultValue=D[k]||C,new Xe(I[k],S)},Re=ne._registerPluginProp=function(x){if(!a[x]){var S=x.charAt(0).toUpperCase()+x.substr(1)+"Plugin";fe(x,{parser:function(D,I,C,k,U,B,Y){var le=e.com.greensock.plugins[S];return le?(le._cssRegister(),a[C].parse(D,I,C,k,U,B,Y)):(we("Error: "+S+" js file not loaded."),U)}})}};o=Xe.prototype,o.parseComplex=function(x,S,D,I,C,k){var U=this.keyword,B,Y,le,Q,Me,ue;if(this.multi&&(X.test(D)||X.test(S)?(Y=S.replace(X,"|").split("|"),le=D.replace(X,"|").split("|")):U&&(Y=[S],le=[D])),le){for(Q=le.length>Y.length?le.length:Y.length,B=0;B<Q;B++)S=Y[B]=Y[B]||this.dflt,D=le[B]=le[B]||this.dflt,U&&(Me=S.indexOf(U),ue=D.indexOf(U),Me!==ue&&(ue===-1?Y[B]=Y[B].split(U).join(""):Me===-1&&(Y[B]+=" "+U)));S=Y.join(", "),D=le.join(", ")}return it(x,this.p,S,D,this.clrs,this.dflt,I,this.pr,C,k)},o.parse=function(x,S,D,I,C,k,U){return this.parseComplex(x.style,this.format(W(x,this.p,r,!1,this.dflt)),this.format(S),C,k)},t.registerSpecialProp=function(x,S,D){fe(x,{parser:function(I,C,k,U,B,Y,le){var Q=new $e(I,k,0,0,B,2,k,!1,D);return Q.plugin=Y,Q.setRatio=S(I,C,U._tween,k),Q},priority:D})},t.useSVGTransformAttr=!0;var Ve="scaleX,scaleY,scaleZ,x,y,z,skewX,skewY,rotation,rotationX,rotationY,perspective,xPercent,yPercent".split(","),Be=A("transform"),dt=je+"transform",Tt=A("transformOrigin"),Et=A("perspective")!==null,pt=ne.Transform=function(){this.perspective=parseFloat(t.defaultTransformPerspective)||0,this.force3D=t.defaultForce3D===!1||!Et?!1:t.defaultForce3D||"auto"},$t=Lt.SVGElement,Gt,xs=function(x,S,D){var I=ce.createElementNS("http://www.w3.org/2000/svg",x),C=/([a-z])([A-Z])/g,k;for(k in D)I.setAttributeNS(null,k.replace(C,"$1-$2").toLowerCase(),D[k]);return S.appendChild(I),I},ei=ce.documentElement||{},ti=function(){var x=Ce||/Android/i.test(Ne)&&!Lt.chrome,S,D,I;return ce.createElementNS&&!x&&(S=xs("svg",ei),D=xs("rect",S,{width:100,height:50,x:100}),I=D.getBoundingClientRect().width,D.style[Tt]="50% 50%",D.style[Be]="scaleX(0.5)",x=I===D.getBoundingClientRect().width&&!(nt&&Et),ei.removeChild(S)),x}(),ir=function(x,S,D,I,C,k){var U=x._gsTransform,B=wi(x,!0),Y,le,Q,Me,ue,K,Ie,Pe,Te,Ee,Ae,Ye,Ge,Je;U&&(Ge=U.xOrigin,Je=U.yOrigin),(!I||(Y=I.split(" ")).length<2)&&(Ie=x.getBBox(),Ie.x===0&&Ie.y===0&&Ie.width+Ie.height===0&&(Ie={x:parseFloat(x.hasAttribute("x")?x.getAttribute("x"):x.hasAttribute("cx")?x.getAttribute("cx"):0)||0,y:parseFloat(x.hasAttribute("y")?x.getAttribute("y"):x.hasAttribute("cy")?x.getAttribute("cy"):0)||0,width:0,height:0}),S=P(S).split(" "),Y=[(S[0].indexOf("%")!==-1?parseFloat(S[0])/100*Ie.width:parseFloat(S[0]))+Ie.x,(S[1].indexOf("%")!==-1?parseFloat(S[1])/100*Ie.height:parseFloat(S[1]))+Ie.y]),D.xOrigin=Me=parseFloat(Y[0]),D.yOrigin=ue=parseFloat(Y[1]),I&&B!==Ur&&(K=B[0],Ie=B[1],Pe=B[2],Te=B[3],Ee=B[4],Ae=B[5],Ye=K*Te-Ie*Pe,Ye&&(le=Me*(Te/Ye)+ue*(-Pe/Ye)+(Pe*Ae-Te*Ee)/Ye,Q=Me*(-Ie/Ye)+ue*(K/Ye)-(K*Ae-Ie*Ee)/Ye,Me=D.xOrigin=Y[0]=le,ue=D.yOrigin=Y[1]=Q)),U&&(k&&(D.xOffset=U.xOffset,D.yOffset=U.yOffset,U=D),C||C!==!1&&t.defaultSmoothOrigin!==!1?(le=Me-Ge,Q=ue-Je,U.xOffset+=le*B[0]+Q*B[2]-le,U.yOffset+=le*B[1]+Q*B[3]-Q):U.xOffset=U.yOffset=0),k||x.setAttribute("data-svg-origin",Y.join(" "))},ys=function(x){var S=re("svg",this.ownerSVGElement&&this.ownerSVGElement.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),D=this.parentNode,I=this.nextSibling,C=this.style.cssText,k;if(ei.appendChild(S),S.appendChild(this),this.style.display="block",x)try{k=this.getBBox(),this._originalGetBBox=this.getBBox,this.getBBox=ys}catch{}else this._originalGetBBox&&(k=this._originalGetBBox());return I?D.insertBefore(this,I):D.appendChild(this),ei.removeChild(S),this.style.cssText=C,k},fa=function(x){try{return x.getBBox()}catch{return ys.call(x,!0)}},Ei=function(x){return!!($t&&x.getCTM&&(!x.parentNode||x.ownerSVGElement)&&fa(x))},Ur=[1,0,0,1,0,0],wi=function(x,S){var D=x._gsTransform||new pt,I=1e5,C=x.style,k,U,B,Y,le,Q;if(Be?U=W(x,dt,null,!0):x.currentStyle&&(U=x.currentStyle.filter.match(L),U=U&&U.length===4?[U[0].substr(4),Number(U[2].substr(4)),Number(U[1].substr(4)),U[3].substr(4),D.x||0,D.y||0].join(","):""),k=!U||U==="none"||U==="matrix(1, 0, 0, 1, 0, 0)",Be&&((Q=!H(x)||H(x).display==="none")||!x.parentNode)&&(Q&&(Y=C.display,C.display="block"),x.parentNode||(le=1,ei.appendChild(x)),U=W(x,dt,null,!0),k=!U||U==="none"||U==="matrix(1, 0, 0, 1, 0, 0)",Y?C.display=Y:Q&&rr(C,"display"),le&&ei.removeChild(x)),(D.svg||x.getCTM&&Ei(x))&&(k&&(C[Be]+"").indexOf("matrix")!==-1&&(U=C[Be],k=0),B=x.getAttribute("transform"),k&&B&&(B=x.transform.baseVal.consolidate().matrix,U="matrix("+B.a+","+B.b+","+B.c+","+B.d+","+B.e+","+B.f+")",k=0)),k)return Ur;for(B=(U||"").match(l)||[],J=B.length;--J>-1;)Y=Number(B[J]),B[J]=(le=Y-(Y|=0))?(le*I+(le<0?-.5:.5)|0)/I+Y:Y;return S&&B.length>6?[B[0],B[1],B[4],B[5],B[12],B[13]]:B},Ai=ne.getTransform=function(x,S,D,I){if(x._gsTransform&&D&&!I)return x._gsTransform;var C=D?x._gsTransform||new pt:new pt,k=C.scaleX<0,U=2e-5,B=1e5,Y=Et&&(parseFloat(W(x,Tt,S,!1,"0 0 0").split(" ")[2])||C.zOrigin)||0,le=parseFloat(t.defaultTransformPerspective)||0,Q,Me,ue,K,Ie,Pe;if(C.svg=!!(x.getCTM&&Ei(x)),C.svg&&(ir(x,W(x,Tt,S,!1,"50% 50%")+"",C,x.getAttribute("data-svg-origin")),Gt=t.useSVGTransformAttr||ti),Q=wi(x),Q!==Ur){if(Q.length===16){var Te=Q[0],Ee=Q[1],Ae=Q[2],Ye=Q[3],Ge=Q[4],Je=Q[5],tt=Q[6],Qe=Q[7],at=Q[8],ht=Q[9],rt=Q[10],ni=Q[12],ii=Q[13],jt=Q[14],Kt=Q[11],Ke=Math.atan2(tt,rt),Rt,Pt,ri,_t,ft;C.zOrigin&&(jt=-C.zOrigin,ni=at*jt-Q[12],ii=ht*jt-Q[13],jt=rt*jt+C.zOrigin-Q[14]),C.rotationX=Ke*R,Ke&&(_t=Math.cos(-Ke),ft=Math.sin(-Ke),Rt=Ge*_t+at*ft,Pt=Je*_t+ht*ft,ri=tt*_t+rt*ft,at=Ge*-ft+at*_t,ht=Je*-ft+ht*_t,rt=tt*-ft+rt*_t,Kt=Qe*-ft+Kt*_t,Ge=Rt,Je=Pt,tt=ri),Ke=Math.atan2(-Ae,rt),C.rotationY=Ke*R,Ke&&(_t=Math.cos(-Ke),ft=Math.sin(-Ke),Rt=Te*_t-at*ft,Pt=Ee*_t-ht*ft,ri=Ae*_t-rt*ft,ht=Ee*ft+ht*_t,rt=Ae*ft+rt*_t,Kt=Ye*ft+Kt*_t,Te=Rt,Ee=Pt,Ae=ri),Ke=Math.atan2(Ee,Te),C.rotation=Ke*R,Ke&&(_t=Math.cos(Ke),ft=Math.sin(Ke),Rt=Te*_t+Ee*ft,Pt=Ge*_t+Je*ft,ri=at*_t+ht*ft,Ee=Ee*_t-Te*ft,Je=Je*_t-Ge*ft,ht=ht*_t-at*ft,Te=Rt,Ge=Pt,at=ri),C.rotationX&&Math.abs(C.rotationX)+Math.abs(C.rotation)>359.9&&(C.rotationX=C.rotation=0,C.rotationY=180-C.rotationY),Ke=Math.atan2(Ge,Je),C.scaleX=(Math.sqrt(Te*Te+Ee*Ee+Ae*Ae)*B+.5|0)/B,C.scaleY=(Math.sqrt(Je*Je+tt*tt)*B+.5|0)/B,C.scaleZ=(Math.sqrt(at*at+ht*ht+rt*rt)*B+.5|0)/B,Te/=C.scaleX,Ge/=C.scaleY,Ee/=C.scaleX,Je/=C.scaleY,Math.abs(Ke)>U?(C.skewX=Ke*R,Ge=0,C.skewType!=="simple"&&(C.scaleY*=1/Math.cos(Ke))):C.skewX=0,C.perspective=Kt?1/(Kt<0?-Kt:Kt):0,C.x=ni,C.y=ii,C.z=jt,C.svg&&(C.x-=C.xOrigin-(C.xOrigin*Te-C.yOrigin*Ge),C.y-=C.yOrigin-(C.yOrigin*Ee-C.xOrigin*Je))}else if(!Et||I||!Q.length||C.x!==Q[4]||C.y!==Q[5]||!C.rotationX&&!C.rotationY){var Wt=Q.length>=6,Rn=Wt?Q[0]:1,rn=Q[1]||0,Ss=Q[2]||0,Ms=Wt?Q[3]:1;C.x=Q[4]||0,C.y=Q[5]||0,ue=Math.sqrt(Rn*Rn+rn*rn),K=Math.sqrt(Ms*Ms+Ss*Ss),Ie=Rn||rn?Math.atan2(rn,Rn)*R:C.rotation||0,Pe=Ss||Ms?Math.atan2(Ss,Ms)*R+Ie:C.skewX||0,C.scaleX=ue,C.scaleY=K,C.rotation=Ie,C.skewX=Pe,Et&&(C.rotationX=C.rotationY=C.z=0,C.perspective=le,C.scaleZ=1),C.svg&&(C.x-=C.xOrigin-(C.xOrigin*Rn+C.yOrigin*Ss),C.y-=C.yOrigin-(C.xOrigin*rn+C.yOrigin*Ms))}Math.abs(C.skewX)>90&&Math.abs(C.skewX)<270&&(k?(C.scaleX*=-1,C.skewX+=C.rotation<=0?180:-180,C.rotation+=C.rotation<=0?180:-180):(C.scaleY*=-1,C.skewX+=C.skewX<=0?180:-180)),C.zOrigin=Y;for(Me in C)C[Me]<U&&C[Me]>-U&&(C[Me]=0)}return D&&(x._gsTransform=C,C.svg&&(Gt&&x.style[Be]?lt.delayedCall(.001,function(){rr(x.style,Be)}):!Gt&&x.getAttribute("transform")&&lt.delayedCall(.001,function(){x.removeAttribute("transform")}))),C},ha=function(x){var S=this.data,D=-S.rotation*E,I=D+S.skewX*E,C=1e5,k=(Math.cos(D)*S.scaleX*C|0)/C,U=(Math.sin(D)*S.scaleX*C|0)/C,B=(Math.sin(I)*-S.scaleY*C|0)/C,Y=(Math.cos(I)*S.scaleY*C|0)/C,le=this.t.style,Q=this.t.currentStyle,Me,ue;if(Q){ue=U,U=-B,B=-ue,Me=Q.filter,le.filter="";var K=this.t.offsetWidth,Ie=this.t.offsetHeight,Pe=Q.position!=="absolute",Te="progid:DXImageTransform.Microsoft.Matrix(M11="+k+", M12="+U+", M21="+B+", M22="+Y,Ee=S.x+K*S.xPercent/100,Ae=S.y+Ie*S.yPercent/100,Ye,Ge;if(S.ox!=null&&(Ye=(S.oxp?K*S.ox*.01:S.ox)-K/2,Ge=(S.oyp?Ie*S.oy*.01:S.oy)-Ie/2,Ee+=Ye-(Ye*k+Ge*U),Ae+=Ge-(Ye*B+Ge*Y)),Pe?(Ye=K/2,Ge=Ie/2,Te+=", Dx="+(Ye-(Ye*k+Ge*U)+Ee)+", Dy="+(Ge-(Ye*B+Ge*Y)+Ae)+")"):Te+=", sizingMethod='auto expand')",Me.indexOf("DXImageTransform.Microsoft.Matrix(")!==-1?le.filter=Me.replace(z,Te):le.filter=Te+" "+Me,(x===0||x===1)&&k===1&&U===0&&B===0&&Y===1&&(!Pe||Te.indexOf("Dx=0, Dy=0")!==-1)&&(!m.test(Me)||parseFloat(RegExp.$1)===100)&&Me.indexOf(Me.indexOf("Alpha"))===-1&&le.removeAttribute("filter"),!Pe){var Je=Ce<8?1:-1,tt,Qe,at;for(Ye=S.ieOffsetX||0,Ge=S.ieOffsetY||0,S.ieOffsetX=Math.round((K-((k<0?-k:k)*K+(U<0?-U:U)*Ie))/2+Ee),S.ieOffsetY=Math.round((Ie-((Y<0?-Y:Y)*Ie+(B<0?-B:B)*K))/2+Ae),J=0;J<4;J++)Qe=v[J],tt=Q[Qe],ue=tt.indexOf("px")!==-1?parseFloat(tt):pe(this.t,Qe,parseFloat(tt),tt.replace(c,""))||0,ue!==S[Qe]?at=J<2?-S.ieOffsetX:-S.ieOffsetY:at=J<2?Ye-S.ieOffsetX:Ge-S.ieOffsetY,le[Qe]=(S[Qe]=Math.round(ue-at*(J===0||J===2?1:Je)))+"px"}}},Fo=ne.set3DTransformRatio=ne.setTransformRatio=function(x){var S=this.data,D=this.t.style,I=S.rotation,C=S.rotationX,k=S.rotationY,U=S.scaleX,B=S.scaleY,Y=S.scaleZ,le=S.x,Q=S.y,Me=S.z,ue=S.svg,K=S.perspective,Ie=S.force3D,Pe=S.skewY,Te=S.skewX,Ee,Ae,Ye,Ge,Je,tt,Qe,at,ht,rt,ni,ii,jt,Kt,Ke,Rt,Pt,ri,_t,ft,Wt,Rn,rn;if(Pe&&(Te+=Pe,I+=Pe),((x===1||x===0)&&Ie==="auto"&&(this.tween._totalTime===this.tween._totalDuration||!this.tween._totalTime)||!Ie)&&!Me&&!K&&!k&&!C&&Y===1||Gt&&ue||!Et){I||Te||ue?(I*=E,Rn=Te*E,rn=1e5,Ae=Math.cos(I)*U,Je=Math.sin(I)*U,Ye=Math.sin(I-Rn)*-B,tt=Math.cos(I-Rn)*B,Rn&&S.skewType==="simple"&&(Ee=Math.tan(Rn-Pe*E),Ee=Math.sqrt(1+Ee*Ee),Ye*=Ee,tt*=Ee,Pe&&(Ee=Math.tan(Pe*E),Ee=Math.sqrt(1+Ee*Ee),Ae*=Ee,Je*=Ee)),ue&&(le+=S.xOrigin-(S.xOrigin*Ae+S.yOrigin*Ye)+S.xOffset,Q+=S.yOrigin-(S.xOrigin*Je+S.yOrigin*tt)+S.yOffset,Gt&&(S.xPercent||S.yPercent)&&(Ke=this.t.getBBox(),le+=S.xPercent*.01*Ke.width,Q+=S.yPercent*.01*Ke.height),Ke=1e-6,le<Ke&&le>-Ke&&(le=0),Q<Ke&&Q>-Ke&&(Q=0)),_t=(Ae*rn|0)/rn+","+(Je*rn|0)/rn+","+(Ye*rn|0)/rn+","+(tt*rn|0)/rn+","+le+","+Q+")",ue&&Gt?this.t.setAttribute("transform","matrix("+_t):D[Be]=(S.xPercent||S.yPercent?"translate("+S.xPercent+"%,"+S.yPercent+"%) matrix(":"matrix(")+_t):D[Be]=(S.xPercent||S.yPercent?"translate("+S.xPercent+"%,"+S.yPercent+"%) matrix(":"matrix(")+U+",0,0,"+B+","+le+","+Q+")";return}if(nt&&(Ke=1e-4,U<Ke&&U>-Ke&&(U=Y=2e-5),B<Ke&&B>-Ke&&(B=Y=2e-5),K&&!S.z&&!S.rotationX&&!S.rotationY&&(K=0)),I||Te)I*=E,Rt=Ae=Math.cos(I),Pt=Je=Math.sin(I),Te&&(I-=Te*E,Rt=Math.cos(I),Pt=Math.sin(I),S.skewType==="simple"&&(Ee=Math.tan((Te-Pe)*E),Ee=Math.sqrt(1+Ee*Ee),Rt*=Ee,Pt*=Ee,S.skewY&&(Ee=Math.tan(Pe*E),Ee=Math.sqrt(1+Ee*Ee),Ae*=Ee,Je*=Ee))),Ye=-Pt,tt=Rt;else if(!k&&!C&&Y===1&&!K&&!ue){D[Be]=(S.xPercent||S.yPercent?"translate("+S.xPercent+"%,"+S.yPercent+"%) translate3d(":"translate3d(")+le+"px,"+Q+"px,"+Me+"px)"+(U!==1||B!==1?" scale("+U+","+B+")":"");return}else Ae=tt=1,Ye=Je=0;rt=1,Ge=Qe=at=ht=ni=ii=0,jt=K?-1/K:0,Kt=S.zOrigin,Ke=1e-6,ft=",",Wt="0",I=k*E,I&&(Rt=Math.cos(I),Pt=Math.sin(I),at=-Pt,ni=jt*-Pt,Ge=Ae*Pt,Qe=Je*Pt,rt=Rt,jt*=Rt,Ae*=Rt,Je*=Rt),I=C*E,I&&(Rt=Math.cos(I),Pt=Math.sin(I),Ee=Ye*Rt+Ge*Pt,ri=tt*Rt+Qe*Pt,ht=rt*Pt,ii=jt*Pt,Ge=Ye*-Pt+Ge*Rt,Qe=tt*-Pt+Qe*Rt,rt=rt*Rt,jt=jt*Rt,Ye=Ee,tt=ri),Y!==1&&(Ge*=Y,Qe*=Y,rt*=Y,jt*=Y),B!==1&&(Ye*=B,tt*=B,ht*=B,ii*=B),U!==1&&(Ae*=U,Je*=U,at*=U,ni*=U),(Kt||ue)&&(Kt&&(le+=Ge*-Kt,Q+=Qe*-Kt,Me+=rt*-Kt+Kt),ue&&(le+=S.xOrigin-(S.xOrigin*Ae+S.yOrigin*Ye)+S.xOffset,Q+=S.yOrigin-(S.xOrigin*Je+S.yOrigin*tt)+S.yOffset),le<Ke&&le>-Ke&&(le=Wt),Q<Ke&&Q>-Ke&&(Q=Wt),Me<Ke&&Me>-Ke&&(Me=0)),_t=S.xPercent||S.yPercent?"translate("+S.xPercent+"%,"+S.yPercent+"%) matrix3d(":"matrix3d(",_t+=(Ae<Ke&&Ae>-Ke?Wt:Ae)+ft+(Je<Ke&&Je>-Ke?Wt:Je)+ft+(at<Ke&&at>-Ke?Wt:at),_t+=ft+(ni<Ke&&ni>-Ke?Wt:ni)+ft+(Ye<Ke&&Ye>-Ke?Wt:Ye)+ft+(tt<Ke&&tt>-Ke?Wt:tt),C||k||Y!==1?(_t+=ft+(ht<Ke&&ht>-Ke?Wt:ht)+ft+(ii<Ke&&ii>-Ke?Wt:ii)+ft+(Ge<Ke&&Ge>-Ke?Wt:Ge),_t+=ft+(Qe<Ke&&Qe>-Ke?Wt:Qe)+ft+(rt<Ke&&rt>-Ke?Wt:rt)+ft+(jt<Ke&&jt>-Ke?Wt:jt)+ft):_t+=",0,0,0,0,1,0,",_t+=le+ft+Q+ft+Me+ft+(K?1+-Me/K:1)+")",D[Be]=_t};o=pt.prototype,o.x=o.y=o.z=o.skewX=o.skewY=o.rotation=o.rotationX=o.rotationY=o.zOrigin=o.xPercent=o.yPercent=o.xOffset=o.yOffset=0,o.scaleX=o.scaleY=o.scaleZ=1,fe("transform,scale,scaleX,scaleY,scaleZ,x,y,z,rotation,rotationX,rotationY,rotationZ,skewX,skewY,shortRotation,shortRotationX,shortRotationY,shortRotationZ,transformOrigin,svgOrigin,transformPerspective,directionalRotation,parseTransform,force3D,skewType,xPercent,yPercent,smoothOrigin",{parser:function(x,S,D,I,C,k,U){if(I._lastParsedTransform===U)return C;I._lastParsedTransform=U;var B=U.scale&&typeof U.scale=="function"?U.scale:0,Y;typeof U[D]=="function"&&(Y=U[D],U[D]=S),B&&(U.scale=B(De,x));var le=x._gsTransform,Q=x.style,Me=1e-6,ue=Ve.length,K=U,Ie={},Pe="transformOrigin",Te=Ai(x,r,!0,K.parseTransform),Ee=K.transform&&(typeof K.transform=="function"?K.transform(De,xe):K.transform),Ae,Ye,Ge,Je,tt,Qe,at,ht,rt;if(Te.skewType=K.skewType||Te.skewType||t.defaultSkewType,I._transform=Te,"rotationZ"in K&&(K.rotation=K.rotationZ),Ee&&typeof Ee=="string"&&Be)Ye=ae.style,Ye[Be]=Ee,Ye.display="block",Ye.position="absolute",Ee.indexOf("%")!==-1&&(Ye.width=W(x,"width"),Ye.height=W(x,"height")),ce.body.appendChild(ae),Ae=Ai(ae,null,!1),Te.skewType==="simple"&&(Ae.scaleY*=Math.cos(Ae.skewX*E)),Te.svg&&(Qe=Te.xOrigin,at=Te.yOrigin,Ae.x-=Te.xOffset,Ae.y-=Te.yOffset,(K.transformOrigin||K.svgOrigin)&&(Ee={},ir(x,P(K.transformOrigin),Ee,K.svgOrigin,K.smoothOrigin,!0),Qe=Ee.xOrigin,at=Ee.yOrigin,Ae.x-=Ee.xOffset-Te.xOffset,Ae.y-=Ee.yOffset-Te.yOffset),(Qe||at)&&(ht=wi(ae,!0),Ae.x-=Qe-(Qe*ht[0]+at*ht[2]),Ae.y-=at-(Qe*ht[1]+at*ht[3]))),ce.body.removeChild(ae),Ae.perspective||(Ae.perspective=Te.perspective),K.xPercent!=null&&(Ae.xPercent=F(K.xPercent,Te.xPercent)),K.yPercent!=null&&(Ae.yPercent=F(K.yPercent,Te.yPercent));else if(typeof K=="object"){if(Ae={scaleX:F(K.scaleX!=null?K.scaleX:K.scale,Te.scaleX),scaleY:F(K.scaleY!=null?K.scaleY:K.scale,Te.scaleY),scaleZ:F(K.scaleZ,Te.scaleZ),x:F(K.x,Te.x),y:F(K.y,Te.y),z:F(K.z,Te.z),xPercent:F(K.xPercent,Te.xPercent),yPercent:F(K.yPercent,Te.yPercent),perspective:F(K.transformPerspective,Te.perspective)},tt=K.directionalRotation,tt!=null)if(typeof tt=="object")for(Ye in tt)K[Ye]=tt[Ye];else K.rotation=tt;typeof K.x=="string"&&K.x.indexOf("%")!==-1&&(Ae.x=0,Ae.xPercent=F(K.x,Te.xPercent)),typeof K.y=="string"&&K.y.indexOf("%")!==-1&&(Ae.y=0,Ae.yPercent=F(K.y,Te.yPercent)),Ae.rotation=Z("rotation"in K?K.rotation:"shortRotation"in K?K.shortRotation+"_short":Te.rotation,Te.rotation,"rotation",Ie),Et&&(Ae.rotationX=Z("rotationX"in K?K.rotationX:"shortRotationX"in K?K.shortRotationX+"_short":Te.rotationX||0,Te.rotationX,"rotationX",Ie),Ae.rotationY=Z("rotationY"in K?K.rotationY:"shortRotationY"in K?K.shortRotationY+"_short":Te.rotationY||0,Te.rotationY,"rotationY",Ie)),Ae.skewX=Z(K.skewX,Te.skewX),Ae.skewY=Z(K.skewY,Te.skewY)}for(Et&&K.force3D!=null&&(Te.force3D=K.force3D,Je=!0),Ge=Te.force3D||Te.z||Te.rotationX||Te.rotationY||Ae.z||Ae.rotationX||Ae.rotationY||Ae.perspective,!Ge&&K.scale!=null&&(Ae.scaleZ=1);--ue>-1;)rt=Ve[ue],Ee=Ae[rt]-Te[rt],(Ee>Me||Ee<-Me||K[rt]!=null||G[rt]!=null)&&(Je=!0,C=new $e(Te,rt,Te[rt],Ee,C),rt in Ie&&(C.e=Ie[rt]),C.xs0=0,C.plugin=k,I._overwriteProps.push(C.n));return Ee=K.transformOrigin,Te.svg&&(Ee||K.svgOrigin)&&(Qe=Te.xOffset,at=Te.yOffset,ir(x,P(Ee),Ae,K.svgOrigin,K.smoothOrigin),C=qe(Te,"xOrigin",(le?Te:Ae).xOrigin,Ae.xOrigin,C,Pe),C=qe(Te,"yOrigin",(le?Te:Ae).yOrigin,Ae.yOrigin,C,Pe),(Qe!==Te.xOffset||at!==Te.yOffset)&&(C=qe(Te,"xOffset",le?Qe:Te.xOffset,Te.xOffset,C,Pe),C=qe(Te,"yOffset",le?at:Te.yOffset,Te.yOffset,C,Pe)),Ee="0px 0px"),(Ee||Et&&Ge&&Te.zOrigin)&&(Be?(Je=!0,rt=Tt,Ee=(Ee||W(x,rt,r,!1,"50% 50%"))+"",C=new $e(Q,rt,0,0,C,-1,Pe),C.b=Q[rt],C.plugin=k,Et?(Ye=Te.zOrigin,Ee=Ee.split(" "),Te.zOrigin=(Ee.length>2&&!(Ye!==0&&Ee[2]==="0px")?parseFloat(Ee[2]):Ye)||0,C.xs0=C.e=Ee[0]+" "+(Ee[1]||"50%")+" 0px",C=new $e(Te,"zOrigin",0,0,C,-1,C.n),C.b=Ye,C.xs0=C.e=Te.zOrigin):C.xs0=C.e=Ee):P(Ee+"",Te)),Je&&(I._transformType=!(Te.svg&&Gt)&&(Ge||this._transformType===3)?3:2),Y&&(U[D]=Y),B&&(U.scale=B),C},prefix:!0}),fe("boxShadow",{defaultValue:"0px 0px 0px 0px #999",prefix:!0,color:!0,multi:!0,keyword:"inset"}),fe("borderRadius",{defaultValue:"0px",parser:function(x,S,D,I,C,k){S=this.format(S);var U=["borderTopLeftRadius","borderTopRightRadius","borderBottomRightRadius","borderBottomLeftRadius"],B=x.style,Y,le,Q,Me,ue,K,Ie,Pe,Te,Ee,Ae,Ye,Ge,Je,tt,Qe;for(Te=parseFloat(x.offsetWidth),Ee=parseFloat(x.offsetHeight),Y=S.split(" "),le=0;le<U.length;le++)this.p.indexOf("border")&&(U[le]=A(U[le])),ue=Me=W(x,U[le],r,!1,"0px"),ue.indexOf(" ")!==-1&&(Me=ue.split(" "),ue=Me[0],Me=Me[1]),K=Q=Y[le],Ie=parseFloat(ue),Ye=ue.substr((Ie+"").length),Ge=K.charAt(1)==="=",Ge?(Pe=parseInt(K.charAt(0)+"1",10),K=K.substr(2),Pe*=parseFloat(K),Ae=K.substr((Pe+"").length-(Pe<0?1:0))||""):(Pe=parseFloat(K),Ae=K.substr((Pe+"").length)),Ae===""&&(Ae=i[D]||Ye),Ae!==Ye&&(Je=pe(x,"borderLeft",Ie,Ye),tt=pe(x,"borderTop",Ie,Ye),Ae==="%"?(ue=Je/Te*100+"%",Me=tt/Ee*100+"%"):Ae==="em"?(Qe=pe(x,"borderLeft",1,"em"),ue=Je/Qe+"em",Me=tt/Qe+"em"):(ue=Je+"px",Me=tt+"px"),Ge&&(K=parseFloat(ue)+Pe+Ae,Q=parseFloat(Me)+Pe+Ae)),C=it(B,U[le],ue+" "+Me,K+" "+Q,!1,"0px",C);return C},prefix:!0,formatter:Fe("0px 0px 0px 0px",!1,!0)}),fe("borderBottomLeftRadius,borderBottomRightRadius,borderTopLeftRadius,borderTopRightRadius",{defaultValue:"0px",parser:function(x,S,D,I,C,k){return it(x.style,D,this.format(W(x,D,r,!1,"0px 0px")),this.format(S),!1,"0px",C)},prefix:!0,formatter:Fe("0px 0px",!1,!0)}),fe("backgroundPosition",{defaultValue:"0 0",parser:function(x,S,D,I,C,k){var U="background-position",B=r||H(x,null),Y=this.format((B?Ce?B.getPropertyValue(U+"-x")+" "+B.getPropertyValue(U+"-y"):B.getPropertyValue(U):x.currentStyle.backgroundPositionX+" "+x.currentStyle.backgroundPositionY)||"0 0"),le=this.format(S),Q,Me,ue,K,Ie,Pe;if(Y.indexOf("%")!==-1!=(le.indexOf("%")!==-1)&&le.split(",").length<2&&(Pe=W(x,"backgroundImage").replace(M,""),Pe&&Pe!=="none")){for(Q=Y.split(" "),Me=le.split(" "),me.setAttribute("src",Pe),ue=2;--ue>-1;)Y=Q[ue],K=Y.indexOf("%")!==-1,K!==(Me[ue].indexOf("%")!==-1)&&(Ie=ue===0?x.offsetWidth-me.width:x.offsetHeight-me.height,Q[ue]=K?parseFloat(Y)/100*Ie+"px":parseFloat(Y)/Ie*100+"%");Y=Q.join(" ")}return this.parseComplex(x.style,Y,le,C,k)},formatter:P}),fe("backgroundSize",{defaultValue:"0 0",formatter:function(x){return x+="",x.substr(0,2)==="co"?x:P(x.indexOf(" ")===-1?x+" "+x:x)}}),fe("perspective",{defaultValue:"0px",prefix:!0}),fe("perspectiveOrigin",{defaultValue:"50% 50%",prefix:!0}),fe("transformStyle",{prefix:!0}),fe("backfaceVisibility",{prefix:!0}),fe("userSelect",{prefix:!0}),fe("margin",{parser:Le("marginTop,marginRight,marginBottom,marginLeft")}),fe("padding",{parser:Le("paddingTop,paddingRight,paddingBottom,paddingLeft")}),fe("clip",{defaultValue:"rect(0px,0px,0px,0px)",parser:function(x,S,D,I,C,k){var U,B,Y;return Ce<9?(B=x.currentStyle,Y=Ce<8?" ":",",U="rect("+B.clipTop+Y+B.clipRight+Y+B.clipBottom+Y+B.clipLeft+")",S=this.format(S).split(",").join(Y)):(U=this.format(W(x,this.p,r,!1,this.dflt)),S=this.format(S)),this.parseComplex(x.style,U,S,C,k)}}),fe("textShadow",{defaultValue:"0px 0px 0px #999",color:!0,multi:!0}),fe("autoRound,strictUnits",{parser:function(x,S,D,I,C){return C}}),fe("border",{defaultValue:"0px solid #000",parser:function(x,S,D,I,C,k){var U=W(x,"borderTopWidth",r,!1,"0px"),B=this.format(S).split(" "),Y=B[0].replace(c,"");return Y!=="px"&&(U=parseFloat(U)/pe(x,"borderTopWidth",1,Y)+Y),this.parseComplex(x.style,this.format(U+" "+W(x,"borderTopStyle",r,!1,"solid")+" "+W(x,"borderTopColor",r,!1,"#000")),B.join(" "),C,k)},color:!0,formatter:function(x){var S=x.split(" ");return S[0]+" "+(S[1]||"solid")+" "+(x.match(ge)||["#000"])[0]}}),fe("borderWidth",{parser:Le("borderTopWidth,borderRightWidth,borderBottomWidth,borderLeftWidth")}),fe("float,cssFloat,styleFloat",{parser:function(x,S,D,I,C,k){var U=x.style,B="cssFloat"in U?"cssFloat":"styleFloat";return new $e(U,B,0,0,C,-1,D,!1,0,U[B],S)}});var Bo=function(x){var S=this.t,D=S.filter||W(this.data,"filter")||"",I=this.s+this.c*x|0,C;I===100&&(D.indexOf("atrix(")===-1&&D.indexOf("radient(")===-1&&D.indexOf("oader(")===-1?(S.removeAttribute("filter"),C=!W(this.data,"filter")):(S.filter=D.replace(y,""),C=!0)),C||(this.xn1&&(S.filter=D=D||"alpha(opacity="+I+")"),D.indexOf("pacity")===-1?(I!==0||!this.xn1)&&(S.filter=D+" alpha(opacity="+I+")"):S.filter=D.replace(m,"opacity="+I))};fe("opacity,alpha,autoAlpha",{defaultValue:"1",parser:function(x,S,D,I,C,k){var U=parseFloat(W(x,"opacity",r,!1,"1")),B=x.style,Y=D==="autoAlpha";return typeof S=="string"&&S.charAt(1)==="="&&(S=(S.charAt(0)==="-"?-1:1)*parseFloat(S.substr(2))+U),Y&&U===1&&W(x,"visibility",r)==="hidden"&&S!==0&&(U=0),Oe?C=new $e(B,"opacity",U,S-U,C):(C=new $e(B,"opacity",U*100,(S-U)*100,C),C.xn1=Y?1:0,B.zoom=1,C.type=2,C.b="alpha(opacity="+C.s+")",C.e="alpha(opacity="+(C.s+C.c)+")",C.data=x,C.plugin=k,C.setRatio=Bo),Y&&(C=new $e(B,"visibility",0,0,C,-1,null,!1,0,U!==0?"inherit":"hidden",S===0?"hidden":"inherit"),C.xs0="inherit",I._overwriteProps.push(C.n),I._overwriteProps.push(D)),C}});var rr=function(x,S){S&&(x.removeProperty?((S.substr(0,2)==="ms"||S.substr(0,6)==="webkit")&&(S="-"+S),x.removeProperty(S.replace(h,"-$1").toLowerCase())):x.removeAttribute(S))},O=function(x){if(this.t._gsClassPT=this,x===1||x===0){this.t.setAttribute("class",x===0?this.b:this.e);for(var S=this.data,D=this.t.style;S;)S.v?D[S.p]=S.v:rr(D,S.p),S=S._next;x===1&&this.t._gsClassPT===this&&(this.t._gsClassPT=null)}else this.t.getAttribute("class")!==this.e&&this.t.setAttribute("class",this.e)};fe("className",{parser:function(x,S,D,I,C,k,U){var B=x.getAttribute("class")||"",Y=x.style.cssText,le,Q,Me,ue,K;if(C=I._classNamePT=new $e(x,D,0,0,C,2),C.setRatio=O,C.pr=-11,n=!0,C.b=B,Q=ye(x,r),Me=x._gsClassPT,Me){for(ue={},K=Me.data;K;)ue[K.p]=1,K=K._next;Me.setRatio(1)}return x._gsClassPT=C,C.e=S.charAt(1)!=="="?S:B.replace(new RegExp("(?:\\s|^)"+S.substr(2)+"(?![\\w-])"),"")+(S.charAt(0)==="+"?" "+S.substr(2):""),x.setAttribute("class",C.e),le=ve(x,Q,ye(x),U,ue),x.setAttribute("class",B),C.data=le.firstMPT,x.style.cssText=Y,C=C.xfirst=I.parse(x,le.difs,C,k),C}});var ie=function(x){if((x===1||x===0)&&this.data._totalTime===this.data._totalDuration&&this.data.data!=="isFromStart"){var S=this.t.style,D=a.transform.parse,I,C,k,U,B;if(this.e==="all")S.cssText="",U=!0;else for(I=this.e.split(" ").join("").split(","),k=I.length;--k>-1;)C=I[k],a[C]&&(a[C].parse===D?U=!0:C=C==="transformOrigin"?Tt:a[C].p),rr(S,C);U&&(rr(S,Be),B=this.t._gsTransform,B&&(B.svg&&(this.t.removeAttribute("data-svg-origin"),this.t.removeAttribute("transform")),delete this.t._gsTransform))}};for(fe("clearProps",{parser:function(x,S,D,I,C){return C=new $e(x,D,0,0,C,2),C.setRatio=ie,C.e=S,C.pr=-10,C.data=I._tween,n=!0,C}}),o="bezier,throwProps,physicsProps,physics2D".split(","),J=o.length;J--;)Re(o[J]);o=t.prototype,o._firstPT=o._lastParsedTransform=o._transform=null,o._onInitTween=function(x,S,D,I){if(!x.nodeType)return!1;this._target=xe=x,this._tween=D,this._vars=S,De=I,ze=S.autoRound,n=!1,i=S.suffixMap||t.suffixMap,r=H(x,""),s=this._overwriteProps;var C=x.style,k,U,B,Y,le,Q,Me,ue,K;if(ke&&C.zIndex===""&&(k=W(x,"zIndex",r),(k==="auto"||k==="")&&this._addLazySet(C,"zIndex",0)),typeof S=="string"&&(Y=C.cssText,k=ye(x,r),C.cssText=Y+";"+S,k=ve(x,k,ye(x)).difs,!Oe&&p.test(S)&&(k.opacity=parseFloat(RegExp.$1)),S=k,C.cssText=Y),S.className?this._firstPT=U=a.className.parse(x,S.className,"className",this,null,null,S):this._firstPT=U=this.parse(x,S,null),this._transformType){for(K=this._transformType===3,Be?Ze&&(ke=!0,C.zIndex===""&&(Me=W(x,"zIndex",r),(Me==="auto"||Me==="")&&this._addLazySet(C,"zIndex",0)),Se&&this._addLazySet(C,"WebkitBackfaceVisibility",this._vars.WebkitBackfaceVisibility||(K?"visible":"hidden"))):C.zoom=1,B=U;B&&B._next;)B=B._next;ue=new $e(x,"transform",0,0,null,2),this._linkCSSP(ue,null,B),ue.setRatio=Be?Fo:ha,ue.data=this._transform||Ai(x,r,!0),ue.tween=D,ue.pr=-1,s.pop()}if(n){for(;U;){for(Q=U._next,B=Y;B&&B.pr>U.pr;)B=B._next;(U._prev=B?B._prev:le)?U._prev._next=U:Y=U,(U._next=B)?B._prev=U:le=U,U=Q}this._firstPT=Y}return!0},o.parse=function(x,S,D,I){var C=x.style,k,U,B,Y,le,Q,Me,ue,K,Ie;for(k in S){if(Q=S[k],typeof Q=="function"&&(Q=Q(De,xe)),U=a[k],U)D=U.parse(x,Q,k,this,D,I,S);else if(k.substr(0,2)==="--"){this._tween._propLookup[k]=this._addTween.call(this._tween,x.style,"setProperty",H(x).getPropertyValue(k)+"",Q+"",k,!1,k);continue}else le=W(x,k,r)+"",K=typeof Q=="string",k==="color"||k==="fill"||k==="stroke"||k.indexOf("Color")!==-1||K&&g.test(Q)?(K||(Q=be(Q),Q=(Q.length>3?"rgba(":"rgb(")+Q.join(",")+")"),D=it(C,k,le,Q,!0,"transparent",D,0,I)):K&&$.test(Q)?D=it(C,k,le,Q,!0,null,D,0,I):(B=parseFloat(le),Me=B||B===0?le.substr((B+"").length):"",(le===""||le==="auto")&&(k==="width"||k==="height"?(B=b(x,k,r),Me="px"):k==="left"||k==="top"?(B=oe(x,k,r),Me="px"):(B=k!=="opacity"?0:1,Me="")),Ie=K&&Q.charAt(1)==="=",Ie?(Y=parseInt(Q.charAt(0)+"1",10),Q=Q.substr(2),Y*=parseFloat(Q),ue=Q.replace(c,"")):(Y=parseFloat(Q),ue=K?Q.replace(c,""):""),ue===""&&(ue=k in i?i[k]:Me),Q=Y||Y===0?(Ie?Y+B:Y)+ue:S[k],Me!==ue&&(ue!==""||k==="lineHeight")&&(Y||Y===0)&&B&&(B=pe(x,k,B,Me),ue==="%"?(B/=pe(x,k,100,"%")/100,S.strictUnits!==!0&&(le=B+"%")):ue==="em"||ue==="rem"||ue==="vw"||ue==="vh"?B/=pe(x,k,1,ue):ue!=="px"&&(Y=pe(x,k,Y,ue),ue="px"),Ie&&(Y||Y===0)&&(Q=Y+B+ue)),Ie&&(Y+=B),(B||B===0)&&(Y||Y===0)?(D=new $e(C,k,B,Y-B,D,0,k,ze!==!1&&(ue==="px"||k==="zIndex"),0,le,Q),D.xs0=ue):C[k]===void 0||!Q&&(Q+""=="NaN"||Q==null)?we("invalid "+k+" tween value: "+S[k]):(D=new $e(C,k,Y||B||0,0,D,-1,k,!1,0,le,Q),D.xs0=Q==="none"&&(k==="display"||k.indexOf("Style")!==-1)?le:Q));I&&D&&!D.plugin&&(D.plugin=I)}return D},o.setRatio=function(x){var S=this._firstPT,D=1e-6,I,C,k;if(x===1&&(this._tween._time===this._tween._duration||this._tween._time===0))for(;S;){if(S.type!==2)if(S.r&&S.type!==-1){if(I=S.r(S.s+S.c),!S.type)S.t[S.p]=I+S.xs0;else if(S.type===1){for(k=S.l,C=S.xs0+I+S.xs1,k=1;k<S.l;k++)C+=S["xn"+k]+S["xs"+(k+1)];S.t[S.p]=C}}else S.t[S.p]=S.e;else S.setRatio(x);S=S._next}else if(x||!(this._tween._time===this._tween._duration||this._tween._time===0)||this._tween._rawPrevTime===-1e-6)for(;S;){if(I=S.c*x+S.s,S.r?I=S.r(I):I<D&&I>-D&&(I=0),!S.type)S.t[S.p]=I+S.xs0;else if(S.type===1)if(k=S.l,k===2)S.t[S.p]=S.xs0+I+S.xs1+S.xn1+S.xs2;else if(k===3)S.t[S.p]=S.xs0+I+S.xs1+S.xn1+S.xs2+S.xn2+S.xs3;else if(k===4)S.t[S.p]=S.xs0+I+S.xs1+S.xn1+S.xs2+S.xn2+S.xs3+S.xn3+S.xs4;else if(k===5)S.t[S.p]=S.xs0+I+S.xs1+S.xn1+S.xs2+S.xn2+S.xs3+S.xn3+S.xs4+S.xn4+S.xs5;else{for(C=S.xs0+I+S.xs1,k=1;k<S.l;k++)C+=S["xn"+k]+S["xs"+(k+1)];S.t[S.p]=C}else S.type===-1?S.t[S.p]=S.xs0:S.setRatio&&S.setRatio(x);S=S._next}else for(;S;)S.type!==2?S.t[S.p]=S.b:S.setRatio(x),S=S._next},o._enableTransforms=function(x){this._transform=this._transform||Ai(this._target,r,!0),this._transformType=!(this._transform.svg&&Gt)&&(x||this._transformType===3)?3:2};var he=function(x){this.t[this.p]=this.e,this.data._linkCSSP(this,this._next,null,!0)};o._addLazySet=function(x,S,D){var I=this._firstPT=new $e(x,S,0,0,this._firstPT,2);I.e=D,I.setRatio=he,I.data=this},o._linkCSSP=function(x,S,D,I){return x&&(S&&(S._prev=x),x._next&&(x._next._prev=x._prev),x._prev?x._prev._next=x._next:this._firstPT===x&&(this._firstPT=x._next,I=!0),D?D._next=x:!I&&this._firstPT===null&&(this._firstPT=x),x._next=S,x._prev=D),x},o._mod=function(x){for(var S=this._firstPT;S;)typeof x[S.p]=="function"&&(S.r=x[S.p]),S=S._next},o._kill=function(x){var S=x,D,I,C;if(x.autoAlpha||x.alpha){S={};for(I in x)S[I]=x[I];S.opacity=1,S.autoAlpha&&(S.visibility=1)}for(x.className&&(D=this._classNamePT)&&(C=D.xfirst,C&&C._prev?this._linkCSSP(C._prev,D._next,C._prev._prev):C===this._firstPT&&(this._firstPT=D._next),D._next&&this._linkCSSP(D._next,D._next._next,C._prev),this._classNamePT=null),D=this._firstPT;D;)D.plugin&&D.plugin!==I&&D.plugin._kill&&(D.plugin._kill(x),I=D.plugin),D=D._next;return za.prototype._kill.call(this,S)};var de=function(x,S,D){var I,C,k,U;if(x.slice){for(C=x.length;--C>-1;)de(x[C],S,D);return}for(I=x.childNodes,C=I.length;--C>-1;)k=I[C],U=k.type,k.style&&(S.push(ye(k)),D&&D.push(k)),(U===1||U===9||U===11)&&k.childNodes.length&&de(k,S,D)};return t.cascadeTo=function(x,S,D){var I=lt.to(x,S,D),C=[I],k=[],U=[],B=[],Y=lt._internals.reservedProps,le,Q,Me,ue;for(x=I._targets||I.target,de(x,k,B),I.render(S,!0,!0),de(x,U),I.render(0,!0,!0),I._enabled(!0),le=B.length;--le>-1;)if(Q=ve(B[le],k[le],U[le]),Q.firstMPT){Q=Q.difs;for(Me in D)Y[Me]&&(Q[Me]=D[Me]);ue={};for(Me in Q)ue[Me]=k[le][Me];C.push(lt.fromTo(B[le],S,ue,Q))}return C},za.activate([t]),t},!0);var zb=Nt.CSSPlugin;/*!
 * VERSION: 0.6.1
 * DATE: 2018-08-27
 * UPDATES AND DOCS AT: http://greensock.com
 *
 * @license Copyright (c) 2008-2018, GreenSock. All rights reserved.
 * This work is subject to the terms at http://greensock.com/standard-license or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 * 
 * @author: Jack Doyle, jack@greensock.com
 */var kb=Lt._gsDefine.plugin({propName:"attr",API:2,version:"0.6.1",init:function(t,e,n,i){var r,s;if(typeof t.setAttribute!="function")return!1;for(r in e)s=e[r],typeof s=="function"&&(s=s(i,t)),this._addTween(t,"setAttribute",t.getAttribute(r)+"",s+"",r,!1,r),this._overwriteProps.push(r);return!0}});/*!
 * VERSION: 1.6.0
 * DATE: 2018-08-27
 * UPDATES AND DOCS AT: http://greensock.com
 *
 * @license Copyright (c) 2008-2018, GreenSock. All rights reserved.
 * This work is subject to the terms at http://greensock.com/standard-license or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 * 
 * @author: Jack Doyle, jack@greensock.com
 **/var Vp=Lt._gsDefine.plugin({propName:"roundProps",version:"1.7.0",priority:-1,API:2,init:function(t,e,n){return this._tween=n,!0}}),Hb=function(t){var e=t<1?Math.pow(10,(t+"").length-2):1;return function(n){return(Math.round(n/t)*t*e|0)/e}},Vb=function(t,e){for(;t;)!t.f&&!t.blob&&(t.m=e||Math.round),t=t._next},Gp=Vp.prototype;Gp._onInitAllProps=function(){var t=this._tween,e=t.vars.roundProps,n={},i=t._propLookup.roundProps,r,s,a,o;if(typeof e=="object"&&!e.push)for(o in e)n[o]=Hb(e[o]);else for(typeof e=="string"&&(e=e.split(",")),a=e.length;--a>-1;)n[e[a]]=Math.round;for(o in n)for(r=t._firstPT;r;)s=r._next,r.pg?r.t._mod(n):r.n===o&&(r.f===2&&r.t?Vb(r.t._firstPT,n[o]):(this._add(r.t,o,r.s,r.c,n[o]),s&&(s._prev=r._prev),r._prev?r._prev._next=s:t._firstPT===r&&(t._firstPT=s),r._next=r._prev=null,t._propLookup[o]=i)),r=s;return!1};Gp._add=function(t,e,n,i,r){this._addTween(t,e,n,n+i,e,r||Math.round),this._overwriteProps.push(e)};/*!
 * VERSION: 0.3.1
 * DATE: 2018-08-27
 * UPDATES AND DOCS AT: http://greensock.com
 *
 * @license Copyright (c) 2008-2018, GreenSock. All rights reserved.
 * This work is subject to the terms at http://greensock.com/standard-license or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 * 
 * @author: Jack Doyle, jack@greensock.com
 **/var Wp=Lt._gsDefine.plugin({propName:"directionalRotation",version:"0.3.1",API:2,init:function(t,e,n,i){typeof e!="object"&&(e={rotation:e}),this.finals={};var r=e.useRadians===!0?Math.PI*2:360,s=1e-6,a,o,l,f,u,d;for(a in e)a!=="useRadians"&&(f=e[a],typeof f=="function"&&(f=f(i,t)),d=(f+"").split("_"),o=d[0],l=parseFloat(typeof t[a]!="function"?t[a]:t[a.indexOf("set")||typeof t["get"+a.substr(3)]!="function"?a:"get"+a.substr(3)]()),f=this.finals[a]=typeof o=="string"&&o.charAt(1)==="="?l+parseInt(o.charAt(0)+"1",10)*Number(o.substr(2)):Number(o)||0,u=f-l,d.length&&(o=d.join("_"),o.indexOf("short")!==-1&&(u=u%r,u!==u%(r/2)&&(u=u<0?u+r:u-r)),o.indexOf("_cw")!==-1&&u<0?u=(u+r*9999999999)%r-(u/r|0)*r:o.indexOf("ccw")!==-1&&u>0&&(u=(u-r*9999999999)%r-(u/r|0)*r)),(u>s||u<-s)&&(this._addTween(t,a,l,l+u,a),this._overwriteProps.push(a)));return!0},set:function(t){var e;if(t!==1)this._super.setRatio.call(this,t);else for(e=this._firstPT;e;)e.f?e.t[e.p](this.finals[e.p]):e.t[e.p]=this.finals[e.p],e=e._next}});Wp._autoCSS=!0;/*!
 * VERSION: 2.0.2
 * DATE: 2018-08-27
 * UPDATES AND DOCS AT: http://greensock.com
 *
 * @license Copyright (c) 2008-2018, GreenSock. All rights reserved.
 * This work is subject to the terms at http://greensock.com/standard-license or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 * 
 * @author: Jack Doyle, jack@greensock.com
 */Lt._gsDefine("TimelineLite",["core.Animation","core.SimpleTimeline","TweenLite"],function(){var t=function(p){Mr.call(this,p),this._labels={},this.autoRemoveChildren=this.vars.autoRemoveChildren===!0,this.smoothChildTiming=this.vars.smoothChildTiming===!0,this._sortChildren=!0,this._onUpdate=this.vars.onUpdate;var y=this.vars,g,h;for(h in y)g=y[h],s(g)&&g.join("").indexOf("{self}")!==-1&&(y[h]=this._swapSelfInParams(g));s(y.tweens)&&this.add(y.tweens,0,y.align,y.stagger)},e=1e-10,n=lt._internals,i=t._internals={},r=n.isSelector,s=n.isArray,a=n.lazyTweens,o=n.lazyRender,l=Lt._gsDefine.globals,f=function(p){var y={},g;for(g in p)y[g]=p[g];return y},u=function(p,y,g){var h=p.cycle,T,M;for(T in h)M=h[T],p[T]=typeof M=="function"?M(g,y[g]):M[g%M.length];delete p.cycle},d=i.pauseCallback=function(){},c=function(p){var y=[],g=p.length,h;for(h=0;h!==g;y.push(p[h++]));return y},m=t.prototype=new Mr;return t.version="2.0.2",m.constructor=t,m.kill()._gc=m._forcingPlayhead=m._hasPause=!1,m.to=function(p,y,g,h){var T=g.repeat&&l.TweenMax||lt;return y?this.add(new T(p,y,g),h):this.set(p,g,h)},m.from=function(p,y,g,h){return this.add((g.repeat&&l.TweenMax||lt).from(p,y,g),h)},m.fromTo=function(p,y,g,h,T){var M=h.repeat&&l.TweenMax||lt;return y?this.add(M.fromTo(p,y,g,h),T):this.set(p,h,T)},m.staggerTo=function(p,y,g,h,T,M,w,V){var L=new t({onComplete:M,onCompleteParams:w,callbackScope:V,smoothChildTiming:this.smoothChildTiming}),z=g.cycle,X,$;for(typeof p=="string"&&(p=lt.selector(p)||p),p=p||[],r(p)&&(p=c(p)),h=h||0,h<0&&(p=c(p),p.reverse(),h*=-1),$=0;$<p.length;$++)X=f(g),X.startAt&&(X.startAt=f(X.startAt),X.startAt.cycle&&u(X.startAt,p,$)),z&&(u(X,p,$),X.duration!=null&&(y=X.duration,delete X.duration)),L.to(p[$],y,X,$*h);return this.add(L,T)},m.staggerFrom=function(p,y,g,h,T,M,w,V){return g.immediateRender=g.immediateRender!=!1,g.runBackwards=!0,this.staggerTo(p,y,g,h,T,M,w,V)},m.staggerFromTo=function(p,y,g,h,T,M,w,V,L){return h.startAt=g,h.immediateRender=h.immediateRender!=!1&&g.immediateRender!=!1,this.staggerTo(p,y,h,T,M,w,V,L)},m.call=function(p,y,g,h){return this.add(lt.delayedCall(0,p,y,g),h)},m.set=function(p,y,g){return g=this._parseTimeOrLabel(g,0,!0),y.immediateRender==null&&(y.immediateRender=g===this._time&&!this._paused),this.add(new lt(p,0,y),g)},t.exportRoot=function(p,y){p=p||{},p.smoothChildTiming==null&&(p.smoothChildTiming=!0);var g=new t(p),h=g._timeline,T,M,w,V;for(y==null&&(y=!0),h._remove(g,!0),g._startTime=0,g._rawPrevTime=g._time=g._totalTime=h._time,w=h._first;w;)V=w._next,(!y||!(w instanceof lt&&w.target===w.vars.onComplete))&&(M=w._startTime-w._delay,M<0&&(T=1),g.add(w,M)),w=V;return h.add(g,0),T&&g.totalDuration(),g},m.add=function(p,y,g,h){var T,M,w,V,L,z;if(typeof y!="number"&&(y=this._parseTimeOrLabel(y,0,!0,p)),!(p instanceof Qt))if(p instanceof Array||p&&p.push&&s(p)){for(g=g||"normal",h=h||0,T=y,M=p.length,w=0;w<M;w++)s(V=p[w])&&(V=new t({tweens:V})),this.add(V,T),typeof V!="string"&&typeof V!="function"&&(g==="sequence"?T=V._startTime+V.totalDuration()/V._timeScale:g==="start"&&(V._startTime-=V.delay())),T+=h;return this._uncache(!0)}else{if(typeof p=="string")return this.addLabel(p,y);if(typeof p=="function")p=lt.delayedCall(0,p);else throw"Cannot add "+p+" into the timeline; it is not a tween, timeline, function, or string."}if(Mr.prototype.add.call(this,p,y),p._time&&(T=Math.max(0,Math.min(p.totalDuration(),(this.rawTime()-p._startTime)*p._timeScale)),Math.abs(T-p._totalTime)>1e-5&&p.render(T,!1,!1)),(this._gc||this._time===this._duration)&&!this._paused&&this._duration<this.duration())for(L=this,z=L.rawTime()>p._startTime;L._timeline;)z&&L._timeline.smoothChildTiming?L.totalTime(L._totalTime,!0):L._gc&&L._enabled(!0,!1),L=L._timeline;return this},m.remove=function(p){if(p instanceof Qt){this._remove(p,!1);var y=p._timeline=p.vars.useFrames?Qt._rootFramesTimeline:Qt._rootTimeline;return p._startTime=(p._paused?p._pauseTime:y._time)-(p._reversed?p.totalDuration()-p._totalTime:p._totalTime)/p._timeScale,this}else if(p instanceof Array||p&&p.push&&s(p)){for(var g=p.length;--g>-1;)this.remove(p[g]);return this}else if(typeof p=="string")return this.removeLabel(p);return this.kill(null,p)},m._remove=function(p,y){Mr.prototype._remove.call(this,p,y);var g=this._last;return g?this._time>this.duration()&&(this._time=this._duration,this._totalTime=this._totalDuration):this._time=this._totalTime=this._duration=this._totalDuration=0,this},m.append=function(p,y){return this.add(p,this._parseTimeOrLabel(null,y,!0,p))},m.insert=m.insertMultiple=function(p,y,g,h){return this.add(p,y||0,g,h)},m.appendMultiple=function(p,y,g,h){return this.add(p,this._parseTimeOrLabel(null,y,!0,p),g,h)},m.addLabel=function(p,y){return this._labels[p]=this._parseTimeOrLabel(y),this},m.addPause=function(p,y,g,h){var T=lt.delayedCall(0,d,g,h||this);return T.vars.onComplete=T.vars.onReverseComplete=y,T.data="isPause",this._hasPause=!0,this.add(T,p)},m.removeLabel=function(p){return delete this._labels[p],this},m.getLabelTime=function(p){return this._labels[p]!=null?this._labels[p]:-1},m._parseTimeOrLabel=function(p,y,g,h){var T,M;if(h instanceof Qt&&h.timeline===this)this.remove(h);else if(h&&(h instanceof Array||h.push&&s(h)))for(M=h.length;--M>-1;)h[M]instanceof Qt&&h[M].timeline===this&&this.remove(h[M]);if(T=typeof p=="number"&&!y?0:this.duration()>99999999999?this.recent().endTime(!1):this._duration,typeof y=="string")return this._parseTimeOrLabel(y,g&&typeof p=="number"&&this._labels[y]==null?p-T:0,g);if(y=y||0,typeof p=="string"&&(isNaN(p)||this._labels[p]!=null)){if(M=p.indexOf("="),M===-1)return this._labels[p]==null?g?this._labels[p]=T+y:y:this._labels[p]+y;y=parseInt(p.charAt(M-1)+"1",10)*Number(p.substr(M+1)),p=M>1?this._parseTimeOrLabel(p.substr(0,M-1),0,g):T}else p==null&&(p=T);return Number(p)+y},m.seek=function(p,y){return this.totalTime(typeof p=="number"?p:this._parseTimeOrLabel(p),y!==!1)},m.stop=function(){return this.paused(!0)},m.gotoAndPlay=function(p,y){return this.play(p,y)},m.gotoAndStop=function(p,y){return this.pause(p,y)},m.render=function(p,y,g){this._gc&&this._enabled(!0,!1);var h=this._time,T=this._dirty?this.totalDuration():this._totalDuration,M=this._startTime,w=this._timeScale,V=this._paused,L,z,X,$,E,R,G;if(h!==this._time&&(p+=this._time-h),p>=T-1e-7&&p>=0)this._totalTime=this._time=T,this._reversed||this._hasPausedChild()||(z=!0,$="onComplete",E=!!this._timeline.autoRemoveChildren,this._duration===0&&(p<=0&&p>=-1e-7||this._rawPrevTime<0||this._rawPrevTime===e)&&this._rawPrevTime!==p&&this._first&&(E=!0,this._rawPrevTime>e&&($="onReverseComplete"))),this._rawPrevTime=this._duration||!y||p||this._rawPrevTime===p?p:e,p=T+1e-4;else if(p<1e-7)if(this._totalTime=this._time=0,(h!==0||this._duration===0&&this._rawPrevTime!==e&&(this._rawPrevTime>0||p<0&&this._rawPrevTime>=0))&&($="onReverseComplete",z=this._reversed),p<0)this._active=!1,this._timeline.autoRemoveChildren&&this._reversed?(E=z=!0,$="onReverseComplete"):this._rawPrevTime>=0&&this._first&&(E=!0),this._rawPrevTime=p;else{if(this._rawPrevTime=this._duration||!y||p||this._rawPrevTime===p?p:e,p===0&&z)for(L=this._first;L&&L._startTime===0;)L._duration||(z=!1),L=L._next;p=0,this._initted||(E=!0)}else{if(this._hasPause&&!this._forcingPlayhead&&!y){if(p>=h)for(L=this._first;L&&L._startTime<=p&&!R;)L._duration||L.data==="isPause"&&!L.ratio&&!(L._startTime===0&&this._rawPrevTime===0)&&(R=L),L=L._next;else for(L=this._last;L&&L._startTime>=p&&!R;)L._duration||L.data==="isPause"&&L._rawPrevTime>0&&(R=L),L=L._prev;R&&(this._time=p=R._startTime,this._totalTime=p+this._cycle*(this._totalDuration+this._repeatDelay))}this._totalTime=this._time=this._rawPrevTime=p}if(!((this._time===h||!this._first)&&!g&&!E&&!R)){if(this._initted||(this._initted=!0),this._active||!this._paused&&this._time!==h&&p>0&&(this._active=!0),h===0&&this.vars.onStart&&(this._time!==0||!this._duration)&&(y||this._callback("onStart")),G=this._time,G>=h)for(L=this._first;L&&(X=L._next,!(G!==this._time||this._paused&&!V));)(L._active||L._startTime<=G&&!L._paused&&!L._gc)&&(R===L&&this.pause(),L._reversed?L.render((L._dirty?L.totalDuration():L._totalDuration)-(p-L._startTime)*L._timeScale,y,g):L.render((p-L._startTime)*L._timeScale,y,g)),L=X;else for(L=this._last;L&&(X=L._prev,!(G!==this._time||this._paused&&!V));){if(L._active||L._startTime<=h&&!L._paused&&!L._gc){if(R===L){for(R=L._prev;R&&R.endTime()>this._time;)R.render(R._reversed?R.totalDuration()-(p-R._startTime)*R._timeScale:(p-R._startTime)*R._timeScale,y,g),R=R._prev;R=null,this.pause()}L._reversed?L.render((L._dirty?L.totalDuration():L._totalDuration)-(p-L._startTime)*L._timeScale,y,g):L.render((p-L._startTime)*L._timeScale,y,g)}L=X}this._onUpdate&&(y||(a.length&&o(),this._callback("onUpdate"))),$&&(this._gc||(M===this._startTime||w!==this._timeScale)&&(this._time===0||T>=this.totalDuration())&&(z&&(a.length&&o(),this._timeline.autoRemoveChildren&&this._enabled(!1,!1),this._active=!1),!y&&this.vars[$]&&this._callback($)))}},m._hasPausedChild=function(){for(var p=this._first;p;){if(p._paused||p instanceof t&&p._hasPausedChild())return!0;p=p._next}return!1},m.getChildren=function(p,y,g,h){h=h||-9999999999;for(var T=[],M=this._first,w=0;M;)M._startTime<h||(M instanceof lt?y!==!1&&(T[w++]=M):(g!==!1&&(T[w++]=M),p!==!1&&(T=T.concat(M.getChildren(!0,y,g)),w=T.length))),M=M._next;return T},m.getTweensOf=function(p,y){var g=this._gc,h=[],T=0,M,w;for(g&&this._enabled(!0,!0),M=lt.getTweensOf(p),w=M.length;--w>-1;)(M[w].timeline===this||y&&this._contains(M[w]))&&(h[T++]=M[w]);return g&&this._enabled(!1,!0),h},m.recent=function(){return this._recent},m._contains=function(p){for(var y=p.timeline;y;){if(y===this)return!0;y=y.timeline}return!1},m.shiftChildren=function(p,y,g){g=g||0;for(var h=this._first,T=this._labels,M;h;)h._startTime>=g&&(h._startTime+=p),h=h._next;if(y)for(M in T)T[M]>=g&&(T[M]+=p);return this._uncache(!0)},m._kill=function(p,y){if(!p&&!y)return this._enabled(!1,!1);for(var g=y?this.getTweensOf(y):this.getChildren(!0,!0,!1),h=g.length,T=!1;--h>-1;)g[h]._kill(p,y)&&(T=!0);return T},m.clear=function(p){var y=this.getChildren(!1,!0,!0),g=y.length;for(this._time=this._totalTime=0;--g>-1;)y[g]._enabled(!1,!1);return p!==!1&&(this._labels={}),this._uncache(!0)},m.invalidate=function(){for(var p=this._first;p;)p.invalidate(),p=p._next;return Qt.prototype.invalidate.call(this)},m._enabled=function(p,y){if(p===this._gc)for(var g=this._first;g;)g._enabled(p,!0),g=g._next;return Mr.prototype._enabled.call(this,p,y)},m.totalTime=function(p,y,g){this._forcingPlayhead=!0;var h=Qt.prototype.totalTime.apply(this,arguments);return this._forcingPlayhead=!1,h},m.duration=function(p){return arguments.length?(this.duration()!==0&&p!==0&&this.timeScale(this._duration/p),this):(this._dirty&&this.totalDuration(),this._duration)},m.totalDuration=function(p){if(!arguments.length){if(this._dirty){for(var y=0,g=this._last,h=999999999999,T,M;g;)T=g._prev,g._dirty&&g.totalDuration(),g._startTime>h&&this._sortChildren&&!g._paused&&!this._calculatingDuration?(this._calculatingDuration=1,this.add(g,g._startTime-g._delay),this._calculatingDuration=0):h=g._startTime,g._startTime<0&&!g._paused&&(y-=g._startTime,this._timeline.smoothChildTiming&&(this._startTime+=g._startTime/this._timeScale,this._time-=g._startTime,this._totalTime-=g._startTime,this._rawPrevTime-=g._startTime),this.shiftChildren(-g._startTime,!1,-9999999999),h=0),M=g._startTime+g._totalDuration/g._timeScale,M>y&&(y=M),g=T;this._duration=this._totalDuration=y,this._dirty=!1}return this._totalDuration}return p&&this.totalDuration()?this.timeScale(this._totalDuration/p):this},m.paused=function(p){if(!p)for(var y=this._first,g=this._time;y;)y._startTime===g&&y.data==="isPause"&&(y._rawPrevTime=0),y=y._next;return Qt.prototype.paused.apply(this,arguments)},m.usesFrames=function(){for(var p=this._timeline;p._timeline;)p=p._timeline;return p===Qt._rootFramesTimeline},m.rawTime=function(p){return p&&(this._paused||this._repeat&&this.time()>0&&this.totalProgress()<1)?this._totalTime%(this._duration+this._repeatDelay):this._paused?this._totalTime:(this._timeline.rawTime(p)-this._startTime)*this._timeScale},t},!0);var gr=Nt.TimelineLite;/*!
 * VERSION: 2.0.2
 * DATE: 2018-08-27
 * UPDATES AND DOCS AT: http://greensock.com
 *
 * @license Copyright (c) 2008-2018, GreenSock. All rights reserved.
 * This work is subject to the terms at http://greensock.com/standard-license or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 * 
 * @author: Jack Doyle, jack@greensock.com
 */Lt._gsDefine("TimelineMax",["TimelineLite","TweenLite","easing.Ease"],function(){var t=function(l){gr.call(this,l),this._repeat=this.vars.repeat||0,this._repeatDelay=this.vars.repeatDelay||0,this._cycle=0,this._yoyo=this.vars.yoyo===!0,this._dirty=!0},e=1e-10,n=lt._internals,i=n.lazyTweens,r=n.lazyRender,s=Lt._gsDefine.globals,a=new en(null,null,1,0),o=t.prototype=new gr;return o.constructor=t,o.kill()._gc=!1,t.version="2.0.2",o.invalidate=function(){return this._yoyo=this.vars.yoyo===!0,this._repeat=this.vars.repeat||0,this._repeatDelay=this.vars.repeatDelay||0,this._uncache(!0),gr.prototype.invalidate.call(this)},o.addCallback=function(l,f,u,d){return this.add(lt.delayedCall(0,l,u,d),f)},o.removeCallback=function(l,f){if(l)if(f==null)this._kill(null,l);else for(var u=this.getTweensOf(l,!1),d=u.length,c=this._parseTimeOrLabel(f);--d>-1;)u[d]._startTime===c&&u[d]._enabled(!1,!1);return this},o.removePause=function(l){return this.removeCallback(gr._internals.pauseCallback,l)},o.tweenTo=function(l,f){f=f||{};var u={ease:a,useFrames:this.usesFrames(),immediateRender:!1,lazy:!1},d=f.repeat&&s.TweenMax||lt,c,m,p;for(m in f)u[m]=f[m];return u.time=this._parseTimeOrLabel(l),c=Math.abs(Number(u.time)-this._time)/this._timeScale||.001,p=new d(this,c,u),u.onStart=function(){p.target.paused(!0),p.vars.time!==p.target.time()&&c===p.duration()&&!p.isFromTo&&p.duration(Math.abs(p.vars.time-p.target.time())/p.target._timeScale).render(p.time(),!0,!0),f.onStart&&f.onStart.apply(f.onStartScope||f.callbackScope||p,f.onStartParams||[])},p},o.tweenFromTo=function(l,f,u){u=u||{},l=this._parseTimeOrLabel(l),u.startAt={onComplete:this.seek,onCompleteParams:[l],callbackScope:this},u.immediateRender=u.immediateRender!==!1;var d=this.tweenTo(f,u);return d.isFromTo=1,d.duration(Math.abs(d.vars.time-l)/this._timeScale||.001)},o.render=function(l,f,u){this._gc&&this._enabled(!0,!1);var d=this._time,c=this._dirty?this.totalDuration():this._totalDuration,m=this._duration,p=this._totalTime,y=this._startTime,g=this._timeScale,h=this._rawPrevTime,T=this._paused,M=this._cycle,w,V,L,z,X,$,E,R;if(d!==this._time&&(l+=this._time-d),l>=c-1e-7&&l>=0)this._locked||(this._totalTime=c,this._cycle=this._repeat),this._reversed||this._hasPausedChild()||(V=!0,z="onComplete",X=!!this._timeline.autoRemoveChildren,this._duration===0&&(l<=0&&l>=-1e-7||h<0||h===e)&&h!==l&&this._first&&(X=!0,h>e&&(z="onReverseComplete"))),this._rawPrevTime=this._duration||!f||l||this._rawPrevTime===l?l:e,this._yoyo&&this._cycle&1?this._time=l=0:(this._time=m,l=m+1e-4);else if(l<1e-7)if(this._locked||(this._totalTime=this._cycle=0),this._time=0,(d!==0||m===0&&h!==e&&(h>0||l<0&&h>=0)&&!this._locked)&&(z="onReverseComplete",V=this._reversed),l<0)this._active=!1,this._timeline.autoRemoveChildren&&this._reversed?(X=V=!0,z="onReverseComplete"):h>=0&&this._first&&(X=!0),this._rawPrevTime=l;else{if(this._rawPrevTime=m||!f||l||this._rawPrevTime===l?l:e,l===0&&V)for(w=this._first;w&&w._startTime===0;)w._duration||(V=!1),w=w._next;l=0,this._initted||(X=!0)}else if(m===0&&h<0&&(X=!0),this._time=this._rawPrevTime=l,this._locked||(this._totalTime=l,this._repeat!==0&&($=m+this._repeatDelay,this._cycle=this._totalTime/$>>0,this._cycle!==0&&this._cycle===this._totalTime/$&&p<=l&&this._cycle--,this._time=this._totalTime-this._cycle*$,this._yoyo&&this._cycle&1&&(this._time=m-this._time),this._time>m?(this._time=m,l=m+1e-4):this._time<0?this._time=l=0:l=this._time)),this._hasPause&&!this._forcingPlayhead&&!f){if(l=this._time,l>=d||this._repeat&&M!==this._cycle)for(w=this._first;w&&w._startTime<=l&&!E;)w._duration||w.data==="isPause"&&!w.ratio&&!(w._startTime===0&&this._rawPrevTime===0)&&(E=w),w=w._next;else for(w=this._last;w&&w._startTime>=l&&!E;)w._duration||w.data==="isPause"&&w._rawPrevTime>0&&(E=w),w=w._prev;E&&E._startTime<m&&(this._time=l=E._startTime,this._totalTime=l+this._cycle*(this._totalDuration+this._repeatDelay))}if(this._cycle!==M&&!this._locked){var G=this._yoyo&&(M&1)!==0,q=G===(this._yoyo&&(this._cycle&1)!==0),ce=this._totalTime,re=this._cycle,ae=this._rawPrevTime,me=this._time;if(this._totalTime=M*m,this._cycle<M?G=!G:this._totalTime+=m,this._time=d,this._rawPrevTime=m===0?h-1e-4:h,this._cycle=M,this._locked=!0,d=G?0:m,this.render(d,f,m===0),f||this._gc||this.vars.onRepeat&&(this._cycle=re,this._locked=!1,this._callback("onRepeat")),d!==this._time||(q&&(this._cycle=M,this._locked=!0,d=G?m+1e-4:-1e-4,this.render(d,!0,!1)),this._locked=!1,this._paused&&!T))return;this._time=me,this._totalTime=ce,this._cycle=re,this._rawPrevTime=ae}if((this._time===d||!this._first)&&!u&&!X&&!E){p!==this._totalTime&&this._onUpdate&&(f||this._callback("onUpdate"));return}else this._initted||(this._initted=!0);if(this._active||!this._paused&&this._totalTime!==p&&l>0&&(this._active=!0),p===0&&this.vars.onStart&&(this._totalTime!==0||!this._totalDuration)&&(f||this._callback("onStart")),R=this._time,R>=d)for(w=this._first;w&&(L=w._next,!(R!==this._time||this._paused&&!T));)(w._active||w._startTime<=this._time&&!w._paused&&!w._gc)&&(E===w&&this.pause(),w._reversed?w.render((w._dirty?w.totalDuration():w._totalDuration)-(l-w._startTime)*w._timeScale,f,u):w.render((l-w._startTime)*w._timeScale,f,u)),w=L;else for(w=this._last;w&&(L=w._prev,!(R!==this._time||this._paused&&!T));){if(w._active||w._startTime<=d&&!w._paused&&!w._gc){if(E===w){for(E=w._prev;E&&E.endTime()>this._time;)E.render(E._reversed?E.totalDuration()-(l-E._startTime)*E._timeScale:(l-E._startTime)*E._timeScale,f,u),E=E._prev;E=null,this.pause()}w._reversed?w.render((w._dirty?w.totalDuration():w._totalDuration)-(l-w._startTime)*w._timeScale,f,u):w.render((l-w._startTime)*w._timeScale,f,u)}w=L}this._onUpdate&&(f||(i.length&&r(),this._callback("onUpdate"))),z&&(this._locked||this._gc||(y===this._startTime||g!==this._timeScale)&&(this._time===0||c>=this.totalDuration())&&(V&&(i.length&&r(),this._timeline.autoRemoveChildren&&this._enabled(!1,!1),this._active=!1),!f&&this.vars[z]&&this._callback(z)))},o.getActive=function(l,f,u){l==null&&(l=!0),f==null&&(f=!0),u==null&&(u=!1);var d=[],c=this.getChildren(l,f,u),m=0,p=c.length,y,g;for(y=0;y<p;y++)g=c[y],g.isActive()&&(d[m++]=g);return d},o.getLabelAfter=function(l){l||l!==0&&(l=this._time);var f=this.getLabelsArray(),u=f.length,d;for(d=0;d<u;d++)if(f[d].time>l)return f[d].name;return null},o.getLabelBefore=function(l){l==null&&(l=this._time);for(var f=this.getLabelsArray(),u=f.length;--u>-1;)if(f[u].time<l)return f[u].name;return null},o.getLabelsArray=function(){var l=[],f=0,u;for(u in this._labels)l[f++]={time:this._labels[u],name:u};return l.sort(function(d,c){return d.time-c.time}),l},o.invalidate=function(){return this._locked=!1,gr.prototype.invalidate.call(this)},o.progress=function(l,f){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&this._cycle&1?1-l:l)+this._cycle*(this._duration+this._repeatDelay),f):this._time/this.duration()||0},o.totalProgress=function(l,f){return arguments.length?this.totalTime(this.totalDuration()*l,f):this._totalTime/this.totalDuration()||0},o.totalDuration=function(l){return arguments.length?this._repeat===-1||!l?this:this.timeScale(this.totalDuration()/l):(this._dirty&&(gr.prototype.totalDuration.call(this),this._totalDuration=this._repeat===-1?999999999999:this._duration*(this._repeat+1)+this._repeatDelay*this._repeat),this._totalDuration)},o.time=function(l,f){return arguments.length?(this._dirty&&this.totalDuration(),l>this._duration&&(l=this._duration),this._yoyo&&this._cycle&1?l=this._duration-l+this._cycle*(this._duration+this._repeatDelay):this._repeat!==0&&(l+=this._cycle*(this._duration+this._repeatDelay)),this.totalTime(l,f)):this._time},o.repeat=function(l){return arguments.length?(this._repeat=l,this._uncache(!0)):this._repeat},o.repeatDelay=function(l){return arguments.length?(this._repeatDelay=l,this._uncache(!0)):this._repeatDelay},o.yoyo=function(l){return arguments.length?(this._yoyo=l,this):this._yoyo},o.currentLabel=function(l){return arguments.length?this.seek(l,!0):this.getLabelBefore(this._time+1e-8)},t},!0);var Gb=Nt.TimelineMax;/*!
 * VERSION: 1.3.8
 * DATE: 2018-05-30
 * UPDATES AND DOCS AT: http://greensock.com
 *
 * @license Copyright (c) 2008-2018, GreenSock. All rights reserved.
 * This work is subject to the terms at http://greensock.com/standard-license or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 * 
 * @author: Jack Doyle, jack@greensock.com
 **/var Wb=180/Math.PI,Wi=[],Er=[],vr=[],ka={},Xb=Lt._gsDefine.globals,ss=function(t,e,n,i){n===i&&(n=i-(i-e)/1e6),t===e&&(e=t+(n-t)/1e6),this.a=t,this.b=e,this.c=n,this.d=i,this.da=i-t,this.ca=n-t,this.ba=e-t},jb=",x,y,z,left,top,right,bottom,marginTop,marginLeft,marginRight,marginBottom,paddingLeft,paddingTop,paddingRight,paddingBottom,backgroundPosition,backgroundPosition_y,",Fc=function(t,e,n,i){var r={a:t},s={},a={},o={c:i},l=(t+e)/2,f=(e+n)/2,u=(n+i)/2,d=(l+f)/2,c=(f+u)/2,m=(c-d)/8;return r.b=l+(t-l)/4,s.b=d+m,r.c=s.a=(r.b+s.b)/2,s.c=a.a=(d+c)/2,a.b=c-m,o.b=u+(i-u)/4,a.c=o.a=(a.b+o.b)/2,[r,s,a,o]},qb=function(t,e,n,i,r){var s=t.length-1,a=0,o=t[0].a,l,f,u,d,c,m,p,y,g,h,T,M,w;for(l=0;l<s;l++)c=t[a],f=c.a,u=c.d,d=t[a+1].d,r?(T=Wi[l],M=Er[l],w=(M+T)*e*.25/(i?.5:vr[l]||.5),m=u-(u-f)*(i?e*.5:T!==0?w/T:0),p=u+(d-u)*(i?e*.5:M!==0?w/M:0),y=u-(m+((p-m)*(T*3/(T+M)+.5)/4||0))):(m=u-(u-f)*e*.5,p=u+(d-u)*e*.5,y=u-(m+p)/2),m+=y,p+=y,c.c=g=m,l!==0?c.b=o:c.b=o=c.a+(c.c-c.a)*.6,c.da=u-f,c.ca=g-f,c.ba=o-f,n?(h=Fc(f,o,g,u),t.splice(a,1,h[0],h[1],h[2],h[3]),a+=4):a++,o=p;c=t[a],c.b=o,c.c=o+(c.d-o)*.4,c.da=c.d-c.a,c.ca=c.c-c.a,c.ba=o-c.a,n&&(h=Fc(c.a,o,c.c,c.d),t.splice(a,1,h[0],h[1],h[2],h[3]))},Yb=function(t,e,n,i){var r=[],s,a,o,l,f,u;if(i)for(t=[i].concat(t),a=t.length;--a>-1;)typeof(u=t[a][e])=="string"&&u.charAt(1)==="="&&(t[a][e]=i[e]+Number(u.charAt(0)+u.substr(2)));if(s=t.length-2,s<0)return r[0]=new ss(t[0][e],0,0,t[0][e]),r;for(a=0;a<s;a++)o=t[a][e],l=t[a+1][e],r[a]=new ss(o,0,0,l),n&&(f=t[a+2][e],Wi[a]=(Wi[a]||0)+(l-o)*(l-o),Er[a]=(Er[a]||0)+(f-l)*(f-l));return r[a]=new ss(t[a][e],0,0,t[a+1][e]),r},Xp=function(t,e,n,i,r,s){var a={},o=[],l=s||t[0],f,u,d,c,m,p,y,g;r=typeof r=="string"?","+r+",":jb,e==null&&(e=1);for(u in t[0])o.push(u);if(t.length>1){for(g=t[t.length-1],y=!0,f=o.length;--f>-1;)if(u=o[f],Math.abs(l[u]-g[u])>.05){y=!1;break}y&&(t=t.concat(),s&&t.unshift(s),t.push(t[1]),s=t[t.length-3])}for(Wi.length=Er.length=vr.length=0,f=o.length;--f>-1;)u=o[f],ka[u]=r.indexOf(","+u+",")!==-1,a[u]=Yb(t,u,ka[u],s);for(f=Wi.length;--f>-1;)Wi[f]=Math.sqrt(Wi[f]),Er[f]=Math.sqrt(Er[f]);if(!i){for(f=o.length;--f>-1;)if(ka[u])for(d=a[o[f]],p=d.length-1,c=0;c<p;c++)m=d[c+1].da/Er[c]+d[c].da/Wi[c]||0,vr[c]=(vr[c]||0)+m*m;for(f=vr.length;--f>-1;)vr[f]=Math.sqrt(vr[f])}for(f=o.length,c=n?4:1;--f>-1;)u=o[f],d=a[u],qb(d,e,n,i,ka[u]),y&&(d.splice(0,c),d.splice(d.length-c,c));return a},$b=function(t,e,n){e=e||"soft";var i={},r=e==="cubic"?3:2,s=e==="soft",a=[],o,l,f,u,d,c,m,p,y,g,h;if(s&&n&&(t=[n].concat(t)),t==null||t.length<r+1)throw"invalid Bezier data";for(y in t[0])a.push(y);for(c=a.length;--c>-1;){for(y=a[c],i[y]=d=[],g=0,p=t.length,m=0;m<p;m++)o=n==null?t[m][y]:typeof(h=t[m][y])=="string"&&h.charAt(1)==="="?n[y]+Number(h.charAt(0)+h.substr(2)):Number(h),s&&m>1&&m<p-1&&(d[g++]=(o+d[g-2])/2),d[g++]=o;for(p=g-r+1,g=0,m=0;m<p;m+=r)o=d[m],l=d[m+1],f=d[m+2],u=r===2?0:d[m+3],d[g++]=h=r===3?new ss(o,l,f,u):new ss(o,(2*l+o)/3,(2*l+f)/3,f);d.length=g}return i},Kb=function(t,e,n){for(var i=1/n,r=t.length,s,a,o,l,f,u,d,c,m,p,y;--r>-1;)for(p=t[r],o=p.a,l=p.d-o,f=p.c-o,u=p.b-o,s=a=0,c=1;c<=n;c++)d=i*c,m=1-d,s=a-(a=(d*d*l+3*m*(d*f+m*u))*d),y=r*n+c-1,e[y]=(e[y]||0)+s*s},Zb=function(t,e){e=e>>0||6;var n=[],i=[],r=0,s=0,a=e-1,o=[],l=[],f,u,d,c;for(f in t)Kb(t[f],n,e);for(d=n.length,u=0;u<d;u++)r+=Math.sqrt(n[u]),c=u%e,l[c]=r,c===a&&(s+=r,c=u/e>>0,o[c]=l,i[c]=s,r=0,l=[]);return{length:s,lengths:i,segments:o}},Ji=Lt._gsDefine.plugin({propName:"bezier",priority:-1,version:"1.3.8",API:2,global:!0,init:function(t,e,n){this._target=t,e instanceof Array&&(e={values:e}),this._func={},this._mod={},this._props=[],this._timeRes=e.timeResolution==null?6:parseInt(e.timeResolution,10);var i=e.values||[],r={},s=i[0],a=e.autoRotate||n.vars.orientToBezier,o,l,f,u,d;this._autoRotate=a?a instanceof Array?a:[["x","y","rotation",a===!0?0:Number(a)||0]]:null;for(o in s)this._props.push(o);for(f=this._props.length;--f>-1;)o=this._props[f],this._overwriteProps.push(o),l=this._func[o]=typeof t[o]=="function",r[o]=l?t[o.indexOf("set")||typeof t["get"+o.substr(3)]!="function"?o:"get"+o.substr(3)]():parseFloat(t[o]),d||r[o]!==i[0][o]&&(d=r);if(this._beziers=e.type!=="cubic"&&e.type!=="quadratic"&&e.type!=="soft"?Xp(i,isNaN(e.curviness)?1:e.curviness,!1,e.type==="thruBasic",e.correlate,d):$b(i,e.type,r),this._segCount=this._beziers[o].length,this._timeRes){var c=Zb(this._beziers,this._timeRes);this._length=c.length,this._lengths=c.lengths,this._segments=c.segments,this._l1=this._li=this._s1=this._si=0,this._l2=this._lengths[0],this._curSeg=this._segments[0],this._s2=this._curSeg[0],this._prec=1/this._curSeg.length}if(a=this._autoRotate)for(this._initialRotations=[],a[0]instanceof Array||(this._autoRotate=a=[a]),f=a.length;--f>-1;){for(u=0;u<3;u++)o=a[f][u],this._func[o]=typeof t[o]=="function"?t[o.indexOf("set")||typeof t["get"+o.substr(3)]!="function"?o:"get"+o.substr(3)]:!1;o=a[f][2],this._initialRotations[f]=(this._func[o]?this._func[o].call(this._target):this._target[o])||0,this._overwriteProps.push(o)}return this._startRatio=n.vars.runBackwards?1:0,!0},set:function(t){var e=this._segCount,n=this._func,i=this._target,r=t!==this._startRatio,s,a,o,l,f,u,d,c,m,p;if(!this._timeRes)s=t<0?0:t>=1?e-1:e*t>>0,u=(t-s*(1/e))*e;else{if(m=this._lengths,p=this._curSeg,t*=this._length,o=this._li,t>this._l2&&o<e-1){for(c=e-1;o<c&&(this._l2=m[++o])<=t;);this._l1=m[o-1],this._li=o,this._curSeg=p=this._segments[o],this._s2=p[this._s1=this._si=0]}else if(t<this._l1&&o>0){for(;o>0&&(this._l1=m[--o])>=t;);o===0&&t<this._l1?this._l1=0:o++,this._l2=m[o],this._li=o,this._curSeg=p=this._segments[o],this._s1=p[(this._si=p.length-1)-1]||0,this._s2=p[this._si]}if(s=o,t-=this._l1,o=this._si,t>this._s2&&o<p.length-1){for(c=p.length-1;o<c&&(this._s2=p[++o])<=t;);this._s1=p[o-1],this._si=o}else if(t<this._s1&&o>0){for(;o>0&&(this._s1=p[--o])>=t;);o===0&&t<this._s1?this._s1=0:o++,this._s2=p[o],this._si=o}u=(o+(t-this._s1)/(this._s2-this._s1))*this._prec||0}for(a=1-u,o=this._props.length;--o>-1;)l=this._props[o],f=this._beziers[l][s],d=(u*u*f.da+3*a*(u*f.ca+a*f.ba))*u+f.a,this._mod[l]&&(d=this._mod[l](d,i)),n[l]?i[l](d):i[l]=d;if(this._autoRotate){var y=this._autoRotate,g,h,T,M,w,V,L;for(o=y.length;--o>-1;)l=y[o][2],V=y[o][3]||0,L=y[o][4]===!0?1:Wb,f=this._beziers[y[o][0]],g=this._beziers[y[o][1]],f&&g&&(f=f[s],g=g[s],h=f.a+(f.b-f.a)*u,M=f.b+(f.c-f.b)*u,h+=(M-h)*u,M+=(f.c+(f.d-f.c)*u-M)*u,T=g.a+(g.b-g.a)*u,w=g.b+(g.c-g.b)*u,T+=(w-T)*u,w+=(g.c+(g.d-g.c)*u-w)*u,d=r?Math.atan2(w-T,M-h)*L+V:this._initialRotations[o],this._mod[l]&&(d=this._mod[l](d,i)),n[l]?i[l](d):i[l]=d)}}}),jp=Ji.prototype;Ji.bezierThrough=Xp;Ji.cubicToQuadratic=Fc;Ji._autoCSS=!0;Ji.quadraticToCubic=function(t,e,n){return new ss(t,(2*e+t)/3,(2*e+n)/3,n)};Ji._cssRegister=function(){var t=Xb.CSSPlugin;if(t){var e=t._internals,n=e._parseToProxy,i=e._setPluginRatio,r=e.CSSPropTween;e._registerComplexSpecialProp("bezier",{parser:function(s,a,o,l,f,u){a instanceof Array&&(a={values:a}),u=new Ji;var d=a.values,c=d.length-1,m=[],p={},y,g,h;if(c<0)return f;for(y=0;y<=c;y++)h=n(s,d[y],l,f,u,c!==y),m[y]=h.end;for(g in a)p[g]=a[g];return p.values=m,f=new r(s,"bezier",0,0,h.pt,2),f.data=h,f.plugin=u,f.setRatio=i,p.autoRotate===0&&(p.autoRotate=!0),p.autoRotate&&!(p.autoRotate instanceof Array)&&(y=p.autoRotate===!0?0:Number(p.autoRotate),p.autoRotate=h.end.left!=null?[["left","top","rotation",y,!1]]:h.end.x!=null?[["x","y","rotation",y,!1]]:!1),p.autoRotate&&(l._transform||l._enableTransforms(!1),h.autoRotate=l._target._gsTransform,h.proxy.rotation=h.autoRotate.rotation||0,l._overwriteProps.push("rotation")),u._onInitTween(h.proxy,p,l._tween),f}})}};jp._mod=function(t){for(var e=this._overwriteProps,n=e.length,i;--n>-1;)i=t[e[n]],i&&typeof i=="function"&&(this._mod[e[n]]=i)};jp._kill=function(t){var e=this._props,n,i;for(n in this._beziers)if(n in t)for(delete this._beziers[n],delete this._func[n],i=e.length;--i>-1;)e[i]===n&&e.splice(i,1);if(e=this._autoRotate,e)for(i=e.length;--i>-1;)t[e[i][2]]&&e.splice(i,1);return this._super._kill.call(this,t)};/*!
 * VERSION: 1.16.1
 * DATE: 2018-08-27
 * UPDATES AND DOCS AT: http://greensock.com
 *
 * @license Copyright (c) 2008-2018, GreenSock. All rights reserved.
 * This work is subject to the terms at http://greensock.com/standard-license or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 * 
 * @author: Jack Doyle, jack@greensock.com
 **/Lt._gsDefine("easing.Back",["easing.Ease"],function(){var t=Lt.GreenSockGlobals||Lt,e=t.com.greensock,n=Math.PI*2,i=Math.PI/2,r=e._class,s=function(h,T){var M=r("easing."+h,function(){},!0),w=M.prototype=new en;return w.constructor=M,w.getRatio=T,M},a=en.register||function(){},o=function(h,T,M,w,V){var L=r("easing."+h,{easeOut:new T,easeIn:new M,easeInOut:new w},!0);return a(L,h),L},l=function(h,T,M){this.t=h,this.v=T,M&&(this.next=M,M.prev=this,this.c=M.v-T,this.gap=M.t-h)},f=function(h,T){var M=r("easing."+h,function(V){this._p1=V||V===0?V:1.70158,this._p2=this._p1*1.525},!0),w=M.prototype=new en;return w.constructor=M,w.getRatio=T,w.config=function(V){return new M(V)},M},u=o("Back",f("BackOut",function(h){return(h=h-1)*h*((this._p1+1)*h+this._p1)+1}),f("BackIn",function(h){return h*h*((this._p1+1)*h-this._p1)}),f("BackInOut",function(h){return(h*=2)<1?.5*h*h*((this._p2+1)*h-this._p2):.5*((h-=2)*h*((this._p2+1)*h+this._p2)+2)})),d=r("easing.SlowMo",function(h,T,M){T=T||T===0?T:.7,h==null?h=.7:h>1&&(h=1),this._p=h!==1?T:0,this._p1=(1-h)/2,this._p2=h,this._p3=this._p1+this._p2,this._calcEnd=M===!0},!0),c=d.prototype=new en,m,p,y,g;return c.constructor=d,c.getRatio=function(h){var T=h+(.5-h)*this._p;return h<this._p1?this._calcEnd?1-(h=1-h/this._p1)*h:T-(h=1-h/this._p1)*h*h*h*T:h>this._p3?this._calcEnd?h===1?0:1-(h=(h-this._p3)/this._p1)*h:T+(h-T)*(h=(h-this._p3)/this._p1)*h*h*h:this._calcEnd?1:T},d.ease=new d(.7,.7),c.config=d.config=function(h,T,M){return new d(h,T,M)},m=r("easing.SteppedEase",function(h,T){h=h||1,this._p1=1/h,this._p2=h+(T?0:1),this._p3=T?1:0},!0),c=m.prototype=new en,c.constructor=m,c.getRatio=function(h){return h<0?h=0:h>=1&&(h=.999999999),((this._p2*h|0)+this._p3)*this._p1},c.config=m.config=function(h,T){return new m(h,T)},p=r("easing.ExpoScaleEase",function(h,T,M){this._p1=Math.log(T/h),this._p2=T-h,this._p3=h,this._ease=M},!0),c=p.prototype=new en,c.constructor=p,c.getRatio=function(h){return this._ease&&(h=this._ease.getRatio(h)),(this._p3*Math.exp(this._p1*h)-this._p3)/this._p2},c.config=p.config=function(h,T,M){return new p(h,T,M)},y=r("easing.RoughEase",function(h){h=h||{};for(var T=h.taper||"none",M=[],w=0,V=(h.points||20)|0,L=V,z=h.randomize!==!1,X=h.clamp===!0,$=h.template instanceof en?h.template:null,E=typeof h.strength=="number"?h.strength*.4:.4,R,G,q,ce,re,ae;--L>-1;)R=z?Math.random():1/V*L,G=$?$.getRatio(R):R,T==="none"?q=E:T==="out"?(ce=1-R,q=ce*ce*E):T==="in"?q=R*R*E:R<.5?(ce=R*2,q=ce*ce*.5*E):(ce=(1-R)*2,q=ce*ce*.5*E),z?G+=Math.random()*q-q*.5:L%2?G+=q*.5:G-=q*.5,X&&(G>1?G=1:G<0&&(G=0)),M[w++]={x:R,y:G};for(M.sort(function(me,ne){return me.x-ne.x}),ae=new l(1,1,null),L=V;--L>-1;)re=M[L],ae=new l(re.x,re.y,ae);this._prev=new l(0,0,ae.t!==0?ae:ae.next)},!0),c=y.prototype=new en,c.constructor=y,c.getRatio=function(h){var T=this._prev;if(h>T.t){for(;T.next&&h>=T.t;)T=T.next;T=T.prev}else for(;T.prev&&h<=T.t;)T=T.prev;return this._prev=T,T.v+(h-T.t)/T.gap*T.c},c.config=function(h){return new y(h)},y.ease=new y,o("Bounce",s("BounceOut",function(h){return h<1/2.75?7.5625*h*h:h<2/2.75?7.5625*(h-=1.5/2.75)*h+.75:h<2.5/2.75?7.5625*(h-=2.25/2.75)*h+.9375:7.5625*(h-=2.625/2.75)*h+.984375}),s("BounceIn",function(h){return(h=1-h)<1/2.75?1-7.5625*h*h:h<2/2.75?1-(7.5625*(h-=1.5/2.75)*h+.75):h<2.5/2.75?1-(7.5625*(h-=2.25/2.75)*h+.9375):1-(7.5625*(h-=2.625/2.75)*h+.984375)}),s("BounceInOut",function(h){var T=h<.5;return T?h=1-h*2:h=h*2-1,h<1/2.75?h=7.5625*h*h:h<2/2.75?h=7.5625*(h-=1.5/2.75)*h+.75:h<2.5/2.75?h=7.5625*(h-=2.25/2.75)*h+.9375:h=7.5625*(h-=2.625/2.75)*h+.984375,T?(1-h)*.5:h*.5+.5})),o("Circ",s("CircOut",function(h){return Math.sqrt(1-(h=h-1)*h)}),s("CircIn",function(h){return-(Math.sqrt(1-h*h)-1)}),s("CircInOut",function(h){return(h*=2)<1?-.5*(Math.sqrt(1-h*h)-1):.5*(Math.sqrt(1-(h-=2)*h)+1)})),g=function(h,T,M){var w=r("easing."+h,function(L,z){this._p1=L>=1?L:1,this._p2=(z||M)/(L<1?L:1),this._p3=this._p2/n*(Math.asin(1/this._p1)||0),this._p2=n/this._p2},!0),V=w.prototype=new en;return V.constructor=w,V.getRatio=T,V.config=function(L,z){return new w(L,z)},w},o("Elastic",g("ElasticOut",function(h){return this._p1*Math.pow(2,-10*h)*Math.sin((h-this._p3)*this._p2)+1},.3),g("ElasticIn",function(h){return-(this._p1*Math.pow(2,10*(h-=1))*Math.sin((h-this._p3)*this._p2))},.3),g("ElasticInOut",function(h){return(h*=2)<1?-.5*(this._p1*Math.pow(2,10*(h-=1))*Math.sin((h-this._p3)*this._p2)):this._p1*Math.pow(2,-10*(h-=1))*Math.sin((h-this._p3)*this._p2)*.5+1},.45)),o("Expo",s("ExpoOut",function(h){return 1-Math.pow(2,-10*h)}),s("ExpoIn",function(h){return Math.pow(2,10*(h-1))-.001}),s("ExpoInOut",function(h){return(h*=2)<1?.5*Math.pow(2,10*(h-1)):.5*(2-Math.pow(2,-10*(h-1)))})),o("Sine",s("SineOut",function(h){return Math.sin(h*i)}),s("SineIn",function(h){return-Math.cos(h*i)+1}),s("SineInOut",function(h){return-.5*(Math.cos(Math.PI*h)-1)})),r("easing.EaseLookup",{find:function(h){return en.map[h]}},!0),a(t.SlowMo,"SlowMo","ease,"),a(y,"RoughEase","ease,"),a(m,"SteppedEase","ease,"),u},!0);var Jb=Nt.Back,Qb=Nt.Elastic,eT=Nt.Bounce,tT=Nt.RoughEase,nT=Nt.SlowMo,iT=Nt.SteppedEase,rT=Nt.Circ,sT=Nt.Expo,aT=Nt.Sine,oT=Nt.ExpoScaleEase;/*!
 * VERSION: 2.0.2
 * DATE: 2018-08-27
 * UPDATES AND DOCS AT: http://greensock.com
 *
 * @license Copyright (c) 2008-2018, GreenSock. All rights reserved.
 * This work is subject to the terms at http://greensock.com/standard-license or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 * 
 * @author: Jack Doyle, jack@greensock.com
 **/var lT=Bb;lT._autoActivated=[gr,Gb,zb,kb,Ji,Vp,Wp,Jb,Qb,eT,tT,nT,iT,rT,sT,aT,oT];function cT(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Ru={exports:{}},as=typeof Reflect=="object"?Reflect:null,bh=as&&typeof as.apply=="function"?as.apply:function(e,n,i){return Function.prototype.apply.call(e,n,i)},eo;as&&typeof as.ownKeys=="function"?eo=as.ownKeys:Object.getOwnPropertySymbols?eo=function(e){return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e))}:eo=function(e){return Object.getOwnPropertyNames(e)};var qp=Number.isNaN||function(e){return e!==e};function bt(){bt.init.call(this)}Ru.exports=bt;Ru.exports.once=dT;bt.EventEmitter=bt;bt.prototype._events=void 0;bt.prototype._eventsCount=0;bt.prototype._maxListeners=void 0;var Th=10;function Do(t){if(typeof t!="function")throw new TypeError('The "listener" argument must be of type Function. Received type '+typeof t)}Object.defineProperty(bt,"defaultMaxListeners",{enumerable:!0,get:function(){return Th},set:function(t){if(typeof t!="number"||t<0||qp(t))throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received '+t+".");Th=t}});bt.init=function(){(this._events===void 0||this._events===Object.getPrototypeOf(this)._events)&&(this._events=Object.create(null),this._eventsCount=0),this._maxListeners=this._maxListeners||void 0};bt.prototype.setMaxListeners=function(e){if(typeof e!="number"||e<0||qp(e))throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received '+e+".");return this._maxListeners=e,this};function Yp(t){return t._maxListeners===void 0?bt.defaultMaxListeners:t._maxListeners}bt.prototype.getMaxListeners=function(){return Yp(this)};bt.prototype.emit=function(e){for(var n=[],i=1;i<arguments.length;i++)n.push(arguments[i]);var r=e==="error",s=this._events;if(s!==void 0)r=r&&s.error===void 0;else if(!r)return!1;if(r){var a;if(n.length>0&&(a=n[0]),a instanceof Error)throw a;var o=new Error("Unhandled error."+(a?" ("+a.message+")":""));throw o.context=a,o}var l=s[e];if(l===void 0)return!1;if(typeof l=="function")bh(l,this,n);else for(var f=l.length,u=Qp(l,f),i=0;i<f;++i)bh(u[i],this,n);return!0};function $p(t,e,n,i){var r,s,a;if(Do(n),s=t._events,s===void 0?(s=t._events=Object.create(null),t._eventsCount=0):(s.newListener!==void 0&&(t.emit("newListener",e,n.listener?n.listener:n),s=t._events),a=s[e]),a===void 0)a=s[e]=n,++t._eventsCount;else if(typeof a=="function"?a=s[e]=i?[n,a]:[a,n]:i?a.unshift(n):a.push(n),r=Yp(t),r>0&&a.length>r&&!a.warned){a.warned=!0;var o=new Error("Possible EventEmitter memory leak detected. "+a.length+" "+String(e)+" listeners added. Use emitter.setMaxListeners() to increase limit");o.name="MaxListenersExceededWarning",o.emitter=t,o.type=e,o.count=a.length}return t}bt.prototype.addListener=function(e,n){return $p(this,e,n,!1)};bt.prototype.on=bt.prototype.addListener;bt.prototype.prependListener=function(e,n){return $p(this,e,n,!0)};function uT(){if(!this.fired)return this.target.removeListener(this.type,this.wrapFn),this.fired=!0,arguments.length===0?this.listener.call(this.target):this.listener.apply(this.target,arguments)}function Kp(t,e,n){var i={fired:!1,wrapFn:void 0,target:t,type:e,listener:n},r=uT.bind(i);return r.listener=n,i.wrapFn=r,r}bt.prototype.once=function(e,n){return Do(n),this.on(e,Kp(this,e,n)),this};bt.prototype.prependOnceListener=function(e,n){return Do(n),this.prependListener(e,Kp(this,e,n)),this};bt.prototype.removeListener=function(e,n){var i,r,s,a,o;if(Do(n),r=this._events,r===void 0)return this;if(i=r[e],i===void 0)return this;if(i===n||i.listener===n)--this._eventsCount===0?this._events=Object.create(null):(delete r[e],r.removeListener&&this.emit("removeListener",e,i.listener||n));else if(typeof i!="function"){for(s=-1,a=i.length-1;a>=0;a--)if(i[a]===n||i[a].listener===n){o=i[a].listener,s=a;break}if(s<0)return this;s===0?i.shift():fT(i,s),i.length===1&&(r[e]=i[0]),r.removeListener!==void 0&&this.emit("removeListener",e,o||n)}return this};bt.prototype.off=bt.prototype.removeListener;bt.prototype.removeAllListeners=function(e){var n,i,r;if(i=this._events,i===void 0)return this;if(i.removeListener===void 0)return arguments.length===0?(this._events=Object.create(null),this._eventsCount=0):i[e]!==void 0&&(--this._eventsCount===0?this._events=Object.create(null):delete i[e]),this;if(arguments.length===0){var s=Object.keys(i),a;for(r=0;r<s.length;++r)a=s[r],a!=="removeListener"&&this.removeAllListeners(a);return this.removeAllListeners("removeListener"),this._events=Object.create(null),this._eventsCount=0,this}if(n=i[e],typeof n=="function")this.removeListener(e,n);else if(n!==void 0)for(r=n.length-1;r>=0;r--)this.removeListener(e,n[r]);return this};function Zp(t,e,n){var i=t._events;if(i===void 0)return[];var r=i[e];return r===void 0?[]:typeof r=="function"?n?[r.listener||r]:[r]:n?hT(r):Qp(r,r.length)}bt.prototype.listeners=function(e){return Zp(this,e,!0)};bt.prototype.rawListeners=function(e){return Zp(this,e,!1)};bt.listenerCount=function(t,e){return typeof t.listenerCount=="function"?t.listenerCount(e):Jp.call(t,e)};bt.prototype.listenerCount=Jp;function Jp(t){var e=this._events;if(e!==void 0){var n=e[t];if(typeof n=="function")return 1;if(n!==void 0)return n.length}return 0}bt.prototype.eventNames=function(){return this._eventsCount>0?eo(this._events):[]};function Qp(t,e){for(var n=new Array(e),i=0;i<e;++i)n[i]=t[i];return n}function fT(t,e){for(;e+1<t.length;e++)t[e]=t[e+1];t.pop()}function hT(t){for(var e=new Array(t.length),n=0;n<e.length;++n)e[n]=t[n].listener||t[n];return e}function dT(t,e){return new Promise(function(n,i){function r(a){t.removeListener(e,s),i(a)}function s(){typeof t.removeListener=="function"&&t.removeListener("error",r),n([].slice.call(arguments))}em(t,e,s,{once:!0}),e!=="error"&&pT(t,r,{once:!0})})}function pT(t,e,n){typeof t.on=="function"&&em(t,"error",e,n)}function em(t,e,n,i){if(typeof t.on=="function")i.once?t.once(e,n):t.on(e,n);else if(typeof t.addEventListener=="function")t.addEventListener(e,function r(s){i.once&&t.removeEventListener(e,r),n(s)});else throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type '+typeof t)}var mT=Ru.exports;const _T=cT(mT);/*! *****************************************************************************
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
***************************************************************************** */var gT=Object.assign||function(e){for(var n,i=1,r=arguments.length;i<r;i++){n=arguments[i];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(e[s]=n[s])}return e},vT=[["firefox",/Firefox\/([0-9\.]+)(?:\s|$)/],["opera",/Opera\/([0-9\.]+)(?:\s|$)/],["opera",/OPR\/([0-9\.]+)(:?\s|$)$/],["edge",/Edge\/([0-9\._]+)/],["ie",/Trident\/7\.0.*rv\:([0-9\.]+)\).*Gecko$/],["ie",/MSIE\s([0-9\.]+);.*Trident\/[4-7].0/],["ie",/MSIE\s(7\.0)/],["safari",/Version\/([0-9\._]+).*Safari/],["chrome",/(?!Chrom.*OPR)Chrom(?:e|ium)\/([0-9\.]+)(:?\s|$)/],["bb10",/BB10;\sTouch.*Version\/([0-9\.]+)/],["android",/Android\s([0-9\.]+)/],["ios",/Version\/([0-9\._]+).*Mobile.*Safari.*/],["yandexbrowser",/YaBrowser\/([0-9\._]+)/],["crios",/CriOS\/([0-9\.]+)(:?\s|$)/]],xT=["Windows Phone","Android","CentOS",{name:"Chrome OS",pattern:"CrOS"},"Debian","Fedora","FreeBSD","Gentoo","Haiku","Kubuntu","Linux Mint","OpenBSD","Red Hat","SuSE","Ubuntu","Xubuntu","Cygwin","Symbian OS","hpwOS","webOS ","webOS","Tablet OS","Tizen","Linux","Mac OS X","Macintosh","Mac","Windows 98;","Windows "],yT={"10.0":"10","6.4":"10 Technical Preview","6.3":"8.1","6.2":"8","6.1":"Server 2008 R2 / 7","6.0":"Server 2008 / Vista","5.2":"Server 2003 / XP 64-bit","5.1":"XP","5.01":"2000 SP1","5.0":"2000","4.0":"NT","4.90":"ME"},ST=new RegExp(["(android|bb\\d+|meego).+mobile|avantgo|bada\\/|blackberry|blazer|","compal|elaine|fennec|hiptop|iemobile|ip(hone|od|ad)|iris|kindle|lge |maemo|","midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)","\\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\\.(browser|link)|vodafone|","wap|windows ce|xda|xiino"].join(""),"i"),MT=new RegExp(["1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\\-)|","ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\\-m|r |s )|","avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\\-(n|u)|c55\\/|capi|ccwa|cdm\\-|","cell|chtm|cldc|cmd\\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\\-s|devi|dica|dmob|do(c|p)o|","ds(12|\\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\\-|_)|","g1 u|g560|gene|gf\\-5|g\\-mo|go(\\.w|od)|gr(ad|un)|haie|hcit|hd\\-(m|p|t)|hei\\-|","hi(pt|ta)|hp( i|ip)|hs\\-c|ht(c(\\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\\-(20|go|ma)|","i230|iac( |\\-|\\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|","kddi|keji|kgt( |\\/)|klon|kpt |kwc\\-|kyo(c|k)|le(no|xi)|lg( g|\\/(k|l|u)|50|54|\\-[a-w])","|libw|lynx|m1\\-w|m3ga|m50\\/|ma(te|ui|xo)|mc(01|21|ca)|m\\-cr|me(rc|ri)|mi(o8|oa|ts)|","mmef|mo(01|02|bi|de|do|t(\\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|","n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|","op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\\-2|","po(ck|rt|se)|prox|psio|pt\\-g|qa\\-a|qc(07|12|21|32|60|\\-[2-7]|i\\-)|qtek|r380|r600|","raks|rim9|ro(ve|zo)|s55\\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\\-|oo|p\\-)|sdk\\/|","se(c(\\-|0|1)|47|mc|nd|ri)|sgh\\-|shar|sie(\\-|m)|k\\-0|sl(45|id)|sm(al|ar|b3|it|t5)|","so(ft|ny)|sp(01|h\\-|v\\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\\-|tdg\\-|","tel(i|m)|tim\\-|t\\-mo|to(pl|sh)|ts(70|m\\-|m3|m5)|tx\\-9|up(\\.b|g1|si)|utst|v400|v750|","veri|vi(rg|te)|vk(40|5[0-3]|\\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|","w3c(\\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\\-|your|zeto|zte\\-"].join(""),"i"),bT=function(){function t(e,n,i){this.navigator=n,this.process=i,this.userAgent=e||(this.navigator?n.userAgent||n.vendor:"")}return t.prototype.detect=function(){if(this.process&&!this.userAgent){var e=this.process.version.slice(1).split(".").slice(0,3),n=Array.prototype.slice.call(e,1).join("")||"0";return{name:"node",version:e.join("."),versionNumber:parseFloat(e[0]+"."+n),mobile:!1,os:this.process.platform}}return this.userAgent||this.handleMissingError(),gT({},this.checkBrowser(),this.checkMobile(),this.checkOs())},t.prototype.checkBrowser=function(){var e=this;return vT.filter(function(n){return n[1].test(e.userAgent)}).map(function(n){var i=n[1].exec(e.userAgent),r=i&&i[1].split(/[._]/).slice(0,3),s=Array.prototype.slice.call(r,1).join("")||"0";return r&&r.length<3&&Array.prototype.push.apply(r,r.length===1?[0,0]:[0]),{name:String(n[0]),version:r.join("."),versionNumber:+(r[0]+"."+s)}}).shift()},t.prototype.checkMobile=function(){var e=this.userAgent.substr(0,4),n=ST.test(this.userAgent)||MT.test(e);return{mobile:n}},t.prototype.checkOs=function(){var e=this;return xT.map(function(n){var i=n.name||n,r=e.getOsPattern(n);return{name:i,pattern:r,value:RegExp("\\b"+r.replace(/([ -])(?!$)/g,"$1?")+"(?:x?[\\d._]+|[ \\w.]*)","i").exec(e.userAgent)}}).filter(function(n){return n.value}).map(function(n){var i=n.value[0]||"",r;return n.pattern&&n.name&&/^Win/i.test(i)&&!/^Windows Phone /i.test(i)&&(r=yT[i.replace(/[^\d.]/g,"")])&&(i="Windows "+r),n.pattern&&n.name&&(i=i.replace(RegExp(n.pattern,"i"),n.name)),i=i.replace(/ ce$/i," CE").replace(/\bhpw/i,"web").replace(/\bMacintosh\b/,"Mac OS").replace(/_PowerPC\b/i," OS").replace(/\b(OS X) [^ \d]+/i,"$1").replace(/\bMac (OS X)\b/,"$1").replace(/\/(\d)/," $1").replace(/_/g,".").replace(/(?: BePC|[ .]*fc[ \d.]+)$/i,"").replace(/\bx86\.64\b/gi,"x86_64").replace(/\b(Windows Phone) OS\b/,"$1").replace(/\b(Chrome OS \w+) [\d.]+\b/,"$1").split(" on ")[0].trim(),i=/^(?:webOS|i(?:OS|P))/.test(i)?i:i.charAt(0).toUpperCase()+i.slice(1),{os:i}}).shift()},t.prototype.getOsPattern=function(e){var n=e;return(typeof e=="string"?e:void 0)||n.pattern||n.name},t.prototype.handleMissingError=function(){throw new Error(`Please give user-agent.
> browser(navigator.userAgent or res.headers['user-agent']).`)},t}();function ua(t,e){return e={exports:{}},t(e,e.exports),e.exports}var Nn=ua(function(t){var e=t.exports=typeof window<"u"&&window.Math==Math?window:typeof self<"u"&&self.Math==Math?self:Function("return this")();typeof __g=="number"&&(__g=e)}),Jn=ua(function(t){var e=t.exports={version:"2.5.7"};typeof __e=="number"&&(__e=e)});Jn.version;var Rr=function(t){return typeof t=="object"?t!==null:typeof t=="function"},Eh=function(t){if(!Rr(t))throw TypeError(t+" is not an object!");return t},Lo=function(t){try{return!!t()}catch{return!0}},Pu=!Lo(function(){return Object.defineProperty({},"a",{get:function(){return 7}}).a!=7}),Bc=Nn.document,TT=Rr(Bc)&&Rr(Bc.createElement),ET=function(t){return TT?Bc.createElement(t):{}},wT=!Pu&&!Lo(function(){return Object.defineProperty(ET("div"),"a",{get:function(){return 7}}).a!=7}),AT=function(t,e){if(!Rr(t))return t;var n,i;if(typeof(n=t.toString)=="function"&&!Rr(i=n.call(t))||typeof(n=t.valueOf)=="function"&&!Rr(i=n.call(t)))return i;throw TypeError("Can't convert object to primitive value")},CT=Object.defineProperty,RT=Pu?Object.defineProperty:function(e,n,i){if(Eh(e),n=AT(n),Eh(i),wT)try{return CT(e,n,i)}catch{}if("get"in i||"set"in i)throw TypeError("Accessors not supported!");return"value"in i&&(e[n]=i.value),e},PT={f:RT},DT=function(t,e){return{enumerable:!(t&1),configurable:!(t&2),writable:!(t&4),value:e}},Us=Pu?function(t,e,n){return PT.f(t,e,DT(1,n))}:function(t,e,n){return t[e]=n,t},LT={}.hasOwnProperty,wh=function(t,e){return LT.call(t,e)},IT=0,UT=Math.random(),tm=function(t){return"Symbol(".concat(t===void 0?"":t,")_",(++IT+UT).toString(36))},NT=ua(function(t){var e=tm("src"),n="toString",i=Function[n],r=(""+i).split(n);Jn.inspectSource=function(s){return i.call(s)},(t.exports=function(s,a,o,l){var f=typeof o=="function";f&&(wh(o,"name")||Us(o,"name",a)),s[a]!==o&&(f&&(wh(o,e)||Us(o,e,s[a]?""+s[a]:r.join(String(a)))),s===Nn?s[a]=o:l?s[a]?s[a]=o:Us(s,a,o):(delete s[a],Us(s,a,o)))})(Function.prototype,n,function(){return typeof this=="function"&&this[e]||i.call(this)})}),OT=function(t){if(typeof t!="function")throw TypeError(t+" is not a function!");return t},zc=function(t,e,n){if(OT(t),e===void 0)return t;switch(n){case 1:return function(i){return t.call(e,i)};case 2:return function(i,r){return t.call(e,i,r)};case 3:return function(i,r,s){return t.call(e,i,r,s)}}return function(){return t.apply(e,arguments)}},Rl="prototype",cn=function(t,e,n){var i=t&cn.F,r=t&cn.G,s=t&cn.S,a=t&cn.P,o=t&cn.B,l=r?Nn:s?Nn[e]||(Nn[e]={}):(Nn[e]||{})[Rl],f=r?Jn:Jn[e]||(Jn[e]={}),u=f[Rl]||(f[Rl]={}),d,c,m,p;r&&(n=e);for(d in n)c=!i&&l&&l[d]!==void 0,m=(c?l:n)[d],p=o&&c?zc(m,Nn):a&&typeof m=="function"?zc(Function.call,m):m,l&&NT(l,d,m,t&cn.U),f[d]!=m&&Us(f,d,p),a&&u[d]!=m&&(u[d]=m)};Nn.core=Jn;cn.F=1;cn.G=2;cn.S=4;cn.P=8;cn.B=16;cn.W=32;cn.U=64;cn.R=128;var yi=cn,FT={}.toString,nm=function(t){return FT.call(t).slice(8,-1)},BT=Object("z").propertyIsEnumerable(0)?Object:function(t){return nm(t)=="String"?t.split(""):Object(t)},im=function(t){if(t==null)throw TypeError("Can't call method on  "+t);return t},zT=function(t){return Object(im(t))},kT=Math.ceil,HT=Math.floor,VT=function(t){return isNaN(t=+t)?0:(t>0?HT:kT)(t)},GT=Math.min,WT=function(t){return t>0?GT(VT(t),9007199254740991):0},Ah=Array.isArray||function(e){return nm(e)=="Array"},XT=ua(function(t){var e="__core-js_shared__",n=Nn[e]||(Nn[e]={});(t.exports=function(i,r){return n[i]||(n[i]=r!==void 0?r:{})})("versions",[]).push({version:Jn.version,mode:"global",copyright:"© 2018 Denis Pushkarev (zloirock.ru)"})}),jT=ua(function(t){var e=XT("wks"),n=Nn.Symbol,i=typeof n=="function",r=t.exports=function(s){return e[s]||(e[s]=i&&n[s]||(i?n:tm)("Symbol."+s))};r.store=e}),qT=jT("species"),YT=function(t){var e;return Ah(t)&&(e=t.constructor,typeof e=="function"&&(e===Array||Ah(e.prototype))&&(e=void 0),Rr(e)&&(e=e[qT],e===null&&(e=void 0))),e===void 0?Array:e},$T=function(t,e){return new(YT(t))(e)},rm=function(t,e){var n=t==1,i=t==2,r=t==3,s=t==4,a=t==6,o=t==5||a,l=$T;return function(f,u,d){for(var c=zT(f),m=BT(c),p=zc(u,d,3),y=WT(m.length),g=0,h=n?l(f,y):i?l(f,0):void 0,T,M;y>g;g++)if((o||g in m)&&(T=m[g],M=p(T,g,c),t)){if(n)h[g]=M;else if(M)switch(t){case 3:return!0;case 5:return T;case 6:return g;case 2:h.push(T)}else if(s)return!1}return a?-1:r||s?s:h}},sm=function(t,e){return!!t&&Lo(function(){e?t.call(null,function(){},1):t.call(null)})},KT=rm(2);yi(yi.P+yi.F*!sm([].filter,!0),"Array",{filter:function(e){return KT(this,e,arguments[1])}});Jn.Array.filter;var ZT=rm(1);yi(yi.P+yi.F*!sm([].map,!0),"Array",{map:function(e){return ZT(this,e,arguments[1])}});Jn.Array.map;var kc=`	
\v\f\r   ᠎             　\u2028\u2029\uFEFF`,ho="["+kc+"]",Ch="​",JT=RegExp("^"+ho+ho+"*"),QT=RegExp(ho+ho+"*$"),am=function(t,e,n){var i={},r=Lo(function(){return!!kc[t]()||Ch[t]()!=Ch}),s=i[t]=r?e(eE):kc[t];n&&(i[n]=s),yi(yi.P+yi.F*r,"String",i)},eE=am.trim=function(t,e){return t=String(im(t)),e&1&&(t=t.replace(JT,"")),e&2&&(t=t.replace(QT,"")),t},tE=am;tE("trim",function(t){return function(){return t(this,3)}});Jn.String.trim;var nE=typeof window<"u"?window.navigator:void 0,iE=typeof process<"u"?process:void 0;function rE(t){var e=new bT(t,nE,iE);return e.detect()}let Rh=!1,Ha=!1;const sE=()=>{if(Rh)return Ha;Rh=!0;try{let t=Object.defineProperty({},"passive",{get:()=>{Ha=!0}});window.addEventListener("test",null,t)}catch{return Ha}return window.removeEventListener("test",null,opts),Ha},Pl=()=>sE()?{passive:!0}:!1;class aE extends _T{get enabled(){return this._enabled}constructor(e,n){super(),this.camera=e,this.el=n||window,this.plane=new ki,this.raycaster=new Fb,this.mouse=new yt,this.offset=new _e,this.intersection=new _e,this.objects=[],this.hovered=null,this.selected=null,this.isDown=!1,this.browser=rE(),this.enable()}enable(){this.enabled||(this.addListeners(),this._enabled=!0)}disable(){this.enabled&&(this.removeListeners(),this._enabled=!1)}addListeners(){this.handlerDown=this.onDown.bind(this),this.handlerMove=this.onMove.bind(this),this.handlerUp=this.onUp.bind(this),this.handlerLeave=this.onLeave.bind(this),this.browser.mobile?(this.el.addEventListener("touchstart",this.handlerDown,Pl),this.el.addEventListener("touchmove",this.handlerMove,Pl),this.el.addEventListener("touchend",this.handlerUp,Pl)):(this.el.addEventListener("mousedown",this.handlerDown),window.addEventListener("mousemove",this.handlerMove),this.el.addEventListener("mouseup",this.handlerUp),this.el.addEventListener("mouseleave",this.handlerLeave))}removeListeners(){this.browser.mobile?(this.el.removeEventListener("touchstart",this.handlerDown),this.el.removeEventListener("touchmove",this.handlerMove),this.el.removeEventListener("touchend",this.handlerUp)):(this.el.removeEventListener("mousedown",this.handlerDown),this.el.removeEventListener("mousemove",this.handlerMove),this.el.removeEventListener("mouseup",this.handlerUp),this.el.removeEventListener("mouseleave",this.handlerLeave))}resize(e,n,i,r){e||n||i||r?this.rect={x:e,y:n,width:i,height:r}:this.el===window?this.rect={x:0,y:0,width:window.innerWidth,height:window.innerHeight}:this.rect=this.el.getBoundingClientRect()}onMove(e){const n=e.touches?e.touches[0]:e,i={x:n.clientX,y:n.clientY};this.mouse.x=(i.x+this.rect.x)/this.rect.width*2-1,this.mouse.y=-((i.y+this.rect.y)/this.rect.height)*2+1,this.raycaster.setFromCamera(this.mouse,this.camera);const r=this.raycaster.intersectObjects(this.objects);if(r.length>0){const s=r[0].object;this.intersectionData=r[0],this.plane.setFromNormalAndCoplanarPoint(this.camera.getWorldDirection(this.plane.normal),s.position),this.hovered!==s?(this.emit("interactive-out",{object:this.hovered}),this.emit("interactive-over",{object:s}),this.hovered=s):this.emit("interactive-move",{object:s,intersectionData:this.intersectionData})}else this.intersectionData=null,this.hovered!==null&&(this.emit("interactive-out",{object:this.hovered}),this.hovered=null)}onDown(e){this.isDown=!0,this.onMove(e),this.emit("interactive-down",{object:this.hovered,previous:this.selected,intersectionData:this.intersectionData}),this.selected=this.hovered,this.selected&&this.raycaster.ray.intersectPlane(this.plane,this.intersection)&&this.offset.copy(this.intersection).sub(this.selected.position)}onUp(e){this.isDown=!1,this.emit("interactive-up",{object:this.hovered})}onLeave(e){this.onUp(e),this.emit("interactive-out",{object:this.hovered}),this.hovered=null}}const Ph=(t,e,n,i)=>n*Math.sin(t/i*(Math.PI/2))+e;class oE{constructor(e){this.parent=e,this.size=64,this.maxAge=120,this.radius=.15,this.trail=[],this.initTexture()}initTexture(){this.canvas=document.createElement("canvas"),this.canvas.width=this.canvas.height=this.size,this.ctx=this.canvas.getContext("2d"),this.ctx.fillStyle="black",this.ctx.fillRect(0,0,this.canvas.width,this.canvas.height),this.texture=new Yt(this.canvas),this.canvas.id="touchTexture",this.canvas.style.width=this.canvas.style.height=`${this.canvas.width}px`}update(e){this.clear(),this.trail.forEach((n,i)=>{n.age++,n.age>this.maxAge&&this.trail.splice(i,1)}),this.trail.forEach((n,i)=>{this.drawTouch(n)}),this.texture.needsUpdate=!0}clear(){this.ctx.fillStyle="black",this.ctx.fillRect(0,0,this.canvas.width,this.canvas.height)}addTouch(e){let n=0;const i=this.trail[this.trail.length-1];if(i){const r=i.x-e.x,s=i.y-e.y,a=r*r+s*s;n=Math.min(a*1e4,1)}this.trail.push({x:e.x,y:e.y,age:0,force:n})}drawTouch(e){const n={x:e.x*this.size,y:(1-e.y)*this.size};let i=1;e.age<this.maxAge*.3?i=Ph(e.age/(this.maxAge*.3),0,1,1):i=Ph(1-(e.age-this.maxAge*.3)/(this.maxAge*.7),0,1,1),i*=e.force;const r=this.size*this.radius*i,s=this.ctx.createRadialGradient(n.x,n.y,r*.25,n.x,n.y,r);s.addColorStop(0,"rgba(255, 255, 255, 0.2)"),s.addColorStop(1,"rgba(0, 0, 0, 0.0)"),this.ctx.beginPath(),this.ctx.fillStyle=s,this.ctx.arc(n.x,n.y,r,0,Math.PI*2),this.ctx.fill()}}const lE=`// @author brunoimbrizi / http://brunoimbrizi.com\r
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
`,cE=`// @author brunoimbrizi / http://brunoimbrizi.com\r
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
}`;class uE{constructor(e){this.webgl=e,this.container=new mn}init(e){new Nb().load(e,i=>{this.texture=i,this.width=i.image.width,this.height=i.image.height,this.initPoints(!0),this.initHitArea(),this.initTouch(),this.resize(),this.show()})}initPoints(e){this.numPoints=this.width*this.height;let n=this.numPoints,i=0,r;if(e){n=0,i=34;const m=this.texture.image,p=document.createElement("canvas"),y=p.getContext("2d");p.width=this.width,p.height=this.height,y.scale(1,-1),y.drawImage(m,0,0,this.width,this.height*-1);const g=y.getImageData(0,0,p.width,p.height);r=Float32Array.from(g.data);for(let h=0;h<this.numPoints;h++)r[h*4+0]>i&&n++}const s={uTime:{value:0},uRandom:{value:1},uDepth:{value:2},uSize:{value:0},uTextureSize:{value:new yt(this.width,this.height)},uTexture:{value:this.texture},uTouch:{value:null}},a=new Db({uniforms:s,vertexShader:lE,fragmentShader:cE,depthTest:!1,transparent:!0}),o=new Ob,l=new _n(new Float32Array(4*3),3);l.setXYZ(0,-.5,.5,0),l.setXYZ(1,.5,.5,0),l.setXYZ(2,-.5,-.5,0),l.setXYZ(3,.5,-.5,0),o.setAttribute("position",l);const f=new _n(new Float32Array(4*2),2);f.setXYZ(0,0,0),f.setXYZ(1,1,0),f.setXYZ(2,0,1),f.setXYZ(3,1,1),o.setAttribute("uv",f),o.setIndex(new _n(new Uint16Array([0,2,1,2,3,1]),1));const u=new Uint16Array(n),d=new Float32Array(n*3),c=new Float32Array(n);for(let m=0,p=0;m<this.numPoints;m++)e&&r[m*4+0]<=i||(d[p*3+0]=m%this.width,d[p*3+1]=Math.floor(m/this.width),u[p]=m,c[p]=Math.random()*Math.PI,p++);o.setAttribute("pindex",new Cl(u,1,!1)),o.setAttribute("offset",new Cl(d,3,!1)),o.setAttribute("angle",new Cl(c,1,!1)),this.object3D=new An(o,a),this.container.add(this.object3D)}initTouch(){this.touch||(this.touch=new oE(this)),this.object3D.material.uniforms.uTouch.value=this.touch.texture}initHitArea(){const e=new gs(this.width,this.height,1,1),n=new Eu({color:16777215,wireframe:!0,depthTest:!1});n.visible=!1,this.hitArea=new An(e,n),this.container.add(this.hitArea)}addListeners(){this.handlerInteractiveMove=this.onInteractiveMove.bind(this),this.webgl.interactive.addListener("interactive-move",this.handlerInteractiveMove),this.webgl.interactive.objects.push(this.hitArea),this.webgl.interactive.enable()}removeListeners(){this.webgl.interactive.removeListener("interactive-move",this.handlerInteractiveMove);const e=this.webgl.interactive.objects.findIndex(n=>n===this.hitArea);this.webgl.interactive.objects.splice(e,1),this.webgl.interactive.disable()}update(e){this.object3D&&(this.touch&&this.touch.update(),this.object3D.material.uniforms.uTime.value+=e)}show(e=1){TweenLite.fromTo(this.object3D.material.uniforms.uSize,e,{value:.5},{value:1.5}),TweenLite.to(this.object3D.material.uniforms.uRandom,e,{value:2}),TweenLite.fromTo(this.object3D.material.uniforms.uDepth,e*1.5,{value:40},{value:4}),this.addListeners()}hide(e,n=.8){return new Promise((i,r)=>{TweenLite.to(this.object3D.material.uniforms.uRandom,n,{value:5,onComplete:()=>{e&&this.destroy(),i()}}),TweenLite.to(this.object3D.material.uniforms.uDepth,n,{value:-20,ease:Quad.easeIn}),TweenLite.to(this.object3D.material.uniforms.uSize,n*.8,{value:0}),this.removeListeners()})}destroy(){this.object3D&&(this.object3D.parent.remove(this.object3D),this.object3D.geometry.dispose(),this.object3D.material.dispose(),this.object3D=null,this.hitArea&&(this.hitArea.parent.remove(this.hitArea),this.hitArea.geometry.dispose(),this.hitArea.material.dispose(),this.hitArea=null))}resize(){if(!this.object3D)return;const e=this.webgl.fovHeight/this.height;this.object3D.scale.set(e,e,1),this.hitArea.scale.set(e,e,1)}onInteractiveMove(e){const n=e.intersectionData.uv;this.touch&&this.touch.addTouch(n)}}const fE="/YangPortfolioPublic/assets/Profile3-B_I9tn9a.png";class hE{constructor(e){this.app=e,this.samples=[fE],this.initThree(),this.initParticles(),this.initControls();const n=~~(Math.random()*this.samples.length);this.goto(n)}initThree(){this.scene=new kp,this.camera=new Tn(50,window.innerWidth/window.innerHeight,1,1e4),this.camera.position.z=300,this.renderer=new zp({antialias:!0,alpha:!0}),this.clock=new Hp(!0)}initControls(){this.interactive=new aE(this.camera,this.renderer.domElement)}initParticles(){this.particles=new uE(this),this.scene.add(this.particles.container)}update(){const e=this.clock.getDelta();this.particles&&this.particles.update(e)}draw(){this.renderer.render(this.scene,this.camera)}goto(e){this.currSample==null?this.particles.init(this.samples[e]):this.particles.hide(!0).then(()=>{this.particles.init(this.samples[e])}),this.currSample=e}next(){this.currSample<this.samples.length-1?this.goto(this.currSample+1):this.goto(0)}resize(){this.renderer&&(this.camera.aspect=window.innerWidth/window.innerHeight,this.camera.updateProjectionMatrix(),this.fovHeight=2*Math.tan(this.camera.fov*Math.PI/180/2)*this.camera.position.z,this.renderer.setSize(window.innerWidth,window.innerHeight),this.interactive&&this.interactive.resize(),this.particles&&this.particles.resize())}}const dE=`\r
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
`;class pE{constructor(e){this.app=e,this.texts=["I MAKE THINGS","I BREAK THINGS"],this.initThree(),this.init2DCanvas(),this.initGeometry(),this.initMaterial(),this.initScene(),this.addListeners(),this.animate(),this.resize()}initThree(){this.el=document.getElementById("hero-text"),this.scene=new kp,this.camera=new Ip(this.el.clientWidth/-2,this.el.clientWidth/2,this.el.clientHeight/2,this.el.clientHeight/-2,-1e3,1e3),this.camera.position.z=300,this.renderer=new zp({alpha:!0}),this.renderer.setSize(this.el.clientWidth,this.el.clientHeight),this.el.appendChild(this.renderer.domElement),this.clock=new Hp(!0)}wrapText(e,n,i,r,s,a,o){const l=n.split(" ");let f="",u=[];for(let d=0;d<l.length;d++){const c=f+l[d]+" ";e.measureText(c).width>s&&d>0?(u.push(f.trim()),f=l[d]+" "):f=c}u.push(f.trim()),r-=(u.length-1)/2*a;for(let d=0;d<u.length;d++)o?e.strokeText(u[d],i,r+d*a):e.fillText(u[d],i,r+d*a)}init2DCanvas(){this.canvas2D=document.createElement("canvas"),this.canvas2D.width=this.el.clientWidth,this.canvas2D.height=this.el.clientHeight,this.ctx2D=this.canvas2D.getContext("2d"),this.ctx2D.width=this.el.clientWidth,this.ctx2D.height=this.el.clientHeight,this.ctx2D.fillStyle="black",this.ctx2D.fillStyle="black",this.ctx2D.fillRect(0,0,this.ctx2D.width,this.ctx2D.height),this.ctx2D.strokeStyle="white",this.ctx2D.font="5rem 'Inter', system-ui, Avenir, Helvetica, Arial, sans-serif",this.selectedText=0,this.ctx2D.textAlign="center",this.ctx2D.textBaseline="middle",this.ctx2D.imageSmoothingEnabled=!0,this.ctx2D.imageSmoothingQuality="high";const e=this.canvas2D.width*.8,n=70*1.2;this.wrapText(this.ctx2D,this.texts[this.selectedText],this.canvas2D.width/2,this.canvas2D.height/2,e,n,!0),this.heroTexture=new vh(this.canvas2D),this.canvas2D.id="heroTexture",this.canvas2D.style.width=`${this.canvas2D.width}px`,this.canvas2D.style.height=`${this.canvas2D.height}px`;const i=this.canvas2D.width,r=this.canvas2D.height,s=document.createElement("canvas");s.width=i,s.height=r;const a=s.getContext("2d");a.font="5rem 'Inter', system-ui, Avenir, Helvetica, Arial, sans-serif",a.textAlign="center",a.textBaseline="middle",a.fillStyle="white",a.imageSmoothingEnabled=!0,a.imageSmoothingQuality="high",this.wrapText(a,this.texts[this.selectedText],s.width/2,s.height/2,e,n,!1),this.heroTexture2=new vh(s),this.heroTexture.minFilter=un,this.heroTexture.magFilter=un,this.heroTexture.anisotropy=this.renderer.capabilities.getMaxAnisotropy(),this.heroTexture2.minFilter=un,this.heroTexture2.magFilter=un,this.heroTexture2.anisotropy=this.renderer.capabilities.getMaxAnisotropy()}initGeometry(){this.geometry=new gs(this.el.clientWidth,this.el.clientHeight)}initMaterial(){this.uniforms={iTime:{value:0},iResolution:{value:new yt(this.el.clientWidth,this.el.clientHeight)},uFontTex:{value:this.heroTexture},uFontTex2:{value:this.heroTexture2},uProgress:{value:.5}},this.material=new Qn({fragmentShader:dE,uniforms:this.uniforms,transparent:!0,depthTest:!1,blending:Ar})}addListeners(){this.handlerAnimate=this.animate.bind(this),window.addEventListener("resize",this.resize.bind(this))}initScene(){this.mesh=new An(this.geometry,this.material),this.scene.add(this.mesh)}resize(){this.renderer&&(this.camera.aspect=this.el.clientWidth/this.el.clientHeight,this.camera.updateProjectionMatrix(),this.renderer.setSize(this.el.clientWidth,this.el.clientHeight),this.heroTexture.needsUpdate=!0,this.heroTexture2.needsUpdate=!0)}animate(){this.update(),this.draw(),this.raf=requestAnimationFrame(this.handlerAnimate)}update(){this.uniforms.iTime.value=this.clock.getElapsedTime()}draw(){this.renderer.render(this.scene,this.camera)}}class mE{constructor(){}init(){this.initWebGL(),this.initGUI(),this.addListeners(),this.animate(),this.resize()}initWebGL(){this.webgl=new hE(this),document.querySelector(".container").appendChild(this.webgl.renderer.domElement)}initGUI(){}addListeners(){this.handlerAnimate=this.animate.bind(this),window.addEventListener("resize",this.resize.bind(this)),window.addEventListener("keyup",this.keyup.bind(this)),this.webgl.renderer.domElement.addEventListener("click",this.click.bind(this))}animate(){this.update(),this.draw(),this.raf=requestAnimationFrame(this.handlerAnimate)}update(){this.webgl&&this.webgl.update(),this.gui&&this.gui.update()}draw(){this.webgl&&this.webgl.draw()}resize(){this.webgl&&this.webgl.resize()}keyup(e){e.keyCode==71&&this.gui&&this.gui.toggle()}click(e){this.webgl.next()}}const _E={class:"bg-tertiary w-full min-h-[100vh] flex justify-center"},gE={class:"w-2/3 relative z-10 py-2"},vE={__name:"App",setup(t){let e=null;return To(()=>{e=new mE,e.init()}),(n,i)=>{const r=lu("router-view");return Yn(),_i("div",_E,[i[0]||(i[0]=mt("div",{class:"fixed w-full h-screen overflow-hidden top-0 left-0 container pointer-events-none z-0"},null,-1)),It(C0),mt("div",gE,[mt("main",null,[It(r)])])])}}};/*!
  * vue-router v4.4.5
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */const Zr=typeof document<"u";function om(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function xE(t){return t.__esModule||t[Symbol.toStringTag]==="Module"||t.default&&om(t.default)}const St=Object.assign;function Dl(t,e){const n={};for(const i in e){const r=e[i];n[i]=Hn(r)?r.map(t):t(r)}return n}const Gs=()=>{},Hn=Array.isArray,lm=/#/g,yE=/&/g,SE=/\//g,ME=/=/g,bE=/\?/g,cm=/\+/g,TE=/%5B/g,EE=/%5D/g,um=/%5E/g,wE=/%60/g,fm=/%7B/g,AE=/%7C/g,hm=/%7D/g,CE=/%20/g;function Du(t){return encodeURI(""+t).replace(AE,"|").replace(TE,"[").replace(EE,"]")}function RE(t){return Du(t).replace(fm,"{").replace(hm,"}").replace(um,"^")}function Hc(t){return Du(t).replace(cm,"%2B").replace(CE,"+").replace(lm,"%23").replace(yE,"%26").replace(wE,"`").replace(fm,"{").replace(hm,"}").replace(um,"^")}function PE(t){return Hc(t).replace(ME,"%3D")}function DE(t){return Du(t).replace(lm,"%23").replace(bE,"%3F")}function LE(t){return t==null?"":DE(t).replace(SE,"%2F")}function ta(t){try{return decodeURIComponent(""+t)}catch{}return""+t}const IE=/\/$/,UE=t=>t.replace(IE,"");function Ll(t,e,n="/"){let i,r={},s="",a="";const o=e.indexOf("#");let l=e.indexOf("?");return o<l&&o>=0&&(l=-1),l>-1&&(i=e.slice(0,l),s=e.slice(l+1,o>-1?o:e.length),r=t(s)),o>-1&&(i=i||e.slice(0,o),a=e.slice(o,e.length)),i=BE(i??e,n),{fullPath:i+(s&&"?")+s+a,path:i,query:r,hash:ta(a)}}function NE(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function Dh(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function OE(t,e,n){const i=e.matched.length-1,r=n.matched.length-1;return i>-1&&i===r&&ds(e.matched[i],n.matched[r])&&dm(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function ds(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function dm(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!FE(t[n],e[n]))return!1;return!0}function FE(t,e){return Hn(t)?Lh(t,e):Hn(e)?Lh(e,t):t===e}function Lh(t,e){return Hn(e)?t.length===e.length&&t.every((n,i)=>n===e[i]):t.length===1&&t[0]===e}function BE(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),i=t.split("/"),r=i[i.length-1];(r===".."||r===".")&&i.push("");let s=n.length-1,a,o;for(a=0;a<i.length;a++)if(o=i[a],o!==".")if(o==="..")s>1&&s--;else break;return n.slice(0,s).join("/")+"/"+i.slice(a).join("/")}const Oi={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var na;(function(t){t.pop="pop",t.push="push"})(na||(na={}));var Ws;(function(t){t.back="back",t.forward="forward",t.unknown=""})(Ws||(Ws={}));function zE(t){if(!t)if(Zr){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),UE(t)}const kE=/^[^#]+#/;function HE(t,e){return t.replace(kE,"#")+e}function VE(t,e){const n=document.documentElement.getBoundingClientRect(),i=t.getBoundingClientRect();return{behavior:e.behavior,left:i.left-n.left-(e.left||0),top:i.top-n.top-(e.top||0)}}const Io=()=>({left:window.scrollX,top:window.scrollY});function GE(t){let e;if("el"in t){const n=t.el,i=typeof n=="string"&&n.startsWith("#"),r=typeof n=="string"?i?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!r)return;e=VE(r,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function Ih(t,e){return(history.state?history.state.position-e:-1)+t}const Vc=new Map;function WE(t,e){Vc.set(t,e)}function XE(t){const e=Vc.get(t);return Vc.delete(t),e}let jE=()=>location.protocol+"//"+location.host;function pm(t,e){const{pathname:n,search:i,hash:r}=e,s=t.indexOf("#");if(s>-1){let o=r.includes(t.slice(s))?t.slice(s).length:1,l=r.slice(o);return l[0]!=="/"&&(l="/"+l),Dh(l,"")}return Dh(n,t)+i+r}function qE(t,e,n,i){let r=[],s=[],a=null;const o=({state:c})=>{const m=pm(t,location),p=n.value,y=e.value;let g=0;if(c){if(n.value=m,e.value=c,a&&a===p){a=null;return}g=y?c.position-y.position:0}else i(m);r.forEach(h=>{h(n.value,p,{delta:g,type:na.pop,direction:g?g>0?Ws.forward:Ws.back:Ws.unknown})})};function l(){a=n.value}function f(c){r.push(c);const m=()=>{const p=r.indexOf(c);p>-1&&r.splice(p,1)};return s.push(m),m}function u(){const{history:c}=window;c.state&&c.replaceState(St({},c.state,{scroll:Io()}),"")}function d(){for(const c of s)c();s=[],window.removeEventListener("popstate",o),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",o),window.addEventListener("beforeunload",u,{passive:!0}),{pauseListeners:l,listen:f,destroy:d}}function Uh(t,e,n,i=!1,r=!1){return{back:t,current:e,forward:n,replaced:i,position:window.history.length,scroll:r?Io():null}}function YE(t){const{history:e,location:n}=window,i={value:pm(t,n)},r={value:e.state};r.value||s(i.value,{back:null,current:i.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function s(l,f,u){const d=t.indexOf("#"),c=d>-1?(n.host&&document.querySelector("base")?t:t.slice(d))+l:jE()+t+l;try{e[u?"replaceState":"pushState"](f,"",c),r.value=f}catch{n[u?"replace":"assign"](c)}}function a(l,f){const u=St({},e.state,Uh(r.value.back,l,r.value.forward,!0),f,{position:r.value.position});s(l,u,!0),i.value=l}function o(l,f){const u=St({},r.value,e.state,{forward:l,scroll:Io()});s(u.current,u,!0);const d=St({},Uh(i.value,l,null),{position:u.position+1},f);s(l,d,!1),i.value=l}return{location:i,state:r,push:o,replace:a}}function $E(t){t=zE(t);const e=YE(t),n=qE(t,e.state,e.location,e.replace);function i(s,a=!0){a||n.pauseListeners(),history.go(s)}const r=St({location:"",base:t,go:i,createHref:HE.bind(null,t)},e,n);return Object.defineProperty(r,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(r,"state",{enumerable:!0,get:()=>e.state.value}),r}function KE(t){return typeof t=="string"||t&&typeof t=="object"}function mm(t){return typeof t=="string"||typeof t=="symbol"}const _m=Symbol("");var Nh;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(Nh||(Nh={}));function ps(t,e){return St(new Error,{type:t,[_m]:!0},e)}function fi(t,e){return t instanceof Error&&_m in t&&(e==null||!!(t.type&e))}const Oh="[^/]+?",ZE={sensitive:!1,strict:!1,start:!0,end:!0},JE=/[.+*?^${}()[\]/\\]/g;function QE(t,e){const n=St({},ZE,e),i=[];let r=n.start?"^":"";const s=[];for(const f of t){const u=f.length?[]:[90];n.strict&&!f.length&&(r+="/");for(let d=0;d<f.length;d++){const c=f[d];let m=40+(n.sensitive?.25:0);if(c.type===0)d||(r+="/"),r+=c.value.replace(JE,"\\$&"),m+=40;else if(c.type===1){const{value:p,repeatable:y,optional:g,regexp:h}=c;s.push({name:p,repeatable:y,optional:g});const T=h||Oh;if(T!==Oh){m+=10;try{new RegExp(`(${T})`)}catch(w){throw new Error(`Invalid custom RegExp for param "${p}" (${T}): `+w.message)}}let M=y?`((?:${T})(?:/(?:${T}))*)`:`(${T})`;d||(M=g&&f.length<2?`(?:/${M})`:"/"+M),g&&(M+="?"),r+=M,m+=20,g&&(m+=-8),y&&(m+=-20),T===".*"&&(m+=-50)}u.push(m)}i.push(u)}if(n.strict&&n.end){const f=i.length-1;i[f][i[f].length-1]+=.7000000000000001}n.strict||(r+="/?"),n.end?r+="$":n.strict&&(r+="(?:/|$)");const a=new RegExp(r,n.sensitive?"":"i");function o(f){const u=f.match(a),d={};if(!u)return null;for(let c=1;c<u.length;c++){const m=u[c]||"",p=s[c-1];d[p.name]=m&&p.repeatable?m.split("/"):m}return d}function l(f){let u="",d=!1;for(const c of t){(!d||!u.endsWith("/"))&&(u+="/"),d=!1;for(const m of c)if(m.type===0)u+=m.value;else if(m.type===1){const{value:p,repeatable:y,optional:g}=m,h=p in f?f[p]:"";if(Hn(h)&&!y)throw new Error(`Provided param "${p}" is an array but it is not repeatable (* or + modifiers)`);const T=Hn(h)?h.join("/"):h;if(!T)if(g)c.length<2&&(u.endsWith("/")?u=u.slice(0,-1):d=!0);else throw new Error(`Missing required param "${p}"`);u+=T}}return u||"/"}return{re:a,score:i,keys:s,parse:o,stringify:l}}function e1(t,e){let n=0;for(;n<t.length&&n<e.length;){const i=e[n]-t[n];if(i)return i;n++}return t.length<e.length?t.length===1&&t[0]===80?-1:1:t.length>e.length?e.length===1&&e[0]===80?1:-1:0}function gm(t,e){let n=0;const i=t.score,r=e.score;for(;n<i.length&&n<r.length;){const s=e1(i[n],r[n]);if(s)return s;n++}if(Math.abs(r.length-i.length)===1){if(Fh(i))return 1;if(Fh(r))return-1}return r.length-i.length}function Fh(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const t1={type:0,value:""},n1=/[a-zA-Z0-9_]/;function i1(t){if(!t)return[[]];if(t==="/")return[[t1]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(m){throw new Error(`ERR (${n})/"${f}": ${m}`)}let n=0,i=n;const r=[];let s;function a(){s&&r.push(s),s=[]}let o=0,l,f="",u="";function d(){f&&(n===0?s.push({type:0,value:f}):n===1||n===2||n===3?(s.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${f}) must be alone in its segment. eg: '/:ids+.`),s.push({type:1,value:f,regexp:u,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),f="")}function c(){f+=l}for(;o<t.length;){if(l=t[o++],l==="\\"&&n!==2){i=n,n=4;continue}switch(n){case 0:l==="/"?(f&&d(),a()):l===":"?(d(),n=1):c();break;case 4:c(),n=i;break;case 1:l==="("?n=2:n1.test(l)?c():(d(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&o--);break;case 2:l===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+l:n=3:u+=l;break;case 3:d(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&o--,u="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${f}"`),d(),a(),r}function r1(t,e,n){const i=QE(i1(t.path),n),r=St(i,{record:t,parent:e,children:[],alias:[]});return e&&!r.record.aliasOf==!e.record.aliasOf&&e.children.push(r),r}function s1(t,e){const n=[],i=new Map;e=Hh({strict:!1,end:!0,sensitive:!1},e);function r(d){return i.get(d)}function s(d,c,m){const p=!m,y=zh(d);y.aliasOf=m&&m.record;const g=Hh(e,d),h=[y];if("alias"in d){const w=typeof d.alias=="string"?[d.alias]:d.alias;for(const V of w)h.push(zh(St({},y,{components:m?m.record.components:y.components,path:V,aliasOf:m?m.record:y})))}let T,M;for(const w of h){const{path:V}=w;if(c&&V[0]!=="/"){const L=c.record.path,z=L[L.length-1]==="/"?"":"/";w.path=c.record.path+(V&&z+V)}if(T=r1(w,c,g),m?m.alias.push(T):(M=M||T,M!==T&&M.alias.push(T),p&&d.name&&!kh(T)&&a(d.name)),vm(T)&&l(T),y.children){const L=y.children;for(let z=0;z<L.length;z++)s(L[z],T,m&&m.children[z])}m=m||T}return M?()=>{a(M)}:Gs}function a(d){if(mm(d)){const c=i.get(d);c&&(i.delete(d),n.splice(n.indexOf(c),1),c.children.forEach(a),c.alias.forEach(a))}else{const c=n.indexOf(d);c>-1&&(n.splice(c,1),d.record.name&&i.delete(d.record.name),d.children.forEach(a),d.alias.forEach(a))}}function o(){return n}function l(d){const c=l1(d,n);n.splice(c,0,d),d.record.name&&!kh(d)&&i.set(d.record.name,d)}function f(d,c){let m,p={},y,g;if("name"in d&&d.name){if(m=i.get(d.name),!m)throw ps(1,{location:d});g=m.record.name,p=St(Bh(c.params,m.keys.filter(M=>!M.optional).concat(m.parent?m.parent.keys.filter(M=>M.optional):[]).map(M=>M.name)),d.params&&Bh(d.params,m.keys.map(M=>M.name))),y=m.stringify(p)}else if(d.path!=null)y=d.path,m=n.find(M=>M.re.test(y)),m&&(p=m.parse(y),g=m.record.name);else{if(m=c.name?i.get(c.name):n.find(M=>M.re.test(c.path)),!m)throw ps(1,{location:d,currentLocation:c});g=m.record.name,p=St({},c.params,d.params),y=m.stringify(p)}const h=[];let T=m;for(;T;)h.unshift(T.record),T=T.parent;return{name:g,path:y,params:p,matched:h,meta:o1(h)}}t.forEach(d=>s(d));function u(){n.length=0,i.clear()}return{addRoute:s,resolve:f,removeRoute:a,clearRoutes:u,getRoutes:o,getRecordMatcher:r}}function Bh(t,e){const n={};for(const i of e)i in t&&(n[i]=t[i]);return n}function zh(t){const e={path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:t.aliasOf,beforeEnter:t.beforeEnter,props:a1(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}};return Object.defineProperty(e,"mods",{value:{}}),e}function a1(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const i in t.components)e[i]=typeof n=="object"?n[i]:n;return e}function kh(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function o1(t){return t.reduce((e,n)=>St(e,n.meta),{})}function Hh(t,e){const n={};for(const i in t)n[i]=i in e?e[i]:t[i];return n}function l1(t,e){let n=0,i=e.length;for(;n!==i;){const s=n+i>>1;gm(t,e[s])<0?i=s:n=s+1}const r=c1(t);return r&&(i=e.lastIndexOf(r,i-1)),i}function c1(t){let e=t;for(;e=e.parent;)if(vm(e)&&gm(t,e)===0)return e}function vm({record:t}){return!!(t.name||t.components&&Object.keys(t.components).length||t.redirect)}function u1(t){const e={};if(t===""||t==="?")return e;const i=(t[0]==="?"?t.slice(1):t).split("&");for(let r=0;r<i.length;++r){const s=i[r].replace(cm," "),a=s.indexOf("="),o=ta(a<0?s:s.slice(0,a)),l=a<0?null:ta(s.slice(a+1));if(o in e){let f=e[o];Hn(f)||(f=e[o]=[f]),f.push(l)}else e[o]=l}return e}function Vh(t){let e="";for(let n in t){const i=t[n];if(n=PE(n),i==null){i!==void 0&&(e+=(e.length?"&":"")+n);continue}(Hn(i)?i.map(s=>s&&Hc(s)):[i&&Hc(i)]).forEach(s=>{s!==void 0&&(e+=(e.length?"&":"")+n,s!=null&&(e+="="+s))})}return e}function f1(t){const e={};for(const n in t){const i=t[n];i!==void 0&&(e[n]=Hn(i)?i.map(r=>r==null?null:""+r):i==null?i:""+i)}return e}const h1=Symbol(""),Gh=Symbol(""),Lu=Symbol(""),xm=Symbol(""),Gc=Symbol("");function Ds(){let t=[];function e(i){return t.push(i),()=>{const r=t.indexOf(i);r>-1&&t.splice(r,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function Hi(t,e,n,i,r,s=a=>a()){const a=i&&(i.enterCallbacks[r]=i.enterCallbacks[r]||[]);return()=>new Promise((o,l)=>{const f=c=>{c===!1?l(ps(4,{from:n,to:e})):c instanceof Error?l(c):KE(c)?l(ps(2,{from:e,to:c})):(a&&i.enterCallbacks[r]===a&&typeof c=="function"&&a.push(c),o())},u=s(()=>t.call(i&&i.instances[r],e,n,f));let d=Promise.resolve(u);t.length<3&&(d=d.then(f)),d.catch(c=>l(c))})}function Il(t,e,n,i,r=s=>s()){const s=[];for(const a of t)for(const o in a.components){let l=a.components[o];if(!(e!=="beforeRouteEnter"&&!a.instances[o]))if(om(l)){const u=(l.__vccOpts||l)[e];u&&s.push(Hi(u,n,i,a,o,r))}else{let f=l();s.push(()=>f.then(u=>{if(!u)throw new Error(`Couldn't resolve component "${o}" at "${a.path}"`);const d=xE(u)?u.default:u;a.mods[o]=u,a.components[o]=d;const m=(d.__vccOpts||d)[e];return m&&Hi(m,n,i,a,o,r)()}))}}return s}function Wh(t){const e=xi(Lu),n=xi(xm),i=In(()=>{const l=qi(t.to);return e.resolve(l)}),r=In(()=>{const{matched:l}=i.value,{length:f}=l,u=l[f-1],d=n.matched;if(!u||!d.length)return-1;const c=d.findIndex(ds.bind(null,u));if(c>-1)return c;const m=Xh(l[f-2]);return f>1&&Xh(u)===m&&d[d.length-1].path!==m?d.findIndex(ds.bind(null,l[f-2])):c}),s=In(()=>r.value>-1&&_1(n.params,i.value.params)),a=In(()=>r.value>-1&&r.value===n.matched.length-1&&dm(n.params,i.value.params));function o(l={}){return m1(l)?e[qi(t.replace)?"replace":"push"](qi(t.to)).catch(Gs):Promise.resolve()}return{route:i,href:In(()=>i.value.href),isActive:s,isExactActive:a,navigate:o}}const d1=Id({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Wh,setup(t,{slots:e}){const n=yo(Wh(t)),{options:i}=xi(Lu),r=In(()=>({[jh(t.activeClass,i.linkActiveClass,"router-link-active")]:n.isActive,[jh(t.exactActiveClass,i.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const s=e.default&&e.default(n);return t.custom?s:du("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:r.value},s)}}}),p1=d1;function m1(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function _1(t,e){for(const n in e){const i=e[n],r=t[n];if(typeof i=="string"){if(i!==r)return!1}else if(!Hn(r)||r.length!==i.length||i.some((s,a)=>s!==r[a]))return!1}return!0}function Xh(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const jh=(t,e,n)=>t??e??n,g1=Id({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const i=xi(Gc),r=In(()=>t.route||i.value),s=xi(Gh,0),a=In(()=>{let f=qi(s);const{matched:u}=r.value;let d;for(;(d=u[f])&&!d.components;)f++;return f}),o=In(()=>r.value.matched[a.value]);Va(Gh,In(()=>a.value+1)),Va(h1,o),Va(Gc,r);const l=to();return Ga(()=>[l.value,o.value,t.name],([f,u,d],[c,m,p])=>{u&&(u.instances[d]=f,m&&m!==u&&f&&f===c&&(u.leaveGuards.size||(u.leaveGuards=m.leaveGuards),u.updateGuards.size||(u.updateGuards=m.updateGuards))),f&&u&&(!m||!ds(u,m)||!c)&&(u.enterCallbacks[d]||[]).forEach(y=>y(f))},{flush:"post"}),()=>{const f=r.value,u=t.name,d=o.value,c=d&&d.components[u];if(!c)return qh(n.default,{Component:c,route:f});const m=d.props[u],p=m?m===!0?f.params:typeof m=="function"?m(f):m:null,g=du(c,St({},p,e,{onVnodeUnmounted:h=>{h.component.isUnmounted&&(d.instances[u]=null)},ref:l}));return qh(n.default,{Component:g,route:f})||g}}});function qh(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const v1=g1;function x1(t){const e=s1(t.routes,t),n=t.parseQuery||u1,i=t.stringifyQuery||Vh,r=t.history,s=Ds(),a=Ds(),o=Ds(),l=S_(Oi);let f=Oi;Zr&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=Dl.bind(null,ee=>""+ee),d=Dl.bind(null,LE),c=Dl.bind(null,ta);function m(ee,we){let xe,De;return mm(ee)?(xe=e.getRecordMatcher(ee),De=we):De=ee,e.addRoute(De,xe)}function p(ee){const we=e.getRecordMatcher(ee);we&&e.removeRoute(we)}function y(){return e.getRoutes().map(ee=>ee.record)}function g(ee){return!!e.getRecordMatcher(ee)}function h(ee,we){if(we=St({},we||l.value),typeof ee=="string"){const H=Ll(n,ee,we.path),W=e.resolve({path:H.path},we),pe=r.createHref(H.fullPath);return St(H,W,{params:c(W.params),hash:ta(H.hash),redirectedFrom:void 0,href:pe})}let xe;if(ee.path!=null)xe=St({},ee,{path:Ll(n,ee.path,we.path).path});else{const H=St({},ee.params);for(const W in H)H[W]==null&&delete H[W];xe=St({},ee,{params:d(H)}),we.params=d(we.params)}const De=e.resolve(xe,we),je=ee.hash||"";De.params=u(c(De.params));const We=NE(i,St({},ee,{hash:RE(je),path:De.path})),A=r.createHref(We);return St({fullPath:We,hash:je,query:i===Vh?f1(ee.query):ee.query||{}},De,{redirectedFrom:void 0,href:A})}function T(ee){return typeof ee=="string"?Ll(n,ee,l.value.path):St({},ee)}function M(ee,we){if(f!==ee)return ps(8,{from:we,to:ee})}function w(ee){return z(ee)}function V(ee){return w(St(T(ee),{replace:!0}))}function L(ee){const we=ee.matched[ee.matched.length-1];if(we&&we.redirect){const{redirect:xe}=we;let De=typeof xe=="function"?xe(ee):xe;return typeof De=="string"&&(De=De.includes("?")||De.includes("#")?De=T(De):{path:De},De.params={}),St({query:ee.query,hash:ee.hash,params:De.path!=null?{}:ee.params},De)}}function z(ee,we){const xe=f=h(ee),De=l.value,je=ee.state,We=ee.force,A=ee.replace===!0,H=L(xe);if(H)return z(St(T(H),{state:typeof H=="object"?St({},je,H.state):je,force:We,replace:A}),we||xe);const W=xe;W.redirectedFrom=we;let pe;return!We&&OE(i,De,xe)&&(pe=ps(16,{to:W,from:De}),ke(De,De,!0,!1)),(pe?Promise.resolve(pe):E(W,De)).catch(oe=>fi(oe)?fi(oe,2)?oe:ze(oe):ne(oe,W,De)).then(oe=>{if(oe){if(fi(oe,2))return z(St({replace:A},T(oe.to),{state:typeof oe.to=="object"?St({},je,oe.to.state):je,force:We}),we||W)}else oe=G(W,De,!0,A,je);return R(W,De,oe),oe})}function X(ee,we){const xe=M(ee,we);return xe?Promise.reject(xe):Promise.resolve()}function $(ee){const we=Se.values().next().value;return we&&typeof we.runWithContext=="function"?we.runWithContext(ee):ee()}function E(ee,we){let xe;const[De,je,We]=y1(ee,we);xe=Il(De.reverse(),"beforeRouteLeave",ee,we);for(const H of De)H.leaveGuards.forEach(W=>{xe.push(Hi(W,ee,we))});const A=X.bind(null,ee,we);return xe.push(A),Oe(xe).then(()=>{xe=[];for(const H of s.list())xe.push(Hi(H,ee,we));return xe.push(A),Oe(xe)}).then(()=>{xe=Il(je,"beforeRouteUpdate",ee,we);for(const H of je)H.updateGuards.forEach(W=>{xe.push(Hi(W,ee,we))});return xe.push(A),Oe(xe)}).then(()=>{xe=[];for(const H of We)if(H.beforeEnter)if(Hn(H.beforeEnter))for(const W of H.beforeEnter)xe.push(Hi(W,ee,we));else xe.push(Hi(H.beforeEnter,ee,we));return xe.push(A),Oe(xe)}).then(()=>(ee.matched.forEach(H=>H.enterCallbacks={}),xe=Il(We,"beforeRouteEnter",ee,we,$),xe.push(A),Oe(xe))).then(()=>{xe=[];for(const H of a.list())xe.push(Hi(H,ee,we));return xe.push(A),Oe(xe)}).catch(H=>fi(H,8)?H:Promise.reject(H))}function R(ee,we,xe){o.list().forEach(De=>$(()=>De(ee,we,xe)))}function G(ee,we,xe,De,je){const We=M(ee,we);if(We)return We;const A=we===Oi,H=Zr?history.state:{};xe&&(De||A?r.replace(ee.fullPath,St({scroll:A&&H&&H.scroll},je)):r.push(ee.fullPath,je)),l.value=ee,ke(ee,we,xe,A),ze()}let q;function ce(){q||(q=r.listen((ee,we,xe)=>{if(!Ce.listening)return;const De=h(ee),je=L(De);if(je){z(St(je,{replace:!0}),De).catch(Gs);return}f=De;const We=l.value;Zr&&WE(Ih(We.fullPath,xe.delta),Io()),E(De,We).catch(A=>fi(A,12)?A:fi(A,2)?(z(A.to,De).then(H=>{fi(H,20)&&!xe.delta&&xe.type===na.pop&&r.go(-1,!1)}).catch(Gs),Promise.reject()):(xe.delta&&r.go(-xe.delta,!1),ne(A,De,We))).then(A=>{A=A||G(De,We,!1),A&&(xe.delta&&!fi(A,8)?r.go(-xe.delta,!1):xe.type===na.pop&&fi(A,20)&&r.go(-1,!1)),R(De,We,A)}).catch(Gs)}))}let re=Ds(),ae=Ds(),me;function ne(ee,we,xe){ze(ee);const De=ae.list();return De.length&&De.forEach(je=>je(ee,we,xe)),Promise.reject(ee)}function Ne(){return me&&l.value!==Oi?Promise.resolve():new Promise((ee,we)=>{re.add([ee,we])})}function ze(ee){return me||(me=!ee,ce(),re.list().forEach(([we,xe])=>ee?xe(ee):we()),re.reset()),ee}function ke(ee,we,xe,De){const{scrollBehavior:je}=t;if(!Zr||!je)return Promise.resolve();const We=!xe&&XE(Ih(ee.fullPath,0))||(De||!xe)&&history.state&&history.state.scroll||null;return Md().then(()=>je(ee,we,We)).then(A=>A&&GE(A)).catch(A=>ne(A,ee,we))}const Ze=ee=>r.go(ee);let nt;const Se=new Set,Ce={currentRoute:l,listening:!0,addRoute:m,removeRoute:p,clearRoutes:e.clearRoutes,hasRoute:g,getRoutes:y,resolve:h,options:t,push:w,replace:V,go:Ze,back:()=>Ze(-1),forward:()=>Ze(1),beforeEach:s.add,beforeResolve:a.add,afterEach:o.add,onError:ae.add,isReady:Ne,install(ee){const we=this;ee.component("RouterLink",p1),ee.component("RouterView",v1),ee.config.globalProperties.$router=we,Object.defineProperty(ee.config.globalProperties,"$route",{enumerable:!0,get:()=>qi(l)}),Zr&&!nt&&l.value===Oi&&(nt=!0,w(r.location).catch(je=>{}));const xe={};for(const je in Oi)Object.defineProperty(xe,je,{get:()=>l.value[je],enumerable:!0});ee.provide(Lu,we),ee.provide(xm,gd(xe)),ee.provide(Gc,l);const De=ee.unmount;Se.add(ee),ee.unmount=function(){Se.delete(ee),Se.size<1&&(f=Oi,q&&q(),q=null,l.value=Oi,nt=!1,me=!1),De()}}};function Oe(ee){return ee.reduce((we,xe)=>we.then(()=>$(xe)),Promise.resolve())}return Ce}function y1(t,e){const n=[],i=[],r=[],s=Math.max(e.matched.length,t.matched.length);for(let a=0;a<s;a++){const o=e.matched[a];o&&(t.matched.find(f=>ds(f,o))?i.push(o):n.push(o));const l=t.matched[a];l&&(e.matched.find(f=>ds(f,l))||r.push(l))}return[n,i,r]}const S1="/YangPortfolioPublic/assets/Gameplay_15-DtT676tY.jpg",M1="/YangPortfolioPublic/assets/TrinityWeb-CpRoOp3A.webp",b1="/YangPortfolioPublic/assets/TrinityECPreview-Dqa34tWo.png",T1="/YangPortfolioPublic/assets/JTowerPreview-yL9mZQrX.png",E1="/YangPortfolioPublic/assets/Diian-OsGrEqTV.png",w1="/YangPortfolioPublic/assets/KAEC-CNH9m6_F.png",A1="/YangPortfolioPublic/assets/FoxConn-CXSSpqMV.png",C1="/YangPortfolioPublic/assets/Gis-CZskLWq_.png";var ym={update:null,begin:null,loopBegin:null,changeBegin:null,change:null,changeComplete:null,loopComplete:null,complete:null,loop:1,direction:"normal",autoplay:!0,timelineOffset:0},Iu={duration:1e3,delay:0,endDelay:0,easing:"easeOutElastic(1, .5)",round:0},R1=["translateX","translateY","translateZ","rotate","rotateX","rotateY","rotateZ","scale","scaleX","scaleY","scaleZ","skew","skewX","skewY","perspective","matrix","matrix3d"],po={CSS:{},springs:{}};function $n(t,e,n){return Math.min(Math.max(t,e),n)}function Xs(t,e){return t.indexOf(e)>-1}function Ul(t,e){return t.apply(null,e)}var et={arr:function(t){return Array.isArray(t)},obj:function(t){return Xs(Object.prototype.toString.call(t),"Object")},pth:function(t){return et.obj(t)&&t.hasOwnProperty("totalLength")},svg:function(t){return t instanceof SVGElement},inp:function(t){return t instanceof HTMLInputElement},dom:function(t){return t.nodeType||et.svg(t)},str:function(t){return typeof t=="string"},fnc:function(t){return typeof t=="function"},und:function(t){return typeof t>"u"},nil:function(t){return et.und(t)||t===null},hex:function(t){return/(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(t)},rgb:function(t){return/^rgb/.test(t)},hsl:function(t){return/^hsl/.test(t)},col:function(t){return et.hex(t)||et.rgb(t)||et.hsl(t)},key:function(t){return!ym.hasOwnProperty(t)&&!Iu.hasOwnProperty(t)&&t!=="targets"&&t!=="keyframes"}};function Sm(t){var e=/\(([^)]+)\)/.exec(t);return e?e[1].split(",").map(function(n){return parseFloat(n)}):[]}function Mm(t,e){var n=Sm(t),i=$n(et.und(n[0])?1:n[0],.1,100),r=$n(et.und(n[1])?100:n[1],.1,100),s=$n(et.und(n[2])?10:n[2],.1,100),a=$n(et.und(n[3])?0:n[3],.1,100),o=Math.sqrt(r/i),l=s/(2*Math.sqrt(r*i)),f=l<1?o*Math.sqrt(1-l*l):0,u=1,d=l<1?(l*o+-a)/f:-a+o;function c(p){var y=e?e*p/1e3:p;return l<1?y=Math.exp(-y*l*o)*(u*Math.cos(f*y)+d*Math.sin(f*y)):y=(u+d*y)*Math.exp(-y*o),p===0||p===1?p:1-y}function m(){var p=po.springs[t];if(p)return p;for(var y=1/6,g=0,h=0;;)if(g+=y,c(g)===1){if(h++,h>=16)break}else h=0;var T=g*y*1e3;return po.springs[t]=T,T}return e?c:m}function P1(t){return t===void 0&&(t=10),function(e){return Math.ceil($n(e,1e-6,1)*t)*(1/t)}}var D1=function(){var t=11,e=1/(t-1);function n(u,d){return 1-3*d+3*u}function i(u,d){return 3*d-6*u}function r(u){return 3*u}function s(u,d,c){return((n(d,c)*u+i(d,c))*u+r(d))*u}function a(u,d,c){return 3*n(d,c)*u*u+2*i(d,c)*u+r(d)}function o(u,d,c,m,p){var y,g,h=0;do g=d+(c-d)/2,y=s(g,m,p)-u,y>0?c=g:d=g;while(Math.abs(y)>1e-7&&++h<10);return g}function l(u,d,c,m){for(var p=0;p<4;++p){var y=a(d,c,m);if(y===0)return d;var g=s(d,c,m)-u;d-=g/y}return d}function f(u,d,c,m){if(!(0<=u&&u<=1&&0<=c&&c<=1))return;var p=new Float32Array(t);if(u!==d||c!==m)for(var y=0;y<t;++y)p[y]=s(y*e,u,c);function g(h){for(var T=0,M=1,w=t-1;M!==w&&p[M]<=h;++M)T+=e;--M;var V=(h-p[M])/(p[M+1]-p[M]),L=T+V*e,z=a(L,u,c);return z>=.001?l(h,L,u,c):z===0?L:o(h,T,T+e,u,c)}return function(h){return u===d&&c===m||h===0||h===1?h:s(g(h),d,m)}}return f}(),bm=function(){var t={linear:function(){return function(i){return i}}},e={Sine:function(){return function(i){return 1-Math.cos(i*Math.PI/2)}},Expo:function(){return function(i){return i?Math.pow(2,10*i-10):0}},Circ:function(){return function(i){return 1-Math.sqrt(1-i*i)}},Back:function(){return function(i){return i*i*(3*i-2)}},Bounce:function(){return function(i){for(var r,s=4;i<((r=Math.pow(2,--s))-1)/11;);return 1/Math.pow(4,3-s)-7.5625*Math.pow((r*3-2)/22-i,2)}},Elastic:function(i,r){i===void 0&&(i=1),r===void 0&&(r=.5);var s=$n(i,1,10),a=$n(r,.1,2);return function(o){return o===0||o===1?o:-s*Math.pow(2,10*(o-1))*Math.sin((o-1-a/(Math.PI*2)*Math.asin(1/s))*(Math.PI*2)/a)}}},n=["Quad","Cubic","Quart","Quint"];return n.forEach(function(i,r){e[i]=function(){return function(s){return Math.pow(s,r+2)}}}),Object.keys(e).forEach(function(i){var r=e[i];t["easeIn"+i]=r,t["easeOut"+i]=function(s,a){return function(o){return 1-r(s,a)(1-o)}},t["easeInOut"+i]=function(s,a){return function(o){return o<.5?r(s,a)(o*2)/2:1-r(s,a)(o*-2+2)/2}},t["easeOutIn"+i]=function(s,a){return function(o){return o<.5?(1-r(s,a)(1-o*2))/2:(r(s,a)(o*2-1)+1)/2}}}),t}();function Uu(t,e){if(et.fnc(t))return t;var n=t.split("(")[0],i=bm[n],r=Sm(t);switch(n){case"spring":return Mm(t,e);case"cubicBezier":return Ul(D1,r);case"steps":return Ul(P1,r);default:return Ul(i,r)}}function Tm(t){try{var e=document.querySelectorAll(t);return e}catch{return}}function Uo(t,e){for(var n=t.length,i=arguments.length>=2?arguments[1]:void 0,r=[],s=0;s<n;s++)if(s in t){var a=t[s];e.call(i,a,s,t)&&r.push(a)}return r}function No(t){return t.reduce(function(e,n){return e.concat(et.arr(n)?No(n):n)},[])}function Yh(t){return et.arr(t)?t:(et.str(t)&&(t=Tm(t)||t),t instanceof NodeList||t instanceof HTMLCollection?[].slice.call(t):[t])}function Nu(t,e){return t.some(function(n){return n===e})}function Ou(t){var e={};for(var n in t)e[n]=t[n];return e}function Wc(t,e){var n=Ou(t);for(var i in t)n[i]=e.hasOwnProperty(i)?e[i]:t[i];return n}function Oo(t,e){var n=Ou(t);for(var i in e)n[i]=et.und(t[i])?e[i]:t[i];return n}function L1(t){var e=/rgb\((\d+,\s*[\d]+,\s*[\d]+)\)/g.exec(t);return e?"rgba("+e[1]+",1)":t}function I1(t){var e=/^#?([a-f\d])([a-f\d])([a-f\d])$/i,n=t.replace(e,function(o,l,f,u){return l+l+f+f+u+u}),i=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(n),r=parseInt(i[1],16),s=parseInt(i[2],16),a=parseInt(i[3],16);return"rgba("+r+","+s+","+a+",1)"}function U1(t){var e=/hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)/g.exec(t)||/hsla\((\d+),\s*([\d.]+)%,\s*([\d.]+)%,\s*([\d.]+)\)/g.exec(t),n=parseInt(e[1],10)/360,i=parseInt(e[2],10)/100,r=parseInt(e[3],10)/100,s=e[4]||1;function a(c,m,p){return p<0&&(p+=1),p>1&&(p-=1),p<1/6?c+(m-c)*6*p:p<1/2?m:p<2/3?c+(m-c)*(2/3-p)*6:c}var o,l,f;if(i==0)o=l=f=r;else{var u=r<.5?r*(1+i):r+i-r*i,d=2*r-u;o=a(d,u,n+1/3),l=a(d,u,n),f=a(d,u,n-1/3)}return"rgba("+o*255+","+l*255+","+f*255+","+s+")"}function N1(t){if(et.rgb(t))return L1(t);if(et.hex(t))return I1(t);if(et.hsl(t))return U1(t)}function Si(t){var e=/[+-]?\d*\.?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?(%|px|pt|em|rem|in|cm|mm|ex|ch|pc|vw|vh|vmin|vmax|deg|rad|turn)?$/.exec(t);if(e)return e[1]}function O1(t){if(Xs(t,"translate")||t==="perspective")return"px";if(Xs(t,"rotate")||Xs(t,"skew"))return"deg"}function Xc(t,e){return et.fnc(t)?t(e.target,e.id,e.total):t}function Kn(t,e){return t.getAttribute(e)}function Fu(t,e,n){var i=Si(e);if(Nu([n,"deg","rad","turn"],i))return e;var r=po.CSS[e+n];if(!et.und(r))return r;var s=100,a=document.createElement(t.tagName),o=t.parentNode&&t.parentNode!==document?t.parentNode:document.body;o.appendChild(a),a.style.position="absolute",a.style.width=s+n;var l=s/a.offsetWidth;o.removeChild(a);var f=l*parseFloat(e);return po.CSS[e+n]=f,f}function Em(t,e,n){if(e in t.style){var i=e.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase(),r=t.style[e]||getComputedStyle(t).getPropertyValue(i)||"0";return n?Fu(t,r,n):r}}function Bu(t,e){if(et.dom(t)&&!et.inp(t)&&(!et.nil(Kn(t,e))||et.svg(t)&&t[e]))return"attribute";if(et.dom(t)&&Nu(R1,e))return"transform";if(et.dom(t)&&e!=="transform"&&Em(t,e))return"css";if(t[e]!=null)return"object"}function wm(t){if(et.dom(t)){for(var e=t.style.transform||"",n=/(\w+)\(([^)]*)\)/g,i=new Map,r;r=n.exec(e);)i.set(r[1],r[2]);return i}}function F1(t,e,n,i){var r=Xs(e,"scale")?1:0+O1(e),s=wm(t).get(e)||r;return n&&(n.transforms.list.set(e,s),n.transforms.last=e),i?Fu(t,s,i):s}function zu(t,e,n,i){switch(Bu(t,e)){case"transform":return F1(t,e,i,n);case"css":return Em(t,e,n);case"attribute":return Kn(t,e);default:return t[e]||0}}function ku(t,e){var n=/^(\*=|\+=|-=)/.exec(t);if(!n)return t;var i=Si(t)||0,r=parseFloat(e),s=parseFloat(t.replace(n[0],""));switch(n[0][0]){case"+":return r+s+i;case"-":return r-s+i;case"*":return r*s+i}}function Am(t,e){if(et.col(t))return N1(t);if(/\s/g.test(t))return t;var n=Si(t),i=n?t.substr(0,t.length-n.length):t;return e?i+e:i}function Hu(t,e){return Math.sqrt(Math.pow(e.x-t.x,2)+Math.pow(e.y-t.y,2))}function B1(t){return Math.PI*2*Kn(t,"r")}function z1(t){return Kn(t,"width")*2+Kn(t,"height")*2}function k1(t){return Hu({x:Kn(t,"x1"),y:Kn(t,"y1")},{x:Kn(t,"x2"),y:Kn(t,"y2")})}function Cm(t){for(var e=t.points,n=0,i,r=0;r<e.numberOfItems;r++){var s=e.getItem(r);r>0&&(n+=Hu(i,s)),i=s}return n}function H1(t){var e=t.points;return Cm(t)+Hu(e.getItem(e.numberOfItems-1),e.getItem(0))}function Rm(t){if(t.getTotalLength)return t.getTotalLength();switch(t.tagName.toLowerCase()){case"circle":return B1(t);case"rect":return z1(t);case"line":return k1(t);case"polyline":return Cm(t);case"polygon":return H1(t)}}function V1(t){var e=Rm(t);return t.setAttribute("stroke-dasharray",e),e}function G1(t){for(var e=t.parentNode;et.svg(e)&&et.svg(e.parentNode);)e=e.parentNode;return e}function Pm(t,e){var n=e||{},i=n.el||G1(t),r=i.getBoundingClientRect(),s=Kn(i,"viewBox"),a=r.width,o=r.height,l=n.viewBox||(s?s.split(" "):[0,0,a,o]);return{el:i,viewBox:l,x:l[0]/1,y:l[1]/1,w:a,h:o,vW:l[2],vH:l[3]}}function W1(t,e){var n=et.str(t)?Tm(t)[0]:t,i=e||100;return function(r){return{property:r,el:n,svg:Pm(n),totalLength:Rm(n)*(i/100)}}}function X1(t,e,n){function i(u){u===void 0&&(u=0);var d=e+u>=1?e+u:0;return t.el.getPointAtLength(d)}var r=Pm(t.el,t.svg),s=i(),a=i(-1),o=i(1),l=n?1:r.w/r.vW,f=n?1:r.h/r.vH;switch(t.property){case"x":return(s.x-r.x)*l;case"y":return(s.y-r.y)*f;case"angle":return Math.atan2(o.y-a.y,o.x-a.x)*180/Math.PI}}function $h(t,e){var n=/[+-]?\d*\.?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?/g,i=Am(et.pth(t)?t.totalLength:t,e)+"";return{original:i,numbers:i.match(n)?i.match(n).map(Number):[0],strings:et.str(t)||e?i.split(n):[]}}function Vu(t){var e=t?No(et.arr(t)?t.map(Yh):Yh(t)):[];return Uo(e,function(n,i,r){return r.indexOf(n)===i})}function Dm(t){var e=Vu(t);return e.map(function(n,i){return{target:n,id:i,total:e.length,transforms:{list:wm(n)}}})}function j1(t,e){var n=Ou(e);if(/^spring/.test(n.easing)&&(n.duration=Mm(n.easing)),et.arr(t)){var i=t.length,r=i===2&&!et.obj(t[0]);r?t={value:t}:et.fnc(e.duration)||(n.duration=e.duration/i)}var s=et.arr(t)?t:[t];return s.map(function(a,o){var l=et.obj(a)&&!et.pth(a)?a:{value:a};return et.und(l.delay)&&(l.delay=o?0:e.delay),et.und(l.endDelay)&&(l.endDelay=o===s.length-1?e.endDelay:0),l}).map(function(a){return Oo(a,n)})}function q1(t){for(var e=Uo(No(t.map(function(s){return Object.keys(s)})),function(s){return et.key(s)}).reduce(function(s,a){return s.indexOf(a)<0&&s.push(a),s},[]),n={},i=function(s){var a=e[s];n[a]=t.map(function(o){var l={};for(var f in o)et.key(f)?f==a&&(l.value=o[f]):l[f]=o[f];return l})},r=0;r<e.length;r++)i(r);return n}function Y1(t,e){var n=[],i=e.keyframes;i&&(e=Oo(q1(i),e));for(var r in e)et.key(r)&&n.push({name:r,tweens:j1(e[r],t)});return n}function $1(t,e){var n={};for(var i in t){var r=Xc(t[i],e);et.arr(r)&&(r=r.map(function(s){return Xc(s,e)}),r.length===1&&(r=r[0])),n[i]=r}return n.duration=parseFloat(n.duration),n.delay=parseFloat(n.delay),n}function K1(t,e){var n;return t.tweens.map(function(i){var r=$1(i,e),s=r.value,a=et.arr(s)?s[1]:s,o=Si(a),l=zu(e.target,t.name,o,e),f=n?n.to.original:l,u=et.arr(s)?s[0]:f,d=Si(u)||Si(l),c=o||d;return et.und(a)&&(a=f),r.from=$h(u,c),r.to=$h(ku(a,u),c),r.start=n?n.end:0,r.end=r.start+r.delay+r.duration+r.endDelay,r.easing=Uu(r.easing,r.duration),r.isPath=et.pth(s),r.isPathTargetInsideSVG=r.isPath&&et.svg(e.target),r.isColor=et.col(r.from.original),r.isColor&&(r.round=1),n=r,r})}var Lm={css:function(t,e,n){return t.style[e]=n},attribute:function(t,e,n){return t.setAttribute(e,n)},object:function(t,e,n){return t[e]=n},transform:function(t,e,n,i,r){if(i.list.set(e,n),e===i.last||r){var s="";i.list.forEach(function(a,o){s+=o+"("+a+") "}),t.style.transform=s}}};function Im(t,e){var n=Dm(t);n.forEach(function(i){for(var r in e){var s=Xc(e[r],i),a=i.target,o=Si(s),l=zu(a,r,o,i),f=o||Si(l),u=ku(Am(s,f),l),d=Bu(a,r);Lm[d](a,r,u,i.transforms,!0)}})}function Z1(t,e){var n=Bu(t.target,e.name);if(n){var i=K1(e,t),r=i[i.length-1];return{type:n,property:e.name,animatable:t,tweens:i,duration:r.end,delay:i[0].delay,endDelay:r.endDelay}}}function J1(t,e){return Uo(No(t.map(function(n){return e.map(function(i){return Z1(n,i)})})),function(n){return!et.und(n)})}function Um(t,e){var n=t.length,i=function(s){return s.timelineOffset?s.timelineOffset:0},r={};return r.duration=n?Math.max.apply(Math,t.map(function(s){return i(s)+s.duration})):e.duration,r.delay=n?Math.min.apply(Math,t.map(function(s){return i(s)+s.delay})):e.delay,r.endDelay=n?r.duration-Math.max.apply(Math,t.map(function(s){return i(s)+s.duration-s.endDelay})):e.endDelay,r}var Kh=0;function Q1(t){var e=Wc(ym,t),n=Wc(Iu,t),i=Y1(n,t),r=Dm(t.targets),s=J1(r,i),a=Um(s,n),o=Kh;return Kh++,Oo(e,{id:o,children:[],animatables:r,animations:s,duration:a.duration,delay:a.delay,endDelay:a.endDelay})}var On=[],Nm=function(){var t;function e(){!t&&(!Zh()||!Dt.suspendWhenDocumentHidden)&&On.length>0&&(t=requestAnimationFrame(n))}function n(r){for(var s=On.length,a=0;a<s;){var o=On[a];o.paused?(On.splice(a,1),s--):(o.tick(r),a++)}t=a>0?requestAnimationFrame(n):void 0}function i(){Dt.suspendWhenDocumentHidden&&(Zh()?t=cancelAnimationFrame(t):(On.forEach(function(r){return r._onDocumentVisibility()}),Nm()))}return typeof document<"u"&&document.addEventListener("visibilitychange",i),e}();function Zh(){return!!document&&document.hidden}function Dt(t){t===void 0&&(t={});var e=0,n=0,i=0,r,s=0,a=null;function o(T){var M=window.Promise&&new Promise(function(w){return a=w});return T.finished=M,M}var l=Q1(t);o(l);function f(){var T=l.direction;T!=="alternate"&&(l.direction=T!=="normal"?"normal":"reverse"),l.reversed=!l.reversed,r.forEach(function(M){return M.reversed=l.reversed})}function u(T){return l.reversed?l.duration-T:T}function d(){e=0,n=u(l.currentTime)*(1/Dt.speed)}function c(T,M){M&&M.seek(T-M.timelineOffset)}function m(T){if(l.reversePlayback)for(var w=s;w--;)c(T,r[w]);else for(var M=0;M<s;M++)c(T,r[M])}function p(T){for(var M=0,w=l.animations,V=w.length;M<V;){var L=w[M],z=L.animatable,X=L.tweens,$=X.length-1,E=X[$];$&&(E=Uo(X,function(Oe){return T<Oe.end})[0]||E);for(var R=$n(T-E.start-E.delay,0,E.duration)/E.duration,G=isNaN(R)?1:E.easing(R),q=E.to.strings,ce=E.round,re=[],ae=E.to.numbers.length,me=void 0,ne=0;ne<ae;ne++){var Ne=void 0,ze=E.to.numbers[ne],ke=E.from.numbers[ne]||0;E.isPath?Ne=X1(E.value,G*ze,E.isPathTargetInsideSVG):Ne=ke+G*(ze-ke),ce&&(E.isColor&&ne>2||(Ne=Math.round(Ne*ce)/ce)),re.push(Ne)}var Ze=q.length;if(!Ze)me=re[0];else{me=q[0];for(var nt=0;nt<Ze;nt++){q[nt];var Se=q[nt+1],Ce=re[nt];isNaN(Ce)||(Se?me+=Ce+Se:me+=Ce+" ")}}Lm[L.type](z.target,L.property,me,z.transforms),L.currentValue=me,M++}}function y(T){l[T]&&!l.passThrough&&l[T](l)}function g(){l.remaining&&l.remaining!==!0&&l.remaining--}function h(T){var M=l.duration,w=l.delay,V=M-l.endDelay,L=u(T);l.progress=$n(L/M*100,0,100),l.reversePlayback=L<l.currentTime,r&&m(L),!l.began&&l.currentTime>0&&(l.began=!0,y("begin")),!l.loopBegan&&l.currentTime>0&&(l.loopBegan=!0,y("loopBegin")),L<=w&&l.currentTime!==0&&p(0),(L>=V&&l.currentTime!==M||!M)&&p(M),L>w&&L<V?(l.changeBegan||(l.changeBegan=!0,l.changeCompleted=!1,y("changeBegin")),y("change"),p(L)):l.changeBegan&&(l.changeCompleted=!0,l.changeBegan=!1,y("changeComplete")),l.currentTime=$n(L,0,M),l.began&&y("update"),T>=M&&(n=0,g(),l.remaining?(e=i,y("loopComplete"),l.loopBegan=!1,l.direction==="alternate"&&f()):(l.paused=!0,l.completed||(l.completed=!0,y("loopComplete"),y("complete"),!l.passThrough&&"Promise"in window&&(a(),o(l)))))}return l.reset=function(){var T=l.direction;l.passThrough=!1,l.currentTime=0,l.progress=0,l.paused=!0,l.began=!1,l.loopBegan=!1,l.changeBegan=!1,l.completed=!1,l.changeCompleted=!1,l.reversePlayback=!1,l.reversed=T==="reverse",l.remaining=l.loop,r=l.children,s=r.length;for(var M=s;M--;)l.children[M].reset();(l.reversed&&l.loop!==!0||T==="alternate"&&l.loop===1)&&l.remaining++,p(l.reversed?l.duration:0)},l._onDocumentVisibility=d,l.set=function(T,M){return Im(T,M),l},l.tick=function(T){i=T,e||(e=i),h((i+(n-e))*Dt.speed)},l.seek=function(T){h(u(T))},l.pause=function(){l.paused=!0,d()},l.play=function(){l.paused&&(l.completed&&l.reset(),l.paused=!1,On.push(l),d(),Nm())},l.reverse=function(){f(),l.completed=!l.reversed,d()},l.restart=function(){l.reset(),l.play()},l.remove=function(T){var M=Vu(T);Om(M,l)},l.reset(),l.autoplay&&l.play(),l}function Jh(t,e){for(var n=e.length;n--;)Nu(t,e[n].animatable.target)&&e.splice(n,1)}function Om(t,e){var n=e.animations,i=e.children;Jh(t,n);for(var r=i.length;r--;){var s=i[r],a=s.animations;Jh(t,a),!a.length&&!s.children.length&&i.splice(r,1)}!n.length&&!i.length&&e.pause()}function ew(t){for(var e=Vu(t),n=On.length;n--;){var i=On[n];Om(e,i)}}function tw(t,e){e===void 0&&(e={});var n=e.direction||"normal",i=e.easing?Uu(e.easing):null,r=e.grid,s=e.axis,a=e.from||0,o=a==="first",l=a==="center",f=a==="last",u=et.arr(t),d=parseFloat(u?t[0]:t),c=u?parseFloat(t[1]):0,m=Si(u?t[1]:t)||0,p=e.start||0+(u?d:0),y=[],g=0;return function(h,T,M){if(o&&(a=0),l&&(a=(M-1)/2),f&&(a=M-1),!y.length){for(var w=0;w<M;w++){if(!r)y.push(Math.abs(a-w));else{var V=l?(r[0]-1)/2:a%r[0],L=l?(r[1]-1)/2:Math.floor(a/r[0]),z=w%r[0],X=Math.floor(w/r[0]),$=V-z,E=L-X,R=Math.sqrt($*$+E*E);s==="x"&&(R=-$),s==="y"&&(R=-E),y.push(R)}g=Math.max.apply(Math,y)}i&&(y=y.map(function(q){return i(q/g)*g})),n==="reverse"&&(y=y.map(function(q){return s?q<0?q*-1:-q:Math.abs(g-q)}))}var G=u?(c-d)/g:d;return p+G*(Math.round(y[T]*100)/100)+m}}function nw(t){t===void 0&&(t={});var e=Dt(t);return e.duration=0,e.add=function(n,i){var r=On.indexOf(e),s=e.children;r>-1&&On.splice(r,1);function a(c){c.passThrough=!0}for(var o=0;o<s.length;o++)a(s[o]);var l=Oo(n,Wc(Iu,t));l.targets=l.targets||t.targets;var f=e.duration;l.autoplay=!1,l.direction=e.direction,l.timelineOffset=et.und(i)?f:ku(i,f),a(e),e.seek(l.timelineOffset);var u=Dt(l);a(u),s.push(u);var d=Um(s,t);return e.delay=d.delay,e.endDelay=d.endDelay,e.duration=d.duration,e.seek(0),e.reset(),e.autoplay&&e.play(),e},e}Dt.version="3.2.1";Dt.speed=1;Dt.suspendWhenDocumentHidden=!0;Dt.running=On;Dt.remove=ew;Dt.get=zu;Dt.set=Im;Dt.convertPx=Fu;Dt.path=W1;Dt.setDashoffset=V1;Dt.stagger=tw;Dt.timeline=nw;Dt.easing=Uu;Dt.penner=bm;Dt.random=function(t,e){return Math.floor(Math.random()*(e-t+1))+t};const iw={class:"flex flex-col"},rw={id:"hero-section",class:"w-full h-screen z-10 relative flex flex-col items-center"},sw={id:"portfolio-section",class:"w-full bg-red min-h-[100vh]"},aw={class:"flex flex-col gap-10 w-full mt-20 justify-center items-center"},ow={class:"flex flex-col gap-2 md:gap-5 md:flex-row-reverse"},lw={class:"flex-grow flex-col flex gap-2"},cw={href:"https://jtowerv2.studiomultiply.com/",target:"_blank",rel:"noopener noreferrer",class:"relative group overflow-hidden cursor-pointer"},Qh="M12 2 L12 20 L12 20 L12 20 L12 20 L12 20 Z",uw="M12 2 L12 20 L17 15 L12 20 L7 15 L12 20 Z",fw={__name:"Home",setup(t){const e=to(null);let n=null;const i=to(null);To(()=>{new pE,n=e.value.querySelector("#arrow_path"),n.setAttribute("d",Qh);const a=i.value.getContext("2d");a.fillStyle="black",a.fillRect(0,0,i.value.width,i.value.height),a.font="1.5rem 'Inter', system-ui, Avenir, Helvetica, Arial, sans-serif",a.fillStyle="white",a.textAlign="center",a.textBaseline="middle",a.fillText("Web SDK",i.value.width/2,i.value.height/2)});const r=()=>{Dt({targets:n,d:[{value:uw}],duration:500,easing:"easeInOutQuad"})},s=()=>{Dt({targets:n,d:[{value:Qh}],duration:500,easing:"easeInOutQuad"})};return(a,o)=>(Yn(),_i("div",iw,[mt("section",rw,[o[2]||(o[2]=mt("div",{id:"hero-text",class:"w-full flex-grow"},null,-1)),mt("a",{href:"#portfolio-section",onMouseover:r,onMouseleave:s,class:"flex-shrink py-2 flex flex-col cursor-pointer transition duration-300 ease-out justify-center items-center"},[o[1]||(o[1]=mt("span",null,"Portfolios",-1)),mt("span",null,[(Yn(),_i("svg",{ref_key:"arrow_wrapper",ref:e,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",class:"fill-white w-7"},o[0]||(o[0]=[mt("path",{id:"arrow_path",d:"M12 2 L12 20 L12 20 L12 20 L12 20 L12 20 Z",stroke:"currentColor","stroke-width":"2",fill:"none"},null,-1)]),512))])],32)]),mt("section",sw,[mt("div",aw,[o[7]||(o[7]=jl('<div class="py-4"><h2 class="text-2xl underline"> Portfolios </h2></div><div class="flex flex-col gap-2 md:gap-5 md:flex-row"><div class="flex-grow flex-col flex gap-2"><a target="_blank" rel="noopener noreferrer" href="https://seizethefrontline.com/" class="relative group overflow-hidden cursor-pointer"><img src="'+S1+'" alt="Gameplay Image" class="w-full h-full object-cover"><div class="absolute top-0 left-0 w-full h-full bg-tertiary bg-opacity-75 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out"></div><div class="absolute top-0 left-0 w-full h-full justify-center items-center transition-opacity duration-500 ease-out flex opacity-0 group-hover:opacity-100"><span class="text-2xl"> Eximius </span></div></a><a href="https://seizethefrontline.com/" target="_blank" rel="noopener noreferrer" class="bg-secondary hover:bg-primary focus:outline-none focus:ring-4 focus:ring-purple-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mb-2 transition duration-300 ease-out"> View More </a></div><div class="flex-shrink flex flex-col gap-2"><h3 class="text-lg underline">Eximius: Seize the Frontline</h3><span>Eximius: Seize the Frontline was my first major project and the one that launched my career in the industry. This experience not only introduced me to game development but also allowed me to collaborate with talented individuals, significantly shaping my technical expertise.</span><span>I was responsible for gameplay programming and network codes, ensuring stable and engaging gameplay across multiplayer modes. My work contributed to the smooth launch of both the <span class="font-bold">Beta</span> and <span class="font-bold">Early Access</span> versions of the game.</span></div></div><div class="flex flex-col gap-2 md:gap-5 md:flex-row-reverse"><div class="flex-grow flex-col flex gap-2"><a href="https://trinity.studiomultiply.com/" target="_blank" rel="noopener noreferrer" class="relative group overflow-hidden cursor-pointer"><img src="'+M1+'" alt="Gameplay Image" class="w-full h-full object-cover"><div class="absolute top-0 left-0 w-full h-full bg-tertiary bg-opacity-75 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out"></div><div class="absolute top-0 left-0 w-full h-full justify-center items-center transition-opacity duration-500 ease-out flex opacity-0 group-hover:opacity-100"><span class="text-2xl"> Trinity Website </span></div></a><a href="https://trinity.studiomultiply.com/" target="_blank" rel="noopener noreferrer" class="bg-secondary hover:bg-primary focus:outline-none focus:ring-4 focus:ring-purple-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mb-2 transition duration-300 ease-out"> View More </a></div><div class="flex-shrink flex flex-col gap-2"><h3 class="text-lg underline">Trinity Website</h3><span> The <span class="font-bold">Trinity Website</span> was the first architectural visualization (archviz) project I developed for a client at Studio Multiply. The goal was to create a visually compelling website that runs smoothly while integrating several advanced features. </span><span> To ensure a seamless experience across devices, I integrated Progressive Web App (PWA) capabilities. This allowed the Trinity website to function as an app on iPads and Android devices, enabling installation on all of the client&#39;s agent machines.</span><span>The website was developed using <span class="font-bold">VueJS</span> for the front-end framework, and <span class="font-bold">ThreeJS + GLSL</span> for 3D rendering and graphics.</span></div></div><div class="flex flex-col gap-2 md:gap-5 md:flex-row"><div class="flex-grow flex-col flex gap-2"><a target="_blank" rel="noopener noreferrer" href="https://drive.google.com/file/d/1x94gvfpDMluLeObR5j2l8xNVevSGNKFc/view?usp=drive_link" class="relative group overflow-hidden cursor-pointer"><img src="'+b1+'" alt="Gameplay Image" class="w-full h-full object-cover"><div class="absolute top-0 left-0 w-full h-full bg-tertiary bg-opacity-75 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out"></div><div class="absolute top-0 left-0 w-full h-full justify-center items-center transition-opacity duration-500 ease-out flex opacity-0 group-hover:opacity-100"><span class="text-2xl"> Trinity Experience Center </span></div></a><a href="https://drive.google.com/file/d/1x94gvfpDMluLeObR5j2l8xNVevSGNKFc/view?usp=drive_link" target="_blank" rel="noopener noreferrer" class="bg-secondary hover:bg-primary focus:outline-none focus:ring-4 focus:ring-purple-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mb-2 transition duration-300 ease-out"> View More </a></div><div class="flex-shrink flex flex-col gap-2"><h3 class="text-lg underline">Trinity Experience Center</h3><span> During my tenure at Studio Multiply, I worked on a complex Unreal Engine 4 project, integrating both C++ and Blueprint to achieve precise control over the system. The project faced significant challenges due to unforeseen internal issues with the client. Midway through development, our primary client contact left, resulting in multiple 180-degree shifts in project direction, which required agile adaptation and realignment of our approach. </span></div></div><div class="flex flex-col gap-2 md:gap-5 md:flex-row-reverse"><div class="flex-grow flex-col flex gap-2"><a href="https://jtowerv2.studiomultiply.com/" target="_blank" rel="noopener noreferrer" class="relative group overflow-hidden cursor-pointer"><img src="'+T1+'" alt="Gameplay Image" class="w-full h-full object-cover"><div class="absolute top-0 left-0 w-full h-full bg-tertiary bg-opacity-75 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out"></div><div class="absolute top-0 left-0 w-full h-full justify-center items-center transition-opacity duration-500 ease-out flex opacity-0 group-hover:opacity-100"><span class="text-2xl"> JTower RND Project </span></div></a><a href="https://jtowerv2.studiomultiply.com/" target="_blank" rel="noopener noreferrer" class="bg-secondary hover:bg-primary focus:outline-none focus:ring-4 focus:ring-purple-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mb-2 transition duration-300 ease-out"> View More </a></div><div class="flex-shrink flex flex-col gap-2"><h3 class="text-lg underline">JTower RND Project</h3><span> After completing the Trinity Website project, the management saw potential in the web-based approach and requested a new website to serve as a <span class="font-bold">Demo Application for an Archviz Sales Kit</span>. This project aimed to showcase key features and interactive elements to clients. </span><span> To ensure a seamless experience across devices, I integrated Progressive Web App (PWA) capabilities. This allowed the Trinity website to function as an app on iPads and Android devices, enabling installation on all of the client&#39;s agent machines.</span><span>The website was developed using <span class="font-bold">VueJS</span> for the front-end framework, and <span class="font-bold">ThreeJS + GLSL</span> for 3D rendering and graphics.</span></div></div><div class="flex flex-col gap-2 md:gap-5 md:flex-row"><div class="flex-grow flex-col flex gap-2"><a target="_blank" rel="noopener noreferrer" href="https://drive.google.com/file/d/11idBt2OZwwaRh1hiHc0Q2YA4fZrBLhrB/preview" class="relative group overflow-hidden cursor-pointer"><img src="'+E1+'" alt="Gameplay Image" class="w-full h-full object-cover"><div class="absolute top-0 left-0 w-full h-full bg-tertiary bg-opacity-75 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out"></div><div class="absolute top-0 left-0 w-full h-full justify-center items-center transition-opacity duration-500 ease-out flex opacity-0 group-hover:opacity-100"><span class="text-2xl"> Diian </span></div></a><a href="https://drive.google.com/file/d/11idBt2OZwwaRh1hiHc0Q2YA4fZrBLhrB/preview" target="_blank" rel="noopener noreferrer" class="bg-secondary hover:bg-primary focus:outline-none focus:ring-4 focus:ring-purple-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mb-2 transition duration-300 ease-out"> View More </a></div><div class="flex-shrink flex flex-col gap-2"><h3 class="text-lg underline">Diian</h3><span> This project was a significant milestone, developed during Unreal Engine 5’s Early Access phase. As a developer with a passion for new technologies, I saw the potential of <span class="font-bold">Unreal Engine 5</span> and its powerful features, <span class="font-bold">Nanite</span> and <span class="font-bold">Lumen</span>. Without hesitation, I chose UE5 to build this project, embracing its advanced capabilities to push the boundaries of real-time rendering. </span></div></div>',6)),mt("div",ow,[mt("div",lw,[mt("a",cw,[mt("canvas",{ref_key:"webSdkRef",ref:i,class:"w-92 h-72"},null,512),o[3]||(o[3]=mt("div",{class:"absolute top-0 left-0 w-full h-full bg-tertiary bg-opacity-75 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out"},null,-1)),o[4]||(o[4]=mt("div",{class:"absolute top-0 left-0 w-full h-full justify-center items-center transition-opacity duration-500 ease-out flex opacity-0 group-hover:opacity-100"},[mt("span",{class:"text-2xl"}," WebSDK ")],-1))]),o[5]||(o[5]=mt("a",{href:"https://jtowerv2.studiomultiply.com/",target:"_blank",rel:"noopener noreferrer",class:"bg-secondary hover:bg-primary focus:outline-none focus:ring-4 focus:ring-purple-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mb-2 transition duration-300 ease-out"}," View More ",-1))]),o[6]||(o[6]=mt("div",{class:"flex-shrink flex flex-col gap-2"},[mt("h3",{class:"text-lg underline"},"WebSDK"),mt("span",null,[Xi(" Due to the limitations in Unreal Engine’s built-in "),mt("span",{class:"font-bold"},"Chromium Embedded Framework (CEF) integration"),Xi(", we undertook the development of a custom solution. Unreal Engine’s default CEF implementation was outdated, lacking crucial features that impacted our web applications' performance. ")])],-1))]),o[8]||(o[8]=jl('<div class="flex flex-col gap-2 md:gap-5 md:flex-row"><div class="flex-grow flex-col flex gap-2"><a target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/embed/5MYl_ErYXzQ?si=IYm8XOaoTZUiw1Fg" class="relative group overflow-hidden cursor-pointer"><img src="'+w1+'" alt="Gameplay Image" class="w-full h-full object-cover"><div class="absolute top-0 left-0 w-full h-full bg-tertiary bg-opacity-75 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out"></div><div class="absolute top-0 left-0 w-full h-full justify-center items-center transition-opacity duration-500 ease-out flex opacity-0 group-hover:opacity-100"><span class="text-2xl"> KAEC </span></div></a><a href="https://www.youtube.com/embed/5MYl_ErYXzQ?si=IYm8XOaoTZUiw1Fg" target="_blank" rel="noopener noreferrer" class="bg-secondary hover:bg-primary focus:outline-none focus:ring-4 focus:ring-purple-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mb-2 transition duration-300 ease-out"> View More </a></div><div class="flex-shrink flex flex-col gap-2"><h3 class="text-lg underline">KAEC</h3><span> In collaboration with <span class="font-bold">McKinsey</span>, I worked on a <span class="font-bold">proof-of-concept (POC) project</span> aimed at assisting the government in monitoring illegal construction activities. The project’s primary objective was to detect unauthorized building projects that were either constructed without a permit or exceeded their permitted boundaries. </span></div></div><div class="flex flex-col gap-2 md:gap-5 md:flex-row-reverse"><div class="flex-grow flex-col flex gap-2"><a href="https://www.youtube.com/embed/2NsiWy6IQq4?si=KqnjA8Tz6orWdlvA" target="_blank" rel="noopener noreferrer" class="relative group overflow-hidden cursor-pointer"><img src="'+A1+'" alt="Gameplay Image" class="w-full h-full object-cover"><div class="absolute top-0 left-0 w-full h-full bg-tertiary bg-opacity-75 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out"></div><div class="absolute top-0 left-0 w-full h-full justify-center items-center transition-opacity duration-500 ease-out flex opacity-0 group-hover:opacity-100"><span class="text-2xl"> FoxConn </span></div></a><a href="https://www.youtube.com/embed/2NsiWy6IQq4?si=KqnjA8Tz6orWdlvA" target="_blank" rel="noopener noreferrer" class="bg-secondary hover:bg-primary focus:outline-none focus:ring-4 focus:ring-purple-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mb-2 transition duration-300 ease-out"> View More </a></div><div class="flex-shrink flex flex-col gap-2"><h3 class="text-lg underline">FoxConn</h3><span> I contributed to <span class="font-bold">Foxconn’s Integrated Operations Center (IOC)</span> project, which was designed to enhance factory monitoring and automation by leveraging real-time data and AI-based detection. </span></div></div><div class="flex flex-col gap-2 md:gap-5 md:flex-row"><div class="flex-grow flex-col flex gap-2"><a target="_blank" rel="noopener noreferrer" href="https://drive.google.com/file/d/1mYP9Fls3xYd7hLpwbxB-eEZNwpAi839N/preview" class="relative group overflow-hidden cursor-pointer"><img src="'+C1+'" alt="Gameplay Image" class="w-full h-full object-cover"><div class="absolute top-0 left-0 w-full h-full bg-tertiary bg-opacity-75 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out"></div><div class="absolute top-0 left-0 w-full h-full justify-center items-center transition-opacity duration-500 ease-out flex opacity-0 group-hover:opacity-100"><span class="text-2xl"> Geographic Information System (GIS) </span></div></a><a href="https://drive.google.com/file/d/1mYP9Fls3xYd7hLpwbxB-eEZNwpAi839N/preview" target="_blank" rel="noopener noreferrer" class="bg-secondary hover:bg-primary focus:outline-none focus:ring-4 focus:ring-purple-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mb-2 transition duration-300 ease-out"> View More </a></div><div class="flex-shrink flex flex-col gap-2"><h3 class="text-lg underline">Geographic Information System (GIS)</h3><span> I developed a high-performance <span class="font-bold">Geographic Information System (GIS) application</span> that combined efficient geospatial processing with real-time 3D visualization. The project was built using <span class="font-bold">C++</span> for backend processing and <span class="font-bold">Unreal Engine</span> for rendering, focusing on performance, scalability, and modularity. </span></div></div>',3))])])]))}},hw="/YangPortfolioPublic/assets/MyIcon-BuHmBPjZ.png",dw={};function pw(t,e){return Yn(),_i("section",null,e[0]||(e[0]=[jl('<div class="mt-20 grid-cols-2 grid min-h-[60vh]"><div class="flex flex-col gap-8 h-full justify-center col-span-2 lg:col-span-1 md:col-span-2 py-10"><div class="text-6xl"><h2>Hi there! I am</h2><h2 class="text-secondary">Wei Yang.</h2></div><div class="flex flex-col gap-2 text-lg"><span> I am a versatile programmer specializing in C++ and 3D development, with a passion for graphics and visual effects. My journey began as a C++ gameplay programmer using Unreal Engine to develop a multiplayer game. </span><span> Since then, I have delved into shader programming and explored various aspects of graphics technology. Working with several small companies has honed my ability to quickly learn and adapt to new technologies, equipping me with a broad and diverse skill set. </span></div></div><div class="lg:flex justify-center items-center lg:block hidden h-full"><img src="'+hw+'" alt="Wei Yang&#39;s Icon"></div></div><div class="mt-8"><h2 class="text-4xl mb-6">Professional Experience</h2><div class="flex flex-col md:flex-row gap-4 mb-6"><div class="w-full md:w-64 flex flex-col gap-1"><span class="text-primary">Senior Software Engineer</span><div><span class="text-secondary">Vizzio Technologies Pte Ltd</span><span> | Singapore</span></div><span>June 2023 - Present</span></div><div class="w-full md:flex-auto"><ul class="list-disc pl-5"><li><span class="text-primary">GIS Development (C++)</span>: Led the development of performance-driven geographic information systems (GIS) with a focus on scalability. </li><li><span class="text-primary">Web View SDK on Unreal Engine (C++, TypeScript)</span>: Integrated web-based views within Unreal Engine for seamless interaction between 3D environments and web content. </li><li><span class="text-primary">Project Support (Blueprint and C++)</span>: Contributed to various projects, ensuring optimized performance using Unreal Engine’s Blueprint system and C++. </li><li><span class="text-primary">Collaboration with McKinsey</span>: Worked on a strategic project for Saudi Arabia, collaborating with McKinsey to solve complex problems. </li><li><span class="text-primary">Licensing System Setup (C++ and C#)</span>: Developed and maintained a licensing system for streamlined software access control. </li><li><span class="text-primary">JavaScript Encryption with WASM</span>: Implemented secure encryption processes using WebAssembly (WASM) to protect sensitive web data. </li><li><span class="text-primary">3D Tile Streaming Server (Linux, C++, TCP)</span>: Developing a 3D tile streaming server using C++ and TCP on Linux for high-performance data transmission. </li></ul></div></div><div class="flex flex-col md:flex-row gap-4 mb-6"><div class="w-full md:w-64 flex flex-col gap-1"><span class="text-primary">Lead Engineer</span><div><span class="text-secondary">Weike Gaming Technology</span><span> | Singapore</span></div><span>August 2022 - June 2023</span></div><div class="w-full md:flex-auto"><ul class="list-disc pl-5"><li> Led engineering efforts for gaming solutions, contributing to various aspects of software development from core logic to user interface. </li><li> Managed team deliverables and ensured code quality across projects. </li></ul></div></div><div class="flex flex-col md:flex-row gap-4 mb-6"><div class="w-full md:w-64 flex flex-col gap-1"><span class="text-primary">Lead Application Developer</span><div><span class="text-secondary">Multiply Studio Sdn Bhd</span><span> | Malaysia</span></div><span>April 2021 - August 2022</span></div><div class="w-full md:flex-auto"><ul class="list-disc pl-5"><li> Spearheaded application development for high-traffic consumer platforms. </li><li> Managed technical aspects of product delivery and ensured cross-platform consistency. </li></ul></div></div><div class="flex flex-col md:flex-row gap-4 mb-6"><div class="w-full md:w-64 flex flex-col gap-1"><span class="text-primary">Application Developer</span><div><span class="text-secondary">Eco World Development Group Berhad</span><span> | Malaysia</span></div><span>July 2019 - July 2020</span></div><div class="w-full md:flex-auto"><ul class="list-disc pl-5"><li> Contributed to application development for various internal and consumer-facing applications. </li><li> Enhanced UI/UX designs and integrated backend systems. </li></ul></div></div><div class="flex flex-col md:flex-row gap-4 mb-6"><div class="w-full md:w-64 flex flex-col gap-1"><span class="text-primary">Game Programmer</span><div><span class="text-secondary">Ammobox Studios</span><span> | Malaysia</span></div><span>January 2018 - February 2019</span></div><div class="w-full md:flex-auto"><ul class="list-disc pl-5"><li> Improved maintainability and performance by refactoring legacy code. </li><li> Developed new features and systems, including weapon and objective systems. </li><li> Handled networking code for multiplayer functionality using UDP Protocol. </li><li> Utilized Unreal Engine 4’s Blueprint system to create game mechanics and interactions. </li></ul></div></div><div class="flex flex-col md:flex-row gap-4"><div class="w-full md:w-64 flex flex-col gap-1"><span class="text-primary">QA Programmer</span><div><span class="text-secondary">Centre for Content Creation</span><span> | Malaysia</span></div><span>January 2016 - May 2016</span></div><div class="w-full md:flex-auto"><ul class="list-disc pl-5"><li> Worked on <em>Starfall Catalyst</em>, identifying and fixing bugs in Unity3D (C#). </li><li> Improved overall game stability and performance through diligent QA processes. </li></ul></div></div></div><div class="mt-8"><h2 class="text-4xl mb-6">Education</h2><div class="flex flex-col md:flex-row gap-4 mb-6"><div class="w-full md:w-64 flex flex-col gap-1"><span class="text-primary">Bachelor&#39;s Degree in Computer Games and Programming Skills</span><div><span class="text-secondary">Limkokwing University of Creative Technology</span><span> | Malaysia</span></div><span>2015 - 2017</span></div><div class="w-full md:flex-auto"><p> Completed a comprehensive program focused on game development and programming skills, covering topics such as game design, C++ programming, and 3D modeling. </p></div></div><div class="flex flex-col md:flex-row gap-4"><div class="w-full md:w-64 flex flex-col gap-1"><span class="text-primary">Foundation Degree in Information Technology</span><div><span class="text-secondary">Limkokwing University of Creative Technology</span><span> | Malaysia</span></div><span>2014</span></div><div class="w-full md:flex-auto"><p> Gained foundational knowledge in Information Technology, including basic programming, database management, and IT systems. </p></div></div></div><footer class="flex gap-4 mt-8"><a href="https://www.linkedin.com/in/tan-wei-yang-396305179/" target="_blank" rel="noopener noreferrer"><svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-gray-500 transition duration-300 ease-out hover:text-blue-700" fill="currentColor" viewBox="0 0 448 512"><path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"></path></svg></a><a href="https://github.com/renkin4" target="_blank" rel="noopener noreferrer"><svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-gray-500 transition duration-300 ease-out hover:text-black" fill="currentColor" viewBox="0 0 496 512"><path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path></svg></a></footer>',4)]))}const mw=pu(dw,[["render",pw]]),_w={};function gw(t,e){const n=lu("router-link");return Yn(),_i("div",null,[e[1]||(e[1]=mt("h1",null,"404 - Page Not Found",-1)),e[2]||(e[2]=mt("p",null,"The page you're looking for doesn't exist.",-1)),It(n,{to:"/"},{default:xr(()=>e[0]||(e[0]=[Xi("Go back to Home")])),_:1})])}const vw=pu(_w,[["render",gw]]),xw=[{path:"/",name:"Home",component:fw},{path:"/about",name:"About",component:mw},{path:"/:pathMatch(.*)*",name:"NotFound",component:vw,beforeEnter:(t,e,n)=>{t.path.startsWith("/docs")?window.location.href=t.fullPath:n()}}],yw=x1({history:$E("/YangPortfolioPublic"),routes:xw});g0(vE).use(yw).mount("#app")});export default Sw();
