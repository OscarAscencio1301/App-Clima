(this["webpackJsonpclima-app"]=this["webpackJsonpclima-app"]||[]).push([[0],{36:function(e,a,t){},37:function(e,a,t){"use strict";t.r(a);var c=t(0),n=t.n(c),i=t(5),o=t.n(i),r=t(3),s=t(4),l=t(1),d=function(){var e=Object(r.c)((function(e){return e.clima})),a=e.ciudad,t=e.pais,n=function(e){var a=Object(c.useState)({data:null,error:null,loading:!0}),t=Object(s.a)(a,2),n=t[0],i=t[1];return Object(c.useEffect)((function(){i({data:null,error:null,loading:!0}),fetch(e).then((function(e){return e.json()})).then((function(e){i({data:e,error:null,loading:!1})}))}),[e]),n}("http://api.openweathermap.org/data/2.5/weather?q=".concat(a,",").concat(t,"&appid=09c0528147b9bd01bf9d3f627f526dbb")),i=n.data,o=n.loading,d=(!!i&&i.main).temp;return Object(l.jsx)("div",{className:"clima__container",children:o?Object(l.jsx)("h1",{children:"Cargando"}):Object(l.jsxs)(l.Fragment,{children:[Object(l.jsxs)("h1",{style:{textAlign:"center"},children:["La Temperatura Actual de ",a,":"]}),Object(l.jsx)("img",{alt:"Imagen",src:parseFloat(d-273.15,10).toFixed(2)>=19?"https://res.cloudinary.com/defok5em4/image/upload/v1630294896/API%C2%B4S/sunrise_sun_sunny_shower_showers_sunny_cloudy_fog_day_time_1458_gdfini.png":"https://res.cloudinary.com/defok5em4/image/upload/v1630309589/API%C2%B4S/clouds_icon-icons.com_62491_1_k5xcla.png",className:"clima__imagen"}),Object(l.jsxs)("h3",{className:"clima__temp",children:[parseFloat(d-273.15,10).toFixed(2),"\xb0"]})]})})},u=t(14),j=t.n(u),b="[Ubicacion] Agregar",p=t(6),m=t(2),O=function(){var e=Object(r.b)(),a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=Object(c.useState)(e),t=Object(s.a)(a,2),n=t[0],i=t[1];return[n,function(e){i(Object(m.a)(Object(m.a)({},n),{},Object(p.a)({},e.target.name,e.target.value)))},function(){i(e)}]}({ciudad:"",pais:""}),t=Object(s.a)(a,2),n=t[0],i=t[1],o=n.ciudad,d=n.pais,u=function(){return 0!==o.trim().length&&""!==d||(j.a.fire({title:"Completa todos los campos",icon:"error"}),!1)};return Object(l.jsx)("div",{className:"form__container",children:Object(l.jsxs)("form",{className:"form",onSubmit:function(a){a.preventDefault(),u()&&e({type:b,payload:n})},children:[Object(l.jsx)("h1",{children:"Busca el Clima de tu Ciudad Favorita"}),Object(l.jsx)("input",{type:"text",placeholder:"Escribe la Ciudad",className:"form__input",name:"ciudad",value:o,onChange:i}),Object(l.jsxs)("select",{className:"form__input",name:"pais",value:d,onChange:i,children:[Object(l.jsx)("option",{children:"Selecciona el Pa\xeds"}),Object(l.jsx)("option",{value:"MX",children:"M\xe9xico"}),Object(l.jsx)("option",{value:"AR",children:"Argentina"}),Object(l.jsx)("option",{value:"CO",children:"Colombia"}),Object(l.jsx)("option",{value:"CR",children:"Costa Rica"}),Object(l.jsx)("option",{value:"ES",children:"Espa\xf1a"}),Object(l.jsx)("option",{value:"PE",children:"Per\xfa"})]}),Object(l.jsx)("button",{className:"form__boton",type:"submit",children:"Buscar"})]})})},h=t(10),_={ciudad:"Guadalajara",pais:"MX"},f=Object(h.a)({clima:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case b:return Object(m.a)(Object(m.a)({},e),{},{ciudad:a.payload.ciudad,pais:a.payload.pais});default:return e}}}),x=Object(h.b)(f,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__()),g=function(){return Object(l.jsx)(r.a,{store:x,children:Object(l.jsxs)("div",{className:"container",children:[Object(l.jsx)(d,{}),Object(l.jsx)(O,{})]})})};t(36);o.a.render(Object(l.jsx)(n.a.StrictMode,{children:Object(l.jsx)(g,{})}),document.getElementById("root"))}},[[37,1,2]]]);
//# sourceMappingURL=main.91d264ec.chunk.js.map