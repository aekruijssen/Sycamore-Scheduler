(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{53:function(e,t,a){e.exports=a(72)},70:function(e){e.exports=["ACAD","ACCT","ACMD","ACTN","ADNT","AEST","AHIS","ALI","AME","AMST","ANSC","ANST","ANTH","ARAB","ARCG","ARCH","ARLT","ART","ARTL","ARTS","ASCJ","ASTE","ASTR","BAEP","BIOC","BISC","BKN","BME","BPMK","BUAD","BUCO","BUS","BVC","CBG","CBY","CE","CHE","CHEM","CLAS","CMGT","CMPP","CNB","CNMA","CNTV","COLT","COMM","CORE","CRIT","CSCI","CSLC","CTAN","CTCS","CTIN","CTPR","CTWR","CXPT","DANC","DENT","DES","DHYG","DIAG","DNCR","DNTR","DPBL","DRNS","DSM","DSO","DSR","EALC","EASC","ECON","EDCO","EDCR","EDHP","EDPT","EDUC","EE","ENE","ENGL","ENGR","ENGV","ENST","FBE","FIM","FINE","FREN","FSEM","GCT","GDEN","GEOG","GEOL","GEP","GEPN","GERD","GERM","GERO","GESM","GPG","GPH","GR","GRSC","GSBA","HBIO","HCDA","HEBR","HINQ","HIST","HMGT","HP","HRM","IDSN","IML","INDS","INF","INTD","IR","IRAN","ISE","ITAL","ITP","JOUR","JS","LAT","LAW","LBST","LIFE","LIM","LING","MASC","MATH","MBPH","MDA","MDES","MED","MEDB","MEDK","MEDS","MICB","MKT","MOR","MPEM","MPGU","MPHY","MPKS","MPPM","MPST","MPTX","MPVA","MPW","MPWP","MS","MSCR","MSS","MTAL","MTEC","MUCD","MUCM","MUCO","MUEN","MUHL","MUIN","MUJZ","MUS","MUSC","NAUT","NEUR","NIIN","NSC","NSCI","NURS","OCST","OFP","OFPM","OPER","OPR","OS","OT","PAIN","PATH","PCPA","PEDO","PERI","PHAR","PHBI","PHED","PHIL","PHRD","PHYS","PJMT","PLUS","PM","PMEP","POIR","PORT","POSC","PPD","PPDE","PPDP","PR","PSC","PSCI","PSYC","PT","PTBK","PTE","PUBD","QBIO","QREA","RED","REL","RSCI","RXRS","SAE","SANA","SCIN","SCIS","SCOR","SCRM","SI","SLL","SOCI","SOWK","SPAN","SSCI","SWDP","SWMS","THTR","TRGN","USC","VISS","WCT","WRIT"]},72:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(9),i=a.n(l),o=a(20),s=a(21),c=a(25),m=a(22),u=a(26),d=a(37),f=a(100),g=a(96),h=a(105),E=a(99),p=a(1),S=a(11),b=a(12),y=a(16),C=a(13),I=a(15),v=a(17),w=a(110),j=a(91),O=a(90),R=a(104),k=a(92),N=a(109),P=a(81),x=a(108),M=a(107),T=a(106),z=a(101),A=a(82),D=function(e){return r.a.createElement(h.a,{direction:"column",align:"center",justify:"center",width:"medium",height:"xsmall"},r.a.createElement(N.a,{fill:!0,onClick:function(){e.clickFunc(e.id)},label:r.a.createElement("strong",null,e.name),hoverIndicator:!0,style:{background:"white",radius:"4px",border:"3px solid main",fontSize:"30px"}}))},H=function(e){function t(){var e,a;Object(S.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(y.a)(this,(e=Object(C.a)(t)).call.apply(e,[this].concat(r)))).state={clickFunc:a.props.clickFunc,list:a.props.defList},a}return Object(I.a)(t,e),Object(b.a)(t,[{key:"componentWillReceiveProps",value:function(e){this.setState({list:e.list})}},{key:"render",value:function(){var e=this,t=0;return null!==this.state.list&&r.a.createElement(P.a,{items:this.state.list,step:20},function(a){return r.a.createElement(h.a,{align:"center",pad:"small",key:(t++).toString()},r.a.createElement(D,{clickFunc:e.state.clickFunc,name:a,id:a}))})}}]),t}(n.Component),F=function(e){var t=e.label;return r.a.createElement(h.a,{direction:"row",align:"center",justify:"center",margin:"xsmall",pad:"2%"},r.a.createElement(x.a,{size:"xlarge"},r.a.createElement("strong",null,t)))},G=function(e){function t(e){var a;return Object(S.a)(this,t),(a=Object(y.a)(this,Object(C.a)(t).call(this,e))).state={courseTab:0,search:"",allClasses:e.classes,searchClasses:e.classes},a.onSearch=function(e){console.log("New search query:\t"+e);var t=new RegExp(e,"i");this.setState({search:e,searchClasses:this.state.allClasses.filter(function(e){return t.test(e)})})}.bind(Object(v.a)(Object(v.a)(a))),a}return Object(I.a)(t,e),Object(b.a)(t,[{key:"render",value:function(){var e=this,t=this.state.courseTab;return r.a.createElement(M.a,{activeIndex:t,onActive:function(t){e.setState({courseTab:t})}},r.a.createElement(T.a,{title:r.a.createElement(A.a,{size:"large"})},r.a.createElement(h.a,{direction:"column",align:"center",justify:"start",style:{position:"sticky",top:"0",zIndex:500},background:"light-2",pad:{horizontal:"medium",bottom:"medium"}},r.a.createElement(R.a,{level:"2"},"find any class"),r.a.createElement(z.a,{placeholder:"search",background:"white",value:this.state.search,onChange:function(t){var a=t.target.value;e.onSearch(a)},style:{fontFamily:"Inconsolata"}})),r.a.createElement(h.a,{className:"classBox",direction:"column",align:"center",justify:"start",pad:"small",animation:{type:"fadeIn",size:"xlarge"}},r.a.createElement(H,{clickFunc:this.props.clickFunc,defList:this.state.allClasses,list:this.state.searchClasses}))),r.a.createElement(T.a,{title:r.a.createElement(F,{label:"Major"})}),r.a.createElement(T.a,{title:r.a.createElement(F,{label:"Minor"})}))}}]),t}(n.Component),B=a(85),L=a(86),U=a(87),W=a(88),J=a(89),K=[{term:"2017-3",classes:["CSCI 103","CSCI 109","WRIT 150","CHEM 105a","MATH 226"]},{term:"2018-1",classes:["CSCI 104","CSCI 170","GESM 121","CHEM 115b","MATH 225"]},{term:"2018-3",classes:["CSCI 201","CSCI 270","PSYC 100","CHEM 322a"]},{term:"2019-1",classes:["CSCI 356","EE 109","BISC 220","MATH 407"]}],Y=0,V=function(e){function t(){return Object(S.a)(this,t),Object(y.a)(this,Object(C.a)(t).apply(this,arguments))}return Object(I.a)(t,e),Object(b.a)(t,[{key:"render",value:function(){return r.a.createElement(h.a,{flex:!0,direction:"column",justify:"start",align:"center",animation:{type:"fadeIn",delay:50,duration:750,size:"large"}},r.a.createElement(R.a,{level:"1",margin:{top:"large",bottom:"0",left:"large"}},"Course Plan"),r.a.createElement(h.a,{flex:!0,direction:"row",align:"start",justify:"center"},K.map(function(e){return r.a.createElement(h.a,{key:Y++,flex:!0,margin:"large"},r.a.createElement(B.a,{caption:e.term},r.a.createElement(L.a,null,r.a.createElement(U.a,null,r.a.createElement(W.a,null,r.a.createElement(R.a,{level:"3"},e.term)))),r.a.createElement(J.a,null,e.classes.map(function(e){return r.a.createElement(U.a,{key:Y++},r.a.createElement(W.a,null,r.a.createElement(x.a,{size:"large"},e)))}))))})))}}]),t}(n.Component),Q=function(e){function t(){return Object(S.a)(this,t),Object(y.a)(this,Object(C.a)(t).apply(this,arguments))}return Object(I.a)(t,e),Object(b.a)(t,[{key:"render",value:function(){return r.a.createElement(h.a,{flex:!0,direction:"column",justify:"center",align:"center",animation:{type:"fadeIn",delay:50,duration:750,size:"large"}},r.a.createElement(R.a,{level:"1"},"Profile"),r.a.createElement(O.a,{path:"/",hoverIndicator:!0,label:"Go back to welcome page ... "}))}}]),t}(n.Component),X=a(103),q=function(e){function t(){var e,a;Object(S.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(y.a)(this,(e=Object(C.a)(t)).call.apply(e,[this].concat(r)))).state={classInfo:a.props.defaultInfo},a}return Object(I.a)(t,e),Object(b.a)(t,[{key:"componentWillReceiveProps",value:function(e){this.setState({classInfo:e.classInfo})}},{key:"render",value:function(){var e=this,t=this.state.classInfo;return r.a.createElement(h.a,{flex:!0,direction:"column",justify:"start",align:"start",pad:"5%",animation:{type:"fadeIn",delay:50,duration:750,size:"large"},style:{overflow:"auto"}},r.a.createElement(h.a,{flex:!0,direction:"column",align:"start",justify:"start"},r.a.createElement(R.a,{level:"1"},t.degreeName+" "+t.classNumber),r.a.createElement(R.a,{level:"2"},t.className),r.a.createElement(X.a,null,t.summary),r.a.createElement(N.a,{onClick:function(){return e.props.socketFunc(t)},hoverIndicator:!0,label:"Add to course plan ... ",margin:{top:"10%"},pad:"large"})))}}]),t}(n.Component),Z=function(e){return r.a.createElement(h.a,Object.assign({flex:!0,direction:"row",align:"center",justify:"between",background:"darker",pad:"large",animation:{type:"slideDown",delay:0,duration:500,size:"xlarge"},style:{zIndex:"100"}},e))},$=function(e){return r.a.createElement(w.a,Object.assign({onClick:e.func,color:"light",size:"xxlarge"},e),e.text)},_=function(e){function t(e){var a;Object(S.a)(this,t),(a=Object(y.a)(this,Object(C.a)(t).call(this,e))).displayClass=function(e){for(var t=a.state.classes,n=0;n<t.length;n++){var r=Object.keys(t[n])[0];r===e&&(console.log("Display "+r),a.setState({display:"class",whichClass:t[n][r]}))}},a.sendSocketData=function(e){console.log("----------------------------------"),console.log("Sending socket data for class "+e.degreeName+" "+e.classNumber),console.log(this.state.socket),this.state.socket.send("("+(this.state.email||"guest")+", "+e.degreeName+" "+e.classNumber+", 2018-3, add)")}.bind(Object(v.a)(Object(v.a)(a)));var n=new WebSocket("ws://localhost:8080/SycamoreScheduler/ss1");n.onopen=function(e){console.log("WebSocket Connected!",e)},n.onmessage=function(e){console.log("Received:",e),a.setState({socketdata:JSON.stringify(e)})},n.onclose=function(e){console.log("Closed!",e)},n.onerror=function(e){console.log("Error:",e)},a.state={showSidebar:!0,display:"none",whichClass:null,signedIn:e.signedIn,email:e.email,classes:null,classNames:null,socket:n,socketdata:""};var r=!1;return a.loadClasses=function(){var e=this;fetch("/SycamoreScheduler/ClassesServlet",{method:"GET"}).then(function(e){return r=e.ok,e.json()}).then(function(t){if(r){console.log(t);var a=t.map(function(e){var t=Object.keys(e)[0];return e[t].degreeName+" "+e[t].classNumber});e.setState({classes:t,classNames:a},function(){console.log("ClassesServlet returned status 200"),console.log("Classes stored in this.state.classes"),console.log("Class names:\n"),console.log(e.state.classNames)})}else console.log("ClassesServlet did not return status 200."),console.log(JSON.stringify(t))})}.bind(Object(v.a)(Object(v.a)(a))),a.loadClasses(),a}return Object(I.a)(t,e),Object(b.a)(t,[{key:"render",value:function(){var e=this,t=this.state,a=t.showSidebar,n=t.display;t.email;return r.a.createElement(j.a.Consumer,null,function(t){return r.a.createElement(h.a,{flex:!0,direction:"column",align:"stretch",justify:"start"},r.a.createElement(Z,null,r.a.createElement(O.a,{plain:!0,path:"/"},r.a.createElement(R.a,{level:"1",color:"white"},"Sycamore Scheduler")),r.a.createElement(h.a,{direction:"row",align:"center",justify:"end"},r.a.createElement($,{margin:{right:"large"},text:"Classes",func:function(){return e.setState({showSidebar:!e.state.showSidebar})}}),e.state.signedIn&&r.a.createElement($,{margin:{right:"large"},text:"Course Plan",func:function(){return e.setState({display:"coursePlan"})}}),e.state.signedIn&&r.a.createElement($,{text:"Profile",func:function(){return e.setState({display:"profile"})}}))),r.a.createElement(h.a,{fill:!0,direction:"row",justify:"start",align:"stretch",animation:{type:"fadeIn",delay:500,duration:500,size:"large"}},null!==e.state.classNames&&r.a.createElement(k.a,{direction:"horizontal",open:a},r.a.createElement(h.a,{width:"medium",animation:{type:"slideRight",delay:500,duration:500,size:"large"},style:{flexWrap:"nowrap",minHeight:"100%"},background:"light-2"},r.a.createElement(G,{classes:e.state.classNames,fullInfo:e.state.classes,clickFunc:e.displayClass}))),"coursePlan"===n&&r.a.createElement(V,null),"profile"===n&&r.a.createElement(Q,null),"none"===n&&r.a.createElement(h.a,{flex:!0,direction:"column",justify:"center",align:"center",animation:{type:"fadeIn",delay:500,duration:500,size:"large"}},r.a.createElement(R.a,{level:"1"},"Click on a class to view details")),"class"===n&&null!==e.state.whichClass&&r.a.createElement(q,{socketFunc:e.sendSocketData,defaultInfo:e.state.whichClass,classInfo:e.state.whichClass})))})}}]),t}(n.Component),ee=a(102),te=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(c.a)(this,Object(m.a)(t).call(this,e))).state={signedIn:a.props.signedIn},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement(h.a,{flex:!0,direction:"row",align:"center",justify:"center",gap:"small"},r.a.createElement(h.a,{height:"small",width:"small",animation:{type:"slideRight",delay:0,duration:500,size:"large"},border:{side:"all",size:"small",color:"dark-1"},pad:"small",background:"main",style:{borderRadius:"20px"}},r.a.createElement(ee.a,{fit:"contain",src:"/SycamoreScheduler/leaf.png"})),r.a.createElement(h.a,{direction:"column",justify:"center",align:"center",height:"small"},r.a.createElement(h.a,{flex:!0,direction:"row",pad:{top:"medium",horizontal:"medium",bottom:"0"},gap:"small"},r.a.createElement(h.a,{pad:"0",margin:"0",animation:{type:"slideDown",delay:0,duration:500,size:"large"}},r.a.createElement(R.a,{margin:"0",level:"1",color:"black"},"Sycamore")),r.a.createElement(h.a,{pad:"0",margin:"0",animation:{type:"fadeIn",delay:200,duration:400,size:"large"}},r.a.createElement(R.a,{margin:"0",level:"1",color:"main"},"Scheduler"))),r.a.createElement(h.a,{direction:"row",align:"center",justify:"center",animation:{type:"slideUp",delay:0,duration:500,size:"large"},margin:{bottom:"large"}},!this.state.signedIn&&r.a.createElement(O.a,{path:"/Register",hoverIndicator:!0,label:r.a.createElement(x.a,{size:"large"},r.a.createElement("strong",null,"Register")),color:"main",margin:{right:"medium"}}),!this.state.signedIn&&r.a.createElement(O.a,{path:"/SignIn",hoverIndicator:!0,label:r.a.createElement(x.a,{size:"large"},r.a.createElement("strong",null,"Sign In")),color:"main",margin:{right:"medium"}}),this.state.signedIn&&r.a.createElement(N.a,{hoverIndicator:!0,label:r.a.createElement(x.a,{size:"large"},r.a.createElement("strong",null,"Sign Out")),color:"main",onClick:function(){e.props.onSignOut()},margin:{right:"medium"}}),!this.state.signedIn&&r.a.createElement(O.a,{path:"/Home",hoverIndicator:!0,label:r.a.createElement(x.a,{size:"large"},r.a.createElement("strong",null,"Guest")),color:"main"}),this.state.signedIn&&r.a.createElement(O.a,{path:"/Home",hoverIndicator:!0,label:r.a.createElement(x.a,{size:"large"},r.a.createElement("strong",null,"Home")),color:"main"}))))}}]),t}(n.Component),ae=a(27),ne=a(93),re=a(94),le=a(95),ie=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(c.a)(this,Object(m.a)(t).call(this,e))).doLogin=function(e){if(""===a.state.email||""===a.state.password){var t="Please enter your ";return""===a.state.email&&(t+="email"),""===a.state.password?(""===a.state.email&&(t+=" and "),t+="password."):t+=".",void a.setState({error:!0,errormsg:t})}if(-1===a.state.email.indexOf("@")||-1===a.state.email.indexOf(".")||a.state.email.indexOf(".")-a.state.email.indexOf("@")<2)a.setState({success:!1,error:!0,errormsg:"Email is not formatted correctly."});else{var n="email="+a.state.email+"&password="+a.state.password,r=!1;fetch("/SycamoreScheduler/LoginServlet",{method:"POST",headers:{"content-type":"application/x-www-form-urlencoded"},body:n}).then(function(e){return r=e.ok,e.json()}).then(function(e){r?a.setState({success:!0,error:!1,errormsg:""},function(){a.props.onSignIn(a.state.email),setTimeout(function(){a.props.history.push("/Home")},1e3)}):a.setState({success:!1,error:!0,errormsg:e.error})})}},a.handleChange=function(e,t){"email"===e?a.setState({email:t.target.value}):"password"===e&&a.setState({password:t.target.value})},a.state={email:"",password:"",error:!1,errormsg:"",success:!1},a.emailRef=r.a.createRef(),a.passwordRef=r.a.createRef(),a.focusSomething=function(e){e.current.focus()},a.focusSomething.bind(Object(ae.a)(Object(ae.a)(a))),a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement(h.a,{flex:!0,direction:"column",justify:"center",align:"center"},r.a.createElement(h.a,{direction:"column",align:"center",justify:"start",pad:"xlarge",gap:"large",border:{side:"all",color:"main",size:"medium"},style:{borderRadius:"20px"},animation:{type:"fadeIn",delay:0,duration:500,size:"large"}},r.a.createElement(R.a,{level:"1",margin:"0"},"Sign In"),r.a.createElement(ne.a,null,r.a.createElement(z.a,{id:"email",ref:this.emailRef,size:"medium",focusIndicator:!0,placeholder:r.a.createElement(h.a,{onClick:function(){e.focusSomething(e.emailRef)},direction:"row",align:"center",justify:"between",gap:"small"},r.a.createElement(x.a,{style:{fontFamily:"Inconsolata"},size:"large"},"email"),r.a.createElement(x.a,{style:{fontFamily:"Inconsolata"},size:"large",color:"main"},"*")),value:this.state.email,onChange:function(t){e.handleChange("email",t)}})),r.a.createElement(ne.a,null,r.a.createElement(z.a,{id:"password",ref:this.passwordRef,size:"medium",type:"password",focusIndicator:!0,placeholder:r.a.createElement(h.a,{onClick:function(){e.focusSomething(e.passwordRef)},direction:"row",align:"center",justify:"between",gap:"small"},r.a.createElement(x.a,{style:{fontFamily:"Inconsolata"},size:"large"},"password"),r.a.createElement(x.a,{style:{fontFamily:"Inconsolata"},size:"large",color:"main"},"*")),value:this.state.password,onChange:function(t){e.handleChange("password",t)}})),this.state.error&&r.a.createElement(h.a,{flex:!0,background:"main",direction:"column",align:"center",justify:"center",pad:"medium",style:{borderRadius:"10px"}},r.a.createElement(x.a,{color:"white"},this.state.errormsg)),this.state.success&&r.a.createElement(h.a,{flex:!0,background:"neutral-3",animation:{type:"fadeIn",delay:0,duration:700,size:"large"},direction:"column",align:"center",justify:"center",pad:"small",style:{borderRadius:"10px"}},r.a.createElement(x.a,{color:"white"},"Success!")),r.a.createElement(h.a,{direction:"row",align:"center",justify:"center",gap:"medium"},r.a.createElement(O.a,{path:"/",hoverIndicator:!0,color:"dark-2",label:r.a.createElement(re.a,{color:"main",size:"large"})}),r.a.createElement(N.a,{hoverIndicator:!0,label:r.a.createElement(le.a,{size:"large",color:"green"}),color:"dark-2",onClick:function(t){e.doLogin(t)}}))))}}]),t}(n.Component),oe=a(67),se=a(97),ce=a(70),me=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(c.a)(this,Object(m.a)(t).call(this,e))).state={fName:"",lName:"",email:"",password:"",major1:"",major2:"",minor1:"",minor2:"",error:!1,errormsg:"",success:!1,programs:ce},a.handleChange=function(e,t){a.setState({form_elements:Object(oe.a)({},e,t)})},a.doRegister=function(e){var t=!1,n="Please enter your ",r=[];if(-1===a.state.email.indexOf("@")||-1===a.state.email.indexOf(".")||a.state.email.indexOf(".")-a.state.email.indexOf("@")<2)a.setState({success:!1,error:!0,errormsg:"Email is not formatted correctly."});else if(["fName","lName","email","password","major1"].map(function(e){return""===a.state[e]&&(t=!0,"fName"===e?r.push("first name"):"lName"===e?r.push("last name"):"email"===e?r.push("email"):"password"===e?r.push("password"):"major1"===e&&r.push("major")),0}),t){for(var l=0;l<r.length;l++)n+=r[l],l===r.length-1?n+=".":n+=", ",l===r.length-2&&(n+="and ");a.setState({error:!0,errormsg:n})}else{for(var i=["fName","lName","email","password","major1","major2","minor1","minor2"],o="",s=0;s<i.length;s++){var c=i[s];""!==a.state[c]&&(0!==s&&(o+="&"),o+=c+"="+a.state[c])}var m=!1;fetch("/SycamoreScheduler/RegisterServlet",{method:"POST",headers:{"content-type":"application/x-www-form-urlencoded"},body:o}).then(function(e){return m=e.ok,e.json()}).then(function(e){m?a.setState({error:!1,errormsg:"",success:!0},function(){setTimeout(function(){a.props.history.push("/SignIn")},1e3)}):a.setState({error:!0,errormsg:e.error,success:!1})})}},a.fNameRef=r.a.createRef(),a.lNameRef=r.a.createRef(),a.emailRef=r.a.createRef(),a.passwordRef=r.a.createRef(),a.focusSomething=function(e){e.current.focus()},a.focusSomething.bind(Object(ae.a)(Object(ae.a)(a))),a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement(h.a,{flex:!0,direction:"column",justify:"center",align:"center"},r.a.createElement(h.a,{direction:"column",align:"center",justify:"start",gap:"large",pad:{vertical:"large",horizontal:"xlarge"},border:{side:"all",color:"main",size:"medium"},animation:{type:"fadeIn",delay:0,duration:500,size:"large"},style:{borderRadius:"20px"}},r.a.createElement(h.a,{flex:!0,width:"100%",align:"center",justify:"center"},r.a.createElement(R.a,{level:"1",margin:"0"},"Register")),r.a.createElement(h.a,{flex:!0,width:"100%",direction:"row",align:"center",justify:"between",gap:"large"},r.a.createElement(ne.a,null,r.a.createElement(z.a,{ref:this.fNameRef,id:"fName",size:"medium",focusIndicator:!0,placeholder:r.a.createElement(h.a,{onClick:function(){e.focusSomething(e.fNameRef)},direction:"row",align:"center",justify:"between",gap:"small"},r.a.createElement(x.a,{style:{fontFamily:"Inconsolata"},size:"large"},"first name"),r.a.createElement(x.a,{style:{fontFamily:"Inconsolata"},size:"large",color:"main"},"*")),value:this.state.fName,onChange:function(t){return e.setState({fName:t.target.value})}})),r.a.createElement(ne.a,null,r.a.createElement(z.a,{ref:this.lNameRef,id:"lName",size:"medium",focusIndicator:!0,placeholder:r.a.createElement(h.a,{onClick:function(){e.focusSomething(e.lNameRef)},direction:"row",align:"center",justify:"between",gap:"small"},r.a.createElement(x.a,{style:{fontFamily:"Inconsolata"},size:"large"},"last name"),r.a.createElement(x.a,{style:{fontFamily:"Inconsolata"},size:"large",color:"main"},"*")),value:this.state.lName,onChange:function(t){return e.setState({lName:t.target.value})}}))),r.a.createElement(h.a,{flex:!0,width:"100%",direction:"row",align:"center",justify:"between",gap:"large"},r.a.createElement(ne.a,null,r.a.createElement(z.a,{ref:this.emailRef,id:"email",size:"medium",focusIndicator:!0,placeholder:r.a.createElement(h.a,{onClick:function(){e.focusSomething(e.emailRef)},direction:"row",align:"center",justify:"between",gap:"small"},r.a.createElement(x.a,{style:{fontFamily:"Inconsolata"},size:"large"},"email"),r.a.createElement(x.a,{style:{fontFamily:"Inconsolata"},size:"large",color:"main"},"*")),value:this.state.email,onChange:function(t){return e.setState({email:t.target.value})}})),r.a.createElement(ne.a,null,r.a.createElement(z.a,{ref:this.passwordRef,id:"password",size:"medium",type:"password",focusIndicator:!0,placeholder:r.a.createElement(h.a,{onClick:function(){e.focusSomething(e.passwordRef)},direction:"row",align:"center",justify:"between",gap:"small"},r.a.createElement(x.a,{style:{fontFamily:"Inconsolata"},size:"large"},"password"),r.a.createElement(x.a,{style:{fontFamily:"Inconsolata"},size:"large",color:"main"},"*")),value:this.state.password,onChange:function(t){return e.setState({password:t.target.value})}}))),r.a.createElement(h.a,{flex:!0,width:"100%",direction:"row",align:"center",justify:"between",gap:"large"},r.a.createElement(se.a,{size:"small",placeholder:r.a.createElement(x.a,{size:"large"},"major"),value:this.state.major1,options:this.state.programs,onChange:function(t){e.setState({major1:t.value})},onClose:function(){return e.setState({programs:ce})},onSearch:function(t){var a=new RegExp(t,"i");e.setState({programs:ce.filter(function(e){return a.test(e)})})}}),r.a.createElement(se.a,{size:"small",placeholder:r.a.createElement(x.a,{size:"large"},"minor"),value:this.state.minor1,options:this.state.programs,onChange:function(t){e.setState({minor1:t.value})},onClose:function(){return e.setState({programs:ce})},onSearch:function(t){var a=new RegExp(t,"i");e.setState({programs:ce.filter(function(e){return a.test(e)})})}})),this.state.error&&r.a.createElement(h.a,{flex:!0,background:"main",direction:"column",align:"center",justify:"center",pad:"medium",style:{borderRadius:"10px"}},r.a.createElement(x.a,{color:"white"},this.state.errormsg)),this.state.success&&r.a.createElement(h.a,{flex:!0,background:"neutral-3",animation:{type:"fadeIn",delay:0,duration:700,size:"large"},direction:"column",align:"center",justify:"center",pad:"small",style:{borderRadius:"10px"}},r.a.createElement(x.a,{color:"white"},"Success!")),r.a.createElement(h.a,{flex:!0,width:"100%",direction:"row",align:"center",justify:"center",gap:"medium"},r.a.createElement(O.a,{path:"/",hoverIndicator:!0,color:"dark-2",label:r.a.createElement(re.a,{color:"main",size:"large"})}),r.a.createElement(N.a,{hoverIndicator:!0,label:r.a.createElement(le.a,{size:"large",color:"green"}),color:"dark-2",onClick:function(t){e.doRegister(t)}}))))}}]),t}(n.Component);function ue(){var e=Object(d.a)(["\n\t\t\tborder-radius: ",";\n\t\t"]);return ue=function(){return e},e}function de(){var e=Object(d.a)(["\n\t\t\tflex: 0 0;\n\t\t\tpadding-top: ",";\n\t\t\tpadding-bottom: ",";\n\t\t\tbox-shadow: 0;\n\t\t\tflex-wrap: nowrap;\n\t\t  "]);return de=function(){return e},e}var fe={global:{colors:{main:"#ff3300",darker:"#d21e32"},font:{family:"Karla",color:"#ffffff"},hover:{background:"inherit"}},button:{color:"dark-1",border:{color:"main"}},anchor:{color:"#ff3300",hover:{textDecoration:"none"}},tabs:{background:"light-2",header:{background:"light-2",extend:function(e){var t=e.theme;return Object(p.a)(de(),t.global.edgeSize.medium,t.global.edgeSize.medium)}},gap:"medium",extend:"\n\t\tdiv[role='tabpanel'] {\n\t\t\toverflow-y: auto;\n\t\t\toverflow-x: hidden;\n\t\t\tpadding-bottom: 10%;\n\t\t\tfont-family: 'Inconsolata';\n\t\t\tflex-wrap: nowrap;\n\t\t}\n\t\tdiv[role='tabpanel'] * {\n\t\t\twhite-space: nowrap;\n\t\t}\n        "},tab:{active:{background:"main",color:"white"},color:"main",background:"white",hover:{background:"pink",border:{side:"all",color:"main",size:"small"},color:"white"},border:void 0,margin:void 0,pad:{bottom:void 0,horizontal:"xsmall"},extend:function(e){var t=e.theme;return Object(p.a)(ue(),t.global.control.border.radius)}}},ge=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(c.a)(this,Object(m.a)(t).call(this,e))).onSignIn=function(e){setTimeout(function(){a.setState({signedIn:!0,userEmail:e})},1e3)},a.onSignOut=function(){a.setState({signedIn:!1,userEmail:""})},a.state={signedIn:!1,userEmail:""},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement(g.a,{basename:"/SycamoreScheduler"},r.a.createElement(E.a,{theme:fe,full:!0},r.a.createElement(n.Fragment,null,r.a.createElement(function(){return r.a.createElement(h.a,{fill:!0},r.a.createElement(f.a,{exact:!0,path:"/",render:function(t){return r.a.createElement(te,Object.assign({onSignOut:e.onSignOut,signedIn:e.state.signedIn},t))}}),r.a.createElement(f.a,{path:"/Home",render:function(t){return r.a.createElement(_,Object.assign({signedIn:e.state.signedIn,email:e.state.userEmail},t))}}),r.a.createElement(f.a,{path:"/SignIn",render:function(t){return r.a.createElement(ie,Object.assign({onSignIn:e.onSignIn},t))}}),r.a.createElement(f.a,{path:"/Register",component:me}))},null))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(ge,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[53,2,1]]]);
//# sourceMappingURL=main.4999df25.chunk.js.map