(this.webpackJsonphashlips_nft_minting_dapp=this.webpackJsonphashlips_nft_minting_dapp||[]).push([[0],{247:function(e,n){},256:function(e,n){},274:function(e,n){},276:function(e,n){},295:function(e,n){},296:function(e,n){},359:function(e,n){},361:function(e,n){},394:function(e,n){},396:function(e,n){},397:function(e,n){},402:function(e,n){},404:function(e,n){},410:function(e,n){},412:function(e,n){},425:function(e,n){},437:function(e,n){},440:function(e,n){},445:function(e,n){},453:function(e,n){},462:function(e,n){},464:function(e,n){},534:function(e,n,t){},535:function(e,n,t){"use strict";t.r(n);var a,c,r,o,i,s,l,u,d,p,b,j,h,x,f,g,O=t(1),m=t(85),y=t.n(m),v=t(16),C=t.n(v),w=t(43),S=t(44),E=t(14),A=t(59),T=t(69),k=t.n(T),N=t(220),_=t.n(N),I=t(70),D=t(221),M=t(19),L={loading:!1,account:null,smartContract:null,web3:null,errorMsg:""},R=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:L,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"CONNECTION_REQUEST":return Object(M.a)(Object(M.a)({},L),{},{loading:!0});case"CONNECTION_SUCCESS":return Object(M.a)(Object(M.a)({},e),{},{loading:!1,account:n.payload.account,smartContract:n.payload.smartContract,web3:n.payload.web3});case"CONNECTION_FAILED":return Object(M.a)(Object(M.a)({},L),{},{loading:!1,errorMsg:n.payload});case"UPDATE_ACCOUNT":return Object(M.a)(Object(M.a)({},e),{},{account:n.payload.account});default:return e}},K={loading:!1,totalSupply:0,cost:0,error:!1,errorMsg:""},F=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:K,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"CHECK_DATA_REQUEST":return Object(M.a)(Object(M.a)({},e),{},{loading:!0,error:!1,errorMsg:""});case"CHECK_DATA_SUCCESS":return Object(M.a)(Object(M.a)({},e),{},{loading:!1,totalSupply:n.payload.totalSupply,error:!1,errorMsg:""});case"CHECK_DATA_FAILED":return Object(M.a)(Object(M.a)({},K),{},{loading:!1,error:!0,errorMsg:n.payload});default:return e}},U=Object(I.b)({blockchain:R,data:F}),z=[D.a],P=Object(I.c)(I.a.apply(void 0,z)),H=Object(I.d)(U,P),B=function(e){return{type:"CHECK_DATA_FAILED",payload:e}},W=function(){return function(){var e=Object(w.a)(C.a.mark((function e(n){var t;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n({type:"CHECK_DATA_REQUEST"}),e.prev=1,e.next=4,H.getState().blockchain.smartContract.methods.totalSupply().call();case 4:t=e.sent,n({type:"CHECK_DATA_SUCCESS",payload:{totalSupply:t}}),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(1),console.log(e.t0),n(B("Could not load data from contract."));case 12:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(n){return e.apply(this,arguments)}}()},q=function(e){return{type:"CONNECTION_FAILED",payload:e}},G=function(e){return function(){var n=Object(w.a)(C.a.mark((function n(t){return C.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:t({type:"UPDATE_ACCOUNT",payload:{account:e}}),t(W());case 2:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},Q=t(15),Y=Q.a.div(a||(a=Object(E.a)(["\n  background-color: var(--primary);\n  background-image: ",";\n  background-size: cover;\n  background-position: center;\n  width: 100%;\n  min-height: 100vh;\n  display: flex;\n  flex-direction: column;\n"])),(function(e){var n=e.image;return n?"url(".concat(n,")"):"none"})),J=Q.a.div(c||(c=Object(E.a)(["\n  height: 8px;\n  width: 8px;\n"]))),X=Q.a.div(r||(r=Object(E.a)(["\n  height: 16px;\n  width: 16px;\n"]))),$=Q.a.div(o||(o=Object(E.a)(["\n  height: 24px;\n  width: 24px;\n"]))),V=Q.a.div(i||(i=Object(E.a)(["\n  height: 32px;\n  width: 32px;\n"]))),Z=Q.a.div(s||(s=Object(E.a)(["\n  display: flex;\n  flex: ",";\n  flex-direction: ",";\n  justify-content: ",";\n  align-items: ",";\n  background-color: ",";\n  width: 100%;\n  background-image: ",";\n  background-size: cover;\n  background-position: center;\n"])),(function(e){var n=e.flex;return n||0}),(function(e){var n=e.fd;return n||"column"}),(function(e){var n=e.jc;return n||"flex-start"}),(function(e){var n=e.ai;return n||"flex-start"}),(function(e){return e.test?"pink":"none"}),(function(e){var n=e.image;return n?"url(".concat(n,")"):"none"})),ee=(Q.a.p(l||(l=Object(E.a)(["\n  color: var(--primary-text);\n  font-size: 22px;\n  font-weight: 500;\n  line-height: 1.6;\n"]))),Q.a.p(u||(u=Object(E.a)(["\n  color: var(--primary-text);\n  font-size: 18px;\n  line-height: 1.6;\n"]))),Q.a.p(d||(d=Object(E.a)(["\n  color: var(--primary-text);\n  font-size: 16px;\n  line-height: 1.6;\n"])))),ne=(Q.a.div(p||(p=Object(E.a)(["\n  :active {\n    opacity: 0.6;\n  }\n"]))),t(225)),te=t(3),ae=Q.a.button(b||(b=Object(E.a)(["\n  padding: 10px;\n  border-radius: 10px;\n  border: 1px black solid;\n  background-color: var(--secondary);\n  padding: 10px;\n  font-weight: bold;\n  color: var(--secondary-text);\n  width: 200px;\n  cursor: pointer;\n  box-shadow: 0px 6px 0px -2px rgba(250, 250, 250, 0.3);\n  -webkit-box-shadow: 0px 6px 0px -2px rgba(250, 250, 250, 0.3);\n  -moz-box-shadow: 0px 6px 0px -2px rgba(250, 250, 250, 0.3);\n  :active {\n    box-shadow: none;\n    -webkit-box-shadow: none;\n    -moz-box-shadow: none;\n  }\n  font-family: 'Kalam';\n"]))),ce=(Q.a.button(j||(j=Object(E.a)(["\n  padding: 10px;\n  border-radius: 100%;\n  border: none;\n  background-color: var(--primary);\n  padding: 10px;\n  font-weight: bold;\n  font-size: 15px;\n  color: var(--primary-text);\n  width: 30px;\n  height: 30px;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  box-shadow: 0px 4px 0px -2px rgba(250, 250, 250, 0.3);\n  -webkit-box-shadow: 0px 4px 0px -2px rgba(250, 250, 250, 0.3);\n  -moz-box-shadow: 0px 4px 0px -2px rgba(250, 250, 250, 0.3);\n  :active {\n    box-shadow: none;\n    -webkit-box-shadow: none;\n    -moz-box-shadow: none;\n  }\n"]))),Q.a.div(h||(h=Object(E.a)(["\n  display: flex;\n  flex: 1;\n  flex-direction: column;\n  justify-content: stretched;\n  align-items: stretched;\n  width: 100%;\n  @media (min-width: 767px) {\n    flex-direction: row;\n  }\n"])))),re=(Q.a.img(x||(x=Object(E.a)(["\n  width: 200px;\n  @media (min-width: 767px) {\n    width: 300px;\n  }\n  transition: width 0.5s;\n  transition: height 0.5s;\n"]))),Q.a.img(f||(f=Object(E.a)(["\n  width: 200px;\n  @media (min-width: 900px) {\n    width: 250px;\n  }\n  @media (min-width: 1000px) {\n    width: 300px;\n  }\n  transition: width 0.5s;\n"])))),oe=Q.a.a(g||(g=Object(E.a)(["\n  color: var(--secondary);\n  text-decoration: none;\n"])));var ie=function(){var e,n,t=Object(A.b)(),a=Object(A.c)((function(e){return e.blockchain})),c=(Object(A.c)((function(e){return e.data})),Object(O.useState)(!1)),r=Object(S.a)(c,2),o=r[0],i=r[1],s=Object(O.useState)("Mint your .muu.eth now!"),l=Object(S.a)(s,2),u=l[0],d=l[1],p=Object(O.useState)(1),b=Object(S.a)(p,2),j=b[0],h=(b[1],Object(O.useState)("")),x=Object(S.a)(h,2),f=x[0],g=x[1],m=Object(O.useState)("/config/images/2.png"),y=Object(S.a)(m,2),v=y[0],E=y[1],T=Object(O.useState)({CONTRACT_ADDRESS:"",SCAN_LINK:"",NETWORK:{NAME:"",SYMBOL:"",ID:0},NFT_NAME:"",SYMBOL:"",MAX_SUPPLY:1,WEI_COST:0,DISPLAY_COST:0,GAS_LIMIT:0,MARKETPLACE:"",MARKETPLACE_LINK:"",SHOW_BACKGROUND:!1}),N=Object(S.a)(T,2),I=N[0],D=N[1],M=function(){""!==a.account&&null!==a.smartContract&&t(W(a.account))},L=function(){var e=Object(w.a)(C.a.mark((function e(){var n,t;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/config/config.json",{headers:{"Content-Type":"application/json",Accept:"application/json"}});case 2:return n=e.sent,e.next=5,n.json();case 5:t=e.sent,D(t);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(O.useEffect)((function(){L()}),[]),Object(O.useEffect)((function(){M()}),[a.account]),Object(O.useEffect)((function(){var e=setInterval((function(){var e=Math.ceil(30*Math.random());E("/config/images/"+e+".png")}),2500);return function(){return clearInterval(e)}}),[]),Object(te.jsx)(Y,{children:Object(te.jsxs)(Z,{flex:1,ai:"center",style:{padding:24,backgroundColor:"var(--primary)"},children:[Object(te.jsx)(X,{}),Object(te.jsxs)(ce,{flex:1,style:{padding:24},test:!0,children:[Object(te.jsx)(Z,{flex:1,jc:"center",ai:"center",children:Object(te.jsx)(re,{alt:"example",src:v})}),Object(te.jsx)(V,{}),Object(te.jsxs)(Z,{flex:2,jc:"center",ai:"center",style:{padding:24},children:[Object(te.jsx)(X,{}),Object(te.jsx)(te.Fragment,{children:""===a.account||null===a.smartContract?Object(te.jsxs)(Z,{ai:"center",jc:"center",children:[Object(te.jsxs)("h1",{className:"muulogo",children:[Object(te.jsx)(ne.a,{sequence:["vitalik",2e3,"420",2e3,"\ud83d\ude0b",2e3,"mike",2e3,"trade",2e3,"\ud83e\udd0c",2e3,"fomo",2e3,"king",2e3,"my",2e3,"88",2e3,"\ud83d\udc80",2e3,"elon",2e3,"grail",2e3,"guy",2e3],wrapper:"span",repeat:1/0}),".muu.eth"]}),Object(te.jsx)("br",{}),Object(te.jsx)(ee,{style:{textAlign:"center",color:"black"},children:"Connect to mint your .muu.eth"}),Object(te.jsx)(X,{}),Object(te.jsx)(ae,{onClick:function(e){e.preventDefault(),t(function(){var e=Object(w.a)(C.a.mark((function e(n){var t,a,c,r,o,i,s,l,u;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n({type:"CONNECTION_REQUEST"}),e.next=3,fetch("/config/abi.json",{headers:{"Content-Type":"application/json",Accept:"application/json"}});case 3:return t=e.sent,e.next=6,t.json();case 6:return a=e.sent,e.next=9,fetch("/config/config.json",{headers:{"Content-Type":"application/json",Accept:"application/json"}});case 9:return c=e.sent,e.next=12,c.json();case 12:if(r=e.sent,o=window,!(i=o.ethereum)||!i.isMetaMask){e.next=33;break}return k.a.setProvider(i),s=new _.a(i),e.prev=18,e.next=21,i.request({method:"eth_requestAccounts"});case 21:return l=e.sent,e.next=24,i.request({method:"net_version"});case 24:e.sent==r.NETWORK.ID?(u=new k.a(a,r.CONTRACT_ADDRESS),n({type:"CONNECTION_SUCCESS",payload:{account:l[0],smartContract:u,web3:s}}),i.on("accountsChanged",(function(e){n(G(e[0]))})),i.on("chainChanged",(function(){window.location.reload()}))):n(q("Change network to ".concat(r.NETWORK.NAME,"."))),e.next=31;break;case 28:e.prev=28,e.t0=e.catch(18),n(q("Something went wrong."));case 31:e.next=34;break;case 33:n(q("Install Metamask."));case 34:case"end":return e.stop()}}),e,null,[[18,28]])})));return function(n){return e.apply(this,arguments)}}()),M()},children:"CONNECT"}),""!==a.errorMsg?Object(te.jsxs)(te.Fragment,{children:[Object(te.jsx)(X,{}),Object(te.jsx)(ee,{style:{textAlign:"center",color:"var(--accent-text)"},children:a.errorMsg})]}):null]}):Object(te.jsxs)(te.Fragment,{children:[Object(te.jsx)(J,{}),Object(te.jsx)(X,{}),Object(te.jsx)(ee,{style:{textAlign:"center",color:"black"},children:u}),Object(te.jsx)($,{}),Object(te.jsxs)("div",{children:[Object(te.jsx)("input",{className:"inputsub doodle-border",type:"text",id:"message",name:"message",onChange:function(e){g(e.target.value),console.log("calue is.",e.target.value)},value:f}),".muu.eth"]}),Object(te.jsx)(X,{}),Object(te.jsx)(Z,{ai:"center",jc:"center",fd:"row",children:Object(te.jsx)(ae,{disabled:o?1:0,onClick:function(e){e.preventDefault(),function(){var e=I.WEI_COST,n=I.GAS_LIMIT,c=String(e*j),r=String(n*j);console.log("Cost: ",c),console.log("Gas limit: ",r),d("Minting ".concat(f,".muu.eth...")),i(!0),a.smartContract.methods.mint(f).estimateGas({gasLimit:3e5,value:5e15},(function(e,n){":"==e.message[18]?(d("Someone has already registered this domain."),i(!1)):a.smartContract.methods.mint(f).send({to:I.CONTRACT_ADDRESS,from:a.account,value:c,gasLimit:3e5}).once("error",(function(e){console.log(e),d("Sorry, something went wrong please try again later."),i(!1)})).then((function(e){console.log(e),d("Aaaah yeah, ".concat(f,".muu.eth is yours! go visit Opensea.io to view it.")),i(!1),t(W(a.account))}))}))}(),M()},children:o?"Busy minting...":"Costs 0.005 ETH + gas"})}),Object(te.jsx)("br",{}),Object(te.jsxs)(ee,{style:{textAlign:"center",color:"black"},children:[Object(te.jsx)("small",{style:{fontSize:"smaller"},children:"There are no yearly renewal fee on .muu.eth subdomains*!! \ud83d\ude03"}),Object(te.jsx)("br",{}),Object(te.jsx)("small",{style:{fontSize:"6px"},children:"*...As long as this service makes enough ETH per year to keep up registration fees on muu.eth ($640/yr)."})]})]})}),Object(te.jsx)($,{})]}),Object(te.jsx)(V,{}),Object(te.jsx)(Z,{flex:1,jc:"center",ai:"center",children:Object(te.jsx)(re,{alt:"example",src:v,style:{transform:"scaleX(-1)"}})})]}),Object(te.jsx)($,{}),Object(te.jsxs)(Z,{jc:"center",ai:"center",style:{width:"70%"},children:[Object(te.jsxs)(ee,{style:{textAlign:"center",color:"var(--primary-text)"},children:["Wondering wtf this is all about? muu.eth is a experimental NFT by ",Object(te.jsx)("a",{href:"https://twitter.com/elonsdev",children:"ElonsDev"})," that uses the muu.eth ENS name to issue subdomains that are also ERC721 tokens with a randomly generated face from croodles by ",Object(te.jsx)("a",{href:"https://twitter.com/realvjy",children:"@realvjy"})," (under CC BY 4.0 License) and ",Object(te.jsx)("a",{href:"https://avatars.dicebear.com/",children:"avatars.dicebear.com"})," free api*. Thus it can generate new and unique...ish faces forever.",Object(te.jsx)("br",{}),Object(te.jsx)("small",{style:{fontSize:"6px"},children:"*...Hopefully the API doesn't break or I will have to remake it to keep the NFT images up. FAQ coming soon..."})]}),Object(te.jsx)(X,{}),"Smart Contract: ",Object(te.jsx)(oe,{target:"_blank",href:I.SCAN_LINK,children:(e=I.CONTRACT_ADDRESS,n=15,e.length>n?"".concat(e.substring(0,n),"..."):e)})]})]})})},se=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,539)).then((function(n){var t=n.getCLS,a=n.getFID,c=n.getFCP,r=n.getLCP,o=n.getTTFB;t(e),a(e),c(e),r(e),o(e)}))};t(534);y.a.render(Object(te.jsx)(A.a,{store:H,children:Object(te.jsx)(ie,{})}),document.getElementById("root")),se()}},[[535,1,2]]]);
//# sourceMappingURL=main.cc47ca25.chunk.js.map