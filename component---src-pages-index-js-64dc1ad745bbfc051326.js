(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{146:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(4),o=a.n(i),c=function(e){var t=e.width,a=e.height;return r.a.createElement("iframe",{title:"yoppinews calendar",src:"https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%23FFFFFF&src=9mhlol8f4i4efotor5p2nb982s%40group.calendar.google.com&color=%23853104&src=g684on5b34rr9agv586jih11l4%40group.calendar.google.com&color=%236B3304&ctz=Asia%2FTokyo",style:{borderWidth:0},width:t,height:a})};c.propTypes={width:o.a.string,height:o.a.string},c.defaultProps={width:"100%",height:"600"};var s=c,l=a(153),p=a(151),u=function(){return r.a.createElement("a",{href:"https://twitter.com/share?ref_src=twsrc%5Etfw",className:"twitter-share-button","data-show-count":"false"},"Tweet")};a.d(t,"query",function(){return d});var d="1097489062";t.default=function(e){e.props;var t=e.data;return r.a.createElement(l.a,null,r.a.createElement(p.a,{title:"yoppinews",keywords:["yoppinews","青山吉能"]}),r.a.createElement("p",null,r.a.createElement(u,null)),r.a.createElement("p",null,r.a.createElement("a",{href:"https://twitter.com/yoppinews",target:"blank"},t.site.siteMetadata.title)," は 81 プロデュース所属の声優・青山吉能さん関連の情報を集約する非公式の twitter アカウントです"),r.a.createElement(s,null),r.a.createElement("ul",null,r.a.createElement("li",null,"情報の不足・誤りについては ",r.a.createElement("a",{href:"https://twitter.com/yoppinews"},"Twitter DM")," にてご連絡いただけますと幸いです"),r.a.createElement("li",null,"公式な情報ソースのないものについては一部記載を見送っているものがある場合があります")),r.a.createElement("p",null,r.a.createElement("a",{className:"twitter-timeline",href:"https://twitter.com/yoppinews?ref_src=twsrc%5Etfw"},"Tweets by yoppinews")))}},147:function(e,t,a){"use strict";a.d(t,"b",function(){return p});var n=a(0),r=a.n(n),i=a(4),o=a.n(i),c=a(33),s=a.n(c);a.d(t,"a",function(){return s.a});a(148);var l=r.a.createContext({}),p=function(e){return r.a.createElement(l.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};p.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},148:function(e,t,a){var n;e.exports=(n=a(150))&&n.default||n},149:function(e){e.exports={data:{site:{siteMetadata:{title:"@yoppinews"}}}}},150:function(e,t,a){"use strict";a.r(t);a(34);var n=a(0),r=a.n(n),i=a(4),o=a.n(i),c=a(55),s=a(2),l=function(e){var t=e.location,a=s.default.getResourcesForPathnameSync(t.pathname);return a?r.a.createElement(c.a,Object.assign({location:t,pageResources:a},a.json)):null};l.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=l},151:function(e,t,a){"use strict";var n=a(152),r=a(0),i=a.n(r),o=a(4),c=a.n(o),s=a(155),l=a.n(s);function p(e){var t=e.description,a=e.lang,r=e.meta,o=e.keywords,c=e.title,s=n.data.site,p=s.siteMetadata.url+"/"+s.siteMetadata.image,u=s.siteMetadata.url+"/"+s.siteMetadata.eyecatch,d=t||s.siteMetadata.description;return i.a.createElement(l.a,{htmlAttributes:{lang:a},title:c,titleTemplate:"%s | "+s.siteMetadata.title,meta:[{name:"description",content:d},{property:"og:title",content:c},{property:"og:description",content:d},{property:"og:type",content:"website"},{property:"og:image",content:p},{property:"og:image:secure_url",content:p},{property:"og:image:width",content:"1200"},{property:"og:image:height",content:"630"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:s.siteMetadata.author},{name:"twitter:title",content:c},{name:"twitter:site",content:s.siteMetadata.author},{name:"twitter:image",content:u},{name:"twitter:description",content:d}].concat(o.length>0?{name:"keywords",content:o.join(", ")}:[]).concat(r)})}p.defaultProps={lang:"en",meta:[],image:""+siteUrl+(image||defaultImage),keywords:[],description:""},p.propTypes={description:c.a.string,lang:c.a.string,meta:c.a.arrayOf(c.a.object),keywords:c.a.arrayOf(c.a.string),title:c.a.string.isRequired,url:c.a.string,image:c.a.string,eyecatch:c.a.string},t.a=p},152:function(e){e.exports={data:{site:{siteMetadata:{title:"@yoppinews",description:"青山吉能さん 非公式ファンページ",author:"@yoppinews",url:"https://yoppinews.github.io",image:"images/yoppinews.png",eyecatch:"images/favicon.jpg"}}}}},153:function(e,t,a){"use strict";var n=a(149),r=a(0),i=a.n(r),o=a(4),c=a.n(o),s=a(147),l=function(e){var t=e.siteTitle;return i.a.createElement("header",{style:{background:"#2b92fe",marginBottom:"1.45rem"}},i.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"1.45rem 1.0875rem"}},i.a.createElement("h1",{style:{margin:0}},i.a.createElement(s.a,{to:"/",style:{color:"white",textDecoration:"none"}},t))))};l.propTypes={siteTitle:c.a.string},l.defaultProps={siteTitle:""};var p=l,u=(a(154),function(e){var t=e.children;return i.a.createElement(s.b,{query:"755544856",render:function(e){return i.a.createElement(i.a.Fragment,null,i.a.createElement(p,{siteTitle:e.site.siteMetadata.title}),i.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"0px 1.0875rem 1.45rem",paddingTop:0}},i.a.createElement("main",null,t),i.a.createElement("footer",null,"© ",(new Date).getFullYear()," yoppinews")))},data:n})});u.propTypes={children:c.a.node.isRequired};t.a=u}}]);
//# sourceMappingURL=component---src-pages-index-js-64dc1ad745bbfc051326.js.map