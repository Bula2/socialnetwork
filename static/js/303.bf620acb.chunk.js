"use strict";(self.webpackChunksocialnetwork=self.webpackChunksocialnetwork||[]).push([[303],{5303:function(e,a,s){s.r(a),s.d(a,{default:function(){return N}});var i=s(4386),n="Dialogs_dialogs__x2EQN",t="Dialogs_dialogs_items__3YCBp",r="Dialogs_item_head__-ETkI",d="Dialogs_messages__bW-Vj",o="Dialogs_main_dialog__A876p",l="Dialogs_message_input__Wg0VT",c=(s(2791),{item:"DialogItem_item__eRrB1",active:"DialogItem_active__fK+Es"}),m=s(3504),u=(s(2144),s(184)),_=function(e){var a="/dialogs/"+e.id;return(0,u.jsx)("div",{className:c.dialog_item,children:(0,u.jsx)("div",{className:c.item+" animate__animated animate__fadeInUp",children:(0,u.jsx)(m.OL,{className:function(e){return e.isActive?c.active:""},to:a,children:e.name})})})},g="Messages_message__7D-qW",h=function(e){return(0,u.jsx)("div",{children:(0,u.jsxs)("div",{className:g,children:[(0,u.jsx)(m.OL,{to:"/friends",title:e.message.name,children:(0,u.jsx)("img",{src:e.message.avatar,alt:e.name})}),e.message.message]})})},f=s(6139),j=s(704),x=s(5304),v=(0,j.Z)({form:"dialogAddMesForm"})((function(e){return(0,u.jsxs)("form",{onSubmit:e.handleSubmit,children:[(0,u.jsx)(f.Z,{component:"textarea",name:"newMes",title:"\u041e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c",placeholder:"\u0421\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0435",validate:[x.C]}),(0,u.jsx)("button",{children:"\u041e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c"})]})})),p=function(e){var a=e.dialogsPage.dialogsData.map((function(e){return(0,u.jsx)(_,{name:e.name,id:e.id},e.id)})),s=e.dialogsPage.messagesData.map((function(e){return(0,u.jsx)(h,{message:e},e.id)}));return(0,u.jsxs)("div",{className:n+" animate__animated animate__fadeIn",children:[(0,u.jsxs)("div",{className:t,children:[(0,u.jsx)("div",{className:r,children:(0,u.jsx)("h3",{children:"\u041c\u043e\u0438 \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u044f"})}),a]}),(0,u.jsxs)("div",{className:d,children:[(0,u.jsx)("div",{className:o,children:s}),(0,u.jsx)("div",{className:l,children:(0,u.jsx)(v,{onSubmit:function(a){e.addMes(a.newMes)}})})]})]})},D=s(8687),N=(s(8834),(0,s(7781).qC)((0,D.$j)((function(e){return{dialogsPage:e.dialogsPage}}),(function(e){return{addMes:function(a){e((0,i.w)(a))}}})))(p))},8834:function(e,a,s){s.d(a,{S:function(){return _}});var i=s(1413),n=s(5671),t=s(3144),r=s(136),d=s(2882),o=s(2791),l=s(6871),c=s(8687),m=s(184),u=function(e){return{isAuth:e.auth.isAuth}},_=function(e){var a=function(a){(0,r.Z)(o,a);var s=(0,d.Z)(o);function o(){return(0,n.Z)(this,o),s.apply(this,arguments)}return(0,t.Z)(o,[{key:"render",value:function(){return this.props.isAuth?(0,m.jsx)(e,(0,i.Z)({},this.props)):(0,m.jsx)(l.Fg,{to:"/login"})}}]),o}(o.Component);return(0,c.$j)(u)(a)}}}]);
//# sourceMappingURL=303.bf620acb.chunk.js.map