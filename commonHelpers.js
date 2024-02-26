import{a as g,b as f}from"./assets/vendor-27708577.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))r(n);new MutationObserver(n=>{for(const o of n)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&r(c)}).observe(document,{childList:!0,subtree:!0});function i(n){const o={};return n.integrity&&(o.integrity=n.integrity),n.referrerPolicy&&(o.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?o.credentials="include":n.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(n){if(n.ep)return;n.ep=!0;const o=i(n);fetch(n.href,o)}})();document.getElementById("burger-menu");const l=document.getElementById("themeSwitch");l.addEventListener("change",function(){const e=document.querySelector(".logo-icon use");this.checked?e.setAttribute("href","./img/icons.svg#icon-logo-dark"):e.setAttribute("href","./img/icons.svg#icon-logo-light")});window.addEventListener("DOMContentLoaded",function(){const e=localStorage.getItem("theme");e&&(document.body.classList.add(e),e==="dark-theme"&&(l.checked=!0))});l.addEventListener("change",function(){this.checked?(document.body.classList.add("dark-theme"),document.body.classList.remove("light-theme"),localStorage.setItem("theme","dark-theme")):(document.body.classList.remove("dark-theme"),document.body.classList.add("light-theme"),localStorage.setItem("theme","light-theme"))});const m=document.querySelector("#book-list");function p(e){let t=localStorage.getItem("booksShoppingList");return t?(t=JSON.parse(t),t.findIndex(r=>r._id===e._id)):-1}function L(e){let t=localStorage.getItem("booksShoppingList");t?t=JSON.parse(t):t=[],t.findIndex(r=>r._id===e._id)===-1&&(t.push(e),localStorage.setItem("booksShoppingList",JSON.stringify(t)))}function y(e){let t=localStorage.getItem("booksShoppingList");if(!t)return;t=JSON.parse(t);const i=t.findIndex(r=>r._id===e._id);i!==-1&&(t.splice(i,1),localStorage.setItem("booksShoppingList",JSON.stringify(t)))}function S(e){let t,i;const r=document.querySelector("#modal-template"),n=new f.create(r,{onShow:s=>{document.body.classList.add("modal-opened"),t=a=>{a.key==="Escape"&&s.close()},document.addEventListener("keydown",t),i=a=>{document.body.classList.remove("modal-opened"),s.close()},s.element().querySelector(".modal-close").addEventListener("click",i)},onClose:s=>{document.removeEventListener("keydown",t),s.element().querySelector(".modal-close").removeEventListener("click",i)}}),o=n.element();o.querySelector(".book-img").src=e.book_image,o.querySelector(".book-name").innerText=e.title,o.querySelector(".book-author").innerText=e.author,o.querySelector(".book-description").innerText=e.description,o.querySelector(".book-description").innerText=e.description,e.buy_links.forEach(s=>{s.name==="Amazon"?o.querySelector(".book-links-amazon").href=s.url:s.name==="Apple Books"&&(o.querySelector(".book-links-applebook").href=s.url)});const c=o.querySelector(".addToList"),d=o.querySelector(".removeFromList");p(e)>-1&&(c.classList.add("hidden"),d.classList.remove("hidden")),c.addEventListener("click",s=>{s.preventDefault(),L(e),o.querySelector(".removeFromList-info").classList.remove("hidden"),c.classList.add("hidden"),d.classList.remove("hidden")}),d.addEventListener("click",s=>{s.preventDefault(),y(e),o.querySelector(".removeFromList-info").classList.add("hidden"),c.classList.remove("hidden"),d.classList.add("hidden")}),n.show()}async function u(e){try{const{data:t}=await g.get(e);S(t)}catch(t){console.log(t.message)}}m.addEventListener("click",function(e){e.target.classList.contains("js-open-modal")&&(e.preventDefault(),u(e.target.href))});const h=document.getElementById("themeSwitch");window.addEventListener("DOMContentLoaded",function(){const e=localStorage.getItem("theme");e&&(document.body.classList.add(e),e==="dark-theme"&&(h.checked=!0))});h.addEventListener("change",function(){this.checked?(document.body.classList.add("dark-theme"),document.body.classList.remove("light-theme"),localStorage.setItem("theme","dark-theme")):(document.body.classList.remove("dark-theme"),document.body.classList.add("light-theme"),localStorage.setItem("theme","light-theme"),m.addEventListener("click",function(e){e.target.classList.contains("js-open-modal")&&(e.preventDefault(),u(e.target.href))}))});
//# sourceMappingURL=commonHelpers.js.map
