(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[195],{7801:function(__unused_webpack_module,__unused_webpack_exports,__webpack_require__){(window.__NEXT_P=window.__NEXT_P||[]).push(["/blog",function(){return __webpack_require__(3190)}])},2420:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{y:function(){return PostCard},p:function(){return PostList}});var jsx_runtime=__webpack_require__(5893),moment=__webpack_require__(381),moment_default=__webpack_require__.n(moment),next_link=__webpack_require__(1664),link_default=__webpack_require__.n(next_link);__webpack_require__(7294);let PostCard=param=>{let{publishedDate,defaultTitle,slug}=param;return(0,jsx_runtime.jsxs)(link_default(),{className:"flex flex-col justify-between h-40 col-start-1 p-4 border-2 rounded-lg cursor-pointer border-txt-light dark:border-txt-dark sm:col-start-2 sm:col-span-2 md:col-start-2 md:col-span-1 hover:border-secondary dark:hover:border-secondary hover:scale-105 hover:border-2 hover:ease-out hover:duration-100",href:"/blog/".concat(slug),children:[(0,jsx_runtime.jsx)("h2",{className:"text-4xl",children:defaultTitle}),(0,jsx_runtime.jsx)("p",{className:"text-lg",children:moment_default()(publishedDate).calendar()})]})},PostList=param=>{let{children}=param;return(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:(0,jsx_runtime.jsx)("div",{className:"grid grid-cols-1 gap-4 mx-2 sm:mx-20 sm:grid-cols-4 md:grid-cols-3 ",children:children})})}},3190:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(5893);__webpack_require__(7294);var components_post__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(2420),hooks__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(7186),api__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(3433),components_general__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(6909);let Blog=()=>{let postAPI=(0,hooks__WEBPACK_IMPORTED_MODULE_3__.ij)(new api__WEBPACK_IMPORTED_MODULE_4__.wp("".concat("https://portfolio-api-3fr6.onrender.com","/posts"))),{items:posts,setPagination,totalPages,pagination}=(0,hooks__WEBPACK_IMPORTED_MODULE_3__.ib)(postAPI,{currentPage:1,limit:4},[{by:"publishedDate",order:"desc"}]);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:"flex flex-col justify-",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(components_post__WEBPACK_IMPORTED_MODULE_2__.p,{children:posts.map(param=>{let{defaultTitle,publishedDate,slug,id}=param;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(components_post__WEBPACK_IMPORTED_MODULE_2__.y,{defaultTitle:defaultTitle,publishedDate:publishedDate,slug:slug,id:id},"post-".concat(id))})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"flex justify-center",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(components_general__WEBPACK_IMPORTED_MODULE_5__.tl,{pagination:pagination,setPagination:setPagination,totalPages:totalPages})})]})};__webpack_exports__.default=Blog}},function(__webpack_require__){__webpack_require__.O(0,[885,774,888,179],function(){return __webpack_require__(__webpack_require__.s=7801)}),_N_E=__webpack_require__.O()}]);