let items = [
 {
    photo: "photo-1.jpg",
    title: "qalenvagen",
    date: "7 may 2020",
 },
 {
    photo: "photo-2.jpg",
    title: "land rover",
    date: "24 may 2022"
 },
 {
    photo: "photo-3.jpg",
    title: "bmw sport",
    date: "21 may 2024",
 }
]

let activeIndex = 0;

const createUIElement = () => {
    let silder =  items[activeIndex];
    let photo = document.querySelector("#photo")
    let title = document.querySelector("#title")    
    let date = document.querySelector("#date")    

    photo.src =  "./img/" + silder.photo;
    title.innerText = silder.title;
    date.innerText = silder.date;

}

let textSlider = () => {
    if (activeIndex+1 < items.length) {
        activeIndex++;
    }
    else {
        activeIndex = 0;
    }
    createUIElement()

}
document.querySelector("#btnNext").addEventListener("click", textSlider )

document.querySelector("#btnPrev").addEventListener("click", function ()  {
     if(activeIndex > 0) {
        activeIndex--;
     } 
     else {
        activeIndex = items.length - 1;
     }
     createUIElement()

});
let silderInterval = setInterval(() => {
    textSlider()
}, 1000)

document.querySelector("#slider-Content").addEventListener("mouseenter", function () {
    clearInterval(silderInterval)
})

document.querySelector("#slider-Content").addEventListener("mouseleave", function () {
    silderInterval = setInterval(() => {
        textSlider()
    }, 1000)
    
})

createUIElement()
