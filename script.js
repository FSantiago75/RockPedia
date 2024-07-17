const backToTop = document.querySelector(".back-to-top");
const nav = document.querySelectorAll('nav a');
const textBox = document.querySelector('.text');

window.addEventListener("scroll", function(){
    const scrollTop = document.documentElement.scrollTop;
    console.log(scrollTop);
    if (scrollTop > 500){
        backToTop.style.display = "block";
    } else {
        backToTop.style.display = "none";
    }
});


nav.forEach(link =>{
    link.addEventListener("click", function(e){
        e.preventDefault();
        if (this.getAttribute('data-text') === "none"){
            return;
        }
        else{
            textBox.textContent = this.getAttribute('data-text')
        }
    });
});
