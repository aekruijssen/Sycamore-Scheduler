(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{52:function(e,t,a){e.exports=a(65)},63:function(e){e.exports=["ACAD","ACCT","ACMD","ACTN","ADNT","AEST","AHIS","ALI","AME","AMST","ANSC","ANST","ANTH","ARAB","ARCG","ARCH","ARLT","ART","ARTL","ARTS","ASCJ","ASTE","ASTR","BAEP","BIOC","BISC","BKN","BME","BPMK","BUAD","BUCO","BUS","BVC","CBG","CBY","CE","CHE","CHEM","CLAS","CMGT","CMPP","CNB","CNMA","CNTV","COLT","COMM","CORE","CRIT","CSCI","CSLC","CTAN","CTCS","CTIN","CTPR","CTWR","CXPT","DANC","DENT","DES","DHYG","DIAG","DNCR","DNTR","DPBL","DRNS","DSM","DSO","DSR","EALC","EASC","ECON","EDCO","EDCR","EDHP","EDPT","EDUC","EE","ENE","ENGL","ENGR","ENGV","ENST","FBE","FIM","FINE","FREN","FSEM","GCT","GDEN","GEOG","GEOL","GEP","GEPN","GERD","GERM","GERO","GESM","GPG","GPH","GR","GRSC","GSBA","HBIO","HCDA","HEBR","HINQ","HIST","HMGT","HP","HRM","IDSN","IML","INDS","INF","INTD","IR","IRAN","ISE","ITAL","ITP","JOUR","JS","LAT","LAW","LBST","LIFE","LIM","LING","MASC","MATH","MBPH","MDA","MDES","MED","MEDB","MEDK","MEDS","MICB","MKT","MOR","MPEM","MPGU","MPHY","MPKS","MPPM","MPST","MPTX","MPVA","MPW","MPWP","MS","MSCR","MSS","MTAL","MTEC","MUCD","MUCM","MUCO","MUEN","MUHL","MUIN","MUJZ","MUS","MUSC","NAUT","NEUR","NIIN","NSC","NSCI","NURS","OCST","OFP","OFPM","OPER","OPR","OS","OT","PAIN","PATH","PCPA","PEDO","PERI","PHAR","PHBI","PHED","PHIL","PHRD","PHYS","PJMT","PLUS","PM","PMEP","POIR","PORT","POSC","PPD","PPDE","PPDP","PR","PSC","PSCI","PSYC","PT","PTBK","PTE","PUBD","QBIO","QREA","RED","REL","RSCI","RXRS","SAE","SANA","SCIN","SCIS","SCOR","SCRM","SI","SLL","SOCI","SOWK","SPAN","SSCI","SWDP","SWMS","THTR","TRGN","USC","VISS","WCT","WRIT"]},65:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(14),i=a.n(l),o=a(8),s=a(9),c=a(12),m=a(10),u=a(11),d=a(31),f=a(92),g=a(89),E=a(97),h=a(93),p=a(1),S=a(17),b=a(95),y=a(82),C=a(81),I=a(103),j=a(83),v=a(101),w=a(74),O=a(100),R=a(99),N=a(98),P=a(75),M=Array(2).fill().map(function(e,t){var a=Math.floor(601*Math.random())+100;return"MINR ".concat(a)}),T=function(e){return r.a.createElement(E.a,{direction:"column",align:"center",justify:"center",width:"40%"},r.a.createElement(v.a,{fill:!0,onClick:function(){e.clickFunc(e.id)},label:r.a.createElement("strong",null,e.name),hoverIndicator:!0,style:{background:"white",padding:"30% 100% 30% 100%",radius:"4px",border:"3px solid main",fontSize:"30px"}}))},x=0,k=function(e){return r.a.createElement(w.a,{items:e.list,step:20},function(t){return r.a.createElement(E.a,{align:"center",pad:"small",key:(x++).toString()},r.a.createElement(T,{clickFunc:e.clickFunc,name:t,id:t}))})},A=function(e){var t=e.label;return r.a.createElement(E.a,{direction:"row",align:"center",justify:"center",margin:"xsmall",pad:"2%"},r.a.createElement(O.a,{size:"xlarge"},r.a.createElement("strong",null,t)))},z=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(c.a)(this,Object(m.a)(t).call(this,e))).state={courseTab:0},a.allClasses=e.classes,a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this,t=this.state.courseTab;return r.a.createElement(R.a,{activeIndex:t,onActive:function(t){e.setState({courseTab:t})}},r.a.createElement(N.a,{title:r.a.createElement(P.a,{size:"large"})},r.a.createElement(E.a,{direction:"column",align:"center",justify:"start",pad:"small",animation:{type:"fadeIn",size:"xlarge"}},r.a.createElement(I.a,{level:"2"},"search bar"))),r.a.createElement(N.a,{title:r.a.createElement(A,{label:"Major"})},r.a.createElement(k,{clickFunc:this.props.clickFunc,list:this.allClasses})),r.a.createElement(N.a,{title:r.a.createElement(A,{label:"Minor"})},r.a.createElement(k,{clickFunc:this.props.clickFunc,list:M})))}}]),t}(n.Component),D=a(76),H=a(77),G=a(78),B=a(79),F=a(80),L=[{term:"2017-3",classes:["CSCI 103","CSCI 109","WRIT 150","CHEM 105a","MATH 226"]},{term:"2018-1",classes:["CSCI 104","CSCI 170","GESM 121","CHEM 115b","MATH 225"]},{term:"2018-3",classes:["CSCI 201","CSCI 270","PSYC 100","CHEM 322a"]},{term:"2019-1",classes:["CSCI 356","EE 109","BISC 220","MATH 407"]}],U=0,W=function(e){function t(){return Object(o.a)(this,t),Object(c.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement(E.a,{flex:!0,direction:"column",justify:"start",align:"center",animation:{type:"fadeIn",delay:50,duration:750,size:"large"}},r.a.createElement(I.a,{level:"1",margin:{top:"large",bottom:"0",left:"large"}},"Course Plan"),r.a.createElement(E.a,{flex:!0,direction:"row",align:"start",justify:"center"},L.map(function(e){return r.a.createElement(E.a,{key:U++,flex:!0,margin:"large"},r.a.createElement(D.a,{caption:e.term},r.a.createElement(H.a,null,r.a.createElement(G.a,null,r.a.createElement(B.a,null,r.a.createElement(I.a,{level:"3"},e.term)))),r.a.createElement(F.a,null,e.classes.map(function(e){return r.a.createElement(G.a,{key:U++},r.a.createElement(B.a,null,r.a.createElement(O.a,{size:"large"},e)))}))))})))}}]),t}(n.Component),J=function(e){function t(){return Object(o.a)(this,t),Object(c.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement(E.a,{flex:!0,direction:"column",justify:"center",align:"center",animation:{type:"fadeIn",delay:50,duration:750,size:"large"}},r.a.createElement(I.a,{level:"1"},"Profile"),r.a.createElement(C.a,{path:"/",hoverIndicator:!0,label:"Go back to welcome page ... "}))}}]),t}(n.Component),K=a(96),Y=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(c.a)(this,Object(m.a)(t).call(this,e))).classInfo=a.props.classInfo,a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement(E.a,{flex:!0,direction:"column",justify:"start",align:"start",pad:"5%",animation:{type:"fadeIn",delay:50,duration:750,size:"large"}},r.a.createElement(E.a,{direction:"row",align:"center",justify:"between"},r.a.createElement(I.a,{level:"1"},this.classInfo.className),r.a.createElement(I.a,{level:"2"},this.classInfo.degreeName+" "+this.classInfo.classNumber)),r.a.createElement(K.a,null,this.classInfo.summary),r.a.createElement(v.a,{href:"/Main",hoverIndicator:!0,label:"Reload this page ... ",alignSelf:"center",margin:{top:"10%"}}))}}]),t}(n.Component),V=function(e){return r.a.createElement(E.a,Object.assign({flex:!0,direction:"row",align:"center",justify:"between",background:"darker",pad:"large",animation:{type:"slideDown",delay:0,duration:500,size:"xlarge"},style:{zIndex:"100"}},e))},X=function(e){return r.a.createElement(b.a,Object.assign({onClick:e.func,color:"light",size:"xxlarge"},e),e.text)},Q=function(e){function t(e){var a;Object(o.a)(this,t),(a=Object(c.a)(this,Object(m.a)(t).call(this,e))).displayClass=function(e){for(var t=a.state.classes,n=0;n<t.length;n++)console.log(t[n]),t[n].degreeName+" "+t[n].classNumber===e&&a.setState({display:"class",whichClass:t[n]})},a.state={showSidebar:!0,display:"none",whichClass:"none",signedIn:e.signedIn,email:e.email,classes:null,classNames:null};var n=!1;return a.loadClasses=function(){var e=this;fetch("/SycamoreScheduler/ClassesServlet",{method:"GET"}).then(function(e){return n=e.ok,e.json()}).then(function(t){if(n){console.log(t);var a=t.map(function(e){var t=Object.keys(e)[0];return e[t].degreeName+" "+e[t].classNumber});e.setState({classes:t,classNames:a},function(){console.log("ClassesServlet returned status 200"),console.log("Classes stored in this.state.classes"),console.log("Class names:\n"),console.log(e.state.classNames)})}else console.log("ClassesServlet did not return status 200."),console.log(JSON.stringify(t))})}.bind(Object(S.a)(Object(S.a)(a))),a.loadClasses(),a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this,t=this.state,a=t.showSidebar,n=t.display,l=t.whichClass,i=(t.signedIn,t.email);return r.a.createElement(y.a.Consumer,null,function(t){return r.a.createElement(E.a,{flex:!0,direction:"column",align:"stretch",justify:"start"},r.a.createElement(V,null,r.a.createElement(C.a,{plain:!0,path:"/"},r.a.createElement(I.a,{level:"1",color:"white"},"Sycamore Scheduler")),r.a.createElement(E.a,{direction:"row",align:"center",justify:"end"},r.a.createElement(X,{margin:{right:"large"},text:"Classes",func:function(){return e.setState({showSidebar:!e.state.showSidebar})}}),e.state.signedIn&&r.a.createElement(X,{margin:{right:"large"},text:"Course Plan",func:function(){return e.setState({display:"coursePlan"})}}),e.state.signedIn&&r.a.createElement(X,{text:"Profile",func:function(){return e.setState({display:"profile"})}}))),r.a.createElement(E.a,{fill:!0,direction:"row",justify:"start",align:"stretch",animation:{type:"fadeIn",delay:500,duration:500,size:"large"}},null!==e.state.classNames&&r.a.createElement(j.a,{direction:"horizontal",open:a},r.a.createElement(E.a,{width:"medium",animation:{type:"slideRight",delay:500,duration:500,size:"large"},style:{minHeight:"100%"},background:"light-2"},r.a.createElement(z,{classes:e.state.classNames,fullInfo:e.state.classes,clickFunc:e.displayClass}))),"coursePlan"===n&&r.a.createElement(W,null),"profile"===n&&r.a.createElement(J,null),"none"===n&&r.a.createElement(E.a,{flex:!0,direction:"column",justify:"center",align:"center",animation:{type:"fadeIn",delay:500,duration:500,size:"large"}},r.a.createElement(I.a,{level:"1"},"Click on a class to view details"),!0===e.state.signedIn&&r.a.createElement(I.a,{level:"1"},i),r.a.createElement(v.a,{hoverIndicator:!0,onClick:function(){console.log("Testing GET /ProfileServlet ..."),fetch("/SycamoreScheduler/ProfileServlet?profileEmail=sajeevsa@usc.edu",{method:"GET"}).then(function(e){return e.json()}).then(function(e){var t=e.full_name,a=e.major_1;console.log("NAME:\t"+t+"\nMAJOR:\t"+a)})},label:"Do some AJAX"})),"class"===n&&r.a.createElement(Y,{classInfo:l})))})}}]),t}(n.Component),_=a(102),Z=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(c.a)(this,Object(m.a)(t).call(this,e))).state={signedIn:a.props.signedIn},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement(E.a,{flex:!0,direction:"row",align:"center",justify:"center",gap:"small"},r.a.createElement(E.a,{height:"small",width:"small",animation:{type:"slideRight",delay:0,duration:500,size:"large"},border:{side:"all",size:"small",color:"dark-1"},pad:"small",background:"main",style:{borderRadius:"20px"}},r.a.createElement(_.a,{fit:"contain",src:"/SycamoreScheduler/leaf.png"})),r.a.createElement(E.a,{direction:"column",justify:"center",align:"center",height:"small"},r.a.createElement(E.a,{flex:!0,direction:"row",pad:{top:"medium",horizontal:"medium",bottom:"0"},gap:"small"},r.a.createElement(E.a,{pad:"0",margin:"0",animation:{type:"slideDown",delay:0,duration:500,size:"large"}},r.a.createElement(I.a,{margin:"0",level:"1",color:"black"},"Sycamore")),r.a.createElement(E.a,{pad:"0",margin:"0",animation:{type:"fadeIn",delay:200,duration:400,size:"large"}},r.a.createElement(I.a,{margin:"0",level:"1",color:"main"},"Scheduler"))),r.a.createElement(E.a,{direction:"row",align:"center",justify:"center",animation:{type:"slideUp",delay:0,duration:500,size:"large"},margin:{bottom:"large"}},!this.state.signedIn&&r.a.createElement(C.a,{path:"/Register",hoverIndicator:!0,label:r.a.createElement(O.a,{size:"large"},r.a.createElement("strong",null,"Register")),color:"main",margin:{right:"medium"}}),!this.state.signedIn&&r.a.createElement(C.a,{path:"/SignIn",hoverIndicator:!0,label:r.a.createElement(O.a,{size:"large"},r.a.createElement("strong",null,"Sign In")),color:"main",margin:{right:"medium"}}),this.state.signedIn&&r.a.createElement(v.a,{hoverIndicator:!0,label:r.a.createElement(O.a,{size:"large"},r.a.createElement("strong",null,"Sign Out")),color:"main",onClick:function(){e.props.onSignOut()},margin:{right:"medium"}}),!this.state.signedIn&&r.a.createElement(C.a,{path:"/Home",hoverIndicator:!0,label:r.a.createElement(O.a,{size:"large"},r.a.createElement("strong",null,"Guest")),color:"main"}),this.state.signedIn&&r.a.createElement(C.a,{path:"/Home",hoverIndicator:!0,label:r.a.createElement(O.a,{size:"large"},r.a.createElement("strong",null,"Home")),color:"main"}))))}}]),t}(n.Component),$=a(84),q=a(94),ee=a(87),te=a(88),ae=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(c.a)(this,Object(m.a)(t).call(this,e))).doLogin=function(e){if(""===a.state.email||""===a.state.password){var t="Please enter your ";return""===a.state.email&&(t+="email"),""===a.state.password?(a.state.email&&(t+=" and "),t+="password."):t+=".",void a.setState({error:!0,errormsg:t})}if(-1===a.state.email.indexOf("@")||-1===a.state.email.indexOf(".")||a.state.email.indexOf(".")-a.state.email.indexOf("@")<2)a.setState({success:!1,error:!0,errormsg:"Email is not formatted correctly."});else{var n="email="+a.state.email+"&password="+a.state.password,r=!1;fetch("/SycamoreScheduler/LoginServlet",{method:"POST",headers:{"content-type":"application/x-www-form-urlencoded"},body:n}).then(function(e){return r=e.ok,e.json()}).then(function(e){r?a.setState({success:!0,error:!1,errormsg:""},function(){a.props.onSignIn(a.state.email),setTimeout(function(){a.props.history.push("/Home")},1e3)}):a.setState({success:!1,error:!0,errormsg:e.error})})}},a.handleChange=function(e,t){"email"===e?a.setState({email:t.target.value}):"password"===e&&a.setState({password:t.target.value})},a.state={email:"",password:"",error:!1,errormsg:"",success:!1},a.emailRef=r.a.createRef(),a.passwordRef=r.a.createRef(),a.focusSomething=function(e){e.current.focus()},a.focusSomething.bind(Object(S.a)(Object(S.a)(a))),a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement(E.a,{flex:!0,direction:"column",justify:"center",align:"center"},r.a.createElement(E.a,{direction:"column",align:"center",justify:"start",pad:"xlarge",gap:"large",border:{side:"all",color:"main",size:"medium"},style:{borderRadius:"20px"},animation:{type:"fadeIn",delay:0,duration:500,size:"large"}},r.a.createElement(I.a,{level:"1",margin:"0"},"Sign In"),r.a.createElement($.a,null,r.a.createElement(q.a,{id:"email",ref:this.emailRef,size:"medium",focusIndicator:!0,placeholder:r.a.createElement(E.a,{onClick:function(){e.focusSomething(e.emailRef)},direction:"row",align:"center",justify:"between",gap:"small"},r.a.createElement(O.a,{style:{fontFamily:"Inconsolata"},size:"large"},"email"),r.a.createElement(O.a,{style:{fontFamily:"Inconsolata"},size:"large",color:"main"},"*")),value:this.state.email,onChange:function(t){e.handleChange("email",t)}})),r.a.createElement($.a,null,r.a.createElement(q.a,{id:"password",ref:this.passwordRef,size:"medium",type:"password",focusIndicator:!0,placeholder:r.a.createElement(E.a,{onClick:function(){e.focusSomething(e.passwordRef)},direction:"row",align:"center",justify:"between",gap:"small"},r.a.createElement(O.a,{style:{fontFamily:"Inconsolata"},size:"large"},"password"),r.a.createElement(O.a,{style:{fontFamily:"Inconsolata"},size:"large",color:"main"},"*")),value:this.state.password,onChange:function(t){e.handleChange("password",t)}})),this.state.error&&r.a.createElement(E.a,{flex:!0,background:"main",direction:"column",align:"center",justify:"center",pad:"medium",style:{borderRadius:"10px"}},r.a.createElement(O.a,{color:"white"},this.state.errormsg)),this.state.success&&r.a.createElement(E.a,{flex:!0,background:"neutral-3",animation:{type:"fadeIn",delay:0,duration:700,size:"large"},direction:"column",align:"center",justify:"center",pad:"small",style:{borderRadius:"10px"}},r.a.createElement(O.a,{color:"white"},"Success!")),r.a.createElement(E.a,{direction:"row",align:"center",justify:"center",gap:"medium"},r.a.createElement(C.a,{path:"/",hoverIndicator:!0,color:"dark-2",label:r.a.createElement(ee.a,{color:"main",size:"large"})}),r.a.createElement(v.a,{hoverIndicator:!0,label:r.a.createElement(te.a,{size:"large",color:"green"}),color:"dark-2",onClick:function(t){e.doLogin(t)}}))))}}]),t}(n.Component),ne=a(46),re=a(90),le=a(63),ie=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(c.a)(this,Object(m.a)(t).call(this,e))).state={fName:"",lName:"",email:"",password:"",major1:"",major2:"",minor1:"",minor2:"",error:!1,errormsg:"",success:!1,programs:le},a.handleChange=function(e,t){a.setState({form_elements:Object(ne.a)({},e,t)})},a.doRegister=function(e){var t=!1,n="Please enter your ",r=[];if(-1===a.state.email.indexOf("@")||-1===a.state.email.indexOf(".")||a.state.email.indexOf(".")-a.state.email.indexOf("@")<2)a.setState({success:!1,error:!0,errormsg:"Email is not formatted correctly."});else if(["fName","lName","email","password","major1"].map(function(e){return""===a.state[e]&&(t=!0,"fName"===e?r.push("first name"):"lName"===e?r.push("last name"):"email"===e?r.push("email"):"password"===e?r.push("password"):"major1"===e&&r.push("major")),0}),t){for(var l=0;l<r.length;l++)n+=r[l],l===r.length-1?n+=".":n+=", ",l===r.length-2&&(n+="and ");a.setState({error:!0,errormsg:n})}else{for(var i=["fName","lName","email","password","major1","major2","minor1","minor2"],o="",s=0;s<i.length;s++){var c=i[s];""!==a.state[c]&&(0!==s&&(o+="&"),o+=c+"="+a.state[c])}var m=!1;fetch("/SycamoreScheduler/RegisterServlet",{method:"POST",headers:{"content-type":"application/x-www-form-urlencoded"},body:o}).then(function(e){return m=e.ok,e.json()}).then(function(e){m?a.setState({error:!1,errormsg:"",success:!0},function(){setTimeout(function(){a.props.history.push("/SignIn")},1e3)}):a.setState({error:!0,errormsg:e.error,success:!1})})}},a.fNameRef=r.a.createRef(),a.lNameRef=r.a.createRef(),a.emailRef=r.a.createRef(),a.passwordRef=r.a.createRef(),a.focusSomething=function(e){e.current.focus()},a.focusSomething.bind(Object(S.a)(Object(S.a)(a))),a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement(E.a,{flex:!0,direction:"column",justify:"center",align:"center"},r.a.createElement(E.a,{direction:"column",align:"center",justify:"start",gap:"large",pad:{vertical:"large",horizontal:"xlarge"},border:{side:"all",color:"main",size:"medium"},animation:{type:"fadeIn",delay:0,duration:500,size:"large"},style:{borderRadius:"20px"}},r.a.createElement(E.a,{flex:!0,width:"100%",align:"center",justify:"center"},r.a.createElement(I.a,{level:"1",margin:"0"},"Register")),r.a.createElement(E.a,{flex:!0,width:"100%",direction:"row",align:"center",justify:"between",gap:"large"},r.a.createElement($.a,null,r.a.createElement(q.a,{ref:this.fNameRef,id:"fName",size:"medium",focusIndicator:!0,placeholder:r.a.createElement(E.a,{onClick:function(){e.focusSomething(e.fNameRef)},direction:"row",align:"center",justify:"between",gap:"small"},r.a.createElement(O.a,{style:{fontFamily:"Inconsolata"},size:"large"},"first name"),r.a.createElement(O.a,{style:{fontFamily:"Inconsolata"},size:"large",color:"main"},"*")),value:this.state.fName,onChange:function(t){return e.setState({fName:t.target.value})}})),r.a.createElement($.a,null,r.a.createElement(q.a,{ref:this.lNameRef,id:"lName",size:"medium",focusIndicator:!0,placeholder:r.a.createElement(E.a,{onClick:function(){e.focusSomething(e.lNameRef)},direction:"row",align:"center",justify:"between",gap:"small"},r.a.createElement(O.a,{style:{fontFamily:"Inconsolata"},size:"large"},"last name"),r.a.createElement(O.a,{style:{fontFamily:"Inconsolata"},size:"large",color:"main"},"*")),value:this.state.lName,onChange:function(t){return e.setState({lName:t.target.value})}}))),r.a.createElement(E.a,{flex:!0,width:"100%",direction:"row",align:"center",justify:"between",gap:"large"},r.a.createElement($.a,null,r.a.createElement(q.a,{ref:this.emailRef,id:"email",size:"medium",focusIndicator:!0,placeholder:r.a.createElement(E.a,{onClick:function(){e.focusSomething(e.emailRef)},direction:"row",align:"center",justify:"between",gap:"small"},r.a.createElement(O.a,{style:{fontFamily:"Inconsolata"},size:"large"},"email"),r.a.createElement(O.a,{style:{fontFamily:"Inconsolata"},size:"large",color:"main"},"*")),value:this.state.email,onChange:function(t){return e.setState({email:t.target.value})}})),r.a.createElement($.a,null,r.a.createElement(q.a,{ref:this.passwordRef,id:"password",size:"medium",type:"password",focusIndicator:!0,placeholder:r.a.createElement(E.a,{onClick:function(){e.focusSomething(e.passwordRef)},direction:"row",align:"center",justify:"between",gap:"small"},r.a.createElement(O.a,{style:{fontFamily:"Inconsolata"},size:"large"},"password"),r.a.createElement(O.a,{style:{fontFamily:"Inconsolata"},size:"large",color:"main"},"*")),value:this.state.password,onChange:function(t){return e.setState({password:t.target.value})}}))),r.a.createElement(E.a,{flex:!0,width:"100%",direction:"row",align:"center",justify:"between",gap:"large"},r.a.createElement(re.a,{size:"small",placeholder:r.a.createElement(O.a,{size:"large"},"major"),value:this.state.major1,options:this.state.programs,onChange:function(t){e.setState({major1:t.value})},onClose:function(){return e.setState({programs:le})},onSearch:function(t){var a=new RegExp(t,"i");e.setState({programs:le.filter(function(e){return a.test(e)})})}}),r.a.createElement(re.a,{size:"small",placeholder:r.a.createElement(O.a,{size:"large"},"minor"),value:this.state.minor1,options:this.state.programs,onChange:function(t){e.setState({minor1:t.value})},onClose:function(){return e.setState({programs:le})},onSearch:function(t){var a=new RegExp(t,"i");e.setState({programs:le.filter(function(e){return a.test(e)})})}})),this.state.error&&r.a.createElement(E.a,{flex:!0,background:"main",direction:"column",align:"center",justify:"center",pad:"medium",style:{borderRadius:"10px"}},r.a.createElement(O.a,{color:"white"},this.state.errormsg)),this.state.success&&r.a.createElement(E.a,{flex:!0,background:"neutral-3",animation:{type:"fadeIn",delay:0,duration:700,size:"large"},direction:"column",align:"center",justify:"center",pad:"small",style:{borderRadius:"10px"}},r.a.createElement(O.a,{color:"white"},"Success!")),r.a.createElement(E.a,{flex:!0,width:"100%",direction:"row",align:"center",justify:"center",gap:"medium"},r.a.createElement(C.a,{path:"/",hoverIndicator:!0,color:"dark-2",label:r.a.createElement(ee.a,{color:"main",size:"large"})}),r.a.createElement(v.a,{hoverIndicator:!0,label:r.a.createElement(te.a,{size:"large",color:"green"}),color:"dark-2",onClick:function(t){e.doRegister(t)}}))))}}]),t}(n.Component);function oe(){var e=Object(d.a)(["\n\t\t\tborder-radius: ",";\n\t\t"]);return oe=function(){return e},e}function se(){var e=Object(d.a)(["\n\t\t\tflex: 0 0;\n\t\t\tpadding-top: ",";\n\t\t\tpadding-bottom: ",";\n\t\t\tbox-shadow: 0;\n\t\t  "]);return se=function(){return e},e}var ce={global:{colors:{main:"#ff3300",darker:"#d21e32"},font:{family:"Karla",color:"#ffffff"},hover:{background:"inherit"}},button:{color:"dark-1",border:{color:"main"}},anchor:{color:"#ff3300",hover:{textDecoration:"none"}},box:{extend:{whiteSpace:"nowrap"}},tabs:{background:"light-2",header:{background:"light-2",extend:function(e){var t=e.theme;return Object(p.a)(se(),t.global.edgeSize.medium,t.global.edgeSize.medium)}},gap:"medium",extend:"\n\t\tdiv[role='tabpanel'] {\n\t\t\toverflow-y: auto;\n\t\t\toverflow-x: hidden;\n\t\t\tpadding-bottom: 10%;\n\t\t\tfont-family: 'Inconsolata';\n\t\t}\n        "},tab:{active:{background:"main",color:"white"},color:"main",background:"white",hover:{background:"pink",border:{side:"all",color:"main",size:"small"},color:"white"},border:void 0,margin:void 0,pad:{bottom:void 0,horizontal:"xsmall"},extend:function(e){var t=e.theme;return Object(p.a)(oe(),t.global.control.border.radius)}}},me=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(c.a)(this,Object(m.a)(t).call(this,e))).onSignIn=function(e){setTimeout(function(){a.setState({signedIn:!0,userEmail:e})},1e3)},a.onSignOut=function(){a.setState({signedIn:!1,userEmail:""})},a.state={signedIn:!1,userEmail:""},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement(g.a,{basename:"/SycamoreScheduler"},r.a.createElement(h.a,{theme:ce,full:!0},r.a.createElement(n.Fragment,null,r.a.createElement(function(){return r.a.createElement(E.a,{fill:!0},r.a.createElement(f.a,{exact:!0,path:"/",render:function(t){return r.a.createElement(Z,Object.assign({onSignOut:e.onSignOut,signedIn:e.state.signedIn},t))}}),r.a.createElement(f.a,{path:"/Home",render:function(t){return r.a.createElement(Q,Object.assign({signedIn:e.state.signedIn,email:e.state.userEmail},t))}}),r.a.createElement(f.a,{path:"/SignIn",render:function(t){return r.a.createElement(ae,Object.assign({onSignIn:e.onSignIn},t))}}),r.a.createElement(f.a,{path:"/Register",component:ie}))},null))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(me,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[52,2,1]]]);
//# sourceMappingURL=main.b00a02eb.chunk.js.map