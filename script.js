document.addEventListener("DOMContentLoaded", function(){


   




    const g1 = document.getElementById("g-1");
    const g2= document.getElementById("g-2");
    const g3 = document.getElementById("g-3");
    const g4 = document.getElementById("g-4");
    const g5 = document.getElementById("g-5");
    const g6 = document.getElementById("g-6")
    const g7 = document.getElementById("g-7")
    const g8 = document.getElementById("g-8")
    const g9 = document.getElementById("g-9")
    const firstSite = document.getElementById("first-site")
    const secondSite = document.getElementById("second-site")
    const thirdSite = document.getElementById("third-site")
    const fourthSite = document.getElementById("fourth-site")
    const fifthSite = document.getElementById("fifth-site")
    const sixthSite = document.getElementById("sixth-site")
    const seventhSite = document.getElementById("seventh-site")
    const eightSite = document.getElementById("eighth-site")
    const ninthSite = document.getElementById("ninth-site")
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
        fifthSite.classList.add("hidden")
        sixthSite.classList.add("hidden")
        seventhSite.classList.add("hidden")
        eightSite.classList.add("hidden")
        ninthSite.classList.add("hidden")
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
        fifthSite.classList.add("hidden")
        sixthSite.classList.add("hidden")
        seventhSite.classList.add("hidden")
        eightSite.classList.add("hidden")
        ninthSite.classList.add("hidden")
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
        fifthSite.classList.add("hidden")
        sixthSite.classList.add("hidden")
        seventhSite.classList.add("hidden")
        eightSite.classList.add("hidden")
        ninthSite.classList.add("hidden")
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
        fifthSite.classList.add("hidden")
        sixthSite.classList.add("hidden")
        seventhSite.classList.add("hidden")
        eightSite.classList.add("hidden")
        ninthSite.classList.add("hidden")
    })
    g5.addEventListener("click", function(){
        fifthSite.classList.remove("hidden")
        fifthSite.scrollIntoView({behaviour:"smooth"})
        nextButton.classList.remove("hidden");
        prevButton.classList.remove("hidden");
        g=5
        firstSite.classList.add("hidden")
        secondSite.classList.add("hidden")
        thirdSite.classList.add("hidden")
        fourthSite.classList.add("hidden")
        sixthSite.classList.add("hidden")
        seventhSite.classList.add("hidden")
        eightSite.classList.add("hidden")
        ninthSite.classList.add("hidden")

    })
    g6.addEventListener("click",function(){
        sixthSite.classList.remove("hidden")
        sixthSite.scrollIntoView({behavior:"smooth"})
        nextButton.classList.remove("hidden");
        prevButton.classList.remove("hidden");
        g=6
        firstSite.classList.add("hidden")
        secondSite.classList.add("hidden")
        thirdSite.classList.add("hidden")
        fourthSite.classList.add("hidden")
        fifthSite.classList.add("hidden")
        seventhSite.classList.add("hidden")
        eightSite.classList.add("hidden")
        ninthSite.classList.add("hidden")

    })
    g7.addEventListener("click",function(){
        seventhSite.classList.remove("hidden")
        seventhSite.scrollIntoView({behavior:"smooth"})
        nextButton.classList.remove("hidden");
        prevButton.classList.remove("hidden");
        g=7
        firstSite.classList.add("hidden")
        secondSite.classList.add("hidden")
        thirdSite.classList.add("hidden")
        fourthSite.classList.add("hidden")
        fifthSite.classList.add("hidden")
        sixthSite.classList.add("hidden")
        eightSite.classList.add("hidden")
        ninthSite.classList.add("hidden")
    })
    g8.addEventListener("click",function(){
        eightSite.classList.remove("hidden")
        eightSite.scrollIntoView({behavior:"smooth"})
        nextButton.classList.remove("hidden");
        prevButton.classList.remove("hidden");
        g=8
        firstSite.classList.add("hidden")
        secondSite.classList.add("hidden")
        thirdSite.classList.add("hidden")
        fourthSite.classList.add("hidden")
        fifthSite.classList.add("hidden")
        sixthSite.classList.add("hidden")
        seventhSite.classList.add("hidden")
        ninthSite.classList.add("hidden")

    })
    g9.addEventListener("click", function(){
        ninthSite.classList.remove("hidden")
        ninthSite.scrollIntoView({behavior:"smooth"})
        nextButton.classList.remove("hidden");
        prevButton.classList.remove("hidden");
        g=9
        firstSite.classList.add("hidden")
        secondSite.classList.add("hidden")
        thirdSite.classList.add("hidden")
        fourthSite.classList.add("hidden")
        fifthSite.classList.add("hidden")
        sixthSite.classList.add("hidden")
        seventhSite.classList.add("hidden")
        eightSite.classList.add("hidden")
    })







    prevButton.addEventListener("mouseover",function(){
        prevButton.style.transform ="scale(1.2)"
    })
    prevButton.addEventListener("mouseout",function(){
        prevButton.style.transform ="scale(1)"
    })
    
    prevButton.addEventListener("click", function () {
        if (g == 1) {
            firstSite.classList.add("hidden");
            ninthSite.classList.remove("hidden");
            ninthSite.scrollIntoView({ behavior: "instant" });
            console.log(g)
            g = 9;
        } else if (g == 2) {
            secondSite.classList.add("hidden");
            firstSite.classList.remove("hidden");
            firstSite.scrollIntoView({ behavior: "instant" });
            console.log(g)
            g--;
        } else if (g == 3) {
            thirdSite.classList.add("hidden");
            secondSite.classList.remove("hidden");
            secondSite.scrollIntoView({ behavior: "instant" });
            console.log(g)
            g--;
        } else if (g == 4) {
            fourthSite.classList.add("hidden");
            thirdSite.classList.remove("hidden");
            thirdSite.scrollIntoView({ behavior: "instant" });
            console.log(g)
            g--;
        } else if (g == 5) {
            fifthSite.classList.add("hidden");
            fourthSite.classList.remove("hidden");
            fourthSite.scrollIntoView({ behavior: "instant" });
            console.log(g)
            g--;
        } else if (g == 6) {
            sixthSite.classList.add("hidden");
            fifthSite.classList.remove("hidden");
            fifthSite.scrollIntoView({ behavior: "instant" });
            console.log(g)
            g--;
        } else if (g == 7) {
            seventhSite.classList.add("hidden");
            sixthSite.classList.remove("hidden");
            sixthSite.scrollIntoView({ behavior: "instant" });
            console.log(g)
            g--;
        } else if (g == 8) {
            eightSite.classList.add("hidden");
            seventhSite.classList.remove("hidden");
            seventhSite.scrollIntoView({ behavior: "instant" });
            console.log(g)
            g--;
        } else if (g == 9) {
            ninthSite.classList.add("hidden");
            eightSite.classList.remove("hidden");
            eightSite.scrollIntoView({ behavior: "instant" });
            console.log(g)
            g--;
        }
    });





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
            secondSite.scrollIntoView({behavior:"instant"});
            g++
            console.log(g)
        }else if(g==2){
            console.log("g=2")
            secondSite.classList.add("hidden")
            thirdSite.classList.remove("hidden")
            thirdSite.scrollIntoView({behavior:"instant"})
            g++
            console.log(g)
        }else if (g==3){
            console.log("g==3")
            thirdSite.classList.add("hidden")
            fourthSite.classList.remove("hidden")
            fourthSite.scrollIntoView({behavior:"instant"})
            g++
        }else if(g==4){
            console.log("g==4")
            fourthSite.classList.add("hidden")
            fifthSite.classList.remove("hidden")
            fifthSite.scrollIntoView({behavior:"instant"})
            g++}
        else if(g==5){
            fifthSite.classList.add("hidden")
            sixthSite.classList.remove("hidden")
            sixthSite.scrollIntoView({behavior:"instant"})
            g++
        }else if (g==6){
            sixthSite.classList.add("hidden")
            seventhSite.classList.remove("hidden")
            seventhSite.scrollIntoView({behavior:"instant"})
            g++
        }else if(g==7){
            seventhSite.classList.add("hidden")
            eightSite.classList.remove("hidden")
            eightSite.scrollIntoView({behavior:"instant"})
            g++
        }else if (g==8){
            eightSite.classList.add("hidden")
            ninthSite.classList.remove("hidden")
            ninthSite.scrollIntoView({behavior:"instant"})
            g++
        }else if (g==9){
            ninthSite.classList.add("hidden")
            firstSite.classList.remove("hidden")
            firstSite.scrollIntoView({behavior:"instant"})
            g=1
        }
    })





















});