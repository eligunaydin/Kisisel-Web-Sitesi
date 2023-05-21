const formWrapper = document.querySelector(".form-wrapper");
const form = document.querySelector("#form");
const searchInput = document.querySelector("#searchInput");
const buttonWrapper = document.querySelector(".buttonwrapper");
const searchButton = document.querySelector("#searchbutton");
const clearButton = document.querySelector("#clearbutton");
const imageListWrapper = document.querySelector(".imagelist-wrapper");

runEventLİsteners();

function runEventLİsteners(){
    form.addEventListener("submit", search);
    clearButton.addEventListener("click",clear);
}

function clear(){
    searchInput.value="";
    imageListWrapper.innerHTML="";
}

function search(e){
    const value = searchInput.value.trim();
    fetch(`https://api.unsplash.com/search/photos?query=${value}`,{
        method:"GET",
        headers:{
            Authorization:"Client-ID fKy27COOjQoHqLJy1aV0woqaG-_Zbkcwu1gWbn7WZ70"
        }
    })
    .then((res)=>res.json())
    .then((data)=>{
        Array.from(data.results).forEach((image)=>{
            addImageToUI(image.urls.small)
        })
    })
    .catch((err)=>console.log(err));

    e.preventDefault();
}

function addImageToUI(url){
    console.log(imageListWrapper)
    const div=document.createElement("div");
    div.className="card";

    const img=document.createElement("img");
    img.setAttribute("src",url);
    img.height='400';
    img.width='400';

    div.append(img);
    imageListWrapper.append(div);
}