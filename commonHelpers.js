import{a,b as m}from"./assets/vendor-27708577.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))i(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const c of s.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function r(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerPolicy&&(s.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?s.credentials="include":o.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(o){if(o.ep)return;o.ep=!0;const s=r(o);fetch(o.href,s)}})();const g=document.querySelector("#book-list");function f(t){let e=localStorage.getItem("booksShoppingList");return e?(e=JSON.parse(e),e.findIndex(i=>i._id===t._id)):-1}function y(t){let e=localStorage.getItem("booksShoppingList");e?e=JSON.parse(e):e=[],e.findIndex(i=>i._id===t._id)===-1&&(e.push(t),localStorage.setItem("booksShoppingList",JSON.stringify(e)))}function k(t){let e=localStorage.getItem("booksShoppingList");if(!e)return;e=JSON.parse(e);const r=e.findIndex(i=>i._id===t._id);r!==-1&&(e.splice(r,1),localStorage.setItem("booksShoppingList",JSON.stringify(e)))}function L(t){let e,r;const i=document.querySelector("#modal-template"),o=new m.create(i,{onShow:n=>{document.body.classList.add("modal-opened"),e=d=>{d.key==="Escape"&&n.close()},document.addEventListener("keydown",e),r=d=>{document.body.classList.remove("modal-opened"),n.close()},n.element().querySelector(".modal-close").addEventListener("click",r)},onClose:n=>{document.removeEventListener("keydown",e),n.element().querySelector(".modal-close").removeEventListener("click",r)}}),s=o.element();s.querySelector(".book-img").src=t.book_image,s.querySelector(".book-name").innerText=t.title,s.querySelector(".book-author").innerText=t.author,s.querySelector(".book-description").innerText=t.description,s.querySelector(".book-description").innerText=t.description,t.buy_links.forEach(n=>{n.name==="Amazon"?s.querySelector(".book-links-amazon").href=n.url:n.name==="Apple Books"&&(s.querySelector(".book-links-applebook").href=n.url)});const c=s.querySelector(".addToList"),l=s.querySelector(".removeFromList");f(t)>-1&&(c.classList.add("hidden"),l.classList.remove("hidden")),c.addEventListener("click",n=>{n.preventDefault(),y(t),s.querySelector(".removeFromList-info").classList.remove("hidden"),c.classList.add("hidden"),l.classList.remove("hidden")}),l.addEventListener("click",n=>{n.preventDefault(),k(t),s.querySelector(".removeFromList-info").classList.add("hidden"),c.classList.remove("hidden"),l.classList.add("hidden")}),o.show()}async function b(t){try{const{data:e}=await a.get(t);L(e)}catch(e){console.log(e.message)}}g.addEventListener("click",function(t){t.target.classList.contains("js-open-modal")&&(t.preventDefault(),b(t.target.href))});const h=document.getElementById("themeSwitch");window.addEventListener("DOMContentLoaded",function(){const t=localStorage.getItem("theme");t&&(document.body.classList.add(t),t==="dark-theme"&&(h.checked=!0))});h.addEventListener("change",function(){this.checked?(document.body.classList.add("dark-theme"),document.body.classList.remove("light-theme"),localStorage.setItem("theme","dark-theme")):(document.body.classList.remove("dark-theme"),document.body.classList.add("light-theme"),localStorage.setItem("theme","light-theme"))});class S{constructor(){this.BASE_URL="https://books-backend.p.goit.global/books",this.TOP_BOOKS_ENDPOINT="/top-books",this.CATEGORY_ENDPOINT="/category?category=",this.CATEGORY_LIST_ENDPOINT="/category-list"}async getTopBooks(){try{const e=`${this.BASE_URL}${this.TOP_BOOKS_ENDPOINT}`;return(await a.get(e)).data}catch(e){throw console.error("Error fetching popular books:",e),e}}async getBooksByCategory(e){try{const r=`${this.BASE_URL}${this.CATEGORY_ENDPOINT}${e}`;return(await a.get(r)).data}catch(r){throw console.error(`Error fetching books for category '${e}':`,r),r}}async getDetails(e){try{const r=`${this.BASE_URL}/${e}`;return(await a.get(r)).data}catch(r){throw console.error(`Error fetching details for book with ID '${e}':`,r),r}}async getCategoryList(){try{const e=`${this.BASE_URL}${this.CATEGORY_LIST_ENDPOINT}`;return(await a.get(e)).data}catch(e){throw console.error("Error fetching category list:",e),e}}}const v=new S,u=document.querySelector(".top-books-list"),E=document.querySelector(".books-title-container");function p(){let t=T(window.innerWidth);v.getTopBooks().then(e=>_(e,t)).catch(e=>console.error("Error fetching top books:",e))}function T(t){return t>=1440?5:t>=768?3:1}function _(t,e){u.innerHTML="";const r=t.map(o=>{let s=`<li><h2 class="gallery-title">${o.list_name}</h2>
    <ul class="gallery-book-list" data-filter="${o.list_name}">`,c=[];for(let n=0;n<e&&n<o.books.length;n++){let d=`<li class='gallery-book-item' data-bookid="${o.books[n]._id}">
        <a class="gallery-book-link">
        <div class="preview">
          <img class="gallery-book-img" data-id="${o.books[n]._id}" src="${o.books[n].book_image}" alt="${o.books[n].title}">
          <div class="actions-card">
        <p class="action-text">quick view</p>
          </div>
        </div>
          <div class="content">
            <h3 class="gallery-book-name">${o.books[n].title}</h3>
            <h4 class="gallery-book-text">${o.books[n].author}</h4>
          </div>
        </a>
      </li>`;c.push(d)}const l=c.join(" ");return s+l+"</ul></li>"}).join(" ");u.innerHTML=r;const i='<h2 class="top-books-title">Best Sellers <span class="colortext">Books</span></h2>';E.innerHTML=i}window.addEventListener("resize",()=>{p()});p();
//# sourceMappingURL=commonHelpers.js.map
