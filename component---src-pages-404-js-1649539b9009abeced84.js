(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{143:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(153),o=a(151);t.default=function(){return r.a.createElement(i.a,null,r.a.createElement(o.a,{title:"404: Not found"}),r.a.createElement("h1",null,"NOT FOUND"),r.a.createElement("p",null,"You just hit a route that doesn't exist... the sadness."))}},147:function(e,t,a){"use strict";a.d(t,"b",function(){return u});var n=a(0),r=a.n(n),i=a(4),o=a.n(i),s=a(33),c=a.n(s);a.d(t,"a",function(){return c.a});a(148);var l=r.a.createContext({}),u=function(e){return r.a.createElement(l.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};u.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},148:function(e,t,a){var n;e.exports=(n=a(150))&&n.default||n},149:function(e){e.exports={data:{site:{siteMetadata:{title:"@yoppinews"}}}}},150:function(e,t,a){"use strict";a.r(t);a(34);var n=a(0),r=a.n(n),i=a(4),o=a.n(i),s=a(55),c=a(2),l=function(e){var t=e.location,a=c.default.getResourcesForPathnameSync(t.pathname);return a?r.a.createElement(s.a,Object.assign({location:t,pageResources:a},a.json)):null};l.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=l},151:function(e,t,a){"use strict";var n=a(152),r=a(0),i=a.n(r),o=a(4),s=a.n(o),c=a(155),l=a.n(c);function u(e){var t=e.description,a=e.lang,r=e.meta,o=e.keywords,s=e.title,c=n.data.site,u=c.siteMetadata.url+"/"+c.siteMetadata.image,d=c.siteMetadata.url+"/"+c.siteMetadata.eyecatch,p=t||c.siteMetadata.description;return i.a.createElement(l.a,{htmlAttributes:{lang:a},title:s,titleTemplate:"%s | "+c.siteMetadata.title,meta:[{name:"description",content:p},{property:"og:title",content:s},{property:"og:description",content:p},{property:"og:type",content:"website"},{property:"og:image",content:u},{property:"og:image:secure_url",content:u},{property:"og:image:width",content:"1200"},{property:"og:image:height",content:"630"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:c.siteMetadata.author},{name:"twitter:title",content:s},{name:"twitter:site",content:c.siteMetadata.author},{name:"twitter:image",content:d},{name:"twitter:description",content:p}].concat(o.length>0?{name:"keywords",content:o.join(", ")}:[]).concat(r)})}u.defaultProps={lang:"en",meta:[],image:""+siteUrl+(image||defaultImage),keywords:[],description:""},u.propTypes={description:s.a.string,lang:s.a.string,meta:s.a.arrayOf(s.a.object),keywords:s.a.arrayOf(s.a.string),title:s.a.string.isRequired,url:s.a.string,image:s.a.string,eyecatch:s.a.string},t.a=u},152:function(e){e.exports={data:{site:{siteMetadata:{title:"@yoppinews",description:"青山吉能さん 非公式ファンページ",author:"@yoppinews",url:"https://yoppinews.github.io",image:"images/yoppinews.png",eyecatch:"images/favicon.jpg"}}}}},153:function(e,t,a){"use strict";var n=a(149),r=a(0),i=a.n(r),o=a(4),s=a.n(o),c=a(147),l=function(e){var t=e.siteTitle;return i.a.createElement("header",{style:{background:"#2b92fe",marginBottom:"1.45rem"}},i.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"1.45rem 1.0875rem"}},i.a.createElement("h1",{style:{margin:0}},i.a.createElement(c.a,{to:"/",style:{color:"white",textDecoration:"none"}},t))))};l.propTypes={siteTitle:s.a.string},l.defaultProps={siteTitle:""};var u=l,d=(a(154),function(e){var t=e.children;return i.a.createElement(c.b,{query:"755544856",render:function(e){return i.a.createElement(i.a.Fragment,null,i.a.createElement(u,{siteTitle:e.site.siteMetadata.title}),i.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"0px 1.0875rem 1.45rem",paddingTop:0}},i.a.createElement("main",null,t),i.a.createElement("footer",null,"© ",(new Date).getFullYear()," yoppinews")))},data:n})});d.propTypes={children:s.a.node.isRequired};t.a=d}}]);
//# sourceMappingURL=component---src-pages-404-js-1649539b9009abeced84.js.map