import{a,b as C}from"./assets/vendor-27708577.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const c of r.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&n(c)}).observe(document,{childList:!0,subtree:!0});function o(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=o(s);fetch(s.href,r)}})();const y=document.getElementById("themeSwitch");y.addEventListener("change",function(){const t=document.querySelector(".logo-icon use");this.checked?t.setAttribute("href","../img/icons.svg#icon-logo-dark"):t.setAttribute("href","../img/icons.svg#icon-logo-light")});window.addEventListener("DOMContentLoaded",function(){const t=localStorage.getItem("theme");t&&(document.body.classList.add(t),t==="dark-theme"&&(y.checked=!0))});y.addEventListener("change",function(){this.checked?(document.body.classList.add("dark-theme"),document.body.classList.remove("light-theme"),localStorage.setItem("theme","dark-theme")):(document.body.classList.remove("dark-theme"),document.body.classList.add("light-theme"),localStorage.setItem("theme","light-theme"))});const k=document.querySelector(".btn-close"),p=document.querySelector(".burger-menu"),S=document.querySelectorAll(".menu-section");function q(){p.classList.add("hidden"),k.classList.remove("hidden"),S.forEach(t=>{t.style.display="block",t.classList.add("is-open")})}p.addEventListener("click",q);function _(){p.classList.remove("hidden"),k.classList.add("hidden"),S.forEach(t=>{t.style.display="none",t.classList.remove("is-open")})}k.addEventListener("click",_);class E{constructor(){this.BASE_URL="https://books-backend.p.goit.global/books",this.TOP_BOOKS_ENDPOINT="/top-books",this.CATEGORY_ENDPOINT="/category?category=",this.CATEGORY_LIST_ENDPOINT="/category-list"}async getTopBooks(){try{const e=`${this.BASE_URL}${this.TOP_BOOKS_ENDPOINT}`;return(await a.get(e)).data}catch(e){throw console.error("Error fetching popular books:",e),e}}async getBooksByCategory(e){try{const o=`${this.BASE_URL}${this.CATEGORY_ENDPOINT}${e}`;return(await a.get(o)).data}catch(o){throw console.error(`Error fetching books for category '${e}':`,o),o}}async getDetails(e){try{const o=`${this.BASE_URL}/${e}`;return(await a.get(o)).data}catch(o){throw console.error(`Error fetching details for book with ID '${e}':`,o),o}}async getCategoryList(){try{const e=`${this.BASE_URL}${this.CATEGORY_LIST_ENDPOINT}`;return(await a.get(e)).data}catch(e){throw console.error("Error fetching category list:",e),e}}}class v{async fetchCategories(){try{return(await a.get("https://books-backend.p.goit.global/books/category-list")).data}catch(e){throw console.error("Error fetching categories:",e),e}}async fetchTopCategories(){try{return(await a.get("https://books-backend.p.goit.global/books/top-books")).data}catch(e){throw console.error("Error fetching top categories:",e),e}}async fetchBooksByCategory(e){try{return(await a.get(`https://books-backend.p.goit.global/books/category?category=${e}`)).data}catch(o){throw console.error("Error fetching books by category:",o),o}}async fetchBookById(e){try{return(await a.get(`https://books-backend.p.goit.global/books/${e}`)).data}catch(o){throw console.error("Error fetching book by ID:",o),o}}}function I(t,e){return`<li class='gallery-book-item'>
        <a class="gallery-book-link js-open-modal" data-bookid="${t.books[e]._id}">
        <div class="preview js-open-modal">
          <img class="gallery-book-img" data-id="${t.books[e]._id}" src="${t.books[e].book_image}" alt="${t.books[e].title}">
          <div class="actions-card">
        <p class="action-text">quick view</p>
          </div>
        </div>
          <div class="content">
            <h3 class="gallery-book-name">${t.books[e].title}</h3>
            <h4 class="gallery-book-text">${t.books[e].author}</h4>
          </div>
        </a>
    </li>`}const A=new E,l={bookList:document.querySelector(".book-list"),topBooksList:document.querySelector(".top-books-list"),booksTitleContainer:document.querySelector(".books-title-container")};function M(t){l.topBooksList.innerHTML="",l.booksTitleContainer.innerHTML="";const e=document.createElement("h2");e.textContent=t,l.booksTitleContainer.appendChild(e),A.getBooksByCategory(t).then(o=>O(o)).catch(o=>console.error("Error fetching top books:",o))}function O(t){const e=t.map(o=>`<li class='gallery-book-item' data-bookid="${o._id}">
        <a class="gallery-book-link">
            <div class="preview">
            <img class="gallery-book-img" data-id="${o._id}" src="${o.book_image}" alt="${o.title}">
            <div class="actions-card">
                <p class="action-text">quick view</p>
            </div>
            </div>
            <div class="content">
            <h3 class="gallery-book-name">${o.title}</h3>
            <h4 class="gallery-book-text">${o.author}</h4>
            </div>
        </a>
        </li>`).join("");l.bookList.innerHTML=e}const m="shoppingList";function B(t){const e=b();return!!(e!=null&&e.some(o=>o._id===t))}function N(t){const e=[],o=b();if(o)B(t._id)||o.push(t),localStorage.setItem(m,JSON.stringify(o));else{e.push(t);const n=JSON.stringify(e);localStorage.setItem(m,n)}}function x(t){const o=b().filter(n=>n._id!==t);localStorage.setItem(m,JSON.stringify(o))}function b(){const t=localStorage.getItem(m);try{return JSON.parse(t)}catch{return t}}const P=new v;document.querySelector(".top-books-list");document.querySelector(".books-title-container");function f(){let t=H(window.innerWidth);P.getTopBooks().then(e=>D(e,t)).catch(e=>console.error("Error fetching top books:",e))}function H(t){return t>=1440?5:t>=768?3:1}function D(t,e){l.topBooksList.innerHTML="",l.booksTitleContainer.innerHTML="";const o=t.map(s=>{let r=`<li><h2 class="gallery-title">${s.list_name}</h2>
    <ul class="gallery-book-list" data-filter="${s.list_name}">`,c=[];for(let u=0;u<e&&u<s.books.length;u++){let $=I(s,u);c.push($)}const d=`<button class="see-more-btn" data-filter="${s.list_name}" type="button">See More</button>`,i=c.join(" ");return r+i+"</ul>"+d+"</li>"}).join(" ");l.topBooksList.innerHTML=o;const n='<h2 class="top-books-title">Best Sellers <span class="colortext">Books</span></h2>';l.booksTitleContainer.innerHTML=n,F()}function F(){document.querySelectorAll(".see-more-btn").forEach(e=>{e.addEventListener("click",R)})}async function R(t){t.preventDefault(),document.querySelectorAll(".gallery-book-list").forEach(c=>{c.style.display="none"});let o=t.target.dataset.filter;const n=document.querySelector(`ul[data-filter="${o}"]`);n.style.display="block",document.querySelectorAll(".top-books-list > li").forEach(c=>{c.querySelector(`ul[data-filter="${o}"]`)===null&&c.remove()});const r=n.parentElement.querySelector(".see-more-btn");if(r.style.display="none",o!=="Best Sellers Books"){const c=await booksApi.getBooksByCategory(o);j(c,o)}}function j(t,e){const o=document.querySelector(`ul[data-filter="${e}"]`),n=t.map(s=>`
    <li class='gallery-book-item' data-bookid="${s._id}">
      <a class="gallery-book-link">
        <div class="preview">
          <img class="gallery-book-img" data-id="${s._id}" src="${s.book_image}" alt="${s.title}">
          <div class="actions-card">
            <p class="action-text">quick view</p>
          </div>
        </div>
        <div class="content">
          <h3 class="gallery-book-name">${s.title}</h3>
          <h4 class="gallery-book-text">${s.author}</h4>
        </div>
      </a>
    </li>`).join("");o.innerHTML=n}window.addEventListener("resize",()=>{f()});const G=new E,L=document.getElementById("category-list");document.getElementById("all-categories");document.addEventListener("DOMContentLoaded",async function(){const t=await G.getCategoryList();U(t);const e=document.getElementById("all-categories");e.classList.add("active"),e.addEventListener("click",function(){f()})});function U(t){const e='<li class="category-item" id="all-categories" >All categories</li>',o=t.map(n=>`<li class="category-item">${n.list_name}</li>`).join("");L.innerHTML=e+o,L.addEventListener("click",function(n){if(n.target.classList.contains("category-item")){document.querySelectorAll(".category-item").forEach(c=>{c.classList.remove("active")}),n.target.classList.add("active");const r=n.target.textContent;M(r)}})}f();const Y=new v;document.querySelector(".gallery-list").addEventListener("click",async t=>{const e=t.target.parentNode.getAttribute("id"),o=await Y.fetchBookById(e);J(o)});const J=t=>{let e,o;const n=document.querySelector("#modal-template"),s=new C.create(n,{onShow:i=>{document.body.classList.add("modal-opened"),e=h=>{h.key==="Escape"&&i.close()},document.addEventListener("keydown",e),o=h=>{document.body.classList.remove("modal-opened"),i.close()},i.element().querySelector(".modal-close").addEventListener("click",o)},onClose:i=>{document.removeEventListener("keydown",e),i.element().querySelector(".modal-close").removeEventListener("click",o)}}),r=s.element();r.querySelector(".book-img").src=t.book_image,r.querySelector(".book-name").innerText=t.title,r.querySelector(".book-author").innerText=t.author,r.querySelector(".book-description").innerText=t.description,r.querySelector(".book-description").innerText=t.description,t.buy_links.forEach(i=>{i.name==="Amazon"?r.querySelector(".book-links-amazon").href=i.url:i.name==="Apple Books"&&(r.querySelector(".book-links-applebook").href=i.url)});const c=r.querySelector(".addToList"),d=r.querySelector(".removeFromList");B(t._id)&&(c.classList.add("hidden"),d.classList.remove("hidden")),c.addEventListener("click",i=>{i.preventDefault(),N(t),r.querySelector(".removeFromList-info").classList.remove("hidden"),c.classList.add("hidden"),d.classList.remove("hidden")}),d.addEventListener("click",i=>{i.preventDefault(),x(t._id),r.querySelector(".removeFromList-info").classList.add("hidden"),c.classList.remove("hidden"),d.classList.add("hidden")}),s.show()};let K=localStorage.getItem("theme");const g=document.querySelector("#themeSwitch");document.documentElement.getAttribute("data-theme");g.addEventListener("click",()=>{g.checked?w():T()});function z(){K==="dark"?w():T()}function w(){g.checked=!0,localStorage.setItem("theme","dark"),document.documentElement.setAttribute("data-theme","dark")}function T(){g.checked=!1,localStorage.setItem("theme","light"),document.documentElement.setAttribute("data-theme","light")}z();
//# sourceMappingURL=commonHelpers.js.map
