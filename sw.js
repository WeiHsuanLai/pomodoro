if(!self.define){let s,e={};const i=(i,n)=>(i=new URL(i+".js",n).href,e[i]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=i,s.onload=e,document.head.appendChild(s)}else s=i,importScripts(i),e()})).then((()=>{let s=e[i];if(!s)throw new Error(`Module ${i} didn’t register its module`);return s})));self.define=(n,r)=>{const l=s||("document"in self?document.currentScript.src:"")||location.href;if(e[l])return;let a={};const o=s=>i(s,l),c={module:{uri:l},exports:a,require:o};e[l]=Promise.all(n.map((s=>c[s]||o(s)))).then((s=>(r(...s),a)))}}define(["./workbox-3e911b1d"],(function(s){"use strict";self.skipWaiting(),s.clientsClaim(),s.precacheAndRoute([{url:"android-chrome-192x192.png",revision:"ddb3fd18eeadc92e0fa8552f3b3d6cd5"},{url:"android-chrome-512x512.png",revision:"65d8846a3fc8c92f64d7bdfa123c2ac0"},{url:"apple-touch-icon.png",revision:"7ce39427a15f5eaa3e453170bb12dfb8"},{url:"assets/index-BlHuJU4K.css",revision:null},{url:"assets/index-Cmi27OP_.js",revision:null},{url:"assets/index-CpOlpa6U.js",revision:null},{url:"assets/list-aZl_xtHB.js",revision:null},{url:"assets/list-Bx_nP95b.css",revision:null},{url:"assets/list-XtVI_Cgy.js",revision:null},{url:"assets/materialdesignicons-webfont-CgCzGbLl.woff",revision:null},{url:"assets/materialdesignicons-webfont-CYDMK1kx.woff2",revision:null},{url:"assets/materialdesignicons-webfont-D3kAzl71.ttf",revision:null},{url:"assets/materialdesignicons-webfont-DttUABo4.eot",revision:null},{url:"assets/settings-BfiPItHG.js",revision:null},{url:"assets/settings-CXljmYcM.css",revision:null},{url:"assets/settings-DH5JmGAm.js",revision:null},{url:"assets/tomato-tm_sgEMz.png",revision:null},{url:"assets/VInput-Ce3uzalR.css",revision:null},{url:"assets/VInput-DU4X6XE4.js",revision:null},{url:"assets/VRow-DSx9s_Qp.js",revision:null},{url:"favicon-16x16.png",revision:"906570bbe4993b0f124bd0680ec7b2e3"},{url:"favicon-32x32.png",revision:"617d5457cfc527c3be9926d00091a4df"},{url:"favicon.ico",revision:"8d08b4244284a833eaf79f67fdbb911a"},{url:"index.html",revision:"8d6a11ebf3ae874100557db950c8c33d"},{url:"mstile-150x150.png",revision:"bce06df20b2fe03a9ab1f40580b6f48f"},{url:"registerSW.js",revision:"402b66900e731ca748771b6fc5e7a068"},{url:"safari-pinned-tab.svg",revision:"0f32d91aa0e0afe204832bc521c130b4"},{url:"splashscreens/ipad_splash.png",revision:"f96333ca2b25172438a660deff6b40da"},{url:"splashscreens/ipadpro1_splash.png",revision:"aabefc1b9d64f8366852f56909c854a5"},{url:"splashscreens/ipadpro2_splash.png",revision:"e45b7bf335a4007df627b9a647239435"},{url:"splashscreens/ipadpro3_splash.png",revision:"094ce0b7617b43c8acaef3e5634b0e66"},{url:"splashscreens/iphone5_splash.png",revision:"83016342f47874a8fadbb69612c9063b"},{url:"splashscreens/iphone6_splash.png",revision:"010e9d76636b28c426168e5081bd36f8"},{url:"splashscreens/iphoneplus_splash.png",revision:"8305518f0e4054b9dc803f0144a35054"},{url:"splashscreens/iphonex_splash.png",revision:"8049c71594035e09a1d8b3ed8778c7a9"},{url:"splashscreens/iphonexr_splash.png",revision:"b4f8a8da2dc7522dadb61c1dd96a0052"},{url:"splashscreens/iphonexsmax_splash.png",revision:"4b3a9ff999c5371159cfc511f0c28133"},{url:"android-chrome-192x192.png",revision:"ddb3fd18eeadc92e0fa8552f3b3d6cd5"},{url:"android-chrome-512x512.png",revision:"65d8846a3fc8c92f64d7bdfa123c2ac0"},{url:"manifest.webmanifest",revision:"c29c06c9064fc50fc464546b43322c18"}],{ignoreURLParametersMatching:[/.*/]}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html")))}));
