var E=(i,p,o)=>new Promise((f,l)=>{var _=s=>{try{r(o.next(s))}catch(d){l(d)}},h=s=>{try{r(o.throw(s))}catch(d){l(d)}},r=s=>s.done?f(s.value):Promise.resolve(s.value).then(_,h);r((o=o.apply(i,p)).next())});import{b as M,q as A}from"./element-plus-c89972e5.js";import{d as D,t as T,p as N,o as B,b as R,e as w,O as m,T as v,X as g,a0 as S,u as U,Z as V,aA as F,aB as O}from"./vendor0-9e9963e5.js";import{a as q}from"./index-3da9c86c.js";import"./vendor1-b25ebc05.js";import"./graphql-9dc7dd56.js";const x=i=>(F("data-v-bd8f5750"),i=i(),O(),i),W={class:"canvas-dom"},Z=x(()=>w("h3",null,"基于canvas实现的签名组件",-1)),j=["src"],z=D({__name:"Page3",setup(i){const p=T(""),o=T();let f,l=!1;const _=e=>{let t;if(e.offsetX){const{offsetX:n,offsetY:c}=e;t=[n,c]}else{const{top:n,left:c}=o.value.getBoundingClientRect(),a=e.touches[0].clientX-c,u=e.touches[0].clientY-n;t=[a,u]}return t};let h=0,r=0;const s=e=>{[h,r]=_(e),l=!0},d=e=>{if(l){const[t,n]=_(e);Y(h,r,t,n,f),h=t,r=n}},k=()=>{l&&(l=!1)};N(()=>{f=o.value.getContext("2d")});const X=()=>E(this,null,function*(){if(b(o.value)){M({type:"warning",message:"当前签名文件为空"});return}L(o.value.toDataURL(),"签名.png")&&y()}),y=()=>{f.clearRect(0,0,o.value.width,o.value.height)},b=e=>{const t=document.createElement("canvas");return t.width=e.width,t.height=e.height,e.toDataURL()==t.toDataURL()},I=()=>{if(b(o.value)){M({type:"warning",message:"当前签名文件为空"});return}const e=document.createElement("a");e.href=o.value.toDataURL(),e.download="签名";const t=new MouseEvent("click");e.dispatchEvent(t)},L=(e,t)=>{const n=e.split(",");if(!n.length)return;const c=n[0].match(/:(.*?);/);if(c){const a=atob(n[1]);let u=a.length;const C=new Uint8Array(u);for(;u--;)C[u]=a.charCodeAt(u);return new File([C],t,{type:c[1]})}};function Y(e,t,n,c,a){a.beginPath(),a.globalAlpha=1,a.lineWidth=2,a.strokeStyle="#000",a.moveTo(e,t),a.lineTo(n,c),a.closePath(),a.stroke()}return(e,t)=>{const n=A;return B(),R("div",W,[Z,w("header",null,[m(n,{type:"primary",onClick:I},{default:v(()=>[g("保存为图片")]),_:1}),m(n,{onClick:X},{default:v(()=>[g("保存到后端")]),_:1}),m(n,{onClick:y},{default:v(()=>[g("清空签名")]),_:1})]),w("canvas",{ref_key:"canvas",ref:o,height:"200",width:"500",onMousedown:s,onMousemove:S(d,["stop","prevent"]),onMouseup:k,onTouchstart:s,onTouchmove:S(d,["stop","prevent"]),onTouchend:k},null,544),U(p)?(B(),R("img",{key:0,src:U(p),alt:"签名"},null,8,j)):V("",!0)])}}});const P=q(z,[["__scopeId","data-v-bd8f5750"]]);export{P as default};
