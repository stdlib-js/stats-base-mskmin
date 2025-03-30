"use strict";var p=function(r,i){return function(){return i||r((i={exports:{}}).exports,i),i.exports}};var P=p(function(N,l){
var g=require('@stdlib/math-base-assert-is-nan/dist'),B=require('@stdlib/math-base-assert-is-negative-zero/dist');function C(r,i,t,q,v,x,b){var n,o,c,f,u,a,e,m,s;for(n=i.data,o=v.data,c=i.accessors[0],f=v.accessors[0],a=q,e=b,s=0;s<r&&f(o,e)!==0;s++)a+=t,e+=x;if(s===r)return NaN;if(u=c(n,a),g(u))return u;for(s+=1,s;s<r;s++)if(a+=t,e+=x,!f(o,e)){if(m=c(n,a),g(m))return m;(m<u||m===u&&B(m))&&(u=m)}return u}l.exports=C
});var y=p(function(Q,O){
var Z=require('@stdlib/math-base-assert-is-nan/dist'),D=require('@stdlib/math-base-assert-is-negative-zero/dist'),j=require('@stdlib/array-base-arraylike2object/dist'),E=P();function F(r,i,t,q,v,x,b){var n,o,c,f,u,a,e;if(r<=0)return NaN;if(f=j(i),u=j(v),f.accessorProtocol||u.accessorProtocol)return E(r,f,t,q,u,x,b);for(o=q,c=b,e=0;e<r&&v[c]!==0;e++)o+=t,c+=x;if(e===r)return NaN;if(n=i[o],Z(n))return n;for(e+=1,e;e<r;e++)if(o+=t,c+=x,!v[c]){if(a=i[o],Z(a))return a;(a<n||a===n&&D(a))&&(n=a)}return n}O.exports=F
});var k=p(function(S,h){
var R=require('@stdlib/strided-base-stride2offset/dist'),G=y();function H(r,i,t,q,v){return G(r,i,t,R(r,t),q,v,R(r,v))}h.exports=H
});var A=p(function(T,z){
var I=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),w=k(),J=y();I(w,"ndarray",J);z.exports=w
});var K=A();module.exports=K;
/** @license Apache-2.0 */
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
