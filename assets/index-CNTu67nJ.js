var mp=(n,e)=>()=>(e||n((e={exports:{}}).exports,e),e.exports);var jE=mp((KE,mc)=>{(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();/**
* @vue/shared v3.5.12
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function _c(n){const e=Object.create(null);for(const t of n.split(","))e[t]=1;return t=>t in e}const bt={},Nr=[],Hn=()=>{},_p=()=>!1,$a=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&(n.charCodeAt(2)>122||n.charCodeAt(2)<97),gc=n=>n.startsWith("onUpdate:"),Ht=Object.assign,vc=(n,e)=>{const t=n.indexOf(e);t>-1&&n.splice(t,1)},gp=Object.prototype.hasOwnProperty,_t=(n,e)=>gp.call(n,e),ot=Array.isArray,gs=n=>Ka(n)==="[object Map]",vp=n=>Ka(n)==="[object Set]",at=n=>typeof n=="function",Gt=n=>typeof n=="string",Zr=n=>typeof n=="symbol",It=n=>n!==null&&typeof n=="object",th=n=>(It(n)||at(n))&&at(n.then)&&at(n.catch),xp=Object.prototype.toString,Ka=n=>xp.call(n),yp=n=>Ka(n).slice(8,-1),Sp=n=>Ka(n)==="[object Object]",xc=n=>Gt(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,vs=_c(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Za=n=>{const e=Object.create(null);return t=>e[t]||(e[t]=n(t))},Mp=/-(\w)/g,Sn=Za(n=>n.replace(Mp,(e,t)=>t?t.toUpperCase():"")),Tp=/\B([A-Z])/g,pr=Za(n=>n.replace(Tp,"-$1").toLowerCase()),Ja=Za(n=>n.charAt(0).toUpperCase()+n.slice(1)),mo=Za(n=>n?`on${Ja(n)}`:""),Li=(n,e)=>!Object.is(n,e),_o=(n,...e)=>{for(let t=0;t<n.length;t++)n[t](...e)},nh=(n,e,t,i=!1)=>{Object.defineProperty(n,e,{configurable:!0,enumerable:!1,writable:i,value:t})},Ep=n=>{const e=parseFloat(n);return isNaN(e)?n:e};let nf;const Qa=()=>nf||(nf=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function yc(n){if(ot(n)){const e={};for(let t=0;t<n.length;t++){const i=n[t],r=Gt(i)?Rp(i):yc(i);if(r)for(const s in r)e[s]=r[s]}return e}else if(Gt(n)||It(n))return n}const bp=/;(?![^(]*\))/g,wp=/:([^]+)/,Ap=/\/\*[^]*?\*\//g;function Rp(n){const e={};return n.replace(Ap,"").split(bp).forEach(t=>{if(t){const i=t.split(wp);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function Sc(n){let e="";if(Gt(n))e=n;else if(ot(n))for(let t=0;t<n.length;t++){const i=Sc(n[t]);i&&(e+=i+" ")}else if(It(n))for(const t in n)n[t]&&(e+=t+" ");return e.trim()}const Cp="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Pp=_c(Cp);function ih(n){return!!n||n===""}/**
* @vue/reactivity v3.5.12
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let mn;class Dp{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=mn,!e&&mn&&(this.index=(mn.scopes||(mn.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].pause();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].resume();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].resume()}}run(e){if(this._active){const t=mn;try{return mn=this,e()}finally{mn=t}}}on(){mn=this}off(){mn=this.parent}stop(e){if(this._active){let t,i;for(t=0,i=this.effects.length;t<i;t++)this.effects[t].stop();for(t=0,i=this.cleanups.length;t<i;t++)this.cleanups[t]();if(this.scopes)for(t=0,i=this.scopes.length;t<i;t++)this.scopes[t].stop(!0);if(!this.detached&&this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0,this._active=!1}}}function Lp(){return mn}let Et;const go=new WeakSet;class rh{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,mn&&mn.active&&mn.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,go.has(this)&&(go.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||ah(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,rf(this),oh(this);const e=Et,t=Ln;Et=this,Ln=!0;try{return this.fn()}finally{lh(this),Et=e,Ln=t,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)Ec(e);this.deps=this.depsTail=void 0,rf(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?go.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){ll(this)&&this.run()}get dirty(){return ll(this)}}let sh=0,xs,ys;function ah(n,e=!1){if(n.flags|=8,e){n.next=ys,ys=n;return}n.next=xs,xs=n}function Mc(){sh++}function Tc(){if(--sh>0)return;if(ys){let e=ys;for(ys=void 0;e;){const t=e.next;e.next=void 0,e.flags&=-9,e=t}}let n;for(;xs;){let e=xs;for(xs=void 0;e;){const t=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(i){n||(n=i)}e=t}}if(n)throw n}function oh(n){for(let e=n.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function lh(n){let e,t=n.depsTail,i=t;for(;i;){const r=i.prevDep;i.version===-1?(i===t&&(t=r),Ec(i),Ip(i)):e=i,i.dep.activeLink=i.prevActiveLink,i.prevActiveLink=void 0,i=r}n.deps=e,n.depsTail=t}function ll(n){for(let e=n.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(ch(e.dep.computed)||e.dep.version!==e.version))return!0;return!!n._dirty}function ch(n){if(n.flags&4&&!(n.flags&16)||(n.flags&=-17,n.globalVersion===Cs))return;n.globalVersion=Cs;const e=n.dep;if(n.flags|=2,e.version>0&&!n.isSSR&&n.deps&&!ll(n)){n.flags&=-3;return}const t=Et,i=Ln;Et=n,Ln=!0;try{oh(n);const r=n.fn(n._value);(e.version===0||Li(r,n._value))&&(n._value=r,e.version++)}catch(r){throw e.version++,r}finally{Et=t,Ln=i,lh(n),n.flags&=-3}}function Ec(n,e=!1){const{dep:t,prevSub:i,nextSub:r}=n;if(i&&(i.nextSub=r,n.prevSub=void 0),r&&(r.prevSub=i,n.nextSub=void 0),t.subs===n&&(t.subs=i,!i&&t.computed)){t.computed.flags&=-5;for(let s=t.computed.deps;s;s=s.nextDep)Ec(s,!0)}!e&&!--t.sc&&t.map&&t.map.delete(t.key)}function Ip(n){const{prevDep:e,nextDep:t}=n;e&&(e.nextDep=t,n.prevDep=void 0),t&&(t.prevDep=e,n.nextDep=void 0)}let Ln=!0;const fh=[];function Fi(){fh.push(Ln),Ln=!1}function Bi(){const n=fh.pop();Ln=n===void 0?!0:n}function rf(n){const{cleanup:e}=n;if(n.cleanup=void 0,e){const t=Et;Et=void 0;try{e()}finally{Et=t}}}let Cs=0;class Up{constructor(e,t){this.sub=e,this.dep=t,this.version=t.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class bc{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0}track(e){if(!Et||!Ln||Et===this.computed)return;let t=this.activeLink;if(t===void 0||t.sub!==Et)t=this.activeLink=new Up(Et,this),Et.deps?(t.prevDep=Et.depsTail,Et.depsTail.nextDep=t,Et.depsTail=t):Et.deps=Et.depsTail=t,uh(t);else if(t.version===-1&&(t.version=this.version,t.nextDep)){const i=t.nextDep;i.prevDep=t.prevDep,t.prevDep&&(t.prevDep.nextDep=i),t.prevDep=Et.depsTail,t.nextDep=void 0,Et.depsTail.nextDep=t,Et.depsTail=t,Et.deps===t&&(Et.deps=i)}return t}trigger(e){this.version++,Cs++,this.notify(e)}notify(e){Mc();try{for(let t=this.subs;t;t=t.prevSub)t.sub.notify()&&t.sub.dep.notify()}finally{Tc()}}}function uh(n){if(n.dep.sc++,n.sub.flags&4){const e=n.dep.computed;if(e&&!n.dep.subs){e.flags|=20;for(let i=e.deps;i;i=i.nextDep)uh(i)}const t=n.dep.subs;t!==n&&(n.prevSub=t,t&&(t.nextSub=n)),n.dep.subs=n}}const cl=new WeakMap,ar=Symbol(""),fl=Symbol(""),Ps=Symbol("");function Zt(n,e,t){if(Ln&&Et){let i=cl.get(n);i||cl.set(n,i=new Map);let r=i.get(t);r||(i.set(t,r=new bc),r.map=i,r.key=t),r.track()}}function ai(n,e,t,i,r,s){const o=cl.get(n);if(!o){Cs++;return}const a=l=>{l&&l.trigger()};if(Mc(),e==="clear")o.forEach(a);else{const l=ot(n),f=l&&xc(t);if(l&&t==="length"){const h=Number(i);o.forEach((p,c)=>{(c==="length"||c===Ps||!Zr(c)&&c>=h)&&a(p)})}else switch((t!==void 0||o.has(void 0))&&a(o.get(t)),f&&a(o.get(Ps)),e){case"add":l?f&&a(o.get("length")):(a(o.get(ar)),gs(n)&&a(o.get(fl)));break;case"delete":l||(a(o.get(ar)),gs(n)&&a(o.get(fl)));break;case"set":gs(n)&&a(o.get(ar));break}}Tc()}function _r(n){const e=mt(n);return e===n?e:(Zt(e,"iterate",Ps),In(n)?e:e.map(rn))}function wc(n){return Zt(n=mt(n),"iterate",Ps),n}const Np={__proto__:null,[Symbol.iterator](){return vo(this,Symbol.iterator,rn)},concat(...n){return _r(this).concat(...n.map(e=>ot(e)?_r(e):e))},entries(){return vo(this,"entries",n=>(n[1]=rn(n[1]),n))},every(n,e){return Kn(this,"every",n,e,void 0,arguments)},filter(n,e){return Kn(this,"filter",n,e,t=>t.map(rn),arguments)},find(n,e){return Kn(this,"find",n,e,rn,arguments)},findIndex(n,e){return Kn(this,"findIndex",n,e,void 0,arguments)},findLast(n,e){return Kn(this,"findLast",n,e,rn,arguments)},findLastIndex(n,e){return Kn(this,"findLastIndex",n,e,void 0,arguments)},forEach(n,e){return Kn(this,"forEach",n,e,void 0,arguments)},includes(...n){return xo(this,"includes",n)},indexOf(...n){return xo(this,"indexOf",n)},join(n){return _r(this).join(n)},lastIndexOf(...n){return xo(this,"lastIndexOf",n)},map(n,e){return Kn(this,"map",n,e,void 0,arguments)},pop(){return ss(this,"pop")},push(...n){return ss(this,"push",n)},reduce(n,...e){return sf(this,"reduce",n,e)},reduceRight(n,...e){return sf(this,"reduceRight",n,e)},shift(){return ss(this,"shift")},some(n,e){return Kn(this,"some",n,e,void 0,arguments)},splice(...n){return ss(this,"splice",n)},toReversed(){return _r(this).toReversed()},toSorted(n){return _r(this).toSorted(n)},toSpliced(...n){return _r(this).toSpliced(...n)},unshift(...n){return ss(this,"unshift",n)},values(){return vo(this,"values",rn)}};function vo(n,e,t){const i=wc(n),r=i[e]();return i!==n&&!In(n)&&(r._next=r.next,r.next=()=>{const s=r._next();return s.value&&(s.value=t(s.value)),s}),r}const Op=Array.prototype;function Kn(n,e,t,i,r,s){const o=wc(n),a=o!==n&&!In(n),l=o[e];if(l!==Op[e]){const p=l.apply(n,s);return a?rn(p):p}let f=t;o!==n&&(a?f=function(p,c){return t.call(this,rn(p),c,n)}:t.length>2&&(f=function(p,c){return t.call(this,p,c,n)}));const h=l.call(o,f,i);return a&&r?r(h):h}function sf(n,e,t,i){const r=wc(n);let s=t;return r!==n&&(In(n)?t.length>3&&(s=function(o,a,l){return t.call(this,o,a,l,n)}):s=function(o,a,l){return t.call(this,o,rn(a),l,n)}),r[e](s,...i)}function xo(n,e,t){const i=mt(n);Zt(i,"iterate",Ps);const r=i[e](...t);return(r===-1||r===!1)&&Cc(t[0])?(t[0]=mt(t[0]),i[e](...t)):r}function ss(n,e,t=[]){Fi(),Mc();const i=mt(n)[e].apply(n,t);return Tc(),Bi(),i}const Fp=_c("__proto__,__v_isRef,__isVue"),hh=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(Zr));function Bp(n){Zr(n)||(n=String(n));const e=mt(this);return Zt(e,"has",n),e.hasOwnProperty(n)}class dh{constructor(e=!1,t=!1){this._isReadonly=e,this._isShallow=t}get(e,t,i){const r=this._isReadonly,s=this._isShallow;if(t==="__v_isReactive")return!r;if(t==="__v_isReadonly")return r;if(t==="__v_isShallow")return s;if(t==="__v_raw")return i===(r?s?jp:gh:s?_h:mh).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(i)?e:void 0;const o=ot(e);if(!r){let l;if(o&&(l=Np[t]))return l;if(t==="hasOwnProperty")return Bp}const a=Reflect.get(e,t,Qt(e)?e:i);return(Zr(t)?hh.has(t):Fp(t))||(r||Zt(e,"get",t),s)?a:Qt(a)?o&&xc(t)?a:a.value:It(a)?r?xh(a):eo(a):a}}class ph extends dh{constructor(e=!1){super(!1,e)}set(e,t,i,r){let s=e[t];if(!this._isShallow){const l=ur(s);if(!In(i)&&!ur(i)&&(s=mt(s),i=mt(i)),!ot(e)&&Qt(s)&&!Qt(i))return l?!1:(s.value=i,!0)}const o=ot(e)&&xc(t)?Number(t)<e.length:_t(e,t),a=Reflect.set(e,t,i,Qt(e)?e:r);return e===mt(r)&&(o?Li(i,s)&&ai(e,"set",t,i):ai(e,"add",t,i)),a}deleteProperty(e,t){const i=_t(e,t);e[t];const r=Reflect.deleteProperty(e,t);return r&&i&&ai(e,"delete",t,void 0),r}has(e,t){const i=Reflect.has(e,t);return(!Zr(t)||!hh.has(t))&&Zt(e,"has",t),i}ownKeys(e){return Zt(e,"iterate",ot(e)?"length":ar),Reflect.ownKeys(e)}}class zp extends dh{constructor(e=!1){super(!0,e)}set(e,t){return!0}deleteProperty(e,t){return!0}}const kp=new ph,Hp=new zp,Gp=new ph(!0),ul=n=>n,Zs=n=>Reflect.getPrototypeOf(n);function Vp(n,e,t){return function(...i){const r=this.__v_raw,s=mt(r),o=gs(s),a=n==="entries"||n===Symbol.iterator&&o,l=n==="keys"&&o,f=r[n](...i),h=t?ul:e?hl:rn;return!e&&Zt(s,"iterate",l?fl:ar),{next(){const{value:p,done:c}=f.next();return c?{value:p,done:c}:{value:a?[h(p[0]),h(p[1])]:h(p),done:c}},[Symbol.iterator](){return this}}}}function Js(n){return function(...e){return n==="delete"?!1:n==="clear"?void 0:this}}function Wp(n,e){const t={get(r){const s=this.__v_raw,o=mt(s),a=mt(r);n||(Li(r,a)&&Zt(o,"get",r),Zt(o,"get",a));const{has:l}=Zs(o),f=e?ul:n?hl:rn;if(l.call(o,r))return f(s.get(r));if(l.call(o,a))return f(s.get(a));s!==o&&s.get(r)},get size(){const r=this.__v_raw;return!n&&Zt(mt(r),"iterate",ar),Reflect.get(r,"size",r)},has(r){const s=this.__v_raw,o=mt(s),a=mt(r);return n||(Li(r,a)&&Zt(o,"has",r),Zt(o,"has",a)),r===a?s.has(r):s.has(r)||s.has(a)},forEach(r,s){const o=this,a=o.__v_raw,l=mt(a),f=e?ul:n?hl:rn;return!n&&Zt(l,"iterate",ar),a.forEach((h,p)=>r.call(s,f(h),f(p),o))}};return Ht(t,n?{add:Js("add"),set:Js("set"),delete:Js("delete"),clear:Js("clear")}:{add(r){!e&&!In(r)&&!ur(r)&&(r=mt(r));const s=mt(this);return Zs(s).has.call(s,r)||(s.add(r),ai(s,"add",r,r)),this},set(r,s){!e&&!In(s)&&!ur(s)&&(s=mt(s));const o=mt(this),{has:a,get:l}=Zs(o);let f=a.call(o,r);f||(r=mt(r),f=a.call(o,r));const h=l.call(o,r);return o.set(r,s),f?Li(s,h)&&ai(o,"set",r,s):ai(o,"add",r,s),this},delete(r){const s=mt(this),{has:o,get:a}=Zs(s);let l=o.call(s,r);l||(r=mt(r),l=o.call(s,r)),a&&a.call(s,r);const f=s.delete(r);return l&&ai(s,"delete",r,void 0),f},clear(){const r=mt(this),s=r.size!==0,o=r.clear();return s&&ai(r,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(r=>{t[r]=Vp(r,n,e)}),t}function Ac(n,e){const t=Wp(n,e);return(i,r,s)=>r==="__v_isReactive"?!n:r==="__v_isReadonly"?n:r==="__v_raw"?i:Reflect.get(_t(t,r)&&r in i?t:i,r,s)}const Xp={get:Ac(!1,!1)},qp={get:Ac(!1,!0)},Yp={get:Ac(!0,!1)},mh=new WeakMap,_h=new WeakMap,gh=new WeakMap,jp=new WeakMap;function $p(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Kp(n){return n.__v_skip||!Object.isExtensible(n)?0:$p(yp(n))}function eo(n){return ur(n)?n:Rc(n,!1,kp,Xp,mh)}function vh(n){return Rc(n,!1,Gp,qp,_h)}function xh(n){return Rc(n,!0,Hp,Yp,gh)}function Rc(n,e,t,i,r){if(!It(n)||n.__v_raw&&!(e&&n.__v_isReactive))return n;const s=r.get(n);if(s)return s;const o=Kp(n);if(o===0)return n;const a=new Proxy(n,o===2?i:t);return r.set(n,a),a}function Ss(n){return ur(n)?Ss(n.__v_raw):!!(n&&n.__v_isReactive)}function ur(n){return!!(n&&n.__v_isReadonly)}function In(n){return!!(n&&n.__v_isShallow)}function Cc(n){return n?!!n.__v_raw:!1}function mt(n){const e=n&&n.__v_raw;return e?mt(e):n}function Zp(n){return!_t(n,"__v_skip")&&Object.isExtensible(n)&&nh(n,"__v_skip",!0),n}const rn=n=>It(n)?eo(n):n,hl=n=>It(n)?xh(n):n;function Qt(n){return n?n.__v_isRef===!0:!1}function Jp(n){return yh(n,!1)}function Qp(n){return yh(n,!0)}function yh(n,e){return Qt(n)?n:new em(n,e)}class em{constructor(e,t){this.dep=new bc,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=t?e:mt(e),this._value=t?e:rn(e),this.__v_isShallow=t}get value(){return this.dep.track(),this._value}set value(e){const t=this._rawValue,i=this.__v_isShallow||In(e)||ur(e);e=i?e:mt(e),Li(e,t)&&(this._rawValue=e,this._value=i?e:rn(e),this.dep.trigger())}}function or(n){return Qt(n)?n.value:n}const tm={get:(n,e,t)=>e==="__v_raw"?n:or(Reflect.get(n,e,t)),set:(n,e,t,i)=>{const r=n[e];return Qt(r)&&!Qt(t)?(r.value=t,!0):Reflect.set(n,e,t,i)}};function Sh(n){return Ss(n)?n:new Proxy(n,tm)}class nm{constructor(e,t,i){this.fn=e,this.setter=t,this._value=void 0,this.dep=new bc(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Cs-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!t,this.isSSR=i}notify(){if(this.flags|=16,!(this.flags&8)&&Et!==this)return ah(this,!0),!0}get value(){const e=this.dep.track();return ch(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function im(n,e,t=!1){let i,r;return at(n)?i=n:(i=n.get,r=n.set),new nm(i,r,t)}const Qs={},Ba=new WeakMap;let Zi;function rm(n,e=!1,t=Zi){if(t){let i=Ba.get(t);i||Ba.set(t,i=[]),i.push(n)}}function sm(n,e,t=bt){const{immediate:i,deep:r,once:s,scheduler:o,augmentJob:a,call:l}=t,f=w=>r?w:In(w)||r===!1||r===0?Ci(w,1):Ci(w);let h,p,c,m,d=!1,y=!1;if(Qt(n)?(p=()=>n.value,d=In(n)):Ss(n)?(p=()=>f(n),d=!0):ot(n)?(y=!0,d=n.some(w=>Ss(w)||In(w)),p=()=>n.map(w=>{if(Qt(w))return w.value;if(Ss(w))return f(w);if(at(w))return l?l(w,2):w()})):at(n)?e?p=l?()=>l(n,2):n:p=()=>{if(c){Fi();try{c()}finally{Bi()}}const w=Zi;Zi=h;try{return l?l(n,3,[m]):n(m)}finally{Zi=w}}:p=Hn,e&&r){const w=p,G=r===!0?1/0:r;p=()=>Ci(w(),G)}const g=Lp(),u=()=>{h.stop(),g&&vc(g.effects,h)};if(s&&e){const w=e;e=(...G)=>{w(...G),u()}}let b=y?new Array(n.length).fill(Qs):Qs;const T=w=>{if(!(!(h.flags&1)||!h.dirty&&!w))if(e){const G=h.run();if(r||d||(y?G.some((O,k)=>Li(O,b[k])):Li(G,b))){c&&c();const O=Zi;Zi=h;try{const k=[G,b===Qs?void 0:y&&b[0]===Qs?[]:b,m];l?l(e,3,k):e(...k),b=G}finally{Zi=O}}}else h.run()};return a&&a(T),h=new rh(p),h.scheduler=o?()=>o(T,!1):T,m=w=>rm(w,!1,h),c=h.onStop=()=>{const w=Ba.get(h);if(w){if(l)l(w,4);else for(const G of w)G();Ba.delete(h)}},e?i?T(!0):b=h.run():o?o(T.bind(null,!0),!0):h.run(),u.pause=h.pause.bind(h),u.resume=h.resume.bind(h),u.stop=u,u}function Ci(n,e=1/0,t){if(e<=0||!It(n)||n.__v_skip||(t=t||new Set,t.has(n)))return n;if(t.add(n),e--,Qt(n))Ci(n.value,e,t);else if(ot(n))for(let i=0;i<n.length;i++)Ci(n[i],e,t);else if(vp(n)||gs(n))n.forEach(i=>{Ci(i,e,t)});else if(Sp(n)){for(const i in n)Ci(n[i],e,t);for(const i of Object.getOwnPropertySymbols(n))Object.prototype.propertyIsEnumerable.call(n,i)&&Ci(n[i],e,t)}return n}/**
* @vue/runtime-core v3.5.12
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function zs(n,e,t,i){try{return i?n(...i):n()}catch(r){to(r,e,t)}}function Vn(n,e,t,i){if(at(n)){const r=zs(n,e,t,i);return r&&th(r)&&r.catch(s=>{to(s,e,t)}),r}if(ot(n)){const r=[];for(let s=0;s<n.length;s++)r.push(Vn(n[s],e,t,i));return r}}function to(n,e,t,i=!0){const r=e?e.vnode:null,{errorHandler:s,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||bt;if(e){let a=e.parent;const l=e.proxy,f=`https://vuejs.org/error-reference/#runtime-${t}`;for(;a;){const h=a.ec;if(h){for(let p=0;p<h.length;p++)if(h[p](n,l,f)===!1)return}a=a.parent}if(s){Fi(),zs(s,null,10,[n,l,f]),Bi();return}}am(n,t,r,i,o)}function am(n,e,t,i=!0,r=!1){if(r)throw n}const sn=[];let Fn=-1;const Or=[];let bi=null,Dr=0;const Mh=Promise.resolve();let za=null;function Th(n){const e=za||Mh;return n?e.then(this?n.bind(this):n):e}function om(n){let e=Fn+1,t=sn.length;for(;e<t;){const i=e+t>>>1,r=sn[i],s=Ds(r);s<n||s===n&&r.flags&2?e=i+1:t=i}return e}function Pc(n){if(!(n.flags&1)){const e=Ds(n),t=sn[sn.length-1];!t||!(n.flags&2)&&e>=Ds(t)?sn.push(n):sn.splice(om(e),0,n),n.flags|=1,Eh()}}function Eh(){za||(za=Mh.then(wh))}function lm(n){ot(n)?Or.push(...n):bi&&n.id===-1?bi.splice(Dr+1,0,n):n.flags&1||(Or.push(n),n.flags|=1),Eh()}function af(n,e,t=Fn+1){for(;t<sn.length;t++){const i=sn[t];if(i&&i.flags&2){if(n&&i.id!==n.uid)continue;sn.splice(t,1),t--,i.flags&4&&(i.flags&=-2),i(),i.flags&4||(i.flags&=-2)}}}function bh(n){if(Or.length){const e=[...new Set(Or)].sort((t,i)=>Ds(t)-Ds(i));if(Or.length=0,bi){bi.push(...e);return}for(bi=e,Dr=0;Dr<bi.length;Dr++){const t=bi[Dr];t.flags&4&&(t.flags&=-2),t.flags&8||t(),t.flags&=-2}bi=null,Dr=0}}const Ds=n=>n.id==null?n.flags&2?-1:1/0:n.id;function wh(n){try{for(Fn=0;Fn<sn.length;Fn++){const e=sn[Fn];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),zs(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;Fn<sn.length;Fn++){const e=sn[Fn];e&&(e.flags&=-2)}Fn=-1,sn.length=0,bh(),za=null,(sn.length||Or.length)&&wh()}}let Pn=null,Ah=null;function ka(n){const e=Pn;return Pn=n,Ah=n&&n.type.__scopeId||null,e}function Ms(n,e=Pn,t){if(!e||n._n)return n;const i=(...r)=>{i._d&&mf(-1);const s=ka(e);let o;try{o=n(...r)}finally{ka(s),i._d&&mf(1)}return o};return i._n=!0,i._c=!0,i._d=!0,i}function Vi(n,e,t,i){const r=n.dirs,s=e&&e.dirs;for(let o=0;o<r.length;o++){const a=r[o];s&&(a.oldValue=s[o].value);let l=a.dir[i];l&&(Fi(),Vn(l,t,8,[n.el,a,n,e]),Bi())}}const cm=Symbol("_vte"),fm=n=>n.__isTeleport;function Dc(n,e){n.shapeFlag&6&&n.component?(n.transition=e,Dc(n.component.subTree,e)):n.shapeFlag&128?(n.ssContent.transition=e.clone(n.ssContent),n.ssFallback.transition=e.clone(n.ssFallback)):n.transition=e}/*! #__NO_SIDE_EFFECTS__ */function Rh(n,e){return at(n)?Ht({name:n.name},e,{setup:n}):n}function Ch(n){n.ids=[n.ids[0]+n.ids[2]+++"-",0,0]}function dl(n,e,t,i,r=!1){if(ot(n)){n.forEach((d,y)=>dl(d,e&&(ot(e)?e[y]:e),t,i,r));return}if(Ts(i)&&!r)return;const s=i.shapeFlag&4?Fc(i.component):i.el,o=r?null:s,{i:a,r:l}=n,f=e&&e.r,h=a.refs===bt?a.refs={}:a.refs,p=a.setupState,c=mt(p),m=p===bt?()=>!1:d=>_t(c,d);if(f!=null&&f!==l&&(Gt(f)?(h[f]=null,m(f)&&(p[f]=null)):Qt(f)&&(f.value=null)),at(l))zs(l,a,12,[o,h]);else{const d=Gt(l),y=Qt(l);if(d||y){const g=()=>{if(n.f){const u=d?m(l)?p[l]:h[l]:l.value;r?ot(u)&&vc(u,s):ot(u)?u.includes(s)||u.push(s):d?(h[l]=[s],m(l)&&(p[l]=h[l])):(l.value=[s],n.k&&(h[n.k]=l.value))}else d?(h[l]=o,m(l)&&(p[l]=o)):y&&(l.value=o,n.k&&(h[n.k]=o))};o?(g.id=-1,pn(g,t)):g()}}}Qa().requestIdleCallback;Qa().cancelIdleCallback;const Ts=n=>!!n.type.__asyncLoader,Ph=n=>n.type.__isKeepAlive;function um(n,e){Dh(n,"a",e)}function hm(n,e){Dh(n,"da",e)}function Dh(n,e,t=Jt){const i=n.__wdc||(n.__wdc=()=>{let r=t;for(;r;){if(r.isDeactivated)return;r=r.parent}return n()});if(no(e,i,t),t){let r=t.parent;for(;r&&r.parent;)Ph(r.parent.vnode)&&dm(i,e,t,r),r=r.parent}}function dm(n,e,t,i){const r=no(e,n,i,!0);Lh(()=>{vc(i[e],r)},t)}function no(n,e,t=Jt,i=!1){if(t){const r=t[n]||(t[n]=[]),s=e.__weh||(e.__weh=(...o)=>{Fi();const a=Gs(t),l=Vn(e,t,n,o);return a(),Bi(),l});return i?r.unshift(s):r.push(s),s}}const pi=n=>(e,t=Jt)=>{(!Us||n==="sp")&&no(n,(...i)=>e(...i),t)},pm=pi("bm"),Lc=pi("m"),mm=pi("bu"),_m=pi("u"),gm=pi("bum"),Lh=pi("um"),vm=pi("sp"),xm=pi("rtg"),ym=pi("rtc");function Sm(n,e=Jt){no("ec",n,e)}const Mm="components";function Ic(n,e){return Em(Mm,n,!0,e)||n}const Tm=Symbol.for("v-ndc");function Em(n,e,t=!0,i=!1){const r=Pn||Jt;if(r){const s=r.type;{const a=h_(s,!1);if(a&&(a===e||a===Sn(e)||a===Ja(Sn(e))))return s}const o=of(r[n]||s[n],e)||of(r.appContext[n],e);return!o&&i?s:o}}function of(n,e){return n&&(n[e]||n[Sn(e)]||n[Ja(Sn(e))])}const pl=n=>n?Zh(n)?Fc(n):pl(n.parent):null,Es=Ht(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>pl(n.parent),$root:n=>pl(n.root),$host:n=>n.ce,$emit:n=>n.emit,$options:n=>Uc(n),$forceUpdate:n=>n.f||(n.f=()=>{Pc(n.update)}),$nextTick:n=>n.n||(n.n=Th.bind(n.proxy)),$watch:n=>Xm.bind(n)}),yo=(n,e)=>n!==bt&&!n.__isScriptSetup&&_t(n,e),bm={get({_:n},e){if(e==="__v_skip")return!0;const{ctx:t,setupState:i,data:r,props:s,accessCache:o,type:a,appContext:l}=n;let f;if(e[0]!=="$"){const m=o[e];if(m!==void 0)switch(m){case 1:return i[e];case 2:return r[e];case 4:return t[e];case 3:return s[e]}else{if(yo(i,e))return o[e]=1,i[e];if(r!==bt&&_t(r,e))return o[e]=2,r[e];if((f=n.propsOptions[0])&&_t(f,e))return o[e]=3,s[e];if(t!==bt&&_t(t,e))return o[e]=4,t[e];ml&&(o[e]=0)}}const h=Es[e];let p,c;if(h)return e==="$attrs"&&Zt(n.attrs,"get",""),h(n);if((p=a.__cssModules)&&(p=p[e]))return p;if(t!==bt&&_t(t,e))return o[e]=4,t[e];if(c=l.config.globalProperties,_t(c,e))return c[e]},set({_:n},e,t){const{data:i,setupState:r,ctx:s}=n;return yo(r,e)?(r[e]=t,!0):i!==bt&&_t(i,e)?(i[e]=t,!0):_t(n.props,e)||e[0]==="$"&&e.slice(1)in n?!1:(s[e]=t,!0)},has({_:{data:n,setupState:e,accessCache:t,ctx:i,appContext:r,propsOptions:s}},o){let a;return!!t[o]||n!==bt&&_t(n,o)||yo(e,o)||(a=s[0])&&_t(a,o)||_t(i,o)||_t(Es,o)||_t(r.config.globalProperties,o)},defineProperty(n,e,t){return t.get!=null?n._.accessCache[e]=0:_t(t,"value")&&this.set(n,e,t.value,null),Reflect.defineProperty(n,e,t)}};function lf(n){return ot(n)?n.reduce((e,t)=>(e[t]=null,e),{}):n}let ml=!0;function wm(n){const e=Uc(n),t=n.proxy,i=n.ctx;ml=!1,e.beforeCreate&&cf(e.beforeCreate,n,"bc");const{data:r,computed:s,methods:o,watch:a,provide:l,inject:f,created:h,beforeMount:p,mounted:c,beforeUpdate:m,updated:d,activated:y,deactivated:g,beforeDestroy:u,beforeUnmount:b,destroyed:T,unmounted:w,render:G,renderTracked:O,renderTriggered:k,errorCaptured:q,serverPrefetch:le,expose:A,inheritAttrs:D,components:re,directives:ee,filters:pe}=e;if(f&&Am(f,i,null),o)for(const _e in o){const te=o[_e];at(te)&&(i[_e]=te.bind(t))}if(r){const _e=r.call(t,t);It(_e)&&(n.data=eo(_e))}if(ml=!0,s)for(const _e in s){const te=s[_e],Ne=at(te)?te.bind(t,t):at(te.get)?te.get.bind(t,t):Hn,ze=!at(te)&&at(te.set)?te.set.bind(t):Hn,He=wn({get:Ne,set:ze});Object.defineProperty(i,_e,{enumerable:!0,configurable:!0,get:()=>He.value,set:Qe=>He.value=Qe})}if(a)for(const _e in a)Ih(a[_e],i,t,_e);if(l){const _e=at(l)?l.call(t):l;Reflect.ownKeys(_e).forEach(te=>{ba(te,_e[te])})}h&&cf(h,n,"c");function ae(_e,te){ot(te)?te.forEach(Ne=>_e(Ne.bind(t))):te&&_e(te.bind(t))}if(ae(pm,p),ae(Lc,c),ae(mm,m),ae(_m,d),ae(um,y),ae(hm,g),ae(Sm,q),ae(ym,O),ae(xm,k),ae(gm,b),ae(Lh,w),ae(vm,le),ot(A))if(A.length){const _e=n.exposed||(n.exposed={});A.forEach(te=>{Object.defineProperty(_e,te,{get:()=>t[te],set:Ne=>t[te]=Ne})})}else n.exposed||(n.exposed={});G&&n.render===Hn&&(n.render=G),D!=null&&(n.inheritAttrs=D),re&&(n.components=re),ee&&(n.directives=ee),le&&Ch(n)}function Am(n,e,t=Hn){ot(n)&&(n=_l(n));for(const i in n){const r=n[i];let s;It(r)?"default"in r?s=fi(r.from||i,r.default,!0):s=fi(r.from||i):s=fi(r),Qt(s)?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>s.value,set:o=>s.value=o}):e[i]=s}}function cf(n,e,t){Vn(ot(n)?n.map(i=>i.bind(e.proxy)):n.bind(e.proxy),e,t)}function Ih(n,e,t,i){let r=i.includes(".")?Yh(t,i):()=>t[i];if(Gt(n)){const s=e[n];at(s)&&wa(r,s)}else if(at(n))wa(r,n.bind(t));else if(It(n))if(ot(n))n.forEach(s=>Ih(s,e,t,i));else{const s=at(n.handler)?n.handler.bind(t):e[n.handler];at(s)&&wa(r,s,n)}}function Uc(n){const e=n.type,{mixins:t,extends:i}=e,{mixins:r,optionsCache:s,config:{optionMergeStrategies:o}}=n.appContext,a=s.get(e);let l;return a?l=a:!r.length&&!t&&!i?l=e:(l={},r.length&&r.forEach(f=>Ha(l,f,o,!0)),Ha(l,e,o)),It(e)&&s.set(e,l),l}function Ha(n,e,t,i=!1){const{mixins:r,extends:s}=e;s&&Ha(n,s,t,!0),r&&r.forEach(o=>Ha(n,o,t,!0));for(const o in e)if(!(i&&o==="expose")){const a=Rm[o]||t&&t[o];n[o]=a?a(n[o],e[o]):e[o]}return n}const Rm={data:ff,props:uf,emits:uf,methods:ps,computed:ps,beforeCreate:tn,created:tn,beforeMount:tn,mounted:tn,beforeUpdate:tn,updated:tn,beforeDestroy:tn,beforeUnmount:tn,destroyed:tn,unmounted:tn,activated:tn,deactivated:tn,errorCaptured:tn,serverPrefetch:tn,components:ps,directives:ps,watch:Pm,provide:ff,inject:Cm};function ff(n,e){return e?n?function(){return Ht(at(n)?n.call(this,this):n,at(e)?e.call(this,this):e)}:e:n}function Cm(n,e){return ps(_l(n),_l(e))}function _l(n){if(ot(n)){const e={};for(let t=0;t<n.length;t++)e[n[t]]=n[t];return e}return n}function tn(n,e){return n?[...new Set([].concat(n,e))]:e}function ps(n,e){return n?Ht(Object.create(null),n,e):e}function uf(n,e){return n?ot(n)&&ot(e)?[...new Set([...n,...e])]:Ht(Object.create(null),lf(n),lf(e??{})):e}function Pm(n,e){if(!n)return e;if(!e)return n;const t=Ht(Object.create(null),n);for(const i in e)t[i]=tn(n[i],e[i]);return t}function Uh(){return{app:null,config:{isNativeTag:_p,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Dm=0;function Lm(n,e){return function(i,r=null){at(i)||(i=Ht({},i)),r!=null&&!It(r)&&(r=null);const s=Uh(),o=new WeakSet,a=[];let l=!1;const f=s.app={_uid:Dm++,_component:i,_props:r,_container:null,_context:s,_instance:null,version:p_,get config(){return s.config},set config(h){},use(h,...p){return o.has(h)||(h&&at(h.install)?(o.add(h),h.install(f,...p)):at(h)&&(o.add(h),h(f,...p))),f},mixin(h){return s.mixins.includes(h)||s.mixins.push(h),f},component(h,p){return p?(s.components[h]=p,f):s.components[h]},directive(h,p){return p?(s.directives[h]=p,f):s.directives[h]},mount(h,p,c){if(!l){const m=f._ceVNode||kt(i,r);return m.appContext=s,c===!0?c="svg":c===!1&&(c=void 0),p&&e?e(m,h):n(m,h,c),l=!0,f._container=h,h.__vue_app__=f,Fc(m.component)}},onUnmount(h){a.push(h)},unmount(){l&&(Vn(a,f._instance,16),n(null,f._container),delete f._container.__vue_app__)},provide(h,p){return s.provides[h]=p,f},runWithContext(h){const p=Fr;Fr=f;try{return h()}finally{Fr=p}}};return f}}let Fr=null;function ba(n,e){if(Jt){let t=Jt.provides;const i=Jt.parent&&Jt.parent.provides;i===t&&(t=Jt.provides=Object.create(i)),t[n]=e}}function fi(n,e,t=!1){const i=Jt||Pn;if(i||Fr){const r=Fr?Fr._context.provides:i?i.parent==null?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:void 0;if(r&&n in r)return r[n];if(arguments.length>1)return t&&at(e)?e.call(i&&i.proxy):e}}const Nh={},Oh=()=>Object.create(Nh),Fh=n=>Object.getPrototypeOf(n)===Nh;function Im(n,e,t,i=!1){const r={},s=Oh();n.propsDefaults=Object.create(null),Bh(n,e,r,s);for(const o in n.propsOptions[0])o in r||(r[o]=void 0);t?n.props=i?r:vh(r):n.type.props?n.props=r:n.props=s,n.attrs=s}function Um(n,e,t,i){const{props:r,attrs:s,vnode:{patchFlag:o}}=n,a=mt(r),[l]=n.propsOptions;let f=!1;if((i||o>0)&&!(o&16)){if(o&8){const h=n.vnode.dynamicProps;for(let p=0;p<h.length;p++){let c=h[p];if(io(n.emitsOptions,c))continue;const m=e[c];if(l)if(_t(s,c))m!==s[c]&&(s[c]=m,f=!0);else{const d=Sn(c);r[d]=gl(l,a,d,m,n,!1)}else m!==s[c]&&(s[c]=m,f=!0)}}}else{Bh(n,e,r,s)&&(f=!0);let h;for(const p in a)(!e||!_t(e,p)&&((h=pr(p))===p||!_t(e,h)))&&(l?t&&(t[p]!==void 0||t[h]!==void 0)&&(r[p]=gl(l,a,p,void 0,n,!0)):delete r[p]);if(s!==a)for(const p in s)(!e||!_t(e,p))&&(delete s[p],f=!0)}f&&ai(n.attrs,"set","")}function Bh(n,e,t,i){const[r,s]=n.propsOptions;let o=!1,a;if(e)for(let l in e){if(vs(l))continue;const f=e[l];let h;r&&_t(r,h=Sn(l))?!s||!s.includes(h)?t[h]=f:(a||(a={}))[h]=f:io(n.emitsOptions,l)||(!(l in i)||f!==i[l])&&(i[l]=f,o=!0)}if(s){const l=mt(t),f=a||bt;for(let h=0;h<s.length;h++){const p=s[h];t[p]=gl(r,l,p,f[p],n,!_t(f,p))}}return o}function gl(n,e,t,i,r,s){const o=n[t];if(o!=null){const a=_t(o,"default");if(a&&i===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&at(l)){const{propsDefaults:f}=r;if(t in f)i=f[t];else{const h=Gs(r);i=f[t]=l.call(null,e),h()}}else i=l;r.ce&&r.ce._setProp(t,i)}o[0]&&(s&&!a?i=!1:o[1]&&(i===""||i===pr(t))&&(i=!0))}return i}const Nm=new WeakMap;function zh(n,e,t=!1){const i=t?Nm:e.propsCache,r=i.get(n);if(r)return r;const s=n.props,o={},a=[];let l=!1;if(!at(n)){const h=p=>{l=!0;const[c,m]=zh(p,e,!0);Ht(o,c),m&&a.push(...m)};!t&&e.mixins.length&&e.mixins.forEach(h),n.extends&&h(n.extends),n.mixins&&n.mixins.forEach(h)}if(!s&&!l)return It(n)&&i.set(n,Nr),Nr;if(ot(s))for(let h=0;h<s.length;h++){const p=Sn(s[h]);hf(p)&&(o[p]=bt)}else if(s)for(const h in s){const p=Sn(h);if(hf(p)){const c=s[h],m=o[p]=ot(c)||at(c)?{type:c}:Ht({},c),d=m.type;let y=!1,g=!0;if(ot(d))for(let u=0;u<d.length;++u){const b=d[u],T=at(b)&&b.name;if(T==="Boolean"){y=!0;break}else T==="String"&&(g=!1)}else y=at(d)&&d.name==="Boolean";m[0]=y,m[1]=g,(y||_t(m,"default"))&&a.push(p)}}const f=[o,a];return It(n)&&i.set(n,f),f}function hf(n){return n[0]!=="$"&&!vs(n)}const kh=n=>n[0]==="_"||n==="$stable",Nc=n=>ot(n)?n.map(zn):[zn(n)],Om=(n,e,t)=>{if(e._n)return e;const i=Ms((...r)=>Nc(e(...r)),t);return i._c=!1,i},Hh=(n,e,t)=>{const i=n._ctx;for(const r in n){if(kh(r))continue;const s=n[r];if(at(s))e[r]=Om(r,s,i);else if(s!=null){const o=Nc(s);e[r]=()=>o}}},Gh=(n,e)=>{const t=Nc(e);n.slots.default=()=>t},Vh=(n,e,t)=>{for(const i in e)(t||i!=="_")&&(n[i]=e[i])},Fm=(n,e,t)=>{const i=n.slots=Oh();if(n.vnode.shapeFlag&32){const r=e._;r?(Vh(i,e,t),t&&nh(i,"_",r,!0)):Hh(e,i)}else e&&Gh(n,e)},Bm=(n,e,t)=>{const{vnode:i,slots:r}=n;let s=!0,o=bt;if(i.shapeFlag&32){const a=e._;a?t&&a===1?s=!1:Vh(r,e,t):(s=!e.$stable,Hh(e,r)),o=e}else e&&(Gh(n,e),o={default:1});if(s)for(const a in r)!kh(a)&&o[a]==null&&delete r[a]},pn=Jm;function zm(n){return km(n)}function km(n,e){const t=Qa();t.__VUE__=!0;const{insert:i,remove:r,patchProp:s,createElement:o,createText:a,createComment:l,setText:f,setElementText:h,parentNode:p,nextSibling:c,setScopeId:m=Hn,insertStaticContent:d}=n,y=(E,H,V,de=null,ie=null,ye=null,ve=void 0,_=null,v=!!H.dynamicChildren)=>{if(E===H)return;E&&!as(E,H)&&(de=Z(E),Qe(E,ie,ye,!0),E=null),H.patchFlag===-2&&(v=!1,H.dynamicChildren=null);const{type:M,ref:C,shapeFlag:U}=H;switch(M){case ro:g(E,H,V,de);break;case Ls:u(E,H,V,de);break;case Aa:E==null&&b(H,V,de,ve);break;case si:re(E,H,V,de,ie,ye,ve,_,v);break;default:U&1?G(E,H,V,de,ie,ye,ve,_,v):U&6?ee(E,H,V,de,ie,ye,ve,_,v):(U&64||U&128)&&M.process(E,H,V,de,ie,ye,ve,_,v,De)}C!=null&&ie&&dl(C,E&&E.ref,ye,H||E,!H)},g=(E,H,V,de)=>{if(E==null)i(H.el=a(H.children),V,de);else{const ie=H.el=E.el;H.children!==E.children&&f(ie,H.children)}},u=(E,H,V,de)=>{E==null?i(H.el=l(H.children||""),V,de):H.el=E.el},b=(E,H,V,de)=>{[E.el,E.anchor]=d(E.children,H,V,de,E.el,E.anchor)},T=({el:E,anchor:H},V,de)=>{let ie;for(;E&&E!==H;)ie=c(E),i(E,V,de),E=ie;i(H,V,de)},w=({el:E,anchor:H})=>{let V;for(;E&&E!==H;)V=c(E),r(E),E=V;r(H)},G=(E,H,V,de,ie,ye,ve,_,v)=>{H.type==="svg"?ve="svg":H.type==="math"&&(ve="mathml"),E==null?O(H,V,de,ie,ye,ve,_,v):le(E,H,ie,ye,ve,_,v)},O=(E,H,V,de,ie,ye,ve,_)=>{let v,M;const{props:C,shapeFlag:U,transition:F,dirs:j}=E;if(v=E.el=o(E.type,ye,C&&C.is,C),U&8?h(v,E.children):U&16&&q(E.children,v,null,de,ie,So(E,ye),ve,_),j&&Vi(E,null,de,"created"),k(v,E,E.scopeId,ve,de),C){for(const J in C)J!=="value"&&!vs(J)&&s(v,J,null,C[J],ye,de);"value"in C&&s(v,"value",null,C.value,ye),(M=C.onVnodeBeforeMount)&&On(M,de,E)}j&&Vi(E,null,de,"beforeMount");const W=Hm(ie,F);W&&F.beforeEnter(v),i(v,H,V),((M=C&&C.onVnodeMounted)||W||j)&&pn(()=>{M&&On(M,de,E),W&&F.enter(v),j&&Vi(E,null,de,"mounted")},ie)},k=(E,H,V,de,ie)=>{if(V&&m(E,V),de)for(let ye=0;ye<de.length;ye++)m(E,de[ye]);if(ie){let ye=ie.subTree;if(H===ye||$h(ye.type)&&(ye.ssContent===H||ye.ssFallback===H)){const ve=ie.vnode;k(E,ve,ve.scopeId,ve.slotScopeIds,ie.parent)}}},q=(E,H,V,de,ie,ye,ve,_,v=0)=>{for(let M=v;M<E.length;M++){const C=E[M]=_?wi(E[M]):zn(E[M]);y(null,C,H,V,de,ie,ye,ve,_)}},le=(E,H,V,de,ie,ye,ve)=>{const _=H.el=E.el;let{patchFlag:v,dynamicChildren:M,dirs:C}=H;v|=E.patchFlag&16;const U=E.props||bt,F=H.props||bt;let j;if(V&&Wi(V,!1),(j=F.onVnodeBeforeUpdate)&&On(j,V,H,E),C&&Vi(H,E,V,"beforeUpdate"),V&&Wi(V,!0),(U.innerHTML&&F.innerHTML==null||U.textContent&&F.textContent==null)&&h(_,""),M?A(E.dynamicChildren,M,_,V,de,So(H,ie),ye):ve||te(E,H,_,null,V,de,So(H,ie),ye,!1),v>0){if(v&16)D(_,U,F,V,ie);else if(v&2&&U.class!==F.class&&s(_,"class",null,F.class,ie),v&4&&s(_,"style",U.style,F.style,ie),v&8){const W=H.dynamicProps;for(let J=0;J<W.length;J++){const Te=W[J],ne=U[Te],ge=F[Te];(ge!==ne||Te==="value")&&s(_,Te,ne,ge,ie,V)}}v&1&&E.children!==H.children&&h(_,H.children)}else!ve&&M==null&&D(_,U,F,V,ie);((j=F.onVnodeUpdated)||C)&&pn(()=>{j&&On(j,V,H,E),C&&Vi(H,E,V,"updated")},de)},A=(E,H,V,de,ie,ye,ve)=>{for(let _=0;_<H.length;_++){const v=E[_],M=H[_],C=v.el&&(v.type===si||!as(v,M)||v.shapeFlag&70)?p(v.el):V;y(v,M,C,null,de,ie,ye,ve,!0)}},D=(E,H,V,de,ie)=>{if(H!==V){if(H!==bt)for(const ye in H)!vs(ye)&&!(ye in V)&&s(E,ye,H[ye],null,ie,de);for(const ye in V){if(vs(ye))continue;const ve=V[ye],_=H[ye];ve!==_&&ye!=="value"&&s(E,ye,_,ve,ie,de)}"value"in V&&s(E,"value",H.value,V.value,ie)}},re=(E,H,V,de,ie,ye,ve,_,v)=>{const M=H.el=E?E.el:a(""),C=H.anchor=E?E.anchor:a("");let{patchFlag:U,dynamicChildren:F,slotScopeIds:j}=H;j&&(_=_?_.concat(j):j),E==null?(i(M,V,de),i(C,V,de),q(H.children||[],V,C,ie,ye,ve,_,v)):U>0&&U&64&&F&&E.dynamicChildren?(A(E.dynamicChildren,F,V,ie,ye,ve,_),(H.key!=null||ie&&H===ie.subTree)&&Wh(E,H,!0)):te(E,H,V,C,ie,ye,ve,_,v)},ee=(E,H,V,de,ie,ye,ve,_,v)=>{H.slotScopeIds=_,E==null?H.shapeFlag&512?ie.ctx.activate(H,V,de,ve,v):pe(H,V,de,ie,ye,ve,v):oe(E,H,v)},pe=(E,H,V,de,ie,ye,ve)=>{const _=E.component=o_(E,de,ie);if(Ph(E)&&(_.ctx.renderer=De),l_(_,!1,ve),_.asyncDep){if(ie&&ie.registerDep(_,ae,ve),!E.el){const v=_.subTree=kt(Ls);u(null,v,H,V)}}else ae(_,E,H,V,ie,ye,ve)},oe=(E,H,V)=>{const de=H.component=E.component;if(Km(E,H,V))if(de.asyncDep&&!de.asyncResolved){_e(de,H,V);return}else de.next=H,de.update();else H.el=E.el,de.vnode=H},ae=(E,H,V,de,ie,ye,ve)=>{const _=()=>{if(E.isMounted){let{next:U,bu:F,u:j,parent:W,vnode:J}=E;{const Le=Xh(E);if(Le){U&&(U.el=J.el,_e(E,U,ve)),Le.asyncDep.then(()=>{E.isUnmounted||_()});return}}let Te=U,ne;Wi(E,!1),U?(U.el=J.el,_e(E,U,ve)):U=J,F&&_o(F),(ne=U.props&&U.props.onVnodeBeforeUpdate)&&On(ne,W,U,J),Wi(E,!0);const ge=Mo(E),Fe=E.subTree;E.subTree=ge,y(Fe,ge,p(Fe.el),Z(Fe),E,ie,ye),U.el=ge.el,Te===null&&Zm(E,ge.el),j&&pn(j,ie),(ne=U.props&&U.props.onVnodeUpdated)&&pn(()=>On(ne,W,U,J),ie)}else{let U;const{el:F,props:j}=H,{bm:W,m:J,parent:Te,root:ne,type:ge}=E,Fe=Ts(H);if(Wi(E,!1),W&&_o(W),!Fe&&(U=j&&j.onVnodeBeforeMount)&&On(U,Te,H),Wi(E,!0),F&&We){const Le=()=>{E.subTree=Mo(E),We(F,E.subTree,E,ie,null)};Fe&&ge.__asyncHydrate?ge.__asyncHydrate(F,E,Le):Le()}else{ne.ce&&ne.ce._injectChildStyle(ge);const Le=E.subTree=Mo(E);y(null,Le,V,de,E,ie,ye),H.el=Le.el}if(J&&pn(J,ie),!Fe&&(U=j&&j.onVnodeMounted)){const Le=H;pn(()=>On(U,Te,Le),ie)}(H.shapeFlag&256||Te&&Ts(Te.vnode)&&Te.vnode.shapeFlag&256)&&E.a&&pn(E.a,ie),E.isMounted=!0,H=V=de=null}};E.scope.on();const v=E.effect=new rh(_);E.scope.off();const M=E.update=v.run.bind(v),C=E.job=v.runIfDirty.bind(v);C.i=E,C.id=E.uid,v.scheduler=()=>Pc(C),Wi(E,!0),M()},_e=(E,H,V)=>{H.component=E;const de=E.vnode.props;E.vnode=H,E.next=null,Um(E,H.props,de,V),Bm(E,H.children,V),Fi(),af(E),Bi()},te=(E,H,V,de,ie,ye,ve,_,v=!1)=>{const M=E&&E.children,C=E?E.shapeFlag:0,U=H.children,{patchFlag:F,shapeFlag:j}=H;if(F>0){if(F&128){ze(M,U,V,de,ie,ye,ve,_,v);return}else if(F&256){Ne(M,U,V,de,ie,ye,ve,_,v);return}}j&8?(C&16&&Oe(M,ie,ye),U!==M&&h(V,U)):C&16?j&16?ze(M,U,V,de,ie,ye,ve,_,v):Oe(M,ie,ye,!0):(C&8&&h(V,""),j&16&&q(U,V,de,ie,ye,ve,_,v))},Ne=(E,H,V,de,ie,ye,ve,_,v)=>{E=E||Nr,H=H||Nr;const M=E.length,C=H.length,U=Math.min(M,C);let F;for(F=0;F<U;F++){const j=H[F]=v?wi(H[F]):zn(H[F]);y(E[F],j,V,null,ie,ye,ve,_,v)}M>C?Oe(E,ie,ye,!0,!1,U):q(H,V,de,ie,ye,ve,_,v,U)},ze=(E,H,V,de,ie,ye,ve,_,v)=>{let M=0;const C=H.length;let U=E.length-1,F=C-1;for(;M<=U&&M<=F;){const j=E[M],W=H[M]=v?wi(H[M]):zn(H[M]);if(as(j,W))y(j,W,V,null,ie,ye,ve,_,v);else break;M++}for(;M<=U&&M<=F;){const j=E[U],W=H[F]=v?wi(H[F]):zn(H[F]);if(as(j,W))y(j,W,V,null,ie,ye,ve,_,v);else break;U--,F--}if(M>U){if(M<=F){const j=F+1,W=j<C?H[j].el:de;for(;M<=F;)y(null,H[M]=v?wi(H[M]):zn(H[M]),V,W,ie,ye,ve,_,v),M++}}else if(M>F)for(;M<=U;)Qe(E[M],ie,ye,!0),M++;else{const j=M,W=M,J=new Map;for(M=W;M<=F;M++){const Ye=H[M]=v?wi(H[M]):zn(H[M]);Ye.key!=null&&J.set(Ye.key,M)}let Te,ne=0;const ge=F-W+1;let Fe=!1,Le=0;const Ue=new Array(ge);for(M=0;M<ge;M++)Ue[M]=0;for(M=j;M<=U;M++){const Ye=E[M];if(ne>=ge){Qe(Ye,ie,ye,!0);continue}let tt;if(Ye.key!=null)tt=J.get(Ye.key);else for(Te=W;Te<=F;Te++)if(Ue[Te-W]===0&&as(Ye,H[Te])){tt=Te;break}tt===void 0?Qe(Ye,ie,ye,!0):(Ue[tt-W]=M+1,tt>=Le?Le=tt:Fe=!0,y(Ye,H[tt],V,null,ie,ye,ve,_,v),ne++)}const $e=Fe?Gm(Ue):Nr;for(Te=$e.length-1,M=ge-1;M>=0;M--){const Ye=W+M,tt=H[Ye],$=Ye+1<C?H[Ye+1].el:de;Ue[M]===0?y(null,tt,V,$,ie,ye,ve,_,v):Fe&&(Te<0||M!==$e[Te]?He(tt,V,$,2):Te--)}}},He=(E,H,V,de,ie=null)=>{const{el:ye,type:ve,transition:_,children:v,shapeFlag:M}=E;if(M&6){He(E.component.subTree,H,V,de);return}if(M&128){E.suspense.move(H,V,de);return}if(M&64){ve.move(E,H,V,De);return}if(ve===si){i(ye,H,V);for(let U=0;U<v.length;U++)He(v[U],H,V,de);i(E.anchor,H,V);return}if(ve===Aa){T(E,H,V);return}if(de!==2&&M&1&&_)if(de===0)_.beforeEnter(ye),i(ye,H,V),pn(()=>_.enter(ye),ie);else{const{leave:U,delayLeave:F,afterLeave:j}=_,W=()=>i(ye,H,V),J=()=>{U(ye,()=>{W(),j&&j()})};F?F(ye,W,J):J()}else i(ye,H,V)},Qe=(E,H,V,de=!1,ie=!1)=>{const{type:ye,props:ve,ref:_,children:v,dynamicChildren:M,shapeFlag:C,patchFlag:U,dirs:F,cacheIndex:j}=E;if(U===-2&&(ie=!1),_!=null&&dl(_,null,V,E,!0),j!=null&&(H.renderCache[j]=void 0),C&256){H.ctx.deactivate(E);return}const W=C&1&&F,J=!Ts(E);let Te;if(J&&(Te=ve&&ve.onVnodeBeforeUnmount)&&On(Te,H,E),C&6)Pe(E.component,V,de);else{if(C&128){E.suspense.unmount(V,de);return}W&&Vi(E,null,H,"beforeUnmount"),C&64?E.type.remove(E,H,V,De,de):M&&!M.hasOnce&&(ye!==si||U>0&&U&64)?Oe(M,H,V,!1,!0):(ye===si&&U&384||!ie&&C&16)&&Oe(v,H,V),de&&it(E)}(J&&(Te=ve&&ve.onVnodeUnmounted)||W)&&pn(()=>{Te&&On(Te,H,E),W&&Vi(E,null,H,"unmounted")},V)},it=E=>{const{type:H,el:V,anchor:de,transition:ie}=E;if(H===si){Se(V,de);return}if(H===Aa){w(E);return}const ye=()=>{r(V),ie&&!ie.persisted&&ie.afterLeave&&ie.afterLeave()};if(E.shapeFlag&1&&ie&&!ie.persisted){const{leave:ve,delayLeave:_}=ie,v=()=>ve(V,ye);_?_(E.el,ye,v):v()}else ye()},Se=(E,H)=>{let V;for(;E!==H;)V=c(E),r(E),E=V;r(H)},Pe=(E,H,V)=>{const{bum:de,scope:ie,job:ye,subTree:ve,um:_,m:v,a:M}=E;df(v),df(M),de&&_o(de),ie.stop(),ye&&(ye.flags|=8,Qe(ve,E,H,V)),_&&pn(_,H),pn(()=>{E.isUnmounted=!0},H),H&&H.pendingBranch&&!H.isUnmounted&&E.asyncDep&&!E.asyncResolved&&E.suspenseId===H.pendingId&&(H.deps--,H.deps===0&&H.resolve())},Oe=(E,H,V,de=!1,ie=!1,ye=0)=>{for(let ve=ye;ve<E.length;ve++)Qe(E[ve],H,V,de,ie)},Z=E=>{if(E.shapeFlag&6)return Z(E.component.subTree);if(E.shapeFlag&128)return E.suspense.next();const H=c(E.anchor||E.el),V=H&&H[cm];return V?c(V):H};let we=!1;const xe=(E,H,V)=>{E==null?H._vnode&&Qe(H._vnode,null,null,!0):y(H._vnode||null,E,H,null,null,null,V),H._vnode=E,we||(we=!0,af(),bh(),we=!1)},De={p:y,um:Qe,m:He,r:it,mt:pe,mc:q,pc:te,pbc:A,n:Z,o:n};let qe,We;return{render:xe,hydrate:qe,createApp:Lm(xe,qe)}}function So({type:n,props:e},t){return t==="svg"&&n==="foreignObject"||t==="mathml"&&n==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:t}function Wi({effect:n,job:e},t){t?(n.flags|=32,e.flags|=4):(n.flags&=-33,e.flags&=-5)}function Hm(n,e){return(!n||n&&!n.pendingBranch)&&e&&!e.persisted}function Wh(n,e,t=!1){const i=n.children,r=e.children;if(ot(i)&&ot(r))for(let s=0;s<i.length;s++){const o=i[s];let a=r[s];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=r[s]=wi(r[s]),a.el=o.el),!t&&a.patchFlag!==-2&&Wh(o,a)),a.type===ro&&(a.el=o.el)}}function Gm(n){const e=n.slice(),t=[0];let i,r,s,o,a;const l=n.length;for(i=0;i<l;i++){const f=n[i];if(f!==0){if(r=t[t.length-1],n[r]<f){e[i]=r,t.push(i);continue}for(s=0,o=t.length-1;s<o;)a=s+o>>1,n[t[a]]<f?s=a+1:o=a;f<n[t[s]]&&(s>0&&(e[i]=t[s-1]),t[s]=i)}}for(s=t.length,o=t[s-1];s-- >0;)t[s]=o,o=e[o];return t}function Xh(n){const e=n.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Xh(e)}function df(n){if(n)for(let e=0;e<n.length;e++)n[e].flags|=8}const Vm=Symbol.for("v-scx"),Wm=()=>fi(Vm);function wa(n,e,t){return qh(n,e,t)}function qh(n,e,t=bt){const{immediate:i,deep:r,flush:s,once:o}=t,a=Ht({},t),l=e&&i||!e&&s!=="post";let f;if(Us){if(s==="sync"){const m=Wm();f=m.__watcherHandles||(m.__watcherHandles=[])}else if(!l){const m=()=>{};return m.stop=Hn,m.resume=Hn,m.pause=Hn,m}}const h=Jt;a.call=(m,d,y)=>Vn(m,h,d,y);let p=!1;s==="post"?a.scheduler=m=>{pn(m,h&&h.suspense)}:s!=="sync"&&(p=!0,a.scheduler=(m,d)=>{d?m():Pc(m)}),a.augmentJob=m=>{e&&(m.flags|=4),p&&(m.flags|=2,h&&(m.id=h.uid,m.i=h))};const c=sm(n,e,a);return Us&&(f?f.push(c):l&&c()),c}function Xm(n,e,t){const i=this.proxy,r=Gt(n)?n.includes(".")?Yh(i,n):()=>i[n]:n.bind(i,i);let s;at(e)?s=e:(s=e.handler,t=e);const o=Gs(this),a=qh(r,s.bind(i),t);return o(),a}function Yh(n,e){const t=e.split(".");return()=>{let i=n;for(let r=0;r<t.length&&i;r++)i=i[t[r]];return i}}const qm=(n,e)=>e==="modelValue"||e==="model-value"?n.modelModifiers:n[`${e}Modifiers`]||n[`${Sn(e)}Modifiers`]||n[`${pr(e)}Modifiers`];function Ym(n,e,...t){if(n.isUnmounted)return;const i=n.vnode.props||bt;let r=t;const s=e.startsWith("update:"),o=s&&qm(i,e.slice(7));o&&(o.trim&&(r=t.map(h=>Gt(h)?h.trim():h)),o.number&&(r=t.map(Ep)));let a,l=i[a=mo(e)]||i[a=mo(Sn(e))];!l&&s&&(l=i[a=mo(pr(e))]),l&&Vn(l,n,6,r);const f=i[a+"Once"];if(f){if(!n.emitted)n.emitted={};else if(n.emitted[a])return;n.emitted[a]=!0,Vn(f,n,6,r)}}function jh(n,e,t=!1){const i=e.emitsCache,r=i.get(n);if(r!==void 0)return r;const s=n.emits;let o={},a=!1;if(!at(n)){const l=f=>{const h=jh(f,e,!0);h&&(a=!0,Ht(o,h))};!t&&e.mixins.length&&e.mixins.forEach(l),n.extends&&l(n.extends),n.mixins&&n.mixins.forEach(l)}return!s&&!a?(It(n)&&i.set(n,null),null):(ot(s)?s.forEach(l=>o[l]=null):Ht(o,s),It(n)&&i.set(n,o),o)}function io(n,e){return!n||!$a(e)?!1:(e=e.slice(2).replace(/Once$/,""),_t(n,e[0].toLowerCase()+e.slice(1))||_t(n,pr(e))||_t(n,e))}function Mo(n){const{type:e,vnode:t,proxy:i,withProxy:r,propsOptions:[s],slots:o,attrs:a,emit:l,render:f,renderCache:h,props:p,data:c,setupState:m,ctx:d,inheritAttrs:y}=n,g=ka(n);let u,b;try{if(t.shapeFlag&4){const w=r||i,G=w;u=zn(f.call(G,w,h,p,m,c,d)),b=a}else{const w=e;u=zn(w.length>1?w(p,{attrs:a,slots:o,emit:l}):w(p,null)),b=e.props?a:jm(a)}}catch(w){bs.length=0,to(w,n,1),u=kt(Ls)}let T=u;if(b&&y!==!1){const w=Object.keys(b),{shapeFlag:G}=T;w.length&&G&7&&(s&&w.some(gc)&&(b=$m(b,s)),T=Gr(T,b,!1,!0))}return t.dirs&&(T=Gr(T,null,!1,!0),T.dirs=T.dirs?T.dirs.concat(t.dirs):t.dirs),t.transition&&Dc(T,t.transition),u=T,ka(g),u}const jm=n=>{let e;for(const t in n)(t==="class"||t==="style"||$a(t))&&((e||(e={}))[t]=n[t]);return e},$m=(n,e)=>{const t={};for(const i in n)(!gc(i)||!(i.slice(9)in e))&&(t[i]=n[i]);return t};function Km(n,e,t){const{props:i,children:r,component:s}=n,{props:o,children:a,patchFlag:l}=e,f=s.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&l>=0){if(l&1024)return!0;if(l&16)return i?pf(i,o,f):!!o;if(l&8){const h=e.dynamicProps;for(let p=0;p<h.length;p++){const c=h[p];if(o[c]!==i[c]&&!io(f,c))return!0}}}else return(r||a)&&(!a||!a.$stable)?!0:i===o?!1:i?o?pf(i,o,f):!0:!!o;return!1}function pf(n,e,t){const i=Object.keys(e);if(i.length!==Object.keys(n).length)return!0;for(let r=0;r<i.length;r++){const s=i[r];if(e[s]!==n[s]&&!io(t,s))return!0}return!1}function Zm({vnode:n,parent:e},t){for(;e;){const i=e.subTree;if(i.suspense&&i.suspense.activeBranch===n&&(i.el=n.el),i===n)(n=e.vnode).el=t,e=e.parent;else break}}const $h=n=>n.__isSuspense;function Jm(n,e){e&&e.pendingBranch?ot(n)?e.effects.push(...n):e.effects.push(n):lm(n)}const si=Symbol.for("v-fgt"),ro=Symbol.for("v-txt"),Ls=Symbol.for("v-cmt"),Aa=Symbol.for("v-stc"),bs=[];let _n=null;function ks(n=!1){bs.push(_n=n?null:[])}function Qm(){bs.pop(),_n=bs[bs.length-1]||null}let Is=1;function mf(n){Is+=n,n<0&&_n&&(_n.hasOnce=!0)}function e_(n){return n.dynamicChildren=Is>0?_n||Nr:null,Qm(),Is>0&&_n&&_n.push(n),n}function Hs(n,e,t,i,r,s){return e_(Un(n,e,t,i,r,s,!0))}function Ga(n){return n?n.__v_isVNode===!0:!1}function as(n,e){return n.type===e.type&&n.key===e.key}const Kh=({key:n})=>n??null,Ra=({ref:n,ref_key:e,ref_for:t})=>(typeof n=="number"&&(n=""+n),n!=null?Gt(n)||Qt(n)||at(n)?{i:Pn,r:n,k:e,f:!!t}:n:null);function Un(n,e=null,t=null,i=0,r=null,s=n===si?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:n,props:e,key:e&&Kh(e),ref:e&&Ra(e),scopeId:Ah,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:i,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:Pn};return a?(Oc(l,t),s&128&&n.normalize(l)):t&&(l.shapeFlag|=Gt(t)?8:16),Is>0&&!o&&_n&&(l.patchFlag>0||s&6)&&l.patchFlag!==32&&_n.push(l),l}const kt=t_;function t_(n,e=null,t=null,i=0,r=null,s=!1){if((!n||n===Tm)&&(n=Ls),Ga(n)){const a=Gr(n,e,!0);return t&&Oc(a,t),Is>0&&!s&&_n&&(a.shapeFlag&6?_n[_n.indexOf(n)]=a:_n.push(a)),a.patchFlag=-2,a}if(d_(n)&&(n=n.__vccOpts),e){e=n_(e);let{class:a,style:l}=e;a&&!Gt(a)&&(e.class=Sc(a)),It(l)&&(Cc(l)&&!ot(l)&&(l=Ht({},l)),e.style=yc(l))}const o=Gt(n)?1:$h(n)?128:fm(n)?64:It(n)?4:at(n)?2:0;return Un(n,e,t,i,r,o,s,!0)}function n_(n){return n?Cc(n)||Fh(n)?Ht({},n):n:null}function Gr(n,e,t=!1,i=!1){const{props:r,ref:s,patchFlag:o,children:a,transition:l}=n,f=e?r_(r||{},e):r,h={__v_isVNode:!0,__v_skip:!0,type:n.type,props:f,key:f&&Kh(f),ref:e&&e.ref?t&&s?ot(s)?s.concat(Ra(e)):[s,Ra(e)]:Ra(e):s,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:a,target:n.target,targetStart:n.targetStart,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:e&&n.type!==si?o===-1?16:o|16:o,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:l,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&Gr(n.ssContent),ssFallback:n.ssFallback&&Gr(n.ssFallback),el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce};return l&&i&&Dc(h,l.clone(h)),h}function ws(n=" ",e=0){return kt(ro,null,n,e)}function i_(n,e){const t=kt(Aa,null,n);return t.staticCount=e,t}function zn(n){return n==null||typeof n=="boolean"?kt(Ls):ot(n)?kt(si,null,n.slice()):Ga(n)?wi(n):kt(ro,null,String(n))}function wi(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:Gr(n)}function Oc(n,e){let t=0;const{shapeFlag:i}=n;if(e==null)e=null;else if(ot(e))t=16;else if(typeof e=="object")if(i&65){const r=e.default;r&&(r._c&&(r._d=!1),Oc(n,r()),r._c&&(r._d=!0));return}else{t=32;const r=e._;!r&&!Fh(e)?e._ctx=Pn:r===3&&Pn&&(Pn.slots._===1?e._=1:(e._=2,n.patchFlag|=1024))}else at(e)?(e={default:e,_ctx:Pn},t=32):(e=String(e),i&64?(t=16,e=[ws(e)]):t=8);n.children=e,n.shapeFlag|=t}function r_(...n){const e={};for(let t=0;t<n.length;t++){const i=n[t];for(const r in i)if(r==="class")e.class!==i.class&&(e.class=Sc([e.class,i.class]));else if(r==="style")e.style=yc([e.style,i.style]);else if($a(r)){const s=e[r],o=i[r];o&&s!==o&&!(ot(s)&&s.includes(o))&&(e[r]=s?[].concat(s,o):o)}else r!==""&&(e[r]=i[r])}return e}function On(n,e,t,i=null){Vn(n,e,7,[t,i])}const s_=Uh();let a_=0;function o_(n,e,t){const i=n.type,r=(e?e.appContext:n.appContext)||s_,s={uid:a_++,vnode:n,type:i,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Dp(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:zh(i,r),emitsOptions:jh(i,r),emit:null,emitted:null,propsDefaults:bt,inheritAttrs:i.inheritAttrs,ctx:bt,data:bt,props:bt,attrs:bt,slots:bt,refs:bt,setupState:bt,setupContext:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=e?e.root:s,s.emit=Ym.bind(null,s),n.ce&&n.ce(s),s}let Jt=null,Va,vl;{const n=Qa(),e=(t,i)=>{let r;return(r=n[t])||(r=n[t]=[]),r.push(i),s=>{r.length>1?r.forEach(o=>o(s)):r[0](s)}};Va=e("__VUE_INSTANCE_SETTERS__",t=>Jt=t),vl=e("__VUE_SSR_SETTERS__",t=>Us=t)}const Gs=n=>{const e=Jt;return Va(n),n.scope.on(),()=>{n.scope.off(),Va(e)}},_f=()=>{Jt&&Jt.scope.off(),Va(null)};function Zh(n){return n.vnode.shapeFlag&4}let Us=!1;function l_(n,e=!1,t=!1){e&&vl(e);const{props:i,children:r}=n.vnode,s=Zh(n);Im(n,i,s,e),Fm(n,r,t);const o=s?c_(n,e):void 0;return e&&vl(!1),o}function c_(n,e){const t=n.type;n.accessCache=Object.create(null),n.proxy=new Proxy(n.ctx,bm);const{setup:i}=t;if(i){Fi();const r=n.setupContext=i.length>1?u_(n):null,s=Gs(n),o=zs(i,n,0,[n.props,r]),a=th(o);if(Bi(),s(),(a||n.sp)&&!Ts(n)&&Ch(n),a){if(o.then(_f,_f),e)return o.then(l=>{gf(n,l,e)}).catch(l=>{to(l,n,0)});n.asyncDep=o}else gf(n,o,e)}else Jh(n,e)}function gf(n,e,t){at(e)?n.type.__ssrInlineRender?n.ssrRender=e:n.render=e:It(e)&&(n.setupState=Sh(e)),Jh(n,t)}let vf;function Jh(n,e,t){const i=n.type;if(!n.render){if(!e&&vf&&!i.render){const r=i.template||Uc(n).template;if(r){const{isCustomElement:s,compilerOptions:o}=n.appContext.config,{delimiters:a,compilerOptions:l}=i,f=Ht(Ht({isCustomElement:s,delimiters:a},o),l);i.render=vf(r,f)}}n.render=i.render||Hn}{const r=Gs(n);Fi();try{wm(n)}finally{Bi(),r()}}}const f_={get(n,e){return Zt(n,"get",""),n[e]}};function u_(n){const e=t=>{n.exposed=t||{}};return{attrs:new Proxy(n.attrs,f_),slots:n.slots,emit:n.emit,expose:e}}function Fc(n){return n.exposed?n.exposeProxy||(n.exposeProxy=new Proxy(Sh(Zp(n.exposed)),{get(e,t){if(t in e)return e[t];if(t in Es)return Es[t](n)},has(e,t){return t in e||t in Es}})):n.proxy}function h_(n,e=!0){return at(n)?n.displayName||n.name:n.name||e&&n.__name}function d_(n){return at(n)&&"__vccOpts"in n}const wn=(n,e)=>im(n,e,Us);function Qh(n,e,t){const i=arguments.length;return i===2?It(e)&&!ot(e)?Ga(e)?kt(n,null,[e]):kt(n,e):kt(n,null,e):(i>3?t=Array.prototype.slice.call(arguments,2):i===3&&Ga(t)&&(t=[t]),kt(n,e,t))}const p_="3.5.12";/**
* @vue/runtime-dom v3.5.12
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let xl;const xf=typeof window<"u"&&window.trustedTypes;if(xf)try{xl=xf.createPolicy("vue",{createHTML:n=>n})}catch{}const ed=xl?n=>xl.createHTML(n):n=>n,m_="http://www.w3.org/2000/svg",__="http://www.w3.org/1998/Math/MathML",ri=typeof document<"u"?document:null,yf=ri&&ri.createElement("template"),g_={insert:(n,e,t)=>{e.insertBefore(n,t||null)},remove:n=>{const e=n.parentNode;e&&e.removeChild(n)},createElement:(n,e,t,i)=>{const r=e==="svg"?ri.createElementNS(m_,n):e==="mathml"?ri.createElementNS(__,n):t?ri.createElement(n,{is:t}):ri.createElement(n);return n==="select"&&i&&i.multiple!=null&&r.setAttribute("multiple",i.multiple),r},createText:n=>ri.createTextNode(n),createComment:n=>ri.createComment(n),setText:(n,e)=>{n.nodeValue=e},setElementText:(n,e)=>{n.textContent=e},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>ri.querySelector(n),setScopeId(n,e){n.setAttribute(e,"")},insertStaticContent(n,e,t,i,r,s){const o=t?t.previousSibling:e.lastChild;if(r&&(r===s||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),t),!(r===s||!(r=r.nextSibling)););else{yf.innerHTML=ed(i==="svg"?`<svg>${n}</svg>`:i==="mathml"?`<math>${n}</math>`:n);const a=yf.content;if(i==="svg"||i==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,t)}return[o?o.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}},v_=Symbol("_vtc");function x_(n,e,t){const i=n[v_];i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?n.removeAttribute("class"):t?n.setAttribute("class",e):n.className=e}const Sf=Symbol("_vod"),y_=Symbol("_vsh"),S_=Symbol(""),M_=/(^|;)\s*display\s*:/;function T_(n,e,t){const i=n.style,r=Gt(t);let s=!1;if(t&&!r){if(e)if(Gt(e))for(const o of e.split(";")){const a=o.slice(0,o.indexOf(":")).trim();t[a]==null&&Ca(i,a,"")}else for(const o in e)t[o]==null&&Ca(i,o,"");for(const o in t)o==="display"&&(s=!0),Ca(i,o,t[o])}else if(r){if(e!==t){const o=i[S_];o&&(t+=";"+o),i.cssText=t,s=M_.test(t)}}else e&&n.removeAttribute("style");Sf in n&&(n[Sf]=s?i.display:"",n[y_]&&(i.display="none"))}const Mf=/\s*!important$/;function Ca(n,e,t){if(ot(t))t.forEach(i=>Ca(n,e,i));else if(t==null&&(t=""),e.startsWith("--"))n.setProperty(e,t);else{const i=E_(n,e);Mf.test(t)?n.setProperty(pr(i),t.replace(Mf,""),"important"):n[i]=t}}const Tf=["Webkit","Moz","ms"],To={};function E_(n,e){const t=To[e];if(t)return t;let i=Sn(e);if(i!=="filter"&&i in n)return To[e]=i;i=Ja(i);for(let r=0;r<Tf.length;r++){const s=Tf[r]+i;if(s in n)return To[e]=s}return e}const Ef="http://www.w3.org/1999/xlink";function bf(n,e,t,i,r,s=Pp(e)){i&&e.startsWith("xlink:")?t==null?n.removeAttributeNS(Ef,e.slice(6,e.length)):n.setAttributeNS(Ef,e,t):t==null||s&&!ih(t)?n.removeAttribute(e):n.setAttribute(e,s?"":Zr(t)?String(t):t)}function wf(n,e,t,i,r){if(e==="innerHTML"||e==="textContent"){t!=null&&(n[e]=e==="innerHTML"?ed(t):t);return}const s=n.tagName;if(e==="value"&&s!=="PROGRESS"&&!s.includes("-")){const a=s==="OPTION"?n.getAttribute("value")||"":n.value,l=t==null?n.type==="checkbox"?"on":"":String(t);(a!==l||!("_value"in n))&&(n.value=l),t==null&&n.removeAttribute(e),n._value=t;return}let o=!1;if(t===""||t==null){const a=typeof n[e];a==="boolean"?t=ih(t):t==null&&a==="string"?(t="",o=!0):a==="number"&&(t=0,o=!0)}try{n[e]=t}catch{}o&&n.removeAttribute(r||e)}function b_(n,e,t,i){n.addEventListener(e,t,i)}function w_(n,e,t,i){n.removeEventListener(e,t,i)}const Af=Symbol("_vei");function A_(n,e,t,i,r=null){const s=n[Af]||(n[Af]={}),o=s[e];if(i&&o)o.value=i;else{const[a,l]=R_(e);if(i){const f=s[e]=D_(i,r);b_(n,a,f,l)}else o&&(w_(n,a,o,l),s[e]=void 0)}}const Rf=/(?:Once|Passive|Capture)$/;function R_(n){let e;if(Rf.test(n)){e={};let i;for(;i=n.match(Rf);)n=n.slice(0,n.length-i[0].length),e[i[0].toLowerCase()]=!0}return[n[2]===":"?n.slice(3):pr(n.slice(2)),e]}let Eo=0;const C_=Promise.resolve(),P_=()=>Eo||(C_.then(()=>Eo=0),Eo=Date.now());function D_(n,e){const t=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=t.attached)return;Vn(L_(i,t.value),e,5,[i])};return t.value=n,t.attached=P_(),t}function L_(n,e){if(ot(e)){const t=n.stopImmediatePropagation;return n.stopImmediatePropagation=()=>{t.call(n),n._stopped=!0},e.map(i=>r=>!r._stopped&&i&&i(r))}else return e}const Cf=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&n.charCodeAt(2)>96&&n.charCodeAt(2)<123,I_=(n,e,t,i,r,s)=>{const o=r==="svg";e==="class"?x_(n,i,o):e==="style"?T_(n,t,i):$a(e)?gc(e)||A_(n,e,t,i,s):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):U_(n,e,i,o))?(wf(n,e,i),!n.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&bf(n,e,i,o,s,e!=="value")):n._isVueCE&&(/[A-Z]/.test(e)||!Gt(i))?wf(n,Sn(e),i,s,e):(e==="true-value"?n._trueValue=i:e==="false-value"&&(n._falseValue=i),bf(n,e,i,o))};function U_(n,e,t,i){if(i)return!!(e==="innerHTML"||e==="textContent"||e in n&&Cf(e)&&at(t));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&n.tagName==="INPUT"||e==="type"&&n.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const r=n.tagName;if(r==="IMG"||r==="VIDEO"||r==="CANVAS"||r==="SOURCE")return!1}return Cf(e)&&Gt(t)?!1:e in n}const N_=Ht({patchProp:I_},g_);let Pf;function O_(){return Pf||(Pf=zm(N_))}const F_=(...n)=>{const e=O_().createApp(...n),{mount:t}=e;return e.mount=i=>{const r=z_(i);if(!r)return;const s=e._component;!at(s)&&!s.render&&!s.template&&(s.template=r.innerHTML),r.nodeType===1&&(r.textContent="");const o=t(r,!1,B_(r));return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},e};function B_(n){if(n instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&n instanceof MathMLElement)return"mathml"}function z_(n){return Gt(n)?document.querySelector(n):n}const k_={class:"flex flex-row justify-between w-full px-2 py-10"},H_={id:"brand",class:"text-secondary font-bold"},G_={class:"nav flex flex-row gap-4"},V_=["href"],W_={__name:"Nav",setup(n){const e="/YangPortfolioPublic/docs/";return(t,i)=>{const r=Ic("router-link");return ks(),Hs("nav",k_,[Un("div",H_,[kt(r,{to:"/"},{default:Ms(()=>i[0]||(i[0]=[ws("Wei Yang")])),_:1})]),Un("div",G_,[kt(r,{to:"/"},{default:Ms(()=>i[1]||(i[1]=[ws("Home")])),_:1}),kt(r,{to:"/about"},{default:Ms(()=>i[2]||(i[2]=[ws("About")])),_:1}),Un("a",{href:or(e)},"Portfolios",8,V_)])])}}};/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Bc="169",X_=0,Df=1,q_=2,td=1,Y_=2,ii=3,Ni=0,cn=1,oi=2,Ii=0,lr=1,Lf=2,If=3,Uf=4,j_=5,tr=100,$_=101,K_=102,Z_=103,J_=104,Q_=200,eg=201,tg=202,ng=203,yl=204,Sl=205,ig=206,rg=207,sg=208,ag=209,og=210,lg=211,cg=212,fg=213,ug=214,Ml=0,Tl=1,El=2,Vr=3,bl=4,wl=5,Al=6,Rl=7,nd=0,hg=1,dg=2,Ui=0,pg=1,mg=2,_g=3,gg=4,vg=5,xg=6,yg=7,id=300,Wr=301,Xr=302,Cl=303,Pl=304,so=306,Dl=1e3,ir=1001,Ll=1002,xn=1003,Sg=1004,ea=1005,An=1006,bo=1007,rr=1008,hi=1009,rd=1010,sd=1011,Ns=1012,zc=1013,hr=1014,li=1015,Vs=1016,kc=1017,Hc=1018,qr=1020,ad=35902,od=1021,ld=1022,Dn=1023,cd=1024,fd=1025,Br=1026,Yr=1027,ud=1028,Gc=1029,hd=1030,Vc=1031,Wc=1033,Pa=33776,Da=33777,La=33778,Ia=33779,Il=35840,Ul=35841,Nl=35842,Ol=35843,Fl=36196,Bl=37492,zl=37496,kl=37808,Hl=37809,Gl=37810,Vl=37811,Wl=37812,Xl=37813,ql=37814,Yl=37815,jl=37816,$l=37817,Kl=37818,Zl=37819,Jl=37820,Ql=37821,Ua=36492,ec=36494,tc=36495,dd=36283,nc=36284,ic=36285,rc=36286,Mg=3200,Tg=3201,Eg=0,bg=1,Pi="",Bn="srgb",zi="srgb-linear",Xc="display-p3",ao="display-p3-linear",Wa="linear",wt="srgb",Xa="rec709",qa="p3",gr=7680,Nf=519,wg=512,Ag=513,Rg=514,pd=515,Cg=516,Pg=517,Dg=518,Lg=519,Of=35044,Ff="300 es",ci=2e3,Ya=2001;class Jr{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const Yt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],wo=Math.PI/180,sc=180/Math.PI;function Ws(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Yt[n&255]+Yt[n>>8&255]+Yt[n>>16&255]+Yt[n>>24&255]+"-"+Yt[e&255]+Yt[e>>8&255]+"-"+Yt[e>>16&15|64]+Yt[e>>24&255]+"-"+Yt[t&63|128]+Yt[t>>8&255]+"-"+Yt[t>>16&255]+Yt[t>>24&255]+Yt[i&255]+Yt[i>>8&255]+Yt[i>>16&255]+Yt[i>>24&255]).toLowerCase()}function ln(n,e,t){return Math.max(e,Math.min(t,n))}function Ig(n,e){return(n%e+e)%e}function Ao(n,e,t){return(1-t)*n+t*e}function os(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function on(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}class vt{constructor(e=0,t=0){vt.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(ln(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ct{constructor(e,t,i,r,s,o,a,l,f){ct.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,f)}set(e,t,i,r,s,o,a,l,f){const h=this.elements;return h[0]=e,h[1]=r,h[2]=a,h[3]=t,h[4]=s,h[5]=l,h[6]=i,h[7]=o,h[8]=f,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[3],l=i[6],f=i[1],h=i[4],p=i[7],c=i[2],m=i[5],d=i[8],y=r[0],g=r[3],u=r[6],b=r[1],T=r[4],w=r[7],G=r[2],O=r[5],k=r[8];return s[0]=o*y+a*b+l*G,s[3]=o*g+a*T+l*O,s[6]=o*u+a*w+l*k,s[1]=f*y+h*b+p*G,s[4]=f*g+h*T+p*O,s[7]=f*u+h*w+p*k,s[2]=c*y+m*b+d*G,s[5]=c*g+m*T+d*O,s[8]=c*u+m*w+d*k,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],f=e[7],h=e[8];return t*o*h-t*a*f-i*s*h+i*a*l+r*s*f-r*o*l}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],f=e[7],h=e[8],p=h*o-a*f,c=a*l-h*s,m=f*s-o*l,d=t*p+i*c+r*m;if(d===0)return this.set(0,0,0,0,0,0,0,0,0);const y=1/d;return e[0]=p*y,e[1]=(r*f-h*i)*y,e[2]=(a*i-r*o)*y,e[3]=c*y,e[4]=(h*t-r*l)*y,e[5]=(r*s-a*t)*y,e[6]=m*y,e[7]=(i*l-f*t)*y,e[8]=(o*t-i*s)*y,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,o,a){const l=Math.cos(s),f=Math.sin(s);return this.set(i*l,i*f,-i*(l*o+f*a)+o+e,-r*f,r*l,-r*(-f*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Ro.makeScale(e,t)),this}rotate(e){return this.premultiply(Ro.makeRotation(-e)),this}translate(e,t){return this.premultiply(Ro.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Ro=new ct;function md(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Os(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Ug(){const n=Os("canvas");return n.style.display="block",n}const Bf={};function Na(n){n in Bf||(Bf[n]=!0)}function Ng(n,e,t){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:i()}}setTimeout(s,t)})}function Og(n){const e=n.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function Fg(n){const e=n.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const zf=new ct().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),kf=new ct().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),ls={[zi]:{transfer:Wa,primaries:Xa,luminanceCoefficients:[.2126,.7152,.0722],toReference:n=>n,fromReference:n=>n},[Bn]:{transfer:wt,primaries:Xa,luminanceCoefficients:[.2126,.7152,.0722],toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[ao]:{transfer:Wa,primaries:qa,luminanceCoefficients:[.2289,.6917,.0793],toReference:n=>n.applyMatrix3(kf),fromReference:n=>n.applyMatrix3(zf)},[Xc]:{transfer:wt,primaries:qa,luminanceCoefficients:[.2289,.6917,.0793],toReference:n=>n.convertSRGBToLinear().applyMatrix3(kf),fromReference:n=>n.applyMatrix3(zf).convertLinearToSRGB()}},Bg=new Set([zi,ao]),gt={enabled:!0,_workingColorSpace:zi,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!Bg.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,e,t){if(this.enabled===!1||e===t||!e||!t)return n;const i=ls[e].toReference,r=ls[t].fromReference;return r(i(n))},fromWorkingColorSpace:function(n,e){return this.convert(n,this._workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this._workingColorSpace)},getPrimaries:function(n){return ls[n].primaries},getTransfer:function(n){return n===Pi?Wa:ls[n].transfer},getLuminanceCoefficients:function(n,e=this._workingColorSpace){return n.fromArray(ls[e].luminanceCoefficients)}};function zr(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Co(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let vr;class zg{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{vr===void 0&&(vr=Os("canvas")),vr.width=e.width,vr.height=e.height;const i=vr.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=vr}return t.width>2048||t.height>2048?t.toDataURL("image/jpeg",.6):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Os("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=zr(s[o]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(zr(t[i]/255)*255):t[i]=zr(t[i]);return{data:t,width:e.width,height:e.height}}else return e}}let kg=0;class _d{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:kg++}),this.uuid=Ws(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Po(r[o].image)):s.push(Po(r[o]))}else s=Po(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function Po(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?zg.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:{}}let Hg=0;class Wt extends Jr{constructor(e=Wt.DEFAULT_IMAGE,t=Wt.DEFAULT_MAPPING,i=ir,r=ir,s=An,o=rr,a=Dn,l=hi,f=Wt.DEFAULT_ANISOTROPY,h=Pi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Hg++}),this.uuid=Ws(),this.name="",this.source=new _d(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=f,this.format=a,this.internalFormat=null,this.type=l,this.offset=new vt(0,0),this.repeat=new vt(1,1),this.center=new vt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ct,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==id)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Dl:e.x=e.x-Math.floor(e.x);break;case ir:e.x=e.x<0?0:1;break;case Ll:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Dl:e.y=e.y-Math.floor(e.y);break;case ir:e.y=e.y<0?0:1;break;case Ll:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Wt.DEFAULT_IMAGE=null;Wt.DEFAULT_MAPPING=id;Wt.DEFAULT_ANISOTROPY=1;class Dt{constructor(e=0,t=0,i=0,r=1){Dt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const l=e.elements,f=l[0],h=l[4],p=l[8],c=l[1],m=l[5],d=l[9],y=l[2],g=l[6],u=l[10];if(Math.abs(h-c)<.01&&Math.abs(p-y)<.01&&Math.abs(d-g)<.01){if(Math.abs(h+c)<.1&&Math.abs(p+y)<.1&&Math.abs(d+g)<.1&&Math.abs(f+m+u-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const T=(f+1)/2,w=(m+1)/2,G=(u+1)/2,O=(h+c)/4,k=(p+y)/4,q=(d+g)/4;return T>w&&T>G?T<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(T),r=O/i,s=k/i):w>G?w<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(w),i=O/r,s=q/r):G<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(G),i=k/s,r=q/s),this.set(i,r,s,t),this}let b=Math.sqrt((g-d)*(g-d)+(p-y)*(p-y)+(c-h)*(c-h));return Math.abs(b)<.001&&(b=1),this.x=(g-d)/b,this.y=(p-y)/b,this.z=(c-h)/b,this.w=Math.acos((f+m+u-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Gg extends Jr{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Dt(0,0,e,t),this.scissorTest=!1,this.viewport=new Dt(0,0,e,t);const r={width:e,height:t,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:An,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const s=new Wt(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new _d(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class dr extends Gg{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class gd extends Wt{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=xn,this.minFilter=xn,this.wrapR=ir,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Vg extends Wt{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=xn,this.minFilter=xn,this.wrapR=ir,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Xs{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,o,a){let l=i[r+0],f=i[r+1],h=i[r+2],p=i[r+3];const c=s[o+0],m=s[o+1],d=s[o+2],y=s[o+3];if(a===0){e[t+0]=l,e[t+1]=f,e[t+2]=h,e[t+3]=p;return}if(a===1){e[t+0]=c,e[t+1]=m,e[t+2]=d,e[t+3]=y;return}if(p!==y||l!==c||f!==m||h!==d){let g=1-a;const u=l*c+f*m+h*d+p*y,b=u>=0?1:-1,T=1-u*u;if(T>Number.EPSILON){const G=Math.sqrt(T),O=Math.atan2(G,u*b);g=Math.sin(g*O)/G,a=Math.sin(a*O)/G}const w=a*b;if(l=l*g+c*w,f=f*g+m*w,h=h*g+d*w,p=p*g+y*w,g===1-a){const G=1/Math.sqrt(l*l+f*f+h*h+p*p);l*=G,f*=G,h*=G,p*=G}}e[t]=l,e[t+1]=f,e[t+2]=h,e[t+3]=p}static multiplyQuaternionsFlat(e,t,i,r,s,o){const a=i[r],l=i[r+1],f=i[r+2],h=i[r+3],p=s[o],c=s[o+1],m=s[o+2],d=s[o+3];return e[t]=a*d+h*p+l*m-f*c,e[t+1]=l*d+h*c+f*p-a*m,e[t+2]=f*d+h*m+a*c-l*p,e[t+3]=h*d-a*p-l*c-f*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,f=a(i/2),h=a(r/2),p=a(s/2),c=l(i/2),m=l(r/2),d=l(s/2);switch(o){case"XYZ":this._x=c*h*p+f*m*d,this._y=f*m*p-c*h*d,this._z=f*h*d+c*m*p,this._w=f*h*p-c*m*d;break;case"YXZ":this._x=c*h*p+f*m*d,this._y=f*m*p-c*h*d,this._z=f*h*d-c*m*p,this._w=f*h*p+c*m*d;break;case"ZXY":this._x=c*h*p-f*m*d,this._y=f*m*p+c*h*d,this._z=f*h*d+c*m*p,this._w=f*h*p-c*m*d;break;case"ZYX":this._x=c*h*p-f*m*d,this._y=f*m*p+c*h*d,this._z=f*h*d-c*m*p,this._w=f*h*p+c*m*d;break;case"YZX":this._x=c*h*p+f*m*d,this._y=f*m*p+c*h*d,this._z=f*h*d-c*m*p,this._w=f*h*p-c*m*d;break;case"XZY":this._x=c*h*p-f*m*d,this._y=f*m*p-c*h*d,this._z=f*h*d+c*m*p,this._w=f*h*p+c*m*d;break;default:}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],o=t[1],a=t[5],l=t[9],f=t[2],h=t[6],p=t[10],c=i+a+p;if(c>0){const m=.5/Math.sqrt(c+1);this._w=.25/m,this._x=(h-l)*m,this._y=(s-f)*m,this._z=(o-r)*m}else if(i>a&&i>p){const m=2*Math.sqrt(1+i-a-p);this._w=(h-l)/m,this._x=.25*m,this._y=(r+o)/m,this._z=(s+f)/m}else if(a>p){const m=2*Math.sqrt(1+a-i-p);this._w=(s-f)/m,this._x=(r+o)/m,this._y=.25*m,this._z=(l+h)/m}else{const m=2*Math.sqrt(1+p-i-a);this._w=(o-r)/m,this._x=(s+f)/m,this._y=(l+h)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ln(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,o=e._w,a=t._x,l=t._y,f=t._z,h=t._w;return this._x=i*h+o*a+r*f-s*l,this._y=r*h+o*l+s*a-i*f,this._z=s*h+o*f+i*l-r*a,this._w=o*h-i*a-r*l-s*f,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const m=1-t;return this._w=m*o+t*this._w,this._x=m*i+t*this._x,this._y=m*r+t*this._y,this._z=m*s+t*this._z,this.normalize(),this}const f=Math.sqrt(l),h=Math.atan2(f,a),p=Math.sin((1-t)*h)/f,c=Math.sin(t*h)/f;return this._w=o*p+this._w*c,this._x=i*p+this._x*c,this._y=r*p+this._y*c,this._z=s*p+this._z*c,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class me{constructor(e=0,t=0,i=0){me.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Hf.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Hf.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,f=2*(o*r-a*i),h=2*(a*t-s*r),p=2*(s*i-o*t);return this.x=t+l*f+o*p-a*h,this.y=i+l*h+a*f-s*p,this.z=r+l*p+s*h-o*f,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Do.copy(this).projectOnVector(e),this.sub(Do)}reflect(e){return this.sub(Do.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(ln(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Do=new me,Hf=new Xs;class qs{constructor(e=new me(1/0,1/0,1/0),t=new me(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Tn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Tn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=Tn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Tn):Tn.fromBufferAttribute(s,o),Tn.applyMatrix4(e.matrixWorld),this.expandByPoint(Tn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ta.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),ta.copy(i.boundingBox)),ta.applyMatrix4(e.matrixWorld),this.union(ta)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Tn),Tn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(cs),na.subVectors(this.max,cs),xr.subVectors(e.a,cs),yr.subVectors(e.b,cs),Sr.subVectors(e.c,cs),vi.subVectors(yr,xr),xi.subVectors(Sr,yr),Xi.subVectors(xr,Sr);let t=[0,-vi.z,vi.y,0,-xi.z,xi.y,0,-Xi.z,Xi.y,vi.z,0,-vi.x,xi.z,0,-xi.x,Xi.z,0,-Xi.x,-vi.y,vi.x,0,-xi.y,xi.x,0,-Xi.y,Xi.x,0];return!Lo(t,xr,yr,Sr,na)||(t=[1,0,0,0,1,0,0,0,1],!Lo(t,xr,yr,Sr,na))?!1:(ia.crossVectors(vi,xi),t=[ia.x,ia.y,ia.z],Lo(t,xr,yr,Sr,na))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Tn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Tn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Zn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Zn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Zn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Zn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Zn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Zn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Zn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Zn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Zn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Zn=[new me,new me,new me,new me,new me,new me,new me,new me],Tn=new me,ta=new qs,xr=new me,yr=new me,Sr=new me,vi=new me,xi=new me,Xi=new me,cs=new me,na=new me,ia=new me,qi=new me;function Lo(n,e,t,i,r){for(let s=0,o=n.length-3;s<=o;s+=3){qi.fromArray(n,s);const a=r.x*Math.abs(qi.x)+r.y*Math.abs(qi.y)+r.z*Math.abs(qi.z),l=e.dot(qi),f=t.dot(qi),h=i.dot(qi);if(Math.max(-Math.max(l,f,h),Math.min(l,f,h))>a)return!1}return!0}const Wg=new qs,fs=new me,Io=new me;class qc{constructor(e=new me,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):Wg.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;fs.subVectors(e,this.center);const t=fs.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(fs,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Io.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(fs.copy(e.center).add(Io)),this.expandByPoint(fs.copy(e.center).sub(Io))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Jn=new me,Uo=new me,ra=new me,yi=new me,No=new me,sa=new me,Oo=new me;class vd{constructor(e=new me,t=new me(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Jn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Jn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Jn.copy(this.origin).addScaledVector(this.direction,t),Jn.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){Uo.copy(e).add(t).multiplyScalar(.5),ra.copy(t).sub(e).normalize(),yi.copy(this.origin).sub(Uo);const s=e.distanceTo(t)*.5,o=-this.direction.dot(ra),a=yi.dot(this.direction),l=-yi.dot(ra),f=yi.lengthSq(),h=Math.abs(1-o*o);let p,c,m,d;if(h>0)if(p=o*l-a,c=o*a-l,d=s*h,p>=0)if(c>=-d)if(c<=d){const y=1/h;p*=y,c*=y,m=p*(p+o*c+2*a)+c*(o*p+c+2*l)+f}else c=s,p=Math.max(0,-(o*c+a)),m=-p*p+c*(c+2*l)+f;else c=-s,p=Math.max(0,-(o*c+a)),m=-p*p+c*(c+2*l)+f;else c<=-d?(p=Math.max(0,-(-o*s+a)),c=p>0?-s:Math.min(Math.max(-s,-l),s),m=-p*p+c*(c+2*l)+f):c<=d?(p=0,c=Math.min(Math.max(-s,-l),s),m=c*(c+2*l)+f):(p=Math.max(0,-(o*s+a)),c=p>0?s:Math.min(Math.max(-s,-l),s),m=-p*p+c*(c+2*l)+f);else c=o>0?-s:s,p=Math.max(0,-(o*c+a)),m=-p*p+c*(c+2*l)+f;return i&&i.copy(this.origin).addScaledVector(this.direction,p),r&&r.copy(Uo).addScaledVector(ra,c),m}intersectSphere(e,t){Jn.subVectors(e.center,this.origin);const i=Jn.dot(this.direction),r=Jn.dot(Jn)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,o,a,l;const f=1/this.direction.x,h=1/this.direction.y,p=1/this.direction.z,c=this.origin;return f>=0?(i=(e.min.x-c.x)*f,r=(e.max.x-c.x)*f):(i=(e.max.x-c.x)*f,r=(e.min.x-c.x)*f),h>=0?(s=(e.min.y-c.y)*h,o=(e.max.y-c.y)*h):(s=(e.max.y-c.y)*h,o=(e.min.y-c.y)*h),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),p>=0?(a=(e.min.z-c.z)*p,l=(e.max.z-c.z)*p):(a=(e.max.z-c.z)*p,l=(e.min.z-c.z)*p),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,Jn)!==null}intersectTriangle(e,t,i,r,s){No.subVectors(t,e),sa.subVectors(i,e),Oo.crossVectors(No,sa);let o=this.direction.dot(Oo),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;yi.subVectors(this.origin,e);const l=a*this.direction.dot(sa.crossVectors(yi,sa));if(l<0)return null;const f=a*this.direction.dot(No.cross(yi));if(f<0||l+f>o)return null;const h=-a*yi.dot(Oo);return h<0?null:this.at(h/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Lt{constructor(e,t,i,r,s,o,a,l,f,h,p,c,m,d,y,g){Lt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,f,h,p,c,m,d,y,g)}set(e,t,i,r,s,o,a,l,f,h,p,c,m,d,y,g){const u=this.elements;return u[0]=e,u[4]=t,u[8]=i,u[12]=r,u[1]=s,u[5]=o,u[9]=a,u[13]=l,u[2]=f,u[6]=h,u[10]=p,u[14]=c,u[3]=m,u[7]=d,u[11]=y,u[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Lt().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/Mr.setFromMatrixColumn(e,0).length(),s=1/Mr.setFromMatrixColumn(e,1).length(),o=1/Mr.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),f=Math.sin(r),h=Math.cos(s),p=Math.sin(s);if(e.order==="XYZ"){const c=o*h,m=o*p,d=a*h,y=a*p;t[0]=l*h,t[4]=-l*p,t[8]=f,t[1]=m+d*f,t[5]=c-y*f,t[9]=-a*l,t[2]=y-c*f,t[6]=d+m*f,t[10]=o*l}else if(e.order==="YXZ"){const c=l*h,m=l*p,d=f*h,y=f*p;t[0]=c+y*a,t[4]=d*a-m,t[8]=o*f,t[1]=o*p,t[5]=o*h,t[9]=-a,t[2]=m*a-d,t[6]=y+c*a,t[10]=o*l}else if(e.order==="ZXY"){const c=l*h,m=l*p,d=f*h,y=f*p;t[0]=c-y*a,t[4]=-o*p,t[8]=d+m*a,t[1]=m+d*a,t[5]=o*h,t[9]=y-c*a,t[2]=-o*f,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const c=o*h,m=o*p,d=a*h,y=a*p;t[0]=l*h,t[4]=d*f-m,t[8]=c*f+y,t[1]=l*p,t[5]=y*f+c,t[9]=m*f-d,t[2]=-f,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const c=o*l,m=o*f,d=a*l,y=a*f;t[0]=l*h,t[4]=y-c*p,t[8]=d*p+m,t[1]=p,t[5]=o*h,t[9]=-a*h,t[2]=-f*h,t[6]=m*p+d,t[10]=c-y*p}else if(e.order==="XZY"){const c=o*l,m=o*f,d=a*l,y=a*f;t[0]=l*h,t[4]=-p,t[8]=f*h,t[1]=c*p+y,t[5]=o*h,t[9]=m*p-d,t[2]=d*p-m,t[6]=a*h,t[10]=y*p+c}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Xg,e,qg)}lookAt(e,t,i){const r=this.elements;return hn.subVectors(e,t),hn.lengthSq()===0&&(hn.z=1),hn.normalize(),Si.crossVectors(i,hn),Si.lengthSq()===0&&(Math.abs(i.z)===1?hn.x+=1e-4:hn.z+=1e-4,hn.normalize(),Si.crossVectors(i,hn)),Si.normalize(),aa.crossVectors(hn,Si),r[0]=Si.x,r[4]=aa.x,r[8]=hn.x,r[1]=Si.y,r[5]=aa.y,r[9]=hn.y,r[2]=Si.z,r[6]=aa.z,r[10]=hn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[4],l=i[8],f=i[12],h=i[1],p=i[5],c=i[9],m=i[13],d=i[2],y=i[6],g=i[10],u=i[14],b=i[3],T=i[7],w=i[11],G=i[15],O=r[0],k=r[4],q=r[8],le=r[12],A=r[1],D=r[5],re=r[9],ee=r[13],pe=r[2],oe=r[6],ae=r[10],_e=r[14],te=r[3],Ne=r[7],ze=r[11],He=r[15];return s[0]=o*O+a*A+l*pe+f*te,s[4]=o*k+a*D+l*oe+f*Ne,s[8]=o*q+a*re+l*ae+f*ze,s[12]=o*le+a*ee+l*_e+f*He,s[1]=h*O+p*A+c*pe+m*te,s[5]=h*k+p*D+c*oe+m*Ne,s[9]=h*q+p*re+c*ae+m*ze,s[13]=h*le+p*ee+c*_e+m*He,s[2]=d*O+y*A+g*pe+u*te,s[6]=d*k+y*D+g*oe+u*Ne,s[10]=d*q+y*re+g*ae+u*ze,s[14]=d*le+y*ee+g*_e+u*He,s[3]=b*O+T*A+w*pe+G*te,s[7]=b*k+T*D+w*oe+G*Ne,s[11]=b*q+T*re+w*ae+G*ze,s[15]=b*le+T*ee+w*_e+G*He,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],f=e[13],h=e[2],p=e[6],c=e[10],m=e[14],d=e[3],y=e[7],g=e[11],u=e[15];return d*(+s*l*p-r*f*p-s*a*c+i*f*c+r*a*m-i*l*m)+y*(+t*l*m-t*f*c+s*o*c-r*o*m+r*f*h-s*l*h)+g*(+t*f*p-t*a*m-s*o*p+i*o*m+s*a*h-i*f*h)+u*(-r*a*h-t*l*p+t*a*c+r*o*p-i*o*c+i*l*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],f=e[7],h=e[8],p=e[9],c=e[10],m=e[11],d=e[12],y=e[13],g=e[14],u=e[15],b=p*g*f-y*c*f+y*l*m-a*g*m-p*l*u+a*c*u,T=d*c*f-h*g*f-d*l*m+o*g*m+h*l*u-o*c*u,w=h*y*f-d*p*f+d*a*m-o*y*m-h*a*u+o*p*u,G=d*p*l-h*y*l-d*a*c+o*y*c+h*a*g-o*p*g,O=t*b+i*T+r*w+s*G;if(O===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const k=1/O;return e[0]=b*k,e[1]=(y*c*s-p*g*s-y*r*m+i*g*m+p*r*u-i*c*u)*k,e[2]=(a*g*s-y*l*s+y*r*f-i*g*f-a*r*u+i*l*u)*k,e[3]=(p*l*s-a*c*s-p*r*f+i*c*f+a*r*m-i*l*m)*k,e[4]=T*k,e[5]=(h*g*s-d*c*s+d*r*m-t*g*m-h*r*u+t*c*u)*k,e[6]=(d*l*s-o*g*s-d*r*f+t*g*f+o*r*u-t*l*u)*k,e[7]=(o*c*s-h*l*s+h*r*f-t*c*f-o*r*m+t*l*m)*k,e[8]=w*k,e[9]=(d*p*s-h*y*s-d*i*m+t*y*m+h*i*u-t*p*u)*k,e[10]=(o*y*s-d*a*s+d*i*f-t*y*f-o*i*u+t*a*u)*k,e[11]=(h*a*s-o*p*s-h*i*f+t*p*f+o*i*m-t*a*m)*k,e[12]=G*k,e[13]=(h*y*r-d*p*r+d*i*c-t*y*c-h*i*g+t*p*g)*k,e[14]=(d*a*r-o*y*r-d*i*l+t*y*l+o*i*g-t*a*g)*k,e[15]=(o*p*r-h*a*r+h*i*l-t*p*l-o*i*c+t*a*c)*k,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,o=e.x,a=e.y,l=e.z,f=s*o,h=s*a;return this.set(f*o+i,f*a-r*l,f*l+r*a,0,f*a+r*l,h*a+i,h*l-r*o,0,f*l-r*a,h*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,f=s+s,h=o+o,p=a+a,c=s*f,m=s*h,d=s*p,y=o*h,g=o*p,u=a*p,b=l*f,T=l*h,w=l*p,G=i.x,O=i.y,k=i.z;return r[0]=(1-(y+u))*G,r[1]=(m+w)*G,r[2]=(d-T)*G,r[3]=0,r[4]=(m-w)*O,r[5]=(1-(c+u))*O,r[6]=(g+b)*O,r[7]=0,r[8]=(d+T)*k,r[9]=(g-b)*k,r[10]=(1-(c+y))*k,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let s=Mr.set(r[0],r[1],r[2]).length();const o=Mr.set(r[4],r[5],r[6]).length(),a=Mr.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],En.copy(this);const f=1/s,h=1/o,p=1/a;return En.elements[0]*=f,En.elements[1]*=f,En.elements[2]*=f,En.elements[4]*=h,En.elements[5]*=h,En.elements[6]*=h,En.elements[8]*=p,En.elements[9]*=p,En.elements[10]*=p,t.setFromRotationMatrix(En),i.x=s,i.y=o,i.z=a,this}makePerspective(e,t,i,r,s,o,a=ci){const l=this.elements,f=2*s/(t-e),h=2*s/(i-r),p=(t+e)/(t-e),c=(i+r)/(i-r);let m,d;if(a===ci)m=-(o+s)/(o-s),d=-2*o*s/(o-s);else if(a===Ya)m=-o/(o-s),d=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=f,l[4]=0,l[8]=p,l[12]=0,l[1]=0,l[5]=h,l[9]=c,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=d,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,r,s,o,a=ci){const l=this.elements,f=1/(t-e),h=1/(i-r),p=1/(o-s),c=(t+e)*f,m=(i+r)*h;let d,y;if(a===ci)d=(o+s)*p,y=-2*p;else if(a===Ya)d=s*p,y=-1*p;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*f,l[4]=0,l[8]=0,l[12]=-c,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=y,l[14]=-d,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const Mr=new me,En=new Lt,Xg=new me(0,0,0),qg=new me(1,1,1),Si=new me,aa=new me,hn=new me,Gf=new Lt,Vf=new Xs;class di{constructor(e=0,t=0,i=0,r=di.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],f=r[5],h=r[9],p=r[2],c=r[6],m=r[10];switch(t){case"XYZ":this._y=Math.asin(ln(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,m),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(c,f),this._z=0);break;case"YXZ":this._x=Math.asin(-ln(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(l,f)):(this._y=Math.atan2(-p,s),this._z=0);break;case"ZXY":this._x=Math.asin(ln(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(-p,m),this._z=Math.atan2(-o,f)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-ln(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(c,m),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,f));break;case"YZX":this._z=Math.asin(ln(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,f),this._y=Math.atan2(-p,s)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-ln(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(c,f),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-h,m),this._y=0);break;default:}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Gf.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Gf,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Vf.setFromEuler(this),this.setFromQuaternion(Vf,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}di.DEFAULT_ORDER="XYZ";class Yc{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Yg=0;const Wf=new me,Tr=new Xs,Qn=new Lt,oa=new me,us=new me,jg=new me,$g=new Xs,Xf=new me(1,0,0),qf=new me(0,1,0),Yf=new me(0,0,1),jf={type:"added"},Kg={type:"removed"},Er={type:"childadded",child:null},Fo={type:"childremoved",child:null};class fn extends Jr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Yg++}),this.uuid=Ws(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=fn.DEFAULT_UP.clone();const e=new me,t=new di,i=new Xs,r=new me(1,1,1);function s(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Lt},normalMatrix:{value:new ct}}),this.matrix=new Lt,this.matrixWorld=new Lt,this.matrixAutoUpdate=fn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=fn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Yc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Tr.setFromAxisAngle(e,t),this.quaternion.multiply(Tr),this}rotateOnWorldAxis(e,t){return Tr.setFromAxisAngle(e,t),this.quaternion.premultiply(Tr),this}rotateX(e){return this.rotateOnAxis(Xf,e)}rotateY(e){return this.rotateOnAxis(qf,e)}rotateZ(e){return this.rotateOnAxis(Yf,e)}translateOnAxis(e,t){return Wf.copy(e).applyQuaternion(this.quaternion),this.position.add(Wf.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Xf,e)}translateY(e){return this.translateOnAxis(qf,e)}translateZ(e){return this.translateOnAxis(Yf,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Qn.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?oa.copy(e):oa.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),us.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Qn.lookAt(us,oa,this.up):Qn.lookAt(oa,us,this.up),this.quaternion.setFromRotationMatrix(Qn),r&&(Qn.extractRotation(r.matrixWorld),Tr.setFromRotationMatrix(Qn),this.quaternion.premultiply(Tr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?this:(e&&e.isObject3D&&(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(jf),Er.child=e,this.dispatchEvent(Er),Er.child=null),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Kg),Fo.child=e,this.dispatchEvent(Fo),Fo.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Qn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Qn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Qn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(jf),Er.child=e,this.dispatchEvent(Er),Er.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(us,e,jg),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(us,$g,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let f=0,h=l.length;f<h;f++){const p=l[f];s(e.shapes,p)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,f=this.material.length;l<f;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),f=o(e.textures),h=o(e.images),p=o(e.shapes),c=o(e.skeletons),m=o(e.animations),d=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),f.length>0&&(i.textures=f),h.length>0&&(i.images=h),p.length>0&&(i.shapes=p),c.length>0&&(i.skeletons=c),m.length>0&&(i.animations=m),d.length>0&&(i.nodes=d)}return i.object=r,i;function o(a){const l=[];for(const f in a){const h=a[f];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}fn.DEFAULT_UP=new me(0,1,0);fn.DEFAULT_MATRIX_AUTO_UPDATE=!0;fn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const bn=new me,ei=new me,Bo=new me,ti=new me,br=new me,wr=new me,$f=new me,zo=new me,ko=new me,Ho=new me,Go=new Dt,Vo=new Dt,Wo=new Dt;class Rn{constructor(e=new me,t=new me,i=new me){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),bn.subVectors(e,t),r.cross(bn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){bn.subVectors(r,t),ei.subVectors(i,t),Bo.subVectors(e,t);const o=bn.dot(bn),a=bn.dot(ei),l=bn.dot(Bo),f=ei.dot(ei),h=ei.dot(Bo),p=o*f-a*a;if(p===0)return s.set(0,0,0),null;const c=1/p,m=(f*l-a*h)*c,d=(o*h-a*l)*c;return s.set(1-m-d,d,m)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,ti)===null?!1:ti.x>=0&&ti.y>=0&&ti.x+ti.y<=1}static getInterpolation(e,t,i,r,s,o,a,l){return this.getBarycoord(e,t,i,r,ti)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,ti.x),l.addScaledVector(o,ti.y),l.addScaledVector(a,ti.z),l)}static getInterpolatedAttribute(e,t,i,r,s,o){return Go.setScalar(0),Vo.setScalar(0),Wo.setScalar(0),Go.fromBufferAttribute(e,t),Vo.fromBufferAttribute(e,i),Wo.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(Go,s.x),o.addScaledVector(Vo,s.y),o.addScaledVector(Wo,s.z),o}static isFrontFacing(e,t,i,r){return bn.subVectors(i,t),ei.subVectors(e,t),bn.cross(ei).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return bn.subVectors(this.c,this.b),ei.subVectors(this.a,this.b),bn.cross(ei).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Rn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Rn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,s){return Rn.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return Rn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Rn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let o,a;br.subVectors(r,i),wr.subVectors(s,i),zo.subVectors(e,i);const l=br.dot(zo),f=wr.dot(zo);if(l<=0&&f<=0)return t.copy(i);ko.subVectors(e,r);const h=br.dot(ko),p=wr.dot(ko);if(h>=0&&p<=h)return t.copy(r);const c=l*p-h*f;if(c<=0&&l>=0&&h<=0)return o=l/(l-h),t.copy(i).addScaledVector(br,o);Ho.subVectors(e,s);const m=br.dot(Ho),d=wr.dot(Ho);if(d>=0&&m<=d)return t.copy(s);const y=m*f-l*d;if(y<=0&&f>=0&&d<=0)return a=f/(f-d),t.copy(i).addScaledVector(wr,a);const g=h*d-m*p;if(g<=0&&p-h>=0&&m-d>=0)return $f.subVectors(s,r),a=(p-h)/(p-h+(m-d)),t.copy(r).addScaledVector($f,a);const u=1/(g+y+c);return o=y*u,a=c*u,t.copy(i).addScaledVector(br,o).addScaledVector(wr,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const xd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Mi={h:0,s:0,l:0},la={h:0,s:0,l:0};function Xo(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class yt{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Bn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,gt.toWorkingColorSpace(this,t),this}setRGB(e,t,i,r=gt.workingColorSpace){return this.r=e,this.g=t,this.b=i,gt.toWorkingColorSpace(this,r),this}setHSL(e,t,i,r=gt.workingColorSpace){if(e=Ig(e,1),t=ln(t,0,1),i=ln(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,o=2*i-s;this.r=Xo(o,s,e+1/3),this.g=Xo(o,s,e),this.b=Xo(o,s,e-1/3)}return gt.toWorkingColorSpace(this,r),this}setStyle(e,t=Bn){function i(s){s!==void 0&&parseFloat(s)<1}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Bn){const i=xd[e.toLowerCase()];return i!==void 0&&this.setHex(i,t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=zr(e.r),this.g=zr(e.g),this.b=zr(e.b),this}copyLinearToSRGB(e){return this.r=Co(e.r),this.g=Co(e.g),this.b=Co(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Bn){return gt.fromWorkingColorSpace(jt.copy(this),e),Math.round(ln(jt.r*255,0,255))*65536+Math.round(ln(jt.g*255,0,255))*256+Math.round(ln(jt.b*255,0,255))}getHexString(e=Bn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=gt.workingColorSpace){gt.fromWorkingColorSpace(jt.copy(this),t);const i=jt.r,r=jt.g,s=jt.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,f;const h=(a+o)/2;if(a===o)l=0,f=0;else{const p=o-a;switch(f=h<=.5?p/(o+a):p/(2-o-a),o){case i:l=(r-s)/p+(r<s?6:0);break;case r:l=(s-i)/p+2;break;case s:l=(i-r)/p+4;break}l/=6}return e.h=l,e.s=f,e.l=h,e}getRGB(e,t=gt.workingColorSpace){return gt.fromWorkingColorSpace(jt.copy(this),t),e.r=jt.r,e.g=jt.g,e.b=jt.b,e}getStyle(e=Bn){gt.fromWorkingColorSpace(jt.copy(this),e);const t=jt.r,i=jt.g,r=jt.b;return e!==Bn?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(Mi),this.setHSL(Mi.h+e,Mi.s+t,Mi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Mi),e.getHSL(la);const i=Ao(Mi.h,la.h,t),r=Ao(Mi.s,la.s,t),s=Ao(Mi.l,la.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const jt=new yt;yt.NAMES=xd;let Zg=0;class oo extends Jr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Zg++}),this.uuid=Ws(),this.name="",this.type="Material",this.blending=lr,this.side=Ni,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=yl,this.blendDst=Sl,this.blendEquation=tr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new yt(0,0,0),this.blendAlpha=0,this.depthFunc=Vr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Nf,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=gr,this.stencilZFail=gr,this.stencilZPass=gr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0)continue;const r=this[t];r!==void 0&&(r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i)}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==lr&&(i.blending=this.blending),this.side!==Ni&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==yl&&(i.blendSrc=this.blendSrc),this.blendDst!==Sl&&(i.blendDst=this.blendDst),this.blendEquation!==tr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Vr&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Nf&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==gr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==gr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==gr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){}}class jc extends oo{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new yt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new di,this.combine=nd,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Ut=new me,ca=new vt;class un{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Of,this.updateRanges=[],this.gpuType=li,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)ca.fromBufferAttribute(this,t),ca.applyMatrix3(e),this.setXY(t,ca.x,ca.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Ut.fromBufferAttribute(this,t),Ut.applyMatrix3(e),this.setXYZ(t,Ut.x,Ut.y,Ut.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Ut.fromBufferAttribute(this,t),Ut.applyMatrix4(e),this.setXYZ(t,Ut.x,Ut.y,Ut.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Ut.fromBufferAttribute(this,t),Ut.applyNormalMatrix(e),this.setXYZ(t,Ut.x,Ut.y,Ut.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Ut.fromBufferAttribute(this,t),Ut.transformDirection(e),this.setXYZ(t,Ut.x,Ut.y,Ut.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=os(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=on(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=os(t,this.array)),t}setX(e,t){return this.normalized&&(t=on(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=os(t,this.array)),t}setY(e,t){return this.normalized&&(t=on(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=os(t,this.array)),t}setZ(e,t){return this.normalized&&(t=on(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=os(t,this.array)),t}setW(e,t){return this.normalized&&(t=on(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=on(t,this.array),i=on(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=on(t,this.array),i=on(i,this.array),r=on(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=on(t,this.array),i=on(i,this.array),r=on(r,this.array),s=on(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Of&&(e.usage=this.usage),e}}class yd extends un{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class Sd extends un{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class cr extends un{constructor(e,t,i){super(new Float32Array(e),t,i)}}let Jg=0;const gn=new Lt,qo=new fn,Ar=new me,dn=new qs,hs=new qs,zt=new me;class ki extends Jr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Jg++}),this.uuid=Ws(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(md(e)?Sd:yd)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new ct().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return gn.makeRotationFromQuaternion(e),this.applyMatrix4(gn),this}rotateX(e){return gn.makeRotationX(e),this.applyMatrix4(gn),this}rotateY(e){return gn.makeRotationY(e),this.applyMatrix4(gn),this}rotateZ(e){return gn.makeRotationZ(e),this.applyMatrix4(gn),this}translate(e,t,i){return gn.makeTranslation(e,t,i),this.applyMatrix4(gn),this}scale(e,t,i){return gn.makeScale(e,t,i),this.applyMatrix4(gn),this}lookAt(e){return qo.lookAt(e),qo.updateMatrix(),this.applyMatrix4(qo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ar).negate(),this.translate(Ar.x,Ar.y,Ar.z),this}setFromPoints(e){const t=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new cr(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new qs);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){this.boundingBox.set(new me(-1/0,-1/0,-1/0),new me(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];dn.setFromBufferAttribute(s),this.morphTargetsRelative?(zt.addVectors(this.boundingBox.min,dn.min),this.boundingBox.expandByPoint(zt),zt.addVectors(this.boundingBox.max,dn.max),this.boundingBox.expandByPoint(zt)):(this.boundingBox.expandByPoint(dn.min),this.boundingBox.expandByPoint(dn.max))}}else this.boundingBox.makeEmpty();isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new qc);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){this.boundingSphere.set(new me,1/0);return}if(e){const i=this.boundingSphere.center;if(dn.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];hs.setFromBufferAttribute(a),this.morphTargetsRelative?(zt.addVectors(dn.min,hs.min),dn.expandByPoint(zt),zt.addVectors(dn.max,hs.max),dn.expandByPoint(zt)):(dn.expandByPoint(hs.min),dn.expandByPoint(hs.max))}dn.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)zt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(zt));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let f=0,h=a.count;f<h;f++)zt.fromBufferAttribute(a,f),l&&(Ar.fromBufferAttribute(e,f),zt.add(Ar)),r=Math.max(r,i.distanceToSquared(zt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0)return;const i=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new un(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let q=0;q<i.count;q++)a[q]=new me,l[q]=new me;const f=new me,h=new me,p=new me,c=new vt,m=new vt,d=new vt,y=new me,g=new me;function u(q,le,A){f.fromBufferAttribute(i,q),h.fromBufferAttribute(i,le),p.fromBufferAttribute(i,A),c.fromBufferAttribute(s,q),m.fromBufferAttribute(s,le),d.fromBufferAttribute(s,A),h.sub(f),p.sub(f),m.sub(c),d.sub(c);const D=1/(m.x*d.y-d.x*m.y);isFinite(D)&&(y.copy(h).multiplyScalar(d.y).addScaledVector(p,-m.y).multiplyScalar(D),g.copy(p).multiplyScalar(m.x).addScaledVector(h,-d.x).multiplyScalar(D),a[q].add(y),a[le].add(y),a[A].add(y),l[q].add(g),l[le].add(g),l[A].add(g))}let b=this.groups;b.length===0&&(b=[{start:0,count:e.count}]);for(let q=0,le=b.length;q<le;++q){const A=b[q],D=A.start,re=A.count;for(let ee=D,pe=D+re;ee<pe;ee+=3)u(e.getX(ee+0),e.getX(ee+1),e.getX(ee+2))}const T=new me,w=new me,G=new me,O=new me;function k(q){G.fromBufferAttribute(r,q),O.copy(G);const le=a[q];T.copy(le),T.sub(G.multiplyScalar(G.dot(le))).normalize(),w.crossVectors(O,le);const D=w.dot(l[q])<0?-1:1;o.setXYZW(q,T.x,T.y,T.z,D)}for(let q=0,le=b.length;q<le;++q){const A=b[q],D=A.start,re=A.count;for(let ee=D,pe=D+re;ee<pe;ee+=3)k(e.getX(ee+0)),k(e.getX(ee+1)),k(e.getX(ee+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new un(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let c=0,m=i.count;c<m;c++)i.setXYZ(c,0,0,0);const r=new me,s=new me,o=new me,a=new me,l=new me,f=new me,h=new me,p=new me;if(e)for(let c=0,m=e.count;c<m;c+=3){const d=e.getX(c+0),y=e.getX(c+1),g=e.getX(c+2);r.fromBufferAttribute(t,d),s.fromBufferAttribute(t,y),o.fromBufferAttribute(t,g),h.subVectors(o,s),p.subVectors(r,s),h.cross(p),a.fromBufferAttribute(i,d),l.fromBufferAttribute(i,y),f.fromBufferAttribute(i,g),a.add(h),l.add(h),f.add(h),i.setXYZ(d,a.x,a.y,a.z),i.setXYZ(y,l.x,l.y,l.z),i.setXYZ(g,f.x,f.y,f.z)}else for(let c=0,m=t.count;c<m;c+=3)r.fromBufferAttribute(t,c+0),s.fromBufferAttribute(t,c+1),o.fromBufferAttribute(t,c+2),h.subVectors(o,s),p.subVectors(r,s),h.cross(p),i.setXYZ(c+0,h.x,h.y,h.z),i.setXYZ(c+1,h.x,h.y,h.z),i.setXYZ(c+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)zt.fromBufferAttribute(e,t),zt.normalize(),e.setXYZ(t,zt.x,zt.y,zt.z)}toNonIndexed(){function e(a,l){const f=a.array,h=a.itemSize,p=a.normalized,c=new f.constructor(l.length*h);let m=0,d=0;for(let y=0,g=l.length;y<g;y++){a.isInterleavedBufferAttribute?m=l[y]*a.data.stride+a.offset:m=l[y]*h;for(let u=0;u<h;u++)c[d++]=f[m++]}return new un(c,h,p)}if(this.index===null)return this;const t=new ki,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],f=e(l,i);t.setAttribute(a,f)}const s=this.morphAttributes;for(const a in s){const l=[],f=s[a];for(let h=0,p=f.length;h<p;h++){const c=f[h],m=e(c,i);l.push(m)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const f=o[a];t.addGroup(f.start,f.count,f.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const f in l)l[f]!==void 0&&(e[f]=l[f]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const f=i[l];e.data.attributes[l]=f.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const f=this.morphAttributes[l],h=[];for(let p=0,c=f.length;p<c;p++){const m=f[p];h.push(m.toJSON(e.data))}h.length>0&&(r[l]=h,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const r=e.attributes;for(const f in r){const h=r[f];this.setAttribute(f,h.clone(t))}const s=e.morphAttributes;for(const f in s){const h=[],p=s[f];for(let c=0,m=p.length;c<m;c++)h.push(p[c].clone(t));this.morphAttributes[f]=h}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let f=0,h=o.length;f<h;f++){const p=o[f];this.addGroup(p.start,p.count,p.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Kf=new Lt,Yi=new vd,fa=new qc,Zf=new me,ua=new me,ha=new me,da=new me,Yo=new me,pa=new me,Jf=new me,ma=new me;class yn extends fn{constructor(e=new ki,t=new jc){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){pa.set(0,0,0);for(let l=0,f=s.length;l<f;l++){const h=a[l],p=s[l];h!==0&&(Yo.fromBufferAttribute(p,e),o?pa.addScaledVector(Yo,h):pa.addScaledVector(Yo.sub(t),h))}t.add(pa)}return t}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),fa.copy(i.boundingSphere),fa.applyMatrix4(s),Yi.copy(e.ray).recast(e.near),!(fa.containsPoint(Yi.origin)===!1&&(Yi.intersectSphere(fa,Zf)===null||Yi.origin.distanceToSquared(Zf)>(e.far-e.near)**2))&&(Kf.copy(s).invert(),Yi.copy(e.ray).applyMatrix4(Kf),!(i.boundingBox!==null&&Yi.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Yi)))}_computeIntersections(e,t,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,f=s.attributes.uv,h=s.attributes.uv1,p=s.attributes.normal,c=s.groups,m=s.drawRange;if(a!==null)if(Array.isArray(o))for(let d=0,y=c.length;d<y;d++){const g=c[d],u=o[g.materialIndex],b=Math.max(g.start,m.start),T=Math.min(a.count,Math.min(g.start+g.count,m.start+m.count));for(let w=b,G=T;w<G;w+=3){const O=a.getX(w),k=a.getX(w+1),q=a.getX(w+2);r=_a(this,u,e,i,f,h,p,O,k,q),r&&(r.faceIndex=Math.floor(w/3),r.face.materialIndex=g.materialIndex,t.push(r))}}else{const d=Math.max(0,m.start),y=Math.min(a.count,m.start+m.count);for(let g=d,u=y;g<u;g+=3){const b=a.getX(g),T=a.getX(g+1),w=a.getX(g+2);r=_a(this,o,e,i,f,h,p,b,T,w),r&&(r.faceIndex=Math.floor(g/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let d=0,y=c.length;d<y;d++){const g=c[d],u=o[g.materialIndex],b=Math.max(g.start,m.start),T=Math.min(l.count,Math.min(g.start+g.count,m.start+m.count));for(let w=b,G=T;w<G;w+=3){const O=w,k=w+1,q=w+2;r=_a(this,u,e,i,f,h,p,O,k,q),r&&(r.faceIndex=Math.floor(w/3),r.face.materialIndex=g.materialIndex,t.push(r))}}else{const d=Math.max(0,m.start),y=Math.min(l.count,m.start+m.count);for(let g=d,u=y;g<u;g+=3){const b=g,T=g+1,w=g+2;r=_a(this,o,e,i,f,h,p,b,T,w),r&&(r.faceIndex=Math.floor(g/3),t.push(r))}}}}function Qg(n,e,t,i,r,s,o,a){let l;if(e.side===cn?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===Ni,a),l===null)return null;ma.copy(a),ma.applyMatrix4(n.matrixWorld);const f=t.ray.origin.distanceTo(ma);return f<t.near||f>t.far?null:{distance:f,point:ma.clone(),object:n}}function _a(n,e,t,i,r,s,o,a,l,f){n.getVertexPosition(a,ua),n.getVertexPosition(l,ha),n.getVertexPosition(f,da);const h=Qg(n,e,t,i,ua,ha,da,Jf);if(h){const p=new me;Rn.getBarycoord(Jf,ua,ha,da,p),r&&(h.uv=Rn.getInterpolatedAttribute(r,a,l,f,p,new vt)),s&&(h.uv1=Rn.getInterpolatedAttribute(s,a,l,f,p,new vt)),o&&(h.normal=Rn.getInterpolatedAttribute(o,a,l,f,p,new me),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));const c={a,b:l,c:f,normal:new me,materialIndex:0};Rn.getNormal(ua,ha,da,c.normal),h.face=c,h.barycoord=p}return h}class Ys extends ki{constructor(e=1,t=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],f=[],h=[],p=[];let c=0,m=0;d("z","y","x",-1,-1,i,t,e,o,s,0),d("z","y","x",1,-1,i,t,-e,o,s,1),d("x","z","y",1,1,e,i,t,r,o,2),d("x","z","y",1,-1,e,i,-t,r,o,3),d("x","y","z",1,-1,e,t,i,r,s,4),d("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new cr(f,3)),this.setAttribute("normal",new cr(h,3)),this.setAttribute("uv",new cr(p,2));function d(y,g,u,b,T,w,G,O,k,q,le){const A=w/k,D=G/q,re=w/2,ee=G/2,pe=O/2,oe=k+1,ae=q+1;let _e=0,te=0;const Ne=new me;for(let ze=0;ze<ae;ze++){const He=ze*D-ee;for(let Qe=0;Qe<oe;Qe++){const it=Qe*A-re;Ne[y]=it*b,Ne[g]=He*T,Ne[u]=pe,f.push(Ne.x,Ne.y,Ne.z),Ne[y]=0,Ne[g]=0,Ne[u]=O>0?1:-1,h.push(Ne.x,Ne.y,Ne.z),p.push(Qe/k),p.push(1-ze/q),_e+=1}}for(let ze=0;ze<q;ze++)for(let He=0;He<k;He++){const Qe=c+He+oe*ze,it=c+He+oe*(ze+1),Se=c+(He+1)+oe*(ze+1),Pe=c+(He+1)+oe*ze;l.push(Qe,it,Pe),l.push(it,Se,Pe),te+=6}a.addGroup(m,te,le),m+=te,c+=_e}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ys(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function jr(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?e[t][i]=null:e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function nn(n){const e={};for(let t=0;t<n.length;t++){const i=jr(n[t]);for(const r in i)e[r]=i[r]}return e}function e0(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Md(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:gt.workingColorSpace}const t0={clone:jr,merge:nn};var n0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,i0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Wn extends oo{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=n0,this.fragmentShader=i0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=jr(e.uniforms),this.uniformsGroups=e0(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class Td extends fn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Lt,this.projectionMatrix=new Lt,this.projectionMatrixInverse=new Lt,this.coordinateSystem=ci}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ti=new me,Qf=new vt,eu=new vt;class vn extends Td{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=sc*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(wo*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return sc*2*Math.atan(Math.tan(wo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Ti.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Ti.x,Ti.y).multiplyScalar(-e/Ti.z),Ti.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ti.x,Ti.y).multiplyScalar(-e/Ti.z)}getViewSize(e,t){return this.getViewBounds(e,Qf,eu),t.subVectors(eu,Qf)}setViewOffset(e,t,i,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(wo*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,f=o.fullHeight;s+=o.offsetX*r/l,t-=o.offsetY*i/f,r*=o.width/l,i*=o.height/f}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Rr=-90,Cr=1;class r0 extends fn{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new vn(Rr,Cr,e,t);r.layers=this.layers,this.add(r);const s=new vn(Rr,Cr,e,t);s.layers=this.layers,this.add(s);const o=new vn(Rr,Cr,e,t);o.layers=this.layers,this.add(o);const a=new vn(Rr,Cr,e,t);a.layers=this.layers,this.add(a);const l=new vn(Rr,Cr,e,t);l.layers=this.layers,this.add(l);const f=new vn(Rr,Cr,e,t);f.layers=this.layers,this.add(f)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,s,o,a,l]=t;for(const f of t)this.remove(f);if(e===ci)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Ya)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const f of t)this.add(f),f.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,f,h]=this.children,p=e.getRenderTarget(),c=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),d=e.xr.enabled;e.xr.enabled=!1;const y=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,s),e.setRenderTarget(i,1,r),e.render(t,o),e.setRenderTarget(i,2,r),e.render(t,a),e.setRenderTarget(i,3,r),e.render(t,l),e.setRenderTarget(i,4,r),e.render(t,f),i.texture.generateMipmaps=y,e.setRenderTarget(i,5,r),e.render(t,h),e.setRenderTarget(p,c,m),e.xr.enabled=d,i.texture.needsPMREMUpdate=!0}}class Ed extends Wt{constructor(e,t,i,r,s,o,a,l,f,h){e=e!==void 0?e:[],t=t!==void 0?t:Wr,super(e,t,i,r,s,o,a,l,f,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class s0 extends dr{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new Ed(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:An}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Ys(5,5,5),s=new Wn({name:"CubemapFromEquirect",uniforms:jr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:cn,blending:Ii});s.uniforms.tEquirect.value=t;const o=new yn(r,s),a=t.minFilter;return t.minFilter===rr&&(t.minFilter=An),new r0(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,i,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,r);e.setRenderTarget(s)}}const jo=new me,a0=new me,o0=new ct;class Ai{constructor(e=new me(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=jo.subVectors(i,t).cross(a0.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(jo),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||o0.getNormalMatrix(e),r=this.coplanarPoint(jo).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ji=new qc,ga=new me;class bd{constructor(e=new Ai,t=new Ai,i=new Ai,r=new Ai,s=new Ai,o=new Ai){this.planes=[e,t,i,r,s,o]}set(e,t,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=ci){const i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],f=r[4],h=r[5],p=r[6],c=r[7],m=r[8],d=r[9],y=r[10],g=r[11],u=r[12],b=r[13],T=r[14],w=r[15];if(i[0].setComponents(l-s,c-f,g-m,w-u).normalize(),i[1].setComponents(l+s,c+f,g+m,w+u).normalize(),i[2].setComponents(l+o,c+h,g+d,w+b).normalize(),i[3].setComponents(l-o,c-h,g-d,w-b).normalize(),i[4].setComponents(l-a,c-p,g-y,w-T).normalize(),t===ci)i[5].setComponents(l+a,c+p,g+y,w+T).normalize();else if(t===Ya)i[5].setComponents(a,p,y,T).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ji.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ji.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ji)}intersectsSprite(e){return ji.center.set(0,0,0),ji.radius=.7071067811865476,ji.applyMatrix4(e.matrixWorld),this.intersectsSphere(ji)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(ga.x=r.normal.x>0?e.max.x:e.min.x,ga.y=r.normal.y>0?e.max.y:e.min.y,ga.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(ga)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function wd(){let n=null,e=!1,t=null,i=null;function r(s,o){t(s,o),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function l0(n){const e=new WeakMap;function t(a,l){const f=a.array,h=a.usage,p=f.byteLength,c=n.createBuffer();n.bindBuffer(l,c),n.bufferData(l,f,h),a.onUploadCallback();let m;if(f instanceof Float32Array)m=n.FLOAT;else if(f instanceof Uint16Array)a.isFloat16BufferAttribute?m=n.HALF_FLOAT:m=n.UNSIGNED_SHORT;else if(f instanceof Int16Array)m=n.SHORT;else if(f instanceof Uint32Array)m=n.UNSIGNED_INT;else if(f instanceof Int32Array)m=n.INT;else if(f instanceof Int8Array)m=n.BYTE;else if(f instanceof Uint8Array)m=n.UNSIGNED_BYTE;else if(f instanceof Uint8ClampedArray)m=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:c,type:m,bytesPerElement:f.BYTES_PER_ELEMENT,version:a.version,size:p}}function i(a,l,f){const h=l.array,p=l.updateRanges;if(n.bindBuffer(f,a),p.length===0)n.bufferSubData(f,0,h);else{p.sort((m,d)=>m.start-d.start);let c=0;for(let m=1;m<p.length;m++){const d=p[c],y=p[m];y.start<=d.start+d.count+1?d.count=Math.max(d.count,y.start+y.count-d.start):(++c,p[c]=y)}p.length=c+1;for(let m=0,d=p.length;m<d;m++){const y=p[m];n.bufferSubData(f,y.start*h.BYTES_PER_ELEMENT,h,y.start,y.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(n.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const f=e.get(a);if(f===void 0)e.set(a,t(a,l));else if(f.version<a.version){if(f.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(f.buffer,a,l),f.version=a.version}}return{get:r,remove:s,update:o}}class Qr extends ki{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,o=t/2,a=Math.floor(i),l=Math.floor(r),f=a+1,h=l+1,p=e/a,c=t/l,m=[],d=[],y=[],g=[];for(let u=0;u<h;u++){const b=u*c-o;for(let T=0;T<f;T++){const w=T*p-s;d.push(w,-b,0),y.push(0,0,1),g.push(T/a),g.push(1-u/l)}}for(let u=0;u<l;u++)for(let b=0;b<a;b++){const T=b+f*u,w=b+f*(u+1),G=b+1+f*(u+1),O=b+1+f*u;m.push(T,w,O),m.push(w,G,O)}this.setIndex(m),this.setAttribute("position",new cr(d,3)),this.setAttribute("normal",new cr(y,3)),this.setAttribute("uv",new cr(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Qr(e.width,e.height,e.widthSegments,e.heightSegments)}}var c0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,f0=`#ifdef USE_ALPHAHASH
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
#endif`,u0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,h0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,d0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,p0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,m0=`#ifdef USE_AOMAP
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
#endif`,_0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,g0=`#ifdef USE_BATCHING
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
#endif`,v0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,x0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,y0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,S0=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,M0=`#ifdef USE_IRIDESCENCE
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
#endif`,T0=`#ifdef USE_BUMPMAP
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
#endif`,E0=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,b0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,w0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,A0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,R0=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,C0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,P0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,D0=`#if defined( USE_COLOR_ALPHA )
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
#endif`,L0=`#define PI 3.141592653589793
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
} // validated`,I0=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,U0=`vec3 transformedNormal = objectNormal;
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
#endif`,N0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,O0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,F0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,B0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,z0="gl_FragColor = linearToOutputTexel( gl_FragColor );",k0=`
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
}`,H0=`#ifdef USE_ENVMAP
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
#endif`,G0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,V0=`#ifdef USE_ENVMAP
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
#endif`,W0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,X0=`#ifdef USE_ENVMAP
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
#endif`,q0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Y0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,j0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,$0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,K0=`#ifdef USE_GRADIENTMAP
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
}`,Z0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,J0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Q0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,ev=`uniform bool receiveShadow;
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
#endif`,tv=`#ifdef USE_ENVMAP
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
#endif`,nv=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,iv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,rv=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,sv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,av=`PhysicalMaterial material;
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
#endif`,ov=`struct PhysicalMaterial {
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
}`,lv=`
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
#endif`,cv=`#if defined( RE_IndirectDiffuse )
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
#endif`,fv=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,uv=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,hv=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,dv=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,pv=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,mv=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,_v=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,gv=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,vv=`#if defined( USE_POINTS_UV )
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
#endif`,xv=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,yv=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Sv=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Mv=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Tv=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ev=`#ifdef USE_MORPHTARGETS
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
#endif`,bv=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,wv=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Av=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Rv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Cv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Pv=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Dv=`#ifdef USE_NORMALMAP
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
#endif`,Lv=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Iv=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Uv=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Nv=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Ov=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Fv=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Bv=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,zv=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,kv=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Hv=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Gv=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Vv=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Wv=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Xv=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,qv=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Yv=`float getShadowMask() {
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
}`,jv=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,$v=`#ifdef USE_SKINNING
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
#endif`,Kv=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Zv=`#ifdef USE_SKINNING
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
#endif`,Jv=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Qv=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,ex=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,tx=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,nx=`#ifdef USE_TRANSMISSION
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
#endif`,ix=`#ifdef USE_TRANSMISSION
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
#endif`,rx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,sx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ax=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ox=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const lx=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,cx=`uniform sampler2D t2D;
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
}`,fx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ux=`#ifdef ENVMAP_TYPE_CUBE
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
}`,hx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,dx=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,px=`#include <common>
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
}`,mx=`#if DEPTH_PACKING == 3200
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
}`,_x=`#define DISTANCE
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
}`,gx=`#define DISTANCE
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
}`,vx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,xx=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,yx=`uniform float scale;
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
}`,Sx=`uniform vec3 diffuse;
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
}`,Mx=`#include <common>
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
}`,Tx=`uniform vec3 diffuse;
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
}`,Ex=`#define LAMBERT
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
}`,bx=`#define LAMBERT
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
}`,wx=`#define MATCAP
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
}`,Ax=`#define MATCAP
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
}`,Rx=`#define NORMAL
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
}`,Cx=`#define NORMAL
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
}`,Px=`#define PHONG
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
}`,Dx=`#define PHONG
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
}`,Lx=`#define STANDARD
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
}`,Ix=`#define STANDARD
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
}`,Ux=`#define TOON
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
}`,Nx=`#define TOON
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
}`,Ox=`uniform float size;
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
}`,Fx=`uniform vec3 diffuse;
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
}`,Bx=`#include <common>
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
}`,zx=`uniform vec3 color;
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
}`,kx=`uniform float rotation;
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
}`,Hx=`uniform vec3 diffuse;
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
}`,lt={alphahash_fragment:c0,alphahash_pars_fragment:f0,alphamap_fragment:u0,alphamap_pars_fragment:h0,alphatest_fragment:d0,alphatest_pars_fragment:p0,aomap_fragment:m0,aomap_pars_fragment:_0,batching_pars_vertex:g0,batching_vertex:v0,begin_vertex:x0,beginnormal_vertex:y0,bsdfs:S0,iridescence_fragment:M0,bumpmap_pars_fragment:T0,clipping_planes_fragment:E0,clipping_planes_pars_fragment:b0,clipping_planes_pars_vertex:w0,clipping_planes_vertex:A0,color_fragment:R0,color_pars_fragment:C0,color_pars_vertex:P0,color_vertex:D0,common:L0,cube_uv_reflection_fragment:I0,defaultnormal_vertex:U0,displacementmap_pars_vertex:N0,displacementmap_vertex:O0,emissivemap_fragment:F0,emissivemap_pars_fragment:B0,colorspace_fragment:z0,colorspace_pars_fragment:k0,envmap_fragment:H0,envmap_common_pars_fragment:G0,envmap_pars_fragment:V0,envmap_pars_vertex:W0,envmap_physical_pars_fragment:tv,envmap_vertex:X0,fog_vertex:q0,fog_pars_vertex:Y0,fog_fragment:j0,fog_pars_fragment:$0,gradientmap_pars_fragment:K0,lightmap_pars_fragment:Z0,lights_lambert_fragment:J0,lights_lambert_pars_fragment:Q0,lights_pars_begin:ev,lights_toon_fragment:nv,lights_toon_pars_fragment:iv,lights_phong_fragment:rv,lights_phong_pars_fragment:sv,lights_physical_fragment:av,lights_physical_pars_fragment:ov,lights_fragment_begin:lv,lights_fragment_maps:cv,lights_fragment_end:fv,logdepthbuf_fragment:uv,logdepthbuf_pars_fragment:hv,logdepthbuf_pars_vertex:dv,logdepthbuf_vertex:pv,map_fragment:mv,map_pars_fragment:_v,map_particle_fragment:gv,map_particle_pars_fragment:vv,metalnessmap_fragment:xv,metalnessmap_pars_fragment:yv,morphinstance_vertex:Sv,morphcolor_vertex:Mv,morphnormal_vertex:Tv,morphtarget_pars_vertex:Ev,morphtarget_vertex:bv,normal_fragment_begin:wv,normal_fragment_maps:Av,normal_pars_fragment:Rv,normal_pars_vertex:Cv,normal_vertex:Pv,normalmap_pars_fragment:Dv,clearcoat_normal_fragment_begin:Lv,clearcoat_normal_fragment_maps:Iv,clearcoat_pars_fragment:Uv,iridescence_pars_fragment:Nv,opaque_fragment:Ov,packing:Fv,premultiplied_alpha_fragment:Bv,project_vertex:zv,dithering_fragment:kv,dithering_pars_fragment:Hv,roughnessmap_fragment:Gv,roughnessmap_pars_fragment:Vv,shadowmap_pars_fragment:Wv,shadowmap_pars_vertex:Xv,shadowmap_vertex:qv,shadowmask_pars_fragment:Yv,skinbase_vertex:jv,skinning_pars_vertex:$v,skinning_vertex:Kv,skinnormal_vertex:Zv,specularmap_fragment:Jv,specularmap_pars_fragment:Qv,tonemapping_fragment:ex,tonemapping_pars_fragment:tx,transmission_fragment:nx,transmission_pars_fragment:ix,uv_pars_fragment:rx,uv_pars_vertex:sx,uv_vertex:ax,worldpos_vertex:ox,background_vert:lx,background_frag:cx,backgroundCube_vert:fx,backgroundCube_frag:ux,cube_vert:hx,cube_frag:dx,depth_vert:px,depth_frag:mx,distanceRGBA_vert:_x,distanceRGBA_frag:gx,equirect_vert:vx,equirect_frag:xx,linedashed_vert:yx,linedashed_frag:Sx,meshbasic_vert:Mx,meshbasic_frag:Tx,meshlambert_vert:Ex,meshlambert_frag:bx,meshmatcap_vert:wx,meshmatcap_frag:Ax,meshnormal_vert:Rx,meshnormal_frag:Cx,meshphong_vert:Px,meshphong_frag:Dx,meshphysical_vert:Lx,meshphysical_frag:Ix,meshtoon_vert:Ux,meshtoon_frag:Nx,points_vert:Ox,points_frag:Fx,shadow_vert:Bx,shadow_frag:zx,sprite_vert:kx,sprite_frag:Hx},ke={common:{diffuse:{value:new yt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ct},alphaMap:{value:null},alphaMapTransform:{value:new ct},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ct}},envmap:{envMap:{value:null},envMapRotation:{value:new ct},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ct}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ct}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ct},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ct},normalScale:{value:new vt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ct},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ct}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ct}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ct}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new yt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new yt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ct},alphaTest:{value:0},uvTransform:{value:new ct}},sprite:{diffuse:{value:new yt(16777215)},opacity:{value:1},center:{value:new vt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ct},alphaMap:{value:null},alphaMapTransform:{value:new ct},alphaTest:{value:0}}},kn={basic:{uniforms:nn([ke.common,ke.specularmap,ke.envmap,ke.aomap,ke.lightmap,ke.fog]),vertexShader:lt.meshbasic_vert,fragmentShader:lt.meshbasic_frag},lambert:{uniforms:nn([ke.common,ke.specularmap,ke.envmap,ke.aomap,ke.lightmap,ke.emissivemap,ke.bumpmap,ke.normalmap,ke.displacementmap,ke.fog,ke.lights,{emissive:{value:new yt(0)}}]),vertexShader:lt.meshlambert_vert,fragmentShader:lt.meshlambert_frag},phong:{uniforms:nn([ke.common,ke.specularmap,ke.envmap,ke.aomap,ke.lightmap,ke.emissivemap,ke.bumpmap,ke.normalmap,ke.displacementmap,ke.fog,ke.lights,{emissive:{value:new yt(0)},specular:{value:new yt(1118481)},shininess:{value:30}}]),vertexShader:lt.meshphong_vert,fragmentShader:lt.meshphong_frag},standard:{uniforms:nn([ke.common,ke.envmap,ke.aomap,ke.lightmap,ke.emissivemap,ke.bumpmap,ke.normalmap,ke.displacementmap,ke.roughnessmap,ke.metalnessmap,ke.fog,ke.lights,{emissive:{value:new yt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:lt.meshphysical_vert,fragmentShader:lt.meshphysical_frag},toon:{uniforms:nn([ke.common,ke.aomap,ke.lightmap,ke.emissivemap,ke.bumpmap,ke.normalmap,ke.displacementmap,ke.gradientmap,ke.fog,ke.lights,{emissive:{value:new yt(0)}}]),vertexShader:lt.meshtoon_vert,fragmentShader:lt.meshtoon_frag},matcap:{uniforms:nn([ke.common,ke.bumpmap,ke.normalmap,ke.displacementmap,ke.fog,{matcap:{value:null}}]),vertexShader:lt.meshmatcap_vert,fragmentShader:lt.meshmatcap_frag},points:{uniforms:nn([ke.points,ke.fog]),vertexShader:lt.points_vert,fragmentShader:lt.points_frag},dashed:{uniforms:nn([ke.common,ke.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:lt.linedashed_vert,fragmentShader:lt.linedashed_frag},depth:{uniforms:nn([ke.common,ke.displacementmap]),vertexShader:lt.depth_vert,fragmentShader:lt.depth_frag},normal:{uniforms:nn([ke.common,ke.bumpmap,ke.normalmap,ke.displacementmap,{opacity:{value:1}}]),vertexShader:lt.meshnormal_vert,fragmentShader:lt.meshnormal_frag},sprite:{uniforms:nn([ke.sprite,ke.fog]),vertexShader:lt.sprite_vert,fragmentShader:lt.sprite_frag},background:{uniforms:{uvTransform:{value:new ct},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:lt.background_vert,fragmentShader:lt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ct}},vertexShader:lt.backgroundCube_vert,fragmentShader:lt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:lt.cube_vert,fragmentShader:lt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:lt.equirect_vert,fragmentShader:lt.equirect_frag},distanceRGBA:{uniforms:nn([ke.common,ke.displacementmap,{referencePosition:{value:new me},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:lt.distanceRGBA_vert,fragmentShader:lt.distanceRGBA_frag},shadow:{uniforms:nn([ke.lights,ke.fog,{color:{value:new yt(0)},opacity:{value:1}}]),vertexShader:lt.shadow_vert,fragmentShader:lt.shadow_frag}};kn.physical={uniforms:nn([kn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ct},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ct},clearcoatNormalScale:{value:new vt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ct},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ct},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ct},sheen:{value:0},sheenColor:{value:new yt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ct},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ct},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ct},transmissionSamplerSize:{value:new vt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ct},attenuationDistance:{value:0},attenuationColor:{value:new yt(0)},specularColor:{value:new yt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ct},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ct},anisotropyVector:{value:new vt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ct}}]),vertexShader:lt.meshphysical_vert,fragmentShader:lt.meshphysical_frag};const va={r:0,b:0,g:0},$i=new di,Gx=new Lt;function Vx(n,e,t,i,r,s,o){const a=new yt(0);let l=s===!0?0:1,f,h,p=null,c=0,m=null;function d(b){let T=b.isScene===!0?b.background:null;return T&&T.isTexture&&(T=(b.backgroundBlurriness>0?t:e).get(T)),T}function y(b){let T=!1;const w=d(b);w===null?u(a,l):w&&w.isColor&&(u(w,1),T=!0);const G=n.xr.getEnvironmentBlendMode();G==="additive"?i.buffers.color.setClear(0,0,0,1,o):G==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||T)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function g(b,T){const w=d(T);w&&(w.isCubeTexture||w.mapping===so)?(h===void 0&&(h=new yn(new Ys(1,1,1),new Wn({name:"BackgroundCubeMaterial",uniforms:jr(kn.backgroundCube.uniforms),vertexShader:kn.backgroundCube.vertexShader,fragmentShader:kn.backgroundCube.fragmentShader,side:cn,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(G,O,k){this.matrixWorld.copyPosition(k.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(h)),$i.copy(T.backgroundRotation),$i.x*=-1,$i.y*=-1,$i.z*=-1,w.isCubeTexture&&w.isRenderTargetTexture===!1&&($i.y*=-1,$i.z*=-1),h.material.uniforms.envMap.value=w,h.material.uniforms.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=T.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Gx.makeRotationFromEuler($i)),h.material.toneMapped=gt.getTransfer(w.colorSpace)!==wt,(p!==w||c!==w.version||m!==n.toneMapping)&&(h.material.needsUpdate=!0,p=w,c=w.version,m=n.toneMapping),h.layers.enableAll(),b.unshift(h,h.geometry,h.material,0,0,null)):w&&w.isTexture&&(f===void 0&&(f=new yn(new Qr(2,2),new Wn({name:"BackgroundMaterial",uniforms:jr(kn.background.uniforms),vertexShader:kn.background.vertexShader,fragmentShader:kn.background.fragmentShader,side:Ni,depthTest:!1,depthWrite:!1,fog:!1})),f.geometry.deleteAttribute("normal"),Object.defineProperty(f.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(f)),f.material.uniforms.t2D.value=w,f.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,f.material.toneMapped=gt.getTransfer(w.colorSpace)!==wt,w.matrixAutoUpdate===!0&&w.updateMatrix(),f.material.uniforms.uvTransform.value.copy(w.matrix),(p!==w||c!==w.version||m!==n.toneMapping)&&(f.material.needsUpdate=!0,p=w,c=w.version,m=n.toneMapping),f.layers.enableAll(),b.unshift(f,f.geometry,f.material,0,0,null))}function u(b,T){b.getRGB(va,Md(n)),i.buffers.color.setClear(va.r,va.g,va.b,T,o)}return{getClearColor:function(){return a},setClearColor:function(b,T=1){a.set(b),l=T,u(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(b){l=b,u(a,l)},render:y,addToRenderList:g}}function Wx(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=c(null);let s=r,o=!1;function a(A,D,re,ee,pe){let oe=!1;const ae=p(ee,re,D);s!==ae&&(s=ae,f(s.object)),oe=m(A,ee,re,pe),oe&&d(A,ee,re,pe),pe!==null&&e.update(pe,n.ELEMENT_ARRAY_BUFFER),(oe||o)&&(o=!1,w(A,D,re,ee),pe!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(pe).buffer))}function l(){return n.createVertexArray()}function f(A){return n.bindVertexArray(A)}function h(A){return n.deleteVertexArray(A)}function p(A,D,re){const ee=re.wireframe===!0;let pe=i[A.id];pe===void 0&&(pe={},i[A.id]=pe);let oe=pe[D.id];oe===void 0&&(oe={},pe[D.id]=oe);let ae=oe[ee];return ae===void 0&&(ae=c(l()),oe[ee]=ae),ae}function c(A){const D=[],re=[],ee=[];for(let pe=0;pe<t;pe++)D[pe]=0,re[pe]=0,ee[pe]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:re,attributeDivisors:ee,object:A,attributes:{},index:null}}function m(A,D,re,ee){const pe=s.attributes,oe=D.attributes;let ae=0;const _e=re.getAttributes();for(const te in _e)if(_e[te].location>=0){const ze=pe[te];let He=oe[te];if(He===void 0&&(te==="instanceMatrix"&&A.instanceMatrix&&(He=A.instanceMatrix),te==="instanceColor"&&A.instanceColor&&(He=A.instanceColor)),ze===void 0||ze.attribute!==He||He&&ze.data!==He.data)return!0;ae++}return s.attributesNum!==ae||s.index!==ee}function d(A,D,re,ee){const pe={},oe=D.attributes;let ae=0;const _e=re.getAttributes();for(const te in _e)if(_e[te].location>=0){let ze=oe[te];ze===void 0&&(te==="instanceMatrix"&&A.instanceMatrix&&(ze=A.instanceMatrix),te==="instanceColor"&&A.instanceColor&&(ze=A.instanceColor));const He={};He.attribute=ze,ze&&ze.data&&(He.data=ze.data),pe[te]=He,ae++}s.attributes=pe,s.attributesNum=ae,s.index=ee}function y(){const A=s.newAttributes;for(let D=0,re=A.length;D<re;D++)A[D]=0}function g(A){u(A,0)}function u(A,D){const re=s.newAttributes,ee=s.enabledAttributes,pe=s.attributeDivisors;re[A]=1,ee[A]===0&&(n.enableVertexAttribArray(A),ee[A]=1),pe[A]!==D&&(n.vertexAttribDivisor(A,D),pe[A]=D)}function b(){const A=s.newAttributes,D=s.enabledAttributes;for(let re=0,ee=D.length;re<ee;re++)D[re]!==A[re]&&(n.disableVertexAttribArray(re),D[re]=0)}function T(A,D,re,ee,pe,oe,ae){ae===!0?n.vertexAttribIPointer(A,D,re,pe,oe):n.vertexAttribPointer(A,D,re,ee,pe,oe)}function w(A,D,re,ee){y();const pe=ee.attributes,oe=re.getAttributes(),ae=D.defaultAttributeValues;for(const _e in oe){const te=oe[_e];if(te.location>=0){let Ne=pe[_e];if(Ne===void 0&&(_e==="instanceMatrix"&&A.instanceMatrix&&(Ne=A.instanceMatrix),_e==="instanceColor"&&A.instanceColor&&(Ne=A.instanceColor)),Ne!==void 0){const ze=Ne.normalized,He=Ne.itemSize,Qe=e.get(Ne);if(Qe===void 0)continue;const it=Qe.buffer,Se=Qe.type,Pe=Qe.bytesPerElement,Oe=Se===n.INT||Se===n.UNSIGNED_INT||Ne.gpuType===zc;if(Ne.isInterleavedBufferAttribute){const Z=Ne.data,we=Z.stride,xe=Ne.offset;if(Z.isInstancedInterleavedBuffer){for(let De=0;De<te.locationSize;De++)u(te.location+De,Z.meshPerAttribute);A.isInstancedMesh!==!0&&ee._maxInstanceCount===void 0&&(ee._maxInstanceCount=Z.meshPerAttribute*Z.count)}else for(let De=0;De<te.locationSize;De++)g(te.location+De);n.bindBuffer(n.ARRAY_BUFFER,it);for(let De=0;De<te.locationSize;De++)T(te.location+De,He/te.locationSize,Se,ze,we*Pe,(xe+He/te.locationSize*De)*Pe,Oe)}else{if(Ne.isInstancedBufferAttribute){for(let Z=0;Z<te.locationSize;Z++)u(te.location+Z,Ne.meshPerAttribute);A.isInstancedMesh!==!0&&ee._maxInstanceCount===void 0&&(ee._maxInstanceCount=Ne.meshPerAttribute*Ne.count)}else for(let Z=0;Z<te.locationSize;Z++)g(te.location+Z);n.bindBuffer(n.ARRAY_BUFFER,it);for(let Z=0;Z<te.locationSize;Z++)T(te.location+Z,He/te.locationSize,Se,ze,He*Pe,He/te.locationSize*Z*Pe,Oe)}}else if(ae!==void 0){const ze=ae[_e];if(ze!==void 0)switch(ze.length){case 2:n.vertexAttrib2fv(te.location,ze);break;case 3:n.vertexAttrib3fv(te.location,ze);break;case 4:n.vertexAttrib4fv(te.location,ze);break;default:n.vertexAttrib1fv(te.location,ze)}}}}b()}function G(){q();for(const A in i){const D=i[A];for(const re in D){const ee=D[re];for(const pe in ee)h(ee[pe].object),delete ee[pe];delete D[re]}delete i[A]}}function O(A){if(i[A.id]===void 0)return;const D=i[A.id];for(const re in D){const ee=D[re];for(const pe in ee)h(ee[pe].object),delete ee[pe];delete D[re]}delete i[A.id]}function k(A){for(const D in i){const re=i[D];if(re[A.id]===void 0)continue;const ee=re[A.id];for(const pe in ee)h(ee[pe].object),delete ee[pe];delete re[A.id]}}function q(){le(),o=!0,s!==r&&(s=r,f(s.object))}function le(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:q,resetDefaultState:le,dispose:G,releaseStatesOfGeometry:O,releaseStatesOfProgram:k,initAttributes:y,enableAttribute:g,disableUnusedAttributes:b}}function Xx(n,e,t){let i;function r(f){i=f}function s(f,h){n.drawArrays(i,f,h),t.update(h,i,1)}function o(f,h,p){p!==0&&(n.drawArraysInstanced(i,f,h,p),t.update(h,i,p))}function a(f,h,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,f,0,h,0,p);let m=0;for(let d=0;d<p;d++)m+=h[d];t.update(m,i,1)}function l(f,h,p,c){if(p===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let d=0;d<f.length;d++)o(f[d],h[d],c[d]);else{m.multiDrawArraysInstancedWEBGL(i,f,0,h,0,c,0,p);let d=0;for(let y=0;y<p;y++)d+=h[y];for(let y=0;y<c.length;y++)t.update(d,i,c[y])}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function qx(n,e,t,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const k=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(k.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(k){return!(k!==Dn&&i.convert(k)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(k){const q=k===Vs&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(k!==hi&&i.convert(k)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&k!==li&&!q)}function l(k){if(k==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";k="mediump"}return k==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let f=t.precision!==void 0?t.precision:"highp";const h=l(f);h!==f&&(f=h);const p=t.logarithmicDepthBuffer===!0,c=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control");if(c===!0){const k=e.get("EXT_clip_control");k.clipControlEXT(k.LOWER_LEFT_EXT,k.ZERO_TO_ONE_EXT)}const m=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),d=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=n.getParameter(n.MAX_TEXTURE_SIZE),g=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),u=n.getParameter(n.MAX_VERTEX_ATTRIBS),b=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),T=n.getParameter(n.MAX_VARYING_VECTORS),w=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),G=d>0,O=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:f,logarithmicDepthBuffer:p,reverseDepthBuffer:c,maxTextures:m,maxVertexTextures:d,maxTextureSize:y,maxCubemapSize:g,maxAttributes:u,maxVertexUniforms:b,maxVaryings:T,maxFragmentUniforms:w,vertexTextures:G,maxSamples:O}}function Yx(n){const e=this;let t=null,i=0,r=!1,s=!1;const o=new Ai,a=new ct,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(p,c){const m=p.length!==0||c||i!==0||r;return r=c,i=p.length,m},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(p,c){t=h(p,c,0)},this.setState=function(p,c,m){const d=p.clippingPlanes,y=p.clipIntersection,g=p.clipShadows,u=n.get(p);if(!r||d===null||d.length===0||s&&!g)s?h(null):f();else{const b=s?0:i,T=b*4;let w=u.clippingState||null;l.value=w,w=h(d,c,T,m);for(let G=0;G!==T;++G)w[G]=t[G];u.clippingState=w,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=b}};function f(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(p,c,m,d){const y=p!==null?p.length:0;let g=null;if(y!==0){if(g=l.value,d!==!0||g===null){const u=m+y*4,b=c.matrixWorldInverse;a.getNormalMatrix(b),(g===null||g.length<u)&&(g=new Float32Array(u));for(let T=0,w=m;T!==y;++T,w+=4)o.copy(p[T]).applyMatrix4(b,a),o.normal.toArray(g,w),g[w+3]=o.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=y,e.numIntersection=0,g}}function jx(n){let e=new WeakMap;function t(o,a){return a===Cl?o.mapping=Wr:a===Pl&&(o.mapping=Xr),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===Cl||a===Pl)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const f=new s0(l.height);return f.fromEquirectangularTexture(n,o),e.set(o,f),o.addEventListener("dispose",r),t(f.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class Ad extends Td{constructor(e=-1,t=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const f=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=f*this.view.offsetX,o=s+f*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Ir=4,tu=[.125,.215,.35,.446,.526,.582],Ur=20,$o=new Ad,nu=new yt;let Ko=null,Zo=0,Jo=0,Qo=!1;const Ji=(1+Math.sqrt(5))/2,Pr=1/Ji,iu=[new me(-Ji,Pr,0),new me(Ji,Pr,0),new me(-Pr,0,Ji),new me(Pr,0,Ji),new me(0,Ji,-Pr),new me(0,Ji,Pr),new me(-1,1,-1),new me(1,1,-1),new me(-1,1,1),new me(1,1,1)];class ru{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100){Ko=this._renderer.getRenderTarget(),Zo=this._renderer.getActiveCubeFace(),Jo=this._renderer.getActiveMipmapLevel(),Qo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ou(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=au(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Ko,Zo,Jo),this._renderer.xr.enabled=Qo,e.scissorTest=!1,xa(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Wr||e.mapping===Xr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ko=this._renderer.getRenderTarget(),Zo=this._renderer.getActiveCubeFace(),Jo=this._renderer.getActiveMipmapLevel(),Qo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:An,minFilter:An,generateMipmaps:!1,type:Vs,format:Dn,colorSpace:zi,depthBuffer:!1},r=su(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=su(e,t,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=$x(s)),this._blurMaterial=Kx(s,e,t)}return r}_compileMaterial(e){const t=new yn(this._lodPlanes[0],e);this._renderer.compile(t,$o)}_sceneToCubeUV(e,t,i,r){const a=new vn(90,1,t,i),l=[1,-1,1,1,1,1],f=[1,1,1,-1,-1,-1],h=this._renderer,p=h.autoClear,c=h.toneMapping;h.getClearColor(nu),h.toneMapping=Ui,h.autoClear=!1;const m=new jc({name:"PMREM.Background",side:cn,depthWrite:!1,depthTest:!1}),d=new yn(new Ys,m);let y=!1;const g=e.background;g?g.isColor&&(m.color.copy(g),e.background=null,y=!0):(m.color.copy(nu),y=!0);for(let u=0;u<6;u++){const b=u%3;b===0?(a.up.set(0,l[u],0),a.lookAt(f[u],0,0)):b===1?(a.up.set(0,0,l[u]),a.lookAt(0,f[u],0)):(a.up.set(0,l[u],0),a.lookAt(0,0,f[u]));const T=this._cubeSize;xa(r,b*T,u>2?T:0,T,T),h.setRenderTarget(r),y&&h.render(d,a),h.render(e,a)}d.geometry.dispose(),d.material.dispose(),h.toneMapping=c,h.autoClear=p,e.background=g}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===Wr||e.mapping===Xr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=ou()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=au());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new yn(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;xa(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,$o)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=iu[(r-s-1)%iu.length];this._blur(e,s-1,s,o,a)}t.autoClear=i}_blur(e,t,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,o,a){const l=this._renderer,f=this._blurMaterial,h=3,p=new yn(this._lodPlanes[r],f),c=f.uniforms,m=this._sizeLods[i]-1,d=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*Ur-1),y=s/d,g=isFinite(s)?1+Math.floor(h*y):Ur;g>Ur;const u=[];let b=0;for(let k=0;k<Ur;++k){const q=k/y,le=Math.exp(-q*q/2);u.push(le),k===0?b+=le:k<g&&(b+=2*le)}for(let k=0;k<u.length;k++)u[k]=u[k]/b;c.envMap.value=e.texture,c.samples.value=g,c.weights.value=u,c.latitudinal.value=o==="latitudinal",a&&(c.poleAxis.value=a);const{_lodMax:T}=this;c.dTheta.value=d,c.mipInt.value=T-i;const w=this._sizeLods[r],G=3*w*(r>T-Ir?r-T+Ir:0),O=4*(this._cubeSize-w);xa(t,G,O,3*w,2*w),l.setRenderTarget(t),l.render(p,$o)}}function $x(n){const e=[],t=[],i=[];let r=n;const s=n-Ir+1+tu.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);t.push(a);let l=1/a;o>n-Ir?l=tu[o-n+Ir-1]:o===0&&(l=0),i.push(l);const f=1/(a-2),h=-f,p=1+f,c=[h,h,p,h,p,p,h,h,p,p,h,p],m=6,d=6,y=3,g=2,u=1,b=new Float32Array(y*d*m),T=new Float32Array(g*d*m),w=new Float32Array(u*d*m);for(let O=0;O<m;O++){const k=O%3*2/3-1,q=O>2?0:-1,le=[k,q,0,k+2/3,q,0,k+2/3,q+1,0,k,q,0,k+2/3,q+1,0,k,q+1,0];b.set(le,y*d*O),T.set(c,g*d*O);const A=[O,O,O,O,O,O];w.set(A,u*d*O)}const G=new ki;G.setAttribute("position",new un(b,y)),G.setAttribute("uv",new un(T,g)),G.setAttribute("faceIndex",new un(w,u)),e.push(G),r>Ir&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function su(n,e,t){const i=new dr(n,e,t);return i.texture.mapping=so,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function xa(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function Kx(n,e,t){const i=new Float32Array(Ur),r=new me(0,1,0);return new Wn({name:"SphericalGaussianBlur",defines:{n:Ur,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:$c(),fragmentShader:`

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
		`,blending:Ii,depthTest:!1,depthWrite:!1})}function au(){return new Wn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:$c(),fragmentShader:`

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
		`,blending:Ii,depthTest:!1,depthWrite:!1})}function ou(){return new Wn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:$c(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ii,depthTest:!1,depthWrite:!1})}function $c(){return`

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
	`}function Zx(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){const l=a.mapping,f=l===Cl||l===Pl,h=l===Wr||l===Xr;if(f||h){let p=e.get(a);const c=p!==void 0?p.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==c)return t===null&&(t=new ru(n)),p=f?t.fromEquirectangular(a,p):t.fromCubemap(a,p),p.texture.pmremVersion=a.pmremVersion,e.set(a,p),p.texture;if(p!==void 0)return p.texture;{const m=a.image;return f&&m&&m.height>0||h&&m&&r(m)?(t===null&&(t=new ru(n)),p=f?t.fromEquirectangular(a):t.fromCubemap(a),p.texture.pmremVersion=a.pmremVersion,e.set(a,p),a.addEventListener("dispose",s),p.texture):null}}}return a}function r(a){let l=0;const f=6;for(let h=0;h<f;h++)a[h]!==void 0&&l++;return l===f}function s(a){const l=a.target;l.removeEventListener("dispose",s);const f=e.get(l);f!==void 0&&(e.delete(l),f.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function Jx(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const r=t(i);return r===null&&Na("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function Qx(n,e,t,i){const r={},s=new WeakMap;function o(p){const c=p.target;c.index!==null&&e.remove(c.index);for(const d in c.attributes)e.remove(c.attributes[d]);for(const d in c.morphAttributes){const y=c.morphAttributes[d];for(let g=0,u=y.length;g<u;g++)e.remove(y[g])}c.removeEventListener("dispose",o),delete r[c.id];const m=s.get(c);m&&(e.remove(m),s.delete(c)),i.releaseStatesOfGeometry(c),c.isInstancedBufferGeometry===!0&&delete c._maxInstanceCount,t.memory.geometries--}function a(p,c){return r[c.id]===!0||(c.addEventListener("dispose",o),r[c.id]=!0,t.memory.geometries++),c}function l(p){const c=p.attributes;for(const d in c)e.update(c[d],n.ARRAY_BUFFER);const m=p.morphAttributes;for(const d in m){const y=m[d];for(let g=0,u=y.length;g<u;g++)e.update(y[g],n.ARRAY_BUFFER)}}function f(p){const c=[],m=p.index,d=p.attributes.position;let y=0;if(m!==null){const b=m.array;y=m.version;for(let T=0,w=b.length;T<w;T+=3){const G=b[T+0],O=b[T+1],k=b[T+2];c.push(G,O,O,k,k,G)}}else if(d!==void 0){const b=d.array;y=d.version;for(let T=0,w=b.length/3-1;T<w;T+=3){const G=T+0,O=T+1,k=T+2;c.push(G,O,O,k,k,G)}}else return;const g=new(md(c)?Sd:yd)(c,1);g.version=y;const u=s.get(p);u&&e.remove(u),s.set(p,g)}function h(p){const c=s.get(p);if(c){const m=p.index;m!==null&&c.version<m.version&&f(p)}else f(p);return s.get(p)}return{get:a,update:l,getWireframeAttribute:h}}function ey(n,e,t){let i;function r(c){i=c}let s,o;function a(c){s=c.type,o=c.bytesPerElement}function l(c,m){n.drawElements(i,m,s,c*o),t.update(m,i,1)}function f(c,m,d){d!==0&&(n.drawElementsInstanced(i,m,s,c*o,d),t.update(m,i,d))}function h(c,m,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,m,0,s,c,0,d);let g=0;for(let u=0;u<d;u++)g+=m[u];t.update(g,i,1)}function p(c,m,d,y){if(d===0)return;const g=e.get("WEBGL_multi_draw");if(g===null)for(let u=0;u<c.length;u++)f(c[u]/o,m[u],y[u]);else{g.multiDrawElementsInstancedWEBGL(i,m,0,s,c,0,y,0,d);let u=0;for(let b=0;b<d;b++)u+=m[b];for(let b=0;b<y.length;b++)t.update(u,i,y[b])}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=f,this.renderMultiDraw=h,this.renderMultiDrawInstances=p}function ty(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(s/3);break;case n.LINES:t.lines+=a*(s/2);break;case n.LINE_STRIP:t.lines+=a*(s-1);break;case n.LINE_LOOP:t.lines+=a*s;break;case n.POINTS:t.points+=a*s;break;default:break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function ny(n,e,t){const i=new WeakMap,r=new Dt;function s(o,a,l){const f=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,p=h!==void 0?h.length:0;let c=i.get(a);if(c===void 0||c.count!==p){let A=function(){q.dispose(),i.delete(a),a.removeEventListener("dispose",A)};var m=A;c!==void 0&&c.texture.dispose();const d=a.morphAttributes.position!==void 0,y=a.morphAttributes.normal!==void 0,g=a.morphAttributes.color!==void 0,u=a.morphAttributes.position||[],b=a.morphAttributes.normal||[],T=a.morphAttributes.color||[];let w=0;d===!0&&(w=1),y===!0&&(w=2),g===!0&&(w=3);let G=a.attributes.position.count*w,O=1;G>e.maxTextureSize&&(O=Math.ceil(G/e.maxTextureSize),G=e.maxTextureSize);const k=new Float32Array(G*O*4*p),q=new gd(k,G,O,p);q.type=li,q.needsUpdate=!0;const le=w*4;for(let D=0;D<p;D++){const re=u[D],ee=b[D],pe=T[D],oe=G*O*4*D;for(let ae=0;ae<re.count;ae++){const _e=ae*le;d===!0&&(r.fromBufferAttribute(re,ae),k[oe+_e+0]=r.x,k[oe+_e+1]=r.y,k[oe+_e+2]=r.z,k[oe+_e+3]=0),y===!0&&(r.fromBufferAttribute(ee,ae),k[oe+_e+4]=r.x,k[oe+_e+5]=r.y,k[oe+_e+6]=r.z,k[oe+_e+7]=0),g===!0&&(r.fromBufferAttribute(pe,ae),k[oe+_e+8]=r.x,k[oe+_e+9]=r.y,k[oe+_e+10]=r.z,k[oe+_e+11]=pe.itemSize===4?r.w:1)}}c={count:p,texture:q,size:new vt(G,O)},i.set(a,c),a.addEventListener("dispose",A)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let d=0;for(let g=0;g<f.length;g++)d+=f[g];const y=a.morphTargetsRelative?1:1-d;l.getUniforms().setValue(n,"morphTargetBaseInfluence",y),l.getUniforms().setValue(n,"morphTargetInfluences",f)}l.getUniforms().setValue(n,"morphTargetsTexture",c.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",c.size)}return{update:s}}function iy(n,e,t,i){let r=new WeakMap;function s(l){const f=i.render.frame,h=l.geometry,p=e.get(l,h);if(r.get(p)!==f&&(e.update(p),r.set(p,f)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==f&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,f))),l.isSkinnedMesh){const c=l.skeleton;r.get(c)!==f&&(c.update(),r.set(c,f))}return p}function o(){r=new WeakMap}function a(l){const f=l.target;f.removeEventListener("dispose",a),t.remove(f.instanceMatrix),f.instanceColor!==null&&t.remove(f.instanceColor)}return{update:s,dispose:o}}class Rd extends Wt{constructor(e,t,i,r,s,o,a,l,f,h=Br){if(h!==Br&&h!==Yr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&h===Br&&(i=hr),i===void 0&&h===Yr&&(i=qr),super(null,r,s,o,a,l,h,i,f),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:xn,this.minFilter=l!==void 0?l:xn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const Cd=new Wt,lu=new Rd(1,1),Pd=new gd,Dd=new Vg,Ld=new Ed,cu=[],fu=[],uu=new Float32Array(16),hu=new Float32Array(9),du=new Float32Array(4);function es(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=cu[r];if(s===void 0&&(s=new Float32Array(r),cu[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(s,a)}return s}function Nt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Ot(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function lo(n,e){let t=fu[e];t===void 0&&(t=new Int32Array(e),fu[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function ry(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function sy(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Nt(t,e))return;n.uniform2fv(this.addr,e),Ot(t,e)}}function ay(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Nt(t,e))return;n.uniform3fv(this.addr,e),Ot(t,e)}}function oy(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Nt(t,e))return;n.uniform4fv(this.addr,e),Ot(t,e)}}function ly(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Nt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Ot(t,e)}else{if(Nt(t,i))return;du.set(i),n.uniformMatrix2fv(this.addr,!1,du),Ot(t,i)}}function cy(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Nt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Ot(t,e)}else{if(Nt(t,i))return;hu.set(i),n.uniformMatrix3fv(this.addr,!1,hu),Ot(t,i)}}function fy(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Nt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Ot(t,e)}else{if(Nt(t,i))return;uu.set(i),n.uniformMatrix4fv(this.addr,!1,uu),Ot(t,i)}}function uy(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function hy(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Nt(t,e))return;n.uniform2iv(this.addr,e),Ot(t,e)}}function dy(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Nt(t,e))return;n.uniform3iv(this.addr,e),Ot(t,e)}}function py(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Nt(t,e))return;n.uniform4iv(this.addr,e),Ot(t,e)}}function my(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function _y(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Nt(t,e))return;n.uniform2uiv(this.addr,e),Ot(t,e)}}function gy(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Nt(t,e))return;n.uniform3uiv(this.addr,e),Ot(t,e)}}function vy(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Nt(t,e))return;n.uniform4uiv(this.addr,e),Ot(t,e)}}function xy(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?(lu.compareFunction=pd,s=lu):s=Cd,t.setTexture2D(e||s,r)}function yy(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||Dd,r)}function Sy(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||Ld,r)}function My(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||Pd,r)}function Ty(n){switch(n){case 5126:return ry;case 35664:return sy;case 35665:return ay;case 35666:return oy;case 35674:return ly;case 35675:return cy;case 35676:return fy;case 5124:case 35670:return uy;case 35667:case 35671:return hy;case 35668:case 35672:return dy;case 35669:case 35673:return py;case 5125:return my;case 36294:return _y;case 36295:return gy;case 36296:return vy;case 35678:case 36198:case 36298:case 36306:case 35682:return xy;case 35679:case 36299:case 36307:return yy;case 35680:case 36300:case 36308:case 36293:return Sy;case 36289:case 36303:case 36311:case 36292:return My}}function Ey(n,e){n.uniform1fv(this.addr,e)}function by(n,e){const t=es(e,this.size,2);n.uniform2fv(this.addr,t)}function wy(n,e){const t=es(e,this.size,3);n.uniform3fv(this.addr,t)}function Ay(n,e){const t=es(e,this.size,4);n.uniform4fv(this.addr,t)}function Ry(n,e){const t=es(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function Cy(n,e){const t=es(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function Py(n,e){const t=es(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function Dy(n,e){n.uniform1iv(this.addr,e)}function Ly(n,e){n.uniform2iv(this.addr,e)}function Iy(n,e){n.uniform3iv(this.addr,e)}function Uy(n,e){n.uniform4iv(this.addr,e)}function Ny(n,e){n.uniform1uiv(this.addr,e)}function Oy(n,e){n.uniform2uiv(this.addr,e)}function Fy(n,e){n.uniform3uiv(this.addr,e)}function By(n,e){n.uniform4uiv(this.addr,e)}function zy(n,e,t){const i=this.cache,r=e.length,s=lo(t,r);Nt(i,s)||(n.uniform1iv(this.addr,s),Ot(i,s));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||Cd,s[o])}function ky(n,e,t){const i=this.cache,r=e.length,s=lo(t,r);Nt(i,s)||(n.uniform1iv(this.addr,s),Ot(i,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||Dd,s[o])}function Hy(n,e,t){const i=this.cache,r=e.length,s=lo(t,r);Nt(i,s)||(n.uniform1iv(this.addr,s),Ot(i,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||Ld,s[o])}function Gy(n,e,t){const i=this.cache,r=e.length,s=lo(t,r);Nt(i,s)||(n.uniform1iv(this.addr,s),Ot(i,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||Pd,s[o])}function Vy(n){switch(n){case 5126:return Ey;case 35664:return by;case 35665:return wy;case 35666:return Ay;case 35674:return Ry;case 35675:return Cy;case 35676:return Py;case 5124:case 35670:return Dy;case 35667:case 35671:return Ly;case 35668:case 35672:return Iy;case 35669:case 35673:return Uy;case 5125:return Ny;case 36294:return Oy;case 36295:return Fy;case 36296:return By;case 35678:case 36198:case 36298:case 36306:case 35682:return zy;case 35679:case 36299:case 36307:return ky;case 35680:case 36300:case 36308:case 36293:return Hy;case 36289:case 36303:case 36311:case 36292:return Gy}}class Wy{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=Ty(t.type)}}class Xy{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Vy(t.type)}}class qy{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,t[a.id],i)}}}const el=/(\w+)(\])?(\[|\.)?/g;function pu(n,e){n.seq.push(e),n.map[e.id]=e}function Yy(n,e,t){const i=n.name,r=i.length;for(el.lastIndex=0;;){const s=el.exec(i),o=el.lastIndex;let a=s[1];const l=s[2]==="]",f=s[3];if(l&&(a=a|0),f===void 0||f==="["&&o+2===r){pu(t,f===void 0?new Wy(a,n,e):new Xy(a,n,e));break}else{let p=t.map[a];p===void 0&&(p=new qy(a),pu(t,p)),t=p}}}class Oa{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);Yy(s,o,this)}}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,o=t.length;s!==o;++s){const a=t[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in t&&i.push(o)}return i}}function mu(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const jy=37297;let $y=0;function Ky(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}function Zy(n){const e=gt.getPrimaries(gt.workingColorSpace),t=gt.getPrimaries(n);let i;switch(e===t?i="":e===qa&&t===Xa?i="LinearDisplayP3ToLinearSRGB":e===Xa&&t===qa&&(i="LinearSRGBToLinearDisplayP3"),n){case zi:case ao:return[i,"LinearTransferOETF"];case Bn:case Xc:return[i,"sRGBTransferOETF"];default:return[i,"LinearTransferOETF"]}}function _u(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=n.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+Ky(n.getShaderSource(e),o)}else return r}function Jy(n,e){const t=Zy(e);return`vec4 ${n}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function Qy(n,e){let t;switch(e){case pg:t="Linear";break;case mg:t="Reinhard";break;case _g:t="Cineon";break;case gg:t="ACESFilmic";break;case xg:t="AgX";break;case yg:t="Neutral";break;case vg:t="Custom";break;default:t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const ya=new me;function eS(){gt.getLuminanceCoefficients(ya);const n=ya.x.toFixed(4),e=ya.y.toFixed(4),t=ya.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function tS(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ms).join(`
`)}function nS(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function iS(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),o=s.name;let a=1;s.type===n.FLOAT_MAT2&&(a=2),s.type===n.FLOAT_MAT3&&(a=3),s.type===n.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function ms(n){return n!==""}function gu(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function vu(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const rS=/^[ \t]*#include +<([\w\d./]+)>/gm;function ac(n){return n.replace(rS,aS)}const sS=new Map;function aS(n,e){let t=lt[e];if(t===void 0){const i=sS.get(e);if(i!==void 0)t=lt[i];else throw new Error("Can not resolve #include <"+e+">")}return ac(t)}const oS=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function xu(n){return n.replace(oS,lS)}function lS(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function yu(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function cS(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===td?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===Y_?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===ii&&(e="SHADOWMAP_TYPE_VSM"),e}function fS(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Wr:case Xr:e="ENVMAP_TYPE_CUBE";break;case so:e="ENVMAP_TYPE_CUBE_UV";break}return e}function uS(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Xr:e="ENVMAP_MODE_REFRACTION";break}return e}function hS(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case nd:e="ENVMAP_BLENDING_MULTIPLY";break;case hg:e="ENVMAP_BLENDING_MIX";break;case dg:e="ENVMAP_BLENDING_ADD";break}return e}function dS(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function pS(n,e,t,i){const r=n.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=cS(t),f=fS(t),h=uS(t),p=hS(t),c=dS(t),m=tS(t),d=nS(s),y=r.createProgram();let g,u,b=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,d].filter(ms).join(`
`),g.length>0&&(g+=`
`),u=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,d].filter(ms).join(`
`),u.length>0&&(u+=`
`)):(g=[yu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,d,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ms).join(`
`),u=[yu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,d,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+f:"",t.envMap?"#define "+h:"",t.envMap?"#define "+p:"",c?"#define CUBEUV_TEXEL_WIDTH "+c.texelWidth:"",c?"#define CUBEUV_TEXEL_HEIGHT "+c.texelHeight:"",c?"#define CUBEUV_MAX_MIP "+c.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Ui?"#define TONE_MAPPING":"",t.toneMapping!==Ui?lt.tonemapping_pars_fragment:"",t.toneMapping!==Ui?Qy("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",lt.colorspace_pars_fragment,Jy("linearToOutputTexel",t.outputColorSpace),eS(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ms).join(`
`)),o=ac(o),o=gu(o,t),o=vu(o,t),a=ac(a),a=gu(a,t),a=vu(a,t),o=xu(o),a=xu(a),t.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,g=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,u=["#define varying in",t.glslVersion===Ff?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Ff?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+u);const T=b+g+o,w=b+u+a,G=mu(r,r.VERTEX_SHADER,T),O=mu(r,r.FRAGMENT_SHADER,w);r.attachShader(y,G),r.attachShader(y,O),t.index0AttributeName!==void 0?r.bindAttribLocation(y,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(y,0,"position"),r.linkProgram(y);function k(D){if(n.debug.checkShaderErrors){const re=r.getProgramInfoLog(y).trim(),ee=r.getShaderInfoLog(G).trim(),pe=r.getShaderInfoLog(O).trim();let oe=!0,ae=!0;if(r.getProgramParameter(y,r.LINK_STATUS)===!1)if(oe=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,y,G,O);else{const _e=_u(r,G,"vertex"),te=_u(r,O,"fragment")}else re!==""||(ee===""||pe==="")&&(ae=!1);ae&&(D.diagnostics={runnable:oe,programLog:re,vertexShader:{log:ee,prefix:g},fragmentShader:{log:pe,prefix:u}})}r.deleteShader(G),r.deleteShader(O),q=new Oa(r,y),le=iS(r,y)}let q;this.getUniforms=function(){return q===void 0&&k(this),q};let le;this.getAttributes=function(){return le===void 0&&k(this),le};let A=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return A===!1&&(A=r.getProgramParameter(y,jy)),A},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(y),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=$y++,this.cacheKey=e,this.usedTimes=1,this.program=y,this.vertexShader=G,this.fragmentShader=O,this}let mS=0;class _S{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new gS(e),t.set(e,i)),i}}class gS{constructor(e){this.id=mS++,this.code=e,this.usedTimes=0}}function vS(n,e,t,i,r,s,o){const a=new Yc,l=new _S,f=new Set,h=[],p=r.logarithmicDepthBuffer,c=r.reverseDepthBuffer,m=r.vertexTextures;let d=r.precision;const y={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(A){return f.add(A),A===0?"uv":`uv${A}`}function u(A,D,re,ee,pe){const oe=ee.fog,ae=pe.geometry,_e=A.isMeshStandardMaterial?ee.environment:null,te=(A.isMeshStandardMaterial?t:e).get(A.envMap||_e),Ne=te&&te.mapping===so?te.image.height:null,ze=y[A.type];A.precision!==null&&(d=r.getMaxPrecision(A.precision),A.precision);const He=ae.morphAttributes.position||ae.morphAttributes.normal||ae.morphAttributes.color,Qe=He!==void 0?He.length:0;let it=0;ae.morphAttributes.position!==void 0&&(it=1),ae.morphAttributes.normal!==void 0&&(it=2),ae.morphAttributes.color!==void 0&&(it=3);let Se,Pe,Oe,Z;if(ze){const Xt=kn[ze];Se=Xt.vertexShader,Pe=Xt.fragmentShader}else Se=A.vertexShader,Pe=A.fragmentShader,l.update(A),Oe=l.getVertexShaderID(A),Z=l.getFragmentShaderID(A);const we=n.getRenderTarget(),xe=pe.isInstancedMesh===!0,De=pe.isBatchedMesh===!0,qe=!!A.map,We=!!A.matcap,E=!!te,H=!!A.aoMap,V=!!A.lightMap,de=!!A.bumpMap,ie=!!A.normalMap,ye=!!A.displacementMap,ve=!!A.emissiveMap,_=!!A.metalnessMap,v=!!A.roughnessMap,M=A.anisotropy>0,C=A.clearcoat>0,U=A.dispersion>0,F=A.iridescence>0,j=A.sheen>0,W=A.transmission>0,J=M&&!!A.anisotropyMap,Te=C&&!!A.clearcoatMap,ne=C&&!!A.clearcoatNormalMap,ge=C&&!!A.clearcoatRoughnessMap,Fe=F&&!!A.iridescenceMap,Le=F&&!!A.iridescenceThicknessMap,Ue=j&&!!A.sheenColorMap,$e=j&&!!A.sheenRoughnessMap,Ye=!!A.specularMap,tt=!!A.specularColorMap,$=!!A.specularIntensityMap,Xe=W&&!!A.transmissionMap,fe=W&&!!A.thicknessMap,Re=!!A.gradientMap,Ge=!!A.alphaMap,Be=A.alphaTest>0,ht=!!A.alphaHash,Mt=!!A.extensions;let Tt=Ui;A.toneMapped&&(we===null||we.isXRRenderTarget===!0)&&(Tt=n.toneMapping);const dt={shaderID:ze,shaderType:A.type,shaderName:A.name,vertexShader:Se,fragmentShader:Pe,defines:A.defines,customVertexShaderID:Oe,customFragmentShaderID:Z,isRawShaderMaterial:A.isRawShaderMaterial===!0,glslVersion:A.glslVersion,precision:d,batching:De,batchingColor:De&&pe._colorsTexture!==null,instancing:xe,instancingColor:xe&&pe.instanceColor!==null,instancingMorph:xe&&pe.morphTexture!==null,supportsVertexTextures:m,outputColorSpace:we===null?n.outputColorSpace:we.isXRRenderTarget===!0?we.texture.colorSpace:zi,alphaToCoverage:!!A.alphaToCoverage,map:qe,matcap:We,envMap:E,envMapMode:E&&te.mapping,envMapCubeUVHeight:Ne,aoMap:H,lightMap:V,bumpMap:de,normalMap:ie,displacementMap:m&&ye,emissiveMap:ve,normalMapObjectSpace:ie&&A.normalMapType===bg,normalMapTangentSpace:ie&&A.normalMapType===Eg,metalnessMap:_,roughnessMap:v,anisotropy:M,anisotropyMap:J,clearcoat:C,clearcoatMap:Te,clearcoatNormalMap:ne,clearcoatRoughnessMap:ge,dispersion:U,iridescence:F,iridescenceMap:Fe,iridescenceThicknessMap:Le,sheen:j,sheenColorMap:Ue,sheenRoughnessMap:$e,specularMap:Ye,specularColorMap:tt,specularIntensityMap:$,transmission:W,transmissionMap:Xe,thicknessMap:fe,gradientMap:Re,opaque:A.transparent===!1&&A.blending===lr&&A.alphaToCoverage===!1,alphaMap:Ge,alphaTest:Be,alphaHash:ht,combine:A.combine,mapUv:qe&&g(A.map.channel),aoMapUv:H&&g(A.aoMap.channel),lightMapUv:V&&g(A.lightMap.channel),bumpMapUv:de&&g(A.bumpMap.channel),normalMapUv:ie&&g(A.normalMap.channel),displacementMapUv:ye&&g(A.displacementMap.channel),emissiveMapUv:ve&&g(A.emissiveMap.channel),metalnessMapUv:_&&g(A.metalnessMap.channel),roughnessMapUv:v&&g(A.roughnessMap.channel),anisotropyMapUv:J&&g(A.anisotropyMap.channel),clearcoatMapUv:Te&&g(A.clearcoatMap.channel),clearcoatNormalMapUv:ne&&g(A.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ge&&g(A.clearcoatRoughnessMap.channel),iridescenceMapUv:Fe&&g(A.iridescenceMap.channel),iridescenceThicknessMapUv:Le&&g(A.iridescenceThicknessMap.channel),sheenColorMapUv:Ue&&g(A.sheenColorMap.channel),sheenRoughnessMapUv:$e&&g(A.sheenRoughnessMap.channel),specularMapUv:Ye&&g(A.specularMap.channel),specularColorMapUv:tt&&g(A.specularColorMap.channel),specularIntensityMapUv:$&&g(A.specularIntensityMap.channel),transmissionMapUv:Xe&&g(A.transmissionMap.channel),thicknessMapUv:fe&&g(A.thicknessMap.channel),alphaMapUv:Ge&&g(A.alphaMap.channel),vertexTangents:!!ae.attributes.tangent&&(ie||M),vertexColors:A.vertexColors,vertexAlphas:A.vertexColors===!0&&!!ae.attributes.color&&ae.attributes.color.itemSize===4,pointsUvs:pe.isPoints===!0&&!!ae.attributes.uv&&(qe||Ge),fog:!!oe,useFog:A.fog===!0,fogExp2:!!oe&&oe.isFogExp2,flatShading:A.flatShading===!0,sizeAttenuation:A.sizeAttenuation===!0,logarithmicDepthBuffer:p,reverseDepthBuffer:c,skinning:pe.isSkinnedMesh===!0,morphTargets:ae.morphAttributes.position!==void 0,morphNormals:ae.morphAttributes.normal!==void 0,morphColors:ae.morphAttributes.color!==void 0,morphTargetsCount:Qe,morphTextureStride:it,numDirLights:D.directional.length,numPointLights:D.point.length,numSpotLights:D.spot.length,numSpotLightMaps:D.spotLightMap.length,numRectAreaLights:D.rectArea.length,numHemiLights:D.hemi.length,numDirLightShadows:D.directionalShadowMap.length,numPointLightShadows:D.pointShadowMap.length,numSpotLightShadows:D.spotShadowMap.length,numSpotLightShadowsWithMaps:D.numSpotLightShadowsWithMaps,numLightProbes:D.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:A.dithering,shadowMapEnabled:n.shadowMap.enabled&&re.length>0,shadowMapType:n.shadowMap.type,toneMapping:Tt,decodeVideoTexture:qe&&A.map.isVideoTexture===!0&&gt.getTransfer(A.map.colorSpace)===wt,premultipliedAlpha:A.premultipliedAlpha,doubleSided:A.side===oi,flipSided:A.side===cn,useDepthPacking:A.depthPacking>=0,depthPacking:A.depthPacking||0,index0AttributeName:A.index0AttributeName,extensionClipCullDistance:Mt&&A.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Mt&&A.extensions.multiDraw===!0||De)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:A.customProgramCacheKey()};return dt.vertexUv1s=f.has(1),dt.vertexUv2s=f.has(2),dt.vertexUv3s=f.has(3),f.clear(),dt}function b(A){const D=[];if(A.shaderID?D.push(A.shaderID):(D.push(A.customVertexShaderID),D.push(A.customFragmentShaderID)),A.defines!==void 0)for(const re in A.defines)D.push(re),D.push(A.defines[re]);return A.isRawShaderMaterial===!1&&(T(D,A),w(D,A),D.push(n.outputColorSpace)),D.push(A.customProgramCacheKey),D.join()}function T(A,D){A.push(D.precision),A.push(D.outputColorSpace),A.push(D.envMapMode),A.push(D.envMapCubeUVHeight),A.push(D.mapUv),A.push(D.alphaMapUv),A.push(D.lightMapUv),A.push(D.aoMapUv),A.push(D.bumpMapUv),A.push(D.normalMapUv),A.push(D.displacementMapUv),A.push(D.emissiveMapUv),A.push(D.metalnessMapUv),A.push(D.roughnessMapUv),A.push(D.anisotropyMapUv),A.push(D.clearcoatMapUv),A.push(D.clearcoatNormalMapUv),A.push(D.clearcoatRoughnessMapUv),A.push(D.iridescenceMapUv),A.push(D.iridescenceThicknessMapUv),A.push(D.sheenColorMapUv),A.push(D.sheenRoughnessMapUv),A.push(D.specularMapUv),A.push(D.specularColorMapUv),A.push(D.specularIntensityMapUv),A.push(D.transmissionMapUv),A.push(D.thicknessMapUv),A.push(D.combine),A.push(D.fogExp2),A.push(D.sizeAttenuation),A.push(D.morphTargetsCount),A.push(D.morphAttributeCount),A.push(D.numDirLights),A.push(D.numPointLights),A.push(D.numSpotLights),A.push(D.numSpotLightMaps),A.push(D.numHemiLights),A.push(D.numRectAreaLights),A.push(D.numDirLightShadows),A.push(D.numPointLightShadows),A.push(D.numSpotLightShadows),A.push(D.numSpotLightShadowsWithMaps),A.push(D.numLightProbes),A.push(D.shadowMapType),A.push(D.toneMapping),A.push(D.numClippingPlanes),A.push(D.numClipIntersection),A.push(D.depthPacking)}function w(A,D){a.disableAll(),D.supportsVertexTextures&&a.enable(0),D.instancing&&a.enable(1),D.instancingColor&&a.enable(2),D.instancingMorph&&a.enable(3),D.matcap&&a.enable(4),D.envMap&&a.enable(5),D.normalMapObjectSpace&&a.enable(6),D.normalMapTangentSpace&&a.enable(7),D.clearcoat&&a.enable(8),D.iridescence&&a.enable(9),D.alphaTest&&a.enable(10),D.vertexColors&&a.enable(11),D.vertexAlphas&&a.enable(12),D.vertexUv1s&&a.enable(13),D.vertexUv2s&&a.enable(14),D.vertexUv3s&&a.enable(15),D.vertexTangents&&a.enable(16),D.anisotropy&&a.enable(17),D.alphaHash&&a.enable(18),D.batching&&a.enable(19),D.dispersion&&a.enable(20),D.batchingColor&&a.enable(21),A.push(a.mask),a.disableAll(),D.fog&&a.enable(0),D.useFog&&a.enable(1),D.flatShading&&a.enable(2),D.logarithmicDepthBuffer&&a.enable(3),D.reverseDepthBuffer&&a.enable(4),D.skinning&&a.enable(5),D.morphTargets&&a.enable(6),D.morphNormals&&a.enable(7),D.morphColors&&a.enable(8),D.premultipliedAlpha&&a.enable(9),D.shadowMapEnabled&&a.enable(10),D.doubleSided&&a.enable(11),D.flipSided&&a.enable(12),D.useDepthPacking&&a.enable(13),D.dithering&&a.enable(14),D.transmission&&a.enable(15),D.sheen&&a.enable(16),D.opaque&&a.enable(17),D.pointsUvs&&a.enable(18),D.decodeVideoTexture&&a.enable(19),D.alphaToCoverage&&a.enable(20),A.push(a.mask)}function G(A){const D=y[A.type];let re;if(D){const ee=kn[D];re=t0.clone(ee.uniforms)}else re=A.uniforms;return re}function O(A,D){let re;for(let ee=0,pe=h.length;ee<pe;ee++){const oe=h[ee];if(oe.cacheKey===D){re=oe,++re.usedTimes;break}}return re===void 0&&(re=new pS(n,D,A,s),h.push(re)),re}function k(A){if(--A.usedTimes===0){const D=h.indexOf(A);h[D]=h[h.length-1],h.pop(),A.destroy()}}function q(A){l.remove(A)}function le(){l.dispose()}return{getParameters:u,getProgramCacheKey:b,getUniforms:G,acquireProgram:O,releaseProgram:k,releaseShaderCache:q,programs:h,dispose:le}}function xS(){let n=new WeakMap;function e(o){return n.has(o)}function t(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function r(o,a,l){n.get(o)[a]=l}function s(){n=new WeakMap}return{has:e,get:t,remove:i,update:r,dispose:s}}function yS(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function Su(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Mu(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function o(p,c,m,d,y,g){let u=n[e];return u===void 0?(u={id:p.id,object:p,geometry:c,material:m,groupOrder:d,renderOrder:p.renderOrder,z:y,group:g},n[e]=u):(u.id=p.id,u.object=p,u.geometry=c,u.material=m,u.groupOrder=d,u.renderOrder=p.renderOrder,u.z=y,u.group=g),e++,u}function a(p,c,m,d,y,g){const u=o(p,c,m,d,y,g);m.transmission>0?i.push(u):m.transparent===!0?r.push(u):t.push(u)}function l(p,c,m,d,y,g){const u=o(p,c,m,d,y,g);m.transmission>0?i.unshift(u):m.transparent===!0?r.unshift(u):t.unshift(u)}function f(p,c){t.length>1&&t.sort(p||yS),i.length>1&&i.sort(c||Su),r.length>1&&r.sort(c||Su)}function h(){for(let p=e,c=n.length;p<c;p++){const m=n[p];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:h,sort:f}}function SS(){let n=new WeakMap;function e(i,r){const s=n.get(i);let o;return s===void 0?(o=new Mu,n.set(i,[o])):r>=s.length?(o=new Mu,s.push(o)):o=s[r],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function MS(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new me,color:new yt};break;case"SpotLight":t={position:new me,direction:new me,color:new yt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new me,color:new yt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new me,skyColor:new yt,groundColor:new yt};break;case"RectAreaLight":t={color:new yt,position:new me,halfWidth:new me,halfHeight:new me};break}return n[e.id]=t,t}}}function TS(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new vt};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new vt};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new vt,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let ES=0;function bS(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function wS(n){const e=new MS,t=TS(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let f=0;f<9;f++)i.probe.push(new me);const r=new me,s=new Lt,o=new Lt;function a(f){let h=0,p=0,c=0;for(let le=0;le<9;le++)i.probe[le].set(0,0,0);let m=0,d=0,y=0,g=0,u=0,b=0,T=0,w=0,G=0,O=0,k=0;f.sort(bS);for(let le=0,A=f.length;le<A;le++){const D=f[le],re=D.color,ee=D.intensity,pe=D.distance,oe=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)h+=re.r*ee,p+=re.g*ee,c+=re.b*ee;else if(D.isLightProbe){for(let ae=0;ae<9;ae++)i.probe[ae].addScaledVector(D.sh.coefficients[ae],ee);k++}else if(D.isDirectionalLight){const ae=e.get(D);if(ae.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){const _e=D.shadow,te=t.get(D);te.shadowIntensity=_e.intensity,te.shadowBias=_e.bias,te.shadowNormalBias=_e.normalBias,te.shadowRadius=_e.radius,te.shadowMapSize=_e.mapSize,i.directionalShadow[m]=te,i.directionalShadowMap[m]=oe,i.directionalShadowMatrix[m]=D.shadow.matrix,b++}i.directional[m]=ae,m++}else if(D.isSpotLight){const ae=e.get(D);ae.position.setFromMatrixPosition(D.matrixWorld),ae.color.copy(re).multiplyScalar(ee),ae.distance=pe,ae.coneCos=Math.cos(D.angle),ae.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),ae.decay=D.decay,i.spot[y]=ae;const _e=D.shadow;if(D.map&&(i.spotLightMap[G]=D.map,G++,_e.updateMatrices(D),D.castShadow&&O++),i.spotLightMatrix[y]=_e.matrix,D.castShadow){const te=t.get(D);te.shadowIntensity=_e.intensity,te.shadowBias=_e.bias,te.shadowNormalBias=_e.normalBias,te.shadowRadius=_e.radius,te.shadowMapSize=_e.mapSize,i.spotShadow[y]=te,i.spotShadowMap[y]=oe,w++}y++}else if(D.isRectAreaLight){const ae=e.get(D);ae.color.copy(re).multiplyScalar(ee),ae.halfWidth.set(D.width*.5,0,0),ae.halfHeight.set(0,D.height*.5,0),i.rectArea[g]=ae,g++}else if(D.isPointLight){const ae=e.get(D);if(ae.color.copy(D.color).multiplyScalar(D.intensity),ae.distance=D.distance,ae.decay=D.decay,D.castShadow){const _e=D.shadow,te=t.get(D);te.shadowIntensity=_e.intensity,te.shadowBias=_e.bias,te.shadowNormalBias=_e.normalBias,te.shadowRadius=_e.radius,te.shadowMapSize=_e.mapSize,te.shadowCameraNear=_e.camera.near,te.shadowCameraFar=_e.camera.far,i.pointShadow[d]=te,i.pointShadowMap[d]=oe,i.pointShadowMatrix[d]=D.shadow.matrix,T++}i.point[d]=ae,d++}else if(D.isHemisphereLight){const ae=e.get(D);ae.skyColor.copy(D.color).multiplyScalar(ee),ae.groundColor.copy(D.groundColor).multiplyScalar(ee),i.hemi[u]=ae,u++}}g>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ke.LTC_FLOAT_1,i.rectAreaLTC2=ke.LTC_FLOAT_2):(i.rectAreaLTC1=ke.LTC_HALF_1,i.rectAreaLTC2=ke.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=p,i.ambient[2]=c;const q=i.hash;(q.directionalLength!==m||q.pointLength!==d||q.spotLength!==y||q.rectAreaLength!==g||q.hemiLength!==u||q.numDirectionalShadows!==b||q.numPointShadows!==T||q.numSpotShadows!==w||q.numSpotMaps!==G||q.numLightProbes!==k)&&(i.directional.length=m,i.spot.length=y,i.rectArea.length=g,i.point.length=d,i.hemi.length=u,i.directionalShadow.length=b,i.directionalShadowMap.length=b,i.pointShadow.length=T,i.pointShadowMap.length=T,i.spotShadow.length=w,i.spotShadowMap.length=w,i.directionalShadowMatrix.length=b,i.pointShadowMatrix.length=T,i.spotLightMatrix.length=w+G-O,i.spotLightMap.length=G,i.numSpotLightShadowsWithMaps=O,i.numLightProbes=k,q.directionalLength=m,q.pointLength=d,q.spotLength=y,q.rectAreaLength=g,q.hemiLength=u,q.numDirectionalShadows=b,q.numPointShadows=T,q.numSpotShadows=w,q.numSpotMaps=G,q.numLightProbes=k,i.version=ES++)}function l(f,h){let p=0,c=0,m=0,d=0,y=0;const g=h.matrixWorldInverse;for(let u=0,b=f.length;u<b;u++){const T=f[u];if(T.isDirectionalLight){const w=i.directional[p];w.direction.setFromMatrixPosition(T.matrixWorld),r.setFromMatrixPosition(T.target.matrixWorld),w.direction.sub(r),w.direction.transformDirection(g),p++}else if(T.isSpotLight){const w=i.spot[m];w.position.setFromMatrixPosition(T.matrixWorld),w.position.applyMatrix4(g),w.direction.setFromMatrixPosition(T.matrixWorld),r.setFromMatrixPosition(T.target.matrixWorld),w.direction.sub(r),w.direction.transformDirection(g),m++}else if(T.isRectAreaLight){const w=i.rectArea[d];w.position.setFromMatrixPosition(T.matrixWorld),w.position.applyMatrix4(g),o.identity(),s.copy(T.matrixWorld),s.premultiply(g),o.extractRotation(s),w.halfWidth.set(T.width*.5,0,0),w.halfHeight.set(0,T.height*.5,0),w.halfWidth.applyMatrix4(o),w.halfHeight.applyMatrix4(o),d++}else if(T.isPointLight){const w=i.point[c];w.position.setFromMatrixPosition(T.matrixWorld),w.position.applyMatrix4(g),c++}else if(T.isHemisphereLight){const w=i.hemi[y];w.direction.setFromMatrixPosition(T.matrixWorld),w.direction.transformDirection(g),y++}}}return{setup:a,setupView:l,state:i}}function Tu(n){const e=new wS(n),t=[],i=[];function r(h){f.camera=h,t.length=0,i.length=0}function s(h){t.push(h)}function o(h){i.push(h)}function a(){e.setup(t)}function l(h){e.setupView(t,h)}const f={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:f,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function AS(n){let e=new WeakMap;function t(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new Tu(n),e.set(r,[a])):s>=o.length?(a=new Tu(n),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:t,dispose:i}}class RS extends oo{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Mg,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class CS extends oo{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const PS=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,DS=`uniform sampler2D shadow_pass;
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
}`;function LS(n,e,t){let i=new bd;const r=new vt,s=new vt,o=new Dt,a=new RS({depthPacking:Tg}),l=new CS,f={},h=t.maxTextureSize,p={[Ni]:cn,[cn]:Ni,[oi]:oi},c=new Wn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new vt},radius:{value:4}},vertexShader:PS,fragmentShader:DS}),m=c.clone();m.defines.HORIZONTAL_PASS=1;const d=new ki;d.setAttribute("position",new un(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const y=new yn(d,c),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=td;let u=this.type;this.render=function(O,k,q){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||O.length===0)return;const le=n.getRenderTarget(),A=n.getActiveCubeFace(),D=n.getActiveMipmapLevel(),re=n.state;re.setBlending(Ii),re.buffers.color.setClear(1,1,1,1),re.buffers.depth.setTest(!0),re.setScissorTest(!1);const ee=u!==ii&&this.type===ii,pe=u===ii&&this.type!==ii;for(let oe=0,ae=O.length;oe<ae;oe++){const _e=O[oe],te=_e.shadow;if(te===void 0||te.autoUpdate===!1&&te.needsUpdate===!1)continue;r.copy(te.mapSize);const Ne=te.getFrameExtents();if(r.multiply(Ne),s.copy(te.mapSize),(r.x>h||r.y>h)&&(r.x>h&&(s.x=Math.floor(h/Ne.x),r.x=s.x*Ne.x,te.mapSize.x=s.x),r.y>h&&(s.y=Math.floor(h/Ne.y),r.y=s.y*Ne.y,te.mapSize.y=s.y)),te.map===null||ee===!0||pe===!0){const He=this.type!==ii?{minFilter:xn,magFilter:xn}:{};te.map!==null&&te.map.dispose(),te.map=new dr(r.x,r.y,He),te.map.texture.name=_e.name+".shadowMap",te.camera.updateProjectionMatrix()}n.setRenderTarget(te.map),n.clear();const ze=te.getViewportCount();for(let He=0;He<ze;He++){const Qe=te.getViewport(He);o.set(s.x*Qe.x,s.y*Qe.y,s.x*Qe.z,s.y*Qe.w),re.viewport(o),te.updateMatrices(_e,He),i=te.getFrustum(),w(k,q,te.camera,_e,this.type)}te.isPointLightShadow!==!0&&this.type===ii&&b(te,q),te.needsUpdate=!1}u=this.type,g.needsUpdate=!1,n.setRenderTarget(le,A,D)};function b(O,k){const q=e.update(y);c.defines.VSM_SAMPLES!==O.blurSamples&&(c.defines.VSM_SAMPLES=O.blurSamples,m.defines.VSM_SAMPLES=O.blurSamples,c.needsUpdate=!0,m.needsUpdate=!0),O.mapPass===null&&(O.mapPass=new dr(r.x,r.y)),c.uniforms.shadow_pass.value=O.map.texture,c.uniforms.resolution.value=O.mapSize,c.uniforms.radius.value=O.radius,n.setRenderTarget(O.mapPass),n.clear(),n.renderBufferDirect(k,null,q,c,y,null),m.uniforms.shadow_pass.value=O.mapPass.texture,m.uniforms.resolution.value=O.mapSize,m.uniforms.radius.value=O.radius,n.setRenderTarget(O.map),n.clear(),n.renderBufferDirect(k,null,q,m,y,null)}function T(O,k,q,le){let A=null;const D=q.isPointLight===!0?O.customDistanceMaterial:O.customDepthMaterial;if(D!==void 0)A=D;else if(A=q.isPointLight===!0?l:a,n.localClippingEnabled&&k.clipShadows===!0&&Array.isArray(k.clippingPlanes)&&k.clippingPlanes.length!==0||k.displacementMap&&k.displacementScale!==0||k.alphaMap&&k.alphaTest>0||k.map&&k.alphaTest>0){const re=A.uuid,ee=k.uuid;let pe=f[re];pe===void 0&&(pe={},f[re]=pe);let oe=pe[ee];oe===void 0&&(oe=A.clone(),pe[ee]=oe,k.addEventListener("dispose",G)),A=oe}if(A.visible=k.visible,A.wireframe=k.wireframe,le===ii?A.side=k.shadowSide!==null?k.shadowSide:k.side:A.side=k.shadowSide!==null?k.shadowSide:p[k.side],A.alphaMap=k.alphaMap,A.alphaTest=k.alphaTest,A.map=k.map,A.clipShadows=k.clipShadows,A.clippingPlanes=k.clippingPlanes,A.clipIntersection=k.clipIntersection,A.displacementMap=k.displacementMap,A.displacementScale=k.displacementScale,A.displacementBias=k.displacementBias,A.wireframeLinewidth=k.wireframeLinewidth,A.linewidth=k.linewidth,q.isPointLight===!0&&A.isMeshDistanceMaterial===!0){const re=n.properties.get(A);re.light=q}return A}function w(O,k,q,le,A){if(O.visible===!1)return;if(O.layers.test(k.layers)&&(O.isMesh||O.isLine||O.isPoints)&&(O.castShadow||O.receiveShadow&&A===ii)&&(!O.frustumCulled||i.intersectsObject(O))){O.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,O.matrixWorld);const ee=e.update(O),pe=O.material;if(Array.isArray(pe)){const oe=ee.groups;for(let ae=0,_e=oe.length;ae<_e;ae++){const te=oe[ae],Ne=pe[te.materialIndex];if(Ne&&Ne.visible){const ze=T(O,Ne,le,A);O.onBeforeShadow(n,O,k,q,ee,ze,te),n.renderBufferDirect(q,null,ee,ze,O,te),O.onAfterShadow(n,O,k,q,ee,ze,te)}}}else if(pe.visible){const oe=T(O,pe,le,A);O.onBeforeShadow(n,O,k,q,ee,oe,null),n.renderBufferDirect(q,null,ee,oe,O,null),O.onAfterShadow(n,O,k,q,ee,oe,null)}}const re=O.children;for(let ee=0,pe=re.length;ee<pe;ee++)w(re[ee],k,q,le,A)}function G(O){O.target.removeEventListener("dispose",G);for(const q in f){const le=f[q],A=O.target.uuid;A in le&&(le[A].dispose(),delete le[A])}}}const IS={[Ml]:Tl,[El]:Al,[bl]:Rl,[Vr]:wl,[Tl]:Ml,[Al]:El,[Rl]:bl,[wl]:Vr};function US(n){function e(){let $=!1;const Xe=new Dt;let fe=null;const Re=new Dt(0,0,0,0);return{setMask:function(Ge){fe!==Ge&&!$&&(n.colorMask(Ge,Ge,Ge,Ge),fe=Ge)},setLocked:function(Ge){$=Ge},setClear:function(Ge,Be,ht,Mt,Tt){Tt===!0&&(Ge*=Mt,Be*=Mt,ht*=Mt),Xe.set(Ge,Be,ht,Mt),Re.equals(Xe)===!1&&(n.clearColor(Ge,Be,ht,Mt),Re.copy(Xe))},reset:function(){$=!1,fe=null,Re.set(-1,0,0,0)}}}function t(){let $=!1,Xe=!1,fe=null,Re=null,Ge=null;return{setReversed:function(Be){Xe=Be},setTest:function(Be){Be?Oe(n.DEPTH_TEST):Z(n.DEPTH_TEST)},setMask:function(Be){fe!==Be&&!$&&(n.depthMask(Be),fe=Be)},setFunc:function(Be){if(Xe&&(Be=IS[Be]),Re!==Be){switch(Be){case Ml:n.depthFunc(n.NEVER);break;case Tl:n.depthFunc(n.ALWAYS);break;case El:n.depthFunc(n.LESS);break;case Vr:n.depthFunc(n.LEQUAL);break;case bl:n.depthFunc(n.EQUAL);break;case wl:n.depthFunc(n.GEQUAL);break;case Al:n.depthFunc(n.GREATER);break;case Rl:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Re=Be}},setLocked:function(Be){$=Be},setClear:function(Be){Ge!==Be&&(n.clearDepth(Be),Ge=Be)},reset:function(){$=!1,fe=null,Re=null,Ge=null}}}function i(){let $=!1,Xe=null,fe=null,Re=null,Ge=null,Be=null,ht=null,Mt=null,Tt=null;return{setTest:function(dt){$||(dt?Oe(n.STENCIL_TEST):Z(n.STENCIL_TEST))},setMask:function(dt){Xe!==dt&&!$&&(n.stencilMask(dt),Xe=dt)},setFunc:function(dt,Xt,Ft){(fe!==dt||Re!==Xt||Ge!==Ft)&&(n.stencilFunc(dt,Xt,Ft),fe=dt,Re=Xt,Ge=Ft)},setOp:function(dt,Xt,Ft){(Be!==dt||ht!==Xt||Mt!==Ft)&&(n.stencilOp(dt,Xt,Ft),Be=dt,ht=Xt,Mt=Ft)},setLocked:function(dt){$=dt},setClear:function(dt){Tt!==dt&&(n.clearStencil(dt),Tt=dt)},reset:function(){$=!1,Xe=null,fe=null,Re=null,Ge=null,Be=null,ht=null,Mt=null,Tt=null}}}const r=new e,s=new t,o=new i,a=new WeakMap,l=new WeakMap;let f={},h={},p=new WeakMap,c=[],m=null,d=!1,y=null,g=null,u=null,b=null,T=null,w=null,G=null,O=new yt(0,0,0),k=0,q=!1,le=null,A=null,D=null,re=null,ee=null;const pe=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let oe=!1,ae=0;const _e=n.getParameter(n.VERSION);_e.indexOf("WebGL")!==-1?(ae=parseFloat(/^WebGL (\d)/.exec(_e)[1]),oe=ae>=1):_e.indexOf("OpenGL ES")!==-1&&(ae=parseFloat(/^OpenGL ES (\d)/.exec(_e)[1]),oe=ae>=2);let te=null,Ne={};const ze=n.getParameter(n.SCISSOR_BOX),He=n.getParameter(n.VIEWPORT),Qe=new Dt().fromArray(ze),it=new Dt().fromArray(He);function Se($,Xe,fe,Re){const Ge=new Uint8Array(4),Be=n.createTexture();n.bindTexture($,Be),n.texParameteri($,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri($,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let ht=0;ht<fe;ht++)$===n.TEXTURE_3D||$===n.TEXTURE_2D_ARRAY?n.texImage3D(Xe,0,n.RGBA,1,1,Re,0,n.RGBA,n.UNSIGNED_BYTE,Ge):n.texImage2D(Xe+ht,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Ge);return Be}const Pe={};Pe[n.TEXTURE_2D]=Se(n.TEXTURE_2D,n.TEXTURE_2D,1),Pe[n.TEXTURE_CUBE_MAP]=Se(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),Pe[n.TEXTURE_2D_ARRAY]=Se(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Pe[n.TEXTURE_3D]=Se(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),s.setClear(1),o.setClear(0),Oe(n.DEPTH_TEST),s.setFunc(Vr),V(!1),de(Df),Oe(n.CULL_FACE),E(Ii);function Oe($){f[$]!==!0&&(n.enable($),f[$]=!0)}function Z($){f[$]!==!1&&(n.disable($),f[$]=!1)}function we($,Xe){return h[$]!==Xe?(n.bindFramebuffer($,Xe),h[$]=Xe,$===n.DRAW_FRAMEBUFFER&&(h[n.FRAMEBUFFER]=Xe),$===n.FRAMEBUFFER&&(h[n.DRAW_FRAMEBUFFER]=Xe),!0):!1}function xe($,Xe){let fe=c,Re=!1;if($){fe=p.get(Xe),fe===void 0&&(fe=[],p.set(Xe,fe));const Ge=$.textures;if(fe.length!==Ge.length||fe[0]!==n.COLOR_ATTACHMENT0){for(let Be=0,ht=Ge.length;Be<ht;Be++)fe[Be]=n.COLOR_ATTACHMENT0+Be;fe.length=Ge.length,Re=!0}}else fe[0]!==n.BACK&&(fe[0]=n.BACK,Re=!0);Re&&n.drawBuffers(fe)}function De($){return m!==$?(n.useProgram($),m=$,!0):!1}const qe={[tr]:n.FUNC_ADD,[$_]:n.FUNC_SUBTRACT,[K_]:n.FUNC_REVERSE_SUBTRACT};qe[Z_]=n.MIN,qe[J_]=n.MAX;const We={[Q_]:n.ZERO,[eg]:n.ONE,[tg]:n.SRC_COLOR,[yl]:n.SRC_ALPHA,[og]:n.SRC_ALPHA_SATURATE,[sg]:n.DST_COLOR,[ig]:n.DST_ALPHA,[ng]:n.ONE_MINUS_SRC_COLOR,[Sl]:n.ONE_MINUS_SRC_ALPHA,[ag]:n.ONE_MINUS_DST_COLOR,[rg]:n.ONE_MINUS_DST_ALPHA,[lg]:n.CONSTANT_COLOR,[cg]:n.ONE_MINUS_CONSTANT_COLOR,[fg]:n.CONSTANT_ALPHA,[ug]:n.ONE_MINUS_CONSTANT_ALPHA};function E($,Xe,fe,Re,Ge,Be,ht,Mt,Tt,dt){if($===Ii){d===!0&&(Z(n.BLEND),d=!1);return}if(d===!1&&(Oe(n.BLEND),d=!0),$!==j_){if($!==y||dt!==q){if((g!==tr||T!==tr)&&(n.blendEquation(n.FUNC_ADD),g=tr,T=tr),dt)switch($){case lr:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Lf:n.blendFunc(n.ONE,n.ONE);break;case If:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Uf:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:break}else switch($){case lr:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Lf:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case If:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Uf:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:break}u=null,b=null,w=null,G=null,O.set(0,0,0),k=0,y=$,q=dt}return}Ge=Ge||Xe,Be=Be||fe,ht=ht||Re,(Xe!==g||Ge!==T)&&(n.blendEquationSeparate(qe[Xe],qe[Ge]),g=Xe,T=Ge),(fe!==u||Re!==b||Be!==w||ht!==G)&&(n.blendFuncSeparate(We[fe],We[Re],We[Be],We[ht]),u=fe,b=Re,w=Be,G=ht),(Mt.equals(O)===!1||Tt!==k)&&(n.blendColor(Mt.r,Mt.g,Mt.b,Tt),O.copy(Mt),k=Tt),y=$,q=!1}function H($,Xe){$.side===oi?Z(n.CULL_FACE):Oe(n.CULL_FACE);let fe=$.side===cn;Xe&&(fe=!fe),V(fe),$.blending===lr&&$.transparent===!1?E(Ii):E($.blending,$.blendEquation,$.blendSrc,$.blendDst,$.blendEquationAlpha,$.blendSrcAlpha,$.blendDstAlpha,$.blendColor,$.blendAlpha,$.premultipliedAlpha),s.setFunc($.depthFunc),s.setTest($.depthTest),s.setMask($.depthWrite),r.setMask($.colorWrite);const Re=$.stencilWrite;o.setTest(Re),Re&&(o.setMask($.stencilWriteMask),o.setFunc($.stencilFunc,$.stencilRef,$.stencilFuncMask),o.setOp($.stencilFail,$.stencilZFail,$.stencilZPass)),ye($.polygonOffset,$.polygonOffsetFactor,$.polygonOffsetUnits),$.alphaToCoverage===!0?Oe(n.SAMPLE_ALPHA_TO_COVERAGE):Z(n.SAMPLE_ALPHA_TO_COVERAGE)}function V($){le!==$&&($?n.frontFace(n.CW):n.frontFace(n.CCW),le=$)}function de($){$!==X_?(Oe(n.CULL_FACE),$!==A&&($===Df?n.cullFace(n.BACK):$===q_?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Z(n.CULL_FACE),A=$}function ie($){$!==D&&(oe&&n.lineWidth($),D=$)}function ye($,Xe,fe){$?(Oe(n.POLYGON_OFFSET_FILL),(re!==Xe||ee!==fe)&&(n.polygonOffset(Xe,fe),re=Xe,ee=fe)):Z(n.POLYGON_OFFSET_FILL)}function ve($){$?Oe(n.SCISSOR_TEST):Z(n.SCISSOR_TEST)}function _($){$===void 0&&($=n.TEXTURE0+pe-1),te!==$&&(n.activeTexture($),te=$)}function v($,Xe,fe){fe===void 0&&(te===null?fe=n.TEXTURE0+pe-1:fe=te);let Re=Ne[fe];Re===void 0&&(Re={type:void 0,texture:void 0},Ne[fe]=Re),(Re.type!==$||Re.texture!==Xe)&&(te!==fe&&(n.activeTexture(fe),te=fe),n.bindTexture($,Xe||Pe[$]),Re.type=$,Re.texture=Xe)}function M(){const $=Ne[te];$!==void 0&&$.type!==void 0&&(n.bindTexture($.type,null),$.type=void 0,$.texture=void 0)}function C(){try{n.compressedTexImage2D.apply(n,arguments)}catch{}}function U(){try{n.compressedTexImage3D.apply(n,arguments)}catch{}}function F(){try{n.texSubImage2D.apply(n,arguments)}catch{}}function j(){try{n.texSubImage3D.apply(n,arguments)}catch{}}function W(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch{}}function J(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch{}}function Te(){try{n.texStorage2D.apply(n,arguments)}catch{}}function ne(){try{n.texStorage3D.apply(n,arguments)}catch{}}function ge(){try{n.texImage2D.apply(n,arguments)}catch{}}function Fe(){try{n.texImage3D.apply(n,arguments)}catch{}}function Le($){Qe.equals($)===!1&&(n.scissor($.x,$.y,$.z,$.w),Qe.copy($))}function Ue($){it.equals($)===!1&&(n.viewport($.x,$.y,$.z,$.w),it.copy($))}function $e($,Xe){let fe=l.get(Xe);fe===void 0&&(fe=new WeakMap,l.set(Xe,fe));let Re=fe.get($);Re===void 0&&(Re=n.getUniformBlockIndex(Xe,$.name),fe.set($,Re))}function Ye($,Xe){const Re=l.get(Xe).get($);a.get(Xe)!==Re&&(n.uniformBlockBinding(Xe,Re,$.__bindingPointIndex),a.set(Xe,Re))}function tt(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),f={},te=null,Ne={},h={},p=new WeakMap,c=[],m=null,d=!1,y=null,g=null,u=null,b=null,T=null,w=null,G=null,O=new yt(0,0,0),k=0,q=!1,le=null,A=null,D=null,re=null,ee=null,Qe.set(0,0,n.canvas.width,n.canvas.height),it.set(0,0,n.canvas.width,n.canvas.height),r.reset(),s.reset(),o.reset()}return{buffers:{color:r,depth:s,stencil:o},enable:Oe,disable:Z,bindFramebuffer:we,drawBuffers:xe,useProgram:De,setBlending:E,setMaterial:H,setFlipSided:V,setCullFace:de,setLineWidth:ie,setPolygonOffset:ye,setScissorTest:ve,activeTexture:_,bindTexture:v,unbindTexture:M,compressedTexImage2D:C,compressedTexImage3D:U,texImage2D:ge,texImage3D:Fe,updateUBOMapping:$e,uniformBlockBinding:Ye,texStorage2D:Te,texStorage3D:ne,texSubImage2D:F,texSubImage3D:j,compressedTexSubImage2D:W,compressedTexSubImage3D:J,scissor:Le,viewport:Ue,reset:tt}}function Eu(n,e,t,i){const r=NS(i);switch(t){case od:return n*e;case cd:return n*e;case fd:return n*e*2;case ud:return n*e/r.components*r.byteLength;case Gc:return n*e/r.components*r.byteLength;case hd:return n*e*2/r.components*r.byteLength;case Vc:return n*e*2/r.components*r.byteLength;case ld:return n*e*3/r.components*r.byteLength;case Dn:return n*e*4/r.components*r.byteLength;case Wc:return n*e*4/r.components*r.byteLength;case Pa:case Da:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case La:case Ia:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Ul:case Ol:return Math.max(n,16)*Math.max(e,8)/4;case Il:case Nl:return Math.max(n,8)*Math.max(e,8)/2;case Fl:case Bl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case zl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case kl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Hl:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case Gl:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case Vl:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case Wl:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case Xl:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case ql:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case Yl:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case jl:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case $l:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case Kl:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case Zl:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case Jl:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case Ql:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case Ua:case ec:case tc:return Math.ceil(n/4)*Math.ceil(e/4)*16;case dd:case nc:return Math.ceil(n/4)*Math.ceil(e/4)*8;case ic:case rc:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function NS(n){switch(n){case hi:case rd:return{byteLength:1,components:1};case Ns:case sd:case Vs:return{byteLength:2,components:1};case kc:case Hc:return{byteLength:2,components:4};case hr:case zc:case li:return{byteLength:4,components:1};case ad:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}function OS(n,e,t,i,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),f=new vt,h=new WeakMap;let p;const c=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function d(_,v){return m?new OffscreenCanvas(_,v):Os("canvas")}function y(_,v,M){let C=1;const U=ve(_);if((U.width>M||U.height>M)&&(C=M/Math.max(U.width,U.height)),C<1)if(typeof HTMLImageElement<"u"&&_ instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&_ instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&_ instanceof ImageBitmap||typeof VideoFrame<"u"&&_ instanceof VideoFrame){const F=Math.floor(C*U.width),j=Math.floor(C*U.height);p===void 0&&(p=d(F,j));const W=v?d(F,j):p;return W.width=F,W.height=j,W.getContext("2d").drawImage(_,0,0,F,j),W}else return"data"in _,_;return _}function g(_){return _.generateMipmaps&&_.minFilter!==xn&&_.minFilter!==An}function u(_){n.generateMipmap(_)}function b(_,v,M,C,U=!1){if(_!==null&&n[_]!==void 0)return n[_];let F=v;if(v===n.RED&&(M===n.FLOAT&&(F=n.R32F),M===n.HALF_FLOAT&&(F=n.R16F),M===n.UNSIGNED_BYTE&&(F=n.R8)),v===n.RED_INTEGER&&(M===n.UNSIGNED_BYTE&&(F=n.R8UI),M===n.UNSIGNED_SHORT&&(F=n.R16UI),M===n.UNSIGNED_INT&&(F=n.R32UI),M===n.BYTE&&(F=n.R8I),M===n.SHORT&&(F=n.R16I),M===n.INT&&(F=n.R32I)),v===n.RG&&(M===n.FLOAT&&(F=n.RG32F),M===n.HALF_FLOAT&&(F=n.RG16F),M===n.UNSIGNED_BYTE&&(F=n.RG8)),v===n.RG_INTEGER&&(M===n.UNSIGNED_BYTE&&(F=n.RG8UI),M===n.UNSIGNED_SHORT&&(F=n.RG16UI),M===n.UNSIGNED_INT&&(F=n.RG32UI),M===n.BYTE&&(F=n.RG8I),M===n.SHORT&&(F=n.RG16I),M===n.INT&&(F=n.RG32I)),v===n.RGB_INTEGER&&(M===n.UNSIGNED_BYTE&&(F=n.RGB8UI),M===n.UNSIGNED_SHORT&&(F=n.RGB16UI),M===n.UNSIGNED_INT&&(F=n.RGB32UI),M===n.BYTE&&(F=n.RGB8I),M===n.SHORT&&(F=n.RGB16I),M===n.INT&&(F=n.RGB32I)),v===n.RGBA_INTEGER&&(M===n.UNSIGNED_BYTE&&(F=n.RGBA8UI),M===n.UNSIGNED_SHORT&&(F=n.RGBA16UI),M===n.UNSIGNED_INT&&(F=n.RGBA32UI),M===n.BYTE&&(F=n.RGBA8I),M===n.SHORT&&(F=n.RGBA16I),M===n.INT&&(F=n.RGBA32I)),v===n.RGB&&M===n.UNSIGNED_INT_5_9_9_9_REV&&(F=n.RGB9_E5),v===n.RGBA){const j=U?Wa:gt.getTransfer(C);M===n.FLOAT&&(F=n.RGBA32F),M===n.HALF_FLOAT&&(F=n.RGBA16F),M===n.UNSIGNED_BYTE&&(F=j===wt?n.SRGB8_ALPHA8:n.RGBA8),M===n.UNSIGNED_SHORT_4_4_4_4&&(F=n.RGBA4),M===n.UNSIGNED_SHORT_5_5_5_1&&(F=n.RGB5_A1)}return(F===n.R16F||F===n.R32F||F===n.RG16F||F===n.RG32F||F===n.RGBA16F||F===n.RGBA32F)&&e.get("EXT_color_buffer_float"),F}function T(_,v){let M;return _?v===null||v===hr||v===qr?M=n.DEPTH24_STENCIL8:v===li?M=n.DEPTH32F_STENCIL8:v===Ns&&(M=n.DEPTH24_STENCIL8):v===null||v===hr||v===qr?M=n.DEPTH_COMPONENT24:v===li?M=n.DEPTH_COMPONENT32F:v===Ns&&(M=n.DEPTH_COMPONENT16),M}function w(_,v){return g(_)===!0||_.isFramebufferTexture&&_.minFilter!==xn&&_.minFilter!==An?Math.log2(Math.max(v.width,v.height))+1:_.mipmaps!==void 0&&_.mipmaps.length>0?_.mipmaps.length:_.isCompressedTexture&&Array.isArray(_.image)?v.mipmaps.length:1}function G(_){const v=_.target;v.removeEventListener("dispose",G),k(v),v.isVideoTexture&&h.delete(v)}function O(_){const v=_.target;v.removeEventListener("dispose",O),le(v)}function k(_){const v=i.get(_);if(v.__webglInit===void 0)return;const M=_.source,C=c.get(M);if(C){const U=C[v.__cacheKey];U.usedTimes--,U.usedTimes===0&&q(_),Object.keys(C).length===0&&c.delete(M)}i.remove(_)}function q(_){const v=i.get(_);n.deleteTexture(v.__webglTexture);const M=_.source,C=c.get(M);delete C[v.__cacheKey],o.memory.textures--}function le(_){const v=i.get(_);if(_.depthTexture&&_.depthTexture.dispose(),_.isWebGLCubeRenderTarget)for(let C=0;C<6;C++){if(Array.isArray(v.__webglFramebuffer[C]))for(let U=0;U<v.__webglFramebuffer[C].length;U++)n.deleteFramebuffer(v.__webglFramebuffer[C][U]);else n.deleteFramebuffer(v.__webglFramebuffer[C]);v.__webglDepthbuffer&&n.deleteRenderbuffer(v.__webglDepthbuffer[C])}else{if(Array.isArray(v.__webglFramebuffer))for(let C=0;C<v.__webglFramebuffer.length;C++)n.deleteFramebuffer(v.__webglFramebuffer[C]);else n.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&n.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&n.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let C=0;C<v.__webglColorRenderbuffer.length;C++)v.__webglColorRenderbuffer[C]&&n.deleteRenderbuffer(v.__webglColorRenderbuffer[C]);v.__webglDepthRenderbuffer&&n.deleteRenderbuffer(v.__webglDepthRenderbuffer)}const M=_.textures;for(let C=0,U=M.length;C<U;C++){const F=i.get(M[C]);F.__webglTexture&&(n.deleteTexture(F.__webglTexture),o.memory.textures--),i.remove(M[C])}i.remove(_)}let A=0;function D(){A=0}function re(){const _=A;return _>=r.maxTextures,A+=1,_}function ee(_){const v=[];return v.push(_.wrapS),v.push(_.wrapT),v.push(_.wrapR||0),v.push(_.magFilter),v.push(_.minFilter),v.push(_.anisotropy),v.push(_.internalFormat),v.push(_.format),v.push(_.type),v.push(_.generateMipmaps),v.push(_.premultiplyAlpha),v.push(_.flipY),v.push(_.unpackAlignment),v.push(_.colorSpace),v.join()}function pe(_,v){const M=i.get(_);if(_.isVideoTexture&&ie(_),_.isRenderTargetTexture===!1&&_.version>0&&M.__version!==_.version){const C=_.image;if(C!==null){if(C.complete!==!1){it(M,_,v);return}}}t.bindTexture(n.TEXTURE_2D,M.__webglTexture,n.TEXTURE0+v)}function oe(_,v){const M=i.get(_);if(_.version>0&&M.__version!==_.version){it(M,_,v);return}t.bindTexture(n.TEXTURE_2D_ARRAY,M.__webglTexture,n.TEXTURE0+v)}function ae(_,v){const M=i.get(_);if(_.version>0&&M.__version!==_.version){it(M,_,v);return}t.bindTexture(n.TEXTURE_3D,M.__webglTexture,n.TEXTURE0+v)}function _e(_,v){const M=i.get(_);if(_.version>0&&M.__version!==_.version){Se(M,_,v);return}t.bindTexture(n.TEXTURE_CUBE_MAP,M.__webglTexture,n.TEXTURE0+v)}const te={[Dl]:n.REPEAT,[ir]:n.CLAMP_TO_EDGE,[Ll]:n.MIRRORED_REPEAT},Ne={[xn]:n.NEAREST,[Sg]:n.NEAREST_MIPMAP_NEAREST,[ea]:n.NEAREST_MIPMAP_LINEAR,[An]:n.LINEAR,[bo]:n.LINEAR_MIPMAP_NEAREST,[rr]:n.LINEAR_MIPMAP_LINEAR},ze={[wg]:n.NEVER,[Lg]:n.ALWAYS,[Ag]:n.LESS,[pd]:n.LEQUAL,[Rg]:n.EQUAL,[Dg]:n.GEQUAL,[Cg]:n.GREATER,[Pg]:n.NOTEQUAL};function He(_,v){if(v.type===li&&e.has("OES_texture_float_linear")===!1&&(v.magFilter===An||v.magFilter===bo||v.magFilter===ea||v.magFilter===rr||v.minFilter===An||v.minFilter===bo||v.minFilter===ea||v.minFilter),n.texParameteri(_,n.TEXTURE_WRAP_S,te[v.wrapS]),n.texParameteri(_,n.TEXTURE_WRAP_T,te[v.wrapT]),(_===n.TEXTURE_3D||_===n.TEXTURE_2D_ARRAY)&&n.texParameteri(_,n.TEXTURE_WRAP_R,te[v.wrapR]),n.texParameteri(_,n.TEXTURE_MAG_FILTER,Ne[v.magFilter]),n.texParameteri(_,n.TEXTURE_MIN_FILTER,Ne[v.minFilter]),v.compareFunction&&(n.texParameteri(_,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(_,n.TEXTURE_COMPARE_FUNC,ze[v.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===xn||v.minFilter!==ea&&v.minFilter!==rr||v.type===li&&e.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||i.get(v).__currentAnisotropy){const M=e.get("EXT_texture_filter_anisotropic");n.texParameterf(_,M.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,r.getMaxAnisotropy())),i.get(v).__currentAnisotropy=v.anisotropy}}}function Qe(_,v){let M=!1;_.__webglInit===void 0&&(_.__webglInit=!0,v.addEventListener("dispose",G));const C=v.source;let U=c.get(C);U===void 0&&(U={},c.set(C,U));const F=ee(v);if(F!==_.__cacheKey){U[F]===void 0&&(U[F]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,M=!0),U[F].usedTimes++;const j=U[_.__cacheKey];j!==void 0&&(U[_.__cacheKey].usedTimes--,j.usedTimes===0&&q(v)),_.__cacheKey=F,_.__webglTexture=U[F].texture}return M}function it(_,v,M){let C=n.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(C=n.TEXTURE_2D_ARRAY),v.isData3DTexture&&(C=n.TEXTURE_3D);const U=Qe(_,v),F=v.source;t.bindTexture(C,_.__webglTexture,n.TEXTURE0+M);const j=i.get(F);if(F.version!==j.__version||U===!0){t.activeTexture(n.TEXTURE0+M);const W=gt.getPrimaries(gt.workingColorSpace),J=v.colorSpace===Pi?null:gt.getPrimaries(v.colorSpace),Te=v.colorSpace===Pi||W===J?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,v.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,v.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Te);let ne=y(v.image,!1,r.maxTextureSize);ne=ye(v,ne);const ge=s.convert(v.format,v.colorSpace),Fe=s.convert(v.type);let Le=b(v.internalFormat,ge,Fe,v.colorSpace,v.isVideoTexture);He(C,v);let Ue;const $e=v.mipmaps,Ye=v.isVideoTexture!==!0,tt=j.__version===void 0||U===!0,$=F.dataReady,Xe=w(v,ne);if(v.isDepthTexture)Le=T(v.format===Yr,v.type),tt&&(Ye?t.texStorage2D(n.TEXTURE_2D,1,Le,ne.width,ne.height):t.texImage2D(n.TEXTURE_2D,0,Le,ne.width,ne.height,0,ge,Fe,null));else if(v.isDataTexture)if($e.length>0){Ye&&tt&&t.texStorage2D(n.TEXTURE_2D,Xe,Le,$e[0].width,$e[0].height);for(let fe=0,Re=$e.length;fe<Re;fe++)Ue=$e[fe],Ye?$&&t.texSubImage2D(n.TEXTURE_2D,fe,0,0,Ue.width,Ue.height,ge,Fe,Ue.data):t.texImage2D(n.TEXTURE_2D,fe,Le,Ue.width,Ue.height,0,ge,Fe,Ue.data);v.generateMipmaps=!1}else Ye?(tt&&t.texStorage2D(n.TEXTURE_2D,Xe,Le,ne.width,ne.height),$&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,ne.width,ne.height,ge,Fe,ne.data)):t.texImage2D(n.TEXTURE_2D,0,Le,ne.width,ne.height,0,ge,Fe,ne.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){Ye&&tt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Xe,Le,$e[0].width,$e[0].height,ne.depth);for(let fe=0,Re=$e.length;fe<Re;fe++)if(Ue=$e[fe],v.format!==Dn){if(ge!==null)if(Ye){if($)if(v.layerUpdates.size>0){const Ge=Eu(Ue.width,Ue.height,v.format,v.type);for(const Be of v.layerUpdates){const ht=Ue.data.subarray(Be*Ge/Ue.data.BYTES_PER_ELEMENT,(Be+1)*Ge/Ue.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,fe,0,0,Be,Ue.width,Ue.height,1,ge,ht,0,0)}v.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,fe,0,0,0,Ue.width,Ue.height,ne.depth,ge,Ue.data,0,0)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,fe,Le,Ue.width,Ue.height,ne.depth,0,Ue.data,0,0)}else Ye?$&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,fe,0,0,0,Ue.width,Ue.height,ne.depth,ge,Fe,Ue.data):t.texImage3D(n.TEXTURE_2D_ARRAY,fe,Le,Ue.width,Ue.height,ne.depth,0,ge,Fe,Ue.data)}else{Ye&&tt&&t.texStorage2D(n.TEXTURE_2D,Xe,Le,$e[0].width,$e[0].height);for(let fe=0,Re=$e.length;fe<Re;fe++)Ue=$e[fe],v.format!==Dn?ge!==null&&(Ye?$&&t.compressedTexSubImage2D(n.TEXTURE_2D,fe,0,0,Ue.width,Ue.height,ge,Ue.data):t.compressedTexImage2D(n.TEXTURE_2D,fe,Le,Ue.width,Ue.height,0,Ue.data)):Ye?$&&t.texSubImage2D(n.TEXTURE_2D,fe,0,0,Ue.width,Ue.height,ge,Fe,Ue.data):t.texImage2D(n.TEXTURE_2D,fe,Le,Ue.width,Ue.height,0,ge,Fe,Ue.data)}else if(v.isDataArrayTexture)if(Ye){if(tt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Xe,Le,ne.width,ne.height,ne.depth),$)if(v.layerUpdates.size>0){const fe=Eu(ne.width,ne.height,v.format,v.type);for(const Re of v.layerUpdates){const Ge=ne.data.subarray(Re*fe/ne.data.BYTES_PER_ELEMENT,(Re+1)*fe/ne.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,Re,ne.width,ne.height,1,ge,Fe,Ge)}v.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,ne.width,ne.height,ne.depth,ge,Fe,ne.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Le,ne.width,ne.height,ne.depth,0,ge,Fe,ne.data);else if(v.isData3DTexture)Ye?(tt&&t.texStorage3D(n.TEXTURE_3D,Xe,Le,ne.width,ne.height,ne.depth),$&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,ne.width,ne.height,ne.depth,ge,Fe,ne.data)):t.texImage3D(n.TEXTURE_3D,0,Le,ne.width,ne.height,ne.depth,0,ge,Fe,ne.data);else if(v.isFramebufferTexture){if(tt)if(Ye)t.texStorage2D(n.TEXTURE_2D,Xe,Le,ne.width,ne.height);else{let fe=ne.width,Re=ne.height;for(let Ge=0;Ge<Xe;Ge++)t.texImage2D(n.TEXTURE_2D,Ge,Le,fe,Re,0,ge,Fe,null),fe>>=1,Re>>=1}}else if($e.length>0){if(Ye&&tt){const fe=ve($e[0]);t.texStorage2D(n.TEXTURE_2D,Xe,Le,fe.width,fe.height)}for(let fe=0,Re=$e.length;fe<Re;fe++)Ue=$e[fe],Ye?$&&t.texSubImage2D(n.TEXTURE_2D,fe,0,0,ge,Fe,Ue):t.texImage2D(n.TEXTURE_2D,fe,Le,ge,Fe,Ue);v.generateMipmaps=!1}else if(Ye){if(tt){const fe=ve(ne);t.texStorage2D(n.TEXTURE_2D,Xe,Le,fe.width,fe.height)}$&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,ge,Fe,ne)}else t.texImage2D(n.TEXTURE_2D,0,Le,ge,Fe,ne);g(v)&&u(C),j.__version=F.version,v.onUpdate&&v.onUpdate(v)}_.__version=v.version}function Se(_,v,M){if(v.image.length!==6)return;const C=Qe(_,v),U=v.source;t.bindTexture(n.TEXTURE_CUBE_MAP,_.__webglTexture,n.TEXTURE0+M);const F=i.get(U);if(U.version!==F.__version||C===!0){t.activeTexture(n.TEXTURE0+M);const j=gt.getPrimaries(gt.workingColorSpace),W=v.colorSpace===Pi?null:gt.getPrimaries(v.colorSpace),J=v.colorSpace===Pi||j===W?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,v.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,v.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,J);const Te=v.isCompressedTexture||v.image[0].isCompressedTexture,ne=v.image[0]&&v.image[0].isDataTexture,ge=[];for(let Re=0;Re<6;Re++)!Te&&!ne?ge[Re]=y(v.image[Re],!0,r.maxCubemapSize):ge[Re]=ne?v.image[Re].image:v.image[Re],ge[Re]=ye(v,ge[Re]);const Fe=ge[0],Le=s.convert(v.format,v.colorSpace),Ue=s.convert(v.type),$e=b(v.internalFormat,Le,Ue,v.colorSpace),Ye=v.isVideoTexture!==!0,tt=F.__version===void 0||C===!0,$=U.dataReady;let Xe=w(v,Fe);He(n.TEXTURE_CUBE_MAP,v);let fe;if(Te){Ye&&tt&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Xe,$e,Fe.width,Fe.height);for(let Re=0;Re<6;Re++){fe=ge[Re].mipmaps;for(let Ge=0;Ge<fe.length;Ge++){const Be=fe[Ge];v.format!==Dn?Le!==null&&(Ye?$&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Re,Ge,0,0,Be.width,Be.height,Le,Be.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Re,Ge,$e,Be.width,Be.height,0,Be.data)):Ye?$&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Re,Ge,0,0,Be.width,Be.height,Le,Ue,Be.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Re,Ge,$e,Be.width,Be.height,0,Le,Ue,Be.data)}}}else{if(fe=v.mipmaps,Ye&&tt){fe.length>0&&Xe++;const Re=ve(ge[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,Xe,$e,Re.width,Re.height)}for(let Re=0;Re<6;Re++)if(ne){Ye?$&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Re,0,0,0,ge[Re].width,ge[Re].height,Le,Ue,ge[Re].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Re,0,$e,ge[Re].width,ge[Re].height,0,Le,Ue,ge[Re].data);for(let Ge=0;Ge<fe.length;Ge++){const ht=fe[Ge].image[Re].image;Ye?$&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Re,Ge+1,0,0,ht.width,ht.height,Le,Ue,ht.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Re,Ge+1,$e,ht.width,ht.height,0,Le,Ue,ht.data)}}else{Ye?$&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Re,0,0,0,Le,Ue,ge[Re]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Re,0,$e,Le,Ue,ge[Re]);for(let Ge=0;Ge<fe.length;Ge++){const Be=fe[Ge];Ye?$&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Re,Ge+1,0,0,Le,Ue,Be.image[Re]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Re,Ge+1,$e,Le,Ue,Be.image[Re])}}}g(v)&&u(n.TEXTURE_CUBE_MAP),F.__version=U.version,v.onUpdate&&v.onUpdate(v)}_.__version=v.version}function Pe(_,v,M,C,U,F){const j=s.convert(M.format,M.colorSpace),W=s.convert(M.type),J=b(M.internalFormat,j,W,M.colorSpace);if(!i.get(v).__hasExternalTextures){const ne=Math.max(1,v.width>>F),ge=Math.max(1,v.height>>F);U===n.TEXTURE_3D||U===n.TEXTURE_2D_ARRAY?t.texImage3D(U,F,J,ne,ge,v.depth,0,j,W,null):t.texImage2D(U,F,J,ne,ge,0,j,W,null)}t.bindFramebuffer(n.FRAMEBUFFER,_),de(v)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,C,U,i.get(M).__webglTexture,0,V(v)):(U===n.TEXTURE_2D||U>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&U<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,C,U,i.get(M).__webglTexture,F),t.bindFramebuffer(n.FRAMEBUFFER,null)}function Oe(_,v,M){if(n.bindRenderbuffer(n.RENDERBUFFER,_),v.depthBuffer){const C=v.depthTexture,U=C&&C.isDepthTexture?C.type:null,F=T(v.stencilBuffer,U),j=v.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,W=V(v);de(v)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,W,F,v.width,v.height):M?n.renderbufferStorageMultisample(n.RENDERBUFFER,W,F,v.width,v.height):n.renderbufferStorage(n.RENDERBUFFER,F,v.width,v.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,j,n.RENDERBUFFER,_)}else{const C=v.textures;for(let U=0;U<C.length;U++){const F=C[U],j=s.convert(F.format,F.colorSpace),W=s.convert(F.type),J=b(F.internalFormat,j,W,F.colorSpace),Te=V(v);M&&de(v)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Te,J,v.width,v.height):de(v)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Te,J,v.width,v.height):n.renderbufferStorage(n.RENDERBUFFER,J,v.width,v.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Z(_,v){if(v&&v.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,_),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(v.depthTexture).__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),pe(v.depthTexture,0);const C=i.get(v.depthTexture).__webglTexture,U=V(v);if(v.depthTexture.format===Br)de(v)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,C,0,U):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,C,0);else if(v.depthTexture.format===Yr)de(v)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,C,0,U):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,C,0);else throw new Error("Unknown depthTexture format")}function we(_){const v=i.get(_),M=_.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==_.depthTexture){const C=_.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),C){const U=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,C.removeEventListener("dispose",U)};C.addEventListener("dispose",U),v.__depthDisposeCallback=U}v.__boundDepthTexture=C}if(_.depthTexture&&!v.__autoAllocateDepthBuffer){if(M)throw new Error("target.depthTexture not supported in Cube render targets");Z(v.__webglFramebuffer,_)}else if(M){v.__webglDepthbuffer=[];for(let C=0;C<6;C++)if(t.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer[C]),v.__webglDepthbuffer[C]===void 0)v.__webglDepthbuffer[C]=n.createRenderbuffer(),Oe(v.__webglDepthbuffer[C],_,!1);else{const U=_.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,F=v.__webglDepthbuffer[C];n.bindRenderbuffer(n.RENDERBUFFER,F),n.framebufferRenderbuffer(n.FRAMEBUFFER,U,n.RENDERBUFFER,F)}}else if(t.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=n.createRenderbuffer(),Oe(v.__webglDepthbuffer,_,!1);else{const C=_.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,U=v.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,U),n.framebufferRenderbuffer(n.FRAMEBUFFER,C,n.RENDERBUFFER,U)}t.bindFramebuffer(n.FRAMEBUFFER,null)}function xe(_,v,M){const C=i.get(_);v!==void 0&&Pe(C.__webglFramebuffer,_,_.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),M!==void 0&&we(_)}function De(_){const v=_.texture,M=i.get(_),C=i.get(v);_.addEventListener("dispose",O);const U=_.textures,F=_.isWebGLCubeRenderTarget===!0,j=U.length>1;if(j||(C.__webglTexture===void 0&&(C.__webglTexture=n.createTexture()),C.__version=v.version,o.memory.textures++),F){M.__webglFramebuffer=[];for(let W=0;W<6;W++)if(v.mipmaps&&v.mipmaps.length>0){M.__webglFramebuffer[W]=[];for(let J=0;J<v.mipmaps.length;J++)M.__webglFramebuffer[W][J]=n.createFramebuffer()}else M.__webglFramebuffer[W]=n.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){M.__webglFramebuffer=[];for(let W=0;W<v.mipmaps.length;W++)M.__webglFramebuffer[W]=n.createFramebuffer()}else M.__webglFramebuffer=n.createFramebuffer();if(j)for(let W=0,J=U.length;W<J;W++){const Te=i.get(U[W]);Te.__webglTexture===void 0&&(Te.__webglTexture=n.createTexture(),o.memory.textures++)}if(_.samples>0&&de(_)===!1){M.__webglMultisampledFramebuffer=n.createFramebuffer(),M.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,M.__webglMultisampledFramebuffer);for(let W=0;W<U.length;W++){const J=U[W];M.__webglColorRenderbuffer[W]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,M.__webglColorRenderbuffer[W]);const Te=s.convert(J.format,J.colorSpace),ne=s.convert(J.type),ge=b(J.internalFormat,Te,ne,J.colorSpace,_.isXRRenderTarget===!0),Fe=V(_);n.renderbufferStorageMultisample(n.RENDERBUFFER,Fe,ge,_.width,_.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+W,n.RENDERBUFFER,M.__webglColorRenderbuffer[W])}n.bindRenderbuffer(n.RENDERBUFFER,null),_.depthBuffer&&(M.__webglDepthRenderbuffer=n.createRenderbuffer(),Oe(M.__webglDepthRenderbuffer,_,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(F){t.bindTexture(n.TEXTURE_CUBE_MAP,C.__webglTexture),He(n.TEXTURE_CUBE_MAP,v);for(let W=0;W<6;W++)if(v.mipmaps&&v.mipmaps.length>0)for(let J=0;J<v.mipmaps.length;J++)Pe(M.__webglFramebuffer[W][J],_,v,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+W,J);else Pe(M.__webglFramebuffer[W],_,v,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+W,0);g(v)&&u(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(j){for(let W=0,J=U.length;W<J;W++){const Te=U[W],ne=i.get(Te);t.bindTexture(n.TEXTURE_2D,ne.__webglTexture),He(n.TEXTURE_2D,Te),Pe(M.__webglFramebuffer,_,Te,n.COLOR_ATTACHMENT0+W,n.TEXTURE_2D,0),g(Te)&&u(n.TEXTURE_2D)}t.unbindTexture()}else{let W=n.TEXTURE_2D;if((_.isWebGL3DRenderTarget||_.isWebGLArrayRenderTarget)&&(W=_.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(W,C.__webglTexture),He(W,v),v.mipmaps&&v.mipmaps.length>0)for(let J=0;J<v.mipmaps.length;J++)Pe(M.__webglFramebuffer[J],_,v,n.COLOR_ATTACHMENT0,W,J);else Pe(M.__webglFramebuffer,_,v,n.COLOR_ATTACHMENT0,W,0);g(v)&&u(W),t.unbindTexture()}_.depthBuffer&&we(_)}function qe(_){const v=_.textures;for(let M=0,C=v.length;M<C;M++){const U=v[M];if(g(U)){const F=_.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,j=i.get(U).__webglTexture;t.bindTexture(F,j),u(F),t.unbindTexture()}}}const We=[],E=[];function H(_){if(_.samples>0){if(de(_)===!1){const v=_.textures,M=_.width,C=_.height;let U=n.COLOR_BUFFER_BIT;const F=_.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,j=i.get(_),W=v.length>1;if(W)for(let J=0;J<v.length;J++)t.bindFramebuffer(n.FRAMEBUFFER,j.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+J,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,j.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+J,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,j.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,j.__webglFramebuffer);for(let J=0;J<v.length;J++){if(_.resolveDepthBuffer&&(_.depthBuffer&&(U|=n.DEPTH_BUFFER_BIT),_.stencilBuffer&&_.resolveStencilBuffer&&(U|=n.STENCIL_BUFFER_BIT)),W){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,j.__webglColorRenderbuffer[J]);const Te=i.get(v[J]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Te,0)}n.blitFramebuffer(0,0,M,C,0,0,M,C,U,n.NEAREST),l===!0&&(We.length=0,E.length=0,We.push(n.COLOR_ATTACHMENT0+J),_.depthBuffer&&_.resolveDepthBuffer===!1&&(We.push(F),E.push(F),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,E)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,We))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),W)for(let J=0;J<v.length;J++){t.bindFramebuffer(n.FRAMEBUFFER,j.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+J,n.RENDERBUFFER,j.__webglColorRenderbuffer[J]);const Te=i.get(v[J]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,j.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+J,n.TEXTURE_2D,Te,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,j.__webglMultisampledFramebuffer)}else if(_.depthBuffer&&_.resolveDepthBuffer===!1&&l){const v=_.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[v])}}}function V(_){return Math.min(r.maxSamples,_.samples)}function de(_){const v=i.get(_);return _.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function ie(_){const v=o.render.frame;h.get(_)!==v&&(h.set(_,v),_.update())}function ye(_,v){const M=_.colorSpace,C=_.format,U=_.type;return _.isCompressedTexture===!0||_.isVideoTexture===!0||M!==zi&&M!==Pi&&gt.getTransfer(M),v}function ve(_){return typeof HTMLImageElement<"u"&&_ instanceof HTMLImageElement?(f.width=_.naturalWidth||_.width,f.height=_.naturalHeight||_.height):typeof VideoFrame<"u"&&_ instanceof VideoFrame?(f.width=_.displayWidth,f.height=_.displayHeight):(f.width=_.width,f.height=_.height),f}this.allocateTextureUnit=re,this.resetTextureUnits=D,this.setTexture2D=pe,this.setTexture2DArray=oe,this.setTexture3D=ae,this.setTextureCube=_e,this.rebindTextures=xe,this.setupRenderTarget=De,this.updateRenderTargetMipmap=qe,this.updateMultisampleRenderTarget=H,this.setupDepthRenderbuffer=we,this.setupFrameBufferTexture=Pe,this.useMultisampledRTT=de}function FS(n,e){function t(i,r=Pi){let s;const o=gt.getTransfer(r);if(i===hi)return n.UNSIGNED_BYTE;if(i===kc)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Hc)return n.UNSIGNED_SHORT_5_5_5_1;if(i===ad)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===rd)return n.BYTE;if(i===sd)return n.SHORT;if(i===Ns)return n.UNSIGNED_SHORT;if(i===zc)return n.INT;if(i===hr)return n.UNSIGNED_INT;if(i===li)return n.FLOAT;if(i===Vs)return n.HALF_FLOAT;if(i===od)return n.ALPHA;if(i===ld)return n.RGB;if(i===Dn)return n.RGBA;if(i===cd)return n.LUMINANCE;if(i===fd)return n.LUMINANCE_ALPHA;if(i===Br)return n.DEPTH_COMPONENT;if(i===Yr)return n.DEPTH_STENCIL;if(i===ud)return n.RED;if(i===Gc)return n.RED_INTEGER;if(i===hd)return n.RG;if(i===Vc)return n.RG_INTEGER;if(i===Wc)return n.RGBA_INTEGER;if(i===Pa||i===Da||i===La||i===Ia)if(o===wt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===Pa)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Da)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===La)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Ia)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===Pa)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Da)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===La)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Ia)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Il||i===Ul||i===Nl||i===Ol)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Il)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Ul)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Nl)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Ol)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Fl||i===Bl||i===zl)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Fl||i===Bl)return o===wt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===zl)return o===wt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===kl||i===Hl||i===Gl||i===Vl||i===Wl||i===Xl||i===ql||i===Yl||i===jl||i===$l||i===Kl||i===Zl||i===Jl||i===Ql)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===kl)return o===wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Hl)return o===wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Gl)return o===wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Vl)return o===wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Wl)return o===wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Xl)return o===wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===ql)return o===wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Yl)return o===wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===jl)return o===wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===$l)return o===wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Kl)return o===wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Zl)return o===wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Jl)return o===wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Ql)return o===wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Ua||i===ec||i===tc)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===Ua)return o===wt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===ec)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===tc)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===dd||i===nc||i===ic||i===rc)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===Ua)return s.COMPRESSED_RED_RGTC1_EXT;if(i===nc)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===ic)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===rc)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===qr?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}class BS extends vn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Sa extends fn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const zS={type:"move"};class tl{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Sa,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Sa,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new me,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new me),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Sa,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new me,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new me),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,f=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(f&&e.hand){o=!0;for(const y of e.hand.values()){const g=t.getJointPose(y,i),u=this._getHandJoint(f,y);g!==null&&(u.matrix.fromArray(g.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=g.radius),u.visible=g!==null}const h=f.joints["index-finger-tip"],p=f.joints["thumb-tip"],c=h.position.distanceTo(p.position),m=.02,d=.005;f.inputState.pinching&&c>m+d?(f.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!f.inputState.pinching&&c<=m-d&&(f.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(zS)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),f!==null&&(f.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Sa;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const kS=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,HS=`
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

}`;class GS{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){const r=new Wt,s=e.properties.get(r);s.__webglTexture=t.texture,(t.depthNear!=i.depthNear||t.depthFar!=i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new Wn({vertexShader:kS,fragmentShader:HS,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new yn(new Qr(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class VS extends Jr{constructor(e,t){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,f=null,h=null,p=null,c=null,m=null,d=null;const y=new GS,g=t.getContextAttributes();let u=null,b=null;const T=[],w=[],G=new vt;let O=null;const k=new vn;k.layers.enable(1),k.viewport=new Dt;const q=new vn;q.layers.enable(2),q.viewport=new Dt;const le=[k,q],A=new BS;A.layers.enable(1),A.layers.enable(2);let D=null,re=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Se){let Pe=T[Se];return Pe===void 0&&(Pe=new tl,T[Se]=Pe),Pe.getTargetRaySpace()},this.getControllerGrip=function(Se){let Pe=T[Se];return Pe===void 0&&(Pe=new tl,T[Se]=Pe),Pe.getGripSpace()},this.getHand=function(Se){let Pe=T[Se];return Pe===void 0&&(Pe=new tl,T[Se]=Pe),Pe.getHandSpace()};function ee(Se){const Pe=w.indexOf(Se.inputSource);if(Pe===-1)return;const Oe=T[Pe];Oe!==void 0&&(Oe.update(Se.inputSource,Se.frame,f||o),Oe.dispatchEvent({type:Se.type,data:Se.inputSource}))}function pe(){r.removeEventListener("select",ee),r.removeEventListener("selectstart",ee),r.removeEventListener("selectend",ee),r.removeEventListener("squeeze",ee),r.removeEventListener("squeezestart",ee),r.removeEventListener("squeezeend",ee),r.removeEventListener("end",pe),r.removeEventListener("inputsourceschange",oe);for(let Se=0;Se<T.length;Se++){const Pe=w[Se];Pe!==null&&(w[Se]=null,T[Se].disconnect(Pe))}D=null,re=null,y.reset(),e.setRenderTarget(u),m=null,c=null,p=null,r=null,b=null,it.stop(),i.isPresenting=!1,e.setPixelRatio(O),e.setSize(G.width,G.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Se){s=Se,i.isPresenting},this.setReferenceSpaceType=function(Se){a=Se,i.isPresenting},this.getReferenceSpace=function(){return f||o},this.setReferenceSpace=function(Se){f=Se},this.getBaseLayer=function(){return c!==null?c:m},this.getBinding=function(){return p},this.getFrame=function(){return d},this.getSession=function(){return r},this.setSession=async function(Se){if(r=Se,r!==null){if(u=e.getRenderTarget(),r.addEventListener("select",ee),r.addEventListener("selectstart",ee),r.addEventListener("selectend",ee),r.addEventListener("squeeze",ee),r.addEventListener("squeezestart",ee),r.addEventListener("squeezeend",ee),r.addEventListener("end",pe),r.addEventListener("inputsourceschange",oe),g.xrCompatible!==!0&&await t.makeXRCompatible(),O=e.getPixelRatio(),e.getSize(G),r.renderState.layers===void 0){const Pe={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(r,t,Pe),r.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),b=new dr(m.framebufferWidth,m.framebufferHeight,{format:Dn,type:hi,colorSpace:e.outputColorSpace,stencilBuffer:g.stencil})}else{let Pe=null,Oe=null,Z=null;g.depth&&(Z=g.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Pe=g.stencil?Yr:Br,Oe=g.stencil?qr:hr);const we={colorFormat:t.RGBA8,depthFormat:Z,scaleFactor:s};p=new XRWebGLBinding(r,t),c=p.createProjectionLayer(we),r.updateRenderState({layers:[c]}),e.setPixelRatio(1),e.setSize(c.textureWidth,c.textureHeight,!1),b=new dr(c.textureWidth,c.textureHeight,{format:Dn,type:hi,depthTexture:new Rd(c.textureWidth,c.textureHeight,Oe,void 0,void 0,void 0,void 0,void 0,void 0,Pe),stencilBuffer:g.stencil,colorSpace:e.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:c.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(l),f=null,o=await r.requestReferenceSpace(a),it.setContext(r),it.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function oe(Se){for(let Pe=0;Pe<Se.removed.length;Pe++){const Oe=Se.removed[Pe],Z=w.indexOf(Oe);Z>=0&&(w[Z]=null,T[Z].disconnect(Oe))}for(let Pe=0;Pe<Se.added.length;Pe++){const Oe=Se.added[Pe];let Z=w.indexOf(Oe);if(Z===-1){for(let xe=0;xe<T.length;xe++)if(xe>=w.length){w.push(Oe),Z=xe;break}else if(w[xe]===null){w[xe]=Oe,Z=xe;break}if(Z===-1)break}const we=T[Z];we&&we.connect(Oe)}}const ae=new me,_e=new me;function te(Se,Pe,Oe){ae.setFromMatrixPosition(Pe.matrixWorld),_e.setFromMatrixPosition(Oe.matrixWorld);const Z=ae.distanceTo(_e),we=Pe.projectionMatrix.elements,xe=Oe.projectionMatrix.elements,De=we[14]/(we[10]-1),qe=we[14]/(we[10]+1),We=(we[9]+1)/we[5],E=(we[9]-1)/we[5],H=(we[8]-1)/we[0],V=(xe[8]+1)/xe[0],de=De*H,ie=De*V,ye=Z/(-H+V),ve=ye*-H;if(Pe.matrixWorld.decompose(Se.position,Se.quaternion,Se.scale),Se.translateX(ve),Se.translateZ(ye),Se.matrixWorld.compose(Se.position,Se.quaternion,Se.scale),Se.matrixWorldInverse.copy(Se.matrixWorld).invert(),we[10]===-1)Se.projectionMatrix.copy(Pe.projectionMatrix),Se.projectionMatrixInverse.copy(Pe.projectionMatrixInverse);else{const _=De+ye,v=qe+ye,M=de-ve,C=ie+(Z-ve),U=We*qe/v*_,F=E*qe/v*_;Se.projectionMatrix.makePerspective(M,C,U,F,_,v),Se.projectionMatrixInverse.copy(Se.projectionMatrix).invert()}}function Ne(Se,Pe){Pe===null?Se.matrixWorld.copy(Se.matrix):Se.matrixWorld.multiplyMatrices(Pe.matrixWorld,Se.matrix),Se.matrixWorldInverse.copy(Se.matrixWorld).invert()}this.updateCamera=function(Se){if(r===null)return;let Pe=Se.near,Oe=Se.far;y.texture!==null&&(y.depthNear>0&&(Pe=y.depthNear),y.depthFar>0&&(Oe=y.depthFar)),A.near=q.near=k.near=Pe,A.far=q.far=k.far=Oe,(D!==A.near||re!==A.far)&&(r.updateRenderState({depthNear:A.near,depthFar:A.far}),D=A.near,re=A.far);const Z=Se.parent,we=A.cameras;Ne(A,Z);for(let xe=0;xe<we.length;xe++)Ne(we[xe],Z);we.length===2?te(A,k,q):A.projectionMatrix.copy(k.projectionMatrix),ze(Se,A,Z)};function ze(Se,Pe,Oe){Oe===null?Se.matrix.copy(Pe.matrixWorld):(Se.matrix.copy(Oe.matrixWorld),Se.matrix.invert(),Se.matrix.multiply(Pe.matrixWorld)),Se.matrix.decompose(Se.position,Se.quaternion,Se.scale),Se.updateMatrixWorld(!0),Se.projectionMatrix.copy(Pe.projectionMatrix),Se.projectionMatrixInverse.copy(Pe.projectionMatrixInverse),Se.isPerspectiveCamera&&(Se.fov=sc*2*Math.atan(1/Se.projectionMatrix.elements[5]),Se.zoom=1)}this.getCamera=function(){return A},this.getFoveation=function(){if(!(c===null&&m===null))return l},this.setFoveation=function(Se){l=Se,c!==null&&(c.fixedFoveation=Se),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=Se)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(A)};let He=null;function Qe(Se,Pe){if(h=Pe.getViewerPose(f||o),d=Pe,h!==null){const Oe=h.views;m!==null&&(e.setRenderTargetFramebuffer(b,m.framebuffer),e.setRenderTarget(b));let Z=!1;Oe.length!==A.cameras.length&&(A.cameras.length=0,Z=!0);for(let xe=0;xe<Oe.length;xe++){const De=Oe[xe];let qe=null;if(m!==null)qe=m.getViewport(De);else{const E=p.getViewSubImage(c,De);qe=E.viewport,xe===0&&(e.setRenderTargetTextures(b,E.colorTexture,c.ignoreDepthValues?void 0:E.depthStencilTexture),e.setRenderTarget(b))}let We=le[xe];We===void 0&&(We=new vn,We.layers.enable(xe),We.viewport=new Dt,le[xe]=We),We.matrix.fromArray(De.transform.matrix),We.matrix.decompose(We.position,We.quaternion,We.scale),We.projectionMatrix.fromArray(De.projectionMatrix),We.projectionMatrixInverse.copy(We.projectionMatrix).invert(),We.viewport.set(qe.x,qe.y,qe.width,qe.height),xe===0&&(A.matrix.copy(We.matrix),A.matrix.decompose(A.position,A.quaternion,A.scale)),Z===!0&&A.cameras.push(We)}const we=r.enabledFeatures;if(we&&we.includes("depth-sensing")){const xe=p.getDepthInformation(Oe[0]);xe&&xe.isValid&&xe.texture&&y.init(e,xe,r.renderState)}}for(let Oe=0;Oe<T.length;Oe++){const Z=w[Oe],we=T[Oe];Z!==null&&we!==void 0&&we.update(Z,Pe,f||o)}He&&He(Se,Pe),Pe.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:Pe}),d=null}const it=new wd;it.setAnimationLoop(Qe),this.setAnimationLoop=function(Se){He=Se},this.dispose=function(){}}}const Ki=new di,WS=new Lt;function XS(n,e){function t(g,u){g.matrixAutoUpdate===!0&&g.updateMatrix(),u.value.copy(g.matrix)}function i(g,u){u.color.getRGB(g.fogColor.value,Md(n)),u.isFog?(g.fogNear.value=u.near,g.fogFar.value=u.far):u.isFogExp2&&(g.fogDensity.value=u.density)}function r(g,u,b,T,w){u.isMeshBasicMaterial||u.isMeshLambertMaterial?s(g,u):u.isMeshToonMaterial?(s(g,u),p(g,u)):u.isMeshPhongMaterial?(s(g,u),h(g,u)):u.isMeshStandardMaterial?(s(g,u),c(g,u),u.isMeshPhysicalMaterial&&m(g,u,w)):u.isMeshMatcapMaterial?(s(g,u),d(g,u)):u.isMeshDepthMaterial?s(g,u):u.isMeshDistanceMaterial?(s(g,u),y(g,u)):u.isMeshNormalMaterial?s(g,u):u.isLineBasicMaterial?(o(g,u),u.isLineDashedMaterial&&a(g,u)):u.isPointsMaterial?l(g,u,b,T):u.isSpriteMaterial?f(g,u):u.isShadowMaterial?(g.color.value.copy(u.color),g.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function s(g,u){g.opacity.value=u.opacity,u.color&&g.diffuse.value.copy(u.color),u.emissive&&g.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(g.map.value=u.map,t(u.map,g.mapTransform)),u.alphaMap&&(g.alphaMap.value=u.alphaMap,t(u.alphaMap,g.alphaMapTransform)),u.bumpMap&&(g.bumpMap.value=u.bumpMap,t(u.bumpMap,g.bumpMapTransform),g.bumpScale.value=u.bumpScale,u.side===cn&&(g.bumpScale.value*=-1)),u.normalMap&&(g.normalMap.value=u.normalMap,t(u.normalMap,g.normalMapTransform),g.normalScale.value.copy(u.normalScale),u.side===cn&&g.normalScale.value.negate()),u.displacementMap&&(g.displacementMap.value=u.displacementMap,t(u.displacementMap,g.displacementMapTransform),g.displacementScale.value=u.displacementScale,g.displacementBias.value=u.displacementBias),u.emissiveMap&&(g.emissiveMap.value=u.emissiveMap,t(u.emissiveMap,g.emissiveMapTransform)),u.specularMap&&(g.specularMap.value=u.specularMap,t(u.specularMap,g.specularMapTransform)),u.alphaTest>0&&(g.alphaTest.value=u.alphaTest);const b=e.get(u),T=b.envMap,w=b.envMapRotation;T&&(g.envMap.value=T,Ki.copy(w),Ki.x*=-1,Ki.y*=-1,Ki.z*=-1,T.isCubeTexture&&T.isRenderTargetTexture===!1&&(Ki.y*=-1,Ki.z*=-1),g.envMapRotation.value.setFromMatrix4(WS.makeRotationFromEuler(Ki)),g.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=u.reflectivity,g.ior.value=u.ior,g.refractionRatio.value=u.refractionRatio),u.lightMap&&(g.lightMap.value=u.lightMap,g.lightMapIntensity.value=u.lightMapIntensity,t(u.lightMap,g.lightMapTransform)),u.aoMap&&(g.aoMap.value=u.aoMap,g.aoMapIntensity.value=u.aoMapIntensity,t(u.aoMap,g.aoMapTransform))}function o(g,u){g.diffuse.value.copy(u.color),g.opacity.value=u.opacity,u.map&&(g.map.value=u.map,t(u.map,g.mapTransform))}function a(g,u){g.dashSize.value=u.dashSize,g.totalSize.value=u.dashSize+u.gapSize,g.scale.value=u.scale}function l(g,u,b,T){g.diffuse.value.copy(u.color),g.opacity.value=u.opacity,g.size.value=u.size*b,g.scale.value=T*.5,u.map&&(g.map.value=u.map,t(u.map,g.uvTransform)),u.alphaMap&&(g.alphaMap.value=u.alphaMap,t(u.alphaMap,g.alphaMapTransform)),u.alphaTest>0&&(g.alphaTest.value=u.alphaTest)}function f(g,u){g.diffuse.value.copy(u.color),g.opacity.value=u.opacity,g.rotation.value=u.rotation,u.map&&(g.map.value=u.map,t(u.map,g.mapTransform)),u.alphaMap&&(g.alphaMap.value=u.alphaMap,t(u.alphaMap,g.alphaMapTransform)),u.alphaTest>0&&(g.alphaTest.value=u.alphaTest)}function h(g,u){g.specular.value.copy(u.specular),g.shininess.value=Math.max(u.shininess,1e-4)}function p(g,u){u.gradientMap&&(g.gradientMap.value=u.gradientMap)}function c(g,u){g.metalness.value=u.metalness,u.metalnessMap&&(g.metalnessMap.value=u.metalnessMap,t(u.metalnessMap,g.metalnessMapTransform)),g.roughness.value=u.roughness,u.roughnessMap&&(g.roughnessMap.value=u.roughnessMap,t(u.roughnessMap,g.roughnessMapTransform)),u.envMap&&(g.envMapIntensity.value=u.envMapIntensity)}function m(g,u,b){g.ior.value=u.ior,u.sheen>0&&(g.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),g.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(g.sheenColorMap.value=u.sheenColorMap,t(u.sheenColorMap,g.sheenColorMapTransform)),u.sheenRoughnessMap&&(g.sheenRoughnessMap.value=u.sheenRoughnessMap,t(u.sheenRoughnessMap,g.sheenRoughnessMapTransform))),u.clearcoat>0&&(g.clearcoat.value=u.clearcoat,g.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(g.clearcoatMap.value=u.clearcoatMap,t(u.clearcoatMap,g.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,t(u.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(g.clearcoatNormalMap.value=u.clearcoatNormalMap,t(u.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===cn&&g.clearcoatNormalScale.value.negate())),u.dispersion>0&&(g.dispersion.value=u.dispersion),u.iridescence>0&&(g.iridescence.value=u.iridescence,g.iridescenceIOR.value=u.iridescenceIOR,g.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(g.iridescenceMap.value=u.iridescenceMap,t(u.iridescenceMap,g.iridescenceMapTransform)),u.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=u.iridescenceThicknessMap,t(u.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),u.transmission>0&&(g.transmission.value=u.transmission,g.transmissionSamplerMap.value=b.texture,g.transmissionSamplerSize.value.set(b.width,b.height),u.transmissionMap&&(g.transmissionMap.value=u.transmissionMap,t(u.transmissionMap,g.transmissionMapTransform)),g.thickness.value=u.thickness,u.thicknessMap&&(g.thicknessMap.value=u.thicknessMap,t(u.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=u.attenuationDistance,g.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(g.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(g.anisotropyMap.value=u.anisotropyMap,t(u.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=u.specularIntensity,g.specularColor.value.copy(u.specularColor),u.specularColorMap&&(g.specularColorMap.value=u.specularColorMap,t(u.specularColorMap,g.specularColorMapTransform)),u.specularIntensityMap&&(g.specularIntensityMap.value=u.specularIntensityMap,t(u.specularIntensityMap,g.specularIntensityMapTransform))}function d(g,u){u.matcap&&(g.matcap.value=u.matcap)}function y(g,u){const b=e.get(u).light;g.referencePosition.value.setFromMatrixPosition(b.matrixWorld),g.nearDistance.value=b.shadow.camera.near,g.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function qS(n,e,t,i){let r={},s={},o=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(b,T){const w=T.program;i.uniformBlockBinding(b,w)}function f(b,T){let w=r[b.id];w===void 0&&(d(b),w=h(b),r[b.id]=w,b.addEventListener("dispose",g));const G=T.program;i.updateUBOMapping(b,G);const O=e.render.frame;s[b.id]!==O&&(c(b),s[b.id]=O)}function h(b){const T=p();b.__bindingPointIndex=T;const w=n.createBuffer(),G=b.__size,O=b.usage;return n.bindBuffer(n.UNIFORM_BUFFER,w),n.bufferData(n.UNIFORM_BUFFER,G,O),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,T,w),w}function p(){for(let b=0;b<a;b++)if(o.indexOf(b)===-1)return o.push(b),b;return 0}function c(b){const T=r[b.id],w=b.uniforms,G=b.__cache;n.bindBuffer(n.UNIFORM_BUFFER,T);for(let O=0,k=w.length;O<k;O++){const q=Array.isArray(w[O])?w[O]:[w[O]];for(let le=0,A=q.length;le<A;le++){const D=q[le];if(m(D,O,le,G)===!0){const re=D.__offset,ee=Array.isArray(D.value)?D.value:[D.value];let pe=0;for(let oe=0;oe<ee.length;oe++){const ae=ee[oe],_e=y(ae);typeof ae=="number"||typeof ae=="boolean"?(D.__data[0]=ae,n.bufferSubData(n.UNIFORM_BUFFER,re+pe,D.__data)):ae.isMatrix3?(D.__data[0]=ae.elements[0],D.__data[1]=ae.elements[1],D.__data[2]=ae.elements[2],D.__data[3]=0,D.__data[4]=ae.elements[3],D.__data[5]=ae.elements[4],D.__data[6]=ae.elements[5],D.__data[7]=0,D.__data[8]=ae.elements[6],D.__data[9]=ae.elements[7],D.__data[10]=ae.elements[8],D.__data[11]=0):(ae.toArray(D.__data,pe),pe+=_e.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,re,D.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function m(b,T,w,G){const O=b.value,k=T+"_"+w;if(G[k]===void 0)return typeof O=="number"||typeof O=="boolean"?G[k]=O:G[k]=O.clone(),!0;{const q=G[k];if(typeof O=="number"||typeof O=="boolean"){if(q!==O)return G[k]=O,!0}else if(q.equals(O)===!1)return q.copy(O),!0}return!1}function d(b){const T=b.uniforms;let w=0;const G=16;for(let k=0,q=T.length;k<q;k++){const le=Array.isArray(T[k])?T[k]:[T[k]];for(let A=0,D=le.length;A<D;A++){const re=le[A],ee=Array.isArray(re.value)?re.value:[re.value];for(let pe=0,oe=ee.length;pe<oe;pe++){const ae=ee[pe],_e=y(ae),te=w%G,Ne=te%_e.boundary,ze=te+Ne;w+=Ne,ze!==0&&G-ze<_e.storage&&(w+=G-ze),re.__data=new Float32Array(_e.storage/Float32Array.BYTES_PER_ELEMENT),re.__offset=w,w+=_e.storage}}}const O=w%G;return O>0&&(w+=G-O),b.__size=w,b.__cache={},this}function y(b){const T={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(T.boundary=4,T.storage=4):b.isVector2?(T.boundary=8,T.storage=8):b.isVector3||b.isColor?(T.boundary=16,T.storage=12):b.isVector4?(T.boundary=16,T.storage=16):b.isMatrix3?(T.boundary=48,T.storage=48):b.isMatrix4?(T.boundary=64,T.storage=64):b.isTexture,T}function g(b){const T=b.target;T.removeEventListener("dispose",g);const w=o.indexOf(T.__bindingPointIndex);o.splice(w,1),n.deleteBuffer(r[T.id]),delete r[T.id],delete s[T.id]}function u(){for(const b in r)n.deleteBuffer(r[b]);o=[],r={},s={}}return{bind:l,update:f,dispose:u}}class Id{constructor(e={}){const{canvas:t=Ug(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:f=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:p=!1}=e;this.isWebGLRenderer=!0;let c;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");c=i.getContextAttributes().alpha}else c=o;const m=new Uint32Array(4),d=new Int32Array(4);let y=null,g=null;const u=[],b=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Bn,this.toneMapping=Ui,this.toneMappingExposure=1;const T=this;let w=!1,G=0,O=0,k=null,q=-1,le=null;const A=new Dt,D=new Dt;let re=null;const ee=new yt(0);let pe=0,oe=t.width,ae=t.height,_e=1,te=null,Ne=null;const ze=new Dt(0,0,oe,ae),He=new Dt(0,0,oe,ae);let Qe=!1;const it=new bd;let Se=!1,Pe=!1;const Oe=new Lt,Z=new Lt,we=new me,xe=new Dt,De={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let qe=!1;function We(){return k===null?_e:1}let E=i;function H(N,Q){return t.getContext(N,Q)}try{const N={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:f,powerPreference:h,failIfMajorPerformanceCaveat:p};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Bc}`),t.addEventListener("webglcontextlost",Re,!1),t.addEventListener("webglcontextrestored",Ge,!1),t.addEventListener("webglcontextcreationerror",Be,!1),E===null){const Q="webgl2";if(E=H(Q,N),E===null)throw H(Q)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(N){throw N}let V,de,ie,ye,ve,_,v,M,C,U,F,j,W,J,Te,ne,ge,Fe,Le,Ue,$e,Ye,tt,$;function Xe(){V=new Jx(E),V.init(),Ye=new FS(E,V),de=new qx(E,V,e,Ye),ie=new US(E),de.reverseDepthBuffer&&ie.buffers.depth.setReversed(!0),ye=new ty(E),ve=new xS,_=new OS(E,V,ie,ve,de,Ye,ye),v=new jx(T),M=new Zx(T),C=new l0(E),tt=new Wx(E,C),U=new Qx(E,C,ye,tt),F=new iy(E,U,C,ye),Le=new ny(E,de,_),ne=new Yx(ve),j=new vS(T,v,M,V,de,tt,ne),W=new XS(T,ve),J=new SS,Te=new AS(V),Fe=new Vx(T,v,M,ie,F,c,l),ge=new LS(T,F,de),$=new qS(E,ye,de,ie),Ue=new Xx(E,V,ye),$e=new ey(E,V,ye),ye.programs=j.programs,T.capabilities=de,T.extensions=V,T.properties=ve,T.renderLists=J,T.shadowMap=ge,T.state=ie,T.info=ye}Xe();const fe=new VS(T,E);this.xr=fe,this.getContext=function(){return E},this.getContextAttributes=function(){return E.getContextAttributes()},this.forceContextLoss=function(){const N=V.get("WEBGL_lose_context");N&&N.loseContext()},this.forceContextRestore=function(){const N=V.get("WEBGL_lose_context");N&&N.restoreContext()},this.getPixelRatio=function(){return _e},this.setPixelRatio=function(N){N!==void 0&&(_e=N,this.setSize(oe,ae,!1))},this.getSize=function(N){return N.set(oe,ae)},this.setSize=function(N,Q,ue=!0){fe.isPresenting||(oe=N,ae=Q,t.width=Math.floor(N*_e),t.height=Math.floor(Q*_e),ue===!0&&(t.style.width=N+"px",t.style.height=Q+"px"),this.setViewport(0,0,N,Q))},this.getDrawingBufferSize=function(N){return N.set(oe*_e,ae*_e).floor()},this.setDrawingBufferSize=function(N,Q,ue){oe=N,ae=Q,_e=ue,t.width=Math.floor(N*ue),t.height=Math.floor(Q*ue),this.setViewport(0,0,N,Q)},this.getCurrentViewport=function(N){return N.copy(A)},this.getViewport=function(N){return N.copy(ze)},this.setViewport=function(N,Q,ue,he){N.isVector4?ze.set(N.x,N.y,N.z,N.w):ze.set(N,Q,ue,he),ie.viewport(A.copy(ze).multiplyScalar(_e).round())},this.getScissor=function(N){return N.copy(He)},this.setScissor=function(N,Q,ue,he){N.isVector4?He.set(N.x,N.y,N.z,N.w):He.set(N,Q,ue,he),ie.scissor(D.copy(He).multiplyScalar(_e).round())},this.getScissorTest=function(){return Qe},this.setScissorTest=function(N){ie.setScissorTest(Qe=N)},this.setOpaqueSort=function(N){te=N},this.setTransparentSort=function(N){Ne=N},this.getClearColor=function(N){return N.copy(Fe.getClearColor())},this.setClearColor=function(){Fe.setClearColor.apply(Fe,arguments)},this.getClearAlpha=function(){return Fe.getClearAlpha()},this.setClearAlpha=function(){Fe.setClearAlpha.apply(Fe,arguments)},this.clear=function(N=!0,Q=!0,ue=!0){let he=0;if(N){let x=!1;if(k!==null){const S=k.texture.format;x=S===Wc||S===Vc||S===Gc}if(x){const S=k.texture.type,P=S===hi||S===hr||S===Ns||S===qr||S===kc||S===Hc,L=Fe.getClearColor(),R=Fe.getClearAlpha(),z=L.r,I=L.g,B=L.b;P?(m[0]=z,m[1]=I,m[2]=B,m[3]=R,E.clearBufferuiv(E.COLOR,0,m)):(d[0]=z,d[1]=I,d[2]=B,d[3]=R,E.clearBufferiv(E.COLOR,0,d))}else he|=E.COLOR_BUFFER_BIT}Q&&(he|=E.DEPTH_BUFFER_BIT,E.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),ue&&(he|=E.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),E.clear(he)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Re,!1),t.removeEventListener("webglcontextrestored",Ge,!1),t.removeEventListener("webglcontextcreationerror",Be,!1),J.dispose(),Te.dispose(),ve.dispose(),v.dispose(),M.dispose(),F.dispose(),tt.dispose(),$.dispose(),j.dispose(),fe.dispose(),fe.removeEventListener("sessionstart",ts),fe.removeEventListener("sessionend",Xn),qn.stop()};function Re(N){N.preventDefault(),w=!0}function Ge(){w=!1;const N=ye.autoReset,Q=ge.enabled,ue=ge.autoUpdate,he=ge.needsUpdate,x=ge.type;Xe(),ye.autoReset=N,ge.enabled=Q,ge.autoUpdate=ue,ge.needsUpdate=he,ge.type=x}function Be(N){}function ht(N){const Q=N.target;Q.removeEventListener("dispose",ht),Mt(Q)}function Mt(N){Tt(N),ve.remove(N)}function Tt(N){const Q=ve.get(N).programs;Q!==void 0&&(Q.forEach(function(ue){j.releaseProgram(ue)}),N.isShaderMaterial&&j.releaseShaderCache(N))}this.renderBufferDirect=function(N,Q,ue,he,x,S){Q===null&&(Q=De);const P=x.isMesh&&x.matrixWorld.determinant()<0,L=ho(N,Q,ue,he,x);ie.setMaterial(he,P);let R=ue.index,z=1;if(he.wireframe===!0){if(R=U.getWireframeAttribute(ue),R===void 0)return;z=2}const I=ue.drawRange,B=ue.attributes.position;let X=I.start*z,se=(I.start+I.count)*z;S!==null&&(X=Math.max(X,S.start*z),se=Math.min(se,(S.start+S.count)*z)),R!==null?(X=Math.max(X,0),se=Math.min(se,R.count)):B!=null&&(X=Math.max(X,0),se=Math.min(se,B.count));const K=se-X;if(K<0||K===1/0)return;tt.setup(x,he,L,ue,R);let Me,ce=Ue;if(R!==null&&(Me=C.get(R),ce=$e,ce.setIndex(Me)),x.isMesh)he.wireframe===!0?(ie.setLineWidth(he.wireframeLinewidth*We()),ce.setMode(E.LINES)):ce.setMode(E.TRIANGLES);else if(x.isLine){let Y=he.linewidth;Y===void 0&&(Y=1),ie.setLineWidth(Y*We()),x.isLineSegments?ce.setMode(E.LINES):x.isLineLoop?ce.setMode(E.LINE_LOOP):ce.setMode(E.LINE_STRIP)}else x.isPoints?ce.setMode(E.POINTS):x.isSprite&&ce.setMode(E.TRIANGLES);if(x.isBatchedMesh)if(x._multiDrawInstances!==null)ce.renderMultiDrawInstances(x._multiDrawStarts,x._multiDrawCounts,x._multiDrawCount,x._multiDrawInstances);else if(V.get("WEBGL_multi_draw"))ce.renderMultiDraw(x._multiDrawStarts,x._multiDrawCounts,x._multiDrawCount);else{const Y=x._multiDrawStarts,Ie=x._multiDrawCounts,Ce=x._multiDrawCount,Ee=R?C.get(R).bytesPerElement:1,be=ve.get(he).currentProgram.getUniforms();for(let Ae=0;Ae<Ce;Ae++)be.setValue(E,"_gl_DrawID",Ae),ce.render(Y[Ae]/Ee,Ie[Ae])}else if(x.isInstancedMesh)ce.renderInstances(X,K,x.count);else if(ue.isInstancedBufferGeometry){const Y=ue._maxInstanceCount!==void 0?ue._maxInstanceCount:1/0,Ie=Math.min(ue.instanceCount,Y);ce.renderInstances(X,K,Ie)}else ce.render(X,K)};function dt(N,Q,ue){N.transparent===!0&&N.side===oi&&N.forceSinglePass===!1?(N.side=cn,N.needsUpdate=!0,_i(N,Q,ue),N.side=Ni,N.needsUpdate=!0,_i(N,Q,ue),N.side=oi):_i(N,Q,ue)}this.compile=function(N,Q,ue=null){ue===null&&(ue=N),g=Te.get(ue),g.init(Q),b.push(g),ue.traverseVisible(function(x){x.isLight&&x.layers.test(Q.layers)&&(g.pushLight(x),x.castShadow&&g.pushShadow(x))}),N!==ue&&N.traverseVisible(function(x){x.isLight&&x.layers.test(Q.layers)&&(g.pushLight(x),x.castShadow&&g.pushShadow(x))}),g.setupLights();const he=new Set;return N.traverse(function(x){if(!(x.isMesh||x.isPoints||x.isLine||x.isSprite))return;const S=x.material;if(S)if(Array.isArray(S))for(let P=0;P<S.length;P++){const L=S[P];dt(L,ue,x),he.add(L)}else dt(S,ue,x),he.add(S)}),b.pop(),g=null,he},this.compileAsync=function(N,Q,ue=null){const he=this.compile(N,Q,ue);return new Promise(x=>{function S(){if(he.forEach(function(P){ve.get(P).currentProgram.isReady()&&he.delete(P)}),he.size===0){x(N);return}setTimeout(S,10)}V.get("KHR_parallel_shader_compile")!==null?S():setTimeout(S,10)})};let Xt=null;function Ft(N){Xt&&Xt(N)}function ts(){qn.stop()}function Xn(){qn.start()}const qn=new wd;qn.setAnimationLoop(Ft),typeof self<"u"&&qn.setContext(self),this.setAnimationLoop=function(N){Xt=N,fe.setAnimationLoop(N),N===null?qn.stop():qn.start()},fe.addEventListener("sessionstart",ts),fe.addEventListener("sessionend",Xn),this.render=function(N,Q){if(Q!==void 0&&Q.isCamera!==!0||w===!0)return;if(N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),Q.parent===null&&Q.matrixWorldAutoUpdate===!0&&Q.updateMatrixWorld(),fe.enabled===!0&&fe.isPresenting===!0&&(fe.cameraAutoUpdate===!0&&fe.updateCamera(Q),Q=fe.getCamera()),N.isScene===!0&&N.onBeforeRender(T,N,Q,k),g=Te.get(N,b.length),g.init(Q),b.push(g),Z.multiplyMatrices(Q.projectionMatrix,Q.matrixWorldInverse),it.setFromProjectionMatrix(Z),Pe=this.localClippingEnabled,Se=ne.init(this.clippingPlanes,Pe),y=J.get(N,u.length),y.init(),u.push(y),fe.enabled===!0&&fe.isPresenting===!0){const S=T.xr.getDepthSensingMesh();S!==null&&Hi(S,Q,-1/0,T.sortObjects)}Hi(N,Q,0,T.sortObjects),y.finish(),T.sortObjects===!0&&y.sort(te,Ne),qe=fe.enabled===!1||fe.isPresenting===!1||fe.hasDepthSensing()===!1,qe&&Fe.addToRenderList(y,N),this.info.render.frame++,Se===!0&&ne.beginShadows();const ue=g.state.shadowsArray;ge.render(ue,N,Q),Se===!0&&ne.endShadows(),this.info.autoReset===!0&&this.info.reset();const he=y.opaque,x=y.transmissive;if(g.setupLights(),Q.isArrayCamera){const S=Q.cameras;if(x.length>0)for(let P=0,L=S.length;P<L;P++){const R=S[P];$s(he,x,N,R)}qe&&Fe.render(N);for(let P=0,L=S.length;P<L;P++){const R=S[P];ns(y,N,R,R.viewport)}}else x.length>0&&$s(he,x,N,Q),qe&&Fe.render(N),ns(y,N,Q);k!==null&&(_.updateMultisampleRenderTarget(k),_.updateRenderTargetMipmap(k)),N.isScene===!0&&N.onAfterRender(T,N,Q),tt.resetDefaultState(),q=-1,le=null,b.pop(),b.length>0?(g=b[b.length-1],Se===!0&&ne.setGlobalState(T.clippingPlanes,g.state.camera)):g=null,u.pop(),u.length>0?y=u[u.length-1]:y=null};function Hi(N,Q,ue,he){if(N.visible===!1)return;if(N.layers.test(Q.layers)){if(N.isGroup)ue=N.renderOrder;else if(N.isLOD)N.autoUpdate===!0&&N.update(Q);else if(N.isLight)g.pushLight(N),N.castShadow&&g.pushShadow(N);else if(N.isSprite){if(!N.frustumCulled||it.intersectsSprite(N)){he&&xe.setFromMatrixPosition(N.matrixWorld).applyMatrix4(Z);const P=F.update(N),L=N.material;L.visible&&y.push(N,P,L,ue,xe.z,null)}}else if((N.isMesh||N.isLine||N.isPoints)&&(!N.frustumCulled||it.intersectsObject(N))){const P=F.update(N),L=N.material;if(he&&(N.boundingSphere!==void 0?(N.boundingSphere===null&&N.computeBoundingSphere(),xe.copy(N.boundingSphere.center)):(P.boundingSphere===null&&P.computeBoundingSphere(),xe.copy(P.boundingSphere.center)),xe.applyMatrix4(N.matrixWorld).applyMatrix4(Z)),Array.isArray(L)){const R=P.groups;for(let z=0,I=R.length;z<I;z++){const B=R[z],X=L[B.materialIndex];X&&X.visible&&y.push(N,P,X,ue,xe.z,B)}}else L.visible&&y.push(N,P,L,ue,xe.z,null)}}const S=N.children;for(let P=0,L=S.length;P<L;P++)Hi(S[P],Q,ue,he)}function ns(N,Q,ue,he){const x=N.opaque,S=N.transmissive,P=N.transparent;g.setupLightsView(ue),Se===!0&&ne.setGlobalState(T.clippingPlanes,ue),he&&ie.viewport(A.copy(he)),x.length>0&&mi(x,Q,ue),S.length>0&&mi(S,Q,ue),P.length>0&&mi(P,Q,ue),ie.buffers.depth.setTest(!0),ie.buffers.depth.setMask(!0),ie.buffers.color.setMask(!0),ie.setPolygonOffset(!1)}function $s(N,Q,ue,he){if((ue.isScene===!0?ue.overrideMaterial:null)!==null)return;g.state.transmissionRenderTarget[he.id]===void 0&&(g.state.transmissionRenderTarget[he.id]=new dr(1,1,{generateMipmaps:!0,type:V.has("EXT_color_buffer_half_float")||V.has("EXT_color_buffer_float")?Vs:hi,minFilter:rr,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:gt.workingColorSpace}));const S=g.state.transmissionRenderTarget[he.id],P=he.viewport||A;S.setSize(P.z,P.w);const L=T.getRenderTarget();T.setRenderTarget(S),T.getClearColor(ee),pe=T.getClearAlpha(),pe<1&&T.setClearColor(16777215,.5),T.clear(),qe&&Fe.render(ue);const R=T.toneMapping;T.toneMapping=Ui;const z=he.viewport;if(he.viewport!==void 0&&(he.viewport=void 0),g.setupLightsView(he),Se===!0&&ne.setGlobalState(T.clippingPlanes,he),mi(N,ue,he),_.updateMultisampleRenderTarget(S),_.updateRenderTargetMipmap(S),V.has("WEBGL_multisampled_render_to_texture")===!1){let I=!1;for(let B=0,X=Q.length;B<X;B++){const se=Q[B],K=se.object,Me=se.geometry,ce=se.material,Y=se.group;if(ce.side===oi&&K.layers.test(he.layers)){const Ie=ce.side;ce.side=cn,ce.needsUpdate=!0,mr(K,ue,he,Me,ce,Y),ce.side=Ie,ce.needsUpdate=!0,I=!0}}I===!0&&(_.updateMultisampleRenderTarget(S),_.updateRenderTargetMipmap(S))}T.setRenderTarget(L),T.setClearColor(ee,pe),z!==void 0&&(he.viewport=z),T.toneMapping=R}function mi(N,Q,ue){const he=Q.isScene===!0?Q.overrideMaterial:null;for(let x=0,S=N.length;x<S;x++){const P=N[x],L=P.object,R=P.geometry,z=he===null?P.material:he,I=P.group;L.layers.test(ue.layers)&&mr(L,Q,ue,R,z,I)}}function mr(N,Q,ue,he,x,S){N.onBeforeRender(T,Q,ue,he,x,S),N.modelViewMatrix.multiplyMatrices(ue.matrixWorldInverse,N.matrixWorld),N.normalMatrix.getNormalMatrix(N.modelViewMatrix),x.onBeforeRender(T,Q,ue,he,N,S),x.transparent===!0&&x.side===oi&&x.forceSinglePass===!1?(x.side=cn,x.needsUpdate=!0,T.renderBufferDirect(ue,Q,he,x,N,S),x.side=Ni,x.needsUpdate=!0,T.renderBufferDirect(ue,Q,he,x,N,S),x.side=oi):T.renderBufferDirect(ue,Q,he,x,N,S),N.onAfterRender(T,Q,ue,he,x,S)}function _i(N,Q,ue){Q.isScene!==!0&&(Q=De);const he=ve.get(N),x=g.state.lights,S=g.state.shadowsArray,P=x.state.version,L=j.getParameters(N,x.state,S,Q,ue),R=j.getProgramCacheKey(L);let z=he.programs;he.environment=N.isMeshStandardMaterial?Q.environment:null,he.fog=Q.fog,he.envMap=(N.isMeshStandardMaterial?M:v).get(N.envMap||he.environment),he.envMapRotation=he.environment!==null&&N.envMap===null?Q.environmentRotation:N.envMapRotation,z===void 0&&(N.addEventListener("dispose",ht),z=new Map,he.programs=z);let I=z.get(R);if(I!==void 0){if(he.currentProgram===I&&he.lightsStateVersion===P)return Ks(N,L),I}else L.uniforms=j.getUniforms(N),N.onBeforeCompile(L,T),I=j.acquireProgram(L,R),z.set(R,I),he.uniforms=L.uniforms;const B=he.uniforms;return(!N.isShaderMaterial&&!N.isRawShaderMaterial||N.clipping===!0)&&(B.clippingPlanes=ne.uniform),Ks(N,L),he.needsLights=Gi(N),he.lightsStateVersion=P,he.needsLights&&(B.ambientLightColor.value=x.state.ambient,B.lightProbe.value=x.state.probe,B.directionalLights.value=x.state.directional,B.directionalLightShadows.value=x.state.directionalShadow,B.spotLights.value=x.state.spot,B.spotLightShadows.value=x.state.spotShadow,B.rectAreaLights.value=x.state.rectArea,B.ltc_1.value=x.state.rectAreaLTC1,B.ltc_2.value=x.state.rectAreaLTC2,B.pointLights.value=x.state.point,B.pointLightShadows.value=x.state.pointShadow,B.hemisphereLights.value=x.state.hemi,B.directionalShadowMap.value=x.state.directionalShadowMap,B.directionalShadowMatrix.value=x.state.directionalShadowMatrix,B.spotShadowMap.value=x.state.spotShadowMap,B.spotLightMatrix.value=x.state.spotLightMatrix,B.spotLightMap.value=x.state.spotLightMap,B.pointShadowMap.value=x.state.pointShadowMap,B.pointShadowMatrix.value=x.state.pointShadowMatrix),he.currentProgram=I,he.uniformsList=null,I}function gi(N){if(N.uniformsList===null){const Q=N.currentProgram.getUniforms();N.uniformsList=Oa.seqWithValue(Q.seq,N.uniforms)}return N.uniformsList}function Ks(N,Q){const ue=ve.get(N);ue.outputColorSpace=Q.outputColorSpace,ue.batching=Q.batching,ue.batchingColor=Q.batchingColor,ue.instancing=Q.instancing,ue.instancingColor=Q.instancingColor,ue.instancingMorph=Q.instancingMorph,ue.skinning=Q.skinning,ue.morphTargets=Q.morphTargets,ue.morphNormals=Q.morphNormals,ue.morphColors=Q.morphColors,ue.morphTargetsCount=Q.morphTargetsCount,ue.numClippingPlanes=Q.numClippingPlanes,ue.numIntersection=Q.numClipIntersection,ue.vertexAlphas=Q.vertexAlphas,ue.vertexTangents=Q.vertexTangents,ue.toneMapping=Q.toneMapping}function ho(N,Q,ue,he,x){Q.isScene!==!0&&(Q=De),_.resetTextureUnits();const S=Q.fog,P=he.isMeshStandardMaterial?Q.environment:null,L=k===null?T.outputColorSpace:k.isXRRenderTarget===!0?k.texture.colorSpace:zi,R=(he.isMeshStandardMaterial?M:v).get(he.envMap||P),z=he.vertexColors===!0&&!!ue.attributes.color&&ue.attributes.color.itemSize===4,I=!!ue.attributes.tangent&&(!!he.normalMap||he.anisotropy>0),B=!!ue.morphAttributes.position,X=!!ue.morphAttributes.normal,se=!!ue.morphAttributes.color;let K=Ui;he.toneMapped&&(k===null||k.isXRRenderTarget===!0)&&(K=T.toneMapping);const Me=ue.morphAttributes.position||ue.morphAttributes.normal||ue.morphAttributes.color,ce=Me!==void 0?Me.length:0,Y=ve.get(he),Ie=g.state.lights;if(Se===!0&&(Pe===!0||N!==le)){const Je=N===le&&he.id===q;ne.setState(he,N,Je)}let Ce=!1;he.version===Y.__version?(Y.needsLights&&Y.lightsStateVersion!==Ie.state.version||Y.outputColorSpace!==L||x.isBatchedMesh&&Y.batching===!1||!x.isBatchedMesh&&Y.batching===!0||x.isBatchedMesh&&Y.batchingColor===!0&&x.colorTexture===null||x.isBatchedMesh&&Y.batchingColor===!1&&x.colorTexture!==null||x.isInstancedMesh&&Y.instancing===!1||!x.isInstancedMesh&&Y.instancing===!0||x.isSkinnedMesh&&Y.skinning===!1||!x.isSkinnedMesh&&Y.skinning===!0||x.isInstancedMesh&&Y.instancingColor===!0&&x.instanceColor===null||x.isInstancedMesh&&Y.instancingColor===!1&&x.instanceColor!==null||x.isInstancedMesh&&Y.instancingMorph===!0&&x.morphTexture===null||x.isInstancedMesh&&Y.instancingMorph===!1&&x.morphTexture!==null||Y.envMap!==R||he.fog===!0&&Y.fog!==S||Y.numClippingPlanes!==void 0&&(Y.numClippingPlanes!==ne.numPlanes||Y.numIntersection!==ne.numIntersection)||Y.vertexAlphas!==z||Y.vertexTangents!==I||Y.morphTargets!==B||Y.morphNormals!==X||Y.morphColors!==se||Y.toneMapping!==K||Y.morphTargetsCount!==ce)&&(Ce=!0):(Ce=!0,Y.__version=he.version);let Ee=Y.currentProgram;Ce===!0&&(Ee=_i(he,Q,x));let be=!1,Ae=!1,je=!1;const Ve=Ee.getUniforms(),Ze=Y.uniforms;if(ie.useProgram(Ee.program)&&(be=!0,Ae=!0,je=!0),he.id!==q&&(q=he.id,Ae=!0),be||le!==N){de.reverseDepthBuffer?(Oe.copy(N.projectionMatrix),Og(Oe),Fg(Oe),Ve.setValue(E,"projectionMatrix",Oe)):Ve.setValue(E,"projectionMatrix",N.projectionMatrix),Ve.setValue(E,"viewMatrix",N.matrixWorldInverse);const Je=Ve.map.cameraPosition;Je!==void 0&&Je.setValue(E,we.setFromMatrixPosition(N.matrixWorld)),de.logarithmicDepthBuffer&&Ve.setValue(E,"logDepthBufFC",2/(Math.log(N.far+1)/Math.LN2)),(he.isMeshPhongMaterial||he.isMeshToonMaterial||he.isMeshLambertMaterial||he.isMeshBasicMaterial||he.isMeshStandardMaterial||he.isShaderMaterial)&&Ve.setValue(E,"isOrthographic",N.isOrthographicCamera===!0),le!==N&&(le=N,Ae=!0,je=!0)}if(x.isSkinnedMesh){Ve.setOptional(E,x,"bindMatrix"),Ve.setOptional(E,x,"bindMatrixInverse");const Je=x.skeleton;Je&&(Je.boneTexture===null&&Je.computeBoneTexture(),Ve.setValue(E,"boneTexture",Je.boneTexture,_))}x.isBatchedMesh&&(Ve.setOptional(E,x,"batchingTexture"),Ve.setValue(E,"batchingTexture",x._matricesTexture,_),Ve.setOptional(E,x,"batchingIdTexture"),Ve.setValue(E,"batchingIdTexture",x._indirectTexture,_),Ve.setOptional(E,x,"batchingColorTexture"),x._colorsTexture!==null&&Ve.setValue(E,"batchingColorTexture",x._colorsTexture,_));const et=ue.morphAttributes;if((et.position!==void 0||et.normal!==void 0||et.color!==void 0)&&Le.update(x,ue,Ee),(Ae||Y.receiveShadow!==x.receiveShadow)&&(Y.receiveShadow=x.receiveShadow,Ve.setValue(E,"receiveShadow",x.receiveShadow)),he.isMeshGouraudMaterial&&he.envMap!==null&&(Ze.envMap.value=R,Ze.flipEnvMap.value=R.isCubeTexture&&R.isRenderTargetTexture===!1?-1:1),he.isMeshStandardMaterial&&he.envMap===null&&Q.environment!==null&&(Ze.envMapIntensity.value=Q.environmentIntensity),Ae&&(Ve.setValue(E,"toneMappingExposure",T.toneMappingExposure),Y.needsLights&&po(Ze,je),S&&he.fog===!0&&W.refreshFogUniforms(Ze,S),W.refreshMaterialUniforms(Ze,he,_e,ae,g.state.transmissionRenderTarget[N.id]),Oa.upload(E,gi(Y),Ze,_)),he.isShaderMaterial&&he.uniformsNeedUpdate===!0&&(Oa.upload(E,gi(Y),Ze,_),he.uniformsNeedUpdate=!1),he.isSpriteMaterial&&Ve.setValue(E,"center",x.center),Ve.setValue(E,"modelViewMatrix",x.modelViewMatrix),Ve.setValue(E,"normalMatrix",x.normalMatrix),Ve.setValue(E,"modelMatrix",x.matrixWorld),he.isShaderMaterial||he.isRawShaderMaterial){const Je=he.uniformsGroups;for(let rt=0,ut=Je.length;rt<ut;rt++){const nt=Je[rt];$.update(nt,Ee),$.bind(nt,Ee)}}return Ee}function po(N,Q){N.ambientLightColor.needsUpdate=Q,N.lightProbe.needsUpdate=Q,N.directionalLights.needsUpdate=Q,N.directionalLightShadows.needsUpdate=Q,N.pointLights.needsUpdate=Q,N.pointLightShadows.needsUpdate=Q,N.spotLights.needsUpdate=Q,N.spotLightShadows.needsUpdate=Q,N.rectAreaLights.needsUpdate=Q,N.hemisphereLights.needsUpdate=Q}function Gi(N){return N.isMeshLambertMaterial||N.isMeshToonMaterial||N.isMeshPhongMaterial||N.isMeshStandardMaterial||N.isShadowMaterial||N.isShaderMaterial&&N.lights===!0}this.getActiveCubeFace=function(){return G},this.getActiveMipmapLevel=function(){return O},this.getRenderTarget=function(){return k},this.setRenderTargetTextures=function(N,Q,ue){ve.get(N.texture).__webglTexture=Q,ve.get(N.depthTexture).__webglTexture=ue;const he=ve.get(N);he.__hasExternalTextures=!0,he.__autoAllocateDepthBuffer=ue===void 0,he.__autoAllocateDepthBuffer||V.has("WEBGL_multisampled_render_to_texture")===!0&&(he.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(N,Q){const ue=ve.get(N);ue.__webglFramebuffer=Q,ue.__useDefaultFramebuffer=Q===void 0},this.setRenderTarget=function(N,Q=0,ue=0){k=N,G=Q,O=ue;let he=!0,x=null,S=!1,P=!1;if(N){const R=ve.get(N);if(R.__useDefaultFramebuffer!==void 0)ie.bindFramebuffer(E.FRAMEBUFFER,null),he=!1;else if(R.__webglFramebuffer===void 0)_.setupRenderTarget(N);else if(R.__hasExternalTextures)_.rebindTextures(N,ve.get(N.texture).__webglTexture,ve.get(N.depthTexture).__webglTexture);else if(N.depthBuffer){const B=N.depthTexture;if(R.__boundDepthTexture!==B){if(B!==null&&ve.has(B)&&(N.width!==B.image.width||N.height!==B.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");_.setupDepthRenderbuffer(N)}}const z=N.texture;(z.isData3DTexture||z.isDataArrayTexture||z.isCompressedArrayTexture)&&(P=!0);const I=ve.get(N).__webglFramebuffer;N.isWebGLCubeRenderTarget?(Array.isArray(I[Q])?x=I[Q][ue]:x=I[Q],S=!0):N.samples>0&&_.useMultisampledRTT(N)===!1?x=ve.get(N).__webglMultisampledFramebuffer:Array.isArray(I)?x=I[ue]:x=I,A.copy(N.viewport),D.copy(N.scissor),re=N.scissorTest}else A.copy(ze).multiplyScalar(_e).floor(),D.copy(He).multiplyScalar(_e).floor(),re=Qe;if(ie.bindFramebuffer(E.FRAMEBUFFER,x)&&he&&ie.drawBuffers(N,x),ie.viewport(A),ie.scissor(D),ie.setScissorTest(re),S){const R=ve.get(N.texture);E.framebufferTexture2D(E.FRAMEBUFFER,E.COLOR_ATTACHMENT0,E.TEXTURE_CUBE_MAP_POSITIVE_X+Q,R.__webglTexture,ue)}else if(P){const R=ve.get(N.texture),z=Q||0;E.framebufferTextureLayer(E.FRAMEBUFFER,E.COLOR_ATTACHMENT0,R.__webglTexture,ue||0,z)}q=-1},this.readRenderTargetPixels=function(N,Q,ue,he,x,S,P){if(!(N&&N.isWebGLRenderTarget))return;let L=ve.get(N).__webglFramebuffer;if(N.isWebGLCubeRenderTarget&&P!==void 0&&(L=L[P]),L){ie.bindFramebuffer(E.FRAMEBUFFER,L);try{const R=N.texture,z=R.format,I=R.type;if(!de.textureFormatReadable(z)||!de.textureTypeReadable(I))return;Q>=0&&Q<=N.width-he&&ue>=0&&ue<=N.height-x&&E.readPixels(Q,ue,he,x,Ye.convert(z),Ye.convert(I),S)}finally{const R=k!==null?ve.get(k).__webglFramebuffer:null;ie.bindFramebuffer(E.FRAMEBUFFER,R)}}},this.readRenderTargetPixelsAsync=async function(N,Q,ue,he,x,S,P){if(!(N&&N.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let L=ve.get(N).__webglFramebuffer;if(N.isWebGLCubeRenderTarget&&P!==void 0&&(L=L[P]),L){const R=N.texture,z=R.format,I=R.type;if(!de.textureFormatReadable(z))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!de.textureTypeReadable(I))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(Q>=0&&Q<=N.width-he&&ue>=0&&ue<=N.height-x){ie.bindFramebuffer(E.FRAMEBUFFER,L);const B=E.createBuffer();E.bindBuffer(E.PIXEL_PACK_BUFFER,B),E.bufferData(E.PIXEL_PACK_BUFFER,S.byteLength,E.STREAM_READ),E.readPixels(Q,ue,he,x,Ye.convert(z),Ye.convert(I),0);const X=k!==null?ve.get(k).__webglFramebuffer:null;ie.bindFramebuffer(E.FRAMEBUFFER,X);const se=E.fenceSync(E.SYNC_GPU_COMMANDS_COMPLETE,0);return E.flush(),await Ng(E,se,4),E.bindBuffer(E.PIXEL_PACK_BUFFER,B),E.getBufferSubData(E.PIXEL_PACK_BUFFER,0,S),E.deleteBuffer(B),E.deleteSync(se),S}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(N,Q=null,ue=0){N.isTexture!==!0&&(Na("WebGLRenderer: copyFramebufferToTexture function signature has changed."),Q=arguments[0]||null,N=arguments[1]);const he=Math.pow(2,-ue),x=Math.floor(N.image.width*he),S=Math.floor(N.image.height*he),P=Q!==null?Q.x:0,L=Q!==null?Q.y:0;_.setTexture2D(N,0),E.copyTexSubImage2D(E.TEXTURE_2D,ue,0,0,P,L,x,S),ie.unbindTexture()},this.copyTextureToTexture=function(N,Q,ue=null,he=null,x=0){N.isTexture!==!0&&(Na("WebGLRenderer: copyTextureToTexture function signature has changed."),he=arguments[0]||null,N=arguments[1],Q=arguments[2],x=arguments[3]||0,ue=null);let S,P,L,R,z,I;ue!==null?(S=ue.max.x-ue.min.x,P=ue.max.y-ue.min.y,L=ue.min.x,R=ue.min.y):(S=N.image.width,P=N.image.height,L=0,R=0),he!==null?(z=he.x,I=he.y):(z=0,I=0);const B=Ye.convert(Q.format),X=Ye.convert(Q.type);_.setTexture2D(Q,0),E.pixelStorei(E.UNPACK_FLIP_Y_WEBGL,Q.flipY),E.pixelStorei(E.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Q.premultiplyAlpha),E.pixelStorei(E.UNPACK_ALIGNMENT,Q.unpackAlignment);const se=E.getParameter(E.UNPACK_ROW_LENGTH),K=E.getParameter(E.UNPACK_IMAGE_HEIGHT),Me=E.getParameter(E.UNPACK_SKIP_PIXELS),ce=E.getParameter(E.UNPACK_SKIP_ROWS),Y=E.getParameter(E.UNPACK_SKIP_IMAGES),Ie=N.isCompressedTexture?N.mipmaps[x]:N.image;E.pixelStorei(E.UNPACK_ROW_LENGTH,Ie.width),E.pixelStorei(E.UNPACK_IMAGE_HEIGHT,Ie.height),E.pixelStorei(E.UNPACK_SKIP_PIXELS,L),E.pixelStorei(E.UNPACK_SKIP_ROWS,R),N.isDataTexture?E.texSubImage2D(E.TEXTURE_2D,x,z,I,S,P,B,X,Ie.data):N.isCompressedTexture?E.compressedTexSubImage2D(E.TEXTURE_2D,x,z,I,Ie.width,Ie.height,B,Ie.data):E.texSubImage2D(E.TEXTURE_2D,x,z,I,S,P,B,X,Ie),E.pixelStorei(E.UNPACK_ROW_LENGTH,se),E.pixelStorei(E.UNPACK_IMAGE_HEIGHT,K),E.pixelStorei(E.UNPACK_SKIP_PIXELS,Me),E.pixelStorei(E.UNPACK_SKIP_ROWS,ce),E.pixelStorei(E.UNPACK_SKIP_IMAGES,Y),x===0&&Q.generateMipmaps&&E.generateMipmap(E.TEXTURE_2D),ie.unbindTexture()},this.copyTextureToTexture3D=function(N,Q,ue=null,he=null,x=0){N.isTexture!==!0&&(Na("WebGLRenderer: copyTextureToTexture3D function signature has changed."),ue=arguments[0]||null,he=arguments[1]||null,N=arguments[2],Q=arguments[3],x=arguments[4]||0);let S,P,L,R,z,I,B,X,se;const K=N.isCompressedTexture?N.mipmaps[x]:N.image;ue!==null?(S=ue.max.x-ue.min.x,P=ue.max.y-ue.min.y,L=ue.max.z-ue.min.z,R=ue.min.x,z=ue.min.y,I=ue.min.z):(S=K.width,P=K.height,L=K.depth,R=0,z=0,I=0),he!==null?(B=he.x,X=he.y,se=he.z):(B=0,X=0,se=0);const Me=Ye.convert(Q.format),ce=Ye.convert(Q.type);let Y;if(Q.isData3DTexture)_.setTexture3D(Q,0),Y=E.TEXTURE_3D;else if(Q.isDataArrayTexture||Q.isCompressedArrayTexture)_.setTexture2DArray(Q,0),Y=E.TEXTURE_2D_ARRAY;else return;E.pixelStorei(E.UNPACK_FLIP_Y_WEBGL,Q.flipY),E.pixelStorei(E.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Q.premultiplyAlpha),E.pixelStorei(E.UNPACK_ALIGNMENT,Q.unpackAlignment);const Ie=E.getParameter(E.UNPACK_ROW_LENGTH),Ce=E.getParameter(E.UNPACK_IMAGE_HEIGHT),Ee=E.getParameter(E.UNPACK_SKIP_PIXELS),be=E.getParameter(E.UNPACK_SKIP_ROWS),Ae=E.getParameter(E.UNPACK_SKIP_IMAGES);E.pixelStorei(E.UNPACK_ROW_LENGTH,K.width),E.pixelStorei(E.UNPACK_IMAGE_HEIGHT,K.height),E.pixelStorei(E.UNPACK_SKIP_PIXELS,R),E.pixelStorei(E.UNPACK_SKIP_ROWS,z),E.pixelStorei(E.UNPACK_SKIP_IMAGES,I),N.isDataTexture||N.isData3DTexture?E.texSubImage3D(Y,x,B,X,se,S,P,L,Me,ce,K.data):Q.isCompressedArrayTexture?E.compressedTexSubImage3D(Y,x,B,X,se,S,P,L,Me,K.data):E.texSubImage3D(Y,x,B,X,se,S,P,L,Me,ce,K),E.pixelStorei(E.UNPACK_ROW_LENGTH,Ie),E.pixelStorei(E.UNPACK_IMAGE_HEIGHT,Ce),E.pixelStorei(E.UNPACK_SKIP_PIXELS,Ee),E.pixelStorei(E.UNPACK_SKIP_ROWS,be),E.pixelStorei(E.UNPACK_SKIP_IMAGES,Ae),x===0&&Q.generateMipmaps&&E.generateMipmap(Y),ie.unbindTexture()},this.initRenderTarget=function(N){ve.get(N).__webglFramebuffer===void 0&&_.setupRenderTarget(N)},this.initTexture=function(N){N.isCubeTexture?_.setTextureCube(N,0):N.isData3DTexture?_.setTexture3D(N,0):N.isDataArrayTexture||N.isCompressedArrayTexture?_.setTexture2DArray(N,0):_.setTexture2D(N,0),ie.unbindTexture()},this.resetState=function(){G=0,O=0,k=null,ie.reset(),tt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ci}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===Xc?"display-p3":"srgb",t.unpackColorSpace=gt.workingColorSpace===ao?"display-p3":"srgb"}}class Ud extends fn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new di,this.environmentIntensity=1,this.environmentRotation=new di,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class nl extends un{constructor(e,t,i,r=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}class bu extends Wt{constructor(e,t,i,r,s,o,a,l,f){super(e,t,i,r,s,o,a,l,f),this.isCanvasTexture=!0,this.needsUpdate=!0}}class YS extends Wn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}const wu={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(this.files[n]=e)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};class jS{constructor(e,t,i){const r=this;let s=!1,o=0,a=0,l;const f=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(h){a++,s===!1&&r.onStart!==void 0&&r.onStart(h,o,a),s=!0},this.itemEnd=function(h){o++,r.onProgress!==void 0&&r.onProgress(h,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(h){r.onError!==void 0&&r.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,p){return f.push(h,p),this},this.removeHandler=function(h){const p=f.indexOf(h);return p!==-1&&f.splice(p,2),this},this.getHandler=function(h){for(let p=0,c=f.length;p<c;p+=2){const m=f[p],d=f[p+1];if(m.global&&(m.lastIndex=0),m.test(h))return d}return null}}}const $S=new jS;class Kc{constructor(e){this.manager=e!==void 0?e:$S,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const i=this;return new Promise(function(r,s){i.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}Kc.DEFAULT_MATERIAL_NAME="__DEFAULT";class KS extends Kc{constructor(e){super(e)}load(e,t,i,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=wu.get(e);if(o!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o;const a=Os("img");function l(){h(),wu.add(e,this),t&&t(this),s.manager.itemEnd(e)}function f(p){h(),r&&r(p),s.manager.itemError(e),s.manager.itemEnd(e)}function h(){a.removeEventListener("load",l,!1),a.removeEventListener("error",f,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",f,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(e),a.src=e,a}}class ZS extends Kc{constructor(e){super(e)}load(e,t,i,r){const s=new Wt,o=new KS(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){s.image=a,s.needsUpdate=!0,t!==void 0&&t(s)},i,r),s}}class JS extends ki{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){const e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}}class Nd{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Au(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=Au();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function Au(){return performance.now()}const Ru=new Lt;class QS{constructor(e,t,i=0,r=1/0){this.ray=new vd(e,t),this.near=i,this.far=r,this.camera=null,this.layers=new Yc,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera&&(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t)}setFromXRController(e){return Ru.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Ru),this}intersectObject(e,t=!0,i=[]){return oc(e,this,i,t),i.sort(Cu),i}intersectObjects(e,t=!0,i=[]){for(let r=0,s=e.length;r<s;r++)oc(e[r],this,i,t);return i.sort(Cu),i}}function Cu(n,e){return n.distance-e.distance}function oc(n,e,t,i){let r=!0;if(n.layers.test(e.layers)&&n.raycast(e,t)===!1&&(r=!1),r===!0&&i===!0){const s=n.children;for(let o=0,a=s.length;o<a;o++)oc(s[o],e,t,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Bc}}));typeof window<"u"&&(window.__THREE__||(window.__THREE__=Bc));/*!
 * VERSION: 2.0.2
 * DATE: 2018-08-27
 * UPDATES AND DOCS AT: http://greensock.com
 *
 * @license Copyright (c) 2008-2018, GreenSock. All rights reserved.
 * This work is subject to the terms at http://greensock.com/standard-license or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 *
 * @author: Jack Doyle, jack@greensock.com
 */var Ct=typeof window<"u"?window:typeof mc<"u"&&mc.exports&&typeof global<"u"?global:{},st=function(n,e){var t=n.document,i=n.GreenSockGlobals=n.GreenSockGlobals||n;if(i.TweenLite)return i.TweenLite;var r=function(_){var v=_.split("."),M=i,C;for(C=0;C<v.length;C++)M[v[C]]=M=M[v[C]]||{};return M},s=r("com.greensock"),o=1e-10,a=function(_){var v=[],M=_.length,C;for(C=0;C!==M;v.push(_[C++]));return v},l=function(){},f=function(){var _=Object.prototype.toString,v=_.call([]);return function(M){return M!=null&&(M instanceof Array||typeof M=="object"&&!!M.push&&_.call(M)===v)}}(),h,p,c,m,d,y={},g=function(_,v,M,C){this.sc=y[_]?y[_].sc:[],y[_]=this,this.gsClass=null,this.func=M;var U=[];this.check=function(F){for(var j=v.length,W=j,J,Te,ne,ge;--j>-1;)(J=y[v[j]]||new g(v[j],[])).gsClass?(U[j]=J.gsClass,W--):F&&J.sc.push(this);if(W===0&&M)for(Te=("com.greensock."+_).split("."),ne=Te.pop(),ge=r(Te.join("."))[ne]=this.gsClass=M.apply(M,U),C&&(i[ne]=ge),j=0;j<this.sc.length;j++)this.sc[j].check()},this.check(!0)},u=n._gsDefine=function(_,v,M,C){return new g(_,v,M,C)},b=s._class=function(_,v,M){return v=v||function(){},u(_,[],function(){return v},M),v};u.globals=i;var T=[0,0,1,1],w=b("easing.Ease",function(_,v,M,C){this._func=_,this._type=M||0,this._power=C||0,this._params=v?T.concat(v):T},!0),G=w.map={},O=w.register=function(_,v,M,C){for(var U=v.split(","),F=U.length,j=(M||"easeIn,easeOut,easeInOut").split(","),W,J,Te,ne;--F>-1;)for(J=U[F],W=C?b("easing."+J,null,!0):s.easing[J]||{},Te=j.length;--Te>-1;)ne=j[Te],G[J+"."+ne]=G[ne+J]=W[ne]=_.getRatio?_:_[ne]||new _};for(c=w.prototype,c._calcEnd=!1,c.getRatio=function(_){if(this._func)return this._params[0]=_,this._func.apply(null,this._params);var v=this._type,M=this._power,C=v===1?1-_:v===2?_:_<.5?_*2:(1-_)*2;return M===1?C*=C:M===2?C*=C*C:M===3?C*=C*C*C:M===4&&(C*=C*C*C*C),v===1?1-C:v===2?C:_<.5?C/2:1-C/2},h=["Linear","Quad","Cubic","Quart","Quint,Strong"],p=h.length;--p>-1;)c=h[p]+",Power"+p,O(new w(null,null,1,p),c,"easeOut",!0),O(new w(null,null,2,p),c,"easeIn"+(p===0?",easeNone":"")),O(new w(null,null,3,p),c,"easeInOut");G.linear=s.easing.Linear.easeIn,G.swing=s.easing.Quad.easeInOut;var k=b("events.EventDispatcher",function(_){this._listeners={},this._eventTarget=_||this});c=k.prototype,c.addEventListener=function(_,v,M,C,U){U=U||0;var F=this._listeners[_],j=0,W,J;for(this===m&&!d&&m.wake(),F==null&&(this._listeners[_]=F=[]),J=F.length;--J>-1;)W=F[J],W.c===v&&W.s===M?F.splice(J,1):j===0&&W.pr<U&&(j=J+1);F.splice(j,0,{c:v,s:M,up:C,pr:U})},c.removeEventListener=function(_,v){var M=this._listeners[_],C;if(M){for(C=M.length;--C>-1;)if(M[C].c===v){M.splice(C,1);return}}},c.dispatchEvent=function(_){var v=this._listeners[_],M,C,U;if(v)for(M=v.length,M>1&&(v=v.slice(0)),C=this._eventTarget;--M>-1;)U=v[M],U&&(U.up?U.c.call(U.s||C,{type:_,target:C}):U.c.call(U.s||C))};var q=n.requestAnimationFrame,le=n.cancelAnimationFrame,A=Date.now||function(){return new Date().getTime()},D=A();for(h=["ms","moz","webkit","o"],p=h.length;--p>-1&&!q;)q=n[h[p]+"RequestAnimationFrame"],le=n[h[p]+"CancelAnimationFrame"]||n[h[p]+"CancelRequestAnimationFrame"];b("Ticker",function(_,v){var M=this,C=A(),U=v!==!1&&q?"auto":!1,F=500,j=33,W="tick",J,Te,ne,ge,Fe,Le=function(Ue){var $e=A()-D,Ye,tt;$e>F&&(C+=$e-j),D+=$e,M.time=(D-C)/1e3,Ye=M.time-Fe,(!J||Ye>0||Ue===!0)&&(M.frame++,Fe+=Ye+(Ye>=ge?.004:ge-Ye),tt=!0),Ue!==!0&&(ne=Te(Le)),tt&&M.dispatchEvent(W)};k.call(M),M.time=M.frame=0,M.tick=function(){Le(!0)},M.lagSmoothing=function(Ue,$e){if(!arguments.length)return F<1/o;F=Ue||1/o,j=Math.min($e,F,0)},M.sleep=function(){ne!=null&&(!U||!le?clearTimeout(ne):le(ne),Te=l,ne=null,M===m&&(d=!1))},M.wake=function(Ue){ne!==null?M.sleep():Ue?C+=-D+(D=A()):M.frame>10&&(D=A()-F+5),Te=J===0?l:!U||!q?function($e){return setTimeout($e,(Fe-M.time)*1e3+1|0)}:q,M===m&&(d=!0),Le(2)},M.fps=function(Ue){if(!arguments.length)return J;J=Ue,ge=1/(J||60),Fe=this.time+ge,M.wake()},M.useRAF=function(Ue){if(!arguments.length)return U;M.sleep(),U=Ue,M.fps(J)},M.fps(_),setTimeout(function(){U==="auto"&&M.frame<5&&(t||{}).visibilityState!=="hidden"&&M.useRAF(!1)},1500)}),c=s.Ticker.prototype=new s.events.EventDispatcher,c.constructor=s.Ticker;var re=b("core.Animation",function(_,v){if(this.vars=v=v||{},this._duration=this._totalDuration=_||0,this._delay=Number(v.delay)||0,this._timeScale=1,this._active=v.immediateRender===!0,this.data=v.data,this._reversed=v.reversed===!0,!!We){d||m.wake();var M=this.vars.useFrames?qe:We;M.add(this,M._time),this.vars.paused&&this.paused(!0)}});m=re.ticker=new s.Ticker,c=re.prototype,c._dirty=c._gc=c._initted=c._paused=!1,c._totalTime=c._time=0,c._rawPrevTime=-1,c._next=c._last=c._onUpdate=c._timeline=c.timeline=null,c._paused=!1;var ee=function(){d&&A()-D>2e3&&((t||{}).visibilityState!=="hidden"||!m.lagSmoothing())&&m.wake();var _=setTimeout(ee,2e3);_.unref&&_.unref()};ee(),c.play=function(_,v){return _!=null&&this.seek(_,v),this.reversed(!1).paused(!1)},c.pause=function(_,v){return _!=null&&this.seek(_,v),this.paused(!0)},c.resume=function(_,v){return _!=null&&this.seek(_,v),this.paused(!1)},c.seek=function(_,v){return this.totalTime(Number(_),v!==!1)},c.restart=function(_,v){return this.reversed(!1).paused(!1).totalTime(_?-this._delay:0,v!==!1,!0)},c.reverse=function(_,v){return _!=null&&this.seek(_||this.totalDuration(),v),this.reversed(!0).paused(!1)},c.render=function(_,v,M){},c.invalidate=function(){return this._time=this._totalTime=0,this._initted=this._gc=!1,this._rawPrevTime=-1,(this._gc||!this.timeline)&&this._enabled(!0),this},c.isActive=function(){var _=this._timeline,v=this._startTime,M;return!_||!this._gc&&!this._paused&&_.isActive()&&(M=_.rawTime(!0))>=v&&M<v+this.totalDuration()/this._timeScale-1e-7},c._enabled=function(_,v){return d||m.wake(),this._gc=!_,this._active=this.isActive(),v!==!0&&(_&&!this.timeline?this._timeline.add(this,this._startTime-this._delay):!_&&this.timeline&&this._timeline._remove(this,!0)),!1},c._kill=function(_,v){return this._enabled(!1,!1)},c.kill=function(_,v){return this._kill(_,v),this},c._uncache=function(_){for(var v=_?this:this.timeline;v;)v._dirty=!0,v=v.timeline;return this},c._swapSelfInParams=function(_){for(var v=_.length,M=_.concat();--v>-1;)_[v]==="{self}"&&(M[v]=this);return M},c._callback=function(_){var v=this.vars,M=v[_],C=v[_+"Params"],U=v[_+"Scope"]||v.callbackScope||this,F=C?C.length:0;switch(F){case 0:M.call(U);break;case 1:M.call(U,C[0]);break;case 2:M.call(U,C[0],C[1]);break;default:M.apply(U,C)}},c.eventCallback=function(_,v,M,C){if((_||"").substr(0,2)==="on"){var U=this.vars;if(arguments.length===1)return U[_];v==null?delete U[_]:(U[_]=v,U[_+"Params"]=f(M)&&M.join("").indexOf("{self}")!==-1?this._swapSelfInParams(M):M,U[_+"Scope"]=C),_==="onUpdate"&&(this._onUpdate=v)}return this},c.delay=function(_){return arguments.length?(this._timeline.smoothChildTiming&&this.startTime(this._startTime+_-this._delay),this._delay=_,this):this._delay},c.duration=function(_){return arguments.length?(this._duration=this._totalDuration=_,this._uncache(!0),this._timeline.smoothChildTiming&&this._time>0&&this._time<this._duration&&_!==0&&this.totalTime(this._totalTime*(_/this._duration),!0),this):(this._dirty=!1,this._duration)},c.totalDuration=function(_){return this._dirty=!1,arguments.length?this.duration(_):this._totalDuration},c.time=function(_,v){return arguments.length?(this._dirty&&this.totalDuration(),this.totalTime(_>this._duration?this._duration:_,v)):this._time},c.totalTime=function(_,v,M){if(d||m.wake(),!arguments.length)return this._totalTime;if(this._timeline){if(_<0&&!M&&(_+=this.totalDuration()),this._timeline.smoothChildTiming){this._dirty&&this.totalDuration();var C=this._totalDuration,U=this._timeline;if(_>C&&!M&&(_=C),this._startTime=(this._paused?this._pauseTime:U._time)-(this._reversed?C-_:_)/this._timeScale,U._dirty||this._uncache(!1),U._timeline)for(;U._timeline;)U._timeline._time!==(U._startTime+U._totalTime)/U._timeScale&&U.totalTime(U._totalTime,!0),U=U._timeline}this._gc&&this._enabled(!0,!1),(this._totalTime!==_||this._duration===0)&&(te.length&&H(),this.render(_,v,!1),te.length&&H())}return this},c.progress=c.totalProgress=function(_,v){var M=this.duration();return arguments.length?this.totalTime(M*_,v):M?this._time/M:this.ratio},c.startTime=function(_){return arguments.length?(_!==this._startTime&&(this._startTime=_,this.timeline&&this.timeline._sortChildren&&this.timeline.add(this,_-this._delay)),this):this._startTime},c.endTime=function(_){return this._startTime+(_!=!1?this.totalDuration():this.duration())/this._timeScale},c.timeScale=function(_){if(!arguments.length)return this._timeScale;var v,M;for(_=_||o,this._timeline&&this._timeline.smoothChildTiming&&(v=this._pauseTime,M=v||v===0?v:this._timeline.totalTime(),this._startTime=M-(M-this._startTime)*this._timeScale/_),this._timeScale=_,M=this.timeline;M&&M.timeline;)M._dirty=!0,M.totalDuration(),M=M.timeline;return this},c.reversed=function(_){return arguments.length?(_!=this._reversed&&(this._reversed=_,this.totalTime(this._timeline&&!this._timeline.smoothChildTiming?this.totalDuration()-this._totalTime:this._totalTime,!0)),this):this._reversed},c.paused=function(_){if(!arguments.length)return this._paused;var v=this._timeline,M,C;return _!=this._paused&&v&&(!d&&!_&&m.wake(),M=v.rawTime(),C=M-this._pauseTime,!_&&v.smoothChildTiming&&(this._startTime+=C,this._uncache(!1)),this._pauseTime=_?M:null,this._paused=_,this._active=this.isActive(),!_&&C!==0&&this._initted&&this.duration()&&(M=v.smoothChildTiming?this._totalTime:(M-this._startTime)/this._timeScale,this.render(M,M===this._totalTime,!0))),this._gc&&!_&&this._enabled(!0,!1),this};var pe=b("core.SimpleTimeline",function(_){re.call(this,0,_),this.autoRemoveChildren=this.smoothChildTiming=!0});c=pe.prototype=new re,c.constructor=pe,c.kill()._gc=!1,c._first=c._last=c._recent=null,c._sortChildren=!1,c.add=c.insert=function(_,v,M,C){var U,F;if(_._startTime=Number(v||0)+_._delay,_._paused&&this!==_._timeline&&(_._pauseTime=this.rawTime()-(_._timeline.rawTime()-_._pauseTime)),_.timeline&&_.timeline._remove(_,!0),_.timeline=_._timeline=this,_._gc&&_._enabled(!0,!0),U=this._last,this._sortChildren)for(F=_._startTime;U&&U._startTime>F;)U=U._prev;return U?(_._next=U._next,U._next=_):(_._next=this._first,this._first=_),_._next?_._next._prev=_:this._last=_,_._prev=U,this._recent=_,this._timeline&&this._uncache(!0),this},c._remove=function(_,v){return _.timeline===this&&(v||_._enabled(!1,!0),_._prev?_._prev._next=_._next:this._first===_&&(this._first=_._next),_._next?_._next._prev=_._prev:this._last===_&&(this._last=_._prev),_._next=_._prev=_.timeline=null,_===this._recent&&(this._recent=this._last),this._timeline&&this._uncache(!0)),this},c.render=function(_,v,M){var C=this._first,U;for(this._totalTime=this._time=this._rawPrevTime=_;C;)U=C._next,(C._active||_>=C._startTime&&!C._paused&&!C._gc)&&(C._reversed?C.render((C._dirty?C.totalDuration():C._totalDuration)-(_-C._startTime)*C._timeScale,v,M):C.render((_-C._startTime)*C._timeScale,v,M)),C=U},c.rawTime=function(){return d||m.wake(),this._totalTime};var oe=b("TweenLite",function(_,v,M){if(re.call(this,v,M),this.render=oe.prototype.render,_==null)throw"Cannot tween a null target.";this.target=_=typeof _!="string"?_:oe.selector(_)||_;var C=_.jquery||_.length&&_!==n&&_[0]&&(_[0]===n||_[0].nodeType&&_[0].style&&!_.nodeType),U=this.vars.overwrite,F,j,W;if(this._overwrite=U=U==null?De[oe.defaultOverwrite]:typeof U=="number"?U>>0:De[U],(C||_ instanceof Array||_.push&&f(_))&&typeof _[0]!="number")for(this._targets=W=a(_),this._propLookup=[],this._siblings=[],F=0;F<W.length;F++){if(j=W[F],j){if(typeof j=="string"){j=W[F--]=oe.selector(j),typeof j=="string"&&W.splice(F+1,1);continue}else if(j.length&&j!==n&&j[0]&&(j[0]===n||j[0].nodeType&&j[0].style&&!j.nodeType)){W.splice(F--,1),this._targets=W=W.concat(a(j));continue}}else{W.splice(F--,1);continue}this._siblings[F]=V(j,this,!1),U===1&&this._siblings[F].length>1&&ie(j,this,null,1,this._siblings[F])}else this._propLookup={},this._siblings=V(_,this,!1),U===1&&this._siblings.length>1&&ie(_,this,null,1,this._siblings);(this.vars.immediateRender||v===0&&this._delay===0&&this.vars.immediateRender!==!1)&&(this._time=-o,this.render(Math.min(0,-this._delay)))},!0),ae=function(_){return _&&_.length&&_!==n&&_[0]&&(_[0]===n||_[0].nodeType&&_[0].style&&!_.nodeType)},_e=function(_,v){var M={},C;for(C in _)!xe[C]&&(!(C in v)||C==="transform"||C==="x"||C==="y"||C==="width"||C==="height"||C==="className"||C==="border")&&(!Oe[C]||Oe[C]&&Oe[C]._autoCSS)&&(M[C]=_[C],delete _[C]);_.css=M};c=oe.prototype=new re,c.constructor=oe,c.kill()._gc=!1,c.ratio=0,c._firstPT=c._targets=c._overwrittenProps=c._startAt=null,c._notifyPluginsOfEnabled=c._lazy=!1,oe.version="2.0.2",oe.defaultEase=c._ease=new w(null,null,1,1),oe.defaultOverwrite="auto",oe.ticker=m,oe.autoSleep=120,oe.lagSmoothing=function(_,v){m.lagSmoothing(_,v)},oe.selector=n.$||n.jQuery||function(_){var v=n.$||n.jQuery;return v?(oe.selector=v,v(_)):(t||(t=n.document),t?t.querySelectorAll?t.querySelectorAll(_):t.getElementById(_.charAt(0)==="#"?_.substr(1):_):_)};var te=[],Ne={},ze=/(?:(-|-=|\+=)?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/ig,He=/[\+-]=-?[\.\d]/,Qe=function(_){for(var v=this._firstPT,M=1e-6,C;v;)C=v.blob?_===1&&this.end!=null?this.end:_?this.join(""):this.start:v.c*_+v.s,v.m?C=v.m.call(this._tween,C,this._target||v.t,this._tween):C<M&&C>-M&&!v.blob&&(C=0),v.f?v.fp?v.t[v.p](v.fp,C):v.t[v.p](C):v.t[v.p]=C,v=v._next},it=function(_,v,M,C){var U=[],F=0,j="",W=0,J,Te,ne,ge,Fe,Le,Ue;for(U.start=_,U.end=v,_=U[0]=_+"",v=U[1]=v+"",M&&(M(U),_=U[0],v=U[1]),U.length=0,J=_.match(ze)||[],Te=v.match(ze)||[],C&&(C._next=null,C.blob=1,U._firstPT=U._applyPT=C),Fe=Te.length,ge=0;ge<Fe;ge++)Ue=Te[ge],Le=v.substr(F,v.indexOf(Ue,F)-F),j+=Le||!ge?Le:",",F+=Le.length,W?W=(W+1)%5:Le.substr(-5)==="rgba("&&(W=1),Ue===J[ge]||J.length<=ge?j+=Ue:(j&&(U.push(j),j=""),ne=parseFloat(J[ge]),U.push(ne),U._firstPT={_next:U._firstPT,t:U,p:U.length-1,s:ne,c:(Ue.charAt(1)==="="?parseInt(Ue.charAt(0)+"1",10)*parseFloat(Ue.substr(2)):parseFloat(Ue)-ne)||0,f:0,m:W&&W<4?Math.round:0}),F+=Ue.length;return j+=v.substr(F),j&&U.push(j),U.setRatio=Qe,He.test(v)&&(U.end=null),U},Se=function(_,v,M,C,U,F,j,W,J){typeof C=="function"&&(C=C(J||0,_));var Te=typeof _[v],ne=Te!=="function"?"":v.indexOf("set")||typeof _["get"+v.substr(3)]!="function"?v:"get"+v.substr(3),ge=M!=="get"?M:ne?j?_[ne](j):_[ne]():_[v],Fe=typeof C=="string"&&C.charAt(1)==="=",Le={t:_,p:v,s:ge,f:Te==="function",pg:0,n:U||v,m:F?typeof F=="function"?F:Math.round:0,pr:0,c:Fe?parseInt(C.charAt(0)+"1",10)*parseFloat(C.substr(2)):parseFloat(C)-ge||0},Ue;if((typeof ge!="number"||typeof C!="number"&&!Fe)&&(j||isNaN(ge)||!Fe&&isNaN(C)||typeof ge=="boolean"||typeof C=="boolean"?(Le.fp=j,Ue=it(ge,Fe?parseFloat(Le.s)+Le.c+(Le.s+"").replace(/[0-9\-\.]/g,""):C,W||oe.defaultStringFilter,Le),Le={t:Ue,p:"setRatio",s:0,c:1,f:2,pg:0,n:U||v,pr:0,m:0}):(Le.s=parseFloat(ge),Fe||(Le.c=parseFloat(C)-Le.s||0))),Le.c)return(Le._next=this._firstPT)&&(Le._next._prev=Le),this._firstPT=Le,Le},Pe=oe._internals={isArray:f,isSelector:ae,lazyTweens:te,blobDif:it},Oe=oe._plugins={},Z=Pe.tweenLookup={},we=0,xe=Pe.reservedProps={ease:1,delay:1,overwrite:1,onComplete:1,onCompleteParams:1,onCompleteScope:1,useFrames:1,runBackwards:1,startAt:1,onUpdate:1,onUpdateParams:1,onUpdateScope:1,onStart:1,onStartParams:1,onStartScope:1,onReverseComplete:1,onReverseCompleteParams:1,onReverseCompleteScope:1,onRepeat:1,onRepeatParams:1,onRepeatScope:1,easeParams:1,yoyo:1,immediateRender:1,repeat:1,repeatDelay:1,data:1,paused:1,reversed:1,autoCSS:1,lazy:1,onOverwrite:1,callbackScope:1,stringFilter:1,id:1,yoyoEase:1},De={none:0,all:1,auto:2,concurrent:3,allOnStart:4,preexisting:5,true:1,false:0},qe=re._rootFramesTimeline=new pe,We=re._rootTimeline=new pe,E=30,H=Pe.lazyRender=function(){var _=te.length,v;for(Ne={};--_>-1;)v=te[_],v&&v._lazy!==!1&&(v.render(v._lazy[0],v._lazy[1],!0),v._lazy=!1);te.length=0};We._startTime=m.time,qe._startTime=m.frame,We._active=qe._active=!0,setTimeout(H,1),re._updateRoot=oe.render=function(){var _,v,M;if(te.length&&H(),We.render((m.time-We._startTime)*We._timeScale,!1,!1),qe.render((m.frame-qe._startTime)*qe._timeScale,!1,!1),te.length&&H(),m.frame>=E){E=m.frame+(parseInt(oe.autoSleep,10)||120);for(M in Z){for(v=Z[M].tweens,_=v.length;--_>-1;)v[_]._gc&&v.splice(_,1);v.length===0&&delete Z[M]}if(M=We._first,(!M||M._paused)&&oe.autoSleep&&!qe._first&&m._listeners.tick.length===1){for(;M&&M._paused;)M=M._next;M||m.sleep()}}},m.addEventListener("tick",re._updateRoot);var V=function(_,v,M){var C=_._gsTweenID,U,F;if(Z[C||(_._gsTweenID=C="t"+we++)]||(Z[C]={target:_,tweens:[]}),v&&(U=Z[C].tweens,U[F=U.length]=v,M))for(;--F>-1;)U[F]===v&&U.splice(F,1);return Z[C].tweens},de=function(_,v,M,C){var U=_.vars.onOverwrite,F,j;return U&&(F=U(_,v,M,C)),U=oe.onOverwrite,U&&(j=U(_,v,M,C)),F!==!1&&j!==!1},ie=function(_,v,M,C,U){var F,j,W,J;if(C===1||C>=4){for(J=U.length,F=0;F<J;F++)if((W=U[F])!==v)W._gc||W._kill(null,_,v)&&(j=!0);else if(C===5)break;return j}var Te=v._startTime+o,ne=[],ge=0,Fe=v._duration===0,Le;for(F=U.length;--F>-1;)(W=U[F])===v||W._gc||W._paused||(W._timeline!==v._timeline?(Le=Le||ye(v,0,Fe),ye(W,Le,Fe)===0&&(ne[ge++]=W)):W._startTime<=Te&&W._startTime+W.totalDuration()/W._timeScale>Te&&((Fe||!W._initted)&&Te-W._startTime<=2e-10||(ne[ge++]=W)));for(F=ge;--F>-1;)if(W=ne[F],J=W._firstPT,C===2&&W._kill(M,_,v)&&(j=!0),C!==2||!W._firstPT&&W._initted&&J){if(C!==2&&!de(W,v))continue;W._enabled(!1,!1)&&(j=!0)}return j},ye=function(_,v,M){for(var C=_._timeline,U=C._timeScale,F=_._startTime;C._timeline;){if(F+=C._startTime,U*=C._timeScale,C._paused)return-100;C=C._timeline}return F/=U,F>v?F-v:M&&F===v||!_._initted&&F-v<2*o?o:(F+=_.totalDuration()/_._timeScale/U)>v+o?0:F-v-o};c._init=function(){var _=this.vars,v=this._overwrittenProps,M=this._duration,C=!!_.immediateRender,U=_.ease,F,j,W,J,Te,ne;if(_.startAt){this._startAt&&(this._startAt.render(-1,!0),this._startAt.kill()),Te={};for(J in _.startAt)Te[J]=_.startAt[J];if(Te.data="isStart",Te.overwrite=!1,Te.immediateRender=!0,Te.lazy=C&&_.lazy!==!1,Te.startAt=Te.delay=null,Te.onUpdate=_.onUpdate,Te.onUpdateParams=_.onUpdateParams,Te.onUpdateScope=_.onUpdateScope||_.callbackScope||this,this._startAt=oe.to(this.target||{},0,Te),C){if(this._time>0)this._startAt=null;else if(M!==0)return}}else if(_.runBackwards&&M!==0)if(this._startAt)this._startAt.render(-1,!0),this._startAt.kill(),this._startAt=null;else{this._time!==0&&(C=!1),W={};for(J in _)(!xe[J]||J==="autoCSS")&&(W[J]=_[J]);if(W.overwrite=0,W.data="isFromStart",W.lazy=C&&_.lazy!==!1,W.immediateRender=C,this._startAt=oe.to(this.target,0,W),!C)this._startAt._init(),this._startAt._enabled(!1),this.vars.immediateRender&&(this._startAt=null);else if(this._time===0)return}if(this._ease=U=U?U instanceof w?U:typeof U=="function"?new w(U,_.easeParams):G[U]||oe.defaultEase:oe.defaultEase,_.easeParams instanceof Array&&U.config&&(this._ease=U.config.apply(U,_.easeParams)),this._easeType=this._ease._type,this._easePower=this._ease._power,this._firstPT=null,this._targets)for(ne=this._targets.length,F=0;F<ne;F++)this._initProps(this._targets[F],this._propLookup[F]={},this._siblings[F],v?v[F]:null,F)&&(j=!0);else j=this._initProps(this.target,this._propLookup,this._siblings,v,0);if(j&&oe._onPluginEvent("_onInitAllProps",this),v&&(this._firstPT||typeof this.target!="function"&&this._enabled(!1,!1)),_.runBackwards)for(W=this._firstPT;W;)W.s+=W.c,W.c=-W.c,W=W._next;this._onUpdate=_.onUpdate,this._initted=!0},c._initProps=function(_,v,M,C,U){var F,j,W,J,Te,ne;if(_==null)return!1;Ne[_._gsTweenID]&&H(),this.vars.css||_.style&&_!==n&&_.nodeType&&Oe.css&&this.vars.autoCSS!==!1&&_e(this.vars,_);for(F in this.vars)if(ne=this.vars[F],xe[F])ne&&(ne instanceof Array||ne.push&&f(ne))&&ne.join("").indexOf("{self}")!==-1&&(this.vars[F]=ne=this._swapSelfInParams(ne,this));else if(Oe[F]&&(J=new Oe[F])._onInitTween(_,this.vars[F],this,U)){for(this._firstPT=Te={_next:this._firstPT,t:J,p:"setRatio",s:0,c:1,f:1,n:F,pg:1,pr:J._priority,m:0},j=J._overwriteProps.length;--j>-1;)v[J._overwriteProps[j]]=this._firstPT;(J._priority||J._onInitAllProps)&&(W=!0),(J._onDisable||J._onEnable)&&(this._notifyPluginsOfEnabled=!0),Te._next&&(Te._next._prev=Te)}else v[F]=Se.call(this,_,F,"get",ne,F,0,null,this.vars.stringFilter,U);return C&&this._kill(C,_)?this._initProps(_,v,M,C,U):this._overwrite>1&&this._firstPT&&M.length>1&&ie(_,this,v,this._overwrite,M)?(this._kill(v,_),this._initProps(_,v,M,C,U)):(this._firstPT&&(this.vars.lazy!==!1&&this._duration||this.vars.lazy&&!this._duration)&&(Ne[_._gsTweenID]=!0),W)},c.render=function(_,v,M){var C=this._time,U=this._duration,F=this._rawPrevTime,j,W,J,Te;if(_>=U-1e-7&&_>=0)this._totalTime=this._time=U,this.ratio=this._ease._calcEnd?this._ease.getRatio(1):1,this._reversed||(j=!0,W="onComplete",M=M||this._timeline.autoRemoveChildren),U===0&&(this._initted||!this.vars.lazy||M)&&(this._startTime===this._timeline._duration&&(_=0),(F<0||_<=0&&_>=-1e-7||F===o&&this.data!=="isPause")&&F!==_&&(M=!0,F>o&&(W="onReverseComplete")),this._rawPrevTime=Te=!v||_||F===_?_:o);else if(_<1e-7)this._totalTime=this._time=0,this.ratio=this._ease._calcEnd?this._ease.getRatio(0):0,(C!==0||U===0&&F>0)&&(W="onReverseComplete",j=this._reversed),_<0&&(this._active=!1,U===0&&(this._initted||!this.vars.lazy||M)&&(F>=0&&!(F===o&&this.data==="isPause")&&(M=!0),this._rawPrevTime=Te=!v||_||F===_?_:o)),(!this._initted||this._startAt&&this._startAt.progress())&&(M=!0);else if(this._totalTime=this._time=_,this._easeType){var ne=_/U,ge=this._easeType,Fe=this._easePower;(ge===1||ge===3&&ne>=.5)&&(ne=1-ne),ge===3&&(ne*=2),Fe===1?ne*=ne:Fe===2?ne*=ne*ne:Fe===3?ne*=ne*ne*ne:Fe===4&&(ne*=ne*ne*ne*ne),ge===1?this.ratio=1-ne:ge===2?this.ratio=ne:_/U<.5?this.ratio=ne/2:this.ratio=1-ne/2}else this.ratio=this._ease.getRatio(_/U);if(!(this._time===C&&!M)){if(!this._initted){if(this._init(),!this._initted||this._gc)return;if(!M&&this._firstPT&&(this.vars.lazy!==!1&&this._duration||this.vars.lazy&&!this._duration)){this._time=this._totalTime=C,this._rawPrevTime=F,te.push(this),this._lazy=[_,v];return}this._time&&!j?this.ratio=this._ease.getRatio(this._time/U):j&&this._ease._calcEnd&&(this.ratio=this._ease.getRatio(this._time===0?0:1))}for(this._lazy!==!1&&(this._lazy=!1),this._active||!this._paused&&this._time!==C&&_>=0&&(this._active=!0),C===0&&(this._startAt&&(_>=0?this._startAt.render(_,!0,M):W||(W="_dummyGS")),this.vars.onStart&&(this._time!==0||U===0)&&(v||this._callback("onStart"))),J=this._firstPT;J;)J.f?J.t[J.p](J.c*this.ratio+J.s):J.t[J.p]=J.c*this.ratio+J.s,J=J._next;this._onUpdate&&(_<0&&this._startAt&&_!==-1e-4&&this._startAt.render(_,!0,M),v||(this._time!==C||j||M)&&this._callback("onUpdate")),W&&(!this._gc||M)&&(_<0&&this._startAt&&!this._onUpdate&&_!==-1e-4&&this._startAt.render(_,!0,M),j&&(this._timeline.autoRemoveChildren&&this._enabled(!1,!1),this._active=!1),!v&&this.vars[W]&&this._callback(W),U===0&&this._rawPrevTime===o&&Te!==o&&(this._rawPrevTime=0))}},c._kill=function(_,v,M){if(_==="all"&&(_=null),_==null&&(v==null||v===this.target))return this._lazy=!1,this._enabled(!1,!1);v=typeof v!="string"?v||this._targets||this.target:oe.selector(v)||v;var C=M&&this._time&&M._startTime===this._startTime&&this._timeline===M._timeline,U=this._firstPT,F,j,W,J,Te,ne,ge,Fe,Le;if((f(v)||ae(v))&&typeof v[0]!="number")for(F=v.length;--F>-1;)this._kill(_,v[F],M)&&(ne=!0);else{if(this._targets){for(F=this._targets.length;--F>-1;)if(v===this._targets[F]){Te=this._propLookup[F]||{},this._overwrittenProps=this._overwrittenProps||[],j=this._overwrittenProps[F]=_?this._overwrittenProps[F]||{}:"all";break}}else{if(v!==this.target)return!1;Te=this._propLookup,j=this._overwrittenProps=_?this._overwrittenProps||{}:"all"}if(Te){if(ge=_||Te,Fe=_!==j&&j!=="all"&&_!==Te&&(typeof _!="object"||!_._tempKill),M&&(oe.onOverwrite||this.vars.onOverwrite)){for(W in ge)Te[W]&&(Le||(Le=[]),Le.push(W));if((Le||!_)&&!de(this,M,v,Le))return!1}for(W in ge)(J=Te[W])&&(C&&(J.f?J.t[J.p](J.s):J.t[J.p]=J.s,ne=!0),J.pg&&J.t._kill(ge)&&(ne=!0),(!J.pg||J.t._overwriteProps.length===0)&&(J._prev?J._prev._next=J._next:J===this._firstPT&&(this._firstPT=J._next),J._next&&(J._next._prev=J._prev),J._next=J._prev=null),delete Te[W]),Fe&&(j[W]=1);!this._firstPT&&this._initted&&U&&this._enabled(!1,!1)}}return ne},c.invalidate=function(){return this._notifyPluginsOfEnabled&&oe._onPluginEvent("_onDisable",this),this._firstPT=this._overwrittenProps=this._startAt=this._onUpdate=null,this._notifyPluginsOfEnabled=this._active=this._lazy=!1,this._propLookup=this._targets?{}:[],re.prototype.invalidate.call(this),this.vars.immediateRender&&(this._time=-o,this.render(Math.min(0,-this._delay))),this},c._enabled=function(_,v){if(d||m.wake(),_&&this._gc){var M=this._targets,C;if(M)for(C=M.length;--C>-1;)this._siblings[C]=V(M[C],this,!0);else this._siblings=V(this.target,this,!0)}return re.prototype._enabled.call(this,_,v),this._notifyPluginsOfEnabled&&this._firstPT?oe._onPluginEvent(_?"_onEnable":"_onDisable",this):!1},oe.to=function(_,v,M){return new oe(_,v,M)},oe.from=function(_,v,M){return M.runBackwards=!0,M.immediateRender=M.immediateRender!=!1,new oe(_,v,M)},oe.fromTo=function(_,v,M,C){return C.startAt=M,C.immediateRender=C.immediateRender!=!1&&M.immediateRender!=!1,new oe(_,v,C)},oe.delayedCall=function(_,v,M,C,U){return new oe(v,0,{delay:_,onComplete:v,onCompleteParams:M,callbackScope:C,onReverseComplete:v,onReverseCompleteParams:M,immediateRender:!1,lazy:!1,useFrames:U,overwrite:0})},oe.set=function(_,v){return new oe(_,0,v)},oe.getTweensOf=function(_,v){if(_==null)return[];_=typeof _!="string"?_:oe.selector(_)||_;var M,C,U,F;if((f(_)||ae(_))&&typeof _[0]!="number"){for(M=_.length,C=[];--M>-1;)C=C.concat(oe.getTweensOf(_[M],v));for(M=C.length;--M>-1;)for(F=C[M],U=M;--U>-1;)F===C[U]&&C.splice(M,1)}else if(_._gsTweenID)for(C=V(_).concat(),M=C.length;--M>-1;)(C[M]._gc||v&&!C[M].isActive())&&C.splice(M,1);return C||[]},oe.killTweensOf=oe.killDelayedCallsTo=function(_,v,M){typeof v=="object"&&(M=v,v=!1);for(var C=oe.getTweensOf(_,v),U=C.length;--U>-1;)C[U]._kill(M,_)};var ve=b("plugins.TweenPlugin",function(_,v){this._overwriteProps=(_||"").split(","),this._propName=this._overwriteProps[0],this._priority=v||0,this._super=ve.prototype},!0);if(c=ve.prototype,ve.version="1.19.0",ve.API=2,c._firstPT=null,c._addTween=Se,c.setRatio=Qe,c._kill=function(_){var v=this._overwriteProps,M=this._firstPT,C;if(_[this._propName]!=null)this._overwriteProps=[];else for(C=v.length;--C>-1;)_[v[C]]!=null&&v.splice(C,1);for(;M;)_[M.n]!=null&&(M._next&&(M._next._prev=M._prev),M._prev?(M._prev._next=M._next,M._prev=null):this._firstPT===M&&(this._firstPT=M._next)),M=M._next;return!1},c._mod=c._roundProps=function(_){for(var v=this._firstPT,M;v;)M=_[this._propName]||v.n!=null&&_[v.n.split(this._propName+"_").join("")],M&&typeof M=="function"&&(v.f===2?v.t._applyPT.m=M:v.m=M),v=v._next},oe._onPluginEvent=function(_,v){var M=v._firstPT,C,U,F,j,W;if(_==="_onInitAllProps"){for(;M;){for(W=M._next,U=F;U&&U.pr>M.pr;)U=U._next;(M._prev=U?U._prev:j)?M._prev._next=M:F=M,(M._next=U)?U._prev=M:j=M,M=W}M=v._firstPT=F}for(;M;)M.pg&&typeof M.t[_]=="function"&&M.t[_]()&&(C=!0),M=M._next;return C},ve.activate=function(_){for(var v=_.length;--v>-1;)_[v].API===ve.API&&(Oe[new _[v]()._propName]=_[v]);return!0},u.plugin=function(_){if(!_||!_.propName||!_.init||!_.API)throw"illegal plugin definition.";var v=_.propName,M=_.priority||0,C=_.overwriteProps,U={init:"_onInitTween",set:"setRatio",kill:"_kill",round:"_mod",mod:"_mod",initAll:"_onInitAllProps"},F=b("plugins."+v.charAt(0).toUpperCase()+v.substr(1)+"Plugin",function(){ve.call(this,v,M),this._overwriteProps=C||[]},_.global===!0),j=F.prototype=new ve(v),W;j.constructor=F,F.API=_.API;for(W in U)typeof _[W]=="function"&&(j[U[W]]=_[W]);return F.version=_.version,ve.activate([F]),F},h=n._gsQueue,h){for(p=0;p<h.length;p++)h[p]();for(c in y)y[c].func||n.console.log("GSAP encountered missing dependency: "+c)}return d=!1,oe}(Ct),Pt=Ct.GreenSockGlobals,Zc=Pt.com.greensock,nr=Zc.core.SimpleTimeline,$t=Zc.core.Animation,Kt=Pt.Ease;Pt.Linear;Pt.Power1;Pt.Power2;Pt.Power3;Pt.Power4;var Ma=Pt.TweenPlugin;Zc.events.EventDispatcher;/*!
 * VERSION: 2.0.2
 * DATE: 2018-08-27
 * UPDATES AND DOCS AT: http://greensock.com
 *
 * @license Copyright (c) 2008-2018, GreenSock. All rights reserved.
 * This work is subject to the terms at http://greensock.com/standard-license or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 * 
 * @author: Jack Doyle, jack@greensock.com
 **/Ct._gsDefine("TweenMax",["core.Animation","core.SimpleTimeline","TweenLite"],function(){var n=function(c){var m=[],d=c.length,y;for(y=0;y!==d;m.push(c[y++]));return m},e=function(c,m,d){var y=c.cycle,g,u;for(g in y)u=y[g],c[g]=typeof u=="function"?u(d,m[d]):u[d%u.length];delete c.cycle},t=function(c,m,d){st.call(this,c,m,d),this._cycle=0,this._yoyo=this.vars.yoyo===!0||!!this.vars.yoyoEase,this._repeat=this.vars.repeat||0,this._repeatDelay=this.vars.repeatDelay||0,this._repeat&&this._uncache(!0),this.render=t.prototype.render},i=1e-10,r=st._internals,s=r.isSelector,o=r.isArray,a=t.prototype=st.to({},.1,{}),l=[];t.version="2.0.2",a.constructor=t,a.kill()._gc=!1,t.killTweensOf=t.killDelayedCallsTo=st.killTweensOf,t.getTweensOf=st.getTweensOf,t.lagSmoothing=st.lagSmoothing,t.ticker=st.ticker,t.render=st.render,a.invalidate=function(){return this._yoyo=this.vars.yoyo===!0||!!this.vars.yoyoEase,this._repeat=this.vars.repeat||0,this._repeatDelay=this.vars.repeatDelay||0,this._yoyoEase=null,this._uncache(!0),st.prototype.invalidate.call(this)},a.updateTo=function(c,m){var d=this.ratio,y=this.vars.immediateRender||c.immediateRender,g;m&&this._startTime<this._timeline._time&&(this._startTime=this._timeline._time,this._uncache(!1),this._gc?this._enabled(!0,!1):this._timeline.insert(this,this._startTime-this._delay));for(g in c)this.vars[g]=c[g];if(this._initted||y){if(m)this._initted=!1,y&&this.render(0,!0,!0);else if(this._gc&&this._enabled(!0,!1),this._notifyPluginsOfEnabled&&this._firstPT&&st._onPluginEvent("_onDisable",this),this._time/this._duration>.998){var u=this._totalTime;this.render(0,!0,!1),this._initted=!1,this.render(u,!0,!1)}else if(this._initted=!1,this._init(),this._time>0||y)for(var b=1/(1-d),T=this._firstPT,w;T;)w=T.s+T.c,T.c*=b,T.s=w-T.c,T=T._next}return this},a.render=function(c,m,d){this._initted||this._duration===0&&this.vars.repeat&&this.invalidate();var y=this._dirty?this.totalDuration():this._totalDuration,g=this._time,u=this._totalTime,b=this._cycle,T=this._duration,w=this._rawPrevTime,G,O,k,q,le,A,D,re,ee;if(c>=y-1e-7&&c>=0?(this._totalTime=y,this._cycle=this._repeat,this._yoyo&&this._cycle&1?(this._time=0,this.ratio=this._ease._calcEnd?this._ease.getRatio(0):0):(this._time=T,this.ratio=this._ease._calcEnd?this._ease.getRatio(1):1),this._reversed||(G=!0,O="onComplete",d=d||this._timeline.autoRemoveChildren),T===0&&(this._initted||!this.vars.lazy||d)&&(this._startTime===this._timeline._duration&&(c=0),(w<0||c<=0&&c>=-1e-7||w===i&&this.data!=="isPause")&&w!==c&&(d=!0,w>i&&(O="onReverseComplete")),this._rawPrevTime=re=!m||c||w===c?c:i)):c<1e-7?(this._totalTime=this._time=this._cycle=0,this.ratio=this._ease._calcEnd?this._ease.getRatio(0):0,(u!==0||T===0&&w>0)&&(O="onReverseComplete",G=this._reversed),c<0&&(this._active=!1,T===0&&(this._initted||!this.vars.lazy||d)&&(w>=0&&(d=!0),this._rawPrevTime=re=!m||c||w===c?c:i)),this._initted||(d=!0)):(this._totalTime=this._time=c,this._repeat!==0&&(q=T+this._repeatDelay,this._cycle=this._totalTime/q>>0,this._cycle!==0&&this._cycle===this._totalTime/q&&u<=c&&this._cycle--,this._time=this._totalTime-this._cycle*q,this._yoyo&&this._cycle&1&&(this._time=T-this._time,ee=this._yoyoEase||this.vars.yoyoEase,ee&&(this._yoyoEase||(ee===!0&&!this._initted?(ee=this.vars.ease,this._yoyoEase=ee=ee?ee instanceof Kt?ee:typeof ee=="function"?new Kt(ee,this.vars.easeParams):Kt.map[ee]||st.defaultEase:st.defaultEase):this._yoyoEase=ee=ee===!0?this._ease:ee instanceof Kt?ee:Kt.map[ee]),this.ratio=ee?1-ee.getRatio((T-this._time)/T):0)),this._time>T?this._time=T:this._time<0&&(this._time=0)),this._easeType&&!ee?(le=this._time/T,A=this._easeType,D=this._easePower,(A===1||A===3&&le>=.5)&&(le=1-le),A===3&&(le*=2),D===1?le*=le:D===2?le*=le*le:D===3?le*=le*le*le:D===4&&(le*=le*le*le*le),A===1?this.ratio=1-le:A===2?this.ratio=le:this._time/T<.5?this.ratio=le/2:this.ratio=1-le/2):ee||(this.ratio=this._ease.getRatio(this._time/T))),g===this._time&&!d&&b===this._cycle){u!==this._totalTime&&this._onUpdate&&(m||this._callback("onUpdate"));return}else if(!this._initted){if(this._init(),!this._initted||this._gc)return;if(!d&&this._firstPT&&(this.vars.lazy!==!1&&this._duration||this.vars.lazy&&!this._duration)){this._time=g,this._totalTime=u,this._rawPrevTime=w,this._cycle=b,r.lazyTweens.push(this),this._lazy=[c,m];return}this._time&&!G&&!ee?this.ratio=this._ease.getRatio(this._time/T):G&&this._ease._calcEnd&&!ee&&(this.ratio=this._ease.getRatio(this._time===0?0:1))}for(this._lazy!==!1&&(this._lazy=!1),this._active||!this._paused&&this._time!==g&&c>=0&&(this._active=!0),u===0&&(this._initted===2&&c>0&&this._init(),this._startAt&&(c>=0?this._startAt.render(c,!0,d):O||(O="_dummyGS")),this.vars.onStart&&(this._totalTime!==0||T===0)&&(m||this._callback("onStart"))),k=this._firstPT;k;)k.f?k.t[k.p](k.c*this.ratio+k.s):k.t[k.p]=k.c*this.ratio+k.s,k=k._next;this._onUpdate&&(c<0&&this._startAt&&this._startTime&&this._startAt.render(c,!0,d),m||(this._totalTime!==u||O)&&this._callback("onUpdate")),this._cycle!==b&&(m||this._gc||this.vars.onRepeat&&this._callback("onRepeat")),O&&(!this._gc||d)&&(c<0&&this._startAt&&!this._onUpdate&&this._startTime&&this._startAt.render(c,!0,d),G&&(this._timeline.autoRemoveChildren&&this._enabled(!1,!1),this._active=!1),!m&&this.vars[O]&&this._callback(O),T===0&&this._rawPrevTime===i&&re!==i&&(this._rawPrevTime=0))},t.to=function(c,m,d){return new t(c,m,d)},t.from=function(c,m,d){return d.runBackwards=!0,d.immediateRender=d.immediateRender!=!1,new t(c,m,d)},t.fromTo=function(c,m,d,y){return y.startAt=d,y.immediateRender=y.immediateRender!=!1&&d.immediateRender!=!1,new t(c,m,y)},t.staggerTo=t.allTo=function(c,m,d,y,g,u,b){y=y||0;var T=0,w=[],G=function(){d.onComplete&&d.onComplete.apply(d.onCompleteScope||this,arguments),g.apply(b||d.callbackScope||this,u||l)},O=d.cycle,k=d.startAt&&d.startAt.cycle,q,le,A,D;for(o(c)||(typeof c=="string"&&(c=st.selector(c)||c),s(c)&&(c=n(c))),c=c||[],y<0&&(c=n(c),c.reverse(),y*=-1),q=c.length-1,A=0;A<=q;A++){le={};for(D in d)le[D]=d[D];if(O&&(e(le,c,A),le.duration!=null&&(m=le.duration,delete le.duration)),k){k=le.startAt={};for(D in d.startAt)k[D]=d.startAt[D];e(le.startAt,c,A)}le.delay=T+(le.delay||0),A===q&&g&&(le.onComplete=G),w[A]=new t(c[A],m,le),T+=y}return w},t.staggerFrom=t.allFrom=function(c,m,d,y,g,u,b){return d.runBackwards=!0,d.immediateRender=d.immediateRender!=!1,t.staggerTo(c,m,d,y,g,u,b)},t.staggerFromTo=t.allFromTo=function(c,m,d,y,g,u,b,T){return y.startAt=d,y.immediateRender=y.immediateRender!=!1&&d.immediateRender!=!1,t.staggerTo(c,m,y,g,u,b,T)},t.delayedCall=function(c,m,d,y,g){return new t(m,0,{delay:c,onComplete:m,onCompleteParams:d,callbackScope:y,onReverseComplete:m,onReverseCompleteParams:d,immediateRender:!1,useFrames:g,overwrite:0})},t.set=function(c,m){return new t(c,0,m)},t.isTweening=function(c){return st.getTweensOf(c,!0).length>0};var f=function(c,m){for(var d=[],y=0,g=c._first;g;)g instanceof st?d[y++]=g:(m&&(d[y++]=g),d=d.concat(f(g,m)),y=d.length),g=g._next;return d},h=t.getAllTweens=function(c){return f($t._rootTimeline,c).concat(f($t._rootFramesTimeline,c))};t.killAll=function(c,m,d,y){m==null&&(m=!0),d==null&&(d=!0);var g=h(y!=!1),u=g.length,b=m&&d&&y,T,w,G;for(G=0;G<u;G++)w=g[G],(b||w instanceof nr||(T=w.target===w.vars.onComplete)&&d||m&&!T)&&(c?w.totalTime(w._reversed?0:w.totalDuration()):w._enabled(!1,!1))},t.killChildTweensOf=function(c,m){if(c!=null){var d=r.tweenLookup,y,g,u,b,T;if(typeof c=="string"&&(c=st.selector(c)||c),s(c)&&(c=n(c)),o(c)){for(b=c.length;--b>-1;)t.killChildTweensOf(c[b],m);return}y=[];for(u in d)for(g=d[u].target.parentNode;g;)g===c&&(y=y.concat(d[u].tweens)),g=g.parentNode;for(T=y.length,b=0;b<T;b++)m&&y[b].totalTime(y[b].totalDuration()),y[b]._enabled(!1,!1)}};var p=function(c,m,d,y){m=m!==!1,d=d!==!1,y=y!==!1;for(var g=h(y),u=m&&d&&y,b=g.length,T,w;--b>-1;)w=g[b],(u||w instanceof nr||(T=w.target===w.vars.onComplete)&&d||m&&!T)&&w.paused(c)};return t.pauseAll=function(c,m,d){p(!0,c,m,d)},t.resumeAll=function(c,m,d){p(!1,c,m,d)},t.globalTimeScale=function(c){var m=$t._rootTimeline,d=st.ticker.time;return arguments.length?(c=c||i,m._startTime=d-(d-m._startTime)*m._timeScale/c,m=$t._rootFramesTimeline,d=st.ticker.frame,m._startTime=d-(d-m._startTime)*m._timeScale/c,m._timeScale=$t._rootTimeline._timeScale=c,c):m._timeScale},a.progress=function(c,m){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&this._cycle&1?1-c:c)+this._cycle*(this._duration+this._repeatDelay),m):this._time/this.duration()},a.totalProgress=function(c,m){return arguments.length?this.totalTime(this.totalDuration()*c,m):this._totalTime/this.totalDuration()},a.time=function(c,m){return arguments.length?(this._dirty&&this.totalDuration(),c>this._duration&&(c=this._duration),this._yoyo&&this._cycle&1?c=this._duration-c+this._cycle*(this._duration+this._repeatDelay):this._repeat!==0&&(c+=this._cycle*(this._duration+this._repeatDelay)),this.totalTime(c,m)):this._time},a.duration=function(c){return arguments.length?$t.prototype.duration.call(this,c):this._duration},a.totalDuration=function(c){return arguments.length?this._repeat===-1?this:this.duration((c-this._repeat*this._repeatDelay)/(this._repeat+1)):(this._dirty&&(this._totalDuration=this._repeat===-1?999999999999:this._duration*(this._repeat+1)+this._repeatDelay*this._repeat,this._dirty=!1),this._totalDuration)},a.repeat=function(c){return arguments.length?(this._repeat=c,this._uncache(!0)):this._repeat},a.repeatDelay=function(c){return arguments.length?(this._repeatDelay=c,this._uncache(!0)):this._repeatDelay},a.yoyo=function(c){return arguments.length?(this._yoyo=c,this):this._yoyo},t},!0);var eM=Pt.TweenMax;/*!
 * VERSION: 2.0.2
 * DATE: 2018-08-27
 * UPDATES AND DOCS AT: http://greensock.com
 *
 * @license Copyright (c) 2008-2018, GreenSock. All rights reserved.
 * This work is subject to the terms at http://greensock.com/standard-license or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 * 
 * @author: Jack Doyle, jack@greensock.com
 */Ct._gsDefine("plugins.CSSPlugin",["plugins.TweenPlugin","TweenLite"],function(){var n=function(){Ma.call(this,"css"),this._overwriteProps.length=0,this.setRatio=n.prototype.setRatio},e=Ct._gsDefine.globals,t,i,r,s,o={},a=n.prototype=new Ma("css");a.constructor=n,n.version="2.0.2",n.API=2,n.defaultTransformPerspective=0,n.defaultSkewType="compensated",n.defaultSmoothOrigin=!0,a="px",n.suffixMap={top:a,right:a,bottom:a,left:a,width:a,height:a,fontSize:a,padding:a,margin:a,perspective:a,lineHeight:""};var l=/(?:\-|\.|\b)(\d|\.|e\-)+/g,f=/(?:\d|\-\d|\.\d|\-\.\d|\+=\d|\-=\d|\+=.\d|\-=\.\d)+/g,h=/(?:\+=|\-=|\-|\b)[\d\-\.]+[a-zA-Z0-9]*(?:%|\b)/gi,p=/(?![+-]?\d*\.?\d+|[+-]|e[+-]\d+)[^0-9]/g,c=/(?:\d|\-|\+|=|#|\.)*/g,m=/opacity *= *([^)]*)/i,d=/opacity:([^;]*)/i,y=/alpha\(opacity *=.+?\)/i,g=/^(rgb|hsl)/,u=/([A-Z])/g,b=/-([a-z])/gi,T=/(^(?:url\(\"|url\())|(?:(\"\))$|\)$)/gi,w=function(x,S){return S.toUpperCase()},G=/(?:Left|Right|Width)/i,O=/(M11|M12|M21|M22)=[\d\-\.e]+/gi,k=/progid\:DXImageTransform\.Microsoft\.Matrix\(.+?\)/i,q=/,(?=[^\)]*(?:\(|$))/gi,le=/[\s,\(]/i,A=Math.PI/180,D=180/Math.PI,re={},ee={style:{}},pe=Ct.document||{createElement:function(){return ee}},oe=function(x,S){return pe.createElementNS?pe.createElementNS(S||"http://www.w3.org/1999/xhtml",x):pe.createElement(x)},ae=oe("div"),_e=oe("img"),te=n._internals={_specialProps:o},Ne=(Ct.navigator||{}).userAgent||"",ze,He,Qe,it,Se,Pe,Oe=function(){var x=Ne.indexOf("Android"),S=oe("a");return Qe=Ne.indexOf("Safari")!==-1&&Ne.indexOf("Chrome")===-1&&(x===-1||parseFloat(Ne.substr(x+8,2))>3),Se=Qe&&parseFloat(Ne.substr(Ne.indexOf("Version/")+8,2))<6,it=Ne.indexOf("Firefox")!==-1,(/MSIE ([0-9]{1,}[\.0-9]{0,})/.exec(Ne)||/Trident\/.*rv:([0-9]{1,}[\.0-9]{0,})/.exec(Ne))&&(Pe=parseFloat(RegExp.$1)),S?(S.style.cssText="top:1px;opacity:.55;",/^0.55/.test(S.style.opacity)):!1}(),Z=function(x){return m.test(typeof x=="string"?x:(x.currentStyle?x.currentStyle.filter:x.style.filter)||"")?parseFloat(RegExp.$1)/100:1},we=function(x){Ct.console},xe,De,qe="",We="",E=function(x,S){S=S||ae;var P=S.style,L,R;if(P[x]!==void 0)return x;for(x=x.charAt(0).toUpperCase()+x.substr(1),L=["O","Moz","ms","Ms","Webkit"],R=5;--R>-1&&P[L[R]+x]===void 0;);return R>=0?(We=R===3?"ms":L[R],qe="-"+We.toLowerCase()+"-",We+x):null},H=(typeof window<"u"?window:pe.defaultView||{getComputedStyle:function(){}}).getComputedStyle,V=n.getStyle=function(x,S,P,L,R){var z;return!Oe&&S==="opacity"?Z(x):(!L&&x.style[S]?z=x.style[S]:(P=P||H(x))?z=P[S]||P.getPropertyValue(S)||P.getPropertyValue(S.replace(u,"-$1").toLowerCase()):x.currentStyle&&(z=x.currentStyle[S]),R!=null&&(!z||z==="none"||z==="auto"||z==="auto auto")?R:z)},de=te.convertToPixels=function(x,S,P,L,R){if(L==="px"||!L&&S!=="lineHeight")return P;if(L==="auto"||!P)return 0;var z=G.test(S),I=x,B=ae.style,X=P<0,se=P===1,K,Me,ce;if(X&&(P=-P),se&&(P*=100),S==="lineHeight"&&!L)Me=H(x).lineHeight,x.style.lineHeight=P,K=parseFloat(H(x).lineHeight),x.style.lineHeight=Me;else if(L==="%"&&S.indexOf("border")!==-1)K=P/100*(z?x.clientWidth:x.clientHeight);else{if(B.cssText="border:0 solid red;position:"+V(x,"position")+";line-height:0;",L==="%"||!I.appendChild||L.charAt(0)==="v"||L==="rem"){if(I=x.parentNode||pe.body,V(I,"display").indexOf("flex")!==-1&&(B.position="absolute"),Me=I._gsCache,ce=st.ticker.frame,Me&&z&&Me.time===ce)return Me.width*P/100;B[z?"width":"height"]=P+L}else B[z?"borderLeftWidth":"borderTopWidth"]=P+L;I.appendChild(ae),K=parseFloat(ae[z?"offsetWidth":"offsetHeight"]),I.removeChild(ae),z&&L==="%"&&n.cacheWidths!==!1&&(Me=I._gsCache=I._gsCache||{},Me.time=ce,Me.width=K/P*100),K===0&&!R&&(K=de(x,S,P,L,!0))}return se&&(K/=100),X?-K:K},ie=te.calculateOffset=function(x,S,P){if(V(x,"position",P)!=="absolute")return 0;var L=S==="left"?"Left":"Top",R=V(x,"margin"+L,P);return x["offset"+L]-(de(x,S,parseFloat(R),R.replace(c,""))||0)},ye=function(x,S){var P={},L,R,z;if(S=S||H(x,null))if(L=S.length)for(;--L>-1;)z=S[L],(z.indexOf("-transform")===-1||ht===z)&&(P[z.replace(b,w)]=S.getPropertyValue(z));else for(L in S)(L.indexOf("Transform")===-1||Be===L)&&(P[L]=S[L]);else if(S=x.currentStyle||x.style)for(L in S)typeof L=="string"&&P[L]===void 0&&(P[L.replace(b,w)]=S[L]);return Oe||(P.opacity=Z(x)),R=gi(x,S,!1),P.rotation=R.rotation,P.skewX=R.skewX,P.scaleX=R.scaleX,P.scaleY=R.scaleY,P.x=R.x,P.y=R.y,Tt&&(P.z=R.z,P.rotationX=R.rotationX,P.rotationY=R.rotationY,P.scaleZ=R.scaleZ),P.filters&&delete P.filters,P},ve=function(x,S,P,L,R){var z={},I=x.style,B,X,se;for(X in P)X!=="cssText"&&X!=="length"&&isNaN(X)&&(S[X]!==(B=P[X])||R&&R[X])&&X.indexOf("Origin")===-1&&(typeof B=="number"||typeof B=="string")&&(z[X]=B==="auto"&&(X==="left"||X==="top")?ie(x,X):(B===""||B==="auto"||B==="none")&&typeof S[X]=="string"&&S[X].replace(p,"")!==""?0:B,I[X]!==void 0&&(se=new Ue(I,X,I[X],se)));if(L)for(X in L)X!=="className"&&(z[X]=L[X]);return{difs:z,firstMPT:se}},_={width:["Left","Right"],height:["Top","Bottom"]},v=["marginLeft","marginRight","marginTop","marginBottom"],M=function(x,S,P){if((x.nodeName+"").toLowerCase()==="svg")return(P||H(x))[S]||0;if(x.getCTM&&mi(x))return x.getBBox()[S]||0;var L=parseFloat(S==="width"?x.offsetWidth:x.offsetHeight),R=_[S],z=R.length;for(P=P||H(x,null);--z>-1;)L-=parseFloat(V(x,"padding"+R[z],P,!0))||0,L-=parseFloat(V(x,"border"+R[z]+"Width",P,!0))||0;return L},C=function(x,S){if(x==="contain"||x==="auto"||x==="auto auto")return x+" ";(x==null||x==="")&&(x="0 0");var P=x.split(" "),L=x.indexOf("left")!==-1?"0%":x.indexOf("right")!==-1?"100%":P[0],R=x.indexOf("top")!==-1?"0%":x.indexOf("bottom")!==-1?"100%":P[1],z;if(P.length>3&&!S){for(P=x.split(", ").join(",").split(","),x=[],z=0;z<P.length;z++)x.push(C(P[z]));return x.join(",")}return R==null?R=L==="center"?"50%":"0":R==="center"&&(R="50%"),(L==="center"||isNaN(parseFloat(L))&&(L+"").indexOf("=")===-1)&&(L="50%"),x=L+" "+R+(P.length>2?" "+P[2]:""),S&&(S.oxp=L.indexOf("%")!==-1,S.oyp=R.indexOf("%")!==-1,S.oxr=L.charAt(1)==="=",S.oyr=R.charAt(1)==="=",S.ox=parseFloat(L.replace(p,"")),S.oy=parseFloat(R.replace(p,"")),S.v=x),S||x},U=function(x,S){return typeof x=="function"&&(x=x(De,xe)),typeof x=="string"&&x.charAt(1)==="="?parseInt(x.charAt(0)+"1",10)*parseFloat(x.substr(2)):parseFloat(x)-parseFloat(S)||0},F=function(x,S){typeof x=="function"&&(x=x(De,xe));var P=typeof x=="string"&&x.charAt(1)==="=";return typeof x=="string"&&x.charAt(x.length-2)==="v"&&(x=(P?x.substr(0,2):0)+window["inner"+(x.substr(-2)==="vh"?"Height":"Width")]*(parseFloat(P?x.substr(2):x)/100)),x==null?S:P?parseInt(x.charAt(0)+"1",10)*parseFloat(x.substr(2))+S:parseFloat(x)||0},j=function(x,S,P,L){var R=1e-6,z,I,B,X,se;return typeof x=="function"&&(x=x(De,xe)),x==null?X=S:typeof x=="number"?X=x:(z=360,I=x.split("_"),se=x.charAt(1)==="=",B=(se?parseInt(x.charAt(0)+"1",10)*parseFloat(I[0].substr(2)):parseFloat(I[0]))*(x.indexOf("rad")===-1?1:D)-(se?0:S),I.length&&(L&&(L[P]=S+B),x.indexOf("short")!==-1&&(B=B%z,B!==B%(z/2)&&(B=B<0?B+z:B-z)),x.indexOf("_cw")!==-1&&B<0?B=(B+z*9999999999)%z-(B/z|0)*z:x.indexOf("ccw")!==-1&&B>0&&(B=(B-z*9999999999)%z-(B/z|0)*z)),X=S+B),X<R&&X>-R&&(X=0),X},W={aqua:[0,255,255],lime:[0,255,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,255],navy:[0,0,128],white:[255,255,255],fuchsia:[255,0,255],olive:[128,128,0],yellow:[255,255,0],orange:[255,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[255,0,0],pink:[255,192,203],cyan:[0,255,255],transparent:[255,255,255,0]},J=function(x,S,P){return x=x<0?x+1:x>1?x-1:x,(x*6<1?S+(P-S)*x*6:x<.5?P:x*3<2?S+(P-S)*(2/3-x)*6:S)*255+.5|0},Te=n.parseColor=function(x,S){var P,L,R,z,I,B,X,se,K,Me,ce;if(!x)P=W.black;else if(typeof x=="number")P=[x>>16,x>>8&255,x&255];else{if(x.charAt(x.length-1)===","&&(x=x.substr(0,x.length-1)),W[x])P=W[x];else if(x.charAt(0)==="#")x.length===4&&(L=x.charAt(1),R=x.charAt(2),z=x.charAt(3),x="#"+L+L+R+R+z+z),x=parseInt(x.substr(1),16),P=[x>>16,x>>8&255,x&255];else if(x.substr(0,3)==="hsl"){if(P=ce=x.match(l),!S)I=Number(P[0])%360/360,B=Number(P[1])/100,X=Number(P[2])/100,R=X<=.5?X*(B+1):X+B-X*B,L=X*2-R,P.length>3&&(P[3]=Number(P[3])),P[0]=J(I+1/3,L,R),P[1]=J(I,L,R),P[2]=J(I-1/3,L,R);else if(x.indexOf("=")!==-1)return x.match(f)}else P=x.match(l)||W.transparent;P[0]=Number(P[0]),P[1]=Number(P[1]),P[2]=Number(P[2]),P.length>3&&(P[3]=Number(P[3]))}return S&&!ce&&(L=P[0]/255,R=P[1]/255,z=P[2]/255,se=Math.max(L,R,z),K=Math.min(L,R,z),X=(se+K)/2,se===K?I=B=0:(Me=se-K,B=X>.5?Me/(2-se-K):Me/(se+K),I=se===L?(R-z)/Me+(R<z?6:0):se===R?(z-L)/Me+2:(L-R)/Me+4,I*=60),P[0]=I+.5|0,P[1]=B*100+.5|0,P[2]=X*100+.5|0),P},ne=function(x,S){var P=x.match(ge)||[],L=0,R="",z,I,B;if(!P.length)return x;for(z=0;z<P.length;z++)I=P[z],B=x.substr(L,x.indexOf(I,L)-L),L+=B.length+I.length,I=Te(I,S),I.length===3&&I.push(1),R+=B+(S?"hsla("+I[0]+","+I[1]+"%,"+I[2]+"%,"+I[3]:"rgba("+I.join(","))+")";return R+x.substr(L)},ge="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3}){1,2}\\b";for(a in W)ge+="|"+a+"\\b";ge=new RegExp(ge+")","gi"),n.colorStringFilter=function(x){var S=x[0]+" "+x[1],P;ge.test(S)&&(P=S.indexOf("hsl(")!==-1||S.indexOf("hsla(")!==-1,x[0]=ne(x[0],P),x[1]=ne(x[1],P)),ge.lastIndex=0},st.defaultStringFilter||(st.defaultStringFilter=n.colorStringFilter);var Fe=function(x,S,P,L){if(x==null)return function(ce){return ce};var R=S?(x.match(ge)||[""])[0]:"",z=x.split(R).join("").match(h)||[],I=x.substr(0,x.indexOf(z[0])),B=x.charAt(x.length-1)===")"?")":"",X=x.indexOf(" ")!==-1?" ":",",se=z.length,K=se>0?z[0].replace(l,""):"",Me;return se?S?(Me=function(ce){var Y,Ie,Ce,Ee;if(typeof ce=="number")ce+=K;else if(L&&q.test(ce)){for(Ee=ce.replace(q,"|").split("|"),Ce=0;Ce<Ee.length;Ce++)Ee[Ce]=Me(Ee[Ce]);return Ee.join(",")}if(Y=(ce.match(ge)||[R])[0],Ie=ce.split(Y).join("").match(h)||[],Ce=Ie.length,se>Ce--)for(;++Ce<se;)Ie[Ce]=P?Ie[(Ce-1)/2|0]:z[Ce];return I+Ie.join(X)+X+Y+B+(ce.indexOf("inset")!==-1?" inset":"")},Me):(Me=function(ce){var Y,Ie,Ce;if(typeof ce=="number")ce+=K;else if(L&&q.test(ce)){for(Ie=ce.replace(q,"|").split("|"),Ce=0;Ce<Ie.length;Ce++)Ie[Ce]=Me(Ie[Ce]);return Ie.join(",")}if(Y=ce.match(h)||[],Ce=Y.length,se>Ce--)for(;++Ce<se;)Y[Ce]=P?Y[(Ce-1)/2|0]:z[Ce];return I+Y.join(X)+B},Me):function(ce){return ce}},Le=function(x){return x=x.split(","),function(S,P,L,R,z,I,B){var X=(P+"").split(" "),se;for(B={},se=0;se<4;se++)B[x[se]]=X[se]=X[se]||X[(se-1)/2>>0];return R.parse(S,B,z,I)}};te._setPluginRatio=function(x){this.plugin.setRatio(x);for(var S=this.data,P=S.proxy,L=S.firstMPT,R=1e-6,z,I,B,X,se;L;)z=P[L.v],L.r?z=L.r(z):z<R&&z>-R&&(z=0),L.t[L.p]=z,L=L._next;if(S.autoRotate&&(S.autoRotate.rotation=S.mod?S.mod.call(this._tween,P.rotation,this.t,this._tween):P.rotation),x===1||x===0)for(L=S.firstMPT,se=x===1?"e":"b";L;){if(I=L.t,!I.type)I[se]=I.s+I.xs0;else if(I.type===1){for(X=I.xs0+I.s+I.xs1,B=1;B<I.l;B++)X+=I["xn"+B]+I["xs"+(B+1)];I[se]=X}L=L._next}};var Ue=function(x,S,P,L,R){this.t=x,this.p=S,this.v=P,this.r=R,L&&(L._prev=this,this._next=L)};te._parseToProxy=function(x,S,P,L,R,z){var I=L,B={},X={},se=P._transform,K=re,Me,ce,Y,Ie,Ce;for(P._transform=null,re=S,L=Ce=P.parse(x,S,L,R),re=K,z&&(P._transform=se,I&&(I._prev=null,I._prev&&(I._prev._next=null)));L&&L!==I;){if(L.type<=1&&(ce=L.p,X[ce]=L.s+L.c,B[ce]=L.s,z||(Ie=new Ue(L,"s",ce,Ie,L.r),L.c=0),L.type===1))for(Me=L.l;--Me>0;)Y="xn"+Me,ce=L.p+"_"+Y,X[ce]=L.data[Y],B[ce]=L[Y],z||(Ie=new Ue(L,Y,ce,Ie,L.rxp[Y]));L=L._next}return{proxy:B,end:X,firstMPT:Ie,pt:Ce}};var $e=te.CSSPropTween=function(x,S,P,L,R,z,I,B,X,se,K){this.t=x,this.p=S,this.s=P,this.c=L,this.n=I||S,x instanceof $e||s.push(this.n),this.r=B&&(typeof B=="function"?B:Math.round),this.type=z||0,X&&(this.pr=X,t=!0),this.b=se===void 0?P:se,this.e=K===void 0?P+L:K,R&&(this._next=R,R._prev=this)},Ye=function(x,S,P,L,R,z){var I=new $e(x,S,P,L-P,R,-1,z);return I.b=P,I.e=I.xs0=L,I},tt=n.parseComplex=function(x,S,P,L,R,z,I,B,X,se){P=P||z||"",typeof L=="function"&&(L=L(De,xe)),I=new $e(x,S,0,0,I,se?2:1,null,!1,B,P,L),L+="",R&&ge.test(L+P)&&(L=[P,L],n.colorStringFilter(L),P=L[0],L=L[1]);var K=P.split(", ").join(",").split(" "),Me=L.split(", ").join(",").split(" "),ce=K.length,Y=ze!==!1,Ie,Ce,Ee,be,Ae,je,Ve,Ze,et,Je,rt,ut,nt;for((L.indexOf(",")!==-1||P.indexOf(",")!==-1)&&((L+P).indexOf("rgb")!==-1||(L+P).indexOf("hsl")!==-1?(K=K.join(" ").replace(q,", ").split(" "),Me=Me.join(" ").replace(q,", ").split(" ")):(K=K.join(" ").split(",").join(", ").split(" "),Me=Me.join(" ").split(",").join(", ").split(" ")),ce=K.length),ce!==Me.length&&(K=(z||"").split(" "),ce=K.length),I.plugin=X,I.setRatio=se,ge.lastIndex=0,Ie=0;Ie<ce;Ie++)if(be=K[Ie],Ae=Me[Ie]+"",Ze=parseFloat(be),Ze||Ze===0)I.appendXtra("",Ze,U(Ae,Ze),Ae.replace(f,""),Y&&Ae.indexOf("px")!==-1?Math.round:!1,!0);else if(R&&ge.test(be))ut=Ae.indexOf(")")+1,ut=")"+(ut?Ae.substr(ut):""),nt=Ae.indexOf("hsl")!==-1&&Oe,Je=Ae,be=Te(be,nt),Ae=Te(Ae,nt),et=be.length+Ae.length>6,et&&!Oe&&Ae[3]===0?(I["xs"+I.l]+=I.l?" transparent":"transparent",I.e=I.e.split(Me[Ie]).join("transparent")):(Oe||(et=!1),nt?I.appendXtra(Je.substr(0,Je.indexOf("hsl"))+(et?"hsla(":"hsl("),be[0],U(Ae[0],be[0]),",",!1,!0).appendXtra("",be[1],U(Ae[1],be[1]),"%,",!1).appendXtra("",be[2],U(Ae[2],be[2]),et?"%,":"%"+ut,!1):I.appendXtra(Je.substr(0,Je.indexOf("rgb"))+(et?"rgba(":"rgb("),be[0],Ae[0]-be[0],",",Math.round,!0).appendXtra("",be[1],Ae[1]-be[1],",",Math.round).appendXtra("",be[2],Ae[2]-be[2],et?",":ut,Math.round),et&&(be=be.length<4?1:be[3],I.appendXtra("",be,(Ae.length<4?1:Ae[3])-be,ut,!1))),ge.lastIndex=0;else if(je=be.match(l),!je)I["xs"+I.l]+=I.l||I["xs"+I.l]?" "+Ae:Ae;else{if(Ve=Ae.match(f),!Ve||Ve.length!==je.length)return I;for(Ee=0,Ce=0;Ce<je.length;Ce++)rt=je[Ce],Je=be.indexOf(rt,Ee),I.appendXtra(be.substr(Ee,Je-Ee),Number(rt),U(Ve[Ce],rt),"",Y&&be.substr(Je+rt.length,2)==="px"?Math.round:!1,Ce===0),Ee=Je+rt.length;I["xs"+I.l]+=be.substr(Ee)}if(L.indexOf("=")!==-1&&I.data){for(ut=I.xs0+I.data.s,Ie=1;Ie<I.l;Ie++)ut+=I["xs"+Ie]+I.data["xn"+Ie];I.e=ut+I["xs"+Ie]}return I.l||(I.type=-1,I.xs0=I.e),I.xfirst||I},$=9;for(a=$e.prototype,a.l=a.pr=0;--$>0;)a["xn"+$]=0,a["xs"+$]="";a.xs0="",a._next=a._prev=a.xfirst=a.data=a.plugin=a.setRatio=a.rxp=null,a.appendXtra=function(x,S,P,L,R,z){var I=this,B=I.l;return I["xs"+B]+=z&&(B||I["xs"+B])?" "+x:x||"",!P&&B!==0&&!I.plugin?(I["xs"+B]+=S+(L||""),I):(I.l++,I.type=I.setRatio?2:1,I["xs"+I.l]=L||"",B>0?(I.data["xn"+B]=S+P,I.rxp["xn"+B]=R,I["xn"+B]=S,I.plugin||(I.xfirst=new $e(I,"xn"+B,S,P,I.xfirst||I,0,I.n,R,I.pr),I.xfirst.xs0=0),I):(I.data={s:S+P},I.rxp={},I.s=S,I.c=P,I.r=R,I))};var Xe=function(x,S){S=S||{},this.p=S.prefix&&E(x)||x,o[x]=o[this.p]=this,this.format=S.formatter||Fe(S.defaultValue,S.color,S.collapsible,S.multi),S.parser&&(this.parse=S.parser),this.clrs=S.color,this.multi=S.multi,this.keyword=S.keyword,this.dflt=S.defaultValue,this.pr=S.priority||0},fe=te._registerComplexSpecialProp=function(x,S,P){typeof S!="object"&&(S={parser:P});var L=x.split(","),R=S.defaultValue,z;for(P=P||[R],z=0;z<L.length;z++)S.prefix=z===0&&S.prefix,S.defaultValue=P[z]||R,new Xe(L[z],S)},Re=te._registerPluginProp=function(x){if(!o[x]){var S=x.charAt(0).toUpperCase()+x.substr(1)+"Plugin";fe(x,{parser:function(P,L,R,z,I,B,X){var se=e.com.greensock.plugins[S];return se?(se._cssRegister(),o[R].parse(P,L,R,z,I,B,X)):(we("Error: "+S+" js file not loaded."),I)}})}};a=Xe.prototype,a.parseComplex=function(x,S,P,L,R,z){var I=this.keyword,B,X,se,K,Me,ce;if(this.multi&&(q.test(P)||q.test(S)?(X=S.replace(q,"|").split("|"),se=P.replace(q,"|").split("|")):I&&(X=[S],se=[P])),se){for(K=se.length>X.length?se.length:X.length,B=0;B<K;B++)S=X[B]=X[B]||this.dflt,P=se[B]=se[B]||this.dflt,I&&(Me=S.indexOf(I),ce=P.indexOf(I),Me!==ce&&(ce===-1?X[B]=X[B].split(I).join(""):Me===-1&&(X[B]+=" "+I)));S=X.join(", "),P=se.join(", ")}return tt(x,this.p,S,P,this.clrs,this.dflt,L,this.pr,R,z)},a.parse=function(x,S,P,L,R,z,I){return this.parseComplex(x.style,this.format(V(x,this.p,r,!1,this.dflt)),this.format(S),R,z)},n.registerSpecialProp=function(x,S,P){fe(x,{parser:function(L,R,z,I,B,X,se){var K=new $e(L,z,0,0,B,2,z,!1,P);return K.plugin=X,K.setRatio=S(L,R,I._tween,z),K},priority:P})},n.useSVGTransformAttr=!0;var Ge="scaleX,scaleY,scaleZ,x,y,z,skewX,skewY,rotation,rotationX,rotationY,perspective,xPercent,yPercent".split(","),Be=E("transform"),ht=qe+"transform",Mt=E("transformOrigin"),Tt=E("perspective")!==null,dt=te.Transform=function(){this.perspective=parseFloat(n.defaultTransformPerspective)||0,this.force3D=n.defaultForce3D===!1||!Tt?!1:n.defaultForce3D||"auto"},Xt=Ct.SVGElement,Ft,ts=function(x,S,P){var L=pe.createElementNS("http://www.w3.org/2000/svg",x),R=/([a-z])([A-Z])/g,z;for(z in P)L.setAttributeNS(null,z.replace(R,"$1-$2").toLowerCase(),P[z]);return S.appendChild(L),L},Xn=pe.documentElement||{},qn=function(){var x=Pe||/Android/i.test(Ne)&&!Ct.chrome,S,P,L;return pe.createElementNS&&!x&&(S=ts("svg",Xn),P=ts("rect",S,{width:100,height:50,x:100}),L=P.getBoundingClientRect().width,P.style[Mt]="50% 50%",P.style[Be]="scaleX(0.5)",x=L===P.getBoundingClientRect().width&&!(it&&Tt),Xn.removeChild(S)),x}(),Hi=function(x,S,P,L,R,z){var I=x._gsTransform,B=_i(x,!0),X,se,K,Me,ce,Y,Ie,Ce,Ee,be,Ae,je,Ve,Ze;I&&(Ve=I.xOrigin,Ze=I.yOrigin),(!L||(X=L.split(" ")).length<2)&&(Ie=x.getBBox(),Ie.x===0&&Ie.y===0&&Ie.width+Ie.height===0&&(Ie={x:parseFloat(x.hasAttribute("x")?x.getAttribute("x"):x.hasAttribute("cx")?x.getAttribute("cx"):0)||0,y:parseFloat(x.hasAttribute("y")?x.getAttribute("y"):x.hasAttribute("cy")?x.getAttribute("cy"):0)||0,width:0,height:0}),S=C(S).split(" "),X=[(S[0].indexOf("%")!==-1?parseFloat(S[0])/100*Ie.width:parseFloat(S[0]))+Ie.x,(S[1].indexOf("%")!==-1?parseFloat(S[1])/100*Ie.height:parseFloat(S[1]))+Ie.y]),P.xOrigin=Me=parseFloat(X[0]),P.yOrigin=ce=parseFloat(X[1]),L&&B!==mr&&(Y=B[0],Ie=B[1],Ce=B[2],Ee=B[3],be=B[4],Ae=B[5],je=Y*Ee-Ie*Ce,je&&(se=Me*(Ee/je)+ce*(-Ce/je)+(Ce*Ae-Ee*be)/je,K=Me*(-Ie/je)+ce*(Y/je)-(Y*Ae-Ie*be)/je,Me=P.xOrigin=X[0]=se,ce=P.yOrigin=X[1]=K)),I&&(z&&(P.xOffset=I.xOffset,P.yOffset=I.yOffset,I=P),R||R!==!1&&n.defaultSmoothOrigin!==!1?(se=Me-Ve,K=ce-Ze,I.xOffset+=se*B[0]+K*B[2]-se,I.yOffset+=se*B[1]+K*B[3]-K):I.xOffset=I.yOffset=0),z||x.setAttribute("data-svg-origin",X.join(" "))},ns=function(x){var S=oe("svg",this.ownerSVGElement&&this.ownerSVGElement.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),P=this.parentNode,L=this.nextSibling,R=this.style.cssText,z;if(Xn.appendChild(S),S.appendChild(this),this.style.display="block",x)try{z=this.getBBox(),this._originalGetBBox=this.getBBox,this.getBBox=ns}catch{}else this._originalGetBBox&&(z=this._originalGetBBox());return L?P.insertBefore(this,L):P.appendChild(this),Xn.removeChild(S),this.style.cssText=R,z},$s=function(x){try{return x.getBBox()}catch{return ns.call(x,!0)}},mi=function(x){return!!(Xt&&x.getCTM&&(!x.parentNode||x.ownerSVGElement)&&$s(x))},mr=[1,0,0,1,0,0],_i=function(x,S){var P=x._gsTransform||new dt,L=1e5,R=x.style,z,I,B,X,se,K;if(Be?I=V(x,ht,null,!0):x.currentStyle&&(I=x.currentStyle.filter.match(O),I=I&&I.length===4?[I[0].substr(4),Number(I[2].substr(4)),Number(I[1].substr(4)),I[3].substr(4),P.x||0,P.y||0].join(","):""),z=!I||I==="none"||I==="matrix(1, 0, 0, 1, 0, 0)",Be&&((K=!H(x)||H(x).display==="none")||!x.parentNode)&&(K&&(X=R.display,R.display="block"),x.parentNode||(se=1,Xn.appendChild(x)),I=V(x,ht,null,!0),z=!I||I==="none"||I==="matrix(1, 0, 0, 1, 0, 0)",X?R.display=X:K&&Gi(R,"display"),se&&Xn.removeChild(x)),(P.svg||x.getCTM&&mi(x))&&(z&&(R[Be]+"").indexOf("matrix")!==-1&&(I=R[Be],z=0),B=x.getAttribute("transform"),z&&B&&(B=x.transform.baseVal.consolidate().matrix,I="matrix("+B.a+","+B.b+","+B.c+","+B.d+","+B.e+","+B.f+")",z=0)),z)return mr;for(B=(I||"").match(l)||[],$=B.length;--$>-1;)X=Number(B[$]),B[$]=(se=X-(X|=0))?(se*L+(se<0?-.5:.5)|0)/L+X:X;return S&&B.length>6?[B[0],B[1],B[4],B[5],B[12],B[13]]:B},gi=te.getTransform=function(x,S,P,L){if(x._gsTransform&&P&&!L)return x._gsTransform;var R=P?x._gsTransform||new dt:new dt,z=R.scaleX<0,I=2e-5,B=1e5,X=Tt&&(parseFloat(V(x,Mt,S,!1,"0 0 0").split(" ")[2])||R.zOrigin)||0,se=parseFloat(n.defaultTransformPerspective)||0,K,Me,ce,Y,Ie,Ce;if(R.svg=!!(x.getCTM&&mi(x)),R.svg&&(Hi(x,V(x,Mt,S,!1,"50% 50%")+"",R,x.getAttribute("data-svg-origin")),Ft=n.useSVGTransformAttr||qn),K=_i(x),K!==mr){if(K.length===16){var Ee=K[0],be=K[1],Ae=K[2],je=K[3],Ve=K[4],Ze=K[5],et=K[6],Je=K[7],rt=K[8],ut=K[9],nt=K[10],Yn=K[12],jn=K[13],Vt=K[14],qt=K[11],Ke=Math.atan2(et,nt),At,Rt,$n,pt,ft;R.zOrigin&&(Vt=-R.zOrigin,Yn=rt*Vt-K[12],jn=ut*Vt-K[13],Vt=nt*Vt+R.zOrigin-K[14]),R.rotationX=Ke*D,Ke&&(pt=Math.cos(-Ke),ft=Math.sin(-Ke),At=Ve*pt+rt*ft,Rt=Ze*pt+ut*ft,$n=et*pt+nt*ft,rt=Ve*-ft+rt*pt,ut=Ze*-ft+ut*pt,nt=et*-ft+nt*pt,qt=Je*-ft+qt*pt,Ve=At,Ze=Rt,et=$n),Ke=Math.atan2(-Ae,nt),R.rotationY=Ke*D,Ke&&(pt=Math.cos(-Ke),ft=Math.sin(-Ke),At=Ee*pt-rt*ft,Rt=be*pt-ut*ft,$n=Ae*pt-nt*ft,ut=be*ft+ut*pt,nt=Ae*ft+nt*pt,qt=je*ft+qt*pt,Ee=At,be=Rt,Ae=$n),Ke=Math.atan2(be,Ee),R.rotation=Ke*D,Ke&&(pt=Math.cos(Ke),ft=Math.sin(Ke),At=Ee*pt+be*ft,Rt=Ve*pt+Ze*ft,$n=rt*pt+ut*ft,be=be*pt-Ee*ft,Ze=Ze*pt-Ve*ft,ut=ut*pt-rt*ft,Ee=At,Ve=Rt,rt=$n),R.rotationX&&Math.abs(R.rotationX)+Math.abs(R.rotation)>359.9&&(R.rotationX=R.rotation=0,R.rotationY=180-R.rotationY),Ke=Math.atan2(Ve,Ze),R.scaleX=(Math.sqrt(Ee*Ee+be*be+Ae*Ae)*B+.5|0)/B,R.scaleY=(Math.sqrt(Ze*Ze+et*et)*B+.5|0)/B,R.scaleZ=(Math.sqrt(rt*rt+ut*ut+nt*nt)*B+.5|0)/B,Ee/=R.scaleX,Ve/=R.scaleY,be/=R.scaleX,Ze/=R.scaleY,Math.abs(Ke)>I?(R.skewX=Ke*D,Ve=0,R.skewType!=="simple"&&(R.scaleY*=1/Math.cos(Ke))):R.skewX=0,R.perspective=qt?1/(qt<0?-qt:qt):0,R.x=Yn,R.y=jn,R.z=Vt,R.svg&&(R.x-=R.xOrigin-(R.xOrigin*Ee-R.yOrigin*Ve),R.y-=R.yOrigin-(R.yOrigin*be-R.xOrigin*Ze))}else if(!Tt||L||!K.length||R.x!==K[4]||R.y!==K[5]||!R.rotationX&&!R.rotationY){var Bt=K.length>=6,Mn=Bt?K[0]:1,en=K[1]||0,is=K[2]||0,rs=Bt?K[3]:1;R.x=K[4]||0,R.y=K[5]||0,ce=Math.sqrt(Mn*Mn+en*en),Y=Math.sqrt(rs*rs+is*is),Ie=Mn||en?Math.atan2(en,Mn)*D:R.rotation||0,Ce=is||rs?Math.atan2(is,rs)*D+Ie:R.skewX||0,R.scaleX=ce,R.scaleY=Y,R.rotation=Ie,R.skewX=Ce,Tt&&(R.rotationX=R.rotationY=R.z=0,R.perspective=se,R.scaleZ=1),R.svg&&(R.x-=R.xOrigin-(R.xOrigin*Mn+R.yOrigin*is),R.y-=R.yOrigin-(R.xOrigin*en+R.yOrigin*rs))}Math.abs(R.skewX)>90&&Math.abs(R.skewX)<270&&(z?(R.scaleX*=-1,R.skewX+=R.rotation<=0?180:-180,R.rotation+=R.rotation<=0?180:-180):(R.scaleY*=-1,R.skewX+=R.skewX<=0?180:-180)),R.zOrigin=X;for(Me in R)R[Me]<I&&R[Me]>-I&&(R[Me]=0)}return P&&(x._gsTransform=R,R.svg&&(Ft&&x.style[Be]?st.delayedCall(.001,function(){Gi(x.style,Be)}):!Ft&&x.getAttribute("transform")&&st.delayedCall(.001,function(){x.removeAttribute("transform")}))),R},Ks=function(x){var S=this.data,P=-S.rotation*A,L=P+S.skewX*A,R=1e5,z=(Math.cos(P)*S.scaleX*R|0)/R,I=(Math.sin(P)*S.scaleX*R|0)/R,B=(Math.sin(L)*-S.scaleY*R|0)/R,X=(Math.cos(L)*S.scaleY*R|0)/R,se=this.t.style,K=this.t.currentStyle,Me,ce;if(K){ce=I,I=-B,B=-ce,Me=K.filter,se.filter="";var Y=this.t.offsetWidth,Ie=this.t.offsetHeight,Ce=K.position!=="absolute",Ee="progid:DXImageTransform.Microsoft.Matrix(M11="+z+", M12="+I+", M21="+B+", M22="+X,be=S.x+Y*S.xPercent/100,Ae=S.y+Ie*S.yPercent/100,je,Ve;if(S.ox!=null&&(je=(S.oxp?Y*S.ox*.01:S.ox)-Y/2,Ve=(S.oyp?Ie*S.oy*.01:S.oy)-Ie/2,be+=je-(je*z+Ve*I),Ae+=Ve-(je*B+Ve*X)),Ce?(je=Y/2,Ve=Ie/2,Ee+=", Dx="+(je-(je*z+Ve*I)+be)+", Dy="+(Ve-(je*B+Ve*X)+Ae)+")"):Ee+=", sizingMethod='auto expand')",Me.indexOf("DXImageTransform.Microsoft.Matrix(")!==-1?se.filter=Me.replace(k,Ee):se.filter=Ee+" "+Me,(x===0||x===1)&&z===1&&I===0&&B===0&&X===1&&(!Ce||Ee.indexOf("Dx=0, Dy=0")!==-1)&&(!m.test(Me)||parseFloat(RegExp.$1)===100)&&Me.indexOf(Me.indexOf("Alpha"))===-1&&se.removeAttribute("filter"),!Ce){var Ze=Pe<8?1:-1,et,Je,rt;for(je=S.ieOffsetX||0,Ve=S.ieOffsetY||0,S.ieOffsetX=Math.round((Y-((z<0?-z:z)*Y+(I<0?-I:I)*Ie))/2+be),S.ieOffsetY=Math.round((Ie-((X<0?-X:X)*Ie+(B<0?-B:B)*Y))/2+Ae),$=0;$<4;$++)Je=v[$],et=K[Je],ce=et.indexOf("px")!==-1?parseFloat(et):de(this.t,Je,parseFloat(et),et.replace(c,""))||0,ce!==S[Je]?rt=$<2?-S.ieOffsetX:-S.ieOffsetY:rt=$<2?je-S.ieOffsetX:Ve-S.ieOffsetY,se[Je]=(S[Je]=Math.round(ce-rt*($===0||$===2?1:Ze)))+"px"}}},ho=te.set3DTransformRatio=te.setTransformRatio=function(x){var S=this.data,P=this.t.style,L=S.rotation,R=S.rotationX,z=S.rotationY,I=S.scaleX,B=S.scaleY,X=S.scaleZ,se=S.x,K=S.y,Me=S.z,ce=S.svg,Y=S.perspective,Ie=S.force3D,Ce=S.skewY,Ee=S.skewX,be,Ae,je,Ve,Ze,et,Je,rt,ut,nt,Yn,jn,Vt,qt,Ke,At,Rt,$n,pt,ft,Bt,Mn,en;if(Ce&&(Ee+=Ce,L+=Ce),((x===1||x===0)&&Ie==="auto"&&(this.tween._totalTime===this.tween._totalDuration||!this.tween._totalTime)||!Ie)&&!Me&&!Y&&!z&&!R&&X===1||Ft&&ce||!Tt){L||Ee||ce?(L*=A,Mn=Ee*A,en=1e5,Ae=Math.cos(L)*I,Ze=Math.sin(L)*I,je=Math.sin(L-Mn)*-B,et=Math.cos(L-Mn)*B,Mn&&S.skewType==="simple"&&(be=Math.tan(Mn-Ce*A),be=Math.sqrt(1+be*be),je*=be,et*=be,Ce&&(be=Math.tan(Ce*A),be=Math.sqrt(1+be*be),Ae*=be,Ze*=be)),ce&&(se+=S.xOrigin-(S.xOrigin*Ae+S.yOrigin*je)+S.xOffset,K+=S.yOrigin-(S.xOrigin*Ze+S.yOrigin*et)+S.yOffset,Ft&&(S.xPercent||S.yPercent)&&(Ke=this.t.getBBox(),se+=S.xPercent*.01*Ke.width,K+=S.yPercent*.01*Ke.height),Ke=1e-6,se<Ke&&se>-Ke&&(se=0),K<Ke&&K>-Ke&&(K=0)),pt=(Ae*en|0)/en+","+(Ze*en|0)/en+","+(je*en|0)/en+","+(et*en|0)/en+","+se+","+K+")",ce&&Ft?this.t.setAttribute("transform","matrix("+pt):P[Be]=(S.xPercent||S.yPercent?"translate("+S.xPercent+"%,"+S.yPercent+"%) matrix(":"matrix(")+pt):P[Be]=(S.xPercent||S.yPercent?"translate("+S.xPercent+"%,"+S.yPercent+"%) matrix(":"matrix(")+I+",0,0,"+B+","+se+","+K+")";return}if(it&&(Ke=1e-4,I<Ke&&I>-Ke&&(I=X=2e-5),B<Ke&&B>-Ke&&(B=X=2e-5),Y&&!S.z&&!S.rotationX&&!S.rotationY&&(Y=0)),L||Ee)L*=A,At=Ae=Math.cos(L),Rt=Ze=Math.sin(L),Ee&&(L-=Ee*A,At=Math.cos(L),Rt=Math.sin(L),S.skewType==="simple"&&(be=Math.tan((Ee-Ce)*A),be=Math.sqrt(1+be*be),At*=be,Rt*=be,S.skewY&&(be=Math.tan(Ce*A),be=Math.sqrt(1+be*be),Ae*=be,Ze*=be))),je=-Rt,et=At;else if(!z&&!R&&X===1&&!Y&&!ce){P[Be]=(S.xPercent||S.yPercent?"translate("+S.xPercent+"%,"+S.yPercent+"%) translate3d(":"translate3d(")+se+"px,"+K+"px,"+Me+"px)"+(I!==1||B!==1?" scale("+I+","+B+")":"");return}else Ae=et=1,je=Ze=0;nt=1,Ve=Je=rt=ut=Yn=jn=0,Vt=Y?-1/Y:0,qt=S.zOrigin,Ke=1e-6,ft=",",Bt="0",L=z*A,L&&(At=Math.cos(L),Rt=Math.sin(L),rt=-Rt,Yn=Vt*-Rt,Ve=Ae*Rt,Je=Ze*Rt,nt=At,Vt*=At,Ae*=At,Ze*=At),L=R*A,L&&(At=Math.cos(L),Rt=Math.sin(L),be=je*At+Ve*Rt,$n=et*At+Je*Rt,ut=nt*Rt,jn=Vt*Rt,Ve=je*-Rt+Ve*At,Je=et*-Rt+Je*At,nt=nt*At,Vt=Vt*At,je=be,et=$n),X!==1&&(Ve*=X,Je*=X,nt*=X,Vt*=X),B!==1&&(je*=B,et*=B,ut*=B,jn*=B),I!==1&&(Ae*=I,Ze*=I,rt*=I,Yn*=I),(qt||ce)&&(qt&&(se+=Ve*-qt,K+=Je*-qt,Me+=nt*-qt+qt),ce&&(se+=S.xOrigin-(S.xOrigin*Ae+S.yOrigin*je)+S.xOffset,K+=S.yOrigin-(S.xOrigin*Ze+S.yOrigin*et)+S.yOffset),se<Ke&&se>-Ke&&(se=Bt),K<Ke&&K>-Ke&&(K=Bt),Me<Ke&&Me>-Ke&&(Me=0)),pt=S.xPercent||S.yPercent?"translate("+S.xPercent+"%,"+S.yPercent+"%) matrix3d(":"matrix3d(",pt+=(Ae<Ke&&Ae>-Ke?Bt:Ae)+ft+(Ze<Ke&&Ze>-Ke?Bt:Ze)+ft+(rt<Ke&&rt>-Ke?Bt:rt),pt+=ft+(Yn<Ke&&Yn>-Ke?Bt:Yn)+ft+(je<Ke&&je>-Ke?Bt:je)+ft+(et<Ke&&et>-Ke?Bt:et),R||z||X!==1?(pt+=ft+(ut<Ke&&ut>-Ke?Bt:ut)+ft+(jn<Ke&&jn>-Ke?Bt:jn)+ft+(Ve<Ke&&Ve>-Ke?Bt:Ve),pt+=ft+(Je<Ke&&Je>-Ke?Bt:Je)+ft+(nt<Ke&&nt>-Ke?Bt:nt)+ft+(Vt<Ke&&Vt>-Ke?Bt:Vt)+ft):pt+=",0,0,0,0,1,0,",pt+=se+ft+K+ft+Me+ft+(Y?1+-Me/Y:1)+")",P[Be]=pt};a=dt.prototype,a.x=a.y=a.z=a.skewX=a.skewY=a.rotation=a.rotationX=a.rotationY=a.zOrigin=a.xPercent=a.yPercent=a.xOffset=a.yOffset=0,a.scaleX=a.scaleY=a.scaleZ=1,fe("transform,scale,scaleX,scaleY,scaleZ,x,y,z,rotation,rotationX,rotationY,rotationZ,skewX,skewY,shortRotation,shortRotationX,shortRotationY,shortRotationZ,transformOrigin,svgOrigin,transformPerspective,directionalRotation,parseTransform,force3D,skewType,xPercent,yPercent,smoothOrigin",{parser:function(x,S,P,L,R,z,I){if(L._lastParsedTransform===I)return R;L._lastParsedTransform=I;var B=I.scale&&typeof I.scale=="function"?I.scale:0,X;typeof I[P]=="function"&&(X=I[P],I[P]=S),B&&(I.scale=B(De,x));var se=x._gsTransform,K=x.style,Me=1e-6,ce=Ge.length,Y=I,Ie={},Ce="transformOrigin",Ee=gi(x,r,!0,Y.parseTransform),be=Y.transform&&(typeof Y.transform=="function"?Y.transform(De,xe):Y.transform),Ae,je,Ve,Ze,et,Je,rt,ut,nt;if(Ee.skewType=Y.skewType||Ee.skewType||n.defaultSkewType,L._transform=Ee,"rotationZ"in Y&&(Y.rotation=Y.rotationZ),be&&typeof be=="string"&&Be)je=ae.style,je[Be]=be,je.display="block",je.position="absolute",be.indexOf("%")!==-1&&(je.width=V(x,"width"),je.height=V(x,"height")),pe.body.appendChild(ae),Ae=gi(ae,null,!1),Ee.skewType==="simple"&&(Ae.scaleY*=Math.cos(Ae.skewX*A)),Ee.svg&&(Je=Ee.xOrigin,rt=Ee.yOrigin,Ae.x-=Ee.xOffset,Ae.y-=Ee.yOffset,(Y.transformOrigin||Y.svgOrigin)&&(be={},Hi(x,C(Y.transformOrigin),be,Y.svgOrigin,Y.smoothOrigin,!0),Je=be.xOrigin,rt=be.yOrigin,Ae.x-=be.xOffset-Ee.xOffset,Ae.y-=be.yOffset-Ee.yOffset),(Je||rt)&&(ut=_i(ae,!0),Ae.x-=Je-(Je*ut[0]+rt*ut[2]),Ae.y-=rt-(Je*ut[1]+rt*ut[3]))),pe.body.removeChild(ae),Ae.perspective||(Ae.perspective=Ee.perspective),Y.xPercent!=null&&(Ae.xPercent=F(Y.xPercent,Ee.xPercent)),Y.yPercent!=null&&(Ae.yPercent=F(Y.yPercent,Ee.yPercent));else if(typeof Y=="object"){if(Ae={scaleX:F(Y.scaleX!=null?Y.scaleX:Y.scale,Ee.scaleX),scaleY:F(Y.scaleY!=null?Y.scaleY:Y.scale,Ee.scaleY),scaleZ:F(Y.scaleZ,Ee.scaleZ),x:F(Y.x,Ee.x),y:F(Y.y,Ee.y),z:F(Y.z,Ee.z),xPercent:F(Y.xPercent,Ee.xPercent),yPercent:F(Y.yPercent,Ee.yPercent),perspective:F(Y.transformPerspective,Ee.perspective)},et=Y.directionalRotation,et!=null)if(typeof et=="object")for(je in et)Y[je]=et[je];else Y.rotation=et;typeof Y.x=="string"&&Y.x.indexOf("%")!==-1&&(Ae.x=0,Ae.xPercent=F(Y.x,Ee.xPercent)),typeof Y.y=="string"&&Y.y.indexOf("%")!==-1&&(Ae.y=0,Ae.yPercent=F(Y.y,Ee.yPercent)),Ae.rotation=j("rotation"in Y?Y.rotation:"shortRotation"in Y?Y.shortRotation+"_short":Ee.rotation,Ee.rotation,"rotation",Ie),Tt&&(Ae.rotationX=j("rotationX"in Y?Y.rotationX:"shortRotationX"in Y?Y.shortRotationX+"_short":Ee.rotationX||0,Ee.rotationX,"rotationX",Ie),Ae.rotationY=j("rotationY"in Y?Y.rotationY:"shortRotationY"in Y?Y.shortRotationY+"_short":Ee.rotationY||0,Ee.rotationY,"rotationY",Ie)),Ae.skewX=j(Y.skewX,Ee.skewX),Ae.skewY=j(Y.skewY,Ee.skewY)}for(Tt&&Y.force3D!=null&&(Ee.force3D=Y.force3D,Ze=!0),Ve=Ee.force3D||Ee.z||Ee.rotationX||Ee.rotationY||Ae.z||Ae.rotationX||Ae.rotationY||Ae.perspective,!Ve&&Y.scale!=null&&(Ae.scaleZ=1);--ce>-1;)nt=Ge[ce],be=Ae[nt]-Ee[nt],(be>Me||be<-Me||Y[nt]!=null||re[nt]!=null)&&(Ze=!0,R=new $e(Ee,nt,Ee[nt],be,R),nt in Ie&&(R.e=Ie[nt]),R.xs0=0,R.plugin=z,L._overwriteProps.push(R.n));return be=Y.transformOrigin,Ee.svg&&(be||Y.svgOrigin)&&(Je=Ee.xOffset,rt=Ee.yOffset,Hi(x,C(be),Ae,Y.svgOrigin,Y.smoothOrigin),R=Ye(Ee,"xOrigin",(se?Ee:Ae).xOrigin,Ae.xOrigin,R,Ce),R=Ye(Ee,"yOrigin",(se?Ee:Ae).yOrigin,Ae.yOrigin,R,Ce),(Je!==Ee.xOffset||rt!==Ee.yOffset)&&(R=Ye(Ee,"xOffset",se?Je:Ee.xOffset,Ee.xOffset,R,Ce),R=Ye(Ee,"yOffset",se?rt:Ee.yOffset,Ee.yOffset,R,Ce)),be="0px 0px"),(be||Tt&&Ve&&Ee.zOrigin)&&(Be?(Ze=!0,nt=Mt,be=(be||V(x,nt,r,!1,"50% 50%"))+"",R=new $e(K,nt,0,0,R,-1,Ce),R.b=K[nt],R.plugin=z,Tt?(je=Ee.zOrigin,be=be.split(" "),Ee.zOrigin=(be.length>2&&!(je!==0&&be[2]==="0px")?parseFloat(be[2]):je)||0,R.xs0=R.e=be[0]+" "+(be[1]||"50%")+" 0px",R=new $e(Ee,"zOrigin",0,0,R,-1,R.n),R.b=je,R.xs0=R.e=Ee.zOrigin):R.xs0=R.e=be):C(be+"",Ee)),Ze&&(L._transformType=!(Ee.svg&&Ft)&&(Ve||this._transformType===3)?3:2),X&&(I[P]=X),B&&(I.scale=B),R},prefix:!0}),fe("boxShadow",{defaultValue:"0px 0px 0px 0px #999",prefix:!0,color:!0,multi:!0,keyword:"inset"}),fe("borderRadius",{defaultValue:"0px",parser:function(x,S,P,L,R,z){S=this.format(S);var I=["borderTopLeftRadius","borderTopRightRadius","borderBottomRightRadius","borderBottomLeftRadius"],B=x.style,X,se,K,Me,ce,Y,Ie,Ce,Ee,be,Ae,je,Ve,Ze,et,Je;for(Ee=parseFloat(x.offsetWidth),be=parseFloat(x.offsetHeight),X=S.split(" "),se=0;se<I.length;se++)this.p.indexOf("border")&&(I[se]=E(I[se])),ce=Me=V(x,I[se],r,!1,"0px"),ce.indexOf(" ")!==-1&&(Me=ce.split(" "),ce=Me[0],Me=Me[1]),Y=K=X[se],Ie=parseFloat(ce),je=ce.substr((Ie+"").length),Ve=Y.charAt(1)==="=",Ve?(Ce=parseInt(Y.charAt(0)+"1",10),Y=Y.substr(2),Ce*=parseFloat(Y),Ae=Y.substr((Ce+"").length-(Ce<0?1:0))||""):(Ce=parseFloat(Y),Ae=Y.substr((Ce+"").length)),Ae===""&&(Ae=i[P]||je),Ae!==je&&(Ze=de(x,"borderLeft",Ie,je),et=de(x,"borderTop",Ie,je),Ae==="%"?(ce=Ze/Ee*100+"%",Me=et/be*100+"%"):Ae==="em"?(Je=de(x,"borderLeft",1,"em"),ce=Ze/Je+"em",Me=et/Je+"em"):(ce=Ze+"px",Me=et+"px"),Ve&&(Y=parseFloat(ce)+Ce+Ae,K=parseFloat(Me)+Ce+Ae)),R=tt(B,I[se],ce+" "+Me,Y+" "+K,!1,"0px",R);return R},prefix:!0,formatter:Fe("0px 0px 0px 0px",!1,!0)}),fe("borderBottomLeftRadius,borderBottomRightRadius,borderTopLeftRadius,borderTopRightRadius",{defaultValue:"0px",parser:function(x,S,P,L,R,z){return tt(x.style,P,this.format(V(x,P,r,!1,"0px 0px")),this.format(S),!1,"0px",R)},prefix:!0,formatter:Fe("0px 0px",!1,!0)}),fe("backgroundPosition",{defaultValue:"0 0",parser:function(x,S,P,L,R,z){var I="background-position",B=r||H(x,null),X=this.format((B?Pe?B.getPropertyValue(I+"-x")+" "+B.getPropertyValue(I+"-y"):B.getPropertyValue(I):x.currentStyle.backgroundPositionX+" "+x.currentStyle.backgroundPositionY)||"0 0"),se=this.format(S),K,Me,ce,Y,Ie,Ce;if(X.indexOf("%")!==-1!=(se.indexOf("%")!==-1)&&se.split(",").length<2&&(Ce=V(x,"backgroundImage").replace(T,""),Ce&&Ce!=="none")){for(K=X.split(" "),Me=se.split(" "),_e.setAttribute("src",Ce),ce=2;--ce>-1;)X=K[ce],Y=X.indexOf("%")!==-1,Y!==(Me[ce].indexOf("%")!==-1)&&(Ie=ce===0?x.offsetWidth-_e.width:x.offsetHeight-_e.height,K[ce]=Y?parseFloat(X)/100*Ie+"px":parseFloat(X)/Ie*100+"%");X=K.join(" ")}return this.parseComplex(x.style,X,se,R,z)},formatter:C}),fe("backgroundSize",{defaultValue:"0 0",formatter:function(x){return x+="",x.substr(0,2)==="co"?x:C(x.indexOf(" ")===-1?x+" "+x:x)}}),fe("perspective",{defaultValue:"0px",prefix:!0}),fe("perspectiveOrigin",{defaultValue:"50% 50%",prefix:!0}),fe("transformStyle",{prefix:!0}),fe("backfaceVisibility",{prefix:!0}),fe("userSelect",{prefix:!0}),fe("margin",{parser:Le("marginTop,marginRight,marginBottom,marginLeft")}),fe("padding",{parser:Le("paddingTop,paddingRight,paddingBottom,paddingLeft")}),fe("clip",{defaultValue:"rect(0px,0px,0px,0px)",parser:function(x,S,P,L,R,z){var I,B,X;return Pe<9?(B=x.currentStyle,X=Pe<8?" ":",",I="rect("+B.clipTop+X+B.clipRight+X+B.clipBottom+X+B.clipLeft+")",S=this.format(S).split(",").join(X)):(I=this.format(V(x,this.p,r,!1,this.dflt)),S=this.format(S)),this.parseComplex(x.style,I,S,R,z)}}),fe("textShadow",{defaultValue:"0px 0px 0px #999",color:!0,multi:!0}),fe("autoRound,strictUnits",{parser:function(x,S,P,L,R){return R}}),fe("border",{defaultValue:"0px solid #000",parser:function(x,S,P,L,R,z){var I=V(x,"borderTopWidth",r,!1,"0px"),B=this.format(S).split(" "),X=B[0].replace(c,"");return X!=="px"&&(I=parseFloat(I)/de(x,"borderTopWidth",1,X)+X),this.parseComplex(x.style,this.format(I+" "+V(x,"borderTopStyle",r,!1,"solid")+" "+V(x,"borderTopColor",r,!1,"#000")),B.join(" "),R,z)},color:!0,formatter:function(x){var S=x.split(" ");return S[0]+" "+(S[1]||"solid")+" "+(x.match(ge)||["#000"])[0]}}),fe("borderWidth",{parser:Le("borderTopWidth,borderRightWidth,borderBottomWidth,borderLeftWidth")}),fe("float,cssFloat,styleFloat",{parser:function(x,S,P,L,R,z){var I=x.style,B="cssFloat"in I?"cssFloat":"styleFloat";return new $e(I,B,0,0,R,-1,P,!1,0,I[B],S)}});var po=function(x){var S=this.t,P=S.filter||V(this.data,"filter")||"",L=this.s+this.c*x|0,R;L===100&&(P.indexOf("atrix(")===-1&&P.indexOf("radient(")===-1&&P.indexOf("oader(")===-1?(S.removeAttribute("filter"),R=!V(this.data,"filter")):(S.filter=P.replace(y,""),R=!0)),R||(this.xn1&&(S.filter=P=P||"alpha(opacity="+L+")"),P.indexOf("pacity")===-1?(L!==0||!this.xn1)&&(S.filter=P+" alpha(opacity="+L+")"):S.filter=P.replace(m,"opacity="+L))};fe("opacity,alpha,autoAlpha",{defaultValue:"1",parser:function(x,S,P,L,R,z){var I=parseFloat(V(x,"opacity",r,!1,"1")),B=x.style,X=P==="autoAlpha";return typeof S=="string"&&S.charAt(1)==="="&&(S=(S.charAt(0)==="-"?-1:1)*parseFloat(S.substr(2))+I),X&&I===1&&V(x,"visibility",r)==="hidden"&&S!==0&&(I=0),Oe?R=new $e(B,"opacity",I,S-I,R):(R=new $e(B,"opacity",I*100,(S-I)*100,R),R.xn1=X?1:0,B.zoom=1,R.type=2,R.b="alpha(opacity="+R.s+")",R.e="alpha(opacity="+(R.s+R.c)+")",R.data=x,R.plugin=z,R.setRatio=po),X&&(R=new $e(B,"visibility",0,0,R,-1,null,!1,0,I!==0?"inherit":"hidden",S===0?"hidden":"inherit"),R.xs0="inherit",L._overwriteProps.push(R.n),L._overwriteProps.push(P)),R}});var Gi=function(x,S){S&&(x.removeProperty?((S.substr(0,2)==="ms"||S.substr(0,6)==="webkit")&&(S="-"+S),x.removeProperty(S.replace(u,"-$1").toLowerCase())):x.removeAttribute(S))},N=function(x){if(this.t._gsClassPT=this,x===1||x===0){this.t.setAttribute("class",x===0?this.b:this.e);for(var S=this.data,P=this.t.style;S;)S.v?P[S.p]=S.v:Gi(P,S.p),S=S._next;x===1&&this.t._gsClassPT===this&&(this.t._gsClassPT=null)}else this.t.getAttribute("class")!==this.e&&this.t.setAttribute("class",this.e)};fe("className",{parser:function(x,S,P,L,R,z,I){var B=x.getAttribute("class")||"",X=x.style.cssText,se,K,Me,ce,Y;if(R=L._classNamePT=new $e(x,P,0,0,R,2),R.setRatio=N,R.pr=-11,t=!0,R.b=B,K=ye(x,r),Me=x._gsClassPT,Me){for(ce={},Y=Me.data;Y;)ce[Y.p]=1,Y=Y._next;Me.setRatio(1)}return x._gsClassPT=R,R.e=S.charAt(1)!=="="?S:B.replace(new RegExp("(?:\\s|^)"+S.substr(2)+"(?![\\w-])"),"")+(S.charAt(0)==="+"?" "+S.substr(2):""),x.setAttribute("class",R.e),se=ve(x,K,ye(x),I,ce),x.setAttribute("class",B),R.data=se.firstMPT,x.style.cssText=X,R=R.xfirst=L.parse(x,se.difs,R,z),R}});var Q=function(x){if((x===1||x===0)&&this.data._totalTime===this.data._totalDuration&&this.data.data!=="isFromStart"){var S=this.t.style,P=o.transform.parse,L,R,z,I,B;if(this.e==="all")S.cssText="",I=!0;else for(L=this.e.split(" ").join("").split(","),z=L.length;--z>-1;)R=L[z],o[R]&&(o[R].parse===P?I=!0:R=R==="transformOrigin"?Mt:o[R].p),Gi(S,R);I&&(Gi(S,Be),B=this.t._gsTransform,B&&(B.svg&&(this.t.removeAttribute("data-svg-origin"),this.t.removeAttribute("transform")),delete this.t._gsTransform))}};for(fe("clearProps",{parser:function(x,S,P,L,R){return R=new $e(x,P,0,0,R,2),R.setRatio=Q,R.e=S,R.pr=-10,R.data=L._tween,t=!0,R}}),a="bezier,throwProps,physicsProps,physics2D".split(","),$=a.length;$--;)Re(a[$]);a=n.prototype,a._firstPT=a._lastParsedTransform=a._transform=null,a._onInitTween=function(x,S,P,L){if(!x.nodeType)return!1;this._target=xe=x,this._tween=P,this._vars=S,De=L,ze=S.autoRound,t=!1,i=S.suffixMap||n.suffixMap,r=H(x,""),s=this._overwriteProps;var R=x.style,z,I,B,X,se,K,Me,ce,Y;if(He&&R.zIndex===""&&(z=V(x,"zIndex",r),(z==="auto"||z==="")&&this._addLazySet(R,"zIndex",0)),typeof S=="string"&&(X=R.cssText,z=ye(x,r),R.cssText=X+";"+S,z=ve(x,z,ye(x)).difs,!Oe&&d.test(S)&&(z.opacity=parseFloat(RegExp.$1)),S=z,R.cssText=X),S.className?this._firstPT=I=o.className.parse(x,S.className,"className",this,null,null,S):this._firstPT=I=this.parse(x,S,null),this._transformType){for(Y=this._transformType===3,Be?Qe&&(He=!0,R.zIndex===""&&(Me=V(x,"zIndex",r),(Me==="auto"||Me==="")&&this._addLazySet(R,"zIndex",0)),Se&&this._addLazySet(R,"WebkitBackfaceVisibility",this._vars.WebkitBackfaceVisibility||(Y?"visible":"hidden"))):R.zoom=1,B=I;B&&B._next;)B=B._next;ce=new $e(x,"transform",0,0,null,2),this._linkCSSP(ce,null,B),ce.setRatio=Be?ho:Ks,ce.data=this._transform||gi(x,r,!0),ce.tween=P,ce.pr=-1,s.pop()}if(t){for(;I;){for(K=I._next,B=X;B&&B.pr>I.pr;)B=B._next;(I._prev=B?B._prev:se)?I._prev._next=I:X=I,(I._next=B)?B._prev=I:se=I,I=K}this._firstPT=X}return!0},a.parse=function(x,S,P,L){var R=x.style,z,I,B,X,se,K,Me,ce,Y,Ie;for(z in S){if(K=S[z],typeof K=="function"&&(K=K(De,xe)),I=o[z],I)P=I.parse(x,K,z,this,P,L,S);else if(z.substr(0,2)==="--"){this._tween._propLookup[z]=this._addTween.call(this._tween,x.style,"setProperty",H(x).getPropertyValue(z)+"",K+"",z,!1,z);continue}else se=V(x,z,r)+"",Y=typeof K=="string",z==="color"||z==="fill"||z==="stroke"||z.indexOf("Color")!==-1||Y&&g.test(K)?(Y||(K=Te(K),K=(K.length>3?"rgba(":"rgb(")+K.join(",")+")"),P=tt(R,z,se,K,!0,"transparent",P,0,L)):Y&&le.test(K)?P=tt(R,z,se,K,!0,null,P,0,L):(B=parseFloat(se),Me=B||B===0?se.substr((B+"").length):"",(se===""||se==="auto")&&(z==="width"||z==="height"?(B=M(x,z,r),Me="px"):z==="left"||z==="top"?(B=ie(x,z,r),Me="px"):(B=z!=="opacity"?0:1,Me="")),Ie=Y&&K.charAt(1)==="=",Ie?(X=parseInt(K.charAt(0)+"1",10),K=K.substr(2),X*=parseFloat(K),ce=K.replace(c,"")):(X=parseFloat(K),ce=Y?K.replace(c,""):""),ce===""&&(ce=z in i?i[z]:Me),K=X||X===0?(Ie?X+B:X)+ce:S[z],Me!==ce&&(ce!==""||z==="lineHeight")&&(X||X===0)&&B&&(B=de(x,z,B,Me),ce==="%"?(B/=de(x,z,100,"%")/100,S.strictUnits!==!0&&(se=B+"%")):ce==="em"||ce==="rem"||ce==="vw"||ce==="vh"?B/=de(x,z,1,ce):ce!=="px"&&(X=de(x,z,X,ce),ce="px"),Ie&&(X||X===0)&&(K=X+B+ce)),Ie&&(X+=B),(B||B===0)&&(X||X===0)?(P=new $e(R,z,B,X-B,P,0,z,ze!==!1&&(ce==="px"||z==="zIndex"),0,se,K),P.xs0=ce):R[z]===void 0||!K&&(K+""=="NaN"||K==null)?we("invalid "+z+" tween value: "+S[z]):(P=new $e(R,z,X||B||0,0,P,-1,z,!1,0,se,K),P.xs0=K==="none"&&(z==="display"||z.indexOf("Style")!==-1)?se:K));L&&P&&!P.plugin&&(P.plugin=L)}return P},a.setRatio=function(x){var S=this._firstPT,P=1e-6,L,R,z;if(x===1&&(this._tween._time===this._tween._duration||this._tween._time===0))for(;S;){if(S.type!==2)if(S.r&&S.type!==-1){if(L=S.r(S.s+S.c),!S.type)S.t[S.p]=L+S.xs0;else if(S.type===1){for(z=S.l,R=S.xs0+L+S.xs1,z=1;z<S.l;z++)R+=S["xn"+z]+S["xs"+(z+1)];S.t[S.p]=R}}else S.t[S.p]=S.e;else S.setRatio(x);S=S._next}else if(x||!(this._tween._time===this._tween._duration||this._tween._time===0)||this._tween._rawPrevTime===-1e-6)for(;S;){if(L=S.c*x+S.s,S.r?L=S.r(L):L<P&&L>-P&&(L=0),!S.type)S.t[S.p]=L+S.xs0;else if(S.type===1)if(z=S.l,z===2)S.t[S.p]=S.xs0+L+S.xs1+S.xn1+S.xs2;else if(z===3)S.t[S.p]=S.xs0+L+S.xs1+S.xn1+S.xs2+S.xn2+S.xs3;else if(z===4)S.t[S.p]=S.xs0+L+S.xs1+S.xn1+S.xs2+S.xn2+S.xs3+S.xn3+S.xs4;else if(z===5)S.t[S.p]=S.xs0+L+S.xs1+S.xn1+S.xs2+S.xn2+S.xs3+S.xn3+S.xs4+S.xn4+S.xs5;else{for(R=S.xs0+L+S.xs1,z=1;z<S.l;z++)R+=S["xn"+z]+S["xs"+(z+1)];S.t[S.p]=R}else S.type===-1?S.t[S.p]=S.xs0:S.setRatio&&S.setRatio(x);S=S._next}else for(;S;)S.type!==2?S.t[S.p]=S.b:S.setRatio(x),S=S._next},a._enableTransforms=function(x){this._transform=this._transform||gi(this._target,r,!0),this._transformType=!(this._transform.svg&&Ft)&&(x||this._transformType===3)?3:2};var ue=function(x){this.t[this.p]=this.e,this.data._linkCSSP(this,this._next,null,!0)};a._addLazySet=function(x,S,P){var L=this._firstPT=new $e(x,S,0,0,this._firstPT,2);L.e=P,L.setRatio=ue,L.data=this},a._linkCSSP=function(x,S,P,L){return x&&(S&&(S._prev=x),x._next&&(x._next._prev=x._prev),x._prev?x._prev._next=x._next:this._firstPT===x&&(this._firstPT=x._next,L=!0),P?P._next=x:!L&&this._firstPT===null&&(this._firstPT=x),x._next=S,x._prev=P),x},a._mod=function(x){for(var S=this._firstPT;S;)typeof x[S.p]=="function"&&(S.r=x[S.p]),S=S._next},a._kill=function(x){var S=x,P,L,R;if(x.autoAlpha||x.alpha){S={};for(L in x)S[L]=x[L];S.opacity=1,S.autoAlpha&&(S.visibility=1)}for(x.className&&(P=this._classNamePT)&&(R=P.xfirst,R&&R._prev?this._linkCSSP(R._prev,P._next,R._prev._prev):R===this._firstPT&&(this._firstPT=P._next),P._next&&this._linkCSSP(P._next,P._next._next,R._prev),this._classNamePT=null),P=this._firstPT;P;)P.plugin&&P.plugin!==L&&P.plugin._kill&&(P.plugin._kill(x),L=P.plugin),P=P._next;return Ma.prototype._kill.call(this,S)};var he=function(x,S,P){var L,R,z,I;if(x.slice){for(R=x.length;--R>-1;)he(x[R],S,P);return}for(L=x.childNodes,R=L.length;--R>-1;)z=L[R],I=z.type,z.style&&(S.push(ye(z)),P&&P.push(z)),(I===1||I===9||I===11)&&z.childNodes.length&&he(z,S,P)};return n.cascadeTo=function(x,S,P){var L=st.to(x,S,P),R=[L],z=[],I=[],B=[],X=st._internals.reservedProps,se,K,Me,ce;for(x=L._targets||L.target,he(x,z,B),L.render(S,!0,!0),he(x,I),L.render(0,!0,!0),L._enabled(!0),se=B.length;--se>-1;)if(K=ve(B[se],z[se],I[se]),K.firstMPT){K=K.difs;for(Me in P)X[Me]&&(K[Me]=P[Me]);ce={};for(Me in K)ce[Me]=z[se][Me];R.push(st.fromTo(B[se],S,ce,K))}return R},Ma.activate([n]),n},!0);var tM=Pt.CSSPlugin;/*!
 * VERSION: 0.6.1
 * DATE: 2018-08-27
 * UPDATES AND DOCS AT: http://greensock.com
 *
 * @license Copyright (c) 2008-2018, GreenSock. All rights reserved.
 * This work is subject to the terms at http://greensock.com/standard-license or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 * 
 * @author: Jack Doyle, jack@greensock.com
 */var nM=Ct._gsDefine.plugin({propName:"attr",API:2,version:"0.6.1",init:function(n,e,t,i){var r,s;if(typeof n.setAttribute!="function")return!1;for(r in e)s=e[r],typeof s=="function"&&(s=s(i,n)),this._addTween(n,"setAttribute",n.getAttribute(r)+"",s+"",r,!1,r),this._overwriteProps.push(r);return!0}});/*!
 * VERSION: 1.6.0
 * DATE: 2018-08-27
 * UPDATES AND DOCS AT: http://greensock.com
 *
 * @license Copyright (c) 2008-2018, GreenSock. All rights reserved.
 * This work is subject to the terms at http://greensock.com/standard-license or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 * 
 * @author: Jack Doyle, jack@greensock.com
 **/var Od=Ct._gsDefine.plugin({propName:"roundProps",version:"1.7.0",priority:-1,API:2,init:function(n,e,t){return this._tween=t,!0}}),iM=function(n){var e=n<1?Math.pow(10,(n+"").length-2):1;return function(t){return(Math.round(t/n)*n*e|0)/e}},rM=function(n,e){for(;n;)!n.f&&!n.blob&&(n.m=e||Math.round),n=n._next},Fd=Od.prototype;Fd._onInitAllProps=function(){var n=this._tween,e=n.vars.roundProps,t={},i=n._propLookup.roundProps,r,s,o,a;if(typeof e=="object"&&!e.push)for(a in e)t[a]=iM(e[a]);else for(typeof e=="string"&&(e=e.split(",")),o=e.length;--o>-1;)t[e[o]]=Math.round;for(a in t)for(r=n._firstPT;r;)s=r._next,r.pg?r.t._mod(t):r.n===a&&(r.f===2&&r.t?rM(r.t._firstPT,t[a]):(this._add(r.t,a,r.s,r.c,t[a]),s&&(s._prev=r._prev),r._prev?r._prev._next=s:n._firstPT===r&&(n._firstPT=s),r._next=r._prev=null,n._propLookup[a]=i)),r=s;return!1};Fd._add=function(n,e,t,i,r){this._addTween(n,e,t,t+i,e,r||Math.round),this._overwriteProps.push(e)};/*!
 * VERSION: 0.3.1
 * DATE: 2018-08-27
 * UPDATES AND DOCS AT: http://greensock.com
 *
 * @license Copyright (c) 2008-2018, GreenSock. All rights reserved.
 * This work is subject to the terms at http://greensock.com/standard-license or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 * 
 * @author: Jack Doyle, jack@greensock.com
 **/var Bd=Ct._gsDefine.plugin({propName:"directionalRotation",version:"0.3.1",API:2,init:function(n,e,t,i){typeof e!="object"&&(e={rotation:e}),this.finals={};var r=e.useRadians===!0?Math.PI*2:360,s=1e-6,o,a,l,f,h,p;for(o in e)o!=="useRadians"&&(f=e[o],typeof f=="function"&&(f=f(i,n)),p=(f+"").split("_"),a=p[0],l=parseFloat(typeof n[o]!="function"?n[o]:n[o.indexOf("set")||typeof n["get"+o.substr(3)]!="function"?o:"get"+o.substr(3)]()),f=this.finals[o]=typeof a=="string"&&a.charAt(1)==="="?l+parseInt(a.charAt(0)+"1",10)*Number(a.substr(2)):Number(a)||0,h=f-l,p.length&&(a=p.join("_"),a.indexOf("short")!==-1&&(h=h%r,h!==h%(r/2)&&(h=h<0?h+r:h-r)),a.indexOf("_cw")!==-1&&h<0?h=(h+r*9999999999)%r-(h/r|0)*r:a.indexOf("ccw")!==-1&&h>0&&(h=(h-r*9999999999)%r-(h/r|0)*r)),(h>s||h<-s)&&(this._addTween(n,o,l,l+h,o),this._overwriteProps.push(o)));return!0},set:function(n){var e;if(n!==1)this._super.setRatio.call(this,n);else for(e=this._firstPT;e;)e.f?e.t[e.p](this.finals[e.p]):e.t[e.p]=this.finals[e.p],e=e._next}});Bd._autoCSS=!0;/*!
 * VERSION: 2.0.2
 * DATE: 2018-08-27
 * UPDATES AND DOCS AT: http://greensock.com
 *
 * @license Copyright (c) 2008-2018, GreenSock. All rights reserved.
 * This work is subject to the terms at http://greensock.com/standard-license or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 * 
 * @author: Jack Doyle, jack@greensock.com
 */Ct._gsDefine("TimelineLite",["core.Animation","core.SimpleTimeline","TweenLite"],function(){var n=function(d){nr.call(this,d),this._labels={},this.autoRemoveChildren=this.vars.autoRemoveChildren===!0,this.smoothChildTiming=this.vars.smoothChildTiming===!0,this._sortChildren=!0,this._onUpdate=this.vars.onUpdate;var y=this.vars,g,u;for(u in y)g=y[u],s(g)&&g.join("").indexOf("{self}")!==-1&&(y[u]=this._swapSelfInParams(g));s(y.tweens)&&this.add(y.tweens,0,y.align,y.stagger)},e=1e-10,t=st._internals,i=n._internals={},r=t.isSelector,s=t.isArray,o=t.lazyTweens,a=t.lazyRender,l=Ct._gsDefine.globals,f=function(d){var y={},g;for(g in d)y[g]=d[g];return y},h=function(d,y,g){var u=d.cycle,b,T;for(b in u)T=u[b],d[b]=typeof T=="function"?T(g,y[g]):T[g%T.length];delete d.cycle},p=i.pauseCallback=function(){},c=function(d){var y=[],g=d.length,u;for(u=0;u!==g;y.push(d[u++]));return y},m=n.prototype=new nr;return n.version="2.0.2",m.constructor=n,m.kill()._gc=m._forcingPlayhead=m._hasPause=!1,m.to=function(d,y,g,u){var b=g.repeat&&l.TweenMax||st;return y?this.add(new b(d,y,g),u):this.set(d,g,u)},m.from=function(d,y,g,u){return this.add((g.repeat&&l.TweenMax||st).from(d,y,g),u)},m.fromTo=function(d,y,g,u,b){var T=u.repeat&&l.TweenMax||st;return y?this.add(T.fromTo(d,y,g,u),b):this.set(d,u,b)},m.staggerTo=function(d,y,g,u,b,T,w,G){var O=new n({onComplete:T,onCompleteParams:w,callbackScope:G,smoothChildTiming:this.smoothChildTiming}),k=g.cycle,q,le;for(typeof d=="string"&&(d=st.selector(d)||d),d=d||[],r(d)&&(d=c(d)),u=u||0,u<0&&(d=c(d),d.reverse(),u*=-1),le=0;le<d.length;le++)q=f(g),q.startAt&&(q.startAt=f(q.startAt),q.startAt.cycle&&h(q.startAt,d,le)),k&&(h(q,d,le),q.duration!=null&&(y=q.duration,delete q.duration)),O.to(d[le],y,q,le*u);return this.add(O,b)},m.staggerFrom=function(d,y,g,u,b,T,w,G){return g.immediateRender=g.immediateRender!=!1,g.runBackwards=!0,this.staggerTo(d,y,g,u,b,T,w,G)},m.staggerFromTo=function(d,y,g,u,b,T,w,G,O){return u.startAt=g,u.immediateRender=u.immediateRender!=!1&&g.immediateRender!=!1,this.staggerTo(d,y,u,b,T,w,G,O)},m.call=function(d,y,g,u){return this.add(st.delayedCall(0,d,y,g),u)},m.set=function(d,y,g){return g=this._parseTimeOrLabel(g,0,!0),y.immediateRender==null&&(y.immediateRender=g===this._time&&!this._paused),this.add(new st(d,0,y),g)},n.exportRoot=function(d,y){d=d||{},d.smoothChildTiming==null&&(d.smoothChildTiming=!0);var g=new n(d),u=g._timeline,b,T,w,G;for(y==null&&(y=!0),u._remove(g,!0),g._startTime=0,g._rawPrevTime=g._time=g._totalTime=u._time,w=u._first;w;)G=w._next,(!y||!(w instanceof st&&w.target===w.vars.onComplete))&&(T=w._startTime-w._delay,T<0&&(b=1),g.add(w,T)),w=G;return u.add(g,0),b&&g.totalDuration(),g},m.add=function(d,y,g,u){var b,T,w,G,O,k;if(typeof y!="number"&&(y=this._parseTimeOrLabel(y,0,!0,d)),!(d instanceof $t))if(d instanceof Array||d&&d.push&&s(d)){for(g=g||"normal",u=u||0,b=y,T=d.length,w=0;w<T;w++)s(G=d[w])&&(G=new n({tweens:G})),this.add(G,b),typeof G!="string"&&typeof G!="function"&&(g==="sequence"?b=G._startTime+G.totalDuration()/G._timeScale:g==="start"&&(G._startTime-=G.delay())),b+=u;return this._uncache(!0)}else{if(typeof d=="string")return this.addLabel(d,y);if(typeof d=="function")d=st.delayedCall(0,d);else throw"Cannot add "+d+" into the timeline; it is not a tween, timeline, function, or string."}if(nr.prototype.add.call(this,d,y),d._time&&(b=Math.max(0,Math.min(d.totalDuration(),(this.rawTime()-d._startTime)*d._timeScale)),Math.abs(b-d._totalTime)>1e-5&&d.render(b,!1,!1)),(this._gc||this._time===this._duration)&&!this._paused&&this._duration<this.duration())for(O=this,k=O.rawTime()>d._startTime;O._timeline;)k&&O._timeline.smoothChildTiming?O.totalTime(O._totalTime,!0):O._gc&&O._enabled(!0,!1),O=O._timeline;return this},m.remove=function(d){if(d instanceof $t){this._remove(d,!1);var y=d._timeline=d.vars.useFrames?$t._rootFramesTimeline:$t._rootTimeline;return d._startTime=(d._paused?d._pauseTime:y._time)-(d._reversed?d.totalDuration()-d._totalTime:d._totalTime)/d._timeScale,this}else if(d instanceof Array||d&&d.push&&s(d)){for(var g=d.length;--g>-1;)this.remove(d[g]);return this}else if(typeof d=="string")return this.removeLabel(d);return this.kill(null,d)},m._remove=function(d,y){nr.prototype._remove.call(this,d,y);var g=this._last;return g?this._time>this.duration()&&(this._time=this._duration,this._totalTime=this._totalDuration):this._time=this._totalTime=this._duration=this._totalDuration=0,this},m.append=function(d,y){return this.add(d,this._parseTimeOrLabel(null,y,!0,d))},m.insert=m.insertMultiple=function(d,y,g,u){return this.add(d,y||0,g,u)},m.appendMultiple=function(d,y,g,u){return this.add(d,this._parseTimeOrLabel(null,y,!0,d),g,u)},m.addLabel=function(d,y){return this._labels[d]=this._parseTimeOrLabel(y),this},m.addPause=function(d,y,g,u){var b=st.delayedCall(0,p,g,u||this);return b.vars.onComplete=b.vars.onReverseComplete=y,b.data="isPause",this._hasPause=!0,this.add(b,d)},m.removeLabel=function(d){return delete this._labels[d],this},m.getLabelTime=function(d){return this._labels[d]!=null?this._labels[d]:-1},m._parseTimeOrLabel=function(d,y,g,u){var b,T;if(u instanceof $t&&u.timeline===this)this.remove(u);else if(u&&(u instanceof Array||u.push&&s(u)))for(T=u.length;--T>-1;)u[T]instanceof $t&&u[T].timeline===this&&this.remove(u[T]);if(b=typeof d=="number"&&!y?0:this.duration()>99999999999?this.recent().endTime(!1):this._duration,typeof y=="string")return this._parseTimeOrLabel(y,g&&typeof d=="number"&&this._labels[y]==null?d-b:0,g);if(y=y||0,typeof d=="string"&&(isNaN(d)||this._labels[d]!=null)){if(T=d.indexOf("="),T===-1)return this._labels[d]==null?g?this._labels[d]=b+y:y:this._labels[d]+y;y=parseInt(d.charAt(T-1)+"1",10)*Number(d.substr(T+1)),d=T>1?this._parseTimeOrLabel(d.substr(0,T-1),0,g):b}else d==null&&(d=b);return Number(d)+y},m.seek=function(d,y){return this.totalTime(typeof d=="number"?d:this._parseTimeOrLabel(d),y!==!1)},m.stop=function(){return this.paused(!0)},m.gotoAndPlay=function(d,y){return this.play(d,y)},m.gotoAndStop=function(d,y){return this.pause(d,y)},m.render=function(d,y,g){this._gc&&this._enabled(!0,!1);var u=this._time,b=this._dirty?this.totalDuration():this._totalDuration,T=this._startTime,w=this._timeScale,G=this._paused,O,k,q,le,A,D,re;if(u!==this._time&&(d+=this._time-u),d>=b-1e-7&&d>=0)this._totalTime=this._time=b,this._reversed||this._hasPausedChild()||(k=!0,le="onComplete",A=!!this._timeline.autoRemoveChildren,this._duration===0&&(d<=0&&d>=-1e-7||this._rawPrevTime<0||this._rawPrevTime===e)&&this._rawPrevTime!==d&&this._first&&(A=!0,this._rawPrevTime>e&&(le="onReverseComplete"))),this._rawPrevTime=this._duration||!y||d||this._rawPrevTime===d?d:e,d=b+1e-4;else if(d<1e-7)if(this._totalTime=this._time=0,(u!==0||this._duration===0&&this._rawPrevTime!==e&&(this._rawPrevTime>0||d<0&&this._rawPrevTime>=0))&&(le="onReverseComplete",k=this._reversed),d<0)this._active=!1,this._timeline.autoRemoveChildren&&this._reversed?(A=k=!0,le="onReverseComplete"):this._rawPrevTime>=0&&this._first&&(A=!0),this._rawPrevTime=d;else{if(this._rawPrevTime=this._duration||!y||d||this._rawPrevTime===d?d:e,d===0&&k)for(O=this._first;O&&O._startTime===0;)O._duration||(k=!1),O=O._next;d=0,this._initted||(A=!0)}else{if(this._hasPause&&!this._forcingPlayhead&&!y){if(d>=u)for(O=this._first;O&&O._startTime<=d&&!D;)O._duration||O.data==="isPause"&&!O.ratio&&!(O._startTime===0&&this._rawPrevTime===0)&&(D=O),O=O._next;else for(O=this._last;O&&O._startTime>=d&&!D;)O._duration||O.data==="isPause"&&O._rawPrevTime>0&&(D=O),O=O._prev;D&&(this._time=d=D._startTime,this._totalTime=d+this._cycle*(this._totalDuration+this._repeatDelay))}this._totalTime=this._time=this._rawPrevTime=d}if(!((this._time===u||!this._first)&&!g&&!A&&!D)){if(this._initted||(this._initted=!0),this._active||!this._paused&&this._time!==u&&d>0&&(this._active=!0),u===0&&this.vars.onStart&&(this._time!==0||!this._duration)&&(y||this._callback("onStart")),re=this._time,re>=u)for(O=this._first;O&&(q=O._next,!(re!==this._time||this._paused&&!G));)(O._active||O._startTime<=re&&!O._paused&&!O._gc)&&(D===O&&this.pause(),O._reversed?O.render((O._dirty?O.totalDuration():O._totalDuration)-(d-O._startTime)*O._timeScale,y,g):O.render((d-O._startTime)*O._timeScale,y,g)),O=q;else for(O=this._last;O&&(q=O._prev,!(re!==this._time||this._paused&&!G));){if(O._active||O._startTime<=u&&!O._paused&&!O._gc){if(D===O){for(D=O._prev;D&&D.endTime()>this._time;)D.render(D._reversed?D.totalDuration()-(d-D._startTime)*D._timeScale:(d-D._startTime)*D._timeScale,y,g),D=D._prev;D=null,this.pause()}O._reversed?O.render((O._dirty?O.totalDuration():O._totalDuration)-(d-O._startTime)*O._timeScale,y,g):O.render((d-O._startTime)*O._timeScale,y,g)}O=q}this._onUpdate&&(y||(o.length&&a(),this._callback("onUpdate"))),le&&(this._gc||(T===this._startTime||w!==this._timeScale)&&(this._time===0||b>=this.totalDuration())&&(k&&(o.length&&a(),this._timeline.autoRemoveChildren&&this._enabled(!1,!1),this._active=!1),!y&&this.vars[le]&&this._callback(le)))}},m._hasPausedChild=function(){for(var d=this._first;d;){if(d._paused||d instanceof n&&d._hasPausedChild())return!0;d=d._next}return!1},m.getChildren=function(d,y,g,u){u=u||-9999999999;for(var b=[],T=this._first,w=0;T;)T._startTime<u||(T instanceof st?y!==!1&&(b[w++]=T):(g!==!1&&(b[w++]=T),d!==!1&&(b=b.concat(T.getChildren(!0,y,g)),w=b.length))),T=T._next;return b},m.getTweensOf=function(d,y){var g=this._gc,u=[],b=0,T,w;for(g&&this._enabled(!0,!0),T=st.getTweensOf(d),w=T.length;--w>-1;)(T[w].timeline===this||y&&this._contains(T[w]))&&(u[b++]=T[w]);return g&&this._enabled(!1,!0),u},m.recent=function(){return this._recent},m._contains=function(d){for(var y=d.timeline;y;){if(y===this)return!0;y=y.timeline}return!1},m.shiftChildren=function(d,y,g){g=g||0;for(var u=this._first,b=this._labels,T;u;)u._startTime>=g&&(u._startTime+=d),u=u._next;if(y)for(T in b)b[T]>=g&&(b[T]+=d);return this._uncache(!0)},m._kill=function(d,y){if(!d&&!y)return this._enabled(!1,!1);for(var g=y?this.getTweensOf(y):this.getChildren(!0,!0,!1),u=g.length,b=!1;--u>-1;)g[u]._kill(d,y)&&(b=!0);return b},m.clear=function(d){var y=this.getChildren(!1,!0,!0),g=y.length;for(this._time=this._totalTime=0;--g>-1;)y[g]._enabled(!1,!1);return d!==!1&&(this._labels={}),this._uncache(!0)},m.invalidate=function(){for(var d=this._first;d;)d.invalidate(),d=d._next;return $t.prototype.invalidate.call(this)},m._enabled=function(d,y){if(d===this._gc)for(var g=this._first;g;)g._enabled(d,!0),g=g._next;return nr.prototype._enabled.call(this,d,y)},m.totalTime=function(d,y,g){this._forcingPlayhead=!0;var u=$t.prototype.totalTime.apply(this,arguments);return this._forcingPlayhead=!1,u},m.duration=function(d){return arguments.length?(this.duration()!==0&&d!==0&&this.timeScale(this._duration/d),this):(this._dirty&&this.totalDuration(),this._duration)},m.totalDuration=function(d){if(!arguments.length){if(this._dirty){for(var y=0,g=this._last,u=999999999999,b,T;g;)b=g._prev,g._dirty&&g.totalDuration(),g._startTime>u&&this._sortChildren&&!g._paused&&!this._calculatingDuration?(this._calculatingDuration=1,this.add(g,g._startTime-g._delay),this._calculatingDuration=0):u=g._startTime,g._startTime<0&&!g._paused&&(y-=g._startTime,this._timeline.smoothChildTiming&&(this._startTime+=g._startTime/this._timeScale,this._time-=g._startTime,this._totalTime-=g._startTime,this._rawPrevTime-=g._startTime),this.shiftChildren(-g._startTime,!1,-9999999999),u=0),T=g._startTime+g._totalDuration/g._timeScale,T>y&&(y=T),g=b;this._duration=this._totalDuration=y,this._dirty=!1}return this._totalDuration}return d&&this.totalDuration()?this.timeScale(this._totalDuration/d):this},m.paused=function(d){if(!d)for(var y=this._first,g=this._time;y;)y._startTime===g&&y.data==="isPause"&&(y._rawPrevTime=0),y=y._next;return $t.prototype.paused.apply(this,arguments)},m.usesFrames=function(){for(var d=this._timeline;d._timeline;)d=d._timeline;return d===$t._rootFramesTimeline},m.rawTime=function(d){return d&&(this._paused||this._repeat&&this.time()>0&&this.totalProgress()<1)?this._totalTime%(this._duration+this._repeatDelay):this._paused?this._totalTime:(this._timeline.rawTime(d)-this._startTime)*this._timeScale},n},!0);var Qi=Pt.TimelineLite;/*!
 * VERSION: 2.0.2
 * DATE: 2018-08-27
 * UPDATES AND DOCS AT: http://greensock.com
 *
 * @license Copyright (c) 2008-2018, GreenSock. All rights reserved.
 * This work is subject to the terms at http://greensock.com/standard-license or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 * 
 * @author: Jack Doyle, jack@greensock.com
 */Ct._gsDefine("TimelineMax",["TimelineLite","TweenLite","easing.Ease"],function(){var n=function(l){Qi.call(this,l),this._repeat=this.vars.repeat||0,this._repeatDelay=this.vars.repeatDelay||0,this._cycle=0,this._yoyo=this.vars.yoyo===!0,this._dirty=!0},e=1e-10,t=st._internals,i=t.lazyTweens,r=t.lazyRender,s=Ct._gsDefine.globals,o=new Kt(null,null,1,0),a=n.prototype=new Qi;return a.constructor=n,a.kill()._gc=!1,n.version="2.0.2",a.invalidate=function(){return this._yoyo=this.vars.yoyo===!0,this._repeat=this.vars.repeat||0,this._repeatDelay=this.vars.repeatDelay||0,this._uncache(!0),Qi.prototype.invalidate.call(this)},a.addCallback=function(l,f,h,p){return this.add(st.delayedCall(0,l,h,p),f)},a.removeCallback=function(l,f){if(l)if(f==null)this._kill(null,l);else for(var h=this.getTweensOf(l,!1),p=h.length,c=this._parseTimeOrLabel(f);--p>-1;)h[p]._startTime===c&&h[p]._enabled(!1,!1);return this},a.removePause=function(l){return this.removeCallback(Qi._internals.pauseCallback,l)},a.tweenTo=function(l,f){f=f||{};var h={ease:o,useFrames:this.usesFrames(),immediateRender:!1,lazy:!1},p=f.repeat&&s.TweenMax||st,c,m,d;for(m in f)h[m]=f[m];return h.time=this._parseTimeOrLabel(l),c=Math.abs(Number(h.time)-this._time)/this._timeScale||.001,d=new p(this,c,h),h.onStart=function(){d.target.paused(!0),d.vars.time!==d.target.time()&&c===d.duration()&&!d.isFromTo&&d.duration(Math.abs(d.vars.time-d.target.time())/d.target._timeScale).render(d.time(),!0,!0),f.onStart&&f.onStart.apply(f.onStartScope||f.callbackScope||d,f.onStartParams||[])},d},a.tweenFromTo=function(l,f,h){h=h||{},l=this._parseTimeOrLabel(l),h.startAt={onComplete:this.seek,onCompleteParams:[l],callbackScope:this},h.immediateRender=h.immediateRender!==!1;var p=this.tweenTo(f,h);return p.isFromTo=1,p.duration(Math.abs(p.vars.time-l)/this._timeScale||.001)},a.render=function(l,f,h){this._gc&&this._enabled(!0,!1);var p=this._time,c=this._dirty?this.totalDuration():this._totalDuration,m=this._duration,d=this._totalTime,y=this._startTime,g=this._timeScale,u=this._rawPrevTime,b=this._paused,T=this._cycle,w,G,O,k,q,le,A,D;if(p!==this._time&&(l+=this._time-p),l>=c-1e-7&&l>=0)this._locked||(this._totalTime=c,this._cycle=this._repeat),this._reversed||this._hasPausedChild()||(G=!0,k="onComplete",q=!!this._timeline.autoRemoveChildren,this._duration===0&&(l<=0&&l>=-1e-7||u<0||u===e)&&u!==l&&this._first&&(q=!0,u>e&&(k="onReverseComplete"))),this._rawPrevTime=this._duration||!f||l||this._rawPrevTime===l?l:e,this._yoyo&&this._cycle&1?this._time=l=0:(this._time=m,l=m+1e-4);else if(l<1e-7)if(this._locked||(this._totalTime=this._cycle=0),this._time=0,(p!==0||m===0&&u!==e&&(u>0||l<0&&u>=0)&&!this._locked)&&(k="onReverseComplete",G=this._reversed),l<0)this._active=!1,this._timeline.autoRemoveChildren&&this._reversed?(q=G=!0,k="onReverseComplete"):u>=0&&this._first&&(q=!0),this._rawPrevTime=l;else{if(this._rawPrevTime=m||!f||l||this._rawPrevTime===l?l:e,l===0&&G)for(w=this._first;w&&w._startTime===0;)w._duration||(G=!1),w=w._next;l=0,this._initted||(q=!0)}else if(m===0&&u<0&&(q=!0),this._time=this._rawPrevTime=l,this._locked||(this._totalTime=l,this._repeat!==0&&(le=m+this._repeatDelay,this._cycle=this._totalTime/le>>0,this._cycle!==0&&this._cycle===this._totalTime/le&&d<=l&&this._cycle--,this._time=this._totalTime-this._cycle*le,this._yoyo&&this._cycle&1&&(this._time=m-this._time),this._time>m?(this._time=m,l=m+1e-4):this._time<0?this._time=l=0:l=this._time)),this._hasPause&&!this._forcingPlayhead&&!f){if(l=this._time,l>=p||this._repeat&&T!==this._cycle)for(w=this._first;w&&w._startTime<=l&&!A;)w._duration||w.data==="isPause"&&!w.ratio&&!(w._startTime===0&&this._rawPrevTime===0)&&(A=w),w=w._next;else for(w=this._last;w&&w._startTime>=l&&!A;)w._duration||w.data==="isPause"&&w._rawPrevTime>0&&(A=w),w=w._prev;A&&A._startTime<m&&(this._time=l=A._startTime,this._totalTime=l+this._cycle*(this._totalDuration+this._repeatDelay))}if(this._cycle!==T&&!this._locked){var re=this._yoyo&&(T&1)!==0,ee=re===(this._yoyo&&(this._cycle&1)!==0),pe=this._totalTime,oe=this._cycle,ae=this._rawPrevTime,_e=this._time;if(this._totalTime=T*m,this._cycle<T?re=!re:this._totalTime+=m,this._time=p,this._rawPrevTime=m===0?u-1e-4:u,this._cycle=T,this._locked=!0,p=re?0:m,this.render(p,f,m===0),f||this._gc||this.vars.onRepeat&&(this._cycle=oe,this._locked=!1,this._callback("onRepeat")),p!==this._time||(ee&&(this._cycle=T,this._locked=!0,p=re?m+1e-4:-1e-4,this.render(p,!0,!1)),this._locked=!1,this._paused&&!b))return;this._time=_e,this._totalTime=pe,this._cycle=oe,this._rawPrevTime=ae}if((this._time===p||!this._first)&&!h&&!q&&!A){d!==this._totalTime&&this._onUpdate&&(f||this._callback("onUpdate"));return}else this._initted||(this._initted=!0);if(this._active||!this._paused&&this._totalTime!==d&&l>0&&(this._active=!0),d===0&&this.vars.onStart&&(this._totalTime!==0||!this._totalDuration)&&(f||this._callback("onStart")),D=this._time,D>=p)for(w=this._first;w&&(O=w._next,!(D!==this._time||this._paused&&!b));)(w._active||w._startTime<=this._time&&!w._paused&&!w._gc)&&(A===w&&this.pause(),w._reversed?w.render((w._dirty?w.totalDuration():w._totalDuration)-(l-w._startTime)*w._timeScale,f,h):w.render((l-w._startTime)*w._timeScale,f,h)),w=O;else for(w=this._last;w&&(O=w._prev,!(D!==this._time||this._paused&&!b));){if(w._active||w._startTime<=p&&!w._paused&&!w._gc){if(A===w){for(A=w._prev;A&&A.endTime()>this._time;)A.render(A._reversed?A.totalDuration()-(l-A._startTime)*A._timeScale:(l-A._startTime)*A._timeScale,f,h),A=A._prev;A=null,this.pause()}w._reversed?w.render((w._dirty?w.totalDuration():w._totalDuration)-(l-w._startTime)*w._timeScale,f,h):w.render((l-w._startTime)*w._timeScale,f,h)}w=O}this._onUpdate&&(f||(i.length&&r(),this._callback("onUpdate"))),k&&(this._locked||this._gc||(y===this._startTime||g!==this._timeScale)&&(this._time===0||c>=this.totalDuration())&&(G&&(i.length&&r(),this._timeline.autoRemoveChildren&&this._enabled(!1,!1),this._active=!1),!f&&this.vars[k]&&this._callback(k)))},a.getActive=function(l,f,h){l==null&&(l=!0),f==null&&(f=!0),h==null&&(h=!1);var p=[],c=this.getChildren(l,f,h),m=0,d=c.length,y,g;for(y=0;y<d;y++)g=c[y],g.isActive()&&(p[m++]=g);return p},a.getLabelAfter=function(l){l||l!==0&&(l=this._time);var f=this.getLabelsArray(),h=f.length,p;for(p=0;p<h;p++)if(f[p].time>l)return f[p].name;return null},a.getLabelBefore=function(l){l==null&&(l=this._time);for(var f=this.getLabelsArray(),h=f.length;--h>-1;)if(f[h].time<l)return f[h].name;return null},a.getLabelsArray=function(){var l=[],f=0,h;for(h in this._labels)l[f++]={time:this._labels[h],name:h};return l.sort(function(p,c){return p.time-c.time}),l},a.invalidate=function(){return this._locked=!1,Qi.prototype.invalidate.call(this)},a.progress=function(l,f){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&this._cycle&1?1-l:l)+this._cycle*(this._duration+this._repeatDelay),f):this._time/this.duration()||0},a.totalProgress=function(l,f){return arguments.length?this.totalTime(this.totalDuration()*l,f):this._totalTime/this.totalDuration()||0},a.totalDuration=function(l){return arguments.length?this._repeat===-1||!l?this:this.timeScale(this.totalDuration()/l):(this._dirty&&(Qi.prototype.totalDuration.call(this),this._totalDuration=this._repeat===-1?999999999999:this._duration*(this._repeat+1)+this._repeatDelay*this._repeat),this._totalDuration)},a.time=function(l,f){return arguments.length?(this._dirty&&this.totalDuration(),l>this._duration&&(l=this._duration),this._yoyo&&this._cycle&1?l=this._duration-l+this._cycle*(this._duration+this._repeatDelay):this._repeat!==0&&(l+=this._cycle*(this._duration+this._repeatDelay)),this.totalTime(l,f)):this._time},a.repeat=function(l){return arguments.length?(this._repeat=l,this._uncache(!0)):this._repeat},a.repeatDelay=function(l){return arguments.length?(this._repeatDelay=l,this._uncache(!0)):this._repeatDelay},a.yoyo=function(l){return arguments.length?(this._yoyo=l,this):this._yoyo},a.currentLabel=function(l){return arguments.length?this.seek(l,!0):this.getLabelBefore(this._time+1e-8)},n},!0);var sM=Pt.TimelineMax;/*!
 * VERSION: 1.3.8
 * DATE: 2018-05-30
 * UPDATES AND DOCS AT: http://greensock.com
 *
 * @license Copyright (c) 2008-2018, GreenSock. All rights reserved.
 * This work is subject to the terms at http://greensock.com/standard-license or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 * 
 * @author: Jack Doyle, jack@greensock.com
 **/var aM=180/Math.PI,Di=[],sr=[],er=[],Ta={},oM=Ct._gsDefine.globals,kr=function(n,e,t,i){t===i&&(t=i-(i-e)/1e6),n===e&&(e=n+(t-n)/1e6),this.a=n,this.b=e,this.c=t,this.d=i,this.da=i-n,this.ca=t-n,this.ba=e-n},lM=",x,y,z,left,top,right,bottom,marginTop,marginLeft,marginRight,marginBottom,paddingLeft,paddingTop,paddingRight,paddingBottom,backgroundPosition,backgroundPosition_y,",lc=function(n,e,t,i){var r={a:n},s={},o={},a={c:i},l=(n+e)/2,f=(e+t)/2,h=(t+i)/2,p=(l+f)/2,c=(f+h)/2,m=(c-p)/8;return r.b=l+(n-l)/4,s.b=p+m,r.c=s.a=(r.b+s.b)/2,s.c=o.a=(p+c)/2,o.b=c-m,a.b=h+(i-h)/4,o.c=a.a=(o.b+a.b)/2,[r,s,o,a]},cM=function(n,e,t,i,r){var s=n.length-1,o=0,a=n[0].a,l,f,h,p,c,m,d,y,g,u,b,T,w;for(l=0;l<s;l++)c=n[o],f=c.a,h=c.d,p=n[o+1].d,r?(b=Di[l],T=sr[l],w=(T+b)*e*.25/(i?.5:er[l]||.5),m=h-(h-f)*(i?e*.5:b!==0?w/b:0),d=h+(p-h)*(i?e*.5:T!==0?w/T:0),y=h-(m+((d-m)*(b*3/(b+T)+.5)/4||0))):(m=h-(h-f)*e*.5,d=h+(p-h)*e*.5,y=h-(m+d)/2),m+=y,d+=y,c.c=g=m,l!==0?c.b=a:c.b=a=c.a+(c.c-c.a)*.6,c.da=h-f,c.ca=g-f,c.ba=a-f,t?(u=lc(f,a,g,h),n.splice(o,1,u[0],u[1],u[2],u[3]),o+=4):o++,a=d;c=n[o],c.b=a,c.c=a+(c.d-a)*.4,c.da=c.d-c.a,c.ca=c.c-c.a,c.ba=a-c.a,t&&(u=lc(c.a,a,c.c,c.d),n.splice(o,1,u[0],u[1],u[2],u[3]))},fM=function(n,e,t,i){var r=[],s,o,a,l,f,h;if(i)for(n=[i].concat(n),o=n.length;--o>-1;)typeof(h=n[o][e])=="string"&&h.charAt(1)==="="&&(n[o][e]=i[e]+Number(h.charAt(0)+h.substr(2)));if(s=n.length-2,s<0)return r[0]=new kr(n[0][e],0,0,n[0][e]),r;for(o=0;o<s;o++)a=n[o][e],l=n[o+1][e],r[o]=new kr(a,0,0,l),t&&(f=n[o+2][e],Di[o]=(Di[o]||0)+(l-a)*(l-a),sr[o]=(sr[o]||0)+(f-l)*(f-l));return r[o]=new kr(n[o][e],0,0,n[o+1][e]),r},zd=function(n,e,t,i,r,s){var o={},a=[],l=s||n[0],f,h,p,c,m,d,y,g;r=typeof r=="string"?","+r+",":lM,e==null&&(e=1);for(h in n[0])a.push(h);if(n.length>1){for(g=n[n.length-1],y=!0,f=a.length;--f>-1;)if(h=a[f],Math.abs(l[h]-g[h])>.05){y=!1;break}y&&(n=n.concat(),s&&n.unshift(s),n.push(n[1]),s=n[n.length-3])}for(Di.length=sr.length=er.length=0,f=a.length;--f>-1;)h=a[f],Ta[h]=r.indexOf(","+h+",")!==-1,o[h]=fM(n,h,Ta[h],s);for(f=Di.length;--f>-1;)Di[f]=Math.sqrt(Di[f]),sr[f]=Math.sqrt(sr[f]);if(!i){for(f=a.length;--f>-1;)if(Ta[h])for(p=o[a[f]],d=p.length-1,c=0;c<d;c++)m=p[c+1].da/sr[c]+p[c].da/Di[c]||0,er[c]=(er[c]||0)+m*m;for(f=er.length;--f>-1;)er[f]=Math.sqrt(er[f])}for(f=a.length,c=t?4:1;--f>-1;)h=a[f],p=o[h],cM(p,e,t,i,Ta[h]),y&&(p.splice(0,c),p.splice(p.length-c,c));return o},uM=function(n,e,t){e=e||"soft";var i={},r=e==="cubic"?3:2,s=e==="soft",o=[],a,l,f,h,p,c,m,d,y,g,u;if(s&&t&&(n=[t].concat(n)),n==null||n.length<r+1)throw"invalid Bezier data";for(y in n[0])o.push(y);for(c=o.length;--c>-1;){for(y=o[c],i[y]=p=[],g=0,d=n.length,m=0;m<d;m++)a=t==null?n[m][y]:typeof(u=n[m][y])=="string"&&u.charAt(1)==="="?t[y]+Number(u.charAt(0)+u.substr(2)):Number(u),s&&m>1&&m<d-1&&(p[g++]=(a+p[g-2])/2),p[g++]=a;for(d=g-r+1,g=0,m=0;m<d;m+=r)a=p[m],l=p[m+1],f=p[m+2],h=r===2?0:p[m+3],p[g++]=u=r===3?new kr(a,l,f,h):new kr(a,(2*l+a)/3,(2*l+f)/3,f);p.length=g}return i},hM=function(n,e,t){for(var i=1/t,r=n.length,s,o,a,l,f,h,p,c,m,d,y;--r>-1;)for(d=n[r],a=d.a,l=d.d-a,f=d.c-a,h=d.b-a,s=o=0,c=1;c<=t;c++)p=i*c,m=1-p,s=o-(o=(p*p*l+3*m*(p*f+m*h))*p),y=r*t+c-1,e[y]=(e[y]||0)+s*s},dM=function(n,e){e=e>>0||6;var t=[],i=[],r=0,s=0,o=e-1,a=[],l=[],f,h,p,c;for(f in n)hM(n[f],t,e);for(p=t.length,h=0;h<p;h++)r+=Math.sqrt(t[h]),c=h%e,l[c]=r,c===o&&(s+=r,c=h/e>>0,a[c]=l,i[c]=s,r=0,l=[]);return{length:s,lengths:i,segments:a}},Oi=Ct._gsDefine.plugin({propName:"bezier",priority:-1,version:"1.3.8",API:2,global:!0,init:function(n,e,t){this._target=n,e instanceof Array&&(e={values:e}),this._func={},this._mod={},this._props=[],this._timeRes=e.timeResolution==null?6:parseInt(e.timeResolution,10);var i=e.values||[],r={},s=i[0],o=e.autoRotate||t.vars.orientToBezier,a,l,f,h,p;this._autoRotate=o?o instanceof Array?o:[["x","y","rotation",o===!0?0:Number(o)||0]]:null;for(a in s)this._props.push(a);for(f=this._props.length;--f>-1;)a=this._props[f],this._overwriteProps.push(a),l=this._func[a]=typeof n[a]=="function",r[a]=l?n[a.indexOf("set")||typeof n["get"+a.substr(3)]!="function"?a:"get"+a.substr(3)]():parseFloat(n[a]),p||r[a]!==i[0][a]&&(p=r);if(this._beziers=e.type!=="cubic"&&e.type!=="quadratic"&&e.type!=="soft"?zd(i,isNaN(e.curviness)?1:e.curviness,!1,e.type==="thruBasic",e.correlate,p):uM(i,e.type,r),this._segCount=this._beziers[a].length,this._timeRes){var c=dM(this._beziers,this._timeRes);this._length=c.length,this._lengths=c.lengths,this._segments=c.segments,this._l1=this._li=this._s1=this._si=0,this._l2=this._lengths[0],this._curSeg=this._segments[0],this._s2=this._curSeg[0],this._prec=1/this._curSeg.length}if(o=this._autoRotate)for(this._initialRotations=[],o[0]instanceof Array||(this._autoRotate=o=[o]),f=o.length;--f>-1;){for(h=0;h<3;h++)a=o[f][h],this._func[a]=typeof n[a]=="function"?n[a.indexOf("set")||typeof n["get"+a.substr(3)]!="function"?a:"get"+a.substr(3)]:!1;a=o[f][2],this._initialRotations[f]=(this._func[a]?this._func[a].call(this._target):this._target[a])||0,this._overwriteProps.push(a)}return this._startRatio=t.vars.runBackwards?1:0,!0},set:function(n){var e=this._segCount,t=this._func,i=this._target,r=n!==this._startRatio,s,o,a,l,f,h,p,c,m,d;if(!this._timeRes)s=n<0?0:n>=1?e-1:e*n>>0,h=(n-s*(1/e))*e;else{if(m=this._lengths,d=this._curSeg,n*=this._length,a=this._li,n>this._l2&&a<e-1){for(c=e-1;a<c&&(this._l2=m[++a])<=n;);this._l1=m[a-1],this._li=a,this._curSeg=d=this._segments[a],this._s2=d[this._s1=this._si=0]}else if(n<this._l1&&a>0){for(;a>0&&(this._l1=m[--a])>=n;);a===0&&n<this._l1?this._l1=0:a++,this._l2=m[a],this._li=a,this._curSeg=d=this._segments[a],this._s1=d[(this._si=d.length-1)-1]||0,this._s2=d[this._si]}if(s=a,n-=this._l1,a=this._si,n>this._s2&&a<d.length-1){for(c=d.length-1;a<c&&(this._s2=d[++a])<=n;);this._s1=d[a-1],this._si=a}else if(n<this._s1&&a>0){for(;a>0&&(this._s1=d[--a])>=n;);a===0&&n<this._s1?this._s1=0:a++,this._s2=d[a],this._si=a}h=(a+(n-this._s1)/(this._s2-this._s1))*this._prec||0}for(o=1-h,a=this._props.length;--a>-1;)l=this._props[a],f=this._beziers[l][s],p=(h*h*f.da+3*o*(h*f.ca+o*f.ba))*h+f.a,this._mod[l]&&(p=this._mod[l](p,i)),t[l]?i[l](p):i[l]=p;if(this._autoRotate){var y=this._autoRotate,g,u,b,T,w,G,O;for(a=y.length;--a>-1;)l=y[a][2],G=y[a][3]||0,O=y[a][4]===!0?1:aM,f=this._beziers[y[a][0]],g=this._beziers[y[a][1]],f&&g&&(f=f[s],g=g[s],u=f.a+(f.b-f.a)*h,T=f.b+(f.c-f.b)*h,u+=(T-u)*h,T+=(f.c+(f.d-f.c)*h-T)*h,b=g.a+(g.b-g.a)*h,w=g.b+(g.c-g.b)*h,b+=(w-b)*h,w+=(g.c+(g.d-g.c)*h-w)*h,p=r?Math.atan2(w-b,T-u)*O+G:this._initialRotations[a],this._mod[l]&&(p=this._mod[l](p,i)),t[l]?i[l](p):i[l]=p)}}}),kd=Oi.prototype;Oi.bezierThrough=zd;Oi.cubicToQuadratic=lc;Oi._autoCSS=!0;Oi.quadraticToCubic=function(n,e,t){return new kr(n,(2*e+n)/3,(2*e+t)/3,t)};Oi._cssRegister=function(){var n=oM.CSSPlugin;if(n){var e=n._internals,t=e._parseToProxy,i=e._setPluginRatio,r=e.CSSPropTween;e._registerComplexSpecialProp("bezier",{parser:function(s,o,a,l,f,h){o instanceof Array&&(o={values:o}),h=new Oi;var p=o.values,c=p.length-1,m=[],d={},y,g,u;if(c<0)return f;for(y=0;y<=c;y++)u=t(s,p[y],l,f,h,c!==y),m[y]=u.end;for(g in o)d[g]=o[g];return d.values=m,f=new r(s,"bezier",0,0,u.pt,2),f.data=u,f.plugin=h,f.setRatio=i,d.autoRotate===0&&(d.autoRotate=!0),d.autoRotate&&!(d.autoRotate instanceof Array)&&(y=d.autoRotate===!0?0:Number(d.autoRotate),d.autoRotate=u.end.left!=null?[["left","top","rotation",y,!1]]:u.end.x!=null?[["x","y","rotation",y,!1]]:!1),d.autoRotate&&(l._transform||l._enableTransforms(!1),u.autoRotate=l._target._gsTransform,u.proxy.rotation=u.autoRotate.rotation||0,l._overwriteProps.push("rotation")),h._onInitTween(u.proxy,d,l._tween),f}})}};kd._mod=function(n){for(var e=this._overwriteProps,t=e.length,i;--t>-1;)i=n[e[t]],i&&typeof i=="function"&&(this._mod[e[t]]=i)};kd._kill=function(n){var e=this._props,t,i;for(t in this._beziers)if(t in n)for(delete this._beziers[t],delete this._func[t],i=e.length;--i>-1;)e[i]===t&&e.splice(i,1);if(e=this._autoRotate,e)for(i=e.length;--i>-1;)n[e[i][2]]&&e.splice(i,1);return this._super._kill.call(this,n)};/*!
 * VERSION: 1.16.1
 * DATE: 2018-08-27
 * UPDATES AND DOCS AT: http://greensock.com
 *
 * @license Copyright (c) 2008-2018, GreenSock. All rights reserved.
 * This work is subject to the terms at http://greensock.com/standard-license or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 * 
 * @author: Jack Doyle, jack@greensock.com
 **/Ct._gsDefine("easing.Back",["easing.Ease"],function(){var n=Ct.GreenSockGlobals||Ct,e=n.com.greensock,t=Math.PI*2,i=Math.PI/2,r=e._class,s=function(u,b){var T=r("easing."+u,function(){},!0),w=T.prototype=new Kt;return w.constructor=T,w.getRatio=b,T},o=Kt.register||function(){},a=function(u,b,T,w,G){var O=r("easing."+u,{easeOut:new b,easeIn:new T,easeInOut:new w},!0);return o(O,u),O},l=function(u,b,T){this.t=u,this.v=b,T&&(this.next=T,T.prev=this,this.c=T.v-b,this.gap=T.t-u)},f=function(u,b){var T=r("easing."+u,function(G){this._p1=G||G===0?G:1.70158,this._p2=this._p1*1.525},!0),w=T.prototype=new Kt;return w.constructor=T,w.getRatio=b,w.config=function(G){return new T(G)},T},h=a("Back",f("BackOut",function(u){return(u=u-1)*u*((this._p1+1)*u+this._p1)+1}),f("BackIn",function(u){return u*u*((this._p1+1)*u-this._p1)}),f("BackInOut",function(u){return(u*=2)<1?.5*u*u*((this._p2+1)*u-this._p2):.5*((u-=2)*u*((this._p2+1)*u+this._p2)+2)})),p=r("easing.SlowMo",function(u,b,T){b=b||b===0?b:.7,u==null?u=.7:u>1&&(u=1),this._p=u!==1?b:0,this._p1=(1-u)/2,this._p2=u,this._p3=this._p1+this._p2,this._calcEnd=T===!0},!0),c=p.prototype=new Kt,m,d,y,g;return c.constructor=p,c.getRatio=function(u){var b=u+(.5-u)*this._p;return u<this._p1?this._calcEnd?1-(u=1-u/this._p1)*u:b-(u=1-u/this._p1)*u*u*u*b:u>this._p3?this._calcEnd?u===1?0:1-(u=(u-this._p3)/this._p1)*u:b+(u-b)*(u=(u-this._p3)/this._p1)*u*u*u:this._calcEnd?1:b},p.ease=new p(.7,.7),c.config=p.config=function(u,b,T){return new p(u,b,T)},m=r("easing.SteppedEase",function(u,b){u=u||1,this._p1=1/u,this._p2=u+(b?0:1),this._p3=b?1:0},!0),c=m.prototype=new Kt,c.constructor=m,c.getRatio=function(u){return u<0?u=0:u>=1&&(u=.999999999),((this._p2*u|0)+this._p3)*this._p1},c.config=m.config=function(u,b){return new m(u,b)},d=r("easing.ExpoScaleEase",function(u,b,T){this._p1=Math.log(b/u),this._p2=b-u,this._p3=u,this._ease=T},!0),c=d.prototype=new Kt,c.constructor=d,c.getRatio=function(u){return this._ease&&(u=this._ease.getRatio(u)),(this._p3*Math.exp(this._p1*u)-this._p3)/this._p2},c.config=d.config=function(u,b,T){return new d(u,b,T)},y=r("easing.RoughEase",function(u){u=u||{};for(var b=u.taper||"none",T=[],w=0,G=(u.points||20)|0,O=G,k=u.randomize!==!1,q=u.clamp===!0,le=u.template instanceof Kt?u.template:null,A=typeof u.strength=="number"?u.strength*.4:.4,D,re,ee,pe,oe,ae;--O>-1;)D=k?Math.random():1/G*O,re=le?le.getRatio(D):D,b==="none"?ee=A:b==="out"?(pe=1-D,ee=pe*pe*A):b==="in"?ee=D*D*A:D<.5?(pe=D*2,ee=pe*pe*.5*A):(pe=(1-D)*2,ee=pe*pe*.5*A),k?re+=Math.random()*ee-ee*.5:O%2?re+=ee*.5:re-=ee*.5,q&&(re>1?re=1:re<0&&(re=0)),T[w++]={x:D,y:re};for(T.sort(function(_e,te){return _e.x-te.x}),ae=new l(1,1,null),O=G;--O>-1;)oe=T[O],ae=new l(oe.x,oe.y,ae);this._prev=new l(0,0,ae.t!==0?ae:ae.next)},!0),c=y.prototype=new Kt,c.constructor=y,c.getRatio=function(u){var b=this._prev;if(u>b.t){for(;b.next&&u>=b.t;)b=b.next;b=b.prev}else for(;b.prev&&u<=b.t;)b=b.prev;return this._prev=b,b.v+(u-b.t)/b.gap*b.c},c.config=function(u){return new y(u)},y.ease=new y,a("Bounce",s("BounceOut",function(u){return u<1/2.75?7.5625*u*u:u<2/2.75?7.5625*(u-=1.5/2.75)*u+.75:u<2.5/2.75?7.5625*(u-=2.25/2.75)*u+.9375:7.5625*(u-=2.625/2.75)*u+.984375}),s("BounceIn",function(u){return(u=1-u)<1/2.75?1-7.5625*u*u:u<2/2.75?1-(7.5625*(u-=1.5/2.75)*u+.75):u<2.5/2.75?1-(7.5625*(u-=2.25/2.75)*u+.9375):1-(7.5625*(u-=2.625/2.75)*u+.984375)}),s("BounceInOut",function(u){var b=u<.5;return b?u=1-u*2:u=u*2-1,u<1/2.75?u=7.5625*u*u:u<2/2.75?u=7.5625*(u-=1.5/2.75)*u+.75:u<2.5/2.75?u=7.5625*(u-=2.25/2.75)*u+.9375:u=7.5625*(u-=2.625/2.75)*u+.984375,b?(1-u)*.5:u*.5+.5})),a("Circ",s("CircOut",function(u){return Math.sqrt(1-(u=u-1)*u)}),s("CircIn",function(u){return-(Math.sqrt(1-u*u)-1)}),s("CircInOut",function(u){return(u*=2)<1?-.5*(Math.sqrt(1-u*u)-1):.5*(Math.sqrt(1-(u-=2)*u)+1)})),g=function(u,b,T){var w=r("easing."+u,function(O,k){this._p1=O>=1?O:1,this._p2=(k||T)/(O<1?O:1),this._p3=this._p2/t*(Math.asin(1/this._p1)||0),this._p2=t/this._p2},!0),G=w.prototype=new Kt;return G.constructor=w,G.getRatio=b,G.config=function(O,k){return new w(O,k)},w},a("Elastic",g("ElasticOut",function(u){return this._p1*Math.pow(2,-10*u)*Math.sin((u-this._p3)*this._p2)+1},.3),g("ElasticIn",function(u){return-(this._p1*Math.pow(2,10*(u-=1))*Math.sin((u-this._p3)*this._p2))},.3),g("ElasticInOut",function(u){return(u*=2)<1?-.5*(this._p1*Math.pow(2,10*(u-=1))*Math.sin((u-this._p3)*this._p2)):this._p1*Math.pow(2,-10*(u-=1))*Math.sin((u-this._p3)*this._p2)*.5+1},.45)),a("Expo",s("ExpoOut",function(u){return 1-Math.pow(2,-10*u)}),s("ExpoIn",function(u){return Math.pow(2,10*(u-1))-.001}),s("ExpoInOut",function(u){return(u*=2)<1?.5*Math.pow(2,10*(u-1)):.5*(2-Math.pow(2,-10*(u-1)))})),a("Sine",s("SineOut",function(u){return Math.sin(u*i)}),s("SineIn",function(u){return-Math.cos(u*i)+1}),s("SineInOut",function(u){return-.5*(Math.cos(Math.PI*u)-1)})),r("easing.EaseLookup",{find:function(u){return Kt.map[u]}},!0),o(n.SlowMo,"SlowMo","ease,"),o(y,"RoughEase","ease,"),o(m,"SteppedEase","ease,"),h},!0);var pM=Pt.Back,mM=Pt.Elastic,_M=Pt.Bounce,gM=Pt.RoughEase,vM=Pt.SlowMo,xM=Pt.SteppedEase,yM=Pt.Circ,SM=Pt.Expo,MM=Pt.Sine,TM=Pt.ExpoScaleEase;/*!
 * VERSION: 2.0.2
 * DATE: 2018-08-27
 * UPDATES AND DOCS AT: http://greensock.com
 *
 * @license Copyright (c) 2008-2018, GreenSock. All rights reserved.
 * This work is subject to the terms at http://greensock.com/standard-license or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 * 
 * @author: Jack Doyle, jack@greensock.com
 **/var EM=eM;EM._autoActivated=[Qi,sM,tM,nM,Oi,Od,Bd,pM,mM,_M,gM,vM,xM,yM,SM,MM,TM];function bM(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var Jc={exports:{}},Hr=typeof Reflect=="object"?Reflect:null,Pu=Hr&&typeof Hr.apply=="function"?Hr.apply:function(e,t,i){return Function.prototype.apply.call(e,t,i)},Fa;Hr&&typeof Hr.ownKeys=="function"?Fa=Hr.ownKeys:Object.getOwnPropertySymbols?Fa=function(e){return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e))}:Fa=function(e){return Object.getOwnPropertyNames(e)};var Hd=Number.isNaN||function(e){return e!==e};function St(){St.init.call(this)}Jc.exports=St;Jc.exports.once=CM;St.EventEmitter=St;St.prototype._events=void 0;St.prototype._eventsCount=0;St.prototype._maxListeners=void 0;var Du=10;function co(n){if(typeof n!="function")throw new TypeError('The "listener" argument must be of type Function. Received type '+typeof n)}Object.defineProperty(St,"defaultMaxListeners",{enumerable:!0,get:function(){return Du},set:function(n){if(typeof n!="number"||n<0||Hd(n))throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received '+n+".");Du=n}});St.init=function(){(this._events===void 0||this._events===Object.getPrototypeOf(this)._events)&&(this._events=Object.create(null),this._eventsCount=0),this._maxListeners=this._maxListeners||void 0};St.prototype.setMaxListeners=function(e){if(typeof e!="number"||e<0||Hd(e))throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received '+e+".");return this._maxListeners=e,this};function Gd(n){return n._maxListeners===void 0?St.defaultMaxListeners:n._maxListeners}St.prototype.getMaxListeners=function(){return Gd(this)};St.prototype.emit=function(e){for(var t=[],i=1;i<arguments.length;i++)t.push(arguments[i]);var r=e==="error",s=this._events;if(s!==void 0)r=r&&s.error===void 0;else if(!r)return!1;if(r){var o;if(t.length>0&&(o=t[0]),o instanceof Error)throw o;var a=new Error("Unhandled error."+(o?" ("+o.message+")":""));throw a.context=o,a}var l=s[e];if(l===void 0)return!1;if(typeof l=="function")Pu(l,this,t);else for(var f=l.length,h=Yd(l,f),i=0;i<f;++i)Pu(h[i],this,t);return!0};function Vd(n,e,t,i){var r,s,o;if(co(t),s=n._events,s===void 0?(s=n._events=Object.create(null),n._eventsCount=0):(s.newListener!==void 0&&(n.emit("newListener",e,t.listener?t.listener:t),s=n._events),o=s[e]),o===void 0)o=s[e]=t,++n._eventsCount;else if(typeof o=="function"?o=s[e]=i?[t,o]:[o,t]:i?o.unshift(t):o.push(t),r=Gd(n),r>0&&o.length>r&&!o.warned){o.warned=!0;var a=new Error("Possible EventEmitter memory leak detected. "+o.length+" "+String(e)+" listeners added. Use emitter.setMaxListeners() to increase limit");a.name="MaxListenersExceededWarning",a.emitter=n,a.type=e,a.count=o.length}return n}St.prototype.addListener=function(e,t){return Vd(this,e,t,!1)};St.prototype.on=St.prototype.addListener;St.prototype.prependListener=function(e,t){return Vd(this,e,t,!0)};function wM(){if(!this.fired)return this.target.removeListener(this.type,this.wrapFn),this.fired=!0,arguments.length===0?this.listener.call(this.target):this.listener.apply(this.target,arguments)}function Wd(n,e,t){var i={fired:!1,wrapFn:void 0,target:n,type:e,listener:t},r=wM.bind(i);return r.listener=t,i.wrapFn=r,r}St.prototype.once=function(e,t){return co(t),this.on(e,Wd(this,e,t)),this};St.prototype.prependOnceListener=function(e,t){return co(t),this.prependListener(e,Wd(this,e,t)),this};St.prototype.removeListener=function(e,t){var i,r,s,o,a;if(co(t),r=this._events,r===void 0)return this;if(i=r[e],i===void 0)return this;if(i===t||i.listener===t)--this._eventsCount===0?this._events=Object.create(null):(delete r[e],r.removeListener&&this.emit("removeListener",e,i.listener||t));else if(typeof i!="function"){for(s=-1,o=i.length-1;o>=0;o--)if(i[o]===t||i[o].listener===t){a=i[o].listener,s=o;break}if(s<0)return this;s===0?i.shift():AM(i,s),i.length===1&&(r[e]=i[0]),r.removeListener!==void 0&&this.emit("removeListener",e,a||t)}return this};St.prototype.off=St.prototype.removeListener;St.prototype.removeAllListeners=function(e){var t,i,r;if(i=this._events,i===void 0)return this;if(i.removeListener===void 0)return arguments.length===0?(this._events=Object.create(null),this._eventsCount=0):i[e]!==void 0&&(--this._eventsCount===0?this._events=Object.create(null):delete i[e]),this;if(arguments.length===0){var s=Object.keys(i),o;for(r=0;r<s.length;++r)o=s[r],o!=="removeListener"&&this.removeAllListeners(o);return this.removeAllListeners("removeListener"),this._events=Object.create(null),this._eventsCount=0,this}if(t=i[e],typeof t=="function")this.removeListener(e,t);else if(t!==void 0)for(r=t.length-1;r>=0;r--)this.removeListener(e,t[r]);return this};function Xd(n,e,t){var i=n._events;if(i===void 0)return[];var r=i[e];return r===void 0?[]:typeof r=="function"?t?[r.listener||r]:[r]:t?RM(r):Yd(r,r.length)}St.prototype.listeners=function(e){return Xd(this,e,!0)};St.prototype.rawListeners=function(e){return Xd(this,e,!1)};St.listenerCount=function(n,e){return typeof n.listenerCount=="function"?n.listenerCount(e):qd.call(n,e)};St.prototype.listenerCount=qd;function qd(n){var e=this._events;if(e!==void 0){var t=e[n];if(typeof t=="function")return 1;if(t!==void 0)return t.length}return 0}St.prototype.eventNames=function(){return this._eventsCount>0?Fa(this._events):[]};function Yd(n,e){for(var t=new Array(e),i=0;i<e;++i)t[i]=n[i];return t}function AM(n,e){for(;e+1<n.length;e++)n[e]=n[e+1];n.pop()}function RM(n){for(var e=new Array(n.length),t=0;t<e.length;++t)e[t]=n[t].listener||n[t];return e}function CM(n,e){return new Promise(function(t,i){function r(o){n.removeListener(e,s),i(o)}function s(){typeof n.removeListener=="function"&&n.removeListener("error",r),t([].slice.call(arguments))}jd(n,e,s,{once:!0}),e!=="error"&&PM(n,r,{once:!0})})}function PM(n,e,t){typeof n.on=="function"&&jd(n,"error",e,t)}function jd(n,e,t,i){if(typeof n.on=="function")i.once?n.once(e,t):n.on(e,t);else if(typeof n.addEventListener=="function")n.addEventListener(e,function r(s){i.once&&n.removeEventListener(e,r),t(s)});else throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type '+typeof n)}var DM=Jc.exports;const LM=bM(DM);/*! *****************************************************************************
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
***************************************************************************** */var IM=Object.assign||function(e){for(var t,i=1,r=arguments.length;i<r;i++){t=arguments[i];for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&(e[s]=t[s])}return e},UM=[["firefox",/Firefox\/([0-9\.]+)(?:\s|$)/],["opera",/Opera\/([0-9\.]+)(?:\s|$)/],["opera",/OPR\/([0-9\.]+)(:?\s|$)$/],["edge",/Edge\/([0-9\._]+)/],["ie",/Trident\/7\.0.*rv\:([0-9\.]+)\).*Gecko$/],["ie",/MSIE\s([0-9\.]+);.*Trident\/[4-7].0/],["ie",/MSIE\s(7\.0)/],["safari",/Version\/([0-9\._]+).*Safari/],["chrome",/(?!Chrom.*OPR)Chrom(?:e|ium)\/([0-9\.]+)(:?\s|$)/],["bb10",/BB10;\sTouch.*Version\/([0-9\.]+)/],["android",/Android\s([0-9\.]+)/],["ios",/Version\/([0-9\._]+).*Mobile.*Safari.*/],["yandexbrowser",/YaBrowser\/([0-9\._]+)/],["crios",/CriOS\/([0-9\.]+)(:?\s|$)/]],NM=["Windows Phone","Android","CentOS",{name:"Chrome OS",pattern:"CrOS"},"Debian","Fedora","FreeBSD","Gentoo","Haiku","Kubuntu","Linux Mint","OpenBSD","Red Hat","SuSE","Ubuntu","Xubuntu","Cygwin","Symbian OS","hpwOS","webOS ","webOS","Tablet OS","Tizen","Linux","Mac OS X","Macintosh","Mac","Windows 98;","Windows "],OM={"10.0":"10","6.4":"10 Technical Preview","6.3":"8.1","6.2":"8","6.1":"Server 2008 R2 / 7","6.0":"Server 2008 / Vista","5.2":"Server 2003 / XP 64-bit","5.1":"XP","5.01":"2000 SP1","5.0":"2000","4.0":"NT","4.90":"ME"},FM=new RegExp(["(android|bb\\d+|meego).+mobile|avantgo|bada\\/|blackberry|blazer|","compal|elaine|fennec|hiptop|iemobile|ip(hone|od|ad)|iris|kindle|lge |maemo|","midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)","\\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\\.(browser|link)|vodafone|","wap|windows ce|xda|xiino"].join(""),"i"),BM=new RegExp(["1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\\-)|","ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\\-m|r |s )|","avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\\-(n|u)|c55\\/|capi|ccwa|cdm\\-|","cell|chtm|cldc|cmd\\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\\-s|devi|dica|dmob|do(c|p)o|","ds(12|\\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\\-|_)|","g1 u|g560|gene|gf\\-5|g\\-mo|go(\\.w|od)|gr(ad|un)|haie|hcit|hd\\-(m|p|t)|hei\\-|","hi(pt|ta)|hp( i|ip)|hs\\-c|ht(c(\\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\\-(20|go|ma)|","i230|iac( |\\-|\\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|","kddi|keji|kgt( |\\/)|klon|kpt |kwc\\-|kyo(c|k)|le(no|xi)|lg( g|\\/(k|l|u)|50|54|\\-[a-w])","|libw|lynx|m1\\-w|m3ga|m50\\/|ma(te|ui|xo)|mc(01|21|ca)|m\\-cr|me(rc|ri)|mi(o8|oa|ts)|","mmef|mo(01|02|bi|de|do|t(\\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|","n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|","op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\\-2|","po(ck|rt|se)|prox|psio|pt\\-g|qa\\-a|qc(07|12|21|32|60|\\-[2-7]|i\\-)|qtek|r380|r600|","raks|rim9|ro(ve|zo)|s55\\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\\-|oo|p\\-)|sdk\\/|","se(c(\\-|0|1)|47|mc|nd|ri)|sgh\\-|shar|sie(\\-|m)|k\\-0|sl(45|id)|sm(al|ar|b3|it|t5)|","so(ft|ny)|sp(01|h\\-|v\\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\\-|tdg\\-|","tel(i|m)|tim\\-|t\\-mo|to(pl|sh)|ts(70|m\\-|m3|m5)|tx\\-9|up(\\.b|g1|si)|utst|v400|v750|","veri|vi(rg|te)|vk(40|5[0-3]|\\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|","w3c(\\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\\-|your|zeto|zte\\-"].join(""),"i"),zM=function(){function n(e,t,i){this.navigator=t,this.process=i,this.userAgent=e||(this.navigator?t.userAgent||t.vendor:"")}return n.prototype.detect=function(){if(this.process&&!this.userAgent){var e=this.process.version.slice(1).split(".").slice(0,3),t=Array.prototype.slice.call(e,1).join("")||"0";return{name:"node",version:e.join("."),versionNumber:parseFloat(e[0]+"."+t),mobile:!1,os:this.process.platform}}return this.userAgent||this.handleMissingError(),IM({},this.checkBrowser(),this.checkMobile(),this.checkOs())},n.prototype.checkBrowser=function(){var e=this;return UM.filter(function(t){return t[1].test(e.userAgent)}).map(function(t){var i=t[1].exec(e.userAgent),r=i&&i[1].split(/[._]/).slice(0,3),s=Array.prototype.slice.call(r,1).join("")||"0";return r&&r.length<3&&Array.prototype.push.apply(r,r.length===1?[0,0]:[0]),{name:String(t[0]),version:r.join("."),versionNumber:+(r[0]+"."+s)}}).shift()},n.prototype.checkMobile=function(){var e=this.userAgent.substr(0,4),t=FM.test(this.userAgent)||BM.test(e);return{mobile:t}},n.prototype.checkOs=function(){var e=this;return NM.map(function(t){var i=t.name||t,r=e.getOsPattern(t);return{name:i,pattern:r,value:RegExp("\\b"+r.replace(/([ -])(?!$)/g,"$1?")+"(?:x?[\\d._]+|[ \\w.]*)","i").exec(e.userAgent)}}).filter(function(t){return t.value}).map(function(t){var i=t.value[0]||"",r;return t.pattern&&t.name&&/^Win/i.test(i)&&!/^Windows Phone /i.test(i)&&(r=OM[i.replace(/[^\d.]/g,"")])&&(i="Windows "+r),t.pattern&&t.name&&(i=i.replace(RegExp(t.pattern,"i"),t.name)),i=i.replace(/ ce$/i," CE").replace(/\bhpw/i,"web").replace(/\bMacintosh\b/,"Mac OS").replace(/_PowerPC\b/i," OS").replace(/\b(OS X) [^ \d]+/i,"$1").replace(/\bMac (OS X)\b/,"$1").replace(/\/(\d)/," $1").replace(/_/g,".").replace(/(?: BePC|[ .]*fc[ \d.]+)$/i,"").replace(/\bx86\.64\b/gi,"x86_64").replace(/\b(Windows Phone) OS\b/,"$1").replace(/\b(Chrome OS \w+) [\d.]+\b/,"$1").split(" on ")[0].trim(),i=/^(?:webOS|i(?:OS|P))/.test(i)?i:i.charAt(0).toUpperCase()+i.slice(1),{os:i}}).shift()},n.prototype.getOsPattern=function(e){var t=e;return(typeof e=="string"?e:void 0)||t.pattern||t.name},n.prototype.handleMissingError=function(){throw new Error(`Please give user-agent.
> browser(navigator.userAgent or res.headers['user-agent']).`)},n}();function js(n,e){return e={exports:{}},n(e,e.exports),e.exports}var Cn=js(function(n){var e=n.exports=typeof window<"u"&&window.Math==Math?window:typeof self<"u"&&self.Math==Math?self:Function("return this")();typeof __g=="number"&&(__g=e)}),Gn=js(function(n){var e=n.exports={version:"2.5.7"};typeof __e=="number"&&(__e=e)});Gn.version;var fr=function(n){return typeof n=="object"?n!==null:typeof n=="function"},Lu=function(n){if(!fr(n))throw TypeError(n+" is not an object!");return n},fo=function(n){try{return!!n()}catch{return!0}},Qc=!fo(function(){return Object.defineProperty({},"a",{get:function(){return 7}}).a!=7}),cc=Cn.document,kM=fr(cc)&&fr(cc.createElement),HM=function(n){return kM?cc.createElement(n):{}},GM=!Qc&&!fo(function(){return Object.defineProperty(HM("div"),"a",{get:function(){return 7}}).a!=7}),VM=function(n,e){if(!fr(n))return n;var t,i;if(typeof(t=n.toString)=="function"&&!fr(i=t.call(n))||typeof(t=n.valueOf)=="function"&&!fr(i=t.call(n)))return i;throw TypeError("Can't convert object to primitive value")},WM=Object.defineProperty,XM=Qc?Object.defineProperty:function(e,t,i){if(Lu(e),t=VM(t),Lu(i),GM)try{return WM(e,t,i)}catch{}if("get"in i||"set"in i)throw TypeError("Accessors not supported!");return"value"in i&&(e[t]=i.value),e},qM={f:XM},YM=function(n,e){return{enumerable:!(n&1),configurable:!(n&2),writable:!(n&4),value:e}},_s=Qc?function(n,e,t){return qM.f(n,e,YM(1,t))}:function(n,e,t){return n[e]=t,n},jM={}.hasOwnProperty,Iu=function(n,e){return jM.call(n,e)},$M=0,KM=Math.random(),$d=function(n){return"Symbol(".concat(n===void 0?"":n,")_",(++$M+KM).toString(36))},ZM=js(function(n){var e=$d("src"),t="toString",i=Function[t],r=(""+i).split(t);Gn.inspectSource=function(s){return i.call(s)},(n.exports=function(s,o,a,l){var f=typeof a=="function";f&&(Iu(a,"name")||_s(a,"name",o)),s[o]!==a&&(f&&(Iu(a,e)||_s(a,e,s[o]?""+s[o]:r.join(String(o)))),s===Cn?s[o]=a:l?s[o]?s[o]=a:_s(s,o,a):(delete s[o],_s(s,o,a)))})(Function.prototype,t,function(){return typeof this=="function"&&this[e]||i.call(this)})}),JM=function(n){if(typeof n!="function")throw TypeError(n+" is not a function!");return n},fc=function(n,e,t){if(JM(n),e===void 0)return n;switch(t){case 1:return function(i){return n.call(e,i)};case 2:return function(i,r){return n.call(e,i,r)};case 3:return function(i,r,s){return n.call(e,i,r,s)}}return function(){return n.apply(e,arguments)}},il="prototype",an=function(n,e,t){var i=n&an.F,r=n&an.G,s=n&an.S,o=n&an.P,a=n&an.B,l=r?Cn:s?Cn[e]||(Cn[e]={}):(Cn[e]||{})[il],f=r?Gn:Gn[e]||(Gn[e]={}),h=f[il]||(f[il]={}),p,c,m,d;r&&(t=e);for(p in t)c=!i&&l&&l[p]!==void 0,m=(c?l:t)[p],d=a&&c?fc(m,Cn):o&&typeof m=="function"?fc(Function.call,m):m,l&&ZM(l,p,m,n&an.U),f[p]!=m&&_s(f,p,d),o&&h[p]!=m&&(h[p]=m)};Cn.core=Gn;an.F=1;an.G=2;an.S=4;an.P=8;an.B=16;an.W=32;an.U=64;an.R=128;var ui=an,QM={}.toString,Kd=function(n){return QM.call(n).slice(8,-1)},eT=Object("z").propertyIsEnumerable(0)?Object:function(n){return Kd(n)=="String"?n.split(""):Object(n)},Zd=function(n){if(n==null)throw TypeError("Can't call method on  "+n);return n},tT=function(n){return Object(Zd(n))},nT=Math.ceil,iT=Math.floor,rT=function(n){return isNaN(n=+n)?0:(n>0?iT:nT)(n)},sT=Math.min,aT=function(n){return n>0?sT(rT(n),9007199254740991):0},Uu=Array.isArray||function(e){return Kd(e)=="Array"},oT=js(function(n){var e="__core-js_shared__",t=Cn[e]||(Cn[e]={});(n.exports=function(i,r){return t[i]||(t[i]=r!==void 0?r:{})})("versions",[]).push({version:Gn.version,mode:"global",copyright:"© 2018 Denis Pushkarev (zloirock.ru)"})}),lT=js(function(n){var e=oT("wks"),t=Cn.Symbol,i=typeof t=="function",r=n.exports=function(s){return e[s]||(e[s]=i&&t[s]||(i?t:$d)("Symbol."+s))};r.store=e}),cT=lT("species"),fT=function(n){var e;return Uu(n)&&(e=n.constructor,typeof e=="function"&&(e===Array||Uu(e.prototype))&&(e=void 0),fr(e)&&(e=e[cT],e===null&&(e=void 0))),e===void 0?Array:e},uT=function(n,e){return new(fT(n))(e)},Jd=function(n,e){var t=n==1,i=n==2,r=n==3,s=n==4,o=n==6,a=n==5||o,l=uT;return function(f,h,p){for(var c=tT(f),m=eT(c),d=fc(h,p,3),y=aT(m.length),g=0,u=t?l(f,y):i?l(f,0):void 0,b,T;y>g;g++)if((a||g in m)&&(b=m[g],T=d(b,g,c),n)){if(t)u[g]=T;else if(T)switch(n){case 3:return!0;case 5:return b;case 6:return g;case 2:u.push(b)}else if(s)return!1}return o?-1:r||s?s:u}},Qd=function(n,e){return!!n&&fo(function(){e?n.call(null,function(){},1):n.call(null)})},hT=Jd(2);ui(ui.P+ui.F*!Qd([].filter,!0),"Array",{filter:function(e){return hT(this,e,arguments[1])}});Gn.Array.filter;var dT=Jd(1);ui(ui.P+ui.F*!Qd([].map,!0),"Array",{map:function(e){return dT(this,e,arguments[1])}});Gn.Array.map;var uc=`	
\v\f\r   ᠎             　\u2028\u2029\uFEFF`,ja="["+uc+"]",Nu="​",pT=RegExp("^"+ja+ja+"*"),mT=RegExp(ja+ja+"*$"),ep=function(n,e,t){var i={},r=fo(function(){return!!uc[n]()||Nu[n]()!=Nu}),s=i[n]=r?e(_T):uc[n];t&&(i[t]=s),ui(ui.P+ui.F*r,"String",i)},_T=ep.trim=function(n,e){return n=String(Zd(n)),e&1&&(n=n.replace(pT,"")),e&2&&(n=n.replace(mT,"")),n},gT=ep;gT("trim",function(n){return function(){return n(this,3)}});Gn.String.trim;var vT=typeof window<"u"?window.navigator:void 0,xT=typeof process<"u"?process:void 0;function yT(n){var e=new zM(n,vT,xT);return e.detect()}let Ou=!1,Ea=!1;const ST=()=>{if(Ou)return Ea;Ou=!0;try{let n=Object.defineProperty({},"passive",{get:()=>{Ea=!0}});window.addEventListener("test",null,n)}catch{return Ea}return window.removeEventListener("test",null,opts),Ea},rl=()=>ST()?{passive:!0}:!1;class MT extends LM{get enabled(){return this._enabled}constructor(e,t){super(),this.camera=e,this.el=t||window,this.plane=new Ai,this.raycaster=new QS,this.mouse=new vt,this.offset=new me,this.intersection=new me,this.objects=[],this.hovered=null,this.selected=null,this.isDown=!1,this.browser=yT(),this.enable()}enable(){this.enabled||(this.addListeners(),this._enabled=!0)}disable(){this.enabled&&(this.removeListeners(),this._enabled=!1)}addListeners(){this.handlerDown=this.onDown.bind(this),this.handlerMove=this.onMove.bind(this),this.handlerUp=this.onUp.bind(this),this.handlerLeave=this.onLeave.bind(this),this.browser.mobile?(this.el.addEventListener("touchstart",this.handlerDown,rl),this.el.addEventListener("touchmove",this.handlerMove,rl),this.el.addEventListener("touchend",this.handlerUp,rl)):(this.el.addEventListener("mousedown",this.handlerDown),window.addEventListener("mousemove",this.handlerMove),this.el.addEventListener("mouseup",this.handlerUp),this.el.addEventListener("mouseleave",this.handlerLeave))}removeListeners(){this.browser.mobile?(this.el.removeEventListener("touchstart",this.handlerDown),this.el.removeEventListener("touchmove",this.handlerMove),this.el.removeEventListener("touchend",this.handlerUp)):(this.el.removeEventListener("mousedown",this.handlerDown),this.el.removeEventListener("mousemove",this.handlerMove),this.el.removeEventListener("mouseup",this.handlerUp),this.el.removeEventListener("mouseleave",this.handlerLeave))}resize(e,t,i,r){e||t||i||r?this.rect={x:e,y:t,width:i,height:r}:this.el===window?this.rect={x:0,y:0,width:window.innerWidth,height:window.innerHeight}:this.rect=this.el.getBoundingClientRect()}onMove(e){const t=e.touches?e.touches[0]:e,i={x:t.clientX,y:t.clientY};this.mouse.x=(i.x+this.rect.x)/this.rect.width*2-1,this.mouse.y=-((i.y+this.rect.y)/this.rect.height)*2+1,this.raycaster.setFromCamera(this.mouse,this.camera);const r=this.raycaster.intersectObjects(this.objects);if(r.length>0){const s=r[0].object;this.intersectionData=r[0],this.plane.setFromNormalAndCoplanarPoint(this.camera.getWorldDirection(this.plane.normal),s.position),this.hovered!==s?(this.emit("interactive-out",{object:this.hovered}),this.emit("interactive-over",{object:s}),this.hovered=s):this.emit("interactive-move",{object:s,intersectionData:this.intersectionData})}else this.intersectionData=null,this.hovered!==null&&(this.emit("interactive-out",{object:this.hovered}),this.hovered=null)}onDown(e){this.isDown=!0,this.onMove(e),this.emit("interactive-down",{object:this.hovered,previous:this.selected,intersectionData:this.intersectionData}),this.selected=this.hovered,this.selected&&this.raycaster.ray.intersectPlane(this.plane,this.intersection)&&this.offset.copy(this.intersection).sub(this.selected.position)}onUp(e){this.isDown=!1,this.emit("interactive-up",{object:this.hovered})}onLeave(e){this.onUp(e),this.emit("interactive-out",{object:this.hovered}),this.hovered=null}}const Fu=(n,e,t,i)=>t*Math.sin(n/i*(Math.PI/2))+e;class TT{constructor(e){this.parent=e,this.size=64,this.maxAge=120,this.radius=.15,this.trail=[],this.initTexture()}initTexture(){this.canvas=document.createElement("canvas"),this.canvas.width=this.canvas.height=this.size,this.ctx=this.canvas.getContext("2d"),this.ctx.fillStyle="black",this.ctx.fillRect(0,0,this.canvas.width,this.canvas.height),this.texture=new Wt(this.canvas),this.canvas.id="touchTexture",this.canvas.style.width=this.canvas.style.height=`${this.canvas.width}px`}update(e){this.clear(),this.trail.forEach((t,i)=>{t.age++,t.age>this.maxAge&&this.trail.splice(i,1)}),this.trail.forEach((t,i)=>{this.drawTouch(t)}),this.texture.needsUpdate=!0}clear(){this.ctx.fillStyle="black",this.ctx.fillRect(0,0,this.canvas.width,this.canvas.height)}addTouch(e){let t=0;const i=this.trail[this.trail.length-1];if(i){const r=i.x-e.x,s=i.y-e.y,o=r*r+s*s;t=Math.min(o*1e4,1)}this.trail.push({x:e.x,y:e.y,age:0,force:t})}drawTouch(e){const t={x:e.x*this.size,y:(1-e.y)*this.size};let i=1;e.age<this.maxAge*.3?i=Fu(e.age/(this.maxAge*.3),0,1,1):i=Fu(1-(e.age-this.maxAge*.3)/(this.maxAge*.7),0,1,1),i*=e.force;const r=this.size*this.radius*i,s=this.ctx.createRadialGradient(t.x,t.y,r*.25,t.x,t.y,r);s.addColorStop(0,"rgba(255, 255, 255, 0.2)"),s.addColorStop(1,"rgba(0, 0, 0, 0.0)"),this.ctx.beginPath(),this.ctx.fillStyle=s,this.ctx.arc(t.x,t.y,r,0,Math.PI*2),this.ctx.fill()}}const ET=`// @author brunoimbrizi / http://brunoimbrizi.com\r
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
`,bT=`// @author brunoimbrizi / http://brunoimbrizi.com\r
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
}`;class wT{constructor(e){this.webgl=e,this.container=new fn}init(e){new ZS().load(e,i=>{this.texture=i,this.width=i.image.width,this.height=i.image.height,this.initPoints(!0),this.initHitArea(),this.initTouch(),this.resize(),this.show()})}initPoints(e){this.numPoints=this.width*this.height;let t=this.numPoints,i=0,r;if(e){t=0,i=34;const m=this.texture.image,d=document.createElement("canvas"),y=d.getContext("2d");d.width=this.width,d.height=this.height,y.scale(1,-1),y.drawImage(m,0,0,this.width,this.height*-1);const g=y.getImageData(0,0,d.width,d.height);r=Float32Array.from(g.data);for(let u=0;u<this.numPoints;u++)r[u*4+0]>i&&t++}const s={uTime:{value:0},uRandom:{value:1},uDepth:{value:2},uSize:{value:0},uTextureSize:{value:new vt(this.width,this.height)},uTexture:{value:this.texture},uTouch:{value:null}},o=new YS({uniforms:s,vertexShader:ET,fragmentShader:bT,depthTest:!1,transparent:!0}),a=new JS,l=new un(new Float32Array(4*3),3);l.setXYZ(0,-.5,.5,0),l.setXYZ(1,.5,.5,0),l.setXYZ(2,-.5,-.5,0),l.setXYZ(3,.5,-.5,0),a.setAttribute("position",l);const f=new un(new Float32Array(4*2),2);f.setXYZ(0,0,0),f.setXYZ(1,1,0),f.setXYZ(2,0,1),f.setXYZ(3,1,1),a.setAttribute("uv",f),a.setIndex(new un(new Uint16Array([0,2,1,2,3,1]),1));const h=new Uint16Array(t),p=new Float32Array(t*3),c=new Float32Array(t);for(let m=0,d=0;m<this.numPoints;m++)e&&r[m*4+0]<=i||(p[d*3+0]=m%this.width,p[d*3+1]=Math.floor(m/this.width),h[d]=m,c[d]=Math.random()*Math.PI,d++);a.setAttribute("pindex",new nl(h,1,!1)),a.setAttribute("offset",new nl(p,3,!1)),a.setAttribute("angle",new nl(c,1,!1)),this.object3D=new yn(a,o),this.container.add(this.object3D)}initTouch(){this.touch||(this.touch=new TT(this)),this.object3D.material.uniforms.uTouch.value=this.touch.texture}initHitArea(){const e=new Qr(this.width,this.height,1,1),t=new jc({color:16777215,wireframe:!0,depthTest:!1});t.visible=!1,this.hitArea=new yn(e,t),this.container.add(this.hitArea)}addListeners(){this.handlerInteractiveMove=this.onInteractiveMove.bind(this),this.webgl.interactive.addListener("interactive-move",this.handlerInteractiveMove),this.webgl.interactive.objects.push(this.hitArea),this.webgl.interactive.enable()}removeListeners(){this.webgl.interactive.removeListener("interactive-move",this.handlerInteractiveMove);const e=this.webgl.interactive.objects.findIndex(t=>t===this.hitArea);this.webgl.interactive.objects.splice(e,1),this.webgl.interactive.disable()}update(e){this.object3D&&(this.touch&&this.touch.update(),this.object3D.material.uniforms.uTime.value+=e)}show(e=1){TweenLite.fromTo(this.object3D.material.uniforms.uSize,e,{value:.5},{value:1.5}),TweenLite.to(this.object3D.material.uniforms.uRandom,e,{value:2}),TweenLite.fromTo(this.object3D.material.uniforms.uDepth,e*1.5,{value:40},{value:4}),this.addListeners()}hide(e,t=.8){return new Promise((i,r)=>{TweenLite.to(this.object3D.material.uniforms.uRandom,t,{value:5,onComplete:()=>{e&&this.destroy(),i()}}),TweenLite.to(this.object3D.material.uniforms.uDepth,t,{value:-20,ease:Quad.easeIn}),TweenLite.to(this.object3D.material.uniforms.uSize,t*.8,{value:0}),this.removeListeners()})}destroy(){this.object3D&&(this.object3D.parent.remove(this.object3D),this.object3D.geometry.dispose(),this.object3D.material.dispose(),this.object3D=null,this.hitArea&&(this.hitArea.parent.remove(this.hitArea),this.hitArea.geometry.dispose(),this.hitArea.material.dispose(),this.hitArea=null))}resize(){if(!this.object3D)return;const e=this.webgl.fovHeight/this.height;this.object3D.scale.set(e,e,1),this.hitArea.scale.set(e,e,1)}onInteractiveMove(e){const t=e.intersectionData.uv;this.touch&&this.touch.addTouch(t)}}const AT="/YangPortfolioPublic/assets/Profile3-B_I9tn9a.png";class RT{constructor(e){this.app=e,this.samples=[AT],this.initThree(),this.initParticles(),this.initControls();const t=~~(Math.random()*this.samples.length);this.goto(t)}initThree(){this.scene=new Ud,this.camera=new vn(50,window.innerWidth/window.innerHeight,1,1e4),this.camera.position.z=300,this.renderer=new Id({antialias:!0,alpha:!0}),this.clock=new Nd(!0)}initControls(){this.interactive=new MT(this.camera,this.renderer.domElement)}initParticles(){this.particles=new wT(this),this.scene.add(this.particles.container)}update(){const e=this.clock.getDelta();this.particles&&this.particles.update(e)}draw(){this.renderer.render(this.scene,this.camera)}goto(e){this.currSample==null?this.particles.init(this.samples[e]):this.particles.hide(!0).then(()=>{this.particles.init(this.samples[e])}),this.currSample=e}next(){this.currSample<this.samples.length-1?this.goto(this.currSample+1):this.goto(0)}resize(){this.renderer&&(this.camera.aspect=window.innerWidth/window.innerHeight,this.camera.updateProjectionMatrix(),this.fovHeight=2*Math.tan(this.camera.fov*Math.PI/180/2)*this.camera.position.z,this.renderer.setSize(window.innerWidth,window.innerHeight),this.interactive&&this.interactive.resize(),this.particles&&this.particles.resize())}}const CT=`\r
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
`;class PT{constructor(e){this.app=e,this.texts=["I MAKE THINGS","I BREAK THINGS"],this.initThree(),this.init2DCanvas(),this.initGeometry(),this.initMaterial(),this.initScene(),this.addListeners(),this.animate(),this.resize()}initThree(){this.el=document.getElementById("hero-text"),this.scene=new Ud,this.camera=new Ad(this.el.clientWidth/-2,this.el.clientWidth/2,this.el.clientHeight/2,this.el.clientHeight/-2,-1e3,1e3),this.camera.position.z=300,this.renderer=new Id({alpha:!0}),this.renderer.setSize(this.el.clientWidth,this.el.clientHeight),this.el.appendChild(this.renderer.domElement),this.clock=new Nd(!0)}wrapText(e,t,i,r,s,o,a){const l=t.split(" ");let f="",h=[];for(let p=0;p<l.length;p++){const c=f+l[p]+" ";e.measureText(c).width>s&&p>0?(h.push(f.trim()),f=l[p]+" "):f=c}h.push(f.trim()),r-=(h.length-1)/2*o;for(let p=0;p<h.length;p++)a?e.strokeText(h[p],i,r+p*o):e.fillText(h[p],i,r+p*o)}init2DCanvas(){this.canvas2D=document.createElement("canvas"),this.canvas2D.width=this.el.clientWidth,this.canvas2D.height=this.el.clientHeight,this.ctx2D=this.canvas2D.getContext("2d"),this.ctx2D.width=this.el.clientWidth,this.ctx2D.height=this.el.clientHeight,this.ctx2D.fillStyle="black",this.ctx2D.fillStyle="black",this.ctx2D.fillRect(0,0,this.ctx2D.width,this.ctx2D.height),this.ctx2D.strokeStyle="white",this.ctx2D.font="5rem 'Inter', system-ui, Avenir, Helvetica, Arial, sans-serif",this.selectedText=0,this.ctx2D.textAlign="center",this.ctx2D.textBaseline="middle",this.ctx2D.imageSmoothingEnabled=!0,this.ctx2D.imageSmoothingQuality="high";const e=this.canvas2D.width*.8,t=70*1.2;this.wrapText(this.ctx2D,this.texts[this.selectedText],this.canvas2D.width/2,this.canvas2D.height/2,e,t,!0),this.heroTexture=new bu(this.canvas2D),this.canvas2D.id="heroTexture",this.canvas2D.style.width=`${this.canvas2D.width}px`,this.canvas2D.style.height=`${this.canvas2D.height}px`;const i=this.canvas2D.width,r=this.canvas2D.height,s=document.createElement("canvas");s.width=i,s.height=r;const o=s.getContext("2d");o.font="5rem 'Inter', system-ui, Avenir, Helvetica, Arial, sans-serif",o.textAlign="center",o.textBaseline="middle",o.fillStyle="white",o.imageSmoothingEnabled=!0,o.imageSmoothingQuality="high",this.wrapText(o,this.texts[this.selectedText],s.width/2,s.height/2,e,t,!1),this.heroTexture2=new bu(s)}initGeometry(){this.geometry=new Qr(this.el.clientWidth,this.el.clientHeight)}initMaterial(){this.uniforms={iTime:{value:0},iResolution:{value:new vt(this.el.clientWidth,this.el.clientHeight)},uFontTex:{value:this.heroTexture},uFontTex2:{value:this.heroTexture2},uProgress:{value:.5}},this.material=new Wn({fragmentShader:CT,uniforms:this.uniforms,transparent:!0,depthTest:!1,blending:lr})}addListeners(){this.handlerAnimate=this.animate.bind(this),window.addEventListener("resize",this.resize.bind(this))}initScene(){this.mesh=new yn(this.geometry,this.material),this.scene.add(this.mesh)}resize(){this.renderer&&(this.camera.aspect=this.el.clientWidth/this.el.clientHeight,this.camera.updateProjectionMatrix(),this.renderer.setSize(this.el.clientWidth,this.el.clientHeight),this.heroTexture.needsUpdate=!0,this.heroTexture2.needsUpdate=!0)}animate(){this.update(),this.draw(),this.raf=requestAnimationFrame(this.handlerAnimate)}update(){this.uniforms.iTime.value=this.clock.getElapsedTime()}draw(){this.renderer.render(this.scene,this.camera)}}class DT{constructor(){}init(){this.initWebGL(),this.initGUI(),this.addListeners(),this.animate(),this.resize()}initWebGL(){this.webgl=new RT(this),document.querySelector(".container").appendChild(this.webgl.renderer.domElement)}initGUI(){}addListeners(){this.handlerAnimate=this.animate.bind(this),window.addEventListener("resize",this.resize.bind(this)),window.addEventListener("keyup",this.keyup.bind(this)),this.webgl.renderer.domElement.addEventListener("click",this.click.bind(this))}animate(){this.update(),this.draw(),this.raf=requestAnimationFrame(this.handlerAnimate)}update(){this.webgl&&this.webgl.update(),this.gui&&this.gui.update()}draw(){this.webgl&&this.webgl.draw()}resize(){this.webgl&&this.webgl.resize()}keyup(e){e.keyCode==71&&this.gui&&this.gui.toggle()}click(e){this.webgl.next()}}const LT={class:"bg-tertiary w-full min-h-[100vh] flex justify-center"},IT={class:"w-2/3 relative z-10"},UT={__name:"App",setup(n){let e=null;return Lc(()=>{e=new DT,e.init()}),(t,i)=>{const r=Ic("router-view");return ks(),Hs("div",LT,[i[0]||(i[0]=Un("div",{class:"fixed w-full h-screen overflow-hidden top-0 left-0 container pointer-events-none z-0"},null,-1)),Un("div",IT,[kt(W_),Un("main",null,[kt(r)])])])}}};/*!
  * vue-router v4.4.5
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */const Lr=typeof document<"u";function tp(n){return typeof n=="object"||"displayName"in n||"props"in n||"__vccOpts"in n}function NT(n){return n.__esModule||n[Symbol.toStringTag]==="Module"||n.default&&tp(n.default)}const xt=Object.assign;function sl(n,e){const t={};for(const i in e){const r=e[i];t[i]=Nn(r)?r.map(n):n(r)}return t}const As=()=>{},Nn=Array.isArray,np=/#/g,OT=/&/g,FT=/\//g,BT=/=/g,zT=/\?/g,ip=/\+/g,kT=/%5B/g,HT=/%5D/g,rp=/%5E/g,GT=/%60/g,sp=/%7B/g,VT=/%7C/g,ap=/%7D/g,WT=/%20/g;function ef(n){return encodeURI(""+n).replace(VT,"|").replace(kT,"[").replace(HT,"]")}function XT(n){return ef(n).replace(sp,"{").replace(ap,"}").replace(rp,"^")}function hc(n){return ef(n).replace(ip,"%2B").replace(WT,"+").replace(np,"%23").replace(OT,"%26").replace(GT,"`").replace(sp,"{").replace(ap,"}").replace(rp,"^")}function qT(n){return hc(n).replace(BT,"%3D")}function YT(n){return ef(n).replace(np,"%23").replace(zT,"%3F")}function jT(n){return n==null?"":YT(n).replace(FT,"%2F")}function Fs(n){try{return decodeURIComponent(""+n)}catch{}return""+n}const $T=/\/$/,KT=n=>n.replace($T,"");function al(n,e,t="/"){let i,r={},s="",o="";const a=e.indexOf("#");let l=e.indexOf("?");return a<l&&a>=0&&(l=-1),l>-1&&(i=e.slice(0,l),s=e.slice(l+1,a>-1?a:e.length),r=n(s)),a>-1&&(i=i||e.slice(0,a),o=e.slice(a,e.length)),i=eE(i??e,t),{fullPath:i+(s&&"?")+s+o,path:i,query:r,hash:Fs(o)}}function ZT(n,e){const t=e.query?n(e.query):"";return e.path+(t&&"?")+t+(e.hash||"")}function Bu(n,e){return!e||!n.toLowerCase().startsWith(e.toLowerCase())?n:n.slice(e.length)||"/"}function JT(n,e,t){const i=e.matched.length-1,r=t.matched.length-1;return i>-1&&i===r&&$r(e.matched[i],t.matched[r])&&op(e.params,t.params)&&n(e.query)===n(t.query)&&e.hash===t.hash}function $r(n,e){return(n.aliasOf||n)===(e.aliasOf||e)}function op(n,e){if(Object.keys(n).length!==Object.keys(e).length)return!1;for(const t in n)if(!QT(n[t],e[t]))return!1;return!0}function QT(n,e){return Nn(n)?zu(n,e):Nn(e)?zu(e,n):n===e}function zu(n,e){return Nn(e)?n.length===e.length&&n.every((t,i)=>t===e[i]):n.length===1&&n[0]===e}function eE(n,e){if(n.startsWith("/"))return n;if(!n)return e;const t=e.split("/"),i=n.split("/"),r=i[i.length-1];(r===".."||r===".")&&i.push("");let s=t.length-1,o,a;for(o=0;o<i.length;o++)if(a=i[o],a!==".")if(a==="..")s>1&&s--;else break;return t.slice(0,s).join("/")+"/"+i.slice(o).join("/")}const Ei={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var Bs;(function(n){n.pop="pop",n.push="push"})(Bs||(Bs={}));var Rs;(function(n){n.back="back",n.forward="forward",n.unknown=""})(Rs||(Rs={}));function tE(n){if(!n)if(Lr){const e=document.querySelector("base");n=e&&e.getAttribute("href")||"/",n=n.replace(/^\w+:\/\/[^\/]+/,"")}else n="/";return n[0]!=="/"&&n[0]!=="#"&&(n="/"+n),KT(n)}const nE=/^[^#]+#/;function iE(n,e){return n.replace(nE,"#")+e}function rE(n,e){const t=document.documentElement.getBoundingClientRect(),i=n.getBoundingClientRect();return{behavior:e.behavior,left:i.left-t.left-(e.left||0),top:i.top-t.top-(e.top||0)}}const uo=()=>({left:window.scrollX,top:window.scrollY});function sE(n){let e;if("el"in n){const t=n.el,i=typeof t=="string"&&t.startsWith("#"),r=typeof t=="string"?i?document.getElementById(t.slice(1)):document.querySelector(t):t;if(!r)return;e=rE(r,n)}else e=n;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function ku(n,e){return(history.state?history.state.position-e:-1)+n}const dc=new Map;function aE(n,e){dc.set(n,e)}function oE(n){const e=dc.get(n);return dc.delete(n),e}let lE=()=>location.protocol+"//"+location.host;function lp(n,e){const{pathname:t,search:i,hash:r}=e,s=n.indexOf("#");if(s>-1){let a=r.includes(n.slice(s))?n.slice(s).length:1,l=r.slice(a);return l[0]!=="/"&&(l="/"+l),Bu(l,"")}return Bu(t,n)+i+r}function cE(n,e,t,i){let r=[],s=[],o=null;const a=({state:c})=>{const m=lp(n,location),d=t.value,y=e.value;let g=0;if(c){if(t.value=m,e.value=c,o&&o===d){o=null;return}g=y?c.position-y.position:0}else i(m);r.forEach(u=>{u(t.value,d,{delta:g,type:Bs.pop,direction:g?g>0?Rs.forward:Rs.back:Rs.unknown})})};function l(){o=t.value}function f(c){r.push(c);const m=()=>{const d=r.indexOf(c);d>-1&&r.splice(d,1)};return s.push(m),m}function h(){const{history:c}=window;c.state&&c.replaceState(xt({},c.state,{scroll:uo()}),"")}function p(){for(const c of s)c();s=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",h)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",h,{passive:!0}),{pauseListeners:l,listen:f,destroy:p}}function Hu(n,e,t,i=!1,r=!1){return{back:n,current:e,forward:t,replaced:i,position:window.history.length,scroll:r?uo():null}}function fE(n){const{history:e,location:t}=window,i={value:lp(n,t)},r={value:e.state};r.value||s(i.value,{back:null,current:i.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function s(l,f,h){const p=n.indexOf("#"),c=p>-1?(t.host&&document.querySelector("base")?n:n.slice(p))+l:lE()+n+l;try{e[h?"replaceState":"pushState"](f,"",c),r.value=f}catch{t[h?"replace":"assign"](c)}}function o(l,f){const h=xt({},e.state,Hu(r.value.back,l,r.value.forward,!0),f,{position:r.value.position});s(l,h,!0),i.value=l}function a(l,f){const h=xt({},r.value,e.state,{forward:l,scroll:uo()});s(h.current,h,!0);const p=xt({},Hu(i.value,l,null),{position:h.position+1},f);s(l,p,!1),i.value=l}return{location:i,state:r,push:a,replace:o}}function uE(n){n=tE(n);const e=fE(n),t=cE(n,e.state,e.location,e.replace);function i(s,o=!0){o||t.pauseListeners(),history.go(s)}const r=xt({location:"",base:n,go:i,createHref:iE.bind(null,n)},e,t);return Object.defineProperty(r,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(r,"state",{enumerable:!0,get:()=>e.state.value}),r}function hE(n){return typeof n=="string"||n&&typeof n=="object"}function cp(n){return typeof n=="string"||typeof n=="symbol"}const fp=Symbol("");var Gu;(function(n){n[n.aborted=4]="aborted",n[n.cancelled=8]="cancelled",n[n.duplicated=16]="duplicated"})(Gu||(Gu={}));function Kr(n,e){return xt(new Error,{type:n,[fp]:!0},e)}function ni(n,e){return n instanceof Error&&fp in n&&(e==null||!!(n.type&e))}const Vu="[^/]+?",dE={sensitive:!1,strict:!1,start:!0,end:!0},pE=/[.+*?^${}()[\]/\\]/g;function mE(n,e){const t=xt({},dE,e),i=[];let r=t.start?"^":"";const s=[];for(const f of n){const h=f.length?[]:[90];t.strict&&!f.length&&(r+="/");for(let p=0;p<f.length;p++){const c=f[p];let m=40+(t.sensitive?.25:0);if(c.type===0)p||(r+="/"),r+=c.value.replace(pE,"\\$&"),m+=40;else if(c.type===1){const{value:d,repeatable:y,optional:g,regexp:u}=c;s.push({name:d,repeatable:y,optional:g});const b=u||Vu;if(b!==Vu){m+=10;try{new RegExp(`(${b})`)}catch(w){throw new Error(`Invalid custom RegExp for param "${d}" (${b}): `+w.message)}}let T=y?`((?:${b})(?:/(?:${b}))*)`:`(${b})`;p||(T=g&&f.length<2?`(?:/${T})`:"/"+T),g&&(T+="?"),r+=T,m+=20,g&&(m+=-8),y&&(m+=-20),b===".*"&&(m+=-50)}h.push(m)}i.push(h)}if(t.strict&&t.end){const f=i.length-1;i[f][i[f].length-1]+=.7000000000000001}t.strict||(r+="/?"),t.end?r+="$":t.strict&&(r+="(?:/|$)");const o=new RegExp(r,t.sensitive?"":"i");function a(f){const h=f.match(o),p={};if(!h)return null;for(let c=1;c<h.length;c++){const m=h[c]||"",d=s[c-1];p[d.name]=m&&d.repeatable?m.split("/"):m}return p}function l(f){let h="",p=!1;for(const c of n){(!p||!h.endsWith("/"))&&(h+="/"),p=!1;for(const m of c)if(m.type===0)h+=m.value;else if(m.type===1){const{value:d,repeatable:y,optional:g}=m,u=d in f?f[d]:"";if(Nn(u)&&!y)throw new Error(`Provided param "${d}" is an array but it is not repeatable (* or + modifiers)`);const b=Nn(u)?u.join("/"):u;if(!b)if(g)c.length<2&&(h.endsWith("/")?h=h.slice(0,-1):p=!0);else throw new Error(`Missing required param "${d}"`);h+=b}}return h||"/"}return{re:o,score:i,keys:s,parse:a,stringify:l}}function _E(n,e){let t=0;for(;t<n.length&&t<e.length;){const i=e[t]-n[t];if(i)return i;t++}return n.length<e.length?n.length===1&&n[0]===80?-1:1:n.length>e.length?e.length===1&&e[0]===80?1:-1:0}function up(n,e){let t=0;const i=n.score,r=e.score;for(;t<i.length&&t<r.length;){const s=_E(i[t],r[t]);if(s)return s;t++}if(Math.abs(r.length-i.length)===1){if(Wu(i))return 1;if(Wu(r))return-1}return r.length-i.length}function Wu(n){const e=n[n.length-1];return n.length>0&&e[e.length-1]<0}const gE={type:0,value:""},vE=/[a-zA-Z0-9_]/;function xE(n){if(!n)return[[]];if(n==="/")return[[gE]];if(!n.startsWith("/"))throw new Error(`Invalid path "${n}"`);function e(m){throw new Error(`ERR (${t})/"${f}": ${m}`)}let t=0,i=t;const r=[];let s;function o(){s&&r.push(s),s=[]}let a=0,l,f="",h="";function p(){f&&(t===0?s.push({type:0,value:f}):t===1||t===2||t===3?(s.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${f}) must be alone in its segment. eg: '/:ids+.`),s.push({type:1,value:f,regexp:h,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),f="")}function c(){f+=l}for(;a<n.length;){if(l=n[a++],l==="\\"&&t!==2){i=t,t=4;continue}switch(t){case 0:l==="/"?(f&&p(),o()):l===":"?(p(),t=1):c();break;case 4:c(),t=i;break;case 1:l==="("?t=2:vE.test(l)?c():(p(),t=0,l!=="*"&&l!=="?"&&l!=="+"&&a--);break;case 2:l===")"?h[h.length-1]=="\\"?h=h.slice(0,-1)+l:t=3:h+=l;break;case 3:p(),t=0,l!=="*"&&l!=="?"&&l!=="+"&&a--,h="";break;default:e("Unknown state");break}}return t===2&&e(`Unfinished custom RegExp for param "${f}"`),p(),o(),r}function yE(n,e,t){const i=mE(xE(n.path),t),r=xt(i,{record:n,parent:e,children:[],alias:[]});return e&&!r.record.aliasOf==!e.record.aliasOf&&e.children.push(r),r}function SE(n,e){const t=[],i=new Map;e=ju({strict:!1,end:!0,sensitive:!1},e);function r(p){return i.get(p)}function s(p,c,m){const d=!m,y=qu(p);y.aliasOf=m&&m.record;const g=ju(e,p),u=[y];if("alias"in p){const w=typeof p.alias=="string"?[p.alias]:p.alias;for(const G of w)u.push(qu(xt({},y,{components:m?m.record.components:y.components,path:G,aliasOf:m?m.record:y})))}let b,T;for(const w of u){const{path:G}=w;if(c&&G[0]!=="/"){const O=c.record.path,k=O[O.length-1]==="/"?"":"/";w.path=c.record.path+(G&&k+G)}if(b=yE(w,c,g),m?m.alias.push(b):(T=T||b,T!==b&&T.alias.push(b),d&&p.name&&!Yu(b)&&o(p.name)),hp(b)&&l(b),y.children){const O=y.children;for(let k=0;k<O.length;k++)s(O[k],b,m&&m.children[k])}m=m||b}return T?()=>{o(T)}:As}function o(p){if(cp(p)){const c=i.get(p);c&&(i.delete(p),t.splice(t.indexOf(c),1),c.children.forEach(o),c.alias.forEach(o))}else{const c=t.indexOf(p);c>-1&&(t.splice(c,1),p.record.name&&i.delete(p.record.name),p.children.forEach(o),p.alias.forEach(o))}}function a(){return t}function l(p){const c=EE(p,t);t.splice(c,0,p),p.record.name&&!Yu(p)&&i.set(p.record.name,p)}function f(p,c){let m,d={},y,g;if("name"in p&&p.name){if(m=i.get(p.name),!m)throw Kr(1,{location:p});g=m.record.name,d=xt(Xu(c.params,m.keys.filter(T=>!T.optional).concat(m.parent?m.parent.keys.filter(T=>T.optional):[]).map(T=>T.name)),p.params&&Xu(p.params,m.keys.map(T=>T.name))),y=m.stringify(d)}else if(p.path!=null)y=p.path,m=t.find(T=>T.re.test(y)),m&&(d=m.parse(y),g=m.record.name);else{if(m=c.name?i.get(c.name):t.find(T=>T.re.test(c.path)),!m)throw Kr(1,{location:p,currentLocation:c});g=m.record.name,d=xt({},c.params,p.params),y=m.stringify(d)}const u=[];let b=m;for(;b;)u.unshift(b.record),b=b.parent;return{name:g,path:y,params:d,matched:u,meta:TE(u)}}n.forEach(p=>s(p));function h(){t.length=0,i.clear()}return{addRoute:s,resolve:f,removeRoute:o,clearRoutes:h,getRoutes:a,getRecordMatcher:r}}function Xu(n,e){const t={};for(const i of e)i in n&&(t[i]=n[i]);return t}function qu(n){const e={path:n.path,redirect:n.redirect,name:n.name,meta:n.meta||{},aliasOf:n.aliasOf,beforeEnter:n.beforeEnter,props:ME(n),children:n.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in n?n.components||null:n.component&&{default:n.component}};return Object.defineProperty(e,"mods",{value:{}}),e}function ME(n){const e={},t=n.props||!1;if("component"in n)e.default=t;else for(const i in n.components)e[i]=typeof t=="object"?t[i]:t;return e}function Yu(n){for(;n;){if(n.record.aliasOf)return!0;n=n.parent}return!1}function TE(n){return n.reduce((e,t)=>xt(e,t.meta),{})}function ju(n,e){const t={};for(const i in n)t[i]=i in e?e[i]:n[i];return t}function EE(n,e){let t=0,i=e.length;for(;t!==i;){const s=t+i>>1;up(n,e[s])<0?i=s:t=s+1}const r=bE(n);return r&&(i=e.lastIndexOf(r,i-1)),i}function bE(n){let e=n;for(;e=e.parent;)if(hp(e)&&up(n,e)===0)return e}function hp({record:n}){return!!(n.name||n.components&&Object.keys(n.components).length||n.redirect)}function wE(n){const e={};if(n===""||n==="?")return e;const i=(n[0]==="?"?n.slice(1):n).split("&");for(let r=0;r<i.length;++r){const s=i[r].replace(ip," "),o=s.indexOf("="),a=Fs(o<0?s:s.slice(0,o)),l=o<0?null:Fs(s.slice(o+1));if(a in e){let f=e[a];Nn(f)||(f=e[a]=[f]),f.push(l)}else e[a]=l}return e}function $u(n){let e="";for(let t in n){const i=n[t];if(t=qT(t),i==null){i!==void 0&&(e+=(e.length?"&":"")+t);continue}(Nn(i)?i.map(s=>s&&hc(s)):[i&&hc(i)]).forEach(s=>{s!==void 0&&(e+=(e.length?"&":"")+t,s!=null&&(e+="="+s))})}return e}function AE(n){const e={};for(const t in n){const i=n[t];i!==void 0&&(e[t]=Nn(i)?i.map(r=>r==null?null:""+r):i==null?i:""+i)}return e}const RE=Symbol(""),Ku=Symbol(""),tf=Symbol(""),dp=Symbol(""),pc=Symbol("");function ds(){let n=[];function e(i){return n.push(i),()=>{const r=n.indexOf(i);r>-1&&n.splice(r,1)}}function t(){n=[]}return{add:e,list:()=>n.slice(),reset:t}}function Ri(n,e,t,i,r,s=o=>o()){const o=i&&(i.enterCallbacks[r]=i.enterCallbacks[r]||[]);return()=>new Promise((a,l)=>{const f=c=>{c===!1?l(Kr(4,{from:t,to:e})):c instanceof Error?l(c):hE(c)?l(Kr(2,{from:e,to:c})):(o&&i.enterCallbacks[r]===o&&typeof c=="function"&&o.push(c),a())},h=s(()=>n.call(i&&i.instances[r],e,t,f));let p=Promise.resolve(h);n.length<3&&(p=p.then(f)),p.catch(c=>l(c))})}function ol(n,e,t,i,r=s=>s()){const s=[];for(const o of n)for(const a in o.components){let l=o.components[a];if(!(e!=="beforeRouteEnter"&&!o.instances[a]))if(tp(l)){const h=(l.__vccOpts||l)[e];h&&s.push(Ri(h,t,i,o,a,r))}else{let f=l();s.push(()=>f.then(h=>{if(!h)throw new Error(`Couldn't resolve component "${a}" at "${o.path}"`);const p=NT(h)?h.default:h;o.mods[a]=h,o.components[a]=p;const m=(p.__vccOpts||p)[e];return m&&Ri(m,t,i,o,a,r)()}))}}return s}function Zu(n){const e=fi(tf),t=fi(dp),i=wn(()=>{const l=or(n.to);return e.resolve(l)}),r=wn(()=>{const{matched:l}=i.value,{length:f}=l,h=l[f-1],p=t.matched;if(!h||!p.length)return-1;const c=p.findIndex($r.bind(null,h));if(c>-1)return c;const m=Ju(l[f-2]);return f>1&&Ju(h)===m&&p[p.length-1].path!==m?p.findIndex($r.bind(null,l[f-2])):c}),s=wn(()=>r.value>-1&&LE(t.params,i.value.params)),o=wn(()=>r.value>-1&&r.value===t.matched.length-1&&op(t.params,i.value.params));function a(l={}){return DE(l)?e[or(n.replace)?"replace":"push"](or(n.to)).catch(As):Promise.resolve()}return{route:i,href:wn(()=>i.value.href),isActive:s,isExactActive:o,navigate:a}}const CE=Rh({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Zu,setup(n,{slots:e}){const t=eo(Zu(n)),{options:i}=fi(tf),r=wn(()=>({[Qu(n.activeClass,i.linkActiveClass,"router-link-active")]:t.isActive,[Qu(n.exactActiveClass,i.linkExactActiveClass,"router-link-exact-active")]:t.isExactActive}));return()=>{const s=e.default&&e.default(t);return n.custom?s:Qh("a",{"aria-current":t.isExactActive?n.ariaCurrentValue:null,href:t.href,onClick:t.navigate,class:r.value},s)}}}),PE=CE;function DE(n){if(!(n.metaKey||n.altKey||n.ctrlKey||n.shiftKey)&&!n.defaultPrevented&&!(n.button!==void 0&&n.button!==0)){if(n.currentTarget&&n.currentTarget.getAttribute){const e=n.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return n.preventDefault&&n.preventDefault(),!0}}function LE(n,e){for(const t in e){const i=e[t],r=n[t];if(typeof i=="string"){if(i!==r)return!1}else if(!Nn(r)||r.length!==i.length||i.some((s,o)=>s!==r[o]))return!1}return!0}function Ju(n){return n?n.aliasOf?n.aliasOf.path:n.path:""}const Qu=(n,e,t)=>n??e??t,IE=Rh({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(n,{attrs:e,slots:t}){const i=fi(pc),r=wn(()=>n.route||i.value),s=fi(Ku,0),o=wn(()=>{let f=or(s);const{matched:h}=r.value;let p;for(;(p=h[f])&&!p.components;)f++;return f}),a=wn(()=>r.value.matched[o.value]);ba(Ku,wn(()=>o.value+1)),ba(RE,a),ba(pc,r);const l=Jp();return wa(()=>[l.value,a.value,n.name],([f,h,p],[c,m,d])=>{h&&(h.instances[p]=f,m&&m!==h&&f&&f===c&&(h.leaveGuards.size||(h.leaveGuards=m.leaveGuards),h.updateGuards.size||(h.updateGuards=m.updateGuards))),f&&h&&(!m||!$r(h,m)||!c)&&(h.enterCallbacks[p]||[]).forEach(y=>y(f))},{flush:"post"}),()=>{const f=r.value,h=n.name,p=a.value,c=p&&p.components[h];if(!c)return eh(t.default,{Component:c,route:f});const m=p.props[h],d=m?m===!0?f.params:typeof m=="function"?m(f):m:null,g=Qh(c,xt({},d,e,{onVnodeUnmounted:u=>{u.component.isUnmounted&&(p.instances[h]=null)},ref:l}));return eh(t.default,{Component:g,route:f})||g}}});function eh(n,e){if(!n)return null;const t=n(e);return t.length===1?t[0]:t}const UE=IE;function NE(n){const e=SE(n.routes,n),t=n.parseQuery||wE,i=n.stringifyQuery||$u,r=n.history,s=ds(),o=ds(),a=ds(),l=Qp(Ei);let f=Ei;Lr&&n.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const h=sl.bind(null,Z=>""+Z),p=sl.bind(null,jT),c=sl.bind(null,Fs);function m(Z,we){let xe,De;return cp(Z)?(xe=e.getRecordMatcher(Z),De=we):De=Z,e.addRoute(De,xe)}function d(Z){const we=e.getRecordMatcher(Z);we&&e.removeRoute(we)}function y(){return e.getRoutes().map(Z=>Z.record)}function g(Z){return!!e.getRecordMatcher(Z)}function u(Z,we){if(we=xt({},we||l.value),typeof Z=="string"){const H=al(t,Z,we.path),V=e.resolve({path:H.path},we),de=r.createHref(H.fullPath);return xt(H,V,{params:c(V.params),hash:Fs(H.hash),redirectedFrom:void 0,href:de})}let xe;if(Z.path!=null)xe=xt({},Z,{path:al(t,Z.path,we.path).path});else{const H=xt({},Z.params);for(const V in H)H[V]==null&&delete H[V];xe=xt({},Z,{params:p(H)}),we.params=p(we.params)}const De=e.resolve(xe,we),qe=Z.hash||"";De.params=h(c(De.params));const We=ZT(i,xt({},Z,{hash:XT(qe),path:De.path})),E=r.createHref(We);return xt({fullPath:We,hash:qe,query:i===$u?AE(Z.query):Z.query||{}},De,{redirectedFrom:void 0,href:E})}function b(Z){return typeof Z=="string"?al(t,Z,l.value.path):xt({},Z)}function T(Z,we){if(f!==Z)return Kr(8,{from:we,to:Z})}function w(Z){return k(Z)}function G(Z){return w(xt(b(Z),{replace:!0}))}function O(Z){const we=Z.matched[Z.matched.length-1];if(we&&we.redirect){const{redirect:xe}=we;let De=typeof xe=="function"?xe(Z):xe;return typeof De=="string"&&(De=De.includes("?")||De.includes("#")?De=b(De):{path:De},De.params={}),xt({query:Z.query,hash:Z.hash,params:De.path!=null?{}:Z.params},De)}}function k(Z,we){const xe=f=u(Z),De=l.value,qe=Z.state,We=Z.force,E=Z.replace===!0,H=O(xe);if(H)return k(xt(b(H),{state:typeof H=="object"?xt({},qe,H.state):qe,force:We,replace:E}),we||xe);const V=xe;V.redirectedFrom=we;let de;return!We&&JT(i,De,xe)&&(de=Kr(16,{to:V,from:De}),He(De,De,!0,!1)),(de?Promise.resolve(de):A(V,De)).catch(ie=>ni(ie)?ni(ie,2)?ie:ze(ie):te(ie,V,De)).then(ie=>{if(ie){if(ni(ie,2))return k(xt({replace:E},b(ie.to),{state:typeof ie.to=="object"?xt({},qe,ie.to.state):qe,force:We}),we||V)}else ie=re(V,De,!0,E,qe);return D(V,De,ie),ie})}function q(Z,we){const xe=T(Z,we);return xe?Promise.reject(xe):Promise.resolve()}function le(Z){const we=Se.values().next().value;return we&&typeof we.runWithContext=="function"?we.runWithContext(Z):Z()}function A(Z,we){let xe;const[De,qe,We]=OE(Z,we);xe=ol(De.reverse(),"beforeRouteLeave",Z,we);for(const H of De)H.leaveGuards.forEach(V=>{xe.push(Ri(V,Z,we))});const E=q.bind(null,Z,we);return xe.push(E),Oe(xe).then(()=>{xe=[];for(const H of s.list())xe.push(Ri(H,Z,we));return xe.push(E),Oe(xe)}).then(()=>{xe=ol(qe,"beforeRouteUpdate",Z,we);for(const H of qe)H.updateGuards.forEach(V=>{xe.push(Ri(V,Z,we))});return xe.push(E),Oe(xe)}).then(()=>{xe=[];for(const H of We)if(H.beforeEnter)if(Nn(H.beforeEnter))for(const V of H.beforeEnter)xe.push(Ri(V,Z,we));else xe.push(Ri(H.beforeEnter,Z,we));return xe.push(E),Oe(xe)}).then(()=>(Z.matched.forEach(H=>H.enterCallbacks={}),xe=ol(We,"beforeRouteEnter",Z,we,le),xe.push(E),Oe(xe))).then(()=>{xe=[];for(const H of o.list())xe.push(Ri(H,Z,we));return xe.push(E),Oe(xe)}).catch(H=>ni(H,8)?H:Promise.reject(H))}function D(Z,we,xe){a.list().forEach(De=>le(()=>De(Z,we,xe)))}function re(Z,we,xe,De,qe){const We=T(Z,we);if(We)return We;const E=we===Ei,H=Lr?history.state:{};xe&&(De||E?r.replace(Z.fullPath,xt({scroll:E&&H&&H.scroll},qe)):r.push(Z.fullPath,qe)),l.value=Z,He(Z,we,xe,E),ze()}let ee;function pe(){ee||(ee=r.listen((Z,we,xe)=>{if(!Pe.listening)return;const De=u(Z),qe=O(De);if(qe){k(xt(qe,{replace:!0}),De).catch(As);return}f=De;const We=l.value;Lr&&aE(ku(We.fullPath,xe.delta),uo()),A(De,We).catch(E=>ni(E,12)?E:ni(E,2)?(k(E.to,De).then(H=>{ni(H,20)&&!xe.delta&&xe.type===Bs.pop&&r.go(-1,!1)}).catch(As),Promise.reject()):(xe.delta&&r.go(-xe.delta,!1),te(E,De,We))).then(E=>{E=E||re(De,We,!1),E&&(xe.delta&&!ni(E,8)?r.go(-xe.delta,!1):xe.type===Bs.pop&&ni(E,20)&&r.go(-1,!1)),D(De,We,E)}).catch(As)}))}let oe=ds(),ae=ds(),_e;function te(Z,we,xe){ze(Z);const De=ae.list();return De.length&&De.forEach(qe=>qe(Z,we,xe)),Promise.reject(Z)}function Ne(){return _e&&l.value!==Ei?Promise.resolve():new Promise((Z,we)=>{oe.add([Z,we])})}function ze(Z){return _e||(_e=!Z,pe(),oe.list().forEach(([we,xe])=>Z?xe(Z):we()),oe.reset()),Z}function He(Z,we,xe,De){const{scrollBehavior:qe}=n;if(!Lr||!qe)return Promise.resolve();const We=!xe&&oE(ku(Z.fullPath,0))||(De||!xe)&&history.state&&history.state.scroll||null;return Th().then(()=>qe(Z,we,We)).then(E=>E&&sE(E)).catch(E=>te(E,Z,we))}const Qe=Z=>r.go(Z);let it;const Se=new Set,Pe={currentRoute:l,listening:!0,addRoute:m,removeRoute:d,clearRoutes:e.clearRoutes,hasRoute:g,getRoutes:y,resolve:u,options:n,push:w,replace:G,go:Qe,back:()=>Qe(-1),forward:()=>Qe(1),beforeEach:s.add,beforeResolve:o.add,afterEach:a.add,onError:ae.add,isReady:Ne,install(Z){const we=this;Z.component("RouterLink",PE),Z.component("RouterView",UE),Z.config.globalProperties.$router=we,Object.defineProperty(Z.config.globalProperties,"$route",{enumerable:!0,get:()=>or(l)}),Lr&&!it&&l.value===Ei&&(it=!0,w(r.location).catch(qe=>{}));const xe={};for(const qe in Ei)Object.defineProperty(xe,qe,{get:()=>l.value[qe],enumerable:!0});Z.provide(tf,we),Z.provide(dp,vh(xe)),Z.provide(pc,l);const De=Z.unmount;Se.add(Z),Z.unmount=function(){Se.delete(Z),Se.size<1&&(f=Ei,ee&&ee(),ee=null,l.value=Ei,it=!1,_e=!1),De()}}};function Oe(Z){return Z.reduce((we,xe)=>we.then(()=>le(xe)),Promise.resolve())}return Pe}function OE(n,e){const t=[],i=[],r=[],s=Math.max(e.matched.length,n.matched.length);for(let o=0;o<s;o++){const a=e.matched[o];a&&(n.matched.find(f=>$r(f,a))?i.push(a):t.push(a));const l=n.matched[o];l&&(e.matched.find(f=>$r(f,l))||r.push(l))}return[t,i,r]}const FE={class:"flex flex-col"},BE={__name:"Home",setup(n){return Lc(()=>{new PT}),(e,t)=>(ks(),Hs("div",FE,t[0]||(t[0]=[Un("div",{id:"hero-text",class:"w-full h-[70vh] z-10 relative"},null,-1)])))}},zE="/YangPortfolioPublic/assets/MyIcon-BuHmBPjZ.png",pp=(n,e)=>{const t=n.__vccOpts||n;for(const[i,r]of e)t[i]=r;return t},kE={};function HE(n,e){return ks(),Hs("section",null,e[0]||(e[0]=[i_('<div class="grid-cols-2 grid min-h-[60vh]"><div class="flex flex-col gap-8 h-full justify-center col-span-2 lg:col-span-1 md:col-span-2 py-10"><div class="text-6xl"><h2>Hi there! I am</h2><h2 class="text-secondary">Wei Yang.</h2></div><div class="flex flex-col gap-2 text-lg"><span> I am a versatile programmer specializing in C++ and 3D development, with a passion for graphics and visual effects. My journey began as a C++ gameplay programmer using Unreal Engine to develop a multiplayer game. </span><span> Since then, I have delved into shader programming and explored various aspects of graphics technology. Working with several small companies has honed my ability to quickly learn and adapt to new technologies, equipping me with a broad and diverse skill set. </span></div></div><div class="flex justify-center items-center lg:block md:hidden hidden"><img src="'+zE+'" alt="Wei Yang&#39;s Icon"></div></div><div class="mt-8"><h2 class="text-4xl mb-6">Professional Experience</h2><div class="flex flex-col md:flex-row gap-4 mb-6"><div class="w-full md:w-64 flex flex-col gap-1"><span class="text-primary">Senior Software Engineer</span><div><span class="text-secondary">Vizzio Technologies Pte Ltd</span><span> | Singapore</span></div><span>June 2023 - Present</span></div><div class="w-full md:flex-auto"><ul class="list-disc pl-5"><li><span class="text-primary">GIS Development (C++)</span>: Led the development of performance-driven geographic information systems (GIS) with a focus on scalability. </li><li><span class="text-primary">Web View SDK on Unreal Engine (C++, TypeScript)</span>: Integrated web-based views within Unreal Engine for seamless interaction between 3D environments and web content. </li><li><span class="text-primary">Project Support (Blueprint and C++)</span>: Contributed to various projects, ensuring optimized performance using Unreal Engine’s Blueprint system and C++. </li><li><span class="text-primary">Collaboration with McKinsey</span>: Worked on a strategic project for Saudi Arabia, collaborating with McKinsey to solve complex problems. </li><li><span class="text-primary">Licensing System Setup (C++ and C#)</span>: Developed and maintained a licensing system for streamlined software access control. </li><li><span class="text-primary">JavaScript Encryption with WASM</span>: Implemented secure encryption processes using WebAssembly (WASM) to protect sensitive web data. </li><li><span class="text-primary">3D Tile Streaming Server (Linux, C++, TCP)</span>: Developing a 3D tile streaming server using C++ and TCP on Linux for high-performance data transmission. </li></ul></div></div><div class="flex flex-col md:flex-row gap-4 mb-6"><div class="w-full md:w-64 flex flex-col gap-1"><span class="text-primary">Lead Engineer</span><div><span class="text-secondary">Weike Gaming Technology</span><span> | Singapore</span></div><span>August 2022 - July 2023</span></div><div class="w-full md:flex-auto"><ul class="list-disc pl-5"><li> Led engineering efforts for gaming solutions, contributing to various aspects of software development from core logic to user interface. </li><li> Managed team deliverables and ensured code quality across projects. </li></ul></div></div><div class="flex flex-col md:flex-row gap-4 mb-6"><div class="w-full md:w-64 flex flex-col gap-1"><span class="text-primary">Lead Application Developer</span><div><span class="text-secondary">Multiply Studio Sdn Bhd</span><span> | Malaysia</span></div><span>April 2021 - August 2022</span></div><div class="w-full md:flex-auto"><ul class="list-disc pl-5"><li> Spearheaded application development for high-traffic consumer platforms. </li><li> Managed technical aspects of product delivery and ensured cross-platform consistency. </li></ul></div></div><div class="flex flex-col md:flex-row gap-4 mb-6"><div class="w-full md:w-64 flex flex-col gap-1"><span class="text-primary">Application Developer</span><div><span class="text-secondary">Eco World Development Group Berhad</span><span> | Malaysia</span></div><span>July 2019 - July 2020</span></div><div class="w-full md:flex-auto"><ul class="list-disc pl-5"><li> Contributed to application development for various internal and consumer-facing applications. </li><li> Enhanced UI/UX designs and integrated backend systems. </li></ul></div></div><div class="flex flex-col md:flex-row gap-4 mb-6"><div class="w-full md:w-64 flex flex-col gap-1"><span class="text-primary">Game Programmer</span><div><span class="text-secondary">Ammobox Studios</span><span> | Malaysia</span></div><span>January 2018 - February 2019</span></div><div class="w-full md:flex-auto"><ul class="list-disc pl-5"><li> Improved maintainability and performance by refactoring legacy code. </li><li> Developed new features and systems, including weapon and objective systems. </li><li> Handled networking code for multiplayer functionality using UDP Protocol. </li><li> Utilized Unreal Engine 4’s Blueprint system to create game mechanics and interactions. </li></ul></div></div><div class="flex flex-col md:flex-row gap-4"><div class="w-full md:w-64 flex flex-col gap-1"><span class="text-primary">QA Programmer</span><div><span class="text-secondary">Centre for Content Creation</span><span> | Malaysia</span></div><span>January 2016 - May 2016</span></div><div class="w-full md:flex-auto"><ul class="list-disc pl-5"><li> Worked on <em>Starfall Catalyst</em>, identifying and fixing bugs in Unity3D (C#). </li><li> Improved overall game stability and performance through diligent QA processes. </li></ul></div></div></div><div class="mt-8"><h2 class="text-4xl mb-6">Education</h2><div class="flex flex-col md:flex-row gap-4 mb-6"><div class="w-full md:w-64 flex flex-col gap-1"><span class="text-primary">Bachelor&#39;s Degree in Computer Games and Programming Skills</span><div><span class="text-secondary">Limkokwing University of Creative Technology</span><span> | Malaysia</span></div><span>2015 - 2017</span></div><div class="w-full md:flex-auto"><p> Completed a comprehensive program focused on game development and programming skills, covering topics such as game design, C++ programming, and 3D modeling. </p></div></div><div class="flex flex-col md:flex-row gap-4"><div class="w-full md:w-64 flex flex-col gap-1"><span class="text-primary">Foundation Degree in Information Technology</span><div><span class="text-secondary">Limkokwing University of Creative Technology</span><span> | Malaysia</span></div><span>2014</span></div><div class="w-full md:flex-auto"><p> Gained foundational knowledge in Information Technology, including basic programming, database management, and IT systems. </p></div></div></div><footer class="flex gap-4 mt-8"><a href="https://www.linkedin.com/in/tan-wei-yang-396305179/" target="_blank" rel="noopener noreferrer"></a><a href="https://github.com/renkin4" target="_blank" rel="noopener noreferrer"></a></footer>',4)]))}const GE=pp(kE,[["render",HE]]),VE={};function WE(n,e){const t=Ic("router-link");return ks(),Hs("div",null,[e[1]||(e[1]=Un("h1",null,"404 - Page Not Found",-1)),e[2]||(e[2]=Un("p",null,"The page you're looking for doesn't exist.",-1)),kt(t,{to:"/"},{default:Ms(()=>e[0]||(e[0]=[ws("Go back to Home")])),_:1})])}const XE=pp(VE,[["render",WE]]),qE=[{path:"/",name:"Home",component:BE},{path:"/about",name:"About",component:GE},{path:"/:pathMatch(.*)*",name:"NotFound",component:XE,beforeEnter:(n,e,t)=>{n.path.startsWith("/docs")?window.location.href=n.fullPath:t()}}],YE=NE({history:uE("/YangPortfolioPublic"),routes:qE});F_(UT).use(YE).mount("#app")});export default jE();
