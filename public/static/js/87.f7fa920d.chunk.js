(this.webpackJsonpazul=this.webpackJsonpazul||[]).push([[87],{2895:function(n,e,t){"use strict";t.d(e,"a",(function(){return b})),t.d(e,"c",(function(){return p})),t.d(e,"b",(function(){return f}));var o,a,i,r,c=t(7),l=t(1),s=t(15),d=t(3),u=t(9),b=function(n){var e=n===s.k.SEND_EMAIL_CONFIRMATION||n===s.k.SEND_EMAIL_CONFIRMATION_SUCCESS||n===s.k.SEND_EMAIL_CONFIRMATION_ERROR;return Object(l.css)(o||(o=Object(c.a)(["\n  text-align: center;\n  font-family: ",";\n  min-width: 288px;\n  "," {\n    min-width: 328px;\n\n    ","\n  }\n\n  h3 {\n    margin: ",";\n    font-size: 24px;\n    line-height: 29px;\n    color: ",";\n    font-family: ",";\n    font-weight: 300;\n  }\n\n  h4 {\n    margin: 20px 0;\n    font-size: 22px;\n    line-height: 29px;\n    color: ",";\n    font-family: ",";\n    font-weight: 300;\n  }\n\n  p {\n    margin: ",";\n    font-family: ",";\n    font-size: 14px;\n    line-height: 16px;\n    color: ",";\n    white-space: pre-line;\n  }\n\n  strong {\n    font-weight: bold;\n  }\n\n  a {\n    border: 2px solid transparent;\n    border-radius: 4px;\n    color: ",";\n    display: inline-flex;\n    font-size: 16px;\n    line-height: 20px;\n    margin-bottom: 16px;\n\n    &:hover {\n      color: ",";\n    }\n\n    &:focus {\n      box-shadow: 0 0 0 2px rgba(2, 108, 182, 0.2);\n      border: 2px solid #026cb6;\n    }\n  }\n\n  img {\n    max-width: 200px;\n  }\n\n  .modal-actions {\n    padding-top: 16px;\n  }\n\n  .text-container {\n    max-height: 220px;\n    overflow: hidden;\n    overflow-y: auto;\n  }\n"])),d.a.font.family.serif,u.a.higherThan("desktop"),n===s.k.CHECKIN_SEARCH_NOT_FOUND&&Object(l.css)(a||(a=Object(c.a)(["\n      min-height: 492px;\n      display: flex;\n      align-items: center;\n      justify-content: space-evenly;\n      flex-direction: column;\n\n      div {\n        width: 100%;\n      }\n    "]))),e?"16px 0 8px 0":"16px 0",d.a.colors.brandAzul.default,d.a.font.family.serif,d.a.colors.brandAzul.dark,d.a.font.family.serif,e?"0":"16px 0 0",d.a.font.family.serif,d.a.colors.neutral.front.dark,d.a.colors.brandAzul.default,d.a.colors.brandAzul.medium)},p=Object(l.css)(i||(i=Object(c.a)(["\n  p {\n    margin: 16px 0;\n    font-size: 24px;\n    line-height: 29px;\n    color: ",";\n    font-family: ",";\n    font-weight: 300;\n  }\n"])),d.a.colors.brandAzul.default,d.a.font.family.serif),f=function(n,e){if(n)return Object(l.css)(r||(r=Object(c.a)(["\n      max-height: ","px;\n      overflow: auto;\n\n      ::-webkit-scrollbar {\n        width: 4px;\n        height: 4px;\n      }\n\n      ::-webkit-scrollbar-track {\n        background: ",";\n        border-radius: 4px;\n      }\n\n      ::-webkit-scrollbar-thumb {\n        background: ",";\n        border-radius: 4px;\n      }\n\n      ::-webkit-scrollbar-thumb:hover {\n        background: ",";\n      }\n    "])),e||278,d.a.colors.white,d.a.colors.neutral.back.light,d.a.colors.neutral.back.dark)}},2896:function(n,e,t){"use strict";t.d(e,"f",(function(){return p})),t.d(e,"c",(function(){return f})),t.d(e,"e",(function(){return m})),t.d(e,"a",(function(){return h})),t.d(e,"b",(function(){return j})),t.d(e,"d",(function(){return x})),t.d(e,"g",(function(){return g}));var o,a,i,r,c,l,s,d=t(7),u=t(1),b=t(3),p=function(n){return Object(u.css)(o||(o=Object(d.a)(["\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n\n  > div {\n    border-top: ",";\n\n    &:last-child {\n      border-bottom: ",";\n    }\n  }\n"])),n?"1px solid #c0c0c0":"none",n?"1px solid #c0c0c0":"none")},f=Object(u.css)(a||(a=Object(d.a)(["\n  width: 100%;\n  background: ",";\n  box-shadow: inset 0px 6px 16px rgb(0 0 0 / 8%);\n"])),b.a.colors.white),m=function(n){return Object(u.css)(i||(i=Object(d.a)(["\n  box-shadow: ",";\n  background: #FFFFFF;\n  display: flex;\n  width: 100%;\n  justify-content: space-between;\n  align-items: center;\n  padding: 19px 16px;\n"])),n?"0px 12px 12px rgba(0, 0, 0, 0.08)":"none")},h=function(){return Object(u.css)(r||(r=Object(d.a)(["\n  display: flex;\n  width: 100%;\n  justify-content: space-between;\n  flex-direction: column;\n  align-items: center;\n  background: #FFFFFF;\n  border: none;\n  cursor: pointer;\n  position: relative;\n  z-index: ",';\n\n  .heading-container-text {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n\n    svg {\n      margin-right: 8px;\n    }\n  }\n\n  .accordion__button {\n    width: 100%;\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n\n    & .title-wrapper > svg {\n      transition: transform .3s ease-in;\n    }\n\n    &[aria-expanded="true"] {\n      & .title-wrapper > svg {\n        transform: rotate(180deg);\n        transition: transform .2s ease-in;\n      }\n    }\n  }\n'])),b.a.layout.zIndexes.accordion)},j=function(){return Object(u.css)(c||(c=Object(d.a)(["\n  animation: fadeIn .3s ease-in;\n\n  @keyframes fadeIn {\n    0% {\n      opacity: 0;\n    }\n    100% {\n      opacity: 1;\n    }\n  }\n"])))},x=function(n){return Object(u.css)(l||(l=Object(d.a)(["\n  display: flex;\n  padding: 4px 8px;\n  background: ",";\n  border-radius: 4px;\n  margin-right: 22px;\n  font-size: 12px;\n  font-weight: 700;\n  color: ",";\n"])),n?"#EBEBEB":"rgba(0, 100, 80, 0.08)",n?"#606060":"#006450")},g=function(){return Object(u.css)(s||(s=Object(d.a)(["\n  display: flex;\n  align-items: center;\n"])))}},2903:function(n,e,t){"use strict";var o=t(1),a=t(2896),i=t(410);e.a=function(n){var e=n.expandedItem,t=n.hasBorder,r=void 0!==t&&t;return Object(o.jsx)(i.a,{preExpanded:e,allowZeroExpanded:!0,allowMultipleExpanded:!0,css:Object(a.f)(r)},n.children)}},2904:function(n,e,t){"use strict";var o=t(1),a=t(410),i=t(2896);e.a=function(n){var e=n.Title,t=n.id,r=n.children,c=n.TitleCSS,l=void 0===c?function(){return null}:c;return Object(o.jsx)(a.b,{uuid:t,css:i.c},Object(o.jsx)(a.d,{css:i.a},Object(o.jsx)(a.c,null,Object(o.jsx)(a.f,null,(function(n){var t=n.expanded,a=void 0!==t&&t;return Object(o.jsx)("div",{className:"title-wrapper",css:[Object(i.e)(a),l(a)]},e)})))),Object(o.jsx)(a.e,{css:i.b},r))}},2924:function(n,e,t){"use strict";t.d(e,"a",(function(){return c}));var o,a=t(7),i=t(1),r=t(74),c=Object(i.css)(o||(o=Object(a.a)(["\n  ","\n  cursor: pointer;\n  height: 24px;\n  width: 24px;\n"])),r.c)},2940:function(n,e,t){n.exports=t.p+"static/media/EA.2d15348e.svg"},2945:function(n,e,t){"use strict";t.d(e,"a",(function(){return a}));var o=t(15),a=function(n){switch(n){case o.r.ADT:return"adult";case o.r.CHD:return"child";case o.r.INF:return"infant"}}},2961:function(n,e,t){"use strict";var o,a=t(1),i=t(7),r=t(3),c=Object(a.css)(o||(o=Object(i.a)(["\n  align-items: center;\n  border: 1px solid ",";\n  border-radius: 100%;\n  display: inline-flex;\n  justify-content: center;\n  margin-right: 16px;\n  height: 40px;\n  width: 40px;\n  min-width: 40px;\n"])),r.a.colors.neutral.front.dark);e.a=function(n){var e=n.name;return Object(a.jsx)("span",{"aria-hidden":!0,className:"initials",css:c},"".concat(e.first.charAt(0).toUpperCase()).concat(e.last.charAt(0).toUpperCase()))}},2962:function(n,e,t){"use strict";var o,a,i=t(1),r=t(0),c=t(43),l=t.n(c),s=t(7),d=t(3),u=Object(i.css)(o||(o=Object(s.a)(["\n  font-family: ",";\n  font-weight: ",";\n  font-size: ",";\n  line-height: ",";\n"])),d.a.font.family.default,d.a.font.weight.normal,d.a.font.size.h4,d.a.font.lineHeight.h3),b=Object(i.css)(a||(a=Object(s.a)(["\n  font-size: ",";\n  line-height: ",";\n\n  b,\n  strong {\n    font-weight: bold;\n  }\n"])),d.a.font.size.paragraphSmall,d.a.font.lineHeight.paragraph);e.a=function(n){var e=n.name,t=n.showProgram,o=void 0===t||t,a=n.hasProgram,c=void 0!==a&&a,s=n.program,d=void 0===s?"":s,p=function(n){return n.charAt(0).toUpperCase()+n.slice(1).toLowerCase()};return Object(i.jsx)(r.Fragment,null,Object(i.jsx)("span",{className:"name",css:u},"".concat(p(e.first)," ").concat(p(e.last))),o&&c&&Object(i.jsx)("span",{className:"tier",css:b,dangerouslySetInnerHTML:{__html:l.a.sanitize(d,{})}}))}},3015:function(n,e,t){"use strict";t.r(e);var o,a,i,r,c,l,s,d,u,b=t(12),p=t(1),f=t(0),m=t(7),h=t(9),j=t(1237),x=t(74),g=t(3),v=t(2895),O=function(n){var e=n.header,t=void 0===e?0:e,a=n.footer,i=void 0===a?0:a,r=n.isContractOpen,c=void 0!==r&&r;return Object(p.css)(o||(o=Object(m.a)(["\n  padding: 0;\n\n  "," {\n    border-radius: 0px;\n  }\n\n  "," {\n    min-width: 360px;\n    overflow: hidden;\n  }\n\n  & > .modal-content {\n    padding: 0 16px;\n\n    "," {\n      max-height: 94vh;\n      height: 100%;\n      overflow-y: auto;\n      overflow-x: hidden;\n      width: 100%;\n      transition: transform 300ms ease;\n\n      ","\n    }\n  }\n\n  .payment-method + .modal-actions {\n    padding-top: 16px;\n  }\n\n  .modal-actions {\n    // position: sticky;\n    bottom: 0;\n    left: 0;\n    background-color: white;\n    padding: 16px;\n    width: calc(100% + 32px);\n    margin-left: -16px;\n    box-shadow: 0px -12px 12px rgb(0 0 0 / 8%);\n    z-index: 102;\n\n    .actions {\n      width: 100%;\n    }\n  }\n\n  "," {\n    ",";\n    background-color: white;\n\n    .modal-content {\n      &__header {\n        width: calc(100% + 32px);\n        margin-left: -16px;\n        overflow: hidden;\n        box-shadow: 0px 12px 12px rgba(0, 0, 0, 0.04);\n        &,\n        & p {\n          font-size: 16px;\n          line-height: 24px;\n          color: ",";\n          font-weight: ",";\n        }\n      }\n\n      &__body {\n        background: white;\n        overflow: auto;\n        height: calc(100vh - (","px + ","px));\n        padding: 16px 0 !important;\n      }\n\n      &__footer {\n        flex-direction: column;\n        height: auto;\n        width: 100vw;\n      }\n    }\n  }\n\n  .accept-terms {\n    width: 100%;\n    padding: 8px 16px;\n    border: 1px solid #c0c0c0;\n    border-radius: 4px;\n    font-size: 14px;\n    line-height: 16px;\n    margin-bottom: 24px;\n\n    "," {\n      margin-bottom: 0;\n    }\n\n    a {\n      font-weight: bold;\n      color: #026cb6;\n      cursor: pointer;\n      text-decoration: none;\n    }\n\n    label {\n      display: flex;\n      align-items: center;\n      justify-content: space-between;\n\n      input {\n        margin-right: 16px;\n      }\n\n      span {\n        text-align: left;\n      }\n    }\n  }\n"])),h.a.lowerThan("desktop"),h.a.higherThan("desktop"),h.a.higherThan("desktop"),c&&"\n        transform: translateX(-76px);\n        transition: transform 300ms ease;\n      ",h.a.lowerThan("desktop"),Object(j.d)({footer:!0},{isFilter:!1}),g.a.colors.brandAzul.dark,g.a.font.weight.normal,t,i,h.a.lowerThan("desktop"))},y=Object(p.css)(a||(a=Object(m.a)(["\n  ",";\n  color: ",";\n"])),x.o,g.a.colors.neutral.front.dark),w=Object(p.css)(i||(i=Object(m.a)(["\n  img {\n    max-width: 200px;\n  }\n"]))),k=Object(p.css)(r||(r=Object(m.a)(["\n  ",";\n\n  p {\n    padding: 0;\n    margin: 16px 0;\n  }\n"])),v.c),C=Object(p.css)(c||(c=Object(m.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 16px;\n  border: 1px solid #c0c0c0;\n  border-bottom: none;\n  border-radius: 4px;\n\n  ",";\n\n  .passenger-component {\n    display: flex;\n    justify-content: space-between;\n    width: 100%;\n    height: 60px;\n    border-bottom: 1px solid #c0c0c0;\n  }\n\n  .info {\n    display: inline-flex;\n    align-items: center;\n    padding: 2px 10px;\n\n    .initials {\n      margin-right: 10px;\n    }\n  }\n\n  .passenger-name {\n    display: inline-flex;\n    flex-direction: column;\n    text-align: left;\n    margin: 0;\n  }\n\n  .name {\n    ",";\n    color: ",";\n    text-transform: capitalize;\n  }\n\n  .initials {\n    color: ",";\n    border-color: ",";\n  }\n\n  .type {\n    ",";\n    display: inline-flex;\n    align-items: center;\n    padding: 2px 10px;\n  }\n\n  img {\n    height: 45%;\n  }\n\n  .passenger-count {\n    padding: 2px 5px;\n  }\n"])),y,x.p,g.a.colors.neutral.front.dark,g.a.colors.brandAzul.dark,g.a.colors.brandAzul.dark,x.p),N=Object(p.css)(l||(l=Object(m.a)(["\n  border-radius: 4px;\n  border: 1px solid #c0c0c0;\n  margin-bottom: 16px;\n\n  & > div {\n    border-bottom: 1px solid #c0c0c0;\n    height: 56px;\n\n    &:last-of-type {\n      border-bottom: none;\n    }\n\n    &.discount-banner {\n      height: auto;\n    }\n  }\n\n  .form-group--error {\n    border-bottom: none !important;\n    margin-top: 1px;\n    height: auto;\n\n    & > span {\n      border-bottom: 1px solid ",";\n    }\n\n    &:not(:focus-within) {\n      .form-group-container:before {\n        border-width: 1px;\n        margin-left: 1px;\n      }\n    }\n\n    span {\n      border-width: 1px;\n      margin-top: 1px;\n    }\n  }\n"])),g.a.colors.neutral.front.lighter),A=Object(p.css)(s||(s=Object(m.a)(["\n  margin-bottom: 0 !important;\n\n  .form-group-container {\n    border: none !important;\n  }\n"]))),z=t(610),S=t(916),F=t(43),E=t.n(F),_=t(571),T=t(1259),L=t(2961),I=t(2962),B=Object(p.css)(d||(d=Object(m.a)(["\n  font-family: ",";\n  font-weight: ",";\n  font-size: ",";\n  line-height: ",";\n"])),g.a.font.family.default,g.a.font.weight.normal,g.a.font.size.h4,g.a.font.lineHeight.h3),M=Object(p.css)(u||(u=Object(m.a)(["\n  font-size: ",";\n  line-height: ",";\n\n  b,\n  strong {\n    font-weight: bold;\n  }\n"])),g.a.font.size.paragraphSmall,g.a.font.lineHeight.paragraph);function P(n){return!(n&&n<1||!n)}var H,V,D=function(n){var e=n.seat,t=n.showProgram,o=void 0===t||t,a=n.hasProgram,i=void 0!==a&&a,r=n.program,c=void 0===r?"":r;return Object(p.jsx)(f.Fragment,null,Object(p.jsx)("span",{className:"seat",css:B},"".concat(e)),o&&i&&Object(p.jsx)("span",{className:"tier",css:M,dangerouslySetInnerHTML:{__html:E.a.sanitize(c,{})}}))},R=t(2945),U=t(1569),q=t(1568),J=t(112),X=t(430),G=t(22),K=t(534),Z=t(72),Q=Object(p.css)(H||(H=Object(m.a)(["\n  font-family: ",";\n  font-weight: ",";\n  font-size: ",";\n  line-height: ",";\n"])),g.a.font.family.default,g.a.font.weight.normal,g.a.font.size.h4,g.a.font.lineHeight.h3),W=Object(p.css)(V||(V=Object(m.a)(["\n  font-size: ",";\n  line-height: ",";\n\n  b,\n  strong {\n    font-weight: bold;\n  }\n"])),g.a.font.size.paragraphSmall,g.a.font.lineHeight.paragraph);function Y(n){return!(n&&n<1||!n)}var $=function(n){var e=n.bags,t=n.showProgram,o=void 0===t||t,a=n.hasProgram,i=void 0!==a&&a,r=n.program,c=void 0===r?"":r;return Object(p.jsx)(f.Fragment,null,Object(p.jsx)("span",{className:"seat",css:Q},"".concat(e)),o&&i&&Object(p.jsx)("span",{className:"tier",css:W,dangerouslySetInnerHTML:{__html:E.a.sanitize(c,{})}}))},nn=t(1257),en=t(2940),tn=t.n(en),on=function(n,e,t){Object(f.useEffect)((function(){var t=null===n||void 0===n?void 0:n.querySelectorAll("[data-modal]"),o=function(n){n.preventDefault(),e()};return null===t||void 0===t||t.forEach((function(n){n.addEventListener("click",(function(n){n.preventDefault(),e()}))})),function(){null===t||void 0===t||t.forEach((function(n){return n.removeEventListener("click",o)}))}}),[n,t])},an=t(2),rn=t(46),cn=t(114),ln=t(406);var sn,dn=function(n){var e,t,o,a,i,r,c=n.isContractOpen,l=n.onAccept,s=n.onCancel,d=n.internalModal,u=null===d||void 0===d?void 0:d.title,b=null===d||void 0===d?void 0:d.fileReference,p=null===d||void 0===d?void 0:d.text,f=null===d||void 0===d||null===(e=d.button)||void 0===e?void 0:e.linkLabel,m=null===d||void 0===d||null===(t=d.button)||void 0===t?void 0:t.linkAlt,h=null===d||void 0===d||null===(o=d.button)||void 0===o?void 0:o.theme,j=null===d||void 0===d||null===(a=d.alternativeButton)||void 0===a?void 0:a.linkLabel,x=null===d||void 0===d||null===(i=d.alternativeButton)||void 0===i?void 0:i.linkAlt,g=null===d||void 0===d||null===(r=d.alternativeButton)||void 0===r?void 0:r.theme;return Object(an.a)(Object(an.a)({},n),{},{title:u,fileReference:b,isContractOpen:c,onAccept:l,onCancel:s,text:p,button:f,buttonAlt:m,buttonTheme:h,alternativeButtonLabel:j,alternativeButtonLabelAlt:x,alternativeButtonTheme:g})},un=t(2924),bn=function(n){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return Object(p.css)(sn||(sn=Object(m.a)(["\n  position: fixed;\n  height: 100%;\n  width: 100%;\n  top: 0;\n  left: ",";\n  background: white;\n  z-index: 109;\n  transition: left 450ms ease-out;\n\n  .modal-content {\n    height: 100%;\n  }\n\n  .overlay {\n    opacity: 0;\n    visibility: hidden;\n    position: absolute;\n    height: 100%;\n    width: 100%;\n    top: 0;\n    left: -100%;\n    background-color: rgba(0, 0, 0, .4);\n    z-index: ",";\n    transition: all 100ms ease 250ms;\n\n    &.opened {\n      opacity: 1;\n      visibility: visible;\n      transition: all 50ms ease;\n    }\n  }\n\n  .modal-content__header {\n    svg {\n      transform: rotate(-90deg);\n    }\n  }\n\n  .modal-content__body {\n    padding: 16px 24px 0 24px!important;\n    text-align: left;\n    font-size: 16px;\n    line-height: 24px;\n    overflow: scroll;\n    max-height: ","px;\n\n    "," {\n      max-height: none;\n    }\n\n    p {\n      font-size: 16px;\n      line-height: 24px;\n      color: #041E42;\n      margin-top:0;\n    }\n  }\n\n  .modal-content__footer {\n    position: absolute;\n    width: 100%;\n    bottom: 0;\n    box-shadow: 0px -12px 12px rgba(0, 0, 0, 0.08);\n    padding: 0;\n    background-color: #fff;\n\n    "," {\n      left: 0;\n    }\n\n    .actions {\n      width: 100%;\n      padding: 16px;\n      display: flex;\n      flex-direction: column;\n      z-index: 1000;\n    }\n  }\n"])),n?"0":"100%",n?110:-99,e||200,h.a.lowerThan("desktop"),h.a.lowerThan("desktop"))};var pn,fn,mn,hn,jn,xn,gn,vn=function(n){var e=dn(Object(an.a)({},n)),t=e.fileReference,o=e.title,a=e.isContractOpen,i=e.onAccept,r=e.onCancel,c=e.text,l=e.button,s=e.buttonAlt,d=e.buttonTheme,u=e.alternativeButtonLabel,m=e.alternativeButtonLabelAlt,h=e.alternativeButtonTheme,j=Object(f.useRef)(null),x=Object(f.useRef)(null),g=Object(f.useRef)(null),v=Object(f.useState)(0),O=Object(b.a)(v,2),y=O[0],C=O[1];return Object(f.useEffect)((function(){var n,e,t,o=(null===(n=g.current)||void 0===n?void 0:n.offsetHeight)||0,a=(null===(e=x.current)||void 0===e?void 0:e.offsetHeight)||0,i=(null===(t=j.current)||void 0===t?void 0:t.offsetHeight)||0;C(i-o-a||0)}),[x.current,g.current]),Object(p.jsx)("div",{id:"#modal-acept",css:bn(a,y),tabIndex:a?1:0},Object(p.jsx)("div",{className:"overlay"}),Object(p.jsx)("section",{className:"modal-content",ref:j},Object(p.jsx)("div",{className:"hide-on-mobile",ref:x},t&&Object(p.jsx)("div",{className:"modal-icon",css:w},Object(p.jsx)(Z.LazyLoadImage,{src:t,alt:o})),Object(p.jsx)(cn.a,{text:o,customStyle:k})),Object(p.jsx)("div",{className:"modal-content__header hide-on-desktop"},Object(p.jsx)("button",{type:"button",onClick:r,css:un.a},Object(p.jsx)(ln.a,{fill:"#041E42"})),Object(p.jsx)(cn.a,{text:o,customStyle:k}),Object(p.jsx)("span",null)),Object(p.jsx)("div",{className:"modal-content__body"},Object(p.jsx)(cn.a,{text:c,customStyle:k})),Object(p.jsx)("div",{className:"modal-content__footer",ref:g},Object(p.jsx)("div",{className:"actions"},Object(p.jsx)(rn.a,{el:"button",type:"button",label:l,styles:{marginTop:"0"},isPrimary:Object(_.c)(d),isSecondary:Object(_.d)(d),isOutlineDefault:Object(_.a)(d),themeMobile:d,handleClick:i,ariaLabel:s}),Object(p.jsx)(rn.a,{el:"button",type:"button",label:u,isPrimary:Object(_.c)(h),isSecondary:Object(_.d)(h),isOutlineDefault:Object(_.a)(h),themeMobile:h,isOutlinePrimary:!0,handleClick:r,ariaLabel:m,styles:{marginTop:"16px"}})))))},On=t(32),yn=t(2903),wn=t(2904),kn=t(154),Cn=Object(p.css)(pn||(pn=Object(m.a)(["\n  border: 1px solid ",";\n  margin-bottom: 16px;\n  border-top-left-radius: 4px;\n  border-top-right-radius: 4px;\n\n  [data-accordion-component='AccordionItem'] {\n    border-radius: 4px;\n  }\n"])),g.a.colors.neutral.front.lighter),Nn=Object(p.css)(fn||(fn=Object(m.a)(["\n  padding: 16px;\n  background: #f8f8f8;\n"]))),An=Object(p.css)(mn||(mn=Object(m.a)(["\n  background: ",";\n  border-radius: 4px;\n\n  .form-group:first-of-type:not(.form-group--error):not(:focus-within) {\n    .form-group-container {\n      border-top-left-radius: 4px;\n      border-top-right-radius: 4px;\n\n      &:hover {\n        &:before {\n          height: calc(100% - 2px);\n          width: calc(100% - 2px);\n          left: -1px;\n          top: -1px;\n        }\n      }\n    }\n  }\n\n  .form-group {\n    margin-bottom: 0 !important;\n    position: relative;\n\n    &--error {\n      & > span {\n        border: 1px solid ",";\n        border-top: none !important;\n      }\n\n      &:focus-within {\n        & > span {\n          border-color: ",";\n        }\n      }\n\n      .form-group-container:before {\n        border-width: 1px;\n        left: -1px;\n        right: -1px;\n      }\n\n      &:hover {\n        .form-group-container:before {\n          border-width: 2px;\n          left: -2px;\n          right: -2px;\n        }\n      }\n    }\n\n    "," {\n      &:focus-within {\n        .form-group-container {\n          position: relative;\n\n          input {\n            z-index: 2;\n          }\n\n          &:before {\n            border: 6px solid rgba(219, 219, 219, 0.8);\n            box-shadow: -1px 2px 4px rgb(0 0 0 / 10%);\n            content: '';\n            position: absolute;\n            top: -6px;\n            left: -6px;\n            width: 100%;\n            height: 100%;\n            z-index: 1;\n          }\n\n          &:after {\n            border: 2px solid #026cb6;\n            content: '';\n            position: absolute;\n            top: -2px;\n            left: -2px;\n            width: 100%;\n            height: 100%;\n            z-index: 1;\n          }\n        }\n      }\n    }\n  }\n"])),g.a.colors.white,g.a.colors.neutral.front.lighter,g.a.colors.neutral.front.lighter,h.a.higherThan("desktop")),zn=function(n){return Object(p.css)(hn||(hn=Object(m.a)(["\n  box-shadow: none;\n  ",";\n  padding: 14px 16px;\n\n  span {\n    color: ",";\n    ",";\n  }\n"])),n&&"border-bottom: 1px solid ".concat(g.a.colors.neutral.front.lighter),g.a.colors.neutral.front.dark,x.o)},Sn=Object(p.css)(xn||(xn=Object(m.a)(["\n  ",";\n  color: ",";\n  cursor: pointer;\n  display: flex;\n  align-items: flex-start;\n  text-align: left;\n  margin-top: 16px;\n  padding: 0px 8px 0 8px;\n\n  span {\n    display: flex;\n    width: 14px;\n    height: 14px;\n    margin-right: 8px;\n  }\n\n  &:hover {\n    color: ",";\n  }\n"])),x.c,g.a.colors.brandAzul.default,g.a.colors.brandAzul.light),Fn=function(n,e){return Object(p.css)(gn||(gn=Object(m.a)(["\n  ",";\n"])),n&&"\n    background: #EBF4FA;\n\n    .form-group-container {\n      border: 1px solid ".concat(g.a.colors.brandAzul.default," !important;\n\n      ").concat(e&&"border-bottom: none !important;","\n    }\n\n    input {\n      background: #EBF4FA;\n      color: ").concat(g.a.colors.brandAzul.dark,";\n    }\n  "))},En=t(755),_n=function(n){var e=n.credit,t=n.onAddVoucher,o=n.onValidateVoucher,a=n.onChangeCredit,i=n.vouchers,r=Object(S.a)().t,c=Object(f.useState)(!1),l=Object(b.a)(c,2),s=l[0],d=l[1],u=Object(f.useState)([]),h=Object(b.a)(u,2),j=h[0],v=h[1],O=Object(f.useState)(!1),y=Object(b.a)(O,2),w=y[0],k=y[1],C=Object(f.useRef)(null),N=function(){!!j.filter((function(n){return""===n.formattedValue})).length||(v([{formattedValue:"",isValid:!1}].concat(Object(On.a)(j))),t())};Object(f.useEffect)((function(){k(j.length>0&&""!==j[0].formattedValue)}),[j]),Object(f.useEffect)((function(){k(j.length>0&&""!==j[0].formattedValue)}),[j]),Object(f.useEffect)((function(){v(i),i.length||N()}),[i]);var A,z=Object(p.jsx)(f.Fragment,null,Object(p.jsx)("span",null,r("bookingFlow.payment.oneClick.voucherTitle")),Object(p.jsx)(ln.a,{isDown:!0}));return Object(p.jsx)("div",{className:"payment-voucher",css:Cn},Object(p.jsx)(yn.a,{expandedItem:[]},Object(p.jsx)(wn.a,{id:"voucher",Title:z,TitleCSS:zn},Object(p.jsx)("div",{className:"voucher-container",css:Nn},Object(p.jsx)("div",{className:"input-container",css:An,ref:C},j.map((function(n,e){return Object(p.jsx)(J.a,{hasDelete:n.isValid,onDelete:function(){return function(n){var e=j;e.splice(n,1),v(e),e.length||N()}(e)},guide:!1,defaultValue:"",value:n.formattedValue,handleChange:function(n){return function(n,e){var t=j;t[n]={formattedValue:e,isValid:!1},v(t)}(e,n)},name:"voucher-".concat(e),onBlur:o,hasMobileBorder:!0,inputPlaceHolder:r("bookingFlow.payment.voucher.input.placeholder"),styles:Fn(n.isValid,s),labelText:r("bookingFlow.payment.voucher.input.label"),inputDisabled:!1,ariaLabel:r("bookingFlow.payment.oneClick.cvv.ariaLabel"),defaultError:n.hasError,handleErrorMessage:function(e){return function(n,e){return 0===n.length||e.hasError?r("bookingFlow.payment.voucher.input.error"):""}(e,n)}})})),e&&Object(p.jsx)("div",{className:"azul-credit",css:(A=s,Object(p.css)(jn||(jn=Object(m.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 8px 16px;\n  border-bottom-right-radius: 4px;\n  border-bottom-left-radius: 4px;\n  font-family: ",";\n  position: relative;\n  border: 1px solid ",";\n  border-top: none;\n\n  ",";\n\n  .info {\n    display: flex;\n    flex-direction: column;\n    align-items: flex-start;\n\n    .label {\n      ",";\n      color: ",";\n      margin-bottom: 8px;\n    }\n\n    .value {\n      ",";\n      color: ",";\n      ","\n    }\n  }\n\n  &:hover {\n    border-color: transparent;\n\n    &:before {\n      content: '';\n      position: absolute;\n      border: 2px solid ",";\n      top: -1px;\n      left: -1px;\n      width: calc(100% - 2px);\n      height: calc(100% - 2px);\n    }\n  }\n"])),g.a.font.family.default,g.a.colors.neutral.front.lighter,A&&"\n    background: linear-gradient(0deg, rgba(2, 108, 182, 0.08), rgba(2, 108, 182, 0.08)), #FFFFFF;;\n    border: 1px solid ".concat(g.a.colors.brandAzul.default,"\n  "),x.p,g.a.colors.brandAzul.medium,x.o,A?g.a.colors.brandAzul.medium:g.a.colors.neutral.front.dark,A&&"font-weight: ".concat(g.a.font.weight.bold,";"),g.a.colors.brandAzul.default))},Object(p.jsx)("div",{className:"info"},Object(p.jsx)("span",{className:"label"},r("bookingFlow.payment.oneClick.credit.label")),Object(p.jsx)("span",{className:"value"},e)),Object(p.jsx)("div",{className:"checkbox"},Object(p.jsx)("label",null,Object(p.jsx)(En.a,{id:"credit",onChange:function(){d(!s),a()},selected:s,disabled:!1}))))),w&&Object(p.jsx)("button",{type:"button",css:Sn,onClick:N,"aria-label":r("bookingFlow.payment.voucher.add.ariaLabel")},Object(p.jsx)("span",null,Object(p.jsx)(kn.b,{name:"plus"}))," ",r("bookingFlow.payment.voucher.add.label"))))))},Tn=t(267),Ln=t(189),In=t(752),Bn=t(15),Mn=t(1243),Pn=function(n){var e,t,o,a,i=n.storedPayments,r=n.changeInstallment,c=(n.cardInformation,n.setCardSecurityNumber),l=n.cardSecurityNumber,s=n.tudoazulUser,d=n.initNethone,u=n.profileNethone,p=n.finishNethone,m=Object(f.useState)({onEdit:function(){return null},flag:"",editFieldAlt:"",fieldAlt:"",method:null,isItauCard:!1}),h=Object(b.a)(m,2),j=h[0],x=h[1],g=Object(f.useState)(!1),v=Object(b.a)(g,2),O=v[0],y=(v[1],Object(f.useState)(!1)),w=Object(b.a)(y,2),k=w[0],C=w[1],N=Object(f.useState)([]),A=Object(b.a)(N,2),z=A[0],S=A[1],F=Object(f.useState)({label:"",value:""}),E=Object(b.a)(F,2),_=(E[0],E[1]),T=Object(f.useState)(!0),L=Object(b.a)(T,2),I=L[0],B=L[1],M=Object(f.useState)(l||""),H=Object(b.a)(M,2),V=H[0],D=H[1];Object(f.useEffect)((function(){return d(),function(){p()}}),[]),Object(f.useEffect)((function(){var n=Mn.a.securityNumber(V).isValid;B(!!k&&!n)}),[V,k]),Object(f.useEffect)((function(){var n=!!j.method&&!!z.length;C(n)}),[j,z]),Object(f.useEffect)((function(){var n=null===i||void 0===i?void 0:i.find(In.f);n&&n&&(D(n.cvv),x({fieldAlt:"",onEdit:function(){},editFieldAlt:"",flag:n.methodCode,method:{name:n.holderName,number:n.number.substr(n.number.length-4),flag:n.methodCode,type:Object(In.g)(n.methodCode)?Ln.c.CREDIT_CARD:n.methodCode},isItauCard:n.isItauCard}))}),[n.storedPayments]),Object(f.useEffect)((function(){var e=n.installments,t=null===e||void 0===e?void 0:e.map(In.b);S(t),t&&t[0]&&_(t.filter((function(n){return n.selected}))[0])}),[n.installments]);return{paymentMethod:j,hasVoucher:O,installments:{label:"",placeholder:"",options:z,defaultValue:z[0],onChange:function(n){r(Number(n.value)),_(n)}},cardSecurityNumber:l,setCardSecurityNumber:c,passenger:{name:{first:(null===s||void 0===s||null===(e=s.name)||void 0===e?void 0:e.first)||"",last:(null===s||void 0===s||null===(t=s.name)||void 0===t?void 0:t.last)||""},type:Bn.r.ADT,hasProgram:!!(null===s||void 0===s||null===(o=s.program)||void 0===o?void 0:o.levelCode)||!1,isPrimary:!0,program:(null===s||void 0===s||null===(a=s.program)||void 0===a?void 0:a.levelCode)||""},isPaymentDisabled:I,discount:"",cvv:V,setCvv:D,hasMethod:k,profileNethone:u,hasBags:Y,hasSeat:P}},Hn={"":"",GM:"Tudo<b>Azul</b>",TA:"Tudo<b>Azul</b>","TA+":"Tudo<b>Azul</b> Top\xe1zio",SAF:"Tudo<b>Azul</b> Safira",DIA:"Tudo<b>Azul</b> Diamante"},Vn=Object(G.c)(X.c,X.a)((function(n){var e=n.icon,t=n.title,o=n.primaryButtonLabel,a=n.primaryButtonClick,i=n.primaryButtonTheme,r=n.hasSecondaryButton,c=n.secondaryButtonLabel,l=n.secondaryButtonClick,s=n.imageIcon,d=n.primaryButtonAriaLabel,u=n.secondaryButtonAriaLabel,m=n.secondaryButtonTheme,h=n.onValidateVoucher,j=void 0===h?function(){return null}:h,x=n.onAddVoucher,g=void 0===x?function(){return null}:x,v=n.onChangeCredit,O=void 0===v?function(){return null}:v,y=n.vouchers,z=void 0===y?[]:y,F=n.credit,B=n.internalModal,M=n.checkbox,P=void 0===M?{}:M,H=n.openAddPaymentCardModal,V=n.setFooterHeight,X=n.setHeaderHeight,G=n.isModalOpened,Q=n.setIsContractOpen,W=n.isContractOpen,Y=(n.hasBags,n.hasSeat,n.oneClickBuyProposal),en=Pn(n),an=en.paymentMethod,ln=en.hasVoucher,sn=en.installments,dn=en.setCardSecurityNumber,un=en.passenger,bn=en.isPaymentDisabled,pn=en.discount,fn=en.cvv,mn=en.setCvv,hn=en.hasMethod,jn=en.profileNethone,xn=Y.seat,gn=Y.bag,On=null===xn||void 0===xn?void 0:xn.length,yn=null===gn||void 0===gn?void 0:gn.reduce((function(n,e){return n+(e.count||0)}),0),wn=Object(S.a)().t,Cn=Object(f.useRef)(null),Nn=Object(f.useRef)(null),An=Object(f.useRef)(null),zn=Object(f.useState)(null),Sn=Object(b.a)(zn,2),Fn=Sn[0],En=Sn[1],Ln=Object(f.useState)(!1),In=Object(b.a)(Ln,2),Bn=In[0],Mn=In[1],Vn=!!hn&&!Bn,Dn=null===un||void 0===un?void 0:un.program,Rn=P.checkboxLabel,Un=void 0===Rn?"":Rn,qn=P.checkLabelScreenReader,Jn=void 0===qn?"":qn,Xn=P.checkedLabelScreenReader,Gn=void 0===Xn?"":Xn;Object(f.useEffect)((function(){var n,e=(null===(n=Nn.current)||void 0===n?void 0:n.offsetHeight)||136;V(e)}),[Nn.current]),Object(f.useEffect)((function(){var n,e=(null===(n=Cn.current)||void 0===n?void 0:n.offsetHeight)||64;X(e)}),[Cn.current]);var Kn=function(){var n=document.querySelector(".overlay");null===n||void 0===n||n.classList.remove("opened")};return on(Fn,(function(){Q(!0),function(){var n=document.querySelector(".overlay");null===n||void 0===n||n.classList.add("opened")}()}),G),Object(p.jsx)(f.Fragment,null,Object(p.jsx)("section",{className:"modal-content",ref:An},Object(p.jsx)("div",{className:"hide-on-mobile"},e&&Object(p.jsx)("div",{className:"modal-icon",css:w},s?Object(p.jsx)(Z.LazyLoadImage,{src:e,alt:t}):Object(p.jsx)(kn.b,{name:e,alt:t})),Object(p.jsx)(cn.a,{text:t,customStyle:k})),Object(p.jsx)("div",{className:"modal-content__header hide-on-desktop",ref:Cn},Object(p.jsx)("span",null),Object(p.jsx)(cn.a,{text:t,customStyle:k}),Object(p.jsx)("span",null)),Object(p.jsx)("div",{className:"modal-content__body"},un&&Object(p.jsx)("div",{className:"passenger",css:C},Object(p.jsx)("div",{className:"passenger-component"},Object(p.jsx)("div",{className:"info"},Object(p.jsx)(L.a,{name:null===un||void 0===un?void 0:un.name}),Object(p.jsx)("p",{className:"passenger-name"},Object(p.jsx)(I.a,{name:{first:null===un||void 0===un?void 0:un.name.first.toLowerCase(),last:null===un||void 0===un?void 0:un.name.last.toLowerCase()},hasProgram:null===un||void 0===un?void 0:un.hasProgram,program:Hn[Dn]}))),Object(p.jsx)("div",{className:"type"},(null===un||void 0===un?void 0:un.type)&&"Viajante ".concat(wn(un.isPrimary?"bookingFlow.passenger.header.primary":Object(R.a)(null===un||void 0===un?void 0:un.type))))),(null===xn||void 0===xn?void 0:xn.length)>0&&Object(p.jsx)("div",{className:"passenger-component"},Object(p.jsx)("div",{className:"info"},Object(p.jsx)("p",{className:"passenger-seat"},Object(p.jsx)(D,{seat:wn("seats_selected"),hasProgram:null===un||void 0===un?void 0:un.hasProgram}))),Object(p.jsx)("div",{className:"type"},Object(p.jsx)("img",{src:tn.a,alt:"\xcdcone"}),Object(p.jsx)("p",{className:"passenger-count"}," ",On," "))),(null===gn||void 0===gn?void 0:gn.length)>0&&Object(p.jsx)("div",{className:"passenger-component"},Object(p.jsx)("div",{className:"info"},Object(p.jsx)("p",{className:"passenger-bag"},Object(p.jsx)($,{bags:wn("departed_luggages"),hasProgram:null===un||void 0===un?void 0:un.hasProgram}))),Object(p.jsx)("div",{className:"type"},Object(p.jsx)(nn.a,null),Object(p.jsx)("p",{className:"passenger-count"}," ",yn," ")))),hn&&Object(p.jsx)(f.Fragment,null,ln&&Object(p.jsx)(_n,{vouchers:z,credit:F,onChangeCredit:O,onValidateVoucher:j,onAddVoucher:g}),Object(p.jsx)("div",{className:"payment-method",css:N},Object(p.jsx)(T.a,{method:null===an||void 0===an?void 0:an.method,flag:null===an||void 0===an?void 0:an.flag,fieldAlt:"",editFieldAlt:null===an||void 0===an?void 0:an.editFieldAlt,onEdit:H,isStorybook:!0,isItauCard:null===an||void 0===an?void 0:an.isItauCard}),Object(p.jsx)(J.a,{hasMask:!0,guide:!1,mask:"AX"===(null===an||void 0===an?void 0:an.flag)?K.e:K.d,value:fn,handleChange:mn,name:"securityNumber",id:"securityNumber",onBlur:function(n){dn(n)},inputPlaceHolder:wn("bookingFlow.payment.oneClick.cvv.placeholder"),labelText:wn("bookingFlow.payment.oneClick.cvv.label"),inputDisabled:!1,ariaLabel:wn("bookingFlow.payment.oneClick.cvv.ariaLabel"),styles:A,handleErrorMessage:function(n){return n.length<2?wn("bookingFlow.payment.oneClick.cvv.error"):""},reValidateOnChange:!0}),Object(p.jsx)(U.a,{label:wn("bookingFlow.payment.installments.label"),placeholder:wn("bookingFlow.payment.installments.placeholder"),options:null===sn||void 0===sn?void 0:sn.options,defaultValue:null===sn||void 0===sn?void 0:sn.defaultValue,onChange:null===sn||void 0===sn?void 0:sn.onChange}),pn&&Object(p.jsx)(q.a,{text:wn("bookingFlow.payment.discount",{value:pn})})),Object(p.jsx)("div",{className:"accept-terms"},Object(p.jsx)(Tn.a,{name:"terms-of-use",disabled:!1,checked:Bn,onChange:function(){Mn(!Bn)},ariaLabel:Bn?Gn:Jn,isPrimary:!0,width:18},Object(p.jsx)("span",{ref:function(n){return En(n)},className:"checkbox-terms ".concat(G),"data-rte-editelement":!0,dangerouslySetInnerHTML:{__html:E.a.sanitize(Un,{ADD_ATTR:["target"]})}}))))),Object(p.jsx)("div",{className:"modal-actions modal-content__footer",ref:Nn},Object(p.jsx)("div",{className:"actions"},Object(p.jsx)(rn.a,{el:"button",type:"button",label:o,isPrimary:Object(_.c)(i),isSecondary:Object(_.d)(i),isOutlineDefault:Object(_.a)(i),isBlocked:!0,handleClick:function(){return jn(a)},ariaLabel:d,disabled:bn||Vn}),r&&Object(p.jsx)(rn.a,{el:"button",type:"button",label:c,isPrimary:Object(_.c)(m),isSecondary:Object(_.d)(m),isOutlineDefault:Object(_.a)(m),isOutlinePrimary:Object(_.b)(m),isBlocked:!0,handleClick:l,ariaLabel:u,styles:{marginTop:"8px"}})))),hn&&Object(p.jsx)(vn,{icon:e,imageIcon:s,isContractOpen:W,onAccept:function(){Mn(!0),Q(!1),Kn()},onCancel:function(){Q(!1),Kn()},internalModal:B}))}));e.default=function(n){var e=n.isOpen,t=n.modalId,o=n.contentLabel,a=n.closeTimeoutMS,i=n.customRoot,r=Object(f.useRef)(null),c=Object(f.useRef)(null),l=Object(f.useState)(0),s=Object(b.a)(l,2),d=s[0],u=s[1],m=Object(f.useState)(0),h=Object(b.a)(m,2),j=h[0],x=h[1],g=Object(f.useState)(!1),v=Object(b.a)(g,2),y=v[0],w=v[1],k=Object(f.useState)(e),C=Object(b.a)(k,2),N=C[0],A=C[1];return Object(f.useEffect)((function(){var n,e=(null===(n=c.current)||void 0===n?void 0:n.offsetHeight)||136;x(e)}),[c.current]),Object(f.useEffect)((function(){var n,e=(null===(n=r.current)||void 0===n?void 0:n.offsetHeight)||64;u(e)}),[r.current]),Object(f.useEffect)((function(){A(e)}),[e]),Object(p.jsx)(z.a,{isOpen:N,closeTimeoutMS:null!==a&&void 0!==a?a:500,handleClose:function(){},contentLabel:o,className:"generic-modal",id:t,overlayClassName:"generic-modal-overlay",customRoot:i,css:O({header:d,footer:j,isContractOpen:y})},N&&Object(p.jsx)(Vn,Object.assign({},n,{isContractOpen:y,isModalOpened:N,setFooterHeight:x,setHeaderHeight:u,setIsContractOpen:w})))}}}]);
//# sourceMappingURL=87.f7fa920d.chunk.js.map