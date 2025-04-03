"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9234],{49234:(e,a,t)=>{t.d(a,{default:()=>x});var o=t(12115),c=t(43463),l=t(7123),r=t(17280),n=t(12983),i=t(95155);let s=(0,n.A)((0,i.jsx)("path",{d:"M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"}),"Cancel");var p=t(59328),d=t(37410),v=t(89679),m=t(89142),u=t(98330),g=t(31628),b=t(12567),y=t(81045),h=t(37157);function C(e){return(0,h.Ay)("MuiChip",e)}let f=(0,y.A)("MuiChip",["root","sizeSmall","sizeMedium","colorDefault","colorError","colorInfo","colorPrimary","colorSecondary","colorSuccess","colorWarning","disabled","clickable","clickableColorPrimary","clickableColorSecondary","deletable","deletableColorPrimary","deletableColorSecondary","outlined","filled","outlinedPrimary","outlinedSecondary","filledPrimary","filledSecondary","avatar","avatarSmall","avatarMedium","avatarColorPrimary","avatarColorSecondary","icon","iconSmall","iconMedium","iconColorPrimary","iconColorSecondary","label","labelSmall","labelMedium","deleteIcon","deleteIconSmall","deleteIconMedium","deleteIconColorPrimary","deleteIconColorSecondary","deleteIconOutlinedColorPrimary","deleteIconOutlinedColorSecondary","deleteIconFilledColorPrimary","deleteIconFilledColorSecondary","focusVisible"]),A=e=>{let{classes:a,disabled:t,size:o,color:c,iconColor:r,onDelete:n,clickable:i,variant:s}=e,p={root:["root",s,t&&"disabled","size".concat((0,d.A)(o)),"color".concat((0,d.A)(c)),i&&"clickable",i&&"clickableColor".concat((0,d.A)(c)),n&&"deletable",n&&"deletableColor".concat((0,d.A)(c)),"".concat(s).concat((0,d.A)(c))],label:["label","label".concat((0,d.A)(o))],avatar:["avatar","avatar".concat((0,d.A)(o)),"avatarColor".concat((0,d.A)(c))],icon:["icon","icon".concat((0,d.A)(o)),"iconColor".concat((0,d.A)(r))],deleteIcon:["deleteIcon","deleteIcon".concat((0,d.A)(o)),"deleteIconColor".concat((0,d.A)(c)),"deleteIcon".concat((0,d.A)(s),"Color").concat((0,d.A)(c))]};return(0,l.A)(p,C,a)},k=(0,m.Ay)("div",{name:"MuiChip",slot:"Root",overridesResolver:(e,a)=>{let{ownerState:t}=e,{color:o,iconColor:c,clickable:l,onDelete:r,size:n,variant:i}=t;return[{["& .".concat(f.avatar)]:a.avatar},{["& .".concat(f.avatar)]:a["avatar".concat((0,d.A)(n))]},{["& .".concat(f.avatar)]:a["avatarColor".concat((0,d.A)(o))]},{["& .".concat(f.icon)]:a.icon},{["& .".concat(f.icon)]:a["icon".concat((0,d.A)(n))]},{["& .".concat(f.icon)]:a["iconColor".concat((0,d.A)(c))]},{["& .".concat(f.deleteIcon)]:a.deleteIcon},{["& .".concat(f.deleteIcon)]:a["deleteIcon".concat((0,d.A)(n))]},{["& .".concat(f.deleteIcon)]:a["deleteIconColor".concat((0,d.A)(o))]},{["& .".concat(f.deleteIcon)]:a["deleteIcon".concat((0,d.A)(i),"Color").concat((0,d.A)(o))]},a.root,a["size".concat((0,d.A)(n))],a["color".concat((0,d.A)(o))],l&&a.clickable,l&&"default"!==o&&a["clickableColor".concat((0,d.A)(o),")")],r&&a.deletable,r&&"default"!==o&&a["deletableColor".concat((0,d.A)(o))],a[i],a["".concat(i).concat((0,d.A)(o))]]}})((0,u.A)(e=>{let{theme:a}=e,t="light"===a.palette.mode?a.palette.grey[700]:a.palette.grey[300];return{maxWidth:"100%",fontFamily:a.typography.fontFamily,fontSize:a.typography.pxToRem(13),display:"inline-flex",alignItems:"center",justifyContent:"center",height:32,color:(a.vars||a).palette.text.primary,backgroundColor:(a.vars||a).palette.action.selected,borderRadius:16,whiteSpace:"nowrap",transition:a.transitions.create(["background-color","box-shadow"]),cursor:"unset",outline:0,textDecoration:"none",border:0,padding:0,verticalAlign:"middle",boxSizing:"border-box",["&.".concat(f.disabled)]:{opacity:(a.vars||a).palette.action.disabledOpacity,pointerEvents:"none"},["& .".concat(f.avatar)]:{marginLeft:5,marginRight:-6,width:24,height:24,color:a.vars?a.vars.palette.Chip.defaultAvatarColor:t,fontSize:a.typography.pxToRem(12)},["& .".concat(f.avatarColorPrimary)]:{color:(a.vars||a).palette.primary.contrastText,backgroundColor:(a.vars||a).palette.primary.dark},["& .".concat(f.avatarColorSecondary)]:{color:(a.vars||a).palette.secondary.contrastText,backgroundColor:(a.vars||a).palette.secondary.dark},["& .".concat(f.avatarSmall)]:{marginLeft:4,marginRight:-4,width:18,height:18,fontSize:a.typography.pxToRem(10)},["& .".concat(f.icon)]:{marginLeft:5,marginRight:-6},["& .".concat(f.deleteIcon)]:{WebkitTapHighlightColor:"transparent",color:a.vars?"rgba(".concat(a.vars.palette.text.primaryChannel," / 0.26)"):(0,r.X4)(a.palette.text.primary,.26),fontSize:22,cursor:"pointer",margin:"0 5px 0 -6px","&:hover":{color:a.vars?"rgba(".concat(a.vars.palette.text.primaryChannel," / 0.4)"):(0,r.X4)(a.palette.text.primary,.4)}},variants:[{props:{size:"small"},style:{height:24,["& .".concat(f.icon)]:{fontSize:18,marginLeft:4,marginRight:-4},["& .".concat(f.deleteIcon)]:{fontSize:16,marginRight:4,marginLeft:-4}}},...Object.entries(a.palette).filter((0,g.A)(["contrastText"])).map(e=>{let[t]=e;return{props:{color:t},style:{backgroundColor:(a.vars||a).palette[t].main,color:(a.vars||a).palette[t].contrastText,["& .".concat(f.deleteIcon)]:{color:a.vars?"rgba(".concat(a.vars.palette[t].contrastTextChannel," / 0.7)"):(0,r.X4)(a.palette[t].contrastText,.7),"&:hover, &:active":{color:(a.vars||a).palette[t].contrastText}}}}}),{props:e=>e.iconColor===e.color,style:{["& .".concat(f.icon)]:{color:a.vars?a.vars.palette.Chip.defaultIconColor:t}}},{props:e=>e.iconColor===e.color&&"default"!==e.color,style:{["& .".concat(f.icon)]:{color:"inherit"}}},{props:{onDelete:!0},style:{["&.".concat(f.focusVisible)]:{backgroundColor:a.vars?"rgba(".concat(a.vars.palette.action.selectedChannel," / calc(").concat(a.vars.palette.action.selectedOpacity," + ").concat(a.vars.palette.action.focusOpacity,"))"):(0,r.X4)(a.palette.action.selected,a.palette.action.selectedOpacity+a.palette.action.focusOpacity)}}},...Object.entries(a.palette).filter((0,g.A)(["dark"])).map(e=>{let[t]=e;return{props:{color:t,onDelete:!0},style:{["&.".concat(f.focusVisible)]:{background:(a.vars||a).palette[t].dark}}}}),{props:{clickable:!0},style:{userSelect:"none",WebkitTapHighlightColor:"transparent",cursor:"pointer","&:hover":{backgroundColor:a.vars?"rgba(".concat(a.vars.palette.action.selectedChannel," / calc(").concat(a.vars.palette.action.selectedOpacity," + ").concat(a.vars.palette.action.hoverOpacity,"))"):(0,r.X4)(a.palette.action.selected,a.palette.action.selectedOpacity+a.palette.action.hoverOpacity)},["&.".concat(f.focusVisible)]:{backgroundColor:a.vars?"rgba(".concat(a.vars.palette.action.selectedChannel," / calc(").concat(a.vars.palette.action.selectedOpacity," + ").concat(a.vars.palette.action.focusOpacity,"))"):(0,r.X4)(a.palette.action.selected,a.palette.action.selectedOpacity+a.palette.action.focusOpacity)},"&:active":{boxShadow:(a.vars||a).shadows[1]}}},...Object.entries(a.palette).filter((0,g.A)(["dark"])).map(e=>{let[t]=e;return{props:{color:t,clickable:!0},style:{["&:hover, &.".concat(f.focusVisible)]:{backgroundColor:(a.vars||a).palette[t].dark}}}}),{props:{variant:"outlined"},style:{backgroundColor:"transparent",border:a.vars?"1px solid ".concat(a.vars.palette.Chip.defaultBorder):"1px solid ".concat("light"===a.palette.mode?a.palette.grey[400]:a.palette.grey[700]),["&.".concat(f.clickable,":hover")]:{backgroundColor:(a.vars||a).palette.action.hover},["&.".concat(f.focusVisible)]:{backgroundColor:(a.vars||a).palette.action.focus},["& .".concat(f.avatar)]:{marginLeft:4},["& .".concat(f.avatarSmall)]:{marginLeft:2},["& .".concat(f.icon)]:{marginLeft:4},["& .".concat(f.iconSmall)]:{marginLeft:2},["& .".concat(f.deleteIcon)]:{marginRight:5},["& .".concat(f.deleteIconSmall)]:{marginRight:3}}},...Object.entries(a.palette).filter((0,g.A)()).map(e=>{let[t]=e;return{props:{variant:"outlined",color:t},style:{color:(a.vars||a).palette[t].main,border:"1px solid ".concat(a.vars?"rgba(".concat(a.vars.palette[t].mainChannel," / 0.7)"):(0,r.X4)(a.palette[t].main,.7)),["&.".concat(f.clickable,":hover")]:{backgroundColor:a.vars?"rgba(".concat(a.vars.palette[t].mainChannel," / ").concat(a.vars.palette.action.hoverOpacity,")"):(0,r.X4)(a.palette[t].main,a.palette.action.hoverOpacity)},["&.".concat(f.focusVisible)]:{backgroundColor:a.vars?"rgba(".concat(a.vars.palette[t].mainChannel," / ").concat(a.vars.palette.action.focusOpacity,")"):(0,r.X4)(a.palette[t].main,a.palette.action.focusOpacity)},["& .".concat(f.deleteIcon)]:{color:a.vars?"rgba(".concat(a.vars.palette[t].mainChannel," / 0.7)"):(0,r.X4)(a.palette[t].main,.7),"&:hover, &:active":{color:(a.vars||a).palette[t].main}}}}})]}})),I=(0,m.Ay)("span",{name:"MuiChip",slot:"Label",overridesResolver:(e,a)=>{let{ownerState:t}=e,{size:o}=t;return[a.label,a["label".concat((0,d.A)(o))]]}})({overflow:"hidden",textOverflow:"ellipsis",paddingLeft:12,paddingRight:12,whiteSpace:"nowrap",variants:[{props:{variant:"outlined"},style:{paddingLeft:11,paddingRight:11}},{props:{size:"small"},style:{paddingLeft:8,paddingRight:8}},{props:{size:"small",variant:"outlined"},style:{paddingLeft:7,paddingRight:7}}]});function S(e){return"Backspace"===e.key||"Delete"===e.key}let x=o.forwardRef(function(e,a){let t=(0,b.b)({props:e,name:"MuiChip"}),{avatar:l,className:r,clickable:n,color:d="default",component:m,deleteIcon:u,disabled:g=!1,icon:y,label:h,onClick:C,onDelete:f,onKeyDown:x,onKeyUp:O,size:R="medium",variant:w="filled",tabIndex:z,skipFocusWhenDisabled:L=!1,...T}=t,V=o.useRef(null),N=(0,p.A)(V,a),P=e=>{e.stopPropagation(),f&&f(e)},E=!1!==n&&!!C||n,M=E||f?v.A:m||"div",X={...t,component:M,disabled:g,size:R,color:d,iconColor:o.isValidElement(y)&&y.props.color||d,onDelete:!!f,clickable:E,variant:w},j=A(X),D=M===v.A?{component:m||"div",focusVisibleClassName:j.focusVisible,...f&&{disableRipple:!0}}:{},F=null;f&&(F=u&&o.isValidElement(u)?o.cloneElement(u,{className:(0,c.A)(u.props.className,j.deleteIcon),onClick:P}):(0,i.jsx)(s,{className:(0,c.A)(j.deleteIcon),onClick:P}));let W=null;l&&o.isValidElement(l)&&(W=o.cloneElement(l,{className:(0,c.A)(j.avatar,l.props.className)}));let _=null;return y&&o.isValidElement(y)&&(_=o.cloneElement(y,{className:(0,c.A)(j.icon,y.props.className)})),(0,i.jsxs)(k,{as:M,className:(0,c.A)(j.root,r),disabled:!!E&&!!g||void 0,onClick:C,onKeyDown:e=>{e.currentTarget===e.target&&S(e)&&e.preventDefault(),x&&x(e)},onKeyUp:e=>{e.currentTarget===e.target&&f&&S(e)&&f(e),O&&O(e)},ref:N,tabIndex:L&&g?-1:z,ownerState:X,...D,...T,children:[W||_,(0,i.jsx)(I,{className:(0,c.A)(j.label),ownerState:X,children:h}),F]})})}}]);