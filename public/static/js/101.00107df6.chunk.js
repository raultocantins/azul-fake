(this.webpackJsonpazul=this.webpackJsonpazul||[]).push([[101],{2895:function(n,e,t){"use strict";t.d(e,"a",(function(){return u})),t.d(e,"c",(function(){return f})),t.d(e,"b",(function(){return p}));var a,i,o,l,r=t(7),c=t(1),s=t(15),b=t(3),d=t(9),u=function(n){var e=n===s.k.SEND_EMAIL_CONFIRMATION||n===s.k.SEND_EMAIL_CONFIRMATION_SUCCESS||n===s.k.SEND_EMAIL_CONFIRMATION_ERROR;return Object(c.css)(a||(a=Object(r.a)(["\n  text-align: center;\n  font-family: ",";\n  min-width: 288px;\n  "," {\n    min-width: 328px;\n\n    ","\n  }\n\n  h3 {\n    margin: ",";\n    font-size: 24px;\n    line-height: 29px;\n    color: ",";\n    font-family: ",";\n    font-weight: 300;\n  }\n\n  h4 {\n    margin: 20px 0;\n    font-size: 22px;\n    line-height: 29px;\n    color: ",";\n    font-family: ",";\n    font-weight: 300;\n  }\n\n  p {\n    margin: ",";\n    font-family: ",";\n    font-size: 14px;\n    line-height: 16px;\n    color: ",";\n    white-space: pre-line;\n  }\n\n  strong {\n    font-weight: bold;\n  }\n\n  a {\n    border: 2px solid transparent;\n    border-radius: 4px;\n    color: ",";\n    display: inline-flex;\n    font-size: 16px;\n    line-height: 20px;\n    margin-bottom: 16px;\n\n    &:hover {\n      color: ",";\n    }\n\n    &:focus {\n      box-shadow: 0 0 0 2px rgba(2, 108, 182, 0.2);\n      border: 2px solid #026cb6;\n    }\n  }\n\n  img {\n    max-width: 200px;\n  }\n\n  .modal-actions {\n    padding-top: 16px;\n  }\n\n  .text-container {\n    max-height: 220px;\n    overflow: hidden;\n    overflow-y: auto;\n  }\n"])),b.a.font.family.serif,d.a.higherThan("desktop"),n===s.k.CHECKIN_SEARCH_NOT_FOUND&&Object(c.css)(i||(i=Object(r.a)(["\n      min-height: 492px;\n      display: flex;\n      align-items: center;\n      justify-content: space-evenly;\n      flex-direction: column;\n\n      div {\n        width: 100%;\n      }\n    "]))),e?"16px 0 8px 0":"16px 0",b.a.colors.brandAzul.default,b.a.font.family.serif,b.a.colors.brandAzul.dark,b.a.font.family.serif,e?"0":"16px 0 0",b.a.font.family.serif,b.a.colors.neutral.front.dark,b.a.colors.brandAzul.default,b.a.colors.brandAzul.medium)},f=Object(c.css)(o||(o=Object(r.a)(["\n  p {\n    margin: 16px 0;\n    font-size: 24px;\n    line-height: 29px;\n    color: ",";\n    font-family: ",";\n    font-weight: 300;\n  }\n"])),b.a.colors.brandAzul.default,b.a.font.family.serif),p=function(n,e){if(n)return Object(c.css)(l||(l=Object(r.a)(["\n      max-height: ","px;\n      overflow: auto;\n\n      ::-webkit-scrollbar {\n        width: 4px;\n        height: 4px;\n      }\n\n      ::-webkit-scrollbar-track {\n        background: ",";\n        border-radius: 4px;\n      }\n\n      ::-webkit-scrollbar-thumb {\n        background: ",";\n        border-radius: 4px;\n      }\n\n      ::-webkit-scrollbar-thumb:hover {\n        background: ",";\n      }\n    "])),e||278,b.a.colors.white,b.a.colors.neutral.back.light,b.a.colors.neutral.back.dark)}},2946:function(n,e,t){"use strict";t.r(e),t.d(e,"GenericModalClass",(function(){return C}));var a=t(8),i=t(13),o=t(16),l=t(17),r=t(12),c=t(1),s=t(571),b=t(1239),d=t(114),u=t(1237),f=t(0),p=t(72),m=t(43),h=t.n(m),O=t(236),j=t(19),x=t(610),g=t(46),y=t(154),v=t(2895),k=t(235),w=function(n){var e=n.isOpen,t=n.icon,a=n.title,i=n.modalId,o=n.description,l=n.subDescription,m=(n.handleClose,n.primaryButtonLabel),j=n.primaryButtonClick,w=n.primaryButtonTheme,C=n.contentLabel,A=n.closeTimeoutMS,N=n.hasPrimaryButton,I=void 0===N||N,L=n.hasSecondaryButton,S=n.secondaryButtonLabel,z=n.secondaryButtonClick,B=n.link,T=n.imageIcon,_=n.primaryButtonAriaLabel,R=n.secondaryButtonAriaLabel,M=n.secondaryButtonTheme,E=n.customRoot,D=n.messageDialog,F=void 0===D?"":D,H=n.viewAuthoredMessage,P=n.isFixedButtonOnFooter,G=n.childComponents,J=n.placeholderComponent,U=n.isInEditor,K=F&&"string"===typeof F?Object(c.jsx)("p",{dangerouslySetInnerHTML:{__html:F}}):F,q=Object(k.a)(o),Q=Object(k.a)(a),V=Object(f.useRef)(null),W=Object(f.useRef)(null),X=Object(f.useRef)(null),Y=Object(f.useState)(0),Z=Object(r.a)(Y,2),$=Z[0],nn=Z[1];return Object(f.useEffect)((function(){var n,e,t;if(P){var a=(null===V||void 0===V||null===(n=V.current)||void 0===n?void 0:n.offsetHeight)||0,i=(null===W||void 0===W||null===(e=W.current)||void 0===e?void 0:e.offsetHeight)||0,o=(null===X||void 0===X||null===(t=X.current)||void 0===t?void 0:t.offsetHeight)||0;nn(a-i-o)}}),[V,W,X]),Object(c.jsx)(x.a,{isOpen:e,closeTimeoutMS:null!==A&&void 0!==A?A:500,handleClose:function(){},contentLabel:C,className:"generic-modal",id:i,overlayClassName:"generic-modal-overlay",customRoot:E,css:Object(u.c)(!!P)},Object(c.jsx)("div",{className:"modal-content",css:Object(v.a)(i),ref:V},Object(c.jsx)("div",{className:"modal-header",ref:W},t&&Object(c.jsx)("div",{className:"modal-icon"},T?Object(c.jsx)(p.LazyLoadImage,{src:t,alt:h.a.sanitize(Q,{FORBID_TAGS:["p","b","i","br"]})}):Object(c.jsx)(y.b,{name:t,alt:h.a.sanitize(Q,{FORBID_TAGS:["p","b","i","br"]})})),Object(c.jsx)(b.a,{tag:"h3",text:Q,allowedTags:["b","i","br"]})),G,!!U&&J,H&&o&&Object(c.jsx)(d.a,{text:q,customStyle:Object(v.b)(P,$)}),K,l&&Object(c.jsx)("p",null,l),B&&B.linkHref&&B.linkLabel&&Object(c.jsx)(O.a,{ariaLabel:null===B||void 0===B?void 0:B.linkAlt,link:B.linkHref,target:null===B||void 0===B?void 0:B.linkTarget},B.linkLabel),Object(c.jsx)("div",{className:"modal-actions",ref:X},I&&Object(c.jsx)(g.a,{el:"button",type:"button",label:m,isPrimary:Object(s.c)(w),isSecondary:Object(s.d)(w),themeMobile:w,isOutlineDefault:Object(s.a)(w),isOutlinePrimary:Object(s.b)(w),isBlocked:!0,handleClick:j,ariaLabel:_}),L&&Object(c.jsx)(g.a,{el:"button",type:"button",label:S,isPrimary:Object(s.c)(M),isSecondary:Object(s.d)(M),themeMobile:M,isOutlineDefault:Object(s.a)(M),isOutlinePrimary:Object(s.b)(M),isBlocked:!0,handleClick:z,ariaLabel:R,styles:{marginTop:"8px"}}))))};e.default=w;var C=function(n){Object(o.a)(t,n);var e=Object(l.a)(t);function t(){return Object(a.a)(this,t),e.apply(this,arguments)}return Object(i.a)(t,[{key:"render",value:function(){return Object(c.jsx)(w,Object.assign({},this.props,{childComponents:this.childComponents,placeholderComponent:this.placeholderComponent}))}}]),t}(j.Container)}}]);
//# sourceMappingURL=101.00107df6.chunk.js.map