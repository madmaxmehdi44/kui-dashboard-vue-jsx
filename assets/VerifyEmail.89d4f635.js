import{d as r,H as n,r as o,a as e,F as l,f as t,w as d,v as u,n as m,R as f}from"./index.9b8411fb.js";import{B as c}from"./Button.bd3dcd0b.js";var y=r({setup(){const s=n({processing:!1}),i=o(!1),a=()=>{i.value=!0};return()=>e(l,null,[e("div",{class:"mb-4 text-sm text-gray-600 dark:text-gray-400"},[t("Thanks for signing up! Before getting started, could you verify your email address by clicking on the link we just emailed to you? If you didn't receive the email, we will gladly send you another.")]),d(e("div",{class:"mb-4 text-sm font-medium text-green-600"},[t("A new verification link has been sent to the email address you provided during registration.")]),[[u,i.value]]),e("form",{onSubmit:m(a,["prevent"])},[e("div",{class:"flex items-center justify-between mt-4"},[e(c,{type:"submit",disabled:s.processing},{default:()=>[t("Resend Verification Email")]}),e(f,{to:"#",class:"text-sm text-blue-600 hover:underline dark:text-blue-400"},{default:()=>[t("Log Out")]})])])])}});export{y as default};