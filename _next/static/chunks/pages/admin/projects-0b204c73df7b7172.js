(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[130],{4460:function(__unused_webpack_module,__unused_webpack_exports,__webpack_require__){(window.__NEXT_P=window.__NEXT_P||[]).push(["/admin/projects",function(){return __webpack_require__(1184)}])},8075:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{HS:function(){return AddButton},Xg:function(){return AdminCard},xE:function(){return BackButton},iA:function(){return Table}});var jsx_runtime=__webpack_require__(5893),next_link=__webpack_require__(1664),link_default=__webpack_require__.n(next_link);__webpack_require__(7294);let AdminCard=param=>{let{name,route}=param;return(0,jsx_runtime.jsx)(link_default(),{href:"/admin/".concat(route),className:"flex items-center justify-center py-6 text-center border rounded-lg border-txt-light dark:border-txt-light hover:border-secondary dark:hover:border-secondary hover:scale-105",children:(0,jsx_runtime.jsx)("h1",{className:"text-4xl md:text-5xl",children:name})})},BackButton=()=>(0,jsx_runtime.jsx)(link_default(),{href:"/admin",className:"p-1 mb-2 text-xl rounded-lg hover:text-yellow-400 hover:scale-105",children:"Back"}),AddButton=param=>{let{href}=param;return(0,jsx_runtime.jsx)(link_default(),{href:"/admin/".concat(href),className:"p-1 mb-2 text-xl text-txt-light dark:text-txt-dark hover:text-secondary dark:hover:text-txt-dark hover:scale-105",children:"Add"})},Table=param=>{let{children,labels}=param;return(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:(0,jsx_runtime.jsxs)("table",{className:"border border-collapse border-txt-light dark:border-txt-dark",children:[(0,jsx_runtime.jsx)("thead",{children:(0,jsx_runtime.jsx)("tr",{children:labels.map(label=>(0,jsx_runtime.jsx)("th",{children:label},label))})}),(0,jsx_runtime.jsx)("tbody",{children:children})]})})}},6965:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{jT:function(){return errorModal},e$:function(){return getErrorMessage},Sb:function(){return successModal},Of:function(){return validateFields},IG:function(){return yesNoModal}});let getErrorMessage=error=>{var ref,ref1,ref2;return(null===(ref=error.response)||void 0===ref?void 0:ref.status)===400&&(null===(ref2=error.response)||void 0===ref2||ref2.data.message[0].error),null===(ref1=error.response)||void 0===ref1?void 0:ref1.data.message};var sweetalert2_all=__webpack_require__(6455),sweetalert2_all_default=__webpack_require__.n(sweetalert2_all);let errorModal=text=>{text=Array.isArray(text)?text[0].error:text,sweetalert2_all_default().fire({title:"Error!",text:text.charAt(0).toUpperCase()+text.slice(1),icon:"error",confirmButtonText:"Ok",customClass:{popup:"modal-popup",confirmButton:"modal-confirm-button"}})},successModal=text=>{sweetalert2_all_default().fire({title:"Success!",text:text.charAt(0).toUpperCase()+text.slice(1),icon:"success",confirmButtonText:"Ok",customClass:{popup:"modal-popup",confirmButton:"modal-confirm-button"}})},yesNoModal=async text=>{let result=sweetalert2_all_default().fire({title:text,showCancelButton:!0,confirmButtonText:"Yes",customClass:{popup:"modal-popup",confirmButton:"modal-confirm-button",cancelButton:"modal-cancel-button"}});return result},validateFields=fields=>{for(let field of fields)if(void 0===field.value||0===field.value.length)return field;return null}},1184:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:function(){return projects}});var jsx_runtime=__webpack_require__(5893);__webpack_require__(7294);var next_router=__webpack_require__(1163),index_es=__webpack_require__(9603),free_regular_svg_icons=__webpack_require__(4288);let Row=param=>{var ref,ref1;let{project,categoriesMap,handleDelete}=param,router=(0,next_router.useRouter)(),handleRedirectToForm=()=>{let{id,name,idCategory,description,githubUrl}=project;router.push({pathname:"/admin/projects/form",query:{id,name,idCategory,description,githubUrl}})};return(0,jsx_runtime.jsxs)("tr",{className:"",children:[(0,jsx_runtime.jsx)("td",{className:"text-center border border-txt-light dark:border-txt-dark ",children:project.name}),(0,jsx_runtime.jsx)("td",{className:"px-4 text-center border border-txt-light dark:border-txt-dark ",style:{color:null===(ref=categoriesMap.get(project.idCategory))||void 0===ref?void 0:ref.color},children:null===(ref1=categoriesMap.get(project.idCategory))||void 0===ref1?void 0:ref1.name}),(0,jsx_runtime.jsxs)("td",{className:"px-4 text-center border border-txt-light dark:border-txt-dark ",children:[" ",(0,jsx_runtime.jsx)("a",{href:project.githubUrl,target:"_blank",rel:"noopener noreferrer",children:project.githubUrl.length>20?project.githubUrl.slice(0,20):project.githubUrl})," "]}),(0,jsx_runtime.jsxs)("td",{className:"flex items-center justify-center gap-1 px-4 text-center border border-txt-light dark:border-txt-dark",children:[(0,jsx_runtime.jsxs)("button",{onClick:handleRedirectToForm,children:[(0,jsx_runtime.jsx)(index_es.G,{className:"text-xl text-txt-light dark:text-txt-dark hover:text-secondary dark:hover:text-secondary",icon:free_regular_svg_icons.Yai})," "]}),(0,jsx_runtime.jsx)("button",{onClick:()=>handleDelete(project.id,project.name),children:(0,jsx_runtime.jsx)(index_es.G,{className:"text-xl text-txt-light dark:text-txt-dark hover:text-secondary dark:hover:text-secondary",icon:free_regular_svg_icons.I7k})})]})]})};var hooks=__webpack_require__(7186),general=__webpack_require__(6909),api=__webpack_require__(3433),helpers=__webpack_require__(6965),axios=__webpack_require__(196),admin=__webpack_require__(8075);let Skills=()=>{(0,hooks.DH)();let categoryAPI=(0,hooks.ij)(new api.RF("".concat("https://portfolio-api-3fr6.onrender.com","/categories"))),projectAPI=(0,hooks.ij)(new api.P9("".concat("https://portfolio-api-3fr6.onrender.com","/projects"))),{items:projects,setItems:setProjects,pagination,totalPages,setPagination}=(0,hooks.ib)(projectAPI,{currentPage:1,limit:10},[{order:"asc",by:"name"}]),{items:categories}=(0,hooks.ib)(categoryAPI,{currentPage:1,limit:100},[]),categoriesMap=(0,hooks.eF)(categories),handleDelete=async(id,name)=>{let result=await (0,helpers.IG)("Do you want to delete ".concat(name,"?"));if(result.isConfirmed){let resp=await projectAPI.delete(id);if(!axios.ZP.isAxiosError(resp)&&null!==resp){(0,helpers.Sb)("".concat(resp.name," was deleted successfully")),setProjects(projects.filter(project=>project.id!==id));return}(0,helpers.jT)("An error occurs while ".concat(name," was being deleted"))}};return(0,jsx_runtime.jsx)("div",{className:"grid grid-cols-5",children:(0,jsx_runtime.jsxs)("div",{className:"flex flex-col col-span-3 col-start-2",children:[(0,jsx_runtime.jsx)(admin.iA,{labels:["Name","Category","Github URL","Actions"],children:projects.map(project=>(0,jsx_runtime.jsx)(Row,{categoriesMap:categoriesMap,project:project,handleDelete:handleDelete},"row-".concat(project.id)))}),(0,jsx_runtime.jsx)(general.tl,{pagination:pagination,setPagination:setPagination,totalPages:totalPages}),(0,jsx_runtime.jsxs)("div",{className:"flex justify-center gap-4",children:[(0,jsx_runtime.jsx)(admin.xE,{}),(0,jsx_runtime.jsx)(admin.HS,{href:"/projects/form"})]})]})})};var projects=Skills}},function(__webpack_require__){__webpack_require__.O(0,[455,774,888,179],function(){return __webpack_require__(__webpack_require__.s=4460)}),_N_E=__webpack_require__.O()}]);