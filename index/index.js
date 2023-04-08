let buttonMenu = document.querySelector(".menu");
let menu = document.querySelector(".block-menu");
let hauteur = menu.offsetHeight;
let category0 = document.getElementsByClassName("category-name")[0];
let category1 = document.getElementsByClassName("category-name")[1];
let category2 = document.getElementsByClassName("category-name")[2];
let category3 = document.getElementsByClassName("category-name")[3];
let category4 = document.getElementsByClassName("category-name")[4];
let categoryBox = document.querySelector(".category");
let title = document.querySelector(".name-nav")
 
buttonMenu.addEventListener('click', () => {
    menu.classList.toggle("active");
    category0.classList.toggle("active");
    category1.classList.toggle("active");
    category2.classList.toggle("active");
    category3.classList.toggle("active");
    category4.classList.toggle("active");
    categoryBox.classList.toggle("active");
    title.classList.toggle("active")}
)


let titleInterieur = document.getElementsByClassName("work-title")[0];
let titleLove = document.getElementsByClassName("work-title")[1];
let titleMelo = document.getElementsByClassName("work-title")[2];
let titlePorsche = document.getElementsByClassName("work-title")[3];
let titleStamina = document.getElementsByClassName("work-title")[4];
let titleBreakfast = document.getElementsByClassName("work-title")[5];
/* HOVER WORKS */

let viewportWidth = window.innerWidth;

if (viewportWidth > 720){
let sectionInterieur = document.querySelector(".interieur-section");
let imgInterieur = document.getElementsByClassName("work")[0];
let categoryInterieur = document.getElementsByClassName("category-section")[0];

sectionInterieur.addEventListener('mouseover', () => {

    imgInterieur.classList.add("hover");
    categoryInterieur.classList.add("hover");
    titleInterieur.classList.add("hover")}
)

sectionInterieur.addEventListener('mouseout', () => {
    if (screen.width > 720){
    imgInterieur.classList.remove("hover");
    categoryInterieur.classList.remove("hover");
    titleInterieur.classList.remove("hover")}
    else {return}
})

let sectionLove = document.querySelector(".love-section");
let imgLove = document.getElementsByClassName("work")[1];
let categoryLove = document.getElementsByClassName("category-section")[1];


sectionLove.addEventListener('mouseover', () => {
    imgLove.classList.add("hover");
    categoryLove.classList.add("hover");
    titleLove.classList.add("hover")}
)

sectionLove.addEventListener('mouseout', () => {
    imgLove.classList.remove("hover");
    categoryLove.classList.remove("hover");
    titleLove.classList.remove("hover")}
)

let sectionMelo = document.querySelector(".melo-section");
let imgMelo = document.getElementsByClassName("work")[2];
let categoryMelo = document.getElementsByClassName("category-section")[2];


sectionMelo.addEventListener('mouseover', () => {
    imgMelo.classList.add("hover");
    categoryMelo.classList.add("hover");
    titleMelo.classList.add("hover")}
)

sectionMelo.addEventListener('mouseout', () => {
    imgMelo.classList.remove("hover");
    categoryMelo.classList.remove("hover");
    titleMelo.classList.remove("hover")}
    )

let sectionPorsche = document.querySelector(".porsche-section");
let imgPorsche = document.getElementsByClassName("work")[3];
let categoryPorsche = document.getElementsByClassName("category-section")[3];


sectionPorsche.addEventListener('mouseover', () => {
    imgPorsche.classList.add("hover");
    categoryPorsche.classList.add("hover");
    titlePorsche.classList.add("hover")}
)

sectionPorsche.addEventListener('mouseout', () => {
    imgPorsche.classList.remove("hover");
    categoryPorsche.classList.remove("hover");
    titlePorsche.classList.remove("hover")}
)

let sectionStamina = document.querySelector(".stamina-section");
let imgStamina = document.getElementsByClassName("work")[4];
let categoryStamina = document.getElementsByClassName("category-section")[4];


sectionStamina.addEventListener('mouseover', () => {
    imgStamina.classList.add("hover");
    categoryStamina.classList.add("hover");
    titleStamina.classList.add("hover")}
)

sectionStamina.addEventListener('mouseout', () => {
    imgStamina.classList.remove("hover");
    categoryStamina.classList.remove("hover");
    titleStamina.classList.remove("hover")}
)

let sectionBreakfast = document.querySelector(".breakfast-section");
let imgBreakfast = document.getElementsByClassName("work")[5];
let categoryBreakfast = document.getElementsByClassName("category-section")[5];


sectionBreakfast.addEventListener('mouseover', () => {
    imgBreakfast.classList.add("hover");
    categoryBreakfast.classList.add("hover");
    titleBreakfast.classList.add("hover")}
)

sectionBreakfast.addEventListener('mouseout', () => {
    imgBreakfast.classList.remove("hover");
    categoryBreakfast.classList.remove("hover");
    titleBreakfast.classList.remove("hover")}
)}

