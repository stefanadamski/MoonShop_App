(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{47:function(e,t,c){},48:function(e,t,c){},49:function(e,t,c){},62:function(e,t,c){},63:function(e,t,c){},82:function(e,t,c){},83:function(e,t,c){},84:function(e,t,c){},85:function(e,t,c){"use strict";c.r(t);var r=c(1),n=c(0),a=c.n(n),s=c(20),i=c.n(s),o=(c(47),c(24)),l=(c(48),c(10)),d=c(3),u=(c(49),c(6)),j=c.p+"static/media/music.110cf2cb.mp3",p=c(23),b=function(e){e.click;var t=Object(u.c)((function(e){return e.cart})).cartItems,c=Object(p.useAudio)({src:j,loop:!0,volume:.7}),n=c.isPlaying,a=(c.play,c.toggle);return Object(r.jsxs)("nav",{className:"navbar",children:[Object(r.jsx)("div",{className:"navbar_logo",children:Object(r.jsx)("h2",{children:"Moon Shop"})}),Object(r.jsxs)("ul",{className:"navbar_links",children:[Object(r.jsx)("li",{children:Object(r.jsxs)(l.b,{to:"/cart",className:"cart_link",children:[Object(r.jsx)("i",{className:"fas fa-shopping-cart",children:" "}),Object(r.jsxs)("span",{children:["Cart ",Object(r.jsx)("span",{className:"cart_logo_icon",children:t.reduce((function(e,t){return Number(t.qty)+e}),0)})]})]})}),Object(r.jsx)("li",{children:Object(r.jsx)(l.b,{to:"/",className:"cart_link",children:"Tour Shop"})}),Object(r.jsx)("li",{children:Object(r.jsxs)("div",{onClick:a,className:"cart_link cart_music",children:[n?"Pause Ambient":"Play Ambient"," "]})})]})]})},h=(c(62),c(63),function(e){e.imageUrl;var t=e.description,c=e.price,n=e.name,a=e.productId;return Object(r.jsx)("div",{className:"product",children:Object(r.jsxs)("div",{className:"product_info",children:[Object(r.jsx)("p",{className:"info_name",children:n}),Object(r.jsx)("p",{className:"info_description",children:t.substring(0,100)}),Object(r.jsxs)("p",{className:"info_price",children:["$",c]}),Object(r.jsx)(l.b,{to:"/product/".concat(a),className:"info_button",children:"View"})]})})}),m=c(11),O=c.n(m),f=c(18),x="GET_PRODUCTS_REQUEST",g="GET_PRODUCTS_SUCCESS",v="GET_PRODUCTS_FAIL",y="GET_PRODUCT_DETAILS_REQUEST",_="GET_PRODUCT_DETAILS_SUCCESS",S="GET_PRODUCT_DETAILS_FAIL",N="GET_PRODUCT_DETAILS_RESET",I=c(19),k=c.n(I),T=function(){var e=Object(u.b)(),t=Object(u.c)((function(e){return e.getProducts})),c=t.products,a=t.loading,s=t.error;return Object(n.useEffect)((function(){e(function(){var e=Object(f.a)(O.a.mark((function e(t){var c,r;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t({type:x}),e.next=4,k.a.get("/api/products");case 4:c=e.sent,r=c.data,t({type:g,payload:r}),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),t({type:v,payload:e.t0.response&&e.t0.response.data.message?e.t0.response.data.message:e.t0.message});case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}())}),[e]),Object(r.jsx)("div",{className:"journey_screen",children:Object(r.jsx)("div",{className:"journey_deals",children:a?Object(r.jsx)("h2",{children:"Loading..."}):s?Object(r.jsx)("h2",{children:s}):c.map((function(e){return Object(r.jsx)(h,{name:e.name,description:e.description,price:e.price,imageUrl:e.imageUrl,productId:e._id},e._id)}))})})},E=c(15),C=(c(82),"ADD_TO_CART"),w="REMOVE_FROM_CART",D=function(e,t){return function(){var c=Object(f.a)(O.a.mark((function c(r,n){var a,s;return O.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,k.a.get("/api/products/".concat(e));case 2:a=c.sent,s=a.data,r({type:C,payload:{product:s._id,name:s.name,imageUrl:s.imageUrl,price:s.price,countInStock:s.countInStock,qty:t}}),localStorage.setItem("cart",JSON.stringify(n().cart.cartItems));case 6:case"end":return c.stop()}}),c)})));return function(e,t){return c.apply(this,arguments)}}()},P=function(e){var t=e.match,c=e.history,a=Object(n.useState)(1),s=Object(o.a)(a,2),i=s[0],l=s[1],d=Object(u.b)(),j=Object(u.c)((function(e){return e.getProductDetails})),p=j.loading,b=j.error,h=j.product;Object(n.useEffect)((function(){var e;h&&t.params.id!==h._id&&d((e=t.params.id,function(){var t=Object(f.a)(O.a.mark((function t(c){var r,n;return O.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,c({type:y}),t.next=4,k.a.get("/api/products/".concat(e));case 4:r=t.sent,n=r.data,c({type:_,payload:n}),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(0),c({type:S,payload:t.t0.response&&t.t0.response.data.message?t.t0.response.data.message:t.t0.message});case 12:case"end":return t.stop()}}),t,null,[[0,9]])})));return function(e){return t.apply(this,arguments)}}()))}),[d,t,h]);return Object(r.jsx)("div",{className:"product_screen",children:p?Object(r.jsx)("h2",{children:"Loading..."}):b?Object(r.jsx)("h2",{children:b}):Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("div",{className:"product_screen_left",children:Object(r.jsxs)("div",{className:"left_info",children:[Object(r.jsx)("p",{className:"left_name",children:h.name}),Object(r.jsxs)("p",{style:{color:"black"},children:[" $",h.price]}),Object(r.jsxs)("p",{children:[" ",h.description]}),Object(r.jsx)("p",{style:{color:"black"},children:"The Moon is Earth's only natural satellite. At about one-quarter the diameter of Earth (comparable to the width of Australia), it is the largest natural satellite in the Solar System relative to the size of a major planet,[f] the fifth largest satellite in the Solar System overall, and is larger than any known dwarf planet. The Moon is a planetary-mass object that formed a differentiated rocky body, making it a satellite planet under the geophysical definitions of the term. It lacks any significant atmosphere, hydrosphere, or magnetic field. Its surface gravity is about one-sixth of Earth's."})]})}),Object(r.jsx)("div",{className:"product_screen_right",children:Object(r.jsxs)("div",{className:"right_info",children:[Object(r.jsxs)("p",{children:["Price:",Object(r.jsxs)("span",{children:["$",h.price]})]}),Object(r.jsxs)("p",{children:["Status:",Object(r.jsx)("span",{children:h.countInStock>0?"Tickets available":"Sold out"})]}),Object(r.jsxs)("p",{children:["Qty",Object(r.jsx)("select",{value:i,onChange:function(e){return l(e.target.value)},children:Object(E.a)(Array(h.countInStock).keys()).map((function(e){return Object(r.jsx)("option",{value:e+1,children:e+1},e+1)}))})]}),Object(r.jsx)("p",{children:Object(r.jsx)("button",{type:"button",onClick:function(){d(D(h._id,i)),c.push("/cart")},children:"Book the trip!"})})]})})]})})},A=(c(83),c(84),function(e){var t=e.item,c=e.qtyChangeHandler,n=e.removeHandler;return Object(r.jsxs)("div",{className:"cart_item",children:[Object(r.jsx)(l.b,{to:"/product/".concat(t.product),className:"cart_item_name",children:Object(r.jsx)("p",{children:t.name})}),Object(r.jsxs)("p",{className:"cart_item_price",children:["$",t.price]}),Object(r.jsx)("select",{value:t.qty,onChange:function(e){return c(t.product,e.target.value)},className:"cart_item_select",children:Object(E.a)(Array(t.countInStock).keys()).map((function(e){return Object(r.jsx)("option",{value:e+1,children:e+1},e+1)}))}),Object(r.jsx)("button",{className:"cart_item_delete",onClick:function(){return n(t.product)},children:" Delete"})]})}),U=function(){var e=Object(u.b)(),t=Object(u.c)((function(e){return e.cart})).cartItems;Object(n.useEffect)((function(){}),[]);var c=function(t,c){e(D(t,c))},a=function(t){e(function(e){return function(t,c){t({type:w,payload:e}),localStorage.setItem("cart",JSON.stringify(c().cart.cartItems))}}(t))};return Object(r.jsx)(r.Fragment,{children:Object(r.jsxs)("div",{className:"cart_screen",children:[Object(r.jsxs)("div",{className:"cart_screen_left",children:[Object(r.jsx)("h2",{children:"Shopping Cart"}),0===t.length?Object(r.jsxs)("div",{style:{color:"grey"},children:["Your Cart Is Empty ",Object(r.jsx)(l.b,{to:"/",style:{color:"white",textDecoration:"none"},children:"Go Back"})]}):t.map((function(e){return Object(r.jsx)(A,{item:e,qtyChangeHandler:c,removeHandler:a},e.product)}))]}),Object(r.jsxs)("div",{className:"cart_screen_right",children:[Object(r.jsxs)("div",{className:"cart_screen_info",children:[Object(r.jsxs)("p",{children:["Subtotal (",t.reduce((function(e,t){return Number(t.qty)+e}),0),") items"]}),Object(r.jsxs)("p",{children:["$",t.reduce((function(e,t){return e+t.price*t.qty}),0).toFixed(2)]})]}),Object(r.jsx)("div",{children:Object(r.jsx)("button",{children:"Proceed To Checkout"})})]})]})})},R=c.p+"static/media/MoonVideo.8cd4294c.mp4";var q=function(){var e=Object(n.useState)(!1),t=Object(o.a)(e,2),c=(t[0],t[1]),a=Object(p.useAudio)({src:j,loop:!0,volume:.7});return a.isPlaying,a.play,a.toggle,Object(r.jsxs)(l.a,{children:[Object(r.jsx)("video",{id:"background-video",loop:!0,autoPlay:!0,muted:!0,style:{position:"absolute",width:"100%",left:"50%",top:"50%",height:"100%",objectFit:"cover",transform:"translate(-50%, -50%)",zIndex:"-1"},children:Object(r.jsx)("source",{src:R,type:"video/mp4"})}),Object(r.jsx)(b,{click:function(){return c(!0)}}),Object(r.jsx)("main",{className:"app",children:Object(r.jsxs)(d.c,{children:[Object(r.jsx)(d.a,{exact:!0,path:"/",component:T}),Object(r.jsx)(d.a,{exact:!0,path:"/product/:id",component:P}),Object(r.jsx)(d.a,{exact:!0,path:"/cart",component:U})]})})]})},G=c(12),L=c(40),M=c(41),F=c(13),J={cartItems:[]},$=Object(G.combineReducers)({cart:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:J,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case C:var c=t.payload,r=e.cartItems.find((function(e){return e.product===c.product}));return r?Object(F.a)(Object(F.a)({},e),{},{cartItems:e.cartItems.map((function(e){return e.product===r.product?c:e}))}):Object(F.a)(Object(F.a)({},e),{},{cartItems:[].concat(Object(E.a)(e.cartItems),[c])});case w:return Object(F.a)(Object(F.a)({},e),{},{cartItems:e.cartItems.filter((function(e){return e.product!==t.payload}))});default:return e}},getProducts:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{products:[]},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case x:return{loading:!0,products:[]};case g:return{products:t.payload,loading:!1};case v:return{loading:!1,error:t.payload};default:return e}},getProductDetails:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{product:{}},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case y:return{loading:!0};case _:return{loading:!1,product:t.payload};case S:return{loading:!1,error:t.payload};case N:return{product:{}};default:return e}}}),H=[L.a],B={cart:{cartItems:localStorage.getItem("cart")?JSON.parse(localStorage.getItem("cart")):[]}},Q=Object(G.createStore)($,B,Object(M.composeWithDevTools)(G.applyMiddleware.apply(void 0,H)));i.a.render(Object(r.jsx)(u.a,{store:Q,children:Object(r.jsx)(a.a.StrictMode,{children:Object(r.jsx)(q,{})})}),document.getElementById("root"))}},[[85,1,2]]]);
//# sourceMappingURL=main.56997f2d.chunk.js.map