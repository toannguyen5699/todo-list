(window["webpackJsonptodo-list"]=window["webpackJsonptodo-list"]||[]).push([[0],[,,,,,,,,,,,,function(e,t,n){e.exports=n.p+"static/media/check.40eb9cc6.svg"},function(e,t,n){e.exports=n.p+"static/media/check-complete.4b93446c.svg"},function(e,t,n){e.exports=n.p+"static/media/tick.184e8a4f.svg"},function(e,t,n){e.exports=n(23)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var o=n(0),i=n.n(o),a=n(9),r=n.n(a),c=(n(20),n(10)),s=n(7),l=n(2),m=n(3),u=n(5),p=n(4),h=n(1),d=n(6),b=(n(21),n(11)),f=n.n(b),O=(n(22),n(12)),g=n.n(O),v=n(13),y=n.n(v),j=function(e){function t(){return Object(l.a)(this,t),Object(u.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this.props,t=e.item,n=e.onClick,o=g.a;return t.isComplete&&(o=y.a),i.a.createElement("div",{onClick:n,className:f()("TodoItem",{"TodoItem-complete":t.isComplete})},i.a.createElement("img",{src:o,width:32,height:32}),i.a.createElement("p",null,this.props.item.title))}}]),t}(o.Component),w=n(14),k=n.n(w);function C(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,o)}return n}function I(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?C(n,!0).forEach(function(t){Object(c.a)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):C(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var E=function(e){function t(){var e;return Object(l.a)(this,t),(e=Object(u.a)(this,Object(p.a)(t).call(this))).state={newItem:"",todoItems:[{title:"Mua bim bim",isComplete:!0},{title:"Di da bong",isComplete:!0},{title:"Di nghi mat"}]},e.onKeyUp=e.onKeyUp.bind(Object(h.a)(e)),e.onChange=e.onChange.bind(Object(h.a)(e)),e}return Object(d.a)(t,e),Object(m.a)(t,[{key:"onItemClicked",value:function(e){var t=this;return function(n){var o=e.isComplete,i=t.state.todoItems,a=i.indexOf(e);t.setState({todoItems:[].concat(Object(s.a)(i.slice(0,a)),[I({},e,{isComplete:!o})],Object(s.a)(i.slice(a+1)))})}}},{key:"onKeyUp",value:function(e){if(13===e.keyCode){var t=e.target.value;if(!t)return;if(!(t=t.trim()))return;this.setState({newItem:"",todoItems:[{title:t,isComplete:!1}].concat(Object(s.a)(this.state.todoItems))})}}},{key:"onChange",value:function(e){this.setState({newItem:e.target.value})}},{key:"render",value:function(){var e=this,t=this.state,n=t.todoItems,o=t.newItem;return i.a.createElement("div",{className:"App"},i.a.createElement("div",{className:"Header"},i.a.createElement("img",{src:k.a,width:32,height:32}),i.a.createElement("input",{type:"text",placeholder:"Add a newItem",value:o,onChange:this.onChange,onKeyUp:this.onKeyUp})),n.length>0&&n.map(function(t,n){return i.a.createElement(j,{key:n,item:t,onClick:e.onItemClicked(t)})}),0===n.length&&"Nothing here")}}]),t}(o.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(i.a.createElement(E,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[15,1,2]]]);
//# sourceMappingURL=main.cc56da7a.chunk.js.map