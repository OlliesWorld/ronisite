(self.webpackChunkgatsby_starter_spectral=self.webpackChunkgatsby_starter_spectral||[]).push([[501],{8514:function(e){e.exports={siteTitle:"Roni's Portfolio",manifestName:"Roni Dev",manifestShortName:"Roni Dev",manifestStartUrl:"/",manifestBackgroundColor:"#663399",manifestThemeColor:"#663399",manifestDisplay:"standalone",manifestIcon:"src/assets/img/Planet-R.png",con:"src/assets/img/Planet-R.png",pathPrefix:"/gatsby-starter-spectral/",heading:"Roni's Portfolio",subHeading:"FrontEnd Web Developer by Day and Night!",socialLinks:[{style:"brands",icon:"fa-github",name:"Github",url:"https://github.com/OlliesWorld",alt:"GitHub Icon"},{style:"brands",icon:"fa-twitter",name:"Twitter",url:"https://twitter.com/Bluesky_Roni",alt:"Twitter Icon"},{style:"brands",icon:"fa-linkedin-in",name:"LinkedIn",url:"https://www.linkedin.com/in/roni-lockwood/",alt:"LinkedIn Icon"},{style:"solid",icon:"fa-envelope",name:"Email",url:"mailto:rtlockwoodwork@gmail.com",alt:"Email Icon"}]}},3375:function(e,t,n){"use strict";n.d(t,{Z:function(){return c}});var a=n(7294),l=n(8514),r=n.n(l);function c(){return a.createElement("footer",{id:"footer"},a.createElement("ul",{className:"icons"},r().socialLinks.map((function(e){var t=e.style,n=e.icon,l=e.url;return a.createElement("li",{key:l},a.createElement("a",{href:l,className:"icon "+t+" "+n}))}))),a.createElement("ul",{className:"copyright"},a.createElement("li",null,"© Roni Lockwood"),a.createElement("li",null,a.createElement("a",{href:"https://olliesworld.rocks/",target:"blank"},"Ollies World"))))}},1761:function(e,t,n){"use strict";n.d(t,{Z:function(){return c}});var a=n(7294),l=n(5444);function r(e){var t=e.onMenuToggle,n=void 0===t?function(){}:t;return a.createElement("nav",{id:"nav"},a.createElement("ul",null,a.createElement("li",{className:"special"},a.createElement("a",{href:"#menu",onClick:function(e){e.preventDefault(),n()},className:"menuToggle"},a.createElement("span",null,"Menu")),a.createElement("div",{id:"menu"},a.createElement("ul",null,a.createElement("li",null,a.createElement(l.Link,{to:"/"},"Home")),a.createElement("li",null,a.createElement(l.Link,{to:"/Projects"},"Projects")),a.createElement("li",null,a.createElement(l.Link,{to:"/Contact"},"Contact"))),a.createElement("a",{className:"close",onClick:function(e){e.preventDefault(),n()},href:"#menu","aria-label":"close"},"")))))}function c(e){var t=e.fullMenu,n=(0,a.useState)(!1),c=n[0],o=n[1];return a.createElement("header",{id:"header",className:t?"":"alt"},a.createElement("h1",null,a.createElement(l.Link,{to:"/"},"Roni's Site")),a.createElement("div",{className:c?"is-menu-visible":" "},a.createElement(r,{onMenuToggle:function(){return o(!c)}})))}},3977:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return s}});var a=n(7294),l=n(5444);var r=function(e){var t=(0,a.useState)(""),n=t[0],r=t[1];return a.createElement("form",{name:"contact",method:"post","data-netlify":"true",className:"Form",action:"/",onSubmit:function(e){var t;e.preventDefault(),fetch("/",{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:(t=Object.assign({"form-name":e.target.getAttribute("contact")},n),Object.keys(t).map((function(e){return encodeURIComponent(e)+"="+encodeURIComponent(t[e])})).join("&"))}).then((function(){return(0,l.navigate)("/thanks/")})).catch((function(e){return alert(e)}))}},a.createElement("label",{htmlFor:"nameInput",className:"Form--Title"},"Send Us a Message!"),a.createElement("label",{className:"Form--Label"},a.createElement("input",{className:"Form--Input",type:"text",placeholder:"Name",name:"name",onChange:function(e){var t;r(Object.assign({},n,((t={})[e.target.name]=e.target.value,t)))},required:!0})),a.createElement("label",{className:"Form--Label"},a.createElement("input",{className:"Form--Input",type:"email",placeholder:"Email",name:"email",required:!0})),a.createElement("label",{className:"Form--Label"},a.createElement("textarea",{className:"Form--Input Form--Textarea",placeholder:"Message",name:"message",rows:"8",required:!0})),a.createElement("input",{type:"text",name:"_gotcha",style:{display:"none"}}),a.createElement("input",{type:"hidden",name:"form-name",value:n}),a.createElement("input",{className:"Form--SubmitButton",type:"submit",value:"Send"}))},c=n(3375),o=n(1761),i=n.p+"static/olliesnow-9c9ac8b2d2891bbb9da627413d6f6b89.png",s=function(){return a.createElement("section",{id:"one",className:"wrapper style1 special"},a.createElement(o.Z,null),a.createElement("p",null,a.createElement("span",{className:"form"},a.createElement("img",{src:i,alt:"Ollie and I in the snow"}))),a.createElement(r,null),a.createElement(c.Z,null))}}}]);
//# sourceMappingURL=component---src-pages-contact-js-fb3d1e1f36d53cd9d486.js.map