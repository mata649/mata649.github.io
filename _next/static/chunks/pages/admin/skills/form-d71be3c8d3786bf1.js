(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[166],{9331:function(__unused_webpack_module,__unused_webpack_exports,__webpack_require__){(window.__NEXT_P=window.__NEXT_P||[]).push(["/admin/skills/form",function(){return __webpack_require__(9154)}])},6965:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{jT:function(){return errorModal},e$:function(){return getErrorMessage},Sb:function(){return successModal},Of:function(){return validateFields},IG:function(){return yesNoModal}});let getErrorMessage=error=>{var ref,ref1,ref2;return(null===(ref=error.response)||void 0===ref?void 0:ref.status)===400&&(null===(ref2=error.response)||void 0===ref2||ref2.data.message[0].error),null===(ref1=error.response)||void 0===ref1?void 0:ref1.data.message};var sweetalert2_all=__webpack_require__(6455),sweetalert2_all_default=__webpack_require__.n(sweetalert2_all);let errorModal=text=>{sweetalert2_all_default().fire({title:"Error!",text:text.charAt(0).toUpperCase()+text.slice(1),icon:"error",confirmButtonText:"Ok",customClass:{popup:"modal-popup",confirmButton:"modal-confirm-button"}})},successModal=text=>{sweetalert2_all_default().fire({title:"Success!",text:text.charAt(0).toUpperCase()+text.slice(1),icon:"success",confirmButtonText:"Ok",customClass:{popup:"modal-popup",confirmButton:"modal-confirm-button"}})},yesNoModal=async text=>{let result=sweetalert2_all_default().fire({title:text,showCancelButton:!0,confirmButtonText:"Yes",customClass:{popup:"modal-popup",confirmButton:"modal-confirm-button",cancelButton:"modal-cancel-button"}});return result},validateFields=fields=>{for(let field of fields)if(void 0===field.value||0===field.value.length)return field;return null}},9154:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(5893),api__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(3433),axios__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(196),helpers__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(6965),hooks__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(7186),next_config__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(1752),next_config__WEBPACK_IMPORTED_MODULE_5___default=__webpack_require__.n(next_config__WEBPACK_IMPORTED_MODULE_5__),next_router__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(1163),react__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(7294);let New=()=>{var ref;(0,hooks__WEBPACK_IMPORTED_MODULE_4__.DH)();let{publicRuntimeConfig}=next_config__WEBPACK_IMPORTED_MODULE_5___default()(),router=(0,next_router__WEBPACK_IMPORTED_MODULE_6__.useRouter)(),{id,idCategory,name}=router.query,skillAPI=(0,hooks__WEBPACK_IMPORTED_MODULE_4__.ij)(new api__WEBPACK_IMPORTED_MODULE_1__.LN("".concat(publicRuntimeConfig.apiURL,"/skills"))),categoryAPI=(0,hooks__WEBPACK_IMPORTED_MODULE_4__.ij)(new api__WEBPACK_IMPORTED_MODULE_1__.RF("".concat(publicRuntimeConfig.apiURL,"/categories"))),{items:categories}=(0,hooks__WEBPACK_IMPORTED_MODULE_4__.ib)(categoryAPI,{currentPage:1,limit:10},[{by:"name",order:"asc"}]),[category,setCategory]=(0,react__WEBPACK_IMPORTED_MODULE_7__.useState)(idCategory||""),[errorMessage,setErrorMessage]=(0,react__WEBPACK_IMPORTED_MODULE_7__.useState)(""),form=(0,react__WEBPACK_IMPORTED_MODULE_7__.useRef)(null),handleCategoryChange=e=>{setCategory(e.target.value)},handleCreate=async e=>{var ref;e.preventDefault(),setErrorMessage("");let skillName=null==form?void 0:null===(ref=form.current)||void 0===ref?void 0:ref.skillName.value,field=(0,helpers__WEBPACK_IMPORTED_MODULE_3__.Of)([{name:"Name",value:skillName},{name:"Category",value:category}]);if(null!==field){setErrorMessage("".concat(field.name," cannot be empty"));return}let resp=await skillAPI.create({idCategory:category,name:skillName});if(!axios__WEBPACK_IMPORTED_MODULE_2__.ZP.isAxiosError(resp)&&null!==resp){(0,helpers__WEBPACK_IMPORTED_MODULE_3__.Sb)("".concat(resp.name," was created succesfully!")),router.push("/admin/skills");return}(0,helpers__WEBPACK_IMPORTED_MODULE_3__.jT)((0,helpers__WEBPACK_IMPORTED_MODULE_3__.e$)(resp))},handleUpdate=async e=>{var ref;e.preventDefault(),setErrorMessage("");let skillName=null==form?void 0:null===(ref=form.current)||void 0===ref?void 0:ref.skillName.value,field=(0,helpers__WEBPACK_IMPORTED_MODULE_3__.Of)([{name:"Name",value:skillName},{name:"Category",value:category}]);if(null!==field){setErrorMessage("".concat(field.name," cannot be empty"));return}let resp=await skillAPI.update({id:id,idCategory:category,name:skillName});if(!axios__WEBPACK_IMPORTED_MODULE_2__.ZP.isAxiosError(resp)&&null!==resp){(0,helpers__WEBPACK_IMPORTED_MODULE_3__.Sb)("".concat(resp.name," was updated succesfully!")),router.push("/admin/skills");return}(0,helpers__WEBPACK_IMPORTED_MODULE_3__.jT)((0,helpers__WEBPACK_IMPORTED_MODULE_3__.e$)(resp))};return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"flex justify-center",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form",{ref:form,onSubmit:id?handleUpdate:handleCreate,className:"flex flex-col gap-3 px-5 py-4 border rounded-lg",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h2",{className:"text-4xl text-center",children:id?"Update":"Create"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"text-red-600",children:errorMessage}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("input",{type:"text",placeholder:"Name",className:"text-xl text-center text-black",name:"skillName",defaultValue:name}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("select",{onChange:handleCategoryChange,defaultValue:idCategory,className:"mb-8 text-xl bg-black",style:{backgroundColor:"#181818",borderColor:"#ededed"},children:[idCategory?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("option",{value:idCategory,children:null===(ref=categories.find(category=>category.id===idCategory))||void 0===ref?void 0:ref.name}):(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("option",{value:"",children:"Category"}),categories.map(category=>idCategory!==category.id&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("option",{value:category.id,style:{color:category.color},children:category.name},"cat-".concat(category.id)))]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button",{type:"submit",className:"p-1 mb-2 text-2xl border rounded-lg hover:border-yellow-400 hover:scale-105",children:id?"Update":"Create"})]})})};__webpack_exports__.default=New}},function(__webpack_require__){__webpack_require__.O(0,[455,774,888,179],function(){return __webpack_require__(__webpack_require__.s=9331)}),_N_E=__webpack_require__.O()}]);