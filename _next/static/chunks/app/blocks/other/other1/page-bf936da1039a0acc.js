(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3416,8739],{78430:(s,e,t)=>{Promise.resolve().then(t.bind(t,11053))},11053:(s,e,t)=>{"use strict";t.d(e,{default:()=>C});var i=t(95155),r=t(81996),n=t.n(r),a=t(67396),l=t(35761),U=t(17280),o=t(22282),d=t(34883),c=t(66656),x=t(43655),h=t(9561),p=t(10979),u=t(68998),y=t(28636),g=t(2458),f=t(57483),m=t(28907),v=t(27670),j=t(19247),w=t(35352),b=t(74054),T=t(13330),k=t(48739),A=t(61720);function C(s){let{heading:e,description:t,primaryBtn:r,sections:n}=s,C=(0,l.A)(),P=(0,j.A)();return(0,i.jsx)(f.default,{sx:{py:b.Q},children:(0,i.jsxs)(p.default,{sx:{gap:{xs:3,sm:4}},children:[(0,i.jsx)(y.P.div,{initial:{opacity:0,y:10},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.5,delay:.3},children:(0,i.jsx)(m.A,{heading:e,stackProps:{sx:{textAlign:"center"}}})}),(0,i.jsx)(x.default,{container:!0,spacing:1.5,children:n.map((s,e)=>(0,i.jsx)(x.default,{size:{xs:6,sm:4,md:4},children:(0,i.jsx)(v.U,{sx:{overflow:"hidden"},children:(0,i.jsx)(y.P.div,{whileHover:{scale:1.02},initial:{opacity:0,y:25},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.5,delay:s.animationDelay},children:(0,i.jsxs)(v.U,{sx:{height:{xs:240,sm:324,md:380},position:"relative",overflow:"hidden",WebkitTapHighlightColor:"transparent",...P&&{"&:focus-within":(0,w._)(C.palette.primary.main)}},children:[(0,i.jsx)(c.default,{href:s.link,component:a.default,"aria-label":s.title,sx:{position:"absolute",top:0,height:1,width:1,borderRadius:{xs:6,sm:8,md:10},zIndex:1}}),(0,i.jsx)(k.default,{}),(0,i.jsxs)(u.default,{sx:{position:"absolute",top:0,width:1,height:1,textAlign:"center"},children:[(0,i.jsx)(d.default,{component:"img",image:(0,T.A)(s.image),sx:{px:"14.5%",pt:"16%",pb:{xs:2,md:1},objectFit:"contain"},alt:"other sections",loading:"lazy"}),(0,i.jsx)(u.default,{sx:{"& div":{alignItems:"center",pt:.875}},children:(0,i.jsx)(A.default,{})})]}),(0,i.jsxs)(p.default,{sx:{height:177,bottom:0,width:1,position:"absolute",justifyContent:"end",textAlign:"center",gap:{xs:.25,md:.5,sm:1},p:3,background:"linear-gradient(180deg, ".concat((0,U.X4)(C.palette.grey[100],0)," 0%, ").concat(C.palette.grey[100]," 100%)")},children:[(0,i.jsx)(h.default,{variant:"h4",sx:{color:"primary.main"},children:s.title}),(0,i.jsx)(h.default,{variant:"body2",sx:{color:"text.secondary"},children:s.subTitle})]})]})})})},e))}),(0,i.jsxs)(p.default,{sx:{gap:2,alignItems:"center"},children:[(0,i.jsx)(h.default,{variant:"h6",align:"center",sx:{color:"text.secondary",width:{xs:1,sm:"80%",md:"65%"}},children:(0,i.jsx)(y.P.div,{initial:{opacity:0,y:15},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.5,delay:.3},children:t})}),(0,i.jsx)(y.P.div,{initial:{opacity:0,y:15},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.5,delay:.4},children:(0,i.jsx)(g.default,{children:(0,i.jsx)(o.default,{variant:"outlined",...r})})})]})]})})}C.propTypes={heading:n().string,description:n().string,primaryBtn:n().any,sections:n().array}},2458:(s,e,t)=>{"use strict";t.d(e,{default:()=>l});var i=t(95155),r=t(81996),n=t.n(r),a=t(28636);function l(s){let{children:e,style:t}=s;return(0,i.jsx)(a.P.div,{whileHover:{scale:1},whileTap:{scale:.95},transition:{type:"spring",stiffness:400,damping:25},tabIndex:-1,style:t,children:e})}l.propTypes={children:n().any,style:n().any}},42926:(s,e,t)=>{"use strict";t.r(e),t.d(e,{default:()=>d});var i=t(95155),r=t(81996),n=t.n(r),a=t(35761),l=t(68998),U=t(45773);let o={[U.AT.STROKE]:"/assets/svg/tabler-sprite-outline.svg",[U.AT.FILL]:"/assets/svg/tabler-sprite-fill.svg",[U.AT.CUSTOM]:"/assets/svg/sprite-custom.svg"};function d(s){let{name:e,size:t=24,type:r=U.AT.STROKE,color:n,stroke:d,twoToneColor:c}=s,x=(0,a.A)(),h=r!==U.AT.STROKE?c||x.palette.primary.light:void 0,p=r!==U.AT.FILL?n||(r===U.AT.CUSTOM?x.palette.text.primary:x.palette.primary.main):void 0,u=void 0!==d?d:r===U.AT.CUSTOM?t<=24?2.5:t<=32?2:1.5:r!==U.AT.FILL?1.5:void 0;return(0,i.jsx)(l.default,{role:"none",sx:{"& svg":{verticalAlign:"middle",display:"block",color:n||(r===U.AT.CUSTOM?"text.primary":"primary.main"),'& [data-two-tone="true"]':{color:c||x.palette.primary.light}}},children:(0,i.jsx)("svg",{className:e,width:t,height:t,...h&&{fill:h},...p&&{stroke:p},...u&&{strokeWidth:u},children:(0,i.jsx)("use",{xlinkHref:"".concat(o[r],"#").concat(e)})})})}d.propTypes={name:n().any,size:n().number,type:n().any,IconType:n().any,STROKE:n().any,color:n().any,stroke:n().any,twoToneColor:n().any}},28907:(s,e,t)=>{"use strict";t.d(e,{A:()=>U});var i=t(95155),r=t(81996),n=t.n(r),a=t(10979),l=t(9561);function U(s){let{heading:e,caption:t,stackProps:r,headingProps:n,captionProps:U}=s,{sx:o,...d}=r||{};return(0,i.jsxs)(a.default,{...d,sx:{gap:{xs:1,sm:1.5},...o},children:[(0,i.jsx)(l.default,{variant:"h2",...n,sx:{...(null==n?void 0:n.sx)&&{...n.sx}},children:e}),t&&(0,i.jsx)(l.default,{component:"p",variant:"h6",...U,sx:{color:"text.secondary",...(null==U?void 0:U.sx)&&{...U.sx}},children:t})]})}U.propTypes={heading:n().string,caption:n().string,stackProps:n().any,headingProps:n().any,captionProps:n().any}},90896:(s,e,t)=>{"use strict";t.d(e,{default:()=>c});var i=t(95155),r=t(81996),n=t.n(r),a=t(35761),l=t(17280),U=t(64665),o=t(68998),d=t(13330);function c(s){let{sx:e,children:t,overLay:r=!1,bgImage:n,...c}=s,x=(0,a.A)();return(0,i.jsx)(U.A,{role:"img",rel:"noopener noreferrer","aria-label":"graphics card",elevation:0,sx:{bgcolor:"grey.100",borderRadius:{xs:6,sm:8,md:10},...n&&{backgroundImage:"url(".concat((0,d.A)(n),")"),backgroundSize:"cover",backgroundPosition:"center"},...r&&{position:"relative","&:before":{content:"' '",position:"absolute",width:1,height:1,top:0,left:0,background:"string"==typeof r?r:(0,l.X4)(x.palette.grey[100],.75)}},...e},...c,children:r?(0,i.jsx)(o.default,{sx:{position:"relative",height:1},children:t}):t})}c.propTypes={sx:n().any,children:n().any,overLay:n().oneOfType([n().bool,n().string]),bgImage:n().any,rest:n().any}},27670:(s,e,t)=>{"use strict";t.d(e,{U:()=>i.default,s:()=>x});var i=t(90896),r=t(95155),n=t(81996),a=t.n(n),l=t(29532),U=t(10979),o=t(9561),d=t(68998),c=t(42926);function x(s){let{icon:e,title:t,content:n,iconAvatar:a,contentCard:x,titleProps:h,stackProps:p,contentProps:u,cardPadding:y}=s,g=y?{...y}:{xs:3,sm:4,md:5};return(0,r.jsx)(i.default,{sx:{height:1},children:(0,r.jsxs)(U.default,{sx:{gap:a||x?2.5:2,height:1},...p&&{...p},children:[(0,r.jsx)(d.default,{sx:{px:g,pt:g,lineHeight:0},children:a?(0,r.jsx)(l.default,{sx:{width:60,height:60,bgcolor:"boolean"==typeof a?"grey.300":a},children:(0,r.jsx)(c.default,{..."string"==typeof e?{name:e}:{...e}})}):(0,r.jsx)(d.default,{children:(0,r.jsx)(c.default,{..."string"==typeof e?{name:e}:{...e},size:40})})}),(0,r.jsx)(i.default,{sx:{p:g,height:1,...x&&{bgcolor:"boolean"==typeof x?"grey.200":x}},children:(0,r.jsxs)(U.default,{sx:{gap:{xs:1,sm:1.5}},children:[t&&(0,r.jsx)(o.default,{variant:"h4",...h&&{...h},children:t}),n&&(0,r.jsx)(o.default,{...u&&{...u},sx:{color:"text.secondary"},children:n})]})})]})})}x.propTypes={icon:a().any,title:a().any,content:a().any,iconAvatar:a().any,contentCard:a().any,titleProps:a().any,stackProps:a().any,contentProps:a().any,cardPadding:a().any}},19247:(s,e,t)=>{"use strict";t.d(e,{A:()=>r});var i=t(12115);let r=()=>{let[s,e]=(0,i.useState)(!1);return(0,i.useEffect)(()=>{let s=s=>{"Tab"===s.key&&e(!0)},t=()=>{e(!1)},i=()=>{document.removeEventListener("keydown",s),document.removeEventListener("mousedown",t)};return document.addEventListener("keydown",s),document.addEventListener("mousedown",t),()=>{i()}},[]),s}},48739:(s,e,t)=>{"use strict";t.r(e),t.d(e,{default:()=>n});var i=t(95155),r=t(35761);function n(){let s=(0,r.A)();return(0,i.jsxs)("svg",{viewBox:"0 0 368 380",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,i.jsxs)("g",{clipPath:"url(#clip0_4329_20865)",children:[(0,i.jsx)("rect",{width:"368",height:"380",fill:s.palette.grey[100]}),(0,i.jsx)("rect",{x:"-227.643",y:"-144.5",width:"260.429",height:"182",rx:"11.5",fill:s.palette.grey[200]}),(0,i.jsx)("rect",{x:"-227.643",y:"-144.5",width:"260.429",height:"182",rx:"11.5",stroke:s.palette.grey[300]}),(0,i.jsx)("rect",{x:"53.7852",y:"-144.5",width:"260.429",height:"182",rx:"11.5",fill:s.palette.grey[200]}),(0,i.jsx)("rect",{x:"53.7852",y:"-144.5",width:"260.429",height:"182",rx:"11.5",stroke:s.palette.grey[300]}),(0,i.jsx)("rect",{x:"335.215",y:"-144.5",width:"260.429",height:"182",rx:"11.5",fill:s.palette.grey[200]}),(0,i.jsx)("rect",{x:"335.215",y:"-144.5",width:"260.429",height:"182",rx:"11.5",stroke:s.palette.grey[300]}),(0,i.jsx)("rect",{x:"-227.5",y:"58.5",width:"260",height:"225",rx:"11.5",fill:s.palette.grey[200]}),(0,i.jsx)("rect",{x:"-227.5",y:"58.5",width:"260",height:"225",rx:"11.5",stroke:s.palette.grey[300]}),(0,i.jsx)("rect",{x:"335.5",y:"58.5",width:"260",height:"225",rx:"11.5",fill:s.palette.grey[200]}),(0,i.jsx)("rect",{x:"335.5",y:"58.5",width:"260",height:"225",rx:"11.5",stroke:s.palette.grey[300]})]}),(0,i.jsx)("defs",{children:(0,i.jsx)("clipPath",{id:"clip0_4329_20865",children:(0,i.jsx)("rect",{width:"368",height:"380",fill:"white"})})})]})}},61720:(s,e,t)=>{"use strict";t.r(e),t.d(e,{default:()=>U});var i=t(95155),r=t(81996),n=t.n(r),a=t(35761),l=t(10979);function U(s){let{size:e}=s,t=(0,a.A)();return(0,i.jsx)(l.default,{className:"wave",sx:{"& svg":{width:e||{xs:92,sm:122},height:10}},children:(0,i.jsx)("svg",{viewBox:"0 0 122 10",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,i.jsx)("path",{opacity:"0.4",d:"M1.46484 6.83613L4.45387 3.7103C7.74598 0.267505 13.38 0.760513 16.0241 4.72277L16.5428 5.50001C19.2423 9.54539 25.1877 9.54539 27.8873 5.5V5.5C30.5869 1.45461 36.5322 1.45461 39.2318 5.5V5.5C41.9314 9.54539 47.8768 9.54539 50.5764 5.5V5.5C53.2759 1.45461 59.2213 1.45461 61.9209 5.5V5.5C64.6205 9.54539 70.5658 9.54539 73.2654 5.5V5.5C75.965 1.45461 81.9104 1.45461 84.61 5.5V5.5C87.3096 9.54539 93.2549 9.54539 95.9545 5.5V5.5C98.6541 1.45461 104.599 1.45461 107.299 5.5V5.5C109.999 9.54539 115.944 9.54539 118.644 5.5L120.534 2.66667",stroke:t.palette.primary.main,strokeLinecap:"round"})})})}U.propTypes={size:n().number}},35352:(s,e,t)=>{"use strict";t.d(e,{_:()=>i});let i=s=>({outline:"2px solid ".concat(s),outlineOffset:2})},13330:(s,e,t)=>{"use strict";function i(s){return s}t.d(e,{A:()=>i})},74054:(s,e,t)=>{"use strict";t.d(e,{Q:()=>r});var i=t(58071);let r={xs:4,sm:5,md:6};i.sU,i.sU,i.sU,i.sU,i.sU,i.sU,i.sU,i.sU,i.sU,i.sU,i.sU,i.sU,i.sU,i.sU,i.sU,i.sU,i.sU,i.sU,i.sU,i.sU,i.sU,i.sU,i.sU,i.sU,i.sU,i.sU,i.sU,i.sU,i.sU,i.sU,i.sU,i.sU,i.sU,i.sU,i.sU,i.sU,i.sU,i.sU,i.sU,i.sU,i.sU,i.sU,i.sU,i.sU,i.sU,i.sU,i.sU,i.sU,i.sU,i.sU,i.sU,i.sU,i.sU,i.sU,i.sU,i.sU,i.sU,i.sU,i.sU,i.sU,i.sU,i.sU,i.sU,i.sU,i.sU,i.sU,i.sU,i.sU,i.sU,i.sU,i.sU,i.sU,i.sU,i.sU,i.sU,i.sU,i.sU,i.sU,i.sU,i.sU,i.sU,i.sU,i.sU,i.sU,i.sU,i.sU,i.sU,i.sU,i.sU,i.sU,i.sU,i.sU,i.sU,i.sU,i.sU,i.sU,i.sU,i.sU,i.sU,i.sU,i.sU,i.sU,i.sU,i.sU,i.sU,i.sU,i.sU,i.sU,i.sU,i.sU,i.sU,i.sU,i.sU,i.sU,i.sU,i.sU,i.sU,i.sU,i.sU,i.sU,i.sU,i.sU,i.sU,i.sU,i.sU,i.sU,i.sU,i.sU,i.sU,i.sU,i.sU,i.sU,i.sU,i.sU,i.sU,i.sU,i.sU,i.sU,i.sU,i.sU,i.sU,i.sU,i.sU,i.sU,i.sU,i.sU,i.sU,i.sU,i.sU,i.sU,i.sU,i.sU,i.sU,i.sU,i.sU,i.sU,i.sU,i.sU,i.sU,i.sU,i.sU,i.sU,i.sU,i.sU,i.sU,i.sU,i.sU,i.sU,i.sU,i.sU,i.sU,i.sU,i.sU,i.sU,i.sU,i.sU,i.sU,i.sU,i.sU,i.sU,i.sU,i.sU,i.sU,i.sU,i.sU,i.sU,i.sU,i.sU,i.sU,i.sU,i.sU,i.sU,i.sU,i.sU,i.sU,i.sU,i.sU,i.sU,i.sU,i.sU,i.sU,i.sU,i.sU,i.sU,i.sU,i.sU,i.sU,i.sU,i.sU,i.sU,i.sU,i.sU,i.sU,i.sU,i.sU,i.sU,i.sU,i.sU,i.sU,i.sU}},s=>{var e=e=>s(s.s=e);s.O(0,[6550,364,3395,8965,9679,4371,2282,4839,8636,5250,2817,8441,1517,7358],()=>e(78430)),_N_E=s.O()}]);