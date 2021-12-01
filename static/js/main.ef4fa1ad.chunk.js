(this["webpackJsonpreact_todo-app"]=this["webpackJsonpreact_todo-app"]||[]).push([[0],{13:function(e,t,n){},14:function(e,t,n){},15:function(e,t,n){},17:function(e,t,n){"use strict";n.r(t);var c=n(1),o=n(8),l=n.n(o),a=(n(13),n(14),n(15),n(3)),i=n(7),r=n(2),s=n(0),d=function(e){var t=e.todo,n=e.handleTodoEdit,o=e.completedChange,l=e.handleRemove,a=Object(c.useState)(!1),i=Object(r.a)(a,2),d=i[0],u=i[1],j=Object(c.useState)(t.title),b=Object(r.a)(j,2),h=b[0],m=b[1];return Object(s.jsx)(s.Fragment,{children:d?Object(s.jsx)("input",{autoFocus:!0,type:"text",value:h,className:"editing",onKeyUp:function(e){var c=e.keyCode;h.length>1&&13===c?(n(t,h),u(!1)):27===c&&u(!1)},onChange:function(e){var t=e.target.value;m(t)}}):Object(s.jsxs)("li",{onDoubleClick:function(){u(!0)},className:t.completed?"completed":"list-item",children:[Object(s.jsxs)("div",{className:"view",children:[Object(s.jsx)("input",{type:"checkbox",className:"toggle",onClick:function(){o(t)}}),Object(s.jsx)("label",{htmlFor:"title",children:t.title}),Object(s.jsx)("button",{type:"button",className:"destroy","aria-label":"Destroy",onClick:function(){l(t)}})]}),Object(s.jsx)("input",{type:"text",className:"edit"})]})})},u=function(e){var t=e.todos,n=e.toggleAll,c=e.handleRemove,o=e.handleTodoEdit,l=e.handleCompletedChange;return Object(s.jsxs)("section",{className:"main",children:[Object(s.jsxs)("label",{htmlFor:"toggle-all",style:{cursor:"pointer"},children:["Mark all as complete",Object(s.jsx)("input",{type:"checkbox",id:"toggle-all",onClick:n,className:"toggle-all"})]}),Object(s.jsx)("ul",{className:"todo-list",children:t.map((function(e){return Object(s.jsx)(d,{completedChange:l,todo:e,handleRemove:c,handleTodoEdit:o},e.id)}))})]})},j=function(e){var t=e.onFilterChange;return Object(s.jsxs)("ul",{className:"filters",children:[Object(s.jsx)("li",{children:Object(s.jsx)("a",{href:"#/",onClick:function(){t("all")},className:"selected",children:"All"})}),Object(s.jsx)("li",{children:Object(s.jsx)("a",{href:"#/active",onClick:function(){t("active")},children:"Active"})}),Object(s.jsx)("li",{children:Object(s.jsx)("a",{href:"#/completed",onClick:function(){t("completed")},children:"Completed"})})]})},b=function(e,t){return window.localStorage.setItem(e,JSON.stringify(t))};var h=function(){var e=Object(c.useState)([]),t=Object(r.a)(e,2),n=t[0],o=t[1],l=Object(c.useState)("all"),d=Object(r.a)(l,2),h=d[0],m=d[1],f=Object(c.useState)(""),p=Object(r.a)(f,2),O=p[0],x=p[1];Object(c.useEffect)((function(){var e;o((e="todos",JSON.parse(window.localStorage.getItem(e))||[]))}),[]);var g=n.filter((function(e){return!e.completed})),v="all"===h?n:n.filter((function(e){return"active"===h?!e.completed:e.completed}));return Object(s.jsxs)("section",{className:"todoapp",children:[Object(s.jsxs)("header",{className:"header",children:[Object(s.jsx)("h1",{children:"todos"}),Object(s.jsx)("form",{onSubmit:function(e){if(e.preventDefault(),O.length>1){var t={id:+new Date,title:O,completed:!1};o((function(e){return b("todos",[].concat(Object(i.a)(e),[t])),[].concat(Object(i.a)(e),[t])})),x("")}},children:Object(s.jsx)("input",{type:"text",value:O,onChange:function(e){var t=e.target.value;x(t)},className:"new-todo",placeholder:"What needs to be done?"})})]}),Object(s.jsx)(u,{todos:v,toggleAll:function(){o((function(e){var t=e.map((function(e){return Object(a.a)(Object(a.a)({},e),{},{completed:!e.completed})}));return b("todos",t),t}))},handleRemove:function(e){o((function(t){var n=t.filter((function(t){return t.id!==e.id}));return b("todos",n),n}))},handleTodoEdit:function(e,t){o((function(n){var c=n.map((function(n){return n.id===e.id?Object(a.a)(Object(a.a)({},e),{},{title:t}):n}));return b("todos",c),c}))},handleCompletedChange:function(e){o((function(t){var n=t.map((function(t){return t.id===e.id?Object(a.a)(Object(a.a)({},e),{},{completed:!e.completed}):t}));return b("todos",n),n}))}}),Object(s.jsxs)("footer",{className:"footer",children:[g.length>0&&Object(s.jsxs)("span",{className:"todo-count",children:[g.length,"items left"]}),Object(s.jsx)(j,{onFilterChange:m}),Object(s.jsx)("button",{type:"button",onClick:function(){o((function(e){var t=e.filter((function(e){return!e.completed}));return b("todos",t),t}))},className:"clear-completed",children:"Clear completed"})]})]})};l.a.render(Object(s.jsx)(h,{}),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.ef4fa1ad.chunk.js.map