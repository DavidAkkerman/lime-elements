import{r as e,h as i}from"./index-5f2797d5.js";const t=class{constructor(i){e(this,i),this.NumberBadge=6,this.NumberValue=23,this.StringBadge="···",this.StringValue="23,89"}render(){return[i("limel-info-tile",{icon:"doctors_bag",label:"Active support tickets",value:this.NumberValue,badge:this.NumberBadge,href:"#"}),i("limel-info-tile",{icon:"water",label:"Average weekly usage",value:this.StringValue,suffix:"L",badge:this.StringBadge,href:"#"})]}};t.style=":host(limel-example-info-tile-notification){display:grid;grid-template-columns:1fr 1fr;grid-template-rows:8rem;gap:2rem;padding:2rem}";export{t as limel_example_info_tile_notification}