import{g as o,a as r,b as t}from"./get-icon-props-0b65f85e.js";const c="rgba(var(--color-gray-lighter), 0.4)";const a="rgba(var(--color-cyan-lighter), 0.4)";const s="rgba(var(--color-gray-lighter), 0.4)";const e="rgba(var(--color-blue-lighter), 0.4)";const n="rgba(var(--color-yellow-lighter), 0.4)";const l="rgba(var(--color-green-lighter), 0.4)";const g="rgba(var(--color-coral-lighter), 0.4)";const p="rgba(var(--color-sky-lighter), 0.4)";const i="rgba(var(--color-lime-lighter), 0.4)";const d="rgba(var(--color-magenta-lighter), 0.4)";const m="rgba(var(--color-blue-lighter), 0.4)";const b="rgba(var(--color-orange-lighter), 0.4)";const v="rgba(var(--color-green-lighter), 0.4)";const f="rgba(var(--color-indigo-lighter), 0.4)";const h="rgba(var(--color-red-lighter), 0.4)";const u="rgba(var(--color-orange-lighter), 0.4)";const x="rgba(var(--color-yellow-lighter), 0.4)";const k="rgba(var(--color-red-lighter), 0.4)";const y="rgba(var(--color-glaucous-lighter), 0.4)";const _={msg:x,ics:a,ical:a,icalendar:a,ifb:a,email:s,eml:s,oft:s,ost:s,emlx:s,html:e,xml:e,txt:n,rtf:n,dot:p,doc:p,docx:p,dotx:p,docm:p,dotm:p,odt:b,pages:b,pdf:k,ppt:g,pot:g,pps:g,pptx:g,pptm:g,potx:g,potm:g,ppam:g,ppsx:g,ppsm:g,sldx:g,sldm:g,odp:m,key:m,xls:l,xlsx:l,csv:c,numbers:v,bmp:i,jpg:i,jpeg:i,heic:i,png:i,gif:i,psd:m,ai:b,svg:d,svgz:d,ep:d,eps:d,sketch:d,mp3:f,wav:f,wma:f,ogg:f,flv:h,h264:h,mov:h,mp4:h,mwv:h,zip:u,"7z":u,rar:u,json:y,yaml:y,sql:y,db:y,dbf:y};function w(o){return _[o.toLowerCase()]||c}const j="rgb(var(--color-gray-dark))";const z="rgb(var(--color-cyan-dark))";const q="rgb(var(--color-gray-dark))";const D="rgb(var(--color-blue-dark))";const F="rgb(var(--color-yellow-darker))";const P="rgb(var(--color-green-dark))";const A="rgb(var(--color-coral-dark))";const B="rgb(var(--color-sky-dark))";const C="rgb(var(--color-lime-dark))";const E="rgb(var(--color-magenta-dark))";const G="rgb(var(--color-blue-dark))";const H="rgb(var(--color-orange-dark))";const I="rgb(var(--color-green-dark))";const J="rgb(var(--color-indigo-dark))";const K="rgb(var(--color-red-dark))";const L="rgb(var(--color-brown-default))";const M="rgb(var(--color-yellow-dark))";const N="rgb(var(--color-red-dark))";const O="rgb(var(--color-glaucous-dark))";const Q={msg:M,ics:z,ical:z,icalendar:z,ifb:z,email:q,eml:q,oft:q,ost:q,emlx:q,html:D,xml:D,txt:F,rtf:F,dot:B,doc:B,docx:B,dotx:B,docm:B,dotm:B,odt:H,pages:H,pdf:N,ppt:A,pot:A,pps:A,pptx:A,pptm:A,potx:A,potm:A,ppam:A,ppsx:A,ppsm:A,sldx:A,sldm:A,odp:G,key:G,xls:P,xlsx:P,csv:j,numbers:I,bmp:C,jpg:C,jpeg:C,heic:C,png:C,gif:C,psd:G,ai:H,svg:E,svgz:E,ep:E,eps:E,sketch:E,mp3:J,wav:J,wma:J,ogg:J,flv:K,h264:K,mov:K,mp4:K,mwv:K,zip:L,"7z":L,rar:L,json:O,yaml:O,sql:O,db:O,dbf:O};function R(o){return Q[o.toLowerCase()]||j}const S="file";const T="tear_off_calendar";const U="email";const V="internet";const W="text_box";const X="ms_excel_copyrighted";const Y="ms_word_copyrighted";const Z="ms_powerpoint_copyrighted";const $="picture";const oo="camera";const ro="vector";const to="presentation_filled";const co="overview_pages_2";const ao="data_sheet";const so="audio_wave";const eo="video_file";const no="condom_package";const lo="ms_outlook_copyrighted";const go="database";const po={msg:lo,ics:T,ical:T,icalendar:T,ifb:T,email:U,eml:U,oft:U,ost:U,emlx:U,html:V,xml:V,txt:W,rtf:W,dot:Y,doc:Y,docx:Y,dotx:Y,docm:Y,dotm:Y,odt:co,pages:co,pdf:"PDF_2",ppt:Z,pot:Z,pps:Z,pptx:Z,pptm:Z,potx:Z,potm:Z,ppam:Z,ppsx:Z,ppsm:Z,sldx:Z,sldm:Z,odp:to,key:to,xls:X,xlsx:X,csv:ao,numbers:ao,jpg:oo,jpeg:oo,heic:oo,bmp:$,png:$,gif:$,psd:"adobe_photoshop_copyrighted",ai:"adobe_illustrator_copyrighted",svg:ro,svgz:ro,ep:ro,eps:ro,sketch:ro,mp3:so,wav:so,wma:so,ogg:so,avi:eo,flv:eo,h264:eo,mov:eo,mp4:eo,mwv:eo,zip:no,"7z":no,rar:no,json:"json",yaml:go,sql:go,db:go,dbf:go};function io(o){return po[o.toLowerCase()]||S}function mo(r){const t=o(r.icon);if(t){return t}const c=ho(r);if(!c){return}return io(c)}function bo(o){const t=r(o.icon,o.iconColor);if(t){return t}const c=ho(o);if(!c){return}return R(c)}function vo(o){const r=t(o.icon,o.iconBackgroundColor);if(r){return r}const c=ho(o);if(!c){return}return w(c)}function fo(r){const t=o(r.icon);if(t){return t}return ho(r)}function ho(o){if(!o){return}return o.filename.split(".").pop()}export{fo as a,bo as b,vo as c,mo as g};
//# sourceMappingURL=file-metadata-9a4780e2.js.map