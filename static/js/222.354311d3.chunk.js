"use strict";(self.webpackChunkpizza_test=self.webpackChunkpizza_test||[]).push([[222],{222:(e,r,s)=>{s.r(r),s.d(r,{default:()=>d});var l=s(639);const n="NewEmployee_page_wrapper__VAT2U";var i=s(579);const d=()=>(0,i.jsxs)("div",{className:n,children:[(0,i.jsx)(l.Y9,{crumbs:["\u0421\u043f\u0438\u0441\u043e\u043a \u0441\u043e\u0442\u0440\u0443\u0434\u043d\u0438\u043a\u043e\u0432"],title:"\u0414\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u0438\u0435 \u0441\u043e\u0442\u0440\u0443\u0434\u043d\u0438\u043a\u0430"}),(0,i.jsx)("main",{children:(0,i.jsx)(l.NN,{})})]})},123:(e,r,s)=>{s.d(r,{dN:()=>i,gZ:()=>d,N4:()=>l});const l=s(3).d4;var n=s(244);const i=()=>({...n.o}),d=e=>l((e=>e.employees)).find((r=>r.id===e))},639:(e,r,s)=>{s.d(r,{NN:()=>j,QM:()=>E,Y9:()=>A});var l=s(858),n=s(353),i=s(216),d=s(3),a=s(987),o=s(123);const t=async e=>{const r={};return e.name||(r.name={type:"required",message:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0438\u043c\u044f"}),e.lastName||(r.lastName={type:"required",message:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0444\u0430\u043c\u0438\u043b\u0438\u044e"}),e.birthday&&10===e.birthday.length||(r.birthday={type:"required",message:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0434\u0430\u0442\u0443 \u0440\u043e\u0436\u0434\u0435\u043d\u0438\u044f"}),e.phone&&17===e.phone.length||(r.phone={type:"required",message:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430"}),e.role&&"-"!==e.role||(r.role={type:"required",message:"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0440\u043e\u043b\u044c"}),{values:e,errors:r}},c=e=>{var r,s,l,n,i,d,a,o;const t=null!==(r=null===e||void 0===e||null===(s=e.name)||void 0===s?void 0:s.split(" "))&&void 0!==r?r:[];return{isArchive:null!==(l=null===e||void 0===e?void 0:e.isArchive)&&void 0!==l&&l,role:null!==(n=null===e||void 0===e?void 0:e.role)&&void 0!==n?n:"-",phone:null!==(i=null===e||void 0===e?void 0:e.phone)&&void 0!==i?i:"",name:null!==(d=t[0])&&void 0!==d?d:"",lastName:null!==(a=t[1])&&void 0!==a?a:"",birthday:null!==(o=null===e||void 0===e?void 0:e.birthday)&&void 0!==o?o:""}},m=()=>{var e;const{employeeId:r}=(0,i.g)(),s=(0,d.wA)(),n=(0,i.Zp)(),{addEmployee:m,editEmployee:h}=(0,o.dN)(),v=(0,o.gZ)(null!==(e=Number(r))&&void 0!==e?e:0),{handleSubmit:u,register:x,control:j,formState:{errors:p}}=(0,l.mN)({defaultValues:c(v),resolver:t});return{onSubmit:e=>{const r=`${e.name} ${e.lastName}`;v?((e,r)=>{var l;const n={...e,id:null!==(l=null===v||void 0===v?void 0:v.id)&&void 0!==l?l:0,name:r,role:e.role};s(h(n)),(0,a.M8)("\u0414\u0430\u043d\u043d\u044b\u0435 \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u043e\u0431\u043d\u043e\u0432\u043b\u0435\u043d\u044b",{variant:"success"})})(e,r):((e,r)=>{s(m({...e,name:r,role:e.role})),(0,a.M8)("\u0412\u044b \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u0434\u043e\u0431\u0430\u0432\u0438\u043b\u0438 \u0440\u0430\u0431\u043e\u0442\u043d\u0438\u043a\u0430",{variant:"success"})})(e,r),n("/")},handleSubmit:u,register:x,control:j,errors:p}},h="EmployeeForm_fieldsWrapper__+5dst",v="EmployeeForm_fields__VvAy4",u="EmployeeForm_btnWrapper__DpoK9";var x=s(579);const j=()=>{var e,r,s,i;const{control:d,handleSubmit:a,onSubmit:o,register:t,errors:c}=m();return(0,x.jsxs)("form",{onSubmit:a(o),children:[(0,x.jsx)("h2",{children:"\u0414\u0430\u043d\u043d\u044b\u0435 \u0441\u043e\u0442\u0440\u0443\u0434\u043d\u0438\u043a\u0430:"}),(0,x.jsxs)("div",{className:h,children:[(0,x.jsxs)("div",{className:v,children:[(0,x.jsx)(n.A_,{label:"\u0418\u043c\u044f",name:"name",register:t,error:null===c||void 0===c||null===(e=c.name)||void 0===e?void 0:e.message}),(0,x.jsx)(n.A_,{label:"\u0424\u0430\u043c\u0438\u043b\u0438\u044f",name:"lastName",register:t,error:null===c||void 0===c||null===(r=c.lastName)||void 0===r?void 0:r.message}),(0,x.jsx)(n.Cf,{label:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430",name:"phone",control:d,error:null===c||void 0===c||null===(s=c.phone)||void 0===s?void 0:s.message}),(0,x.jsx)(n.Cf,{label:"\u0414\u0430\u0442\u0430 \u0440\u043e\u0436\u0434\u0435\u043d\u0438\u044f",name:"birthday",control:d,error:null===c||void 0===c||null===(i=c.birthday)||void 0===i?void 0:i.message})]}),(0,x.jsxs)("div",{className:v,children:[(0,x.jsx)(l.xI,{control:d,name:"role",render:e=>{var r;let{field:{name:s,onChange:l,ref:i,value:d}}=e;return(0,x.jsx)(n.Vo,{name:s,onChange:l,ref:i,value:d,isRow:!0,error:null===c||void 0===c||null===(r=c.role)||void 0===r?void 0:r.message})}}),(0,x.jsx)(n.A9,{...t("isArchive"),isRow:!0})]})]}),(0,x.jsx)("div",{className:u,children:(0,x.jsx)(n.$n,{variant:"classic",children:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c"})})]})};var p=s(475),y=s(43),N=s(720);const _="Header_header__GYEG7",b="Header_title__XXQuN",g="Header_crumbs__WN2hd",f="Header_nextIcon__Ama7O",A=e=>{const{crumbs:r,title:s}=e;return(0,x.jsxs)("header",{className:_,children:[(0,x.jsxs)("div",{className:g,children:[r.map((e=>(0,x.jsxs)(y.Fragment,{children:[(0,x.jsx)(p.k2,{to:"/",children:e}),(0,x.jsx)(N.mny,{className:f})]},e))),(0,x.jsx)("span",{children:s})]}),(0,x.jsx)("div",{className:b,children:(0,x.jsx)("h1",{children:s})})]})},w=()=>{const e=(0,d.wA)(),{sortByName:r,sortByBirthday:s}=(0,o.N4)((e=>e)),{setSortByName:l,setSortByBirthday:i}=(0,o.dN)();return(0,x.jsx)("thead",{children:(0,x.jsxs)("tr",{children:[(0,x.jsxs)("td",{children:["\u0418\u043c\u044f",(0,x.jsx)(n.lW,{direction:r,onClick:r=>{e(l(r))}})]}),(0,x.jsxs)("td",{children:["\u0414\u0430\u0442\u0430 \u0440\u043e\u0436\u0434\u0435\u043d\u0438\u044f",(0,x.jsx)(n.lW,{direction:s,onClick:r=>{e(i(r))}})]}),(0,x.jsx)("td",{children:"\u0414\u043e\u043b\u0436\u043d\u043e\u0441\u0442\u044c"}),(0,x.jsx)("td",{children:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430"}),(0,x.jsx)("td",{children:"\u0412 \u0430\u0440\u0445\u0438\u0432\u0435"})]})})},k=e=>{switch(e){case"cook":return"\u041f\u043e\u0432\u0430\u0440";case"driver":return"\u0412\u043e\u0434\u0438\u0442\u0435\u043b\u044c";case"waiter":return"\u041e\u0444\u0438\u0446\u0438\u0430\u043d\u0442"}};s(394);const C=e=>{const{employee:r}=e,s=(0,i.Zp)();return(0,x.jsxs)("tr",{onClick:()=>s(`/employee/${r.id}`),children:[(0,x.jsx)("td",{children:r.name}),(0,x.jsx)("td",{children:r.birthday}),(0,x.jsx)("td",{children:k(r.role)}),(0,x.jsx)("td",{children:r.phone}),(0,x.jsx)("td",{children:r.isArchive?"+":"-"})]})},S="EmployeesTable_tableWrapper__8RNMe",E=()=>{const e=(0,o.N4)((e=>e.filteredData));return(0,x.jsx)("div",{className:S,children:(0,x.jsxs)("table",{children:[(0,x.jsx)(w,{}),(0,x.jsx)("tbody",{children:e.map((e=>(0,x.jsx)(C,{employee:e},e.id)))})]})})}}}]);
//# sourceMappingURL=222.354311d3.chunk.js.map