"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[237],{8784:(a,e,t)=>{t.r(e),t.d(e,{default:()=>O});var l=t(2263),n=t(3593),c=t(7294);const m="container_tNkF",r="image_ffwm",i="text_or9Q",s=()=>c.createElement("div",{className:m},c.createElement("div",null,c.createElement("div",{className:r},c.createElement("img",{src:"img/about_office.jpg"})),c.createElement("div",{className:i},c.createElement("p",null,"INIAD.ts\u306f\u3001INIAD(\u6771\u6d0b\u5927\u5b66\u60c5\u5831\u9023\u643a\u5b66\u90e8)\u516c\u8a8d\u30b5\u30fc\u30af\u30eb\u3067\u3059\u3002 TypeScript\u3092\u7528\u3044\u305fWeb\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u958b\u767a\u3092\u884c\u3063\u3066\u3044\u307e\u3059\u3002 \u5b66\u5916\u306e\u30aa\u30d5\u30a3\u30b9\u3067\u6bce\u65e5\u6d3b\u52d5\u3057\u3066\u3044\u307e\u3059\u3002"))),c.createElement("div",null,c.createElement("div",{className:r},c.createElement("img",{src:"img/about_coding.jpg"})),c.createElement("div",{className:i},c.createElement("p",null,"\u666e\u6bb5\u306fTypeScript\u3068React\u3092\u7528\u3044\u3066\u958b\u767a\u3092\u884c\u3063\u3066\u3044\u307e\u3059\u3002 \u30d5\u30ed\u30f3\u30c8\u30a8\u30f3\u30c9\u306fNext.js\u3001\u30d0\u30c3\u30af\u30a8\u30f3\u30c9\u306ffrourio\u3092\u4e3b\u306b\u4f7f\u7528\u3057\u3066\u3044\u307e\u3059\u3002")))),o=[{title:"first commit",description:"\u65b0\u5165\u751f\u306b\u5411\u3051\u3066Git\u8b1b\u7fd2\u3092\u884c\u3063\u305f\u3002",date:{year:23,month:4}},{title:"\u6df1\u591c2\u6642\u307e\u3067\u30aa\u30bb\u30ed\u8b1b\u7fd2",description:"React\u3084CSS\u3092\u5b66\u3073\u59cb\u3081\u305f\u3002",image:"img/activity_reversi.png",date:{year:23,month:4}},{title:"\u7d2f\u8a088\u6642\u9593\u306e\u30de\u30a4\u30f3\u30b9\u30a4\u30fc\u30d1\u30fc\u8b1b\u7fd2",description:"WSL2\u306e\u5c0e\u5165\u3068\u3001React\u3078\u306e\u66f4\u306a\u308b\u7406\u89e3\u3092\u6df1\u3081\u305f\u3002",image:"img/activity_minesweeper.png",date:{year:23,month:5}},{title:"\u6b7b\u95d8\u306e\u672b\u3001\u30c6\u30c8\u30ea\u30b9\u3092\u5236\u4f5c",description:"ReactHooks\u3092\u8a73\u3057\u304f\u5b66\u3093\u3060\u3002",date:{year:23,month:5}},{title:"\u30d0\u30c3\u30af\u30a8\u30f3\u30c9\u8b1b\u7fd2",description:"Frourio\u3084Prisma\u3092\u7528\u3044\u3066\u30d0\u30c3\u30af\u30a8\u30f3\u30c9\u306e\u77e5\u8b58\u3092\u6df1\u3081\u305f\u3002",date:{year:23,month:7}},{title:"\u5b66\u796d\u3078\u5411\u3051\u305f\u30b2\u30fc\u30e0\u5236\u4f5c",description:"\u672c\u683c\u7684\u306a\u30c1\u30fc\u30e0\u958b\u767a\u306e\u7d4c\u9a13\u3092\u7a4d\u3093\u3060\u3002",date:{year:23,month:8}}],E="container_wOCH",d="item_Qxim",p="content_F3NA",u="date_dY2j",v="image__QnM",g=()=>{const a=(0,c.useMemo)((()=>{const a=o.map((a=>a.date.year));return Array.from(new Set(a)).sort(((a,e)=>a-e)).map((a=>{const e=o.filter((e=>e.date.year===a)),t=e.map((a=>a.date.month)),l=Array.from(new Set(t)).sort(((a,e)=>a-e));return{year:a,months:l.map((a=>({month:a,activities:e.filter((e=>e.date.month===a))})))}}))}),[]);return c.createElement("div",{className:E},a.map((a=>a.months.map((e=>c.createElement("div",{key:e.month,className:d},c.createElement("div",{className:u},c.createElement("i",null,a.year,"/"),c.createElement("i",null,`00${e.month}`.slice(-2))),c.createElement("div",{className:p},e.activities.map(((a,e)=>c.createElement("div",{key:e},c.createElement("h3",null,a.title),c.createElement("p",null,a.description),void 0!==a.image&&c.createElement("div",{className:v},c.createElement("img",{src:a.image,alt:a.title}))))))))))))},h="container_hhg0",N="title_OlGw",_="logos_BIAJ",f="typing_ZRlV",y="typingAnim_vW5Z",k="scroll_Xxj6",w="button_CFwH",b="TypeScript \u30a8\u30f3\u30b8\u30cb\u30a2\u30b5\u30fc\u30af\u30eb",I=()=>{const[a,e]=(0,c.useState)("");return(0,c.useEffect)((()=>{const t=setInterval((()=>{if(a.length>=20){const a=document.getElementsByClassName(f)[0];clearInterval(t),a.classList.add(y),setTimeout((()=>{a.classList.remove(y),a.classList.remove(f)}),3e3)}e(b.slice(0,a.length+1))}),100);return()=>{clearInterval(t)}}),[a.length]),c.createElement("div",{className:h},c.createElement("div",{className:_},c.createElement("img",{src:"/img/logo.png",alt:"INIAD.ts logo"}),c.createElement("img",{src:"/img/iniad.png",alt:"INIAD logo"})),c.createElement("div",{className:N},c.createElement("h1",null,"INIAD.ts"),c.createElement("p",{className:f},a)),c.createElement("div",{className:k,onClick:()=>{const a=document.getElementsByClassName("navbar")[0].clientHeight;window.scrollTo({top:window.innerHeight-a,behavior:"smooth"})}},c.createElement("div",{className:w}),c.createElement("span",null,"see more.")))};var A=t(9960);const C=a=>{let{color:e="#fff"}=a;return c.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",strokeWidth:"2",stroke:e,fill:"none",strokeLinecap:"round",strokeLinejoin:"round"},c.createElement("path",{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}),c.createElement("path",{d:"M16 6h3a1 1 0 0 1 1 1v11a2 2 0 0 1 -4 0v-13a1 1 0 0 0 -1 -1h-10a1 1 0 0 0 -1 1v12a3 3 0 0 0 3 3h11"}),c.createElement("path",{d:"M8 8l4 0"}),c.createElement("path",{d:"M8 12l4 0"}),c.createElement("path",{d:"M8 16l4 0"}))},S=a=>{let{color:e="#24292f"}=a;return c.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",fill:e,viewBox:"0 0 24 24"},c.createElement("title",null,"GitHub"),c.createElement("path",{d:"M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"}))},j="container_Zrtv",M="inner_RHmS",x="image_C1eb",T="text_Tmyd",Z="title_w1DE",D="name_TT3y",H="links_DS2k",F="description_mM8V",L=()=>c.createElement("div",{className:j},c.createElement("div",{className:M},c.createElement("div",{className:x},c.createElement("img",{src:"https://github.com/g-ratie.png"})),c.createElement("div",{className:T},c.createElement("h2",{className:Z},"\u4ee3\u8868"),c.createElement("p",{className:D},"g-ratie"),c.createElement("div",{className:H},c.createElement(A.Z,{href:"https://github.com/g-ratie"},c.createElement(S,null)),c.createElement(A.Z,{to:"/members/g-ratie"},c.createElement(C,null))),c.createElement("p",{className:F},"aaaaaaaaaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaaaaaaaaaa"))),c.createElement("div",{className:M},c.createElement("div",{className:x},c.createElement("img",{src:"https://github.com/konjikun.png"})),c.createElement("div",{className:T},c.createElement("h2",{className:Z},"\u526f\u4ee3\u8868"),c.createElement("p",{className:D},"konjikun"),c.createElement("div",{className:H},c.createElement(A.Z,{href:"https://github.com/konjikun"},c.createElement(S,null)),c.createElement(A.Z,{to:"/members/konjikun"},c.createElement(C,null))),c.createElement("p",{className:F},"aaaaaaaaaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaaaaaaaaaa")))),R="container_iMhC",B=()=>c.createElement("div",{className:R},"\u30a2\u30af\u30c6\u30a3\u30d6\u30e1\u30f3\u30d0\u30fc\u6570",c.createElement("span",null,c.createElement("span",null,"15\u4eba")," / 51\u4eba")),W="container_bfhl",G="contentTitle_Kvp0",Q="about_CzAF",z="activity_rFo3",O=()=>{const{siteConfig:a}=(0,l.Z)();return c.createElement(n.Z,{title:a.title,description:"INIAD.ts\u30b5\u30a4\u30c8"},c.createElement("div",{className:W},c.createElement(I,null),c.createElement("div",{className:Q},c.createElement("h2",{className:G,id:"about"},c.createElement("a",{href:"/#about"},c.createElement("span",null,"About"),c.createElement("p",null,"\u30b5\u30fc\u30af\u30eb\u306b\u3064\u3044\u3066"))),c.createElement(s,null)),c.createElement(B,null),c.createElement(L,null),c.createElement("div",{className:z},c.createElement("h2",{className:G,id:"activity"},c.createElement("a",{href:"/#activity"},c.createElement("span",null,"Activity"),c.createElement("p",null,"\u4eca\u5e74\u5ea6\u306e\u6d3b\u52d5"))),c.createElement(g,null))))}}}]);