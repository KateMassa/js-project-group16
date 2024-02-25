import{a as c}from"./assets/vendor-0cb09735.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const r of o)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function e(o){const r={};return o.integrity&&(r.integrity=o.integrity),o.referrerPolicy&&(r.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?r.credentials="include":o.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(o){if(o.ep)return;o.ep=!0;const r=e(o);fetch(o.href,r)}})();class h{constructor(){this.BASE_URL="https://books-backend.p.goit.global/books",this.TOP_BOOKS_ENDPOINT="/top-books",this.CATEGORY_ENDPOINT="/category?category=",this.CATEGORY_LIST_ENDPOINT="/category-list"}async getTopBooks(){try{const t=`${this.BASE_URL}${this.TOP_BOOKS_ENDPOINT}`;return(await c.get(t)).data}catch(t){throw console.error("Error fetching popular books:",t),t}}async getBooksByCategory(t){try{const e=`${this.BASE_URL}${this.CATEGORY_ENDPOINT}${t}`;return(await c.get(e)).data}catch(e){throw console.error(`Error fetching books for category '${t}':`,e),e}}async getDetails(t){try{const e=`${this.BASE_URL}/${t}`;return(await c.get(e)).data}catch(e){throw console.error(`Error fetching details for book with ID '${t}':`,e),e}}async getCategoryList(){try{const t=`${this.BASE_URL}${this.CATEGORY_LIST_ENDPOINT}`;return(await c.get(t)).data}catch(t){throw console.error("Error fetching category list:",t),t}}}const g=new h,l=document.querySelector(".top-books-list"),f=document.querySelector(".books-title-container");function u(){let i=y(window.innerWidth);g.getTopBooks().then(t=>k(t,i)).catch(t=>console.error("Error fetching top books:",t))}function y(i){return i>=1440?5:i>=768?3:1}function k(i,t){l.innerHTML="";const e=i.map(o=>{let r=`<li><h2 class="gallery-title">${o.list_name}</h2>
    <ul class="gallery-book-list" data-filter="${o.list_name}">`,a=[];for(let s=0;s<t&&s<o.books.length;s++){let p=`<li class='gallery-book-item' data-bookid="${o.books[s]._id}">
        <a class="gallery-book-link">
        <div class="preview">
          <img class="gallery-book-img" data-id="${o.books[s]._id}" src="${o.books[s].book_image}" alt="${o.books[s].title}">
          <div class="actions-card">
        <p class="action-text">quick view</p>
          </div>
        </div>
          <div class="content">
            <h3 class="gallery-book-name">${o.books[s].title}</h3>
            <h4 class="gallery-book-text">${o.books[s].author}</h4>
          </div>
        </a>
      </li>`;a.push(p)}const d=a.join(" ");return r+d+"</ul></li>"}).join(" ");l.innerHTML=e;const n='<h2 class="top-books-title">Best Sellers <span class="colortext">Books</span></h2>';f.innerHTML=n}window.addEventListener("resize",()=>{u()});u();
//# sourceMappingURL=commonHelpers.js.map
