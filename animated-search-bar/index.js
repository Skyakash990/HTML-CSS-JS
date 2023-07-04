const search=document.querySelector(".search-bar-container");
const magnifier=document.querySelector(".magnifier");
magnifier.addEventListener("click",()=>{
    search.classList.toggle("active");
});