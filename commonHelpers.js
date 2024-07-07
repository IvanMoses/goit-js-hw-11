import{a as u,S as f,i}from"./assets/vendor-b11e2a50.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();const m="44822800-f7e5c6825510a03bf87da843b",p="https://pixabay.com/api/";async function d(s,t=1,o=40){const a={key:m,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0,page:t,per_page:o};try{return(await u.get(p,{params:a})).data}catch{throw new Error("Error fetching images")}}const l=document.querySelector(".gallery");function y(s){const t=s.map(o=>g(o)).join("");l.innerHTML=t,h()}function g({webformatURL:s,largeImageURL:t,tags:o,likes:a,views:e,comments:r,downloads:n}){return`
    <div class="photo-card">
      <a href="${t}">
        <img src="${s}" alt="${o}" loading="lazy" />
      </a>
      <div class="info">
        <p class="info-item">
          <b>Likes</b>${a}
        </p>
        <p class="info-item">
          <b>Views</b>${e}
        </p>
        <p class="info-item">
          <b>Comments</b>${r}
        </p>
        <p class="info-item">
          <b>Downloads</b>${n}
        </p>
      </div>
    </div>
  `}function h(){new f(".gallery a",{captionsData:"alt",captionDelay:250}).refresh()}function b(){l.innerHTML=""}const L=document.querySelector("#search-form"),c=document.querySelector(".loader");L.addEventListener("submit",S);async function S(s){s.preventDefault();const t=s.currentTarget.elements.searchQuery.value.trim();if(t===""){i.error({title:"Error",message:"Search query cannot be empty"});return}b(),c.style.display="block";try{const o=await d(t);if(c.style.display="none",o.hits.length===0){i.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"});return}y(o.hits)}catch(o){c.style.display="none",i.error({title:"Error",message:o.message})}}
//# sourceMappingURL=commonHelpers.js.map
