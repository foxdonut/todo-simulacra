!function e(t,n,r){function o(u,s){if(!n[u]){if(!t[u]){var d="function"==typeof require&&require;if(!s&&d)return d(u,!0);if(i)return i(u,!0);var a=new Error("Cannot find module '"+u+"'");throw a.code="MODULE_NOT_FOUND",a}var c=n[u]={exports:{}};t[u][0].call(c.exports,function(e){var n=t[u][1][e];return o(n?n:e)},c,c.exports,e,t,n,r)}return n[u].exports}for(var i="function"==typeof require&&require,u=0;u<r.length;u++)o(r[u]);return o}({1:[function(e,t,n){function r(e,t){e.style.display=t?"block":"none"}function o(e,t,n,r){e.querySelector("span").textContent=t,e.querySelector("button.done").addEventListener("click",function(e){e.preventDefault(),s.items.splice(r,1),s.items=s.items,s.isEmpty=s.items.length<1})}function i(e,t){e.disabled=t}var u=e("simulacra"),s={isEmpty:!1,items:["Water the plants","Feed the dog"],form:{disabled:!0}},d=document.querySelector("main"),a=document.getElementById("app").content,c=u(a,{isEmpty:u(a.querySelector("p.empty"),r),items:u(a.querySelector("li"),o),form:u(a.querySelector("form"),{disabled:u(a.querySelector("button.add"),i)})}),f=u(s,c);d.appendChild(f),d.querySelector("form").addEventListener("submit",function(e){e.preventDefault();var t=e.target.todo;s.items=s.items.concat(t.value),s.form.disabled=!0,s.isEmpty=s.items.length<1,t.value=""}),d.querySelector("input[name=todo]").addEventListener("input",function(e){s.form.disabled=e.target.value.length<1})},{simulacra:4}],2:[function(e,t,n){"use strict";function r(e,t){function n(n){function i(){return d[n]}function u(e){var t,i,u,p,y,h,v,b,g=Array.isArray(e)?e:[e];for(d[n]=e,i=Math.max(m.length,g.length),t=0;i>t;t++)p=g[t],v=l[t],y=m[t],u=null===p||void 0===p,b=s.marker.parentNode,u?(delete m[t],delete l[t],c&&c(v,p,y,t),v&&b.removeChild(v)):y!==p&&(m[t]=p,c&&c(v,p,y,t),v&&b.removeChild(v),a?(h=s.node.cloneNode(!0),h=a(h,p,y,t)||h,l[t]=b.insertBefore(h,s.marker)):f&&(h=o(s.node.cloneNode(!0),f),r(p,f),l[t]=b.insertBefore(h,s.marker)));m.length=l.length=g.length}var s=t[n],a=s.mount,c=s.unmount,f=s.definition,l=[],m=[];Object.defineProperty(e,n,{get:i,set:u,enumerable:!0}),u(d[n])}var i,u,s,d={},a=Object.keys(e);for(i=0,u=a.length;u>i;i++)s=a[i],d[s]=e[s],n(s)}var o=e("./process_nodes");t.exports=r},{"./process_nodes":5}],3:[function(e,t,n){"use strict";function r(e,t){var n,r,o=document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT),i=Object.keys(t),u=new WeakMap,s=[];for(n=0,r=i.length;r>n;n++)s[s.length]=t[i[n]].node;for(;o.nextNode()&&r;)for(n=0,r=s.length;r>n;n++)o.currentNode.isEqualNode(s[n])&&(u.set(s[n],o.currentNode),s.splice(n,1));return u}t.exports=r},{}],4:[function(e,t,n){"use strict";function r(e,t,n){if(e instanceof Node)return o(e,t,n);if("object"==typeof e)return i(e,t);throw new TypeError("First argument must be either an DOM Node or an Object.")}function o(e,t,n){var r,o,i,a,c={node:e},f=new WeakMap;if("function"==typeof t)c.mount=t,"function"==typeof n&&(c.unmount=n);else if("object"==typeof t)for(c.definition=t,r=0,i=Object.keys(t),o=i.length;o>r;r++){if(a=t[i[r]].node,!e.contains(a))throw new Error("The bound DOM Node must be contained in its parent.");if(f.get(a))throw new Error('Can not bind multiple keys to the same DOM Node. Collision found on "'+i[r]+'".');f.set(a,!0)}else{if(void 0!==t)throw new TypeError("Second argument must be either a function or an object.");"INPUT"===e.nodeName||"SELECT"===e.nodeName?"checkbox"===e.type||"radio"===e.type?c.mount=d:c.mount=s:c.mount=u}return c}function i(e,t){var n;if(Array.isArray(e))throw new TypeError("First argument must be a singular object.");if(!(t.node instanceof Node))throw new TypeError("Top-level binding must have a Node.");if("object"!=typeof t.definition)throw new TypeError("Top-level binding must be an object.");return n=a(t.node.cloneNode(!0),t.definition),c(e,t.definition),n}function u(e,t){e.textContent=t}function s(e,t){e.value=t}function d(e,t){e.checked=t}var a=e("./process_nodes"),c=e("./define_setters");t.exports=r},{"./define_setters":2,"./process_nodes":5}],5:[function(e,t,n){"use strict";function r(e,t){var n,r,u,s,d,a,c,f=Object.keys(t),l=o(e,t);for(n=0,r=f.length;r>n;n++)s=f[n],u=t[s],d=l.get(u.node),c=d.parentNode,a=document.createTextNode(i),u.marker=c.insertBefore(a,d),c.removeChild(d);return e}var o=e("./find_nodes"),i="";t.exports=r},{"./find_nodes":3}]},{},[1]);