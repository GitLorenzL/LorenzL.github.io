(self.webpackChunklorenzl_site=self.webpackChunklorenzl_site||[]).push([[161],{7161:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return h}});n(2791);var i=n(1087),r=n(6842),s=n(7892),a=n.n(s),o=n(184),u=function(t){var e=t.data;return(0,o.jsx)("div",{className:"cell-container",children:(0,o.jsxs)("article",{className:"mini-post",children:[(0,o.jsxs)("header",{children:[(0,o.jsx)("h3",{children:(0,o.jsx)("a",{href:e.link,children:e.title})}),(0,o.jsx)("time",{className:"published",children:a()(e.date).format("MMMM, YYYY")})]}),(0,o.jsx)("a",{href:e.link,className:"image",children:(0,o.jsx)("img",{src:"".concat("").concat(e.image),alt:e.title})}),(0,o.jsx)("div",{className:"description",children:(0,o.jsx)("p",{children:e.desc})})]})})},c=[{title:"Hands-Free Is Fine: Gaze-Dominant Object Manipulation in Virtual Reality",subtitle:"My Undergraduate Graduation Project at Beihang University",link:"https://github.com/GitLorenzL/gaze-dominant-manipulation",image:"/images/projects/gaze-dominant.png",date:"2023-07-01",desc:"Efficient object manipulation is critical to VR interaction, and hands-free is a method worth discussing. We introduce a hands-free gaze-dominant manipulating pipeline that significantly outperforms the current state-of-the-art methods. "},{title:"CrossKeys: Text Entry for Virtual Reality Using a Single Controller via Wrist Rotation",subtitle:"A Project with Beihang University's VRLab",link:"https://github.com/GitLorenzL/crosskeys",image:"/images/projects/crosskeys.png",date:"2022-02-01",desc:"Text entry is indispensable; notwithstanding, in virtual reality, an efficient andhandy text entry method is still wanted. Therefore, we propose an innovative one-handed text entry method to achieve a faster speed, higher accuracy, and better user experience."},{title:"Temporal Transformer Networks With Self-Supervision for Action Recognition.",subtitle:"A Project with Beihang University's National Lab of Software Development and Environment",link:"https://arxiv.org/pdf/2112.07338.pdf",image:"/images/projects/ttn.png",date:"2021-12-01",desc:"Cross-Attention ReID, a state-of-the-art approach to realizing pedestrians\u2019 re-identification based on training with large-scale datasets generated by single-channeled IR cameras and three-channeled RGB cameras."}],h=function(){return(0,o.jsx)(r.Z,{title:"Projects",description:"Learn about Zhaoxun's projects.",children:(0,o.jsxs)("article",{className:"post",id:"projects",children:[(0,o.jsx)("header",{children:(0,o.jsxs)("div",{className:"title",children:[(0,o.jsx)("h2",{children:(0,o.jsx)(i.rU,{to:"/projects",children:"Projects"})}),(0,o.jsx)("p",{children:"A selection of projects that I'm not too ashamed of. "})]})}),c.map((function(t){return(0,o.jsx)(u,{data:t},t.title)}))]})})}},7892:function(t){t.exports=function(){"use strict";var t=1e3,e=6e4,n=36e5,i="millisecond",r="second",s="minute",a="hour",o="day",u="week",c="month",h="quarter",d="year",l="date",f="Invalid Date",m=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,$=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,p={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(t){var e=["th","st","nd","rd"],n=t%100;return"["+t+(e[(n-20)%10]||e[n]||e[0])+"]"}},g=function(t,e,n){var i=String(t);return!i||i.length>=e?t:""+Array(e+1-i.length).join(n)+t},y={s:g,z:function(t){var e=-t.utcOffset(),n=Math.abs(e),i=Math.floor(n/60),r=n%60;return(e<=0?"+":"-")+g(i,2,"0")+":"+g(r,2,"0")},m:function t(e,n){if(e.date()<n.date())return-t(n,e);var i=12*(n.year()-e.year())+(n.month()-e.month()),r=e.clone().add(i,c),s=n-r<0,a=e.clone().add(i+(s?-1:1),c);return+(-(i+(n-r)/(s?r-a:a-r))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(t){return{M:c,y:d,w:u,d:o,D:l,h:a,m:s,s:r,ms:i,Q:h}[t]||String(t||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},v="en",M={};M[v]=p;var D=function(t){return t instanceof x},w=function t(e,n,i){var r;if(!e)return v;if("string"==typeof e){var s=e.toLowerCase();M[s]&&(r=s),n&&(M[s]=n,r=s);var a=e.split("-");if(!r&&a.length>1)return t(a[0])}else{var o=e.name;M[o]=e,r=o}return!i&&r&&(v=r),r||!i&&v},S=function(t,e){if(D(t))return t.clone();var n="object"==typeof e?e:{};return n.date=t,n.args=arguments,new x(n)},j=y;j.l=w,j.i=D,j.w=function(t,e){return S(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var x=function(){function p(t){this.$L=w(t.locale,null,!0),this.parse(t)}var g=p.prototype;return g.parse=function(t){this.$d=function(t){var e=t.date,n=t.utc;if(null===e)return new Date(NaN);if(j.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var i=e.match(m);if(i){var r=i[2]-1||0,s=(i[7]||"0").substring(0,3);return n?new Date(Date.UTC(i[1],r,i[3]||1,i[4]||0,i[5]||0,i[6]||0,s)):new Date(i[1],r,i[3]||1,i[4]||0,i[5]||0,i[6]||0,s)}}return new Date(e)}(t),this.$x=t.x||{},this.init()},g.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},g.$utils=function(){return j},g.isValid=function(){return!(this.$d.toString()===f)},g.isSame=function(t,e){var n=S(t);return this.startOf(e)<=n&&n<=this.endOf(e)},g.isAfter=function(t,e){return S(t)<this.startOf(e)},g.isBefore=function(t,e){return this.endOf(e)<S(t)},g.$g=function(t,e,n){return j.u(t)?this[e]:this.set(n,t)},g.unix=function(){return Math.floor(this.valueOf()/1e3)},g.valueOf=function(){return this.$d.getTime()},g.startOf=function(t,e){var n=this,i=!!j.u(e)||e,h=j.p(t),f=function(t,e){var r=j.w(n.$u?Date.UTC(n.$y,e,t):new Date(n.$y,e,t),n);return i?r:r.endOf(o)},m=function(t,e){return j.w(n.toDate()[t].apply(n.toDate("s"),(i?[0,0,0,0]:[23,59,59,999]).slice(e)),n)},$=this.$W,p=this.$M,g=this.$D,y="set"+(this.$u?"UTC":"");switch(h){case d:return i?f(1,0):f(31,11);case c:return i?f(1,p):f(0,p+1);case u:var v=this.$locale().weekStart||0,M=($<v?$+7:$)-v;return f(i?g-M:g+(6-M),p);case o:case l:return m(y+"Hours",0);case a:return m(y+"Minutes",1);case s:return m(y+"Seconds",2);case r:return m(y+"Milliseconds",3);default:return this.clone()}},g.endOf=function(t){return this.startOf(t,!1)},g.$set=function(t,e){var n,u=j.p(t),h="set"+(this.$u?"UTC":""),f=(n={},n[o]=h+"Date",n[l]=h+"Date",n[c]=h+"Month",n[d]=h+"FullYear",n[a]=h+"Hours",n[s]=h+"Minutes",n[r]=h+"Seconds",n[i]=h+"Milliseconds",n)[u],m=u===o?this.$D+(e-this.$W):e;if(u===c||u===d){var $=this.clone().set(l,1);$.$d[f](m),$.init(),this.$d=$.set(l,Math.min(this.$D,$.daysInMonth())).$d}else f&&this.$d[f](m);return this.init(),this},g.set=function(t,e){return this.clone().$set(t,e)},g.get=function(t){return this[j.p(t)]()},g.add=function(i,h){var l,f=this;i=Number(i);var m=j.p(h),$=function(t){var e=S(f);return j.w(e.date(e.date()+Math.round(t*i)),f)};if(m===c)return this.set(c,this.$M+i);if(m===d)return this.set(d,this.$y+i);if(m===o)return $(1);if(m===u)return $(7);var p=(l={},l[s]=e,l[a]=n,l[r]=t,l)[m]||1,g=this.$d.getTime()+i*p;return j.w(g,this)},g.subtract=function(t,e){return this.add(-1*t,e)},g.format=function(t){var e=this,n=this.$locale();if(!this.isValid())return n.invalidDate||f;var i=t||"YYYY-MM-DDTHH:mm:ssZ",r=j.z(this),s=this.$H,a=this.$m,o=this.$M,u=n.weekdays,c=n.months,h=function(t,n,r,s){return t&&(t[n]||t(e,i))||r[n].slice(0,s)},d=function(t){return j.s(s%12||12,t,"0")},l=n.meridiem||function(t,e,n){var i=t<12?"AM":"PM";return n?i.toLowerCase():i},m={YY:String(this.$y).slice(-2),YYYY:this.$y,M:o+1,MM:j.s(o+1,2,"0"),MMM:h(n.monthsShort,o,c,3),MMMM:h(c,o),D:this.$D,DD:j.s(this.$D,2,"0"),d:String(this.$W),dd:h(n.weekdaysMin,this.$W,u,2),ddd:h(n.weekdaysShort,this.$W,u,3),dddd:u[this.$W],H:String(s),HH:j.s(s,2,"0"),h:d(1),hh:d(2),a:l(s,a,!0),A:l(s,a,!1),m:String(a),mm:j.s(a,2,"0"),s:String(this.$s),ss:j.s(this.$s,2,"0"),SSS:j.s(this.$ms,3,"0"),Z:r};return i.replace($,(function(t,e){return e||m[t]||r.replace(":","")}))},g.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},g.diff=function(i,l,f){var m,$=j.p(l),p=S(i),g=(p.utcOffset()-this.utcOffset())*e,y=this-p,v=j.m(this,p);return v=(m={},m[d]=v/12,m[c]=v,m[h]=v/3,m[u]=(y-g)/6048e5,m[o]=(y-g)/864e5,m[a]=y/n,m[s]=y/e,m[r]=y/t,m)[$]||y,f?v:j.a(v)},g.daysInMonth=function(){return this.endOf(c).$D},g.$locale=function(){return M[this.$L]},g.locale=function(t,e){if(!t)return this.$L;var n=this.clone(),i=w(t,e,!0);return i&&(n.$L=i),n},g.clone=function(){return j.w(this.$d,this)},g.toDate=function(){return new Date(this.valueOf())},g.toJSON=function(){return this.isValid()?this.toISOString():null},g.toISOString=function(){return this.$d.toISOString()},g.toString=function(){return this.$d.toUTCString()},p}(),b=x.prototype;return S.prototype=b,[["$ms",i],["$s",r],["$m",s],["$H",a],["$W",o],["$M",c],["$y",d],["$D",l]].forEach((function(t){b[t[1]]=function(e){return this.$g(e,t[0],t[1])}})),S.extend=function(t,e){return t.$i||(t(e,x,S),t.$i=!0),S},S.locale=w,S.isDayjs=D,S.unix=function(t){return S(1e3*t)},S.en=M[v],S.Ls=M,S.p={},S}()}}]);
//# sourceMappingURL=161.5c59f7b9.chunk.js.map