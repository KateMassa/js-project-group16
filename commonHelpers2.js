import{l as n,s as k,a as m,b as u,d as g}from"./assets/support-3b3315d0.js";const $="/js-project-group16/assets/book-pile-c3b346c2.png",e=document.querySelector(".shopping-list"),v=n();function c(t){e.innerHTML="";const i=`<p>This page is empty, add some books and proceed to order.</p>
        <img
        class="no-book"
        src="${$}"
        alt="Book"
        />`,r=t.map(({book_image:s,title:o,author:a,_id:l,description:p,list_name:d,amazon_product_url:b,book_uri:h})=>`<li class="one-book">
            <img
                class="img-book"
                src="${s}"
                alt="Book"
            />
            <div class="discription">
                <div class="up-part">
                <h2 class="book-name">${o}</h2>

                <button data-id="${l}" class="basket" type="button">
                    <svg class="trash" width="16" height="16">
                    <use href="${k}#icon-trash-031"></use>
                    </svg>
                </button>
                </div>
                <h3 class="type-name">${d}</h3>
                <p class="text-discription">
                ${p}
                </p>

                <div class="book-app">
                <h3 class="name-author">${a}</h3>
                <a href="${b}" target="_blank"><img class="amazon" src="${m}" alt="amazon" /></a>
                <a href="${h}" target="_blank"><img class="apple" src="${u}" alt="apple" /></a>
                </div>
            </div>
            </li>`).join("");e.innerHTML=t.length>0?r:i,document.querySelectorAll(".shopping-list .basket").forEach(s=>{const o=s.getAttribute("data-id");s.addEventListener("click",()=>{g(o);const a=n();c(a)})})}c(v);
//# sourceMappingURL=commonHelpers2.js.map
