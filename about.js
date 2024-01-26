const toluContent = document.getElementById("tolu-toggle")
const toluSection=document.getElementById("tolu-section")
const toluContainer = document.querySelector(".tolu")
const toluName = document.getElementById("tolu-name")
const main = document.querySelector("main")

toluSection.addEventListener("click", function(){
    console.log("click")
    toluContent.classList.remove("hidden")
    main.style.backgroundColor = 'white';
    benName.classList.add("hidden")
    omadaName.classList.add("hidden")
})
toluSection.addEventListener("mouseleave", function(){
    console.log("click")
    toluContent.classList.add("hidden")
    main.style.width="600px";
    omadaName.classList.remove("hidden")
    benName.classList.remove("hidden")

})

const omadaContent = document.getElementById("omada-toggle")
const omadaSection = document.getElementById("omada-section")
const omadaName = document.getElementById("omada_name")

omadaSection.addEventListener("click", function(){
    console.log("something happened")
    omadaContent.classList.remove("hidden")
    main.style.backgroundColor = 'white';
    toluName.classList.add("hidden")
    benName.classList.add("hidden")
})
omadaSection.addEventListener("mouseleave", function(){
    console.log("something happened")
    omadaContent.classList.add("hidden")
    toluName.classList.remove("hidden")
    benName.classList.remove("hidden")
})

const benContent = document.getElementById("ben-toggle")
const benSection = document.getElementById("benjamin-section")
const benName = document.getElementById("ben-name")

benSection.addEventListener("click", function(){
    console.log("something happened")
    benContent.classList.remove("hidden")
    main.style.backgroundColor = 'white';
    omadaName.classList.add("hidden")
    toluName.classList.add("hidden")
})

benSection.addEventListener("mouseleave", function(){
    console.log("something happened")
    benContent.classList.add("hidden")
    omadaName.classList.remove("hidden")
    toluName.classList.remove("hidden")
})
