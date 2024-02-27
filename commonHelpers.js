import{s as C,a as x,b as $,i as m,d as B,c as I}from"./assets/support-3b3315d0.js";import{a as i}from"./assets/vendor-0cb09735.js";class k{async fetchCategories(){try{return(await i.get("https://books-backend.p.goit.global/books/category-list")).data}catch(t){throw console.error("Error fetching categories:",t),t}}async fetchTopCategories(){try{return(await i.get("https://books-backend.p.goit.global/books/top-books")).data}catch(t){throw console.error("Error fetching top categories:",t),t}}async fetchBooksByCategory(t){try{return(await i.get(`https://books-backend.p.goit.global/books/category?category=${t}`)).data}catch(o){throw console.error("Error fetching books by category:",o),o}}async fetchBookById(t){try{return(await i.get(`https://books-backend.p.goit.global/books/${t}`)).data}catch(o){throw console.error("Error fetching book by ID:",o),o}}}const b=document.querySelector(".category-list"),d=document.querySelector(".gallery-list"),f=document.querySelector("#all-categories"),h=document.querySelector(".category-title"),g=new k;async function q(){try{const e=await g.fetchCategories();M(e),f.classList.add("active")}catch(e){console.log("Failed to render show category list:",e)}}q();async function y(){document.querySelectorAll(".category-list-item").forEach(e=>e.classList.remove("active"));try{const e=await g.fetchTopCategories();for(let o=0;o<4;o++)A(e[o]);document.querySelector(".category-list-item").classList.add("active")}catch(e){console.error("Failed to fetch all categories:",e)}document.querySelectorAll(".see-more-btn").forEach(e=>e.addEventListener("click",S))}y();function M(e){const t=e.map(({list_name:o})=>`
        <li class="category-list-item">
            <h4 class="category-name">${o}</h4>
        </li>`).join("");b.innerHTML+=t}function v(e){return e.map(({_id:o,book_image:s,author:a,title:c})=>`
        <li class="gallery-item" id="${o}">
            <img src="${s}" alt="" class="book-cover" />
            <h3 class="book-title">${p(c)}</h3>
            <h5 class="book-author">${p(a)}</h5>
        </li>`).join("")}function A(e){w("Best Sellers Books");const{list_name:o,books:s}=e,a=`
    <li class="gallery-list-group">
      <h3 class="list-group-name">${o}</h3>
        <ul class="gallery-list-item">
          ${v(s)}
        </ul>
      <button class="see-more-btn">See more</button>
    </li>`;d.innerHTML+=a}function H(e){const t=e[0].list_name;w(t);const o=v(e);d.innerHTML=o}async function S(e){const t=e.target.closest("li").children[0].textContent;try{const o=await g.fetchBooksByCategory(t);d.innerHTML="",o.length!=0?(d.style.cssText="flex-direction: row; flex-wrap: wrap",H(o),document.querySelectorAll(".category-list-item").forEach(s=>s.classList.remove("active"))):y(),e.target.closest("li").classList.add("active")}catch(o){console.error("Failed to render page by category:",o)}}function p(e){return e.length>=15?`${e.slice(0,15)}...`:e}function w(e){let t=e.split(" ");const o=t[t.length-1];t=t.slice(0,t.length-1);const s=t.join(" ");h.textContent=`${s}`,h.nextElementSibling.textContent=`${o}`}b.addEventListener("click",S);f.addEventListener("click",y);const P=new k;document.querySelector(".gallery-list").addEventListener("click",async e=>{const t=e.target.parentNode.getAttribute("id"),o=await P.fetchBookById(t);O(o);const s=document.querySelector(".backdrop");document.querySelector(".close-modal").addEventListener("click",u),s.addEventListener("click",L),document.addEventListener("keydown",E)});async function O(e){const t=`<div class="backdrop">
  <div class="modal">
    <button class="close-modal">
      <svg class="modal-svg-close" width="24" height="24">
        <use href="${C}#icon-x-close"></use>
      </svg>
    </button>

    <div class="desctop">
      <img src="${e.book_image}" alt="${e.title}" class="img-modal" />
      <div class="lauch">
        <div class="tittle-books">
          <h2 class="boock-name">${e.title}</h2>
          <p class="author">${e.author}</p>
        </div>

        <p class="about-book">
         ${e.description}
        </p>

        <ul class="sale-place">
          <li>
            <a href="${e.amazon_product_url}" target="_blank"
              ><img

                class="amazon-link"
                              
                src="${x}"

                alt="amazon"
                width="62"
                height="19"
            /></a>
          </li>
          <li>
            <a href="${e.book_uri}" target="_blank"
              ><img

                class="apple-link"
                               
                src="${$}"

                alt="amazon"
                width="33"
                height="32"
            /></a>
          </li>
        </ul>
      </div>
    </div>

    <button class="add-lokalstorage" type="button"></button>
    <p class="congrat"></p>
  </div>
</div>
`;document.querySelector("main").insertAdjacentHTML("beforeend",t);const s=document.querySelector(".add-lokalstorage"),a=document.querySelector(".congrat");function c(){const n=m(e._id),r=n?"REMOVE FROM THE SHOPPING LIST":"ADD TO SHOPPING LIST",T=n?`Congratulations! You have added the book to the shopping list. To delete,
      press the button "Remove from the shopping list".`:"";s.textContent=r,a.textContent=T;const l=document.querySelector(".modal");document.querySelector(".desctop"),window.innerWidth<768&&(r==="ADD TO SHOPPING LIST"?(s.style.width="211px",s.style.left="62px",s.style.top="695px",l.style.height="762px"):r==="REMOVE FROM THE SHOPPING LIST"&&(s.style.width="279px",s.style.position="absolute",s.style.left="28px",s.style.top="700px",l.style.height="806px")),window.innerWidth>=769&&(r==="ADD TO SHOPPING LIST"?l.style.height="465px":r==="REMOVE FROM THE SHOPPING LIST"&&(l.style.height="501px"))}c(),s.addEventListener("click",n=>{n.preventDefault();const r=m(e._id);console.log(r),r?B(e._id):I(e),c()})}function u(){_(),document.querySelector(".backdrop").remove()}function _(){const e=document.querySelector(".backdrop");document.querySelector(".close-modal").removeEventListener("click",u),e.removeEventListener("click",L),document.removeEventListener("keydown",E)}function L(e){const t=document.querySelector(".backdrop");e.target===t&&u()}function E(e){e.key==="Escape"&&u()}
//# sourceMappingURL=commonHelpers.js.map
