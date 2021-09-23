/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 889:
/***/ (() => {

// Navbar height
addEventListener('scroll', function () {
  var el = document.querySelector('.opening-first');
  var target = document.getElementById('nav-main');
  var height = el.style.opacity * 3;
  target.style.height = "".concat(15 + height, "vh");
});

/***/ }),

/***/ 782:
/***/ ((module) => {

"use strict";
function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperty(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function _slicedToArray(e,t){return _arrayWithHoles(e)||_iterableToArrayLimit(e,t)||_unsupportedIterableToArray(e,t)||_nonIterableRest()}function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _unsupportedIterableToArray(e,t){if(e){if("string"==typeof e)return _arrayLikeToArray(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?_arrayLikeToArray(e,t):void 0}}function _arrayLikeToArray(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function _iterableToArrayLimit(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var n=[],r=!0,i=!1,o=void 0;try{for(var a,l=e[Symbol.iterator]();!(r=(a=l.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(e){i=!0,o=e}finally{try{r||null==l.return||l.return()}finally{if(i)throw o}}return n}}function _arrayWithHoles(e){if(Array.isArray(e))return e}!function(){function n(e){return["elInY+elHeight","elCenterY-".concat(e=0<arguments.length&&void 0!==e?e:30),"elCenterY","elCenterY+".concat(e),"elOutY-elHeight"]}var l,u,s,_,P,I,t={fadeInOut:function(e,t){t=1<arguments.length&&void 0!==t?t:0;return{opacity:[n(0<arguments.length&&void 0!==e?e:30),[t,1,1,1,t]]}},fadeIn:function(e,t){return{opacity:[["elInY+elHeight",0<arguments.length&&void 0!==e?e:"elCenterY"],[1<arguments.length&&void 0!==t?t:0,1]]}},fadeOut:function(e,t){return{opacity:[[0<arguments.length&&void 0!==e?e:"elCenterY","elOutY-elHeight"],[1,1<arguments.length&&void 0!==t?t:0]]}},blurInOut:function(e,t){t=1<arguments.length&&void 0!==t?t:20;return{blur:[n(0<arguments.length&&void 0!==e?e:100),[t,0,0,0,t]]}},blurIn:function(e,t){return{blur:[["elInY+elHeight",0<arguments.length&&void 0!==e?e:"elCenterY"],[1<arguments.length&&void 0!==t?t:20,0]]}},blurOut:function(e,t){return{opacity:[[0<arguments.length&&void 0!==e?e:"elCenterY","elOutY-elHeight"],[0,1<arguments.length&&void 0!==t?t:20]]}},scaleInOut:function(e,t){t=1<arguments.length&&void 0!==t?t:.6;return{scale:[n(0<arguments.length&&void 0!==e?e:100),[t,1,1,1,t]]}},scaleIn:function(e,t){return{scale:[["elInY+elHeight",0<arguments.length&&void 0!==e?e:"elCenterY"],[1<arguments.length&&void 0!==t?t:.6,1]]}},scaleOut:function(e,t){return{scale:[[0<arguments.length&&void 0!==e?e:"elCenterY","elOutY-elHeight"],[1,1<arguments.length&&void 0!==t?t:.6]]}},slideX:function(e,t){return{translateX:[["elInY",0<arguments.length&&void 0!==e?e:0],[0,1<arguments.length&&void 0!==t?t:500]]}},slideY:function(e,t){return{translateY:[["elInY",0<arguments.length&&void 0!==e?e:0],[0,1<arguments.length&&void 0!==t?t:500]]}},spin:function(e,t){e=0<arguments.length&&void 0!==e?e:1e3;return{rotate:[[0,e],[0,1<arguments.length&&void 0!==t?t:360],{modValue:e}]}},flipX:function(e,t){e=0<arguments.length&&void 0!==e?e:1e3;return{rotateX:[[0,e],[0,1<arguments.length&&void 0!==t?t:360],{modValue:e}]}},flipY:function(e,t){e=0<arguments.length&&void 0!==e?e:1e3;return{rotateY:[[0,e],[0,1<arguments.length&&void 0!==t?t:360],{modValue:e}]}},jiggle:function(e,t){e=0<arguments.length&&void 0!==e?e:50,t=1<arguments.length&&void 0!==t?t:40;return{skewX:[[0,+e,2*e,3*e,4*e],[0,t,0,-t,0],{modValue:4*e}]}},seesaw:function(e,t){e=0<arguments.length&&void 0!==e?e:50,t=1<arguments.length&&void 0!==t?t:40;return{skewY:[[0,+e,2*e,3*e,4*e],[0,t,0,-t,0],{modValue:4*e}]}},zigzag:function(e,t){e=0<arguments.length&&void 0!==e?e:100,t=1<arguments.length&&void 0!==t?t:100;return{translateX:[[0,+e,2*e,3*e,4*e],[0,t,0,-t,0],{modValue:4*e}]}},hueRotate:function(e,t){e=0<arguments.length&&void 0!==e?e:600;return{"hue-rotate":[[0,e],[0,1<arguments.length&&void 0!==t?t:360],{modValue:e}]}}},e=(l=["perspective","scaleX","scaleY","scale","skewX","skewY","skew","rotateX","rotateY","rotate"],u=["blur","hue-rotate","brightness"],s=["translateX","translateY","translateZ"],_=["perspective","border-radius","blur","translateX","translateY","translateZ"],P=["hue-rotate","rotate","rotateX","rotateY","skew","skewX","skewY"],I={easeInQuad:function(e){return e*e},easeOutQuad:function(e){return e*(2-e)},easeInOutQuad:function(e){return e<.5?2*e*e:(4-2*e)*e-1},easeInCubic:function(e){return e*e*e},easeOutCubic:function(e){return--e*e*e+1},easeInOutCubic:function(e){return e<.5?4*e*e*e:(e-1)*(2*e-2)*(2*e-2)+1},easeInQuart:function(e){return e*e*e*e},easeOutQuart:function(e){return 1- --e*e*e*e},easeInOutQuart:function(e){return e<.5?8*e*e*e*e:1-8*--e*e*e*e},easeInQuint:function(e){return e*e*e*e*e},easeOutQuint:function(e){return 1+--e*e*e*e*e},easeInOutQuint:function(e){return e<.5?16*e*e*e*e*e:1+16*--e*e*e*e*e},easeOutBounce:function(e){var t=7.5625,n=2.75;return e<1/n?t*e*e:e<2/n?t*(e-=1.5/n)*e+.75:e<2.5/n?t*(e-=2.25/n)*e+.9375:t*(e-=2.625/n)*e+.984375},easeInBounce:function(e){return 1-I.easeOutBounce(1-e)},easeOutBack:function(e){return 1+2.70158*Math.pow(e-1,3)+1.70158*Math.pow(e-1,2)},easeInBack:function(e){return 2.70158*e*e*e-1.70158*e*e}},new function e(){var o=this;_classCallCheck(this,e),_defineProperty(this,"drivers",[]),_defineProperty(this,"elements",[]),_defineProperty(this,"frame",0),_defineProperty(this,"debug",!1),_defineProperty(this,"windowWidth",0),_defineProperty(this,"windowHeight",0),_defineProperty(this,"presets",t),_defineProperty(this,"debugData",{frameLengths:[]}),_defineProperty(this,"init",function(){o.findAndAddElements(),window.requestAnimationFrame(o.onAnimationFrame),o.windowWidth=document.body.clientWidth,o.windowHeight=document.body.clientHeight,window.onresize=o.onWindowResize}),_defineProperty(this,"onWindowResize",function(){document.body.clientWidth===o.windowWidth&&document.body.clientHeight===o.windowHeight||(o.windowWidth=document.body.clientWidth,o.windowHeight=document.body.clientHeight,o.elements.forEach(function(e){return e.calculateTransforms()}))}),_defineProperty(this,"onAnimationFrame",function(e){o.debug&&(o.debugData.frameStart=Date.now());var t,n={};o.drivers.forEach(function(e){n[e.name]=e.getValue(o.frame)}),o.elements.forEach(function(e){e.update(n,o.frame)}),o.debug&&o.debugData.frameLengths.push(Date.now()-o.debugData.frameStart),o.frame%60==0&&o.debug&&(t=Math.ceil(o.debugData.frameLengths.reduce(function(e,t){return e+t},0)/60),console.log("Average frame calculation time: ".concat(t,"ms")),o.debugData.frameLengths=[]),o.frame++,window.requestAnimationFrame(o.onAnimationFrame)}),_defineProperty(this,"addDriver",function(e,t){var n=2<arguments.length&&void 0!==arguments[2]?arguments[2]:{};o.drivers.push(new i(e,t,n))}),_defineProperty(this,"removeDriver",function(t){o.drivers=o.drivers.filter(function(e){return e.name!==t})}),_defineProperty(this,"findAndAddElements",function(){o.elements=[],document.querySelectorAll(".lax").forEach(function(e){var t=[];e.classList.forEach(function(e){e.includes("lax_preset")&&(e=e.replace("lax_preset_",""),t.push(e))});var n=_defineProperty({},"scrollY",{presets:t});o.elements.push(new f(".lax",o,e,n,0,{}))})}),_defineProperty(this,"addElements",function(n,r,i){document.querySelectorAll(n).forEach(function(e,t){o.elements.push(new f(n,o,e,r,t,i))})}),_defineProperty(this,"removeElements",function(t){o.elements=o.elements.filter(function(e){return e.selector!==t})}),_defineProperty(this,"addElement",function(e,t,n){o.elements.push(new f("",o,e,t,0,n))}),_defineProperty(this,"removeElement",function(t){o.elements=o.elements.filter(function(e){return e.domElement!==t})})});function c(e,t){if(Array.isArray(e))return e;for(var n=Object.keys(e).map(function(e){return parseInt(e)}).sort(function(e,t){return t<e?1:-1}),r=n[n.length-1],i=0;i<n.length;i++){var o=n[i];if(t<o){r=o;break}}return e[r]}function d(e,t,n){var r=t.width,i=t.height,o=t.x,a=t.y;if("number"==typeof e)return e;var l,u=document.body.scrollHeight,s=document.body.scrollWidth,c=window.innerWidth,d=window.innerHeight,f=_slicedToArray((l=void 0!==window.pageXOffset,f="CSS1Compat"===(document.compatMode||""),t=l?window.pageXOffset:(f?document.documentElement:document.body).scrollLeft,[l?window.pageYOffset:(f?document.documentElement:document.body).scrollTop,t]),2),t=f[0],o=o+f[1],f=o+r,a=a+t,t=a+i;return Function("return ".concat(e.replace(/screenWidth/g,c).replace(/screenHeight/g,d).replace(/pageHeight/g,u).replace(/pageWidth/g,s).replace(/elWidth/g,r).replace(/elHeight/g,i).replace(/elInY/g,a-d).replace(/elOutY/g,t).replace(/elCenterY/g,a+i/2-d/2).replace(/elInX/g,o-c).replace(/elOutX/g,f).replace(/elCenterX/g,o+r/2-c/2).replace(/index/g,n)))()}function i(e,t){var n=this,r=2<arguments.length&&void 0!==arguments[2]?arguments[2]:{};_classCallCheck(this,i),_defineProperty(this,"getValueFn",void 0),_defineProperty(this,"name",""),_defineProperty(this,"lastValue",0),_defineProperty(this,"frameStep",1),_defineProperty(this,"m1",0),_defineProperty(this,"m2",0),_defineProperty(this,"inertia",0),_defineProperty(this,"inertiaEnabled",!1),_defineProperty(this,"getValue",function(e){var t=n.lastValue;return e%n.frameStep==0&&(t=n.getValueFn(e)),n.inertiaEnabled&&(e=t-n.lastValue,n.m1=.8*n.m1+e*(1-.8),n.m2=.8*n.m2+n.m1*(1-.8),n.inertia=Math.round(5e3*n.m2)/15e3),n.lastValue=t,[n.lastValue,n.inertia]}),this.name=e,this.getValueFn=t,Object.keys(r).forEach(function(e){n[e]=r[e]}),this.lastValue=this.getValueFn(0)}function f(e,t,n,r){var b=this,i=4<arguments.length&&void 0!==arguments[4]?arguments[4]:0,o=5<arguments.length&&void 0!==arguments[5]?arguments[5]:{};_classCallCheck(this,f),_defineProperty(this,"domElement",void 0),_defineProperty(this,"transformsData",void 0),_defineProperty(this,"styles",{}),_defineProperty(this,"selector",""),_defineProperty(this,"groupIndex",0),_defineProperty(this,"laxInstance",void 0),_defineProperty(this,"onUpdate",void 0),_defineProperty(this,"update",function(e,t){var n,r=b.transforms,i={};for(n in r){var o=r[n];e[n]||console.error("No lax driver with name: ",n);var a,l=_slicedToArray(e[n],2),u=l[0],s=l[1];for(a in o){var c,d=_slicedToArray(o[a],3),f=d[0],h=d[1],m=d[2],p=void 0===m?{}:m,g=p.modValue,y=p.frameStep,v=void 0===y?1:y,w=p.easing,d=p.inertia,m=p.inertiaMode,y=p.cssFn,p=p.cssUnit,p=void 0===p?"":p,w=I[w];t%v==0&&(w=function(e,t,n,r){var i=0;if(e.forEach(function(e){e<n&&i++}),i<=0)return t[0];if(i>=e.length)return t[e.length-1];var o,a=(a=e[o=i-1],e=e[i],(n-a)/(e-a));return r&&(a=r(a)),o=t[o],t=t[i],o*(1-(a=a))+t*a}(f,h,g?u%g:u,w),d&&(c=s*d,"absolute"===m&&(c=Math.abs(c)),w+=c),c="px"==(p||_.includes(a)?"px":P.includes(a)?"deg":"")?0:3,c=w.toFixed(c),i[a]=y?y(c,b.domElement):c+p)}}b.applyStyles(i),b.onUpdate&&b.onUpdate(e,b.domElement)}),_defineProperty(this,"calculateTransforms",function(){b.transforms={};var e,l=b.laxInstance.windowWidth;for(e in b.transformsData)!function(e){var o=b.transformsData[e],a={},t=o.presets;(void 0===t?[]:t).forEach(function(e){var t,n=_slicedToArray(e.split(":"),3),r=n[0],i=n[1],e=n[2],n=window.lax.presets[r];n?(t=n(i,e),Object.keys(t).forEach(function(e){o[e]=t[e]})):console.error("Lax preset cannot be found with name: ",r)}),delete o.presets;for(var n in o)!function(e){var t=_slicedToArray(o[e],3),n=t[0],r=void 0===n?[-1e9,1e9]:n,n=t[1],n=void 0===n?[-1e9,1e9]:n,t=t[2],t=void 0===t?{}:t,i=b.domElement.getBoundingClientRect(),r=c(r,l).map(function(e){return d(e,i,b.groupIndex)}),n=c(n,l).map(function(e){return d(e,i,b.groupIndex)});a[e]=[r,n,t]}(n);b.transforms[e]=a}(e)}),_defineProperty(this,"applyStyles",function(e){var r,i,o,t=(r=e,i={transform:"",filter:""},o={translateX:1e-5,translateY:1e-5,translateZ:1e-5},Object.keys(r).forEach(function(e){var t=r[e],n=_.includes(e)?"px":P.includes(e)?"deg":"";s.includes(e)?o[e]=t:l.includes(e)?i.transform+="".concat(e,"(").concat(t).concat(n,") "):u.includes(e)?i.filter+="".concat(e,"(").concat(t).concat(n,") "):i[e]="".concat(t).concat(n," ")}),i.transform="translate3d(".concat(o.translateX,"px, ").concat(o.translateY,"px, ").concat(o.translateZ,"px) ").concat(i.transform),i);Object.keys(t).forEach(function(e){b.domElement.style.setProperty(e,t[e])})}),this.selector=e,this.laxInstance=t,this.domElement=n,this.transformsData=r,this.groupIndex=i;var a=void 0===(i=o.style)?{}:i,o=o.onUpdate;Object.keys(a).forEach(function(e){n.style.setProperty(e,a[e])}),o&&(this.onUpdate=o),this.calculateTransforms()} true&&void 0!==module.exports?module.exports=e:window.lax=e}();

/***/ }),

/***/ 116:
/***/ ((module) => {

"use strict";
module.exports = {XMLHttpRequest:XMLHttpRequest};

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";

;// CONCATENATED MODULE: ./src/js/data/async.ts
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var xml = __webpack_require__(116).XMLHttpRequest;
// Fetch Data
var fetchData = function (urlApi) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        return [2 /*return*/, new Promise(function (resolve, reject) {
                var http = new xml();
                http.open('GET', urlApi, true);
                http.onreadystatechange = function () {
                    if (http.readyState === 4) {
                        (http.status === 200)
                            ? resolve(JSON.parse(http.responseText))
                            : reject(new Error('Error'));
                    }
                };
                http.send();
            })];
    });
}); };

;// CONCATENATED MODULE: ./src/js/opening/template.ts
// media
// let cardLeft = require.resolve('@media/card-left.png');
// let cardRight = require.resolve('@media/card-right.png');
var cardFront = function (name, img, nickname, occupation, category, status) {
    return "<h3>" + name + "</h3>\n  <div class=\"card-content-img\">\n    <img src=\"./assets/media/card-left.png\" class=\"decoration-card-left\" alt=\"card decoration Cartoon face Heisenberg\">\n    <img src=\"" + img + "\" class=\"card-img\" alt=\"portrait of " + name + " in Breaking Bad\">\n    <img src=\"./assets/media/card-right.png\" class=\"decoration-card-right\" alt=\"card decoration Cartoon Heisenberg\">\n  </div>\n  <ol class=\"card-content-info\">\n    <li><strong class=\"block\">Nickname:</strong>" + nickname + "</li>\n    <li><strong class=\"block\">Occupation:</strong>" + occupation[0] + "</li>\n    <li><strong class=\"block\">Category:</strong>" + category + "</li>\n    <li><strong class=\"block\">Status:</strong>" + status + "</li>\n  </ol>";
};

;// CONCATENATED MODULE: ./src/js/opening/index.ts
var opening_awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var opening_generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
// Data

// Template

// Animation card
var card = document.getElementById('card-content');
card.addEventListener('click', function () {
    card.style.animation = '1.5s rotate cubic-bezier(.35,.96,1,.85) forwards';
});
// Call random character
var API = 'https://www.breakingbadapi.com/api/character/random';
var fetchDataAsync = function (url) { return opening_awaiter(void 0, void 0, void 0, function () {
    var data, err_1;
    return opening_generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, fetchData(url)];
            case 1:
                data = _a.sent();
                printTemplate(cardFront(data[0].name, data[0].img, data[0].nickname, data[0].occupation, data[0].category, data[0].status));
                return [3 /*break*/, 3];
            case 2:
                err_1 = _a.sent();
                console.error(err_1);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
fetchDataAsync(API);
function printTemplate(content) {
    var card =  false || document.getElementById('card-front');
    card.innerHTML = content;
}
;

// EXTERNAL MODULE: ./src/js/animation/navbar.js
var navbar = __webpack_require__(889);
// EXTERNAL MODULE: ./node_modules/lax.js/lib/lax.min.js
var lax_min = __webpack_require__(782);
var lax_min_default = /*#__PURE__*/__webpack_require__.n(lax_min);
;// CONCATENATED MODULE: ./src/js/animation/opening-first.js
var openingFirst = {
  opacity: [[0, "screenHeight"], [1, 0]],
  scale: [[0, "screenHeight"], [1, 1.5]],
  translateY: [[0, "screenHeight"], [0, "screenHeight"]]
};
/* harmony default export */ const opening_first = (openingFirst);
;// CONCATENATED MODULE: ./src/js/animation/opening-second.js
var h1 = {
  opacity: [["elInY", "screenHeight", "screenHeight*2", "screenHeight*3"], [0, 0, 1, 1]],
  translateY: [["elInY", "screenHeight", "screenHeight*2", "screenHeight*3", "screenHeight*4"], [0, "-screenHeight", "screenHeight/1.7", "screenHeight*1.5", "-screenHeight"]]
};
var h2 = {
  opacity: [["elInY", "screenHeight", "screenHeight*2", "screenHeight*3"], [0, 0, 1, 1]],
  translateY: [["elInY", "screenHeight", "screenHeight*2", "screenHeight*3", "screenHeight*4"], [0, "screenHeight", "screenHeight/1.5", "screenHeight*1.5", "screenHeight*3"]]
};
var opening_second_card = {
  translateX: [["elInY", "screenHeight", "screenHeight*2", "screenHeight*3", "screenHeight*3.5"], {
    768: ['-screenWidth*2', '-screenWidth/2', 0, 0, '-screenWidth*2'],
    769: ['-screenWidth/2', '-screenWidth/2', 0, 0, '-screenWidth/2']
  }],
  translateY: [["elInY", "screenHeight", "screenHeight*2", "screenHeight*3", "screenHeight*4"], [0, 0, "screenHeight/1.7", "screenHeight*1.5", "screenHeight*2"]]
};

;// CONCATENATED MODULE: ./src/js/animation/mouse-position.js
var cursorX = {
  "translateX": [[0, 'screenWidth'], ['80', '-80']]
};
var cursorY = {
  "translateY": [[0, 'screenHeight'], ['10', '-10']]
};
;// CONCATENATED MODULE: ./src/js/animation/index.js
// Parallax
 // Component





window.onload = function () {
  lax_min_default().init(); // Add a driver that we use to control our animations

  lax_min_default().addDriver('scrollY', function () {
    return window.scrollY;
  }); // Setup mouse move listener

  document.addEventListener('mousemove', function (e) {
    (lax_min_default()).__cursorX = e.clientX;
    (lax_min_default()).__cursorY = e.clientY;
  }, false); // Add lax driver for cursorX

  lax_min_default().addDriver('cursorX', function () {
    return (lax_min_default()).__cursorX || 0;
  }); // Add lax driver for cursorY

  lax_min_default().addDriver('cursorY', function () {
    return (lax_min_default()).__cursorY || 0;
  }); // Add lax driver for cursorXY

  lax_min_default().addDriver('cursorDistanceFromCenter', function () {
    var pageHeight = document.body.scrollHeight;
    var pageWidth = document.body.scrollWidth;
    var pageCenterX = pageWidth / 2;
    var pageCenterY = pageHeight / 2;
    var absDistanceFromCenterY = Math.abs(((lax_min_default()).__cursorY || 0) - pageCenterY) / pageCenterY;
    var absDistanceFromCenterX = Math.abs(((lax_min_default()).__cursorX || 0) - pageCenterX) / pageCenterX;
    return absDistanceFromCenterX + absDistanceFromCenterY;
  }); // first content opening

  lax_min_default().addElements('.opening-first', {
    scrollY: opening_first
  }); // Second content opening

  lax_min_default().addElements('.opening-second h1', {
    scrollY: h1
  });
  lax_min_default().addElements('.opening-second h2', {
    scrollY: h2
  });
  lax_min_default().addElements('.opening-second #card', {
    scrollY: opening_second_card
  });

  if (!/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    lax_min_default().addElements('.opening-second .card, .characters-left, .characters-right', {
      'cursorX': cursorX,
      'cursorY': cursorY,
      'cursorDistanceFromCenter': {}
    });
  }
};
;// CONCATENATED MODULE: ./src/js/characters/template.ts
var templateCard = function (name, img, nickname, occupation, category, portrayed, status) {
    return "\n    <div class=\"card-img\">\n      <img src=\"" + img + "\" alt=\"\">\n      <div class=\"card-tab\">\n        <div class=\"card-arrow\"></div>\n      </div>\n      <ul class=\"card-info t-w\">\n          <li><strong>Nickname: </strong>" + nickname + "</li>\n          <li><strong>Occupation: </strong>" + occupation + "</li>\n          <li><strong>Category: </strong>" + category + "</li>\n          <li><strong>portrayed: </strong>" + portrayed + "</li>\n          <li><strong>Status: </strong>" + status + "</li>\n      </ul>\n    </div>\n    <h2 class=\"card-title\">" + name + "</h2>\n  ";
};
var templateQuotes = function (author, img, quote, quote_id, series) {
    return "\n  <div class=\"card-img\">\n    <img src=\"" + img + "\" alt=\"" + author + "\">\n  </div>\n  <div class=\"card-content t-w\">\n    <h2>Quotes of " + author + "</h2>\n    <q>" + quote + "</q>\n  </div>";
};

;// CONCATENATED MODULE: ./src/js/characters/intersection.ts
// Component

var infoLimit = {
    characters: {
        name: "characters",
        loop: 0,
        off: 0
    },
    seriesbcs: {
        name: "Better+Call+Saul",
        loop: 0,
        off: 0
    },
    seriesbb: {
        name: "Breaking+Bad",
        loop: 0,
        off: 0
    }
};
var intersection = function (el, type, margin) {
    if (margin === void 0) { margin = '0px'; }
    var options = {
        root: null,
        rootMargin: margin,
        threshold: 0.2
    };
    var observer = new IntersectionObserver(function (entries) {
        var isIntersecting = entries[0].isIntersecting;
        if (isIntersecting) {
            call(type);
            observer.disconnect();
        }
    }, options);
    observer.observe(el);
};
function resetValueIntersection(type) {
    switch (type) {
        case 'characters':
            infoLimit.characters.loop = 0;
            infoLimit.characters.off = 0;
            break;
        case 'Better+Call+Saul':
            infoLimit.seriesbcs.loop = 0;
            infoLimit.seriesbcs.off = 0;
            break;
        case 'Breaking+Bad':
            infoLimit.seriesbb.loop = 0;
            infoLimit.seriesbb.off = 0;
            break;
    }
}
var limitAndOffset = function (n, offset, type) {
    if (type === infoLimit.characters.name) {
        if (infoLimit.characters.loop === 0) {
            infoLimit.characters.off = offset;
            infoLimit.characters.loop++;
            return "?limit=" + n + "&offset=" + offset;
        }
        else {
            infoLimit.characters.off = infoLimit.characters.off + n;
            return "?limit=" + n + "&offset=" + infoLimit.characters.off;
        }
    }
    else if (type === infoLimit.seriesbcs.name) {
        if (infoLimit.seriesbcs.loop === 0) {
            infoLimit.seriesbcs.off = offset;
            infoLimit.seriesbcs.loop++;
            return "&limit=" + n + "&offset=" + offset;
        }
        else {
            infoLimit.seriesbcs.off = infoLimit.seriesbcs.off + n;
            return "&limit=" + n + "&offset=" + infoLimit.seriesbcs.off;
        }
    }
    else if (type === infoLimit.seriesbb.name) {
        if (infoLimit.seriesbb.loop === 0) {
            infoLimit.seriesbb.off = offset;
            infoLimit.seriesbb.loop++;
            return "&limit=" + n + "&offset=" + offset;
        }
        else {
            infoLimit.seriesbb.off = infoLimit.seriesbb.off + n;
            return "&limit=" + n + "&offset=" + infoLimit.seriesbb.off;
        }
    }
    else {
        return '';
    }
};
var visibility = function (target, opacity, display, displayType) {
    if (display === void 0) { display = false; }
    if (displayType === void 0) { displayType = 'block'; }
    var elem = document.querySelector(target);
    (display) ?
        (elem.style.opacity = opacity.toString(),
            setTimeout(function () {
                return elem.style.display = 'none';
            }, 400))
        :
            (elem.style.opacity = opacity.toString(), elem.style.display = displayType);
};

;// CONCATENATED MODULE: ./src/js/helpers/error.ts
var templateError = function (m) {
    return "\n  <div class=\"error\">\n    <div class=\"error-content\">\n      <h2 class=\"big\">Error</h2>\n      <p class=\"medium\">Data loading error, please check your connection.</p>\n      <p>" + m + "</p>\n    </div>\n  </div>\n  ";
};
var errorPrint = function (id, message) {
    var element = document.createElement("div");
    var target = document.getElementById(id);
    element.setAttribute("class", "error");
    element.innerHTML = templateError(message);
    target.appendChild(element);
};

;// CONCATENATED MODULE: ./src/js/helpers/message.ts
var templateMessage = function (m) {
    return "\n    <div class=\"message-content\">\n      <h2 class=\"big\">Sorry</h2>\n      <p class=\"medium\">" + m + "</p>\n      <span style='font-size:100px;'>&#128531;</span>\n    </div>\n  ";
};
var messagePrint = function (id, message) {
    var element = document.createElement("div");
    var target = document.getElementById(id);
    element.setAttribute("class", "message");
    element.innerHTML = templateMessage(message);
    target.appendChild(element);
};

;// CONCATENATED MODULE: ./src/js/characters/form.ts
var form_awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var form_generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
// Data

// Component





// Fetch
var APICharacters = 'https://www.breakingbadapi.com/api/characters';
var APIQuote = 'https://www.breakingbadapi.com/api/quote';
var APIEpisode = 'https://www.breakingbadapi.com/api/episodes';
var form_fetchDataAsync = function (url, filter, type, img, quantity) {
    if (img === void 0) { img = ''; }
    if (quantity === void 0) { quantity = false; }
    return form_awaiter(void 0, void 0, void 0, function () {
        var data, err_1;
        return form_generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, fetchData("" + url + filter)];
                case 1:
                    data = _a.sent();
                    switch (type) {
                        case 'characters':
                            if (data.length <= 0) {
                                messagePrint('characters-search', 'nothing was found');
                                visibility('.spring-spinner', 0, true);
                            }
                            else {
                                printData(data, type);
                            }
                            break;
                        case 'quotes':
                            printData(data, type, img);
                            break;
                        case 'onlyQuotes':
                            printData(data, type);
                            break;
                        case 'onlyCharacters':
                            printData(data, type);
                            break;
                        case 'Better+Call+Saul':
                            printData(data, type);
                            break;
                    }
                    return [3 /*break*/, 3];
                case 2:
                    err_1 = _a.sent();
                    visibility('.spring-spinner', 0, true);
                    if (type === 'characters') {
                        errorPrint("characters-content", err_1);
                    }
                    else if (type === "quotes") {
                        errorPrint("characters-quotes", err_1);
                    }
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
};
// Form
var formFilter = document.getElementById('form-filter');
var formName = document.getElementById('form-name');
var content = document.getElementById("characters-search");
var contentQuotes = document.getElementById("characters-quotes-search");
var contentCharacters = document.getElementById("characters-search");
var displayCharacters = document.getElementById("form-type-characters");
var displayQuotes = document.getElementById("form-type-quotes");
var categoryBb = document.getElementById("form-select-bb");
var categoryBcs = document.getElementById("form-select-bcs");
var searchActive = false;
var episodeActive = false;
formFilter.addEventListener("submit", function (e) {
    e.preventDefault();
    var val = formName.value.replace(/ /g, '+').toLocaleLowerCase();
    if (displayCharacters.checked && displayQuotes.checked) {
        if (val === '' || val == null || val.length <= 0) {
            searchActive = false;
            visibility('.separator', 1);
            visibility('.spring-spinner', 0, true);
            visibility('#characters-search', 0, true);
            visibility('#characters-quotes-search', 0, true);
            setTimeout(function () {
                visibility('#characters-quotes', 1, false, 'grid');
                visibility('#characters-content', 1, false, 'grid');
            }, 400);
        }
        else if (val.length > 0) {
            searchActive = true;
            content.innerHTML = '';
            contentQuotes.innerHTML = '';
            visibility('#characters-search', 1, false, 'grid');
            visibility('#characters-content', 0, true);
            visibility('#characters-quotes', 0, true);
            visibility('.separator', 0, true);
            visibility('#characters-quotes-search', 1);
            visibility('.spring-spinner', 0, true);
            form_fetchDataAsync(APICharacters, "?name=" + val, 'characters');
        }
    }
    else if (displayQuotes.checked && !displayCharacters.checked) {
        searchActive = true;
        content.innerHTML = '';
        contentQuotes.innerHTML = '';
        visibility('#characters-search', 1, false, 'grid');
        visibility('#characters-content', 0, true);
        visibility('#characters-quotes', 0, true);
        visibility('.separator', 0, true);
        visibility('#characters-quotes-search', 1, false, 'grid');
        visibility('.spring-spinner', 1);
        form_fetchDataAsync(APICharacters, "?name=" + val, 'onlyQuotes');
    }
    else if (displayCharacters.checked && !displayQuotes.checked) {
        searchActive = true;
        content.innerHTML = '';
        contentQuotes.innerHTML = '';
        visibility('#characters-content', 0, true);
        visibility('#characters-quotes', 0, true);
        visibility('.separator', 0, true);
        visibility('#characters-quotes-search', 0, true);
        visibility('#characters-search', 1, false, 'grid');
        visibility('.spring-spinner', 1);
        form_fetchDataAsync(APICharacters, "?name=" + val, 'onlyCharacters');
    }
});
formFilter.addEventListener("change", function (e) {
    var _a = e.target, checked = _a.checked, value = _a.value;
    if (parseInt(value)) {
        formEpisode(value);
    }
    else {
        formCategory(checked, value);
        formType(checked, value);
    }
});
// Type filter
function formType(checked, value) {
    if (checked) {
        if (value === 'characters') {
            (displayCharacters.checked) ? visibility('.separator', 1) : visibility('.separator', 0, true);
            if (searchActive) {
                visibility('#characters-content', 0, true);
                visibility('#characters-search', 1, false, 'grid');
            }
            else {
                visibility('#characters-content', 1, false, 'grid');
                visibility('#characters-search', 0, true);
            }
        }
        else if (value === 'quotes') {
            if (episodeActive) {
                return displayQuotes.checked = false;
            }
            (displayCharacters.checked) ? visibility('.separator', 1) : visibility('.separator', 0, true);
            if (searchActive) {
                visibility('#characters-quotes', 0, true);
                visibility('#characters-quotes-search', 1, false, 'grid');
                visibility('.spring-spinner', 0, true);
            }
            else {
                callQuotes();
                visibility('#characters-quotes', 1, false, 'grid');
                visibility('#characters-quotes-search', 0, true);
            }
        }
    }
    else {
        if (value === 'characters') {
            if (!displayQuotes.checked) {
                displayCharacters.checked = true;
                return;
            }
            (displayQuotes.checked) ? visibility('.separator', 0, true) : visibility('.separator', 1);
            callQuotes();
            visibility('#characters-content', 0, true);
            visibility('#characters-search', 0, true);
        }
        else if (value === 'quotes') {
            if (!displayCharacters.checked) {
                displayQuotes.checked = true;
                return;
            }
            (displayCharacters.checked) ? visibility('.separator', 0, true) : visibility('.separator', 1);
            visibility('#characters-quotes', 0, true);
            visibility('#characters-quotes-search', 0, true);
        }
    }
}
// Form Category
function formCategory(checked, value) {
    var bb = 'Breaking+Bad';
    var bcs = 'Better+Call+Saul';
    if (checked) {
        if (categoryBb.checked && categoryBcs.checked) {
            (!displayCharacters.checked) ? callQuotes() : null;
            return (!displayQuotes.checked) ? cleanContent('characters', true, false) : cleanContent('characters', true);
        }
    }
    else {
        if (value === bcs) {
            if (!categoryBb.checked) {
                categoryBcs.checked = true;
                return;
            }
            (!displayCharacters.checked) ? callQuotes(true, bb) : null;
            return (!displayQuotes.checked) ? filterSeries(bb, 52, false) : filterSeries(bb, 52);
        }
        else if (value === bb) {
            if (!categoryBcs.checked) {
                categoryBb.checked = true;
                return;
            }
            (!displayCharacters.checked) ? callQuotes(true, bcs) : null;
            return (!displayQuotes.checked) ? filterSeries(bcs, 12, false) : filterSeries(bcs, 12);
        }
    }
}
// Form Episode
function formEpisode(value) {
    if (parseInt(value) === 0) {
        episodeActive = false;
        categoryBb.checked = true;
        categoryBcs.checked = true;
        displayQuotes.checked = true;
        visibility('#characters-quotes', 1, false, 'grid');
        return cleanContent('characters', true, true);
    }
    else if (parseInt(value)) {
        episodeActive = true;
        displayCharacters.checked = true;
        displayQuotes.checked = false;
        visibility('#characters-search', 0, true);
        visibility('#characters-content', 1, false, 'grid');
        visibility('#characters-quotes', 0, true);
        visibility('.separator', 0, true);
        visibility('#characters-quotes-search', 0, true);
        visibility('.spring-spinner', 1);
        return filterEpisode('episodes', value);
    }
}
// Print data
function printData(data, type, img) {
    if (img === void 0) { img = ''; }
    return form_awaiter(this, void 0, void 0, function () {
        var characterContainer, characterImg, _loop_1, i, content_1, quotes, i, el, target, elementNode, characterContainer_1, characterImg, i, _loop_2, i;
        return form_generator(this, function (_a) {
            if (type === 'characters') {
                characterContainer = [];
                characterImg = [];
                _loop_1 = function (i) {
                    var elementNode = document.createElement("article");
                    elementNode.setAttribute("class", "card-characters off character" + i);
                    elementNode.innerHTML = templateCard(data[i].name, data[i].img, data[i].nickname, data[i].occupation, data[i].category, data[i].portrayed, data[i].status);
                    content.appendChild(elementNode);
                    // Click Info
                    elementNode.addEventListener("click", function () {
                        if (elementNode.className.includes("on")) {
                            elementNode.classList.remove("on");
                            elementNode.classList.add("off");
                        }
                        else {
                            elementNode.classList.remove("off");
                            elementNode.classList.add("on");
                        }
                    });
                    characterContainer.push(data[i].name);
                    characterImg.push(data[i].img);
                };
                for (i = 0; i < data.length; i++) {
                    _loop_1(i);
                }
                // Call Quotes
                if (characterContainer.length === data.length) {
                    characterContainer.map(function (val, i, all) {
                        form_fetchDataAsync(APIQuote, "?author=" + data[i].name.replace(/ /g, '+').toLocaleLowerCase(), 'quotes', data[i].img);
                    });
                }
                visibility('.spring-spinner', 0, true);
            }
            else if (type === "quotes") {
                content_1 = document.getElementById('characters-quotes-search');
                quotes = [];
                for (i = 0; i < data.length; i++) {
                    if (data[i].author === 'Jimmy McGill') {
                    }
                    else if (quotes.includes(data[i].author)) {
                        el = document.createElement("q");
                        target = document.querySelector(".quotes-" + data[i].author.slice(0, data[i].author.indexOf(' '))).querySelector('.card-content');
                        el.innerHTML = data[i].quote;
                        target.appendChild(el);
                    }
                    else {
                        elementNode = document.createElement("article");
                        (displayCharacters.checked === false) ? (visibility('.separator', 0, true), visibility('.spring-spinner', 0)) : visibility('.separator', 1);
                        elementNode.setAttribute("class", "card-quotes quotes-" + data[i].author.slice(0, data[i].author.indexOf(' ')));
                        elementNode.innerHTML = templateQuotes(data[i].author, img, data[i].quote, data[i].quote_id, data[i].series);
                        content_1.appendChild(elementNode);
                        quotes.push(data[i].author);
                    }
                }
                (displayCharacters.checked === false && content_1.childElementCount <= 0) ? (messagePrint('characters-quotes-search', 'Nothing was found'), visibility('.spring-spinner', 0, true)) : null;
            }
            else if (type === 'onlyQuotes') {
                characterContainer_1 = [];
                characterImg = [];
                for (i = 0; i < data.length; i++) {
                    characterContainer_1.push(data[i].name);
                    characterImg.push(data[i].img);
                }
                // Call Quotes
                if (characterContainer_1.length === data.length) {
                    characterContainer_1.map(function (val, i, all) {
                        if (all.length === characterContainer_1.length) {
                            form_fetchDataAsync(APIQuote, "?author=" + data[i].name.replace(/ /g, '+').toLocaleLowerCase(), 'quotes', data[i].img, true);
                        }
                    });
                }
            }
            else if (type === 'onlyCharacters') {
                _loop_2 = function (i) {
                    var elementNode = document.createElement("article");
                    elementNode.setAttribute("class", "card-characters off character" + i);
                    elementNode.innerHTML = templateCard(data[i].name, data[i].img, data[i].nickname, data[i].occupation, data[i].category, data[i].portrayed, data[i].status);
                    contentCharacters.appendChild(elementNode);
                    // Click Info
                    elementNode.addEventListener("click", function () {
                        if (elementNode.className.includes("on")) {
                            elementNode.classList.remove("on");
                            elementNode.classList.add("off");
                        }
                        else {
                            elementNode.classList.remove("off");
                            elementNode.classList.add("on");
                        }
                    });
                };
                for (i = 0; i < data.length; i++) {
                    _loop_2(i);
                }
                visibility('.spring-spinner', 0, true);
            }
            return [2 /*return*/];
        });
    });
}

;// CONCATENATED MODULE: ./src/js/characters/index.ts
var characters_awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var characters_generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
// Data

// Component




// Api
var characters_APICharacters = 'https://www.breakingbadapi.com/api/characters';
var APIQuotes = 'https://www.breakingbadapi.com/api/quotes';
var APIEpisodes = 'https://www.breakingbadapi.com/api/episodes';
// data cache & count load
var countCharacters = 0;
var imgQuotes;
var separateStatus = true;
var limitData = 62;
var characters_fetchDataAsync = function (url, type, search) {
    if (search === void 0) { search = ''; }
    return characters_awaiter(void 0, void 0, void 0, function () {
        var data, err_1;
        return characters_generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, fetchData("" + url + ((type === 'characters' || type === 'Better+Call+Saul' || type === 'Breaking+Bad' || type === 'episodes' || type === 'episodesCharacters' || search === '') ? limitAndOffset(9, 0, type) : '') + (((type === 'episodesSearch' || type === 'search') && search) ? "?name=" + search : ''))];
                case 1:
                    data = _a.sent();
                    (search && type == 'search') ? imgQuotes = data[0].img : loopData(data, type);
                    return [3 /*break*/, 3];
                case 2:
                    err_1 = _a.sent();
                    visibility('.spring-spinner', 0, true);
                    if (type === 'characters') {
                        visibility('.spring-spinner', 0, true);
                    }
                    else if (type === "search") {
                        errorPrint("characters-quotes", err_1);
                    }
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
};
// fetchDataAsync(APIEpisodes, 'characters')
characters_fetchDataAsync(characters_APICharacters, 'characters');
// Loop print Data
var characters_content = document.getElementById('characters-content');
var characters_contentQuotes = document.getElementById('characters-quotes');
var characters_categoryBb = document.getElementById("form-select-bb");
var characters_categoryBcs = document.getElementById("form-select-bcs");
function loopData(data, type) {
    return characters_awaiter(this, void 0, void 0, function () {
        var _loop_1, i, quotes, i, el, target, elementNode, i, elementNode_1;
        return characters_generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!(type === 'characters' || type === 'Better+Call+Saul' || type === 'Breaking+Bad')) return [3 /*break*/, 1];
                    _loop_1 = function (i) {
                        var elementNode = document.createElement("article");
                        elementNode.setAttribute("class", "card-characters off character" + i);
                        elementNode.innerHTML = templateCard(data[i].name, data[i].img, data[i].nickname, data[i].occupation, data[i].category, data[i].portrayed, data[i].status);
                        characters_content.appendChild(elementNode);
                        // Intersection
                        if (i === data.length - 1) {
                            intersection(elementNode, type);
                        }
                        // Click Info
                        elementNode.addEventListener("click", function () {
                            if (elementNode.className.includes("on")) {
                                elementNode.classList.remove("on");
                                elementNode.classList.add("off");
                            }
                            else {
                                elementNode.classList.remove("off");
                                elementNode.classList.add("on");
                            }
                        });
                        // Call Quotes
                        countCharacters++;
                        if (countCharacters === limitData) {
                            if (type === 'characters') {
                                characters_fetchDataAsync(APIQuotes, 'quotes');
                            }
                            else {
                                characters_fetchDataAsync(APIQuotes + "?series=" + type, 'quotes');
                            }
                            visibility('.spring-spinner', 0, true);
                            if (separateStatus) {
                                visibility('.separator', 1);
                            }
                        }
                    };
                    for (i = 0; i < data.length; i++) {
                        _loop_1(i);
                    }
                    return [3 /*break*/, 17];
                case 1:
                    if (!(type === 'quotes')) return [3 /*break*/, 11];
                    quotes = [];
                    i = 0;
                    _a.label = 2;
                case 2:
                    if (!(i < data.length)) return [3 /*break*/, 10];
                    if (!(data[i].author === 'Jimmy McGill')) return [3 /*break*/, 3];
                    return [3 /*break*/, 9];
                case 3:
                    if (!quotes.includes(data[i].author)) return [3 /*break*/, 4];
                    el = document.createElement("q");
                    target = document.querySelector(".quotes-" + data[i].author.slice(0, data[i].author.indexOf(' '))).querySelector('.card-content');
                    el.innerHTML = data[i].quote;
                    target.appendChild(el);
                    return [3 /*break*/, 9];
                case 4:
                    elementNode = document.createElement("article");
                    if (!(data[i].author === 'Skyler White')) return [3 /*break*/, 6];
                    return [4 /*yield*/, characters_fetchDataAsync(characters_APICharacters, 'search', data[i].author)];
                case 5:
                    _a.sent();
                    return [3 /*break*/, 8];
                case 6: return [4 /*yield*/, characters_fetchDataAsync(characters_APICharacters, 'search', data[i].author.slice(data[i].author.indexOf(' '), data[i].author.length))];
                case 7:
                    _a.sent();
                    _a.label = 8;
                case 8:
                    elementNode.setAttribute("class", "card-quotes quotes-" + data[i].author.slice(0, data[i].author.indexOf(' ')));
                    elementNode.innerHTML = templateQuotes(data[i].author, imgQuotes, data[i].quote, data[i].quote_id, data[i].series);
                    characters_contentQuotes.appendChild(elementNode);
                    quotes.push(data[i].author);
                    _a.label = 9;
                case 9:
                    i++;
                    return [3 /*break*/, 2];
                case 10: return [3 /*break*/, 17];
                case 11:
                    if (!(type === 'episodes')) return [3 /*break*/, 16];
                    countCharacters = 0;
                    limitData = data[0].characters.length;
                    if (data[0].series === "Better Call Saul") {
                        characters_categoryBcs.checked = true;
                        characters_categoryBb.checked = false;
                    }
                    else {
                        characters_categoryBcs.checked = false;
                        characters_categoryBb.checked = true;
                    }
                    i = 0;
                    _a.label = 12;
                case 12:
                    if (!(i < data[0].characters.length)) return [3 /*break*/, 15];
                    if (data[0].characters[i] === "" || data[0].characters[i] === "a fly" || data[0].characters[i] === "Don Eladio") {
                        return [3 /*break*/, 15];
                    }
                    return [4 /*yield*/, characters_fetchDataAsync(characters_APICharacters, 'episodesSearch', (correctName(data[0].characters[i])) ? correctName(data[0].characters[i]) : data[0].characters[i])];
                case 13:
                    _a.sent();
                    _a.label = 14;
                case 14:
                    i++;
                    return [3 /*break*/, 12];
                case 15: return [3 /*break*/, 17];
                case 16:
                    if (type === 'episodesSearch') {
                        elementNode_1 = document.createElement("article");
                        elementNode_1.setAttribute("class", "card-characters off character" + data[0].name);
                        elementNode_1.innerHTML = templateCard(data[0].name, data[0].img, data[0].nickname, data[0].occupation, data[0].category, data[0].portrayed, data[0].status);
                        characters_content.appendChild(elementNode_1);
                        // Click Info
                        elementNode_1.addEventListener("click", function () {
                            if (elementNode_1.className.includes("on")) {
                                elementNode_1.classList.remove("on");
                                elementNode_1.classList.add("off");
                            }
                            else {
                                elementNode_1.classList.remove("off");
                                elementNode_1.classList.add("on");
                            }
                        });
                        // Call Quotes
                        countCharacters++;
                        if (countCharacters === limitData) {
                            visibility('.spring-spinner', 0, true);
                        }
                    }
                    _a.label = 17;
                case 17: return [2 /*return*/];
            }
        });
    });
}
// Call Fetch
function call(type) {
    (type === 'characters') ? characters_fetchDataAsync(characters_APICharacters, 'characters') : characters_fetchDataAsync(characters_APICharacters + "?category=" + type, type);
}
// Call Fetch Quotes
function callQuotes(filter, type) {
    if (filter === void 0) { filter = false; }
    if (type === void 0) { type = ''; }
    // contentQuotes.innerHTML = ''
    if (filter && type) {
        countCharacters = 0;
        (countCharacters < 12) ? (characters_fetchDataAsync(APIQuotes + "?series=" + type, 'quotes'), separateStatus = false) : null;
        countCharacters = 12;
    }
    else {
        (countCharacters < limitData) ? (characters_fetchDataAsync(APIQuotes, 'quotes'), separateStatus = false) : null;
        countCharacters = ++limitData;
    }
    visibility('.spring-spinner', 0, true);
}
function filterSeries(filter, quantity, separate) {
    if (separate === void 0) { separate = true; }
    cleanContent(filter);
    limitData = quantity;
    countCharacters = 0;
    separateStatus = separate;
    characters_fetchDataAsync(characters_APICharacters + "?category=" + filter, filter);
}
function filterEpisode(type, episode) {
    characters_content.innerHTML = '';
    characters_contentQuotes.innerHTML = '';
    characters_fetchDataAsync(APIEpisodes + "/" + episode, type);
}
function cleanContent(type, resetAll, separate) {
    if (type === void 0) { type = ''; }
    if (resetAll === void 0) { resetAll = false; }
    if (separate === void 0) { separate = true; }
    characters_content.innerHTML = '';
    characters_contentQuotes.innerHTML = '';
    limitData = 62;
    countCharacters = 0;
    separateStatus = separate;
    if (type) {
        visibility('.spring-spinner', 1);
        visibility('.separator', 0);
        resetValueIntersection(type);
        if (resetAll) {
            characters_fetchDataAsync(characters_APICharacters, type);
        }
    }
}
function correctName(name) {
    switch (name) {
        case 'Hank Schrader':
            return "Henry Schrader";
        case "Krazy-8":
            return "Domingo Molina";
        case "Ken Wins":
            return "Ken";
        case "Elliott Schwartz":
            return "Elliot Schwartz";
        case "Gretchen Swartz":
            return "Gretchen Schwartz";
        case "Badger":
            return "Brandon Mayhew";
        case "Ted Beneke":
            return "Theodore Beneke";
        case "Combo":
            return "Christian Ortgea";
        case "The cousins":
            return "Marco & Leonel Salamanca";
        case "White White Jr.":
            return "Holly White";
        case "Steve Gomez":
            return "Steven Gomez";
        case "Jimmy McGill":
            return "Saul Goodman";
        case "Mike Erhmantraut":
            return "Mike Ehrmantraut";
        case "Kim Wexler":
            return "Kimberly Wexler";
        case "Chuck McGill":
            return "Charles McGill";
        case "Nacho Varga":
            return "Ignacio Varga";
    }
}

;// CONCATENATED MODULE: ./src/js/app.js
// Style








 // Ts

 // Components




})();

/******/ })()
;