(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{27:function(e,t,n){},39:function(e,t,n){},46:function(e,t,n){"use strict";n.r(t);var i=n(0),o=n(1),c=n.n(o),s=n(28),a=n.n(s),r=(n(39),n(14)),l=n(13),d=(n(27),n(8)),h=n(9),u=n(11),j=n(10),p=function(e){Object(u.a)(n,e);var t=Object(j.a)(n);function n(){var e;Object(d.a)(this,n);for(var i=arguments.length,o=new Array(i),c=0;c<i;c++)o[c]=arguments[c];return(e=t.call.apply(t,[this].concat(o))).state={credentials:{username:"",password:""}},e.login=function(t){console.log(e.state.credentials),fetch("https://evening-atoll-03641.herokuapp.com/auth/",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e.state.credentials)}).then((function(e){return e.json()})).then((function(t){return e.props.userLogin(t.token)})).catch((function(e){return console.error(e)}))},e.inputChanged=function(t){var n=e.state.credentials;n[t.target.name]=t.target.value,e.setState({credentials:n})},e}return Object(h.a)(n,[{key:"render",value:function(){return Object(i.jsxs)("div",{children:[Object(i.jsx)("h1",{children:"Login User Form"}),Object(i.jsxs)("label",{children:["Username:",Object(i.jsx)("input",{type:"text",name:"username",value:this.state.credentials.username,onChange:this.inputChanged})]}),Object(i.jsx)("br",{}),Object(i.jsxs)("label",{children:["Password:",Object(i.jsx)("input",{type:"password",name:"password",value:this.state.credentials.password,onChange:this.inputChanged})]}),Object(i.jsx)("br",{}),Object(i.jsx)("button",{onClick:this.login,children:"Login"})]})}}]),n}(o.Component),b=function(e){Object(u.a)(n,e);var t=Object(j.a)(n);function n(){var e;Object(d.a)(this,n);for(var i=arguments.length,o=new Array(i),c=0;c<i;c++)o[c]=arguments[c];return(e=t.call.apply(t,[this].concat(o))).state={credentials:{username:"",password:""}},e.register=function(t){console.log(e.state.credentials),fetch("https://evening-atoll-03641.herokuapp.com/myapi/users/",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e.state.credentials)}).then((function(e){return e.json()})).then((function(e){console.log(e.token)})).then((function(){return alert("Successfully Registered, Please Login")})).catch((function(e){return console.error(e)}))},e.inputChanged=function(t){var n=e.state.credentials;n[t.target.name]=t.target.value,e.setState({credentials:n})},e}return Object(h.a)(n,[{key:"render",value:function(){return Object(i.jsxs)("div",{children:[Object(i.jsx)("h1",{children:"Register User Form"}),Object(i.jsxs)("label",{children:["Username:",Object(i.jsx)("input",{type:"text",name:"username",value:this.state.credentials.username,onChange:this.inputChanged})]}),Object(i.jsx)("br",{}),Object(i.jsxs)("label",{children:["Password:",Object(i.jsx)("input",{type:"password",name:"password",value:this.state.credentials.password,onChange:this.inputChanged})]}),Object(i.jsx)("br",{}),Object(i.jsx)("button",{onClick:this.register,children:"Register"})]})}}]),n}(o.Component),x=function(e){Object(u.a)(n,e);var t=Object(j.a)(n);function n(){var e;Object(d.a)(this,n);for(var i=arguments.length,o=new Array(i),c=0;c<i;c++)o[c]=arguments[c];return(e=t.call.apply(t,[this].concat(o))).state={books:[]},e.loadBooks=function(){console.log(e.state.credentials),fetch("https://evening-atoll-03641.herokuapp.com/myapi/books/",{method:"GET",headers:{"Content-Type":"application/json",Authorization:"Token ".concat(e.props.token)},body:JSON.stringify(e.state.credentials)}).then((function(e){return e.json()})).then((function(t){e.setState({books:t})})).catch((function(e){return console.error(e)}))},e}return Object(h.a)(n,[{key:"render",value:function(){return this.props.token?Object(i.jsxs)("div",{children:[Object(i.jsx)("h1",{children:"Books Page"}),this.state.books.map((function(e){return Object(i.jsx)("h3",{children:e.title},e.id)})),Object(i.jsx)("button",{onClick:this.loadBooks,children:"Load Books"})]}):Object(i.jsx)("div",{children:Object(i.jsx)("h1",{children:"Please Login if you don't have an Account Please Reigister!"})})}}]),n}(o.Component);function g(e){var t=e.bug,n=e.index,o=e.completeBug,c=e.deleteBug;return Object(i.jsxs)("div",{style:{textDecoration:t.isCompleted?"line-through":""},className:"bug",children:[t.text,Object(i.jsxs)("div",{children:[Object(i.jsx)("button",{onClick:function(){return o(n)},children:"Complete"}),Object(i.jsx)("button",{onClick:function(){return c(n)},children:"X"})]})]})}function O(e){var t=e.addBug,n=Object(o.useState)(""),c=Object(l.a)(n,2),s=c[0],a=c[1];return Object(i.jsx)("form",{onSubmit:function(e){e.preventDefault(),s&&(t(s),a(""))},children:Object(i.jsx)("input",{type:"text",className:"input",placeholder:"Add Bug...",value:s,onChange:function(e){return a(e.target.value)}})})}var f=function(){var e=Object(o.useState)([{text:"Do mobile update on projects",isCompleted:!1},{text:"Work on login for blog",isCompleted:!1},{text:"Connect to the backend with Django",isCompleted:!1}]),t=Object(l.a)(e,2),n=t[0],c=t[1],s=function(e){var t=Object(r.a)(n);t[e].isCompleted=!0,c(t)},a=function(e){var t=Object(r.a)(n);t.splice(e,1),c(t)};return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)("div",{children:Object(i.jsx)("h1",{children:"Bugs Component"})}),Object(i.jsx)("div",{className:"app",children:Object(i.jsxs)("div",{className:"bug-list",children:[n.map((function(e,t){return Object(i.jsx)(g,{index:t,bug:e,completeBug:s,deleteBug:a},t)})),Object(i.jsx)(O,{addBug:function(e){var t=[].concat(Object(r.a)(n),[{text:e}]);c(t)}})]})})]})},m=function(e){Object(u.a)(n,e);var t=Object(j.a)(n);function n(){var e;Object(d.a)(this,n);for(var i=arguments.length,o=new Array(i),c=0;c<i;c++)o[c]=arguments[c];return(e=t.call.apply(t,[this].concat(o))).state={heros:[]},e.loadHeros=function(){console.log(e.state.credentials),fetch("https://evening-atoll-03641.herokuapp.com/myapi/heros/",{method:"GET",headers:{"Content-Type":"application/json",Authorization:"Token ".concat(e.props.token)},body:JSON.stringify(e.state.credentials)}).then((function(e){return e.json()})).then((function(t){e.setState({heros:t})})).catch((function(e){return console.error(e)}))},e}return Object(h.a)(n,[{key:"render",value:function(){return this.props.token?Object(i.jsxs)("div",{children:[Object(i.jsx)("h1",{children:"Heros Page"}),this.state.heros.map((function(e){return Object(i.jsx)("h3",{children:e.name},e.id)})),Object(i.jsx)("button",{onClick:this.loadHeros,children:"Load Heros"})]}):Object(i.jsx)("div",{children:Object(i.jsx)("h1",{children:"Please Login if you don't have an Account Please Reigister!"})})}}]),n}(o.Component);var v=function(){return Object(i.jsx)("h1",{children:"Sorry No Match, Please Try Again"})},k=n(7),y=n(2),C=n(29);function w(){var e=Object(C.a)(["\n.paper {\n    box-sizing:border-box;\n    width:350px;\n    height:410px;\n    background: #fff;\n    padding: 30px 30px 80px 30px;\n    position: relative;\n  }\n  \n  .paper {\n    box-shadow: 2px 2px 5px 1px rgba(0,0,0,0.30);\n  }\n  \n  .paper,\n  .paper:before,\n  .paper:after {\n    border: 1px solid #bbb;\n  }\n  \n  .paper:before,\n  .paper:after {\n    content: \"\";\n    position: absolute;\n    height: 100%;\n    width: 100%;\n  }\n  \n  .paper:before {\n    box-shadow: 1px 1px 3px 1px rgba(0,0,0,0.35);\n    background-color: #eee;\n    right: 10px;\n    top: 0;\n    transform: rotate(-3deg);\n    z-index: -1;\n  }\n  \n  .paper:after {\n    box-shadow: 1px 1px 2px 1px rgba(0,0,0,0.25);\n    background-color: #ddd;\n    top: 10px;\n    right: -15px;\n    transform: rotate(2deg);\n    z-index: -2;\n  }\n  \n  .pic {\n    background-image:url(https://www.clipartmax.com/png/middle/44-443968_smiley-png-thumbs-up-emoji-png.png);\n    width:auto;\n    height:100%;\n    background-repeat: no-repeat;\n    background-size: contain, cover;\n  }\n  \n  .pic:after{\n     content:'My Bug Tracker';\n     white-space:pre;\n     text-transform:uppercase;\n     width:100px;\n     position:absolute;\n     top:340px;\n     right:170px;\n     font-size:24px;\n     text-align:center;\n     font-family: 'Pangolin', 'Andale Mono', 'Courier New', Courier, monospace;\n  }\n"]);return w=function(){return e},e}var S=n(30).a.div(w());var T=function(){return Object(i.jsx)("center",{children:Object(i.jsx)(S,{children:Object(i.jsx)("div",{className:"paper",children:Object(i.jsx)("div",{className:"pic"})})})})},N=n(25),B=n(12),I=function(e){Object(u.a)(n,e);var t=Object(j.a)(n);function n(e){var i;return Object(d.a)(this,n),(i=t.call(this,e)).state={todoList:[],activeItem:{id:null,title:"",completed:!1},editing:!1},i.fetchTasks=i.fetchTasks.bind(Object(B.a)(i)),i.handleChange=i.handleChange.bind(Object(B.a)(i)),i.handleSubmit=i.handleSubmit.bind(Object(B.a)(i)),i.getCookie=i.getCookie.bind(Object(B.a)(i)),i.startEdit=i.startEdit.bind(Object(B.a)(i)),i.deleteItem=i.deleteItem.bind(Object(B.a)(i)),i.strikeUnstrike=i.strikeUnstrike.bind(Object(B.a)(i)),i}return Object(h.a)(n,[{key:"getCookie",value:function(e){var t=null;if(document.cookie&&""!==document.cookie)for(var n=document.cookie.split(";"),i=0;i<n.length;i++){var o=n[i].trim();if(o.substring(0,e.length+1)===e+"="){t=decodeURIComponent(o.substring(e.length+1));break}}return t}},{key:"componentWillMount",value:function(){this.fetchTasks()}},{key:"fetchTasks",value:function(){var e=this;console.log("Fetching..."),fetch("https://evening-atoll-03641.herokuapp.com/myapi/task-list/").then((function(e){return e.json()})).then((function(t){return e.setState({todoList:t})}))}},{key:"handleChange",value:function(e){var t=e.target.name,n=e.target.value;console.log("Name:",t),console.log("Value:",n),this.setState({activeItem:Object(N.a)(Object(N.a)({},this.state.activeItem),{},{title:n})})}},{key:"handleSubmit",value:function(e){var t=this;e.preventDefault(),console.log("ITEM:",this.state.activeItem);var n=this.getCookie("csrftoken"),i="https://evening-atoll-03641.herokuapp.com/myapi/task-create/";!0===this.state.editing&&(i="https://evening-atoll-03641.herokuapp.com/myapi/task-update/".concat(this.state.activeItem.id,"/"),this.setState({editing:!1})),fetch(i,{method:"POST",headers:{"Content-type":"application/json","X-CSRFToken":n},body:JSON.stringify(this.state.activeItem)}).then((function(e){t.fetchTasks(),t.setState({activeItem:{id:null,title:"",completed:!1}})})).catch((function(e){console.log("ERROR:",e)}))}},{key:"startEdit",value:function(e){this.setState({activeItem:e,editing:!0})}},{key:"deleteItem",value:function(e){var t=this,n=this.getCookie("csrftoken");fetch("https://evening-atoll-03641.herokuapp.com/myapi/task-delete/".concat(e.id,"/"),{method:"DELETE",headers:{"Content-type":"application/json","X-CSRFToken":n}}).then((function(e){t.fetchTasks()}))}},{key:"strikeUnstrike",value:function(e){var t=this;e.completed=!e.completed;var n=this.getCookie("csrftoken"),i="https://evening-atoll-03641.herokuapp.com/myapi/task-update/".concat(e.id,"/");fetch(i,{method:"POST",headers:{"Content-type":"application/json","X-CSRFToken":n},body:JSON.stringify({completed:e.completed,title:e.title})}).then((function(){t.fetchTasks()})),console.log("TASK:",e.completed)}},{key:"render",value:function(){var e=this.state.todoList,t=this;return Object(i.jsx)("div",{className:"container",children:Object(i.jsxs)("div",{id:"task-container",children:[Object(i.jsx)("div",{id:"form-wrapper",children:Object(i.jsx)("form",{onSubmit:this.handleSubmit,id:"form",children:Object(i.jsxs)("div",{className:"flex-wrapper",children:[Object(i.jsx)("div",{style:{flex:6},children:Object(i.jsx)("input",{onChange:this.handleChange,className:"form-control",id:"title",value:this.state.activeItem.title,type:"text",name:"title",placeholder:"Add task.."})}),Object(i.jsx)("div",{style:{flex:1},children:Object(i.jsx)("input",{id:"submit",className:"btn btn-warning",type:"submit",name:"Add"})})]})})}),Object(i.jsx)("div",{id:"list-wrapper",children:e.map((function(e,n){return Object(i.jsxs)("div",{className:"task-wrapper flex-wrapper",children:[Object(i.jsx)("div",{onClick:function(){return t.strikeUnstrike(e)},style:{flex:7},children:!1===e.completed?Object(i.jsx)("span",{children:e.title}):Object(i.jsx)("strike",{children:e.title})}),Object(i.jsx)("div",{style:{flex:1},children:Object(i.jsx)("button",{onClick:function(){return t.startEdit(e)},className:"btn btn-sm btn-outline-info",children:"Edit"})}),Object(i.jsx)("div",{style:{flex:1},children:Object(i.jsx)("button",{onClick:function(){return t.deleteItem(e)},className:"btn btn-sm btn-outline-dark delete",children:"Remove"})})]},n)}))})]})})}}]),n}(c.a.Component);var L=function(){var e=Object(o.useState)(window.matchMedia("(max-width:768px)").matches),t=Object(l.a)(e,2),n=t[0],c=t[1];Object(o.useEffect)((function(){window.addEventListener("resize",(function(){c(window.matchMedia("(max-width:768px)").matches)}))}),[]);var s=Object(o.useState)([{text:"Do mobile update on projects",isCompleted:!1},{text:"Work on login for blog",isCompleted:!1},{text:"Connect to the backend with Django",isCompleted:!1}]),a=Object(l.a)(s,2),d=a[0],h=a[1],u=Object(o.useState)(""),j=Object(l.a)(u,2),g=j[0],O=j[1],C=function(e){O(e),console.log(e)},w=function(e){var t=[].concat(Object(r.a)(d),[{text:e}]);h(t)},S={position:"absolute",right:"5px",top:"8%",listStyle:"none"},N={textAlign:"center",background:"white",borderRadius:"3px",marginBottom:"8px",padding:"5px"},B=function(e){var t=e.style;return Object(i.jsxs)("ul",{style:t,children:[Object(i.jsx)("li",{style:N,children:Object(i.jsx)(k.b,{to:"/",children:"Home"})}),Object(i.jsx)("li",{style:N,children:Object(i.jsx)(k.b,{to:"/tasks",children:"Tasks"})}),Object(i.jsx)("li",{style:N,children:Object(i.jsx)(k.b,{to:"/heros",children:"Heros"})}),Object(i.jsx)("li",{style:N,children:Object(i.jsx)(k.b,{to:"/books",children:"Books"})}),Object(i.jsx)("li",{style:N,children:Object(i.jsx)(k.b,{to:"/login",children:"Login"})}),Object(i.jsx)("li",{style:N,children:Object(i.jsx)(k.b,{to:"/register",children:"Register"})}),Object(i.jsx)("li",{style:N,children:Object(i.jsx)(k.b,{to:"/bugs",children:"BugForm"})})]})},L=function(){var e=Object(o.useState)(!1),t=Object(l.a)(e,2),n=t[0],c=t[1];return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsxs)("button",{onClick:function(){c(!n)},children:[n?"Close":"Show"," Menu"]}),n&&Object(i.jsx)(B,{style:S})]})};return Object(i.jsx)(i.Fragment,{children:Object(i.jsxs)(k.a,{children:[Object(i.jsxs)("nav",{style:{display:"grid",gridTemplateColumns:"50% 50%",alignItems:"center"},children:[Object(i.jsx)("h1",{children:"Bug Tracker"}),n?Object(i.jsx)(L,{}):Object(i.jsx)(B,{style:{display:"flex",justifyContent:"space-between",listStyle:"none",paddingRight:"10px"}})]}),Object(i.jsxs)(y.c,{children:[Object(i.jsx)(y.a,{exact:!0,path:"/",component:T}),Object(i.jsx)(y.a,{path:"/tasks",component:I}),Object(i.jsx)(y.a,{path:"/books",render:function(){return Object(i.jsx)(x,{token:g})}}),Object(i.jsx)(y.a,{path:"/heros",render:function(){return Object(i.jsx)(m,{token:g})}}),Object(i.jsx)(y.a,{exact:!0,path:"/login",render:function(){return Object(i.jsx)(p,{userLogin:C})}}),Object(i.jsx)(y.a,{exact:!0,path:"/register",render:function(){return Object(i.jsx)(b,{userLogin:C})}}),Object(i.jsx)(y.a,{path:"/bugs",render:function(){return Object(i.jsx)(f,{addBug:w})}}),Object(i.jsx)(y.a,{path:"*",component:v})]})]})})},P=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,47)).then((function(t){var n=t.getCLS,i=t.getFID,o=t.getFCP,c=t.getLCP,s=t.getTTFB;n(e),i(e),o(e),c(e),s(e)}))};a.a.render(Object(i.jsx)(c.a.StrictMode,{children:Object(i.jsx)(L,{})}),document.getElementById("root")),P()}},[[46,1,2]]]);
//# sourceMappingURL=main.454d0bc0.chunk.js.map