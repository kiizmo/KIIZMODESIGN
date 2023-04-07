let buttonMenu = document.querySelector(".menu");
let menu = document.querySelector(".block-menu");
let hauteur = menu.offsetHeight;
let category0 = document.getElementsByClassName("category-name")[0];
let category1 = document.getElementsByClassName("category-name")[1];
let category2 = document.getElementsByClassName("category-name")[2];
let category3 = document.getElementsByClassName("category-name")[3];
let category4 = document.getElementsByClassName("category-name")[4];
let categoryBox = document.querySelector(".category")
 
buttonMenu.addEventListener('click', () => {
    menu.classList.toggle("active");
    category0.classList.toggle("active");
    category1.classList.toggle("active");
    category2.classList.toggle("active");
    category3.classList.toggle("active");
    category4.classList.toggle("active");
    categoryBox.classList.toggle("active")}
)

function Category() {
    let category = document.querySelectorAll(".category-work");
    console.log(category)

    category.style.left = "calc(560px - 100% - 13px)"
}

/* HOVER WORKS */

let viewportWidth = window.innerWidth;
console.log(viewportWidth)

if (viewportWidth > 720){
let sectionInterieur = document.querySelector(".interieur-section");
let imgInterieur = document.getElementsByClassName("work")[0];
let categoryInterieur = document.getElementsByClassName("category-section")[0];
let titleInterieur = document.getElementsByClassName("work-title")[0];

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
let titleLove = document.getElementsByClassName("work-title")[1];

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
let titleMelo = document.getElementsByClassName("work-title")[2];

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
let titlePorsche = document.getElementsByClassName("work-title")[3];

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
let titleStamina = document.getElementsByClassName("work-title")[4];

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
let titleBreakfast = document.getElementsByClassName("work-title")[5];

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