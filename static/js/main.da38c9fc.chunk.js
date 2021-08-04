(this["webpackJsonpreact-crud"]=this["webpackJsonpreact-crud"]||[]).push([[0],{24:function(e,t,c){},25:function(e,t,c){},33:function(e,t,c){"use strict";c.r(t);var a=c(9),s=c.n(a),n=c(19),r=c.n(n),i=(c(24),c(25),c(11)),l=c(13);l.a.initializeApp({apiKey:"AIzaSyCDjxUkRf6jeC0IJjc-sznz20Y8ywvGE0I",authDomain:"reactcrud-d5986.firebaseapp.com",databaseURL:"https://reactcrud-d5986-default-rtdb.firebaseio.com",projectId:"reactcrud-d5986",storageBucket:"reactcrud-d5986.appspot.com",messagingSenderId:"735564893230",appId:"1:735564893230:web:b5f8bc63e091d22be323bf"}),l.a.analytics();var d=l.a,j=c(17),b=c.n(j),o=c(3),u=function(){var e=Object(a.useState)(""),t=Object(i.a)(e,2),c=t[0],s=t[1],n=Object(a.useState)(""),r=Object(i.a)(n,2),l=r[0],j=r[1],u=Object(a.useState)([]),m=Object(i.a)(u,2),p=m[0],h=m[1],O=Object(a.useState)(""),x=Object(i.a)(O,2),f=x[0],v=x[1],N=Object(a.useState)(""),g=Object(i.a)(N,2),S=g[0],F=g[1],y=Object(a.useState)(""),C=Object(i.a)(y,2),I=C[0],U=C[1];Object(a.useEffect)((function(){d.database().ref("/UserInfo").on("value",(function(e){var t=e.val(),c=[];for(var a in t)c.push({id:a,FirstName:t[a].FirstName,LastName:t[a].LastName});h(c)}))}),[]);return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("div",{className:"jumbotron",children:Object(o.jsx)("div",{className:"container text-center",children:Object(o.jsx)("div",{children:Object(o.jsx)("h1",{children:"ReactJS Crud Operation With Firebase"})})})}),Object(o.jsxs)("div",{className:"container",children:[Object(o.jsxs)("div",{className:"row",children:[Object(o.jsxs)("div",{className:"col-md-6 col-lg-6",children:[Object(o.jsx)("div",{className:"text-center",children:Object(o.jsx)("h3",{children:"Add User "})}),Object(o.jsxs)("form",{autoComplete:"off",onSubmit:function(e){e.preventDefault();var t=d.database().ref("/UserInfo");console.log(t);var a={FirstName:c,LastName:l};a?b()("Sumited!","Successfully submited data!","success"):b()("Oops!","Something went wrong!","error"),t.push(a),s(""),j("")},children:[Object(o.jsxs)("div",{className:"input-group mb-3",children:[Object(o.jsx)("div",{className:"input-group-prepend",children:Object(o.jsx)("span",{className:"input-group-text",children:"#"})}),Object(o.jsx)("input",{className:"form-control",placeholder:"Username",value:c,onChange:function(e){return s(e.target.value)},required:!0})]}),Object(o.jsxs)("div",{className:"input-group mb-3",children:[Object(o.jsx)("div",{className:"input-group-prepend",children:Object(o.jsx)("span",{className:"input-group-text",children:"@"})}),Object(o.jsx)("input",{className:"form-control",placeholder:"email",value:l,onChange:function(e){return j(e.target.value)},required:!0})]}),Object(o.jsx)("div",{className:"mx-4",children:Object(o.jsx)("button",{className:"btn btn-primary btn-block",type:"submit",children:"Save"})})]})]}),Object(o.jsxs)("div",{className:"col-md-6 col-lg-6",children:[Object(o.jsx)("div",{className:"text-center",children:Object(o.jsx)("h3",{children:"Edit User "})}),Object(o.jsxs)("form",{autoComplete:"off",onSubmit:function(e){(e.preventDefault(),""==f&&""==S)?alert("You not select any value for updating.!"):(d.database().ref("/UserInfo").child(I).update({FirstName:f,LastName:S}),v(""),F(""))},children:[Object(o.jsxs)("div",{className:"input-group mb-3",children:[Object(o.jsx)("div",{className:"input-group-prepend",children:Object(o.jsx)("span",{className:"input-group-text",children:"#"})}),Object(o.jsx)("input",{className:"form-control",placeholder:"Username",value:f,onChange:function(e){return v(e.target.value)},required:!0})]}),Object(o.jsxs)("div",{className:"input-group mb-3",children:[Object(o.jsx)("div",{className:"input-group-prepend",children:Object(o.jsx)("span",{className:"input-group-text",children:"@"})}),Object(o.jsx)("input",{className:"form-control",placeholder:"email",value:S,onChange:function(e){return F(e.target.value)},required:!0})]}),Object(o.jsx)("div",{className:"mx-4",children:Object(o.jsx)("button",{className:"btn btn-primary btn-block",type:"submit",children:"Update"})})]})]})]}),Object(o.jsx)("br",{}),0==p.length?Object(o.jsx)("h3",{className:"text-center",children:"Ooops! There is no data in database. "}):Object(o.jsx)("div",{children:Object(o.jsxs)("table",{className:"table table-dark table-striped table-bordered",children:[Object(o.jsx)("thead",{children:Object(o.jsxs)("tr",{children:[Object(o.jsx)("th",{children:" FirstName"}),Object(o.jsx)("th",{children:"LastName"}),Object(o.jsx)("th",{children:"Operation"})]})}),Object(o.jsx)("tbody",{children:p.map((function(e,t){return Object(o.jsx)(o.Fragment,{children:Object(o.jsxs)("tr",{children:[Object(o.jsx)("td",{children:e.FirstName}),Object(o.jsx)("td",{children:e.LastName}),Object(o.jsxs)("td",{className:"text-center",children:[Object(o.jsx)("button",{className:"btn btn-primary mr-2",onClick:function(){!function(e){v(e.FirstName),F(e.LastName),U(e.id)}(e)},children:"Update"}),Object(o.jsx)("button",{className:"btn btn-danger ml-2",onClick:function(){!function(e){var t=d.database().ref("/UserInfo").child(e);t.remove(),t&&alert("Data delete successfully...")}(e.id)},children:"Delete"})]})]})})}))})]})})]})]})};var m=function(){return Object(o.jsx)(o.Fragment,{children:Object(o.jsx)("div",{children:Object(o.jsx)(u,{})})})},p=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,34)).then((function(t){var c=t.getCLS,a=t.getFID,s=t.getFCP,n=t.getLCP,r=t.getTTFB;c(e),a(e),s(e),n(e),r(e)}))};r.a.render(Object(o.jsx)(s.a.StrictMode,{children:Object(o.jsx)(m,{})}),document.getElementById("root")),p()}},[[33,1,2]]]);
//# sourceMappingURL=main.da38c9fc.chunk.js.map