"use strict";(self.webpackChunkreact_hw_08_phonebook=self.webpackChunkreact_hw_08_phonebook||[]).push([[643],{9864:function(n,e,t){t.d(e,{Z:function(){return v}});var a,r,o,i,s,l,c=t(885),p=t(2791),d=t(168),u=t(6444),x=t(3271).Z.colors,h=u.ZP.form(a||(a=(0,d.Z)(["\n  position: absolute;\n  top: 180px;\n  left: 110px;\n\n  display: flex;\n  flex-direction: column;\n\n  padding: 30px;\n\n  color: #c5c6c7;\n  box-shadow: 2px 2px 10px black;\n  border: 2px solid white;\n  border-radius: 10px;\n"]))),m=u.ZP.h1(r||(r=(0,d.Z)(["\n  margin: 0 0 20px;\n  cursor: default;\n\n  color: white;\n  text-shadow: 3px 3px 3px ",", 5px 5px 5px ",";\n  font-size: 32px;\n  font-weight: bold;\n"])),x.mainGrey,x.textGrey),f=u.ZP.label(o||(o=(0,d.Z)(["\n  text-align: start;\n  display: flex;\n  flex-direction: column;\n"]))),b=u.ZP.span(i||(i=(0,d.Z)(["\n  display: inline-block;\n  color: ",";\n  margin: 10px 0;\n"])),x.white),g=u.ZP.input(s||(s=(0,d.Z)(["\n  box-sizing: border-box;\n  width: 420px;\n  padding: 10px;\n  border-radius: 5px;\n"]))),w=u.ZP.button(l||(l=(0,d.Z)(["\n  display: block;\n  width: 180px;\n\n  margin: 20px auto 10px;\n  padding: 10px;\n\n  background-color: ",";\n\n  color: ",";\n  border-radius: 10px;\n  box-shadow: -2px -2px 5px ",";\n\n  font-size: 18px;\n  font-weight: bold;\n\n  cursor: pointer;\n\n  transition: background-color 250ms linear, box-shadow 250ms linear;\n\n  &:hover,\n  &:focus {\n    background-color: ",";\n  }\n  &:active {\n    box-shadow: 2px 2px 5px ",";\n  }\n"])),x.textGrey,x.mainGrey,x.dark,x.lightGreen,x.dark),Z=t(184),v=function(n){var e=n.text,t=n.page,a=n.onSubmit,r=(0,p.useState)(""),o=(0,c.Z)(r,2),i=o[0],s=o[1],l=(0,p.useState)(""),d=(0,c.Z)(l,2),u=d[0],x=d[1],v=(0,p.useState)(""),y=(0,c.Z)(v,2),k=y[0],j=y[1],z=function(n){var e=n.currentTarget,t=e.name,a=e.value;switch(t){case"name":return s(a);case"email":return x(a);case"password":return j(a);default:return}};return(0,Z.jsxs)(h,{name:"logInForm",autocomplete:"off",page:t,onSubmit:function(n){n.preventDefault(),a(i,u,k)},children:[(0,Z.jsx)(m,{children:e}),"/register"===t&&(0,Z.jsxs)(f,{children:[(0,Z.jsx)(b,{children:"Name"}),(0,Z.jsx)(g,{type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f ]+((['-][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f ]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces.",onChange:z,value:i,minlength:"2",required:!0})]}),(0,Z.jsxs)(f,{children:[(0,Z.jsx)(b,{children:"E-mail"}),(0,Z.jsx)(g,{type:"text",name:"email",pattern:"[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,}$",minlength:"3",title:"Email may contain numbers, letters. For example Adrian81@mail.com",onChange:z,value:u,required:!0})]}),(0,Z.jsxs)(f,{children:[(0,Z.jsx)(b,{children:"Password"}),(0,Z.jsx)(g,{type:"password",name:"password",pattern:"^(?=.*\\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\\s).*$",title:"Password must contain at least one lowercase letter, at least one uppercase letter, at least one numeric value and at least one special symbol",onChange:z,value:k,minlength:8,maxLength:10,required:!0})]}),(0,Z.jsx)(w,{type:"submit",children:"/register"===t?"Create account":"Log In"})]})}},3271:function(n,e){e.Z={colors:{dark:"#0B0C10",mainGrey:"#1F2833",textGrey:"#C5C6C7",accent:"#66FCF1",secondAccent:"#45A29E",white:"#fff",lightGreen:"#33ee7e"}}},1077:function(n,e,t){t.d(e,{W2:function(){return l},nk:function(){return c},v0:function(){return p}});var a,r,o,i=t(168),s=t(6444),l=s.ZP.div(a||(a=(0,i.Z)(["\n  height: 100vh;\n  overflow: hidden;\n"]))),c=s.ZP.video(r||(r=(0,i.Z)(["\n  width: 100%;\n"]))),p=s.ZP.p(o||(o=(0,i.Z)(["\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n\n  width: 700px;\n  margin: 0 auto;\n  padding: 30px;\n\n  font-size: 46px;\n  color: #c5c6c7;\n"])))},5643:function(n,e,t){t.r(e);t(2791);var a=t(6871),r=t(1405),o=t(9864),i=t(5822),s=t(1077),l=t(9917),c=t(184);e.default=function(){var n=(0,r.I0)(),e=(0,a.TH)().pathname;return(0,c.jsxs)(s.W2,{children:[(0,c.jsx)(s.nk,{src:l,autoPlay:!0,muted:!0,loop:!0}),";",(0,c.jsx)(o.Z,{page:e,text:"Create a new account",onSubmit:function(e,t,a){n((0,i.z2)({name:e,email:t,password:a}))}})]})}},9917:function(n,e,t){n.exports=t.p+"static/media/videoLayout.e80713ba65e06630365a.mp4"}}]);
//# sourceMappingURL=643.6d353eca.chunk.js.map