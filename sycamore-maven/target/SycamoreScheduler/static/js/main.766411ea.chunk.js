(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{44:function(e){e.exports=["ACAD","ACCT","ACMD","ACTN","ADNT","AEST","AHIS","ALI","AME","AMST","ANSC","ANST","ANTH","ARAB","ARCG","ARCH","ARLT","ART","ARTL","ARTS","ASCJ","ASTE","ASTR","BAEP","BIOC","BISC","BKN","BME","BPMK","BUAD","BUCO","BUS","BVC","CBG","CBY","CE","CHE","CHEM","CLAS","CMGT","CMPP","CNB","CNMA","CNTV","COLT","COMM","CORE","CRIT","CSCI","CSLC","CTAN","CTCS","CTIN","CTPR","CTWR","CXPT","DANC","DENT","DES","DHYG","DIAG","DNCR","DNTR","DPBL","DRNS","DSM","DSO","DSR","EALC","EASC","ECON","EDCO","EDCR","EDHP","EDPT","EDUC","EE","ENE","ENGL","ENGR","ENGV","ENST","FBE","FIM","FINE","FREN","FSEM","GCT","GDEN","GEOG","GEOL","GEP","GEPN","GERD","GERM","GERO","GESM","GPG","GPH","GR","GRSC","GSBA","HBIO","HCDA","HEBR","HINQ","HIST","HMGT","HP","HRM","IDSN","IML","INDS","INF","INTD","IR","IRAN","ISE","ITAL","ITP","JOUR","JS","LAT","LAW","LBST","LIFE","LIM","LING","MASC","MATH","MBPH","MDA","MDES","MED","MEDB","MEDK","MEDS","MICB","MKT","MOR","MPEM","MPGU","MPHY","MPKS","MPPM","MPST","MPTX","MPVA","MPW","MPWP","MS","MSCR","MSS","MTAL","MTEC","MUCD","MUCM","MUCO","MUEN","MUHL","MUIN","MUJZ","MUS","MUSC","NAUT","NEUR","NIIN","NSC","NSCI","NURS","OCST","OFP","OFPM","OPER","OPR","OS","OT","PAIN","PATH","PCPA","PEDO","PERI","PHAR","PHBI","PHED","PHIL","PHRD","PHYS","PJMT","PLUS","PM","PMEP","POIR","PORT","POSC","PPD","PPDE","PPDP","PR","PSC","PSCI","PSYC","PT","PTBK","PTE","PUBD","QBIO","QREA","RED","REL","RSCI","RXRS","SAE","SANA","SCIN","SCIS","SCOR","SCRM","SI","SLL","SOCI","SOWK","SPAN","SSCI","SWDP","SWMS","THTR","TRGN","USC","VISS","WCT","WRIT"]},61:function(e,t,a){e.exports=a(71)},71:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(15),i=a.n(l),o=a(9),s=a(10),c=a(12),m=a(11),u=a(13),d=a(34),f=a(101),g=a(97),h=a(105),p=a(102),E=a(1),S=a(8),b=a(104),y=a(92),v=a(93),C=a(112),w=a(94),j=a(108),I=a(80),R=a(109),O=a(111),N=a(113),x=a(110),k=a(81),P=function(e){return r.a.createElement(h.a,{direction:"column",align:"center",justify:"center",width:"medium",height:"xsmall"},r.a.createElement(j.a,{fill:!0,onClick:function(){e.clickFunc(e.id)},label:r.a.createElement("strong",null,e.name),hoverIndicator:!0,style:{background:"white",radius:"4px",border:"3px solid main",fontSize:"30px"}}))},z=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(c.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={clickFunc:a.props.clickFunc,list:a.props.defList},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"componentWillReceiveProps",value:function(e){this.setState({list:e.list})}},{key:"render",value:function(){var e=this,t=0;return null!==this.state.list&&r.a.createElement(I.a,{items:this.state.list,step:20},function(a){return r.a.createElement(h.a,{align:"center",pad:"small",key:(t++).toString()},r.a.createElement(P,{clickFunc:e.state.clickFunc,name:a,id:a}))})}}]),t}(n.Component),M=function(e){var t=e.label;return r.a.createElement(h.a,{direction:"row",align:"center",justify:"center",margin:"xsmall",pad:"2%"},r.a.createElement(R.a,{size:"xlarge"},r.a.createElement("strong",null,t)))},T=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(c.a)(this,Object(m.a)(t).call(this,e))).state={courseTab:0,search:"",allClasses:e.classes,searchClasses:e.classes,allMajorClasses:e.classes.filter(function(e){return new RegExp("CSCI","i").test(e)}),searchMajorClasses:e.classes.filter(function(e){return new RegExp("CSCI","i").test(e)}),allMinorClasses:e.classes.filter(function(e){return new RegExp("MATH","i").test(e)}),searchMinorClasses:e.classes.filter(function(e){return new RegExp("MATH","i").test(e)})},a.onSearch=function(e){var t=new RegExp(e,"i");this.setState({search:e,searchClasses:this.state.allClasses.filter(function(e){return t.test(e)})})}.bind(Object(S.a)(Object(S.a)(a))),a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this,t=this.state.courseTab;return r.a.createElement(O.a,{activeIndex:t,onActive:function(t){e.setState({courseTab:t})}},r.a.createElement(N.a,{title:r.a.createElement(k.a,{size:"large"})},r.a.createElement(h.a,{direction:"column",align:"center",justify:"start",style:{position:"sticky",top:"0",zIndex:500},background:"light-2",pad:{horizontal:"medium",bottom:"medium"}},r.a.createElement(C.a,{level:"2"},"find any class"),r.a.createElement(x.a,{placeholder:"search",background:"white",value:this.state.search,onChange:function(t){var a=t.target.value;e.onSearch(a)},style:{fontFamily:"Inconsolata"}})),r.a.createElement(h.a,{className:"classBox",direction:"column",align:"center",justify:"start",pad:"small",animation:{type:"fadeIn",size:"xlarge"}},r.a.createElement(z,{clickFunc:this.props.clickFunc,defList:this.state.allClasses,list:this.state.searchClasses}))),r.a.createElement(N.a,{title:r.a.createElement(M,{label:"CSCI"})},r.a.createElement(z,{clickFunc:this.props.clickFunc,defList:this.state.allMajorClasses,list:this.state.searchMajorClasses})),r.a.createElement(N.a,{title:r.a.createElement(M,{label:"MATH"})},r.a.createElement(z,{clickFunc:this.props.clickFunc,defList:this.state.allMinorClasses,list:this.state.searchMinorClasses})))}}]),t}(n.Component),A=a(84),D=a(85),F=a(86),H=a(87),L=a(88),B=a(89),G=[{term:"2017-3",classes:[]},{term:"2018-1",classes:[]},{term:"2018-3",classes:[]},{term:"2019-1",classes:["CSCI 356","EE 109","BISC 220","MATH 407"]}],U=0,W=function(e){function t(e){var a;Object(o.a)(this,t),a=Object(c.a)(this,Object(m.a)(t).call(this,e));var n=new WebSocket("ws://localhost:8080/SycamoreScheduler/ss1");return n.onopen=function(e){console.log("WebSocket Connected!",e)},n.onmessage=function(e){console.log("Received:",e)},n.onclose=function(e){console.log("Closed!",e)},n.onerror=function(e){console.log("Error:",e)},a.setState({socket:n}),a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement(h.a,{flex:!0,direction:"column",justify:"start",align:"center",animation:{type:"fadeIn",delay:50,duration:750,size:"large"}},r.a.createElement(C.a,{level:"1",margin:{top:"large",bottom:"0",left:"large"}},"Course Plan"),r.a.createElement(h.a,{flex:!0,direction:"row",align:"start",justify:"center"},G.map(function(e){return r.a.createElement(h.a,{key:U++,flex:!0,margin:"large"},r.a.createElement(A.a,{caption:e.term},r.a.createElement(D.a,null,r.a.createElement(F.a,null,r.a.createElement(H.a,null,r.a.createElement(C.a,{level:"3"},e.term)))),r.a.createElement(L.a,null,e.classes.map(function(e){return r.a.createElement(F.a,{key:U++},r.a.createElement(H.a,null,r.a.createElement(h.a,{direction:"row",align:"center",justify:"between"},r.a.createElement(R.a,{size:"large"},e),r.a.createElement(j.a,{hoverIndicator:!0,icon:r.a.createElement(B.a,{color:"main"})}))))}))))})))}}]),t}(n.Component),Y=a(90),J=a(99),K=a(44),V=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(c.a)(this,Object(m.a)(t).call(this,e))).doUpdate=function(){var e=a.props.updateFunc(),t=e.error,n=e.msg;t?a.setState({error:!0,errormsg:n,success:!1}):a.setState({error:!1,errormsg:"",success:!0})},a.state={error:!1,errormsg:"",success:!1},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement(h.a,{direction:"column",align:"start",justify:"start",gap:"medium"},r.a.createElement(C.a,{level:"3",margin:{bottom:"0"}},this.props.name),r.a.createElement(h.a,{direction:"row",align:"center",justify:"start",gap:"medium"},this.props.children,r.a.createElement(j.a,{label:"save",hoverIndicator:!0,onClick:function(){e.doUpdate()}})),this.state.error&&r.a.createElement(h.a,{flex:!0,background:"main",direction:"column",align:"center",justify:"center",pad:"medium",style:{borderRadius:"10px"}},r.a.createElement(R.a,{color:"white"},this.state.errormsg)),this.state.success&&r.a.createElement(h.a,{flex:!0,background:"neutral-3",animation:{type:"fadeIn",delay:0,duration:700,size:"large"},direction:"column",align:"center",justify:"center",pad:"small",style:{borderRadius:"10px"}},r.a.createElement(R.a,{color:"white"},"Success!")))}}]),t}(n.Component),_=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(c.a)(this,Object(m.a)(t).call(this,e))).ufName=function(){return{error:!1,msg:""}},a.ulName=function(){return{error:!1,msg:""}},a.uemail=function(){return{error:!1,msg:""}},a.upassword=function(){return{error:!1,msg:""}},a.umajor1=function(){return{error:!1,msg:""}},a.umajor2=function(){return{error:!1,msg:""}},a.uminor1=function(){return{error:!1,msg:""}},a.uminor2=function(){return{error:!1,msg:""}},a.fNameRef=r.a.createRef(),a.lNameRef=r.a.createRef(),a.emailRef=r.a.createRef(),a.passwordRef=r.a.createRef(),a.focusSomething=function(e){e.current.focus()},a.focusSomething.bind(Object(S.a)(Object(S.a)(a))),a.state={fName:a.props.info.fName,lName:a.props.info.lName,email:a.props.info.email,password:a.props.info.password,major1:a.props.info.major1,major2:a.props.info.major2,minor1:a.props.info.minor1,minor2:a.props.info.minor2,programs:K},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement(h.a,{flex:!0,direction:"column",justify:"start",align:"start",animation:{type:"fadeIn",delay:50,duration:750,size:"large"},pad:"large",gap:"medium"},r.a.createElement(C.a,{level:"1"},this.state.fName+" "+this.state.lName),r.a.createElement(V,{name:"First Name",updateFunc:this.ufName},r.a.createElement(Y.a,null,r.a.createElement(x.a,{ref:this.fNameRef,id:"fName",size:"large",focusIndicator:!0,value:this.state.fName,onChange:function(t){return e.setState({fName:t.target.value})}}))),r.a.createElement(V,{name:"Last Name",updateFunc:this.ulName},r.a.createElement(Y.a,null,r.a.createElement(x.a,{ref:this.lNameRef,id:"lName",size:"large",focusIndicator:!0,value:this.state.lName,onChange:function(t){return e.setState({lName:t.target.value})}}))),r.a.createElement(V,{name:"Email",updateFunc:this.uemail},r.a.createElement(Y.a,null,r.a.createElement(x.a,{ref:this.emailRef,id:"email",size:"large",focusIndicator:!0,value:this.state.email,onChange:function(t){return e.setState({email:t.target.value})}}))),r.a.createElement(V,{name:"Password",updateFunc:this.upassword},r.a.createElement(Y.a,null,r.a.createElement(x.a,{ref:this.passwordRef,id:"password",size:"large",type:"password",focusIndicator:!0,value:this.state.password,onChange:function(t){return e.setState({password:t.target.value})}}))),r.a.createElement(V,{name:"Major",updateFunc:this.umajor1},r.a.createElement(J.a,{size:"medium",value:this.state.major1,options:this.state.programs,onChange:function(t){e.setState({major1:t.value})},onClose:function(){return e.setState({programs:K})},onSearch:function(t){var a=new RegExp(t,"i");e.setState({programs:K.filter(function(e){return a.test(e)})})}})),r.a.createElement(V,{name:"Minor",updateFunc:this.uminor1},r.a.createElement(J.a,{size:"medium",value:this.state.minor1,options:this.state.programs,onChange:function(t){e.setState({minor1:t.value})},onClose:function(){return e.setState({programs:K})},onSearch:function(t){var a=new RegExp(t,"i");e.setState({programs:K.filter(function(e){return a.test(e)})})}})))}}]),t}(n.Component),Q=a(114),X=a(107),Z=a(98),$=a(106),q=a(91),ee=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(c.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={classInfo:a.props.defaultInfo},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"componentWillReceiveProps",value:function(e){this.setState({classInfo:e.classInfo})}},{key:"render",value:function(){var e=this.state.classInfo;return r.a.createElement(h.a,{flex:!0,direction:"column",justify:"start",align:"start",pad:"5%",animation:{type:"fadeIn",delay:50,duration:750,size:"large"},style:{overflow:"auto"}},r.a.createElement(C.a,{level:"1"},e.degreeName+" "+e.classNumber),r.a.createElement(C.a,{level:"2"},e.className),r.a.createElement(R.a,{size:"large"},e.units," units"),r.a.createElement(Q.a,null,e.summary),e.instructorName&&r.a.createElement(C.a,{level:"1"},"Instructors"),r.a.createElement(C.a,{level:"2"},e.instructorName||"No instructors found"),0!==e.rmpID&&r.a.createElement(h.a,{direction:"row",align:"center",justify:"between",gap:"medium",margin:{top:"medium"}},r.a.createElement(h.a,{align:"start"},r.a.createElement(X.a,{anchor:"center"},r.a.createElement(Z.a,{type:"circle",background:"light-2",values:[{value:70,color:"main",highlight:!0}],size:"xsmall",thickness:"small"}),r.a.createElement(h.a,{direction:"row",align:"center",pad:{bottom:"xsmall"}},r.a.createElement(R.a,{size:"xlarge",weight:"bold"},"3.5"),r.a.createElement(R.a,{size:"small"},"/5")))),r.a.createElement($.a,{style:{height:"100px"},src:"/SycamoreScheduler/rmp.png"})),this.props.isSignedIn&&r.a.createElement(j.a,{hoverIndicator:!0,icon:r.a.createElement(q.a,{size:"large",color:"darkgreen"}),label:"add",background:"main",pad:"small",margin:{top:"large"}}))}}]),t}(n.Component),te=function(e){return r.a.createElement(h.a,Object.assign({flex:!0,direction:"row",align:"center",justify:"between",background:"darker",pad:"large",animation:{type:"slideDown",delay:0,duration:500,size:"xlarge"},style:{zIndex:"100"}},e))},ae=function(e){return r.a.createElement(b.a,Object.assign({onClick:e.func,color:"light",size:"xxlarge"},e),e.text)},ne=function(e){function t(e){var a;Object(o.a)(this,t),(a=Object(c.a)(this,Object(m.a)(t).call(this,e))).displayClass=function(e){for(var t=a.state.classes,n=0;n<t.length;n++){var r=Object.keys(t[n])[0];r===e&&(console.log("Display "+r),a.setState({display:"class",whichClass:t[n][r]}))}},a.state={showSidebar:!0,display:"none",whichClass:null,signedIn:e.signedIn,email:e.email,classes:null,classNames:null,info:null};var n=!1;return a.loadClasses=function(){var e=this;fetch("/SycamoreScheduler/ClassesServlet",{method:"GET"}).then(function(e){return n=e.ok,e.json()}).then(function(t){if(n){var a=t.map(function(e){var t=Object.keys(e)[0];return e[t].degreeName+" "+e[t].classNumber});e.setState({classes:t,classNames:a},function(){console.log("ClassesServlet returned status 200"),console.log("Classes stored in this.state.classes"),console.log("Loading profile now"),e.props.signedIn&&e.loadProfile()})}else console.log("ClassesServlet did not return status 200."),console.log(JSON.stringify(t))})}.bind(Object(S.a)(Object(S.a)(a))),a.loadProfile=function(){var t=this;fetch("/SycamoreScheduler/ProfileServlet?profileEmail="+e.email,{method:"GET"}).then(function(e){return n=e.ok,e.json()}).then(function(e){console.log(e),t.setState({info:e})})}.bind(Object(S.a)(Object(S.a)(a))),a.loadClasses(),a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this,t=this.state,a=t.showSidebar,n=t.display;return r.a.createElement(y.a.Consumer,null,function(t){return r.a.createElement(h.a,{flex:!0,direction:"column",align:"stretch",justify:"start"},r.a.createElement(te,null,r.a.createElement(v.a,{plain:!0,path:"/"},r.a.createElement(C.a,{level:"1",color:"white"},"Sycamore Scheduler")),r.a.createElement(h.a,{direction:"row",align:"center",justify:"end"},r.a.createElement(ae,{margin:{right:"large"},text:"Classes",func:function(){return e.setState({showSidebar:!e.state.showSidebar})}}),e.state.signedIn&&r.a.createElement(ae,{margin:{right:"large"},text:"Course Plan",func:function(){return e.setState({display:"coursePlan"})}}),e.state.signedIn&&null!==e.state.info&&r.a.createElement(ae,{text:"Profile",func:function(){return e.setState({display:"profile"})}}))),r.a.createElement(h.a,{fill:!0,direction:"row",justify:"start",align:"stretch",animation:{type:"fadeIn",delay:500,duration:500,size:"large"}},null!==e.state.classNames&&r.a.createElement(w.a,{direction:"horizontal",open:a},r.a.createElement(h.a,{width:"medium",animation:{type:"slideRight",delay:500,duration:500,size:"large"},style:{flexWrap:"nowrap",minHeight:"100%"},background:"light-2"},r.a.createElement(T,{classes:e.state.classNames,fullInfo:e.state.classes,clickFunc:e.displayClass}))),"coursePlan"===n&&r.a.createElement(W,null),"profile"===n&&r.a.createElement(_,{info:e.state.info}),"none"===n&&r.a.createElement(h.a,{flex:!0,direction:"column",justify:"center",align:"center",animation:{type:"fadeIn",delay:500,duration:500,size:"large"}},r.a.createElement(C.a,{level:"1"},"Click on a class to view details")),"class"===n&&null!==e.state.whichClass&&r.a.createElement(ee,{isSignedIn:e.state.signedIn,socketFunc:e.props.socketFunc,defaultInfo:e.state.whichClass,classInfo:e.state.whichClass})))})}}]),t}(n.Component),re=a(50),le=a(51),ie=a(55),oe=a(52),se=a(57),ce=function(e){function t(e){var a;return Object(re.a)(this,t),(a=Object(ie.a)(this,Object(oe.a)(t).call(this,e))).state={signedIn:a.props.signedIn},a}return Object(se.a)(t,e),Object(le.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement(h.a,{flex:!0,direction:"row",align:"center",justify:"center",gap:"small"},r.a.createElement(h.a,{height:"small",width:"small",animation:{type:"slideRight",delay:0,duration:500,size:"large"},border:{side:"all",size:"small",color:"dark-1"},pad:"small",background:"main",style:{borderRadius:"20px"}},r.a.createElement($.a,{fit:"contain",src:"/SycamoreScheduler/leaf.png"})),r.a.createElement(h.a,{direction:"column",justify:"center",align:"center",height:"small"},r.a.createElement(h.a,{flex:!0,direction:"row",pad:{top:"medium",horizontal:"medium",bottom:"0"},gap:"small"},r.a.createElement(h.a,{pad:"0",margin:"0",animation:{type:"slideDown",delay:0,duration:500,size:"large"}},r.a.createElement(C.a,{margin:"0",level:"1",color:"black"},"Sycamore")),r.a.createElement(h.a,{pad:"0",margin:"0",animation:{type:"fadeIn",delay:200,duration:400,size:"large"}},r.a.createElement(C.a,{margin:"0",level:"1",color:"main"},"Scheduler"))),r.a.createElement(h.a,{direction:"row",align:"center",justify:"center",animation:{type:"slideUp",delay:0,duration:500,size:"large"},margin:{bottom:"large"}},!this.state.signedIn&&r.a.createElement(v.a,{path:"/Register",hoverIndicator:!0,label:r.a.createElement(R.a,{size:"large"},r.a.createElement("strong",null,"Register")),color:"main",margin:{right:"medium"}}),!this.state.signedIn&&r.a.createElement(v.a,{path:"/SignIn",hoverIndicator:!0,label:r.a.createElement(R.a,{size:"large"},r.a.createElement("strong",null,"Sign In")),color:"main",margin:{right:"medium"}}),this.state.signedIn&&r.a.createElement(j.a,{hoverIndicator:!0,label:r.a.createElement(R.a,{size:"large"},r.a.createElement("strong",null,"Sign Out")),color:"main",onClick:function(){e.props.onSignOut()},margin:{right:"medium"}}),!this.state.signedIn&&r.a.createElement(v.a,{path:"/Home",hoverIndicator:!0,label:r.a.createElement(R.a,{size:"large"},r.a.createElement("strong",null,"Guest")),color:"main"}),this.state.signedIn&&r.a.createElement(v.a,{path:"/Home",hoverIndicator:!0,label:r.a.createElement(R.a,{size:"large"},r.a.createElement("strong",null,"Home")),color:"main"}))))}}]),t}(n.Component),me=a(83),ue=a(95),de=a(96),fe=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(c.a)(this,Object(m.a)(t).call(this,e))).doLogin=function(e){if(""===a.state.email||""===a.state.password){var t="Please enter your ";return""===a.state.email&&(t+="email"),""===a.state.password?(""===a.state.email&&(t+=" and "),t+="password."):t+=".",void a.setState({error:!0,errormsg:t})}if(-1===a.state.email.indexOf("@")||-1===a.state.email.indexOf(".")||a.state.email.indexOf(".")-a.state.email.indexOf("@")<2)a.setState({success:!1,error:!0,errormsg:"Email is not formatted correctly."});else{var n="email="+a.state.email+"&password="+a.state.password,r=!1;fetch("/SycamoreScheduler/LoginServlet",{method:"POST",headers:{"content-type":"application/x-www-form-urlencoded"},body:n}).then(function(e){return r=e.ok,e.json()}).then(function(e){r?a.setState({success:!0,error:!1,errormsg:""},function(){a.props.onSignIn(a.state.email),setTimeout(function(){a.props.history.push("/Home")},1e3)}):a.setState({success:!1,error:!0,errormsg:e.error})})}},a.handleChange=function(e,t){"email"===e?a.setState({email:t.target.value}):"password"===e&&a.setState({password:t.target.value})},a.state={email:"",password:"",error:!1,errormsg:"",success:!1},a.emailRef=r.a.createRef(),a.passwordRef=r.a.createRef(),a.focusSomething=function(e){e.current.focus()},a.focusSomething.bind(Object(S.a)(Object(S.a)(a))),a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement(me.a,{onEnter:function(){e.doLogin(null)},onEsc:function(){e.props.history.push("/")}},r.a.createElement(h.a,{flex:!0,direction:"column",justify:"center",align:"center"},r.a.createElement(h.a,{direction:"column",align:"center",justify:"start",pad:"xlarge",gap:"large",border:{side:"all",color:"main",size:"medium"},style:{borderRadius:"20px"},animation:{type:"fadeIn",delay:0,duration:500,size:"large"}},r.a.createElement(C.a,{level:"1",margin:"0"},"Sign In"),r.a.createElement(Y.a,null,r.a.createElement(x.a,{id:"email",ref:this.emailRef,size:"medium",focusIndicator:!0,placeholder:r.a.createElement(h.a,{onClick:function(){e.focusSomething(e.emailRef)},direction:"row",align:"center",justify:"between",gap:"small"},r.a.createElement(R.a,{style:{fontFamily:"Inconsolata"},size:"large"},"email"),r.a.createElement(R.a,{style:{fontFamily:"Inconsolata"},size:"large",color:"main"},"*")),value:this.state.email,onChange:function(t){e.handleChange("email",t)}})),r.a.createElement(Y.a,null,r.a.createElement(x.a,{id:"password",ref:this.passwordRef,size:"medium",type:"password",focusIndicator:!0,placeholder:r.a.createElement(h.a,{onClick:function(){e.focusSomething(e.passwordRef)},direction:"row",align:"center",justify:"between",gap:"small"},r.a.createElement(R.a,{style:{fontFamily:"Inconsolata"},size:"large"},"password"),r.a.createElement(R.a,{style:{fontFamily:"Inconsolata"},size:"large",color:"main"},"*")),value:this.state.password,onChange:function(t){e.handleChange("password",t)}})),this.state.error&&r.a.createElement(h.a,{flex:!0,background:"main",direction:"column",align:"center",justify:"center",pad:"medium",style:{borderRadius:"10px"}},r.a.createElement(R.a,{color:"white"},this.state.errormsg)),this.state.success&&r.a.createElement(h.a,{flex:!0,background:"neutral-3",animation:{type:"fadeIn",delay:0,duration:700,size:"large"},direction:"column",align:"center",justify:"center",pad:"small",style:{borderRadius:"10px"}},r.a.createElement(R.a,{color:"white"},"Success!")),r.a.createElement(h.a,{direction:"row",align:"center",justify:"center",gap:"medium"},r.a.createElement(v.a,{path:"/",hoverIndicator:!0,color:"dark-2",label:r.a.createElement(ue.a,{color:"main",size:"large"})}),r.a.createElement(j.a,{hoverIndicator:!0,label:r.a.createElement(de.a,{size:"large",color:"green"}),color:"dark-2",onClick:function(t){e.doLogin(t)}})))))}}]),t}(n.Component),ge=a(53),he=a(103),pe=a(44),Ee=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(c.a)(this,Object(m.a)(t).call(this,e))).state={fName:"",lName:"",email:"",password:"",major1:"",major2:"",minor1:"",minor2:"",error:!1,errormsg:"",success:!1,startRadio:"fall",endRadio:"spring",startYear:2017,endYear:2021,programs:pe},a.handleChange=function(e,t){a.setState({form_elements:Object(ge.a)({},e,t)})},a.doRegister=function(e){var t=!1,n="Please enter your ",r=[];if(-1===a.state.email.indexOf("@")||-1===a.state.email.indexOf(".")||a.state.email.indexOf(".")-a.state.email.indexOf("@")<2)a.setState({success:!1,error:!0,errormsg:"Email is not formatted correctly."});else if(["fName","lName","email","password","major1"].map(function(e){return""===a.state[e]&&(t=!0,"fName"===e?r.push("first name"):"lName"===e?r.push("last name"):"email"===e?r.push("email"):"password"===e?r.push("password"):"major1"===e&&r.push("major")),0}),t){for(var l=0;l<r.length;l++)n+=r[l],l===r.length-1?n+=".":n+=", ",l===r.length-2&&(n+="and ");a.setState({error:!0,errormsg:n})}else{for(var i=["fName","lName","email","password","major1","major2","minor1","minor2"],o="",s=0;s<i.length;s++){var c=i[s];""!==a.state[c]&&(0!==s&&(o+="&"),o+=c+"="+a.state[c])}o+="&startTerm="+a.state.startYear.toString()+("fall"===a.state.startRadio?"3":"1"),o+="&endTerm="+a.state.endYear.toString()+("fall"===a.state.endRadio?"3":"1");var m=!1;fetch("/SycamoreScheduler/RegisterServlet",{method:"POST",headers:{"content-type":"application/x-www-form-urlencoded"},body:o}).then(function(e){return m=e.ok,e.json()}).then(function(e){m?a.setState({error:!1,errormsg:"",success:!0},function(){setTimeout(function(){a.props.history.push("/SignIn")},1e3)}):a.setState({error:!0,errormsg:e.error,success:!1})})}},a.fNameRef=r.a.createRef(),a.lNameRef=r.a.createRef(),a.emailRef=r.a.createRef(),a.passwordRef=r.a.createRef(),a.startyearref=r.a.createRef(),a.endyearref=r.a.createRef(),a.focusSomething=function(e){e.current.focus()},a.focusSomething.bind(Object(S.a)(Object(S.a)(a))),a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement(h.a,{flex:!0,direction:"column",justify:"center",align:"center"},r.a.createElement(h.a,{direction:"column",align:"center",justify:"start",gap:"large",pad:{vertical:"large",horizontal:"xlarge"},border:{side:"all",color:"main",size:"medium"},animation:{type:"fadeIn",delay:0,duration:500,size:"large"},style:{borderRadius:"20px"}},r.a.createElement(h.a,{flex:!0,width:"100%",align:"center",justify:"center"},r.a.createElement(C.a,{level:"1",margin:"0"},"Register")),r.a.createElement(h.a,{flex:!0,width:"100%",direction:"row",align:"center",justify:"between",gap:"large"},r.a.createElement(Y.a,null,r.a.createElement(x.a,{ref:this.fNameRef,id:"fName",size:"medium",focusIndicator:!0,placeholder:r.a.createElement(h.a,{onClick:function(){e.focusSomething(e.fNameRef)},direction:"row",align:"center",justify:"between",gap:"small"},r.a.createElement(R.a,{style:{fontFamily:"Inconsolata"},size:"large"},"first name"),r.a.createElement(R.a,{style:{fontFamily:"Inconsolata"},size:"large",color:"main"},"*")),value:this.state.fName,onChange:function(t){return e.setState({fName:t.target.value})}})),r.a.createElement(Y.a,null,r.a.createElement(x.a,{ref:this.lNameRef,id:"lName",size:"medium",focusIndicator:!0,placeholder:r.a.createElement(h.a,{onClick:function(){e.focusSomething(e.lNameRef)},direction:"row",align:"center",justify:"between",gap:"small"},r.a.createElement(R.a,{style:{fontFamily:"Inconsolata"},size:"large"},"last name"),r.a.createElement(R.a,{style:{fontFamily:"Inconsolata"},size:"large",color:"main"},"*")),value:this.state.lName,onChange:function(t){return e.setState({lName:t.target.value})}}))),r.a.createElement(h.a,{flex:!0,width:"100%",direction:"row",align:"center",justify:"between",gap:"large"},r.a.createElement(Y.a,null,r.a.createElement(x.a,{ref:this.emailRef,id:"email",size:"medium",focusIndicator:!0,placeholder:r.a.createElement(h.a,{onClick:function(){e.focusSomething(e.emailRef)},direction:"row",align:"center",justify:"between",gap:"small"},r.a.createElement(R.a,{style:{fontFamily:"Inconsolata"},size:"large"},"email"),r.a.createElement(R.a,{style:{fontFamily:"Inconsolata"},size:"large",color:"main"},"*")),value:this.state.email,onChange:function(t){return e.setState({email:t.target.value})}})),r.a.createElement(Y.a,null,r.a.createElement(x.a,{ref:this.passwordRef,id:"password",size:"medium",type:"password",focusIndicator:!0,placeholder:r.a.createElement(h.a,{onClick:function(){e.focusSomething(e.passwordRef)},direction:"row",align:"center",justify:"between",gap:"small"},r.a.createElement(R.a,{style:{fontFamily:"Inconsolata"},size:"large"},"password"),r.a.createElement(R.a,{style:{fontFamily:"Inconsolata"},size:"large",color:"main"},"*")),value:this.state.password,onChange:function(t){return e.setState({password:t.target.value})}}))),r.a.createElement(h.a,{flex:!0,width:"100%",direction:"row",align:"center",justify:"between",gap:"large"},r.a.createElement(h.a,{flex:!0,width:"100%",direction:"column",align:"start",justify:"center",gap:"small"},r.a.createElement(R.a,{fontFamily:"Inconsolata",size:"large"},"start term"),r.a.createElement(h.a,{flex:!0,width:"100%",direction:"row",align:"center",justify:"between"},r.a.createElement(he.a,{label:"fall",name:"fa_start",value:"fall",checked:"fall"===this.state.startRadio,onChange:function(t){console.log("Start Term: "+t.target.value),e.setState({startRadio:t.target.value})}}),r.a.createElement(he.a,{label:"spring",name:"sp_start",value:"spring",checked:"spring"===this.state.startRadio,onChange:function(t){console.log("Start Term: "+t.target.value),e.setState({startRadio:t.target.value})}})),r.a.createElement(h.a,{flex:!0},r.a.createElement(x.a,{ref:this.startyearref,id:"startyear",type:"number",focusIndicator:!0,value:this.state.startYear,onChange:function(t){return e.setState({startYear:t.target.value})}}))),r.a.createElement(h.a,{flex:!0,direction:"column",align:"start",justify:"center",gap:"small"},r.a.createElement(R.a,{fontFamily:"Inconsolata",size:"large"},"end term"),r.a.createElement(h.a,{flex:!0,width:"100%",direction:"row",align:"center",justify:"between"},r.a.createElement(he.a,{label:"fall",name:"fa_end",value:"fall",checked:"fall"===this.state.endRadio,onChange:function(t){console.log("End Term: "+t.target.value),e.setState({endRadio:t.target.value})}}),r.a.createElement(he.a,{label:"spring",name:"sp_end",value:"spring",checked:"spring"===this.state.endRadio,onChange:function(t){console.log("End Term: "+t.target.value),e.setState({endRadio:t.target.value})}})),r.a.createElement(h.a,{flex:!0},r.a.createElement(x.a,{ref:this.endyearref,id:"endyear",type:"number",focusIndicator:!0,value:this.state.endYear,onChange:function(t){return e.setState({endYear:t.target.value})}})))),r.a.createElement(h.a,{flex:!0,width:"100%",direction:"row",align:"center",justify:"between",gap:"large"},r.a.createElement(J.a,{size:"small",placeholder:r.a.createElement(R.a,{size:"large"},"major"),value:this.state.major1,options:this.state.programs,onChange:function(t){e.setState({major1:t.value})},onClose:function(){return e.setState({programs:pe})},onSearch:function(t){var a=new RegExp(t,"i");e.setState({programs:pe.filter(function(e){return a.test(e)})})}}),r.a.createElement(J.a,{size:"small",placeholder:r.a.createElement(R.a,{size:"large"},"minor"),value:this.state.minor1,options:this.state.programs,onChange:function(t){e.setState({minor1:t.value})},onClose:function(){return e.setState({programs:pe})},onSearch:function(t){var a=new RegExp(t,"i");e.setState({programs:pe.filter(function(e){return a.test(e)})})}})),this.state.error&&r.a.createElement(h.a,{flex:!0,background:"main",direction:"column",align:"center",justify:"center",pad:"medium",style:{borderRadius:"10px"}},r.a.createElement(R.a,{color:"white"},this.state.errormsg)),this.state.success&&r.a.createElement(h.a,{flex:!0,background:"neutral-3",animation:{type:"fadeIn",delay:0,duration:700,size:"large"},direction:"column",align:"center",justify:"center",pad:"small",style:{borderRadius:"10px"}},r.a.createElement(R.a,{color:"white"},"Success!")),r.a.createElement(h.a,{flex:!0,width:"100%",direction:"row",align:"center",justify:"center",gap:"medium"},r.a.createElement(v.a,{path:"/",hoverIndicator:!0,color:"dark-2",label:r.a.createElement(ue.a,{color:"main",size:"large"})}),r.a.createElement(j.a,{hoverIndicator:!0,label:r.a.createElement(de.a,{size:"large",color:"green"}),color:"dark-2",onClick:function(t){e.doRegister(t)}}))))}}]),t}(n.Component);function Se(){var e=Object(d.a)(["\n\t\t\tborder-radius: ",";\n\t\t"]);return Se=function(){return e},e}function be(){var e=Object(d.a)(["\n\t\t\tflex: 0 0;\n\t\t\tpadding-top: ",";\n\t\t\tpadding-bottom: ",";\n\t\t\tbox-shadow: 0;\n\t\t\tflex-wrap: nowrap;\n\t\t  "]);return be=function(){return e},e}var ye={global:{colors:{main:"#ff3300",darker:"#d21e32"},font:{family:"Karla",color:"#ffffff"},hover:{background:"inherit"}},button:{color:"dark-1",border:{color:"main"}},anchor:{color:"#ff3300",hover:{textDecoration:"none"}},tabs:{background:"light-2",header:{background:"light-2",extend:function(e){var t=e.theme;return Object(E.a)(be(),t.global.edgeSize.medium,t.global.edgeSize.medium)}},gap:"medium",extend:"\n\t\tdiv[role='tabpanel'] {\n\t\t\toverflow-y: auto;\n\t\t\toverflow-x: hidden;\n\t\t\tpadding-bottom: 10%;\n\t\t\tfont-family: 'Inconsolata';\n\t\t\tflex-wrap: nowrap;\n\t\t}\n\t\tdiv[role='tabpanel'] * {\n\t\t\twhite-space: nowrap;\n\t\t}\n        "},tab:{active:{background:"main",color:"white"},color:"main",background:"white",hover:{background:"pink",border:{side:"all",color:"main",size:"small"},color:"white"},border:void 0,margin:void 0,pad:{bottom:void 0,horizontal:"xsmall"},extend:function(e){var t=e.theme;return Object(E.a)(Se(),t.global.control.border.radius)}},textInput:{extend:"\n\t\t\tfont-family: 'Inconsolata';\n\t\t"},select:{extend:"\n\t\t\tfont-family: 'Inconsolata';\n\t\t"},radioButton:{size:"18px",border:{color:"darker"},color:"darker",hover:{border:{color:"main"}},check:{border:{color:"main"},color:{light:"main"}},icon:{size:"full"},extend:"\n\t\t\tfont-family: 'Inconsolata';\n\t\t\tfont-weight: normal;\n\t\t"}},ve=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(c.a)(this,Object(m.a)(t).call(this,e))).onSignIn=function(e){setTimeout(function(){a.setState({signedIn:!0,userEmail:e})},1e3)},a.onSignOut=function(){a.setState({signedIn:!1,userEmail:""})},a.state={signedIn:!1,userEmail:""},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement(g.a,{basename:"/SycamoreScheduler"},r.a.createElement(p.a,{theme:ye,full:!0},r.a.createElement(n.Fragment,null,r.a.createElement(function(){return r.a.createElement(h.a,{fill:!0},r.a.createElement(f.a,{exact:!0,path:"/",render:function(t){return r.a.createElement(ce,Object.assign({onSignOut:e.onSignOut,signedIn:e.state.signedIn},t))}}),r.a.createElement(f.a,{path:"/Home",render:function(t){return r.a.createElement(ne,Object.assign({signedIn:e.state.signedIn,email:e.state.userEmail},t))}}),r.a.createElement(f.a,{path:"/SignIn",render:function(t){return r.a.createElement(fe,Object.assign({onSignIn:e.onSignIn},t))}}),r.a.createElement(f.a,{path:"/Register",component:Ee}))},null))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(ve,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[61,2,1]]]);
//# sourceMappingURL=main.766411ea.chunk.js.map