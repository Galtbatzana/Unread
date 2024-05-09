(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3882],{6972:function(e,t,a){"use strict";a.d(t,{E:function(){return g}});var n=a(2322),i=a(2784),l=a(9097),s=a.n(l),r=a(2367),c=a(7037),o=a(9241),d=a(5598),u=a(1251),m=a(5416),h=a(7841),p=a(930),x=function(e){var t=e.items,a=(0,i.useState)(t),l=a[0],s=a[1],r=(0,i.useRef)(),c=(0,i.useRef)(),o=(0,i.useCallback)((function(e){null!==e&&(null===l||void 0===l?void 0:l.length)>0&&(c.current=e.firstChild,r.current=e,document.documentElement.style.setProperty("--animationDistance","".concat(0-c.current.offsetWidth,"px")),document.documentElement.style.setProperty("--animationDuration","".concat(Math.round(c.current.offsetWidth/60),"s")),r.current.classList.add("moving"))}),[l]),d=function(e){var t=e.shift();e.splice(e.length,0,t),s(e)};return(0,n.jsx)("div",{className:"ticker-wrapper",children:(0,n.jsx)("div",{className:"ticker-inner",ref:o,onAnimationEnd:function(){r.current.classList.remove("moving"),r.current.style.animation="none",r.current.offsetHeight,r.current.style.animation=null,d((0,p.Z)(l))},children:null===l||void 0===l?void 0:l.map((function(e,t){return(0,n.jsx)(_,{item:e},t)}))})})},_=function(e){var t=e.item;return(0,n.jsx)("div",{className:"ticker-element",children:t})},f=a(3125);function g(e){var t=e.battleId,a=(0,i.useState)(!1),l=a[0],r=a[1],u=(0,i.useState)([]),p=u[0],_=u[1];return(0,i.useEffect)((function(){r(!0),(0,c.V6)(t).then((function(e){r(!1),e.length&&e.unshift(e.pop()),_(e)}))}),[t]),(0,n.jsxs)(n.Fragment,{children:[l&&(0,n.jsx)(m.s,{onlyBorder:!0,padding:"0.5rem",children:(0,n.jsxs)(d.HStack,{gap:"0",justify:"center",children:[(0,n.jsx)(o.a,{height:"1em"})," ",(0,n.jsx)(h.x,{mono:!1,weight:500,children:"Loading activities"})]})}),!l&&p.length>0&&(0,n.jsx)(f.E.div,{initial:{opacity:0},animate:{opacity:1,transition:{delay:.3}},layout:!0,children:(0,n.jsx)(x,{items:p.map((function(e){return(0,n.jsx)("div",{className:"activity-item",children:(0,n.jsx)(j,{timeStamp:e.timestamp,profile:e.playerProfile,children:(0,n.jsxs)(h.x,{mono:!1,size:"0",weight:"500",appearance:"secondary",children:[(0,n.jsxs)(h.x,{mono:!1,size:"0",weight:"500",appearance:"primary",children:[(0,n.jsx)(s(),{href:"/player/".concat(e.playerProfile.username||e.playerProfile.id||e.playerProfile.uid),children:(0,n.jsx)("a",{className:"link link--no-underline",children:e.playerProfile.displayName})})," "]}),e.data.userId===e.data.previousUserId?"broke own record on":"set a new record on"," ",(0,n.jsx)(s(),{href:"/play/".concat(e.data.levelId),children:(0,n.jsxs)("a",{className:"link link--no-underline",children:["#",e.data.levelId]})})," ","with ",e.data.codeSize," chars (",e.data.codeSize-e.data.previousUserCodeSize,")."]})},e.id)})}))})})]})}var j=function(e){var t=e.profile,a=e.timeStamp,i=e.children;return(0,n.jsx)(m.s,{onlyBorder:!0,padding:"0.5rem 1rem 0.5rem 0.5rem",children:(0,n.jsxs)(d.HStack,{align:"center",gap:"0.5rem",children:[(0,n.jsx)(u.qE,{name:t.displayName,size:"24",url:t.avatar,username:t.username,userId:t.id||t.uid,useCdnUrl:!0}),(0,n.jsx)("span",{children:i}),(0,n.jsxs)(h.x,{mono:!1,size:"0",weight:"500",appearance:"tertiary",children:[(0,r.VG)(a)," ago"]})]})})}},419:function(e,t,a){"use strict";a.d(t,{a:function(){return o}});var n=a(2322),i=a(7500),l=a(2259),s=a.n(l),r=a(5598),c=a(9604);function o(e){var t=e.gameMode,a=e.minimal,l=void 0!==a&&a,o=e.onClose;return l?(0,n.jsx)("div",{className:"pill",children:t===i.BattleGameModes.FIRST_TO_MATCH?(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("span",{className:"pill__emoji",children:"\u23f0"})," Time Attack"]}):(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("span",{className:"pill__emoji",children:"\u26f3"})," Code Golf"]})}):(0,n.jsxs)("div",{className:"".concat(s().battleMode," ").concat(s().battleModeLarge),children:[t===i.BattleGameModes.FIRST_TO_MATCH?(0,n.jsxs)(r.HStack,{children:[(0,n.jsx)("p",{className:s().gameModeLabel,children:"\u23f0"}),(0,n.jsxs)(r.VStack,{gap:"0.25rem",align:"flex-start",children:["Time Attack",(0,n.jsx)("p",{className:s().gameModeLabelDesc,children:"Quickest to get 100% matches wins the game"})]})]}):(0,n.jsxs)(r.HStack,{children:[(0,n.jsx)("p",{className:s().gameModeLabel,children:"\u26f3"}),(0,n.jsxs)(r.VStack,{gap:"0.25rem",align:"flex-start",children:["Code Golf",(0,n.jsx)("p",{className:s().gameModeLabelDesc,children:"Shortest code with a 100% match gets the highest score"})]})]}),o&&(0,n.jsx)("a",{className:s().closeBtn,onClick:o,children:(0,n.jsx)(c.J,{name:"cross",marginRight:"0",size:"18"})})]})}},518:function(e,t,a){"use strict";a.d(t,{d:function(){return T}});var n=a(8788),i=a(2970),l=a(2322),s=a(2784),r=a(9097),c=a.n(r),o=a(7500),d=a(1551),u=a(3029),m=a(1251),h=(a(2220),a(7037)),p=(a(3290),a(1893),a(2367));var x=a(4221),_=a.n(x),f=a(5416),g=a(5598),j=a(419),v=a(7841),y=a(9376);function T(e){var t=e.battle,a=e.fullWidth,r=(0,o.getBattleStatus)(t),x=(0,s.useState)([]),y=x[0],T=x[1];return(0,s.useEffect)((function(){r===o.BattleStatuses.FINISHED?fetch("".concat(h.Ko,"/battleLeaderboard?battleId=").concat(t.id)).then(function(){var e=(0,n.Z)((function(e){var t;return(0,i.__generator)(this,(function(a){switch(a.label){case 0:return[4,e.json()];case 1:return t=a.sent(),T(t),[2]}}))}));return function(t){return e.apply(this,arguments)}}()):(0,h.uL)({battleId:t.id,numberOfPlayers:3,includePlayedCount:!1}).then((function(e){T(e)}))}),[t.id]),(0,l.jsx)(f.s,{fullWidth:a,children:(0,l.jsxs)(g.HStack,{gap:"3rem",align:"stretch",responsive:!0,children:[(0,l.jsx)("div",{className:_().BattleTile_info,children:(0,l.jsxs)(g.VStack,{gap:"1rem",align:"flex-start",justify:"space-between",fullHeight:!0,children:[(0,l.jsxs)(g.VStack,{gap:"1.25rem",align:"flex-start",children:[(0,l.jsxs)(g.HStack,{gap:"0.5rem",children:[(0,l.jsx)(u.k,{status:r}),(0,l.jsx)(j.a,{gameMode:t.gameMode,minimal:!0})]}),(0,l.jsx)(c(),{href:"/battle/".concat(t.id),children:(0,l.jsx)("a",{className:"link link--no-underline",children:(0,l.jsxs)(v.x,{size:2,weight:"600",mono:!1,appearance:"primary",children:["Battle #",t.id," - ",t.name]})})}),(0,l.jsx)(v.x,{mono:!1,weight:500,appearance:"secondary",size:1,letterSpacing:"0.3px",children:t.description}),(0,l.jsx)(m.Z0,{}),(0,l.jsxs)("div",{className:_().BattleTile_countdown,children:[r===o.BattleStatuses.FINISHED&&(0,l.jsx)("time",{dateTime:t.endDate,children:(0,l.jsxs)(v.x,{mono:!1,weight:500,appearance:"tertiary",size:1,letterSpacing:"0.3px",children:["Finished ",(0,p.VG)(t.endDate)," ago"]})}),r===o.BattleStatuses.UPCOMING&&(0,l.jsxs)(g.VStack,{gap:"0.5rem",align:"flex-start",children:[(0,l.jsx)(v.x,{mono:!1,weight:500,appearance:"tertiary",size:1,letterSpacing:"0.3px",children:"Starts in"}),(0,l.jsx)(d.W,{date:t.startDate,suffix:"",showUnits:!0,size:.1,showEmoji:!1,minimal:!0})]}),r===o.BattleStatuses.ONGOING&&(0,l.jsxs)(g.HStack,{gap:"0.35rem",align:"flex-start",children:[(0,l.jsx)(v.x,{mono:!1,weight:500,appearance:"tertiary",size:1,letterSpacing:"0.3px",children:"Ends in"}),(0,l.jsx)(d.W,{date:t.endDate,suffix:"",showUnits:!0,size:.1,showEmoji:!1,minimal:!0})]})]})]}),(0,l.jsxs)(g.HStack,{gap:"0.5rem",align:"stretch",justify:"stretch",fullWidth:!0,wrap:!0,children:[(0,l.jsx)(c(),{href:"/leaderboard/battle/".concat(t.id),children:(0,l.jsx)("a",{className:"button",children:(0,l.jsxs)(g.HStack,{gap:"8px",children:[(0,l.jsx)("span",{children:"Leaders"}),(0,l.jsx)("div",{className:"user-stack",style:{"--avatar-size":"24px","--stroke-width":"3px","--avatar-spacing":"-6px",pointerEvents:"none"},children:(0,l.jsx)(g.HStack,{gap:"0",children:y.map((function(e,t){return(0,l.jsx)(m.xu,{className:"user-stack__image-container",children:(0,l.jsx)(m.F$,{size:"24",userId:e.id,url:e.playerProfile.avatar,username:e.playerProfile.username,useCdnUrl:!0})},e.id)}))})})]})})}),(0,l.jsx)(c(),{href:"/battle/".concat(t.id),children:(0,l.jsx)("a",{className:"button button--primary",style:{flexGrow:1},children:"Play"})})]})]})}),(0,l.jsx)("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(22%, 1fr))",gridTemplateRows:"max-content",gap:"1rem",width:"100%"},children:t.levelIds.map((function(e,a){return 0===e?(0,l.jsx)("div",{className:_().BattleTile_target,children:(0,l.jsx)(B,{battle:t,levelId:e})},a):(0,l.jsx)(c(),{href:"/play/".concat(e),children:(0,l.jsx)("a",{className:_().BattleTile_target,children:(0,l.jsx)(B,{battle:t,levelId:e})})},a)}))})]})})}var B=function(e){var t=e.battle,a=e.levelId;return(0,l.jsxs)(l.Fragment,{children:[0===a?(0,l.jsx)(y.d,{opacity:"0.01",children:(0,l.jsx)("img",{src:"/images/lock.svg",height:"50",style:{opacity:.75}})}):(0,l.jsx)("img",{loading:"lazy",src:"/targets/".concat(a,".png"),srcSet:"/targets/".concat(a,"@2x.png 2x"),alt:"Target #".concat(a),width:"400",height:"300"}),(0,l.jsxs)("div",{className:"target-top-info ".concat(_().BattleTile_target_info),children:[a?(0,l.jsxs)("p",{className:"target-top-info__pill",children:["#",a]}):null,t.openLevelIds&&t.openLevelIds.includes(a)?(0,l.jsx)("p",{className:"target-top-info__pill",children:(0,l.jsx)("img",{alt:"",src:"/images/open-book.svg"})}):null]})]})}},6833:function(e,t,a){"use strict";a.d(t,{w:function(){return f}});var n=a(865),i=a(6670),l=a(2322),s=a(2784),r=a(5632),c=a(2220),o=a(384),d=a(1251),u=a(9604),m=a(7037),h=a(1255),p=a(1893),x=a(7841),_=a(5598),f=function(e){var t=e.isOpen,a=e.onRequestClose,f=((0,r.useRouter)(),(0,h.p)("An awesome battle")),g=(0,s.useState)(!1),j=g[0],v=g[1],y=(0,p.a)();return(0,l.jsxs)(o.u,{isOpen:t,size:"small",extraClasses:"modal--text-center",children:[(0,l.jsx)("div",{style:{margin:"1rem 0 0.2rem"},children:(0,l.jsx)(u.J,{name:"battle",size:"48"})}),(0,l.jsx)("h2",{style:{marginBottom:"2rem"},children:"Host a Battle"}),(0,l.jsxs)(_.VStack,{gap:"0.5rem",children:[(0,l.jsxs)(x.x,{tag:"p",size:1,lineHeight:"1.6",children:["Hosting a conference, meetup, company engineering event or just want to have some nerd fun?"," ",(0,l.jsx)("a",{href:"/blog/introducing-custom-battles",className:"link",target:"_blank",children:"Read more about Custom Battles"}),"."]}),(0,l.jsx)(x.x,{tag:"p",size:1,lineHeight:"1.6",children:"Create your own battles with custom targets, leaderboards, and, duration. Enter a nice name for your battle to proceed:"})]}),(0,l.jsx)(d.xu,{style:{marginTop:"2.5rem"},children:(0,l.jsxs)("form",{onSubmit:function(e){e.preventDefault(),v(!0),(0,m.pn)({userId:y.uid,battle:{name:f.value,duration:30},levels:[]}).then((function(e){v(!1),location.href="/battle/create/".concat(e)}))},children:[(0,l.jsx)(d.II,(0,i.Z)((0,n.Z)({label:"Battle name"},f.input),{required:!0})),(0,l.jsxs)(d.hE,{center:!0,children:[(0,l.jsx)(c.z,{onClick:a,children:"Cancel"}),(0,l.jsx)(c.z,{type:"submit",isLoading:j,primary:!0,children:"Configure Battle"})]})]})})]})}},1453:function(e,t,a){"use strict";a.d(t,{M:function(){return s}});var n=a(2322),i=a(6746),l=a(5598);function s(e){var t=e.children,a=e.sticky,s=e.keyCombo,r=e.extraContent,c=e.meta;s&&s.split("+");return(0,n.jsxs)("div",{className:"item__header  ".concat(a?"item__header--sticky":""),children:[(0,n.jsxs)(l.HStack,{gap:"0.5rem",children:[(0,n.jsx)("h3",{className:"header__title",children:t}),r,s?(0,n.jsx)(i.M,{value:s}):null]}),(0,n.jsx)("div",{className:"header__extra-info",children:c})]})}},6746:function(e,t,a){"use strict";a.d(t,{M:function(){return o}});var n=a(6383),i=a(930),l=a(2322),s=a(2784),r=a(5598);function c(e){return"Control"===e?"ctrl":e.toLowerCase()}var o=function(e){var t=e.value,a=t&&t.split("+"),o=(0,n.Z)(s.useState([]),2),d=o[0],u=o[1];(0,s.useEffect)((function(){var e=function(e){var t=c(e.key);a.includes(t)&&!d.includes(t)&&(d.push(t),u((0,i.Z)(d)))},t=function(e){var t=c(e.key);a.includes(t)&&d.includes(t)&&(d.splice(d.indexOf(t),1),u((0,i.Z)(d)))};return document.body.addEventListener("keydown",e,{capture:!0}),document.body.addEventListener("keyup",t,{capture:!0}),function(){removeEventListener("keydown",e),removeEventListener("keyup",t)}}),[]);d.length;return(0,l.jsx)(r.HStack,{gap:"0.25rem",children:a&&a.map((function(e,t){return(0,l.jsx)("p",{className:"pill  pill--key ".concat(d.includes(e)?"pill--key-pressed":""),children:e},t)}))})}},384:function(e,t,a){"use strict";a.d(t,{u:function(){return x}});var n=a(865),i=a(6670),l=a(6297),s=a(2322),r=(a(2784),a(3140)),c=a(3125),o=a(3517),d=a(5239),u=a(1453),m=(0,c.E)(r.cZ),h=(0,c.E)(r.t9),p={type:"spring",damping:9,stiffness:120,duration:500};function x(e){var t=e.isOpen,a=e.onRequestClose,r=e.size,c=void 0===r?"big":r,x=e.extraClasses,_=e.header,f=e.title,g=e.hideOverlay,j=e.children,v=(0,l.Z)(e,["isOpen","onRequestClose","size","extraClasses","header","title","hideOverlay","children"]),y=(0,o.J)();return(0,s.jsx)(d.M,{children:t?(0,s.jsx)(h,(0,i.Z)((0,n.Z)({initial:{opacity:0},animate:{opacity:1,transition:{duration:.3}},exit:{opacity:0,transition:{duration:.2}},style:{background:g?"transparent":null},isOpen:t,onDismiss:a},v),{children:(0,s.jsxs)(m,{className:"modal--".concat(c," ").concat(x),transition:y?{duration:500}:p,initial:{y:y?0:-100},animate:{y:0},exit:{opacity:0,y:y?0:-200,transition:{duration:.2}},"aria-label":f,children:[_?(0,s.jsx)(u.M,{children:_}):null,(0,s.jsx)("div",{style:{padding:"2rem"},children:j})]})})):null})}},1255:function(e,t,a){"use strict";a.d(t,{p:function(){return i}});var n=a(2784);function i(e){var t=(0,n.useState)(e),a=t[0],i=t[1];return{input:{value:a,onChange:function(e,t){if(void 0!==t)return i(t);i("checkbox"===e.target.type?"on"===e.target.value:e.target.value)}},value:a,setValue:i}}},2259:function(e){e.exports={battleMode:"BattleModeInfoPill_battleMode___alHa",battleModeLarge:"BattleModeInfoPill_battleModeLarge__yo3LS",gameModeLabel:"BattleModeInfoPill_gameModeLabel__m7soO",gameModeLabelDesc:"BattleModeInfoPill_gameModeLabelDesc__INih3",closeBtn:"BattleModeInfoPill_closeBtn__f0ikT"}},4221:function(e){e.exports={BattleTile:"BattleTile_BattleTile__Wph4_",BattleTile___ongoing:"BattleTile_BattleTile___ongoing__Ale77",BattleTile___upcoming:"BattleTile_BattleTile___upcoming__DavxF",BattleTile_content:"BattleTile_BattleTile_content___H6wq",BattleTile_leaders:"BattleTile_BattleTile_leaders__CJ_1M",BattleTile_info:"BattleTile_BattleTile_info__6_GSN",BattleTile_countdown:"BattleTile_BattleTile_countdown__5GEcZ",BattleTile_contentTimeAttack:"BattleTile_BattleTile_contentTimeAttack__q8b60",BattleTile_infoNoBorder:"BattleTile_BattleTile_infoNoBorder__duyWY",BattleTile_targets:"BattleTile_BattleTile_targets__Sen5k",BattleTile_battles:"BattleTile_BattleTile_battles__shwoT",BattleTile_target:"BattleTile_BattleTile_target__cFrfn",BattleTile_target_info:"BattleTile_BattleTile_target_info__8V_5X",BattleTile_TimeAttackTile:"BattleTile_BattleTile_TimeAttackTile__OOj7c",BattleTile_TimeAttackTile__Title:"BattleTile_BattleTile_TimeAttackTile__Title__0UWma",BattleTile_TimeAttackTile__Body:"BattleTile_BattleTile_TimeAttackTile__Body__drgcT"}}}]);
//# sourceMappingURL=3882-10e31979980544f7.js.map