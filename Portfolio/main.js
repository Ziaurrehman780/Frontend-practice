let nav = document.querySelector(".navigation-wrap");
window.onscroll = function(){
    if(document.documentElement.scrollTop > 20){
        nav.classList.add("header-scrolled")
    }else{
        nav.classList.remove("header-scrolled");
    }
}
