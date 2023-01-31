"use strict";(self.webpackChunkweb_ui=self.webpackChunkweb_ui||[]).push([[27],{2027:function(t,e,n){n.r(e),n.d(e,{l:function(){return l}});var o=n(889),r=Object.defineProperty,i=function(t,e){return r(t,"name",{value:e,configurable:!0})};function a(t,e){return e.forEach((function(e){e&&"string"!==typeof e&&!Array.isArray(e)&&Object.keys(e).forEach((function(n){if("default"!==n&&!(n in t)){var o=Object.getOwnPropertyDescriptor(e,n);Object.defineProperty(t,n,o.get?o:{enumerable:!0,get:function(){return e[n]}})}}))})),Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}i(a,"_mergeNamespaces");var s={exports:{}};!function(t){var e="CodeMirror-lint-markers",n="CodeMirror-lint-line-";function o(e,n,o){var r=document.createElement("div");function a(e){if(!r.parentNode)return t.off(document,"mousemove",a);r.style.top=Math.max(0,e.clientY-r.offsetHeight-5)+"px",r.style.left=e.clientX+5+"px"}return r.className="CodeMirror-lint-tooltip cm-s-"+e.options.theme,r.appendChild(o.cloneNode(!0)),e.state.lint.options.selfContain?e.getWrapperElement().appendChild(r):document.body.appendChild(r),i(a,"position"),t.on(document,"mousemove",a),a(n),null!=r.style.opacity&&(r.style.opacity=1),r}function r(t){t.parentNode&&t.parentNode.removeChild(t)}function a(t){t.parentNode&&(null==t.style.opacity&&r(t),t.style.opacity=0,setTimeout((function(){r(t)}),600))}function s(e,n,r,s){var l=o(e,n,r);function u(){t.off(s,"mouseout",u),l&&(a(l),l=null)}i(u,"hide");var c=setInterval((function(){if(l)for(var t=s;;t=t.parentNode){if(t&&11==t.nodeType&&(t=t.host),t==document.body)return;if(!t){u();break}}if(!l)return clearInterval(c)}),400);t.on(s,"mouseout",u)}function l(t,e,n){for(var o in this.marked=[],e instanceof Function&&(e={getAnnotations:e}),e&&!0!==e||(e={}),this.options={},this.linterOptions=e.options||{},u)this.options[o]=u[o];for(var o in e)u.hasOwnProperty(o)?null!=e[o]&&(this.options[o]=e[o]):e.options||(this.linterOptions[o]=e[o]);this.timeout=null,this.hasGutter=n,this.onMouseOver=function(e){k(t,e)},this.waitingFor=0}i(o,"showTooltip"),i(r,"rm"),i(a,"hideTooltip"),i(s,"showTooltipFor"),i(l,"LintState");var u={highlightLines:!1,tooltips:!0,delay:500,lintOnChange:!0,getAnnotations:null,async:!1,selfContain:null,formatAnnotation:null,onUpdateLinting:null};function c(t){var n=t.state.lint;n.hasGutter&&t.clearGutter(e),n.options.highlightLines&&f(t);for(var o=0;o<n.marked.length;++o)n.marked[o].clear();n.marked.length=0}function f(t){t.eachLine((function(e){var n=e.wrapClass&&/\bCodeMirror-lint-line-\w+\b/.exec(e.wrapClass);n&&t.removeLineClass(e,"wrap",n[0])}))}function p(e,n,o,r,i){var a=document.createElement("div"),l=a;return a.className="CodeMirror-lint-marker CodeMirror-lint-marker-"+o,r&&((l=a.appendChild(document.createElement("div"))).className="CodeMirror-lint-marker CodeMirror-lint-marker-multiple"),0!=i&&t.on(l,"mouseover",(function(t){s(e,t,n,l)})),a}function m(t,e){return"error"==t?t:e}function d(t){for(var e=[],n=0;n<t.length;++n){var o=t[n],r=o.from.line;(e[r]||(e[r]=[])).push(o)}return e}function h(t){var e=t.severity;e||(e="error");var n=document.createElement("div");return n.className="CodeMirror-lint-message CodeMirror-lint-message-"+e,"undefined"!=typeof t.messageHTML?n.innerHTML=t.messageHTML:n.appendChild(document.createTextNode(t.message)),n}function g(e,n){var o=e.state.lint,r=++o.waitingFor;function a(){r=-1,e.off("change",a)}i(a,"abort"),e.on("change",a),n(e.getValue(),(function(n,i){e.off("change",a),o.waitingFor==r&&(i&&n instanceof t&&(n=i),e.operation((function(){C(e,n)})))}),o.linterOptions,e)}function v(e){var n=e.state.lint;if(n){var o=n.options,r=o.getAnnotations||e.getHelper(t.Pos(0,0),"lint");if(r)if(o.async||r.async)g(e,r);else{var i=r(e.getValue(),n.linterOptions,e);if(!i)return;i.then?i.then((function(t){e.operation((function(){C(e,t)}))})):e.operation((function(){C(e,i)}))}}}function C(t,o){var r=t.state.lint;if(r){var i=r.options;c(t);for(var a=d(o),s=0;s<a.length;++s){var l=a[s];if(l){var u=[];l=l.filter((function(t){return!(u.indexOf(t.message)>-1)&&u.push(t.message)}));for(var f=null,g=r.hasGutter&&document.createDocumentFragment(),v=0;v<l.length;++v){var C=l[v],y=C.severity;y||(y="error"),f=m(f,y),i.formatAnnotation&&(C=i.formatAnnotation(C)),r.hasGutter&&g.appendChild(h(C)),C.to&&r.marked.push(t.markText(C.from,C.to,{className:"CodeMirror-lint-mark CodeMirror-lint-mark-"+y,__annotation:C}))}r.hasGutter&&t.setGutterMarker(s,e,p(t,g,f,a[s].length>1,i.tooltips)),i.highlightLines&&t.addLineClass(s,"wrap",n+f)}}i.onUpdateLinting&&i.onUpdateLinting(o,a,t)}}function y(t){var e=t.state.lint;e&&(clearTimeout(e.timeout),e.timeout=setTimeout((function(){v(t)}),e.options.delay))}function M(t,e,n){for(var o=n.target||n.srcElement,r=document.createDocumentFragment(),i=0;i<e.length;i++){var a=e[i];r.appendChild(h(a))}s(t,n,r,o)}function k(t,e){var n=e.target||e.srcElement;if(/\bCodeMirror-lint-mark-/.test(n.className)){for(var o=n.getBoundingClientRect(),r=(o.left+o.right)/2,i=(o.top+o.bottom)/2,a=t.findMarksAt(t.coordsChar({left:r,top:i},"client")),s=[],l=0;l<a.length;++l){var u=a[l].__annotation;u&&s.push(u)}s.length&&M(t,s,e)}}i(c,"clearMarks"),i(f,"clearErrorLines"),i(p,"makeMarker"),i(m,"getMaxSeverity"),i(d,"groupByLine"),i(h,"annotationTooltip"),i(g,"lintAsync"),i(v,"startLinting"),i(C,"updateLinting"),i(y,"onChange"),i(M,"popupTooltips"),i(k,"onMouseOver"),t.defineOption("lint",!1,(function(n,o,r){if(r&&r!=t.Init&&(c(n),!1!==n.state.lint.options.lintOnChange&&n.off("change",y),t.off(n.getWrapperElement(),"mouseover",n.state.lint.onMouseOver),clearTimeout(n.state.lint.timeout),delete n.state.lint),o){for(var i=n.getOption("gutters"),a=!1,s=0;s<i.length;++s)i[s]==e&&(a=!0);var u=n.state.lint=new l(n,o,a);u.options.lintOnChange&&n.on("change",y),0!=u.options.tooltips&&"gutter"!=u.options.tooltips&&t.on(n.getWrapperElement(),"mouseover",u.onMouseOver),v(n)}})),t.defineExtension("performLint",(function(){v(this)}))}(o.a.exports);var l=a({__proto__:null,default:s.exports},[s.exports])}}]);
//# sourceMappingURL=27.2ded040c.chunk.js.map