(this["webpackJsonpgoit-react-hw-04-hooks-feedback"]=this["webpackJsonpgoit-react-hw-04-hooks-feedback"]||[]).push([[0],{11:function(e,t,c){"use strict";c.r(t);var n=c(1),a=c(4),r=c.n(a),s=c(2),o=c(5),b=c.n(o),i=c(0),j=function(e){var t=e.addFeedback,c=e.options;return Object(i.jsx)(i.Fragment,{children:c.map((function(e){return Object(i.jsx)("button",{className:b.a.btn,type:"button",name:e,onClick:t,children:e})}))})},d=function(e){var t=e.title,c=e.children;return Object(i.jsxs)("section",{children:[Object(i.jsx)("h2",{children:t.toUpperCase()}),c]})},l=function(e){var t=e.good,c=e.neutral,n=e.bad,a=e.total,r=e.percentage;return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)("h2",{children:"Statistics:"}),Object(i.jsxs)("p",{children:["Good:",t]}),Object(i.jsxs)("p",{children:["Neutral:",c]}),Object(i.jsxs)("p",{children:["Bad:",n]}),Object(i.jsxs)("p",{children:["Total:",a]}),Object(i.jsxs)("p",{children:["Positive feedbacks:",r,"%"]})]})},u=function(){var e=Object(n.useState)(0),t=Object(s.a)(e,2),c=t[0],a=t[1],r=Object(n.useState)(0),o=Object(s.a)(r,2),b=o[0],u=o[1],h=Object(n.useState)(0),O=Object(s.a)(h,2),x=O[0],p=O[1],g=c+b+x,f=Number(g?c/g*100:0).toFixed(0);return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)(d,{title:"Please leave your feedback",children:Object(i.jsx)(j,{addFeedback:function(e){switch(e.target.name){case"good":a(c+1);break;case"neutral":u(b+1);break;case"bad":p(x+1);break;default:return}},options:["good","neutral","bad"]})}),Object(i.jsx)(d,{title:"Statistics",children:Object(i.jsx)(l,{good:c,neutral:b,bad:x,total:g,percentage:f})})]})},h=function(){return Object(i.jsx)(i.Fragment,{children:Object(i.jsx)(u,{})})};r.a.render(Object(i.jsx)(h,{}),document.getElementById("root"))},5:function(e,t,c){e.exports={btn:"Buttons_btn__3gcL9"}}},[[11,1,2]]]);
//# sourceMappingURL=main.22347795.chunk.js.map