else {}

/* LIGHT MODE */

let mode = 0; 
let toggleBtn = document.querySelector(".toggle-mode");
let body = document.querySelector("body");
let nav = document.querySelector("nav");
let nameTitle = document.querySelector("h1");
let name2 = document.querySelector("h2")
let credit = document.querySelector(".name")
let projectBtn = document.querySelector(".more");

let customCursor = document.querySelector("#custom-cursor");


document.addEventListener('mousemove', e => {
  customCursor.style.left = e.clientX + 'px';
  customCursor.style.top = e.clientY + 'px';
});


toggleBtn.addEventListener('click', () => {

    if (mode === 0){
        mode++;
        buttonMenu.classList.add("light");
        menu.classList.add("light");
        body.classList.add("light");
        nav.classList.add("light");
        title.classList.add("light");
        nameTitle.classList.add("light");
        name2.classList.add("light");
        credit.classList.add("light");
        projectBtn.classList.add("light");
        titleInterieur.classList.add("light");
        titleLove.classList.add("light");
        titleMelo.classList.add("light");
        titlePorsche.classList.add("light");
        titleStamina.classList.add("light");
        titleBreakfast.classList.add("light");
        customCursor.classList.add("light")
        
        console.log(mode);
        console.log(titleInterieur)
    }

    else if (mode === 1){
        mode--;
        buttonMenu.classList.remove("light");
        menu.classList.remove("light");
        body.classList.remove("light");
        nav.classList.remove("light");
        title.classList.remove("light");
        nameTitle.classList.remove("light");
        name2.classList.remove("light");
        titleInterieur.classList.remove("light");
        titleLove.classList.remove("light");
        titleMelo.classList.remove("light");
        titlePorsche.classList.remove("light");
        titleStamina.classList.remove("light");
        titleBreakfast.classList.remove("light");
        credit.classList.remove("light");
        projectBtn.classList.remove("light");
        customCursor.classList.remove("light")
        console.log(mode)
        console.log(titleInterieur)
    }
})

/* CURSOR CUSTOM */
let menuOpener = document.querySelector("button.menu");
let sectionBreakfast = document.querySelector(".breakfast-section");
let sectionStamina = document.querySelector(".stamina-section");
let sectionPorsche = document.querySelector(".porsche-section");
let sectionMelo = document.querySelector(".melo-section");
let sectionLove = document.querySelector(".love-section");
let sectionInterieur = document.querySelector(".interieur-section");

sectionBreakfast.addEventListener('mouseover', () => {
    customCursor.style.transform = 'scale(1.5)'
})

sectionBreakfast.addEventListener('mouseout', () => {
    customCursor.style.transform = 'scale(1)'
})

sectionInterieur.addEventListener('mouseover', () => {
    customCursor.style.transform = 'scale(1.5)'
})

sectionInterieur.addEventListener('mouseout', () => {
    customCursor.style.transform = 'scale(1)'
})

sectionLove.addEventListener('mouseover', () => {
    customCursor.style.transform = 'scale(1.5)'
})

sectionLove.addEventListener('mouseout', () => {
    customCursor.style.transform = 'scale(1)'
})

sectionMelo.addEventListener('mouseover', () => {
    customCursor.style.transform = 'scale(1.5)'
})

sectionMelo.addEventListener('mouseout', () => {
    customCursor.style.transform = 'scale(1)'
})

sectionPorsche.addEventListener('mouseover', () => {
    customCursor.style.transform = 'scale(1.5)'
})

sectionPorsche.addEventListener('mouseout', () => {
    customCursor.style.transform = 'scale(1)'
})

sectionStamina.addEventListener('mouseover', () => {
    customCursor.style.transform = 'scale(1.5)'
})

sectionStamina.addEventListener('mouseout', () => {
    customCursor.style.transform = 'scale(1)'
})

menuOpener.addEventListener('mouseover', () => {
    customCursor.style.transform = 'scale(3)'
})

menuOpener.addEventListener('mouseout', () => {
    customCursor.style.transform = 'scale(1)'
})

projectBtn.addEventListener('mouseover', () => {
    customCursor.style.transform = 'scale(3)'
})

projectBtn.addEventListener('mouseout', () => {
    customCursor.style.transform = 'scale(1)'
})

toggleBtn.addEventListener('mouseover', () => {
    customCursor.style.transform = 'scale(1.5)'
})

toggleBtn.addEventListener('mouseout', () => {
    customCursor.style.transform = 'scale(1)'
})

document.addEventListener('mousedown', () => {
    customCursor.style.transform = 'scale(0.2)'
})

document.addEventListener('mouseup', () => {
    customCursor.style.transform = 'scale(1)'
})