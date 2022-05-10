(this.webpackJsonp=this.webpackJsonp||[]).push([[0],{164:function(e,t,n){"use strict";n.d(t,"a",(function(){return Ne}));var r,o=n(5),a=n.n(o),c=n(240),i=n(241),s=n(31),l=n(3),d=n(84),u=n(21),f=n(1),b=n(8),j=n.n(b),h=n(0),p=n(2);!function(e){e.LIGHT="light",e.DARK="dark"}(r||(r={}));var x=Object(h.createContext)({theme:r.LIGHT,setAppTheme:function(){}}),O=function(e){var t=e.children,n=Object(h.useState)(r.DARK),o=j()(n,2),a=o[0],c=o[1];return Object(p.jsx)(x.Provider,{value:{theme:a,setAppTheme:function(){c(a===r.DARK?r.LIGHT:r.DARK)}},children:t})},g=function(){return Object(h.useContext)(x)},m=n(239),y=n(165),v=n(169),w=n(42),C=function(){return l.a.create({fontBold:{fontFamily:"RobotoMono_700Bold"},font:{fontFamily:"RobotoMono_400Regular"}})};function D(e){var t=e.navigation,n=e.back,o=g(),a=o.theme,c=o.setAppTheme;return Object(p.jsxs)(m.a,{style:A(a).container,children:[Object(p.jsx)(y.a,{hidden:!0}),Object(p.jsxs)(f.a,{style:A(a).logoContainer,children:[n&&Object(p.jsx)(s.a,{onPress:t.goBack,children:Object(p.jsx)(w.a,{name:"back",size:16,style:A(a).back,color:"#f5f6f7"})}),Object(p.jsx)(u.a,{style:[C().fontBold,A(a).title],children:"My Todo App"})]}),Object(p.jsxs)(f.a,{style:A(a).switchContainer,children:[Object(p.jsx)(d.a,{style:A(a).switch,trackColor:{false:"#ffd700",true:"#03dac6"},ios_backgroundColor:"#ffd700",thumbColor:a===r.DARK?"#00ffbb":"yellow",onValueChange:c,value:a===r.DARK}),Object(p.jsx)(v.a,{name:a===r.DARK?"moon":"sun",size:18,color:a===r.DARK?"#03dac6":"yellow"})]})]})}var A=function(e){return l.a.create({container:{padding:16,flexDirection:"row",alignItems:"center",justifyContent:"space-between",backgroundColor:e===r.DARK?"#242526":"rebeccapurple"},logoContainer:{flexDirection:"row",alignItems:"center"},back:{marginRight:16},title:{fontSize:24,color:"#f5f6f7"},switchContainer:{flexDirection:"row",alignItems:"center",paddingRight:8},switch:{transform:[{scale:.7}]}})},T=n(7),R=n.n(T),P=n(56),k=n(242),L=n(107);var I="Todos - List",K="Todos - Add",S="Todos - Edit",E=n(37),z=n(44);function B(e){var t=e.todo,n=e.value,o=e.onChangeText,a=e.onPress,c=e.showDetails,i=e.setShowDetails,l=g().theme;return Object(p.jsxs)(f.a,{style:V(l).container,children:[Object(p.jsx)(u.a,{style:V(l).title,children:t?"Edit todo":"Add new todo"}),t?Object(p.jsxs)(f.a,{children:[Object(p.jsxs)(f.a,{children:[Object(p.jsx)(u.a,{style:[C().fontBold,V(l).inputLabel],children:"Id"}),Object(p.jsx)(z.a,{style:[C().font,V(l).input,V(l).inputDisabled],value:t.id,editable:!1})]}),Object(p.jsxs)(f.a,{children:[Object(p.jsx)(u.a,{style:[C().fontBold,V(l).inputLabel],children:"Title"}),Object(p.jsx)(z.a,{style:[C().font,V(l).input],placeholder:t?t.title:"Title",placeholderTextColor:"gray",onChangeText:function(e){return o(e)},value:n,autoFocus:!0})]}),Object(p.jsxs)(f.a,{style:V(l).switchContainer,children:[Object(p.jsx)(u.a,{style:[C().font,V(l).switchText],children:"Show Details"}),Object(p.jsx)(d.a,{style:V(l).switch,thumbColor:l===r.DARK?"#00ffbb":"rebeccapurple",trackColor:{false:"#dddddd",true:l===r.DARK?"#03dac6":"#8c53c6"},ios_backgroundColor:l===r.DARK?"#dddddd":"transparent",value:c,onValueChange:i})]}),c&&Object(p.jsxs)(f.a,{children:[Object(p.jsxs)(f.a,{children:[Object(p.jsx)(u.a,{style:[C().fontBold,V(l).inputLabel],children:"Version"}),Object(p.jsx)(z.a,{style:[C().font,V(l).input,V(l).inputDisabled],value:t.version.toString(),editable:!1})]}),Object(p.jsxs)(f.a,{children:[Object(p.jsx)(u.a,{style:[C().fontBold,V(l).inputLabel],children:"Created At"}),Object(p.jsx)(z.a,{style:[C().font,V(l).input,V(l).inputDisabled],value:new Date(t.createdAt).toLocaleString(),editable:!1})]}),Object(p.jsxs)(f.a,{children:[Object(p.jsx)(u.a,{style:[C().fontBold,V(l).inputLabel],children:"Updated At"}),Object(p.jsx)(z.a,{style:[C().font,V(l).input,V(l).inputDisabled],value:t.updatedAt?new Date(null==t?void 0:t.updatedAt).toLocaleString():"N/A",editable:!1})]})]})]}):Object(p.jsx)(z.a,{style:V(l).input,placeholder:"Title",placeholderTextColor:"gray",onChangeText:function(e){return o(e)},value:n,autoFocus:!0}),Object(p.jsx)(s.a,{style:V(l).button,onPress:a,children:Object(p.jsx)(u.a,{style:V(l).buttonText,children:t?"Update":"Save"})})]})}var M,V=function(e){return l.a.create({container:{flex:1,padding:16,backgroundColor:e===r.DARK?"#000":"#f5f6f7"},title:{fontSize:24,color:e===r.DARK?"#f5f6f7":"#18191a"},input:{padding:16,marginTop:16,fontSize:16,backgroundColor:e===r.DARK?"#242526":"#dddddd",borderRadius:4,borderBottomWidth:1,borderBottomColor:e===r.DARK?"#f5f6f7":"gray",color:e===r.DARK?"white":"#242526"},inputDisabled:{color:"gray"},inputLabel:{color:"gray",position:"absolute",top:32,right:16,zIndex:1},switchContainer:{marginTop:16,flexDirection:"row",alignItems:"center"},switch:{marginLeft:8,transform:[{scale:.7}]},switchText:{color:"gray"},button:{paddingVertical:8,paddingHorizontal:16,marginTop:24,borderWidth:1,flexDirection:"row",alignSelf:"flex-end",borderRadius:4,backgroundColor:e===r.DARK?"#03dac6":"rebeccapurple"},buttonText:{color:"#f5f6f7"}})},F=n(12),N=n.n(F),q=n(92),H=n(27),_=Object(H.a)("1234567890abcdef",10);function G(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function J(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?G(Object(n),!0).forEach((function(t){a()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):G(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}!function(e){e.ALL="all",e.COMPLETED="completed",e.ACTIVE="active"}(M||(M={}));var W={todos:[],text:"",filter:M.ALL,query:"",selected:null,modal:!1},Q=Object(q.b)({name:"todo",initialState:W,reducers:{addTodo:function(e,t){e.todos=[].concat(N()(e.todos),[{id:_(),title:t.payload.trim(),completed:!1,version:1,createdAt:Date.now()}]),e.text=""},updateTodo:function(e,t){var n=e.todos.find((function(e){return e.id===t.payload.id}));n&&(n.title=t.payload.title.trim(),n.version=n.version+1,n.updatedAt=Date.now()),e.text=""},deleteTodo:function(e,t){e.todos=e.todos.filter((function(e){return e.id!==t.payload}))},completeTodo:function(e,t){e.todos=e.todos.map((function(e){return e.id===t.payload?J(J({},e),{},{completed:!e.completed}):e}))},changeInput:function(e,t){e.text=t.payload},changeFilter:function(e,t){e.filter=t.payload},changeQuery:function(e,t){e.query=t.payload},changeSelected:function(e,t){e.selected=t.payload},initTodos:function(e,t){e.todos=t.payload},showModal:function(e){e.modal=!e.modal}}}),U=Q.actions,X=U.addTodo,Y=U.updateTodo,Z=U.deleteTodo,$=U.completeTodo,ee=U.changeInput,te=U.changeFilter,ne=U.changeQuery,re=U.changeSelected,oe=U.initTodos,ae=U.showModal,ce=Q.reducer,ie=n(74),se=function(){return Object(ie.b)()},le=ie.c;function de(){var e=Object(E.k)(),t=se(),n=le((function(e){return e.todo})).text;return Object(p.jsx)(f.a,{style:{flex:1},children:Object(p.jsx)(B,{value:n,onChangeText:function(e){return t(ee(e))},onPress:function(){n&&t(X(n)),e.navigate(I,{})}})})}var ue=n(95),fe=n(167);function be(e){var t=e.handleDeleteOnPress,n=e.handleEditOnPress,o=e.item,a=e.handleCheckboxOnChange,c=g().theme;return Object(p.jsxs)(f.a,{style:je(c).container,children:[Object(p.jsx)(fe.a,{value:o.completed,onValueChange:a,color:c===r.DARK?"#03dac6":"rebeccapurple"}),Object(p.jsx)(u.a,{style:[C().font,je(c).text,o.completed&&je(c).completed],numberOfLines:2,children:o.title}),Object(p.jsxs)(f.a,{style:je(c).buttonsContainer,children:[Object(p.jsx)(s.a,{onPress:function(){return n(o.id)},children:Object(p.jsx)(w.a,{name:"edit",size:16,color:c===r.DARK?"#f5f6f7":"#18191a",style:je(c).button})}),Object(p.jsx)(s.a,{onPress:t,children:Object(p.jsx)(w.a,{name:"delete",size:16,color:c===r.DARK?"#f5f6f7":"#18191a"})})]})]})}var je=function(e){return l.a.create({container:{flexDirection:"row",alignItems:"center",backgroundColor:e===r.DARK?"#242526":"white",marginBottom:8,padding:16,borderRadius:4,shadowColor:e===r.DARK?"white":"#000",shadowOffset:{width:0,height:2},shadowOpacity:.1,shadowRadius:4,elevation:6},text:{flex:1,marginLeft:16,fontSize:16,color:e===r.DARK?"#f5f6f7":"#18191a"},completed:{color:"gray",textDecorationStyle:"solid",textDecorationLine:"line-through"},buttonsContainer:{flexDirection:"row"},button:{marginRight:16}})};function he(e){var t=e.todos,n=e.handleDeleteOnPress,r=e.handleCheckboxOnChange,o=Object(E.k)();return Object(p.jsx)(f.a,{style:pe.container,children:Object(p.jsx)(ue.a,{data:t,renderItem:function(e){var t=e.item;return Object(p.jsx)(be,{item:t,handleEditOnPress:function(e){return o.navigate(S,{todoId:e})},handleDeleteOnPress:function(){return n(t)},handleCheckboxOnChange:function(){return r(t)}})},ListEmptyComponent:Object(p.jsx)(u.a,{style:pe.text,children:"No Todos."})})})}var pe=l.a.create({container:{flex:1},text:{marginTop:24,textAlign:"center",fontSize:16,color:"darkgray"}}),xe=n(87),Oe=n(106),ge=function(e){return R.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,R.a.awrap(Oe.a.setItem("mytodoapp",e));case 3:t.next=8;break;case 5:t.prev=5,t.t0=t.catch(0),console.warn(t.t0);case 8:case"end":return t.stop()}}),null,null,[[0,5]],Promise)},me=function(){var e;return R.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,R.a.awrap(Oe.a.getItem("mytodoapp"));case 3:return e=t.sent,t.abrupt("return",null!==e?JSON.parse(e):null);case 7:t.prev=7,t.t0=t.catch(0),console.warn(t.t0);case 10:case"end":return t.stop()}}),null,null,[[0,7]],Promise)},ye=n(166);function ve(e){var t=e.selected,n=e.visible,r=e.onRequestClose,o=e.handleCancleOnpress,a=e.handleConfirmOnPress,c=g().theme;return Object(p.jsx)(f.a,{children:Object(p.jsx)(ye.a,{testID:"modal",visible:n,transparent:!0,onRequestClose:r,children:Object(p.jsx)(f.a,{style:we(c).container,children:Object(p.jsxs)(f.a,{style:we(c).content,children:[Object(p.jsx)(u.a,{style:we(c).title,children:"Do you want to delete this todo?"}),Object(p.jsx)(u.a,{style:we(c).text,children:'Delete "'+(null==t?void 0:t.title)+'"'}),Object(p.jsxs)(f.a,{style:we(c).buttonsContainer,children:[Object(p.jsx)(s.a,{onPress:o,children:Object(p.jsx)(u.a,{style:we(c).button,children:"CANCEL"})}),Object(p.jsx)(s.a,{onPress:a,children:Object(p.jsx)(u.a,{style:we(c).button,children:"CONFIRM"})})]})]})})})})}var we=function(e){return l.a.create({container:{flex:1,justifyContent:"center",alignItems:"center",backgroundColor:"rgba(56, 56, 56, 0.5)"},content:{padding:16,width:300,height:200,backgroundColor:e===r.DARK?"#383838":"white",borderRadius:4},title:{fontSize:20,color:e===r.DARK?"white":"#18191a"},text:{marginTop:24,flex:1,fontSize:16,color:e===r.DARK?"white":"#18191a"},buttonsContainer:{flexDirection:"row",alignItems:"flex-end",justifyContent:"flex-end"},button:{marginLeft:16,color:e===r.DARK?"#03dac6":"rebeccapurple"}})},Ce=n(153);function De(e){switch(e){case M.ALL:return"filter";case M.COMPLETED:return"checksquareo";case M.ACTIVE:return"exclamationcircleo"}}function Ae(e){var t=e.filter,n=e.handleFilterOnPress,r=g().theme;return Object(p.jsx)(f.a,{style:Te({theme:r}).container,children:[M.ALL,M.COMPLETED,M.ACTIVE].map((function(e){var o=t===e;return Object(p.jsxs)(Ce.a,{style:[Te({active:o,theme:r}).filterItem,Te({active:o,theme:r}).filterItemActive],onPress:function(){return n(e)},children:[Object(p.jsx)(w.a,{name:De(e),size:16,color:o?"#f5f6f7":"gray"}),Object(p.jsx)(u.a,{style:[C(r).font,Te({active:o,theme:r}).filterItemText],children:e})]},e)}))})}var Te=function(e){var t=e.active,n=e.theme;return l.a.create({container:{flexDirection:"row",justifyContent:"space-around"},filterItem:{flexDirection:"row",alignItems:"center"},filterItemActive:{borderRadius:50,paddingVertical:2,paddingHorizontal:16,backgroundColor:t&&n===r.LIGHT?"rebeccapurple":t&&n===r.DARK?"#03dac6":"transparent"},filterItemText:{paddingLeft:2,textTransform:"capitalize",color:t?"#f5f6f7":"gray"}})};function Re(e,t){return e.filter((function(e){return e.title.toLowerCase().includes(t.toLowerCase())}))}function Pe(e){var t=e.value,n=e.onChangeText,r=e.onPress,o=g().theme;return Object(p.jsxs)(f.a,{style:ke(o).container,children:[Object(p.jsx)(z.a,{style:[C().font,ke(o).input],value:t,placeholder:"Search",placeholderTextColor:"gray",onChangeText:n,onSubmitEditing:r}),Object(p.jsx)(s.a,{style:ke(o).button,onPress:r,children:Object(p.jsx)(w.a,{name:"search1",size:16,color:"gray"})})]})}var ke=function(e){return l.a.create({container:{marginVertical:16,flexDirection:"row"},input:{flex:1,padding:16,paddingLeft:40,borderWidth:1,borderColor:e===r.DARK?"#f5f6f7":"gray",borderRadius:4,fontSize:16,backgroundColor:e===r.DARK?"#242526":"white",color:e===r.DARK?"#f5f6f7":"black"},button:{padding:8,position:"absolute",left:8,top:0,bottom:0,justifyContent:"center"}})};function Le(e){var t=e.handleAddTodoOnPress,n=g().theme;return Object(p.jsx)(s.a,{style:Ie(n).container,onPress:t,testID:"add-button",children:Object(p.jsx)(w.a,{name:"plus",size:32,color:"#f5f6f7"})})}var Ie=function(e){return l.a.create({container:{position:"absolute",bottom:16,right:16,borderRadius:50,padding:8,backgroundColor:e===r.DARK?"#03dac6":"rebeccapurple"}})};function Ke(){var e=se(),t=g().theme,n=le((function(e){return e.todo})),r=n.todos,o=n.filter,a=n.query,c=n.selected,i=n.modal,s=Object(E.k)();Object(h.useEffect)((function(){!function(){var t;R.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,R.a.awrap(me());case 3:(t=n.sent)&&e(oe(t)),n.next=10;break;case 7:n.prev=7,n.t0=n.catch(0),console.warn(n.t0);case 10:case"end":return n.stop()}}),null,null,[[0,7]],Promise)}()}),[]),Object(h.useEffect)((function(){R.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,R.a.awrap(ge(JSON.stringify(r)));case 3:e.next=8;break;case 5:e.prev=5,e.t0=e.catch(0),console.warn(e.t0);case 8:case"end":return e.stop()}}),null,null,[[0,5]],Promise)}),[r]);var l=Object(h.useMemo)((function(){return function(e,t,n){switch(t){case M.ALL:return n?Re(e,n):e;case M.COMPLETED:var r=e.filter((function(e){return!0===e.completed}));return n?Re(r,n):r;case M.ACTIVE:var o=e.filter((function(e){return!1===e.completed}));return n?Re(o,n):o}}(r,o,a)}),[r,o,a]);return Object(p.jsxs)(f.a,{style:Se(t).container,children:[Object(p.jsx)(ve,{selected:c,visible:i,onRequestClose:function(){return e(ae())},handleCancleOnpress:function(){return e(ae())},handleConfirmOnPress:function(){c&&e(Z(c.id)),e(ae())}}),Object(p.jsx)(Ae,{filter:o,handleFilterOnPress:function(t){e(te(t))}}),Object(p.jsx)(Pe,{value:a,onChangeText:function(t){e(ne(t))},onPress:function(){e(ne(a)),xe.a.dismiss()}}),Object(p.jsx)(he,{todos:l,handleDeleteOnPress:function(t){return function(t){e(ae()),e(re(t))}(t)},handleCheckboxOnChange:function(t){return e($(t.id))}}),Object(p.jsx)(Le,{handleAddTodoOnPress:function(){s.navigate(K,{})}})]})}var Se=function(e){return l.a.create({container:{flex:1,padding:16,backgroundColor:e===r.DARK?"#000":"#f5f6f7"}})},Ee=n(168);function ze(e){var t=e.route,n=Object(h.useState)(!1),r=j()(n,2),o=r[0],a=r[1],c=Object(E.k)(),i=se(),s=t.params.todoId,l=le((function(e){return e.todo})),d=l.todos,u=l.text,b=d.filter((function(e){return e.id===s})),x=j()(b,1)[0];return Object(p.jsx)(f.a,{style:{flex:1},children:Object(p.jsx)(B,{todo:x,value:u,onChangeText:function(e){return i(ee(e))},onPress:function(){u&&i(Y({id:x.id,title:u})),c.navigate(I,{})},showDetails:o,setShowDetails:a})})}function Be(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}var Me=Object(i.a)();function Ve(){return function(){var e=Object(h.useState)(!1),t=j()(e,2),r=t[0],o=t[1];return Object(h.useEffect)((function(){R.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,R.a.awrap(P.b());case 3:return e.next=5,R.a.awrap(k.b({"Inter-Black":n(208),RobotoMono_400Regular:L.a,RobotoMono_700Bold:L.b}));case 5:setTimeout((function(){return R.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,R.a.awrap(P.a());case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),null,null,null,Promise)}),2e3),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.warn(e.t0);case 11:return e.prev=11,o(!0),e.finish(11);case 14:case"end":return e.stop()}}),null,null,[[0,8,11,14]],Promise)}),[]),r}()?Object(p.jsx)(c.a,{children:Object(p.jsxs)(Me.Navigator,{initialRouteName:I,screenOptions:{header:function(e){return Object(p.jsx)(D,function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Be(Object(n),!0).forEach((function(t){a()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Be(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},e))}},children:[Object(p.jsx)(Me.Screen,{name:I,component:Ke}),Object(p.jsx)(Me.Screen,{name:K,component:de}),Object(p.jsx)(Me.Screen,{name:S,component:ze})]})}):Object(p.jsx)(Ee.a,{})}var Fe=Object(q.a)({reducer:{todo:ce}});function Ne(){return Object(p.jsx)(ie.a,{store:Fe,children:Object(p.jsx)(O,{children:Object(p.jsx)(Ve,{})})})}},174:function(e,t,n){e.exports=n(233)},208:function(e,t,n){e.exports=n.p+"./fonts/Inter-Black.otf"}},[[174,1,2]]]);
//# sourceMappingURL=app.caea221d.chunk.js.map