

document.addEventListener("DOMContentLoaded", function(){
    const g1 = document.getElementById("g-1");
    const g2= document.getElementById("g-2");
    const g3 = document.getElementById("g-3");
    const g4 = document.getElementById("g-4");
    const g5 = document.getElementById("g-5")
    const firstSite = document.getElementById("first-site")
    const secondSite = document.getElementById("second-site")
    const thirdSite = document.getElementById("third-site")
    const fourthSite = document.getElementById("fourth-site")
    const nextButton = document.getElementById("next")
    const prevButton = document.getElementById("previous")
   const prevArrow = document.getElementById("prev-arrow")
    let g = 0

    const galleryItems = document.querySelectorAll('.gallery-item');
    const nextArrow = document.getElementById('next-arrow');
    const numVisibleItems = 3;
    let currentIndex = 0;

    prevArrow.addEventListener('click', function() {
        for (let i = 0; i < numVisibleItems; i++) {
            const currentItemIndex = (currentIndex + i) % galleryItems.length;
            galleryItems[currentItemIndex].classList.add('hidden');
        }

        currentIndex = (currentIndex - 1 + galleryItems.length) % galleryItems.length;

        for (let i = 0; i < numVisibleItems; i++) {
            const prevItemIndex = (currentIndex + i) % galleryItems.length;
            galleryItems[prevItemIndex].classList.remove('hidden');
        }
    });


    nextArrow.addEventListener('click', function() {
    for (let i = 0; i < numVisibleItems; i++) {
        const currentItemIndex = (currentIndex + i) % galleryItems.length;
        galleryItems[currentItemIndex].classList.add('hidden');
    }

    currentIndex = (currentIndex + 1) % galleryItems.length;

    for (let i = 0; i < numVisibleItems; i++) {
        const nextItemIndex = (currentIndex + i) % galleryItems.length;
        galleryItems[nextItemIndex].classList.remove('hidden');
    }
});


    g1.addEventListener("click", function() {
        console.log("clicked")
        firstSite.classList.remove("hidden");
        firstSite.scrollIntoView({ behavior: "smooth" });
        nextButton.classList.remove("hidden");
        prevButton.classList.remove("hidden");
        g=1
        secondSite.classList.add("hidden")
        thirdSite.classList.add("hidden")
        fourthSite.classList.add("hidden")
    });

    g2.addEventListener("click", function(){
        secondSite.classList.remove("hidden");
       secondSite.scrollIntoView({behavior: "smooth" }) ;
       nextButton.classList.remove("hidden");
       prevButton.classList.remove("hidden");
       g=2
        firstSite.classList.add("hidden")
        thirdSite.classList.add("hidden")
        fourthSite.classList.add("hidden")
    })
    g3.addEventListener("click", function(){
        thirdSite.classList.remove("hidden");
        thirdSite.scrollIntoView({behavior:"smooth"});
        nextButton.classList.remove("hidden");
        prevButton.classList.remove("hidden");
        g=3
        firstSite.classList.add("hidden")
        secondSite.classList.add("hidden")
        fourthSite.classList.add("hidden")
    })
    g4.addEventListener("click", function(){
        fourthSite.classList.remove("hidden")
        fourthSite.scrollIntoView({behavior:"smooth"})
        nextButton.classList.remove("hidden");
        prevButton.classList.remove("hidden");
        g=4
        firstSite.classList.add("hidden")
        secondSite.classList.add("hidden")
        thirdSite.classList.add("hidden")
        
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