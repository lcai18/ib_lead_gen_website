"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5176],{84295:(s,e,t)=>{t.d(e,{default:()=>g});var i=t(95155),o=t(12115),n=t(2241),a=t(43655),U=t(4918),r=t(36017),l=t(60391),d=t(10979),c=t(9561),u=t(57483),p=t(74054);let m=s=>Math.max(0,s),y=(s,e,t)=>s>=e&&s<=t,h=[{id:"acceptance-of-terms",heading:"Acceptance of Terms",caption:"By accessing and using this website, you agree to be bound by these Terms and Conditions of Use. If you do not agree with any part of these terms, you must not use the website. shares information about you when you use our website or services. By accessing or using our website, you consent to the practices described in this policy."},{id:"changes-to-terms",heading:"Changes to Terms",caption:"We reserve the right to modify or replace these terms at our sole discretion. It is your responsibility to check these terms periodically for changes. Your continued use of the website after the posting of any changes constitutes acceptance of those changes."},{id:"user-conduct",heading:"User Conduct",caption:"You agree to use this website only for lawful purposes and in a manner consistent with all applicable local, national, and international laws and regulations."},{id:"intellectual-property",heading:"Intellectual Property",caption:"All content on this website, including but not limited to text, graphics, logos, images, audio clips, video clips, digital downloads, and data compilations, is the property of [Your Company Name] or its content suppliers and protected by international copyright laws."},{id:"privacy-policy",heading:"Privacy Policy",caption:"We do not sell, trade, or otherwise transfer your personal information to third parties. We may share information with trusted service providers who assist us in operating our website, conducting our business, or servicing you."},{id:"user-generated-content",heading:"User-Generated Content",caption:"If you submit any material to this website, you grant [Your Company Name] a perpetual, royalty-free, worldwide license to use, reproduce, modify, adapt, publish, translate, create derivative works from, distribute, and display such material."},{id:"limitation-of-liability",heading:"Limitation of Liability",caption:"In no event shall [Your Company Name] or its affiliates be liable for any direct, indirect, incidental, special, or consequential damages resulting from the use or inability to use this website."},{id:"indemnity",heading:"Indemnity",caption:"You agree to indemnify and hold harmless [Your Company Name] and its affiliates from any claims, actions, demands, damages, liabilities, costs, or expenses, including reasonable attorneys' fees, arising out of or related to your use of the website or any violation of these terms."},{id:"governing-law",heading:"Governing Law",caption:"These terms are governed by and construed in accordance with the laws of [Your Country/State], without regard to its conflict of law principles."}];function g(){let s=function(s){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,[t,i]=(0,o.useState)("");return(0,o.useEffect)(()=>{let t=()=>{let t=window.scrollY,o=s.map(s=>{let i=document.getElementById(s);if(!i)return{id:s,top:-1,bottom:-1};let o=i.getBoundingClientRect();return{id:s,top:m(o.top+t-e),bottom:m(o.bottom+t-e)}}).find(s=>{let{top:e,bottom:i}=s;return y(t,e,i)});i((null==o?void 0:o.id)||"")};return window.addEventListener("scroll",t),window.addEventListener("resize",t),t(),()=>{window.removeEventListener("scroll",t),window.removeEventListener("resize",t)}},[s,e]),t}(h.map(s=>s.id),60),[e,t]=(0,o.useState)(s);return(0,o.useEffect)(()=>{s&&t(s)},[s]),(0,i.jsx)(u.default,{sx:{pb:p.Q},children:(0,i.jsxs)(a.default,{container:!0,spacing:{xs:2,md:3},children:[(0,i.jsxs)(a.default,{size:{xs:12,sm:4,md:3},children:[(0,i.jsx)(U.A,{component:"div",sx:{position:"sticky",top:20},disablePadding:!0,children:h.map((s,o)=>(0,i.jsx)(r.A,{href:"#".concat(s.id),sx:{py:1.25,px:1.5,borderRadius:3,mb:.75,...e===s.id&&{color:"primary.main",bgcolor:"grey.100"},"&:hover":{bgcolor:"grey.50"}},onClick:()=>t(s.id),children:(0,i.jsx)(l.A,{primary:s.heading,primaryTypographyProps:{variant:"subtitle1"},sx:{my:0}})},o))}),(0,i.jsx)(n.A,{sx:{display:{xs:"block",sm:"none"}}})]}),(0,i.jsx)(a.default,{size:{xs:12,sm:8,md:9},children:h.map((s,e)=>(0,i.jsxs)(d.default,{id:s.id,sx:{py:{xs:1,sm:1.5,md:3},px:{md:3},gap:1,"&:first-of-type":{pt:{sm:0}}},children:[(0,i.jsx)(c.default,{variant:"h4",children:s.heading}),(0,i.jsx)(c.default,{variant:"body1",sx:{color:"text.secondary"},children:s.caption})]},e))})]})})}},42926:(s,e,t)=>{t.r(e),t.d(e,{default:()=>d});var i=t(95155),o=t(81996),n=t.n(o),a=t(35761),U=t(68998),r=t(45773);let l={[r.AT.STROKE]:"/assets/svg/tabler-sprite-outline.svg",[r.AT.FILL]:"/assets/svg/tabler-sprite-fill.svg",[r.AT.CUSTOM]:"/assets/svg/sprite-custom.svg"};function d(s){let{name:e,size:t=24,type:o=r.AT.STROKE,color:n,stroke:d,twoToneColor:c}=s,u=(0,a.A)(),p=o!==r.AT.STROKE?c||u.palette.primary.light:void 0,m=o!==r.AT.FILL?n||(o===r.AT.CUSTOM?u.palette.text.primary:u.palette.primary.main):void 0,y=void 0!==d?d:o===r.AT.CUSTOM?t<=24?2.5:t<=32?2:1.5:o!==r.AT.FILL?1.5:void 0;return(0,i.jsx)(U.default,{role:"none",sx:{"& svg":{verticalAlign:"middle",display:"block",color:n||(o===r.AT.CUSTOM?"text.primary":"primary.main"),'& [data-two-tone="true"]':{color:c||u.palette.primary.light}}},children:(0,i.jsx)("svg",{className:e,width:t,height:t,...p&&{fill:p},...m&&{stroke:m},...y&&{strokeWidth:y},children:(0,i.jsx)("use",{xlinkHref:"".concat(l[o],"#").concat(e)})})})}d.propTypes={name:n().any,size:n().number,type:n().any,IconType:n().any,STROKE:n().any,color:n().any,stroke:n().any,twoToneColor:n().any}},74054:(s,e,t)=>{t.d(e,{Q:()=>o});var i=t(58071);let o={xs:4,sm:5,md:6};i.sU,i.sU,i.sU,i.sU,i.sU,i.sU,i.sU,i.sU,i.sU,i.sU,i.sU,i.sU,i.sU,i.sU,i.sU,i.sU,i.sU,i.sU,i.sU,i.sU,i.sU,i.sU,i.sU,i.sU,i.sU,i.sU,i.sU,i.sU,i.sU,i.sU,i.sU,i.sU,i.sU,i.sU,i.sU,i.sU,i.sU,i.sU,i.sU,i.sU,i.sU,i.sU,i.sU,i.sU,i.sU,i.sU,i.sU,i.sU,i.sU,i.sU,i.sU,i.sU,i.sU,i.sU,i.sU,i.sU,i.sU,i.sU,i.sU,i.sU,i.sU,i.sU,i.sU,i.sU,i.sU,i.sU,i.sU,i.sU,i.sU,i.sU,i.sU,i.sU,i.sU,i.sU,i.sU,i.sU,i.sU,i.sU,i.sU,i.sU,i.sU,i.sU,i.sU,i.sU,i.sU,i.sU,i.sU,i.sU,i.sU,i.sU,i.sU,i.sU,i.sU,i.sU,i.sU,i.sU,i.sU,i.sU,i.sU,i.sU,i.sU,i.sU,i.sU,i.sU,i.sU,i.sU,i.sU,i.sU,i.sU,i.sU,i.sU,i.sU,i.sU,i.sU,i.sU,i.sU,i.sU,i.sU,i.sU,i.sU,i.sU,i.sU,i.sU,i.sU,i.sU,i.sU,i.sU,i.sU,i.sU,i.sU,i.sU,i.sU,i.sU,i.sU,i.sU,i.sU,i.sU,i.sU,i.sU,i.sU,i.sU,i.sU,i.sU,i.sU,i.sU,i.sU,i.sU,i.sU,i.sU,i.sU,i.sU,i.sU,i.sU,i.sU,i.sU,i.sU,i.sU,i.sU,i.sU,i.sU,i.sU,i.sU,i.sU,i.sU,i.sU,i.sU,i.sU,i.sU,i.sU,i.sU,i.sU,i.sU,i.sU,i.sU,i.sU,i.sU,i.sU,i.sU,i.sU,i.sU,i.sU,i.sU,i.sU,i.sU,i.sU,i.sU,i.sU,i.sU,i.sU,i.sU,i.sU,i.sU,i.sU,i.sU,i.sU,i.sU,i.sU,i.sU,i.sU,i.sU,i.sU,i.sU,i.sU,i.sU,i.sU,i.sU,i.sU,i.sU,i.sU,i.sU,i.sU,i.sU,i.sU,i.sU,i.sU,i.sU,i.sU,i.sU,i.sU,i.sU}}]);