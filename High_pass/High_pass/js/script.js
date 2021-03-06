//MAP
ymaps.ready(init);
function init() {
  let myMap = new ymaps.Map("map", {
    center: [55.758456, 37.626942],
    zoom: 13,
    controls: [],
  });
  let myPlacemark = new ymaps.Placemark([55.769535, 37.639985], {}, {
    iconLayout: 'default#image',
    iconImageHref: '../resources/map.svg',
    iconImageSize: [12, 12],




  });
  myMap.geoObjects.add(myPlacemark);
  myPlacemark.events.add('click', function () {
    let adress = document.querySelector('.adress')
    adress.classList.add('open')
});
}

//VALIDATE
var _=Object.defineProperty;var w=Object.getOwnPropertySymbols;var X=Object.prototype.hasOwnProperty,Z=Object.prototype.propertyIsEnumerable;var E=(p,b,g)=>b in p?_(p,b,{enumerable:!0,configurable:!0,writable:!0,value:g}):p[b]=g,L=(p,b)=>{for(var g in b||(b={}))X.call(b,g)&&E(p,g,b[g]);if(w)for(var g of w(b))Z.call(b,g)&&E(p,g,b[g]);return p};var u=(p,b,g)=>(E(p,typeof b!="symbol"?b+"":b,g),g);(function(p,b){typeof exports=="object"&&typeof module!="undefined"?module.exports=b():typeof define=="function"&&define.amd?define(b):(p=typeof globalThis!="undefined"?globalThis:p||self,p.JustValidate=b())})(this,function(){"use strict";const p=/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,b=/^[0-9]+$/,g=/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,x=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,I=n=>{let e=n;return typeof n=="string"&&(e=n.trim()),!e},T=n=>p.test(n),$=(n,e)=>n.length>e,M=(n,e)=>n.length<e,V=n=>b.test(n),P=n=>g.test(n),j=n=>x.test(n),G=(n,e)=>n>e,A=(n,e)=>n<e;var d;(function(n){n.Required="required",n.Email="email",n.MinLength="minLength",n.MaxLength="maxLength",n.Password="password",n.Number="number",n.MaxNumber="maxNumber",n.MinNumber="minNumber",n.StrongPassword="strongPassword",n.CustomRegexp="customRegexp",n.MinFilesCount="minFilesCount",n.MaxFilesCount="maxFilesCount",n.Files="files"})(d||(d={}));var y;(function(n){n.Required="required"})(y||(y={}));var k;(function(n){n.Label="label",n.LabelArrow="labelArrow"})(k||(k={}));const N=(n,e)=>{switch(n){case d.Required:return"The field is required";case d.Email:return"Email has invalid format";case d.MaxLength:return"The field must contain a maximum of :value characters".replace(":value",String(e));case d.MinLength:return"The field must contain a minimum of :value characters".replace(":value",String(e));case d.Password:return"Password must contain minimum eight characters, at least one letter and one number";case d.Number:return"Value should be a number";case d.StrongPassword:return"Password should contain minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character";case d.MaxNumber:return"Number should be less or equal than :value".replace(":value",String(e));case d.MinNumber:return"Number should be more or equal than :value".replace(":value",String(e));case d.MinFilesCount:return"Files count should be more or equal than :value".replace(":value",String(e));case d.MaxFilesCount:return"Files count should be less or equal than :value".replace(":value",String(e));case d.Files:return"Uploaded files have one or several invalid properties (extension/size/type etc)";default:return"Value is incorrect"}},q=n=>{switch(n){case y.Required:return"The field is required";default:return"Group is incorrect"}},F=n=>!!n&&typeof n.then=="function",z=".just-validate-error-label[data-tooltip=true]{position:fixed;padding:4px 8px;background:#423f3f;color:#fff;white-space:nowrap;z-index:10;border-radius:4px;transform:translateY(-5px)}.just-validate-error-label[data-tooltip=true]:before{content:'';width:0;height:0;border-left:solid 5px transparent;border-right:solid 5px transparent;border-bottom:solid 5px #423f3f;position:absolute;z-index:3;display:block;bottom:-5px;transform:rotate(180deg);left:calc(50% - 5px)}.just-validate-error-label[data-tooltip=true][data-direction=left]{transform:translateX(-5px)}.just-validate-error-label[data-tooltip=true][data-direction=left]:before{right:-7px;bottom:auto;left:auto;top:calc(50% - 2px);transform:rotate(90deg)}.just-validate-error-label[data-tooltip=true][data-direction=right]{transform:translateX(5px)}.just-validate-error-label[data-tooltip=true][data-direction=right]:before{right:auto;bottom:auto;left:-7px;top:calc(50% - 2px);transform:rotate(-90deg)}.just-validate-error-label[data-tooltip=true][data-direction=bottom]{transform:translateY(5px)}.just-validate-error-label[data-tooltip=true][data-direction=bottom]:before{right:auto;bottom:auto;left:calc(50% - 5px);top:-5px;transform:rotate(0)}",C=5,S={errorFieldStyle:{color:"#b81111",border:"1px solid #B81111"},errorFieldCssClass:"just-validate-error-field",successFieldCssClass:"just-validate-success-field",errorLabelStyle:{color:"#b81111"},errorLabelCssClass:"just-validate-error-label",successLabelCssClass:"just-validate-success-label",focusInvalidField:!0,lockForm:!0,testingMode:!1};class O{constructor(e,t,s){u(this,"form",null);u(this,"fields",{});u(this,"groupFields",{});u(this,"errors",{});u(this,"isValid",!1);u(this,"isSubmitted",!1);u(this,"globalConfig",S);u(this,"errorLabels",[]);u(this,"successLabels",[]);u(this,"eventListeners",[]);u(this,"dictLocale",[]);u(this,"currentLocale");u(this,"customStyleTags",{});u(this,"onSuccessCallback");u(this,"onFailCallback");u(this,"tooltips",[]);u(this,"lastScrollPosition");u(this,"isScrollTick");u(this,"refreshAllTooltips",()=>{this.tooltips.forEach(e=>{e.refresh()})});u(this,"handleDocumentScroll",()=>{this.lastScrollPosition=window.scrollY,this.isScrollTick||(window.requestAnimationFrame(()=>{this.refreshAllTooltips(),this.isScrollTick=!1}),this.isScrollTick=!0)});u(this,"formSubmitHandler",e=>{e.preventDefault(),this.isSubmitted=!0,this.globalConfig.lockForm&&this.lockForm(),this.validate().finally(()=>{var t,s;this.globalConfig.lockForm&&this.unlockForm(),this.isValid?(t=this.onSuccessCallback)==null||t.call(this,e):(s=this.onFailCallback)==null||s.call(this,this.fields)})});u(this,"handleFieldChange",e=>{let t,s;for(const i in this.fields){const r=this.fields[i];if(r.elem===e){t=r,s=i;break}}!t||!s||this.validateField(s,t,!0)});u(this,"handleGroupChange",e=>{let t,s;for(const i in this.groupFields){const r=this.groupFields[i];if(r.elems.find(a=>a===e)){t=r,s=i;break}}!t||!s||this.validateGroup(s,t)});u(this,"handlerChange",e=>{!e.target||(this.handleFieldChange(e.target),this.handleGroupChange(e.target),this.renderErrors())});this.initialize(e,t,s)}initialize(e,t,s){if(this.form=null,this.errors={},this.isValid=!1,this.isSubmitted=!1,this.globalConfig=S,this.errorLabels=[],this.eventListeners=[],this.customStyleTags={},this.tooltips=[],typeof e=="string"){const i=document.querySelector(e);if(!i)throw Error(`Form with ${e} selector not found! Please check the form selector`);this.setForm(i)}else if(e instanceof HTMLFormElement)this.setForm(e);else throw Error("Form selector is not valid. Please specify a string selector or a DOM element.");if(this.globalConfig=L(L({},S),t),s&&(this.dictLocale=s),this.isTooltip()){const i=document.createElement("style");i.textContent=z,this.customStyleTags[k.Label]=document.head.appendChild(i),this.addListener("scroll",document,this.handleDocumentScroll)}}getLocalisedString(e){var s;return!this.currentLocale||!this.dictLocale.length?e:((s=this.dictLocale.find(i=>i.key===e))==null?void 0:s.dict[this.currentLocale])||e}getFieldErrorMessage(e,t){const s=typeof e.errorMessage=="function"?e.errorMessage(this.getElemValue(t),this.fields):e.errorMessage;return this.getLocalisedString(s)||N(e.rule,e.value)}getFieldSuccessMessage(e,t){const s=typeof e=="function"?e(this.getElemValue(t),this.fields):e;return this.getLocalisedString(s)}getGroupErrorMessage(e){return this.getLocalisedString(e.errorMessage)||q(e.rule)}getGroupSuccessMessage(e){return this.getLocalisedString(e.successMessage)}setFieldInvalid(e,t){this.fields[e].isValid=!1,this.fields[e].errorMessage=this.getFieldErrorMessage(t,this.fields[e].elem)}setFieldValid(e,t){this.fields[e].isValid=!0,t!==void 0&&(this.fields[e].successMessage=this.getFieldSuccessMessage(t,this.fields[e].elem))}setGroupInvalid(e,t){this.groupFields[e].isValid=!1,this.groupFields[e].errorMessage=this.getGroupErrorMessage(t)}setGroupValid(e,t){this.groupFields[e].isValid=!0,this.groupFields[e].successMessage=this.getGroupSuccessMessage(t)}getElemValue(e){switch(e.type){case"checkbox":return e.checked;case"file":return e.files;default:return e.value}}validateGroupRule(e,t,s,i){switch(i.rule){case y.Required:(t==="radio"||t==="checkbox")&&(s.every(r=>!r.checked)?this.setGroupInvalid(e,i):this.setGroupValid(e,i))}}validateFieldRule(e,t,s,i=!1){const r=s.value,a=this.getElemValue(t);if(s.plugin){s.plugin(a,this.fields)||this.setFieldInvalid(e,s);return}switch(s.rule){case d.Required:{I(a)&&this.setFieldInvalid(e,s);break}case d.Email:{if(typeof a!="string"){this.setFieldInvalid(e,s);break}T(a)||this.setFieldInvalid(e,s);break}case d.MaxLength:{if(r===void 0){console.error(`Value for ${s.rule} rule for [${e}] field is not defined. The field will be always invalid.`),this.setFieldInvalid(e,s);break}if(typeof r!="number"){console.error(`Value for ${s.rule} rule for [${e}] should be a number. The field will be always invalid.`),this.setFieldInvalid(e,s);break}if(typeof a!="string"){this.setFieldInvalid(e,s);break}if(a==="")break;$(a,r)&&this.setFieldInvalid(e,s);break}case d.MinLength:{if(r===void 0){console.error(`Value for ${s.rule} rule for [${e}] field is not defined. The field will be always invalid.`),this.setFieldInvalid(e,s);break}if(typeof r!="number"){console.error(`Value for ${s.rule} rule for [${e}] should be a number. The field will be always invalid.`),this.setFieldInvalid(e,s);break}if(typeof a!="string"){this.setFieldInvalid(e,s);break}if(a==="")break;M(a,r)&&this.setFieldInvalid(e,s);break}case d.Password:{if(typeof a!="string"){this.setFieldInvalid(e,s);break}if(a==="")break;P(a)||this.setFieldInvalid(e,s);break}case d.StrongPassword:{if(typeof a!="string"){this.setFieldInvalid(e,s);break}if(a==="")break;j(a)||this.setFieldInvalid(e,s);break}case d.Number:{if(typeof a!="string"){this.setFieldInvalid(e,s);break}if(a==="")break;V(a)||this.setFieldInvalid(e,s);break}case d.MaxNumber:{if(r===void 0){console.error(`Value for ${s.rule} rule for [${e}] field is not defined. The field will be always invalid.`),this.setFieldInvalid(e,s);break}if(typeof r!="number"){console.error(`Value for ${s.rule} rule for [${e}] field should be a number. The field will be always invalid.`),this.setFieldInvalid(e,s);break}if(typeof a!="string"){this.setFieldInvalid(e,s);break}if(a==="")break;const l=+a;(Number.isNaN(l)||G(l,r))&&this.setFieldInvalid(e,s);break}case d.MinNumber:{if(r===void 0){console.error(`Value for ${s.rule} rule for [${e}] field is not defined. The field will be always invalid.`),this.setFieldInvalid(e,s);break}if(typeof r!="number"){console.error(`Value for ${s.rule} rule for [${e}] field should be a number. The field will be always invalid.`),this.setFieldInvalid(e,s);break}if(typeof a!="string"){this.setFieldInvalid(e,s);break}if(a==="")break;const l=+a;(Number.isNaN(l)||A(l,r))&&this.setFieldInvalid(e,s);break}case d.CustomRegexp:{if(r===void 0){console.error(`Value for ${s.rule} rule for [${e}] field is not defined. This field will be always invalid.`),this.setFieldInvalid(e,s);return}let l;try{l=new RegExp(r)}catch{console.error(`Value for ${s.rule} rule for [${e}] should be a valid regexp. This field will be always invalid.`),this.setFieldInvalid(e,s);break}const o=String(a);o!==""&&!l.test(o)&&this.setFieldInvalid(e,s);break}case d.MinFilesCount:{if(r===void 0){console.error(`Value for ${s.rule} rule for [${e}] field is not defined. This field will be always invalid.`),this.setFieldInvalid(e,s);break}if(typeof r!="number"){console.error(`Value for ${s.rule} rule for [${e}] field should be a number. The field will be always invalid.`),this.setFieldInvalid(e,s);break}if(Number.isFinite(a==null?void 0:a.length)&&a.length<r){this.setFieldInvalid(e,s);break}break}case d.MaxFilesCount:{if(r===void 0){console.error(`Value for ${s.rule} rule for [${e}] field is not defined. This field will be always invalid.`),this.setFieldInvalid(e,s);break}if(typeof r!="number"){console.error(`Value for ${s.rule} rule for [${e}] field should be a number. The field will be always invalid.`),this.setFieldInvalid(e,s);break}if(Number.isFinite(a==null?void 0:a.length)&&a.length>r){this.setFieldInvalid(e,s);break}break}case d.Files:{if(r===void 0){console.error(`Value for ${s.rule} rule for [${e}] field is not defined. This field will be always invalid.`),this.setFieldInvalid(e,s);return}if(typeof r!="object"){console.error(`Value for ${s.rule} rule for [${e}] field should be an object. This field will be always invalid.`),this.setFieldInvalid(e,s);return}const l=r.files;if(typeof l!="object"){console.error(`Value for ${s.rule} rule for [${e}] field should be an object with files array. This field will be always invalid.`),this.setFieldInvalid(e,s);return}const o=(c,h)=>{const f=Number.isFinite(h.minSize)&&c.size<h.minSize,m=Number.isFinite(h.maxSize)&&c.size>h.maxSize,v=Array.isArray(h.names)&&!h.names.includes(c.name),D=Array.isArray(h.extensions)&&!h.extensions.includes(c.name.split(".")[c.name.split(".").length-1]),H=Array.isArray(h.types)&&!h.types.includes(c.type);return f||m||v||D||H};if(typeof a=="object"&&a!==null)for(let c=0,h=a.length;c<h;++c){const f=a.item(c);if(!f){this.setFieldInvalid(e,s);break}if(o(f,l)){this.setFieldInvalid(e,s);break}}break}default:{if(typeof s.validator!="function"){console.error(`Validator for custom rule for [${e}] field should be a function. This field will be always invalid.`),this.setFieldInvalid(e,s);return}const l=s.validator(a,this.fields);if(typeof l!="boolean"&&typeof l!="function"&&console.error(`Validator return value for [${e}] field should be boolean or function. It will be cast to boolean.`),typeof l=="function")if(i)this.fields[e].asyncCheckPending=!0;else{this.fields[e].asyncCheckPending=!1;const o=l();if(!F(o)){console.error(`Validator function for custom rule for [${e}] field should return a Promise. This field will be always invalid.`),this.setFieldInvalid(e,s);return}return o.then(c=>{c||this.setFieldInvalid(e,s)}).catch(()=>{this.setFieldInvalid(e,s)})}l||this.setFieldInvalid(e,s)}}}validateField(e,t,s=!1){var r;t.isValid=!0;const i=[];return[...t.rules].reverse().forEach(a=>{const l=this.validateFieldRule(e,t.elem,a,s);F(l)&&i.push(l)}),t.isValid&&this.setFieldValid(e,(r=t.config)==null?void 0:r.successMessage),Promise.allSettled(i)}validateGroup(e,t){const s=[];return[...t.rules].reverse().forEach(i=>{const r=this.validateGroupRule(e,t.type,t.elems,i);F(r)&&s.push(r)}),Promise.allSettled(s)}focusInvalidField(){for(const e in this.fields){const t=this.fields[e];if(!t.isValid){setTimeout(()=>t.elem.focus(),0);break}}}afterSubmitValidation(){this.renderErrors(),this.globalConfig.focusInvalidField&&this.focusInvalidField()}validate(){return new Promise(e=>{const t=[];Object.keys(this.fields).forEach(s=>{const i=this.fields[s],r=this.validateField(s,i);F(r)&&t.push(r)}),Object.keys(this.groupFields).forEach(s=>{const i=this.groupFields[s],r=this.validateGroup(s,i);F(r)&&t.push(r)}),t.length?Promise.allSettled(t).then(()=>{this.afterSubmitValidation(),e(!0)}):(this.afterSubmitValidation(),e(!1))})}setForm(e){this.form=e,this.form.setAttribute("novalidate","novalidate"),this.removeListener("submit",this.form,this.formSubmitHandler),this.addListener("submit",this.form,this.formSubmitHandler)}addListener(e,t,s){t.addEventListener(e,s),this.eventListeners.push({type:e,elem:t,func:s})}removeListener(e,t,s){t.removeEventListener(e,s),this.eventListeners=this.eventListeners.filter(i=>i.type!==e||i.elem!==t)}addField(e,t,s){if(typeof e!="string")throw Error("Field selector is not valid. Please specify a string selector.");const i=document.querySelector(e);if(!i)throw Error(`Field with ${e} selector not found! Please check the field selector.`);if(!Array.isArray(t)||!t.length)throw Error(`Rules argument for the field [${e}] should be an array and should contain at least 1 element.`);return t.forEach(r=>{if(!("rule"in r||"validator"in r||"plugin"in r))throw Error(`Rules argument for the field [${e}] must contain at least one rule or validator property.`);if(!r.validator&&!r.plugin&&(!r.rule||!Object.values(d).includes(r.rule)))throw Error(`Rule should be one of these types: ${Object.values(d).join(", ")}. Provided value: ${r.rule}`)}),this.fields[e]={elem:i,rules:t,isValid:void 0,config:s},this.setListeners(i),this.isSubmitted&&this.validate(),this}removeField(e){if(typeof e!="string")throw Error("Field selector is not valid. Please specify a string selector.");if(!this.fields[e])return console.error("Field not found. Check the field selector."),this;const t=this.getListenerType(this.fields[e].elem.type);return this.removeListener(t,this.fields[e].elem,this.handlerChange),this.clearErrors(),delete this.fields[e],this}removeGroup(e){if(typeof e!="string")throw Error("Group selector is not valid. Please specify a string selector.");return this.groupFields[e]?(this.groupFields[e].elems.forEach(t=>{const s=this.getListenerType(t.type);this.removeListener(s,t,this.handlerChange)}),this.clearErrors(),delete this.groupFields[e],this):(console.error("Group not found. Check the group selector."),this)}addRequiredGroup(e,t,s,i){if(typeof e!="string")throw Error("Group selector is not valid. Please specify a string selector.");const r=document.querySelector(e);if(!r)throw Error(`Group with ${e} selector not found! Please check the group selector.`);const a=r.querySelectorAll("input"),l=Array.from(a).every(c=>c.type==="radio"),o=Array.from(a).every(c=>c.type==="checkbox");if(!l&&!o)throw Error("Group should contain either or checkboxes or radio buttons");return this.groupFields[e]={rules:[{rule:y.Required,errorMessage:t,successMessage:i}],groupElem:r,elems:Array.from(a),type:l?"radio":"checkbox",isDirty:!1,isValid:void 0,config:s},a.forEach(c=>{this.setListeners(c)}),this}getListenerType(e){switch(e){case"checkbox":case"select-one":case"file":case"radio":return"change";case"date":return"input";default:return"keyup"}}setListeners(e){const t=this.getListenerType(e.type);this.removeListener(t,e,this.handlerChange),this.addListener(t,e,this.handlerChange)}clearErrors(){var e,t,s,i,r,a;this.errorLabels.forEach(l=>l.remove()),this.successLabels.forEach(l=>l.remove());for(const l in this.fields){const o=this.fields[l],c=((e=o.config)==null?void 0:e.errorFieldStyle)||this.globalConfig.errorFieldStyle;Object.keys(c).forEach(f=>{o.elem.style[f]=""});const h=((t=o.config)==null?void 0:t.successFieldStyle)||this.globalConfig.successFieldStyle||{};Object.keys(h).forEach(f=>{o.elem.style[f]=""}),o.elem.classList.remove(((s=o.config)==null?void 0:s.errorFieldCssClass)||this.globalConfig.errorFieldCssClass,((i=o.config)==null?void 0:i.successFieldCssClass)||this.globalConfig.successFieldCssClass)}for(const l in this.groupFields){const o=this.groupFields[l],c=((r=o.config)==null?void 0:r.errorFieldStyle)||this.globalConfig.errorFieldStyle;Object.keys(c).forEach(f=>{o.elems.forEach(m=>{var v;m.style[f]="",m.classList.remove(((v=o.config)==null?void 0:v.errorFieldCssClass)||this.globalConfig.errorFieldCssClass)})});const h=((a=o.config)==null?void 0:a.successFieldStyle)||this.globalConfig.successFieldStyle||{};Object.keys(h).forEach(f=>{o.elems.forEach(m=>{var v;m.style[f]="",m.classList.remove(((v=o.config)==null?void 0:v.successFieldCssClass)||this.globalConfig.successFieldCssClass)})})}this.tooltips=[]}isTooltip(){return!!this.globalConfig.tooltip}lockForm(){const e=this.form.querySelectorAll("input, textarea, button, select");for(let t=0,s=e.length;t<s;++t)e[t].setAttribute("disabled","disabled"),e[t].style.pointerEvents="none",e[t].style.webkitFilter="grayscale(100%)",e[t].style.filter="grayscale(100%)"}unlockForm(){const e=this.form.querySelectorAll("input, textarea, button, select");for(let t=0,s=e.length;t<s;++t)e[t].removeAttribute("disabled"),e[t].style.pointerEvents="",e[t].style.webkitFilter="",e[t].style.filter=""}renderTooltip(e,t,s){var f;const{top:i,left:r,width:a,height:l}=e.getBoundingClientRect(),o=t.getBoundingClientRect(),c=s||((f=this.globalConfig.tooltip)==null?void 0:f.position);switch(c){case"left":{t.style.top=`${i+l/2-o.height/2}px`,t.style.left=`${r-o.width-C}px`;break}case"top":{t.style.top=`${i-o.height-C}px`,t.style.left=`${r+a/2-o.width/2}px`;break}case"right":{t.style.top=`${i+l/2-o.height/2}px`,t.style.left=`${r+a+C}px`;break}case"bottom":{t.style.top=`${i+l+C}px`,t.style.left=`${r+a/2-o.width/2}px`;break}}return t.dataset.direction=c,{refresh:()=>{this.renderTooltip(e,t,s)}}}createErrorLabelElem(e,t,s){const i=document.createElement("div");i.innerHTML=t;const r=this.isTooltip()?s==null?void 0:s.errorLabelStyle:(s==null?void 0:s.errorLabelStyle)||this.globalConfig.errorLabelStyle;return Object.assign(i.style,r),i.classList.add((s==null?void 0:s.errorLabelCssClass)||this.globalConfig.errorLabelCssClass,"just-validate-error-label"),this.isTooltip()&&(i.dataset.tooltip="true"),this.globalConfig.testingMode&&(i.dataset.testId=`error-label-${e}`),this.errorLabels.push(i),i}createSuccessLabelElem(e,t,s){if(t===void 0)return null;const i=document.createElement("div");i.innerHTML=t;const r=(s==null?void 0:s.successLabelStyle)||this.globalConfig.successLabelStyle;return Object.assign(i.style,r),i.classList.add((s==null?void 0:s.successLabelCssClass)||this.globalConfig.successLabelCssClass,"just-validate-success-label"),this.globalConfig.testingMode&&(i.dataset.testId=`success-label-${e}`),this.successLabels.push(i),i}renderFieldLabel(e,t){var s,i,r,a,l,o,c;if(e.type==="checkbox"||e.type==="radio"){const h=document.querySelector(`label[for="${e.getAttribute("id")}"]`);((i=(s=e.parentElement)==null?void 0:s.tagName)==null?void 0:i.toLowerCase())==="label"?(a=(r=e.parentElement)==null?void 0:r.parentElement)==null||a.appendChild(t):h?(l=h.parentElement)==null||l.appendChild(t):(o=e.parentElement)==null||o.appendChild(t)}else(c=e.parentElement)==null||c.appendChild(t)}renderErrors(){var e,t,s,i,r,a;if(!!this.isSubmitted){this.clearErrors(),this.isValid=!0;for(const l in this.groupFields){const o=this.groupFields[l];if(o.isValid){o.elems.forEach(f=>{var m,v;Object.assign(f.style,((m=o.config)==null?void 0:m.successFieldStyle)||this.globalConfig.successFieldStyle),f.classList.add(((v=o.config)==null?void 0:v.successFieldCssClass)||this.globalConfig.successFieldCssClass)});const h=this.createSuccessLabelElem(l,o.successMessage,o.config);h&&o.groupElem.appendChild(h);continue}this.isValid=!1,o.elems.forEach(h=>{var f,m;Object.assign(h.style,((f=o.config)==null?void 0:f.errorFieldStyle)||this.globalConfig.errorFieldStyle),h.classList.add(((m=o.config)==null?void 0:m.errorFieldCssClass)||this.globalConfig.errorFieldCssClass)});const c=this.createErrorLabelElem(l,o.errorMessage,o.config);o.groupElem.appendChild(c),this.isTooltip()&&this.tooltips.push(this.renderTooltip(o.groupElem,c,(t=(e=o.config)==null?void 0:e.tooltip)==null?void 0:t.position))}for(const l in this.fields){const o=this.fields[l];if(o.isValid){if(!o.asyncCheckPending){const h=this.createSuccessLabelElem(l,o.successMessage,o.config);h&&this.renderFieldLabel(o.elem,h),o.elem.classList.add(((s=o.config)==null?void 0:s.successFieldCssClass)||this.globalConfig.successFieldCssClass)}continue}this.isValid=!1,o.elem.classList.add(((i=o.config)==null?void 0:i.errorFieldCssClass)||this.globalConfig.errorFieldCssClass);const c=this.createErrorLabelElem(l,o.errorMessage,o.config);this.renderFieldLabel(o.elem,c),this.isTooltip()&&this.tooltips.push(this.renderTooltip(o.elem,c,(a=(r=o.config)==null?void 0:r.tooltip)==null?void 0:a.position))}}}destroy(){this.eventListeners.forEach(e=>{this.removeListener(e.type,e.elem,e.func)}),Object.keys(this.customStyleTags).forEach(e=>{this.customStyleTags[e].remove()}),this.clearErrors(),this.globalConfig.lockForm&&this.unlockForm()}refresh(){this.destroy(),this.form?(this.initialize(this.form,this.globalConfig),Object.keys(this.fields).forEach(e=>{this.addField(e,[...this.fields[e].rules],this.fields[e].config)})):console.error("Cannot initialize the library! Form is not defined")}setCurrentLocale(e){if(typeof e!="string"&&e!==void 0){console.error("Current locale should be a string");return}this.currentLocale=e,this.isSubmitted&&this.validate()}onSuccess(e){return this.onSuccessCallback=e,this}onFail(e){return this.onFailCallback=e,this}}return O});
;

