(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{141:function(e,t,a){"use strict";a.r(t);var r=a(0),i=a.n(r),n=a(143),s=a(150),o=a(162),l=a(163),d=a.n(l),c=function(){return i.a.createElement(n.StaticQuery,{query:"2102986851",render:function(e){return i.a.createElement(d.a,{fluid:e.placeholderImage.childImageSharp.fluid})},data:o})},u=a(148);t.default=function(){return i.a.createElement(s.a,null,i.a.createElement(u.a,{title:"Home",keywords:["gatsby","application","react"]}),i.a.createElement("p",null,"Notes on Latex"),i.a.createElement("p",null," Download TextStudio from ",i.a.createElement("a",{href:"https://www.texstudio.org/"}," here ")),i.a.createElement(c,null),i.a.createElement("div",null,"Examples",i.a.createElement("ol",null,i.a.createElement("li",null,i.a.createElement("a",{href:"https://gist.github.com/jeffshadap/48b0ea69f5d133e10ec5d89fed6b3338"}," Simple Title, Author ")),i.a.createElement("li",null,i.a.createElement("a",{href:"https://gist.github.com/jeffshadap/9d28ba7704b7420f94bea34cb3ab7b37"},"Abstract, Sections")))),i.a.createElement(n.Link,{to:"/page-2/"},"Go to page 2"))}},143:function(e,t,a){"use strict";a.r(t),a.d(t,"graphql",function(){return h}),a.d(t,"StaticQueryContext",function(){return f}),a.d(t,"StaticQuery",function(){return p});var r=a(0),i=a.n(r),n=a(4),s=a.n(n),o=a(142),l=a.n(o);a.d(t,"Link",function(){return l.a}),a.d(t,"withPrefix",function(){return o.withPrefix}),a.d(t,"navigate",function(){return o.navigate}),a.d(t,"push",function(){return o.push}),a.d(t,"replace",function(){return o.replace}),a.d(t,"navigateTo",function(){return o.navigateTo});var d=a(144),c=a.n(d);a.d(t,"PageRenderer",function(){return c.a});var u=a(32);a.d(t,"parsePath",function(){return u.a});var f=i.a.createContext({}),p=function(e){return i.a.createElement(f.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):i.a.createElement("div",null,"Loading (StaticQuery)")})};function h(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}p.propTypes={data:s.a.object,query:s.a.string.isRequired,render:s.a.func,children:s.a.func}},144:function(e,t,a){var r;e.exports=(r=a(146))&&r.default||r},145:function(e){e.exports={data:{site:{siteMetadata:{title:"神風怪盗ジャンヌ(KKJ)"}}}}},146:function(e,t,a){"use strict";a.r(t);a(33);var r=a(0),i=a.n(r),n=a(4),s=a.n(n),o=a(52),l=a(2),d=function(e){var t=e.location,a=l.default.getResourcesForPathnameSync(t.pathname);return i.a.createElement(o.a,Object.assign({location:t,pageResources:a},a.json))};d.propTypes={location:s.a.shape({pathname:s.a.string.isRequired}).isRequired},t.default=d},147:function(e,t,a){},148:function(e,t,a){"use strict";var r=a(149),i=a(0),n=a.n(i),s=a(4),o=a.n(s),l=a(151),d=a.n(l),c=a(143);function u(e){var t=e.description,a=e.lang,i=e.meta,s=e.keywords,o=e.title;return n.a.createElement(c.StaticQuery,{query:f,render:function(e){var r=t||e.site.siteMetadata.description;return n.a.createElement(d.a,{htmlAttributes:{lang:a},title:o,titleTemplate:"%s | "+e.site.siteMetadata.title,meta:[{name:"description",content:r},{property:"og:title",content:o},{property:"og:description",content:r},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:e.site.siteMetadata.author},{name:"twitter:title",content:o},{name:"twitter:description",content:r}].concat(s.length>0?{name:"keywords",content:s.join(", ")}:[]).concat(i)})},data:r})}u.defaultProps={lang:"en",meta:[],keywords:[]},u.propTypes={description:o.a.string,lang:o.a.string,meta:o.a.array,keywords:o.a.arrayOf(o.a.string),title:o.a.string.isRequired},t.a=u;var f="1025518380"},149:function(e){e.exports={data:{site:{siteMetadata:{title:"神風怪盗ジャンヌ(KKJ)",description:"Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.",author:"@gatsbyjs"}}}}},150:function(e,t,a){"use strict";var r=a(145),i=a(0),n=a.n(i),s=a(4),o=a.n(s),l=a(143),d=function(e){var t=e.siteTitle;return n.a.createElement("div",{style:{background:"rebeccapurple",marginBottom:"1.45rem"}},n.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"1.45rem 1.0875rem"}},n.a.createElement("h1",{style:{margin:0}},n.a.createElement(l.Link,{to:"/",style:{color:"white",textDecoration:"none"}},t))))};d.propTypes={siteTitle:o.a.string},d.defaultProps={siteTitle:""};var c=d,u=(a(147),function(e){var t=e.children;return n.a.createElement(l.StaticQuery,{query:"755544856",render:function(e){return n.a.createElement(n.a.Fragment,null,n.a.createElement(c,{siteTitle:e.site.siteMetadata.title}),n.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"0px 1.0875rem 1.45rem",paddingTop:0}},t,n.a.createElement("footer",null,"© ",(new Date).getFullYear(),", Built by MMJ")))},data:r})});u.propTypes={children:o.a.node.isRequired};t.a=u},162:function(e){e.exports={data:{placeholderImage:{childImageSharp:{fluid:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAGCAIAAABM9SnKAAAACXBIWXMAAAsSAAALEgHS3X78AAAA/UlEQVQY032QzXKEIBCEff9Hy21rV3cl6AL+wQCKim7ECMGkcskhXdNdc5lvqjq5ZjmhrEKIUYIxVlq3SoCWvTHjOA7G2Nnu++7c5qK3M6PWj1WvJrnkD4RLnqfDAAKgROhxe8tw/ixp13JCK1bXIBWAklJzDjHjNIKnLU5wSZXUuGTz/AohOGtV2/YaRtGLFngnlVLLEh/6bTt+8lw2f7iQ1E19HJbR+5PcXzO4aYpUMym3Lof/DMEH78Nf+W/7pKrYYqmEm1RZL+L9JEB0k6H1wPl4hP+UNE1zYn7xsRshhN0XDkN2uZeoYEVBiqIjhMRScfFECKdZTRl9x19b/08NXeh9jwAAAABJRU5ErkJggg==",aspectRatio:3.46,src:"/kkj/static/f2ab056b373ee0331fa52c411627296e/f2687/compile.png",srcSet:"/kkj/static/f2ab056b373ee0331fa52c411627296e/72352/compile.png 200w,\n/kkj/static/f2ab056b373ee0331fa52c411627296e/34595/compile.png 400w,\n/kkj/static/f2ab056b373ee0331fa52c411627296e/f2687/compile.png 800w,\n/kkj/static/f2ab056b373ee0331fa52c411627296e/c0f0f/compile.png 865w",sizes:"(max-width: 800px) 100vw, 800px"}}}}}},163:function(e,t,a){"use strict";var r=a(8);t.__esModule=!0,t.default=void 0;var i,n=r(a(7)),s=r(a(51)),o=r(a(152)),l=r(a(153)),d=r(a(0)),c=r(a(4)),u=function(e){var t=(0,l.default)({},e);return t.resolutions&&(t.fixed=t.resolutions,delete t.resolutions),t.sizes&&(t.fluid=t.sizes,delete t.sizes),t},f={},p=function(e){var t=u(e),a=t.fluid?t.fluid.src:t.fixed.src;return f[a]||!1},h=[];var m=function(e,t){(void 0===i&&"undefined"!=typeof window&&window.IntersectionObserver&&(i=new window.IntersectionObserver(function(e){e.forEach(function(e){h.forEach(function(t){t[0]===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(i.unobserve(t[0]),t[1]())})})},{rootMargin:"200px"})),i).observe(e),h.push([e,t])},g=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",r=e.srcSetWebp?"<source type='image/webp' srcSet=\""+e.srcSetWebp+'" '+a+"/>":"",i=e.srcSet?'<source srcSet="'+e.srcSet+'" '+a+"/>":"",n=e.title?'title="'+e.title+'" ':"",s=e.alt?'alt="'+e.alt+'" ':'alt="" ',o=e.width?'width="'+e.width+'" ':"",l=e.height?'height="'+e.height+'" ':"",d=e.opacity?e.opacity:"1";return"<picture>"+r+i+"<img "+o+l+t+s+n+'style="position:absolute;top:0;left:0;transition:opacity 0.5s;transition-delay:'+(e.transitionDelay?e.transitionDelay:"0.5s")+";opacity:"+d+';width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},y=d.default.forwardRef(function(e,t){var a=e.style,r=e.onLoad,i=e.onError,n=(0,o.default)(e,["style","onLoad","onError"]);return d.default.createElement("img",(0,l.default)({},n,{onLoad:r,onError:i,ref:t,style:(0,l.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},a)}))});y.propTypes={style:c.default.object,onError:c.default.func,onLoad:c.default.func};var b=function(e){function t(t){var a;a=e.call(this,t)||this;var r=!0,i=!1,n=t.fadeIn,o=p(t);!o&&"undefined"!=typeof window&&window.IntersectionObserver&&(r=!1,i=!0),"undefined"==typeof window&&(r=!1),t.critical&&(r=!0,i=!1);var l=!(a.props.critical&&!a.props.fadeIn);return a.state={isVisible:r,imgLoaded:!1,IOSupported:i,fadeIn:n,hasNoScript:l,seenBefore:o},a.imageRef=d.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,s.default)((0,s.default)(a))),a.handleRef=a.handleRef.bind((0,s.default)((0,s.default)(a))),a}(0,n.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:p(this.props)}),this.props.critical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.handleRef=function(e){var t=this;this.state.IOSupported&&e&&m(e,function(){t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:p(t.props)}),t.setState({isVisible:!0,imgLoaded:!1})})},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=u(e),a=t.fluid?t.fluid.src:t.fixed.src,f[a]=!0,this.setState({imgLoaded:!0}),this.state.seenBefore&&this.setState({fadeIn:!1}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=u(this.props),t=e.title,a=e.alt,r=e.className,i=e.style,n=void 0===i?{}:i,s=e.imgStyle,o=void 0===s?{}:s,c=e.placeholderStyle,f=void 0===c?{}:c,p=e.placeholderClassName,h=e.fluid,m=e.fixed,b=e.backgroundColor,w=e.Tag,E="boolean"==typeof b?"lightgray":b,S=(0,l.default)({opacity:this.state.imgLoaded?0:1,transition:"opacity 0.5s",transitionDelay:this.state.imgLoaded?"0.5s":"0.25s"},o,f),v=(0,l.default)({opacity:this.state.imgLoaded||!1===this.state.fadeIn?1:0,transition:!0===this.state.fadeIn?"opacity 0.5s":"none"},o),L={title:t,alt:this.state.isVisible?"":a,style:S,className:p};if(h){var A=h;return d.default.createElement(w,{className:(r||"")+" gatsby-image-wrapper",style:(0,l.default)({position:"relative",overflow:"hidden"},n),ref:this.handleRef,key:"fluid-"+JSON.stringify(A.srcSet)},d.default.createElement(w,{style:{width:"100%",paddingBottom:100/A.aspectRatio+"%"}}),A.base64&&d.default.createElement(y,(0,l.default)({src:A.base64},L)),A.tracedSVG&&d.default.createElement(y,(0,l.default)({src:A.tracedSVG},L)),E&&d.default.createElement(w,{title:t,style:{backgroundColor:E,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.35s",right:0,left:0}}),this.state.isVisible&&d.default.createElement("picture",null,A.srcSetWebp&&d.default.createElement("source",{type:"image/webp",srcSet:A.srcSetWebp,sizes:A.sizes}),d.default.createElement("source",{srcSet:A.srcSet,sizes:A.sizes}),d.default.createElement(y,{alt:a,title:t,src:A.src,style:v,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError})),this.state.hasNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:g((0,l.default)({alt:a,title:t},A))}}))}if(m){var R=m,k=(0,l.default)({position:"relative",overflow:"hidden",display:"inline-block",width:R.width,height:R.height},n);return"inherit"===n.display&&delete k.display,d.default.createElement(w,{className:(r||"")+" gatsby-image-wrapper",style:k,ref:this.handleRef,key:"fixed-"+JSON.stringify(R.srcSet)},R.base64&&d.default.createElement(y,(0,l.default)({src:R.base64},L)),R.tracedSVG&&d.default.createElement(y,(0,l.default)({src:R.tracedSVG},L)),E&&d.default.createElement(w,{title:t,style:{backgroundColor:E,width:R.width,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.25s",height:R.height}}),this.state.isVisible&&d.default.createElement("picture",null,R.srcSetWebp&&d.default.createElement("source",{type:"image/webp",srcSet:R.srcSetWebp,sizes:R.sizes}),d.default.createElement("source",{srcSet:R.srcSet,sizes:R.sizes}),d.default.createElement(y,{alt:a,title:t,width:R.width,height:R.height,src:R.src,style:v,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError})),this.state.hasNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:g((0,l.default)({alt:a,title:t,width:R.width,height:R.height},R))}}))}return null},t}(d.default.Component);b.defaultProps={critical:!1,fadeIn:!0,alt:"",Tag:"div"};var w=c.default.shape({width:c.default.number.isRequired,height:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string}),E=c.default.shape({aspectRatio:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,sizes:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string});b.propTypes={resolutions:w,sizes:E,fixed:w,fluid:E,fadeIn:c.default.bool,title:c.default.string,alt:c.default.string,className:c.default.oneOfType([c.default.string,c.default.object]),critical:c.default.bool,style:c.default.object,imgStyle:c.default.object,placeholderStyle:c.default.object,placeholderClassName:c.default.string,backgroundColor:c.default.oneOfType([c.default.string,c.default.bool]),onLoad:c.default.func,onError:c.default.func,onStartLoad:c.default.func,Tag:c.default.string};var S=b;t.default=S}}]);
//# sourceMappingURL=component---src-pages-index-js-e91ce68ac0dc06861c54.js.map