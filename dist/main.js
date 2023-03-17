"use strict";(self.webpackChunkkanban=self.webpackChunkkanban||[]).push([[179],{426:(n,e,t)=>{t.d(e,{Z:()=>s});var i=t(81),a=t.n(i),o=t(645),r=t.n(o)()(a());r.push([n.id,"@import url(https://fonts.googleapis.com/css2?family=Lato&family=Poppins:wght@500&display=swap);"]),r.push([n.id,"* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  font-family: 'Poppins', sans-serif;\n}\n\nbody {\n  width: 100%;\n  padding: 0.5rem;\n  min-height: 50rem;\n  background-color: #cfba9a;\n}\n\nh3,\nh4 {\n  margin: 0.5rem 0;\n}\n\n.x {\n  display: flex;\n  flex-direction: column;\n  gap: 0.3rem;\n  position: absolute;\n  right: 0;\n  top: 2rem;\n  cursor: pointer;\n}\n\n.topx,\n.bottomx {\n  height: 0.255rem;\n  width: 1.5rem;\n  background-color: #fffdfd;\n}\n\n.topx {\n  transform: rotate(45deg) translateY(0.4rem);\n}\n\n.bottomx {\n  transform: rotate(-45deg) translateY(-0.4rem);\n}\n\n.popup-window {\n  display: block;\n  text-align: center;\n  z-index: 1;\n  padding: 1rem;\n  margin: 2rem;\n  height: 30rem;\n  border: solid 5px #fff;\n  border-radius: 1rem;\n  background-color: rgb(126, 49, 49);\n  color: #fff;\n  width: 80%;\n  min-height: 20%;\n  position: fixed;\n  overflow-y: scroll;\n  right: 2%;\n  top: 200rem;\n  transition: 0.5s;\n}\n\n.show-popup {\n  top: 5rem;\n}\n\nli {\n  list-style: none;\n}\n\n.popup-meal-image {\n  height: 13rem;\n  width: 92%;\n  border: solid 1px #333;\n  margin: 0 auto;\n}\n\n.popup-meal-image img {\n  width: 100%;\n  height: 100%;\n}\n\n.additional-information {\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n}\n\n.additional-information li {\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n  align-items: flex-start;\n}\n\n.right {\n  margin: 0;\n}\n\n.comments-section,\n.comments-section li {\n  display: flex;\n  gap: 0.3rem;\n  justify-content: flex-start;\n  flex-direction: column;\n  align-items: flex-start;\n  width: 100%;\n}\n\n.comments-section li {\n  gap: 0.5rem;\n  flex-direction: row;\n  align-items: center;\n  height: 2rem;\n  border-radius: 0.5rem;\n  padding: 0 0.5rem;\n}\n\n.comments-section {\n  flex-direction: column;\n  background-color: #fff;\n  padding: 0.5rem 0;\n  border-radius: 0.5rem;\n}\n\n.add-comment {\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n  align-items: flex-start;\n}\n\ntextarea {\n  width: 100%;\n  height: 6rem;\n}\n\ninput,\ntextarea {\n  border: none;\n  background-color: #bba27e;\n  padding: 0.5rem;\n  border-radius: 0.3rem;\n}\n\ninput::placeholder,\ntextarea::placeholder {\n  color: #fff;\n}\n\n#comment-btn {\n  padding: 0.5rem 1rem;\n  border-radius: 0.5rem;\n  background-color: brown;\n  border: 4px solid #fff;\n  color: #fff;\n}\n\n@media screen and (min-width: 768px) {\n  .popup-window {\n    margin: 0 20%;\n    padding: 2rem 10%;\n    width: 60%;\n    right: 2%;\n  }\n\n  .additional-information li {\n    flex-direction: row;\n  }\n\n  .right {\n    margin-right: auto;\n  }\n\n  .comments-section {\n    align-items: flex-start;\n    width: 70%;\n  }\n\n  .comments-section li {\n    flex-direction: row;\n  }\n\n  .popup-meal-image {\n    width: 100%;\n    height: 20rem;\n  }\n\n  .x {\n    right: 5%;\n  }\n}\n\nnav {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 10px 20px;\n  background-color: rgb(224, 72, 17);\n  box-shadow: 1px 1px 1px rgb(240, 238, 238);\n}\n\n.logo {\n  font-size: 28px;\n  color: white;\n  text-decoration: none;\n}\n\n.dish_container {\n  width: 100%;\n  display: grid;\n  grid-template-columns: repeat(1, 1fr);\n  gap: 16px;\n  margin-top: 5%;\n  padding-right: 24px;\n  padding-left: 24px;\n}\n\n.logo span {\n  color: rgb(197, 194, 193);\n  font-style: oblique;\n  font-size: 28px;\n}\n\n.nav_links {\n  display: flex;\n  list-style: none;\n  gap: 12px;\n}\n\n.nav_links a {\n  text-decoration: none;\n  font-size: 19px;\n  color: white;\n}\n\n.heading {\n  margin-top: 5%;\n  font-size: 28px;\n  color: rgb(224, 72, 17);\n  text-align: center;\n  box-shadow: 1px 1px 1px rgb(240, 238, 238);\n}\n\n.dish_container {\n  width: 100%;\n  display: grid;\n  grid-template-columns: repeat(1, 1fr);\n  gap: 16px;\n  margin-top: 5%;\n  padding-right: 24px;\n  padding-left: 24px;\n}\n\n.dish_wrapper {\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  background-color: white;\n  gap: 10px;\n  padding: 16px;\n  border-radius: 7px;\n  box-shadow:\n    0 4px  4px  rgba(0, 0, 0, 0.1),\n    0 1px  6px  rgba(0, 0, 0, 0.05),\n    0 8px  8px  rgba(0, 0, 0, 0.1),\n    0 16px 16px rgba(0, 0, 0, 0.1),\n    8px 32px 32px rgba(0, 0, 0, 0.15),\n    8px 64px 64px rgba(0, 0, 0, 0.15);\n}\n\n.dish_image {\n  overflow: hidden;\n}\n\n.dish_image img {\n  width: 100%;\n  transition: 0.3s ease-in-out;\n}\n\n.dish_image img:hover {\n  transform: scale(1.05);\n}\n\n.dish_name {\n  width: 100%;\n  height: 6rem;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  gap: 12px;\n}\n\n.dish_name h2 {\n  font-size: 16px;\n}\n\n.likes {\n  text-align: end;\n}\n\n.commentBtn {\n  width: 100%;\n  padding: 7px 10px;\n  background-color: rgb(224, 72, 17);\n  color: white;\n  border-radius: 7px;\n  border: none;\n}\n\n@media (min-width: 768px) {\n  nav {\n    padding: 24px 100px;\n  }\n\n  .dish_name h2 {\n    font-size: 12.5px;\n  }\n\n  .dish_container {\n    display: grid;\n    width: 100%;\n    display: grid;\n    grid-template-columns: repeat(4, 1fr);\n    gap: 3rem 4%;\n    margin-top: 5%;\n    padding-right: 50px;\n    padding-left: 50px;\n  }\n\n  .heading {\n    margin-top: 2%;\n    font-size: 28px;\n    color: rgb(224, 72, 17);\n    text-align: center;\n  }\n}\n",""]);const s=r},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",i=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),i&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),i&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,i,a,o){"string"==typeof n&&(n=[[null,n,void 0]]);var r={};if(i)for(var s=0;s<this.length;s++){var d=this[s][0];null!=d&&(r[d]=!0)}for(var c=0;c<n.length;c++){var l=[].concat(n[c]);i&&r[l[0]]||(void 0!==o&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=o),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),a&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=a):l[4]="".concat(a)),e.push(l))}},e}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var e=[];function t(n){for(var t=-1,i=0;i<e.length;i++)if(e[i].identifier===n){t=i;break}return t}function i(n,i){for(var o={},r=[],s=0;s<n.length;s++){var d=n[s],c=i.base?d[0]+i.base:d[0],l=o[c]||0,p="".concat(c," ").concat(l);o[c]=l+1;var m=t(p),u={css:d[1],media:d[2],sourceMap:d[3],supports:d[4],layer:d[5]};if(-1!==m)e[m].references++,e[m].updater(u);else{var h=a(u,i);i.byIndex=s,e.splice(s,0,{identifier:p,updater:h,references:1})}r.push(p)}return r}function a(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,a){var o=i(n=n||[],a=a||{});return function(n){n=n||[];for(var r=0;r<o.length;r++){var s=t(o[r]);e[s].references--}for(var d=i(n,a),c=0;c<o.length;c++){var l=t(o[c]);0===e[l].references&&(e[l].updater(),e.splice(l,1))}o=d}}},569:n=>{var e={};n.exports=function(n,t){var i=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(t)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var i="";t.supports&&(i+="@supports (".concat(t.supports,") {")),t.media&&(i+="@media ".concat(t.media," {"));var a=void 0!==t.layer;a&&(i+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),i+=t.css,a&&(i+="}"),t.media&&(i+="}"),t.supports&&(i+="}");var o=t.sourceMap;o&&"undefined"!=typeof btoa&&(i+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),e.styleTagTransform(i,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}},187:(n,e,t)=>{var i=t(379),a=t.n(i),o=t(795),r=t.n(o),s=t(569),d=t.n(s),c=t(565),l=t.n(c),p=t(216),m=t.n(p),u=t(589),h=t.n(u),g=t(426),f={};f.styleTagTransform=h(),f.setAttributes=l(),f.insert=d().bind(null,"head"),f.domAPI=r(),f.insertStyleElement=m(),a()(g.Z,f),g.Z&&g.Z.locals&&g.Z.locals;class x{static popupWindow=document.querySelector("#popup-window");static baseurl="https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/Nvwt41EYsSFQ5YyQ8wBC";static getInvolvementApi=async()=>{const n=`${this.baseurl}CpnE9NNUbu1zv9OE8RDw/likes`,e=fetch(n,{method:"GET"}),t=await e;return await t.json()};static popupId=async n=>{let e="";return(await this.getFoodItems()).forEach((t=>{t.idMeal===n&&(e=t.idMeal)})),e};static commentSection=async n=>(await this.populatePopup(n),document.querySelector("#comments-section"));static populatePopup=async n=>{const e=await this.getFoodItems();let t="";const i=(await this.collectId(n)).filter((n=>""!==n.comment));return e.forEach((e=>{i.forEach((()=>{e.idMeal===n&&(this.popupWindow.id=n,t=`<div class="x" id="${n}">\n  <div class="topx" id="x"></div>\n  <div class="bottomx" id="x"></div>\n  </div>\n  <section class="popup-meal-image">\n  <img src="${e.strMealThumb}" alt="image"> \n  </section>\n  <section class="popup-info">\n  <h3>${e.strMeal}</h3>\n  <ul class="additional-information">\n  <li><div class="right">Fuel:</div><div>Length:</div></li>\n  <li><div class="right">Weight:</div><div>Power:</div></li>\n  </ul><h4>Comments (<span id="number-of-comments">${i.length}\n  \n  </span>)</h4>\n  <ul class="comments-section" id='comments-section'>\n  \n  </ul>\n  <h4>Add a comment</h4>\n  <ul class="add-comment">\n  <li><input type="text" placeholder="Your name" name="user-name" id="nameInput"></li>\n  <li><textarea name="new comment" id="new-comment" cols="30" rows="10" placeholder="your insights"></textarea></li>\n  <li><button id="comment-btn">Comment</button></li>\n  </ul>\n  </section>`)}))})),t};static getComments=async n=>{const e=await this.commentSection(n),t=(await this.collectId(n)).filter((n=>""!==n.comment));let i="",a=0;t.forEach((n=>{a+=1,n.index=a,n.index%2==0?(n.background="#cfba9a",n.color="#333"):n.background="rgb(126, 49, 49)",i+=`<li style="background-color: ${n.background};color:${n.color}"><span id="date">${n.creation_date}</span><span id="name">${n.username}</span><span id="comment">${n.comment}</span></li>`})),e.innerHTML=i};static mealContainer=document.querySelector("#dish_container");static getFoodItems=async()=>{const n=fetch("https://www.themealdb.com/api/json/v1/1/filter.php?c=Beef",{method:"GET"}),e=await n;return(await e.json()).meals};static getMealsId=async()=>{const n=await this.getFoodItems(),e=[];return n.forEach((n=>{e.push(n.idMeal)})),e};static postLikes=async()=>{const n=await this.getMealsId();let e="";for(let t=0;t<n.length;t+=1)setInterval((()=>{e=fetch(`${this.baseurl}/likes`,{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({item_id:`${n[t]}`})}),e.then((n=>n.text()))}),100)};static collectId=async n=>{const e=await this.popupId(n),t=`${this.baseurl}/comments?item_id=${e}`,i=await fetch(t,{method:"GET"});return await i.json()};static addCommentToApi=async n=>{const e=await this.popupId(n),t=`${this.baseurl}/comments`,i=await fetch(t,{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({item_id:`${e}`,username:`${document.querySelector("#nameInput").value}`,comment:`${document.querySelector("#new-comment").value}`})});return await i.text()};static getLikes=async()=>{const n=`${this.baseurl}/likes`,e=await fetch(n,{method:"GET"});return await e.json()};static addLikes=async n=>{const e=`${this.baseurl}/likes`,t=await this.getLikes();let i="";t.forEach((e=>{n===e.item_id&&(i=e.likes)}));const a=n,o=await fetch(e,{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({item_id:`${a}`,likes:`${i+1}`})});return await o.text()};static populateDom=async()=>{let n="";const e=await this.getFoodItems(),t=await this.getLikes();return e.forEach((e=>{t.forEach((n=>{e.idMeal===n.item_id&&(e.likesCount=n.likes)})),n+=`  <div class="dish_wrapper" id=${e.idMeal}>\n              <div class="dish_image">\n                  <img src="${e.strMealThumb}" alt="image"> \n              </div>\n              <div class="dish_name">\n                  <h2>${e.strMeal}</h2>\n                  <i id="love" class="fa-regular fa-heart"></i>\n                  <div class="likes">\n                  <h4>${e.likesCount}</h4>\n                  </div>\n              </div>\n              <button class="commentBtn" id="commentBtn">comments</button>\n           </div>`})),n};static fillDom=async()=>{this.mealContainer.innerHTML=await this.populateDom()}}x.fillDom();let w=!1;const b=document.querySelector("body");window.addEventListener("click",(async n=>{"x"===n.target.id&&(document.querySelector(".popup-window").classList.remove("show-popup"),b.style.overflowY="scroll",x.mealContainer.style.filter="blur(0)",w=!1),"commentBtn"===n.target.id&&!1===w?(x.popupId(n.target.parentNode.id),x.popupWindow.innerHTML=await x.populatePopup(n.target.parentNode.id),x.collectId(n.target.parentNode.id),x.getComments(n.target.parentNode.id),document.querySelector(".popup-window").classList.add("show-popup"),b.style.overflowY="hidden",x.mealContainer.style.filter="blur(6px)",w=!0):"comment-btn"===n.target.id?(await x.addCommentToApi(n.target.parentNode.parentNode.parentNode.parentNode.id),x.collectId(n.target.parentNode.parentNode.parentNode.parentNode.id),x.getComments(n.target.parentNode.parentNode.parentNode.parentNode.id)):"love"===n.target.id&&(await x.addLikes(n.target.parentNode.parentNode.id),x.getLikes(),x.fillDom())}));const v=document.querySelector("#dish_container");(async()=>{const n=await(async()=>{const n=fetch("https://www.themealdb.com/api/json/v1/1/filter.php?c=Beef",{method:"GET"}),e=await n;return(await e.json()).meals})();v.innerHTML=await(async n=>{let e="";return n.forEach((n=>{e+=`  <div class="dish_wrapper">\n              <div class="dish_image">\n                  <img src="${n.strMealThumb}" alt="image"> \n              </div>\n              <div class="dish_name">\n                  <h2>${n.strMeal}</h2>\n                  <i id="love" class="fa-regular fa-heart"></i>\n                  <div class="likes">\n                  <h4 class="likes_wrap">likes</h4>\n              </div>\n              </div>\n              \n              <button class="commentBtn">comments</button>\n           </div>`})),e})(n)})()}},n=>{n(n.s=187)}]);