const validationAbout = new JustValidate('.about-us__form', {
  errorFieldCssClass: 'is-invalid',
  errorLabelStyle: {
    color: '#f06666',
  },
});
validationAbout
  .addField('.email-input-about', [
    {
      rule: 'required',
      errorMessage: '?????????????? e-mail',
    },
    {
      rule: 'email',
      errorMessage: '???????????????????????? ????????????',
    },
  ])
  .onSuccess((event) => {
    console.log('Validation passes and form submitted', event);
    let formData = new FormData(event.target);
    console.log(...formData);
    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          console.log('????????????????????');
        }
      }
    }
    xhr.open('POST', 'mail.php', true);
    xhr.send(formData);
    event.target.reset();
  });

  const validationContacts = new JustValidate('.callback__form', {
    errorFieldCssClass: 'is-invalid',
    errorLabelStyle: {
      color: '#FF3030',
    },
  });
  validationContacts
    .addField('.name-input', [
      {
        rule: 'customRegexp',
        value: /^[a-zA-Z??-????-????]/,
        errorMessage: '???????????????????????? ????????????',
      },{
        rule: 'required',
        errorMessage: '?????????????? ???????? ??????',
      },
    ])
    .addField('.email-input', [
      {
        rule: 'required',
        errorMessage: '?????????????? e-mail',
      },
      {
        rule: 'email',
        errorMessage: '???????????????????????? ????????????',
      },
    ])
    .onSuccess((event) => {
      console.log('Validation passes and form submitted', event);
      let formData = new FormData(event.target);
      console.log(...formData);
      let xhr = new XMLHttpRequest();
      xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
          if (xhr.status === 200) {
            console.log('????????????????????');
          }
        }
      }
      xhr.open('POST', 'mail.php', true);
      xhr.send(formData);
      event.target.reset();
    });
  


