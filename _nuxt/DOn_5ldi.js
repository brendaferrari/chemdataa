import{q as i,r as l,o as a,c as s,u as c,n,t as d,g as m,a as p,s as u,_ as f}from"./DPIksaXK.js";const _={class:"flex flex-col items-center relative z-10"},v=i({__name:"tooltip-click",props:{text:{type:String,required:!0},distanceFromBottom:{type:String,required:!1,default:"bottom-7"}},setup(t){const e=l(!1),r=()=>{e.value=!0,setTimeout(()=>{e.value=!1},2e3)};return(o,k)=>(a(),s("div",_,[c(e)?(a(),s("div",{key:0,class:n(["tooltip",t.distanceFromBottom])},d(t.text),3)):m("",!0),p("div",{onClick:r},[u(o.$slots,"default",{},void 0,!0)])]))}}),C=f(v,[["__scopeId","data-v-a633a397"]]);export{C as T};