if(!self.define){let e,i={};const s=(s,c)=>(s=new URL(s+".js",c).href,i[s]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=i,document.head.appendChild(e)}else e=s,importScripts(s),i()})).then((()=>{let e=i[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(c,r)=>{const n=e||("document"in self?document.currentScript.src:"")||location.href;if(i[n])return;let d={};const o=e=>s(e,n),a={module:{uri:n},exports:d,require:o};i[n]=Promise.all(c.map((e=>a[e]||o(e)))).then((e=>(r(...e),d)))}}define(["./workbox-c2bc8b5b"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"css/bl.css",revision:"42b062ba4f5586197e4263750431032f"},{url:"css/custom.css",revision:"dbd05a62d3d1de495db3a8ea49407241"},{url:"css/index.css",revision:"acdcb9e4b47bd1bee60c5a7d4def5453"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"404.html",revision:"b100b31520152c7c01d888f63017bded"},{url:"js/lazysizes.min.js",revision:"8ee73693e2490a1077405807c5c3358b"},{url:"js/main.js",revision:"c9ff371f3c50f332a29f41f4c3483665"},{url:"js/search/algolia.js",revision:"dff0d830ab1d005f1eda1ea299c724cc"},{url:"js/search/local-search.js",revision:"0f5dddc0c88389610bae38a044ee7a8a"},{url:"js/tw_cn.js",revision:"bd9f7c3f385d1a9a448243c0bf966625"},{url:"js/utils.js",revision:"fd85cc5176f0290dc1ac0f6eba6e17d5"},{url:"anzhiyu/random.js",revision:"dc694cabfbb646dee31de7a7c962e669"},{url:"img/404.jpg",revision:"8190796a570d269ef04b777d93d44e6d"},{url:"img/512.png",revision:"701819a72025df4d8e2a111c1c8f2c72"},{url:"img/algolia.svg",revision:"88450dd56ea1a00ba772424b30b7d34d"},{url:"img/alipay.jpg",revision:"606388489ed360881bde98beb1bdf696"},{url:"img/comment_bg.png",revision:"fe6bbe142eb7dc7b4f876ae4f5af97d0"},{url:"img/default_cover.jpg",revision:"8b35831759dc5f66710c2839422109d5"},{url:"img/favicon.ico",revision:"463fd720116f4237a0dbf0330c144bf9"},{url:"img/friend_404.gif",revision:"d09ab53cb5bb15079ce8e3d90b157353"},{url:"img/loading.gif",revision:"05fb29f4e677ff6057ef55925f46e9b0"},{url:"img/nd.JPG",revision:"57a676110e5935b135062c0b027e5967"},{url:"img/siteicon/16.png",revision:"3de470acb5237bf16318d827443dd5f1"},{url:"img/siteicon/32.png",revision:"802aa4685b3652d5a1b6e5a6323cf3c0"},{url:"img/siteicon/apple-icon-180.png",revision:"ac045b7b6012d72ccbcffb07727c7b11"},{url:"img/siteicon/manifest-icon-192.maskable.png",revision:"87c1b5883834c2164e20e737bd5c2517"},{url:"img/siteicon/manifest-icon-512.maskable.png",revision:"85b846b5722c684339c8bb3e520bcc6a"},{url:"img/title.ico",revision:"2f9de60043b75a54e14e1939631e6baa"},{url:"img/wechat.jpg",revision:"dd851e51cd7a0853395829758a8600fe"},{url:"manifest.json",revision:"b9b2b455a3c4a36b4527e5d913a5fcdf"},{url:"/",revision:"index-20230612060347771"},{url:"music/",revision:"music-20230612060347771"},{url:"about/",revision:"about-20230612060347771"}],{}),e.registerRoute(/^https:\/\/npm\.elemecdn\.com\/anzhiyu-blog/,new e.CacheFirst,"GET")}));
//# sourceMappingURL=service-worker.js.map
