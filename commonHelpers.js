import{B as f}from"./assets/main-54800e6b.js";import"./assets/vendor-27708577.js";const g=document.querySelector(".category-list"),s=document.querySelector(".gallery-list"),y=document.querySelector("#all-categories"),a=document.querySelector(".category-title"),l=new f;async function p(){try{const e=await l.fetchCategories();C(e),y.classList.add("active")}catch(e){console.log("Failed to render show category list:",e)}}p();async function n(){document.querySelectorAll(".category-list-item").forEach(e=>e.classList.remove("active"));try{const e=await l.fetchTopCategories();for(let t=0;t<4;t++)k(e[t]);document.querySelector(".category-list-item").classList.add("active")}catch(e){console.error("Failed to fetch all categories:",e)}document.querySelectorAll(".see-more-btn").forEach(e=>e.addEventListener("click",u))}n();function C(e){const o=e.map(({list_name:t})=>`
        <li class="category-list-item">
            <h4 class="category-name">${t}</h4>
        </li>`).join("");g.innerHTML+=o}function m(e){return e.map(({_id:t,book_image:r,author:c,title:h})=>`
        <li class="gallery-item" id="${t}">
            <img src="${r}" alt="" class="book-cover" />
            <h3 class="book-title">${i(h)}</h3>
            <h5 class="book-author">${i(c)}</h5>
        </li>`).join("")}function k(e){d("Best Sellers Books");const{list_name:t,books:r}=e,c=`
    <li class="gallery-list-group">
      <h3 class="list-group-name">${t}</h3>
        <ul class="gallery-list-item">
          ${m(r)}
        </ul>
      <button class="see-more-btn">See more</button>
    </li>`;s.innerHTML+=c}function L(e){const o=e[0].list_name;d(o);const t=m(e);s.innerHTML=t}async function u(e){const o=e.target.closest("li").children[0].textContent;try{const t=await l.fetchBooksByCategory(o);s.innerHTML="",t.length!=0?(s.style.cssText="flex-direction: row; flex-wrap: wrap",L(t),document.querySelectorAll(".category-list-item").forEach(r=>r.classList.remove("active"))):n(),e.target.closest("li").classList.add("active")}catch(t){console.error("Failed to render page by category:",t)}}function i(e){return e.length>=15?`${e.slice(0,15)}...`:e}function d(e){let o=e.split(" ");const t=o[o.length-1];o=o.slice(0,o.length-1);const r=o.join(" ");a.textContent=`${r}`,a.nextElementSibling.textContent=`${t}`}g.addEventListener("click",u);y.addEventListener("click",n);
//# sourceMappingURL=commonHelpers.js.map
