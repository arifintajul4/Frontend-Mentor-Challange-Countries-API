(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{24:function(e,t,c){},34:function(e,t,c){"use strict";c.r(t);var n=c(1),s=c.n(n),l=c(16),a=c.n(l),i=(c(24),c(7)),o=c(9),r=c(2),d=c(0);function j(){var e=Object(n.useContext)(g),t=e.isDark,c=e.setIsDark,s=function(e){localStorage.setItem("theme",e),c("dark"===e);var t=document.querySelector("html");t.classList.add(localStorage.getItem("theme")),"dark"===e?t.classList.remove("light"):t.classList.remove("dark")};return Object(n.useEffect)((function(){document.querySelector("html").classList.add(localStorage.getItem("theme")),c("dark"===localStorage.getItem("theme"))}),[c]),Object(d.jsx)("div",{className:"py-6 shadow-2xl  ".concat(t?"bg-blue text-white ":"bg-white border-gray border-b-2 border-opacity-25"),children:Object(d.jsxs)("div",{className:"container flex justify-between",children:[Object(d.jsx)("div",{children:Object(d.jsx)("h1",{className:"font-bold text-xl",children:"Where in the world?"})}),t?Object(d.jsxs)("button",{className:"text-yellow-500 flex items-center",onClick:function(){s("light")},children:[Object(d.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-5 w-5",viewBox:"0 0 20 20",fill:"currentColor",children:Object(d.jsx)("path",{fillRule:"evenodd",d:"M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z",clipRule:"evenodd"})}),Object(d.jsx)("span",{className:"ml-2 font-bold",children:"Light Mode"})]}):Object(d.jsxs)("button",{className:"text-blue-darker flex items-center",onClick:function(){s("dark")},children:[Object(d.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-5 w-5",viewBox:"0 0 20 20",fill:"currentColor",children:Object(d.jsx)("path",{d:"M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"})}),Object(d.jsx)("span",{className:"ml-2 font-bold",children:"Dark Mode"})]})]})})}function b(e){var t=e.img,c=e.title,s=e.population,l=e.region,a=e.capital,i=Object(n.useContext)(g).isDark;return Object(d.jsxs)("div",{className:"rounded shadow overflow-hidden ".concat(i&&"bg-blue"),children:[Object(d.jsx)("img",{src:t,className:"w-full h-44",alt:"".concat(c," Flag")}),Object(d.jsxs)("div",{className:"px-4 pt-6 pb-10",children:[Object(d.jsx)("h1",{className:"font-bold text-lg mb-4",children:c}),Object(d.jsxs)("ul",{className:"font-semibold",children:[Object(d.jsxs)("li",{children:["Population:"," ",Object(d.jsx)("span",{className:"font-light",children:(new Intl.NumberFormat).format(s)})]}),Object(d.jsxs)("li",{children:["Region: ",Object(d.jsx)("span",{className:"font-light",children:l})]}),Object(d.jsxs)("li",{children:["Capital: ",Object(d.jsx)("span",{className:"font-light",children:a})]})]})]})]})}function u(){return Object(d.jsx)("div",{className:"rounded shadow overflow-hidden",children:Object(d.jsxs)("div",{className:"animate-pulse",children:[Object(d.jsx)("div",{className:" bg-blue h-44 w-full"}),Object(d.jsxs)("div",{className:"px-4 pt-6 pb-10",children:[Object(d.jsx)("div",{className:"h-4 bg-blue rounded w-3/4 mb-4"}),Object(d.jsx)("div",{className:"h-4 bg-blue rounded mb-2"}),Object(d.jsx)("div",{className:"h-4 bg-blue rounded w-5/6"})]})]})})}var h=function(){var e=Object(n.useContext)(g).isDark,t=Object(n.useState)(null),c=Object(i.a)(t,2),s=c[0],l=c[1],a=Object(n.useState)(""),r=Object(i.a)(a,2),j=r[0],h=r[1];Object(n.useEffect)((function(){m()}),[]);var m=function(){fetch("https://restcountries.eu/rest/v2/all").then((function(e){return e.json()})).then((function(e){return l(e)})).catch((function(e){return alert(e)}))};return Object(d.jsx)("div",{children:Object(d.jsx)("div",{className:"".concat(e?"bg-blue-dark text-white":"bg-gray-light"," min-h-screen"),children:Object(d.jsxs)("div",{className:"container pt-10",children:[Object(d.jsxs)("div",{className:"flex flex-col md:flex-row justify-between",children:[Object(d.jsx)("form",{onSubmit:function(e){e.preventDefault(),""===j?m():fetch("https://restcountries.eu/rest/v2/name/".concat(j)).then((function(e){return e.json()})).then((function(e){404!==e.status?l(e):l([])})).catch((function(e){return console.log(e)}))},children:Object(d.jsxs)("div",{className:"relative ".concat(e?"text-blue-dark":"text-gray-600 focus-within:text-gray-400"),children:[Object(d.jsx)("span",{className:"absolute inset-y-0 left-0 flex items-center pl-2",children:Object(d.jsx)("button",{type:"submit",className:"md:pl-5 pl-2 focus:outline-none focus:shadow-outline ".concat(e?"text-white":"text-blue-dark"),children:Object(d.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:Object(d.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"})})})}),Object(d.jsx)("input",{type:"text",className:"py-3 pl-11 md:pl-16 md:w-96 w-full rounded shadow text-sm font-light focus:outline-none ".concat(e&&"bg-blue text-white"),placeholder:"Search for a country...",onChange:function(e){return h(e.target.value)}})]})}),Object(d.jsx)("div",{className:"mt-5 md:mt-0",children:Object(d.jsxs)("select",{defaultValue:"none",onChange:function(e){var t=e.target.value;l(null),fetch("https://restcountries.eu/rest/v2/region/".concat(t)).then((function(e){return e.json()})).then((function(e){return l(e)})).catch((function(e){return console.log(e)}))},className:"md:px-7 px-4 py-3 rounded shadow text-sm font-semibold focus:outline-none ".concat(e?"bg-blue text-white":"bg-white"),children:[Object(d.jsx)("option",{value:"none",className:"font-semibold",disabled:!0,children:"Filter by region"}),Object(d.jsx)("option",{value:"Africa",className:"font-semibold",children:"Africa"}),Object(d.jsx)("option",{value:"Americas",className:"font-semibold",children:"America"}),Object(d.jsx)("option",{value:"Asia",className:"font-semibold",children:"Asia"}),Object(d.jsx)("option",{value:"Europe",className:"font-semibold",children:"Europe"}),Object(d.jsx)("option",{value:"Oceania",className:"font-semibold",children:"Oceania"})]})})]}),Object(d.jsx)("div",{children:null==s?Object(d.jsxs)("div",{className:"grid grid-cols-1 md:grid-cols-4 gap-16 mt-5",children:[Object(d.jsx)(u,{}),Object(d.jsx)(u,{}),Object(d.jsx)(u,{}),Object(d.jsx)(u,{})]}):Object(d.jsxs)("div",{className:"grid grid-cols-1 md:grid-cols-4 gap-16 mt-5",children:[s.map((function(e,t){return Object(d.jsx)(o.b,{to:"/detail/".concat(e.alpha2Code),children:Object(d.jsx)(b,{img:e.flag,title:e.name,population:e.population,region:e.region,capital:e.capital},t)},t)})),s.length<=0&&Object(d.jsx)("div",{className:"md:col-span-4 w-full text-center mt-10",children:Object(d.jsx)("p",{className:"font-semibold font-xl",children:"Negara tidak ditemukan!"})})]})})]})})})},m=c(19),x=function(e){var t=Object(n.useContext)(g).isDark;return Object(d.jsx)("button",{className:"".concat(null===e||void 0===e?void 0:e.className," ").concat(t&&"bg-blue text-white"," ").concat("py-2 px-4 shadow rounded bg-white"),children:e.children})};function O(){var e=Object(r.f)().countryCode,t=Object(n.useContext)(g).isDark,c=Object(n.useState)(null),s=Object(i.a)(c,2),l=s[0],a=s[1],j=Object(n.useState)([]),b=Object(i.a)(j,2),u=b[0],h=b[1],O=function e(t,c){fetch("https://restcountries.eu/rest/v2/alpha/".concat(t[c])).then((function(e){return e.json()})).then((function(n){c++,t.length!==c&&e(t,c),u.push(n.name),h(Object(m.a)(u))})).catch((function(e){return console.log(e)}))};return Object(n.useEffect)((function(){fetch("https://restcountries.eu/rest/v2/alpha/".concat(e)).then((function(e){return e.json()})).then((function(e){a(e),e.borders.length>0&&O(e.borders,0)})).catch((function(e){return console.log(e)}))}),[]),Object(d.jsx)("div",{className:"min-h-screen ".concat(t?"bg-blue-dark text-white":"bg-gray-light"),children:Object(d.jsxs)("div",{className:"container pb-20 pt-10",children:[Object(d.jsx)(o.b,{to:"/",children:Object(d.jsxs)(x,{className:"flex",children:[Object(d.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6 mr-3",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:Object(d.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M10 19l-7-7m0 0l7-7m-7 7h18"})}),"Back"]})}),Object(d.jsxs)("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-10 mt-10",children:[null!==l?Object(d.jsx)("img",{src:null===l||void 0===l?void 0:l.flag,className:"w-full ".concat(!t&&"border-2"),alt:"".concat(null===l||void 0===l?void 0:l.name," Flag")}):Object(d.jsx)("div",{className:"w-full animate-pulse bg-blue h-96"}),Object(d.jsx)("div",{children:null!==l?Object(d.jsxs)("div",{children:[Object(d.jsx)("h1",{className:"font-bold text-2xl mb-4",children:null===l||void 0===l?void 0:l.name}),Object(d.jsxs)("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-10",children:[Object(d.jsxs)("ul",{children:[Object(d.jsxs)("li",{children:[Object(d.jsx)("strong",{children:"Native Name: "}),null===l||void 0===l?void 0:l.nativeName]}),Object(d.jsxs)("li",{children:[Object(d.jsx)("strong",{children:"Population: "}),(new Intl.NumberFormat).format(null===l||void 0===l?void 0:l.population)]}),Object(d.jsxs)("li",{children:[Object(d.jsx)("strong",{children:"Region: "}),null===l||void 0===l?void 0:l.region]}),Object(d.jsxs)("li",{children:[Object(d.jsx)("strong",{children:"Sub Region: "}),null===l||void 0===l?void 0:l.subregion]}),Object(d.jsxs)("li",{children:[Object(d.jsx)("strong",{children:"Capital: "}),null===l||void 0===l?void 0:l.capital]})]}),Object(d.jsxs)("ul",{children:[Object(d.jsxs)("li",{children:[Object(d.jsx)("strong",{children:"Top Level Domain :"})," ",null===l||void 0===l?void 0:l.topLevelDomain]}),Object(d.jsxs)("li",{children:[Object(d.jsx)("strong",{children:"Currencies :"})," ",null===l||void 0===l?void 0:l.currencies[0].name]}),Object(d.jsxs)("li",{children:[Object(d.jsx)("strong",{children:"Languages :"})," ",null===l||void 0===l?void 0:l.languages.map((function(e,t){return(null===l||void 0===l?void 0:l.languages.length)-1!==t?"".concat(e.name,", "):e.name}))]})]})]}),Object(d.jsxs)("div",{className:"mt-20 grid grid-cols-1 md:grid-cols-6",children:[Object(d.jsx)("h6",{className:"font-bold text-base col-span-0 md:col-span-2",children:"Border Countries:"}),Object(d.jsx)("div",{className:"col-span-0 md:col-span-4",children:Object(d.jsx)("div",{className:"flex flex-wrap",children:u.length>0?u.map((function(e,c){return Object(d.jsx)("div",{className:"rounded shadow px-4 py-2 mr-4 mb-2 ".concat(t&&"bg-blue text-white"),children:e},c)})):"N/A"})})]})]}):Object(d.jsxs)("div",{className:"animate-pulse",children:[Object(d.jsx)("div",{className:"h-4 bg-blue w-2/5 rounded mb-4"}),Object(d.jsx)("div",{className:"h-4 bg-blue w-2/3 rounded mb-1"}),Object(d.jsx)("div",{className:"h-4 bg-blue w-2/4 rounded mb-1"}),Object(d.jsx)("div",{className:"h-4 bg-blue w-2/5 rounded mb-10"}),Object(d.jsx)("div",{className:"h-4 bg-blue w-1/2 rounded mb-1"})]})})]})]})})}var g=Object(n.createContext)({}),v=function(){var e=Object(n.useState)(!1),t=Object(i.a)(e,2),c=t[0],s=t[1];return Object(d.jsx)(o.a,{children:Object(d.jsxs)(g.Provider,{value:{isDark:c,setIsDark:s},children:[Object(d.jsx)(j,{}),Object(d.jsxs)(r.c,{children:[Object(d.jsx)(r.a,{path:"/detail/:countryCode",children:Object(d.jsx)(O,{})}),Object(d.jsx)(r.a,{path:"/",children:Object(d.jsx)(h,{})})]})]})})},f=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,35)).then((function(t){var c=t.getCLS,n=t.getFID,s=t.getFCP,l=t.getLCP,a=t.getTTFB;c(e),n(e),s(e),l(e),a(e)}))};a.a.render(Object(d.jsx)(s.a.StrictMode,{children:Object(d.jsx)(v,{})}),document.getElementById("root")),f()}},[[34,1,2]]]);
//# sourceMappingURL=main.23ab312f.chunk.js.map