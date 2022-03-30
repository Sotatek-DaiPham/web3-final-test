(this["webpackJsonpweb3class-final-test"]=this["webpackJsonpweb3class-final-test"]||[]).push([[0],{185:function(e){e.exports=JSON.parse('[{"inputs":[{"internalType":"contract DD2Token","name":"_dd2","type":"address"},{"internalType":"uint256","name":"_dd2PerBlock","type":"uint256"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Deposit","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"EmergencyWithdraw","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Withdraw","type":"event"},{"inputs":[],"name":"dd2","outputs":[{"internalType":"contract DD2Token","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"dd2PerBlock","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"deposit","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"emergencyWithdraw","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_from","type":"uint256"},{"internalType":"uint256","name":"_to","type":"uint256"}],"name":"getBlocks","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_user","type":"address"}],"name":"pendingDD2","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"updatePool","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"userInfo","outputs":[{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"uint256","name":"rewardDebt","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"weth","outputs":[{"internalType":"contract IWETH","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"}]')},186:function(e){e.exports=JSON.parse('[{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"guy","type":"address"},{"name":"wad","type":"uint256"}],"name":"approve","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"src","type":"address"},{"name":"dst","type":"address"},{"name":"wad","type":"uint256"}],"name":"transferFrom","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"wad","type":"uint256"}],"name":"withdraw","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"balanceOf","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"dst","type":"address"},{"name":"wad","type":"uint256"}],"name":"transfer","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"deposit","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"},{"name":"","type":"address"}],"name":"allowance","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"payable":true,"stateMutability":"payable","type":"fallback"},{"anonymous":false,"inputs":[{"indexed":true,"name":"src","type":"address"},{"indexed":true,"name":"guy","type":"address"},{"indexed":false,"name":"wad","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"src","type":"address"},{"indexed":true,"name":"dst","type":"address"},{"indexed":false,"name":"wad","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"dst","type":"address"},{"indexed":false,"name":"wad","type":"uint256"}],"name":"Deposit","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"src","type":"address"},{"indexed":false,"name":"wad","type":"uint256"}],"name":"Withdrawal","type":"event"}]')},407:function(e){e.exports=JSON.parse('[{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_to","type":"address"},{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"mint","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"}]')},431:function(e,t,n){},449:function(e,t){},452:function(e,t){},455:function(e,t){},459:function(e,t){},460:function(e,t){},487:function(e,t){},489:function(e,t){},499:function(e,t){},501:function(e,t){},512:function(e,t){},514:function(e,t){},528:function(e,t){},562:function(e,t){},563:function(e,t){},632:function(e,t){},637:function(e,t){},639:function(e,t){},646:function(e,t){},647:function(e,t){},739:function(e,t,n){},831:function(e,t,n){"use strict";n.r(t);var a=n(0),s=n(58),r=n.n(s),i=(n(431),n(432),n(14)),u=n(61),o=n(8),c=n(11),p=n.n(c),l=n(191),d=n(418),y=n(164),m=n(90),b=n(837),f=n(840),h=n(72),j=n(162),w=n.n(j),x=(n(407),n(185)),v=n(186),O=function(e){var t=new w.a(e),n=new t.eth.Contract(v,"0xc778417e063141139fce010982780140aa0cd5ab");return{web3:t,wethContract:n}},T=function(e){var t=new w.a(e),n=new t.eth.Contract(x,"0x9da687e88b0A807e57f1913bCD31D56c49C872c2");return{web3:t,masterchefContract:n}},k=(n(739),n(839)),g=n(838),M=n(25),C=function(e){var t=e.isModalVisible,n=e.handleCancel,s=e.title,r=e.handleAction,i=e.loading,c=e.modalInfoName,l=e.modalInfoValue,d=Object(a.useState)(0),y=Object(o.a)(d,2),m=y[0],b=y[1],f=function(){var e=Object(u.a)(p.a.mark((function e(){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r(m);case 2:b(0);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(M.jsx)(k.a,{footer:null,cancelButtonProps:!1,title:s,visible:t,onCancel:n,children:Object(M.jsxs)("div",{className:"custom__modal",children:[Object(M.jsx)(g.a,{controls:!1,value:m,size:"large",style:{marginBottom:"30px",width:"100%"},onChange:function(e){return b(e)}}),Object(M.jsxs)("div",{class:"modal__info",children:[Object(M.jsxs)("strong",{children:[c,": "]}),Object(M.jsx)("span",{children:l})]}),Object(M.jsx)(h.a,{type:"primary",size:"large",onClick:f,loading:i,children:s})]})})},S=n(409),_=n(410),I=new S.a({supportedChainIds:[1,4,5]}),D=new _.a({supportedChainIds:[1,4,5],rpc:{1:"https://mainnet.infura.io/v3/859af0ec9b7d4b598e8da5f0c835c027",4:"https://rinkeby.infura.io/v3/859af0ec9b7d4b598e8da5f0c835c027",5:"https://goerli.infura.io/v3/859af0ec9b7d4b598e8da5f0c835c027"},bridge:"https://bridge.walletconnect.org",qrcode:!0}),E={metaMask:n.p+"static/media/ico_metamask.3ccfb050.svg",walletConnect:n.p+"static/media/ico_connectwallet.23917f6f.svg"},A="0x9da687e88b0A807e57f1913bCD31D56c49C872c2",N="0xc778417e063141139fce010982780140aa0cd5ab",W=function(e){return e?e.slice(0,6)+"..."+e.slice(-6):""},V=n(416),B=n(22),H=n(100),P=n(413),F=n.n(P),Y=n(414),J=n.n(Y),R=n(836),z=function(e){var t=e.history.map((function(e){return{key:e.id,action:e.action,amount:e.amount,time:e.time}}));console.log("data",t);return Object(M.jsx)(R.a,{columns:[{title:"Action",dataIndex:"action",key:"action"},{title:"Amount",dataIndex:"amount",key:"amount"},{title:"Time",dataIndex:"time",key:"time"}],dataSource:t})},q={"content-type":"application/json"};var L=function(){var e=Object(l.c)(),t=e.activate,n=e.account,s=(e.chainId,e.library),r=Object(a.useState)(!1),c=Object(o.a)(r,2),j=c[0],k=c[1],g=Object(a.useState)(!1),S=Object(o.a)(g,2),_=S[0],P=S[1],Y=Object(a.useState)(!1),R=Object(o.a)(Y,2),L=R[0],K=R[1],G=Object(a.useState)(!1),Q=Object(o.a)(G,2),U=Q[0],X=Q[1],Z=Object(a.useState)(!1),$=Object(o.a)(Z,2),ee=$[0],te=$[1],ne=Object(a.useState)(0),ae=Object(o.a)(ne,2),se=ae[0],re=ae[1],ie=Object(a.useState)(0),ue=Object(o.a)(ie,2),oe=ue[0],ce=ue[1],pe=Object(a.useState)(0),le=Object(o.a)(pe,2),de=le[0],ye=le[1],me=Object(a.useState)(0),be=Object(o.a)(me,2),fe=be[0],he=be[1],je=Object(a.useState)(0),we=Object(o.a)(je,2),xe=we[0],ve=we[1],Oe=Object(a.useState)([]),Te=Object(o.a)(Oe,2),ke=Te[0],ge=Te[1],Me=new w.a(null===s||void 0===s?void 0:s.provider),Ce=new V.a({web3Instance:Me,tryAggregate:!0}),Se=function(){var e=Object(u.a)(p.a.mark((function e(t){var n,a,s,r,u;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,J()({url:"https://api.thegraph.com/subgraphs/name/sotatek-daipham/web3final",method:"POST",headers:q,data:{query:'\n          {depositEntities(orderBy: time, orderDirection:desc, first: 5, where:{\n            user: "'.concat(t,'"\n            }) {\n              id\n              time\n              user\n              amount\n            }\n          withdrawEntities(orderBy: time, orderDirection:desc, first: 5, where:{\n                user: "').concat(t,'"\n          }) {\n            id\n            time\n            user\n            amount\n          }}'),variables:null}});case 3:n=e.sent,a=n.data.data.depositEntities,s=[].concat(Object(i.a)(n.data.data.depositEntities),Object(i.a)(n.data.data.withdrawEntities)),r=s.sort((function(e,t){return e.time-t.time})).reverse(),u=r.map((function(e){return{id:e.id,action:a.find((function(t){return t.id===e.id}))?"Deposit":"Withdraw",amount:Me.utils.fromWei(e.amount),time:F.a.unix(e.time).format("HH:mm:ss DD-MM-YYYY")}})),ge(u),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),console.log(e.t0);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(t){return e.apply(this,arguments)}}(),_e=[{reference:"userBalance",contractAddress:N,abi:v,calls:[{reference:"balance",methodName:"balanceOf",methodParameters:[n]}]},{reference:"userStake",contractAddress:A,abi:x,calls:[{reference:"userStake",methodName:"userInfo",methodParameters:[n]}]},{reference:"tokenEarned",contractAddress:A,abi:x,calls:[{reference:"tokenEarned",methodName:"pendingDD2",methodParameters:[n]}]},{reference:"totalStaked",contractAddress:N,abi:v,calls:[{reference:"totalStaked",methodName:"balanceOf",methodParameters:[A]}]}],Ie=function(){var e=Object(u.a)(p.a.mark((function e(){var t;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Ce.call(_e);case 3:t=e.sent,re(H.a.utils.formatEther(B.a.from(t.results.userBalance.callsReturnContext[0].returnValues[0].hex))),ce(H.a.utils.formatEther(B.a.from(t.results.userStake.callsReturnContext[0].returnValues[0].hex))),ye(H.a.utils.formatEther(B.a.from(t.results.tokenEarned.callsReturnContext[0].returnValues[0].hex))),he(H.a.utils.formatEther(B.a.from(t.results.totalStaked.callsReturnContext[0].returnValues[0].hex))),console.log(t),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),console.log("\ud83d\ude80 ~ file: App.js ~ line 50 ~ getMulticalData ~ error",e.t0);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(){return e.apply(this,arguments)}}(),De=function(){t(I)},Ee=function(){t(D,void 0,!0).catch((function(e){return console.log("error",e)}))},Ae=function(){X(!1)},Ne=function(){te(!1)},We=function(){X(!0)},Ve=function(){te(!0)},Be=function(){var e=Object(u.a)(p.a.mark((function e(){var t,a,r;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=O(s.provider),a=t.wethContract,e.next=3,a.methods.allowance(n,A).call();case 3:r=e.sent,ve(r);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),He=function(){var e=Object(u.a)(p.a.mark((function e(){var t,a,r;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=O(s.provider),a=t.web3,r=t.wethContract,0!==parseFloat(se)){e.next=4;break}return d.b.error({content:"Insufficient WETH balance",duration:7}),e.abrupt("return");case 4:if(!n){e.next=17;break}return e.prev=5,K(!0),e.next=9,r.methods.approve(A,a.utils.toWei(se)).send({from:n});case 9:Be(),K(!1),e.next=17;break;case 13:e.prev=13,e.t0=e.catch(5),K(!1),console.log(e.t0);case 17:case"end":return e.stop()}}),e,null,[[5,13]])})));return function(){return e.apply(this,arguments)}}(),Pe=function(){var e=Object(u.a)(p.a.mark((function e(t){var a,r,i;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a=T(s.provider),r=a.web3,i=a.masterchefContract,!(t>parseFloat(se))){e.next=5;break}d.b.error({content:"Insufficient funds",duration:7}),e.next=17;break;case 5:if(!n){e.next=17;break}return e.prev=6,k(!0),e.next=10,i.methods.deposit(r.utils.toWei(t.toString())).send({from:n});case 10:e.sent&&(d.b.success({content:"Transaction Success",duration:7}),Ae(),Je(),k(!1)),e.next=17;break;case 14:e.prev=14,e.t0=e.catch(6),console.log(e.t0);case 17:case"end":return e.stop()}}),e,null,[[6,14]])})));return function(t){return e.apply(this,arguments)}}(),Fe=function(){var e=Object(u.a)(p.a.mark((function e(t){var a,r,i;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a=T(s.provider),r=a.web3,i=a.masterchefContract,!(t>parseFloat(oe))){e.next=5;break}d.b.error({content:"Insufficient funds",duration:7}),e.next=17;break;case 5:if(!n){e.next=17;break}return e.prev=6,k(!0),e.next=10,i.methods.withdraw(r.utils.toWei(t.toString())).send({from:n});case 10:e.sent&&(d.b.success({content:"Transaction Success",duration:7}),Ae(),Je(),k(!1)),e.next=17;break;case 14:e.prev=14,e.t0=e.catch(6),console.log(e.t0);case 17:case"end":return e.stop()}}),e,null,[[6,14]])})));return function(t){return e.apply(this,arguments)}}(),Ye=function(){var e=Object(u.a)(p.a.mark((function e(){var t,a;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=T(s.provider),a=t.masterchefContract,e.prev=1,P(!0),e.next=5,a.methods.deposit(0).send({from:n});case 5:e.sent&&(d.b.success({content:"Transaction Success",duration:7}),Ae(),Je(),P(!1)),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(){return e.apply(this,arguments)}}(),Je=function(){var e=Object(u.a)(p.a.mark((function e(){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Ie();case 2:return e.next=4,Se(n);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(a.useEffect)((function(){n&&s&&(Je(),Be())}),[n,s]),Object(M.jsx)("div",{className:"App",children:n?Object(M.jsx)("div",{className:"stake__container",children:Object(M.jsxs)(y.a,{gutter:16,children:[Object(M.jsx)(m.a,{span:12,children:Object(M.jsxs)(b.a,{bordered:!0,children:[Object(M.jsxs)(f.b,{title:"Stake Detail",bordered:!0,size:"middle",column:2,children:[Object(M.jsx)(f.b.Item,{label:"Wallet Address",children:n&&W(n)}),Object(M.jsxs)(f.b.Item,{label:"Balance",children:[se&&se," ",Object(M.jsx)("strong",{children:"WETH"})]}),Object(M.jsxs)(f.b.Item,{label:"Token Earned",children:[de," ",Object(M.jsx)("strong",{children:"DD2"})]}),Object(M.jsxs)(f.b.Item,{label:"Your Stake",children:[oe," ",Object(M.jsx)("strong",{children:"WETH"})]}),Object(M.jsxs)(f.b.Item,{label:"Total Staked",children:[fe," ",Object(M.jsx)("strong",{children:"WETH"})]}),Object(M.jsx)(f.b.Item,{children:Object(M.jsx)(h.a,{type:"primary",block:!0,onClick:Ye,loading:_,children:"Harvest"})})]}),Object(M.jsx)("div",{className:"stake__action",children:parseFloat(xe)?Object(M.jsxs)(M.Fragment,{children:[Object(M.jsx)(h.a,{onClick:We,className:"deposit",children:"Deposit"}),Object(M.jsx)(h.a,{onClick:Ve,className:"withdraw",children:"Withdraw"})]}):Object(M.jsx)(h.a,{loading:L,onClick:He,className:"approve",children:"Approve"})}),Object(M.jsx)(C,{title:"Stake",isModalVisible:U,handleCancel:Ae,handleAction:Pe,loading:j,modalInfoName:"Your WETH balance",modalInfoValue:se}),Object(M.jsx)(C,{title:"Withdraw",isModalVisible:ee,handleCancel:Ne,handleAction:Fe,loading:j,modalInfoName:"Your WETH deposited",modalInfoValue:oe})]})}),Object(M.jsx)(m.a,{span:12,children:Object(M.jsx)(b.a,{title:"History of Account",bordered:!0,children:Object(M.jsx)(z,{history:ke})})})]})}):Object(M.jsxs)("div",{className:"connect__wallet",children:[Object(M.jsxs)("div",{className:"connect__wallet__option",onClick:De,children:[Object(M.jsx)("img",{src:E.metaMask}),Object(M.jsx)("span",{children:"Connect Metamask"})]}),Object(M.jsx)("br",{}),Object(M.jsxs)("div",{className:"connect__wallet__option",onClick:Ee,children:[Object(M.jsx)("img",{src:E.walletConnect}),Object(M.jsx)("span",{children:"Wallet Connect"})]})]})})},K=n(285);function G(e,t){return new K.a(e)}var Q=Object(l.b)("NETWORK");r.a.render(Object(M.jsx)(l.a,{getLibrary:G,children:Object(M.jsx)(Q,{getLibrary:G,children:Object(M.jsx)(L,{})})}),document.getElementById("root"))}},[[831,1,2]]]);
//# sourceMappingURL=main.6295a4b3.chunk.js.map