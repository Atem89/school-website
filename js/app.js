window.addEventListener("load", function () {
    
    setTimeout(function () {
        
        document.body.style.backgroundColor = "white";

        const preloader = document.getElementById("preloader");
        preloader.style.display = "none";
        
        const content = document.getElementById("main");
        content.style.display = "block";
    }, 1000); 
});