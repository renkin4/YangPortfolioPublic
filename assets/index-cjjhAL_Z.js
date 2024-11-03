var qm=(t,e)=>()=>(e||t((e={exports:{}}).exports,e),e.exports);var Hw=qm((Gw,Zc)=>{(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();/**
* @vue/shared v3.5.12
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function Jc(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const At={},ns=[],Jn=()=>{},Ym=()=>!1,go=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),Qc=t=>t.startsWith("onUpdate:"),zt=Object.assign,eu=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},$m=Object.prototype.hasOwnProperty,vt=(t,e)=>$m.call(t,e),it=Array.isArray,is=t=>vo(t)==="[object Map]",nd=t=>vo(t)==="[object Set]",at=t=>typeof t=="function",Bt=t=>typeof t=="string",Ji=t=>typeof t=="symbol",Rt=t=>t!==null&&typeof t=="object",id=t=>(Rt(t)||at(t))&&at(t.then)&&at(t.catch),rd=Object.prototype.toString,vo=t=>rd.call(t),Km=t=>vo(t).slice(8,-1),sd=t=>vo(t)==="[object Object]",tu=t=>Bt(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,ks=Jc(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),xo=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},Zm=/-(\w)/g,Ln=xo(t=>t.replace(Zm,(e,n)=>n?n.toUpperCase():"")),Jm=/\B([A-Z])/g,Ur=xo(t=>t.replace(Jm,"-$1").toLowerCase()),yo=xo(t=>t.charAt(0).toUpperCase()+t.slice(1)),Go=xo(t=>t?`on${yo(t)}`:""),Xi=(t,e)=>!Object.is(t,e),Wo=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},ad=(t,e,n,i=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:i,value:n})},Qm=t=>{const e=parseFloat(t);return isNaN(e)?t:e},e_=t=>{const e=Bt(t)?Number(t):NaN;return isNaN(e)?t:e};let Xu;const So=()=>Xu||(Xu=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function nu(t){if(it(t)){const e={};for(let n=0;n<t.length;n++){const i=t[n],r=Bt(i)?r_(i):nu(i);if(r)for(const s in r)e[s]=r[s]}return e}else if(Bt(t)||Rt(t))return t}const t_=/;(?![^(]*\))/g,n_=/:([^]+)/,i_=/\/\*[^]*?\*\//g;function r_(t){const e={};return t.replace(i_,"").split(t_).forEach(n=>{if(n){const i=n.split(n_);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function Mo(t){let e="";if(Bt(t))e=t;else if(it(t))for(let n=0;n<t.length;n++){const i=Mo(t[n]);i&&(e+=i+" ")}else if(Rt(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const s_="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",a_=Jc(s_);function od(t){return!!t||t===""}const ld=t=>!!(t&&t.__v_isRef===!0),zl=t=>Bt(t)?t:t==null?"":it(t)||Rt(t)&&(t.toString===rd||!at(t.toString))?ld(t)?zl(t.value):JSON.stringify(t,cd,2):String(t),cd=(t,e)=>ld(e)?cd(t,e.value):is(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[i,r],s)=>(n[Xo(i,s)+" =>"]=r,n),{})}:nd(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>Xo(n))}:Ji(e)?Xo(e):Rt(e)&&!it(e)&&!sd(e)?String(e):e,Xo=(t,e="")=>{var n;return Ji(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.5.12
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Mn;class o_{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=Mn,!e&&Mn&&(this.index=(Mn.scopes||(Mn.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].pause();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].resume();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].resume()}}run(e){if(this._active){const n=Mn;try{return Mn=this,e()}finally{Mn=n}}}on(){Mn=this}off(){Mn=this.parent}stop(e){if(this._active){let n,i;for(n=0,i=this.effects.length;n<i;n++)this.effects[n].stop();for(n=0,i=this.cleanups.length;n<i;n++)this.cleanups[n]();if(this.scopes)for(n=0,i=this.scopes.length;n<i;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0,this._active=!1}}}function l_(){return Mn}let wt;const jo=new WeakSet;class ud{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Mn&&Mn.active&&Mn.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,jo.has(this)&&(jo.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||hd(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,ju(this),dd(this);const e=wt,n=Vn;wt=this,Vn=!0;try{return this.fn()}finally{pd(this),wt=e,Vn=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)su(e);this.deps=this.depsTail=void 0,ju(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?jo.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Hl(this)&&this.run()}get dirty(){return Hl(this)}}let fd=0,zs,Hs;function hd(t,e=!1){if(t.flags|=8,e){t.next=Hs,Hs=t;return}t.next=zs,zs=t}function iu(){fd++}function ru(){if(--fd>0)return;if(Hs){let e=Hs;for(Hs=void 0;e;){const n=e.next;e.next=void 0,e.flags&=-9,e=n}}let t;for(;zs;){let e=zs;for(zs=void 0;e;){const n=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(i){t||(t=i)}e=n}}if(t)throw t}function dd(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function pd(t){let e,n=t.depsTail,i=n;for(;i;){const r=i.prevDep;i.version===-1?(i===n&&(n=r),su(i),c_(i)):e=i,i.dep.activeLink=i.prevActiveLink,i.prevActiveLink=void 0,i=r}t.deps=e,t.depsTail=n}function Hl(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(md(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function md(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===Ys))return;t.globalVersion=Ys;const e=t.dep;if(t.flags|=2,e.version>0&&!t.isSSR&&t.deps&&!Hl(t)){t.flags&=-3;return}const n=wt,i=Vn;wt=t,Vn=!0;try{dd(t);const r=t.fn(t._value);(e.version===0||Xi(r,t._value))&&(t._value=r,e.version++)}catch(r){throw e.version++,r}finally{wt=n,Vn=i,pd(t),t.flags&=-3}}function su(t,e=!1){const{dep:n,prevSub:i,nextSub:r}=t;if(i&&(i.nextSub=r,t.prevSub=void 0),r&&(r.prevSub=i,t.nextSub=void 0),n.subs===t&&(n.subs=i,!i&&n.computed)){n.computed.flags&=-5;for(let s=n.computed.deps;s;s=s.nextDep)su(s,!0)}!e&&!--n.sc&&n.map&&n.map.delete(n.key)}function c_(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let Vn=!0;const _d=[];function Qi(){_d.push(Vn),Vn=!1}function er(){const t=_d.pop();Vn=t===void 0?!0:t}function ju(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=wt;wt=void 0;try{e()}finally{wt=n}}}let Ys=0;class u_{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class au{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0}track(e){if(!wt||!Vn||wt===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==wt)n=this.activeLink=new u_(wt,this),wt.deps?(n.prevDep=wt.depsTail,wt.depsTail.nextDep=n,wt.depsTail=n):wt.deps=wt.depsTail=n,gd(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const i=n.nextDep;i.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=i),n.prevDep=wt.depsTail,n.nextDep=void 0,wt.depsTail.nextDep=n,wt.depsTail=n,wt.deps===n&&(wt.deps=i)}return n}trigger(e){this.version++,Ys++,this.notify(e)}notify(e){iu();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{ru()}}}function gd(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let i=e.deps;i;i=i.nextDep)gd(i)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const Vl=new WeakMap,wr=Symbol(""),Gl=Symbol(""),$s=Symbol("");function nn(t,e,n){if(Vn&&wt){let i=Vl.get(t);i||Vl.set(t,i=new Map);let r=i.get(n);r||(i.set(n,r=new au),r.map=i,r.key=n),r.track()}}function mi(t,e,n,i,r,s){const a=Vl.get(t);if(!a){Ys++;return}const o=l=>{l&&l.trigger()};if(iu(),e==="clear")a.forEach(o);else{const l=it(t),u=l&&tu(n);if(l&&n==="length"){const f=Number(i);a.forEach((d,c)=>{(c==="length"||c===$s||!Ji(c)&&c>=f)&&o(d)})}else switch((n!==void 0||a.has(void 0))&&o(a.get(n)),u&&o(a.get($s)),e){case"add":l?u&&o(a.get("length")):(o(a.get(wr)),is(t)&&o(a.get(Gl)));break;case"delete":l||(o(a.get(wr)),is(t)&&o(a.get(Gl)));break;case"set":is(t)&&o(a.get(wr));break}}ru()}function Nr(t){const e=gt(t);return e===t?e:(nn(e,"iterate",$s),Dn(t)?e:e.map(rn))}function bo(t){return nn(t=gt(t),"iterate",$s),t}const f_={__proto__:null,[Symbol.iterator](){return qo(this,Symbol.iterator,rn)},concat(...t){return Nr(this).concat(...t.map(e=>it(e)?Nr(e):e))},entries(){return qo(this,"entries",t=>(t[1]=rn(t[1]),t))},every(t,e){return ai(this,"every",t,e,void 0,arguments)},filter(t,e){return ai(this,"filter",t,e,n=>n.map(rn),arguments)},find(t,e){return ai(this,"find",t,e,rn,arguments)},findIndex(t,e){return ai(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return ai(this,"findLast",t,e,rn,arguments)},findLastIndex(t,e){return ai(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return ai(this,"forEach",t,e,void 0,arguments)},includes(...t){return Yo(this,"includes",t)},indexOf(...t){return Yo(this,"indexOf",t)},join(t){return Nr(this).join(t)},lastIndexOf(...t){return Yo(this,"lastIndexOf",t)},map(t,e){return ai(this,"map",t,e,void 0,arguments)},pop(){return As(this,"pop")},push(...t){return As(this,"push",t)},reduce(t,...e){return qu(this,"reduce",t,e)},reduceRight(t,...e){return qu(this,"reduceRight",t,e)},shift(){return As(this,"shift")},some(t,e){return ai(this,"some",t,e,void 0,arguments)},splice(...t){return As(this,"splice",t)},toReversed(){return Nr(this).toReversed()},toSorted(t){return Nr(this).toSorted(t)},toSpliced(...t){return Nr(this).toSpliced(...t)},unshift(...t){return As(this,"unshift",t)},values(){return qo(this,"values",rn)}};function qo(t,e,n){const i=bo(t),r=i[e]();return i!==t&&!Dn(t)&&(r._next=r.next,r.next=()=>{const s=r._next();return s.value&&(s.value=n(s.value)),s}),r}const h_=Array.prototype;function ai(t,e,n,i,r,s){const a=bo(t),o=a!==t&&!Dn(t),l=a[e];if(l!==h_[e]){const d=l.apply(t,s);return o?rn(d):d}let u=n;a!==t&&(o?u=function(d,c){return n.call(this,rn(d),c,t)}:n.length>2&&(u=function(d,c){return n.call(this,d,c,t)}));const f=l.call(a,u,i);return o&&r?r(f):f}function qu(t,e,n,i){const r=bo(t);let s=n;return r!==t&&(Dn(t)?n.length>3&&(s=function(a,o,l){return n.call(this,a,o,l,t)}):s=function(a,o,l){return n.call(this,a,rn(o),l,t)}),r[e](s,...i)}function Yo(t,e,n){const i=gt(t);nn(i,"iterate",$s);const r=i[e](...n);return(r===-1||r===!1)&&cu(n[0])?(n[0]=gt(n[0]),i[e](...n)):r}function As(t,e,n=[]){Qi(),iu();const i=gt(t)[e].apply(t,n);return ru(),er(),i}const d_=Jc("__proto__,__v_isRef,__isVue"),vd=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Ji));function p_(t){Ji(t)||(t=String(t));const e=gt(this);return nn(e,"has",t),e.hasOwnProperty(t)}class xd{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,i){const r=this._isReadonly,s=this._isShallow;if(n==="__v_isReactive")return!r;if(n==="__v_isReadonly")return r;if(n==="__v_isShallow")return s;if(n==="__v_raw")return i===(r?s?T_:bd:s?Md:Sd).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(i)?e:void 0;const a=it(e);if(!r){let l;if(a&&(l=f_[n]))return l;if(n==="hasOwnProperty")return p_}const o=Reflect.get(e,n,an(e)?e:i);return(Ji(n)?vd.has(n):d_(n))||(r||nn(e,"get",n),s)?o:an(o)?a&&tu(n)?o:o.value:Rt(o)?r?Ed(o):To(o):o}}class yd extends xd{constructor(e=!1){super(!1,e)}set(e,n,i,r){let s=e[n];if(!this._isShallow){const l=Pr(s);if(!Dn(i)&&!Pr(i)&&(s=gt(s),i=gt(i)),!it(e)&&an(s)&&!an(i))return l?!1:(s.value=i,!0)}const a=it(e)&&tu(n)?Number(n)<e.length:vt(e,n),o=Reflect.set(e,n,i,an(e)?e:r);return e===gt(r)&&(a?Xi(i,s)&&mi(e,"set",n,i):mi(e,"add",n,i)),o}deleteProperty(e,n){const i=vt(e,n);e[n];const r=Reflect.deleteProperty(e,n);return r&&i&&mi(e,"delete",n,void 0),r}has(e,n){const i=Reflect.has(e,n);return(!Ji(n)||!vd.has(n))&&nn(e,"has",n),i}ownKeys(e){return nn(e,"iterate",it(e)?"length":wr),Reflect.ownKeys(e)}}class m_ extends xd{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const __=new yd,g_=new m_,v_=new yd(!0),Wl=t=>t,_a=t=>Reflect.getPrototypeOf(t);function x_(t,e,n){return function(...i){const r=this.__v_raw,s=gt(r),a=is(s),o=t==="entries"||t===Symbol.iterator&&a,l=t==="keys"&&a,u=r[t](...i),f=n?Wl:e?Xl:rn;return!e&&nn(s,"iterate",l?Gl:wr),{next(){const{value:d,done:c}=u.next();return c?{value:d,done:c}:{value:o?[f(d[0]),f(d[1])]:f(d),done:c}},[Symbol.iterator](){return this}}}}function ga(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function y_(t,e){const n={get(r){const s=this.__v_raw,a=gt(s),o=gt(r);t||(Xi(r,o)&&nn(a,"get",r),nn(a,"get",o));const{has:l}=_a(a),u=e?Wl:t?Xl:rn;if(l.call(a,r))return u(s.get(r));if(l.call(a,o))return u(s.get(o));s!==a&&s.get(r)},get size(){const r=this.__v_raw;return!t&&nn(gt(r),"iterate",wr),Reflect.get(r,"size",r)},has(r){const s=this.__v_raw,a=gt(s),o=gt(r);return t||(Xi(r,o)&&nn(a,"has",r),nn(a,"has",o)),r===o?s.has(r):s.has(r)||s.has(o)},forEach(r,s){const a=this,o=a.__v_raw,l=gt(o),u=e?Wl:t?Xl:rn;return!t&&nn(l,"iterate",wr),o.forEach((f,d)=>r.call(s,u(f),u(d),a))}};return zt(n,t?{add:ga("add"),set:ga("set"),delete:ga("delete"),clear:ga("clear")}:{add(r){!e&&!Dn(r)&&!Pr(r)&&(r=gt(r));const s=gt(this);return _a(s).has.call(s,r)||(s.add(r),mi(s,"add",r,r)),this},set(r,s){!e&&!Dn(s)&&!Pr(s)&&(s=gt(s));const a=gt(this),{has:o,get:l}=_a(a);let u=o.call(a,r);u||(r=gt(r),u=o.call(a,r));const f=l.call(a,r);return a.set(r,s),u?Xi(s,f)&&mi(a,"set",r,s):mi(a,"add",r,s),this},delete(r){const s=gt(this),{has:a,get:o}=_a(s);let l=a.call(s,r);l||(r=gt(r),l=a.call(s,r)),o&&o.call(s,r);const u=s.delete(r);return l&&mi(s,"delete",r,void 0),u},clear(){const r=gt(this),s=r.size!==0,a=r.clear();return s&&mi(r,"clear",void 0,void 0),a}}),["keys","values","entries",Symbol.iterator].forEach(r=>{n[r]=x_(r,t,e)}),n}function ou(t,e){const n=y_(t,e);return(i,r,s)=>r==="__v_isReactive"?!t:r==="__v_isReadonly"?t:r==="__v_raw"?i:Reflect.get(vt(n,r)&&r in i?n:i,r,s)}const S_={get:ou(!1,!1)},M_={get:ou(!1,!0)},b_={get:ou(!0,!1)},Sd=new WeakMap,Md=new WeakMap,bd=new WeakMap,T_=new WeakMap;function E_(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function w_(t){return t.__v_skip||!Object.isExtensible(t)?0:E_(Km(t))}function To(t){return Pr(t)?t:lu(t,!1,__,S_,Sd)}function Td(t){return lu(t,!1,v_,M_,Md)}function Ed(t){return lu(t,!0,g_,b_,bd)}function lu(t,e,n,i,r){if(!Rt(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const s=r.get(t);if(s)return s;const a=w_(t);if(a===0)return t;const o=new Proxy(t,a===2?i:n);return r.set(t,o),o}function rs(t){return Pr(t)?rs(t.__v_raw):!!(t&&t.__v_isReactive)}function Pr(t){return!!(t&&t.__v_isReadonly)}function Dn(t){return!!(t&&t.__v_isShallow)}function cu(t){return t?!!t.__v_raw:!1}function gt(t){const e=t&&t.__v_raw;return e?gt(e):t}function A_(t){return!vt(t,"__v_skip")&&Object.isExtensible(t)&&ad(t,"__v_skip",!0),t}const rn=t=>Rt(t)?To(t):t,Xl=t=>Rt(t)?Ed(t):t;function an(t){return t?t.__v_isRef===!0:!1}function Dr(t){return wd(t,!1)}function C_(t){return wd(t,!0)}function wd(t,e){return an(t)?t:new R_(t,e)}class R_{constructor(e,n){this.dep=new au,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:gt(e),this._value=n?e:rn(e),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(e){const n=this._rawValue,i=this.__v_isShallow||Dn(e)||Pr(e);e=i?e:gt(e),Xi(e,n)&&(this._rawValue=e,this._value=i?e:rn(e),this.dep.trigger())}}function ji(t){return an(t)?t.value:t}const P_={get:(t,e,n)=>e==="__v_raw"?t:ji(Reflect.get(t,e,n)),set:(t,e,n,i)=>{const r=t[e];return an(r)&&!an(n)?(r.value=n,!0):Reflect.set(t,e,n,i)}};function Ad(t){return rs(t)?t:new Proxy(t,P_)}class D_{constructor(e,n,i){this.fn=e,this.setter=n,this._value=void 0,this.dep=new au(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Ys-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=i}notify(){if(this.flags|=16,!(this.flags&8)&&wt!==this)return hd(this,!0),!0}get value(){const e=this.dep.track();return md(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function L_(t,e,n=!1){let i,r;return at(t)?i=t:(i=t.get,r=t.set),new D_(i,r,n)}const va={},ro=new WeakMap;let mr;function I_(t,e=!1,n=mr){if(n){let i=ro.get(n);i||ro.set(n,i=[]),i.push(t)}}function U_(t,e,n=At){const{immediate:i,deep:r,once:s,scheduler:a,augmentJob:o,call:l}=n,u=A=>r?A:Dn(A)||r===!1||r===0?Vi(A,1):Vi(A);let f,d,c,m,p=!1,x=!1;if(an(t)?(d=()=>t.value,p=Dn(t)):rs(t)?(d=()=>u(t),p=!0):it(t)?(x=!0,p=t.some(A=>rs(A)||Dn(A)),d=()=>t.map(A=>{if(an(A))return A.value;if(rs(A))return u(A);if(at(A))return l?l(A,2):A()})):at(t)?e?d=l?()=>l(t,2):t:d=()=>{if(c){Qi();try{c()}finally{er()}}const A=mr;mr=f;try{return l?l(t,3,[m]):t(m)}finally{mr=A}}:d=Jn,e&&r){const A=d,G=r===!0?1/0:r;d=()=>Vi(A(),G)}const _=l_(),h=()=>{f.stop(),_&&eu(_.effects,f)};if(s&&e){const A=e;e=(...G)=>{A(...G),h()}}let b=x?new Array(t.length).fill(va):va;const M=A=>{if(!(!(f.flags&1)||!f.dirty&&!A))if(e){const G=f.run();if(r||p||(x?G.some((L,B)=>Xi(L,b[B])):Xi(G,b))){c&&c();const L=mr;mr=f;try{const B=[G,b===va?void 0:x&&b[0]===va?[]:b,m];l?l(e,3,B):e(...B),b=G}finally{mr=L}}}else f.run()};return o&&o(M),f=new ud(d),f.scheduler=a?()=>a(M,!1):M,m=A=>I_(A,!1,f),c=f.onStop=()=>{const A=ro.get(f);if(A){if(l)l(A,4);else for(const G of A)G();ro.delete(f)}},e?i?M(!0):b=f.run():a?a(M.bind(null,!0),!0):f.run(),h.pause=f.pause.bind(f),h.resume=f.resume.bind(f),h.stop=h,h}function Vi(t,e=1/0,n){if(e<=0||!Rt(t)||t.__v_skip||(n=n||new Set,n.has(t)))return t;if(n.add(t),e--,an(t))Vi(t.value,e,n);else if(it(t))for(let i=0;i<t.length;i++)Vi(t[i],e,n);else if(nd(t)||is(t))t.forEach(i=>{Vi(i,e,n)});else if(sd(t)){for(const i in t)Vi(t[i],e,n);for(const i of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,i)&&Vi(t[i],e,n)}return t}/**
* @vue/runtime-core v3.5.12
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function sa(t,e,n,i){try{return i?t(...i):t()}catch(r){Eo(r,e,n)}}function Gn(t,e,n,i){if(at(t)){const r=sa(t,e,n,i);return r&&id(r)&&r.catch(s=>{Eo(s,e,n)}),r}if(it(t)){const r=[];for(let s=0;s<t.length;s++)r.push(Gn(t[s],e,n,i));return r}}function Eo(t,e,n,i=!0){const r=e?e.vnode:null,{errorHandler:s,throwUnhandledErrorInProduction:a}=e&&e.appContext.config||At;if(e){let o=e.parent;const l=e.proxy,u=`https://vuejs.org/error-reference/#runtime-${n}`;for(;o;){const f=o.ec;if(f){for(let d=0;d<f.length;d++)if(f[d](t,l,u)===!1)return}o=o.parent}if(s){Qi(),sa(s,null,10,[t,l,u]),er();return}}O_(t,n,r,i,a)}function O_(t,e,n,i=!0,r=!1){if(r)throw t}const un=[];let jn=-1;const ss=[];let Fi=null,Zr=0;const Cd=Promise.resolve();let so=null;function Rd(t){const e=so||Cd;return t?e.then(this?t.bind(this):t):e}function N_(t){let e=jn+1,n=un.length;for(;e<n;){const i=e+n>>>1,r=un[i],s=Ks(r);s<t||s===t&&r.flags&2?e=i+1:n=i}return e}function uu(t){if(!(t.flags&1)){const e=Ks(t),n=un[un.length-1];!n||!(t.flags&2)&&e>=Ks(n)?un.push(t):un.splice(N_(e),0,t),t.flags|=1,Pd()}}function Pd(){so||(so=Cd.then(Ld))}function F_(t){it(t)?ss.push(...t):Fi&&t.id===-1?Fi.splice(Zr+1,0,t):t.flags&1||(ss.push(t),t.flags|=1),Pd()}function Yu(t,e,n=jn+1){for(;n<un.length;n++){const i=un[n];if(i&&i.flags&2){if(t&&i.id!==t.uid)continue;un.splice(n,1),n--,i.flags&4&&(i.flags&=-2),i(),i.flags&4||(i.flags&=-2)}}}function Dd(t){if(ss.length){const e=[...new Set(ss)].sort((n,i)=>Ks(n)-Ks(i));if(ss.length=0,Fi){Fi.push(...e);return}for(Fi=e,Zr=0;Zr<Fi.length;Zr++){const n=Fi[Zr];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}Fi=null,Zr=0}}const Ks=t=>t.id==null?t.flags&2?-1:1/0:t.id;function Ld(t){try{for(jn=0;jn<un.length;jn++){const e=un[jn];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),sa(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;jn<un.length;jn++){const e=un[jn];e&&(e.flags&=-2)}jn=-1,un.length=0,Dd(),so=null,(un.length||ss.length)&&Ld()}}let Cn=null,Id=null;function ao(t){const e=Cn;return Cn=t,Id=t&&t.type.__scopeId||null,e}function xr(t,e=Cn,n){if(!e||t._n)return t;const i=(...r)=>{i._d&&sf(-1);const s=ao(e);let a;try{a=t(...r)}finally{ao(s),i._d&&sf(1)}return a};return i._n=!0,i._c=!0,i._d=!0,i}function sr(t,e,n,i){const r=t.dirs,s=e&&e.dirs;for(let a=0;a<r.length;a++){const o=r[a];s&&(o.oldValue=s[a].value);let l=o.dir[i];l&&(Qi(),Gn(l,n,8,[t.el,o,t,e]),er())}}const B_=Symbol("_vte"),Ud=t=>t.__isTeleport,Bi=Symbol("_leaveCb"),xa=Symbol("_enterCb");function k_(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return xs(()=>{t.isMounted=!0}),Vd(()=>{t.isUnmounting=!0}),t}const Tn=[Function,Array],Od={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Tn,onEnter:Tn,onAfterEnter:Tn,onEnterCancelled:Tn,onBeforeLeave:Tn,onLeave:Tn,onAfterLeave:Tn,onLeaveCancelled:Tn,onBeforeAppear:Tn,onAppear:Tn,onAfterAppear:Tn,onAppearCancelled:Tn},Nd=t=>{const e=t.subTree;return e.component?Nd(e.component):e},z_={name:"BaseTransition",props:Od,setup(t,{slots:e}){const n=Bg(),i=k_();return()=>{const r=e.default&&kd(e.default(),!0);if(!r||!r.length)return;const s=Fd(r),a=gt(t),{mode:o}=a;if(i.isLeaving)return $o(s);const l=$u(s);if(!l)return $o(s);let u=jl(l,a,i,n,c=>u=c);l.type!==mn&&Zs(l,u);const f=n.subTree,d=f&&$u(f);if(d&&d.type!==mn&&!yr(l,d)&&Nd(n).type!==mn){const c=jl(d,a,i,n);if(Zs(d,c),o==="out-in"&&l.type!==mn)return i.isLeaving=!0,c.afterLeave=()=>{i.isLeaving=!1,n.job.flags&8||n.update(),delete c.afterLeave},$o(s);o==="in-out"&&l.type!==mn&&(c.delayLeave=(m,p,x)=>{const _=Bd(i,d);_[String(d.key)]=d,m[Bi]=()=>{p(),m[Bi]=void 0,delete u.delayedLeave},u.delayedLeave=x})}return s}}};function Fd(t){let e=t[0];if(t.length>1){for(const n of t)if(n.type!==mn){e=n;break}}return e}const H_=z_;function Bd(t,e){const{leavingVNodes:n}=t;let i=n.get(e.type);return i||(i=Object.create(null),n.set(e.type,i)),i}function jl(t,e,n,i,r){const{appear:s,mode:a,persisted:o=!1,onBeforeEnter:l,onEnter:u,onAfterEnter:f,onEnterCancelled:d,onBeforeLeave:c,onLeave:m,onAfterLeave:p,onLeaveCancelled:x,onBeforeAppear:_,onAppear:h,onAfterAppear:b,onAppearCancelled:M}=e,A=String(t.key),G=Bd(n,t),L=(Y,E)=>{Y&&Gn(Y,i,9,E)},B=(Y,E)=>{const C=E[1];L(Y,E),it(Y)?Y.every(V=>V.length<=1)&&C():Y.length<=1&&C()},X={mode:a,persisted:o,beforeEnter(Y){let E=l;if(!n.isMounted)if(s)E=_||l;else return;Y[Bi]&&Y[Bi](!0);const C=G[A];C&&yr(t,C)&&C.el[Bi]&&C.el[Bi](),L(E,[Y])},enter(Y){let E=u,C=f,V=d;if(!n.isMounted)if(s)E=h||u,C=b||f,V=M||d;else return;let W=!1;const Z=Y[xa]=ne=>{W||(W=!0,ne?L(V,[Y]):L(C,[Y]),X.delayedLeave&&X.delayedLeave(),Y[xa]=void 0)};E?B(E,[Y,Z]):Z()},leave(Y,E){const C=String(t.key);if(Y[xa]&&Y[xa](!0),n.isUnmounting)return E();L(c,[Y]);let V=!1;const W=Y[Bi]=Z=>{V||(V=!0,E(),Z?L(x,[Y]):L(p,[Y]),Y[Bi]=void 0,G[C]===t&&delete G[C])};G[C]=t,m?B(m,[Y,W]):W()},clone(Y){const E=jl(Y,e,n,i,r);return r&&r(E),E}};return X}function $o(t){if(Ao(t))return t=$i(t),t.children=null,t}function $u(t){if(!Ao(t))return Ud(t.type)&&t.children?Fd(t.children):t;const{shapeFlag:e,children:n}=t;if(n){if(e&16)return n[0];if(e&32&&at(n.default))return n.default()}}function Zs(t,e){t.shapeFlag&6&&t.component?(t.transition=e,Zs(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function kd(t,e=!1,n){let i=[],r=0;for(let s=0;s<t.length;s++){let a=t[s];const o=n==null?a.key:String(n)+String(a.key!=null?a.key:s);a.type===wn?(a.patchFlag&128&&r++,i=i.concat(kd(a.children,e,o))):(e||a.type!==mn)&&i.push(o!=null?$i(a,{key:o}):a)}if(r>1)for(let s=0;s<i.length;s++)i[s].patchFlag=-2;return i}/*! #__NO_SIDE_EFFECTS__ */function wo(t,e){return at(t)?zt({name:t.name},e,{setup:t}):t}function zd(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}function ql(t,e,n,i,r=!1){if(it(t)){t.forEach((p,x)=>ql(p,e&&(it(e)?e[x]:e),n,i,r));return}if(Vs(i)&&!r)return;const s=i.shapeFlag&4?mu(i.component):i.el,a=r?null:s,{i:o,r:l}=t,u=e&&e.r,f=o.refs===At?o.refs={}:o.refs,d=o.setupState,c=gt(d),m=d===At?()=>!1:p=>vt(c,p);if(u!=null&&u!==l&&(Bt(u)?(f[u]=null,m(u)&&(d[u]=null)):an(u)&&(u.value=null)),at(l))sa(l,o,12,[a,f]);else{const p=Bt(l),x=an(l);if(p||x){const _=()=>{if(t.f){const h=p?m(l)?d[l]:f[l]:l.value;r?it(h)&&eu(h,s):it(h)?h.includes(s)||h.push(s):p?(f[l]=[s],m(l)&&(d[l]=f[l])):(l.value=[s],t.k&&(f[t.k]=l.value))}else p?(f[l]=a,m(l)&&(d[l]=a)):x&&(l.value=a,t.k&&(f[t.k]=a))};a?(_.id=-1,Sn(_,n)):_()}}}So().requestIdleCallback;So().cancelIdleCallback;const Vs=t=>!!t.type.__asyncLoader,Ao=t=>t.type.__isKeepAlive;function V_(t,e){Hd(t,"a",e)}function G_(t,e){Hd(t,"da",e)}function Hd(t,e,n=Yt){const i=t.__wdc||(t.__wdc=()=>{let r=n;for(;r;){if(r.isDeactivated)return;r=r.parent}return t()});if(Co(e,i,n),n){let r=n.parent;for(;r&&r.parent;)Ao(r.parent.vnode)&&W_(i,e,n,r),r=r.parent}}function W_(t,e,n,i){const r=Co(e,t,i,!0);Gd(()=>{eu(i[e],r)},n)}function Co(t,e,n=Yt,i=!1){if(n){const r=n[t]||(n[t]=[]),s=e.__weh||(e.__weh=(...a)=>{Qi();const o=aa(n),l=Gn(e,n,t,a);return o(),er(),l});return i?r.unshift(s):r.push(s),s}}const Ti=t=>(e,n=Yt)=>{(!Qs||t==="sp")&&Co(t,(...i)=>e(...i),n)},X_=Ti("bm"),xs=Ti("m"),j_=Ti("bu"),q_=Ti("u"),Vd=Ti("bum"),Gd=Ti("um"),Y_=Ti("sp"),$_=Ti("rtg"),K_=Ti("rtc");function Z_(t,e=Yt){Co("ec",t,e)}const J_="components";function fu(t,e){return eg(J_,t,!0,e)||t}const Q_=Symbol.for("v-ndc");function eg(t,e,n=!0,i=!1){const r=Cn||Yt;if(r){const s=r.type;{const o=Gg(s,!1);if(o&&(o===e||o===Ln(e)||o===yo(Ln(e))))return s}const a=Ku(r[t]||s[t],e)||Ku(r.appContext[t],e);return!a&&i?s:a}}function Ku(t,e){return t&&(t[e]||t[Ln(e)]||t[yo(Ln(e))])}function Wd(t,e,n,i){let r;const s=n,a=it(t);if(a||Bt(t)){const o=a&&rs(t);let l=!1;o&&(l=!Dn(t),t=bo(t)),r=new Array(t.length);for(let u=0,f=t.length;u<f;u++)r[u]=e(l?rn(t[u]):t[u],u,void 0,s)}else if(typeof t=="number"){r=new Array(t);for(let o=0;o<t;o++)r[o]=e(o+1,o,void 0,s)}else if(Rt(t))if(t[Symbol.iterator])r=Array.from(t,(o,l)=>e(o,l,void 0,s));else{const o=Object.keys(t);r=new Array(o.length);for(let l=0,u=o.length;l<u;l++){const f=o[l];r[l]=e(t[f],f,l,s)}}else r=[];return r}const Yl=t=>t?fp(t)?mu(t):Yl(t.parent):null,Gs=zt(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Yl(t.parent),$root:t=>Yl(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>hu(t),$forceUpdate:t=>t.f||(t.f=()=>{uu(t.update)}),$nextTick:t=>t.n||(t.n=Rd.bind(t.proxy)),$watch:t=>Sg.bind(t)}),Ko=(t,e)=>t!==At&&!t.__isScriptSetup&&vt(t,e),tg={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:i,data:r,props:s,accessCache:a,type:o,appContext:l}=t;let u;if(e[0]!=="$"){const m=a[e];if(m!==void 0)switch(m){case 1:return i[e];case 2:return r[e];case 4:return n[e];case 3:return s[e]}else{if(Ko(i,e))return a[e]=1,i[e];if(r!==At&&vt(r,e))return a[e]=2,r[e];if((u=t.propsOptions[0])&&vt(u,e))return a[e]=3,s[e];if(n!==At&&vt(n,e))return a[e]=4,n[e];$l&&(a[e]=0)}}const f=Gs[e];let d,c;if(f)return e==="$attrs"&&nn(t.attrs,"get",""),f(t);if((d=o.__cssModules)&&(d=d[e]))return d;if(n!==At&&vt(n,e))return a[e]=4,n[e];if(c=l.config.globalProperties,vt(c,e))return c[e]},set({_:t},e,n){const{data:i,setupState:r,ctx:s}=t;return Ko(r,e)?(r[e]=n,!0):i!==At&&vt(i,e)?(i[e]=n,!0):vt(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(s[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:i,appContext:r,propsOptions:s}},a){let o;return!!n[a]||t!==At&&vt(t,a)||Ko(e,a)||(o=s[0])&&vt(o,a)||vt(i,a)||vt(Gs,a)||vt(r.config.globalProperties,a)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:vt(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function Zu(t){return it(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let $l=!0;function ng(t){const e=hu(t),n=t.proxy,i=t.ctx;$l=!1,e.beforeCreate&&Ju(e.beforeCreate,t,"bc");const{data:r,computed:s,methods:a,watch:o,provide:l,inject:u,created:f,beforeMount:d,mounted:c,beforeUpdate:m,updated:p,activated:x,deactivated:_,beforeDestroy:h,beforeUnmount:b,destroyed:M,unmounted:A,render:G,renderTracked:L,renderTriggered:B,errorCaptured:X,serverPrefetch:Y,expose:E,inheritAttrs:C,components:V,directives:W,filters:Z}=e;if(u&&ig(u,i,null),a)for(const de in a){const te=a[de];at(te)&&(i[de]=te.bind(n))}if(r){const de=r.call(n,n);Rt(de)&&(t.data=To(de))}if($l=!0,s)for(const de in s){const te=s[de],Le=at(te)?te.bind(n,n):at(te.get)?te.get.bind(n,n):Jn,Fe=!at(te)&&at(te.set)?te.set.bind(n):Jn,ze=Fn({get:Le,set:Fe});Object.defineProperty(i,de,{enumerable:!0,configurable:!0,get:()=>ze.value,set:Ze=>ze.value=Ze})}if(o)for(const de in o)Xd(o[de],i,n,de);if(l){const de=at(l)?l.call(n):l;Reflect.ownKeys(de).forEach(te=>{Xa(te,de[te])})}f&&Ju(f,t,"c");function se(de,te){it(te)?te.forEach(Le=>de(Le.bind(n))):te&&de(te.bind(n))}if(se(X_,d),se(xs,c),se(j_,m),se(q_,p),se(V_,x),se(G_,_),se(Z_,X),se(K_,L),se($_,B),se(Vd,b),se(Gd,A),se(Y_,Y),it(E))if(E.length){const de=t.exposed||(t.exposed={});E.forEach(te=>{Object.defineProperty(de,te,{get:()=>n[te],set:Le=>n[te]=Le})})}else t.exposed||(t.exposed={});G&&t.render===Jn&&(t.render=G),C!=null&&(t.inheritAttrs=C),V&&(t.components=V),W&&(t.directives=W),Y&&zd(t)}function ig(t,e,n=Jn){it(t)&&(t=Kl(t));for(const i in t){const r=t[i];let s;Rt(r)?"default"in r?s=xi(r.from||i,r.default,!0):s=xi(r.from||i):s=xi(r),an(s)?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>s.value,set:a=>s.value=a}):e[i]=s}}function Ju(t,e,n){Gn(it(t)?t.map(i=>i.bind(e.proxy)):t.bind(e.proxy),e,n)}function Xd(t,e,n,i){let r=i.includes(".")?sp(n,i):()=>n[i];if(Bt(t)){const s=e[t];at(s)&&ja(r,s)}else if(at(t))ja(r,t.bind(n));else if(Rt(t))if(it(t))t.forEach(s=>Xd(s,e,n,i));else{const s=at(t.handler)?t.handler.bind(n):e[t.handler];at(s)&&ja(r,s,t)}}function hu(t){const e=t.type,{mixins:n,extends:i}=e,{mixins:r,optionsCache:s,config:{optionMergeStrategies:a}}=t.appContext,o=s.get(e);let l;return o?l=o:!r.length&&!n&&!i?l=e:(l={},r.length&&r.forEach(u=>oo(l,u,a,!0)),oo(l,e,a)),Rt(e)&&s.set(e,l),l}function oo(t,e,n,i=!1){const{mixins:r,extends:s}=e;s&&oo(t,s,n,!0),r&&r.forEach(a=>oo(t,a,n,!0));for(const a in e)if(!(i&&a==="expose")){const o=rg[a]||n&&n[a];t[a]=o?o(t[a],e[a]):e[a]}return t}const rg={data:Qu,props:ef,emits:ef,methods:Ns,computed:Ns,beforeCreate:ln,created:ln,beforeMount:ln,mounted:ln,beforeUpdate:ln,updated:ln,beforeDestroy:ln,beforeUnmount:ln,destroyed:ln,unmounted:ln,activated:ln,deactivated:ln,errorCaptured:ln,serverPrefetch:ln,components:Ns,directives:Ns,watch:ag,provide:Qu,inject:sg};function Qu(t,e){return e?t?function(){return zt(at(t)?t.call(this,this):t,at(e)?e.call(this,this):e)}:e:t}function sg(t,e){return Ns(Kl(t),Kl(e))}function Kl(t){if(it(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function ln(t,e){return t?[...new Set([].concat(t,e))]:e}function Ns(t,e){return t?zt(Object.create(null),t,e):e}function ef(t,e){return t?it(t)&&it(e)?[...new Set([...t,...e])]:zt(Object.create(null),Zu(t),Zu(e??{})):e}function ag(t,e){if(!t)return e;if(!e)return t;const n=zt(Object.create(null),t);for(const i in e)n[i]=ln(t[i],e[i]);return n}function jd(){return{app:null,config:{isNativeTag:Ym,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let og=0;function lg(t,e){return function(i,r=null){at(i)||(i=zt({},i)),r!=null&&!Rt(r)&&(r=null);const s=jd(),a=new WeakSet,o=[];let l=!1;const u=s.app={_uid:og++,_component:i,_props:r,_container:null,_context:s,_instance:null,version:Xg,get config(){return s.config},set config(f){},use(f,...d){return a.has(f)||(f&&at(f.install)?(a.add(f),f.install(u,...d)):at(f)&&(a.add(f),f(u,...d))),u},mixin(f){return s.mixins.includes(f)||s.mixins.push(f),u},component(f,d){return d?(s.components[f]=d,u):s.components[f]},directive(f,d){return d?(s.directives[f]=d,u):s.directives[f]},mount(f,d,c){if(!l){const m=u._ceVNode||Lt(i,r);return m.appContext=s,c===!0?c="svg":c===!1&&(c=void 0),d&&e?e(m,f):t(m,f,c),l=!0,u._container=f,f.__vue_app__=u,mu(m.component)}},onUnmount(f){o.push(f)},unmount(){l&&(Gn(o,u._instance,16),t(null,u._container),delete u._container.__vue_app__)},provide(f,d){return s.provides[f]=d,u},runWithContext(f){const d=as;as=u;try{return f()}finally{as=d}}};return u}}let as=null;function Xa(t,e){if(Yt){let n=Yt.provides;const i=Yt.parent&&Yt.parent.provides;i===n&&(n=Yt.provides=Object.create(i)),n[t]=e}}function xi(t,e,n=!1){const i=Yt||Cn;if(i||as){const r=as?as._context.provides:i?i.parent==null?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:void 0;if(r&&t in r)return r[t];if(arguments.length>1)return n&&at(e)?e.call(i&&i.proxy):e}}const qd={},Yd=()=>Object.create(qd),$d=t=>Object.getPrototypeOf(t)===qd;function cg(t,e,n,i=!1){const r={},s=Yd();t.propsDefaults=Object.create(null),Kd(t,e,r,s);for(const a in t.propsOptions[0])a in r||(r[a]=void 0);n?t.props=i?r:Td(r):t.type.props?t.props=r:t.props=s,t.attrs=s}function ug(t,e,n,i){const{props:r,attrs:s,vnode:{patchFlag:a}}=t,o=gt(r),[l]=t.propsOptions;let u=!1;if((i||a>0)&&!(a&16)){if(a&8){const f=t.vnode.dynamicProps;for(let d=0;d<f.length;d++){let c=f[d];if(Ro(t.emitsOptions,c))continue;const m=e[c];if(l)if(vt(s,c))m!==s[c]&&(s[c]=m,u=!0);else{const p=Ln(c);r[p]=Zl(l,o,p,m,t,!1)}else m!==s[c]&&(s[c]=m,u=!0)}}}else{Kd(t,e,r,s)&&(u=!0);let f;for(const d in o)(!e||!vt(e,d)&&((f=Ur(d))===d||!vt(e,f)))&&(l?n&&(n[d]!==void 0||n[f]!==void 0)&&(r[d]=Zl(l,o,d,void 0,t,!0)):delete r[d]);if(s!==o)for(const d in s)(!e||!vt(e,d))&&(delete s[d],u=!0)}u&&mi(t.attrs,"set","")}function Kd(t,e,n,i){const[r,s]=t.propsOptions;let a=!1,o;if(e)for(let l in e){if(ks(l))continue;const u=e[l];let f;r&&vt(r,f=Ln(l))?!s||!s.includes(f)?n[f]=u:(o||(o={}))[f]=u:Ro(t.emitsOptions,l)||(!(l in i)||u!==i[l])&&(i[l]=u,a=!0)}if(s){const l=gt(n),u=o||At;for(let f=0;f<s.length;f++){const d=s[f];n[d]=Zl(r,l,d,u[d],t,!vt(u,d))}}return a}function Zl(t,e,n,i,r,s){const a=t[n];if(a!=null){const o=vt(a,"default");if(o&&i===void 0){const l=a.default;if(a.type!==Function&&!a.skipFactory&&at(l)){const{propsDefaults:u}=r;if(n in u)i=u[n];else{const f=aa(r);i=u[n]=l.call(null,e),f()}}else i=l;r.ce&&r.ce._setProp(n,i)}a[0]&&(s&&!o?i=!1:a[1]&&(i===""||i===Ur(n))&&(i=!0))}return i}const fg=new WeakMap;function Zd(t,e,n=!1){const i=n?fg:e.propsCache,r=i.get(t);if(r)return r;const s=t.props,a={},o=[];let l=!1;if(!at(t)){const f=d=>{l=!0;const[c,m]=Zd(d,e,!0);zt(a,c),m&&o.push(...m)};!n&&e.mixins.length&&e.mixins.forEach(f),t.extends&&f(t.extends),t.mixins&&t.mixins.forEach(f)}if(!s&&!l)return Rt(t)&&i.set(t,ns),ns;if(it(s))for(let f=0;f<s.length;f++){const d=Ln(s[f]);tf(d)&&(a[d]=At)}else if(s)for(const f in s){const d=Ln(f);if(tf(d)){const c=s[f],m=a[d]=it(c)||at(c)?{type:c}:zt({},c),p=m.type;let x=!1,_=!0;if(it(p))for(let h=0;h<p.length;++h){const b=p[h],M=at(b)&&b.name;if(M==="Boolean"){x=!0;break}else M==="String"&&(_=!1)}else x=at(p)&&p.name==="Boolean";m[0]=x,m[1]=_,(x||vt(m,"default"))&&o.push(d)}}const u=[a,o];return Rt(t)&&i.set(t,u),u}function tf(t){return t[0]!=="$"&&!ks(t)}const Jd=t=>t[0]==="_"||t==="$stable",du=t=>it(t)?t.map(Yn):[Yn(t)],hg=(t,e,n)=>{if(e._n)return e;const i=xr((...r)=>du(e(...r)),n);return i._c=!1,i},Qd=(t,e,n)=>{const i=t._ctx;for(const r in t){if(Jd(r))continue;const s=t[r];if(at(s))e[r]=hg(r,s,i);else if(s!=null){const a=du(s);e[r]=()=>a}}},ep=(t,e)=>{const n=du(e);t.slots.default=()=>n},tp=(t,e,n)=>{for(const i in e)(n||i!=="_")&&(t[i]=e[i])},dg=(t,e,n)=>{const i=t.slots=Yd();if(t.vnode.shapeFlag&32){const r=e._;r?(tp(i,e,n),n&&ad(i,"_",r,!0)):Qd(e,i)}else e&&ep(t,e)},pg=(t,e,n)=>{const{vnode:i,slots:r}=t;let s=!0,a=At;if(i.shapeFlag&32){const o=e._;o?n&&o===1?s=!1:tp(r,e,n):(s=!e.$stable,Qd(e,r)),a=e}else e&&(ep(t,e),a={default:1});if(s)for(const o in r)!Jd(o)&&a[o]==null&&delete r[o]},Sn=Cg;function mg(t){return _g(t)}function _g(t,e){const n=So();n.__VUE__=!0;const{insert:i,remove:r,patchProp:s,createElement:a,createText:o,createComment:l,setText:u,setElementText:f,parentNode:d,nextSibling:c,setScopeId:m=Jn,insertStaticContent:p}=t,x=(w,H,j,ue=null,le=null,Me=null,Se=void 0,g=null,v=!!H.dynamicChildren)=>{if(w===H)return;w&&!yr(w,H)&&(ue=K(w),Ze(w,le,Me,!0),w=null),H.patchFlag===-2&&(v=!1,H.dynamicChildren=null);const{type:T,ref:P,shapeFlag:O}=H;switch(T){case Po:_(w,H,j,ue);break;case mn:h(w,H,j,ue);break;case qa:w==null&&b(H,j,ue,Se);break;case wn:V(w,H,j,ue,le,Me,Se,g,v);break;default:O&1?G(w,H,j,ue,le,Me,Se,g,v):O&6?W(w,H,j,ue,le,Me,Se,g,v):(O&64||O&128)&&T.process(w,H,j,ue,le,Me,Se,g,v,Ce)}P!=null&&le&&ql(P,w&&w.ref,Me,H||w,!H)},_=(w,H,j,ue)=>{if(w==null)i(H.el=o(H.children),j,ue);else{const le=H.el=w.el;H.children!==w.children&&u(le,H.children)}},h=(w,H,j,ue)=>{w==null?i(H.el=l(H.children||""),j,ue):H.el=w.el},b=(w,H,j,ue)=>{[w.el,w.anchor]=p(w.children,H,j,ue,w.el,w.anchor)},M=({el:w,anchor:H},j,ue)=>{let le;for(;w&&w!==H;)le=c(w),i(w,j,ue),w=le;i(H,j,ue)},A=({el:w,anchor:H})=>{let j;for(;w&&w!==H;)j=c(w),r(w),w=j;r(H)},G=(w,H,j,ue,le,Me,Se,g,v)=>{H.type==="svg"?Se="svg":H.type==="math"&&(Se="mathml"),w==null?L(H,j,ue,le,Me,Se,g,v):Y(w,H,le,Me,Se,g,v)},L=(w,H,j,ue,le,Me,Se,g)=>{let v,T;const{props:P,shapeFlag:O,transition:F,dirs:Q}=w;if(v=w.el=a(w.type,Me,P&&P.is,P),O&8?f(v,w.children):O&16&&X(w.children,v,null,ue,le,Zo(w,Me),Se,g),Q&&sr(w,null,ue,"created"),B(v,w,w.scopeId,Se,ue),P){for(const re in P)re!=="value"&&!ks(re)&&s(v,re,null,P[re],Me,ue);"value"in P&&s(v,"value",null,P.value,Me),(T=P.onVnodeBeforeMount)&&Xn(T,ue,w)}Q&&sr(w,null,ue,"beforeMount");const q=gg(le,F);q&&F.beforeEnter(v),i(v,H,j),((T=P&&P.onVnodeMounted)||q||Q)&&Sn(()=>{T&&Xn(T,ue,w),q&&F.enter(v),Q&&sr(w,null,ue,"mounted")},le)},B=(w,H,j,ue,le)=>{if(j&&m(w,j),ue)for(let Me=0;Me<ue.length;Me++)m(w,ue[Me]);if(le){let Me=le.subTree;if(H===Me||op(Me.type)&&(Me.ssContent===H||Me.ssFallback===H)){const Se=le.vnode;B(w,Se,Se.scopeId,Se.slotScopeIds,le.parent)}}},X=(w,H,j,ue,le,Me,Se,g,v=0)=>{for(let T=v;T<w.length;T++){const P=w[T]=g?ki(w[T]):Yn(w[T]);x(null,P,H,j,ue,le,Me,Se,g)}},Y=(w,H,j,ue,le,Me,Se)=>{const g=H.el=w.el;let{patchFlag:v,dynamicChildren:T,dirs:P}=H;v|=w.patchFlag&16;const O=w.props||At,F=H.props||At;let Q;if(j&&ar(j,!1),(Q=F.onVnodeBeforeUpdate)&&Xn(Q,j,H,w),P&&sr(H,w,j,"beforeUpdate"),j&&ar(j,!0),(O.innerHTML&&F.innerHTML==null||O.textContent&&F.textContent==null)&&f(g,""),T?E(w.dynamicChildren,T,g,j,ue,Zo(H,le),Me):Se||te(w,H,g,null,j,ue,Zo(H,le),Me,!1),v>0){if(v&16)C(g,O,F,j,le);else if(v&2&&O.class!==F.class&&s(g,"class",null,F.class,le),v&4&&s(g,"style",O.style,F.style,le),v&8){const q=H.dynamicProps;for(let re=0;re<q.length;re++){const Te=q[re],oe=O[Te],ye=F[Te];(ye!==oe||Te==="value")&&s(g,Te,oe,ye,le,j)}}v&1&&w.children!==H.children&&f(g,H.children)}else!Se&&T==null&&C(g,O,F,j,le);((Q=F.onVnodeUpdated)||P)&&Sn(()=>{Q&&Xn(Q,j,H,w),P&&sr(H,w,j,"updated")},ue)},E=(w,H,j,ue,le,Me,Se)=>{for(let g=0;g<H.length;g++){const v=w[g],T=H[g],P=v.el&&(v.type===wn||!yr(v,T)||v.shapeFlag&70)?d(v.el):j;x(v,T,P,null,ue,le,Me,Se,!0)}},C=(w,H,j,ue,le)=>{if(H!==j){if(H!==At)for(const Me in H)!ks(Me)&&!(Me in j)&&s(w,Me,H[Me],null,le,ue);for(const Me in j){if(ks(Me))continue;const Se=j[Me],g=H[Me];Se!==g&&Me!=="value"&&s(w,Me,g,Se,le,ue)}"value"in j&&s(w,"value",H.value,j.value,le)}},V=(w,H,j,ue,le,Me,Se,g,v)=>{const T=H.el=w?w.el:o(""),P=H.anchor=w?w.anchor:o("");let{patchFlag:O,dynamicChildren:F,slotScopeIds:Q}=H;Q&&(g=g?g.concat(Q):Q),w==null?(i(T,j,ue),i(P,j,ue),X(H.children||[],j,P,le,Me,Se,g,v)):O>0&&O&64&&F&&w.dynamicChildren?(E(w.dynamicChildren,F,j,le,Me,Se,g),(H.key!=null||le&&H===le.subTree)&&np(w,H,!0)):te(w,H,j,P,le,Me,Se,g,v)},W=(w,H,j,ue,le,Me,Se,g,v)=>{H.slotScopeIds=g,w==null?H.shapeFlag&512?le.ctx.activate(H,j,ue,Se,v):Z(H,j,ue,le,Me,Se,v):ne(w,H,v)},Z=(w,H,j,ue,le,Me,Se)=>{const g=w.component=Fg(w,ue,le);if(Ao(w)&&(g.ctx.renderer=Ce),kg(g,!1,Se),g.asyncDep){if(le&&le.registerDep(g,se,Se),!w.el){const v=g.subTree=Lt(mn);h(null,v,H,j)}}else se(g,w,H,j,le,Me,Se)},ne=(w,H,j)=>{const ue=H.component=w.component;if(wg(w,H,j))if(ue.asyncDep&&!ue.asyncResolved){de(ue,H,j);return}else ue.next=H,ue.update();else H.el=w.el,ue.vnode=H},se=(w,H,j,ue,le,Me,Se)=>{const g=()=>{if(w.isMounted){let{next:O,bu:F,u:Q,parent:q,vnode:re}=w;{const Ue=ip(w);if(Ue){O&&(O.el=re.el,de(w,O,Se)),Ue.asyncDep.then(()=>{w.isUnmounted||g()});return}}let Te=O,oe;ar(w,!1),O?(O.el=re.el,de(w,O,Se)):O=re,F&&Wo(F),(oe=O.props&&O.props.onVnodeBeforeUpdate)&&Xn(oe,q,O,re),ar(w,!0);const ye=Jo(w),Be=w.subTree;w.subTree=ye,x(Be,ye,d(Be.el),K(Be),w,le,Me),O.el=ye.el,Te===null&&Ag(w,ye.el),Q&&Sn(Q,le),(oe=O.props&&O.props.onVnodeUpdated)&&Sn(()=>Xn(oe,q,O,re),le)}else{let O;const{el:F,props:Q}=H,{bm:q,m:re,parent:Te,root:oe,type:ye}=w,Be=Vs(H);if(ar(w,!1),q&&Wo(q),!Be&&(O=Q&&Q.onVnodeBeforeMount)&&Xn(O,Te,H),ar(w,!0),F&&He){const Ue=()=>{w.subTree=Jo(w),He(F,w.subTree,w,le,null)};Be&&ye.__asyncHydrate?ye.__asyncHydrate(F,w,Ue):Ue()}else{oe.ce&&oe.ce._injectChildStyle(ye);const Ue=w.subTree=Jo(w);x(null,Ue,j,ue,w,le,Me),H.el=Ue.el}if(re&&Sn(re,le),!Be&&(O=Q&&Q.onVnodeMounted)){const Ue=H;Sn(()=>Xn(O,Te,Ue),le)}(H.shapeFlag&256||Te&&Vs(Te.vnode)&&Te.vnode.shapeFlag&256)&&w.a&&Sn(w.a,le),w.isMounted=!0,H=j=ue=null}};w.scope.on();const v=w.effect=new ud(g);w.scope.off();const T=w.update=v.run.bind(v),P=w.job=v.runIfDirty.bind(v);P.i=w,P.id=w.uid,v.scheduler=()=>uu(P),ar(w,!0),T()},de=(w,H,j)=>{H.component=w;const ue=w.vnode.props;w.vnode=H,w.next=null,ug(w,H.props,ue,j),pg(w,H.children,j),Qi(),Yu(w),er()},te=(w,H,j,ue,le,Me,Se,g,v=!1)=>{const T=w&&w.children,P=w?w.shapeFlag:0,O=H.children,{patchFlag:F,shapeFlag:Q}=H;if(F>0){if(F&128){Fe(T,O,j,ue,le,Me,Se,g,v);return}else if(F&256){Le(T,O,j,ue,le,Me,Se,g,v);return}}Q&8?(P&16&&Ie(T,le,Me),O!==T&&f(j,O)):P&16?Q&16?Fe(T,O,j,ue,le,Me,Se,g,v):Ie(T,le,Me,!0):(P&8&&f(j,""),Q&16&&X(O,j,ue,le,Me,Se,g,v))},Le=(w,H,j,ue,le,Me,Se,g,v)=>{w=w||ns,H=H||ns;const T=w.length,P=H.length,O=Math.min(T,P);let F;for(F=0;F<O;F++){const Q=H[F]=v?ki(H[F]):Yn(H[F]);x(w[F],Q,j,null,le,Me,Se,g,v)}T>P?Ie(w,le,Me,!0,!1,O):X(H,j,ue,le,Me,Se,g,v,O)},Fe=(w,H,j,ue,le,Me,Se,g,v)=>{let T=0;const P=H.length;let O=w.length-1,F=P-1;for(;T<=O&&T<=F;){const Q=w[T],q=H[T]=v?ki(H[T]):Yn(H[T]);if(yr(Q,q))x(Q,q,j,null,le,Me,Se,g,v);else break;T++}for(;T<=O&&T<=F;){const Q=w[O],q=H[F]=v?ki(H[F]):Yn(H[F]);if(yr(Q,q))x(Q,q,j,null,le,Me,Se,g,v);else break;O--,F--}if(T>O){if(T<=F){const Q=F+1,q=Q<P?H[Q].el:ue;for(;T<=F;)x(null,H[T]=v?ki(H[T]):Yn(H[T]),j,q,le,Me,Se,g,v),T++}}else if(T>F)for(;T<=O;)Ze(w[T],le,Me,!0),T++;else{const Q=T,q=T,re=new Map;for(T=q;T<=F;T++){const qe=H[T]=v?ki(H[T]):Yn(H[T]);qe.key!=null&&re.set(qe.key,T)}let Te,oe=0;const ye=F-q+1;let Be=!1,Ue=0;const Ne=new Array(ye);for(T=0;T<ye;T++)Ne[T]=0;for(T=Q;T<=O;T++){const qe=w[T];if(oe>=ye){Ze(qe,le,Me,!0);continue}let rt;if(qe.key!=null)rt=re.get(qe.key);else for(Te=q;Te<=F;Te++)if(Ne[Te-q]===0&&yr(qe,H[Te])){rt=Te;break}rt===void 0?Ze(qe,le,Me,!0):(Ne[rt-q]=T+1,rt>=Ue?Ue=rt:Be=!0,x(qe,H[rt],j,null,le,Me,Se,g,v),oe++)}const $e=Be?vg(Ne):ns;for(Te=$e.length-1,T=ye-1;T>=0;T--){const qe=q+T,rt=H[qe],ee=qe+1<P?H[qe+1].el:ue;Ne[T]===0?x(null,rt,j,ee,le,Me,Se,g,v):Be&&(Te<0||T!==$e[Te]?ze(rt,j,ee,2):Te--)}}},ze=(w,H,j,ue,le=null)=>{const{el:Me,type:Se,transition:g,children:v,shapeFlag:T}=w;if(T&6){ze(w.component.subTree,H,j,ue);return}if(T&128){w.suspense.move(H,j,ue);return}if(T&64){Se.move(w,H,j,Ce);return}if(Se===wn){i(Me,H,j);for(let O=0;O<v.length;O++)ze(v[O],H,j,ue);i(w.anchor,H,j);return}if(Se===qa){M(w,H,j);return}if(ue!==2&&T&1&&g)if(ue===0)g.beforeEnter(Me),i(Me,H,j),Sn(()=>g.enter(Me),le);else{const{leave:O,delayLeave:F,afterLeave:Q}=g,q=()=>i(Me,H,j),re=()=>{O(Me,()=>{q(),Q&&Q()})};F?F(Me,q,re):re()}else i(Me,H,j)},Ze=(w,H,j,ue=!1,le=!1)=>{const{type:Me,props:Se,ref:g,children:v,dynamicChildren:T,shapeFlag:P,patchFlag:O,dirs:F,cacheIndex:Q}=w;if(O===-2&&(le=!1),g!=null&&ql(g,null,j,w,!0),Q!=null&&(H.renderCache[Q]=void 0),P&256){H.ctx.deactivate(w);return}const q=P&1&&F,re=!Vs(w);let Te;if(re&&(Te=Se&&Se.onVnodeBeforeUnmount)&&Xn(Te,H,w),P&6)we(w.component,j,ue);else{if(P&128){w.suspense.unmount(j,ue);return}q&&sr(w,null,H,"beforeUnmount"),P&64?w.type.remove(w,H,j,Ce,ue):T&&!T.hasOnce&&(Me!==wn||O>0&&O&64)?Ie(T,H,j,!1,!0):(Me===wn&&O&384||!le&&P&16)&&Ie(v,H,j),ue&&Je(w)}(re&&(Te=Se&&Se.onVnodeUnmounted)||q)&&Sn(()=>{Te&&Xn(Te,H,w),q&&sr(w,null,H,"unmounted")},j)},Je=w=>{const{type:H,el:j,anchor:ue,transition:le}=w;if(H===wn){ge(j,ue);return}if(H===qa){A(w);return}const Me=()=>{r(j),le&&!le.persisted&&le.afterLeave&&le.afterLeave()};if(w.shapeFlag&1&&le&&!le.persisted){const{leave:Se,delayLeave:g}=le,v=()=>Se(j,Me);g?g(w.el,Me,v):v()}else Me()},ge=(w,H)=>{let j;for(;w!==H;)j=c(w),r(w),w=j;r(H)},we=(w,H,j)=>{const{bum:ue,scope:le,job:Me,subTree:Se,um:g,m:v,a:T}=w;nf(v),nf(T),ue&&Wo(ue),le.stop(),Me&&(Me.flags|=8,Ze(Se,w,H,j)),g&&Sn(g,H),Sn(()=>{w.isUnmounted=!0},H),H&&H.pendingBranch&&!H.isUnmounted&&w.asyncDep&&!w.asyncResolved&&w.suspenseId===H.pendingId&&(H.deps--,H.deps===0&&H.resolve())},Ie=(w,H,j,ue=!1,le=!1,Me=0)=>{for(let Se=Me;Se<w.length;Se++)Ze(w[Se],H,j,ue,le)},K=w=>{if(w.shapeFlag&6)return K(w.component.subTree);if(w.shapeFlag&128)return w.suspense.next();const H=c(w.anchor||w.el),j=H&&H[B_];return j?c(j):H};let xe=!1;const _e=(w,H,j)=>{w==null?H._vnode&&Ze(H._vnode,null,null,!0):x(H._vnode||null,w,H,null,null,null,j),H._vnode=w,xe||(xe=!0,Yu(),Dd(),xe=!1)},Ce={p:x,um:Ze,m:ze,r:Je,mt:Z,mc:X,pc:te,pbc:E,n:K,o:t};let Ve,He;return{render:_e,hydrate:Ve,createApp:lg(_e,Ve)}}function Zo({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function ar({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function gg(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function np(t,e,n=!1){const i=t.children,r=e.children;if(it(i)&&it(r))for(let s=0;s<i.length;s++){const a=i[s];let o=r[s];o.shapeFlag&1&&!o.dynamicChildren&&((o.patchFlag<=0||o.patchFlag===32)&&(o=r[s]=ki(r[s]),o.el=a.el),!n&&o.patchFlag!==-2&&np(a,o)),o.type===Po&&(o.el=a.el)}}function vg(t){const e=t.slice(),n=[0];let i,r,s,a,o;const l=t.length;for(i=0;i<l;i++){const u=t[i];if(u!==0){if(r=n[n.length-1],t[r]<u){e[i]=r,n.push(i);continue}for(s=0,a=n.length-1;s<a;)o=s+a>>1,t[n[o]]<u?s=o+1:a=o;u<t[n[s]]&&(s>0&&(e[i]=n[s-1]),n[s]=i)}}for(s=n.length,a=n[s-1];s-- >0;)n[s]=a,a=e[a];return n}function ip(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:ip(e)}function nf(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}const xg=Symbol.for("v-scx"),yg=()=>xi(xg);function ja(t,e,n){return rp(t,e,n)}function rp(t,e,n=At){const{immediate:i,deep:r,flush:s,once:a}=n,o=zt({},n),l=e&&i||!e&&s!=="post";let u;if(Qs){if(s==="sync"){const m=yg();u=m.__watcherHandles||(m.__watcherHandles=[])}else if(!l){const m=()=>{};return m.stop=Jn,m.resume=Jn,m.pause=Jn,m}}const f=Yt;o.call=(m,p,x)=>Gn(m,f,p,x);let d=!1;s==="post"?o.scheduler=m=>{Sn(m,f&&f.suspense)}:s!=="sync"&&(d=!0,o.scheduler=(m,p)=>{p?m():uu(m)}),o.augmentJob=m=>{e&&(m.flags|=4),d&&(m.flags|=2,f&&(m.id=f.uid,m.i=f))};const c=U_(t,e,o);return Qs&&(u?u.push(c):l&&c()),c}function Sg(t,e,n){const i=this.proxy,r=Bt(t)?t.includes(".")?sp(i,t):()=>i[t]:t.bind(i,i);let s;at(e)?s=e:(s=e.handler,n=e);const a=aa(this),o=rp(r,s.bind(i),n);return a(),o}function sp(t,e){const n=e.split(".");return()=>{let i=t;for(let r=0;r<n.length&&i;r++)i=i[n[r]];return i}}const Mg=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${Ln(e)}Modifiers`]||t[`${Ur(e)}Modifiers`];function bg(t,e,...n){if(t.isUnmounted)return;const i=t.vnode.props||At;let r=n;const s=e.startsWith("update:"),a=s&&Mg(i,e.slice(7));a&&(a.trim&&(r=n.map(f=>Bt(f)?f.trim():f)),a.number&&(r=n.map(Qm)));let o,l=i[o=Go(e)]||i[o=Go(Ln(e))];!l&&s&&(l=i[o=Go(Ur(e))]),l&&Gn(l,t,6,r);const u=i[o+"Once"];if(u){if(!t.emitted)t.emitted={};else if(t.emitted[o])return;t.emitted[o]=!0,Gn(u,t,6,r)}}function ap(t,e,n=!1){const i=e.emitsCache,r=i.get(t);if(r!==void 0)return r;const s=t.emits;let a={},o=!1;if(!at(t)){const l=u=>{const f=ap(u,e,!0);f&&(o=!0,zt(a,f))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!s&&!o?(Rt(t)&&i.set(t,null),null):(it(s)?s.forEach(l=>a[l]=null):zt(a,s),Rt(t)&&i.set(t,a),a)}function Ro(t,e){return!t||!go(e)?!1:(e=e.slice(2).replace(/Once$/,""),vt(t,e[0].toLowerCase()+e.slice(1))||vt(t,Ur(e))||vt(t,e))}function Jo(t){const{type:e,vnode:n,proxy:i,withProxy:r,propsOptions:[s],slots:a,attrs:o,emit:l,render:u,renderCache:f,props:d,data:c,setupState:m,ctx:p,inheritAttrs:x}=t,_=ao(t);let h,b;try{if(n.shapeFlag&4){const A=r||i,G=A;h=Yn(u.call(G,A,f,d,m,c,p)),b=o}else{const A=e;h=Yn(A.length>1?A(d,{attrs:o,slots:a,emit:l}):A(d,null)),b=e.props?o:Tg(o)}}catch(A){Ws.length=0,Eo(A,t,1),h=Lt(mn)}let M=h;if(b&&x!==!1){const A=Object.keys(b),{shapeFlag:G}=M;A.length&&G&7&&(s&&A.some(Qc)&&(b=Eg(b,s)),M=$i(M,b,!1,!0))}return n.dirs&&(M=$i(M,null,!1,!0),M.dirs=M.dirs?M.dirs.concat(n.dirs):n.dirs),n.transition&&Zs(M,n.transition),h=M,ao(_),h}const Tg=t=>{let e;for(const n in t)(n==="class"||n==="style"||go(n))&&((e||(e={}))[n]=t[n]);return e},Eg=(t,e)=>{const n={};for(const i in t)(!Qc(i)||!(i.slice(9)in e))&&(n[i]=t[i]);return n};function wg(t,e,n){const{props:i,children:r,component:s}=t,{props:a,children:o,patchFlag:l}=e,u=s.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return i?rf(i,a,u):!!a;if(l&8){const f=e.dynamicProps;for(let d=0;d<f.length;d++){const c=f[d];if(a[c]!==i[c]&&!Ro(u,c))return!0}}}else return(r||o)&&(!o||!o.$stable)?!0:i===a?!1:i?a?rf(i,a,u):!0:!!a;return!1}function rf(t,e,n){const i=Object.keys(e);if(i.length!==Object.keys(t).length)return!0;for(let r=0;r<i.length;r++){const s=i[r];if(e[s]!==t[s]&&!Ro(n,s))return!0}return!1}function Ag({vnode:t,parent:e},n){for(;e;){const i=e.subTree;if(i.suspense&&i.suspense.activeBranch===t&&(i.el=t.el),i===t)(t=e.vnode).el=n,e=e.parent;else break}}const op=t=>t.__isSuspense;function Cg(t,e){e&&e.pendingBranch?it(t)?e.effects.push(...t):e.effects.push(t):F_(t)}const wn=Symbol.for("v-fgt"),Po=Symbol.for("v-txt"),mn=Symbol.for("v-cmt"),qa=Symbol.for("v-stc"),Ws=[];let bn=null;function jt(t=!1){Ws.push(bn=t?null:[])}function Rg(){Ws.pop(),bn=Ws[Ws.length-1]||null}let Js=1;function sf(t){Js+=t,t<0&&bn&&(bn.hasOnce=!0)}function lp(t){return t.dynamicChildren=Js>0?bn||ns:null,Rg(),Js>0&&bn&&bn.push(t),t}function sn(t,e,n,i,r,s){return lp(mt(t,e,n,i,r,s,!0))}function cp(t,e,n,i,r){return lp(Lt(t,e,n,i,r,!0))}function lo(t){return t?t.__v_isVNode===!0:!1}function yr(t,e){return t.type===e.type&&t.key===e.key}const up=({key:t})=>t??null,Ya=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?Bt(t)||an(t)||at(t)?{i:Cn,r:t,k:e,f:!!n}:t:null);function mt(t,e=null,n=null,i=0,r=null,s=t===wn?0:1,a=!1,o=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&up(e),ref:e&&Ya(e),scopeId:Id,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:i,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:Cn};return o?(pu(l,n),s&128&&t.normalize(l)):n&&(l.shapeFlag|=Bt(n)?8:16),Js>0&&!a&&bn&&(l.patchFlag>0||s&6)&&l.patchFlag!==32&&bn.push(l),l}const Lt=Pg;function Pg(t,e=null,n=null,i=0,r=null,s=!1){if((!t||t===Q_)&&(t=mn),lo(t)){const o=$i(t,e,!0);return n&&pu(o,n),Js>0&&!s&&bn&&(o.shapeFlag&6?bn[bn.indexOf(t)]=o:bn.push(o)),o.patchFlag=-2,o}if(Wg(t)&&(t=t.__vccOpts),e){e=Dg(e);let{class:o,style:l}=e;o&&!Bt(o)&&(e.class=Mo(o)),Rt(l)&&(cu(l)&&!it(l)&&(l=zt({},l)),e.style=nu(l))}const a=Bt(t)?1:op(t)?128:Ud(t)?64:Rt(t)?4:at(t)?2:0;return mt(t,e,n,i,r,a,s,!0)}function Dg(t){return t?cu(t)||$d(t)?zt({},t):t:null}function $i(t,e,n=!1,i=!1){const{props:r,ref:s,patchFlag:a,children:o,transition:l}=t,u=e?Ug(r||{},e):r,f={__v_isVNode:!0,__v_skip:!0,type:t.type,props:u,key:u&&up(u),ref:e&&e.ref?n&&s?it(s)?s.concat(Ya(e)):[s,Ya(e)]:Ya(e):s,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==wn?a===-1?16:a|16:a,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:l,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&$i(t.ssContent),ssFallback:t.ssFallback&&$i(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return l&&i&&Zs(f,l.clone(f)),f}function Qr(t=" ",e=0){return Lt(Po,null,t,e)}function Lg(t,e){const n=Lt(qa,null,t);return n.staticCount=e,n}function Ig(t="",e=!1){return e?(jt(),cp(mn,null,t)):Lt(mn,null,t)}function Yn(t){return t==null||typeof t=="boolean"?Lt(mn):it(t)?Lt(wn,null,t.slice()):lo(t)?ki(t):Lt(Po,null,String(t))}function ki(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:$i(t)}function pu(t,e){let n=0;const{shapeFlag:i}=t;if(e==null)e=null;else if(it(e))n=16;else if(typeof e=="object")if(i&65){const r=e.default;r&&(r._c&&(r._d=!1),pu(t,r()),r._c&&(r._d=!0));return}else{n=32;const r=e._;!r&&!$d(e)?e._ctx=Cn:r===3&&Cn&&(Cn.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else at(e)?(e={default:e,_ctx:Cn},n=32):(e=String(e),i&64?(n=16,e=[Qr(e)]):n=8);t.children=e,t.shapeFlag|=n}function Ug(...t){const e={};for(let n=0;n<t.length;n++){const i=t[n];for(const r in i)if(r==="class")e.class!==i.class&&(e.class=Mo([e.class,i.class]));else if(r==="style")e.style=nu([e.style,i.style]);else if(go(r)){const s=e[r],a=i[r];a&&s!==a&&!(it(s)&&s.includes(a))&&(e[r]=s?[].concat(s,a):a)}else r!==""&&(e[r]=i[r])}return e}function Xn(t,e,n,i=null){Gn(t,e,7,[n,i])}const Og=jd();let Ng=0;function Fg(t,e,n){const i=t.type,r=(e?e.appContext:t.appContext)||Og,s={uid:Ng++,vnode:t,type:i,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new o_(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Zd(i,r),emitsOptions:ap(i,r),emit:null,emitted:null,propsDefaults:At,inheritAttrs:i.inheritAttrs,ctx:At,data:At,props:At,attrs:At,slots:At,refs:At,setupState:At,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=e?e.root:s,s.emit=bg.bind(null,s),t.ce&&t.ce(s),s}let Yt=null;const Bg=()=>Yt||Cn;let co,Jl;{const t=So(),e=(n,i)=>{let r;return(r=t[n])||(r=t[n]=[]),r.push(i),s=>{r.length>1?r.forEach(a=>a(s)):r[0](s)}};co=e("__VUE_INSTANCE_SETTERS__",n=>Yt=n),Jl=e("__VUE_SSR_SETTERS__",n=>Qs=n)}const aa=t=>{const e=Yt;return co(t),t.scope.on(),()=>{t.scope.off(),co(e)}},af=()=>{Yt&&Yt.scope.off(),co(null)};function fp(t){return t.vnode.shapeFlag&4}let Qs=!1;function kg(t,e=!1,n=!1){e&&Jl(e);const{props:i,children:r}=t.vnode,s=fp(t);cg(t,i,s,e),dg(t,r,n);const a=s?zg(t,e):void 0;return e&&Jl(!1),a}function zg(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,tg);const{setup:i}=n;if(i){Qi();const r=t.setupContext=i.length>1?Vg(t):null,s=aa(t),a=sa(i,t,0,[t.props,r]),o=id(a);if(er(),s(),(o||t.sp)&&!Vs(t)&&zd(t),o){if(a.then(af,af),e)return a.then(l=>{of(t,l,e)}).catch(l=>{Eo(l,t,0)});t.asyncDep=a}else of(t,a,e)}else hp(t,e)}function of(t,e,n){at(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Rt(e)&&(t.setupState=Ad(e)),hp(t,n)}let lf;function hp(t,e,n){const i=t.type;if(!t.render){if(!e&&lf&&!i.render){const r=i.template||hu(t).template;if(r){const{isCustomElement:s,compilerOptions:a}=t.appContext.config,{delimiters:o,compilerOptions:l}=i,u=zt(zt({isCustomElement:s,delimiters:o},a),l);i.render=lf(r,u)}}t.render=i.render||Jn}{const r=aa(t);Qi();try{ng(t)}finally{er(),r()}}}const Hg={get(t,e){return nn(t,"get",""),t[e]}};function Vg(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,Hg),slots:t.slots,emit:t.emit,expose:e}}function mu(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(Ad(A_(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Gs)return Gs[n](t)},has(e,n){return n in e||n in Gs}})):t.proxy}function Gg(t,e=!0){return at(t)?t.displayName||t.name:t.name||e&&t.__name}function Wg(t){return at(t)&&"__vccOpts"in t}const Fn=(t,e)=>L_(t,e,Qs);function _u(t,e,n){const i=arguments.length;return i===2?Rt(e)&&!it(e)?lo(e)?Lt(t,null,[e]):Lt(t,e):Lt(t,null,e):(i>3?n=Array.prototype.slice.call(arguments,2):i===3&&lo(n)&&(n=[n]),Lt(t,e,n))}const Xg="3.5.12";/**
* @vue/runtime-dom v3.5.12
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Ql;const cf=typeof window<"u"&&window.trustedTypes;if(cf)try{Ql=cf.createPolicy("vue",{createHTML:t=>t})}catch{}const dp=Ql?t=>Ql.createHTML(t):t=>t,jg="http://www.w3.org/2000/svg",qg="http://www.w3.org/1998/Math/MathML",pi=typeof document<"u"?document:null,uf=pi&&pi.createElement("template"),Yg={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,i)=>{const r=e==="svg"?pi.createElementNS(jg,t):e==="mathml"?pi.createElementNS(qg,t):n?pi.createElement(t,{is:n}):pi.createElement(t);return t==="select"&&i&&i.multiple!=null&&r.setAttribute("multiple",i.multiple),r},createText:t=>pi.createTextNode(t),createComment:t=>pi.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>pi.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,i,r,s){const a=n?n.previousSibling:e.lastChild;if(r&&(r===s||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),n),!(r===s||!(r=r.nextSibling)););else{uf.innerHTML=dp(i==="svg"?`<svg>${t}</svg>`:i==="mathml"?`<math>${t}</math>`:t);const o=uf.content;if(i==="svg"||i==="mathml"){const l=o.firstChild;for(;l.firstChild;)o.appendChild(l.firstChild);o.removeChild(l)}e.insertBefore(o,n)}return[a?a.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},Ci="transition",Cs="animation",ea=Symbol("_vtc"),pp={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},$g=zt({},Od,pp),Kg=t=>(t.displayName="Transition",t.props=$g,t),Zg=Kg((t,{slots:e})=>_u(H_,Jg(t),e)),or=(t,e=[])=>{it(t)?t.forEach(n=>n(...e)):t&&t(...e)},ff=t=>t?it(t)?t.some(e=>e.length>1):t.length>1:!1;function Jg(t){const e={};for(const V in t)V in pp||(e[V]=t[V]);if(t.css===!1)return e;const{name:n="v",type:i,duration:r,enterFromClass:s=`${n}-enter-from`,enterActiveClass:a=`${n}-enter-active`,enterToClass:o=`${n}-enter-to`,appearFromClass:l=s,appearActiveClass:u=a,appearToClass:f=o,leaveFromClass:d=`${n}-leave-from`,leaveActiveClass:c=`${n}-leave-active`,leaveToClass:m=`${n}-leave-to`}=t,p=Qg(r),x=p&&p[0],_=p&&p[1],{onBeforeEnter:h,onEnter:b,onEnterCancelled:M,onLeave:A,onLeaveCancelled:G,onBeforeAppear:L=h,onAppear:B=b,onAppearCancelled:X=M}=e,Y=(V,W,Z)=>{lr(V,W?f:o),lr(V,W?u:a),Z&&Z()},E=(V,W)=>{V._isLeaving=!1,lr(V,d),lr(V,m),lr(V,c),W&&W()},C=V=>(W,Z)=>{const ne=V?B:b,se=()=>Y(W,V,Z);or(ne,[W,se]),hf(()=>{lr(W,V?l:s),Ri(W,V?f:o),ff(ne)||df(W,i,x,se)})};return zt(e,{onBeforeEnter(V){or(h,[V]),Ri(V,s),Ri(V,a)},onBeforeAppear(V){or(L,[V]),Ri(V,l),Ri(V,u)},onEnter:C(!1),onAppear:C(!0),onLeave(V,W){V._isLeaving=!0;const Z=()=>E(V,W);Ri(V,d),Ri(V,c),n0(),hf(()=>{V._isLeaving&&(lr(V,d),Ri(V,m),ff(A)||df(V,i,_,Z))}),or(A,[V,Z])},onEnterCancelled(V){Y(V,!1),or(M,[V])},onAppearCancelled(V){Y(V,!0),or(X,[V])},onLeaveCancelled(V){E(V),or(G,[V])}})}function Qg(t){if(t==null)return null;if(Rt(t))return[Qo(t.enter),Qo(t.leave)];{const e=Qo(t);return[e,e]}}function Qo(t){return e_(t)}function Ri(t,e){e.split(/\s+/).forEach(n=>n&&t.classList.add(n)),(t[ea]||(t[ea]=new Set)).add(e)}function lr(t,e){e.split(/\s+/).forEach(i=>i&&t.classList.remove(i));const n=t[ea];n&&(n.delete(e),n.size||(t[ea]=void 0))}function hf(t){requestAnimationFrame(()=>{requestAnimationFrame(t)})}let e0=0;function df(t,e,n,i){const r=t._endId=++e0,s=()=>{r===t._endId&&i()};if(n!=null)return setTimeout(s,n);const{type:a,timeout:o,propCount:l}=t0(t,e);if(!a)return i();const u=a+"end";let f=0;const d=()=>{t.removeEventListener(u,c),s()},c=m=>{m.target===t&&++f>=l&&d()};setTimeout(()=>{f<l&&d()},o+1),t.addEventListener(u,c)}function t0(t,e){const n=window.getComputedStyle(t),i=p=>(n[p]||"").split(", "),r=i(`${Ci}Delay`),s=i(`${Ci}Duration`),a=pf(r,s),o=i(`${Cs}Delay`),l=i(`${Cs}Duration`),u=pf(o,l);let f=null,d=0,c=0;e===Ci?a>0&&(f=Ci,d=a,c=s.length):e===Cs?u>0&&(f=Cs,d=u,c=l.length):(d=Math.max(a,u),f=d>0?a>u?Ci:Cs:null,c=f?f===Ci?s.length:l.length:0);const m=f===Ci&&/\b(transform|all)(,|$)/.test(i(`${Ci}Property`).toString());return{type:f,timeout:d,propCount:c,hasTransform:m}}function pf(t,e){for(;t.length<e.length;)t=t.concat(t);return Math.max(...e.map((n,i)=>mf(n)+mf(t[i])))}function mf(t){return t==="auto"?0:Number(t.slice(0,-1).replace(",","."))*1e3}function n0(){return document.body.offsetHeight}function i0(t,e,n){const i=t[ea];i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const _f=Symbol("_vod"),r0=Symbol("_vsh"),s0=Symbol(""),a0=/(^|;)\s*display\s*:/;function o0(t,e,n){const i=t.style,r=Bt(n);let s=!1;if(n&&!r){if(e)if(Bt(e))for(const a of e.split(";")){const o=a.slice(0,a.indexOf(":")).trim();n[o]==null&&$a(i,o,"")}else for(const a in e)n[a]==null&&$a(i,a,"");for(const a in n)a==="display"&&(s=!0),$a(i,a,n[a])}else if(r){if(e!==n){const a=i[s0];a&&(n+=";"+a),i.cssText=n,s=a0.test(n)}}else e&&t.removeAttribute("style");_f in t&&(t[_f]=s?i.display:"",t[r0]&&(i.display="none"))}const gf=/\s*!important$/;function $a(t,e,n){if(it(n))n.forEach(i=>$a(t,e,i));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const i=l0(t,e);gf.test(n)?t.setProperty(Ur(i),n.replace(gf,""),"important"):t[i]=n}}const vf=["Webkit","Moz","ms"],el={};function l0(t,e){const n=el[e];if(n)return n;let i=Ln(e);if(i!=="filter"&&i in t)return el[e]=i;i=yo(i);for(let r=0;r<vf.length;r++){const s=vf[r]+i;if(s in t)return el[e]=s}return e}const xf="http://www.w3.org/1999/xlink";function yf(t,e,n,i,r,s=a_(e)){i&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(xf,e.slice(6,e.length)):t.setAttributeNS(xf,e,n):n==null||s&&!od(n)?t.removeAttribute(e):t.setAttribute(e,s?"":Ji(n)?String(n):n)}function Sf(t,e,n,i,r){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?dp(n):n);return}const s=t.tagName;if(e==="value"&&s!=="PROGRESS"&&!s.includes("-")){const o=s==="OPTION"?t.getAttribute("value")||"":t.value,l=n==null?t.type==="checkbox"?"on":"":String(n);(o!==l||!("_value"in t))&&(t.value=l),n==null&&t.removeAttribute(e),t._value=n;return}let a=!1;if(n===""||n==null){const o=typeof t[e];o==="boolean"?n=od(n):n==null&&o==="string"?(n="",a=!0):o==="number"&&(n=0,a=!0)}try{t[e]=n}catch{}a&&t.removeAttribute(r||e)}function c0(t,e,n,i){t.addEventListener(e,n,i)}function u0(t,e,n,i){t.removeEventListener(e,n,i)}const Mf=Symbol("_vei");function f0(t,e,n,i,r=null){const s=t[Mf]||(t[Mf]={}),a=s[e];if(i&&a)a.value=i;else{const[o,l]=h0(e);if(i){const u=s[e]=m0(i,r);c0(t,o,u,l)}else a&&(u0(t,o,a,l),s[e]=void 0)}}const bf=/(?:Once|Passive|Capture)$/;function h0(t){let e;if(bf.test(t)){e={};let i;for(;i=t.match(bf);)t=t.slice(0,t.length-i[0].length),e[i[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Ur(t.slice(2)),e]}let tl=0;const d0=Promise.resolve(),p0=()=>tl||(d0.then(()=>tl=0),tl=Date.now());function m0(t,e){const n=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=n.attached)return;Gn(_0(i,n.value),e,5,[i])};return n.value=t,n.attached=p0(),n}function _0(t,e){if(it(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(i=>r=>!r._stopped&&i&&i(r))}else return e}const Tf=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,g0=(t,e,n,i,r,s)=>{const a=r==="svg";e==="class"?i0(t,i,a):e==="style"?o0(t,n,i):go(e)?Qc(e)||f0(t,e,n,i,s):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):v0(t,e,i,a))?(Sf(t,e,i),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&yf(t,e,i,a,s,e!=="value")):t._isVueCE&&(/[A-Z]/.test(e)||!Bt(i))?Sf(t,Ln(e),i,s,e):(e==="true-value"?t._trueValue=i:e==="false-value"&&(t._falseValue=i),yf(t,e,i,a))};function v0(t,e,n,i){if(i)return!!(e==="innerHTML"||e==="textContent"||e in t&&Tf(e)&&at(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const r=t.tagName;if(r==="IMG"||r==="VIDEO"||r==="CANVAS"||r==="SOURCE")return!1}return Tf(e)&&Bt(n)?!1:e in t}const x0=["ctrl","shift","alt","meta"],y0={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>x0.some(n=>t[`${n}Key`]&&!e.includes(n))},S0=(t,e)=>{const n=t._withMods||(t._withMods={}),i=e.join(".");return n[i]||(n[i]=(r,...s)=>{for(let a=0;a<e.length;a++){const o=y0[e[a]];if(o&&o(r,e))return}return t(r,...s)})},M0=zt({patchProp:g0},Yg);let Ef;function b0(){return Ef||(Ef=mg(M0))}const T0=(...t)=>{const e=b0().createApp(...t),{mount:n}=e;return e.mount=i=>{const r=w0(i);if(!r)return;const s=e._component;!at(s)&&!s.render&&!s.template&&(s.template=r.innerHTML),r.nodeType===1&&(r.textContent="");const a=n(r,!1,E0(r));return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),a},e};function E0(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function w0(t){return Bt(t)?document.querySelector(t):t}const oa=(t,e)=>{const n=t.__vccOpts||t;for(const[i,r]of e)n[i]=r;return n},A0={class:"fixed z-20 w-full justify-center items-center flex"},C0={class:"relative w-2/3 flex justify-between items-center px-4 py-4 md:py-10"},R0={key:"burger",class:"w-8 h-8 text-secondary",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},P0={key:"close",class:"w-8 h-8 text-secondary",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},D0={class:"nav hidden md:flex md:flex-row gap-6 items-center"},L0=["href"],I0=["href"],U0={__name:"Nav",setup(t){const e="/YangPortfolioPublic/docs/",n=Dr(!1),i=()=>{n.value=!n.value};return(r,s)=>{const a=fu("router-link");return jt(),sn("div",A0,[mt("nav",C0,[s[6]||(s[6]=mt("div",{id:"brand",class:"text-secondary font-bold"},[mt("a",{href:"https://www.linkedin.com/in/tan-wei-yang-396305179/",target:"_blank",rel:"noopener noreferrer"}," Wei Yang ")],-1)),mt("button",{onClick:i,class:"block md:hidden focus:outline-none transition duration-300 ease-out"},[n.value?(jt(),sn("svg",P0,s[1]||(s[1]=[mt("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M6 18L18 6M6 6l12 12"},null,-1)]))):(jt(),sn("svg",R0,s[0]||(s[0]=[mt("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M4 6h16M4 12h16m-7 6h7"},null,-1)])))]),mt("div",D0,[Lt(a,{to:"/",class:"hover:text-secondary transition-colors"},{default:xr(()=>s[2]||(s[2]=[Qr("Home")])),_:1}),Lt(a,{to:"/about",class:"hover:text-secondary transition-colors"},{default:xr(()=>s[3]||(s[3]=[Qr("About")])),_:1}),mt("a",{href:ji(e),class:"hover:text-secondary transition-colors"},"Portfolios",8,L0)]),Lt(Zg,{name:"menu-fade"},{default:xr(()=>[n.value?(jt(),sn("div",{key:0,class:"fixed inset-0 z-40 bg-black bg-opacity-90 flex flex-col items-center justify-center",onClick:S0(i,["self"])},[Lt(a,{onClick:i,to:"/",class:"text-white text-3xl py-4"},{default:xr(()=>s[4]||(s[4]=[Qr("Home")])),_:1}),Lt(a,{onClick:i,to:"/about",class:"text-white text-3xl py-4"},{default:xr(()=>s[5]||(s[5]=[Qr("About")])),_:1}),mt("a",{onClick:i,href:ji(e),class:"text-white text-3xl py-4"},"Portfolios",8,I0)])):Ig("",!0)]),_:1})])])}}},O0=oa(U0,[["__scopeId","data-v-6b39d5f4"]]);/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const gu="169",N0=0,wf=1,F0=2,mp=1,B0=2,di=3,Ki=0,_n=1,_i=2,qi=0,Ar=1,Af=2,Cf=3,Rf=4,k0=5,Sr=100,z0=101,H0=102,V0=103,G0=104,W0=200,X0=201,j0=202,q0=203,ec=204,tc=205,Y0=206,$0=207,K0=208,Z0=209,J0=210,Q0=211,ev=212,tv=213,nv=214,nc=0,ic=1,rc=2,fs=3,sc=4,ac=5,oc=6,lc=7,_p=0,iv=1,rv=2,Yi=0,sv=1,av=2,ov=3,lv=4,cv=5,uv=6,fv=7,gp=300,hs=301,ds=302,cc=303,uc=304,Do=306,fc=1e3,br=1001,hc=1002,Rn=1003,hv=1004,ya=1005,hn=1006,nl=1007,Tr=1008,Mi=1009,vp=1010,xp=1011,ta=1012,vu=1013,Lr=1014,gi=1015,la=1016,xu=1017,yu=1018,ps=1020,yp=35902,Sp=1021,Mp=1022,Hn=1023,bp=1024,Tp=1025,os=1026,ms=1027,Ep=1028,Su=1029,wp=1030,Mu=1031,bu=1033,Ka=33776,Za=33777,Ja=33778,Qa=33779,dc=35840,pc=35841,mc=35842,_c=35843,gc=36196,vc=37492,xc=37496,yc=37808,Sc=37809,Mc=37810,bc=37811,Tc=37812,Ec=37813,wc=37814,Ac=37815,Cc=37816,Rc=37817,Pc=37818,Dc=37819,Lc=37820,Ic=37821,eo=36492,Uc=36494,Oc=36495,Ap=36283,Nc=36284,Fc=36285,Bc=36286,dv=3200,pv=3201,mv=0,_v=1,Gi="",qn="srgb",tr="srgb-linear",Tu="display-p3",Lo="display-p3-linear",uo="linear",Ct="srgb",fo="rec709",ho="p3",Fr=7680,Pf=519,gv=512,vv=513,xv=514,Cp=515,yv=516,Sv=517,Mv=518,bv=519,Df=35044,Lf="300 es",vi=2e3,po=2001;class ys{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const Jt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],il=Math.PI/180,kc=180/Math.PI;function ca(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Jt[t&255]+Jt[t>>8&255]+Jt[t>>16&255]+Jt[t>>24&255]+"-"+Jt[e&255]+Jt[e>>8&255]+"-"+Jt[e>>16&15|64]+Jt[e>>24&255]+"-"+Jt[n&63|128]+Jt[n>>8&255]+"-"+Jt[n>>16&255]+Jt[n>>24&255]+Jt[i&255]+Jt[i>>8&255]+Jt[i>>16&255]+Jt[i>>24&255]).toLowerCase()}function pn(t,e,n){return Math.max(e,Math.min(n,t))}function Tv(t,e){return(t%e+e)%e}function rl(t,e,n){return(1-n)*t+n*e}function Rs(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function dn(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}class yt{constructor(e=0,n=0){yt.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(pn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*r+e.x,this.y=s*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ut{constructor(e,n,i,r,s,a,o,l,u){ut.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,a,o,l,u)}set(e,n,i,r,s,a,o,l,u){const f=this.elements;return f[0]=e,f[1]=r,f[2]=o,f[3]=n,f[4]=s,f[5]=l,f[6]=i,f[7]=a,f[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,a=i[0],o=i[3],l=i[6],u=i[1],f=i[4],d=i[7],c=i[2],m=i[5],p=i[8],x=r[0],_=r[3],h=r[6],b=r[1],M=r[4],A=r[7],G=r[2],L=r[5],B=r[8];return s[0]=a*x+o*b+l*G,s[3]=a*_+o*M+l*L,s[6]=a*h+o*A+l*B,s[1]=u*x+f*b+d*G,s[4]=u*_+f*M+d*L,s[7]=u*h+f*A+d*B,s[2]=c*x+m*b+p*G,s[5]=c*_+m*M+p*L,s[8]=c*h+m*A+p*B,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],u=e[7],f=e[8];return n*a*f-n*o*u-i*s*f+i*o*l+r*s*u-r*a*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],u=e[7],f=e[8],d=f*a-o*u,c=o*l-f*s,m=u*s-a*l,p=n*d+i*c+r*m;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/p;return e[0]=d*x,e[1]=(r*u-f*i)*x,e[2]=(o*i-r*a)*x,e[3]=c*x,e[4]=(f*n-r*l)*x,e[5]=(r*s-o*n)*x,e[6]=m*x,e[7]=(i*l-u*n)*x,e[8]=(a*n-i*s)*x,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,a,o){const l=Math.cos(s),u=Math.sin(s);return this.set(i*l,i*u,-i*(l*a+u*o)+a+e,-r*u,r*l,-r*(-u*a+l*o)+o+n,0,0,1),this}scale(e,n){return this.premultiply(sl.makeScale(e,n)),this}rotate(e){return this.premultiply(sl.makeRotation(-e)),this}translate(e,n){return this.premultiply(sl.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const sl=new ut;function Rp(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function na(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function Ev(){const t=na("canvas");return t.style.display="block",t}const If={};function to(t){t in If||(If[t]=!0)}function wv(t,e,n){return new Promise(function(i,r){function s(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:r();break;case t.TIMEOUT_EXPIRED:setTimeout(s,n);break;default:i()}}setTimeout(s,n)})}function Av(t){const e=t.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function Cv(t){const e=t.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const Uf=new ut().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Of=new ut().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Ps={[tr]:{transfer:uo,primaries:fo,luminanceCoefficients:[.2126,.7152,.0722],toReference:t=>t,fromReference:t=>t},[qn]:{transfer:Ct,primaries:fo,luminanceCoefficients:[.2126,.7152,.0722],toReference:t=>t.convertSRGBToLinear(),fromReference:t=>t.convertLinearToSRGB()},[Lo]:{transfer:uo,primaries:ho,luminanceCoefficients:[.2289,.6917,.0793],toReference:t=>t.applyMatrix3(Of),fromReference:t=>t.applyMatrix3(Uf)},[Tu]:{transfer:Ct,primaries:ho,luminanceCoefficients:[.2289,.6917,.0793],toReference:t=>t.convertSRGBToLinear().applyMatrix3(Of),fromReference:t=>t.applyMatrix3(Uf).convertLinearToSRGB()}},Rv=new Set([tr,Lo]),xt={enabled:!0,_workingColorSpace:tr,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(t){if(!Rv.has(t))throw new Error(`Unsupported working color space, "${t}".`);this._workingColorSpace=t},convert:function(t,e,n){if(this.enabled===!1||e===n||!e||!n)return t;const i=Ps[e].toReference,r=Ps[n].fromReference;return r(i(t))},fromWorkingColorSpace:function(t,e){return this.convert(t,this._workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this._workingColorSpace)},getPrimaries:function(t){return Ps[t].primaries},getTransfer:function(t){return t===Gi?uo:Ps[t].transfer},getLuminanceCoefficients:function(t,e=this._workingColorSpace){return t.fromArray(Ps[e].luminanceCoefficients)}};function ls(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function al(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let Br;class Pv{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Br===void 0&&(Br=na("canvas")),Br.width=e.width,Br.height=e.height;const i=Br.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=Br}return n.width>2048||n.height>2048?n.toDataURL("image/jpeg",.6):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=na("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=ls(s[a]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(ls(n[i]/255)*255):n[i]=ls(n[i]);return{data:n,width:e.width,height:e.height}}else return e}}let Dv=0;class Pp{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Dv++}),this.uuid=ca(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(ol(r[a].image)):s.push(ol(r[a]))}else s=ol(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function ol(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?Pv.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:{}}let Lv=0;class $t extends ys{constructor(e=$t.DEFAULT_IMAGE,n=$t.DEFAULT_MAPPING,i=br,r=br,s=hn,a=Tr,o=Hn,l=Mi,u=$t.DEFAULT_ANISOTROPY,f=Gi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Lv++}),this.uuid=ca(),this.name="",this.source=new Pp(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=u,this.format=o,this.internalFormat=null,this.type=l,this.offset=new yt(0,0),this.repeat=new yt(1,1),this.center=new yt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ut,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=f,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==gp)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case fc:e.x=e.x-Math.floor(e.x);break;case br:e.x=e.x<0?0:1;break;case hc:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case fc:e.y=e.y-Math.floor(e.y);break;case br:e.y=e.y<0?0:1;break;case hc:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}$t.DEFAULT_IMAGE=null;$t.DEFAULT_MAPPING=gp;$t.DEFAULT_ANISOTROPY=1;class Nt{constructor(e=0,n=0,i=0,r=1){Nt.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*n+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*n+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*n+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*n+a[7]*i+a[11]*r+a[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,u=l[0],f=l[4],d=l[8],c=l[1],m=l[5],p=l[9],x=l[2],_=l[6],h=l[10];if(Math.abs(f-c)<.01&&Math.abs(d-x)<.01&&Math.abs(p-_)<.01){if(Math.abs(f+c)<.1&&Math.abs(d+x)<.1&&Math.abs(p+_)<.1&&Math.abs(u+m+h-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const M=(u+1)/2,A=(m+1)/2,G=(h+1)/2,L=(f+c)/4,B=(d+x)/4,X=(p+_)/4;return M>A&&M>G?M<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(M),r=L/i,s=B/i):A>G?A<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(A),i=L/r,s=X/r):G<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(G),i=B/s,r=X/s),this.set(i,r,s,n),this}let b=Math.sqrt((_-p)*(_-p)+(d-x)*(d-x)+(c-f)*(c-f));return Math.abs(b)<.001&&(b=1),this.x=(_-p)/b,this.y=(d-x)/b,this.z=(c-f)/b,this.w=Math.acos((u+m+h-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Iv extends ys{constructor(e=1,n=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new Nt(0,0,e,n),this.scissorTest=!1,this.viewport=new Nt(0,0,e,n);const r={width:e,height:n,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:hn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const s=new $t(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const a=i.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new Pp(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ir extends Iv{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class Dp extends $t{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Rn,this.minFilter=Rn,this.wrapR=br,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Uv extends $t{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Rn,this.minFilter=Rn,this.wrapR=br,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ua{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,a,o){let l=i[r+0],u=i[r+1],f=i[r+2],d=i[r+3];const c=s[a+0],m=s[a+1],p=s[a+2],x=s[a+3];if(o===0){e[n+0]=l,e[n+1]=u,e[n+2]=f,e[n+3]=d;return}if(o===1){e[n+0]=c,e[n+1]=m,e[n+2]=p,e[n+3]=x;return}if(d!==x||l!==c||u!==m||f!==p){let _=1-o;const h=l*c+u*m+f*p+d*x,b=h>=0?1:-1,M=1-h*h;if(M>Number.EPSILON){const G=Math.sqrt(M),L=Math.atan2(G,h*b);_=Math.sin(_*L)/G,o=Math.sin(o*L)/G}const A=o*b;if(l=l*_+c*A,u=u*_+m*A,f=f*_+p*A,d=d*_+x*A,_===1-o){const G=1/Math.sqrt(l*l+u*u+f*f+d*d);l*=G,u*=G,f*=G,d*=G}}e[n]=l,e[n+1]=u,e[n+2]=f,e[n+3]=d}static multiplyQuaternionsFlat(e,n,i,r,s,a){const o=i[r],l=i[r+1],u=i[r+2],f=i[r+3],d=s[a],c=s[a+1],m=s[a+2],p=s[a+3];return e[n]=o*p+f*d+l*m-u*c,e[n+1]=l*p+f*c+u*d-o*m,e[n+2]=u*p+f*m+o*c-l*d,e[n+3]=f*p-o*d-l*c-u*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,u=o(i/2),f=o(r/2),d=o(s/2),c=l(i/2),m=l(r/2),p=l(s/2);switch(a){case"XYZ":this._x=c*f*d+u*m*p,this._y=u*m*d-c*f*p,this._z=u*f*p+c*m*d,this._w=u*f*d-c*m*p;break;case"YXZ":this._x=c*f*d+u*m*p,this._y=u*m*d-c*f*p,this._z=u*f*p-c*m*d,this._w=u*f*d+c*m*p;break;case"ZXY":this._x=c*f*d-u*m*p,this._y=u*m*d+c*f*p,this._z=u*f*p+c*m*d,this._w=u*f*d-c*m*p;break;case"ZYX":this._x=c*f*d-u*m*p,this._y=u*m*d+c*f*p,this._z=u*f*p-c*m*d,this._w=u*f*d+c*m*p;break;case"YZX":this._x=c*f*d+u*m*p,this._y=u*m*d+c*f*p,this._z=u*f*p-c*m*d,this._w=u*f*d-c*m*p;break;case"XZY":this._x=c*f*d-u*m*p,this._y=u*m*d-c*f*p,this._z=u*f*p+c*m*d,this._w=u*f*d+c*m*p;break;default:}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],a=n[1],o=n[5],l=n[9],u=n[2],f=n[6],d=n[10],c=i+o+d;if(c>0){const m=.5/Math.sqrt(c+1);this._w=.25/m,this._x=(f-l)*m,this._y=(s-u)*m,this._z=(a-r)*m}else if(i>o&&i>d){const m=2*Math.sqrt(1+i-o-d);this._w=(f-l)/m,this._x=.25*m,this._y=(r+a)/m,this._z=(s+u)/m}else if(o>d){const m=2*Math.sqrt(1+o-i-d);this._w=(s-u)/m,this._x=(r+a)/m,this._y=.25*m,this._z=(l+f)/m}else{const m=2*Math.sqrt(1+d-i-o);this._w=(a-r)/m,this._x=(s+u)/m,this._y=(l+f)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(pn(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,a=e._w,o=n._x,l=n._y,u=n._z,f=n._w;return this._x=i*f+a*o+r*u-s*l,this._y=r*f+a*l+s*o-i*u,this._z=s*f+a*u+i*l-r*o,this._w=a*f-i*o-r*l-s*u,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,a=this._w;let o=a*e._w+i*e._x+r*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=i,this._y=r,this._z=s,this;const l=1-o*o;if(l<=Number.EPSILON){const m=1-n;return this._w=m*a+n*this._w,this._x=m*i+n*this._x,this._y=m*r+n*this._y,this._z=m*s+n*this._z,this.normalize(),this}const u=Math.sqrt(l),f=Math.atan2(u,o),d=Math.sin((1-n)*f)/u,c=Math.sin(n*f)/u;return this._w=a*d+this._w*c,this._x=i*d+this._x*c,this._y=r*d+this._y*c,this._z=s*d+this._z*c,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(n),s*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class ve{constructor(e=0,n=0,i=0){ve.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(Nf.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(Nf.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,a=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,a=e.y,o=e.z,l=e.w,u=2*(a*r-o*i),f=2*(o*n-s*r),d=2*(s*i-a*n);return this.x=n+l*u+a*d-o*f,this.y=i+l*f+o*u-s*d,this.z=r+l*d+s*f-a*u,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,a=n.x,o=n.y,l=n.z;return this.x=r*l-s*o,this.y=s*a-i*l,this.z=i*o-r*a,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return ll.copy(this).projectOnVector(e),this.sub(ll)}reflect(e){return this.sub(ll.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(pn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ll=new ve,Nf=new ua;class fa{constructor(e=new ve(1/0,1/0,1/0),n=new ve(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(Un.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(Un.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=Un.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Un):Un.fromBufferAttribute(s,a),Un.applyMatrix4(e.matrixWorld),this.expandByPoint(Un);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Sa.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Sa.copy(i.boundingBox)),Sa.applyMatrix4(e.matrixWorld),this.union(Sa)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Un),Un.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ds),Ma.subVectors(this.max,Ds),kr.subVectors(e.a,Ds),zr.subVectors(e.b,Ds),Hr.subVectors(e.c,Ds),Pi.subVectors(zr,kr),Di.subVectors(Hr,zr),cr.subVectors(kr,Hr);let n=[0,-Pi.z,Pi.y,0,-Di.z,Di.y,0,-cr.z,cr.y,Pi.z,0,-Pi.x,Di.z,0,-Di.x,cr.z,0,-cr.x,-Pi.y,Pi.x,0,-Di.y,Di.x,0,-cr.y,cr.x,0];return!cl(n,kr,zr,Hr,Ma)||(n=[1,0,0,0,1,0,0,0,1],!cl(n,kr,zr,Hr,Ma))?!1:(ba.crossVectors(Pi,Di),n=[ba.x,ba.y,ba.z],cl(n,kr,zr,Hr,Ma))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Un).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Un).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(oi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),oi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),oi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),oi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),oi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),oi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),oi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),oi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(oi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const oi=[new ve,new ve,new ve,new ve,new ve,new ve,new ve,new ve],Un=new ve,Sa=new fa,kr=new ve,zr=new ve,Hr=new ve,Pi=new ve,Di=new ve,cr=new ve,Ds=new ve,Ma=new ve,ba=new ve,ur=new ve;function cl(t,e,n,i,r){for(let s=0,a=t.length-3;s<=a;s+=3){ur.fromArray(t,s);const o=r.x*Math.abs(ur.x)+r.y*Math.abs(ur.y)+r.z*Math.abs(ur.z),l=e.dot(ur),u=n.dot(ur),f=i.dot(ur);if(Math.max(-Math.max(l,u,f),Math.min(l,u,f))>o)return!1}return!0}const Ov=new fa,Ls=new ve,ul=new ve;class Eu{constructor(e=new ve,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):Ov.setFromPoints(e).getCenter(i);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ls.subVectors(e,this.center);const n=Ls.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(Ls,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ul.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ls.copy(e.center).add(ul)),this.expandByPoint(Ls.copy(e.center).sub(ul))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const li=new ve,fl=new ve,Ta=new ve,Li=new ve,hl=new ve,Ea=new ve,dl=new ve;class Lp{constructor(e=new ve,n=new ve(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,li)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=li.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(li.copy(this.origin).addScaledVector(this.direction,n),li.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){fl.copy(e).add(n).multiplyScalar(.5),Ta.copy(n).sub(e).normalize(),Li.copy(this.origin).sub(fl);const s=e.distanceTo(n)*.5,a=-this.direction.dot(Ta),o=Li.dot(this.direction),l=-Li.dot(Ta),u=Li.lengthSq(),f=Math.abs(1-a*a);let d,c,m,p;if(f>0)if(d=a*l-o,c=a*o-l,p=s*f,d>=0)if(c>=-p)if(c<=p){const x=1/f;d*=x,c*=x,m=d*(d+a*c+2*o)+c*(a*d+c+2*l)+u}else c=s,d=Math.max(0,-(a*c+o)),m=-d*d+c*(c+2*l)+u;else c=-s,d=Math.max(0,-(a*c+o)),m=-d*d+c*(c+2*l)+u;else c<=-p?(d=Math.max(0,-(-a*s+o)),c=d>0?-s:Math.min(Math.max(-s,-l),s),m=-d*d+c*(c+2*l)+u):c<=p?(d=0,c=Math.min(Math.max(-s,-l),s),m=c*(c+2*l)+u):(d=Math.max(0,-(a*s+o)),c=d>0?s:Math.min(Math.max(-s,-l),s),m=-d*d+c*(c+2*l)+u);else c=a>0?-s:s,d=Math.max(0,-(a*c+o)),m=-d*d+c*(c+2*l)+u;return i&&i.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(fl).addScaledVector(Ta,c),m}intersectSphere(e,n){li.subVectors(e.center,this.origin);const i=li.dot(this.direction),r=li.dot(li)-i*i,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,n):this.at(o,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,a,o,l;const u=1/this.direction.x,f=1/this.direction.y,d=1/this.direction.z,c=this.origin;return u>=0?(i=(e.min.x-c.x)*u,r=(e.max.x-c.x)*u):(i=(e.max.x-c.x)*u,r=(e.min.x-c.x)*u),f>=0?(s=(e.min.y-c.y)*f,a=(e.max.y-c.y)*f):(s=(e.max.y-c.y)*f,a=(e.min.y-c.y)*f),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),d>=0?(o=(e.min.z-c.z)*d,l=(e.max.z-c.z)*d):(o=(e.max.z-c.z)*d,l=(e.min.z-c.z)*d),i>l||o>r)||((o>i||i!==i)&&(i=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,li)!==null}intersectTriangle(e,n,i,r,s){hl.subVectors(n,e),Ea.subVectors(i,e),dl.crossVectors(hl,Ea);let a=this.direction.dot(dl),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Li.subVectors(this.origin,e);const l=o*this.direction.dot(Ea.crossVectors(Li,Ea));if(l<0)return null;const u=o*this.direction.dot(hl.cross(Li));if(u<0||l+u>a)return null;const f=-o*Li.dot(dl);return f<0?null:this.at(f/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ft{constructor(e,n,i,r,s,a,o,l,u,f,d,c,m,p,x,_){Ft.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,a,o,l,u,f,d,c,m,p,x,_)}set(e,n,i,r,s,a,o,l,u,f,d,c,m,p,x,_){const h=this.elements;return h[0]=e,h[4]=n,h[8]=i,h[12]=r,h[1]=s,h[5]=a,h[9]=o,h[13]=l,h[2]=u,h[6]=f,h[10]=d,h[14]=c,h[3]=m,h[7]=p,h[11]=x,h[15]=_,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ft().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/Vr.setFromMatrixColumn(e,0).length(),s=1/Vr.setFromMatrixColumn(e,1).length(),a=1/Vr.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*a,n[9]=i[9]*a,n[10]=i[10]*a,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(r),u=Math.sin(r),f=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){const c=a*f,m=a*d,p=o*f,x=o*d;n[0]=l*f,n[4]=-l*d,n[8]=u,n[1]=m+p*u,n[5]=c-x*u,n[9]=-o*l,n[2]=x-c*u,n[6]=p+m*u,n[10]=a*l}else if(e.order==="YXZ"){const c=l*f,m=l*d,p=u*f,x=u*d;n[0]=c+x*o,n[4]=p*o-m,n[8]=a*u,n[1]=a*d,n[5]=a*f,n[9]=-o,n[2]=m*o-p,n[6]=x+c*o,n[10]=a*l}else if(e.order==="ZXY"){const c=l*f,m=l*d,p=u*f,x=u*d;n[0]=c-x*o,n[4]=-a*d,n[8]=p+m*o,n[1]=m+p*o,n[5]=a*f,n[9]=x-c*o,n[2]=-a*u,n[6]=o,n[10]=a*l}else if(e.order==="ZYX"){const c=a*f,m=a*d,p=o*f,x=o*d;n[0]=l*f,n[4]=p*u-m,n[8]=c*u+x,n[1]=l*d,n[5]=x*u+c,n[9]=m*u-p,n[2]=-u,n[6]=o*l,n[10]=a*l}else if(e.order==="YZX"){const c=a*l,m=a*u,p=o*l,x=o*u;n[0]=l*f,n[4]=x-c*d,n[8]=p*d+m,n[1]=d,n[5]=a*f,n[9]=-o*f,n[2]=-u*f,n[6]=m*d+p,n[10]=c-x*d}else if(e.order==="XZY"){const c=a*l,m=a*u,p=o*l,x=o*u;n[0]=l*f,n[4]=-d,n[8]=u*f,n[1]=c*d+x,n[5]=a*f,n[9]=m*d-p,n[2]=p*d-m,n[6]=o*f,n[10]=x*d+c}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Nv,e,Fv)}lookAt(e,n,i){const r=this.elements;return xn.subVectors(e,n),xn.lengthSq()===0&&(xn.z=1),xn.normalize(),Ii.crossVectors(i,xn),Ii.lengthSq()===0&&(Math.abs(i.z)===1?xn.x+=1e-4:xn.z+=1e-4,xn.normalize(),Ii.crossVectors(i,xn)),Ii.normalize(),wa.crossVectors(xn,Ii),r[0]=Ii.x,r[4]=wa.x,r[8]=xn.x,r[1]=Ii.y,r[5]=wa.y,r[9]=xn.y,r[2]=Ii.z,r[6]=wa.z,r[10]=xn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,a=i[0],o=i[4],l=i[8],u=i[12],f=i[1],d=i[5],c=i[9],m=i[13],p=i[2],x=i[6],_=i[10],h=i[14],b=i[3],M=i[7],A=i[11],G=i[15],L=r[0],B=r[4],X=r[8],Y=r[12],E=r[1],C=r[5],V=r[9],W=r[13],Z=r[2],ne=r[6],se=r[10],de=r[14],te=r[3],Le=r[7],Fe=r[11],ze=r[15];return s[0]=a*L+o*E+l*Z+u*te,s[4]=a*B+o*C+l*ne+u*Le,s[8]=a*X+o*V+l*se+u*Fe,s[12]=a*Y+o*W+l*de+u*ze,s[1]=f*L+d*E+c*Z+m*te,s[5]=f*B+d*C+c*ne+m*Le,s[9]=f*X+d*V+c*se+m*Fe,s[13]=f*Y+d*W+c*de+m*ze,s[2]=p*L+x*E+_*Z+h*te,s[6]=p*B+x*C+_*ne+h*Le,s[10]=p*X+x*V+_*se+h*Fe,s[14]=p*Y+x*W+_*de+h*ze,s[3]=b*L+M*E+A*Z+G*te,s[7]=b*B+M*C+A*ne+G*Le,s[11]=b*X+M*V+A*se+G*Fe,s[15]=b*Y+M*W+A*de+G*ze,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],a=e[1],o=e[5],l=e[9],u=e[13],f=e[2],d=e[6],c=e[10],m=e[14],p=e[3],x=e[7],_=e[11],h=e[15];return p*(+s*l*d-r*u*d-s*o*c+i*u*c+r*o*m-i*l*m)+x*(+n*l*m-n*u*c+s*a*c-r*a*m+r*u*f-s*l*f)+_*(+n*u*d-n*o*m-s*a*d+i*a*m+s*o*f-i*u*f)+h*(-r*o*f-n*l*d+n*o*c+r*a*d-i*a*c+i*l*f)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],u=e[7],f=e[8],d=e[9],c=e[10],m=e[11],p=e[12],x=e[13],_=e[14],h=e[15],b=d*_*u-x*c*u+x*l*m-o*_*m-d*l*h+o*c*h,M=p*c*u-f*_*u-p*l*m+a*_*m+f*l*h-a*c*h,A=f*x*u-p*d*u+p*o*m-a*x*m-f*o*h+a*d*h,G=p*d*l-f*x*l-p*o*c+a*x*c+f*o*_-a*d*_,L=n*b+i*M+r*A+s*G;if(L===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const B=1/L;return e[0]=b*B,e[1]=(x*c*s-d*_*s-x*r*m+i*_*m+d*r*h-i*c*h)*B,e[2]=(o*_*s-x*l*s+x*r*u-i*_*u-o*r*h+i*l*h)*B,e[3]=(d*l*s-o*c*s-d*r*u+i*c*u+o*r*m-i*l*m)*B,e[4]=M*B,e[5]=(f*_*s-p*c*s+p*r*m-n*_*m-f*r*h+n*c*h)*B,e[6]=(p*l*s-a*_*s-p*r*u+n*_*u+a*r*h-n*l*h)*B,e[7]=(a*c*s-f*l*s+f*r*u-n*c*u-a*r*m+n*l*m)*B,e[8]=A*B,e[9]=(p*d*s-f*x*s-p*i*m+n*x*m+f*i*h-n*d*h)*B,e[10]=(a*x*s-p*o*s+p*i*u-n*x*u-a*i*h+n*o*h)*B,e[11]=(f*o*s-a*d*s-f*i*u+n*d*u+a*i*m-n*o*m)*B,e[12]=G*B,e[13]=(f*x*r-p*d*r+p*i*c-n*x*c-f*i*_+n*d*_)*B,e[14]=(p*o*r-a*x*r-p*i*l+n*x*l+a*i*_-n*o*_)*B,e[15]=(a*d*r-f*o*r+f*i*l-n*d*l-a*i*c+n*o*c)*B,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,a=e.x,o=e.y,l=e.z,u=s*a,f=s*o;return this.set(u*a+i,u*o-r*l,u*l+r*o,0,u*o+r*l,f*o+i,f*l-r*a,0,u*l-r*o,f*l+r*a,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,a){return this.set(1,i,s,0,e,1,a,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,a=n._y,o=n._z,l=n._w,u=s+s,f=a+a,d=o+o,c=s*u,m=s*f,p=s*d,x=a*f,_=a*d,h=o*d,b=l*u,M=l*f,A=l*d,G=i.x,L=i.y,B=i.z;return r[0]=(1-(x+h))*G,r[1]=(m+A)*G,r[2]=(p-M)*G,r[3]=0,r[4]=(m-A)*L,r[5]=(1-(c+h))*L,r[6]=(_+b)*L,r[7]=0,r[8]=(p+M)*B,r[9]=(_-b)*B,r[10]=(1-(c+x))*B,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let s=Vr.set(r[0],r[1],r[2]).length();const a=Vr.set(r[4],r[5],r[6]).length(),o=Vr.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],On.copy(this);const u=1/s,f=1/a,d=1/o;return On.elements[0]*=u,On.elements[1]*=u,On.elements[2]*=u,On.elements[4]*=f,On.elements[5]*=f,On.elements[6]*=f,On.elements[8]*=d,On.elements[9]*=d,On.elements[10]*=d,n.setFromRotationMatrix(On),i.x=s,i.y=a,i.z=o,this}makePerspective(e,n,i,r,s,a,o=vi){const l=this.elements,u=2*s/(n-e),f=2*s/(i-r),d=(n+e)/(n-e),c=(i+r)/(i-r);let m,p;if(o===vi)m=-(a+s)/(a-s),p=-2*a*s/(a-s);else if(o===po)m=-a/(a-s),p=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=u,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=f,l[9]=c,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=p,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,n,i,r,s,a,o=vi){const l=this.elements,u=1/(n-e),f=1/(i-r),d=1/(a-s),c=(n+e)*u,m=(i+r)*f;let p,x;if(o===vi)p=(a+s)*d,x=-2*d;else if(o===po)p=s*d,x=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*u,l[4]=0,l[8]=0,l[12]=-c,l[1]=0,l[5]=2*f,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=x,l[14]=-p,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const Vr=new ve,On=new Ft,Nv=new ve(0,0,0),Fv=new ve(1,1,1),Ii=new ve,wa=new ve,xn=new ve,Ff=new Ft,Bf=new ua;class bi{constructor(e=0,n=0,i=0,r=bi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],l=r[1],u=r[5],f=r[9],d=r[2],c=r[6],m=r[10];switch(n){case"XYZ":this._y=Math.asin(pn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-f,m),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(c,u),this._z=0);break;case"YXZ":this._x=Math.asin(-pn(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(pn(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(-d,m),this._z=Math.atan2(-a,u)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-pn(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(c,m),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,u));break;case"YZX":this._z=Math.asin(pn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-f,u),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-pn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(c,u),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-f,m),this._y=0);break;default:}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return Ff.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Ff,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return Bf.setFromEuler(this),this.setFromQuaternion(Bf,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}bi.DEFAULT_ORDER="XYZ";class wu{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Bv=0;const kf=new ve,Gr=new ua,ci=new Ft,Aa=new ve,Is=new ve,kv=new ve,zv=new ua,zf=new ve(1,0,0),Hf=new ve(0,1,0),Vf=new ve(0,0,1),Gf={type:"added"},Hv={type:"removed"},Wr={type:"childadded",child:null},pl={type:"childremoved",child:null};class gn extends ys{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Bv++}),this.uuid=ca(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=gn.DEFAULT_UP.clone();const e=new ve,n=new bi,i=new ua,r=new ve(1,1,1);function s(){i.setFromEuler(n,!1)}function a(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Ft},normalMatrix:{value:new ut}}),this.matrix=new Ft,this.matrixWorld=new Ft,this.matrixAutoUpdate=gn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=gn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new wu,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Gr.setFromAxisAngle(e,n),this.quaternion.multiply(Gr),this}rotateOnWorldAxis(e,n){return Gr.setFromAxisAngle(e,n),this.quaternion.premultiply(Gr),this}rotateX(e){return this.rotateOnAxis(zf,e)}rotateY(e){return this.rotateOnAxis(Hf,e)}rotateZ(e){return this.rotateOnAxis(Vf,e)}translateOnAxis(e,n){return kf.copy(e).applyQuaternion(this.quaternion),this.position.add(kf.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(zf,e)}translateY(e){return this.translateOnAxis(Hf,e)}translateZ(e){return this.translateOnAxis(Vf,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ci.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?Aa.copy(e):Aa.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Is.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ci.lookAt(Is,Aa,this.up):ci.lookAt(Aa,Is,this.up),this.quaternion.setFromRotationMatrix(ci),r&&(ci.extractRotation(r.matrixWorld),Gr.setFromRotationMatrix(ci),this.quaternion.premultiply(Gr.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?this:(e&&e.isObject3D&&(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Gf),Wr.child=e,this.dispatchEvent(Wr),Wr.child=null),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(Hv),pl.child=e,this.dispatchEvent(pl),pl.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ci.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ci.multiply(e.parent.matrixWorld)),e.applyMatrix4(ci),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Gf),Wr.child=e,this.dispatchEvent(Wr),Wr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(e,n);if(a!==void 0)return a}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Is,e,kv),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Is,zv,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let u=0,f=l.length;u<f;u++){const d=l[u];s(e.shapes,d)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,u=this.material.length;l<u;l++)o.push(s(e.materials,this.material[l]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(s(e.animations,l))}}if(n){const o=a(e.geometries),l=a(e.materials),u=a(e.textures),f=a(e.images),d=a(e.shapes),c=a(e.skeletons),m=a(e.animations),p=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),u.length>0&&(i.textures=u),f.length>0&&(i.images=f),d.length>0&&(i.shapes=d),c.length>0&&(i.skeletons=c),m.length>0&&(i.animations=m),p.length>0&&(i.nodes=p)}return i.object=r,i;function a(o){const l=[];for(const u in o){const f=o[u];delete f.metadata,l.push(f)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}gn.DEFAULT_UP=new ve(0,1,0);gn.DEFAULT_MATRIX_AUTO_UPDATE=!0;gn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Nn=new ve,ui=new ve,ml=new ve,fi=new ve,Xr=new ve,jr=new ve,Wf=new ve,_l=new ve,gl=new ve,vl=new ve,xl=new Nt,yl=new Nt,Sl=new Nt;class Bn{constructor(e=new ve,n=new ve,i=new ve){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),Nn.subVectors(e,n),r.cross(Nn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){Nn.subVectors(r,n),ui.subVectors(i,n),ml.subVectors(e,n);const a=Nn.dot(Nn),o=Nn.dot(ui),l=Nn.dot(ml),u=ui.dot(ui),f=ui.dot(ml),d=a*u-o*o;if(d===0)return s.set(0,0,0),null;const c=1/d,m=(u*l-o*f)*c,p=(a*f-o*l)*c;return s.set(1-m-p,p,m)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,fi)===null?!1:fi.x>=0&&fi.y>=0&&fi.x+fi.y<=1}static getInterpolation(e,n,i,r,s,a,o,l){return this.getBarycoord(e,n,i,r,fi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,fi.x),l.addScaledVector(a,fi.y),l.addScaledVector(o,fi.z),l)}static getInterpolatedAttribute(e,n,i,r,s,a){return xl.setScalar(0),yl.setScalar(0),Sl.setScalar(0),xl.fromBufferAttribute(e,n),yl.fromBufferAttribute(e,i),Sl.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(xl,s.x),a.addScaledVector(yl,s.y),a.addScaledVector(Sl,s.z),a}static isFrontFacing(e,n,i,r){return Nn.subVectors(i,n),ui.subVectors(e,n),Nn.cross(ui).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Nn.subVectors(this.c,this.b),ui.subVectors(this.a,this.b),Nn.cross(ui).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Bn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return Bn.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,s){return Bn.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return Bn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Bn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let a,o;Xr.subVectors(r,i),jr.subVectors(s,i),_l.subVectors(e,i);const l=Xr.dot(_l),u=jr.dot(_l);if(l<=0&&u<=0)return n.copy(i);gl.subVectors(e,r);const f=Xr.dot(gl),d=jr.dot(gl);if(f>=0&&d<=f)return n.copy(r);const c=l*d-f*u;if(c<=0&&l>=0&&f<=0)return a=l/(l-f),n.copy(i).addScaledVector(Xr,a);vl.subVectors(e,s);const m=Xr.dot(vl),p=jr.dot(vl);if(p>=0&&m<=p)return n.copy(s);const x=m*u-l*p;if(x<=0&&u>=0&&p<=0)return o=u/(u-p),n.copy(i).addScaledVector(jr,o);const _=f*p-m*d;if(_<=0&&d-f>=0&&m-p>=0)return Wf.subVectors(s,r),o=(d-f)/(d-f+(m-p)),n.copy(r).addScaledVector(Wf,o);const h=1/(_+x+c);return a=x*h,o=c*h,n.copy(i).addScaledVector(Xr,a).addScaledVector(jr,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Ip={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ui={h:0,s:0,l:0},Ca={h:0,s:0,l:0};function Ml(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class Mt{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=qn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,xt.toWorkingColorSpace(this,n),this}setRGB(e,n,i,r=xt.workingColorSpace){return this.r=e,this.g=n,this.b=i,xt.toWorkingColorSpace(this,r),this}setHSL(e,n,i,r=xt.workingColorSpace){if(e=Tv(e,1),n=pn(n,0,1),i=pn(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,a=2*i-s;this.r=Ml(a,s,e+1/3),this.g=Ml(a,s,e),this.b=Ml(a,s,e-1/3)}return xt.toWorkingColorSpace(this,r),this}setStyle(e,n=qn){function i(s){s!==void 0&&parseFloat(s)<1}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(a===6)return this.setHex(parseInt(s,16),n)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=qn){const i=Ip[e.toLowerCase()];return i!==void 0&&this.setHex(i,n),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ls(e.r),this.g=ls(e.g),this.b=ls(e.b),this}copyLinearToSRGB(e){return this.r=al(e.r),this.g=al(e.g),this.b=al(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=qn){return xt.fromWorkingColorSpace(Qt.copy(this),e),Math.round(pn(Qt.r*255,0,255))*65536+Math.round(pn(Qt.g*255,0,255))*256+Math.round(pn(Qt.b*255,0,255))}getHexString(e=qn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=xt.workingColorSpace){xt.fromWorkingColorSpace(Qt.copy(this),n);const i=Qt.r,r=Qt.g,s=Qt.b,a=Math.max(i,r,s),o=Math.min(i,r,s);let l,u;const f=(o+a)/2;if(o===a)l=0,u=0;else{const d=a-o;switch(u=f<=.5?d/(a+o):d/(2-a-o),a){case i:l=(r-s)/d+(r<s?6:0);break;case r:l=(s-i)/d+2;break;case s:l=(i-r)/d+4;break}l/=6}return e.h=l,e.s=u,e.l=f,e}getRGB(e,n=xt.workingColorSpace){return xt.fromWorkingColorSpace(Qt.copy(this),n),e.r=Qt.r,e.g=Qt.g,e.b=Qt.b,e}getStyle(e=qn){xt.fromWorkingColorSpace(Qt.copy(this),e);const n=Qt.r,i=Qt.g,r=Qt.b;return e!==qn?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(Ui),this.setHSL(Ui.h+e,Ui.s+n,Ui.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(Ui),e.getHSL(Ca);const i=rl(Ui.h,Ca.h,n),r=rl(Ui.s,Ca.s,n),s=rl(Ui.l,Ca.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Qt=new Mt;Mt.NAMES=Ip;let Vv=0;class Io extends ys{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Vv++}),this.uuid=ca(),this.name="",this.type="Material",this.blending=Ar,this.side=Ki,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ec,this.blendDst=tc,this.blendEquation=Sr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Mt(0,0,0),this.blendAlpha=0,this.depthFunc=fs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Pf,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Fr,this.stencilZFail=Fr,this.stencilZPass=Fr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0)continue;const r=this[n];r!==void 0&&(r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i)}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Ar&&(i.blending=this.blending),this.side!==Ki&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==ec&&(i.blendSrc=this.blendSrc),this.blendDst!==tc&&(i.blendDst=this.blendDst),this.blendEquation!==Sr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==fs&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Pf&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Fr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Fr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Fr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(n){const s=r(e.textures),a=r(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){}}class Au extends Io{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Mt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new bi,this.combine=_p,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const kt=new ve,Ra=new yt;class vn{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=Df,this.updateRanges=[],this.gpuType=gi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)Ra.fromBufferAttribute(this,n),Ra.applyMatrix3(e),this.setXY(n,Ra.x,Ra.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)kt.fromBufferAttribute(this,n),kt.applyMatrix3(e),this.setXYZ(n,kt.x,kt.y,kt.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)kt.fromBufferAttribute(this,n),kt.applyMatrix4(e),this.setXYZ(n,kt.x,kt.y,kt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)kt.fromBufferAttribute(this,n),kt.applyNormalMatrix(e),this.setXYZ(n,kt.x,kt.y,kt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)kt.fromBufferAttribute(this,n),kt.transformDirection(e),this.setXYZ(n,kt.x,kt.y,kt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=Rs(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=dn(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Rs(n,this.array)),n}setX(e,n){return this.normalized&&(n=dn(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Rs(n,this.array)),n}setY(e,n){return this.normalized&&(n=dn(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Rs(n,this.array)),n}setZ(e,n){return this.normalized&&(n=dn(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Rs(n,this.array)),n}setW(e,n){return this.normalized&&(n=dn(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=dn(n,this.array),i=dn(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=dn(n,this.array),i=dn(i,this.array),r=dn(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=dn(n,this.array),i=dn(i,this.array),r=dn(r,this.array),s=dn(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Df&&(e.usage=this.usage),e}}class Up extends vn{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class Op extends vn{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class Cr extends vn{constructor(e,n,i){super(new Float32Array(e),n,i)}}let Gv=0;const En=new Ft,bl=new gn,qr=new ve,yn=new fa,Us=new fa,Xt=new ve;class nr extends ys{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Gv++}),this.uuid=ca(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Rp(e)?Op:Up)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new ut().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return En.makeRotationFromQuaternion(e),this.applyMatrix4(En),this}rotateX(e){return En.makeRotationX(e),this.applyMatrix4(En),this}rotateY(e){return En.makeRotationY(e),this.applyMatrix4(En),this}rotateZ(e){return En.makeRotationZ(e),this.applyMatrix4(En),this}translate(e,n,i){return En.makeTranslation(e,n,i),this.applyMatrix4(En),this}scale(e,n,i){return En.makeScale(e,n,i),this.applyMatrix4(En),this}lookAt(e){return bl.lookAt(e),bl.updateMatrix(),this.applyMatrix4(bl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(qr).negate(),this.translate(qr.x,qr.y,qr.z),this}setFromPoints(e){const n=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];n.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Cr(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new fa);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){this.boundingBox.set(new ve(-1/0,-1/0,-1/0),new ve(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];yn.setFromBufferAttribute(s),this.morphTargetsRelative?(Xt.addVectors(this.boundingBox.min,yn.min),this.boundingBox.expandByPoint(Xt),Xt.addVectors(this.boundingBox.max,yn.max),this.boundingBox.expandByPoint(Xt)):(this.boundingBox.expandByPoint(yn.min),this.boundingBox.expandByPoint(yn.max))}}else this.boundingBox.makeEmpty();isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Eu);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){this.boundingSphere.set(new ve,1/0);return}if(e){const i=this.boundingSphere.center;if(yn.setFromBufferAttribute(e),n)for(let s=0,a=n.length;s<a;s++){const o=n[s];Us.setFromBufferAttribute(o),this.morphTargetsRelative?(Xt.addVectors(yn.min,Us.min),yn.expandByPoint(Xt),Xt.addVectors(yn.max,Us.max),yn.expandByPoint(Xt)):(yn.expandByPoint(Us.min),yn.expandByPoint(Us.max))}yn.getCenter(i);let r=0;for(let s=0,a=e.count;s<a;s++)Xt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Xt));if(n)for(let s=0,a=n.length;s<a;s++){const o=n[s],l=this.morphTargetsRelative;for(let u=0,f=o.count;u<f;u++)Xt.fromBufferAttribute(o,u),l&&(qr.fromBufferAttribute(e,u),Xt.add(qr)),r=Math.max(r,i.distanceToSquared(Xt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0)return;const i=n.position,r=n.normal,s=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new vn(new Float32Array(4*i.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let X=0;X<i.count;X++)o[X]=new ve,l[X]=new ve;const u=new ve,f=new ve,d=new ve,c=new yt,m=new yt,p=new yt,x=new ve,_=new ve;function h(X,Y,E){u.fromBufferAttribute(i,X),f.fromBufferAttribute(i,Y),d.fromBufferAttribute(i,E),c.fromBufferAttribute(s,X),m.fromBufferAttribute(s,Y),p.fromBufferAttribute(s,E),f.sub(u),d.sub(u),m.sub(c),p.sub(c);const C=1/(m.x*p.y-p.x*m.y);isFinite(C)&&(x.copy(f).multiplyScalar(p.y).addScaledVector(d,-m.y).multiplyScalar(C),_.copy(d).multiplyScalar(m.x).addScaledVector(f,-p.x).multiplyScalar(C),o[X].add(x),o[Y].add(x),o[E].add(x),l[X].add(_),l[Y].add(_),l[E].add(_))}let b=this.groups;b.length===0&&(b=[{start:0,count:e.count}]);for(let X=0,Y=b.length;X<Y;++X){const E=b[X],C=E.start,V=E.count;for(let W=C,Z=C+V;W<Z;W+=3)h(e.getX(W+0),e.getX(W+1),e.getX(W+2))}const M=new ve,A=new ve,G=new ve,L=new ve;function B(X){G.fromBufferAttribute(r,X),L.copy(G);const Y=o[X];M.copy(Y),M.sub(G.multiplyScalar(G.dot(Y))).normalize(),A.crossVectors(L,Y);const C=A.dot(l[X])<0?-1:1;a.setXYZW(X,M.x,M.y,M.z,C)}for(let X=0,Y=b.length;X<Y;++X){const E=b[X],C=E.start,V=E.count;for(let W=C,Z=C+V;W<Z;W+=3)B(e.getX(W+0)),B(e.getX(W+1)),B(e.getX(W+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new vn(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let c=0,m=i.count;c<m;c++)i.setXYZ(c,0,0,0);const r=new ve,s=new ve,a=new ve,o=new ve,l=new ve,u=new ve,f=new ve,d=new ve;if(e)for(let c=0,m=e.count;c<m;c+=3){const p=e.getX(c+0),x=e.getX(c+1),_=e.getX(c+2);r.fromBufferAttribute(n,p),s.fromBufferAttribute(n,x),a.fromBufferAttribute(n,_),f.subVectors(a,s),d.subVectors(r,s),f.cross(d),o.fromBufferAttribute(i,p),l.fromBufferAttribute(i,x),u.fromBufferAttribute(i,_),o.add(f),l.add(f),u.add(f),i.setXYZ(p,o.x,o.y,o.z),i.setXYZ(x,l.x,l.y,l.z),i.setXYZ(_,u.x,u.y,u.z)}else for(let c=0,m=n.count;c<m;c+=3)r.fromBufferAttribute(n,c+0),s.fromBufferAttribute(n,c+1),a.fromBufferAttribute(n,c+2),f.subVectors(a,s),d.subVectors(r,s),f.cross(d),i.setXYZ(c+0,f.x,f.y,f.z),i.setXYZ(c+1,f.x,f.y,f.z),i.setXYZ(c+2,f.x,f.y,f.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Xt.fromBufferAttribute(e,n),Xt.normalize(),e.setXYZ(n,Xt.x,Xt.y,Xt.z)}toNonIndexed(){function e(o,l){const u=o.array,f=o.itemSize,d=o.normalized,c=new u.constructor(l.length*f);let m=0,p=0;for(let x=0,_=l.length;x<_;x++){o.isInterleavedBufferAttribute?m=l[x]*o.data.stride+o.offset:m=l[x]*f;for(let h=0;h<f;h++)c[p++]=u[m++]}return new vn(c,f,d)}if(this.index===null)return this;const n=new nr,i=this.index.array,r=this.attributes;for(const o in r){const l=r[o],u=e(l,i);n.setAttribute(o,u)}const s=this.morphAttributes;for(const o in s){const l=[],u=s[o];for(let f=0,d=u.length;f<d;f++){const c=u[f],m=e(c,i);l.push(m)}n.morphAttributes[o]=l}n.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const u=a[o];n.addGroup(u.start,u.count,u.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const u in l)l[u]!==void 0&&(e[u]=l[u]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const u=i[l];e.data.attributes[l]=u.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const u=this.morphAttributes[l],f=[];for(let d=0,c=u.length;d<c;d++){const m=u[d];f.push(m.toJSON(e.data))}f.length>0&&(r[l]=f,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(n));const r=e.attributes;for(const u in r){const f=r[u];this.setAttribute(u,f.clone(n))}const s=e.morphAttributes;for(const u in s){const f=[],d=s[u];for(let c=0,m=d.length;c<m;c++)f.push(d[c].clone(n));this.morphAttributes[u]=f}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let u=0,f=a.length;u<f;u++){const d=a[u];this.addGroup(d.start,d.count,d.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Xf=new Ft,fr=new Lp,Pa=new Eu,jf=new ve,Da=new ve,La=new ve,Ia=new ve,Tl=new ve,Ua=new ve,qf=new ve,Oa=new ve;class Pn extends gn{constructor(e=new nr,n=new Au){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){Ua.set(0,0,0);for(let l=0,u=s.length;l<u;l++){const f=o[l],d=s[l];f!==0&&(Tl.fromBufferAttribute(d,e),a?Ua.addScaledVector(Tl,f):Ua.addScaledVector(Tl.sub(n),f))}n.add(Ua)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Pa.copy(i.boundingSphere),Pa.applyMatrix4(s),fr.copy(e.ray).recast(e.near),!(Pa.containsPoint(fr.origin)===!1&&(fr.intersectSphere(Pa,jf)===null||fr.origin.distanceToSquared(jf)>(e.far-e.near)**2))&&(Xf.copy(s).invert(),fr.copy(e.ray).applyMatrix4(Xf),!(i.boundingBox!==null&&fr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,fr)))}_computeIntersections(e,n,i){let r;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,u=s.attributes.uv,f=s.attributes.uv1,d=s.attributes.normal,c=s.groups,m=s.drawRange;if(o!==null)if(Array.isArray(a))for(let p=0,x=c.length;p<x;p++){const _=c[p],h=a[_.materialIndex],b=Math.max(_.start,m.start),M=Math.min(o.count,Math.min(_.start+_.count,m.start+m.count));for(let A=b,G=M;A<G;A+=3){const L=o.getX(A),B=o.getX(A+1),X=o.getX(A+2);r=Na(this,h,e,i,u,f,d,L,B,X),r&&(r.faceIndex=Math.floor(A/3),r.face.materialIndex=_.materialIndex,n.push(r))}}else{const p=Math.max(0,m.start),x=Math.min(o.count,m.start+m.count);for(let _=p,h=x;_<h;_+=3){const b=o.getX(_),M=o.getX(_+1),A=o.getX(_+2);r=Na(this,a,e,i,u,f,d,b,M,A),r&&(r.faceIndex=Math.floor(_/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(a))for(let p=0,x=c.length;p<x;p++){const _=c[p],h=a[_.materialIndex],b=Math.max(_.start,m.start),M=Math.min(l.count,Math.min(_.start+_.count,m.start+m.count));for(let A=b,G=M;A<G;A+=3){const L=A,B=A+1,X=A+2;r=Na(this,h,e,i,u,f,d,L,B,X),r&&(r.faceIndex=Math.floor(A/3),r.face.materialIndex=_.materialIndex,n.push(r))}}else{const p=Math.max(0,m.start),x=Math.min(l.count,m.start+m.count);for(let _=p,h=x;_<h;_+=3){const b=_,M=_+1,A=_+2;r=Na(this,a,e,i,u,f,d,b,M,A),r&&(r.faceIndex=Math.floor(_/3),n.push(r))}}}}function Wv(t,e,n,i,r,s,a,o){let l;if(e.side===_n?l=i.intersectTriangle(a,s,r,!0,o):l=i.intersectTriangle(r,s,a,e.side===Ki,o),l===null)return null;Oa.copy(o),Oa.applyMatrix4(t.matrixWorld);const u=n.ray.origin.distanceTo(Oa);return u<n.near||u>n.far?null:{distance:u,point:Oa.clone(),object:t}}function Na(t,e,n,i,r,s,a,o,l,u){t.getVertexPosition(o,Da),t.getVertexPosition(l,La),t.getVertexPosition(u,Ia);const f=Wv(t,e,n,i,Da,La,Ia,qf);if(f){const d=new ve;Bn.getBarycoord(qf,Da,La,Ia,d),r&&(f.uv=Bn.getInterpolatedAttribute(r,o,l,u,d,new yt)),s&&(f.uv1=Bn.getInterpolatedAttribute(s,o,l,u,d,new yt)),a&&(f.normal=Bn.getInterpolatedAttribute(a,o,l,u,d,new ve),f.normal.dot(i.direction)>0&&f.normal.multiplyScalar(-1));const c={a:o,b:l,c:u,normal:new ve,materialIndex:0};Bn.getNormal(Da,La,Ia,c.normal),f.face=c,f.barycoord=d}return f}class ha extends nr{constructor(e=1,n=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const l=[],u=[],f=[],d=[];let c=0,m=0;p("z","y","x",-1,-1,i,n,e,a,s,0),p("z","y","x",1,-1,i,n,-e,a,s,1),p("x","z","y",1,1,e,i,n,r,a,2),p("x","z","y",1,-1,e,i,-n,r,a,3),p("x","y","z",1,-1,e,n,i,r,s,4),p("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new Cr(u,3)),this.setAttribute("normal",new Cr(f,3)),this.setAttribute("uv",new Cr(d,2));function p(x,_,h,b,M,A,G,L,B,X,Y){const E=A/B,C=G/X,V=A/2,W=G/2,Z=L/2,ne=B+1,se=X+1;let de=0,te=0;const Le=new ve;for(let Fe=0;Fe<se;Fe++){const ze=Fe*C-W;for(let Ze=0;Ze<ne;Ze++){const Je=Ze*E-V;Le[x]=Je*b,Le[_]=ze*M,Le[h]=Z,u.push(Le.x,Le.y,Le.z),Le[x]=0,Le[_]=0,Le[h]=L>0?1:-1,f.push(Le.x,Le.y,Le.z),d.push(Ze/B),d.push(1-Fe/X),de+=1}}for(let Fe=0;Fe<X;Fe++)for(let ze=0;ze<B;ze++){const Ze=c+ze+ne*Fe,Je=c+ze+ne*(Fe+1),ge=c+(ze+1)+ne*(Fe+1),we=c+(ze+1)+ne*Fe;l.push(Ze,Je,we),l.push(Je,ge,we),te+=6}o.addGroup(m,te,Y),m+=te,c+=de}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ha(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function _s(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?e[n][i]=null:e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function cn(t){const e={};for(let n=0;n<t.length;n++){const i=_s(t[n]);for(const r in i)e[r]=i[r]}return e}function Xv(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function Np(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:xt.workingColorSpace}const jv={clone:_s,merge:cn};var qv=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Yv=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ei extends Io{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=qv,this.fragmentShader=Yv,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=_s(e.uniforms),this.uniformsGroups=Xv(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?n.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?n.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?n.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?n.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?n.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?n.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?n.uniforms[r]={type:"m4",value:a.toArray()}:n.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class Fp extends gn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ft,this.projectionMatrix=new Ft,this.projectionMatrixInverse=new Ft,this.coordinateSystem=vi}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Oi=new ve,Yf=new yt,$f=new yt;class An extends Fp{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=kc*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(il*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return kc*2*Math.atan(Math.tan(il*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){Oi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Oi.x,Oi.y).multiplyScalar(-e/Oi.z),Oi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Oi.x,Oi.y).multiplyScalar(-e/Oi.z)}getViewSize(e,n){return this.getViewBounds(e,Yf,$f),n.subVectors($f,Yf)}setViewOffset(e,n,i,r,s,a){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(il*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,u=a.fullHeight;s+=a.offsetX*r/l,n-=a.offsetY*i/u,r*=a.width/l,i*=a.height/u}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const Yr=-90,$r=1;class $v extends gn{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new An(Yr,$r,e,n);r.layers=this.layers,this.add(r);const s=new An(Yr,$r,e,n);s.layers=this.layers,this.add(s);const a=new An(Yr,$r,e,n);a.layers=this.layers,this.add(a);const o=new An(Yr,$r,e,n);o.layers=this.layers,this.add(o);const l=new An(Yr,$r,e,n);l.layers=this.layers,this.add(l);const u=new An(Yr,$r,e,n);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,a,o,l]=n;for(const u of n)this.remove(u);if(e===vi)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===po)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const u of n)this.add(u),u.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,u,f]=this.children,d=e.getRenderTarget(),c=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;const x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(n,s),e.setRenderTarget(i,1,r),e.render(n,a),e.setRenderTarget(i,2,r),e.render(n,o),e.setRenderTarget(i,3,r),e.render(n,l),e.setRenderTarget(i,4,r),e.render(n,u),i.texture.generateMipmaps=x,e.setRenderTarget(i,5,r),e.render(n,f),e.setRenderTarget(d,c,m),e.xr.enabled=p,i.texture.needsPMREMUpdate=!0}}class Bp extends $t{constructor(e,n,i,r,s,a,o,l,u,f){e=e!==void 0?e:[],n=n!==void 0?n:hs,super(e,n,i,r,s,a,o,l,u,f),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Kv extends Ir{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new Bp(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:hn}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new ha(5,5,5),s=new ei({name:"CubemapFromEquirect",uniforms:_s(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:_n,blending:qi});s.uniforms.tEquirect.value=n;const a=new Pn(r,s),o=n.minFilter;return n.minFilter===Tr&&(n.minFilter=hn),new $v(1,10,this).update(e,a),n.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,n,i,r){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(n,i,r);e.setRenderTarget(s)}}const El=new ve,Zv=new ve,Jv=new ut;class zi{constructor(e=new ve(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=El.subVectors(i,n).cross(Zv.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(El),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:n.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||Jv.getNormalMatrix(e),r=this.coplanarPoint(El).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const hr=new Eu,Fa=new ve;class kp{constructor(e=new zi,n=new zi,i=new zi,r=new zi,s=new zi,a=new zi){this.planes=[e,n,i,r,s,a]}set(e,n,i,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(n),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=vi){const i=this.planes,r=e.elements,s=r[0],a=r[1],o=r[2],l=r[3],u=r[4],f=r[5],d=r[6],c=r[7],m=r[8],p=r[9],x=r[10],_=r[11],h=r[12],b=r[13],M=r[14],A=r[15];if(i[0].setComponents(l-s,c-u,_-m,A-h).normalize(),i[1].setComponents(l+s,c+u,_+m,A+h).normalize(),i[2].setComponents(l+a,c+f,_+p,A+b).normalize(),i[3].setComponents(l-a,c-f,_-p,A-b).normalize(),i[4].setComponents(l-o,c-d,_-x,A-M).normalize(),n===vi)i[5].setComponents(l+o,c+d,_+x,A+M).normalize();else if(n===po)i[5].setComponents(o,d,x,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),hr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),hr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(hr)}intersectsSprite(e){return hr.center.set(0,0,0),hr.radius=.7071067811865476,hr.applyMatrix4(e.matrixWorld),this.intersectsSphere(hr)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(Fa.x=r.normal.x>0?e.max.x:e.min.x,Fa.y=r.normal.y>0?e.max.y:e.min.y,Fa.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Fa)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function zp(){let t=null,e=!1,n=null,i=null;function r(s,a){n(s,a),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function Qv(t){const e=new WeakMap;function n(o,l){const u=o.array,f=o.usage,d=u.byteLength,c=t.createBuffer();t.bindBuffer(l,c),t.bufferData(l,u,f),o.onUploadCallback();let m;if(u instanceof Float32Array)m=t.FLOAT;else if(u instanceof Uint16Array)o.isFloat16BufferAttribute?m=t.HALF_FLOAT:m=t.UNSIGNED_SHORT;else if(u instanceof Int16Array)m=t.SHORT;else if(u instanceof Uint32Array)m=t.UNSIGNED_INT;else if(u instanceof Int32Array)m=t.INT;else if(u instanceof Int8Array)m=t.BYTE;else if(u instanceof Uint8Array)m=t.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)m=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:c,type:m,bytesPerElement:u.BYTES_PER_ELEMENT,version:o.version,size:d}}function i(o,l,u){const f=l.array,d=l.updateRanges;if(t.bindBuffer(u,o),d.length===0)t.bufferSubData(u,0,f);else{d.sort((m,p)=>m.start-p.start);let c=0;for(let m=1;m<d.length;m++){const p=d[c],x=d[m];x.start<=p.start+p.count+1?p.count=Math.max(p.count,x.start+x.count-p.start):(++c,d[c]=x)}d.length=c+1;for(let m=0,p=d.length;m<p;m++){const x=d[m];t.bufferSubData(u,x.start*f.BYTES_PER_ELEMENT,f,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(t.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const f=e.get(o);(!f||f.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const u=e.get(o);if(u===void 0)e.set(o,n(o,l));else if(u.version<o.version){if(u.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(u.buffer,o,l),u.version=o.version}}return{get:r,remove:s,update:a}}class Ss extends nr{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,a=n/2,o=Math.floor(i),l=Math.floor(r),u=o+1,f=l+1,d=e/o,c=n/l,m=[],p=[],x=[],_=[];for(let h=0;h<f;h++){const b=h*c-a;for(let M=0;M<u;M++){const A=M*d-s;p.push(A,-b,0),x.push(0,0,1),_.push(M/o),_.push(1-h/l)}}for(let h=0;h<l;h++)for(let b=0;b<o;b++){const M=b+u*h,A=b+u*(h+1),G=b+1+u*(h+1),L=b+1+u*h;m.push(M,A,L),m.push(A,G,L)}this.setIndex(m),this.setAttribute("position",new Cr(p,3)),this.setAttribute("normal",new Cr(x,3)),this.setAttribute("uv",new Cr(_,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ss(e.width,e.height,e.widthSegments,e.heightSegments)}}var ex=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,tx=`#ifdef USE_ALPHAHASH
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
#endif`,nx=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,ix=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,rx=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,sx=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,ax=`#ifdef USE_AOMAP
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
#endif`,ox=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,lx=`#ifdef USE_BATCHING
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
#endif`,cx=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,ux=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,fx=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,hx=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,dx=`#ifdef USE_IRIDESCENCE
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
#endif`,px=`#ifdef USE_BUMPMAP
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
#endif`,mx=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,_x=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,gx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,vx=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,xx=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,yx=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Sx=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Mx=`#if defined( USE_COLOR_ALPHA )
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
#endif`,bx=`#define PI 3.141592653589793
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
} // validated`,Tx=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Ex=`vec3 transformedNormal = objectNormal;
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
#endif`,wx=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Ax=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Cx=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Rx=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Px="gl_FragColor = linearToOutputTexel( gl_FragColor );",Dx=`
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
}`,Lx=`#ifdef USE_ENVMAP
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
#endif`,Ix=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Ux=`#ifdef USE_ENVMAP
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
#endif`,Ox=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Nx=`#ifdef USE_ENVMAP
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
#endif`,Fx=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Bx=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,kx=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,zx=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Hx=`#ifdef USE_GRADIENTMAP
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
}`,Vx=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Gx=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Wx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Xx=`uniform bool receiveShadow;
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
#endif`,jx=`#ifdef USE_ENVMAP
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
#endif`,qx=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Yx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,$x=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Kx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Zx=`PhysicalMaterial material;
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
#endif`,Jx=`struct PhysicalMaterial {
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
}`,Qx=`
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
#endif`,ey=`#if defined( RE_IndirectDiffuse )
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
#endif`,ty=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,ny=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,iy=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ry=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,sy=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,ay=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,oy=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,ly=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,cy=`#if defined( USE_POINTS_UV )
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
#endif`,uy=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,fy=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,hy=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,dy=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,py=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,my=`#ifdef USE_MORPHTARGETS
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
#endif`,_y=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,gy=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,vy=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,xy=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,yy=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Sy=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,My=`#ifdef USE_NORMALMAP
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
#endif`,by=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Ty=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Ey=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,wy=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Ay=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Cy=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Ry=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Py=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Dy=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Ly=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Iy=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Uy=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Oy=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Ny=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Fy=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,By=`float getShadowMask() {
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
}`,ky=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,zy=`#ifdef USE_SKINNING
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
#endif`,Hy=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Vy=`#ifdef USE_SKINNING
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
#endif`,Gy=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Wy=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Xy=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,jy=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,qy=`#ifdef USE_TRANSMISSION
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
#endif`,Yy=`#ifdef USE_TRANSMISSION
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
#endif`,$y=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ky=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Zy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Jy=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Qy=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,eS=`uniform sampler2D t2D;
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
}`,tS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,nS=`#ifdef ENVMAP_TYPE_CUBE
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
}`,iS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,rS=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,sS=`#include <common>
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
}`,aS=`#if DEPTH_PACKING == 3200
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
}`,oS=`#define DISTANCE
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
}`,lS=`#define DISTANCE
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
}`,cS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,uS=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,fS=`uniform float scale;
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
}`,hS=`uniform vec3 diffuse;
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
}`,dS=`#include <common>
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
}`,pS=`uniform vec3 diffuse;
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
}`,mS=`#define LAMBERT
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
}`,_S=`#define LAMBERT
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
}`,gS=`#define MATCAP
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
}`,vS=`#define MATCAP
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
}`,xS=`#define NORMAL
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
}`,yS=`#define NORMAL
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
}`,SS=`#define PHONG
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
}`,MS=`#define PHONG
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
}`,bS=`#define STANDARD
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
}`,TS=`#define STANDARD
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
}`,ES=`#define TOON
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
}`,wS=`#define TOON
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
}`,AS=`uniform float size;
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
}`,CS=`uniform vec3 diffuse;
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
}`,RS=`#include <common>
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
}`,PS=`uniform vec3 color;
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
}`,DS=`uniform float rotation;
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
}`,LS=`uniform vec3 diffuse;
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
}`,ct={alphahash_fragment:ex,alphahash_pars_fragment:tx,alphamap_fragment:nx,alphamap_pars_fragment:ix,alphatest_fragment:rx,alphatest_pars_fragment:sx,aomap_fragment:ax,aomap_pars_fragment:ox,batching_pars_vertex:lx,batching_vertex:cx,begin_vertex:ux,beginnormal_vertex:fx,bsdfs:hx,iridescence_fragment:dx,bumpmap_pars_fragment:px,clipping_planes_fragment:mx,clipping_planes_pars_fragment:_x,clipping_planes_pars_vertex:gx,clipping_planes_vertex:vx,color_fragment:xx,color_pars_fragment:yx,color_pars_vertex:Sx,color_vertex:Mx,common:bx,cube_uv_reflection_fragment:Tx,defaultnormal_vertex:Ex,displacementmap_pars_vertex:wx,displacementmap_vertex:Ax,emissivemap_fragment:Cx,emissivemap_pars_fragment:Rx,colorspace_fragment:Px,colorspace_pars_fragment:Dx,envmap_fragment:Lx,envmap_common_pars_fragment:Ix,envmap_pars_fragment:Ux,envmap_pars_vertex:Ox,envmap_physical_pars_fragment:jx,envmap_vertex:Nx,fog_vertex:Fx,fog_pars_vertex:Bx,fog_fragment:kx,fog_pars_fragment:zx,gradientmap_pars_fragment:Hx,lightmap_pars_fragment:Vx,lights_lambert_fragment:Gx,lights_lambert_pars_fragment:Wx,lights_pars_begin:Xx,lights_toon_fragment:qx,lights_toon_pars_fragment:Yx,lights_phong_fragment:$x,lights_phong_pars_fragment:Kx,lights_physical_fragment:Zx,lights_physical_pars_fragment:Jx,lights_fragment_begin:Qx,lights_fragment_maps:ey,lights_fragment_end:ty,logdepthbuf_fragment:ny,logdepthbuf_pars_fragment:iy,logdepthbuf_pars_vertex:ry,logdepthbuf_vertex:sy,map_fragment:ay,map_pars_fragment:oy,map_particle_fragment:ly,map_particle_pars_fragment:cy,metalnessmap_fragment:uy,metalnessmap_pars_fragment:fy,morphinstance_vertex:hy,morphcolor_vertex:dy,morphnormal_vertex:py,morphtarget_pars_vertex:my,morphtarget_vertex:_y,normal_fragment_begin:gy,normal_fragment_maps:vy,normal_pars_fragment:xy,normal_pars_vertex:yy,normal_vertex:Sy,normalmap_pars_fragment:My,clearcoat_normal_fragment_begin:by,clearcoat_normal_fragment_maps:Ty,clearcoat_pars_fragment:Ey,iridescence_pars_fragment:wy,opaque_fragment:Ay,packing:Cy,premultiplied_alpha_fragment:Ry,project_vertex:Py,dithering_fragment:Dy,dithering_pars_fragment:Ly,roughnessmap_fragment:Iy,roughnessmap_pars_fragment:Uy,shadowmap_pars_fragment:Oy,shadowmap_pars_vertex:Ny,shadowmap_vertex:Fy,shadowmask_pars_fragment:By,skinbase_vertex:ky,skinning_pars_vertex:zy,skinning_vertex:Hy,skinnormal_vertex:Vy,specularmap_fragment:Gy,specularmap_pars_fragment:Wy,tonemapping_fragment:Xy,tonemapping_pars_fragment:jy,transmission_fragment:qy,transmission_pars_fragment:Yy,uv_pars_fragment:$y,uv_pars_vertex:Ky,uv_vertex:Zy,worldpos_vertex:Jy,background_vert:Qy,background_frag:eS,backgroundCube_vert:tS,backgroundCube_frag:nS,cube_vert:iS,cube_frag:rS,depth_vert:sS,depth_frag:aS,distanceRGBA_vert:oS,distanceRGBA_frag:lS,equirect_vert:cS,equirect_frag:uS,linedashed_vert:fS,linedashed_frag:hS,meshbasic_vert:dS,meshbasic_frag:pS,meshlambert_vert:mS,meshlambert_frag:_S,meshmatcap_vert:gS,meshmatcap_frag:vS,meshnormal_vert:xS,meshnormal_frag:yS,meshphong_vert:SS,meshphong_frag:MS,meshphysical_vert:bS,meshphysical_frag:TS,meshtoon_vert:ES,meshtoon_frag:wS,points_vert:AS,points_frag:CS,shadow_vert:RS,shadow_frag:PS,sprite_vert:DS,sprite_frag:LS},Ge={common:{diffuse:{value:new Mt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ut},alphaMap:{value:null},alphaMapTransform:{value:new ut},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ut}},envmap:{envMap:{value:null},envMapRotation:{value:new ut},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ut}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ut}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ut},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ut},normalScale:{value:new yt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ut},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ut}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ut}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ut}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Mt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Mt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ut},alphaTest:{value:0},uvTransform:{value:new ut}},sprite:{diffuse:{value:new Mt(16777215)},opacity:{value:1},center:{value:new yt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ut},alphaMap:{value:null},alphaMapTransform:{value:new ut},alphaTest:{value:0}}},$n={basic:{uniforms:cn([Ge.common,Ge.specularmap,Ge.envmap,Ge.aomap,Ge.lightmap,Ge.fog]),vertexShader:ct.meshbasic_vert,fragmentShader:ct.meshbasic_frag},lambert:{uniforms:cn([Ge.common,Ge.specularmap,Ge.envmap,Ge.aomap,Ge.lightmap,Ge.emissivemap,Ge.bumpmap,Ge.normalmap,Ge.displacementmap,Ge.fog,Ge.lights,{emissive:{value:new Mt(0)}}]),vertexShader:ct.meshlambert_vert,fragmentShader:ct.meshlambert_frag},phong:{uniforms:cn([Ge.common,Ge.specularmap,Ge.envmap,Ge.aomap,Ge.lightmap,Ge.emissivemap,Ge.bumpmap,Ge.normalmap,Ge.displacementmap,Ge.fog,Ge.lights,{emissive:{value:new Mt(0)},specular:{value:new Mt(1118481)},shininess:{value:30}}]),vertexShader:ct.meshphong_vert,fragmentShader:ct.meshphong_frag},standard:{uniforms:cn([Ge.common,Ge.envmap,Ge.aomap,Ge.lightmap,Ge.emissivemap,Ge.bumpmap,Ge.normalmap,Ge.displacementmap,Ge.roughnessmap,Ge.metalnessmap,Ge.fog,Ge.lights,{emissive:{value:new Mt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ct.meshphysical_vert,fragmentShader:ct.meshphysical_frag},toon:{uniforms:cn([Ge.common,Ge.aomap,Ge.lightmap,Ge.emissivemap,Ge.bumpmap,Ge.normalmap,Ge.displacementmap,Ge.gradientmap,Ge.fog,Ge.lights,{emissive:{value:new Mt(0)}}]),vertexShader:ct.meshtoon_vert,fragmentShader:ct.meshtoon_frag},matcap:{uniforms:cn([Ge.common,Ge.bumpmap,Ge.normalmap,Ge.displacementmap,Ge.fog,{matcap:{value:null}}]),vertexShader:ct.meshmatcap_vert,fragmentShader:ct.meshmatcap_frag},points:{uniforms:cn([Ge.points,Ge.fog]),vertexShader:ct.points_vert,fragmentShader:ct.points_frag},dashed:{uniforms:cn([Ge.common,Ge.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ct.linedashed_vert,fragmentShader:ct.linedashed_frag},depth:{uniforms:cn([Ge.common,Ge.displacementmap]),vertexShader:ct.depth_vert,fragmentShader:ct.depth_frag},normal:{uniforms:cn([Ge.common,Ge.bumpmap,Ge.normalmap,Ge.displacementmap,{opacity:{value:1}}]),vertexShader:ct.meshnormal_vert,fragmentShader:ct.meshnormal_frag},sprite:{uniforms:cn([Ge.sprite,Ge.fog]),vertexShader:ct.sprite_vert,fragmentShader:ct.sprite_frag},background:{uniforms:{uvTransform:{value:new ut},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ct.background_vert,fragmentShader:ct.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ut}},vertexShader:ct.backgroundCube_vert,fragmentShader:ct.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ct.cube_vert,fragmentShader:ct.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ct.equirect_vert,fragmentShader:ct.equirect_frag},distanceRGBA:{uniforms:cn([Ge.common,Ge.displacementmap,{referencePosition:{value:new ve},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ct.distanceRGBA_vert,fragmentShader:ct.distanceRGBA_frag},shadow:{uniforms:cn([Ge.lights,Ge.fog,{color:{value:new Mt(0)},opacity:{value:1}}]),vertexShader:ct.shadow_vert,fragmentShader:ct.shadow_frag}};$n.physical={uniforms:cn([$n.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ut},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ut},clearcoatNormalScale:{value:new yt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ut},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ut},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ut},sheen:{value:0},sheenColor:{value:new Mt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ut},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ut},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ut},transmissionSamplerSize:{value:new yt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ut},attenuationDistance:{value:0},attenuationColor:{value:new Mt(0)},specularColor:{value:new Mt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ut},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ut},anisotropyVector:{value:new yt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ut}}]),vertexShader:ct.meshphysical_vert,fragmentShader:ct.meshphysical_frag};const Ba={r:0,b:0,g:0},dr=new bi,IS=new Ft;function US(t,e,n,i,r,s,a){const o=new Mt(0);let l=s===!0?0:1,u,f,d=null,c=0,m=null;function p(b){let M=b.isScene===!0?b.background:null;return M&&M.isTexture&&(M=(b.backgroundBlurriness>0?n:e).get(M)),M}function x(b){let M=!1;const A=p(b);A===null?h(o,l):A&&A.isColor&&(h(A,1),M=!0);const G=t.xr.getEnvironmentBlendMode();G==="additive"?i.buffers.color.setClear(0,0,0,1,a):G==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(t.autoClear||M)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function _(b,M){const A=p(M);A&&(A.isCubeTexture||A.mapping===Do)?(f===void 0&&(f=new Pn(new ha(1,1,1),new ei({name:"BackgroundCubeMaterial",uniforms:_s($n.backgroundCube.uniforms),vertexShader:$n.backgroundCube.vertexShader,fragmentShader:$n.backgroundCube.fragmentShader,side:_n,depthTest:!1,depthWrite:!1,fog:!1})),f.geometry.deleteAttribute("normal"),f.geometry.deleteAttribute("uv"),f.onBeforeRender=function(G,L,B){this.matrixWorld.copyPosition(B.matrixWorld)},Object.defineProperty(f.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(f)),dr.copy(M.backgroundRotation),dr.x*=-1,dr.y*=-1,dr.z*=-1,A.isCubeTexture&&A.isRenderTargetTexture===!1&&(dr.y*=-1,dr.z*=-1),f.material.uniforms.envMap.value=A,f.material.uniforms.flipEnvMap.value=A.isCubeTexture&&A.isRenderTargetTexture===!1?-1:1,f.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,f.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,f.material.uniforms.backgroundRotation.value.setFromMatrix4(IS.makeRotationFromEuler(dr)),f.material.toneMapped=xt.getTransfer(A.colorSpace)!==Ct,(d!==A||c!==A.version||m!==t.toneMapping)&&(f.material.needsUpdate=!0,d=A,c=A.version,m=t.toneMapping),f.layers.enableAll(),b.unshift(f,f.geometry,f.material,0,0,null)):A&&A.isTexture&&(u===void 0&&(u=new Pn(new Ss(2,2),new ei({name:"BackgroundMaterial",uniforms:_s($n.background.uniforms),vertexShader:$n.background.vertexShader,fragmentShader:$n.background.fragmentShader,side:Ki,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(u)),u.material.uniforms.t2D.value=A,u.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,u.material.toneMapped=xt.getTransfer(A.colorSpace)!==Ct,A.matrixAutoUpdate===!0&&A.updateMatrix(),u.material.uniforms.uvTransform.value.copy(A.matrix),(d!==A||c!==A.version||m!==t.toneMapping)&&(u.material.needsUpdate=!0,d=A,c=A.version,m=t.toneMapping),u.layers.enableAll(),b.unshift(u,u.geometry,u.material,0,0,null))}function h(b,M){b.getRGB(Ba,Np(t)),i.buffers.color.setClear(Ba.r,Ba.g,Ba.b,M,a)}return{getClearColor:function(){return o},setClearColor:function(b,M=1){o.set(b),l=M,h(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(b){l=b,h(o,l)},render:x,addToRenderList:_}}function OS(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},r=c(null);let s=r,a=!1;function o(E,C,V,W,Z){let ne=!1;const se=d(W,V,C);s!==se&&(s=se,u(s.object)),ne=m(E,W,V,Z),ne&&p(E,W,V,Z),Z!==null&&e.update(Z,t.ELEMENT_ARRAY_BUFFER),(ne||a)&&(a=!1,A(E,C,V,W),Z!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(Z).buffer))}function l(){return t.createVertexArray()}function u(E){return t.bindVertexArray(E)}function f(E){return t.deleteVertexArray(E)}function d(E,C,V){const W=V.wireframe===!0;let Z=i[E.id];Z===void 0&&(Z={},i[E.id]=Z);let ne=Z[C.id];ne===void 0&&(ne={},Z[C.id]=ne);let se=ne[W];return se===void 0&&(se=c(l()),ne[W]=se),se}function c(E){const C=[],V=[],W=[];for(let Z=0;Z<n;Z++)C[Z]=0,V[Z]=0,W[Z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:C,enabledAttributes:V,attributeDivisors:W,object:E,attributes:{},index:null}}function m(E,C,V,W){const Z=s.attributes,ne=C.attributes;let se=0;const de=V.getAttributes();for(const te in de)if(de[te].location>=0){const Fe=Z[te];let ze=ne[te];if(ze===void 0&&(te==="instanceMatrix"&&E.instanceMatrix&&(ze=E.instanceMatrix),te==="instanceColor"&&E.instanceColor&&(ze=E.instanceColor)),Fe===void 0||Fe.attribute!==ze||ze&&Fe.data!==ze.data)return!0;se++}return s.attributesNum!==se||s.index!==W}function p(E,C,V,W){const Z={},ne=C.attributes;let se=0;const de=V.getAttributes();for(const te in de)if(de[te].location>=0){let Fe=ne[te];Fe===void 0&&(te==="instanceMatrix"&&E.instanceMatrix&&(Fe=E.instanceMatrix),te==="instanceColor"&&E.instanceColor&&(Fe=E.instanceColor));const ze={};ze.attribute=Fe,Fe&&Fe.data&&(ze.data=Fe.data),Z[te]=ze,se++}s.attributes=Z,s.attributesNum=se,s.index=W}function x(){const E=s.newAttributes;for(let C=0,V=E.length;C<V;C++)E[C]=0}function _(E){h(E,0)}function h(E,C){const V=s.newAttributes,W=s.enabledAttributes,Z=s.attributeDivisors;V[E]=1,W[E]===0&&(t.enableVertexAttribArray(E),W[E]=1),Z[E]!==C&&(t.vertexAttribDivisor(E,C),Z[E]=C)}function b(){const E=s.newAttributes,C=s.enabledAttributes;for(let V=0,W=C.length;V<W;V++)C[V]!==E[V]&&(t.disableVertexAttribArray(V),C[V]=0)}function M(E,C,V,W,Z,ne,se){se===!0?t.vertexAttribIPointer(E,C,V,Z,ne):t.vertexAttribPointer(E,C,V,W,Z,ne)}function A(E,C,V,W){x();const Z=W.attributes,ne=V.getAttributes(),se=C.defaultAttributeValues;for(const de in ne){const te=ne[de];if(te.location>=0){let Le=Z[de];if(Le===void 0&&(de==="instanceMatrix"&&E.instanceMatrix&&(Le=E.instanceMatrix),de==="instanceColor"&&E.instanceColor&&(Le=E.instanceColor)),Le!==void 0){const Fe=Le.normalized,ze=Le.itemSize,Ze=e.get(Le);if(Ze===void 0)continue;const Je=Ze.buffer,ge=Ze.type,we=Ze.bytesPerElement,Ie=ge===t.INT||ge===t.UNSIGNED_INT||Le.gpuType===vu;if(Le.isInterleavedBufferAttribute){const K=Le.data,xe=K.stride,_e=Le.offset;if(K.isInstancedInterleavedBuffer){for(let Ce=0;Ce<te.locationSize;Ce++)h(te.location+Ce,K.meshPerAttribute);E.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=K.meshPerAttribute*K.count)}else for(let Ce=0;Ce<te.locationSize;Ce++)_(te.location+Ce);t.bindBuffer(t.ARRAY_BUFFER,Je);for(let Ce=0;Ce<te.locationSize;Ce++)M(te.location+Ce,ze/te.locationSize,ge,Fe,xe*we,(_e+ze/te.locationSize*Ce)*we,Ie)}else{if(Le.isInstancedBufferAttribute){for(let K=0;K<te.locationSize;K++)h(te.location+K,Le.meshPerAttribute);E.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=Le.meshPerAttribute*Le.count)}else for(let K=0;K<te.locationSize;K++)_(te.location+K);t.bindBuffer(t.ARRAY_BUFFER,Je);for(let K=0;K<te.locationSize;K++)M(te.location+K,ze/te.locationSize,ge,Fe,ze*we,ze/te.locationSize*K*we,Ie)}}else if(se!==void 0){const Fe=se[de];if(Fe!==void 0)switch(Fe.length){case 2:t.vertexAttrib2fv(te.location,Fe);break;case 3:t.vertexAttrib3fv(te.location,Fe);break;case 4:t.vertexAttrib4fv(te.location,Fe);break;default:t.vertexAttrib1fv(te.location,Fe)}}}}b()}function G(){X();for(const E in i){const C=i[E];for(const V in C){const W=C[V];for(const Z in W)f(W[Z].object),delete W[Z];delete C[V]}delete i[E]}}function L(E){if(i[E.id]===void 0)return;const C=i[E.id];for(const V in C){const W=C[V];for(const Z in W)f(W[Z].object),delete W[Z];delete C[V]}delete i[E.id]}function B(E){for(const C in i){const V=i[C];if(V[E.id]===void 0)continue;const W=V[E.id];for(const Z in W)f(W[Z].object),delete W[Z];delete V[E.id]}}function X(){Y(),a=!0,s!==r&&(s=r,u(s.object))}function Y(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:X,resetDefaultState:Y,dispose:G,releaseStatesOfGeometry:L,releaseStatesOfProgram:B,initAttributes:x,enableAttribute:_,disableUnusedAttributes:b}}function NS(t,e,n){let i;function r(u){i=u}function s(u,f){t.drawArrays(i,u,f),n.update(f,i,1)}function a(u,f,d){d!==0&&(t.drawArraysInstanced(i,u,f,d),n.update(f,i,d))}function o(u,f,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,u,0,f,0,d);let m=0;for(let p=0;p<d;p++)m+=f[p];n.update(m,i,1)}function l(u,f,d,c){if(d===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<u.length;p++)a(u[p],f[p],c[p]);else{m.multiDrawArraysInstancedWEBGL(i,u,0,f,0,c,0,d);let p=0;for(let x=0;x<d;x++)p+=f[x];for(let x=0;x<c.length;x++)n.update(p,i,c[x])}}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function FS(t,e,n,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const B=e.get("EXT_texture_filter_anisotropic");r=t.getParameter(B.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(B){return!(B!==Hn&&i.convert(B)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(B){const X=B===la&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(B!==Mi&&i.convert(B)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&B!==gi&&!X)}function l(B){if(B==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";B="mediump"}return B==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let u=n.precision!==void 0?n.precision:"highp";const f=l(u);f!==u&&(u=f);const d=n.logarithmicDepthBuffer===!0,c=n.reverseDepthBuffer===!0&&e.has("EXT_clip_control");if(c===!0){const B=e.get("EXT_clip_control");B.clipControlEXT(B.LOWER_LEFT_EXT,B.ZERO_TO_ONE_EXT)}const m=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),p=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=t.getParameter(t.MAX_TEXTURE_SIZE),_=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),h=t.getParameter(t.MAX_VERTEX_ATTRIBS),b=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),M=t.getParameter(t.MAX_VARYING_VECTORS),A=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),G=p>0,L=t.getParameter(t.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:u,logarithmicDepthBuffer:d,reverseDepthBuffer:c,maxTextures:m,maxVertexTextures:p,maxTextureSize:x,maxCubemapSize:_,maxAttributes:h,maxVertexUniforms:b,maxVaryings:M,maxFragmentUniforms:A,vertexTextures:G,maxSamples:L}}function BS(t){const e=this;let n=null,i=0,r=!1,s=!1;const a=new zi,o=new ut,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,c){const m=d.length!==0||c||i!==0||r;return r=c,i=d.length,m},this.beginShadows=function(){s=!0,f(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,c){n=f(d,c,0)},this.setState=function(d,c,m){const p=d.clippingPlanes,x=d.clipIntersection,_=d.clipShadows,h=t.get(d);if(!r||p===null||p.length===0||s&&!_)s?f(null):u();else{const b=s?0:i,M=b*4;let A=h.clippingState||null;l.value=A,A=f(p,c,M,m);for(let G=0;G!==M;++G)A[G]=n[G];h.clippingState=A,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=b}};function u(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function f(d,c,m,p){const x=d!==null?d.length:0;let _=null;if(x!==0){if(_=l.value,p!==!0||_===null){const h=m+x*4,b=c.matrixWorldInverse;o.getNormalMatrix(b),(_===null||_.length<h)&&(_=new Float32Array(h));for(let M=0,A=m;M!==x;++M,A+=4)a.copy(d[M]).applyMatrix4(b,o),a.normal.toArray(_,A),_[A+3]=a.constant}l.value=_,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,_}}function kS(t){let e=new WeakMap;function n(a,o){return o===cc?a.mapping=hs:o===uc&&(a.mapping=ds),a}function i(a){if(a&&a.isTexture){const o=a.mapping;if(o===cc||o===uc)if(e.has(a)){const l=e.get(a).texture;return n(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const u=new Kv(l.height);return u.fromEquirectangularTexture(t,a),e.set(a,u),a.addEventListener("dispose",r),n(u.texture,a.mapping)}else return null}}return a}function r(a){const o=a.target;o.removeEventListener("dispose",r);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class Hp extends Fp{constructor(e=-1,n=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,a=i+e,o=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,f=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=u*this.view.offsetX,a=s+u*this.view.width,o-=f*this.view.offsetY,l=o-f*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const es=4,Kf=[.125,.215,.35,.446,.526,.582],ts=20,wl=new Hp,Zf=new Mt;let Al=null,Cl=0,Rl=0,Pl=!1;const _r=(1+Math.sqrt(5))/2,Kr=1/_r,Jf=[new ve(-_r,Kr,0),new ve(_r,Kr,0),new ve(-Kr,0,_r),new ve(Kr,0,_r),new ve(0,_r,-Kr),new ve(0,_r,Kr),new ve(-1,1,-1),new ve(1,1,-1),new ve(-1,1,1),new ve(1,1,1)];class Qf{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100){Al=this._renderer.getRenderTarget(),Cl=this._renderer.getActiveCubeFace(),Rl=this._renderer.getActiveMipmapLevel(),Pl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),n>0&&this._blur(s,0,0,n),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=nh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=th(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Al,Cl,Rl),this._renderer.xr.enabled=Pl,e.scissorTest=!1,ka(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===hs||e.mapping===ds?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Al=this._renderer.getRenderTarget(),Cl=this._renderer.getActiveCubeFace(),Rl=this._renderer.getActiveMipmapLevel(),Pl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:hn,minFilter:hn,generateMipmaps:!1,type:la,format:Hn,colorSpace:tr,depthBuffer:!1},r=eh(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=eh(e,n,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=zS(s)),this._blurMaterial=HS(s,e,n)}return r}_compileMaterial(e){const n=new Pn(this._lodPlanes[0],e);this._renderer.compile(n,wl)}_sceneToCubeUV(e,n,i,r){const o=new An(90,1,n,i),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],f=this._renderer,d=f.autoClear,c=f.toneMapping;f.getClearColor(Zf),f.toneMapping=Yi,f.autoClear=!1;const m=new Au({name:"PMREM.Background",side:_n,depthWrite:!1,depthTest:!1}),p=new Pn(new ha,m);let x=!1;const _=e.background;_?_.isColor&&(m.color.copy(_),e.background=null,x=!0):(m.color.copy(Zf),x=!0);for(let h=0;h<6;h++){const b=h%3;b===0?(o.up.set(0,l[h],0),o.lookAt(u[h],0,0)):b===1?(o.up.set(0,0,l[h]),o.lookAt(0,u[h],0)):(o.up.set(0,l[h],0),o.lookAt(0,0,u[h]));const M=this._cubeSize;ka(r,b*M,h>2?M:0,M,M),f.setRenderTarget(r),x&&f.render(p,o),f.render(e,o)}p.geometry.dispose(),p.material.dispose(),f.toneMapping=c,f.autoClear=d,e.background=_}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===hs||e.mapping===ds;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=nh()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=th());const s=r?this._cubemapMaterial:this._equirectMaterial,a=new Pn(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;ka(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(a,wl)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const a=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=Jf[(r-s-1)%Jf.length];this._blur(e,s-1,s,a,o)}n.autoClear=i}_blur(e,n,i,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,n,i,r,"latitudinal",s),this._halfBlur(a,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,a,o){const l=this._renderer,u=this._blurMaterial,f=3,d=new Pn(this._lodPlanes[r],u),c=u.uniforms,m=this._sizeLods[i]-1,p=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*ts-1),x=s/p,_=isFinite(s)?1+Math.floor(f*x):ts;_>ts;const h=[];let b=0;for(let B=0;B<ts;++B){const X=B/x,Y=Math.exp(-X*X/2);h.push(Y),B===0?b+=Y:B<_&&(b+=2*Y)}for(let B=0;B<h.length;B++)h[B]=h[B]/b;c.envMap.value=e.texture,c.samples.value=_,c.weights.value=h,c.latitudinal.value=a==="latitudinal",o&&(c.poleAxis.value=o);const{_lodMax:M}=this;c.dTheta.value=p,c.mipInt.value=M-i;const A=this._sizeLods[r],G=3*A*(r>M-es?r-M+es:0),L=4*(this._cubeSize-A);ka(n,G,L,3*A,2*A),l.setRenderTarget(n),l.render(d,wl)}}function zS(t){const e=[],n=[],i=[];let r=t;const s=t-es+1+Kf.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);n.push(o);let l=1/o;a>t-es?l=Kf[a-t+es-1]:a===0&&(l=0),i.push(l);const u=1/(o-2),f=-u,d=1+u,c=[f,f,d,f,d,d,f,f,d,d,f,d],m=6,p=6,x=3,_=2,h=1,b=new Float32Array(x*p*m),M=new Float32Array(_*p*m),A=new Float32Array(h*p*m);for(let L=0;L<m;L++){const B=L%3*2/3-1,X=L>2?0:-1,Y=[B,X,0,B+2/3,X,0,B+2/3,X+1,0,B,X,0,B+2/3,X+1,0,B,X+1,0];b.set(Y,x*p*L),M.set(c,_*p*L);const E=[L,L,L,L,L,L];A.set(E,h*p*L)}const G=new nr;G.setAttribute("position",new vn(b,x)),G.setAttribute("uv",new vn(M,_)),G.setAttribute("faceIndex",new vn(A,h)),e.push(G),r>es&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function eh(t,e,n){const i=new Ir(t,e,n);return i.texture.mapping=Do,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function ka(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function HS(t,e,n){const i=new Float32Array(ts),r=new ve(0,1,0);return new ei({name:"SphericalGaussianBlur",defines:{n:ts,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Cu(),fragmentShader:`

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
		`,blending:qi,depthTest:!1,depthWrite:!1})}function th(){return new ei({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Cu(),fragmentShader:`

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
		`,blending:qi,depthTest:!1,depthWrite:!1})}function nh(){return new ei({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Cu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:qi,depthTest:!1,depthWrite:!1})}function Cu(){return`

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
	`}function VS(t){let e=new WeakMap,n=null;function i(o){if(o&&o.isTexture){const l=o.mapping,u=l===cc||l===uc,f=l===hs||l===ds;if(u||f){let d=e.get(o);const c=d!==void 0?d.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==c)return n===null&&(n=new Qf(t)),d=u?n.fromEquirectangular(o,d):n.fromCubemap(o,d),d.texture.pmremVersion=o.pmremVersion,e.set(o,d),d.texture;if(d!==void 0)return d.texture;{const m=o.image;return u&&m&&m.height>0||f&&m&&r(m)?(n===null&&(n=new Qf(t)),d=u?n.fromEquirectangular(o):n.fromCubemap(o),d.texture.pmremVersion=o.pmremVersion,e.set(o,d),o.addEventListener("dispose",s),d.texture):null}}}return o}function r(o){let l=0;const u=6;for(let f=0;f<u;f++)o[f]!==void 0&&l++;return l===u}function s(o){const l=o.target;l.removeEventListener("dispose",s);const u=e.get(l);u!==void 0&&(e.delete(l),u.dispose())}function a(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:a}}function GS(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const r=n(i);return r===null&&to("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function WS(t,e,n,i){const r={},s=new WeakMap;function a(d){const c=d.target;c.index!==null&&e.remove(c.index);for(const p in c.attributes)e.remove(c.attributes[p]);for(const p in c.morphAttributes){const x=c.morphAttributes[p];for(let _=0,h=x.length;_<h;_++)e.remove(x[_])}c.removeEventListener("dispose",a),delete r[c.id];const m=s.get(c);m&&(e.remove(m),s.delete(c)),i.releaseStatesOfGeometry(c),c.isInstancedBufferGeometry===!0&&delete c._maxInstanceCount,n.memory.geometries--}function o(d,c){return r[c.id]===!0||(c.addEventListener("dispose",a),r[c.id]=!0,n.memory.geometries++),c}function l(d){const c=d.attributes;for(const p in c)e.update(c[p],t.ARRAY_BUFFER);const m=d.morphAttributes;for(const p in m){const x=m[p];for(let _=0,h=x.length;_<h;_++)e.update(x[_],t.ARRAY_BUFFER)}}function u(d){const c=[],m=d.index,p=d.attributes.position;let x=0;if(m!==null){const b=m.array;x=m.version;for(let M=0,A=b.length;M<A;M+=3){const G=b[M+0],L=b[M+1],B=b[M+2];c.push(G,L,L,B,B,G)}}else if(p!==void 0){const b=p.array;x=p.version;for(let M=0,A=b.length/3-1;M<A;M+=3){const G=M+0,L=M+1,B=M+2;c.push(G,L,L,B,B,G)}}else return;const _=new(Rp(c)?Op:Up)(c,1);_.version=x;const h=s.get(d);h&&e.remove(h),s.set(d,_)}function f(d){const c=s.get(d);if(c){const m=d.index;m!==null&&c.version<m.version&&u(d)}else u(d);return s.get(d)}return{get:o,update:l,getWireframeAttribute:f}}function XS(t,e,n){let i;function r(c){i=c}let s,a;function o(c){s=c.type,a=c.bytesPerElement}function l(c,m){t.drawElements(i,m,s,c*a),n.update(m,i,1)}function u(c,m,p){p!==0&&(t.drawElementsInstanced(i,m,s,c*a,p),n.update(m,i,p))}function f(c,m,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,m,0,s,c,0,p);let _=0;for(let h=0;h<p;h++)_+=m[h];n.update(_,i,1)}function d(c,m,p,x){if(p===0)return;const _=e.get("WEBGL_multi_draw");if(_===null)for(let h=0;h<c.length;h++)u(c[h]/a,m[h],x[h]);else{_.multiDrawElementsInstancedWEBGL(i,m,0,s,c,0,x,0,p);let h=0;for(let b=0;b<p;b++)h+=m[b];for(let b=0;b<x.length;b++)n.update(h,i,x[b])}}this.setMode=r,this.setIndex=o,this.render=l,this.renderInstances=u,this.renderMultiDraw=f,this.renderMultiDrawInstances=d}function jS(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(n.calls++,a){case t.TRIANGLES:n.triangles+=o*(s/3);break;case t.LINES:n.lines+=o*(s/2);break;case t.LINE_STRIP:n.lines+=o*(s-1);break;case t.LINE_LOOP:n.lines+=o*s;break;case t.POINTS:n.points+=o*s;break;default:break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function qS(t,e,n){const i=new WeakMap,r=new Nt;function s(a,o,l){const u=a.morphTargetInfluences,f=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=f!==void 0?f.length:0;let c=i.get(o);if(c===void 0||c.count!==d){let E=function(){X.dispose(),i.delete(o),o.removeEventListener("dispose",E)};var m=E;c!==void 0&&c.texture.dispose();const p=o.morphAttributes.position!==void 0,x=o.morphAttributes.normal!==void 0,_=o.morphAttributes.color!==void 0,h=o.morphAttributes.position||[],b=o.morphAttributes.normal||[],M=o.morphAttributes.color||[];let A=0;p===!0&&(A=1),x===!0&&(A=2),_===!0&&(A=3);let G=o.attributes.position.count*A,L=1;G>e.maxTextureSize&&(L=Math.ceil(G/e.maxTextureSize),G=e.maxTextureSize);const B=new Float32Array(G*L*4*d),X=new Dp(B,G,L,d);X.type=gi,X.needsUpdate=!0;const Y=A*4;for(let C=0;C<d;C++){const V=h[C],W=b[C],Z=M[C],ne=G*L*4*C;for(let se=0;se<V.count;se++){const de=se*Y;p===!0&&(r.fromBufferAttribute(V,se),B[ne+de+0]=r.x,B[ne+de+1]=r.y,B[ne+de+2]=r.z,B[ne+de+3]=0),x===!0&&(r.fromBufferAttribute(W,se),B[ne+de+4]=r.x,B[ne+de+5]=r.y,B[ne+de+6]=r.z,B[ne+de+7]=0),_===!0&&(r.fromBufferAttribute(Z,se),B[ne+de+8]=r.x,B[ne+de+9]=r.y,B[ne+de+10]=r.z,B[ne+de+11]=Z.itemSize===4?r.w:1)}}c={count:d,texture:X,size:new yt(G,L)},i.set(o,c),o.addEventListener("dispose",E)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",a.morphTexture,n);else{let p=0;for(let _=0;_<u.length;_++)p+=u[_];const x=o.morphTargetsRelative?1:1-p;l.getUniforms().setValue(t,"morphTargetBaseInfluence",x),l.getUniforms().setValue(t,"morphTargetInfluences",u)}l.getUniforms().setValue(t,"morphTargetsTexture",c.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",c.size)}return{update:s}}function YS(t,e,n,i){let r=new WeakMap;function s(l){const u=i.render.frame,f=l.geometry,d=e.get(l,f);if(r.get(d)!==u&&(e.update(d),r.set(d,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),r.get(l)!==u&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),r.set(l,u))),l.isSkinnedMesh){const c=l.skeleton;r.get(c)!==u&&(c.update(),r.set(c,u))}return d}function a(){r=new WeakMap}function o(l){const u=l.target;u.removeEventListener("dispose",o),n.remove(u.instanceMatrix),u.instanceColor!==null&&n.remove(u.instanceColor)}return{update:s,dispose:a}}class Vp extends $t{constructor(e,n,i,r,s,a,o,l,u,f=os){if(f!==os&&f!==ms)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&f===os&&(i=Lr),i===void 0&&f===ms&&(i=ps),super(null,r,s,a,o,l,f,i,u),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=o!==void 0?o:Rn,this.minFilter=l!==void 0?l:Rn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}const Gp=new $t,ih=new Vp(1,1),Wp=new Dp,Xp=new Uv,jp=new Bp,rh=[],sh=[],ah=new Float32Array(16),oh=new Float32Array(9),lh=new Float32Array(4);function Ms(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=rh[r];if(s===void 0&&(s=new Float32Array(r),rh[r]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=n,t[a].toArray(s,o)}return s}function Ht(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Vt(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function Uo(t,e){let n=sh[e];n===void 0&&(n=new Int32Array(e),sh[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function $S(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function KS(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ht(n,e))return;t.uniform2fv(this.addr,e),Vt(n,e)}}function ZS(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Ht(n,e))return;t.uniform3fv(this.addr,e),Vt(n,e)}}function JS(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ht(n,e))return;t.uniform4fv(this.addr,e),Vt(n,e)}}function QS(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Ht(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Vt(n,e)}else{if(Ht(n,i))return;lh.set(i),t.uniformMatrix2fv(this.addr,!1,lh),Vt(n,i)}}function eM(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Ht(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Vt(n,e)}else{if(Ht(n,i))return;oh.set(i),t.uniformMatrix3fv(this.addr,!1,oh),Vt(n,i)}}function tM(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Ht(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Vt(n,e)}else{if(Ht(n,i))return;ah.set(i),t.uniformMatrix4fv(this.addr,!1,ah),Vt(n,i)}}function nM(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function iM(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ht(n,e))return;t.uniform2iv(this.addr,e),Vt(n,e)}}function rM(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Ht(n,e))return;t.uniform3iv(this.addr,e),Vt(n,e)}}function sM(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ht(n,e))return;t.uniform4iv(this.addr,e),Vt(n,e)}}function aM(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function oM(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ht(n,e))return;t.uniform2uiv(this.addr,e),Vt(n,e)}}function lM(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Ht(n,e))return;t.uniform3uiv(this.addr,e),Vt(n,e)}}function cM(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ht(n,e))return;t.uniform4uiv(this.addr,e),Vt(n,e)}}function uM(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);let s;this.type===t.SAMPLER_2D_SHADOW?(ih.compareFunction=Cp,s=ih):s=Gp,n.setTexture2D(e||s,r)}function fM(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||Xp,r)}function hM(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||jp,r)}function dM(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||Wp,r)}function pM(t){switch(t){case 5126:return $S;case 35664:return KS;case 35665:return ZS;case 35666:return JS;case 35674:return QS;case 35675:return eM;case 35676:return tM;case 5124:case 35670:return nM;case 35667:case 35671:return iM;case 35668:case 35672:return rM;case 35669:case 35673:return sM;case 5125:return aM;case 36294:return oM;case 36295:return lM;case 36296:return cM;case 35678:case 36198:case 36298:case 36306:case 35682:return uM;case 35679:case 36299:case 36307:return fM;case 35680:case 36300:case 36308:case 36293:return hM;case 36289:case 36303:case 36311:case 36292:return dM}}function mM(t,e){t.uniform1fv(this.addr,e)}function _M(t,e){const n=Ms(e,this.size,2);t.uniform2fv(this.addr,n)}function gM(t,e){const n=Ms(e,this.size,3);t.uniform3fv(this.addr,n)}function vM(t,e){const n=Ms(e,this.size,4);t.uniform4fv(this.addr,n)}function xM(t,e){const n=Ms(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function yM(t,e){const n=Ms(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function SM(t,e){const n=Ms(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function MM(t,e){t.uniform1iv(this.addr,e)}function bM(t,e){t.uniform2iv(this.addr,e)}function TM(t,e){t.uniform3iv(this.addr,e)}function EM(t,e){t.uniform4iv(this.addr,e)}function wM(t,e){t.uniform1uiv(this.addr,e)}function AM(t,e){t.uniform2uiv(this.addr,e)}function CM(t,e){t.uniform3uiv(this.addr,e)}function RM(t,e){t.uniform4uiv(this.addr,e)}function PM(t,e,n){const i=this.cache,r=e.length,s=Uo(n,r);Ht(i,s)||(t.uniform1iv(this.addr,s),Vt(i,s));for(let a=0;a!==r;++a)n.setTexture2D(e[a]||Gp,s[a])}function DM(t,e,n){const i=this.cache,r=e.length,s=Uo(n,r);Ht(i,s)||(t.uniform1iv(this.addr,s),Vt(i,s));for(let a=0;a!==r;++a)n.setTexture3D(e[a]||Xp,s[a])}function LM(t,e,n){const i=this.cache,r=e.length,s=Uo(n,r);Ht(i,s)||(t.uniform1iv(this.addr,s),Vt(i,s));for(let a=0;a!==r;++a)n.setTextureCube(e[a]||jp,s[a])}function IM(t,e,n){const i=this.cache,r=e.length,s=Uo(n,r);Ht(i,s)||(t.uniform1iv(this.addr,s),Vt(i,s));for(let a=0;a!==r;++a)n.setTexture2DArray(e[a]||Wp,s[a])}function UM(t){switch(t){case 5126:return mM;case 35664:return _M;case 35665:return gM;case 35666:return vM;case 35674:return xM;case 35675:return yM;case 35676:return SM;case 5124:case 35670:return MM;case 35667:case 35671:return bM;case 35668:case 35672:return TM;case 35669:case 35673:return EM;case 5125:return wM;case 36294:return AM;case 36295:return CM;case 36296:return RM;case 35678:case 36198:case 36298:case 36306:case 35682:return PM;case 35679:case 36299:case 36307:return DM;case 35680:case 36300:case 36308:case 36293:return LM;case 36289:case 36303:case 36311:case 36292:return IM}}class OM{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=pM(n.type)}}class NM{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=UM(n.type)}}class FM{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,n[o.id],i)}}}const Dl=/(\w+)(\])?(\[|\.)?/g;function ch(t,e){t.seq.push(e),t.map[e.id]=e}function BM(t,e,n){const i=t.name,r=i.length;for(Dl.lastIndex=0;;){const s=Dl.exec(i),a=Dl.lastIndex;let o=s[1];const l=s[2]==="]",u=s[3];if(l&&(o=o|0),u===void 0||u==="["&&a+2===r){ch(n,u===void 0?new OM(o,t,e):new NM(o,t,e));break}else{let d=n.map[o];d===void 0&&(d=new FM(o),ch(n,d)),n=d}}}class no{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(n,r),a=e.getUniformLocation(n,s.name);BM(s,a,this)}}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,a=n.length;s!==a;++s){const o=n[s],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in n&&i.push(a)}return i}}function uh(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const kM=37297;let zM=0;function HM(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let a=r;a<s;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${n[a]}`)}return i.join(`
`)}function VM(t){const e=xt.getPrimaries(xt.workingColorSpace),n=xt.getPrimaries(t);let i;switch(e===n?i="":e===ho&&n===fo?i="LinearDisplayP3ToLinearSRGB":e===fo&&n===ho&&(i="LinearSRGBToLinearDisplayP3"),t){case tr:case Lo:return[i,"LinearTransferOETF"];case qn:case Tu:return[i,"sRGBTransferOETF"];default:return[i,"LinearTransferOETF"]}}function fh(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),r=t.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const a=parseInt(s[1]);return n.toUpperCase()+`

`+r+`

`+HM(t.getShaderSource(e),a)}else return r}function GM(t,e){const n=VM(e);return`vec4 ${t}( vec4 value ) { return ${n[0]}( ${n[1]}( value ) ); }`}function WM(t,e){let n;switch(e){case sv:n="Linear";break;case av:n="Reinhard";break;case ov:n="Cineon";break;case lv:n="ACESFilmic";break;case uv:n="AgX";break;case fv:n="Neutral";break;case cv:n="Custom";break;default:n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const za=new ve;function XM(){xt.getLuminanceCoefficients(za);const t=za.x.toFixed(4),e=za.y.toFixed(4),n=za.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function jM(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Fs).join(`
`)}function qM(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function YM(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),a=s.name;let o=1;s.type===t.FLOAT_MAT2&&(o=2),s.type===t.FLOAT_MAT3&&(o=3),s.type===t.FLOAT_MAT4&&(o=4),n[a]={type:s.type,location:t.getAttribLocation(e,a),locationSize:o}}return n}function Fs(t){return t!==""}function hh(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function dh(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const $M=/^[ \t]*#include +<([\w\d./]+)>/gm;function zc(t){return t.replace($M,ZM)}const KM=new Map;function ZM(t,e){let n=ct[e];if(n===void 0){const i=KM.get(e);if(i!==void 0)n=ct[i];else throw new Error("Can not resolve #include <"+e+">")}return zc(n)}const JM=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ph(t){return t.replace(JM,QM)}function QM(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function mh(t){let e=`precision ${t.precision} float;
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
#define LOW_PRECISION`),e}function eb(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===mp?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===B0?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===di&&(e="SHADOWMAP_TYPE_VSM"),e}function tb(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case hs:case ds:e="ENVMAP_TYPE_CUBE";break;case Do:e="ENVMAP_TYPE_CUBE_UV";break}return e}function nb(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case ds:e="ENVMAP_MODE_REFRACTION";break}return e}function ib(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case _p:e="ENVMAP_BLENDING_MULTIPLY";break;case iv:e="ENVMAP_BLENDING_MIX";break;case rv:e="ENVMAP_BLENDING_ADD";break}return e}function rb(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function sb(t,e,n,i){const r=t.getContext(),s=n.defines;let a=n.vertexShader,o=n.fragmentShader;const l=eb(n),u=tb(n),f=nb(n),d=ib(n),c=rb(n),m=jM(n),p=qM(s),x=r.createProgram();let _,h,b=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(_=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,p].filter(Fs).join(`
`),_.length>0&&(_+=`
`),h=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,p].filter(Fs).join(`
`),h.length>0&&(h+=`
`)):(_=[mh(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,p,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+f:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Fs).join(`
`),h=[mh(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,p,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.envMap?"#define "+f:"",n.envMap?"#define "+d:"",c?"#define CUBEUV_TEXEL_WIDTH "+c.texelWidth:"",c?"#define CUBEUV_TEXEL_HEIGHT "+c.texelHeight:"",c?"#define CUBEUV_MAX_MIP "+c.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Yi?"#define TONE_MAPPING":"",n.toneMapping!==Yi?ct.tonemapping_pars_fragment:"",n.toneMapping!==Yi?WM("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",ct.colorspace_pars_fragment,GM("linearToOutputTexel",n.outputColorSpace),XM(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Fs).join(`
`)),a=zc(a),a=hh(a,n),a=dh(a,n),o=zc(o),o=hh(o,n),o=dh(o,n),a=ph(a),o=ph(o),n.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,_=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+_,h=["#define varying in",n.glslVersion===Lf?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Lf?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+h);const M=b+_+a,A=b+h+o,G=uh(r,r.VERTEX_SHADER,M),L=uh(r,r.FRAGMENT_SHADER,A);r.attachShader(x,G),r.attachShader(x,L),n.index0AttributeName!==void 0?r.bindAttribLocation(x,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(x,0,"position"),r.linkProgram(x);function B(C){if(t.debug.checkShaderErrors){const V=r.getProgramInfoLog(x).trim(),W=r.getShaderInfoLog(G).trim(),Z=r.getShaderInfoLog(L).trim();let ne=!0,se=!0;if(r.getProgramParameter(x,r.LINK_STATUS)===!1)if(ne=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,x,G,L);else{const de=fh(r,G,"vertex"),te=fh(r,L,"fragment")}else V!==""||(W===""||Z==="")&&(se=!1);se&&(C.diagnostics={runnable:ne,programLog:V,vertexShader:{log:W,prefix:_},fragmentShader:{log:Z,prefix:h}})}r.deleteShader(G),r.deleteShader(L),X=new no(r,x),Y=YM(r,x)}let X;this.getUniforms=function(){return X===void 0&&B(this),X};let Y;this.getAttributes=function(){return Y===void 0&&B(this),Y};let E=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return E===!1&&(E=r.getProgramParameter(x,kM)),E},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(x),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=zM++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=G,this.fragmentShader=L,this}let ab=0;class ob{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new lb(e),n.set(e,i)),i}}class lb{constructor(e){this.id=ab++,this.code=e,this.usedTimes=0}}function cb(t,e,n,i,r,s,a){const o=new wu,l=new ob,u=new Set,f=[],d=r.logarithmicDepthBuffer,c=r.reverseDepthBuffer,m=r.vertexTextures;let p=r.precision;const x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(E){return u.add(E),E===0?"uv":`uv${E}`}function h(E,C,V,W,Z){const ne=W.fog,se=Z.geometry,de=E.isMeshStandardMaterial?W.environment:null,te=(E.isMeshStandardMaterial?n:e).get(E.envMap||de),Le=te&&te.mapping===Do?te.image.height:null,Fe=x[E.type];E.precision!==null&&(p=r.getMaxPrecision(E.precision),E.precision);const ze=se.morphAttributes.position||se.morphAttributes.normal||se.morphAttributes.color,Ze=ze!==void 0?ze.length:0;let Je=0;se.morphAttributes.position!==void 0&&(Je=1),se.morphAttributes.normal!==void 0&&(Je=2),se.morphAttributes.color!==void 0&&(Je=3);let ge,we,Ie,K;if(Fe){const Kt=$n[Fe];ge=Kt.vertexShader,we=Kt.fragmentShader}else ge=E.vertexShader,we=E.fragmentShader,l.update(E),Ie=l.getVertexShaderID(E),K=l.getFragmentShaderID(E);const xe=t.getRenderTarget(),_e=Z.isInstancedMesh===!0,Ce=Z.isBatchedMesh===!0,Ve=!!E.map,He=!!E.matcap,w=!!te,H=!!E.aoMap,j=!!E.lightMap,ue=!!E.bumpMap,le=!!E.normalMap,Me=!!E.displacementMap,Se=!!E.emissiveMap,g=!!E.metalnessMap,v=!!E.roughnessMap,T=E.anisotropy>0,P=E.clearcoat>0,O=E.dispersion>0,F=E.iridescence>0,Q=E.sheen>0,q=E.transmission>0,re=T&&!!E.anisotropyMap,Te=P&&!!E.clearcoatMap,oe=P&&!!E.clearcoatNormalMap,ye=P&&!!E.clearcoatRoughnessMap,Be=F&&!!E.iridescenceMap,Ue=F&&!!E.iridescenceThicknessMap,Ne=Q&&!!E.sheenColorMap,$e=Q&&!!E.sheenRoughnessMap,qe=!!E.specularMap,rt=!!E.specularColorMap,ee=!!E.specularIntensityMap,je=q&&!!E.transmissionMap,he=q&&!!E.thicknessMap,Pe=!!E.gradientMap,We=!!E.alphaMap,ke=E.alphaTest>0,dt=!!E.alphaHash,Tt=!!E.extensions;let Et=Yi;E.toneMapped&&(xe===null||xe.isXRRenderTarget===!0)&&(Et=t.toneMapping);const pt={shaderID:Fe,shaderType:E.type,shaderName:E.name,vertexShader:ge,fragmentShader:we,defines:E.defines,customVertexShaderID:Ie,customFragmentShaderID:K,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:p,batching:Ce,batchingColor:Ce&&Z._colorsTexture!==null,instancing:_e,instancingColor:_e&&Z.instanceColor!==null,instancingMorph:_e&&Z.morphTexture!==null,supportsVertexTextures:m,outputColorSpace:xe===null?t.outputColorSpace:xe.isXRRenderTarget===!0?xe.texture.colorSpace:tr,alphaToCoverage:!!E.alphaToCoverage,map:Ve,matcap:He,envMap:w,envMapMode:w&&te.mapping,envMapCubeUVHeight:Le,aoMap:H,lightMap:j,bumpMap:ue,normalMap:le,displacementMap:m&&Me,emissiveMap:Se,normalMapObjectSpace:le&&E.normalMapType===_v,normalMapTangentSpace:le&&E.normalMapType===mv,metalnessMap:g,roughnessMap:v,anisotropy:T,anisotropyMap:re,clearcoat:P,clearcoatMap:Te,clearcoatNormalMap:oe,clearcoatRoughnessMap:ye,dispersion:O,iridescence:F,iridescenceMap:Be,iridescenceThicknessMap:Ue,sheen:Q,sheenColorMap:Ne,sheenRoughnessMap:$e,specularMap:qe,specularColorMap:rt,specularIntensityMap:ee,transmission:q,transmissionMap:je,thicknessMap:he,gradientMap:Pe,opaque:E.transparent===!1&&E.blending===Ar&&E.alphaToCoverage===!1,alphaMap:We,alphaTest:ke,alphaHash:dt,combine:E.combine,mapUv:Ve&&_(E.map.channel),aoMapUv:H&&_(E.aoMap.channel),lightMapUv:j&&_(E.lightMap.channel),bumpMapUv:ue&&_(E.bumpMap.channel),normalMapUv:le&&_(E.normalMap.channel),displacementMapUv:Me&&_(E.displacementMap.channel),emissiveMapUv:Se&&_(E.emissiveMap.channel),metalnessMapUv:g&&_(E.metalnessMap.channel),roughnessMapUv:v&&_(E.roughnessMap.channel),anisotropyMapUv:re&&_(E.anisotropyMap.channel),clearcoatMapUv:Te&&_(E.clearcoatMap.channel),clearcoatNormalMapUv:oe&&_(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ye&&_(E.clearcoatRoughnessMap.channel),iridescenceMapUv:Be&&_(E.iridescenceMap.channel),iridescenceThicknessMapUv:Ue&&_(E.iridescenceThicknessMap.channel),sheenColorMapUv:Ne&&_(E.sheenColorMap.channel),sheenRoughnessMapUv:$e&&_(E.sheenRoughnessMap.channel),specularMapUv:qe&&_(E.specularMap.channel),specularColorMapUv:rt&&_(E.specularColorMap.channel),specularIntensityMapUv:ee&&_(E.specularIntensityMap.channel),transmissionMapUv:je&&_(E.transmissionMap.channel),thicknessMapUv:he&&_(E.thicknessMap.channel),alphaMapUv:We&&_(E.alphaMap.channel),vertexTangents:!!se.attributes.tangent&&(le||T),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!se.attributes.color&&se.attributes.color.itemSize===4,pointsUvs:Z.isPoints===!0&&!!se.attributes.uv&&(Ve||We),fog:!!ne,useFog:E.fog===!0,fogExp2:!!ne&&ne.isFogExp2,flatShading:E.flatShading===!0,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:d,reverseDepthBuffer:c,skinning:Z.isSkinnedMesh===!0,morphTargets:se.morphAttributes.position!==void 0,morphNormals:se.morphAttributes.normal!==void 0,morphColors:se.morphAttributes.color!==void 0,morphTargetsCount:Ze,morphTextureStride:Je,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numSpotLightMaps:C.spotLightMap.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numSpotLightShadowsWithMaps:C.numSpotLightShadowsWithMaps,numLightProbes:C.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:E.dithering,shadowMapEnabled:t.shadowMap.enabled&&V.length>0,shadowMapType:t.shadowMap.type,toneMapping:Et,decodeVideoTexture:Ve&&E.map.isVideoTexture===!0&&xt.getTransfer(E.map.colorSpace)===Ct,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===_i,flipSided:E.side===_n,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:Tt&&E.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Tt&&E.extensions.multiDraw===!0||Ce)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return pt.vertexUv1s=u.has(1),pt.vertexUv2s=u.has(2),pt.vertexUv3s=u.has(3),u.clear(),pt}function b(E){const C=[];if(E.shaderID?C.push(E.shaderID):(C.push(E.customVertexShaderID),C.push(E.customFragmentShaderID)),E.defines!==void 0)for(const V in E.defines)C.push(V),C.push(E.defines[V]);return E.isRawShaderMaterial===!1&&(M(C,E),A(C,E),C.push(t.outputColorSpace)),C.push(E.customProgramCacheKey),C.join()}function M(E,C){E.push(C.precision),E.push(C.outputColorSpace),E.push(C.envMapMode),E.push(C.envMapCubeUVHeight),E.push(C.mapUv),E.push(C.alphaMapUv),E.push(C.lightMapUv),E.push(C.aoMapUv),E.push(C.bumpMapUv),E.push(C.normalMapUv),E.push(C.displacementMapUv),E.push(C.emissiveMapUv),E.push(C.metalnessMapUv),E.push(C.roughnessMapUv),E.push(C.anisotropyMapUv),E.push(C.clearcoatMapUv),E.push(C.clearcoatNormalMapUv),E.push(C.clearcoatRoughnessMapUv),E.push(C.iridescenceMapUv),E.push(C.iridescenceThicknessMapUv),E.push(C.sheenColorMapUv),E.push(C.sheenRoughnessMapUv),E.push(C.specularMapUv),E.push(C.specularColorMapUv),E.push(C.specularIntensityMapUv),E.push(C.transmissionMapUv),E.push(C.thicknessMapUv),E.push(C.combine),E.push(C.fogExp2),E.push(C.sizeAttenuation),E.push(C.morphTargetsCount),E.push(C.morphAttributeCount),E.push(C.numDirLights),E.push(C.numPointLights),E.push(C.numSpotLights),E.push(C.numSpotLightMaps),E.push(C.numHemiLights),E.push(C.numRectAreaLights),E.push(C.numDirLightShadows),E.push(C.numPointLightShadows),E.push(C.numSpotLightShadows),E.push(C.numSpotLightShadowsWithMaps),E.push(C.numLightProbes),E.push(C.shadowMapType),E.push(C.toneMapping),E.push(C.numClippingPlanes),E.push(C.numClipIntersection),E.push(C.depthPacking)}function A(E,C){o.disableAll(),C.supportsVertexTextures&&o.enable(0),C.instancing&&o.enable(1),C.instancingColor&&o.enable(2),C.instancingMorph&&o.enable(3),C.matcap&&o.enable(4),C.envMap&&o.enable(5),C.normalMapObjectSpace&&o.enable(6),C.normalMapTangentSpace&&o.enable(7),C.clearcoat&&o.enable(8),C.iridescence&&o.enable(9),C.alphaTest&&o.enable(10),C.vertexColors&&o.enable(11),C.vertexAlphas&&o.enable(12),C.vertexUv1s&&o.enable(13),C.vertexUv2s&&o.enable(14),C.vertexUv3s&&o.enable(15),C.vertexTangents&&o.enable(16),C.anisotropy&&o.enable(17),C.alphaHash&&o.enable(18),C.batching&&o.enable(19),C.dispersion&&o.enable(20),C.batchingColor&&o.enable(21),E.push(o.mask),o.disableAll(),C.fog&&o.enable(0),C.useFog&&o.enable(1),C.flatShading&&o.enable(2),C.logarithmicDepthBuffer&&o.enable(3),C.reverseDepthBuffer&&o.enable(4),C.skinning&&o.enable(5),C.morphTargets&&o.enable(6),C.morphNormals&&o.enable(7),C.morphColors&&o.enable(8),C.premultipliedAlpha&&o.enable(9),C.shadowMapEnabled&&o.enable(10),C.doubleSided&&o.enable(11),C.flipSided&&o.enable(12),C.useDepthPacking&&o.enable(13),C.dithering&&o.enable(14),C.transmission&&o.enable(15),C.sheen&&o.enable(16),C.opaque&&o.enable(17),C.pointsUvs&&o.enable(18),C.decodeVideoTexture&&o.enable(19),C.alphaToCoverage&&o.enable(20),E.push(o.mask)}function G(E){const C=x[E.type];let V;if(C){const W=$n[C];V=jv.clone(W.uniforms)}else V=E.uniforms;return V}function L(E,C){let V;for(let W=0,Z=f.length;W<Z;W++){const ne=f[W];if(ne.cacheKey===C){V=ne,++V.usedTimes;break}}return V===void 0&&(V=new sb(t,C,E,s),f.push(V)),V}function B(E){if(--E.usedTimes===0){const C=f.indexOf(E);f[C]=f[f.length-1],f.pop(),E.destroy()}}function X(E){l.remove(E)}function Y(){l.dispose()}return{getParameters:h,getProgramCacheKey:b,getUniforms:G,acquireProgram:L,releaseProgram:B,releaseShaderCache:X,programs:f,dispose:Y}}function ub(){let t=new WeakMap;function e(a){return t.has(a)}function n(a){let o=t.get(a);return o===void 0&&(o={},t.set(a,o)),o}function i(a){t.delete(a)}function r(a,o,l){t.get(a)[o]=l}function s(){t=new WeakMap}return{has:e,get:n,remove:i,update:r,dispose:s}}function fb(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function _h(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function gh(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function a(d,c,m,p,x,_){let h=t[e];return h===void 0?(h={id:d.id,object:d,geometry:c,material:m,groupOrder:p,renderOrder:d.renderOrder,z:x,group:_},t[e]=h):(h.id=d.id,h.object=d,h.geometry=c,h.material=m,h.groupOrder=p,h.renderOrder=d.renderOrder,h.z=x,h.group=_),e++,h}function o(d,c,m,p,x,_){const h=a(d,c,m,p,x,_);m.transmission>0?i.push(h):m.transparent===!0?r.push(h):n.push(h)}function l(d,c,m,p,x,_){const h=a(d,c,m,p,x,_);m.transmission>0?i.unshift(h):m.transparent===!0?r.unshift(h):n.unshift(h)}function u(d,c){n.length>1&&n.sort(d||fb),i.length>1&&i.sort(c||_h),r.length>1&&r.sort(c||_h)}function f(){for(let d=e,c=t.length;d<c;d++){const m=t[d];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:o,unshift:l,finish:f,sort:u}}function hb(){let t=new WeakMap;function e(i,r){const s=t.get(i);let a;return s===void 0?(a=new gh,t.set(i,[a])):r>=s.length?(a=new gh,s.push(a)):a=s[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}function db(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new ve,color:new Mt};break;case"SpotLight":n={position:new ve,direction:new ve,color:new Mt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new ve,color:new Mt,distance:0,decay:0};break;case"HemisphereLight":n={direction:new ve,skyColor:new Mt,groundColor:new Mt};break;case"RectAreaLight":n={color:new Mt,position:new ve,halfWidth:new ve,halfHeight:new ve};break}return t[e.id]=n,n}}}function pb(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new yt};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new yt};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new yt,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let mb=0;function _b(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function gb(t){const e=new db,n=pb(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)i.probe.push(new ve);const r=new ve,s=new Ft,a=new Ft;function o(u){let f=0,d=0,c=0;for(let Y=0;Y<9;Y++)i.probe[Y].set(0,0,0);let m=0,p=0,x=0,_=0,h=0,b=0,M=0,A=0,G=0,L=0,B=0;u.sort(_b);for(let Y=0,E=u.length;Y<E;Y++){const C=u[Y],V=C.color,W=C.intensity,Z=C.distance,ne=C.shadow&&C.shadow.map?C.shadow.map.texture:null;if(C.isAmbientLight)f+=V.r*W,d+=V.g*W,c+=V.b*W;else if(C.isLightProbe){for(let se=0;se<9;se++)i.probe[se].addScaledVector(C.sh.coefficients[se],W);B++}else if(C.isDirectionalLight){const se=e.get(C);if(se.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){const de=C.shadow,te=n.get(C);te.shadowIntensity=de.intensity,te.shadowBias=de.bias,te.shadowNormalBias=de.normalBias,te.shadowRadius=de.radius,te.shadowMapSize=de.mapSize,i.directionalShadow[m]=te,i.directionalShadowMap[m]=ne,i.directionalShadowMatrix[m]=C.shadow.matrix,b++}i.directional[m]=se,m++}else if(C.isSpotLight){const se=e.get(C);se.position.setFromMatrixPosition(C.matrixWorld),se.color.copy(V).multiplyScalar(W),se.distance=Z,se.coneCos=Math.cos(C.angle),se.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),se.decay=C.decay,i.spot[x]=se;const de=C.shadow;if(C.map&&(i.spotLightMap[G]=C.map,G++,de.updateMatrices(C),C.castShadow&&L++),i.spotLightMatrix[x]=de.matrix,C.castShadow){const te=n.get(C);te.shadowIntensity=de.intensity,te.shadowBias=de.bias,te.shadowNormalBias=de.normalBias,te.shadowRadius=de.radius,te.shadowMapSize=de.mapSize,i.spotShadow[x]=te,i.spotShadowMap[x]=ne,A++}x++}else if(C.isRectAreaLight){const se=e.get(C);se.color.copy(V).multiplyScalar(W),se.halfWidth.set(C.width*.5,0,0),se.halfHeight.set(0,C.height*.5,0),i.rectArea[_]=se,_++}else if(C.isPointLight){const se=e.get(C);if(se.color.copy(C.color).multiplyScalar(C.intensity),se.distance=C.distance,se.decay=C.decay,C.castShadow){const de=C.shadow,te=n.get(C);te.shadowIntensity=de.intensity,te.shadowBias=de.bias,te.shadowNormalBias=de.normalBias,te.shadowRadius=de.radius,te.shadowMapSize=de.mapSize,te.shadowCameraNear=de.camera.near,te.shadowCameraFar=de.camera.far,i.pointShadow[p]=te,i.pointShadowMap[p]=ne,i.pointShadowMatrix[p]=C.shadow.matrix,M++}i.point[p]=se,p++}else if(C.isHemisphereLight){const se=e.get(C);se.skyColor.copy(C.color).multiplyScalar(W),se.groundColor.copy(C.groundColor).multiplyScalar(W),i.hemi[h]=se,h++}}_>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Ge.LTC_FLOAT_1,i.rectAreaLTC2=Ge.LTC_FLOAT_2):(i.rectAreaLTC1=Ge.LTC_HALF_1,i.rectAreaLTC2=Ge.LTC_HALF_2)),i.ambient[0]=f,i.ambient[1]=d,i.ambient[2]=c;const X=i.hash;(X.directionalLength!==m||X.pointLength!==p||X.spotLength!==x||X.rectAreaLength!==_||X.hemiLength!==h||X.numDirectionalShadows!==b||X.numPointShadows!==M||X.numSpotShadows!==A||X.numSpotMaps!==G||X.numLightProbes!==B)&&(i.directional.length=m,i.spot.length=x,i.rectArea.length=_,i.point.length=p,i.hemi.length=h,i.directionalShadow.length=b,i.directionalShadowMap.length=b,i.pointShadow.length=M,i.pointShadowMap.length=M,i.spotShadow.length=A,i.spotShadowMap.length=A,i.directionalShadowMatrix.length=b,i.pointShadowMatrix.length=M,i.spotLightMatrix.length=A+G-L,i.spotLightMap.length=G,i.numSpotLightShadowsWithMaps=L,i.numLightProbes=B,X.directionalLength=m,X.pointLength=p,X.spotLength=x,X.rectAreaLength=_,X.hemiLength=h,X.numDirectionalShadows=b,X.numPointShadows=M,X.numSpotShadows=A,X.numSpotMaps=G,X.numLightProbes=B,i.version=mb++)}function l(u,f){let d=0,c=0,m=0,p=0,x=0;const _=f.matrixWorldInverse;for(let h=0,b=u.length;h<b;h++){const M=u[h];if(M.isDirectionalLight){const A=i.directional[d];A.direction.setFromMatrixPosition(M.matrixWorld),r.setFromMatrixPosition(M.target.matrixWorld),A.direction.sub(r),A.direction.transformDirection(_),d++}else if(M.isSpotLight){const A=i.spot[m];A.position.setFromMatrixPosition(M.matrixWorld),A.position.applyMatrix4(_),A.direction.setFromMatrixPosition(M.matrixWorld),r.setFromMatrixPosition(M.target.matrixWorld),A.direction.sub(r),A.direction.transformDirection(_),m++}else if(M.isRectAreaLight){const A=i.rectArea[p];A.position.setFromMatrixPosition(M.matrixWorld),A.position.applyMatrix4(_),a.identity(),s.copy(M.matrixWorld),s.premultiply(_),a.extractRotation(s),A.halfWidth.set(M.width*.5,0,0),A.halfHeight.set(0,M.height*.5,0),A.halfWidth.applyMatrix4(a),A.halfHeight.applyMatrix4(a),p++}else if(M.isPointLight){const A=i.point[c];A.position.setFromMatrixPosition(M.matrixWorld),A.position.applyMatrix4(_),c++}else if(M.isHemisphereLight){const A=i.hemi[x];A.direction.setFromMatrixPosition(M.matrixWorld),A.direction.transformDirection(_),x++}}}return{setup:o,setupView:l,state:i}}function vh(t){const e=new gb(t),n=[],i=[];function r(f){u.camera=f,n.length=0,i.length=0}function s(f){n.push(f)}function a(f){i.push(f)}function o(){e.setup(n)}function l(f){e.setupView(n,f)}const u={lightsArray:n,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:u,setupLights:o,setupLightsView:l,pushLight:s,pushShadow:a}}function vb(t){let e=new WeakMap;function n(r,s=0){const a=e.get(r);let o;return a===void 0?(o=new vh(t),e.set(r,[o])):s>=a.length?(o=new vh(t),a.push(o)):o=a[s],o}function i(){e=new WeakMap}return{get:n,dispose:i}}class xb extends Io{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=dv,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class yb extends Io{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Sb=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Mb=`uniform sampler2D shadow_pass;
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
}`;function bb(t,e,n){let i=new kp;const r=new yt,s=new yt,a=new Nt,o=new xb({depthPacking:pv}),l=new yb,u={},f=n.maxTextureSize,d={[Ki]:_n,[_n]:Ki,[_i]:_i},c=new ei({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new yt},radius:{value:4}},vertexShader:Sb,fragmentShader:Mb}),m=c.clone();m.defines.HORIZONTAL_PASS=1;const p=new nr;p.setAttribute("position",new vn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new Pn(p,c),_=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=mp;let h=this.type;this.render=function(L,B,X){if(_.enabled===!1||_.autoUpdate===!1&&_.needsUpdate===!1||L.length===0)return;const Y=t.getRenderTarget(),E=t.getActiveCubeFace(),C=t.getActiveMipmapLevel(),V=t.state;V.setBlending(qi),V.buffers.color.setClear(1,1,1,1),V.buffers.depth.setTest(!0),V.setScissorTest(!1);const W=h!==di&&this.type===di,Z=h===di&&this.type!==di;for(let ne=0,se=L.length;ne<se;ne++){const de=L[ne],te=de.shadow;if(te===void 0||te.autoUpdate===!1&&te.needsUpdate===!1)continue;r.copy(te.mapSize);const Le=te.getFrameExtents();if(r.multiply(Le),s.copy(te.mapSize),(r.x>f||r.y>f)&&(r.x>f&&(s.x=Math.floor(f/Le.x),r.x=s.x*Le.x,te.mapSize.x=s.x),r.y>f&&(s.y=Math.floor(f/Le.y),r.y=s.y*Le.y,te.mapSize.y=s.y)),te.map===null||W===!0||Z===!0){const ze=this.type!==di?{minFilter:Rn,magFilter:Rn}:{};te.map!==null&&te.map.dispose(),te.map=new Ir(r.x,r.y,ze),te.map.texture.name=de.name+".shadowMap",te.camera.updateProjectionMatrix()}t.setRenderTarget(te.map),t.clear();const Fe=te.getViewportCount();for(let ze=0;ze<Fe;ze++){const Ze=te.getViewport(ze);a.set(s.x*Ze.x,s.y*Ze.y,s.x*Ze.z,s.y*Ze.w),V.viewport(a),te.updateMatrices(de,ze),i=te.getFrustum(),A(B,X,te.camera,de,this.type)}te.isPointLightShadow!==!0&&this.type===di&&b(te,X),te.needsUpdate=!1}h=this.type,_.needsUpdate=!1,t.setRenderTarget(Y,E,C)};function b(L,B){const X=e.update(x);c.defines.VSM_SAMPLES!==L.blurSamples&&(c.defines.VSM_SAMPLES=L.blurSamples,m.defines.VSM_SAMPLES=L.blurSamples,c.needsUpdate=!0,m.needsUpdate=!0),L.mapPass===null&&(L.mapPass=new Ir(r.x,r.y)),c.uniforms.shadow_pass.value=L.map.texture,c.uniforms.resolution.value=L.mapSize,c.uniforms.radius.value=L.radius,t.setRenderTarget(L.mapPass),t.clear(),t.renderBufferDirect(B,null,X,c,x,null),m.uniforms.shadow_pass.value=L.mapPass.texture,m.uniforms.resolution.value=L.mapSize,m.uniforms.radius.value=L.radius,t.setRenderTarget(L.map),t.clear(),t.renderBufferDirect(B,null,X,m,x,null)}function M(L,B,X,Y){let E=null;const C=X.isPointLight===!0?L.customDistanceMaterial:L.customDepthMaterial;if(C!==void 0)E=C;else if(E=X.isPointLight===!0?l:o,t.localClippingEnabled&&B.clipShadows===!0&&Array.isArray(B.clippingPlanes)&&B.clippingPlanes.length!==0||B.displacementMap&&B.displacementScale!==0||B.alphaMap&&B.alphaTest>0||B.map&&B.alphaTest>0){const V=E.uuid,W=B.uuid;let Z=u[V];Z===void 0&&(Z={},u[V]=Z);let ne=Z[W];ne===void 0&&(ne=E.clone(),Z[W]=ne,B.addEventListener("dispose",G)),E=ne}if(E.visible=B.visible,E.wireframe=B.wireframe,Y===di?E.side=B.shadowSide!==null?B.shadowSide:B.side:E.side=B.shadowSide!==null?B.shadowSide:d[B.side],E.alphaMap=B.alphaMap,E.alphaTest=B.alphaTest,E.map=B.map,E.clipShadows=B.clipShadows,E.clippingPlanes=B.clippingPlanes,E.clipIntersection=B.clipIntersection,E.displacementMap=B.displacementMap,E.displacementScale=B.displacementScale,E.displacementBias=B.displacementBias,E.wireframeLinewidth=B.wireframeLinewidth,E.linewidth=B.linewidth,X.isPointLight===!0&&E.isMeshDistanceMaterial===!0){const V=t.properties.get(E);V.light=X}return E}function A(L,B,X,Y,E){if(L.visible===!1)return;if(L.layers.test(B.layers)&&(L.isMesh||L.isLine||L.isPoints)&&(L.castShadow||L.receiveShadow&&E===di)&&(!L.frustumCulled||i.intersectsObject(L))){L.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,L.matrixWorld);const W=e.update(L),Z=L.material;if(Array.isArray(Z)){const ne=W.groups;for(let se=0,de=ne.length;se<de;se++){const te=ne[se],Le=Z[te.materialIndex];if(Le&&Le.visible){const Fe=M(L,Le,Y,E);L.onBeforeShadow(t,L,B,X,W,Fe,te),t.renderBufferDirect(X,null,W,Fe,L,te),L.onAfterShadow(t,L,B,X,W,Fe,te)}}}else if(Z.visible){const ne=M(L,Z,Y,E);L.onBeforeShadow(t,L,B,X,W,ne,null),t.renderBufferDirect(X,null,W,ne,L,null),L.onAfterShadow(t,L,B,X,W,ne,null)}}const V=L.children;for(let W=0,Z=V.length;W<Z;W++)A(V[W],B,X,Y,E)}function G(L){L.target.removeEventListener("dispose",G);for(const X in u){const Y=u[X],E=L.target.uuid;E in Y&&(Y[E].dispose(),delete Y[E])}}}const Tb={[nc]:ic,[rc]:oc,[sc]:lc,[fs]:ac,[ic]:nc,[oc]:rc,[lc]:sc,[ac]:fs};function Eb(t){function e(){let ee=!1;const je=new Nt;let he=null;const Pe=new Nt(0,0,0,0);return{setMask:function(We){he!==We&&!ee&&(t.colorMask(We,We,We,We),he=We)},setLocked:function(We){ee=We},setClear:function(We,ke,dt,Tt,Et){Et===!0&&(We*=Tt,ke*=Tt,dt*=Tt),je.set(We,ke,dt,Tt),Pe.equals(je)===!1&&(t.clearColor(We,ke,dt,Tt),Pe.copy(je))},reset:function(){ee=!1,he=null,Pe.set(-1,0,0,0)}}}function n(){let ee=!1,je=!1,he=null,Pe=null,We=null;return{setReversed:function(ke){je=ke},setTest:function(ke){ke?Ie(t.DEPTH_TEST):K(t.DEPTH_TEST)},setMask:function(ke){he!==ke&&!ee&&(t.depthMask(ke),he=ke)},setFunc:function(ke){if(je&&(ke=Tb[ke]),Pe!==ke){switch(ke){case nc:t.depthFunc(t.NEVER);break;case ic:t.depthFunc(t.ALWAYS);break;case rc:t.depthFunc(t.LESS);break;case fs:t.depthFunc(t.LEQUAL);break;case sc:t.depthFunc(t.EQUAL);break;case ac:t.depthFunc(t.GEQUAL);break;case oc:t.depthFunc(t.GREATER);break;case lc:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}Pe=ke}},setLocked:function(ke){ee=ke},setClear:function(ke){We!==ke&&(t.clearDepth(ke),We=ke)},reset:function(){ee=!1,he=null,Pe=null,We=null}}}function i(){let ee=!1,je=null,he=null,Pe=null,We=null,ke=null,dt=null,Tt=null,Et=null;return{setTest:function(pt){ee||(pt?Ie(t.STENCIL_TEST):K(t.STENCIL_TEST))},setMask:function(pt){je!==pt&&!ee&&(t.stencilMask(pt),je=pt)},setFunc:function(pt,Kt,Gt){(he!==pt||Pe!==Kt||We!==Gt)&&(t.stencilFunc(pt,Kt,Gt),he=pt,Pe=Kt,We=Gt)},setOp:function(pt,Kt,Gt){(ke!==pt||dt!==Kt||Tt!==Gt)&&(t.stencilOp(pt,Kt,Gt),ke=pt,dt=Kt,Tt=Gt)},setLocked:function(pt){ee=pt},setClear:function(pt){Et!==pt&&(t.clearStencil(pt),Et=pt)},reset:function(){ee=!1,je=null,he=null,Pe=null,We=null,ke=null,dt=null,Tt=null,Et=null}}}const r=new e,s=new n,a=new i,o=new WeakMap,l=new WeakMap;let u={},f={},d=new WeakMap,c=[],m=null,p=!1,x=null,_=null,h=null,b=null,M=null,A=null,G=null,L=new Mt(0,0,0),B=0,X=!1,Y=null,E=null,C=null,V=null,W=null;const Z=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let ne=!1,se=0;const de=t.getParameter(t.VERSION);de.indexOf("WebGL")!==-1?(se=parseFloat(/^WebGL (\d)/.exec(de)[1]),ne=se>=1):de.indexOf("OpenGL ES")!==-1&&(se=parseFloat(/^OpenGL ES (\d)/.exec(de)[1]),ne=se>=2);let te=null,Le={};const Fe=t.getParameter(t.SCISSOR_BOX),ze=t.getParameter(t.VIEWPORT),Ze=new Nt().fromArray(Fe),Je=new Nt().fromArray(ze);function ge(ee,je,he,Pe){const We=new Uint8Array(4),ke=t.createTexture();t.bindTexture(ee,ke),t.texParameteri(ee,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(ee,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let dt=0;dt<he;dt++)ee===t.TEXTURE_3D||ee===t.TEXTURE_2D_ARRAY?t.texImage3D(je,0,t.RGBA,1,1,Pe,0,t.RGBA,t.UNSIGNED_BYTE,We):t.texImage2D(je+dt,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,We);return ke}const we={};we[t.TEXTURE_2D]=ge(t.TEXTURE_2D,t.TEXTURE_2D,1),we[t.TEXTURE_CUBE_MAP]=ge(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),we[t.TEXTURE_2D_ARRAY]=ge(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),we[t.TEXTURE_3D]=ge(t.TEXTURE_3D,t.TEXTURE_3D,1,1),r.setClear(0,0,0,1),s.setClear(1),a.setClear(0),Ie(t.DEPTH_TEST),s.setFunc(fs),j(!1),ue(wf),Ie(t.CULL_FACE),w(qi);function Ie(ee){u[ee]!==!0&&(t.enable(ee),u[ee]=!0)}function K(ee){u[ee]!==!1&&(t.disable(ee),u[ee]=!1)}function xe(ee,je){return f[ee]!==je?(t.bindFramebuffer(ee,je),f[ee]=je,ee===t.DRAW_FRAMEBUFFER&&(f[t.FRAMEBUFFER]=je),ee===t.FRAMEBUFFER&&(f[t.DRAW_FRAMEBUFFER]=je),!0):!1}function _e(ee,je){let he=c,Pe=!1;if(ee){he=d.get(je),he===void 0&&(he=[],d.set(je,he));const We=ee.textures;if(he.length!==We.length||he[0]!==t.COLOR_ATTACHMENT0){for(let ke=0,dt=We.length;ke<dt;ke++)he[ke]=t.COLOR_ATTACHMENT0+ke;he.length=We.length,Pe=!0}}else he[0]!==t.BACK&&(he[0]=t.BACK,Pe=!0);Pe&&t.drawBuffers(he)}function Ce(ee){return m!==ee?(t.useProgram(ee),m=ee,!0):!1}const Ve={[Sr]:t.FUNC_ADD,[z0]:t.FUNC_SUBTRACT,[H0]:t.FUNC_REVERSE_SUBTRACT};Ve[V0]=t.MIN,Ve[G0]=t.MAX;const He={[W0]:t.ZERO,[X0]:t.ONE,[j0]:t.SRC_COLOR,[ec]:t.SRC_ALPHA,[J0]:t.SRC_ALPHA_SATURATE,[K0]:t.DST_COLOR,[Y0]:t.DST_ALPHA,[q0]:t.ONE_MINUS_SRC_COLOR,[tc]:t.ONE_MINUS_SRC_ALPHA,[Z0]:t.ONE_MINUS_DST_COLOR,[$0]:t.ONE_MINUS_DST_ALPHA,[Q0]:t.CONSTANT_COLOR,[ev]:t.ONE_MINUS_CONSTANT_COLOR,[tv]:t.CONSTANT_ALPHA,[nv]:t.ONE_MINUS_CONSTANT_ALPHA};function w(ee,je,he,Pe,We,ke,dt,Tt,Et,pt){if(ee===qi){p===!0&&(K(t.BLEND),p=!1);return}if(p===!1&&(Ie(t.BLEND),p=!0),ee!==k0){if(ee!==x||pt!==X){if((_!==Sr||M!==Sr)&&(t.blendEquation(t.FUNC_ADD),_=Sr,M=Sr),pt)switch(ee){case Ar:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Af:t.blendFunc(t.ONE,t.ONE);break;case Cf:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Rf:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:break}else switch(ee){case Ar:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Af:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case Cf:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Rf:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:break}h=null,b=null,A=null,G=null,L.set(0,0,0),B=0,x=ee,X=pt}return}We=We||je,ke=ke||he,dt=dt||Pe,(je!==_||We!==M)&&(t.blendEquationSeparate(Ve[je],Ve[We]),_=je,M=We),(he!==h||Pe!==b||ke!==A||dt!==G)&&(t.blendFuncSeparate(He[he],He[Pe],He[ke],He[dt]),h=he,b=Pe,A=ke,G=dt),(Tt.equals(L)===!1||Et!==B)&&(t.blendColor(Tt.r,Tt.g,Tt.b,Et),L.copy(Tt),B=Et),x=ee,X=!1}function H(ee,je){ee.side===_i?K(t.CULL_FACE):Ie(t.CULL_FACE);let he=ee.side===_n;je&&(he=!he),j(he),ee.blending===Ar&&ee.transparent===!1?w(qi):w(ee.blending,ee.blendEquation,ee.blendSrc,ee.blendDst,ee.blendEquationAlpha,ee.blendSrcAlpha,ee.blendDstAlpha,ee.blendColor,ee.blendAlpha,ee.premultipliedAlpha),s.setFunc(ee.depthFunc),s.setTest(ee.depthTest),s.setMask(ee.depthWrite),r.setMask(ee.colorWrite);const Pe=ee.stencilWrite;a.setTest(Pe),Pe&&(a.setMask(ee.stencilWriteMask),a.setFunc(ee.stencilFunc,ee.stencilRef,ee.stencilFuncMask),a.setOp(ee.stencilFail,ee.stencilZFail,ee.stencilZPass)),Me(ee.polygonOffset,ee.polygonOffsetFactor,ee.polygonOffsetUnits),ee.alphaToCoverage===!0?Ie(t.SAMPLE_ALPHA_TO_COVERAGE):K(t.SAMPLE_ALPHA_TO_COVERAGE)}function j(ee){Y!==ee&&(ee?t.frontFace(t.CW):t.frontFace(t.CCW),Y=ee)}function ue(ee){ee!==N0?(Ie(t.CULL_FACE),ee!==E&&(ee===wf?t.cullFace(t.BACK):ee===F0?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):K(t.CULL_FACE),E=ee}function le(ee){ee!==C&&(ne&&t.lineWidth(ee),C=ee)}function Me(ee,je,he){ee?(Ie(t.POLYGON_OFFSET_FILL),(V!==je||W!==he)&&(t.polygonOffset(je,he),V=je,W=he)):K(t.POLYGON_OFFSET_FILL)}function Se(ee){ee?Ie(t.SCISSOR_TEST):K(t.SCISSOR_TEST)}function g(ee){ee===void 0&&(ee=t.TEXTURE0+Z-1),te!==ee&&(t.activeTexture(ee),te=ee)}function v(ee,je,he){he===void 0&&(te===null?he=t.TEXTURE0+Z-1:he=te);let Pe=Le[he];Pe===void 0&&(Pe={type:void 0,texture:void 0},Le[he]=Pe),(Pe.type!==ee||Pe.texture!==je)&&(te!==he&&(t.activeTexture(he),te=he),t.bindTexture(ee,je||we[ee]),Pe.type=ee,Pe.texture=je)}function T(){const ee=Le[te];ee!==void 0&&ee.type!==void 0&&(t.bindTexture(ee.type,null),ee.type=void 0,ee.texture=void 0)}function P(){try{t.compressedTexImage2D.apply(t,arguments)}catch{}}function O(){try{t.compressedTexImage3D.apply(t,arguments)}catch{}}function F(){try{t.texSubImage2D.apply(t,arguments)}catch{}}function Q(){try{t.texSubImage3D.apply(t,arguments)}catch{}}function q(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch{}}function re(){try{t.compressedTexSubImage3D.apply(t,arguments)}catch{}}function Te(){try{t.texStorage2D.apply(t,arguments)}catch{}}function oe(){try{t.texStorage3D.apply(t,arguments)}catch{}}function ye(){try{t.texImage2D.apply(t,arguments)}catch{}}function Be(){try{t.texImage3D.apply(t,arguments)}catch{}}function Ue(ee){Ze.equals(ee)===!1&&(t.scissor(ee.x,ee.y,ee.z,ee.w),Ze.copy(ee))}function Ne(ee){Je.equals(ee)===!1&&(t.viewport(ee.x,ee.y,ee.z,ee.w),Je.copy(ee))}function $e(ee,je){let he=l.get(je);he===void 0&&(he=new WeakMap,l.set(je,he));let Pe=he.get(ee);Pe===void 0&&(Pe=t.getUniformBlockIndex(je,ee.name),he.set(ee,Pe))}function qe(ee,je){const Pe=l.get(je).get(ee);o.get(je)!==Pe&&(t.uniformBlockBinding(je,Pe,ee.__bindingPointIndex),o.set(je,Pe))}function rt(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),u={},te=null,Le={},f={},d=new WeakMap,c=[],m=null,p=!1,x=null,_=null,h=null,b=null,M=null,A=null,G=null,L=new Mt(0,0,0),B=0,X=!1,Y=null,E=null,C=null,V=null,W=null,Ze.set(0,0,t.canvas.width,t.canvas.height),Je.set(0,0,t.canvas.width,t.canvas.height),r.reset(),s.reset(),a.reset()}return{buffers:{color:r,depth:s,stencil:a},enable:Ie,disable:K,bindFramebuffer:xe,drawBuffers:_e,useProgram:Ce,setBlending:w,setMaterial:H,setFlipSided:j,setCullFace:ue,setLineWidth:le,setPolygonOffset:Me,setScissorTest:Se,activeTexture:g,bindTexture:v,unbindTexture:T,compressedTexImage2D:P,compressedTexImage3D:O,texImage2D:ye,texImage3D:Be,updateUBOMapping:$e,uniformBlockBinding:qe,texStorage2D:Te,texStorage3D:oe,texSubImage2D:F,texSubImage3D:Q,compressedTexSubImage2D:q,compressedTexSubImage3D:re,scissor:Ue,viewport:Ne,reset:rt}}function xh(t,e,n,i){const r=wb(i);switch(n){case Sp:return t*e;case bp:return t*e;case Tp:return t*e*2;case Ep:return t*e/r.components*r.byteLength;case Su:return t*e/r.components*r.byteLength;case wp:return t*e*2/r.components*r.byteLength;case Mu:return t*e*2/r.components*r.byteLength;case Mp:return t*e*3/r.components*r.byteLength;case Hn:return t*e*4/r.components*r.byteLength;case bu:return t*e*4/r.components*r.byteLength;case Ka:case Za:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Ja:case Qa:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case pc:case _c:return Math.max(t,16)*Math.max(e,8)/4;case dc:case mc:return Math.max(t,8)*Math.max(e,8)/2;case gc:case vc:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case xc:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case yc:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Sc:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case Mc:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case bc:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case Tc:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case Ec:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case wc:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case Ac:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case Cc:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case Rc:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case Pc:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case Dc:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case Lc:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case Ic:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case eo:case Uc:case Oc:return Math.ceil(t/4)*Math.ceil(e/4)*16;case Ap:case Nc:return Math.ceil(t/4)*Math.ceil(e/4)*8;case Fc:case Bc:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function wb(t){switch(t){case Mi:case vp:return{byteLength:1,components:1};case ta:case xp:case la:return{byteLength:2,components:1};case xu:case yu:return{byteLength:2,components:4};case Lr:case vu:case gi:return{byteLength:4,components:1};case yp:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${t}.`)}function Ab(t,e,n,i,r,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new yt,f=new WeakMap;let d;const c=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function p(g,v){return m?new OffscreenCanvas(g,v):na("canvas")}function x(g,v,T){let P=1;const O=Se(g);if((O.width>T||O.height>T)&&(P=T/Math.max(O.width,O.height)),P<1)if(typeof HTMLImageElement<"u"&&g instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&g instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&g instanceof ImageBitmap||typeof VideoFrame<"u"&&g instanceof VideoFrame){const F=Math.floor(P*O.width),Q=Math.floor(P*O.height);d===void 0&&(d=p(F,Q));const q=v?p(F,Q):d;return q.width=F,q.height=Q,q.getContext("2d").drawImage(g,0,0,F,Q),q}else return"data"in g,g;return g}function _(g){return g.generateMipmaps&&g.minFilter!==Rn&&g.minFilter!==hn}function h(g){t.generateMipmap(g)}function b(g,v,T,P,O=!1){if(g!==null&&t[g]!==void 0)return t[g];let F=v;if(v===t.RED&&(T===t.FLOAT&&(F=t.R32F),T===t.HALF_FLOAT&&(F=t.R16F),T===t.UNSIGNED_BYTE&&(F=t.R8)),v===t.RED_INTEGER&&(T===t.UNSIGNED_BYTE&&(F=t.R8UI),T===t.UNSIGNED_SHORT&&(F=t.R16UI),T===t.UNSIGNED_INT&&(F=t.R32UI),T===t.BYTE&&(F=t.R8I),T===t.SHORT&&(F=t.R16I),T===t.INT&&(F=t.R32I)),v===t.RG&&(T===t.FLOAT&&(F=t.RG32F),T===t.HALF_FLOAT&&(F=t.RG16F),T===t.UNSIGNED_BYTE&&(F=t.RG8)),v===t.RG_INTEGER&&(T===t.UNSIGNED_BYTE&&(F=t.RG8UI),T===t.UNSIGNED_SHORT&&(F=t.RG16UI),T===t.UNSIGNED_INT&&(F=t.RG32UI),T===t.BYTE&&(F=t.RG8I),T===t.SHORT&&(F=t.RG16I),T===t.INT&&(F=t.RG32I)),v===t.RGB_INTEGER&&(T===t.UNSIGNED_BYTE&&(F=t.RGB8UI),T===t.UNSIGNED_SHORT&&(F=t.RGB16UI),T===t.UNSIGNED_INT&&(F=t.RGB32UI),T===t.BYTE&&(F=t.RGB8I),T===t.SHORT&&(F=t.RGB16I),T===t.INT&&(F=t.RGB32I)),v===t.RGBA_INTEGER&&(T===t.UNSIGNED_BYTE&&(F=t.RGBA8UI),T===t.UNSIGNED_SHORT&&(F=t.RGBA16UI),T===t.UNSIGNED_INT&&(F=t.RGBA32UI),T===t.BYTE&&(F=t.RGBA8I),T===t.SHORT&&(F=t.RGBA16I),T===t.INT&&(F=t.RGBA32I)),v===t.RGB&&T===t.UNSIGNED_INT_5_9_9_9_REV&&(F=t.RGB9_E5),v===t.RGBA){const Q=O?uo:xt.getTransfer(P);T===t.FLOAT&&(F=t.RGBA32F),T===t.HALF_FLOAT&&(F=t.RGBA16F),T===t.UNSIGNED_BYTE&&(F=Q===Ct?t.SRGB8_ALPHA8:t.RGBA8),T===t.UNSIGNED_SHORT_4_4_4_4&&(F=t.RGBA4),T===t.UNSIGNED_SHORT_5_5_5_1&&(F=t.RGB5_A1)}return(F===t.R16F||F===t.R32F||F===t.RG16F||F===t.RG32F||F===t.RGBA16F||F===t.RGBA32F)&&e.get("EXT_color_buffer_float"),F}function M(g,v){let T;return g?v===null||v===Lr||v===ps?T=t.DEPTH24_STENCIL8:v===gi?T=t.DEPTH32F_STENCIL8:v===ta&&(T=t.DEPTH24_STENCIL8):v===null||v===Lr||v===ps?T=t.DEPTH_COMPONENT24:v===gi?T=t.DEPTH_COMPONENT32F:v===ta&&(T=t.DEPTH_COMPONENT16),T}function A(g,v){return _(g)===!0||g.isFramebufferTexture&&g.minFilter!==Rn&&g.minFilter!==hn?Math.log2(Math.max(v.width,v.height))+1:g.mipmaps!==void 0&&g.mipmaps.length>0?g.mipmaps.length:g.isCompressedTexture&&Array.isArray(g.image)?v.mipmaps.length:1}function G(g){const v=g.target;v.removeEventListener("dispose",G),B(v),v.isVideoTexture&&f.delete(v)}function L(g){const v=g.target;v.removeEventListener("dispose",L),Y(v)}function B(g){const v=i.get(g);if(v.__webglInit===void 0)return;const T=g.source,P=c.get(T);if(P){const O=P[v.__cacheKey];O.usedTimes--,O.usedTimes===0&&X(g),Object.keys(P).length===0&&c.delete(T)}i.remove(g)}function X(g){const v=i.get(g);t.deleteTexture(v.__webglTexture);const T=g.source,P=c.get(T);delete P[v.__cacheKey],a.memory.textures--}function Y(g){const v=i.get(g);if(g.depthTexture&&g.depthTexture.dispose(),g.isWebGLCubeRenderTarget)for(let P=0;P<6;P++){if(Array.isArray(v.__webglFramebuffer[P]))for(let O=0;O<v.__webglFramebuffer[P].length;O++)t.deleteFramebuffer(v.__webglFramebuffer[P][O]);else t.deleteFramebuffer(v.__webglFramebuffer[P]);v.__webglDepthbuffer&&t.deleteRenderbuffer(v.__webglDepthbuffer[P])}else{if(Array.isArray(v.__webglFramebuffer))for(let P=0;P<v.__webglFramebuffer.length;P++)t.deleteFramebuffer(v.__webglFramebuffer[P]);else t.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&t.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&t.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let P=0;P<v.__webglColorRenderbuffer.length;P++)v.__webglColorRenderbuffer[P]&&t.deleteRenderbuffer(v.__webglColorRenderbuffer[P]);v.__webglDepthRenderbuffer&&t.deleteRenderbuffer(v.__webglDepthRenderbuffer)}const T=g.textures;for(let P=0,O=T.length;P<O;P++){const F=i.get(T[P]);F.__webglTexture&&(t.deleteTexture(F.__webglTexture),a.memory.textures--),i.remove(T[P])}i.remove(g)}let E=0;function C(){E=0}function V(){const g=E;return g>=r.maxTextures,E+=1,g}function W(g){const v=[];return v.push(g.wrapS),v.push(g.wrapT),v.push(g.wrapR||0),v.push(g.magFilter),v.push(g.minFilter),v.push(g.anisotropy),v.push(g.internalFormat),v.push(g.format),v.push(g.type),v.push(g.generateMipmaps),v.push(g.premultiplyAlpha),v.push(g.flipY),v.push(g.unpackAlignment),v.push(g.colorSpace),v.join()}function Z(g,v){const T=i.get(g);if(g.isVideoTexture&&le(g),g.isRenderTargetTexture===!1&&g.version>0&&T.__version!==g.version){const P=g.image;if(P!==null){if(P.complete!==!1){Je(T,g,v);return}}}n.bindTexture(t.TEXTURE_2D,T.__webglTexture,t.TEXTURE0+v)}function ne(g,v){const T=i.get(g);if(g.version>0&&T.__version!==g.version){Je(T,g,v);return}n.bindTexture(t.TEXTURE_2D_ARRAY,T.__webglTexture,t.TEXTURE0+v)}function se(g,v){const T=i.get(g);if(g.version>0&&T.__version!==g.version){Je(T,g,v);return}n.bindTexture(t.TEXTURE_3D,T.__webglTexture,t.TEXTURE0+v)}function de(g,v){const T=i.get(g);if(g.version>0&&T.__version!==g.version){ge(T,g,v);return}n.bindTexture(t.TEXTURE_CUBE_MAP,T.__webglTexture,t.TEXTURE0+v)}const te={[fc]:t.REPEAT,[br]:t.CLAMP_TO_EDGE,[hc]:t.MIRRORED_REPEAT},Le={[Rn]:t.NEAREST,[hv]:t.NEAREST_MIPMAP_NEAREST,[ya]:t.NEAREST_MIPMAP_LINEAR,[hn]:t.LINEAR,[nl]:t.LINEAR_MIPMAP_NEAREST,[Tr]:t.LINEAR_MIPMAP_LINEAR},Fe={[gv]:t.NEVER,[bv]:t.ALWAYS,[vv]:t.LESS,[Cp]:t.LEQUAL,[xv]:t.EQUAL,[Mv]:t.GEQUAL,[yv]:t.GREATER,[Sv]:t.NOTEQUAL};function ze(g,v){if(v.type===gi&&e.has("OES_texture_float_linear")===!1&&(v.magFilter===hn||v.magFilter===nl||v.magFilter===ya||v.magFilter===Tr||v.minFilter===hn||v.minFilter===nl||v.minFilter===ya||v.minFilter),t.texParameteri(g,t.TEXTURE_WRAP_S,te[v.wrapS]),t.texParameteri(g,t.TEXTURE_WRAP_T,te[v.wrapT]),(g===t.TEXTURE_3D||g===t.TEXTURE_2D_ARRAY)&&t.texParameteri(g,t.TEXTURE_WRAP_R,te[v.wrapR]),t.texParameteri(g,t.TEXTURE_MAG_FILTER,Le[v.magFilter]),t.texParameteri(g,t.TEXTURE_MIN_FILTER,Le[v.minFilter]),v.compareFunction&&(t.texParameteri(g,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(g,t.TEXTURE_COMPARE_FUNC,Fe[v.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===Rn||v.minFilter!==ya&&v.minFilter!==Tr||v.type===gi&&e.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||i.get(v).__currentAnisotropy){const T=e.get("EXT_texture_filter_anisotropic");t.texParameterf(g,T.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,r.getMaxAnisotropy())),i.get(v).__currentAnisotropy=v.anisotropy}}}function Ze(g,v){let T=!1;g.__webglInit===void 0&&(g.__webglInit=!0,v.addEventListener("dispose",G));const P=v.source;let O=c.get(P);O===void 0&&(O={},c.set(P,O));const F=W(v);if(F!==g.__cacheKey){O[F]===void 0&&(O[F]={texture:t.createTexture(),usedTimes:0},a.memory.textures++,T=!0),O[F].usedTimes++;const Q=O[g.__cacheKey];Q!==void 0&&(O[g.__cacheKey].usedTimes--,Q.usedTimes===0&&X(v)),g.__cacheKey=F,g.__webglTexture=O[F].texture}return T}function Je(g,v,T){let P=t.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(P=t.TEXTURE_2D_ARRAY),v.isData3DTexture&&(P=t.TEXTURE_3D);const O=Ze(g,v),F=v.source;n.bindTexture(P,g.__webglTexture,t.TEXTURE0+T);const Q=i.get(F);if(F.version!==Q.__version||O===!0){n.activeTexture(t.TEXTURE0+T);const q=xt.getPrimaries(xt.workingColorSpace),re=v.colorSpace===Gi?null:xt.getPrimaries(v.colorSpace),Te=v.colorSpace===Gi||q===re?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,v.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,v.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Te);let oe=x(v.image,!1,r.maxTextureSize);oe=Me(v,oe);const ye=s.convert(v.format,v.colorSpace),Be=s.convert(v.type);let Ue=b(v.internalFormat,ye,Be,v.colorSpace,v.isVideoTexture);ze(P,v);let Ne;const $e=v.mipmaps,qe=v.isVideoTexture!==!0,rt=Q.__version===void 0||O===!0,ee=F.dataReady,je=A(v,oe);if(v.isDepthTexture)Ue=M(v.format===ms,v.type),rt&&(qe?n.texStorage2D(t.TEXTURE_2D,1,Ue,oe.width,oe.height):n.texImage2D(t.TEXTURE_2D,0,Ue,oe.width,oe.height,0,ye,Be,null));else if(v.isDataTexture)if($e.length>0){qe&&rt&&n.texStorage2D(t.TEXTURE_2D,je,Ue,$e[0].width,$e[0].height);for(let he=0,Pe=$e.length;he<Pe;he++)Ne=$e[he],qe?ee&&n.texSubImage2D(t.TEXTURE_2D,he,0,0,Ne.width,Ne.height,ye,Be,Ne.data):n.texImage2D(t.TEXTURE_2D,he,Ue,Ne.width,Ne.height,0,ye,Be,Ne.data);v.generateMipmaps=!1}else qe?(rt&&n.texStorage2D(t.TEXTURE_2D,je,Ue,oe.width,oe.height),ee&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,oe.width,oe.height,ye,Be,oe.data)):n.texImage2D(t.TEXTURE_2D,0,Ue,oe.width,oe.height,0,ye,Be,oe.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){qe&&rt&&n.texStorage3D(t.TEXTURE_2D_ARRAY,je,Ue,$e[0].width,$e[0].height,oe.depth);for(let he=0,Pe=$e.length;he<Pe;he++)if(Ne=$e[he],v.format!==Hn){if(ye!==null)if(qe){if(ee)if(v.layerUpdates.size>0){const We=xh(Ne.width,Ne.height,v.format,v.type);for(const ke of v.layerUpdates){const dt=Ne.data.subarray(ke*We/Ne.data.BYTES_PER_ELEMENT,(ke+1)*We/Ne.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,he,0,0,ke,Ne.width,Ne.height,1,ye,dt,0,0)}v.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,he,0,0,0,Ne.width,Ne.height,oe.depth,ye,Ne.data,0,0)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,he,Ue,Ne.width,Ne.height,oe.depth,0,Ne.data,0,0)}else qe?ee&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,he,0,0,0,Ne.width,Ne.height,oe.depth,ye,Be,Ne.data):n.texImage3D(t.TEXTURE_2D_ARRAY,he,Ue,Ne.width,Ne.height,oe.depth,0,ye,Be,Ne.data)}else{qe&&rt&&n.texStorage2D(t.TEXTURE_2D,je,Ue,$e[0].width,$e[0].height);for(let he=0,Pe=$e.length;he<Pe;he++)Ne=$e[he],v.format!==Hn?ye!==null&&(qe?ee&&n.compressedTexSubImage2D(t.TEXTURE_2D,he,0,0,Ne.width,Ne.height,ye,Ne.data):n.compressedTexImage2D(t.TEXTURE_2D,he,Ue,Ne.width,Ne.height,0,Ne.data)):qe?ee&&n.texSubImage2D(t.TEXTURE_2D,he,0,0,Ne.width,Ne.height,ye,Be,Ne.data):n.texImage2D(t.TEXTURE_2D,he,Ue,Ne.width,Ne.height,0,ye,Be,Ne.data)}else if(v.isDataArrayTexture)if(qe){if(rt&&n.texStorage3D(t.TEXTURE_2D_ARRAY,je,Ue,oe.width,oe.height,oe.depth),ee)if(v.layerUpdates.size>0){const he=xh(oe.width,oe.height,v.format,v.type);for(const Pe of v.layerUpdates){const We=oe.data.subarray(Pe*he/oe.data.BYTES_PER_ELEMENT,(Pe+1)*he/oe.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,Pe,oe.width,oe.height,1,ye,Be,We)}v.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,oe.width,oe.height,oe.depth,ye,Be,oe.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,Ue,oe.width,oe.height,oe.depth,0,ye,Be,oe.data);else if(v.isData3DTexture)qe?(rt&&n.texStorage3D(t.TEXTURE_3D,je,Ue,oe.width,oe.height,oe.depth),ee&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,oe.width,oe.height,oe.depth,ye,Be,oe.data)):n.texImage3D(t.TEXTURE_3D,0,Ue,oe.width,oe.height,oe.depth,0,ye,Be,oe.data);else if(v.isFramebufferTexture){if(rt)if(qe)n.texStorage2D(t.TEXTURE_2D,je,Ue,oe.width,oe.height);else{let he=oe.width,Pe=oe.height;for(let We=0;We<je;We++)n.texImage2D(t.TEXTURE_2D,We,Ue,he,Pe,0,ye,Be,null),he>>=1,Pe>>=1}}else if($e.length>0){if(qe&&rt){const he=Se($e[0]);n.texStorage2D(t.TEXTURE_2D,je,Ue,he.width,he.height)}for(let he=0,Pe=$e.length;he<Pe;he++)Ne=$e[he],qe?ee&&n.texSubImage2D(t.TEXTURE_2D,he,0,0,ye,Be,Ne):n.texImage2D(t.TEXTURE_2D,he,Ue,ye,Be,Ne);v.generateMipmaps=!1}else if(qe){if(rt){const he=Se(oe);n.texStorage2D(t.TEXTURE_2D,je,Ue,he.width,he.height)}ee&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,ye,Be,oe)}else n.texImage2D(t.TEXTURE_2D,0,Ue,ye,Be,oe);_(v)&&h(P),Q.__version=F.version,v.onUpdate&&v.onUpdate(v)}g.__version=v.version}function ge(g,v,T){if(v.image.length!==6)return;const P=Ze(g,v),O=v.source;n.bindTexture(t.TEXTURE_CUBE_MAP,g.__webglTexture,t.TEXTURE0+T);const F=i.get(O);if(O.version!==F.__version||P===!0){n.activeTexture(t.TEXTURE0+T);const Q=xt.getPrimaries(xt.workingColorSpace),q=v.colorSpace===Gi?null:xt.getPrimaries(v.colorSpace),re=v.colorSpace===Gi||Q===q?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,v.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,v.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,re);const Te=v.isCompressedTexture||v.image[0].isCompressedTexture,oe=v.image[0]&&v.image[0].isDataTexture,ye=[];for(let Pe=0;Pe<6;Pe++)!Te&&!oe?ye[Pe]=x(v.image[Pe],!0,r.maxCubemapSize):ye[Pe]=oe?v.image[Pe].image:v.image[Pe],ye[Pe]=Me(v,ye[Pe]);const Be=ye[0],Ue=s.convert(v.format,v.colorSpace),Ne=s.convert(v.type),$e=b(v.internalFormat,Ue,Ne,v.colorSpace),qe=v.isVideoTexture!==!0,rt=F.__version===void 0||P===!0,ee=O.dataReady;let je=A(v,Be);ze(t.TEXTURE_CUBE_MAP,v);let he;if(Te){qe&&rt&&n.texStorage2D(t.TEXTURE_CUBE_MAP,je,$e,Be.width,Be.height);for(let Pe=0;Pe<6;Pe++){he=ye[Pe].mipmaps;for(let We=0;We<he.length;We++){const ke=he[We];v.format!==Hn?Ue!==null&&(qe?ee&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Pe,We,0,0,ke.width,ke.height,Ue,ke.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Pe,We,$e,ke.width,ke.height,0,ke.data)):qe?ee&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Pe,We,0,0,ke.width,ke.height,Ue,Ne,ke.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Pe,We,$e,ke.width,ke.height,0,Ue,Ne,ke.data)}}}else{if(he=v.mipmaps,qe&&rt){he.length>0&&je++;const Pe=Se(ye[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,je,$e,Pe.width,Pe.height)}for(let Pe=0;Pe<6;Pe++)if(oe){qe?ee&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Pe,0,0,0,ye[Pe].width,ye[Pe].height,Ue,Ne,ye[Pe].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Pe,0,$e,ye[Pe].width,ye[Pe].height,0,Ue,Ne,ye[Pe].data);for(let We=0;We<he.length;We++){const dt=he[We].image[Pe].image;qe?ee&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Pe,We+1,0,0,dt.width,dt.height,Ue,Ne,dt.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Pe,We+1,$e,dt.width,dt.height,0,Ue,Ne,dt.data)}}else{qe?ee&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Pe,0,0,0,Ue,Ne,ye[Pe]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Pe,0,$e,Ue,Ne,ye[Pe]);for(let We=0;We<he.length;We++){const ke=he[We];qe?ee&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Pe,We+1,0,0,Ue,Ne,ke.image[Pe]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Pe,We+1,$e,Ue,Ne,ke.image[Pe])}}}_(v)&&h(t.TEXTURE_CUBE_MAP),F.__version=O.version,v.onUpdate&&v.onUpdate(v)}g.__version=v.version}function we(g,v,T,P,O,F){const Q=s.convert(T.format,T.colorSpace),q=s.convert(T.type),re=b(T.internalFormat,Q,q,T.colorSpace);if(!i.get(v).__hasExternalTextures){const oe=Math.max(1,v.width>>F),ye=Math.max(1,v.height>>F);O===t.TEXTURE_3D||O===t.TEXTURE_2D_ARRAY?n.texImage3D(O,F,re,oe,ye,v.depth,0,Q,q,null):n.texImage2D(O,F,re,oe,ye,0,Q,q,null)}n.bindFramebuffer(t.FRAMEBUFFER,g),ue(v)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,P,O,i.get(T).__webglTexture,0,j(v)):(O===t.TEXTURE_2D||O>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&O<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,P,O,i.get(T).__webglTexture,F),n.bindFramebuffer(t.FRAMEBUFFER,null)}function Ie(g,v,T){if(t.bindRenderbuffer(t.RENDERBUFFER,g),v.depthBuffer){const P=v.depthTexture,O=P&&P.isDepthTexture?P.type:null,F=M(v.stencilBuffer,O),Q=v.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,q=j(v);ue(v)?o.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,q,F,v.width,v.height):T?t.renderbufferStorageMultisample(t.RENDERBUFFER,q,F,v.width,v.height):t.renderbufferStorage(t.RENDERBUFFER,F,v.width,v.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,Q,t.RENDERBUFFER,g)}else{const P=v.textures;for(let O=0;O<P.length;O++){const F=P[O],Q=s.convert(F.format,F.colorSpace),q=s.convert(F.type),re=b(F.internalFormat,Q,q,F.colorSpace),Te=j(v);T&&ue(v)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,Te,re,v.width,v.height):ue(v)?o.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Te,re,v.width,v.height):t.renderbufferStorage(t.RENDERBUFFER,re,v.width,v.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function K(g,v){if(v&&v.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,g),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(v.depthTexture).__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),Z(v.depthTexture,0);const P=i.get(v.depthTexture).__webglTexture,O=j(v);if(v.depthTexture.format===os)ue(v)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,P,0,O):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,P,0);else if(v.depthTexture.format===ms)ue(v)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,P,0,O):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,P,0);else throw new Error("Unknown depthTexture format")}function xe(g){const v=i.get(g),T=g.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==g.depthTexture){const P=g.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),P){const O=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,P.removeEventListener("dispose",O)};P.addEventListener("dispose",O),v.__depthDisposeCallback=O}v.__boundDepthTexture=P}if(g.depthTexture&&!v.__autoAllocateDepthBuffer){if(T)throw new Error("target.depthTexture not supported in Cube render targets");K(v.__webglFramebuffer,g)}else if(T){v.__webglDepthbuffer=[];for(let P=0;P<6;P++)if(n.bindFramebuffer(t.FRAMEBUFFER,v.__webglFramebuffer[P]),v.__webglDepthbuffer[P]===void 0)v.__webglDepthbuffer[P]=t.createRenderbuffer(),Ie(v.__webglDepthbuffer[P],g,!1);else{const O=g.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,F=v.__webglDepthbuffer[P];t.bindRenderbuffer(t.RENDERBUFFER,F),t.framebufferRenderbuffer(t.FRAMEBUFFER,O,t.RENDERBUFFER,F)}}else if(n.bindFramebuffer(t.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=t.createRenderbuffer(),Ie(v.__webglDepthbuffer,g,!1);else{const P=g.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,O=v.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,O),t.framebufferRenderbuffer(t.FRAMEBUFFER,P,t.RENDERBUFFER,O)}n.bindFramebuffer(t.FRAMEBUFFER,null)}function _e(g,v,T){const P=i.get(g);v!==void 0&&we(P.__webglFramebuffer,g,g.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),T!==void 0&&xe(g)}function Ce(g){const v=g.texture,T=i.get(g),P=i.get(v);g.addEventListener("dispose",L);const O=g.textures,F=g.isWebGLCubeRenderTarget===!0,Q=O.length>1;if(Q||(P.__webglTexture===void 0&&(P.__webglTexture=t.createTexture()),P.__version=v.version,a.memory.textures++),F){T.__webglFramebuffer=[];for(let q=0;q<6;q++)if(v.mipmaps&&v.mipmaps.length>0){T.__webglFramebuffer[q]=[];for(let re=0;re<v.mipmaps.length;re++)T.__webglFramebuffer[q][re]=t.createFramebuffer()}else T.__webglFramebuffer[q]=t.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){T.__webglFramebuffer=[];for(let q=0;q<v.mipmaps.length;q++)T.__webglFramebuffer[q]=t.createFramebuffer()}else T.__webglFramebuffer=t.createFramebuffer();if(Q)for(let q=0,re=O.length;q<re;q++){const Te=i.get(O[q]);Te.__webglTexture===void 0&&(Te.__webglTexture=t.createTexture(),a.memory.textures++)}if(g.samples>0&&ue(g)===!1){T.__webglMultisampledFramebuffer=t.createFramebuffer(),T.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,T.__webglMultisampledFramebuffer);for(let q=0;q<O.length;q++){const re=O[q];T.__webglColorRenderbuffer[q]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,T.__webglColorRenderbuffer[q]);const Te=s.convert(re.format,re.colorSpace),oe=s.convert(re.type),ye=b(re.internalFormat,Te,oe,re.colorSpace,g.isXRRenderTarget===!0),Be=j(g);t.renderbufferStorageMultisample(t.RENDERBUFFER,Be,ye,g.width,g.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+q,t.RENDERBUFFER,T.__webglColorRenderbuffer[q])}t.bindRenderbuffer(t.RENDERBUFFER,null),g.depthBuffer&&(T.__webglDepthRenderbuffer=t.createRenderbuffer(),Ie(T.__webglDepthRenderbuffer,g,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(F){n.bindTexture(t.TEXTURE_CUBE_MAP,P.__webglTexture),ze(t.TEXTURE_CUBE_MAP,v);for(let q=0;q<6;q++)if(v.mipmaps&&v.mipmaps.length>0)for(let re=0;re<v.mipmaps.length;re++)we(T.__webglFramebuffer[q][re],g,v,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+q,re);else we(T.__webglFramebuffer[q],g,v,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+q,0);_(v)&&h(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Q){for(let q=0,re=O.length;q<re;q++){const Te=O[q],oe=i.get(Te);n.bindTexture(t.TEXTURE_2D,oe.__webglTexture),ze(t.TEXTURE_2D,Te),we(T.__webglFramebuffer,g,Te,t.COLOR_ATTACHMENT0+q,t.TEXTURE_2D,0),_(Te)&&h(t.TEXTURE_2D)}n.unbindTexture()}else{let q=t.TEXTURE_2D;if((g.isWebGL3DRenderTarget||g.isWebGLArrayRenderTarget)&&(q=g.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(q,P.__webglTexture),ze(q,v),v.mipmaps&&v.mipmaps.length>0)for(let re=0;re<v.mipmaps.length;re++)we(T.__webglFramebuffer[re],g,v,t.COLOR_ATTACHMENT0,q,re);else we(T.__webglFramebuffer,g,v,t.COLOR_ATTACHMENT0,q,0);_(v)&&h(q),n.unbindTexture()}g.depthBuffer&&xe(g)}function Ve(g){const v=g.textures;for(let T=0,P=v.length;T<P;T++){const O=v[T];if(_(O)){const F=g.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:t.TEXTURE_2D,Q=i.get(O).__webglTexture;n.bindTexture(F,Q),h(F),n.unbindTexture()}}}const He=[],w=[];function H(g){if(g.samples>0){if(ue(g)===!1){const v=g.textures,T=g.width,P=g.height;let O=t.COLOR_BUFFER_BIT;const F=g.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,Q=i.get(g),q=v.length>1;if(q)for(let re=0;re<v.length;re++)n.bindFramebuffer(t.FRAMEBUFFER,Q.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+re,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,Q.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+re,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,Q.__webglMultisampledFramebuffer),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Q.__webglFramebuffer);for(let re=0;re<v.length;re++){if(g.resolveDepthBuffer&&(g.depthBuffer&&(O|=t.DEPTH_BUFFER_BIT),g.stencilBuffer&&g.resolveStencilBuffer&&(O|=t.STENCIL_BUFFER_BIT)),q){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,Q.__webglColorRenderbuffer[re]);const Te=i.get(v[re]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,Te,0)}t.blitFramebuffer(0,0,T,P,0,0,T,P,O,t.NEAREST),l===!0&&(He.length=0,w.length=0,He.push(t.COLOR_ATTACHMENT0+re),g.depthBuffer&&g.resolveDepthBuffer===!1&&(He.push(F),w.push(F),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,w)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,He))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),q)for(let re=0;re<v.length;re++){n.bindFramebuffer(t.FRAMEBUFFER,Q.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+re,t.RENDERBUFFER,Q.__webglColorRenderbuffer[re]);const Te=i.get(v[re]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,Q.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+re,t.TEXTURE_2D,Te,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Q.__webglMultisampledFramebuffer)}else if(g.depthBuffer&&g.resolveDepthBuffer===!1&&l){const v=g.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[v])}}}function j(g){return Math.min(r.maxSamples,g.samples)}function ue(g){const v=i.get(g);return g.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function le(g){const v=a.render.frame;f.get(g)!==v&&(f.set(g,v),g.update())}function Me(g,v){const T=g.colorSpace,P=g.format,O=g.type;return g.isCompressedTexture===!0||g.isVideoTexture===!0||T!==tr&&T!==Gi&&xt.getTransfer(T),v}function Se(g){return typeof HTMLImageElement<"u"&&g instanceof HTMLImageElement?(u.width=g.naturalWidth||g.width,u.height=g.naturalHeight||g.height):typeof VideoFrame<"u"&&g instanceof VideoFrame?(u.width=g.displayWidth,u.height=g.displayHeight):(u.width=g.width,u.height=g.height),u}this.allocateTextureUnit=V,this.resetTextureUnits=C,this.setTexture2D=Z,this.setTexture2DArray=ne,this.setTexture3D=se,this.setTextureCube=de,this.rebindTextures=_e,this.setupRenderTarget=Ce,this.updateRenderTargetMipmap=Ve,this.updateMultisampleRenderTarget=H,this.setupDepthRenderbuffer=xe,this.setupFrameBufferTexture=we,this.useMultisampledRTT=ue}function Cb(t,e){function n(i,r=Gi){let s;const a=xt.getTransfer(r);if(i===Mi)return t.UNSIGNED_BYTE;if(i===xu)return t.UNSIGNED_SHORT_4_4_4_4;if(i===yu)return t.UNSIGNED_SHORT_5_5_5_1;if(i===yp)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===vp)return t.BYTE;if(i===xp)return t.SHORT;if(i===ta)return t.UNSIGNED_SHORT;if(i===vu)return t.INT;if(i===Lr)return t.UNSIGNED_INT;if(i===gi)return t.FLOAT;if(i===la)return t.HALF_FLOAT;if(i===Sp)return t.ALPHA;if(i===Mp)return t.RGB;if(i===Hn)return t.RGBA;if(i===bp)return t.LUMINANCE;if(i===Tp)return t.LUMINANCE_ALPHA;if(i===os)return t.DEPTH_COMPONENT;if(i===ms)return t.DEPTH_STENCIL;if(i===Ep)return t.RED;if(i===Su)return t.RED_INTEGER;if(i===wp)return t.RG;if(i===Mu)return t.RG_INTEGER;if(i===bu)return t.RGBA_INTEGER;if(i===Ka||i===Za||i===Ja||i===Qa)if(a===Ct)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===Ka)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Za)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Ja)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Qa)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===Ka)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Za)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Ja)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Qa)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===dc||i===pc||i===mc||i===_c)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===dc)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===pc)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===mc)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===_c)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===gc||i===vc||i===xc)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===gc||i===vc)return a===Ct?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===xc)return a===Ct?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===yc||i===Sc||i===Mc||i===bc||i===Tc||i===Ec||i===wc||i===Ac||i===Cc||i===Rc||i===Pc||i===Dc||i===Lc||i===Ic)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===yc)return a===Ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Sc)return a===Ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Mc)return a===Ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===bc)return a===Ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Tc)return a===Ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Ec)return a===Ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===wc)return a===Ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Ac)return a===Ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Cc)return a===Ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Rc)return a===Ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Pc)return a===Ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Dc)return a===Ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Lc)return a===Ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Ic)return a===Ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===eo||i===Uc||i===Oc)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===eo)return a===Ct?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Uc)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Oc)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Ap||i===Nc||i===Fc||i===Bc)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===eo)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Nc)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Fc)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Bc)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===ps?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}class Rb extends An{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Ha extends gn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Pb={type:"move"};class Ll{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ha,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ha,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new ve,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new ve),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ha,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new ve,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new ve),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,a=null;const o=this._targetRay,l=this._grip,u=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(u&&e.hand){a=!0;for(const x of e.hand.values()){const _=n.getJointPose(x,i),h=this._getHandJoint(u,x);_!==null&&(h.matrix.fromArray(_.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=_.radius),h.visible=_!==null}const f=u.joints["index-finger-tip"],d=u.joints["thumb-tip"],c=f.position.distanceTo(d.position),m=.02,p=.005;u.inputState.pinching&&c>m+p?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&c<=m-p&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Pb)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),u!==null&&(u.visible=a!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new Ha;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}const Db=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Lb=`
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

}`;class Ib{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n,i){if(this.texture===null){const r=new $t,s=e.properties.get(r);s.__webglTexture=n.texture,(n.depthNear!=i.depthNear||n.depthFar!=i.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new ei({vertexShader:Db,fragmentShader:Lb,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new Pn(new Ss(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Ub extends ys{constructor(e,n){super();const i=this;let r=null,s=1,a=null,o="local-floor",l=1,u=null,f=null,d=null,c=null,m=null,p=null;const x=new Ib,_=n.getContextAttributes();let h=null,b=null;const M=[],A=[],G=new yt;let L=null;const B=new An;B.layers.enable(1),B.viewport=new Nt;const X=new An;X.layers.enable(2),X.viewport=new Nt;const Y=[B,X],E=new Rb;E.layers.enable(1),E.layers.enable(2);let C=null,V=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ge){let we=M[ge];return we===void 0&&(we=new Ll,M[ge]=we),we.getTargetRaySpace()},this.getControllerGrip=function(ge){let we=M[ge];return we===void 0&&(we=new Ll,M[ge]=we),we.getGripSpace()},this.getHand=function(ge){let we=M[ge];return we===void 0&&(we=new Ll,M[ge]=we),we.getHandSpace()};function W(ge){const we=A.indexOf(ge.inputSource);if(we===-1)return;const Ie=M[we];Ie!==void 0&&(Ie.update(ge.inputSource,ge.frame,u||a),Ie.dispatchEvent({type:ge.type,data:ge.inputSource}))}function Z(){r.removeEventListener("select",W),r.removeEventListener("selectstart",W),r.removeEventListener("selectend",W),r.removeEventListener("squeeze",W),r.removeEventListener("squeezestart",W),r.removeEventListener("squeezeend",W),r.removeEventListener("end",Z),r.removeEventListener("inputsourceschange",ne);for(let ge=0;ge<M.length;ge++){const we=A[ge];we!==null&&(A[ge]=null,M[ge].disconnect(we))}C=null,V=null,x.reset(),e.setRenderTarget(h),m=null,c=null,d=null,r=null,b=null,Je.stop(),i.isPresenting=!1,e.setPixelRatio(L),e.setSize(G.width,G.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ge){s=ge,i.isPresenting},this.setReferenceSpaceType=function(ge){o=ge,i.isPresenting},this.getReferenceSpace=function(){return u||a},this.setReferenceSpace=function(ge){u=ge},this.getBaseLayer=function(){return c!==null?c:m},this.getBinding=function(){return d},this.getFrame=function(){return p},this.getSession=function(){return r},this.setSession=async function(ge){if(r=ge,r!==null){if(h=e.getRenderTarget(),r.addEventListener("select",W),r.addEventListener("selectstart",W),r.addEventListener("selectend",W),r.addEventListener("squeeze",W),r.addEventListener("squeezestart",W),r.addEventListener("squeezeend",W),r.addEventListener("end",Z),r.addEventListener("inputsourceschange",ne),_.xrCompatible!==!0&&await n.makeXRCompatible(),L=e.getPixelRatio(),e.getSize(G),r.renderState.layers===void 0){const we={antialias:_.antialias,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(r,n,we),r.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),b=new Ir(m.framebufferWidth,m.framebufferHeight,{format:Hn,type:Mi,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil})}else{let we=null,Ie=null,K=null;_.depth&&(K=_.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,we=_.stencil?ms:os,Ie=_.stencil?ps:Lr);const xe={colorFormat:n.RGBA8,depthFormat:K,scaleFactor:s};d=new XRWebGLBinding(r,n),c=d.createProjectionLayer(xe),r.updateRenderState({layers:[c]}),e.setPixelRatio(1),e.setSize(c.textureWidth,c.textureHeight,!1),b=new Ir(c.textureWidth,c.textureHeight,{format:Hn,type:Mi,depthTexture:new Vp(c.textureWidth,c.textureHeight,Ie,void 0,void 0,void 0,void 0,void 0,void 0,we),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0,resolveDepthBuffer:c.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(l),u=null,a=await r.requestReferenceSpace(o),Je.setContext(r),Je.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function ne(ge){for(let we=0;we<ge.removed.length;we++){const Ie=ge.removed[we],K=A.indexOf(Ie);K>=0&&(A[K]=null,M[K].disconnect(Ie))}for(let we=0;we<ge.added.length;we++){const Ie=ge.added[we];let K=A.indexOf(Ie);if(K===-1){for(let _e=0;_e<M.length;_e++)if(_e>=A.length){A.push(Ie),K=_e;break}else if(A[_e]===null){A[_e]=Ie,K=_e;break}if(K===-1)break}const xe=M[K];xe&&xe.connect(Ie)}}const se=new ve,de=new ve;function te(ge,we,Ie){se.setFromMatrixPosition(we.matrixWorld),de.setFromMatrixPosition(Ie.matrixWorld);const K=se.distanceTo(de),xe=we.projectionMatrix.elements,_e=Ie.projectionMatrix.elements,Ce=xe[14]/(xe[10]-1),Ve=xe[14]/(xe[10]+1),He=(xe[9]+1)/xe[5],w=(xe[9]-1)/xe[5],H=(xe[8]-1)/xe[0],j=(_e[8]+1)/_e[0],ue=Ce*H,le=Ce*j,Me=K/(-H+j),Se=Me*-H;if(we.matrixWorld.decompose(ge.position,ge.quaternion,ge.scale),ge.translateX(Se),ge.translateZ(Me),ge.matrixWorld.compose(ge.position,ge.quaternion,ge.scale),ge.matrixWorldInverse.copy(ge.matrixWorld).invert(),xe[10]===-1)ge.projectionMatrix.copy(we.projectionMatrix),ge.projectionMatrixInverse.copy(we.projectionMatrixInverse);else{const g=Ce+Me,v=Ve+Me,T=ue-Se,P=le+(K-Se),O=He*Ve/v*g,F=w*Ve/v*g;ge.projectionMatrix.makePerspective(T,P,O,F,g,v),ge.projectionMatrixInverse.copy(ge.projectionMatrix).invert()}}function Le(ge,we){we===null?ge.matrixWorld.copy(ge.matrix):ge.matrixWorld.multiplyMatrices(we.matrixWorld,ge.matrix),ge.matrixWorldInverse.copy(ge.matrixWorld).invert()}this.updateCamera=function(ge){if(r===null)return;let we=ge.near,Ie=ge.far;x.texture!==null&&(x.depthNear>0&&(we=x.depthNear),x.depthFar>0&&(Ie=x.depthFar)),E.near=X.near=B.near=we,E.far=X.far=B.far=Ie,(C!==E.near||V!==E.far)&&(r.updateRenderState({depthNear:E.near,depthFar:E.far}),C=E.near,V=E.far);const K=ge.parent,xe=E.cameras;Le(E,K);for(let _e=0;_e<xe.length;_e++)Le(xe[_e],K);xe.length===2?te(E,B,X):E.projectionMatrix.copy(B.projectionMatrix),Fe(ge,E,K)};function Fe(ge,we,Ie){Ie===null?ge.matrix.copy(we.matrixWorld):(ge.matrix.copy(Ie.matrixWorld),ge.matrix.invert(),ge.matrix.multiply(we.matrixWorld)),ge.matrix.decompose(ge.position,ge.quaternion,ge.scale),ge.updateMatrixWorld(!0),ge.projectionMatrix.copy(we.projectionMatrix),ge.projectionMatrixInverse.copy(we.projectionMatrixInverse),ge.isPerspectiveCamera&&(ge.fov=kc*2*Math.atan(1/ge.projectionMatrix.elements[5]),ge.zoom=1)}this.getCamera=function(){return E},this.getFoveation=function(){if(!(c===null&&m===null))return l},this.setFoveation=function(ge){l=ge,c!==null&&(c.fixedFoveation=ge),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=ge)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(E)};let ze=null;function Ze(ge,we){if(f=we.getViewerPose(u||a),p=we,f!==null){const Ie=f.views;m!==null&&(e.setRenderTargetFramebuffer(b,m.framebuffer),e.setRenderTarget(b));let K=!1;Ie.length!==E.cameras.length&&(E.cameras.length=0,K=!0);for(let _e=0;_e<Ie.length;_e++){const Ce=Ie[_e];let Ve=null;if(m!==null)Ve=m.getViewport(Ce);else{const w=d.getViewSubImage(c,Ce);Ve=w.viewport,_e===0&&(e.setRenderTargetTextures(b,w.colorTexture,c.ignoreDepthValues?void 0:w.depthStencilTexture),e.setRenderTarget(b))}let He=Y[_e];He===void 0&&(He=new An,He.layers.enable(_e),He.viewport=new Nt,Y[_e]=He),He.matrix.fromArray(Ce.transform.matrix),He.matrix.decompose(He.position,He.quaternion,He.scale),He.projectionMatrix.fromArray(Ce.projectionMatrix),He.projectionMatrixInverse.copy(He.projectionMatrix).invert(),He.viewport.set(Ve.x,Ve.y,Ve.width,Ve.height),_e===0&&(E.matrix.copy(He.matrix),E.matrix.decompose(E.position,E.quaternion,E.scale)),K===!0&&E.cameras.push(He)}const xe=r.enabledFeatures;if(xe&&xe.includes("depth-sensing")){const _e=d.getDepthInformation(Ie[0]);_e&&_e.isValid&&_e.texture&&x.init(e,_e,r.renderState)}}for(let Ie=0;Ie<M.length;Ie++){const K=A[Ie],xe=M[Ie];K!==null&&xe!==void 0&&xe.update(K,we,u||a)}ze&&ze(ge,we),we.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:we}),p=null}const Je=new zp;Je.setAnimationLoop(Ze),this.setAnimationLoop=function(ge){ze=ge},this.dispose=function(){}}}const pr=new bi,Ob=new Ft;function Nb(t,e){function n(_,h){_.matrixAutoUpdate===!0&&_.updateMatrix(),h.value.copy(_.matrix)}function i(_,h){h.color.getRGB(_.fogColor.value,Np(t)),h.isFog?(_.fogNear.value=h.near,_.fogFar.value=h.far):h.isFogExp2&&(_.fogDensity.value=h.density)}function r(_,h,b,M,A){h.isMeshBasicMaterial||h.isMeshLambertMaterial?s(_,h):h.isMeshToonMaterial?(s(_,h),d(_,h)):h.isMeshPhongMaterial?(s(_,h),f(_,h)):h.isMeshStandardMaterial?(s(_,h),c(_,h),h.isMeshPhysicalMaterial&&m(_,h,A)):h.isMeshMatcapMaterial?(s(_,h),p(_,h)):h.isMeshDepthMaterial?s(_,h):h.isMeshDistanceMaterial?(s(_,h),x(_,h)):h.isMeshNormalMaterial?s(_,h):h.isLineBasicMaterial?(a(_,h),h.isLineDashedMaterial&&o(_,h)):h.isPointsMaterial?l(_,h,b,M):h.isSpriteMaterial?u(_,h):h.isShadowMaterial?(_.color.value.copy(h.color),_.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function s(_,h){_.opacity.value=h.opacity,h.color&&_.diffuse.value.copy(h.color),h.emissive&&_.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(_.map.value=h.map,n(h.map,_.mapTransform)),h.alphaMap&&(_.alphaMap.value=h.alphaMap,n(h.alphaMap,_.alphaMapTransform)),h.bumpMap&&(_.bumpMap.value=h.bumpMap,n(h.bumpMap,_.bumpMapTransform),_.bumpScale.value=h.bumpScale,h.side===_n&&(_.bumpScale.value*=-1)),h.normalMap&&(_.normalMap.value=h.normalMap,n(h.normalMap,_.normalMapTransform),_.normalScale.value.copy(h.normalScale),h.side===_n&&_.normalScale.value.negate()),h.displacementMap&&(_.displacementMap.value=h.displacementMap,n(h.displacementMap,_.displacementMapTransform),_.displacementScale.value=h.displacementScale,_.displacementBias.value=h.displacementBias),h.emissiveMap&&(_.emissiveMap.value=h.emissiveMap,n(h.emissiveMap,_.emissiveMapTransform)),h.specularMap&&(_.specularMap.value=h.specularMap,n(h.specularMap,_.specularMapTransform)),h.alphaTest>0&&(_.alphaTest.value=h.alphaTest);const b=e.get(h),M=b.envMap,A=b.envMapRotation;M&&(_.envMap.value=M,pr.copy(A),pr.x*=-1,pr.y*=-1,pr.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(pr.y*=-1,pr.z*=-1),_.envMapRotation.value.setFromMatrix4(Ob.makeRotationFromEuler(pr)),_.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,_.reflectivity.value=h.reflectivity,_.ior.value=h.ior,_.refractionRatio.value=h.refractionRatio),h.lightMap&&(_.lightMap.value=h.lightMap,_.lightMapIntensity.value=h.lightMapIntensity,n(h.lightMap,_.lightMapTransform)),h.aoMap&&(_.aoMap.value=h.aoMap,_.aoMapIntensity.value=h.aoMapIntensity,n(h.aoMap,_.aoMapTransform))}function a(_,h){_.diffuse.value.copy(h.color),_.opacity.value=h.opacity,h.map&&(_.map.value=h.map,n(h.map,_.mapTransform))}function o(_,h){_.dashSize.value=h.dashSize,_.totalSize.value=h.dashSize+h.gapSize,_.scale.value=h.scale}function l(_,h,b,M){_.diffuse.value.copy(h.color),_.opacity.value=h.opacity,_.size.value=h.size*b,_.scale.value=M*.5,h.map&&(_.map.value=h.map,n(h.map,_.uvTransform)),h.alphaMap&&(_.alphaMap.value=h.alphaMap,n(h.alphaMap,_.alphaMapTransform)),h.alphaTest>0&&(_.alphaTest.value=h.alphaTest)}function u(_,h){_.diffuse.value.copy(h.color),_.opacity.value=h.opacity,_.rotation.value=h.rotation,h.map&&(_.map.value=h.map,n(h.map,_.mapTransform)),h.alphaMap&&(_.alphaMap.value=h.alphaMap,n(h.alphaMap,_.alphaMapTransform)),h.alphaTest>0&&(_.alphaTest.value=h.alphaTest)}function f(_,h){_.specular.value.copy(h.specular),_.shininess.value=Math.max(h.shininess,1e-4)}function d(_,h){h.gradientMap&&(_.gradientMap.value=h.gradientMap)}function c(_,h){_.metalness.value=h.metalness,h.metalnessMap&&(_.metalnessMap.value=h.metalnessMap,n(h.metalnessMap,_.metalnessMapTransform)),_.roughness.value=h.roughness,h.roughnessMap&&(_.roughnessMap.value=h.roughnessMap,n(h.roughnessMap,_.roughnessMapTransform)),h.envMap&&(_.envMapIntensity.value=h.envMapIntensity)}function m(_,h,b){_.ior.value=h.ior,h.sheen>0&&(_.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),_.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(_.sheenColorMap.value=h.sheenColorMap,n(h.sheenColorMap,_.sheenColorMapTransform)),h.sheenRoughnessMap&&(_.sheenRoughnessMap.value=h.sheenRoughnessMap,n(h.sheenRoughnessMap,_.sheenRoughnessMapTransform))),h.clearcoat>0&&(_.clearcoat.value=h.clearcoat,_.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(_.clearcoatMap.value=h.clearcoatMap,n(h.clearcoatMap,_.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(_.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,n(h.clearcoatRoughnessMap,_.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(_.clearcoatNormalMap.value=h.clearcoatNormalMap,n(h.clearcoatNormalMap,_.clearcoatNormalMapTransform),_.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===_n&&_.clearcoatNormalScale.value.negate())),h.dispersion>0&&(_.dispersion.value=h.dispersion),h.iridescence>0&&(_.iridescence.value=h.iridescence,_.iridescenceIOR.value=h.iridescenceIOR,_.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],_.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(_.iridescenceMap.value=h.iridescenceMap,n(h.iridescenceMap,_.iridescenceMapTransform)),h.iridescenceThicknessMap&&(_.iridescenceThicknessMap.value=h.iridescenceThicknessMap,n(h.iridescenceThicknessMap,_.iridescenceThicknessMapTransform))),h.transmission>0&&(_.transmission.value=h.transmission,_.transmissionSamplerMap.value=b.texture,_.transmissionSamplerSize.value.set(b.width,b.height),h.transmissionMap&&(_.transmissionMap.value=h.transmissionMap,n(h.transmissionMap,_.transmissionMapTransform)),_.thickness.value=h.thickness,h.thicknessMap&&(_.thicknessMap.value=h.thicknessMap,n(h.thicknessMap,_.thicknessMapTransform)),_.attenuationDistance.value=h.attenuationDistance,_.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(_.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(_.anisotropyMap.value=h.anisotropyMap,n(h.anisotropyMap,_.anisotropyMapTransform))),_.specularIntensity.value=h.specularIntensity,_.specularColor.value.copy(h.specularColor),h.specularColorMap&&(_.specularColorMap.value=h.specularColorMap,n(h.specularColorMap,_.specularColorMapTransform)),h.specularIntensityMap&&(_.specularIntensityMap.value=h.specularIntensityMap,n(h.specularIntensityMap,_.specularIntensityMapTransform))}function p(_,h){h.matcap&&(_.matcap.value=h.matcap)}function x(_,h){const b=e.get(h).light;_.referencePosition.value.setFromMatrixPosition(b.matrixWorld),_.nearDistance.value=b.shadow.camera.near,_.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function Fb(t,e,n,i){let r={},s={},a=[];const o=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(b,M){const A=M.program;i.uniformBlockBinding(b,A)}function u(b,M){let A=r[b.id];A===void 0&&(p(b),A=f(b),r[b.id]=A,b.addEventListener("dispose",_));const G=M.program;i.updateUBOMapping(b,G);const L=e.render.frame;s[b.id]!==L&&(c(b),s[b.id]=L)}function f(b){const M=d();b.__bindingPointIndex=M;const A=t.createBuffer(),G=b.__size,L=b.usage;return t.bindBuffer(t.UNIFORM_BUFFER,A),t.bufferData(t.UNIFORM_BUFFER,G,L),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,M,A),A}function d(){for(let b=0;b<o;b++)if(a.indexOf(b)===-1)return a.push(b),b;return 0}function c(b){const M=r[b.id],A=b.uniforms,G=b.__cache;t.bindBuffer(t.UNIFORM_BUFFER,M);for(let L=0,B=A.length;L<B;L++){const X=Array.isArray(A[L])?A[L]:[A[L]];for(let Y=0,E=X.length;Y<E;Y++){const C=X[Y];if(m(C,L,Y,G)===!0){const V=C.__offset,W=Array.isArray(C.value)?C.value:[C.value];let Z=0;for(let ne=0;ne<W.length;ne++){const se=W[ne],de=x(se);typeof se=="number"||typeof se=="boolean"?(C.__data[0]=se,t.bufferSubData(t.UNIFORM_BUFFER,V+Z,C.__data)):se.isMatrix3?(C.__data[0]=se.elements[0],C.__data[1]=se.elements[1],C.__data[2]=se.elements[2],C.__data[3]=0,C.__data[4]=se.elements[3],C.__data[5]=se.elements[4],C.__data[6]=se.elements[5],C.__data[7]=0,C.__data[8]=se.elements[6],C.__data[9]=se.elements[7],C.__data[10]=se.elements[8],C.__data[11]=0):(se.toArray(C.__data,Z),Z+=de.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,V,C.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function m(b,M,A,G){const L=b.value,B=M+"_"+A;if(G[B]===void 0)return typeof L=="number"||typeof L=="boolean"?G[B]=L:G[B]=L.clone(),!0;{const X=G[B];if(typeof L=="number"||typeof L=="boolean"){if(X!==L)return G[B]=L,!0}else if(X.equals(L)===!1)return X.copy(L),!0}return!1}function p(b){const M=b.uniforms;let A=0;const G=16;for(let B=0,X=M.length;B<X;B++){const Y=Array.isArray(M[B])?M[B]:[M[B]];for(let E=0,C=Y.length;E<C;E++){const V=Y[E],W=Array.isArray(V.value)?V.value:[V.value];for(let Z=0,ne=W.length;Z<ne;Z++){const se=W[Z],de=x(se),te=A%G,Le=te%de.boundary,Fe=te+Le;A+=Le,Fe!==0&&G-Fe<de.storage&&(A+=G-Fe),V.__data=new Float32Array(de.storage/Float32Array.BYTES_PER_ELEMENT),V.__offset=A,A+=de.storage}}}const L=A%G;return L>0&&(A+=G-L),b.__size=A,b.__cache={},this}function x(b){const M={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(M.boundary=4,M.storage=4):b.isVector2?(M.boundary=8,M.storage=8):b.isVector3||b.isColor?(M.boundary=16,M.storage=12):b.isVector4?(M.boundary=16,M.storage=16):b.isMatrix3?(M.boundary=48,M.storage=48):b.isMatrix4?(M.boundary=64,M.storage=64):b.isTexture,M}function _(b){const M=b.target;M.removeEventListener("dispose",_);const A=a.indexOf(M.__bindingPointIndex);a.splice(A,1),t.deleteBuffer(r[M.id]),delete r[M.id],delete s[M.id]}function h(){for(const b in r)t.deleteBuffer(r[b]);a=[],r={},s={}}return{bind:l,update:u,dispose:h}}class qp{constructor(e={}){const{canvas:n=Ev(),context:i=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:u=!1,powerPreference:f="default",failIfMajorPerformanceCaveat:d=!1}=e;this.isWebGLRenderer=!0;let c;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");c=i.getContextAttributes().alpha}else c=a;const m=new Uint32Array(4),p=new Int32Array(4);let x=null,_=null;const h=[],b=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=qn,this.toneMapping=Yi,this.toneMappingExposure=1;const M=this;let A=!1,G=0,L=0,B=null,X=-1,Y=null;const E=new Nt,C=new Nt;let V=null;const W=new Mt(0);let Z=0,ne=n.width,se=n.height,de=1,te=null,Le=null;const Fe=new Nt(0,0,ne,se),ze=new Nt(0,0,ne,se);let Ze=!1;const Je=new kp;let ge=!1,we=!1;const Ie=new Ft,K=new Ft,xe=new ve,_e=new Nt,Ce={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ve=!1;function He(){return B===null?de:1}let w=i;function H(N,ae){return n.getContext(N,ae)}try{const N={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:u,powerPreference:f,failIfMajorPerformanceCaveat:d};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${gu}`),n.addEventListener("webglcontextlost",Pe,!1),n.addEventListener("webglcontextrestored",We,!1),n.addEventListener("webglcontextcreationerror",ke,!1),w===null){const ae="webgl2";if(w=H(ae,N),w===null)throw H(ae)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(N){throw N}let j,ue,le,Me,Se,g,v,T,P,O,F,Q,q,re,Te,oe,ye,Be,Ue,Ne,$e,qe,rt,ee;function je(){j=new GS(w),j.init(),qe=new Cb(w,j),ue=new FS(w,j,e,qe),le=new Eb(w),ue.reverseDepthBuffer&&le.buffers.depth.setReversed(!0),Me=new jS(w),Se=new ub,g=new Ab(w,j,le,Se,ue,qe,Me),v=new kS(M),T=new VS(M),P=new Qv(w),rt=new OS(w,P),O=new WS(w,P,Me,rt),F=new YS(w,O,P,Me),Ue=new qS(w,ue,g),oe=new BS(Se),Q=new cb(M,v,T,j,ue,rt,oe),q=new Nb(M,Se),re=new hb,Te=new vb(j),Be=new US(M,v,T,le,F,c,l),ye=new bb(M,F,ue),ee=new Fb(w,Me,ue,le),Ne=new NS(w,j,Me),$e=new XS(w,j,Me),Me.programs=Q.programs,M.capabilities=ue,M.extensions=j,M.properties=Se,M.renderLists=re,M.shadowMap=ye,M.state=le,M.info=Me}je();const he=new Ub(M,w);this.xr=he,this.getContext=function(){return w},this.getContextAttributes=function(){return w.getContextAttributes()},this.forceContextLoss=function(){const N=j.get("WEBGL_lose_context");N&&N.loseContext()},this.forceContextRestore=function(){const N=j.get("WEBGL_lose_context");N&&N.restoreContext()},this.getPixelRatio=function(){return de},this.setPixelRatio=function(N){N!==void 0&&(de=N,this.setSize(ne,se,!1))},this.getSize=function(N){return N.set(ne,se)},this.setSize=function(N,ae,pe=!0){he.isPresenting||(ne=N,se=ae,n.width=Math.floor(N*de),n.height=Math.floor(ae*de),pe===!0&&(n.style.width=N+"px",n.style.height=ae+"px"),this.setViewport(0,0,N,ae))},this.getDrawingBufferSize=function(N){return N.set(ne*de,se*de).floor()},this.setDrawingBufferSize=function(N,ae,pe){ne=N,se=ae,de=pe,n.width=Math.floor(N*pe),n.height=Math.floor(ae*pe),this.setViewport(0,0,N,ae)},this.getCurrentViewport=function(N){return N.copy(E)},this.getViewport=function(N){return N.copy(Fe)},this.setViewport=function(N,ae,pe,me){N.isVector4?Fe.set(N.x,N.y,N.z,N.w):Fe.set(N,ae,pe,me),le.viewport(E.copy(Fe).multiplyScalar(de).round())},this.getScissor=function(N){return N.copy(ze)},this.setScissor=function(N,ae,pe,me){N.isVector4?ze.set(N.x,N.y,N.z,N.w):ze.set(N,ae,pe,me),le.scissor(C.copy(ze).multiplyScalar(de).round())},this.getScissorTest=function(){return Ze},this.setScissorTest=function(N){le.setScissorTest(Ze=N)},this.setOpaqueSort=function(N){te=N},this.setTransparentSort=function(N){Le=N},this.getClearColor=function(N){return N.copy(Be.getClearColor())},this.setClearColor=function(){Be.setClearColor.apply(Be,arguments)},this.getClearAlpha=function(){return Be.getClearAlpha()},this.setClearAlpha=function(){Be.setClearAlpha.apply(Be,arguments)},this.clear=function(N=!0,ae=!0,pe=!0){let me=0;if(N){let y=!1;if(B!==null){const S=B.texture.format;y=S===bu||S===Mu||S===Su}if(y){const S=B.texture.type,D=S===Mi||S===Lr||S===ta||S===ps||S===xu||S===yu,I=Be.getClearColor(),R=Be.getClearAlpha(),z=I.r,U=I.g,k=I.b;D?(m[0]=z,m[1]=U,m[2]=k,m[3]=R,w.clearBufferuiv(w.COLOR,0,m)):(p[0]=z,p[1]=U,p[2]=k,p[3]=R,w.clearBufferiv(w.COLOR,0,p))}else me|=w.COLOR_BUFFER_BIT}ae&&(me|=w.DEPTH_BUFFER_BIT,w.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),pe&&(me|=w.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),w.clear(me)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",Pe,!1),n.removeEventListener("webglcontextrestored",We,!1),n.removeEventListener("webglcontextcreationerror",ke,!1),re.dispose(),Te.dispose(),Se.dispose(),v.dispose(),T.dispose(),F.dispose(),rt.dispose(),ee.dispose(),Q.dispose(),he.dispose(),he.removeEventListener("sessionstart",bs),he.removeEventListener("sessionend",ti),ni.stop()};function Pe(N){N.preventDefault(),A=!0}function We(){A=!1;const N=Me.autoReset,ae=ye.enabled,pe=ye.autoUpdate,me=ye.needsUpdate,y=ye.type;je(),Me.autoReset=N,ye.enabled=ae,ye.autoUpdate=pe,ye.needsUpdate=me,ye.type=y}function ke(N){}function dt(N){const ae=N.target;ae.removeEventListener("dispose",dt),Tt(ae)}function Tt(N){Et(N),Se.remove(N)}function Et(N){const ae=Se.get(N).programs;ae!==void 0&&(ae.forEach(function(pe){Q.releaseProgram(pe)}),N.isShaderMaterial&&Q.releaseShaderCache(N))}this.renderBufferDirect=function(N,ae,pe,me,y,S){ae===null&&(ae=Ce);const D=y.isMesh&&y.matrixWorld.determinant()<0,I=Ho(N,ae,pe,me,y);le.setMaterial(me,D);let R=pe.index,z=1;if(me.wireframe===!0){if(R=O.getWireframeAttribute(pe),R===void 0)return;z=2}const U=pe.drawRange,k=pe.attributes.position;let $=U.start*z,ce=(U.start+U.count)*z;S!==null&&($=Math.max($,S.start*z),ce=Math.min(ce,(S.start+S.count)*z)),R!==null?($=Math.max($,0),ce=Math.min(ce,R.count)):k!=null&&($=Math.max($,0),ce=Math.min(ce,k.count));const ie=ce-$;if(ie<0||ie===1/0)return;rt.setup(y,me,I,pe,R);let be,fe=Ne;if(R!==null&&(be=P.get(R),fe=$e,fe.setIndex(be)),y.isMesh)me.wireframe===!0?(le.setLineWidth(me.wireframeLinewidth*He()),fe.setMode(w.LINES)):fe.setMode(w.TRIANGLES);else if(y.isLine){let J=me.linewidth;J===void 0&&(J=1),le.setLineWidth(J*He()),y.isLineSegments?fe.setMode(w.LINES):y.isLineLoop?fe.setMode(w.LINE_LOOP):fe.setMode(w.LINE_STRIP)}else y.isPoints?fe.setMode(w.POINTS):y.isSprite&&fe.setMode(w.TRIANGLES);if(y.isBatchedMesh)if(y._multiDrawInstances!==null)fe.renderMultiDrawInstances(y._multiDrawStarts,y._multiDrawCounts,y._multiDrawCount,y._multiDrawInstances);else if(j.get("WEBGL_multi_draw"))fe.renderMultiDraw(y._multiDrawStarts,y._multiDrawCounts,y._multiDrawCount);else{const J=y._multiDrawStarts,Oe=y._multiDrawCounts,De=y._multiDrawCount,Ee=R?P.get(R).bytesPerElement:1,Ae=Se.get(me).currentProgram.getUniforms();for(let Re=0;Re<De;Re++)Ae.setValue(w,"_gl_DrawID",Re),fe.render(J[Re]/Ee,Oe[Re])}else if(y.isInstancedMesh)fe.renderInstances($,ie,y.count);else if(pe.isInstancedBufferGeometry){const J=pe._maxInstanceCount!==void 0?pe._maxInstanceCount:1/0,Oe=Math.min(pe.instanceCount,J);fe.renderInstances($,ie,Oe)}else fe.render($,ie)};function pt(N,ae,pe){N.transparent===!0&&N.side===_i&&N.forceSinglePass===!1?(N.side=_n,N.needsUpdate=!0,wi(N,ae,pe),N.side=Ki,N.needsUpdate=!0,wi(N,ae,pe),N.side=_i):wi(N,ae,pe)}this.compile=function(N,ae,pe=null){pe===null&&(pe=N),_=Te.get(pe),_.init(ae),b.push(_),pe.traverseVisible(function(y){y.isLight&&y.layers.test(ae.layers)&&(_.pushLight(y),y.castShadow&&_.pushShadow(y))}),N!==pe&&N.traverseVisible(function(y){y.isLight&&y.layers.test(ae.layers)&&(_.pushLight(y),y.castShadow&&_.pushShadow(y))}),_.setupLights();const me=new Set;return N.traverse(function(y){if(!(y.isMesh||y.isPoints||y.isLine||y.isSprite))return;const S=y.material;if(S)if(Array.isArray(S))for(let D=0;D<S.length;D++){const I=S[D];pt(I,pe,y),me.add(I)}else pt(S,pe,y),me.add(S)}),b.pop(),_=null,me},this.compileAsync=function(N,ae,pe=null){const me=this.compile(N,ae,pe);return new Promise(y=>{function S(){if(me.forEach(function(D){Se.get(D).currentProgram.isReady()&&me.delete(D)}),me.size===0){y(N);return}setTimeout(S,10)}j.get("KHR_parallel_shader_compile")!==null?S():setTimeout(S,10)})};let Kt=null;function Gt(N){Kt&&Kt(N)}function bs(){ni.stop()}function ti(){ni.start()}const ni=new zp;ni.setAnimationLoop(Gt),typeof self<"u"&&ni.setContext(self),this.setAnimationLoop=function(N){Kt=N,he.setAnimationLoop(N),N===null?ni.stop():ni.start()},he.addEventListener("sessionstart",bs),he.addEventListener("sessionend",ti),this.render=function(N,ae){if(ae!==void 0&&ae.isCamera!==!0||A===!0)return;if(N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),ae.parent===null&&ae.matrixWorldAutoUpdate===!0&&ae.updateMatrixWorld(),he.enabled===!0&&he.isPresenting===!0&&(he.cameraAutoUpdate===!0&&he.updateCamera(ae),ae=he.getCamera()),N.isScene===!0&&N.onBeforeRender(M,N,ae,B),_=Te.get(N,b.length),_.init(ae),b.push(_),K.multiplyMatrices(ae.projectionMatrix,ae.matrixWorldInverse),Je.setFromProjectionMatrix(K),we=this.localClippingEnabled,ge=oe.init(this.clippingPlanes,we),x=re.get(N,h.length),x.init(),h.push(x),he.enabled===!0&&he.isPresenting===!0){const S=M.xr.getDepthSensingMesh();S!==null&&ir(S,ae,-1/0,M.sortObjects)}ir(N,ae,0,M.sortObjects),x.finish(),M.sortObjects===!0&&x.sort(te,Le),Ve=he.enabled===!1||he.isPresenting===!1||he.hasDepthSensing()===!1,Ve&&Be.addToRenderList(x,N),this.info.render.frame++,ge===!0&&oe.beginShadows();const pe=_.state.shadowsArray;ye.render(pe,N,ae),ge===!0&&oe.endShadows(),this.info.autoReset===!0&&this.info.reset();const me=x.opaque,y=x.transmissive;if(_.setupLights(),ae.isArrayCamera){const S=ae.cameras;if(y.length>0)for(let D=0,I=S.length;D<I;D++){const R=S[D];pa(me,y,N,R)}Ve&&Be.render(N);for(let D=0,I=S.length;D<I;D++){const R=S[D];Ts(x,N,R,R.viewport)}}else y.length>0&&pa(me,y,N,ae),Ve&&Be.render(N),Ts(x,N,ae);B!==null&&(g.updateMultisampleRenderTarget(B),g.updateRenderTargetMipmap(B)),N.isScene===!0&&N.onAfterRender(M,N,ae),rt.resetDefaultState(),X=-1,Y=null,b.pop(),b.length>0?(_=b[b.length-1],ge===!0&&oe.setGlobalState(M.clippingPlanes,_.state.camera)):_=null,h.pop(),h.length>0?x=h[h.length-1]:x=null};function ir(N,ae,pe,me){if(N.visible===!1)return;if(N.layers.test(ae.layers)){if(N.isGroup)pe=N.renderOrder;else if(N.isLOD)N.autoUpdate===!0&&N.update(ae);else if(N.isLight)_.pushLight(N),N.castShadow&&_.pushShadow(N);else if(N.isSprite){if(!N.frustumCulled||Je.intersectsSprite(N)){me&&_e.setFromMatrixPosition(N.matrixWorld).applyMatrix4(K);const D=F.update(N),I=N.material;I.visible&&x.push(N,D,I,pe,_e.z,null)}}else if((N.isMesh||N.isLine||N.isPoints)&&(!N.frustumCulled||Je.intersectsObject(N))){const D=F.update(N),I=N.material;if(me&&(N.boundingSphere!==void 0?(N.boundingSphere===null&&N.computeBoundingSphere(),_e.copy(N.boundingSphere.center)):(D.boundingSphere===null&&D.computeBoundingSphere(),_e.copy(D.boundingSphere.center)),_e.applyMatrix4(N.matrixWorld).applyMatrix4(K)),Array.isArray(I)){const R=D.groups;for(let z=0,U=R.length;z<U;z++){const k=R[z],$=I[k.materialIndex];$&&$.visible&&x.push(N,D,$,pe,_e.z,k)}}else I.visible&&x.push(N,D,I,pe,_e.z,null)}}const S=N.children;for(let D=0,I=S.length;D<I;D++)ir(S[D],ae,pe,me)}function Ts(N,ae,pe,me){const y=N.opaque,S=N.transmissive,D=N.transparent;_.setupLightsView(pe),ge===!0&&oe.setGlobalState(M.clippingPlanes,pe),me&&le.viewport(E.copy(me)),y.length>0&&Ei(y,ae,pe),S.length>0&&Ei(S,ae,pe),D.length>0&&Ei(D,ae,pe),le.buffers.depth.setTest(!0),le.buffers.depth.setMask(!0),le.buffers.color.setMask(!0),le.setPolygonOffset(!1)}function pa(N,ae,pe,me){if((pe.isScene===!0?pe.overrideMaterial:null)!==null)return;_.state.transmissionRenderTarget[me.id]===void 0&&(_.state.transmissionRenderTarget[me.id]=new Ir(1,1,{generateMipmaps:!0,type:j.has("EXT_color_buffer_half_float")||j.has("EXT_color_buffer_float")?la:Mi,minFilter:Tr,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:xt.workingColorSpace}));const S=_.state.transmissionRenderTarget[me.id],D=me.viewport||E;S.setSize(D.z,D.w);const I=M.getRenderTarget();M.setRenderTarget(S),M.getClearColor(W),Z=M.getClearAlpha(),Z<1&&M.setClearColor(16777215,.5),M.clear(),Ve&&Be.render(pe);const R=M.toneMapping;M.toneMapping=Yi;const z=me.viewport;if(me.viewport!==void 0&&(me.viewport=void 0),_.setupLightsView(me),ge===!0&&oe.setGlobalState(M.clippingPlanes,me),Ei(N,pe,me),g.updateMultisampleRenderTarget(S),g.updateRenderTargetMipmap(S),j.has("WEBGL_multisampled_render_to_texture")===!1){let U=!1;for(let k=0,$=ae.length;k<$;k++){const ce=ae[k],ie=ce.object,be=ce.geometry,fe=ce.material,J=ce.group;if(fe.side===_i&&ie.layers.test(me.layers)){const Oe=fe.side;fe.side=_n,fe.needsUpdate=!0,Or(ie,pe,me,be,fe,J),fe.side=Oe,fe.needsUpdate=!0,U=!0}}U===!0&&(g.updateMultisampleRenderTarget(S),g.updateRenderTargetMipmap(S))}M.setRenderTarget(I),M.setClearColor(W,Z),z!==void 0&&(me.viewport=z),M.toneMapping=R}function Ei(N,ae,pe){const me=ae.isScene===!0?ae.overrideMaterial:null;for(let y=0,S=N.length;y<S;y++){const D=N[y],I=D.object,R=D.geometry,z=me===null?D.material:me,U=D.group;I.layers.test(pe.layers)&&Or(I,ae,pe,R,z,U)}}function Or(N,ae,pe,me,y,S){N.onBeforeRender(M,ae,pe,me,y,S),N.modelViewMatrix.multiplyMatrices(pe.matrixWorldInverse,N.matrixWorld),N.normalMatrix.getNormalMatrix(N.modelViewMatrix),y.onBeforeRender(M,ae,pe,me,N,S),y.transparent===!0&&y.side===_i&&y.forceSinglePass===!1?(y.side=_n,y.needsUpdate=!0,M.renderBufferDirect(pe,ae,me,y,N,S),y.side=Ki,y.needsUpdate=!0,M.renderBufferDirect(pe,ae,me,y,N,S),y.side=_i):M.renderBufferDirect(pe,ae,me,y,N,S),N.onAfterRender(M,ae,pe,me,y,S)}function wi(N,ae,pe){ae.isScene!==!0&&(ae=Ce);const me=Se.get(N),y=_.state.lights,S=_.state.shadowsArray,D=y.state.version,I=Q.getParameters(N,y.state,S,ae,pe),R=Q.getProgramCacheKey(I);let z=me.programs;me.environment=N.isMeshStandardMaterial?ae.environment:null,me.fog=ae.fog,me.envMap=(N.isMeshStandardMaterial?T:v).get(N.envMap||me.environment),me.envMapRotation=me.environment!==null&&N.envMap===null?ae.environmentRotation:N.envMapRotation,z===void 0&&(N.addEventListener("dispose",dt),z=new Map,me.programs=z);let U=z.get(R);if(U!==void 0){if(me.currentProgram===U&&me.lightsStateVersion===D)return ma(N,I),U}else I.uniforms=Q.getUniforms(N),N.onBeforeCompile(I,M),U=Q.acquireProgram(I,R),z.set(R,U),me.uniforms=I.uniforms;const k=me.uniforms;return(!N.isShaderMaterial&&!N.isRawShaderMaterial||N.clipping===!0)&&(k.clippingPlanes=oe.uniform),ma(N,I),me.needsLights=rr(N),me.lightsStateVersion=D,me.needsLights&&(k.ambientLightColor.value=y.state.ambient,k.lightProbe.value=y.state.probe,k.directionalLights.value=y.state.directional,k.directionalLightShadows.value=y.state.directionalShadow,k.spotLights.value=y.state.spot,k.spotLightShadows.value=y.state.spotShadow,k.rectAreaLights.value=y.state.rectArea,k.ltc_1.value=y.state.rectAreaLTC1,k.ltc_2.value=y.state.rectAreaLTC2,k.pointLights.value=y.state.point,k.pointLightShadows.value=y.state.pointShadow,k.hemisphereLights.value=y.state.hemi,k.directionalShadowMap.value=y.state.directionalShadowMap,k.directionalShadowMatrix.value=y.state.directionalShadowMatrix,k.spotShadowMap.value=y.state.spotShadowMap,k.spotLightMatrix.value=y.state.spotLightMatrix,k.spotLightMap.value=y.state.spotLightMap,k.pointShadowMap.value=y.state.pointShadowMap,k.pointShadowMatrix.value=y.state.pointShadowMatrix),me.currentProgram=U,me.uniformsList=null,U}function Ai(N){if(N.uniformsList===null){const ae=N.currentProgram.getUniforms();N.uniformsList=no.seqWithValue(ae.seq,N.uniforms)}return N.uniformsList}function ma(N,ae){const pe=Se.get(N);pe.outputColorSpace=ae.outputColorSpace,pe.batching=ae.batching,pe.batchingColor=ae.batchingColor,pe.instancing=ae.instancing,pe.instancingColor=ae.instancingColor,pe.instancingMorph=ae.instancingMorph,pe.skinning=ae.skinning,pe.morphTargets=ae.morphTargets,pe.morphNormals=ae.morphNormals,pe.morphColors=ae.morphColors,pe.morphTargetsCount=ae.morphTargetsCount,pe.numClippingPlanes=ae.numClippingPlanes,pe.numIntersection=ae.numClipIntersection,pe.vertexAlphas=ae.vertexAlphas,pe.vertexTangents=ae.vertexTangents,pe.toneMapping=ae.toneMapping}function Ho(N,ae,pe,me,y){ae.isScene!==!0&&(ae=Ce),g.resetTextureUnits();const S=ae.fog,D=me.isMeshStandardMaterial?ae.environment:null,I=B===null?M.outputColorSpace:B.isXRRenderTarget===!0?B.texture.colorSpace:tr,R=(me.isMeshStandardMaterial?T:v).get(me.envMap||D),z=me.vertexColors===!0&&!!pe.attributes.color&&pe.attributes.color.itemSize===4,U=!!pe.attributes.tangent&&(!!me.normalMap||me.anisotropy>0),k=!!pe.morphAttributes.position,$=!!pe.morphAttributes.normal,ce=!!pe.morphAttributes.color;let ie=Yi;me.toneMapped&&(B===null||B.isXRRenderTarget===!0)&&(ie=M.toneMapping);const be=pe.morphAttributes.position||pe.morphAttributes.normal||pe.morphAttributes.color,fe=be!==void 0?be.length:0,J=Se.get(me),Oe=_.state.lights;if(ge===!0&&(we===!0||N!==Y)){const et=N===Y&&me.id===X;oe.setState(me,N,et)}let De=!1;me.version===J.__version?(J.needsLights&&J.lightsStateVersion!==Oe.state.version||J.outputColorSpace!==I||y.isBatchedMesh&&J.batching===!1||!y.isBatchedMesh&&J.batching===!0||y.isBatchedMesh&&J.batchingColor===!0&&y.colorTexture===null||y.isBatchedMesh&&J.batchingColor===!1&&y.colorTexture!==null||y.isInstancedMesh&&J.instancing===!1||!y.isInstancedMesh&&J.instancing===!0||y.isSkinnedMesh&&J.skinning===!1||!y.isSkinnedMesh&&J.skinning===!0||y.isInstancedMesh&&J.instancingColor===!0&&y.instanceColor===null||y.isInstancedMesh&&J.instancingColor===!1&&y.instanceColor!==null||y.isInstancedMesh&&J.instancingMorph===!0&&y.morphTexture===null||y.isInstancedMesh&&J.instancingMorph===!1&&y.morphTexture!==null||J.envMap!==R||me.fog===!0&&J.fog!==S||J.numClippingPlanes!==void 0&&(J.numClippingPlanes!==oe.numPlanes||J.numIntersection!==oe.numIntersection)||J.vertexAlphas!==z||J.vertexTangents!==U||J.morphTargets!==k||J.morphNormals!==$||J.morphColors!==ce||J.toneMapping!==ie||J.morphTargetsCount!==fe)&&(De=!0):(De=!0,J.__version=me.version);let Ee=J.currentProgram;De===!0&&(Ee=wi(me,ae,y));let Ae=!1,Re=!1,Ye=!1;const Xe=Ee.getUniforms(),Qe=J.uniforms;if(le.useProgram(Ee.program)&&(Ae=!0,Re=!0,Ye=!0),me.id!==X&&(X=me.id,Re=!0),Ae||Y!==N){ue.reverseDepthBuffer?(Ie.copy(N.projectionMatrix),Av(Ie),Cv(Ie),Xe.setValue(w,"projectionMatrix",Ie)):Xe.setValue(w,"projectionMatrix",N.projectionMatrix),Xe.setValue(w,"viewMatrix",N.matrixWorldInverse);const et=Xe.map.cameraPosition;et!==void 0&&et.setValue(w,xe.setFromMatrixPosition(N.matrixWorld)),ue.logarithmicDepthBuffer&&Xe.setValue(w,"logDepthBufFC",2/(Math.log(N.far+1)/Math.LN2)),(me.isMeshPhongMaterial||me.isMeshToonMaterial||me.isMeshLambertMaterial||me.isMeshBasicMaterial||me.isMeshStandardMaterial||me.isShaderMaterial)&&Xe.setValue(w,"isOrthographic",N.isOrthographicCamera===!0),Y!==N&&(Y=N,Re=!0,Ye=!0)}if(y.isSkinnedMesh){Xe.setOptional(w,y,"bindMatrix"),Xe.setOptional(w,y,"bindMatrixInverse");const et=y.skeleton;et&&(et.boneTexture===null&&et.computeBoneTexture(),Xe.setValue(w,"boneTexture",et.boneTexture,g))}y.isBatchedMesh&&(Xe.setOptional(w,y,"batchingTexture"),Xe.setValue(w,"batchingTexture",y._matricesTexture,g),Xe.setOptional(w,y,"batchingIdTexture"),Xe.setValue(w,"batchingIdTexture",y._indirectTexture,g),Xe.setOptional(w,y,"batchingColorTexture"),y._colorsTexture!==null&&Xe.setValue(w,"batchingColorTexture",y._colorsTexture,g));const nt=pe.morphAttributes;if((nt.position!==void 0||nt.normal!==void 0||nt.color!==void 0)&&Ue.update(y,pe,Ee),(Re||J.receiveShadow!==y.receiveShadow)&&(J.receiveShadow=y.receiveShadow,Xe.setValue(w,"receiveShadow",y.receiveShadow)),me.isMeshGouraudMaterial&&me.envMap!==null&&(Qe.envMap.value=R,Qe.flipEnvMap.value=R.isCubeTexture&&R.isRenderTargetTexture===!1?-1:1),me.isMeshStandardMaterial&&me.envMap===null&&ae.environment!==null&&(Qe.envMapIntensity.value=ae.environmentIntensity),Re&&(Xe.setValue(w,"toneMappingExposure",M.toneMappingExposure),J.needsLights&&Vo(Qe,Ye),S&&me.fog===!0&&q.refreshFogUniforms(Qe,S),q.refreshMaterialUniforms(Qe,me,de,se,_.state.transmissionRenderTarget[N.id]),no.upload(w,Ai(J),Qe,g)),me.isShaderMaterial&&me.uniformsNeedUpdate===!0&&(no.upload(w,Ai(J),Qe,g),me.uniformsNeedUpdate=!1),me.isSpriteMaterial&&Xe.setValue(w,"center",y.center),Xe.setValue(w,"modelViewMatrix",y.modelViewMatrix),Xe.setValue(w,"normalMatrix",y.normalMatrix),Xe.setValue(w,"modelMatrix",y.matrixWorld),me.isShaderMaterial||me.isRawShaderMaterial){const et=me.uniformsGroups;for(let ot=0,ht=et.length;ot<ht;ot++){const st=et[ot];ee.update(st,Ee),ee.bind(st,Ee)}}return Ee}function Vo(N,ae){N.ambientLightColor.needsUpdate=ae,N.lightProbe.needsUpdate=ae,N.directionalLights.needsUpdate=ae,N.directionalLightShadows.needsUpdate=ae,N.pointLights.needsUpdate=ae,N.pointLightShadows.needsUpdate=ae,N.spotLights.needsUpdate=ae,N.spotLightShadows.needsUpdate=ae,N.rectAreaLights.needsUpdate=ae,N.hemisphereLights.needsUpdate=ae}function rr(N){return N.isMeshLambertMaterial||N.isMeshToonMaterial||N.isMeshPhongMaterial||N.isMeshStandardMaterial||N.isShadowMaterial||N.isShaderMaterial&&N.lights===!0}this.getActiveCubeFace=function(){return G},this.getActiveMipmapLevel=function(){return L},this.getRenderTarget=function(){return B},this.setRenderTargetTextures=function(N,ae,pe){Se.get(N.texture).__webglTexture=ae,Se.get(N.depthTexture).__webglTexture=pe;const me=Se.get(N);me.__hasExternalTextures=!0,me.__autoAllocateDepthBuffer=pe===void 0,me.__autoAllocateDepthBuffer||j.has("WEBGL_multisampled_render_to_texture")===!0&&(me.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(N,ae){const pe=Se.get(N);pe.__webglFramebuffer=ae,pe.__useDefaultFramebuffer=ae===void 0},this.setRenderTarget=function(N,ae=0,pe=0){B=N,G=ae,L=pe;let me=!0,y=null,S=!1,D=!1;if(N){const R=Se.get(N);if(R.__useDefaultFramebuffer!==void 0)le.bindFramebuffer(w.FRAMEBUFFER,null),me=!1;else if(R.__webglFramebuffer===void 0)g.setupRenderTarget(N);else if(R.__hasExternalTextures)g.rebindTextures(N,Se.get(N.texture).__webglTexture,Se.get(N.depthTexture).__webglTexture);else if(N.depthBuffer){const k=N.depthTexture;if(R.__boundDepthTexture!==k){if(k!==null&&Se.has(k)&&(N.width!==k.image.width||N.height!==k.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");g.setupDepthRenderbuffer(N)}}const z=N.texture;(z.isData3DTexture||z.isDataArrayTexture||z.isCompressedArrayTexture)&&(D=!0);const U=Se.get(N).__webglFramebuffer;N.isWebGLCubeRenderTarget?(Array.isArray(U[ae])?y=U[ae][pe]:y=U[ae],S=!0):N.samples>0&&g.useMultisampledRTT(N)===!1?y=Se.get(N).__webglMultisampledFramebuffer:Array.isArray(U)?y=U[pe]:y=U,E.copy(N.viewport),C.copy(N.scissor),V=N.scissorTest}else E.copy(Fe).multiplyScalar(de).floor(),C.copy(ze).multiplyScalar(de).floor(),V=Ze;if(le.bindFramebuffer(w.FRAMEBUFFER,y)&&me&&le.drawBuffers(N,y),le.viewport(E),le.scissor(C),le.setScissorTest(V),S){const R=Se.get(N.texture);w.framebufferTexture2D(w.FRAMEBUFFER,w.COLOR_ATTACHMENT0,w.TEXTURE_CUBE_MAP_POSITIVE_X+ae,R.__webglTexture,pe)}else if(D){const R=Se.get(N.texture),z=ae||0;w.framebufferTextureLayer(w.FRAMEBUFFER,w.COLOR_ATTACHMENT0,R.__webglTexture,pe||0,z)}X=-1},this.readRenderTargetPixels=function(N,ae,pe,me,y,S,D){if(!(N&&N.isWebGLRenderTarget))return;let I=Se.get(N).__webglFramebuffer;if(N.isWebGLCubeRenderTarget&&D!==void 0&&(I=I[D]),I){le.bindFramebuffer(w.FRAMEBUFFER,I);try{const R=N.texture,z=R.format,U=R.type;if(!ue.textureFormatReadable(z)||!ue.textureTypeReadable(U))return;ae>=0&&ae<=N.width-me&&pe>=0&&pe<=N.height-y&&w.readPixels(ae,pe,me,y,qe.convert(z),qe.convert(U),S)}finally{const R=B!==null?Se.get(B).__webglFramebuffer:null;le.bindFramebuffer(w.FRAMEBUFFER,R)}}},this.readRenderTargetPixelsAsync=async function(N,ae,pe,me,y,S,D){if(!(N&&N.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let I=Se.get(N).__webglFramebuffer;if(N.isWebGLCubeRenderTarget&&D!==void 0&&(I=I[D]),I){const R=N.texture,z=R.format,U=R.type;if(!ue.textureFormatReadable(z))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ue.textureTypeReadable(U))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(ae>=0&&ae<=N.width-me&&pe>=0&&pe<=N.height-y){le.bindFramebuffer(w.FRAMEBUFFER,I);const k=w.createBuffer();w.bindBuffer(w.PIXEL_PACK_BUFFER,k),w.bufferData(w.PIXEL_PACK_BUFFER,S.byteLength,w.STREAM_READ),w.readPixels(ae,pe,me,y,qe.convert(z),qe.convert(U),0);const $=B!==null?Se.get(B).__webglFramebuffer:null;le.bindFramebuffer(w.FRAMEBUFFER,$);const ce=w.fenceSync(w.SYNC_GPU_COMMANDS_COMPLETE,0);return w.flush(),await wv(w,ce,4),w.bindBuffer(w.PIXEL_PACK_BUFFER,k),w.getBufferSubData(w.PIXEL_PACK_BUFFER,0,S),w.deleteBuffer(k),w.deleteSync(ce),S}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(N,ae=null,pe=0){N.isTexture!==!0&&(to("WebGLRenderer: copyFramebufferToTexture function signature has changed."),ae=arguments[0]||null,N=arguments[1]);const me=Math.pow(2,-pe),y=Math.floor(N.image.width*me),S=Math.floor(N.image.height*me),D=ae!==null?ae.x:0,I=ae!==null?ae.y:0;g.setTexture2D(N,0),w.copyTexSubImage2D(w.TEXTURE_2D,pe,0,0,D,I,y,S),le.unbindTexture()},this.copyTextureToTexture=function(N,ae,pe=null,me=null,y=0){N.isTexture!==!0&&(to("WebGLRenderer: copyTextureToTexture function signature has changed."),me=arguments[0]||null,N=arguments[1],ae=arguments[2],y=arguments[3]||0,pe=null);let S,D,I,R,z,U;pe!==null?(S=pe.max.x-pe.min.x,D=pe.max.y-pe.min.y,I=pe.min.x,R=pe.min.y):(S=N.image.width,D=N.image.height,I=0,R=0),me!==null?(z=me.x,U=me.y):(z=0,U=0);const k=qe.convert(ae.format),$=qe.convert(ae.type);g.setTexture2D(ae,0),w.pixelStorei(w.UNPACK_FLIP_Y_WEBGL,ae.flipY),w.pixelStorei(w.UNPACK_PREMULTIPLY_ALPHA_WEBGL,ae.premultiplyAlpha),w.pixelStorei(w.UNPACK_ALIGNMENT,ae.unpackAlignment);const ce=w.getParameter(w.UNPACK_ROW_LENGTH),ie=w.getParameter(w.UNPACK_IMAGE_HEIGHT),be=w.getParameter(w.UNPACK_SKIP_PIXELS),fe=w.getParameter(w.UNPACK_SKIP_ROWS),J=w.getParameter(w.UNPACK_SKIP_IMAGES),Oe=N.isCompressedTexture?N.mipmaps[y]:N.image;w.pixelStorei(w.UNPACK_ROW_LENGTH,Oe.width),w.pixelStorei(w.UNPACK_IMAGE_HEIGHT,Oe.height),w.pixelStorei(w.UNPACK_SKIP_PIXELS,I),w.pixelStorei(w.UNPACK_SKIP_ROWS,R),N.isDataTexture?w.texSubImage2D(w.TEXTURE_2D,y,z,U,S,D,k,$,Oe.data):N.isCompressedTexture?w.compressedTexSubImage2D(w.TEXTURE_2D,y,z,U,Oe.width,Oe.height,k,Oe.data):w.texSubImage2D(w.TEXTURE_2D,y,z,U,S,D,k,$,Oe),w.pixelStorei(w.UNPACK_ROW_LENGTH,ce),w.pixelStorei(w.UNPACK_IMAGE_HEIGHT,ie),w.pixelStorei(w.UNPACK_SKIP_PIXELS,be),w.pixelStorei(w.UNPACK_SKIP_ROWS,fe),w.pixelStorei(w.UNPACK_SKIP_IMAGES,J),y===0&&ae.generateMipmaps&&w.generateMipmap(w.TEXTURE_2D),le.unbindTexture()},this.copyTextureToTexture3D=function(N,ae,pe=null,me=null,y=0){N.isTexture!==!0&&(to("WebGLRenderer: copyTextureToTexture3D function signature has changed."),pe=arguments[0]||null,me=arguments[1]||null,N=arguments[2],ae=arguments[3],y=arguments[4]||0);let S,D,I,R,z,U,k,$,ce;const ie=N.isCompressedTexture?N.mipmaps[y]:N.image;pe!==null?(S=pe.max.x-pe.min.x,D=pe.max.y-pe.min.y,I=pe.max.z-pe.min.z,R=pe.min.x,z=pe.min.y,U=pe.min.z):(S=ie.width,D=ie.height,I=ie.depth,R=0,z=0,U=0),me!==null?(k=me.x,$=me.y,ce=me.z):(k=0,$=0,ce=0);const be=qe.convert(ae.format),fe=qe.convert(ae.type);let J;if(ae.isData3DTexture)g.setTexture3D(ae,0),J=w.TEXTURE_3D;else if(ae.isDataArrayTexture||ae.isCompressedArrayTexture)g.setTexture2DArray(ae,0),J=w.TEXTURE_2D_ARRAY;else return;w.pixelStorei(w.UNPACK_FLIP_Y_WEBGL,ae.flipY),w.pixelStorei(w.UNPACK_PREMULTIPLY_ALPHA_WEBGL,ae.premultiplyAlpha),w.pixelStorei(w.UNPACK_ALIGNMENT,ae.unpackAlignment);const Oe=w.getParameter(w.UNPACK_ROW_LENGTH),De=w.getParameter(w.UNPACK_IMAGE_HEIGHT),Ee=w.getParameter(w.UNPACK_SKIP_PIXELS),Ae=w.getParameter(w.UNPACK_SKIP_ROWS),Re=w.getParameter(w.UNPACK_SKIP_IMAGES);w.pixelStorei(w.UNPACK_ROW_LENGTH,ie.width),w.pixelStorei(w.UNPACK_IMAGE_HEIGHT,ie.height),w.pixelStorei(w.UNPACK_SKIP_PIXELS,R),w.pixelStorei(w.UNPACK_SKIP_ROWS,z),w.pixelStorei(w.UNPACK_SKIP_IMAGES,U),N.isDataTexture||N.isData3DTexture?w.texSubImage3D(J,y,k,$,ce,S,D,I,be,fe,ie.data):ae.isCompressedArrayTexture?w.compressedTexSubImage3D(J,y,k,$,ce,S,D,I,be,ie.data):w.texSubImage3D(J,y,k,$,ce,S,D,I,be,fe,ie),w.pixelStorei(w.UNPACK_ROW_LENGTH,Oe),w.pixelStorei(w.UNPACK_IMAGE_HEIGHT,De),w.pixelStorei(w.UNPACK_SKIP_PIXELS,Ee),w.pixelStorei(w.UNPACK_SKIP_ROWS,Ae),w.pixelStorei(w.UNPACK_SKIP_IMAGES,Re),y===0&&ae.generateMipmaps&&w.generateMipmap(J),le.unbindTexture()},this.initRenderTarget=function(N){Se.get(N).__webglFramebuffer===void 0&&g.setupRenderTarget(N)},this.initTexture=function(N){N.isCubeTexture?g.setTextureCube(N,0):N.isData3DTexture?g.setTexture3D(N,0):N.isDataArrayTexture||N.isCompressedArrayTexture?g.setTexture2DArray(N,0):g.setTexture2D(N,0),le.unbindTexture()},this.resetState=function(){G=0,L=0,B=null,le.reset(),rt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return vi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=e===Tu?"display-p3":"srgb",n.unpackColorSpace=xt.workingColorSpace===Lo?"display-p3":"srgb"}}class Yp extends gn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new bi,this.environmentIntensity=1,this.environmentRotation=new bi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}class Il extends vn{constructor(e,n,i,r=1){super(e,n,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}class yh extends $t{constructor(e,n,i,r,s,a,o,l,u){super(e,n,i,r,s,a,o,l,u),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Bb extends ei{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}const Sh={enabled:!1,files:{},add:function(t,e){this.enabled!==!1&&(this.files[t]=e)},get:function(t){if(this.enabled!==!1)return this.files[t]},remove:function(t){delete this.files[t]},clear:function(){this.files={}}};class kb{constructor(e,n,i){const r=this;let s=!1,a=0,o=0,l;const u=[];this.onStart=void 0,this.onLoad=e,this.onProgress=n,this.onError=i,this.itemStart=function(f){o++,s===!1&&r.onStart!==void 0&&r.onStart(f,a,o),s=!0},this.itemEnd=function(f){a++,r.onProgress!==void 0&&r.onProgress(f,a,o),a===o&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(f){r.onError!==void 0&&r.onError(f)},this.resolveURL=function(f){return l?l(f):f},this.setURLModifier=function(f){return l=f,this},this.addHandler=function(f,d){return u.push(f,d),this},this.removeHandler=function(f){const d=u.indexOf(f);return d!==-1&&u.splice(d,2),this},this.getHandler=function(f){for(let d=0,c=u.length;d<c;d+=2){const m=u[d],p=u[d+1];if(m.global&&(m.lastIndex=0),m.test(f))return p}return null}}}const zb=new kb;class Ru{constructor(e){this.manager=e!==void 0?e:zb,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,n){const i=this;return new Promise(function(r,s){i.load(e,r,n,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}Ru.DEFAULT_MATERIAL_NAME="__DEFAULT";class Hb extends Ru{constructor(e){super(e)}load(e,n,i,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,a=Sh.get(e);if(a!==void 0)return s.manager.itemStart(e),setTimeout(function(){n&&n(a),s.manager.itemEnd(e)},0),a;const o=na("img");function l(){f(),Sh.add(e,this),n&&n(this),s.manager.itemEnd(e)}function u(d){f(),r&&r(d),s.manager.itemError(e),s.manager.itemEnd(e)}function f(){o.removeEventListener("load",l,!1),o.removeEventListener("error",u,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",u,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),s.manager.itemStart(e),o.src=e,o}}class Vb extends Ru{constructor(e){super(e)}load(e,n,i,r){const s=new $t,a=new Hb(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){s.image=o,s.needsUpdate=!0,n!==void 0&&n(s)},i,r),s}}class Gb extends nr{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){const e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}}class $p{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Mh(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const n=Mh();e=(n-this.oldTime)/1e3,this.oldTime=n,this.elapsedTime+=e}return e}}function Mh(){return performance.now()}const bh=new Ft;class Wb{constructor(e,n,i=0,r=1/0){this.ray=new Lp(e,n),this.near=i,this.far=r,this.camera=null,this.layers=new wu,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,n){this.ray.set(e,n)}setFromCamera(e,n){n.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(n.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(n).sub(this.ray.origin).normalize(),this.camera=n):n.isOrthographicCamera&&(this.ray.origin.set(e.x,e.y,(n.near+n.far)/(n.near-n.far)).unproject(n),this.ray.direction.set(0,0,-1).transformDirection(n.matrixWorld),this.camera=n)}setFromXRController(e){return bh.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(bh),this}intersectObject(e,n=!0,i=[]){return Hc(e,this,i,n),i.sort(Th),i}intersectObjects(e,n=!0,i=[]){for(let r=0,s=e.length;r<s;r++)Hc(e[r],this,i,n);return i.sort(Th),i}}function Th(t,e){return t.distance-e.distance}function Hc(t,e,n,i){let r=!0;if(t.layers.test(e.layers)&&t.raycast(e,n)===!1&&(r=!1),r===!0&&i===!0){const s=t.children;for(let a=0,o=s.length;a<o;a++)Hc(s[a],e,n,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:gu}}));typeof window<"u"&&(window.__THREE__||(window.__THREE__=gu));/*!
 * VERSION: 2.0.2
 * DATE: 2018-08-27
 * UPDATES AND DOCS AT: http://greensock.com
 *
 * @license Copyright (c) 2008-2018, GreenSock. All rights reserved.
 * This work is subject to the terms at http://greensock.com/standard-license or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 *
 * @author: Jack Doyle, jack@greensock.com
 */var Ut=typeof window<"u"?window:typeof Zc<"u"&&Zc.exports&&typeof global<"u"?global:{},lt=function(t,e){var n=t.document,i=t.GreenSockGlobals=t.GreenSockGlobals||t;if(i.TweenLite)return i.TweenLite;var r=function(g){var v=g.split("."),T=i,P;for(P=0;P<v.length;P++)T[v[P]]=T=T[v[P]]||{};return T},s=r("com.greensock"),a=1e-10,o=function(g){var v=[],T=g.length,P;for(P=0;P!==T;v.push(g[P++]));return v},l=function(){},u=function(){var g=Object.prototype.toString,v=g.call([]);return function(T){return T!=null&&(T instanceof Array||typeof T=="object"&&!!T.push&&g.call(T)===v)}}(),f,d,c,m,p,x={},_=function(g,v,T,P){this.sc=x[g]?x[g].sc:[],x[g]=this,this.gsClass=null,this.func=T;var O=[];this.check=function(F){for(var Q=v.length,q=Q,re,Te,oe,ye;--Q>-1;)(re=x[v[Q]]||new _(v[Q],[])).gsClass?(O[Q]=re.gsClass,q--):F&&re.sc.push(this);if(q===0&&T)for(Te=("com.greensock."+g).split("."),oe=Te.pop(),ye=r(Te.join("."))[oe]=this.gsClass=T.apply(T,O),P&&(i[oe]=ye),Q=0;Q<this.sc.length;Q++)this.sc[Q].check()},this.check(!0)},h=t._gsDefine=function(g,v,T,P){return new _(g,v,T,P)},b=s._class=function(g,v,T){return v=v||function(){},h(g,[],function(){return v},T),v};h.globals=i;var M=[0,0,1,1],A=b("easing.Ease",function(g,v,T,P){this._func=g,this._type=T||0,this._power=P||0,this._params=v?M.concat(v):M},!0),G=A.map={},L=A.register=function(g,v,T,P){for(var O=v.split(","),F=O.length,Q=(T||"easeIn,easeOut,easeInOut").split(","),q,re,Te,oe;--F>-1;)for(re=O[F],q=P?b("easing."+re,null,!0):s.easing[re]||{},Te=Q.length;--Te>-1;)oe=Q[Te],G[re+"."+oe]=G[oe+re]=q[oe]=g.getRatio?g:g[oe]||new g};for(c=A.prototype,c._calcEnd=!1,c.getRatio=function(g){if(this._func)return this._params[0]=g,this._func.apply(null,this._params);var v=this._type,T=this._power,P=v===1?1-g:v===2?g:g<.5?g*2:(1-g)*2;return T===1?P*=P:T===2?P*=P*P:T===3?P*=P*P*P:T===4&&(P*=P*P*P*P),v===1?1-P:v===2?P:g<.5?P/2:1-P/2},f=["Linear","Quad","Cubic","Quart","Quint,Strong"],d=f.length;--d>-1;)c=f[d]+",Power"+d,L(new A(null,null,1,d),c,"easeOut",!0),L(new A(null,null,2,d),c,"easeIn"+(d===0?",easeNone":"")),L(new A(null,null,3,d),c,"easeInOut");G.linear=s.easing.Linear.easeIn,G.swing=s.easing.Quad.easeInOut;var B=b("events.EventDispatcher",function(g){this._listeners={},this._eventTarget=g||this});c=B.prototype,c.addEventListener=function(g,v,T,P,O){O=O||0;var F=this._listeners[g],Q=0,q,re;for(this===m&&!p&&m.wake(),F==null&&(this._listeners[g]=F=[]),re=F.length;--re>-1;)q=F[re],q.c===v&&q.s===T?F.splice(re,1):Q===0&&q.pr<O&&(Q=re+1);F.splice(Q,0,{c:v,s:T,up:P,pr:O})},c.removeEventListener=function(g,v){var T=this._listeners[g],P;if(T){for(P=T.length;--P>-1;)if(T[P].c===v){T.splice(P,1);return}}},c.dispatchEvent=function(g){var v=this._listeners[g],T,P,O;if(v)for(T=v.length,T>1&&(v=v.slice(0)),P=this._eventTarget;--T>-1;)O=v[T],O&&(O.up?O.c.call(O.s||P,{type:g,target:P}):O.c.call(O.s||P))};var X=t.requestAnimationFrame,Y=t.cancelAnimationFrame,E=Date.now||function(){return new Date().getTime()},C=E();for(f=["ms","moz","webkit","o"],d=f.length;--d>-1&&!X;)X=t[f[d]+"RequestAnimationFrame"],Y=t[f[d]+"CancelAnimationFrame"]||t[f[d]+"CancelRequestAnimationFrame"];b("Ticker",function(g,v){var T=this,P=E(),O=v!==!1&&X?"auto":!1,F=500,Q=33,q="tick",re,Te,oe,ye,Be,Ue=function(Ne){var $e=E()-C,qe,rt;$e>F&&(P+=$e-Q),C+=$e,T.time=(C-P)/1e3,qe=T.time-Be,(!re||qe>0||Ne===!0)&&(T.frame++,Be+=qe+(qe>=ye?.004:ye-qe),rt=!0),Ne!==!0&&(oe=Te(Ue)),rt&&T.dispatchEvent(q)};B.call(T),T.time=T.frame=0,T.tick=function(){Ue(!0)},T.lagSmoothing=function(Ne,$e){if(!arguments.length)return F<1/a;F=Ne||1/a,Q=Math.min($e,F,0)},T.sleep=function(){oe!=null&&(!O||!Y?clearTimeout(oe):Y(oe),Te=l,oe=null,T===m&&(p=!1))},T.wake=function(Ne){oe!==null?T.sleep():Ne?P+=-C+(C=E()):T.frame>10&&(C=E()-F+5),Te=re===0?l:!O||!X?function($e){return setTimeout($e,(Be-T.time)*1e3+1|0)}:X,T===m&&(p=!0),Ue(2)},T.fps=function(Ne){if(!arguments.length)return re;re=Ne,ye=1/(re||60),Be=this.time+ye,T.wake()},T.useRAF=function(Ne){if(!arguments.length)return O;T.sleep(),O=Ne,T.fps(re)},T.fps(g),setTimeout(function(){O==="auto"&&T.frame<5&&(n||{}).visibilityState!=="hidden"&&T.useRAF(!1)},1500)}),c=s.Ticker.prototype=new s.events.EventDispatcher,c.constructor=s.Ticker;var V=b("core.Animation",function(g,v){if(this.vars=v=v||{},this._duration=this._totalDuration=g||0,this._delay=Number(v.delay)||0,this._timeScale=1,this._active=v.immediateRender===!0,this.data=v.data,this._reversed=v.reversed===!0,!!He){p||m.wake();var T=this.vars.useFrames?Ve:He;T.add(this,T._time),this.vars.paused&&this.paused(!0)}});m=V.ticker=new s.Ticker,c=V.prototype,c._dirty=c._gc=c._initted=c._paused=!1,c._totalTime=c._time=0,c._rawPrevTime=-1,c._next=c._last=c._onUpdate=c._timeline=c.timeline=null,c._paused=!1;var W=function(){p&&E()-C>2e3&&((n||{}).visibilityState!=="hidden"||!m.lagSmoothing())&&m.wake();var g=setTimeout(W,2e3);g.unref&&g.unref()};W(),c.play=function(g,v){return g!=null&&this.seek(g,v),this.reversed(!1).paused(!1)},c.pause=function(g,v){return g!=null&&this.seek(g,v),this.paused(!0)},c.resume=function(g,v){return g!=null&&this.seek(g,v),this.paused(!1)},c.seek=function(g,v){return this.totalTime(Number(g),v!==!1)},c.restart=function(g,v){return this.reversed(!1).paused(!1).totalTime(g?-this._delay:0,v!==!1,!0)},c.reverse=function(g,v){return g!=null&&this.seek(g||this.totalDuration(),v),this.reversed(!0).paused(!1)},c.render=function(g,v,T){},c.invalidate=function(){return this._time=this._totalTime=0,this._initted=this._gc=!1,this._rawPrevTime=-1,(this._gc||!this.timeline)&&this._enabled(!0),this},c.isActive=function(){var g=this._timeline,v=this._startTime,T;return!g||!this._gc&&!this._paused&&g.isActive()&&(T=g.rawTime(!0))>=v&&T<v+this.totalDuration()/this._timeScale-1e-7},c._enabled=function(g,v){return p||m.wake(),this._gc=!g,this._active=this.isActive(),v!==!0&&(g&&!this.timeline?this._timeline.add(this,this._startTime-this._delay):!g&&this.timeline&&this._timeline._remove(this,!0)),!1},c._kill=function(g,v){return this._enabled(!1,!1)},c.kill=function(g,v){return this._kill(g,v),this},c._uncache=function(g){for(var v=g?this:this.timeline;v;)v._dirty=!0,v=v.timeline;return this},c._swapSelfInParams=function(g){for(var v=g.length,T=g.concat();--v>-1;)g[v]==="{self}"&&(T[v]=this);return T},c._callback=function(g){var v=this.vars,T=v[g],P=v[g+"Params"],O=v[g+"Scope"]||v.callbackScope||this,F=P?P.length:0;switch(F){case 0:T.call(O);break;case 1:T.call(O,P[0]);break;case 2:T.call(O,P[0],P[1]);break;default:T.apply(O,P)}},c.eventCallback=function(g,v,T,P){if((g||"").substr(0,2)==="on"){var O=this.vars;if(arguments.length===1)return O[g];v==null?delete O[g]:(O[g]=v,O[g+"Params"]=u(T)&&T.join("").indexOf("{self}")!==-1?this._swapSelfInParams(T):T,O[g+"Scope"]=P),g==="onUpdate"&&(this._onUpdate=v)}return this},c.delay=function(g){return arguments.length?(this._timeline.smoothChildTiming&&this.startTime(this._startTime+g-this._delay),this._delay=g,this):this._delay},c.duration=function(g){return arguments.length?(this._duration=this._totalDuration=g,this._uncache(!0),this._timeline.smoothChildTiming&&this._time>0&&this._time<this._duration&&g!==0&&this.totalTime(this._totalTime*(g/this._duration),!0),this):(this._dirty=!1,this._duration)},c.totalDuration=function(g){return this._dirty=!1,arguments.length?this.duration(g):this._totalDuration},c.time=function(g,v){return arguments.length?(this._dirty&&this.totalDuration(),this.totalTime(g>this._duration?this._duration:g,v)):this._time},c.totalTime=function(g,v,T){if(p||m.wake(),!arguments.length)return this._totalTime;if(this._timeline){if(g<0&&!T&&(g+=this.totalDuration()),this._timeline.smoothChildTiming){this._dirty&&this.totalDuration();var P=this._totalDuration,O=this._timeline;if(g>P&&!T&&(g=P),this._startTime=(this._paused?this._pauseTime:O._time)-(this._reversed?P-g:g)/this._timeScale,O._dirty||this._uncache(!1),O._timeline)for(;O._timeline;)O._timeline._time!==(O._startTime+O._totalTime)/O._timeScale&&O.totalTime(O._totalTime,!0),O=O._timeline}this._gc&&this._enabled(!0,!1),(this._totalTime!==g||this._duration===0)&&(te.length&&H(),this.render(g,v,!1),te.length&&H())}return this},c.progress=c.totalProgress=function(g,v){var T=this.duration();return arguments.length?this.totalTime(T*g,v):T?this._time/T:this.ratio},c.startTime=function(g){return arguments.length?(g!==this._startTime&&(this._startTime=g,this.timeline&&this.timeline._sortChildren&&this.timeline.add(this,g-this._delay)),this):this._startTime},c.endTime=function(g){return this._startTime+(g!=!1?this.totalDuration():this.duration())/this._timeScale},c.timeScale=function(g){if(!arguments.length)return this._timeScale;var v,T;for(g=g||a,this._timeline&&this._timeline.smoothChildTiming&&(v=this._pauseTime,T=v||v===0?v:this._timeline.totalTime(),this._startTime=T-(T-this._startTime)*this._timeScale/g),this._timeScale=g,T=this.timeline;T&&T.timeline;)T._dirty=!0,T.totalDuration(),T=T.timeline;return this},c.reversed=function(g){return arguments.length?(g!=this._reversed&&(this._reversed=g,this.totalTime(this._timeline&&!this._timeline.smoothChildTiming?this.totalDuration()-this._totalTime:this._totalTime,!0)),this):this._reversed},c.paused=function(g){if(!arguments.length)return this._paused;var v=this._timeline,T,P;return g!=this._paused&&v&&(!p&&!g&&m.wake(),T=v.rawTime(),P=T-this._pauseTime,!g&&v.smoothChildTiming&&(this._startTime+=P,this._uncache(!1)),this._pauseTime=g?T:null,this._paused=g,this._active=this.isActive(),!g&&P!==0&&this._initted&&this.duration()&&(T=v.smoothChildTiming?this._totalTime:(T-this._startTime)/this._timeScale,this.render(T,T===this._totalTime,!0))),this._gc&&!g&&this._enabled(!0,!1),this};var Z=b("core.SimpleTimeline",function(g){V.call(this,0,g),this.autoRemoveChildren=this.smoothChildTiming=!0});c=Z.prototype=new V,c.constructor=Z,c.kill()._gc=!1,c._first=c._last=c._recent=null,c._sortChildren=!1,c.add=c.insert=function(g,v,T,P){var O,F;if(g._startTime=Number(v||0)+g._delay,g._paused&&this!==g._timeline&&(g._pauseTime=this.rawTime()-(g._timeline.rawTime()-g._pauseTime)),g.timeline&&g.timeline._remove(g,!0),g.timeline=g._timeline=this,g._gc&&g._enabled(!0,!0),O=this._last,this._sortChildren)for(F=g._startTime;O&&O._startTime>F;)O=O._prev;return O?(g._next=O._next,O._next=g):(g._next=this._first,this._first=g),g._next?g._next._prev=g:this._last=g,g._prev=O,this._recent=g,this._timeline&&this._uncache(!0),this},c._remove=function(g,v){return g.timeline===this&&(v||g._enabled(!1,!0),g._prev?g._prev._next=g._next:this._first===g&&(this._first=g._next),g._next?g._next._prev=g._prev:this._last===g&&(this._last=g._prev),g._next=g._prev=g.timeline=null,g===this._recent&&(this._recent=this._last),this._timeline&&this._uncache(!0)),this},c.render=function(g,v,T){var P=this._first,O;for(this._totalTime=this._time=this._rawPrevTime=g;P;)O=P._next,(P._active||g>=P._startTime&&!P._paused&&!P._gc)&&(P._reversed?P.render((P._dirty?P.totalDuration():P._totalDuration)-(g-P._startTime)*P._timeScale,v,T):P.render((g-P._startTime)*P._timeScale,v,T)),P=O},c.rawTime=function(){return p||m.wake(),this._totalTime};var ne=b("TweenLite",function(g,v,T){if(V.call(this,v,T),this.render=ne.prototype.render,g==null)throw"Cannot tween a null target.";this.target=g=typeof g!="string"?g:ne.selector(g)||g;var P=g.jquery||g.length&&g!==t&&g[0]&&(g[0]===t||g[0].nodeType&&g[0].style&&!g.nodeType),O=this.vars.overwrite,F,Q,q;if(this._overwrite=O=O==null?Ce[ne.defaultOverwrite]:typeof O=="number"?O>>0:Ce[O],(P||g instanceof Array||g.push&&u(g))&&typeof g[0]!="number")for(this._targets=q=o(g),this._propLookup=[],this._siblings=[],F=0;F<q.length;F++){if(Q=q[F],Q){if(typeof Q=="string"){Q=q[F--]=ne.selector(Q),typeof Q=="string"&&q.splice(F+1,1);continue}else if(Q.length&&Q!==t&&Q[0]&&(Q[0]===t||Q[0].nodeType&&Q[0].style&&!Q.nodeType)){q.splice(F--,1),this._targets=q=q.concat(o(Q));continue}}else{q.splice(F--,1);continue}this._siblings[F]=j(Q,this,!1),O===1&&this._siblings[F].length>1&&le(Q,this,null,1,this._siblings[F])}else this._propLookup={},this._siblings=j(g,this,!1),O===1&&this._siblings.length>1&&le(g,this,null,1,this._siblings);(this.vars.immediateRender||v===0&&this._delay===0&&this.vars.immediateRender!==!1)&&(this._time=-a,this.render(Math.min(0,-this._delay)))},!0),se=function(g){return g&&g.length&&g!==t&&g[0]&&(g[0]===t||g[0].nodeType&&g[0].style&&!g.nodeType)},de=function(g,v){var T={},P;for(P in g)!_e[P]&&(!(P in v)||P==="transform"||P==="x"||P==="y"||P==="width"||P==="height"||P==="className"||P==="border")&&(!Ie[P]||Ie[P]&&Ie[P]._autoCSS)&&(T[P]=g[P],delete g[P]);g.css=T};c=ne.prototype=new V,c.constructor=ne,c.kill()._gc=!1,c.ratio=0,c._firstPT=c._targets=c._overwrittenProps=c._startAt=null,c._notifyPluginsOfEnabled=c._lazy=!1,ne.version="2.0.2",ne.defaultEase=c._ease=new A(null,null,1,1),ne.defaultOverwrite="auto",ne.ticker=m,ne.autoSleep=120,ne.lagSmoothing=function(g,v){m.lagSmoothing(g,v)},ne.selector=t.$||t.jQuery||function(g){var v=t.$||t.jQuery;return v?(ne.selector=v,v(g)):(n||(n=t.document),n?n.querySelectorAll?n.querySelectorAll(g):n.getElementById(g.charAt(0)==="#"?g.substr(1):g):g)};var te=[],Le={},Fe=/(?:(-|-=|\+=)?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/ig,ze=/[\+-]=-?[\.\d]/,Ze=function(g){for(var v=this._firstPT,T=1e-6,P;v;)P=v.blob?g===1&&this.end!=null?this.end:g?this.join(""):this.start:v.c*g+v.s,v.m?P=v.m.call(this._tween,P,this._target||v.t,this._tween):P<T&&P>-T&&!v.blob&&(P=0),v.f?v.fp?v.t[v.p](v.fp,P):v.t[v.p](P):v.t[v.p]=P,v=v._next},Je=function(g,v,T,P){var O=[],F=0,Q="",q=0,re,Te,oe,ye,Be,Ue,Ne;for(O.start=g,O.end=v,g=O[0]=g+"",v=O[1]=v+"",T&&(T(O),g=O[0],v=O[1]),O.length=0,re=g.match(Fe)||[],Te=v.match(Fe)||[],P&&(P._next=null,P.blob=1,O._firstPT=O._applyPT=P),Be=Te.length,ye=0;ye<Be;ye++)Ne=Te[ye],Ue=v.substr(F,v.indexOf(Ne,F)-F),Q+=Ue||!ye?Ue:",",F+=Ue.length,q?q=(q+1)%5:Ue.substr(-5)==="rgba("&&(q=1),Ne===re[ye]||re.length<=ye?Q+=Ne:(Q&&(O.push(Q),Q=""),oe=parseFloat(re[ye]),O.push(oe),O._firstPT={_next:O._firstPT,t:O,p:O.length-1,s:oe,c:(Ne.charAt(1)==="="?parseInt(Ne.charAt(0)+"1",10)*parseFloat(Ne.substr(2)):parseFloat(Ne)-oe)||0,f:0,m:q&&q<4?Math.round:0}),F+=Ne.length;return Q+=v.substr(F),Q&&O.push(Q),O.setRatio=Ze,ze.test(v)&&(O.end=null),O},ge=function(g,v,T,P,O,F,Q,q,re){typeof P=="function"&&(P=P(re||0,g));var Te=typeof g[v],oe=Te!=="function"?"":v.indexOf("set")||typeof g["get"+v.substr(3)]!="function"?v:"get"+v.substr(3),ye=T!=="get"?T:oe?Q?g[oe](Q):g[oe]():g[v],Be=typeof P=="string"&&P.charAt(1)==="=",Ue={t:g,p:v,s:ye,f:Te==="function",pg:0,n:O||v,m:F?typeof F=="function"?F:Math.round:0,pr:0,c:Be?parseInt(P.charAt(0)+"1",10)*parseFloat(P.substr(2)):parseFloat(P)-ye||0},Ne;if((typeof ye!="number"||typeof P!="number"&&!Be)&&(Q||isNaN(ye)||!Be&&isNaN(P)||typeof ye=="boolean"||typeof P=="boolean"?(Ue.fp=Q,Ne=Je(ye,Be?parseFloat(Ue.s)+Ue.c+(Ue.s+"").replace(/[0-9\-\.]/g,""):P,q||ne.defaultStringFilter,Ue),Ue={t:Ne,p:"setRatio",s:0,c:1,f:2,pg:0,n:O||v,pr:0,m:0}):(Ue.s=parseFloat(ye),Be||(Ue.c=parseFloat(P)-Ue.s||0))),Ue.c)return(Ue._next=this._firstPT)&&(Ue._next._prev=Ue),this._firstPT=Ue,Ue},we=ne._internals={isArray:u,isSelector:se,lazyTweens:te,blobDif:Je},Ie=ne._plugins={},K=we.tweenLookup={},xe=0,_e=we.reservedProps={ease:1,delay:1,overwrite:1,onComplete:1,onCompleteParams:1,onCompleteScope:1,useFrames:1,runBackwards:1,startAt:1,onUpdate:1,onUpdateParams:1,onUpdateScope:1,onStart:1,onStartParams:1,onStartScope:1,onReverseComplete:1,onReverseCompleteParams:1,onReverseCompleteScope:1,onRepeat:1,onRepeatParams:1,onRepeatScope:1,easeParams:1,yoyo:1,immediateRender:1,repeat:1,repeatDelay:1,data:1,paused:1,reversed:1,autoCSS:1,lazy:1,onOverwrite:1,callbackScope:1,stringFilter:1,id:1,yoyoEase:1},Ce={none:0,all:1,auto:2,concurrent:3,allOnStart:4,preexisting:5,true:1,false:0},Ve=V._rootFramesTimeline=new Z,He=V._rootTimeline=new Z,w=30,H=we.lazyRender=function(){var g=te.length,v;for(Le={};--g>-1;)v=te[g],v&&v._lazy!==!1&&(v.render(v._lazy[0],v._lazy[1],!0),v._lazy=!1);te.length=0};He._startTime=m.time,Ve._startTime=m.frame,He._active=Ve._active=!0,setTimeout(H,1),V._updateRoot=ne.render=function(){var g,v,T;if(te.length&&H(),He.render((m.time-He._startTime)*He._timeScale,!1,!1),Ve.render((m.frame-Ve._startTime)*Ve._timeScale,!1,!1),te.length&&H(),m.frame>=w){w=m.frame+(parseInt(ne.autoSleep,10)||120);for(T in K){for(v=K[T].tweens,g=v.length;--g>-1;)v[g]._gc&&v.splice(g,1);v.length===0&&delete K[T]}if(T=He._first,(!T||T._paused)&&ne.autoSleep&&!Ve._first&&m._listeners.tick.length===1){for(;T&&T._paused;)T=T._next;T||m.sleep()}}},m.addEventListener("tick",V._updateRoot);var j=function(g,v,T){var P=g._gsTweenID,O,F;if(K[P||(g._gsTweenID=P="t"+xe++)]||(K[P]={target:g,tweens:[]}),v&&(O=K[P].tweens,O[F=O.length]=v,T))for(;--F>-1;)O[F]===v&&O.splice(F,1);return K[P].tweens},ue=function(g,v,T,P){var O=g.vars.onOverwrite,F,Q;return O&&(F=O(g,v,T,P)),O=ne.onOverwrite,O&&(Q=O(g,v,T,P)),F!==!1&&Q!==!1},le=function(g,v,T,P,O){var F,Q,q,re;if(P===1||P>=4){for(re=O.length,F=0;F<re;F++)if((q=O[F])!==v)q._gc||q._kill(null,g,v)&&(Q=!0);else if(P===5)break;return Q}var Te=v._startTime+a,oe=[],ye=0,Be=v._duration===0,Ue;for(F=O.length;--F>-1;)(q=O[F])===v||q._gc||q._paused||(q._timeline!==v._timeline?(Ue=Ue||Me(v,0,Be),Me(q,Ue,Be)===0&&(oe[ye++]=q)):q._startTime<=Te&&q._startTime+q.totalDuration()/q._timeScale>Te&&((Be||!q._initted)&&Te-q._startTime<=2e-10||(oe[ye++]=q)));for(F=ye;--F>-1;)if(q=oe[F],re=q._firstPT,P===2&&q._kill(T,g,v)&&(Q=!0),P!==2||!q._firstPT&&q._initted&&re){if(P!==2&&!ue(q,v))continue;q._enabled(!1,!1)&&(Q=!0)}return Q},Me=function(g,v,T){for(var P=g._timeline,O=P._timeScale,F=g._startTime;P._timeline;){if(F+=P._startTime,O*=P._timeScale,P._paused)return-100;P=P._timeline}return F/=O,F>v?F-v:T&&F===v||!g._initted&&F-v<2*a?a:(F+=g.totalDuration()/g._timeScale/O)>v+a?0:F-v-a};c._init=function(){var g=this.vars,v=this._overwrittenProps,T=this._duration,P=!!g.immediateRender,O=g.ease,F,Q,q,re,Te,oe;if(g.startAt){this._startAt&&(this._startAt.render(-1,!0),this._startAt.kill()),Te={};for(re in g.startAt)Te[re]=g.startAt[re];if(Te.data="isStart",Te.overwrite=!1,Te.immediateRender=!0,Te.lazy=P&&g.lazy!==!1,Te.startAt=Te.delay=null,Te.onUpdate=g.onUpdate,Te.onUpdateParams=g.onUpdateParams,Te.onUpdateScope=g.onUpdateScope||g.callbackScope||this,this._startAt=ne.to(this.target||{},0,Te),P){if(this._time>0)this._startAt=null;else if(T!==0)return}}else if(g.runBackwards&&T!==0)if(this._startAt)this._startAt.render(-1,!0),this._startAt.kill(),this._startAt=null;else{this._time!==0&&(P=!1),q={};for(re in g)(!_e[re]||re==="autoCSS")&&(q[re]=g[re]);if(q.overwrite=0,q.data="isFromStart",q.lazy=P&&g.lazy!==!1,q.immediateRender=P,this._startAt=ne.to(this.target,0,q),!P)this._startAt._init(),this._startAt._enabled(!1),this.vars.immediateRender&&(this._startAt=null);else if(this._time===0)return}if(this._ease=O=O?O instanceof A?O:typeof O=="function"?new A(O,g.easeParams):G[O]||ne.defaultEase:ne.defaultEase,g.easeParams instanceof Array&&O.config&&(this._ease=O.config.apply(O,g.easeParams)),this._easeType=this._ease._type,this._easePower=this._ease._power,this._firstPT=null,this._targets)for(oe=this._targets.length,F=0;F<oe;F++)this._initProps(this._targets[F],this._propLookup[F]={},this._siblings[F],v?v[F]:null,F)&&(Q=!0);else Q=this._initProps(this.target,this._propLookup,this._siblings,v,0);if(Q&&ne._onPluginEvent("_onInitAllProps",this),v&&(this._firstPT||typeof this.target!="function"&&this._enabled(!1,!1)),g.runBackwards)for(q=this._firstPT;q;)q.s+=q.c,q.c=-q.c,q=q._next;this._onUpdate=g.onUpdate,this._initted=!0},c._initProps=function(g,v,T,P,O){var F,Q,q,re,Te,oe;if(g==null)return!1;Le[g._gsTweenID]&&H(),this.vars.css||g.style&&g!==t&&g.nodeType&&Ie.css&&this.vars.autoCSS!==!1&&de(this.vars,g);for(F in this.vars)if(oe=this.vars[F],_e[F])oe&&(oe instanceof Array||oe.push&&u(oe))&&oe.join("").indexOf("{self}")!==-1&&(this.vars[F]=oe=this._swapSelfInParams(oe,this));else if(Ie[F]&&(re=new Ie[F])._onInitTween(g,this.vars[F],this,O)){for(this._firstPT=Te={_next:this._firstPT,t:re,p:"setRatio",s:0,c:1,f:1,n:F,pg:1,pr:re._priority,m:0},Q=re._overwriteProps.length;--Q>-1;)v[re._overwriteProps[Q]]=this._firstPT;(re._priority||re._onInitAllProps)&&(q=!0),(re._onDisable||re._onEnable)&&(this._notifyPluginsOfEnabled=!0),Te._next&&(Te._next._prev=Te)}else v[F]=ge.call(this,g,F,"get",oe,F,0,null,this.vars.stringFilter,O);return P&&this._kill(P,g)?this._initProps(g,v,T,P,O):this._overwrite>1&&this._firstPT&&T.length>1&&le(g,this,v,this._overwrite,T)?(this._kill(v,g),this._initProps(g,v,T,P,O)):(this._firstPT&&(this.vars.lazy!==!1&&this._duration||this.vars.lazy&&!this._duration)&&(Le[g._gsTweenID]=!0),q)},c.render=function(g,v,T){var P=this._time,O=this._duration,F=this._rawPrevTime,Q,q,re,Te;if(g>=O-1e-7&&g>=0)this._totalTime=this._time=O,this.ratio=this._ease._calcEnd?this._ease.getRatio(1):1,this._reversed||(Q=!0,q="onComplete",T=T||this._timeline.autoRemoveChildren),O===0&&(this._initted||!this.vars.lazy||T)&&(this._startTime===this._timeline._duration&&(g=0),(F<0||g<=0&&g>=-1e-7||F===a&&this.data!=="isPause")&&F!==g&&(T=!0,F>a&&(q="onReverseComplete")),this._rawPrevTime=Te=!v||g||F===g?g:a);else if(g<1e-7)this._totalTime=this._time=0,this.ratio=this._ease._calcEnd?this._ease.getRatio(0):0,(P!==0||O===0&&F>0)&&(q="onReverseComplete",Q=this._reversed),g<0&&(this._active=!1,O===0&&(this._initted||!this.vars.lazy||T)&&(F>=0&&!(F===a&&this.data==="isPause")&&(T=!0),this._rawPrevTime=Te=!v||g||F===g?g:a)),(!this._initted||this._startAt&&this._startAt.progress())&&(T=!0);else if(this._totalTime=this._time=g,this._easeType){var oe=g/O,ye=this._easeType,Be=this._easePower;(ye===1||ye===3&&oe>=.5)&&(oe=1-oe),ye===3&&(oe*=2),Be===1?oe*=oe:Be===2?oe*=oe*oe:Be===3?oe*=oe*oe*oe:Be===4&&(oe*=oe*oe*oe*oe),ye===1?this.ratio=1-oe:ye===2?this.ratio=oe:g/O<.5?this.ratio=oe/2:this.ratio=1-oe/2}else this.ratio=this._ease.getRatio(g/O);if(!(this._time===P&&!T)){if(!this._initted){if(this._init(),!this._initted||this._gc)return;if(!T&&this._firstPT&&(this.vars.lazy!==!1&&this._duration||this.vars.lazy&&!this._duration)){this._time=this._totalTime=P,this._rawPrevTime=F,te.push(this),this._lazy=[g,v];return}this._time&&!Q?this.ratio=this._ease.getRatio(this._time/O):Q&&this._ease._calcEnd&&(this.ratio=this._ease.getRatio(this._time===0?0:1))}for(this._lazy!==!1&&(this._lazy=!1),this._active||!this._paused&&this._time!==P&&g>=0&&(this._active=!0),P===0&&(this._startAt&&(g>=0?this._startAt.render(g,!0,T):q||(q="_dummyGS")),this.vars.onStart&&(this._time!==0||O===0)&&(v||this._callback("onStart"))),re=this._firstPT;re;)re.f?re.t[re.p](re.c*this.ratio+re.s):re.t[re.p]=re.c*this.ratio+re.s,re=re._next;this._onUpdate&&(g<0&&this._startAt&&g!==-1e-4&&this._startAt.render(g,!0,T),v||(this._time!==P||Q||T)&&this._callback("onUpdate")),q&&(!this._gc||T)&&(g<0&&this._startAt&&!this._onUpdate&&g!==-1e-4&&this._startAt.render(g,!0,T),Q&&(this._timeline.autoRemoveChildren&&this._enabled(!1,!1),this._active=!1),!v&&this.vars[q]&&this._callback(q),O===0&&this._rawPrevTime===a&&Te!==a&&(this._rawPrevTime=0))}},c._kill=function(g,v,T){if(g==="all"&&(g=null),g==null&&(v==null||v===this.target))return this._lazy=!1,this._enabled(!1,!1);v=typeof v!="string"?v||this._targets||this.target:ne.selector(v)||v;var P=T&&this._time&&T._startTime===this._startTime&&this._timeline===T._timeline,O=this._firstPT,F,Q,q,re,Te,oe,ye,Be,Ue;if((u(v)||se(v))&&typeof v[0]!="number")for(F=v.length;--F>-1;)this._kill(g,v[F],T)&&(oe=!0);else{if(this._targets){for(F=this._targets.length;--F>-1;)if(v===this._targets[F]){Te=this._propLookup[F]||{},this._overwrittenProps=this._overwrittenProps||[],Q=this._overwrittenProps[F]=g?this._overwrittenProps[F]||{}:"all";break}}else{if(v!==this.target)return!1;Te=this._propLookup,Q=this._overwrittenProps=g?this._overwrittenProps||{}:"all"}if(Te){if(ye=g||Te,Be=g!==Q&&Q!=="all"&&g!==Te&&(typeof g!="object"||!g._tempKill),T&&(ne.onOverwrite||this.vars.onOverwrite)){for(q in ye)Te[q]&&(Ue||(Ue=[]),Ue.push(q));if((Ue||!g)&&!ue(this,T,v,Ue))return!1}for(q in ye)(re=Te[q])&&(P&&(re.f?re.t[re.p](re.s):re.t[re.p]=re.s,oe=!0),re.pg&&re.t._kill(ye)&&(oe=!0),(!re.pg||re.t._overwriteProps.length===0)&&(re._prev?re._prev._next=re._next:re===this._firstPT&&(this._firstPT=re._next),re._next&&(re._next._prev=re._prev),re._next=re._prev=null),delete Te[q]),Be&&(Q[q]=1);!this._firstPT&&this._initted&&O&&this._enabled(!1,!1)}}return oe},c.invalidate=function(){return this._notifyPluginsOfEnabled&&ne._onPluginEvent("_onDisable",this),this._firstPT=this._overwrittenProps=this._startAt=this._onUpdate=null,this._notifyPluginsOfEnabled=this._active=this._lazy=!1,this._propLookup=this._targets?{}:[],V.prototype.invalidate.call(this),this.vars.immediateRender&&(this._time=-a,this.render(Math.min(0,-this._delay))),this},c._enabled=function(g,v){if(p||m.wake(),g&&this._gc){var T=this._targets,P;if(T)for(P=T.length;--P>-1;)this._siblings[P]=j(T[P],this,!0);else this._siblings=j(this.target,this,!0)}return V.prototype._enabled.call(this,g,v),this._notifyPluginsOfEnabled&&this._firstPT?ne._onPluginEvent(g?"_onEnable":"_onDisable",this):!1},ne.to=function(g,v,T){return new ne(g,v,T)},ne.from=function(g,v,T){return T.runBackwards=!0,T.immediateRender=T.immediateRender!=!1,new ne(g,v,T)},ne.fromTo=function(g,v,T,P){return P.startAt=T,P.immediateRender=P.immediateRender!=!1&&T.immediateRender!=!1,new ne(g,v,P)},ne.delayedCall=function(g,v,T,P,O){return new ne(v,0,{delay:g,onComplete:v,onCompleteParams:T,callbackScope:P,onReverseComplete:v,onReverseCompleteParams:T,immediateRender:!1,lazy:!1,useFrames:O,overwrite:0})},ne.set=function(g,v){return new ne(g,0,v)},ne.getTweensOf=function(g,v){if(g==null)return[];g=typeof g!="string"?g:ne.selector(g)||g;var T,P,O,F;if((u(g)||se(g))&&typeof g[0]!="number"){for(T=g.length,P=[];--T>-1;)P=P.concat(ne.getTweensOf(g[T],v));for(T=P.length;--T>-1;)for(F=P[T],O=T;--O>-1;)F===P[O]&&P.splice(T,1)}else if(g._gsTweenID)for(P=j(g).concat(),T=P.length;--T>-1;)(P[T]._gc||v&&!P[T].isActive())&&P.splice(T,1);return P||[]},ne.killTweensOf=ne.killDelayedCallsTo=function(g,v,T){typeof v=="object"&&(T=v,v=!1);for(var P=ne.getTweensOf(g,v),O=P.length;--O>-1;)P[O]._kill(T,g)};var Se=b("plugins.TweenPlugin",function(g,v){this._overwriteProps=(g||"").split(","),this._propName=this._overwriteProps[0],this._priority=v||0,this._super=Se.prototype},!0);if(c=Se.prototype,Se.version="1.19.0",Se.API=2,c._firstPT=null,c._addTween=ge,c.setRatio=Ze,c._kill=function(g){var v=this._overwriteProps,T=this._firstPT,P;if(g[this._propName]!=null)this._overwriteProps=[];else for(P=v.length;--P>-1;)g[v[P]]!=null&&v.splice(P,1);for(;T;)g[T.n]!=null&&(T._next&&(T._next._prev=T._prev),T._prev?(T._prev._next=T._next,T._prev=null):this._firstPT===T&&(this._firstPT=T._next)),T=T._next;return!1},c._mod=c._roundProps=function(g){for(var v=this._firstPT,T;v;)T=g[this._propName]||v.n!=null&&g[v.n.split(this._propName+"_").join("")],T&&typeof T=="function"&&(v.f===2?v.t._applyPT.m=T:v.m=T),v=v._next},ne._onPluginEvent=function(g,v){var T=v._firstPT,P,O,F,Q,q;if(g==="_onInitAllProps"){for(;T;){for(q=T._next,O=F;O&&O.pr>T.pr;)O=O._next;(T._prev=O?O._prev:Q)?T._prev._next=T:F=T,(T._next=O)?O._prev=T:Q=T,T=q}T=v._firstPT=F}for(;T;)T.pg&&typeof T.t[g]=="function"&&T.t[g]()&&(P=!0),T=T._next;return P},Se.activate=function(g){for(var v=g.length;--v>-1;)g[v].API===Se.API&&(Ie[new g[v]()._propName]=g[v]);return!0},h.plugin=function(g){if(!g||!g.propName||!g.init||!g.API)throw"illegal plugin definition.";var v=g.propName,T=g.priority||0,P=g.overwriteProps,O={init:"_onInitTween",set:"setRatio",kill:"_kill",round:"_mod",mod:"_mod",initAll:"_onInitAllProps"},F=b("plugins."+v.charAt(0).toUpperCase()+v.substr(1)+"Plugin",function(){Se.call(this,v,T),this._overwriteProps=P||[]},g.global===!0),Q=F.prototype=new Se(v),q;Q.constructor=F,F.API=g.API;for(q in O)typeof g[q]=="function"&&(Q[O[q]]=g[q]);return F.version=g.version,Se.activate([F]),F},f=t._gsQueue,f){for(d=0;d<f.length;d++)f[d]();for(c in x)x[c].func||t.console.log("GSAP encountered missing dependency: "+c)}return p=!1,ne}(Ut),Ot=Ut.GreenSockGlobals,Pu=Ot.com.greensock,Mr=Pu.core.SimpleTimeline,en=Pu.core.Animation,tn=Ot.Ease;Ot.Linear;Ot.Power1;Ot.Power2;Ot.Power3;Ot.Power4;var Va=Ot.TweenPlugin;Pu.events.EventDispatcher;/*!
 * VERSION: 2.0.2
 * DATE: 2018-08-27
 * UPDATES AND DOCS AT: http://greensock.com
 *
 * @license Copyright (c) 2008-2018, GreenSock. All rights reserved.
 * This work is subject to the terms at http://greensock.com/standard-license or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 * 
 * @author: Jack Doyle, jack@greensock.com
 **/Ut._gsDefine("TweenMax",["core.Animation","core.SimpleTimeline","TweenLite"],function(){var t=function(c){var m=[],p=c.length,x;for(x=0;x!==p;m.push(c[x++]));return m},e=function(c,m,p){var x=c.cycle,_,h;for(_ in x)h=x[_],c[_]=typeof h=="function"?h(p,m[p]):h[p%h.length];delete c.cycle},n=function(c,m,p){lt.call(this,c,m,p),this._cycle=0,this._yoyo=this.vars.yoyo===!0||!!this.vars.yoyoEase,this._repeat=this.vars.repeat||0,this._repeatDelay=this.vars.repeatDelay||0,this._repeat&&this._uncache(!0),this.render=n.prototype.render},i=1e-10,r=lt._internals,s=r.isSelector,a=r.isArray,o=n.prototype=lt.to({},.1,{}),l=[];n.version="2.0.2",o.constructor=n,o.kill()._gc=!1,n.killTweensOf=n.killDelayedCallsTo=lt.killTweensOf,n.getTweensOf=lt.getTweensOf,n.lagSmoothing=lt.lagSmoothing,n.ticker=lt.ticker,n.render=lt.render,o.invalidate=function(){return this._yoyo=this.vars.yoyo===!0||!!this.vars.yoyoEase,this._repeat=this.vars.repeat||0,this._repeatDelay=this.vars.repeatDelay||0,this._yoyoEase=null,this._uncache(!0),lt.prototype.invalidate.call(this)},o.updateTo=function(c,m){var p=this.ratio,x=this.vars.immediateRender||c.immediateRender,_;m&&this._startTime<this._timeline._time&&(this._startTime=this._timeline._time,this._uncache(!1),this._gc?this._enabled(!0,!1):this._timeline.insert(this,this._startTime-this._delay));for(_ in c)this.vars[_]=c[_];if(this._initted||x){if(m)this._initted=!1,x&&this.render(0,!0,!0);else if(this._gc&&this._enabled(!0,!1),this._notifyPluginsOfEnabled&&this._firstPT&&lt._onPluginEvent("_onDisable",this),this._time/this._duration>.998){var h=this._totalTime;this.render(0,!0,!1),this._initted=!1,this.render(h,!0,!1)}else if(this._initted=!1,this._init(),this._time>0||x)for(var b=1/(1-p),M=this._firstPT,A;M;)A=M.s+M.c,M.c*=b,M.s=A-M.c,M=M._next}return this},o.render=function(c,m,p){this._initted||this._duration===0&&this.vars.repeat&&this.invalidate();var x=this._dirty?this.totalDuration():this._totalDuration,_=this._time,h=this._totalTime,b=this._cycle,M=this._duration,A=this._rawPrevTime,G,L,B,X,Y,E,C,V,W;if(c>=x-1e-7&&c>=0?(this._totalTime=x,this._cycle=this._repeat,this._yoyo&&this._cycle&1?(this._time=0,this.ratio=this._ease._calcEnd?this._ease.getRatio(0):0):(this._time=M,this.ratio=this._ease._calcEnd?this._ease.getRatio(1):1),this._reversed||(G=!0,L="onComplete",p=p||this._timeline.autoRemoveChildren),M===0&&(this._initted||!this.vars.lazy||p)&&(this._startTime===this._timeline._duration&&(c=0),(A<0||c<=0&&c>=-1e-7||A===i&&this.data!=="isPause")&&A!==c&&(p=!0,A>i&&(L="onReverseComplete")),this._rawPrevTime=V=!m||c||A===c?c:i)):c<1e-7?(this._totalTime=this._time=this._cycle=0,this.ratio=this._ease._calcEnd?this._ease.getRatio(0):0,(h!==0||M===0&&A>0)&&(L="onReverseComplete",G=this._reversed),c<0&&(this._active=!1,M===0&&(this._initted||!this.vars.lazy||p)&&(A>=0&&(p=!0),this._rawPrevTime=V=!m||c||A===c?c:i)),this._initted||(p=!0)):(this._totalTime=this._time=c,this._repeat!==0&&(X=M+this._repeatDelay,this._cycle=this._totalTime/X>>0,this._cycle!==0&&this._cycle===this._totalTime/X&&h<=c&&this._cycle--,this._time=this._totalTime-this._cycle*X,this._yoyo&&this._cycle&1&&(this._time=M-this._time,W=this._yoyoEase||this.vars.yoyoEase,W&&(this._yoyoEase||(W===!0&&!this._initted?(W=this.vars.ease,this._yoyoEase=W=W?W instanceof tn?W:typeof W=="function"?new tn(W,this.vars.easeParams):tn.map[W]||lt.defaultEase:lt.defaultEase):this._yoyoEase=W=W===!0?this._ease:W instanceof tn?W:tn.map[W]),this.ratio=W?1-W.getRatio((M-this._time)/M):0)),this._time>M?this._time=M:this._time<0&&(this._time=0)),this._easeType&&!W?(Y=this._time/M,E=this._easeType,C=this._easePower,(E===1||E===3&&Y>=.5)&&(Y=1-Y),E===3&&(Y*=2),C===1?Y*=Y:C===2?Y*=Y*Y:C===3?Y*=Y*Y*Y:C===4&&(Y*=Y*Y*Y*Y),E===1?this.ratio=1-Y:E===2?this.ratio=Y:this._time/M<.5?this.ratio=Y/2:this.ratio=1-Y/2):W||(this.ratio=this._ease.getRatio(this._time/M))),_===this._time&&!p&&b===this._cycle){h!==this._totalTime&&this._onUpdate&&(m||this._callback("onUpdate"));return}else if(!this._initted){if(this._init(),!this._initted||this._gc)return;if(!p&&this._firstPT&&(this.vars.lazy!==!1&&this._duration||this.vars.lazy&&!this._duration)){this._time=_,this._totalTime=h,this._rawPrevTime=A,this._cycle=b,r.lazyTweens.push(this),this._lazy=[c,m];return}this._time&&!G&&!W?this.ratio=this._ease.getRatio(this._time/M):G&&this._ease._calcEnd&&!W&&(this.ratio=this._ease.getRatio(this._time===0?0:1))}for(this._lazy!==!1&&(this._lazy=!1),this._active||!this._paused&&this._time!==_&&c>=0&&(this._active=!0),h===0&&(this._initted===2&&c>0&&this._init(),this._startAt&&(c>=0?this._startAt.render(c,!0,p):L||(L="_dummyGS")),this.vars.onStart&&(this._totalTime!==0||M===0)&&(m||this._callback("onStart"))),B=this._firstPT;B;)B.f?B.t[B.p](B.c*this.ratio+B.s):B.t[B.p]=B.c*this.ratio+B.s,B=B._next;this._onUpdate&&(c<0&&this._startAt&&this._startTime&&this._startAt.render(c,!0,p),m||(this._totalTime!==h||L)&&this._callback("onUpdate")),this._cycle!==b&&(m||this._gc||this.vars.onRepeat&&this._callback("onRepeat")),L&&(!this._gc||p)&&(c<0&&this._startAt&&!this._onUpdate&&this._startTime&&this._startAt.render(c,!0,p),G&&(this._timeline.autoRemoveChildren&&this._enabled(!1,!1),this._active=!1),!m&&this.vars[L]&&this._callback(L),M===0&&this._rawPrevTime===i&&V!==i&&(this._rawPrevTime=0))},n.to=function(c,m,p){return new n(c,m,p)},n.from=function(c,m,p){return p.runBackwards=!0,p.immediateRender=p.immediateRender!=!1,new n(c,m,p)},n.fromTo=function(c,m,p,x){return x.startAt=p,x.immediateRender=x.immediateRender!=!1&&p.immediateRender!=!1,new n(c,m,x)},n.staggerTo=n.allTo=function(c,m,p,x,_,h,b){x=x||0;var M=0,A=[],G=function(){p.onComplete&&p.onComplete.apply(p.onCompleteScope||this,arguments),_.apply(b||p.callbackScope||this,h||l)},L=p.cycle,B=p.startAt&&p.startAt.cycle,X,Y,E,C;for(a(c)||(typeof c=="string"&&(c=lt.selector(c)||c),s(c)&&(c=t(c))),c=c||[],x<0&&(c=t(c),c.reverse(),x*=-1),X=c.length-1,E=0;E<=X;E++){Y={};for(C in p)Y[C]=p[C];if(L&&(e(Y,c,E),Y.duration!=null&&(m=Y.duration,delete Y.duration)),B){B=Y.startAt={};for(C in p.startAt)B[C]=p.startAt[C];e(Y.startAt,c,E)}Y.delay=M+(Y.delay||0),E===X&&_&&(Y.onComplete=G),A[E]=new n(c[E],m,Y),M+=x}return A},n.staggerFrom=n.allFrom=function(c,m,p,x,_,h,b){return p.runBackwards=!0,p.immediateRender=p.immediateRender!=!1,n.staggerTo(c,m,p,x,_,h,b)},n.staggerFromTo=n.allFromTo=function(c,m,p,x,_,h,b,M){return x.startAt=p,x.immediateRender=x.immediateRender!=!1&&p.immediateRender!=!1,n.staggerTo(c,m,x,_,h,b,M)},n.delayedCall=function(c,m,p,x,_){return new n(m,0,{delay:c,onComplete:m,onCompleteParams:p,callbackScope:x,onReverseComplete:m,onReverseCompleteParams:p,immediateRender:!1,useFrames:_,overwrite:0})},n.set=function(c,m){return new n(c,0,m)},n.isTweening=function(c){return lt.getTweensOf(c,!0).length>0};var u=function(c,m){for(var p=[],x=0,_=c._first;_;)_ instanceof lt?p[x++]=_:(m&&(p[x++]=_),p=p.concat(u(_,m)),x=p.length),_=_._next;return p},f=n.getAllTweens=function(c){return u(en._rootTimeline,c).concat(u(en._rootFramesTimeline,c))};n.killAll=function(c,m,p,x){m==null&&(m=!0),p==null&&(p=!0);var _=f(x!=!1),h=_.length,b=m&&p&&x,M,A,G;for(G=0;G<h;G++)A=_[G],(b||A instanceof Mr||(M=A.target===A.vars.onComplete)&&p||m&&!M)&&(c?A.totalTime(A._reversed?0:A.totalDuration()):A._enabled(!1,!1))},n.killChildTweensOf=function(c,m){if(c!=null){var p=r.tweenLookup,x,_,h,b,M;if(typeof c=="string"&&(c=lt.selector(c)||c),s(c)&&(c=t(c)),a(c)){for(b=c.length;--b>-1;)n.killChildTweensOf(c[b],m);return}x=[];for(h in p)for(_=p[h].target.parentNode;_;)_===c&&(x=x.concat(p[h].tweens)),_=_.parentNode;for(M=x.length,b=0;b<M;b++)m&&x[b].totalTime(x[b].totalDuration()),x[b]._enabled(!1,!1)}};var d=function(c,m,p,x){m=m!==!1,p=p!==!1,x=x!==!1;for(var _=f(x),h=m&&p&&x,b=_.length,M,A;--b>-1;)A=_[b],(h||A instanceof Mr||(M=A.target===A.vars.onComplete)&&p||m&&!M)&&A.paused(c)};return n.pauseAll=function(c,m,p){d(!0,c,m,p)},n.resumeAll=function(c,m,p){d(!1,c,m,p)},n.globalTimeScale=function(c){var m=en._rootTimeline,p=lt.ticker.time;return arguments.length?(c=c||i,m._startTime=p-(p-m._startTime)*m._timeScale/c,m=en._rootFramesTimeline,p=lt.ticker.frame,m._startTime=p-(p-m._startTime)*m._timeScale/c,m._timeScale=en._rootTimeline._timeScale=c,c):m._timeScale},o.progress=function(c,m){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&this._cycle&1?1-c:c)+this._cycle*(this._duration+this._repeatDelay),m):this._time/this.duration()},o.totalProgress=function(c,m){return arguments.length?this.totalTime(this.totalDuration()*c,m):this._totalTime/this.totalDuration()},o.time=function(c,m){return arguments.length?(this._dirty&&this.totalDuration(),c>this._duration&&(c=this._duration),this._yoyo&&this._cycle&1?c=this._duration-c+this._cycle*(this._duration+this._repeatDelay):this._repeat!==0&&(c+=this._cycle*(this._duration+this._repeatDelay)),this.totalTime(c,m)):this._time},o.duration=function(c){return arguments.length?en.prototype.duration.call(this,c):this._duration},o.totalDuration=function(c){return arguments.length?this._repeat===-1?this:this.duration((c-this._repeat*this._repeatDelay)/(this._repeat+1)):(this._dirty&&(this._totalDuration=this._repeat===-1?999999999999:this._duration*(this._repeat+1)+this._repeatDelay*this._repeat,this._dirty=!1),this._totalDuration)},o.repeat=function(c){return arguments.length?(this._repeat=c,this._uncache(!0)):this._repeat},o.repeatDelay=function(c){return arguments.length?(this._repeatDelay=c,this._uncache(!0)):this._repeatDelay},o.yoyo=function(c){return arguments.length?(this._yoyo=c,this):this._yoyo},n},!0);var Xb=Ot.TweenMax;/*!
 * VERSION: 2.0.2
 * DATE: 2018-08-27
 * UPDATES AND DOCS AT: http://greensock.com
 *
 * @license Copyright (c) 2008-2018, GreenSock. All rights reserved.
 * This work is subject to the terms at http://greensock.com/standard-license or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 * 
 * @author: Jack Doyle, jack@greensock.com
 */Ut._gsDefine("plugins.CSSPlugin",["plugins.TweenPlugin","TweenLite"],function(){var t=function(){Va.call(this,"css"),this._overwriteProps.length=0,this.setRatio=t.prototype.setRatio},e=Ut._gsDefine.globals,n,i,r,s,a={},o=t.prototype=new Va("css");o.constructor=t,t.version="2.0.2",t.API=2,t.defaultTransformPerspective=0,t.defaultSkewType="compensated",t.defaultSmoothOrigin=!0,o="px",t.suffixMap={top:o,right:o,bottom:o,left:o,width:o,height:o,fontSize:o,padding:o,margin:o,perspective:o,lineHeight:""};var l=/(?:\-|\.|\b)(\d|\.|e\-)+/g,u=/(?:\d|\-\d|\.\d|\-\.\d|\+=\d|\-=\d|\+=.\d|\-=\.\d)+/g,f=/(?:\+=|\-=|\-|\b)[\d\-\.]+[a-zA-Z0-9]*(?:%|\b)/gi,d=/(?![+-]?\d*\.?\d+|[+-]|e[+-]\d+)[^0-9]/g,c=/(?:\d|\-|\+|=|#|\.)*/g,m=/opacity *= *([^)]*)/i,p=/opacity:([^;]*)/i,x=/alpha\(opacity *=.+?\)/i,_=/^(rgb|hsl)/,h=/([A-Z])/g,b=/-([a-z])/gi,M=/(^(?:url\(\"|url\())|(?:(\"\))$|\)$)/gi,A=function(y,S){return S.toUpperCase()},G=/(?:Left|Right|Width)/i,L=/(M11|M12|M21|M22)=[\d\-\.e]+/gi,B=/progid\:DXImageTransform\.Microsoft\.Matrix\(.+?\)/i,X=/,(?=[^\)]*(?:\(|$))/gi,Y=/[\s,\(]/i,E=Math.PI/180,C=180/Math.PI,V={},W={style:{}},Z=Ut.document||{createElement:function(){return W}},ne=function(y,S){return Z.createElementNS?Z.createElementNS(S||"http://www.w3.org/1999/xhtml",y):Z.createElement(y)},se=ne("div"),de=ne("img"),te=t._internals={_specialProps:a},Le=(Ut.navigator||{}).userAgent||"",Fe,ze,Ze,Je,ge,we,Ie=function(){var y=Le.indexOf("Android"),S=ne("a");return Ze=Le.indexOf("Safari")!==-1&&Le.indexOf("Chrome")===-1&&(y===-1||parseFloat(Le.substr(y+8,2))>3),ge=Ze&&parseFloat(Le.substr(Le.indexOf("Version/")+8,2))<6,Je=Le.indexOf("Firefox")!==-1,(/MSIE ([0-9]{1,}[\.0-9]{0,})/.exec(Le)||/Trident\/.*rv:([0-9]{1,}[\.0-9]{0,})/.exec(Le))&&(we=parseFloat(RegExp.$1)),S?(S.style.cssText="top:1px;opacity:.55;",/^0.55/.test(S.style.opacity)):!1}(),K=function(y){return m.test(typeof y=="string"?y:(y.currentStyle?y.currentStyle.filter:y.style.filter)||"")?parseFloat(RegExp.$1)/100:1},xe=function(y){Ut.console},_e,Ce,Ve="",He="",w=function(y,S){S=S||se;var D=S.style,I,R;if(D[y]!==void 0)return y;for(y=y.charAt(0).toUpperCase()+y.substr(1),I=["O","Moz","ms","Ms","Webkit"],R=5;--R>-1&&D[I[R]+y]===void 0;);return R>=0?(He=R===3?"ms":I[R],Ve="-"+He.toLowerCase()+"-",He+y):null},H=(typeof window<"u"?window:Z.defaultView||{getComputedStyle:function(){}}).getComputedStyle,j=t.getStyle=function(y,S,D,I,R){var z;return!Ie&&S==="opacity"?K(y):(!I&&y.style[S]?z=y.style[S]:(D=D||H(y))?z=D[S]||D.getPropertyValue(S)||D.getPropertyValue(S.replace(h,"-$1").toLowerCase()):y.currentStyle&&(z=y.currentStyle[S]),R!=null&&(!z||z==="none"||z==="auto"||z==="auto auto")?R:z)},ue=te.convertToPixels=function(y,S,D,I,R){if(I==="px"||!I&&S!=="lineHeight")return D;if(I==="auto"||!D)return 0;var z=G.test(S),U=y,k=se.style,$=D<0,ce=D===1,ie,be,fe;if($&&(D=-D),ce&&(D*=100),S==="lineHeight"&&!I)be=H(y).lineHeight,y.style.lineHeight=D,ie=parseFloat(H(y).lineHeight),y.style.lineHeight=be;else if(I==="%"&&S.indexOf("border")!==-1)ie=D/100*(z?y.clientWidth:y.clientHeight);else{if(k.cssText="border:0 solid red;position:"+j(y,"position")+";line-height:0;",I==="%"||!U.appendChild||I.charAt(0)==="v"||I==="rem"){if(U=y.parentNode||Z.body,j(U,"display").indexOf("flex")!==-1&&(k.position="absolute"),be=U._gsCache,fe=lt.ticker.frame,be&&z&&be.time===fe)return be.width*D/100;k[z?"width":"height"]=D+I}else k[z?"borderLeftWidth":"borderTopWidth"]=D+I;U.appendChild(se),ie=parseFloat(se[z?"offsetWidth":"offsetHeight"]),U.removeChild(se),z&&I==="%"&&t.cacheWidths!==!1&&(be=U._gsCache=U._gsCache||{},be.time=fe,be.width=ie/D*100),ie===0&&!R&&(ie=ue(y,S,D,I,!0))}return ce&&(ie/=100),$?-ie:ie},le=te.calculateOffset=function(y,S,D){if(j(y,"position",D)!=="absolute")return 0;var I=S==="left"?"Left":"Top",R=j(y,"margin"+I,D);return y["offset"+I]-(ue(y,S,parseFloat(R),R.replace(c,""))||0)},Me=function(y,S){var D={},I,R,z;if(S=S||H(y,null))if(I=S.length)for(;--I>-1;)z=S[I],(z.indexOf("-transform")===-1||dt===z)&&(D[z.replace(b,A)]=S.getPropertyValue(z));else for(I in S)(I.indexOf("Transform")===-1||ke===I)&&(D[I]=S[I]);else if(S=y.currentStyle||y.style)for(I in S)typeof I=="string"&&D[I]===void 0&&(D[I.replace(b,A)]=S[I]);return Ie||(D.opacity=K(y)),R=Ai(y,S,!1),D.rotation=R.rotation,D.skewX=R.skewX,D.scaleX=R.scaleX,D.scaleY=R.scaleY,D.x=R.x,D.y=R.y,Et&&(D.z=R.z,D.rotationX=R.rotationX,D.rotationY=R.rotationY,D.scaleZ=R.scaleZ),D.filters&&delete D.filters,D},Se=function(y,S,D,I,R){var z={},U=y.style,k,$,ce;for($ in D)$!=="cssText"&&$!=="length"&&isNaN($)&&(S[$]!==(k=D[$])||R&&R[$])&&$.indexOf("Origin")===-1&&(typeof k=="number"||typeof k=="string")&&(z[$]=k==="auto"&&($==="left"||$==="top")?le(y,$):(k===""||k==="auto"||k==="none")&&typeof S[$]=="string"&&S[$].replace(d,"")!==""?0:k,U[$]!==void 0&&(ce=new Ne(U,$,U[$],ce)));if(I)for($ in I)$!=="className"&&(z[$]=I[$]);return{difs:z,firstMPT:ce}},g={width:["Left","Right"],height:["Top","Bottom"]},v=["marginLeft","marginRight","marginTop","marginBottom"],T=function(y,S,D){if((y.nodeName+"").toLowerCase()==="svg")return(D||H(y))[S]||0;if(y.getCTM&&Ei(y))return y.getBBox()[S]||0;var I=parseFloat(S==="width"?y.offsetWidth:y.offsetHeight),R=g[S],z=R.length;for(D=D||H(y,null);--z>-1;)I-=parseFloat(j(y,"padding"+R[z],D,!0))||0,I-=parseFloat(j(y,"border"+R[z]+"Width",D,!0))||0;return I},P=function(y,S){if(y==="contain"||y==="auto"||y==="auto auto")return y+" ";(y==null||y==="")&&(y="0 0");var D=y.split(" "),I=y.indexOf("left")!==-1?"0%":y.indexOf("right")!==-1?"100%":D[0],R=y.indexOf("top")!==-1?"0%":y.indexOf("bottom")!==-1?"100%":D[1],z;if(D.length>3&&!S){for(D=y.split(", ").join(",").split(","),y=[],z=0;z<D.length;z++)y.push(P(D[z]));return y.join(",")}return R==null?R=I==="center"?"50%":"0":R==="center"&&(R="50%"),(I==="center"||isNaN(parseFloat(I))&&(I+"").indexOf("=")===-1)&&(I="50%"),y=I+" "+R+(D.length>2?" "+D[2]:""),S&&(S.oxp=I.indexOf("%")!==-1,S.oyp=R.indexOf("%")!==-1,S.oxr=I.charAt(1)==="=",S.oyr=R.charAt(1)==="=",S.ox=parseFloat(I.replace(d,"")),S.oy=parseFloat(R.replace(d,"")),S.v=y),S||y},O=function(y,S){return typeof y=="function"&&(y=y(Ce,_e)),typeof y=="string"&&y.charAt(1)==="="?parseInt(y.charAt(0)+"1",10)*parseFloat(y.substr(2)):parseFloat(y)-parseFloat(S)||0},F=function(y,S){typeof y=="function"&&(y=y(Ce,_e));var D=typeof y=="string"&&y.charAt(1)==="=";return typeof y=="string"&&y.charAt(y.length-2)==="v"&&(y=(D?y.substr(0,2):0)+window["inner"+(y.substr(-2)==="vh"?"Height":"Width")]*(parseFloat(D?y.substr(2):y)/100)),y==null?S:D?parseInt(y.charAt(0)+"1",10)*parseFloat(y.substr(2))+S:parseFloat(y)||0},Q=function(y,S,D,I){var R=1e-6,z,U,k,$,ce;return typeof y=="function"&&(y=y(Ce,_e)),y==null?$=S:typeof y=="number"?$=y:(z=360,U=y.split("_"),ce=y.charAt(1)==="=",k=(ce?parseInt(y.charAt(0)+"1",10)*parseFloat(U[0].substr(2)):parseFloat(U[0]))*(y.indexOf("rad")===-1?1:C)-(ce?0:S),U.length&&(I&&(I[D]=S+k),y.indexOf("short")!==-1&&(k=k%z,k!==k%(z/2)&&(k=k<0?k+z:k-z)),y.indexOf("_cw")!==-1&&k<0?k=(k+z*9999999999)%z-(k/z|0)*z:y.indexOf("ccw")!==-1&&k>0&&(k=(k-z*9999999999)%z-(k/z|0)*z)),$=S+k),$<R&&$>-R&&($=0),$},q={aqua:[0,255,255],lime:[0,255,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,255],navy:[0,0,128],white:[255,255,255],fuchsia:[255,0,255],olive:[128,128,0],yellow:[255,255,0],orange:[255,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[255,0,0],pink:[255,192,203],cyan:[0,255,255],transparent:[255,255,255,0]},re=function(y,S,D){return y=y<0?y+1:y>1?y-1:y,(y*6<1?S+(D-S)*y*6:y<.5?D:y*3<2?S+(D-S)*(2/3-y)*6:S)*255+.5|0},Te=t.parseColor=function(y,S){var D,I,R,z,U,k,$,ce,ie,be,fe;if(!y)D=q.black;else if(typeof y=="number")D=[y>>16,y>>8&255,y&255];else{if(y.charAt(y.length-1)===","&&(y=y.substr(0,y.length-1)),q[y])D=q[y];else if(y.charAt(0)==="#")y.length===4&&(I=y.charAt(1),R=y.charAt(2),z=y.charAt(3),y="#"+I+I+R+R+z+z),y=parseInt(y.substr(1),16),D=[y>>16,y>>8&255,y&255];else if(y.substr(0,3)==="hsl"){if(D=fe=y.match(l),!S)U=Number(D[0])%360/360,k=Number(D[1])/100,$=Number(D[2])/100,R=$<=.5?$*(k+1):$+k-$*k,I=$*2-R,D.length>3&&(D[3]=Number(D[3])),D[0]=re(U+1/3,I,R),D[1]=re(U,I,R),D[2]=re(U-1/3,I,R);else if(y.indexOf("=")!==-1)return y.match(u)}else D=y.match(l)||q.transparent;D[0]=Number(D[0]),D[1]=Number(D[1]),D[2]=Number(D[2]),D.length>3&&(D[3]=Number(D[3]))}return S&&!fe&&(I=D[0]/255,R=D[1]/255,z=D[2]/255,ce=Math.max(I,R,z),ie=Math.min(I,R,z),$=(ce+ie)/2,ce===ie?U=k=0:(be=ce-ie,k=$>.5?be/(2-ce-ie):be/(ce+ie),U=ce===I?(R-z)/be+(R<z?6:0):ce===R?(z-I)/be+2:(I-R)/be+4,U*=60),D[0]=U+.5|0,D[1]=k*100+.5|0,D[2]=$*100+.5|0),D},oe=function(y,S){var D=y.match(ye)||[],I=0,R="",z,U,k;if(!D.length)return y;for(z=0;z<D.length;z++)U=D[z],k=y.substr(I,y.indexOf(U,I)-I),I+=k.length+U.length,U=Te(U,S),U.length===3&&U.push(1),R+=k+(S?"hsla("+U[0]+","+U[1]+"%,"+U[2]+"%,"+U[3]:"rgba("+U.join(","))+")";return R+y.substr(I)},ye="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3}){1,2}\\b";for(o in q)ye+="|"+o+"\\b";ye=new RegExp(ye+")","gi"),t.colorStringFilter=function(y){var S=y[0]+" "+y[1],D;ye.test(S)&&(D=S.indexOf("hsl(")!==-1||S.indexOf("hsla(")!==-1,y[0]=oe(y[0],D),y[1]=oe(y[1],D)),ye.lastIndex=0},lt.defaultStringFilter||(lt.defaultStringFilter=t.colorStringFilter);var Be=function(y,S,D,I){if(y==null)return function(fe){return fe};var R=S?(y.match(ye)||[""])[0]:"",z=y.split(R).join("").match(f)||[],U=y.substr(0,y.indexOf(z[0])),k=y.charAt(y.length-1)===")"?")":"",$=y.indexOf(" ")!==-1?" ":",",ce=z.length,ie=ce>0?z[0].replace(l,""):"",be;return ce?S?(be=function(fe){var J,Oe,De,Ee;if(typeof fe=="number")fe+=ie;else if(I&&X.test(fe)){for(Ee=fe.replace(X,"|").split("|"),De=0;De<Ee.length;De++)Ee[De]=be(Ee[De]);return Ee.join(",")}if(J=(fe.match(ye)||[R])[0],Oe=fe.split(J).join("").match(f)||[],De=Oe.length,ce>De--)for(;++De<ce;)Oe[De]=D?Oe[(De-1)/2|0]:z[De];return U+Oe.join($)+$+J+k+(fe.indexOf("inset")!==-1?" inset":"")},be):(be=function(fe){var J,Oe,De;if(typeof fe=="number")fe+=ie;else if(I&&X.test(fe)){for(Oe=fe.replace(X,"|").split("|"),De=0;De<Oe.length;De++)Oe[De]=be(Oe[De]);return Oe.join(",")}if(J=fe.match(f)||[],De=J.length,ce>De--)for(;++De<ce;)J[De]=D?J[(De-1)/2|0]:z[De];return U+J.join($)+k},be):function(fe){return fe}},Ue=function(y){return y=y.split(","),function(S,D,I,R,z,U,k){var $=(D+"").split(" "),ce;for(k={},ce=0;ce<4;ce++)k[y[ce]]=$[ce]=$[ce]||$[(ce-1)/2>>0];return R.parse(S,k,z,U)}};te._setPluginRatio=function(y){this.plugin.setRatio(y);for(var S=this.data,D=S.proxy,I=S.firstMPT,R=1e-6,z,U,k,$,ce;I;)z=D[I.v],I.r?z=I.r(z):z<R&&z>-R&&(z=0),I.t[I.p]=z,I=I._next;if(S.autoRotate&&(S.autoRotate.rotation=S.mod?S.mod.call(this._tween,D.rotation,this.t,this._tween):D.rotation),y===1||y===0)for(I=S.firstMPT,ce=y===1?"e":"b";I;){if(U=I.t,!U.type)U[ce]=U.s+U.xs0;else if(U.type===1){for($=U.xs0+U.s+U.xs1,k=1;k<U.l;k++)$+=U["xn"+k]+U["xs"+(k+1)];U[ce]=$}I=I._next}};var Ne=function(y,S,D,I,R){this.t=y,this.p=S,this.v=D,this.r=R,I&&(I._prev=this,this._next=I)};te._parseToProxy=function(y,S,D,I,R,z){var U=I,k={},$={},ce=D._transform,ie=V,be,fe,J,Oe,De;for(D._transform=null,V=S,I=De=D.parse(y,S,I,R),V=ie,z&&(D._transform=ce,U&&(U._prev=null,U._prev&&(U._prev._next=null)));I&&I!==U;){if(I.type<=1&&(fe=I.p,$[fe]=I.s+I.c,k[fe]=I.s,z||(Oe=new Ne(I,"s",fe,Oe,I.r),I.c=0),I.type===1))for(be=I.l;--be>0;)J="xn"+be,fe=I.p+"_"+J,$[fe]=I.data[J],k[fe]=I[J],z||(Oe=new Ne(I,J,fe,Oe,I.rxp[J]));I=I._next}return{proxy:k,end:$,firstMPT:Oe,pt:De}};var $e=te.CSSPropTween=function(y,S,D,I,R,z,U,k,$,ce,ie){this.t=y,this.p=S,this.s=D,this.c=I,this.n=U||S,y instanceof $e||s.push(this.n),this.r=k&&(typeof k=="function"?k:Math.round),this.type=z||0,$&&(this.pr=$,n=!0),this.b=ce===void 0?D:ce,this.e=ie===void 0?D+I:ie,R&&(this._next=R,R._prev=this)},qe=function(y,S,D,I,R,z){var U=new $e(y,S,D,I-D,R,-1,z);return U.b=D,U.e=U.xs0=I,U},rt=t.parseComplex=function(y,S,D,I,R,z,U,k,$,ce){D=D||z||"",typeof I=="function"&&(I=I(Ce,_e)),U=new $e(y,S,0,0,U,ce?2:1,null,!1,k,D,I),I+="",R&&ye.test(I+D)&&(I=[D,I],t.colorStringFilter(I),D=I[0],I=I[1]);var ie=D.split(", ").join(",").split(" "),be=I.split(", ").join(",").split(" "),fe=ie.length,J=Fe!==!1,Oe,De,Ee,Ae,Re,Ye,Xe,Qe,nt,et,ot,ht,st;for((I.indexOf(",")!==-1||D.indexOf(",")!==-1)&&((I+D).indexOf("rgb")!==-1||(I+D).indexOf("hsl")!==-1?(ie=ie.join(" ").replace(X,", ").split(" "),be=be.join(" ").replace(X,", ").split(" ")):(ie=ie.join(" ").split(",").join(", ").split(" "),be=be.join(" ").split(",").join(", ").split(" ")),fe=ie.length),fe!==be.length&&(ie=(z||"").split(" "),fe=ie.length),U.plugin=$,U.setRatio=ce,ye.lastIndex=0,Oe=0;Oe<fe;Oe++)if(Ae=ie[Oe],Re=be[Oe]+"",Qe=parseFloat(Ae),Qe||Qe===0)U.appendXtra("",Qe,O(Re,Qe),Re.replace(u,""),J&&Re.indexOf("px")!==-1?Math.round:!1,!0);else if(R&&ye.test(Ae))ht=Re.indexOf(")")+1,ht=")"+(ht?Re.substr(ht):""),st=Re.indexOf("hsl")!==-1&&Ie,et=Re,Ae=Te(Ae,st),Re=Te(Re,st),nt=Ae.length+Re.length>6,nt&&!Ie&&Re[3]===0?(U["xs"+U.l]+=U.l?" transparent":"transparent",U.e=U.e.split(be[Oe]).join("transparent")):(Ie||(nt=!1),st?U.appendXtra(et.substr(0,et.indexOf("hsl"))+(nt?"hsla(":"hsl("),Ae[0],O(Re[0],Ae[0]),",",!1,!0).appendXtra("",Ae[1],O(Re[1],Ae[1]),"%,",!1).appendXtra("",Ae[2],O(Re[2],Ae[2]),nt?"%,":"%"+ht,!1):U.appendXtra(et.substr(0,et.indexOf("rgb"))+(nt?"rgba(":"rgb("),Ae[0],Re[0]-Ae[0],",",Math.round,!0).appendXtra("",Ae[1],Re[1]-Ae[1],",",Math.round).appendXtra("",Ae[2],Re[2]-Ae[2],nt?",":ht,Math.round),nt&&(Ae=Ae.length<4?1:Ae[3],U.appendXtra("",Ae,(Re.length<4?1:Re[3])-Ae,ht,!1))),ye.lastIndex=0;else if(Ye=Ae.match(l),!Ye)U["xs"+U.l]+=U.l||U["xs"+U.l]?" "+Re:Re;else{if(Xe=Re.match(u),!Xe||Xe.length!==Ye.length)return U;for(Ee=0,De=0;De<Ye.length;De++)ot=Ye[De],et=Ae.indexOf(ot,Ee),U.appendXtra(Ae.substr(Ee,et-Ee),Number(ot),O(Xe[De],ot),"",J&&Ae.substr(et+ot.length,2)==="px"?Math.round:!1,De===0),Ee=et+ot.length;U["xs"+U.l]+=Ae.substr(Ee)}if(I.indexOf("=")!==-1&&U.data){for(ht=U.xs0+U.data.s,Oe=1;Oe<U.l;Oe++)ht+=U["xs"+Oe]+U.data["xn"+Oe];U.e=ht+U["xs"+Oe]}return U.l||(U.type=-1,U.xs0=U.e),U.xfirst||U},ee=9;for(o=$e.prototype,o.l=o.pr=0;--ee>0;)o["xn"+ee]=0,o["xs"+ee]="";o.xs0="",o._next=o._prev=o.xfirst=o.data=o.plugin=o.setRatio=o.rxp=null,o.appendXtra=function(y,S,D,I,R,z){var U=this,k=U.l;return U["xs"+k]+=z&&(k||U["xs"+k])?" "+y:y||"",!D&&k!==0&&!U.plugin?(U["xs"+k]+=S+(I||""),U):(U.l++,U.type=U.setRatio?2:1,U["xs"+U.l]=I||"",k>0?(U.data["xn"+k]=S+D,U.rxp["xn"+k]=R,U["xn"+k]=S,U.plugin||(U.xfirst=new $e(U,"xn"+k,S,D,U.xfirst||U,0,U.n,R,U.pr),U.xfirst.xs0=0),U):(U.data={s:S+D},U.rxp={},U.s=S,U.c=D,U.r=R,U))};var je=function(y,S){S=S||{},this.p=S.prefix&&w(y)||y,a[y]=a[this.p]=this,this.format=S.formatter||Be(S.defaultValue,S.color,S.collapsible,S.multi),S.parser&&(this.parse=S.parser),this.clrs=S.color,this.multi=S.multi,this.keyword=S.keyword,this.dflt=S.defaultValue,this.pr=S.priority||0},he=te._registerComplexSpecialProp=function(y,S,D){typeof S!="object"&&(S={parser:D});var I=y.split(","),R=S.defaultValue,z;for(D=D||[R],z=0;z<I.length;z++)S.prefix=z===0&&S.prefix,S.defaultValue=D[z]||R,new je(I[z],S)},Pe=te._registerPluginProp=function(y){if(!a[y]){var S=y.charAt(0).toUpperCase()+y.substr(1)+"Plugin";he(y,{parser:function(D,I,R,z,U,k,$){var ce=e.com.greensock.plugins[S];return ce?(ce._cssRegister(),a[R].parse(D,I,R,z,U,k,$)):(xe("Error: "+S+" js file not loaded."),U)}})}};o=je.prototype,o.parseComplex=function(y,S,D,I,R,z){var U=this.keyword,k,$,ce,ie,be,fe;if(this.multi&&(X.test(D)||X.test(S)?($=S.replace(X,"|").split("|"),ce=D.replace(X,"|").split("|")):U&&($=[S],ce=[D])),ce){for(ie=ce.length>$.length?ce.length:$.length,k=0;k<ie;k++)S=$[k]=$[k]||this.dflt,D=ce[k]=ce[k]||this.dflt,U&&(be=S.indexOf(U),fe=D.indexOf(U),be!==fe&&(fe===-1?$[k]=$[k].split(U).join(""):be===-1&&($[k]+=" "+U)));S=$.join(", "),D=ce.join(", ")}return rt(y,this.p,S,D,this.clrs,this.dflt,I,this.pr,R,z)},o.parse=function(y,S,D,I,R,z,U){return this.parseComplex(y.style,this.format(j(y,this.p,r,!1,this.dflt)),this.format(S),R,z)},t.registerSpecialProp=function(y,S,D){he(y,{parser:function(I,R,z,U,k,$,ce){var ie=new $e(I,z,0,0,k,2,z,!1,D);return ie.plugin=$,ie.setRatio=S(I,R,U._tween,z),ie},priority:D})},t.useSVGTransformAttr=!0;var We="scaleX,scaleY,scaleZ,x,y,z,skewX,skewY,rotation,rotationX,rotationY,perspective,xPercent,yPercent".split(","),ke=w("transform"),dt=Ve+"transform",Tt=w("transformOrigin"),Et=w("perspective")!==null,pt=te.Transform=function(){this.perspective=parseFloat(t.defaultTransformPerspective)||0,this.force3D=t.defaultForce3D===!1||!Et?!1:t.defaultForce3D||"auto"},Kt=Ut.SVGElement,Gt,bs=function(y,S,D){var I=Z.createElementNS("http://www.w3.org/2000/svg",y),R=/([a-z])([A-Z])/g,z;for(z in D)I.setAttributeNS(null,z.replace(R,"$1-$2").toLowerCase(),D[z]);return S.appendChild(I),I},ti=Z.documentElement||{},ni=function(){var y=we||/Android/i.test(Le)&&!Ut.chrome,S,D,I;return Z.createElementNS&&!y&&(S=bs("svg",ti),D=bs("rect",S,{width:100,height:50,x:100}),I=D.getBoundingClientRect().width,D.style[Tt]="50% 50%",D.style[ke]="scaleX(0.5)",y=I===D.getBoundingClientRect().width&&!(Je&&Et),ti.removeChild(S)),y}(),ir=function(y,S,D,I,R,z){var U=y._gsTransform,k=wi(y,!0),$,ce,ie,be,fe,J,Oe,De,Ee,Ae,Re,Ye,Xe,Qe;U&&(Xe=U.xOrigin,Qe=U.yOrigin),(!I||($=I.split(" ")).length<2)&&(Oe=y.getBBox(),Oe.x===0&&Oe.y===0&&Oe.width+Oe.height===0&&(Oe={x:parseFloat(y.hasAttribute("x")?y.getAttribute("x"):y.hasAttribute("cx")?y.getAttribute("cx"):0)||0,y:parseFloat(y.hasAttribute("y")?y.getAttribute("y"):y.hasAttribute("cy")?y.getAttribute("cy"):0)||0,width:0,height:0}),S=P(S).split(" "),$=[(S[0].indexOf("%")!==-1?parseFloat(S[0])/100*Oe.width:parseFloat(S[0]))+Oe.x,(S[1].indexOf("%")!==-1?parseFloat(S[1])/100*Oe.height:parseFloat(S[1]))+Oe.y]),D.xOrigin=be=parseFloat($[0]),D.yOrigin=fe=parseFloat($[1]),I&&k!==Or&&(J=k[0],Oe=k[1],De=k[2],Ee=k[3],Ae=k[4],Re=k[5],Ye=J*Ee-Oe*De,Ye&&(ce=be*(Ee/Ye)+fe*(-De/Ye)+(De*Re-Ee*Ae)/Ye,ie=be*(-Oe/Ye)+fe*(J/Ye)-(J*Re-Oe*Ae)/Ye,be=D.xOrigin=$[0]=ce,fe=D.yOrigin=$[1]=ie)),U&&(z&&(D.xOffset=U.xOffset,D.yOffset=U.yOffset,U=D),R||R!==!1&&t.defaultSmoothOrigin!==!1?(ce=be-Xe,ie=fe-Qe,U.xOffset+=ce*k[0]+ie*k[2]-ce,U.yOffset+=ce*k[1]+ie*k[3]-ie):U.xOffset=U.yOffset=0),z||y.setAttribute("data-svg-origin",$.join(" "))},Ts=function(y){var S=ne("svg",this.ownerSVGElement&&this.ownerSVGElement.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),D=this.parentNode,I=this.nextSibling,R=this.style.cssText,z;if(ti.appendChild(S),S.appendChild(this),this.style.display="block",y)try{z=this.getBBox(),this._originalGetBBox=this.getBBox,this.getBBox=Ts}catch{}else this._originalGetBBox&&(z=this._originalGetBBox());return I?D.insertBefore(this,I):D.appendChild(this),ti.removeChild(S),this.style.cssText=R,z},pa=function(y){try{return y.getBBox()}catch{return Ts.call(y,!0)}},Ei=function(y){return!!(Kt&&y.getCTM&&(!y.parentNode||y.ownerSVGElement)&&pa(y))},Or=[1,0,0,1,0,0],wi=function(y,S){var D=y._gsTransform||new pt,I=1e5,R=y.style,z,U,k,$,ce,ie;if(ke?U=j(y,dt,null,!0):y.currentStyle&&(U=y.currentStyle.filter.match(L),U=U&&U.length===4?[U[0].substr(4),Number(U[2].substr(4)),Number(U[1].substr(4)),U[3].substr(4),D.x||0,D.y||0].join(","):""),z=!U||U==="none"||U==="matrix(1, 0, 0, 1, 0, 0)",ke&&((ie=!H(y)||H(y).display==="none")||!y.parentNode)&&(ie&&($=R.display,R.display="block"),y.parentNode||(ce=1,ti.appendChild(y)),U=j(y,dt,null,!0),z=!U||U==="none"||U==="matrix(1, 0, 0, 1, 0, 0)",$?R.display=$:ie&&rr(R,"display"),ce&&ti.removeChild(y)),(D.svg||y.getCTM&&Ei(y))&&(z&&(R[ke]+"").indexOf("matrix")!==-1&&(U=R[ke],z=0),k=y.getAttribute("transform"),z&&k&&(k=y.transform.baseVal.consolidate().matrix,U="matrix("+k.a+","+k.b+","+k.c+","+k.d+","+k.e+","+k.f+")",z=0)),z)return Or;for(k=(U||"").match(l)||[],ee=k.length;--ee>-1;)$=Number(k[ee]),k[ee]=(ce=$-($|=0))?(ce*I+(ce<0?-.5:.5)|0)/I+$:$;return S&&k.length>6?[k[0],k[1],k[4],k[5],k[12],k[13]]:k},Ai=te.getTransform=function(y,S,D,I){if(y._gsTransform&&D&&!I)return y._gsTransform;var R=D?y._gsTransform||new pt:new pt,z=R.scaleX<0,U=2e-5,k=1e5,$=Et&&(parseFloat(j(y,Tt,S,!1,"0 0 0").split(" ")[2])||R.zOrigin)||0,ce=parseFloat(t.defaultTransformPerspective)||0,ie,be,fe,J,Oe,De;if(R.svg=!!(y.getCTM&&Ei(y)),R.svg&&(ir(y,j(y,Tt,S,!1,"50% 50%")+"",R,y.getAttribute("data-svg-origin")),Gt=t.useSVGTransformAttr||ni),ie=wi(y),ie!==Or){if(ie.length===16){var Ee=ie[0],Ae=ie[1],Re=ie[2],Ye=ie[3],Xe=ie[4],Qe=ie[5],nt=ie[6],et=ie[7],ot=ie[8],ht=ie[9],st=ie[10],ii=ie[12],ri=ie[13],qt=ie[14],Zt=ie[11],Ke=Math.atan2(nt,st),Pt,Dt,si,_t,ft;R.zOrigin&&(qt=-R.zOrigin,ii=ot*qt-ie[12],ri=ht*qt-ie[13],qt=st*qt+R.zOrigin-ie[14]),R.rotationX=Ke*C,Ke&&(_t=Math.cos(-Ke),ft=Math.sin(-Ke),Pt=Xe*_t+ot*ft,Dt=Qe*_t+ht*ft,si=nt*_t+st*ft,ot=Xe*-ft+ot*_t,ht=Qe*-ft+ht*_t,st=nt*-ft+st*_t,Zt=et*-ft+Zt*_t,Xe=Pt,Qe=Dt,nt=si),Ke=Math.atan2(-Re,st),R.rotationY=Ke*C,Ke&&(_t=Math.cos(-Ke),ft=Math.sin(-Ke),Pt=Ee*_t-ot*ft,Dt=Ae*_t-ht*ft,si=Re*_t-st*ft,ht=Ae*ft+ht*_t,st=Re*ft+st*_t,Zt=Ye*ft+Zt*_t,Ee=Pt,Ae=Dt,Re=si),Ke=Math.atan2(Ae,Ee),R.rotation=Ke*C,Ke&&(_t=Math.cos(Ke),ft=Math.sin(Ke),Pt=Ee*_t+Ae*ft,Dt=Xe*_t+Qe*ft,si=ot*_t+ht*ft,Ae=Ae*_t-Ee*ft,Qe=Qe*_t-Xe*ft,ht=ht*_t-ot*ft,Ee=Pt,Xe=Dt,ot=si),R.rotationX&&Math.abs(R.rotationX)+Math.abs(R.rotation)>359.9&&(R.rotationX=R.rotation=0,R.rotationY=180-R.rotationY),Ke=Math.atan2(Xe,Qe),R.scaleX=(Math.sqrt(Ee*Ee+Ae*Ae+Re*Re)*k+.5|0)/k,R.scaleY=(Math.sqrt(Qe*Qe+nt*nt)*k+.5|0)/k,R.scaleZ=(Math.sqrt(ot*ot+ht*ht+st*st)*k+.5|0)/k,Ee/=R.scaleX,Xe/=R.scaleY,Ae/=R.scaleX,Qe/=R.scaleY,Math.abs(Ke)>U?(R.skewX=Ke*C,Xe=0,R.skewType!=="simple"&&(R.scaleY*=1/Math.cos(Ke))):R.skewX=0,R.perspective=Zt?1/(Zt<0?-Zt:Zt):0,R.x=ii,R.y=ri,R.z=qt,R.svg&&(R.x-=R.xOrigin-(R.xOrigin*Ee-R.yOrigin*Xe),R.y-=R.yOrigin-(R.yOrigin*Ae-R.xOrigin*Qe))}else if(!Et||I||!ie.length||R.x!==ie[4]||R.y!==ie[5]||!R.rotationX&&!R.rotationY){var Wt=ie.length>=6,In=Wt?ie[0]:1,on=ie[1]||0,Es=ie[2]||0,ws=Wt?ie[3]:1;R.x=ie[4]||0,R.y=ie[5]||0,fe=Math.sqrt(In*In+on*on),J=Math.sqrt(ws*ws+Es*Es),Oe=In||on?Math.atan2(on,In)*C:R.rotation||0,De=Es||ws?Math.atan2(Es,ws)*C+Oe:R.skewX||0,R.scaleX=fe,R.scaleY=J,R.rotation=Oe,R.skewX=De,Et&&(R.rotationX=R.rotationY=R.z=0,R.perspective=ce,R.scaleZ=1),R.svg&&(R.x-=R.xOrigin-(R.xOrigin*In+R.yOrigin*Es),R.y-=R.yOrigin-(R.xOrigin*on+R.yOrigin*ws))}Math.abs(R.skewX)>90&&Math.abs(R.skewX)<270&&(z?(R.scaleX*=-1,R.skewX+=R.rotation<=0?180:-180,R.rotation+=R.rotation<=0?180:-180):(R.scaleY*=-1,R.skewX+=R.skewX<=0?180:-180)),R.zOrigin=$;for(be in R)R[be]<U&&R[be]>-U&&(R[be]=0)}return D&&(y._gsTransform=R,R.svg&&(Gt&&y.style[ke]?lt.delayedCall(.001,function(){rr(y.style,ke)}):!Gt&&y.getAttribute("transform")&&lt.delayedCall(.001,function(){y.removeAttribute("transform")}))),R},ma=function(y){var S=this.data,D=-S.rotation*E,I=D+S.skewX*E,R=1e5,z=(Math.cos(D)*S.scaleX*R|0)/R,U=(Math.sin(D)*S.scaleX*R|0)/R,k=(Math.sin(I)*-S.scaleY*R|0)/R,$=(Math.cos(I)*S.scaleY*R|0)/R,ce=this.t.style,ie=this.t.currentStyle,be,fe;if(ie){fe=U,U=-k,k=-fe,be=ie.filter,ce.filter="";var J=this.t.offsetWidth,Oe=this.t.offsetHeight,De=ie.position!=="absolute",Ee="progid:DXImageTransform.Microsoft.Matrix(M11="+z+", M12="+U+", M21="+k+", M22="+$,Ae=S.x+J*S.xPercent/100,Re=S.y+Oe*S.yPercent/100,Ye,Xe;if(S.ox!=null&&(Ye=(S.oxp?J*S.ox*.01:S.ox)-J/2,Xe=(S.oyp?Oe*S.oy*.01:S.oy)-Oe/2,Ae+=Ye-(Ye*z+Xe*U),Re+=Xe-(Ye*k+Xe*$)),De?(Ye=J/2,Xe=Oe/2,Ee+=", Dx="+(Ye-(Ye*z+Xe*U)+Ae)+", Dy="+(Xe-(Ye*k+Xe*$)+Re)+")"):Ee+=", sizingMethod='auto expand')",be.indexOf("DXImageTransform.Microsoft.Matrix(")!==-1?ce.filter=be.replace(B,Ee):ce.filter=Ee+" "+be,(y===0||y===1)&&z===1&&U===0&&k===0&&$===1&&(!De||Ee.indexOf("Dx=0, Dy=0")!==-1)&&(!m.test(be)||parseFloat(RegExp.$1)===100)&&be.indexOf(be.indexOf("Alpha"))===-1&&ce.removeAttribute("filter"),!De){var Qe=we<8?1:-1,nt,et,ot;for(Ye=S.ieOffsetX||0,Xe=S.ieOffsetY||0,S.ieOffsetX=Math.round((J-((z<0?-z:z)*J+(U<0?-U:U)*Oe))/2+Ae),S.ieOffsetY=Math.round((Oe-(($<0?-$:$)*Oe+(k<0?-k:k)*J))/2+Re),ee=0;ee<4;ee++)et=v[ee],nt=ie[et],fe=nt.indexOf("px")!==-1?parseFloat(nt):ue(this.t,et,parseFloat(nt),nt.replace(c,""))||0,fe!==S[et]?ot=ee<2?-S.ieOffsetX:-S.ieOffsetY:ot=ee<2?Ye-S.ieOffsetX:Xe-S.ieOffsetY,ce[et]=(S[et]=Math.round(fe-ot*(ee===0||ee===2?1:Qe)))+"px"}}},Ho=te.set3DTransformRatio=te.setTransformRatio=function(y){var S=this.data,D=this.t.style,I=S.rotation,R=S.rotationX,z=S.rotationY,U=S.scaleX,k=S.scaleY,$=S.scaleZ,ce=S.x,ie=S.y,be=S.z,fe=S.svg,J=S.perspective,Oe=S.force3D,De=S.skewY,Ee=S.skewX,Ae,Re,Ye,Xe,Qe,nt,et,ot,ht,st,ii,ri,qt,Zt,Ke,Pt,Dt,si,_t,ft,Wt,In,on;if(De&&(Ee+=De,I+=De),((y===1||y===0)&&Oe==="auto"&&(this.tween._totalTime===this.tween._totalDuration||!this.tween._totalTime)||!Oe)&&!be&&!J&&!z&&!R&&$===1||Gt&&fe||!Et){I||Ee||fe?(I*=E,In=Ee*E,on=1e5,Re=Math.cos(I)*U,Qe=Math.sin(I)*U,Ye=Math.sin(I-In)*-k,nt=Math.cos(I-In)*k,In&&S.skewType==="simple"&&(Ae=Math.tan(In-De*E),Ae=Math.sqrt(1+Ae*Ae),Ye*=Ae,nt*=Ae,De&&(Ae=Math.tan(De*E),Ae=Math.sqrt(1+Ae*Ae),Re*=Ae,Qe*=Ae)),fe&&(ce+=S.xOrigin-(S.xOrigin*Re+S.yOrigin*Ye)+S.xOffset,ie+=S.yOrigin-(S.xOrigin*Qe+S.yOrigin*nt)+S.yOffset,Gt&&(S.xPercent||S.yPercent)&&(Ke=this.t.getBBox(),ce+=S.xPercent*.01*Ke.width,ie+=S.yPercent*.01*Ke.height),Ke=1e-6,ce<Ke&&ce>-Ke&&(ce=0),ie<Ke&&ie>-Ke&&(ie=0)),_t=(Re*on|0)/on+","+(Qe*on|0)/on+","+(Ye*on|0)/on+","+(nt*on|0)/on+","+ce+","+ie+")",fe&&Gt?this.t.setAttribute("transform","matrix("+_t):D[ke]=(S.xPercent||S.yPercent?"translate("+S.xPercent+"%,"+S.yPercent+"%) matrix(":"matrix(")+_t):D[ke]=(S.xPercent||S.yPercent?"translate("+S.xPercent+"%,"+S.yPercent+"%) matrix(":"matrix(")+U+",0,0,"+k+","+ce+","+ie+")";return}if(Je&&(Ke=1e-4,U<Ke&&U>-Ke&&(U=$=2e-5),k<Ke&&k>-Ke&&(k=$=2e-5),J&&!S.z&&!S.rotationX&&!S.rotationY&&(J=0)),I||Ee)I*=E,Pt=Re=Math.cos(I),Dt=Qe=Math.sin(I),Ee&&(I-=Ee*E,Pt=Math.cos(I),Dt=Math.sin(I),S.skewType==="simple"&&(Ae=Math.tan((Ee-De)*E),Ae=Math.sqrt(1+Ae*Ae),Pt*=Ae,Dt*=Ae,S.skewY&&(Ae=Math.tan(De*E),Ae=Math.sqrt(1+Ae*Ae),Re*=Ae,Qe*=Ae))),Ye=-Dt,nt=Pt;else if(!z&&!R&&$===1&&!J&&!fe){D[ke]=(S.xPercent||S.yPercent?"translate("+S.xPercent+"%,"+S.yPercent+"%) translate3d(":"translate3d(")+ce+"px,"+ie+"px,"+be+"px)"+(U!==1||k!==1?" scale("+U+","+k+")":"");return}else Re=nt=1,Ye=Qe=0;st=1,Xe=et=ot=ht=ii=ri=0,qt=J?-1/J:0,Zt=S.zOrigin,Ke=1e-6,ft=",",Wt="0",I=z*E,I&&(Pt=Math.cos(I),Dt=Math.sin(I),ot=-Dt,ii=qt*-Dt,Xe=Re*Dt,et=Qe*Dt,st=Pt,qt*=Pt,Re*=Pt,Qe*=Pt),I=R*E,I&&(Pt=Math.cos(I),Dt=Math.sin(I),Ae=Ye*Pt+Xe*Dt,si=nt*Pt+et*Dt,ht=st*Dt,ri=qt*Dt,Xe=Ye*-Dt+Xe*Pt,et=nt*-Dt+et*Pt,st=st*Pt,qt=qt*Pt,Ye=Ae,nt=si),$!==1&&(Xe*=$,et*=$,st*=$,qt*=$),k!==1&&(Ye*=k,nt*=k,ht*=k,ri*=k),U!==1&&(Re*=U,Qe*=U,ot*=U,ii*=U),(Zt||fe)&&(Zt&&(ce+=Xe*-Zt,ie+=et*-Zt,be+=st*-Zt+Zt),fe&&(ce+=S.xOrigin-(S.xOrigin*Re+S.yOrigin*Ye)+S.xOffset,ie+=S.yOrigin-(S.xOrigin*Qe+S.yOrigin*nt)+S.yOffset),ce<Ke&&ce>-Ke&&(ce=Wt),ie<Ke&&ie>-Ke&&(ie=Wt),be<Ke&&be>-Ke&&(be=0)),_t=S.xPercent||S.yPercent?"translate("+S.xPercent+"%,"+S.yPercent+"%) matrix3d(":"matrix3d(",_t+=(Re<Ke&&Re>-Ke?Wt:Re)+ft+(Qe<Ke&&Qe>-Ke?Wt:Qe)+ft+(ot<Ke&&ot>-Ke?Wt:ot),_t+=ft+(ii<Ke&&ii>-Ke?Wt:ii)+ft+(Ye<Ke&&Ye>-Ke?Wt:Ye)+ft+(nt<Ke&&nt>-Ke?Wt:nt),R||z||$!==1?(_t+=ft+(ht<Ke&&ht>-Ke?Wt:ht)+ft+(ri<Ke&&ri>-Ke?Wt:ri)+ft+(Xe<Ke&&Xe>-Ke?Wt:Xe),_t+=ft+(et<Ke&&et>-Ke?Wt:et)+ft+(st<Ke&&st>-Ke?Wt:st)+ft+(qt<Ke&&qt>-Ke?Wt:qt)+ft):_t+=",0,0,0,0,1,0,",_t+=ce+ft+ie+ft+be+ft+(J?1+-be/J:1)+")",D[ke]=_t};o=pt.prototype,o.x=o.y=o.z=o.skewX=o.skewY=o.rotation=o.rotationX=o.rotationY=o.zOrigin=o.xPercent=o.yPercent=o.xOffset=o.yOffset=0,o.scaleX=o.scaleY=o.scaleZ=1,he("transform,scale,scaleX,scaleY,scaleZ,x,y,z,rotation,rotationX,rotationY,rotationZ,skewX,skewY,shortRotation,shortRotationX,shortRotationY,shortRotationZ,transformOrigin,svgOrigin,transformPerspective,directionalRotation,parseTransform,force3D,skewType,xPercent,yPercent,smoothOrigin",{parser:function(y,S,D,I,R,z,U){if(I._lastParsedTransform===U)return R;I._lastParsedTransform=U;var k=U.scale&&typeof U.scale=="function"?U.scale:0,$;typeof U[D]=="function"&&($=U[D],U[D]=S),k&&(U.scale=k(Ce,y));var ce=y._gsTransform,ie=y.style,be=1e-6,fe=We.length,J=U,Oe={},De="transformOrigin",Ee=Ai(y,r,!0,J.parseTransform),Ae=J.transform&&(typeof J.transform=="function"?J.transform(Ce,_e):J.transform),Re,Ye,Xe,Qe,nt,et,ot,ht,st;if(Ee.skewType=J.skewType||Ee.skewType||t.defaultSkewType,I._transform=Ee,"rotationZ"in J&&(J.rotation=J.rotationZ),Ae&&typeof Ae=="string"&&ke)Ye=se.style,Ye[ke]=Ae,Ye.display="block",Ye.position="absolute",Ae.indexOf("%")!==-1&&(Ye.width=j(y,"width"),Ye.height=j(y,"height")),Z.body.appendChild(se),Re=Ai(se,null,!1),Ee.skewType==="simple"&&(Re.scaleY*=Math.cos(Re.skewX*E)),Ee.svg&&(et=Ee.xOrigin,ot=Ee.yOrigin,Re.x-=Ee.xOffset,Re.y-=Ee.yOffset,(J.transformOrigin||J.svgOrigin)&&(Ae={},ir(y,P(J.transformOrigin),Ae,J.svgOrigin,J.smoothOrigin,!0),et=Ae.xOrigin,ot=Ae.yOrigin,Re.x-=Ae.xOffset-Ee.xOffset,Re.y-=Ae.yOffset-Ee.yOffset),(et||ot)&&(ht=wi(se,!0),Re.x-=et-(et*ht[0]+ot*ht[2]),Re.y-=ot-(et*ht[1]+ot*ht[3]))),Z.body.removeChild(se),Re.perspective||(Re.perspective=Ee.perspective),J.xPercent!=null&&(Re.xPercent=F(J.xPercent,Ee.xPercent)),J.yPercent!=null&&(Re.yPercent=F(J.yPercent,Ee.yPercent));else if(typeof J=="object"){if(Re={scaleX:F(J.scaleX!=null?J.scaleX:J.scale,Ee.scaleX),scaleY:F(J.scaleY!=null?J.scaleY:J.scale,Ee.scaleY),scaleZ:F(J.scaleZ,Ee.scaleZ),x:F(J.x,Ee.x),y:F(J.y,Ee.y),z:F(J.z,Ee.z),xPercent:F(J.xPercent,Ee.xPercent),yPercent:F(J.yPercent,Ee.yPercent),perspective:F(J.transformPerspective,Ee.perspective)},nt=J.directionalRotation,nt!=null)if(typeof nt=="object")for(Ye in nt)J[Ye]=nt[Ye];else J.rotation=nt;typeof J.x=="string"&&J.x.indexOf("%")!==-1&&(Re.x=0,Re.xPercent=F(J.x,Ee.xPercent)),typeof J.y=="string"&&J.y.indexOf("%")!==-1&&(Re.y=0,Re.yPercent=F(J.y,Ee.yPercent)),Re.rotation=Q("rotation"in J?J.rotation:"shortRotation"in J?J.shortRotation+"_short":Ee.rotation,Ee.rotation,"rotation",Oe),Et&&(Re.rotationX=Q("rotationX"in J?J.rotationX:"shortRotationX"in J?J.shortRotationX+"_short":Ee.rotationX||0,Ee.rotationX,"rotationX",Oe),Re.rotationY=Q("rotationY"in J?J.rotationY:"shortRotationY"in J?J.shortRotationY+"_short":Ee.rotationY||0,Ee.rotationY,"rotationY",Oe)),Re.skewX=Q(J.skewX,Ee.skewX),Re.skewY=Q(J.skewY,Ee.skewY)}for(Et&&J.force3D!=null&&(Ee.force3D=J.force3D,Qe=!0),Xe=Ee.force3D||Ee.z||Ee.rotationX||Ee.rotationY||Re.z||Re.rotationX||Re.rotationY||Re.perspective,!Xe&&J.scale!=null&&(Re.scaleZ=1);--fe>-1;)st=We[fe],Ae=Re[st]-Ee[st],(Ae>be||Ae<-be||J[st]!=null||V[st]!=null)&&(Qe=!0,R=new $e(Ee,st,Ee[st],Ae,R),st in Oe&&(R.e=Oe[st]),R.xs0=0,R.plugin=z,I._overwriteProps.push(R.n));return Ae=J.transformOrigin,Ee.svg&&(Ae||J.svgOrigin)&&(et=Ee.xOffset,ot=Ee.yOffset,ir(y,P(Ae),Re,J.svgOrigin,J.smoothOrigin),R=qe(Ee,"xOrigin",(ce?Ee:Re).xOrigin,Re.xOrigin,R,De),R=qe(Ee,"yOrigin",(ce?Ee:Re).yOrigin,Re.yOrigin,R,De),(et!==Ee.xOffset||ot!==Ee.yOffset)&&(R=qe(Ee,"xOffset",ce?et:Ee.xOffset,Ee.xOffset,R,De),R=qe(Ee,"yOffset",ce?ot:Ee.yOffset,Ee.yOffset,R,De)),Ae="0px 0px"),(Ae||Et&&Xe&&Ee.zOrigin)&&(ke?(Qe=!0,st=Tt,Ae=(Ae||j(y,st,r,!1,"50% 50%"))+"",R=new $e(ie,st,0,0,R,-1,De),R.b=ie[st],R.plugin=z,Et?(Ye=Ee.zOrigin,Ae=Ae.split(" "),Ee.zOrigin=(Ae.length>2&&!(Ye!==0&&Ae[2]==="0px")?parseFloat(Ae[2]):Ye)||0,R.xs0=R.e=Ae[0]+" "+(Ae[1]||"50%")+" 0px",R=new $e(Ee,"zOrigin",0,0,R,-1,R.n),R.b=Ye,R.xs0=R.e=Ee.zOrigin):R.xs0=R.e=Ae):P(Ae+"",Ee)),Qe&&(I._transformType=!(Ee.svg&&Gt)&&(Xe||this._transformType===3)?3:2),$&&(U[D]=$),k&&(U.scale=k),R},prefix:!0}),he("boxShadow",{defaultValue:"0px 0px 0px 0px #999",prefix:!0,color:!0,multi:!0,keyword:"inset"}),he("borderRadius",{defaultValue:"0px",parser:function(y,S,D,I,R,z){S=this.format(S);var U=["borderTopLeftRadius","borderTopRightRadius","borderBottomRightRadius","borderBottomLeftRadius"],k=y.style,$,ce,ie,be,fe,J,Oe,De,Ee,Ae,Re,Ye,Xe,Qe,nt,et;for(Ee=parseFloat(y.offsetWidth),Ae=parseFloat(y.offsetHeight),$=S.split(" "),ce=0;ce<U.length;ce++)this.p.indexOf("border")&&(U[ce]=w(U[ce])),fe=be=j(y,U[ce],r,!1,"0px"),fe.indexOf(" ")!==-1&&(be=fe.split(" "),fe=be[0],be=be[1]),J=ie=$[ce],Oe=parseFloat(fe),Ye=fe.substr((Oe+"").length),Xe=J.charAt(1)==="=",Xe?(De=parseInt(J.charAt(0)+"1",10),J=J.substr(2),De*=parseFloat(J),Re=J.substr((De+"").length-(De<0?1:0))||""):(De=parseFloat(J),Re=J.substr((De+"").length)),Re===""&&(Re=i[D]||Ye),Re!==Ye&&(Qe=ue(y,"borderLeft",Oe,Ye),nt=ue(y,"borderTop",Oe,Ye),Re==="%"?(fe=Qe/Ee*100+"%",be=nt/Ae*100+"%"):Re==="em"?(et=ue(y,"borderLeft",1,"em"),fe=Qe/et+"em",be=nt/et+"em"):(fe=Qe+"px",be=nt+"px"),Xe&&(J=parseFloat(fe)+De+Re,ie=parseFloat(be)+De+Re)),R=rt(k,U[ce],fe+" "+be,J+" "+ie,!1,"0px",R);return R},prefix:!0,formatter:Be("0px 0px 0px 0px",!1,!0)}),he("borderBottomLeftRadius,borderBottomRightRadius,borderTopLeftRadius,borderTopRightRadius",{defaultValue:"0px",parser:function(y,S,D,I,R,z){return rt(y.style,D,this.format(j(y,D,r,!1,"0px 0px")),this.format(S),!1,"0px",R)},prefix:!0,formatter:Be("0px 0px",!1,!0)}),he("backgroundPosition",{defaultValue:"0 0",parser:function(y,S,D,I,R,z){var U="background-position",k=r||H(y,null),$=this.format((k?we?k.getPropertyValue(U+"-x")+" "+k.getPropertyValue(U+"-y"):k.getPropertyValue(U):y.currentStyle.backgroundPositionX+" "+y.currentStyle.backgroundPositionY)||"0 0"),ce=this.format(S),ie,be,fe,J,Oe,De;if($.indexOf("%")!==-1!=(ce.indexOf("%")!==-1)&&ce.split(",").length<2&&(De=j(y,"backgroundImage").replace(M,""),De&&De!=="none")){for(ie=$.split(" "),be=ce.split(" "),de.setAttribute("src",De),fe=2;--fe>-1;)$=ie[fe],J=$.indexOf("%")!==-1,J!==(be[fe].indexOf("%")!==-1)&&(Oe=fe===0?y.offsetWidth-de.width:y.offsetHeight-de.height,ie[fe]=J?parseFloat($)/100*Oe+"px":parseFloat($)/Oe*100+"%");$=ie.join(" ")}return this.parseComplex(y.style,$,ce,R,z)},formatter:P}),he("backgroundSize",{defaultValue:"0 0",formatter:function(y){return y+="",y.substr(0,2)==="co"?y:P(y.indexOf(" ")===-1?y+" "+y:y)}}),he("perspective",{defaultValue:"0px",prefix:!0}),he("perspectiveOrigin",{defaultValue:"50% 50%",prefix:!0}),he("transformStyle",{prefix:!0}),he("backfaceVisibility",{prefix:!0}),he("userSelect",{prefix:!0}),he("margin",{parser:Ue("marginTop,marginRight,marginBottom,marginLeft")}),he("padding",{parser:Ue("paddingTop,paddingRight,paddingBottom,paddingLeft")}),he("clip",{defaultValue:"rect(0px,0px,0px,0px)",parser:function(y,S,D,I,R,z){var U,k,$;return we<9?(k=y.currentStyle,$=we<8?" ":",",U="rect("+k.clipTop+$+k.clipRight+$+k.clipBottom+$+k.clipLeft+")",S=this.format(S).split(",").join($)):(U=this.format(j(y,this.p,r,!1,this.dflt)),S=this.format(S)),this.parseComplex(y.style,U,S,R,z)}}),he("textShadow",{defaultValue:"0px 0px 0px #999",color:!0,multi:!0}),he("autoRound,strictUnits",{parser:function(y,S,D,I,R){return R}}),he("border",{defaultValue:"0px solid #000",parser:function(y,S,D,I,R,z){var U=j(y,"borderTopWidth",r,!1,"0px"),k=this.format(S).split(" "),$=k[0].replace(c,"");return $!=="px"&&(U=parseFloat(U)/ue(y,"borderTopWidth",1,$)+$),this.parseComplex(y.style,this.format(U+" "+j(y,"borderTopStyle",r,!1,"solid")+" "+j(y,"borderTopColor",r,!1,"#000")),k.join(" "),R,z)},color:!0,formatter:function(y){var S=y.split(" ");return S[0]+" "+(S[1]||"solid")+" "+(y.match(ye)||["#000"])[0]}}),he("borderWidth",{parser:Ue("borderTopWidth,borderRightWidth,borderBottomWidth,borderLeftWidth")}),he("float,cssFloat,styleFloat",{parser:function(y,S,D,I,R,z){var U=y.style,k="cssFloat"in U?"cssFloat":"styleFloat";return new $e(U,k,0,0,R,-1,D,!1,0,U[k],S)}});var Vo=function(y){var S=this.t,D=S.filter||j(this.data,"filter")||"",I=this.s+this.c*y|0,R;I===100&&(D.indexOf("atrix(")===-1&&D.indexOf("radient(")===-1&&D.indexOf("oader(")===-1?(S.removeAttribute("filter"),R=!j(this.data,"filter")):(S.filter=D.replace(x,""),R=!0)),R||(this.xn1&&(S.filter=D=D||"alpha(opacity="+I+")"),D.indexOf("pacity")===-1?(I!==0||!this.xn1)&&(S.filter=D+" alpha(opacity="+I+")"):S.filter=D.replace(m,"opacity="+I))};he("opacity,alpha,autoAlpha",{defaultValue:"1",parser:function(y,S,D,I,R,z){var U=parseFloat(j(y,"opacity",r,!1,"1")),k=y.style,$=D==="autoAlpha";return typeof S=="string"&&S.charAt(1)==="="&&(S=(S.charAt(0)==="-"?-1:1)*parseFloat(S.substr(2))+U),$&&U===1&&j(y,"visibility",r)==="hidden"&&S!==0&&(U=0),Ie?R=new $e(k,"opacity",U,S-U,R):(R=new $e(k,"opacity",U*100,(S-U)*100,R),R.xn1=$?1:0,k.zoom=1,R.type=2,R.b="alpha(opacity="+R.s+")",R.e="alpha(opacity="+(R.s+R.c)+")",R.data=y,R.plugin=z,R.setRatio=Vo),$&&(R=new $e(k,"visibility",0,0,R,-1,null,!1,0,U!==0?"inherit":"hidden",S===0?"hidden":"inherit"),R.xs0="inherit",I._overwriteProps.push(R.n),I._overwriteProps.push(D)),R}});var rr=function(y,S){S&&(y.removeProperty?((S.substr(0,2)==="ms"||S.substr(0,6)==="webkit")&&(S="-"+S),y.removeProperty(S.replace(h,"-$1").toLowerCase())):y.removeAttribute(S))},N=function(y){if(this.t._gsClassPT=this,y===1||y===0){this.t.setAttribute("class",y===0?this.b:this.e);for(var S=this.data,D=this.t.style;S;)S.v?D[S.p]=S.v:rr(D,S.p),S=S._next;y===1&&this.t._gsClassPT===this&&(this.t._gsClassPT=null)}else this.t.getAttribute("class")!==this.e&&this.t.setAttribute("class",this.e)};he("className",{parser:function(y,S,D,I,R,z,U){var k=y.getAttribute("class")||"",$=y.style.cssText,ce,ie,be,fe,J;if(R=I._classNamePT=new $e(y,D,0,0,R,2),R.setRatio=N,R.pr=-11,n=!0,R.b=k,ie=Me(y,r),be=y._gsClassPT,be){for(fe={},J=be.data;J;)fe[J.p]=1,J=J._next;be.setRatio(1)}return y._gsClassPT=R,R.e=S.charAt(1)!=="="?S:k.replace(new RegExp("(?:\\s|^)"+S.substr(2)+"(?![\\w-])"),"")+(S.charAt(0)==="+"?" "+S.substr(2):""),y.setAttribute("class",R.e),ce=Se(y,ie,Me(y),U,fe),y.setAttribute("class",k),R.data=ce.firstMPT,y.style.cssText=$,R=R.xfirst=I.parse(y,ce.difs,R,z),R}});var ae=function(y){if((y===1||y===0)&&this.data._totalTime===this.data._totalDuration&&this.data.data!=="isFromStart"){var S=this.t.style,D=a.transform.parse,I,R,z,U,k;if(this.e==="all")S.cssText="",U=!0;else for(I=this.e.split(" ").join("").split(","),z=I.length;--z>-1;)R=I[z],a[R]&&(a[R].parse===D?U=!0:R=R==="transformOrigin"?Tt:a[R].p),rr(S,R);U&&(rr(S,ke),k=this.t._gsTransform,k&&(k.svg&&(this.t.removeAttribute("data-svg-origin"),this.t.removeAttribute("transform")),delete this.t._gsTransform))}};for(he("clearProps",{parser:function(y,S,D,I,R){return R=new $e(y,D,0,0,R,2),R.setRatio=ae,R.e=S,R.pr=-10,R.data=I._tween,n=!0,R}}),o="bezier,throwProps,physicsProps,physics2D".split(","),ee=o.length;ee--;)Pe(o[ee]);o=t.prototype,o._firstPT=o._lastParsedTransform=o._transform=null,o._onInitTween=function(y,S,D,I){if(!y.nodeType)return!1;this._target=_e=y,this._tween=D,this._vars=S,Ce=I,Fe=S.autoRound,n=!1,i=S.suffixMap||t.suffixMap,r=H(y,""),s=this._overwriteProps;var R=y.style,z,U,k,$,ce,ie,be,fe,J;if(ze&&R.zIndex===""&&(z=j(y,"zIndex",r),(z==="auto"||z==="")&&this._addLazySet(R,"zIndex",0)),typeof S=="string"&&($=R.cssText,z=Me(y,r),R.cssText=$+";"+S,z=Se(y,z,Me(y)).difs,!Ie&&p.test(S)&&(z.opacity=parseFloat(RegExp.$1)),S=z,R.cssText=$),S.className?this._firstPT=U=a.className.parse(y,S.className,"className",this,null,null,S):this._firstPT=U=this.parse(y,S,null),this._transformType){for(J=this._transformType===3,ke?Ze&&(ze=!0,R.zIndex===""&&(be=j(y,"zIndex",r),(be==="auto"||be==="")&&this._addLazySet(R,"zIndex",0)),ge&&this._addLazySet(R,"WebkitBackfaceVisibility",this._vars.WebkitBackfaceVisibility||(J?"visible":"hidden"))):R.zoom=1,k=U;k&&k._next;)k=k._next;fe=new $e(y,"transform",0,0,null,2),this._linkCSSP(fe,null,k),fe.setRatio=ke?Ho:ma,fe.data=this._transform||Ai(y,r,!0),fe.tween=D,fe.pr=-1,s.pop()}if(n){for(;U;){for(ie=U._next,k=$;k&&k.pr>U.pr;)k=k._next;(U._prev=k?k._prev:ce)?U._prev._next=U:$=U,(U._next=k)?k._prev=U:ce=U,U=ie}this._firstPT=$}return!0},o.parse=function(y,S,D,I){var R=y.style,z,U,k,$,ce,ie,be,fe,J,Oe;for(z in S){if(ie=S[z],typeof ie=="function"&&(ie=ie(Ce,_e)),U=a[z],U)D=U.parse(y,ie,z,this,D,I,S);else if(z.substr(0,2)==="--"){this._tween._propLookup[z]=this._addTween.call(this._tween,y.style,"setProperty",H(y).getPropertyValue(z)+"",ie+"",z,!1,z);continue}else ce=j(y,z,r)+"",J=typeof ie=="string",z==="color"||z==="fill"||z==="stroke"||z.indexOf("Color")!==-1||J&&_.test(ie)?(J||(ie=Te(ie),ie=(ie.length>3?"rgba(":"rgb(")+ie.join(",")+")"),D=rt(R,z,ce,ie,!0,"transparent",D,0,I)):J&&Y.test(ie)?D=rt(R,z,ce,ie,!0,null,D,0,I):(k=parseFloat(ce),be=k||k===0?ce.substr((k+"").length):"",(ce===""||ce==="auto")&&(z==="width"||z==="height"?(k=T(y,z,r),be="px"):z==="left"||z==="top"?(k=le(y,z,r),be="px"):(k=z!=="opacity"?0:1,be="")),Oe=J&&ie.charAt(1)==="=",Oe?($=parseInt(ie.charAt(0)+"1",10),ie=ie.substr(2),$*=parseFloat(ie),fe=ie.replace(c,"")):($=parseFloat(ie),fe=J?ie.replace(c,""):""),fe===""&&(fe=z in i?i[z]:be),ie=$||$===0?(Oe?$+k:$)+fe:S[z],be!==fe&&(fe!==""||z==="lineHeight")&&($||$===0)&&k&&(k=ue(y,z,k,be),fe==="%"?(k/=ue(y,z,100,"%")/100,S.strictUnits!==!0&&(ce=k+"%")):fe==="em"||fe==="rem"||fe==="vw"||fe==="vh"?k/=ue(y,z,1,fe):fe!=="px"&&($=ue(y,z,$,fe),fe="px"),Oe&&($||$===0)&&(ie=$+k+fe)),Oe&&($+=k),(k||k===0)&&($||$===0)?(D=new $e(R,z,k,$-k,D,0,z,Fe!==!1&&(fe==="px"||z==="zIndex"),0,ce,ie),D.xs0=fe):R[z]===void 0||!ie&&(ie+""=="NaN"||ie==null)?xe("invalid "+z+" tween value: "+S[z]):(D=new $e(R,z,$||k||0,0,D,-1,z,!1,0,ce,ie),D.xs0=ie==="none"&&(z==="display"||z.indexOf("Style")!==-1)?ce:ie));I&&D&&!D.plugin&&(D.plugin=I)}return D},o.setRatio=function(y){var S=this._firstPT,D=1e-6,I,R,z;if(y===1&&(this._tween._time===this._tween._duration||this._tween._time===0))for(;S;){if(S.type!==2)if(S.r&&S.type!==-1){if(I=S.r(S.s+S.c),!S.type)S.t[S.p]=I+S.xs0;else if(S.type===1){for(z=S.l,R=S.xs0+I+S.xs1,z=1;z<S.l;z++)R+=S["xn"+z]+S["xs"+(z+1)];S.t[S.p]=R}}else S.t[S.p]=S.e;else S.setRatio(y);S=S._next}else if(y||!(this._tween._time===this._tween._duration||this._tween._time===0)||this._tween._rawPrevTime===-1e-6)for(;S;){if(I=S.c*y+S.s,S.r?I=S.r(I):I<D&&I>-D&&(I=0),!S.type)S.t[S.p]=I+S.xs0;else if(S.type===1)if(z=S.l,z===2)S.t[S.p]=S.xs0+I+S.xs1+S.xn1+S.xs2;else if(z===3)S.t[S.p]=S.xs0+I+S.xs1+S.xn1+S.xs2+S.xn2+S.xs3;else if(z===4)S.t[S.p]=S.xs0+I+S.xs1+S.xn1+S.xs2+S.xn2+S.xs3+S.xn3+S.xs4;else if(z===5)S.t[S.p]=S.xs0+I+S.xs1+S.xn1+S.xs2+S.xn2+S.xs3+S.xn3+S.xs4+S.xn4+S.xs5;else{for(R=S.xs0+I+S.xs1,z=1;z<S.l;z++)R+=S["xn"+z]+S["xs"+(z+1)];S.t[S.p]=R}else S.type===-1?S.t[S.p]=S.xs0:S.setRatio&&S.setRatio(y);S=S._next}else for(;S;)S.type!==2?S.t[S.p]=S.b:S.setRatio(y),S=S._next},o._enableTransforms=function(y){this._transform=this._transform||Ai(this._target,r,!0),this._transformType=!(this._transform.svg&&Gt)&&(y||this._transformType===3)?3:2};var pe=function(y){this.t[this.p]=this.e,this.data._linkCSSP(this,this._next,null,!0)};o._addLazySet=function(y,S,D){var I=this._firstPT=new $e(y,S,0,0,this._firstPT,2);I.e=D,I.setRatio=pe,I.data=this},o._linkCSSP=function(y,S,D,I){return y&&(S&&(S._prev=y),y._next&&(y._next._prev=y._prev),y._prev?y._prev._next=y._next:this._firstPT===y&&(this._firstPT=y._next,I=!0),D?D._next=y:!I&&this._firstPT===null&&(this._firstPT=y),y._next=S,y._prev=D),y},o._mod=function(y){for(var S=this._firstPT;S;)typeof y[S.p]=="function"&&(S.r=y[S.p]),S=S._next},o._kill=function(y){var S=y,D,I,R;if(y.autoAlpha||y.alpha){S={};for(I in y)S[I]=y[I];S.opacity=1,S.autoAlpha&&(S.visibility=1)}for(y.className&&(D=this._classNamePT)&&(R=D.xfirst,R&&R._prev?this._linkCSSP(R._prev,D._next,R._prev._prev):R===this._firstPT&&(this._firstPT=D._next),D._next&&this._linkCSSP(D._next,D._next._next,R._prev),this._classNamePT=null),D=this._firstPT;D;)D.plugin&&D.plugin!==I&&D.plugin._kill&&(D.plugin._kill(y),I=D.plugin),D=D._next;return Va.prototype._kill.call(this,S)};var me=function(y,S,D){var I,R,z,U;if(y.slice){for(R=y.length;--R>-1;)me(y[R],S,D);return}for(I=y.childNodes,R=I.length;--R>-1;)z=I[R],U=z.type,z.style&&(S.push(Me(z)),D&&D.push(z)),(U===1||U===9||U===11)&&z.childNodes.length&&me(z,S,D)};return t.cascadeTo=function(y,S,D){var I=lt.to(y,S,D),R=[I],z=[],U=[],k=[],$=lt._internals.reservedProps,ce,ie,be,fe;for(y=I._targets||I.target,me(y,z,k),I.render(S,!0,!0),me(y,U),I.render(0,!0,!0),I._enabled(!0),ce=k.length;--ce>-1;)if(ie=Se(k[ce],z[ce],U[ce]),ie.firstMPT){ie=ie.difs;for(be in D)$[be]&&(ie[be]=D[be]);fe={};for(be in ie)fe[be]=z[ce][be];R.push(lt.fromTo(k[ce],S,fe,ie))}return R},Va.activate([t]),t},!0);var jb=Ot.CSSPlugin;/*!
 * VERSION: 0.6.1
 * DATE: 2018-08-27
 * UPDATES AND DOCS AT: http://greensock.com
 *
 * @license Copyright (c) 2008-2018, GreenSock. All rights reserved.
 * This work is subject to the terms at http://greensock.com/standard-license or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 * 
 * @author: Jack Doyle, jack@greensock.com
 */var qb=Ut._gsDefine.plugin({propName:"attr",API:2,version:"0.6.1",init:function(t,e,n,i){var r,s;if(typeof t.setAttribute!="function")return!1;for(r in e)s=e[r],typeof s=="function"&&(s=s(i,t)),this._addTween(t,"setAttribute",t.getAttribute(r)+"",s+"",r,!1,r),this._overwriteProps.push(r);return!0}});/*!
 * VERSION: 1.6.0
 * DATE: 2018-08-27
 * UPDATES AND DOCS AT: http://greensock.com
 *
 * @license Copyright (c) 2008-2018, GreenSock. All rights reserved.
 * This work is subject to the terms at http://greensock.com/standard-license or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 * 
 * @author: Jack Doyle, jack@greensock.com
 **/var Kp=Ut._gsDefine.plugin({propName:"roundProps",version:"1.7.0",priority:-1,API:2,init:function(t,e,n){return this._tween=n,!0}}),Yb=function(t){var e=t<1?Math.pow(10,(t+"").length-2):1;return function(n){return(Math.round(n/t)*t*e|0)/e}},$b=function(t,e){for(;t;)!t.f&&!t.blob&&(t.m=e||Math.round),t=t._next},Zp=Kp.prototype;Zp._onInitAllProps=function(){var t=this._tween,e=t.vars.roundProps,n={},i=t._propLookup.roundProps,r,s,a,o;if(typeof e=="object"&&!e.push)for(o in e)n[o]=Yb(e[o]);else for(typeof e=="string"&&(e=e.split(",")),a=e.length;--a>-1;)n[e[a]]=Math.round;for(o in n)for(r=t._firstPT;r;)s=r._next,r.pg?r.t._mod(n):r.n===o&&(r.f===2&&r.t?$b(r.t._firstPT,n[o]):(this._add(r.t,o,r.s,r.c,n[o]),s&&(s._prev=r._prev),r._prev?r._prev._next=s:t._firstPT===r&&(t._firstPT=s),r._next=r._prev=null,t._propLookup[o]=i)),r=s;return!1};Zp._add=function(t,e,n,i,r){this._addTween(t,e,n,n+i,e,r||Math.round),this._overwriteProps.push(e)};/*!
 * VERSION: 0.3.1
 * DATE: 2018-08-27
 * UPDATES AND DOCS AT: http://greensock.com
 *
 * @license Copyright (c) 2008-2018, GreenSock. All rights reserved.
 * This work is subject to the terms at http://greensock.com/standard-license or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 * 
 * @author: Jack Doyle, jack@greensock.com
 **/var Jp=Ut._gsDefine.plugin({propName:"directionalRotation",version:"0.3.1",API:2,init:function(t,e,n,i){typeof e!="object"&&(e={rotation:e}),this.finals={};var r=e.useRadians===!0?Math.PI*2:360,s=1e-6,a,o,l,u,f,d;for(a in e)a!=="useRadians"&&(u=e[a],typeof u=="function"&&(u=u(i,t)),d=(u+"").split("_"),o=d[0],l=parseFloat(typeof t[a]!="function"?t[a]:t[a.indexOf("set")||typeof t["get"+a.substr(3)]!="function"?a:"get"+a.substr(3)]()),u=this.finals[a]=typeof o=="string"&&o.charAt(1)==="="?l+parseInt(o.charAt(0)+"1",10)*Number(o.substr(2)):Number(o)||0,f=u-l,d.length&&(o=d.join("_"),o.indexOf("short")!==-1&&(f=f%r,f!==f%(r/2)&&(f=f<0?f+r:f-r)),o.indexOf("_cw")!==-1&&f<0?f=(f+r*9999999999)%r-(f/r|0)*r:o.indexOf("ccw")!==-1&&f>0&&(f=(f-r*9999999999)%r-(f/r|0)*r)),(f>s||f<-s)&&(this._addTween(t,a,l,l+f,a),this._overwriteProps.push(a)));return!0},set:function(t){var e;if(t!==1)this._super.setRatio.call(this,t);else for(e=this._firstPT;e;)e.f?e.t[e.p](this.finals[e.p]):e.t[e.p]=this.finals[e.p],e=e._next}});Jp._autoCSS=!0;/*!
 * VERSION: 2.0.2
 * DATE: 2018-08-27
 * UPDATES AND DOCS AT: http://greensock.com
 *
 * @license Copyright (c) 2008-2018, GreenSock. All rights reserved.
 * This work is subject to the terms at http://greensock.com/standard-license or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 * 
 * @author: Jack Doyle, jack@greensock.com
 */Ut._gsDefine("TimelineLite",["core.Animation","core.SimpleTimeline","TweenLite"],function(){var t=function(p){Mr.call(this,p),this._labels={},this.autoRemoveChildren=this.vars.autoRemoveChildren===!0,this.smoothChildTiming=this.vars.smoothChildTiming===!0,this._sortChildren=!0,this._onUpdate=this.vars.onUpdate;var x=this.vars,_,h;for(h in x)_=x[h],s(_)&&_.join("").indexOf("{self}")!==-1&&(x[h]=this._swapSelfInParams(_));s(x.tweens)&&this.add(x.tweens,0,x.align,x.stagger)},e=1e-10,n=lt._internals,i=t._internals={},r=n.isSelector,s=n.isArray,a=n.lazyTweens,o=n.lazyRender,l=Ut._gsDefine.globals,u=function(p){var x={},_;for(_ in p)x[_]=p[_];return x},f=function(p,x,_){var h=p.cycle,b,M;for(b in h)M=h[b],p[b]=typeof M=="function"?M(_,x[_]):M[_%M.length];delete p.cycle},d=i.pauseCallback=function(){},c=function(p){var x=[],_=p.length,h;for(h=0;h!==_;x.push(p[h++]));return x},m=t.prototype=new Mr;return t.version="2.0.2",m.constructor=t,m.kill()._gc=m._forcingPlayhead=m._hasPause=!1,m.to=function(p,x,_,h){var b=_.repeat&&l.TweenMax||lt;return x?this.add(new b(p,x,_),h):this.set(p,_,h)},m.from=function(p,x,_,h){return this.add((_.repeat&&l.TweenMax||lt).from(p,x,_),h)},m.fromTo=function(p,x,_,h,b){var M=h.repeat&&l.TweenMax||lt;return x?this.add(M.fromTo(p,x,_,h),b):this.set(p,h,b)},m.staggerTo=function(p,x,_,h,b,M,A,G){var L=new t({onComplete:M,onCompleteParams:A,callbackScope:G,smoothChildTiming:this.smoothChildTiming}),B=_.cycle,X,Y;for(typeof p=="string"&&(p=lt.selector(p)||p),p=p||[],r(p)&&(p=c(p)),h=h||0,h<0&&(p=c(p),p.reverse(),h*=-1),Y=0;Y<p.length;Y++)X=u(_),X.startAt&&(X.startAt=u(X.startAt),X.startAt.cycle&&f(X.startAt,p,Y)),B&&(f(X,p,Y),X.duration!=null&&(x=X.duration,delete X.duration)),L.to(p[Y],x,X,Y*h);return this.add(L,b)},m.staggerFrom=function(p,x,_,h,b,M,A,G){return _.immediateRender=_.immediateRender!=!1,_.runBackwards=!0,this.staggerTo(p,x,_,h,b,M,A,G)},m.staggerFromTo=function(p,x,_,h,b,M,A,G,L){return h.startAt=_,h.immediateRender=h.immediateRender!=!1&&_.immediateRender!=!1,this.staggerTo(p,x,h,b,M,A,G,L)},m.call=function(p,x,_,h){return this.add(lt.delayedCall(0,p,x,_),h)},m.set=function(p,x,_){return _=this._parseTimeOrLabel(_,0,!0),x.immediateRender==null&&(x.immediateRender=_===this._time&&!this._paused),this.add(new lt(p,0,x),_)},t.exportRoot=function(p,x){p=p||{},p.smoothChildTiming==null&&(p.smoothChildTiming=!0);var _=new t(p),h=_._timeline,b,M,A,G;for(x==null&&(x=!0),h._remove(_,!0),_._startTime=0,_._rawPrevTime=_._time=_._totalTime=h._time,A=h._first;A;)G=A._next,(!x||!(A instanceof lt&&A.target===A.vars.onComplete))&&(M=A._startTime-A._delay,M<0&&(b=1),_.add(A,M)),A=G;return h.add(_,0),b&&_.totalDuration(),_},m.add=function(p,x,_,h){var b,M,A,G,L,B;if(typeof x!="number"&&(x=this._parseTimeOrLabel(x,0,!0,p)),!(p instanceof en))if(p instanceof Array||p&&p.push&&s(p)){for(_=_||"normal",h=h||0,b=x,M=p.length,A=0;A<M;A++)s(G=p[A])&&(G=new t({tweens:G})),this.add(G,b),typeof G!="string"&&typeof G!="function"&&(_==="sequence"?b=G._startTime+G.totalDuration()/G._timeScale:_==="start"&&(G._startTime-=G.delay())),b+=h;return this._uncache(!0)}else{if(typeof p=="string")return this.addLabel(p,x);if(typeof p=="function")p=lt.delayedCall(0,p);else throw"Cannot add "+p+" into the timeline; it is not a tween, timeline, function, or string."}if(Mr.prototype.add.call(this,p,x),p._time&&(b=Math.max(0,Math.min(p.totalDuration(),(this.rawTime()-p._startTime)*p._timeScale)),Math.abs(b-p._totalTime)>1e-5&&p.render(b,!1,!1)),(this._gc||this._time===this._duration)&&!this._paused&&this._duration<this.duration())for(L=this,B=L.rawTime()>p._startTime;L._timeline;)B&&L._timeline.smoothChildTiming?L.totalTime(L._totalTime,!0):L._gc&&L._enabled(!0,!1),L=L._timeline;return this},m.remove=function(p){if(p instanceof en){this._remove(p,!1);var x=p._timeline=p.vars.useFrames?en._rootFramesTimeline:en._rootTimeline;return p._startTime=(p._paused?p._pauseTime:x._time)-(p._reversed?p.totalDuration()-p._totalTime:p._totalTime)/p._timeScale,this}else if(p instanceof Array||p&&p.push&&s(p)){for(var _=p.length;--_>-1;)this.remove(p[_]);return this}else if(typeof p=="string")return this.removeLabel(p);return this.kill(null,p)},m._remove=function(p,x){Mr.prototype._remove.call(this,p,x);var _=this._last;return _?this._time>this.duration()&&(this._time=this._duration,this._totalTime=this._totalDuration):this._time=this._totalTime=this._duration=this._totalDuration=0,this},m.append=function(p,x){return this.add(p,this._parseTimeOrLabel(null,x,!0,p))},m.insert=m.insertMultiple=function(p,x,_,h){return this.add(p,x||0,_,h)},m.appendMultiple=function(p,x,_,h){return this.add(p,this._parseTimeOrLabel(null,x,!0,p),_,h)},m.addLabel=function(p,x){return this._labels[p]=this._parseTimeOrLabel(x),this},m.addPause=function(p,x,_,h){var b=lt.delayedCall(0,d,_,h||this);return b.vars.onComplete=b.vars.onReverseComplete=x,b.data="isPause",this._hasPause=!0,this.add(b,p)},m.removeLabel=function(p){return delete this._labels[p],this},m.getLabelTime=function(p){return this._labels[p]!=null?this._labels[p]:-1},m._parseTimeOrLabel=function(p,x,_,h){var b,M;if(h instanceof en&&h.timeline===this)this.remove(h);else if(h&&(h instanceof Array||h.push&&s(h)))for(M=h.length;--M>-1;)h[M]instanceof en&&h[M].timeline===this&&this.remove(h[M]);if(b=typeof p=="number"&&!x?0:this.duration()>99999999999?this.recent().endTime(!1):this._duration,typeof x=="string")return this._parseTimeOrLabel(x,_&&typeof p=="number"&&this._labels[x]==null?p-b:0,_);if(x=x||0,typeof p=="string"&&(isNaN(p)||this._labels[p]!=null)){if(M=p.indexOf("="),M===-1)return this._labels[p]==null?_?this._labels[p]=b+x:x:this._labels[p]+x;x=parseInt(p.charAt(M-1)+"1",10)*Number(p.substr(M+1)),p=M>1?this._parseTimeOrLabel(p.substr(0,M-1),0,_):b}else p==null&&(p=b);return Number(p)+x},m.seek=function(p,x){return this.totalTime(typeof p=="number"?p:this._parseTimeOrLabel(p),x!==!1)},m.stop=function(){return this.paused(!0)},m.gotoAndPlay=function(p,x){return this.play(p,x)},m.gotoAndStop=function(p,x){return this.pause(p,x)},m.render=function(p,x,_){this._gc&&this._enabled(!0,!1);var h=this._time,b=this._dirty?this.totalDuration():this._totalDuration,M=this._startTime,A=this._timeScale,G=this._paused,L,B,X,Y,E,C,V;if(h!==this._time&&(p+=this._time-h),p>=b-1e-7&&p>=0)this._totalTime=this._time=b,this._reversed||this._hasPausedChild()||(B=!0,Y="onComplete",E=!!this._timeline.autoRemoveChildren,this._duration===0&&(p<=0&&p>=-1e-7||this._rawPrevTime<0||this._rawPrevTime===e)&&this._rawPrevTime!==p&&this._first&&(E=!0,this._rawPrevTime>e&&(Y="onReverseComplete"))),this._rawPrevTime=this._duration||!x||p||this._rawPrevTime===p?p:e,p=b+1e-4;else if(p<1e-7)if(this._totalTime=this._time=0,(h!==0||this._duration===0&&this._rawPrevTime!==e&&(this._rawPrevTime>0||p<0&&this._rawPrevTime>=0))&&(Y="onReverseComplete",B=this._reversed),p<0)this._active=!1,this._timeline.autoRemoveChildren&&this._reversed?(E=B=!0,Y="onReverseComplete"):this._rawPrevTime>=0&&this._first&&(E=!0),this._rawPrevTime=p;else{if(this._rawPrevTime=this._duration||!x||p||this._rawPrevTime===p?p:e,p===0&&B)for(L=this._first;L&&L._startTime===0;)L._duration||(B=!1),L=L._next;p=0,this._initted||(E=!0)}else{if(this._hasPause&&!this._forcingPlayhead&&!x){if(p>=h)for(L=this._first;L&&L._startTime<=p&&!C;)L._duration||L.data==="isPause"&&!L.ratio&&!(L._startTime===0&&this._rawPrevTime===0)&&(C=L),L=L._next;else for(L=this._last;L&&L._startTime>=p&&!C;)L._duration||L.data==="isPause"&&L._rawPrevTime>0&&(C=L),L=L._prev;C&&(this._time=p=C._startTime,this._totalTime=p+this._cycle*(this._totalDuration+this._repeatDelay))}this._totalTime=this._time=this._rawPrevTime=p}if(!((this._time===h||!this._first)&&!_&&!E&&!C)){if(this._initted||(this._initted=!0),this._active||!this._paused&&this._time!==h&&p>0&&(this._active=!0),h===0&&this.vars.onStart&&(this._time!==0||!this._duration)&&(x||this._callback("onStart")),V=this._time,V>=h)for(L=this._first;L&&(X=L._next,!(V!==this._time||this._paused&&!G));)(L._active||L._startTime<=V&&!L._paused&&!L._gc)&&(C===L&&this.pause(),L._reversed?L.render((L._dirty?L.totalDuration():L._totalDuration)-(p-L._startTime)*L._timeScale,x,_):L.render((p-L._startTime)*L._timeScale,x,_)),L=X;else for(L=this._last;L&&(X=L._prev,!(V!==this._time||this._paused&&!G));){if(L._active||L._startTime<=h&&!L._paused&&!L._gc){if(C===L){for(C=L._prev;C&&C.endTime()>this._time;)C.render(C._reversed?C.totalDuration()-(p-C._startTime)*C._timeScale:(p-C._startTime)*C._timeScale,x,_),C=C._prev;C=null,this.pause()}L._reversed?L.render((L._dirty?L.totalDuration():L._totalDuration)-(p-L._startTime)*L._timeScale,x,_):L.render((p-L._startTime)*L._timeScale,x,_)}L=X}this._onUpdate&&(x||(a.length&&o(),this._callback("onUpdate"))),Y&&(this._gc||(M===this._startTime||A!==this._timeScale)&&(this._time===0||b>=this.totalDuration())&&(B&&(a.length&&o(),this._timeline.autoRemoveChildren&&this._enabled(!1,!1),this._active=!1),!x&&this.vars[Y]&&this._callback(Y)))}},m._hasPausedChild=function(){for(var p=this._first;p;){if(p._paused||p instanceof t&&p._hasPausedChild())return!0;p=p._next}return!1},m.getChildren=function(p,x,_,h){h=h||-9999999999;for(var b=[],M=this._first,A=0;M;)M._startTime<h||(M instanceof lt?x!==!1&&(b[A++]=M):(_!==!1&&(b[A++]=M),p!==!1&&(b=b.concat(M.getChildren(!0,x,_)),A=b.length))),M=M._next;return b},m.getTweensOf=function(p,x){var _=this._gc,h=[],b=0,M,A;for(_&&this._enabled(!0,!0),M=lt.getTweensOf(p),A=M.length;--A>-1;)(M[A].timeline===this||x&&this._contains(M[A]))&&(h[b++]=M[A]);return _&&this._enabled(!1,!0),h},m.recent=function(){return this._recent},m._contains=function(p){for(var x=p.timeline;x;){if(x===this)return!0;x=x.timeline}return!1},m.shiftChildren=function(p,x,_){_=_||0;for(var h=this._first,b=this._labels,M;h;)h._startTime>=_&&(h._startTime+=p),h=h._next;if(x)for(M in b)b[M]>=_&&(b[M]+=p);return this._uncache(!0)},m._kill=function(p,x){if(!p&&!x)return this._enabled(!1,!1);for(var _=x?this.getTweensOf(x):this.getChildren(!0,!0,!1),h=_.length,b=!1;--h>-1;)_[h]._kill(p,x)&&(b=!0);return b},m.clear=function(p){var x=this.getChildren(!1,!0,!0),_=x.length;for(this._time=this._totalTime=0;--_>-1;)x[_]._enabled(!1,!1);return p!==!1&&(this._labels={}),this._uncache(!0)},m.invalidate=function(){for(var p=this._first;p;)p.invalidate(),p=p._next;return en.prototype.invalidate.call(this)},m._enabled=function(p,x){if(p===this._gc)for(var _=this._first;_;)_._enabled(p,!0),_=_._next;return Mr.prototype._enabled.call(this,p,x)},m.totalTime=function(p,x,_){this._forcingPlayhead=!0;var h=en.prototype.totalTime.apply(this,arguments);return this._forcingPlayhead=!1,h},m.duration=function(p){return arguments.length?(this.duration()!==0&&p!==0&&this.timeScale(this._duration/p),this):(this._dirty&&this.totalDuration(),this._duration)},m.totalDuration=function(p){if(!arguments.length){if(this._dirty){for(var x=0,_=this._last,h=999999999999,b,M;_;)b=_._prev,_._dirty&&_.totalDuration(),_._startTime>h&&this._sortChildren&&!_._paused&&!this._calculatingDuration?(this._calculatingDuration=1,this.add(_,_._startTime-_._delay),this._calculatingDuration=0):h=_._startTime,_._startTime<0&&!_._paused&&(x-=_._startTime,this._timeline.smoothChildTiming&&(this._startTime+=_._startTime/this._timeScale,this._time-=_._startTime,this._totalTime-=_._startTime,this._rawPrevTime-=_._startTime),this.shiftChildren(-_._startTime,!1,-9999999999),h=0),M=_._startTime+_._totalDuration/_._timeScale,M>x&&(x=M),_=b;this._duration=this._totalDuration=x,this._dirty=!1}return this._totalDuration}return p&&this.totalDuration()?this.timeScale(this._totalDuration/p):this},m.paused=function(p){if(!p)for(var x=this._first,_=this._time;x;)x._startTime===_&&x.data==="isPause"&&(x._rawPrevTime=0),x=x._next;return en.prototype.paused.apply(this,arguments)},m.usesFrames=function(){for(var p=this._timeline;p._timeline;)p=p._timeline;return p===en._rootFramesTimeline},m.rawTime=function(p){return p&&(this._paused||this._repeat&&this.time()>0&&this.totalProgress()<1)?this._totalTime%(this._duration+this._repeatDelay):this._paused?this._totalTime:(this._timeline.rawTime(p)-this._startTime)*this._timeScale},t},!0);var gr=Ot.TimelineLite;/*!
 * VERSION: 2.0.2
 * DATE: 2018-08-27
 * UPDATES AND DOCS AT: http://greensock.com
 *
 * @license Copyright (c) 2008-2018, GreenSock. All rights reserved.
 * This work is subject to the terms at http://greensock.com/standard-license or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 * 
 * @author: Jack Doyle, jack@greensock.com
 */Ut._gsDefine("TimelineMax",["TimelineLite","TweenLite","easing.Ease"],function(){var t=function(l){gr.call(this,l),this._repeat=this.vars.repeat||0,this._repeatDelay=this.vars.repeatDelay||0,this._cycle=0,this._yoyo=this.vars.yoyo===!0,this._dirty=!0},e=1e-10,n=lt._internals,i=n.lazyTweens,r=n.lazyRender,s=Ut._gsDefine.globals,a=new tn(null,null,1,0),o=t.prototype=new gr;return o.constructor=t,o.kill()._gc=!1,t.version="2.0.2",o.invalidate=function(){return this._yoyo=this.vars.yoyo===!0,this._repeat=this.vars.repeat||0,this._repeatDelay=this.vars.repeatDelay||0,this._uncache(!0),gr.prototype.invalidate.call(this)},o.addCallback=function(l,u,f,d){return this.add(lt.delayedCall(0,l,f,d),u)},o.removeCallback=function(l,u){if(l)if(u==null)this._kill(null,l);else for(var f=this.getTweensOf(l,!1),d=f.length,c=this._parseTimeOrLabel(u);--d>-1;)f[d]._startTime===c&&f[d]._enabled(!1,!1);return this},o.removePause=function(l){return this.removeCallback(gr._internals.pauseCallback,l)},o.tweenTo=function(l,u){u=u||{};var f={ease:a,useFrames:this.usesFrames(),immediateRender:!1,lazy:!1},d=u.repeat&&s.TweenMax||lt,c,m,p;for(m in u)f[m]=u[m];return f.time=this._parseTimeOrLabel(l),c=Math.abs(Number(f.time)-this._time)/this._timeScale||.001,p=new d(this,c,f),f.onStart=function(){p.target.paused(!0),p.vars.time!==p.target.time()&&c===p.duration()&&!p.isFromTo&&p.duration(Math.abs(p.vars.time-p.target.time())/p.target._timeScale).render(p.time(),!0,!0),u.onStart&&u.onStart.apply(u.onStartScope||u.callbackScope||p,u.onStartParams||[])},p},o.tweenFromTo=function(l,u,f){f=f||{},l=this._parseTimeOrLabel(l),f.startAt={onComplete:this.seek,onCompleteParams:[l],callbackScope:this},f.immediateRender=f.immediateRender!==!1;var d=this.tweenTo(u,f);return d.isFromTo=1,d.duration(Math.abs(d.vars.time-l)/this._timeScale||.001)},o.render=function(l,u,f){this._gc&&this._enabled(!0,!1);var d=this._time,c=this._dirty?this.totalDuration():this._totalDuration,m=this._duration,p=this._totalTime,x=this._startTime,_=this._timeScale,h=this._rawPrevTime,b=this._paused,M=this._cycle,A,G,L,B,X,Y,E,C;if(d!==this._time&&(l+=this._time-d),l>=c-1e-7&&l>=0)this._locked||(this._totalTime=c,this._cycle=this._repeat),this._reversed||this._hasPausedChild()||(G=!0,B="onComplete",X=!!this._timeline.autoRemoveChildren,this._duration===0&&(l<=0&&l>=-1e-7||h<0||h===e)&&h!==l&&this._first&&(X=!0,h>e&&(B="onReverseComplete"))),this._rawPrevTime=this._duration||!u||l||this._rawPrevTime===l?l:e,this._yoyo&&this._cycle&1?this._time=l=0:(this._time=m,l=m+1e-4);else if(l<1e-7)if(this._locked||(this._totalTime=this._cycle=0),this._time=0,(d!==0||m===0&&h!==e&&(h>0||l<0&&h>=0)&&!this._locked)&&(B="onReverseComplete",G=this._reversed),l<0)this._active=!1,this._timeline.autoRemoveChildren&&this._reversed?(X=G=!0,B="onReverseComplete"):h>=0&&this._first&&(X=!0),this._rawPrevTime=l;else{if(this._rawPrevTime=m||!u||l||this._rawPrevTime===l?l:e,l===0&&G)for(A=this._first;A&&A._startTime===0;)A._duration||(G=!1),A=A._next;l=0,this._initted||(X=!0)}else if(m===0&&h<0&&(X=!0),this._time=this._rawPrevTime=l,this._locked||(this._totalTime=l,this._repeat!==0&&(Y=m+this._repeatDelay,this._cycle=this._totalTime/Y>>0,this._cycle!==0&&this._cycle===this._totalTime/Y&&p<=l&&this._cycle--,this._time=this._totalTime-this._cycle*Y,this._yoyo&&this._cycle&1&&(this._time=m-this._time),this._time>m?(this._time=m,l=m+1e-4):this._time<0?this._time=l=0:l=this._time)),this._hasPause&&!this._forcingPlayhead&&!u){if(l=this._time,l>=d||this._repeat&&M!==this._cycle)for(A=this._first;A&&A._startTime<=l&&!E;)A._duration||A.data==="isPause"&&!A.ratio&&!(A._startTime===0&&this._rawPrevTime===0)&&(E=A),A=A._next;else for(A=this._last;A&&A._startTime>=l&&!E;)A._duration||A.data==="isPause"&&A._rawPrevTime>0&&(E=A),A=A._prev;E&&E._startTime<m&&(this._time=l=E._startTime,this._totalTime=l+this._cycle*(this._totalDuration+this._repeatDelay))}if(this._cycle!==M&&!this._locked){var V=this._yoyo&&(M&1)!==0,W=V===(this._yoyo&&(this._cycle&1)!==0),Z=this._totalTime,ne=this._cycle,se=this._rawPrevTime,de=this._time;if(this._totalTime=M*m,this._cycle<M?V=!V:this._totalTime+=m,this._time=d,this._rawPrevTime=m===0?h-1e-4:h,this._cycle=M,this._locked=!0,d=V?0:m,this.render(d,u,m===0),u||this._gc||this.vars.onRepeat&&(this._cycle=ne,this._locked=!1,this._callback("onRepeat")),d!==this._time||(W&&(this._cycle=M,this._locked=!0,d=V?m+1e-4:-1e-4,this.render(d,!0,!1)),this._locked=!1,this._paused&&!b))return;this._time=de,this._totalTime=Z,this._cycle=ne,this._rawPrevTime=se}if((this._time===d||!this._first)&&!f&&!X&&!E){p!==this._totalTime&&this._onUpdate&&(u||this._callback("onUpdate"));return}else this._initted||(this._initted=!0);if(this._active||!this._paused&&this._totalTime!==p&&l>0&&(this._active=!0),p===0&&this.vars.onStart&&(this._totalTime!==0||!this._totalDuration)&&(u||this._callback("onStart")),C=this._time,C>=d)for(A=this._first;A&&(L=A._next,!(C!==this._time||this._paused&&!b));)(A._active||A._startTime<=this._time&&!A._paused&&!A._gc)&&(E===A&&this.pause(),A._reversed?A.render((A._dirty?A.totalDuration():A._totalDuration)-(l-A._startTime)*A._timeScale,u,f):A.render((l-A._startTime)*A._timeScale,u,f)),A=L;else for(A=this._last;A&&(L=A._prev,!(C!==this._time||this._paused&&!b));){if(A._active||A._startTime<=d&&!A._paused&&!A._gc){if(E===A){for(E=A._prev;E&&E.endTime()>this._time;)E.render(E._reversed?E.totalDuration()-(l-E._startTime)*E._timeScale:(l-E._startTime)*E._timeScale,u,f),E=E._prev;E=null,this.pause()}A._reversed?A.render((A._dirty?A.totalDuration():A._totalDuration)-(l-A._startTime)*A._timeScale,u,f):A.render((l-A._startTime)*A._timeScale,u,f)}A=L}this._onUpdate&&(u||(i.length&&r(),this._callback("onUpdate"))),B&&(this._locked||this._gc||(x===this._startTime||_!==this._timeScale)&&(this._time===0||c>=this.totalDuration())&&(G&&(i.length&&r(),this._timeline.autoRemoveChildren&&this._enabled(!1,!1),this._active=!1),!u&&this.vars[B]&&this._callback(B)))},o.getActive=function(l,u,f){l==null&&(l=!0),u==null&&(u=!0),f==null&&(f=!1);var d=[],c=this.getChildren(l,u,f),m=0,p=c.length,x,_;for(x=0;x<p;x++)_=c[x],_.isActive()&&(d[m++]=_);return d},o.getLabelAfter=function(l){l||l!==0&&(l=this._time);var u=this.getLabelsArray(),f=u.length,d;for(d=0;d<f;d++)if(u[d].time>l)return u[d].name;return null},o.getLabelBefore=function(l){l==null&&(l=this._time);for(var u=this.getLabelsArray(),f=u.length;--f>-1;)if(u[f].time<l)return u[f].name;return null},o.getLabelsArray=function(){var l=[],u=0,f;for(f in this._labels)l[u++]={time:this._labels[f],name:f};return l.sort(function(d,c){return d.time-c.time}),l},o.invalidate=function(){return this._locked=!1,gr.prototype.invalidate.call(this)},o.progress=function(l,u){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&this._cycle&1?1-l:l)+this._cycle*(this._duration+this._repeatDelay),u):this._time/this.duration()||0},o.totalProgress=function(l,u){return arguments.length?this.totalTime(this.totalDuration()*l,u):this._totalTime/this.totalDuration()||0},o.totalDuration=function(l){return arguments.length?this._repeat===-1||!l?this:this.timeScale(this.totalDuration()/l):(this._dirty&&(gr.prototype.totalDuration.call(this),this._totalDuration=this._repeat===-1?999999999999:this._duration*(this._repeat+1)+this._repeatDelay*this._repeat),this._totalDuration)},o.time=function(l,u){return arguments.length?(this._dirty&&this.totalDuration(),l>this._duration&&(l=this._duration),this._yoyo&&this._cycle&1?l=this._duration-l+this._cycle*(this._duration+this._repeatDelay):this._repeat!==0&&(l+=this._cycle*(this._duration+this._repeatDelay)),this.totalTime(l,u)):this._time},o.repeat=function(l){return arguments.length?(this._repeat=l,this._uncache(!0)):this._repeat},o.repeatDelay=function(l){return arguments.length?(this._repeatDelay=l,this._uncache(!0)):this._repeatDelay},o.yoyo=function(l){return arguments.length?(this._yoyo=l,this):this._yoyo},o.currentLabel=function(l){return arguments.length?this.seek(l,!0):this.getLabelBefore(this._time+1e-8)},t},!0);var Kb=Ot.TimelineMax;/*!
 * VERSION: 1.3.8
 * DATE: 2018-05-30
 * UPDATES AND DOCS AT: http://greensock.com
 *
 * @license Copyright (c) 2008-2018, GreenSock. All rights reserved.
 * This work is subject to the terms at http://greensock.com/standard-license or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 * 
 * @author: Jack Doyle, jack@greensock.com
 **/var Zb=180/Math.PI,Wi=[],Er=[],vr=[],Ga={},Jb=Ut._gsDefine.globals,cs=function(t,e,n,i){n===i&&(n=i-(i-e)/1e6),t===e&&(e=t+(n-t)/1e6),this.a=t,this.b=e,this.c=n,this.d=i,this.da=i-t,this.ca=n-t,this.ba=e-t},Qb=",x,y,z,left,top,right,bottom,marginTop,marginLeft,marginRight,marginBottom,paddingLeft,paddingTop,paddingRight,paddingBottom,backgroundPosition,backgroundPosition_y,",Vc=function(t,e,n,i){var r={a:t},s={},a={},o={c:i},l=(t+e)/2,u=(e+n)/2,f=(n+i)/2,d=(l+u)/2,c=(u+f)/2,m=(c-d)/8;return r.b=l+(t-l)/4,s.b=d+m,r.c=s.a=(r.b+s.b)/2,s.c=a.a=(d+c)/2,a.b=c-m,o.b=f+(i-f)/4,a.c=o.a=(a.b+o.b)/2,[r,s,a,o]},eT=function(t,e,n,i,r){var s=t.length-1,a=0,o=t[0].a,l,u,f,d,c,m,p,x,_,h,b,M,A;for(l=0;l<s;l++)c=t[a],u=c.a,f=c.d,d=t[a+1].d,r?(b=Wi[l],M=Er[l],A=(M+b)*e*.25/(i?.5:vr[l]||.5),m=f-(f-u)*(i?e*.5:b!==0?A/b:0),p=f+(d-f)*(i?e*.5:M!==0?A/M:0),x=f-(m+((p-m)*(b*3/(b+M)+.5)/4||0))):(m=f-(f-u)*e*.5,p=f+(d-f)*e*.5,x=f-(m+p)/2),m+=x,p+=x,c.c=_=m,l!==0?c.b=o:c.b=o=c.a+(c.c-c.a)*.6,c.da=f-u,c.ca=_-u,c.ba=o-u,n?(h=Vc(u,o,_,f),t.splice(a,1,h[0],h[1],h[2],h[3]),a+=4):a++,o=p;c=t[a],c.b=o,c.c=o+(c.d-o)*.4,c.da=c.d-c.a,c.ca=c.c-c.a,c.ba=o-c.a,n&&(h=Vc(c.a,o,c.c,c.d),t.splice(a,1,h[0],h[1],h[2],h[3]))},tT=function(t,e,n,i){var r=[],s,a,o,l,u,f;if(i)for(t=[i].concat(t),a=t.length;--a>-1;)typeof(f=t[a][e])=="string"&&f.charAt(1)==="="&&(t[a][e]=i[e]+Number(f.charAt(0)+f.substr(2)));if(s=t.length-2,s<0)return r[0]=new cs(t[0][e],0,0,t[0][e]),r;for(a=0;a<s;a++)o=t[a][e],l=t[a+1][e],r[a]=new cs(o,0,0,l),n&&(u=t[a+2][e],Wi[a]=(Wi[a]||0)+(l-o)*(l-o),Er[a]=(Er[a]||0)+(u-l)*(u-l));return r[a]=new cs(t[a][e],0,0,t[a+1][e]),r},Qp=function(t,e,n,i,r,s){var a={},o=[],l=s||t[0],u,f,d,c,m,p,x,_;r=typeof r=="string"?","+r+",":Qb,e==null&&(e=1);for(f in t[0])o.push(f);if(t.length>1){for(_=t[t.length-1],x=!0,u=o.length;--u>-1;)if(f=o[u],Math.abs(l[f]-_[f])>.05){x=!1;break}x&&(t=t.concat(),s&&t.unshift(s),t.push(t[1]),s=t[t.length-3])}for(Wi.length=Er.length=vr.length=0,u=o.length;--u>-1;)f=o[u],Ga[f]=r.indexOf(","+f+",")!==-1,a[f]=tT(t,f,Ga[f],s);for(u=Wi.length;--u>-1;)Wi[u]=Math.sqrt(Wi[u]),Er[u]=Math.sqrt(Er[u]);if(!i){for(u=o.length;--u>-1;)if(Ga[f])for(d=a[o[u]],p=d.length-1,c=0;c<p;c++)m=d[c+1].da/Er[c]+d[c].da/Wi[c]||0,vr[c]=(vr[c]||0)+m*m;for(u=vr.length;--u>-1;)vr[u]=Math.sqrt(vr[u])}for(u=o.length,c=n?4:1;--u>-1;)f=o[u],d=a[f],eT(d,e,n,i,Ga[f]),x&&(d.splice(0,c),d.splice(d.length-c,c));return a},nT=function(t,e,n){e=e||"soft";var i={},r=e==="cubic"?3:2,s=e==="soft",a=[],o,l,u,f,d,c,m,p,x,_,h;if(s&&n&&(t=[n].concat(t)),t==null||t.length<r+1)throw"invalid Bezier data";for(x in t[0])a.push(x);for(c=a.length;--c>-1;){for(x=a[c],i[x]=d=[],_=0,p=t.length,m=0;m<p;m++)o=n==null?t[m][x]:typeof(h=t[m][x])=="string"&&h.charAt(1)==="="?n[x]+Number(h.charAt(0)+h.substr(2)):Number(h),s&&m>1&&m<p-1&&(d[_++]=(o+d[_-2])/2),d[_++]=o;for(p=_-r+1,_=0,m=0;m<p;m+=r)o=d[m],l=d[m+1],u=d[m+2],f=r===2?0:d[m+3],d[_++]=h=r===3?new cs(o,l,u,f):new cs(o,(2*l+o)/3,(2*l+u)/3,u);d.length=_}return i},iT=function(t,e,n){for(var i=1/n,r=t.length,s,a,o,l,u,f,d,c,m,p,x;--r>-1;)for(p=t[r],o=p.a,l=p.d-o,u=p.c-o,f=p.b-o,s=a=0,c=1;c<=n;c++)d=i*c,m=1-d,s=a-(a=(d*d*l+3*m*(d*u+m*f))*d),x=r*n+c-1,e[x]=(e[x]||0)+s*s},rT=function(t,e){e=e>>0||6;var n=[],i=[],r=0,s=0,a=e-1,o=[],l=[],u,f,d,c;for(u in t)iT(t[u],n,e);for(d=n.length,f=0;f<d;f++)r+=Math.sqrt(n[f]),c=f%e,l[c]=r,c===a&&(s+=r,c=f/e>>0,o[c]=l,i[c]=s,r=0,l=[]);return{length:s,lengths:i,segments:o}},Zi=Ut._gsDefine.plugin({propName:"bezier",priority:-1,version:"1.3.8",API:2,global:!0,init:function(t,e,n){this._target=t,e instanceof Array&&(e={values:e}),this._func={},this._mod={},this._props=[],this._timeRes=e.timeResolution==null?6:parseInt(e.timeResolution,10);var i=e.values||[],r={},s=i[0],a=e.autoRotate||n.vars.orientToBezier,o,l,u,f,d;this._autoRotate=a?a instanceof Array?a:[["x","y","rotation",a===!0?0:Number(a)||0]]:null;for(o in s)this._props.push(o);for(u=this._props.length;--u>-1;)o=this._props[u],this._overwriteProps.push(o),l=this._func[o]=typeof t[o]=="function",r[o]=l?t[o.indexOf("set")||typeof t["get"+o.substr(3)]!="function"?o:"get"+o.substr(3)]():parseFloat(t[o]),d||r[o]!==i[0][o]&&(d=r);if(this._beziers=e.type!=="cubic"&&e.type!=="quadratic"&&e.type!=="soft"?Qp(i,isNaN(e.curviness)?1:e.curviness,!1,e.type==="thruBasic",e.correlate,d):nT(i,e.type,r),this._segCount=this._beziers[o].length,this._timeRes){var c=rT(this._beziers,this._timeRes);this._length=c.length,this._lengths=c.lengths,this._segments=c.segments,this._l1=this._li=this._s1=this._si=0,this._l2=this._lengths[0],this._curSeg=this._segments[0],this._s2=this._curSeg[0],this._prec=1/this._curSeg.length}if(a=this._autoRotate)for(this._initialRotations=[],a[0]instanceof Array||(this._autoRotate=a=[a]),u=a.length;--u>-1;){for(f=0;f<3;f++)o=a[u][f],this._func[o]=typeof t[o]=="function"?t[o.indexOf("set")||typeof t["get"+o.substr(3)]!="function"?o:"get"+o.substr(3)]:!1;o=a[u][2],this._initialRotations[u]=(this._func[o]?this._func[o].call(this._target):this._target[o])||0,this._overwriteProps.push(o)}return this._startRatio=n.vars.runBackwards?1:0,!0},set:function(t){var e=this._segCount,n=this._func,i=this._target,r=t!==this._startRatio,s,a,o,l,u,f,d,c,m,p;if(!this._timeRes)s=t<0?0:t>=1?e-1:e*t>>0,f=(t-s*(1/e))*e;else{if(m=this._lengths,p=this._curSeg,t*=this._length,o=this._li,t>this._l2&&o<e-1){for(c=e-1;o<c&&(this._l2=m[++o])<=t;);this._l1=m[o-1],this._li=o,this._curSeg=p=this._segments[o],this._s2=p[this._s1=this._si=0]}else if(t<this._l1&&o>0){for(;o>0&&(this._l1=m[--o])>=t;);o===0&&t<this._l1?this._l1=0:o++,this._l2=m[o],this._li=o,this._curSeg=p=this._segments[o],this._s1=p[(this._si=p.length-1)-1]||0,this._s2=p[this._si]}if(s=o,t-=this._l1,o=this._si,t>this._s2&&o<p.length-1){for(c=p.length-1;o<c&&(this._s2=p[++o])<=t;);this._s1=p[o-1],this._si=o}else if(t<this._s1&&o>0){for(;o>0&&(this._s1=p[--o])>=t;);o===0&&t<this._s1?this._s1=0:o++,this._s2=p[o],this._si=o}f=(o+(t-this._s1)/(this._s2-this._s1))*this._prec||0}for(a=1-f,o=this._props.length;--o>-1;)l=this._props[o],u=this._beziers[l][s],d=(f*f*u.da+3*a*(f*u.ca+a*u.ba))*f+u.a,this._mod[l]&&(d=this._mod[l](d,i)),n[l]?i[l](d):i[l]=d;if(this._autoRotate){var x=this._autoRotate,_,h,b,M,A,G,L;for(o=x.length;--o>-1;)l=x[o][2],G=x[o][3]||0,L=x[o][4]===!0?1:Zb,u=this._beziers[x[o][0]],_=this._beziers[x[o][1]],u&&_&&(u=u[s],_=_[s],h=u.a+(u.b-u.a)*f,M=u.b+(u.c-u.b)*f,h+=(M-h)*f,M+=(u.c+(u.d-u.c)*f-M)*f,b=_.a+(_.b-_.a)*f,A=_.b+(_.c-_.b)*f,b+=(A-b)*f,A+=(_.c+(_.d-_.c)*f-A)*f,d=r?Math.atan2(A-b,M-h)*L+G:this._initialRotations[o],this._mod[l]&&(d=this._mod[l](d,i)),n[l]?i[l](d):i[l]=d)}}}),em=Zi.prototype;Zi.bezierThrough=Qp;Zi.cubicToQuadratic=Vc;Zi._autoCSS=!0;Zi.quadraticToCubic=function(t,e,n){return new cs(t,(2*e+t)/3,(2*e+n)/3,n)};Zi._cssRegister=function(){var t=Jb.CSSPlugin;if(t){var e=t._internals,n=e._parseToProxy,i=e._setPluginRatio,r=e.CSSPropTween;e._registerComplexSpecialProp("bezier",{parser:function(s,a,o,l,u,f){a instanceof Array&&(a={values:a}),f=new Zi;var d=a.values,c=d.length-1,m=[],p={},x,_,h;if(c<0)return u;for(x=0;x<=c;x++)h=n(s,d[x],l,u,f,c!==x),m[x]=h.end;for(_ in a)p[_]=a[_];return p.values=m,u=new r(s,"bezier",0,0,h.pt,2),u.data=h,u.plugin=f,u.setRatio=i,p.autoRotate===0&&(p.autoRotate=!0),p.autoRotate&&!(p.autoRotate instanceof Array)&&(x=p.autoRotate===!0?0:Number(p.autoRotate),p.autoRotate=h.end.left!=null?[["left","top","rotation",x,!1]]:h.end.x!=null?[["x","y","rotation",x,!1]]:!1),p.autoRotate&&(l._transform||l._enableTransforms(!1),h.autoRotate=l._target._gsTransform,h.proxy.rotation=h.autoRotate.rotation||0,l._overwriteProps.push("rotation")),f._onInitTween(h.proxy,p,l._tween),u}})}};em._mod=function(t){for(var e=this._overwriteProps,n=e.length,i;--n>-1;)i=t[e[n]],i&&typeof i=="function"&&(this._mod[e[n]]=i)};em._kill=function(t){var e=this._props,n,i;for(n in this._beziers)if(n in t)for(delete this._beziers[n],delete this._func[n],i=e.length;--i>-1;)e[i]===n&&e.splice(i,1);if(e=this._autoRotate,e)for(i=e.length;--i>-1;)t[e[i][2]]&&e.splice(i,1);return this._super._kill.call(this,t)};/*!
 * VERSION: 1.16.1
 * DATE: 2018-08-27
 * UPDATES AND DOCS AT: http://greensock.com
 *
 * @license Copyright (c) 2008-2018, GreenSock. All rights reserved.
 * This work is subject to the terms at http://greensock.com/standard-license or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 * 
 * @author: Jack Doyle, jack@greensock.com
 **/Ut._gsDefine("easing.Back",["easing.Ease"],function(){var t=Ut.GreenSockGlobals||Ut,e=t.com.greensock,n=Math.PI*2,i=Math.PI/2,r=e._class,s=function(h,b){var M=r("easing."+h,function(){},!0),A=M.prototype=new tn;return A.constructor=M,A.getRatio=b,M},a=tn.register||function(){},o=function(h,b,M,A,G){var L=r("easing."+h,{easeOut:new b,easeIn:new M,easeInOut:new A},!0);return a(L,h),L},l=function(h,b,M){this.t=h,this.v=b,M&&(this.next=M,M.prev=this,this.c=M.v-b,this.gap=M.t-h)},u=function(h,b){var M=r("easing."+h,function(G){this._p1=G||G===0?G:1.70158,this._p2=this._p1*1.525},!0),A=M.prototype=new tn;return A.constructor=M,A.getRatio=b,A.config=function(G){return new M(G)},M},f=o("Back",u("BackOut",function(h){return(h=h-1)*h*((this._p1+1)*h+this._p1)+1}),u("BackIn",function(h){return h*h*((this._p1+1)*h-this._p1)}),u("BackInOut",function(h){return(h*=2)<1?.5*h*h*((this._p2+1)*h-this._p2):.5*((h-=2)*h*((this._p2+1)*h+this._p2)+2)})),d=r("easing.SlowMo",function(h,b,M){b=b||b===0?b:.7,h==null?h=.7:h>1&&(h=1),this._p=h!==1?b:0,this._p1=(1-h)/2,this._p2=h,this._p3=this._p1+this._p2,this._calcEnd=M===!0},!0),c=d.prototype=new tn,m,p,x,_;return c.constructor=d,c.getRatio=function(h){var b=h+(.5-h)*this._p;return h<this._p1?this._calcEnd?1-(h=1-h/this._p1)*h:b-(h=1-h/this._p1)*h*h*h*b:h>this._p3?this._calcEnd?h===1?0:1-(h=(h-this._p3)/this._p1)*h:b+(h-b)*(h=(h-this._p3)/this._p1)*h*h*h:this._calcEnd?1:b},d.ease=new d(.7,.7),c.config=d.config=function(h,b,M){return new d(h,b,M)},m=r("easing.SteppedEase",function(h,b){h=h||1,this._p1=1/h,this._p2=h+(b?0:1),this._p3=b?1:0},!0),c=m.prototype=new tn,c.constructor=m,c.getRatio=function(h){return h<0?h=0:h>=1&&(h=.999999999),((this._p2*h|0)+this._p3)*this._p1},c.config=m.config=function(h,b){return new m(h,b)},p=r("easing.ExpoScaleEase",function(h,b,M){this._p1=Math.log(b/h),this._p2=b-h,this._p3=h,this._ease=M},!0),c=p.prototype=new tn,c.constructor=p,c.getRatio=function(h){return this._ease&&(h=this._ease.getRatio(h)),(this._p3*Math.exp(this._p1*h)-this._p3)/this._p2},c.config=p.config=function(h,b,M){return new p(h,b,M)},x=r("easing.RoughEase",function(h){h=h||{};for(var b=h.taper||"none",M=[],A=0,G=(h.points||20)|0,L=G,B=h.randomize!==!1,X=h.clamp===!0,Y=h.template instanceof tn?h.template:null,E=typeof h.strength=="number"?h.strength*.4:.4,C,V,W,Z,ne,se;--L>-1;)C=B?Math.random():1/G*L,V=Y?Y.getRatio(C):C,b==="none"?W=E:b==="out"?(Z=1-C,W=Z*Z*E):b==="in"?W=C*C*E:C<.5?(Z=C*2,W=Z*Z*.5*E):(Z=(1-C)*2,W=Z*Z*.5*E),B?V+=Math.random()*W-W*.5:L%2?V+=W*.5:V-=W*.5,X&&(V>1?V=1:V<0&&(V=0)),M[A++]={x:C,y:V};for(M.sort(function(de,te){return de.x-te.x}),se=new l(1,1,null),L=G;--L>-1;)ne=M[L],se=new l(ne.x,ne.y,se);this._prev=new l(0,0,se.t!==0?se:se.next)},!0),c=x.prototype=new tn,c.constructor=x,c.getRatio=function(h){var b=this._prev;if(h>b.t){for(;b.next&&h>=b.t;)b=b.next;b=b.prev}else for(;b.prev&&h<=b.t;)b=b.prev;return this._prev=b,b.v+(h-b.t)/b.gap*b.c},c.config=function(h){return new x(h)},x.ease=new x,o("Bounce",s("BounceOut",function(h){return h<1/2.75?7.5625*h*h:h<2/2.75?7.5625*(h-=1.5/2.75)*h+.75:h<2.5/2.75?7.5625*(h-=2.25/2.75)*h+.9375:7.5625*(h-=2.625/2.75)*h+.984375}),s("BounceIn",function(h){return(h=1-h)<1/2.75?1-7.5625*h*h:h<2/2.75?1-(7.5625*(h-=1.5/2.75)*h+.75):h<2.5/2.75?1-(7.5625*(h-=2.25/2.75)*h+.9375):1-(7.5625*(h-=2.625/2.75)*h+.984375)}),s("BounceInOut",function(h){var b=h<.5;return b?h=1-h*2:h=h*2-1,h<1/2.75?h=7.5625*h*h:h<2/2.75?h=7.5625*(h-=1.5/2.75)*h+.75:h<2.5/2.75?h=7.5625*(h-=2.25/2.75)*h+.9375:h=7.5625*(h-=2.625/2.75)*h+.984375,b?(1-h)*.5:h*.5+.5})),o("Circ",s("CircOut",function(h){return Math.sqrt(1-(h=h-1)*h)}),s("CircIn",function(h){return-(Math.sqrt(1-h*h)-1)}),s("CircInOut",function(h){return(h*=2)<1?-.5*(Math.sqrt(1-h*h)-1):.5*(Math.sqrt(1-(h-=2)*h)+1)})),_=function(h,b,M){var A=r("easing."+h,function(L,B){this._p1=L>=1?L:1,this._p2=(B||M)/(L<1?L:1),this._p3=this._p2/n*(Math.asin(1/this._p1)||0),this._p2=n/this._p2},!0),G=A.prototype=new tn;return G.constructor=A,G.getRatio=b,G.config=function(L,B){return new A(L,B)},A},o("Elastic",_("ElasticOut",function(h){return this._p1*Math.pow(2,-10*h)*Math.sin((h-this._p3)*this._p2)+1},.3),_("ElasticIn",function(h){return-(this._p1*Math.pow(2,10*(h-=1))*Math.sin((h-this._p3)*this._p2))},.3),_("ElasticInOut",function(h){return(h*=2)<1?-.5*(this._p1*Math.pow(2,10*(h-=1))*Math.sin((h-this._p3)*this._p2)):this._p1*Math.pow(2,-10*(h-=1))*Math.sin((h-this._p3)*this._p2)*.5+1},.45)),o("Expo",s("ExpoOut",function(h){return 1-Math.pow(2,-10*h)}),s("ExpoIn",function(h){return Math.pow(2,10*(h-1))-.001}),s("ExpoInOut",function(h){return(h*=2)<1?.5*Math.pow(2,10*(h-1)):.5*(2-Math.pow(2,-10*(h-1)))})),o("Sine",s("SineOut",function(h){return Math.sin(h*i)}),s("SineIn",function(h){return-Math.cos(h*i)+1}),s("SineInOut",function(h){return-.5*(Math.cos(Math.PI*h)-1)})),r("easing.EaseLookup",{find:function(h){return tn.map[h]}},!0),a(t.SlowMo,"SlowMo","ease,"),a(x,"RoughEase","ease,"),a(m,"SteppedEase","ease,"),f},!0);var sT=Ot.Back,aT=Ot.Elastic,oT=Ot.Bounce,lT=Ot.RoughEase,cT=Ot.SlowMo,uT=Ot.SteppedEase,fT=Ot.Circ,hT=Ot.Expo,dT=Ot.Sine,pT=Ot.ExpoScaleEase;/*!
 * VERSION: 2.0.2
 * DATE: 2018-08-27
 * UPDATES AND DOCS AT: http://greensock.com
 *
 * @license Copyright (c) 2008-2018, GreenSock. All rights reserved.
 * This work is subject to the terms at http://greensock.com/standard-license or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 * 
 * @author: Jack Doyle, jack@greensock.com
 **/var mT=Xb;mT._autoActivated=[gr,Kb,jb,qb,Zi,Kp,Jp,sT,aT,oT,lT,cT,uT,fT,hT,dT,pT];var _T=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function tm(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Du={exports:{}},us=typeof Reflect=="object"?Reflect:null,Eh=us&&typeof us.apply=="function"?us.apply:function(e,n,i){return Function.prototype.apply.call(e,n,i)},io;us&&typeof us.ownKeys=="function"?io=us.ownKeys:Object.getOwnPropertySymbols?io=function(e){return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e))}:io=function(e){return Object.getOwnPropertyNames(e)};var nm=Number.isNaN||function(e){return e!==e};function bt(){bt.init.call(this)}Du.exports=bt;Du.exports.once=yT;bt.EventEmitter=bt;bt.prototype._events=void 0;bt.prototype._eventsCount=0;bt.prototype._maxListeners=void 0;var wh=10;function Oo(t){if(typeof t!="function")throw new TypeError('The "listener" argument must be of type Function. Received type '+typeof t)}Object.defineProperty(bt,"defaultMaxListeners",{enumerable:!0,get:function(){return wh},set:function(t){if(typeof t!="number"||t<0||nm(t))throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received '+t+".");wh=t}});bt.init=function(){(this._events===void 0||this._events===Object.getPrototypeOf(this)._events)&&(this._events=Object.create(null),this._eventsCount=0),this._maxListeners=this._maxListeners||void 0};bt.prototype.setMaxListeners=function(e){if(typeof e!="number"||e<0||nm(e))throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received '+e+".");return this._maxListeners=e,this};function im(t){return t._maxListeners===void 0?bt.defaultMaxListeners:t._maxListeners}bt.prototype.getMaxListeners=function(){return im(this)};bt.prototype.emit=function(e){for(var n=[],i=1;i<arguments.length;i++)n.push(arguments[i]);var r=e==="error",s=this._events;if(s!==void 0)r=r&&s.error===void 0;else if(!r)return!1;if(r){var a;if(n.length>0&&(a=n[0]),a instanceof Error)throw a;var o=new Error("Unhandled error."+(a?" ("+a.message+")":""));throw o.context=a,o}var l=s[e];if(l===void 0)return!1;if(typeof l=="function")Eh(l,this,n);else for(var u=l.length,f=lm(l,u),i=0;i<u;++i)Eh(f[i],this,n);return!0};function rm(t,e,n,i){var r,s,a;if(Oo(n),s=t._events,s===void 0?(s=t._events=Object.create(null),t._eventsCount=0):(s.newListener!==void 0&&(t.emit("newListener",e,n.listener?n.listener:n),s=t._events),a=s[e]),a===void 0)a=s[e]=n,++t._eventsCount;else if(typeof a=="function"?a=s[e]=i?[n,a]:[a,n]:i?a.unshift(n):a.push(n),r=im(t),r>0&&a.length>r&&!a.warned){a.warned=!0;var o=new Error("Possible EventEmitter memory leak detected. "+a.length+" "+String(e)+" listeners added. Use emitter.setMaxListeners() to increase limit");o.name="MaxListenersExceededWarning",o.emitter=t,o.type=e,o.count=a.length}return t}bt.prototype.addListener=function(e,n){return rm(this,e,n,!1)};bt.prototype.on=bt.prototype.addListener;bt.prototype.prependListener=function(e,n){return rm(this,e,n,!0)};function gT(){if(!this.fired)return this.target.removeListener(this.type,this.wrapFn),this.fired=!0,arguments.length===0?this.listener.call(this.target):this.listener.apply(this.target,arguments)}function sm(t,e,n){var i={fired:!1,wrapFn:void 0,target:t,type:e,listener:n},r=gT.bind(i);return r.listener=n,i.wrapFn=r,r}bt.prototype.once=function(e,n){return Oo(n),this.on(e,sm(this,e,n)),this};bt.prototype.prependOnceListener=function(e,n){return Oo(n),this.prependListener(e,sm(this,e,n)),this};bt.prototype.removeListener=function(e,n){var i,r,s,a,o;if(Oo(n),r=this._events,r===void 0)return this;if(i=r[e],i===void 0)return this;if(i===n||i.listener===n)--this._eventsCount===0?this._events=Object.create(null):(delete r[e],r.removeListener&&this.emit("removeListener",e,i.listener||n));else if(typeof i!="function"){for(s=-1,a=i.length-1;a>=0;a--)if(i[a]===n||i[a].listener===n){o=i[a].listener,s=a;break}if(s<0)return this;s===0?i.shift():vT(i,s),i.length===1&&(r[e]=i[0]),r.removeListener!==void 0&&this.emit("removeListener",e,o||n)}return this};bt.prototype.off=bt.prototype.removeListener;bt.prototype.removeAllListeners=function(e){var n,i,r;if(i=this._events,i===void 0)return this;if(i.removeListener===void 0)return arguments.length===0?(this._events=Object.create(null),this._eventsCount=0):i[e]!==void 0&&(--this._eventsCount===0?this._events=Object.create(null):delete i[e]),this;if(arguments.length===0){var s=Object.keys(i),a;for(r=0;r<s.length;++r)a=s[r],a!=="removeListener"&&this.removeAllListeners(a);return this.removeAllListeners("removeListener"),this._events=Object.create(null),this._eventsCount=0,this}if(n=i[e],typeof n=="function")this.removeListener(e,n);else if(n!==void 0)for(r=n.length-1;r>=0;r--)this.removeListener(e,n[r]);return this};function am(t,e,n){var i=t._events;if(i===void 0)return[];var r=i[e];return r===void 0?[]:typeof r=="function"?n?[r.listener||r]:[r]:n?xT(r):lm(r,r.length)}bt.prototype.listeners=function(e){return am(this,e,!0)};bt.prototype.rawListeners=function(e){return am(this,e,!1)};bt.listenerCount=function(t,e){return typeof t.listenerCount=="function"?t.listenerCount(e):om.call(t,e)};bt.prototype.listenerCount=om;function om(t){var e=this._events;if(e!==void 0){var n=e[t];if(typeof n=="function")return 1;if(n!==void 0)return n.length}return 0}bt.prototype.eventNames=function(){return this._eventsCount>0?io(this._events):[]};function lm(t,e){for(var n=new Array(e),i=0;i<e;++i)n[i]=t[i];return n}function vT(t,e){for(;e+1<t.length;e++)t[e]=t[e+1];t.pop()}function xT(t){for(var e=new Array(t.length),n=0;n<e.length;++n)e[n]=t[n].listener||t[n];return e}function yT(t,e){return new Promise(function(n,i){function r(a){t.removeListener(e,s),i(a)}function s(){typeof t.removeListener=="function"&&t.removeListener("error",r),n([].slice.call(arguments))}cm(t,e,s,{once:!0}),e!=="error"&&ST(t,r,{once:!0})})}function ST(t,e,n){typeof t.on=="function"&&cm(t,"error",e,n)}function cm(t,e,n,i){if(typeof t.on=="function")i.once?t.once(e,n):t.on(e,n);else if(typeof t.addEventListener=="function")t.addEventListener(e,function r(s){i.once&&t.removeEventListener(e,r),n(s)});else throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type '+typeof t)}var MT=Du.exports;const bT=tm(MT);/*! *****************************************************************************
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
***************************************************************************** */var TT=Object.assign||function(e){for(var n,i=1,r=arguments.length;i<r;i++){n=arguments[i];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(e[s]=n[s])}return e},ET=[["firefox",/Firefox\/([0-9\.]+)(?:\s|$)/],["opera",/Opera\/([0-9\.]+)(?:\s|$)/],["opera",/OPR\/([0-9\.]+)(:?\s|$)$/],["edge",/Edge\/([0-9\._]+)/],["ie",/Trident\/7\.0.*rv\:([0-9\.]+)\).*Gecko$/],["ie",/MSIE\s([0-9\.]+);.*Trident\/[4-7].0/],["ie",/MSIE\s(7\.0)/],["safari",/Version\/([0-9\._]+).*Safari/],["chrome",/(?!Chrom.*OPR)Chrom(?:e|ium)\/([0-9\.]+)(:?\s|$)/],["bb10",/BB10;\sTouch.*Version\/([0-9\.]+)/],["android",/Android\s([0-9\.]+)/],["ios",/Version\/([0-9\._]+).*Mobile.*Safari.*/],["yandexbrowser",/YaBrowser\/([0-9\._]+)/],["crios",/CriOS\/([0-9\.]+)(:?\s|$)/]],wT=["Windows Phone","Android","CentOS",{name:"Chrome OS",pattern:"CrOS"},"Debian","Fedora","FreeBSD","Gentoo","Haiku","Kubuntu","Linux Mint","OpenBSD","Red Hat","SuSE","Ubuntu","Xubuntu","Cygwin","Symbian OS","hpwOS","webOS ","webOS","Tablet OS","Tizen","Linux","Mac OS X","Macintosh","Mac","Windows 98;","Windows "],AT={"10.0":"10","6.4":"10 Technical Preview","6.3":"8.1","6.2":"8","6.1":"Server 2008 R2 / 7","6.0":"Server 2008 / Vista","5.2":"Server 2003 / XP 64-bit","5.1":"XP","5.01":"2000 SP1","5.0":"2000","4.0":"NT","4.90":"ME"},CT=new RegExp(["(android|bb\\d+|meego).+mobile|avantgo|bada\\/|blackberry|blazer|","compal|elaine|fennec|hiptop|iemobile|ip(hone|od|ad)|iris|kindle|lge |maemo|","midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)","\\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\\.(browser|link)|vodafone|","wap|windows ce|xda|xiino"].join(""),"i"),RT=new RegExp(["1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\\-)|","ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\\-m|r |s )|","avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\\-(n|u)|c55\\/|capi|ccwa|cdm\\-|","cell|chtm|cldc|cmd\\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\\-s|devi|dica|dmob|do(c|p)o|","ds(12|\\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\\-|_)|","g1 u|g560|gene|gf\\-5|g\\-mo|go(\\.w|od)|gr(ad|un)|haie|hcit|hd\\-(m|p|t)|hei\\-|","hi(pt|ta)|hp( i|ip)|hs\\-c|ht(c(\\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\\-(20|go|ma)|","i230|iac( |\\-|\\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|","kddi|keji|kgt( |\\/)|klon|kpt |kwc\\-|kyo(c|k)|le(no|xi)|lg( g|\\/(k|l|u)|50|54|\\-[a-w])","|libw|lynx|m1\\-w|m3ga|m50\\/|ma(te|ui|xo)|mc(01|21|ca)|m\\-cr|me(rc|ri)|mi(o8|oa|ts)|","mmef|mo(01|02|bi|de|do|t(\\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|","n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|","op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\\-2|","po(ck|rt|se)|prox|psio|pt\\-g|qa\\-a|qc(07|12|21|32|60|\\-[2-7]|i\\-)|qtek|r380|r600|","raks|rim9|ro(ve|zo)|s55\\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\\-|oo|p\\-)|sdk\\/|","se(c(\\-|0|1)|47|mc|nd|ri)|sgh\\-|shar|sie(\\-|m)|k\\-0|sl(45|id)|sm(al|ar|b3|it|t5)|","so(ft|ny)|sp(01|h\\-|v\\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\\-|tdg\\-|","tel(i|m)|tim\\-|t\\-mo|to(pl|sh)|ts(70|m\\-|m3|m5)|tx\\-9|up(\\.b|g1|si)|utst|v400|v750|","veri|vi(rg|te)|vk(40|5[0-3]|\\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|","w3c(\\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\\-|your|zeto|zte\\-"].join(""),"i"),PT=function(){function t(e,n,i){this.navigator=n,this.process=i,this.userAgent=e||(this.navigator?n.userAgent||n.vendor:"")}return t.prototype.detect=function(){if(this.process&&!this.userAgent){var e=this.process.version.slice(1).split(".").slice(0,3),n=Array.prototype.slice.call(e,1).join("")||"0";return{name:"node",version:e.join("."),versionNumber:parseFloat(e[0]+"."+n),mobile:!1,os:this.process.platform}}return this.userAgent||this.handleMissingError(),TT({},this.checkBrowser(),this.checkMobile(),this.checkOs())},t.prototype.checkBrowser=function(){var e=this;return ET.filter(function(n){return n[1].test(e.userAgent)}).map(function(n){var i=n[1].exec(e.userAgent),r=i&&i[1].split(/[._]/).slice(0,3),s=Array.prototype.slice.call(r,1).join("")||"0";return r&&r.length<3&&Array.prototype.push.apply(r,r.length===1?[0,0]:[0]),{name:String(n[0]),version:r.join("."),versionNumber:+(r[0]+"."+s)}}).shift()},t.prototype.checkMobile=function(){var e=this.userAgent.substr(0,4),n=CT.test(this.userAgent)||RT.test(e);return{mobile:n}},t.prototype.checkOs=function(){var e=this;return wT.map(function(n){var i=n.name||n,r=e.getOsPattern(n);return{name:i,pattern:r,value:RegExp("\\b"+r.replace(/([ -])(?!$)/g,"$1?")+"(?:x?[\\d._]+|[ \\w.]*)","i").exec(e.userAgent)}}).filter(function(n){return n.value}).map(function(n){var i=n.value[0]||"",r;return n.pattern&&n.name&&/^Win/i.test(i)&&!/^Windows Phone /i.test(i)&&(r=AT[i.replace(/[^\d.]/g,"")])&&(i="Windows "+r),n.pattern&&n.name&&(i=i.replace(RegExp(n.pattern,"i"),n.name)),i=i.replace(/ ce$/i," CE").replace(/\bhpw/i,"web").replace(/\bMacintosh\b/,"Mac OS").replace(/_PowerPC\b/i," OS").replace(/\b(OS X) [^ \d]+/i,"$1").replace(/\bMac (OS X)\b/,"$1").replace(/\/(\d)/," $1").replace(/_/g,".").replace(/(?: BePC|[ .]*fc[ \d.]+)$/i,"").replace(/\bx86\.64\b/gi,"x86_64").replace(/\b(Windows Phone) OS\b/,"$1").replace(/\b(Chrome OS \w+) [\d.]+\b/,"$1").split(" on ")[0].trim(),i=/^(?:webOS|i(?:OS|P))/.test(i)?i:i.charAt(0).toUpperCase()+i.slice(1),{os:i}}).shift()},t.prototype.getOsPattern=function(e){var n=e;return(typeof e=="string"?e:void 0)||n.pattern||n.name},t.prototype.handleMissingError=function(){throw new Error(`Please give user-agent.
> browser(navigator.userAgent or res.headers['user-agent']).`)},t}();function da(t,e){return e={exports:{}},t(e,e.exports),e.exports}var kn=da(function(t){var e=t.exports=typeof window<"u"&&window.Math==Math?window:typeof self<"u"&&self.Math==Math?self:Function("return this")();typeof __g=="number"&&(__g=e)}),Qn=da(function(t){var e=t.exports={version:"2.5.7"};typeof __e=="number"&&(__e=e)});Qn.version;var Rr=function(t){return typeof t=="object"?t!==null:typeof t=="function"},Ah=function(t){if(!Rr(t))throw TypeError(t+" is not an object!");return t},No=function(t){try{return!!t()}catch{return!0}},Lu=!No(function(){return Object.defineProperty({},"a",{get:function(){return 7}}).a!=7}),Gc=kn.document,DT=Rr(Gc)&&Rr(Gc.createElement),LT=function(t){return DT?Gc.createElement(t):{}},IT=!Lu&&!No(function(){return Object.defineProperty(LT("div"),"a",{get:function(){return 7}}).a!=7}),UT=function(t,e){if(!Rr(t))return t;var n,i;if(typeof(n=t.toString)=="function"&&!Rr(i=n.call(t))||typeof(n=t.valueOf)=="function"&&!Rr(i=n.call(t)))return i;throw TypeError("Can't convert object to primitive value")},OT=Object.defineProperty,NT=Lu?Object.defineProperty:function(e,n,i){if(Ah(e),n=UT(n),Ah(i),IT)try{return OT(e,n,i)}catch{}if("get"in i||"set"in i)throw TypeError("Accessors not supported!");return"value"in i&&(e[n]=i.value),e},FT={f:NT},BT=function(t,e){return{enumerable:!(t&1),configurable:!(t&2),writable:!(t&4),value:e}},Bs=Lu?function(t,e,n){return FT.f(t,e,BT(1,n))}:function(t,e,n){return t[e]=n,t},kT={}.hasOwnProperty,Ch=function(t,e){return kT.call(t,e)},zT=0,HT=Math.random(),um=function(t){return"Symbol(".concat(t===void 0?"":t,")_",(++zT+HT).toString(36))},VT=da(function(t){var e=um("src"),n="toString",i=Function[n],r=(""+i).split(n);Qn.inspectSource=function(s){return i.call(s)},(t.exports=function(s,a,o,l){var u=typeof o=="function";u&&(Ch(o,"name")||Bs(o,"name",a)),s[a]!==o&&(u&&(Ch(o,e)||Bs(o,e,s[a]?""+s[a]:r.join(String(a)))),s===kn?s[a]=o:l?s[a]?s[a]=o:Bs(s,a,o):(delete s[a],Bs(s,a,o)))})(Function.prototype,n,function(){return typeof this=="function"&&this[e]||i.call(this)})}),GT=function(t){if(typeof t!="function")throw TypeError(t+" is not a function!");return t},Wc=function(t,e,n){if(GT(t),e===void 0)return t;switch(n){case 1:return function(i){return t.call(e,i)};case 2:return function(i,r){return t.call(e,i,r)};case 3:return function(i,r,s){return t.call(e,i,r,s)}}return function(){return t.apply(e,arguments)}},Ul="prototype",fn=function(t,e,n){var i=t&fn.F,r=t&fn.G,s=t&fn.S,a=t&fn.P,o=t&fn.B,l=r?kn:s?kn[e]||(kn[e]={}):(kn[e]||{})[Ul],u=r?Qn:Qn[e]||(Qn[e]={}),f=u[Ul]||(u[Ul]={}),d,c,m,p;r&&(n=e);for(d in n)c=!i&&l&&l[d]!==void 0,m=(c?l:n)[d],p=o&&c?Wc(m,kn):a&&typeof m=="function"?Wc(Function.call,m):m,l&&VT(l,d,m,t&fn.U),u[d]!=m&&Bs(u,d,p),a&&f[d]!=m&&(f[d]=m)};kn.core=Qn;fn.F=1;fn.G=2;fn.S=4;fn.P=8;fn.B=16;fn.W=32;fn.U=64;fn.R=128;var yi=fn,WT={}.toString,fm=function(t){return WT.call(t).slice(8,-1)},XT=Object("z").propertyIsEnumerable(0)?Object:function(t){return fm(t)=="String"?t.split(""):Object(t)},hm=function(t){if(t==null)throw TypeError("Can't call method on  "+t);return t},jT=function(t){return Object(hm(t))},qT=Math.ceil,YT=Math.floor,$T=function(t){return isNaN(t=+t)?0:(t>0?YT:qT)(t)},KT=Math.min,ZT=function(t){return t>0?KT($T(t),9007199254740991):0},Rh=Array.isArray||function(e){return fm(e)=="Array"},JT=da(function(t){var e="__core-js_shared__",n=kn[e]||(kn[e]={});(t.exports=function(i,r){return n[i]||(n[i]=r!==void 0?r:{})})("versions",[]).push({version:Qn.version,mode:"global",copyright:"© 2018 Denis Pushkarev (zloirock.ru)"})}),QT=da(function(t){var e=JT("wks"),n=kn.Symbol,i=typeof n=="function",r=t.exports=function(s){return e[s]||(e[s]=i&&n[s]||(i?n:um)("Symbol."+s))};r.store=e}),e1=QT("species"),t1=function(t){var e;return Rh(t)&&(e=t.constructor,typeof e=="function"&&(e===Array||Rh(e.prototype))&&(e=void 0),Rr(e)&&(e=e[e1],e===null&&(e=void 0))),e===void 0?Array:e},n1=function(t,e){return new(t1(t))(e)},dm=function(t,e){var n=t==1,i=t==2,r=t==3,s=t==4,a=t==6,o=t==5||a,l=n1;return function(u,f,d){for(var c=jT(u),m=XT(c),p=Wc(f,d,3),x=ZT(m.length),_=0,h=n?l(u,x):i?l(u,0):void 0,b,M;x>_;_++)if((o||_ in m)&&(b=m[_],M=p(b,_,c),t)){if(n)h[_]=M;else if(M)switch(t){case 3:return!0;case 5:return b;case 6:return _;case 2:h.push(b)}else if(s)return!1}return a?-1:r||s?s:h}},pm=function(t,e){return!!t&&No(function(){e?t.call(null,function(){},1):t.call(null)})},i1=dm(2);yi(yi.P+yi.F*!pm([].filter,!0),"Array",{filter:function(e){return i1(this,e,arguments[1])}});Qn.Array.filter;var r1=dm(1);yi(yi.P+yi.F*!pm([].map,!0),"Array",{map:function(e){return r1(this,e,arguments[1])}});Qn.Array.map;var Xc=`	
\v\f\r   ᠎             　\u2028\u2029\uFEFF`,mo="["+Xc+"]",Ph="​",s1=RegExp("^"+mo+mo+"*"),a1=RegExp(mo+mo+"*$"),mm=function(t,e,n){var i={},r=No(function(){return!!Xc[t]()||Ph[t]()!=Ph}),s=i[t]=r?e(o1):Xc[t];n&&(i[n]=s),yi(yi.P+yi.F*r,"String",i)},o1=mm.trim=function(t,e){return t=String(hm(t)),e&1&&(t=t.replace(s1,"")),e&2&&(t=t.replace(a1,"")),t},l1=mm;l1("trim",function(t){return function(){return t(this,3)}});Qn.String.trim;var c1=typeof window<"u"?window.navigator:void 0,u1=typeof process<"u"?process:void 0;function f1(t){var e=new PT(t,c1,u1);return e.detect()}let Dh=!1,Wa=!1;const h1=()=>{if(Dh)return Wa;Dh=!0;try{let t=Object.defineProperty({},"passive",{get:()=>{Wa=!0}});window.addEventListener("test",null,t)}catch{return Wa}return window.removeEventListener("test",null,opts),Wa},Ol=()=>h1()?{passive:!0}:!1;class d1 extends bT{get enabled(){return this._enabled}constructor(e,n){super(),this.camera=e,this.el=n||window,this.plane=new zi,this.raycaster=new Wb,this.mouse=new yt,this.offset=new ve,this.intersection=new ve,this.objects=[],this.hovered=null,this.selected=null,this.isDown=!1,this.browser=f1(),this.enable()}enable(){this.enabled||(this.addListeners(),this._enabled=!0)}disable(){this.enabled&&(this.removeListeners(),this._enabled=!1)}addListeners(){this.handlerDown=this.onDown.bind(this),this.handlerMove=this.onMove.bind(this),this.handlerUp=this.onUp.bind(this),this.handlerLeave=this.onLeave.bind(this),this.browser.mobile?(this.el.addEventListener("touchstart",this.handlerDown,Ol),this.el.addEventListener("touchmove",this.handlerMove,Ol),this.el.addEventListener("touchend",this.handlerUp,Ol)):(this.el.addEventListener("mousedown",this.handlerDown),window.addEventListener("mousemove",this.handlerMove),this.el.addEventListener("mouseup",this.handlerUp),this.el.addEventListener("mouseleave",this.handlerLeave))}removeListeners(){this.browser.mobile?(this.el.removeEventListener("touchstart",this.handlerDown),this.el.removeEventListener("touchmove",this.handlerMove),this.el.removeEventListener("touchend",this.handlerUp)):(this.el.removeEventListener("mousedown",this.handlerDown),this.el.removeEventListener("mousemove",this.handlerMove),this.el.removeEventListener("mouseup",this.handlerUp),this.el.removeEventListener("mouseleave",this.handlerLeave))}resize(e,n,i,r){e||n||i||r?this.rect={x:e,y:n,width:i,height:r}:this.el===window?this.rect={x:0,y:0,width:window.innerWidth,height:window.innerHeight}:this.rect=this.el.getBoundingClientRect()}onMove(e){const n=e.touches?e.touches[0]:e,i={x:n.clientX,y:n.clientY};this.mouse.x=(i.x+this.rect.x)/this.rect.width*2-1,this.mouse.y=-((i.y+this.rect.y)/this.rect.height)*2+1,this.raycaster.setFromCamera(this.mouse,this.camera);const r=this.raycaster.intersectObjects(this.objects);if(r.length>0){const s=r[0].object;this.intersectionData=r[0],this.plane.setFromNormalAndCoplanarPoint(this.camera.getWorldDirection(this.plane.normal),s.position),this.hovered!==s?(this.emit("interactive-out",{object:this.hovered}),this.emit("interactive-over",{object:s}),this.hovered=s):this.emit("interactive-move",{object:s,intersectionData:this.intersectionData})}else this.intersectionData=null,this.hovered!==null&&(this.emit("interactive-out",{object:this.hovered}),this.hovered=null)}onDown(e){this.isDown=!0,this.onMove(e),this.emit("interactive-down",{object:this.hovered,previous:this.selected,intersectionData:this.intersectionData}),this.selected=this.hovered,this.selected&&this.raycaster.ray.intersectPlane(this.plane,this.intersection)&&this.offset.copy(this.intersection).sub(this.selected.position)}onUp(e){this.isDown=!1,this.emit("interactive-up",{object:this.hovered})}onLeave(e){this.onUp(e),this.emit("interactive-out",{object:this.hovered}),this.hovered=null}}const Lh=(t,e,n,i)=>n*Math.sin(t/i*(Math.PI/2))+e;class p1{constructor(e){this.parent=e,this.size=64,this.maxAge=120,this.radius=.15,this.trail=[],this.initTexture()}initTexture(){this.canvas=document.createElement("canvas"),this.canvas.width=this.canvas.height=this.size,this.ctx=this.canvas.getContext("2d"),this.ctx.fillStyle="black",this.ctx.fillRect(0,0,this.canvas.width,this.canvas.height),this.texture=new $t(this.canvas),this.canvas.id="touchTexture",this.canvas.style.width=this.canvas.style.height=`${this.canvas.width}px`}update(e){this.clear(),this.trail.forEach((n,i)=>{n.age++,n.age>this.maxAge&&this.trail.splice(i,1)}),this.trail.forEach((n,i)=>{this.drawTouch(n)}),this.texture.needsUpdate=!0}clear(){this.ctx.fillStyle="black",this.ctx.fillRect(0,0,this.canvas.width,this.canvas.height)}addTouch(e){let n=0;const i=this.trail[this.trail.length-1];if(i){const r=i.x-e.x,s=i.y-e.y,a=r*r+s*s;n=Math.min(a*1e4,1)}this.trail.push({x:e.x,y:e.y,age:0,force:n})}drawTouch(e){const n={x:e.x*this.size,y:(1-e.y)*this.size};let i=1;e.age<this.maxAge*.3?i=Lh(e.age/(this.maxAge*.3),0,1,1):i=Lh(1-(e.age-this.maxAge*.3)/(this.maxAge*.7),0,1,1),i*=e.force;const r=this.size*this.radius*i,s=this.ctx.createRadialGradient(n.x,n.y,r*.25,n.x,n.y,r);s.addColorStop(0,"rgba(255, 255, 255, 0.2)"),s.addColorStop(1,"rgba(0, 0, 0, 0.0)"),this.ctx.beginPath(),this.ctx.fillStyle=s,this.ctx.arc(n.x,n.y,r,0,Math.PI*2),this.ctx.fill()}}const m1=`// @author brunoimbrizi / http://brunoimbrizi.com\r
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
`,_1=`// @author brunoimbrizi / http://brunoimbrizi.com\r
\r
precision highp float;\r
\r
uniform sampler2D uTexture;\r
uniform float uAlpha;\r
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
	color.a = t * uAlpha;\r
\r
	gl_FragColor = color;\r
}`;class g1{constructor(e){this.webgl=e,this.container=new gn}easeOutExpo(e){return e===0?0:Math.pow(4,10*e-10)}init(e){new Vb().load(e,i=>{this.texture=i,this.width=i.image.width,this.height=i.image.height,this.initPoints(!0),this.initHitArea(),this.initTouch(),this.resize(),this.show()}),window.addEventListener("scroll",()=>{if(!this.object3D)return;const i=window.innerHeight,r=Math.max((document.body.offsetHeight-i-window.scrollY)/(document.body.offsetHeight-i));this.object3D.material.uniforms.uAlpha.value=this.easeOutExpo(r)})}initPoints(e){this.numPoints=this.width*this.height;let n=this.numPoints,i=0,r;if(e){n=0,i=34;const m=this.texture.image,p=document.createElement("canvas"),x=p.getContext("2d");p.width=this.width,p.height=this.height,x.scale(1,-1),x.drawImage(m,0,0,this.width,this.height*-1);const _=x.getImageData(0,0,p.width,p.height);r=Float32Array.from(_.data);for(let h=0;h<this.numPoints;h++)r[h*4+0]>i&&n++}const s={uTime:{value:0},uRandom:{value:1},uDepth:{value:2},uSize:{value:0},uTextureSize:{value:new yt(this.width,this.height)},uTexture:{value:this.texture},uTouch:{value:null},uAlpha:{value:1}},a=new Bb({uniforms:s,vertexShader:m1,fragmentShader:_1,depthTest:!1,transparent:!0}),o=new Gb,l=new vn(new Float32Array(4*3),3);l.setXYZ(0,-.5,.5,0),l.setXYZ(1,.5,.5,0),l.setXYZ(2,-.5,-.5,0),l.setXYZ(3,.5,-.5,0),o.setAttribute("position",l);const u=new vn(new Float32Array(4*2),2);u.setXYZ(0,0,0),u.setXYZ(1,1,0),u.setXYZ(2,0,1),u.setXYZ(3,1,1),o.setAttribute("uv",u),o.setIndex(new vn(new Uint16Array([0,2,1,2,3,1]),1));const f=new Uint16Array(n),d=new Float32Array(n*3),c=new Float32Array(n);for(let m=0,p=0;m<this.numPoints;m++)e&&r[m*4+0]<=i||(d[p*3+0]=m%this.width,d[p*3+1]=Math.floor(m/this.width),f[p]=m,c[p]=Math.random()*Math.PI,p++);o.setAttribute("pindex",new Il(f,1,!1)),o.setAttribute("offset",new Il(d,3,!1)),o.setAttribute("angle",new Il(c,1,!1)),this.object3D=new Pn(o,a),this.container.add(this.object3D)}initTouch(){this.touch||(this.touch=new p1(this)),this.object3D.material.uniforms.uTouch.value=this.touch.texture}initHitArea(){const e=new Ss(this.width,this.height,1,1),n=new Au({color:16777215,wireframe:!0,depthTest:!1});n.visible=!1,this.hitArea=new Pn(e,n),this.container.add(this.hitArea)}addListeners(){this.handlerInteractiveMove=this.onInteractiveMove.bind(this),this.webgl.interactive.addListener("interactive-move",this.handlerInteractiveMove),this.webgl.interactive.objects.push(this.hitArea),this.webgl.interactive.enable()}removeListeners(){this.webgl.interactive.removeListener("interactive-move",this.handlerInteractiveMove);const e=this.webgl.interactive.objects.findIndex(n=>n===this.hitArea);this.webgl.interactive.objects.splice(e,1),this.webgl.interactive.disable()}update(e){this.object3D&&(this.touch&&this.touch.update(),this.object3D.material.uniforms.uTime.value+=e)}show(e=1){TweenLite.fromTo(this.object3D.material.uniforms.uSize,e,{value:.5},{value:1.5}),TweenLite.to(this.object3D.material.uniforms.uRandom,e,{value:2}),TweenLite.fromTo(this.object3D.material.uniforms.uDepth,e*1.5,{value:40},{value:4}),this.addListeners()}hide(e,n=.8){return new Promise((i,r)=>{TweenLite.to(this.object3D.material.uniforms.uRandom,n,{value:5,onComplete:()=>{e&&this.destroy(),i()}}),TweenLite.to(this.object3D.material.uniforms.uDepth,n,{value:-20,ease:Quad.easeIn}),TweenLite.to(this.object3D.material.uniforms.uSize,n*.8,{value:0}),this.removeListeners()})}destroy(){this.object3D&&(this.object3D.parent.remove(this.object3D),this.object3D.geometry.dispose(),this.object3D.material.dispose(),this.object3D=null,this.hitArea&&(this.hitArea.parent.remove(this.hitArea),this.hitArea.geometry.dispose(),this.hitArea.material.dispose(),this.hitArea=null))}resize(){if(!this.object3D)return;const e=this.webgl.fovHeight/this.height;this.object3D.scale.set(e,e,1),this.hitArea.scale.set(e,e,1)}onInteractiveMove(e){const n=e.intersectionData.uv;this.touch&&this.touch.addTouch(n)}}const v1="/YangPortfolioPublic/assets/Profile3-B_I9tn9a.png";class x1{constructor(e){this.app=e,this.samples=[v1],this.initThree(),this.initParticles(),this.initControls();const n=~~(Math.random()*this.samples.length);this.goto(n)}initThree(){this.scene=new Yp,this.camera=new An(50,window.innerWidth/window.innerHeight,1,1e4),this.camera.position.z=300,this.renderer=new qp({antialias:!0,alpha:!0}),this.clock=new $p(!0)}initControls(){this.interactive=new d1(this.camera,this.renderer.domElement)}initParticles(){this.particles=new g1(this),this.scene.add(this.particles.container)}update(){const e=this.clock.getDelta();this.particles&&this.particles.update(e)}draw(){this.renderer.render(this.scene,this.camera)}goto(e){this.currSample==null?this.particles.init(this.samples[e]):this.particles.hide(!0).then(()=>{this.particles.init(this.samples[e])}),this.currSample=e}next(){this.currSample<this.samples.length-1?this.goto(this.currSample+1):this.goto(0)}resize(){this.renderer&&(this.camera.aspect=window.innerWidth/window.innerHeight,this.camera.updateProjectionMatrix(),this.fovHeight=2*Math.tan(this.camera.fov*Math.PI/180/2)*this.camera.position.z,this.renderer.setSize(window.innerWidth,window.innerHeight),this.interactive&&this.interactive.resize(),this.particles&&this.particles.resize())}}const y1=`\r
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
`;class S1{constructor(e){this.app=e,this.texts=["I MAKE THINGS","I BREAK THINGS"],this.initThree(),this.init2DCanvas(),this.initGeometry(),this.initMaterial(),this.initScene(),this.addListeners(),this.animate(),this.resize()}initThree(){this.el=document.getElementById("hero-text"),this.scene=new Yp,this.camera=new Hp(this.el.clientWidth/-2,this.el.clientWidth/2,this.el.clientHeight/2,this.el.clientHeight/-2,-1e3,1e3),this.camera.position.z=300,this.renderer=new qp({alpha:!0}),this.renderer.setSize(this.el.clientWidth,this.el.clientHeight),this.el.appendChild(this.renderer.domElement),this.clock=new $p(!0)}wrapText(e,n,i,r,s,a,o){const l=n.split(" ");let u="",f=[];for(let d=0;d<l.length;d++){const c=u+l[d]+" ";e.measureText(c).width>s&&d>0?(f.push(u.trim()),u=l[d]+" "):u=c}f.push(u.trim()),r-=(f.length-1)/2*a;for(let d=0;d<f.length;d++)o?e.strokeText(f[d],i,r+d*a):e.fillText(f[d],i,r+d*a)}init2DCanvas(){this.canvas2D=document.createElement("canvas"),this.canvas2D.width=this.el.clientWidth,this.canvas2D.height=this.el.clientHeight,this.ctx2D=this.canvas2D.getContext("2d"),this.ctx2D.width=this.el.clientWidth,this.ctx2D.height=this.el.clientHeight,this.ctx2D.fillStyle="black",this.ctx2D.fillStyle="black",this.ctx2D.fillRect(0,0,this.ctx2D.width,this.ctx2D.height),this.ctx2D.strokeStyle="white",this.ctx2D.font="5rem 'Inter', system-ui, Avenir, Helvetica, Arial, sans-serif",this.selectedText=0,this.ctx2D.textAlign="center",this.ctx2D.textBaseline="middle",this.ctx2D.imageSmoothingEnabled=!0,this.ctx2D.imageSmoothingQuality="high";const e=this.canvas2D.width*.8,n=70*1.2;this.wrapText(this.ctx2D,this.texts[this.selectedText],this.canvas2D.width/2,this.canvas2D.height/2,e,n,!0),this.heroTexture=new yh(this.canvas2D),this.canvas2D.id="heroTexture",this.canvas2D.style.width=`${this.canvas2D.width}px`,this.canvas2D.style.height=`${this.canvas2D.height}px`;const i=this.canvas2D.width,r=this.canvas2D.height,s=document.createElement("canvas");s.width=i,s.height=r;const a=s.getContext("2d");a.font="5rem 'Inter', system-ui, Avenir, Helvetica, Arial, sans-serif",a.textAlign="center",a.textBaseline="middle",a.fillStyle="white",a.imageSmoothingEnabled=!0,a.imageSmoothingQuality="high",this.wrapText(a,this.texts[this.selectedText],s.width/2,s.height/2,e,n,!1),this.heroTexture2=new yh(s),this.heroTexture.minFilter=hn,this.heroTexture.magFilter=hn,this.heroTexture.anisotropy=this.renderer.capabilities.getMaxAnisotropy(),this.heroTexture2.minFilter=hn,this.heroTexture2.magFilter=hn,this.heroTexture2.anisotropy=this.renderer.capabilities.getMaxAnisotropy()}initGeometry(){this.geometry=new Ss(this.el.clientWidth,this.el.clientHeight)}initMaterial(){this.uniforms={iTime:{value:0},iResolution:{value:new yt(this.el.clientWidth,this.el.clientHeight)},uFontTex:{value:this.heroTexture},uFontTex2:{value:this.heroTexture2},uProgress:{value:.5}},this.material=new ei({fragmentShader:y1,uniforms:this.uniforms,transparent:!0,depthTest:!1,blending:Ar})}addListeners(){this.handlerAnimate=this.animate.bind(this),window.addEventListener("resize",this.resize.bind(this))}initScene(){this.mesh=new Pn(this.geometry,this.material),this.scene.add(this.mesh)}resize(){this.renderer&&(this.camera.aspect=this.el.clientWidth/this.el.clientHeight,this.camera.updateProjectionMatrix(),this.renderer.setSize(this.el.clientWidth,this.el.clientHeight),this.heroTexture.needsUpdate=!0,this.heroTexture2.needsUpdate=!0)}animate(){this.update(),this.draw(),this.raf=requestAnimationFrame(this.handlerAnimate)}update(){this.uniforms.iTime.value=this.clock.getElapsedTime()}draw(){this.renderer.render(this.scene,this.camera)}}class M1{constructor(){}init(){this.initWebGL(),this.initGUI(),this.addListeners(),this.animate(),this.resize()}initWebGL(){this.webgl=new x1(this),document.querySelector(".container").appendChild(this.webgl.renderer.domElement)}initGUI(){}addListeners(){this.handlerAnimate=this.animate.bind(this),window.addEventListener("resize",this.resize.bind(this)),window.addEventListener("keyup",this.keyup.bind(this)),this.webgl.renderer.domElement.addEventListener("click",this.click.bind(this))}animate(){this.update(),this.draw(),this.raf=requestAnimationFrame(this.handlerAnimate)}update(){this.webgl&&this.webgl.update(),this.gui&&this.gui.update()}draw(){this.webgl&&this.webgl.draw()}resize(){this.webgl&&this.webgl.resize()}keyup(e){e.keyCode==71&&this.gui&&this.gui.toggle()}click(e){this.webgl.next()}}const b1={class:"bg-tertiary w-full min-h-[100vh] flex justify-center"},T1={class:"w-2/3 relative z-10 py-2"},E1={__name:"App",setup(t){let e=null;return xs(()=>{e=new M1,e.init()}),(n,i)=>{const r=fu("router-view");return jt(),sn("div",b1,[i[0]||(i[0]=mt("div",{class:"fixed w-full h-screen overflow-hidden top-0 left-0 container pointer-events-none z-0"},null,-1)),Lt(O0),mt("div",T1,[mt("main",null,[Lt(r)])])])}}};/*!
  * vue-router v4.4.5
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */const Jr=typeof document<"u";function _m(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function w1(t){return t.__esModule||t[Symbol.toStringTag]==="Module"||t.default&&_m(t.default)}const St=Object.assign;function Nl(t,e){const n={};for(const i in e){const r=e[i];n[i]=Wn(r)?r.map(t):t(r)}return n}const Xs=()=>{},Wn=Array.isArray,gm=/#/g,A1=/&/g,C1=/\//g,R1=/=/g,P1=/\?/g,vm=/\+/g,D1=/%5B/g,L1=/%5D/g,xm=/%5E/g,I1=/%60/g,ym=/%7B/g,U1=/%7C/g,Sm=/%7D/g,O1=/%20/g;function Iu(t){return encodeURI(""+t).replace(U1,"|").replace(D1,"[").replace(L1,"]")}function N1(t){return Iu(t).replace(ym,"{").replace(Sm,"}").replace(xm,"^")}function jc(t){return Iu(t).replace(vm,"%2B").replace(O1,"+").replace(gm,"%23").replace(A1,"%26").replace(I1,"`").replace(ym,"{").replace(Sm,"}").replace(xm,"^")}function F1(t){return jc(t).replace(R1,"%3D")}function B1(t){return Iu(t).replace(gm,"%23").replace(P1,"%3F")}function k1(t){return t==null?"":B1(t).replace(C1,"%2F")}function ia(t){try{return decodeURIComponent(""+t)}catch{}return""+t}const z1=/\/$/,H1=t=>t.replace(z1,"");function Fl(t,e,n="/"){let i,r={},s="",a="";const o=e.indexOf("#");let l=e.indexOf("?");return o<l&&o>=0&&(l=-1),l>-1&&(i=e.slice(0,l),s=e.slice(l+1,o>-1?o:e.length),r=t(s)),o>-1&&(i=i||e.slice(0,o),a=e.slice(o,e.length)),i=X1(i??e,n),{fullPath:i+(s&&"?")+s+a,path:i,query:r,hash:ia(a)}}function V1(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function Ih(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function G1(t,e,n){const i=e.matched.length-1,r=n.matched.length-1;return i>-1&&i===r&&gs(e.matched[i],n.matched[r])&&Mm(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function gs(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function Mm(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!W1(t[n],e[n]))return!1;return!0}function W1(t,e){return Wn(t)?Uh(t,e):Wn(e)?Uh(e,t):t===e}function Uh(t,e){return Wn(e)?t.length===e.length&&t.every((n,i)=>n===e[i]):t.length===1&&t[0]===e}function X1(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),i=t.split("/"),r=i[i.length-1];(r===".."||r===".")&&i.push("");let s=n.length-1,a,o;for(a=0;a<i.length;a++)if(o=i[a],o!==".")if(o==="..")s>1&&s--;else break;return n.slice(0,s).join("/")+"/"+i.slice(a).join("/")}const Ni={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var ra;(function(t){t.pop="pop",t.push="push"})(ra||(ra={}));var js;(function(t){t.back="back",t.forward="forward",t.unknown=""})(js||(js={}));function j1(t){if(!t)if(Jr){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),H1(t)}const q1=/^[^#]+#/;function Y1(t,e){return t.replace(q1,"#")+e}function $1(t,e){const n=document.documentElement.getBoundingClientRect(),i=t.getBoundingClientRect();return{behavior:e.behavior,left:i.left-n.left-(e.left||0),top:i.top-n.top-(e.top||0)}}const Fo=()=>({left:window.scrollX,top:window.scrollY});function K1(t){let e;if("el"in t){const n=t.el,i=typeof n=="string"&&n.startsWith("#"),r=typeof n=="string"?i?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!r)return;e=$1(r,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function Oh(t,e){return(history.state?history.state.position-e:-1)+t}const qc=new Map;function Z1(t,e){qc.set(t,e)}function J1(t){const e=qc.get(t);return qc.delete(t),e}let Q1=()=>location.protocol+"//"+location.host;function bm(t,e){const{pathname:n,search:i,hash:r}=e,s=t.indexOf("#");if(s>-1){let o=r.includes(t.slice(s))?t.slice(s).length:1,l=r.slice(o);return l[0]!=="/"&&(l="/"+l),Ih(l,"")}return Ih(n,t)+i+r}function eE(t,e,n,i){let r=[],s=[],a=null;const o=({state:c})=>{const m=bm(t,location),p=n.value,x=e.value;let _=0;if(c){if(n.value=m,e.value=c,a&&a===p){a=null;return}_=x?c.position-x.position:0}else i(m);r.forEach(h=>{h(n.value,p,{delta:_,type:ra.pop,direction:_?_>0?js.forward:js.back:js.unknown})})};function l(){a=n.value}function u(c){r.push(c);const m=()=>{const p=r.indexOf(c);p>-1&&r.splice(p,1)};return s.push(m),m}function f(){const{history:c}=window;c.state&&c.replaceState(St({},c.state,{scroll:Fo()}),"")}function d(){for(const c of s)c();s=[],window.removeEventListener("popstate",o),window.removeEventListener("beforeunload",f)}return window.addEventListener("popstate",o),window.addEventListener("beforeunload",f,{passive:!0}),{pauseListeners:l,listen:u,destroy:d}}function Nh(t,e,n,i=!1,r=!1){return{back:t,current:e,forward:n,replaced:i,position:window.history.length,scroll:r?Fo():null}}function tE(t){const{history:e,location:n}=window,i={value:bm(t,n)},r={value:e.state};r.value||s(i.value,{back:null,current:i.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function s(l,u,f){const d=t.indexOf("#"),c=d>-1?(n.host&&document.querySelector("base")?t:t.slice(d))+l:Q1()+t+l;try{e[f?"replaceState":"pushState"](u,"",c),r.value=u}catch{n[f?"replace":"assign"](c)}}function a(l,u){const f=St({},e.state,Nh(r.value.back,l,r.value.forward,!0),u,{position:r.value.position});s(l,f,!0),i.value=l}function o(l,u){const f=St({},r.value,e.state,{forward:l,scroll:Fo()});s(f.current,f,!0);const d=St({},Nh(i.value,l,null),{position:f.position+1},u);s(l,d,!1),i.value=l}return{location:i,state:r,push:o,replace:a}}function nE(t){t=j1(t);const e=tE(t),n=eE(t,e.state,e.location,e.replace);function i(s,a=!0){a||n.pauseListeners(),history.go(s)}const r=St({location:"",base:t,go:i,createHref:Y1.bind(null,t)},e,n);return Object.defineProperty(r,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(r,"state",{enumerable:!0,get:()=>e.state.value}),r}function iE(t){return typeof t=="string"||t&&typeof t=="object"}function Tm(t){return typeof t=="string"||typeof t=="symbol"}const Em=Symbol("");var Fh;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(Fh||(Fh={}));function vs(t,e){return St(new Error,{type:t,[Em]:!0},e)}function hi(t,e){return t instanceof Error&&Em in t&&(e==null||!!(t.type&e))}const Bh="[^/]+?",rE={sensitive:!1,strict:!1,start:!0,end:!0},sE=/[.+*?^${}()[\]/\\]/g;function aE(t,e){const n=St({},rE,e),i=[];let r=n.start?"^":"";const s=[];for(const u of t){const f=u.length?[]:[90];n.strict&&!u.length&&(r+="/");for(let d=0;d<u.length;d++){const c=u[d];let m=40+(n.sensitive?.25:0);if(c.type===0)d||(r+="/"),r+=c.value.replace(sE,"\\$&"),m+=40;else if(c.type===1){const{value:p,repeatable:x,optional:_,regexp:h}=c;s.push({name:p,repeatable:x,optional:_});const b=h||Bh;if(b!==Bh){m+=10;try{new RegExp(`(${b})`)}catch(A){throw new Error(`Invalid custom RegExp for param "${p}" (${b}): `+A.message)}}let M=x?`((?:${b})(?:/(?:${b}))*)`:`(${b})`;d||(M=_&&u.length<2?`(?:/${M})`:"/"+M),_&&(M+="?"),r+=M,m+=20,_&&(m+=-8),x&&(m+=-20),b===".*"&&(m+=-50)}f.push(m)}i.push(f)}if(n.strict&&n.end){const u=i.length-1;i[u][i[u].length-1]+=.7000000000000001}n.strict||(r+="/?"),n.end?r+="$":n.strict&&(r+="(?:/|$)");const a=new RegExp(r,n.sensitive?"":"i");function o(u){const f=u.match(a),d={};if(!f)return null;for(let c=1;c<f.length;c++){const m=f[c]||"",p=s[c-1];d[p.name]=m&&p.repeatable?m.split("/"):m}return d}function l(u){let f="",d=!1;for(const c of t){(!d||!f.endsWith("/"))&&(f+="/"),d=!1;for(const m of c)if(m.type===0)f+=m.value;else if(m.type===1){const{value:p,repeatable:x,optional:_}=m,h=p in u?u[p]:"";if(Wn(h)&&!x)throw new Error(`Provided param "${p}" is an array but it is not repeatable (* or + modifiers)`);const b=Wn(h)?h.join("/"):h;if(!b)if(_)c.length<2&&(f.endsWith("/")?f=f.slice(0,-1):d=!0);else throw new Error(`Missing required param "${p}"`);f+=b}}return f||"/"}return{re:a,score:i,keys:s,parse:o,stringify:l}}function oE(t,e){let n=0;for(;n<t.length&&n<e.length;){const i=e[n]-t[n];if(i)return i;n++}return t.length<e.length?t.length===1&&t[0]===80?-1:1:t.length>e.length?e.length===1&&e[0]===80?1:-1:0}function wm(t,e){let n=0;const i=t.score,r=e.score;for(;n<i.length&&n<r.length;){const s=oE(i[n],r[n]);if(s)return s;n++}if(Math.abs(r.length-i.length)===1){if(kh(i))return 1;if(kh(r))return-1}return r.length-i.length}function kh(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const lE={type:0,value:""},cE=/[a-zA-Z0-9_]/;function uE(t){if(!t)return[[]];if(t==="/")return[[lE]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(m){throw new Error(`ERR (${n})/"${u}": ${m}`)}let n=0,i=n;const r=[];let s;function a(){s&&r.push(s),s=[]}let o=0,l,u="",f="";function d(){u&&(n===0?s.push({type:0,value:u}):n===1||n===2||n===3?(s.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),s.push({type:1,value:u,regexp:f,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),u="")}function c(){u+=l}for(;o<t.length;){if(l=t[o++],l==="\\"&&n!==2){i=n,n=4;continue}switch(n){case 0:l==="/"?(u&&d(),a()):l===":"?(d(),n=1):c();break;case 4:c(),n=i;break;case 1:l==="("?n=2:cE.test(l)?c():(d(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&o--);break;case 2:l===")"?f[f.length-1]=="\\"?f=f.slice(0,-1)+l:n=3:f+=l;break;case 3:d(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&o--,f="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${u}"`),d(),a(),r}function fE(t,e,n){const i=aE(uE(t.path),n),r=St(i,{record:t,parent:e,children:[],alias:[]});return e&&!r.record.aliasOf==!e.record.aliasOf&&e.children.push(r),r}function hE(t,e){const n=[],i=new Map;e=Gh({strict:!1,end:!0,sensitive:!1},e);function r(d){return i.get(d)}function s(d,c,m){const p=!m,x=Hh(d);x.aliasOf=m&&m.record;const _=Gh(e,d),h=[x];if("alias"in d){const A=typeof d.alias=="string"?[d.alias]:d.alias;for(const G of A)h.push(Hh(St({},x,{components:m?m.record.components:x.components,path:G,aliasOf:m?m.record:x})))}let b,M;for(const A of h){const{path:G}=A;if(c&&G[0]!=="/"){const L=c.record.path,B=L[L.length-1]==="/"?"":"/";A.path=c.record.path+(G&&B+G)}if(b=fE(A,c,_),m?m.alias.push(b):(M=M||b,M!==b&&M.alias.push(b),p&&d.name&&!Vh(b)&&a(d.name)),Am(b)&&l(b),x.children){const L=x.children;for(let B=0;B<L.length;B++)s(L[B],b,m&&m.children[B])}m=m||b}return M?()=>{a(M)}:Xs}function a(d){if(Tm(d)){const c=i.get(d);c&&(i.delete(d),n.splice(n.indexOf(c),1),c.children.forEach(a),c.alias.forEach(a))}else{const c=n.indexOf(d);c>-1&&(n.splice(c,1),d.record.name&&i.delete(d.record.name),d.children.forEach(a),d.alias.forEach(a))}}function o(){return n}function l(d){const c=mE(d,n);n.splice(c,0,d),d.record.name&&!Vh(d)&&i.set(d.record.name,d)}function u(d,c){let m,p={},x,_;if("name"in d&&d.name){if(m=i.get(d.name),!m)throw vs(1,{location:d});_=m.record.name,p=St(zh(c.params,m.keys.filter(M=>!M.optional).concat(m.parent?m.parent.keys.filter(M=>M.optional):[]).map(M=>M.name)),d.params&&zh(d.params,m.keys.map(M=>M.name))),x=m.stringify(p)}else if(d.path!=null)x=d.path,m=n.find(M=>M.re.test(x)),m&&(p=m.parse(x),_=m.record.name);else{if(m=c.name?i.get(c.name):n.find(M=>M.re.test(c.path)),!m)throw vs(1,{location:d,currentLocation:c});_=m.record.name,p=St({},c.params,d.params),x=m.stringify(p)}const h=[];let b=m;for(;b;)h.unshift(b.record),b=b.parent;return{name:_,path:x,params:p,matched:h,meta:pE(h)}}t.forEach(d=>s(d));function f(){n.length=0,i.clear()}return{addRoute:s,resolve:u,removeRoute:a,clearRoutes:f,getRoutes:o,getRecordMatcher:r}}function zh(t,e){const n={};for(const i of e)i in t&&(n[i]=t[i]);return n}function Hh(t){const e={path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:t.aliasOf,beforeEnter:t.beforeEnter,props:dE(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}};return Object.defineProperty(e,"mods",{value:{}}),e}function dE(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const i in t.components)e[i]=typeof n=="object"?n[i]:n;return e}function Vh(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function pE(t){return t.reduce((e,n)=>St(e,n.meta),{})}function Gh(t,e){const n={};for(const i in t)n[i]=i in e?e[i]:t[i];return n}function mE(t,e){let n=0,i=e.length;for(;n!==i;){const s=n+i>>1;wm(t,e[s])<0?i=s:n=s+1}const r=_E(t);return r&&(i=e.lastIndexOf(r,i-1)),i}function _E(t){let e=t;for(;e=e.parent;)if(Am(e)&&wm(t,e)===0)return e}function Am({record:t}){return!!(t.name||t.components&&Object.keys(t.components).length||t.redirect)}function gE(t){const e={};if(t===""||t==="?")return e;const i=(t[0]==="?"?t.slice(1):t).split("&");for(let r=0;r<i.length;++r){const s=i[r].replace(vm," "),a=s.indexOf("="),o=ia(a<0?s:s.slice(0,a)),l=a<0?null:ia(s.slice(a+1));if(o in e){let u=e[o];Wn(u)||(u=e[o]=[u]),u.push(l)}else e[o]=l}return e}function Wh(t){let e="";for(let n in t){const i=t[n];if(n=F1(n),i==null){i!==void 0&&(e+=(e.length?"&":"")+n);continue}(Wn(i)?i.map(s=>s&&jc(s)):[i&&jc(i)]).forEach(s=>{s!==void 0&&(e+=(e.length?"&":"")+n,s!=null&&(e+="="+s))})}return e}function vE(t){const e={};for(const n in t){const i=t[n];i!==void 0&&(e[n]=Wn(i)?i.map(r=>r==null?null:""+r):i==null?i:""+i)}return e}const xE=Symbol(""),Xh=Symbol(""),Uu=Symbol(""),Cm=Symbol(""),Yc=Symbol("");function Os(){let t=[];function e(i){return t.push(i),()=>{const r=t.indexOf(i);r>-1&&t.splice(r,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function Hi(t,e,n,i,r,s=a=>a()){const a=i&&(i.enterCallbacks[r]=i.enterCallbacks[r]||[]);return()=>new Promise((o,l)=>{const u=c=>{c===!1?l(vs(4,{from:n,to:e})):c instanceof Error?l(c):iE(c)?l(vs(2,{from:e,to:c})):(a&&i.enterCallbacks[r]===a&&typeof c=="function"&&a.push(c),o())},f=s(()=>t.call(i&&i.instances[r],e,n,u));let d=Promise.resolve(f);t.length<3&&(d=d.then(u)),d.catch(c=>l(c))})}function Bl(t,e,n,i,r=s=>s()){const s=[];for(const a of t)for(const o in a.components){let l=a.components[o];if(!(e!=="beforeRouteEnter"&&!a.instances[o]))if(_m(l)){const f=(l.__vccOpts||l)[e];f&&s.push(Hi(f,n,i,a,o,r))}else{let u=l();s.push(()=>u.then(f=>{if(!f)throw new Error(`Couldn't resolve component "${o}" at "${a.path}"`);const d=w1(f)?f.default:f;a.mods[o]=f,a.components[o]=d;const m=(d.__vccOpts||d)[e];return m&&Hi(m,n,i,a,o,r)()}))}}return s}function jh(t){const e=xi(Uu),n=xi(Cm),i=Fn(()=>{const l=ji(t.to);return e.resolve(l)}),r=Fn(()=>{const{matched:l}=i.value,{length:u}=l,f=l[u-1],d=n.matched;if(!f||!d.length)return-1;const c=d.findIndex(gs.bind(null,f));if(c>-1)return c;const m=qh(l[u-2]);return u>1&&qh(f)===m&&d[d.length-1].path!==m?d.findIndex(gs.bind(null,l[u-2])):c}),s=Fn(()=>r.value>-1&&bE(n.params,i.value.params)),a=Fn(()=>r.value>-1&&r.value===n.matched.length-1&&Mm(n.params,i.value.params));function o(l={}){return ME(l)?e[ji(t.replace)?"replace":"push"](ji(t.to)).catch(Xs):Promise.resolve()}return{route:i,href:Fn(()=>i.value.href),isActive:s,isExactActive:a,navigate:o}}const yE=wo({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:jh,setup(t,{slots:e}){const n=To(jh(t)),{options:i}=xi(Uu),r=Fn(()=>({[Yh(t.activeClass,i.linkActiveClass,"router-link-active")]:n.isActive,[Yh(t.exactActiveClass,i.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const s=e.default&&e.default(n);return t.custom?s:_u("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:r.value},s)}}}),SE=yE;function ME(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function bE(t,e){for(const n in e){const i=e[n],r=t[n];if(typeof i=="string"){if(i!==r)return!1}else if(!Wn(r)||r.length!==i.length||i.some((s,a)=>s!==r[a]))return!1}return!0}function qh(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const Yh=(t,e,n)=>t??e??n,TE=wo({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const i=xi(Yc),r=Fn(()=>t.route||i.value),s=xi(Xh,0),a=Fn(()=>{let u=ji(s);const{matched:f}=r.value;let d;for(;(d=f[u])&&!d.components;)u++;return u}),o=Fn(()=>r.value.matched[a.value]);Xa(Xh,Fn(()=>a.value+1)),Xa(xE,o),Xa(Yc,r);const l=Dr();return ja(()=>[l.value,o.value,t.name],([u,f,d],[c,m,p])=>{f&&(f.instances[d]=u,m&&m!==f&&u&&u===c&&(f.leaveGuards.size||(f.leaveGuards=m.leaveGuards),f.updateGuards.size||(f.updateGuards=m.updateGuards))),u&&f&&(!m||!gs(f,m)||!c)&&(f.enterCallbacks[d]||[]).forEach(x=>x(u))},{flush:"post"}),()=>{const u=r.value,f=t.name,d=o.value,c=d&&d.components[f];if(!c)return $h(n.default,{Component:c,route:u});const m=d.props[f],p=m?m===!0?u.params:typeof m=="function"?m(u):m:null,_=_u(c,St({},p,e,{onVnodeUnmounted:h=>{h.component.isUnmounted&&(d.instances[f]=null)},ref:l}));return $h(n.default,{Component:_,route:u})||_}}});function $h(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const EE=TE;function wE(t){const e=hE(t.routes,t),n=t.parseQuery||gE,i=t.stringifyQuery||Wh,r=t.history,s=Os(),a=Os(),o=Os(),l=C_(Ni);let u=Ni;Jr&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const f=Nl.bind(null,K=>""+K),d=Nl.bind(null,k1),c=Nl.bind(null,ia);function m(K,xe){let _e,Ce;return Tm(K)?(_e=e.getRecordMatcher(K),Ce=xe):Ce=K,e.addRoute(Ce,_e)}function p(K){const xe=e.getRecordMatcher(K);xe&&e.removeRoute(xe)}function x(){return e.getRoutes().map(K=>K.record)}function _(K){return!!e.getRecordMatcher(K)}function h(K,xe){if(xe=St({},xe||l.value),typeof K=="string"){const H=Fl(n,K,xe.path),j=e.resolve({path:H.path},xe),ue=r.createHref(H.fullPath);return St(H,j,{params:c(j.params),hash:ia(H.hash),redirectedFrom:void 0,href:ue})}let _e;if(K.path!=null)_e=St({},K,{path:Fl(n,K.path,xe.path).path});else{const H=St({},K.params);for(const j in H)H[j]==null&&delete H[j];_e=St({},K,{params:d(H)}),xe.params=d(xe.params)}const Ce=e.resolve(_e,xe),Ve=K.hash||"";Ce.params=f(c(Ce.params));const He=V1(i,St({},K,{hash:N1(Ve),path:Ce.path})),w=r.createHref(He);return St({fullPath:He,hash:Ve,query:i===Wh?vE(K.query):K.query||{}},Ce,{redirectedFrom:void 0,href:w})}function b(K){return typeof K=="string"?Fl(n,K,l.value.path):St({},K)}function M(K,xe){if(u!==K)return vs(8,{from:xe,to:K})}function A(K){return B(K)}function G(K){return A(St(b(K),{replace:!0}))}function L(K){const xe=K.matched[K.matched.length-1];if(xe&&xe.redirect){const{redirect:_e}=xe;let Ce=typeof _e=="function"?_e(K):_e;return typeof Ce=="string"&&(Ce=Ce.includes("?")||Ce.includes("#")?Ce=b(Ce):{path:Ce},Ce.params={}),St({query:K.query,hash:K.hash,params:Ce.path!=null?{}:K.params},Ce)}}function B(K,xe){const _e=u=h(K),Ce=l.value,Ve=K.state,He=K.force,w=K.replace===!0,H=L(_e);if(H)return B(St(b(H),{state:typeof H=="object"?St({},Ve,H.state):Ve,force:He,replace:w}),xe||_e);const j=_e;j.redirectedFrom=xe;let ue;return!He&&G1(i,Ce,_e)&&(ue=vs(16,{to:j,from:Ce}),ze(Ce,Ce,!0,!1)),(ue?Promise.resolve(ue):E(j,Ce)).catch(le=>hi(le)?hi(le,2)?le:Fe(le):te(le,j,Ce)).then(le=>{if(le){if(hi(le,2))return B(St({replace:w},b(le.to),{state:typeof le.to=="object"?St({},Ve,le.to.state):Ve,force:He}),xe||j)}else le=V(j,Ce,!0,w,Ve);return C(j,Ce,le),le})}function X(K,xe){const _e=M(K,xe);return _e?Promise.reject(_e):Promise.resolve()}function Y(K){const xe=ge.values().next().value;return xe&&typeof xe.runWithContext=="function"?xe.runWithContext(K):K()}function E(K,xe){let _e;const[Ce,Ve,He]=AE(K,xe);_e=Bl(Ce.reverse(),"beforeRouteLeave",K,xe);for(const H of Ce)H.leaveGuards.forEach(j=>{_e.push(Hi(j,K,xe))});const w=X.bind(null,K,xe);return _e.push(w),Ie(_e).then(()=>{_e=[];for(const H of s.list())_e.push(Hi(H,K,xe));return _e.push(w),Ie(_e)}).then(()=>{_e=Bl(Ve,"beforeRouteUpdate",K,xe);for(const H of Ve)H.updateGuards.forEach(j=>{_e.push(Hi(j,K,xe))});return _e.push(w),Ie(_e)}).then(()=>{_e=[];for(const H of He)if(H.beforeEnter)if(Wn(H.beforeEnter))for(const j of H.beforeEnter)_e.push(Hi(j,K,xe));else _e.push(Hi(H.beforeEnter,K,xe));return _e.push(w),Ie(_e)}).then(()=>(K.matched.forEach(H=>H.enterCallbacks={}),_e=Bl(He,"beforeRouteEnter",K,xe,Y),_e.push(w),Ie(_e))).then(()=>{_e=[];for(const H of a.list())_e.push(Hi(H,K,xe));return _e.push(w),Ie(_e)}).catch(H=>hi(H,8)?H:Promise.reject(H))}function C(K,xe,_e){o.list().forEach(Ce=>Y(()=>Ce(K,xe,_e)))}function V(K,xe,_e,Ce,Ve){const He=M(K,xe);if(He)return He;const w=xe===Ni,H=Jr?history.state:{};_e&&(Ce||w?r.replace(K.fullPath,St({scroll:w&&H&&H.scroll},Ve)):r.push(K.fullPath,Ve)),l.value=K,ze(K,xe,_e,w),Fe()}let W;function Z(){W||(W=r.listen((K,xe,_e)=>{if(!we.listening)return;const Ce=h(K),Ve=L(Ce);if(Ve){B(St(Ve,{replace:!0}),Ce).catch(Xs);return}u=Ce;const He=l.value;Jr&&Z1(Oh(He.fullPath,_e.delta),Fo()),E(Ce,He).catch(w=>hi(w,12)?w:hi(w,2)?(B(w.to,Ce).then(H=>{hi(H,20)&&!_e.delta&&_e.type===ra.pop&&r.go(-1,!1)}).catch(Xs),Promise.reject()):(_e.delta&&r.go(-_e.delta,!1),te(w,Ce,He))).then(w=>{w=w||V(Ce,He,!1),w&&(_e.delta&&!hi(w,8)?r.go(-_e.delta,!1):_e.type===ra.pop&&hi(w,20)&&r.go(-1,!1)),C(Ce,He,w)}).catch(Xs)}))}let ne=Os(),se=Os(),de;function te(K,xe,_e){Fe(K);const Ce=se.list();return Ce.length&&Ce.forEach(Ve=>Ve(K,xe,_e)),Promise.reject(K)}function Le(){return de&&l.value!==Ni?Promise.resolve():new Promise((K,xe)=>{ne.add([K,xe])})}function Fe(K){return de||(de=!K,Z(),ne.list().forEach(([xe,_e])=>K?_e(K):xe()),ne.reset()),K}function ze(K,xe,_e,Ce){const{scrollBehavior:Ve}=t;if(!Jr||!Ve)return Promise.resolve();const He=!_e&&J1(Oh(K.fullPath,0))||(Ce||!_e)&&history.state&&history.state.scroll||null;return Rd().then(()=>Ve(K,xe,He)).then(w=>w&&K1(w)).catch(w=>te(w,K,xe))}const Ze=K=>r.go(K);let Je;const ge=new Set,we={currentRoute:l,listening:!0,addRoute:m,removeRoute:p,clearRoutes:e.clearRoutes,hasRoute:_,getRoutes:x,resolve:h,options:t,push:A,replace:G,go:Ze,back:()=>Ze(-1),forward:()=>Ze(1),beforeEach:s.add,beforeResolve:a.add,afterEach:o.add,onError:se.add,isReady:Le,install(K){const xe=this;K.component("RouterLink",SE),K.component("RouterView",EE),K.config.globalProperties.$router=xe,Object.defineProperty(K.config.globalProperties,"$route",{enumerable:!0,get:()=>ji(l)}),Jr&&!Je&&l.value===Ni&&(Je=!0,A(r.location).catch(Ve=>{}));const _e={};for(const Ve in Ni)Object.defineProperty(_e,Ve,{get:()=>l.value[Ve],enumerable:!0});K.provide(Uu,xe),K.provide(Cm,Td(_e)),K.provide(Yc,l);const Ce=K.unmount;ge.add(K),K.unmount=function(){ge.delete(K),ge.size<1&&(u=Ni,W&&W(),W=null,l.value=Ni,Je=!1,de=!1),Ce()}}};function Ie(K){return K.reduce((xe,_e)=>xe.then(()=>Y(_e)),Promise.resolve())}return we}function AE(t,e){const n=[],i=[],r=[],s=Math.max(e.matched.length,t.matched.length);for(let a=0;a<s;a++){const o=e.matched[a];o&&(t.matched.find(u=>gs(u,o))?i.push(o):n.push(o));const l=t.matched[a];l&&(e.matched.find(u=>gs(u,l))||r.push(l))}return[n,i,r]}var Rm={update:null,begin:null,loopBegin:null,changeBegin:null,change:null,changeComplete:null,loopComplete:null,complete:null,loop:1,direction:"normal",autoplay:!0,timelineOffset:0},Ou={duration:1e3,delay:0,endDelay:0,easing:"easeOutElastic(1, .5)",round:0},CE=["translateX","translateY","translateZ","rotate","rotateX","rotateY","rotateZ","scale","scaleX","scaleY","scaleZ","skew","skewX","skewY","perspective","matrix","matrix3d"],_o={CSS:{},springs:{}};function Kn(t,e,n){return Math.min(Math.max(t,e),n)}function qs(t,e){return t.indexOf(e)>-1}function kl(t,e){return t.apply(null,e)}var tt={arr:function(t){return Array.isArray(t)},obj:function(t){return qs(Object.prototype.toString.call(t),"Object")},pth:function(t){return tt.obj(t)&&t.hasOwnProperty("totalLength")},svg:function(t){return t instanceof SVGElement},inp:function(t){return t instanceof HTMLInputElement},dom:function(t){return t.nodeType||tt.svg(t)},str:function(t){return typeof t=="string"},fnc:function(t){return typeof t=="function"},und:function(t){return typeof t>"u"},nil:function(t){return tt.und(t)||t===null},hex:function(t){return/(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(t)},rgb:function(t){return/^rgb/.test(t)},hsl:function(t){return/^hsl/.test(t)},col:function(t){return tt.hex(t)||tt.rgb(t)||tt.hsl(t)},key:function(t){return!Rm.hasOwnProperty(t)&&!Ou.hasOwnProperty(t)&&t!=="targets"&&t!=="keyframes"}};function Pm(t){var e=/\(([^)]+)\)/.exec(t);return e?e[1].split(",").map(function(n){return parseFloat(n)}):[]}function Dm(t,e){var n=Pm(t),i=Kn(tt.und(n[0])?1:n[0],.1,100),r=Kn(tt.und(n[1])?100:n[1],.1,100),s=Kn(tt.und(n[2])?10:n[2],.1,100),a=Kn(tt.und(n[3])?0:n[3],.1,100),o=Math.sqrt(r/i),l=s/(2*Math.sqrt(r*i)),u=l<1?o*Math.sqrt(1-l*l):0,f=1,d=l<1?(l*o+-a)/u:-a+o;function c(p){var x=e?e*p/1e3:p;return l<1?x=Math.exp(-x*l*o)*(f*Math.cos(u*x)+d*Math.sin(u*x)):x=(f+d*x)*Math.exp(-x*o),p===0||p===1?p:1-x}function m(){var p=_o.springs[t];if(p)return p;for(var x=1/6,_=0,h=0;;)if(_+=x,c(_)===1){if(h++,h>=16)break}else h=0;var b=_*x*1e3;return _o.springs[t]=b,b}return e?c:m}function RE(t){return t===void 0&&(t=10),function(e){return Math.ceil(Kn(e,1e-6,1)*t)*(1/t)}}var PE=function(){var t=11,e=1/(t-1);function n(f,d){return 1-3*d+3*f}function i(f,d){return 3*d-6*f}function r(f){return 3*f}function s(f,d,c){return((n(d,c)*f+i(d,c))*f+r(d))*f}function a(f,d,c){return 3*n(d,c)*f*f+2*i(d,c)*f+r(d)}function o(f,d,c,m,p){var x,_,h=0;do _=d+(c-d)/2,x=s(_,m,p)-f,x>0?c=_:d=_;while(Math.abs(x)>1e-7&&++h<10);return _}function l(f,d,c,m){for(var p=0;p<4;++p){var x=a(d,c,m);if(x===0)return d;var _=s(d,c,m)-f;d-=_/x}return d}function u(f,d,c,m){if(!(0<=f&&f<=1&&0<=c&&c<=1))return;var p=new Float32Array(t);if(f!==d||c!==m)for(var x=0;x<t;++x)p[x]=s(x*e,f,c);function _(h){for(var b=0,M=1,A=t-1;M!==A&&p[M]<=h;++M)b+=e;--M;var G=(h-p[M])/(p[M+1]-p[M]),L=b+G*e,B=a(L,f,c);return B>=.001?l(h,L,f,c):B===0?L:o(h,b,b+e,f,c)}return function(h){return f===d&&c===m||h===0||h===1?h:s(_(h),d,m)}}return u}(),Lm=function(){var t={linear:function(){return function(i){return i}}},e={Sine:function(){return function(i){return 1-Math.cos(i*Math.PI/2)}},Expo:function(){return function(i){return i?Math.pow(2,10*i-10):0}},Circ:function(){return function(i){return 1-Math.sqrt(1-i*i)}},Back:function(){return function(i){return i*i*(3*i-2)}},Bounce:function(){return function(i){for(var r,s=4;i<((r=Math.pow(2,--s))-1)/11;);return 1/Math.pow(4,3-s)-7.5625*Math.pow((r*3-2)/22-i,2)}},Elastic:function(i,r){i===void 0&&(i=1),r===void 0&&(r=.5);var s=Kn(i,1,10),a=Kn(r,.1,2);return function(o){return o===0||o===1?o:-s*Math.pow(2,10*(o-1))*Math.sin((o-1-a/(Math.PI*2)*Math.asin(1/s))*(Math.PI*2)/a)}}},n=["Quad","Cubic","Quart","Quint"];return n.forEach(function(i,r){e[i]=function(){return function(s){return Math.pow(s,r+2)}}}),Object.keys(e).forEach(function(i){var r=e[i];t["easeIn"+i]=r,t["easeOut"+i]=function(s,a){return function(o){return 1-r(s,a)(1-o)}},t["easeInOut"+i]=function(s,a){return function(o){return o<.5?r(s,a)(o*2)/2:1-r(s,a)(o*-2+2)/2}},t["easeOutIn"+i]=function(s,a){return function(o){return o<.5?(1-r(s,a)(1-o*2))/2:(r(s,a)(o*2-1)+1)/2}}}),t}();function Nu(t,e){if(tt.fnc(t))return t;var n=t.split("(")[0],i=Lm[n],r=Pm(t);switch(n){case"spring":return Dm(t,e);case"cubicBezier":return kl(PE,r);case"steps":return kl(RE,r);default:return kl(i,r)}}function Im(t){try{var e=document.querySelectorAll(t);return e}catch{return}}function Bo(t,e){for(var n=t.length,i=arguments.length>=2?arguments[1]:void 0,r=[],s=0;s<n;s++)if(s in t){var a=t[s];e.call(i,a,s,t)&&r.push(a)}return r}function ko(t){return t.reduce(function(e,n){return e.concat(tt.arr(n)?ko(n):n)},[])}function Kh(t){return tt.arr(t)?t:(tt.str(t)&&(t=Im(t)||t),t instanceof NodeList||t instanceof HTMLCollection?[].slice.call(t):[t])}function Fu(t,e){return t.some(function(n){return n===e})}function Bu(t){var e={};for(var n in t)e[n]=t[n];return e}function $c(t,e){var n=Bu(t);for(var i in t)n[i]=e.hasOwnProperty(i)?e[i]:t[i];return n}function zo(t,e){var n=Bu(t);for(var i in e)n[i]=tt.und(t[i])?e[i]:t[i];return n}function DE(t){var e=/rgb\((\d+,\s*[\d]+,\s*[\d]+)\)/g.exec(t);return e?"rgba("+e[1]+",1)":t}function LE(t){var e=/^#?([a-f\d])([a-f\d])([a-f\d])$/i,n=t.replace(e,function(o,l,u,f){return l+l+u+u+f+f}),i=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(n),r=parseInt(i[1],16),s=parseInt(i[2],16),a=parseInt(i[3],16);return"rgba("+r+","+s+","+a+",1)"}function IE(t){var e=/hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)/g.exec(t)||/hsla\((\d+),\s*([\d.]+)%,\s*([\d.]+)%,\s*([\d.]+)\)/g.exec(t),n=parseInt(e[1],10)/360,i=parseInt(e[2],10)/100,r=parseInt(e[3],10)/100,s=e[4]||1;function a(c,m,p){return p<0&&(p+=1),p>1&&(p-=1),p<1/6?c+(m-c)*6*p:p<1/2?m:p<2/3?c+(m-c)*(2/3-p)*6:c}var o,l,u;if(i==0)o=l=u=r;else{var f=r<.5?r*(1+i):r+i-r*i,d=2*r-f;o=a(d,f,n+1/3),l=a(d,f,n),u=a(d,f,n-1/3)}return"rgba("+o*255+","+l*255+","+u*255+","+s+")"}function UE(t){if(tt.rgb(t))return DE(t);if(tt.hex(t))return LE(t);if(tt.hsl(t))return IE(t)}function Si(t){var e=/[+-]?\d*\.?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?(%|px|pt|em|rem|in|cm|mm|ex|ch|pc|vw|vh|vmin|vmax|deg|rad|turn)?$/.exec(t);if(e)return e[1]}function OE(t){if(qs(t,"translate")||t==="perspective")return"px";if(qs(t,"rotate")||qs(t,"skew"))return"deg"}function Kc(t,e){return tt.fnc(t)?t(e.target,e.id,e.total):t}function Zn(t,e){return t.getAttribute(e)}function ku(t,e,n){var i=Si(e);if(Fu([n,"deg","rad","turn"],i))return e;var r=_o.CSS[e+n];if(!tt.und(r))return r;var s=100,a=document.createElement(t.tagName),o=t.parentNode&&t.parentNode!==document?t.parentNode:document.body;o.appendChild(a),a.style.position="absolute",a.style.width=s+n;var l=s/a.offsetWidth;o.removeChild(a);var u=l*parseFloat(e);return _o.CSS[e+n]=u,u}function Um(t,e,n){if(e in t.style){var i=e.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase(),r=t.style[e]||getComputedStyle(t).getPropertyValue(i)||"0";return n?ku(t,r,n):r}}function zu(t,e){if(tt.dom(t)&&!tt.inp(t)&&(!tt.nil(Zn(t,e))||tt.svg(t)&&t[e]))return"attribute";if(tt.dom(t)&&Fu(CE,e))return"transform";if(tt.dom(t)&&e!=="transform"&&Um(t,e))return"css";if(t[e]!=null)return"object"}function Om(t){if(tt.dom(t)){for(var e=t.style.transform||"",n=/(\w+)\(([^)]*)\)/g,i=new Map,r;r=n.exec(e);)i.set(r[1],r[2]);return i}}function NE(t,e,n,i){var r=qs(e,"scale")?1:0+OE(e),s=Om(t).get(e)||r;return n&&(n.transforms.list.set(e,s),n.transforms.last=e),i?ku(t,s,i):s}function Hu(t,e,n,i){switch(zu(t,e)){case"transform":return NE(t,e,i,n);case"css":return Um(t,e,n);case"attribute":return Zn(t,e);default:return t[e]||0}}function Vu(t,e){var n=/^(\*=|\+=|-=)/.exec(t);if(!n)return t;var i=Si(t)||0,r=parseFloat(e),s=parseFloat(t.replace(n[0],""));switch(n[0][0]){case"+":return r+s+i;case"-":return r-s+i;case"*":return r*s+i}}function Nm(t,e){if(tt.col(t))return UE(t);if(/\s/g.test(t))return t;var n=Si(t),i=n?t.substr(0,t.length-n.length):t;return e?i+e:i}function Gu(t,e){return Math.sqrt(Math.pow(e.x-t.x,2)+Math.pow(e.y-t.y,2))}function FE(t){return Math.PI*2*Zn(t,"r")}function BE(t){return Zn(t,"width")*2+Zn(t,"height")*2}function kE(t){return Gu({x:Zn(t,"x1"),y:Zn(t,"y1")},{x:Zn(t,"x2"),y:Zn(t,"y2")})}function Fm(t){for(var e=t.points,n=0,i,r=0;r<e.numberOfItems;r++){var s=e.getItem(r);r>0&&(n+=Gu(i,s)),i=s}return n}function zE(t){var e=t.points;return Fm(t)+Gu(e.getItem(e.numberOfItems-1),e.getItem(0))}function Bm(t){if(t.getTotalLength)return t.getTotalLength();switch(t.tagName.toLowerCase()){case"circle":return FE(t);case"rect":return BE(t);case"line":return kE(t);case"polyline":return Fm(t);case"polygon":return zE(t)}}function HE(t){var e=Bm(t);return t.setAttribute("stroke-dasharray",e),e}function VE(t){for(var e=t.parentNode;tt.svg(e)&&tt.svg(e.parentNode);)e=e.parentNode;return e}function km(t,e){var n=e||{},i=n.el||VE(t),r=i.getBoundingClientRect(),s=Zn(i,"viewBox"),a=r.width,o=r.height,l=n.viewBox||(s?s.split(" "):[0,0,a,o]);return{el:i,viewBox:l,x:l[0]/1,y:l[1]/1,w:a,h:o,vW:l[2],vH:l[3]}}function GE(t,e){var n=tt.str(t)?Im(t)[0]:t,i=e||100;return function(r){return{property:r,el:n,svg:km(n),totalLength:Bm(n)*(i/100)}}}function WE(t,e,n){function i(f){f===void 0&&(f=0);var d=e+f>=1?e+f:0;return t.el.getPointAtLength(d)}var r=km(t.el,t.svg),s=i(),a=i(-1),o=i(1),l=n?1:r.w/r.vW,u=n?1:r.h/r.vH;switch(t.property){case"x":return(s.x-r.x)*l;case"y":return(s.y-r.y)*u;case"angle":return Math.atan2(o.y-a.y,o.x-a.x)*180/Math.PI}}function Zh(t,e){var n=/[+-]?\d*\.?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?/g,i=Nm(tt.pth(t)?t.totalLength:t,e)+"";return{original:i,numbers:i.match(n)?i.match(n).map(Number):[0],strings:tt.str(t)||e?i.split(n):[]}}function Wu(t){var e=t?ko(tt.arr(t)?t.map(Kh):Kh(t)):[];return Bo(e,function(n,i,r){return r.indexOf(n)===i})}function zm(t){var e=Wu(t);return e.map(function(n,i){return{target:n,id:i,total:e.length,transforms:{list:Om(n)}}})}function XE(t,e){var n=Bu(e);if(/^spring/.test(n.easing)&&(n.duration=Dm(n.easing)),tt.arr(t)){var i=t.length,r=i===2&&!tt.obj(t[0]);r?t={value:t}:tt.fnc(e.duration)||(n.duration=e.duration/i)}var s=tt.arr(t)?t:[t];return s.map(function(a,o){var l=tt.obj(a)&&!tt.pth(a)?a:{value:a};return tt.und(l.delay)&&(l.delay=o?0:e.delay),tt.und(l.endDelay)&&(l.endDelay=o===s.length-1?e.endDelay:0),l}).map(function(a){return zo(a,n)})}function jE(t){for(var e=Bo(ko(t.map(function(s){return Object.keys(s)})),function(s){return tt.key(s)}).reduce(function(s,a){return s.indexOf(a)<0&&s.push(a),s},[]),n={},i=function(s){var a=e[s];n[a]=t.map(function(o){var l={};for(var u in o)tt.key(u)?u==a&&(l.value=o[u]):l[u]=o[u];return l})},r=0;r<e.length;r++)i(r);return n}function qE(t,e){var n=[],i=e.keyframes;i&&(e=zo(jE(i),e));for(var r in e)tt.key(r)&&n.push({name:r,tweens:XE(e[r],t)});return n}function YE(t,e){var n={};for(var i in t){var r=Kc(t[i],e);tt.arr(r)&&(r=r.map(function(s){return Kc(s,e)}),r.length===1&&(r=r[0])),n[i]=r}return n.duration=parseFloat(n.duration),n.delay=parseFloat(n.delay),n}function $E(t,e){var n;return t.tweens.map(function(i){var r=YE(i,e),s=r.value,a=tt.arr(s)?s[1]:s,o=Si(a),l=Hu(e.target,t.name,o,e),u=n?n.to.original:l,f=tt.arr(s)?s[0]:u,d=Si(f)||Si(l),c=o||d;return tt.und(a)&&(a=u),r.from=Zh(f,c),r.to=Zh(Vu(a,f),c),r.start=n?n.end:0,r.end=r.start+r.delay+r.duration+r.endDelay,r.easing=Nu(r.easing,r.duration),r.isPath=tt.pth(s),r.isPathTargetInsideSVG=r.isPath&&tt.svg(e.target),r.isColor=tt.col(r.from.original),r.isColor&&(r.round=1),n=r,r})}var Hm={css:function(t,e,n){return t.style[e]=n},attribute:function(t,e,n){return t.setAttribute(e,n)},object:function(t,e,n){return t[e]=n},transform:function(t,e,n,i,r){if(i.list.set(e,n),e===i.last||r){var s="";i.list.forEach(function(a,o){s+=o+"("+a+") "}),t.style.transform=s}}};function Vm(t,e){var n=zm(t);n.forEach(function(i){for(var r in e){var s=Kc(e[r],i),a=i.target,o=Si(s),l=Hu(a,r,o,i),u=o||Si(l),f=Vu(Nm(s,u),l),d=zu(a,r);Hm[d](a,r,f,i.transforms,!0)}})}function KE(t,e){var n=zu(t.target,e.name);if(n){var i=$E(e,t),r=i[i.length-1];return{type:n,property:e.name,animatable:t,tweens:i,duration:r.end,delay:i[0].delay,endDelay:r.endDelay}}}function ZE(t,e){return Bo(ko(t.map(function(n){return e.map(function(i){return KE(n,i)})})),function(n){return!tt.und(n)})}function Gm(t,e){var n=t.length,i=function(s){return s.timelineOffset?s.timelineOffset:0},r={};return r.duration=n?Math.max.apply(Math,t.map(function(s){return i(s)+s.duration})):e.duration,r.delay=n?Math.min.apply(Math,t.map(function(s){return i(s)+s.delay})):e.delay,r.endDelay=n?r.duration-Math.max.apply(Math,t.map(function(s){return i(s)+s.duration-s.endDelay})):e.endDelay,r}var Jh=0;function JE(t){var e=$c(Rm,t),n=$c(Ou,t),i=qE(n,t),r=zm(t.targets),s=ZE(r,i),a=Gm(s,n),o=Jh;return Jh++,zo(e,{id:o,children:[],animatables:r,animations:s,duration:a.duration,delay:a.delay,endDelay:a.endDelay})}var zn=[],Wm=function(){var t;function e(){!t&&(!Qh()||!It.suspendWhenDocumentHidden)&&zn.length>0&&(t=requestAnimationFrame(n))}function n(r){for(var s=zn.length,a=0;a<s;){var o=zn[a];o.paused?(zn.splice(a,1),s--):(o.tick(r),a++)}t=a>0?requestAnimationFrame(n):void 0}function i(){It.suspendWhenDocumentHidden&&(Qh()?t=cancelAnimationFrame(t):(zn.forEach(function(r){return r._onDocumentVisibility()}),Wm()))}return typeof document<"u"&&document.addEventListener("visibilitychange",i),e}();function Qh(){return!!document&&document.hidden}function It(t){t===void 0&&(t={});var e=0,n=0,i=0,r,s=0,a=null;function o(b){var M=window.Promise&&new Promise(function(A){return a=A});return b.finished=M,M}var l=JE(t);o(l);function u(){var b=l.direction;b!=="alternate"&&(l.direction=b!=="normal"?"normal":"reverse"),l.reversed=!l.reversed,r.forEach(function(M){return M.reversed=l.reversed})}function f(b){return l.reversed?l.duration-b:b}function d(){e=0,n=f(l.currentTime)*(1/It.speed)}function c(b,M){M&&M.seek(b-M.timelineOffset)}function m(b){if(l.reversePlayback)for(var A=s;A--;)c(b,r[A]);else for(var M=0;M<s;M++)c(b,r[M])}function p(b){for(var M=0,A=l.animations,G=A.length;M<G;){var L=A[M],B=L.animatable,X=L.tweens,Y=X.length-1,E=X[Y];Y&&(E=Bo(X,function(Ie){return b<Ie.end})[0]||E);for(var C=Kn(b-E.start-E.delay,0,E.duration)/E.duration,V=isNaN(C)?1:E.easing(C),W=E.to.strings,Z=E.round,ne=[],se=E.to.numbers.length,de=void 0,te=0;te<se;te++){var Le=void 0,Fe=E.to.numbers[te],ze=E.from.numbers[te]||0;E.isPath?Le=WE(E.value,V*Fe,E.isPathTargetInsideSVG):Le=ze+V*(Fe-ze),Z&&(E.isColor&&te>2||(Le=Math.round(Le*Z)/Z)),ne.push(Le)}var Ze=W.length;if(!Ze)de=ne[0];else{de=W[0];for(var Je=0;Je<Ze;Je++){W[Je];var ge=W[Je+1],we=ne[Je];isNaN(we)||(ge?de+=we+ge:de+=we+" ")}}Hm[L.type](B.target,L.property,de,B.transforms),L.currentValue=de,M++}}function x(b){l[b]&&!l.passThrough&&l[b](l)}function _(){l.remaining&&l.remaining!==!0&&l.remaining--}function h(b){var M=l.duration,A=l.delay,G=M-l.endDelay,L=f(b);l.progress=Kn(L/M*100,0,100),l.reversePlayback=L<l.currentTime,r&&m(L),!l.began&&l.currentTime>0&&(l.began=!0,x("begin")),!l.loopBegan&&l.currentTime>0&&(l.loopBegan=!0,x("loopBegin")),L<=A&&l.currentTime!==0&&p(0),(L>=G&&l.currentTime!==M||!M)&&p(M),L>A&&L<G?(l.changeBegan||(l.changeBegan=!0,l.changeCompleted=!1,x("changeBegin")),x("change"),p(L)):l.changeBegan&&(l.changeCompleted=!0,l.changeBegan=!1,x("changeComplete")),l.currentTime=Kn(L,0,M),l.began&&x("update"),b>=M&&(n=0,_(),l.remaining?(e=i,x("loopComplete"),l.loopBegan=!1,l.direction==="alternate"&&u()):(l.paused=!0,l.completed||(l.completed=!0,x("loopComplete"),x("complete"),!l.passThrough&&"Promise"in window&&(a(),o(l)))))}return l.reset=function(){var b=l.direction;l.passThrough=!1,l.currentTime=0,l.progress=0,l.paused=!0,l.began=!1,l.loopBegan=!1,l.changeBegan=!1,l.completed=!1,l.changeCompleted=!1,l.reversePlayback=!1,l.reversed=b==="reverse",l.remaining=l.loop,r=l.children,s=r.length;for(var M=s;M--;)l.children[M].reset();(l.reversed&&l.loop!==!0||b==="alternate"&&l.loop===1)&&l.remaining++,p(l.reversed?l.duration:0)},l._onDocumentVisibility=d,l.set=function(b,M){return Vm(b,M),l},l.tick=function(b){i=b,e||(e=i),h((i+(n-e))*It.speed)},l.seek=function(b){h(f(b))},l.pause=function(){l.paused=!0,d()},l.play=function(){l.paused&&(l.completed&&l.reset(),l.paused=!1,zn.push(l),d(),Wm())},l.reverse=function(){u(),l.completed=!l.reversed,d()},l.restart=function(){l.reset(),l.play()},l.remove=function(b){var M=Wu(b);Xm(M,l)},l.reset(),l.autoplay&&l.play(),l}function ed(t,e){for(var n=e.length;n--;)Fu(t,e[n].animatable.target)&&e.splice(n,1)}function Xm(t,e){var n=e.animations,i=e.children;ed(t,n);for(var r=i.length;r--;){var s=i[r],a=s.animations;ed(t,a),!a.length&&!s.children.length&&i.splice(r,1)}!n.length&&!i.length&&e.pause()}function QE(t){for(var e=Wu(t),n=zn.length;n--;){var i=zn[n];Xm(e,i)}}function ew(t,e){e===void 0&&(e={});var n=e.direction||"normal",i=e.easing?Nu(e.easing):null,r=e.grid,s=e.axis,a=e.from||0,o=a==="first",l=a==="center",u=a==="last",f=tt.arr(t),d=parseFloat(f?t[0]:t),c=f?parseFloat(t[1]):0,m=Si(f?t[1]:t)||0,p=e.start||0+(f?d:0),x=[],_=0;return function(h,b,M){if(o&&(a=0),l&&(a=(M-1)/2),u&&(a=M-1),!x.length){for(var A=0;A<M;A++){if(!r)x.push(Math.abs(a-A));else{var G=l?(r[0]-1)/2:a%r[0],L=l?(r[1]-1)/2:Math.floor(a/r[0]),B=A%r[0],X=Math.floor(A/r[0]),Y=G-B,E=L-X,C=Math.sqrt(Y*Y+E*E);s==="x"&&(C=-Y),s==="y"&&(C=-E),x.push(C)}_=Math.max.apply(Math,x)}i&&(x=x.map(function(W){return i(W/_)*_})),n==="reverse"&&(x=x.map(function(W){return s?W<0?W*-1:-W:Math.abs(_-W)}))}var V=f?(c-d)/_:d;return p+V*(Math.round(x[b]*100)/100)+m}}function tw(t){t===void 0&&(t={});var e=It(t);return e.duration=0,e.add=function(n,i){var r=zn.indexOf(e),s=e.children;r>-1&&zn.splice(r,1);function a(c){c.passThrough=!0}for(var o=0;o<s.length;o++)a(s[o]);var l=zo(n,$c(Ou,t));l.targets=l.targets||t.targets;var u=e.duration;l.autoplay=!1,l.direction=e.direction,l.timelineOffset=tt.und(i)?u:Vu(i,u),a(e),e.seek(l.timelineOffset);var f=It(l);a(f),s.push(f);var d=Gm(s,t);return e.delay=d.delay,e.endDelay=d.endDelay,e.duration=d.duration,e.seek(0),e.reset(),e.autoplay&&e.play(),e},e}It.version="3.2.1";It.speed=1;It.suspendWhenDocumentHidden=!0;It.running=zn;It.remove=QE;It.get=Hu;It.set=Vm;It.convertPx=ku;It.path=GE;It.setDashoffset=HE;It.stagger=ew;It.timeline=tw;It.easing=Nu;It.penner=Lm;It.random=function(t,e){return Math.floor(Math.random()*(e-t+1))+t};const nw={class:"flex-grow flex flex-col gap-2"},iw=["href"],rw=["src","alt"],sw={class:"absolute top-0 left-0 w-full h-full justify-center items-center transition-opacity duration-500 ease-out flex opacity-0 group-hover:opacity-100"},aw={class:"text-2xl"},ow={class:"flex-shrink flex flex-col gap-2"},lw={class:"text-lg underline text-secondary"},cw=["innerHTML"],uw=["href"],fw=wo({__name:"PortfolioItem",props:{title:{type:String,required:!0},subtitle:{type:String,required:!0},description:{type:Array,required:!0},imageSrc:{type:String,required:!1},imageAlt:{type:String,default:"Portfolio Image"},link:{type:String,required:!0},reverse:{type:Boolean,default:!1},isCanvas:{type:Boolean,default:!1}},setup(t){const e=t,n=Dr(null),i=Dr(e.imageSrc),r=()=>{i.value="/assets/images/placeholder.png"};return xs(()=>{if(e.isCanvas&&n.value){const s=n.value.getContext("2d");s&&(n.value.width=400,n.value.height=300,s.fillStyle="black",s.fillRect(0,0,n.value.width,n.value.height),s.font="1.5rem 'Inter', system-ui, Avenir, Helvetica, Arial, sans-serif",s.fillStyle="white",s.textAlign="center",s.textBaseline="middle",s.fillText("Web SDK",n.value.width/2,n.value.height/2))}}),(s,a)=>(jt(),sn("div",{class:Mo(["flex flex-col gap-2 md:gap-5",t.reverse?"md:flex-row-reverse":"md:flex-row"]),"data-aos":"fade-up"},[mt("div",nw,[mt("a",{href:t.link,target:"_blank",rel:"noopener noreferrer",class:"relative group overflow-hidden cursor-pointer"},[t.isCanvas?(jt(),sn("canvas",{key:1,ref_key:"canvasRef",ref:n,class:"w-full h-full object-cover"},null,512)):(jt(),sn("img",{key:0,src:t.imageSrc,alt:t.imageAlt,class:"w-full h-full object-cover",loading:"lazy",onError:r},null,40,rw)),a[0]||(a[0]=mt("div",{class:"absolute top-0 left-0 w-full h-full bg-tertiary bg-opacity-75 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out"},null,-1)),mt("div",sw,[mt("span",aw,zl(t.title),1)])],8,iw)]),mt("div",ow,[mt("h3",lw,zl(t.subtitle),1),(jt(!0),sn(wn,null,Wd(t.description,(o,l)=>(jt(),sn("div",{key:l},[mt("span",{innerHTML:o},null,8,cw)]))),128)),mt("a",{href:t.link,target:"_blank",rel:"noopener noreferrer",class:"bg-secondary hover:bg-primary focus:outline-none focus:ring-4 focus:ring-purple-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mb-2 transition duration-300 ease-out"}," View More ",8,uw)])],2))}}),hw=oa(fw,[["__scopeId","data-v-85169713"]]);var jm={exports:{}};(function(t,e){(function(n,i){t.exports=i()})(_T,function(){return function(n){function i(s){if(r[s])return r[s].exports;var a=r[s]={exports:{},id:s,loaded:!1};return n[s].call(a.exports,a,a.exports,i),a.loaded=!0,a.exports}var r={};return i.m=n,i.c=r,i.p="dist/",i(0)}([function(n,i,r){function s(Z){return Z&&Z.__esModule?Z:{default:Z}}var a=Object.assign||function(Z){for(var ne=1;ne<arguments.length;ne++){var se=arguments[ne];for(var de in se)Object.prototype.hasOwnProperty.call(se,de)&&(Z[de]=se[de])}return Z},o=r(1),l=(s(o),r(6)),u=s(l),f=r(7),d=s(f),c=r(8),m=s(c),p=r(9),x=s(p),_=r(10),h=s(_),b=r(11),M=s(b),A=r(14),G=s(A),L=[],B=!1,X={offset:120,delay:0,easing:"ease",duration:400,disable:!1,once:!1,startEvent:"DOMContentLoaded",throttleDelay:99,debounceDelay:50,disableMutationObserver:!1},Y=function(){var Z=arguments.length>0&&arguments[0]!==void 0&&arguments[0];if(Z&&(B=!0),B)return L=(0,M.default)(L,X),(0,h.default)(L,X.once),L},E=function(){L=(0,G.default)(),Y()},C=function(){L.forEach(function(Z,ne){Z.node.removeAttribute("data-aos"),Z.node.removeAttribute("data-aos-easing"),Z.node.removeAttribute("data-aos-duration"),Z.node.removeAttribute("data-aos-delay")})},V=function(Z){return Z===!0||Z==="mobile"&&x.default.mobile()||Z==="phone"&&x.default.phone()||Z==="tablet"&&x.default.tablet()||typeof Z=="function"&&Z()===!0},W=function(Z){X=a(X,Z),L=(0,G.default)();var ne=document.all&&!window.atob;return V(X.disable)||ne?C():(X.disableMutationObserver||m.default.isSupported()||(X.disableMutationObserver=!0),document.querySelector("body").setAttribute("data-aos-easing",X.easing),document.querySelector("body").setAttribute("data-aos-duration",X.duration),document.querySelector("body").setAttribute("data-aos-delay",X.delay),X.startEvent==="DOMContentLoaded"&&["complete","interactive"].indexOf(document.readyState)>-1?Y(!0):X.startEvent==="load"?window.addEventListener(X.startEvent,function(){Y(!0)}):document.addEventListener(X.startEvent,function(){Y(!0)}),window.addEventListener("resize",(0,d.default)(Y,X.debounceDelay,!0)),window.addEventListener("orientationchange",(0,d.default)(Y,X.debounceDelay,!0)),window.addEventListener("scroll",(0,u.default)(function(){(0,h.default)(L,X.once)},X.throttleDelay)),X.disableMutationObserver||m.default.ready("[data-aos]",E),L)};n.exports={init:W,refresh:Y,refreshHard:E}},function(n,i){},,,,,function(n,i){(function(r){function s(V,W,Z){function ne(H){var j=ge,ue=we;return ge=we=void 0,Ce=H,K=V.apply(ue,j)}function se(H){return Ce=H,xe=setTimeout(Le,W),Ve?ne(H):K}function de(H){var j=H-_e,ue=H-Ce,le=W-j;return He?E(le,Ie-ue):le}function te(H){var j=H-_e,ue=H-Ce;return _e===void 0||j>=W||j<0||He&&ue>=Ie}function Le(){var H=C();return te(H)?Fe(H):void(xe=setTimeout(Le,de(H)))}function Fe(H){return xe=void 0,w&&ge?ne(H):(ge=we=void 0,K)}function ze(){xe!==void 0&&clearTimeout(xe),Ce=0,ge=_e=we=xe=void 0}function Ze(){return xe===void 0?K:Fe(C())}function Je(){var H=C(),j=te(H);if(ge=arguments,we=this,_e=H,j){if(xe===void 0)return se(_e);if(He)return xe=setTimeout(Le,W),ne(_e)}return xe===void 0&&(xe=setTimeout(Le,W)),K}var ge,we,Ie,K,xe,_e,Ce=0,Ve=!1,He=!1,w=!0;if(typeof V!="function")throw new TypeError(c);return W=f(W)||0,o(Z)&&(Ve=!!Z.leading,He="maxWait"in Z,Ie=He?Y(f(Z.maxWait)||0,W):Ie,w="trailing"in Z?!!Z.trailing:w),Je.cancel=ze,Je.flush=Ze,Je}function a(V,W,Z){var ne=!0,se=!0;if(typeof V!="function")throw new TypeError(c);return o(Z)&&(ne="leading"in Z?!!Z.leading:ne,se="trailing"in Z?!!Z.trailing:se),s(V,W,{leading:ne,maxWait:W,trailing:se})}function o(V){var W=typeof V>"u"?"undefined":d(V);return!!V&&(W=="object"||W=="function")}function l(V){return!!V&&(typeof V>"u"?"undefined":d(V))=="object"}function u(V){return(typeof V>"u"?"undefined":d(V))=="symbol"||l(V)&&X.call(V)==p}function f(V){if(typeof V=="number")return V;if(u(V))return m;if(o(V)){var W=typeof V.valueOf=="function"?V.valueOf():V;V=o(W)?W+"":W}if(typeof V!="string")return V===0?V:+V;V=V.replace(x,"");var Z=h.test(V);return Z||b.test(V)?M(V.slice(2),Z?2:8):_.test(V)?m:+V}var d=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(V){return typeof V}:function(V){return V&&typeof Symbol=="function"&&V.constructor===Symbol&&V!==Symbol.prototype?"symbol":typeof V},c="Expected a function",m=NaN,p="[object Symbol]",x=/^\s+|\s+$/g,_=/^[-+]0x[0-9a-f]+$/i,h=/^0b[01]+$/i,b=/^0o[0-7]+$/i,M=parseInt,A=(typeof r>"u"?"undefined":d(r))=="object"&&r&&r.Object===Object&&r,G=(typeof self>"u"?"undefined":d(self))=="object"&&self&&self.Object===Object&&self,L=A||G||Function("return this")(),B=Object.prototype,X=B.toString,Y=Math.max,E=Math.min,C=function(){return L.Date.now()};n.exports=a}).call(i,function(){return this}())},function(n,i){(function(r){function s(C,V,W){function Z(w){var H=Je,j=ge;return Je=ge=void 0,_e=w,Ie=C.apply(j,H)}function ne(w){return _e=w,K=setTimeout(te,V),Ce?Z(w):Ie}function se(w){var H=w-xe,j=w-_e,ue=V-H;return Ve?Y(ue,we-j):ue}function de(w){var H=w-xe,j=w-_e;return xe===void 0||H>=V||H<0||Ve&&j>=we}function te(){var w=E();return de(w)?Le(w):void(K=setTimeout(te,se(w)))}function Le(w){return K=void 0,He&&Je?Z(w):(Je=ge=void 0,Ie)}function Fe(){K!==void 0&&clearTimeout(K),_e=0,Je=xe=ge=K=void 0}function ze(){return K===void 0?Ie:Le(E())}function Ze(){var w=E(),H=de(w);if(Je=arguments,ge=this,xe=w,H){if(K===void 0)return ne(xe);if(Ve)return K=setTimeout(te,V),Z(xe)}return K===void 0&&(K=setTimeout(te,V)),Ie}var Je,ge,we,Ie,K,xe,_e=0,Ce=!1,Ve=!1,He=!0;if(typeof C!="function")throw new TypeError(d);return V=u(V)||0,a(W)&&(Ce=!!W.leading,Ve="maxWait"in W,we=Ve?X(u(W.maxWait)||0,V):we,He="trailing"in W?!!W.trailing:He),Ze.cancel=Fe,Ze.flush=ze,Ze}function a(C){var V=typeof C>"u"?"undefined":f(C);return!!C&&(V=="object"||V=="function")}function o(C){return!!C&&(typeof C>"u"?"undefined":f(C))=="object"}function l(C){return(typeof C>"u"?"undefined":f(C))=="symbol"||o(C)&&B.call(C)==m}function u(C){if(typeof C=="number")return C;if(l(C))return c;if(a(C)){var V=typeof C.valueOf=="function"?C.valueOf():C;C=a(V)?V+"":V}if(typeof C!="string")return C===0?C:+C;C=C.replace(p,"");var W=_.test(C);return W||h.test(C)?b(C.slice(2),W?2:8):x.test(C)?c:+C}var f=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(C){return typeof C}:function(C){return C&&typeof Symbol=="function"&&C.constructor===Symbol&&C!==Symbol.prototype?"symbol":typeof C},d="Expected a function",c=NaN,m="[object Symbol]",p=/^\s+|\s+$/g,x=/^[-+]0x[0-9a-f]+$/i,_=/^0b[01]+$/i,h=/^0o[0-7]+$/i,b=parseInt,M=(typeof r>"u"?"undefined":f(r))=="object"&&r&&r.Object===Object&&r,A=(typeof self>"u"?"undefined":f(self))=="object"&&self&&self.Object===Object&&self,G=M||A||Function("return this")(),L=Object.prototype,B=L.toString,X=Math.max,Y=Math.min,E=function(){return G.Date.now()};n.exports=s}).call(i,function(){return this}())},function(n,i){function r(f){var d=void 0,c=void 0;for(d=0;d<f.length;d+=1)if(c=f[d],c.dataset&&c.dataset.aos||c.children&&r(c.children))return!0;return!1}function s(){return window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver}function a(){return!!s()}function o(f,d){var c=window.document,m=s(),p=new m(l);u=d,p.observe(c.documentElement,{childList:!0,subtree:!0,removedNodes:!0})}function l(f){f&&f.forEach(function(d){var c=Array.prototype.slice.call(d.addedNodes),m=Array.prototype.slice.call(d.removedNodes),p=c.concat(m);if(r(p))return u()})}Object.defineProperty(i,"__esModule",{value:!0});var u=function(){};i.default={isSupported:a,ready:o}},function(n,i){function r(c,m){if(!(c instanceof m))throw new TypeError("Cannot call a class as a function")}function s(){return navigator.userAgent||navigator.vendor||window.opera||""}Object.defineProperty(i,"__esModule",{value:!0});var a=function(){function c(m,p){for(var x=0;x<p.length;x++){var _=p[x];_.enumerable=_.enumerable||!1,_.configurable=!0,"value"in _&&(_.writable=!0),Object.defineProperty(m,_.key,_)}}return function(m,p,x){return p&&c(m.prototype,p),x&&c(m,x),m}}(),o=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,l=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,u=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i,f=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,d=function(){function c(){r(this,c)}return a(c,[{key:"phone",value:function(){var m=s();return!(!o.test(m)&&!l.test(m.substr(0,4)))}},{key:"mobile",value:function(){var m=s();return!(!u.test(m)&&!f.test(m.substr(0,4)))}},{key:"tablet",value:function(){return this.mobile()&&!this.phone()}}]),c}();i.default=new d},function(n,i){Object.defineProperty(i,"__esModule",{value:!0});var r=function(a,o,l){var u=a.node.getAttribute("data-aos-once");o>a.position?a.node.classList.add("aos-animate"):typeof u<"u"&&(u==="false"||!l&&u!=="true")&&a.node.classList.remove("aos-animate")},s=function(a,o){var l=window.pageYOffset,u=window.innerHeight;a.forEach(function(f,d){r(f,u+l,o)})};i.default=s},function(n,i,r){function s(u){return u&&u.__esModule?u:{default:u}}Object.defineProperty(i,"__esModule",{value:!0});var a=r(12),o=s(a),l=function(u,f){return u.forEach(function(d,c){d.node.classList.add("aos-init"),d.position=(0,o.default)(d.node,f.offset)}),u};i.default=l},function(n,i,r){function s(u){return u&&u.__esModule?u:{default:u}}Object.defineProperty(i,"__esModule",{value:!0});var a=r(13),o=s(a),l=function(u,f){var d=0,c=0,m=window.innerHeight,p={offset:u.getAttribute("data-aos-offset"),anchor:u.getAttribute("data-aos-anchor"),anchorPlacement:u.getAttribute("data-aos-anchor-placement")};switch(p.offset&&!isNaN(p.offset)&&(c=parseInt(p.offset)),p.anchor&&document.querySelectorAll(p.anchor)&&(u=document.querySelectorAll(p.anchor)[0]),d=(0,o.default)(u).top,p.anchorPlacement){case"top-bottom":break;case"center-bottom":d+=u.offsetHeight/2;break;case"bottom-bottom":d+=u.offsetHeight;break;case"top-center":d+=m/2;break;case"bottom-center":d+=m/2+u.offsetHeight;break;case"center-center":d+=m/2+u.offsetHeight/2;break;case"top-top":d+=m;break;case"bottom-top":d+=u.offsetHeight+m;break;case"center-top":d+=u.offsetHeight/2+m}return p.anchorPlacement||p.offset||isNaN(f)||(c=f),d+c};i.default=l},function(n,i){Object.defineProperty(i,"__esModule",{value:!0});var r=function(s){for(var a=0,o=0;s&&!isNaN(s.offsetLeft)&&!isNaN(s.offsetTop);)a+=s.offsetLeft-(s.tagName!="BODY"?s.scrollLeft:0),o+=s.offsetTop-(s.tagName!="BODY"?s.scrollTop:0),s=s.offsetParent;return{top:o,left:a}};i.default=r},function(n,i){Object.defineProperty(i,"__esModule",{value:!0});var r=function(s){return s=s||document.querySelectorAll("[data-aos]"),Array.prototype.map.call(s,function(a){return{node:a}})};i.default=r}])})})(jm);var dw=jm.exports;const pw=tm(dw),mw="/YangPortfolioPublic/assets/Gameplay_15-DtT676tY.jpg",_w="/YangPortfolioPublic/assets/TrinityECPreview-Dqa34tWo.png",gw="/YangPortfolioPublic/assets/Diian-OsGrEqTV.png",vw="/YangPortfolioPublic/assets/Gis-CZskLWq_.png",xw="/YangPortfolioPublic/assets/JTowerPreview-yL9mZQrX.png",yw="/YangPortfolioPublic/assets/TrinityWeb-CpRoOp3A.webp",Sw="/YangPortfolioPublic/assets/KAEC-CNH9m6_F.png",Mw="/YangPortfolioPublic/assets/FoxConn-CXSSpqMV.png",bw={class:"flex flex-col"},Tw={id:"portfolio-section",class:"w-full bg-red min-h-screen py-20"},Ew={class:"flex flex-col gap-10 w-full mt-20 justify-center items-center"},ww=wo({__name:"PortfolioSection",setup(t){xs(()=>{pw.init({duration:800,once:!0})});const e="/YangPortfolioPublic/docs/",n=Dr([{title:"Eximius",subtitle:"Eximius: Seize the Frontline",description:["Eximius: Seize the Frontline was my first major project and the one that launched my career in the industry. This experience not only introduced me to game development but also allowed me to collaborate with talented individuals, significantly shaping my technical expertise.",'I was responsible for gameplay programming and network codes, ensuring stable and engaging gameplay across multiplayer modes. My work contributed to the smooth launch of both the <span class="text-primary">Beta</span> and <span class="text-primary">Early Access</span> versions of the game.'],imageSrc:mw,imageAlt:"Eximius Gameplay Image",link:`${e}portfolios/eximius.html`,reverse:!1,isCanvas:!1},{title:"Trinity Experience Center",subtitle:"Trinity Experience Center",description:['During my tenure at Studio Multiply, I worked on a complex <span class="text-primary"> Unreal Engine 4 </span> project, integrating both <span class="text-primary"> C++ </span> and <span class="text-primary"> Blueprint </span> to achieve precise control over the system. The project faced significant challenges due to unforeseen internal issues with the client. Midway through development, our primary client contact left, resulting in multiple 180-degree shifts in project direction, which required agile adaptation and realignment of our approach.'],imageSrc:_w,imageAlt:"Trinity Experience Center Image",link:`${e}portfolios/trinityec.html`,reverse:!0,isCanvas:!1},{title:"Diian",subtitle:"Diian",description:['This project was a significant milestone, developed during Unreal Engine 5’s Early Access phase. As a developer with a passion for new technologies, I saw the potential of <span class="text-primary">Unreal Engine 5</span> and its powerful features, <span class="text-primary">Nanite</span> and <span class="text-primary">Lumen</span>. Without hesitation, I chose UE5 to build this project, embracing its advanced capabilities to push the boundaries of real-time rendering.'],imageSrc:gw,imageAlt:"Diian Gameplay Image",link:`${e}portfolios/Diian.html`,reverse:!1,isCanvas:!1},{title:"Geographic Information System (GIS)",subtitle:"Geographic Information System (GIS)",description:['I developed a high-performance <span class="text-primary">Geographic Information System (GIS) application</span> that combined efficient geospatial processing with real-time 3D visualization. The project was built using <span class="text-primary">C++</span> for backend processing and <span class="text-primary">Unreal Engine</span> for rendering, focusing on performance, scalability, and modularity.'],imageSrc:vw,imageAlt:"Geographic Information System (GIS) Image",link:`${e}portfolios/GIS.html`,reverse:!0,isCanvas:!1},{title:"JTower RND Project",subtitle:"JTower RND Project",description:['After completing the Trinity Website project, the management saw potential in the web-based approach and requested a new website to serve as a <span class="text-primary">Demo Application for an Archviz Sales Kit</span>. This project aimed to showcase key features and interactive elements to clients.',"To ensure a seamless experience across devices, I integrated Progressive Web App (PWA) capabilities. This allowed the Trinity website to function as an app on iPads and Android devices, enabling installation on all of the client's agent machines.",'The website was developed using <span class="text-primary">VueJS</span> for the front-end framework, and <span class="text-primary">ThreeJS + GLSL</span> for 3D rendering and graphics.'],imageSrc:xw,imageAlt:"JTower RND Project Image",link:`${e}portfolios/jtower.html`,reverse:!1,isCanvas:!1},{title:"Trinity Website",subtitle:"Trinity Website",description:['The <span class="text-primary">Trinity Website</span> was the first architectural visualization (archviz) project I developed for a client at Studio Multiply. The goal was to create a visually compelling website that runs smoothly while integrating several advanced features.',"To ensure a seamless experience across devices, I integrated Progressive Web App (PWA) capabilities. This allowed the Trinity website to function as an app on iPads and Android devices, enabling installation on all of the client's agent machines.",'The website was developed using <span class="text-primary">VueJS</span> for the front-end framework, and <span class="text-primary">ThreeJS + GLSL</span> for 3D rendering and graphics.'],imageSrc:yw,imageAlt:"Trinity Website Image",link:`${e}portfolios/trinityweb.html`,reverse:!0,isCanvas:!1},{title:"KAEC",subtitle:"KAEC",description:['In collaboration with <span class="text-primary">McKinsey</span>, I worked on a <span class="text-primary">proof-of-concept (POC) project</span> aimed at assisting the government in monitoring illegal construction activities. The project’s primary objective was to detect unauthorized building projects that were either constructed without a permit or exceeded their permitted boundaries.'],imageSrc:Sw,imageAlt:"KAEC Image",link:`${e}portfolios/KAEC.html`,reverse:!1,isCanvas:!1},{title:"FoxConn",subtitle:"FoxConn",description:['I contributed to <span class="text-primary">Foxconn’s Integrated Operations Center (IOC)</span> project, which was designed to enhance factory monitoring and automation by leveraging real-time data and AI-based detection.'],imageSrc:Mw,imageAlt:"FoxConn Image",link:`${e}portfolios/FoxConn.html`,reverse:!0,isCanvas:!1},{title:"WebSDK",subtitle:"WebSDK",description:[`Due to the limitations in Unreal Engine’s built-in <span class="text-primary">Chromium Embedded Framework (CEF) integration</span>, we undertook the development of a custom solution. Unreal Engine’s default CEF implementation was outdated, lacking crucial features that impacted our web applications' performance.`],imageAlt:"WebSDK Image",link:`${e}portfolios/WebSDK.html`,reverse:!1,isCanvas:!0}]);return(i,r)=>(jt(),sn("div",bw,[mt("section",Tw,[mt("div",Ew,[r[0]||(r[0]=mt("div",{class:"py-4"},[mt("h2",{class:"text-2xl underline"}," Portfolios ")],-1)),(jt(!0),sn(wn,null,Wd(n.value,(s,a)=>(jt(),cp(hw,{key:a,title:s.title,subtitle:s.subtitle,description:s.description,imageSrc:s.imageSrc,imageAlt:s.imageAlt,link:s.link,reverse:a%2!==0,isCanvas:s.isCanvas||!1},null,8,["title","subtitle","description","imageSrc","imageAlt","link","reverse","isCanvas"]))),128))])])]))}}),Aw=oa(ww,[["__scopeId","data-v-ff99c2ea"]]),Cw={class:"flex flex-col"},Rw={id:"hero-section",class:"w-full h-screen z-10 relative flex flex-col items-center"},td="M12 2 L12 20 L12 20 L12 20 L12 20 L12 20 Z",Pw="M12 2 L12 20 L17 15 L12 20 L7 15 L12 20 Z",Dw={__name:"Home",setup(t){const e=Dr(null);let n=null;const i=Dr(null);xs(()=>{new S1,n=e.value.querySelector("#arrow_path"),n.setAttribute("d",td);const a=i.value.getContext("2d");a.fillStyle="black",a.fillRect(0,0,i.value.width,i.value.height),a.font="1.5rem 'Inter', system-ui, Avenir, Helvetica, Arial, sans-serif",a.fillStyle="white",a.textAlign="center",a.textBaseline="middle",a.fillText("Web SDK",i.value.width/2,i.value.height/2)});const r=()=>{It({targets:n,d:[{value:Pw}],duration:500,easing:"easeInOutQuad"})},s=()=>{It({targets:n,d:[{value:td}],duration:500,easing:"easeInOutQuad"})};return(a,o)=>(jt(),sn("div",Cw,[mt("section",Rw,[o[2]||(o[2]=mt("div",{id:"hero-text",class:"w-full flex-grow"},null,-1)),mt("a",{href:"#portfolio-section",onMouseover:r,onMouseleave:s,class:"flex-shrink py-2 flex flex-col cursor-pointer transition duration-300 ease-out justify-center items-center"},[o[1]||(o[1]=mt("span",null,"Portfolios",-1)),mt("span",null,[(jt(),sn("svg",{ref_key:"arrow_wrapper",ref:e,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",class:"fill-white w-7"},o[0]||(o[0]=[mt("path",{id:"arrow_path",d:"M12 2 L12 20 L12 20 L12 20 L12 20 L12 20 Z",stroke:"currentColor","stroke-width":"2",fill:"none"},null,-1)]),512))])],32)]),Lt(Aw)]))}},Lw="/YangPortfolioPublic/assets/MyIcon-BuHmBPjZ.png",Iw={};function Uw(t,e){return jt(),sn("section",null,e[0]||(e[0]=[Lg('<div class="mt-20 grid-cols-2 grid min-h-[60vh]"><div class="flex flex-col gap-8 h-full justify-center col-span-2 lg:col-span-1 md:col-span-2 py-10"><div class="text-6xl"><h2>Hi there! I am</h2><h2 class="text-secondary">Wei Yang.</h2></div><div class="flex flex-col gap-2 text-lg"><span> I am a versatile programmer specializing in C++ and 3D development, with a passion for graphics and visual effects. My journey began as a C++ gameplay programmer using Unreal Engine to develop a multiplayer game. </span><span> Since then, I have delved into shader programming and explored various aspects of graphics technology. Working with several small companies has honed my ability to quickly learn and adapt to new technologies, equipping me with a broad and diverse skill set. </span></div></div><div class="lg:flex justify-center items-center lg:block hidden h-full"><img src="'+Lw+'" alt="Wei Yang&#39;s Icon"></div></div><div class="mt-8"><h2 class="text-4xl mb-6">Professional Experience</h2><div class="flex flex-col md:flex-row gap-4 mb-6"><div class="w-full md:w-64 flex flex-col gap-1"><span class="text-primary">Senior Software Engineer</span><div><span class="text-secondary">Vizzio Technologies Pte Ltd</span><span> | Singapore</span></div><span>June 2023 - Present</span></div><div class="w-full md:flex-auto"><ul class="list-disc pl-5"><li><span class="text-primary">GIS Development (C++)</span>: Led the development of performance-driven geographic information systems (GIS) with a focus on scalability. </li><li><span class="text-primary">Web View SDK on Unreal Engine (C++, TypeScript)</span>: Integrated web-based views within Unreal Engine for seamless interaction between 3D environments and web content. </li><li><span class="text-primary">Project Support (Blueprint and C++)</span>: Contributed to various projects, ensuring optimized performance using Unreal Engine’s Blueprint system and C++. </li><li><span class="text-primary">Collaboration with McKinsey</span>: Worked on a strategic project for Saudi Arabia, collaborating with McKinsey to solve complex problems. </li><li><span class="text-primary">Licensing System Setup (C++ and C#)</span>: Developed and maintained a licensing system for streamlined software access control. </li><li><span class="text-primary">JavaScript Encryption with WASM</span>: Implemented secure encryption processes using WebAssembly (WASM) to protect sensitive web data. </li><li><span class="text-primary">3D Tile Streaming Server (Linux, C++, TCP)</span>: Developing a 3D tile streaming server using C++ and TCP on Linux for high-performance data transmission. </li></ul></div></div><div class="flex flex-col md:flex-row gap-4 mb-6"><div class="w-full md:w-64 flex flex-col gap-1"><span class="text-primary">Lead Engineer</span><div><span class="text-secondary">Weike Gaming Technology</span><span> | Singapore</span></div><span>August 2022 - June 2023</span></div><div class="w-full md:flex-auto"><ul class="list-disc pl-5"><li> Led engineering efforts for gaming solutions, contributing to various aspects of software development from core logic to user interface. </li><li> Managed team deliverables and ensured code quality across projects. </li></ul></div></div><div class="flex flex-col md:flex-row gap-4 mb-6"><div class="w-full md:w-64 flex flex-col gap-1"><span class="text-primary">Lead Application Developer</span><div><span class="text-secondary">Multiply Studio Sdn Bhd</span><span> | Malaysia</span></div><span>April 2021 - August 2022</span></div><div class="w-full md:flex-auto"><ul class="list-disc pl-5"><li> Spearheaded application development for high-traffic consumer platforms. </li><li> Managed technical aspects of product delivery and ensured cross-platform consistency. </li></ul></div></div><div class="flex flex-col md:flex-row gap-4 mb-6"><div class="w-full md:w-64 flex flex-col gap-1"><span class="text-primary">Application Developer</span><div><span class="text-secondary">Eco World Development Group Berhad</span><span> | Malaysia</span></div><span>July 2019 - July 2020</span></div><div class="w-full md:flex-auto"><ul class="list-disc pl-5"><li> Contributed to application development for various internal and consumer-facing applications. </li><li> Enhanced UI/UX designs and integrated backend systems. </li></ul></div></div><div class="flex flex-col md:flex-row gap-4 mb-6"><div class="w-full md:w-64 flex flex-col gap-1"><span class="text-primary">Game Programmer</span><div><span class="text-secondary">Ammobox Studios</span><span> | Malaysia</span></div><span>January 2018 - February 2019</span></div><div class="w-full md:flex-auto"><ul class="list-disc pl-5"><li> Improved maintainability and performance by refactoring legacy code. </li><li> Developed new features and systems, including weapon and objective systems. </li><li> Handled networking code for multiplayer functionality using UDP Protocol. </li><li> Utilized Unreal Engine 4’s Blueprint system to create game mechanics and interactions. </li></ul></div></div><div class="flex flex-col md:flex-row gap-4"><div class="w-full md:w-64 flex flex-col gap-1"><span class="text-primary">QA Programmer</span><div><span class="text-secondary">Centre for Content Creation</span><span> | Malaysia</span></div><span>January 2016 - May 2016</span></div><div class="w-full md:flex-auto"><ul class="list-disc pl-5"><li> Worked on <em>Starfall Catalyst</em>, identifying and fixing bugs in Unity3D (C#). </li><li> Improved overall game stability and performance through diligent QA processes. </li></ul></div></div></div><div class="mt-8"><h2 class="text-4xl mb-6">Education</h2><div class="flex flex-col md:flex-row gap-4 mb-6"><div class="w-full md:w-64 flex flex-col gap-1"><span class="text-primary">Bachelor&#39;s Degree in Computer Games and Programming Skills</span><div><span class="text-secondary">Limkokwing University of Creative Technology</span><span> | Malaysia</span></div><span>2015 - 2017</span></div><div class="w-full md:flex-auto"><p> Completed a comprehensive program focused on game development and programming skills, covering topics such as game design, C++ programming, and 3D modeling. </p></div></div><div class="flex flex-col md:flex-row gap-4"><div class="w-full md:w-64 flex flex-col gap-1"><span class="text-primary">Foundation Degree in Information Technology</span><div><span class="text-secondary">Limkokwing University of Creative Technology</span><span> | Malaysia</span></div><span>2014</span></div><div class="w-full md:flex-auto"><p> Gained foundational knowledge in Information Technology, including basic programming, database management, and IT systems. </p></div></div></div><footer class="flex gap-4 mt-8"><a href="https://www.linkedin.com/in/tan-wei-yang-396305179/" target="_blank" rel="noopener noreferrer"><svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-gray-500 transition duration-300 ease-out hover:text-blue-700" fill="currentColor" viewBox="0 0 448 512"><path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"></path></svg></a><a href="https://github.com/renkin4" target="_blank" rel="noopener noreferrer"><svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-gray-500 transition duration-300 ease-out hover:text-black" fill="currentColor" viewBox="0 0 496 512"><path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path></svg></a></footer>',4)]))}const Ow=oa(Iw,[["render",Uw]]),Nw={};function Fw(t,e){const n=fu("router-link");return jt(),sn("div",null,[e[1]||(e[1]=mt("h1",null,"404 - Page Not Found",-1)),e[2]||(e[2]=mt("p",null,"The page you're looking for doesn't exist.",-1)),Lt(n,{to:"/"},{default:xr(()=>e[0]||(e[0]=[Qr("Go back to Home")])),_:1})])}const Bw=oa(Nw,[["render",Fw]]),kw=[{path:"/",name:"Home",component:Dw},{path:"/about",name:"About",component:Ow},{path:"/:pathMatch(.*)*",name:"NotFound",component:Bw,beforeEnter:(t,e,n)=>{t.path.startsWith("/docs")?window.location.href=t.fullPath:n()}}],zw=wE({history:nE("/YangPortfolioPublic"),routes:kw});T0(E1).use(zw).mount("#app")});export default Hw();
