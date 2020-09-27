(this.webpackJsonpcovid19app=this.webpackJsonpcovid19app||[]).push([[0],{105:function(e,t,a){},106:function(e,t,a){},107:function(e,t,a){},108:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(6),c=a.n(o),i=(a(81),a(82),a(109),a(45),a(24)),s=a(144),l=a(25);a(148),a(149),a(146),a(150),a(155),a(147),a(156),a(153),a(57),a(58),a(43),a(41),a(42),a(59),Object(s.a)((function(e){return{grow:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},title:Object(i.a)({display:"none"},e.breakpoints.up("sm"),{display:"block"}),search:Object(i.a)({position:"relative",borderRadius:e.shape.borderRadius,backgroundColor:Object(l.b)(e.palette.common.white,.15),"&:hover":{backgroundColor:Object(l.b)(e.palette.common.white,.25)},marginRight:e.spacing(2),marginLeft:0,width:"100%"},e.breakpoints.up("sm"),{marginLeft:e.spacing(3),width:"auto"}),searchIcon:{padding:e.spacing(0,2),height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"},inputRoot:{color:"inherit"},inputInput:Object(i.a)({padding:e.spacing(1,1,1,0),paddingLeft:"calc(1em + ".concat(e.spacing(4),"px)"),transition:e.transitions.create("width"),width:"100%"},e.breakpoints.up("md"),{width:"20ch"}),sectionDesktop:Object(i.a)({display:"none"},e.breakpoints.up("md"),{display:"flex"}),sectionMobile:Object(i.a)({display:"flex"},e.breakpoints.up("md"),{display:"none"})}}));var m=a(14),u=a(15),d=a(16),p=a(18),f=a(61),h=a.n(f),v=a(151),g=a(154),E=a(60),y=a.n(E),b=(a(87),function(e){Object(p.a)(a,e);var t=Object(d.a)(a);function a(){return Object(m.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"about-us-section"},r.a.createElement("div",{className:"about-us-title"},r.a.createElement("h2",{className:"title"},"Acerca de Covid19APP"),r.a.createElement("p",{className:"subtitle"},"No pertenecemos a ninguna organizacion, nuestro objetivo es ayudar a las personas a mantenerse informadas del actual Sars-Covid19")),r.a.createElement("div",{className:"information-items-container"},r.a.createElement(v.a,{container:!0,direction:"row",justify:"center",spacing:3},r.a.createElement(v.a,{item:!0,lg:4},r.a.createElement(g.a,{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"},r.a.createElement(y.a,{className:"icon"}),r.a.createElement("h2",{className:"title"},"Uso Publico"),r.a.createElement("p",{className:"subtitle"},"Nuestra aplicacion esta planeada para ser usada por todas las personas que lo deseen, de forma gratis"))),r.a.createElement(v.a,{item:!0,lg:4},r.a.createElement(g.a,{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"},r.a.createElement(h.a,{className:"icon"}),r.a.createElement("h2",{className:"title"},"Datos(API REST)"),r.a.createElement("p",{className:"subtitle"},"Toda nuestra informacion pertenece a la API gratuita https://github.com/mathdroid/covid-19-api"))))))}}]),a}(n.Component)),j=a(44),N=a.n(j),C=a(62),O=a(67),w=a.n(O),k=a(65),x=a.n(k),I=a(66),D=a.n(I),R=a(64),S=a.n(R),q=a(63),P=function(e){Object(p.a)(a,e);var t=Object(d.a)(a);function a(){return Object(m.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){return r.a.createElement(q.a,{countryCode:this.props.country,svg:!0,className:"country-flag"})}}]),a}(r.a.Component),A=function(e){Object(p.a)(a,e);var t=Object(d.a)(a);function a(){return Object(m.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){return r.a.createElement(g.a,{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"flex-start"},r.a.createElement(P,{country:this.props.country,className:"country-flag"}),r.a.createElement("div",{className:"data-information-item"},r.a.createElement("p",{className:"title-data-information confirmed-color"},"Confirmed Cases"),r.a.createElement(g.a,{display:"flex",alignItems:"center",justifyContent:"center",className:"data-confirmed"},r.a.createElement(S.a,{className:"icon"}),r.a.createElement("p",{className:"value"},this.props.information.confirmed))),r.a.createElement("div",{className:"data-information-item"},r.a.createElement("p",{className:"title-data-information deadths-color"},"Deadths"),r.a.createElement(g.a,{display:"flex",alignItems:"center",justifyContent:"center",className:"data-deaths"},r.a.createElement(x.a,{className:"icon"}),r.a.createElement("p",{className:"value"},this.props.information.deadths))),r.a.createElement("div",{className:"data-information-item"},r.a.createElement("p",{className:"title-data-information recovery-color"},"Recovery"),r.a.createElement(g.a,{display:"flex",alignItems:"center",justifyContent:"center",className:"data-recovery"},r.a.createElement(D.a,{className:"icon"}),r.a.createElement("p",{className:"value"},this.props.information.deadths))))}}]),a}(n.Component),B=a(152),L=(a(105),function(e){Object(p.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(m.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={selectedCountries:{},actualCountry:"",covidInformation:{},requestOn:!0},e.toggleCountry=function(t){var a=e.state.selectedCountries;e.setState({selectedCountries:Object(i.a)({},t.id,!a[t.id]),actualCountry:t.id,requestOn:!0}),N.a.get("https://covid19.mathdro.id/api/countries/"+t.id).then((function(t){console.log(t),e.setState({covidInformation:{confirmed:t.data.confirmed.value,deadths:t.data.deaths.value,recovered:t.data.recovered.value},requestOn:!1})}))},e}return Object(u.a)(a,[{key:"componentDidMount",value:function(){var e=this;this.setState({selectedCountries:{VE:!0},actualCountry:"VE"}),N.a.get("https://covid19.mathdro.id/api/countries/VE").then((function(t){console.log(t),e.setState({covidInformation:{confirmed:t.data.confirmed.value,deadths:t.data.deaths.value,recovered:t.data.recovered.value},requestOn:!1})}))}},{key:"render",value:function(){var e=this,t=(this.state.selectedCountries,this.state.actualCountry),a=this.state.covidInformation,n=this.state.requestOn;console.log(n);var o=C.a.map((function(t){return r.a.createElement("path",{key:t.id,d:t.shape,style:{fill:e.state.selectedCountries[t.id]?"tomato":"#eee",cursor:"pointer",stroke:"#000"},onClick:function(){return e.toggleCountry(t)}})}));return r.a.createElement(r.a.Fragment,null,r.a.createElement(v.a,{container:!0,direction:"row",justify:"center",spacing:3},r.a.createElement(v.a,{item:!0,lg:10},r.a.createElement("div",{className:"title-container"},r.a.createElement(w.a,{className:"icon"}),r.a.createElement("h1",{className:"title"},"Covid19 Consulta por Pais"),r.a.createElement("p",{className:"subtitle"},"Haz click en un pais para obtener informacion acerca de su situacion con el Covid19")),r.a.createElement(v.a,{container:!0,direction:"row",justify:"center",spacing:3},r.a.createElement(v.a,{item:!0,lg:8,className:"map-container"},r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",height:"600px",width:"100%",viewBox:"0 0 2000 1001"},o)),r.a.createElement(v.a,{item:!0,lg:4,className:"data-information"},n?r.a.createElement(g.a,{display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"center",className:"preloader-cont"},r.a.createElement(B.a,null)):r.a.createElement(A,{country:t,information:a}))))))}}]),a}(n.Component)),z=(a(106),function(e){Object(p.a)(a,e);var t=Object(d.a)(a);function a(){return Object(m.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){return r.a.createElement("footer",null,r.a.createElement("p",{className:"title"},"Construido por ",r.a.createElement("a",{href:"https://github.com/HenryGlo",target:"_blank"},"Henry Gomez Lofiego")))}}]),a}(n.Component));var G=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(L,null),r.a.createElement(b,null),r.a.createElement(z,null))};a(107);var H=function(){return r.a.createElement(G,null)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(H,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},76:function(e,t,a){e.exports=a(108)},81:function(e,t,a){},82:function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},87:function(e,t,a){}},[[76,1,2]]]);
//# sourceMappingURL=main.96687ec0.chunk.js.map