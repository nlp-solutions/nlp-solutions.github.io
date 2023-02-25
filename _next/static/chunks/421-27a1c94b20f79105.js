"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[421],{1363:function(e,t,n){n.d(t,{R:function(){return o}});var r,o=((r=o||{}).Space=" ",r.Enter="Enter",r.Escape="Escape",r.Backspace="Backspace",r.Delete="Delete",r.ArrowLeft="ArrowLeft",r.ArrowUp="ArrowUp",r.ArrowRight="ArrowRight",r.ArrowDown="ArrowDown",r.Home="Home",r.End="End",r.PageUp="PageUp",r.PageDown="PageDown",r.Tab="Tab",r)},396:function(e,t,n){n.d(t,{J:function(){return G}});var r,o,u,l=n(7294),a=n(2984),i=n(2351),s=n(3784),c=n(9946),d=n(1363);function f(e){let t=e.parentElement,n=null;for(;t&&!(t instanceof HTMLFieldSetElement);)t instanceof HTMLLegendElement&&(n=t),t=t.parentElement;let r=(null==t?void 0:t.getAttribute("disabled"))==="";return!(r&&function(e){if(!e)return!1;let t=e.previousElementSibling;for(;null!==t;){if(t instanceof HTMLLegendElement)return!1;t=t.previousElementSibling}return!0}(n))&&r}var p=n(4575),v=n(6567),m=n(4157),b=n(3855);function h(e,t,n){let r=(0,b.E)(t);(0,l.useEffect)(()=>{function t(e){r.current(e)}return document.addEventListener(e,t,n),()=>document.removeEventListener(e,t,n)},[e,n])}var E=n(5466);function g(...e){return(0,l.useMemo)(()=>(0,E.r)(...e),[...e])}var y=n(6045),P=n(3781),T=((r=T||{})[r.Forwards=0]="Forwards",r[r.Backwards=1]="Backwards",r);function S(){var e,t;let n,r=(0,l.useRef)(0);return e="keydown",t=e=>{"Tab"===e.key&&(r.current=e.shiftKey?1:0)},n=(0,b.E)(t),(0,l.useEffect)(()=>{function t(e){n.current(e)}return window.addEventListener(e,t,!0),()=>window.removeEventListener(e,t,!0)},[e,!0]),r}var x=n(6723),w=((o=w||{})[o.Open=0]="Open",o[o.Closed=1]="Closed",o),O=((u=O||{})[u.TogglePopover=0]="TogglePopover",u[u.ClosePopover=1]="ClosePopover",u[u.SetButton=2]="SetButton",u[u.SetButtonId=3]="SetButtonId",u[u.SetPanel=4]="SetPanel",u[u.SetPanelId=5]="SetPanelId",u);let A={0:e=>({...e,popoverState:(0,a.E)(e.popoverState,{0:1,1:0})}),1:e=>1===e.popoverState?e:{...e,popoverState:1},2:(e,t)=>e.button===t.button?e:{...e,button:t.button},3:(e,t)=>e.buttonId===t.buttonId?e:{...e,buttonId:t.buttonId},4:(e,t)=>e.panel===t.panel?e:{...e,panel:t.panel},5:(e,t)=>e.panelId===t.panelId?e:{...e,panelId:t.panelId}},I=(0,l.createContext)(null);function F(e){let t=(0,l.useContext)(I);if(null===t){let n=Error(`<${e} /> is missing a parent <Popover /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(n,F),n}return t}I.displayName="PopoverContext";let R=(0,l.createContext)(null);function N(e){let t=(0,l.useContext)(R);if(null===t){let n=Error(`<${e} /> is missing a parent <Popover /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(n,N),n}return t}R.displayName="PopoverAPIContext";let C=(0,l.createContext)(null);function M(){return(0,l.useContext)(C)}C.displayName="PopoverGroupContext";let k=(0,l.createContext)(null);function L(e,t){return(0,a.E)(t.type,A,e,t)}k.displayName="PopoverPanelContext";let D=(0,i.yV)(function(e,t){var n,r,o,u;let c;let d=(0,l.useRef)(null),f=(0,s.T)(t,(0,s.h)(e=>{d.current=e})),m=(0,l.useRef)([]),E=(0,l.useReducer)(L,{popoverState:1,buttons:m,button:null,buttonId:null,panel:null,panelId:null,beforePanelSentinel:(0,l.createRef)(),afterPanelSentinel:(0,l.createRef)()}),[{popoverState:y,button:T,buttonId:S,panel:x,panelId:w,beforePanelSentinel:O,afterPanelSentinel:A},F]=E,N=g(null!=(n=d.current)?n:T),C=(0,l.useMemo)(()=>{if(!T||!x)return!1;for(let e of document.querySelectorAll("body > *"))if(Number(null==e?void 0:e.contains(T))^Number(null==e?void 0:e.contains(x)))return!0;let t=(0,p.GO)(),n=t.indexOf(T),r=(n+t.length-1)%t.length,o=(n+1)%t.length,u=t[r],l=t[o];return!x.contains(u)&&!x.contains(l)},[T,x]),k=(0,b.E)(S),D=(0,b.E)(w),j=(0,l.useMemo)(()=>({buttonId:k,panelId:D,close:()=>F({type:1})}),[k,D,F]),z=M(),H=null==z?void 0:z.registerPopover,B=(0,P.z)(()=>{var e;return null!=(e=null==z?void 0:z.isFocusWithinPopoverGroup())?e:(null==N?void 0:N.activeElement)&&((null==T?void 0:T.contains(N.activeElement))||(null==x?void 0:x.contains(N.activeElement)))});(0,l.useEffect)(()=>null==H?void 0:H(j),[H,j]),r=null==N?void 0:N.defaultView,o="focus",u=e=>{var t,n,r,o;0===y&&(B()||!T||!x||e.target!==window&&(null!=(n=null==(t=O.current)?void 0:t.contains)&&n.call(t,e.target)||null!=(o=null==(r=A.current)?void 0:r.contains)&&o.call(r,e.target)||F({type:1})))},c=(0,b.E)(u),(0,l.useEffect)(()=>{function e(e){c.current(e)}return(r=null!=r?r:window).addEventListener(o,e,!0),()=>r.removeEventListener(o,e,!0)},[r,o,!0]),function(e,t,n=!0){let r=(0,l.useRef)(!1);function o(n,o){if(!r.current||n.defaultPrevented)return;let u=function e(t){return"function"==typeof t?e(t()):Array.isArray(t)||t instanceof Set?t:[t]}(e),l=o(n);if(null!==l&&l.getRootNode().contains(l)){for(let a of u){if(null===a)continue;let i=a instanceof HTMLElement?a:a.current;if(null!=i&&i.contains(l)||n.composed&&n.composedPath().includes(i))return}return(0,p.sP)(l,p.tJ.Loose)||-1===l.tabIndex||n.preventDefault(),t(n,l)}}(0,l.useEffect)(()=>{requestAnimationFrame(()=>{r.current=n})},[n]);let u=(0,l.useRef)(null);h("mousedown",e=>{var t,n;r.current&&(u.current=(null==(n=null==(t=e.composedPath)?void 0:t.call(e))?void 0:n[0])||e.target)},!0),h("click",e=>{u.current&&(o(e,()=>u.current),u.current=null)},!0),h("blur",e=>o(e,()=>window.document.activeElement instanceof HTMLIFrameElement?window.document.activeElement:null),!0)}([T,x],(e,t)=>{F({type:1}),(0,p.sP)(t,p.tJ.Loose)||(e.preventDefault(),null==T||T.focus())},0===y);let G=(0,P.z)(e=>{F({type:1});let t=e?e instanceof HTMLElement?e:"current"in e&&e.current instanceof HTMLElement?e.current:T:T;null==t||t.focus()}),U=(0,l.useMemo)(()=>({close:G,isPortalled:C}),[G,C]),$=(0,l.useMemo)(()=>({open:0===y,close:G}),[y,G]);return l.createElement(I.Provider,{value:E},l.createElement(R.Provider,{value:U},l.createElement(v.up,{value:(0,a.E)(y,{0:v.ZM.Open,1:v.ZM.Closed})},(0,i.sY)({ourProps:{ref:f},theirProps:e,slot:$,defaultTag:"div",name:"Popover"}))))}),j=(0,i.yV)(function(e,t){let n=(0,c.M)(),{id:r=`headlessui-popover-button-${n}`,...o}=e,[u,v]=F("Popover.Button"),{isPortalled:b}=N("Popover.Button"),h=(0,l.useRef)(null),E=`headlessui-focus-sentinel-${(0,c.M)()}`,x=M(),w=null==x?void 0:x.closeOthers,O=null!==(0,l.useContext)(k);(0,l.useEffect)(()=>{if(!O)return v({type:3,buttonId:r}),()=>{v({type:3,buttonId:null})}},[O,r,v]);let[A]=(0,l.useState)(()=>Symbol()),I=(0,s.T)(h,t,O?null:e=>{if(e)u.buttons.current.push(A);else{let t=u.buttons.current.indexOf(A);-1!==t&&u.buttons.current.splice(t,1)}u.buttons.current.length>1&&console.warn("You are already using a <Popover.Button /> but only 1 <Popover.Button /> is supported."),e&&v({type:2,button:e})}),R=(0,s.T)(h,t),C=g(h),L=(0,P.z)(e=>{var t,n,r;if(O){if(1===u.popoverState)return;switch(e.key){case d.R.Space:case d.R.Enter:e.preventDefault(),null==(n=(t=e.target).click)||n.call(t),v({type:1}),null==(r=u.button)||r.focus()}}else switch(e.key){case d.R.Space:case d.R.Enter:e.preventDefault(),e.stopPropagation(),1===u.popoverState&&(null==w||w(u.buttonId)),v({type:0});break;case d.R.Escape:if(0!==u.popoverState)return null==w?void 0:w(u.buttonId);if(!h.current||(null==C?void 0:C.activeElement)&&!h.current.contains(C.activeElement))return;e.preventDefault(),e.stopPropagation(),v({type:1})}}),D=(0,P.z)(e=>{O||e.key===d.R.Space&&e.preventDefault()}),j=(0,P.z)(t=>{var n,r;f(t.currentTarget)||e.disabled||(O?(v({type:1}),null==(n=u.button)||n.focus()):(t.preventDefault(),t.stopPropagation(),1===u.popoverState&&(null==w||w(u.buttonId)),v({type:0}),null==(r=u.button)||r.focus()))}),z=(0,P.z)(e=>{e.preventDefault(),e.stopPropagation()}),H=0===u.popoverState,B=(0,l.useMemo)(()=>({open:H}),[H]),G=(0,m.f)(e,h),U=O?{ref:R,type:G,onKeyDown:L,onClick:j}:{ref:I,id:u.buttonId,type:G,"aria-expanded":e.disabled?void 0:0===u.popoverState,"aria-controls":u.panel?u.panelId:void 0,onKeyDown:L,onKeyUp:D,onClick:j,onMouseDown:z},$=S(),Y=(0,P.z)(()=>{let e=u.panel;e&&(0,a.E)($.current,{[T.Forwards]:()=>(0,p.jA)(e,p.TO.First),[T.Backwards]:()=>(0,p.jA)(e,p.TO.Last)})===p.fE.Error&&(0,p.jA)((0,p.GO)().filter(e=>"true"!==e.dataset.headlessuiFocusGuard),(0,a.E)($.current,{[T.Forwards]:p.TO.Next,[T.Backwards]:p.TO.Previous}),{relativeTo:u.button})});return l.createElement(l.Fragment,null,(0,i.sY)({ourProps:U,theirProps:o,slot:B,defaultTag:"button",name:"Popover.Button"}),H&&!O&&b&&l.createElement(y._,{id:E,features:y.A.Focusable,"data-headlessui-focus-guard":!0,as:"button",type:"button",onFocus:Y}))}),z=i.AN.RenderStrategy|i.AN.Static,H=(0,i.yV)(function(e,t){let n=(0,c.M)(),{id:r=`headlessui-popover-overlay-${n}`,...o}=e,[{popoverState:u},a]=F("Popover.Overlay"),d=(0,s.T)(t),p=(0,v.oJ)(),m=null!==p?p===v.ZM.Open:0===u,b=(0,P.z)(e=>{if(f(e.currentTarget))return e.preventDefault();a({type:1})}),h=(0,l.useMemo)(()=>({open:0===u}),[u]);return(0,i.sY)({ourProps:{ref:d,id:r,"aria-hidden":!0,onClick:b},theirProps:o,slot:h,defaultTag:"div",features:z,visible:m,name:"Popover.Overlay"})}),B=i.AN.RenderStrategy|i.AN.Static,G=Object.assign(D,{Button:j,Overlay:H,Panel:(0,i.yV)(function(e,t){let n=(0,c.M)(),{id:r=`headlessui-popover-panel-${n}`,focus:o=!1,...u}=e,[f,m]=F("Popover.Panel"),{close:b,isPortalled:h}=N("Popover.Panel"),E=`headlessui-focus-sentinel-before-${(0,c.M)()}`,w=`headlessui-focus-sentinel-after-${(0,c.M)()}`,O=(0,l.useRef)(null),A=(0,s.T)(O,t,e=>{m({type:4,panel:e})}),I=g(O);(0,x.e)(()=>(m({type:5,panelId:r}),()=>{m({type:5,panelId:null})}),[r,m]);let R=(0,v.oJ)(),C=null!==R?R===v.ZM.Open:0===f.popoverState,M=(0,P.z)(e=>{var t;if(e.key===d.R.Escape){if(0!==f.popoverState||!O.current||(null==I?void 0:I.activeElement)&&!O.current.contains(I.activeElement))return;e.preventDefault(),e.stopPropagation(),m({type:1}),null==(t=f.button)||t.focus()}});(0,l.useEffect)(()=>{var t;e.static||1===f.popoverState&&(null==(t=e.unmount)||t)&&m({type:4,panel:null})},[f.popoverState,e.unmount,e.static,m]),(0,l.useEffect)(()=>{if(!o||0!==f.popoverState||!O.current)return;let e=null==I?void 0:I.activeElement;O.current.contains(e)||(0,p.jA)(O.current,p.TO.First)},[o,O,f.popoverState]);let L=(0,l.useMemo)(()=>({open:0===f.popoverState,close:b}),[f,b]),D={ref:A,id:r,onKeyDown:M,onBlur:o&&0===f.popoverState?e=>{var t,n,r,o,u;let l=e.relatedTarget;!l||!O.current||null!=(t=O.current)&&t.contains(l)||(m({type:1}),((null==(r=null==(n=f.beforePanelSentinel.current)?void 0:n.contains)?void 0:r.call(n,l))||(null==(u=null==(o=f.afterPanelSentinel.current)?void 0:o.contains)?void 0:u.call(o,l)))&&l.focus({preventScroll:!0}))}:void 0,tabIndex:-1},j=S(),z=(0,P.z)(()=>{let e=O.current;e&&(0,a.E)(j.current,{[T.Forwards](){var t;(0,p.jA)(e,p.TO.First)===p.fE.Error&&(null==(t=f.afterPanelSentinel.current)||t.focus())},[T.Backwards](){var e;null==(e=f.button)||e.focus({preventScroll:!0})}})}),H=(0,P.z)(()=>{let e=O.current;e&&(0,a.E)(j.current,{[T.Forwards](){var e;if(!f.button)return;let t=(0,p.GO)(),n=t.indexOf(f.button),r=t.slice(0,n+1),o=[...t.slice(n+1),...r];for(let u of o.slice())if("true"===u.dataset.headlessuiFocusGuard||(null==(e=f.panel)?void 0:e.contains(u))){let l=o.indexOf(u);-1!==l&&o.splice(l,1)}(0,p.jA)(o,p.TO.First,{sorted:!1})},[T.Backwards](){var t;(0,p.jA)(e,p.TO.Previous)===p.fE.Error&&(null==(t=f.button)||t.focus())}})});return l.createElement(k.Provider,{value:r},C&&h&&l.createElement(y._,{id:E,ref:f.beforePanelSentinel,features:y.A.Focusable,"data-headlessui-focus-guard":!0,as:"button",type:"button",onFocus:z}),(0,i.sY)({ourProps:D,theirProps:u,slot:L,defaultTag:"div",features:B,visible:C,name:"Popover.Panel"}),C&&h&&l.createElement(y._,{id:w,ref:f.afterPanelSentinel,features:y.A.Focusable,"data-headlessui-focus-guard":!0,as:"button",type:"button",onFocus:H}))}),Group:(0,i.yV)(function(e,t){let n=(0,l.useRef)(null),r=(0,s.T)(n,t),[o,u]=(0,l.useState)([]),a=(0,P.z)(e=>{u(t=>{let n=t.indexOf(e);if(-1!==n){let r=t.slice();return r.splice(n,1),r}return t})}),c=(0,P.z)(e=>(u(t=>[...t,e]),()=>a(e))),d=(0,P.z)(()=>{var e;let t=(0,E.r)(n);if(!t)return!1;let r=t.activeElement;return!!(null!=(e=n.current)&&e.contains(r))||o.some(e=>{var n,o;return(null==(n=t.getElementById(e.buttonId.current))?void 0:n.contains(r))||(null==(o=t.getElementById(e.panelId.current))?void 0:o.contains(r))})}),f=(0,P.z)(e=>{for(let t of o)t.buttonId.current!==e&&t.close()}),p=(0,l.useMemo)(()=>({registerPopover:c,unregisterPopover:a,isFocusWithinPopoverGroup:d,closeOthers:f}),[c,a,d,f]),v=(0,l.useMemo)(()=>({}),[]);return l.createElement(C.Provider,{value:p},(0,i.sY)({ourProps:{ref:r},theirProps:e,slot:v,defaultTag:"div",name:"Popover.Group"}))})})},9808:function(e,t,n){n.d(t,{O:function(){return z}});var r,o,u,l=n(7294),a=n(2351),i=n(9946),s=n(2984),c=n(1363),d=n(4575),f=n(6723),p=n(3784),v=n(4157),m=n(3855),b=n(6045);function h({onFocus:e}){let[t,n]=(0,l.useState)(!0);return t?l.createElement(b._,{as:"button",type:"button",features:b.A.Focusable,onFocus(t){t.preventDefault();let r,o=50;r=requestAnimationFrame(function t(){if(o--<=0){r&&cancelAnimationFrame(r);return}if(e()){n(!1),cancelAnimationFrame(r);return}r=requestAnimationFrame(t)})}}):null}var E=n(3781),g=n(1021),y=n(5466),P=((r=P||{})[r.Forwards=0]="Forwards",r[r.Backwards=1]="Backwards",r),T=((o=T||{})[o.Less=-1]="Less",o[o.Equal=0]="Equal",o[o.Greater=1]="Greater",o),S=((u=S||{})[u.SetSelectedIndex=0]="SetSelectedIndex",u[u.RegisterTab=1]="RegisterTab",u[u.UnregisterTab=2]="UnregisterTab",u[u.RegisterPanel=3]="RegisterPanel",u[u.UnregisterPanel=4]="UnregisterPanel",u);let x={0(e,t){var n;let r=(0,d.z2)(e.tabs,e=>e.current),o=(0,d.z2)(e.panels,e=>e.current),u=r.filter(e=>{var t;return!(null!=(t=e.current)&&t.hasAttribute("disabled"))}),l={...e,tabs:r,panels:o};if(t.index<0||t.index>r.length-1){let a=(0,s.E)(Math.sign(t.index-e.selectedIndex),{[-1]:()=>1,0:()=>(0,s.E)(Math.sign(t.index),{[-1]:()=>0,0:()=>0,1:()=>1}),1:()=>0});return{...l,selectedIndex:(0,s.E)(a,{0:()=>r.indexOf(u[0]),1:()=>r.indexOf(u[u.length-1])})}}let i=r.slice(0,t.index),c=[...r.slice(t.index),...i].find(e=>u.includes(e));if(!c)return l;let f=null!=(n=r.indexOf(c))?n:e.selectedIndex;return -1===f&&(f=e.selectedIndex),{...l,selectedIndex:f}},1(e,t){var n;if(e.tabs.includes(t.tab))return e;let r=e.tabs[e.selectedIndex],o=(0,d.z2)([...e.tabs,t.tab],e=>e.current),u=null!=(n=o.indexOf(r))?n:e.selectedIndex;return -1===u&&(u=e.selectedIndex),{...e,tabs:o,selectedIndex:u}},2:(e,t)=>({...e,tabs:e.tabs.filter(e=>e!==t.tab)}),3:(e,t)=>e.panels.includes(t.panel)?e:{...e,panels:(0,d.z2)([...e.panels,t.panel],e=>e.current)},4:(e,t)=>({...e,panels:e.panels.filter(e=>e!==t.panel)})},w=(0,l.createContext)(null);function O(e){let t=(0,l.useContext)(w);if(null===t){let n=Error(`<${e} /> is missing a parent <Tab.Group /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(n,O),n}return t}w.displayName="TabsSSRContext";let A=(0,l.createContext)(null);function I(e){let t=(0,l.useContext)(A);if(null===t){let n=Error(`<${e} /> is missing a parent <Tab.Group /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(n,I),n}return t}A.displayName="TabsDataContext";let F=(0,l.createContext)(null);function R(e){let t=(0,l.useContext)(F);if(null===t){let n=Error(`<${e} /> is missing a parent <Tab.Group /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(n,R),n}return t}function N(e,t){return(0,s.E)(t.type,x,e,t)}F.displayName="TabsActionsContext";let C=l.Fragment,M=(0,a.yV)(function(e,t){let{defaultIndex:n=0,vertical:r=!1,manual:o=!1,onChange:u,selectedIndex:i=null,...s}=e,c=r?"vertical":"horizontal",v=o?"manual":"auto",b=null!==i,g=(0,p.T)(t),[y,P]=(0,l.useReducer)(N,{selectedIndex:null!=i?i:n,tabs:[],panels:[]}),T=(0,l.useMemo)(()=>({selectedIndex:y.selectedIndex}),[y.selectedIndex]),S=(0,m.E)(u||(()=>{})),x=(0,m.E)(y.tabs),O=(0,l.useMemo)(()=>({orientation:c,activation:v,...y}),[c,v,y]),I=(0,E.z)(e=>(P({type:1,tab:e}),()=>P({type:2,tab:e}))),R=(0,E.z)(e=>(P({type:3,panel:e}),()=>P({type:4,panel:e}))),M=(0,E.z)(e=>{k.current!==e&&S.current(e),b||P({type:0,index:e})}),k=(0,m.E)(b?e.selectedIndex:y.selectedIndex),L=(0,l.useMemo)(()=>({registerTab:I,registerPanel:R,change:M}),[]);(0,f.e)(()=>{P({type:0,index:null!=i?i:n})},[i]),(0,f.e)(()=>{if(void 0===k.current||y.tabs.length<=0)return;let e=(0,d.z2)(y.tabs,e=>e.current);e.some((e,t)=>y.tabs[t]!==e)&&M(e.indexOf(y.tabs[k.current]))});let D=(0,l.useRef)({tabs:0,panels:0});return l.createElement(w.Provider,{value:D},l.createElement(F.Provider,{value:L},l.createElement(A.Provider,{value:O},O.tabs.length<=0&&l.createElement(h,{onFocus(){var e,t;for(let n of x.current)if((null==(e=n.current)?void 0:e.tabIndex)===0)return null==(t=n.current)||t.focus(),!0;return!1}}),(0,a.sY)({ourProps:{ref:g},theirProps:s,slot:T,defaultTag:C,name:"Tabs"}))))}),k=(0,a.yV)(function(e,t){let{orientation:n,selectedIndex:r}=I("Tab.List"),o=(0,p.T)(t);return(0,a.sY)({ourProps:{ref:o,role:"tablist","aria-orientation":n},theirProps:e,slot:{selectedIndex:r},defaultTag:"div",name:"Tabs.List"})}),L=(0,a.yV)(function(e,t){var n,r;let o=(0,i.M)(),{id:u=`headlessui-tabs-tab-${o}`,...m}=e,{orientation:b,activation:h,selectedIndex:P,tabs:T,panels:S}=I("Tab"),x=R("Tab"),w=I("Tab"),A=O("Tab"),F=(0,l.useRef)(null),N=(0,p.T)(F,t);(0,f.e)(()=>x.registerTab(F),[x,F]);let C=(0,l.useRef)(-1);-1===C.current&&(C.current=A.current?A.current.tabs++:-1);let M=T.indexOf(F);-1===M&&(M=C.current);let k=M===P,L=(0,E.z)(e=>{var t;let n=e();if(n===d.fE.Success&&"auto"===h){let r=null==(t=(0,y.r)(F))?void 0:t.activeElement,o=w.tabs.findIndex(e=>e.current===r);-1!==o&&x.change(o)}return n}),D=(0,E.z)(e=>{let t=T.map(e=>e.current).filter(Boolean);if(e.key===c.R.Space||e.key===c.R.Enter){e.preventDefault(),e.stopPropagation(),x.change(M);return}switch(e.key){case c.R.Home:case c.R.PageUp:return e.preventDefault(),e.stopPropagation(),L(()=>(0,d.jA)(t,d.TO.First));case c.R.End:case c.R.PageDown:return e.preventDefault(),e.stopPropagation(),L(()=>(0,d.jA)(t,d.TO.Last))}if(L(()=>(0,s.E)(b,{vertical:()=>e.key===c.R.ArrowUp?(0,d.jA)(t,d.TO.Previous|d.TO.WrapAround):e.key===c.R.ArrowDown?(0,d.jA)(t,d.TO.Next|d.TO.WrapAround):d.fE.Error,horizontal:()=>e.key===c.R.ArrowLeft?(0,d.jA)(t,d.TO.Previous|d.TO.WrapAround):e.key===c.R.ArrowRight?(0,d.jA)(t,d.TO.Next|d.TO.WrapAround):d.fE.Error}))===d.fE.Success)return e.preventDefault()}),j=(0,l.useRef)(!1),z=(0,E.z)(()=>{var e;j.current||(j.current=!0,null==(e=F.current)||e.focus(),x.change(M),(0,g.Y)(()=>{j.current=!1}))}),H=(0,E.z)(e=>{e.preventDefault()}),B=(0,l.useMemo)(()=>({selected:k}),[k]),G={ref:N,onKeyDown:D,onMouseDown:H,onClick:z,id:u,role:"tab",type:(0,v.f)(e,F),"aria-controls":null==(r=null==(n=S[M])?void 0:n.current)?void 0:r.id,"aria-selected":k,tabIndex:k?0:-1};return(0,a.sY)({ourProps:G,theirProps:m,slot:B,defaultTag:"button",name:"Tabs.Tab"})}),D=(0,a.yV)(function(e,t){let{selectedIndex:n}=I("Tab.Panels"),r=(0,p.T)(t),o=(0,l.useMemo)(()=>({selectedIndex:n}),[n]);return(0,a.sY)({ourProps:{ref:r},theirProps:e,slot:o,defaultTag:"div",name:"Tabs.Panels"})}),j=a.AN.RenderStrategy|a.AN.Static,z=Object.assign(L,{Group:M,List:k,Panels:D,Panel:(0,a.yV)(function(e,t){var n,r,o,u;let s=(0,i.M)(),{id:c=`headlessui-tabs-panel-${s}`,tabIndex:d=0,...v}=e,{selectedIndex:m,tabs:h,panels:E}=I("Tab.Panel"),g=R("Tab.Panel"),y=O("Tab.Panel"),P=(0,l.useRef)(null),T=(0,p.T)(P,t);(0,f.e)(()=>g.registerPanel(P),[g,P]);let S=(0,l.useRef)(-1);-1===S.current&&(S.current=y.current?y.current.panels++:-1);let x=E.indexOf(P);-1===x&&(x=S.current);let w=x===m,A=(0,l.useMemo)(()=>({selected:w}),[w]),F={ref:T,id:c,role:"tabpanel","aria-labelledby":null==(r=null==(n=h[x])?void 0:n.current)?void 0:r.id,tabIndex:w?d:-1};return w||null!=(o=v.unmount)&&!o||null!=(u=v.static)&&u?(0,a.sY)({ourProps:F,theirProps:v,slot:A,defaultTag:"div",features:j,visible:w,name:"Tabs.Panel"}):l.createElement(b._,{as:"span",...F})})})},7913:function(e,t,n){n.d(t,{u:function(){return k}});var r,o=n(7294),u=n(2351),l=n(6567),a=n(2984),i=n(6723);function s(){let e=(0,o.useRef)(!1);return(0,i.e)(()=>(e.current=!0,()=>{e.current=!1}),[]),e}var c=n(3855),d=n(2180),f=n(3784),p=n(1021);function v(){let e=[],t=[],n={enqueue(e){t.push(e)},addEventListener:(e,t,r,o)=>(e.addEventListener(t,r,o),n.add(()=>e.removeEventListener(t,r,o))),requestAnimationFrame(...e){let t=requestAnimationFrame(...e);return n.add(()=>cancelAnimationFrame(t))},nextFrame:(...e)=>n.requestAnimationFrame(()=>n.requestAnimationFrame(...e)),setTimeout(...e){let t=setTimeout(...e);return n.add(()=>clearTimeout(t))},microTask(...e){let t={current:!0};return(0,p.Y)(()=>{t.current&&e[0]()}),n.add(()=>{t.current=!1})},add:t=>(e.push(t),()=>{let n=e.indexOf(t);if(n>=0){let[r]=e.splice(n,1);r()}}),dispose(){for(let t of e.splice(0))t()},async workQueue(){for(let e of t.splice(0))await e()}};return n}function m(e,...t){e&&t.length>0&&e.classList.add(...t)}function b(e,...t){e&&t.length>0&&e.classList.remove(...t)}function h(){let[e]=(0,o.useState)(v);return(0,o.useEffect)(()=>()=>e.dispose(),[e]),e}var E=n(3781),g=n(4067),y=n(7896);function P(e=""){return e.split(" ").filter(e=>e.trim().length>1)}let T=(0,o.createContext)(null);T.displayName="TransitionContext";var S=((r=S||{}).Visible="visible",r.Hidden="hidden",r);let x=(0,o.createContext)(null);function w(e){return"children"in e?w(e.children):e.current.filter(({el:e})=>null!==e.current).filter(({state:e})=>"visible"===e).length>0}function O(e,t){let n=(0,c.E)(e),r=(0,o.useRef)([]),l=s(),i=h(),d=(0,E.z)((e,t=u.l4.Hidden)=>{let o=r.current.findIndex(({el:t})=>t===e);-1!==o&&((0,a.E)(t,{[u.l4.Unmount](){r.current.splice(o,1)},[u.l4.Hidden](){r.current[o].state="hidden"}}),i.microTask(()=>{var e;!w(r)&&l.current&&(null==(e=n.current)||e.call(n))}))}),f=(0,E.z)(e=>{let t=r.current.find(({el:t})=>t===e);return t?"visible"!==t.state&&(t.state="visible"):r.current.push({el:e,state:"visible"}),()=>d(e,u.l4.Unmount)}),p=(0,o.useRef)([]),v=(0,o.useRef)(Promise.resolve()),m=(0,o.useRef)({enter:[],leave:[],idle:[]}),b=(0,E.z)((e,n,r)=>{p.current.splice(0),t&&(t.chains.current[n]=t.chains.current[n].filter(([t])=>t!==e)),null==t||t.chains.current[n].push([e,new Promise(e=>{p.current.push(e)})]),null==t||t.chains.current[n].push([e,new Promise(e=>{Promise.all(m.current[n].map(([e,t])=>t)).then(()=>e())})]),"enter"===n?v.current=v.current.then(()=>null==t?void 0:t.wait.current).then(()=>r(n)):r(n)}),g=(0,E.z)((e,t,n)=>{Promise.all(m.current[t].splice(0).map(([e,t])=>t)).then(()=>{var e;null==(e=p.current.shift())||e()}).then(()=>n(t))});return(0,o.useMemo)(()=>({children:r,register:f,unregister:d,onStart:b,onStop:g,wait:v,chains:m}),[f,d,r,b,g,m,v])}function A(){}x.displayName="NestingContext";let I=["beforeEnter","afterEnter","beforeLeave","afterLeave"];function F(e){var t;let n={};for(let r of I)n[r]=null!=(t=e[r])?t:A;return n}let R=u.AN.RenderStrategy,N=(0,u.yV)(function(e,t){var n;let r,{beforeEnter:p,afterEnter:S,beforeLeave:A,afterLeave:I,enter:N,enterFrom:C,enterTo:M,entered:k,leave:L,leaveFrom:D,leaveTo:j,...z}=e,H=(0,o.useRef)(null),B=(0,f.T)(H,t),G=z.unmount?u.l4.Unmount:u.l4.Hidden,{show:U,appear:$,initial:Y}=function(){let e=(0,o.useContext)(T);if(null===e)throw Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");return e}(),[V,_]=(0,o.useState)(U?"visible":"hidden"),q=function(){let e=(0,o.useContext)(x);if(null===e)throw Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");return e}(),{register:W,unregister:J}=q,Z=(0,o.useRef)(null);(0,o.useEffect)(()=>W(H),[W,H]),(0,o.useEffect)(()=>{if(G===u.l4.Hidden&&H.current){if(U&&"visible"!==V){_("visible");return}return(0,a.E)(V,{hidden:()=>J(H),visible:()=>W(H)})}},[V,H,W,J,U,G]);let K=(0,c.E)({enter:P(N),enterFrom:P(C),enterTo:P(M),entered:P(k),leave:P(L),leaveFrom:P(D),leaveTo:P(j)}),X=(n={beforeEnter:p,afterEnter:S,beforeLeave:A,afterLeave:I},r=(0,o.useRef)(F(n)),(0,o.useEffect)(()=>{r.current=F(n)},[n]),r),Q=(0,d.H)();(0,o.useEffect)(()=>{if(Q&&"visible"===V&&null===H.current)throw Error("Did you forget to passthrough the `ref` to the actual DOM node?")},[H,V,Q]);let ee=Y&&!$,et=!Q||ee||Z.current===U?"idle":U?"enter":"leave",en=(0,E.z)(e=>(0,a.E)(e,{enter:()=>X.current.beforeEnter(),leave:()=>X.current.beforeLeave(),idle(){}})),er=(0,E.z)(e=>(0,a.E)(e,{enter:()=>X.current.afterEnter(),leave:()=>X.current.afterLeave(),idle(){}})),eo=O(()=>{_("hidden"),J(H)},q);(function({container:e,direction:t,classes:n,onStart:r,onStop:o}){let u=s(),l=h(),d=(0,c.E)(t);(0,i.e)(()=>{let t=v();l.add(t.dispose);let i=e.current;if(i&&"idle"!==d.current&&u.current){var s,c,f,p;let h,E,g,y,P,T,S;return t.dispose(),r.current(d.current),t.add((s=i,c=n.current,f="enter"===d.current,p=()=>{t.dispose(),o.current(d.current)},E=f?"enter":"leave",g=v(),y=void 0!==p?(h={called:!1},(...e)=>{if(!h.called)return h.called=!0,p(...e)}):()=>{},"enter"===E&&(s.removeAttribute("hidden"),s.style.display=""),P=(0,a.E)(E,{enter:()=>c.enter,leave:()=>c.leave}),T=(0,a.E)(E,{enter:()=>c.enterTo,leave:()=>c.leaveTo}),S=(0,a.E)(E,{enter:()=>c.enterFrom,leave:()=>c.leaveFrom}),b(s,...c.enter,...c.enterTo,...c.enterFrom,...c.leave,...c.leaveFrom,...c.leaveTo,...c.entered),m(s,...P,...S),g.nextFrame(()=>{b(s,...S),m(s,...T),function(e,t){let n=v();if(!e)return n.dispose;let{transitionDuration:r,transitionDelay:o}=getComputedStyle(e),[u,l]=[r,o].map(e=>{let[t=0]=e.split(",").filter(Boolean).map(e=>e.includes("ms")?parseFloat(e):1e3*parseFloat(e)).sort((e,t)=>t-e);return t});if(u+l!==0){let a=n.addEventListener(e,"transitionend",e=>{e.target===e.currentTarget&&(t(),a())})}else t();n.add(()=>t()),n.dispose}(s,()=>(b(s,...P),m(s,...c.entered),y()))}),g.dispose)),t.dispose}},[t])})({container:H,classes:K,direction:et,onStart:(0,c.E)(e=>{eo.onStart(H,e,en)}),onStop:(0,c.E)(e=>{eo.onStop(H,e,er),"leave"!==e||w(eo)||(_("hidden"),J(H))})}),(0,o.useEffect)(()=>{ee&&(G===u.l4.Hidden?Z.current=null:Z.current=U)},[U,ee,V]);let eu=z;return $&&U&&y.O.isServer&&(eu={...eu,className:(0,g.A)(z.className,...K.current.enter,...K.current.enterFrom)}),o.createElement(x.Provider,{value:eo},o.createElement(l.up,{value:(0,a.E)(V,{visible:l.ZM.Open,hidden:l.ZM.Closed})},(0,u.sY)({ourProps:{ref:B},theirProps:eu,defaultTag:"div",features:R,visible:"visible"===V,name:"Transition.Child"})))}),C=(0,u.yV)(function(e,t){let{show:n,appear:r=!1,unmount:s,...c}=e,p=(0,o.useRef)(null),v=(0,f.T)(p,t);(0,d.H)();let m=(0,l.oJ)();if(void 0===n&&null!==m&&(n=(0,a.E)(m,{[l.ZM.Open]:!0,[l.ZM.Closed]:!1})),![!0,!1].includes(n))throw Error("A <Transition /> is used but it is missing a `show={true | false}` prop.");let[b,h]=(0,o.useState)(n?"visible":"hidden"),E=O(()=>{h("hidden")}),[g,y]=(0,o.useState)(!0),P=(0,o.useRef)([n]);(0,i.e)(()=>{!1!==g&&P.current[P.current.length-1]!==n&&(P.current.push(n),y(!1))},[P,n]);let S=(0,o.useMemo)(()=>({show:n,appear:r,initial:g}),[n,r,g]);(0,o.useEffect)(()=>{if(n)h("visible");else if(w(E)){let e=p.current;if(!e)return;let t=e.getBoundingClientRect();0===t.x&&0===t.y&&0===t.width&&0===t.height&&h("hidden")}else h("hidden")},[n,E]);let A={unmount:s};return o.createElement(x.Provider,{value:E},o.createElement(T.Provider,{value:S},(0,u.sY)({ourProps:{...A,as:o.Fragment,children:o.createElement(N,{ref:v,...A,...c})},theirProps:{},defaultTag:o.Fragment,features:R,visible:"visible"===b,name:"Transition"})))}),M=(0,u.yV)(function(e,t){let n=null!==(0,o.useContext)(T),r=null!==(0,l.oJ)();return o.createElement(o.Fragment,null,!n&&r?o.createElement(C,{ref:t,...e}):o.createElement(N,{ref:t,...e}))}),k=Object.assign(C,{Child:M,Root:C})},3781:function(e,t,n){n.d(t,{z:function(){return u}});var r=n(7294),o=n(3855);let u=function(e){let t=(0,o.E)(e);return r.useCallback((...e)=>t.current(...e),[t])}},9946:function(e,t,n){n.d(t,{M:function(){return i}});var r,o=n(7294),u=n(6723),l=n(2180),a=n(7896);let i=null!=(r=o.useId)?r:function(){let e=(0,l.H)(),[t,n]=o.useState(e?()=>a.O.nextId():null);return(0,u.e)(()=>{null===t&&n(a.O.nextId())},[t]),null!=t?""+t:void 0}},6723:function(e,t,n){n.d(t,{e:function(){return u}});var r=n(7294),o=n(7896);let u=(e,t)=>{o.O.isServer?(0,r.useEffect)(e,t):(0,r.useLayoutEffect)(e,t)}},3855:function(e,t,n){n.d(t,{E:function(){return u}});var r=n(7294),o=n(6723);function u(e){let t=(0,r.useRef)(e);return(0,o.e)(()=>{t.current=e},[e]),t}},4157:function(e,t,n){n.d(t,{f:function(){return l}});var r=n(7294),o=n(6723);function u(e){var t;if(e.type)return e.type;let n=null!=(t=e.as)?t:"button";if("string"==typeof n&&"button"===n.toLowerCase())return"button"}function l(e,t){let[n,l]=(0,r.useState)(()=>u(e));return(0,o.e)(()=>{l(u(e))},[e.type,e.as]),(0,o.e)(()=>{n||!t.current||t.current instanceof HTMLButtonElement&&!t.current.hasAttribute("type")&&l("button")},[n,t]),n}},2180:function(e,t,n){n.d(t,{H:function(){return u}});var r=n(7294),o=n(7896);function u(){let[e,t]=(0,r.useState)(o.O.isHandoffComplete);return e&&!1===o.O.isHandoffComplete&&t(!1),(0,r.useEffect)(()=>{!0!==e&&t(!0)},[e]),(0,r.useEffect)(()=>o.O.handoff(),[]),e}},3784:function(e,t,n){n.d(t,{T:function(){return a},h:function(){return l}});var r=n(7294),o=n(3781);let u=Symbol();function l(e,t=!0){return Object.assign(e,{[u]:t})}function a(...e){let t=(0,r.useRef)(e);(0,r.useEffect)(()=>{t.current=e},[e]);let n=(0,o.z)(e=>{for(let n of t.current)null!=n&&("function"==typeof n?n(e):n.current=e)});return e.every(e=>null==e||(null==e?void 0:e[u]))?void 0:n}},6045:function(e,t,n){n.d(t,{A:function(){return u},_:function(){return l}});var r,o=n(2351),u=((r=u||{})[r.None=1]="None",r[r.Focusable=2]="Focusable",r[r.Hidden=4]="Hidden",r);let l=(0,o.yV)(function(e,t){let{features:n=1,...r}=e,u={ref:t,"aria-hidden":(2&n)==2||void 0,style:{position:"fixed",top:1,left:1,width:1,height:0,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",borderWidth:"0",...(4&n)==4&&(2&n)!=2&&{display:"none"}}};return(0,o.sY)({ourProps:u,theirProps:r,slot:{},defaultTag:"div",name:"Hidden"})})},6567:function(e,t,n){n.d(t,{ZM:function(){return l},oJ:function(){return a},up:function(){return i}});var r,o=n(7294);let u=(0,o.createContext)(null);u.displayName="OpenClosedContext";var l=((r=l||{})[r.Open=0]="Open",r[r.Closed=1]="Closed",r);function a(){return(0,o.useContext)(u)}function i({value:e,children:t}){return o.createElement(u.Provider,{value:e},t)}},4067:function(e,t,n){n.d(t,{A:function(){return r}});function r(...e){return e.filter(Boolean).join(" ")}},7896:function(e,t,n){n.d(t,{O:function(){return l}});var r=Object.defineProperty,o=(e,t,n)=>t in e?r(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,u=(e,t,n)=>(o(e,"symbol"!=typeof t?t+"":t,n),n);let l=new class{constructor(){u(this,"current",this.detect()),u(this,"handoffState","pending"),u(this,"currentId",0)}set(e){this.current!==e&&(this.handoffState="pending",this.currentId=0,this.current=e)}reset(){this.set(this.detect())}nextId(){return++this.currentId}get isServer(){return"server"===this.current}get isClient(){return"client"===this.current}detect(){return"undefined"==typeof window||"undefined"==typeof document?"server":"client"}handoff(){"pending"===this.handoffState&&(this.handoffState="complete")}get isHandoffComplete(){return"complete"===this.handoffState}}},4575:function(e,t,n){n.d(t,{GO:function(){return p},TO:function(){return c},fE:function(){return d},jA:function(){return h},sP:function(){return m},tJ:function(){return v},z2:function(){return b}});var r,o,u,l,a=n(2984),i=n(5466);let s=["[contentEditable=true]","[tabindex]","a[href]","area[href]","button:not([disabled])","iframe","input:not([disabled])","select:not([disabled])","textarea:not([disabled])"].map(e=>`${e}:not([tabindex='-1'])`).join(",");var c=((r=c||{})[r.First=1]="First",r[r.Previous=2]="Previous",r[r.Next=4]="Next",r[r.Last=8]="Last",r[r.WrapAround=16]="WrapAround",r[r.NoScroll=32]="NoScroll",r),d=((o=d||{})[o.Error=0]="Error",o[o.Overflow=1]="Overflow",o[o.Success=2]="Success",o[o.Underflow=3]="Underflow",o),f=((u=f||{})[u.Previous=-1]="Previous",u[u.Next=1]="Next",u);function p(e=document.body){return null==e?[]:Array.from(e.querySelectorAll(s)).sort((e,t)=>Math.sign((e.tabIndex||Number.MAX_SAFE_INTEGER)-(t.tabIndex||Number.MAX_SAFE_INTEGER)))}var v=((l=v||{})[l.Strict=0]="Strict",l[l.Loose=1]="Loose",l);function m(e,t=0){var n;return e!==(null==(n=(0,i.r)(e))?void 0:n.body)&&(0,a.E)(t,{0:()=>e.matches(s),1(){let t=e;for(;null!==t;){if(t.matches(s))return!0;t=t.parentElement}return!1}})}function b(e,t=e=>e){return e.slice().sort((e,n)=>{let r=t(e),o=t(n);if(null===r||null===o)return 0;let u=r.compareDocumentPosition(o);return u&Node.DOCUMENT_POSITION_FOLLOWING?-1:u&Node.DOCUMENT_POSITION_PRECEDING?1:0})}function h(e,t,{sorted:n=!0,relativeTo:r=null,skipElements:o=[]}={}){var u,l,a;let i=Array.isArray(e)?e.length>0?e[0].ownerDocument:document:e.ownerDocument,s=Array.isArray(e)?n?b(e):e:p(e);o.length>0&&s.length>1&&(s=s.filter(e=>!o.includes(e))),r=null!=r?r:i.activeElement;let c=(()=>{if(5&t)return 1;if(10&t)return -1;throw Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),d=(()=>{if(1&t)return 0;if(2&t)return Math.max(0,s.indexOf(r))-1;if(4&t)return Math.max(0,s.indexOf(r))+1;if(8&t)return s.length-1;throw Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),f=32&t?{preventScroll:!0}:{},v=0,m=s.length,h;do{if(v>=m||v+m<=0)return 0;let E=d+v;if(16&t)E=(E+m)%m;else{if(E<0)return 3;if(E>=m)return 1}null==(h=s[E])||h.focus(f),v+=c}while(h!==i.activeElement);return 6&t&&null!=(a=null==(l=null==(u=h)?void 0:u.matches)?void 0:l.call(u,"textarea,input"))&&a&&h.select(),h.hasAttribute("tabindex")||h.setAttribute("tabindex","0"),2}},2984:function(e,t,n){n.d(t,{E:function(){return r}});function r(e,t,...n){if(e in t){let o=t[e];return"function"==typeof o?o(...n):o}let u=Error(`Tried to handle "${e}" but there is no handler defined. Only defined handlers are: ${Object.keys(t).map(e=>`"${e}"`).join(", ")}.`);throw Error.captureStackTrace&&Error.captureStackTrace(u,r),u}},1021:function(e,t,n){n.d(t,{Y:function(){return r}});function r(e){"function"==typeof queueMicrotask?queueMicrotask(e):Promise.resolve().then(e).catch(e=>setTimeout(()=>{throw e}))}},5466:function(e,t,n){n.d(t,{r:function(){return o}});var r=n(7896);function o(e){return r.O.isServer?null:e instanceof Node?e.ownerDocument:null!=e&&e.hasOwnProperty("current")&&e.current instanceof Node?e.current.ownerDocument:document}},2351:function(e,t,n){n.d(t,{AN:function(){return i},l4:function(){return s},sY:function(){return c},yV:function(){return p}});var r,o,u=n(7294),l=n(4067),a=n(2984),i=((r=i||{})[r.None=0]="None",r[r.RenderStrategy=1]="RenderStrategy",r[r.Static=2]="Static",r),s=((o=s||{})[o.Unmount=0]="Unmount",o[o.Hidden=1]="Hidden",o);function c({ourProps:e,theirProps:t,slot:n,defaultTag:r,features:o,visible:u=!0,name:l}){let i=f(t,e);if(u)return d(i,n,r,l);let s=null!=o?o:0;if(2&s){let{static:c=!1,...p}=i;if(c)return d(p,n,r,l)}if(1&s){let{unmount:v=!0,...m}=i;return(0,a.E)(v?0:1,{0:()=>null,1:()=>d({...m,hidden:!0,style:{display:"none"}},n,r,l)})}return d(i,n,r,l)}function d(e,t={},n,r){var o;let{as:a=n,children:i,refName:s="ref",...c}=m(e,["unmount","static"]),d=void 0!==e.ref?{[s]:e.ref}:{},p="function"==typeof i?i(t):i;c.className&&"function"==typeof c.className&&(c.className=c.className(t));let b={};if(t){let h=!1,E=[];for(let[g,y]of Object.entries(t))"boolean"==typeof y&&(h=!0),!0===y&&E.push(g);h&&(b["data-headlessui-state"]=E.join(" "))}if(a===u.Fragment&&Object.keys(v(c)).length>0){if(!(0,u.isValidElement)(p)||Array.isArray(p)&&p.length>1)throw Error(['Passing props on "Fragment"!',"",`The current component <${r} /> is rendering a "Fragment".`,"However we need to passthrough the following props:",Object.keys(c).map(e=>`  - ${e}`).join(`
`),"","You can apply a few solutions:",['Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".',"Render a single element as the child so that we can forward the props onto that element."].map(e=>`  - ${e}`).join(`
`)].join(`
`));let P=(0,l.A)(null==(o=p.props)?void 0:o.className,c.className);return(0,u.cloneElement)(p,Object.assign({},f(p.props,v(m(c,["ref"]))),b,d,function(...e){return{ref:e.every(e=>null==e)?void 0:t=>{for(let n of e)null!=n&&("function"==typeof n?n(t):n.current=t)}}}(p.ref,d.ref),P?{className:P}:{}))}return(0,u.createElement)(a,Object.assign({},m(c,["ref"]),a!==u.Fragment&&d,a!==u.Fragment&&b),p)}function f(...e){if(0===e.length)return{};if(1===e.length)return e[0];let t={},n={};for(let r of e)for(let o in r)o.startsWith("on")&&"function"==typeof r[o]?(null!=n[o]||(n[o]=[]),n[o].push(r[o])):t[o]=r[o];if(t.disabled||t["aria-disabled"])return Object.assign(t,Object.fromEntries(Object.keys(n).map(e=>[e,void 0])));for(let u in n)Object.assign(t,{[u](e,...t){let r=n[u];for(let o of r){if((e instanceof Event||(null==e?void 0:e.nativeEvent)instanceof Event)&&e.defaultPrevented)return;o(e,...t)}}});return t}function p(e){var t;return Object.assign((0,u.forwardRef)(e),{displayName:null!=(t=e.displayName)?t:e.name})}function v(e){let t=Object.assign({},e);for(let n in t)void 0===t[n]&&delete t[n];return t}function m(e,t=[]){let n=Object.assign({},e);for(let r of t)r in n&&delete n[r];return n}}}]);