(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{138:function(t,e,n){"use strict";n.r(e);var a=n(0),r=n.n(a),i=n(150),o=n(148);e.default=function(){return r.a.createElement(i.a,null,r.a.createElement(o.a,{title:"404: Not found"}),r.a.createElement("h1",null,"NOT FOUND"),r.a.createElement("p",null,"You just hit a route that doesn't exist... the sadness."))}},143:function(t,e,n){"use strict";n.r(e),n.d(e,"graphql",function(){return f}),n.d(e,"StaticQueryContext",function(){return p}),n.d(e,"StaticQuery",function(){return m});var a=n(0),r=n.n(a),i=n(4),o=n.n(i),s=n(142),u=n.n(s);n.d(e,"Link",function(){return u.a}),n.d(e,"withPrefix",function(){return s.withPrefix}),n.d(e,"navigate",function(){return s.navigate}),n.d(e,"push",function(){return s.push}),n.d(e,"replace",function(){return s.replace}),n.d(e,"navigateTo",function(){return s.navigateTo});var c=n(144),l=n.n(c);n.d(e,"PageRenderer",function(){return l.a});var d=n(32);n.d(e,"parsePath",function(){return d.a});var p=r.a.createContext({}),m=function(t){return r.a.createElement(p.Consumer,null,function(e){return t.data||e[t.query]&&e[t.query].data?(t.render||t.children)(t.data?t.data.data:e[t.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function f(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}m.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},144:function(t,e,n){var a;t.exports=(a=n(146))&&a.default||a},145:function(t){t.exports={data:{site:{siteMetadata:{title:"神風怪盗ジャンヌ(KKJ)"}}}}},146:function(t,e,n){"use strict";n.r(e);n(33);var a=n(0),r=n.n(a),i=n(4),o=n.n(i),s=n(52),u=n(2),c=function(t){var e=t.location,n=u.default.getResourcesForPathnameSync(e.pathname);return r.a.createElement(s.a,Object.assign({location:e,pageResources:n},n.json))};c.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},e.default=c},147:function(t,e,n){},148:function(t,e,n){"use strict";var a=n(149),r=n(0),i=n.n(r),o=n(4),s=n.n(o),u=n(151),c=n.n(u),l=n(143);function d(t){var e=t.description,n=t.lang,r=t.meta,o=t.keywords,s=t.title;return i.a.createElement(l.StaticQuery,{query:p,render:function(t){var a=e||t.site.siteMetadata.description;return i.a.createElement(c.a,{htmlAttributes:{lang:n},title:s,titleTemplate:"%s | "+t.site.siteMetadata.title,meta:[{name:"description",content:a},{property:"og:title",content:s},{property:"og:description",content:a},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:t.site.siteMetadata.author},{name:"twitter:title",content:s},{name:"twitter:description",content:a}].concat(o.length>0?{name:"keywords",content:o.join(", ")}:[]).concat(r)})},data:a})}d.defaultProps={lang:"en",meta:[],keywords:[]},d.propTypes={description:s.a.string,lang:s.a.string,meta:s.a.array,keywords:s.a.arrayOf(s.a.string),title:s.a.string.isRequired},e.a=d;var p="1025518380"},149:function(t){t.exports={data:{site:{siteMetadata:{title:"神風怪盗ジャンヌ(KKJ)",description:"Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.",author:"@gatsbyjs"}}}}},150:function(t,e,n){"use strict";var a=n(145),r=n(0),i=n.n(r),o=n(4),s=n.n(o),u=n(143),c=function(t){var e=t.siteTitle;return i.a.createElement("div",{style:{background:"rebeccapurple",marginBottom:"1.45rem"}},i.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"1.45rem 1.0875rem"}},i.a.createElement("h1",{style:{margin:0}},i.a.createElement(u.Link,{to:"/",style:{color:"white",textDecoration:"none"}},e))))};c.propTypes={siteTitle:s.a.string},c.defaultProps={siteTitle:""};var l=c,d=(n(147),function(t){var e=t.children;return i.a.createElement(u.StaticQuery,{query:"755544856",render:function(t){return i.a.createElement(i.a.Fragment,null,i.a.createElement(l,{siteTitle:t.site.siteMetadata.title}),i.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"0px 1.0875rem 1.45rem",paddingTop:0}},e,i.a.createElement("footer",null,"© ",(new Date).getFullYear(),", Built by MMJ")))},data:a})});d.propTypes={children:s.a.node.isRequired};e.a=d}}]);
//# sourceMappingURL=component---src-pages-404-js-dbd8579261d1829472a3.js.map