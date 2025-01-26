/*! For license information please see lib-router.d2aeca1d.js.LICENSE.txt */
"use strict";(self.webpackChunkjeff_blog=self.webpackChunkjeff_blog||[]).push([["118"],{2599:function(e,t,a){var n,r,i,o;function l(){return(l=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}a.d(t,{J0:()=>c,RQ:()=>x,X3:()=>E,Zn:()=>R,aU:()=>n,cP:()=>v,cm:()=>S,fp:()=>m,lX:()=>u,pC:()=>P}),(i=n||(n={})).Pop="POP",i.Push="PUSH",i.Replace="REPLACE";let s="popstate";function u(e){return void 0===e&&(e={}),function(e,t,a,r){void 0===r&&(r={});let{window:i=document.defaultView,v5Compat:o=!1}=r,u=i.history,h=n.Pop,v=null,m=g();function g(){return(u.state||{idx:null}).idx}function y(){h=n.Pop;let e=g(),t=null==e?null:e-m;m=e,v&&v({action:h,location:R.location,delta:t})}function b(e){let t="null"!==i.location.origin?i.location.origin:i.location.href,a="string"==typeof e?e:f(e);return c(t,"No window.location.(origin|href) available to create URL for href: "+(a=a.replace(/ $/,"%20"))),new URL(a,t)}null==m&&(m=0,u.replaceState(l({},u.state,{idx:m}),""));let R={get action(){return h},get location(){return e(i,u)},listen(e){if(v)throw Error("A history only accepts one active listener");return i.addEventListener(s,y),v=e,()=>{i.removeEventListener(s,y),v=null}},createHref:e=>t(i,e),createURL:b,encodeLocation(e){let t=b(e);return{pathname:t.pathname,search:t.search,hash:t.hash}},push:function(e,t){h=n.Push;let a=d(R.location,e,t),r=p(a,m=g()+1),l=R.createHref(a);try{u.pushState(r,"",l)}catch(e){if(e instanceof DOMException&&"DataCloneError"===e.name)throw e;i.location.assign(l)}o&&v&&v({action:h,location:R.location,delta:1})},replace:function(e,t){h=n.Replace;let r=d(R.location,e,t);a&&a(r,e);let i=p(r,m=g()),l=R.createHref(r);u.replaceState(i,"",l),o&&v&&v({action:h,location:R.location,delta:0})},go:e=>u.go(e)};return R}(function(e,t){let{pathname:a,search:n,hash:r}=e.location;return d("",{pathname:a,search:n,hash:r},t.state&&t.state.usr||null,t.state&&t.state.key||"default")},function(e,t){return"string"==typeof t?t:f(t)},null,e)}function c(e,t){if(!1===e||null==e)throw Error(t)}function h(e,t){if(!e){"undefined"!=typeof console&&console.warn(t);try{throw Error(t)}catch(e){}}}function p(e,t){return{usr:e.state,key:e.key,idx:t}}function d(e,t,a,n){return void 0===a&&(a=null),l({pathname:"string"==typeof e?e:e.pathname,search:"",hash:""},"string"==typeof t?v(t):t,{state:a,key:t&&t.key||n||Math.random().toString(36).substr(2,8)})}function f(e){let{pathname:t="/",search:a="",hash:n=""}=e;return a&&"?"!==a&&(t+="?"===a.charAt(0)?a:"?"+a),n&&"#"!==n&&(t+="#"===n.charAt(0)?n:"#"+n),t}function v(e){let t={};if(e){let a=e.indexOf("#");a>=0&&(t.hash=e.substr(a),e=e.substr(0,a));let n=e.indexOf("?");n>=0&&(t.search=e.substr(n),e=e.substr(0,n)),e&&(t.pathname=e)}return t}function m(e,t,a){return void 0===a&&(a="/"),function(e,t,a,n){let r=R(("string"==typeof t?v(t):t).pathname||"/",a);if(null==r)return null;let i=function e(t,a,n,r){void 0===a&&(a=[]),void 0===n&&(n=[]),void 0===r&&(r="");let i=(t,i,o)=>{let l={relativePath:void 0===o?t.path||"":o,caseSensitive:!0===t.caseSensitive,childrenIndex:i,route:t};l.relativePath.startsWith("/")&&(c(l.relativePath.startsWith(r),'Absolute route path "'+l.relativePath+'" nested under path "'+r+'" is not valid. An absolute child route path must start with the combined path of all its parent routes.'),l.relativePath=l.relativePath.slice(r.length));let s=x([r,l.relativePath]),u=n.concat(l);if(t.children&&t.children.length>0&&(c(!0!==t.index,'Index routes must not have child routes. Please remove all child routes from route path "'+s+'".'),e(t.children,a,u,s)),null!=t.path||t.index){var h,p;let e,n;a.push({path:s,score:(h=s,p=t.index,n=(e=h.split("/")).length,e.some(y)&&(n+=-2),p&&(n+=2),e.filter(e=>!y(e)).reduce((e,t)=>e+(g.test(t)?3:""===t?1:10),n)),routesMeta:u})}};return t.forEach((e,t)=>{var a;if(""!==e.path&&null!=(a=e.path)&&a.includes("?"))for(let a of function e(t){let a=t.split("/");if(0===a.length)return[];let[n,...r]=a,i=n.endsWith("?"),o=n.replace(/\?$/,"");if(0===r.length)return i?[o,""]:[o];let l=e(r.join("/")),s=[];return s.push(...l.map(e=>""===e?o:[o,e].join("/"))),i&&s.push(...l),s.map(e=>t.startsWith("/")&&""===e?"/":e)}(e.path))i(e,t,a);else i(e,t)}),a}(e);(function(e){e.sort((e,t)=>{var a,n;return e.score!==t.score?t.score-e.score:(a=e.routesMeta.map(e=>e.childrenIndex),n=t.routesMeta.map(e=>e.childrenIndex),a.length===n.length&&a.slice(0,-1).every((e,t)=>e===n[t])?a[a.length-1]-n[n.length-1]:0)})})(i);let o=null;for(let e=0;null==o&&e<i.length;++e){let t=function(e){try{return e.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(t){return h(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent encoding ('+t+")."),e}}(r);o=function(e,t,a){void 0===a&&(a=!1);let{routesMeta:n}=e,r={},i="/",o=[];for(let e=0;e<n.length;++e){let l=n[e],s=e===n.length-1,u="/"===i?t:t.slice(i.length)||"/",c=b({path:l.relativePath,caseSensitive:l.caseSensitive,end:s},u),h=l.route;if(!c&&s&&a&&!n[n.length-1].route.index&&(c=b({path:l.relativePath,caseSensitive:l.caseSensitive,end:!1},u)),!c)return null;Object.assign(r,c.params),o.push({params:r,pathname:x([i,c.pathname]),pathnameBase:C(x([i,c.pathnameBase])),route:h}),"/"!==c.pathnameBase&&(i=x([i,c.pathnameBase]))}return o}(i[e],t,n)}return o}(e,t,a,!1)}(o=r||(r={})).data="data",o.deferred="deferred",o.redirect="redirect",o.error="error";let g=/^:[\w-]+$/,y=e=>"*"===e;function b(e,t){var a,n,r;let i,o;"string"==typeof e&&(e={path:e,caseSensitive:!1,end:!0});let[l,s]=(a=e.path,n=e.caseSensitive,r=e.end,void 0===n&&(n=!1),void 0===r&&(r=!0),h("*"===a||!a.endsWith("*")||a.endsWith("/*"),'Route path "'+a+'" will be treated as if it were "'+a.replace(/\*$/,"/*")+'" because the `*` character must always follow a `/` in the pattern. To get rid of this warning, please change the route path to "'+a.replace(/\*$/,"/*")+'".'),i=[],o="^"+a.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(e,t,a)=>(i.push({paramName:t,isOptional:null!=a}),a?"/?([^\\/]+)?":"/([^\\/]+)")),a.endsWith("*")?(i.push({paramName:"*"}),o+="*"===a||"/*"===a?"(.*)$":"(?:\\/(.+)|\\/*)$"):r?o+="\\/*$":""!==a&&"/"!==a&&(o+="(?:(?=\\/|$))"),[new RegExp(o,n?void 0:"i"),i]),u=t.match(l);if(!u)return null;let c=u[0],p=c.replace(/(.)\/+$/,"$1"),d=u.slice(1);return{params:s.reduce((e,t,a)=>{let{paramName:n,isOptional:r}=t;if("*"===n){let e=d[a]||"";p=c.slice(0,c.length-e.length).replace(/(.)\/+$/,"$1")}let i=d[a];return r&&!i?e[n]=void 0:e[n]=(i||"").replace(/%2F/g,"/"),e},{}),pathname:c,pathnameBase:p,pattern:e}}function R(e,t){if("/"===t)return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let a=t.endsWith("/")?t.length-1:t.length,n=e.charAt(a);return n&&"/"!==n?null:e.slice(a)||"/"}function w(e,t,a,n){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field [")+JSON.stringify(n)+"].  Please separate it out to the `to."+a+'` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.'}function S(e,t){let a=e.filter((e,t)=>0===t||e.route.path&&e.route.path.length>0);return t?a.map((e,t)=>t===a.length-1?e.pathname:e.pathnameBase):a.map(e=>e.pathnameBase)}function P(e,t,a,n){let r,i;void 0===n&&(n=!1),"string"==typeof e?r=v(e):(c(!(r=l({},e)).pathname||!r.pathname.includes("?"),w("?","pathname","search",r)),c(!r.pathname||!r.pathname.includes("#"),w("#","pathname","hash",r)),c(!r.search||!r.search.includes("#"),w("#","search","hash",r)));let o=""===e||""===r.pathname,s=o?"/":r.pathname;if(null==s)i=a;else{let e=t.length-1;if(!n&&s.startsWith("..")){let t=s.split("/");for(;".."===t[0];)t.shift(),e-=1;r.pathname=t.join("/")}i=e>=0?t[e]:"/"}let u=function(e,t){var a;let n;void 0===t&&(t="/");let{pathname:r,search:i="",hash:o=""}="string"==typeof e?v(e):e;return{pathname:r?r.startsWith("/")?r:(a=r,n=t.replace(/\/+$/,"").split("/"),a.split("/").forEach(e=>{".."===e?n.length>1&&n.pop():"."!==e&&n.push(e)}),n.length>1?n.join("/"):"/"):t,search:U(i),hash:_(o)}}(r,i),h=s&&"/"!==s&&s.endsWith("/"),p=(o||"."===s)&&a.endsWith("/");return!u.pathname.endsWith("/")&&(h||p)&&(u.pathname+="/"),u}let x=e=>e.join("/").replace(/\/\/+/g,"/"),C=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),U=e=>e&&"?"!==e?e.startsWith("?")?e:"?"+e:"",_=e=>e&&"#"!==e?e.startsWith("#")?e:"#"+e:"";class E extends Error{}Symbol("deferred")},9655:function(e,t,a){a.d(t,{VK:()=>f});var n,r,i,o,l,s,u=a(7294),c=a(3935),h=a(9250),p=a(2599);try{window.__reactRouterVersion="6"}catch(e){}let d=(i||(i=a.t(u,2))).startTransition;function f(e){let{basename:t,children:a,future:n,window:r}=e,i=u.useRef();null==i.current&&(i.current=(0,p.lX)({window:r,v5Compat:!0}));let o=i.current,[l,s]=u.useState({action:o.action,location:o.location}),{v7_startTransition:c}=n||{},f=u.useCallback(e=>{c&&d?d(()=>s(e)):s(e)},[s,c]);return u.useLayoutEffect(()=>o.listen(f),[o,f]),u.useEffect(()=>(0,h.$A)(n),[n]),u.createElement(h.F0,{basename:t,children:a,location:l.location,navigationType:l.action,navigator:o,future:n})}(o||(o=a.t(c,2))).flushSync,(i||(i=a.t(u,2))).useId,"undefined"!=typeof window&&void 0!==window.document&&window.document.createElement,(n=l||(l={})).UseScrollRestoration="useScrollRestoration",n.UseSubmit="useSubmit",n.UseSubmitFetcher="useSubmitFetcher",n.UseFetcher="useFetcher",n.useViewTransitionState="useViewTransitionState",(r=s||(s={})).UseFetcher="useFetcher",r.UseFetchers="useFetchers",r.UseScrollRestoration="useScrollRestoration"},9250:function(e,t,a){a.d(t,{$A:()=>S,F0:()=>P,TH:()=>v,s0:()=>g});var n,r,i,o,l=a(7294),s=a(2599);function u(){return(u=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}let c=l.createContext(null),h=l.createContext(null),p=l.createContext(null),d=l.createContext({outlet:null,matches:[],isDataRoute:!1});function f(){return null!=l.useContext(p)}function v(){return f()||(0,s.J0)(!1),l.useContext(p).location}function m(e){l.useContext(h).static||l.useLayoutEffect(e)}function g(){let{isDataRoute:e}=l.useContext(d);return e?function(){var e,t;let a,n,r,i;let{router:o}=(y.UseNavigateStable,(a=l.useContext(c))||(0,s.J0)(!1),a),h=(b.UseNavigateStable,(i=((n=l.useContext(d))||(0,s.J0)(!1),r=n).matches[r.matches.length-1]).route.id||(0,s.J0)(!1),i.route.id),p=l.useRef(!1);return m(()=>{p.current=!0}),l.useCallback(function(e,t){void 0===t&&(t={}),p.current&&("number"==typeof e?o.navigate(e):o.navigate(e,u({fromRouteId:h},t)))},[o,h])}():function(){f()||(0,s.J0)(!1);let e=l.useContext(c),{basename:t,future:a,navigator:n}=l.useContext(h),{matches:r}=l.useContext(d),{pathname:i}=v(),o=JSON.stringify((0,s.cm)(r,a.v7_relativeSplatPath)),u=l.useRef(!1);return m(()=>{u.current=!0}),l.useCallback(function(a,r){if(void 0===r&&(r={}),!u.current)return;if("number"==typeof a){n.go(a);return}let l=(0,s.pC)(a,JSON.parse(o),i,"path"===r.relative);null==e&&"/"!==t&&(l.pathname="/"===l.pathname?t:(0,s.RQ)([t,l.pathname])),(r.replace?n.replace:n.push)(l,r.state,r)},[t,n,o,i,e])}()}l.Component;var y=((n=y||{}).UseBlocker="useBlocker",n.UseRevalidator="useRevalidator",n.UseNavigateStable="useNavigate",n),b=((r=b||{}).UseBlocker="useBlocker",r.UseLoaderData="useLoaderData",r.UseActionData="useActionData",r.UseRouteError="useRouteError",r.UseNavigation="useNavigation",r.UseRouteLoaderData="useRouteLoaderData",r.UseMatches="useMatches",r.UseRevalidator="useRevalidator",r.UseNavigateStable="useNavigate",r.UseRouteId="useRouteId",r);let R={},w=(e,t,a)=>{var n;R[n="⚠️ React Router Future Flag Warning: "+t+". You can use the `"+e+"` future flag to opt-in early. For more information, see "+a+"."]||(R[n]=!0,console.warn(n))};function S(e,t){(null==e?void 0:e.v7_startTransition)===void 0&&w("v7_startTransition","React Router will begin wrapping state updates in `React.startTransition` in v7","https://reactrouter.com/v6/upgrading/future#v7_starttransition"),(null==e?void 0:e.v7_relativeSplatPath)!==void 0||t&&t.v7_relativeSplatPath||w("v7_relativeSplatPath","Relative route resolution within Splat routes is changing in v7","https://reactrouter.com/v6/upgrading/future#v7_relativesplatpath"),t&&(void 0===t.v7_fetcherPersist&&w("v7_fetcherPersist","The persistence behavior of fetchers is changing in v7","https://reactrouter.com/v6/upgrading/future#v7_fetcherpersist"),void 0===t.v7_normalizeFormMethod&&w("v7_normalizeFormMethod","Casing of `formMethod` fields is being normalized to uppercase in v7","https://reactrouter.com/v6/upgrading/future#v7_normalizeformmethod"),void 0===t.v7_partialHydration&&w("v7_partialHydration","`RouterProvider` hydration behavior is changing in v7","https://reactrouter.com/v6/upgrading/future#v7_partialhydration"),void 0===t.v7_skipActionErrorRevalidation&&w("v7_skipActionErrorRevalidation","The revalidation behavior after 4xx/5xx `action` responses is changing in v7","https://reactrouter.com/v6/upgrading/future#v7_skipactionerrorrevalidation"))}function P(e){let{basename:t="/",children:a=null,location:n,navigationType:r=s.aU.Pop,navigator:i,static:o=!1,future:c}=e;f()&&(0,s.J0)(!1);let d=t.replace(/^\/*/,"/"),v=l.useMemo(()=>({basename:d,navigator:i,static:o,future:u({v7_relativeSplatPath:!1},c)}),[d,c,i,o]);"string"==typeof n&&(n=(0,s.cP)(n));let{pathname:m="/",search:g="",hash:y="",state:b=null,key:R="default"}=n,w=l.useMemo(()=>{let e=(0,s.Zn)(m,d);return null==e?null:{location:{pathname:e,search:g,hash:y,state:b,key:R},navigationType:r}},[d,m,g,y,b,R,r]);return null==w?null:l.createElement(h.Provider,{value:v},l.createElement(p.Provider,{children:a,value:w}))}(o||(o=a.t(l,2))).startTransition;var x=((i=x||{})[i.pending=0]="pending",i[i.success=1]="success",i[i.error=2]="error",i);new Promise(()=>{}),l.Component}}]);