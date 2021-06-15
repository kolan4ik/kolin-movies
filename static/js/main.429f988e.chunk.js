(this.webpackJsonpkinoteatr=this.webpackJsonpkinoteatr||[]).push([[0],{14:function(e,t,c){},16:function(e,t,c){},17:function(e,t,c){"use strict";c.r(t);var a=c(1),n=c.n(a),s=c(8),r=c.n(s),i=(c(14),c(0));function l(){return Object(i.jsx)("nav",{className:"grey darken-2",children:Object(i.jsxs)("div",{className:"nav-wrapper",children:[Object(i.jsx)("div",{className:"brand-logo",children:"Movies"}),Object(i.jsx)("ul",{id:"nav-mobile",className:"right hide-on-med-and-down",children:Object(i.jsx)("li",{children:Object(i.jsx)("a",{href:"https://github.com/kolan4ik/react-movies",children:"Repo"})})})]})})}function o(){return Object(i.jsx)("footer",{className:"page-footer grey darken-2",children:Object(i.jsx)("div",{className:"footer-copyright",children:Object(i.jsxs)("div",{className:"container",children:["\xa9 ",(new Date).getFullYear()," Copyright Text",Object(i.jsx)("a",{className:"grey-text text-lighten-4 right",href:"https://github.com/kolan4ik/react-movies",children:"Repo"})]})})})}var h=c(2),j=c(3),d=c(4),b=c(6),u=c(5),v=c(9);function m(e){var t=e.Title,c=e.Year,a=e.imdbID,n=e.Type,s=e.Poster;return Object(i.jsxs)("div",{id:a,className:"card movie",children:[Object(i.jsx)("div",{className:"card-image waves-effect waves-block waves-light",children:"N/A"===s?Object(i.jsx)("img",{className:"activator",src:"https://via.placeholder.com/308x456?text=".concat(t),alt:t}):Object(i.jsx)("img",{className:"activator",src:s,alt:t})}),Object(i.jsxs)("div",{className:"card-content",children:[Object(i.jsx)("span",{className:"card-title activator grey-text text-darken-4",children:t}),Object(i.jsxs)("p",{children:[c," ",Object(i.jsx)("span",{className:"right",children:n})]})]})]})}function p(e){var t=e.movies,c=void 0===t?[]:t;return Object(i.jsx)("div",{className:"movies",children:c.length?c.map((function(e){return Object(i.jsx)(m,Object(v.a)({},e),e.imdbID)})):Object(i.jsx)("h4",{children:"Nothing video"})})}function O(){return Object(i.jsx)("div",{className:"progress",children:Object(i.jsx)("div",{className:"indeterminate"})})}var x=function(e){Object(b.a)(c,e);var t=Object(u.a)(c);function c(){var e;Object(h.a)(this,c);for(var a=arguments.length,n=new Array(a),s=0;s<a;s++)n[s]=arguments[s];return(e=t.call.apply(t,[this].concat(n))).state={search:"",type:""},e.handleKey=function(t){"Enter"===t.key&&e.props.search(e.state)},e.handlerFilter=function(t){e.setState((function(){return{type:t.target.value}}),(function(){return e.props.search(e.state)}))},e}return Object(j.a)(c,[{key:"render",value:function(){var e=this,t=this.state.type;return Object(i.jsx)("div",{className:"row",children:Object(i.jsxs)("div",{className:"col s12",children:[Object(i.jsx)("div",{className:"row",children:Object(i.jsxs)("div",{style:{position:"relative"},cla:"input-field inline col s12 row",children:[Object(i.jsx)("button",{style:{position:"absolute",right:0},onClick:function(t){return e.props.search(e.state)},className:"btn waves-effect waves-light",children:"Search"}),Object(i.jsx)("input",{placeholder:"Search",type:"search",className:"validate ",value:this.state.search,onChange:function(t){return e.setState({search:t.target.value})},onKeyDown:this.handleKey})]})}),Object(i.jsxs)("div",{className:"row",children:[Object(i.jsx)("div",{className:"col c4",children:Object(i.jsxs)("label",{children:[Object(i.jsx)("input",{className:"with-gap",name:"type",type:"radio",onChange:this.handlerFilter,checked:""===t,value:""}),Object(i.jsx)("span",{children:"all"})]})}),Object(i.jsx)("div",{className:"col c4",children:Object(i.jsxs)("label",{children:[Object(i.jsx)("input",{className:"with-gap",name:"type",type:"radio",onChange:this.handlerFilter,checked:"movie"===t,value:"movie"}),Object(i.jsx)("span",{children:"movies"})]})}),Object(i.jsx)("div",{className:"col c4",children:Object(i.jsxs)("label",{children:[Object(i.jsx)("input",{className:"with-gap",name:"type",type:"radio",onChange:this.handlerFilter,checked:"series"===t,value:"series"}),Object(i.jsx)("span",{children:"series"})]})})]})]})})}}]),c}(a.Component),f="4a9b6947",g=function(e){Object(b.a)(c,e);var t=Object(u.a)(c);function c(){var e;Object(h.a)(this,c);for(var a=arguments.length,n=new Array(a),s=0;s<a;s++)n[s]=arguments[s];return(e=t.call.apply(t,[this].concat(n))).state={movies:[],loading:!0},e.handlerSearch=function(t){var c=Object(d.a)(e);e.setState({loading:!0}),fetch("https://www.omdbapi.com/?apikey=".concat(f,"&s=").concat(t.search).concat(""!==t.type?"&type=".concat(t.type):"")).then((function(e){return e.json()})).then((function(e){return c.setState({movies:e.Search,loading:!1})}))},e}return Object(j.a)(c,[{key:"componentDidMount",value:function(){var e=this;fetch("https://www.omdbapi.com/?apikey=".concat(f,"&s=matrix")).then((function(e){return e.json()})).then((function(t){return e.setState({movies:t.Search,loading:!1})})).catch((function(t){console.error(t),e.setState({loading:!1})}))}},{key:"render",value:function(){var e=this.state,t=e.movies,c=e.loading;return Object(i.jsx)("main",{className:"content",children:Object(i.jsxs)("div",{className:"container",children:[Object(i.jsx)(x,{search:this.handlerSearch}),c?Object(i.jsx)(O,{}):Object(i.jsx)(p,{movies:t})]})})}}]),c}(a.Component);c(16);var y=function(){return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)(l,{}),Object(i.jsx)(g,{}),Object(i.jsx)(o,{})]})};r.a.render(Object(i.jsx)(n.a.StrictMode,{children:Object(i.jsx)(y,{})}),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.429f988e.chunk.js.map