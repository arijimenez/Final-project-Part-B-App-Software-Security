/*! For license information please see settings-vue-settings-personal-security.js.LICENSE.txt */
(()=>{"use strict";var e,n,o,i={12868:(e,n,o)=>{var i=o(79954),a=o(20144),s=o(2324),r=o(4820),p=o(10128),d=(o(65509),o(79753)),l=o(15961);const c={ie:/(?:MSIE|Trident|Trident\/7.0; rv)[ :](\d+)/,edge:/^Mozilla\/5\.0 \([^)]+\) AppleWebKit\/[0-9.]+ \(KHTML, like Gecko\) Chrome\/[0-9.]+ (?:Mobile Safari|Safari)\/[0-9.]+ Edge\/[0-9.]+$/,firefox:/^Mozilla\/5\.0 \([^)]*(Windows|OS X|Linux)[^)]+\) Gecko\/[0-9.]+ Firefox\/(\d+)(?:\.\d)?$/,chrome:/^Mozilla\/5\.0 \([^)]*(Windows|OS X|Linux)[^)]+\) AppleWebKit\/[0-9.]+ \(KHTML, like Gecko\) Chrome\/(\d+)[0-9.]+ (?:Mobile Safari|Safari)\/[0-9.]+$/,safari:/^Mozilla\/5\.0 \([^)]*(Windows|OS X)[^)]+\) AppleWebKit\/[0-9.]+ \(KHTML, like Gecko\)(?: Version\/([0-9]+)[0-9.]+)? Safari\/[0-9.A-Z]+$/,androidChrome:/Android.*(?:; (.*) Build\/).*Chrome\/(\d+)[0-9.]+/,iphone:/ *CPU +iPhone +OS +([0-9]+)_(?:[0-9_])+ +like +Mac +OS +X */,ipad:/\(iPad; *CPU +OS +([0-9]+)_(?:[0-9_])+ +like +Mac +OS +X */,iosClient:/^Mozilla\/5\.0 \(iOS\) (?:ownCloud|Nextcloud)-iOS.*$/,androidClient:/^Mozilla\/5\.0 \(Android\) (?:ownCloud|Nextcloud)-android.*$/,iosTalkClient:/^Mozilla\/5\.0 \(iOS\) Nextcloud-Talk.*$/,androidTalkClient:/^Mozilla\/5\.0 \(Android\) Nextcloud-Talk.*$/,davx5:/DAV(?:droid|x5)\/([^ ]+)/,webPirate:/(Sailfish).*WebPirate\/(\d+)/,sailfishBrowser:/(Sailfish).*SailfishBrowser\/(\d+)/,neon:/Neon \d+\.\d+\.\d+\+\d+/},A={ie:t("setting","Internet Explorer"),edge:t("setting","Edge"),firefox:t("setting","Firefox"),chrome:t("setting","Google Chrome"),safari:t("setting","Safari"),androidChrome:t("setting","Google Chrome for Android"),iphone:t("setting","iPhone"),ipad:t("setting","iPad"),iosClient:t("setting","{productName} iOS app",{productName:window.oc_defaults.productName}),androidClient:t("setting","{productName} Android app",{productName:window.oc_defaults.productName}),iosTalkClient:t("setting","{productName} Talk for iOS",{productName:window.oc_defaults.productName}),androidTalkClient:t("setting","{productName} Talk for Android",{productName:window.oc_defaults.productName}),davx5:"DAVx5",webPirate:"WebPirate",sailfishBrowser:"SailfishBrowser",neon:"Neon"},u={ie:"icon-desktop",edge:"icon-desktop",firefox:"icon-desktop",chrome:"icon-desktop",safari:"icon-desktop",androidChrome:"icon-phone",iphone:"icon-phone",ipad:"icon-tablet",iosClient:"icon-phone",androidClient:"icon-phone",iosTalkClient:"icon-phone",androidTalkClient:"icon-phone",davx5:"icon-phone",webPirate:"icon-link",sailfishBrowser:"icon-link"},h={name:"AuthToken",components:{NcActions:l.O3,NcActionButton:l.Js,NcActionCheckbox:l.Bt},props:{token:{type:Object,required:!0}},data(){return{showMore:this.token.canScope||this.token.canDelete,renaming:!1,newName:"",oldName:"",actionOpen:!1}},computed:{lastActivityRelative(){return OC.Util.relativeModifiedDate(1e3*this.token.lastActivity)},lastActivity(){return OC.Util.formatDate(1e3*this.token.lastActivity,"LLL")},iconName(){const e=this.token.name.match(/Mozilla\/5\.0 \((\w+)\) (?:mirall|csyncoC)\/(\d+\.\d+\.\d+)/);let n="";e&&(this.token.name=t("settings","Sync client - {os}",{os:e[1],version:e[2]}),n="icon-desktop");const o=this.token.name;let i=this.token.name;for(const t in c){const e=o.match(c[t]);e&&(i=e[2]&&e[1]?A[t]+" "+e[2]+" - "+e[1]:e[1]?A[t]+" "+e[1]:A[t],n=u[t])}return this.token.current&&(i=t("settings","This session")),{icon:n,name:i}},wiping(){return 2===this.token.type}},methods:{startRename(){this.actionOpen=!1,this.oldName=this.token.name,this.newName=this.token.name,this.renaming=!0,this.$nextTick((()=>{this.$refs.input.select()}))},cancelRename(){this.renaming=!1,this.$emit("rename",this.token,this.oldName)},revoke(){this.actionOpen=!1,this.$emit("delete",this.token)},rename(){this.renaming=!1,this.$emit("rename",this.token,this.newName)},wipe(){this.actionOpen=!1,this.$emit("wipe",this.token)}}};var g=o(93379),m=o.n(g),v=o(7795),C=o.n(v),k=o(90569),f=o.n(k),w=o(3565),y=o.n(w),b=o(19216),x=o.n(b),_=o(44589),T=o.n(_),N=o(12283),B={};B.styleTagTransform=T(),B.setAttributes=y(),B.insert=f().bind(null,"head"),B.domAPI=C(),B.insertStyleElement=x(),m()(N.Z,B),N.Z&&N.Z.locals&&N.Z.locals;var O=o(51900);const S={name:"AuthTokenList",components:{AuthToken:(0,O.Z)(h,(function(){var t=this,e=t._self._c;return e("tr",{class:t.wiping,attrs:{"data-id":t.token.id}},[e("td",{staticClass:"client"},[e("div",{class:t.iconName.icon})]),t._v(" "),e("td",{staticClass:"token-name"},[t.token.canRename&&t.renaming?e("input",{directives:[{name:"model",rawName:"v-model",value:t.newName,expression:"newName"}],ref:"input",attrs:{type:"text"},domProps:{value:t.newName},on:{keyup:[function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.rename.apply(null,arguments)},function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"esc",27,e.key,["Esc","Escape"])?null:t.cancelRename.apply(null,arguments)}],change:t.rename,input:function(e){e.target.composing||(t.newName=e.target.value)}}}):e("span",[t._v(t._s(t.iconName.name))]),t._v(" "),t.wiping?e("span",{staticClass:"wiping-warning"},[t._v("("+t._s(t.t("settings","Marked for remote wipe"))+")")]):t._e()]),t._v(" "),e("td",[e("span",{staticClass:"last-activity",attrs:{title:t.lastActivity}},[t._v(t._s(t.lastActivityRelative))])]),t._v(" "),e("td",{staticClass:"more"},[t.token.current?t._e():e("NcActions",{attrs:{title:t.t("settings","Device settings"),"aria-label":t.t("settings","Device settings"),open:t.actionOpen},on:{"update:open":function(e){t.actionOpen=e}}},[1===t.token.type?e("NcActionCheckbox",{attrs:{checked:t.token.scope.filesystem},on:{change:function(e){return e.stopPropagation(),e.preventDefault(),t.$emit("toggle-scope",t.token,"filesystem",!t.token.scope.filesystem)}}},[t._v("\n\t\t\t\t"+t._s(t.t("settings","Allow filesystem access"))+"\n\t\t\t")]):t._e(),t._v(" "),t.token.canRename?e("NcActionButton",{attrs:{icon:"icon-rename"},on:{click:function(e){return e.stopPropagation(),e.preventDefault(),t.startRename.apply(null,arguments)}}},[t._v("\n\t\t\t\t"+t._s(t.t("settings","Rename"))+"\n\t\t\t")]):t._e(),t._v(" "),t.token.canDelete?[2!==t.token.type?[e("NcActionButton",{attrs:{icon:"icon-delete"},on:{click:function(e){return e.stopPropagation(),e.preventDefault(),t.revoke.apply(null,arguments)}}},[t._v("\n\t\t\t\t\t\t"+t._s(t.t("settings","Revoke"))+"\n\t\t\t\t\t")]),t._v(" "),e("NcActionButton",{attrs:{icon:"icon-delete"},on:{click:function(e){return e.stopPropagation(),e.preventDefault(),t.wipe.apply(null,arguments)}}},[t._v("\n\t\t\t\t\t\t"+t._s(t.t("settings","Wipe device"))+"\n\t\t\t\t\t")])]:2===t.token.type?e("NcActionButton",{attrs:{icon:"icon-delete",title:t.t("settings","Revoke")},on:{click:function(e){return e.stopPropagation(),e.preventDefault(),t.revoke.apply(null,arguments)}}},[t._v("\n\t\t\t\t\t"+t._s(t.t("settings","Revoking this token might prevent the wiping of your device if it has not started the wipe yet."))+"\n\t\t\t\t")]):t._e()]:t._e()],2)],1)])}),[],!1,null,"0f73a400",null).exports},props:{tokens:{type:Array,required:!0}},computed:{sortedTokens(){return this.tokens.slice().sort(((t,e)=>{const n=parseInt(t.lastActivity,10);return parseInt(e.lastActivity,10)-n}))}},methods:{toggleScope(t,e,n){this.$emit("toggle-scope",t,e,n)},rename(t,e){this.$emit("rename",t,e)},onDelete(t){this.$emit("delete",t)},onWipe(t){this.$emit("wipe",t)}}};var P=o(46533),D={};D.styleTagTransform=T(),D.setAttributes=y(),D.insert=f().bind(null,"head"),D.domAPI=C(),D.insertStyleElement=x(),m()(P.Z,D),P.Z&&P.Z.locals&&P.Z.locals;var E=o(71328),Z={};Z.styleTagTransform=T(),Z.setAttributes=y(),Z.insert=f().bind(null,"head"),Z.domAPI=C(),Z.insertStyleElement=x(),m()(E.Z,Z),E.Z&&E.Z.locals&&E.Z.locals;const R=(0,O.Z)(S,(function(){var t=this,e=t._self._c;return e("table",{attrs:{id:"app-tokens-table"}},[t.tokens.length?e("thead",[e("tr",[e("th"),t._v(" "),e("th",[t._v(t._s(t.t("settings","Device")))]),t._v(" "),e("th",[t._v(t._s(t.t("settings","Last activity")))]),t._v(" "),e("th")])]):t._e(),t._v(" "),e("tbody",{staticClass:"token-list"},t._l(t.sortedTokens,(function(n){return e("AuthToken",{key:n.id,attrs:{token:n},on:{"toggle-scope":t.toggleScope,rename:t.rename,delete:t.onDelete,wipe:t.onWipe}})})),1)])}),[],!1,null,"1474f25b",null).exports;var U=o(147),$=o.n(U),M=o(64024),G=o(10861),W=o.n(G),q=o(80419),L=o(85226),j=o(25108);const z={name:"AuthTokenSetupDialogue",components:{Check:q.default,ContentCopy:L.Z,NcButton:W(),QR:$()},props:{add:{type:Function,required:!0}},data:()=>({adding:!1,loading:!1,deviceName:"",appPassword:"",loginName:"",copied:!1,showQR:!1,qrUrl:""}),computed:{copyTooltipOptions(){return this.copied?t("settings","Copied!"):t("settings","Copy")}},methods:{selectInput(t){t.currentTarget.select()},submit(){(0,p.confirmPassword)().then((()=>(this.loading=!0,this.add(this.deviceName)))).then((t=>{this.adding=!0,this.loginName=t.loginName,this.appPassword=t.token;const e=window.location.protocol+"//"+window.location.host+(0,d.getRootUrl)();this.qrUrl="nc://login/user:".concat(t.loginName,"&password:").concat(t.token,"&server:").concat(e),this.$nextTick((()=>{this.$refs.appPassword.select()}))})).catch((e=>{j.error("could not create a new app password",e),OC.Notification.showTemporary(t("settings","Error while creating device token")),this.reset()}))},async copyPassword(){try{await navigator.clipboard.writeText(this.appPassword),this.copied=!0}catch(e){this.copied=!1,j.error(e),(0,M.x2)(t("settings","Could not copy app password. Please copy it manually."))}finally{setTimeout((()=>{this.copied=!1}),4e3)}},reset(){this.adding=!1,this.loading=!1,this.showQR=!1,this.qrUrl="",this.deviceName="",this.appPassword="",this.loginName=""}}};var I=o(30139),K={};K.styleTagTransform=T(),K.setAttributes=y(),K.insert=f().bind(null,"head"),K.domAPI=C(),K.insertStyleElement=x(),m()(I.Z,K),I.Z&&I.Z.locals&&I.Z.locals;const Q=(0,O.Z)(z,(function(){var t=this,e=t._self._c;return t.adding?e("div",{staticClass:"spacing"},[t._v("\n\t"+t._s(t.t("settings","Use the credentials below to configure your app or device."))+"\n\t"+t._s(t.t("settings","For security reasons this password will only be shown once."))+"\n\t"),e("div",{staticClass:"app-password-row"},[e("label",{staticClass:"app-password-label",attrs:{for:"app-username"}},[t._v(t._s(t.t("settings","Username")))]),t._v(" "),e("input",{staticClass:"monospaced",attrs:{id:"app-username",type:"text",readonly:"readonly"},domProps:{value:t.loginName},on:{focus:t.selectInput}})]),t._v(" "),e("div",{staticClass:"app-password-row"},[e("label",{staticClass:"app-password-label",attrs:{for:"app-password"}},[t._v(t._s(t.t("settings","Password")))]),t._v(" "),e("input",{ref:"appPassword",staticClass:"monospaced",attrs:{id:"app-password",type:"text",readonly:"readonly"},domProps:{value:t.appPassword},on:{focus:t.selectInput}}),t._v(" "),e("NcButton",{attrs:{type:"tertiary",title:t.copyTooltipOptions,"aria-label":t.copyTooltipOptions},on:{click:t.copyPassword},scopedSlots:t._u([{key:"icon",fn:function(){return[t.copied?e("Check",{attrs:{size:20}}):e("ContentCopy",{attrs:{size:20}})]},proxy:!0}])}),t._v(" "),e("NcButton",{on:{click:t.reset}},[t._v("\n\t\t\t"+t._s(t.t("settings","Done"))+"\n\t\t")])],1),t._v(" "),e("div",{staticClass:"app-password-row"},[e("span",{staticClass:"app-password-label"}),t._v(" "),t.showQR?e("QR",{attrs:{value:t.qrUrl}}):e("a",{on:{click:function(e){t.showQR=!0}}},[t._v("\n\t\t\t"+t._s(t.t("settings","Show QR code for mobile apps"))+"\n\t\t")])],1)]):e("div",{staticClass:"row spacing",attrs:{id:"generate-app-token-section"}},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.deviceName,expression:"deviceName"}],attrs:{type:"text",maxlength:120,disabled:t.loading,placeholder:t.t("settings","App name")},domProps:{value:t.deviceName},on:{keydown:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.submit.apply(null,arguments)},input:function(e){e.target.composing||(t.deviceName=e.target.value)}}}),t._v(" "),e("NcButton",{attrs:{disabled:t.loading||0===t.deviceName.length,type:"primary"},on:{click:t.submit}},[t._v("\n\t\t"+t._s(t.t("settings","Create new app password"))+"\n\t")])],1)}),[],!1,null,"7831fe39",null).exports;var F=o(25108);const X=t=>e=>(t(e),e),H={name:"AuthTokenSection",components:{AuthTokenSetupDialogue:Q,AuthTokenList:R},props:{tokens:{type:Array,required:!0},canCreateToken:{type:Boolean,required:!0}},data:()=>({baseUrl:(0,d.generateUrl)("/settings/personal/authtokens")}),methods:{addNewToken(e){F.debug("creating a new app token",e);const n={name:e};return r.default.post(this.baseUrl,n).then((t=>t.data)).then(X((()=>F.debug("app token created")))).then(X((t=>this.tokens.push(t.deviceToken)))).catch((e=>{throw F.error.bind("could not create app password",e),OC.Notification.showTemporary(t("settings","Error while creating device token")),e}))},toggleTokenScope(e,n,o){F.debug("updating app token scope",e.id,n,o);const i=e.scope[n];return e.scope[n]=o,this.updateToken(e).then(X((()=>F.debug("app token scope updated")))).catch((o=>{throw F.error.bind("could not update app token scope",o),OC.Notification.showTemporary(t("settings","Error while updating device token scope")),e.scope[n]=i,o}))},rename(e,n){F.debug("renaming app token",e.id,e.name,n);const o=e.name;return e.name=n,this.updateToken(e).then(X((()=>F.debug("app token name updated")))).catch((n=>{F.error.bind("could not update app token name",n),OC.Notification.showTemporary(t("settings","Error while updating device token name")),e.name=o}))},updateToken(t){return r.default.put(this.baseUrl+"/"+t.id,t).then((t=>t.data))},deleteToken(e){return F.debug("deleting app token",e),this.tokens=this.tokens.filter((t=>t!==e)),r.default.delete(this.baseUrl+"/"+e.id).then((t=>t.data)).then(X((()=>F.debug("app token deleted")))).catch((n=>{F.error.bind("could not delete app token",n),OC.Notification.showTemporary(t("settings","Error while deleting the token")),this.tokens.push(e)}))},async wipeToken(e){F.debug("wiping app token",e);try{if(await(0,p.confirmPassword)(),!await new Promise((e=>{OC.dialogs.confirm(t("settings","Do you really want to wipe your data from this device?"),t("settings","Confirm wipe"),e,!0)})))return void F.debug("wipe aborted by user");await r.default.post(this.baseUrl+"/wipe/"+e.id),F.debug("app token marked for wipe"),e.type=2}catch(e){F.error("could not wipe app token",e),OC.Notification.showTemporary(t("settings","Error while wiping the device with the token"))}}}},V=(0,O.Z)(H,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"section",attrs:{id:"security"}},[e("h2",[t._v(t._s(t.t("settings","Devices & sessions",{},void 0,{sanitize:!1})))]),t._v(" "),e("p",{staticClass:"settings-hint hidden-when-empty"},[t._v("\n\t\t"+t._s(t.t("settings","Web, desktop and mobile clients currently logged in to your account."))+"\n\t")]),t._v(" "),e("AuthTokenList",{attrs:{tokens:t.tokens},on:{"toggle-scope":t.toggleTokenScope,rename:t.rename,delete:t.deleteToken,wipe:t.wipeToken}}),t._v(" "),t.canCreateToken?e("AuthTokenSetupDialogue",{attrs:{add:t.addNewToken}}):t._e()],1)}),[],!1,null,"7ae3f074",null).exports;o.nc=btoa(OC.requestToken),a.default.use(s.default,{defaultHtml:!1}),a.default.prototype.t=t,new(a.default.extend(V))({propsData:{tokens:(0,i.j)("settings","app_tokens"),canCreateToken:(0,i.j)("settings","can_create_app_token")}}).$mount("#security-authtokens")},12283:(t,e,n)=>{n.d(e,{Z:()=>r});var o=n(87537),i=n.n(o),a=n(23645),s=n.n(a)()(i());s.push([t.id,".wiping[data-v-0f73a400]{background-color:var(--color-background-darker)}td[data-v-0f73a400]{border-top:1px solid var(--color-border);max-width:200px;white-space:normal;vertical-align:middle;position:relative}td.client[data-v-0f73a400],td.more[data-v-0f73a400]{overflow:visible;position:relative;width:44px;height:44px}td.token-name[data-v-0f73a400]{padding:10px 6px}td.token-name.token-rename[data-v-0f73a400]{padding:0}td.token-name input[data-v-0f73a400]{width:100%;margin:0}td.token-name .wiping-warning[data-v-0f73a400]{color:var(--color-text-lighter)}td.more[data-v-0f73a400]{padding:0 10px}td.client div[data-v-0f73a400]{opacity:.57;width:44px;height:44px}","",{version:3,sources:["webpack://./apps/settings/src/components/AuthToken.vue"],names:[],mappings:"AACA,yBACC,+CAAA,CAGD,oBACC,wCAAA,CACA,eAAA,CACA,kBAAA,CACA,qBAAA,CACA,iBAAA,CAEA,oDACC,gBAAA,CACA,iBAAA,CACA,UAAA,CACA,WAAA,CAGD,+BACC,gBAAA,CAEA,4CACC,SAAA,CAGD,qCACC,UAAA,CACA,QAAA,CAGF,+CACC,+BAAA,CAGD,yBAEC,cAAA,CAMA,+BACC,WAAA,CACA,UAAA,CACA,WAAA",sourcesContent:["\n.wiping {\n\tbackground-color: var(--color-background-darker);\n}\n\ntd {\n\tborder-top: 1px solid var(--color-border);\n\tmax-width: 200px;\n\twhite-space: normal;\n\tvertical-align: middle;\n\tposition: relative;\n\n\t&%icon {\n\t\toverflow: visible;\n\t\tposition: relative;\n\t\twidth: 44px;\n\t\theight: 44px;\n\t}\n\n\t&.token-name {\n\t\tpadding: 10px 6px;\n\n\t\t&.token-rename {\n\t\t\tpadding: 0;\n\t\t}\n\n\t\tinput {\n\t\t\twidth: 100%;\n\t\t\tmargin: 0;\n\t\t}\n\t}\n\t&.token-name .wiping-warning {\n\t\tcolor: var(--color-text-lighter);\n\t}\n\n\t&.more {\n\t\t@extend %icon;\n\t\tpadding: 0 10px;\n\t}\n\n\t&.client {\n\t\t@extend %icon;\n\n\t\tdiv {\n\t\t\topacity: 0.57;\n\t\t\twidth: 44px;\n\t\t\theight: 44px;\n\t\t}\n\t}\n}\n"],sourceRoot:""}]);const r=s},46533:(t,e,n)=>{n.d(e,{Z:()=>r});var o=n(87537),i=n.n(o),a=n(23645),s=n.n(a)()(i());s.push([t.id,"table[data-v-1474f25b]{width:100%;min-height:50px;padding-top:5px;max-width:580px}table th[data-v-1474f25b]{opacity:.5;padding:10px 0}.token-list td>a.icon-more[data-v-1474f25b]{transition:opacity var(--animation-quick)}.token-list a.icon-more[data-v-1474f25b]{padding:14px;display:block;width:44px;height:44px;opacity:.5}.token-list tr:hover td>a.icon[data-v-1474f25b],.token-list tr td>a.icon[data-v-1474f25b]:focus,.token-list tr.active td>a.icon[data-v-1474f25b]{opacity:1}","",{version:3,sources:["webpack://./apps/settings/src/components/AuthTokenList.vue"],names:[],mappings:"AACA,uBACC,UAAA,CACA,eAAA,CACA,eAAA,CACA,eAAA,CAEA,0BACC,UAAA,CACA,cAAA,CAKD,4CACC,yCAAA,CAGD,yCACC,YAAA,CACA,aAAA,CACA,UAAA,CACA,WAAA,CACA,UAAA,CAIA,iJAGC,SAAA",sourcesContent:["\ntable {\n\twidth: 100%;\n\tmin-height: 50px;\n\tpadding-top: 5px;\n\tmax-width: 580px;\n\n\tth {\n\t\topacity: .5;\n\t\tpadding: 10px 0;\n\t}\n}\n\n.token-list {\n\ttd > a.icon-more {\n\t\ttransition: opacity var(--animation-quick);\n\t}\n\n\ta.icon-more {\n\t\tpadding: 14px;\n\t\tdisplay: block;\n\t\twidth: 44px;\n\t\theight: 44px;\n\t\topacity: .5;\n\t}\n\n\ttr {\n\t\t&:hover td > a.icon,\n\t\ttd > a.icon:focus,\n\t\t&.active td > a.icon {\n\t\t\topacity: 1;\n\t\t}\n\t}\n}\n"],sourceRoot:""}]);const r=s},71328:(t,e,n)=>{n.d(e,{Z:()=>r});var o=n(87537),i=n.n(o),a=n(23645),s=n.n(a)()(i());s.push([t.id,"#app-tokens-table tr>*:nth-child(2){padding-left:6px}#app-tokens-table tr>*:nth-child(3){text-align:right}","",{version:3,sources:["webpack://./apps/settings/src/components/AuthTokenList.vue"],names:[],mappings:"AAEC,oCACC,gBAAA,CAGD,oCACC,gBAAA",sourcesContent:["\n#app-tokens-table {\n\ttr > *:nth-child(2) {\n\t\tpadding-left: 6px;\n\t}\n\n\ttr > *:nth-child(3) {\n\t\ttext-align: right;\n\t}\n}\n"],sourceRoot:""}]);const r=s},30139:(t,e,n)=>{n.d(e,{Z:()=>r});var o=n(87537),i=n.n(o),a=n(23645),s=n.n(a)()(i());s.push([t.id,".app-password-row[data-v-7831fe39]{display:flex;align-items:center}.app-password-row .icon[data-v-7831fe39]{background-size:16px 16px;display:inline-block;position:relative;top:3px;margin-left:5px;margin-right:8px}.app-password-label[data-v-7831fe39]{display:table-cell;padding-right:1em;text-align:right;vertical-align:middle;width:100px}.row input[data-v-7831fe39]{height:44px !important;padding:7px 12px;margin-right:12px;width:200px}.monospaced[data-v-7831fe39]{width:245px;font-family:monospace}.button-vue[data-v-7831fe39]{display:inline-block;margin:3px 3px 3px 3px}.row[data-v-7831fe39]{display:flex;align-items:center}.spacing[data-v-7831fe39]{padding-top:16px}","",{version:3,sources:["webpack://./apps/settings/src/components/AuthTokenSetupDialogue.vue"],names:[],mappings:"AACA,mCACC,YAAA,CACA,kBAAA,CAEA,yCACC,yBAAA,CACA,oBAAA,CACA,iBAAA,CACA,OAAA,CACA,eAAA,CACA,gBAAA,CAKF,qCACC,kBAAA,CACA,iBAAA,CACA,gBAAA,CACA,qBAAA,CACA,WAAA,CAGD,4BACC,sBAAA,CACA,gBAAA,CACA,iBAAA,CACA,WAAA,CAGD,6BACC,WAAA,CACA,qBAAA,CAGD,6BACC,oBAAA,CACA,sBAAA,CAGD,sBACC,YAAA,CACA,kBAAA,CAGD,0BACC,gBAAA",sourcesContent:["\n.app-password-row {\n\tdisplay: flex;\n\talign-items: center;\n\n\t.icon {\n\t\tbackground-size: 16px 16px;\n\t\tdisplay: inline-block;\n\t\tposition: relative;\n\t\ttop: 3px;\n\t\tmargin-left: 5px;\n\t\tmargin-right: 8px;\n\t}\n\n}\n\n.app-password-label {\n\tdisplay: table-cell;\n\tpadding-right: 1em;\n\ttext-align: right;\n\tvertical-align: middle;\n\twidth: 100px;\n}\n\n.row input {\n\theight: 44px !important;\n\tpadding: 7px 12px;\n\tmargin-right: 12px;\n\twidth: 200px;\n}\n\n.monospaced {\n\twidth: 245px;\n\tfont-family: monospace;\n}\n\n.button-vue{\n\tdisplay:inline-block;\n\tmargin: 3px 3px 3px 3px;\n}\n\n.row {\n\tdisplay: flex;\n\talign-items: center;\n}\n\n.spacing {\n\tpadding-top: 16px;\n}\n"],sourceRoot:""}]);const r=s}},a={};function s(t){var e=a[t];if(void 0!==e)return e.exports;var n=a[t]={id:t,loaded:!1,exports:{}};return i[t].call(n.exports,n,n.exports,s),n.loaded=!0,n.exports}s.m=i,e=[],s.O=(t,n,o,i)=>{if(!n){var a=1/0;for(l=0;l<e.length;l++){n=e[l][0],o=e[l][1],i=e[l][2];for(var r=!0,p=0;p<n.length;p++)(!1&i||a>=i)&&Object.keys(s.O).every((t=>s.O[t](n[p])))?n.splice(p--,1):(r=!1,i<a&&(a=i));if(r){e.splice(l--,1);var d=o();void 0!==d&&(t=d)}}return t}i=i||0;for(var l=e.length;l>0&&e[l-1][2]>i;l--)e[l]=e[l-1];e[l]=[n,o,i]},s.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return s.d(e,{a:e}),e},s.d=(t,e)=>{for(var n in e)s.o(e,n)&&!s.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},s.f={},s.e=t=>Promise.all(Object.keys(s.f).reduce(((e,n)=>(s.f[n](t,e),e)),[])),s.u=t=>t+"-"+t+".js?v=00434e4baa0d8e7b79f1",s.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),s.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),n={},o="nextcloud:",s.l=(t,e,i,a)=>{if(n[t])n[t].push(e);else{var r,p;if(void 0!==i)for(var d=document.getElementsByTagName("script"),l=0;l<d.length;l++){var c=d[l];if(c.getAttribute("src")==t||c.getAttribute("data-webpack")==o+i){r=c;break}}r||(p=!0,(r=document.createElement("script")).charset="utf-8",r.timeout=120,s.nc&&r.setAttribute("nonce",s.nc),r.setAttribute("data-webpack",o+i),r.src=t),n[t]=[e];var A=(e,o)=>{r.onerror=r.onload=null,clearTimeout(u);var i=n[t];if(delete n[t],r.parentNode&&r.parentNode.removeChild(r),i&&i.forEach((t=>t(o))),e)return e(o)},u=setTimeout(A.bind(null,void 0,{type:"timeout",target:r}),12e4);r.onerror=A.bind(null,r.onerror),r.onload=A.bind(null,r.onload),p&&document.head.appendChild(r)}},s.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.nmd=t=>(t.paths=[],t.children||(t.children=[]),t),s.j=4783,(()=>{var t;s.g.importScripts&&(t=s.g.location+"");var e=s.g.document;if(!t&&e&&(e.currentScript&&(t=e.currentScript.src),!t)){var n=e.getElementsByTagName("script");n.length&&(t=n[n.length-1].src)}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),s.p=t})(),(()=>{s.b=document.baseURI||self.location.href;var t={4783:0};s.f.j=(e,n)=>{var o=s.o(t,e)?t[e]:void 0;if(0!==o)if(o)n.push(o[2]);else{var i=new Promise(((n,i)=>o=t[e]=[n,i]));n.push(o[2]=i);var a=s.p+s.u(e),r=new Error;s.l(a,(n=>{if(s.o(t,e)&&(0!==(o=t[e])&&(t[e]=void 0),o)){var i=n&&("load"===n.type?"missing":n.type),a=n&&n.target&&n.target.src;r.message="Loading chunk "+e+" failed.\n("+i+": "+a+")",r.name="ChunkLoadError",r.type=i,r.request=a,o[1](r)}}),"chunk-"+e,e)}},s.O.j=e=>0===t[e];var e=(e,n)=>{var o,i,a=n[0],r=n[1],p=n[2],d=0;if(a.some((e=>0!==t[e]))){for(o in r)s.o(r,o)&&(s.m[o]=r[o]);if(p)var l=p(s)}for(e&&e(n);d<a.length;d++)i=a[d],s.o(t,i)&&t[i]&&t[i][0](),t[i]=0;return s.O(l)},n=self.webpackChunknextcloud=self.webpackChunknextcloud||[];n.forEach(e.bind(null,0)),n.push=e.bind(null,n.push.bind(n))})(),s.nc=void 0;var r=s.O(void 0,[7874],(()=>s(12868)));r=s.O(r)})();
//# sourceMappingURL=settings-vue-settings-personal-security.js.map?v=16bca926b9b57a0ba30e