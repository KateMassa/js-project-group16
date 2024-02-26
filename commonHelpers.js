import{a as l}from"./assets/vendor-0cb09735.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const n of s.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function r(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function a(t){if(t.ep)return;t.ep=!0;const s=r(t);fetch(t.href,s)}})();document.getElementById("burger-menu");const d=document.getElementById("themeSwitch");d.addEventListener("change",function(){const o=document.querySelector(".logo-icon use");this.checked?o.setAttribute("href","./img/icons.svg#icon-logo-dark"):o.setAttribute("href","./img/icons.svg#icon-logo-light")});window.addEventListener("DOMContentLoaded",function(){const o=localStorage.getItem("theme");o&&(document.body.classList.add(o),o==="dark-theme"&&(d.checked=!0))});d.addEventListener("change",function(){this.checked?(document.body.classList.add("dark-theme"),document.body.classList.remove("light-theme"),localStorage.setItem("theme","dark-theme")):(document.body.classList.remove("dark-theme"),document.body.classList.add("light-theme"),localStorage.setItem("theme","light-theme"))});class k{constructor(){this.BASE_URL="https://books-backend.p.goit.global/books",this.TOP_BOOKS_ENDPOINT="/top-books",this.CATEGORY_ENDPOINT="/category?category=",this.CATEGORY_LIST_ENDPOINT="/category-list"}async getTopBooks(){try{const e=`${this.BASE_URL}${this.TOP_BOOKS_ENDPOINT}`;return(await l.get(e)).data}catch(e){throw console.error("Error fetching popular books:",e),e}}async getBooksByCategory(e){try{const r=`${this.BASE_URL}${this.CATEGORY_ENDPOINT}${e}`;return(await l.get(r)).data}catch(r){throw console.error(`Error fetching books for category '${e}':`,r),r}}async getDetails(e){try{const r=`${this.BASE_URL}/${e}`;return(await l.get(r)).data}catch(r){throw console.error(`Error fetching details for book with ID '${e}':`,r),r}}async getCategoryList(){try{const e=`${this.BASE_URL}${this.CATEGORY_LIST_ENDPOINT}`;return(await l.get(e)).data}catch(e){throw console.error("Error fetching category list:",e),e}}}function f(o,e){return`<li class='gallery-book-item' data-bookid="${o.books[e]._id}">
        <a class="gallery-book-link">
        <div class="preview js-open-modal">
          <img class="gallery-book-img" data-id="${o.books[e]._id}" src="${o.books[e].book_image}" alt="${o.books[e].title}">
          <div class="actions-card">
        <p class="action-text">quick view</p>
          </div>
        </div>
          <div class="content">
            <h3 class="gallery-book-name">${o.books[e].title}</h3>
            <h4 class="gallery-book-text">${o.books[e].author}</h4>
          </div>
        </a>
    </li>`}const c={bookList:document.querySelector(".book-list"),topBooksList:document.querySelector(".top-books-list"),booksTitleContainer:document.querySelector(".books-title-container")},u=new k;function g(){let o=p(window.innerWidth);u.getTopBooks().then(e=>b(e,o)).catch(e=>console.error("Error fetching top books:",e))}function p(o){return o>=1280?5:o>=768?3:1}function b(o,e){c.topBooksList.innerHTML="",c.booksTitleContainer.innerHTML="";const r=o.map(t=>{let s=`<li><h2 class="gallery-title">${t.list_name}</h2>
    <ul class="gallery-book-list" data-filter="${t.list_name}">`,n=[];for(let i=0;i<e&&i<t.books.length;i++){let m=f(t,i);n.push(m)}const h=`<button class="see-more-btn" data-filter="${t.list_name}" type="button">See More</button>`,y=n.join(" ");return s+y+"</ul>"+h+"</li>"}).join(" ");c.topBooksList.innerHTML=r;const a='<h2 class="top-books-title">Best Sellers <span class="colortext">Books</span></h2>';c.booksTitleContainer.innerHTML=a,B()}function B(){document.querySelectorAll(".see-more-btn").forEach(e=>{e.addEventListener("click",L)})}async function L(o){o.preventDefault(),document.querySelectorAll(".gallery-book-list").forEach(n=>{n.style.display="none"});let r=o.target.dataset.filter;const a=document.querySelector(`ul[data-filter="${r}"]`);a.style.display="block",document.querySelectorAll(".top-books-list > li").forEach(n=>{n.querySelector(`ul[data-filter="${r}"]`)===null&&n.remove()});const s=a.parentElement.querySelector(".see-more-btn");if(s.style.display="none",r!=="Best Sellers Books"){const n=await u.getBooksByCategory(r);E(n,r)}}function E(o,e){const r=document.querySelector(`ul[data-filter="${e}"]`),a=o.map(t=>`
    <li class='gallery-book-item' data-bookid="${t._id}">
      <a class="gallery-book-link">
        <div class="preview">
          <img class="gallery-book-img" data-id="${t._id}" src="${t.book_image}" alt="${t.title}">
          <div class="actions-card">
            <p class="action-text">quick view</p>
          </div>
        </div>
        <div class="content">
          <h3 class="gallery-book-name">${t.title}</h3>
          <h4 class="gallery-book-text">${t.author}</h4>
        </div>
      </a>
    </li>`).join("");r.innerHTML=a}window.addEventListener("resize",()=>{g()});g();
//# sourceMappingURL=commonHelpers.js.map
