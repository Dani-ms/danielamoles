/*! For license information please see commons-befe6582704689a75f3e.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"2W6z":function(e,t,n){"use strict";var r=function(){};e.exports=r},"5hD3":function(e,t,n){"use strict";n.d(t,"a",(function(){return Qe}));var r=n("Wbzz"),a=n("q1tI"),o=n.n(a),i=n("qhky"),u=n("qLTj"),c=n("dI71");function s(){return(s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function l(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}var f=n("TSYQ"),d=n.n(f);n("K9S6"),n("E9XD"),n("QLaP");function p(e){return"default"+e.charAt(0).toUpperCase()+e.substr(1)}function v(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!=typeof r)return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:String(t)}function m(e,t){return Object.keys(t).reduce((function(n,r){var o,i=n,u=i[p(r)],c=i[r],f=l(i,[p(r),r].map(v)),d=t[r],m=function(e,t,n){var r=Object(a.useRef)(void 0!==e),o=Object(a.useState)(t),i=o[0],u=o[1],c=void 0!==e,s=r.current;return r.current=c,!c&&s&&i!==t&&u(t),[c?e:i,Object(a.useCallback)((function(e){for(var t=arguments.length,r=new Array(t>1?t-1:0),a=1;a<t;a++)r[a-1]=arguments[a];n&&n.apply(void 0,[e].concat(r)),u(e)}),[n])]}(c,u,e[d]),h=m[0],y=m[1];return s({},f,((o={})[r]=h,o[d]=y,o))}),e)}n("94VI");var h=o.a.createContext({});h.Consumer,h.Provider;function y(e,t){var n=Object(a.useContext)(h);return e||n[t]||t}var b=o.a.createContext(null);b.displayName="NavbarContext";var g=b,E=o.a.createContext(null);E.displayName="CardContext";var x=E,w=Function.prototype.bind.call(Function.prototype.call,[].slice);var T=function(e){return e&&"function"!=typeof e?function(t){e.current=t}:e};var C=function(e,t){return Object(a.useMemo)((function(){return function(e,t){var n=T(e),r=T(t);return function(e){n&&n(e),r&&r(e)}}(e,t)}),[e,t])},O=o.a.createContext(null);O.displayName="NavContext";var S=O,j=o.a.createContext(null),k=function(e,t){return void 0===t&&(t=null),null!=e?String(e):t||null},N=j,A=o.a.createContext(null),P=function(){},L=o.a.forwardRef((function(e,t){var n,r,i=e.as,u=void 0===i?"ul":i,c=e.onSelect,f=e.activeKey,d=e.role,p=e.onKeyDown,v=l(e,["as","onSelect","activeKey","role","onKeyDown"]),m=Object(a.useReducer)((function(e){return!e}),!1)[1],h=Object(a.useRef)(!1),y=Object(a.useContext)(N),b=Object(a.useContext)(A);b&&(d=d||"tablist",f=b.activeKey,n=b.getControlledId,r=b.getControllerId);var g=Object(a.useRef)(null),E=function(e){var t=g.current;if(!t)return null;var n,r=(n="[data-rb-event-key]:not(.disabled)",w(t.querySelectorAll(n))),a=t.querySelector(".active");if(!a)return null;var o=r.indexOf(a);if(-1===o)return null;var i=o+e;return i>=r.length&&(i=0),i<0&&(i=r.length-1),r[i]},x=function(e,t){null!=e&&(c&&c(e,t),y&&y(e,t))};Object(a.useEffect)((function(){if(g.current&&h.current){var e=g.current.querySelector("[data-rb-event-key].active");e&&e.focus()}h.current=!1}));var T=C(t,g);return o.a.createElement(N.Provider,{value:x},o.a.createElement(S.Provider,{value:{role:d,activeKey:k(f),getControlledId:n||P,getControllerId:r||P}},o.a.createElement(u,s({},v,{onKeyDown:function(e){var t;switch(p&&p(e),e.key){case"ArrowLeft":case"ArrowUp":t=E(-1);break;case"ArrowRight":case"ArrowDown":t=E(1);break;default:return}t&&(e.preventDefault(),x(t.dataset.rbEventKey,e),h.current=!0,m())},ref:T,role:d}))))})),I=o.a.forwardRef((function(e,t){var n=e.bsPrefix,r=e.className,a=e.children,i=e.as,u=void 0===i?"div":i,c=l(e,["bsPrefix","className","children","as"]);return n=y(n,"nav-item"),o.a.createElement(u,s({},c,{ref:t,className:d()(r,n)}),a)}));I.displayName="NavItem";var R=I;var M=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.filter((function(e){return null!=e})).reduce((function(e,t){if("function"!=typeof t)throw new Error("Invalid Argument Type, must only provide functions, undefined, or null.");return null===e?t:function(){for(var n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];e.apply(this,r),t.apply(this,r)}}),null)};function D(e){return!e||"#"===e.trim()}var _=o.a.forwardRef((function(e,t){var n=e.as,r=void 0===n?"a":n,a=e.disabled,i=e.onKeyDown,u=l(e,["as","disabled","onKeyDown"]),c=function(e){var t=u.href,n=u.onClick;(a||D(t))&&e.preventDefault(),a?e.stopPropagation():n&&n(e)};return D(u.href)&&(u.role=u.role||"button",u.href=u.href||"#"),a&&(u.tabIndex=-1,u["aria-disabled"]=!0),o.a.createElement(r,s({ref:t},u,{onClick:c,onKeyDown:M((function(e){" "===e.key&&(e.preventDefault(),c(e))}),i)}))}));_.displayName="SafeAnchor";var K=_;var q=function(e){var t=Object(a.useRef)(e);return Object(a.useEffect)((function(){t.current=e}),[e]),t};function U(e){var t=q(e);return Object(a.useCallback)((function(){return t.current&&t.current.apply(t,arguments)}),[t])}n("2W6z");var H=o.a.forwardRef((function(e,t){var n=e.active,r=e.className,i=e.eventKey,u=e.onSelect,c=e.onClick,f=e.as,p=l(e,["active","className","eventKey","onSelect","onClick","as"]),v=k(i,p.href),m=Object(a.useContext)(N),h=Object(a.useContext)(S),y=n;if(h){p.role||"tablist"!==h.role||(p.role="tab");var b=h.getControllerId(v),g=h.getControlledId(v);p["data-rb-event-key"]=v,p.id=b||p.id,p["aria-controls"]=g||p["aria-controls"],y=null==n&&null!=v?h.activeKey===v:n}"tab"===p.role&&(p.tabIndex=y?p.tabIndex:-1,p["aria-selected"]=y);var E=U((function(e){c&&c(e),null!=v&&(u&&u(v,e),m&&m(v,e))}));return o.a.createElement(f,s({},p,{ref:t,onClick:E,className:d()(r,y&&"active")}))}));H.defaultProps={disabled:!1};var B=H,V={disabled:!1,as:K},Y=o.a.forwardRef((function(e,t){var n=e.bsPrefix,r=e.disabled,a=e.className,i=e.href,u=e.eventKey,c=e.onSelect,f=e.as,p=l(e,["bsPrefix","disabled","className","href","eventKey","onSelect","as"]);return n=y(n,"nav-link"),o.a.createElement(B,s({},p,{href:i,ref:t,eventKey:u,as:f,disabled:r,onSelect:c,className:d()(a,n,r&&"disabled")}))}));Y.displayName="NavLink",Y.defaultProps=V;var F=Y,z=o.a.forwardRef((function(e,t){var n,r,i,u=m(e,{activeKey:"onSelect"}),c=u.as,f=void 0===c?"div":c,p=u.bsPrefix,v=u.variant,h=u.fill,b=u.justify,E=u.navbar,w=u.className,T=u.children,C=u.activeKey,O=l(u,["as","bsPrefix","variant","fill","justify","navbar","className","children","activeKey"]),S=y(p,"nav"),j=!1,k=Object(a.useContext)(g),N=Object(a.useContext)(x);return k?(r=k.bsPrefix,j=null==E||E):N&&(i=N.cardHeaderBsPrefix),o.a.createElement(L,s({as:f,ref:t,activeKey:C,className:d()(w,(n={},n[S]=!j,n[r+"-nav"]=j,n[i+"-"+v]=!!i,n[S+"-"+v]=!!v,n[S+"-fill"]=h,n[S+"-justified"]=b,n))},O),T)}));z.displayName="Nav",z.defaultProps={justify:!1,fill:!1},z.Item=R,z.Link=F;var W=z,X=/-(.)/g;var G=function(e){return e[0].toUpperCase()+(t=e,t.replace(X,(function(e,t){return t.toUpperCase()}))).slice(1);var t};var Z=o.a.forwardRef((function(e,t){var n=e.bsPrefix,r=e.className,a=e.as,i=l(e,["bsPrefix","className","as"]);n=y(n,"navbar-brand");var u=a||(i.href?"a":"span");return o.a.createElement(u,s({},i,{ref:t,className:d()(r,n)}))}));Z.displayName="NavbarBrand";var $=Z;function Q(e){var t=function(e){return e&&e.ownerDocument||document}(e);return t&&t.defaultView||window}var J=/([A-Z])/g;var ee=/^ms-/;function te(e){return function(e){return e.replace(J,"-$1").toLowerCase()}(e).replace(ee,"-ms-")}var ne=/^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i;var re=function(e,t){var n="",r="";if("string"==typeof t)return e.style.getPropertyValue(te(t))||function(e,t){return Q(e).getComputedStyle(e,t)}(e).getPropertyValue(te(t));Object.keys(t).forEach((function(a){var o=t[a];o||0===o?!function(e){return!(!e||!ne.test(e))}(a)?n+=te(a)+": "+o+";":r+=a+"("+o+") ":e.style.removeProperty(te(a))})),r&&(n+="transform: "+r+";"),e.style.cssText+=";"+n},ae=!("undefined"==typeof window||!window.document||!window.document.createElement),oe=!1,ie=!1;try{var ue={get passive(){return oe=!0},get once(){return ie=oe=!0}};ae&&(window.addEventListener("test",ue,ue),window.removeEventListener("test",ue,!0))}catch(Je){}var ce=function(e,t,n,r){if(r&&"boolean"!=typeof r&&!ie){var a=r.once,o=r.capture,i=n;!ie&&a&&(i=n.__once||function e(r){this.removeEventListener(t,e,o),n.call(this,r)},n.__once=i),e.addEventListener(t,i,oe?r:o)}e.addEventListener(t,n,r)};var se=function(e,t,n,r){var a=r&&"boolean"!=typeof r?r.capture:r;e.removeEventListener(t,n,a),n.__once&&e.removeEventListener(t,n.__once,a)};var le=function(e,t,n,r){return ce(e,t,n,r),function(){se(e,t,n,r)}};function fe(e,t,n){void 0===n&&(n=5);var r=!1,a=setTimeout((function(){r||function(e){var t=document.createEvent("HTMLEvents");t.initEvent("transitionend",!0,!0),e.dispatchEvent(t)}(e)}),t+n),o=le(e,"transitionend",(function(){r=!0}),{once:!0});return function(){clearTimeout(a),o()}}function de(e,t,n,r){var a,o;null==n&&(a=re(e,"transitionDuration")||"",o=-1===a.indexOf("ms")?1e3:1,n=parseFloat(a)*o||0);var i=fe(e,n,r),u=le(e,"transitionend",t);return function(){i(),u()}}var pe=n("i8i4"),ve=n.n(pe),me=!1,he=o.a.createContext(null),ye=function(e){function t(t,n){var r;r=e.call(this,t,n)||this;var a,o=n&&!n.isMounting?t.enter:t.appear;return r.appearStatus=null,t.in?o?(a="exited",r.appearStatus="entering"):a="entered":a=t.unmountOnExit||t.mountOnEnter?"unmounted":"exited",r.state={status:a},r.nextCallback=null,r}Object(c.a)(t,e),t.getDerivedStateFromProps=function(e,t){return e.in&&"unmounted"===t.status?{status:"exited"}:null};var n=t.prototype;return n.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},n.componentDidUpdate=function(e){var t=null;if(e!==this.props){var n=this.state.status;this.props.in?"entering"!==n&&"entered"!==n&&(t="entering"):"entering"!==n&&"entered"!==n||(t="exiting")}this.updateStatus(!1,t)},n.componentWillUnmount=function(){this.cancelNextCallback()},n.getTimeouts=function(){var e,t,n,r=this.props.timeout;return e=t=n=r,null!=r&&"number"!=typeof r&&(e=r.exit,t=r.enter,n=void 0!==r.appear?r.appear:t),{exit:e,enter:t,appear:n}},n.updateStatus=function(e,t){void 0===e&&(e=!1),null!==t?(this.cancelNextCallback(),"entering"===t?this.performEnter(e):this.performExit()):this.props.unmountOnExit&&"exited"===this.state.status&&this.setState({status:"unmounted"})},n.performEnter=function(e){var t=this,n=this.props.enter,r=this.context?this.context.isMounting:e,a=this.props.nodeRef?[r]:[ve.a.findDOMNode(this),r],o=a[0],i=a[1],u=this.getTimeouts(),c=r?u.appear:u.enter;!e&&!n||me?this.safeSetState({status:"entered"},(function(){t.props.onEntered(o)})):(this.props.onEnter(o,i),this.safeSetState({status:"entering"},(function(){t.props.onEntering(o,i),t.onTransitionEnd(c,(function(){t.safeSetState({status:"entered"},(function(){t.props.onEntered(o,i)}))}))})))},n.performExit=function(){var e=this,t=this.props.exit,n=this.getTimeouts(),r=this.props.nodeRef?void 0:ve.a.findDOMNode(this);t&&!me?(this.props.onExit(r),this.safeSetState({status:"exiting"},(function(){e.props.onExiting(r),e.onTransitionEnd(n.exit,(function(){e.safeSetState({status:"exited"},(function(){e.props.onExited(r)}))}))}))):this.safeSetState({status:"exited"},(function(){e.props.onExited(r)}))},n.cancelNextCallback=function(){null!==this.nextCallback&&(this.nextCallback.cancel(),this.nextCallback=null)},n.safeSetState=function(e,t){t=this.setNextCallback(t),this.setState(e,t)},n.setNextCallback=function(e){var t=this,n=!0;return this.nextCallback=function(r){n&&(n=!1,t.nextCallback=null,e(r))},this.nextCallback.cancel=function(){n=!1},this.nextCallback},n.onTransitionEnd=function(e,t){this.setNextCallback(t);var n=this.props.nodeRef?this.props.nodeRef.current:ve.a.findDOMNode(this),r=null==e&&!this.props.addEndListener;if(n&&!r){if(this.props.addEndListener){var a=this.props.nodeRef?[this.nextCallback]:[n,this.nextCallback],o=a[0],i=a[1];this.props.addEndListener(o,i)}null!=e&&setTimeout(this.nextCallback,e)}else setTimeout(this.nextCallback,0)},n.render=function(){var e=this.state.status;if("unmounted"===e)return null;var t=this.props,n=t.children,r=(t.in,t.mountOnEnter,t.unmountOnExit,t.appear,t.enter,t.exit,t.timeout,t.addEndListener,t.onEnter,t.onEntering,t.onEntered,t.onExit,t.onExiting,t.onExited,t.nodeRef,l(t,["children","in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","addEndListener","onEnter","onEntering","onEntered","onExit","onExiting","onExited","nodeRef"]));return o.a.createElement(he.Provider,{value:null},"function"==typeof n?n(e,r):o.a.cloneElement(o.a.Children.only(n),r))},t}(o.a.Component);function be(){}ye.contextType=he,ye.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:be,onEntering:be,onEntered:be,onExit:be,onExiting:be,onExited:be},ye.UNMOUNTED="unmounted",ye.EXITED="exited",ye.ENTERING="entering",ye.ENTERED="entered",ye.EXITING="exiting";var ge,Ee=ye;var xe={height:["marginTop","marginBottom"],width:["marginLeft","marginRight"]};function we(e,t){var n=t["offset"+e[0].toUpperCase()+e.slice(1)],r=xe[e];return n+parseInt(re(t,r[0]),10)+parseInt(re(t,r[1]),10)}var Te=((ge={}).exited="collapse",ge.exiting="collapsing",ge.entering="collapsing",ge.entered="collapse show",ge),Ce={in:!1,timeout:300,mountOnEnter:!1,unmountOnExit:!1,appear:!1,getDimensionValue:we},Oe=o.a.forwardRef((function(e,t){var n=e.onEnter,r=e.onEntering,i=e.onEntered,u=e.onExit,c=e.onExiting,f=e.className,p=e.children,v=e.dimension,m=void 0===v?"height":v,h=e.getDimensionValue,y=void 0===h?we:h,b=l(e,["onEnter","onEntering","onEntered","onExit","onExiting","className","children","dimension","getDimensionValue"]),g="function"==typeof m?m():m,E=Object(a.useMemo)((function(){return M((function(e){e.style[g]="0"}),n)}),[g,n]),x=Object(a.useMemo)((function(){return M((function(e){var t="scroll"+g[0].toUpperCase()+g.slice(1);e.style[g]=e[t]+"px"}),r)}),[g,r]),w=Object(a.useMemo)((function(){return M((function(e){e.style[g]=null}),i)}),[g,i]),T=Object(a.useMemo)((function(){return M((function(e){e.style[g]=y(g,e)+"px",e.offsetHeight}),u)}),[u,y,g]),C=Object(a.useMemo)((function(){return M((function(e){e.style[g]=null}),c)}),[g,c]);return o.a.createElement(Ee,s({ref:t,addEndListener:de},b,{"aria-expanded":b.role?b.in:null,onEnter:E,onEntering:x,onEntered:w,onExit:T,onExiting:C}),(function(e,t){return o.a.cloneElement(p,s({},t,{className:d()(f,p.props.className,Te[e],"width"===g&&"width")}))}))}));Oe.defaultProps=Ce;var Se=Oe,je=o.a.forwardRef((function(e,t){var n=e.children,r=e.bsPrefix,a=l(e,["children","bsPrefix"]);return r=y(r,"navbar-collapse"),o.a.createElement(g.Consumer,null,(function(e){return o.a.createElement(Se,s({in:!(!e||!e.expanded)},a),o.a.createElement("div",{ref:t,className:r},n))}))}));je.displayName="NavbarCollapse";var ke=je,Ne=o.a.forwardRef((function(e,t){var n=e.bsPrefix,r=e.className,i=e.children,u=e.label,c=e.as,f=void 0===c?"button":c,p=e.onClick,v=l(e,["bsPrefix","className","children","label","as","onClick"]);n=y(n,"navbar-toggler");var m=Object(a.useContext)(g)||{},h=m.onToggle,b=m.expanded,E=U((function(e){p&&p(e),h&&h()}));return"button"===f&&(v.type="button"),o.a.createElement(f,s({},v,{ref:t,onClick:E,"aria-label":u,className:d()(r,n,!b&&"collapsed")}),i||o.a.createElement("span",{className:n+"-icon"}))}));Ne.displayName="NavbarToggle",Ne.defaultProps={label:"Toggle navigation"};var Ae,Pe,Le,Ie,Re,Me,De,_e,Ke=Ne,qe=(Ae="navbar-text",Ie=(Le=void 0===(Pe={Component:"span"})?{}:Pe).displayName,Re=void 0===Ie?G(Ae):Ie,Me=Le.Component,De=Le.defaultProps,(_e=o.a.forwardRef((function(e,t){var n=e.className,r=e.bsPrefix,a=e.as,i=void 0===a?Me||"div":a,u=l(e,["className","bsPrefix","as"]),c=y(r,Ae);return o.a.createElement(i,s({ref:t,className:d()(n,c)},u))}))).defaultProps=De,_e.displayName=Re,_e),Ue=o.a.forwardRef((function(e,t){var n=m(e,{expanded:"onToggle"}),r=n.bsPrefix,i=n.expand,u=n.variant,c=n.bg,f=n.fixed,p=n.sticky,v=n.className,h=n.children,b=n.as,E=void 0===b?"nav":b,x=n.expanded,w=n.onToggle,T=n.onSelect,C=n.collapseOnSelect,O=l(n,["bsPrefix","expand","variant","bg","fixed","sticky","className","children","as","expanded","onToggle","onSelect","collapseOnSelect"]),S=y(r,"navbar"),j=Object(a.useCallback)((function(){T&&T.apply(void 0,arguments),C&&x&&w&&w(!1)}),[T,C,x,w]);void 0===O.role&&"nav"!==E&&(O.role="navigation");var k=S+"-expand";"string"==typeof i&&(k=k+"-"+i);var A=Object(a.useMemo)((function(){return{onToggle:function(){return w&&w(!x)},bsPrefix:S,expanded:!!x}}),[S,x,w]);return o.a.createElement(g.Provider,{value:A},o.a.createElement(N.Provider,{value:j},o.a.createElement(E,s({ref:t},O,{className:d()(v,S,i&&k,u&&S+"-"+u,c&&"bg-"+c,p&&"sticky-"+p,f&&"fixed-"+f)}),h)))}));Ue.defaultProps={expand:!0,variant:"light",collapseOnSelect:!1},Ue.displayName="Navbar",Ue.Brand=$,Ue.Toggle=Ke,Ue.Collapse=ke,Ue.Text=qe;var He=Ue,Be=n("SyVx"),Ve=n("7ok7");var Ye="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!=typeof msCrypto&&"function"==typeof msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto),Fe=new Uint8Array(16);function ze(){if(!Ye)throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return Ye(Fe)}for(var We=[],Xe=0;Xe<256;++Xe)We[Xe]=(Xe+256).toString(16).substr(1);var Ge=function(e,t){var n=t||0,r=We;return[r[e[n++]],r[e[n++]],r[e[n++]],r[e[n++]],"-",r[e[n++]],r[e[n++]],"-",r[e[n++]],r[e[n++]],"-",r[e[n++]],r[e[n++]],"-",r[e[n++]],r[e[n++]],r[e[n++]],r[e[n++]],r[e[n++]],r[e[n++]]].join("")};var Ze=function(e,t,n){var r=t&&n||0;"string"==typeof e&&(t="binary"===e?new Array(16):null,e=null);var a=(e=e||{}).random||(e.rng||ze)();if(a[6]=15&a[6]|64,a[8]=63&a[8]|128,t)for(var o=0;o<16;++o)t[r+o]=a[o];return t||Ge(a)},$e=function(e){function t(t){var n;return(n=e.call(this,t)||this).state={domId:Ze()},n}Object(c.a)(t,e);var n=t.prototype;return n.componentDidMount=function(){var e=this;this.setState({isScrolled:this.isScrolled()},(function(){var t=function(){return e.handleScroll()};e.setState({scrollListener:t},(function(){window.addEventListener("scroll",t)}))}));var t=function(){e.state.expanded&&e.toggleMenu()};this.setState({windowResizeListener:t},(function(){window.addEventListener("resize",t)}))},n.componentWillUnmount=function(){window.removeEventListener("scroll",this.state.scrollListener||Object(u.a)()),window.removeEventListener("resize",this.state.windowResizeListener||Object(u.a)())},n.isScrolled=function(){return window.pageYOffset>0},n.handleScroll=function(){var e=this.isScrolled();this.state.isScrolled!==e&&this.setState({isScrolled:e})},n.toggleMenu=function(){this.setState({expanded:!this.state.expanded})},n.render=function(){var e,t,n=this;return o.a.createElement(o.a.Fragment,null,o.a.createElement("header",{className:"sticky-top"},o.a.createElement(He,{className:"bg-secondary shadow",collapseOnSelect:!0,expand:"lg",expanded:this.state.expanded,variant:"dark"},o.a.createElement(He.Toggle,{onClick:function(){return n.toggleMenu()},"aria-controls":this.state.domId}),o.a.createElement(He.Collapse,{id:this.state.domId},o.a.createElement(W,{className:"container px-0 mr-auto"},o.a.createElement(W.Link,{href:Ve.a.getHref()},"Home"),o.a.createElement(W.Link,{href:Ve.a.getHref()},"About"),o.a.createElement(W.Link,{href:Be.a.getHref()},"Game"))))),this.state.expanded?o.a.createElement("div",Object.assign({},(void 0===t&&(t="button"),{onClick:e=function(){n.state.expanded&&n.toggleMenu()},onKeyPress:function(t){if(13===t.keyCode||32===t.keyCode)return e()},role:t}),{className:"header__backdrop"})):null)},t}(o.a.Component);function Qe(e){return o.a.createElement(r.a,{query:"4261851921",render:function(t){var n,r,a=t.site,c=(null==a||null===(n=a.siteMetadata)||void 0===n?void 0:n.title)||Object(u.a)(),s=(null==a||null===(r=a.siteMetadata)||void 0===r?void 0:r.siteUrl)||Object(u.a)();return o.a.createElement("div",{className:"d-flex flex-column min-vh-100"},o.a.createElement(i.a,{titleTemplate:"%s | "+c,htmlAttributes:{lang:"pt-PT"},title:e.title,meta:[{property:"og:title",content:e.title},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:title",content:e.title}]}),o.a.createElement($e,null),o.a.createElement("main",{className:"flex-grow-1"},e.cover?e.cover():null,o.a.createElement("div",{className:(e.noContainment?"":"container")+" "+(e.noTopPadding?"":"pt-5")+" "+(e.noBottomPadding?"":"pb-5")},e.children({siteUrl:s}))),o.a.createElement("footer",{className:"bg-dark text-white w-100 py-4"},o.a.createElement("p",{className:"text-center"},"Copyright © ",(new Date).getFullYear(),","," ","Daniela Santos")))}})}},"7ok7":function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var r={label:"Início",getHref:function(){return"/"}}},"8+s/":function(e,t,n){"use strict";var r,a=n("q1tI"),o=(r=a)&&"object"==typeof r&&"default"in r?r.default:r;function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var u=!("undefined"==typeof window||!window.document||!window.document.createElement);e.exports=function(e,t,n){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==n&&"function"!=typeof n)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(r){if("function"!=typeof r)throw new Error("Expected WrappedComponent to be a React component.");var c,s=[];function l(){c=e(s.map((function(e){return e.props}))),f.canUseDOM?t(c):n&&(c=n(c))}var f=function(e){var t,n;function a(){return e.apply(this,arguments)||this}n=e,(t=a).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,a.peek=function(){return c},a.rewind=function(){if(a.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=c;return c=void 0,s=[],e};var i=a.prototype;return i.UNSAFE_componentWillMount=function(){s.push(this),l()},i.componentDidUpdate=function(){l()},i.componentWillUnmount=function(){var e=s.indexOf(this);s.splice(e,1),l()},i.render=function(){return o.createElement(r,this.props)},a}(a.PureComponent);return i(f,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(r)+")"),i(f,"canUseDOM",u),f}}},K9S6:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];function r(){for(var e=arguments.length,n=Array(e),r=0;r<e;r++)n[r]=arguments[r];var a=null;return t.forEach((function(e){if(null==a){var t=e.apply(void 0,n);null!=t&&(a=t)}})),a}return(0,o.default)(r)};var r,a=n("pvIh"),o=(r=a)&&r.__esModule?r:{default:r};e.exports=t.default},SyVx:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var r={label:"Game",getHref:function(){return"/game"}}},TSYQ:function(e,t,n){var r;!function(){"use strict";var n={}.hasOwnProperty;function a(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var o=typeof r;if("string"===o||"number"===o)e.push(r);else if(Array.isArray(r)&&r.length){var i=a.apply(null,r);i&&e.push(i)}else if("object"===o)for(var u in r)n.call(r,u)&&r[u]&&e.push(u)}}return e.join(" ")}e.exports?(a.default=a,e.exports=a):void 0===(r=function(){return a}.apply(t,[]))||(e.exports=r)}()},ZhWT:function(e,t){var n="undefined"!=typeof Element,r="function"==typeof Map,a="function"==typeof Set,o="function"==typeof ArrayBuffer&&!!ArrayBuffer.isView;e.exports=function(e,t){try{return function e(t,i){if(t===i)return!0;if(t&&i&&"object"==typeof t&&"object"==typeof i){if(t.constructor!==i.constructor)return!1;var u,c,s,l;if(Array.isArray(t)){if((u=t.length)!=i.length)return!1;for(c=u;0!=c--;)if(!e(t[c],i[c]))return!1;return!0}if(r&&t instanceof Map&&i instanceof Map){if(t.size!==i.size)return!1;for(l=t.entries();!(c=l.next()).done;)if(!i.has(c.value[0]))return!1;for(l=t.entries();!(c=l.next()).done;)if(!e(c.value[1],i.get(c.value[0])))return!1;return!0}if(a&&t instanceof Set&&i instanceof Set){if(t.size!==i.size)return!1;for(l=t.entries();!(c=l.next()).done;)if(!i.has(c.value[0]))return!1;return!0}if(o&&ArrayBuffer.isView(t)&&ArrayBuffer.isView(i)){if((u=t.length)!=i.length)return!1;for(c=u;0!=c--;)if(t[c]!==i[c])return!1;return!0}if(t.constructor===RegExp)return t.source===i.source&&t.flags===i.flags;if(t.valueOf!==Object.prototype.valueOf)return t.valueOf()===i.valueOf();if(t.toString!==Object.prototype.toString)return t.toString()===i.toString();if((u=(s=Object.keys(t)).length)!==Object.keys(i).length)return!1;for(c=u;0!=c--;)if(!Object.prototype.hasOwnProperty.call(i,s[c]))return!1;if(n&&t instanceof Element)return!1;for(c=u;0!=c--;)if(("_owner"!==s[c]&&"__v"!==s[c]&&"__o"!==s[c]||!t.$$typeof)&&!e(t[s[c]],i[s[c]]))return!1;return!0}return t!=t&&i!=i}(e,t)}catch(i){if((i.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw i}}},pvIh:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){function t(t,n,r,a,o,i){var u=a||"<<anonymous>>",c=i||r;if(null==n[r])return t?new Error("Required "+o+" `"+c+"` was not specified in `"+u+"`."):null;for(var s=arguments.length,l=Array(s>6?s-6:0),f=6;f<s;f++)l[f-6]=arguments[f];return e.apply(void 0,[n,r,u,o,c].concat(l))}var n=t.bind(null,!1);return n.isRequired=t.bind(null,!0),n},e.exports=t.default},qLTj:function(e,t,n){"use strict";function r(e){throw new Error(e)}n.d(t,"a",(function(){return r}))},qhky:function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return me}));n("E9XD");var r,a,o,i,u=n("17x9"),c=n.n(u),s=n("8+s/"),l=n.n(s),f=n("ZhWT"),d=n.n(f),p=n("q1tI"),v=n.n(p),m=n("YVoz"),h=n.n(m),y="bodyAttributes",b="htmlAttributes",g="titleAttributes",E={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},x=(Object.keys(E).map((function(e){return E[e]})),"charset"),w="cssText",T="href",C="http-equiv",O="innerHTML",S="itemprop",j="name",k="property",N="rel",A="src",P="target",L={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},I="defaultTitle",R="defer",M="encodeSpecialCharacters",D="onChangeClientState",_="titleTemplate",K=Object.keys(L).reduce((function(e,t){return e[L[t]]=t,e}),{}),q=[E.NOSCRIPT,E.SCRIPT,E.STYLE],U="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},H=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},B=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),V=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Y=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n},F=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},z=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===t?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},W=function(e){var t=Q(e,E.TITLE),n=Q(e,_);if(n&&t)return n.replace(/%s/g,(function(){return Array.isArray(t)?t.join(""):t}));var r=Q(e,I);return t||r||void 0},X=function(e){return Q(e,D)||function(){}},G=function(e,t){return t.filter((function(t){return void 0!==t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return V({},e,t)}),{})},Z=function(e,t){return t.filter((function(e){return void 0!==e[E.BASE]})).map((function(e){return e[E.BASE]})).reverse().reduce((function(t,n){if(!t.length)for(var r=Object.keys(n),a=0;a<r.length;a++){var o=r[a].toLowerCase();if(-1!==e.indexOf(o)&&n[o])return t.concat(n)}return t}),[])},$=function(e,t,n){var r={};return n.filter((function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&re("Helmet: "+e+' should be of type "Array". Instead found type "'+U(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,n){var a={};n.filter((function(e){for(var n=void 0,o=Object.keys(e),i=0;i<o.length;i++){var u=o[i],c=u.toLowerCase();-1===t.indexOf(c)||n===N&&"canonical"===e[n].toLowerCase()||c===N&&"stylesheet"===e[c].toLowerCase()||(n=c),-1===t.indexOf(u)||u!==O&&u!==w&&u!==S||(n=u)}if(!n||!e[n])return!1;var s=e[n].toLowerCase();return r[n]||(r[n]={}),a[n]||(a[n]={}),!r[n][s]&&(a[n][s]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var o=Object.keys(a),i=0;i<o.length;i++){var u=o[i],c=h()({},r[u],a[u]);r[u]=c}return e}),[]).reverse()},Q=function(e,t){for(var n=e.length-1;n>=0;n--){var r=e[n];if(r.hasOwnProperty(t))return r[t]}return null},J=(r=Date.now(),function(e){var t=Date.now();t-r>16?(r=t,e(t)):setTimeout((function(){J(e)}),0)}),ee=function(e){return clearTimeout(e)},te="undefined"!=typeof window?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||J:e.requestAnimationFrame||J,ne="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||ee:e.cancelAnimationFrame||ee,re=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},ae=null,oe=function(e,t){var n=e.baseTag,r=e.bodyAttributes,a=e.htmlAttributes,o=e.linkTags,i=e.metaTags,u=e.noscriptTags,c=e.onChangeClientState,s=e.scriptTags,l=e.styleTags,f=e.title,d=e.titleAttributes;ce(E.BODY,r),ce(E.HTML,a),ue(f,d);var p={baseTag:se(E.BASE,n),linkTags:se(E.LINK,o),metaTags:se(E.META,i),noscriptTags:se(E.NOSCRIPT,u),scriptTags:se(E.SCRIPT,s),styleTags:se(E.STYLE,l)},v={},m={};Object.keys(p).forEach((function(e){var t=p[e],n=t.newTags,r=t.oldTags;n.length&&(v[e]=n),r.length&&(m[e]=p[e].oldTags)})),t&&t(),c(e,v,m)},ie=function(e){return Array.isArray(e)?e.join(""):e},ue=function(e,t){void 0!==e&&document.title!==e&&(document.title=ie(e)),ce(E.TITLE,t)},ce=function(e,t){var n=document.getElementsByTagName(e)[0];if(n){for(var r=n.getAttribute("data-react-helmet"),a=r?r.split(","):[],o=[].concat(a),i=Object.keys(t),u=0;u<i.length;u++){var c=i[u],s=t[c]||"";n.getAttribute(c)!==s&&n.setAttribute(c,s),-1===a.indexOf(c)&&a.push(c);var l=o.indexOf(c);-1!==l&&o.splice(l,1)}for(var f=o.length-1;f>=0;f--)n.removeAttribute(o[f]);a.length===o.length?n.removeAttribute("data-react-helmet"):n.getAttribute("data-react-helmet")!==i.join(",")&&n.setAttribute("data-react-helmet",i.join(","))}},se=function(e,t){var n=document.head||document.querySelector(E.HEAD),r=n.querySelectorAll(e+"[data-react-helmet]"),a=Array.prototype.slice.call(r),o=[],i=void 0;return t&&t.length&&t.forEach((function(t){var n=document.createElement(e);for(var r in t)if(t.hasOwnProperty(r))if(r===O)n.innerHTML=t.innerHTML;else if(r===w)n.styleSheet?n.styleSheet.cssText=t.cssText:n.appendChild(document.createTextNode(t.cssText));else{var u=void 0===t[r]?"":t[r];n.setAttribute(r,u)}n.setAttribute("data-react-helmet","true"),a.some((function(e,t){return i=t,n.isEqualNode(e)}))?a.splice(i,1):o.push(n)})),a.forEach((function(e){return e.parentNode.removeChild(e)})),o.forEach((function(e){return n.appendChild(e)})),{oldTags:a,newTags:o}},le=function(e){return Object.keys(e).reduce((function(t,n){var r=void 0!==e[n]?n+'="'+e[n]+'"':""+n;return t?t+" "+r:r}),"")},fe=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[L[n]||n]=e[n],t}),t)},de=function(e,t,n){switch(e){case E.TITLE:return{toComponent:function(){return e=t.title,n=t.titleAttributes,(r={key:e})["data-react-helmet"]=!0,a=fe(n,r),[v.a.createElement(E.TITLE,a,e)];var e,n,r,a},toString:function(){return function(e,t,n,r){var a=le(n),o=ie(t);return a?"<"+e+' data-react-helmet="true" '+a+">"+z(o,r)+"</"+e+">":"<"+e+' data-react-helmet="true">'+z(o,r)+"</"+e+">"}(e,t.title,t.titleAttributes,n)}};case y:case b:return{toComponent:function(){return fe(t)},toString:function(){return le(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,n){var r,a=((r={key:n})["data-react-helmet"]=!0,r);return Object.keys(t).forEach((function(e){var n=L[e]||e;if(n===O||n===w){var r=t.innerHTML||t.cssText;a.dangerouslySetInnerHTML={__html:r}}else a[n]=t[e]})),v.a.createElement(e,a)}))}(e,t)},toString:function(){return function(e,t,n){return t.reduce((function(t,r){var a=Object.keys(r).filter((function(e){return!(e===O||e===w)})).reduce((function(e,t){var a=void 0===r[t]?t:t+'="'+z(r[t],n)+'"';return e?e+" "+a:a}),""),o=r.innerHTML||r.cssText||"",i=-1===q.indexOf(e);return t+"<"+e+' data-react-helmet="true" '+a+(i?"/>":">"+o+"</"+e+">")}),"")}(e,t,n)}}}},pe=function(e){var t=e.baseTag,n=e.bodyAttributes,r=e.encode,a=e.htmlAttributes,o=e.linkTags,i=e.metaTags,u=e.noscriptTags,c=e.scriptTags,s=e.styleTags,l=e.title,f=void 0===l?"":l,d=e.titleAttributes;return{base:de(E.BASE,t,r),bodyAttributes:de(y,n,r),htmlAttributes:de(b,a,r),link:de(E.LINK,o,r),meta:de(E.META,i,r),noscript:de(E.NOSCRIPT,u,r),script:de(E.SCRIPT,c,r),style:de(E.STYLE,s,r),title:de(E.TITLE,{title:f,titleAttributes:d},r)}},ve=l()((function(e){return{baseTag:Z([T,P],e),bodyAttributes:G(y,e),defer:Q(e,R),encode:Q(e,M),htmlAttributes:G(b,e),linkTags:$(E.LINK,[N,T],e),metaTags:$(E.META,[j,x,C,k,S],e),noscriptTags:$(E.NOSCRIPT,[O],e),onChangeClientState:X(e),scriptTags:$(E.SCRIPT,[A,O],e),styleTags:$(E.STYLE,[w],e),title:W(e),titleAttributes:G(g,e)}}),(function(e){ae&&ne(ae),e.defer?ae=te((function(){oe(e,(function(){ae=null}))})):(oe(e),ae=null)}),pe)((function(){return null})),me=(a=ve,i=o=function(e){function t(){return H(this,t),F(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.shouldComponentUpdate=function(e){return!d()(this.props,e)},t.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case E.SCRIPT:case E.NOSCRIPT:return{innerHTML:t};case E.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},t.prototype.flattenArrayTypeChildren=function(e){var t,n=e.child,r=e.arrayTypeChildren,a=e.newChildProps,o=e.nestedChildren;return V({},r,((t={})[n.type]=[].concat(r[n.type]||[],[V({},a,this.mapNestedChildrenToProps(n,o))]),t))},t.prototype.mapObjectTypeChildren=function(e){var t,n,r=e.child,a=e.newProps,o=e.newChildProps,i=e.nestedChildren;switch(r.type){case E.TITLE:return V({},a,((t={})[r.type]=i,t.titleAttributes=V({},o),t));case E.BODY:return V({},a,{bodyAttributes:V({},o)});case E.HTML:return V({},a,{htmlAttributes:V({},o)})}return V({},a,((n={})[r.type]=V({},o),n))},t.prototype.mapArrayTypeChildrenToProps=function(e,t){var n=V({},t);return Object.keys(e).forEach((function(t){var r;n=V({},n,((r={})[t]=e[t],r))})),n},t.prototype.warnOnInvalidChildren=function(e,t){return!0},t.prototype.mapChildrenToProps=function(e,t){var n=this,r={};return v.a.Children.forEach(e,(function(e){if(e&&e.props){var a=e.props,o=a.children,i=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[K[n]||n]=e[n],t}),t)}(Y(a,["children"]));switch(n.warnOnInvalidChildren(e,o),e.type){case E.LINK:case E.META:case E.NOSCRIPT:case E.SCRIPT:case E.STYLE:r=n.flattenArrayTypeChildren({child:e,arrayTypeChildren:r,newChildProps:i,nestedChildren:o});break;default:t=n.mapObjectTypeChildren({child:e,newProps:t,newChildProps:i,nestedChildren:o})}}})),t=this.mapArrayTypeChildrenToProps(r,t)},t.prototype.render=function(){var e=this.props,t=e.children,n=Y(e,["children"]),r=V({},n);return t&&(r=this.mapChildrenToProps(t,r)),v.a.createElement(a,r)},B(t,null,[{key:"canUseDOM",set:function(e){a.canUseDOM=e}}]),t}(v.a.Component),o.propTypes={base:c.a.object,bodyAttributes:c.a.object,children:c.a.oneOfType([c.a.arrayOf(c.a.node),c.a.node]),defaultTitle:c.a.string,defer:c.a.bool,encodeSpecialCharacters:c.a.bool,htmlAttributes:c.a.object,link:c.a.arrayOf(c.a.object),meta:c.a.arrayOf(c.a.object),noscript:c.a.arrayOf(c.a.object),onChangeClientState:c.a.func,script:c.a.arrayOf(c.a.object),style:c.a.arrayOf(c.a.object),title:c.a.string,titleAttributes:c.a.object,titleTemplate:c.a.string},o.defaultProps={defer:!0,encodeSpecialCharacters:!0},o.peek=a.peek,o.rewind=function(){var e=a.rewind();return e||(e=pe({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},i);me.renderStatic=me.rewind}).call(this,n("yLpj"))},yLpj:function(e,t){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(r){"object"==typeof window&&(n=window)}e.exports=n}}]);
//# sourceMappingURL=commons-befe6582704689a75f3e.js.map