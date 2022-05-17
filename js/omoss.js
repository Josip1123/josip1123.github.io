const readMore = document.querySelectorAll('.read-more');

readMore.forEach(function (readMore){
    readMore.addEventListener("click", () => {
        readMore.classList.toggle("show-p");
    })
})


const btn1 = document.querySelector('#btn1');
const firstContact = document.querySelector('#contact1');



firstContact.onclick = function(){
    if (btn1.innerHTML === "Läs mer om Chrsitian") {
        btn1.innerHTML = "Dölj";
    } else {
        btn1.innerHTML = "Läs mer om Chrsitian";
    }
}

let btn2 = document.querySelector('#btn2');
let secondContact = document.querySelector('#contact2');

secondContact.onclick = function(){
        if (btn2.innerHTML === "Läs mer om Sofia") {
            btn2.innerHTML = "Dölj";
        } else {
            btn2.innerHTML = "Läs mer om Sofia";
        }
}

let btn3 = document.querySelector('#btn3');
let thirdContact = document.querySelector('#contact3');

thirdContact.onclick = function(){
        if (btn3.innerHTML === "Läs mer om Kristin") {
            btn3.innerHTML = "Dölj";
        } else {
            btn3.innerHTML = "Läs mer om Kristin";
        }
}