"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2147],{22147:(e,t,r)=>{r.d(t,{default:()=>T});var i=r(95155),o=r(81996),n=r.n(o),a=r(12115),s=r(67396),d=r(35761),l=r(90662),c=r(65330),p=r(28222),u=r(22282),x=r(10979),y=r(9561),m=r(28636),h=r(91151),f=r(2458),g=r(57483),j=r(4918),b=r(41983),v=r(58546),w=r(60391),A=r(42926);function k(e){let{answer:t}=e,r=(0,d.A)(),o={white:r.palette.background.default,primary:r.palette.grey[100]};return"object"!=typeof t?(0,i.jsx)(y.default,{sx:{color:"text.secondary"},children:t}):"list"===t.type?(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(y.default,{sx:{color:"text.secondary",mb:{xs:2,md:2.5}},children:t.content}),(0,i.jsx)(j.A,{disablePadding:!0,sx:{"& .MuiListItem-root:first-of-type":{pt:0},"& .MuiListItem-root:last-of-type":{pb:0}},children:t.data.map((e,r)=>(0,i.jsxs)(b.Ay,{sx:{px:0,py:{xs:.75,md:1}},children:[(0,i.jsx)(v.A,{sx:{minWidth:34,height:24},children:(0,i.jsx)(x.default,{sx:{justifyContent:"center",alignItems:"center",width:24,height:24,borderRadius:"50%",bgcolor:t.color?o[t.color]:"transparent"},children:(0,i.jsx)(A.default,{name:"tabler-check",color:"primary.main",size:16})})}),(0,i.jsx)(w.A,{primary:e.primary,primaryTypographyProps:{color:"text.secondary"},sx:{m:0}})]},"123"+r))})]}):void 0}k.propTypes={answer:n().oneOfType([n().any,n().string])};var C=r(28907),I=r(19247),L=r(35352),M=r(74054);function T(e){let{heading:t,caption:r,defaultExpanded:o,faqList:n,getInTouch:j,categories:b,activeCategory:v}=e,w=(0,d.A)(),T=(0,I.A)(),[E,R]=(0,a.useState)(o||!1),[S,P]=(0,a.useState)(v||""),[_,B]=(0,a.useState)(v?n.filter(e=>e.category===v):n),V={xs:4,sm:6},W={xs:4*V.xs,sm:4*V.sm},z={xs:2,sm:3},q={color:"text.primary"},H=e=>(t,r)=>R(!!r&&e);return(0,i.jsx)(g.default,{sx:{py:M.Q},children:(0,i.jsxs)(x.default,{sx:{gap:{xs:3,sm:4}},children:[(0,i.jsx)(m.P.div,{initial:{opacity:0,y:10},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.5,delay:.4},children:(0,i.jsxs)(x.default,{direction:{sm:"row"},sx:{gap:4,justifyContent:"space-between",alignItems:{xs:"flex-start",sm:"end"}},children:[(0,i.jsx)(C.A,{heading:t,caption:r}),(0,i.jsx)(f.default,{children:(0,i.jsx)(u.default,{variant:"contained",size:"large",...j.link,...j.link&&j.link.href&&{component:s.default},sx:{minWidth:215}})})]})}),(0,i.jsxs)(x.default,{sx:{gap:2},children:[(0,i.jsx)(m.P.div,{initial:{opacity:0,y:10},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.5,delay:.4},children:(0,i.jsx)(x.default,{sx:{"& .slick-slide":{" > div":{px:{xs:.5,md:.75}}}},children:(0,i.jsxs)(h.A,{arrows:!1,dots:!1,infinite:!1,speed:500,swipeToSlide:!0,initialSlide:0,variableWidth:!0,children:[(0,i.jsx)(u.default,{sx:{minHeight:{xs:40,sm:48},color:"text.primary",borderColor:"divider",bgcolor:""===S?"grey.100":"inherit","&.MuiButton-root:hover":{bgcolor:"grey.100",borderColor:"divider"}},variant:"outlined",onClick:()=>{P(""),B(n)},children:"All"}),b.map((e,t)=>(0,i.jsx)(u.default,{sx:{minHeight:{xs:40,sm:48},color:"text.primary",borderColor:"divider",bgcolor:S===e?"grey.100":"inherit","&.MuiButton-root:hover":{bgcolor:"grey.100",borderColor:"divider"}},variant:"outlined",onClick:()=>{P(e),B(n.filter(t=>t.category===e))},children:e},t))]})})}),(0,i.jsx)(x.default,{sx:{gap:1.5,"& .MuiAccordion-root:first-of-type":{borderTopLeftRadius:W,borderTopRightRadius:W},"& .MuiAccordion-root:last-of-type":{borderBottomLeftRadius:W,borderBottomRightRadius:W}},children:_.map((e,t)=>(0,i.jsx)(m.P.div,{initial:{y:20,opacity:0},whileInView:{y:0,opacity:1},viewport:{once:!0},transition:{duration:.2,delay:.3},children:(0,i.jsxs)(l.A,{expanded:E==="panel".concat(t),onChange:H("panel".concat(t)),sx:{borderRadius:V,backgroundColor:"grey.100",...T&&{"&:focus-within":(0,L._)(w.palette.primary.main)}},children:[(0,i.jsx)(p.A,{expandIcon:(0,i.jsx)(A.default,{name:E==="panel".concat(t)?"tabler-minus":"tabler-plus",...q,size:20}),sx:{p:z,"& .MuiAccordionSummary-expandIconWrapper":{color:"text.primary"},"& .MuiAccordionSummary-content":{my:0},"&.Mui-focusVisible":{bgcolor:"transparent"},"&:hover, &:hover svg":{color:"primary.dark"}},children:(0,i.jsx)(y.default,{variant:"h4",children:e.question})}),(0,i.jsx)(c.A,{sx:{px:z,pt:0,pb:z},children:(0,i.jsx)(k,{answer:e.answer})},t)]},t)},t))})]})]})})}T.propTypes={heading:n().any,caption:n().any,defaultExpanded:n().any,faqList:n().any,getInTouch:n().any,categories:n().array,activeCategory:n().string}},19247:(e,t,r)=>{r.d(t,{A:()=>o});var i=r(12115);let o=()=>{let[e,t]=(0,i.useState)(!1);return(0,i.useEffect)(()=>{let e=e=>{"Tab"===e.key&&t(!0)},r=()=>{t(!1)},i=()=>{document.removeEventListener("keydown",e),document.removeEventListener("mousedown",r)};return document.addEventListener("keydown",e),document.addEventListener("mousedown",r),()=>{i()}},[]),e}}}]);