const navbar=document.querySelector(".navbar");

const menuBtn=document.querySelector("#menu-btn");

menuBtn.addEventListener("click",function(){
    navbar.classList.toggle("active");
    document.addEventListener("click",function(e){
        if(
            !e.composedPath().includes(menuBtn) && 
            !e.composedPath().includes(navbar)
        ){
            navbar.classList.remove("active");
        }
    });
});

function control(formId){
    let invalids = document.getElementById(formId).querySelectorAll(':invalid').length;
    let button = document.getElementById(formId).querySelector('button[type="submit"]');

    if (invalids==0){
        button.removeAttribute('disabled');
    } else {
        button.setAttribute('disabled','disabled');
    }

}

control('form1');