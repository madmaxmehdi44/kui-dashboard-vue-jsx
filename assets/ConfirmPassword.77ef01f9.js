import{d as t,H as d,a as s,n as i,f as a}from"./index.9b8411fb.js";import{L as l,I as n,a as u}from"./Input.edbce321.js";import{B as p}from"./Button.bd3dcd0b.js";import{r as c}from"./LockClosedIcon.c607ff83.js";var v=t({setup(){const e=d({password:"",processing:!1}),r=()=>{};return()=>s("form",{onSubmit:i(r,["prevent"])},[s("div",{class:"mb-4 text-sm text-gray-600 dark:text-gray-400"},[a("This is a secure area of the application. Please confirm your password before continuing.")]),s("div",{class:"grid gap-4"},[s("div",{class:"space-y-2"},[s(l,{for:"password",value:"Password"},null),s(n,null,{default:()=>[s(u,{withIcon:!0,id:"password",type:"password",class:"block w-full",placeholder:"Password",modelValue:e.password,"onUpdate:modelValue":o=>e.password=o,required:!0,autocomplete:"current-password",autofocus:!0},null)],icon:()=>s(c,{"aria-hidden":"true",class:"w-5 h-5"},null)})]),s("div",null,[s(p,{type:"submit",class:"w-full justify-center",disabled:e.processing},{default:()=>[a("Confirm")]})])])])}});export{v as default};