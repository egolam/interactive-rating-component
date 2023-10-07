const ratingButton = document.querySelectorAll("#rate");
const submitBtn = document.querySelector(".btn-submit");
const mainFlex = document.querySelector(".main-flex");
const thankYouFlex = document.querySelector(".thankyou-flex");
const ratingGiven = document.querySelector(".rating-given");

let prevButton = null;


ratingButton.forEach(rate => {
    rate.addEventListener("click", (e) =>{    
        
        e.target.classList.add("rate-active");

        if(prevButton !== null){
            prevButton.classList.remove("rate-active");
        }

        prevButton = e.target;

        rateSelected = e.target.textContent;

    })
});


submitBtn.addEventListener("click", (e) =>{

    mainFlex.style.display = "none";
    thankYouFlex.style.display = "flex";

    ratingGiven.textContent = rateSelected;

})

