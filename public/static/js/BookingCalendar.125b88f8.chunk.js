(this.webpackJsonpazul=this.webpackJsonpazul||[]).push([[15],{3108:function(n,e,t){"use strict";t.r(e);var i,a,o,r=t(12),c=t(19),l=t(1),s=t(0),d=t(22),b=t(489),p=t.n(b),u=t(919),h=t(1110),x=t(108),g=t(3),f=t(916),w=t(844),j=t(2799),m=t(7),v=t(9),k=t(74),O=Object(l.css)(i||(i=Object(m.a)(["\n  display: flex;\n  justify-content: center;\n  width: 100%;\n\n  "," {\n    max-width: calc(414px + 32px);\n    width: 100vw;\n    margin-left: -16px;\n  }\n\n  .slick-slider {\n    width: 100%;\n    height: 100%;\n\n    .slick-list {\n      height: 100%;\n    }\n\n    .slick-track {\n      display: flex;\n      align-items: center;\n    }\n\n    .slick-slide {\n      height: auto;\n    }\n  }\n"])),v.a.lowerThan("tablet")),S=Object(l.css)(a||(a=Object(m.a)(["\n  height: 86px;\n  max-width: 100%;\n  overflow-x: auto;\n  display: flex;\n  align-items: center;\n  margin-bottom: 22px;\n  box-sizing: content-box;\n  width: 100%;\n\n  "," {\n    height: auto;\n    margin-bottom: 0;\n  }\n\n  &::-webkit-scrollbar {\n    width: 0;\n    height: 0;\n  }\n\n  &::-webkit-scrollbar-track {\n    background: transparent;\n  }\n\n  &::-webkit-scrollbar-thumb {\n    background: transparent;\n    border: none;\n  }\n"])),v.a.lowerThan("desktop")),y=function(n){var e,t,i=n.item,a=n.isSelected,c=n.onSelect,s=(n.i,n.isInternational),d=Object(f.a)().t,b=i.std.split("/"),p=Object(r.a)(b,3),u=p[0],h=p[1],x=p[2],O=(new Date).getDate(),S=(new Date).getMonth()+1,y=(new Date).getFullYear(),T=Object(w.a)(new Date(Number(x),Number(u),Number(h)),new Date(y,S,O)),C=Object(j.a)(new Date(Number(x),Number(u)-1,Number(h))),D=T||"-"===i.value||!!s&&!!C;return Object(l.jsx)("button",{type:"button","aria-hidden":!i.value,css:(e=a(i),t=D,Object(l.css)(o||(o=Object(m.a)(["\n  position: relative;\n\n  ",";\n\n  flex-direction: column;\n  border-radius: 4px;\n  text-align: center;\n  margin: 0 6px;\n  min-height: ",";\n  min-width: 128px;\n  background-color: ",";\n  color: ",";\n  border: ",";\n  transition: 0.4s background-color;\n\n  "," {\n    .item-value {\n      color: ",";\n    }\n  }\n\n  ","\n\n  ","\n\n  ",";\n\n  &:after {\n    left: -2px;\n    top: -2px;\n    width: 100%;\n    height: 100%;\n  }\n\n  "," {\n    background-color: ",";\n    color: ",";\n    width: 108px;\n    height: 64px;\n    min-width: 90px;\n    min-height: 64px;\n    margin: 0 4px;\n    ",";\n    border: 1px solid ",";\n  }\n\n  span {\n    display: block;\n\n    &:first-of-type {\n      text-transform: uppercase;\n      font-size: ",";\n      font-weight: 400;\n      line-height: 16px;\n      letter-spacing: 0px;\n      margin-bottom: ","px;\n    }\n\n    &:last-of-type {\n      ","\n\n      "," {\n        font-size: 14px;\n      }\n    }\n  }\n"])),k.b,e?"76px":"72px",e?"white":"rgba(235, 235, 235, 0.32);",e?"#041E42":"#808080",e?"1px solid #C0C0C0;":"none",v.a.higherThan("desktop"),e?"#041E42":"#606060",Object(k.e)(),!t&&"\n    &:hover {\n      cursor: pointer;\n      background-color: ".concat(e?"white":"rgba(235, 235, 235, 0.64);",";\n    }"),e&&"\n    box-shadow: 0px 8px 8px rgba(0, 0, 0, 0.04);\n    border: 1px solid #C0C0C0;\n  ",v.a.lowerThan("desktop"),e?"white":" rgba(255, 255, 255, 0.08)",e?"#041E42":"white",!e&&"\n      opacity: 0.8\n      backdrop-filter: blur(12px);\n    ",e?"#c0c0c0":"#FFFFFF",g.a.font.size.paragraphSmall,e?2:4,e&&"\n        font-size: ".concat(g.a.font.size.h4,";\n        font-weight: ").concat(g.a.font.weight.bold,";\n        line-height: 20px;\n      "),v.a.lowerThan("desktop"))),onClick:function(){return c(i.id)},"aria-label":"".concat(i.label," ").concat(d("lowest_rate_per_day")," ").concat(i.value,", ").concat(d("select")),disabled:D},Object(l.jsx)("span",{"aria-hidden":!0},i.label),Object(l.jsx)("span",{"aria-hidden":!0,className:"item-value"},i.value||""))};e.default=Object(d.c)(h.b,h.a)((function(n){var e=n.items,t=(n.flexibleDays,n.flexibleDaysItems),i=n.accessibilityContainer,a=n.calendarAction,o=n.data,d=n.journeyIndex,b=void 0===d?0:d,h=n.handleClick,f=Object(s.useRef)(null),w=Object(s.useState)(),j=Object(r.a)(w,2),m=j[0],v=j[1],k=Object(s.useState)(3),T=Object(r.a)(k,2),C=T[0],D=T[1],z=Object(x.a)({timeout:0}).isMobile,F=function(n){return n.id===C},N=o.trips.find((function(n){return"International"===n.region})),I=function(n){var e=null===m||void 0===m?void 0:m.find((function(e){return e.id===n}));e&&(a(e,h,!0),D(n))};Object(s.useEffect)((function(){!function(){var n,i=arguments.length>0&&void 0!==arguments[0]&&arguments[0],a=null===t||void 0===t?void 0:t[b];if(!a)return null;var o=c.Utils.isInEditor()||!e?a:e;o&&D(null===(n=o.filter((function(n){return n.active}))[0])||void 0===n?void 0:n.id),i&&(o.shift(),o.pop()),v(o)}(z)}),[z]);var E={infinite:!1,speed:500,arrows:!1,slidesToShow:7,centerPadding:"32px",initialSlide:z?2:0,responsive:[{breakpoint:g.a.breakpoints.desktop,settings:{centerMode:!0,infinite:!0,centerPadding:"16px",slidesToShow:3,slidesToScroll:1,variableWidth:!0,focusOnSelect:!0}},{breakpoint:g.a.breakpoints.tablet,settings:{centerMode:!0,infinite:!0,centerPadding:"16px",slidesToShow:3,slidesToScroll:1,variableWidth:!0,focusOnSelect:!0}},{breakpoint:g.a.breakpoints.mobile,settings:{centerMode:!0,infinite:!1,centerPadding:"16px",slidesToShow:1,slidesToScroll:1,variableWidth:!0,focusOnSelect:!0,speed:0}}]};return Object(l.jsx)(s.Fragment,null,!!(null===m||void 0===m?void 0:m.length)&&Object(l.jsx)("div",{css:O},Object(l.jsx)(u.a,{text:i}),Object(l.jsx)("div",{className:"booking-calendar__cards",css:S},Object(l.jsx)(p.a,Object.assign({},E,{ref:f}),null===m||void 0===m?void 0:m.map((function(n,e){return Object(l.jsx)(y,{item:n,isSelected:F,onSelect:I,i:e,isInternational:!!N})}))))))}))}}]);
//# sourceMappingURL=BookingCalendar.125b88f8.chunk.js.map