(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5557:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return r(9661)}])},3740:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return v}});let i=r(8754),n=r(1757),a=n._(r(7294)),s=i._(r(2636)),l=r(7757),o=r(3735),d=r(3341);r(4210);let c=i._(r(7746)),u={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0};function f(e){return void 0!==e.default}function g(e){return void 0===e?e:"number"==typeof e?Number.isFinite(e)?e:NaN:"string"==typeof e&&/^[0-9]+$/.test(e)?parseInt(e,10):NaN}function h(e,t,r,i,n,a,s){if(!e||e["data-loaded-src"]===t)return;e["data-loaded-src"]=t;let l="decode"in e?e.decode():Promise.resolve();l.catch(()=>{}).then(()=>{if(e.parentElement&&e.isConnected){if("blur"===r&&a(!0),null==i?void 0:i.current){let t=new Event("load");Object.defineProperty(t,"target",{writable:!1,value:e});let r=!1,n=!1;i.current({...t,nativeEvent:t,currentTarget:e,target:e,isDefaultPrevented:()=>r,isPropagationStopped:()=>n,persist:()=>{},preventDefault:()=>{r=!0,t.preventDefault()},stopPropagation:()=>{n=!0,t.stopPropagation()}})}(null==n?void 0:n.current)&&n.current(e)}})}function m(e){let[t,r]=a.version.split("."),i=parseInt(t,10),n=parseInt(r,10);return i>18||18===i&&n>=3?{fetchPriority:e}:{fetchpriority:e}}let p=(0,a.forwardRef)((e,t)=>{let{imgAttributes:r,heightInt:i,widthInt:n,qualityInt:s,className:l,imgStyle:o,blurStyle:d,isLazy:c,fetchPriority:u,fill:f,placeholder:g,loading:p,srcString:b,config:v,unoptimized:w,loader:x,onLoadRef:j,onLoadingCompleteRef:A,setBlurComplete:E,setShowAltText:y,onLoad:S,onError:C,...N}=e;return p=c?"lazy":p,a.default.createElement(a.default.Fragment,null,a.default.createElement("img",{...N,...m(u),loading:p,width:n,height:i,decoding:"async","data-nimg":f?"fill":"1",className:l,style:{...o,...d},...r,ref:(0,a.useCallback)(e=>{t&&("function"==typeof t?t(e):"object"==typeof t&&(t.current=e)),e&&(C&&(e.src=e.src),e.complete&&h(e,b,g,j,A,E,w))},[b,g,j,A,E,C,w,t]),onLoad:e=>{let t=e.currentTarget;h(t,b,g,j,A,E,w)},onError:e=>{y(!0),"blur"===g&&E(!0),C&&C(e)}}))}),b=(0,a.forwardRef)((e,t)=>{var r;let i,n,{src:h,sizes:b,unoptimized:v=!1,priority:w=!1,loading:x,className:j,quality:A,width:E,height:y,fill:S,style:C,onLoad:N,onLoadingComplete:_,placeholder:R="empty",blurDataURL:I,fetchPriority:k,layout:O,objectFit:P,objectPosition:T,lazyBoundary:z,lazyRoot:M,...B}=e,G=(0,a.useContext)(d.ImageConfigContext),V=(0,a.useMemo)(()=>{let e=u||G||o.imageConfigDefault,t=[...e.deviceSizes,...e.imageSizes].sort((e,t)=>e-t),r=e.deviceSizes.sort((e,t)=>e-t);return{...e,allSizes:t,deviceSizes:r}},[G]),F=B.loader||c.default;delete B.loader;let Q="__next_img_default"in F;if(Q){if("custom"===V.loader)throw Error('Image with src "'+h+'" is missing "loader" prop.\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader')}else{let e=F;F=t=>{let{config:r,...i}=t;return e(i)}}if(O){"fill"===O&&(S=!0);let e={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[O];e&&(C={...C,...e});let t={responsive:"100vw",fill:"100vw"}[O];t&&!b&&(b=t)}let Y="",U=g(E),L=g(y);if("object"==typeof(r=h)&&(f(r)||void 0!==r.src)){let e=f(h)?h.default:h;if(!e.src)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received "+JSON.stringify(e));if(!e.height||!e.width)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received "+JSON.stringify(e));if(i=e.blurWidth,n=e.blurHeight,I=I||e.blurDataURL,Y=e.src,!S){if(U||L){if(U&&!L){let t=U/e.width;L=Math.round(e.height*t)}else if(!U&&L){let t=L/e.height;U=Math.round(e.width*t)}}else U=e.width,L=e.height}}let D=!w&&("lazy"===x||void 0===x);(!(h="string"==typeof h?h:Y)||h.startsWith("data:")||h.startsWith("blob:"))&&(v=!0,D=!1),V.unoptimized&&(v=!0),Q&&h.endsWith(".svg")&&!V.dangerouslyAllowSVG&&(v=!0),w&&(k="high");let[W,J]=(0,a.useState)(!1),[X,Z]=(0,a.useState)(!1),q=g(A),H=Object.assign(S?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:P,objectPosition:T}:{},X?{}:{color:"transparent"},C),K="blur"===R&&I&&!W?{backgroundSize:H.objectFit||"cover",backgroundPosition:H.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:'url("data:image/svg+xml;charset=utf-8,'+(0,l.getImageBlurSvg)({widthInt:U,heightInt:L,blurWidth:i,blurHeight:n,blurDataURL:I,objectFit:H.objectFit})+'")'}:{},$=function(e){let{config:t,src:r,unoptimized:i,width:n,quality:a,sizes:s,loader:l}=e;if(i)return{src:r,srcSet:void 0,sizes:void 0};let{widths:o,kind:d}=function(e,t,r){let{deviceSizes:i,allSizes:n}=e;if(r){let e=/(^|\s)(1?\d?\d)vw/g,t=[];for(let i;i=e.exec(r);i)t.push(parseInt(i[2]));if(t.length){let e=.01*Math.min(...t);return{widths:n.filter(t=>t>=i[0]*e),kind:"w"}}return{widths:n,kind:"w"}}if("number"!=typeof t)return{widths:i,kind:"w"};let a=[...new Set([t,2*t].map(e=>n.find(t=>t>=e)||n[n.length-1]))];return{widths:a,kind:"x"}}(t,n,s),c=o.length-1;return{sizes:s||"w"!==d?s:"100vw",srcSet:o.map((e,i)=>l({config:t,src:r,quality:a,width:e})+" "+("w"===d?e:i+1)+d).join(", "),src:l({config:t,src:r,quality:a,width:o[c]})}}({config:V,src:h,unoptimized:v,width:U,quality:q,sizes:b,loader:F}),ee=h,et=(0,a.useRef)(N);(0,a.useEffect)(()=>{et.current=N},[N]);let er=(0,a.useRef)(_);(0,a.useEffect)(()=>{er.current=_},[_]);let ei={isLazy:D,imgAttributes:$,heightInt:L,widthInt:U,qualityInt:q,className:j,imgStyle:H,blurStyle:K,loading:x,config:V,fetchPriority:k,fill:S,unoptimized:v,placeholder:R,loader:F,srcString:ee,onLoadRef:et,onLoadingCompleteRef:er,setBlurComplete:J,setShowAltText:Z,...B};return a.default.createElement(a.default.Fragment,null,a.default.createElement(p,{...ei,ref:t}),w?a.default.createElement(s.default,null,a.default.createElement("link",{key:"__nimg-"+$.src+$.srcSet+$.sizes,rel:"preload",as:"image",href:$.srcSet?void 0:$.src,imageSrcSet:$.srcSet,imageSizes:$.sizes,crossOrigin:B.crossOrigin,...m(k)})):null)}),v=b;("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},7757:function(e,t){"use strict";function r(e){let{widthInt:t,heightInt:r,blurWidth:i,blurHeight:n,blurDataURL:a,objectFit:s}=e,l=i||t,o=n||r,d=a.startsWith("data:image/jpeg")?"%3CfeComponentTransfer%3E%3CfeFuncA type='discrete' tableValues='1 1'/%3E%3C/feComponentTransfer%3E%":"";return l&&o?"%3Csvg xmlns='http%3A//www.w3.org/2000/svg' viewBox='0 0 "+l+" "+o+"'%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='"+(i&&n?"1":"20")+"'/%3E"+d+"%3C/filter%3E%3Cimage preserveAspectRatio='none' filter='url(%23b)' x='0' y='0' height='100%25' width='100%25' href='"+a+"'/%3E%3C/svg%3E":"%3Csvg xmlns='http%3A//www.w3.org/2000/svg'%3E%3Cimage style='filter:blur(20px)' preserveAspectRatio='"+("contain"===s?"xMidYMid":"cover"===s?"xMidYMid slice":"none")+"' x='0' y='0' height='100%25' width='100%25' href='"+a+"'/%3E%3C/svg%3E"}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImageBlurSvg",{enumerable:!0,get:function(){return r}})},7746:function(e,t){"use strict";function r(e){let{config:t,src:r,width:i,quality:n}=e;return t.path+"?url="+encodeURIComponent(r)+"&w="+i+"&q="+(n||75)}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return i}}),r.__next_img_default=!0;let i=r},9661:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return u}});var i=r(5893),n=r(9008),a=r.n(n),s=r(5675),l=r.n(s),o={src:"/_next/static/media/buildspace-logo.0b276bac.png",height:789,width:750,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAIAAABLbSncAAAAw0lEQVR42mPQ1RS3MlNkYOASkBFhYGBQUVHlYGFjAAIJMRYVOQYgEFUVYGFlYmLm4FVT5pCXYmBmU9EyT2ZQ9GdgUGUAA21JBlV5BgZGSR8BlwmsqXtEImZZh0+wTJ3L4DuBRTmQQVbNko2BwSy8UNIwrXbhmartL+zbnxpFr2QQkNbg5pVx8PBzcnIKTq/PbZiV0zgzMLmCAQhUVVWLCgsLCgrys9NSE8IZYIBRVUnCwkjaQFPQSE/G0lRNXlGRmVMQAC4SJWCzQHX1AAAAAElFTkSuQmCC",blurWidth:8,blurHeight:8},d=r(7294);let c=()=>{let[e,t]=(0,d.useState)(""),[r,n]=(0,d.useState)(""),[s,c]=(0,d.useState)(!1),u=async()=>{c(!0),console.log("Calling OpenAI...");let t=await fetch("/api/generate",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({userInput:e})}),r=await t.json(),{output:i}=r;console.log("OpenAI replied...",i.text),n("".concat(i.text)),c(!1)},f=e=>{console.log(e.target.value),t(e.target.value)};return(0,i.jsxs)("div",{className:"root",children:[(0,i.jsx)(a(),{children:(0,i.jsx)("title",{children:"GPT-3 Writer | ARTEDYS"})}),(0,i.jsxs)("div",{className:"container",children:[(0,i.jsxs)("div",{className:"header",children:[(0,i.jsx)("div",{className:"header-title",children:(0,i.jsx)("h1",{children:"magic! CLIMATE-SAT GenAI"})}),(0,i.jsx)("div",{className:"header-subtitle",children:(0,i.jsx)("h2",{children:"ask ARTEDYS generator GPT-3 any questions about CLIMATE-SAT, we'll generate the rest."})})]}),(0,i.jsxs)("div",{className:"prompt-container",children:[(0,i.jsx)("textarea",{placeholder:"start typing here",className:"prompt-box",value:e,onChange:f}),(0,i.jsx)("div",{className:"prompt-buttons",children:(0,i.jsx)("a",{className:s?"generate-button loading":"generate-button",onClick:u,children:(0,i.jsx)("div",{className:"generate",children:s?(0,i.jsx)("span",{className:"loader"}):(0,i.jsx)("p",{children:"Generate"})})})}),r&&(0,i.jsxs)("div",{className:"output",children:[(0,i.jsx)("div",{className:"output-header-container",children:(0,i.jsx)("div",{className:"output-header",children:(0,i.jsx)("h3",{children:"Output"})})}),(0,i.jsx)("div",{className:"output-content",children:(0,i.jsx)("p",{children:r})})]})]})]}),(0,i.jsx)("div",{className:"badge-container grow",children:(0,i.jsx)("a",{href:"https://climate-sat.com",target:"_blank",rel:"noreferrer",children:(0,i.jsxs)("div",{className:"badge",children:[(0,i.jsx)(l(),{src:o,alt:"buildspace logo"}),(0,i.jsx)("p",{children:"build with ARTEDYS"})]})})})]})};var u=c},9008:function(e,t,r){e.exports=r(2636)},5675:function(e,t,r){e.exports=r(3740)}},function(e){e.O(0,[774,888,179],function(){return e(e.s=5557)}),_N_E=e.O()}]);