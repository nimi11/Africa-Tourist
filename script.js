

document.addEventListener("DOMContentLoaded", function(){
    const g1 = document.querySelector(".g-1");
    const g2= document.querySelector(".g-2");
    const firstSite = document.getElementById("first-site")
    const secondSite = document.getElementById("second-site")
    const nextButton = document.getElementById("next")
    const prevButton = document.getElementById("previous")
    let g = 0
    g1.addEventListener("click", function() {
        console.log("clicked")
        firstSite.classList.remove("hidden");
        firstSite.scrollIntoView({ behavior: "smooth" });
        nextButton.classList.remove("hidden");
        prevButton.classList.remove("hidden");
        g+=1
    });

    g2.addEventListener("click", function(){
        secondSite.classList.remove("hidden");
       secondSite.scrollIntoView({behaviour: "smooth" }) ;
       nextButton.classList.remove("hidden");
       prevButton.classList.remove("hidden");
       g+=2

    })

    nextButton.addEventListener("click",function(){
        if (g==1){
            console.log("g=1")
            firstSite.classList.add("hidden");
            secondSite.classList.remove("hidden");
            secondSite.scrollIntoView({behavior:"smooth"});
            g++
            console.log(g)
        }
    })





















});
    