// GENERAL
let searchTrigger = document.querySelector('.header__search');
let searchIcon= document.querySelector('.search__icon');
let searchInput = document.querySelector('.search__input');
let searchCloseIcon = document.querySelector('.search__close');
let burger = document.querySelector('.burger');
let menu = document.querySelector('.menu');
let menuLink = document.querySelectorAll('.nav__item');
let searchForm = document.querySelector('.search');
let links = document.querySelectorAll('a[href^="#"]');
let closeAdress = document.querySelector('.adress__close');
let adress = document.querySelector('.adress')
let topOffset = 50;

links.forEach(item => {
  item.addEventListener('click', function(e) {
    e.preventDefault();
    let href = this.getAttribute('href').slice(1);
    const targetElem = document.getElementById(href);
    const elemPosition = targetElem.getBoundingClientRect().top;
    const offsetPosition = elemPosition - topOffset;
    window.scrollBy({
      top: offsetPosition,
      behavior: 'smooth'
    });
  });
});

//ADRESS
closeAdress.addEventListener('click', function()  {
  adress.classList.remove('open')
})

// SEARCH
searchTrigger.addEventListener('click', function(e) {
  e.preventDefault();
  searchOpen();
})

searchCloseIcon.addEventListener('click', function(el) {
  el.preventDefault();
  searchClose();
})

