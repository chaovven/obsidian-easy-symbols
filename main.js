"use strict";var Or=Object.create;var Kt=Object.defineProperty;var Br=Object.getOwnPropertyDescriptor;var Nr=Object.getOwnPropertyNames;var qr=Object.getPrototypeOf,Hr=Object.prototype.hasOwnProperty;var jr=(t,e)=>()=>{try{return e||t((e={exports:{}}).exports,e),e.exports}catch(n){throw e=0,n}},Ee=(t,e)=>{for(var n in e)Kt(t,n,{get:e[n],enumerable:!0})},Fe=(t,e,n,r)=>{if(e&&typeof e=="object"||typeof e=="function")for(let i of Nr(e))!Hr.call(t,i)&&i!==n&&Kt(t,i,{get:()=>e[i],enumerable:!(r=Br(e,i))||r.enumerable});return t};var Vr=(t,e,n)=>(n=t!=null?Or(qr(t)):{},Fe(e||!t||!t.__esModule?Kt(n,"default",{value:t,enumerable:!0}):n,t)),Wr=t=>Fe(Kt({},"__esModule",{value:!0}),t);var Sr=jr((cf,ce)=>{(function(){var t;typeof ce<"u"?t=ce.exports=r:t=(function(){return this||(0,eval)("this")})(),t.format=r,t.vsprintf=n,typeof console<"u"&&typeof console.log=="function"&&(t.printf=e);function e(){console.log(r.apply(null,arguments))}function n(i,a){return r.apply(null,[i].concat(a))}function r(i){for(var a=1,o=[].slice.call(arguments),u=0,c=i.length,m="",l,s=!1,p,f,x=!1,T,w=function(){return o[a++]},b=function(){for(var S="";/\d/.test(i[u]);)S+=i[u++],l=i[u];return S.length>0?parseInt(S):null};u<c;++u)if(l=i[u],s)switch(s=!1,l=="."?(x=!1,l=i[++u]):l=="0"&&i[u+1]=="."?(x=!0,u+=2,l=i[u]):x=!0,T=b(),l){case"b":m+=parseInt(w(),10).toString(2);break;case"c":p=w(),typeof p=="string"||p instanceof String?m+=p:m+=String.fromCharCode(parseInt(p,10));break;case"d":m+=parseInt(w(),10);break;case"f":f=String(parseFloat(w()).toFixed(T||6)),m+=x?f:f.replace(/^0/,"");break;case"j":m+=JSON.stringify(w());break;case"o":m+="0"+parseInt(w(),10).toString(8);break;case"s":m+=w();break;case"x":m+="0x"+parseInt(w(),10).toString(16);break;case"X":m+="0x"+parseInt(w(),10).toString(16).toUpperCase();break;default:m+=l;break}else l==="%"?s=!0:m+=l;return m}})()});var Ua={};Ee(Ua,{default:()=>bn});module.exports=Wr(Ua);var Nt=require("obsidian");var Cn={scripts:!0,latex:!0,arrows:!0,operators:!0};function Ie(t){let e={...Cn};if(t&&typeof t=="object")for(let n of Object.keys(e))typeof t[n]=="boolean"&&(e[n]=t[n]);return e}var $r={alpha:"\u03B1",beta:"\u03B2",gamma:"\u03B3",delta:"\u03B4",epsilon:"\u03B5",zeta:"\u03B6",eta:"\u03B7",theta:"\u03B8",iota:"\u03B9",kappa:"\u03BA",lambda:"\u03BB",mu:"\u03BC",nu:"\u03BD",xi:"\u03BE",omicron:"\u03BF",pi:"\u03C0",rho:"\u03C1",sigma:"\u03C3",tau:"\u03C4",upsilon:"\u03C5",phi:"\u03C6",chi:"\u03C7",psi:"\u03C8",omega:"\u03C9",Gamma:"\u0393",Delta:"\u0394",Theta:"\u0398",Lambda:"\u039B",Xi:"\u039E",Pi:"\u03A0",Sigma:"\u03A3",Upsilon:"\u03A5",Phi:"\u03A6",Psi:"\u03A8",Omega:"\u03A9",varepsilon:"\u03B5",varphi:"\u03C6",vartheta:"\u03D1",varkappa:"\u03F0",varpi:"\u03D6",varrho:"\u03F1",varsigma:"\u03C2",infty:"\u221E",emptyset:"\u2205",varnothing:"\u2205",sum:"\u2211",prod:"\u220F",int:"\u222B",sqrt:"\u221A",partial:"\u2202",nabla:"\u2207",forall:"\u2200",exists:"\u2203",in:"\u2208",ni:"\u220B",notin:"\u2209",subset:"\u2282",supset:"\u2283",subseteq:"\u2286",supseteq:"\u2287",cup:"\u222A",cap:"\u2229",land:"\u2227",wedge:"\u2227",lor:"\u2228",vee:"\u2228",neg:"\xAC",rightarrow:"\u2192",to:"\u2192",leftarrow:"\u2190",leftrightarrow:"\u2194",mapsto:"\u21A6",longrightarrow:"\u27F6",longleftarrow:"\u27F5",longleftrightarrow:"\u27F7",Rightarrow:"\u21D2",Leftarrow:"\u21D0",Leftrightarrow:"\u21D4",geq:"\u2265",ge:"\u2265",leq:"\u2264",le:"\u2264",neq:"\u2260",ne:"\u2260",ll:"\u226A",gg:"\u226B",approx:"\u2248",propto:"\u221D",equiv:"\u2261",sim:"\u223C",simeq:"\u2243",cong:"\u2245",perp:"\u22A5",parallel:"\u2225",pm:"\xB1",mp:"\u2213",times:"\xD7",cdot:"\u22C5",div:"\xF7",oplus:"\u2295",otimes:"\u2297",ldots:"\u2026",cdots:"\u22EF",vdots:"\u22EE",ddots:"\u22F1"},Ur={"->":"\u2192","<-":"\u2190","<->":"\u2194","-->":"\u27F6","<--":"\u27F5","<-->":"\u27F7","=>":"\u21D2","<=>":"\u21D4"},vr={">=":"\u2265","<=":"\u2264","!=":"\u2260","~=":"\u2248","+-":"\xB1","-+":"\u2213"};function bt(t,e){let n=Array.from(e);return Object.fromEntries(Array.from(t,(r,i)=>[r,n[i]]))}var Sn=(t,e)=>Object.prototype.hasOwnProperty.call(t,e)?t[e]:void 0,Qr={...bt("0123456789+-=()","\u2070\xB9\xB2\xB3\u2074\u2075\u2076\u2077\u2078\u2079\u207A\u207B\u207C\u207D\u207E"),...bt("abcdefghijklmnoprstuvwxyz","\u1D43\u1D47\u1D9C\u1D48\u1D49\u1DA0\u1D4D\u02B0\u2071\u02B2\u1D4F\u02E1\u1D50\u207F\u1D52\u1D56\u02B3\u02E2\u1D57\u1D58\u1D5B\u02B7\u02E3\u02B8\u1DBB"),...bt("ABDEGHIJKLMNOPRTUVW","\u1D2C\u1D2E\u1D30\u1D31\u1D33\u1D34\u1D35\u1D36\u1D37\u1D38\u1D39\u1D3A\u1D3C\u1D3E\u1D3F\u1D40\u1D41\u2C7D\u1D42"),...bt("\u03B2\u03B3\u03B4\u03B8\u03C6\u03C7","\u1D5D\u1D5E\u1D5F\u1DBF\u1D60\u1D61"),"\u2212":"\u207B"},Zr={...bt("0123456789+-=()","\u2080\u2081\u2082\u2083\u2084\u2085\u2086\u2087\u2088\u2089\u208A\u208B\u208C\u208D\u208E"),...bt("aehijklmnoprstuvx","\u2090\u2091\u2095\u1D62\u2C7C\u2096\u2097\u2098\u2099\u2092\u209A\u1D63\u209B\u209C\u1D64\u1D65\u2093"),...bt("\u03B2\u03B3\u03C1\u03C6\u03C7","\u1D66\u1D67\u1D68\u1D69\u1D6A"),"\u2212":"\u208B"};function Te(t,e,n){let r=/\S+$/.exec(t.slice(0,e))?.[0];if(!r)return;let i=e-r.length,a=(n.arrows?Sn(Ur,r):void 0)??(n.operators?Sn(vr,r):void 0)??(n.latex&&/^\\[A-Za-z]+$/.test(r)?Sn($r,r.slice(1)):void 0);if(a)return{from:i,to:e,source:r,text:a};if(!n.scripts)return;let o=Math.max(r.lastIndexOf("_"),r.lastIndexOf("^"));if(o<0)return;let u=r.slice(o+1);if(!u)return;let c=r[o]==="^"?Qr:Zr,m=Array.from(u,l=>c[l]);if(!m.some(l=>l===void 0))return i+=o,{from:i,to:e,source:t.slice(i,e),text:m.join("")}}var st=require("@codemirror/state"),Bt=require("@codemirror/commands"),Ot=require("@codemirror/view");var Yr={};function En(t,e){let n=e||Yr,r=typeof n.includeImageAlt=="boolean"?n.includeImageAlt:!0,i=typeof n.includeHtml=="boolean"?n.includeHtml:!0;return ze(t,r,i)}function ze(t,e,n){if(Gr(t)){if("value"in t)return t.type==="html"&&!n?"":t.value;if(e&&"alt"in t&&t.alt)return t.alt;if("children"in t)return Ae(t.children,e,n)}return Array.isArray(t)?Ae(t,e,n):""}function Ae(t,e,n){let r=[],i=-1;for(;++i<t.length;)r[i]=ze(t[i],e,n);return r.join("")}function Gr(t){return!!(t&&typeof t=="object")}var Le=document.createElement("i");function Mt(t){let e="&"+t+";";Le.innerHTML=e;let n=Le.textContent;return n.charCodeAt(n.length-1)===59&&t!=="semi"||n===e?!1:n}function Q(t,e,n,r){let i=t.length,a=0,o;if(e<0?e=-e>i?0:i+e:e=e>i?i:e,n=n>0?n:0,r.length<1e4)o=Array.from(r),o.unshift(e,n),t.splice(...o);else for(n&&t.splice(e,n);a<r.length;)o=r.slice(a,a+1e4),o.unshift(e,0),t.splice(...o),a+=1e4,e+=1e4}function X(t,e){return t.length>0?(Q(t,t.length,0,e),t):e}var Me={}.hasOwnProperty;function tn(t){let e={},n=-1;for(;++n<t.length;)Xr(e,t[n]);return e}function Xr(t,e){let n;for(n in e){let i=(Me.call(t,n)?t[n]:void 0)||(t[n]={}),a=e[n],o;if(a)for(o in a){Me.call(i,o)||(i[o]=[]);let u=a[o];Jr(i[o],Array.isArray(u)?u:u?[u]:[])}}}function Jr(t,e){let n=-1,r=[];for(;++n<e.length;)(e[n].add==="after"?t:r).push(e[n]);Q(t,0,0,r)}function nn(t,e){let n=Number.parseInt(t,e);return n<9||n===11||n>13&&n<32||n>126&&n<160||n>55295&&n<57344||n>64975&&n<65008||(n&65535)===65535||(n&65535)===65534||n>1114111?"\uFFFD":String.fromCodePoint(n)}function Y(t){return t.replace(/[\t\n\r ]+/g," ").replace(/^ | $/g,"").toLowerCase().toUpperCase()}var U=gt(/[A-Za-z]/),v=gt(/[\dA-Za-z]/),De=gt(/[#-'*+\--9=?A-Z^-~]/);function wt(t){return t!==null&&(t<32||t===127)}var Wt=gt(/\d/),Pe=gt(/[\dA-Fa-f]/),Re=gt(/[!-/:-@[-`{-~]/);function E(t){return t!==null&&t<-2}function O(t){return t!==null&&(t<0||t===32)}function A(t){return t===-2||t===-1||t===32}var yt=gt(/\p{P}|\p{S}/u),at=gt(/\s/);function gt(t){return e;function e(n){return n!==null&&n>-1&&t.test(String.fromCharCode(n))}}function L(t,e,n,r){let i=r?r-1:1/0,a=0;return o;function o(c){return A(c)?(t.enter(n),u(c)):e(c)}function u(c){return A(c)&&a++<i?(t.consume(c),u):(t.exit(n),e(c))}}function Fn(t,e,n,r,i,a){let o=0;return u;function u(l){return a>0&&A(l)?(t.enter(r),c(l)):m(l)}function c(l){return A(l)&&o<a?(t.consume(l),o++,c):(t.exit(r),m(l))}function m(l){return o>=i?e(l):n(l)}}var _e={tokenize:Kr};function Kr(t){let e=t.attempt(this.parser.constructs.contentInitial,r,i),n;return e;function r(u){if(u===null){t.consume(u);return}return t.enter("lineEnding"),t.consume(u),t.exit("lineEnding"),L(t,e,"linePrefix")}function i(u){return t.enter("paragraph"),a(u)}function a(u){let c=t.enter("chunkText",{contentType:"text",previous:n});return n&&(n.next=c),n=c,o(u)}function o(u){if(u===null){t.exit("chunkText"),t.exit("paragraph"),t.consume(u);return}return E(u)?(t.consume(u),t.exit("chunkText"),a):(t.consume(u),o)}}var pt=class{constructor(){this.index=new Map,this.map=[]}add(e,n,r){Oe(this,e,n,r,!1)}addBefore(e,n,r){Oe(this,e,n,r,!0)}consume(e){if(this.map.sort(function(a,o){return a[0]-o[0]}),this.map.length===0)return;let n=this.map.length,r=[];for(;n>0;)n-=1,r.push(e.slice(this.map[n][0]+this.map[n][1]),this.map[n][2]),e.length=this.map[n][0];r.push(e.slice()),e.length=0;let i=r.pop();for(;i;){for(let a of i)e.push(a);i=r.pop()}this.map.length=0,this.index.clear()}};function Oe(t,e,n,r,i){if(n===0&&r.length===0)return;let a=t.index.get(e);if(a){a[1]+=n,i?(r.push(...a[2]),a[2]=r):a[2].push(...r);return}let o=[e,n,r];t.map.push(o),t.index.set(e,o)}var Ne={tokenize:ti},Be={tokenize:ni};function ti(t){let e=this,n=[],r=0,i,a,o;return u;function u(C){if(r<n.length){let P=n[r];return e.containerState=P[1],t.attempt(P[0].continuation,c,m)(C)}return m(C)}function c(C){if(r++,e.containerState._closeFlow){e.containerState._closeFlow=void 0,i&&S();let P=e.events.length,M=P,y;for(;M--;)if(e.events[M][0]==="exit"&&e.events[M][1].type==="chunkFlow"){y=e.events[M][1].end;break}b(r);let I=P;for(;I<e.events.length;)e.events[I][1].end={...y},I++;let N=new pt;return N.add(M+1,0,e.events.slice(P)),N.add(P,I-P,[]),N.consume(e.events),m(C)}return u(C)}function m(C){if(r===n.length){if(!i)return p(C);if(i.currentConstruct&&i.currentConstruct.concrete)return x(C);e.interrupt=!!(i.currentConstruct&&!i._gfmTableDynamicInterruptHack)}return e.containerState={},t.check(Be,l,s)(C)}function l(C){return i&&S(),b(r),p(C)}function s(C){return e.parser.lazy[e.now().line]=r!==n.length,o=e.now().offset,x(C)}function p(C){return e.containerState={},t.attempt(Be,f,x)(C)}function f(C){return r++,n.push([e.currentConstruct,e.containerState]),p(C)}function x(C){if(C===null){i&&S(),b(0),t.consume(C);return}return i=i||e.parser.flow(e.now()),t.enter("chunkFlow",{_tokenizer:i,contentType:"flow",previous:a}),T(C)}function T(C){if(C===null){w(t.exit("chunkFlow"),!0),b(0),t.consume(C);return}return E(C)?(t.consume(C),w(t.exit("chunkFlow")),r=0,e.interrupt=void 0,u):(t.consume(C),T)}function w(C,P){let M=e.sliceStream(C);if(P&&M.push(null),C.previous=a,a&&(a.next=C),a=C,i.defineSkip(C.start),i.write(M),e.parser.lazy[C.start.line]){let y=i.events.length;for(;y--;)if(i.events[y][1].start.offset<o&&(!i.events[y][1].end||i.events[y][1].end.offset>o))return;let I=e.events.length,N=I,q,k;for(;N--;)if(e.events[N][0]==="exit"&&e.events[N][1].type==="chunkFlow"){if(q){k=e.events[N][1].end;break}q=!0}for(b(r),y=I;y<e.events.length;)e.events[y][1].end={...k},y++;let H=new pt;H.add(N+1,0,e.events.slice(I)),H.add(I,y-I,[]),H.consume(e.events)}}function b(C){let P=n.length;for(;P-- >C;){let M=n[P];e.containerState=M[1],M[0].exit.call(e,t)}n.length=C}function S(){i.write([null]),a=void 0,i=void 0,e.containerState._closeFlow=void 0}}function ni(t,e,n){return L(t,t.attempt(this.parser.constructs.document,e,n),"linePrefix",this.parser.constructs.disable.null.includes("codeIndented")?void 0:4)}function Dt(t){if(t===null||O(t)||at(t))return 1;if(yt(t))return 2}function xt(t,e,n){let r=[],i=-1;for(;++i<t.length;){let a=t[i].resolveAll;a&&!r.includes(a)&&(e=a(e,n),r.push(a))}return e}var $t={name:"attention",resolveAll:ei,tokenize:ri};function ei(t,e){let n=-1,r;for(;++n<t.length;)if(t[n][0]==="enter"&&t[n][1].type==="attentionSequence"&&t[n][1]._close){let i=n;for(;i--;)if(t[i][0]==="exit"&&t[i][1].type==="attentionSequence"&&t[i][1]._open&&e.sliceSerialize(t[i][1]).charCodeAt(0)===e.sliceSerialize(t[n][1]).charCodeAt(0)){if((t[i][1]._close||t[n][1]._open)&&(t[n][1].end.offset-t[n][1].start.offset)%3&&!((t[i][1].end.offset-t[i][1].start.offset+t[n][1].end.offset-t[n][1].start.offset)%3))continue;let a=t[i][1].end.offset-t[i][1].start.offset>1&&t[n][1].end.offset-t[n][1].start.offset>1?2:1,o={...t[i][1].end},u={...t[n][1].start};qe(o,-a),qe(u,a);let c={type:a>1?"strongSequence":"emphasisSequence",start:o,end:{...t[i][1].end}},m={type:a>1?"strongSequence":"emphasisSequence",start:{...t[n][1].start},end:u},l={type:a>1?"strongText":"emphasisText",start:{...t[i][1].end},end:{...t[n][1].start}},s={type:a>1?"strong":"emphasis",start:{...c.start},end:{...m.end}};t[i][1].end={...c.start},t[n][1].start={...m.end},r=[],t[i][1].end.offset-t[i][1].start.offset&&(r=X(r,[["enter",t[i][1],e],["exit",t[i][1],e]])),r=X(r,[["enter",s,e],["enter",c,e],["exit",c,e],["enter",l,e]]),r=X(r,xt(e.parser.constructs.insideSpan.null,t.slice(i+1,n),e)),r=X(r,[["exit",l,e],["enter",m,e],["exit",m,e],["exit",s,e]]);let p=0;t[n][1].end.offset-t[n][1].start.offset&&(p=2,r=X(r,[["enter",t[n][1],e],["exit",t[n][1],e]])),Q(t,i-1,n-i+3,r),n=i+r.length-p-2;break}}for(n=-1;++n<t.length;)t[n][1].type==="attentionSequence"&&(t[n][1].type="data");return t}function ri(t,e){let n=this.parser.constructs.attentionMarkers.null,r=this.previous,i=Dt(r),a;return o;function o(c){return a=c,t.enter("attentionSequence"),u(c)}function u(c){if(c===a)return t.consume(c),u;let m=t.exit("attentionSequence"),l=Dt(c),s=!l||l===2&&i||n.includes(c)&&c!==42&&c!==95,p=!i||i===2&&l||n.includes(r)&&r!==42&&r!==95;return m._open=!!(a===42?s:s&&(i||!p)),m._close=!!(a===42?p:p&&(l||!s)),e(c)}}function qe(t,e){t.column+=e,t.offset+=e,t._bufferIndex+=e}var In={name:"autolink",tokenize:ii};function ii(t,e,n){let r=0;return i;function i(f){return t.enter("autolink"),t.enter("autolinkMarker"),t.consume(f),t.exit("autolinkMarker"),t.enter("autolinkProtocol"),a}function a(f){return U(f)?(t.consume(f),o):f===64?n(f):m(f)}function o(f){return f===43||f===45||f===46||v(f)?(r=1,u(f)):m(f)}function u(f){return f===58?(t.consume(f),r=0,c):(f===43||f===45||f===46||v(f))&&r++<32?(t.consume(f),u):(r=0,m(f))}function c(f){return f===62?(t.exit("autolinkProtocol"),t.enter("autolinkMarker"),t.consume(f),t.exit("autolinkMarker"),t.exit("autolink"),e):f===null||f===32||f===60||wt(f)?n(f):(t.consume(f),c)}function m(f){return f===64?(t.consume(f),l):De(f)?(t.consume(f),m):n(f)}function l(f){return v(f)?s(f):n(f)}function s(f){return f===46?(t.consume(f),r=0,l):f===62?(t.exit("autolinkProtocol").type="autolinkEmail",t.enter("autolinkMarker"),t.consume(f),t.exit("autolinkMarker"),t.exit("autolink"),e):p(f)}function p(f){if((f===45||v(f))&&r++<63){let x=f===45?p:s;return t.consume(f),x}return n(f)}}var ut={partial:!0,tokenize:oi};function oi(t,e,n){return r;function r(a){return A(a)?L(t,i,"linePrefix")(a):i(a)}function i(a){return a===null||E(a)?e(a):n(a)}}var en={continuation:{tokenize:ui},exit:li,name:"blockQuote",tokenize:ai};function ai(t,e,n){let r=this;return i;function i(o){if(o===62){let u=r.containerState;return u.open||(t.enter("blockQuote",{_container:!0}),u.open=!0),t.enter("blockQuotePrefix"),t.enter("blockQuoteMarker"),t.consume(o),t.exit("blockQuoteMarker"),a}return n(o)}function a(o){return A(o)?(t.enter("blockQuotePrefixWhitespace"),t.consume(o),t.exit("blockQuotePrefixWhitespace"),t.exit("blockQuotePrefix"),e):(t.exit("blockQuotePrefix"),e(o))}}function ui(t,e,n){let r=this;return i;function i(o){return A(o)?L(t,a,"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(o):a(o)}function a(o){return t.attempt(en,e,n)(o)}}function li(t){t.exit("blockQuote")}var rn={name:"characterEscape",tokenize:si};function si(t,e,n){return r;function r(a){return t.enter("characterEscape"),t.enter("escapeMarker"),t.consume(a),t.exit("escapeMarker"),i}function i(a){return Re(a)?(t.enter("characterEscapeValue"),t.consume(a),t.exit("characterEscapeValue"),t.exit("characterEscape"),e):n(a)}}var on={name:"characterReference",tokenize:ci};function ci(t,e,n){let r=this,i=0,a,o;return u;function u(s){return t.enter("characterReference"),t.enter("characterReferenceMarker"),t.consume(s),t.exit("characterReferenceMarker"),c}function c(s){return s===35?(t.enter("characterReferenceMarkerNumeric"),t.consume(s),t.exit("characterReferenceMarkerNumeric"),m):(t.enter("characterReferenceValue"),a=31,o=v,l(s))}function m(s){return s===88||s===120?(t.enter("characterReferenceMarkerHexadecimal"),t.consume(s),t.exit("characterReferenceMarkerHexadecimal"),t.enter("characterReferenceValue"),a=6,o=Pe,l):(t.enter("characterReferenceValue"),a=7,o=Wt,l(s))}function l(s){if(s===59&&i){let p=t.exit("characterReferenceValue");return o===v&&!Mt(r.sliceSerialize(p))?n(s):(t.enter("characterReferenceMarker"),t.consume(s),t.exit("characterReferenceMarker"),t.exit("characterReference"),e)}return o(s)&&i++<a?(t.consume(s),l):n(s)}}var Ut={partial:!0,tokenize:mi};function mi(t,e,n){let r=this;return i;function i(o){return o===null?n(o):(t.enter("lineEnding"),t.consume(o),t.exit("lineEnding"),a)}function a(o){return r.parser.lazy[r.now().line]?n(o):e(o)}}var an={concrete:!0,name:"codeFenced",tokenize:fi};function fi(t,e,n){let r=this,i={partial:!0,tokenize:M},a=0,o=0,u;return c;function c(y){return m(y)}function m(y){let I=r.events[r.events.length-1];return a=I&&I[1].type==="linePrefix"?I[2].sliceSerialize(I[1],!0).length:0,u=y,t.enter("codeFenced"),t.enter("codeFencedFence"),t.enter("codeFencedFenceSequence"),l(y)}function l(y){return y===u?(o++,t.consume(y),l):o<3?n(y):(t.exit("codeFencedFenceSequence"),A(y)?L(t,s,"whitespace")(y):s(y))}function s(y){return y===null||E(y)?(t.exit("codeFencedFence"),r.interrupt?e(y):t.check(Ut,T,P)(y)):(t.enter("codeFencedFenceInfo"),t.enter("chunkString",{contentType:"string"}),p(y))}function p(y){return y===null||E(y)?(t.exit("chunkString"),t.exit("codeFencedFenceInfo"),s(y)):A(y)?(t.exit("chunkString"),t.exit("codeFencedFenceInfo"),L(t,f,"whitespace")(y)):y===96&&y===u?n(y):(t.consume(y),p)}function f(y){return y===null||E(y)?s(y):(t.enter("codeFencedFenceMeta"),t.enter("chunkString",{contentType:"string"}),x(y))}function x(y){return y===null||E(y)?(t.exit("chunkString"),t.exit("codeFencedFenceMeta"),s(y)):y===96&&y===u?n(y):(t.consume(y),x)}function T(y){return t.attempt(i,P,w)(y)}function w(y){return t.enter("lineEnding"),t.consume(y),t.exit("lineEnding"),b}function b(y){return a>0&&A(y)?L(t,S,"linePrefix",a+1)(y):S(y)}function S(y){return y===null||E(y)?t.check(Ut,T,P)(y):(t.enter("codeFlowValue"),C(y))}function C(y){return y===null||E(y)?(t.exit("codeFlowValue"),S(y)):(t.consume(y),C)}function P(y){return t.exit("codeFenced"),e(y)}function M(y,I,N){let q=0;return k;function k(_){return y.enter("lineEnding"),y.consume(_),y.exit("lineEnding"),H}function H(_){return y.enter("codeFencedFence"),A(_)?L(y,j,"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(_):j(_)}function j(_){return _===u?(y.enter("codeFencedFenceSequence"),z(_)):N(_)}function z(_){return _===u?(q++,y.consume(_),z):q>=o?(y.exit("codeFencedFenceSequence"),A(_)?L(y,B,"whitespace")(_):B(_)):N(_)}function B(_){return _===null||E(_)?(y.exit("codeFencedFence"),I(_)):N(_)}}}var vt={name:"codeIndented",tokenize:hi},pi={partial:!0,tokenize:gi};function hi(t,e,n){return r;function r(u){return t.enter("codeIndented"),Fn(t,i,n,"linePrefix",4,4)(u)}function i(u){return u===null?o(u):E(u)?t.attempt(pi,i,o)(u):(t.enter("codeFlowValue"),a(u))}function a(u){return u===null||E(u)?(t.exit("codeFlowValue"),i(u)):(t.consume(u),a)}function o(u){return t.exit("codeIndented"),e(u)}}function gi(t,e,n){let r=this;return i;function i(o){return r.parser.lazy[r.now().line]?n(o):E(o)?(t.enter("lineEnding"),t.consume(o),t.exit("lineEnding"),i):Fn(t,e,a,"linePrefix",4,4)(o)}function a(o){return E(o)?i(o):n(o)}}var Tn={name:"codeText",previous:ki,resolve:xi,tokenize:di};function xi(t){let e=t.length-4,n=3,r,i;if((t[n][1].type==="lineEnding"||t[n][1].type==="space")&&(t[e][1].type==="lineEnding"||t[e][1].type==="space")){for(r=n;++r<e;)if(t[r][1].type==="codeTextData"){t[n][1].type="codeTextPadding",t[e][1].type="codeTextPadding",n+=2,e-=2;break}}for(r=n-1,e++;++r<=e;)i===void 0?r!==e&&t[r][1].type!=="lineEnding"&&(i=r):(r===e||t[r][1].type==="lineEnding")&&(t[i][1].type="codeTextData",r!==i+2&&(t[i][1].end=t[r-1][1].end,t.splice(i+2,r-i-2),e-=r-i-2,r=i+2),i=void 0);return t}function ki(t){return t!==96||this.events[this.events.length-1][1].type==="characterEscape"}function di(t,e,n){let r=this,i=0,a,o;return u;function u(p){return t.enter("codeText"),t.enter("codeTextSequence"),c(p)}function c(p){return p===96?(t.consume(p),i++,c):(t.exit("codeTextSequence"),m(p))}function m(p){return p===null?n(p):p===32?(t.enter("space"),t.consume(p),t.exit("space"),m):p===96?(o=t.enter("codeTextSequence"),a=0,s(p)):E(p)?(t.enter("lineEnding"),t.consume(p),t.exit("lineEnding"),m):(t.enter("codeTextData"),l(p))}function l(p){return p===null||p===32||p===96||E(p)?(t.exit("codeTextData"),m(p)):(t.consume(p),l)}function s(p){return p===96?(t.consume(p),a++,s):a===i?(t.exit("codeTextSequence"),t.exit("codeText"),e(p)):(o.type="codeTextData",l(p))}}var un=class{constructor(e){this.left=e?[...e]:[],this.right=[]}get(e){if(e<0||e>=this.left.length+this.right.length)throw new RangeError("Cannot access index `"+e+"` in a splice buffer of size `"+(this.left.length+this.right.length)+"`");return e<this.left.length?this.left[e]:this.right[this.right.length-e+this.left.length-1]}get length(){return this.left.length+this.right.length}shift(){return this.setCursor(0),this.right.pop()}slice(e,n){let r=n??Number.POSITIVE_INFINITY;return r<this.left.length?this.left.slice(e,r):e>this.left.length?this.right.slice(this.right.length-r+this.left.length,this.right.length-e+this.left.length).reverse():this.left.slice(e).concat(this.right.slice(this.right.length-r+this.left.length).reverse())}splice(e,n,r){let i=n||0;this.setCursor(Math.trunc(e));let a=this.right.splice(this.right.length-i,Number.POSITIVE_INFINITY);return r&&Qt(this.left,r),a.reverse()}pop(){return this.setCursor(Number.POSITIVE_INFINITY),this.left.pop()}push(e){this.setCursor(Number.POSITIVE_INFINITY),this.left.push(e)}pushMany(e){this.setCursor(Number.POSITIVE_INFINITY),Qt(this.left,e)}unshift(e){this.setCursor(0),this.right.push(e)}unshiftMany(e){this.setCursor(0),Qt(this.right,e.reverse())}setCursor(e){if(!(e===this.left.length||e>this.left.length&&this.right.length===0||e<0&&this.left.length===0))if(e<this.left.length){let n=this.left.splice(e,Number.POSITIVE_INFINITY);Qt(this.right,n.reverse())}else{let n=this.right.splice(this.left.length+this.right.length-e,Number.POSITIVE_INFINITY);Qt(this.left,n.reverse())}}};function Qt(t,e){let n=0;if(e.length<1e4)t.push(...e);else for(;n<e.length;)t.push(...e.slice(n,n+1e4)),n+=1e4}function ln(t){let e={},n=-1,r,i,a,o,u,c,m,l=new un(t);for(;++n<l.length;){for(;n in e;)n=e[n];if(r=l.get(n),n&&r[1].type==="chunkFlow"&&l.get(n-1)[1].type==="listItemPrefix"&&(c=r[1]._tokenizer.events,a=0,a<c.length&&c[a][1].type==="lineEndingBlank"&&(a+=2),a<c.length&&c[a][1].type==="content"))for(;++a<c.length&&c[a][1].type!=="content";)c[a][1].type==="chunkText"&&(c[a][1]._isInFirstContentOfListItem=!0,a++);if(r[0]==="enter")r[1].contentType&&(Object.assign(e,bi(l,n)),n=e[n],m=!0);else if(r[1]._container){for(a=n,i=void 0;a--;)if(o=l.get(a),o[1].type==="lineEnding"||o[1].type==="lineEndingBlank")o[0]==="enter"&&(i&&(l.get(i)[1].type="lineEndingBlank"),o[1].type="lineEnding",i=a);else if(!(o[1].type==="linePrefix"||o[1].type==="listItemIndent"))break;i&&(r[1].end={...l.get(i)[1].start},u=l.slice(i,n),u.unshift(r),l.splice(i,n-i+1,u))}}return Q(t,0,Number.POSITIVE_INFINITY,l.slice(0)),!m}function bi(t,e){let n=t.get(e)[1],r=t.get(e)[2],i=e-1,a=[],o=n._tokenizer;o||(o=r.parser[n.contentType](n.start),n._contentTypeTextTrailing&&(o._contentTypeTextTrailing=!0));let u=o.events,c=[],m={},l,s,p=-1,f=n,x=0,T=0,w=[T];for(;f;){for(;t.get(++i)[1]!==f;);a.push(i),f._tokenizer||(l=r.sliceStream(f),f.next||l.push(null),s&&o.defineSkip(f.start),f._isInFirstContentOfListItem&&(o._gfmTasklistFirstContentOfListItem=!0),o.write(l),f._isInFirstContentOfListItem&&(o._gfmTasklistFirstContentOfListItem=void 0)),s=f,f=f.next}for(f=n;++p<u.length;)u[p][0]==="exit"&&u[p-1][0]==="enter"&&u[p][1].type===u[p-1][1].type&&u[p][1].start.line!==u[p][1].end.line&&(T=p+1,w.push(T),f._tokenizer=void 0,f.previous=void 0,f=f.next);for(o.events=[],f?(f._tokenizer=void 0,f.previous=void 0):w.pop(),p=w.length;p--;){let b=u.slice(w[p],w[p+1]),S=a.pop();c.push([S,S+b.length-1]),t.splice(S,2,b)}for(c.reverse(),p=-1;++p<c.length;)m[x+c[p][0]]=x+c[p][1],x+=c[p][1]-c[p][0]-1;return m}var An={resolve:yi,tokenize:Si},wi={partial:!0,tokenize:Ci};function yi(t){return ln(t),t}function Si(t,e){let n;return r;function r(u){return t.enter("content"),n=t.enter("chunkContent",{contentType:"content"}),i(u)}function i(u){return u===null?a(u):E(u)?t.check(wi,o,a)(u):(t.consume(u),i)}function a(u){return t.exit("chunkContent"),t.exit("content"),e(u)}function o(u){return t.consume(u),t.exit("chunkContent"),n.next=t.enter("chunkContent",{contentType:"content",previous:n}),n=n.next,i}}function Ci(t,e,n){let r=this;return i;function i(o){return t.exit("chunkContent"),t.enter("lineEnding"),t.consume(o),t.exit("lineEnding"),L(t,a,"linePrefix")}function a(o){if(o===null||E(o))return n(o);let u=r.events[r.events.length-1];return!r.parser.constructs.disable.null.includes("codeIndented")&&u&&u[1].type==="linePrefix"&&u[2].sliceSerialize(u[1],!0).length>=4?e(o):t.interrupt(r.parser.constructs.flow,n,e)(o)}}function sn(t,e,n,r,i,a,o,u,c){let m=c||Number.POSITIVE_INFINITY,l=0;return s;function s(b){return b===60?(t.enter(r),t.enter(i),t.enter(a),t.consume(b),t.exit(a),p):b===null||b===32||b===41||wt(b)?n(b):(t.enter(r),t.enter(o),t.enter(u),t.enter("chunkString",{contentType:"string"}),T(b))}function p(b){return b===62?(t.enter(a),t.consume(b),t.exit(a),t.exit(i),t.exit(r),e):(t.enter(u),t.enter("chunkString",{contentType:"string"}),f(b))}function f(b){return b===62?(t.exit("chunkString"),t.exit(u),p(b)):b===null||b===60||E(b)?n(b):(t.consume(b),b===92?x:f)}function x(b){return b===60||b===62||b===92?(t.consume(b),f):f(b)}function T(b){return!l&&(b===null||b===41||O(b))?(t.exit("chunkString"),t.exit(u),t.exit(o),t.exit(r),e(b)):l<m&&b===40?(t.consume(b),l++,T):b===41?(t.consume(b),l--,T):b===null||b===32||b===40||wt(b)?n(b):(t.consume(b),b===92?w:T)}function w(b){return b===40||b===41||b===92?(t.consume(b),T):T(b)}}function cn(t,e,n,r,i,a){let o=this,u=0,c;return m;function m(f){return t.enter(r),t.enter(i),t.consume(f),t.exit(i),t.enter(a),l}function l(f){return u>999||f===null||f===91||f===93&&!c||f===94&&!u&&"_hiddenFootnoteSupport"in o.parser.constructs?n(f):f===93?(t.exit(a),t.enter(i),t.consume(f),t.exit(i),t.exit(r),e):E(f)?(t.enter("lineEnding"),t.consume(f),t.exit("lineEnding"),l):(t.enter("chunkString",{contentType:"string"}),s(f))}function s(f){return f===null||f===91||f===93||E(f)||u++>999?(t.exit("chunkString"),l(f)):(t.consume(f),c||(c=!A(f)),f===92?p:s)}function p(f){return f===91||f===92||f===93?(t.consume(f),u++,s):s(f)}}function mn(t,e,n,r,i,a){let o;return u;function u(p){return p===34||p===39||p===40?(t.enter(r),t.enter(i),t.consume(p),t.exit(i),o=p===40?41:p,c):n(p)}function c(p){return p===o?(t.enter(i),t.consume(p),t.exit(i),t.exit(r),e):(t.enter(a),m(p))}function m(p){return p===o?(t.exit(a),c(o)):p===null?n(p):E(p)?(t.enter("lineEnding"),t.consume(p),t.exit("lineEnding"),L(t,m,"linePrefix")):(t.enter("chunkString",{contentType:"string"}),l(p))}function l(p){return p===o||p===null||E(p)?(t.exit("chunkString"),m(p)):(t.consume(p),p===92?s:l)}function s(p){return p===o||p===92?(t.consume(p),l):l(p)}}function St(t,e){let n;return r;function r(i){return E(i)?(t.enter("lineEnding"),t.consume(i),t.exit("lineEnding"),n=!0,r):A(i)?L(t,r,n?"linePrefix":"lineSuffix")(i):e(i)}}var zn={name:"definition",tokenize:Fi},Ei={partial:!0,tokenize:Ii};function Fi(t,e,n){let r=this,i;return a;function a(f){return t.enter("definition"),o(f)}function o(f){return cn.call(r,t,u,n,"definitionLabel","definitionLabelMarker","definitionLabelString")(f)}function u(f){return i=Y(r.sliceSerialize(r.events[r.events.length-1][1]).slice(1,-1)),f===58?(t.enter("definitionMarker"),t.consume(f),t.exit("definitionMarker"),c):n(f)}function c(f){return O(f)?St(t,m)(f):m(f)}function m(f){return sn(t,l,n,"definitionDestination","definitionDestinationLiteral","definitionDestinationLiteralMarker","definitionDestinationRaw","definitionDestinationString")(f)}function l(f){return t.attempt(Ei,s,s)(f)}function s(f){return A(f)?L(t,p,"whitespace")(f):p(f)}function p(f){return f===null||E(f)?(t.exit("definition"),r.parser.defined.push(i),e(f)):n(f)}}function Ii(t,e,n){return r;function r(u){return O(u)?St(t,i)(u):n(u)}function i(u){return mn(t,a,n,"definitionTitle","definitionTitleMarker","definitionTitleString")(u)}function a(u){return A(u)?L(t,o,"whitespace")(u):o(u)}function o(u){return u===null||E(u)?e(u):n(u)}}var Ln={name:"hardBreakEscape",tokenize:Ti};function Ti(t,e,n){return r;function r(a){return t.enter("hardBreakEscape"),t.consume(a),i}function i(a){return E(a)?(t.exit("hardBreakEscape"),e(a)):n(a)}}var Mn={name:"headingAtx",resolve:Ai,tokenize:zi};function Ai(t,e){let n=t.length-2,r=3;if(t[r][1].type==="whitespace"&&(r+=2),n-2>r&&t[n][1].type==="whitespace"&&(n-=2),t[n][1].type==="atxHeadingSequence"&&(r===n-1||n-4>r&&t[n-2][1].type==="whitespace")&&(n-=r+1===n?2:4),n>r){let i={type:"atxHeadingText",start:t[r][1].start,end:t[n][1].end},a={type:"chunkText",start:t[r][1].start,end:t[n][1].end,contentType:"text"};Q(t,r,n-r+1,[["enter",i,e],["enter",a,e],["exit",a,e],["exit",i,e]])}return t}function zi(t,e,n){let r=0;return i;function i(l){return t.enter("atxHeading"),a(l)}function a(l){return t.enter("atxHeadingSequence"),o(l)}function o(l){return l===35&&r++<6?(t.consume(l),o):l===null||O(l)?(t.exit("atxHeadingSequence"),u(l)):n(l)}function u(l){return l===35?(t.enter("atxHeadingSequence"),c(l)):l===null||E(l)?(t.exit("atxHeading"),e(l)):A(l)?L(t,u,"whitespace")(l):(t.enter("atxHeadingText"),m(l))}function c(l){return l===35?(t.consume(l),c):(t.exit("atxHeadingSequence"),u(l))}function m(l){return l===null||l===35||O(l)?(t.exit("atxHeadingText"),u(l)):(t.consume(l),m)}}var He=["address","article","aside","base","basefont","blockquote","body","caption","center","col","colgroup","dd","details","dialog","dir","div","dl","dt","fieldset","figcaption","figure","footer","form","frame","frameset","h1","h2","h3","h4","h5","h6","head","header","hr","html","iframe","legend","li","link","main","menu","menuitem","nav","noframes","ol","optgroup","option","p","param","search","section","summary","table","tbody","td","tfoot","th","thead","title","tr","track","ul"],Dn=["pre","script","style","textarea"];var Pn={concrete:!0,name:"htmlFlow",resolveTo:Mi,tokenize:Di},Li={partial:!0,tokenize:Pi};function Mi(t){let e=t.length;for(;e--&&!(t[e][0]==="enter"&&t[e][1].type==="htmlFlow"););return e>1&&t[e-2][1].type==="linePrefix"&&(t[e][1].start=t[e-2][1].start,t[e+1][1].start=t[e-2][1].start,t.splice(e-2,2)),t}function Di(t,e,n){let r=this,i,a,o,u,c;return m;function m(g){return l(g)}function l(g){return t.enter("htmlFlow"),t.enter("htmlFlowData"),t.consume(g),s}function s(g){return g===33?(t.consume(g),p):g===47?(t.consume(g),a=!0,T):g===63?(t.consume(g),i=3,r.interrupt?e:h):U(g)?(t.consume(g),o=String.fromCharCode(g),w):n(g)}function p(g){return g===45?(t.consume(g),i=2,f):g===91?(t.consume(g),i=5,u=0,x):U(g)?(t.consume(g),i=4,r.interrupt?e:h):n(g)}function f(g){return g===45?(t.consume(g),r.interrupt?e:h):n(g)}function x(g){let tt="CDATA[";return g===tt.charCodeAt(u++)?(t.consume(g),u===tt.length?r.interrupt?e:j:x):n(g)}function T(g){return U(g)?(t.consume(g),o=String.fromCharCode(g),w):n(g)}function w(g){if(g===null||g===47||g===62||O(g)){let tt=g===47,At=o.toLowerCase();return!tt&&!a&&Dn.includes(At)?(i=1,r.interrupt?e(g):j(g)):He.includes(o.toLowerCase())?(i=6,tt?(t.consume(g),b):r.interrupt?e(g):j(g)):(i=7,r.interrupt&&!r.parser.lazy[r.now().line]?n(g):a?S(g):C(g))}return g===45||v(g)?(t.consume(g),o+=String.fromCharCode(g),w):n(g)}function b(g){return g===62?(t.consume(g),r.interrupt?e:j):n(g)}function S(g){return A(g)?(t.consume(g),S):k(g)}function C(g){return g===47?(t.consume(g),k):g===58||g===95||U(g)?(t.consume(g),P):A(g)?(t.consume(g),C):k(g)}function P(g){return g===45||g===46||g===58||g===95||v(g)?(t.consume(g),P):M(g)}function M(g){return g===61?(t.consume(g),y):A(g)?(t.consume(g),M):C(g)}function y(g){return g===null||g===60||g===61||g===62||g===96?n(g):g===34||g===39?(t.consume(g),c=g,I):A(g)?(t.consume(g),y):N(g)}function I(g){return g===c?(t.consume(g),c=null,q):g===null||E(g)?n(g):(t.consume(g),I)}function N(g){return g===null||g===34||g===39||g===47||g===60||g===61||g===62||g===96||O(g)?M(g):(t.consume(g),N)}function q(g){return g===47||g===62||A(g)?C(g):n(g)}function k(g){return g===62?(t.consume(g),H):n(g)}function H(g){return g===null||E(g)?j(g):A(g)?(t.consume(g),H):n(g)}function j(g){return g===45&&i===2?(t.consume(g),W):g===60&&i===1?(t.consume(g),$):g===62&&i===4?(t.consume(g),et):g===63&&i===3?(t.consume(g),h):g===93&&i===5?(t.consume(g),it):E(g)&&(i===6||i===7)?(t.exit("htmlFlowData"),t.check(Li,ct,z)(g)):g===null||E(g)?(t.exit("htmlFlowData"),z(g)):(t.consume(g),j)}function z(g){return t.check(Ut,B,ct)(g)}function B(g){return t.enter("lineEnding"),t.consume(g),t.exit("lineEnding"),_}function _(g){return g===null||E(g)?z(g):(t.enter("htmlFlowData"),j(g))}function W(g){return g===45?(t.consume(g),h):j(g)}function $(g){return g===47?(t.consume(g),o="",rt):j(g)}function rt(g){if(g===62){let tt=o.toLowerCase();return Dn.includes(tt)?(t.consume(g),et):j(g)}return U(g)&&o.length<8?(t.consume(g),o+=String.fromCharCode(g),rt):j(g)}function it(g){return g===93?(t.consume(g),h):j(g)}function h(g){return g===62?(t.consume(g),et):g===45&&i===2?(t.consume(g),h):j(g)}function et(g){return g===null||E(g)?(t.exit("htmlFlowData"),ct(g)):(t.consume(g),et)}function ct(g){return t.exit("htmlFlow"),e(g)}}function Pi(t,e,n){return r;function r(i){return t.enter("lineEnding"),t.consume(i),t.exit("lineEnding"),t.attempt(ut,e,n)}}var Rn={name:"htmlText",tokenize:Ri};function Ri(t,e,n){let r=this,i,a,o;return u;function u(h){return t.enter("htmlText"),t.enter("htmlTextData"),t.consume(h),c}function c(h){return h===33?(t.consume(h),m):h===47?(t.consume(h),M):h===63?(t.consume(h),C):U(h)?(t.consume(h),N):n(h)}function m(h){return h===45?(t.consume(h),l):h===91?(t.consume(h),a=0,x):U(h)?(t.consume(h),S):n(h)}function l(h){return h===45?(t.consume(h),f):n(h)}function s(h){return h===null?n(h):h===45?(t.consume(h),p):E(h)?(o=s,$(h)):(t.consume(h),s)}function p(h){return h===45?(t.consume(h),f):s(h)}function f(h){return h===62?W(h):h===45?p(h):s(h)}function x(h){let et="CDATA[";return h===et.charCodeAt(a++)?(t.consume(h),a===et.length?T:x):n(h)}function T(h){return h===null?n(h):h===93?(t.consume(h),w):E(h)?(o=T,$(h)):(t.consume(h),T)}function w(h){return h===93?(t.consume(h),b):T(h)}function b(h){return h===62?W(h):h===93?(t.consume(h),b):T(h)}function S(h){return h===null||h===62?W(h):E(h)?(o=S,$(h)):(t.consume(h),S)}function C(h){return h===null?n(h):h===63?(t.consume(h),P):E(h)?(o=C,$(h)):(t.consume(h),C)}function P(h){return h===62?W(h):C(h)}function M(h){return U(h)?(t.consume(h),y):n(h)}function y(h){return h===45||v(h)?(t.consume(h),y):I(h)}function I(h){return E(h)?(o=I,$(h)):A(h)?(t.consume(h),I):W(h)}function N(h){return h===45||v(h)?(t.consume(h),N):h===47||h===62||O(h)?q(h):n(h)}function q(h){return h===47?(t.consume(h),W):h===58||h===95||U(h)?(t.consume(h),k):E(h)?(o=q,$(h)):A(h)?(t.consume(h),q):W(h)}function k(h){return h===45||h===46||h===58||h===95||v(h)?(t.consume(h),k):H(h)}function H(h){return h===61?(t.consume(h),j):E(h)?(o=H,$(h)):A(h)?(t.consume(h),H):q(h)}function j(h){return h===null||h===60||h===61||h===62||h===96?n(h):h===34||h===39?(t.consume(h),i=h,z):E(h)?(o=j,$(h)):A(h)?(t.consume(h),j):(t.consume(h),B)}function z(h){return h===i?(t.consume(h),i=void 0,_):h===null?n(h):E(h)?(o=z,$(h)):(t.consume(h),z)}function B(h){return h===null||h===34||h===39||h===60||h===61||h===96?n(h):h===47||h===62||O(h)?q(h):(t.consume(h),B)}function _(h){return h===47||h===62||O(h)?q(h):n(h)}function W(h){return h===62?(t.consume(h),t.exit("htmlTextData"),t.exit("htmlText"),e):n(h)}function $(h){return t.exit("htmlTextData"),t.enter("lineEnding"),t.consume(h),t.exit("lineEnding"),rt}function rt(h){return A(h)?L(t,it,"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(h):it(h)}function it(h){return t.enter("htmlTextData"),o(h)}}var Ct={name:"labelEnd",resolveAll:Ni,resolveTo:qi,tokenize:Hi},_i={tokenize:ji},Oi={tokenize:Vi},Bi={tokenize:Wi};function Ni(t){let e=-1,n=[];for(;++e<t.length;){let r=t[e][1];if(n.push(t[e]),r.type==="labelImage"||r.type==="labelLink"||r.type==="labelEnd"){let i=r.type==="labelImage"?4:2;r.type="data",e+=i}}return t.length!==n.length&&Q(t,0,t.length,n),t}function qi(t,e){let n=t.length,r=0,i,a,o;for(;n--;){let l=t[n][1];if(i){if(l.type==="link"||l.type==="labelLink"&&l._inactive)break;t[n][0]==="enter"&&l.type==="labelLink"&&(l._inactive=!0)}else if(a){if(t[n][0]==="enter"&&(l.type==="labelImage"||l.type==="labelLink")&&!l._balanced&&(i=n,l.type!=="labelLink")){r=2;break}}else l.type==="labelEnd"&&(a=n)}let u={type:t[i][1].type==="labelLink"?"link":"image",start:{...t[i][1].start},end:{...t[t.length-1][1].end}},c={type:"label",start:{...t[i][1].start},end:{...t[a][1].end}},m={type:"labelText",start:{...t[i+r+2][1].end},end:{...t[a-2][1].start}};return o=[["enter",u,e],["enter",c,e]],o=X(o,t.slice(i+1,i+r+3)),o=X(o,[["enter",m,e]]),o=X(o,xt(e.parser.constructs.insideSpan.null,t.slice(i+r+4,a-3),e)),o=X(o,[["exit",m,e],t[a-2],t[a-1],["exit",c,e]]),o=X(o,t.slice(a+1)),o=X(o,[["exit",u,e]]),Q(t,i,t.length,o),t}function Hi(t,e,n){let r=this,i=r._labelStarts,a,o;if(i){for(;i.length>0&&i[i.length-1]._balanced;)i.pop();a=i[i.length-1]}return u;function u(p){return a?a._inactive?s(p):(o=r.parser.defined.includes(Y(r.sliceSerialize({start:a.end,end:r.now()}))),t.enter("labelEnd"),t.enter("labelMarker"),t.consume(p),t.exit("labelMarker"),t.exit("labelEnd"),c):n(p)}function c(p){return p===40?t.attempt(_i,l,o?l:s)(p):p===91?t.attempt(Oi,l,o?m:s)(p):o?l(p):s(p)}function m(p){return t.attempt(Bi,l,s)(p)}function l(p){return i.pop(),e(p)}function s(p){return a._balanced=!0,n(p)}}function ji(t,e,n){return r;function r(s){return t.enter("resource"),t.enter("resourceMarker"),t.consume(s),t.exit("resourceMarker"),i}function i(s){return O(s)?St(t,a)(s):a(s)}function a(s){return s===41?l(s):sn(t,o,u,"resourceDestination","resourceDestinationLiteral","resourceDestinationLiteralMarker","resourceDestinationRaw","resourceDestinationString",32)(s)}function o(s){return O(s)?St(t,c)(s):l(s)}function u(s){return n(s)}function c(s){return s===34||s===39||s===40?mn(t,m,n,"resourceTitle","resourceTitleMarker","resourceTitleString")(s):l(s)}function m(s){return O(s)?St(t,l)(s):l(s)}function l(s){return s===41?(t.enter("resourceMarker"),t.consume(s),t.exit("resourceMarker"),t.exit("resource"),e):n(s)}}function Vi(t,e,n){let r=this;return i;function i(u){return cn.call(r,t,a,o,"reference","referenceMarker","referenceString")(u)}function a(u){return r.parser.defined.includes(Y(r.sliceSerialize(r.events[r.events.length-1][1]).slice(1,-1)))?e(u):n(u)}function o(u){return n(u)}}function Wi(t,e,n){return r;function r(a){return t.enter("reference"),t.enter("referenceMarker"),t.consume(a),t.exit("referenceMarker"),i}function i(a){return a===93?(t.enter("referenceMarker"),t.consume(a),t.exit("referenceMarker"),t.exit("reference"),e):n(a)}}var _n={name:"labelStartImage",resolveAll:Ct.resolveAll,tokenize:$i};function $i(t,e,n){let r=this,i;return a;function a(c){return t.enter("labelImage"),t.enter("labelImageMarker"),t.consume(c),t.exit("labelImageMarker"),o}function o(c){return c===91?(t.enter("labelMarker"),t.consume(c),t.exit("labelMarker"),i=t.exit("labelImage"),u):n(c)}function u(c){return c===94&&"_hiddenFootnoteSupport"in r.parser.constructs?n(c):(r._labelStarts=r._labelStarts||[],r._labelStarts.push(i),e(c))}}var On={name:"labelStartLink",resolveAll:Ct.resolveAll,tokenize:Ui};function Ui(t,e,n){let r=this,i;return a;function a(u){return t.enter("labelLink"),t.enter("labelMarker"),t.consume(u),t.exit("labelMarker"),i=t.exit("labelLink"),o}function o(u){return u===94&&"_hiddenFootnoteSupport"in r.parser.constructs?n(u):(r._labelStarts=r._labelStarts||[],r._labelStarts.push(i),e(u))}}var Zt={name:"lineEnding",tokenize:vi};function vi(t,e){return n;function n(r){return t.enter("lineEnding"),t.consume(r),t.exit("lineEnding"),L(t,e,"linePrefix")}}var Et={name:"thematicBreak",tokenize:Qi};function Qi(t,e,n){let r=0,i;return a;function a(m){return t.enter("thematicBreak"),o(m)}function o(m){return i=m,u(m)}function u(m){return m===i?(t.enter("thematicBreakSequence"),c(m)):r>=3&&(m===null||E(m))?(t.exit("thematicBreak"),e(m)):n(m)}function c(m){return m===i?(t.consume(m),r++,c):(t.exit("thematicBreakSequence"),A(m)?L(t,u,"whitespace")(m):u(m))}}var G={continuation:{tokenize:Xi},exit:Ki,name:"list",tokenize:Gi},Zi={partial:!0,tokenize:to},Yi={partial:!0,tokenize:Ji};function Gi(t,e,n){let r=this,i=r.events[r.events.length-1],a=i&&i[1].type==="linePrefix"?i[2].sliceSerialize(i[1],!0).length:0,o=0;return u;function u(f){let x=r.containerState.type||(f===42||f===43||f===45?"listUnordered":"listOrdered");if(x==="listUnordered"?!r.containerState.marker||f===r.containerState.marker:Wt(f)){if(r.containerState.type||(r.containerState.type=x,t.enter(x,{_container:!0})),x==="listUnordered")return t.enter("listItemPrefix"),f===42||f===45?t.check(Et,n,m)(f):m(f);if(!r.interrupt||f===49)return t.enter("listItemPrefix"),t.enter("listItemValue"),c(f)}return n(f)}function c(f){return Wt(f)&&++o<10?(t.consume(f),c):(!r.interrupt||o<2)&&(r.containerState.marker?f===r.containerState.marker:f===41||f===46)?(t.exit("listItemValue"),m(f)):n(f)}function m(f){return t.enter("listItemMarker"),t.consume(f),t.exit("listItemMarker"),r.containerState.marker=r.containerState.marker||f,t.check(ut,r.interrupt?n:l,t.attempt(Zi,p,s))}function l(f){return r.containerState.initialBlankLine=!0,a++,p(f)}function s(f){return A(f)?(t.enter("listItemPrefixWhitespace"),t.consume(f),t.exit("listItemPrefixWhitespace"),p):n(f)}function p(f){return r.containerState.size=a+r.sliceSerialize(t.exit("listItemPrefix"),!0).length,e(f)}}function Xi(t,e,n){let r=this;return r.containerState._closeFlow=void 0,t.check(ut,i,a);function i(u){return r.containerState.furtherBlankLines=r.containerState.furtherBlankLines||r.containerState.initialBlankLine,L(t,e,"listItemIndent",r.containerState.size+1)(u)}function a(u){return r.containerState.furtherBlankLines||!A(u)?(r.containerState.furtherBlankLines=void 0,r.containerState.initialBlankLine=void 0,o(u)):(r.containerState.furtherBlankLines=void 0,r.containerState.initialBlankLine=void 0,t.attempt(Yi,e,o)(u))}function o(u){return r.containerState._closeFlow=!0,r.interrupt=void 0,L(t,t.attempt(G,e,n),"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(u)}}function Ji(t,e,n){let r=this;return L(t,i,"listItemIndent",r.containerState.size+1);function i(a){let o=r.events[r.events.length-1];return o&&o[1].type==="listItemIndent"&&o[2].sliceSerialize(o[1],!0).length===r.containerState.size?e(a):n(a)}}function Ki(t){t.exit(this.containerState.type)}function to(t,e,n){let r=this;return L(t,i,"listItemPrefixWhitespace",r.parser.constructs.disable.null.includes("codeIndented")?void 0:5);function i(a){let o=r.events[r.events.length-1];return!A(a)&&o&&o[1].type==="listItemPrefixWhitespace"?e(a):n(a)}}var fn={name:"setextUnderline",resolveTo:no,tokenize:eo};function no(t,e){let n=new pt,r=t.length,i,a,o;for(;r--;)if(t[r][0]==="enter"){if(t[r][1].type==="content"){i=r;break}t[r][1].type==="paragraph"&&(a=r)}else t[r][1].type==="content"&&n.add(r,1,[]),!o&&t[r][1].type==="definition"&&(o=r);let u={type:"setextHeading",start:{...t[i][1].start},end:{...t[t.length-1][1].end}};return t[a][1].type="setextHeadingText",o?(n.add(a,0,[["enter",u,e]]),n.add(o+1,0,[["exit",t[i][1],e]]),t[i][1].end={...t[o][1].end}):t[i][1]=u,n.add(t.length,0,[["exit",u,e]]),n.consume(t),t}function eo(t,e,n){let r=this,i;return a;function a(m){let l=r.events.length,s;for(;l--;)if(r.events[l][1].type!=="lineEnding"&&r.events[l][1].type!=="linePrefix"&&r.events[l][1].type!=="content"){s=r.events[l][1].type==="paragraph";break}return!r.parser.lazy[r.now().line]&&(r.interrupt||s)?(t.enter("setextHeadingLine"),i=m,o(m)):n(m)}function o(m){return t.enter("setextHeadingLineSequence"),u(m)}function u(m){return m===i?(t.consume(m),u):(t.exit("setextHeadingLineSequence"),A(m)?L(t,c,"lineSuffix")(m):c(m))}function c(m){return m===null||E(m)?(t.exit("setextHeadingLine"),e(m)):n(m)}}var je={tokenize:ro};function ro(t){let e=this,n=t.attempt(ut,r,t.attempt(this.parser.constructs.flowInitial,i,L(t,t.attempt(this.parser.constructs.flow,i,t.attempt(An,i)),"linePrefix")));return n;function r(a){if(a===null){t.consume(a);return}return t.enter("lineEndingBlank"),t.consume(a),t.exit("lineEndingBlank"),e.currentConstruct=void 0,n}function i(a){if(a===null){t.consume(a);return}return t.enter("lineEnding"),t.consume(a),t.exit("lineEnding"),e.currentConstruct=void 0,n}}var Ve={resolveAll:ve()},We=Ue("string"),$e=Ue("text");function Ue(t){return{resolveAll:ve(t==="text"?io:void 0),tokenize:e};function e(n){let r=this,i=this.parser.constructs[t],a=n.attempt(i,o,u);return o;function o(l){return m(l)?a(l):u(l)}function u(l){if(l===null){n.consume(l);return}return n.enter("data"),n.consume(l),c}function c(l){return m(l)?(n.exit("data"),a(l)):(n.consume(l),c)}function m(l){if(l===null)return!0;let s=i[l],p=-1;if(s)for(;++p<s.length;){let f=s[p];if(!f.previous||f.previous.call(r,r.previous))return!0}return!1}}}function ve(t){return e;function e(n,r){let i=-1,a;for(;++i<=n.length;)a===void 0?n[i]&&n[i][1].type==="data"&&(a=i,i++):(!n[i]||n[i][1].type!=="data")&&(i!==a+2&&(n[a][1].end=n[i-1][1].end,n.splice(a+2,i-a-2),i=a+2),a=void 0);return t?t(n,r):n}}function io(t,e){let n=new pt,r=0;for(;++r<=t.length;)if((r===t.length||t[r][1].type==="lineEnding")&&t[r-1][1].type==="data"){let i=t[r-1][1],a=e.sliceStream(i),o=a.length,u=-1,c=0,m;for(;o--;){let l=a[o];if(typeof l=="string"){for(u=l.length;l.charCodeAt(u-1)===32;)c++,u--;if(u)break;u=-1}else if(l===-2)m=!0,c++;else if(l!==-1){o++;break}}if(e._contentTypeTextTrailing&&r===t.length&&(c=0),c){let l={type:r===t.length||m||c<2?"lineSuffix":"hardBreakTrailing",start:{_bufferIndex:o?u:i.start._bufferIndex+u,_index:i.start._index+o,line:i.end.line,column:i.end.column-c,offset:i.end.offset-c},end:{...i.end}};i.end={...l.start},i.start.offset===i.end.offset?Object.assign(i,l):n.add(r,0,[["enter",l,e],["exit",l,e]])}r++}return n.consume(t),t}var Bn={};Ee(Bn,{attentionMarkers:()=>fo,contentInitial:()=>ao,disable:()=>po,document:()=>oo,flow:()=>lo,flowInitial:()=>uo,insideSpan:()=>mo,string:()=>so,text:()=>co});var oo={42:G,43:G,45:G,48:G,49:G,50:G,51:G,52:G,53:G,54:G,55:G,56:G,57:G,62:en},ao={91:zn},uo={[-2]:vt,[-1]:vt,32:vt},lo={35:Mn,42:Et,45:[fn,Et],60:Pn,61:fn,95:Et,96:an,126:an},so={38:on,92:rn},co={[-5]:Zt,[-4]:Zt,[-3]:Zt,33:_n,38:on,42:$t,60:[In,Rn],91:On,92:[Ln,rn],93:Ct,95:$t,96:Tn},mo={null:[$t,Ve]},fo={null:[42,95]},po={null:[]};function Qe(t,e,n){let r={_bufferIndex:-1,_index:0,line:n&&n.line||1,column:n&&n.column||1,offset:n&&n.offset||0},i={},a=[],o=[],u=[],c=!0,m={attempt:q(I),check:q(N),consume:P,enter:M,exit:y,interrupt:q(N,{interrupt:!0})},l={code:null,containerState:{},defineSkip:b,events:[],now:w,parser:t,previous:null,sliceSerialize:x,sliceStream:T,write:f},s=e.tokenize.call(l,m),p;return e.resolveAll&&a.push(e),l;function f(z){return o=X(o,z),S(),o[o.length-1]!==null?[]:(k(e,0),l.events=xt(a,l.events,l),l.events)}function x(z,B){return go(T(z),B)}function T(z){return ho(o,z)}function w(){let{_bufferIndex:z,_index:B,line:_,column:W,offset:$}=r;return{_bufferIndex:z,_index:B,line:_,column:W,offset:$}}function b(z){i[z.line]=z.column,j()}function S(){for(;r._index<o.length;){let z=o[r._index];if(typeof z=="string"){let B=r._index;for(r._bufferIndex<0&&(r._bufferIndex=0);r._index===B&&r._bufferIndex<z.length;)C(z.charCodeAt(r._bufferIndex))}else C(z)}}function C(z){c=void 0,p=z,s=s(z)}function P(z){E(z)?(r.line++,r.column=1,r.offset+=z===-3?2:1,j()):z!==-1&&(r.column++,r.offset++),r._bufferIndex<0?r._index++:(r._bufferIndex++,r._bufferIndex===o[r._index].length&&(r._bufferIndex=-1,r._index++)),l.previous=z,c=!0}function M(z,B){let _=B||{};return _.type=z,_.start=w(),l.events.push(["enter",_,l]),u.push(_),_}function y(z){let B=u.pop();return B.end=w(),l.events.push(["exit",B,l]),B}function I(z,B){k(z,B.from)}function N(z,B){B.restore()}function q(z,B){return _;function _(W,$,rt){let it,h,et,ct;return Array.isArray(W)?tt(W):"tokenize"in W?tt([W]):g(W);function g(Z){return qt;function qt(mt){let zt=mt!==null&&Z[mt],dt=mt!==null&&Z.null,wn=[...Array.isArray(zt)?zt:zt?[zt]:[],...Array.isArray(dt)?dt:dt?[dt]:[]];return tt(wn)(mt)}}function tt(Z){return it=Z,h=0,Z.length===0?rt:At(Z[h])}function At(Z){return qt;function qt(mt){return ct=H(),et=Z,Z.partial||(l.currentConstruct=Z),Z.name&&l.parser.constructs.disable.null.includes(Z.name)?Jt(mt):Z.tokenize.call(B?Object.assign(Object.create(l),B):l,m,Xt,Jt)(mt)}}function Xt(Z){return c=!0,z(et,ct),$}function Jt(Z){return c=!0,ct.restore(),++h<it.length?At(it[h]):rt}}}function k(z,B){z.resolveAll&&!a.includes(z)&&a.push(z),z.resolve&&Q(l.events,B,l.events.length-B,z.resolve(l.events.slice(B),l)),z.resolveTo&&(l.events=z.resolveTo(l.events,l))}function H(){let z=w(),B=l.previous,_=l.currentConstruct,W=l.events.length,$=Array.from(u);return{from:W,restore:rt};function rt(){r=z,l.previous=B,l.currentConstruct=_,l.events.length=W,u=$,j()}}function j(){r.line in i&&r.column<2&&(r.column=i[r.line],r.offset+=i[r.line]-1)}}function ho(t,e){let n=e.start._index,r=e.start._bufferIndex,i=e.end._index,a=e.end._bufferIndex,o;if(n===i)o=[t[n].slice(r,a)];else{if(o=t.slice(n,i),r>-1){let u=o[0];typeof u=="string"?o[0]=u.slice(r):o.shift()}a>0&&o.push(t[i].slice(0,a))}return o}function go(t,e){let n=-1,r=[],i;for(;++n<t.length;){let a=t[n],o;if(typeof a=="string")o=a;else switch(a){case-5:{o="\r";break}case-4:{o=`
`;break}case-3:{o=`\r
`;break}case-2:{o=e?" ":"	";break}case-1:{if(!e&&i)continue;o=" ";break}default:o=String.fromCharCode(a)}i=a===-2,r.push(o)}return r.join("")}function Nn(t){let r={constructs:tn([Bn,...(t||{}).extensions||[]]),content:i(_e),defined:[],document:i(Ne),flow:i(je),lazy:{},string:i(We),text:i($e)};return r;function i(a){return o;function o(u){return Qe(r,a,u)}}}function qn(t){for(;!ln(t););return t}var Ze=/[\0\t\n\r]/g;function Hn(){let t=1,e="",n=!0,r;return i;function i(a,o,u){a=e+(typeof a=="string"?a.toString():new TextDecoder(o||void 0).decode(a));let c=[],m=0;for(e="",n&&(a.charCodeAt(0)===65279&&m++,n=void 0);m<a.length;){Ze.lastIndex=m;let l=Ze.exec(a),s=l&&l.index!==void 0?l.index:a.length,p=a.charCodeAt(s);if(!l){e=a.slice(m);break}if(p===10&&m===s&&r)c.push(-3),r=void 0;else switch(r&&(c.push(-5),r=void 0),m<s&&(c.push(a.slice(m,s)),t+=s-m),p){case 0:{c.push(65533),t++;break}case 9:{let f=Math.ceil(t/4)*4;for(c.push(-2);t++<f;)c.push(-1);break}case 10:{c.push(-4),t=1;break}default:r=!0,t=1}m=s+1}return u&&(r&&c.push(-5),e&&c.push(e),c.push(null)),c}}var xo=/\\([!-/:-@[-`{-~])|&(#(?:\d{1,7}|x[\da-f]{1,6})|[\da-z]{1,31});/gi;function Ye(t){return t.replace(xo,ko)}function ko(t,e,n){if(e)return e;if(n.charCodeAt(0)===35){let i=n.charCodeAt(1),a=i===120||i===88;return nn(n.slice(a?2:1),a?16:10)}return Mt(n)||t}function Pt(t){return!t||typeof t!="object"?"":"position"in t||"type"in t?Ge(t.position):"start"in t||"end"in t?Ge(t):"line"in t||"column"in t?jn(t):""}function jn(t){return Xe(t&&t.line)+":"+Xe(t&&t.column)}function Ge(t){return jn(t&&t.start)+"-"+jn(t&&t.end)}function Xe(t){return t&&typeof t=="number"?t:1}var Ke={}.hasOwnProperty;function Vn(t,e,n){return e&&typeof e=="object"&&(n=e,e=void 0),bo(n)(qn(Nn(n).document().write(Hn()(t,e,!0))))}function bo(t){let e={afterExit:[],beforeEnter:[],transforms:[],canContainEols:["emphasis","fragment","heading","paragraph","strong"],enter:{autolink:o(ye),autolinkProtocol:k,autolinkEmail:k,atxHeading:o(de),blockQuote:o(zt),characterEscape:k,characterReference:k,codeFenced:o(dt),codeFencedFenceInfo:u,codeFencedFenceMeta:u,codeIndented:o(dt,u),codeText:o(wn,u),codeTextData:k,data:k,codeFlowValue:k,definition:o(Ar),definitionDestinationString:u,definitionLabelString:u,definitionTitleString:u,emphasis:o(zr),hardBreakEscape:o(be),hardBreakTrailing:o(be),htmlFlow:o(we,u),htmlFlowData:k,htmlText:o(we,u),htmlTextData:k,image:o(Lr),label:u,link:o(ye),listItem:o(Mr),listItemValue:f,listOrdered:o(Se,p),listUnordered:o(Se),paragraph:o(Dr),reference:tt,referenceString:u,resourceDestinationString:u,resourceTitleString:u,setextHeading:o(de),strong:o(Pr),thematicBreak:o(_r)},exit:{atxHeading:m(),atxHeadingSequence:y,autolink:m(),autolinkEmail:mt,autolinkProtocol:qt,blockQuote:m(),characterEscapeValue:H,characterReferenceMarkerHexadecimal:Xt,characterReferenceMarkerNumeric:Xt,characterReferenceValue:Jt,characterReference:Z,codeFenced:m(b),codeFencedFence:w,codeFencedFenceInfo:x,codeFencedFenceMeta:T,codeFlowValue:H,codeIndented:m(S),codeText:m(W),codeTextData:H,data:H,definition:m(),definitionDestinationString:M,definitionLabelString:C,definitionTitleString:P,emphasis:m(),hardBreakEscape:m(z),hardBreakTrailing:m(z),htmlFlow:m(B),htmlFlowData:H,htmlText:m(_),htmlTextData:H,image:m(rt),label:h,labelText:it,lineEnding:j,link:m($),listItem:m(),listOrdered:m(),listUnordered:m(),paragraph:m(),referenceString:At,resourceDestinationString:et,resourceTitleString:ct,resource:g,setextHeading:m(q),setextHeadingLineSequence:N,setextHeadingText:I,strong:m(),thematicBreak:m()}};tr(e,(t||{}).mdastExtensions||[]);let n={};return r;function r(d){let F={type:"root",children:[],position:void 0},D={stack:[F],tokenStack:[],config:e,enter:c,exit:l,buffer:u,resume:s,data:n},R=[],J=[],V=-1;for(;++V<d.length;)if(J.push(d[V]),d[V][1].type==="listOrdered"||d[V][1].type==="listUnordered")if(d[V][0]==="enter")R.push(J.length-1);else{let K=R.pop();a(J,K)}for(d=J,V=-1;++V<d.length;){let K=e[d[V][0]];d[V][0]==="enter"&&e.beforeEnter.length>0&&i(e.beforeEnter,{...D,sliceSerialize:d[V][2].sliceSerialize},d[V][1]),Ke.call(K,d[V][1].type)&&K[d[V][1].type].call({...D,sliceSerialize:d[V][2].sliceSerialize},d[V][1]),d[V][0]==="exit"&&e.afterExit.length>0&&i(e.afterExit,{...D,sliceSerialize:d[V][2].sliceSerialize},d[V][1])}if(D.tokenStack.length>0){let K=D.tokenStack[D.tokenStack.length-1];(K[1]||Je).call(D,void 0,K[0])}for(F.position={start:kt(d.length>0?d[0][1].start:{line:1,column:1,offset:0}),end:kt(d.length>0?d[d.length-2][1].end:{line:1,column:1,offset:0})},V=-1;++V<e.transforms.length;)F=e.transforms[V](F)||F;return F}function i(d,F,D){let R=-1;for(;++R<d.length;)d[R].call(F,D)}function a(d,F){let D=d.length-1,R=F-1,J=-1,V=!1,K,ot,Ht,jt,Vt=[];for(;++R<=D;){let nt=d[R];switch(nt[1].type){case"listUnordered":case"listOrdered":case"blockQuote":{nt[0]==="enter"?J++:J--,jt=void 0;break}case"lineEndingBlank":{nt[0]==="enter"&&(K&&!jt&&!J&&!Ht&&(Ht=R),jt=void 0);break}case"linePrefix":case"listItemValue":case"listItemMarker":case"listItemPrefix":case"listItemPrefixWhitespace":break;default:jt=void 0}if(!J&&nt[0]==="enter"&&nt[1].type==="listItemPrefix"||J===-1&&nt[0]==="exit"&&(nt[1].type==="listUnordered"||nt[1].type==="listOrdered")){if(K){let Lt=R;for(ot=void 0;Lt--;){let ft=d[Lt];if(ft[1].type==="lineEnding"||ft[1].type==="lineEndingBlank"){if(ft[0]==="exit")continue;ot&&(d[ot][1].type="lineEndingBlank",V=!0),ft[1].type="lineEnding",ot=Lt}else if(!(ft[1].type==="linePrefix"||ft[1].type==="blockQuotePrefix"||ft[1].type==="blockQuotePrefixWhitespace"||ft[1].type==="blockQuoteMarker"||ft[1].type==="listItemIndent"))break}Ht&&(!ot||Ht<ot)&&(K._spread=!0),K.end=Object.assign({},ot?d[ot][1].start:nt[1].end),Vt.push({at:ot||R,event:["exit",K,nt[2]]})}if(nt[1].type==="listItemPrefix"){let Lt={type:"listItem",_spread:!1,start:Object.assign({},nt[1].start),end:void 0};K=Lt,Vt.push({at:R,event:["enter",Lt,nt[2]]}),Ht=void 0,jt=!0}}}let Ce=d.splice(F),yn=0;for(R=-1;++R<Ce.length;){for(;yn<Vt.length&&Vt[yn].at===F+R;)d.push(Vt[yn++].event);d.push(Ce[R])}d[F][1]._spread=V}function o(d,F){return D;function D(R){c.call(this,d(R),R),F&&F.call(this,R)}}function u(){this.stack.push({type:"fragment",children:[]})}function c(d,F,D){this.stack[this.stack.length-1].children.push(d),this.stack.push(d),this.tokenStack.push([F,D||void 0]),d.position={start:kt(F.start),end:void 0}}function m(d){return F;function F(D){d&&d.call(this,D),l.call(this,D)}}function l(d,F){let D=this.stack.pop(),R=this.tokenStack.pop();if(!R)throw new Error("Cannot close `"+d.type+"` ("+Pt({start:d.start,end:d.end})+"): it\u2019s not open");R[0].type!==d.type&&(F?F.call(this,d,R[0]):(R[1]||Je).call(this,d,R[0])),D.position.end=kt(d.end)}function s(){return En(this.stack.pop())}function p(){this.data.expectingFirstListItemValue=!0}function f(d){if(this.data.expectingFirstListItemValue){let F=this.stack[this.stack.length-2];F.start=Number.parseInt(this.sliceSerialize(d),10),this.data.expectingFirstListItemValue=void 0}}function x(){let d=this.resume(),F=this.stack[this.stack.length-1];F.lang=d}function T(){let d=this.resume(),F=this.stack[this.stack.length-1];F.meta=d}function w(){this.data.flowCodeInside||(this.buffer(),this.data.flowCodeInside=!0)}function b(){let d=this.resume(),F=this.stack[this.stack.length-1];F.value=d.replace(/^(\r?\n|\r)|(\r?\n|\r)$/g,""),this.data.flowCodeInside=void 0}function S(){let d=this.resume(),F=this.stack[this.stack.length-1];F.value=d.replace(/(\r?\n|\r)$/g,"")}function C(d){let F=this.resume(),D=this.stack[this.stack.length-1];D.label=F,D.identifier=Y(this.sliceSerialize(d)).toLowerCase()}function P(){let d=this.resume(),F=this.stack[this.stack.length-1];F.title=d}function M(){let d=this.resume(),F=this.stack[this.stack.length-1];F.url=d}function y(d){let F=this.stack[this.stack.length-1];if(!F.depth){let D=this.sliceSerialize(d).length;F.depth=D}}function I(){this.data.setextHeadingSlurpLineEnding=!0}function N(d){let F=this.stack[this.stack.length-1];F.depth=this.sliceSerialize(d).codePointAt(0)===61?1:2}function q(){this.data.setextHeadingSlurpLineEnding=void 0}function k(d){let D=this.stack[this.stack.length-1].children,R=D[D.length-1];(!R||R.type!=="text")&&(R=Rr(),R.position={start:kt(d.start),end:void 0},D.push(R)),this.stack.push(R)}function H(d){let F=this.stack.pop();F.value+=this.sliceSerialize(d),F.position.end=kt(d.end)}function j(d){let F=this.stack[this.stack.length-1];if(this.data.atHardBreak){let D=F.children[F.children.length-1];D.position.end=kt(d.end),this.data.atHardBreak=void 0;return}!this.data.setextHeadingSlurpLineEnding&&e.canContainEols.includes(F.type)&&(k.call(this,d),H.call(this,d))}function z(){this.data.atHardBreak=!0}function B(){let d=this.resume(),F=this.stack[this.stack.length-1];F.value=d}function _(){let d=this.resume(),F=this.stack[this.stack.length-1];F.value=d}function W(){let d=this.resume(),F=this.stack[this.stack.length-1];F.value=d}function $(){let d=this.stack[this.stack.length-1];if(this.data.inReference){let F=this.data.referenceType||"shortcut";d.type+="Reference",d.referenceType=F,delete d.url,delete d.title}else delete d.identifier,delete d.label;this.data.referenceType=void 0}function rt(){let d=this.stack[this.stack.length-1];if(this.data.inReference){let F=this.data.referenceType||"shortcut";d.type+="Reference",d.referenceType=F,delete d.url,delete d.title}else delete d.identifier,delete d.label;this.data.referenceType=void 0}function it(d){let F=this.sliceSerialize(d),D=this.stack[this.stack.length-2];D.label=Ye(F),D.identifier=Y(F).toLowerCase()}function h(){let d=this.stack[this.stack.length-1],F=this.resume(),D=this.stack[this.stack.length-1];if(this.data.inReference=!0,D.type==="link"){let R=d.children;D.children=R}else D.alt=F}function et(){let d=this.resume(),F=this.stack[this.stack.length-1];F.url=d}function ct(){let d=this.resume(),F=this.stack[this.stack.length-1];F.title=d}function g(){this.data.inReference=void 0}function tt(){this.data.referenceType="collapsed"}function At(d){let F=this.resume(),D=this.stack[this.stack.length-1];D.label=F,D.identifier=Y(this.sliceSerialize(d)).toLowerCase(),this.data.referenceType="full"}function Xt(d){this.data.characterReferenceType=d.type}function Jt(d){let F=this.sliceSerialize(d),D=this.data.characterReferenceType,R;D?(R=nn(F,D==="characterReferenceMarkerNumeric"?10:16),this.data.characterReferenceType=void 0):R=Mt(F);let J=this.stack[this.stack.length-1];J.value+=R}function Z(d){let F=this.stack.pop();F.position.end=kt(d.end)}function qt(d){H.call(this,d);let F=this.stack[this.stack.length-1];F.url=this.sliceSerialize(d)}function mt(d){H.call(this,d);let F=this.stack[this.stack.length-1];F.url="mailto:"+this.sliceSerialize(d)}function zt(){return{type:"blockquote",children:[],position:void 0}}function dt(){return{type:"code",lang:null,meta:null,value:"",position:void 0}}function wn(){return{type:"inlineCode",value:"",position:void 0}}function Ar(){return{type:"definition",identifier:"",label:null,title:null,url:"",position:void 0}}function zr(){return{type:"emphasis",children:[],position:void 0}}function de(){return{type:"heading",depth:0,children:[],position:void 0}}function be(){return{type:"break",position:void 0}}function we(){return{type:"html",value:"",position:void 0}}function Lr(){return{type:"image",title:null,url:"",alt:null,position:void 0}}function ye(){return{type:"link",title:null,url:"",children:[],position:void 0}}function Se(d){return{type:"list",ordered:d.type==="listOrdered",start:null,spread:d._spread,children:[],position:void 0}}function Mr(d){return{type:"listItem",spread:d._spread,checked:null,children:[],position:void 0}}function Dr(){return{type:"paragraph",children:[],position:void 0}}function Pr(){return{type:"strong",children:[],position:void 0}}function Rr(){return{type:"text",value:"",position:void 0}}function _r(){return{type:"thematicBreak",position:void 0}}}function kt(t){return{line:t.line,column:t.column,offset:t.offset}}function tr(t,e){let n=-1;for(;++n<e.length;){let r=e[n];Array.isArray(r)?tr(t,r):wo(t,r)}}function wo(t,e){let n;for(n in e)if(Ke.call(e,n))switch(n){case"canContainEols":{let r=e[n];r&&t[n].push(...r);break}case"transforms":{let r=e[n];r&&t[n].push(...r);break}case"afterExit":case"beforeEnter":{let r=e[n];r&&t[n].push(r);break}case"enter":case"exit":{let r=e[n];r&&Object.assign(t[n],r);break}}}function Je(t,e){throw t?new Error("Cannot close `"+t.type+"` ("+Pt({start:t.start,end:t.end})+"): a different token (`"+e.type+"`, "+Pt({start:e.start,end:e.end})+") is open"):new Error("Cannot close document, a token (`"+e.type+"`, "+Pt({start:e.start,end:e.end})+") is still open")}var yo={tokenize:Io,partial:!0},nr={tokenize:To,partial:!0},er={tokenize:Ao,partial:!0},rr={tokenize:zo,partial:!0},So={tokenize:Lo,partial:!0},ir={name:"wwwAutolink",tokenize:Eo,previous:ar},or={name:"protocolAutolink",tokenize:Fo,previous:ur},ht={name:"emailAutolink",tokenize:Co,previous:lr},lt={};function $n(){return{text:lt}}var Ft=48;for(;Ft<123;)lt[Ft]=ht,Ft++,Ft===58?Ft=65:Ft===91&&(Ft=97);lt[43]=ht;lt[45]=ht;lt[46]=ht;lt[95]=ht;lt[72]=[ht,or];lt[104]=[ht,or];lt[87]=[ht,ir];lt[119]=[ht,ir];function Co(t,e,n){let r=this,i,a;return o;function o(s){return!Wn(s)||!lr.call(r,r.previous)||Un(r.events)?n(s):(t.enter("literalAutolink"),t.enter("literalAutolinkEmail"),u(s))}function u(s){return Wn(s)?(t.consume(s),u):s===64?(t.consume(s),c):n(s)}function c(s){return s===46?t.check(So,l,m)(s):s===45||s===95||v(s)?(a=!0,t.consume(s),c):l(s)}function m(s){return t.consume(s),i=!0,c}function l(s){return a&&i&&U(r.previous)?(t.exit("literalAutolinkEmail"),t.exit("literalAutolink"),e(s)):n(s)}}function Eo(t,e,n){let r=this;return i;function i(o){return o!==87&&o!==119||!ar.call(r,r.previous)||Un(r.events)?n(o):(t.enter("literalAutolink"),t.enter("literalAutolinkWww"),t.check(yo,t.attempt(nr,t.attempt(er,a),n),n)(o))}function a(o){return t.exit("literalAutolinkWww"),t.exit("literalAutolink"),e(o)}}function Fo(t,e,n){let r=this,i="",a=!1;return o;function o(s){return(s===72||s===104)&&ur.call(r,r.previous)&&!Un(r.events)?(t.enter("literalAutolink"),t.enter("literalAutolinkHttp"),i+=String.fromCodePoint(s),t.consume(s),u):n(s)}function u(s){if(U(s)&&i.length<5)return i+=String.fromCodePoint(s),t.consume(s),u;if(s===58){let p=i.toLowerCase();if(p==="http"||p==="https")return t.consume(s),c}return n(s)}function c(s){return s===47?(t.consume(s),a?m:(a=!0,c)):n(s)}function m(s){return s===null||wt(s)||O(s)||at(s)||yt(s)?n(s):t.attempt(nr,t.attempt(er,l),n)(s)}function l(s){return t.exit("literalAutolinkHttp"),t.exit("literalAutolink"),e(s)}}function Io(t,e,n){let r=0;return i;function i(o){return(o===87||o===119)&&r<3?(r++,t.consume(o),i):o===46&&r===3?(t.consume(o),a):n(o)}function a(o){return o===null?n(o):e(o)}}function To(t,e,n){let r,i,a;return o;function o(m){return m===46||m===95?t.check(rr,c,u)(m):m===null||O(m)||at(m)||m!==45&&yt(m)?c(m):(a=!0,t.consume(m),o)}function u(m){return m===95?r=!0:(i=r,r=void 0),t.consume(m),o}function c(m){return i||r||!a?n(m):e(m)}}function Ao(t,e){let n=0,r=0;return i;function i(o){return o===40?(n++,t.consume(o),i):o===41&&r<n?a(o):o===33||o===34||o===38||o===39||o===41||o===42||o===44||o===46||o===58||o===59||o===60||o===63||o===93||o===95||o===126?t.check(rr,e,a)(o):o===null||O(o)||at(o)?e(o):(t.consume(o),i)}function a(o){return o===41&&r++,t.consume(o),i}}function zo(t,e,n){return r;function r(u){return u===33||u===34||u===39||u===41||u===42||u===44||u===46||u===58||u===59||u===63||u===95||u===126?(t.consume(u),r):u===38?(t.consume(u),a):u===93?(t.consume(u),i):u===60||u===null||O(u)||at(u)?e(u):n(u)}function i(u){return u===null||u===40||u===91||O(u)||at(u)?e(u):r(u)}function a(u){return U(u)?o(u):n(u)}function o(u){return u===59?(t.consume(u),r):U(u)?(t.consume(u),o):n(u)}}function Lo(t,e,n){return r;function r(a){return t.consume(a),i}function i(a){return v(a)?n(a):e(a)}}function ar(t){return t===null||t===40||t===42||t===95||t===91||t===93||t===126||O(t)}function ur(t){return!U(t)}function lr(t){return!(t===47||Wn(t))}function Wn(t){return t===43||t===45||t===46||t===95||v(t)}function Un(t){let e=t.length,n=!1;for(;e--;){let r=t[e][1];if((r.type==="labelLink"||r.type==="labelImage")&&!r._balanced){n=!0;break}if(r._gfmAutolinkLiteralWalkedInto){n=!1;break}}return t.length>0&&!n&&(t[t.length-1][1]._gfmAutolinkLiteralWalkedInto=!0),n}var Mo={tokenize:No,partial:!0};function vn(){return{document:{91:{name:"gfmFootnoteDefinition",tokenize:_o,continuation:{tokenize:Oo},exit:Bo}},text:{91:{name:"gfmFootnoteCall",tokenize:Ro},93:{name:"gfmPotentialFootnoteCall",add:"after",tokenize:Do,resolveTo:Po}}}}function Do(t,e,n){let r=this,i=r.events.length,a=r.parser.gfmFootnotes||(r.parser.gfmFootnotes=[]),o;for(;i--;){let c=r.events[i][1];if(c.type==="labelImage"){o=c;break}if(c.type==="gfmFootnoteCall"||c.type==="labelLink"||c.type==="label"||c.type==="image"||c.type==="link")break}return u;function u(c){if(!o||!o._balanced)return n(c);let m=Y(r.sliceSerialize({start:o.end,end:r.now()}));return m.codePointAt(0)!==94||!a.includes(m.slice(1))?n(c):(t.enter("gfmFootnoteCallLabelMarker"),t.consume(c),t.exit("gfmFootnoteCallLabelMarker"),e(c))}}function Po(t,e){let n=t.length,r;for(;n--;)if(t[n][1].type==="labelImage"&&t[n][0]==="enter"){r=t[n][1];break}t[n+1][1].type="data",t[n+3][1].type="gfmFootnoteCallLabelMarker";let i={type:"gfmFootnoteCall",start:Object.assign({},t[n+3][1].start),end:Object.assign({},t[t.length-1][1].end)},a={type:"gfmFootnoteCallMarker",start:Object.assign({},t[n+3][1].end),end:Object.assign({},t[n+3][1].end)};a.end.column++,a.end.offset++,a.end._bufferIndex++;let o={type:"gfmFootnoteCallString",start:Object.assign({},a.end),end:Object.assign({},t[t.length-1][1].start)},u={type:"chunkString",contentType:"string",start:Object.assign({},o.start),end:Object.assign({},o.end)},c=[t[n+1],t[n+2],["enter",i,e],t[n+3],t[n+4],["enter",a,e],["exit",a,e],["enter",o,e],["enter",u,e],["exit",u,e],["exit",o,e],t[t.length-2],t[t.length-1],["exit",i,e]];return t.splice(n,t.length-n+1,...c),t}function Ro(t,e,n){let r=this,i=r.parser.gfmFootnotes||(r.parser.gfmFootnotes=[]),a=0,o;return u;function u(s){return t.enter("gfmFootnoteCall"),t.enter("gfmFootnoteCallLabelMarker"),t.consume(s),t.exit("gfmFootnoteCallLabelMarker"),c}function c(s){return s!==94?n(s):(t.enter("gfmFootnoteCallMarker"),t.consume(s),t.exit("gfmFootnoteCallMarker"),t.enter("gfmFootnoteCallString"),t.enter("chunkString").contentType="string",m)}function m(s){if(a>999||s===93&&!o||s===null||s===91||O(s))return n(s);if(s===93){t.exit("chunkString");let p=t.exit("gfmFootnoteCallString");return i.includes(Y(r.sliceSerialize(p)))?(t.enter("gfmFootnoteCallLabelMarker"),t.consume(s),t.exit("gfmFootnoteCallLabelMarker"),t.exit("gfmFootnoteCall"),e):n(s)}return O(s)||(o=!0),a++,t.consume(s),s===92?l:m}function l(s){return s===91||s===92||s===93?(t.consume(s),a++,m):m(s)}}function _o(t,e,n){let r=this,i=r.parser.gfmFootnotes||(r.parser.gfmFootnotes=[]),a,o=0,u;return c;function c(x){return t.enter("gfmFootnoteDefinition")._container=!0,t.enter("gfmFootnoteDefinitionLabel"),t.enter("gfmFootnoteDefinitionLabelMarker"),t.consume(x),t.exit("gfmFootnoteDefinitionLabelMarker"),m}function m(x){return x===94?(t.enter("gfmFootnoteDefinitionMarker"),t.consume(x),t.exit("gfmFootnoteDefinitionMarker"),t.enter("gfmFootnoteDefinitionLabelString"),t.enter("chunkString").contentType="string",l):n(x)}function l(x){if(o>999||x===93&&!u||x===null||x===91||O(x))return n(x);if(x===93){t.exit("chunkString");let T=t.exit("gfmFootnoteDefinitionLabelString");return a=Y(r.sliceSerialize(T)),t.enter("gfmFootnoteDefinitionLabelMarker"),t.consume(x),t.exit("gfmFootnoteDefinitionLabelMarker"),t.exit("gfmFootnoteDefinitionLabel"),p}return O(x)||(u=!0),o++,t.consume(x),x===92?s:l}function s(x){return x===91||x===92||x===93?(t.consume(x),o++,l):l(x)}function p(x){return x===58?(t.enter("definitionMarker"),t.consume(x),t.exit("definitionMarker"),i.includes(a)||i.push(a),L(t,f,"gfmFootnoteDefinitionWhitespace")):n(x)}function f(x){return e(x)}}function Oo(t,e,n){return t.check(ut,e,t.attempt(Mo,e,n))}function Bo(t){t.exit("gfmFootnoteDefinition")}function No(t,e,n){let r=this;return L(t,i,"gfmFootnoteDefinitionIndent",5);function i(a){let o=r.events[r.events.length-1];return o&&o[1].type==="gfmFootnoteDefinitionIndent"&&o[2].sliceSerialize(o[1],!0).length===4?e(a):n(a)}}function Qn(t){let n=(t||{}).singleTilde,r={name:"strikethrough",tokenize:a,resolveAll:i};return n==null&&(n=!0),{text:{126:r},insideSpan:{null:[r]},attentionMarkers:{null:[126]}};function i(o,u){let c=-1;for(;++c<o.length;)if(o[c][0]==="enter"&&o[c][1].type==="strikethroughSequenceTemporary"&&o[c][1]._close){let m=c;for(;m--;)if(o[m][0]==="exit"&&o[m][1].type==="strikethroughSequenceTemporary"&&o[m][1]._open&&o[c][1].end.offset-o[c][1].start.offset===o[m][1].end.offset-o[m][1].start.offset){o[c][1].type="strikethroughSequence",o[m][1].type="strikethroughSequence";let l={type:"strikethrough",start:Object.assign({},o[m][1].start),end:Object.assign({},o[c][1].end)},s={type:"strikethroughText",start:Object.assign({},o[m][1].end),end:Object.assign({},o[c][1].start)},p=[["enter",l,u],["enter",o[m][1],u],["exit",o[m][1],u],["enter",s,u]],f=u.parser.constructs.insideSpan.null;f&&Q(p,p.length,0,xt(f,o.slice(m+1,c),u)),Q(p,p.length,0,[["exit",s,u],["enter",o[c][1],u],["exit",o[c][1],u],["exit",l,u]]),Q(o,m-1,c-m+3,p),c=m+p.length-2;break}}for(c=-1;++c<o.length;)o[c][1].type==="strikethroughSequenceTemporary"&&(o[c][1].type="data");return o}function a(o,u,c){let m=this.previous,l=this.events,s=0;return p;function p(x){return m===126&&l[l.length-1][1].type!=="characterEscape"?c(x):(o.enter("strikethroughSequenceTemporary"),f(x))}function f(x){let T=Dt(m);if(x===126)return s>1?c(x):(o.consume(x),s++,f);if(s<2&&!n)return c(x);let w=o.exit("strikethroughSequenceTemporary"),b=Dt(x);return w._open=!b||b===2&&!!T,w._close=!T||T===2&&!!b,u(x)}}}var pn=class{constructor(){this.map=[],this.index=new Map}add(e,n,r){qo(this,e,n,r)}consume(e){if(this.map.sort(function(a,o){return a[0]-o[0]}),this.map.length===0)return;let n=this.map.length,r=[];for(;n>0;)n-=1,r.push(e.slice(this.map[n][0]+this.map[n][1]),this.map[n][2]),e.length=this.map[n][0];r.push(e.slice()),e.length=0;let i=r.pop();for(;i;){for(let a of i)e.push(a);i=r.pop()}this.map.length=0,this.index.clear()}};function qo(t,e,n,r){if(n===0&&r.length===0)return;let i=t.index.get(e);if(i){i[1]+=n,i[2].push(...r);return}let a=[e,n,r];t.map.push(a),t.index.set(e,a)}function sr(t,e){let n=!1,r=[];for(;e<t.length;){let i=t[e];if(n){if(i[0]==="enter")i[1].type==="tableContent"&&r.push(t[e+1][1].type==="tableDelimiterMarker"?"left":"none");else if(i[1].type==="tableContent"){if(t[e-1][1].type==="tableDelimiterMarker"){let a=r.length-1;r[a]=r[a]==="left"?"center":"right"}}else if(i[1].type==="tableDelimiterRow")break}else i[0]==="enter"&&i[1].type==="tableDelimiterRow"&&(n=!0);e+=1}return r}function Zn(){return{flow:{null:{name:"table",tokenize:Ho,resolveAll:jo}}}}function Ho(t,e,n){let r=this,i=0,a=0,o;return u;function u(k){let H=r.events.length-1;for(;H>-1;){let{type:B}=r.events[H][1];if(B==="lineEnding"||B==="linePrefix")H--;else break}let j=H>-1?r.events[H][1].type:null,z=j==="tableHead"||j==="tableRow"?y:c;return z===y&&r.parser.lazy[r.now().line]?n(k):z(k)}function c(k){return t.enter("tableHead"),t.enter("tableRow"),m(k)}function m(k){return k===124||(o=!0,a+=1),l(k)}function l(k){return k===null?n(k):E(k)?a>1?(a=0,r.interrupt=!0,t.exit("tableRow"),t.enter("lineEnding"),t.consume(k),t.exit("lineEnding"),f):n(k):A(k)?L(t,l,"whitespace")(k):(a+=1,o&&(o=!1,i+=1),k===124?(t.enter("tableCellDivider"),t.consume(k),t.exit("tableCellDivider"),o=!0,l):(t.enter("data"),s(k)))}function s(k){return k===null||k===124||O(k)?(t.exit("data"),l(k)):(t.consume(k),k===92?p:s)}function p(k){return k===92||k===124?(t.consume(k),s):s(k)}function f(k){return r.interrupt=!1,r.parser.lazy[r.now().line]?n(k):(t.enter("tableDelimiterRow"),o=!1,A(k)?L(t,x,"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(k):x(k))}function x(k){return k===45||k===58?w(k):k===124?(o=!0,t.enter("tableCellDivider"),t.consume(k),t.exit("tableCellDivider"),T):M(k)}function T(k){return A(k)?L(t,w,"whitespace")(k):w(k)}function w(k){return k===58?(a+=1,o=!0,t.enter("tableDelimiterMarker"),t.consume(k),t.exit("tableDelimiterMarker"),b):k===45?(a+=1,b(k)):k===null||E(k)?P(k):M(k)}function b(k){return k===45?(t.enter("tableDelimiterFiller"),S(k)):M(k)}function S(k){return k===45?(t.consume(k),S):k===58?(o=!0,t.exit("tableDelimiterFiller"),t.enter("tableDelimiterMarker"),t.consume(k),t.exit("tableDelimiterMarker"),C):(t.exit("tableDelimiterFiller"),C(k))}function C(k){return A(k)?L(t,P,"whitespace")(k):P(k)}function P(k){return k===124?x(k):k===null||E(k)?!o||i!==a?M(k):(t.exit("tableDelimiterRow"),t.exit("tableHead"),e(k)):M(k)}function M(k){return n(k)}function y(k){return t.enter("tableRow"),I(k)}function I(k){return k===124?(t.enter("tableCellDivider"),t.consume(k),t.exit("tableCellDivider"),I):k===null||E(k)?(t.exit("tableRow"),e(k)):A(k)?L(t,I,"whitespace")(k):(t.enter("data"),N(k))}function N(k){return k===null||k===124||O(k)?(t.exit("data"),I(k)):(t.consume(k),k===92?q:N)}function q(k){return k===92||k===124?(t.consume(k),N):N(k)}}function jo(t,e){let n=-1,r=!0,i=0,a=[0,0,0,0],o=[0,0,0,0],u=!1,c=0,m,l,s,p=new pn;for(;++n<t.length;){let f=t[n],x=f[1];f[0]==="enter"?x.type==="tableHead"?(u=!1,c!==0&&(cr(p,e,c,m,l),l=void 0,c=0),m={type:"table",start:Object.assign({},x.start),end:Object.assign({},x.end)},p.add(n,0,[["enter",m,e]])):x.type==="tableRow"||x.type==="tableDelimiterRow"?(r=!0,s=void 0,a=[0,0,0,0],o=[0,n+1,0,0],u&&(u=!1,l={type:"tableBody",start:Object.assign({},x.start),end:Object.assign({},x.end)},p.add(n,0,[["enter",l,e]])),i=x.type==="tableDelimiterRow"?2:l?3:1):i&&(x.type==="data"||x.type==="tableDelimiterMarker"||x.type==="tableDelimiterFiller")?(r=!1,o[2]===0&&(a[1]!==0&&(o[0]=o[1],s=hn(p,e,a,i,void 0,s),a=[0,0,0,0]),o[2]=n)):x.type==="tableCellDivider"&&(r?r=!1:(a[1]!==0&&(o[0]=o[1],s=hn(p,e,a,i,void 0,s)),a=o,o=[a[1],n,0,0])):x.type==="tableHead"?(u=!0,c=n):x.type==="tableRow"||x.type==="tableDelimiterRow"?(c=n,a[1]!==0?(o[0]=o[1],s=hn(p,e,a,i,n,s)):o[1]!==0&&(s=hn(p,e,o,i,n,s)),i=0):i&&(x.type==="data"||x.type==="tableDelimiterMarker"||x.type==="tableDelimiterFiller")&&(o[3]=n)}for(c!==0&&cr(p,e,c,m,l),p.consume(e.events),n=-1;++n<e.events.length;){let f=e.events[n];f[0]==="enter"&&f[1].type==="table"&&(f[1]._align=sr(e.events,n))}return t}function hn(t,e,n,r,i,a){let o=r===1?"tableHeader":r===2?"tableDelimiter":"tableData",u="tableContent";n[0]!==0&&(a.end=Object.assign({},Rt(e.events,n[0])),t.add(n[0],0,[["exit",a,e]]));let c=Rt(e.events,n[1]);if(a={type:o,start:Object.assign({},c),end:Object.assign({},c)},t.add(n[1],0,[["enter",a,e]]),n[2]!==0){let m=Rt(e.events,n[2]),l=Rt(e.events,n[3]),s={type:u,start:Object.assign({},m),end:Object.assign({},l)};if(t.add(n[2],0,[["enter",s,e]]),r!==2){let p=e.events[n[2]],f=e.events[n[3]];if(p[1].end=Object.assign({},f[1].end),p[1].type="chunkText",p[1].contentType="text",n[3]>n[2]+1){let x=n[2]+1,T=n[3]-n[2]-1;t.add(x,T,[])}}t.add(n[3]+1,0,[["exit",s,e]])}return i!==void 0&&(a.end=Object.assign({},Rt(e.events,i)),t.add(i,0,[["exit",a,e]]),a=void 0),a}function cr(t,e,n,r,i){let a=[],o=Rt(e.events,n);i&&(i.end=Object.assign({},o),a.push(["exit",i,e])),r.end=Object.assign({},o),a.push(["exit",r,e]),t.add(n+1,0,a)}function Rt(t,e){let n=t[e],r=n[0]==="enter"?"start":"end";return n[1][r]}var Vo={name:"tasklistCheck",tokenize:Wo};function Yn(){return{text:{91:Vo}}}function Wo(t,e,n){let r=this;return i;function i(c){return r.previous!==null||!r._gfmTasklistFirstContentOfListItem?n(c):(t.enter("taskListCheck"),t.enter("taskListCheckMarker"),t.consume(c),t.exit("taskListCheckMarker"),a)}function a(c){return O(c)?(t.enter("taskListCheckValueUnchecked"),t.consume(c),t.exit("taskListCheckValueUnchecked"),o):c===88||c===120?(t.enter("taskListCheckValueChecked"),t.consume(c),t.exit("taskListCheckValueChecked"),o):n(c)}function o(c){return c===93?(t.enter("taskListCheckMarker"),t.consume(c),t.exit("taskListCheckMarker"),t.exit("taskListCheck"),u):n(c)}function u(c){return E(c)?e(c):A(c)?t.check({tokenize:$o},e,n)(c):n(c)}}function $o(t,e,n){return L(t,r,"whitespace");function r(i){return i===null?n(i):e(i)}}function mr(t){return tn([$n(),vn(),Qn(t),Zn(),Yn()])}function Gn(t,e){let n=String(t);if(typeof e!="string")throw new TypeError("Expected character");let r=0,i=n.indexOf(e);for(;i!==-1;)r++,i=n.indexOf(e,i+e.length);return r}function gn(t){if(typeof t!="string")throw new TypeError("Expected a string");return t.replace(/[|\\{}()[\]^$+*?.]/g,"\\$&").replace(/-/g,"\\x2d")}var _t=(function(t){if(t==null)return Zo;if(typeof t=="function")return xn(t);if(typeof t=="object")return Array.isArray(t)?Uo(t):vo(t);if(typeof t=="string")return Qo(t);throw new Error("Expected function, string, or object as test")});function Uo(t){let e=[],n=-1;for(;++n<t.length;)e[n]=_t(t[n]);return xn(r);function r(...i){let a=-1;for(;++a<e.length;)if(e[a].apply(this,i))return!0;return!1}}function vo(t){let e=t;return xn(n);function n(r){let i=r,a;for(a in t)if(i[a]!==e[a])return!1;return!0}}function Qo(t){return xn(e);function e(n){return n&&n.type===t}}function xn(t){return e;function e(n,r,i){return!!(Yo(n)&&t.call(this,n,typeof r=="number"?r:void 0,i||void 0))}}function Zo(){return!0}function Yo(t){return t!==null&&typeof t=="object"&&"type"in t}var fr=[],pr=!0,Xn=!1,hr="skip";function Jn(t,e,n,r){let i;typeof e=="function"&&typeof n!="function"?(r=n,n=e):i=e;let a=_t(i),o=r?-1:1;u(t,void 0,[])();function u(c,m,l){let s=c&&typeof c=="object"?c:{};if(typeof s.type=="string"){let f=typeof s.tagName=="string"?s.tagName:typeof s.name=="string"?s.name:void 0;Object.defineProperty(p,"name",{value:"node ("+(c.type+(f?"<"+f+">":""))+")"})}return p;function p(){let f=fr,x,T,w;if((!e||a(c,m,l[l.length-1]||void 0))&&(f=Go(n(c,l)),f[0]===Xn))return f;if("children"in c&&c.children){let b=c;if(b.children&&f[0]!==hr)for(T=(r?b.children.length:-1)+o,w=l.concat(b);T>-1&&T<b.children.length;){let S=b.children[T];if(x=u(S,T,w)(),x[0]===Xn)return x;T=typeof x[1]=="number"?x[1]:T+o}}return f}}}function Go(t){return Array.isArray(t)?t:typeof t=="number"?[pr,t]:t==null?fr:[t]}function Kn(t,e,n){let i=_t((n||{}).ignore||[]),a=Xo(e),o=-1;for(;++o<a.length;)Jn(t,"text",u);function u(m,l){let s=-1,p;for(;++s<l.length;){let f=l[s],x=p?p.children:void 0;if(i(f,x?x.indexOf(f):void 0,p))return;p=f}if(p)return c(m,l)}function c(m,l){let s=l[l.length-1],p=a[o][0],f=a[o][1],x=0,w=s.children.indexOf(m),b=!1,S=[];p.lastIndex=0;let C=p.exec(m.value);for(;C;){let M=C.index,y={index:C.index,input:C.input,stack:[...l,m]},I=f(...C,y);if(typeof I=="string"&&(I=I.length>0?{type:"text",value:I}:void 0),I===!1)p.lastIndex=M+1;else{if(x!==M&&P({type:"text",value:m.value.slice(x,M)}),Array.isArray(I))for(let N of I)P(N);else I&&P(I);x=M+C[0].length,b=!0}if(!p.global)break;C=p.exec(m.value)}return b?(x<m.value.length&&P({type:"text",value:m.value.slice(x)}),s.children.splice(w,1,...S)):S=[m],w+S.length;function P(M){let y=S[S.length-1];y&&y.type==="text"&&M.type==="text"?y.value+=M.value:S.push(M)}}}function Xo(t){if(!Array.isArray(t))throw new TypeError("Expected find and replace tuple or list of tuples");let e=[],n=!t[0]||Array.isArray(t[0])?t:[t],r=-1;for(;++r<n.length;){let i=n[r];e.push([Jo(i[0]),Ko(i[1])])}return e}function Jo(t){return typeof t=="string"?new RegExp(gn(t),"g"):t}function Ko(t){return typeof t=="function"?t:function(){return t}}function ne(){return{transforms:[oa],enter:{literalAutolink:ta,literalAutolinkEmail:te,literalAutolinkHttp:te,literalAutolinkWww:te},exit:{literalAutolink:ia,literalAutolinkEmail:ra,literalAutolinkHttp:na,literalAutolinkWww:ea}}}function ta(t){this.enter({type:"link",title:null,url:"",children:[]},t)}function te(t){this.config.enter.autolinkProtocol.call(this,t)}function na(t){this.config.exit.autolinkProtocol.call(this,t)}function ea(t){this.config.exit.data.call(this,t);let e=this.stack[this.stack.length-1];e.type,e.url="http://"+this.sliceSerialize(t)}function ra(t){this.config.exit.autolinkEmail.call(this,t)}function ia(t){this.exit(t)}function oa(t){Kn(t,[[/(https?:\/\/|www(?=\.))([-.\w]+)([^ \t\r\n]*)/gi,aa],[/(?<=^|\s|\p{P}|\p{S})([-.\w+]+)@([-\w]+(?:\.[-\w]+)+)/gu,ua]],{ignore:["link","linkReference"]})}function aa(t,e,n,r,i){let a="";if(!gr(i)||(/^w/i.test(e)&&(n=e+n,e="",a="http://"),!la(n)))return!1;let o=sa(n+r);if(!o[0])return!1;let u={type:"link",title:null,url:a+e+o[0],children:[{type:"text",value:e+o[0]}]};return o[1]?[u,{type:"text",value:o[1]}]:u}function ua(t,e,n,r){return!gr(r,!0)||/[-\d_]$/.test(n)?!1:{type:"link",title:null,url:"mailto:"+e+"@"+n,children:[{type:"text",value:e+"@"+n}]}}function la(t){let e=t.split(".");return!(e.length<2||e[e.length-1]&&(/_/.test(e[e.length-1])||!/[a-zA-Z\d]/.test(e[e.length-1]))||e[e.length-2]&&(/_/.test(e[e.length-2])||!/[a-zA-Z\d]/.test(e[e.length-2])))}function sa(t){let e=/[!"&'),.:;<>?\]}]+$/.exec(t);if(!e)return[t,void 0];t=t.slice(0,e.index);let n=e[0],r=n.indexOf(")"),i=Gn(t,"("),a=Gn(t,")");for(;r!==-1&&i>a;)t+=n.slice(0,r+1),n=n.slice(r+1),r=n.indexOf(")"),a++;return[t,n]}function gr(t,e){let n=t.input.charCodeAt(t.index-1);return(t.index===0||at(n)||yt(n))&&(!e||n!==47)}wa.peek=ba;function ma(){this.buffer()}function fa(t){this.enter({type:"footnoteReference",identifier:"",label:""},t)}function pa(){this.buffer()}function ha(t){this.enter({type:"footnoteDefinition",identifier:"",label:"",children:[]},t)}function ga(t){let e=this.resume(),n=this.stack[this.stack.length-1];n.type,n.identifier=Y(this.sliceSerialize(t)).toLowerCase(),n.label=e}function xa(t){this.exit(t)}function ka(t){let e=this.resume(),n=this.stack[this.stack.length-1];n.type,n.identifier=Y(this.sliceSerialize(t)).toLowerCase(),n.label=e}function da(t){this.exit(t)}function ba(){return"["}function wa(t,e,n,r){let i=n.createTracker(r),a=i.move("[^"),o=n.enter("footnoteReference"),u=n.enter("reference");return a+=i.move(n.safe(n.associationId(t),{after:"]",before:a})),u(),o(),a+=i.move("]"),a}function ee(){return{enter:{gfmFootnoteCallString:ma,gfmFootnoteCall:fa,gfmFootnoteDefinitionLabelString:pa,gfmFootnoteDefinition:ha},exit:{gfmFootnoteCallString:ga,gfmFootnoteCall:xa,gfmFootnoteDefinitionLabelString:ka,gfmFootnoteDefinition:da}}}xr.attention=Ea;xr.peek=Fa;function re(){return{canContainEols:["delete"],enter:{strikethrough:Sa},exit:{strikethrough:Ca}}}function Sa(t){this.enter({type:"delete",children:[],position:void 0},t)}function Ca(t){this.exit(t)}function xr(t,e,n,r){let i=n.createTracker(r),a=n.stack.includes("strikethrough")?"~":"~~",o=n.enter("strikethrough"),u=i.move(a);return u+=n.containerPhrasing(t,{...i.current(),before:u,after:"~"}),u+=i.move(a),o(),u}function Ea(){return{construct:"strikethrough",markers:["~"],sizes:[2,1]}}function Fa(){return"~"}function oe(){return{enter:{table:Ta,tableData:kr,tableHeader:kr,tableRow:za},exit:{codeText:La,table:Aa,tableData:ie,tableHeader:ie,tableRow:ie}}}function Ta(t){let e=t._align;this.enter({type:"table",align:e.map(function(n){return n==="none"?null:n}),children:[]},t),this.data.inTable=!0}function Aa(t){this.exit(t),this.data.inTable=void 0}function za(t){this.enter({type:"tableRow",children:[]},t)}function ie(t){this.exit(t)}function kr(t){this.enter({type:"tableCell",children:[]},t)}function La(t){let e=this.resume();this.data.inTable&&(e=e.replace(/\\([\\|])/g,Ma));let n=this.stack[this.stack.length-1];n.type,n.value=e,this.exit(t)}function Ma(t,e){return e==="|"?e:t}function ae(){return{exit:{taskListCheckValueChecked:dr,taskListCheckValueUnchecked:dr,paragraph:Pa}}}function dr(t){let e=this.stack[this.stack.length-2];e.type,e.checked=t.type==="taskListCheckValueChecked"}function Pa(t){let e=this.stack[this.stack.length-2];if(e&&e.type==="listItem"&&typeof e.checked=="boolean"){let n=this.stack[this.stack.length-1];n.type;let r=n.children[0];if(r&&r.type==="text"){let i=e.children,a=-1,o;for(;++a<i.length;){let u=i[a];if(u.type==="paragraph"){o=u;break}}o===n&&(r.value=r.value.slice(1),r.value.length===0?n.children.shift():n.position&&r.position&&typeof r.position.start.offset=="number"&&(r.position.start.column++,r.position.start.offset++,n.position.start=Object.assign({},r.position.start)))}}this.exit(t)}function ue(){return[ne(),ee(),re(),oe(),ae()]}var wr={tokenize:_a,concrete:!0,name:"mathFlow"},br={tokenize:Oa,partial:!0};function _a(t,e,n){let r=this,i=r.events[r.events.length-1],a=i&&i[1].type==="linePrefix"?i[2].sliceSerialize(i[1],!0).length:0,o=0;return u;function u(S){return t.enter("mathFlow"),t.enter("mathFlowFence"),t.enter("mathFlowFenceSequence"),c(S)}function c(S){return S===36?(t.consume(S),o++,c):o<2?n(S):(t.exit("mathFlowFenceSequence"),L(t,m,"whitespace")(S))}function m(S){return S===null||E(S)?s(S):(t.enter("mathFlowFenceMeta"),t.enter("chunkString",{contentType:"string"}),l(S))}function l(S){return S===null||E(S)?(t.exit("chunkString"),t.exit("mathFlowFenceMeta"),s(S)):S===36?n(S):(t.consume(S),l)}function s(S){return t.exit("mathFlowFence"),r.interrupt?e(S):t.attempt(br,p,w)(S)}function p(S){return t.attempt({tokenize:b,partial:!0},w,f)(S)}function f(S){return(a?L(t,x,"linePrefix",a+1):x)(S)}function x(S){return S===null?w(S):E(S)?t.attempt(br,p,w)(S):(t.enter("mathFlowValue"),T(S))}function T(S){return S===null||E(S)?(t.exit("mathFlowValue"),x(S)):(t.consume(S),T)}function w(S){return t.exit("mathFlow"),e(S)}function b(S,C,P){let M=0;return L(S,y,"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4);function y(q){return S.enter("mathFlowFence"),S.enter("mathFlowFenceSequence"),I(q)}function I(q){return q===36?(M++,S.consume(q),I):M<o?P(q):(S.exit("mathFlowFenceSequence"),L(S,N,"whitespace")(q))}function N(q){return q===null||E(q)?(S.exit("mathFlowFence"),C(q)):P(q)}}}function Oa(t,e,n){let r=this;return i;function i(o){return o===null?e(o):(t.enter("lineEnding"),t.consume(o),t.exit("lineEnding"),a)}function a(o){return r.parser.lazy[r.now().line]?n(o):e(o)}}function yr(t){let n=(t||{}).singleDollarTextMath;return n==null&&(n=!0),{tokenize:r,resolve:Ba,previous:Na,name:"mathText"};function r(i,a,o){let u=this,c=0,m,l;return s;function s(w){return i.enter("mathText"),i.enter("mathTextSequence"),p(w)}function p(w){return w===36?(i.consume(w),c++,p):c<2&&!n?o(w):(i.exit("mathTextSequence"),f(w))}function f(w){return w===null?o(w):w===36?(l=i.enter("mathTextSequence"),m=0,T(w)):w===32?(i.enter("space"),i.consume(w),i.exit("space"),f):E(w)?(i.enter("lineEnding"),i.consume(w),i.exit("lineEnding"),f):(i.enter("mathTextData"),x(w))}function x(w){return w===null||w===32||w===36||E(w)?(i.exit("mathTextData"),f(w)):(i.consume(w),x)}function T(w){return w===36?(i.consume(w),m++,T):m===c?(i.exit("mathTextSequence"),i.exit("mathText"),a(w)):(l.type="mathTextData",x(w))}}}function Ba(t){let e=t.length-4,n=3,r,i;if((t[n][1].type==="lineEnding"||t[n][1].type==="space")&&(t[e][1].type==="lineEnding"||t[e][1].type==="space")){for(r=n;++r<e;)if(t[r][1].type==="mathTextData"){t[e][1].type="mathTextPadding",t[n][1].type="mathTextPadding",n+=2,e-=2;break}}for(r=n-1,e++;++r<=e;)i===void 0?r!==e&&t[r][1].type!=="lineEnding"&&(i=r):(r===e||t[r][1].type==="lineEnding")&&(t[i][1].type="mathTextData",r!==i+2&&(t[i][1].end=t[r-1][1].end,t.splice(i+2,r-i-2),e-=r-i-2,r=i+2),i=void 0);return t}function Na(t){return t!==36||this.events[this.events.length-1][1].type==="characterEscape"}function le(t){return{flow:{36:wr},text:{36:yr(t)}}}function se(){return{enter:{mathFlow:t,mathFlowFenceMeta:e,mathText:a},exit:{mathFlow:i,mathFlowFence:r,mathFlowFenceMeta:n,mathFlowValue:u,mathText:o,mathTextData:u}};function t(c){let m={type:"element",tagName:"code",properties:{className:["language-math","math-display"]},children:[]};this.enter({type:"math",meta:null,value:"",data:{hName:"pre",hChildren:[m]}},c)}function e(){this.buffer()}function n(){let c=this.resume(),m=this.stack[this.stack.length-1];m.type,m.meta=c}function r(){this.data.mathFlowInside||(this.buffer(),this.data.mathFlowInside=!0)}function i(c){let m=this.resume().replace(/^(\r?\n|\r)|(\r?\n|\r)$/g,""),l=this.stack[this.stack.length-1];l.type,this.exit(c),l.value=m;let s=l.data.hChildren[0];s.type,s.tagName,s.children.push({type:"text",value:m}),this.data.mathFlowInside=void 0}function a(c){this.enter({type:"inlineMath",value:"",data:{hName:"code",hProperties:{className:["language-math","math-inline"]},hChildren:[]}},c),this.buffer()}function o(c){let m=this.resume(),l=this.stack[this.stack.length-1];l.type,this.exit(c),l.value=m,l.data.hChildren.push({type:"text",value:m})}function u(c){this.config.enter.data.call(this,c),this.config.exit.data.call(this,c)}}var Cr=Vr(Sr(),1),Yt=Object.assign(It(Error),{eval:It(EvalError),range:It(RangeError),reference:It(ReferenceError),syntax:It(SyntaxError),type:It(TypeError),uri:It(URIError)});function It(t){return e.displayName=t.displayName||t.name,e;function e(n,...r){let i=n&&(0,Cr.default)(n,...r);return new t(i)}}var kn={}.hasOwnProperty,Er={yaml:"-",toml:"+"};function Gt(t){let e=[],n=-1,r=Array.isArray(t)?t:t?[t]:["yaml"];for(;++n<r.length;)e[n]=qa(r[n]);return e}function qa(t){let e=t;if(typeof e=="string"){if(!kn.call(Er,e))throw Yt("Missing matter definition for `%s`",e);e={type:e,marker:Er[e]}}else if(typeof e!="object")throw Yt("Expected matter to be an object, not `%j`",e);if(!kn.call(e,"type"))throw Yt("Missing `type` in matter `%j`",e);if(!kn.call(e,"fence")&&!kn.call(e,"marker"))throw Yt("Missing `marker` or `fence` in matter `%j`",e);return e}function fe(t){let e=Gt(t),n={},r=-1;for(;++r<e.length;){let i=e[r],a=me(i,"open").charCodeAt(0),o=Ha(i),u=n[a];Array.isArray(u)?u.push(o):n[a]=[o]}return{flow:n}}function Ha(t){let e=t.anywhere,n=t.type,r=n+"Fence",i=r+"Sequence",a=n+"Value",o={tokenize:l,partial:!0},u,c=0;return{tokenize:m,concrete:!0};function m(s,p,f){let x=this;return T;function T(I){let N=x.now();return N.column===1&&(N.line===1||e)&&(u=me(t,"open"),c=0,I===u.charCodeAt(c))?(s.enter(n),s.enter(r),s.enter(i),w(I)):f(I)}function w(I){return c===u.length?(s.exit(i),A(I)?(s.enter("whitespace"),b(I)):S(I)):I===u.charCodeAt(c++)?(s.consume(I),w):f(I)}function b(I){return A(I)?(s.consume(I),b):(s.exit("whitespace"),S(I))}function S(I){return E(I)?(s.exit(r),s.enter("lineEnding"),s.consume(I),s.exit("lineEnding"),u=me(t,"close"),c=0,s.attempt(o,y,C)):f(I)}function C(I){return I===null||E(I)?M(I):(s.enter(a),P(I))}function P(I){return I===null||E(I)?(s.exit(a),M(I)):(s.consume(I),P)}function M(I){return I===null?f(I):(s.enter("lineEnding"),s.consume(I),s.exit("lineEnding"),s.attempt(o,y,C))}function y(I){return s.exit(n),p(I)}}function l(s,p,f){let x=0;return T;function T(C){return C===u.charCodeAt(x)?(s.enter(r),s.enter(i),w(C)):f(C)}function w(C){return x===u.length?(s.exit(i),A(C)?(s.enter("whitespace"),b(C)):S(C)):C===u.charCodeAt(x++)?(s.consume(C),w):f(C)}function b(C){return A(C)?(s.consume(C),b):(s.exit("whitespace"),S(C))}function S(C){return C===null||E(C)?(s.exit(r),p(C)):f(C)}}}function me(t,e){return t.marker?Fr(t.marker,e).repeat(3):Fr(t.fence,e)}function Fr(t,e){return typeof t=="string"?t:t[e]}function pe(t){let e=Gt(t),n={},r={},i=-1;for(;++i<e.length;){let a=e[i];n[a.type]=ja(a),r[a.type]=Va,r[a.type+"Value"]=Wa}return{enter:n,exit:r}}function ja(t){return e;function e(n){this.enter({type:t.type,value:""},n),this.buffer()}}function Va(t){let e=this.resume(),n=this.stack[this.stack.length-1];"value"in n,this.exit(t),n.value=e.replace(/^(\r?\n|\r)|(\r?\n|\r)$/g,"")}function Wa(t){this.config.enter.data.call(this,t),this.config.exit.data.call(this,t)}var $a=(t,e)=>t.from<e.to&&e.from<t.to,he=t=>({from:t.position?.start.offset??0,to:t.position?.end.offset??0});function Ir(t,e,n){let r=Te(t,e,n);if(!r)return;let i=Vn(t,{extensions:[mr(),le(),fe(["yaml"])],mdastExtensions:[ue(),se(),pe(["yaml"])]}),a=[],o=[];function u(w){let b=he(w);if(["code","inlineCode","math","inlineMath","yaml","definition","image","imageReference","linkReference"].includes(w.type)){a.push(b);return}if(w.type==="html"){o.push({value:w.value,range:b}),a.push(b);return}if(w.type==="link"){if(t[b.from]!=="["||!w.children.length){a.push(b);return}a.push({from:b.from,to:he(w.children[0]).from}),a.push({from:he(w.children[w.children.length-1]).to,to:b.to})}if(w.type==="text"){let S=t.slice(b.from,b.to);for(let C of S.matchAll(/\\[!"#$%&'()*+,\-./:;<=>?@[\]\\^_`{|}~]|&(?:#[xX][0-9a-fA-F]+|#\d+|[A-Za-z][A-Za-z0-9]+);/g))a.push({from:b.from+C.index,to:b.from+C.index+C[0].length})}if("children"in w)for(let S of w.children)u(S)}u(i);for(let w of[/%%[\s\S]*?(?:%%|$)/g,/!?\[\[[^\r\n]*?(?:\]\]|$)/gm,/(?:[A-Za-z][A-Za-z0-9+.-]*:\/\/|mailto:|www\.)[^\s<>[\]]+/g])for(let b of t.matchAll(w))a.push({from:b.index,to:b.index+b[0].length});let c=[];for(let w of o)for(let b of w.value.matchAll(/<\/?([A-Za-z][\w:-]*)\b[^>]*>/g)){let S=b[1].toLowerCase(),C=w.range.from+b.index,P=C+b[0].length;if(b[0].startsWith("</")){let M=c.map(y=>y.tag).lastIndexOf(S);M>=0&&(a.push({from:c[M].from,to:P}),c.splice(M))}else!b[0].endsWith("/>")&&!/^(?:area|base|br|col|embed|hr|img|input|link|meta|param|source|track|wbr)$/.test(S)&&c.push({tag:S,from:C})}for(let w of c)a.push({from:w.from,to:t.length});if(a.some(w=>$a(w,r)))return;let m=t.slice(0,e),l=m.lastIndexOf(`

`),s=m.slice(l<0?0:l+2),p="",f="";for(let w of s.matchAll(/\\[\s\S]|`+|\${1,2}/g)){let b=w[0];b.startsWith("\\")||(b.startsWith("`")&&!f?p?p===b&&(p=""):p=b:b.startsWith("$")&&!p&&(f?f===b&&(f=""):f=b))}let x=s.lastIndexOf("]("),T=x<0?0:1;if(x>=0){for(let w of s.slice(x+2).matchAll(/\\[\s\S]|[()]/g))if(w[0]==="("&&T++,w[0]===")"&&--T===0)break}if(!(p||f||T>0||/<(?:\/?[A-Za-z]|!|\?)[^>\n]*$/.test(s))&&!(/^---(?:\r?\n|$)/.test(m)&&!/\n(?:---|\.\.\.)(?:\r?\n|$)/.test(m.slice(3))))return r}var dn=st.StateEffect.define({map:(t,e)=>({...t,from:e.mapPos(t.from,1)})}),ge=st.StateEffect.define({map:(t,e)=>({...t,from:e.mapPos(t.from,1)})}),xe=st.StateEffect.define(),Tt=st.StateField.define({create:()=>({}),update(t,e){e.docChanged?t={}:e.selection&&!e.selection.eq(e.startState.selection)&&(t={rejected:t.rejected});for(let n of e.effects)n.is(dn)&&(t={recent:n.value}),n.is(ge)&&(t={rejected:n.value}),n.is(xe)&&(t={});return t}});function Tr(t,e){let n=r=>{if(!e()||r.compositionStarted||r.composing)return!1;let i=r.state.field(Tt).recent,{ranges:a,main:o}=r.state.selection;return!i||a.length!==1||!o.empty||o.head!==i.from+i.text.length||r.state.sliceDoc(i.from,o.head)!==i.text?!1:(0,Bt.undo)(r)};return[Tt,Bt.invertedEffects.of(r=>r.effects.flatMap(i=>i.is(dn)?[ge.of(i.value)]:i.is(ge)?[dn.of(i.value)]:[])),st.Prec.highest(Ot.keymap.of([{key:"Backspace",run:n}])),Ot.EditorView.domEventHandlers({beforeinput(r,i){return r.inputType==="deleteContentBackward"&&!r.isComposing&&n(i)?(r.preventDefault(),!0):!1}}),Ot.EditorView.domEventObservers({compositionstart(r,i){(i.state.field(Tt).recent||i.state.field(Tt).rejected)&&i.dispatch({effects:xe.of()})},blur(r,i){(i.state.field(Tt).recent||i.state.field(Tt).rejected)&&i.dispatch({effects:xe.of()})}}),Ot.EditorView.inputHandler.of((r,i,a,o,u)=>{if(!e()||o!==" "||i!==a||r.compositionStarted||r.composing||r.state.selection.ranges.length!==1||!r.state.selection.main.empty||r.state.selection.main.head!==i||u().annotation(st.Transaction.userEvent)!=="input.type")return!1;let m=r.state.field(Tt).rejected;if(m&&i===m.from+m.source.length&&r.state.sliceDoc(m.from,i)===m.source)return!1;let l=Ir(r.state.doc.toString(),i,t());return l?(r.dispatch({changes:{from:l.from,to:l.to,insert:l.text},selection:{anchor:l.from+l.text.length},effects:dn.of(l),annotations:Bt.isolateHistory.of("full"),userEvent:"input.complete",scrollIntoView:!0}),!0):!1})]}var bn=class extends Nt.Plugin{constructor(){super(...arguments);this.settings={...Cn};this.enabled=!1}async onload(){this.settings=Ie(await this.loadData()),this.enabled=!0,this.registerEditorExtension(Tr(()=>this.settings,()=>this.enabled)),this.addSettingTab(new ke(this.app,this))}async changeSetting(n,r){this.settings={...this.settings,[n]:r},await this.saveData(this.settings)}onunload(){this.enabled=!1}},ke=class extends Nt.PluginSettingTab{constructor(n,r){super(n,r);this.plugin=r}getSettingDefinitions(){return[["arrows","Arrows","Press Space after -> or <=> to insert \u2192 or \u21D4. The conversion consumes that space.","arrows"],["scripts","Subscripts & superscripts","Press Space to convert the text after the nearest _ or ^, such as 2026_11_03 \u2192 2026_11\u2080\u2083. Earlier text stays unchanged. Every character in that part must have a Unicode equivalent.","subscripts--superscripts"],["operators","Math operators","Press Space after >= or != to insert \u2265 or \u2260. The input <= always means \u2264.","math-operators"],["latex","Symbols from commands","Press Space to replace backslash commands with Unicode, such as \\alpha \u2192 \u03B1 and \\infty \u2192 \u221E. Includes arrow and math operator commands.","symbols-from-commands"]].map(([r,i,a,o])=>({name:i,desc:a,render:u=>{u.setDesc(a+" "),u.descEl.createEl("a",{text:"View all supported shortcuts",cls:"external-link",attr:{href:`https://github.com/chaovven/obsidian-easy-symbols#${o}`,target:"_blank",rel:"noopener noreferrer","aria-label":`View all supported shortcuts: ${i}`}}),u.addToggle(c=>{c.setValue(this.plugin.settings[r]).onChange(async m=>{await this.plugin.changeSetting(r,m)})})}}))}display(){this.containerEl.empty();for(let n of this.getSettingDefinitions()){let r=new Nt.Setting(this.containerEl).setName(n.name);n.render(r)}}};

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
