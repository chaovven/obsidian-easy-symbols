"use strict";var vr=Object.create;var Xt=Object.defineProperty;var qr=Object.getOwnPropertyDescriptor;var Hr=Object.getOwnPropertyNames;var Vr=Object.getPrototypeOf,jr=Object.prototype.hasOwnProperty;var Wr=(t,e)=>()=>{try{return e||t((e={exports:{}}).exports,e),e.exports}catch(n){throw e=0,n}},Ce=(t,e)=>{for(var n in e)Xt(t,n,{get:e[n],enumerable:!0})},Ee=(t,e,n,r)=>{if(e&&typeof e=="object"||typeof e=="function")for(let i of Hr(e))!jr.call(t,i)&&i!==n&&Xt(t,i,{get:()=>e[i],enumerable:!(r=qr(e,i))||r.enumerable});return t};var Ur=(t,e,n)=>(n=t!=null?vr(Vr(t)):{},Ee(e||!t||!t.__esModule?Xt(n,"default",{value:t,enumerable:!0}):n,t)),$r=t=>Ee(Xt({},"__esModule",{value:!0}),t);var yr=Wr((ph,me)=>{(function(){var t;typeof me<"u"?t=me.exports=r:t=(function(){return this||(0,eval)("this")})(),t.format=r,t.vsprintf=n,typeof console<"u"&&typeof console.log=="function"&&(t.printf=e);function e(){console.log(r.apply(null,arguments))}function n(i,a){return r.apply(null,[i].concat(a))}function r(i){for(var a=1,o=[].slice.call(arguments),l=0,u=i.length,m="",s,c=!1,f,h,x=!1,I,y=function(){return o[a++]},w=function(){for(var S="";/\d/.test(i[l]);)S+=i[l++],s=i[l];return S.length>0?parseInt(S):null};l<u;++l)if(s=i[l],c)switch(c=!1,s=="."?(x=!1,s=i[++l]):s=="0"&&i[l+1]=="."?(x=!0,l+=2,s=i[l]):x=!0,I=w(),s){case"b":m+=parseInt(y(),10).toString(2);break;case"c":f=y(),typeof f=="string"||f instanceof String?m+=f:m+=String.fromCharCode(parseInt(f,10));break;case"d":m+=parseInt(y(),10);break;case"f":h=String(parseFloat(y()).toFixed(I||6)),m+=x?h:h.replace(/^0/,"");break;case"j":m+=JSON.stringify(y());break;case"o":m+="0"+parseInt(y(),10).toString(8);break;case"s":m+=y();break;case"x":m+="0x"+parseInt(y(),10).toString(16);break;case"X":m+="0x"+parseInt(y(),10).toString(16).toUpperCase();break;default:m+=s;break}else s==="%"?c=!0:m+=s;return m}})()});var Ya={};Ce(Ya,{default:()=>yn});module.exports=$r(Ya);var ct=require("obsidian");var En={scripts:!0,latex:!0,arrows:!0,operators:!0};function Te(t){let e={...En};if(t&&typeof t=="object")for(let n of Object.keys(e))typeof t[n]=="boolean"&&(e[n]=t[n]);return e}var Qr={alpha:"\u03B1",beta:"\u03B2",gamma:"\u03B3",delta:"\u03B4",theta:"\u03B8",lambda:"\u03BB",mu:"\u03BC",sigma:"\u03C3",omega:"\u03C9",Delta:"\u0394",infty:"\u221E",emptyset:"\u2205",sum:"\u2211",partial:"\u2202",nabla:"\u2207",forall:"\u2200",exists:"\u2203",in:"\u2208",subset:"\u2282",land:"\u2227",wedge:"\u2227",lor:"\u2228",vee:"\u2228",rightarrow:"\u2192",leftarrow:"\u2190",leftrightarrow:"\u2194",longrightarrow:"\u27F6",longleftarrow:"\u27F5",longleftrightarrow:"\u27F7",Rightarrow:"\u21D2",Leftarrow:"\u21D0",Leftrightarrow:"\u21D4",geq:"\u2265",leq:"\u2264",neq:"\u2260",approx:"\u2248",pm:"\xB1",mp:"\u2213"},Zr={"->":"\u2192","<-":"\u2190","<->":"\u2194","-->":"\u27F6","<--":"\u27F5","<-->":"\u27F7","=>":"\u21D2","<=>":"\u21D4"},Yr={">=":"\u2265","<=":"\u2264","!=":"\u2260","~=":"\u2248","+-":"\xB1","-+":"\u2213"},Fe=/[\p{L}\p{N}_\\^]/u;function Ie(t,e,n=0){let r=[],i=0,a=(o,l)=>{r.push({from:n+i,to:n+i+o,source:t.slice(i,i+o),...l}),i+=o};for(;i<t.length;){let o=t.slice(i);if(t[i]==="\\"){let u=/^\\([A-Za-z]+)/.exec(o);if(u){let m=Qr[u[1]];e.latex&&m?a(u[0].length,{kind:"symbol",text:m}):i+=u[0].length}else i+=Math.min(2,o.length);continue}if(e.scripts&&/[A-Za-z]/.test(t[i])&&(i===0||!Fe.test(t[i-1]))){let u=/^([A-Za-z])(?:_([A-Za-z0-9]+)(?:\^([A-Za-z0-9]+))?|\^([A-Za-z0-9]+)(?:_([A-Za-z0-9]+))?)/.exec(o);if(u&&!Fe.test(t[i+u[0].length]??"")){a(u[0].length,{kind:"script",text:u[1],sub:u[2]??u[5],sup:u[3]??u[4]});continue}}let l=/^[<>!=~+\-]+/.exec(o);if(l){let u=(e.arrows?Zr[l[0]]:void 0)??(e.operators?Yr[l[0]]:void 0);u?a(l[0].length,{kind:"symbol",text:u}):i+=l[0].length;continue}i++}return r}var zr=require("@codemirror/state"),st=require("@codemirror/view"),bn=require("obsidian");function Kt(t,e){let n=t.createElement("span");if(n.className=`easy-symbols easy-symbols-${e.kind}`,n.setAttribute("aria-label",e.source),n.append(t.createTextNode(e.text)),e.sub){let r=t.createElement("sub");r.textContent=e.sub,n.append(r)}if(e.sup){let r=t.createElement("sup");r.textContent=e.sup,n.append(r)}return n}var Gr={};function Fn(t,e){let n=e||Gr,r=typeof n.includeImageAlt=="boolean"?n.includeImageAlt:!0,i=typeof n.includeHtml=="boolean"?n.includeHtml:!0;return ze(t,r,i)}function ze(t,e,n){if(Xr(t)){if("value"in t)return t.type==="html"&&!n?"":t.value;if(e&&"alt"in t&&t.alt)return t.alt;if("children"in t)return Ae(t.children,e,n)}return Array.isArray(t)?Ae(t,e,n):""}function Ae(t,e,n){let r=[],i=-1;for(;++i<t.length;)r[i]=ze(t[i],e,n);return r.join("")}function Xr(t){return!!(t&&typeof t=="object")}var Me=document.createElement("i");function Lt(t){let e="&"+t+";";Me.innerHTML=e;let n=Me.textContent;return n.charCodeAt(n.length-1)===59&&t!=="semi"||n===e?!1:n}function Q(t,e,n,r){let i=t.length,a=0,o;if(e<0?e=-e>i?0:i+e:e=e>i?i:e,n=n>0?n:0,r.length<1e4)o=Array.from(r),o.unshift(e,n),t.splice(...o);else for(n&&t.splice(e,n);a<r.length;)o=r.slice(a,a+1e4),o.unshift(e,0),t.splice(...o),a+=1e4,e+=1e4}function X(t,e){return t.length>0?(Q(t,t.length,0,e),t):e}var Le={}.hasOwnProperty;function Jt(t){let e={},n=-1;for(;++n<t.length;)Kr(e,t[n]);return e}function Kr(t,e){let n;for(n in e){let i=(Le.call(t,n)?t[n]:void 0)||(t[n]={}),a=e[n],o;if(a)for(o in a){Le.call(i,o)||(i[o]=[]);let l=a[o];Jr(i[o],Array.isArray(l)?l:l?[l]:[])}}}function Jr(t,e){let n=-1,r=[];for(;++n<e.length;)(e[n].add==="after"?t:r).push(e[n]);Q(t,0,0,r)}function tn(t,e){let n=Number.parseInt(t,e);return n<9||n===11||n>13&&n<32||n>126&&n<160||n>55295&&n<57344||n>64975&&n<65008||(n&65535)===65535||(n&65535)===65534||n>1114111?"\uFFFD":String.fromCodePoint(n)}function Y(t){return t.replace(/[\t\n\r ]+/g," ").replace(/^ | $/g,"").toLowerCase().toUpperCase()}var U=xt(/[A-Za-z]/),$=xt(/[\dA-Za-z]/),De=xt(/[#-'*+\--9=?A-Z^-~]/);function wt(t){return t!==null&&(t<32||t===127)}var Ht=xt(/\d/),Pe=xt(/[\dA-Fa-f]/),Re=xt(/[!-/:-@[-`{-~]/);function E(t){return t!==null&&t<-2}function O(t){return t!==null&&(t<0||t===32)}function A(t){return t===-2||t===-1||t===32}var yt=xt(/\p{P}|\p{S}/u),at=xt(/\s/);function xt(t){return e;function e(n){return n!==null&&n>-1&&t.test(String.fromCharCode(n))}}function M(t,e,n,r){let i=r?r-1:1/0,a=0;return o;function o(u){return A(u)?(t.enter(n),l(u)):e(u)}function l(u){return A(u)&&a++<i?(t.consume(u),l):(t.exit(n),e(u))}}function Tn(t,e,n,r,i,a){let o=0;return l;function l(s){return a>0&&A(s)?(t.enter(r),u(s)):m(s)}function u(s){return A(s)&&o<a?(t.consume(s),o++,u):(t.exit(r),m(s))}function m(s){return o>=i?e(s):n(s)}}var _e={tokenize:ti};function ti(t){let e=t.attempt(this.parser.constructs.contentInitial,r,i),n;return e;function r(l){if(l===null){t.consume(l);return}return t.enter("lineEnding"),t.consume(l),t.exit("lineEnding"),M(t,e,"linePrefix")}function i(l){return t.enter("paragraph"),a(l)}function a(l){let u=t.enter("chunkText",{contentType:"text",previous:n});return n&&(n.next=u),n=u,o(l)}function o(l){if(l===null){t.exit("chunkText"),t.exit("paragraph"),t.consume(l);return}return E(l)?(t.consume(l),t.exit("chunkText"),a):(t.consume(l),o)}}var pt=class{constructor(){this.index=new Map,this.map=[]}add(e,n,r){Oe(this,e,n,r,!1)}addBefore(e,n,r){Oe(this,e,n,r,!0)}consume(e){if(this.map.sort(function(a,o){return a[0]-o[0]}),this.map.length===0)return;let n=this.map.length,r=[];for(;n>0;)n-=1,r.push(e.slice(this.map[n][0]+this.map[n][1]),this.map[n][2]),e.length=this.map[n][0];r.push(e.slice()),e.length=0;let i=r.pop();for(;i;){for(let a of i)e.push(a);i=r.pop()}this.map.length=0,this.index.clear()}};function Oe(t,e,n,r,i){if(n===0&&r.length===0)return;let a=t.index.get(e);if(a){a[1]+=n,i?(r.push(...a[2]),a[2]=r):a[2].push(...r);return}let o=[e,n,r];t.map.push(o),t.index.set(e,o)}var Ne={tokenize:ni},Be={tokenize:ei};function ni(t){let e=this,n=[],r=0,i,a,o;return l;function l(C){if(r<n.length){let P=n[r];return e.containerState=P[1],t.attempt(P[0].continuation,u,m)(C)}return m(C)}function u(C){if(r++,e.containerState._closeFlow){e.containerState._closeFlow=void 0,i&&S();let P=e.events.length,L=P,b;for(;L--;)if(e.events[L][0]==="exit"&&e.events[L][1].type==="chunkFlow"){b=e.events[L][1].end;break}w(r);let T=P;for(;T<e.events.length;)e.events[T][1].end={...b},T++;let N=new pt;return N.add(L+1,0,e.events.slice(P)),N.add(P,T-P,[]),N.consume(e.events),m(C)}return l(C)}function m(C){if(r===n.length){if(!i)return f(C);if(i.currentConstruct&&i.currentConstruct.concrete)return x(C);e.interrupt=!!(i.currentConstruct&&!i._gfmTableDynamicInterruptHack)}return e.containerState={},t.check(Be,s,c)(C)}function s(C){return i&&S(),w(r),f(C)}function c(C){return e.parser.lazy[e.now().line]=r!==n.length,o=e.now().offset,x(C)}function f(C){return e.containerState={},t.attempt(Be,h,x)(C)}function h(C){return r++,n.push([e.currentConstruct,e.containerState]),f(C)}function x(C){if(C===null){i&&S(),w(0),t.consume(C);return}return i=i||e.parser.flow(e.now()),t.enter("chunkFlow",{_tokenizer:i,contentType:"flow",previous:a}),I(C)}function I(C){if(C===null){y(t.exit("chunkFlow"),!0),w(0),t.consume(C);return}return E(C)?(t.consume(C),y(t.exit("chunkFlow")),r=0,e.interrupt=void 0,l):(t.consume(C),I)}function y(C,P){let L=e.sliceStream(C);if(P&&L.push(null),C.previous=a,a&&(a.next=C),a=C,i.defineSkip(C.start),i.write(L),e.parser.lazy[C.start.line]){let b=i.events.length;for(;b--;)if(i.events[b][1].start.offset<o&&(!i.events[b][1].end||i.events[b][1].end.offset>o))return;let T=e.events.length,N=T,v,d;for(;N--;)if(e.events[N][0]==="exit"&&e.events[N][1].type==="chunkFlow"){if(v){d=e.events[N][1].end;break}v=!0}for(w(r),b=T;b<e.events.length;)e.events[b][1].end={...d},b++;let q=new pt;q.add(N+1,0,e.events.slice(T)),q.add(T,b-T,[]),q.consume(e.events)}}function w(C){let P=n.length;for(;P-- >C;){let L=n[P];e.containerState=L[1],L[0].exit.call(e,t)}n.length=C}function S(){i.write([null]),a=void 0,i=void 0,e.containerState._closeFlow=void 0}}function ei(t,e,n){return M(t,t.attempt(this.parser.constructs.document,e,n),"linePrefix",this.parser.constructs.disable.null.includes("codeIndented")?void 0:4)}function Dt(t){if(t===null||O(t)||at(t))return 1;if(yt(t))return 2}function dt(t,e,n){let r=[],i=-1;for(;++i<t.length;){let a=t[i].resolveAll;a&&!r.includes(a)&&(e=a(e,n),r.push(a))}return e}var Vt={name:"attention",resolveAll:ri,tokenize:ii};function ri(t,e){let n=-1,r;for(;++n<t.length;)if(t[n][0]==="enter"&&t[n][1].type==="attentionSequence"&&t[n][1]._close){let i=n;for(;i--;)if(t[i][0]==="exit"&&t[i][1].type==="attentionSequence"&&t[i][1]._open&&e.sliceSerialize(t[i][1]).charCodeAt(0)===e.sliceSerialize(t[n][1]).charCodeAt(0)){if((t[i][1]._close||t[n][1]._open)&&(t[n][1].end.offset-t[n][1].start.offset)%3&&!((t[i][1].end.offset-t[i][1].start.offset+t[n][1].end.offset-t[n][1].start.offset)%3))continue;let a=t[i][1].end.offset-t[i][1].start.offset>1&&t[n][1].end.offset-t[n][1].start.offset>1?2:1,o={...t[i][1].end},l={...t[n][1].start};ve(o,-a),ve(l,a);let u={type:a>1?"strongSequence":"emphasisSequence",start:o,end:{...t[i][1].end}},m={type:a>1?"strongSequence":"emphasisSequence",start:{...t[n][1].start},end:l},s={type:a>1?"strongText":"emphasisText",start:{...t[i][1].end},end:{...t[n][1].start}},c={type:a>1?"strong":"emphasis",start:{...u.start},end:{...m.end}};t[i][1].end={...u.start},t[n][1].start={...m.end},r=[],t[i][1].end.offset-t[i][1].start.offset&&(r=X(r,[["enter",t[i][1],e],["exit",t[i][1],e]])),r=X(r,[["enter",c,e],["enter",u,e],["exit",u,e],["enter",s,e]]),r=X(r,dt(e.parser.constructs.insideSpan.null,t.slice(i+1,n),e)),r=X(r,[["exit",s,e],["enter",m,e],["exit",m,e],["exit",c,e]]);let f=0;t[n][1].end.offset-t[n][1].start.offset&&(f=2,r=X(r,[["enter",t[n][1],e],["exit",t[n][1],e]])),Q(t,i-1,n-i+3,r),n=i+r.length-f-2;break}}for(n=-1;++n<t.length;)t[n][1].type==="attentionSequence"&&(t[n][1].type="data");return t}function ii(t,e){let n=this.parser.constructs.attentionMarkers.null,r=this.previous,i=Dt(r),a;return o;function o(u){return a=u,t.enter("attentionSequence"),l(u)}function l(u){if(u===a)return t.consume(u),l;let m=t.exit("attentionSequence"),s=Dt(u),c=!s||s===2&&i||n.includes(u)&&u!==42&&u!==95,f=!i||i===2&&s||n.includes(r)&&r!==42&&r!==95;return m._open=!!(a===42?c:c&&(i||!f)),m._close=!!(a===42?f:f&&(s||!c)),e(u)}}function ve(t,e){t.column+=e,t.offset+=e,t._bufferIndex+=e}var In={name:"autolink",tokenize:oi};function oi(t,e,n){let r=0;return i;function i(h){return t.enter("autolink"),t.enter("autolinkMarker"),t.consume(h),t.exit("autolinkMarker"),t.enter("autolinkProtocol"),a}function a(h){return U(h)?(t.consume(h),o):h===64?n(h):m(h)}function o(h){return h===43||h===45||h===46||$(h)?(r=1,l(h)):m(h)}function l(h){return h===58?(t.consume(h),r=0,u):(h===43||h===45||h===46||$(h))&&r++<32?(t.consume(h),l):(r=0,m(h))}function u(h){return h===62?(t.exit("autolinkProtocol"),t.enter("autolinkMarker"),t.consume(h),t.exit("autolinkMarker"),t.exit("autolink"),e):h===null||h===32||h===60||wt(h)?n(h):(t.consume(h),u)}function m(h){return h===64?(t.consume(h),s):De(h)?(t.consume(h),m):n(h)}function s(h){return $(h)?c(h):n(h)}function c(h){return h===46?(t.consume(h),r=0,s):h===62?(t.exit("autolinkProtocol").type="autolinkEmail",t.enter("autolinkMarker"),t.consume(h),t.exit("autolinkMarker"),t.exit("autolink"),e):f(h)}function f(h){if((h===45||$(h))&&r++<63){let x=h===45?f:c;return t.consume(h),x}return n(h)}}var lt={partial:!0,tokenize:ai};function ai(t,e,n){return r;function r(a){return A(a)?M(t,i,"linePrefix")(a):i(a)}function i(a){return a===null||E(a)?e(a):n(a)}}var nn={continuation:{tokenize:ui},exit:si,name:"blockQuote",tokenize:li};function li(t,e,n){let r=this;return i;function i(o){if(o===62){let l=r.containerState;return l.open||(t.enter("blockQuote",{_container:!0}),l.open=!0),t.enter("blockQuotePrefix"),t.enter("blockQuoteMarker"),t.consume(o),t.exit("blockQuoteMarker"),a}return n(o)}function a(o){return A(o)?(t.enter("blockQuotePrefixWhitespace"),t.consume(o),t.exit("blockQuotePrefixWhitespace"),t.exit("blockQuotePrefix"),e):(t.exit("blockQuotePrefix"),e(o))}}function ui(t,e,n){let r=this;return i;function i(o){return A(o)?M(t,a,"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(o):a(o)}function a(o){return t.attempt(nn,e,n)(o)}}function si(t){t.exit("blockQuote")}var en={name:"characterEscape",tokenize:ci};function ci(t,e,n){return r;function r(a){return t.enter("characterEscape"),t.enter("escapeMarker"),t.consume(a),t.exit("escapeMarker"),i}function i(a){return Re(a)?(t.enter("characterEscapeValue"),t.consume(a),t.exit("characterEscapeValue"),t.exit("characterEscape"),e):n(a)}}var rn={name:"characterReference",tokenize:mi};function mi(t,e,n){let r=this,i=0,a,o;return l;function l(c){return t.enter("characterReference"),t.enter("characterReferenceMarker"),t.consume(c),t.exit("characterReferenceMarker"),u}function u(c){return c===35?(t.enter("characterReferenceMarkerNumeric"),t.consume(c),t.exit("characterReferenceMarkerNumeric"),m):(t.enter("characterReferenceValue"),a=31,o=$,s(c))}function m(c){return c===88||c===120?(t.enter("characterReferenceMarkerHexadecimal"),t.consume(c),t.exit("characterReferenceMarkerHexadecimal"),t.enter("characterReferenceValue"),a=6,o=Pe,s):(t.enter("characterReferenceValue"),a=7,o=Ht,s(c))}function s(c){if(c===59&&i){let f=t.exit("characterReferenceValue");return o===$&&!Lt(r.sliceSerialize(f))?n(c):(t.enter("characterReferenceMarker"),t.consume(c),t.exit("characterReferenceMarker"),t.exit("characterReference"),e)}return o(c)&&i++<a?(t.consume(c),s):n(c)}}var jt={partial:!0,tokenize:hi};function hi(t,e,n){let r=this;return i;function i(o){return o===null?n(o):(t.enter("lineEnding"),t.consume(o),t.exit("lineEnding"),a)}function a(o){return r.parser.lazy[r.now().line]?n(o):e(o)}}var on={concrete:!0,name:"codeFenced",tokenize:fi};function fi(t,e,n){let r=this,i={partial:!0,tokenize:L},a=0,o=0,l;return u;function u(b){return m(b)}function m(b){let T=r.events[r.events.length-1];return a=T&&T[1].type==="linePrefix"?T[2].sliceSerialize(T[1],!0).length:0,l=b,t.enter("codeFenced"),t.enter("codeFencedFence"),t.enter("codeFencedFenceSequence"),s(b)}function s(b){return b===l?(o++,t.consume(b),s):o<3?n(b):(t.exit("codeFencedFenceSequence"),A(b)?M(t,c,"whitespace")(b):c(b))}function c(b){return b===null||E(b)?(t.exit("codeFencedFence"),r.interrupt?e(b):t.check(jt,I,P)(b)):(t.enter("codeFencedFenceInfo"),t.enter("chunkString",{contentType:"string"}),f(b))}function f(b){return b===null||E(b)?(t.exit("chunkString"),t.exit("codeFencedFenceInfo"),c(b)):A(b)?(t.exit("chunkString"),t.exit("codeFencedFenceInfo"),M(t,h,"whitespace")(b)):b===96&&b===l?n(b):(t.consume(b),f)}function h(b){return b===null||E(b)?c(b):(t.enter("codeFencedFenceMeta"),t.enter("chunkString",{contentType:"string"}),x(b))}function x(b){return b===null||E(b)?(t.exit("chunkString"),t.exit("codeFencedFenceMeta"),c(b)):b===96&&b===l?n(b):(t.consume(b),x)}function I(b){return t.attempt(i,P,y)(b)}function y(b){return t.enter("lineEnding"),t.consume(b),t.exit("lineEnding"),w}function w(b){return a>0&&A(b)?M(t,S,"linePrefix",a+1)(b):S(b)}function S(b){return b===null||E(b)?t.check(jt,I,P)(b):(t.enter("codeFlowValue"),C(b))}function C(b){return b===null||E(b)?(t.exit("codeFlowValue"),S(b)):(t.consume(b),C)}function P(b){return t.exit("codeFenced"),e(b)}function L(b,T,N){let v=0;return d;function d(_){return b.enter("lineEnding"),b.consume(_),b.exit("lineEnding"),q}function q(_){return b.enter("codeFencedFence"),A(_)?M(b,H,"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(_):H(_)}function H(_){return _===l?(b.enter("codeFencedFenceSequence"),z(_)):N(_)}function z(_){return _===l?(v++,b.consume(_),z):v>=o?(b.exit("codeFencedFenceSequence"),A(_)?M(b,B,"whitespace")(_):B(_)):N(_)}function B(_){return _===null||E(_)?(b.exit("codeFencedFence"),T(_)):N(_)}}}var Wt={name:"codeIndented",tokenize:gi},pi={partial:!0,tokenize:xi};function gi(t,e,n){return r;function r(l){return t.enter("codeIndented"),Tn(t,i,n,"linePrefix",4,4)(l)}function i(l){return l===null?o(l):E(l)?t.attempt(pi,i,o)(l):(t.enter("codeFlowValue"),a(l))}function a(l){return l===null||E(l)?(t.exit("codeFlowValue"),i(l)):(t.consume(l),a)}function o(l){return t.exit("codeIndented"),e(l)}}function xi(t,e,n){let r=this;return i;function i(o){return r.parser.lazy[r.now().line]?n(o):E(o)?(t.enter("lineEnding"),t.consume(o),t.exit("lineEnding"),i):Tn(t,e,a,"linePrefix",4,4)(o)}function a(o){return E(o)?i(o):n(o)}}var An={name:"codeText",previous:ki,resolve:di,tokenize:bi};function di(t){let e=t.length-4,n=3,r,i;if((t[n][1].type==="lineEnding"||t[n][1].type==="space")&&(t[e][1].type==="lineEnding"||t[e][1].type==="space")){for(r=n;++r<e;)if(t[r][1].type==="codeTextData"){t[n][1].type="codeTextPadding",t[e][1].type="codeTextPadding",n+=2,e-=2;break}}for(r=n-1,e++;++r<=e;)i===void 0?r!==e&&t[r][1].type!=="lineEnding"&&(i=r):(r===e||t[r][1].type==="lineEnding")&&(t[i][1].type="codeTextData",r!==i+2&&(t[i][1].end=t[r-1][1].end,t.splice(i+2,r-i-2),e-=r-i-2,r=i+2),i=void 0);return t}function ki(t){return t!==96||this.events[this.events.length-1][1].type==="characterEscape"}function bi(t,e,n){let r=this,i=0,a,o;return l;function l(f){return t.enter("codeText"),t.enter("codeTextSequence"),u(f)}function u(f){return f===96?(t.consume(f),i++,u):(t.exit("codeTextSequence"),m(f))}function m(f){return f===null?n(f):f===32?(t.enter("space"),t.consume(f),t.exit("space"),m):f===96?(o=t.enter("codeTextSequence"),a=0,c(f)):E(f)?(t.enter("lineEnding"),t.consume(f),t.exit("lineEnding"),m):(t.enter("codeTextData"),s(f))}function s(f){return f===null||f===32||f===96||E(f)?(t.exit("codeTextData"),m(f)):(t.consume(f),s)}function c(f){return f===96?(t.consume(f),a++,c):a===i?(t.exit("codeTextSequence"),t.exit("codeText"),e(f)):(o.type="codeTextData",s(f))}}var an=class{constructor(e){this.left=e?[...e]:[],this.right=[]}get(e){if(e<0||e>=this.left.length+this.right.length)throw new RangeError("Cannot access index `"+e+"` in a splice buffer of size `"+(this.left.length+this.right.length)+"`");return e<this.left.length?this.left[e]:this.right[this.right.length-e+this.left.length-1]}get length(){return this.left.length+this.right.length}shift(){return this.setCursor(0),this.right.pop()}slice(e,n){let r=n??Number.POSITIVE_INFINITY;return r<this.left.length?this.left.slice(e,r):e>this.left.length?this.right.slice(this.right.length-r+this.left.length,this.right.length-e+this.left.length).reverse():this.left.slice(e).concat(this.right.slice(this.right.length-r+this.left.length).reverse())}splice(e,n,r){let i=n||0;this.setCursor(Math.trunc(e));let a=this.right.splice(this.right.length-i,Number.POSITIVE_INFINITY);return r&&Ut(this.left,r),a.reverse()}pop(){return this.setCursor(Number.POSITIVE_INFINITY),this.left.pop()}push(e){this.setCursor(Number.POSITIVE_INFINITY),this.left.push(e)}pushMany(e){this.setCursor(Number.POSITIVE_INFINITY),Ut(this.left,e)}unshift(e){this.setCursor(0),this.right.push(e)}unshiftMany(e){this.setCursor(0),Ut(this.right,e.reverse())}setCursor(e){if(!(e===this.left.length||e>this.left.length&&this.right.length===0||e<0&&this.left.length===0))if(e<this.left.length){let n=this.left.splice(e,Number.POSITIVE_INFINITY);Ut(this.right,n.reverse())}else{let n=this.right.splice(this.left.length+this.right.length-e,Number.POSITIVE_INFINITY);Ut(this.left,n.reverse())}}};function Ut(t,e){let n=0;if(e.length<1e4)t.push(...e);else for(;n<e.length;)t.push(...e.slice(n,n+1e4)),n+=1e4}function ln(t){let e={},n=-1,r,i,a,o,l,u,m,s=new an(t);for(;++n<s.length;){for(;n in e;)n=e[n];if(r=s.get(n),n&&r[1].type==="chunkFlow"&&s.get(n-1)[1].type==="listItemPrefix"&&(u=r[1]._tokenizer.events,a=0,a<u.length&&u[a][1].type==="lineEndingBlank"&&(a+=2),a<u.length&&u[a][1].type==="content"))for(;++a<u.length&&u[a][1].type!=="content";)u[a][1].type==="chunkText"&&(u[a][1]._isInFirstContentOfListItem=!0,a++);if(r[0]==="enter")r[1].contentType&&(Object.assign(e,wi(s,n)),n=e[n],m=!0);else if(r[1]._container){for(a=n,i=void 0;a--;)if(o=s.get(a),o[1].type==="lineEnding"||o[1].type==="lineEndingBlank")o[0]==="enter"&&(i&&(s.get(i)[1].type="lineEndingBlank"),o[1].type="lineEnding",i=a);else if(!(o[1].type==="linePrefix"||o[1].type==="listItemIndent"))break;i&&(r[1].end={...s.get(i)[1].start},l=s.slice(i,n),l.unshift(r),s.splice(i,n-i+1,l))}}return Q(t,0,Number.POSITIVE_INFINITY,s.slice(0)),!m}function wi(t,e){let n=t.get(e)[1],r=t.get(e)[2],i=e-1,a=[],o=n._tokenizer;o||(o=r.parser[n.contentType](n.start),n._contentTypeTextTrailing&&(o._contentTypeTextTrailing=!0));let l=o.events,u=[],m={},s,c,f=-1,h=n,x=0,I=0,y=[I];for(;h;){for(;t.get(++i)[1]!==h;);a.push(i),h._tokenizer||(s=r.sliceStream(h),h.next||s.push(null),c&&o.defineSkip(h.start),h._isInFirstContentOfListItem&&(o._gfmTasklistFirstContentOfListItem=!0),o.write(s),h._isInFirstContentOfListItem&&(o._gfmTasklistFirstContentOfListItem=void 0)),c=h,h=h.next}for(h=n;++f<l.length;)l[f][0]==="exit"&&l[f-1][0]==="enter"&&l[f][1].type===l[f-1][1].type&&l[f][1].start.line!==l[f][1].end.line&&(I=f+1,y.push(I),h._tokenizer=void 0,h.previous=void 0,h=h.next);for(o.events=[],h?(h._tokenizer=void 0,h.previous=void 0):y.pop(),f=y.length;f--;){let w=l.slice(y[f],y[f+1]),S=a.pop();u.push([S,S+w.length-1]),t.splice(S,2,w)}for(u.reverse(),f=-1;++f<u.length;)m[x+u[f][0]]=x+u[f][1],x+=u[f][1]-u[f][0]-1;return m}var zn={resolve:Si,tokenize:Ci},yi={partial:!0,tokenize:Ei};function Si(t){return ln(t),t}function Ci(t,e){let n;return r;function r(l){return t.enter("content"),n=t.enter("chunkContent",{contentType:"content"}),i(l)}function i(l){return l===null?a(l):E(l)?t.check(yi,o,a)(l):(t.consume(l),i)}function a(l){return t.exit("chunkContent"),t.exit("content"),e(l)}function o(l){return t.consume(l),t.exit("chunkContent"),n.next=t.enter("chunkContent",{contentType:"content",previous:n}),n=n.next,i}}function Ei(t,e,n){let r=this;return i;function i(o){return t.exit("chunkContent"),t.enter("lineEnding"),t.consume(o),t.exit("lineEnding"),M(t,a,"linePrefix")}function a(o){if(o===null||E(o))return n(o);let l=r.events[r.events.length-1];return!r.parser.constructs.disable.null.includes("codeIndented")&&l&&l[1].type==="linePrefix"&&l[2].sliceSerialize(l[1],!0).length>=4?e(o):t.interrupt(r.parser.constructs.flow,n,e)(o)}}function un(t,e,n,r,i,a,o,l,u){let m=u||Number.POSITIVE_INFINITY,s=0;return c;function c(w){return w===60?(t.enter(r),t.enter(i),t.enter(a),t.consume(w),t.exit(a),f):w===null||w===32||w===41||wt(w)?n(w):(t.enter(r),t.enter(o),t.enter(l),t.enter("chunkString",{contentType:"string"}),I(w))}function f(w){return w===62?(t.enter(a),t.consume(w),t.exit(a),t.exit(i),t.exit(r),e):(t.enter(l),t.enter("chunkString",{contentType:"string"}),h(w))}function h(w){return w===62?(t.exit("chunkString"),t.exit(l),f(w)):w===null||w===60||E(w)?n(w):(t.consume(w),w===92?x:h)}function x(w){return w===60||w===62||w===92?(t.consume(w),h):h(w)}function I(w){return!s&&(w===null||w===41||O(w))?(t.exit("chunkString"),t.exit(l),t.exit(o),t.exit(r),e(w)):s<m&&w===40?(t.consume(w),s++,I):w===41?(t.consume(w),s--,I):w===null||w===32||w===40||wt(w)?n(w):(t.consume(w),w===92?y:I)}function y(w){return w===40||w===41||w===92?(t.consume(w),I):I(w)}}function sn(t,e,n,r,i,a){let o=this,l=0,u;return m;function m(h){return t.enter(r),t.enter(i),t.consume(h),t.exit(i),t.enter(a),s}function s(h){return l>999||h===null||h===91||h===93&&!u||h===94&&!l&&"_hiddenFootnoteSupport"in o.parser.constructs?n(h):h===93?(t.exit(a),t.enter(i),t.consume(h),t.exit(i),t.exit(r),e):E(h)?(t.enter("lineEnding"),t.consume(h),t.exit("lineEnding"),s):(t.enter("chunkString",{contentType:"string"}),c(h))}function c(h){return h===null||h===91||h===93||E(h)||l++>999?(t.exit("chunkString"),s(h)):(t.consume(h),u||(u=!A(h)),h===92?f:c)}function f(h){return h===91||h===92||h===93?(t.consume(h),l++,c):c(h)}}function cn(t,e,n,r,i,a){let o;return l;function l(f){return f===34||f===39||f===40?(t.enter(r),t.enter(i),t.consume(f),t.exit(i),o=f===40?41:f,u):n(f)}function u(f){return f===o?(t.enter(i),t.consume(f),t.exit(i),t.exit(r),e):(t.enter(a),m(f))}function m(f){return f===o?(t.exit(a),u(o)):f===null?n(f):E(f)?(t.enter("lineEnding"),t.consume(f),t.exit("lineEnding"),M(t,m,"linePrefix")):(t.enter("chunkString",{contentType:"string"}),s(f))}function s(f){return f===o||f===null||E(f)?(t.exit("chunkString"),m(f)):(t.consume(f),f===92?c:s)}function c(f){return f===o||f===92?(t.consume(f),s):s(f)}}function St(t,e){let n;return r;function r(i){return E(i)?(t.enter("lineEnding"),t.consume(i),t.exit("lineEnding"),n=!0,r):A(i)?M(t,r,n?"linePrefix":"lineSuffix")(i):e(i)}}var Mn={name:"definition",tokenize:Ti},Fi={partial:!0,tokenize:Ii};function Ti(t,e,n){let r=this,i;return a;function a(h){return t.enter("definition"),o(h)}function o(h){return sn.call(r,t,l,n,"definitionLabel","definitionLabelMarker","definitionLabelString")(h)}function l(h){return i=Y(r.sliceSerialize(r.events[r.events.length-1][1]).slice(1,-1)),h===58?(t.enter("definitionMarker"),t.consume(h),t.exit("definitionMarker"),u):n(h)}function u(h){return O(h)?St(t,m)(h):m(h)}function m(h){return un(t,s,n,"definitionDestination","definitionDestinationLiteral","definitionDestinationLiteralMarker","definitionDestinationRaw","definitionDestinationString")(h)}function s(h){return t.attempt(Fi,c,c)(h)}function c(h){return A(h)?M(t,f,"whitespace")(h):f(h)}function f(h){return h===null||E(h)?(t.exit("definition"),r.parser.defined.push(i),e(h)):n(h)}}function Ii(t,e,n){return r;function r(l){return O(l)?St(t,i)(l):n(l)}function i(l){return cn(t,a,n,"definitionTitle","definitionTitleMarker","definitionTitleString")(l)}function a(l){return A(l)?M(t,o,"whitespace")(l):o(l)}function o(l){return l===null||E(l)?e(l):n(l)}}var Ln={name:"hardBreakEscape",tokenize:Ai};function Ai(t,e,n){return r;function r(a){return t.enter("hardBreakEscape"),t.consume(a),i}function i(a){return E(a)?(t.exit("hardBreakEscape"),e(a)):n(a)}}var Dn={name:"headingAtx",resolve:zi,tokenize:Mi};function zi(t,e){let n=t.length-2,r=3;if(t[r][1].type==="whitespace"&&(r+=2),n-2>r&&t[n][1].type==="whitespace"&&(n-=2),t[n][1].type==="atxHeadingSequence"&&(r===n-1||n-4>r&&t[n-2][1].type==="whitespace")&&(n-=r+1===n?2:4),n>r){let i={type:"atxHeadingText",start:t[r][1].start,end:t[n][1].end},a={type:"chunkText",start:t[r][1].start,end:t[n][1].end,contentType:"text"};Q(t,r,n-r+1,[["enter",i,e],["enter",a,e],["exit",a,e],["exit",i,e]])}return t}function Mi(t,e,n){let r=0;return i;function i(s){return t.enter("atxHeading"),a(s)}function a(s){return t.enter("atxHeadingSequence"),o(s)}function o(s){return s===35&&r++<6?(t.consume(s),o):s===null||O(s)?(t.exit("atxHeadingSequence"),l(s)):n(s)}function l(s){return s===35?(t.enter("atxHeadingSequence"),u(s)):s===null||E(s)?(t.exit("atxHeading"),e(s)):A(s)?M(t,l,"whitespace")(s):(t.enter("atxHeadingText"),m(s))}function u(s){return s===35?(t.consume(s),u):(t.exit("atxHeadingSequence"),l(s))}function m(s){return s===null||s===35||O(s)?(t.exit("atxHeadingText"),l(s)):(t.consume(s),m)}}var qe=["address","article","aside","base","basefont","blockquote","body","caption","center","col","colgroup","dd","details","dialog","dir","div","dl","dt","fieldset","figcaption","figure","footer","form","frame","frameset","h1","h2","h3","h4","h5","h6","head","header","hr","html","iframe","legend","li","link","main","menu","menuitem","nav","noframes","ol","optgroup","option","p","param","search","section","summary","table","tbody","td","tfoot","th","thead","title","tr","track","ul"],Pn=["pre","script","style","textarea"];var Rn={concrete:!0,name:"htmlFlow",resolveTo:Di,tokenize:Pi},Li={partial:!0,tokenize:Ri};function Di(t){let e=t.length;for(;e--&&!(t[e][0]==="enter"&&t[e][1].type==="htmlFlow"););return e>1&&t[e-2][1].type==="linePrefix"&&(t[e][1].start=t[e-2][1].start,t[e+1][1].start=t[e-2][1].start,t.splice(e-2,2)),t}function Pi(t,e,n){let r=this,i,a,o,l,u;return m;function m(g){return s(g)}function s(g){return t.enter("htmlFlow"),t.enter("htmlFlowData"),t.consume(g),c}function c(g){return g===33?(t.consume(g),f):g===47?(t.consume(g),a=!0,I):g===63?(t.consume(g),i=3,r.interrupt?e:p):U(g)?(t.consume(g),o=String.fromCharCode(g),y):n(g)}function f(g){return g===45?(t.consume(g),i=2,h):g===91?(t.consume(g),i=5,l=0,x):U(g)?(t.consume(g),i=4,r.interrupt?e:p):n(g)}function h(g){return g===45?(t.consume(g),r.interrupt?e:p):n(g)}function x(g){let tt="CDATA[";return g===tt.charCodeAt(l++)?(t.consume(g),l===tt.length?r.interrupt?e:H:x):n(g)}function I(g){return U(g)?(t.consume(g),o=String.fromCharCode(g),y):n(g)}function y(g){if(g===null||g===47||g===62||O(g)){let tt=g===47,At=o.toLowerCase();return!tt&&!a&&Pn.includes(At)?(i=1,r.interrupt?e(g):H(g)):qe.includes(o.toLowerCase())?(i=6,tt?(t.consume(g),w):r.interrupt?e(g):H(g)):(i=7,r.interrupt&&!r.parser.lazy[r.now().line]?n(g):a?S(g):C(g))}return g===45||$(g)?(t.consume(g),o+=String.fromCharCode(g),y):n(g)}function w(g){return g===62?(t.consume(g),r.interrupt?e:H):n(g)}function S(g){return A(g)?(t.consume(g),S):d(g)}function C(g){return g===47?(t.consume(g),d):g===58||g===95||U(g)?(t.consume(g),P):A(g)?(t.consume(g),C):d(g)}function P(g){return g===45||g===46||g===58||g===95||$(g)?(t.consume(g),P):L(g)}function L(g){return g===61?(t.consume(g),b):A(g)?(t.consume(g),L):C(g)}function b(g){return g===null||g===60||g===61||g===62||g===96?n(g):g===34||g===39?(t.consume(g),u=g,T):A(g)?(t.consume(g),b):N(g)}function T(g){return g===u?(t.consume(g),u=null,v):g===null||E(g)?n(g):(t.consume(g),T)}function N(g){return g===null||g===34||g===39||g===47||g===60||g===61||g===62||g===96||O(g)?L(g):(t.consume(g),N)}function v(g){return g===47||g===62||A(g)?C(g):n(g)}function d(g){return g===62?(t.consume(g),q):n(g)}function q(g){return g===null||E(g)?H(g):A(g)?(t.consume(g),q):n(g)}function H(g){return g===45&&i===2?(t.consume(g),j):g===60&&i===1?(t.consume(g),W):g===62&&i===4?(t.consume(g),et):g===63&&i===3?(t.consume(g),p):g===93&&i===5?(t.consume(g),it):E(g)&&(i===6||i===7)?(t.exit("htmlFlowData"),t.check(Li,mt,z)(g)):g===null||E(g)?(t.exit("htmlFlowData"),z(g)):(t.consume(g),H)}function z(g){return t.check(jt,B,mt)(g)}function B(g){return t.enter("lineEnding"),t.consume(g),t.exit("lineEnding"),_}function _(g){return g===null||E(g)?z(g):(t.enter("htmlFlowData"),H(g))}function j(g){return g===45?(t.consume(g),p):H(g)}function W(g){return g===47?(t.consume(g),o="",rt):H(g)}function rt(g){if(g===62){let tt=o.toLowerCase();return Pn.includes(tt)?(t.consume(g),et):H(g)}return U(g)&&o.length<8?(t.consume(g),o+=String.fromCharCode(g),rt):H(g)}function it(g){return g===93?(t.consume(g),p):H(g)}function p(g){return g===62?(t.consume(g),et):g===45&&i===2?(t.consume(g),p):H(g)}function et(g){return g===null||E(g)?(t.exit("htmlFlowData"),mt(g)):(t.consume(g),et)}function mt(g){return t.exit("htmlFlow"),e(g)}}function Ri(t,e,n){return r;function r(i){return t.enter("lineEnding"),t.consume(i),t.exit("lineEnding"),t.attempt(lt,e,n)}}var _n={name:"htmlText",tokenize:_i};function _i(t,e,n){let r=this,i,a,o;return l;function l(p){return t.enter("htmlText"),t.enter("htmlTextData"),t.consume(p),u}function u(p){return p===33?(t.consume(p),m):p===47?(t.consume(p),L):p===63?(t.consume(p),C):U(p)?(t.consume(p),N):n(p)}function m(p){return p===45?(t.consume(p),s):p===91?(t.consume(p),a=0,x):U(p)?(t.consume(p),S):n(p)}function s(p){return p===45?(t.consume(p),h):n(p)}function c(p){return p===null?n(p):p===45?(t.consume(p),f):E(p)?(o=c,W(p)):(t.consume(p),c)}function f(p){return p===45?(t.consume(p),h):c(p)}function h(p){return p===62?j(p):p===45?f(p):c(p)}function x(p){let et="CDATA[";return p===et.charCodeAt(a++)?(t.consume(p),a===et.length?I:x):n(p)}function I(p){return p===null?n(p):p===93?(t.consume(p),y):E(p)?(o=I,W(p)):(t.consume(p),I)}function y(p){return p===93?(t.consume(p),w):I(p)}function w(p){return p===62?j(p):p===93?(t.consume(p),w):I(p)}function S(p){return p===null||p===62?j(p):E(p)?(o=S,W(p)):(t.consume(p),S)}function C(p){return p===null?n(p):p===63?(t.consume(p),P):E(p)?(o=C,W(p)):(t.consume(p),C)}function P(p){return p===62?j(p):C(p)}function L(p){return U(p)?(t.consume(p),b):n(p)}function b(p){return p===45||$(p)?(t.consume(p),b):T(p)}function T(p){return E(p)?(o=T,W(p)):A(p)?(t.consume(p),T):j(p)}function N(p){return p===45||$(p)?(t.consume(p),N):p===47||p===62||O(p)?v(p):n(p)}function v(p){return p===47?(t.consume(p),j):p===58||p===95||U(p)?(t.consume(p),d):E(p)?(o=v,W(p)):A(p)?(t.consume(p),v):j(p)}function d(p){return p===45||p===46||p===58||p===95||$(p)?(t.consume(p),d):q(p)}function q(p){return p===61?(t.consume(p),H):E(p)?(o=q,W(p)):A(p)?(t.consume(p),q):v(p)}function H(p){return p===null||p===60||p===61||p===62||p===96?n(p):p===34||p===39?(t.consume(p),i=p,z):E(p)?(o=H,W(p)):A(p)?(t.consume(p),H):(t.consume(p),B)}function z(p){return p===i?(t.consume(p),i=void 0,_):p===null?n(p):E(p)?(o=z,W(p)):(t.consume(p),z)}function B(p){return p===null||p===34||p===39||p===60||p===61||p===96?n(p):p===47||p===62||O(p)?v(p):(t.consume(p),B)}function _(p){return p===47||p===62||O(p)?v(p):n(p)}function j(p){return p===62?(t.consume(p),t.exit("htmlTextData"),t.exit("htmlText"),e):n(p)}function W(p){return t.exit("htmlTextData"),t.enter("lineEnding"),t.consume(p),t.exit("lineEnding"),rt}function rt(p){return A(p)?M(t,it,"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(p):it(p)}function it(p){return t.enter("htmlTextData"),o(p)}}var Ct={name:"labelEnd",resolveAll:vi,resolveTo:qi,tokenize:Hi},Oi={tokenize:Vi},Bi={tokenize:ji},Ni={tokenize:Wi};function vi(t){let e=-1,n=[];for(;++e<t.length;){let r=t[e][1];if(n.push(t[e]),r.type==="labelImage"||r.type==="labelLink"||r.type==="labelEnd"){let i=r.type==="labelImage"?4:2;r.type="data",e+=i}}return t.length!==n.length&&Q(t,0,t.length,n),t}function qi(t,e){let n=t.length,r=0,i,a,o;for(;n--;){let s=t[n][1];if(i){if(s.type==="link"||s.type==="labelLink"&&s._inactive)break;t[n][0]==="enter"&&s.type==="labelLink"&&(s._inactive=!0)}else if(a){if(t[n][0]==="enter"&&(s.type==="labelImage"||s.type==="labelLink")&&!s._balanced&&(i=n,s.type!=="labelLink")){r=2;break}}else s.type==="labelEnd"&&(a=n)}let l={type:t[i][1].type==="labelLink"?"link":"image",start:{...t[i][1].start},end:{...t[t.length-1][1].end}},u={type:"label",start:{...t[i][1].start},end:{...t[a][1].end}},m={type:"labelText",start:{...t[i+r+2][1].end},end:{...t[a-2][1].start}};return o=[["enter",l,e],["enter",u,e]],o=X(o,t.slice(i+1,i+r+3)),o=X(o,[["enter",m,e]]),o=X(o,dt(e.parser.constructs.insideSpan.null,t.slice(i+r+4,a-3),e)),o=X(o,[["exit",m,e],t[a-2],t[a-1],["exit",u,e]]),o=X(o,t.slice(a+1)),o=X(o,[["exit",l,e]]),Q(t,i,t.length,o),t}function Hi(t,e,n){let r=this,i=r._labelStarts,a,o;if(i){for(;i.length>0&&i[i.length-1]._balanced;)i.pop();a=i[i.length-1]}return l;function l(f){return a?a._inactive?c(f):(o=r.parser.defined.includes(Y(r.sliceSerialize({start:a.end,end:r.now()}))),t.enter("labelEnd"),t.enter("labelMarker"),t.consume(f),t.exit("labelMarker"),t.exit("labelEnd"),u):n(f)}function u(f){return f===40?t.attempt(Oi,s,o?s:c)(f):f===91?t.attempt(Bi,s,o?m:c)(f):o?s(f):c(f)}function m(f){return t.attempt(Ni,s,c)(f)}function s(f){return i.pop(),e(f)}function c(f){return a._balanced=!0,n(f)}}function Vi(t,e,n){return r;function r(c){return t.enter("resource"),t.enter("resourceMarker"),t.consume(c),t.exit("resourceMarker"),i}function i(c){return O(c)?St(t,a)(c):a(c)}function a(c){return c===41?s(c):un(t,o,l,"resourceDestination","resourceDestinationLiteral","resourceDestinationLiteralMarker","resourceDestinationRaw","resourceDestinationString",32)(c)}function o(c){return O(c)?St(t,u)(c):s(c)}function l(c){return n(c)}function u(c){return c===34||c===39||c===40?cn(t,m,n,"resourceTitle","resourceTitleMarker","resourceTitleString")(c):s(c)}function m(c){return O(c)?St(t,s)(c):s(c)}function s(c){return c===41?(t.enter("resourceMarker"),t.consume(c),t.exit("resourceMarker"),t.exit("resource"),e):n(c)}}function ji(t,e,n){let r=this;return i;function i(l){return sn.call(r,t,a,o,"reference","referenceMarker","referenceString")(l)}function a(l){return r.parser.defined.includes(Y(r.sliceSerialize(r.events[r.events.length-1][1]).slice(1,-1)))?e(l):n(l)}function o(l){return n(l)}}function Wi(t,e,n){return r;function r(a){return t.enter("reference"),t.enter("referenceMarker"),t.consume(a),t.exit("referenceMarker"),i}function i(a){return a===93?(t.enter("referenceMarker"),t.consume(a),t.exit("referenceMarker"),t.exit("reference"),e):n(a)}}var On={name:"labelStartImage",resolveAll:Ct.resolveAll,tokenize:Ui};function Ui(t,e,n){let r=this,i;return a;function a(u){return t.enter("labelImage"),t.enter("labelImageMarker"),t.consume(u),t.exit("labelImageMarker"),o}function o(u){return u===91?(t.enter("labelMarker"),t.consume(u),t.exit("labelMarker"),i=t.exit("labelImage"),l):n(u)}function l(u){return u===94&&"_hiddenFootnoteSupport"in r.parser.constructs?n(u):(r._labelStarts=r._labelStarts||[],r._labelStarts.push(i),e(u))}}var Bn={name:"labelStartLink",resolveAll:Ct.resolveAll,tokenize:$i};function $i(t,e,n){let r=this,i;return a;function a(l){return t.enter("labelLink"),t.enter("labelMarker"),t.consume(l),t.exit("labelMarker"),i=t.exit("labelLink"),o}function o(l){return l===94&&"_hiddenFootnoteSupport"in r.parser.constructs?n(l):(r._labelStarts=r._labelStarts||[],r._labelStarts.push(i),e(l))}}var $t={name:"lineEnding",tokenize:Qi};function Qi(t,e){return n;function n(r){return t.enter("lineEnding"),t.consume(r),t.exit("lineEnding"),M(t,e,"linePrefix")}}var Et={name:"thematicBreak",tokenize:Zi};function Zi(t,e,n){let r=0,i;return a;function a(m){return t.enter("thematicBreak"),o(m)}function o(m){return i=m,l(m)}function l(m){return m===i?(t.enter("thematicBreakSequence"),u(m)):r>=3&&(m===null||E(m))?(t.exit("thematicBreak"),e(m)):n(m)}function u(m){return m===i?(t.consume(m),r++,u):(t.exit("thematicBreakSequence"),A(m)?M(t,l,"whitespace")(m):l(m))}}var G={continuation:{tokenize:Ki},exit:to,name:"list",tokenize:Xi},Yi={partial:!0,tokenize:no},Gi={partial:!0,tokenize:Ji};function Xi(t,e,n){let r=this,i=r.events[r.events.length-1],a=i&&i[1].type==="linePrefix"?i[2].sliceSerialize(i[1],!0).length:0,o=0;return l;function l(h){let x=r.containerState.type||(h===42||h===43||h===45?"listUnordered":"listOrdered");if(x==="listUnordered"?!r.containerState.marker||h===r.containerState.marker:Ht(h)){if(r.containerState.type||(r.containerState.type=x,t.enter(x,{_container:!0})),x==="listUnordered")return t.enter("listItemPrefix"),h===42||h===45?t.check(Et,n,m)(h):m(h);if(!r.interrupt||h===49)return t.enter("listItemPrefix"),t.enter("listItemValue"),u(h)}return n(h)}function u(h){return Ht(h)&&++o<10?(t.consume(h),u):(!r.interrupt||o<2)&&(r.containerState.marker?h===r.containerState.marker:h===41||h===46)?(t.exit("listItemValue"),m(h)):n(h)}function m(h){return t.enter("listItemMarker"),t.consume(h),t.exit("listItemMarker"),r.containerState.marker=r.containerState.marker||h,t.check(lt,r.interrupt?n:s,t.attempt(Yi,f,c))}function s(h){return r.containerState.initialBlankLine=!0,a++,f(h)}function c(h){return A(h)?(t.enter("listItemPrefixWhitespace"),t.consume(h),t.exit("listItemPrefixWhitespace"),f):n(h)}function f(h){return r.containerState.size=a+r.sliceSerialize(t.exit("listItemPrefix"),!0).length,e(h)}}function Ki(t,e,n){let r=this;return r.containerState._closeFlow=void 0,t.check(lt,i,a);function i(l){return r.containerState.furtherBlankLines=r.containerState.furtherBlankLines||r.containerState.initialBlankLine,M(t,e,"listItemIndent",r.containerState.size+1)(l)}function a(l){return r.containerState.furtherBlankLines||!A(l)?(r.containerState.furtherBlankLines=void 0,r.containerState.initialBlankLine=void 0,o(l)):(r.containerState.furtherBlankLines=void 0,r.containerState.initialBlankLine=void 0,t.attempt(Gi,e,o)(l))}function o(l){return r.containerState._closeFlow=!0,r.interrupt=void 0,M(t,t.attempt(G,e,n),"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(l)}}function Ji(t,e,n){let r=this;return M(t,i,"listItemIndent",r.containerState.size+1);function i(a){let o=r.events[r.events.length-1];return o&&o[1].type==="listItemIndent"&&o[2].sliceSerialize(o[1],!0).length===r.containerState.size?e(a):n(a)}}function to(t){t.exit(this.containerState.type)}function no(t,e,n){let r=this;return M(t,i,"listItemPrefixWhitespace",r.parser.constructs.disable.null.includes("codeIndented")?void 0:5);function i(a){let o=r.events[r.events.length-1];return!A(a)&&o&&o[1].type==="listItemPrefixWhitespace"?e(a):n(a)}}var mn={name:"setextUnderline",resolveTo:eo,tokenize:ro};function eo(t,e){let n=new pt,r=t.length,i,a,o;for(;r--;)if(t[r][0]==="enter"){if(t[r][1].type==="content"){i=r;break}t[r][1].type==="paragraph"&&(a=r)}else t[r][1].type==="content"&&n.add(r,1,[]),!o&&t[r][1].type==="definition"&&(o=r);let l={type:"setextHeading",start:{...t[i][1].start},end:{...t[t.length-1][1].end}};return t[a][1].type="setextHeadingText",o?(n.add(a,0,[["enter",l,e]]),n.add(o+1,0,[["exit",t[i][1],e]]),t[i][1].end={...t[o][1].end}):t[i][1]=l,n.add(t.length,0,[["exit",l,e]]),n.consume(t),t}function ro(t,e,n){let r=this,i;return a;function a(m){let s=r.events.length,c;for(;s--;)if(r.events[s][1].type!=="lineEnding"&&r.events[s][1].type!=="linePrefix"&&r.events[s][1].type!=="content"){c=r.events[s][1].type==="paragraph";break}return!r.parser.lazy[r.now().line]&&(r.interrupt||c)?(t.enter("setextHeadingLine"),i=m,o(m)):n(m)}function o(m){return t.enter("setextHeadingLineSequence"),l(m)}function l(m){return m===i?(t.consume(m),l):(t.exit("setextHeadingLineSequence"),A(m)?M(t,u,"lineSuffix")(m):u(m))}function u(m){return m===null||E(m)?(t.exit("setextHeadingLine"),e(m)):n(m)}}var He={tokenize:io};function io(t){let e=this,n=t.attempt(lt,r,t.attempt(this.parser.constructs.flowInitial,i,M(t,t.attempt(this.parser.constructs.flow,i,t.attempt(zn,i)),"linePrefix")));return n;function r(a){if(a===null){t.consume(a);return}return t.enter("lineEndingBlank"),t.consume(a),t.exit("lineEndingBlank"),e.currentConstruct=void 0,n}function i(a){if(a===null){t.consume(a);return}return t.enter("lineEnding"),t.consume(a),t.exit("lineEnding"),e.currentConstruct=void 0,n}}var Ve={resolveAll:$e()},je=Ue("string"),We=Ue("text");function Ue(t){return{resolveAll:$e(t==="text"?oo:void 0),tokenize:e};function e(n){let r=this,i=this.parser.constructs[t],a=n.attempt(i,o,l);return o;function o(s){return m(s)?a(s):l(s)}function l(s){if(s===null){n.consume(s);return}return n.enter("data"),n.consume(s),u}function u(s){return m(s)?(n.exit("data"),a(s)):(n.consume(s),u)}function m(s){if(s===null)return!0;let c=i[s],f=-1;if(c)for(;++f<c.length;){let h=c[f];if(!h.previous||h.previous.call(r,r.previous))return!0}return!1}}}function $e(t){return e;function e(n,r){let i=-1,a;for(;++i<=n.length;)a===void 0?n[i]&&n[i][1].type==="data"&&(a=i,i++):(!n[i]||n[i][1].type!=="data")&&(i!==a+2&&(n[a][1].end=n[i-1][1].end,n.splice(a+2,i-a-2),i=a+2),a=void 0);return t?t(n,r):n}}function oo(t,e){let n=new pt,r=0;for(;++r<=t.length;)if((r===t.length||t[r][1].type==="lineEnding")&&t[r-1][1].type==="data"){let i=t[r-1][1],a=e.sliceStream(i),o=a.length,l=-1,u=0,m;for(;o--;){let s=a[o];if(typeof s=="string"){for(l=s.length;s.charCodeAt(l-1)===32;)u++,l--;if(l)break;l=-1}else if(s===-2)m=!0,u++;else if(s!==-1){o++;break}}if(e._contentTypeTextTrailing&&r===t.length&&(u=0),u){let s={type:r===t.length||m||u<2?"lineSuffix":"hardBreakTrailing",start:{_bufferIndex:o?l:i.start._bufferIndex+l,_index:i.start._index+o,line:i.end.line,column:i.end.column-u,offset:i.end.offset-u},end:{...i.end}};i.end={...s.start},i.start.offset===i.end.offset?Object.assign(i,s):n.add(r,0,[["enter",s,e],["exit",s,e]])}r++}return n.consume(t),t}var Nn={};Ce(Nn,{attentionMarkers:()=>fo,contentInitial:()=>lo,disable:()=>po,document:()=>ao,flow:()=>so,flowInitial:()=>uo,insideSpan:()=>ho,string:()=>co,text:()=>mo});var ao={42:G,43:G,45:G,48:G,49:G,50:G,51:G,52:G,53:G,54:G,55:G,56:G,57:G,62:nn},lo={91:Mn},uo={[-2]:Wt,[-1]:Wt,32:Wt},so={35:Dn,42:Et,45:[mn,Et],60:Rn,61:mn,95:Et,96:on,126:on},co={38:rn,92:en},mo={[-5]:$t,[-4]:$t,[-3]:$t,33:On,38:rn,42:Vt,60:[In,_n],91:Bn,92:[Ln,en],93:Ct,95:Vt,96:An},ho={null:[Vt,Ve]},fo={null:[42,95]},po={null:[]};function Qe(t,e,n){let r={_bufferIndex:-1,_index:0,line:n&&n.line||1,column:n&&n.column||1,offset:n&&n.offset||0},i={},a=[],o=[],l=[],u=!0,m={attempt:v(T),check:v(N),consume:P,enter:L,exit:b,interrupt:v(N,{interrupt:!0})},s={code:null,containerState:{},defineSkip:w,events:[],now:y,parser:t,previous:null,sliceSerialize:x,sliceStream:I,write:h},c=e.tokenize.call(s,m),f;return e.resolveAll&&a.push(e),s;function h(z){return o=X(o,z),S(),o[o.length-1]!==null?[]:(d(e,0),s.events=dt(a,s.events,s),s.events)}function x(z,B){return xo(I(z),B)}function I(z){return go(o,z)}function y(){let{_bufferIndex:z,_index:B,line:_,column:j,offset:W}=r;return{_bufferIndex:z,_index:B,line:_,column:j,offset:W}}function w(z){i[z.line]=z.column,H()}function S(){for(;r._index<o.length;){let z=o[r._index];if(typeof z=="string"){let B=r._index;for(r._bufferIndex<0&&(r._bufferIndex=0);r._index===B&&r._bufferIndex<z.length;)C(z.charCodeAt(r._bufferIndex))}else C(z)}}function C(z){u=void 0,f=z,c=c(z)}function P(z){E(z)?(r.line++,r.column=1,r.offset+=z===-3?2:1,H()):z!==-1&&(r.column++,r.offset++),r._bufferIndex<0?r._index++:(r._bufferIndex++,r._bufferIndex===o[r._index].length&&(r._bufferIndex=-1,r._index++)),s.previous=z,u=!0}function L(z,B){let _=B||{};return _.type=z,_.start=y(),s.events.push(["enter",_,s]),l.push(_),_}function b(z){let B=l.pop();return B.end=y(),s.events.push(["exit",B,s]),B}function T(z,B){d(z,B.from)}function N(z,B){B.restore()}function v(z,B){return _;function _(j,W,rt){let it,p,et,mt;return Array.isArray(j)?tt(j):"tokenize"in j?tt([j]):g(j);function g(Z){return Bt;function Bt(ht){let zt=ht!==null&&Z[ht],bt=ht!==null&&Z.null,Sn=[...Array.isArray(zt)?zt:zt?[zt]:[],...Array.isArray(bt)?bt:bt?[bt]:[]];return tt(Sn)(ht)}}function tt(Z){return it=Z,p=0,Z.length===0?rt:At(Z[p])}function At(Z){return Bt;function Bt(ht){return mt=q(),et=Z,Z.partial||(s.currentConstruct=Z),Z.name&&s.parser.constructs.disable.null.includes(Z.name)?Gt(ht):Z.tokenize.call(B?Object.assign(Object.create(s),B):s,m,Yt,Gt)(ht)}}function Yt(Z){return u=!0,z(et,mt),W}function Gt(Z){return u=!0,mt.restore(),++p<it.length?At(it[p]):rt}}}function d(z,B){z.resolveAll&&!a.includes(z)&&a.push(z),z.resolve&&Q(s.events,B,s.events.length-B,z.resolve(s.events.slice(B),s)),z.resolveTo&&(s.events=z.resolveTo(s.events,s))}function q(){let z=y(),B=s.previous,_=s.currentConstruct,j=s.events.length,W=Array.from(l);return{from:j,restore:rt};function rt(){r=z,s.previous=B,s.currentConstruct=_,s.events.length=j,l=W,H()}}function H(){r.line in i&&r.column<2&&(r.column=i[r.line],r.offset+=i[r.line]-1)}}function go(t,e){let n=e.start._index,r=e.start._bufferIndex,i=e.end._index,a=e.end._bufferIndex,o;if(n===i)o=[t[n].slice(r,a)];else{if(o=t.slice(n,i),r>-1){let l=o[0];typeof l=="string"?o[0]=l.slice(r):o.shift()}a>0&&o.push(t[i].slice(0,a))}return o}function xo(t,e){let n=-1,r=[],i;for(;++n<t.length;){let a=t[n],o;if(typeof a=="string")o=a;else switch(a){case-5:{o="\r";break}case-4:{o=`
`;break}case-3:{o=`\r
`;break}case-2:{o=e?" ":"	";break}case-1:{if(!e&&i)continue;o=" ";break}default:o=String.fromCharCode(a)}i=a===-2,r.push(o)}return r.join("")}function vn(t){let r={constructs:Jt([Nn,...(t||{}).extensions||[]]),content:i(_e),defined:[],document:i(Ne),flow:i(He),lazy:{},string:i(je),text:i(We)};return r;function i(a){return o;function o(l){return Qe(r,a,l)}}}function qn(t){for(;!ln(t););return t}var Ze=/[\0\t\n\r]/g;function Hn(){let t=1,e="",n=!0,r;return i;function i(a,o,l){a=e+(typeof a=="string"?a.toString():new TextDecoder(o||void 0).decode(a));let u=[],m=0;for(e="",n&&(a.charCodeAt(0)===65279&&m++,n=void 0);m<a.length;){Ze.lastIndex=m;let s=Ze.exec(a),c=s&&s.index!==void 0?s.index:a.length,f=a.charCodeAt(c);if(!s){e=a.slice(m);break}if(f===10&&m===c&&r)u.push(-3),r=void 0;else switch(r&&(u.push(-5),r=void 0),m<c&&(u.push(a.slice(m,c)),t+=c-m),f){case 0:{u.push(65533),t++;break}case 9:{let h=Math.ceil(t/4)*4;for(u.push(-2);t++<h;)u.push(-1);break}case 10:{u.push(-4),t=1;break}default:r=!0,t=1}m=c+1}return l&&(r&&u.push(-5),e&&u.push(e),u.push(null)),u}}var ko=/\\([!-/:-@[-`{-~])|&(#(?:\d{1,7}|x[\da-f]{1,6})|[\da-z]{1,31});/gi;function hn(t){return t.replace(ko,bo)}function bo(t,e,n){if(e)return e;if(n.charCodeAt(0)===35){let i=n.charCodeAt(1),a=i===120||i===88;return tn(n.slice(a?2:1),a?16:10)}return Lt(n)||t}function Pt(t){return!t||typeof t!="object"?"":"position"in t||"type"in t?Ye(t.position):"start"in t||"end"in t?Ye(t):"line"in t||"column"in t?Vn(t):""}function Vn(t){return Ge(t&&t.line)+":"+Ge(t&&t.column)}function Ye(t){return Vn(t&&t.start)+"-"+Vn(t&&t.end)}function Ge(t){return t&&typeof t=="number"?t:1}var Ke={}.hasOwnProperty;function jn(t,e,n){return e&&typeof e=="object"&&(n=e,e=void 0),wo(n)(qn(vn(n).document().write(Hn()(t,e,!0))))}function wo(t){let e={afterExit:[],beforeEnter:[],transforms:[],canContainEols:["emphasis","fragment","heading","paragraph","strong"],enter:{autolink:o(we),autolinkProtocol:d,autolinkEmail:d,atxHeading:o(de),blockQuote:o(zt),characterEscape:d,characterReference:d,codeFenced:o(bt),codeFencedFenceInfo:l,codeFencedFenceMeta:l,codeIndented:o(bt,l),codeText:o(Sn,l),codeTextData:d,data:d,codeFlowValue:d,definition:o(Lr),definitionDestinationString:l,definitionLabelString:l,definitionTitleString:l,emphasis:o(Dr),hardBreakEscape:o(ke),hardBreakTrailing:o(ke),htmlFlow:o(be,l),htmlFlowData:d,htmlText:o(be,l),htmlTextData:d,image:o(Pr),label:l,link:o(we),listItem:o(Rr),listItemValue:h,listOrdered:o(ye,f),listUnordered:o(ye),paragraph:o(_r),reference:tt,referenceString:l,resourceDestinationString:l,resourceTitleString:l,setextHeading:o(de),strong:o(Or),thematicBreak:o(Nr)},exit:{atxHeading:m(),atxHeadingSequence:b,autolink:m(),autolinkEmail:ht,autolinkProtocol:Bt,blockQuote:m(),characterEscapeValue:q,characterReferenceMarkerHexadecimal:Yt,characterReferenceMarkerNumeric:Yt,characterReferenceValue:Gt,characterReference:Z,codeFenced:m(w),codeFencedFence:y,codeFencedFenceInfo:x,codeFencedFenceMeta:I,codeFlowValue:q,codeIndented:m(S),codeText:m(j),codeTextData:q,data:q,definition:m(),definitionDestinationString:L,definitionLabelString:C,definitionTitleString:P,emphasis:m(),hardBreakEscape:m(z),hardBreakTrailing:m(z),htmlFlow:m(B),htmlFlowData:q,htmlText:m(_),htmlTextData:q,image:m(rt),label:p,labelText:it,lineEnding:H,link:m(W),listItem:m(),listOrdered:m(),listUnordered:m(),paragraph:m(),referenceString:At,resourceDestinationString:et,resourceTitleString:mt,resource:g,setextHeading:m(v),setextHeadingLineSequence:N,setextHeadingText:T,strong:m(),thematicBreak:m()}};Je(e,(t||{}).mdastExtensions||[]);let n={};return r;function r(k){let F={type:"root",children:[],position:void 0},D={stack:[F],tokenStack:[],config:e,enter:u,exit:s,buffer:l,resume:c,data:n},R=[],K=[],V=-1;for(;++V<k.length;)if(K.push(k[V]),k[V][1].type==="listOrdered"||k[V][1].type==="listUnordered")if(k[V][0]==="enter")R.push(K.length-1);else{let J=R.pop();a(K,J)}for(k=K,V=-1;++V<k.length;){let J=e[k[V][0]];k[V][0]==="enter"&&e.beforeEnter.length>0&&i(e.beforeEnter,{...D,sliceSerialize:k[V][2].sliceSerialize},k[V][1]),Ke.call(J,k[V][1].type)&&J[k[V][1].type].call({...D,sliceSerialize:k[V][2].sliceSerialize},k[V][1]),k[V][0]==="exit"&&e.afterExit.length>0&&i(e.afterExit,{...D,sliceSerialize:k[V][2].sliceSerialize},k[V][1])}if(D.tokenStack.length>0){let J=D.tokenStack[D.tokenStack.length-1];(J[1]||Xe).call(D,void 0,J[0])}for(F.position={start:kt(k.length>0?k[0][1].start:{line:1,column:1,offset:0}),end:kt(k.length>0?k[k.length-2][1].end:{line:1,column:1,offset:0})},V=-1;++V<e.transforms.length;)F=e.transforms[V](F)||F;return F}function i(k,F,D){let R=-1;for(;++R<k.length;)k[R].call(F,D)}function a(k,F){let D=k.length-1,R=F-1,K=-1,V=!1,J,ot,Nt,vt,qt=[];for(;++R<=D;){let nt=k[R];switch(nt[1].type){case"listUnordered":case"listOrdered":case"blockQuote":{nt[0]==="enter"?K++:K--,vt=void 0;break}case"lineEndingBlank":{nt[0]==="enter"&&(J&&!vt&&!K&&!Nt&&(Nt=R),vt=void 0);break}case"linePrefix":case"listItemValue":case"listItemMarker":case"listItemPrefix":case"listItemPrefixWhitespace":break;default:vt=void 0}if(!K&&nt[0]==="enter"&&nt[1].type==="listItemPrefix"||K===-1&&nt[0]==="exit"&&(nt[1].type==="listUnordered"||nt[1].type==="listOrdered")){if(J){let Mt=R;for(ot=void 0;Mt--;){let ft=k[Mt];if(ft[1].type==="lineEnding"||ft[1].type==="lineEndingBlank"){if(ft[0]==="exit")continue;ot&&(k[ot][1].type="lineEndingBlank",V=!0),ft[1].type="lineEnding",ot=Mt}else if(!(ft[1].type==="linePrefix"||ft[1].type==="blockQuotePrefix"||ft[1].type==="blockQuotePrefixWhitespace"||ft[1].type==="blockQuoteMarker"||ft[1].type==="listItemIndent"))break}Nt&&(!ot||Nt<ot)&&(J._spread=!0),J.end=Object.assign({},ot?k[ot][1].start:nt[1].end),qt.push({at:ot||R,event:["exit",J,nt[2]]})}if(nt[1].type==="listItemPrefix"){let Mt={type:"listItem",_spread:!1,start:Object.assign({},nt[1].start),end:void 0};J=Mt,qt.push({at:R,event:["enter",Mt,nt[2]]}),Nt=void 0,vt=!0}}}let Se=k.splice(F),Cn=0;for(R=-1;++R<Se.length;){for(;Cn<qt.length&&qt[Cn].at===F+R;)k.push(qt[Cn++].event);k.push(Se[R])}k[F][1]._spread=V}function o(k,F){return D;function D(R){u.call(this,k(R),R),F&&F.call(this,R)}}function l(){this.stack.push({type:"fragment",children:[]})}function u(k,F,D){this.stack[this.stack.length-1].children.push(k),this.stack.push(k),this.tokenStack.push([F,D||void 0]),k.position={start:kt(F.start),end:void 0}}function m(k){return F;function F(D){k&&k.call(this,D),s.call(this,D)}}function s(k,F){let D=this.stack.pop(),R=this.tokenStack.pop();if(!R)throw new Error("Cannot close `"+k.type+"` ("+Pt({start:k.start,end:k.end})+"): it\u2019s not open");R[0].type!==k.type&&(F?F.call(this,k,R[0]):(R[1]||Xe).call(this,k,R[0])),D.position.end=kt(k.end)}function c(){return Fn(this.stack.pop())}function f(){this.data.expectingFirstListItemValue=!0}function h(k){if(this.data.expectingFirstListItemValue){let F=this.stack[this.stack.length-2];F.start=Number.parseInt(this.sliceSerialize(k),10),this.data.expectingFirstListItemValue=void 0}}function x(){let k=this.resume(),F=this.stack[this.stack.length-1];F.lang=k}function I(){let k=this.resume(),F=this.stack[this.stack.length-1];F.meta=k}function y(){this.data.flowCodeInside||(this.buffer(),this.data.flowCodeInside=!0)}function w(){let k=this.resume(),F=this.stack[this.stack.length-1];F.value=k.replace(/^(\r?\n|\r)|(\r?\n|\r)$/g,""),this.data.flowCodeInside=void 0}function S(){let k=this.resume(),F=this.stack[this.stack.length-1];F.value=k.replace(/(\r?\n|\r)$/g,"")}function C(k){let F=this.resume(),D=this.stack[this.stack.length-1];D.label=F,D.identifier=Y(this.sliceSerialize(k)).toLowerCase()}function P(){let k=this.resume(),F=this.stack[this.stack.length-1];F.title=k}function L(){let k=this.resume(),F=this.stack[this.stack.length-1];F.url=k}function b(k){let F=this.stack[this.stack.length-1];if(!F.depth){let D=this.sliceSerialize(k).length;F.depth=D}}function T(){this.data.setextHeadingSlurpLineEnding=!0}function N(k){let F=this.stack[this.stack.length-1];F.depth=this.sliceSerialize(k).codePointAt(0)===61?1:2}function v(){this.data.setextHeadingSlurpLineEnding=void 0}function d(k){let D=this.stack[this.stack.length-1].children,R=D[D.length-1];(!R||R.type!=="text")&&(R=Br(),R.position={start:kt(k.start),end:void 0},D.push(R)),this.stack.push(R)}function q(k){let F=this.stack.pop();F.value+=this.sliceSerialize(k),F.position.end=kt(k.end)}function H(k){let F=this.stack[this.stack.length-1];if(this.data.atHardBreak){let D=F.children[F.children.length-1];D.position.end=kt(k.end),this.data.atHardBreak=void 0;return}!this.data.setextHeadingSlurpLineEnding&&e.canContainEols.includes(F.type)&&(d.call(this,k),q.call(this,k))}function z(){this.data.atHardBreak=!0}function B(){let k=this.resume(),F=this.stack[this.stack.length-1];F.value=k}function _(){let k=this.resume(),F=this.stack[this.stack.length-1];F.value=k}function j(){let k=this.resume(),F=this.stack[this.stack.length-1];F.value=k}function W(){let k=this.stack[this.stack.length-1];if(this.data.inReference){let F=this.data.referenceType||"shortcut";k.type+="Reference",k.referenceType=F,delete k.url,delete k.title}else delete k.identifier,delete k.label;this.data.referenceType=void 0}function rt(){let k=this.stack[this.stack.length-1];if(this.data.inReference){let F=this.data.referenceType||"shortcut";k.type+="Reference",k.referenceType=F,delete k.url,delete k.title}else delete k.identifier,delete k.label;this.data.referenceType=void 0}function it(k){let F=this.sliceSerialize(k),D=this.stack[this.stack.length-2];D.label=hn(F),D.identifier=Y(F).toLowerCase()}function p(){let k=this.stack[this.stack.length-1],F=this.resume(),D=this.stack[this.stack.length-1];if(this.data.inReference=!0,D.type==="link"){let R=k.children;D.children=R}else D.alt=F}function et(){let k=this.resume(),F=this.stack[this.stack.length-1];F.url=k}function mt(){let k=this.resume(),F=this.stack[this.stack.length-1];F.title=k}function g(){this.data.inReference=void 0}function tt(){this.data.referenceType="collapsed"}function At(k){let F=this.resume(),D=this.stack[this.stack.length-1];D.label=F,D.identifier=Y(this.sliceSerialize(k)).toLowerCase(),this.data.referenceType="full"}function Yt(k){this.data.characterReferenceType=k.type}function Gt(k){let F=this.sliceSerialize(k),D=this.data.characterReferenceType,R;D?(R=tn(F,D==="characterReferenceMarkerNumeric"?10:16),this.data.characterReferenceType=void 0):R=Lt(F);let K=this.stack[this.stack.length-1];K.value+=R}function Z(k){let F=this.stack.pop();F.position.end=kt(k.end)}function Bt(k){q.call(this,k);let F=this.stack[this.stack.length-1];F.url=this.sliceSerialize(k)}function ht(k){q.call(this,k);let F=this.stack[this.stack.length-1];F.url="mailto:"+this.sliceSerialize(k)}function zt(){return{type:"blockquote",children:[],position:void 0}}function bt(){return{type:"code",lang:null,meta:null,value:"",position:void 0}}function Sn(){return{type:"inlineCode",value:"",position:void 0}}function Lr(){return{type:"definition",identifier:"",label:null,title:null,url:"",position:void 0}}function Dr(){return{type:"emphasis",children:[],position:void 0}}function de(){return{type:"heading",depth:0,children:[],position:void 0}}function ke(){return{type:"break",position:void 0}}function be(){return{type:"html",value:"",position:void 0}}function Pr(){return{type:"image",title:null,url:"",alt:null,position:void 0}}function we(){return{type:"link",title:null,url:"",children:[],position:void 0}}function ye(k){return{type:"list",ordered:k.type==="listOrdered",start:null,spread:k._spread,children:[],position:void 0}}function Rr(k){return{type:"listItem",spread:k._spread,checked:null,children:[],position:void 0}}function _r(){return{type:"paragraph",children:[],position:void 0}}function Or(){return{type:"strong",children:[],position:void 0}}function Br(){return{type:"text",value:"",position:void 0}}function Nr(){return{type:"thematicBreak",position:void 0}}}function kt(t){return{line:t.line,column:t.column,offset:t.offset}}function Je(t,e){let n=-1;for(;++n<e.length;){let r=e[n];Array.isArray(r)?Je(t,r):yo(t,r)}}function yo(t,e){let n;for(n in e)if(Ke.call(e,n))switch(n){case"canContainEols":{let r=e[n];r&&t[n].push(...r);break}case"transforms":{let r=e[n];r&&t[n].push(...r);break}case"afterExit":case"beforeEnter":{let r=e[n];r&&t[n].push(r);break}case"enter":case"exit":{let r=e[n];r&&Object.assign(t[n],r);break}}}function Xe(t,e){throw t?new Error("Cannot close `"+t.type+"` ("+Pt({start:t.start,end:t.end})+"): a different token (`"+e.type+"`, "+Pt({start:e.start,end:e.end})+") is open"):new Error("Cannot close document, a token (`"+e.type+"`, "+Pt({start:e.start,end:e.end})+") is still open")}var So={tokenize:Io,partial:!0},tr={tokenize:Ao,partial:!0},nr={tokenize:zo,partial:!0},er={tokenize:Mo,partial:!0},Co={tokenize:Lo,partial:!0},rr={name:"wwwAutolink",tokenize:Fo,previous:or},ir={name:"protocolAutolink",tokenize:To,previous:ar},gt={name:"emailAutolink",tokenize:Eo,previous:lr},ut={};function Un(){return{text:ut}}var Ft=48;for(;Ft<123;)ut[Ft]=gt,Ft++,Ft===58?Ft=65:Ft===91&&(Ft=97);ut[43]=gt;ut[45]=gt;ut[46]=gt;ut[95]=gt;ut[72]=[gt,ir];ut[104]=[gt,ir];ut[87]=[gt,rr];ut[119]=[gt,rr];function Eo(t,e,n){let r=this,i,a;return o;function o(c){return!Wn(c)||!lr.call(r,r.previous)||$n(r.events)?n(c):(t.enter("literalAutolink"),t.enter("literalAutolinkEmail"),l(c))}function l(c){return Wn(c)?(t.consume(c),l):c===64?(t.consume(c),u):n(c)}function u(c){return c===46?t.check(Co,s,m)(c):c===45||c===95||$(c)?(a=!0,t.consume(c),u):s(c)}function m(c){return t.consume(c),i=!0,u}function s(c){return a&&i&&U(r.previous)?(t.exit("literalAutolinkEmail"),t.exit("literalAutolink"),e(c)):n(c)}}function Fo(t,e,n){let r=this;return i;function i(o){return o!==87&&o!==119||!or.call(r,r.previous)||$n(r.events)?n(o):(t.enter("literalAutolink"),t.enter("literalAutolinkWww"),t.check(So,t.attempt(tr,t.attempt(nr,a),n),n)(o))}function a(o){return t.exit("literalAutolinkWww"),t.exit("literalAutolink"),e(o)}}function To(t,e,n){let r=this,i="",a=!1;return o;function o(c){return(c===72||c===104)&&ar.call(r,r.previous)&&!$n(r.events)?(t.enter("literalAutolink"),t.enter("literalAutolinkHttp"),i+=String.fromCodePoint(c),t.consume(c),l):n(c)}function l(c){if(U(c)&&i.length<5)return i+=String.fromCodePoint(c),t.consume(c),l;if(c===58){let f=i.toLowerCase();if(f==="http"||f==="https")return t.consume(c),u}return n(c)}function u(c){return c===47?(t.consume(c),a?m:(a=!0,u)):n(c)}function m(c){return c===null||wt(c)||O(c)||at(c)||yt(c)?n(c):t.attempt(tr,t.attempt(nr,s),n)(c)}function s(c){return t.exit("literalAutolinkHttp"),t.exit("literalAutolink"),e(c)}}function Io(t,e,n){let r=0;return i;function i(o){return(o===87||o===119)&&r<3?(r++,t.consume(o),i):o===46&&r===3?(t.consume(o),a):n(o)}function a(o){return o===null?n(o):e(o)}}function Ao(t,e,n){let r,i,a;return o;function o(m){return m===46||m===95?t.check(er,u,l)(m):m===null||O(m)||at(m)||m!==45&&yt(m)?u(m):(a=!0,t.consume(m),o)}function l(m){return m===95?r=!0:(i=r,r=void 0),t.consume(m),o}function u(m){return i||r||!a?n(m):e(m)}}function zo(t,e){let n=0,r=0;return i;function i(o){return o===40?(n++,t.consume(o),i):o===41&&r<n?a(o):o===33||o===34||o===38||o===39||o===41||o===42||o===44||o===46||o===58||o===59||o===60||o===63||o===93||o===95||o===126?t.check(er,e,a)(o):o===null||O(o)||at(o)?e(o):(t.consume(o),i)}function a(o){return o===41&&r++,t.consume(o),i}}function Mo(t,e,n){return r;function r(l){return l===33||l===34||l===39||l===41||l===42||l===44||l===46||l===58||l===59||l===63||l===95||l===126?(t.consume(l),r):l===38?(t.consume(l),a):l===93?(t.consume(l),i):l===60||l===null||O(l)||at(l)?e(l):n(l)}function i(l){return l===null||l===40||l===91||O(l)||at(l)?e(l):r(l)}function a(l){return U(l)?o(l):n(l)}function o(l){return l===59?(t.consume(l),r):U(l)?(t.consume(l),o):n(l)}}function Lo(t,e,n){return r;function r(a){return t.consume(a),i}function i(a){return $(a)?n(a):e(a)}}function or(t){return t===null||t===40||t===42||t===95||t===91||t===93||t===126||O(t)}function ar(t){return!U(t)}function lr(t){return!(t===47||Wn(t))}function Wn(t){return t===43||t===45||t===46||t===95||$(t)}function $n(t){let e=t.length,n=!1;for(;e--;){let r=t[e][1];if((r.type==="labelLink"||r.type==="labelImage")&&!r._balanced){n=!0;break}if(r._gfmAutolinkLiteralWalkedInto){n=!1;break}}return t.length>0&&!n&&(t[t.length-1][1]._gfmAutolinkLiteralWalkedInto=!0),n}var Do={tokenize:vo,partial:!0};function Qn(){return{document:{91:{name:"gfmFootnoteDefinition",tokenize:Oo,continuation:{tokenize:Bo},exit:No}},text:{91:{name:"gfmFootnoteCall",tokenize:_o},93:{name:"gfmPotentialFootnoteCall",add:"after",tokenize:Po,resolveTo:Ro}}}}function Po(t,e,n){let r=this,i=r.events.length,a=r.parser.gfmFootnotes||(r.parser.gfmFootnotes=[]),o;for(;i--;){let u=r.events[i][1];if(u.type==="labelImage"){o=u;break}if(u.type==="gfmFootnoteCall"||u.type==="labelLink"||u.type==="label"||u.type==="image"||u.type==="link")break}return l;function l(u){if(!o||!o._balanced)return n(u);let m=Y(r.sliceSerialize({start:o.end,end:r.now()}));return m.codePointAt(0)!==94||!a.includes(m.slice(1))?n(u):(t.enter("gfmFootnoteCallLabelMarker"),t.consume(u),t.exit("gfmFootnoteCallLabelMarker"),e(u))}}function Ro(t,e){let n=t.length,r;for(;n--;)if(t[n][1].type==="labelImage"&&t[n][0]==="enter"){r=t[n][1];break}t[n+1][1].type="data",t[n+3][1].type="gfmFootnoteCallLabelMarker";let i={type:"gfmFootnoteCall",start:Object.assign({},t[n+3][1].start),end:Object.assign({},t[t.length-1][1].end)},a={type:"gfmFootnoteCallMarker",start:Object.assign({},t[n+3][1].end),end:Object.assign({},t[n+3][1].end)};a.end.column++,a.end.offset++,a.end._bufferIndex++;let o={type:"gfmFootnoteCallString",start:Object.assign({},a.end),end:Object.assign({},t[t.length-1][1].start)},l={type:"chunkString",contentType:"string",start:Object.assign({},o.start),end:Object.assign({},o.end)},u=[t[n+1],t[n+2],["enter",i,e],t[n+3],t[n+4],["enter",a,e],["exit",a,e],["enter",o,e],["enter",l,e],["exit",l,e],["exit",o,e],t[t.length-2],t[t.length-1],["exit",i,e]];return t.splice(n,t.length-n+1,...u),t}function _o(t,e,n){let r=this,i=r.parser.gfmFootnotes||(r.parser.gfmFootnotes=[]),a=0,o;return l;function l(c){return t.enter("gfmFootnoteCall"),t.enter("gfmFootnoteCallLabelMarker"),t.consume(c),t.exit("gfmFootnoteCallLabelMarker"),u}function u(c){return c!==94?n(c):(t.enter("gfmFootnoteCallMarker"),t.consume(c),t.exit("gfmFootnoteCallMarker"),t.enter("gfmFootnoteCallString"),t.enter("chunkString").contentType="string",m)}function m(c){if(a>999||c===93&&!o||c===null||c===91||O(c))return n(c);if(c===93){t.exit("chunkString");let f=t.exit("gfmFootnoteCallString");return i.includes(Y(r.sliceSerialize(f)))?(t.enter("gfmFootnoteCallLabelMarker"),t.consume(c),t.exit("gfmFootnoteCallLabelMarker"),t.exit("gfmFootnoteCall"),e):n(c)}return O(c)||(o=!0),a++,t.consume(c),c===92?s:m}function s(c){return c===91||c===92||c===93?(t.consume(c),a++,m):m(c)}}function Oo(t,e,n){let r=this,i=r.parser.gfmFootnotes||(r.parser.gfmFootnotes=[]),a,o=0,l;return u;function u(x){return t.enter("gfmFootnoteDefinition")._container=!0,t.enter("gfmFootnoteDefinitionLabel"),t.enter("gfmFootnoteDefinitionLabelMarker"),t.consume(x),t.exit("gfmFootnoteDefinitionLabelMarker"),m}function m(x){return x===94?(t.enter("gfmFootnoteDefinitionMarker"),t.consume(x),t.exit("gfmFootnoteDefinitionMarker"),t.enter("gfmFootnoteDefinitionLabelString"),t.enter("chunkString").contentType="string",s):n(x)}function s(x){if(o>999||x===93&&!l||x===null||x===91||O(x))return n(x);if(x===93){t.exit("chunkString");let I=t.exit("gfmFootnoteDefinitionLabelString");return a=Y(r.sliceSerialize(I)),t.enter("gfmFootnoteDefinitionLabelMarker"),t.consume(x),t.exit("gfmFootnoteDefinitionLabelMarker"),t.exit("gfmFootnoteDefinitionLabel"),f}return O(x)||(l=!0),o++,t.consume(x),x===92?c:s}function c(x){return x===91||x===92||x===93?(t.consume(x),o++,s):s(x)}function f(x){return x===58?(t.enter("definitionMarker"),t.consume(x),t.exit("definitionMarker"),i.includes(a)||i.push(a),M(t,h,"gfmFootnoteDefinitionWhitespace")):n(x)}function h(x){return e(x)}}function Bo(t,e,n){return t.check(lt,e,t.attempt(Do,e,n))}function No(t){t.exit("gfmFootnoteDefinition")}function vo(t,e,n){let r=this;return M(t,i,"gfmFootnoteDefinitionIndent",5);function i(a){let o=r.events[r.events.length-1];return o&&o[1].type==="gfmFootnoteDefinitionIndent"&&o[2].sliceSerialize(o[1],!0).length===4?e(a):n(a)}}function Zn(t){let n=(t||{}).singleTilde,r={name:"strikethrough",tokenize:a,resolveAll:i};return n==null&&(n=!0),{text:{126:r},insideSpan:{null:[r]},attentionMarkers:{null:[126]}};function i(o,l){let u=-1;for(;++u<o.length;)if(o[u][0]==="enter"&&o[u][1].type==="strikethroughSequenceTemporary"&&o[u][1]._close){let m=u;for(;m--;)if(o[m][0]==="exit"&&o[m][1].type==="strikethroughSequenceTemporary"&&o[m][1]._open&&o[u][1].end.offset-o[u][1].start.offset===o[m][1].end.offset-o[m][1].start.offset){o[u][1].type="strikethroughSequence",o[m][1].type="strikethroughSequence";let s={type:"strikethrough",start:Object.assign({},o[m][1].start),end:Object.assign({},o[u][1].end)},c={type:"strikethroughText",start:Object.assign({},o[m][1].end),end:Object.assign({},o[u][1].start)},f=[["enter",s,l],["enter",o[m][1],l],["exit",o[m][1],l],["enter",c,l]],h=l.parser.constructs.insideSpan.null;h&&Q(f,f.length,0,dt(h,o.slice(m+1,u),l)),Q(f,f.length,0,[["exit",c,l],["enter",o[u][1],l],["exit",o[u][1],l],["exit",s,l]]),Q(o,m-1,u-m+3,f),u=m+f.length-2;break}}for(u=-1;++u<o.length;)o[u][1].type==="strikethroughSequenceTemporary"&&(o[u][1].type="data");return o}function a(o,l,u){let m=this.previous,s=this.events,c=0;return f;function f(x){return m===126&&s[s.length-1][1].type!=="characterEscape"?u(x):(o.enter("strikethroughSequenceTemporary"),h(x))}function h(x){let I=Dt(m);if(x===126)return c>1?u(x):(o.consume(x),c++,h);if(c<2&&!n)return u(x);let y=o.exit("strikethroughSequenceTemporary"),w=Dt(x);return y._open=!w||w===2&&!!I,y._close=!I||I===2&&!!w,l(x)}}}var fn=class{constructor(){this.map=[],this.index=new Map}add(e,n,r){qo(this,e,n,r)}consume(e){if(this.map.sort(function(a,o){return a[0]-o[0]}),this.map.length===0)return;let n=this.map.length,r=[];for(;n>0;)n-=1,r.push(e.slice(this.map[n][0]+this.map[n][1]),this.map[n][2]),e.length=this.map[n][0];r.push(e.slice()),e.length=0;let i=r.pop();for(;i;){for(let a of i)e.push(a);i=r.pop()}this.map.length=0,this.index.clear()}};function qo(t,e,n,r){if(n===0&&r.length===0)return;let i=t.index.get(e);if(i){i[1]+=n,i[2].push(...r);return}let a=[e,n,r];t.map.push(a),t.index.set(e,a)}function ur(t,e){let n=!1,r=[];for(;e<t.length;){let i=t[e];if(n){if(i[0]==="enter")i[1].type==="tableContent"&&r.push(t[e+1][1].type==="tableDelimiterMarker"?"left":"none");else if(i[1].type==="tableContent"){if(t[e-1][1].type==="tableDelimiterMarker"){let a=r.length-1;r[a]=r[a]==="left"?"center":"right"}}else if(i[1].type==="tableDelimiterRow")break}else i[0]==="enter"&&i[1].type==="tableDelimiterRow"&&(n=!0);e+=1}return r}function Yn(){return{flow:{null:{name:"table",tokenize:Ho,resolveAll:Vo}}}}function Ho(t,e,n){let r=this,i=0,a=0,o;return l;function l(d){let q=r.events.length-1;for(;q>-1;){let{type:B}=r.events[q][1];if(B==="lineEnding"||B==="linePrefix")q--;else break}let H=q>-1?r.events[q][1].type:null,z=H==="tableHead"||H==="tableRow"?b:u;return z===b&&r.parser.lazy[r.now().line]?n(d):z(d)}function u(d){return t.enter("tableHead"),t.enter("tableRow"),m(d)}function m(d){return d===124||(o=!0,a+=1),s(d)}function s(d){return d===null?n(d):E(d)?a>1?(a=0,r.interrupt=!0,t.exit("tableRow"),t.enter("lineEnding"),t.consume(d),t.exit("lineEnding"),h):n(d):A(d)?M(t,s,"whitespace")(d):(a+=1,o&&(o=!1,i+=1),d===124?(t.enter("tableCellDivider"),t.consume(d),t.exit("tableCellDivider"),o=!0,s):(t.enter("data"),c(d)))}function c(d){return d===null||d===124||O(d)?(t.exit("data"),s(d)):(t.consume(d),d===92?f:c)}function f(d){return d===92||d===124?(t.consume(d),c):c(d)}function h(d){return r.interrupt=!1,r.parser.lazy[r.now().line]?n(d):(t.enter("tableDelimiterRow"),o=!1,A(d)?M(t,x,"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(d):x(d))}function x(d){return d===45||d===58?y(d):d===124?(o=!0,t.enter("tableCellDivider"),t.consume(d),t.exit("tableCellDivider"),I):L(d)}function I(d){return A(d)?M(t,y,"whitespace")(d):y(d)}function y(d){return d===58?(a+=1,o=!0,t.enter("tableDelimiterMarker"),t.consume(d),t.exit("tableDelimiterMarker"),w):d===45?(a+=1,w(d)):d===null||E(d)?P(d):L(d)}function w(d){return d===45?(t.enter("tableDelimiterFiller"),S(d)):L(d)}function S(d){return d===45?(t.consume(d),S):d===58?(o=!0,t.exit("tableDelimiterFiller"),t.enter("tableDelimiterMarker"),t.consume(d),t.exit("tableDelimiterMarker"),C):(t.exit("tableDelimiterFiller"),C(d))}function C(d){return A(d)?M(t,P,"whitespace")(d):P(d)}function P(d){return d===124?x(d):d===null||E(d)?!o||i!==a?L(d):(t.exit("tableDelimiterRow"),t.exit("tableHead"),e(d)):L(d)}function L(d){return n(d)}function b(d){return t.enter("tableRow"),T(d)}function T(d){return d===124?(t.enter("tableCellDivider"),t.consume(d),t.exit("tableCellDivider"),T):d===null||E(d)?(t.exit("tableRow"),e(d)):A(d)?M(t,T,"whitespace")(d):(t.enter("data"),N(d))}function N(d){return d===null||d===124||O(d)?(t.exit("data"),T(d)):(t.consume(d),d===92?v:N)}function v(d){return d===92||d===124?(t.consume(d),N):N(d)}}function Vo(t,e){let n=-1,r=!0,i=0,a=[0,0,0,0],o=[0,0,0,0],l=!1,u=0,m,s,c,f=new fn;for(;++n<t.length;){let h=t[n],x=h[1];h[0]==="enter"?x.type==="tableHead"?(l=!1,u!==0&&(sr(f,e,u,m,s),s=void 0,u=0),m={type:"table",start:Object.assign({},x.start),end:Object.assign({},x.end)},f.add(n,0,[["enter",m,e]])):x.type==="tableRow"||x.type==="tableDelimiterRow"?(r=!0,c=void 0,a=[0,0,0,0],o=[0,n+1,0,0],l&&(l=!1,s={type:"tableBody",start:Object.assign({},x.start),end:Object.assign({},x.end)},f.add(n,0,[["enter",s,e]])),i=x.type==="tableDelimiterRow"?2:s?3:1):i&&(x.type==="data"||x.type==="tableDelimiterMarker"||x.type==="tableDelimiterFiller")?(r=!1,o[2]===0&&(a[1]!==0&&(o[0]=o[1],c=pn(f,e,a,i,void 0,c),a=[0,0,0,0]),o[2]=n)):x.type==="tableCellDivider"&&(r?r=!1:(a[1]!==0&&(o[0]=o[1],c=pn(f,e,a,i,void 0,c)),a=o,o=[a[1],n,0,0])):x.type==="tableHead"?(l=!0,u=n):x.type==="tableRow"||x.type==="tableDelimiterRow"?(u=n,a[1]!==0?(o[0]=o[1],c=pn(f,e,a,i,n,c)):o[1]!==0&&(c=pn(f,e,o,i,n,c)),i=0):i&&(x.type==="data"||x.type==="tableDelimiterMarker"||x.type==="tableDelimiterFiller")&&(o[3]=n)}for(u!==0&&sr(f,e,u,m,s),f.consume(e.events),n=-1;++n<e.events.length;){let h=e.events[n];h[0]==="enter"&&h[1].type==="table"&&(h[1]._align=ur(e.events,n))}return t}function pn(t,e,n,r,i,a){let o=r===1?"tableHeader":r===2?"tableDelimiter":"tableData",l="tableContent";n[0]!==0&&(a.end=Object.assign({},Rt(e.events,n[0])),t.add(n[0],0,[["exit",a,e]]));let u=Rt(e.events,n[1]);if(a={type:o,start:Object.assign({},u),end:Object.assign({},u)},t.add(n[1],0,[["enter",a,e]]),n[2]!==0){let m=Rt(e.events,n[2]),s=Rt(e.events,n[3]),c={type:l,start:Object.assign({},m),end:Object.assign({},s)};if(t.add(n[2],0,[["enter",c,e]]),r!==2){let f=e.events[n[2]],h=e.events[n[3]];if(f[1].end=Object.assign({},h[1].end),f[1].type="chunkText",f[1].contentType="text",n[3]>n[2]+1){let x=n[2]+1,I=n[3]-n[2]-1;t.add(x,I,[])}}t.add(n[3]+1,0,[["exit",c,e]])}return i!==void 0&&(a.end=Object.assign({},Rt(e.events,i)),t.add(i,0,[["exit",a,e]]),a=void 0),a}function sr(t,e,n,r,i){let a=[],o=Rt(e.events,n);i&&(i.end=Object.assign({},o),a.push(["exit",i,e])),r.end=Object.assign({},o),a.push(["exit",r,e]),t.add(n+1,0,a)}function Rt(t,e){let n=t[e],r=n[0]==="enter"?"start":"end";return n[1][r]}var jo={name:"tasklistCheck",tokenize:Wo};function Gn(){return{text:{91:jo}}}function Wo(t,e,n){let r=this;return i;function i(u){return r.previous!==null||!r._gfmTasklistFirstContentOfListItem?n(u):(t.enter("taskListCheck"),t.enter("taskListCheckMarker"),t.consume(u),t.exit("taskListCheckMarker"),a)}function a(u){return O(u)?(t.enter("taskListCheckValueUnchecked"),t.consume(u),t.exit("taskListCheckValueUnchecked"),o):u===88||u===120?(t.enter("taskListCheckValueChecked"),t.consume(u),t.exit("taskListCheckValueChecked"),o):n(u)}function o(u){return u===93?(t.enter("taskListCheckMarker"),t.consume(u),t.exit("taskListCheckMarker"),t.exit("taskListCheck"),l):n(u)}function l(u){return E(u)?e(u):A(u)?t.check({tokenize:Uo},e,n)(u):n(u)}}function Uo(t,e,n){return M(t,r,"whitespace");function r(i){return i===null?n(i):e(i)}}function cr(t){return Jt([Un(),Qn(),Zn(t),Yn(),Gn()])}function Xn(t,e){let n=String(t);if(typeof e!="string")throw new TypeError("Expected character");let r=0,i=n.indexOf(e);for(;i!==-1;)r++,i=n.indexOf(e,i+e.length);return r}function gn(t){if(typeof t!="string")throw new TypeError("Expected a string");return t.replace(/[|\\{}()[\]^$+*?.]/g,"\\$&").replace(/-/g,"\\x2d")}var _t=(function(t){if(t==null)return Yo;if(typeof t=="function")return xn(t);if(typeof t=="object")return Array.isArray(t)?$o(t):Qo(t);if(typeof t=="string")return Zo(t);throw new Error("Expected function, string, or object as test")});function $o(t){let e=[],n=-1;for(;++n<t.length;)e[n]=_t(t[n]);return xn(r);function r(...i){let a=-1;for(;++a<e.length;)if(e[a].apply(this,i))return!0;return!1}}function Qo(t){let e=t;return xn(n);function n(r){let i=r,a;for(a in t)if(i[a]!==e[a])return!1;return!0}}function Zo(t){return xn(e);function e(n){return n&&n.type===t}}function xn(t){return e;function e(n,r,i){return!!(Go(n)&&t.call(this,n,typeof r=="number"?r:void 0,i||void 0))}}function Yo(){return!0}function Go(t){return t!==null&&typeof t=="object"&&"type"in t}var mr=[],hr=!0,Kn=!1,fr="skip";function Jn(t,e,n,r){let i;typeof e=="function"&&typeof n!="function"?(r=n,n=e):i=e;let a=_t(i),o=r?-1:1;l(t,void 0,[])();function l(u,m,s){let c=u&&typeof u=="object"?u:{};if(typeof c.type=="string"){let h=typeof c.tagName=="string"?c.tagName:typeof c.name=="string"?c.name:void 0;Object.defineProperty(f,"name",{value:"node ("+(u.type+(h?"<"+h+">":""))+")"})}return f;function f(){let h=mr,x,I,y;if((!e||a(u,m,s[s.length-1]||void 0))&&(h=Xo(n(u,s)),h[0]===Kn))return h;if("children"in u&&u.children){let w=u;if(w.children&&h[0]!==fr)for(I=(r?w.children.length:-1)+o,y=s.concat(w);I>-1&&I<w.children.length;){let S=w.children[I];if(x=l(S,I,y)(),x[0]===Kn)return x;I=typeof x[1]=="number"?x[1]:I+o}}return h}}}function Xo(t){return Array.isArray(t)?t:typeof t=="number"?[hr,t]:t==null?mr:[t]}function te(t,e,n){let i=_t((n||{}).ignore||[]),a=Ko(e),o=-1;for(;++o<a.length;)Jn(t,"text",l);function l(m,s){let c=-1,f;for(;++c<s.length;){let h=s[c],x=f?f.children:void 0;if(i(h,x?x.indexOf(h):void 0,f))return;f=h}if(f)return u(m,s)}function u(m,s){let c=s[s.length-1],f=a[o][0],h=a[o][1],x=0,y=c.children.indexOf(m),w=!1,S=[];f.lastIndex=0;let C=f.exec(m.value);for(;C;){let L=C.index,b={index:C.index,input:C.input,stack:[...s,m]},T=h(...C,b);if(typeof T=="string"&&(T=T.length>0?{type:"text",value:T}:void 0),T===!1)f.lastIndex=L+1;else{if(x!==L&&P({type:"text",value:m.value.slice(x,L)}),Array.isArray(T))for(let N of T)P(N);else T&&P(T);x=L+C[0].length,w=!0}if(!f.global)break;C=f.exec(m.value)}return w?(x<m.value.length&&P({type:"text",value:m.value.slice(x)}),c.children.splice(y,1,...S)):S=[m],y+S.length;function P(L){let b=S[S.length-1];b&&b.type==="text"&&L.type==="text"?b.value+=L.value:S.push(L)}}}function Ko(t){if(!Array.isArray(t))throw new TypeError("Expected find and replace tuple or list of tuples");let e=[],n=!t[0]||Array.isArray(t[0])?t:[t],r=-1;for(;++r<n.length;){let i=n[r];e.push([Jo(i[0]),ta(i[1])])}return e}function Jo(t){return typeof t=="string"?new RegExp(gn(t),"g"):t}function ta(t){return typeof t=="function"?t:function(){return t}}function ee(){return{transforms:[aa],enter:{literalAutolink:na,literalAutolinkEmail:ne,literalAutolinkHttp:ne,literalAutolinkWww:ne},exit:{literalAutolink:oa,literalAutolinkEmail:ia,literalAutolinkHttp:ea,literalAutolinkWww:ra}}}function na(t){this.enter({type:"link",title:null,url:"",children:[]},t)}function ne(t){this.config.enter.autolinkProtocol.call(this,t)}function ea(t){this.config.exit.autolinkProtocol.call(this,t)}function ra(t){this.config.exit.data.call(this,t);let e=this.stack[this.stack.length-1];e.type,e.url="http://"+this.sliceSerialize(t)}function ia(t){this.config.exit.autolinkEmail.call(this,t)}function oa(t){this.exit(t)}function aa(t){te(t,[[/(https?:\/\/|www(?=\.))([-.\w]+)([^ \t\r\n]*)/gi,la],[/(?<=^|\s|\p{P}|\p{S})([-.\w+]+)@([-\w]+(?:\.[-\w]+)+)/gu,ua]],{ignore:["link","linkReference"]})}function la(t,e,n,r,i){let a="";if(!pr(i)||(/^w/i.test(e)&&(n=e+n,e="",a="http://"),!sa(n)))return!1;let o=ca(n+r);if(!o[0])return!1;let l={type:"link",title:null,url:a+e+o[0],children:[{type:"text",value:e+o[0]}]};return o[1]?[l,{type:"text",value:o[1]}]:l}function ua(t,e,n,r){return!pr(r,!0)||/[-\d_]$/.test(n)?!1:{type:"link",title:null,url:"mailto:"+e+"@"+n,children:[{type:"text",value:e+"@"+n}]}}function sa(t){let e=t.split(".");return!(e.length<2||e[e.length-1]&&(/_/.test(e[e.length-1])||!/[a-zA-Z\d]/.test(e[e.length-1]))||e[e.length-2]&&(/_/.test(e[e.length-2])||!/[a-zA-Z\d]/.test(e[e.length-2])))}function ca(t){let e=/[!"&'),.:;<>?\]}]+$/.exec(t);if(!e)return[t,void 0];t=t.slice(0,e.index);let n=e[0],r=n.indexOf(")"),i=Xn(t,"("),a=Xn(t,")");for(;r!==-1&&i>a;)t+=n.slice(0,r+1),n=n.slice(r+1),r=n.indexOf(")"),a++;return[t,n]}function pr(t,e){let n=t.input.charCodeAt(t.index-1);return(t.index===0||at(n)||yt(n))&&(!e||n!==47)}ya.peek=wa;function ha(){this.buffer()}function fa(t){this.enter({type:"footnoteReference",identifier:"",label:""},t)}function pa(){this.buffer()}function ga(t){this.enter({type:"footnoteDefinition",identifier:"",label:"",children:[]},t)}function xa(t){let e=this.resume(),n=this.stack[this.stack.length-1];n.type,n.identifier=Y(this.sliceSerialize(t)).toLowerCase(),n.label=e}function da(t){this.exit(t)}function ka(t){let e=this.resume(),n=this.stack[this.stack.length-1];n.type,n.identifier=Y(this.sliceSerialize(t)).toLowerCase(),n.label=e}function ba(t){this.exit(t)}function wa(){return"["}function ya(t,e,n,r){let i=n.createTracker(r),a=i.move("[^"),o=n.enter("footnoteReference"),l=n.enter("reference");return a+=i.move(n.safe(n.associationId(t),{after:"]",before:a})),l(),o(),a+=i.move("]"),a}function re(){return{enter:{gfmFootnoteCallString:ha,gfmFootnoteCall:fa,gfmFootnoteDefinitionLabelString:pa,gfmFootnoteDefinition:ga},exit:{gfmFootnoteCallString:xa,gfmFootnoteCall:da,gfmFootnoteDefinitionLabelString:ka,gfmFootnoteDefinition:ba}}}gr.attention=Fa;gr.peek=Ta;function ie(){return{canContainEols:["delete"],enter:{strikethrough:Ca},exit:{strikethrough:Ea}}}function Ca(t){this.enter({type:"delete",children:[],position:void 0},t)}function Ea(t){this.exit(t)}function gr(t,e,n,r){let i=n.createTracker(r),a=n.stack.includes("strikethrough")?"~":"~~",o=n.enter("strikethrough"),l=i.move(a);return l+=n.containerPhrasing(t,{...i.current(),before:l,after:"~"}),l+=i.move(a),o(),l}function Fa(){return{construct:"strikethrough",markers:["~"],sizes:[2,1]}}function Ta(){return"~"}function ae(){return{enter:{table:Aa,tableData:xr,tableHeader:xr,tableRow:Ma},exit:{codeText:La,table:za,tableData:oe,tableHeader:oe,tableRow:oe}}}function Aa(t){let e=t._align;this.enter({type:"table",align:e.map(function(n){return n==="none"?null:n}),children:[]},t),this.data.inTable=!0}function za(t){this.exit(t),this.data.inTable=void 0}function Ma(t){this.enter({type:"tableRow",children:[]},t)}function oe(t){this.exit(t)}function xr(t){this.enter({type:"tableCell",children:[]},t)}function La(t){let e=this.resume();this.data.inTable&&(e=e.replace(/\\([\\|])/g,Da));let n=this.stack[this.stack.length-1];n.type,n.value=e,this.exit(t)}function Da(t,e){return e==="|"?e:t}function le(){return{exit:{taskListCheckValueChecked:dr,taskListCheckValueUnchecked:dr,paragraph:Ra}}}function dr(t){let e=this.stack[this.stack.length-2];e.type,e.checked=t.type==="taskListCheckValueChecked"}function Ra(t){let e=this.stack[this.stack.length-2];if(e&&e.type==="listItem"&&typeof e.checked=="boolean"){let n=this.stack[this.stack.length-1];n.type;let r=n.children[0];if(r&&r.type==="text"){let i=e.children,a=-1,o;for(;++a<i.length;){let l=i[a];if(l.type==="paragraph"){o=l;break}}o===n&&(r.value=r.value.slice(1),r.value.length===0?n.children.shift():n.position&&r.position&&typeof r.position.start.offset=="number"&&(r.position.start.column++,r.position.start.offset++,n.position.start=Object.assign({},r.position.start)))}}this.exit(t)}function ue(){return[ee(),re(),ie(),ae(),le()]}var br={tokenize:Oa,concrete:!0,name:"mathFlow"},kr={tokenize:Ba,partial:!0};function Oa(t,e,n){let r=this,i=r.events[r.events.length-1],a=i&&i[1].type==="linePrefix"?i[2].sliceSerialize(i[1],!0).length:0,o=0;return l;function l(S){return t.enter("mathFlow"),t.enter("mathFlowFence"),t.enter("mathFlowFenceSequence"),u(S)}function u(S){return S===36?(t.consume(S),o++,u):o<2?n(S):(t.exit("mathFlowFenceSequence"),M(t,m,"whitespace")(S))}function m(S){return S===null||E(S)?c(S):(t.enter("mathFlowFenceMeta"),t.enter("chunkString",{contentType:"string"}),s(S))}function s(S){return S===null||E(S)?(t.exit("chunkString"),t.exit("mathFlowFenceMeta"),c(S)):S===36?n(S):(t.consume(S),s)}function c(S){return t.exit("mathFlowFence"),r.interrupt?e(S):t.attempt(kr,f,y)(S)}function f(S){return t.attempt({tokenize:w,partial:!0},y,h)(S)}function h(S){return(a?M(t,x,"linePrefix",a+1):x)(S)}function x(S){return S===null?y(S):E(S)?t.attempt(kr,f,y)(S):(t.enter("mathFlowValue"),I(S))}function I(S){return S===null||E(S)?(t.exit("mathFlowValue"),x(S)):(t.consume(S),I)}function y(S){return t.exit("mathFlow"),e(S)}function w(S,C,P){let L=0;return M(S,b,"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4);function b(v){return S.enter("mathFlowFence"),S.enter("mathFlowFenceSequence"),T(v)}function T(v){return v===36?(L++,S.consume(v),T):L<o?P(v):(S.exit("mathFlowFenceSequence"),M(S,N,"whitespace")(v))}function N(v){return v===null||E(v)?(S.exit("mathFlowFence"),C(v)):P(v)}}}function Ba(t,e,n){let r=this;return i;function i(o){return o===null?e(o):(t.enter("lineEnding"),t.consume(o),t.exit("lineEnding"),a)}function a(o){return r.parser.lazy[r.now().line]?n(o):e(o)}}function wr(t){let n=(t||{}).singleDollarTextMath;return n==null&&(n=!0),{tokenize:r,resolve:Na,previous:va,name:"mathText"};function r(i,a,o){let l=this,u=0,m,s;return c;function c(y){return i.enter("mathText"),i.enter("mathTextSequence"),f(y)}function f(y){return y===36?(i.consume(y),u++,f):u<2&&!n?o(y):(i.exit("mathTextSequence"),h(y))}function h(y){return y===null?o(y):y===36?(s=i.enter("mathTextSequence"),m=0,I(y)):y===32?(i.enter("space"),i.consume(y),i.exit("space"),h):E(y)?(i.enter("lineEnding"),i.consume(y),i.exit("lineEnding"),h):(i.enter("mathTextData"),x(y))}function x(y){return y===null||y===32||y===36||E(y)?(i.exit("mathTextData"),h(y)):(i.consume(y),x)}function I(y){return y===36?(i.consume(y),m++,I):m===u?(i.exit("mathTextSequence"),i.exit("mathText"),a(y)):(s.type="mathTextData",x(y))}}}function Na(t){let e=t.length-4,n=3,r,i;if((t[n][1].type==="lineEnding"||t[n][1].type==="space")&&(t[e][1].type==="lineEnding"||t[e][1].type==="space")){for(r=n;++r<e;)if(t[r][1].type==="mathTextData"){t[e][1].type="mathTextPadding",t[n][1].type="mathTextPadding",n+=2,e-=2;break}}for(r=n-1,e++;++r<=e;)i===void 0?r!==e&&t[r][1].type!=="lineEnding"&&(i=r):(r===e||t[r][1].type==="lineEnding")&&(t[i][1].type="mathTextData",r!==i+2&&(t[i][1].end=t[r-1][1].end,t.splice(i+2,r-i-2),e-=r-i-2,r=i+2),i=void 0);return t}function va(t){return t!==36||this.events[this.events.length-1][1].type==="characterEscape"}function se(t){return{flow:{36:br},text:{36:wr(t)}}}function ce(){return{enter:{mathFlow:t,mathFlowFenceMeta:e,mathText:a},exit:{mathFlow:i,mathFlowFence:r,mathFlowFenceMeta:n,mathFlowValue:l,mathText:o,mathTextData:l}};function t(u){let m={type:"element",tagName:"code",properties:{className:["language-math","math-display"]},children:[]};this.enter({type:"math",meta:null,value:"",data:{hName:"pre",hChildren:[m]}},u)}function e(){this.buffer()}function n(){let u=this.resume(),m=this.stack[this.stack.length-1];m.type,m.meta=u}function r(){this.data.mathFlowInside||(this.buffer(),this.data.mathFlowInside=!0)}function i(u){let m=this.resume().replace(/^(\r?\n|\r)|(\r?\n|\r)$/g,""),s=this.stack[this.stack.length-1];s.type,this.exit(u),s.value=m;let c=s.data.hChildren[0];c.type,c.tagName,c.children.push({type:"text",value:m}),this.data.mathFlowInside=void 0}function a(u){this.enter({type:"inlineMath",value:"",data:{hName:"code",hProperties:{className:["language-math","math-inline"]},hChildren:[]}},u),this.buffer()}function o(u){let m=this.resume(),s=this.stack[this.stack.length-1];s.type,this.exit(u),s.value=m,s.data.hChildren.push({type:"text",value:m})}function l(u){this.config.enter.data.call(this,u),this.config.exit.data.call(this,u)}}var Sr=Ur(yr(),1),Qt=Object.assign(Tt(Error),{eval:Tt(EvalError),range:Tt(RangeError),reference:Tt(ReferenceError),syntax:Tt(SyntaxError),type:Tt(TypeError),uri:Tt(URIError)});function Tt(t){return e.displayName=t.displayName||t.name,e;function e(n,...r){let i=n&&(0,Sr.default)(n,...r);return new t(i)}}var dn={}.hasOwnProperty,Cr={yaml:"-",toml:"+"};function Zt(t){let e=[],n=-1,r=Array.isArray(t)?t:t?[t]:["yaml"];for(;++n<r.length;)e[n]=qa(r[n]);return e}function qa(t){let e=t;if(typeof e=="string"){if(!dn.call(Cr,e))throw Qt("Missing matter definition for `%s`",e);e={type:e,marker:Cr[e]}}else if(typeof e!="object")throw Qt("Expected matter to be an object, not `%j`",e);if(!dn.call(e,"type"))throw Qt("Missing `type` in matter `%j`",e);if(!dn.call(e,"fence")&&!dn.call(e,"marker"))throw Qt("Missing `marker` or `fence` in matter `%j`",e);return e}function fe(t){let e=Zt(t),n={},r=-1;for(;++r<e.length;){let i=e[r],a=he(i,"open").charCodeAt(0),o=Ha(i),l=n[a];Array.isArray(l)?l.push(o):n[a]=[o]}return{flow:n}}function Ha(t){let e=t.anywhere,n=t.type,r=n+"Fence",i=r+"Sequence",a=n+"Value",o={tokenize:s,partial:!0},l,u=0;return{tokenize:m,concrete:!0};function m(c,f,h){let x=this;return I;function I(T){let N=x.now();return N.column===1&&(N.line===1||e)&&(l=he(t,"open"),u=0,T===l.charCodeAt(u))?(c.enter(n),c.enter(r),c.enter(i),y(T)):h(T)}function y(T){return u===l.length?(c.exit(i),A(T)?(c.enter("whitespace"),w(T)):S(T)):T===l.charCodeAt(u++)?(c.consume(T),y):h(T)}function w(T){return A(T)?(c.consume(T),w):(c.exit("whitespace"),S(T))}function S(T){return E(T)?(c.exit(r),c.enter("lineEnding"),c.consume(T),c.exit("lineEnding"),l=he(t,"close"),u=0,c.attempt(o,b,C)):h(T)}function C(T){return T===null||E(T)?L(T):(c.enter(a),P(T))}function P(T){return T===null||E(T)?(c.exit(a),L(T)):(c.consume(T),P)}function L(T){return T===null?h(T):(c.enter("lineEnding"),c.consume(T),c.exit("lineEnding"),c.attempt(o,b,C))}function b(T){return c.exit(n),f(T)}}function s(c,f,h){let x=0;return I;function I(C){return C===l.charCodeAt(x)?(c.enter(r),c.enter(i),y(C)):h(C)}function y(C){return x===l.length?(c.exit(i),A(C)?(c.enter("whitespace"),w(C)):S(C)):C===l.charCodeAt(x++)?(c.consume(C),y):h(C)}function w(C){return A(C)?(c.consume(C),w):(c.exit("whitespace"),S(C))}function S(C){return C===null||E(C)?(c.exit(r),f(C)):h(C)}}}function he(t,e){return t.marker?Er(t.marker,e).repeat(3):Er(t.fence,e)}function Er(t,e){return typeof t=="string"?t:t[e]}function pe(t){let e=Zt(t),n={},r={},i=-1;for(;++i<e.length;){let a=e[i];n[a.type]=Va(a),r[a.type]=ja,r[a.type+"Value"]=Wa}return{enter:n,exit:r}}function Va(t){return e;function e(n){this.enter({type:t.type,value:""},n),this.buffer()}}function ja(t){let e=this.resume(),n=this.stack[this.stack.length-1];"value"in n,this.exit(t),n.value=e.replace(/^(\r?\n|\r)|(\r?\n|\r)$/g,"")}function Wa(t){this.config.enter.data.call(this,t),this.config.exit.data.call(this,t)}var Tr=(t,e)=>t.from<e.to&&e.from<t.to,Ua=t=>({from:t.position?.start.offset??0,to:t.position?.end.offset??0});function It(t){let e=jn(t,{extensions:[cr(),se(),fe(["yaml"])],mdastExtensions:[ue(),ce(),pe(["yaml"])]}),n=[],r=[],i=[],a=[];for(let s of t.matchAll(/%%[\s\S]*?(?:%%|$)/g)){let c={from:s.index,to:s.index+s[0].length};n.push(c),r.push(c)}let o=/!?\[\[[^\]\r\n]*(?:\](?!\])[^\]\r\n]*)*\]\]/g;for(let s of t.matchAll(o)){let c={from:s.index,to:s.index+s[0].length};n.push(c),r.push(c)}for(let s of t.matchAll(/(?:[A-Za-z][A-Za-z0-9+.-]*:\/\/|mailto:|www\.)[^\s<>\[\]]+/g))n.push({from:s.index,to:s.index+s[0].length});function l(s){let c=Ua(s);if(["code","inlineCode","math","inlineMath","yaml","definition","image","imageReference"].includes(s.type)){n.push(c);return}if(s.type==="html"){a.push({value:s.value,range:c}),n.push(c);return}if(s.type==="link"&&t[c.from]!=="["&&n.push(c),s.type==="text"){let f=t.slice(c.from,c.to),h="",x=new Map,I=/\\[!"#$%&'()*+,\-./:;<=>?@[\]\\^_`{|}~]|&(?:#[xX][0-9a-fA-F]+|#\d+|[A-Za-z][A-Za-z0-9]+);|\r\n|[\s\S]/g;for(let y of f.matchAll(I)){let w=c.from+y.index;x.set(w,h.length),h+=hn(y[0]).replace(/\r\n?/g,`
`),x.set(w+y[0].length,h.length),(y[0].startsWith("&")||y[0].startsWith("\\")&&y[0].length===2)&&n.push({from:w,to:w+y[0].length})}h===s.value&&i.push({...c,value:h,boundaries:x});return}if("children"in s)for(let f of s.children)l(f)}l(e);let u=[];for(let s of a)for(let c of s.value.matchAll(/<\/?([A-Za-z][\w:-]*)\b[^>]*>/g)){let f=c[1].toLowerCase(),h=s.range.from+c.index,x=h+c[0].length;if(c[0].startsWith("</")){let I=u.map(y=>y.tag).lastIndexOf(f);I>=0&&(n.push({from:u[I].from,to:x}),u.splice(I))}else!c[0].endsWith("/>")&&!/^(?:area|base|br|col|embed|hr|img|input|link|meta|param|source|track|wbr)$/.test(f)&&u.push({tag:f,from:h})}for(let s of u)n.push({from:s.from,to:t.length});let m=[0];for(let s=0;s<t.length;s++)t[s]===`
`&&m.push(s+1);return{source:t,runs:i,protected:Fr(n),omitted:Fr(r),lineOffsets:m}}function kn(t,e){let n=[];for(let r of t.runs)for(let i of Ie(t.source.slice(r.from,r.to),e,r.from))$a(t.protected,i)||i.kind==="script"&&/[\p{L}\p{N}_\\^]/u.test(t.source[i.from-1]??"")||n.push(i);return n}function Ir(t,e){let n="",r=kn(t,e),i=[];for(let a of t.runs){let o=new Set;for(let u of t.omitted){if(!Tr(a,u))continue;let m=a.boundaries.get(Math.max(a.from,u.from)),s=a.boundaries.get(Math.min(a.to,u.to));if(m!==void 0&&s!==void 0)for(let c=m;c<s;c++)o.add(c)}let l=new Map;for(let u=0;u<=a.value.length;u++)l.set(u,n.length),u<a.value.length&&!o.has(u)&&!/\s/.test(a.value[u])&&(n+=a.value[u]);for(let u of r){if(u.from<a.from||u.to>a.to)continue;let m=a.boundaries.get(u.from),s=a.boundaries.get(u.to);m===void 0||s===void 0||i.push({match:u,from:l.get(m),to:l.get(s)})}}return{text:n,matches:i}}function Ar(t,e,n){let r=t.lineOffsets[e]??t.source.length,i=t.lineOffsets[n+1]??t.source.length;return{...t,runs:t.runs.filter(a=>a.from>=r&&a.to<=i)}}function Fr(t){let e=t.sort((r,i)=>r.from-i.from||r.to-i.to),n=[];for(let r of e){let i=n[n.length-1];i&&r.from<=i.to?i.to=Math.max(i.to,r.to):n.push({...r})}return n}function $a(t,e){let n=0,r=t.length;for(;n<r;){let i=n+r>>>1;t[i].to<=e.from?n=i+1:r=i}return n<t.length&&Tr(t[n],e)}var Ot=zr.StateEffect.define();function Qa(t,e){return e.some(n=>n.from<=t.to&&n.to>=t.from)}var ge=class extends st.WidgetType{constructor(n){super();this.match=n}eq(n){return this.match.source===n.match.source&&this.match.kind===n.match.kind}toDOM(n){return Kt(n.dom.ownerDocument,this.match)}ignoreEvent(){return!1}};function Mr(t,e,n){return st.ViewPlugin.fromClass(class{constructor(r){this.view=r;this.decorations=st.Decoration.none;this.composing=!1;this.destroyed=!1;n.add(r),this.analysis=It(r.state.doc.toString()),this.matches=kn(this.analysis,t()),this.build()}update(r){let i=r.transactions.some(a=>a.effects.some(o=>o.is(Ot)));r.docChanged&&(this.analysis=It(r.state.doc.toString())),(r.docChanged||i)&&(this.matches=kn(this.analysis,t())),(r.docChanged||i||r.selectionSet||r.viewportChanged||r.startState.field(bn.editorLivePreviewField,!1)!==r.state.field(bn.editorLivePreviewField,!1))&&this.build()}build(){if(!e()||!this.view.state.field(bn.editorLivePreviewField,!1)||this.composing||this.view.composing){this.decorations=st.Decoration.none;return}let r=[];for(let i of this.view.visibleRanges){let a=0,o=this.matches.length;for(;a<o;){let l=a+o>>>1;this.matches[l].to<=i.from?a=l+1:o=l}for(let l=a;l<this.matches.length&&this.matches[l].from<i.to;l++){let u=this.matches[l];u.from<i.from||u.to>i.to||Qa(u,this.view.state.selection.ranges)||r.push(st.Decoration.replace({widget:new ge(u),inclusive:!1}).range(u.from,u.to))}}this.decorations=st.Decoration.set(r,!0)}composition(r){this.composing=r,r?this.view.dispatch({effects:Ot.of()}):queueMicrotask(()=>{this.destroyed||this.view.dispatch({effects:Ot.of()})})}destroy(){this.destroyed=!0,this.decorations=st.Decoration.none,n.delete(this.view)}},{decorations:r=>r.decorations,eventHandlers:{compositionstart(){this.composition(!0)},compositionend(){this.composition(!1)}}})}var Za="pre,code,mjx-container,math,.math,.internal-link,.internal-embed,.frontmatter,.metadata-container,.footnotes,.easy-symbols,script,style,button,.heading-collapse-indicator,.list-collapse-indicator",wn=class{constructor(e,n){this.element=e;this.source=n;this.replacements=[]}restore(){for(let{rendered:e,original:n}of this.replacements)e.parentNode&&e.replaceWith(n);this.replacements=[]}render(e){this.restore();let n=Ir(typeof this.source=="string"?It(this.source):this.source,e);if(!n.matches.length)return!0;let r=this.element.ownerDocument,i=[],a="",o=r.createTreeWalker(this.element,4);for(let l=o.nextNode();l;l=o.nextNode())if(!l.parentElement?.closest(Za))for(let u=0;u<l.data.length;u++)/\s/.test(l.data[u])||(a+=l.data[u],i.push({node:l,offset:u}));if(a!==n.text)return!1;for(let l of n.matches.reverse()){let u=i[l.from],m=i[l.to-1];if(!u||!m||u.node.parentElement!==m.node.parentElement)continue;let s=r.createRange();if(s.setStart(u.node,u.offset),s.setEnd(m.node,m.offset+1),s.toString()!==l.match.source)continue;let c=s.extractContents(),f=Kt(r,l.match);s.insertNode(f),this.replacements.push({rendered:f,original:c})}return!0}};var yn=class extends ct.Plugin{constructor(){super(...arguments);this.settings={...En};this.enabled=!1;this.cache=new Map;this.views=new Set;this.reading=new Set}async onload(){this.settings=Te(await this.loadData()),this.enabled=!0,this.registerEditorExtension(Mr(()=>this.settings,()=>this.enabled,this.views)),this.registerMarkdownPostProcessor((n,r)=>{if(n.closest(".markdown-source-view"))return;let i=r.getSectionInfo(n);if(!i||!this.enabled)return;let a=this.cache.get(r.sourcePath);(!a||a.source!==i.text)&&(a=It(i.text),this.cache.size>=8&&this.cache.delete(this.cache.keys().next().value),this.cache.set(r.sourcePath,a));let o=new wn(n,Ar(a,i.lineStart,i.lineEnd));this.reading.add(o);let l=new ct.MarkdownRenderChild(n);l.register(()=>{o.restore(),this.reading.delete(o)}),r.addChild(l),o.render(this.settings)}),this.addSettingTab(new xe(this.app,this)),this.app.workspace.onLayoutReady(()=>{this.enabled&&this.rerenderPreviews()})}async changeSetting(n,r){this.settings={...this.settings,[n]:r},this.refresh(),await this.saveData(this.settings)}refresh(){for(let n of this.views)n.dispatch({effects:Ot.of()});for(let n of this.reading)n.render(this.settings)}rerenderPreviews(){this.app.workspace.iterateAllLeaves(n=>{n.view instanceof ct.MarkdownView&&n.view.previewMode.rerender(!0)})}onunload(){this.enabled=!1;for(let n of this.views)n.dispatch({effects:Ot.of()});for(let n of this.reading)n.restore();this.reading.clear(),this.cache.clear(),this.views.clear()}},xe=class extends ct.PluginSettingTab{constructor(n,r){super(n,r);this.plugin=r}display(){this.containerEl.empty();let n=[["arrows","Arrows","Show typed arrows as symbols, such as -> for \u2192 and <=> for \u21D4.","arrows"],["scripts","Subscripts & superscripts","Show x_i as x\u1D62 and x^2 as x\xB2. Use a single letter before the subscript or superscript.","subscripts--superscripts"],["operators","Math operators","Show comparisons and other operators as symbols, such as >= \u2192 \u2265 and != \u2192 \u2260. The input <= always means \u2264.","math-operators"],["latex","Symbols from commands","Show backslash commands as symbols, such as \\alpha \u2192 \u03B1 and \\infty \u2192 \u221E. Includes arrow and math operator commands.","symbols-from-commands"]];for(let[r,i,a,o]of n){let l=this.containerEl.ownerDocument,u=l.createDocumentFragment();u.append(a+" ");let m=l.createElement("a");m.textContent="View all supported shortcuts",m.href=`https://github.com/chaovven/obsidian-easy-symbols#${o}`,m.className="external-link",m.target="_blank",m.rel="noopener noreferrer",m.setAttribute("aria-label",`View all supported shortcuts: ${i}`),u.append(m),new ct.Setting(this.containerEl).setName(i).setDesc(u).addToggle(s=>{s.setValue(this.plugin.settings[r]).onChange(async c=>{await this.plugin.changeSetting(r,c)})})}}};

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
