//tealium universal tag - utag.439 ut4.0.202408011752, Copyright 2024 Tealium.com Inc. All Rights Reserved.
try{(function(id,loader){var u={"id":id};utag.o[loader].sender[id]=u;if(utag.ut===undefined){utag.ut={};}
var match=/ut\d\.(\d*)\..*/.exec(utag.cfg.v);if(utag.ut.loader===undefined||!match||parseInt(match[1])<41){u.loader=function(o,a,b,c,l,m){utag.DB(o);a=document;if(o.type=="iframe"){m=a.getElementById(o.id);if(m&&m.tagName=="IFRAME"){b=m;}else{b=a.createElement("iframe");}o.attrs=o.attrs||{};utag.ut.merge(o.attrs,{"height":"1","width":"1","style":"display:none"},0);}else if(o.type=="img"){utag.DB("Attach img: "+o.src);b=new Image();}else{b=a.createElement("script");b.language="javascript";b.type="text/javascript";b.async=1;b.charset="utf-8";}if(o.id){b.id=o.id;}for(l in utag.loader.GV(o.attrs)){b.setAttribute(l,o.attrs[l]);}b.setAttribute("src",o.src);if(typeof o.cb=="function"){if(b.addEventListener){b.addEventListener("load",function(){o.cb();},false);}else{b.onreadystatechange=function(){if(this.readyState=="complete"||this.readyState=="loaded"){this.onreadystatechange=null;o.cb();}};}}if(o.type!="img"&&!m){l=o.loc||"head";c=a.getElementsByTagName(l)[0];if(c){utag.DB("Attach to "+l+": "+o.src);if(l=="script"){c.parentNode.insertBefore(b,c);}else{c.appendChild(b);}}}};}else{u.loader=utag.ut.loader;}
if(utag.ut.typeOf===undefined){u.typeOf=function(e){return({}).toString.call(e).match(/\s([a-zA-Z]+)/)[1].toLowerCase();};}else{u.typeOf=utag.ut.typeOf;}
u.ev={"view":1,"link":1};u.hasOwn=function(o,a){return o!=null&&Object.prototype.hasOwnProperty.call(o,a);};u.isEmptyObject=function(o,a){for(a in o){if(u.hasOwn(o,a)){return false;}}return true;};u.toBoolean=function(val){val=val||"";return val===true||val.toLowerCase()==="true"||val.toLowerCase()==="on";};u.hasgtagjs=function(){window.gtagRename=window.gtagRename||""||"gtag";if(utag.ut.gtagScriptRequested){return true;}
var i,s=document.getElementsByTagName("script");for(i=0;i<s.length;i++){if(s[i].src&&s[i].src.indexOf("gtag/js")>=0&&(s[i].id&&s[i].id.indexOf('utag')>-1)){return true;}}
var data_layer_name=""||"dataLayer";window[data_layer_name]=window[data_layer_name]||[];if(typeof window[window.gtagRename]!=="function"){window[window.gtagRename]=function(){window[data_layer_name].push(arguments);};if(u.data.cross_track_domains!==""){window[window.gtagRename]("set","linker",{domains:u.data.cross_track_domains.split(","),accept_incoming:true});}
window[window.gtagRename]("js",new Date());}
return false;};u.isScriptRequestedInit=false;u.scriptRequestedInit=function(){if(u.isScriptRequestedInit){return}
u.scriptrequested=u.hasgtagjs();u.o=window[window.gtagRename];u.isScriptRequestedInit=true;}
u.map_func=function(arr,obj,item){var i=arr.shift();obj[i]=obj[i]||{};if(arr.length>0){u.map_func(arr,obj[i],item);}else{obj[i]=item;}};u.map={"fls_doubleclick_cat":"activity","fls_doubleclick_type":"activity_group","_sm_439_3:true":"conversion","dom.url":"custom.u1","pageName":"custom.u2","device":"custom.u3","user_tudoAzulNumber":"custom.u9"};u.extend=[function(a,b){try{b['_sm_439_3']=typeof b.fls_doubleclick_cat!="undefined"?"true":"false";}catch(e){utag.DB(e);}}];u.send=function(a,b){if(u.ev[a]||u.ev.all!==undefined){utag.DB("send:439");utag.DB(b);var c,d,e,f,h,i,j,k,_event,p,key;u.data={qsp_delim:"&",kvp_delim:"=",base_url:"https://www.googletagmanager.com/gtag/js",advertiser_id:"DC-13455031",activity_group:"",activity:"",counting_method:"standard",fire_purchase:"false",custom_scripts:"true",data_layer_name:"",cross_track_domains:"",session_id:"",product_id:[],product_quantity:[],product_unit_price:[],dc_custom_params:{},event_name:"",event:[],custom:{}};for(c=0;c<u.extend.length;c++){try{d=u.extend[c](a,b);if(d==false)return}catch(e){}};utag.DB("send:439:EXTENSIONS");utag.DB(b);for(d in utag.loader.GV(u.map)){if(b[d]!==undefined&&b[d]!==""){e=u.map[d].split(",");for(f=0;f<e.length;f++){u.map_func(e[f].split("."),u.data,b[d]);}}else{h=d.split(":");if(h.length===2&&b[h[0]]===h[1]){if(u.map[d]){u.data.event=u.data.event.concat(u.map[d].split(","));}}}}
utag.DB("send:439:MAPPINGS");utag.DB(u.data);u.scriptRequestedInit();u.data.order_id=u.data.order_id||b._corder||"";u.data.order_total=u.data.order_total||b._ctotal||"";if(u.data.product_quantity.length===0&&b._cquan!==undefined){u.data.product_quantity=b._cquan.slice(0);}
if(typeof(u.data.advertiser_id)==="string"&&u.data.advertiser_id!==""){u.data.advertiser_id=u.data.advertiser_id.split(",");}
if(typeof(u.data.activity_group)==="string"){u.data.activity_group=u.data.activity_group.split(",");}
if(typeof(u.data.activity)==="string"){u.data.activity=u.data.activity.split(",");}
if(typeof(u.data.counting_method)==="string"){u.data.counting_method=u.data.counting_method.split(",");}
if(typeof(u.data.session_id)==="string"){u.data.session_id=u.data.session_id.split(",");}
if(u.data.product_id.length===0&&b._cprod!==undefined){u.data.product_id=b._cprod.slice(0);}
if(u.data.product_quantity.length===0&&b._cquan!==undefined){u.data.product_quantity=b._cquan.slice(0);}
if(u.data.product_unit_price.length===0&&b._cprice!==undefined){u.data.product_unit_price=b._cprice.slice(0);}
if(!u.data.advertiser_id){utag.DB(u.id+": Tag not fired: Required attribute not populated");return;}
if(u.data.gtag_enable_tcf_support){window["gtag_enable_tcf_support"]=u.toBoolean(u.data.gtag_enable_tcf_support);}
u.o("set",{"developer_id.dYmQxMT":true});for(i=0;i<u.data.advertiser_id.length;i++){if(!/^[a-zA-Z]{2}-/.test(u.data.advertiser_id[i])){u.data.advertiser_id[i]="DC-"+u.data.advertiser_id[i];}}
u.data.base_url+="?id="+(u.data.advertiser_id[0]);if(u.data.data_layer_name){u.data.base_url=u.data.base_url+"&l="+u.data.data_layer_name;}
for(i=0;i<u.data.advertiser_id.length;i++){u.o("config",u.data.advertiser_id[i]);}
if(u.data.order_id){for(i=0;i<u.data.event.length;i++){if(u.data.event[i]==="purchase"){p=true;}}
if(!p&&u.toBoolean(u.data.fire_purchase)){u.data.event.push("purchase");if(u.data.counting_method[0]===""){u.data.counting_method[0]="transactions";}}}
var total_qty=0;if(typeof(u.data.product_quantity)==="number"){total_qty=u.data.product_quantity;}else if(u.data.product_quantity.length===1){total_qty=u.data.product_quantity[0];}else if(u.data.product_quantity.length>1){for(i=0;i<u.data.product_quantity.length;i++){total_qty+=parseInt(u.data.product_quantity[i],10);}}else{total_qty=1;}
for(i=0;i<u.data.event.length;i++){_event=u.data.event[i];for(j=0;j<u.data.advertiser_id.length;j++){var eventIdData={};eventIdData.allow_custom_scripts=u.toBoolean(u.data.custom_scripts);if(u.data.session_id.length===1&&u.data.session_id[0]!==""){eventIdData.session_id=u.data.session_id[0];}else if(u.data.session_id[j]!==""){eventIdData.session_id=u.data.session_id[j];}
if(u.data.order_total){eventIdData.value=u.data.order_total;eventIdData.transaction_id=u.data.order_id;}
if(u.data.product_quantity){eventIdData.quantity=total_qty;}
eventIdData.items=[];for(k=0;k<u.data.product_id.length;k++){if(typeof(u.data.product_unit_price[k])==="undefined"||typeof(u.data.product_quantity[k])==="undefined"){utag.DB("No matching unit price or quantity for product ID "+u.data.product_id[k]);}else{eventIdData.items.push({"id":u.data.product_id[k],"price":u.data.product_unit_price[k],"quantity":u.data.product_quantity[k]});}}
for(key in u.data.custom){eventIdData[key]=u.data.custom[key];}
if(!u.isEmptyObject(u.data.dc_custom_params)){eventIdData.dc_custom_params={};for(key in u.data.dc_custom_params){eventIdData.dc_custom_params[key]=u.data.dc_custom_params[key];}}
if(u.data.counting_method[j]&&u.data.counting_method[j]!==u.data.counting_method[j].toLowerCase()){u.data.counting_method[j]=u.data.counting_method[j].toLowerCase();utag.DB("Counting Method not supplied in proper case - converted to lower case");}
eventIdData.send_to=u.data.advertiser_id[j]+
"/"+(u.data.activity_group[j]||u.data.activity_group[0])+
"/"+(u.data.activity[j]||u.data.activity[0])+
"+"+(u.data.counting_method[j]||u.data.counting_method[0]);if(u.data.user_data){eventIdData.user_data=u.data.user_data}
if(_event==="purchase"){u.o("event","purchase",eventIdData);}
if(_event==="conversion"){u.o("event","conversion",eventIdData);}}}
if(!u.hasgtagjs()){u.scriptrequested=true;utag.ut.gtagScriptRequested=true;u.loader({"type":"script","src":u.data.base_url,"cb":null,"loc":"script","id":"utag_439","attrs":{}});}
utag.DB("send:439:COMPLETE");}};utag.o[loader].loader.LOAD(id);}("439","azul.main"));}catch(error){utag.DB(error);}
