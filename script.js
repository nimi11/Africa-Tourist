

document.addEventListener("DOMContentLoaded", function(){
    const g1 = document.querySelector(".g-1");
    const g2= document.querySelector(".g-2");
    const g3 = document.querySelector(".g-3")
    const firstSite = document.getElementById("first-site")
    const secondSite = document.getElementById("second-site")
    const thirdSite = document.getElementById("third-site")
    const nextButton = document.getElementById("next")
    const prevButton = document.getElementById("previous")
    let g = 0
    g1.addEventListener("click", function() {
        console.log("clicked")
        firstSite.classList.remove("hidden");
        firstSite.scrollIntoView({ behavior: "smooth" });
        nextButton.classList.remove("hidden");
        prevButton.classList.remove("hidden");
        g=1
        secondSite.classList.add("hidden")
        thirdSite.classList.add("hidden")
    });

    g2.addEventListener("click", function(){
        secondSite.classList.remove("hidden");
       secondSite.scrollIntoView({behavior: "smooth" }) ;
       nextButton.classList.remove("hidden");
       prevButton.classList.remove("hidden");
       g=2
        firstSite.classList.add("hidden")
        thirdSite.classList.add("hidden")
    })
    g3.addEventListener("click", function(){
        thirdSite.classList.remove("hidden");
        thirdSite.scrollIntoView({behavior:"smooth"});
        nextButton.classList.remove("hidden");
        prevButton.classList.remove("hidden");
        g=3
        firstSite.classList.add("hidden")
        secondSite.classList.add("hidden")
    })

    
    prevButton.addEventListener("mouseover",function(){
        prevButton.style.transform ="scale(1.2)"
    })
    prevButton.addEventListener("mouseout",function(){
        prevButton.style.transform ="scale(1)"
    })
    prevButton.addEventListener("click",function(){
        if(g==1){
            console.log("g=1")
            secondSite.classList.add("hidden")
            firstSite.classList.add("hidden")
            thirdSite.classList.remove("hidden");
            thirdSite.scrollIntoView({behavior:"smooth"})
            g=3
        }else if(g==2){
            console.log("g==2")
            thirdSite.classList.add("hidden")
            secondSite.classList.add("hidden")
            firstSite.classList.remove("hidden")
            firstSite.scrollIntoView({behavior:"smooth"})
            g=1

        }else if(g==3){
            console.log(g)
            firstSite.classList.add("hidden")
            thirdSite.classList.add("hidden")
            secondSite.classList.remove("hidden")
            secondSite.scrollIntoView({behavior:"smooth"})
            g=2

        }else{
            console.log(g)
        }
    })

    nextButton.addEventListener("mouseover",function(){
        nextButton.style.transform ="scale(1.2)"
    })
    nextButton.addEventListener("mouseout",function(){
        nextButton.style.transform ="scale(1)"
    })

    nextButton.addEventListener("click",function(){
        if (g==1){
            console.log(g)
            firstSite.classList.add("hidden");
            secondSite.classList.remove("hidden");
            secondSite.scrollIntoView({behavior:"smooth"});
            g++
            console.log(g)
        }else if(g==2){
            console.log("g=2")
            secondSite.classList.add("hidden")
            thirdSite.classList.remove("hidden")
            thirdSite.scrollIntoView({behavior:"smooth"})
            g++
            console.log(g)
        }else if (g==3){
            console.log("g==3")
            thirdSite.classList.add("hidden")
            firstSite.classList.remove("hidden")
            firstSite.scrollIntoView({behavior:"smooth"})
            g=1
        }else{
            console.log(g)
        }
    })





















});
    