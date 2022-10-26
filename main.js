const mainContainer = document.querySelector(".main-container");
const thankYouContainer = document.querySelector(".thank-you-container");
const btnRating = document.getElementsByClassName("btn-select");
const btnSubmit = document.querySelector(".btn-submit");
const rating = document.querySelector(".rating");
const arrBtn = Array.from(btnRating);
const body = document.querySelector("body")

arrBtn.forEach(function(ele) {
    ele.addEventListener("click", function(e) {
        if(this.classList.contains("selected")){
            this.classList.remove("selected")
            rating.textContent = `You selected out of 5`
        }else {
            for(let i = 0; i < arrBtn.length; i++) {
                if(arrBtn[i].classList.contains("selected")) {
                    arrBtn[i].classList.remove("selected")
                    rating.textContent = `You selected out of 5`
                }
            }
            this.classList.add("selected");
            rating.textContent = `You selected ${this.textContent} out of 5`
        }
    });
});

btnSubmit.addEventListener("click", function(e) {
    for(let i = 0; i < arrBtn.length; i++) {
        if(arrBtn[i].classList.contains("selected")) {
            
        }
    }
    mainContainer.style.display = "none";
    thankYouContainer.style.display= "block"
})

window.addEventListener("click", function(e) {
    if(e.target === body &&  thankYouContainer.style.display === "block") {
        mainContainer.style.display = "block";
        thankYouContainer.style.display= "none";
    }
})