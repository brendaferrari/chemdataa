import{a9 as f,r as c,aa as o,I as d,f as v,ab as l,ac as i,ad as h,a1 as m}from"./DPIksaXK.js";function U(t,a={}){const e=a.head||f();if(e)return e.ssr?e.push(t,a):p(e,t,a)}function p(t,a,e={}){const s=c(!1),n=c({});o(()=>{n.value=s.value?{}:h(a)});const r=t.push(n.value,e);return d(n,u=>{r.patch(u)}),m()&&(v(()=>{r.dispose()}),l(()=>{s.value=!0}),i(()=>{s.value=!1})),r}export{U as u};