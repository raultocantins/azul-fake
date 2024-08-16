//tealium universal tag - utag.460 ut4.0.202408011752, Copyright 2024 Tealium.com Inc. All Rights Reserved.
var AWIN={};AWIN.Tracking={};try{(function(id,loader){var u={"id":id};utag.o[loader].sender[id]=u;if(utag.ut===undefined){utag.ut={};}
var match=/ut\d\.(\d*)\..*/.exec(utag.cfg.v);if(utag.ut.loader===undefined||!match||parseInt(match[1])<41){u.loader=function(o,a,b,c,l,m){utag.DB(o);a=document;if(o.type=="iframe"){m=a.getElementById(o.id);if(m&&m.tagName=="IFRAME"){b=m;}else{b=a.createElement("iframe");}o.attrs=o.attrs||{};utag.ut.merge(o.attrs,{"height":"1","width":"1","style":"display:none"},0);}else if(o.type=="img"){utag.DB("Attach img: "+o.src);b=new Image();}else{b=a.createElement("script");b.language="javascript";b.type="text/javascript";b.async=1;b.charset="utf-8";}if(o.id){b.id=o.id;}for(l in utag.loader.GV(o.attrs)){b.setAttribute(l,o.attrs[l]);}b.setAttribute("src",o.src);if(typeof o.cb=="function"){if(b.addEventListener){b.addEventListener("load",function(){o.cb();},false);}else{b.onreadystatechange=function(){if(this.readyState=="complete"||this.readyState=="loaded"){this.onreadystatechange=null;o.cb();}};}}if(o.type!="img"&&!m){l=o.loc||"head";c=a.getElementsByTagName(l)[0];if(c){utag.DB("Attach to "+l+": "+o.src);if(l=="script"){c.parentNode.insertBefore(b,c);}else{c.appendChild(b);}}}};}else{u.loader=utag.ut.loader;}
if(utag.ut.typeOf===undefined){u.typeOf=function(e){return({}).toString.call(e).match(/\s([a-zA-Z]+)/)[1].toLowerCase();};}else{u.typeOf=utag.ut.typeOf;}
u.ev={"view":1,"link":1};u.scriptrequested=false;u.map_func=function(arr,obj,item){var i=arr.shift();obj[i]=obj[i]||{};if(arr.length>0){u.map_func(arr,obj[i],item);}else{obj[i]=item;}};u.hasOwn=function(o,a){return o!=null&&Object.prototype.hasOwnProperty.call(o,a);};u.isEmptyObject=function(o,a){for(a in o){if(u.hasOwn(o,a)){return false;}}
return true;};u.forceBoolean=function(flag){if(u.typeOf(flag)==="string"){if(flag.toLowerCase()==="true"||flag==="1"||flag.toLowerCase()==="on"){return true;}else{return false;}}else if(u.typeOf(flag)=="number"){if(flag!==0){return true;}else{return false;}}else{return flag;}};u.event_map={"conversion":[{"name":"totalAmount","required":true},{"name":"orderReference","required":true},{"name":"channel"},{"name":"commissionGroup"},{"name":"voucher_code"},{"name":"currencyCode"},{"name":"custom"},{"name":"isTest"}],"addproducts":[{"name":"orderReference","required":true},{"name":"productId","required":true},{"name":"productName","required":true},{"name":"productItemPrice","required":true},{"name":"productQuantity"},{"name":"productSku"},{"name":"commissionGroupCode"},{"name":"productCategory"}]};u.std_params={"totalAmount":function(){return u.data.order_subtotal;},"channel":function(){return u.data.channel;},"orderReference":function(){return u.data.order_id;},"commissionGroup":function(){return u.data.commission_group;},"voucher_code":function(){return u.data.order_coupon_code;},"currencyCode":function(){return u.data.order_currency;},"isTest":function(){return u.forceBoolean(u.data.is_test)?1:0;},"productId":function(){return u.data.product_id;},"productName":function(){return u.data.product_name;},"productItemPrice":function(){return u.data.product_unit_price;},"productQuantity":function(){return u.data.product_quantity;},"productSku":function(){return u.data.product_sku;},"commissionGroupCode":function(){return u.data.product_commission;},"productCategory":function(){return u.data.product_category;},"custom":function(){return u.data.custom;}};u.map={"cp.AwinChannelCookie":"channel","booking_currency":"order_currency","payment_revenue":"order_subtotal","transaction:true":"conversion","_sm_460_5":"custom.1","_sm_460_6":"custom.2","_sm_460_7":"custom.3","_sm_460_8":"custom.2","_sm_460_9":"custom.3","_sm_460_10":"order_id"};u.extend=[function(a,b){try{b['_sm_460_10']=b.transaction=="true"?b.booking_pnr:undefined;;}catch(e){utag.DB(e);}
try{b['_sm_460_5']=b.section=="fluxo-compra"?"voo":b.section=="fluxo-reserva-hotel"?"hospedagem":"outro";}catch(e){utag.DB(e);}
try{b['_sm_460_6']=b.search_departureDate?.split('-').reverse().join('/');}catch(e){utag.DB(e);}
try{b['_sm_460_7']=b.search_returnDate?.split('-').reverse().join('/');}catch(e){utag.DB(e);}
try{b['_sm_460_8']=b.searchHotel_checkinDate?.split('-').reverse().join('/');}catch(e){utag.DB(e);}
try{b['_sm_460_9']=b.searchHotel_checkoutDate?.split('-').reverse().join('/');}catch(e){utag.DB(e);}}];u.send=function(a,b){if(u.ev[a]||u.ev.all!==undefined){utag.DB("send:460");utag.DB(b);var c,d,e,f,h;u.data={"qsp_delim":"&","kvp_delim":"=","base_url":"https://www.dwin1.com/","advertiser_id":"75746","add_products":"on","is_test":"off","commission_group":"","product_id":[],"product_name":[],"product_sku":[],"product_category":[],"product_commission":[],"product_quantity":[],"product_unit_price":[],"event":[],"eventData":{},"custom":[]};for(c=0;c<u.extend.length;c++){try{d=u.extend[c](a,b);if(d==false)return}catch(e){}};utag.DB("send:460:EXTENSIONS");utag.DB(b);c=[];for(d in utag.loader.GV(u.map)){if(b[d]!==undefined&&b[d]!==""){e=u.map[d].split(",");for(f=0;f<e.length;f++){u.map_func(e[f].split("."),u.data,b[d]);}}else{h=d.split(":");if(h.length===3&&b[h[0]]===h[1]){if(u.map[d]){u.data.event=u.data.event.concat(u.map[d].split(","));if(!u.data[u.map[d].split(",")]){u.data[u.map[d].split(",")]={};}
u.data[u.map[d].split(",")].channel=h[2];}}}}
utag.DB("send:460:MAPPINGS");utag.DB(u.data);u.data.order_id=u.data.order_id||b._corder||"";u.data.order_subtotal=u.data.order_subtotal||b._csubtotal||"";u.data.order_currency=u.data.order_currency||b._ccurrency||"";u.data.order_coupon_code=u.data.order_coupon_code||b._cpromo||"";if(u.data.product_id.length===0&&b._cprod!==undefined){u.data.product_id=b._cprod.slice(0);}
if(u.data.product_name.length===0&&b._cprodname!==undefined){u.data.product_name=b._cprodname.slice(0);}
if(u.data.product_sku.length===0&&b._csku!==undefined){u.data.product_sku=b._csku.slice(0);}
if(u.data.product_category.length===0&&b._ccat!==undefined){u.data.product_category=b._ccat.slice(0);}
if(u.data.product_quantity.length===0&&b._cquan!==undefined){u.data.product_quantity=b._cquan.slice(0);}
if(u.data.product_unit_price.length===0&&b._cprice!==undefined){u.data.product_unit_price=b._cprice.slice(0);}
if(u.data.event.length===0&&b._cevent!==undefined){u.data.event=(u.typeOf(b._cevent)==="array")?b._cevent.slice(0):[b._cevent];}
if(!u.data.advertiser_id){utag.DB(u.id+": Tag not fired: Required attribute not populated");return;}
var i,j,p,event_param,_event;if(u.forceBoolean(u.data.add_products)){for(i=0;i<u.data.event.length;i++){if(u.data.event[i]==="conversion"){p=true;}}
if(p){u.data.event.push("addproducts");}}
if(u.data.order_id){for(i=0;i<u.data.event.length;i++){if(u.data.event[i]==="conversion"){p=true;}}
if(!p){u.data.event.push("conversion");u.data.event.push("addproducts");}}
for(i=0;i<u.data.event.length;i++){_event=u.data.event[i];u.data.eventData[_event]=u.data.eventData[_event]||{};if(u.event_map[_event]){for(j=0;j<u.event_map[_event].length;j++){event_param=u.event_map[_event][j];u.data.eventData[_event][event_param.name]=u.std_params[event_param.name](_event);if(u.data.eventData[_event][event_param.name]===undefined&&event_param.required){utag.DB(u.id+": Event: "+_event+": Required attribute not populated");}}}
var dataName;for(dataName in u.data[_event]){u.data.eventData[_event][dataName]=u.data[_event][dataName];}
if(u.data.eventData[_event].custom&&u.data.eventData[_event].custom.length>1){var customArray=[];for(j=0;j<u.data.eventData[_event].custom.length;j++){if(u.data.eventData[_event].custom[j]){customArray.push(u.data.eventData[_event].custom[j]);}}
u.data.eventData[_event].custom=customArray;}
switch(_event){case"conversion":if(u.data.eventData[_event].commissionGroup===""){u.data.eventData[_event].commissionGroup="DEFAULT";}
AWIN.Tracking.Sale={};AWIN.Tracking.Sale.amount=u.data.eventData[_event].totalAmount;AWIN.Tracking.Sale.channel=u.data.eventData[_event].channel;AWIN.Tracking.Sale.orderRef=u.data.eventData[_event].orderReference;AWIN.Tracking.Sale.parts=u.data.eventData[_event].commissionGroup+":"+u.data.eventData[_event].totalAmount;AWIN.Tracking.Sale.voucher=u.data.eventData[_event].voucher_code;AWIN.Tracking.Sale.currency=u.data.eventData[_event].currencyCode;AWIN.Tracking.Sale.custom=u.data.eventData[_event].custom;AWIN.Tracking.Sale.test=u.data.eventData[_event].isTest;var pixel_url="https://www.awin1.com/sread.img?tt=ns&tv=2";pixel_url+="&merchant="+u.data.advertiser_id;pixel_url+="&amount="+u.data.eventData[_event].totalAmount;pixel_url+="&ch="+u.data.eventData[_event].channel;pixel_url+="&parts="+u.data.eventData[_event].commissionGroup+":"+u.data.eventData[_event].totalAmount;pixel_url+="&vc="+u.data.eventData[_event].voucher_code;pixel_url+="&cr="+u.data.eventData[_event].currencyCode;pixel_url+="&ref="+u.data.eventData[_event].orderReference;for(j=0;j<u.data.eventData[_event].custom.length;j++){pixel_url+="&p"+(j+1)+"="+u.data.eventData[_event].custom[j];}
pixel_url+="&testmode="+u.data.eventData[_event].isTest;u.loader({"type":"img","src":pixel_url,"cb":null,"loc":"script","id":"utag_460_img","attrs":{}});if(u.scriptrequested){AWIN.Tracking.run();}
break;case"addproducts":var awProductsForm=document.createElement("form");awProductsForm.name="aw_basket_form";awProductsForm.setAttribute("style","display: none;");document.getElementsByTagName("body")[0].appendChild(awProductsForm);var awProductsTextArea=document.createElement("textarea");awProductsTextArea.id="aw_basket";awProductsTextArea.wrap="physical";var sProductData="";for(j=0;j<u.data.eventData[_event].productId.length;j++){sProductData+="AW:P|";sProductData+=u.data.advertiser_id+"|";sProductData+=u.data.eventData[_event].orderReference+"|";sProductData+=u.data.eventData[_event].productId[j]+"|";sProductData+=u.data.eventData[_event].productName[j]+"|";sProductData+=u.data.eventData[_event].productItemPrice[j]+"|";sProductData+=u.data.eventData[_event].productQuantity[j]+"|";sProductData+=(u.data.eventData[_event].productSku[j]||"")+"|";sProductData+=(u.data.eventData[_event].commissionGroupCode[j]||"DEFAULT")+"|";sProductData+=u.data.eventData[_event].productCategory[j]||""+"";sProductData+="\r\n";}
awProductsTextArea.value=sProductData;document.aw_basket_form.appendChild(awProductsTextArea);break;default:break;}}
if(!u.scriptrequested){u.scriptrequested=true;u.loader({"type":"script","src":u.data.base_url+u.data.advertiser_id+".js","cb":null,"loc":"script","id":"utag_460","attrs":{}});}
utag.DB("send:460:COMPLETE");}};utag.o[loader].loader.LOAD(id);}("460","azul.main"));}catch(error){utag.DB(error);}
