(this.webpackJsonpracepace=this.webpackJsonpracepace||[]).push([[0],{63:function(e,t,r){},64:function(e,t,r){},69:function(e,t,r){"use strict";r.r(t);var n=r(0),c=r.n(n),a=r(9),i=r.n(a),u=(r(63),r(15)),o=(r(64),r(105)),s=r(108),l=r(109),m=r(113),b=r(110),j=r(114),d=r(111),h=r(116),g=r(115),x=r(46),p=r(47),O=function(){function e(){Object(x.a)(this,e)}return Object(p.a)(e,null,[{key:"handleBackspaceEntry",value:function(t){if(e.hoursRegexTime.test(t)){var r=t.match(e.hoursRegexTime)[1]+t.match(e.hoursRegexTime)[2]+t.match(e.hoursRegexTime)[3];if(4===(r=r.substring(0,r.length-1)).length)return r.substring(0,2)+":"+r.substring(2);var n=r.substring(r.length-2),c=r.substring(r.length-4,r.length-2);return r.substring(0,r.length-4)+":"+c+":"+n}if(e.minutesRegexTime.test(t)){var a=t.match(e.minutesRegexTime)[1]+t.match(e.minutesRegexTime)[2];return(a="0"+a.substring(0,3)).substring(0,2)+":"+a.substring(2)}}},{key:"handleNumericEntry",value:function(t,r){if(e.hoursRegexTime.test(t)){var n=t.match(e.hoursRegexTime)[1]+t.match(e.hoursRegexTime)[2]+t.match(e.hoursRegexTime)[3],c=(n+=r).substring(n.length-2),a=n.substring(n.length-4,n.length-2);return n.substring(0,n.length-4)+":"+a+":"+c}if(e.minutesRegexTime.test(t)){var i=t.match(e.minutesRegexTime)[1]+t.match(e.minutesRegexTime)[2];return"0"===(i+=r)[0]?(i=i.substring(1)).substring(0,2)+":"+i.substring(2):i[0]+":"+i.substring(1,3)+":"+i.substring(3)}}}]),e}();O.minutesRegexTime=/([0-9]{2}):([0-9]{2})/,O.hoursRegexTime=/([0-9]{1,}):([0-9]{2}):([0-9]{2})/;var f={getTimeInSeconds:function(e){if(O.hoursRegexTime.test(e)){var t=e.match(O.hoursRegexTime)[1],r=e.match(O.hoursRegexTime)[2],n=e.match(O.hoursRegexTime)[2];return 3600*Number(t)+60*Number(r)+Number(n)}if(O.minutesRegexTime.test(e)){var c=e.match(O.minutesRegexTime)[1],a=e.match(O.minutesRegexTime)[2];return 60*Number(c)+Number(a)}},secondsToTimeString:function(e){return e>=3600?f.secondsToHoursString(e):f.secondsToMinutesString(e)},secondsToMinutesString:function(e){var t=e/60,r=t%1*60;return Math.trunc(t)+":"+(r<10?"0"+Math.round(r):Math.round(r))},secondsToHoursString:function(e){var t=e/3600,r=t%1*60,n=r%1*60;return Math.trunc(t)+":"+(r<10?"0"+Math.trunc(r):Math.trunc(r))+":"+(n<10?"0"+Math.round(n):Math.round(n))}},v=r(112),T="#965ada",M=Object(o.a)({textInput:{backgroundColor:"#0c0c0c",borderRadius:4,margin:"auto 4px","& input":{color:"white"},"& label, & label.Mui-focused":{color:T},"& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":{borderColor:T}}}),S=r(4),y=function(e){var t=Object(s.a)("(max-width:600px)"),r=e.value,n=e.setValue,c=e.metric,a=e.autoFocus,i=M();return Object(S.jsx)(S.Fragment,{children:Object(S.jsx)(v.a,{autoFocus:a||!1,className:i.textInput,variant:"outlined",placeholder:"distance",onChange:function(e){return n(e.target.value)},value:r,label:c?"kilometers":"miles",style:{marginBottom:t?"16px":null}})})},C=function(e){var t=Object(s.a)("(max-width:600px)"),r=e.value,n=e.setValue,c=e.autoFocus,a=e.isPace,i=M();return Object(S.jsx)(S.Fragment,{children:Object(S.jsx)(v.a,{autoFocus:c||!1,className:i.textInput,variant:"outlined",placeholder:a?"pace":"time",onChange:function(e){var t=e.nativeEvent.data;null===t&&n((function(e){return O.handleBackspaceEntry(e)})),/[0-9]/.test(t)&&n((function(e){return O.handleNumericEntry(e,t)}))},value:r,label:a?"pace":"time",style:{marginBottom:t?"16px":null}})})},R=function(e,t){var r=t?e+"--mobile":null;return"".concat(e," ").concat(r)},N=Object(o.a)({calculatedText:{fontSize:30,color:"white",display:"flex",flexDirection:"column",justifyContent:"center",marginTop:16,"& .calculatedText--label":{fontSize:16},"&--mobile":{marginTop:0}}}),k=function(e){var t=e.label,r=e.value,n=e.decorator,c=N(),a=Object(s.a)("(max-width:600px)");return Object(S.jsx)(S.Fragment,{children:Object(S.jsxs)("div",{className:R(c.calculatedText,a),children:[Object(S.jsx)("span",{className:"calculatedText--label",children:t}),Object(S.jsxs)("span",{children:[r," ",n]})]})})},w=Object(o.a)({inputWrapper:{"&--mobile":{display:"flex",flexDirection:"column",marginTop:16}}}),F=function(e){var t=w(),r=Object(s.a)("(max-width:600px)");return Object(S.jsx)("div",{className:R(t.inputWrapper,r),children:e.children})},I=Object(o.a)({tabContentWrapper:{display:"flex",flexDirection:"column","&--mobile":{display:"flex",flexDirection:"column-reverse"}}}),B=function(e){var t=I(),r=Object(s.a)("(max-width:600px)");return Object(S.jsx)("div",{className:R(t.tabContentWrapper,r),children:e.children})},P=function(e){var t=e.metric,r=Object(n.useState)("00:00"),c=Object(u.a)(r,2),a=c[0],i=c[1],o=Object(n.useState)(""),s=Object(u.a)(o,2),l=s[0],m=s[1];return Object(S.jsxs)(B,{children:[Object(S.jsxs)(F,{children:[Object(S.jsx)(y,{value:l,setValue:m,metric:t,autoFocus:!0}),Object(S.jsx)(C,{value:a,setValue:i})]}),Object(S.jsx)(k,{value:function(){try{var e=f.getTimeInSeconds(a);if(0===Number(l)||0===e)return"00:00";var t=e/Number(l);return f.secondsToTimeString(t)}catch(r){return console.log("error",r),"00:00"}}(),label:"Calculated Pace",decorator:t?"/km":"/mi"})]})},W=function(e){var t=e.metric,r=Object(n.useState)("00:00"),c=Object(u.a)(r,2),a=c[0],i=c[1],o=Object(n.useState)(""),s=Object(u.a)(o,2),l=s[0],m=s[1];return Object(S.jsxs)(B,{children:[Object(S.jsxs)(F,{children:[Object(S.jsx)(y,{value:l,setValue:m,metric:t,autoFocus:!0}),Object(S.jsx)(C,{value:a,setValue:i,metric:t,isPace:!0})]}),Object(S.jsx)(k,{value:function(){try{var e=f.getTimeInSeconds(a);if(0===Number(l)||0===e)return"00:00";var t=e*Number(l);return f.secondsToTimeString(t)}catch(r){return console.log("error",r),"00:00"}}(),label:"Calculated Time"})]})},D=function(e){var t=e.metric,r=Object(n.useState)("00:00"),c=Object(u.a)(r,2),a=c[0],i=c[1],o=Object(n.useState)("00:00"),s=Object(u.a)(o,2),l=s[0],m=s[1];return Object(S.jsxs)(B,{children:[Object(S.jsxs)(F,{children:[Object(S.jsx)(C,{value:l,setValue:m,metric:t,autoFocus:!0}),Object(S.jsx)(C,{value:a,setValue:i,metric:t,isPace:!0})]}),Object(S.jsx)(k,{value:function(){var e=t?"kilometers":"miles";try{var r=f.getTimeInSeconds(a),n=f.getTimeInSeconds(l);return 0===Number(n)||0===r?"0 ".concat(e):"".concat(Number(n/r).toFixed(2)," ").concat(e)}catch(c){return console.log("error",c),"0 ".concat(e)}}(),label:"Calculated Distance"})]})},V=r.p+"static/media/racepace.0d37b089.png",E=Object(o.a)({wrapper:{display:"flex",flexDirection:"column",justifyContent:"center",position:"absolute",left:"50%",top:"50%",transform:"translate(-50%, -50%)"},logoWrapper:{display:"flex",justifyContent:"center",marginBottom:16},logo:{width:450,"&--mobile":{width:250}},tabsWrapper:{marginBottom:16,backgroundColor:"#161616",color:"white","& .MuiTabs-root":{borderRadius:4},"& .MuiButtonBase-root.MuiTab-root":{backgroundColor:"#111"},"& .MuiTabs-indicator":{backgroundColor:T},"& .MuiTab-textColorInherit":{opacity:.5},"& .MuiTab-textColorInherit.Mui-selected":{opacity:1},"&--mobile":{margin:"auto",marginBottom:16}},toggleWrapper:{"& .MuiSwitch-switchBase":{color:"#bb94e7"},"& .MuiSwitch-colorPrimary.Mui-checked":{color:T},"& .MuiSwitch-colorPrimary + .MuiSwitch-track":{backgroundColor:"#444"},"& .MuiSwitch-colorPrimary.Mui-checked + .MuiSwitch-track":{backgroundColor:T}}});var L=function(){var e=E(),t=Object(s.a)("(max-width:600px)"),r=Object(n.useState)(!1),c=Object(u.a)(r,2),a=c[0],i=c[1],o=Object(n.useState)(0),x=Object(u.a)(o,2),p=x[0],O=x[1],f=[P,W,D][p];return Object(S.jsx)("div",{className:"App",children:Object(S.jsxs)("div",{className:R(e.wrapper,t),children:[Object(S.jsx)("div",{className:e.logoWrapper,children:Object(S.jsx)("img",{className:R(e.logo,t),src:V,alt:"Racepace Logo"})}),Object(S.jsxs)(l.a,{className:R(e.tabsWrapper,t),children:[Object(S.jsxs)(m.a,{value:p,children:[Object(S.jsx)(b.a,{label:"Pace",selected:!0,onClick:function(){return O(0)}}),Object(S.jsx)(b.a,{label:"Time",onClick:function(){return O(1)}}),Object(S.jsx)(b.a,{label:"Distance",onClick:function(){return O(2)}})]}),Object(S.jsx)(g.a,{component:"fieldset",className:e.toggleWrapper,children:Object(S.jsx)(d.a,{"aria-label":"position",row:!0,children:Object(S.jsx)(h.a,{value:a,control:Object(S.jsx)(j.a,{color:"primary"}),label:a?"Metric":"Imperial",labelPlacement:"end",onClick:function(){return i(!a)}})})})]}),Object(S.jsx)(f,{metric:a})]})})},z=function(e){e&&e instanceof Function&&r.e(3).then(r.bind(null,117)).then((function(t){var r=t.getCLS,n=t.getFID,c=t.getFCP,a=t.getLCP,i=t.getTTFB;r(e),n(e),c(e),a(e),i(e)}))};i.a.render(Object(S.jsx)(c.a.StrictMode,{children:Object(S.jsx)(L,{})}),document.getElementById("root")),z()}},[[69,1,2]]]);
//# sourceMappingURL=main.03f37bfc.chunk.js.map