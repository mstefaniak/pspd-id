(this["webpackJsonppspd-id"]=this["webpackJsonppspd-id"]||[]).push([[0],{12:function(e,t,n){},13:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var s=n(1),r=n.n(s),a=n(6),c=n.n(a),o=(n(12),n(7)),i=n(4),d=(n(13),n(2)),l=n.n(d),u=n(3),m=n.p+"static/media/logo.860f766d.png",p="https://crm-test.pspd.org.pl/api",x=new Headers({}),g=function(){var e=Object(u.a)(l.a.mark((function e(t,n){var s,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(p,"/user/token"),{method:"POST",body:JSON.stringify({username:t,password:n}),headers:x});case 2:return s=e.sent,e.next=5,s.json();case 5:return r=e.sent,e.abrupt("return",r.token);case 7:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),j=function(){var e=Object(u.a)(l.a.mark((function e(t,n){var s,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s=g(t,n),e.next=3,fetch("".concat(p,"/user/login"),{method:"POST",body:JSON.stringify({username:t,password:n,token:s}),headers:x});case 3:return r=e.sent,e.abrupt("return",r.status<400);case 5:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),f=function(){var e=Object(u.a)(l.a.mark((function e(t,n){var s,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j(t,n);case 2:if(e.sent){e.next=5;break}return e.abrupt("return",!1);case 5:return e.next=7,fetch("".concat(p,"/data/userdata"),{method:"GET",headers:x});case 7:return s=e.sent,e.next=10,s.json();case 10:return r=e.sent,e.abrupt("return",r);case 12:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),b=n(0),h=function(e){var t=e.onSuccess,n=Object(s.useState)(),r=Object(i.a)(n,2),a=r[0],c=r[1],o=Object(s.useState)(),d=Object(i.a)(o,2),p=d[0],x=d[1],g=Object(s.useState)(!1),j=Object(i.a)(g,2),h=j[0],v=j[1],y=function(){var e=Object(u.a)(l.a.mark((function e(n){var s;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.preventDefault(),!p||!a){e.next=6;break}return e.next=4,f(a,p);case 4:(s=e.sent)?t(s):v(!0);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(b.jsx)("div",{className:"min-h-screen flex items-start justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8",children:Object(b.jsxs)("div",{className:"max-w-md w-full space-y-8",children:[Object(b.jsxs)("div",{children:[Object(b.jsx)("img",{src:m,alt:"logo",className:"-mb-20 -mt-10"}),Object(b.jsx)("h2",{className:"text-center text-2xl font-extrabold text-gray-900",children:"LEGITYMACJA"})]}),h&&Object(b.jsx)("div",{className:"bg-red-200 text-red-600 p-4 text-center rounded",children:"Niepoprawny email i/lub has\u0142o"}),Object(b.jsxs)("form",{className:"mt-8 space-y-6",onSubmit:y,children:[Object(b.jsx)("input",{type:"hidden",name:"remember",value:"true"}),Object(b.jsxs)("div",{className:"rounded-md shadow-sm -space-y-px",children:[Object(b.jsxs)("div",{children:[Object(b.jsx)("label",{htmlFor:"email-address",className:"sr-only",children:"Email"}),Object(b.jsx)("input",{value:a,onChange:function(e){c(e.target.value)},id:"email-address",name:"email",type:"email",autoComplete:"email",required:!0,className:"appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm",placeholder:"Email"})]}),Object(b.jsxs)("div",{children:[Object(b.jsx)("label",{htmlFor:"password",className:"sr-only",children:"Has\u0142o"}),Object(b.jsx)("input",{value:p,onChange:function(e){x(e.target.value)},id:"password",name:"password",type:"password",autoComplete:"current-password",required:!0,className:"appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm",placeholder:"Has\u0142o"})]})]}),Object(b.jsx)("div",{children:Object(b.jsx)("button",{type:"submit",className:"group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-yellow-600 hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500",children:"Zaloguj"})})]})]})})},v=function(e){var t=e.name,n=e.id,s=e.status,r=e.joinDate,a="current"===s;return Object(b.jsx)("div",{className:"sm:min-h-screen sm:flex sm:items-start sm:justify-center sm:bg-gray-50 sm:py-12",children:Object(b.jsxs)("div",{className:"sm:max-w-lg sm:shadow bg-white overflow-hidden sm:rounded-lg",children:[Object(b.jsxs)("div",{className:"px-4 py-1 sm:px-6 grid grid-cols-2",children:[Object(b.jsx)("h3",{className:"text-lg leading-6 font-medium text-gray-900 flex items-center",children:"Legitymacja"}),Object(b.jsx)("div",{className:"flex justify-end",children:Object(b.jsx)("img",{src:m,className:"App-logo",alt:"logo"})})]}),Object(b.jsx)("div",{className:"border-t border-gray-200",children:Object(b.jsxs)("dl",{children:[Object(b.jsxs)("div",{className:"bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6",children:[Object(b.jsx)("dt",{className:"text-sm font-medium text-gray-500",children:"Name"}),Object(b.jsx)("dd",{className:"mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2",children:t})]}),Object(b.jsxs)("div",{className:"bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6",children:[Object(b.jsx)("dt",{className:"text-sm font-medium text-gray-500",children:"Numer"}),Object(b.jsx)("dd",{className:"mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2",children:n})]}),Object(b.jsxs)("div",{className:"bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6",children:[Object(b.jsx)("dt",{className:"text-sm font-medium text-gray-500",children:"Sk\u0142adka op\u0142acona"}),Object(b.jsx)("dd",{className:"mt-1 text-sm text-green-600 sm:mt-0 sm:col-span-2",children:Object(b.jsx)("span",{className:a?"text-green-600":"text-red-600",children:a?"TAK":"NIE"})})]}),Object(b.jsxs)("div",{className:"bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6",children:[Object(b.jsx)("dt",{className:"text-sm font-medium text-gray-500",children:"Data przyst\u0105pienia"}),Object(b.jsx)("dd",{className:"mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2",children:(new Intl.DateTimeFormat).format(new Date(r))})]})]})})]})})},y=function(){var e=Object(s.useState)(),t=Object(i.a)(e,2),n=t[0],r=t[1];return n?Object(b.jsx)(v,Object(o.a)({},n)):Object(b.jsx)(h,{onSuccess:function(e){r(e)}})},O=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,17)).then((function(t){var n=t.getCLS,s=t.getFID,r=t.getFCP,a=t.getLCP,c=t.getTTFB;n(e),s(e),r(e),a(e),c(e)}))},w=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function N(e){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}c.a.render(Object(b.jsx)(r.a.StrictMode,{children:Object(b.jsx)(y,{})}),document.getElementById("root")),O(),function(){if("serviceWorker"in navigator){if(new URL("/pspd-id",window.location.toString()).origin!==window.location.origin)return;window.addEventListener("load",(function(){var e="".concat("/pspd-id","/service-worker.js");w?(!function(e){fetch(e).then((function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):N(e)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://goo.gl/SC7cgQ")}))):N(e)}))}}()}},[[16,1,2]]]);
//# sourceMappingURL=main.a998fc54.chunk.js.map