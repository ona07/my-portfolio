(function(){"use strict";var e={293:function(e,t,n){var r=n(963),o=n(252);const c={class:"app"};function i(e,t,n,r,i,a){const u=(0,o.up)("sidebar"),s=(0,o.up)("router-view");return(0,o.wg)(),(0,o.iD)("div",c,[(0,o.Wm)(u),(0,o.Wm)(s)])}const a={class:"sidebar"};function u(e,t,n,r,c,i){const u=(0,o.up)("router-link");return(0,o.wg)(),(0,o.iD)("aside",a,[(0,o.Wm)(u,{to:"/"},{default:(0,o.w5)((()=>[(0,o.Uk)("Home")])),_:1}),(0,o.Wm)(u,{to:"/about"},{default:(0,o.w5)((()=>[(0,o.Uk)("About")])),_:1}),(0,o.Wm)(u,{to:"/projects"},{default:(0,o.w5)((()=>[(0,o.Uk)("Projects")])),_:1})])}var s={name:"MySidebar"},f=n(744);const p=(0,f.Z)(s,[["render",u],["__scopeId","data-v-c1056b68"]]);var d=p,h={name:"App",components:{Sidebar:d}};const v=(0,f.Z)(h,[["render",i]]);var l=v,m=n(201);const w={refs:"canvas",class:"home"};function b(e,t,n,r,c,i){return(0,o.wg)(),(0,o.iD)("div",w)}var g=n(35),k=n.n(g),y={name:"MyProfile",mounted(){this.sketch=new(k())(this.createSketch,this.$refs.canvas)},beforeUnmount(){this.sketch.remove()},methods:{createSketch(e){let t;e.setup=()=>{e.createCanvas(window.innerWidth,window.innerHeight,e.WEBGL),e.noStroke(),t=[],t[0]=e.createVector(0,-100,0),t[1]=e.createVector(-50,50,50),t[2]=e.createVector(50,50,50),t[3]=e.createVector(-50,-50,-50),t[4]=e.createVector(50,-50,-50)},e.draw=()=>{e.background(20),e.lights();const n=e.map(e.mouseX,0,e.width,-e.PI,e.PI);e.rotateY(n),t[0]=e.createVector(e.mouseX-window.innerWidth/2,0,0),t[1]=e.createVector(0,e.mouseY-window.innerHeight/2,0),t[3]=e.createVector(0,e.mouseY-window.innerHeight/2,0),e.beginShape(e.TRIANGLE_STRIP);for(let r=0;r<t.length;r++){const n=t[r];e.vertex(n.x,n.y,n.z)}e.endShape()}}}};const O=(0,f.Z)(y,[["render",b]]);var j=O,_={name:"MyAbout"};const P=_;var S=P,V={name:"MyProjects"};const W=V;var x=W;const A=[{path:"/",component:j},{path:"/About",component:S},{path:"/projects",component:x}],I=(0,m.p7)({history:(0,m.PO)(),routes:A});var M=I;(0,r.ri)(l).use(M).mount("#app")}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var c=t[r]={exports:{}};return e[r](c,c.exports,n),c.exports}n.m=e,function(){var e=[];n.O=function(t,r,o,c){if(!r){var i=1/0;for(f=0;f<e.length;f++){r=e[f][0],o=e[f][1],c=e[f][2];for(var a=!0,u=0;u<r.length;u++)(!1&c||i>=c)&&Object.keys(n.O).every((function(e){return n.O[e](r[u])}))?r.splice(u--,1):(a=!1,c<i&&(i=c));if(a){e.splice(f--,1);var s=o();void 0!==s&&(t=s)}}return t}c=c||0;for(var f=e.length;f>0&&e[f-1][2]>c;f--)e[f]=e[f-1];e[f]=[r,o,c]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={143:0};n.O.j=function(t){return 0===e[t]};var t=function(t,r){var o,c,i=r[0],a=r[1],u=r[2],s=0;if(i.some((function(t){return 0!==e[t]}))){for(o in a)n.o(a,o)&&(n.m[o]=a[o]);if(u)var f=u(n)}for(t&&t(r);s<i.length;s++)c=i[s],n.o(e,c)&&e[c]&&e[c][0](),e[c]=0;return n.O(f)},r=self["webpackChunktest_app"]=self["webpackChunktest_app"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var r=n.O(void 0,[998],(function(){return n(293)}));r=n.O(r)})();
//# sourceMappingURL=app.b10038fd.js.map