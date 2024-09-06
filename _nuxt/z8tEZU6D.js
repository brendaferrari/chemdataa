import{r as o,c as f,a as t,h as N,i as d,v as c,u as s,j as u,g as x,k as B,b as D,w as E,t as C,o as p,l as M}from"./DPIksaXK.js";import{u as V}from"./pSksqH9Z.js";import{T as O}from"./DOn_5ldi.js";import"./1vGWY2ar.js";const q={class:"flex h-auto justify-center"},U={class:"flex flex-col mb-48"},$={class:"flex flex-col self-start w-full mt-10 mb-10"},L={class:"flex justify-start mt-3 space-x-4"},R={class:"flex items-center"},H={class:"flex"},P={key:0,id:"text1",class:"flex flex-col text-xs self-start w-96 mt-2"},W={class:"flex justify-start mt-3 space-x-4"},z={class:"flex items-center"},Y={class:"flex"},A={class:"flex justify-start mt-3 space-x-4"},F={class:"flex items-center"},J={class:"flex"},G={key:1,class:""},K={class:"flex flex-col mt-8"},Q={class:"flex justify-center"},X={class:"flex absolute mt-1 ml-28"},Z={key:2},_={key:0,class:"flex justify-center"},ee={key:1,class:"flex flex-col self-center max-w-xl"},te={class:"flex self-center"},le={class:"flex self-center"},de={__name:"peptocodes",setup(se){const m=o(),i=o(),n=o(),a=o(),y=o(null),v=o(null),h=o(null),w=o(),b=o(!1),g=o(!1),k=o(!1);async function T(){if(y.value=null,v.value=null,!m.value){y.value="Please add your input.";return}const r=await j();v.value=JSON.stringify(r),h.value=r.result[0],w.value=r.result[1]}const j=async()=>{const l=`${M().public.apiServer||"http://localhost:8080"}/peptocodes`,S={inputSmiles:m.value,inputCode:i.value,inputDB:n.value,checkSmiles:a.value};return console.log(S),await $fetch(l,{method:"POST",body:S,headers:{"Content-Type":"application/json"}})};async function I(){var r=document.getElementById("myInput");r.select(),r.setSelectionRange(0,99999),navigator.clipboard.writeText(r.value)}return V({title:"PepToCodes",ogTitle:"PepToCodes",description:"Transform amino acid smiles to one letter code or three letter code for later analysis",ogDescription:"Transform amino acid smiles to one letter code or three letter code for later analysis"}),(r,e)=>(p(),f("div",q,[t("div",U,[e[30]||(e[30]=t("div",{class:"flex flex-col justify-center"},[t("h1",{class:"p-4 self-center text-3xl"},"PeptoCodes"),t("p",null," Transform amino acid smiles to one letter code or three letter code for later analysis. ")],-1)),t("form",{onSubmit:e[12]||(e[12]=N(l=>T(),["prevent"]))},[t("div",$,[e[25]||(e[25]=t("div",{class:"flex flex-col self-start"},[t("h1",null,"Which database would you like to choose?")],-1)),t("div",L,[t("div",R,[d(t("input",{"onUpdate:modelValue":e[0]||(e[0]=l=>u(n)?n.value=l:null),type:"radio",id:"DBCheck1",class:"",required:"",value:"peptocodes",onClick:e[1]||(e[1]=l=>b.value=!1)},null,512),[[c,s(n)]]),e[13]||(e[13]=t("label",{for:"DBCheck1",class:"block text-sm font-medium text-gray-900 dark:text-white select-none"},"peptocodes",-1))]),t("div",H,[d(t("input",{"onUpdate:modelValue":e[2]||(e[2]=l=>u(n)?n.value=l:null),type:"radio",id:"DBCheck2",class:"",required:"",value:"norine",onClick:e[3]||(e[3]=l=>b.value=!0)},null,512),[[c,s(n)]]),e[14]||(e[14]=t("label",{for:"DBCheck2",class:"block text-sm font-medium text-gray-900 dark:text-white select-none"},"norine",-1))])]),s(b)?(p(),f("div",P,e[15]||(e[15]=[t("p",null," You are using Norine database which is freely available to everybody. ",-1),t("p",null," Norine: update of the nonribosomal peptide resource. Nucleic Acids Research, Nov. 2019, gkz1000, https://doi.org/10.1093/nar/gkz1000 ",-1)]))):x("",!0),e[26]||(e[26]=t("div",{class:"flex flex-col self-start mt-3"},[t("h1",null,"Which representation would you like to choose?")],-1)),t("div",W,[t("div",z,[d(t("input",{"onUpdate:modelValue":e[4]||(e[4]=l=>u(i)?i.value=l:null),type:"radio",id:"codeCheck1",class:"",required:"",value:"one letter code"},null,512),[[c,s(i)]]),e[16]||(e[16]=t("label",{for:"codeCheck1",class:"block text-sm font-medium text-gray-900 dark:text-white select-none"},"One letter code",-1))]),t("div",Y,[d(t("input",{"onUpdate:modelValue":e[5]||(e[5]=l=>u(i)?i.value=l:null),type:"radio",id:"codeCheck2",class:"",required:"",value:"three letter code"},null,512),[[c,s(i)]]),e[17]||(e[17]=t("label",{for:"codeCheck2",class:"block text-sm font-medium text-gray-900 dark:text-white select-none"},"Three letter code",-1))])]),e[27]||(e[27]=t("div",{class:"flex flex-col self-start mt-3"},[t("h1",null," Would you like to run a one SMILES or a file with multiple SMILES? ")],-1)),t("div",A,[t("div",F,[d(t("input",{"onUpdate:modelValue":e[6]||(e[6]=l=>u(a)?a.value=l:null),type:"radio",id:"smilesCheck",class:"",required:"",value:"smiles",onClick:e[7]||(e[7]=l=>{g.value=!0,k.value=!1})},null,512),[[c,s(a)]]),e[18]||(e[18]=t("label",{for:"smilesCheck",class:"block text-sm font-medium text-gray-900 dark:text-white select-none"},"SMILES",-1))]),t("div",J,[d(t("input",{"onUpdate:modelValue":e[8]||(e[8]=l=>u(a)?a.value=l:null),type:"radio",id:"fileCheck",class:"",required:"",value:"SMILES file",onClick:e[9]||(e[9]=l=>{g.value=!1,k.value=!0})},null,512),[[c,s(a)]]),e[19]||(e[19]=t("label",{for:"fileCheck",class:"block text-sm font-medium text-gray-900 dark:text-white select-none"},"SMILES file",-1))])]),s(g)?(p(),f("div",G,[e[23]||(e[23]=t("label",{for:"input_smiles",class:"flex justify-center mb-2 text-sm font-medium text-gray-900 dark:text-white"},"Input SMILES",-1)),d(t("input",{"onUpdate:modelValue":e[10]||(e[10]=l=>u(m)?m.value=l:null),type:"text",id:"input_smiles",class:"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",placeholder:"write your SMILES here",required:""},null,512),[[B,s(m)]]),t("form",{onSubmit:e[11]||(e[11]=N(l=>I(),["prevent"]))},[t("div",K,[e[22]||(e[22]=t("div",{class:"flex max-w-xl text-sm italic mb-2"},[t("p",null," You can use the following example to test the conversion to one letter code using the peptocodes database: ")],-1)),t("div",Q,[e[21]||(e[21]=t("div",{class:"flex relative"},[t("input",{class:"self-center max-h-0.5 bg-gray-50 border border-gray-300 text-gray-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full px-2.5 py-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500",type:"text",value:"N[C@@]([H])(CCCNC(=N)N)C(=O)N[C@@]([H])([C@]([H])(O)C)C(=O)N[C@@]([H])(CCCCN)C(=O)N[C@@]([H])(CCCNC(=N)N)C(=O)O",id:"myInput",disabled:"",readonly:""})],-1)),t("div",X,[D(O,{text:"Copied!"},{default:E(()=>e[20]||(e[20]=[t("button",{class:"max-h-6 text-gray-900 dark:text-gray-400 hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-600 dark:hover:bg-gray-700 rounded-lg py-2 px-2.5 inline-flex items-center justify-center bg-white border-gray-200 border"}," Copy ",-1)])),_:1})])])])],32)])):x("",!0),s(k)?(p(),f("div",Z,e[24]||(e[24]=[t("label",{for:"input_file",class:"flex justify-center mb-2 text-sm font-medium text-gray-900 dark:text-white"},"Input file (Under Development)",-1),t("input",{type:"file",id:"input_file",class:"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",placeholder:"drop your input file here",required:"",disabled:""},null,-1)]))):x("",!0)]),e[29]||(e[29]=t("div",{class:"flex flex-col justify-center"},[t("button",{type:"submit",class:"button self-center mb-12 bg-gray-200 dark:bg-gray-600 hover:bg-violet-300 dark:hover:bg-violet-500 rounded-lg w-24 h-8"}," Submit ")],-1)),s(y)?(p(),f("div",_,C(s(y)),1)):x("",!0),s(v)?(p(),f("div",ee,[e[28]||(e[28]=t("div",{class:"flex self-center"},[t("h1",null,"Results")],-1)),t("div",te,C(s(h)),1),t("div",le,C(s(w)),1)])):x("",!0)],32)])]))}};export{de as default};