"use strict";var qr=Object.create;var Xt=Object.defineProperty;var Hr=Object.getOwnPropertyDescriptor;var Vr=Object.getOwnPropertyNames;var jr=Object.getPrototypeOf,Wr=Object.prototype.hasOwnProperty;var Ur=(t,e)=>()=>{try{return e||t((e={exports:{}}).exports,e),e.exports}catch(n){throw e=0,n}},Ee=(t,e)=>{for(var n in e)Xt(t,n,{get:e[n],enumerable:!0})},Fe=(t,e,n,r)=>{if(e&&typeof e=="object"||typeof e=="function")for(let i of Vr(e))!Wr.call(t,i)&&i!==n&&Xt(t,i,{get:()=>e[i],enumerable:!(r=Hr(e,i))||r.enumerable});return t};var $r=(t,e,n)=>(n=t!=null?qr(jr(t)):{},Fe(e||!t||!t.__esModule?Xt(n,"default",{value:t,enumerable:!0}):n,t)),Qr=t=>Fe(Xt({},"__esModule",{value:!0}),t);var Sr=Ur((xh,he)=>{(function(){var t;typeof he<"u"?t=he.exports=r:t=(function(){return this||(0,eval)("this")})(),t.format=r,t.vsprintf=n,typeof console<"u"&&typeof console.log=="function"&&(t.printf=e);function e(){console.log(r.apply(null,arguments))}function n(i,a){return r.apply(null,[i].concat(a))}function r(i){for(var a=1,o=[].slice.call(arguments),u=0,s=i.length,f="",l,c=!1,m,h,x=!1,I,y=function(){return o[a++]},w=function(){for(var S="";/\d/.test(i[u]);)S+=i[u++],l=i[u];return S.length>0?parseInt(S):null};u<s;++u)if(l=i[u],c)switch(c=!1,l=="."?(x=!1,l=i[++u]):l=="0"&&i[u+1]=="."?(x=!0,u+=2,l=i[u]):x=!0,I=w(),l){case"b":f+=parseInt(y(),10).toString(2);break;case"c":m=y(),typeof m=="string"||m instanceof String?f+=m:f+=String.fromCharCode(parseInt(m,10));break;case"d":f+=parseInt(y(),10);break;case"f":h=String(parseFloat(y()).toFixed(I||6)),f+=x?h:h.replace(/^0/,"");break;case"j":f+=JSON.stringify(y());break;case"o":f+="0"+parseInt(y(),10).toString(8);break;case"s":f+=y();break;case"x":f+="0x"+parseInt(y(),10).toString(16);break;case"X":f+="0x"+parseInt(y(),10).toString(16).toUpperCase();break;default:f+=l;break}else l==="%"?c=!0:f+=l;return f}})()});var Ga={};Ee(Ga,{default:()=>yn});module.exports=Qr(Ga);var ct=require("obsidian");var Fn={scripts:!0,latex:!0,arrows:!0,operators:!0};function Ie(t){let e={...Fn};if(t&&typeof t=="object")for(let n of Object.keys(e))typeof t[n]=="boolean"&&(e[n]=t[n]);return e}var Zr={alpha:"\u03B1",beta:"\u03B2",gamma:"\u03B3",delta:"\u03B4",theta:"\u03B8",lambda:"\u03BB",mu:"\u03BC",sigma:"\u03C3",omega:"\u03C9",Delta:"\u0394",infty:"\u221E",emptyset:"\u2205",sum:"\u2211",partial:"\u2202",nabla:"\u2207",forall:"\u2200",exists:"\u2203",in:"\u2208",subset:"\u2282",land:"\u2227",wedge:"\u2227",lor:"\u2228",vee:"\u2228",rightarrow:"\u2192",leftarrow:"\u2190",uparrow:"\u2191",downarrow:"\u2193",leftrightarrow:"\u2194",longrightarrow:"\u27F6",longleftarrow:"\u27F5",longleftrightarrow:"\u27F7",Rightarrow:"\u21D2",Leftarrow:"\u21D0",Leftrightarrow:"\u21D4",geq:"\u2265",leq:"\u2264",neq:"\u2260",approx:"\u2248",pm:"\xB1",mp:"\u2213"},Te={"->":"\u2192","<-":"\u2190","<->":"\u2194","-->":"\u27F6","<--":"\u27F5","<-->":"\u27F7","=>":"\u21D2","<=>":"\u21D4","^|":"\u2191","v|":"\u2193","|^":"\u2191","|v":"\u2193"},Yr={">=":"\u2265","<=":"\u2264","!=":"\u2260","~=":"\u2248","+-":"\xB1","-+":"\u2213"},En=/[\p{L}\p{N}_\\^]/u;function Ae(t,e,n=0){let r=[],i=0,a=(o,u)=>{r.push({from:n+i,to:n+i+o,source:t.slice(i,i+o),...u}),i+=o};for(;i<t.length;){let o=t.slice(i);if(t[i]==="\\"){let f=/^\\([A-Za-z]+)/.exec(o);if(f){let l=Zr[f[1]];e.latex&&l?a(f[0].length,{kind:"symbol",text:l}):i+=f[0].length}else i+=Math.min(2,o.length);continue}let u=/^(?:[\^v]\||\|[\^v])/.exec(o);if(u&&(u[0]!=="v|"||i===0||!En.test(t[i-1]))&&(u[0]!=="|v"||!En.test(t[i+2]??""))){e.arrows?a(2,{kind:"symbol",text:Te[u[0]]}):i+=2;continue}if(e.scripts&&/[A-Za-z]/.test(t[i])&&/[_^]/.test(t[i+1]??"")&&(i===0||!En.test(t[i-1]))){let f=Gr(o);if(f){a(f.length,{kind:"script",text:t[i],sub:f.sub,sup:f.sup});continue}}let s=/^[<>!=~+-]+/.exec(o);if(s){let f=(e.arrows?Te[s[0]]:void 0)??(e.operators?Yr[s[0]]:void 0);f?a(s[0].length,{kind:"symbol",text:f}):i+=s[0].length;continue}i++}return r}function Gr(t){let e={length:1},n=t[1];for(;n==="_"||n==="^";){let r=n==="_"?"sub":"sup";if(e[r]!==void 0)break;let i=e.length+1,a,o;if(t[i]==="{"){if(a=t.indexOf("}",i),a<0||/[{\r\n]/.test(t.slice(i+1,a)))break;o=t.slice(i+1,a),a++}else{let u=n==="_"?"^":"_";for(a=i;a<t.length&&!/\s/.test(t[a])&&(t[a]!==u||e.sub!==void 0||e.sup!==void 0);)a++;o=t.slice(i,a)}if(!o)break;e[r]=o,e.length=a,n=t[a]}return e.sub??e.sup?e:void 0}var Mr=require("@codemirror/state"),st=require("@codemirror/view"),bn=require("obsidian");function Kt(t,e){let r=t.win.createSpan({cls:`easy-symbols easy-symbols-${e.kind}`,attr:{"data-source":e.source},text:e.text});return e.sub&&r.createEl("sub",{text:e.sub}),e.sup&&r.createEl("sup",{text:e.sup}),r}var Xr={};function Tn(t,e){let n=e||Xr,r=typeof n.includeImageAlt=="boolean"?n.includeImageAlt:!0,i=typeof n.includeHtml=="boolean"?n.includeHtml:!0;return Me(t,r,i)}function Me(t,e,n){if(Kr(t)){if("value"in t)return t.type==="html"&&!n?"":t.value;if(e&&"alt"in t&&t.alt)return t.alt;if("children"in t)return ze(t.children,e,n)}return Array.isArray(t)?ze(t,e,n):""}function ze(t,e,n){let r=[],i=-1;for(;++i<t.length;)r[i]=Me(t[i],e,n);return r.join("")}function Kr(t){return!!(t&&typeof t=="object")}var Le=document.createElement("i");function Lt(t){let e="&"+t+";";Le.innerHTML=e;let n=Le.textContent;return n.charCodeAt(n.length-1)===59&&t!=="semi"||n===e?!1:n}function Q(t,e,n,r){let i=t.length,a=0,o;if(e<0?e=-e>i?0:i+e:e=e>i?i:e,n=n>0?n:0,r.length<1e4)o=Array.from(r),o.unshift(e,n),t.splice(...o);else for(n&&t.splice(e,n);a<r.length;)o=r.slice(a,a+1e4),o.unshift(e,0),t.splice(...o),a+=1e4,e+=1e4}function X(t,e){return t.length>0?(Q(t,t.length,0,e),t):e}var De={}.hasOwnProperty;function Jt(t){let e={},n=-1;for(;++n<t.length;)Jr(e,t[n]);return e}function Jr(t,e){let n;for(n in e){let i=(De.call(t,n)?t[n]:void 0)||(t[n]={}),a=e[n],o;if(a)for(o in a){De.call(i,o)||(i[o]=[]);let u=a[o];ti(i[o],Array.isArray(u)?u:u?[u]:[])}}}function ti(t,e){let n=-1,r=[];for(;++n<e.length;)(e[n].add==="after"?t:r).push(e[n]);Q(t,0,0,r)}function tn(t,e){let n=Number.parseInt(t,e);return n<9||n===11||n>13&&n<32||n>126&&n<160||n>55295&&n<57344||n>64975&&n<65008||(n&65535)===65535||(n&65535)===65534||n>1114111?"\uFFFD":String.fromCodePoint(n)}function Y(t){return t.replace(/[\t\n\r ]+/g," ").replace(/^ | $/g,"").toLowerCase().toUpperCase()}var U=xt(/[A-Za-z]/),$=xt(/[\dA-Za-z]/),Pe=xt(/[#-'*+\--9=?A-Z^-~]/);function wt(t){return t!==null&&(t<32||t===127)}var Ht=xt(/\d/),Re=xt(/[\dA-Fa-f]/),_e=xt(/[!-/:-@[-`{-~]/);function E(t){return t!==null&&t<-2}function O(t){return t!==null&&(t<0||t===32)}function A(t){return t===-2||t===-1||t===32}var yt=xt(/\p{P}|\p{S}/u),at=xt(/\s/);function xt(t){return e;function e(n){return n!==null&&n>-1&&t.test(String.fromCharCode(n))}}function M(t,e,n,r){let i=r?r-1:1/0,a=0;return o;function o(s){return A(s)?(t.enter(n),u(s)):e(s)}function u(s){return A(s)&&a++<i?(t.consume(s),u):(t.exit(n),e(s))}}function In(t,e,n,r,i,a){let o=0;return u;function u(l){return a>0&&A(l)?(t.enter(r),s(l)):f(l)}function s(l){return A(l)&&o<a?(t.consume(l),o++,s):(t.exit(r),f(l))}function f(l){return o>=i?e(l):n(l)}}var Oe={tokenize:ni};function ni(t){let e=t.attempt(this.parser.constructs.contentInitial,r,i),n;return e;function r(u){if(u===null){t.consume(u);return}return t.enter("lineEnding"),t.consume(u),t.exit("lineEnding"),M(t,e,"linePrefix")}function i(u){return t.enter("paragraph"),a(u)}function a(u){let s=t.enter("chunkText",{contentType:"text",previous:n});return n&&(n.next=s),n=s,o(u)}function o(u){if(u===null){t.exit("chunkText"),t.exit("paragraph"),t.consume(u);return}return E(u)?(t.consume(u),t.exit("chunkText"),a):(t.consume(u),o)}}var pt=class{constructor(){this.index=new Map,this.map=[]}add(e,n,r){Be(this,e,n,r,!1)}addBefore(e,n,r){Be(this,e,n,r,!0)}consume(e){if(this.map.sort(function(a,o){return a[0]-o[0]}),this.map.length===0)return;let n=this.map.length,r=[];for(;n>0;)n-=1,r.push(e.slice(this.map[n][0]+this.map[n][1]),this.map[n][2]),e.length=this.map[n][0];r.push(e.slice()),e.length=0;let i=r.pop();for(;i;){for(let a of i)e.push(a);i=r.pop()}this.map.length=0,this.index.clear()}};function Be(t,e,n,r,i){if(n===0&&r.length===0)return;let a=t.index.get(e);if(a){a[1]+=n,i?(r.push(...a[2]),a[2]=r):a[2].push(...r);return}let o=[e,n,r];t.map.push(o),t.index.set(e,o)}var ve={tokenize:ei},Ne={tokenize:ri};function ei(t){let e=this,n=[],r=0,i,a,o;return u;function u(C){if(r<n.length){let P=n[r];return e.containerState=P[1],t.attempt(P[0].continuation,s,f)(C)}return f(C)}function s(C){if(r++,e.containerState._closeFlow){e.containerState._closeFlow=void 0,i&&S();let P=e.events.length,L=P,b;for(;L--;)if(e.events[L][0]==="exit"&&e.events[L][1].type==="chunkFlow"){b=e.events[L][1].end;break}w(r);let T=P;for(;T<e.events.length;)e.events[T][1].end={...b},T++;let N=new pt;return N.add(L+1,0,e.events.slice(P)),N.add(P,T-P,[]),N.consume(e.events),f(C)}return u(C)}function f(C){if(r===n.length){if(!i)return m(C);if(i.currentConstruct&&i.currentConstruct.concrete)return x(C);e.interrupt=!!(i.currentConstruct&&!i._gfmTableDynamicInterruptHack)}return e.containerState={},t.check(Ne,l,c)(C)}function l(C){return i&&S(),w(r),m(C)}function c(C){return e.parser.lazy[e.now().line]=r!==n.length,o=e.now().offset,x(C)}function m(C){return e.containerState={},t.attempt(Ne,h,x)(C)}function h(C){return r++,n.push([e.currentConstruct,e.containerState]),m(C)}function x(C){if(C===null){i&&S(),w(0),t.consume(C);return}return i=i||e.parser.flow(e.now()),t.enter("chunkFlow",{_tokenizer:i,contentType:"flow",previous:a}),I(C)}function I(C){if(C===null){y(t.exit("chunkFlow"),!0),w(0),t.consume(C);return}return E(C)?(t.consume(C),y(t.exit("chunkFlow")),r=0,e.interrupt=void 0,u):(t.consume(C),I)}function y(C,P){let L=e.sliceStream(C);if(P&&L.push(null),C.previous=a,a&&(a.next=C),a=C,i.defineSkip(C.start),i.write(L),e.parser.lazy[C.start.line]){let b=i.events.length;for(;b--;)if(i.events[b][1].start.offset<o&&(!i.events[b][1].end||i.events[b][1].end.offset>o))return;let T=e.events.length,N=T,v,d;for(;N--;)if(e.events[N][0]==="exit"&&e.events[N][1].type==="chunkFlow"){if(v){d=e.events[N][1].end;break}v=!0}for(w(r),b=T;b<e.events.length;)e.events[b][1].end={...d},b++;let q=new pt;q.add(N+1,0,e.events.slice(T)),q.add(T,b-T,[]),q.consume(e.events)}}function w(C){let P=n.length;for(;P-- >C;){let L=n[P];e.containerState=L[1],L[0].exit.call(e,t)}n.length=C}function S(){i.write([null]),a=void 0,i=void 0,e.containerState._closeFlow=void 0}}function ri(t,e,n){return M(t,t.attempt(this.parser.constructs.document,e,n),"linePrefix",this.parser.constructs.disable.null.includes("codeIndented")?void 0:4)}function Dt(t){if(t===null||O(t)||at(t))return 1;if(yt(t))return 2}function dt(t,e,n){let r=[],i=-1;for(;++i<t.length;){let a=t[i].resolveAll;a&&!r.includes(a)&&(e=a(e,n),r.push(a))}return e}var Vt={name:"attention",resolveAll:ii,tokenize:oi};function ii(t,e){let n=-1,r;for(;++n<t.length;)if(t[n][0]==="enter"&&t[n][1].type==="attentionSequence"&&t[n][1]._close){let i=n;for(;i--;)if(t[i][0]==="exit"&&t[i][1].type==="attentionSequence"&&t[i][1]._open&&e.sliceSerialize(t[i][1]).charCodeAt(0)===e.sliceSerialize(t[n][1]).charCodeAt(0)){if((t[i][1]._close||t[n][1]._open)&&(t[n][1].end.offset-t[n][1].start.offset)%3&&!((t[i][1].end.offset-t[i][1].start.offset+t[n][1].end.offset-t[n][1].start.offset)%3))continue;let a=t[i][1].end.offset-t[i][1].start.offset>1&&t[n][1].end.offset-t[n][1].start.offset>1?2:1,o={...t[i][1].end},u={...t[n][1].start};qe(o,-a),qe(u,a);let s={type:a>1?"strongSequence":"emphasisSequence",start:o,end:{...t[i][1].end}},f={type:a>1?"strongSequence":"emphasisSequence",start:{...t[n][1].start},end:u},l={type:a>1?"strongText":"emphasisText",start:{...t[i][1].end},end:{...t[n][1].start}},c={type:a>1?"strong":"emphasis",start:{...s.start},end:{...f.end}};t[i][1].end={...s.start},t[n][1].start={...f.end},r=[],t[i][1].end.offset-t[i][1].start.offset&&(r=X(r,[["enter",t[i][1],e],["exit",t[i][1],e]])),r=X(r,[["enter",c,e],["enter",s,e],["exit",s,e],["enter",l,e]]),r=X(r,dt(e.parser.constructs.insideSpan.null,t.slice(i+1,n),e)),r=X(r,[["exit",l,e],["enter",f,e],["exit",f,e],["exit",c,e]]);let m=0;t[n][1].end.offset-t[n][1].start.offset&&(m=2,r=X(r,[["enter",t[n][1],e],["exit",t[n][1],e]])),Q(t,i-1,n-i+3,r),n=i+r.length-m-2;break}}for(n=-1;++n<t.length;)t[n][1].type==="attentionSequence"&&(t[n][1].type="data");return t}function oi(t,e){let n=this.parser.constructs.attentionMarkers.null,r=this.previous,i=Dt(r),a;return o;function o(s){return a=s,t.enter("attentionSequence"),u(s)}function u(s){if(s===a)return t.consume(s),u;let f=t.exit("attentionSequence"),l=Dt(s),c=!l||l===2&&i||n.includes(s)&&s!==42&&s!==95,m=!i||i===2&&l||n.includes(r)&&r!==42&&r!==95;return f._open=!!(a===42?c:c&&(i||!m)),f._close=!!(a===42?m:m&&(l||!c)),e(s)}}function qe(t,e){t.column+=e,t.offset+=e,t._bufferIndex+=e}var An={name:"autolink",tokenize:ai};function ai(t,e,n){let r=0;return i;function i(h){return t.enter("autolink"),t.enter("autolinkMarker"),t.consume(h),t.exit("autolinkMarker"),t.enter("autolinkProtocol"),a}function a(h){return U(h)?(t.consume(h),o):h===64?n(h):f(h)}function o(h){return h===43||h===45||h===46||$(h)?(r=1,u(h)):f(h)}function u(h){return h===58?(t.consume(h),r=0,s):(h===43||h===45||h===46||$(h))&&r++<32?(t.consume(h),u):(r=0,f(h))}function s(h){return h===62?(t.exit("autolinkProtocol"),t.enter("autolinkMarker"),t.consume(h),t.exit("autolinkMarker"),t.exit("autolink"),e):h===null||h===32||h===60||wt(h)?n(h):(t.consume(h),s)}function f(h){return h===64?(t.consume(h),l):Pe(h)?(t.consume(h),f):n(h)}function l(h){return $(h)?c(h):n(h)}function c(h){return h===46?(t.consume(h),r=0,l):h===62?(t.exit("autolinkProtocol").type="autolinkEmail",t.enter("autolinkMarker"),t.consume(h),t.exit("autolinkMarker"),t.exit("autolink"),e):m(h)}function m(h){if((h===45||$(h))&&r++<63){let x=h===45?m:c;return t.consume(h),x}return n(h)}}var ut={partial:!0,tokenize:ui};function ui(t,e,n){return r;function r(a){return A(a)?M(t,i,"linePrefix")(a):i(a)}function i(a){return a===null||E(a)?e(a):n(a)}}var nn={continuation:{tokenize:si},exit:ci,name:"blockQuote",tokenize:li};function li(t,e,n){let r=this;return i;function i(o){if(o===62){let u=r.containerState;return u.open||(t.enter("blockQuote",{_container:!0}),u.open=!0),t.enter("blockQuotePrefix"),t.enter("blockQuoteMarker"),t.consume(o),t.exit("blockQuoteMarker"),a}return n(o)}function a(o){return A(o)?(t.enter("blockQuotePrefixWhitespace"),t.consume(o),t.exit("blockQuotePrefixWhitespace"),t.exit("blockQuotePrefix"),e):(t.exit("blockQuotePrefix"),e(o))}}function si(t,e,n){let r=this;return i;function i(o){return A(o)?M(t,a,"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(o):a(o)}function a(o){return t.attempt(nn,e,n)(o)}}function ci(t){t.exit("blockQuote")}var en={name:"characterEscape",tokenize:fi};function fi(t,e,n){return r;function r(a){return t.enter("characterEscape"),t.enter("escapeMarker"),t.consume(a),t.exit("escapeMarker"),i}function i(a){return _e(a)?(t.enter("characterEscapeValue"),t.consume(a),t.exit("characterEscapeValue"),t.exit("characterEscape"),e):n(a)}}var rn={name:"characterReference",tokenize:hi};function hi(t,e,n){let r=this,i=0,a,o;return u;function u(c){return t.enter("characterReference"),t.enter("characterReferenceMarker"),t.consume(c),t.exit("characterReferenceMarker"),s}function s(c){return c===35?(t.enter("characterReferenceMarkerNumeric"),t.consume(c),t.exit("characterReferenceMarkerNumeric"),f):(t.enter("characterReferenceValue"),a=31,o=$,l(c))}function f(c){return c===88||c===120?(t.enter("characterReferenceMarkerHexadecimal"),t.consume(c),t.exit("characterReferenceMarkerHexadecimal"),t.enter("characterReferenceValue"),a=6,o=Re,l):(t.enter("characterReferenceValue"),a=7,o=Ht,l(c))}function l(c){if(c===59&&i){let m=t.exit("characterReferenceValue");return o===$&&!Lt(r.sliceSerialize(m))?n(c):(t.enter("characterReferenceMarker"),t.consume(c),t.exit("characterReferenceMarker"),t.exit("characterReference"),e)}return o(c)&&i++<a?(t.consume(c),l):n(c)}}var jt={partial:!0,tokenize:mi};function mi(t,e,n){let r=this;return i;function i(o){return o===null?n(o):(t.enter("lineEnding"),t.consume(o),t.exit("lineEnding"),a)}function a(o){return r.parser.lazy[r.now().line]?n(o):e(o)}}var on={concrete:!0,name:"codeFenced",tokenize:pi};function pi(t,e,n){let r=this,i={partial:!0,tokenize:L},a=0,o=0,u;return s;function s(b){return f(b)}function f(b){let T=r.events[r.events.length-1];return a=T&&T[1].type==="linePrefix"?T[2].sliceSerialize(T[1],!0).length:0,u=b,t.enter("codeFenced"),t.enter("codeFencedFence"),t.enter("codeFencedFenceSequence"),l(b)}function l(b){return b===u?(o++,t.consume(b),l):o<3?n(b):(t.exit("codeFencedFenceSequence"),A(b)?M(t,c,"whitespace")(b):c(b))}function c(b){return b===null||E(b)?(t.exit("codeFencedFence"),r.interrupt?e(b):t.check(jt,I,P)(b)):(t.enter("codeFencedFenceInfo"),t.enter("chunkString",{contentType:"string"}),m(b))}function m(b){return b===null||E(b)?(t.exit("chunkString"),t.exit("codeFencedFenceInfo"),c(b)):A(b)?(t.exit("chunkString"),t.exit("codeFencedFenceInfo"),M(t,h,"whitespace")(b)):b===96&&b===u?n(b):(t.consume(b),m)}function h(b){return b===null||E(b)?c(b):(t.enter("codeFencedFenceMeta"),t.enter("chunkString",{contentType:"string"}),x(b))}function x(b){return b===null||E(b)?(t.exit("chunkString"),t.exit("codeFencedFenceMeta"),c(b)):b===96&&b===u?n(b):(t.consume(b),x)}function I(b){return t.attempt(i,P,y)(b)}function y(b){return t.enter("lineEnding"),t.consume(b),t.exit("lineEnding"),w}function w(b){return a>0&&A(b)?M(t,S,"linePrefix",a+1)(b):S(b)}function S(b){return b===null||E(b)?t.check(jt,I,P)(b):(t.enter("codeFlowValue"),C(b))}function C(b){return b===null||E(b)?(t.exit("codeFlowValue"),S(b)):(t.consume(b),C)}function P(b){return t.exit("codeFenced"),e(b)}function L(b,T,N){let v=0;return d;function d(_){return b.enter("lineEnding"),b.consume(_),b.exit("lineEnding"),q}function q(_){return b.enter("codeFencedFence"),A(_)?M(b,H,"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(_):H(_)}function H(_){return _===u?(b.enter("codeFencedFenceSequence"),z(_)):N(_)}function z(_){return _===u?(v++,b.consume(_),z):v>=o?(b.exit("codeFencedFenceSequence"),A(_)?M(b,B,"whitespace")(_):B(_)):N(_)}function B(_){return _===null||E(_)?(b.exit("codeFencedFence"),T(_)):N(_)}}}var Wt={name:"codeIndented",tokenize:xi},gi={partial:!0,tokenize:di};function xi(t,e,n){return r;function r(u){return t.enter("codeIndented"),In(t,i,n,"linePrefix",4,4)(u)}function i(u){return u===null?o(u):E(u)?t.attempt(gi,i,o)(u):(t.enter("codeFlowValue"),a(u))}function a(u){return u===null||E(u)?(t.exit("codeFlowValue"),i(u)):(t.consume(u),a)}function o(u){return t.exit("codeIndented"),e(u)}}function di(t,e,n){let r=this;return i;function i(o){return r.parser.lazy[r.now().line]?n(o):E(o)?(t.enter("lineEnding"),t.consume(o),t.exit("lineEnding"),i):In(t,e,a,"linePrefix",4,4)(o)}function a(o){return E(o)?i(o):n(o)}}var zn={name:"codeText",previous:bi,resolve:ki,tokenize:wi};function ki(t){let e=t.length-4,n=3,r,i;if((t[n][1].type==="lineEnding"||t[n][1].type==="space")&&(t[e][1].type==="lineEnding"||t[e][1].type==="space")){for(r=n;++r<e;)if(t[r][1].type==="codeTextData"){t[n][1].type="codeTextPadding",t[e][1].type="codeTextPadding",n+=2,e-=2;break}}for(r=n-1,e++;++r<=e;)i===void 0?r!==e&&t[r][1].type!=="lineEnding"&&(i=r):(r===e||t[r][1].type==="lineEnding")&&(t[i][1].type="codeTextData",r!==i+2&&(t[i][1].end=t[r-1][1].end,t.splice(i+2,r-i-2),e-=r-i-2,r=i+2),i=void 0);return t}function bi(t){return t!==96||this.events[this.events.length-1][1].type==="characterEscape"}function wi(t,e,n){let r=this,i=0,a,o;return u;function u(m){return t.enter("codeText"),t.enter("codeTextSequence"),s(m)}function s(m){return m===96?(t.consume(m),i++,s):(t.exit("codeTextSequence"),f(m))}function f(m){return m===null?n(m):m===32?(t.enter("space"),t.consume(m),t.exit("space"),f):m===96?(o=t.enter("codeTextSequence"),a=0,c(m)):E(m)?(t.enter("lineEnding"),t.consume(m),t.exit("lineEnding"),f):(t.enter("codeTextData"),l(m))}function l(m){return m===null||m===32||m===96||E(m)?(t.exit("codeTextData"),f(m)):(t.consume(m),l)}function c(m){return m===96?(t.consume(m),a++,c):a===i?(t.exit("codeTextSequence"),t.exit("codeText"),e(m)):(o.type="codeTextData",l(m))}}var an=class{constructor(e){this.left=e?[...e]:[],this.right=[]}get(e){if(e<0||e>=this.left.length+this.right.length)throw new RangeError("Cannot access index `"+e+"` in a splice buffer of size `"+(this.left.length+this.right.length)+"`");return e<this.left.length?this.left[e]:this.right[this.right.length-e+this.left.length-1]}get length(){return this.left.length+this.right.length}shift(){return this.setCursor(0),this.right.pop()}slice(e,n){let r=n??Number.POSITIVE_INFINITY;return r<this.left.length?this.left.slice(e,r):e>this.left.length?this.right.slice(this.right.length-r+this.left.length,this.right.length-e+this.left.length).reverse():this.left.slice(e).concat(this.right.slice(this.right.length-r+this.left.length).reverse())}splice(e,n,r){let i=n||0;this.setCursor(Math.trunc(e));let a=this.right.splice(this.right.length-i,Number.POSITIVE_INFINITY);return r&&Ut(this.left,r),a.reverse()}pop(){return this.setCursor(Number.POSITIVE_INFINITY),this.left.pop()}push(e){this.setCursor(Number.POSITIVE_INFINITY),this.left.push(e)}pushMany(e){this.setCursor(Number.POSITIVE_INFINITY),Ut(this.left,e)}unshift(e){this.setCursor(0),this.right.push(e)}unshiftMany(e){this.setCursor(0),Ut(this.right,e.reverse())}setCursor(e){if(!(e===this.left.length||e>this.left.length&&this.right.length===0||e<0&&this.left.length===0))if(e<this.left.length){let n=this.left.splice(e,Number.POSITIVE_INFINITY);Ut(this.right,n.reverse())}else{let n=this.right.splice(this.left.length+this.right.length-e,Number.POSITIVE_INFINITY);Ut(this.left,n.reverse())}}};function Ut(t,e){let n=0;if(e.length<1e4)t.push(...e);else for(;n<e.length;)t.push(...e.slice(n,n+1e4)),n+=1e4}function un(t){let e={},n=-1,r,i,a,o,u,s,f,l=new an(t);for(;++n<l.length;){for(;n in e;)n=e[n];if(r=l.get(n),n&&r[1].type==="chunkFlow"&&l.get(n-1)[1].type==="listItemPrefix"&&(s=r[1]._tokenizer.events,a=0,a<s.length&&s[a][1].type==="lineEndingBlank"&&(a+=2),a<s.length&&s[a][1].type==="content"))for(;++a<s.length&&s[a][1].type!=="content";)s[a][1].type==="chunkText"&&(s[a][1]._isInFirstContentOfListItem=!0,a++);if(r[0]==="enter")r[1].contentType&&(Object.assign(e,yi(l,n)),n=e[n],f=!0);else if(r[1]._container){for(a=n,i=void 0;a--;)if(o=l.get(a),o[1].type==="lineEnding"||o[1].type==="lineEndingBlank")o[0]==="enter"&&(i&&(l.get(i)[1].type="lineEndingBlank"),o[1].type="lineEnding",i=a);else if(!(o[1].type==="linePrefix"||o[1].type==="listItemIndent"))break;i&&(r[1].end={...l.get(i)[1].start},u=l.slice(i,n),u.unshift(r),l.splice(i,n-i+1,u))}}return Q(t,0,Number.POSITIVE_INFINITY,l.slice(0)),!f}function yi(t,e){let n=t.get(e)[1],r=t.get(e)[2],i=e-1,a=[],o=n._tokenizer;o||(o=r.parser[n.contentType](n.start),n._contentTypeTextTrailing&&(o._contentTypeTextTrailing=!0));let u=o.events,s=[],f={},l,c,m=-1,h=n,x=0,I=0,y=[I];for(;h;){for(;t.get(++i)[1]!==h;);a.push(i),h._tokenizer||(l=r.sliceStream(h),h.next||l.push(null),c&&o.defineSkip(h.start),h._isInFirstContentOfListItem&&(o._gfmTasklistFirstContentOfListItem=!0),o.write(l),h._isInFirstContentOfListItem&&(o._gfmTasklistFirstContentOfListItem=void 0)),c=h,h=h.next}for(h=n;++m<u.length;)u[m][0]==="exit"&&u[m-1][0]==="enter"&&u[m][1].type===u[m-1][1].type&&u[m][1].start.line!==u[m][1].end.line&&(I=m+1,y.push(I),h._tokenizer=void 0,h.previous=void 0,h=h.next);for(o.events=[],h?(h._tokenizer=void 0,h.previous=void 0):y.pop(),m=y.length;m--;){let w=u.slice(y[m],y[m+1]),S=a.pop();s.push([S,S+w.length-1]),t.splice(S,2,w)}for(s.reverse(),m=-1;++m<s.length;)f[x+s[m][0]]=x+s[m][1],x+=s[m][1]-s[m][0]-1;return f}var Mn={resolve:Ci,tokenize:Ei},Si={partial:!0,tokenize:Fi};function Ci(t){return un(t),t}function Ei(t,e){let n;return r;function r(u){return t.enter("content"),n=t.enter("chunkContent",{contentType:"content"}),i(u)}function i(u){return u===null?a(u):E(u)?t.check(Si,o,a)(u):(t.consume(u),i)}function a(u){return t.exit("chunkContent"),t.exit("content"),e(u)}function o(u){return t.consume(u),t.exit("chunkContent"),n.next=t.enter("chunkContent",{contentType:"content",previous:n}),n=n.next,i}}function Fi(t,e,n){let r=this;return i;function i(o){return t.exit("chunkContent"),t.enter("lineEnding"),t.consume(o),t.exit("lineEnding"),M(t,a,"linePrefix")}function a(o){if(o===null||E(o))return n(o);let u=r.events[r.events.length-1];return!r.parser.constructs.disable.null.includes("codeIndented")&&u&&u[1].type==="linePrefix"&&u[2].sliceSerialize(u[1],!0).length>=4?e(o):t.interrupt(r.parser.constructs.flow,n,e)(o)}}function ln(t,e,n,r,i,a,o,u,s){let f=s||Number.POSITIVE_INFINITY,l=0;return c;function c(w){return w===60?(t.enter(r),t.enter(i),t.enter(a),t.consume(w),t.exit(a),m):w===null||w===32||w===41||wt(w)?n(w):(t.enter(r),t.enter(o),t.enter(u),t.enter("chunkString",{contentType:"string"}),I(w))}function m(w){return w===62?(t.enter(a),t.consume(w),t.exit(a),t.exit(i),t.exit(r),e):(t.enter(u),t.enter("chunkString",{contentType:"string"}),h(w))}function h(w){return w===62?(t.exit("chunkString"),t.exit(u),m(w)):w===null||w===60||E(w)?n(w):(t.consume(w),w===92?x:h)}function x(w){return w===60||w===62||w===92?(t.consume(w),h):h(w)}function I(w){return!l&&(w===null||w===41||O(w))?(t.exit("chunkString"),t.exit(u),t.exit(o),t.exit(r),e(w)):l<f&&w===40?(t.consume(w),l++,I):w===41?(t.consume(w),l--,I):w===null||w===32||w===40||wt(w)?n(w):(t.consume(w),w===92?y:I)}function y(w){return w===40||w===41||w===92?(t.consume(w),I):I(w)}}function sn(t,e,n,r,i,a){let o=this,u=0,s;return f;function f(h){return t.enter(r),t.enter(i),t.consume(h),t.exit(i),t.enter(a),l}function l(h){return u>999||h===null||h===91||h===93&&!s||h===94&&!u&&"_hiddenFootnoteSupport"in o.parser.constructs?n(h):h===93?(t.exit(a),t.enter(i),t.consume(h),t.exit(i),t.exit(r),e):E(h)?(t.enter("lineEnding"),t.consume(h),t.exit("lineEnding"),l):(t.enter("chunkString",{contentType:"string"}),c(h))}function c(h){return h===null||h===91||h===93||E(h)||u++>999?(t.exit("chunkString"),l(h)):(t.consume(h),s||(s=!A(h)),h===92?m:c)}function m(h){return h===91||h===92||h===93?(t.consume(h),u++,c):c(h)}}function cn(t,e,n,r,i,a){let o;return u;function u(m){return m===34||m===39||m===40?(t.enter(r),t.enter(i),t.consume(m),t.exit(i),o=m===40?41:m,s):n(m)}function s(m){return m===o?(t.enter(i),t.consume(m),t.exit(i),t.exit(r),e):(t.enter(a),f(m))}function f(m){return m===o?(t.exit(a),s(o)):m===null?n(m):E(m)?(t.enter("lineEnding"),t.consume(m),t.exit("lineEnding"),M(t,f,"linePrefix")):(t.enter("chunkString",{contentType:"string"}),l(m))}function l(m){return m===o||m===null||E(m)?(t.exit("chunkString"),f(m)):(t.consume(m),m===92?c:l)}function c(m){return m===o||m===92?(t.consume(m),l):l(m)}}function St(t,e){let n;return r;function r(i){return E(i)?(t.enter("lineEnding"),t.consume(i),t.exit("lineEnding"),n=!0,r):A(i)?M(t,r,n?"linePrefix":"lineSuffix")(i):e(i)}}var Ln={name:"definition",tokenize:Ii},Ti={partial:!0,tokenize:Ai};function Ii(t,e,n){let r=this,i;return a;function a(h){return t.enter("definition"),o(h)}function o(h){return sn.call(r,t,u,n,"definitionLabel","definitionLabelMarker","definitionLabelString")(h)}function u(h){return i=Y(r.sliceSerialize(r.events[r.events.length-1][1]).slice(1,-1)),h===58?(t.enter("definitionMarker"),t.consume(h),t.exit("definitionMarker"),s):n(h)}function s(h){return O(h)?St(t,f)(h):f(h)}function f(h){return ln(t,l,n,"definitionDestination","definitionDestinationLiteral","definitionDestinationLiteralMarker","definitionDestinationRaw","definitionDestinationString")(h)}function l(h){return t.attempt(Ti,c,c)(h)}function c(h){return A(h)?M(t,m,"whitespace")(h):m(h)}function m(h){return h===null||E(h)?(t.exit("definition"),r.parser.defined.push(i),e(h)):n(h)}}function Ai(t,e,n){return r;function r(u){return O(u)?St(t,i)(u):n(u)}function i(u){return cn(t,a,n,"definitionTitle","definitionTitleMarker","definitionTitleString")(u)}function a(u){return A(u)?M(t,o,"whitespace")(u):o(u)}function o(u){return u===null||E(u)?e(u):n(u)}}var Dn={name:"hardBreakEscape",tokenize:zi};function zi(t,e,n){return r;function r(a){return t.enter("hardBreakEscape"),t.consume(a),i}function i(a){return E(a)?(t.exit("hardBreakEscape"),e(a)):n(a)}}var Pn={name:"headingAtx",resolve:Mi,tokenize:Li};function Mi(t,e){let n=t.length-2,r=3;if(t[r][1].type==="whitespace"&&(r+=2),n-2>r&&t[n][1].type==="whitespace"&&(n-=2),t[n][1].type==="atxHeadingSequence"&&(r===n-1||n-4>r&&t[n-2][1].type==="whitespace")&&(n-=r+1===n?2:4),n>r){let i={type:"atxHeadingText",start:t[r][1].start,end:t[n][1].end},a={type:"chunkText",start:t[r][1].start,end:t[n][1].end,contentType:"text"};Q(t,r,n-r+1,[["enter",i,e],["enter",a,e],["exit",a,e],["exit",i,e]])}return t}function Li(t,e,n){let r=0;return i;function i(l){return t.enter("atxHeading"),a(l)}function a(l){return t.enter("atxHeadingSequence"),o(l)}function o(l){return l===35&&r++<6?(t.consume(l),o):l===null||O(l)?(t.exit("atxHeadingSequence"),u(l)):n(l)}function u(l){return l===35?(t.enter("atxHeadingSequence"),s(l)):l===null||E(l)?(t.exit("atxHeading"),e(l)):A(l)?M(t,u,"whitespace")(l):(t.enter("atxHeadingText"),f(l))}function s(l){return l===35?(t.consume(l),s):(t.exit("atxHeadingSequence"),u(l))}function f(l){return l===null||l===35||O(l)?(t.exit("atxHeadingText"),u(l)):(t.consume(l),f)}}var He=["address","article","aside","base","basefont","blockquote","body","caption","center","col","colgroup","dd","details","dialog","dir","div","dl","dt","fieldset","figcaption","figure","footer","form","frame","frameset","h1","h2","h3","h4","h5","h6","head","header","hr","html","iframe","legend","li","link","main","menu","menuitem","nav","noframes","ol","optgroup","option","p","param","search","section","summary","table","tbody","td","tfoot","th","thead","title","tr","track","ul"],Rn=["pre","script","style","textarea"];var _n={concrete:!0,name:"htmlFlow",resolveTo:Pi,tokenize:Ri},Di={partial:!0,tokenize:_i};function Pi(t){let e=t.length;for(;e--&&!(t[e][0]==="enter"&&t[e][1].type==="htmlFlow"););return e>1&&t[e-2][1].type==="linePrefix"&&(t[e][1].start=t[e-2][1].start,t[e+1][1].start=t[e-2][1].start,t.splice(e-2,2)),t}function Ri(t,e,n){let r=this,i,a,o,u,s;return f;function f(g){return l(g)}function l(g){return t.enter("htmlFlow"),t.enter("htmlFlowData"),t.consume(g),c}function c(g){return g===33?(t.consume(g),m):g===47?(t.consume(g),a=!0,I):g===63?(t.consume(g),i=3,r.interrupt?e:p):U(g)?(t.consume(g),o=String.fromCharCode(g),y):n(g)}function m(g){return g===45?(t.consume(g),i=2,h):g===91?(t.consume(g),i=5,u=0,x):U(g)?(t.consume(g),i=4,r.interrupt?e:p):n(g)}function h(g){return g===45?(t.consume(g),r.interrupt?e:p):n(g)}function x(g){let tt="CDATA[";return g===tt.charCodeAt(u++)?(t.consume(g),u===tt.length?r.interrupt?e:H:x):n(g)}function I(g){return U(g)?(t.consume(g),o=String.fromCharCode(g),y):n(g)}function y(g){if(g===null||g===47||g===62||O(g)){let tt=g===47,At=o.toLowerCase();return!tt&&!a&&Rn.includes(At)?(i=1,r.interrupt?e(g):H(g)):He.includes(o.toLowerCase())?(i=6,tt?(t.consume(g),w):r.interrupt?e(g):H(g)):(i=7,r.interrupt&&!r.parser.lazy[r.now().line]?n(g):a?S(g):C(g))}return g===45||$(g)?(t.consume(g),o+=String.fromCharCode(g),y):n(g)}function w(g){return g===62?(t.consume(g),r.interrupt?e:H):n(g)}function S(g){return A(g)?(t.consume(g),S):d(g)}function C(g){return g===47?(t.consume(g),d):g===58||g===95||U(g)?(t.consume(g),P):A(g)?(t.consume(g),C):d(g)}function P(g){return g===45||g===46||g===58||g===95||$(g)?(t.consume(g),P):L(g)}function L(g){return g===61?(t.consume(g),b):A(g)?(t.consume(g),L):C(g)}function b(g){return g===null||g===60||g===61||g===62||g===96?n(g):g===34||g===39?(t.consume(g),s=g,T):A(g)?(t.consume(g),b):N(g)}function T(g){return g===s?(t.consume(g),s=null,v):g===null||E(g)?n(g):(t.consume(g),T)}function N(g){return g===null||g===34||g===39||g===47||g===60||g===61||g===62||g===96||O(g)?L(g):(t.consume(g),N)}function v(g){return g===47||g===62||A(g)?C(g):n(g)}function d(g){return g===62?(t.consume(g),q):n(g)}function q(g){return g===null||E(g)?H(g):A(g)?(t.consume(g),q):n(g)}function H(g){return g===45&&i===2?(t.consume(g),j):g===60&&i===1?(t.consume(g),W):g===62&&i===4?(t.consume(g),et):g===63&&i===3?(t.consume(g),p):g===93&&i===5?(t.consume(g),it):E(g)&&(i===6||i===7)?(t.exit("htmlFlowData"),t.check(Di,ft,z)(g)):g===null||E(g)?(t.exit("htmlFlowData"),z(g)):(t.consume(g),H)}function z(g){return t.check(jt,B,ft)(g)}function B(g){return t.enter("lineEnding"),t.consume(g),t.exit("lineEnding"),_}function _(g){return g===null||E(g)?z(g):(t.enter("htmlFlowData"),H(g))}function j(g){return g===45?(t.consume(g),p):H(g)}function W(g){return g===47?(t.consume(g),o="",rt):H(g)}function rt(g){if(g===62){let tt=o.toLowerCase();return Rn.includes(tt)?(t.consume(g),et):H(g)}return U(g)&&o.length<8?(t.consume(g),o+=String.fromCharCode(g),rt):H(g)}function it(g){return g===93?(t.consume(g),p):H(g)}function p(g){return g===62?(t.consume(g),et):g===45&&i===2?(t.consume(g),p):H(g)}function et(g){return g===null||E(g)?(t.exit("htmlFlowData"),ft(g)):(t.consume(g),et)}function ft(g){return t.exit("htmlFlow"),e(g)}}function _i(t,e,n){return r;function r(i){return t.enter("lineEnding"),t.consume(i),t.exit("lineEnding"),t.attempt(ut,e,n)}}var On={name:"htmlText",tokenize:Oi};function Oi(t,e,n){let r=this,i,a,o;return u;function u(p){return t.enter("htmlText"),t.enter("htmlTextData"),t.consume(p),s}function s(p){return p===33?(t.consume(p),f):p===47?(t.consume(p),L):p===63?(t.consume(p),C):U(p)?(t.consume(p),N):n(p)}function f(p){return p===45?(t.consume(p),l):p===91?(t.consume(p),a=0,x):U(p)?(t.consume(p),S):n(p)}function l(p){return p===45?(t.consume(p),h):n(p)}function c(p){return p===null?n(p):p===45?(t.consume(p),m):E(p)?(o=c,W(p)):(t.consume(p),c)}function m(p){return p===45?(t.consume(p),h):c(p)}function h(p){return p===62?j(p):p===45?m(p):c(p)}function x(p){let et="CDATA[";return p===et.charCodeAt(a++)?(t.consume(p),a===et.length?I:x):n(p)}function I(p){return p===null?n(p):p===93?(t.consume(p),y):E(p)?(o=I,W(p)):(t.consume(p),I)}function y(p){return p===93?(t.consume(p),w):I(p)}function w(p){return p===62?j(p):p===93?(t.consume(p),w):I(p)}function S(p){return p===null||p===62?j(p):E(p)?(o=S,W(p)):(t.consume(p),S)}function C(p){return p===null?n(p):p===63?(t.consume(p),P):E(p)?(o=C,W(p)):(t.consume(p),C)}function P(p){return p===62?j(p):C(p)}function L(p){return U(p)?(t.consume(p),b):n(p)}function b(p){return p===45||$(p)?(t.consume(p),b):T(p)}function T(p){return E(p)?(o=T,W(p)):A(p)?(t.consume(p),T):j(p)}function N(p){return p===45||$(p)?(t.consume(p),N):p===47||p===62||O(p)?v(p):n(p)}function v(p){return p===47?(t.consume(p),j):p===58||p===95||U(p)?(t.consume(p),d):E(p)?(o=v,W(p)):A(p)?(t.consume(p),v):j(p)}function d(p){return p===45||p===46||p===58||p===95||$(p)?(t.consume(p),d):q(p)}function q(p){return p===61?(t.consume(p),H):E(p)?(o=q,W(p)):A(p)?(t.consume(p),q):v(p)}function H(p){return p===null||p===60||p===61||p===62||p===96?n(p):p===34||p===39?(t.consume(p),i=p,z):E(p)?(o=H,W(p)):A(p)?(t.consume(p),H):(t.consume(p),B)}function z(p){return p===i?(t.consume(p),i=void 0,_):p===null?n(p):E(p)?(o=z,W(p)):(t.consume(p),z)}function B(p){return p===null||p===34||p===39||p===60||p===61||p===96?n(p):p===47||p===62||O(p)?v(p):(t.consume(p),B)}function _(p){return p===47||p===62||O(p)?v(p):n(p)}function j(p){return p===62?(t.consume(p),t.exit("htmlTextData"),t.exit("htmlText"),e):n(p)}function W(p){return t.exit("htmlTextData"),t.enter("lineEnding"),t.consume(p),t.exit("lineEnding"),rt}function rt(p){return A(p)?M(t,it,"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(p):it(p)}function it(p){return t.enter("htmlTextData"),o(p)}}var Ct={name:"labelEnd",resolveAll:qi,resolveTo:Hi,tokenize:Vi},Bi={tokenize:ji},Ni={tokenize:Wi},vi={tokenize:Ui};function qi(t){let e=-1,n=[];for(;++e<t.length;){let r=t[e][1];if(n.push(t[e]),r.type==="labelImage"||r.type==="labelLink"||r.type==="labelEnd"){let i=r.type==="labelImage"?4:2;r.type="data",e+=i}}return t.length!==n.length&&Q(t,0,t.length,n),t}function Hi(t,e){let n=t.length,r=0,i,a,o;for(;n--;){let l=t[n][1];if(i){if(l.type==="link"||l.type==="labelLink"&&l._inactive)break;t[n][0]==="enter"&&l.type==="labelLink"&&(l._inactive=!0)}else if(a){if(t[n][0]==="enter"&&(l.type==="labelImage"||l.type==="labelLink")&&!l._balanced&&(i=n,l.type!=="labelLink")){r=2;break}}else l.type==="labelEnd"&&(a=n)}let u={type:t[i][1].type==="labelLink"?"link":"image",start:{...t[i][1].start},end:{...t[t.length-1][1].end}},s={type:"label",start:{...t[i][1].start},end:{...t[a][1].end}},f={type:"labelText",start:{...t[i+r+2][1].end},end:{...t[a-2][1].start}};return o=[["enter",u,e],["enter",s,e]],o=X(o,t.slice(i+1,i+r+3)),o=X(o,[["enter",f,e]]),o=X(o,dt(e.parser.constructs.insideSpan.null,t.slice(i+r+4,a-3),e)),o=X(o,[["exit",f,e],t[a-2],t[a-1],["exit",s,e]]),o=X(o,t.slice(a+1)),o=X(o,[["exit",u,e]]),Q(t,i,t.length,o),t}function Vi(t,e,n){let r=this,i=r._labelStarts,a,o;if(i){for(;i.length>0&&i[i.length-1]._balanced;)i.pop();a=i[i.length-1]}return u;function u(m){return a?a._inactive?c(m):(o=r.parser.defined.includes(Y(r.sliceSerialize({start:a.end,end:r.now()}))),t.enter("labelEnd"),t.enter("labelMarker"),t.consume(m),t.exit("labelMarker"),t.exit("labelEnd"),s):n(m)}function s(m){return m===40?t.attempt(Bi,l,o?l:c)(m):m===91?t.attempt(Ni,l,o?f:c)(m):o?l(m):c(m)}function f(m){return t.attempt(vi,l,c)(m)}function l(m){return i.pop(),e(m)}function c(m){return a._balanced=!0,n(m)}}function ji(t,e,n){return r;function r(c){return t.enter("resource"),t.enter("resourceMarker"),t.consume(c),t.exit("resourceMarker"),i}function i(c){return O(c)?St(t,a)(c):a(c)}function a(c){return c===41?l(c):ln(t,o,u,"resourceDestination","resourceDestinationLiteral","resourceDestinationLiteralMarker","resourceDestinationRaw","resourceDestinationString",32)(c)}function o(c){return O(c)?St(t,s)(c):l(c)}function u(c){return n(c)}function s(c){return c===34||c===39||c===40?cn(t,f,n,"resourceTitle","resourceTitleMarker","resourceTitleString")(c):l(c)}function f(c){return O(c)?St(t,l)(c):l(c)}function l(c){return c===41?(t.enter("resourceMarker"),t.consume(c),t.exit("resourceMarker"),t.exit("resource"),e):n(c)}}function Wi(t,e,n){let r=this;return i;function i(u){return sn.call(r,t,a,o,"reference","referenceMarker","referenceString")(u)}function a(u){return r.parser.defined.includes(Y(r.sliceSerialize(r.events[r.events.length-1][1]).slice(1,-1)))?e(u):n(u)}function o(u){return n(u)}}function Ui(t,e,n){return r;function r(a){return t.enter("reference"),t.enter("referenceMarker"),t.consume(a),t.exit("referenceMarker"),i}function i(a){return a===93?(t.enter("referenceMarker"),t.consume(a),t.exit("referenceMarker"),t.exit("reference"),e):n(a)}}var Bn={name:"labelStartImage",resolveAll:Ct.resolveAll,tokenize:$i};function $i(t,e,n){let r=this,i;return a;function a(s){return t.enter("labelImage"),t.enter("labelImageMarker"),t.consume(s),t.exit("labelImageMarker"),o}function o(s){return s===91?(t.enter("labelMarker"),t.consume(s),t.exit("labelMarker"),i=t.exit("labelImage"),u):n(s)}function u(s){return s===94&&"_hiddenFootnoteSupport"in r.parser.constructs?n(s):(r._labelStarts=r._labelStarts||[],r._labelStarts.push(i),e(s))}}var Nn={name:"labelStartLink",resolveAll:Ct.resolveAll,tokenize:Qi};function Qi(t,e,n){let r=this,i;return a;function a(u){return t.enter("labelLink"),t.enter("labelMarker"),t.consume(u),t.exit("labelMarker"),i=t.exit("labelLink"),o}function o(u){return u===94&&"_hiddenFootnoteSupport"in r.parser.constructs?n(u):(r._labelStarts=r._labelStarts||[],r._labelStarts.push(i),e(u))}}var $t={name:"lineEnding",tokenize:Zi};function Zi(t,e){return n;function n(r){return t.enter("lineEnding"),t.consume(r),t.exit("lineEnding"),M(t,e,"linePrefix")}}var Et={name:"thematicBreak",tokenize:Yi};function Yi(t,e,n){let r=0,i;return a;function a(f){return t.enter("thematicBreak"),o(f)}function o(f){return i=f,u(f)}function u(f){return f===i?(t.enter("thematicBreakSequence"),s(f)):r>=3&&(f===null||E(f))?(t.exit("thematicBreak"),e(f)):n(f)}function s(f){return f===i?(t.consume(f),r++,s):(t.exit("thematicBreakSequence"),A(f)?M(t,u,"whitespace")(f):u(f))}}var G={continuation:{tokenize:Ji},exit:no,name:"list",tokenize:Ki},Gi={partial:!0,tokenize:eo},Xi={partial:!0,tokenize:to};function Ki(t,e,n){let r=this,i=r.events[r.events.length-1],a=i&&i[1].type==="linePrefix"?i[2].sliceSerialize(i[1],!0).length:0,o=0;return u;function u(h){let x=r.containerState.type||(h===42||h===43||h===45?"listUnordered":"listOrdered");if(x==="listUnordered"?!r.containerState.marker||h===r.containerState.marker:Ht(h)){if(r.containerState.type||(r.containerState.type=x,t.enter(x,{_container:!0})),x==="listUnordered")return t.enter("listItemPrefix"),h===42||h===45?t.check(Et,n,f)(h):f(h);if(!r.interrupt||h===49)return t.enter("listItemPrefix"),t.enter("listItemValue"),s(h)}return n(h)}function s(h){return Ht(h)&&++o<10?(t.consume(h),s):(!r.interrupt||o<2)&&(r.containerState.marker?h===r.containerState.marker:h===41||h===46)?(t.exit("listItemValue"),f(h)):n(h)}function f(h){return t.enter("listItemMarker"),t.consume(h),t.exit("listItemMarker"),r.containerState.marker=r.containerState.marker||h,t.check(ut,r.interrupt?n:l,t.attempt(Gi,m,c))}function l(h){return r.containerState.initialBlankLine=!0,a++,m(h)}function c(h){return A(h)?(t.enter("listItemPrefixWhitespace"),t.consume(h),t.exit("listItemPrefixWhitespace"),m):n(h)}function m(h){return r.containerState.size=a+r.sliceSerialize(t.exit("listItemPrefix"),!0).length,e(h)}}function Ji(t,e,n){let r=this;return r.containerState._closeFlow=void 0,t.check(ut,i,a);function i(u){return r.containerState.furtherBlankLines=r.containerState.furtherBlankLines||r.containerState.initialBlankLine,M(t,e,"listItemIndent",r.containerState.size+1)(u)}function a(u){return r.containerState.furtherBlankLines||!A(u)?(r.containerState.furtherBlankLines=void 0,r.containerState.initialBlankLine=void 0,o(u)):(r.containerState.furtherBlankLines=void 0,r.containerState.initialBlankLine=void 0,t.attempt(Xi,e,o)(u))}function o(u){return r.containerState._closeFlow=!0,r.interrupt=void 0,M(t,t.attempt(G,e,n),"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(u)}}function to(t,e,n){let r=this;return M(t,i,"listItemIndent",r.containerState.size+1);function i(a){let o=r.events[r.events.length-1];return o&&o[1].type==="listItemIndent"&&o[2].sliceSerialize(o[1],!0).length===r.containerState.size?e(a):n(a)}}function no(t){t.exit(this.containerState.type)}function eo(t,e,n){let r=this;return M(t,i,"listItemPrefixWhitespace",r.parser.constructs.disable.null.includes("codeIndented")?void 0:5);function i(a){let o=r.events[r.events.length-1];return!A(a)&&o&&o[1].type==="listItemPrefixWhitespace"?e(a):n(a)}}var fn={name:"setextUnderline",resolveTo:ro,tokenize:io};function ro(t,e){let n=new pt,r=t.length,i,a,o;for(;r--;)if(t[r][0]==="enter"){if(t[r][1].type==="content"){i=r;break}t[r][1].type==="paragraph"&&(a=r)}else t[r][1].type==="content"&&n.add(r,1,[]),!o&&t[r][1].type==="definition"&&(o=r);let u={type:"setextHeading",start:{...t[i][1].start},end:{...t[t.length-1][1].end}};return t[a][1].type="setextHeadingText",o?(n.add(a,0,[["enter",u,e]]),n.add(o+1,0,[["exit",t[i][1],e]]),t[i][1].end={...t[o][1].end}):t[i][1]=u,n.add(t.length,0,[["exit",u,e]]),n.consume(t),t}function io(t,e,n){let r=this,i;return a;function a(f){let l=r.events.length,c;for(;l--;)if(r.events[l][1].type!=="lineEnding"&&r.events[l][1].type!=="linePrefix"&&r.events[l][1].type!=="content"){c=r.events[l][1].type==="paragraph";break}return!r.parser.lazy[r.now().line]&&(r.interrupt||c)?(t.enter("setextHeadingLine"),i=f,o(f)):n(f)}function o(f){return t.enter("setextHeadingLineSequence"),u(f)}function u(f){return f===i?(t.consume(f),u):(t.exit("setextHeadingLineSequence"),A(f)?M(t,s,"lineSuffix")(f):s(f))}function s(f){return f===null||E(f)?(t.exit("setextHeadingLine"),e(f)):n(f)}}var Ve={tokenize:oo};function oo(t){let e=this,n=t.attempt(ut,r,t.attempt(this.parser.constructs.flowInitial,i,M(t,t.attempt(this.parser.constructs.flow,i,t.attempt(Mn,i)),"linePrefix")));return n;function r(a){if(a===null){t.consume(a);return}return t.enter("lineEndingBlank"),t.consume(a),t.exit("lineEndingBlank"),e.currentConstruct=void 0,n}function i(a){if(a===null){t.consume(a);return}return t.enter("lineEnding"),t.consume(a),t.exit("lineEnding"),e.currentConstruct=void 0,n}}var je={resolveAll:Qe()},We=$e("string"),Ue=$e("text");function $e(t){return{resolveAll:Qe(t==="text"?ao:void 0),tokenize:e};function e(n){let r=this,i=this.parser.constructs[t],a=n.attempt(i,o,u);return o;function o(l){return f(l)?a(l):u(l)}function u(l){if(l===null){n.consume(l);return}return n.enter("data"),n.consume(l),s}function s(l){return f(l)?(n.exit("data"),a(l)):(n.consume(l),s)}function f(l){if(l===null)return!0;let c=i[l],m=-1;if(c)for(;++m<c.length;){let h=c[m];if(!h.previous||h.previous.call(r,r.previous))return!0}return!1}}}function Qe(t){return e;function e(n,r){let i=-1,a;for(;++i<=n.length;)a===void 0?n[i]&&n[i][1].type==="data"&&(a=i,i++):(!n[i]||n[i][1].type!=="data")&&(i!==a+2&&(n[a][1].end=n[i-1][1].end,n.splice(a+2,i-a-2),i=a+2),a=void 0);return t?t(n,r):n}}function ao(t,e){let n=new pt,r=0;for(;++r<=t.length;)if((r===t.length||t[r][1].type==="lineEnding")&&t[r-1][1].type==="data"){let i=t[r-1][1],a=e.sliceStream(i),o=a.length,u=-1,s=0,f;for(;o--;){let l=a[o];if(typeof l=="string"){for(u=l.length;l.charCodeAt(u-1)===32;)s++,u--;if(u)break;u=-1}else if(l===-2)f=!0,s++;else if(l!==-1){o++;break}}if(e._contentTypeTextTrailing&&r===t.length&&(s=0),s){let l={type:r===t.length||f||s<2?"lineSuffix":"hardBreakTrailing",start:{_bufferIndex:o?u:i.start._bufferIndex+u,_index:i.start._index+o,line:i.end.line,column:i.end.column-s,offset:i.end.offset-s},end:{...i.end}};i.end={...l.start},i.start.offset===i.end.offset?Object.assign(i,l):n.add(r,0,[["enter",l,e],["exit",l,e]])}r++}return n.consume(t),t}var vn={};Ee(vn,{attentionMarkers:()=>po,contentInitial:()=>lo,disable:()=>go,document:()=>uo,flow:()=>co,flowInitial:()=>so,insideSpan:()=>mo,string:()=>fo,text:()=>ho});var uo={42:G,43:G,45:G,48:G,49:G,50:G,51:G,52:G,53:G,54:G,55:G,56:G,57:G,62:nn},lo={91:Ln},so={[-2]:Wt,[-1]:Wt,32:Wt},co={35:Pn,42:Et,45:[fn,Et],60:_n,61:fn,95:Et,96:on,126:on},fo={38:rn,92:en},ho={[-5]:$t,[-4]:$t,[-3]:$t,33:Bn,38:rn,42:Vt,60:[An,On],91:Nn,92:[Dn,en],93:Ct,95:Vt,96:zn},mo={null:[Vt,je]},po={null:[42,95]},go={null:[]};function Ze(t,e,n){let r={_bufferIndex:-1,_index:0,line:n&&n.line||1,column:n&&n.column||1,offset:n&&n.offset||0},i={},a=[],o=[],u=[],s=!0,f={attempt:v(T),check:v(N),consume:P,enter:L,exit:b,interrupt:v(N,{interrupt:!0})},l={code:null,containerState:{},defineSkip:w,events:[],now:y,parser:t,previous:null,sliceSerialize:x,sliceStream:I,write:h},c=e.tokenize.call(l,f),m;return e.resolveAll&&a.push(e),l;function h(z){return o=X(o,z),S(),o[o.length-1]!==null?[]:(d(e,0),l.events=dt(a,l.events,l),l.events)}function x(z,B){return ko(I(z),B)}function I(z){return xo(o,z)}function y(){let{_bufferIndex:z,_index:B,line:_,column:j,offset:W}=r;return{_bufferIndex:z,_index:B,line:_,column:j,offset:W}}function w(z){i[z.line]=z.column,H()}function S(){for(;r._index<o.length;){let z=o[r._index];if(typeof z=="string"){let B=r._index;for(r._bufferIndex<0&&(r._bufferIndex=0);r._index===B&&r._bufferIndex<z.length;)C(z.charCodeAt(r._bufferIndex))}else C(z)}}function C(z){s=void 0,m=z,c=c(z)}function P(z){E(z)?(r.line++,r.column=1,r.offset+=z===-3?2:1,H()):z!==-1&&(r.column++,r.offset++),r._bufferIndex<0?r._index++:(r._bufferIndex++,r._bufferIndex===o[r._index].length&&(r._bufferIndex=-1,r._index++)),l.previous=z,s=!0}function L(z,B){let _=B||{};return _.type=z,_.start=y(),l.events.push(["enter",_,l]),u.push(_),_}function b(z){let B=u.pop();return B.end=y(),l.events.push(["exit",B,l]),B}function T(z,B){d(z,B.from)}function N(z,B){B.restore()}function v(z,B){return _;function _(j,W,rt){let it,p,et,ft;return Array.isArray(j)?tt(j):"tokenize"in j?tt([j]):g(j);function g(Z){return Bt;function Bt(ht){let zt=ht!==null&&Z[ht],bt=ht!==null&&Z.null,Sn=[...Array.isArray(zt)?zt:zt?[zt]:[],...Array.isArray(bt)?bt:bt?[bt]:[]];return tt(Sn)(ht)}}function tt(Z){return it=Z,p=0,Z.length===0?rt:At(Z[p])}function At(Z){return Bt;function Bt(ht){return ft=q(),et=Z,Z.partial||(l.currentConstruct=Z),Z.name&&l.parser.constructs.disable.null.includes(Z.name)?Gt(ht):Z.tokenize.call(B?Object.assign(Object.create(l),B):l,f,Yt,Gt)(ht)}}function Yt(Z){return s=!0,z(et,ft),W}function Gt(Z){return s=!0,ft.restore(),++p<it.length?At(it[p]):rt}}}function d(z,B){z.resolveAll&&!a.includes(z)&&a.push(z),z.resolve&&Q(l.events,B,l.events.length-B,z.resolve(l.events.slice(B),l)),z.resolveTo&&(l.events=z.resolveTo(l.events,l))}function q(){let z=y(),B=l.previous,_=l.currentConstruct,j=l.events.length,W=Array.from(u);return{from:j,restore:rt};function rt(){r=z,l.previous=B,l.currentConstruct=_,l.events.length=j,u=W,H()}}function H(){r.line in i&&r.column<2&&(r.column=i[r.line],r.offset+=i[r.line]-1)}}function xo(t,e){let n=e.start._index,r=e.start._bufferIndex,i=e.end._index,a=e.end._bufferIndex,o;if(n===i)o=[t[n].slice(r,a)];else{if(o=t.slice(n,i),r>-1){let u=o[0];typeof u=="string"?o[0]=u.slice(r):o.shift()}a>0&&o.push(t[i].slice(0,a))}return o}function ko(t,e){let n=-1,r=[],i;for(;++n<t.length;){let a=t[n],o;if(typeof a=="string")o=a;else switch(a){case-5:{o="\r";break}case-4:{o=`
`;break}case-3:{o=`\r
`;break}case-2:{o=e?" ":"	";break}case-1:{if(!e&&i)continue;o=" ";break}default:o=String.fromCharCode(a)}i=a===-2,r.push(o)}return r.join("")}function qn(t){let r={constructs:Jt([vn,...(t||{}).extensions||[]]),content:i(Oe),defined:[],document:i(ve),flow:i(Ve),lazy:{},string:i(We),text:i(Ue)};return r;function i(a){return o;function o(u){return Ze(r,a,u)}}}function Hn(t){for(;!un(t););return t}var Ye=/[\0\t\n\r]/g;function Vn(){let t=1,e="",n=!0,r;return i;function i(a,o,u){a=e+(typeof a=="string"?a.toString():new TextDecoder(o||void 0).decode(a));let s=[],f=0;for(e="",n&&(a.charCodeAt(0)===65279&&f++,n=void 0);f<a.length;){Ye.lastIndex=f;let l=Ye.exec(a),c=l&&l.index!==void 0?l.index:a.length,m=a.charCodeAt(c);if(!l){e=a.slice(f);break}if(m===10&&f===c&&r)s.push(-3),r=void 0;else switch(r&&(s.push(-5),r=void 0),f<c&&(s.push(a.slice(f,c)),t+=c-f),m){case 0:{s.push(65533),t++;break}case 9:{let h=Math.ceil(t/4)*4;for(s.push(-2);t++<h;)s.push(-1);break}case 10:{s.push(-4),t=1;break}default:r=!0,t=1}f=c+1}return u&&(r&&s.push(-5),e&&s.push(e),s.push(null)),s}}var bo=/\\([!-/:-@[-`{-~])|&(#(?:\d{1,7}|x[\da-f]{1,6})|[\da-z]{1,31});/gi;function hn(t){return t.replace(bo,wo)}function wo(t,e,n){if(e)return e;if(n.charCodeAt(0)===35){let i=n.charCodeAt(1),a=i===120||i===88;return tn(n.slice(a?2:1),a?16:10)}return Lt(n)||t}function Pt(t){return!t||typeof t!="object"?"":"position"in t||"type"in t?Ge(t.position):"start"in t||"end"in t?Ge(t):"line"in t||"column"in t?jn(t):""}function jn(t){return Xe(t&&t.line)+":"+Xe(t&&t.column)}function Ge(t){return jn(t&&t.start)+"-"+jn(t&&t.end)}function Xe(t){return t&&typeof t=="number"?t:1}var Je={}.hasOwnProperty;function Wn(t,e,n){return e&&typeof e=="object"&&(n=e,e=void 0),yo(n)(Hn(qn(n).document().write(Vn()(t,e,!0))))}function yo(t){let e={afterExit:[],beforeEnter:[],transforms:[],canContainEols:["emphasis","fragment","heading","paragraph","strong"],enter:{autolink:o(ye),autolinkProtocol:d,autolinkEmail:d,atxHeading:o(ke),blockQuote:o(zt),characterEscape:d,characterReference:d,codeFenced:o(bt),codeFencedFenceInfo:u,codeFencedFenceMeta:u,codeIndented:o(bt,u),codeText:o(Sn,u),codeTextData:d,data:d,codeFlowValue:d,definition:o(Dr),definitionDestinationString:u,definitionLabelString:u,definitionTitleString:u,emphasis:o(Pr),hardBreakEscape:o(be),hardBreakTrailing:o(be),htmlFlow:o(we,u),htmlFlowData:d,htmlText:o(we,u),htmlTextData:d,image:o(Rr),label:u,link:o(ye),listItem:o(_r),listItemValue:h,listOrdered:o(Se,m),listUnordered:o(Se),paragraph:o(Or),reference:tt,referenceString:u,resourceDestinationString:u,resourceTitleString:u,setextHeading:o(ke),strong:o(Br),thematicBreak:o(vr)},exit:{atxHeading:f(),atxHeadingSequence:b,autolink:f(),autolinkEmail:ht,autolinkProtocol:Bt,blockQuote:f(),characterEscapeValue:q,characterReferenceMarkerHexadecimal:Yt,characterReferenceMarkerNumeric:Yt,characterReferenceValue:Gt,characterReference:Z,codeFenced:f(w),codeFencedFence:y,codeFencedFenceInfo:x,codeFencedFenceMeta:I,codeFlowValue:q,codeIndented:f(S),codeText:f(j),codeTextData:q,data:q,definition:f(),definitionDestinationString:L,definitionLabelString:C,definitionTitleString:P,emphasis:f(),hardBreakEscape:f(z),hardBreakTrailing:f(z),htmlFlow:f(B),htmlFlowData:q,htmlText:f(_),htmlTextData:q,image:f(rt),label:p,labelText:it,lineEnding:H,link:f(W),listItem:f(),listOrdered:f(),listUnordered:f(),paragraph:f(),referenceString:At,resourceDestinationString:et,resourceTitleString:ft,resource:g,setextHeading:f(v),setextHeadingLineSequence:N,setextHeadingText:T,strong:f(),thematicBreak:f()}};tr(e,(t||{}).mdastExtensions||[]);let n={};return r;function r(k){let F={type:"root",children:[],position:void 0},D={stack:[F],tokenStack:[],config:e,enter:s,exit:l,buffer:u,resume:c,data:n},R=[],K=[],V=-1;for(;++V<k.length;)if(K.push(k[V]),k[V][1].type==="listOrdered"||k[V][1].type==="listUnordered")if(k[V][0]==="enter")R.push(K.length-1);else{let J=R.pop();a(K,J)}for(k=K,V=-1;++V<k.length;){let J=e[k[V][0]];k[V][0]==="enter"&&e.beforeEnter.length>0&&i(e.beforeEnter,{...D,sliceSerialize:k[V][2].sliceSerialize},k[V][1]),Je.call(J,k[V][1].type)&&J[k[V][1].type].call({...D,sliceSerialize:k[V][2].sliceSerialize},k[V][1]),k[V][0]==="exit"&&e.afterExit.length>0&&i(e.afterExit,{...D,sliceSerialize:k[V][2].sliceSerialize},k[V][1])}if(D.tokenStack.length>0){let J=D.tokenStack[D.tokenStack.length-1];(J[1]||Ke).call(D,void 0,J[0])}for(F.position={start:kt(k.length>0?k[0][1].start:{line:1,column:1,offset:0}),end:kt(k.length>0?k[k.length-2][1].end:{line:1,column:1,offset:0})},V=-1;++V<e.transforms.length;)F=e.transforms[V](F)||F;return F}function i(k,F,D){let R=-1;for(;++R<k.length;)k[R].call(F,D)}function a(k,F){let D=k.length-1,R=F-1,K=-1,V=!1,J,ot,Nt,vt,qt=[];for(;++R<=D;){let nt=k[R];switch(nt[1].type){case"listUnordered":case"listOrdered":case"blockQuote":{nt[0]==="enter"?K++:K--,vt=void 0;break}case"lineEndingBlank":{nt[0]==="enter"&&(J&&!vt&&!K&&!Nt&&(Nt=R),vt=void 0);break}case"linePrefix":case"listItemValue":case"listItemMarker":case"listItemPrefix":case"listItemPrefixWhitespace":break;default:vt=void 0}if(!K&&nt[0]==="enter"&&nt[1].type==="listItemPrefix"||K===-1&&nt[0]==="exit"&&(nt[1].type==="listUnordered"||nt[1].type==="listOrdered")){if(J){let Mt=R;for(ot=void 0;Mt--;){let mt=k[Mt];if(mt[1].type==="lineEnding"||mt[1].type==="lineEndingBlank"){if(mt[0]==="exit")continue;ot&&(k[ot][1].type="lineEndingBlank",V=!0),mt[1].type="lineEnding",ot=Mt}else if(!(mt[1].type==="linePrefix"||mt[1].type==="blockQuotePrefix"||mt[1].type==="blockQuotePrefixWhitespace"||mt[1].type==="blockQuoteMarker"||mt[1].type==="listItemIndent"))break}Nt&&(!ot||Nt<ot)&&(J._spread=!0),J.end=Object.assign({},ot?k[ot][1].start:nt[1].end),qt.push({at:ot||R,event:["exit",J,nt[2]]})}if(nt[1].type==="listItemPrefix"){let Mt={type:"listItem",_spread:!1,start:Object.assign({},nt[1].start),end:void 0};J=Mt,qt.push({at:R,event:["enter",Mt,nt[2]]}),Nt=void 0,vt=!0}}}let Ce=k.splice(F),Cn=0;for(R=-1;++R<Ce.length;){for(;Cn<qt.length&&qt[Cn].at===F+R;)k.push(qt[Cn++].event);k.push(Ce[R])}k[F][1]._spread=V}function o(k,F){return D;function D(R){s.call(this,k(R),R),F&&F.call(this,R)}}function u(){this.stack.push({type:"fragment",children:[]})}function s(k,F,D){this.stack[this.stack.length-1].children.push(k),this.stack.push(k),this.tokenStack.push([F,D||void 0]),k.position={start:kt(F.start),end:void 0}}function f(k){return F;function F(D){k&&k.call(this,D),l.call(this,D)}}function l(k,F){let D=this.stack.pop(),R=this.tokenStack.pop();if(!R)throw new Error("Cannot close `"+k.type+"` ("+Pt({start:k.start,end:k.end})+"): it\u2019s not open");R[0].type!==k.type&&(F?F.call(this,k,R[0]):(R[1]||Ke).call(this,k,R[0])),D.position.end=kt(k.end)}function c(){return Tn(this.stack.pop())}function m(){this.data.expectingFirstListItemValue=!0}function h(k){if(this.data.expectingFirstListItemValue){let F=this.stack[this.stack.length-2];F.start=Number.parseInt(this.sliceSerialize(k),10),this.data.expectingFirstListItemValue=void 0}}function x(){let k=this.resume(),F=this.stack[this.stack.length-1];F.lang=k}function I(){let k=this.resume(),F=this.stack[this.stack.length-1];F.meta=k}function y(){this.data.flowCodeInside||(this.buffer(),this.data.flowCodeInside=!0)}function w(){let k=this.resume(),F=this.stack[this.stack.length-1];F.value=k.replace(/^(\r?\n|\r)|(\r?\n|\r)$/g,""),this.data.flowCodeInside=void 0}function S(){let k=this.resume(),F=this.stack[this.stack.length-1];F.value=k.replace(/(\r?\n|\r)$/g,"")}function C(k){let F=this.resume(),D=this.stack[this.stack.length-1];D.label=F,D.identifier=Y(this.sliceSerialize(k)).toLowerCase()}function P(){let k=this.resume(),F=this.stack[this.stack.length-1];F.title=k}function L(){let k=this.resume(),F=this.stack[this.stack.length-1];F.url=k}function b(k){let F=this.stack[this.stack.length-1];if(!F.depth){let D=this.sliceSerialize(k).length;F.depth=D}}function T(){this.data.setextHeadingSlurpLineEnding=!0}function N(k){let F=this.stack[this.stack.length-1];F.depth=this.sliceSerialize(k).codePointAt(0)===61?1:2}function v(){this.data.setextHeadingSlurpLineEnding=void 0}function d(k){let D=this.stack[this.stack.length-1].children,R=D[D.length-1];(!R||R.type!=="text")&&(R=Nr(),R.position={start:kt(k.start),end:void 0},D.push(R)),this.stack.push(R)}function q(k){let F=this.stack.pop();F.value+=this.sliceSerialize(k),F.position.end=kt(k.end)}function H(k){let F=this.stack[this.stack.length-1];if(this.data.atHardBreak){let D=F.children[F.children.length-1];D.position.end=kt(k.end),this.data.atHardBreak=void 0;return}!this.data.setextHeadingSlurpLineEnding&&e.canContainEols.includes(F.type)&&(d.call(this,k),q.call(this,k))}function z(){this.data.atHardBreak=!0}function B(){let k=this.resume(),F=this.stack[this.stack.length-1];F.value=k}function _(){let k=this.resume(),F=this.stack[this.stack.length-1];F.value=k}function j(){let k=this.resume(),F=this.stack[this.stack.length-1];F.value=k}function W(){let k=this.stack[this.stack.length-1];if(this.data.inReference){let F=this.data.referenceType||"shortcut";k.type+="Reference",k.referenceType=F,delete k.url,delete k.title}else delete k.identifier,delete k.label;this.data.referenceType=void 0}function rt(){let k=this.stack[this.stack.length-1];if(this.data.inReference){let F=this.data.referenceType||"shortcut";k.type+="Reference",k.referenceType=F,delete k.url,delete k.title}else delete k.identifier,delete k.label;this.data.referenceType=void 0}function it(k){let F=this.sliceSerialize(k),D=this.stack[this.stack.length-2];D.label=hn(F),D.identifier=Y(F).toLowerCase()}function p(){let k=this.stack[this.stack.length-1],F=this.resume(),D=this.stack[this.stack.length-1];if(this.data.inReference=!0,D.type==="link"){let R=k.children;D.children=R}else D.alt=F}function et(){let k=this.resume(),F=this.stack[this.stack.length-1];F.url=k}function ft(){let k=this.resume(),F=this.stack[this.stack.length-1];F.title=k}function g(){this.data.inReference=void 0}function tt(){this.data.referenceType="collapsed"}function At(k){let F=this.resume(),D=this.stack[this.stack.length-1];D.label=F,D.identifier=Y(this.sliceSerialize(k)).toLowerCase(),this.data.referenceType="full"}function Yt(k){this.data.characterReferenceType=k.type}function Gt(k){let F=this.sliceSerialize(k),D=this.data.characterReferenceType,R;D?(R=tn(F,D==="characterReferenceMarkerNumeric"?10:16),this.data.characterReferenceType=void 0):R=Lt(F);let K=this.stack[this.stack.length-1];K.value+=R}function Z(k){let F=this.stack.pop();F.position.end=kt(k.end)}function Bt(k){q.call(this,k);let F=this.stack[this.stack.length-1];F.url=this.sliceSerialize(k)}function ht(k){q.call(this,k);let F=this.stack[this.stack.length-1];F.url="mailto:"+this.sliceSerialize(k)}function zt(){return{type:"blockquote",children:[],position:void 0}}function bt(){return{type:"code",lang:null,meta:null,value:"",position:void 0}}function Sn(){return{type:"inlineCode",value:"",position:void 0}}function Dr(){return{type:"definition",identifier:"",label:null,title:null,url:"",position:void 0}}function Pr(){return{type:"emphasis",children:[],position:void 0}}function ke(){return{type:"heading",depth:0,children:[],position:void 0}}function be(){return{type:"break",position:void 0}}function we(){return{type:"html",value:"",position:void 0}}function Rr(){return{type:"image",title:null,url:"",alt:null,position:void 0}}function ye(){return{type:"link",title:null,url:"",children:[],position:void 0}}function Se(k){return{type:"list",ordered:k.type==="listOrdered",start:null,spread:k._spread,children:[],position:void 0}}function _r(k){return{type:"listItem",spread:k._spread,checked:null,children:[],position:void 0}}function Or(){return{type:"paragraph",children:[],position:void 0}}function Br(){return{type:"strong",children:[],position:void 0}}function Nr(){return{type:"text",value:"",position:void 0}}function vr(){return{type:"thematicBreak",position:void 0}}}function kt(t){return{line:t.line,column:t.column,offset:t.offset}}function tr(t,e){let n=-1;for(;++n<e.length;){let r=e[n];Array.isArray(r)?tr(t,r):So(t,r)}}function So(t,e){let n;for(n in e)if(Je.call(e,n))switch(n){case"canContainEols":{let r=e[n];r&&t[n].push(...r);break}case"transforms":{let r=e[n];r&&t[n].push(...r);break}case"afterExit":case"beforeEnter":{let r=e[n];r&&t[n].push(r);break}case"enter":case"exit":{let r=e[n];r&&Object.assign(t[n],r);break}}}function Ke(t,e){throw t?new Error("Cannot close `"+t.type+"` ("+Pt({start:t.start,end:t.end})+"): a different token (`"+e.type+"`, "+Pt({start:e.start,end:e.end})+") is open"):new Error("Cannot close document, a token (`"+e.type+"`, "+Pt({start:e.start,end:e.end})+") is still open")}var Co={tokenize:Ao,partial:!0},nr={tokenize:zo,partial:!0},er={tokenize:Mo,partial:!0},rr={tokenize:Lo,partial:!0},Eo={tokenize:Do,partial:!0},ir={name:"wwwAutolink",tokenize:To,previous:ar},or={name:"protocolAutolink",tokenize:Io,previous:ur},gt={name:"emailAutolink",tokenize:Fo,previous:lr},lt={};function $n(){return{text:lt}}var Ft=48;for(;Ft<123;)lt[Ft]=gt,Ft++,Ft===58?Ft=65:Ft===91&&(Ft=97);lt[43]=gt;lt[45]=gt;lt[46]=gt;lt[95]=gt;lt[72]=[gt,or];lt[104]=[gt,or];lt[87]=[gt,ir];lt[119]=[gt,ir];function Fo(t,e,n){let r=this,i,a;return o;function o(c){return!Un(c)||!lr.call(r,r.previous)||Qn(r.events)?n(c):(t.enter("literalAutolink"),t.enter("literalAutolinkEmail"),u(c))}function u(c){return Un(c)?(t.consume(c),u):c===64?(t.consume(c),s):n(c)}function s(c){return c===46?t.check(Eo,l,f)(c):c===45||c===95||$(c)?(a=!0,t.consume(c),s):l(c)}function f(c){return t.consume(c),i=!0,s}function l(c){return a&&i&&U(r.previous)?(t.exit("literalAutolinkEmail"),t.exit("literalAutolink"),e(c)):n(c)}}function To(t,e,n){let r=this;return i;function i(o){return o!==87&&o!==119||!ar.call(r,r.previous)||Qn(r.events)?n(o):(t.enter("literalAutolink"),t.enter("literalAutolinkWww"),t.check(Co,t.attempt(nr,t.attempt(er,a),n),n)(o))}function a(o){return t.exit("literalAutolinkWww"),t.exit("literalAutolink"),e(o)}}function Io(t,e,n){let r=this,i="",a=!1;return o;function o(c){return(c===72||c===104)&&ur.call(r,r.previous)&&!Qn(r.events)?(t.enter("literalAutolink"),t.enter("literalAutolinkHttp"),i+=String.fromCodePoint(c),t.consume(c),u):n(c)}function u(c){if(U(c)&&i.length<5)return i+=String.fromCodePoint(c),t.consume(c),u;if(c===58){let m=i.toLowerCase();if(m==="http"||m==="https")return t.consume(c),s}return n(c)}function s(c){return c===47?(t.consume(c),a?f:(a=!0,s)):n(c)}function f(c){return c===null||wt(c)||O(c)||at(c)||yt(c)?n(c):t.attempt(nr,t.attempt(er,l),n)(c)}function l(c){return t.exit("literalAutolinkHttp"),t.exit("literalAutolink"),e(c)}}function Ao(t,e,n){let r=0;return i;function i(o){return(o===87||o===119)&&r<3?(r++,t.consume(o),i):o===46&&r===3?(t.consume(o),a):n(o)}function a(o){return o===null?n(o):e(o)}}function zo(t,e,n){let r,i,a;return o;function o(f){return f===46||f===95?t.check(rr,s,u)(f):f===null||O(f)||at(f)||f!==45&&yt(f)?s(f):(a=!0,t.consume(f),o)}function u(f){return f===95?r=!0:(i=r,r=void 0),t.consume(f),o}function s(f){return i||r||!a?n(f):e(f)}}function Mo(t,e){let n=0,r=0;return i;function i(o){return o===40?(n++,t.consume(o),i):o===41&&r<n?a(o):o===33||o===34||o===38||o===39||o===41||o===42||o===44||o===46||o===58||o===59||o===60||o===63||o===93||o===95||o===126?t.check(rr,e,a)(o):o===null||O(o)||at(o)?e(o):(t.consume(o),i)}function a(o){return o===41&&r++,t.consume(o),i}}function Lo(t,e,n){return r;function r(u){return u===33||u===34||u===39||u===41||u===42||u===44||u===46||u===58||u===59||u===63||u===95||u===126?(t.consume(u),r):u===38?(t.consume(u),a):u===93?(t.consume(u),i):u===60||u===null||O(u)||at(u)?e(u):n(u)}function i(u){return u===null||u===40||u===91||O(u)||at(u)?e(u):r(u)}function a(u){return U(u)?o(u):n(u)}function o(u){return u===59?(t.consume(u),r):U(u)?(t.consume(u),o):n(u)}}function Do(t,e,n){return r;function r(a){return t.consume(a),i}function i(a){return $(a)?n(a):e(a)}}function ar(t){return t===null||t===40||t===42||t===95||t===91||t===93||t===126||O(t)}function ur(t){return!U(t)}function lr(t){return!(t===47||Un(t))}function Un(t){return t===43||t===45||t===46||t===95||$(t)}function Qn(t){let e=t.length,n=!1;for(;e--;){let r=t[e][1];if((r.type==="labelLink"||r.type==="labelImage")&&!r._balanced){n=!0;break}if(r._gfmAutolinkLiteralWalkedInto){n=!1;break}}return t.length>0&&!n&&(t[t.length-1][1]._gfmAutolinkLiteralWalkedInto=!0),n}var Po={tokenize:qo,partial:!0};function Zn(){return{document:{91:{name:"gfmFootnoteDefinition",tokenize:Bo,continuation:{tokenize:No},exit:vo}},text:{91:{name:"gfmFootnoteCall",tokenize:Oo},93:{name:"gfmPotentialFootnoteCall",add:"after",tokenize:Ro,resolveTo:_o}}}}function Ro(t,e,n){let r=this,i=r.events.length,a=r.parser.gfmFootnotes||(r.parser.gfmFootnotes=[]),o;for(;i--;){let s=r.events[i][1];if(s.type==="labelImage"){o=s;break}if(s.type==="gfmFootnoteCall"||s.type==="labelLink"||s.type==="label"||s.type==="image"||s.type==="link")break}return u;function u(s){if(!o||!o._balanced)return n(s);let f=Y(r.sliceSerialize({start:o.end,end:r.now()}));return f.codePointAt(0)!==94||!a.includes(f.slice(1))?n(s):(t.enter("gfmFootnoteCallLabelMarker"),t.consume(s),t.exit("gfmFootnoteCallLabelMarker"),e(s))}}function _o(t,e){let n=t.length,r;for(;n--;)if(t[n][1].type==="labelImage"&&t[n][0]==="enter"){r=t[n][1];break}t[n+1][1].type="data",t[n+3][1].type="gfmFootnoteCallLabelMarker";let i={type:"gfmFootnoteCall",start:Object.assign({},t[n+3][1].start),end:Object.assign({},t[t.length-1][1].end)},a={type:"gfmFootnoteCallMarker",start:Object.assign({},t[n+3][1].end),end:Object.assign({},t[n+3][1].end)};a.end.column++,a.end.offset++,a.end._bufferIndex++;let o={type:"gfmFootnoteCallString",start:Object.assign({},a.end),end:Object.assign({},t[t.length-1][1].start)},u={type:"chunkString",contentType:"string",start:Object.assign({},o.start),end:Object.assign({},o.end)},s=[t[n+1],t[n+2],["enter",i,e],t[n+3],t[n+4],["enter",a,e],["exit",a,e],["enter",o,e],["enter",u,e],["exit",u,e],["exit",o,e],t[t.length-2],t[t.length-1],["exit",i,e]];return t.splice(n,t.length-n+1,...s),t}function Oo(t,e,n){let r=this,i=r.parser.gfmFootnotes||(r.parser.gfmFootnotes=[]),a=0,o;return u;function u(c){return t.enter("gfmFootnoteCall"),t.enter("gfmFootnoteCallLabelMarker"),t.consume(c),t.exit("gfmFootnoteCallLabelMarker"),s}function s(c){return c!==94?n(c):(t.enter("gfmFootnoteCallMarker"),t.consume(c),t.exit("gfmFootnoteCallMarker"),t.enter("gfmFootnoteCallString"),t.enter("chunkString").contentType="string",f)}function f(c){if(a>999||c===93&&!o||c===null||c===91||O(c))return n(c);if(c===93){t.exit("chunkString");let m=t.exit("gfmFootnoteCallString");return i.includes(Y(r.sliceSerialize(m)))?(t.enter("gfmFootnoteCallLabelMarker"),t.consume(c),t.exit("gfmFootnoteCallLabelMarker"),t.exit("gfmFootnoteCall"),e):n(c)}return O(c)||(o=!0),a++,t.consume(c),c===92?l:f}function l(c){return c===91||c===92||c===93?(t.consume(c),a++,f):f(c)}}function Bo(t,e,n){let r=this,i=r.parser.gfmFootnotes||(r.parser.gfmFootnotes=[]),a,o=0,u;return s;function s(x){return t.enter("gfmFootnoteDefinition")._container=!0,t.enter("gfmFootnoteDefinitionLabel"),t.enter("gfmFootnoteDefinitionLabelMarker"),t.consume(x),t.exit("gfmFootnoteDefinitionLabelMarker"),f}function f(x){return x===94?(t.enter("gfmFootnoteDefinitionMarker"),t.consume(x),t.exit("gfmFootnoteDefinitionMarker"),t.enter("gfmFootnoteDefinitionLabelString"),t.enter("chunkString").contentType="string",l):n(x)}function l(x){if(o>999||x===93&&!u||x===null||x===91||O(x))return n(x);if(x===93){t.exit("chunkString");let I=t.exit("gfmFootnoteDefinitionLabelString");return a=Y(r.sliceSerialize(I)),t.enter("gfmFootnoteDefinitionLabelMarker"),t.consume(x),t.exit("gfmFootnoteDefinitionLabelMarker"),t.exit("gfmFootnoteDefinitionLabel"),m}return O(x)||(u=!0),o++,t.consume(x),x===92?c:l}function c(x){return x===91||x===92||x===93?(t.consume(x),o++,l):l(x)}function m(x){return x===58?(t.enter("definitionMarker"),t.consume(x),t.exit("definitionMarker"),i.includes(a)||i.push(a),M(t,h,"gfmFootnoteDefinitionWhitespace")):n(x)}function h(x){return e(x)}}function No(t,e,n){return t.check(ut,e,t.attempt(Po,e,n))}function vo(t){t.exit("gfmFootnoteDefinition")}function qo(t,e,n){let r=this;return M(t,i,"gfmFootnoteDefinitionIndent",5);function i(a){let o=r.events[r.events.length-1];return o&&o[1].type==="gfmFootnoteDefinitionIndent"&&o[2].sliceSerialize(o[1],!0).length===4?e(a):n(a)}}function Yn(t){let n=(t||{}).singleTilde,r={name:"strikethrough",tokenize:a,resolveAll:i};return n==null&&(n=!0),{text:{126:r},insideSpan:{null:[r]},attentionMarkers:{null:[126]}};function i(o,u){let s=-1;for(;++s<o.length;)if(o[s][0]==="enter"&&o[s][1].type==="strikethroughSequenceTemporary"&&o[s][1]._close){let f=s;for(;f--;)if(o[f][0]==="exit"&&o[f][1].type==="strikethroughSequenceTemporary"&&o[f][1]._open&&o[s][1].end.offset-o[s][1].start.offset===o[f][1].end.offset-o[f][1].start.offset){o[s][1].type="strikethroughSequence",o[f][1].type="strikethroughSequence";let l={type:"strikethrough",start:Object.assign({},o[f][1].start),end:Object.assign({},o[s][1].end)},c={type:"strikethroughText",start:Object.assign({},o[f][1].end),end:Object.assign({},o[s][1].start)},m=[["enter",l,u],["enter",o[f][1],u],["exit",o[f][1],u],["enter",c,u]],h=u.parser.constructs.insideSpan.null;h&&Q(m,m.length,0,dt(h,o.slice(f+1,s),u)),Q(m,m.length,0,[["exit",c,u],["enter",o[s][1],u],["exit",o[s][1],u],["exit",l,u]]),Q(o,f-1,s-f+3,m),s=f+m.length-2;break}}for(s=-1;++s<o.length;)o[s][1].type==="strikethroughSequenceTemporary"&&(o[s][1].type="data");return o}function a(o,u,s){let f=this.previous,l=this.events,c=0;return m;function m(x){return f===126&&l[l.length-1][1].type!=="characterEscape"?s(x):(o.enter("strikethroughSequenceTemporary"),h(x))}function h(x){let I=Dt(f);if(x===126)return c>1?s(x):(o.consume(x),c++,h);if(c<2&&!n)return s(x);let y=o.exit("strikethroughSequenceTemporary"),w=Dt(x);return y._open=!w||w===2&&!!I,y._close=!I||I===2&&!!w,u(x)}}}var mn=class{constructor(){this.map=[],this.index=new Map}add(e,n,r){Ho(this,e,n,r)}consume(e){if(this.map.sort(function(a,o){return a[0]-o[0]}),this.map.length===0)return;let n=this.map.length,r=[];for(;n>0;)n-=1,r.push(e.slice(this.map[n][0]+this.map[n][1]),this.map[n][2]),e.length=this.map[n][0];r.push(e.slice()),e.length=0;let i=r.pop();for(;i;){for(let a of i)e.push(a);i=r.pop()}this.map.length=0,this.index.clear()}};function Ho(t,e,n,r){if(n===0&&r.length===0)return;let i=t.index.get(e);if(i){i[1]+=n,i[2].push(...r);return}let a=[e,n,r];t.map.push(a),t.index.set(e,a)}function sr(t,e){let n=!1,r=[];for(;e<t.length;){let i=t[e];if(n){if(i[0]==="enter")i[1].type==="tableContent"&&r.push(t[e+1][1].type==="tableDelimiterMarker"?"left":"none");else if(i[1].type==="tableContent"){if(t[e-1][1].type==="tableDelimiterMarker"){let a=r.length-1;r[a]=r[a]==="left"?"center":"right"}}else if(i[1].type==="tableDelimiterRow")break}else i[0]==="enter"&&i[1].type==="tableDelimiterRow"&&(n=!0);e+=1}return r}function Gn(){return{flow:{null:{name:"table",tokenize:Vo,resolveAll:jo}}}}function Vo(t,e,n){let r=this,i=0,a=0,o;return u;function u(d){let q=r.events.length-1;for(;q>-1;){let{type:B}=r.events[q][1];if(B==="lineEnding"||B==="linePrefix")q--;else break}let H=q>-1?r.events[q][1].type:null,z=H==="tableHead"||H==="tableRow"?b:s;return z===b&&r.parser.lazy[r.now().line]?n(d):z(d)}function s(d){return t.enter("tableHead"),t.enter("tableRow"),f(d)}function f(d){return d===124||(o=!0,a+=1),l(d)}function l(d){return d===null?n(d):E(d)?a>1?(a=0,r.interrupt=!0,t.exit("tableRow"),t.enter("lineEnding"),t.consume(d),t.exit("lineEnding"),h):n(d):A(d)?M(t,l,"whitespace")(d):(a+=1,o&&(o=!1,i+=1),d===124?(t.enter("tableCellDivider"),t.consume(d),t.exit("tableCellDivider"),o=!0,l):(t.enter("data"),c(d)))}function c(d){return d===null||d===124||O(d)?(t.exit("data"),l(d)):(t.consume(d),d===92?m:c)}function m(d){return d===92||d===124?(t.consume(d),c):c(d)}function h(d){return r.interrupt=!1,r.parser.lazy[r.now().line]?n(d):(t.enter("tableDelimiterRow"),o=!1,A(d)?M(t,x,"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(d):x(d))}function x(d){return d===45||d===58?y(d):d===124?(o=!0,t.enter("tableCellDivider"),t.consume(d),t.exit("tableCellDivider"),I):L(d)}function I(d){return A(d)?M(t,y,"whitespace")(d):y(d)}function y(d){return d===58?(a+=1,o=!0,t.enter("tableDelimiterMarker"),t.consume(d),t.exit("tableDelimiterMarker"),w):d===45?(a+=1,w(d)):d===null||E(d)?P(d):L(d)}function w(d){return d===45?(t.enter("tableDelimiterFiller"),S(d)):L(d)}function S(d){return d===45?(t.consume(d),S):d===58?(o=!0,t.exit("tableDelimiterFiller"),t.enter("tableDelimiterMarker"),t.consume(d),t.exit("tableDelimiterMarker"),C):(t.exit("tableDelimiterFiller"),C(d))}function C(d){return A(d)?M(t,P,"whitespace")(d):P(d)}function P(d){return d===124?x(d):d===null||E(d)?!o||i!==a?L(d):(t.exit("tableDelimiterRow"),t.exit("tableHead"),e(d)):L(d)}function L(d){return n(d)}function b(d){return t.enter("tableRow"),T(d)}function T(d){return d===124?(t.enter("tableCellDivider"),t.consume(d),t.exit("tableCellDivider"),T):d===null||E(d)?(t.exit("tableRow"),e(d)):A(d)?M(t,T,"whitespace")(d):(t.enter("data"),N(d))}function N(d){return d===null||d===124||O(d)?(t.exit("data"),T(d)):(t.consume(d),d===92?v:N)}function v(d){return d===92||d===124?(t.consume(d),N):N(d)}}function jo(t,e){let n=-1,r=!0,i=0,a=[0,0,0,0],o=[0,0,0,0],u=!1,s=0,f,l,c,m=new mn;for(;++n<t.length;){let h=t[n],x=h[1];h[0]==="enter"?x.type==="tableHead"?(u=!1,s!==0&&(cr(m,e,s,f,l),l=void 0,s=0),f={type:"table",start:Object.assign({},x.start),end:Object.assign({},x.end)},m.add(n,0,[["enter",f,e]])):x.type==="tableRow"||x.type==="tableDelimiterRow"?(r=!0,c=void 0,a=[0,0,0,0],o=[0,n+1,0,0],u&&(u=!1,l={type:"tableBody",start:Object.assign({},x.start),end:Object.assign({},x.end)},m.add(n,0,[["enter",l,e]])),i=x.type==="tableDelimiterRow"?2:l?3:1):i&&(x.type==="data"||x.type==="tableDelimiterMarker"||x.type==="tableDelimiterFiller")?(r=!1,o[2]===0&&(a[1]!==0&&(o[0]=o[1],c=pn(m,e,a,i,void 0,c),a=[0,0,0,0]),o[2]=n)):x.type==="tableCellDivider"&&(r?r=!1:(a[1]!==0&&(o[0]=o[1],c=pn(m,e,a,i,void 0,c)),a=o,o=[a[1],n,0,0])):x.type==="tableHead"?(u=!0,s=n):x.type==="tableRow"||x.type==="tableDelimiterRow"?(s=n,a[1]!==0?(o[0]=o[1],c=pn(m,e,a,i,n,c)):o[1]!==0&&(c=pn(m,e,o,i,n,c)),i=0):i&&(x.type==="data"||x.type==="tableDelimiterMarker"||x.type==="tableDelimiterFiller")&&(o[3]=n)}for(s!==0&&cr(m,e,s,f,l),m.consume(e.events),n=-1;++n<e.events.length;){let h=e.events[n];h[0]==="enter"&&h[1].type==="table"&&(h[1]._align=sr(e.events,n))}return t}function pn(t,e,n,r,i,a){let o=r===1?"tableHeader":r===2?"tableDelimiter":"tableData",u="tableContent";n[0]!==0&&(a.end=Object.assign({},Rt(e.events,n[0])),t.add(n[0],0,[["exit",a,e]]));let s=Rt(e.events,n[1]);if(a={type:o,start:Object.assign({},s),end:Object.assign({},s)},t.add(n[1],0,[["enter",a,e]]),n[2]!==0){let f=Rt(e.events,n[2]),l=Rt(e.events,n[3]),c={type:u,start:Object.assign({},f),end:Object.assign({},l)};if(t.add(n[2],0,[["enter",c,e]]),r!==2){let m=e.events[n[2]],h=e.events[n[3]];if(m[1].end=Object.assign({},h[1].end),m[1].type="chunkText",m[1].contentType="text",n[3]>n[2]+1){let x=n[2]+1,I=n[3]-n[2]-1;t.add(x,I,[])}}t.add(n[3]+1,0,[["exit",c,e]])}return i!==void 0&&(a.end=Object.assign({},Rt(e.events,i)),t.add(i,0,[["exit",a,e]]),a=void 0),a}function cr(t,e,n,r,i){let a=[],o=Rt(e.events,n);i&&(i.end=Object.assign({},o),a.push(["exit",i,e])),r.end=Object.assign({},o),a.push(["exit",r,e]),t.add(n+1,0,a)}function Rt(t,e){let n=t[e],r=n[0]==="enter"?"start":"end";return n[1][r]}var Wo={name:"tasklistCheck",tokenize:Uo};function Xn(){return{text:{91:Wo}}}function Uo(t,e,n){let r=this;return i;function i(s){return r.previous!==null||!r._gfmTasklistFirstContentOfListItem?n(s):(t.enter("taskListCheck"),t.enter("taskListCheckMarker"),t.consume(s),t.exit("taskListCheckMarker"),a)}function a(s){return O(s)?(t.enter("taskListCheckValueUnchecked"),t.consume(s),t.exit("taskListCheckValueUnchecked"),o):s===88||s===120?(t.enter("taskListCheckValueChecked"),t.consume(s),t.exit("taskListCheckValueChecked"),o):n(s)}function o(s){return s===93?(t.enter("taskListCheckMarker"),t.consume(s),t.exit("taskListCheckMarker"),t.exit("taskListCheck"),u):n(s)}function u(s){return E(s)?e(s):A(s)?t.check({tokenize:$o},e,n)(s):n(s)}}function $o(t,e,n){return M(t,r,"whitespace");function r(i){return i===null?n(i):e(i)}}function fr(t){return Jt([$n(),Zn(),Yn(t),Gn(),Xn()])}function Kn(t,e){let n=String(t);if(typeof e!="string")throw new TypeError("Expected character");let r=0,i=n.indexOf(e);for(;i!==-1;)r++,i=n.indexOf(e,i+e.length);return r}function gn(t){if(typeof t!="string")throw new TypeError("Expected a string");return t.replace(/[|\\{}()[\]^$+*?.]/g,"\\$&").replace(/-/g,"\\x2d")}var _t=(function(t){if(t==null)return Go;if(typeof t=="function")return xn(t);if(typeof t=="object")return Array.isArray(t)?Qo(t):Zo(t);if(typeof t=="string")return Yo(t);throw new Error("Expected function, string, or object as test")});function Qo(t){let e=[],n=-1;for(;++n<t.length;)e[n]=_t(t[n]);return xn(r);function r(...i){let a=-1;for(;++a<e.length;)if(e[a].apply(this,i))return!0;return!1}}function Zo(t){let e=t;return xn(n);function n(r){let i=r,a;for(a in t)if(i[a]!==e[a])return!1;return!0}}function Yo(t){return xn(e);function e(n){return n&&n.type===t}}function xn(t){return e;function e(n,r,i){return!!(Xo(n)&&t.call(this,n,typeof r=="number"?r:void 0,i||void 0))}}function Go(){return!0}function Xo(t){return t!==null&&typeof t=="object"&&"type"in t}var hr=[],mr=!0,Jn=!1,pr="skip";function te(t,e,n,r){let i;typeof e=="function"&&typeof n!="function"?(r=n,n=e):i=e;let a=_t(i),o=r?-1:1;u(t,void 0,[])();function u(s,f,l){let c=s&&typeof s=="object"?s:{};if(typeof c.type=="string"){let h=typeof c.tagName=="string"?c.tagName:typeof c.name=="string"?c.name:void 0;Object.defineProperty(m,"name",{value:"node ("+(s.type+(h?"<"+h+">":""))+")"})}return m;function m(){let h=hr,x,I,y;if((!e||a(s,f,l[l.length-1]||void 0))&&(h=Ko(n(s,l)),h[0]===Jn))return h;if("children"in s&&s.children){let w=s;if(w.children&&h[0]!==pr)for(I=(r?w.children.length:-1)+o,y=l.concat(w);I>-1&&I<w.children.length;){let S=w.children[I];if(x=u(S,I,y)(),x[0]===Jn)return x;I=typeof x[1]=="number"?x[1]:I+o}}return h}}}function Ko(t){return Array.isArray(t)?t:typeof t=="number"?[mr,t]:t==null?hr:[t]}function ne(t,e,n){let i=_t((n||{}).ignore||[]),a=Jo(e),o=-1;for(;++o<a.length;)te(t,"text",u);function u(f,l){let c=-1,m;for(;++c<l.length;){let h=l[c],x=m?m.children:void 0;if(i(h,x?x.indexOf(h):void 0,m))return;m=h}if(m)return s(f,l)}function s(f,l){let c=l[l.length-1],m=a[o][0],h=a[o][1],x=0,y=c.children.indexOf(f),w=!1,S=[];m.lastIndex=0;let C=m.exec(f.value);for(;C;){let L=C.index,b={index:C.index,input:C.input,stack:[...l,f]},T=h(...C,b);if(typeof T=="string"&&(T=T.length>0?{type:"text",value:T}:void 0),T===!1)m.lastIndex=L+1;else{if(x!==L&&P({type:"text",value:f.value.slice(x,L)}),Array.isArray(T))for(let N of T)P(N);else T&&P(T);x=L+C[0].length,w=!0}if(!m.global)break;C=m.exec(f.value)}return w?(x<f.value.length&&P({type:"text",value:f.value.slice(x)}),c.children.splice(y,1,...S)):S=[f],y+S.length;function P(L){let b=S[S.length-1];b&&b.type==="text"&&L.type==="text"?b.value+=L.value:S.push(L)}}}function Jo(t){if(!Array.isArray(t))throw new TypeError("Expected find and replace tuple or list of tuples");let e=[],n=!t[0]||Array.isArray(t[0])?t:[t],r=-1;for(;++r<n.length;){let i=n[r];e.push([ta(i[0]),na(i[1])])}return e}function ta(t){return typeof t=="string"?new RegExp(gn(t),"g"):t}function na(t){return typeof t=="function"?t:function(){return t}}function re(){return{transforms:[ua],enter:{literalAutolink:ea,literalAutolinkEmail:ee,literalAutolinkHttp:ee,literalAutolinkWww:ee},exit:{literalAutolink:aa,literalAutolinkEmail:oa,literalAutolinkHttp:ra,literalAutolinkWww:ia}}}function ea(t){this.enter({type:"link",title:null,url:"",children:[]},t)}function ee(t){this.config.enter.autolinkProtocol.call(this,t)}function ra(t){this.config.exit.autolinkProtocol.call(this,t)}function ia(t){this.config.exit.data.call(this,t);let e=this.stack[this.stack.length-1];e.type,e.url="http://"+this.sliceSerialize(t)}function oa(t){this.config.exit.autolinkEmail.call(this,t)}function aa(t){this.exit(t)}function ua(t){ne(t,[[/(https?:\/\/|www(?=\.))([-.\w]+)([^ \t\r\n]*)/gi,la],[/(?<=^|\s|\p{P}|\p{S})([-.\w+]+)@([-\w]+(?:\.[-\w]+)+)/gu,sa]],{ignore:["link","linkReference"]})}function la(t,e,n,r,i){let a="";if(!gr(i)||(/^w/i.test(e)&&(n=e+n,e="",a="http://"),!ca(n)))return!1;let o=fa(n+r);if(!o[0])return!1;let u={type:"link",title:null,url:a+e+o[0],children:[{type:"text",value:e+o[0]}]};return o[1]?[u,{type:"text",value:o[1]}]:u}function sa(t,e,n,r){return!gr(r,!0)||/[-\d_]$/.test(n)?!1:{type:"link",title:null,url:"mailto:"+e+"@"+n,children:[{type:"text",value:e+"@"+n}]}}function ca(t){let e=t.split(".");return!(e.length<2||e[e.length-1]&&(/_/.test(e[e.length-1])||!/[a-zA-Z\d]/.test(e[e.length-1]))||e[e.length-2]&&(/_/.test(e[e.length-2])||!/[a-zA-Z\d]/.test(e[e.length-2])))}function fa(t){let e=/[!"&'),.:;<>?\]}]+$/.exec(t);if(!e)return[t,void 0];t=t.slice(0,e.index);let n=e[0],r=n.indexOf(")"),i=Kn(t,"("),a=Kn(t,")");for(;r!==-1&&i>a;)t+=n.slice(0,r+1),n=n.slice(r+1),r=n.indexOf(")"),a++;return[t,n]}function gr(t,e){let n=t.input.charCodeAt(t.index-1);return(t.index===0||at(n)||yt(n))&&(!e||n!==47)}Sa.peek=ya;function ma(){this.buffer()}function pa(t){this.enter({type:"footnoteReference",identifier:"",label:""},t)}function ga(){this.buffer()}function xa(t){this.enter({type:"footnoteDefinition",identifier:"",label:"",children:[]},t)}function da(t){let e=this.resume(),n=this.stack[this.stack.length-1];n.type,n.identifier=Y(this.sliceSerialize(t)).toLowerCase(),n.label=e}function ka(t){this.exit(t)}function ba(t){let e=this.resume(),n=this.stack[this.stack.length-1];n.type,n.identifier=Y(this.sliceSerialize(t)).toLowerCase(),n.label=e}function wa(t){this.exit(t)}function ya(){return"["}function Sa(t,e,n,r){let i=n.createTracker(r),a=i.move("[^"),o=n.enter("footnoteReference"),u=n.enter("reference");return a+=i.move(n.safe(n.associationId(t),{after:"]",before:a})),u(),o(),a+=i.move("]"),a}function ie(){return{enter:{gfmFootnoteCallString:ma,gfmFootnoteCall:pa,gfmFootnoteDefinitionLabelString:ga,gfmFootnoteDefinition:xa},exit:{gfmFootnoteCallString:da,gfmFootnoteCall:ka,gfmFootnoteDefinitionLabelString:ba,gfmFootnoteDefinition:wa}}}xr.attention=Ta;xr.peek=Ia;function oe(){return{canContainEols:["delete"],enter:{strikethrough:Ea},exit:{strikethrough:Fa}}}function Ea(t){this.enter({type:"delete",children:[],position:void 0},t)}function Fa(t){this.exit(t)}function xr(t,e,n,r){let i=n.createTracker(r),a=n.stack.includes("strikethrough")?"~":"~~",o=n.enter("strikethrough"),u=i.move(a);return u+=n.containerPhrasing(t,{...i.current(),before:u,after:"~"}),u+=i.move(a),o(),u}function Ta(){return{construct:"strikethrough",markers:["~"],sizes:[2,1]}}function Ia(){return"~"}function ue(){return{enter:{table:za,tableData:dr,tableHeader:dr,tableRow:La},exit:{codeText:Da,table:Ma,tableData:ae,tableHeader:ae,tableRow:ae}}}function za(t){let e=t._align;this.enter({type:"table",align:e.map(function(n){return n==="none"?null:n}),children:[]},t),this.data.inTable=!0}function Ma(t){this.exit(t),this.data.inTable=void 0}function La(t){this.enter({type:"tableRow",children:[]},t)}function ae(t){this.exit(t)}function dr(t){this.enter({type:"tableCell",children:[]},t)}function Da(t){let e=this.resume();this.data.inTable&&(e=e.replace(/\\([\\|])/g,Pa));let n=this.stack[this.stack.length-1];n.type,n.value=e,this.exit(t)}function Pa(t,e){return e==="|"?e:t}function le(){return{exit:{taskListCheckValueChecked:kr,taskListCheckValueUnchecked:kr,paragraph:_a}}}function kr(t){let e=this.stack[this.stack.length-2];e.type,e.checked=t.type==="taskListCheckValueChecked"}function _a(t){let e=this.stack[this.stack.length-2];if(e&&e.type==="listItem"&&typeof e.checked=="boolean"){let n=this.stack[this.stack.length-1];n.type;let r=n.children[0];if(r&&r.type==="text"){let i=e.children,a=-1,o;for(;++a<i.length;){let u=i[a];if(u.type==="paragraph"){o=u;break}}o===n&&(r.value=r.value.slice(1),r.value.length===0?n.children.shift():n.position&&r.position&&typeof r.position.start.offset=="number"&&(r.position.start.column++,r.position.start.offset++,n.position.start=Object.assign({},r.position.start)))}}this.exit(t)}function se(){return[re(),ie(),oe(),ue(),le()]}var wr={tokenize:Ba,concrete:!0,name:"mathFlow"},br={tokenize:Na,partial:!0};function Ba(t,e,n){let r=this,i=r.events[r.events.length-1],a=i&&i[1].type==="linePrefix"?i[2].sliceSerialize(i[1],!0).length:0,o=0;return u;function u(S){return t.enter("mathFlow"),t.enter("mathFlowFence"),t.enter("mathFlowFenceSequence"),s(S)}function s(S){return S===36?(t.consume(S),o++,s):o<2?n(S):(t.exit("mathFlowFenceSequence"),M(t,f,"whitespace")(S))}function f(S){return S===null||E(S)?c(S):(t.enter("mathFlowFenceMeta"),t.enter("chunkString",{contentType:"string"}),l(S))}function l(S){return S===null||E(S)?(t.exit("chunkString"),t.exit("mathFlowFenceMeta"),c(S)):S===36?n(S):(t.consume(S),l)}function c(S){return t.exit("mathFlowFence"),r.interrupt?e(S):t.attempt(br,m,y)(S)}function m(S){return t.attempt({tokenize:w,partial:!0},y,h)(S)}function h(S){return(a?M(t,x,"linePrefix",a+1):x)(S)}function x(S){return S===null?y(S):E(S)?t.attempt(br,m,y)(S):(t.enter("mathFlowValue"),I(S))}function I(S){return S===null||E(S)?(t.exit("mathFlowValue"),x(S)):(t.consume(S),I)}function y(S){return t.exit("mathFlow"),e(S)}function w(S,C,P){let L=0;return M(S,b,"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4);function b(v){return S.enter("mathFlowFence"),S.enter("mathFlowFenceSequence"),T(v)}function T(v){return v===36?(L++,S.consume(v),T):L<o?P(v):(S.exit("mathFlowFenceSequence"),M(S,N,"whitespace")(v))}function N(v){return v===null||E(v)?(S.exit("mathFlowFence"),C(v)):P(v)}}}function Na(t,e,n){let r=this;return i;function i(o){return o===null?e(o):(t.enter("lineEnding"),t.consume(o),t.exit("lineEnding"),a)}function a(o){return r.parser.lazy[r.now().line]?n(o):e(o)}}function yr(t){let n=(t||{}).singleDollarTextMath;return n==null&&(n=!0),{tokenize:r,resolve:va,previous:qa,name:"mathText"};function r(i,a,o){let u=this,s=0,f,l;return c;function c(y){return i.enter("mathText"),i.enter("mathTextSequence"),m(y)}function m(y){return y===36?(i.consume(y),s++,m):s<2&&!n?o(y):(i.exit("mathTextSequence"),h(y))}function h(y){return y===null?o(y):y===36?(l=i.enter("mathTextSequence"),f=0,I(y)):y===32?(i.enter("space"),i.consume(y),i.exit("space"),h):E(y)?(i.enter("lineEnding"),i.consume(y),i.exit("lineEnding"),h):(i.enter("mathTextData"),x(y))}function x(y){return y===null||y===32||y===36||E(y)?(i.exit("mathTextData"),h(y)):(i.consume(y),x)}function I(y){return y===36?(i.consume(y),f++,I):f===s?(i.exit("mathTextSequence"),i.exit("mathText"),a(y)):(l.type="mathTextData",x(y))}}}function va(t){let e=t.length-4,n=3,r,i;if((t[n][1].type==="lineEnding"||t[n][1].type==="space")&&(t[e][1].type==="lineEnding"||t[e][1].type==="space")){for(r=n;++r<e;)if(t[r][1].type==="mathTextData"){t[e][1].type="mathTextPadding",t[n][1].type="mathTextPadding",n+=2,e-=2;break}}for(r=n-1,e++;++r<=e;)i===void 0?r!==e&&t[r][1].type!=="lineEnding"&&(i=r):(r===e||t[r][1].type==="lineEnding")&&(t[i][1].type="mathTextData",r!==i+2&&(t[i][1].end=t[r-1][1].end,t.splice(i+2,r-i-2),e-=r-i-2,r=i+2),i=void 0);return t}function qa(t){return t!==36||this.events[this.events.length-1][1].type==="characterEscape"}function ce(t){return{flow:{36:wr},text:{36:yr(t)}}}function fe(){return{enter:{mathFlow:t,mathFlowFenceMeta:e,mathText:a},exit:{mathFlow:i,mathFlowFence:r,mathFlowFenceMeta:n,mathFlowValue:u,mathText:o,mathTextData:u}};function t(s){let f={type:"element",tagName:"code",properties:{className:["language-math","math-display"]},children:[]};this.enter({type:"math",meta:null,value:"",data:{hName:"pre",hChildren:[f]}},s)}function e(){this.buffer()}function n(){let s=this.resume(),f=this.stack[this.stack.length-1];f.type,f.meta=s}function r(){this.data.mathFlowInside||(this.buffer(),this.data.mathFlowInside=!0)}function i(s){let f=this.resume().replace(/^(\r?\n|\r)|(\r?\n|\r)$/g,""),l=this.stack[this.stack.length-1];l.type,this.exit(s),l.value=f;let c=l.data.hChildren[0];c.type,c.tagName,c.children.push({type:"text",value:f}),this.data.mathFlowInside=void 0}function a(s){this.enter({type:"inlineMath",value:"",data:{hName:"code",hProperties:{className:["language-math","math-inline"]},hChildren:[]}},s),this.buffer()}function o(s){let f=this.resume(),l=this.stack[this.stack.length-1];l.type,this.exit(s),l.value=f,l.data.hChildren.push({type:"text",value:f})}function u(s){this.config.enter.data.call(this,s),this.config.exit.data.call(this,s)}}var Cr=$r(Sr(),1),Qt=Object.assign(Tt(Error),{eval:Tt(EvalError),range:Tt(RangeError),reference:Tt(ReferenceError),syntax:Tt(SyntaxError),type:Tt(TypeError),uri:Tt(URIError)});function Tt(t){return e.displayName=t.displayName||t.name,e;function e(n,...r){let i=n&&(0,Cr.default)(n,...r);return new t(i)}}var dn={}.hasOwnProperty,Er={yaml:"-",toml:"+"};function Zt(t){let e=[],n=-1,r=Array.isArray(t)?t:t?[t]:["yaml"];for(;++n<r.length;)e[n]=Ha(r[n]);return e}function Ha(t){let e=t;if(typeof e=="string"){if(!dn.call(Er,e))throw Qt("Missing matter definition for `%s`",e);e={type:e,marker:Er[e]}}else if(typeof e!="object")throw Qt("Expected matter to be an object, not `%j`",e);if(!dn.call(e,"type"))throw Qt("Missing `type` in matter `%j`",e);if(!dn.call(e,"fence")&&!dn.call(e,"marker"))throw Qt("Missing `marker` or `fence` in matter `%j`",e);return e}function pe(t){let e=Zt(t),n={},r=-1;for(;++r<e.length;){let i=e[r],a=me(i,"open").charCodeAt(0),o=Va(i),u=n[a];Array.isArray(u)?u.push(o):n[a]=[o]}return{flow:n}}function Va(t){let e=t.anywhere,n=t.type,r=n+"Fence",i=r+"Sequence",a=n+"Value",o={tokenize:l,partial:!0},u,s=0;return{tokenize:f,concrete:!0};function f(c,m,h){let x=this;return I;function I(T){let N=x.now();return N.column===1&&(N.line===1||e)&&(u=me(t,"open"),s=0,T===u.charCodeAt(s))?(c.enter(n),c.enter(r),c.enter(i),y(T)):h(T)}function y(T){return s===u.length?(c.exit(i),A(T)?(c.enter("whitespace"),w(T)):S(T)):T===u.charCodeAt(s++)?(c.consume(T),y):h(T)}function w(T){return A(T)?(c.consume(T),w):(c.exit("whitespace"),S(T))}function S(T){return E(T)?(c.exit(r),c.enter("lineEnding"),c.consume(T),c.exit("lineEnding"),u=me(t,"close"),s=0,c.attempt(o,b,C)):h(T)}function C(T){return T===null||E(T)?L(T):(c.enter(a),P(T))}function P(T){return T===null||E(T)?(c.exit(a),L(T)):(c.consume(T),P)}function L(T){return T===null?h(T):(c.enter("lineEnding"),c.consume(T),c.exit("lineEnding"),c.attempt(o,b,C))}function b(T){return c.exit(n),m(T)}}function l(c,m,h){let x=0;return I;function I(C){return C===u.charCodeAt(x)?(c.enter(r),c.enter(i),y(C)):h(C)}function y(C){return x===u.length?(c.exit(i),A(C)?(c.enter("whitespace"),w(C)):S(C)):C===u.charCodeAt(x++)?(c.consume(C),y):h(C)}function w(C){return A(C)?(c.consume(C),w):(c.exit("whitespace"),S(C))}function S(C){return C===null||E(C)?(c.exit(r),m(C)):h(C)}}}function me(t,e){return t.marker?Fr(t.marker,e).repeat(3):Fr(t.fence,e)}function Fr(t,e){return typeof t=="string"?t:t[e]}function ge(t){let e=Zt(t),n={},r={},i=-1;for(;++i<e.length;){let a=e[i];n[a.type]=ja(a),r[a.type]=Wa,r[a.type+"Value"]=Ua}return{enter:n,exit:r}}function ja(t){return e;function e(n){this.enter({type:t.type,value:""},n),this.buffer()}}function Wa(t){let e=this.resume(),n=this.stack[this.stack.length-1];"value"in n,this.exit(t),n.value=e.replace(/^(\r?\n|\r)|(\r?\n|\r)$/g,"")}function Ua(t){this.config.enter.data.call(this,t),this.config.exit.data.call(this,t)}var Ir=(t,e)=>t.from<e.to&&e.from<t.to,$a=t=>({from:t.position?.start.offset??0,to:t.position?.end.offset??0});function It(t){let e=Wn(t,{extensions:[fr(),ce(),pe(["yaml"])],mdastExtensions:[se(),fe(),ge(["yaml"])]}),n=[],r=[],i=[],a=[];for(let l of t.matchAll(/%%[\s\S]*?(?:%%|$)/g)){let c={from:l.index,to:l.index+l[0].length};n.push(c),r.push(c)}let o=/!?\[\[[^\]\r\n]*(?:\](?!\])[^\]\r\n]*)*\]\]/g;for(let l of t.matchAll(o)){let c={from:l.index,to:l.index+l[0].length};n.push(c),r.push(c)}for(let l of t.matchAll(/(?:[A-Za-z][A-Za-z0-9+.-]*:\/\/|mailto:|www\.)[^\s<>[\]]+/g))n.push({from:l.index,to:l.index+l[0].length});function u(l){let c=$a(l);if(["code","inlineCode","math","inlineMath","yaml","definition","image","imageReference"].includes(l.type)){n.push(c);return}if(l.type==="html"){a.push({value:l.value,range:c}),n.push(c);return}if(l.type==="link"&&t[c.from]!=="["&&n.push(c),l.type==="text"){let m=t.slice(c.from,c.to),h="",x=new Map,I=/\\[!"#$%&'()*+,\-./:;<=>?@[\]\\^_`{|}~]|&(?:#[xX][0-9a-fA-F]+|#\d+|[A-Za-z][A-Za-z0-9]+);|\r\n|[\s\S]/g;for(let y of m.matchAll(I)){let w=c.from+y.index;x.set(w,h.length),h+=hn(y[0]).replace(/\r\n?/g,`
`),x.set(w+y[0].length,h.length),(y[0].startsWith("&")||y[0].startsWith("\\")&&y[0].length===2)&&n.push({from:w,to:w+y[0].length})}h===l.value&&i.push({...c,value:h,boundaries:x});return}if("children"in l)for(let m of l.children)u(m)}u(e);let s=[];for(let l of a)for(let c of l.value.matchAll(/<\/?([A-Za-z][\w:-]*)\b[^>]*>/g)){let m=c[1].toLowerCase(),h=l.range.from+c.index,x=h+c[0].length;if(c[0].startsWith("</")){let I=s.map(y=>y.tag).lastIndexOf(m);I>=0&&(n.push({from:s[I].from,to:x}),s.splice(I))}else!c[0].endsWith("/>")&&!/^(?:area|base|br|col|embed|hr|img|input|link|meta|param|source|track|wbr)$/.test(m)&&s.push({tag:m,from:h})}for(let l of s)n.push({from:l.from,to:t.length});let f=[0];for(let l=0;l<t.length;l++)t[l]===`
`&&f.push(l+1);return{source:t,runs:i,protected:Tr(n),omitted:Tr(r),lineOffsets:f}}function kn(t,e){let n=[];for(let r of t.runs)for(let i of Ae(t.source.slice(r.from,r.to),e,r.from))Qa(t.protected,i)||i.kind==="script"&&/[\p{L}\p{N}_\\^]/u.test(t.source[i.from-1]??"")||n.push(i);return n}function Ar(t,e){let n="",r=kn(t,e),i=[];for(let a of t.runs){let o=new Set;for(let s of t.omitted){if(!Ir(a,s))continue;let f=a.boundaries.get(Math.max(a.from,s.from)),l=a.boundaries.get(Math.min(a.to,s.to));if(f!==void 0&&l!==void 0)for(let c=f;c<l;c++)o.add(c)}let u=new Map;for(let s=0;s<=a.value.length;s++)u.set(s,n.length),s<a.value.length&&!o.has(s)&&!/\s/.test(a.value[s])&&(n+=a.value[s]);for(let s of r){if(s.from<a.from||s.to>a.to)continue;let f=a.boundaries.get(s.from),l=a.boundaries.get(s.to);f===void 0||l===void 0||i.push({match:s,from:u.get(f),to:u.get(l)})}}return{text:n,matches:i}}function zr(t,e,n){let r=t.lineOffsets[e]??t.source.length,i=t.lineOffsets[n+1]??t.source.length;return{...t,runs:t.runs.filter(a=>a.from>=r&&a.to<=i)}}function Tr(t){let e=t.sort((r,i)=>r.from-i.from||r.to-i.to),n=[];for(let r of e){let i=n[n.length-1];i&&r.from<=i.to?i.to=Math.max(i.to,r.to):n.push({...r})}return n}function Qa(t,e){let n=0,r=t.length;for(;n<r;){let i=n+r>>>1;t[i].to<=e.from?n=i+1:r=i}return n<t.length&&Ir(t[n],e)}var Ot=Mr.StateEffect.define();function Za(t,e){return e.some(n=>n.from<=t.to&&n.to>=t.from)}var xe=class extends st.WidgetType{constructor(n){super();this.match=n}eq(n){return this.match.source===n.match.source&&this.match.kind===n.match.kind}toDOM(n){return Kt(n.dom.ownerDocument,this.match)}ignoreEvent(){return!1}};function Lr(t,e,n){return st.ViewPlugin.fromClass(class{constructor(r){this.view=r;this.decorations=st.Decoration.none;this.composing=!1;this.destroyed=!1;n.add(r),this.analysis=It(r.state.doc.toString()),this.matches=kn(this.analysis,t()),this.build()}update(r){let i=r.transactions.some(a=>a.effects.some(o=>o.is(Ot)));r.docChanged&&(this.analysis=It(r.state.doc.toString())),(r.docChanged||i)&&(this.matches=kn(this.analysis,t())),(r.docChanged||i||r.selectionSet||r.viewportChanged||r.startState.field(bn.editorLivePreviewField,!1)!==r.state.field(bn.editorLivePreviewField,!1))&&this.build()}build(){if(!e()||!this.view.state.field(bn.editorLivePreviewField,!1)||this.composing||this.view.composing){this.decorations=st.Decoration.none;return}let r=[];for(let i of this.view.visibleRanges){let a=0,o=this.matches.length;for(;a<o;){let u=a+o>>>1;this.matches[u].to<=i.from?a=u+1:o=u}for(let u=a;u<this.matches.length&&this.matches[u].from<i.to;u++){let s=this.matches[u];s.from<i.from||s.to>i.to||Za(s,this.view.state.selection.ranges)||r.push(st.Decoration.replace({widget:new xe(s),inclusive:!1}).range(s.from,s.to))}}this.decorations=st.Decoration.set(r,!0)}composition(r){this.composing=r,r?this.view.dispatch({effects:Ot.of()}):queueMicrotask(()=>{this.destroyed||this.view.dispatch({effects:Ot.of()})})}destroy(){this.destroyed=!0,this.decorations=st.Decoration.none,n.delete(this.view)}},{decorations:r=>r.decorations,eventHandlers:{compositionstart(){this.composition(!0)},compositionend(){this.composition(!1)}}})}var Ya="pre,code,mjx-container,math,.math,.internal-link,.internal-embed,.frontmatter,.metadata-container,.footnotes,.easy-symbols,script,style,button,.heading-collapse-indicator,.list-collapse-indicator",wn=class{constructor(e,n){this.element=e;this.source=n;this.replacements=[]}restore(){for(let{rendered:e,original:n}of this.replacements)e.parentNode&&e.replaceWith(n);this.replacements=[]}render(e){this.restore();let n=Ar(typeof this.source=="string"?It(this.source):this.source,e);if(!n.matches.length)return!0;let r=this.element.ownerDocument,i=[],a="",o=r.createTreeWalker(this.element,4);for(let u=o.nextNode();u;u=o.nextNode())if(!u.parentElement?.closest(Ya))for(let s=0;s<u.data.length;s++)/\s/.test(u.data[s])||(a+=u.data[s],i.push({node:u,offset:s}));if(a!==n.text)return!1;for(let u of n.matches.reverse()){let s=i[u.from],f=i[u.to-1];if(!s||!f||s.node.parentElement!==f.node.parentElement)continue;let l=r.createRange();if(l.setStart(s.node,s.offset),l.setEnd(f.node,f.offset+1),l.toString()!==u.match.source)continue;let c=l.extractContents(),m=Kt(r,u.match);l.insertNode(m),this.replacements.push({rendered:m,original:c})}return!0}};var yn=class extends ct.Plugin{constructor(){super(...arguments);this.settings={...Fn};this.enabled=!1;this.cache=new Map;this.views=new Set;this.reading=new Set}async onload(){this.settings=Ie(await this.loadData()),this.enabled=!0,this.registerEditorExtension(Lr(()=>this.settings,()=>this.enabled,this.views)),this.registerMarkdownPostProcessor((n,r)=>{if(n.closest(".markdown-source-view"))return;let i=r.getSectionInfo(n);if(!i||!this.enabled)return;let a=this.cache.get(r.sourcePath);(!a||a.source!==i.text)&&(a=It(i.text),this.cache.size>=8&&this.cache.delete(this.cache.keys().next().value),this.cache.set(r.sourcePath,a));let o=new wn(n,zr(a,i.lineStart,i.lineEnd));this.reading.add(o);let u=new ct.MarkdownRenderChild(n);u.register(()=>{o.restore(),this.reading.delete(o)}),r.addChild(u),o.render(this.settings)}),this.addSettingTab(new de(this.app,this)),this.app.workspace.onLayoutReady(()=>{this.enabled&&this.rerenderPreviews()})}async changeSetting(n,r){this.settings={...this.settings,[n]:r},this.refresh(),await this.saveData(this.settings)}refresh(){for(let n of this.views)n.dispatch({effects:Ot.of()});for(let n of this.reading)n.render(this.settings)}rerenderPreviews(){this.app.workspace.iterateAllLeaves(n=>{n.view instanceof ct.MarkdownView&&n.view.previewMode.rerender(!0)})}onunload(){this.enabled=!1;for(let n of this.views)n.dispatch({effects:Ot.of()});for(let n of this.reading)n.restore();this.reading.clear(),this.cache.clear(),this.views.clear()}},de=class extends ct.PluginSettingTab{constructor(n,r){super(n,r);this.plugin=r}getSettingDefinitions(){return[["arrows","Arrows","Show typed arrows as symbols, such as -> for \u2192 and <=> for \u21D4.","arrows"],["scripts","Subscripts & superscripts","Show x_i as x\u1D62 and x^2 as x\xB2. Use a single letter before the subscript or superscript.","subscripts--superscripts"],["operators","Math operators","Show comparisons and other operators as symbols, such as >= \u2192 \u2265 and != \u2192 \u2260. The input <= always means \u2264.","math-operators"],["latex","Symbols from commands","Show backslash commands as symbols, such as \\alpha \u2192 \u03B1 and \\infty \u2192 \u221E. Includes arrow and math operator commands.","symbols-from-commands"]].map(([r,i,a,o])=>({name:i,desc:a,render:u=>{u.setDesc(a+" "),u.descEl.createEl("a",{text:"View all supported shortcuts",cls:"external-link",attr:{href:`https://github.com/chaovven/obsidian-easy-symbols#${o}`,target:"_blank",rel:"noopener noreferrer","aria-label":`View all supported shortcuts: ${i}`}}),u.addToggle(s=>{s.setValue(this.plugin.settings[r]).onChange(async f=>{await this.plugin.changeSetting(r,f)})})}}))}display(){this.containerEl.empty();for(let n of this.getSettingDefinitions()){let r=new ct.Setting(this.containerEl).setName(n.name);n.render(r)}}};

/*! Third-party licenses

ccount@2.0.1

(The MIT License)

Copyright (c) 2015 Titus Wormer <tituswormer@gmail.com>

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
'Software'), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

--------------------

decode-named-character-reference@1.3.0

(The MIT License)

Copyright (c) Titus Wormer <tituswormer@gmail.com>

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
'Software'), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

--------------------

devlop@1.1.0

(The MIT License)

Copyright (c) 2023 Titus Wormer <tituswormer@gmail.com>

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
'Software'), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

--------------------

escape-string-regexp@5.0.0

MIT License

Copyright (c) Sindre Sorhus <sindresorhus@gmail.com> (https://sindresorhus.com)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

--------------------

fault@2.0.1

(The MIT License)

Copyright (c) 2015 Titus Wormer <tituswormer@gmail.com>

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
'Software'), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

--------------------

format@0.2.2

Copyright 2010 - 2014 Sami Samhuri sami@samhuri.net

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

--------------------

katex@0.18.10

The MIT License (MIT)

Copyright (c) 2013-2020 Khan Academy and other contributors

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

--------------------

longest-streak@3.1.0

(The MIT License)

Copyright (c) 2015 Titus Wormer <mailto:tituswormer@gmail.com>

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
'Software'), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

--------------------

markdown-table@3.0.4

(The MIT License)

Copyright (c) Titus Wormer <tituswormer@gmail.com>

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
'Software'), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

--------------------

mdast-util-find-and-replace@3.0.3

(The MIT License)

Copyright (c) Titus Wormer <tituswormer@gmail.com>

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
'Software'), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

--------------------

mdast-util-from-markdown@2.1.0

(The MIT License)

Copyright (c) Titus Wormer <tituswormer@gmail.com>

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
'Software'), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

--------------------

mdast-util-frontmatter@2.0.1

(The MIT License)

Copyright (c) 2020 Titus Wormer <tituswormer@gmail.com>

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
'Software'), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

--------------------

mdast-util-gfm@3.1.0

(The MIT License)

Copyright (c) Titus Wormer <tituswormer@gmail.com>

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
'Software'), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

--------------------

mdast-util-gfm-autolink-literal@2.0.1

(The MIT License)

Copyright (c) 2020 Titus Wormer <tituswormer@gmail.com>

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
'Software'), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

--------------------

mdast-util-gfm-footnote@2.1.0

(The MIT License)

Copyright (c) Titus Wormer <tituswormer@gmail.com>

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
'Software'), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

--------------------

mdast-util-gfm-strikethrough@2.0.1

(The MIT License)

Copyright (c) Titus Wormer <tituswormer@gmail.com>

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
'Software'), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

--------------------

mdast-util-gfm-table@2.0.0

(The MIT License)

Copyright (c) 2020 Titus Wormer <tituswormer@gmail.com>

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
'Software'), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

--------------------

mdast-util-gfm-task-list-item@2.0.0

(The MIT License)

Copyright (c) 2020 Titus Wormer <tituswormer@gmail.com>

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
'Software'), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

--------------------

mdast-util-math@3.0.0

(The MIT License)

Copyright (c) 2020 Titus Wormer <tituswormer@gmail.com>

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
'Software'), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

--------------------

mdast-util-phrasing@4.1.0

(The MIT License)

Copyright (c) 2017 Titus Wormer <tituswormer@gmail.com>
Copyright (c) 2017 Victor Felder <victor@draft.li>

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
'Software'), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

--------------------

mdast-util-to-markdown@2.2.0

(The MIT License)

Copyright (c) Titus Wormer <tituswormer@gmail.com>

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
'Software'), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

--------------------

mdast-util-to-string@4.0.0

(The MIT License)

Copyright (c) 2015 Titus Wormer <tituswormer@gmail.com>

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
'Software'), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

--------------------

micromark@4.0.3

(The MIT License)

Copyright (c) Titus Wormer <tituswormer@gmail.com>

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
'Software'), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

--------------------

micromark-core-commonmark@2.0.4

(The MIT License)

Copyright (c) Titus Wormer <tituswormer@gmail.com>

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
'Software'), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

--------------------

micromark-extension-frontmatter@2.0.0

(The MIT License)

Copyright (c) 2020 Titus Wormer <tituswormer@gmail.com>

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
'Software'), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

--------------------

micromark-extension-gfm@3.0.0

(The MIT License)

Copyright (c) 2020 Titus Wormer <tituswormer@gmail.com>

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
'Software'), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

--------------------

micromark-extension-gfm-autolink-literal@2.1.0

(The MIT License)

Copyright (c) 2020 Titus Wormer <tituswormer@gmail.com>

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
'Software'), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

--------------------

micromark-extension-gfm-footnote@2.1.0

(The MIT License)

Copyright (c) 2021 Titus Wormer <tituswormer@gmail.com>

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
'Software'), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

--------------------

micromark-extension-gfm-strikethrough@2.1.0

(The MIT License)

Copyright (c) 2020 Titus Wormer <tituswormer@gmail.com>

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
'Software'), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

--------------------

micromark-extension-gfm-table@2.1.2

(The MIT License)

Copyright (c) Titus Wormer <tituswormer@gmail.com>

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
'Software'), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

--------------------

micromark-extension-gfm-tagfilter@2.0.0

(The MIT License)

Copyright (c) 2020 Titus Wormer <tituswormer@gmail.com>

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
'Software'), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

--------------------

micromark-extension-gfm-task-list-item@2.1.0

(The MIT License)

Copyright (c) 2020 Titus Wormer <tituswormer@gmail.com>

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
'Software'), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

--------------------

micromark-extension-math@3.1.0

(The MIT License)

Copyright (c) 2020 Titus Wormer <tituswormer@gmail.com>

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
'Software'), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

--------------------

micromark-factory-destination@2.0.1

(The MIT License)

Copyright (c) Titus Wormer <tituswormer@gmail.com>

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
'Software'), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

--------------------

micromark-factory-label@2.0.1

(The MIT License)

Copyright (c) Titus Wormer <tituswormer@gmail.com>

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
'Software'), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

--------------------

micromark-factory-space@2.1.0

(The MIT License)

Copyright (c) Titus Wormer <tituswormer@gmail.com>

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
'Software'), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

--------------------

micromark-factory-title@2.0.1

(The MIT License)

Copyright (c) Titus Wormer <tituswormer@gmail.com>

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
'Software'), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

--------------------

micromark-factory-whitespace@2.0.1

(The MIT License)

Copyright (c) Titus Wormer <tituswormer@gmail.com>

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
'Software'), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

--------------------

micromark-util-character@2.1.1

(The MIT License)

Copyright (c) Titus Wormer <tituswormer@gmail.com>

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
'Software'), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

--------------------

micromark-util-chunked@2.0.1

(The MIT License)

Copyright (c) Titus Wormer <tituswormer@gmail.com>

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
'Software'), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

--------------------

micromark-util-classify-character@2.0.1

(The MIT License)

Copyright (c) Titus Wormer <tituswormer@gmail.com>

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
'Software'), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

--------------------

micromark-util-combine-extensions@2.0.1

(The MIT License)

Copyright (c) Titus Wormer <tituswormer@gmail.com>

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
'Software'), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

--------------------

micromark-util-decode-numeric-character-reference@2.0.2

(The MIT License)

Copyright (c) Titus Wormer <tituswormer@gmail.com>

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
'Software'), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

--------------------

micromark-util-decode-string@2.0.1

(The MIT License)

Copyright (c) Titus Wormer <tituswormer@gmail.com>

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
'Software'), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

--------------------

micromark-util-edit-map@1.0.0

(The MIT License)

Copyright (c) Titus Wormer <tituswormer@gmail.com>

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
'Software'), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

--------------------

micromark-util-encode@2.0.1

(The MIT License)

Copyright (c) Titus Wormer <tituswormer@gmail.com>

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
'Software'), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

--------------------

micromark-util-html-tag-name@2.0.1

(The MIT License)

Copyright (c) Titus Wormer <tituswormer@gmail.com>

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
'Software'), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

--------------------

micromark-util-normalize-identifier@2.0.1

(The MIT License)

Copyright (c) Titus Wormer <tituswormer@gmail.com>

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
'Software'), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

--------------------

micromark-util-resolve-all@2.0.1

(The MIT License)

Copyright (c) Titus Wormer <tituswormer@gmail.com>

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
'Software'), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

--------------------

micromark-util-sanitize-uri@2.0.1

(The MIT License)

Copyright (c) Titus Wormer <tituswormer@gmail.com>

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
'Software'), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

--------------------

micromark-util-subtokenize@2.1.0

(The MIT License)

Copyright (c) Titus Wormer <tituswormer@gmail.com>

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
'Software'), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

--------------------

unist-util-is@6.0.1

(The MIT license)

Copyright (c) 2015 Titus Wormer <tituswormer@gmail.com>

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
'Software'), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

--------------------

unist-util-stringify-position@4.0.0

(The MIT License)

Copyright (c) 2016 Titus Wormer <tituswormer@gmail.com>

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
'Software'), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

--------------------

unist-util-visit@5.1.0

(The MIT License)

Copyright (c) 2015 Titus Wormer <tituswormer@gmail.com>

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
'Software'), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

--------------------

unist-util-visit-parents@6.0.2

(The MIT License)

Copyright (c) 2016 Titus Wormer <tituswormer@gmail.com>

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
'Software'), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

--------------------

zwitch@2.0.4

(The MIT License)

Copyright (c) 2016 Titus Wormer <tituswormer@gmail.com>

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
'Software'), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/
