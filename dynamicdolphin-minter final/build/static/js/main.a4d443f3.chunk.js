(this.webpackJsonphashlips_nft_minting_dapp=this.webpackJsonphashlips_nft_minting_dapp||[]).push([[0],{253:function(e,t){},262:function(e,t){},280:function(e,t){},282:function(e,t){},301:function(e,t){},302:function(e,t){},365:function(e,t){},367:function(e,t){},400:function(e,t){},402:function(e,t){},403:function(e,t){},408:function(e,t){},410:function(e,t){},416:function(e,t){},418:function(e,t){},431:function(e,t){},443:function(e,t){},446:function(e,t){},451:function(e,t){},459:function(e,t){},468:function(e,t){},470:function(e,t){},541:function(e,t,n){},542:function(e,t,n){"use strict";n.r(t);var c,i,o,r,a,s,l,x,j,d,f,b,h,p,u,O,g,m,y,w,A,C=n(1),v=n(26),S=n.n(v),k=n(18),E=n.n(k),D=n(47),T=n(73),_=n(15),N=n(62),P=n(72),F=n.n(P),M=n(223),W=n.n(M),z=n(74),I=n(224),L=n(21),R={loading:!1,account:null,smartContract:null,web3:null,errorMsg:""},B=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:R,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CONNECTION_REQUEST":return Object(L.a)(Object(L.a)({},R),{},{loading:!0});case"CONNECTION_SUCCESS":return Object(L.a)(Object(L.a)({},e),{},{loading:!1,account:t.payload.account,smartContract:t.payload.smartContract,web3:t.payload.web3});case"CONNECTION_FAILED":return Object(L.a)(Object(L.a)({},R),{},{loading:!1,errorMsg:t.payload});case"UPDATE_ACCOUNT":return Object(L.a)(Object(L.a)({},e),{},{account:t.payload.account});default:return e}},K={loading:!1,totalMintAmount:0,cost:0,error:!1,errorMsg:""},U=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:K,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CHECK_DATA_REQUEST":return Object(L.a)(Object(L.a)({},e),{},{loading:!0,error:!1,errorMsg:""});case"CHECK_DATA_SUCCESS":return Object(L.a)(Object(L.a)({},e),{},{loading:!1,totalMintAmount:t.payload.totalMintAmount,error:!1,errorMsg:""});case"CHECK_DATA_FAILED":return Object(L.a)(Object(L.a)({},K),{},{loading:!1,error:!0,errorMsg:t.payload});default:return e}},H=Object(z.b)({blockchain:B,data:U}),X=[I.a],Y=Object(z.c)(z.a.apply(void 0,X)),q=Object(z.d)(H,Y),J=function(e){return{type:"CHECK_DATA_FAILED",payload:e}},G=function(){return function(){var e=Object(D.a)(E.a.mark((function e(t){var n;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t({type:"CHECK_DATA_REQUEST"}),e.prev=1,e.next=4,q.getState().blockchain.smartContract.methods.totalMintAmount().call();case 4:n=e.sent,t({type:"CHECK_DATA_SUCCESS",payload:{totalMintAmount:n}}),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(1),console.log(e.t0),t(J("Could not load data from contract."));case 12:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}()},Q=function(e){return{type:"CONNECTION_FAILED",payload:e}},V=function(e){return function(){var t=Object(D.a)(E.a.mark((function t(n){return E.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n({type:"UPDATE_ACCOUNT",payload:{account:e}}),n(G());case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},Z=n(16),$=Z.a.div(c||(c=Object(_.a)(["\n  background-color: white;\n  background-image: ",";\n  background-size: cover;\n  background-position: center;\n  width: 100%;\n  min-height: 100vh;\n  display: flex;\n  flex-direction: column;\n"])),(function(e){var t=e.image;return t?"url(".concat(t,")"):"none"})),ee=Z.a.div(i||(i=Object(_.a)(["\n  height: 8px;\n  width: 8px;\n"]))),te=Z.a.div(o||(o=Object(_.a)(["\n  height: 16px;\n  width: 16px;\n"]))),ne=Z.a.div(r||(r=Object(_.a)(["\n  height: 24px;\n  width: 24px;\n"]))),ce=Z.a.div(a||(a=Object(_.a)(["\n  height: 32px;\n  width: 32px;\n"]))),ie=Z.a.div(s||(s=Object(_.a)(["\n  display: flex;\n  flex: ",";\n  flex-direction: ",";\n  justify-content: ",";\n  align-items: ",";\n  background-color: ",";\n  width: 100%;\n  background-image: ",";\n  background-size: cover;\n  background-position: center;\n"])),(function(e){var t=e.flex;return t||0}),(function(e){var t=e.fd;return t||"column"}),(function(e){var t=e.jc;return t||"flex-start"}),(function(e){var t=e.ai;return t||"flex-start"}),(function(e){return e.test?"pink":"none"}),(function(e){var t=e.image;return t?"url(".concat(t,")"):"none"})),oe=Z.a.p(l||(l=Object(_.a)(["\n  color: var(--primary-text);\n  font-size: 22px;\n  font-weight: 500;\n  line-height: 1.6;\n"]))),re=(Z.a.p(x||(x=Object(_.a)(["\n  color: var(--primary-text);\n  font-size: 18px;\n  line-height: 1.6;\n"]))),Z.a.p(j||(j=Object(_.a)(["\n  color: var(--primary-text);\n  font-size: 16px;\n  line-height: 1.6;\n"])))),ae=(Z.a.div(d||(d=Object(_.a)(["\n  :active {\n    opacity: 0.6;\n  }\n"]))),n(539),n(230)),se=n(2),le=Z.a.button(f||(f=Object(_.a)(["\n  padding: 10px;\n  border-radius: 50px;\n  border: none;\n  background-color: #89cff0};\n  background-image: linear-gradient(to right, #16a4fd 0%, #41faa4 100%);\n}\n  padding: 20px;\n  font-weight: bold;\n  color: var(--secondary-text);\n  width: 200px;\n  cursor: pointer;\n  box-shadow: 0px 6px 0px -2px rgba(250, 250, 250, 0.3);\n  -webkit-box-shadow: 0px 6px 0px -2px rgba(250, 250, 250, 0.3);\n  -moz-box-shadow: 0px 6px 0px -2px rgba(250, 250, 250, 0.3);\n  :active {\n    box-shadow: none;\n    -webkit-box-shadow: none;\n    -moz-box-shadow: none;\n  }\n"]))),xe=Z.a.button(b||(b=Object(_.a)(["\n  padding: 10px;\n  border-radius: 100%;\n  border: none;\n  background-color:.text #89cff0};\n  padding: 10px;\n  font-weight: bold;\n  font-size: 15px;\n  color: blue};\n  width: 30px;\n  height: 30px;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  box-shadow: 0px 4px 0px -2px rgba(250, 250, 250, 0.3);\n  -webkit-box-shadow: 0px 4px 0px -2px rgba(250, 250, 250, 0.3);\n  -moz-box-shadow: 0px 4px 0px -2px rgba(250, 250, 250, 0.3);\n  :active {\n    box-shadow: none;\n    -webkit-box-shadow: none;\n    -moz-box-shadow: none;\n  }\n"]))),je=Z.a.div(h||(h=Object(_.a)(["\n  display: flex;\n  flex: 1;\n  flex-direction: column;\n  justify-content: stretched;\n  align-items: stretched;\n  width: 100%;\n  @media (min-width: 767px) {\n    flex-direction: row;\n  }\n"]))),de=(Z.a.img(p||(p=Object(_.a)(["\n  width: 10px;\n  @media (min-width: 767px) {\n    width: 20px;\n    height: 20px;\n  }\n  transition: width 0.5s;\n  transition: height 0.5s;\n"]))),Z.a.img(u||(u=Object(_.a)(["\n  box-shadow: 0px 5px 11px 2px rgba(0, 0, 0, 0);\n  border: 1px var(--secondary);\n  background-color: var(--accent);\n  border-radius: 10%;\n  width: 200px;\n  @media (min-width: 900px) {\n    width: 250px;\n  }\n  @media (min-width: 1000px) {\n    width: 370px;\n  }\n  transition: width 0.5s;\n"])))),fe=Z.a.img(O||(O=Object(_.a)(["\n  \n  \n padding: 0;\n  \n  width: 1000px;\n  @media (min-width: 900px) {\n    width: 1000px;\n  }\n  @media (min-width: 1000px) {\n    width: 1000px;\n  }\n  transition: width 0.5s;\n"]))),be=Z.a.img(g||(g=Object(_.a)(["\n  \n  \n padding: 0;\n  \n  width: 100px;\n  @media (min-width: 900px) {\n    width: 200px;\n  }\n  @media (min-width: 1000px) {\n    width: 350px;\n  }\n  transition: width 0.5s;\n"]))),he=Z.a.img(m||(m=Object(_.a)(["\n  box-shadow: 0px 5px 11px 2px rgba(0, 0, 0, 0);\n  border: 1px var(--secondary);\n  background-color: var(--accent);\n  border-radius: 10%;\n  width: 20px;\n  @media (min-width: 900px) {\n    width: 20px;\n  }\n  @media (min-width: 1000px) {\n    width: 25px;\n  }\n  transition: width 0.5s;\n"]))),pe=Z.a.img(y||(y=Object(_.a)(["\n  \n  \n padding: 0;\n border-radius: 100%;\n  width: 200px;\n  @media (min-width: 900px) {\n    width: 200px;\n  }\n  @media (min-width: 1000px) {\n    width: 250px;\n  }\n  transition: width 0.5s;\n"]))),ue=Z.a.img(w||(w=Object(_.a)(["\n  \n  \npadding: 0;\n  \n  width: 1000px;\n  @media (min-width: 900px) {\n    width: 1000px;\n  }\n  @media (min-width: 1000px) {\n    width: 100%;\n  }\n  transition: width 0.5s;\n"]))),Oe=Z.a.a(A||(A=Object(_.a)(["\n  color: blue;\n  text-decoration: none;\n"])));var ge=function(){var e=Object(N.b)(),t=Object(N.c)((function(e){return e.blockchain})),n=Object(N.c)((function(e){return e.data})),c=Object(C.useState)(!1),i=Object(T.a)(c,2),o=i[0],r=i[1],a=Object(C.useState)("Click buy to mint your NFT."),s=Object(T.a)(a,2),l=s[0],x=s[1],j=Object(C.useState)(1),d=Object(T.a)(j,2),f=d[0],b=d[1],h=Object(C.useState)({CONTRACT_ADDRESS:"",SCAN_LINK:"",NETWORK:{NAME:"",SYMBOL:"",ID:0},NFT_NAME:"",SYMBOL:"",MAX_SUPPLY:1,WEI_COST:0,DISPLAY_COST:0,GAS_LIMIT:0,MARKETPLACE:"",MARKETPLACE_LINK:"",SHOW_BACKGROUND:!1}),p=Object(T.a)(h,2),u=p[0],O=p[1],g=function(){""!==t.account&&null!==t.smartContract&&e(G(t.account))},m=function(){var e=Object(D.a)(E.a.mark((function e(){var t,n;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/config/config.json",{headers:{"Content-Type":"application/json",Accept:"application/json"}});case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,O(n);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(C.useEffect)((function(){m()}),[]),Object(C.useEffect)((function(){g()}),[t.account]),Object(se.jsxs)($,{children:[Object(se.jsxs)(ie,{flex:1,ai:"center",id:"Home",style:{padding:0,backgroundColor:"#4da3ff",flexDirection:"column"},children:[Object(se.jsx)(ae.a,{fixed:"top",color:"",children:Object(se.jsxs)(ie,{flex:2,style:{padding:20,backgroundColor:"#007bff",flexDirection:"row"},children:[Object(se.jsx)(ie,{flex:.06,children:Object(se.jsx)(he,{alt:"example",src:"/config/images/example.png",style:{transform:"scaleX(1)"}})}),Object(se.jsx)(ie,{flex:1,children:Object(se.jsx)(oe,{style:{textAlign:"left",fontSize:15,fontWeight:"bold",color:"white",fontFamily:"Poppins, sans-serif"},children:"DYNAMIC DOLPHINS"})}),Object(se.jsx)(ie,{flex:.09,children:Object(se.jsx)("a",{href:"#Home",children:Object(se.jsx)(oe,{style:{textAlign:"left",fontSize:15,fontWeight:"bold",color:"white",fontFamily:"Poppins, sans-serif"},children:"HOME"})})}),Object(se.jsxs)(ie,{flex:.1,children:[" ",Object(se.jsx)("a",{href:"#About",children:Object(se.jsx)(oe,{style:{textAlign:"left",fontSize:15,fontWeight:"bold",color:"white",fontFamily:"Poppins, sans-serif"},children:"ABOUT"})})]}),Object(se.jsx)(ie,{flex:.12,children:Object(se.jsx)("a",{href:"#Lorem_Ipsum",children:Object(se.jsx)(oe,{style:{textAlign:"left",fontSize:15,fontWeight:"bold",color:"white",fontFamily:"Poppins, sans-serif"},children:"ROADMAP"})})}),Object(se.jsx)(ie,{flex:.09,children:Object(se.jsx)("a",{href:"#Team",children:Object(se.jsx)(oe,{style:{textAlign:"left",fontSize:15,fontWeight:"bold",color:"white",fontFamily:"Poppins, sans-serif"},children:"TEAM"})})}),Object(se.jsx)(ie,{flex:.12,children:Object(se.jsx)("a",{href:"https://discord.com/",children:Object(se.jsx)(oe,{style:{textAlign:"left",fontSize:15,fontWeight:"bold",color:"white",fontFamily:"Poppins, sans-serif"},children:"DISCORD"})})}),Object(se.jsx)(ie,{flex:.1,children:Object(se.jsx)("a",{href:"https://twitter.com/Social_Dolphins",children:Object(se.jsx)(oe,{style:{textAlign:"left",fontSize:15,fontWeight:"bold",color:"white",fontFamily:"Poppins, sans-serif"},children:"TWITTER"})})})]})}),Object(se.jsx)(ce,{}),Object(se.jsx)(ce,{}),Object(se.jsx)(ce,{}),Object(se.jsxs)(ie,{flex:1,jc:"center",ai:"center",fd:"row",children:[Object(se.jsx)(ie,{flex:.3,jc:"center",ai:"center",fd:"column"}),Object(se.jsxs)(ie,{flex:.7,jc:"center",ai:"center",fd:"column",children:[Object(se.jsx)(ie,{flex:2,jc:"center",ai:"left",children:Object(se.jsxs)(oe,{style:{textAlign:"left",fontSize:35,fontWeight:"bold",color:"white",fontFamily:"Poppins, sans-serif"},children:[Object(se.jsx)(ce,{}),Object(se.jsx)(ce,{}),"Dynamic Dolphins"]})}),Object(se.jsxs)(ie,{flex:1,jc:"center",ai:"left",children:[Object(se.jsx)(ce,{}),Object(se.jsx)(oe,{style:{textAlign:"left",fontSize:20,fontWeight:"",color:"white",fontFamily:"Poppins, sans-serif"},children:"5,000 Community-Driven Dynamic Dolphins"}),Object(se.jsxs)(oe,{style:{textAlign:"left",fontSize:20,fontWeight:"",color:"white",fontFamily:"Poppins, sans-serif"},children:["depart for Polygon soon!",Object(se.jsx)(ce,{})]}),Object(se.jsxs)(ie,{flex:2,jc:"center",ai:"center",style:{backgroundColor:"#ffce88",padding:24,borderRadius:24,boxShadow:"0px 5px 11px 2px rgba(0,0,0,0.7)"},children:[Object(se.jsx)(oe,{style:{textAlign:"left",fontSize:30,fontWeight:"bold",color:"white",fontFamily:"Poppins, sans-serif"},children:"Dynamic Dolphins - 3 Matic"}),Object(se.jsxs)(je,{flex:1,style:{padding:24,color:"#ffc107"},test:!0,children:[Object(se.jsxs)(ie,{flex:2,jc:"center",ai:"center",style:{backgroundColor:"clear",padding:5,borderRadius:0,border:"0px var(--secondary)",boxShadow:"0px 0px 0px 0px rgba(0,0,0,0.7)"},children:[Object(se.jsx)(oe,{style:{textAlign:"center",fontSize:50,fontWeight:"bold",color:""}}),Object(se.jsx)(re,{style:{textAlign:"center",color:"#ffc107"},children:Object(se.jsx)(Oe,{target:"_blank",href:u.SCAN_LINK})}),Object(se.jsx)(te,{}),Number(n.totalMintAmount)>=u.MAX_SUPPLY?Object(se.jsxs)(se.Fragment,{children:[Object(se.jsx)(oe,{style:{textAlign:"center",color:"#ffc107"},children:"The sale has ended."}),Object(se.jsxs)(re,{style:{textAlign:"center",color:"#ffc107"},children:["You can still find ",u.NFT_NAME," on"]}),Object(se.jsx)(te,{}),Object(se.jsx)(Oe,{target:"_blank",href:u.MARKETPLACE_LINK,children:u.MARKETPLACE})]}):Object(se.jsxs)(se.Fragment,{children:[Object(se.jsx)(oe,{style:{textAlign:"center",color:"var(--accent-text)"}}),Object(se.jsx)(ee,{}),Object(se.jsx)(re,{style:{textAlign:"center",color:"var(--accent-text)"}}),Object(se.jsx)(te,{}),""===t.account||null===t.smartContract?Object(se.jsxs)(ie,{ai:"center",jc:"center",children:[Object(se.jsxs)(re,{style:{textAlign:"center",color:"var(--accent-text)"},children:["Connect to the ",u.NETWORK.NAME," network"]}),Object(se.jsx)(te,{}),Object(se.jsx)(le,{onClick:function(t){t.preventDefault(),e(function(){var e=Object(D.a)(E.a.mark((function e(t){var n,c,i,o,r,a,s,l,x;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t({type:"CONNECTION_REQUEST"}),e.next=3,fetch("/config/abi.json",{headers:{"Content-Type":"application/json",Accept:"application/json"}});case 3:return n=e.sent,e.next=6,n.json();case 6:return c=e.sent,e.next=9,fetch("/config/config.json",{headers:{"Content-Type":"application/json",Accept:"application/json"}});case 9:return i=e.sent,e.next=12,i.json();case 12:if(o=e.sent,r=window,!(a=r.ethereum)||!a.isMetaMask){e.next=32;break}return F.a.setProvider(a),s=new W.a(a),e.prev=18,e.next=21,a.request({method:"eth_requestAccounts"});case 21:return l=e.sent,e.next=24,a.request({method:"net_version"});case 24:e.sent==o.NETWORK.ID?(x=new F.a(c,o.CONTRACT_ADDRESS),t({type:"CONNECTION_SUCCESS",payload:{account:l[0],smartContract:x,web3:s}}),a.on("accountsChanged",(function(e){t(V(e[0]))})),a.on("chainChanged",(function(){window.location.reload()}))):t(Q("Change network to ".concat(o.NETWORK.NAME,"."))),e.next=30;break;case 28:e.prev=28,e.t0=e.catch(18);case 30:e.next=33;break;case 32:t(Q("Install Metamask."));case 33:case"end":return e.stop()}}),e,null,[[18,28]])})));return function(t){return e.apply(this,arguments)}}()),g()},children:"CONNECT"}),""!==t.errorMsg?Object(se.jsxs)(se.Fragment,{children:[Object(se.jsx)(te,{}),Object(se.jsx)(re,{style:{textAlign:"center",color:"var(--accent-text)"},children:t.errorMsg})]}):null]}):Object(se.jsxs)(se.Fragment,{children:[Object(se.jsx)(re,{style:{textAlign:"center",color:"var(--accent-text)"},children:l}),Object(se.jsx)(ne,{}),Object(se.jsxs)(ie,{ai:"center",jc:"center",fd:"row",children:[Object(se.jsx)(xe,{style:{lineHeight:.4},disabled:o?1:0,onClick:function(e){e.preventDefault(),function(){var e=f-1;e<1&&(e=1),b(e)}()},children:"-"}),Object(se.jsx)(ne,{}),Object(se.jsx)(re,{style:{textAlign:"center",color:"var(--accent-text)"},children:f}),Object(se.jsx)(ne,{}),Object(se.jsx)(xe,{disabled:o?1:0,onClick:function(e){e.preventDefault(),function(){var e=f+1;e>10&&(e=10),b(e)}()},children:"+"})]}),Object(se.jsx)(te,{}),Object(se.jsx)(ie,{ai:"center",jc:"center",fd:"row",children:Object(se.jsx)(le,{disabled:o?1:0,onClick:function(n){n.preventDefault(),function(){var n=u.WEI_COST,c=u.GAS_LIMIT,i=String(n*f),o=String(c*f);console.log("Cost: ",i),console.log("Gas limit: ",o),x("Minting your ".concat(u.NFT_NAME,"...")),r(!0),t.smartContract.methods.mintDolphin(f).send({gasLimit:String(o),to:u.CONTRACT_ADDRESS,from:t.account,value:i}).once("error",(function(e){console.log(e),x("Sorry, something went wrong please try again later."),r(!1)})).then((function(n){console.log(n),x("WOW, the ".concat(u.NFT_NAME," is yours! go visit Opensea.io to view it.")),r(!1),e(G(t.account))}))}(),g()},children:o?"BUSY":"BUY"})})]})]}),Object(se.jsx)(ne,{})]}),Object(se.jsx)(ce,{})]})]})]})]}),Object(se.jsxs)(ie,{flex:1,jc:"center",ai:"center",children:[Object(se.jsx)(ne,{}),Object(se.jsx)(ne,{}),Object(se.jsx)(ne,{}),Object(se.jsx)(de,{alt:"example",src:"/config/images/example.png",style:{transform:"scaleX(1)"}})]}),Object(se.jsx)(ie,{flex:.2,jc:"center",ai:"center",fd:"column"})]}),Object(se.jsx)(ce,{}),Object(se.jsx)(ne,{}),Object(se.jsxs)(ie,{jc:"center",ai:"center",style:{width:"70%"},children:[Object(se.jsx)(re,{style:{textAlign:"center",color:"var(--primary-text)"}}),Object(se.jsx)(te,{}),Object(se.jsx)(re,{style:{textAlign:"center",color:"var(--primary-text)"}})]}),Object(se.jsx)(ie,{flex:.2,jc:"center",ai:"center",fd:"column",backgroundColor:"white",color:"white"}),Object(se.jsx)(ue,{alt:"example",src:"/config/images/mask.png",style:{transform:"scaleX(1)"}})]}),Object(se.jsxs)(ie,{flex:2,jc:"center",ai:"center",fd:"row",backgroundColor:"white",color:"white",id:"About",children:[Object(se.jsxs)(ie,{flex:2,jc:"center",ai:"center",fd:"column",backgroundColor:"white",color:"white",children:[Object(se.jsx)(ce,{}),Object(se.jsx)(ce,{}),Object(se.jsx)(ce,{}),Object(se.jsx)(be,{alt:"example",src:"/config/images/back.png",style:{transform:"scaleX(1)"}}),Object(se.jsx)(ce,{}),Object(se.jsx)(ce,{}),Object(se.jsx)(ce,{})]}),Object(se.jsxs)(ie,{flex:2,jc:"center",ai:"center",fd:"column",backgroundColor:"white",color:"white",children:[Object(se.jsx)(oe,{style:{textAlign:"left",fontSize:30,fontWeight:"bold",color:"#1b30a4",fontFamily:"Poppins, sans-serif"},children:"What are Dynamic Dolphins?"}),Object(se.jsx)(ce,{}),Object(se.jsx)(oe,{style:{textAlign:"left",fontSize:15,fontWeight:"",color:"black",fontFamily:"Poppins, sans-serif"},children:"Dynamic Dolphins are a collection of 5,000 high-quality dolphins, each unique in their own way. We are community-led with a focus on creating long-term benefits for our holders and making an extraordinary impact on Dolphin exploitation and conservation."})]}),Object(se.jsx)(ie,{flex:1,jc:"center",ai:"center",fd:"column",backgroundColor:"white",color:"white"})]}),Object(se.jsx)(ie,{flex:1,id:"Lorem_Ipsum",ai:"center",style:{padding:20,backgroundColor:"#BBDBF7",flexDirection:"column"},children:Object(se.jsx)(fe,{alt:"example",src:"/config/images/road.png",style:{transform:"scaleX(1)"}})}),Object(se.jsxs)(ie,{flex:1,ai:"center",id:"Team",style:{padding:20,backgroundColor:"#BBDBF7",flexDirection:"column"},children:[Object(se.jsx)(ce,{}),Object(se.jsx)(ce,{}),Object(se.jsx)(ce,{}),Object(se.jsx)(ce,{}),Object(se.jsx)(ce,{}),Object(se.jsx)(oe,{style:{textAlign:"left",fontSize:30,fontWeight:"bold",color:"white",fontFamily:"Poppins, sans-serif"},children:"OUR TEAM"}),Object(se.jsx)(ce,{}),Object(se.jsx)(ce,{}),Object(se.jsx)(ce,{})]}),Object(se.jsxs)(ie,{flex:1,ai:"center",style:{padding:20,backgroundColor:"#BBDBF7",flexDirection:"row"},children:[Object(se.jsx)(ie,{flex:.4}),Object(se.jsxs)(ie,{flex:.1,children:[Object(se.jsx)(pe,{alt:"example",src:"/config/images/person1.png",style:{transform:"scaleX(1)"}}),Object(se.jsx)(oe,{style:{textAlign:"center",fontSize:15,fontWeight:"bold",color:"white",fontFamily:"Poppins, sans-serif"},children:"Lucian - Programming Director"}),Object(se.jsx)(ce,{}),Object(se.jsx)(ce,{})]}),Object(se.jsx)(ie,{flex:.1}),Object(se.jsxs)(ie,{flex:.1,children:[Object(se.jsx)(pe,{alt:"example",src:"/config/images/person2.png",style:{transform:"scaleX(1)"}}),Object(se.jsx)(oe,{style:{textAlign:"center",fontSize:15,fontWeight:"bold",color:"white",fontFamily:"Poppins, sans-serif"},children:"Jenny - Solidity Programmer"}),Object(se.jsx)(ce,{}),Object(se.jsx)(ce,{})]}),Object(se.jsx)(ie,{flex:.1}),Object(se.jsxs)(ie,{flex:.6,children:[Object(se.jsx)(pe,{alt:"example",src:"/config/images/person3.png",style:{transform:"scaleX(1)"}}),Object(se.jsx)(oe,{style:{textAlign:"center",fontSize:15,fontWeight:"bold",color:"white",fontFamily:"Poppins, sans-serif"},children:"Abby - JavaScript Programmer"}),Object(se.jsx)(ce,{}),Object(se.jsx)(ce,{})]})]}),Object(se.jsxs)(ie,{flex:1,ai:"center",style:{padding:20,backgroundColor:"#ffce88",flexDirection:"column"},children:[Object(se.jsx)(ce,{}),Object(se.jsx)(oe,{style:{textAlign:"center",fontSize:25,fontWeight:"bold",color:"white",fontFamily:"Poppins, sans-serif"},children:"Join Our Community"}),Object(se.jsx)(ce,{}),Object(se.jsx)(ce,{}),Object(se.jsx)(oe,{style:{textAlign:"center",fontSize:15,fontWeight:"",color:"black",fontFamily:"Poppins, sans-serif"},children:"Copyright \xa9 2022, Dynamic Dolphins."}),Object(se.jsx)(oe,{style:{textAlign:"center",fontSize:15,fontWeight:"",color:"black",fontFamily:"Poppins, sans-serif"},children:"All trademarks and copyrights belong to their respective owners."}),Object(se.jsx)(oe,{style:{textAlign:"center",fontSize:15,fontWeight:"",color:"black",fontFamily:"Poppins, sans-serif"},children:"Built by Apex Digital Development"}),Object(se.jsx)(oe,{style:{textAlign:"center",fontSize:15,fontWeight:"",color:"black",fontFamily:"Poppins, sans-serif"},children:"All Content exists on the Polygon Blockchain"})]})]})},me=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,552)).then((function(t){var n=t.getCLS,c=t.getFID,i=t.getFCP,o=t.getLCP,r=t.getTTFB;n(e),c(e),i(e),o(e),r(e)}))};n(541);S.a.render(Object(se.jsx)(N.a,{store:q,children:Object(se.jsx)(ge,{})}),document.getElementById("root")),me()}},[[542,1,2]]]);
//# sourceMappingURL=main.a4d443f3.chunk.js.map