import{r as n,v as we,w as Me,y as Re,x as te,bP as ke,E as ie,ak as Ee,bQ as Ne,bR as Ae,ah as le,h as Y,bS as Le,at as Te,bF as Fe,aX as Ge,Z as L,$ as T,j as e,R as H,C as A,a as z,k as q,W as ce,aA as oe,bb as V,p as Ie,B as v,bT as x,be as X,V as se,D as _e,bU as Pe,I as Be,bV as $,bW as De,bX as We,bY as He,n as U,bZ as Ve}from"./index-99bb278a.js";import{F as d,a as ae,c as Xe,b as Ze,T as W}from"./index-34229871.js";import{D as Ue}from"./index-4583c270.js";const Ye=n.createContext({}),J=Ye,qe=t=>{const{antCls:s,componentCls:a,iconCls:i,avatarBg:r,avatarColor:l,containerSize:h,containerSizeLG:m,containerSizeSM:C,textFontSize:g,textFontSizeLG:M,textFontSizeSM:_,borderRadius:b,borderRadiusLG:y,borderRadiusSM:R,lineWidth:k,lineType:F,calc:N}=t,O=(p,E,j)=>({width:p,height:p,lineHeight:te(N(p).sub(N(k).mul(2)).equal()),borderRadius:"50%",[`&${a}-square`]:{borderRadius:j},[`${a}-string`]:{position:"absolute",left:{_skip_check_:!0,value:"50%"},transformOrigin:"0 center"},[`&${a}-icon`]:{fontSize:E,[`> ${i}`]:{margin:0}}});return{[a]:Object.assign(Object.assign(Object.assign(Object.assign({},Re(t)),{position:"relative",display:"inline-block",overflow:"hidden",color:l,whiteSpace:"nowrap",textAlign:"center",verticalAlign:"middle",background:r,border:`${te(k)} ${F} transparent`,"&-image":{background:"transparent"},[`${s}-image-img`]:{display:"block"}}),O(h,g,b)),{"&-lg":Object.assign({},O(m,M,y)),"&-sm":Object.assign({},O(C,_,R)),"> img":{display:"block",width:"100%",height:"100%",objectFit:"cover"}})}},Je=t=>{const{componentCls:s,groupBorderColor:a,groupOverlapping:i,groupSpace:r}=t;return{[`${s}-group`]:{display:"inline-flex",[`${s}`]:{borderColor:a},"> *:not(:first-child)":{marginInlineStart:i}},[`${s}-group-popover`]:{[`${s} + ${s}`]:{marginInlineStart:r}}}},Ke=t=>{const{controlHeight:s,controlHeightLG:a,controlHeightSM:i,fontSize:r,fontSizeLG:l,fontSizeXL:h,fontSizeHeading3:m,marginXS:C,marginXXS:g,colorBorderBg:M}=t;return{containerSize:s,containerSizeLG:a,containerSizeSM:i,textFontSize:Math.round((l+h)/2),textFontSizeLG:m,textFontSizeSM:r,groupSpace:g,groupOverlapping:-C,groupBorderColor:M}},de=we("Avatar",t=>{const{colorTextLightSolid:s,colorTextPlaceholder:a}=t,i=Me(t,{avatarBg:a,avatarColor:s});return[qe(i),Je(i)]},Ke);var Qe=globalThis&&globalThis.__rest||function(t,s){var a={};for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&s.indexOf(i)<0&&(a[i]=t[i]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,i=Object.getOwnPropertySymbols(t);r<i.length;r++)s.indexOf(i[r])<0&&Object.prototype.propertyIsEnumerable.call(t,i[r])&&(a[i[r]]=t[i[r]]);return a};const et=(t,s)=>{const[a,i]=n.useState(1),[r,l]=n.useState(!1),[h,m]=n.useState(!0),C=n.useRef(null),g=n.useRef(null),M=ke(s,C),{getPrefixCls:_,avatar:b}=n.useContext(ie),y=n.useContext(J),R=()=>{if(!g.current||!C.current)return;const o=g.current.offsetWidth,c=C.current.offsetWidth;if(o!==0&&c!==0){const{gap:f=4}=t;f*2<c&&i(c-f*2<o?(c-f*2)/o:1)}};n.useEffect(()=>{l(!0)},[]),n.useEffect(()=>{m(!0),i(1)},[t.src]),n.useEffect(R,[t.gap]);const k=()=>{const{onError:o}=t;(o==null?void 0:o())!==!1&&m(!1)},{prefixCls:F,shape:N,size:O,src:p,srcSet:E,icon:j,className:G,rootClassName:P,alt:ge,draggable:je,children:Z,crossOrigin:fe}=t,D=Qe(t,["prefixCls","shape","size","src","srcSet","icon","className","rootClassName","alt","draggable","children","crossOrigin"]),u=Ee(o=>{var c,f;return(f=(c=O!=null?O:y==null?void 0:y.size)!==null&&c!==void 0?c:o)!==null&&f!==void 0?f:"default"}),ve=Object.keys(typeof u=="object"?u||{}:{}).some(o=>["xs","sm","md","lg","xl","xxl"].includes(o)),K=Ne(ve),be=n.useMemo(()=>{if(typeof u!="object")return{};const o=Ae.find(f=>K[f]),c=u[o];return c?{width:c,height:c,lineHeight:`${c}px`,fontSize:c&&(j||Z)?c/2:18}:{}},[K,u]),S=_("avatar",F),Q=le(S),[ye,Se]=de(S,Q),ze=Y({[`${S}-lg`]:u==="large",[`${S}-sm`]:u==="small"}),ee=n.isValidElement(p),Ce=N||(y==null?void 0:y.shape)||"circle",Oe=Y(S,ze,b==null?void 0:b.className,`${S}-${Ce}`,{[`${S}-image`]:ee||p&&h,[`${S}-icon`]:!!j},Q,G,P,Se),$e=typeof u=="number"?{width:u,height:u,lineHeight:`${u}px`,fontSize:j?u/2:18}:{};let I;if(typeof p=="string"&&h)I=n.createElement("img",{src:p,draggable:je,srcSet:E,onError:k,alt:ge,crossOrigin:fe});else if(ee)I=p;else if(j)I=j;else if(r||a!==1){const o=`scale(${a}) translateX(-50%)`,c={msTransform:o,WebkitTransform:o,transform:o},f=typeof u=="number"?{lineHeight:`${u}px`}:{};I=n.createElement(Le,{onResize:R},n.createElement("span",{className:`${S}-string`,ref:g,style:Object.assign(Object.assign({},f),c)},Z))}else I=n.createElement("span",{className:`${S}-string`,style:{opacity:0},ref:g},Z);return delete D.onError,delete D.gap,ye(n.createElement("span",Object.assign({},D,{style:Object.assign(Object.assign(Object.assign(Object.assign({},$e),be),b==null?void 0:b.style),D.style),className:Oe,ref:M}),I))},tt=n.forwardRef(et),ue=tt,ne=t=>{const{size:s,shape:a}=n.useContext(J),i=n.useMemo(()=>({size:t.size||s,shape:t.shape||a}),[t.size,t.shape,s,a]);return n.createElement(J.Provider,{value:i},t.children)},st=t=>{const{getPrefixCls:s,direction:a}=n.useContext(ie),{prefixCls:i,className:r,rootClassName:l,style:h,maxCount:m,maxStyle:C,size:g,shape:M,maxPopoverPlacement:_="top",maxPopoverTrigger:b="hover",children:y}=t,R=s("avatar",i),k=`${R}-group`,F=le(R),[N,O]=de(R,F),p=Y(k,{[`${k}-rtl`]:a==="rtl"},F,r,l,O),E=Te(y).map((G,P)=>Fe(G,{key:`avatar-key-${P}`})),j=E.length;if(m&&m<j){const G=E.slice(0,m),P=E.slice(m,j);return G.push(n.createElement(Ge,{key:"avatar-popover-key",content:P,trigger:b,placement:_,overlayClassName:`${k}-popover`},n.createElement(ue,{style:C},`+${j-m}`))),N(n.createElement(ne,{shape:M,size:g},n.createElement("div",{className:p,style:h},G)))}return N(n.createElement(ne,{shape:M,size:g},n.createElement("div",{className:p,style:h},E)))},at=st,he=ue;he.Group=at;const w=he;var nt={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M716.3 313.8c19-18.9 19-49.7 0-68.6l-69.9-69.9.1.1c-18.5-18.5-50.3-50.3-95.3-95.2-21.2-20.7-55.5-20.5-76.5.5L80.9 474.2a53.84 53.84 0 000 76.4L474.6 944a54.14 54.14 0 0076.5 0l165.1-165c19-18.9 19-49.7 0-68.6a48.7 48.7 0 00-68.7 0l-125 125.2c-5.2 5.2-13.3 5.2-18.5 0L189.5 521.4c-5.2-5.2-5.2-13.3 0-18.5l314.4-314.2c.4-.4.9-.7 1.3-1.1 5.2-4.1 12.4-3.7 17.2 1.1l125.2 125.1c19 19 49.8 19 68.7 0zM408.6 514.4a106.3 106.2 0 10212.6 0 106.3 106.2 0 10-212.6 0zm536.2-38.6L821.9 353.5c-19-18.9-49.8-18.9-68.7.1a48.4 48.4 0 000 68.6l83 82.9c5.2 5.2 5.2 13.3 0 18.5l-81.8 81.7a48.4 48.4 0 000 68.6 48.7 48.7 0 0068.7 0l121.8-121.7a53.93 53.93 0 00-.1-76.4z"}}]},name:"ant-design",theme:"outlined"};const rt=nt;var it=function(s,a){return n.createElement(L,T({},s,{ref:a,icon:rt}))};const lt=n.forwardRef(it);var ct={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M464 512a48 48 0 1096 0 48 48 0 10-96 0zm200 0a48 48 0 1096 0 48 48 0 10-96 0zm-400 0a48 48 0 1096 0 48 48 0 10-96 0zm661.2-173.6c-22.6-53.7-55-101.9-96.3-143.3a444.35 444.35 0 00-143.3-96.3C630.6 75.7 572.2 64 512 64h-2c-60.6.3-119.3 12.3-174.5 35.9a445.35 445.35 0 00-142 96.5c-40.9 41.3-73 89.3-95.2 142.8-23 55.4-34.6 114.3-34.3 174.9A449.4 449.4 0 00112 714v152a46 46 0 0046 46h152.1A449.4 449.4 0 00510 960h2.1c59.9 0 118-11.6 172.7-34.3a444.48 444.48 0 00142.8-95.2c41.3-40.9 73.8-88.7 96.5-142 23.6-55.2 35.6-113.9 35.9-174.5.3-60.9-11.5-120-34.8-175.6zm-151.1 438C704 845.8 611 884 512 884h-1.7c-60.3-.3-120.2-15.3-173.1-43.5l-8.4-4.5H188V695.2l-4.5-8.4C155.3 633.9 140.3 574 140 513.7c-.4-99.7 37.7-193.3 107.6-263.8 69.8-70.5 163.1-109.5 262.8-109.9h1.7c50 0 98.5 9.7 144.2 28.9 44.6 18.7 84.6 45.6 119 80 34.3 34.3 61.3 74.4 80 119 19.4 46.2 29.1 95.2 28.9 145.8-.6 99.6-39.7 192.9-110.1 262.7z"}}]},name:"message",theme:"outlined"};const ot=ct;var dt=function(s,a){return n.createElement(L,T({},s,{ref:a,icon:ot}))};const ut=n.forwardRef(dt);var ht={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M456 231a56 56 0 10112 0 56 56 0 10-112 0zm0 280a56 56 0 10112 0 56 56 0 10-112 0zm0 280a56 56 0 10112 0 56 56 0 10-112 0z"}}]},name:"more",theme:"outlined"};const xt=ht;var mt=function(s,a){return n.createElement(L,T({},s,{ref:a,icon:xt}))};const xe=n.forwardRef(mt);var pt={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M752 664c-28.5 0-54.8 10-75.4 26.7L469.4 540.8a160.68 160.68 0 000-57.6l207.2-149.9C697.2 350 723.5 360 752 360c66.2 0 120-53.8 120-120s-53.8-120-120-120-120 53.8-120 120c0 11.6 1.6 22.7 4.7 33.3L439.9 415.8C410.7 377.1 364.3 352 312 352c-88.4 0-160 71.6-160 160s71.6 160 160 160c52.3 0 98.7-25.1 127.9-63.8l196.8 142.5c-3.1 10.6-4.7 21.8-4.7 33.3 0 66.2 53.8 120 120 120s120-53.8 120-120-53.8-120-120-120zm0-476c28.7 0 52 23.3 52 52s-23.3 52-52 52-52-23.3-52-52 23.3-52 52-52zM312 600c-48.5 0-88-39.5-88-88s39.5-88 88-88 88 39.5 88 88-39.5 88-88 88zm440 236c-28.7 0-52-23.3-52-52s23.3-52 52-52 52 23.3 52 52-23.3 52-52 52z"}}]},name:"share-alt",theme:"outlined"};const gt=pt;var jt=function(s,a){return n.createElement(L,T({},s,{ref:a,icon:gt}))};const ft=n.forwardRef(jt);var vt={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M690.1 377.4c5.9 0 11.8.2 17.6.5-24.4-128.7-158.3-227.1-319.9-227.1C209 150.8 64 271.4 64 420.2c0 81.1 43.6 154.2 111.9 203.6a21.5 21.5 0 019.1 17.6c0 2.4-.5 4.6-1.1 6.9-5.5 20.3-14.2 52.8-14.6 54.3-.7 2.6-1.7 5.2-1.7 7.9 0 5.9 4.8 10.8 10.8 10.8 2.3 0 4.2-.9 6.2-2l70.9-40.9c5.3-3.1 11-5 17.2-5 3.2 0 6.4.5 9.5 1.4 33.1 9.5 68.8 14.8 105.7 14.8 6 0 11.9-.1 17.8-.4-7.1-21-10.9-43.1-10.9-66 0-135.8 132.2-245.8 295.3-245.8zm-194.3-86.5c23.8 0 43.2 19.3 43.2 43.1s-19.3 43.1-43.2 43.1c-23.8 0-43.2-19.3-43.2-43.1s19.4-43.1 43.2-43.1zm-215.9 86.2c-23.8 0-43.2-19.3-43.2-43.1s19.3-43.1 43.2-43.1 43.2 19.3 43.2 43.1-19.4 43.1-43.2 43.1zm586.8 415.6c56.9-41.2 93.2-102 93.2-169.7 0-124-120.8-224.5-269.9-224.5-149 0-269.9 100.5-269.9 224.5S540.9 847.5 690 847.5c30.8 0 60.6-4.4 88.1-12.3 2.6-.8 5.2-1.2 7.9-1.2 5.2 0 9.9 1.6 14.3 4.1l59.1 34c1.7 1 3.3 1.7 5.2 1.7a9 9 0 006.4-2.6 9 9 0 002.6-6.4c0-2.2-.9-4.4-1.4-6.6-.3-1.2-7.6-28.3-12.2-45.3-.5-1.9-.9-3.8-.9-5.7.1-5.9 3.1-11.2 7.6-14.5zM600.2 587.2c-19.9 0-36-16.1-36-35.9 0-19.8 16.1-35.9 36-35.9s36 16.1 36 35.9c0 19.8-16.2 35.9-36 35.9zm179.9 0c-19.9 0-36-16.1-36-35.9 0-19.8 16.1-35.9 36-35.9s36 16.1 36 35.9a36.08 36.08 0 01-36 35.9z"}}]},name:"wechat",theme:"outlined"};const bt=vt;var yt=function(s,a){return n.createElement(L,T({},s,{ref:a,icon:bt}))};const St=n.forwardRef(yt);var zt={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M457.3 543c-68.1-17.7-145 16.2-174.6 76.2-30.1 61.2-1 129.1 67.8 151.3 71.2 23 155.2-12.2 184.4-78.3 28.7-64.6-7.2-131-77.6-149.2zm-52 156.2c-13.8 22.1-43.5 31.7-65.8 21.6-22-10-28.5-35.7-14.6-57.2 13.7-21.4 42.3-31 64.4-21.7 22.4 9.5 29.6 35 16 57.3zm45.5-58.5c-5 8.6-16.1 12.7-24.7 9.1-8.5-3.5-11.2-13.1-6.4-21.5 5-8.4 15.6-12.4 24.1-9.1 8.7 3.2 11.8 12.9 7 21.5zm334.5-197.2c15 4.8 31-3.4 35.9-18.3 11.8-36.6 4.4-78.4-23.2-109a111.39 111.39 0 00-106-34.3 28.45 28.45 0 00-21.9 33.8 28.39 28.39 0 0033.8 21.8c18.4-3.9 38.3 1.8 51.9 16.7a54.2 54.2 0 0111.3 53.3 28.45 28.45 0 0018.2 36zm99.8-206c-56.7-62.9-140.4-86.9-217.7-70.5a32.98 32.98 0 00-25.4 39.3 33.12 33.12 0 0039.3 25.5c55-11.7 114.4 5.4 154.8 50.1 40.3 44.7 51.2 105.7 34 159.1-5.6 17.4 3.9 36 21.3 41.7 17.4 5.6 36-3.9 41.6-21.2v-.1c24.1-75.4 8.9-161.1-47.9-223.9zM729 499c-12.2-3.6-20.5-6.1-14.1-22.1 13.8-34.7 15.2-64.7.3-86-28-40.1-104.8-37.9-192.8-1.1 0 0-27.6 12.1-20.6-9.8 13.5-43.5 11.5-79.9-9.6-101-47.7-47.8-174.6 1.8-283.5 110.6C127.3 471.1 80 557.5 80 632.2 80 775.1 263.2 862 442.5 862c235 0 391.3-136.5 391.3-245 0-65.5-55.2-102.6-104.8-118zM443 810.8c-143 14.1-266.5-50.5-275.8-144.5-9.3-93.9 99.2-181.5 242.2-195.6 143-14.2 266.5 50.5 275.8 144.4C694.4 709 586 796.6 443 810.8z"}}]},name:"weibo",theme:"outlined"};const Ct=zt;var Ot=function(s,a){return n.createElement(L,T({},s,{ref:a,icon:Ct}))};const $t=n.forwardRef(Ot);var wt={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M564.7 230.1V803h60l25.2 71.4L756.3 803h131.5V230.1H564.7zm247.7 497h-59.9l-75.1 50.4-17.8-50.4h-18V308.3h170.7v418.8zM526.1 486.9H393.3c2.1-44.9 4.3-104.3 6.6-172.9h130.9l-.1-8.1c0-.6-.2-14.7-2.3-29.1-2.1-15-6.6-34.9-21-34.9H287.8c4.4-20.6 15.7-69.7 29.4-93.8l6.4-11.2-12.9-.7c-.8 0-19.6-.9-41.4 10.6-35.7 19-51.7 56.4-58.7 84.4-18.4 73.1-44.6 123.9-55.7 145.6-3.3 6.4-5.3 10.2-6.2 12.8-1.8 4.9-.8 9.8 2.8 13 10.5 9.5 38.2-2.9 38.5-3 .6-.3 1.3-.6 2.2-1 13.9-6.3 55.1-25 69.8-84.5h56.7c.7 32.2 3.1 138.4 2.9 172.9h-141l-2.1 1.5c-23.1 16.9-30.5 63.2-30.8 65.2l-1.4 9.2h167c-12.3 78.3-26.5 113.4-34 127.4-3.7 7-7.3 14-10.7 20.8-21.3 42.2-43.4 85.8-126.3 153.6-3.6 2.8-7 8-4.8 13.7 2.4 6.3 9.3 9.1 24.6 9.1 5.4 0 11.8-.3 19.4-1 49.9-4.4 100.8-18 135.1-87.6 17-35.1 31.7-71.7 43.9-108.9L497 850l5-12c.8-1.9 19-46.3 5.1-95.9l-.5-1.8-108.1-123-22 16.6c6.4-26.1 10.6-49.9 12.5-71.1h158.7v-8c0-40.1-18.5-63.9-19.2-64.9l-2.4-3z"}}]},name:"zhihu",theme:"outlined"};const Mt=wt;var Rt=function(s,a){return n.createElement(L,T({},s,{ref:a,icon:Mt}))};const kt=n.forwardRef(Rt),Et=()=>e.jsx(e.Fragment,{children:e.jsxs(H,{gutter:[16,16],children:[e.jsx(A,{span:12,children:e.jsxs(z,{children:[e.jsx(q,{children:"Checkbox"}),e.jsx(ce,{defaultValue:"lucy",style:{width:120},options:[{value:"jack",label:"Jack"},{value:"lucy",label:"Lucy"},{value:"Yiminghe",label:"yiminghe"},{value:"disabled",label:"Disabled",disabled:!0}]}),e.jsx(oe,{defaultChecked:!0})]})}),e.jsx(A,{span:12})]})}),B="/react-antd-admin-pnpm/assets/travel_3-0a78a2d4.jpg",me=V(({token:t})=>({"custom-image":{borderRadius:t.borderRadiusLG},"card-action":{position:"absolute",right:t.paddingSM,top:t.paddingSM}})),{Title:Nt,Text:At}=X,Lt=()=>{const{styles:t,cx:s}=me(),a=[{key:"1",label:e.jsxs(se,{size:8,children:[e.jsx(_e,{rev:void 0}),e.jsx("span",{children:"删除"})]})},{key:"2",label:e.jsxs(se,{size:8,children:[e.jsx(Pe,{rev:void 0}),e.jsx("span",{children:"修改"})]})}],i=({key:l})=>{},r=[{avatar:B,name:"Gbeata",title:"来历不明"},{avatar:B,name:"Gbeata",title:"来历不明"},{avatar:B,name:"Gbeata",title:"来历不明"},{avatar:B,name:"Gbeata",title:"来历不明"}];return e.jsx(e.Fragment,{children:e.jsx(H,{gutter:[16,16],children:r.map((l,h)=>e.jsx(A,{span:8,children:e.jsxs(z,{children:[e.jsx(Ie,{menu:{items:a,onClick:i},placement:"bottomRight",arrow:!0,children:e.jsx(v,{className:s(t["card-action"]),shape:"circle",type:"text",icon:e.jsx(xe,{})})}),e.jsxs(d,{gap:8,vertical:!0,align:"center",children:[e.jsx(w,{size:64,src:l.avatar}),e.jsx(Nt,{style:{margin:0},level:5,children:l.name}),e.jsx(At,{type:"secondary",children:l.title}),e.jsxs(d,{style:{marginTop:8},gap:8,children:[e.jsx(v,{shape:"circle",icon:e.jsx(x,{style:{color:"#1890ff"},name:"github"})}),e.jsx(v,{shape:"circle",icon:e.jsx(x,{name:"message"})}),e.jsx(v,{shape:"circle",icon:e.jsx(x,{name:"like"})})]})]})]})},h))})})},Tt=()=>e.jsx(e.Fragment,{children:e.jsxs(H,{gutter:[16,16],children:[e.jsx(A,{span:12,children:e.jsxs(z,{children:[e.jsx(q,{children:"Checkbox"}),e.jsx(ce,{defaultValue:"lucy",style:{width:120},options:[{value:"jack",label:"Jack"},{value:"lucy",label:"Lucy"},{value:"Yiminghe",label:"yiminghe"},{value:"disabled",label:"Disabled",disabled:!0}]}),e.jsx(oe,{defaultChecked:!0})]})}),e.jsx(A,{span:12,children:e.jsxs(z,{children:[e.jsx(q,{children:"Checkbox"}),e.jsx("p",{children:"sda"}),e.jsx("p",{children:"sda"}),e.jsx("p",{children:"sda"}),e.jsx("p",{children:"sda"}),e.jsx("p",{children:"sda"}),e.jsx("p",{children:"sda"}),e.jsx("p",{children:"sda"}),e.jsx("p",{children:"sda"}),e.jsx("p",{children:"sda"}),e.jsx("p",{children:"sda"}),e.jsx("p",{children:"sda"}),e.jsx("p",{children:"sda"}),e.jsx("p",{children:"sda"}),e.jsx("p",{children:"sda"}),e.jsx("p",{children:"sda"}),e.jsx("p",{children:"sda"}),e.jsx("p",{children:"sda"}),e.jsx("p",{children:"sda"}),e.jsx("p",{children:"sda"})]})})]})}),Ft="/react-antd-admin-pnpm/assets/avatar_1-329667d0.jpg",Gt="/react-antd-admin-pnpm/assets/avatar_4-2497c77c.jpg",pe="/react-antd-admin-pnpm/assets/avatar_6-1e41071d.jpg",It="/react-antd-admin-pnpm/assets/avatar_8-1956d908.jpg",_t=V(({token:t})=>({"message-list":{".message_content":{flex:1,padding:t.paddingSM,backgroundColor:t.colorBgLayout,borderRadius:t.borderRadiusLG}}})),{Title:Pt,Text:Bt}=X,Dt=({avatar:t,time:s,content:a,user:i})=>{const{styles:r}=_t();return e.jsxs(d,{gap:8,className:r["message-list"],children:[e.jsx("div",{children:t}),e.jsxs("div",{className:"message_content",children:[e.jsxs(d,{justify:"space-between",align:"center",children:[e.jsx(Pt,{level:5,children:i}),e.jsx("div",{children:s})]}),e.jsx(Bt,{type:"secondary",children:a})]})]})},Wt=V(({token:t})=>({"send-box":{".send-content":{flex:1,borderRadius:t.borderRadiusLG}}})),Ht=({avatar:t=pe,time:s,content:a,user:i})=>{const{styles:r}=Wt();return e.jsxs(d,{gap:8,align:"center",className:r["send-box"],children:[e.jsx(w,{src:t}),e.jsx("div",{className:"send-content",children:e.jsx(Be,{placeholder:"请在这里输入您的留言",suffix:e.jsxs(d,{children:[e.jsx(v,{type:"text",shape:"circle",icon:e.jsx(x,{name:"picture"})}),e.jsx(v,{type:"text",shape:"circle",icon:e.jsx(x,{name:"express"})})]})})})]})},{Text:re}=X,Vt=()=>{const{styles:t}=me(),s=[{title:"深圳市",icon:e.jsx(x,{name:"point",size:24})},{title:"shoplazza.nyg@gmail.com",icon:e.jsx(x,{name:"email",size:24})},{title:"前端开发",icon:e.jsx(x,{name:"work",size:24})}],a=[{title:"https://github.com/anyone-yuren",icon:e.jsx(He,{style:{fontSize:24}})},{title:"nhf066901@sina.com",icon:e.jsx($t,{style:{fontSize:24}})},{title:"leio-forver",icon:e.jsx(St,{style:{fontSize:24}})},{title:"https://juejin.cn/user/2682464101469480/posts",icon:e.jsx(kt,{style:{fontSize:24}})}],i=[{avatar:e.jsx(w,{src:Gt}),time:"2小时前",content:"做普通人，干正经事，可以爱小钱，但必有大胸怀。      ",user:"anyone"},{avatar:e.jsx(w,{src:Ft}),time:"27 Dec 2023",content:"多年后，一个埋我的人被指定，这些年，我偶尔想一想死亡的事情，把活着，当成了一种习惯",user:"倾盆大雨"}];return e.jsx(e.Fragment,{children:e.jsxs(H,{gutter:[16,16],children:[e.jsx(A,{span:8,children:e.jsxs(d,{gap:16,vertical:!0,children:[e.jsx(z,{children:e.jsxs(d,{align:"middle",justify:"space-evenly",children:[e.jsx(ae,{name:"Follower",count:12}),e.jsx(Ue,{style:{height:"auto"},type:"vertical"}),e.jsx(ae,{name:"Following",count:112})]})}),e.jsxs(z,{title:"关于我",children:[e.jsx(re,{type:"secondary",children:"如果给你寄一本书， 我不会寄给你诗歌， 我要给你一本关于植物，关于庄稼的， 告诉你稻子和稗子的区别， 告诉你一棵稗子提心吊胆的春天。"}),e.jsx($,{itemLayout:"horizontal",dataSource:s,renderItem:(r,l)=>e.jsx($.Item,{children:e.jsx($.Item.Meta,{avatar:r.icon,description:r.title})},l)})]}),e.jsx(z,{title:"社交",children:e.jsx($,{itemLayout:"horizontal",dataSource:a,renderItem:(r,l)=>e.jsx($.Item,{children:e.jsx($.Item.Meta,{avatar:r.icon,description:r.title})},l)})})]})}),e.jsx(A,{span:16,children:e.jsxs(d,{gap:16,vertical:!0,children:[e.jsx(z,{children:e.jsxs(d,{gap:16,vertical:!0,children:[e.jsx(De,{rows:4,placeholder:"分享你想对我说的话",maxLength:6}),e.jsx(d,{justify:"end",children:e.jsx(v,{type:"primary",children:"发布"})})]})}),e.jsx(z,{title:e.jsxs(d,{justify:"space-between",align:"center",gap:16,children:[e.jsx($,{children:e.jsx($.Item,{children:e.jsx($.Item.Meta,{avatar:e.jsx(w,{src:It,size:48}),title:"Gbeata",description:"25 Dec 2023"})},"1")}),e.jsx(v,{shape:"circle",type:"text",icon:e.jsx(xe,{})})]}),children:e.jsxs(d,{gap:16,vertical:!0,children:[e.jsx(re,{children:"我填平了山海，却发现你在云端。"}),e.jsx(We,{className:t["custom-image"],width:"100%",height:400,src:B}),e.jsxs(d,{justify:"space-between",align:"content-center",children:[e.jsxs(d,{align:"center",children:[e.jsx(v,{id:"like",size:"small",type:"text",icon:e.jsx(x,{name:"love"}),children:"3"}),e.jsxs(w.Group,{maxCount:2,maxStyle:{color:"#f56a00",backgroundColor:"#fde3cf"},children:[e.jsx(w,{src:"https://xsgames.co/randomusers/avatar.php?g=pixel&key=2"}),e.jsx(w,{src:pe,style:{backgroundColor:"#f56a00"},children:"K"}),e.jsx(w,{style:{backgroundColor:"#1677ff"},icon:e.jsx(lt,{})})]})]}),e.jsxs("div",{children:[e.jsx(v,{shape:"circle",type:"text",icon:e.jsx(ut,{})}),e.jsx(v,{shape:"circle",type:"text",icon:e.jsx(ft,{})})]})]}),i.map(r=>e.jsx(Dt,{avatar:r.avatar,time:r.time,content:r.content,user:r.user})),e.jsx(Ht,{})]})})]})})]})})},Xt=V(({token:t})=>({"user-card":{width:"100%",position:"relative",".ant-skeleton, .ant-skeleton-image":{width:"100% !important"},".ant-segmented-item-label":{lineHeight:"48px !important",minHeight:"48px !important",padding:"0 16px !important"},".profile":{verticalAlign:"-0.35em"},".ant-card-body":{padding:0,textAlign:"right"},".ant-card-cover":{minHeight:"200px",position:"relative",background:`url(${Xe})`,filter:"blur(0)",backgroundRepeat:"no-repeat",backgroundSize:"cover","&:before":{content:'""',top:0,left:0,width:"100%",height:" 100%",zIndex:1,position:"absolute",background:"rgba(22, 28, 36, 0.48)",borderRadius:`${t.borderRadiusLG}px ${t.borderRadiusLG}px 0 0`}},".user_info":{position:"absolute",display:"flex",flexDirection:"row",zIndex:2,bottom:"-24px",left:"24px",gap:"16px",".info":{display:"flex",flexDirection:"column",justifyContent:"center",color:"white"},".avatar":{width:"128px",height:"128px",borderRadius:"50%",overflow:"hidden"}}},translatex:{margin:`${t.marginSM}px 0`},content:{position:"relative"}})),{Text:Zt,Title:Ut}=X,Yt=t=>{const[s,a]=U.useState("Profile"),[i,r]=U.useState(!0),{styles:l}=Xt();return U.useEffect(()=>{setTimeout(()=>{r(!1)},1500)},[]),e.jsxs("div",{className:l.content,children:[e.jsx(z,{hoverable:!0,className:l["user-card"],cover:e.jsx(e.Fragment,{children:e.jsxs("div",{className:"user_info",children:[e.jsx("div",{className:"avatar",children:e.jsx("img",{src:Ze})}),e.jsxs("div",{className:"info",children:[e.jsx(Ut,{style:{margin:0,color:"inherit"},level:3,children:"Gbeata"}),e.jsx(Zt,{style:{color:"inherit",opacity:.7},children:"来历不明"})]})]})}),children:e.jsx(Ve,{size:"large",onChange:h=>{a(h)},value:s,options:[{label:"Profile",value:"Profile",icon:e.jsx(x,{className:"profile",name:"profile",size:24})},{label:"Followers",value:"Followers",icon:e.jsx(x,{className:"profile",name:"followers",size:24})},{label:"Friends",value:"Friends",icon:e.jsx(x,{className:"profile",name:"friends",size:24})},{label:"Gallery",value:"Gallery",icon:e.jsx(x,{className:"profile",name:"gallery",size:24})}]})}),e.jsx(W,{className:l.translatex,direction:"left",run:s==="Profile",delay:100,children:e.jsx(Vt,{})}),e.jsx(W,{className:l.translatex,direction:"left",run:s==="Gallery",delay:100,children:e.jsx(Tt,{})}),e.jsx(W,{className:l.translatex,direction:"left",run:s==="Followers",delay:100,children:e.jsx(Et,{})}),e.jsx(W,{className:l.translatex,direction:"left",run:s==="Friends",delay:100,children:e.jsx(Lt,{})})]})},Qt=()=>(console.log(""),e.jsx(Yt,{}));export{Qt as default};
