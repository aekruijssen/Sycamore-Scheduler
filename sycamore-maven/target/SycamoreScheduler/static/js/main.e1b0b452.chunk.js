(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{59:function(e,t,a){e.exports=a(72)},70:function(e){e.exports=["ACAD","ACCT","ACMD","ACTN","ADNT","AEST","AHIS","ALI","AME","AMST","ANSC","ANST","ANTH","ARAB","ARCG","ARCH","ARLT","ART","ARTL","ARTS","ASCJ","ASTE","ASTR","BAEP","BIOC","BISC","BKN","BME","BPMK","BUAD","BUCO","BUS","BVC","CBG","CBY","CE","CHE","CHEM","CLAS","CMGT","CMPP","CNB","CNMA","CNTV","COLT","COMM","CORE","CRIT","CSCI","CSLC","CTAN","CTCS","CTIN","CTPR","CTWR","CXPT","DANC","DENT","DES","DHYG","DIAG","DNCR","DNTR","DPBL","DRNS","DSM","DSO","DSR","EALC","EASC","ECON","EDCO","EDCR","EDHP","EDPT","EDUC","EE","ENE","ENGL","ENGR","ENGV","ENST","FBE","FIM","FINE","FREN","FSEM","GCT","GDEN","GEOG","GEOL","GEP","GEPN","GERD","GERM","GERO","GESM","GPG","GPH","GR","GRSC","GSBA","HBIO","HCDA","HEBR","HINQ","HIST","HMGT","HP","HRM","IDSN","IML","INDS","INF","INTD","IR","IRAN","ISE","ITAL","ITP","JOUR","JS","LAT","LAW","LBST","LIFE","LIM","LING","MASC","MATH","MBPH","MDA","MDES","MED","MEDB","MEDK","MEDS","MICB","MKT","MOR","MPEM","MPGU","MPHY","MPKS","MPPM","MPST","MPTX","MPVA","MPW","MPWP","MS","MSCR","MSS","MTAL","MTEC","MUCD","MUCM","MUCO","MUEN","MUHL","MUIN","MUJZ","MUS","MUSC","NAUT","NEUR","NIIN","NSC","NSCI","NURS","OCST","OFP","OFPM","OPER","OPR","OS","OT","PAIN","PATH","PCPA","PEDO","PERI","PHAR","PHBI","PHED","PHIL","PHRD","PHYS","PJMT","PLUS","PM","PMEP","POIR","PORT","POSC","PPD","PPDE","PPDP","PR","PSC","PSCI","PSYC","PT","PTBK","PTE","PUBD","QBIO","QREA","RED","REL","RSCI","RXRS","SAE","SANA","SCIN","SCIS","SCOR","SCRM","SI","SLL","SOCI","SOWK","SPAN","SSCI","SWDP","SWMS","THTR","TRGN","USC","VISS","WCT","WRIT"]},72:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(9),o=a.n(l),i=a(10),s=a(11),c=a(14),m=a(12),u=a(13),d=a(17),f=a(37),g=a(100),h=a(96),E=a(103),p=a(99),S=a(1),b=a(110),y=a(91),C=a(90),I=a(105),v=a(92),w=a(109),j=a(81),O=a(108),R=a(107),k=a(106),N=a(104),P=a(82),x=function(e){return r.a.createElement(E.a,{direction:"column",align:"center",justify:"center",width:"medium",height:"xsmall"},r.a.createElement(w.a,{fill:!0,onClick:function(){e.clickFunc(e.id)},label:r.a.createElement("strong",null,e.name),hoverIndicator:!0,style:{background:"white",radius:"4px",border:"3px solid main",fontSize:"30px"}}))},M=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(c.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={clickFunc:a.props.clickFunc,list:a.props.defList},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"componentWillReceiveProps",value:function(e){this.setState({list:e.list})}},{key:"render",value:function(){var e=this,t=0;return null!==this.state.list&&r.a.createElement(j.a,{items:this.state.list,step:20},function(a){return r.a.createElement(E.a,{align:"center",pad:"small",key:(t++).toString()},r.a.createElement(x,{clickFunc:e.state.clickFunc,name:a,id:a}))})}}]),t}(n.Component),T=function(e){var t=e.label;return r.a.createElement(E.a,{direction:"row",align:"center",justify:"center",margin:"xsmall",pad:"2%"},r.a.createElement(O.a,{size:"xlarge"},r.a.createElement("strong",null,t)))},z=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(c.a)(this,Object(m.a)(t).call(this,e))).state={courseTab:0,search:"",allClasses:e.classes,searchClasses:e.classes},a.onSearch=function(e){console.log("New search query:\t"+e);var t=new RegExp(e,"i");this.setState({search:e,searchClasses:this.state.allClasses.filter(function(e){return t.test(e)})})}.bind(Object(d.a)(Object(d.a)(a))),a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this,t=this.state.courseTab;return r.a.createElement(R.a,{activeIndex:t,onActive:function(t){e.setState({courseTab:t})}},r.a.createElement(k.a,{title:r.a.createElement(P.a,{size:"large"})},r.a.createElement(E.a,{direction:"column",align:"center",justify:"start",style:{position:"sticky",top:"0",zIndex:500},background:"light-2",pad:{horizontal:"medium",bottom:"medium"}},r.a.createElement(I.a,{level:"2"},"find any class"),r.a.createElement(N.a,{placeholder:"search",background:"white",value:this.state.search,onChange:function(t){var a=t.target.value;e.onSearch(a)},style:{fontFamily:"Inconsolata"}})),r.a.createElement(E.a,{className:"classBox",direction:"column",align:"center",justify:"start",pad:"small",animation:{type:"fadeIn",size:"xlarge"}},r.a.createElement(M,{clickFunc:this.props.clickFunc,defList:this.state.allClasses,list:this.state.searchClasses}))),r.a.createElement(k.a,{title:r.a.createElement(T,{label:"Major"})}),r.a.createElement(k.a,{title:r.a.createElement(T,{label:"Minor"})}))}}]),t}(n.Component),A=a(85),D=a(86),H=a(87),F=a(88),G=a(89),B=[{term:"2017-3",classes:["CSCI 103","CSCI 109","WRIT 150","CHEM 105a","MATH 226"]},{term:"2018-1",classes:["CSCI 104","CSCI 170","GESM 121","CHEM 115b","MATH 225"]},{term:"2018-3",classes:["CSCI 201","CSCI 270","PSYC 100","CHEM 322a"]},{term:"2019-1",classes:["CSCI 356","EE 109","BISC 220","MATH 407"]}],L=0,U=function(e){function t(){return Object(i.a)(this,t),Object(c.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement(E.a,{flex:!0,direction:"column",justify:"start",align:"center",animation:{type:"fadeIn",delay:50,duration:750,size:"large"}},r.a.createElement(I.a,{level:"1",margin:{top:"large",bottom:"0",left:"large"}},"Course Plan"),r.a.createElement(E.a,{flex:!0,direction:"row",align:"start",justify:"center"},B.map(function(e){return r.a.createElement(E.a,{key:L++,flex:!0,margin:"large"},r.a.createElement(A.a,{caption:e.term},r.a.createElement(D.a,null,r.a.createElement(H.a,null,r.a.createElement(F.a,null,r.a.createElement(I.a,{level:"3"},e.term)))),r.a.createElement(G.a,null,e.classes.map(function(e){return r.a.createElement(H.a,{key:L++},r.a.createElement(F.a,null,r.a.createElement(O.a,{size:"large"},e)))}))))})))}}]),t}(n.Component),W=function(e){function t(){return Object(i.a)(this,t),Object(c.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement(E.a,{flex:!0,direction:"column",justify:"center",align:"start",animation:{type:"fadeIn",delay:50,duration:750,size:"large"}},r.a.createElement(I.a,{level:"1"},"Profile"),r.a.createElement(C.a,{path:"/",hoverIndicator:!0,label:"Go back to welcome page ... "}))}}]),t}(n.Component),J=a(102),K=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(c.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={classInfo:a.props.defaultInfo},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"componentWillReceiveProps",value:function(e){this.setState({classInfo:e.classInfo})}},{key:"render",value:function(){var e=this,t=this.state.classInfo;return r.a.createElement(E.a,{flex:!0,direction:"column",justify:"start",align:"start",pad:"5%",animation:{type:"fadeIn",delay:50,duration:750,size:"large"},style:{overflow:"auto"}},r.a.createElement(E.a,{flex:!0,direction:"column",align:"start",justify:"start"},r.a.createElement(I.a,{level:"1"},t.degreeName+" "+t.classNumber),r.a.createElement(I.a,{level:"2"},t.className),r.a.createElement(J.a,null,t.summary),r.a.createElement(w.a,{onClick:function(){return e.props.socketFunc(t)},hoverIndicator:!0,label:"Add to course plan ... ",margin:{top:"10%"},pad:"large"})))}}]),t}(n.Component),Y=function(e){return r.a.createElement(E.a,Object.assign({flex:!0,direction:"row",align:"center",justify:"between",background:"darker",pad:"large",animation:{type:"slideDown",delay:0,duration:500,size:"xlarge"},style:{zIndex:"100"}},e))},V=function(e){return r.a.createElement(b.a,Object.assign({onClick:e.func,color:"light",size:"xxlarge"},e),e.text)},Q=function(e){function t(e){var a;Object(i.a)(this,t),(a=Object(c.a)(this,Object(m.a)(t).call(this,e))).displayClass=function(e){for(var t=a.state.classes,n=0;n<t.length;n++){var r=Object.keys(t[n])[0];r===e&&(console.log("Display "+r),a.setState({display:"class",whichClass:t[n][r]}))}},a.state={showSidebar:!0,display:"none",whichClass:null,signedIn:e.signedIn,email:e.email,classes:null,classNames:null};var n=!1;return a.loadClasses=function(){var e=this;fetch("/SycamoreScheduler/ClassesServlet",{method:"GET"}).then(function(e){return n=e.ok,e.json()}).then(function(t){if(n){console.log(t);var a=t.map(function(e){var t=Object.keys(e)[0];return e[t].degreeName+" "+e[t].classNumber});e.setState({classes:t,classNames:a},function(){console.log("ClassesServlet returned status 200"),console.log("Classes stored in this.state.classes"),console.log("Class names:\n"),console.log(e.state.classNames)})}else console.log("ClassesServlet did not return status 200."),console.log(JSON.stringify(t))})}.bind(Object(d.a)(Object(d.a)(a))),a.loadClasses(),a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this,t=this.state,a=t.showSidebar,n=t.display;t.email;return r.a.createElement(y.a.Consumer,null,function(t){return r.a.createElement(E.a,{flex:!0,direction:"column",align:"stretch",justify:"start"},r.a.createElement(Y,null,r.a.createElement(C.a,{plain:!0,path:"/"},r.a.createElement(I.a,{level:"1",color:"white"},"Sycamore Scheduler")),r.a.createElement(E.a,{direction:"row",align:"center",justify:"end"},r.a.createElement(V,{margin:{right:"large"},text:"Classes",func:function(){return e.setState({showSidebar:!e.state.showSidebar})}}),e.state.signedIn&&r.a.createElement(V,{margin:{right:"large"},text:"Course Plan",func:function(){return e.setState({display:"coursePlan"})}}),e.state.signedIn&&r.a.createElement(V,{text:"Profile",func:function(){return e.setState({display:"profile"})}}))),r.a.createElement(E.a,{fill:!0,direction:"row",justify:"start",align:"stretch",animation:{type:"fadeIn",delay:500,duration:500,size:"large"}},null!==e.state.classNames&&r.a.createElement(v.a,{direction:"horizontal",open:a},r.a.createElement(E.a,{width:"medium",animation:{type:"slideRight",delay:500,duration:500,size:"large"},style:{flexWrap:"nowrap",minHeight:"100%"},background:"light-2"},r.a.createElement(z,{classes:e.state.classNames,fullInfo:e.state.classes,clickFunc:e.displayClass}))),"coursePlan"===n&&r.a.createElement(U,null),"profile"===n&&r.a.createElement(W,null),"none"===n&&r.a.createElement(E.a,{flex:!0,direction:"column",justify:"center",align:"center",animation:{type:"fadeIn",delay:500,duration:500,size:"large"}},r.a.createElement(I.a,{level:"1"},"Click on a class to view details")),"class"===n&&null!==e.state.whichClass&&r.a.createElement(K,{socketFunc:e.props.socketFunc,defaultInfo:e.state.whichClass,classInfo:e.state.whichClass})))})}}]),t}(n.Component),X=a(24),q=a(25),Z=a(28),$=a(26),_=a(27),ee=a(101),te=function(e){function t(e){var a;return Object(X.a)(this,t),(a=Object(Z.a)(this,Object($.a)(t).call(this,e))).state={signedIn:a.props.signedIn},a}return Object(_.a)(t,e),Object(q.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement(E.a,{flex:!0,direction:"row",align:"center",justify:"center",gap:"small"},r.a.createElement(E.a,{height:"small",width:"small",animation:{type:"slideRight",delay:0,duration:500,size:"large"},border:{side:"all",size:"small",color:"dark-1"},pad:"small",background:"main",style:{borderRadius:"20px"}},r.a.createElement(ee.a,{fit:"contain",src:"/SycamoreScheduler/leaf.png"})),r.a.createElement(E.a,{direction:"column",justify:"center",align:"center",height:"small"},r.a.createElement(E.a,{flex:!0,direction:"row",pad:{top:"medium",horizontal:"medium",bottom:"0"},gap:"small"},r.a.createElement(E.a,{pad:"0",margin:"0",animation:{type:"slideDown",delay:0,duration:500,size:"large"}},r.a.createElement(I.a,{margin:"0",level:"1",color:"black"},"Sycamore")),r.a.createElement(E.a,{pad:"0",margin:"0",animation:{type:"fadeIn",delay:200,duration:400,size:"large"}},r.a.createElement(I.a,{margin:"0",level:"1",color:"main"},"Scheduler"))),r.a.createElement(E.a,{direction:"row",align:"center",justify:"center",animation:{type:"slideUp",delay:0,duration:500,size:"large"},margin:{bottom:"large"}},!this.state.signedIn&&r.a.createElement(C.a,{path:"/Register",hoverIndicator:!0,label:r.a.createElement(O.a,{size:"large"},r.a.createElement("strong",null,"Register")),color:"main",margin:{right:"medium"}}),!this.state.signedIn&&r.a.createElement(C.a,{path:"/SignIn",hoverIndicator:!0,label:r.a.createElement(O.a,{size:"large"},r.a.createElement("strong",null,"Sign In")),color:"main",margin:{right:"medium"}}),this.state.signedIn&&r.a.createElement(w.a,{hoverIndicator:!0,label:r.a.createElement(O.a,{size:"large"},r.a.createElement("strong",null,"Sign Out")),color:"main",onClick:function(){e.props.onSignOut()},margin:{right:"medium"}}),!this.state.signedIn&&r.a.createElement(C.a,{path:"/Home",hoverIndicator:!0,label:r.a.createElement(O.a,{size:"large"},r.a.createElement("strong",null,"Guest")),color:"main"}),this.state.signedIn&&r.a.createElement(C.a,{path:"/Home",hoverIndicator:!0,label:r.a.createElement(O.a,{size:"large"},r.a.createElement("strong",null,"Home")),color:"main"}))))}}]),t}(n.Component),ae=a(22),ne=a(93),re=a(94),le=a(95),oe=function(e){function t(e){var a;return Object(X.a)(this,t),(a=Object(Z.a)(this,Object($.a)(t).call(this,e))).doLogin=function(e){if(""===a.state.email||""===a.state.password){var t="Please enter your ";return""===a.state.email&&(t+="email"),""===a.state.password?(""===a.state.email&&(t+=" and "),t+="password."):t+=".",void a.setState({error:!0,errormsg:t})}if(-1===a.state.email.indexOf("@")||-1===a.state.email.indexOf(".")||a.state.email.indexOf(".")-a.state.email.indexOf("@")<2)a.setState({success:!1,error:!0,errormsg:"Email is not formatted correctly."});else{var n="email="+a.state.email+"&password="+a.state.password,r=!1;fetch("/SycamoreScheduler/LoginServlet",{method:"POST",headers:{"content-type":"application/x-www-form-urlencoded"},body:n}).then(function(e){return r=e.ok,e.json()}).then(function(e){r?a.setState({success:!0,error:!1,errormsg:""},function(){a.props.onSignIn(a.state.email),setTimeout(function(){a.props.history.push("/Home")},1e3)}):a.setState({success:!1,error:!0,errormsg:e.error})})}},a.handleChange=function(e,t){"email"===e?a.setState({email:t.target.value}):"password"===e&&a.setState({password:t.target.value})},a.state={email:"",password:"",error:!1,errormsg:"",success:!1},a.emailRef=r.a.createRef(),a.passwordRef=r.a.createRef(),a.focusSomething=function(e){e.current.focus()},a.focusSomething.bind(Object(ae.a)(Object(ae.a)(a))),a}return Object(_.a)(t,e),Object(q.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement(E.a,{flex:!0,direction:"column",justify:"center",align:"center"},r.a.createElement(E.a,{direction:"column",align:"center",justify:"start",pad:"xlarge",gap:"large",border:{side:"all",color:"main",size:"medium"},style:{borderRadius:"20px"},animation:{type:"fadeIn",delay:0,duration:500,size:"large"}},r.a.createElement(I.a,{level:"1",margin:"0"},"Sign In"),r.a.createElement(ne.a,null,r.a.createElement(N.a,{id:"email",ref:this.emailRef,size:"medium",focusIndicator:!0,placeholder:r.a.createElement(E.a,{onClick:function(){e.focusSomething(e.emailRef)},direction:"row",align:"center",justify:"between",gap:"small"},r.a.createElement(O.a,{style:{fontFamily:"Inconsolata"},size:"large"},"email"),r.a.createElement(O.a,{style:{fontFamily:"Inconsolata"},size:"large",color:"main"},"*")),value:this.state.email,onChange:function(t){e.handleChange("email",t)}})),r.a.createElement(ne.a,null,r.a.createElement(N.a,{id:"password",ref:this.passwordRef,size:"medium",type:"password",focusIndicator:!0,placeholder:r.a.createElement(E.a,{onClick:function(){e.focusSomething(e.passwordRef)},direction:"row",align:"center",justify:"between",gap:"small"},r.a.createElement(O.a,{style:{fontFamily:"Inconsolata"},size:"large"},"password"),r.a.createElement(O.a,{style:{fontFamily:"Inconsolata"},size:"large",color:"main"},"*")),value:this.state.password,onChange:function(t){e.handleChange("password",t)}})),this.state.error&&r.a.createElement(E.a,{flex:!0,background:"main",direction:"column",align:"center",justify:"center",pad:"medium",style:{borderRadius:"10px"}},r.a.createElement(O.a,{color:"white"},this.state.errormsg)),this.state.success&&r.a.createElement(E.a,{flex:!0,background:"neutral-3",animation:{type:"fadeIn",delay:0,duration:700,size:"large"},direction:"column",align:"center",justify:"center",pad:"small",style:{borderRadius:"10px"}},r.a.createElement(O.a,{color:"white"},"Success!")),r.a.createElement(E.a,{direction:"row",align:"center",justify:"center",gap:"medium"},r.a.createElement(C.a,{path:"/",hoverIndicator:!0,color:"dark-2",label:r.a.createElement(re.a,{color:"main",size:"large"})}),r.a.createElement(w.a,{hoverIndicator:!0,label:r.a.createElement(le.a,{size:"large",color:"green"}),color:"dark-2",onClick:function(t){e.doLogin(t)}}))))}}]),t}(n.Component),ie=a(53),se=a(97),ce=a(70),me=function(e){function t(e){var a;return Object(X.a)(this,t),(a=Object(Z.a)(this,Object($.a)(t).call(this,e))).state={fName:"",lName:"",email:"",password:"",major1:"",major2:"",minor1:"",minor2:"",error:!1,errormsg:"",success:!1,programs:ce},a.handleChange=function(e,t){a.setState({form_elements:Object(ie.a)({},e,t)})},a.doRegister=function(e){var t=!1,n="Please enter your ",r=[];if(-1===a.state.email.indexOf("@")||-1===a.state.email.indexOf(".")||a.state.email.indexOf(".")-a.state.email.indexOf("@")<2)a.setState({success:!1,error:!0,errormsg:"Email is not formatted correctly."});else if(["fName","lName","email","password","major1"].map(function(e){return""===a.state[e]&&(t=!0,"fName"===e?r.push("first name"):"lName"===e?r.push("last name"):"email"===e?r.push("email"):"password"===e?r.push("password"):"major1"===e&&r.push("major")),0}),t){for(var l=0;l<r.length;l++)n+=r[l],l===r.length-1?n+=".":n+=", ",l===r.length-2&&(n+="and ");a.setState({error:!0,errormsg:n})}else{for(var o=["fName","lName","email","password","major1","major2","minor1","minor2"],i="",s=0;s<o.length;s++){var c=o[s];""!==a.state[c]&&(0!==s&&(i+="&"),i+=c+"="+a.state[c])}var m=!1;fetch("/SycamoreScheduler/RegisterServlet",{method:"POST",headers:{"content-type":"application/x-www-form-urlencoded"},body:i}).then(function(e){return m=e.ok,e.json()}).then(function(e){m?a.setState({error:!1,errormsg:"",success:!0},function(){setTimeout(function(){a.props.history.push("/SignIn")},1e3)}):a.setState({error:!0,errormsg:e.error,success:!1})})}},a.fNameRef=r.a.createRef(),a.lNameRef=r.a.createRef(),a.emailRef=r.a.createRef(),a.passwordRef=r.a.createRef(),a.focusSomething=function(e){e.current.focus()},a.focusSomething.bind(Object(ae.a)(Object(ae.a)(a))),a}return Object(_.a)(t,e),Object(q.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement(E.a,{flex:!0,direction:"column",justify:"center",align:"center"},r.a.createElement(E.a,{direction:"column",align:"center",justify:"start",gap:"large",pad:{vertical:"large",horizontal:"xlarge"},border:{side:"all",color:"main",size:"medium"},animation:{type:"fadeIn",delay:0,duration:500,size:"large"},style:{borderRadius:"20px"}},r.a.createElement(E.a,{flex:!0,width:"100%",align:"center",justify:"center"},r.a.createElement(I.a,{level:"1",margin:"0"},"Register")),r.a.createElement(E.a,{flex:!0,width:"100%",direction:"row",align:"center",justify:"between",gap:"large"},r.a.createElement(ne.a,null,r.a.createElement(N.a,{ref:this.fNameRef,id:"fName",size:"medium",focusIndicator:!0,placeholder:r.a.createElement(E.a,{onClick:function(){e.focusSomething(e.fNameRef)},direction:"row",align:"center",justify:"between",gap:"small"},r.a.createElement(O.a,{style:{fontFamily:"Inconsolata"},size:"large"},"first name"),r.a.createElement(O.a,{style:{fontFamily:"Inconsolata"},size:"large",color:"main"},"*")),value:this.state.fName,onChange:function(t){return e.setState({fName:t.target.value})}})),r.a.createElement(ne.a,null,r.a.createElement(N.a,{ref:this.lNameRef,id:"lName",size:"medium",focusIndicator:!0,placeholder:r.a.createElement(E.a,{onClick:function(){e.focusSomething(e.lNameRef)},direction:"row",align:"center",justify:"between",gap:"small"},r.a.createElement(O.a,{style:{fontFamily:"Inconsolata"},size:"large"},"last name"),r.a.createElement(O.a,{style:{fontFamily:"Inconsolata"},size:"large",color:"main"},"*")),value:this.state.lName,onChange:function(t){return e.setState({lName:t.target.value})}}))),r.a.createElement(E.a,{flex:!0,width:"100%",direction:"row",align:"center",justify:"between",gap:"large"},r.a.createElement(ne.a,null,r.a.createElement(N.a,{ref:this.emailRef,id:"email",size:"medium",focusIndicator:!0,placeholder:r.a.createElement(E.a,{onClick:function(){e.focusSomething(e.emailRef)},direction:"row",align:"center",justify:"between",gap:"small"},r.a.createElement(O.a,{style:{fontFamily:"Inconsolata"},size:"large"},"email"),r.a.createElement(O.a,{style:{fontFamily:"Inconsolata"},size:"large",color:"main"},"*")),value:this.state.email,onChange:function(t){return e.setState({email:t.target.value})}})),r.a.createElement(ne.a,null,r.a.createElement(N.a,{ref:this.passwordRef,id:"password",size:"medium",type:"password",focusIndicator:!0,placeholder:r.a.createElement(E.a,{onClick:function(){e.focusSomething(e.passwordRef)},direction:"row",align:"center",justify:"between",gap:"small"},r.a.createElement(O.a,{style:{fontFamily:"Inconsolata"},size:"large"},"password"),r.a.createElement(O.a,{style:{fontFamily:"Inconsolata"},size:"large",color:"main"},"*")),value:this.state.password,onChange:function(t){return e.setState({password:t.target.value})}}))),r.a.createElement(E.a,{flex:!0,width:"100%",direction:"row",align:"center",justify:"between",gap:"large"},r.a.createElement(se.a,{size:"small",placeholder:r.a.createElement(O.a,{size:"large"},"major"),value:this.state.major1,options:this.state.programs,onChange:function(t){e.setState({major1:t.value})},onClose:function(){return e.setState({programs:ce})},onSearch:function(t){var a=new RegExp(t,"i");e.setState({programs:ce.filter(function(e){return a.test(e)})})}}),r.a.createElement(se.a,{size:"small",placeholder:r.a.createElement(O.a,{size:"large"},"minor"),value:this.state.minor1,options:this.state.programs,onChange:function(t){e.setState({minor1:t.value})},onClose:function(){return e.setState({programs:ce})},onSearch:function(t){var a=new RegExp(t,"i");e.setState({programs:ce.filter(function(e){return a.test(e)})})}})),this.state.error&&r.a.createElement(E.a,{flex:!0,background:"main",direction:"column",align:"center",justify:"center",pad:"medium",style:{borderRadius:"10px"}},r.a.createElement(O.a,{color:"white"},this.state.errormsg)),this.state.success&&r.a.createElement(E.a,{flex:!0,background:"neutral-3",animation:{type:"fadeIn",delay:0,duration:700,size:"large"},direction:"column",align:"center",justify:"center",pad:"small",style:{borderRadius:"10px"}},r.a.createElement(O.a,{color:"white"},"Success!")),r.a.createElement(E.a,{flex:!0,width:"100%",direction:"row",align:"center",justify:"center",gap:"medium"},r.a.createElement(C.a,{path:"/",hoverIndicator:!0,color:"dark-2",label:r.a.createElement(re.a,{color:"main",size:"large"})}),r.a.createElement(w.a,{hoverIndicator:!0,label:r.a.createElement(le.a,{size:"large",color:"green"}),color:"dark-2",onClick:function(t){e.doRegister(t)}}))))}}]),t}(n.Component);function ue(){var e=Object(f.a)(["\n\t\t\tborder-radius: ",";\n\t\t"]);return ue=function(){return e},e}function de(){var e=Object(f.a)(["\n\t\t\tflex: 0 0;\n\t\t\tpadding-top: ",";\n\t\t\tpadding-bottom: ",";\n\t\t\tbox-shadow: 0;\n\t\t\tflex-wrap: nowrap;\n\t\t  "]);return de=function(){return e},e}var fe={global:{colors:{main:"#ff3300",darker:"#d21e32"},font:{family:"Karla",color:"#ffffff"},hover:{background:"inherit"}},button:{color:"dark-1",border:{color:"main"}},anchor:{color:"#ff3300",hover:{textDecoration:"none"}},tabs:{background:"light-2",header:{background:"light-2",extend:function(e){var t=e.theme;return Object(S.a)(de(),t.global.edgeSize.medium,t.global.edgeSize.medium)}},gap:"medium",extend:"\n\t\tdiv[role='tabpanel'] {\n\t\t\toverflow-y: auto;\n\t\t\toverflow-x: hidden;\n\t\t\tpadding-bottom: 10%;\n\t\t\tfont-family: 'Inconsolata';\n\t\t\tflex-wrap: nowrap;\n\t\t}\n\t\tdiv[role='tabpanel'] * {\n\t\t\twhite-space: nowrap;\n\t\t}\n        "},tab:{active:{background:"main",color:"white"},color:"main",background:"white",hover:{background:"pink",border:{side:"all",color:"main",size:"small"},color:"white"},border:void 0,margin:void 0,pad:{bottom:void 0,horizontal:"xsmall"},extend:function(e){var t=e.theme;return Object(S.a)(ue(),t.global.control.border.radius)}}},ge=function(e){function t(e){var a;Object(i.a)(this,t),(a=Object(c.a)(this,Object(m.a)(t).call(this,e))).sendSocketData=function(e){var t=this;if(console.log("----------------------------------"),console.log("Sending socket data for class "+e.degreeName+" "+e.classNumber),void 0===this.state.socket||null===this.state.socket){var a=new WebSocket("ws://localhost:8080/SycamoreScheduler/ss1");a.onopen=function(e){console.log("WebSocket Connected!",e)},a.onmessage=function(e){console.log("Received:",e)},a.onclose=function(e){console.log("Closed!",e)},a.onerror=function(e){console.log("Error:",e)},this.setState({socket:a},function(){t.state.socket.send("("+(t.state.email||"guest")+", "+e.degreeName+" "+e.classNumber+", 2018-3, add)")})}else this.state.socket.send("("+(this.state.email||"guest")+", "+e.degreeName+" "+e.classNumber+", 2018-3, add)")}.bind(Object(d.a)(Object(d.a)(a))),a.onSignIn=function(e){setTimeout(function(){a.setState({signedIn:!0,userEmail:e})},1e3)},a.onSignOut=function(){a.setState({signedIn:!1,userEmail:""})},a.state={signedIn:!1,userEmail:""};var n=new WebSocket("ws://localhost:8080/SycamoreScheduler/ss1");return n.onopen=function(e){console.log("WebSocket Connected!",e)},n.onmessage=function(e){console.log("Received:",e)},n.onclose=function(e){console.log("Closed!",e)},n.onerror=function(e){console.log("Error:",e)},a.setState({socket:n}),a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement(h.a,{basename:"/SycamoreScheduler"},r.a.createElement(p.a,{theme:fe,full:!0},r.a.createElement(n.Fragment,null,r.a.createElement(function(){return r.a.createElement(E.a,{fill:!0},r.a.createElement(g.a,{exact:!0,path:"/",render:function(t){return r.a.createElement(te,Object.assign({onSignOut:e.onSignOut,signedIn:e.state.signedIn},t))}}),r.a.createElement(g.a,{path:"/Home",render:function(t){return r.a.createElement(Q,Object.assign({socketFunc:e.sendSocketData,signedIn:e.state.signedIn,email:e.state.userEmail},t))}}),r.a.createElement(g.a,{path:"/SignIn",render:function(t){return r.a.createElement(oe,Object.assign({onSignIn:e.onSignIn},t))}}),r.a.createElement(g.a,{path:"/Register",component:me}))},null))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(ge,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[59,2,1]]]);
//# sourceMappingURL=main.e1b0b452.chunk.js.map