searchInput.oninput = function() {
searchInput.classList.add('write')
}

const searchOpen = () => {
  searchTrigger.classList.add('opac0');
  searchIcon.classList.add('active');
  searchInput.classList.add('active');
  searchForm.classList.add('active');
  searchCloseIcon.classList.add('active');
}
const searchClose = () => {
  searchTrigger.classList.remove('opac0');
  searchInput.classList.remove('active');
  
  setTimeout(() => {
    searchIcon.classList.remove('active');
    searchForm.classList.remove('active');
    searchCloseIcon.classList.remove('active');
  }, 300);
  
}

document.addEventListener('keydown', function(e) {
  if (e.which === 27) {
    searchClose();
  }
})

window.addEventListener('click', e => {
  const target = e.target 
  if (!target.closest('.search') && !target.closest('.header__search')
        && !target.closest('.burger')) { 
    searchClose();
    menuClose();
  }
})


// MENU
burger.onclick = () => {
  menuOpen()
}
const menuOpen = () => {
  menu.classList.toggle('open')
  burger.classList.toggle('open')
}
const menuClose = () => {
  menu.classList.remove('open')
  burger.classList.remove('open')
}
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJzY3JpcHQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiQEBpbmNsdWRlKCd2ZW5kb3IuanMnKVxyXG5cclxuLy8gR0VORVJBTFxyXG5sZXQgc2VhcmNoVHJpZ2dlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZWFkZXJfX3NlYXJjaCcpO1xyXG5sZXQgc2VhcmNoSWNvbj0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNlYXJjaF9faWNvbicpO1xyXG5sZXQgc2VhcmNoSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2VhcmNoX19pbnB1dCcpO1xyXG5sZXQgc2VhcmNoQ2xvc2VJY29uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNlYXJjaF9fY2xvc2UnKTtcclxubGV0IGJ1cmdlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5idXJnZXInKTtcclxubGV0IG1lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWVudScpO1xyXG5sZXQgbWVudUxpbmsgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubmF2X19pdGVtJyk7XHJcbmxldCBzZWFyY2hGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNlYXJjaCcpO1xyXG5sZXQgbGlua3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdhW2hyZWZePVwiI1wiXScpO1xyXG5sZXQgY2xvc2VBZHJlc3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRyZXNzX19jbG9zZScpO1xyXG5sZXQgYWRyZXNzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkcmVzcycpXHJcbmxldCB0b3BPZmZzZXQgPSA1MDtcclxuXHJcbmxpbmtzLmZvckVhY2goaXRlbSA9PiB7XHJcbiAgaXRlbS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIGxldCBocmVmID0gdGhpcy5nZXRBdHRyaWJ1dGUoJ2hyZWYnKS5zbGljZSgxKTtcclxuICAgIGNvbnN0IHRhcmdldEVsZW0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChocmVmKTtcclxuICAgIGNvbnN0IGVsZW1Qb3NpdGlvbiA9IHRhcmdldEVsZW0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wO1xyXG4gICAgY29uc3Qgb2Zmc2V0UG9zaXRpb24gPSBlbGVtUG9zaXRpb24gLSB0b3BPZmZzZXQ7XHJcbiAgICB3aW5kb3cuc2Nyb2xsQnkoe1xyXG4gICAgICB0b3A6IG9mZnNldFBvc2l0aW9uLFxyXG4gICAgICBiZWhhdmlvcjogJ3Ntb290aCdcclxuICAgIH0pO1xyXG4gIH0pO1xyXG59KTtcclxuXHJcbi8vQURSRVNTXHJcbmNsb3NlQWRyZXNzLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKSAge1xyXG4gIGFkcmVzcy5jbGFzc0xpc3QucmVtb3ZlKCdvcGVuJylcclxufSlcclxuXHJcbi8vIFNFQVJDSFxyXG5zZWFyY2hUcmlnZ2VyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xyXG4gIGUucHJldmVudERlZmF1bHQoKTtcclxuICBzZWFyY2hPcGVuKCk7XHJcbn0pXHJcblxyXG5zZWFyY2hDbG9zZUljb24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihlbCkge1xyXG4gIGVsLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgc2VhcmNoQ2xvc2UoKTtcclxufSlcclxuXHJcbnNlYXJjaElucHV0Lm9uaW5wdXQgPSBmdW5jdGlvbigpIHtcclxuc2VhcmNoSW5wdXQuY2xhc3NMaXN0LmFkZCgnd3JpdGUnKVxyXG59XHJcblxyXG5jb25zdCBzZWFyY2hPcGVuID0gKCkgPT4ge1xyXG4gIHNlYXJjaFRyaWdnZXIuY2xhc3NMaXN0LmFkZCgnb3BhYzAnKTtcclxuICBzZWFyY2hJY29uLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xyXG4gIHNlYXJjaElucHV0LmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xyXG4gIHNlYXJjaEZvcm0uY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XHJcbiAgc2VhcmNoQ2xvc2VJY29uLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xyXG59XHJcbmNvbnN0IHNlYXJjaENsb3NlID0gKCkgPT4ge1xyXG4gIHNlYXJjaFRyaWdnZXIuY2xhc3NMaXN0LnJlbW92ZSgnb3BhYzAnKTtcclxuICBzZWFyY2hJbnB1dC5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcclxuICBcclxuICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgIHNlYXJjaEljb24uY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XHJcbiAgICBzZWFyY2hGb3JtLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xyXG4gICAgc2VhcmNoQ2xvc2VJY29uLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xyXG4gIH0sIDMwMCk7XHJcbiAgXHJcbn1cclxuXHJcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBmdW5jdGlvbihlKSB7XHJcbiAgaWYgKGUud2hpY2ggPT09IDI3KSB7XHJcbiAgICBzZWFyY2hDbG9zZSgpO1xyXG4gIH1cclxufSlcclxuXHJcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4ge1xyXG4gIGNvbnN0IHRhcmdldCA9IGUudGFyZ2V0IFxyXG4gIGlmICghdGFyZ2V0LmNsb3Nlc3QoJy5zZWFyY2gnKSAmJiAhdGFyZ2V0LmNsb3Nlc3QoJy5oZWFkZXJfX3NlYXJjaCcpXHJcbiAgICAgICAgJiYgIXRhcmdldC5jbG9zZXN0KCcuYnVyZ2VyJykpIHsgXHJcbiAgICBzZWFyY2hDbG9zZSgpO1xyXG4gICAgbWVudUNsb3NlKCk7XHJcbiAgfVxyXG59KVxyXG5cclxuXHJcbi8vIE1FTlVcclxuYnVyZ2VyLm9uY2xpY2sgPSAoKSA9PiB7XHJcbiAgbWVudU9wZW4oKVxyXG59XHJcbmNvbnN0IG1lbnVPcGVuID0gKCkgPT4ge1xyXG4gIG1lbnUuY2xhc3NMaXN0LnRvZ2dsZSgnb3BlbicpXHJcbiAgYnVyZ2VyLmNsYXNzTGlzdC50b2dnbGUoJ29wZW4nKVxyXG59XHJcbmNvbnN0IG1lbnVDbG9zZSA9ICgpID0+IHtcclxuICBtZW51LmNsYXNzTGlzdC5yZW1vdmUoJ29wZW4nKVxyXG4gIGJ1cmdlci5jbGFzc0xpc3QucmVtb3ZlKCdvcGVuJylcclxufSJdLCJmaWxlIjoic2NyaXB0LmpzIn0=
