// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var n=function(){var n,r;return n=0,r=0,function(t){if(0===arguments.length)return 0===r?null:n;return n+=(t-n)/(r+=1)}};var r=function(){var r=n();return function(n,t){if(0===arguments.length)return r();return r((t-n)/t*100)}};export{r as default};
//# sourceMappingURL=mod.js.map
