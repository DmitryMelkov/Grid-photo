(()=>{"use strict";var e=document.querySelector(".contacts__left-content"),i=gsap.timeline({paused:!0});i.fromTo(e,{display:"none"},{display:"block"}).fromTo(e,{opacity:"0"},{opacity:"1"});var t=document.querySelector(".contacts__left-btn"),s=Object.defineProperty,r=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable,a=(e,i,t)=>i in e?s(e,i,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[i]=t,n=(e,i)=>{for(var t in i||(i={}))l.call(i,t)&&a(e,t,i[t]);if(r)for(var t of r(i))o.call(i,t)&&a(e,t,i[t]);return e},d=(e,i,t)=>(a(e,"symbol"!=typeof i?i+"":i,t),t);const c=/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,u=/^[0-9]+$/,h=/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,f=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;var b,g,m,p,v;(g=b||(b={})).Required="required",g.Email="email",g.MinLength="minLength",g.MaxLength="maxLength",g.Password="password",g.Number="number",g.MaxNumber="maxNumber",g.MinNumber="minNumber",g.StrongPassword="strongPassword",g.CustomRegexp="customRegexp",g.MinFilesCount="minFilesCount",g.MaxFilesCount="maxFilesCount",g.Files="files",(m||(m={})).Required="required",(v=p||(p={})).Label="label",v.LabelArrow="labelArrow";const y=e=>!!e&&"function"==typeof e.then,F={errorFieldStyle:{color:"#b81111",border:"1px solid #B81111"},errorFieldCssClass:"just-validate-error-field",successFieldCssClass:"just-validate-success-field",errorLabelStyle:{color:"#b81111"},errorLabelCssClass:"just-validate-error-label",successLabelCssClass:"just-validate-success-label",focusInvalidField:!0,lockForm:!0,testingMode:!1};class C{constructor(e,i,t){d(this,"form",null),d(this,"fields",{}),d(this,"groupFields",{}),d(this,"errors",{}),d(this,"isValid",!1),d(this,"isSubmitted",!1),d(this,"globalConfig",F),d(this,"errorLabels",{}),d(this,"successLabels",{}),d(this,"eventListeners",[]),d(this,"dictLocale",[]),d(this,"currentLocale"),d(this,"customStyleTags",{}),d(this,"onSuccessCallback"),d(this,"onFailCallback"),d(this,"tooltips",[]),d(this,"lastScrollPosition"),d(this,"isScrollTick"),d(this,"refreshAllTooltips",(()=>{this.tooltips.forEach((e=>{e.refresh()}))})),d(this,"handleDocumentScroll",(()=>{this.lastScrollPosition=window.scrollY,this.isScrollTick||(window.requestAnimationFrame((()=>{this.refreshAllTooltips(),this.isScrollTick=!1})),this.isScrollTick=!0)})),d(this,"formSubmitHandler",(e=>{e.preventDefault(),this.isSubmitted=!0,this.validateHandler(e)})),d(this,"handleFieldChange",(e=>{let i;for(const t in this.fields)if(this.fields[t].elem===e){i=t;break}i&&this.validateField(i,!0)})),d(this,"handleGroupChange",(e=>{let i,t;for(const s in this.groupFields){const r=this.groupFields[s];if(r.elems.find((i=>i===e))){i=r,t=s;break}}i&&t&&this.validateGroup(t,i)})),d(this,"handlerChange",(e=>{e.target&&(this.handleFieldChange(e.target),this.handleGroupChange(e.target),this.renderErrors())})),this.initialize(e,i,t)}initialize(e,i,t){if(this.form=null,this.errors={},this.isValid=!1,this.isSubmitted=!1,this.globalConfig=F,this.errorLabels={},this.successLabels={},this.eventListeners=[],this.customStyleTags={},this.tooltips=[],"string"==typeof e){const i=document.querySelector(e);if(!i)throw Error(`Form with ${e} selector not found! Please check the form selector`);this.setForm(i)}else{if(!(e instanceof HTMLFormElement))throw Error("Form selector is not valid. Please specify a string selector or a DOM element.");this.setForm(e)}if(this.globalConfig=n(n({},F),i),t&&(this.dictLocale=t),this.isTooltip()){const e=document.createElement("style");e.textContent=".just-validate-error-label[data-tooltip=true]{position:fixed;padding:4px 8px;background:#423f3f;color:#fff;white-space:nowrap;z-index:10;border-radius:4px;transform:translateY(-5px)}.just-validate-error-label[data-tooltip=true]:before{content:'';width:0;height:0;border-left:solid 5px transparent;border-right:solid 5px transparent;border-bottom:solid 5px #423f3f;position:absolute;z-index:3;display:block;bottom:-5px;transform:rotate(180deg);left:calc(50% - 5px)}.just-validate-error-label[data-tooltip=true][data-direction=left]{transform:translateX(-5px)}.just-validate-error-label[data-tooltip=true][data-direction=left]:before{right:-7px;bottom:auto;left:auto;top:calc(50% - 2px);transform:rotate(90deg)}.just-validate-error-label[data-tooltip=true][data-direction=right]{transform:translateX(5px)}.just-validate-error-label[data-tooltip=true][data-direction=right]:before{right:auto;bottom:auto;left:-7px;top:calc(50% - 2px);transform:rotate(-90deg)}.just-validate-error-label[data-tooltip=true][data-direction=bottom]{transform:translateY(5px)}.just-validate-error-label[data-tooltip=true][data-direction=bottom]:before{right:auto;bottom:auto;left:calc(50% - 5px);top:-5px;transform:rotate(0)}",this.customStyleTags[p.Label]=document.head.appendChild(e),this.addListener("scroll",document,this.handleDocumentScroll)}}getLocalisedString(e){var i;return this.currentLocale&&this.dictLocale.length&&(null==(i=this.dictLocale.find((i=>i.key===e)))?void 0:i.dict[this.currentLocale])||e}getFieldErrorMessage(e,i){const t="function"==typeof e.errorMessage?e.errorMessage(this.getElemValue(i),this.fields):e.errorMessage;return this.getLocalisedString(t)||((e,i)=>{switch(e){case b.Required:return"The field is required";case b.Email:return"Email has invalid format";case b.MaxLength:return"The field must contain a maximum of :value characters".replace(":value",String(i));case b.MinLength:return"The field must contain a minimum of :value characters".replace(":value",String(i));case b.Password:return"Password must contain minimum eight characters, at least one letter and one number";case b.Number:return"Value should be a number";case b.StrongPassword:return"Password should contain minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character";case b.MaxNumber:return"Number should be less or equal than :value".replace(":value",String(i));case b.MinNumber:return"Number should be more or equal than :value".replace(":value",String(i));case b.MinFilesCount:return"Files count should be more or equal than :value".replace(":value",String(i));case b.MaxFilesCount:return"Files count should be less or equal than :value".replace(":value",String(i));case b.Files:return"Uploaded files have one or several invalid properties (extension/size/type etc)";default:return"Value is incorrect"}})(e.rule,e.value)}getFieldSuccessMessage(e,i){const t="function"==typeof e?e(this.getElemValue(i),this.fields):e;return this.getLocalisedString(t)}getGroupErrorMessage(e){return this.getLocalisedString(e.errorMessage)||(e.rule===m.Required?"The field is required":"Group is incorrect")}getGroupSuccessMessage(e){return this.getLocalisedString(e.successMessage)}setFieldInvalid(e,i){this.fields[e].isValid=!1,this.fields[e].errorMessage=this.getFieldErrorMessage(i,this.fields[e].elem)}setFieldValid(e,i){this.fields[e].isValid=!0,void 0!==i&&(this.fields[e].successMessage=this.getFieldSuccessMessage(i,this.fields[e].elem))}setGroupInvalid(e,i){this.groupFields[e].isValid=!1,this.groupFields[e].errorMessage=this.getGroupErrorMessage(i)}setGroupValid(e,i){this.groupFields[e].isValid=!0,this.groupFields[e].successMessage=this.getGroupSuccessMessage(i)}getElemValue(e){switch(e.type){case"checkbox":return e.checked;case"file":return e.files;default:return e.value}}validateGroupRule(e,i,t,s){s.rule===m.Required&&("radio"!==i&&"checkbox"!==i||(t.every((e=>!e.checked))?this.setGroupInvalid(e,s):this.setGroupValid(e,s)))}validateFieldRule(e,i,t,s=!1){const r=t.value,l=this.getElemValue(i);var o;if(t.plugin)t.plugin(l,this.fields)||this.setFieldInvalid(e,t);else switch(t.rule){case b.Required:(e=>{let i=e;return"string"==typeof e&&(i=e.trim()),!i})(l)&&this.setFieldInvalid(e,t);break;case b.Email:if("string"!=typeof l){this.setFieldInvalid(e,t);break}o=l,c.test(o)||this.setFieldInvalid(e,t);break;case b.MaxLength:if(void 0===r){console.error(`Value for ${t.rule} rule for [${e}] field is not defined. The field will be always invalid.`),this.setFieldInvalid(e,t);break}if("number"!=typeof r){console.error(`Value for ${t.rule} rule for [${e}] should be a number. The field will be always invalid.`),this.setFieldInvalid(e,t);break}if("string"!=typeof l){this.setFieldInvalid(e,t);break}if(""===l)break;((e,i)=>e.length>i)(l,r)&&this.setFieldInvalid(e,t);break;case b.MinLength:if(void 0===r){console.error(`Value for ${t.rule} rule for [${e}] field is not defined. The field will be always invalid.`),this.setFieldInvalid(e,t);break}if("number"!=typeof r){console.error(`Value for ${t.rule} rule for [${e}] should be a number. The field will be always invalid.`),this.setFieldInvalid(e,t);break}if("string"!=typeof l){this.setFieldInvalid(e,t);break}if(""===l)break;((e,i)=>e.length<i)(l,r)&&this.setFieldInvalid(e,t);break;case b.Password:if("string"!=typeof l){this.setFieldInvalid(e,t);break}if(""===l)break;(e=>h.test(e))(l)||this.setFieldInvalid(e,t);break;case b.StrongPassword:if("string"!=typeof l){this.setFieldInvalid(e,t);break}if(""===l)break;(e=>f.test(e))(l)||this.setFieldInvalid(e,t);break;case b.Number:if("string"!=typeof l){this.setFieldInvalid(e,t);break}if(""===l)break;(e=>u.test(e))(l)||this.setFieldInvalid(e,t);break;case b.MaxNumber:{if(void 0===r){console.error(`Value for ${t.rule} rule for [${e}] field is not defined. The field will be always invalid.`),this.setFieldInvalid(e,t);break}if("number"!=typeof r){console.error(`Value for ${t.rule} rule for [${e}] field should be a number. The field will be always invalid.`),this.setFieldInvalid(e,t);break}if("string"!=typeof l){this.setFieldInvalid(e,t);break}if(""===l)break;const i=+l;(Number.isNaN(i)||((e,i)=>e>i)(i,r))&&this.setFieldInvalid(e,t);break}case b.MinNumber:{if(void 0===r){console.error(`Value for ${t.rule} rule for [${e}] field is not defined. The field will be always invalid.`),this.setFieldInvalid(e,t);break}if("number"!=typeof r){console.error(`Value for ${t.rule} rule for [${e}] field should be a number. The field will be always invalid.`),this.setFieldInvalid(e,t);break}if("string"!=typeof l){this.setFieldInvalid(e,t);break}if(""===l)break;const i=+l;(Number.isNaN(i)||((e,i)=>e<i)(i,r))&&this.setFieldInvalid(e,t);break}case b.CustomRegexp:{if(void 0===r)return console.error(`Value for ${t.rule} rule for [${e}] field is not defined. This field will be always invalid.`),void this.setFieldInvalid(e,t);let s;try{s=new RegExp(r)}catch(i){console.error(`Value for ${t.rule} rule for [${e}] should be a valid regexp. This field will be always invalid.`),this.setFieldInvalid(e,t);break}const o=String(l);""===o||s.test(o)||this.setFieldInvalid(e,t);break}case b.MinFilesCount:if(void 0===r){console.error(`Value for ${t.rule} rule for [${e}] field is not defined. This field will be always invalid.`),this.setFieldInvalid(e,t);break}if("number"!=typeof r){console.error(`Value for ${t.rule} rule for [${e}] field should be a number. The field will be always invalid.`),this.setFieldInvalid(e,t);break}if(Number.isFinite(null==l?void 0:l.length)&&l.length<r){this.setFieldInvalid(e,t);break}break;case b.MaxFilesCount:if(void 0===r){console.error(`Value for ${t.rule} rule for [${e}] field is not defined. This field will be always invalid.`),this.setFieldInvalid(e,t);break}if("number"!=typeof r){console.error(`Value for ${t.rule} rule for [${e}] field should be a number. The field will be always invalid.`),this.setFieldInvalid(e,t);break}if(Number.isFinite(null==l?void 0:l.length)&&l.length>r){this.setFieldInvalid(e,t);break}break;case b.Files:{if(void 0===r)return console.error(`Value for ${t.rule} rule for [${e}] field is not defined. This field will be always invalid.`),void this.setFieldInvalid(e,t);if("object"!=typeof r)return console.error(`Value for ${t.rule} rule for [${e}] field should be an object. This field will be always invalid.`),void this.setFieldInvalid(e,t);const i=r.files;if("object"!=typeof i)return console.error(`Value for ${t.rule} rule for [${e}] field should be an object with files array. This field will be always invalid.`),void this.setFieldInvalid(e,t);const s=(e,i)=>{const t=Number.isFinite(i.minSize)&&e.size<i.minSize,s=Number.isFinite(i.maxSize)&&e.size>i.maxSize,r=Array.isArray(i.names)&&!i.names.includes(e.name),l=Array.isArray(i.extensions)&&!i.extensions.includes(e.name.split(".")[e.name.split(".").length-1]),o=Array.isArray(i.types)&&!i.types.includes(e.type);return t||s||r||l||o};if("object"==typeof l&&null!==l)for(let r=0,o=l.length;r<o;++r){const o=l.item(r);if(!o){this.setFieldInvalid(e,t);break}if(s(o,i)){this.setFieldInvalid(e,t);break}}break}default:{if("function"!=typeof t.validator)return console.error(`Validator for custom rule for [${e}] field should be a function. This field will be always invalid.`),void this.setFieldInvalid(e,t);const i=t.validator(l,this.fields);if("boolean"!=typeof i&&"function"!=typeof i&&console.error(`Validator return value for [${e}] field should be boolean or function. It will be cast to boolean.`),"function"==typeof i){if(!s){this.fields[e].asyncCheckPending=!1;const s=i();return y(s)?s.then((i=>{i||this.setFieldInvalid(e,t)})).catch((()=>{this.setFieldInvalid(e,t)})):(console.error(`Validator function for custom rule for [${e}] field should return a Promise. This field will be always invalid.`),void this.setFieldInvalid(e,t))}this.fields[e].asyncCheckPending=!0}i||this.setFieldInvalid(e,t)}}}validateField(e,i=!1){var t;const s=this.fields[e];s.isValid=!0;const r=[];return[...s.rules].reverse().forEach((t=>{const l=this.validateFieldRule(e,s.elem,t,i);y(l)&&r.push(l)})),s.isValid&&this.setFieldValid(e,null==(t=s.config)?void 0:t.successMessage),Promise.allSettled(r)}revalidateField(e){if("string"!=typeof e)throw Error("Field selector is not valid. Please specify a string selector.");return this.fields[e]?new Promise((i=>{this.validateField(e,!0).finally((()=>{this.clearFieldError(e),this.clearFieldLabel(e),this.renderFieldError(e),i(!!this.fields[e].isValid)}))})):(console.error("Field not found. Check the field selector."),Promise.reject())}validateGroup(e,i){const t=[];return[...i.rules].reverse().forEach((s=>{const r=this.validateGroupRule(e,i.type,i.elems,s);y(r)&&t.push(r)})),Promise.allSettled(t)}focusInvalidField(){for(const e in this.fields){const i=this.fields[e];if(!i.isValid){setTimeout((()=>i.elem.focus()),0);break}}}afterSubmitValidation(e=!1){this.renderErrors(e),this.globalConfig.focusInvalidField&&this.focusInvalidField()}validate(e=!1){return new Promise((i=>{const t=[];Object.keys(this.fields).forEach((e=>{const i=this.validateField(e);y(i)&&t.push(i)})),Object.keys(this.groupFields).forEach((e=>{const i=this.groupFields[e],s=this.validateGroup(e,i);y(s)&&t.push(s)})),t.length?Promise.allSettled(t).then((()=>{this.afterSubmitValidation(e),i(!0)})):(this.afterSubmitValidation(e),i(!1))}))}revalidate(){return new Promise((e=>{this.validateHandler(void 0,!0).finally((()=>{this.globalConfig.focusInvalidField&&this.focusInvalidField(),e(this.isValid)}))}))}validateHandler(e,i=!1){return this.globalConfig.lockForm&&this.lockForm(),this.validate(i).finally((()=>{var i,t;this.globalConfig.lockForm&&this.unlockForm(),this.isValid?null==(i=this.onSuccessCallback)||i.call(this,e):null==(t=this.onFailCallback)||t.call(this,this.fields,this.groupFields)}))}setForm(e){this.form=e,this.form.setAttribute("novalidate","novalidate"),this.removeListener("submit",this.form,this.formSubmitHandler),this.addListener("submit",this.form,this.formSubmitHandler)}addListener(e,i,t){i.addEventListener(e,t),this.eventListeners.push({type:e,elem:i,func:t})}removeListener(e,i,t){i.removeEventListener(e,t),this.eventListeners=this.eventListeners.filter((t=>t.type!==e||t.elem!==i))}addField(e,i,t){if("string"!=typeof e)throw Error("Field selector is not valid. Please specify a string selector.");const s=this.form.querySelector(e);if(!s)throw Error(`Field with ${e} selector not found! Please check the field selector.`);if(!Array.isArray(i)||!i.length)throw Error(`Rules argument for the field [${e}] should be an array and should contain at least 1 element.`);return i.forEach((i=>{if(!("rule"in i||"validator"in i||"plugin"in i))throw Error(`Rules argument for the field [${e}] must contain at least one rule or validator property.`);if(!(i.validator||i.plugin||i.rule&&Object.values(b).includes(i.rule)))throw Error(`Rule should be one of these types: ${Object.values(b).join(", ")}. Provided value: ${i.rule}`)})),this.fields[e]={elem:s,rules:i,isValid:void 0,config:t},this.setListeners(s),this.isSubmitted&&this.validate(),this}removeField(e){if("string"!=typeof e)throw Error("Field selector is not valid. Please specify a string selector.");if(!this.fields[e])return console.error("Field not found. Check the field selector."),this;const i=this.getListenerType(this.fields[e].elem.type);return this.removeListener(i,this.fields[e].elem,this.handlerChange),this.clearErrors(),delete this.fields[e],this}removeGroup(e){if("string"!=typeof e)throw Error("Group selector is not valid. Please specify a string selector.");return this.groupFields[e]?(this.groupFields[e].elems.forEach((e=>{const i=this.getListenerType(e.type);this.removeListener(i,e,this.handlerChange)})),this.clearErrors(),delete this.groupFields[e],this):(console.error("Group not found. Check the group selector."),this)}addRequiredGroup(e,i,t,s){if("string"!=typeof e)throw Error("Group selector is not valid. Please specify a string selector.");const r=this.form.querySelector(e);if(!r)throw Error(`Group with ${e} selector not found! Please check the group selector.`);const l=r.querySelectorAll("input"),o=Array.from(l).every((e=>"radio"===e.type)),a=Array.from(l).every((e=>"checkbox"===e.type));if(!o&&!a)throw Error("Group should contain either or checkboxes or radio buttons");return this.groupFields[e]={rules:[{rule:m.Required,errorMessage:i,successMessage:s}],groupElem:r,elems:Array.from(l),type:o?"radio":"checkbox",isDirty:!1,isValid:void 0,config:t},l.forEach((e=>{this.setListeners(e)})),this}getListenerType(e){switch(e){case"checkbox":case"select-one":case"file":case"radio":return"change";default:return"input"}}setListeners(e){const i=this.getListenerType(e.type);this.removeListener(i,e,this.handlerChange),this.addListener(i,e,this.handlerChange)}clearFieldLabel(e){var i,t;null==(i=this.errorLabels[e])||i.remove(),null==(t=this.successLabels[e])||t.remove()}clearFieldError(e){var i,t,s,r;const l=this.fields[e],o=(null==(i=l.config)?void 0:i.errorFieldStyle)||this.globalConfig.errorFieldStyle;Object.keys(o).forEach((e=>{l.elem.style[e]=""}));const a=(null==(t=l.config)?void 0:t.successFieldStyle)||this.globalConfig.successFieldStyle||{};Object.keys(a).forEach((e=>{l.elem.style[e]=""})),l.elem.classList.remove((null==(s=l.config)?void 0:s.errorFieldCssClass)||this.globalConfig.errorFieldCssClass,(null==(r=l.config)?void 0:r.successFieldCssClass)||this.globalConfig.successFieldCssClass)}clearErrors(){var e,i;Object.keys(this.errorLabels).forEach((e=>this.errorLabels[e].remove())),Object.keys(this.successLabels).forEach((e=>this.successLabels[e].remove()));for(const e in this.fields)this.clearFieldError(e);for(const t in this.groupFields){const s=this.groupFields[t],r=(null==(e=s.config)?void 0:e.errorFieldStyle)||this.globalConfig.errorFieldStyle;Object.keys(r).forEach((e=>{s.elems.forEach((i=>{var t;i.style[e]="",i.classList.remove((null==(t=s.config)?void 0:t.errorFieldCssClass)||this.globalConfig.errorFieldCssClass)}))}));const l=(null==(i=s.config)?void 0:i.successFieldStyle)||this.globalConfig.successFieldStyle||{};Object.keys(l).forEach((e=>{s.elems.forEach((i=>{var t;i.style[e]="",i.classList.remove((null==(t=s.config)?void 0:t.successFieldCssClass)||this.globalConfig.successFieldCssClass)}))}))}this.tooltips=[]}isTooltip(){return!!this.globalConfig.tooltip}lockForm(){const e=this.form.querySelectorAll("input, textarea, button, select");for(let i=0,t=e.length;i<t;++i)e[i].setAttribute("disabled","disabled"),e[i].style.pointerEvents="none",e[i].style.webkitFilter="grayscale(100%)",e[i].style.filter="grayscale(100%)"}unlockForm(){const e=this.form.querySelectorAll("input, textarea, button, select");for(let i=0,t=e.length;i<t;++i)e[i].removeAttribute("disabled"),e[i].style.pointerEvents="",e[i].style.webkitFilter="",e[i].style.filter=""}renderTooltip(e,i,t){var s;const{top:r,left:l,width:o,height:a}=e.getBoundingClientRect(),n=i.getBoundingClientRect(),d=t||(null==(s=this.globalConfig.tooltip)?void 0:s.position);switch(d){case"left":i.style.top=r+a/2-n.height/2+"px",i.style.left=l-n.width-5+"px";break;case"top":i.style.top=r-n.height-5+"px",i.style.left=l+o/2-n.width/2+"px";break;case"right":i.style.top=r+a/2-n.height/2+"px",i.style.left=`${l+o+5}px`;break;case"bottom":i.style.top=`${r+a+5}px`,i.style.left=l+o/2-n.width/2+"px"}return i.dataset.direction=d,{refresh:()=>{this.renderTooltip(e,i,t)}}}createErrorLabelElem(e,i,t){const s=document.createElement("div");s.innerHTML=i;const r=this.isTooltip()?null==t?void 0:t.errorLabelStyle:(null==t?void 0:t.errorLabelStyle)||this.globalConfig.errorLabelStyle;return Object.assign(s.style,r),s.classList.add((null==t?void 0:t.errorLabelCssClass)||this.globalConfig.errorLabelCssClass,"just-validate-error-label"),this.isTooltip()&&(s.dataset.tooltip="true"),this.globalConfig.testingMode&&(s.dataset.testId=`error-label-${e}`),this.errorLabels[e]=s,s}createSuccessLabelElem(e,i,t){if(void 0===i)return null;const s=document.createElement("div");s.innerHTML=i;const r=(null==t?void 0:t.successLabelStyle)||this.globalConfig.successLabelStyle;return Object.assign(s.style,r),s.classList.add((null==t?void 0:t.successLabelCssClass)||this.globalConfig.successLabelCssClass,"just-validate-success-label"),this.globalConfig.testingMode&&(s.dataset.testId=`success-label-${e}`),this.successLabels[e]=s,s}renderErrorsContainer(e,i){const t=i||this.globalConfig.errorsContainer;if("string"==typeof t){const i=this.form.querySelector(t);if(i)return i.appendChild(e),!0;console.error(`Error container with ${t} selector not found. Errors will be rendered as usual`)}return t instanceof Element?(t.appendChild(e),!0):(void 0!==t&&console.error("Error container not found. It should be a string or existing Element. Errors will be rendered as usual"),!1)}renderGroupLabel(e,i,t,s){!s&&this.renderErrorsContainer(i,t)||e.appendChild(i)}renderFieldLabel(e,i,t,s){var r,l,o,a,n,d,c;if(s||!this.renderErrorsContainer(i,t))if("checkbox"===e.type||"radio"===e.type){const t=document.querySelector(`label[for="${e.getAttribute("id")}"]`);"label"===(null==(l=null==(r=e.parentElement)?void 0:r.tagName)?void 0:l.toLowerCase())?null==(a=null==(o=e.parentElement)?void 0:o.parentElement)||a.appendChild(i):t?null==(n=t.parentElement)||n.appendChild(i):null==(d=e.parentElement)||d.appendChild(i)}else null==(c=e.parentElement)||c.appendChild(i)}renderFieldError(e){var i,t,s,r,l,o;const a=this.fields[e];if(a.isValid){if(!a.asyncCheckPending){const s=this.createSuccessLabelElem(e,a.successMessage,a.config);s&&this.renderFieldLabel(a.elem,s,null==(i=a.config)?void 0:i.errorsContainer,!0),a.elem.classList.add((null==(t=a.config)?void 0:t.successFieldCssClass)||this.globalConfig.successFieldCssClass)}return}this.isValid=!1,a.elem.classList.add((null==(s=a.config)?void 0:s.errorFieldCssClass)||this.globalConfig.errorFieldCssClass);const n=this.createErrorLabelElem(e,a.errorMessage,a.config);this.renderFieldLabel(a.elem,n,null==(r=a.config)?void 0:r.errorsContainer),this.isTooltip()&&this.tooltips.push(this.renderTooltip(a.elem,n,null==(o=null==(l=a.config)?void 0:l.tooltip)?void 0:o.position))}renderErrors(e=!1){var i,t,s,r;if(this.isSubmitted||e){this.clearErrors(),this.isValid=!0;for(const e in this.groupFields){const l=this.groupFields[e];if(l.isValid){l.elems.forEach((e=>{var i,t;Object.assign(e.style,(null==(i=l.config)?void 0:i.successFieldStyle)||this.globalConfig.successFieldStyle),e.classList.add((null==(t=l.config)?void 0:t.successFieldCssClass)||this.globalConfig.successFieldCssClass)}));const t=this.createSuccessLabelElem(e,l.successMessage,l.config);t&&this.renderGroupLabel(l.groupElem,t,null==(i=l.config)?void 0:i.errorsContainer,!0);continue}this.isValid=!1,l.elems.forEach((e=>{var i,t;Object.assign(e.style,(null==(i=l.config)?void 0:i.errorFieldStyle)||this.globalConfig.errorFieldStyle),e.classList.add((null==(t=l.config)?void 0:t.errorFieldCssClass)||this.globalConfig.errorFieldCssClass)}));const o=this.createErrorLabelElem(e,l.errorMessage,l.config);this.renderGroupLabel(l.groupElem,o,null==(t=l.config)?void 0:t.errorsContainer),this.isTooltip()&&this.tooltips.push(this.renderTooltip(l.groupElem,o,null==(r=null==(s=l.config)?void 0:s.tooltip)?void 0:r.position))}for(const e in this.fields)this.renderFieldError(e)}}destroy(){this.eventListeners.forEach((e=>{this.removeListener(e.type,e.elem,e.func)})),Object.keys(this.customStyleTags).forEach((e=>{this.customStyleTags[e].remove()})),this.clearErrors(),this.globalConfig.lockForm&&this.unlockForm()}refresh(){this.destroy(),this.form?(this.initialize(this.form,this.globalConfig),Object.keys(this.fields).forEach((e=>{this.addField(e,[...this.fields[e].rules],this.fields[e].config)}))):console.error("Cannot initialize the library! Form is not defined")}setCurrentLocale(e){"string"==typeof e||void 0===e?(this.currentLocale=e,this.isSubmitted&&this.validate()):console.error("Current locale should be a string")}onSuccess(e){return this.onSuccessCallback=e,this}onFail(e){return this.onFailCallback=e,this}}var k,E,L,w,S,x,I,T;k=document.getElementById("nav__open"),E=document.getElementById("nav__close"),(L=gsap.timeline({paused:!0})).set(".header__nav-list",{clearProps:"all"}).set(".header__nav-item",{clearProps:"all"}).to(".header__nav-list",{display:"block",opacity:1,duration:.5}).to(".header__nav-item",{opacity:1,y:"0"}),k.addEventListener("click",(function(){L.play()})),E.addEventListener("click",(function(){L.reverse()})),w=document.getElementById("search__open"),S=document.getElementById("search__close"),(x=gsap.timeline({paused:!0})).fromTo(".search__btn",{display:"none",opacity:0},{display:"flex",opacity:1,duration:.5}).from(".search__btn-input",{opacity:0,x:"100px"}).from("#search__close",{opacity:0,x:"100px"}),w.addEventListener("click",(function(){x.play()})),S.addEventListener("click",(function(){x.reverse()})),ymaps.ready((function(){var e=[55.769535,37.639985],s=new ymaps.Map("map",{center:e,zoom:12}),r=new ymaps.Placemark(e,{balloonContent:""},{iconLayout:"default#image",iconImageHref:"../img/marker.svg",iconImageSize:[20,20],iconImageOffset:[0,0]});s.controls.remove("searchControl"),s.controls.remove("trafficControl"),s.controls.remove("fullscreenControl"),s.controls.remove("rulerControl"),s.behaviors.disable("scrollZoom"),s.behaviors.disable("drag"),s.controls.remove("typeSelector"),s.geoObjects.add(r),r.events.add("click",(function(){i.play()})),t.addEventListener("click",(function(){r.balloon.close(),i.reverse()}))})),I=new C(".about-us-validate",{errorFieldCssClass:"is-invalid"}),T=new C(".form-validate",{errorFieldCssClass:"is-invalid"}),I.addField(".about-us__email",[{rule:"required",errorMessage:"Введите Email"},{rule:"email",errorMessage:"Невалидный Email!"}]),T.addField("#name",[{rule:"required",errorMessage:"Введите имя"},{rule:"minLength",value:5},{rule:"maxLength",value:15}]).addField("#email",[{rule:"required",errorMessage:"Введите Email"},{rule:"email",errorMessage:"Невалидный Email!"}]),function(){var e=document.querySelectorAll(".header__nav-link[data-goto]");if(e.length>0){function i(e){var i=e.target;if(i.dataset.goto&&document.querySelector(i.dataset.goto)){var t=document.querySelector(i.dataset.goto).getBoundingClientRect().top+pageYOffset-document.querySelector("header").offsetHeight;window.scrollTo({top:t,behavior:"smooth"}),e.preventDefault()}}e.forEach((function(e){e.addEventListener("click",i)}))}}()})();
//# sourceMappingURL=main.js.map