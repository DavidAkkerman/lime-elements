class t{constructor(){this.iconPath="";this.featureSwitches=o(localStorage)}}function o(t){const o={};for(let c=0;c<t.length;c++){const n=t.key(c);const s=t.getItem(n);if(!["true","false"].includes(s)){continue}o[n]=s==="true"}return o}const c=new t;const n=(()=>c)();export{n as c};
//# sourceMappingURL=config-f7362aeb.js.map