(window.webpackJsonp=window.webpackJsonp||[]).push([[23,15],{335:function(t,e,n){"use strict";n.r(e);n(37),n(12),n(83),n(158);var r=n(15),o=n(16),c=n(19),l=n(20),d=n(6),f=n(2),v=(n(25),n(39),n(5));function _(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=Object(d.a)(t);if(e){var o=Object(d.a)(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return Object(l.a)(this,n)}}var h=function(t,e,n,desc){var r,o=arguments.length,c=o<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(f.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,n,desc);else for(var i=t.length-1;i>=0;i--)(r=t[i])&&(c=(o<3?r(c):o>3?r(e,n,c):r(e,n))||c);return o>3&&c&&Object.defineProperty(e,n,c),c},m=function(t){Object(c.a)(n,t);var e=_(n);function n(){var t;return Object(r.a)(this,n),(t=e.apply(this,arguments)).numberOfPostsPerPage=6,t.currentPage=1,t}return Object(o.a)(n,[{key:"nextPage",value:function(){this.currentPage+=1}},{key:"currentPosts",get:function(){return this.currentPage*this.numberOfPostsPerPage}}]),n}(v.Vue);h([Object(v.Prop)({required:!0})],m.prototype,"data",void 0),h([Object(v.Prop)({required:!1})],m.prototype,"title",void 0);var y=m=h([v.Component],m),C=n(17),component=Object(C.a)(y,(function(){var t=this,e=t._self._c;t._self._setupProxy;return e("section",{staticClass:"sui_blog_posts section section-padding-2"},[e("div",{staticClass:"container"},[e("section",{staticClass:"post_header"},[e("h3",{staticClass:"title text-left"},[t._v("\n        "+t._s(t.title)+"\n      ")])]),t._v(" "),e("section",{staticClass:"post_content"},t._l(t.data.filter((function(e,n){return n<t.currentPosts})),(function(n,r){return e("div",{key:r,staticClass:"_resource_post"},[e("nuxt-link",{staticClass:"post",attrs:{to:"/".concat(n.catRoute[0],"/").concat(n.link)}},[e("div",{staticClass:"post_item"},[e("div",{staticClass:"post_item_img"},[e("img",{attrs:{src:n.image,alt:""}})]),t._v(" "),e("div",{staticClass:"post_item_content"},[e("div",{staticClass:"category_name"},[t._v(t._s(n.categoryName))]),t._v(" "),e("h4",{staticClass:"post_item_title"},[t._v(t._s(n.title))]),t._v(" "),e("div",{staticClass:"post_item_meta"},[n.author?e("span",{staticClass:"post_item_author"},[t._v(t._s(n.author)+" .")]):t._e(),t._v(" "),n.other?e("p",{staticClass:"post_item_author"},[t._v(t._s(n.other)+" .")]):t._e(),t._v(" "),n.date?e("span",{staticClass:"post_item_date"},[t._v(t._s(n.date)+" "+t._s(n.endDate?" - "+new Date(n.endDate).toDateString():""))]):t._e()])])])])],1)})),0),t._v(" "),t.data.length>t.numberOfPostsPerPage*t.currentPage?e("div",{staticClass:"loadMore"},[e("button",{staticClass:"sui-btn btn-fill-white",on:{click:t.nextPage}},[t._v("Load More")])]):t._e()])])}),[],!1,null,null,null);e.default=component.exports},337:function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));n(34),n(58);var r=function(data){return data?data.replace("oembed","iframe").replace("url","src").replace("watch?v=","embed/").replace("oembed","iframe"):data}},429:function(t,e,n){"use strict";n.r(e);n(39);var r=n(14),o=n(15),c=n(16),l=n(19),d=n(20),f=n(6),v=n(2),_=(n(66),n(25),n(12),n(83),n(56),n(125),n(5)),h=n(337);function m(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=Object(f.a)(t);if(e){var o=Object(f.a)(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return Object(d.a)(this,n)}}var y=function(t,e,n,desc){var r,o=arguments.length,c=o<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(v.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,n,desc);else for(var i=t.length-1;i>=0;i--)(r=t[i])&&(c=(o<3?r(c):o>3?r(e,n,c):r(e,n))||c);return o>3&&c&&Object.defineProperty(e,n,c),c},C=function(t){Object(l.a)(n,t);var e=m(n);function n(){return Object(o.a)(this,n),e.apply(this,arguments)}return Object(c.a)(n,[{key:"baseUrl",get:function(){return this.$store.state.core.baseUrl}},{key:"head",value:function(){return{title:"".concat(this.title||"Sui"),meta:[{hid:"description",name:"description",content:this.excerpt},{hid:"og:title",name:"og:title",content:this.title},{hid:"og:description",property:"og:description",content:this.excerpt},{hid:"twitter:title",property:"twitter:title",content:this.title},{hid:"twitter:description",property:"twitter:description",content:this.excerpt},{hid:"twitter:description",property:"twitter:description",content:this.excerpt},{hid:"twitter:image",property:"twitter:image",content:this.metaImage}]}}}]),n}(_.Vue),P=C=y([Object(_.Component)({layout:"other",head:{title:" Sue"},asyncData:function(t){return Object(r.a)(regeneratorRuntime.mark((function e(){var n,r,o,c,l,d,f,v,_,m,y,C,P,O,j,w;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.params,r=t.error,o=t.store,c=t.$axios,e.prev=1,P=o.state.core.cmsAPiEndpoint,e.next=5,c.get("".concat(P,"?postname=").concat(n.slug));case 5:if((O=e.sent.data)&&O.subroute){e.next=8;break}throw new Error("Page not found");case 8:return j=O,w=(null===(l=O.posts)||void 0===l?void 0:l.length)?null===(d=O.posts)||void 0===d?void 0:d.map((function(t){var e,n,r,o,c,l,d,title=t.title,f=t.date,v=t.excerpt,_=t.slug,h=t.thumbnail,m=t.heroImage,y=t.author_source,C=t.subroute,P=t.categories;return{title:title,link:_,excerpt:v,date:f,heroImage:null===(n=null===(e=null==m?void 0:m.data)||void 0===e?void 0:e.attributes)||void 0===n?void 0:n.url,image:null===(o=null===(r=null==h?void 0:h.data)||void 0===r?void 0:r.attributes)||void 0===o?void 0:o.url,subroute:C,categoryName:null===(c=null==P?void 0:P.data)||void 0===c?void 0:c.map((function(t){return t.attributes.CategoryName})).join(", "),catRoute:null===(l=null==P?void 0:P.data)||void 0===l?void 0:l.map((function(t){return t.attributes.subroute})),catId:null===(d=null==P?void 0:P.data)||void 0===d?void 0:d.id,author:y}})):[],e.abrupt("return",{pageContent:Object(h.a)(null==j?void 0:j.content),posts:w,pageHeroImage:null===(_=null===(v=null===(f=null==j?void 0:j.heroImage)||void 0===f?void 0:f.data)||void 0===v?void 0:v.attributes)||void 0===_?void 0:_.url,metaImage:null===(C=null===(y=null===(m=null==j?void 0:j.heroImage)||void 0===m?void 0:m.data)||void 0===y?void 0:y.attributes)||void 0===C?void 0:C.url,excerpt:(null==j?void 0:j.excerpt)||(null==j?void 0:j.title),title:null==j?void 0:j.CategoryName});case 13:return e.prev=13,e.t0=e.catch(1),e.abrupt("return",r({statusCode:404,message:"Page Not Found"}));case 16:case"end":return e.stop()}}),e,null,[[1,13]])})))()}})],C),O=n(17),component=Object(O.a)(P,(function(){var t=this,e=t._self._c;t._self._setupProxy;return e("main",{staticClass:"_sui-container-l sui_news"},[t.pageContent?e("section",{staticClass:"container"},[e("div",{staticClass:"col-md-12"},[e("section",{staticClass:"blog__meta"},[e("span",{staticClass:"post_item_category"},[e("nuxt-link",{attrs:{to:"/resources/"}},[t._v("Resources")])],1)]),t._v(" "),e("h1",{staticClass:"title text-left"},[t._v(t._s(t.title))]),t._v(" "),t.pageHeroImage?e("section",{staticClass:"banner banner-style-2 sui_banner"},[e("img",{staticClass:"hero-image",attrs:{src:t.pageHeroImage,alt:""}})]):t._e(),t._v(" "),e("div",{staticClass:"single-blog",domProps:{innerHTML:t._s(t.pageContent)}})])]):t._e(),t._v(" "),t.posts?e("Posts",{attrs:{data:t.posts,title:"Related Posts"}}):t._e()],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Posts:n(335).default})}}]);