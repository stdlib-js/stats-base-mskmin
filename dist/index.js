"use strict";var c=function(i,a){return function(){return a||i((a={exports:{}}).exports,a),a.exports}};var x=c(function(B,p){
var q=require('@stdlib/math-base-assert-is-nan/dist'),O=require('@stdlib/math-base-assert-is-negative-zero/dist');function R(i,a,t,s,o){var u,f,r,n,e;if(i<=0)return NaN;for(t<0?f=(1-i)*t:f=0,o<0?r=(1-i)*o:r=0,e=0;e<i&&s[r]!==0;e++)f+=t,r+=o;if(e===i)return NaN;if(u=a[f],q(u))return u;for(e+=1,e;e<i;e++)if(f+=t,r+=o,!s[r]){if(n=a[f],q(n))return n;(n<u||n===u&&O(n))&&(u=n)}return u}p.exports=R
});var b=c(function(C,y){
var l=require('@stdlib/math-base-assert-is-nan/dist'),h=require('@stdlib/math-base-assert-is-negative-zero/dist');function j(i,a,t,s,o,u,f){var r,n,e,m,v;if(i<=0)return NaN;for(n=s,e=f,v=0;v<i&&o[e]!==0;v++)n+=t,e+=u;if(v===i)return NaN;if(r=a[n],l(r))return r;for(v+=1,v;v<i;v++)if(n+=t,e+=u,!o[e]){if(m=a[n],l(m))return m;(m<r||m===r&&h(m))&&(r=m)}return r}y.exports=j
});var Z=c(function(D,N){
var k=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),g=x(),w=b();k(g,"ndarray",w);N.exports=g
});var z=Z();module.exports=z;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
