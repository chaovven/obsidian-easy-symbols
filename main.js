"use strict";var Hr=Object.create;var Kt=Object.defineProperty;var Vr=Object.getOwnPropertyDescriptor;var jr=Object.getOwnPropertyNames;var Wr=Object.getPrototypeOf,Ur=Object.prototype.hasOwnProperty;var $r=(t,n)=>()=>{try{return n||t((n={exports:{}}).exports,n),n.exports}catch(e){throw n=0,e}},En=(t,n)=>{for(var e in n)Kt(t,e,{get:n[e],enumerable:!0})},Fn=(t,n,e,r)=>{if(n&&typeof n=="object"||typeof n=="function")for(let i of jr(n))!Ur.call(t,i)&&i!==e&&Kt(t,i,{get:()=>n[i],enumerable:!(r=Vr(n,i))||r.enumerable});return t};var Qr=(t,n,e)=>(e=t!=null?Hr(Wr(t)):{},Fn(n||!t||!t.__esModule?Kt(e,"default",{value:t,enumerable:!0}):e,t)),Zr=t=>Fn(Kt({},"__esModule",{value:!0}),t);var Sr=$r((df,fn)=>{(function(){var t;typeof fn<"u"?t=fn.exports=r:t=(function(){return this||(0,eval)("this")})(),t.format=r,t.vsprintf=e,typeof console<"u"&&typeof console.log=="function"&&(t.printf=n);function n(){console.log(r.apply(null,arguments))}function e(i,a){return r.apply(null,[i].concat(a))}function r(i){for(var a=1,o=[].slice.call(arguments),u=0,s=i.length,h="",l,c=!1,m,f,d=!1,I,y=function(){return o[a++]},w=function(){for(var S="";/\d/.test(i[u]);)S+=i[u++],l=i[u];return S.length>0?parseInt(S):null};u<s;++u)if(l=i[u],c)switch(c=!1,l=="."?(d=!1,l=i[++u]):l=="0"&&i[u+1]=="."?(d=!0,u+=2,l=i[u]):d=!0,I=w(),l){case"b":h+=parseInt(y(),10).toString(2);break;case"c":m=y(),typeof m=="string"||m instanceof String?h+=m:h+=String.fromCharCode(parseInt(m,10));break;case"d":h+=parseInt(y(),10);break;case"f":f=String(parseFloat(y()).toFixed(I||6)),h+=d?f:f.replace(/^0/,"");break;case"j":h+=JSON.stringify(y());break;case"o":h+="0"+parseInt(y(),10).toString(8);break;case"s":h+=y();break;case"x":h+="0x"+parseInt(y(),10).toString(16);break;case"X":h+="0x"+parseInt(y(),10).toString(16).toUpperCase();break;default:h+=l;break}else l==="%"?c=!0:h+=l;return h}})()});var Ga={};En(Ga,{default:()=>we});module.exports=Zr(Ga);var ct=require("obsidian");var Ee={scripts:!0,latex:!0,arrows:!0,operators:!0};function In(t){let n={...Ee};if(t&&typeof t=="object")for(let e of Object.keys(n))typeof t[e]=="boolean"&&(n[e]=t[e]);return n}var Yr={alpha:"\u03B1",beta:"\u03B2",gamma:"\u03B3",delta:"\u03B4",theta:"\u03B8",lambda:"\u03BB",mu:"\u03BC",sigma:"\u03C3",omega:"\u03C9",Delta:"\u0394",infty:"\u221E",emptyset:"\u2205",sum:"\u2211",partial:"\u2202",nabla:"\u2207",forall:"\u2200",exists:"\u2203",in:"\u2208",subset:"\u2282",land:"\u2227",wedge:"\u2227",lor:"\u2228",vee:"\u2228",rightarrow:"\u2192",leftarrow:"\u2190",uparrow:"\u2191",downarrow:"\u2193",leftrightarrow:"\u2194",longrightarrow:"\u27F6",longleftarrow:"\u27F5",longleftrightarrow:"\u27F7",Rightarrow:"\u21D2",Leftarrow:"\u21D0",Leftrightarrow:"\u21D4",geq:"\u2265",leq:"\u2264",neq:"\u2260",approx:"\u2248",pm:"\xB1",mp:"\u2213"},Tn={"->":"\u2192","<-":"\u2190","<->":"\u2194","-->":"\u27F6","<--":"\u27F5","<-->":"\u27F7","=>":"\u21D2","<=>":"\u21D4","^|":"\u2191","v|":"\u2193","|^":"\u2191","|v":"\u2193"},Gr={">=":"\u2265","<=":"\u2264","!=":"\u2260","~=":"\u2248","+-":"\xB1","-+":"\u2213"},Ce=/[\p{L}\p{N}_\\^]/u;function An(t,n,e=0){let r=[],i=0,a=(o,u)=>{r.push({from:e+i,to:e+i+o,source:t.slice(i,i+o),...u}),i+=o};for(;i<t.length;){let o=t.slice(i);if(t[i]==="\\"){let h=/^\\([A-Za-z]+)/.exec(o);if(h){let l=Yr[h[1]];n.latex&&l?a(h[0].length,{kind:"symbol",text:l}):i+=h[0].length}else i+=Math.min(2,o.length);continue}let u=/^(?:[\^v]\||\|[\^v])/.exec(o);if(u&&(u[0]!=="v|"||i===0||!Ce.test(t[i-1]))&&(u[0]!=="|v"||!Ce.test(t[i+2]??""))){n.arrows?a(2,{kind:"symbol",text:Tn[u[0]]}):i+=2;continue}if(n.scripts&&(i===0||!Ce.test(t[i-1]))){let h=/^(?:[A-Za-z](?=[_^])|[0-9]+(?=\^))/.exec(o)?.[0];if(h){let l=Xr(o,h);if(l){a(l.length,{kind:"script",text:h,sub:l.sub,sup:l.sup});continue}}}let s=/^[<>!=~+-]+/.exec(o);if(s){let h=(n.arrows?Tn[s[0]]:void 0)??(n.operators?Gr[s[0]]:void 0);h?a(s[0].length,{kind:"symbol",text:h}):i+=s[0].length;continue}i++}return r}function Xr(t,n){let e=/[A-Za-z]/.test(n),r={length:n.length},i=t[n.length];for(;i==="^"||e&&i==="_";){let a=i==="_"?"sub":"sup";if(r[a]!==void 0)break;let o=r.length+1,u,s;if(t[o]==="{"){if(u=t.indexOf("}",o),u<0||/[{\r\n]/.test(t.slice(o+1,u)))break;s=t.slice(o+1,u),u++}else{let h=i==="_"?"^":"_";for(u=o;u<t.length&&!/\s/.test(t[u])&&(!e||t[u]!==h||r.sub!==void 0||r.sup!==void 0);)u++;s=t.slice(o,u)}if(!s)break;r[a]=s,r.length=u,i=t[u]}return r.sub??r.sup?r:void 0}var Lr=require("@codemirror/state"),it=require("@codemirror/view"),Zt=require("obsidian");function Jt(t,n){let r=t.win.createSpan({cls:`easy-symbols easy-symbols-${n.kind}`,attr:{"data-source":n.source},text:n.text});return n.sub&&r.createEl("sub",{text:n.sub}),n.sup&&r.createEl("sup",{text:n.sup}),r}var Kr={};function Fe(t,n){let e=n||Kr,r=typeof e.includeImageAlt=="boolean"?e.includeImageAlt:!0,i=typeof e.includeHtml=="boolean"?e.includeHtml:!0;return Mn(t,r,i)}function Mn(t,n,e){if(Jr(t)){if("value"in t)return t.type==="html"&&!e?"":t.value;if(n&&"alt"in t&&t.alt)return t.alt;if("children"in t)return zn(t.children,n,e)}return Array.isArray(t)?zn(t,n,e):""}function zn(t,n,e){let r=[],i=-1;for(;++i<t.length;)r[i]=Mn(t[i],n,e);return r.join("")}function Jr(t){return!!(t&&typeof t=="object")}var Ln=document.createElement("i");function Lt(t){let n="&"+t+";";Ln.innerHTML=n;let e=Ln.textContent;return e.charCodeAt(e.length-1)===59&&t!=="semi"||e===n?!1:e}function Q(t,n,e,r){let i=t.length,a=0,o;if(n<0?n=-n>i?0:i+n:n=n>i?i:n,e=e>0?e:0,r.length<1e4)o=Array.from(r),o.unshift(n,e),t.splice(...o);else for(e&&t.splice(n,e);a<r.length;)o=r.slice(a,a+1e4),o.unshift(n,0),t.splice(...o),a+=1e4,n+=1e4}function X(t,n){return t.length>0?(Q(t,t.length,0,n),t):n}var Dn={}.hasOwnProperty;function te(t){let n={},e=-1;for(;++e<t.length;)ti(n,t[e]);return n}function ti(t,n){let e;for(e in n){let i=(Dn.call(t,e)?t[e]:void 0)||(t[e]={}),a=n[e],o;if(a)for(o in a){Dn.call(i,o)||(i[o]=[]);let u=a[o];ei(i[o],Array.isArray(u)?u:u?[u]:[])}}}function ei(t,n){let e=-1,r=[];for(;++e<n.length;)(n[e].add==="after"?t:r).push(n[e]);Q(t,0,0,r)}function ee(t,n){let e=Number.parseInt(t,n);return e<9||e===11||e>13&&e<32||e>126&&e<160||e>55295&&e<57344||e>64975&&e<65008||(e&65535)===65535||(e&65535)===65534||e>1114111?"\uFFFD":String.fromCodePoint(e)}function Y(t){return t.replace(/[\t\n\r ]+/g," ").replace(/^ | $/g,"").toLowerCase().toUpperCase()}var U=dt(/[A-Za-z]/),$=dt(/[\dA-Za-z]/),Pn=dt(/[#-'*+\--9=?A-Z^-~]/);function wt(t){return t!==null&&(t<32||t===127)}var qt=dt(/\d/),Rn=dt(/[\dA-Fa-f]/),_n=dt(/[!-/:-@[-`{-~]/);function E(t){return t!==null&&t<-2}function O(t){return t!==null&&(t<0||t===32)}function A(t){return t===-2||t===-1||t===32}var yt=dt(/\p{P}|\p{S}/u),ut=dt(/\s/);function dt(t){return n;function n(e){return e!==null&&e>-1&&t.test(String.fromCharCode(e))}}function M(t,n,e,r){let i=r?r-1:1/0,a=0;return o;function o(s){return A(s)?(t.enter(e),u(s)):n(s)}function u(s){return A(s)&&a++<i?(t.consume(s),u):(t.exit(e),n(s))}}function Te(t,n,e,r,i,a){let o=0;return u;function u(l){return a>0&&A(l)?(t.enter(r),s(l)):h(l)}function s(l){return A(l)&&o<a?(t.consume(l),o++,s):(t.exit(r),h(l))}function h(l){return o>=i?n(l):e(l)}}var On={tokenize:ni};function ni(t){let n=t.attempt(this.parser.constructs.contentInitial,r,i),e;return n;function r(u){if(u===null){t.consume(u);return}return t.enter("lineEnding"),t.consume(u),t.exit("lineEnding"),M(t,n,"linePrefix")}function i(u){return t.enter("paragraph"),a(u)}function a(u){let s=t.enter("chunkText",{contentType:"text",previous:e});return e&&(e.next=s),e=s,o(u)}function o(u){if(u===null){t.exit("chunkText"),t.exit("paragraph"),t.consume(u);return}return E(u)?(t.consume(u),t.exit("chunkText"),a):(t.consume(u),o)}}var pt=class{constructor(){this.index=new Map,this.map=[]}add(n,e,r){Bn(this,n,e,r,!1)}addBefore(n,e,r){Bn(this,n,e,r,!0)}consume(n){if(this.map.sort(function(a,o){return a[0]-o[0]}),this.map.length===0)return;let e=this.map.length,r=[];for(;e>0;)e-=1,r.push(n.slice(this.map[e][0]+this.map[e][1]),this.map[e][2]),n.length=this.map[e][0];r.push(n.slice()),n.length=0;let i=r.pop();for(;i;){for(let a of i)n.push(a);i=r.pop()}this.map.length=0,this.index.clear()}};function Bn(t,n,e,r,i){if(e===0&&r.length===0)return;let a=t.index.get(n);if(a){a[1]+=e,i?(r.push(...a[2]),a[2]=r):a[2].push(...r);return}let o=[n,e,r];t.map.push(o),t.index.set(n,o)}var vn={tokenize:ri},Nn={tokenize:ii};function ri(t){let n=this,e=[],r=0,i,a,o;return u;function u(C){if(r<e.length){let P=e[r];return n.containerState=P[1],t.attempt(P[0].continuation,s,h)(C)}return h(C)}function s(C){if(r++,n.containerState._closeFlow){n.containerState._closeFlow=void 0,i&&S();let P=n.events.length,L=P,b;for(;L--;)if(n.events[L][0]==="exit"&&n.events[L][1].type==="chunkFlow"){b=n.events[L][1].end;break}w(r);let T=P;for(;T<n.events.length;)n.events[T][1].end={...b},T++;let N=new pt;return N.add(L+1,0,n.events.slice(P)),N.add(P,T-P,[]),N.consume(n.events),h(C)}return u(C)}function h(C){if(r===e.length){if(!i)return m(C);if(i.currentConstruct&&i.currentConstruct.concrete)return d(C);n.interrupt=!!(i.currentConstruct&&!i._gfmTableDynamicInterruptHack)}return n.containerState={},t.check(Nn,l,c)(C)}function l(C){return i&&S(),w(r),m(C)}function c(C){return n.parser.lazy[n.now().line]=r!==e.length,o=n.now().offset,d(C)}function m(C){return n.containerState={},t.attempt(Nn,f,d)(C)}function f(C){return r++,e.push([n.currentConstruct,n.containerState]),m(C)}function d(C){if(C===null){i&&S(),w(0),t.consume(C);return}return i=i||n.parser.flow(n.now()),t.enter("chunkFlow",{_tokenizer:i,contentType:"flow",previous:a}),I(C)}function I(C){if(C===null){y(t.exit("chunkFlow"),!0),w(0),t.consume(C);return}return E(C)?(t.consume(C),y(t.exit("chunkFlow")),r=0,n.interrupt=void 0,u):(t.consume(C),I)}function y(C,P){let L=n.sliceStream(C);if(P&&L.push(null),C.previous=a,a&&(a.next=C),a=C,i.defineSkip(C.start),i.write(L),n.parser.lazy[C.start.line]){let b=i.events.length;for(;b--;)if(i.events[b][1].start.offset<o&&(!i.events[b][1].end||i.events[b][1].end.offset>o))return;let T=n.events.length,N=T,v,x;for(;N--;)if(n.events[N][0]==="exit"&&n.events[N][1].type==="chunkFlow"){if(v){x=n.events[N][1].end;break}v=!0}for(w(r),b=T;b<n.events.length;)n.events[b][1].end={...x},b++;let q=new pt;q.add(N+1,0,n.events.slice(T)),q.add(T,b-T,[]),q.consume(n.events)}}function w(C){let P=e.length;for(;P-- >C;){let L=e[P];n.containerState=L[1],L[0].exit.call(n,t)}e.length=C}function S(){i.write([null]),a=void 0,i=void 0,n.containerState._closeFlow=void 0}}function ii(t,n,e){return M(t,t.attempt(this.parser.constructs.document,n,e),"linePrefix",this.parser.constructs.disable.null.includes("codeIndented")?void 0:4)}function Dt(t){if(t===null||O(t)||ut(t))return 1;if(yt(t))return 2}function xt(t,n,e){let r=[],i=-1;for(;++i<t.length;){let a=t[i].resolveAll;a&&!r.includes(a)&&(n=a(n,e),r.push(a))}return n}var Ht={name:"attention",resolveAll:oi,tokenize:ai};function oi(t,n){let e=-1,r;for(;++e<t.length;)if(t[e][0]==="enter"&&t[e][1].type==="attentionSequence"&&t[e][1]._close){let i=e;for(;i--;)if(t[i][0]==="exit"&&t[i][1].type==="attentionSequence"&&t[i][1]._open&&n.sliceSerialize(t[i][1]).charCodeAt(0)===n.sliceSerialize(t[e][1]).charCodeAt(0)){if((t[i][1]._close||t[e][1]._open)&&(t[e][1].end.offset-t[e][1].start.offset)%3&&!((t[i][1].end.offset-t[i][1].start.offset+t[e][1].end.offset-t[e][1].start.offset)%3))continue;let a=t[i][1].end.offset-t[i][1].start.offset>1&&t[e][1].end.offset-t[e][1].start.offset>1?2:1,o={...t[i][1].end},u={...t[e][1].start};qn(o,-a),qn(u,a);let s={type:a>1?"strongSequence":"emphasisSequence",start:o,end:{...t[i][1].end}},h={type:a>1?"strongSequence":"emphasisSequence",start:{...t[e][1].start},end:u},l={type:a>1?"strongText":"emphasisText",start:{...t[i][1].end},end:{...t[e][1].start}},c={type:a>1?"strong":"emphasis",start:{...s.start},end:{...h.end}};t[i][1].end={...s.start},t[e][1].start={...h.end},r=[],t[i][1].end.offset-t[i][1].start.offset&&(r=X(r,[["enter",t[i][1],n],["exit",t[i][1],n]])),r=X(r,[["enter",c,n],["enter",s,n],["exit",s,n],["enter",l,n]]),r=X(r,xt(n.parser.constructs.insideSpan.null,t.slice(i+1,e),n)),r=X(r,[["exit",l,n],["enter",h,n],["exit",h,n],["exit",c,n]]);let m=0;t[e][1].end.offset-t[e][1].start.offset&&(m=2,r=X(r,[["enter",t[e][1],n],["exit",t[e][1],n]])),Q(t,i-1,e-i+3,r),e=i+r.length-m-2;break}}for(e=-1;++e<t.length;)t[e][1].type==="attentionSequence"&&(t[e][1].type="data");return t}function ai(t,n){let e=this.parser.constructs.attentionMarkers.null,r=this.previous,i=Dt(r),a;return o;function o(s){return a=s,t.enter("attentionSequence"),u(s)}function u(s){if(s===a)return t.consume(s),u;let h=t.exit("attentionSequence"),l=Dt(s),c=!l||l===2&&i||e.includes(s)&&s!==42&&s!==95,m=!i||i===2&&l||e.includes(r)&&r!==42&&r!==95;return h._open=!!(a===42?c:c&&(i||!m)),h._close=!!(a===42?m:m&&(l||!c)),n(s)}}function qn(t,n){t.column+=n,t.offset+=n,t._bufferIndex+=n}var Ie={name:"autolink",tokenize:ui};function ui(t,n,e){let r=0;return i;function i(f){return t.enter("autolink"),t.enter("autolinkMarker"),t.consume(f),t.exit("autolinkMarker"),t.enter("autolinkProtocol"),a}function a(f){return U(f)?(t.consume(f),o):f===64?e(f):h(f)}function o(f){return f===43||f===45||f===46||$(f)?(r=1,u(f)):h(f)}function u(f){return f===58?(t.consume(f),r=0,s):(f===43||f===45||f===46||$(f))&&r++<32?(t.consume(f),u):(r=0,h(f))}function s(f){return f===62?(t.exit("autolinkProtocol"),t.enter("autolinkMarker"),t.consume(f),t.exit("autolinkMarker"),t.exit("autolink"),n):f===null||f===32||f===60||wt(f)?e(f):(t.consume(f),s)}function h(f){return f===64?(t.consume(f),l):Pn(f)?(t.consume(f),h):e(f)}function l(f){return $(f)?c(f):e(f)}function c(f){return f===46?(t.consume(f),r=0,l):f===62?(t.exit("autolinkProtocol").type="autolinkEmail",t.enter("autolinkMarker"),t.consume(f),t.exit("autolinkMarker"),t.exit("autolink"),n):m(f)}function m(f){if((f===45||$(f))&&r++<63){let d=f===45?m:c;return t.consume(f),d}return e(f)}}var lt={partial:!0,tokenize:li};function li(t,n,e){return r;function r(a){return A(a)?M(t,i,"linePrefix")(a):i(a)}function i(a){return a===null||E(a)?n(a):e(a)}}var ne={continuation:{tokenize:ci},exit:hi,name:"blockQuote",tokenize:si};function si(t,n,e){let r=this;return i;function i(o){if(o===62){let u=r.containerState;return u.open||(t.enter("blockQuote",{_container:!0}),u.open=!0),t.enter("blockQuotePrefix"),t.enter("blockQuoteMarker"),t.consume(o),t.exit("blockQuoteMarker"),a}return e(o)}function a(o){return A(o)?(t.enter("blockQuotePrefixWhitespace"),t.consume(o),t.exit("blockQuotePrefixWhitespace"),t.exit("blockQuotePrefix"),n):(t.exit("blockQuotePrefix"),n(o))}}function ci(t,n,e){let r=this;return i;function i(o){return A(o)?M(t,a,"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(o):a(o)}function a(o){return t.attempt(ne,n,e)(o)}}function hi(t){t.exit("blockQuote")}var re={name:"characterEscape",tokenize:fi};function fi(t,n,e){return r;function r(a){return t.enter("characterEscape"),t.enter("escapeMarker"),t.consume(a),t.exit("escapeMarker"),i}function i(a){return _n(a)?(t.enter("characterEscapeValue"),t.consume(a),t.exit("characterEscapeValue"),t.exit("characterEscape"),n):e(a)}}var ie={name:"characterReference",tokenize:mi};function mi(t,n,e){let r=this,i=0,a,o;return u;function u(c){return t.enter("characterReference"),t.enter("characterReferenceMarker"),t.consume(c),t.exit("characterReferenceMarker"),s}function s(c){return c===35?(t.enter("characterReferenceMarkerNumeric"),t.consume(c),t.exit("characterReferenceMarkerNumeric"),h):(t.enter("characterReferenceValue"),a=31,o=$,l(c))}function h(c){return c===88||c===120?(t.enter("characterReferenceMarkerHexadecimal"),t.consume(c),t.exit("characterReferenceMarkerHexadecimal"),t.enter("characterReferenceValue"),a=6,o=Rn,l):(t.enter("characterReferenceValue"),a=7,o=qt,l(c))}function l(c){if(c===59&&i){let m=t.exit("characterReferenceValue");return o===$&&!Lt(r.sliceSerialize(m))?e(c):(t.enter("characterReferenceMarker"),t.consume(c),t.exit("characterReferenceMarker"),t.exit("characterReference"),n)}return o(c)&&i++<a?(t.consume(c),l):e(c)}}var Vt={partial:!0,tokenize:pi};function pi(t,n,e){let r=this;return i;function i(o){return o===null?e(o):(t.enter("lineEnding"),t.consume(o),t.exit("lineEnding"),a)}function a(o){return r.parser.lazy[r.now().line]?e(o):n(o)}}var oe={concrete:!0,name:"codeFenced",tokenize:gi};function gi(t,n,e){let r=this,i={partial:!0,tokenize:L},a=0,o=0,u;return s;function s(b){return h(b)}function h(b){let T=r.events[r.events.length-1];return a=T&&T[1].type==="linePrefix"?T[2].sliceSerialize(T[1],!0).length:0,u=b,t.enter("codeFenced"),t.enter("codeFencedFence"),t.enter("codeFencedFenceSequence"),l(b)}function l(b){return b===u?(o++,t.consume(b),l):o<3?e(b):(t.exit("codeFencedFenceSequence"),A(b)?M(t,c,"whitespace")(b):c(b))}function c(b){return b===null||E(b)?(t.exit("codeFencedFence"),r.interrupt?n(b):t.check(Vt,I,P)(b)):(t.enter("codeFencedFenceInfo"),t.enter("chunkString",{contentType:"string"}),m(b))}function m(b){return b===null||E(b)?(t.exit("chunkString"),t.exit("codeFencedFenceInfo"),c(b)):A(b)?(t.exit("chunkString"),t.exit("codeFencedFenceInfo"),M(t,f,"whitespace")(b)):b===96&&b===u?e(b):(t.consume(b),m)}function f(b){return b===null||E(b)?c(b):(t.enter("codeFencedFenceMeta"),t.enter("chunkString",{contentType:"string"}),d(b))}function d(b){return b===null||E(b)?(t.exit("chunkString"),t.exit("codeFencedFenceMeta"),c(b)):b===96&&b===u?e(b):(t.consume(b),d)}function I(b){return t.attempt(i,P,y)(b)}function y(b){return t.enter("lineEnding"),t.consume(b),t.exit("lineEnding"),w}function w(b){return a>0&&A(b)?M(t,S,"linePrefix",a+1)(b):S(b)}function S(b){return b===null||E(b)?t.check(Vt,I,P)(b):(t.enter("codeFlowValue"),C(b))}function C(b){return b===null||E(b)?(t.exit("codeFlowValue"),S(b)):(t.consume(b),C)}function P(b){return t.exit("codeFenced"),n(b)}function L(b,T,N){let v=0;return x;function x(_){return b.enter("lineEnding"),b.consume(_),b.exit("lineEnding"),q}function q(_){return b.enter("codeFencedFence"),A(_)?M(b,H,"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(_):H(_)}function H(_){return _===u?(b.enter("codeFencedFenceSequence"),z(_)):N(_)}function z(_){return _===u?(v++,b.consume(_),z):v>=o?(b.exit("codeFencedFenceSequence"),A(_)?M(b,B,"whitespace")(_):B(_)):N(_)}function B(_){return _===null||E(_)?(b.exit("codeFencedFence"),T(_)):N(_)}}}var jt={name:"codeIndented",tokenize:xi},di={partial:!0,tokenize:ki};function xi(t,n,e){return r;function r(u){return t.enter("codeIndented"),Te(t,i,e,"linePrefix",4,4)(u)}function i(u){return u===null?o(u):E(u)?t.attempt(di,i,o)(u):(t.enter("codeFlowValue"),a(u))}function a(u){return u===null||E(u)?(t.exit("codeFlowValue"),i(u)):(t.consume(u),a)}function o(u){return t.exit("codeIndented"),n(u)}}function ki(t,n,e){let r=this;return i;function i(o){return r.parser.lazy[r.now().line]?e(o):E(o)?(t.enter("lineEnding"),t.consume(o),t.exit("lineEnding"),i):Te(t,n,a,"linePrefix",4,4)(o)}function a(o){return E(o)?i(o):e(o)}}var Ae={name:"codeText",previous:wi,resolve:bi,tokenize:yi};function bi(t){let n=t.length-4,e=3,r,i;if((t[e][1].type==="lineEnding"||t[e][1].type==="space")&&(t[n][1].type==="lineEnding"||t[n][1].type==="space")){for(r=e;++r<n;)if(t[r][1].type==="codeTextData"){t[e][1].type="codeTextPadding",t[n][1].type="codeTextPadding",e+=2,n-=2;break}}for(r=e-1,n++;++r<=n;)i===void 0?r!==n&&t[r][1].type!=="lineEnding"&&(i=r):(r===n||t[r][1].type==="lineEnding")&&(t[i][1].type="codeTextData",r!==i+2&&(t[i][1].end=t[r-1][1].end,t.splice(i+2,r-i-2),n-=r-i-2,r=i+2),i=void 0);return t}function wi(t){return t!==96||this.events[this.events.length-1][1].type==="characterEscape"}function yi(t,n,e){let r=this,i=0,a,o;return u;function u(m){return t.enter("codeText"),t.enter("codeTextSequence"),s(m)}function s(m){return m===96?(t.consume(m),i++,s):(t.exit("codeTextSequence"),h(m))}function h(m){return m===null?e(m):m===32?(t.enter("space"),t.consume(m),t.exit("space"),h):m===96?(o=t.enter("codeTextSequence"),a=0,c(m)):E(m)?(t.enter("lineEnding"),t.consume(m),t.exit("lineEnding"),h):(t.enter("codeTextData"),l(m))}function l(m){return m===null||m===32||m===96||E(m)?(t.exit("codeTextData"),h(m)):(t.consume(m),l)}function c(m){return m===96?(t.consume(m),a++,c):a===i?(t.exit("codeTextSequence"),t.exit("codeText"),n(m)):(o.type="codeTextData",l(m))}}var ae=class{constructor(n){this.left=n?[...n]:[],this.right=[]}get(n){if(n<0||n>=this.left.length+this.right.length)throw new RangeError("Cannot access index `"+n+"` in a splice buffer of size `"+(this.left.length+this.right.length)+"`");return n<this.left.length?this.left[n]:this.right[this.right.length-n+this.left.length-1]}get length(){return this.left.length+this.right.length}shift(){return this.setCursor(0),this.right.pop()}slice(n,e){let r=e??Number.POSITIVE_INFINITY;return r<this.left.length?this.left.slice(n,r):n>this.left.length?this.right.slice(this.right.length-r+this.left.length,this.right.length-n+this.left.length).reverse():this.left.slice(n).concat(this.right.slice(this.right.length-r+this.left.length).reverse())}splice(n,e,r){let i=e||0;this.setCursor(Math.trunc(n));let a=this.right.splice(this.right.length-i,Number.POSITIVE_INFINITY);return r&&Wt(this.left,r),a.reverse()}pop(){return this.setCursor(Number.POSITIVE_INFINITY),this.left.pop()}push(n){this.setCursor(Number.POSITIVE_INFINITY),this.left.push(n)}pushMany(n){this.setCursor(Number.POSITIVE_INFINITY),Wt(this.left,n)}unshift(n){this.setCursor(0),this.right.push(n)}unshiftMany(n){this.setCursor(0),Wt(this.right,n.reverse())}setCursor(n){if(!(n===this.left.length||n>this.left.length&&this.right.length===0||n<0&&this.left.length===0))if(n<this.left.length){let e=this.left.splice(n,Number.POSITIVE_INFINITY);Wt(this.right,e.reverse())}else{let e=this.right.splice(this.left.length+this.right.length-n,Number.POSITIVE_INFINITY);Wt(this.left,e.reverse())}}};function Wt(t,n){let e=0;if(n.length<1e4)t.push(...n);else for(;e<n.length;)t.push(...n.slice(e,e+1e4)),e+=1e4}function ue(t){let n={},e=-1,r,i,a,o,u,s,h,l=new ae(t);for(;++e<l.length;){for(;e in n;)e=n[e];if(r=l.get(e),e&&r[1].type==="chunkFlow"&&l.get(e-1)[1].type==="listItemPrefix"&&(s=r[1]._tokenizer.events,a=0,a<s.length&&s[a][1].type==="lineEndingBlank"&&(a+=2),a<s.length&&s[a][1].type==="content"))for(;++a<s.length&&s[a][1].type!=="content";)s[a][1].type==="chunkText"&&(s[a][1]._isInFirstContentOfListItem=!0,a++);if(r[0]==="enter")r[1].contentType&&(Object.assign(n,Si(l,e)),e=n[e],h=!0);else if(r[1]._container){for(a=e,i=void 0;a--;)if(o=l.get(a),o[1].type==="lineEnding"||o[1].type==="lineEndingBlank")o[0]==="enter"&&(i&&(l.get(i)[1].type="lineEndingBlank"),o[1].type="lineEnding",i=a);else if(!(o[1].type==="linePrefix"||o[1].type==="listItemIndent"))break;i&&(r[1].end={...l.get(i)[1].start},u=l.slice(i,e),u.unshift(r),l.splice(i,e-i+1,u))}}return Q(t,0,Number.POSITIVE_INFINITY,l.slice(0)),!h}function Si(t,n){let e=t.get(n)[1],r=t.get(n)[2],i=n-1,a=[],o=e._tokenizer;o||(o=r.parser[e.contentType](e.start),e._contentTypeTextTrailing&&(o._contentTypeTextTrailing=!0));let u=o.events,s=[],h={},l,c,m=-1,f=e,d=0,I=0,y=[I];for(;f;){for(;t.get(++i)[1]!==f;);a.push(i),f._tokenizer||(l=r.sliceStream(f),f.next||l.push(null),c&&o.defineSkip(f.start),f._isInFirstContentOfListItem&&(o._gfmTasklistFirstContentOfListItem=!0),o.write(l),f._isInFirstContentOfListItem&&(o._gfmTasklistFirstContentOfListItem=void 0)),c=f,f=f.next}for(f=e;++m<u.length;)u[m][0]==="exit"&&u[m-1][0]==="enter"&&u[m][1].type===u[m-1][1].type&&u[m][1].start.line!==u[m][1].end.line&&(I=m+1,y.push(I),f._tokenizer=void 0,f.previous=void 0,f=f.next);for(o.events=[],f?(f._tokenizer=void 0,f.previous=void 0):y.pop(),m=y.length;m--;){let w=u.slice(y[m],y[m+1]),S=a.pop();s.push([S,S+w.length-1]),t.splice(S,2,w)}for(s.reverse(),m=-1;++m<s.length;)h[d+s[m][0]]=d+s[m][1],d+=s[m][1]-s[m][0]-1;return h}var ze={resolve:Ei,tokenize:Fi},Ci={partial:!0,tokenize:Ti};function Ei(t){return ue(t),t}function Fi(t,n){let e;return r;function r(u){return t.enter("content"),e=t.enter("chunkContent",{contentType:"content"}),i(u)}function i(u){return u===null?a(u):E(u)?t.check(Ci,o,a)(u):(t.consume(u),i)}function a(u){return t.exit("chunkContent"),t.exit("content"),n(u)}function o(u){return t.consume(u),t.exit("chunkContent"),e.next=t.enter("chunkContent",{contentType:"content",previous:e}),e=e.next,i}}function Ti(t,n,e){let r=this;return i;function i(o){return t.exit("chunkContent"),t.enter("lineEnding"),t.consume(o),t.exit("lineEnding"),M(t,a,"linePrefix")}function a(o){if(o===null||E(o))return e(o);let u=r.events[r.events.length-1];return!r.parser.constructs.disable.null.includes("codeIndented")&&u&&u[1].type==="linePrefix"&&u[2].sliceSerialize(u[1],!0).length>=4?n(o):t.interrupt(r.parser.constructs.flow,e,n)(o)}}function le(t,n,e,r,i,a,o,u,s){let h=s||Number.POSITIVE_INFINITY,l=0;return c;function c(w){return w===60?(t.enter(r),t.enter(i),t.enter(a),t.consume(w),t.exit(a),m):w===null||w===32||w===41||wt(w)?e(w):(t.enter(r),t.enter(o),t.enter(u),t.enter("chunkString",{contentType:"string"}),I(w))}function m(w){return w===62?(t.enter(a),t.consume(w),t.exit(a),t.exit(i),t.exit(r),n):(t.enter(u),t.enter("chunkString",{contentType:"string"}),f(w))}function f(w){return w===62?(t.exit("chunkString"),t.exit(u),m(w)):w===null||w===60||E(w)?e(w):(t.consume(w),w===92?d:f)}function d(w){return w===60||w===62||w===92?(t.consume(w),f):f(w)}function I(w){return!l&&(w===null||w===41||O(w))?(t.exit("chunkString"),t.exit(u),t.exit(o),t.exit(r),n(w)):l<h&&w===40?(t.consume(w),l++,I):w===41?(t.consume(w),l--,I):w===null||w===32||w===40||wt(w)?e(w):(t.consume(w),w===92?y:I)}function y(w){return w===40||w===41||w===92?(t.consume(w),I):I(w)}}function se(t,n,e,r,i,a){let o=this,u=0,s;return h;function h(f){return t.enter(r),t.enter(i),t.consume(f),t.exit(i),t.enter(a),l}function l(f){return u>999||f===null||f===91||f===93&&!s||f===94&&!u&&"_hiddenFootnoteSupport"in o.parser.constructs?e(f):f===93?(t.exit(a),t.enter(i),t.consume(f),t.exit(i),t.exit(r),n):E(f)?(t.enter("lineEnding"),t.consume(f),t.exit("lineEnding"),l):(t.enter("chunkString",{contentType:"string"}),c(f))}function c(f){return f===null||f===91||f===93||E(f)||u++>999?(t.exit("chunkString"),l(f)):(t.consume(f),s||(s=!A(f)),f===92?m:c)}function m(f){return f===91||f===92||f===93?(t.consume(f),u++,c):c(f)}}function ce(t,n,e,r,i,a){let o;return u;function u(m){return m===34||m===39||m===40?(t.enter(r),t.enter(i),t.consume(m),t.exit(i),o=m===40?41:m,s):e(m)}function s(m){return m===o?(t.enter(i),t.consume(m),t.exit(i),t.exit(r),n):(t.enter(a),h(m))}function h(m){return m===o?(t.exit(a),s(o)):m===null?e(m):E(m)?(t.enter("lineEnding"),t.consume(m),t.exit("lineEnding"),M(t,h,"linePrefix")):(t.enter("chunkString",{contentType:"string"}),l(m))}function l(m){return m===o||m===null||E(m)?(t.exit("chunkString"),h(m)):(t.consume(m),m===92?c:l)}function c(m){return m===o||m===92?(t.consume(m),l):l(m)}}function St(t,n){let e;return r;function r(i){return E(i)?(t.enter("lineEnding"),t.consume(i),t.exit("lineEnding"),e=!0,r):A(i)?M(t,r,e?"linePrefix":"lineSuffix")(i):n(i)}}var Me={name:"definition",tokenize:Ai},Ii={partial:!0,tokenize:zi};function Ai(t,n,e){let r=this,i;return a;function a(f){return t.enter("definition"),o(f)}function o(f){return se.call(r,t,u,e,"definitionLabel","definitionLabelMarker","definitionLabelString")(f)}function u(f){return i=Y(r.sliceSerialize(r.events[r.events.length-1][1]).slice(1,-1)),f===58?(t.enter("definitionMarker"),t.consume(f),t.exit("definitionMarker"),s):e(f)}function s(f){return O(f)?St(t,h)(f):h(f)}function h(f){return le(t,l,e,"definitionDestination","definitionDestinationLiteral","definitionDestinationLiteralMarker","definitionDestinationRaw","definitionDestinationString")(f)}function l(f){return t.attempt(Ii,c,c)(f)}function c(f){return A(f)?M(t,m,"whitespace")(f):m(f)}function m(f){return f===null||E(f)?(t.exit("definition"),r.parser.defined.push(i),n(f)):e(f)}}function zi(t,n,e){return r;function r(u){return O(u)?St(t,i)(u):e(u)}function i(u){return ce(t,a,e,"definitionTitle","definitionTitleMarker","definitionTitleString")(u)}function a(u){return A(u)?M(t,o,"whitespace")(u):o(u)}function o(u){return u===null||E(u)?n(u):e(u)}}var Le={name:"hardBreakEscape",tokenize:Mi};function Mi(t,n,e){return r;function r(a){return t.enter("hardBreakEscape"),t.consume(a),i}function i(a){return E(a)?(t.exit("hardBreakEscape"),n(a)):e(a)}}var De={name:"headingAtx",resolve:Li,tokenize:Di};function Li(t,n){let e=t.length-2,r=3;if(t[r][1].type==="whitespace"&&(r+=2),e-2>r&&t[e][1].type==="whitespace"&&(e-=2),t[e][1].type==="atxHeadingSequence"&&(r===e-1||e-4>r&&t[e-2][1].type==="whitespace")&&(e-=r+1===e?2:4),e>r){let i={type:"atxHeadingText",start:t[r][1].start,end:t[e][1].end},a={type:"chunkText",start:t[r][1].start,end:t[e][1].end,contentType:"text"};Q(t,r,e-r+1,[["enter",i,n],["enter",a,n],["exit",a,n],["exit",i,n]])}return t}function Di(t,n,e){let r=0;return i;function i(l){return t.enter("atxHeading"),a(l)}function a(l){return t.enter("atxHeadingSequence"),o(l)}function o(l){return l===35&&r++<6?(t.consume(l),o):l===null||O(l)?(t.exit("atxHeadingSequence"),u(l)):e(l)}function u(l){return l===35?(t.enter("atxHeadingSequence"),s(l)):l===null||E(l)?(t.exit("atxHeading"),n(l)):A(l)?M(t,u,"whitespace")(l):(t.enter("atxHeadingText"),h(l))}function s(l){return l===35?(t.consume(l),s):(t.exit("atxHeadingSequence"),u(l))}function h(l){return l===null||l===35||O(l)?(t.exit("atxHeadingText"),u(l)):(t.consume(l),h)}}var Hn=["address","article","aside","base","basefont","blockquote","body","caption","center","col","colgroup","dd","details","dialog","dir","div","dl","dt","fieldset","figcaption","figure","footer","form","frame","frameset","h1","h2","h3","h4","h5","h6","head","header","hr","html","iframe","legend","li","link","main","menu","menuitem","nav","noframes","ol","optgroup","option","p","param","search","section","summary","table","tbody","td","tfoot","th","thead","title","tr","track","ul"],Pe=["pre","script","style","textarea"];var Re={concrete:!0,name:"htmlFlow",resolveTo:Ri,tokenize:_i},Pi={partial:!0,tokenize:Oi};function Ri(t){let n=t.length;for(;n--&&!(t[n][0]==="enter"&&t[n][1].type==="htmlFlow"););return n>1&&t[n-2][1].type==="linePrefix"&&(t[n][1].start=t[n-2][1].start,t[n+1][1].start=t[n-2][1].start,t.splice(n-2,2)),t}function _i(t,n,e){let r=this,i,a,o,u,s;return h;function h(g){return l(g)}function l(g){return t.enter("htmlFlow"),t.enter("htmlFlowData"),t.consume(g),c}function c(g){return g===33?(t.consume(g),m):g===47?(t.consume(g),a=!0,I):g===63?(t.consume(g),i=3,r.interrupt?n:p):U(g)?(t.consume(g),o=String.fromCharCode(g),y):e(g)}function m(g){return g===45?(t.consume(g),i=2,f):g===91?(t.consume(g),i=5,u=0,d):U(g)?(t.consume(g),i=4,r.interrupt?n:p):e(g)}function f(g){return g===45?(t.consume(g),r.interrupt?n:p):e(g)}function d(g){let tt="CDATA[";return g===tt.charCodeAt(u++)?(t.consume(g),u===tt.length?r.interrupt?n:H:d):e(g)}function I(g){return U(g)?(t.consume(g),o=String.fromCharCode(g),y):e(g)}function y(g){if(g===null||g===47||g===62||O(g)){let tt=g===47,At=o.toLowerCase();return!tt&&!a&&Pe.includes(At)?(i=1,r.interrupt?n(g):H(g)):Hn.includes(o.toLowerCase())?(i=6,tt?(t.consume(g),w):r.interrupt?n(g):H(g)):(i=7,r.interrupt&&!r.parser.lazy[r.now().line]?e(g):a?S(g):C(g))}return g===45||$(g)?(t.consume(g),o+=String.fromCharCode(g),y):e(g)}function w(g){return g===62?(t.consume(g),r.interrupt?n:H):e(g)}function S(g){return A(g)?(t.consume(g),S):x(g)}function C(g){return g===47?(t.consume(g),x):g===58||g===95||U(g)?(t.consume(g),P):A(g)?(t.consume(g),C):x(g)}function P(g){return g===45||g===46||g===58||g===95||$(g)?(t.consume(g),P):L(g)}function L(g){return g===61?(t.consume(g),b):A(g)?(t.consume(g),L):C(g)}function b(g){return g===null||g===60||g===61||g===62||g===96?e(g):g===34||g===39?(t.consume(g),s=g,T):A(g)?(t.consume(g),b):N(g)}function T(g){return g===s?(t.consume(g),s=null,v):g===null||E(g)?e(g):(t.consume(g),T)}function N(g){return g===null||g===34||g===39||g===47||g===60||g===61||g===62||g===96||O(g)?L(g):(t.consume(g),N)}function v(g){return g===47||g===62||A(g)?C(g):e(g)}function x(g){return g===62?(t.consume(g),q):e(g)}function q(g){return g===null||E(g)?H(g):A(g)?(t.consume(g),q):e(g)}function H(g){return g===45&&i===2?(t.consume(g),j):g===60&&i===1?(t.consume(g),W):g===62&&i===4?(t.consume(g),nt):g===63&&i===3?(t.consume(g),p):g===93&&i===5?(t.consume(g),ot):E(g)&&(i===6||i===7)?(t.exit("htmlFlowData"),t.check(Pi,ht,z)(g)):g===null||E(g)?(t.exit("htmlFlowData"),z(g)):(t.consume(g),H)}function z(g){return t.check(Vt,B,ht)(g)}function B(g){return t.enter("lineEnding"),t.consume(g),t.exit("lineEnding"),_}function _(g){return g===null||E(g)?z(g):(t.enter("htmlFlowData"),H(g))}function j(g){return g===45?(t.consume(g),p):H(g)}function W(g){return g===47?(t.consume(g),o="",rt):H(g)}function rt(g){if(g===62){let tt=o.toLowerCase();return Pe.includes(tt)?(t.consume(g),nt):H(g)}return U(g)&&o.length<8?(t.consume(g),o+=String.fromCharCode(g),rt):H(g)}function ot(g){return g===93?(t.consume(g),p):H(g)}function p(g){return g===62?(t.consume(g),nt):g===45&&i===2?(t.consume(g),p):H(g)}function nt(g){return g===null||E(g)?(t.exit("htmlFlowData"),ht(g)):(t.consume(g),nt)}function ht(g){return t.exit("htmlFlow"),n(g)}}function Oi(t,n,e){return r;function r(i){return t.enter("lineEnding"),t.consume(i),t.exit("lineEnding"),t.attempt(lt,n,e)}}var _e={name:"htmlText",tokenize:Bi};function Bi(t,n,e){let r=this,i,a,o;return u;function u(p){return t.enter("htmlText"),t.enter("htmlTextData"),t.consume(p),s}function s(p){return p===33?(t.consume(p),h):p===47?(t.consume(p),L):p===63?(t.consume(p),C):U(p)?(t.consume(p),N):e(p)}function h(p){return p===45?(t.consume(p),l):p===91?(t.consume(p),a=0,d):U(p)?(t.consume(p),S):e(p)}function l(p){return p===45?(t.consume(p),f):e(p)}function c(p){return p===null?e(p):p===45?(t.consume(p),m):E(p)?(o=c,W(p)):(t.consume(p),c)}function m(p){return p===45?(t.consume(p),f):c(p)}function f(p){return p===62?j(p):p===45?m(p):c(p)}function d(p){let nt="CDATA[";return p===nt.charCodeAt(a++)?(t.consume(p),a===nt.length?I:d):e(p)}function I(p){return p===null?e(p):p===93?(t.consume(p),y):E(p)?(o=I,W(p)):(t.consume(p),I)}function y(p){return p===93?(t.consume(p),w):I(p)}function w(p){return p===62?j(p):p===93?(t.consume(p),w):I(p)}function S(p){return p===null||p===62?j(p):E(p)?(o=S,W(p)):(t.consume(p),S)}function C(p){return p===null?e(p):p===63?(t.consume(p),P):E(p)?(o=C,W(p)):(t.consume(p),C)}function P(p){return p===62?j(p):C(p)}function L(p){return U(p)?(t.consume(p),b):e(p)}function b(p){return p===45||$(p)?(t.consume(p),b):T(p)}function T(p){return E(p)?(o=T,W(p)):A(p)?(t.consume(p),T):j(p)}function N(p){return p===45||$(p)?(t.consume(p),N):p===47||p===62||O(p)?v(p):e(p)}function v(p){return p===47?(t.consume(p),j):p===58||p===95||U(p)?(t.consume(p),x):E(p)?(o=v,W(p)):A(p)?(t.consume(p),v):j(p)}function x(p){return p===45||p===46||p===58||p===95||$(p)?(t.consume(p),x):q(p)}function q(p){return p===61?(t.consume(p),H):E(p)?(o=q,W(p)):A(p)?(t.consume(p),q):v(p)}function H(p){return p===null||p===60||p===61||p===62||p===96?e(p):p===34||p===39?(t.consume(p),i=p,z):E(p)?(o=H,W(p)):A(p)?(t.consume(p),H):(t.consume(p),B)}function z(p){return p===i?(t.consume(p),i=void 0,_):p===null?e(p):E(p)?(o=z,W(p)):(t.consume(p),z)}function B(p){return p===null||p===34||p===39||p===60||p===61||p===96?e(p):p===47||p===62||O(p)?v(p):(t.consume(p),B)}function _(p){return p===47||p===62||O(p)?v(p):e(p)}function j(p){return p===62?(t.consume(p),t.exit("htmlTextData"),t.exit("htmlText"),n):e(p)}function W(p){return t.exit("htmlTextData"),t.enter("lineEnding"),t.consume(p),t.exit("lineEnding"),rt}function rt(p){return A(p)?M(t,ot,"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(p):ot(p)}function ot(p){return t.enter("htmlTextData"),o(p)}}var Ct={name:"labelEnd",resolveAll:Hi,resolveTo:Vi,tokenize:ji},Ni={tokenize:Wi},vi={tokenize:Ui},qi={tokenize:$i};function Hi(t){let n=-1,e=[];for(;++n<t.length;){let r=t[n][1];if(e.push(t[n]),r.type==="labelImage"||r.type==="labelLink"||r.type==="labelEnd"){let i=r.type==="labelImage"?4:2;r.type="data",n+=i}}return t.length!==e.length&&Q(t,0,t.length,e),t}function Vi(t,n){let e=t.length,r=0,i,a,o;for(;e--;){let l=t[e][1];if(i){if(l.type==="link"||l.type==="labelLink"&&l._inactive)break;t[e][0]==="enter"&&l.type==="labelLink"&&(l._inactive=!0)}else if(a){if(t[e][0]==="enter"&&(l.type==="labelImage"||l.type==="labelLink")&&!l._balanced&&(i=e,l.type!=="labelLink")){r=2;break}}else l.type==="labelEnd"&&(a=e)}let u={type:t[i][1].type==="labelLink"?"link":"image",start:{...t[i][1].start},end:{...t[t.length-1][1].end}},s={type:"label",start:{...t[i][1].start},end:{...t[a][1].end}},h={type:"labelText",start:{...t[i+r+2][1].end},end:{...t[a-2][1].start}};return o=[["enter",u,n],["enter",s,n]],o=X(o,t.slice(i+1,i+r+3)),o=X(o,[["enter",h,n]]),o=X(o,xt(n.parser.constructs.insideSpan.null,t.slice(i+r+4,a-3),n)),o=X(o,[["exit",h,n],t[a-2],t[a-1],["exit",s,n]]),o=X(o,t.slice(a+1)),o=X(o,[["exit",u,n]]),Q(t,i,t.length,o),t}function ji(t,n,e){let r=this,i=r._labelStarts,a,o;if(i){for(;i.length>0&&i[i.length-1]._balanced;)i.pop();a=i[i.length-1]}return u;function u(m){return a?a._inactive?c(m):(o=r.parser.defined.includes(Y(r.sliceSerialize({start:a.end,end:r.now()}))),t.enter("labelEnd"),t.enter("labelMarker"),t.consume(m),t.exit("labelMarker"),t.exit("labelEnd"),s):e(m)}function s(m){return m===40?t.attempt(Ni,l,o?l:c)(m):m===91?t.attempt(vi,l,o?h:c)(m):o?l(m):c(m)}function h(m){return t.attempt(qi,l,c)(m)}function l(m){return i.pop(),n(m)}function c(m){return a._balanced=!0,e(m)}}function Wi(t,n,e){return r;function r(c){return t.enter("resource"),t.enter("resourceMarker"),t.consume(c),t.exit("resourceMarker"),i}function i(c){return O(c)?St(t,a)(c):a(c)}function a(c){return c===41?l(c):le(t,o,u,"resourceDestination","resourceDestinationLiteral","resourceDestinationLiteralMarker","resourceDestinationRaw","resourceDestinationString",32)(c)}function o(c){return O(c)?St(t,s)(c):l(c)}function u(c){return e(c)}function s(c){return c===34||c===39||c===40?ce(t,h,e,"resourceTitle","resourceTitleMarker","resourceTitleString")(c):l(c)}function h(c){return O(c)?St(t,l)(c):l(c)}function l(c){return c===41?(t.enter("resourceMarker"),t.consume(c),t.exit("resourceMarker"),t.exit("resource"),n):e(c)}}function Ui(t,n,e){let r=this;return i;function i(u){return se.call(r,t,a,o,"reference","referenceMarker","referenceString")(u)}function a(u){return r.parser.defined.includes(Y(r.sliceSerialize(r.events[r.events.length-1][1]).slice(1,-1)))?n(u):e(u)}function o(u){return e(u)}}function $i(t,n,e){return r;function r(a){return t.enter("reference"),t.enter("referenceMarker"),t.consume(a),t.exit("referenceMarker"),i}function i(a){return a===93?(t.enter("referenceMarker"),t.consume(a),t.exit("referenceMarker"),t.exit("reference"),n):e(a)}}var Oe={name:"labelStartImage",resolveAll:Ct.resolveAll,tokenize:Qi};function Qi(t,n,e){let r=this,i;return a;function a(s){return t.enter("labelImage"),t.enter("labelImageMarker"),t.consume(s),t.exit("labelImageMarker"),o}function o(s){return s===91?(t.enter("labelMarker"),t.consume(s),t.exit("labelMarker"),i=t.exit("labelImage"),u):e(s)}function u(s){return s===94&&"_hiddenFootnoteSupport"in r.parser.constructs?e(s):(r._labelStarts=r._labelStarts||[],r._labelStarts.push(i),n(s))}}var Be={name:"labelStartLink",resolveAll:Ct.resolveAll,tokenize:Zi};function Zi(t,n,e){let r=this,i;return a;function a(u){return t.enter("labelLink"),t.enter("labelMarker"),t.consume(u),t.exit("labelMarker"),i=t.exit("labelLink"),o}function o(u){return u===94&&"_hiddenFootnoteSupport"in r.parser.constructs?e(u):(r._labelStarts=r._labelStarts||[],r._labelStarts.push(i),n(u))}}var Ut={name:"lineEnding",tokenize:Yi};function Yi(t,n){return e;function e(r){return t.enter("lineEnding"),t.consume(r),t.exit("lineEnding"),M(t,n,"linePrefix")}}var Et={name:"thematicBreak",tokenize:Gi};function Gi(t,n,e){let r=0,i;return a;function a(h){return t.enter("thematicBreak"),o(h)}function o(h){return i=h,u(h)}function u(h){return h===i?(t.enter("thematicBreakSequence"),s(h)):r>=3&&(h===null||E(h))?(t.exit("thematicBreak"),n(h)):e(h)}function s(h){return h===i?(t.consume(h),r++,s):(t.exit("thematicBreakSequence"),A(h)?M(t,u,"whitespace")(h):u(h))}}var G={continuation:{tokenize:to},exit:no,name:"list",tokenize:Ji},Xi={partial:!0,tokenize:ro},Ki={partial:!0,tokenize:eo};function Ji(t,n,e){let r=this,i=r.events[r.events.length-1],a=i&&i[1].type==="linePrefix"?i[2].sliceSerialize(i[1],!0).length:0,o=0;return u;function u(f){let d=r.containerState.type||(f===42||f===43||f===45?"listUnordered":"listOrdered");if(d==="listUnordered"?!r.containerState.marker||f===r.containerState.marker:qt(f)){if(r.containerState.type||(r.containerState.type=d,t.enter(d,{_container:!0})),d==="listUnordered")return t.enter("listItemPrefix"),f===42||f===45?t.check(Et,e,h)(f):h(f);if(!r.interrupt||f===49)return t.enter("listItemPrefix"),t.enter("listItemValue"),s(f)}return e(f)}function s(f){return qt(f)&&++o<10?(t.consume(f),s):(!r.interrupt||o<2)&&(r.containerState.marker?f===r.containerState.marker:f===41||f===46)?(t.exit("listItemValue"),h(f)):e(f)}function h(f){return t.enter("listItemMarker"),t.consume(f),t.exit("listItemMarker"),r.containerState.marker=r.containerState.marker||f,t.check(lt,r.interrupt?e:l,t.attempt(Xi,m,c))}function l(f){return r.containerState.initialBlankLine=!0,a++,m(f)}function c(f){return A(f)?(t.enter("listItemPrefixWhitespace"),t.consume(f),t.exit("listItemPrefixWhitespace"),m):e(f)}function m(f){return r.containerState.size=a+r.sliceSerialize(t.exit("listItemPrefix"),!0).length,n(f)}}function to(t,n,e){let r=this;return r.containerState._closeFlow=void 0,t.check(lt,i,a);function i(u){return r.containerState.furtherBlankLines=r.containerState.furtherBlankLines||r.containerState.initialBlankLine,M(t,n,"listItemIndent",r.containerState.size+1)(u)}function a(u){return r.containerState.furtherBlankLines||!A(u)?(r.containerState.furtherBlankLines=void 0,r.containerState.initialBlankLine=void 0,o(u)):(r.containerState.furtherBlankLines=void 0,r.containerState.initialBlankLine=void 0,t.attempt(Ki,n,o)(u))}function o(u){return r.containerState._closeFlow=!0,r.interrupt=void 0,M(t,t.attempt(G,n,e),"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(u)}}function eo(t,n,e){let r=this;return M(t,i,"listItemIndent",r.containerState.size+1);function i(a){let o=r.events[r.events.length-1];return o&&o[1].type==="listItemIndent"&&o[2].sliceSerialize(o[1],!0).length===r.containerState.size?n(a):e(a)}}function no(t){t.exit(this.containerState.type)}function ro(t,n,e){let r=this;return M(t,i,"listItemPrefixWhitespace",r.parser.constructs.disable.null.includes("codeIndented")?void 0:5);function i(a){let o=r.events[r.events.length-1];return!A(a)&&o&&o[1].type==="listItemPrefixWhitespace"?n(a):e(a)}}var he={name:"setextUnderline",resolveTo:io,tokenize:oo};function io(t,n){let e=new pt,r=t.length,i,a,o;for(;r--;)if(t[r][0]==="enter"){if(t[r][1].type==="content"){i=r;break}t[r][1].type==="paragraph"&&(a=r)}else t[r][1].type==="content"&&e.add(r,1,[]),!o&&t[r][1].type==="definition"&&(o=r);let u={type:"setextHeading",start:{...t[i][1].start},end:{...t[t.length-1][1].end}};return t[a][1].type="setextHeadingText",o?(e.add(a,0,[["enter",u,n]]),e.add(o+1,0,[["exit",t[i][1],n]]),t[i][1].end={...t[o][1].end}):t[i][1]=u,e.add(t.length,0,[["exit",u,n]]),e.consume(t),t}function oo(t,n,e){let r=this,i;return a;function a(h){let l=r.events.length,c;for(;l--;)if(r.events[l][1].type!=="lineEnding"&&r.events[l][1].type!=="linePrefix"&&r.events[l][1].type!=="content"){c=r.events[l][1].type==="paragraph";break}return!r.parser.lazy[r.now().line]&&(r.interrupt||c)?(t.enter("setextHeadingLine"),i=h,o(h)):e(h)}function o(h){return t.enter("setextHeadingLineSequence"),u(h)}function u(h){return h===i?(t.consume(h),u):(t.exit("setextHeadingLineSequence"),A(h)?M(t,s,"lineSuffix")(h):s(h))}function s(h){return h===null||E(h)?(t.exit("setextHeadingLine"),n(h)):e(h)}}var Vn={tokenize:ao};function ao(t){let n=this,e=t.attempt(lt,r,t.attempt(this.parser.constructs.flowInitial,i,M(t,t.attempt(this.parser.constructs.flow,i,t.attempt(ze,i)),"linePrefix")));return e;function r(a){if(a===null){t.consume(a);return}return t.enter("lineEndingBlank"),t.consume(a),t.exit("lineEndingBlank"),n.currentConstruct=void 0,e}function i(a){if(a===null){t.consume(a);return}return t.enter("lineEnding"),t.consume(a),t.exit("lineEnding"),n.currentConstruct=void 0,e}}var jn={resolveAll:Qn()},Wn=$n("string"),Un=$n("text");function $n(t){return{resolveAll:Qn(t==="text"?uo:void 0),tokenize:n};function n(e){let r=this,i=this.parser.constructs[t],a=e.attempt(i,o,u);return o;function o(l){return h(l)?a(l):u(l)}function u(l){if(l===null){e.consume(l);return}return e.enter("data"),e.consume(l),s}function s(l){return h(l)?(e.exit("data"),a(l)):(e.consume(l),s)}function h(l){if(l===null)return!0;let c=i[l],m=-1;if(c)for(;++m<c.length;){let f=c[m];if(!f.previous||f.previous.call(r,r.previous))return!0}return!1}}}function Qn(t){return n;function n(e,r){let i=-1,a;for(;++i<=e.length;)a===void 0?e[i]&&e[i][1].type==="data"&&(a=i,i++):(!e[i]||e[i][1].type!=="data")&&(i!==a+2&&(e[a][1].end=e[i-1][1].end,e.splice(a+2,i-a-2),i=a+2),a=void 0);return t?t(e,r):e}}function uo(t,n){let e=new pt,r=0;for(;++r<=t.length;)if((r===t.length||t[r][1].type==="lineEnding")&&t[r-1][1].type==="data"){let i=t[r-1][1],a=n.sliceStream(i),o=a.length,u=-1,s=0,h;for(;o--;){let l=a[o];if(typeof l=="string"){for(u=l.length;l.charCodeAt(u-1)===32;)s++,u--;if(u)break;u=-1}else if(l===-2)h=!0,s++;else if(l!==-1){o++;break}}if(n._contentTypeTextTrailing&&r===t.length&&(s=0),s){let l={type:r===t.length||h||s<2?"lineSuffix":"hardBreakTrailing",start:{_bufferIndex:o?u:i.start._bufferIndex+u,_index:i.start._index+o,line:i.end.line,column:i.end.column-s,offset:i.end.offset-s},end:{...i.end}};i.end={...l.start},i.start.offset===i.end.offset?Object.assign(i,l):e.add(r,0,[["enter",l,n],["exit",l,n]])}r++}return e.consume(t),t}var Ne={};En(Ne,{attentionMarkers:()=>go,contentInitial:()=>so,disable:()=>xo,document:()=>lo,flow:()=>ho,flowInitial:()=>co,insideSpan:()=>po,string:()=>fo,text:()=>mo});var lo={42:G,43:G,45:G,48:G,49:G,50:G,51:G,52:G,53:G,54:G,55:G,56:G,57:G,62:ne},so={91:Me},co={[-2]:jt,[-1]:jt,32:jt},ho={35:De,42:Et,45:[he,Et],60:Re,61:he,95:Et,96:oe,126:oe},fo={38:ie,92:re},mo={[-5]:Ut,[-4]:Ut,[-3]:Ut,33:Oe,38:ie,42:Ht,60:[Ie,_e],91:Be,92:[Le,re],93:Ct,95:Ht,96:Ae},po={null:[Ht,jn]},go={null:[42,95]},xo={null:[]};function Zn(t,n,e){let r={_bufferIndex:-1,_index:0,line:e&&e.line||1,column:e&&e.column||1,offset:e&&e.offset||0},i={},a=[],o=[],u=[],s=!0,h={attempt:v(T),check:v(N),consume:P,enter:L,exit:b,interrupt:v(N,{interrupt:!0})},l={code:null,containerState:{},defineSkip:w,events:[],now:y,parser:t,previous:null,sliceSerialize:d,sliceStream:I,write:f},c=n.tokenize.call(l,h),m;return n.resolveAll&&a.push(n),l;function f(z){return o=X(o,z),S(),o[o.length-1]!==null?[]:(x(n,0),l.events=xt(a,l.events,l),l.events)}function d(z,B){return bo(I(z),B)}function I(z){return ko(o,z)}function y(){let{_bufferIndex:z,_index:B,line:_,column:j,offset:W}=r;return{_bufferIndex:z,_index:B,line:_,column:j,offset:W}}function w(z){i[z.line]=z.column,H()}function S(){for(;r._index<o.length;){let z=o[r._index];if(typeof z=="string"){let B=r._index;for(r._bufferIndex<0&&(r._bufferIndex=0);r._index===B&&r._bufferIndex<z.length;)C(z.charCodeAt(r._bufferIndex))}else C(z)}}function C(z){s=void 0,m=z,c=c(z)}function P(z){E(z)?(r.line++,r.column=1,r.offset+=z===-3?2:1,H()):z!==-1&&(r.column++,r.offset++),r._bufferIndex<0?r._index++:(r._bufferIndex++,r._bufferIndex===o[r._index].length&&(r._bufferIndex=-1,r._index++)),l.previous=z,s=!0}function L(z,B){let _=B||{};return _.type=z,_.start=y(),l.events.push(["enter",_,l]),u.push(_),_}function b(z){let B=u.pop();return B.end=y(),l.events.push(["exit",B,l]),B}function T(z,B){x(z,B.from)}function N(z,B){B.restore()}function v(z,B){return _;function _(j,W,rt){let ot,p,nt,ht;return Array.isArray(j)?tt(j):"tokenize"in j?tt([j]):g(j);function g(Z){return Ot;function Ot(ft){let zt=ft!==null&&Z[ft],bt=ft!==null&&Z.null,ye=[...Array.isArray(zt)?zt:zt?[zt]:[],...Array.isArray(bt)?bt:bt?[bt]:[]];return tt(ye)(ft)}}function tt(Z){return ot=Z,p=0,Z.length===0?rt:At(Z[p])}function At(Z){return Ot;function Ot(ft){return ht=q(),nt=Z,Z.partial||(l.currentConstruct=Z),Z.name&&l.parser.constructs.disable.null.includes(Z.name)?Xt(ft):Z.tokenize.call(B?Object.assign(Object.create(l),B):l,h,Gt,Xt)(ft)}}function Gt(Z){return s=!0,z(nt,ht),W}function Xt(Z){return s=!0,ht.restore(),++p<ot.length?At(ot[p]):rt}}}function x(z,B){z.resolveAll&&!a.includes(z)&&a.push(z),z.resolve&&Q(l.events,B,l.events.length-B,z.resolve(l.events.slice(B),l)),z.resolveTo&&(l.events=z.resolveTo(l.events,l))}function q(){let z=y(),B=l.previous,_=l.currentConstruct,j=l.events.length,W=Array.from(u);return{from:j,restore:rt};function rt(){r=z,l.previous=B,l.currentConstruct=_,l.events.length=j,u=W,H()}}function H(){r.line in i&&r.column<2&&(r.column=i[r.line],r.offset+=i[r.line]-1)}}function ko(t,n){let e=n.start._index,r=n.start._bufferIndex,i=n.end._index,a=n.end._bufferIndex,o;if(e===i)o=[t[e].slice(r,a)];else{if(o=t.slice(e,i),r>-1){let u=o[0];typeof u=="string"?o[0]=u.slice(r):o.shift()}a>0&&o.push(t[i].slice(0,a))}return o}function bo(t,n){let e=-1,r=[],i;for(;++e<t.length;){let a=t[e],o;if(typeof a=="string")o=a;else switch(a){case-5:{o="\r";break}case-4:{o=`
`;break}case-3:{o=`\r
`;break}case-2:{o=n?" ":"	";break}case-1:{if(!n&&i)continue;o=" ";break}default:o=String.fromCharCode(a)}i=a===-2,r.push(o)}return r.join("")}function ve(t){let r={constructs:te([Ne,...(t||{}).extensions||[]]),content:i(On),defined:[],document:i(vn),flow:i(Vn),lazy:{},string:i(Wn),text:i(Un)};return r;function i(a){return o;function o(u){return Zn(r,a,u)}}}function qe(t){for(;!ue(t););return t}var Yn=/[\0\t\n\r]/g;function He(){let t=1,n="",e=!0,r;return i;function i(a,o,u){a=n+(typeof a=="string"?a.toString():new TextDecoder(o||void 0).decode(a));let s=[],h=0;for(n="",e&&(a.charCodeAt(0)===65279&&h++,e=void 0);h<a.length;){Yn.lastIndex=h;let l=Yn.exec(a),c=l&&l.index!==void 0?l.index:a.length,m=a.charCodeAt(c);if(!l){n=a.slice(h);break}if(m===10&&h===c&&r)s.push(-3),r=void 0;else switch(r&&(s.push(-5),r=void 0),h<c&&(s.push(a.slice(h,c)),t+=c-h),m){case 0:{s.push(65533),t++;break}case 9:{let f=Math.ceil(t/4)*4;for(s.push(-2);t++<f;)s.push(-1);break}case 10:{s.push(-4),t=1;break}default:r=!0,t=1}h=c+1}return u&&(r&&s.push(-5),n&&s.push(n),s.push(null)),s}}var wo=/\\([!-/:-@[-`{-~])|&(#(?:\d{1,7}|x[\da-f]{1,6})|[\da-z]{1,31});/gi;function fe(t){return t.replace(wo,yo)}function yo(t,n,e){if(n)return n;if(e.charCodeAt(0)===35){let i=e.charCodeAt(1),a=i===120||i===88;return ee(e.slice(a?2:1),a?16:10)}return Lt(e)||t}function Pt(t){return!t||typeof t!="object"?"":"position"in t||"type"in t?Gn(t.position):"start"in t||"end"in t?Gn(t):"line"in t||"column"in t?Ve(t):""}function Ve(t){return Xn(t&&t.line)+":"+Xn(t&&t.column)}function Gn(t){return Ve(t&&t.start)+"-"+Ve(t&&t.end)}function Xn(t){return t&&typeof t=="number"?t:1}var Jn={}.hasOwnProperty;function je(t,n,e){return n&&typeof n=="object"&&(e=n,n=void 0),So(e)(qe(ve(e).document().write(He()(t,n,!0))))}function So(t){let n={afterExit:[],beforeEnter:[],transforms:[],canContainEols:["emphasis","fragment","heading","paragraph","strong"],enter:{autolink:o(yn),autolinkProtocol:x,autolinkEmail:x,atxHeading:o(kn),blockQuote:o(zt),characterEscape:x,characterReference:x,codeFenced:o(bt),codeFencedFenceInfo:u,codeFencedFenceMeta:u,codeIndented:o(bt,u),codeText:o(ye,u),codeTextData:x,data:x,codeFlowValue:x,definition:o(Pr),definitionDestinationString:u,definitionLabelString:u,definitionTitleString:u,emphasis:o(Rr),hardBreakEscape:o(bn),hardBreakTrailing:o(bn),htmlFlow:o(wn,u),htmlFlowData:x,htmlText:o(wn,u),htmlTextData:x,image:o(_r),label:u,link:o(yn),listItem:o(Or),listItemValue:f,listOrdered:o(Sn,m),listUnordered:o(Sn),paragraph:o(Br),reference:tt,referenceString:u,resourceDestinationString:u,resourceTitleString:u,setextHeading:o(kn),strong:o(Nr),thematicBreak:o(qr)},exit:{atxHeading:h(),atxHeadingSequence:b,autolink:h(),autolinkEmail:ft,autolinkProtocol:Ot,blockQuote:h(),characterEscapeValue:q,characterReferenceMarkerHexadecimal:Gt,characterReferenceMarkerNumeric:Gt,characterReferenceValue:Xt,characterReference:Z,codeFenced:h(w),codeFencedFence:y,codeFencedFenceInfo:d,codeFencedFenceMeta:I,codeFlowValue:q,codeIndented:h(S),codeText:h(j),codeTextData:q,data:q,definition:h(),definitionDestinationString:L,definitionLabelString:C,definitionTitleString:P,emphasis:h(),hardBreakEscape:h(z),hardBreakTrailing:h(z),htmlFlow:h(B),htmlFlowData:q,htmlText:h(_),htmlTextData:q,image:h(rt),label:p,labelText:ot,lineEnding:H,link:h(W),listItem:h(),listOrdered:h(),listUnordered:h(),paragraph:h(),referenceString:At,resourceDestinationString:nt,resourceTitleString:ht,resource:g,setextHeading:h(v),setextHeadingLineSequence:N,setextHeadingText:T,strong:h(),thematicBreak:h()}};tr(n,(t||{}).mdastExtensions||[]);let e={};return r;function r(k){let F={type:"root",children:[],position:void 0},D={stack:[F],tokenStack:[],config:n,enter:s,exit:l,buffer:u,resume:c,data:e},R=[],K=[],V=-1;for(;++V<k.length;)if(K.push(k[V]),k[V][1].type==="listOrdered"||k[V][1].type==="listUnordered")if(k[V][0]==="enter")R.push(K.length-1);else{let J=R.pop();a(K,J)}for(k=K,V=-1;++V<k.length;){let J=n[k[V][0]];k[V][0]==="enter"&&n.beforeEnter.length>0&&i(n.beforeEnter,{...D,sliceSerialize:k[V][2].sliceSerialize},k[V][1]),Jn.call(J,k[V][1].type)&&J[k[V][1].type].call({...D,sliceSerialize:k[V][2].sliceSerialize},k[V][1]),k[V][0]==="exit"&&n.afterExit.length>0&&i(n.afterExit,{...D,sliceSerialize:k[V][2].sliceSerialize},k[V][1])}if(D.tokenStack.length>0){let J=D.tokenStack[D.tokenStack.length-1];(J[1]||Kn).call(D,void 0,J[0])}for(F.position={start:kt(k.length>0?k[0][1].start:{line:1,column:1,offset:0}),end:kt(k.length>0?k[k.length-2][1].end:{line:1,column:1,offset:0})},V=-1;++V<n.transforms.length;)F=n.transforms[V](F)||F;return F}function i(k,F,D){let R=-1;for(;++R<k.length;)k[R].call(F,D)}function a(k,F){let D=k.length-1,R=F-1,K=-1,V=!1,J,at,Bt,Nt,vt=[];for(;++R<=D;){let et=k[R];switch(et[1].type){case"listUnordered":case"listOrdered":case"blockQuote":{et[0]==="enter"?K++:K--,Nt=void 0;break}case"lineEndingBlank":{et[0]==="enter"&&(J&&!Nt&&!K&&!Bt&&(Bt=R),Nt=void 0);break}case"linePrefix":case"listItemValue":case"listItemMarker":case"listItemPrefix":case"listItemPrefixWhitespace":break;default:Nt=void 0}if(!K&&et[0]==="enter"&&et[1].type==="listItemPrefix"||K===-1&&et[0]==="exit"&&(et[1].type==="listUnordered"||et[1].type==="listOrdered")){if(J){let Mt=R;for(at=void 0;Mt--;){let mt=k[Mt];if(mt[1].type==="lineEnding"||mt[1].type==="lineEndingBlank"){if(mt[0]==="exit")continue;at&&(k[at][1].type="lineEndingBlank",V=!0),mt[1].type="lineEnding",at=Mt}else if(!(mt[1].type==="linePrefix"||mt[1].type==="blockQuotePrefix"||mt[1].type==="blockQuotePrefixWhitespace"||mt[1].type==="blockQuoteMarker"||mt[1].type==="listItemIndent"))break}Bt&&(!at||Bt<at)&&(J._spread=!0),J.end=Object.assign({},at?k[at][1].start:et[1].end),vt.push({at:at||R,event:["exit",J,et[2]]})}if(et[1].type==="listItemPrefix"){let Mt={type:"listItem",_spread:!1,start:Object.assign({},et[1].start),end:void 0};J=Mt,vt.push({at:R,event:["enter",Mt,et[2]]}),Bt=void 0,Nt=!0}}}let Cn=k.splice(F),Se=0;for(R=-1;++R<Cn.length;){for(;Se<vt.length&&vt[Se].at===F+R;)k.push(vt[Se++].event);k.push(Cn[R])}k[F][1]._spread=V}function o(k,F){return D;function D(R){s.call(this,k(R),R),F&&F.call(this,R)}}function u(){this.stack.push({type:"fragment",children:[]})}function s(k,F,D){this.stack[this.stack.length-1].children.push(k),this.stack.push(k),this.tokenStack.push([F,D||void 0]),k.position={start:kt(F.start),end:void 0}}function h(k){return F;function F(D){k&&k.call(this,D),l.call(this,D)}}function l(k,F){let D=this.stack.pop(),R=this.tokenStack.pop();if(!R)throw new Error("Cannot close `"+k.type+"` ("+Pt({start:k.start,end:k.end})+"): it\u2019s not open");R[0].type!==k.type&&(F?F.call(this,k,R[0]):(R[1]||Kn).call(this,k,R[0])),D.position.end=kt(k.end)}function c(){return Fe(this.stack.pop())}function m(){this.data.expectingFirstListItemValue=!0}function f(k){if(this.data.expectingFirstListItemValue){let F=this.stack[this.stack.length-2];F.start=Number.parseInt(this.sliceSerialize(k),10),this.data.expectingFirstListItemValue=void 0}}function d(){let k=this.resume(),F=this.stack[this.stack.length-1];F.lang=k}function I(){let k=this.resume(),F=this.stack[this.stack.length-1];F.meta=k}function y(){this.data.flowCodeInside||(this.buffer(),this.data.flowCodeInside=!0)}function w(){let k=this.resume(),F=this.stack[this.stack.length-1];F.value=k.replace(/^(\r?\n|\r)|(\r?\n|\r)$/g,""),this.data.flowCodeInside=void 0}function S(){let k=this.resume(),F=this.stack[this.stack.length-1];F.value=k.replace(/(\r?\n|\r)$/g,"")}function C(k){let F=this.resume(),D=this.stack[this.stack.length-1];D.label=F,D.identifier=Y(this.sliceSerialize(k)).toLowerCase()}function P(){let k=this.resume(),F=this.stack[this.stack.length-1];F.title=k}function L(){let k=this.resume(),F=this.stack[this.stack.length-1];F.url=k}function b(k){let F=this.stack[this.stack.length-1];if(!F.depth){let D=this.sliceSerialize(k).length;F.depth=D}}function T(){this.data.setextHeadingSlurpLineEnding=!0}function N(k){let F=this.stack[this.stack.length-1];F.depth=this.sliceSerialize(k).codePointAt(0)===61?1:2}function v(){this.data.setextHeadingSlurpLineEnding=void 0}function x(k){let D=this.stack[this.stack.length-1].children,R=D[D.length-1];(!R||R.type!=="text")&&(R=vr(),R.position={start:kt(k.start),end:void 0},D.push(R)),this.stack.push(R)}function q(k){let F=this.stack.pop();F.value+=this.sliceSerialize(k),F.position.end=kt(k.end)}function H(k){let F=this.stack[this.stack.length-1];if(this.data.atHardBreak){let D=F.children[F.children.length-1];D.position.end=kt(k.end),this.data.atHardBreak=void 0;return}!this.data.setextHeadingSlurpLineEnding&&n.canContainEols.includes(F.type)&&(x.call(this,k),q.call(this,k))}function z(){this.data.atHardBreak=!0}function B(){let k=this.resume(),F=this.stack[this.stack.length-1];F.value=k}function _(){let k=this.resume(),F=this.stack[this.stack.length-1];F.value=k}function j(){let k=this.resume(),F=this.stack[this.stack.length-1];F.value=k}function W(){let k=this.stack[this.stack.length-1];if(this.data.inReference){let F=this.data.referenceType||"shortcut";k.type+="Reference",k.referenceType=F,delete k.url,delete k.title}else delete k.identifier,delete k.label;this.data.referenceType=void 0}function rt(){let k=this.stack[this.stack.length-1];if(this.data.inReference){let F=this.data.referenceType||"shortcut";k.type+="Reference",k.referenceType=F,delete k.url,delete k.title}else delete k.identifier,delete k.label;this.data.referenceType=void 0}function ot(k){let F=this.sliceSerialize(k),D=this.stack[this.stack.length-2];D.label=fe(F),D.identifier=Y(F).toLowerCase()}function p(){let k=this.stack[this.stack.length-1],F=this.resume(),D=this.stack[this.stack.length-1];if(this.data.inReference=!0,D.type==="link"){let R=k.children;D.children=R}else D.alt=F}function nt(){let k=this.resume(),F=this.stack[this.stack.length-1];F.url=k}function ht(){let k=this.resume(),F=this.stack[this.stack.length-1];F.title=k}function g(){this.data.inReference=void 0}function tt(){this.data.referenceType="collapsed"}function At(k){let F=this.resume(),D=this.stack[this.stack.length-1];D.label=F,D.identifier=Y(this.sliceSerialize(k)).toLowerCase(),this.data.referenceType="full"}function Gt(k){this.data.characterReferenceType=k.type}function Xt(k){let F=this.sliceSerialize(k),D=this.data.characterReferenceType,R;D?(R=ee(F,D==="characterReferenceMarkerNumeric"?10:16),this.data.characterReferenceType=void 0):R=Lt(F);let K=this.stack[this.stack.length-1];K.value+=R}function Z(k){let F=this.stack.pop();F.position.end=kt(k.end)}function Ot(k){q.call(this,k);let F=this.stack[this.stack.length-1];F.url=this.sliceSerialize(k)}function ft(k){q.call(this,k);let F=this.stack[this.stack.length-1];F.url="mailto:"+this.sliceSerialize(k)}function zt(){return{type:"blockquote",children:[],position:void 0}}function bt(){return{type:"code",lang:null,meta:null,value:"",position:void 0}}function ye(){return{type:"inlineCode",value:"",position:void 0}}function Pr(){return{type:"definition",identifier:"",label:null,title:null,url:"",position:void 0}}function Rr(){return{type:"emphasis",children:[],position:void 0}}function kn(){return{type:"heading",depth:0,children:[],position:void 0}}function bn(){return{type:"break",position:void 0}}function wn(){return{type:"html",value:"",position:void 0}}function _r(){return{type:"image",title:null,url:"",alt:null,position:void 0}}function yn(){return{type:"link",title:null,url:"",children:[],position:void 0}}function Sn(k){return{type:"list",ordered:k.type==="listOrdered",start:null,spread:k._spread,children:[],position:void 0}}function Or(k){return{type:"listItem",spread:k._spread,checked:null,children:[],position:void 0}}function Br(){return{type:"paragraph",children:[],position:void 0}}function Nr(){return{type:"strong",children:[],position:void 0}}function vr(){return{type:"text",value:"",position:void 0}}function qr(){return{type:"thematicBreak",position:void 0}}}function kt(t){return{line:t.line,column:t.column,offset:t.offset}}function tr(t,n){let e=-1;for(;++e<n.length;){let r=n[e];Array.isArray(r)?tr(t,r):Co(t,r)}}function Co(t,n){let e;for(e in n)if(Jn.call(n,e))switch(e){case"canContainEols":{let r=n[e];r&&t[e].push(...r);break}case"transforms":{let r=n[e];r&&t[e].push(...r);break}case"afterExit":case"beforeEnter":{let r=n[e];r&&t[e].push(r);break}case"enter":case"exit":{let r=n[e];r&&Object.assign(t[e],r);break}}}function Kn(t,n){throw t?new Error("Cannot close `"+t.type+"` ("+Pt({start:t.start,end:t.end})+"): a different token (`"+n.type+"`, "+Pt({start:n.start,end:n.end})+") is open"):new Error("Cannot close document, a token (`"+n.type+"`, "+Pt({start:n.start,end:n.end})+") is still open")}var Eo={tokenize:zo,partial:!0},er={tokenize:Mo,partial:!0},nr={tokenize:Lo,partial:!0},rr={tokenize:Do,partial:!0},Fo={tokenize:Po,partial:!0},ir={name:"wwwAutolink",tokenize:Io,previous:ar},or={name:"protocolAutolink",tokenize:Ao,previous:ur},gt={name:"emailAutolink",tokenize:To,previous:lr},st={};function Ue(){return{text:st}}var Ft=48;for(;Ft<123;)st[Ft]=gt,Ft++,Ft===58?Ft=65:Ft===91&&(Ft=97);st[43]=gt;st[45]=gt;st[46]=gt;st[95]=gt;st[72]=[gt,or];st[104]=[gt,or];st[87]=[gt,ir];st[119]=[gt,ir];function To(t,n,e){let r=this,i,a;return o;function o(c){return!We(c)||!lr.call(r,r.previous)||$e(r.events)?e(c):(t.enter("literalAutolink"),t.enter("literalAutolinkEmail"),u(c))}function u(c){return We(c)?(t.consume(c),u):c===64?(t.consume(c),s):e(c)}function s(c){return c===46?t.check(Fo,l,h)(c):c===45||c===95||$(c)?(a=!0,t.consume(c),s):l(c)}function h(c){return t.consume(c),i=!0,s}function l(c){return a&&i&&U(r.previous)?(t.exit("literalAutolinkEmail"),t.exit("literalAutolink"),n(c)):e(c)}}function Io(t,n,e){let r=this;return i;function i(o){return o!==87&&o!==119||!ar.call(r,r.previous)||$e(r.events)?e(o):(t.enter("literalAutolink"),t.enter("literalAutolinkWww"),t.check(Eo,t.attempt(er,t.attempt(nr,a),e),e)(o))}function a(o){return t.exit("literalAutolinkWww"),t.exit("literalAutolink"),n(o)}}function Ao(t,n,e){let r=this,i="",a=!1;return o;function o(c){return(c===72||c===104)&&ur.call(r,r.previous)&&!$e(r.events)?(t.enter("literalAutolink"),t.enter("literalAutolinkHttp"),i+=String.fromCodePoint(c),t.consume(c),u):e(c)}function u(c){if(U(c)&&i.length<5)return i+=String.fromCodePoint(c),t.consume(c),u;if(c===58){let m=i.toLowerCase();if(m==="http"||m==="https")return t.consume(c),s}return e(c)}function s(c){return c===47?(t.consume(c),a?h:(a=!0,s)):e(c)}function h(c){return c===null||wt(c)||O(c)||ut(c)||yt(c)?e(c):t.attempt(er,t.attempt(nr,l),e)(c)}function l(c){return t.exit("literalAutolinkHttp"),t.exit("literalAutolink"),n(c)}}function zo(t,n,e){let r=0;return i;function i(o){return(o===87||o===119)&&r<3?(r++,t.consume(o),i):o===46&&r===3?(t.consume(o),a):e(o)}function a(o){return o===null?e(o):n(o)}}function Mo(t,n,e){let r,i,a;return o;function o(h){return h===46||h===95?t.check(rr,s,u)(h):h===null||O(h)||ut(h)||h!==45&&yt(h)?s(h):(a=!0,t.consume(h),o)}function u(h){return h===95?r=!0:(i=r,r=void 0),t.consume(h),o}function s(h){return i||r||!a?e(h):n(h)}}function Lo(t,n){let e=0,r=0;return i;function i(o){return o===40?(e++,t.consume(o),i):o===41&&r<e?a(o):o===33||o===34||o===38||o===39||o===41||o===42||o===44||o===46||o===58||o===59||o===60||o===63||o===93||o===95||o===126?t.check(rr,n,a)(o):o===null||O(o)||ut(o)?n(o):(t.consume(o),i)}function a(o){return o===41&&r++,t.consume(o),i}}function Do(t,n,e){return r;function r(u){return u===33||u===34||u===39||u===41||u===42||u===44||u===46||u===58||u===59||u===63||u===95||u===126?(t.consume(u),r):u===38?(t.consume(u),a):u===93?(t.consume(u),i):u===60||u===null||O(u)||ut(u)?n(u):e(u)}function i(u){return u===null||u===40||u===91||O(u)||ut(u)?n(u):r(u)}function a(u){return U(u)?o(u):e(u)}function o(u){return u===59?(t.consume(u),r):U(u)?(t.consume(u),o):e(u)}}function Po(t,n,e){return r;function r(a){return t.consume(a),i}function i(a){return $(a)?e(a):n(a)}}function ar(t){return t===null||t===40||t===42||t===95||t===91||t===93||t===126||O(t)}function ur(t){return!U(t)}function lr(t){return!(t===47||We(t))}function We(t){return t===43||t===45||t===46||t===95||$(t)}function $e(t){let n=t.length,e=!1;for(;n--;){let r=t[n][1];if((r.type==="labelLink"||r.type==="labelImage")&&!r._balanced){e=!0;break}if(r._gfmAutolinkLiteralWalkedInto){e=!1;break}}return t.length>0&&!e&&(t[t.length-1][1]._gfmAutolinkLiteralWalkedInto=!0),e}var Ro={tokenize:Ho,partial:!0};function Qe(){return{document:{91:{name:"gfmFootnoteDefinition",tokenize:No,continuation:{tokenize:vo},exit:qo}},text:{91:{name:"gfmFootnoteCall",tokenize:Bo},93:{name:"gfmPotentialFootnoteCall",add:"after",tokenize:_o,resolveTo:Oo}}}}function _o(t,n,e){let r=this,i=r.events.length,a=r.parser.gfmFootnotes||(r.parser.gfmFootnotes=[]),o;for(;i--;){let s=r.events[i][1];if(s.type==="labelImage"){o=s;break}if(s.type==="gfmFootnoteCall"||s.type==="labelLink"||s.type==="label"||s.type==="image"||s.type==="link")break}return u;function u(s){if(!o||!o._balanced)return e(s);let h=Y(r.sliceSerialize({start:o.end,end:r.now()}));return h.codePointAt(0)!==94||!a.includes(h.slice(1))?e(s):(t.enter("gfmFootnoteCallLabelMarker"),t.consume(s),t.exit("gfmFootnoteCallLabelMarker"),n(s))}}function Oo(t,n){let e=t.length,r;for(;e--;)if(t[e][1].type==="labelImage"&&t[e][0]==="enter"){r=t[e][1];break}t[e+1][1].type="data",t[e+3][1].type="gfmFootnoteCallLabelMarker";let i={type:"gfmFootnoteCall",start:Object.assign({},t[e+3][1].start),end:Object.assign({},t[t.length-1][1].end)},a={type:"gfmFootnoteCallMarker",start:Object.assign({},t[e+3][1].end),end:Object.assign({},t[e+3][1].end)};a.end.column++,a.end.offset++,a.end._bufferIndex++;let o={type:"gfmFootnoteCallString",start:Object.assign({},a.end),end:Object.assign({},t[t.length-1][1].start)},u={type:"chunkString",contentType:"string",start:Object.assign({},o.start),end:Object.assign({},o.end)},s=[t[e+1],t[e+2],["enter",i,n],t[e+3],t[e+4],["enter",a,n],["exit",a,n],["enter",o,n],["enter",u,n],["exit",u,n],["exit",o,n],t[t.length-2],t[t.length-1],["exit",i,n]];return t.splice(e,t.length-e+1,...s),t}function Bo(t,n,e){let r=this,i=r.parser.gfmFootnotes||(r.parser.gfmFootnotes=[]),a=0,o;return u;function u(c){return t.enter("gfmFootnoteCall"),t.enter("gfmFootnoteCallLabelMarker"),t.consume(c),t.exit("gfmFootnoteCallLabelMarker"),s}function s(c){return c!==94?e(c):(t.enter("gfmFootnoteCallMarker"),t.consume(c),t.exit("gfmFootnoteCallMarker"),t.enter("gfmFootnoteCallString"),t.enter("chunkString").contentType="string",h)}function h(c){if(a>999||c===93&&!o||c===null||c===91||O(c))return e(c);if(c===93){t.exit("chunkString");let m=t.exit("gfmFootnoteCallString");return i.includes(Y(r.sliceSerialize(m)))?(t.enter("gfmFootnoteCallLabelMarker"),t.consume(c),t.exit("gfmFootnoteCallLabelMarker"),t.exit("gfmFootnoteCall"),n):e(c)}return O(c)||(o=!0),a++,t.consume(c),c===92?l:h}function l(c){return c===91||c===92||c===93?(t.consume(c),a++,h):h(c)}}function No(t,n,e){let r=this,i=r.parser.gfmFootnotes||(r.parser.gfmFootnotes=[]),a,o=0,u;return s;function s(d){return t.enter("gfmFootnoteDefinition")._container=!0,t.enter("gfmFootnoteDefinitionLabel"),t.enter("gfmFootnoteDefinitionLabelMarker"),t.consume(d),t.exit("gfmFootnoteDefinitionLabelMarker"),h}function h(d){return d===94?(t.enter("gfmFootnoteDefinitionMarker"),t.consume(d),t.exit("gfmFootnoteDefinitionMarker"),t.enter("gfmFootnoteDefinitionLabelString"),t.enter("chunkString").contentType="string",l):e(d)}function l(d){if(o>999||d===93&&!u||d===null||d===91||O(d))return e(d);if(d===93){t.exit("chunkString");let I=t.exit("gfmFootnoteDefinitionLabelString");return a=Y(r.sliceSerialize(I)),t.enter("gfmFootnoteDefinitionLabelMarker"),t.consume(d),t.exit("gfmFootnoteDefinitionLabelMarker"),t.exit("gfmFootnoteDefinitionLabel"),m}return O(d)||(u=!0),o++,t.consume(d),d===92?c:l}function c(d){return d===91||d===92||d===93?(t.consume(d),o++,l):l(d)}function m(d){return d===58?(t.enter("definitionMarker"),t.consume(d),t.exit("definitionMarker"),i.includes(a)||i.push(a),M(t,f,"gfmFootnoteDefinitionWhitespace")):e(d)}function f(d){return n(d)}}function vo(t,n,e){return t.check(lt,n,t.attempt(Ro,n,e))}function qo(t){t.exit("gfmFootnoteDefinition")}function Ho(t,n,e){let r=this;return M(t,i,"gfmFootnoteDefinitionIndent",5);function i(a){let o=r.events[r.events.length-1];return o&&o[1].type==="gfmFootnoteDefinitionIndent"&&o[2].sliceSerialize(o[1],!0).length===4?n(a):e(a)}}function Ze(t){let e=(t||{}).singleTilde,r={name:"strikethrough",tokenize:a,resolveAll:i};return e==null&&(e=!0),{text:{126:r},insideSpan:{null:[r]},attentionMarkers:{null:[126]}};function i(o,u){let s=-1;for(;++s<o.length;)if(o[s][0]==="enter"&&o[s][1].type==="strikethroughSequenceTemporary"&&o[s][1]._close){let h=s;for(;h--;)if(o[h][0]==="exit"&&o[h][1].type==="strikethroughSequenceTemporary"&&o[h][1]._open&&o[s][1].end.offset-o[s][1].start.offset===o[h][1].end.offset-o[h][1].start.offset){o[s][1].type="strikethroughSequence",o[h][1].type="strikethroughSequence";let l={type:"strikethrough",start:Object.assign({},o[h][1].start),end:Object.assign({},o[s][1].end)},c={type:"strikethroughText",start:Object.assign({},o[h][1].end),end:Object.assign({},o[s][1].start)},m=[["enter",l,u],["enter",o[h][1],u],["exit",o[h][1],u],["enter",c,u]],f=u.parser.constructs.insideSpan.null;f&&Q(m,m.length,0,xt(f,o.slice(h+1,s),u)),Q(m,m.length,0,[["exit",c,u],["enter",o[s][1],u],["exit",o[s][1],u],["exit",l,u]]),Q(o,h-1,s-h+3,m),s=h+m.length-2;break}}for(s=-1;++s<o.length;)o[s][1].type==="strikethroughSequenceTemporary"&&(o[s][1].type="data");return o}function a(o,u,s){let h=this.previous,l=this.events,c=0;return m;function m(d){return h===126&&l[l.length-1][1].type!=="characterEscape"?s(d):(o.enter("strikethroughSequenceTemporary"),f(d))}function f(d){let I=Dt(h);if(d===126)return c>1?s(d):(o.consume(d),c++,f);if(c<2&&!e)return s(d);let y=o.exit("strikethroughSequenceTemporary"),w=Dt(d);return y._open=!w||w===2&&!!I,y._close=!I||I===2&&!!w,u(d)}}}var me=class{constructor(){this.map=[],this.index=new Map}add(n,e,r){Vo(this,n,e,r)}consume(n){if(this.map.sort(function(a,o){return a[0]-o[0]}),this.map.length===0)return;let e=this.map.length,r=[];for(;e>0;)e-=1,r.push(n.slice(this.map[e][0]+this.map[e][1]),this.map[e][2]),n.length=this.map[e][0];r.push(n.slice()),n.length=0;let i=r.pop();for(;i;){for(let a of i)n.push(a);i=r.pop()}this.map.length=0,this.index.clear()}};function Vo(t,n,e,r){if(e===0&&r.length===0)return;let i=t.index.get(n);if(i){i[1]+=e,i[2].push(...r);return}let a=[n,e,r];t.map.push(a),t.index.set(n,a)}function sr(t,n){let e=!1,r=[];for(;n<t.length;){let i=t[n];if(e){if(i[0]==="enter")i[1].type==="tableContent"&&r.push(t[n+1][1].type==="tableDelimiterMarker"?"left":"none");else if(i[1].type==="tableContent"){if(t[n-1][1].type==="tableDelimiterMarker"){let a=r.length-1;r[a]=r[a]==="left"?"center":"right"}}else if(i[1].type==="tableDelimiterRow")break}else i[0]==="enter"&&i[1].type==="tableDelimiterRow"&&(e=!0);n+=1}return r}function Ye(){return{flow:{null:{name:"table",tokenize:jo,resolveAll:Wo}}}}function jo(t,n,e){let r=this,i=0,a=0,o;return u;function u(x){let q=r.events.length-1;for(;q>-1;){let{type:B}=r.events[q][1];if(B==="lineEnding"||B==="linePrefix")q--;else break}let H=q>-1?r.events[q][1].type:null,z=H==="tableHead"||H==="tableRow"?b:s;return z===b&&r.parser.lazy[r.now().line]?e(x):z(x)}function s(x){return t.enter("tableHead"),t.enter("tableRow"),h(x)}function h(x){return x===124||(o=!0,a+=1),l(x)}function l(x){return x===null?e(x):E(x)?a>1?(a=0,r.interrupt=!0,t.exit("tableRow"),t.enter("lineEnding"),t.consume(x),t.exit("lineEnding"),f):e(x):A(x)?M(t,l,"whitespace")(x):(a+=1,o&&(o=!1,i+=1),x===124?(t.enter("tableCellDivider"),t.consume(x),t.exit("tableCellDivider"),o=!0,l):(t.enter("data"),c(x)))}function c(x){return x===null||x===124||O(x)?(t.exit("data"),l(x)):(t.consume(x),x===92?m:c)}function m(x){return x===92||x===124?(t.consume(x),c):c(x)}function f(x){return r.interrupt=!1,r.parser.lazy[r.now().line]?e(x):(t.enter("tableDelimiterRow"),o=!1,A(x)?M(t,d,"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(x):d(x))}function d(x){return x===45||x===58?y(x):x===124?(o=!0,t.enter("tableCellDivider"),t.consume(x),t.exit("tableCellDivider"),I):L(x)}function I(x){return A(x)?M(t,y,"whitespace")(x):y(x)}function y(x){return x===58?(a+=1,o=!0,t.enter("tableDelimiterMarker"),t.consume(x),t.exit("tableDelimiterMarker"),w):x===45?(a+=1,w(x)):x===null||E(x)?P(x):L(x)}function w(x){return x===45?(t.enter("tableDelimiterFiller"),S(x)):L(x)}function S(x){return x===45?(t.consume(x),S):x===58?(o=!0,t.exit("tableDelimiterFiller"),t.enter("tableDelimiterMarker"),t.consume(x),t.exit("tableDelimiterMarker"),C):(t.exit("tableDelimiterFiller"),C(x))}function C(x){return A(x)?M(t,P,"whitespace")(x):P(x)}function P(x){return x===124?d(x):x===null||E(x)?!o||i!==a?L(x):(t.exit("tableDelimiterRow"),t.exit("tableHead"),n(x)):L(x)}function L(x){return e(x)}function b(x){return t.enter("tableRow"),T(x)}function T(x){return x===124?(t.enter("tableCellDivider"),t.consume(x),t.exit("tableCellDivider"),T):x===null||E(x)?(t.exit("tableRow"),n(x)):A(x)?M(t,T,"whitespace")(x):(t.enter("data"),N(x))}function N(x){return x===null||x===124||O(x)?(t.exit("data"),T(x)):(t.consume(x),x===92?v:N)}function v(x){return x===92||x===124?(t.consume(x),N):N(x)}}function Wo(t,n){let e=-1,r=!0,i=0,a=[0,0,0,0],o=[0,0,0,0],u=!1,s=0,h,l,c,m=new me;for(;++e<t.length;){let f=t[e],d=f[1];f[0]==="enter"?d.type==="tableHead"?(u=!1,s!==0&&(cr(m,n,s,h,l),l=void 0,s=0),h={type:"table",start:Object.assign({},d.start),end:Object.assign({},d.end)},m.add(e,0,[["enter",h,n]])):d.type==="tableRow"||d.type==="tableDelimiterRow"?(r=!0,c=void 0,a=[0,0,0,0],o=[0,e+1,0,0],u&&(u=!1,l={type:"tableBody",start:Object.assign({},d.start),end:Object.assign({},d.end)},m.add(e,0,[["enter",l,n]])),i=d.type==="tableDelimiterRow"?2:l?3:1):i&&(d.type==="data"||d.type==="tableDelimiterMarker"||d.type==="tableDelimiterFiller")?(r=!1,o[2]===0&&(a[1]!==0&&(o[0]=o[1],c=pe(m,n,a,i,void 0,c),a=[0,0,0,0]),o[2]=e)):d.type==="tableCellDivider"&&(r?r=!1:(a[1]!==0&&(o[0]=o[1],c=pe(m,n,a,i,void 0,c)),a=o,o=[a[1],e,0,0])):d.type==="tableHead"?(u=!0,s=e):d.type==="tableRow"||d.type==="tableDelimiterRow"?(s=e,a[1]!==0?(o[0]=o[1],c=pe(m,n,a,i,e,c)):o[1]!==0&&(c=pe(m,n,o,i,e,c)),i=0):i&&(d.type==="data"||d.type==="tableDelimiterMarker"||d.type==="tableDelimiterFiller")&&(o[3]=e)}for(s!==0&&cr(m,n,s,h,l),m.consume(n.events),e=-1;++e<n.events.length;){let f=n.events[e];f[0]==="enter"&&f[1].type==="table"&&(f[1]._align=sr(n.events,e))}return t}function pe(t,n,e,r,i,a){let o=r===1?"tableHeader":r===2?"tableDelimiter":"tableData",u="tableContent";e[0]!==0&&(a.end=Object.assign({},Rt(n.events,e[0])),t.add(e[0],0,[["exit",a,n]]));let s=Rt(n.events,e[1]);if(a={type:o,start:Object.assign({},s),end:Object.assign({},s)},t.add(e[1],0,[["enter",a,n]]),e[2]!==0){let h=Rt(n.events,e[2]),l=Rt(n.events,e[3]),c={type:u,start:Object.assign({},h),end:Object.assign({},l)};if(t.add(e[2],0,[["enter",c,n]]),r!==2){let m=n.events[e[2]],f=n.events[e[3]];if(m[1].end=Object.assign({},f[1].end),m[1].type="chunkText",m[1].contentType="text",e[3]>e[2]+1){let d=e[2]+1,I=e[3]-e[2]-1;t.add(d,I,[])}}t.add(e[3]+1,0,[["exit",c,n]])}return i!==void 0&&(a.end=Object.assign({},Rt(n.events,i)),t.add(i,0,[["exit",a,n]]),a=void 0),a}function cr(t,n,e,r,i){let a=[],o=Rt(n.events,e);i&&(i.end=Object.assign({},o),a.push(["exit",i,n])),r.end=Object.assign({},o),a.push(["exit",r,n]),t.add(e+1,0,a)}function Rt(t,n){let e=t[n],r=e[0]==="enter"?"start":"end";return e[1][r]}var Uo={name:"tasklistCheck",tokenize:$o};function Ge(){return{text:{91:Uo}}}function $o(t,n,e){let r=this;return i;function i(s){return r.previous!==null||!r._gfmTasklistFirstContentOfListItem?e(s):(t.enter("taskListCheck"),t.enter("taskListCheckMarker"),t.consume(s),t.exit("taskListCheckMarker"),a)}function a(s){return O(s)?(t.enter("taskListCheckValueUnchecked"),t.consume(s),t.exit("taskListCheckValueUnchecked"),o):s===88||s===120?(t.enter("taskListCheckValueChecked"),t.consume(s),t.exit("taskListCheckValueChecked"),o):e(s)}function o(s){return s===93?(t.enter("taskListCheckMarker"),t.consume(s),t.exit("taskListCheckMarker"),t.exit("taskListCheck"),u):e(s)}function u(s){return E(s)?n(s):A(s)?t.check({tokenize:Qo},n,e)(s):e(s)}}function Qo(t,n,e){return M(t,r,"whitespace");function r(i){return i===null?e(i):n(i)}}function hr(t){return te([Ue(),Qe(),Ze(t),Ye(),Ge()])}function Xe(t,n){let e=String(t);if(typeof n!="string")throw new TypeError("Expected character");let r=0,i=e.indexOf(n);for(;i!==-1;)r++,i=e.indexOf(n,i+n.length);return r}function ge(t){if(typeof t!="string")throw new TypeError("Expected a string");return t.replace(/[|\\{}()[\]^$+*?.]/g,"\\$&").replace(/-/g,"\\x2d")}var _t=(function(t){if(t==null)return Xo;if(typeof t=="function")return de(t);if(typeof t=="object")return Array.isArray(t)?Zo(t):Yo(t);if(typeof t=="string")return Go(t);throw new Error("Expected function, string, or object as test")});function Zo(t){let n=[],e=-1;for(;++e<t.length;)n[e]=_t(t[e]);return de(r);function r(...i){let a=-1;for(;++a<n.length;)if(n[a].apply(this,i))return!0;return!1}}function Yo(t){let n=t;return de(e);function e(r){let i=r,a;for(a in t)if(i[a]!==n[a])return!1;return!0}}function Go(t){return de(n);function n(e){return e&&e.type===t}}function de(t){return n;function n(e,r,i){return!!(Ko(e)&&t.call(this,e,typeof r=="number"?r:void 0,i||void 0))}}function Xo(){return!0}function Ko(t){return t!==null&&typeof t=="object"&&"type"in t}var fr=[],mr=!0,Ke=!1,pr="skip";function Je(t,n,e,r){let i;typeof n=="function"&&typeof e!="function"?(r=e,e=n):i=n;let a=_t(i),o=r?-1:1;u(t,void 0,[])();function u(s,h,l){let c=s&&typeof s=="object"?s:{};if(typeof c.type=="string"){let f=typeof c.tagName=="string"?c.tagName:typeof c.name=="string"?c.name:void 0;Object.defineProperty(m,"name",{value:"node ("+(s.type+(f?"<"+f+">":""))+")"})}return m;function m(){let f=fr,d,I,y;if((!n||a(s,h,l[l.length-1]||void 0))&&(f=Jo(e(s,l)),f[0]===Ke))return f;if("children"in s&&s.children){let w=s;if(w.children&&f[0]!==pr)for(I=(r?w.children.length:-1)+o,y=l.concat(w);I>-1&&I<w.children.length;){let S=w.children[I];if(d=u(S,I,y)(),d[0]===Ke)return d;I=typeof d[1]=="number"?d[1]:I+o}}return f}}}function Jo(t){return Array.isArray(t)?t:typeof t=="number"?[mr,t]:t==null?fr:[t]}function tn(t,n,e){let i=_t((e||{}).ignore||[]),a=ta(n),o=-1;for(;++o<a.length;)Je(t,"text",u);function u(h,l){let c=-1,m;for(;++c<l.length;){let f=l[c],d=m?m.children:void 0;if(i(f,d?d.indexOf(f):void 0,m))return;m=f}if(m)return s(h,l)}function s(h,l){let c=l[l.length-1],m=a[o][0],f=a[o][1],d=0,y=c.children.indexOf(h),w=!1,S=[];m.lastIndex=0;let C=m.exec(h.value);for(;C;){let L=C.index,b={index:C.index,input:C.input,stack:[...l,h]},T=f(...C,b);if(typeof T=="string"&&(T=T.length>0?{type:"text",value:T}:void 0),T===!1)m.lastIndex=L+1;else{if(d!==L&&P({type:"text",value:h.value.slice(d,L)}),Array.isArray(T))for(let N of T)P(N);else T&&P(T);d=L+C[0].length,w=!0}if(!m.global)break;C=m.exec(h.value)}return w?(d<h.value.length&&P({type:"text",value:h.value.slice(d)}),c.children.splice(y,1,...S)):S=[h],y+S.length;function P(L){let b=S[S.length-1];b&&b.type==="text"&&L.type==="text"?b.value+=L.value:S.push(L)}}}function ta(t){if(!Array.isArray(t))throw new TypeError("Expected find and replace tuple or list of tuples");let n=[],e=!t[0]||Array.isArray(t[0])?t:[t],r=-1;for(;++r<e.length;){let i=e[r];n.push([ea(i[0]),na(i[1])])}return n}function ea(t){return typeof t=="string"?new RegExp(ge(t),"g"):t}function na(t){return typeof t=="function"?t:function(){return t}}function nn(){return{transforms:[la],enter:{literalAutolink:ra,literalAutolinkEmail:en,literalAutolinkHttp:en,literalAutolinkWww:en},exit:{literalAutolink:ua,literalAutolinkEmail:aa,literalAutolinkHttp:ia,literalAutolinkWww:oa}}}function ra(t){this.enter({type:"link",title:null,url:"",children:[]},t)}function en(t){this.config.enter.autolinkProtocol.call(this,t)}function ia(t){this.config.exit.autolinkProtocol.call(this,t)}function oa(t){this.config.exit.data.call(this,t);let n=this.stack[this.stack.length-1];n.type,n.url="http://"+this.sliceSerialize(t)}function aa(t){this.config.exit.autolinkEmail.call(this,t)}function ua(t){this.exit(t)}function la(t){tn(t,[[/(https?:\/\/|www(?=\.))([-.\w]+)([^ \t\r\n]*)/gi,sa],[/(?<=^|\s|\p{P}|\p{S})([-.\w+]+)@([-\w]+(?:\.[-\w]+)+)/gu,ca]],{ignore:["link","linkReference"]})}function sa(t,n,e,r,i){let a="";if(!gr(i)||(/^w/i.test(n)&&(e=n+e,n="",a="http://"),!ha(e)))return!1;let o=fa(e+r);if(!o[0])return!1;let u={type:"link",title:null,url:a+n+o[0],children:[{type:"text",value:n+o[0]}]};return o[1]?[u,{type:"text",value:o[1]}]:u}function ca(t,n,e,r){return!gr(r,!0)||/[-\d_]$/.test(e)?!1:{type:"link",title:null,url:"mailto:"+n+"@"+e,children:[{type:"text",value:n+"@"+e}]}}function ha(t){let n=t.split(".");return!(n.length<2||n[n.length-1]&&(/_/.test(n[n.length-1])||!/[a-zA-Z\d]/.test(n[n.length-1]))||n[n.length-2]&&(/_/.test(n[n.length-2])||!/[a-zA-Z\d]/.test(n[n.length-2])))}function fa(t){let n=/[!"&'),.:;<>?\]}]+$/.exec(t);if(!n)return[t,void 0];t=t.slice(0,n.index);let e=n[0],r=e.indexOf(")"),i=Xe(t,"("),a=Xe(t,")");for(;r!==-1&&i>a;)t+=e.slice(0,r+1),e=e.slice(r+1),r=e.indexOf(")"),a++;return[t,e]}function gr(t,n){let e=t.input.charCodeAt(t.index-1);return(t.index===0||ut(e)||yt(e))&&(!n||e!==47)}Ca.peek=Sa;function pa(){this.buffer()}function ga(t){this.enter({type:"footnoteReference",identifier:"",label:""},t)}function da(){this.buffer()}function xa(t){this.enter({type:"footnoteDefinition",identifier:"",label:"",children:[]},t)}function ka(t){let n=this.resume(),e=this.stack[this.stack.length-1];e.type,e.identifier=Y(this.sliceSerialize(t)).toLowerCase(),e.label=n}function ba(t){this.exit(t)}function wa(t){let n=this.resume(),e=this.stack[this.stack.length-1];e.type,e.identifier=Y(this.sliceSerialize(t)).toLowerCase(),e.label=n}function ya(t){this.exit(t)}function Sa(){return"["}function Ca(t,n,e,r){let i=e.createTracker(r),a=i.move("[^"),o=e.enter("footnoteReference"),u=e.enter("reference");return a+=i.move(e.safe(e.associationId(t),{after:"]",before:a})),u(),o(),a+=i.move("]"),a}function rn(){return{enter:{gfmFootnoteCallString:pa,gfmFootnoteCall:ga,gfmFootnoteDefinitionLabelString:da,gfmFootnoteDefinition:xa},exit:{gfmFootnoteCallString:ka,gfmFootnoteCall:ba,gfmFootnoteDefinitionLabelString:wa,gfmFootnoteDefinition:ya}}}dr.attention=Ia;dr.peek=Aa;function on(){return{canContainEols:["delete"],enter:{strikethrough:Fa},exit:{strikethrough:Ta}}}function Fa(t){this.enter({type:"delete",children:[],position:void 0},t)}function Ta(t){this.exit(t)}function dr(t,n,e,r){let i=e.createTracker(r),a=e.stack.includes("strikethrough")?"~":"~~",o=e.enter("strikethrough"),u=i.move(a);return u+=e.containerPhrasing(t,{...i.current(),before:u,after:"~"}),u+=i.move(a),o(),u}function Ia(){return{construct:"strikethrough",markers:["~"],sizes:[2,1]}}function Aa(){return"~"}function un(){return{enter:{table:Ma,tableData:xr,tableHeader:xr,tableRow:Da},exit:{codeText:Pa,table:La,tableData:an,tableHeader:an,tableRow:an}}}function Ma(t){let n=t._align;this.enter({type:"table",align:n.map(function(e){return e==="none"?null:e}),children:[]},t),this.data.inTable=!0}function La(t){this.exit(t),this.data.inTable=void 0}function Da(t){this.enter({type:"tableRow",children:[]},t)}function an(t){this.exit(t)}function xr(t){this.enter({type:"tableCell",children:[]},t)}function Pa(t){let n=this.resume();this.data.inTable&&(n=n.replace(/\\([\\|])/g,Ra));let e=this.stack[this.stack.length-1];e.type,e.value=n,this.exit(t)}function Ra(t,n){return n==="|"?n:t}function ln(){return{exit:{taskListCheckValueChecked:kr,taskListCheckValueUnchecked:kr,paragraph:Oa}}}function kr(t){let n=this.stack[this.stack.length-2];n.type,n.checked=t.type==="taskListCheckValueChecked"}function Oa(t){let n=this.stack[this.stack.length-2];if(n&&n.type==="listItem"&&typeof n.checked=="boolean"){let e=this.stack[this.stack.length-1];e.type;let r=e.children[0];if(r&&r.type==="text"){let i=n.children,a=-1,o;for(;++a<i.length;){let u=i[a];if(u.type==="paragraph"){o=u;break}}o===e&&(r.value=r.value.slice(1),r.value.length===0?e.children.shift():e.position&&r.position&&typeof r.position.start.offset=="number"&&(r.position.start.column++,r.position.start.offset++,e.position.start=Object.assign({},r.position.start)))}}this.exit(t)}function sn(){return[nn(),rn(),on(),un(),ln()]}var wr={tokenize:Na,concrete:!0,name:"mathFlow"},br={tokenize:va,partial:!0};function Na(t,n,e){let r=this,i=r.events[r.events.length-1],a=i&&i[1].type==="linePrefix"?i[2].sliceSerialize(i[1],!0).length:0,o=0;return u;function u(S){return t.enter("mathFlow"),t.enter("mathFlowFence"),t.enter("mathFlowFenceSequence"),s(S)}function s(S){return S===36?(t.consume(S),o++,s):o<2?e(S):(t.exit("mathFlowFenceSequence"),M(t,h,"whitespace")(S))}function h(S){return S===null||E(S)?c(S):(t.enter("mathFlowFenceMeta"),t.enter("chunkString",{contentType:"string"}),l(S))}function l(S){return S===null||E(S)?(t.exit("chunkString"),t.exit("mathFlowFenceMeta"),c(S)):S===36?e(S):(t.consume(S),l)}function c(S){return t.exit("mathFlowFence"),r.interrupt?n(S):t.attempt(br,m,y)(S)}function m(S){return t.attempt({tokenize:w,partial:!0},y,f)(S)}function f(S){return(a?M(t,d,"linePrefix",a+1):d)(S)}function d(S){return S===null?y(S):E(S)?t.attempt(br,m,y)(S):(t.enter("mathFlowValue"),I(S))}function I(S){return S===null||E(S)?(t.exit("mathFlowValue"),d(S)):(t.consume(S),I)}function y(S){return t.exit("mathFlow"),n(S)}function w(S,C,P){let L=0;return M(S,b,"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4);function b(v){return S.enter("mathFlowFence"),S.enter("mathFlowFenceSequence"),T(v)}function T(v){return v===36?(L++,S.consume(v),T):L<o?P(v):(S.exit("mathFlowFenceSequence"),M(S,N,"whitespace")(v))}function N(v){return v===null||E(v)?(S.exit("mathFlowFence"),C(v)):P(v)}}}function va(t,n,e){let r=this;return i;function i(o){return o===null?n(o):(t.enter("lineEnding"),t.consume(o),t.exit("lineEnding"),a)}function a(o){return r.parser.lazy[r.now().line]?e(o):n(o)}}function yr(t){let e=(t||{}).singleDollarTextMath;return e==null&&(e=!0),{tokenize:r,resolve:qa,previous:Ha,name:"mathText"};function r(i,a,o){let u=this,s=0,h,l;return c;function c(y){return i.enter("mathText"),i.enter("mathTextSequence"),m(y)}function m(y){return y===36?(i.consume(y),s++,m):s<2&&!e?o(y):(i.exit("mathTextSequence"),f(y))}function f(y){return y===null?o(y):y===36?(l=i.enter("mathTextSequence"),h=0,I(y)):y===32?(i.enter("space"),i.consume(y),i.exit("space"),f):E(y)?(i.enter("lineEnding"),i.consume(y),i.exit("lineEnding"),f):(i.enter("mathTextData"),d(y))}function d(y){return y===null||y===32||y===36||E(y)?(i.exit("mathTextData"),f(y)):(i.consume(y),d)}function I(y){return y===36?(i.consume(y),h++,I):h===s?(i.exit("mathTextSequence"),i.exit("mathText"),a(y)):(l.type="mathTextData",d(y))}}}function qa(t){let n=t.length-4,e=3,r,i;if((t[e][1].type==="lineEnding"||t[e][1].type==="space")&&(t[n][1].type==="lineEnding"||t[n][1].type==="space")){for(r=e;++r<n;)if(t[r][1].type==="mathTextData"){t[n][1].type="mathTextPadding",t[e][1].type="mathTextPadding",e+=2,n-=2;break}}for(r=e-1,n++;++r<=n;)i===void 0?r!==n&&t[r][1].type!=="lineEnding"&&(i=r):(r===n||t[r][1].type==="lineEnding")&&(t[i][1].type="mathTextData",r!==i+2&&(t[i][1].end=t[r-1][1].end,t.splice(i+2,r-i-2),n-=r-i-2,r=i+2),i=void 0);return t}function Ha(t){return t!==36||this.events[this.events.length-1][1].type==="characterEscape"}function cn(t){return{flow:{36:wr},text:{36:yr(t)}}}function hn(){return{enter:{mathFlow:t,mathFlowFenceMeta:n,mathText:a},exit:{mathFlow:i,mathFlowFence:r,mathFlowFenceMeta:e,mathFlowValue:u,mathText:o,mathTextData:u}};function t(s){let h={type:"element",tagName:"code",properties:{className:["language-math","math-display"]},children:[]};this.enter({type:"math",meta:null,value:"",data:{hName:"pre",hChildren:[h]}},s)}function n(){this.buffer()}function e(){let s=this.resume(),h=this.stack[this.stack.length-1];h.type,h.meta=s}function r(){this.data.mathFlowInside||(this.buffer(),this.data.mathFlowInside=!0)}function i(s){let h=this.resume().replace(/^(\r?\n|\r)|(\r?\n|\r)$/g,""),l=this.stack[this.stack.length-1];l.type,this.exit(s),l.value=h;let c=l.data.hChildren[0];c.type,c.tagName,c.children.push({type:"text",value:h}),this.data.mathFlowInside=void 0}function a(s){this.enter({type:"inlineMath",value:"",data:{hName:"code",hProperties:{className:["language-math","math-inline"]},hChildren:[]}},s),this.buffer()}function o(s){let h=this.resume(),l=this.stack[this.stack.length-1];l.type,this.exit(s),l.value=h,l.data.hChildren.push({type:"text",value:h})}function u(s){this.config.enter.data.call(this,s),this.config.exit.data.call(this,s)}}var Cr=Qr(Sr(),1),$t=Object.assign(Tt(Error),{eval:Tt(EvalError),range:Tt(RangeError),reference:Tt(ReferenceError),syntax:Tt(SyntaxError),type:Tt(TypeError),uri:Tt(URIError)});function Tt(t){return n.displayName=t.displayName||t.name,n;function n(e,...r){let i=e&&(0,Cr.default)(e,...r);return new t(i)}}var xe={}.hasOwnProperty,Er={yaml:"-",toml:"+"};function Qt(t){let n=[],e=-1,r=Array.isArray(t)?t:t?[t]:["yaml"];for(;++e<r.length;)n[e]=Va(r[e]);return n}function Va(t){let n=t;if(typeof n=="string"){if(!xe.call(Er,n))throw $t("Missing matter definition for `%s`",n);n={type:n,marker:Er[n]}}else if(typeof n!="object")throw $t("Expected matter to be an object, not `%j`",n);if(!xe.call(n,"type"))throw $t("Missing `type` in matter `%j`",n);if(!xe.call(n,"fence")&&!xe.call(n,"marker"))throw $t("Missing `marker` or `fence` in matter `%j`",n);return n}function pn(t){let n=Qt(t),e={},r=-1;for(;++r<n.length;){let i=n[r],a=mn(i,"open").charCodeAt(0),o=ja(i),u=e[a];Array.isArray(u)?u.push(o):e[a]=[o]}return{flow:e}}function ja(t){let n=t.anywhere,e=t.type,r=e+"Fence",i=r+"Sequence",a=e+"Value",o={tokenize:l,partial:!0},u,s=0;return{tokenize:h,concrete:!0};function h(c,m,f){let d=this;return I;function I(T){let N=d.now();return N.column===1&&(N.line===1||n)&&(u=mn(t,"open"),s=0,T===u.charCodeAt(s))?(c.enter(e),c.enter(r),c.enter(i),y(T)):f(T)}function y(T){return s===u.length?(c.exit(i),A(T)?(c.enter("whitespace"),w(T)):S(T)):T===u.charCodeAt(s++)?(c.consume(T),y):f(T)}function w(T){return A(T)?(c.consume(T),w):(c.exit("whitespace"),S(T))}function S(T){return E(T)?(c.exit(r),c.enter("lineEnding"),c.consume(T),c.exit("lineEnding"),u=mn(t,"close"),s=0,c.attempt(o,b,C)):f(T)}function C(T){return T===null||E(T)?L(T):(c.enter(a),P(T))}function P(T){return T===null||E(T)?(c.exit(a),L(T)):(c.consume(T),P)}function L(T){return T===null?f(T):(c.enter("lineEnding"),c.consume(T),c.exit("lineEnding"),c.attempt(o,b,C))}function b(T){return c.exit(e),m(T)}}function l(c,m,f){let d=0;return I;function I(C){return C===u.charCodeAt(d)?(c.enter(r),c.enter(i),y(C)):f(C)}function y(C){return d===u.length?(c.exit(i),A(C)?(c.enter("whitespace"),w(C)):S(C)):C===u.charCodeAt(d++)?(c.consume(C),y):f(C)}function w(C){return A(C)?(c.consume(C),w):(c.exit("whitespace"),S(C))}function S(C){return C===null||E(C)?(c.exit(r),m(C)):f(C)}}}function mn(t,n){return t.marker?Fr(t.marker,n).repeat(3):Fr(t.fence,n)}function Fr(t,n){return typeof t=="string"?t:t[n]}function gn(t){let n=Qt(t),e={},r={},i=-1;for(;++i<n.length;){let a=n[i];e[a.type]=Wa(a),r[a.type]=Ua,r[a.type+"Value"]=$a}return{enter:e,exit:r}}function Wa(t){return n;function n(e){this.enter({type:t.type,value:""},e),this.buffer()}}function Ua(t){let n=this.resume(),e=this.stack[this.stack.length-1];"value"in e,this.exit(t),e.value=n.replace(/^(\r?\n|\r)|(\r?\n|\r)$/g,"")}function $a(t){this.config.enter.data.call(this,t),this.config.exit.data.call(this,t)}var Ir=(t,n)=>t.from<n.to&&n.from<t.to,Qa=t=>({from:t.position?.start.offset??0,to:t.position?.end.offset??0});function It(t){let n=je(t,{extensions:[hr(),cn(),pn(["yaml"])],mdastExtensions:[sn(),hn(),gn(["yaml"])]}),e=[],r=[],i=[],a=[];for(let l of t.matchAll(/%%[\s\S]*?(?:%%|$)/g)){let c={from:l.index,to:l.index+l[0].length};e.push(c),r.push(c)}let o=/!?\[\[[^\]\r\n]*(?:\](?!\])[^\]\r\n]*)*\]\]/g;for(let l of t.matchAll(o)){let c={from:l.index,to:l.index+l[0].length};e.push(c),r.push(c)}for(let l of t.matchAll(/(?:[A-Za-z][A-Za-z0-9+.-]*:\/\/|mailto:|www\.)[^\s<>[\]]+/g))e.push({from:l.index,to:l.index+l[0].length});function u(l){let c=Qa(l);if(["code","inlineCode","math","inlineMath","yaml","definition","image","imageReference"].includes(l.type)){e.push(c);return}if(l.type==="html"){a.push({value:l.value,range:c}),e.push(c);return}if(l.type==="link"&&t[c.from]!=="["&&e.push(c),l.type==="text"){let m=t.slice(c.from,c.to),f="",d=new Map,I=/\\[!"#$%&'()*+,\-./:;<=>?@[\]\\^_`{|}~]|&(?:#[xX][0-9a-fA-F]+|#\d+|[A-Za-z][A-Za-z0-9]+);|\r\n|[\s\S]/g;for(let y of m.matchAll(I)){let w=c.from+y.index;d.set(w,f.length),f+=fe(y[0]).replace(/\r\n?/g,`
`),d.set(w+y[0].length,f.length),(y[0].startsWith("&")||y[0].startsWith("\\")&&y[0].length===2)&&e.push({from:w,to:w+y[0].length})}f===l.value&&i.push({...c,value:f,boundaries:d});return}if("children"in l)for(let m of l.children)u(m)}u(n);let s=[];for(let l of a)for(let c of l.value.matchAll(/<\/?([A-Za-z][\w:-]*)\b[^>]*>/g)){let m=c[1].toLowerCase(),f=l.range.from+c.index,d=f+c[0].length;if(c[0].startsWith("</")){let I=s.map(y=>y.tag).lastIndexOf(m);I>=0&&(e.push({from:s[I].from,to:d}),s.splice(I))}else!c[0].endsWith("/>")&&!/^(?:area|base|br|col|embed|hr|img|input|link|meta|param|source|track|wbr)$/.test(m)&&s.push({tag:m,from:f})}for(let l of s)e.push({from:l.from,to:t.length});let h=[0];for(let l=0;l<t.length;l++)t[l]===`
`&&h.push(l+1);return{source:t,runs:i,protected:Tr(e),omitted:Tr(r),lineOffsets:h}}function ke(t,n){let e=[];for(let r of t.runs)for(let i of An(t.source.slice(r.from,r.to),n,r.from))Za(t.protected,i)||i.kind==="script"&&/[\p{L}\p{N}_\\^]/u.test(t.source[i.from-1]??"")||e.push(i);return e}function Ar(t,n){let e="",r=ke(t,n),i=[];for(let a of t.runs){let o=new Set;for(let s of t.omitted){if(!Ir(a,s))continue;let h=a.boundaries.get(Math.max(a.from,s.from)),l=a.boundaries.get(Math.min(a.to,s.to));if(h!==void 0&&l!==void 0)for(let c=h;c<l;c++)o.add(c)}let u=new Map;for(let s=0;s<=a.value.length;s++)u.set(s,e.length),s<a.value.length&&!o.has(s)&&!/\s/.test(a.value[s])&&(e+=a.value[s]);for(let s of r){if(s.from<a.from||s.to>a.to)continue;let h=a.boundaries.get(s.from),l=a.boundaries.get(s.to);h===void 0||l===void 0||i.push({match:s,from:u.get(h),to:u.get(l)})}}return{text:e,matches:i}}function zr(t,n,e){let r=t.lineOffsets[n]??t.source.length,i=t.lineOffsets[e+1]??t.source.length;return{...t,runs:t.runs.filter(a=>a.from>=r&&a.to<=i)}}function Tr(t){let n=t.sort((r,i)=>r.from-i.from||r.to-i.to),e=[];for(let r of n){let i=e[e.length-1];i&&r.from<=i.to?i.to=Math.max(i.to,r.to):e.push({...r})}return e}function Za(t,n){let e=0,r=t.length;for(;e<r;){let i=e+r>>>1;t[i].to<=n.from?e=i+1:r=i}return e<t.length&&Ir(t[e],n)}var Yt=Lr.StateEffect.define();function Mr(t,n){return n.some(e=>e.from<=t.to&&e.to>=t.from)}var dn=class extends it.WidgetType{constructor(e){super();this.match=e}eq(e){return this.match.source===e.match.source&&this.match.kind===e.match.kind}toDOM(e){return Jt(e.dom.ownerDocument,this.match)}ignoreEvent(){return!1}};function Dr(t,n,e){return it.ViewPlugin.fromClass(class{constructor(r){this.view=r;this.decorations=it.Decoration.none;this.needsBuild=!1;this.destroyed=!1;e.add(r),this.analysis=It(r.state.doc.toString()),this.matches=ke(this.analysis,t()),r.compositionStarted?this.needsBuild=!0:this.build()}update(r){let i=r.transactions.some(a=>a.effects.some(o=>o.is(Yt)));if(r.docChanged&&(this.analysis=It(r.state.doc.toString())),(r.docChanged||i)&&(this.matches=ke(this.analysis,t())),this.needsBuild||(this.needsBuild=this.view.compositionStarted||r.docChanged||i||r.selectionSet||r.viewportChanged||r.startState.field(Zt.editorLivePreviewField,!1)!==r.state.field(Zt.editorLivePreviewField,!1)),!!this.needsBuild)if(this.view.compositionStarted)if(!n()||!this.view.state.field(Zt.editorLivePreviewField,!1))this.decorations=it.Decoration.none;else{let a=new Map(this.matches.map(o=>[o.from,o]));this.decorations=this.decorations.map(r.changes).update({filter:(o,u,s)=>{let h=a.get(o),l=s.spec.widget;return h?.to===u&&h.source===l.match.source&&h.kind===l.match.kind&&!Mr(h,r.state.selection.ranges)}})}else this.build(),this.needsBuild=!1}build(){if(!n()||!this.view.state.field(Zt.editorLivePreviewField,!1)){this.decorations=it.Decoration.none;return}let r=[];for(let i of this.view.visibleRanges){let a=0,o=this.matches.length;for(;a<o;){let u=a+o>>>1;this.matches[u].to<=i.from?a=u+1:o=u}for(let u=a;u<this.matches.length&&this.matches[u].from<i.to;u++){let s=this.matches[u];s.from<i.from||s.to>i.to||Mr(s,this.view.state.selection.ranges)||r.push(it.Decoration.replace({widget:new dn(s),inclusive:!1}).range(s.from,s.to))}}this.decorations=it.Decoration.set(r,!0)}compositionEnded(){queueMicrotask(()=>{this.destroyed||this.view.dispatch({effects:Yt.of()})})}destroy(){this.destroyed=!0,this.decorations=it.Decoration.none,e.delete(this.view)}},{decorations:r=>r.decorations,eventObservers:{compositionend(){this.compositionEnded()}}})}var Ya="pre,code,mjx-container,math,.math,.internal-link,.internal-embed,.frontmatter,.metadata-container,.footnotes,.easy-symbols,script,style,button,.heading-collapse-indicator,.list-collapse-indicator",be=class{constructor(n,e){this.element=n;this.source=e;this.replacements=[]}restore(){for(let{rendered:n,original:e}of this.replacements)n.parentNode&&n.replaceWith(e);this.replacements=[]}render(n){this.restore();let e=Ar(typeof this.source=="string"?It(this.source):this.source,n);if(!e.matches.length)return!0;let r=this.element.ownerDocument,i=[],a="",o=r.createTreeWalker(this.element,4);for(let u=o.nextNode();u;u=o.nextNode())if(!u.parentElement?.closest(Ya))for(let s=0;s<u.data.length;s++)/\s/.test(u.data[s])||(a+=u.data[s],i.push({node:u,offset:s}));if(a!==e.text)return!1;for(let u of e.matches.reverse()){let s=i[u.from],h=i[u.to-1];if(!s||!h||s.node.parentElement!==h.node.parentElement)continue;let l=r.createRange();if(l.setStart(s.node,s.offset),l.setEnd(h.node,h.offset+1),l.toString()!==u.match.source)continue;let c=l.extractContents(),m=Jt(r,u.match);l.insertNode(m),this.replacements.push({rendered:m,original:c})}return!0}};var we=class extends ct.Plugin{constructor(){super(...arguments);this.settings={...Ee};this.enabled=!1;this.cache=new Map;this.views=new Set;this.reading=new Set}async onload(){this.settings=In(await this.loadData()),this.enabled=!0,this.registerEditorExtension(Dr(()=>this.settings,()=>this.enabled,this.views)),this.registerMarkdownPostProcessor((e,r)=>{if(e.closest(".markdown-source-view"))return;let i=r.getSectionInfo(e);if(!i||!this.enabled)return;let a=this.cache.get(r.sourcePath);(!a||a.source!==i.text)&&(a=It(i.text),this.cache.size>=8&&this.cache.delete(this.cache.keys().next().value),this.cache.set(r.sourcePath,a));let o=new be(e,zr(a,i.lineStart,i.lineEnd));this.reading.add(o);let u=new ct.MarkdownRenderChild(e);u.register(()=>{o.restore(),this.reading.delete(o)}),r.addChild(u),o.render(this.settings)}),this.addSettingTab(new xn(this.app,this)),this.app.workspace.onLayoutReady(()=>{this.enabled&&this.rerenderPreviews()})}async changeSetting(e,r){this.settings={...this.settings,[e]:r},this.refresh(),await this.saveData(this.settings)}refresh(){for(let e of this.views)e.dispatch({effects:Yt.of()});for(let e of this.reading)e.render(this.settings)}rerenderPreviews(){this.app.workspace.iterateAllLeaves(e=>{e.view instanceof ct.MarkdownView&&e.view.previewMode.rerender(!0)})}onunload(){this.enabled=!1;for(let e of this.views)e.dispatch({effects:Yt.of()});for(let e of this.reading)e.restore();this.reading.clear(),this.cache.clear(),this.views.clear()}},xn=class extends ct.PluginSettingTab{constructor(e,r){super(e,r);this.plugin=r}getSettingDefinitions(){return[["arrows","Arrows","Show typed arrows as symbols, such as -> for \u2192 and <=> for \u21D4.","arrows"],["scripts","Subscripts & superscripts","Show x_i as x\u1D62 and x^2 as x\xB2. Use one letter for subscripts or superscripts, or one or more digits for superscripts only.","subscripts--superscripts"],["operators","Math operators","Show comparisons and other operators as symbols, such as >= \u2192 \u2265 and != \u2192 \u2260. The input <= always means \u2264.","math-operators"],["latex","Symbols from commands","Show backslash commands as symbols, such as \\alpha \u2192 \u03B1 and \\infty \u2192 \u221E. Includes arrow and math operator commands.","symbols-from-commands"]].map(([r,i,a,o])=>({name:i,desc:a,render:u=>{u.setDesc(a+" "),u.descEl.createEl("a",{text:"View all supported shortcuts",cls:"external-link",attr:{href:`https://github.com/chaovven/obsidian-easy-symbols#${o}`,target:"_blank",rel:"noopener noreferrer","aria-label":`View all supported shortcuts: ${i}`}}),u.addToggle(s=>{s.setValue(this.plugin.settings[r]).onChange(async h=>{await this.plugin.changeSetting(r,h)})})}}))}display(){this.containerEl.empty();for(let e of this.getSettingDefinitions()){let r=new ct.Setting(this.containerEl).setName(e.name);e.render(r)}}};

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
