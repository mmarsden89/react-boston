(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{188:function(t,e,a){"use strict";a.r(e);var n=a(9),r=(a(0),a(194)),o=a(206),c=a(198);e.default=function(){return Object(n.b)(o.a,null,Object(n.b)(c.a,{title:"Page two"}),Object(n.b)("h1",null,"Hi from the second page"),Object(n.b)("p",null,"Welcome to page 2"),Object(n.b)(r.a,{to:"/"},"Go back to the homepage"))}},192:function(t,e,a){"use strict";a.d(e,"b",function(){return o}),a.d(e,"a",function(){return c}),a.d(e,"c",function(){return p});a(63);var n=a(193),r=a(202),o=Object(n.a)("p",{target:"epjwudz0"})(r.b," ",r.c," ",r.e," ",r.g," ",r.i," ",r.j," ",r.p," ",r.r," ",r.u," ",r.v," ",r.w," ",r.x," ",r.y," ",r.z," ",r.A," ",r.B);o.propTypes=Object.assign({},r.b.propTypes,r.c.propTypes,r.e.propTypes,r.g.propTypes,r.i.propTypes,r.j.propTypes,r.p.propTypes,r.r.propTypes,r.u.propTypes,r.v.propTypes,r.w.propTypes,r.x.propTypes,r.y.propTypes,r.z.propTypes,r.A.propTypes,r.B.propTypes);var c=Object(n.a)(o.withComponent("div",{target:"epjwudz2"}),{target:"epjwudz1"})(r.a," ",r.d," ",r.f," ",r.h," ",r.k," ",r.l," ",r.m," ",r.n," ",r.o," ",r.q," ",r.s," ",r.t," ",r.C);c.propTypes=Object.assign({},r.a.propTypes,r.d.propTypes,r.f.propTypes,r.h.propTypes,r.k.propTypes,r.l.propTypes,r.m.propTypes,r.n.propTypes,r.o.propTypes,r.q.propTypes,r.s.propTypes,r.t.propTypes,r.C.propTypes);var p=o.withComponent("h1",{target:"epjwudz3"});o.withComponent("h2",{target:"epjwudz4"}),o.withComponent("span",{target:"epjwudz5"})},194:function(t,e,a){"use strict";a.d(e,"b",function(){return d});var n=a(9),r=a(0),o=a.n(r),c=a(4),p=a.n(c),i=a(36),s=a.n(i);a.d(e,"a",function(){return s.a});a(195);var l=o.a.createContext({}),d=function(t){return Object(n.b)(l.Consumer,null,function(e){return t.data||e[t.query]&&e[t.query].data?(t.render||t.children)(t.data?t.data.data:e[t.query].data):Object(n.b)("div",null,"Loading (StaticQuery)")})};d.propTypes={data:p.a.object,query:p.a.string.isRequired,render:p.a.func,children:p.a.func}},195:function(t,e,a){var n;t.exports=(n=a(196))&&n.default||n},196:function(t,e,a){"use strict";a.r(e);a(63);var n=a(0),r=a.n(n),o=a(4),c=a.n(o),p=a(65),i=a(2),s=function(t){var e=t.location,a=i.default.getResourcesForPathnameSync(e.pathname);return r.a.createElement(p.a,Object.assign({location:e,pageResources:a},a.json))};s.propTypes={location:c.a.shape({pathname:c.a.string.isRequired}).isRequired},e.default=s},197:function(t,e,a){"use strict";a.d(e,"a",function(){return n});var n={colors:{primary:"#2160ad",primaryDark:"#154580",secondary:"#f15959",secondaryDark:"#d63333",black:"#03050d",grey:"#f7f7f7",white:"#fff"},fontSizes:[14,16,18,20,24,32,36,40,44,48],fontWeights:{semibold:600},space:[0,2,4,8,12,16,20,24,28,32,36,64]}},198:function(t,e,a){"use strict";var n=a(9),r=a(199),o=(a(0),a(4)),c=a.n(o),p=a(205),i=a.n(p),s=a(200),l=a.n(s);function d(t){var e=t.description,a=t.lang,o=t.meta,c=t.keywords,p=t.title,s=r.data.site,d=e||s.siteMetadata.description;return Object(n.b)(i.a,{htmlAttributes:{lang:a},title:p,titleTemplate:"%s | "+s.siteMetadata.title,link:[{rel:"shortcut icon",type:"image/x-icon",href:""+l.a}],meta:[{name:"description",content:d},{property:"og:title",content:p},{property:"og:description",content:d},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:s.siteMetadata.author},{name:"twitter:title",content:p},{name:"twitter:description",content:d}].concat(c.length>0?{name:"keywords",content:c.join(", ")}:[]).concat(o)})}d.defaultProps={lang:"en",meta:[],keywords:[],description:""},d.propTypes={description:c.a.string,lang:c.a.string,meta:c.a.arrayOf(c.a.object),keywords:c.a.arrayOf(c.a.string),title:c.a.string.isRequired},e.a=d},199:function(t){t.exports={data:{site:{siteMetadata:{title:"React Boston 2019",description:"New England's annual React conference!",author:"@wayfair"}}}}},200:function(t,e,a){t.exports=a.p+"static/favicon-ab1f1665723ab007dd6b0fe5ac3f4e95.ico"},201:function(t){t.exports={data:{site:{siteMetadata:{title:"React Boston 2019"}}}}},206:function(t,e,a){"use strict";var n=a(9),r=a(201),o=(a(0),a(4)),c=a.n(o),p=a(194),i=a(193),s=a(209),l=Object(s.a)("feTurbulence"),d=Object(s.a)("feDisplacementMap"),u=function(){var t=Object(s.b)({from:{scale:10,opacity:0,transform:"scale(0.9)",freq:"0.0175, 0.0"},to:{scale:150,opacity:1,transform:"scale(1)",freq:"0.0, 0.0"},config:{duration:1e3}}),e=t.freq,a=t.scale,r=t.transform,o=t.opacity;return Object(n.b)(s.a.svg,{viewBox:"0 0 785 361",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",style:{transform:r,opacity:o}},Object(n.b)("defs",null,Object(n.b)("filter",null,Object(n.b)(l,{type:"fractalNoise",baseFrequency:e,numOctaves:"1.5",result:"TURB",seed:"8"}),Object(n.b)(d,{xChannelSelector:"R",yChannelSelector:"G",in:"SourceGraphic",in2:"TURB",result:"DISP",scale:a}))),Object(n.b)("g",{fillRule:"nonzero",fill:"none"},Object(n.b)("path",{d:"M29.42 164.54c1.79-9.22 3.7-18.42 5.36-27.66 4.813-26.853 9.583-53.72 14.31-80.6 3.127-17.72 6.233-35.443 9.32-53.17A7 7 0 0 1 58.9 2h12.87c20.31.27 40.63.37 60.93 1a63.29 63.29 0 0 1 16.73 3.09c8.46 2.65 12.05 8.73 10.64 17.41C157.18 41.24 154 59 151 76.69c-.46 2.66-.91 5.32-1.4 8-2.84 15.46-9.89 22.28-25.51 24.72l-3.5.55 14.76 55.15H105.6c-3.65-13.53-7.32-27.23-11-40.92-1.13-4.16-1.18-9.87-3.94-12-2.76-2.13-8.32-.78-12.65-.88-3-.07-6 0-9.55 0l-9.48 54.17H29.42v-.94zM130.36 28.07c-15.4 0-30.14-.06-44.86.13-.94 0-2.46 1.84-2.69 3-2 10-3.7 20.05-5.45 30.09-1.36 7.79-2.65 15.59-4 23.74h47l10-56.96zm338.11 139.18c-7-.6-14-1.1-21-1.85a54.88 54.88 0 0 1-9.25-1.83c-11.46-3.29-15.59-9.91-13.57-21.62 3.133-18.173 6.307-36.34 9.52-54.5 3.53-19.93 7.33-39.81 10.66-59.77 2.28-13.67 9.85-21.9 23.43-24.27a189.07 189.07 0 0 1 65.93-.22c13.26 2.35 17.11 8.08 16.48 21.3a25.78 25.78 0 0 1-.31 3.14c-1.67 9.73-3.37 19.46-5.08 29.3H516l5-30.18h-47l-20.07 113.93h47l5.61-30.19h29.15l-4.39 24.92c-.23 1.33-.43 2.67-.72 4-3.79 17.19-12.16 24.19-31.23 26-7 .68-14 1.22-21 1.83l-9.88.01zM677.16 2.83a24801.44 24801.44 0 0 1-4.59 23.67 14.93 14.93 0 0 1-.54 1.58h-37.95l-24.22 137h-29.27l24.16-136.89h-38.12c1.48-8.63 2.78-16.7 4.4-24.7.15-.72 2.38-1.44 3.65-1.45 12.49-.11 25-.06 37.47-.07h65l.01.86zM393.9 2l9.6 163.21h-28.71l-2.06-34.32h-49.55c-4.17 10.21-8.57 20.69-12.71 31.27-1 2.47-2.11 3.42-4.82 3.36-9-.18-18-.07-27.7-.07 2.61-6.45 5-12.52 7.51-18.56A191532.92 191532.92 0 0 0 343.63 5.64c1.15-2.8 2.37-3.79 5.43-3.75 14.74.18 29.48.11 44.84.11zm-22.78 102.6l-4.6-76-1.18-.14-31.23 76.13 37.01.01zM194 2.14h96l-4.42 25.93h-4.69c-19.27 0-38.54.06-57.8-.06-3.18 0-4.6.52-5.17 4.2-1.95 12.71-4.48 25.33-6.86 38.39h64.27c-1.1 6.7-2 13-3.19 19.2-1.28 7-1.36 6.95-8.66 6.95h-57L199 139.21h66.9l-4.55 25.93h-96.08L194 2.14z",fill:"#F15959"}),Object(n.b)("path",{d:"M.3 355.87c2.19-11.33 4.54-22.64 6.55-34 5.66-32 19.91-114.9 21.2-121.71.59-3.12 4.45-3 7.27-3.09 21.57-.68 58.62-1.46 82.74 3.86 8.36 1.84 12 8.46 10.81 16.82-1.6 11.3-3.3 22.6-5.49 33.8-3.3 16.8-9.75 23.36-27.23 25.9-.9.13-2.86.78-3.52.93 1.34.33 2.67.76 4 1 14.65 2.35 19.65 9 17.34 23.62-1.7 10.73-3.71 21.4-5.49 32.11-2.23 13.46-11 20.46-23.56 21.63-16.77 1.56-33.66 1.88-50.5 2.39-5.89.18-31 .11-32.56.11-1.33-.01-1.68-2.75-1.56-3.37zm99.16-132.81h-46.4l-7.49 42c15 0 29.63.06 44.27-.13 1 0 2.67-1.79 2.88-3 2.35-12.74 4.48-25.61 6.74-38.86v-.01zM33.76 333.6c14 0 27.72-.14 41.45.09 3.94.07 5.68-1 5.79-5.11.08-2.9 1.07-5.77 1.58-8.66 1.653-9.333 3.287-18.69 4.9-28.07a7.93 7.93 0 0 0-2-.74c-13.76-.06-27.51-.17-41.26.05-1.35 0-3.58 2-3.84 3.39C38 307.39 36 320.28 33.76 333.6zM638.23 359c7.72-43.61 15.34-86.57 22.93-129.53 1.63-9.25 3-18.54 4.83-27.75.33-1.65 2.23-4.24 3.44-4.26 14.85-.3 29.7-.19 45.13-.19l16.69 135.42 1.18.08L756.2 197.5H785l-28.24 161.3h-47.88l-16.74-135.06-1.17-.17L667.16 359h-28.93zm-484.37-.65c-16.57-3-20.61-8.51-17.84-25.27 6-36.5 12.94-72.85 19-109.33 2.59-15.46 11.27-23.93 26.3-25.93 21.18-2.82 42.43-3.49 63.5.72 12 2.4 16.69 9.4 14.65 21.63-5.27 31.59-10.8 63.13-16.23 94.69-.88 5.08-1.87 10.14-2.71 15.22-3.27 19.58-11.2 27.19-30.78 29-8.75.85-46.2 1-55.89-.73zm57-23.73l19.78-112.83h-46.42l-19.79 112.83h46.43zm407.23-136.05c12.48 2.23 17 9.13 14.91 21.83-5.19 31.41-10.7 62.78-16.08 94.16-1 5.62-2 11.24-2.94 16.86-2.89 16.92-9.09 23.71-26.05 26.74a176 176 0 0 1-60.23.28c-16.89-2.83-21-8.74-18.12-25.61a6231.047 6231.047 0 0 1 19.5-109.81c3.26-17.38 11.09-23.91 28.79-25.66 9.13-.9 49.44-.71 60.22 1.21zm-33.67 136.09l19.76-112.79h-46.44L538 334.66h46.42zm-283.54-30.18l-5.25 30H342l6.43-35.58c-6.87-2.49-13.67-5-20.48-7.41-15.49-5.54-31-11.13-46.51-16.52-2.76-1-3.87-2.2-3.33-5.15C281 253.93 284 238 286.67 222c2.31-13.79 10.3-21.5 23.81-23.7 21.7-3.54 43.45-4 65.09.16 12.54 2.41 16.85 9.16 15.08 21.81-.74 5.29-1.57 10.56-2.43 15.83-.82 5.05-1.74 10.09-2.64 15.29h-28.72l4.83-29.53h-46.32L309 257.34l71.19 25.42c-3.46 18.75-6.6 37.06-10.29 55.25-2.32 11.45-10.46 17.58-21.33 19.66a179 179 0 0 1-63.49.73c-16.91-2.83-20.76-9.23-18-26.3 1.31-8 2.68-16 4.37-23.9.3-1.42 2.26-3.5 3.52-3.55 8.47-.33 16.89-.17 25.91-.17zm120.58 54.69l23.88-136.24h-37.6c1.45-8.34 2.7-16.05 4.26-23.7.18-.86 2.11-1.93 3.24-1.94 33.37-.1 66.74-.08 101-.08-1.35 8.17-2.48 15.88-4.07 23.5-.2 1-2.81 2-4.32 2-11 .17-22 .09-33.54.09-2.3 12.94-4.59 25.72-6.83 38.51-5.53 31.52-11 63-16.67 94.54-.23 1.27-2.05 3.16-3.19 3.19-8.62.25-17.19.13-26.16.13z",fill:"#6BC7EE"})))},b=a(192),f=b.a.withComponent("header",{target:"e19llwx61"}),h=Object(i.a)(p.a,{target:"e19llwx60"})({name:"1lphx9a",styles:"display:block;width:200px;text-decoration:none;background-image:linear-gradient(transparent 92%,#2160ad 0);"}),y=function(){return Object(n.b)(f,{marginBottom:"4"},Object(n.b)("div",{style:{margin:"0 auto",maxWidth:960,padding:"1.45rem 1.0875rem"}},Object(n.b)(b.c,{position:"absolute",top:"auto",left:"-10000px",width:"1px",height:"1px",overflow:"hidden",textStyle:{transform:"translateZ(0)"}},"React Boston"),Object(n.b)(h,{to:"/"},Object(n.b)(u,null))))};y.propTypes={siteTitle:c.a.string},y.defaultProps={siteTitle:""};var m=y,g=b.a.withComponent("footer",{target:"ed5cwyi1"}),j=Object(i.a)(b.b.withComponent("a",{target:"ed5cwyi2"}),{target:"ed5cwyi0"})({name:"g9l8zz",styles:"color:#2160ad;&:hover,&:focus{text-decoration:none;}"}),w=function(){return Object(n.b)(g,{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gridGap:"4px",textAlign:"center",alignItems:"center"},Object(n.b)(j,{href:"http://confcodeofconduct.com/"},"Code of Conduct"),Object(n.b)(j,{href:"https://twitter.com/ReactBoston"},"ReactBoston on Twitter"),Object(n.b)(j,{href:"https://meetup.com/ReactJS-Boston/"},"ReactJS Boston Meetup"))},T=a(197),O=a(203),v=(a(204),b.a.withComponent("main",{target:"e1gvx0mt0"})),z=function(t){var e=t.children;return Object(n.b)(p.b,{query:"755544856",render:function(t){return Object(n.b)(O.a,{theme:T.a},Object(n.b)(m,{siteTitle:t.site.siteMetadata.title}),Object(n.b)("div",{style:{margin:"0 auto",maxWidth:960,padding:"0px 1.0875rem 1.45rem",paddingTop:0}},Object(n.b)(v,{marginBottom:"9"},e),Object(n.b)(w,null)))},data:r})};z.propTypes={children:c.a.node.isRequired};e.a=z}}]);
//# sourceMappingURL=component---src-pages-page-2-js-792f3f66b4474b81dee9.js.map